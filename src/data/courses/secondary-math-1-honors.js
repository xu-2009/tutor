export default {
  "id": "secondary-math-1-honors",
  "title": "Secondary Math I Honors",
  "titleZh": "中学数学一（荣誉）",
  "subject": "math",
  "level": "Honors",
  "description": "Utah's honors first-year integrated mathematics course, following the Utah Core Standards: quantities and linear equations, functions, systems, arithmetic and geometric sequences, linear and exponential models, descriptive statistics, transformations and congruence, and coordinate geometry — algebra, geometry, and statistics woven together.",
  "descriptionZh": "犹他州荣誉级第一年整合数学课程，遵循犹他州核心标准（Utah Core Standards）：量与一次方程、函数、方程组、等差与等比数列、线性与指数模型、描述性统计、图形变换与全等、坐标几何——将代数、几何与统计融为一体。",
  "units": [
    {
      "id": "quantities-linear-relationships",
      "title": "Unit 1: Quantities and Linear Relationships",
      "titleZh": "第一单元：量与线性关系",
      "lessons": [
        {
          "id": "quantities-units-and-expressions",
          "title": "Quantities, Units, and Interpreting Expressions",
          "titleZh": "量、单位与解读表达式",
          "content": [
            {
              "type": "h2",
              "en": "Mathematics That Carries Units",
              "zh": "带单位的数学"
            },
            {
              "type": "p",
              "en": "In Secondary Math I we model the real world — the flow of the Provo River, the cost of a Utah ski pass, the population of Salt Lake County. Real quantities almost never come as bare numbers; they come with units: meters, dollars, hours, people. Choosing the right unit and tracking it through a calculation is the first skill of a mathematical modeler. A number without its unit is often meaningless: \"the answer is 60\" could mean 60 miles per hour on I-15 or 60 seconds — very different things.",
              "zh": "在中学数学一中，我们为现实世界建立模型——普罗沃河的流量、犹他滑雪通票的价格、盐湖县的人口。现实中的量几乎从不是光秃秃的数字，它们都带着单位：米、美元、小时、人。选择正确的单位并在计算中始终跟踪它，是建模者的第一项技能。没有单位的数往往毫无意义：\"答案是 60\" 可能指 I-15 高速公路上每小时 60 英里，也可能指 60 秒——二者天差地别。"
            },
            {
              "type": "h3",
              "en": "Dimensional Analysis and Unit Conversion",
              "zh": "量纲分析与单位换算"
            },
            {
              "type": "p",
              "en": "To convert units we multiply by conversion factors — fractions equal to $1$ because the top and bottom describe the same amount, such as $\\frac{1\\text{ km}}{1000\\text{ m}}$ or $\\frac{60\\text{ min}}{1\\text{ h}}$. We arrange each factor so the unit we want to cancel sits diagonally opposite itself, then cancel it like a common factor. This bookkeeping is called dimensional analysis, and the units themselves tell you whether you set the problem up correctly.",
              "zh": "换算单位时，我们乘以换算因子——这些分数等于 $1$，因为分子和分母描述的是同一个量，例如 $\\frac{1\\text{ km}}{1000\\text{ m}}$ 或 $\\frac{60\\text{ min}}{1\\text{ h}}$。我们让每个因子中要约去的单位处于对角相反的位置，然后像约去公因数一样把它约掉。这种记账方式称为量纲分析，单位本身会告诉你有没有列对式子。"
            },
            {
              "type": "math",
              "tex": "65\\ \\frac{\\text{mi}}{\\text{h}} \\times \\frac{1\\text{ h}}{60\\text{ min}} \\times \\frac{5280\\text{ ft}}{1\\text{ mi}} \\approx 5720\\ \\frac{\\text{ft}}{\\text{min}}"
            },
            {
              "type": "p",
              "en": "Notice how \"mi\" and \"h\" cancel, leaving exactly the units we wanted, ft per min. When a conversion has units left over that you did not intend, you know a factor is flipped.",
              "zh": "注意 \"mi\" 和 \"h\" 是如何约掉的，恰好剩下我们想要的单位——每分钟英尺数。如果换算后剩下的单位不是你想要的，就说明有一个因子被写反了。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A rate conversion",
                "zh": "例题 1：速率换算"
              },
              "problem": {
                "en": "A snowmaker at a Park City resort pumps water at $500$ gallons per minute. How many gallons is that per hour?",
                "zh": "帕克城度假村的一台造雪机以每分钟 $500$ 加仑的速度抽水。这相当于每小时多少加仑？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply by a factor that cancels minutes and introduces hours. Since $60$ minutes $= 1$ hour, use $\\frac{60\\text{ min}}{1\\text{ h}}$:",
                  "zh": "乘以一个能约去分钟并引入小时的因子。由于 $60$ 分钟 $= 1$ 小时，使用 $\\frac{60\\text{ min}}{1\\text{ h}}$："
                },
                {
                  "type": "math",
                  "tex": "500\\ \\frac{\\text{gal}}{\\text{min}} \\times \\frac{60\\text{ min}}{1\\text{ h}} = 30000\\ \\frac{\\text{gal}}{\\text{h}}"
                },
                {
                  "type": "p",
                  "en": "The machine moves $30{,}000$ gallons per hour. The \"min\" units cancel, confirming the setup.",
                  "zh": "这台机器每小时抽 $30{,}000$ 加仑。\"min\" 单位约掉了，说明列式正确。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: flipping a conversion factor. To go from minutes to hours you divide by $60$, so the factor must be $\\frac{1\\text{ h}}{60\\text{ min}}$. Always write the units in and cancel them — if the leftover units are wrong, flip the factor.",
              "zh": "常见错误：把换算因子写反。从分钟换成小时要除以 $60$，因此因子必须是 $\\frac{1\\text{ h}}{60\\text{ min}}$。一定要把单位写出来并约分——如果剩下的单位不对，就把因子倒过来。"
            },
            {
              "type": "h3",
              "en": "Accuracy, Precision, and Reporting a Measurement",
              "zh": "准确度、精密度与测量结果的报告"
            },
            {
              "type": "p",
              "en": "A measured quantity can never be reported with more precision than the tool that produced it. If you measure a table with a ruler marked in centimeters, reporting $84.3271$ cm is dishonest — the extra digits are noise, not information. Choose a level of accuracy appropriate to the measurement and to the purpose: a carpenter needs the nearest millimeter, a road-trip estimate needs only the nearest ten miles.",
              "zh": "报告一个测量值时，其精密度绝不能超过测量工具本身。如果你用以厘米为刻度的尺子量桌子，报告 $84.3271$ 厘米是不诚实的——多余的数字是噪声，而不是信息。要根据测量本身和用途选择合适的准确度：木匠需要精确到毫米，而估算一次公路旅行只需精确到最近的十英里。"
            },
            {
              "type": "p",
              "en": "A useful guideline: when you multiply or divide measurements, the result should not claim more significant figures than the least precise measurement you started with. Rounding at the very end (not in the middle) keeps answers honest without accumulating rounding error.",
              "zh": "一条实用的准则：当你把测量值相乘或相除时，结果所含的有效数字不应多于最初最不精密的那个测量值。在最后一步（而不是中间步骤）取近似，能让答案既诚实又不会累积舍入误差。"
            },
            {
              "type": "note",
              "en": "Test tip: watch the phrase \"round to the nearest ___.\" Reporting $12.5$ when a problem says \"to the nearest whole number\" loses credit even if your arithmetic is perfect. Match the precision the question asks for — no more, no less.",
              "zh": "考试提示：注意 \"精确到最近的 ___\" 这一措辞。如果题目要求 \"精确到整数\"，却报告 $12.5$，即使运算完全正确也会失分。让精密度与题目要求一致——不多也不少。"
            },
            {
              "type": "h3",
              "en": "Reading the Parts of an Expression",
              "zh": "解读表达式的各个部分"
            },
            {
              "type": "p",
              "en": "An algebraic expression is built from terms (parts added or subtracted), each of which is a product of factors, and a coefficient is the numerical factor multiplying the variables. In a model, each of these parts carries meaning. Consider the cost of renting a paddleboard at Bear Lake: $C = 15 + 8h$. Here $15$ is a fixed fee (a constant term, in dollars), $8$ is the coefficient — the rate in dollars per hour — and $8h$ is the variable term that grows with the number of hours $h$.",
              "zh": "一个代数表达式由项（被加或被减的部分）构成，每一项是若干因子的乘积，而系数是与变量相乘的数字因子。在模型中，这些部分都有含义。以在熊湖租桨板的费用为例：$C = 15 + 8h$。这里 $15$ 是固定费用（常数项，单位是美元），$8$ 是系数——即以美元每小时为单位的速率——而 $8h$ 是随小时数 $h$ 增长的变量项。"
            },
            {
              "type": "p",
              "en": "Interpreting an expression means explaining what each part does without necessarily computing anything. If a price is modeled by $p(1 - 0.20)$, you can read the factor $(1 - 0.20) = 0.80$ as \"paying $80\\%$ of the price,\" i.e. a $20\\%$ discount, just by looking at the structure.",
              "zh": "解读一个表达式，意味着说明每一部分的作用，而不一定要真的去计算。如果某价格由 $p(1 - 0.20)$ 表示，你只需观察其结构，就能把因子 $(1 - 0.20) = 0.80$ 读作 \"支付价格的 $80\\%$\"，也就是打八折（$20\\%$ 的折扣）。"
            },
            {
              "type": "h3",
              "en": "From Words to Symbols, and Evaluating",
              "zh": "从文字到符号，以及求值"
            },
            {
              "type": "p",
              "en": "Modeling starts by translating a verbal description into symbols. Watch order with subtraction and division: \"$7$ less than twice a number\" is $2n - 7$ (not $7 - 2n$), and \"the number of feet in $y$ yards\" is $3y$. Once you have an expression, you evaluate it by substituting a value and applying the order of operations — putting substituted values in parentheses, especially negatives.",
              "zh": "建模从把文字描述翻译成符号开始。做减法和除法时要注意顺序：\"某数的两倍再少 $7$\" 是 $2n - 7$（不是 $7 - 2n$），而 \"$y$ 码等于多少英尺\" 是 $3y$。有了表达式之后，通过代入数值并按运算顺序计算来求值——把代入的值加上括号，尤其是负数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Interpreting and evaluating a model",
                "zh": "例题 2：解读并求值一个模型"
              },
              "problem": {
                "en": "A phone plan costs $C = 25 + 0.10m$ dollars, where $m$ is the number of minutes of international calling. Interpret each part, then find the cost for $m = 40$ minutes.",
                "zh": "某话费套餐的费用为 $C = 25 + 0.10m$ 美元，其中 $m$ 是国际通话的分钟数。解读每一部分，然后求 $m = 40$ 分钟时的费用。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The constant term $25$ is the fixed monthly fee in dollars. The coefficient $0.10$ is the rate: $\\$0.10$ per minute. The term $0.10m$ is the variable calling charge.",
                  "zh": "常数项 $25$ 是固定的月费（美元）。系数 $0.10$ 是速率：每分钟 $\\$0.10$。项 $0.10m$ 是随通话时长变化的费用。"
                },
                {
                  "type": "p",
                  "en": "Substitute $m = 40$:",
                  "zh": "代入 $m = 40$："
                },
                {
                  "type": "math",
                  "tex": "C = 25 + 0.10(40) = 25 + 4 = 29"
                },
                {
                  "type": "p",
                  "en": "The plan costs $\\$29$ that month.",
                  "zh": "那个月的套餐费用是 $\\$29$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: confusing a coefficient with a constant. In $25 + 0.10m$, the $0.10$ is a rate that gets multiplied by minutes, while $25$ is a one-time charge. Reading them backward — treating $25$ as a per-minute rate — makes the model nonsense.",
              "zh": "常见错误：把系数和常数搞混。在 $25 + 0.10m$ 中，$0.10$ 是要乘以分钟数的速率，而 $25$ 是一次性收费。若把二者读反——把 $25$ 当作每分钟的速率——模型就变得毫无意义。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In the model $C = 40 + 12t$ for the cost (in dollars) of renting a kayak for $t$ hours, what does the coefficient $12$ represent?",
                "zh": "在租皮划艇 $t$ 小时费用（美元）的模型 $C = 40 + 12t$ 中，系数 $12$ 表示什么？"
              },
              "choices": [
                "A one-time fixed fee of $\\$12$ / 一次性固定费用 $\\$12$",
                "The cost per hour, $\\$12$ per hour / 每小时费用，$\\$12$/小时",
                "The total cost / 总费用",
                "The number of hours / 小时数"
              ],
              "answer": 1,
              "explanation": {
                "en": "The coefficient $12$ multiplies the variable $t$ (hours), so it is a rate: $\\$12$ per hour. Choice A describes the constant $40$, the fixed fee — a common mix-up between the coefficient and the constant term.",
                "zh": "系数 $12$ 与变量 $t$（小时）相乘，因此它是一个速率：每小时 $\\$12$。选项 A 描述的是常数 $40$，即固定费用——这正是把系数与常数项搞混的典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which conversion factor correctly changes a length in inches to feet?",
                "zh": "哪个换算因子能正确地把以英寸计的长度换算成英尺？"
              },
              "choices": [
                "$\\frac{12\\text{ in}}{1\\text{ ft}}$",
                "$\\frac{1\\text{ in}}{12\\text{ ft}}$",
                "$\\frac{1\\text{ ft}}{12\\text{ in}}$",
                "$\\frac{12\\text{ ft}}{1\\text{ in}}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "To cancel inches they must appear in the denominator, and since $12$ in $= 1$ ft, the factor is $\\frac{1\\text{ ft}}{12\\text{ in}}$. Choice A cancels inches but converts feet to inches (the wrong direction).",
                "zh": "要约去英寸，英寸必须出现在分母上；又因为 $12$ 英寸 $= 1$ 英尺，所以因子是 $\\frac{1\\text{ ft}}{12\\text{ in}}$。选项 A 虽然能约去英寸，但它是把英尺换成英寸（方向反了）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A digital scale reads to the nearest $0.1$ gram. Which reported mass is stated with an appropriate level of precision?",
                "zh": "一台电子秤精确到 $0.1$ 克。下列哪个报告的质量精密度是恰当的？"
              },
              "choices": [
                "$47.8236$ g",
                "$47.8$ g",
                "$48$ g rounded because decimals are unnecessary / 因为小数不必要而四舍五入为 $48$ g",
                "$47.80000$ g"
              ],
              "answer": 1,
              "explanation": {
                "en": "The scale resolves tenths of a gram, so $47.8$ g matches the tool exactly. Choice A invents digits the scale cannot measure, and $47.80000$ falsely claims precision to hundred-thousandths.",
                "zh": "这台秤能分辨到十分之一克，因此 $47.8$ g 恰好与工具匹配。选项 A 编造了秤无法测量的数位，而 $47.80000$ 则谎称精确到了十万分之一。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Convert $3$ hours into seconds. Give your answer as an integer number of seconds.",
                "zh": "把 $3$ 小时换算成秒。请以整数秒作答。"
              },
              "answer": "10800",
              "accept": [
                "10,800",
                "10800 s",
                "10800 seconds"
              ],
              "explanation": {
                "en": "Multiply by factors that cancel hours: $3\\text{ h} \\times \\frac{60\\text{ min}}{1\\text{ h}} \\times \\frac{60\\text{ s}}{1\\text{ min}} = 3 \\times 3600 = 10800$ seconds.",
                "zh": "乘以能约去小时的因子：$3\\text{ h} \\times \\frac{60\\text{ min}}{1\\text{ h}} \\times \\frac{60\\text{ s}}{1\\text{ min}} = 3 \\times 3600 = 10800$ 秒。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate the expression $8 + 3x$ when $x = -4$. Give an integer.",
                "zh": "当 $x = -4$ 时，求表达式 $8 + 3x$ 的值。请以整数作答。"
              },
              "answer": "-4",
              "accept": [
                "-4.0",
                "−4"
              ],
              "explanation": {
                "en": "Substitute with parentheses: $8 + 3(-4) = 8 + (-12) = -4$. A common error is $8 + 3(-4) = 8 - 12 = -4$ done correctly, but writing $3(-4) = 12$ (dropping the sign) gives the wrong value $20$.",
                "zh": "用括号代入：$8 + 3(-4) = 8 + (-12) = -4$。常见错误是把 $3(-4)$ 算成 $12$（丢了负号），从而得到错误的 $20$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Translate into an expression: \"$5$ less than the product of a number $n$ and $4$.\"",
                "zh": "把下面这句话翻译成表达式：\"某数 $n$ 与 $4$ 的乘积再少 $5$。\""
              },
              "choices": [
                "$5 - 4n$",
                "$4n - 5$",
                "$4(n - 5)$",
                "$5 - 4 + n$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The product is $4n$; \"$5$ less than\" that means subtract $5$ from it, giving $4n - 5$. Choice A reverses the subtraction — \"$5$ less than $x$\" is $x - 5$, not $5 - x$.",
                "zh": "乘积是 $4n$；\"再少 $5$\" 表示从中减去 $5$，得到 $4n - 5$。选项 A 把减法的顺序写反了——\"比 $x$ 少 $5$\" 是 $x - 5$，而不是 $5 - x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A car travels at $60$ miles per hour. Modeling problem: how many feet does it travel in one second? Use $1$ mile $= 5280$ feet. Round to the nearest whole number of feet.",
                "zh": "一辆汽车以每小时 $60$ 英里行驶。建模问题：它一秒钟行驶多少英尺？取 $1$ 英里 $= 5280$ 英尺。请四舍五入到最近的整数英尺。"
              },
              "answer": "88",
              "accept": [
                "88 ft",
                "88 feet"
              ],
              "explanation": {
                "en": "$60\\ \\frac{\\text{mi}}{\\text{h}} \\times \\frac{5280\\text{ ft}}{1\\text{ mi}} \\times \\frac{1\\text{ h}}{3600\\text{ s}} = \\frac{316800}{3600} = 88$ feet per second. The units mi and h cancel, leaving ft per s.",
                "zh": "$60\\ \\frac{\\text{mi}}{\\text{h}} \\times \\frac{5280\\text{ ft}}{1\\text{ mi}} \\times \\frac{1\\text{ h}}{3600\\text{ s}} = \\frac{316800}{3600} = 88$ 英尺每秒。单位 mi 和 h 约掉了，剩下英尺每秒。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A store lists a jacket at price $p$ dollars, then applies a $25\\%$ discount and afterward adds $6\\%$ sales tax. Which expression gives the final price, and what does the factor $0.75$ mean?",
                "zh": "荣誉挑战：某店的夹克标价为 $p$ 美元，先打七五折（$25\\%$ 折扣），之后再加 $6\\%$ 销售税。下列哪个表达式给出最终价格，且因子 $0.75$ 表示什么？"
              },
              "choices": [
                "$p(0.75)(1.06)$; $0.75$ means paying $75\\%$ of the price after a $25\\%$ discount / $p(0.75)(1.06)$；$0.75$ 表示打折后支付原价的 $75\\%$",
                "$p(0.25)(0.06)$; $0.75$ means the discount amount / $p(0.25)(0.06)$；$0.75$ 表示折扣金额",
                "$p(1.25)(1.06)$; $0.75$ means a $75\\%$ increase / $p(1.25)(1.06)$；$0.75$ 表示上涨 $75\\%$",
                "$p - 0.75 - 1.06$; $0.75$ means $75$ cents off / $p - 0.75 - 1.06$；$0.75$ 表示减 $75$ 美分"
              ],
              "answer": 0,
              "explanation": {
                "en": "A $25\\%$ discount multiplies by $(1 - 0.25) = 0.75$ (you pay $75\\%$), and a $6\\%$ tax multiplies by $(1 + 0.06) = 1.06$, so the final price is $p(0.75)(1.06)$. Reading structure lets you interpret $0.75$ directly as \"pay $75\\%$.\" Choice B multiplies the discount and tax rates themselves, which has no meaning here.",
                "zh": "打 $25\\%$ 折扣相当于乘以 $(1 - 0.25) = 0.75$（你支付 $75\\%$），加 $6\\%$ 税相当于乘以 $(1 + 0.06) = 1.06$，因此最终价格是 $p(0.75)(1.06)$。读懂结构就能直接把 $0.75$ 解读为 \"支付 $75\\%$\"。选项 B 把折扣率与税率本身相乘，在此毫无意义。"
              }
            }
          ]
        },
        {
          "id": "linear-equations-and-inequalities",
          "title": "Creating and Solving Linear Equations and Inequalities",
          "titleZh": "建立与求解一元一次方程和不等式",
          "content": [
            {
              "type": "h2",
              "en": "Equations as Balanced Statements",
              "zh": "把方程看作平衡的等式"
            },
            {
              "type": "p",
              "en": "An equation says two expressions are equal. Solving it means finding every value of the variable that keeps the two sides balanced. The core principle is simple: whatever you do to one side you must do to the other, so the balance is preserved. In Secondary Math I we use this to answer real questions — how many hours of tutoring fit a budget, what temperature a formula predicts, how many tickets a club must sell to break even.",
              "zh": "方程表示两个表达式相等。解方程就是找出使两边保持平衡的所有变量值。核心原则很简单：你对一边做什么，就必须对另一边做同样的操作，以保持平衡。在中学数学一中，我们用它来回答现实问题——多少小时的辅导符合预算、某公式预测的温度是多少、社团要卖多少张票才能收支相抵。"
            },
            {
              "type": "h3",
              "en": "Solving Multi-Step Linear Equations",
              "zh": "求解多步一元一次方程"
            },
            {
              "type": "p",
              "en": "A reliable order for solving works from the outside in: (1) clear parentheses by distributing; (2) clear fractions by multiplying every term by the least common denominator; (3) combine like terms on each side; (4) collect variable terms on one side and constants on the other; (5) divide by the coefficient. When the variable appears on both sides, step 4 is where you move all of it to a single side.",
              "zh": "一个可靠的解题顺序是由外向内：(1) 用分配律去括号；(2) 每一项都乘以最小公分母以去分母；(3) 在每一边合并同类项；(4) 把变量项集中到一边、常数项集中到另一边；(5) 除以系数。当变量出现在两边时，就在第 (4) 步把它全部移到同一边。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Variables on both sides with distribution",
                "zh": "例题 1：两边含变量且需去括号"
              },
              "problem": {
                "en": "Solve $3(2x - 1) = 5x + 4$.",
                "zh": "解方程 $3(2x - 1) = 5x + 4$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute the $3$ on the left:",
                  "zh": "在左边用分配律展开 $3$："
                },
                {
                  "type": "math",
                  "tex": "6x - 3 = 5x + 4"
                },
                {
                  "type": "p",
                  "en": "Subtract $5x$ from both sides to collect the variable on the left, then add $3$:",
                  "zh": "两边同减 $5x$ 把变量集中到左边，再两边加 $3$："
                },
                {
                  "type": "math",
                  "tex": "x - 3 = 4 \\quad\\Rightarrow\\quad x = 7"
                },
                {
                  "type": "p",
                  "en": "Check: $3(2\\cdot 7 - 1) = 3(13) = 39$ and $5(7) + 4 = 39$. Both sides equal $39$, so $x = 7$ is correct.",
                  "zh": "检验：$3(2\\cdot 7 - 1) = 3(13) = 39$，且 $5(7) + 4 = 39$。两边都等于 $39$，因此 $x = 7$ 正确。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Clearing fractions",
                "zh": "例题 2：去分母"
              },
              "problem": {
                "en": "Solve $\\frac{x}{2} + \\frac{1}{3} = \\frac{5}{6}$.",
                "zh": "解方程 $\\frac{x}{2} + \\frac{1}{3} = \\frac{5}{6}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The least common denominator of $2$, $3$, and $6$ is $6$. Multiply every term by $6$:",
                  "zh": "$2$、$3$、$6$ 的最小公分母是 $6$。每一项都乘以 $6$："
                },
                {
                  "type": "math",
                  "tex": "6\\cdot\\frac{x}{2} + 6\\cdot\\frac{1}{3} = 6\\cdot\\frac{5}{6} \\quad\\Rightarrow\\quad 3x + 2 = 5"
                },
                {
                  "type": "p",
                  "en": "Then $3x = 3$, so $x = 1$.",
                  "zh": "于是 $3x = 3$，所以 $x = 1$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: when multiplying by the LCD to clear fractions, multiply EVERY term — including terms that have no fraction. Forgetting to multiply the $\\frac{1}{3}$ or a whole-number term is the number-one source of wrong answers here.",
              "zh": "常见错误：用最小公分母去分母时，要乘以每一项——包括本身没有分数的项。忘记乘 $\\frac{1}{3}$ 或某个整数项，是这里出错的头号原因。"
            },
            {
              "type": "p",
              "en": "Two special cases can appear. If the variable disappears and you get a true statement like $5 = 5$, every number works — infinitely many solutions. If you get a false statement like $5 = 8$, no number works — no solution. These are honors-level outcomes worth recognizing.",
              "zh": "可能出现两种特殊情况。如果变量消失，且得到像 $5 = 5$ 这样的真命题，则任何数都成立——有无穷多解。如果得到像 $5 = 8$ 这样的假命题，则没有数成立——无解。这些是值得辨认的荣誉级结论。"
            },
            {
              "type": "h3",
              "en": "Solving and Graphing Linear Inequalities",
              "zh": "求解并在数轴上表示一元一次不等式"
            },
            {
              "type": "p",
              "en": "Inequalities are solved with the same moves as equations, with one crucial exception: multiplying or dividing both sides by a negative number reverses the inequality symbol. A solution is a range of values, which we picture on a number line: an open circle for $<$ or $>$ (endpoint not included) and a closed circle for $\\le$ or $\\ge$ (endpoint included), with the ray shaded toward all the values that work.",
              "zh": "不等式的解法与方程相同，只有一个关键例外：两边同乘或同除以一个负数时，不等号方向要反过来。不等式的解是一段数值范围，我们用数轴来表示：$<$ 或 $>$ 用空心圆（不含端点），$\\le$ 或 $\\ge$ 用实心圆（含端点），并把射线朝所有满足条件的值的方向涂黑。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: An inequality with a sign flip",
                "zh": "例题 3：需要变号的不等式"
              },
              "problem": {
                "en": "Solve $-2x + 1 \\ge 9$ and describe its graph.",
                "zh": "解不等式 $-2x + 1 \\ge 9$ 并描述其图像。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Subtract $1$ from both sides:",
                  "zh": "两边同减 $1$："
                },
                {
                  "type": "math",
                  "tex": "-2x \\ge 8"
                },
                {
                  "type": "p",
                  "en": "Divide both sides by $-2$ and reverse the symbol:",
                  "zh": "两边同除以 $-2$，并把不等号方向反过来："
                },
                {
                  "type": "math",
                  "tex": "x \\le -4"
                },
                {
                  "type": "p",
                  "en": "On a number line, put a closed circle at $-4$ (because of $\\le$) and shade to the left toward all values less than or equal to $-4$.",
                  "zh": "在数轴上，在 $-4$ 处画实心圆（因为是 $\\le$），并向左涂黑，表示所有小于或等于 $-4$ 的值。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: the inequality flips only when you multiply or divide by a negative — NOT when you add or subtract a negative. $x + 3 < 5$ becomes $x < 2$ with no flip; only $-3x < 9$ flips to $x > -3$.",
              "zh": "考试提示：只有在乘以或除以负数时不等号才变向——加上或减去一个负数时并不变向。$x + 3 < 5$ 变为 $x < 2$，不变号；只有 $-3x < 9$ 才变为 $x > -3$。"
            },
            {
              "type": "h3",
              "en": "Literal Equations: Solving for a Variable",
              "zh": "文字方程：为某个变量求解"
            },
            {
              "type": "p",
              "en": "A literal equation (a formula) contains several letters, and \"solving for a variable\" means isolating that one letter using the same balancing moves, treating the other letters as if they were numbers. Rearranging formulas is essential in science and geometry — for instance, solving the perimeter formula for a side, or the temperature formula for the other scale.",
              "zh": "文字方程（即公式）含有多个字母，\"为某个变量求解\" 就是用同样的平衡操作把那一个字母单独分离出来，把其他字母当作数字处理。变换公式在科学和几何中不可或缺——例如从周长公式解出某条边，或从温度公式解出另一种温标。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Rearranging a formula",
                "zh": "例题 4：变换公式"
              },
              "problem": {
                "en": "The Celsius–Fahrenheit relationship is $F = \\frac{9}{5}C + 32$. Solve for $C$.",
                "zh": "摄氏与华氏的关系是 $F = \\frac{9}{5}C + 32$。求解 $C$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Subtract $32$ from both sides, then multiply by the reciprocal $\\frac{5}{9}$:",
                  "zh": "两边同减 $32$，再乘以倒数 $\\frac{5}{9}$："
                },
                {
                  "type": "math",
                  "tex": "F - 32 = \\frac{9}{5}C \\quad\\Rightarrow\\quad C = \\frac{5}{9}(F - 32)"
                },
                {
                  "type": "p",
                  "en": "Now the formula is ready to convert any Fahrenheit reading to Celsius.",
                  "zh": "现在这个公式可以把任意华氏读数换算成摄氏度了。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Modeling Real Constraints",
              "zh": "为现实约束建模"
            },
            {
              "type": "p",
              "en": "Word problems become equations or inequalities when you name a variable, translate the situation, solve, and — critically — check that the answer makes sense in context. A quantity of people or tickets must be a whole number; a length cannot be negative. Constraints such as \"at most,\" \"at least,\" and \"no more than\" signal inequalities: \"at most $\\$50$\" means $\\le 50$, and \"at least $12$\" means $\\ge 12$.",
              "zh": "当你设出变量、翻译情境、求解，并且关键地——检验答案在情境中是否合理时，应用题就变成了方程或不等式。人数或票数必须是整数；长度不能为负。诸如 \"最多\"、\"至少\"、\"不超过\" 等约束提示使用不等式：\"最多 $\\$50$\" 表示 $\\le 50$，\"至少 $12$\" 表示 $\\ge 12$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 5: A budget constraint",
                "zh": "例题 5：预算约束"
              },
              "problem": {
                "en": "A Utah student has $\\$50$ for a ski day. A lift ticket is $\\$38$ and hot cocoa costs $\\$3$ each. How many cups can the student buy? Model it, solve, and check.",
                "zh": "一名犹他学生有 $\\$50$ 用于滑雪。缆车票 $\\$38$，热可可每杯 $\\$3$。这名学生能买几杯？请建模、求解并检验。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $c$ be the number of cups. Total spending must be at most $\\$50$:",
                  "zh": "设 $c$ 为可可的杯数。总花费必须不超过 $\\$50$："
                },
                {
                  "type": "math",
                  "tex": "38 + 3c \\le 50"
                },
                {
                  "type": "p",
                  "en": "Subtract $38$: $3c \\le 12$, so $c \\le 4$. Since $c$ must be a whole number of cups, the student can buy at most $4$ cups.",
                  "zh": "两边减 $38$：$3c \\le 12$，所以 $c \\le 4$。由于 $c$ 必须是整数杯，学生最多能买 $4$ 杯。"
                },
                {
                  "type": "p",
                  "en": "Check: $38 + 3(4) = 50 \\le 50$. ✓ Buying $5$ cups would cost $53$, over budget, so $4$ is the maximum.",
                  "zh": "检验：$38 + 3(4) = 50 \\le 50$。✓ 买 $5$ 杯要花 $53$，超出预算，所以 $4$ 杯是最大值。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: skipping the context check. Algebra might give $c \\le 4.7$, but you cannot buy $4.7$ cups — round DOWN to $4$ because going up would break the budget. Always ask whether the mathematical answer fits the real situation.",
              "zh": "常见错误：跳过情境检验。代数也许算出 $c \\le 4.7$，但你不能买 $4.7$ 杯——要向下取整为 $4$，因为向上取整会超预算。永远要问：数学答案是否符合现实情境。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Solve $4x - 7 = 2x + 5$.",
                "zh": "解方程 $4x - 7 = 2x + 5$。"
              },
              "choices": [
                "$x = 6$",
                "$x = 3$",
                "$x = 1$",
                "$x = -6$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Subtract $2x$: $2x - 7 = 5$. Add $7$: $2x = 12$, so $x = 6$. A common error is subtracting $7$ before moving the $2x$, which tangles the constants — collect variables first.",
                "zh": "两边减 $2x$：$2x - 7 = 5$。加 $7$：$2x = 12$，所以 $x = 6$。常见错误是先减 $7$ 再移 $2x$，把常数搞乱——应先集中变量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which step is required to solve $-5x > 20$ correctly?",
                "zh": "正确求解 $-5x > 20$ 需要哪一步？"
              },
              "choices": [
                "Divide by $-5$ and keep the symbol: $x > -4$ / 除以 $-5$ 并保持不等号：$x > -4$",
                "Divide by $-5$ and reverse the symbol: $x < -4$ / 除以 $-5$ 并反转不等号：$x < -4$",
                "Divide by $5$: $x > 4$ / 除以 $5$：$x > 4$",
                "Add $5$ to both sides: $x > 25$ / 两边加 $5$：$x > 25$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Dividing both sides by the negative number $-5$ reverses $>$ into $<$, giving $x < -4$. Choice A forgets to flip the symbol — the single most common inequality error.",
                "zh": "两边同除以负数 $-5$ 会把 $>$ 变为 $<$，得到 $x < -4$。选项 A 忘记变号——这是不等式中最常见的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\frac{x}{4} - 2 = 3$ for $x$. Give an integer.",
                "zh": "解方程 $\\frac{x}{4} - 2 = 3$ 求 $x$。请以整数作答。"
              },
              "answer": "20",
              "accept": [
                "20.0"
              ],
              "explanation": {
                "en": "Add $2$ to both sides: $\\frac{x}{4} = 5$. Multiply both sides by $4$: $x = 20$. Check: $\\frac{20}{4} - 2 = 5 - 2 = 3$. ✓",
                "zh": "两边加 $2$：$\\frac{x}{4} = 5$。两边乘 $4$：$x = 20$。检验：$\\frac{20}{4} - 2 = 5 - 2 = 3$。✓"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve the literal equation $P = 2l + 2w$ for $w$.",
                "zh": "在文字方程 $P = 2l + 2w$ 中解出 $w$。"
              },
              "choices": [
                "$w = P - 2l$",
                "$w = \\frac{P - 2l}{2}$",
                "$w = \\frac{P}{2} - l$ only if divided wrong / 只有除错时才是 $w = \\frac{P}{2} - l$",
                "$w = 2P - 2l$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Subtract $2l$: $P - 2l = 2w$. Divide every term by $2$: $w = \\frac{P - 2l}{2}$. Choice A forgets to divide by $2$. (Note $\\frac{P - 2l}{2}$ also equals $\\frac{P}{2} - l$, but choice B is the cleanly written form.)",
                "zh": "两边减 $2l$：$P - 2l = 2w$。每一项除以 $2$：$w = \\frac{P - 2l}{2}$。选项 A 忘了除以 $2$。（注意 $\\frac{P - 2l}{2}$ 也等于 $\\frac{P}{2} - l$，但选项 B 是写得更规范的形式。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $2(3x + 4) = 5x + 11$ for $x$. Give an integer.",
                "zh": "解方程 $2(3x + 4) = 5x + 11$ 求 $x$。请以整数作答。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Distribute: $6x + 8 = 5x + 11$. Subtract $5x$: $x + 8 = 11$. Subtract $8$: $x = 3$. Check: $2(3\\cdot3+4)=2(13)=26$ and $5(3)+11=26$. ✓",
                "zh": "去括号：$6x + 8 = 5x + 11$。减 $5x$：$x + 8 = 11$。减 $8$：$x = 3$。检验：$2(3\\cdot3+4)=2(13)=26$，$5(3)+11=26$。✓"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many solutions does $3(x + 2) = 3x + 6$ have?",
                "zh": "方程 $3(x + 2) = 3x + 6$ 有多少个解？"
              },
              "choices": [
                "Exactly one solution / 恰好一个解",
                "Infinitely many solutions / 无穷多个解",
                "No solution / 无解",
                "Exactly two solutions / 恰好两个解"
              ],
              "answer": 1,
              "explanation": {
                "en": "Distributing the left side gives $3x + 6 = 3x + 6$. The variable cancels and leaves the true statement $6 = 6$, so every real number is a solution — infinitely many. If it had reduced to a false statement, there would be no solution.",
                "zh": "把左边展开得到 $3x + 6 = 3x + 6$。变量消去，剩下真命题 $6 = 6$，因此每个实数都是解——有无穷多个。如果化简后得到假命题，则无解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Modeling problem: A gym charges a $\\$20$ sign-up fee plus $\\$15$ per month. For how many whole months can a member stay within a budget of $\\$140$? Give the greatest whole number of months.",
                "zh": "建模问题：某健身房收取 $\\$20$ 注册费，外加每月 $\\$15$。会员在 $\\$140$ 预算内最多能维持几个整月？请给出最大的整数月数。"
              },
              "answer": "8",
              "accept": [
                "8 months",
                "8 个月"
              ],
              "explanation": {
                "en": "Model: $20 + 15m \\le 140$. Subtract $20$: $15m \\le 120$, so $m \\le 8$. Since months are whole numbers, the greatest is $8$. Check: $20 + 15(8) = 140 \\le 140$. ✓",
                "zh": "建模：$20 + 15m \\le 140$。减 $20$：$15m \\le 120$，所以 $m \\le 8$。由于月数为整数，最大是 $8$。检验：$20 + 15(8) = 140 \\le 140$。✓"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Solve $\\frac{2x - 1}{3} = \\frac{x + 4}{2}$.",
                "zh": "荣誉挑战：解方程 $\\frac{2x - 1}{3} = \\frac{x + 4}{2}$。"
              },
              "choices": [
                "$x = 7$",
                "$x = 2$",
                "$x = -14$",
                "$x = 14$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Multiply both sides by the LCD $6$: $2(2x - 1) = 3(x + 4)$, so $4x - 2 = 3x + 12$. Subtract $3x$ and add $2$: $x = 14$. A common error is cross-multiplying but forgetting to distribute, giving $4x - 1 = 3x + 4$ and the wrong value. Check: $\\frac{2(14)-1}{3} = \\frac{27}{3} = 9$ and $\\frac{14+4}{2} = 9$. ✓",
                "zh": "两边同乘最小公分母 $6$：$2(2x - 1) = 3(x + 4)$，即 $4x - 2 = 3x + 12$。减 $3x$ 加 $2$：$x = 14$。常见错误是交叉相乘却忘记用分配律，得到 $4x - 1 = 3x + 4$ 从而算错。检验：$\\frac{2(14)-1}{3} = \\frac{27}{3} = 9$，$\\frac{14+4}{2} = 9$。✓"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "linear-functions",
      "title": "Unit 2: Linear Functions",
      "titleZh": "第二单元：线性函数",
      "lessons": [
        {
          "id": "functions-and-notation",
          "title": "Functions, Notation, Domain and Range",
          "titleZh": "函数、函数记号、定义域与值域",
          "content": [
            {
              "type": "h2",
              "en": "What Makes a Relationship a Function?",
              "zh": "什么样的关系才是函数？"
            },
            {
              "type": "p",
              "en": "Imagine a vending machine at a Utah high school: you press a button and get exactly one snack. Press the same button again and you get the same snack — never two different ones at once. This \"one input gives exactly one output\" idea is the heart of a function. A relation is any pairing of inputs with outputs; a function is a special relation where every input is paired with exactly one output.",
              "zh": "想象犹他州一所高中里的自动售货机：你按一个按钮，就得到恰好一种零食。再按同一个按钮，得到的还是同一种零食——绝不会一次弹出两种不同的零食。这种\"一个输入对应恰好一个输出\"的思想正是函数的核心。关系（relation）是输入与输出的任意配对；而函数是一种特殊的关系，其中每个输入都恰好对应一个输出。"
            },
            {
              "type": "p",
              "en": "The set of allowed inputs is called the domain; the set of outputs that actually come out is called the range. We can describe a relation with a table, a set of ordered pairs, a graph, an equation, or words — and for each we can ask: is it a function?",
              "zh": "所有允许的输入组成的集合叫做定义域（domain）；实际产生的所有输出组成的集合叫做值域（range）。我们可以用表格、有序对的集合、图象、方程或文字来描述一个关系——对每一种，我们都可以问：它是函数吗？"
            },
            {
              "type": "h3",
              "en": "The Vertical Line Test",
              "zh": "垂直线检验法"
            },
            {
              "type": "p",
              "en": "On a graph, an input $x$ produces two outputs whenever a single vertical line crosses the curve at two points. So a graph represents a function if and only if no vertical line touches it more than once. This is the vertical line test.",
              "zh": "在图象上，只要一条竖直的直线与曲线相交于两点，就说明某个输入 $x$ 产生了两个输出。因此，当且仅当没有任何竖直直线与图象相交超过一次时，这个图象才表示一个函数。这就是垂直线检验法。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A straight non-vertical line passes the test — it is a function.",
                  "zh": "一条不竖直的直线通过检验——它是函数。"
                },
                {
                  "en": "A circle fails — a vertical line through the middle hits it twice.",
                  "zh": "一个圆不通过检验——穿过中间的竖直直线会与它相交两次。"
                },
                {
                  "en": "A vertical line $x = 3$ itself fails — one input, infinitely many outputs.",
                  "zh": "竖直直线 $x = 3$ 本身也不通过——一个输入，却对应无穷多个输出。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: an output is allowed to repeat! The pairs $(1, 5)$ and $(2, 5)$ can both belong to a function — two inputs sharing one output is fine. What is NOT allowed is one input with two different outputs, like $(1, 5)$ and $(1, 8)$.",
              "zh": "常见错误：输出是可以重复的！有序对 $(1, 5)$ 和 $(2, 5)$ 可以同时属于一个函数——两个输入共用一个输出没有问题。不允许的是一个输入对应两个不同的输出，例如 $(1, 5)$ 和 $(1, 8)$。"
            },
            {
              "type": "h3",
              "en": "Function Notation: f(x)",
              "zh": "函数记号：f(x)"
            },
            {
              "type": "p",
              "en": "Instead of always writing $y$, we name a function and show its input. The notation $f(x)$ is read \"f of x\" and means \"the output of function $f$ when the input is $x$.\" It does NOT mean $f$ times $x$. If $f(x) = 2x + 3$, then $f(4) = 2(4) + 3 = 11$: we substitute $4$ everywhere $x$ appears.",
              "zh": "我们不再总是写 $y$，而是给函数命名并标出它的输入。记号 $f(x)$ 读作\"f 在 x 处的值\"，表示\"当输入为 $x$ 时函数 $f$ 的输出\"。它并不表示 $f$ 乘以 $x$。若 $f(x) = 2x + 3$，则 $f(4) = 2(4) + 3 = 11$：我们把出现 $x$ 的每个位置都替换成 $4$。"
            },
            {
              "type": "p",
              "en": "In context, $f(3) = 20$ carries meaning. If $C(t)$ is the cost in dollars of parking for $t$ hours at the Salt Lake City airport, then $C(3) = 20$ says \"parking for 3 hours costs \\$20.\" Reading and interpreting such statements is a core honors skill.",
              "zh": "在实际背景中，$f(3) = 20$ 是有含义的。若 $C(t)$ 表示在盐湖城机场停车 $t$ 小时的费用（单位：美元），那么 $C(3) = 20$ 表示\"停车 3 小时花费 \\$20\"。读懂并解释这样的语句是荣誉课程的一项核心技能。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating and solving with notation",
                "zh": "例题 1：用函数记号求值与解方程"
              },
              "problem": {
                "en": "Let $f(x) = x^2 - 3x$. Find $f(-2)$, and then find all $x$ with $f(x) = 4$.",
                "zh": "设 $f(x) = x^2 - 3x$。求 $f(-2)$，再求所有满足 $f(x) = 4$ 的 $x$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "To find $f(-2)$, substitute $-2$ for $x$ using parentheses:",
                  "zh": "求 $f(-2)$ 时，用括号把 $-2$ 代入 $x$："
                },
                {
                  "type": "math",
                  "tex": "f(-2) = (-2)^2 - 3(-2) = 4 + 6 = 10"
                },
                {
                  "type": "p",
                  "en": "To solve $f(x) = 4$, set the rule equal to 4 and solve the equation:",
                  "zh": "求解 $f(x) = 4$ 时，令函数表达式等于 4 并解这个方程："
                },
                {
                  "type": "math",
                  "tex": "x^2 - 3x = 4 \\;\\Rightarrow\\; x^2 - 3x - 4 = 0 \\;\\Rightarrow\\; (x-4)(x+1) = 0"
                },
                {
                  "type": "p",
                  "en": "So $x = 4$ or $x = -1$. Notice the difference: $f(-2)$ asks for an output (one number), while $f(x) = 4$ asks for inputs (here, two of them).",
                  "zh": "所以 $x = 4$ 或 $x = -1$。注意区别：$f(-2)$ 求的是输出（一个数），而 $f(x) = 4$ 求的是输入（这里有两个）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Domain and Range",
              "zh": "定义域与值域"
            },
            {
              "type": "p",
              "en": "From a graph, the domain is the set of $x$-values the graph covers (read left to right), and the range is the set of $y$-values it covers (read bottom to top). From a table, list the inputs for the domain and the outputs for the range. From context, the situation itself limits what is reasonable.",
              "zh": "从图象上看，定义域是图象覆盖的所有 $x$ 值的集合（从左到右读），值域是它覆盖的所有 $y$ 值的集合（从下到上读）。从表格中，把输入列出来就是定义域，把输出列出来就是值域。从实际背景来看，情境本身会限制什么是合理的取值。"
            },
            {
              "type": "p",
              "en": "For example, if $t$ is the number of students on a bus, $t$ must be a whole number between $0$ and the bus's capacity — negative or fractional values make no sense. Context restricts the domain.",
              "zh": "例如，若 $t$ 表示公交车上的学生人数，$t$ 必须是介于 $0$ 与车辆容量之间的整数——负数或分数没有意义。实际背景限制了定义域。"
            },
            {
              "type": "h3",
              "en": "Discrete vs. Continuous Domains",
              "zh": "离散定义域与连续定义域"
            },
            {
              "type": "p",
              "en": "A discrete domain consists of separated values (like $0, 1, 2, 3, \\ldots$ students), and its graph is a set of unconnected dots. A continuous domain fills an interval with no gaps (like every amount of time between 0 and 5 hours), and its graph is an unbroken curve. Choosing correctly matters when you model: you should not draw a solid line connecting \"number of tickets sold,\" because you cannot sell 2.7 tickets.",
              "zh": "离散定义域由彼此分离的值组成（例如 $0, 1, 2, 3, \\ldots$ 名学生），它的图象是一组互不相连的点。连续定义域填满一个没有间断的区间（例如 0 到 5 小时之间的任意时刻），它的图象是一条不间断的曲线。建模时正确选择很重要：你不应该用一条实线把\"售出的票数\"连起来，因为你不可能卖出 2.7 张票。"
            },
            {
              "type": "note",
              "en": "Test tip: when a modeling problem involves counting things (people, tickets, cars), the domain is almost always discrete (whole numbers). When it involves measuring something that flows (time, distance, temperature, money as a continuous amount), the domain is usually continuous.",
              "zh": "考试提示：当建模问题涉及对事物计数（人、票、车）时，定义域几乎总是离散的（整数）。当它涉及测量连续变化的量（时间、距离、温度、作为连续量的金额）时，定义域通常是连续的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading behavior from a graph",
                "zh": "例题 2：从图象读取函数的性态"
              },
              "problem": {
                "en": "A function $h(x)$ has a graph that rises from the point $(0, 2)$ up to a peak at $(3, 8)$, then falls to $(6, 0)$. Describe its domain, range, and where it is increasing or decreasing.",
                "zh": "函数 $h(x)$ 的图象从点 $(0, 2)$ 上升到最高点 $(3, 8)$，然后下降到 $(6, 0)$。描述它的定义域、值域，以及它在何处递增、何处递减。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The graph spans $x$ from 0 to 6, so the domain is $0 \\le x \\le 6$. The lowest output is $0$ and the highest is $8$, so the range is $0 \\le y \\le 8$.",
                  "zh": "图象的 $x$ 从 0 到 6，所以定义域是 $0 \\le x \\le 6$。最低的输出是 $0$，最高的是 $8$，所以值域是 $0 \\le y \\le 8$。"
                },
                {
                  "type": "p",
                  "en": "It increases on $0 \\le x \\le 3$ (going up to the peak) and decreases on $3 \\le x \\le 6$ (coming down). The maximum value $8$ occurs at $x = 3$.",
                  "zh": "它在 $0 \\le x \\le 3$ 上递增（上升到最高点），在 $3 \\le x \\le 6$ 上递减（下降）。最大值 $8$ 在 $x = 3$ 处取得。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Is it a function?",
                "zh": "例题 3：它是函数吗？"
              },
              "problem": {
                "en": "Decide whether each relation is a function: (a) $\\{(1,4),(2,4),(3,9)\\}$, (b) $\\{(2,3),(2,5),(4,1)\\}$.",
                "zh": "判断每个关系是否为函数：(a) $\\{(1,4),(2,4),(3,9)\\}$，(b) $\\{(2,3),(2,5),(4,1)\\}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "In (a), each input (1, 2, 3) appears only once, so it is a function — even though the output 4 repeats.",
                  "zh": "在 (a) 中，每个输入（1、2、3）只出现一次，所以它是函数——尽管输出 4 重复出现。"
                },
                {
                  "type": "p",
                  "en": "In (b), the input 2 is paired with both 3 and 5, so one input gives two outputs. It is NOT a function.",
                  "zh": "在 (b) 中，输入 2 同时与 3 和 5 配对，即一个输入给出两个输出。它不是函数。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which set of ordered pairs does NOT represent a function?",
                "zh": "下列哪一组有序对不表示函数？"
              },
              "choices": [
                "$\\{(0,1),(1,2),(2,3)\\}$",
                "$\\{(-1,4),(0,4),(1,4)\\}$",
                "$\\{(3,7),(3,8),(5,9)\\}$",
                "$\\{(2,5),(4,5),(6,7)\\}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A function cannot pair one input with two different outputs. In choice 3, the input $3$ maps to both $7$ and $8$, so it fails. The others are fine — repeated OUTPUTS (like $4$ or $5$) are allowed.",
                "zh": "函数不能把一个输入对应到两个不同的输出。在选项 3 中，输入 $3$ 同时对应 $7$ 和 $8$，所以它不是函数。其他选项都可以——输出重复（如 $4$ 或 $5$）是允许的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = 5 - 2x$. What is $f(-3)$?",
                "zh": "设 $f(x) = 5 - 2x$。求 $f(-3)$。"
              },
              "choices": [
                "$11$",
                "$-1$",
                "$-11$",
                "$1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Substitute $-3$ for $x$: $f(-3) = 5 - 2(-3) = 5 + 6 = 11$. A common error is $5 - 6 = -1$, which happens if you forget that $-2 \\times -3 = +6$.",
                "zh": "把 $-3$ 代入 $x$：$f(-3) = 5 - 2(-3) = 5 + 6 = 11$。常见错误是算成 $5 - 6 = -1$，这是忘记了 $-2 \\times -3 = +6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of a function goes through $(-4, 1)$ at its far left and $(6, 1)$ at its far right, reaching down to a lowest point of $y = -3$. What is its domain?",
                "zh": "某函数的图象最左端经过 $(-4, 1)$，最右端经过 $(6, 1)$，最低到达 $y = -3$。它的定义域是什么？"
              },
              "choices": [
                "$-3 \\le y \\le 1$",
                "$1 \\le x \\le 6$",
                "all real numbers",
                "$-4 \\le x \\le 6$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The domain is the set of $x$-values covered, read left to right: from $x = -4$ to $x = 6$, so $-4 \\le x \\le 6$. Choice 1 confuses domain with range (the $y$-values), a very common mix-up.",
                "zh": "定义域是图象覆盖的所有 $x$ 值，从左到右读：从 $x = -4$ 到 $x = 6$，即 $-4 \\le x \\le 6$。选项 1 把定义域与值域（$y$ 值）弄混了，这是非常常见的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = x^2 + 1$, evaluate $f(3)$. Give an integer.",
                "zh": "对于 $f(x) = x^2 + 1$，求 $f(3)$。请以整数作答。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "$f(3) = (3)^2 + 1 = 9 + 1 = 10$. Square first (exponents before adding), then add 1. Writing $3^2 = 6$ would be a mistake — squaring means $3 \\times 3$.",
                "zh": "$f(3) = (3)^2 + 1 = 9 + 1 = 10$。先平方（先乘方再相加），再加 1。把 $3^2$ 算成 $6$ 是错误的——平方是 $3 \\times 3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $g(x) = 3x - 7$, solve $g(x) = 8$. Give the value of $x$ (a number).",
                "zh": "若 $g(x) = 3x - 7$，解 $g(x) = 8$。求 $x$ 的值（一个数）。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "x=5"
              ],
              "explanation": {
                "en": "Set the rule equal to 8: $3x - 7 = 8$, so $3x = 15$ and $x = 5$. Solving $g(x) = 8$ asks for the INPUT that produces the output 8.",
                "zh": "令表达式等于 8：$3x - 7 = 8$，所以 $3x = 15$，$x = 5$。求解 $g(x) = 8$ 是求产生输出 8 的那个输入。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A concert sells whole tickets only. If $R(n)$ is the revenue in dollars from selling $n$ tickets at \\$25 each, which best describes the domain of $R$?",
                "zh": "一场音乐会只出售整张票。若 $R(n)$ 表示以每张 \\$25 出售 $n$ 张票的收入（美元），下面哪一项最能描述 $R$ 的定义域？"
              },
              "choices": [
                "all real numbers, because revenue is money",
                "all numbers from 0 up, including decimals",
                "whole numbers $0, 1, 2, 3, \\ldots$ (discrete)",
                "only negative numbers"
              ],
              "answer": 2,
              "explanation": {
                "en": "You cannot sell 2.7 tickets, so the input must be a whole number: the domain is discrete. Choice 2 is tempting because revenue (the OUTPUT) feels continuous, but the DOMAIN is about the input $n$, which counts tickets.",
                "zh": "你不可能卖出 2.7 张票，所以输入必须是整数：定义域是离散的。选项 2 有诱惑力，因为收入（输出）看似连续，但定义域说的是输入 $n$，它是对票数的计数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A car's fuel tank starts with 12 gallons and the car uses gas at a steady rate. Let $F(t)$ be the gallons left after driving $t$ hours, with $F(0)=12$ and $F(4)=0$. Interpret $F(3)$: what does its input 3 represent? Answer with a single word: is the domain 'discrete' or 'continuous'?",
                "zh": "一辆汽车油箱起初有 12 加仑油，并以稳定速率耗油。设 $F(t)$ 为行驶 $t$ 小时后剩余的加仑数，且 $F(0)=12$，$F(4)=0$。解释 $F(3)$：它的输入 3 代表什么？请用一个词回答：定义域是\"discrete\"（离散）还是\"continuous\"（连续）？"
              },
              "answer": "continuous",
              "accept": [
                "连续",
                "Continuous",
                "CONTINUOUS"
              ],
              "explanation": {
                "en": "Time flows without gaps — the car can be driven for 3 hours, 3.5 hours, or any amount between 0 and 4 — so the domain is continuous. The input 3 represents 3 hours of driving.",
                "zh": "时间是无间断地流逝的——汽车可以行驶 3 小时、3.5 小时，或 0 到 4 之间的任意时长——所以定义域是连续的。输入 3 表示行驶了 3 小时。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Let $f(x) = x^2 - 4x + 5$. For how many different inputs $x$ does $f(x) = 1$, and what are they?",
                "zh": "荣誉挑战：设 $f(x) = x^2 - 4x + 5$。有多少个不同的输入 $x$ 使 $f(x) = 1$？它们是什么？"
              },
              "choices": [
                "no inputs, because $f(x)$ is never 1",
                "exactly one input: $x = 2$",
                "two inputs: $x = 1$ and $x = 5$",
                "infinitely many inputs"
              ],
              "answer": 1,
              "explanation": {
                "en": "Solve $x^2 - 4x + 5 = 1 \\Rightarrow x^2 - 4x + 4 = 0 \\Rightarrow (x-2)^2 = 0$, giving the single (repeated) solution $x = 2$. The graph is a parabola whose lowest point is exactly at $(2, 1)$, so it touches the line $y = 1$ at only one input. Choice 3 forgets to move the 1 across before factoring.",
                "zh": "解 $x^2 - 4x + 5 = 1 \\Rightarrow x^2 - 4x + 4 = 0 \\Rightarrow (x-2)^2 = 0$，得到唯一（重根）解 $x = 2$。图象是一条抛物线，其最低点恰在 $(2, 1)$，所以它只在一个输入处与直线 $y = 1$ 相切。选项 3 忘记先把 1 移到左边再因式分解。"
              }
            }
          ]
        },
        {
          "id": "slope-and-linear-equations",
          "title": "Slope, Intercepts, and Forms of Linear Equations",
          "titleZh": "斜率、截距与直线方程的各种形式",
          "content": [
            {
              "type": "h2",
              "en": "Slope: A Constant Rate of Change",
              "zh": "斜率：恒定的变化率"
            },
            {
              "type": "p",
              "en": "Suppose a ski resort near Park City charges a \\$30 flat fee plus \\$10 for every hour of lessons. Every extra hour adds the same \\$10 — the change is constant. A function whose output changes by a constant amount for each equal step in the input is a linear function, and that constant amount per step is its slope.",
              "zh": "假设帕克城附近的一家滑雪场收取 \\$30 固定费用，外加每小时课程 \\$10。每多一个小时都增加同样的 \\$10——变化是恒定的。当输入每等量增加一步、输出都改变一个恒定的量时，这个函数就是一次函数（linear function），而每一步对应的这个恒定量就是它的斜率（slope）。"
            },
            {
              "type": "p",
              "en": "Slope measures steepness and direction as \"rise over run\" — the vertical change divided by the horizontal change. Between two points $(x_1, y_1)$ and $(x_2, y_2)$:",
              "zh": "斜率用\"纵向变化除以横向变化\"（rise over run）来度量陡峭程度与方向——即竖直变化量除以水平变化量。对于两点 $(x_1, y_1)$ 与 $(x_2, y_2)$："
            },
            {
              "type": "math",
              "tex": "m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}"
            },
            {
              "type": "p",
              "en": "A positive slope rises left to right; a negative slope falls; a slope of $0$ is a horizontal line; and a vertical line has an undefined slope (its run is $0$, and we cannot divide by zero).",
              "zh": "斜率为正时，图象从左到右上升；斜率为负时下降；斜率为 $0$ 是水平直线；而竖直直线的斜率无定义（它的 run 为 $0$，我们不能除以零）。"
            },
            {
              "type": "note",
              "en": "Common mistake: keep the order consistent! The $y$-values and $x$-values must be subtracted in the SAME direction. Computing $\\frac{y_2 - y_1}{x_1 - x_2}$ (mixing the order) flips the sign and gives the wrong slope.",
              "zh": "常见错误：保持相减的顺序一致！$y$ 值和 $x$ 值必须按相同的方向相减。若算成 $\\frac{y_2 - y_1}{x_1 - x_2}$（顺序颠倒）会把符号弄反，得到错误的斜率。"
            },
            {
              "type": "h3",
              "en": "Rate of Change with Units",
              "zh": "带单位的变化率"
            },
            {
              "type": "p",
              "en": "In a real context, slope always carries units: dollars per hour, meters per second, degrees per minute. Reading these units tells you what the slope means. For the ski lessons, the slope is $\\$10$ per hour — the cost rises \\$10 for each additional hour.",
              "zh": "在实际背景中，斜率总是带有单位：美元每小时、米每秒、度每分钟。读出这些单位就能知道斜率的含义。对于滑雪课程，斜率是每小时 \\$10——每多一小时费用上升 \\$10。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Slope from a table",
                "zh": "例题 1：从表格求斜率"
              },
              "problem": {
                "en": "A table shows a linear function: at $x = 2, y = 13$; at $x = 5, y = 25$. Find the slope and state its rate-of-change meaning.",
                "zh": "一张表格给出一个一次函数：当 $x = 2$ 时 $y = 13$；当 $x = 5$ 时 $y = 25$。求斜率并说明它作为变化率的含义。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use the two points $(2, 13)$ and $(5, 25)$:",
                  "zh": "用两点 $(2, 13)$ 与 $(5, 25)$："
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{25 - 13}{5 - 2} = \\frac{12}{3} = 4"
                },
                {
                  "type": "p",
                  "en": "The slope is $4$: each time $x$ increases by 1, $y$ increases by 4. You can check that this is truly linear because the outputs rise by a constant amount for equal steps in $x$.",
                  "zh": "斜率是 $4$：$x$ 每增加 1，$y$ 就增加 4。你可以验证它确实是一次函数，因为 $x$ 等量增加时，输出以恒定的量上升。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Intercepts and What They Mean",
              "zh": "截距及其含义"
            },
            {
              "type": "p",
              "en": "The $y$-intercept is where a line crosses the $y$-axis, at $x = 0$; the $x$-intercept is where it crosses the $x$-axis, at $y = 0$. In context, the $y$-intercept is often a starting value (the cost before any hours, the fee at time zero), and the $x$-intercept is often a \"break-even\" or \"reaches zero\" moment.",
              "zh": "$y$ 截距是直线与 $y$ 轴的交点，此时 $x = 0$；$x$ 截距是直线与 $x$ 轴的交点，此时 $y = 0$。在实际背景中，$y$ 截距常常是起始值（还没有任何小时数时的费用、时刻为零时的费用），而 $x$ 截距常常是\"收支平衡\"或\"归零\"的时刻。"
            },
            {
              "type": "h3",
              "en": "Slope-Intercept Form",
              "zh": "斜截式"
            },
            {
              "type": "p",
              "en": "The most common form is slope-intercept form:",
              "zh": "最常见的形式是斜截式："
            },
            {
              "type": "math",
              "tex": "y = mx + b"
            },
            {
              "type": "p",
              "en": "Here $m$ is the slope and $b$ is the $y$-intercept. The ski-lesson cost is $y = 10x + 30$: slope $10$ (\\$10 per hour) and $y$-intercept $30$ (the flat fee). To graph it, plot the $y$-intercept, then use the slope as rise-over-run to step to the next point.",
              "zh": "这里 $m$ 是斜率，$b$ 是 $y$ 截距。滑雪课程费用是 $y = 10x + 30$：斜率 $10$（每小时 \\$10），$y$ 截距 $30$（固定费用）。作图时，先描出 $y$ 截距，再用斜率作为\"纵向/横向\"一步步移到下一个点。"
            },
            {
              "type": "h3",
              "en": "Point-Slope Form",
              "zh": "点斜式"
            },
            {
              "type": "p",
              "en": "When you know the slope $m$ and one point $(x_1, y_1)$, point-slope form is the fastest way to write the equation:",
              "zh": "当你已知斜率 $m$ 和一个点 $(x_1, y_1)$ 时，点斜式是写出方程最快的方法："
            },
            {
              "type": "math",
              "tex": "y - y_1 = m(x - x_1)"
            },
            {
              "type": "p",
              "en": "It comes straight from the slope formula rearranged. You can always expand and simplify it into slope-intercept form afterward.",
              "zh": "它正是由斜率公式变形而来。之后你随时可以把它展开并化简为斜截式。"
            },
            {
              "type": "h3",
              "en": "Standard Form",
              "zh": "标准式（一般式）"
            },
            {
              "type": "p",
              "en": "Standard form is $Ax + By = C$, where $A$, $B$, and $C$ are integers and $A$ is usually non-negative. It is handy for finding both intercepts quickly (set $x=0$, then $y=0$) and for writing constraints like \"apples at \\$2 and oranges at \\$3 totaling \\$18\": $2x + 3y = 18$.",
              "zh": "标准式是 $Ax + By = C$，其中 $A$、$B$、$C$ 为整数，且 $A$ 通常非负。它便于快速求两个截距（令 $x=0$，再令 $y=0$），也适合写约束条件，例如\"每个苹果 \\$2、每个橙子 \\$3，共 \\$18\"：$2x + 3y = 18$。"
            },
            {
              "type": "note",
              "en": "Test tip: all three forms describe the SAME line — choose by what you're given. Two points or slope-plus-point? Start with point-slope. Need the graph or the intercept fast? Use slope-intercept. A whole-number constraint or both intercepts? Standard form shines.",
              "zh": "考试提示：这三种形式描述的是同一条直线——根据已知条件来选择。已知两点，或斜率加一点？从点斜式入手。要快速作图或看截距？用斜截式。整数约束或要两个截距？标准式最好用。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Writing an equation from two points",
                "zh": "例题 2：由两点写出方程"
              },
              "problem": {
                "en": "Write the equation of the line through $(1, 4)$ and $(3, 10)$ in slope-intercept form.",
                "zh": "写出经过 $(1, 4)$ 与 $(3, 10)$ 的直线的斜截式方程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find the slope:",
                  "zh": "先求斜率："
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3"
                },
                {
                  "type": "p",
                  "en": "Use point-slope with $(1, 4)$, then simplify:",
                  "zh": "用点 $(1, 4)$ 代入点斜式，再化简："
                },
                {
                  "type": "math",
                  "tex": "y - 4 = 3(x - 1) \\;\\Rightarrow\\; y = 3x - 3 + 4 \\;\\Rightarrow\\; y = 3x + 1"
                },
                {
                  "type": "p",
                  "en": "The line is $y = 3x + 1$. Check with the other point: $3(3) + 1 = 10$. Correct.",
                  "zh": "直线是 $y = 3x + 1$。用另一个点检验：$3(3) + 1 = 10$。正确。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Intercepts from standard form",
                "zh": "例题 3：从标准式求截距"
              },
              "problem": {
                "en": "Find the $x$- and $y$-intercepts of $4x + 3y = 24$ and use them to graph the line.",
                "zh": "求 $4x + 3y = 24$ 的 $x$ 截距和 $y$ 截距，并用它们作图。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For the $y$-intercept, set $x = 0$: $3y = 24$, so $y = 8$. The point is $(0, 8)$.",
                  "zh": "求 $y$ 截距，令 $x = 0$：$3y = 24$，所以 $y = 8$。点为 $(0, 8)$。"
                },
                {
                  "type": "p",
                  "en": "For the $x$-intercept, set $y = 0$: $4x = 24$, so $x = 6$. The point is $(6, 0)$.",
                  "zh": "求 $x$ 截距，令 $y = 0$：$4x = 24$，所以 $x = 6$。点为 $(6, 0)$。"
                },
                {
                  "type": "p",
                  "en": "Plot $(0, 8)$ and $(6, 0)$ and draw the line through them. As a check, the slope is $\\frac{0 - 8}{6 - 0} = -\\frac{4}{3}$, matching $y = -\\frac{4}{3}x + 8$.",
                  "zh": "描出 $(0, 8)$ 与 $(6, 0)$ 并连成直线。检验：斜率为 $\\frac{0 - 8}{6 - 0} = -\\frac{4}{3}$，与 $y = -\\frac{4}{3}x + 8$ 一致。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the slope of the line through $(-2, 5)$ and $(4, -7)$?",
                "zh": "经过 $(-2, 5)$ 与 $(4, -7)$ 的直线的斜率是多少？"
              },
              "choices": [
                "$-2$",
                "$2$",
                "$-\\frac{1}{2}$",
                "$\\frac{1}{2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$m = \\frac{-7 - 5}{4 - (-2)} = \\frac{-12}{6} = -2$. A common error is $\\frac{-12}{-6-... }$ or flipping to $\\frac{6}{-12} = -\\frac{1}{2}$, which puts run over rise instead of rise over run.",
                "zh": "$m = \\frac{-7 - 5}{4 - (-2)} = \\frac{-12}{6} = -2$。常见错误是把它倒过来算成 $\\frac{6}{-12} = -\\frac{1}{2}$，那是把 run 放在了 rise 上面，弄反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the equation $y = -\\frac{2}{3}x + 4$, what is the $y$-intercept?",
                "zh": "在方程 $y = -\\frac{2}{3}x + 4$ 中，$y$ 截距是多少？"
              },
              "choices": [
                "$-\\frac{2}{3}$",
                "$3$",
                "$4$",
                "$(4, 0)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "In $y = mx + b$, the $y$-intercept is $b = 4$ (the line crosses the $y$-axis at $(0,4)$). Choice 1 is the slope, and choice 4 puts the 4 on the wrong axis — the $y$-intercept has $x = 0$, giving $(0,4)$.",
                "zh": "在 $y = mx + b$ 中，$y$ 截距是 $b = 4$（直线在 $(0,4)$ 处与 $y$ 轴相交）。选项 1 是斜率，选项 4 把 4 放到了错误的坐标轴上——$y$ 截距处 $x = 0$，应为 $(0,4)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation represents the line with slope $-4$ passing through the point $(2, 3)$?",
                "zh": "下列哪个方程表示斜率为 $-4$ 且过点 $(2, 3)$ 的直线？"
              },
              "choices": [
                "$y - 2 = -4(x - 3)$",
                "$y + 3 = -4(x + 2)$",
                "$y = -4x + 3$",
                "$y - 3 = -4(x - 2)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Point-slope form is $y - y_1 = m(x - x_1)$ with $(x_1,y_1)=(2,3)$ and $m=-4$: $y - 3 = -4(x - 2)$. Choice 1 swaps the coordinates, and choice 3 wrongly uses the $y$-value 3 as the $y$-intercept.",
                "zh": "点斜式为 $y - y_1 = m(x - x_1)$，代入 $(x_1,y_1)=(2,3)$ 与 $m=-4$：$y - 3 = -4(x - 2)$。选项 1 把坐标弄反了，选项 3 错误地把 $y$ 值 3 当作 $y$ 截距。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the $x$-intercept of the line $2x + 5y = 20$. Give your answer as the $x$-value (a number).",
                "zh": "求直线 $2x + 5y = 20$ 的 $x$ 截距。请以 $x$ 值（一个数）作答。"
              },
              "answer": "10",
              "accept": [
                "10.0",
                "(10,0)",
                "x=10"
              ],
              "explanation": {
                "en": "The $x$-intercept has $y = 0$: $2x = 20$, so $x = 10$. A common slip is to set $x = 0$ instead, which finds the $y$-intercept ($y = 4$).",
                "zh": "$x$ 截距处 $y = 0$：$2x = 20$，所以 $x = 10$。常见失误是改令 $x = 0$，那求的是 $y$ 截距（$y = 4$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A line passes through $(0, -1)$ and $(4, 7)$. Write its equation in slope-intercept form $y = mx + b$ (for example, y=2x+3).",
                "zh": "一条直线经过 $(0, -1)$ 与 $(4, 7)$。写出它的斜截式方程 $y = mx + b$（例如 y=2x+3）。"
              },
              "answer": "y=2x-1",
              "accept": [
                "y = 2x - 1",
                "y=2x+-1",
                "y = 2x-1",
                "2x-1"
              ],
              "explanation": {
                "en": "Slope $m = \\frac{7 - (-1)}{4 - 0} = \\frac{8}{4} = 2$. The $y$-intercept is the point with $x=0$, which is $(0,-1)$, so $b = -1$. Thus $y = 2x - 1$.",
                "zh": "斜率 $m = \\frac{7 - (-1)}{4 - 0} = \\frac{8}{4} = 2$。$y$ 截距是 $x=0$ 处的点，即 $(0,-1)$，所以 $b = -1$。因此 $y = 2x - 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A phone plan charges a fixed monthly fee plus a cost per gigabyte. The total is modeled by $C = 6d + 20$, where $d$ is gigabytes used. What does the slope $6$ mean in context?",
                "zh": "某手机套餐收取固定月费加每 GB 的费用。总费用由 $C = 6d + 20$ 建模，其中 $d$ 为使用的 GB 数。斜率 $6$ 在此背景下表示什么？"
              },
              "choices": [
                "the fixed monthly fee is \\$6",
                "the plan starts at \\$6",
                "the cost rises \\$6 for each additional gigabyte",
                "the plan allows 6 gigabytes total"
              ],
              "answer": 2,
              "explanation": {
                "en": "The slope is the rate of change: cost per gigabyte, so it rises \\$6 for each extra GB. The fixed monthly fee is the $y$-intercept, \\$20 — choice 1 confuses the slope with the intercept.",
                "zh": "斜率是变化率：每 GB 的费用，所以每多一 GB 费用上升 \\$6。固定月费是 $y$ 截距 \\$20——选项 1 把斜率与截距弄混了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A candle is 20 cm tall and burns down at 2.5 cm per hour. Write a function $h(t)$ for its height after $t$ hours, then find after how many hours the candle is fully burned. Give the number of hours.",
                "zh": "一支蜡烛高 20 cm，以每小时 2.5 cm 的速度燃烧。写出燃烧 $t$ 小时后高度的函数 $h(t)$，再求经过多少小时蜡烛完全烧尽。请给出小时数。"
              },
              "answer": "8",
              "accept": [
                "8.0",
                "8 hours",
                "8小时"
              ],
              "explanation": {
                "en": "Height decreases, so the slope is negative: $h(t) = 20 - 2.5t$. It is fully burned when $h(t) = 0$: $20 - 2.5t = 0 \\Rightarrow t = 8$. This is the $x$-intercept — the moment the height reaches zero.",
                "zh": "高度在减少，所以斜率为负：$h(t) = 20 - 2.5t$。当 $h(t) = 0$ 时烧尽：$20 - 2.5t = 0 \\Rightarrow t = 8$。这就是 $x$ 截距——高度归零的时刻。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Line $\\ell$ passes through $(3, -1)$ and is parallel to the line $2x - 4y = 9$. What is the equation of $\\ell$ in slope-intercept form?",
                "zh": "荣誉挑战：直线 $\\ell$ 过点 $(3, -1)$，且平行于直线 $2x - 4y = 9$。求 $\\ell$ 的斜截式方程。"
              },
              "choices": [
                "$y = -\\frac{1}{2}x + \\frac{1}{2}$",
                "$y = \\frac{1}{2}x - \\frac{5}{2}$",
                "$y = 2x - 7$",
                "$y = \\frac{1}{2}x - 1$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Rewrite $2x - 4y = 9$ as $y = \\frac{1}{2}x - \\frac{9}{4}$, so its slope is $\\frac{1}{2}$; parallel lines share this slope. Using point-slope through $(3,-1)$: $y + 1 = \\frac{1}{2}(x - 3) \\Rightarrow y = \\frac{1}{2}x - \\frac{3}{2} - 1 = \\frac{1}{2}x - \\frac{5}{2}$. Choice 3 uses the coefficient 2 as the slope without solving for $y$ first.",
                "zh": "把 $2x - 4y = 9$ 改写为 $y = \\frac{1}{2}x - \\frac{9}{4}$，所以斜率是 $\\frac{1}{2}$；平行线斜率相同。用过 $(3,-1)$ 的点斜式：$y + 1 = \\frac{1}{2}(x - 3) \\Rightarrow y = \\frac{1}{2}x - \\frac{3}{2} - 1 = \\frac{1}{2}x - \\frac{5}{2}$。选项 3 没有先解出 $y$，直接把系数 2 当作斜率。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "systems-equations-inequalities",
      "title": "Unit 3: Systems of Equations and Inequalities",
      "titleZh": "第三单元：方程组与不等式组",
      "lessons": [
        {
          "id": "solving-systems-of-equations",
          "title": "Solving Systems of Linear Equations",
          "titleZh": "解一元一次方程组",
          "content": [
            {
              "type": "h2",
              "en": "Two Conditions at Once",
              "zh": "同时满足两个条件"
            },
            {
              "type": "p",
              "en": "Imagine two climbing gyms in Salt Lake City. Gym A charges a \\$30 sign-up fee plus \\$8 per visit; Gym B charges no sign-up fee but \\$12 per visit. Each cost is a linear equation, and the question \"when do they cost the same?\" asks for the one pair of numbers that makes BOTH equations true at once. A set of two or more equations we want to satisfy simultaneously is called a system of equations.",
              "zh": "想象盐湖城有两家攀岩馆。A 馆收取 \\$30 的注册费，外加每次 \\$8；B 馆不收注册费，但每次 \\$12。每种花费都是一个一次方程，而\"什么时候花费相同？\"这个问题，就是在寻找唯一一对能同时使两个方程都成立的数。我们希望同时满足的两个或多个方程组成的集合，称为方程组。"
            },
            {
              "type": "p",
              "en": "A solution to a system is an ordered pair $(x, y)$ that satisfies every equation in the system. Graphically, each linear equation is a line, and a solution is a point that lies on both lines at once — their point of intersection.",
              "zh": "方程组的解是一个能满足组中每一个方程的有序数对 $(x, y)$。从图象上看，每个一次方程都是一条直线，而解就是同时位于两条直线上的点——即它们的交点。"
            },
            {
              "type": "h3",
              "en": "Method 1: Solving by Graphing",
              "zh": "方法一：图象法"
            },
            {
              "type": "p",
              "en": "Graph both lines on the same axes and read off the coordinates where they cross. This method makes the meaning of a solution very clear, but it is only exact when the intersection lands on nice grid points. Always substitute your answer back into both equations to confirm it.",
              "zh": "在同一坐标系中画出两条直线，读出它们相交处的坐标。这种方法能非常直观地展现解的含义，但只有当交点恰好落在整齐的格点上时才精确。务必把答案代回两个方程加以验证。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading the intersection",
                "zh": "例题 1：读取交点"
              },
              "problem": {
                "en": "Solve the system by graphing: $y = 2x - 1$ and $y = -x + 5$.",
                "zh": "用图象法解方程组：$y = 2x - 1$ 与 $y = -x + 5$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first line has slope $2$ and $y$-intercept $-1$; the second has slope $-1$ and $y$-intercept $5$. Plotting both, they cross at $(2, 3)$.",
                  "zh": "第一条直线斜率为 $2$，$y$ 轴截距为 $-1$；第二条斜率为 $-1$，$y$ 轴截距为 $5$。画出两条线，它们相交于 $(2, 3)$。"
                },
                {
                  "type": "p",
                  "en": "Check: $2(2) - 1 = 3$ ✓ and $-(2) + 5 = 3$ ✓. Both equations give $y = 3$, so the solution is $(2, 3)$.",
                  "zh": "验证：$2(2) - 1 = 3$ ✓，$-(2) + 5 = 3$ ✓。两个方程都得到 $y = 3$，所以解为 $(2, 3)$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Method 2: Substitution",
              "zh": "方法二：代入法"
            },
            {
              "type": "p",
              "en": "Substitution is best when one variable is already isolated (or easy to isolate). Solve one equation for a single variable, substitute that expression into the OTHER equation, solve the resulting one-variable equation, and then back-substitute to find the second variable.",
              "zh": "当某个变量已经被单独表示（或容易被单独表示）时，代入法最方便。先把一个方程解出某一个变量，把这个表达式代入另一个方程，解出这个一元方程，再回代求出第二个变量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Substitution",
                "zh": "例题 2：代入法"
              },
              "problem": {
                "en": "Solve: $y = 3x - 4$ and $2x + y = 11$.",
                "zh": "解：$y = 3x - 4$ 与 $2x + y = 11$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first equation already gives $y$. Substitute $3x - 4$ for $y$ in the second equation:",
                  "zh": "第一个方程已经给出了 $y$。把 $3x - 4$ 代入第二个方程中的 $y$："
                },
                {
                  "type": "math",
                  "tex": "2x + (3x - 4) = 11 \\;\\Rightarrow\\; 5x - 4 = 11 \\;\\Rightarrow\\; x = 3"
                },
                {
                  "type": "p",
                  "en": "Back-substitute: $y = 3(3) - 4 = 5$. The solution is $(3, 5)$, which checks in both equations.",
                  "zh": "回代：$y = 3(3) - 4 = 5$。解为 $(3, 5)$，代入两个方程均成立。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Method 3: Elimination",
              "zh": "方法三：消元法"
            },
            {
              "type": "p",
              "en": "Elimination shines when both equations are in standard form $Ax + By = C$. Add or subtract the equations (after scaling one or both) so that one variable cancels. If needed, multiply an equation by a constant first so the coefficients of one variable become opposites.",
              "zh": "当两个方程都是标准形式 $Ax + By = C$ 时，消元法最为高效。把两个方程相加或相减（必要时先对其中一个或两个方程乘以常数），使某个变量被消去。若有需要，先给某个方程乘上一个常数，让某一变量的系数互为相反数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Elimination with scaling",
                "zh": "例题 3：需要变形的消元法"
              },
              "problem": {
                "en": "Solve: $3x + 2y = 16$ and $5x - 2y = 8$.",
                "zh": "解：$3x + 2y = 16$ 与 $5x - 2y = 8$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The $y$-terms are $+2y$ and $-2y$ — already opposites. Add the equations to eliminate $y$:",
                  "zh": "两个 $y$ 项是 $+2y$ 和 $-2y$——已经互为相反数。把两式相加即可消去 $y$："
                },
                {
                  "type": "math",
                  "tex": "(3x + 5x) + (2y - 2y) = 16 + 8 \\;\\Rightarrow\\; 8x = 24 \\;\\Rightarrow\\; x = 3"
                },
                {
                  "type": "p",
                  "en": "Substitute $x = 3$ into $3x + 2y = 16$: $9 + 2y = 16$, so $2y = 7$ and $y = 3.5$. The solution is $(3, 3.5)$.",
                  "zh": "把 $x = 3$ 代入 $3x + 2y = 16$：$9 + 2y = 16$，得 $2y = 7$，$y = 3.5$。解为 $(3, 3.5)$。"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Graphing — best for visualizing and when a rough or nice-grid answer is enough.",
                  "zh": "图象法——适合直观理解，或答案恰好落在整齐格点上时。"
                },
                {
                  "en": "Substitution — best when a variable is already isolated or has coefficient $1$.",
                  "zh": "代入法——适合某个变量已被单独表示或系数为 $1$ 的情况。"
                },
                {
                  "en": "Elimination — best when both equations are in $Ax + By = C$ form, especially with matching or opposite coefficients.",
                  "zh": "消元法——适合两个方程都是 $Ax + By = C$ 形式，尤其是某变量系数相同或相反时。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: when you eliminate a variable and get a genuine equation like $x = 3$, you are only HALFWAY done. You must back-substitute to find the other variable and report the full ordered pair $(x, y)$ — a coordinate, not a single number.",
              "zh": "常见错误：当你消去一个变量、得到像 $x = 3$ 这样的方程时，你只做了一半。必须回代求出另一个变量，并写出完整的有序数对 $(x, y)$——答案是一个坐标，而不是单个数字。"
            },
            {
              "type": "h3",
              "en": "How Many Solutions?",
              "zh": "有多少个解？"
            },
            {
              "type": "p",
              "en": "Two lines can meet in exactly one point, never meet, or be the very same line. This gives three cases, recognizable both graphically and algebraically.",
              "zh": "两条直线可以恰好相交于一点、永不相交，或本身就是同一条直线。因此有三种情形，既能从图象上、也能从代数上识别。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "One solution: lines with different slopes cross once (consistent, independent).",
                  "zh": "一个解：斜率不同的两条直线相交于一点（相容且独立）。"
                },
                {
                  "en": "No solution: parallel lines — same slope, different $y$-intercepts. Algebra collapses to a false statement like $0 = 6$ (inconsistent).",
                  "zh": "无解：平行线——斜率相同、$y$ 轴截距不同。代数上会化为像 $0 = 6$ 这样的假命题（不相容）。"
                },
                {
                  "en": "Infinitely many solutions: the two equations are the same line. Algebra collapses to a true statement like $0 = 0$ (dependent).",
                  "zh": "无穷多解：两个方程是同一条直线。代数上会化为像 $0 = 0$ 这样的恒真命题（相依）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: before solving, put both equations in slope-intercept form. Same slope AND same intercept means infinitely many solutions; same slope but different intercept means no solution. Different slopes guarantees exactly one solution.",
              "zh": "考试提示：解题前先把两个方程都化成斜截式。斜率相同且截距相同表示无穷多解；斜率相同但截距不同表示无解；斜率不同则保证恰有一个解。"
            },
            {
              "type": "h3",
              "en": "Word Problems: Define, Write, Solve, Check",
              "zh": "应用题：设、列、解、验"
            },
            {
              "type": "p",
              "en": "Real problems — mixtures, ticket sales, two moving rates — often hide a system. Use a four-step workflow: DEFINE two variables in words, WRITE two equations from the two conditions in the problem, SOLVE with the easiest method, and CHECK that the answer makes sense in context.",
              "zh": "现实问题——混合、售票、两种速度——往往隐藏着一个方程组。使用四步流程：用文字设两个变量，根据题目的两个条件列两个方程，用最简便的方法解，并检验答案是否符合实际情境。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: A ticket problem",
                "zh": "例题 4：售票问题"
              },
              "problem": {
                "en": "A school play sells 200 tickets and collects \\$1750. Adult tickets cost \\$10 and student tickets cost \\$5. How many of each were sold?",
                "zh": "一场学校演出售出 200 张票，收入 \\$1750。成人票每张 \\$10，学生票每张 \\$5。各售出多少张？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Define: let $a$ = number of adult tickets, $s$ = number of student tickets. Write one equation for the ticket COUNT and one for the MONEY collected:",
                  "zh": "设：$a$ = 成人票数，$s$ = 学生票数。列出一个\"张数\"方程和一个\"金额\"方程："
                },
                {
                  "type": "math",
                  "tex": "a + s = 200, \\qquad 10a + 5s = 1750"
                },
                {
                  "type": "p",
                  "en": "Elimination is clean here. Multiply the count equation by $5$ to match the student coefficient: $5a + 5s = 1000$. Subtract this from the money equation:",
                  "zh": "这里用消元法很整洁。把张数方程乘以 $5$，使学生票系数一致：$5a + 5s = 1000$。用金额方程减去它："
                },
                {
                  "type": "math",
                  "tex": "(10a + 5s) - (5a + 5s) = 1750 - 1000 \\;\\Rightarrow\\; 5a = 750 \\;\\Rightarrow\\; a = 150"
                },
                {
                  "type": "p",
                  "en": "Back-substitute: $150 + s = 200$, so $s = 50$. There were 150 adult and 50 student tickets. Check the money: $10(150) + 5(50) = 1500 + 250 = 1750$ ✓.",
                  "zh": "回代：$150 + s = 200$，所以 $s = 50$。共售出 150 张成人票和 50 张学生票。验证金额：$10(150) + 5(50) = 1500 + 250 = 1750$ ✓。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The same workflow handles mixture problems (two solutions of different concentrations combined to a target) and two-rate problems (two travelers or two pipes working together). Always let your two variables be the two unknown quantities the question asks for.",
              "zh": "同样的流程也适用于混合问题（两种不同浓度的溶液混合到目标浓度）和两种速度问题（两位旅行者或两根水管共同工作）。始终让你的两个变量表示题目要求的两个未知量。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which ordered pair is the solution to the system $y = x + 1$ and $y = -2x + 7$?",
                "zh": "哪个有序数对是方程组 $y = x + 1$ 与 $y = -2x + 7$ 的解？"
              },
              "choices": [
                "$(2, 3)$",
                "$(3, 4)$",
                "$(1, 2)$",
                "$(0, 1)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Set the expressions equal: $x + 1 = -2x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$, then $y = 2 + 1 = 3$. The pair $(2,3)$ satisfies both equations. $(0,1)$ satisfies only the first line, which is why it is a trap.",
                "zh": "令两式相等：$x + 1 = -2x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$，则 $y = 2 + 1 = 3$。$(2,3)$ 满足两个方程。$(0,1)$ 只满足第一条直线，所以是陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which method is usually easiest for the system $y = 4x - 3$ and $3x + 2y = 5$?",
                "zh": "对于方程组 $y = 4x - 3$ 与 $3x + 2y = 5$，通常哪种方法最简便？"
              },
              "choices": [
                "Graphing, because the lines are parallel",
                "Elimination, because both are in standard form",
                "Substitution, because $y$ is already isolated",
                "There is no way to solve it algebraically"
              ],
              "answer": 2,
              "explanation": {
                "en": "The first equation already gives $y$ by itself, so substituting $4x - 3$ for $y$ in the second equation is fastest. Elimination is less convenient here because only one equation is in standard form, and the lines are not parallel.",
                "zh": "第一个方程已把 $y$ 单独表示，所以把 $4x - 3$ 代入第二个方程最快。这里消元法不太方便，因为只有一个方程是标准形式，而且两条直线并不平行。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve by elimination: $x + y = 10$ and $x - y = 4$. Give your answer as a coordinate $(x, y)$.",
                "zh": "用消元法解：$x + y = 10$ 与 $x - y = 4$。请以坐标 $(x, y)$ 作答。"
              },
              "answer": "(7,3)",
              "accept": [
                "(7, 3)",
                "7,3",
                "x=7,y=3"
              ],
              "explanation": {
                "en": "Add the equations: $2x = 14$, so $x = 7$. Substitute back: $7 + y = 10$ gives $y = 3$. The solution is $(7, 3)$.",
                "zh": "两式相加：$2x = 14$，所以 $x = 7$。回代：$7 + y = 10$ 得 $y = 3$。解为 $(7, 3)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many solutions does the system $y = 3x + 2$ and $y = 3x - 5$ have?",
                "zh": "方程组 $y = 3x + 2$ 与 $y = 3x - 5$ 有多少个解？"
              },
              "choices": [
                "Exactly one solution",
                "Infinitely many solutions",
                "No solution",
                "Exactly two solutions"
              ],
              "answer": 2,
              "explanation": {
                "en": "Both lines have slope $3$ but different $y$-intercepts ($2$ and $-5$), so they are parallel and never meet: no solution. Setting them equal gives $2 = -5$, a false statement, confirming there is no solution.",
                "zh": "两条直线斜率都是 $3$，但 $y$ 轴截距不同（$2$ 和 $-5$），所以平行且永不相交：无解。令两式相等得 $2 = -5$，是假命题，证实无解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve by substitution: $2x + y = 7$ and $y = x - 2$. Enter only the value of $x$ as an integer.",
                "zh": "用代入法解：$2x + y = 7$ 与 $y = x - 2$。只填 $x$ 的值，用整数作答。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Substitute $y = x - 2$ into the first equation: $2x + (x - 2) = 7 \\Rightarrow 3x - 2 = 7 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. (Then $y = 1$, giving the full solution $(3, 1)$.)",
                "zh": "把 $y = x - 2$ 代入第一个方程：$2x + (x - 2) = 7 \\Rightarrow 3x - 2 = 7 \\Rightarrow 3x = 9 \\Rightarrow x = 3$。（再求 $y = 1$，完整解为 $(3, 1)$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A system solved algebraically reduces to $0 = 0$. What does this tell you?",
                "zh": "某方程组经代数化简后得到 $0 = 0$，这说明什么？"
              },
              "choices": [
                "There is exactly one solution at the origin",
                "The two equations describe the same line, so there are infinitely many solutions",
                "The lines are parallel, so there is no solution",
                "A calculation error must have occurred"
              ],
              "answer": 1,
              "explanation": {
                "en": "When both variables cancel and leave a true statement like $0 = 0$, the two equations are equivalent — the same line — so every point on that line is a solution: infinitely many. A false statement like $0 = 6$ would instead mean no solution.",
                "zh": "当两个变量都被消去、留下像 $0 = 0$ 这样的恒真命题时，两个方程是等价的——即同一条直线——所以该直线上每个点都是解：无穷多解。若得到像 $0 = 6$ 的假命题，则表示无解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A chemist mixes a 10% acid solution with a 40% acid solution to make 30 liters of 20% acid solution. Let $x$ be the liters of 10% solution. Find $x$ (in liters, integer).",
                "zh": "化学家把 10% 的酸溶液与 40% 的酸溶液混合，配成 30 升 20% 的酸溶液。设 $x$ 为 10% 溶液的升数，求 $x$（单位：升，整数）。"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20 L",
                "20L"
              ],
              "explanation": {
                "en": "Let $x$ = liters of 10% and $y$ = liters of 40%. Volume: $x + y = 30$. Acid: $0.10x + 0.40y = 0.20(30) = 6$. Substitute $y = 30 - x$: $0.10x + 0.40(30 - x) = 6 \\Rightarrow 12 - 0.30x = 6 \\Rightarrow x = 20$ liters (and $y = 10$).",
                "zh": "设 $x$ = 10% 溶液升数，$y$ = 40% 溶液升数。体积：$x + y = 30$。酸量：$0.10x + 0.40y = 0.20(30) = 6$。代入 $y = 30 - x$：$0.10x + 0.40(30 - x) = 6 \\Rightarrow 12 - 0.30x = 6 \\Rightarrow x = 20$ 升（且 $y = 10$）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: For what value of $k$ does the system $2x - 3y = 7$ and $4x - 6y = k$ have infinitely many solutions?",
                "zh": "荣誉挑战：当 $k$ 取何值时，方程组 $2x - 3y = 7$ 与 $4x - 6y = k$ 有无穷多解？"
              },
              "choices": [
                "$k = 7$",
                "$k = -7$",
                "$k = 0$",
                "$k = 14$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The second equation is the first multiplied by $2$: $2(2x - 3y) = 4x - 6y$ and $2(7) = 14$. Infinitely many solutions require the equations to be the SAME line, so $k = 14$. For any other $k$ the lines are parallel (no solution).",
                "zh": "第二个方程是第一个乘以 $2$：$2(2x - 3y) = 4x - 6y$，且 $2(7) = 14$。要有无穷多解，两个方程必须是同一条直线，所以 $k = 14$。$k$ 取其他值时两线平行（无解）。"
              }
            }
          ]
        },
        {
          "id": "systems-of-inequalities",
          "title": "Graphing Linear Inequalities and Systems of Inequalities",
          "titleZh": "二元一次不等式与不等式组",
          "content": [
            {
              "type": "h2",
              "en": "When \"Equals\" Becomes \"At Most\"",
              "zh": "当\"等于\"变成\"至多\""
            },
            {
              "type": "p",
              "en": "Suppose you have \\$60 to spend at the farmers market, where apples cost \\$3 per bag and honey costs \\$5 per jar. You do not have to spend exactly \\$60 — you just cannot spend more. That \"cannot spend more\" condition is an inequality: $3x + 5y \\le 60$. Instead of a single line, its solution is a whole region of the plane.",
              "zh": "假设你有 \\$60 在农贸市场消费，苹果每袋 \\$3，蜂蜜每罐 \\$5。你不必恰好花完 \\$60——只是不能超支。这个\"不能超支\"的条件就是一个不等式：$3x + 5y \\le 60$。它的解不再是一条直线，而是平面上的一整片区域。"
            },
            {
              "type": "h3",
              "en": "Graphing a Two-Variable Linear Inequality",
              "zh": "画二元一次不等式的图象"
            },
            {
              "type": "p",
              "en": "Every linear inequality has a boundary line, found by replacing the inequality sign with $=$. This line splits the plane into two half-planes; the solution is one of them. Two decisions finish the graph: what kind of boundary to draw, and which side to shade.",
              "zh": "每个一次不等式都有一条边界线，把不等号换成 $=$ 即可得到。这条线把平面分成两个半平面；解就是其中之一。完成图象需要两个决定：画什么样的边界线，以及给哪一侧涂阴影。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Use a DASHED boundary line for strict inequalities $<$ or $>$ (points on the line are NOT included).",
                  "zh": "对严格不等式 $<$ 或 $>$ 用虚线边界（线上的点不包含在内）。"
                },
                {
                  "en": "Use a SOLID boundary line for $\\le$ or $\\ge$ (points on the line ARE included).",
                  "zh": "对 $\\le$ 或 $\\ge$ 用实线边界（线上的点包含在内）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "To decide which side to shade, pick a test point not on the line — $(0,0)$ is easiest whenever the line does not pass through the origin. Substitute it into the inequality: if it makes a true statement, shade the side containing the test point; if false, shade the other side.",
              "zh": "要决定给哪一侧涂阴影，取一个不在线上的测试点——只要直线不过原点，$(0,0)$ 最方便。把它代入不等式：若得到真命题，就给含测试点的一侧涂阴影；若为假，则给另一侧涂阴影。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Graphing one inequality",
                "zh": "例题 1：画一个不等式"
              },
              "problem": {
                "en": "Graph $y > 2x - 3$.",
                "zh": "画 $y > 2x - 3$ 的图象。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Boundary line: $y = 2x - 3$, slope $2$ and $y$-intercept $-3$. Because the sign is strict ($>$), draw it DASHED.",
                  "zh": "边界线：$y = 2x - 3$，斜率 $2$，$y$ 轴截距 $-3$。因为是严格不等号（$>$），画成虚线。"
                },
                {
                  "type": "p",
                  "en": "Test $(0,0)$: is $0 > 2(0) - 3$? That is $0 > -3$, which is TRUE. So shade the side containing the origin — the region above the dashed line.",
                  "zh": "代入 $(0,0)$：$0 > 2(0) - 3$ 吗？即 $0 > -3$，为真。于是给含原点的一侧——虚线上方的区域——涂阴影。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: do not decide the boundary style from whether the number is positive or negative. The DASHED-vs-SOLID choice depends ONLY on the inequality symbol: strict ($<, >$) means dashed, or-equal ($\\le, \\ge$) means solid.",
              "zh": "常见错误：不要根据数是正是负来决定边界线样式。虚线还是实线只取决于不等号本身：严格不等号（$<, >$）用虚线，带等号（$\\le, \\ge$）用实线。"
            },
            {
              "type": "h3",
              "en": "Checking Whether a Point Is a Solution",
              "zh": "检验一个点是否是解"
            },
            {
              "type": "p",
              "en": "A point is a solution of an inequality when substituting its coordinates makes the inequality true. This is the fastest way to verify a graph or to answer \"is this combination allowed?\" in a real problem.",
              "zh": "当把一个点的坐标代入不等式后使之成立时，这个点就是该不等式的解。这是验证图象、或回答现实问题中\"这个组合是否被允许？\"的最快方法。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Is the point a solution?",
                "zh": "例题 2：这个点是解吗？"
              },
              "problem": {
                "en": "Is $(4, 1)$ a solution of $3x + 5y \\le 60$?",
                "zh": "$(4, 1)$ 是 $3x + 5y \\le 60$ 的解吗？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "3(4) + 5(1) = 12 + 5 = 17 \\le 60 \\;\\checkmark"
                },
                {
                  "type": "p",
                  "en": "Since $17 \\le 60$ is true, $(4, 1)$ IS a solution — buying 4 bags of apples and 1 jar of honey stays within the \\$60 budget.",
                  "zh": "由于 $17 \\le 60$ 成立，$(4, 1)$ 是解——买 4 袋苹果和 1 罐蜂蜜没有超过 \\$60 预算。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Systems of Inequalities: The Overlap",
              "zh": "不等式组：重叠区域"
            },
            {
              "type": "p",
              "en": "A system of inequalities asks for points that satisfy ALL of the inequalities at once. Graph each inequality on the same axes; the solution set is the region where the shadings OVERLAP. A point is a solution only if it lies in every shaded region.",
              "zh": "不等式组要求同时满足所有不等式的点。在同一坐标系中画出每个不等式；解集就是各阴影相互重叠的区域。只有当一个点落在每一片阴影区域内时，它才是解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: A system of two inequalities",
                "zh": "例题 3：两个不等式组成的组"
              },
              "problem": {
                "en": "Describe the solution region of $y \\le -x + 4$ and $y > \\tfrac{1}{2}x - 1$.",
                "zh": "描述 $y \\le -x + 4$ 与 $y > \\tfrac{1}{2}x - 1$ 的解区域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Graph $y = -x + 4$ SOLID (because of $\\le$) and shade below it. Graph $y = \\tfrac{1}{2}x - 1$ DASHED (because of $>$) and shade above it.",
                  "zh": "把 $y = -x + 4$ 画成实线（因为 $\\le$）并在其下方涂阴影。把 $y = \\tfrac{1}{2}x - 1$ 画成虚线（因为 $>$）并在其上方涂阴影。"
                },
                {
                  "type": "p",
                  "en": "The solution is the wedge-shaped region where both shadings overlap. Check with $(0,0)$: $0 \\le 4$ ✓ and $0 > -1$ ✓, so the origin lies in the solution region.",
                  "zh": "解是两片阴影重叠而成的楔形区域。用 $(0,0)$ 验证：$0 \\le 4$ ✓ 且 $0 > -1$ ✓，所以原点位于解区域内。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: when several inequalities are graphed, the final answer is only the region shaded by EVERY inequality — not the total shaded area. Lightly shade each region and then darken just the common overlap so it stands out.",
              "zh": "考试提示：当画了多个不等式时，最终答案只是被每一个不等式都涂到的区域——而不是所有阴影的总和。可以先给每片区域浅浅涂色，再把公共重叠部分加深，使其突出。"
            },
            {
              "type": "h3",
              "en": "Writing Inequalities from Real Constraints",
              "zh": "从现实约束写不等式"
            },
            {
              "type": "p",
              "en": "Budget and resource problems translate naturally into systems. Watch key phrases: \"at most\" and \"no more than\" give $\\le$; \"at least\" gives $\\ge$; \"cannot be negative\" gives $x \\ge 0$ and $y \\ge 0$. These non-negativity constraints are almost always present when the variables count real objects.",
              "zh": "预算与资源问题能自然地转化为不等式组。注意关键词：\"至多\"、\"不超过\"对应 $\\le$；\"至少\"对应 $\\ge$；\"不能为负\"对应 $x \\ge 0$ 和 $y \\ge 0$。当变量表示实际物品的数量时，这些非负约束几乎总是存在。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Modeling a budget",
                "zh": "例题 4：为预算建模"
              },
              "problem": {
                "en": "A student can work at most 20 hours per week total, tutoring ($t$ hours) and dog-walking ($d$ hours), and must earn at least \\$150. Tutoring pays \\$15/hr and dog-walking pays \\$10/hr. Write the system.",
                "zh": "一名学生每周总共最多工作 20 小时，包括家教（$t$ 小时）和遛狗（$d$ 小时），且必须至少赚 \\$150。家教每小时 \\$15，遛狗每小时 \\$10。写出这个不等式组。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "\"At most 20 hours\" gives $t + d \\le 20$. \"At least \\$150\" gives $15t + 10d \\ge 150$. Hours cannot be negative, so $t \\ge 0$ and $d \\ge 0$.",
                  "zh": "\"最多 20 小时\"给出 $t + d \\le 20$。\"至少 \\$150\"给出 $15t + 10d \\ge 150$。小时数不能为负，所以 $t \\ge 0$ 且 $d \\ge 0$。"
                },
                {
                  "type": "math",
                  "tex": "t + d \\le 20, \\quad 15t + 10d \\ge 150, \\quad t \\ge 0, \\quad d \\ge 0"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Honors: Corner Points of the Feasible Region",
              "zh": "荣誉拓展：可行域的顶点"
            },
            {
              "type": "p",
              "en": "The overlapping region of a real-world system is called the feasible region — every point in it is an allowed choice. Its corners, where two boundary lines meet, are called corner points (vertices). They matter because in optimization (which you will meet in later courses), the best value of a quantity like profit or cost always occurs at a corner point.",
              "zh": "现实问题中不等式组的重叠区域称为可行域——其中每个点都是一种被允许的选择。它的角，即两条边界线相交处，称为顶点（角点）。它们之所以重要，是因为在最优化问题中（你将在后续课程学到），像利润或成本这样量的最优值总是出现在某个顶点处。"
            },
            {
              "type": "p",
              "en": "To find a corner point, solve the two boundary lines that meet there as a SYSTEM OF EQUATIONS — exactly the substitution or elimination skills from the previous lesson. This is why systems of equations and systems of inequalities belong together.",
              "zh": "要求出一个顶点，就把相交于该处的两条边界线当作方程组来解——正是上一课的代入法或消元法技能。这也正是方程组与不等式组要放在一起学习的原因。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 5: Finding a corner point",
                "zh": "例题 5：求一个顶点"
              },
              "problem": {
                "en": "Find the corner point where the boundaries $x + y = 20$ and $15x + 10y = 150$ meet.",
                "zh": "求边界 $x + y = 20$ 与 $15x + 10y = 150$ 的交点（顶点）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "From $x + y = 20$, write $y = 20 - x$. Substitute: $15x + 10(20 - x) = 150 \\Rightarrow 5x + 200 = 150 \\Rightarrow 5x = -50 \\Rightarrow x = -10$.",
                  "zh": "由 $x + y = 20$ 得 $y = 20 - x$。代入：$15x + 10(20 - x) = 150 \\Rightarrow 5x + 200 = 150 \\Rightarrow 5x = -50 \\Rightarrow x = -10$。"
                },
                {
                  "type": "p",
                  "en": "Then $y = 30$, so these two lines cross at $(-10, 30)$. Because $x = -10$ violates $x \\ge 0$, this intersection is OUTSIDE the feasible region — a reminder that only corner points satisfying every constraint count.",
                  "zh": "则 $y = 30$，所以两线相交于 $(-10, 30)$。由于 $x = -10$ 违反了 $x \\ge 0$，这个交点在可行域之外——提醒我们只有满足每个约束的顶点才算数。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "When graphing $y \\ge 3x - 2$, what kind of boundary line should you draw?",
                "zh": "画 $y \\ge 3x - 2$ 时，应画什么样的边界线？"
              },
              "choices": [
                "A solid line, because $\\ge$ includes the boundary",
                "A dashed line, because the boundary is not included",
                "A vertical line at $x = 3$",
                "No boundary line is needed"
              ],
              "answer": 0,
              "explanation": {
                "en": "The symbol $\\ge$ means \"greater than OR equal to,\" so points on the line are solutions and the boundary is drawn SOLID. Dashed lines are only for strict inequalities $<$ and $>$.",
                "zh": "符号 $\\ge$ 表示\"大于或等于\"，所以线上的点也是解，边界画成实线。虚线只用于严格不等号 $<$ 和 $>$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Is $(1, 5)$ a solution of the inequality $2x + y < 6$?",
                "zh": "$(1, 5)$ 是不等式 $2x + y < 6$ 的解吗？"
              },
              "choices": [
                "Yes, because $(1,5)$ is above the line",
                "No, because $2(1) + 5 = 7$, which is not less than $6$",
                "Yes, because both coordinates are positive",
                "It cannot be determined without a graph"
              ],
              "answer": 1,
              "explanation": {
                "en": "Substitute: $2(1) + 5 = 7$. Since $7 < 6$ is false, $(1,5)$ is NOT a solution. Whether coordinates are positive is irrelevant — you must test the actual inequality.",
                "zh": "代入：$2(1) + 5 = 7$。由于 $7 < 6$ 为假，$(1,5)$ 不是解。坐标是否为正无关紧要——必须用真正的不等式检验。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the inequality $x + 2y \\le 8$, is the test point $(0,0)$ a solution? Answer yes or no.",
                "zh": "对于不等式 $x + 2y \\le 8$，测试点 $(0,0)$ 是解吗？请回答 yes 或 no。"
              },
              "answer": "yes",
              "accept": [
                "Yes",
                "YES",
                "是",
                "y"
              ],
              "explanation": {
                "en": "Substitute $(0,0)$: $0 + 2(0) = 0 \\le 8$ is true, so $(0,0)$ is a solution. This means you shade the side of the boundary line that contains the origin.",
                "zh": "代入 $(0,0)$：$0 + 2(0) = 0 \\le 8$ 成立，所以 $(0,0)$ 是解。这意味着要给含原点的那一侧涂阴影。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a system of two inequalities, the solution set is:",
                "zh": "在两个不等式组成的组中，解集是："
              },
              "choices": [
                "Every point shaded by at least one inequality",
                "Only points on the two boundary lines",
                "The region where both shaded areas overlap",
                "The area between the two $y$-intercepts"
              ],
              "answer": 2,
              "explanation": {
                "en": "A solution of the system must satisfy BOTH inequalities, so it lies in the overlap of the two shaded regions. Points shaded by only one inequality fail the other, which is why 'at least one' is wrong.",
                "zh": "方程组（不等式组）的解必须同时满足两个不等式，所以它位于两片阴影的重叠区域内。只被一个不等式涂到的点会不满足另一个，所以\"至少一个\"是错的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A booster club sells shirts ($s$) and hats ($h$), needing at least 100 items total. Write the inequality for this constraint using $s$ and $h$ (use >= for \"greater than or equal to\").",
                "zh": "啦啦队后援会售卖 T 恤（$s$）和帽子（$h$），总数至少需要 100 件。用 $s$ 和 $h$ 写出这个约束的不等式（用 >= 表示\"大于或等于\"）。"
              },
              "answer": "s+h>=100",
              "accept": [
                "s + h >= 100",
                "h+s>=100",
                "100<=s+h",
                "s+h≥100"
              ],
              "explanation": {
                "en": "\"At least 100 items total\" means the sum of shirts and hats is $\\ge 100$: $s + h \\ge 100$. 'At least' translates to $\\ge$, not $\\le$ or $>$.",
                "zh": "\"总数至少 100 件\"意味着 T 恤与帽子之和 $\\ge 100$：$s + h \\ge 100$。\"至少\"对应 $\\ge$，而不是 $\\le$ 或 $>$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which point lies in the solution region of BOTH $y < x$ and $y \\ge -2$?",
                "zh": "哪个点同时位于 $y < x$ 与 $y \\ge -2$ 的解区域内？"
              },
              "choices": [
                "$(0, 0)$",
                "$(-1, 2)$",
                "$(1, -3)$",
                "$(3, 1)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Test $(3,1)$: $1 < 3$ ✓ and $1 \\ge -2$ ✓ — it satisfies both. $(0,0)$ fails $y < x$ (since $0 < 0$ is false); $(-1,2)$ fails $y < x$; $(1,-3)$ fails $y \\ge -2$.",
                "zh": "检验 $(3,1)$：$1 < 3$ ✓ 且 $1 \\ge -2$ ✓——两个都满足。$(0,0)$ 不满足 $y < x$（因为 $0 < 0$ 为假）；$(-1,2)$ 不满足 $y < x$；$(1,-3)$ 不满足 $y \\ge -2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the corner point where the boundary lines $x = 0$ and $x + y = 12$ intersect. Give your answer as a coordinate $(x, y)$.",
                "zh": "求边界线 $x = 0$ 与 $x + y = 12$ 的交点（顶点）。请以坐标 $(x, y)$ 作答。"
              },
              "answer": "(0,12)",
              "accept": [
                "(0, 12)",
                "0,12",
                "x=0,y=12"
              ],
              "explanation": {
                "en": "Substitute $x = 0$ into $x + y = 12$: $0 + y = 12$, so $y = 12$. The corner point is $(0, 12)$ — it lies on the $y$-axis where the slanted boundary crosses it.",
                "zh": "把 $x = 0$ 代入 $x + y = 12$：$0 + y = 12$，所以 $y = 12$。顶点是 $(0, 12)$——它位于斜边界与 $y$ 轴的交点处。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: The feasible region is bounded by $x \\ge 0$, $y \\ge 0$, and $x + y \\le 10$. How many corner points (vertices) does this triangular region have? Answer with a whole number.",
                "zh": "荣誉挑战：可行域由 $x \\ge 0$、$y \\ge 0$ 与 $x + y \\le 10$ 界定。这个三角形区域有多少个顶点？请用整数作答。"
              },
              "answer": "3",
              "accept": [
                "three",
                "3个",
                "三"
              ],
              "explanation": {
                "en": "The three boundaries meet pairwise at $(0,0)$, $(10,0)$, and $(0,10)$, forming a triangle with 3 corner points. In optimization, the maximum or minimum of a linear quantity over this region would occur at one of these 3 vertices.",
                "zh": "三条边界两两相交于 $(0,0)$、$(10,0)$ 和 $(0,10)$，构成一个有 3 个顶点的三角形。在最优化中，某个线性量在该区域上的最大值或最小值会出现在这 3 个顶点之一。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "sequences",
      "title": "Unit 4: Sequences",
      "titleZh": "第四单元：数列",
      "lessons": [
        {
          "id": "arithmetic-sequences",
          "title": "Arithmetic Sequences",
          "titleZh": "等差数列",
          "content": [
            {
              "type": "h2",
              "en": "Sequences as Functions of Position",
              "zh": "把数列看作位置的函数"
            },
            {
              "type": "p",
              "en": "Imagine the front section of a concert hall at the Eccles Theater in Salt Lake City. The first row has 20 seats, and each row behind it has 3 more seats than the row in front. Row 1 has 20 seats, row 2 has 23, row 3 has 26, and so on. This ordered list of numbers — $20, 23, 26, 29, \\ldots$ — is a sequence. Each number in the list is called a term.",
              "zh": "想象盐湖城 Eccles 剧院前区的座位。第一排有 20 个座位，之后每一排都比前一排多 3 个座位。第 1 排有 20 个座位，第 2 排有 23 个，第 3 排有 26 个，依此类推。这个有序的数字列表——$20, 23, 26, 29, \\ldots$——就是一个数列。列表中的每个数都称为一项。"
            },
            {
              "type": "p",
              "en": "A sequence is really a function. The input is the position number $n$ (row 1, row 2, row 3, …) and the output is the term at that position, written $a_n$. Because you cannot have row $2.5$ or row $-1$, the domain is only the positive integers $1, 2, 3, \\ldots$ For this reason the graph of a sequence is a set of separate, dotted points — never a solid connected line.",
              "zh": "数列本质上就是一个函数。输入是位置编号 $n$（第 1 排、第 2 排、第 3 排……），输出是该位置上的项，记作 $a_n$。因为不存在第 $2.5$ 排或第 $-1$ 排，所以定义域只有正整数 $1, 2, 3, \\ldots$。正因如此，数列的图象是一组分散的、离散的点——绝不是一条连续的实线。"
            },
            {
              "type": "note",
              "en": "Because the domain is the positive integers, always plot a sequence as discrete dots. Do not connect them with a line — a smooth line would suggest inputs like $n = 2.5$ exist, and they do not.",
              "zh": "由于定义域是正整数，数列一定要画成离散的点。不要用线把它们连起来——连成的平滑曲线会暗示存在像 $n = 2.5$ 这样的输入，而这是不存在的。"
            },
            {
              "type": "h3",
              "en": "The Common Difference",
              "zh": "公差"
            },
            {
              "type": "p",
              "en": "In the seating example, we add the same amount, $3$, to get from each term to the next. A sequence where you add a fixed number every step is called an arithmetic sequence, and that fixed number is the common difference, $d$. To find $d$, subtract any term from the term right after it: $d = a_n - a_{n-1}$.",
              "zh": "在座位的例子中，从每一项到下一项都加上相同的数 $3$。每一步都加上一个固定数的数列称为等差数列，这个固定的数就是公差 $d$。求 $d$ 时，用后一项减去前一项：$d = a_n - a_{n-1}$。"
            },
            {
              "type": "p",
              "en": "For $20, 23, 26, 29, \\ldots$ the common difference is $23 - 20 = 3$. If the terms decrease, $d$ is negative: for $50, 44, 38, 32, \\ldots$ the common difference is $44 - 50 = -6$.",
              "zh": "对于 $20, 23, 26, 29, \\ldots$，公差是 $23 - 20 = 3$。如果各项递减，则 $d$ 为负：对于 $50, 44, 38, 32, \\ldots$，公差是 $44 - 50 = -6$。"
            },
            {
              "type": "h3",
              "en": "Two Ways to Describe a Sequence",
              "zh": "描述数列的两种方式"
            },
            {
              "type": "p",
              "en": "The recursive form tells you where to start and how to take one step. You give the first term $a_1$, then a rule that builds each term from the one before it:",
              "zh": "递推形式告诉你从哪里开始，以及如何走一步。你给出首项 $a_1$，再给出一条由前一项生成当前项的规则："
            },
            {
              "type": "math",
              "tex": "a_1 = 20, \\qquad a_n = a_{n-1} + 3"
            },
            {
              "type": "p",
              "en": "The recursive form is natural but slow: to find $a_{100}$ you would have to build all 99 terms before it. The explicit form fixes this by giving $a_n$ directly from $n$. Starting at $a_1$ and adding $d$ a total of $(n-1)$ times gives:",
              "zh": "递推形式很自然，但很慢：要求 $a_{100}$，你得先算出它前面的 99 项。显式形式解决了这个问题，它直接用 $n$ 给出 $a_n$。从 $a_1$ 出发，共加 $(n-1)$ 次 $d$，得到："
            },
            {
              "type": "math",
              "tex": "a_n = a_1 + (n-1)d"
            },
            {
              "type": "p",
              "en": "For the seats, $a_n = 20 + (n-1)(3)$. Row 100 has $a_{100} = 20 + 99(3) = 20 + 297 = 317$ seats — found in one step, no list needed.",
              "zh": "对于座位，$a_n = 20 + (n-1)(3)$。第 100 排有 $a_{100} = 20 + 99(3) = 20 + 297 = 317$ 个座位——一步求出，无需列出整个列表。"
            },
            {
              "type": "note",
              "en": "Common mistake: writing $a_n = a_1 + n\\,d$. You multiply $d$ by $(n-1)$, not by $n$, because the first term has had zero steps added to it. Check: at $n = 1$, the formula must return $a_1$, and $a_1 + (1-1)d = a_1$. ✓",
              "zh": "常见错误：写成 $a_n = a_1 + n\\,d$。要用 $(n-1)$ 乘以 $d$，而不是用 $n$，因为首项还没有加过任何一步。检验：当 $n = 1$ 时，公式必须返回 $a_1$，而 $a_1 + (1-1)d = a_1$。✓"
            },
            {
              "type": "h3",
              "en": "Converting Between the Two Forms",
              "zh": "两种形式之间的转换"
            },
            {
              "type": "p",
              "en": "The two forms carry the same information. From an explicit rule, $a_1$ is the value at $n = 1$ and $d$ is the number multiplying $(n-1)$. From a recursive rule, read off $a_1$ and $d$ directly and plug them into $a_n = a_1 + (n-1)d$.",
              "zh": "两种形式携带相同的信息。由显式规则可知，$a_1$ 是 $n = 1$ 时的值，$d$ 是与 $(n-1)$ 相乘的数。由递推规则可直接读出 $a_1$ 和 $d$，再代入 $a_n = a_1 + (n-1)d$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Building both forms",
                "zh": "例题 1：写出两种形式"
              },
              "problem": {
                "en": "A savings plan starts with $\\$75$ and adds $\\$40$ every month. Write the recursive and explicit forms for the balance $a_n$ after $n$ months of deposits, then find the balance at $n = 12$.",
                "zh": "一个储蓄计划起始为 $\\$75$，每月存入 $\\$40$。写出存款 $n$ 个月后余额 $a_n$ 的递推形式和显式形式，然后求 $n = 12$ 时的余额。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first term is $a_1 = 75$ and the common difference is $d = 40$. Recursive form:",
                  "zh": "首项为 $a_1 = 75$，公差为 $d = 40$。递推形式："
                },
                {
                  "type": "math",
                  "tex": "a_1 = 75, \\qquad a_n = a_{n-1} + 40"
                },
                {
                  "type": "p",
                  "en": "Explicit form, substituting into $a_n = a_1 + (n-1)d$:",
                  "zh": "显式形式，代入 $a_n = a_1 + (n-1)d$："
                },
                {
                  "type": "math",
                  "tex": "a_n = 75 + (n-1)(40)"
                },
                {
                  "type": "p",
                  "en": "At $n = 12$: $a_{12} = 75 + 11(40) = 75 + 440 = 515$. The balance is $\\$515$.",
                  "zh": "当 $n = 12$：$a_{12} = 75 + 11(40) = 75 + 440 = 515$。余额为 $\\$515$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Arithmetic Sequences ARE Linear Functions",
              "zh": "等差数列就是一次函数"
            },
            {
              "type": "p",
              "en": "Look again at the explicit form and rearrange it: $a_n = a_1 + (n-1)d = dn + (a_1 - d)$. This is exactly the shape $y = mx + b$ of a linear function, with $n$ in place of $x$. The common difference $d$ plays the role of the slope — the constant rate of change — and $a_1 - d$ is the $y$-intercept (the value the line would have at $n = 0$).",
              "zh": "再看显式形式并整理：$a_n = a_1 + (n-1)d = dn + (a_1 - d)$。这正是一次函数 $y = mx + b$ 的形式，只是把 $x$ 换成了 $n$。公差 $d$ 扮演斜率的角色——即恒定的变化率——而 $a_1 - d$ 是 $y$ 轴截距（直线在 $n = 0$ 处应有的值）。"
            },
            {
              "type": "p",
              "en": "So an arithmetic sequence is just a linear function whose domain has been restricted to the positive integers. That is why the dots always line up in a straight path when plotted, and why \"constant common difference\" and \"constant slope\" mean the same thing.",
              "zh": "所以等差数列就是把定义域限制为正整数的一次函数。这就是为什么画出的点总是排成一条直线路径，也是为什么\"公差恒定\"和\"斜率恒定\"表达的是同一件事。"
            },
            {
              "type": "note",
              "en": "Test tip: to check whether a table is arithmetic, confirm the inputs go up by equal steps (usually $1$), then check that the outputs change by a constant amount. Equal input steps AND a constant output difference means arithmetic — the same test you use to spot a linear function.",
              "zh": "考试提示：要判断一张表是否为等差数列，先确认输入以相等的步长增加（通常为 $1$），再检查输出是否以恒定的量变化。输入步长相等且输出差恒定，就是等差数列——这与判断一次函数用的是同一个方法。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Recursive to explicit, then predict",
                "zh": "例题 2：递推转显式，再预测"
              },
              "problem": {
                "en": "A sequence is given recursively by $a_1 = 8$, $a_n = a_{n-1} - 5$. Write the explicit form and find $a_{20}$.",
                "zh": "一个数列由递推式给出：$a_1 = 8$，$a_n = a_{n-1} - 5$。写出显式形式并求 $a_{20}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Read off $a_1 = 8$ and $d = -5$. Substitute into the explicit formula:",
                  "zh": "读出 $a_1 = 8$，$d = -5$。代入显式公式："
                },
                {
                  "type": "math",
                  "tex": "a_n = 8 + (n-1)(-5) = 8 - 5(n-1)"
                },
                {
                  "type": "p",
                  "en": "Now evaluate at $n = 20$:",
                  "zh": "现在在 $n = 20$ 处求值："
                },
                {
                  "type": "math",
                  "tex": "a_{20} = 8 - 5(19) = 8 - 95 = -87"
                },
                {
                  "type": "p",
                  "en": "The 20th term is $-87$. Notice the negative common difference makes the terms decrease steadily, like a line sloping downward.",
                  "zh": "第 20 项是 $-87$。注意负公差使各项稳定递减，就像一条向下倾斜的直线。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the common difference of the sequence $7, 11, 15, 19, \\ldots$?",
                "zh": "数列 $7, 11, 15, 19, \\ldots$ 的公差是多少？"
              },
              "choices": [
                "$4$",
                "$3$",
                "$7$",
                "$11$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The common difference is any term minus the one before it: $11 - 7 = 4$. It is not $7$ (that is the first term, $a_1$) and not $11$ (that is the second term).",
                "zh": "公差是任意一项减去它前面的一项：$11 - 7 = 4$。它不是 $7$（那是首项 $a_1$），也不是 $11$（那是第二项）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is the correct explicit formula for the arithmetic sequence with $a_1 = 6$ and $d = 3$?",
                "zh": "首项 $a_1 = 6$、公差 $d = 3$ 的等差数列，正确的显式公式是哪一个？"
              },
              "choices": [
                "$a_n = 6 + 3n$",
                "$a_n = 3 + 6(n-1)$",
                "$a_n = 6 + 3(n-1)$",
                "$a_n = 6 \\cdot 3^{n-1}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The explicit form is $a_n = a_1 + (n-1)d = 6 + 3(n-1)$. Choice A uses $n$ instead of $(n-1)$, which wrongly makes $a_1 = 9$; the last choice is a geometric formula, not arithmetic.",
                "zh": "显式形式为 $a_n = a_1 + (n-1)d = 6 + 3(n-1)$。选项 A 用了 $n$ 而不是 $(n-1)$，会错误地得到 $a_1 = 9$；最后一项是等比数列公式，不是等差数列。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why is the graph of a sequence drawn as separate dots instead of a connected line?",
                "zh": "为什么数列的图象画成分散的点而不是一条连续的线？"
              },
              "choices": [
                "Because the terms are always negative",
                "Because the domain is only the positive integers, so there are no in-between inputs",
                "Because sequences are not functions",
                "Because the common difference changes each step"
              ],
              "answer": 1,
              "explanation": {
                "en": "The position number $n$ can only be $1, 2, 3, \\ldots$, so there is no term at $n = 2.5$. A connected line would falsely imply such in-between inputs exist. Sequences ARE functions, so choice C is wrong.",
                "zh": "位置编号 $n$ 只能是 $1, 2, 3, \\ldots$，所以在 $n = 2.5$ 处没有项。连续的线会错误地暗示存在这种中间输入。数列是函数，所以选项 C 是错的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the arithmetic sequence $a_n = 4 + 6(n-1)$, find the 10th term $a_{10}$. Give your answer as an integer.",
                "zh": "对于等差数列 $a_n = 4 + 6(n-1)$，求第 10 项 $a_{10}$。请以整数作答。"
              },
              "answer": "58",
              "accept": [
                "58.0"
              ],
              "explanation": {
                "en": "Substitute $n = 10$: $a_{10} = 4 + 6(10-1) = 4 + 6(9) = 4 + 54 = 58$.",
                "zh": "代入 $n = 10$：$a_{10} = 4 + 6(10-1) = 4 + 6(9) = 4 + 54 = 58$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An arithmetic sequence has $a_1 = 12$ and $d = -4$. What is the common difference written as an integer?",
                "zh": "一个等差数列有 $a_1 = 12$，$d = -4$。公差写成整数是多少？"
              },
              "answer": "-4",
              "accept": [
                "-4.0",
                "−4"
              ],
              "explanation": {
                "en": "The common difference is stated directly as $d = -4$. A negative common difference means each term is $4$ less than the one before, so the sequence decreases: $12, 8, 4, 0, \\ldots$",
                "zh": "公差直接给出为 $d = -4$。负公差表示每一项比前一项小 $4$，所以数列递减：$12, 8, 4, 0, \\ldots$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A stadium section has 15 seats in row 1 and adds 2 seats per row. How many seats are in row 30?",
                "zh": "某体育场看台第 1 排有 15 个座位，每往后一排增加 2 个座位。第 30 排有多少个座位？"
              },
              "choices": [
                "$60$",
                "$73$",
                "$75$",
                "$45$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Use $a_n = a_1 + (n-1)d = 15 + (30-1)(2) = 15 + 58 = 73$. Choice C ($75$) comes from the mistake of using $n$ instead of $(n-1)$: $15 + 30(2) = 75$.",
                "zh": "用 $a_n = a_1 + (n-1)d = 15 + (30-1)(2) = 15 + 58 = 73$。选项 C（$75$）来自用 $n$ 代替 $(n-1)$ 的错误：$15 + 30(2) = 75$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The first three terms of an arithmetic sequence are $5, 12, 19$. Write its explicit formula using $a_1$ and $d$ in the form a_n = a_1 + (n-1)d. Enter the value of $a_1$ and $d$ as a coordinate pair $(a_1, d)$.",
                "zh": "某等差数列前三项为 $5, 12, 19$。用 $a_1$ 和 $d$ 以 $a_n = a_1 + (n-1)d$ 的形式写出显式公式。请以坐标对 $(a_1, d)$ 输入 $a_1$ 和 $d$ 的值。"
              },
              "answer": "(5,7)",
              "accept": [
                "(5, 7)",
                "5,7",
                "5, 7"
              ],
              "explanation": {
                "en": "The first term is $a_1 = 5$ and the common difference is $12 - 5 = 7$, so the pair is $(5, 7)$ and $a_n = 5 + (n-1)(7)$.",
                "zh": "首项为 $a_1 = 5$，公差为 $12 - 5 = 7$，所以坐标对为 $(5, 7)$，且 $a_n = 5 + (n-1)(7)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: In an arithmetic sequence, $a_4 = 23$ and $a_9 = 48$. What is $a_1$?",
                "zh": "荣誉挑战：某等差数列中 $a_4 = 23$，$a_9 = 48$。求 $a_1$。"
              },
              "choices": [
                "$5$",
                "$8$",
                "$18$",
                "$10$"
              ],
              "answer": 1,
              "explanation": {
                "en": "From $a_4$ to $a_9$ is $5$ steps and the value rises by $48 - 23 = 25$, so $d = 25/5 = 5$. Then $a_1 = a_4 - 3d = 23 - 3(5) = 23 - 15 = 8$. Choice A ($5$) is the value of $d$, not $a_1$.",
                "zh": "从 $a_4$ 到 $a_9$ 共 $5$ 步，值增加了 $48 - 23 = 25$，所以 $d = 25/5 = 5$。于是 $a_1 = a_4 - 3d = 23 - 3(5) = 23 - 15 = 8$。选项 A（$5$）是 $d$ 的值，不是 $a_1$。"
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
              "en": "When You Multiply Instead of Add",
              "zh": "当你用乘法代替加法时"
            },
            {
              "type": "p",
              "en": "Drop a basketball from a height of 128 cm on a gym floor at your Utah high school. On each bounce it returns to about half of its previous height: $128, 64, 32, 16, \\ldots$ centimeters. Unlike the seating example from the last lesson, we are not adding the same number each time — we are multiplying by the same number, $\\tfrac{1}{2}$. A sequence built by repeated multiplication is a geometric sequence.",
              "zh": "在你所在犹他州高中的体育馆地板上，从 128 厘米高处放下一个篮球。每次弹起后它大约回到上一次高度的一半：$128, 64, 32, 16, \\ldots$ 厘米。与上一课座位的例子不同，这里我们不是每次加上相同的数——而是每次乘以相同的数 $\\tfrac{1}{2}$。通过重复乘法构建的数列就是等比数列。"
            },
            {
              "type": "h3",
              "en": "The Common Ratio",
              "zh": "公比"
            },
            {
              "type": "p",
              "en": "The fixed number you multiply by each step is the common ratio, $r$. To find it, divide any term by the term right before it: $r = \\dfrac{a_n}{a_{n-1}}$. For the bouncing ball, $r = \\dfrac{64}{128} = \\dfrac{1}{2}$. When $r > 1$ the terms grow; when $0 < r < 1$ the terms shrink toward zero.",
              "zh": "每一步要乘以的固定数就是公比 $r$。求 $r$ 时，用任意一项除以它前面的一项：$r = \\dfrac{a_n}{a_{n-1}}$。对于弹跳的球，$r = \\dfrac{64}{128} = \\dfrac{1}{2}$。当 $r > 1$ 时各项增大；当 $0 < r < 1$ 时各项向零缩小。"
            },
            {
              "type": "note",
              "en": "Common mistake: subtracting terms to test for a geometric sequence. Subtraction finds the common difference of an arithmetic sequence. For a geometric sequence you must DIVIDE consecutive terms and check that the ratio is constant.",
              "zh": "常见错误：用相减来判断等比数列。相减求的是等差数列的公差。对于等比数列，你必须用相邻两项相除，并检查比值是否恒定。"
            },
            {
              "type": "h3",
              "en": "Recursive and Explicit Forms",
              "zh": "递推形式与显式形式"
            },
            {
              "type": "p",
              "en": "The recursive form gives the first term and multiplies by $r$ to take one step:",
              "zh": "递推形式给出首项，并通过乘以 $r$ 走一步："
            },
            {
              "type": "math",
              "tex": "a_1 = 128, \\qquad a_n = a_{n-1} \\cdot \\tfrac{1}{2}"
            },
            {
              "type": "p",
              "en": "To jump straight to any term, start at $a_1$ and multiply by $r$ a total of $(n-1)$ times. That repeated multiplication is an exponent, giving the explicit form:",
              "zh": "要直接跳到任意一项，从 $a_1$ 出发，共乘 $(n-1)$ 次 $r$。这种重复的乘法就是乘方，于是得到显式形式："
            },
            {
              "type": "math",
              "tex": "a_n = a_1 \\cdot r^{\\,n-1}"
            },
            {
              "type": "p",
              "en": "For the ball, $a_n = 128 \\cdot \\left(\\tfrac{1}{2}\\right)^{n-1}$. The 5th bounce height is $a_5 = 128 \\cdot \\left(\\tfrac{1}{2}\\right)^4 = 128 \\cdot \\tfrac{1}{16} = 8$ cm.",
              "zh": "对于这个球，$a_n = 128 \\cdot \\left(\\tfrac{1}{2}\\right)^{n-1}$。第 5 次弹起的高度是 $a_5 = 128 \\cdot \\left(\\tfrac{1}{2}\\right)^4 = 128 \\cdot \\tfrac{1}{16} = 8$ 厘米。"
            },
            {
              "type": "note",
              "en": "The exponent is $(n-1)$, not $n$. The first term has been multiplied by $r$ zero times, and $r^0 = 1$, so $a_1 = a_1 \\cdot r^0 = a_1$. Checking $n = 1$ is the fastest way to catch an off-by-one error.",
              "zh": "指数是 $(n-1)$，不是 $n$。首项被乘以 $r$ 的次数为零次，而 $r^0 = 1$，所以 $a_1 = a_1 \\cdot r^0 = a_1$。检验 $n = 1$ 是发现差一错误最快的方法。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Doubling bacteria",
                "zh": "例题 1：细菌翻倍"
              },
              "problem": {
                "en": "A biology lab starts with 3 bacteria, and the count doubles every hour. Write the explicit formula for the number after $n$ hours (with $a_1$ being the starting count) and find the count after 6 hours.",
                "zh": "一个生物实验室起初有 3 个细菌，数量每小时翻一倍。写出 $n$ 小时后数量的显式公式（以 $a_1$ 为起始数量），并求 6 小时后的数量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $a_1 = 3$ (the starting count) and $r = 2$ (doubling). The explicit form is:",
                  "zh": "设 $a_1 = 3$（起始数量），$r = 2$（翻倍）。显式形式为："
                },
                {
                  "type": "math",
                  "tex": "a_n = 3 \\cdot 2^{\\,n-1}"
                },
                {
                  "type": "p",
                  "en": "\"After 6 hours\" is the 7th term (start, then 6 doublings), so use $n = 7$:",
                  "zh": "\"6 小时后\"是第 7 项（起始，再翻 6 次），所以用 $n = 7$："
                },
                {
                  "type": "math",
                  "tex": "a_7 = 3 \\cdot 2^{6} = 3 \\cdot 64 = 192"
                },
                {
                  "type": "p",
                  "en": "There are 192 bacteria after 6 hours.",
                  "zh": "6 小时后有 192 个细菌。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Geometric Sequences ARE Exponential Functions",
              "zh": "等比数列就是指数函数"
            },
            {
              "type": "p",
              "en": "Just as an arithmetic sequence is a linear function restricted to integers, a geometric sequence is an exponential function restricted to the positive integers. The explicit form $a_n = a_1 \\cdot r^{\\,n-1}$ has the same shape as $y = a\\cdot b^{x}$, where the common ratio $r$ is the exponential base (the growth or decay factor). Growth by a constant ratio is exactly what \"exponential\" means.",
              "zh": "正如等差数列是限制在整数上的一次函数，等比数列是限制在正整数上的指数函数。显式形式 $a_n = a_1 \\cdot r^{\\,n-1}$ 与 $y = a\\cdot b^{x}$ 形式相同，其中公比 $r$ 是指数的底（增长或衰减因子）。按恒定比值增长正是\"指数\"的含义。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Arithmetic ↔ linear: constant DIFFERENCE $d$, add each step, straight-line dots.",
                  "zh": "等差 ↔ 一次：恒定的差 $d$，每步相加，点排成直线。"
                },
                {
                  "en": "Geometric ↔ exponential: constant RATIO $r$, multiply each step, dots curve upward (or decay).",
                  "zh": "等比 ↔ 指数：恒定的比 $r$，每步相乘，点向上弯曲（或衰减）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Which Growth Wins?",
              "zh": "哪种增长会胜出？"
            },
            {
              "type": "p",
              "en": "Suppose plan A pays you $\\$100$ more each day (arithmetic, $d = 100$) starting from $\\$100$, while plan B starts at just $\\$1$ and doubles each day (geometric, $r = 2$). At first arithmetic is far ahead — on day 5, plan A has $\\$500$ but plan B only $\\$16$. But doubling is relentless: by day 15 plan A has $\\$1500$ while plan B has over $\\$16{,}000$. Over time, geometric (exponential) growth always overtakes arithmetic (linear) growth, no matter how big the common difference or how small the starting term.",
              "zh": "假设方案 A 从 $\\$100$ 起，每天多付你 $\\$100$（等差，$d = 100$）；方案 B 仅从 $\\$1$ 起，每天翻倍（等比，$r = 2$）。起初等差遥遥领先——第 5 天，方案 A 有 $\\$500$，而方案 B 只有 $\\$16$。但翻倍是无情的：到第 15 天，方案 A 有 $\\$1500$，而方案 B 超过 $\\$16{,}000$。随着时间推移，等比（指数）增长总会超过等差（一次）增长，无论公差多大或起始项多小。"
            },
            {
              "type": "note",
              "en": "Test tip: to decide whether a table is arithmetic or geometric, check BOTH. If consecutive terms have a constant difference, it is arithmetic (linear). If consecutive terms have a constant ratio, it is geometric (exponential). If neither is constant, it is some other kind of model.",
              "zh": "考试提示：要判断一张表是等差还是等比，两者都要检查。如果相邻项有恒定的差，就是等差（一次）。如果相邻项有恒定的比，就是等比（指数）。如果两者都不恒定，那就是其他类型的模型。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Choosing the model from a table",
                "zh": "例题 2：根据表格选择模型"
              },
              "problem": {
                "en": "A truck bought for $\\$40{,}000$ is worth $\\$32{,}000$ after 1 year, $\\$25{,}600$ after 2 years, and $\\$20{,}480$ after 3 years. Is this arithmetic or geometric? Write the explicit rule for its value $a_n$ where $a_1 = 40000$.",
                "zh": "一辆以 $\\$40{,}000$ 购入的卡车，1 年后价值 $\\$32{,}000$，2 年后 $\\$25{,}600$，3 年后 $\\$20{,}480$。这是等差还是等比？写出其价值 $a_n$ 的显式规则，其中 $a_1 = 40000$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Check differences: $32000 - 40000 = -8000$, but $25600 - 32000 = -6400$. Not constant, so not arithmetic. Check ratios: $\\tfrac{32000}{40000} = 0.8$ and $\\tfrac{25600}{32000} = 0.8$. The ratio is constant, so it is geometric with $r = 0.8$ (the truck keeps $80\\%$ of its value each year — this is depreciation).",
                  "zh": "检查差：$32000 - 40000 = -8000$，但 $25600 - 32000 = -6400$。不恒定，所以不是等差。检查比：$\\tfrac{32000}{40000} = 0.8$，$\\tfrac{25600}{32000} = 0.8$。比值恒定，所以是等比，$r = 0.8$（卡车每年保留 $80\\%$ 的价值——这就是折旧）。"
                },
                {
                  "type": "math",
                  "tex": "a_n = 40000 \\cdot (0.8)^{\\,n-1}"
                },
                {
                  "type": "p",
                  "en": "Because $0 < r < 1$, the value decays toward zero over time — a downward-curving exponential.",
                  "zh": "因为 $0 < r < 1$，价值随时间衰减趋向于零——这是一条向下弯曲的指数曲线。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the common ratio of the sequence $5, 15, 45, 135, \\ldots$?",
                "zh": "数列 $5, 15, 45, 135, \\ldots$ 的公比是多少？"
              },
              "choices": [
                "$10$",
                "$5$",
                "$3$",
                "$30$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Divide a term by the one before it: $\\tfrac{15}{5} = 3$. Choice A ($10$) is the common difference $15 - 5 = 10$, which is the wrong test — you must divide, not subtract, for a geometric sequence.",
                "zh": "用一项除以它前面的一项：$\\tfrac{15}{5} = 3$。选项 A（$10$）是公差 $15 - 5 = 10$，这是错误的检验方法——等比数列必须用除法，而不是减法。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which explicit formula matches the geometric sequence with $a_1 = 4$ and $r = 3$?",
                "zh": "首项 $a_1 = 4$、公比 $r = 3$ 的等比数列，匹配的显式公式是哪一个？"
              },
              "choices": [
                "$a_n = 4 \\cdot 3^{\\,n-1}$",
                "$a_n = 4 + 3(n-1)$",
                "$a_n = 3 \\cdot 4^{\\,n-1}$",
                "$a_n = 4 \\cdot 3^{\\,n}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The explicit form is $a_n = a_1 \\cdot r^{\\,n-1} = 4 \\cdot 3^{\\,n-1}$. Choice B is arithmetic; choice D uses exponent $n$ instead of $(n-1)$, which wrongly makes $a_1 = 12$.",
                "zh": "显式形式为 $a_n = a_1 \\cdot r^{\\,n-1} = 4 \\cdot 3^{\\,n-1}$。选项 B 是等差数列；选项 D 用指数 $n$ 而非 $(n-1)$，会错误地得到 $a_1 = 12$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the geometric sequence $a_n = 2 \\cdot 3^{\\,n-1}$, find the 4th term $a_4$. Give your answer as an integer.",
                "zh": "对于等比数列 $a_n = 2 \\cdot 3^{\\,n-1}$，求第 4 项 $a_4$。请以整数作答。"
              },
              "answer": "54",
              "accept": [
                "54.0"
              ],
              "explanation": {
                "en": "Substitute $n = 4$: $a_4 = 2 \\cdot 3^{3} = 2 \\cdot 27 = 54$.",
                "zh": "代入 $n = 4$：$a_4 = 2 \\cdot 3^{3} = 2 \\cdot 27 = 54$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A table shows inputs $1, 2, 3, 4$ with outputs $6, 12, 24, 48$. Which model fits?",
                "zh": "一张表显示输入 $1, 2, 3, 4$ 对应输出 $6, 12, 24, 48$。哪种模型合适？"
              },
              "choices": [
                "Arithmetic, because the outputs go up by a constant amount",
                "Arithmetic, with common difference $2$",
                "Neither, because the outputs are not constant",
                "Geometric, because the outputs have a constant ratio of $2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The differences ($6, 12, 24$) are not constant, but the ratios are: $\\tfrac{12}{6} = \\tfrac{24}{12} = \\tfrac{48}{24} = 2$. A constant ratio means geometric (exponential), not arithmetic.",
                "zh": "各差（$6, 12, 24$）不恒定，但各比恒定：$\\tfrac{12}{6} = \\tfrac{24}{12} = \\tfrac{48}{24} = 2$。比值恒定意味着等比（指数），而不是等差。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball is dropped from 200 cm and each bounce reaches half the previous height. Write the height (in cm) at the 4th term $a_4$ as a number.",
                "zh": "一个球从 200 厘米处落下，每次弹起达到上一次高度的一半。写出第 4 项 $a_4$ 的高度（厘米），用数字作答。"
              },
              "answer": "25",
              "accept": [
                "25.0",
                "25 cm"
              ],
              "explanation": {
                "en": "Here $a_1 = 200$ and $r = \\tfrac{1}{2}$, so $a_4 = 200 \\cdot \\left(\\tfrac{1}{2}\\right)^{3} = 200 \\cdot \\tfrac{1}{8} = 25$ cm.",
                "zh": "这里 $a_1 = 200$，$r = \\tfrac{1}{2}$，所以 $a_4 = 200 \\cdot \\left(\\tfrac{1}{2}\\right)^{3} = 200 \\cdot \\tfrac{1}{8} = 25$ 厘米。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Plan A adds $\\$50$ per day starting from $\\$50$ (arithmetic). Plan B starts at $\\$1$ and doubles daily (geometric). Which statement is true?",
                "zh": "方案 A 从 $\\$50$ 起每天增加 $\\$50$（等差）。方案 B 从 $\\$1$ 起每天翻倍（等比）。哪种说法正确？"
              },
              "choices": [
                "Plan A is always greater because it starts higher",
                "Plan B is always greater because it doubles",
                "Plan A leads early, but Plan B's exponential growth eventually overtakes it",
                "They are equal every day because both grow"
              ],
              "answer": 2,
              "explanation": {
                "en": "Arithmetic growth leads at first (bigger starting value and difference), but exponential growth by a constant ratio eventually overtakes any linear growth. Plan B is not always greater (early on it is tiny), so choice B is wrong.",
                "zh": "等差增长起初领先（起始值和差都更大），但按恒定比值的指数增长最终会超过任何一次增长。方案 B 并非始终更大（早期它很小），所以选项 B 是错的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The first three terms of a geometric sequence are $80, 20, 5$. Enter the common ratio $r$ as a fraction.",
                "zh": "某等比数列前三项为 $80, 20, 5$。将公比 $r$ 以分数形式输入。"
              },
              "answer": "1/4",
              "accept": [
                "0.25",
                ".25",
                "1/4"
              ],
              "explanation": {
                "en": "Divide consecutive terms: $\\tfrac{20}{80} = \\tfrac{1}{4}$ and $\\tfrac{5}{20} = \\tfrac{1}{4}$. The common ratio is $\\tfrac{1}{4}$, a decaying sequence since $0 < r < 1$.",
                "zh": "相邻项相除：$\\tfrac{20}{80} = \\tfrac{1}{4}$，$\\tfrac{5}{20} = \\tfrac{1}{4}$。公比是 $\\tfrac{1}{4}$，由于 $0 < r < 1$，这是一个衰减数列。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A geometric sequence has $a_2 = 18$ and $a_5 = 486$. What is the common ratio $r$?",
                "zh": "荣誉挑战：某等比数列有 $a_2 = 18$，$a_5 = 486$。公比 $r$ 是多少？"
              },
              "choices": [
                "$27$",
                "$9$",
                "$3$",
                "$6$"
              ],
              "answer": 2,
              "explanation": {
                "en": "From $a_2$ to $a_5$ is $3$ steps, so $a_5 = a_2 \\cdot r^{3}$, giving $r^{3} = \\tfrac{486}{18} = 27$, so $r = \\sqrt[3]{27} = 3$. Choice A ($27$) is $r^3$, not $r$ itself.",
                "zh": "从 $a_2$ 到 $a_5$ 共 $3$ 步，所以 $a_5 = a_2 \\cdot r^{3}$，得 $r^{3} = \\tfrac{486}{18} = 27$，故 $r = \\sqrt[3]{27} = 3$。选项 A（$27$）是 $r^3$，而不是 $r$ 本身。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "linear-exponential-functions",
      "title": "Unit 5: Linear and Exponential Functions",
      "titleZh": "第五单元：线性函数与指数函数",
      "lessons": [
        {
          "id": "exponential-functions-and-models",
          "title": "Exponential Functions and Models",
          "titleZh": "指数函数与模型",
          "content": [
            {
              "type": "h2",
              "en": "When Growth Multiplies Instead of Adds",
              "zh": "当增长靠的是相乘而不是相加"
            },
            {
              "type": "p",
              "en": "Utah is one of the fastest-growing states in the country. If a town of 20,000 people grows by the same NUMBER of people each year, that is linear growth. But populations usually grow by the same PERCENT each year — and a fixed percent of a bigger number is a bigger jump. That kind of growth, where each year is a fixed multiple of the year before, is called exponential growth, and it eventually leaves any linear pattern far behind.",
              "zh": "犹他州是全美增长最快的州之一。如果一个 2 万人的小镇每年增加相同的\"人数\"，那是线性增长。但人口通常是每年增长相同的\"百分比\"——而对更大的数取固定百分比，跳跃就更大。这种每一年都是上一年固定倍数的增长，称为指数增长，它最终会把任何线性模式远远甩在后面。"
            },
            {
              "type": "p",
              "en": "An exponential function has the form below, where $a$ is the initial value (the output when $x = 0$) and $b$ is the constant growth or decay factor (the number you multiply by for each step of 1 in $x$).",
              "zh": "指数函数具有下面的形式，其中 $a$ 是初始值（当 $x = 0$ 时的输出），$b$ 是恒定的增长或衰减因子（$x$ 每增加 1 就乘一次的那个数）。"
            },
            {
              "type": "math",
              "tex": "f(x) = a \\cdot b^{x}, \\qquad a \\neq 0, \\; b > 0, \\; b \\neq 1"
            },
            {
              "type": "h3",
              "en": "Reading Tables and Graphs",
              "zh": "读表格与图象"
            },
            {
              "type": "p",
              "en": "In a table for $f(x) = 3 \\cdot 2^{x}$, the outputs are $3, 6, 12, 24, 48, \\dots$ for $x = 0, 1, 2, 3, 4$. Notice each output is exactly $2$ times the one before it: the ratio between consecutive outputs is constant. That constant ratio is the fingerprint of an exponential function, just as a constant difference is the fingerprint of a linear one.",
              "zh": "对于 $f(x) = 3 \\cdot 2^{x}$，当 $x = 0, 1, 2, 3, 4$ 时输出为 $3, 6, 12, 24, 48, \\dots$。注意每个输出正好是前一个的 $2$ 倍：相邻输出之间的比值是恒定的。这个恒定比值是指数函数的\"指纹\"，正如恒定的差值是线性函数的\"指纹\"。"
            },
            {
              "type": "p",
              "en": "The graph of $f(x) = a \\cdot b^{x}$ with $a > 0$ never touches the $x$-axis. As $x$ becomes very negative the outputs shrink toward $0$ but stay positive, so the line $y = 0$ is a horizontal asymptote. The whole graph lives above the $x$-axis — an exponential with $a > 0$ is always positive.",
              "zh": "当 $a > 0$ 时，$f(x) = a \\cdot b^{x}$ 的图象永远不会碰到 $x$ 轴。当 $x$ 变得很负时，输出会缩小到接近 $0$，但始终保持为正，因此直线 $y = 0$ 是一条水平渐近线。整个图象都位于 $x$ 轴上方——当 $a > 0$ 时，指数函数的值恒为正。"
            },
            {
              "type": "h3",
              "en": "Growth or Decay: It Depends on b",
              "zh": "增长还是衰减：取决于 b"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $b > 1$, the factor makes each output larger — this is exponential growth (e.g., $b = 1.05$).",
                  "zh": "若 $b > 1$，因子使每个输出变大——这是指数增长（例如 $b = 1.05$）。"
                },
                {
                  "en": "If $0 < b < 1$, the factor makes each output smaller — this is exponential decay (e.g., $b = 0.80$).",
                  "zh": "若 $0 < b < 1$，因子使每个输出变小——这是指数衰减（例如 $b = 0.80$）。"
                },
                {
                  "en": "The initial value $a$ tells you where the graph crosses the $y$-axis; it does not decide growth vs. decay — only $b$ does.",
                  "zh": "初始值 $a$ 告诉你图象在 $y$ 轴上的交点；它不决定是增长还是衰减——只有 $b$ 决定。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: thinking a decay function eventually reaches $0$ or goes negative. It does not. $f(x) = 100 \\cdot (0.5)^{x}$ gets closer and closer to $0$ (halving forever) but never equals $0$ and never becomes negative. The $x$-axis is an asymptote, not a landing spot.",
              "zh": "常见错误：以为衰减函数最终会到达 $0$ 或变为负数。并不会。$f(x) = 100 \\cdot (0.5)^{x}$ 会越来越接近 $0$（不断减半），但永远不等于 $0$，也永远不为负。$x$ 轴是渐近线，不是落脚点。"
            },
            {
              "type": "h3",
              "en": "Turning a Percent Rate into a Factor",
              "zh": "把百分率变成因子"
            },
            {
              "type": "p",
              "en": "Word problems usually give you a percent rate $r$, not the factor $b$ directly. Convert first. For growth, you keep the whole amount (100%) and add the increase, so $b = 1 + r$. For decay, you keep what is left after the loss, so $b = 1 - r$.",
              "zh": "应用题通常给你的是百分率 $r$，而不是直接给出因子 $b$。要先转换。对于增长，你保留全部（100%）再加上增加的部分，因此 $b = 1 + r$。对于衰减，你保留损失后剩下的部分，因此 $b = 1 - r$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "5% growth: $b = 1 + 0.05 = 1.05$.",
                  "zh": "5% 增长：$b = 1 + 0.05 = 1.05$。"
                },
                {
                  "en": "20% decay: $b = 1 - 0.20 = 0.80$.",
                  "zh": "20% 衰减：$b = 1 - 0.20 = 0.80$。"
                },
                {
                  "en": "3.5% growth: $b = 1 + 0.035 = 1.035$.",
                  "zh": "3.5% 增长：$b = 1 + 0.035 = 1.035$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: a 5% growth factor is $1.05$, NOT $0.05$ or $5$. Using $0.05$ would multiply the amount down to a twentieth each year (a huge decay), and using $5$ would multiply it five-fold. Always add the rate to 1 for growth.",
              "zh": "考试提示：5% 增长的因子是 $1.05$，而不是 $0.05$ 或 $5$。用 $0.05$ 会让数量每年变成原来的二十分之一（剧烈衰减），用 $5$ 会让它变成五倍。增长时一定要把增长率加到 1 上。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A population model",
                "zh": "例题 1：人口模型"
              },
              "problem": {
                "en": "A Utah town has 20,000 residents and grows 4% per year. Write a model $P(x)$ for the population after $x$ years, then find the population after 3 years (round to a whole person).",
                "zh": "犹他州一个小镇有 20,000 名居民，每年增长 4%。写出 $x$ 年后人口的模型 $P(x)$，然后求 3 年后的人口（四舍五入到整数人）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Initial value $a = 20000$. Growth rate $r = 0.04$, so the factor is $b = 1 + 0.04 = 1.04$.",
                  "zh": "初始值 $a = 20000$。增长率 $r = 0.04$，因此因子为 $b = 1 + 0.04 = 1.04$。"
                },
                {
                  "type": "math",
                  "tex": "P(x) = 20000 \\cdot (1.04)^{x}"
                },
                {
                  "type": "p",
                  "en": "For 3 years, substitute $x = 3$: $(1.04)^{3} \\approx 1.124864$.",
                  "zh": "求 3 年，代入 $x = 3$：$(1.04)^{3} \\approx 1.124864$。"
                },
                {
                  "type": "math",
                  "tex": "P(3) = 20000 \\cdot 1.124864 \\approx 22497"
                },
                {
                  "type": "p",
                  "en": "After 3 years there are about 22,497 residents.",
                  "zh": "3 年后大约有 22,497 名居民。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Depreciation (decay)",
                "zh": "例题 2：折旧（衰减）"
              },
              "problem": {
                "en": "A truck bought for \\$32,000 loses 15% of its value each year. Write a model for its value $V(x)$ after $x$ years and find its value after 2 years.",
                "zh": "一辆以 \\$32,000 购入的卡车每年贬值 15%。写出 $x$ 年后价值 $V(x)$ 的模型，并求 2 年后的价值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Losing 15% means keeping 85%, so the decay factor is $b = 1 - 0.15 = 0.85$, with $a = 32000$.",
                  "zh": "损失 15% 意味着保留 85%，因此衰减因子为 $b = 1 - 0.15 = 0.85$，且 $a = 32000$。"
                },
                {
                  "type": "math",
                  "tex": "V(x) = 32000 \\cdot (0.85)^{x}"
                },
                {
                  "type": "math",
                  "tex": "V(2) = 32000 \\cdot (0.85)^{2} = 32000 \\cdot 0.7225 = 23120"
                },
                {
                  "type": "p",
                  "en": "After 2 years the truck is worth \\$23,120.",
                  "zh": "2 年后这辆卡车价值 \\$23,120。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Linear vs. Exponential: Difference vs. Ratio",
              "zh": "线性对比指数：差值对比比值"
            },
            {
              "type": "p",
              "en": "Given a table, test both patterns. Subtract consecutive outputs: if the difference is constant, the data is linear. Divide consecutive outputs: if the ratio is constant, the data is exponential. A savings plan that adds \\$50 each month is linear; a balance that earns 3% interest each month is exponential.",
              "zh": "给定一个表格，两种模式都检验一下。相减相邻输出：若差值恒定，则数据是线性的。相除相邻输出：若比值恒定，则数据是指数的。每月存入 \\$50 的储蓄计划是线性的；每月获得 3% 利息的余额是指数的。"
            },
            {
              "type": "note",
              "en": "Big idea: any exponential growth (with $b > 1$) will eventually overtake any linear function, no matter how steep the line or how small the starting exponential. It may lose at first, but because it keeps multiplying, it always wins in the long run.",
              "zh": "重要观念：任何指数增长（$b > 1$）最终都会超过任何线性函数，无论那条直线多陡，或指数函数起点多小。它一开始可能落后，但因为它不断相乘，长远来看它总会胜出。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Which pattern is this?",
                "zh": "例题 3：这是哪种模式？"
              },
              "problem": {
                "en": "A table gives $x = 0,1,2,3$ with outputs $5, 15, 45, 135$. Is the relationship linear or exponential? Write its equation.",
                "zh": "表格给出 $x = 0,1,2,3$ 对应输出 $5, 15, 45, 135$。这个关系是线性还是指数？写出它的方程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differences are $10, 30, 90$ — not constant, so not linear. Ratios are $15/5 = 3$, $45/15 = 3$, $135/45 = 3$ — constant, so it is exponential with $b = 3$.",
                  "zh": "差值为 $10, 30, 90$——不恒定，所以不是线性。比值为 $15/5 = 3$、$45/15 = 3$、$135/45 = 3$——恒定，所以是指数函数，$b = 3$。"
                },
                {
                  "type": "p",
                  "en": "The initial value (at $x = 0$) is $5$, so $a = 5$.",
                  "zh": "初始值（$x = 0$ 处）为 $5$，因此 $a = 5$。"
                },
                {
                  "type": "math",
                  "tex": "f(x) = 5 \\cdot 3^{x}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For $f(x) = 200 \\cdot (1.5)^{x}$, what are the initial value and the factor?",
                "zh": "对于 $f(x) = 200 \\cdot (1.5)^{x}$，初始值和因子分别是多少？"
              },
              "choices": [
                "Initial value $1.5$, factor $200$",
                "Initial value $200$, factor $1.5$",
                "Initial value $200$, factor $0.5$",
                "Initial value $1.5$, factor $x$"
              ],
              "answer": 1,
              "explanation": {
                "en": "In $f(x) = a \\cdot b^{x}$, $a$ is the initial value (output at $x = 0$) and $b$ is the factor, so $a = 200$ and $b = 1.5$. The tempting choice with factor $0.5$ confuses the growth rate ($0.5 = 50\\%$) with the factor itself, which is $1 + 0.5 = 1.5$.",
                "zh": "在 $f(x) = a \\cdot b^{x}$ 中，$a$ 是初始值（$x = 0$ 时的输出），$b$ 是因子，所以 $a = 200$，$b = 1.5$。因子写成 $0.5$ 的选项把增长率（$0.5 = 50\\%$）和因子本身弄混了，因子应为 $1 + 0.5 = 1.5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Does $f(x) = 80 \\cdot (0.9)^{x}$ represent growth or decay, and what percent per step?",
                "zh": "$f(x) = 80 \\cdot (0.9)^{x}$ 表示增长还是衰减？每步变化百分之几？"
              },
              "choices": [
                "Decay, 10% per step",
                "Growth, 90% per step",
                "Decay, 90% per step",
                "Growth, 10% per step"
              ],
              "answer": 0,
              "explanation": {
                "en": "Because $0 < 0.9 < 1$, the function decays. The factor $0.9$ means 90% is kept each step, so $1 - 0.9 = 0.10 = 10\\%$ is lost per step. Reading $0.9$ as \"90% decay\" mistakes the amount kept for the amount lost.",
                "zh": "因为 $0 < 0.9 < 1$，函数是衰减的。因子 $0.9$ 表示每步保留 90%，所以每步损失 $1 - 0.9 = 0.10 = 10\\%$。把 $0.9$ 读作\"衰减 90%\"是把保留的部分误当成损失的部分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Convert an 8% annual growth rate to its exponential factor $b$. Give a decimal.",
                "zh": "把 8% 的年增长率转换为指数因子 $b$。用小数作答。"
              },
              "answer": "1.08",
              "accept": [
                "1.080",
                "1.08x"
              ],
              "explanation": {
                "en": "For growth, $b = 1 + r = 1 + 0.08 = 1.08$. A common error is writing $0.08$, which would be a severe decay factor, not growth.",
                "zh": "对于增长，$b = 1 + r = 1 + 0.08 = 1.08$。常见错误是写成 $0.08$，那会是剧烈衰减的因子，而非增长。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which table shows an exponential relationship? (Outputs listed for $x = 0,1,2,3$.)",
                "zh": "哪个表格显示指数关系？（列出 $x = 0,1,2,3$ 的输出。）"
              },
              "choices": [
                "$4, 7, 10, 13$",
                "$4, 8, 12, 16$",
                "$4, 12, 36, 108$",
                "$4, 6, 8, 10$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Exponential data has a constant RATIO. In $4, 12, 36, 108$ each output is $3$ times the previous ($12/4 = 3$, $36/12 = 3$, $108/36 = 3$). The other tables have constant DIFFERENCES ($+3$, $+4$, $+2$), which makes them linear, not exponential.",
                "zh": "指数数据具有恒定的\"比值\"。在 $4, 12, 36, 108$ 中，每个输出是前一个的 $3$ 倍（$12/4 = 3$、$36/12 = 3$、$108/36 = 3$）。其他表格具有恒定的\"差值\"（$+3$、$+4$、$+2$），因此是线性而非指数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A colony of 500 bacteria grows 4% per hour, modeled by $N(x) = 500 \\cdot (1.04)^{x}$. How many bacteria after 2 hours? Round to the nearest whole number.",
                "zh": "一个 500 个细菌的菌落每小时增长 4%，模型为 $N(x) = 500 \\cdot (1.04)^{x}$。2 小时后有多少细菌？四舍五入到整数。"
              },
              "answer": "541",
              "accept": [
                "541 bacteria",
                "541.0"
              ],
              "explanation": {
                "en": "$N(2) = 500 \\cdot (1.04)^{2} = 500 \\cdot 1.0816 = 540.8 \\approx 541$. Multiply by the factor twice (once per hour), then round.",
                "zh": "$N(2) = 500 \\cdot (1.04)^{2} = 500 \\cdot 1.0816 = 540.8 \\approx 541$。把因子乘两次（每小时一次），再四舍五入。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A phone loses 25% of its resale value each year. Which model gives its value after $x$ years if it started at \\$600?",
                "zh": "一部手机每年转售价值损失 25%。若初始为 \\$600，哪个模型给出 $x$ 年后的价值？"
              },
              "choices": [
                "$V(x) = 600 \\cdot (1.25)^{x}$",
                "$V(x) = 600 \\cdot (0.25)^{x}$",
                "$V(x) = 600 - 25x$",
                "$V(x) = 600 \\cdot (0.75)^{x}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Losing 25% means keeping 75%, so $b = 1 - 0.25 = 0.75$, giving $V(x) = 600 \\cdot (0.75)^{x}$. Choice $0.25$ keeps only a quarter each year (75% loss), and the subtraction model is linear, not exponential.",
                "zh": "损失 25% 意味着保留 75%，因此 $b = 1 - 0.25 = 0.75$，得到 $V(x) = 600 \\cdot (0.75)^{x}$。选项 $0.25$ 每年只保留四分之一（损失 75%），而减法模型是线性而非指数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "\\$1000 is invested at 6% interest compounded annually: $A(x) = 1000 \\cdot (1.06)^{x}$. What is the balance after 3 years? Round to the nearest cent (use a number like 1191.02).",
                "zh": "\\$1000 以 6% 年复利投资：$A(x) = 1000 \\cdot (1.06)^{x}$。3 年后余额是多少？四舍五入到分（形如 1191.02）。"
              },
              "answer": "1191.02",
              "accept": [
                "$1191.02",
                "1191",
                "1191.016"
              ],
              "explanation": {
                "en": "$A(3) = 1000 \\cdot (1.06)^{3} = 1000 \\cdot 1.191016 = 1191.016 \\approx 1191.02$. Compound interest multiplies by $1.06$ once per year, so it grows exponentially, faster than \\$60 of simple interest each year.",
                "zh": "$A(3) = 1000 \\cdot (1.06)^{3} = 1000 \\cdot 1.191016 = 1191.016 \\approx 1191.02$。复利每年乘一次 $1.06$，所以呈指数增长，比每年 \\$60 的单利更快。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Function A is linear: $A(x) = 100 + 50x$. Function B is exponential: $B(x) = 2 \\cdot (2)^{x}$. Which statement is true?",
                "zh": "函数 A 为线性：$A(x) = 100 + 50x$。函数 B 为指数：$B(x) = 2 \\cdot (2)^{x}$。哪个说法正确？"
              },
              "choices": [
                "A is always greater than B for every $x \\ge 0$.",
                "B eventually becomes and stays greater than A as $x$ increases.",
                "They are equal for all $x$.",
                "B can never catch up because it starts at only 2."
              ],
              "answer": 1,
              "explanation": {
                "en": "At small $x$, A leads (at $x = 0$, A = 100 vs B = 2). But B doubles each step, so by $x = 8$, B = $2 \\cdot 2^{8} = 512$ while A = $100 + 400 = 500$, and B stays ahead forever after. Any exponential growth eventually overtakes any linear function — the small starting value does not stop it.",
                "zh": "在 $x$ 较小时 A 领先（$x = 0$ 时 A = 100，B = 2）。但 B 每步翻倍，所以到 $x = 8$ 时 B = $2 \\cdot 2^{8} = 512$，而 A = $100 + 400 = 500$，此后 B 永远领先。任何指数增长最终都会超过任何线性函数——起点小并不能阻止它。"
              }
            }
          ]
        },
        {
          "id": "features-of-functions-and-transformations",
          "title": "Comparing Functions, Features, and Transformations",
          "titleZh": "比较函数、函数特征与变换",
          "content": [
            {
              "type": "h2",
              "en": "Describing How a Function Behaves",
              "zh": "描述函数的行为"
            },
            {
              "type": "p",
              "en": "When two ski resorts report snowfall, or two savings plans report balances, you compare them by their features: where they start, where they cross zero, when they rise or fall, and how fast they change. Functions come to us as graphs, tables, or equations — an honors student reads all three and pulls the same features out of each. Because this course cannot show pictures, we will describe every graph with a table of values and named points such as $(2, 5)$.",
              "zh": "当两个滑雪场报告降雪量，或两个储蓄计划报告余额时，我们通过它们的特征来比较：从哪里开始、在哪里过零点、何时上升或下降、变化有多快。函数以图象、表格或方程的形式出现——荣誉学生能读懂这三种形式，并从每一种中提取相同的特征。由于本课程无法展示图片，我们将用数值表和命名的点（如 $(2, 5)$）来描述每个图象。"
            },
            {
              "type": "h3",
              "en": "Key Features of a Function",
              "zh": "函数的关键特征"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Intercepts: the $y$-intercept is the output at $x = 0$; an $x$-intercept (zero) is an input where the output is $0$.",
                  "zh": "截距：$y$ 轴截距是 $x = 0$ 处的输出；$x$ 轴截距（零点）是输出为 $0$ 的输入。"
                },
                {
                  "en": "Increasing / decreasing intervals: stretches of $x$ where outputs go up as you move right, or go down.",
                  "zh": "递增 / 递减区间：向右移动时输出上升（或下降）的 $x$ 区间。"
                },
                {
                  "en": "Maximum / minimum: the highest or lowest output value the function reaches.",
                  "zh": "最大值 / 最小值：函数达到的最高或最低输出值。"
                },
                {
                  "en": "Positive / negative intervals: stretches of $x$ where the output is above zero, or below zero.",
                  "zh": "正 / 负区间：输出在零以上（或零以下）的 $x$ 区间。"
                },
                {
                  "en": "Average rate of change over an interval: how fast outputs change on average between two inputs.",
                  "zh": "某区间上的平均变化率：在两个输入之间输出平均变化的快慢。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The average rate of change of $f$ from $x = a$ to $x = b$ is the change in output divided by the change in input — the slope of the straight line joining the two points $(a, f(a))$ and $(b, f(b))$.",
              "zh": "函数 $f$ 从 $x = a$ 到 $x = b$ 的平均变化率，是输出的变化量除以输入的变化量——即连接两点 $(a, f(a))$ 和 $(b, f(b))$ 的直线的斜率。"
            },
            {
              "type": "math",
              "tex": "\\text{average rate of change} = \\frac{f(b) - f(a)}{b - a}"
            },
            {
              "type": "note",
              "en": "Common mistake: for an exponential function the average rate of change is NOT constant. Between $x = 0$ and $x = 1$ it is one value; between $x = 3$ and $x = 4$ it is much larger (for growth). Only linear functions have the same average rate of change on every interval — that constant is their slope.",
              "zh": "常见错误：指数函数的平均变化率并不恒定。在 $x = 0$ 到 $x = 1$ 之间是一个值；在 $x = 3$ 到 $x = 4$ 之间（对于增长）要大得多。只有线性函数在每个区间上的平均变化率都相同——那个常数就是它们的斜率。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading features from a table",
                "zh": "例题 1：从表格读取特征"
              },
              "problem": {
                "en": "A function passes through these points: $(-2, 0)$, $(-1, -3)$, $(0, -4)$, $(1, -3)$, $(2, 0)$, $(3, 5)$. Find the $y$-intercept, the zeros, the minimum, and the average rate of change from $x = 0$ to $x = 3$.",
                "zh": "一个函数经过这些点：$(-2, 0)$、$(-1, -3)$、$(0, -4)$、$(1, -3)$、$(2, 0)$、$(3, 5)$。求 $y$ 轴截距、零点、最小值，以及从 $x = 0$ 到 $x = 3$ 的平均变化率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The $y$-intercept is the output at $x = 0$: that is $-4$. The zeros are the inputs with output $0$: $x = -2$ and $x = 2$.",
                  "zh": "$y$ 轴截距是 $x = 0$ 处的输出：即 $-4$。零点是输出为 $0$ 的输入：$x = -2$ 和 $x = 2$。"
                },
                {
                  "type": "p",
                  "en": "The lowest output shown is $-4$ at $x = 0$, so the minimum value is $-4$. Outputs fall then rise, so the function is negative between the zeros ($-2 < x < 2$).",
                  "zh": "所示的最低输出是 $x = 0$ 处的 $-4$，因此最小值为 $-4$。输出先降后升，因此函数在两个零点之间（$-2 < x < 2$）为负。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{f(3) - f(0)}{3 - 0} = \\frac{5 - (-4)}{3} = \\frac{9}{3} = 3"
                },
                {
                  "type": "p",
                  "en": "The average rate of change from $x = 0$ to $x = 3$ is $3$.",
                  "zh": "从 $x = 0$ 到 $x = 3$ 的平均变化率为 $3$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Comparing Linear and Exponential Functions",
              "zh": "比较线性函数与指数函数"
            },
            {
              "type": "p",
              "en": "To compare functions given in different forms, pull the same features from each. From an equation you can read the $y$-intercept and the rate; from a table you compute differences and ratios; from a set of named points you find intercepts and average rates. Then line the features up side by side.",
              "zh": "要比较以不同形式给出的函数，从每一种中提取相同的特征。从方程可读出 $y$ 轴截距和变化率；从表格可计算差值和比值；从一组命名点可求截距和平均变化率。然后把这些特征并排对照。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Equation vs. table",
                "zh": "例题 2：方程对比表格"
              },
              "problem": {
                "en": "Function P is $P(x) = 3x + 4$. Function Q is given by the points $(0, 4)$, $(1, 8)$, $(2, 16)$, $(3, 32)$. Which has the greater average rate of change from $x = 1$ to $x = 3$?",
                "zh": "函数 P 为 $P(x) = 3x + 4$。函数 Q 由点 $(0, 4)$、$(1, 8)$、$(2, 16)$、$(3, 32)$ 给出。从 $x = 1$ 到 $x = 3$，哪个的平均变化率更大？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "P is linear with slope $3$, so its average rate of change is $3$ on every interval, including $x = 1$ to $x = 3$.",
                  "zh": "P 是线性函数，斜率为 $3$，因此在每个区间上（包括 $x = 1$ 到 $x = 3$）平均变化率都是 $3$。"
                },
                {
                  "type": "p",
                  "en": "Q doubles each step (ratio $2$), so it is exponential. From $x = 1$ to $x = 3$: outputs go from $8$ to $32$.",
                  "zh": "Q 每步翻倍（比值为 $2$），因此是指数函数。从 $x = 1$ 到 $x = 3$：输出从 $8$ 变到 $32$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{32 - 8}{3 - 1} = \\frac{24}{2} = 12"
                },
                {
                  "type": "p",
                  "en": "Q's average rate of change ($12$) is far greater than P's ($3$) on this interval, showing how exponential change accelerates.",
                  "zh": "在这个区间上，Q 的平均变化率（$12$）远大于 P 的（$3$），说明指数变化会加速。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: even if a linear function has a bigger $y$-intercept or wins on an early interval, an exponential growth function's average rate of change keeps increasing and will eventually beat the linear one's fixed rate. Look at a late interval to reveal the winner.",
              "zh": "考试提示：即使某个线性函数有更大的 $y$ 轴截距，或在早期区间领先，指数增长函数的平均变化率会不断增大，最终会超过线性函数固定的变化率。看一个较晚的区间就能揭示赢家。"
            },
            {
              "type": "h3",
              "en": "Transformations: Shifting and Reflecting",
              "zh": "变换：平移与反射"
            },
            {
              "type": "p",
              "en": "Starting from a parent function $f(x)$, we can move its whole graph without changing its shape. Adding a constant OUTSIDE the function, $f(x) + k$, shifts every point up by $k$ (or down if $k$ is negative) — a vertical shift. Every point $(x, y)$ becomes $(x, y + k)$.",
              "zh": "从母函数 $f(x)$ 出发，我们可以整体移动它的图象而不改变形状。在函数\"外部\"加常数，$f(x) + k$，把每个点向上移 $k$（若 $k$ 为负则向下）——这是竖直平移。每个点 $(x, y)$ 变为 $(x, y + k)$。"
            },
            {
              "type": "p",
              "en": "Adding a constant INSIDE, $f(x + k)$, shifts the graph horizontally — but in the surprising direction. $f(x + 3)$ moves the graph 3 units LEFT, and $f(x - 3)$ moves it 3 units RIGHT. Every point $(x, y)$ becomes $(x - k, y)$.",
              "zh": "在\"内部\"加常数，$f(x + k)$，把图象水平平移——但方向出人意料。$f(x + 3)$ 把图象向\"左\"移 3 个单位，$f(x - 3)$ 把它向\"右\"移 3 个单位。每个点 $(x, y)$ 变为 $(x - k, y)$。"
            },
            {
              "type": "math",
              "tex": "g(x) = f(x) + k \\;\\text{(vertical)}, \\qquad h(x) = f(x + k) \\;\\text{(horizontal)}"
            },
            {
              "type": "p",
              "en": "Reflections flip the graph over an axis. Negating the output, $-f(x)$, reflects across the $x$-axis, turning $(x, y)$ into $(x, -y)$. Negating the input, $f(-x)$, reflects across the $y$-axis, turning $(x, y)$ into $(-x, y)$.",
              "zh": "反射把图象翻转到某条轴的另一侧。对输出取负，$-f(x)$，关于 $x$ 轴反射，把 $(x, y)$ 变为 $(x, -y)$。对输入取负，$f(-x)$，关于 $y$ 轴反射，把 $(x, y)$ 变为 $(-x, y)$。"
            },
            {
              "type": "note",
              "en": "Common mistake: horizontal shifts feel backwards. $f(x + 5)$ moves LEFT, not right, because the input reaches its old value 5 units sooner. Reason it out with a point: if $f$ had a zero at $x = 0$, then $f(x + 5) = 0$ when $x = -5$ — the feature moved left.",
              "zh": "常见错误：水平平移的方向感觉相反。$f(x + 5)$ 向\"左\"移，而不是向右，因为输入会提前 5 个单位达到原来的值。用一个点推理：若 $f$ 在 $x = 0$ 有零点，则 $f(x + 5) = 0$ 发生在 $x = -5$——特征向左移了。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Transforming a table of points",
                "zh": "例题 3：变换点的表格"
              },
              "problem": {
                "en": "The parent $f$ passes through $(-1, 1)$, $(0, 0)$, $(1, 1)$, $(2, 4)$. Give the points for $g(x) = f(x) + 3$ and for $h(x) = -f(x)$.",
                "zh": "母函数 $f$ 经过 $(-1, 1)$、$(0, 0)$、$(1, 1)$、$(2, 4)$。给出 $g(x) = f(x) + 3$ 和 $h(x) = -f(x)$ 的各点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For $g(x) = f(x) + 3$, add $3$ to each output (vertical shift up 3): $(-1, 4)$, $(0, 3)$, $(1, 4)$, $(2, 7)$.",
                  "zh": "对于 $g(x) = f(x) + 3$，给每个输出加 $3$（向上平移 3）：$(-1, 4)$、$(0, 3)$、$(1, 4)$、$(2, 7)$。"
                },
                {
                  "type": "p",
                  "en": "For $h(x) = -f(x)$, negate each output (reflect over the $x$-axis): $(-1, -1)$, $(0, 0)$, $(1, -1)$, $(2, -4)$.",
                  "zh": "对于 $h(x) = -f(x)$，给每个输出取负（关于 $x$ 轴反射）：$(-1, -1)$、$(0, 0)$、$(1, -1)$、$(2, -4)$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Interpreting Features in Context",
              "zh": "在实际情境中解释特征"
            },
            {
              "type": "p",
              "en": "In a real model the features carry meaning. If $H(t)$ gives a drone's height in meters at time $t$ seconds, the $y$-intercept is the launch height, a zero is when it lands, an increasing interval is while it climbs, the maximum is its peak height, and the average rate of change over an interval is its average vertical speed there.",
              "zh": "在实际模型中，特征承载着意义。若 $H(t)$ 表示无人机在 $t$ 秒时的高度（米），则 $y$ 轴截距是发射高度，零点是它着陆的时刻，递增区间是它上升的时段，最大值是它的峰值高度，某区间上的平均变化率是那段时间的平均竖直速度。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "A function has $f(2) = 5$ and $f(6) = 21$. Find its average rate of change from $x = 2$ to $x = 6$. Give an integer.",
                "zh": "某函数满足 $f(2) = 5$，$f(6) = 21$。求它从 $x = 2$ 到 $x = 6$ 的平均变化率。用整数作答。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "Average rate of change $= \\dfrac{f(6) - f(2)}{6 - 2} = \\dfrac{21 - 5}{4} = \\dfrac{16}{4} = 4$. Be sure to divide by the change in input ($4$), not by $6$.",
                "zh": "平均变化率 $= \\dfrac{f(6) - f(2)}{6 - 2} = \\dfrac{21 - 5}{4} = \\dfrac{16}{4} = 4$。注意要除以输入的变化量（$4$），而不是除以 $6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $g(x) = f(x) - 6$ is which transformation of $f$?",
                "zh": "$g(x) = f(x) - 6$ 的图象是 $f$ 的哪种变换？"
              },
              "choices": [
                "Shift 6 units right",
                "Shift 6 units down",
                "Shift 6 units left",
                "Reflect across the $x$-axis"
              ],
              "answer": 1,
              "explanation": {
                "en": "Subtracting $6$ outside the function lowers every output by 6, a vertical shift down 6. Choices about left/right are horizontal shifts, which come from changes INSIDE the function like $f(x - 6)$.",
                "zh": "在函数外部减 $6$ 会把每个输出降低 6，即向下竖直平移 6。左/右的选项是水平平移，来自函数\"内部\"的变化，如 $f(x - 6)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A function passes through $(0, 8)$, $(1, 4)$, $(2, 2)$, $(3, 1)$. Which best describes it?",
                "zh": "某函数经过 $(0, 8)$、$(1, 4)$、$(2, 2)$、$(3, 1)$。哪项描述最准确？"
              },
              "choices": [
                "Linear, increasing",
                "Exponential, increasing",
                "Exponential, decreasing",
                "Linear, decreasing"
              ],
              "answer": 2,
              "explanation": {
                "en": "The ratio between outputs is constant ($4/8 = 1/2$, $2/4 = 1/2$, $1/2 = 1/2$), so it is exponential; since outputs shrink, it is decreasing. The differences ($-4, -2, -1$) are not constant, so it is not linear.",
                "zh": "输出之间的比值恒定（$4/8 = 1/2$、$2/4 = 1/2$、$1/2 = 1/2$），所以是指数函数；由于输出在缩小，它是递减的。差值（$-4, -2, -1$）不恒定，所以不是线性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f$ has an $x$-intercept at $x = 4$, at what $x$-value does $h(x) = f(x + 6)$ have its corresponding $x$-intercept? Give an integer.",
                "zh": "若 $f$ 在 $x = 4$ 处有 $x$ 轴截距，那么 $h(x) = f(x + 6)$ 对应的 $x$ 轴截距在哪个 $x$ 值处？用整数作答。"
              },
              "answer": "-2",
              "accept": [
                "-2.0",
                "−2"
              ],
              "explanation": {
                "en": "$f(x + 6)$ shifts the graph 6 units LEFT, so the intercept moves from $x = 4$ to $x = 4 - 6 = -2$. Check: $h(-2) = f(-2 + 6) = f(4) = 0$. Adding inside shifts left, which surprises many students.",
                "zh": "$f(x + 6)$ 把图象向\"左\"移 6 个单位，所以截距从 $x = 4$ 移到 $x = 4 - 6 = -2$。验证：$h(-2) = f(-2 + 6) = f(4) = 0$。内部加常数会向左移，这常令学生意外。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Function $f$ passes through $(1, 3)$. After the transformation $r(x) = -f(x)$, which point is on $r$?",
                "zh": "函数 $f$ 经过 $(1, 3)$。经过变换 $r(x) = -f(x)$ 后，哪个点在 $r$ 上？"
              },
              "choices": [
                "$(-1, 3)$",
                "$(-1, -3)$",
                "$(1, -3)$",
                "$(3, 1)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$-f(x)$ negates only the output (reflection across the $x$-axis), so $(1, 3)$ becomes $(1, -3)$. Choice $(-1, 3)$ would come from $f(-x)$ (reflection across the $y$-axis), which negates the input instead.",
                "zh": "$-f(x)$ 只对输出取负（关于 $x$ 轴反射），所以 $(1, 3)$ 变为 $(1, -3)$。选项 $(-1, 3)$ 来自 $f(-x)$（关于 $y$ 轴反射），那是对输入取负。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A drone's height is $H(t)$ meters at time $t$ seconds, with $H(0) = 2$ and $H(5) = 32$. What is its average vertical speed (average rate of change) from $t = 0$ to $t = 5$, in meters per second? Give a number.",
                "zh": "无人机在 $t$ 秒时的高度为 $H(t)$ 米，$H(0) = 2$，$H(5) = 32$。从 $t = 0$ 到 $t = 5$ 的平均竖直速度（平均变化率）是多少米每秒？用数字作答。"
              },
              "answer": "6",
              "accept": [
                "6.0",
                "6 m/s"
              ],
              "explanation": {
                "en": "Average rate of change $= \\dfrac{H(5) - H(0)}{5 - 0} = \\dfrac{32 - 2}{5} = \\dfrac{30}{5} = 6$ meters per second. In context, the drone rose an average of 6 m each second over that interval.",
                "zh": "平均变化率 $= \\dfrac{H(5) - H(0)}{5 - 0} = \\dfrac{32 - 2}{5} = \\dfrac{30}{5} = 6$ 米每秒。在情境中，这段时间内无人机平均每秒上升 6 米。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about the average rate of change of an exponential growth function $f(x) = 2^{x}$ is TRUE?",
                "zh": "关于指数增长函数 $f(x) = 2^{x}$ 的平均变化率，哪个说法为\"真\"？"
              },
              "choices": [
                "It is the same on every interval, like a linear function.",
                "It is always negative.",
                "It is zero because the graph never touches the $x$-axis.",
                "It is larger on $[3, 4]$ than on $[0, 1]$."
              ],
              "answer": 3,
              "explanation": {
                "en": "On $[0,1]$ it is $\\frac{2 - 1}{1} = 1$; on $[3,4]$ it is $\\frac{16 - 8}{1} = 8$. The rate grows as $x$ grows, so it is larger on the later interval. Only linear functions have a constant average rate of change.",
                "zh": "在 $[0,1]$ 上为 $\\frac{2 - 1}{1} = 1$；在 $[3,4]$ 上为 $\\frac{16 - 8}{1} = 8$。变化率随 $x$ 增大而增大，因此在较晚的区间更大。只有线性函数的平均变化率才恒定。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Line $L(x) = 5x + 20$ and exponential $E(x) = 2 \\cdot 3^{x}$ are compared. Using the tables $L: (0,20),(1,25),(2,30),(3,35)$ and $E: (0,2),(1,6),(2,18),(3,54)$, which is true?",
                "zh": "比较直线 $L(x) = 5x + 20$ 与指数 $E(x) = 2 \\cdot 3^{x}$。用表格 $L: (0,20),(1,25),(2,30),(3,35)$ 和 $E: (0,2),(1,6),(2,18),(3,54)$，哪项为真？"
              },
              "choices": [
                "$L$ is greater at $x = 0$ but $E$ has already overtaken $L$ by $x = 3$.",
                "$E$ is greater at every $x$ shown.",
                "$L$ is greater at every $x$ shown.",
                "They are equal at $x = 2$."
              ],
              "answer": 0,
              "explanation": {
                "en": "At $x = 0$, $L = 20 > E = 2$. But $E$ triples each step, so at $x = 3$, $E = 54 > L = 35$: the exponential has overtaken the line. This shows the honors idea that exponential growth eventually surpasses any linear function even after starting lower.",
                "zh": "在 $x = 0$ 处，$L = 20 > E = 2$。但 $E$ 每步变三倍，所以在 $x = 3$ 处，$E = 54 > L = 35$：指数已经超过了直线。这体现了荣誉课程的观念：即使起点更低，指数增长最终也会超过任何线性函数。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "descriptive-statistics",
      "title": "Unit 6: Descriptive Statistics",
      "titleZh": "第六单元：描述性统计",
      "lessons": [
        {
          "id": "one-variable-statistics",
          "title": "One-Variable Data: Center, Spread, and Shape",
          "titleZh": "单变量数据：集中趋势、离散程度与分布形状",
          "content": [
            {
              "type": "h2",
              "en": "Making Sense of a Single List of Numbers",
              "zh": "读懂一列数据"
            },
            {
              "type": "p",
              "en": "Suppose you record the daily high temperatures in Salt Lake City for a month, or the number of minutes each student in your class spends commuting. Each of these is one-variable data: a single measurement collected many times. Statistics gives us three questions to ask about any such list — What is its shape? Where is its center? How spread out is it? Answering all three, in context, tells the real story that a single average can hide.",
              "zh": "假设你记录了盐湖城一个月每天的最高气温，或者班里每位同学上学通勤所花的分钟数。这些都是单变量数据：对同一个量进行多次测量。统计学教我们对这样一列数据提出三个问题——它的形状如何？中心在哪里？分散程度有多大？结合背景把这三个问题都回答清楚，才能讲出真实的故事，而单靠一个平均数往往会掩盖真相。"
            },
            {
              "type": "h3",
              "en": "Representing Data: Dot Plots, Histograms, and Box Plots",
              "zh": "数据的表示：点图、直方图与箱线图"
            },
            {
              "type": "p",
              "en": "Before computing anything, picture the data. A dot plot places one dot above each value on a number line, so you literally see every data point — best for small data sets. A histogram groups values into equal-width intervals (bins) and draws a bar whose height is the count in each bin — best for large data sets, where it reveals the overall shape. A box plot (box-and-whisker) summarizes the data with five numbers: minimum, first quartile $Q_1$, median, third quartile $Q_3$, and maximum. The box spans $Q_1$ to $Q_3$, and a line inside marks the median.",
              "zh": "在计算任何数字之前，先把数据画出来。点图在数轴上每个数值的上方画一个点，让你真真切切看到每一个数据点——适合小型数据集。直方图把数值分成等宽的区间（组距），每根柱子的高度表示落在该区间内的数据个数——适合大型数据集，能揭示整体形状。箱线图用五个数概括数据：最小值、第一四分位数 $Q_1$、中位数、第三四分位数 $Q_3$ 和最大值。箱子从 $Q_1$ 延伸到 $Q_3$，箱内一条线标出中位数。"
            },
            {
              "type": "p",
              "en": "For example, the box plot of exam scores might have its five-number summary at $52, 68, 75, 84, 98$. The box (from $68$ to $84$) holds the middle half of all students, and the median score is $75$. The two whiskers reach out to the lowest and highest scores.",
              "zh": "例如，考试成绩的箱线图，其五数概括可能是 $52, 68, 75, 84, 98$。箱子（从 $68$ 到 $84$）包含了全体学生中间的一半，中位数成绩是 $75$。两条须线一直延伸到最低分和最高分。"
            },
            {
              "type": "h3",
              "en": "The Shape of a Distribution",
              "zh": "分布的形状"
            },
            {
              "type": "p",
              "en": "Shape describes how the data pile up. Learn three common shapes:",
              "zh": "形状描述数据是如何堆积的。要掌握三种常见形状："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Symmetric: the left and right halves are near mirror images; the classic \"bell\" of many natural measurements (heights, test scores).",
                  "zh": "对称：左右两半近似互为镜像；许多自然测量（身高、考试成绩）呈现的经典\"钟形\"。"
                },
                {
                  "en": "Skewed right (positively skewed): most values are low with a long tail stretching toward the high values — like household incomes or home prices, where a few very large values pull the tail rightward.",
                  "zh": "右偏（正偏）：大多数数值偏低，一条长尾伸向高值——比如家庭收入或房价，少数极大值把尾巴拉向右边。"
                },
                {
                  "en": "Skewed left (negatively skewed): a long tail stretches toward the low values — like scores on an easy test where most students do well but a few score very low.",
                  "zh": "左偏（负偏）：一条长尾伸向低值——比如一场简单的考试，大多数学生成绩好，少数人分数很低。"
                },
                {
                  "en": "Uniform: values occur at roughly equal frequency across the range, so the histogram looks flat — like the outcomes of rolling a fair die many times.",
                  "zh": "均匀：各个数值在整个范围内出现的频数大致相等，因此直方图看起来是平的——比如多次投掷一枚均匀骰子的结果。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Skew direction is named for the tail, not the hump. A distribution with its peak on the left and a long tail on the right is skewed RIGHT — many students say \"left\" because that's where the tall bars are. Follow the tail.",
              "zh": "偏斜的方向以尾巴命名，而不是以峰命名。峰在左边、长尾在右边的分布是右偏——很多同学会说\"左偏\"，因为高柱子在左边。看尾巴。"
            },
            {
              "type": "h3",
              "en": "Measures of Center: Mean vs. Median",
              "zh": "集中趋势：平均数与中位数"
            },
            {
              "type": "p",
              "en": "The mean (average) is the sum of all values divided by how many there are: $\\bar{x} = \\frac{\\sum x}{n}$. The median is the middle value when the data are listed in order (or the average of the two middle values). Both describe a \"typical\" value, but they respond very differently to extreme values called outliers.",
              "zh": "平均数是所有数值之和除以数据个数：$\\bar{x} = \\frac{\\sum x}{n}$。中位数是把数据从小到大排列后处于正中间的那个数（若有两个中间数则取它们的平均）。两者都描述\"典型\"值，但它们对极端值（称为离群值）的反应大不相同。"
            },
            {
              "type": "p",
              "en": "The median is resistant (robust): it barely moves when one value becomes huge, because it only cares about position. The mean is not resistant: a single large outlier drags it upward. That is why we report the median income of a neighborhood, not the mean — one billionaire would make the mean misleading.",
              "zh": "中位数具有抗差性（稳健）：即使某个数值变得极大，它也几乎不动，因为它只关心位置。平均数不具抗差性：一个大的离群值就会把它往上拉。这正是我们报告一个社区的收入中位数而非平均数的原因——一位亿万富翁就会让平均数产生误导。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If the distribution is roughly symmetric with no outliers, the mean and median are close — use the mean.",
                  "zh": "若分布大致对称且无离群值，平均数与中位数接近——用平均数。"
                },
                {
                  "en": "If the distribution is skewed or has outliers, the mean is pulled toward the tail — use the median as the better summary of a typical value.",
                  "zh": "若分布偏斜或有离群值，平均数会被拉向尾巴——用中位数作为典型值更好的概括。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: An outlier moves the mean, not the median",
                "zh": "例题 1：离群值改变平均数，而非中位数"
              },
              "problem": {
                "en": "Five friends' after-school job earnings last week were $\\$40, \\$45, \\$50, \\$55, \\$60$. Find the mean and median. Then a sixth friend who earned $\\$260$ joins the list. Recompute both and comment.",
                "zh": "五位朋友上周课后打工的收入分别是 $\\$40, \\$45, \\$50, \\$55, \\$60$。求平均数和中位数。然后第六位收入为 $\\$260$ 的朋友加入。重新计算两者并作评论。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For the first five: the sum is $250$, so the mean is $\\frac{250}{5} = 50$, and the median (middle value) is $50$.",
                  "zh": "前五个：总和为 $250$，故平均数为 $\\frac{250}{5} = 50$，中位数（正中间的值）是 $50$。"
                },
                {
                  "type": "p",
                  "en": "Adding $\\$260$, the six values in order are $40, 45, 50, 55, 60, 260$. The new sum is $510$, so the mean is $\\frac{510}{6} = 85$. The median is now the average of the two middle values: $\\frac{50 + 55}{2} = 52.5$.",
                  "zh": "加入 $\\$260$ 后，六个数按顺序为 $40, 45, 50, 55, 60, 260$。新的总和为 $510$，故平均数为 $\\frac{510}{6} = 85$。中位数现在是两个中间数的平均：$\\frac{50 + 55}{2} = 52.5$。"
                },
                {
                  "type": "p",
                  "en": "The outlier pushed the mean from $50$ all the way to $85$ — above every value except the outlier itself — while the median barely moved (from $50$ to $52.5$). Here the median is the honest summary of a typical earning.",
                  "zh": "离群值把平均数从 $50$ 一路推到 $85$——高于除离群值本身以外的每一个数——而中位数几乎没动（从 $50$ 到 $52.5$）。这里中位数才是对典型收入的诚实概括。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Measures of Spread: Range, IQR, and Standard Deviation",
              "zh": "离散程度：极差、四分位距与标准差"
            },
            {
              "type": "p",
              "en": "Two classes can have the same average test score yet feel completely different — one where nearly everyone scored near the mean, and one with many very high and very low scores. Spread measures that difference.",
              "zh": "两个班级可以有相同的平均分，感受却截然不同——一个几乎人人都接近平均分，另一个有许多很高和很低的分数。离散程度衡量的就是这种差别。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Range = maximum − minimum. Simple, but it uses only the two most extreme values, so a single outlier ruins it.",
                  "zh": "极差 = 最大值 − 最小值。简单，但只用到两个最极端的值，因此单个离群值就会破坏它。"
                },
                {
                  "en": "Interquartile Range (IQR) = $Q_3 - Q_1$. It is the width of the middle 50% of the data, so it ignores the extremes and is resistant to outliers — the spread partner of the median.",
                  "zh": "四分位距（IQR）= $Q_3 - Q_1$。它是数据中间 50% 的宽度，因此忽略极端值、对离群值具有抗差性——是中位数在离散度上的搭档。"
                },
                {
                  "en": "Standard deviation (SD) measures the typical distance of a value from the mean. A small SD means the data cluster tightly around the mean; a large SD means they are spread widely.",
                  "zh": "标准差（SD）衡量数值到平均数的典型距离。标准差小意味着数据紧紧聚集在平均数附近；标准差大意味着数据分散得很开。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Standard deviation is the spread partner of the mean. You will usually compute it with technology, but you must understand what it means: it is roughly the average amount each data point differs from the mean. If two histograms share the same center, the wider, flatter one has the larger standard deviation; the tall, narrow one has the smaller standard deviation.",
              "zh": "标准差是平均数在离散度上的搭档。你通常会用计算器或软件来算它，但必须理解它的含义：它大致是每个数据点与平均数之差的平均大小。若两幅直方图中心相同，那么更宽更平的那幅标准差更大；又高又窄的那幅标准差更小。"
            },
            {
              "type": "note",
              "en": "Standard deviation is never negative, and it is zero only when every value is identical (no spread at all). If you compute a negative SD, you made an arithmetic error. Also, SD carries the same units as the data (dollars, points, minutes) — it is not a percentage.",
              "zh": "标准差永远非负，只有当所有数值完全相同（毫无离散）时才为零。若你算出负的标准差，说明算错了。此外，标准差与数据同单位（元、分、分钟）——它不是百分比。"
            },
            {
              "type": "h3",
              "en": "Identifying Outliers: The 1.5·IQR Rule",
              "zh": "识别离群值：1.5·IQR 规则"
            },
            {
              "type": "p",
              "en": "\"That value looks extreme\" is a hunch; the 1.5·IQR rule turns it into a decision. Compute the IQR, then build two fences:",
              "zh": "\"那个值看起来很极端\"只是直觉；1.5·IQR 规则把它变成一个明确的判断。先算出 IQR，再建立两道围栏："
            },
            {
              "type": "math",
              "tex": "\\text{Lower fence} = Q_1 - 1.5 \\cdot \\text{IQR}, \\qquad \\text{Upper fence} = Q_3 + 1.5 \\cdot \\text{IQR}"
            },
            {
              "type": "p",
              "en": "Any data value below the lower fence or above the upper fence is flagged as an outlier. Values inside the fences are considered ordinary.",
              "zh": "任何低于下围栏或高于上围栏的数据值都被标记为离群值。落在两道围栏之间的值视为正常。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Applying the 1.5·IQR rule",
                "zh": "例题 2：应用 1.5·IQR 规则"
              },
              "problem": {
                "en": "A data set has $Q_1 = 20$ and $Q_3 = 32$. Is a value of $54$ an outlier?",
                "zh": "某数据集的 $Q_1 = 20$，$Q_3 = 32$。数值 $54$ 是离群值吗？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First the IQR: $Q_3 - Q_1 = 32 - 20 = 12$. Then $1.5 \\cdot \\text{IQR} = 1.5 \\cdot 12 = 18$.",
                  "zh": "先求 IQR：$Q_3 - Q_1 = 32 - 20 = 12$。再求 $1.5 \\cdot \\text{IQR} = 1.5 \\cdot 12 = 18$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{Upper fence} = 32 + 18 = 50"
                },
                {
                  "type": "p",
                  "en": "Since $54 > 50$, the value $54$ lies beyond the upper fence, so it is an outlier. (The lower fence is $20 - 18 = 2$, which we did not need here.)",
                  "zh": "由于 $54 > 50$，数值 $54$ 超出了上围栏，所以它是离群值。（下围栏是 $20 - 18 = 2$，这里用不到。）"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Comparing Two Distributions in Context",
              "zh": "结合背景比较两个分布"
            },
            {
              "type": "p",
              "en": "When you compare two groups — say, commute times for two Utah high schools — never compare just one number. A complete comparison names all three: shape, center, and spread, and it always ties the numbers back to the real situation. For instance: \"School A's commute times are roughly symmetric with a median of 12 minutes and an IQR of 6, while School B's are skewed right with a median of 15 minutes and an IQR of 14 — School B students not only travel a bit longer on average but are far less consistent, likely because some live much farther away.\"",
              "zh": "比较两个群体时——比如犹他州两所高中的通勤时间——绝不能只比一个数。完整的比较要说清三样：形状、中心和离散程度，并始终把数字与实际情境联系起来。例如：\"A 校的通勤时间大致对称，中位数 12 分钟，IQR 为 6；而 B 校右偏，中位数 15 分钟，IQR 为 14——B 校学生不仅平均路上时间略长，而且远不如 A 校稳定，可能是因为有些人住得远得多。\""
            },
            {
              "type": "note",
              "en": "Test tip: when a question uses a resistant measure of center (median), pair it with the resistant measure of spread (IQR). When it uses the mean, pair it with the standard deviation. Mixing a resistant center with a non-resistant spread (or vice versa) loses points.",
              "zh": "考试提示：当题目用抗差的集中趋势量（中位数）时，就配抗差的离散度量（IQR）。当它用平均数时，就配标准差。把抗差的中心与不抗差的离散度混搭（或反过来）会失分。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A histogram of home prices in a Utah county has most bars on the left and a long tail stretching to the right toward a few very expensive homes. What is the shape of this distribution?",
                "zh": "犹他州某县房价的直方图，大多数柱子在左边，一条长尾向右伸向少数几栋非常昂贵的房子。这个分布的形状是什么？"
              },
              "choices": [
                "Symmetric",
                "Skewed right",
                "Skewed left",
                "Uniform"
              ],
              "answer": 1,
              "explanation": {
                "en": "The tail stretches toward the high (right) values, so the distribution is skewed right. A common error is to answer \"skewed left\" because the tall bars are on the left — but skew is named for the tail, not the peak.",
                "zh": "尾巴伸向高（右）值，所以分布是右偏。常见错误是答\"左偏\"，因为高柱子在左边——但偏斜以尾巴命名，而非以峰命名。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A data set is strongly skewed right and contains one large outlier. Which pair of statistics best summarizes a typical value and its spread?",
                "zh": "某数据集强烈右偏，且含有一个大的离群值。哪一对统计量最能概括典型值及其离散程度？"
              },
              "choices": [
                "Mean and standard deviation",
                "Mean and range",
                "Median and IQR",
                "Mode and range"
              ],
              "answer": 2,
              "explanation": {
                "en": "With skew and an outlier, the mean is pulled toward the tail and the range and SD are inflated by the extreme value. The median and IQR are both resistant, so they honestly describe the typical value and spread. Choosing mean and SD is tempting but they are distorted by the outlier.",
                "zh": "存在偏斜和离群值时，平均数被拉向尾巴，极差和标准差被极端值放大。中位数和 IQR 都具抗差性，能诚实地描述典型值和离散程度。选平均数与标准差很诱人，但它们已被离群值扭曲。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two classes take the same test and have the same mean of $80$. Class X's scores are tightly clustered near $80$; Class Y's scores range widely from $50$ to $100$. Which statement is true?",
                "zh": "两个班参加同一场考试，平均分都是 $80$。X 班的分数紧紧聚集在 $80$ 附近；Y 班的分数从 $50$ 到 $100$ 分布很广。哪种说法正确？"
              },
              "choices": [
                "Class Y has the smaller standard deviation",
                "Both classes have the same standard deviation because the means are equal",
                "Standard deviation cannot be compared without the median",
                "Class Y has the larger standard deviation"
              ],
              "answer": 3,
              "explanation": {
                "en": "Standard deviation measures typical distance from the mean. Class Y's scores sit far from the mean on both sides, so its SD is larger. Equal means say nothing about spread — two data sets can share a center yet differ greatly in SD.",
                "zh": "标准差衡量到平均数的典型距离。Y 班的分数两侧都离平均数很远，所以标准差更大。平均数相等并不能说明离散程度——两个数据集可以中心相同却标准差相差很大。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A data set has $Q_1 = 15$ and $Q_3 = 27$. Find the interquartile range (IQR). Give an integer.",
                "zh": "某数据集 $Q_1 = 15$，$Q_3 = 27$。求四分位距（IQR）。请以整数作答。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "IQR $= Q_3 - Q_1 = 27 - 15 = 12$. The IQR is the width of the middle 50% of the data, not the full range.",
                "zh": "IQR $= Q_3 - Q_1 = 27 - 15 = 12$。IQR 是数据中间 50% 的宽度，不是整个极差。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The five-number summary of a data set is $8, 14, 19, 26, 60$. Using the 1.5·IQR rule, find the value of the upper fence. Give an integer.",
                "zh": "某数据集的五数概括为 $8, 14, 19, 26, 60$。用 1.5·IQR 规则，求上围栏的值。请以整数作答。"
              },
              "answer": "44",
              "accept": [
                "44.0"
              ],
              "explanation": {
                "en": "Here $Q_1 = 14$ and $Q_3 = 26$, so IQR $= 12$ and $1.5 \\cdot 12 = 18$. Upper fence $= Q_3 + 18 = 26 + 18 = 44$. (Since the maximum $60 > 44$, that value would be flagged as an outlier.)",
                "zh": "这里 $Q_1 = 14$，$Q_3 = 26$，故 IQR $= 12$，$1.5 \\cdot 12 = 18$。上围栏 $= Q_3 + 18 = 26 + 18 = 44$。（因为最大值 $60 > 44$，该值会被标记为离群值。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the median of this data set: $3, 7, 7, 10, 15, 21$. Give your answer as a number (it may be a decimal).",
                "zh": "求这组数据的中位数：$3, 7, 7, 10, 15, 21$。请以一个数作答（可以是小数）。"
              },
              "answer": "8.5",
              "accept": [
                "8.50",
                "17/2"
              ],
              "explanation": {
                "en": "There are $6$ values (even count), so the median is the average of the two middle values, $7$ and $10$: $\\frac{7 + 10}{2} = 8.5$. A common error is to pick a single middle value; with an even count you must average the middle pair.",
                "zh": "共有 $6$ 个数（偶数个），所以中位数是两个中间数 $7$ 和 $10$ 的平均：$\\frac{7 + 10}{2} = 8.5$。常见错误是只挑一个中间值；数据为偶数个时必须取中间两数的平均。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two Utah high schools report student commute times. School A: median 10 min, IQR 4 min, roughly symmetric. School B: median 10 min, IQR 15 min, skewed right. Which conclusion is best supported?",
                "zh": "犹他州两所高中报告学生通勤时间。A 校：中位数 10 分钟，IQR 4 分钟，大致对称。B 校：中位数 10 分钟，IQR 15 分钟，右偏。哪个结论最有依据？"
              },
              "choices": [
                "Students at both schools have equally consistent commutes",
                "School A students travel much farther on average than School B students",
                "School B's commute times are much more variable, so its students' experiences differ far more",
                "School B has no typical commute time because it is skewed"
              ],
              "answer": 2,
              "explanation": {
                "en": "The medians are equal, so typical commutes are similar. But School B's IQR (15) is far larger than School A's (4), meaning B's times are much more spread out — some students travel far longer than others. Equal medians do not imply equal spread, and a skewed distribution still has a typical value (the median).",
                "zh": "中位数相等，所以典型通勤时间相近。但 B 校的 IQR（15）远大于 A 校（4），说明 B 校的时间分散得多——有些学生路上时间比别人长得多。中位数相等并不意味着离散程度相等，而偏斜分布仍然有典型值（中位数）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A data set of $9$ values has mean $50$ and median $50$. You add a tenth value of $150$ (a large outlier). Which describes what happens to the mean and the median?",
                "zh": "荣誉挑战：一个含 $9$ 个值的数据集，平均数为 $50$，中位数为 $50$。你再加入第十个值 $150$（一个大的离群值）。下列哪项描述了平均数和中位数的变化？"
              },
              "choices": [
                "The mean stays $50$; the median rises well above $50$",
                "The mean rises to $60$; the median changes only slightly, staying near $50$",
                "Both the mean and the median rise to about $60$",
                "The mean rises to $150$; the median stays exactly $50$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The old sum is $9 \\times 50 = 450$; adding $150$ gives $600$ over $10$ values, so the new mean is $\\frac{600}{10} = 60$. The median, which depends only on the middle position, barely shifts and stays near $50$. This shows the mean is not resistant while the median is. The mean cannot jump to $150$ — that is the value added, not the new average.",
                "zh": "原来的总和是 $9 \\times 50 = 450$；加入 $150$ 得 $600$，共 $10$ 个值，故新平均数为 $\\frac{600}{10} = 60$。中位数只依赖中间位置，几乎不动，仍接近 $50$。这说明平均数不抗差而中位数抗差。平均数不可能跳到 $150$——那是加入的值，不是新平均数。"
              }
            }
          ]
        },
        {
          "id": "two-variable-statistics",
          "title": "Two-Variable Data: Scatter Plots, Fit, and Association",
          "titleZh": "双变量数据：散点图、拟合与相关",
          "content": [
            {
              "type": "h2",
              "en": "When Two Measurements Travel Together",
              "zh": "当两个量结伴出现"
            },
            {
              "type": "p",
              "en": "Some questions involve two measurements on each individual: a car's age and its price, a student's study hours and exam score, a Utah town's elevation and its average summer temperature. Two-variable data lets us ask whether the variables are related, describe how, model the relationship with a line, and use that model to predict. This connects the statistics of this unit directly to the linear functions you built earlier — the line of best fit is just a linear function chosen to match a cloud of points.",
              "zh": "有些问题对每个个体测量两个量：一辆车的车龄和价格，一名学生的学习时长和考试成绩，犹他州某镇的海拔和夏季平均气温。双变量数据让我们能追问两个变量是否相关、如何相关、用一条直线为这种关系建模，并用该模型进行预测。这把本单元的统计学与你之前学过的一次函数直接联系起来——最佳拟合直线不过是被选来匹配一团散点的一次函数。"
            },
            {
              "type": "h3",
              "en": "Scatter Plots and Describing Association",
              "zh": "散点图与描述相关"
            },
            {
              "type": "p",
              "en": "A scatter plot graphs each individual as a point $(x, y)$, where $x$ is the explanatory variable and $y$ is the response variable. To describe the association shown, name three things:",
              "zh": "散点图把每个个体画成一个点 $(x, y)$，其中 $x$ 是解释变量，$y$ 是响应变量。描述所显示的相关时，要说清三样："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Direction: positive (as $x$ increases, $y$ tends to increase — points rise left to right) or negative (as $x$ increases, $y$ tends to decrease — points fall).",
                  "zh": "方向：正相关（$x$ 增大时 $y$ 倾向于增大——点从左到右上升）或负相关（$x$ 增大时 $y$ 倾向于减小——点下降）。"
                },
                {
                  "en": "Form: linear (points follow a straight-line pattern) or nonlinear (they follow a curve).",
                  "zh": "形态：线性（点沿直线模式分布）或非线性（沿曲线分布）。"
                },
                {
                  "en": "Strength: strong (points lie close to the pattern) or weak (points are loosely scattered around it).",
                  "zh": "强度：强（点紧贴模式）或弱（点松散地散布在其周围）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For example, a scatter plot of a used car's age versus its price usually shows a negative, linear, moderately strong association: older cars tend to cost less, and the points fall in a fairly tight downward band.",
              "zh": "例如，二手车车龄与价格的散点图通常显示负的、线性的、中等强度的相关：车越旧价格越低，散点落在一条相当紧凑、向下的带状区域内。"
            },
            {
              "type": "p",
              "en": "The correlation coefficient $r$ puts a number on direction and strength for linear association. It always satisfies $-1 \\le r \\le 1$. The sign matches the direction; values near $\\pm 1$ mean a strong linear pattern, and values near $0$ mean little or no linear pattern.",
              "zh": "相关系数 $r$ 用一个数来刻画线性相关的方向和强度。它始终满足 $-1 \\le r \\le 1$。符号与方向一致；接近 $\\pm 1$ 表示强线性模式，接近 $0$ 表示几乎没有线性模式。"
            },
            {
              "type": "note",
              "en": "A correlation near $0$ means no LINEAR association — it does not mean \"no relationship.\" Points forming a perfect U-shaped parabola can have $r \\approx 0$ yet be perfectly related. Always look at the scatter plot, not just $r$.",
              "zh": "相关系数接近 $0$ 意味着没有线性相关——并不意味着\"没有关系\"。构成完美 U 形抛物线的点可以 $r \\approx 0$ 却完美相关。始终要看散点图，而不仅仅看 $r$。"
            },
            {
              "type": "h3",
              "en": "Fitting a Linear Model and Interpreting It",
              "zh": "拟合线性模型并解释它"
            },
            {
              "type": "p",
              "en": "When the form is linear, we summarize the trend with a line of best fit (least-squares regression line), written $\\hat{y} = a + bx$. The hat on $\\hat{y}$ signals a predicted value, not an actual data point. The power of this model is that its slope and intercept have real meaning in context:",
              "zh": "当形态为线性时，我们用一条最佳拟合直线（最小二乘回归直线）概括趋势，记作 $\\hat{y} = a + bx$。$\\hat{y}$ 上的\"帽子\"表示这是一个预测值，而非实际数据点。这个模型的威力在于它的斜率和截距在情境中有真实含义："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Slope $b$: the predicted change in $y$ for each one-unit increase in $x$. Always state it with units, e.g. \"price drops about \\$900 per additional year of age.\"",
                  "zh": "斜率 $b$：$x$ 每增加一个单位时 $y$ 的预测变化量。始终带单位表述，例如\"车龄每增加一年，价格约下降 \\$900\"。"
                },
                {
                  "en": "Intercept $a$: the predicted value of $y$ when $x = 0$. Sometimes meaningful (price of a brand-new car), sometimes only a starting point with no real-world sense.",
                  "zh": "截距 $a$：当 $x = 0$ 时 $y$ 的预测值。有时有意义（全新车的价格），有时只是一个起点、并无现实意义。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Interpreting slope and intercept in context",
                "zh": "例题 1：在情境中解释斜率与截距"
              },
              "problem": {
                "en": "For used trucks, the model is $\\hat{y} = 28000 - 1800x$, where $x$ is age in years and $\\hat{y}$ is predicted price in dollars. Interpret the slope and the intercept.",
                "zh": "对于二手皮卡，模型为 $\\hat{y} = 28000 - 1800x$，其中 $x$ 是车龄（年），$\\hat{y}$ 是预测价格（美元）。解释斜率和截距。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Slope $= -1800$: for each additional year of age, the model predicts the price drops by about \\$1800.",
                  "zh": "斜率 $= -1800$：车龄每增加一年，模型预测价格约下降 \\$1800。"
                },
                {
                  "type": "p",
                  "en": "Intercept $= 28000$: when $x = 0$ (a brand-new truck), the model predicts a price of \\$28,000. Here the intercept is meaningful because a zero-year-old truck is realistic.",
                  "zh": "截距 $= 28000$：当 $x = 0$（全新皮卡）时，模型预测价格为 \\$28,000。这里截距有意义，因为车龄为零的皮卡是现实存在的。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Predicting: Interpolation vs. Extrapolation",
              "zh": "预测：内插与外推"
            },
            {
              "type": "p",
              "en": "To predict, substitute an $x$-value into the model and compute $\\hat{y}$. But where the $x$-value sits matters:",
              "zh": "预测时，把一个 $x$ 值代入模型并算出 $\\hat{y}$。但这个 $x$ 值所处的位置很关键："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Interpolation: predicting for an $x$ inside the range of the data. This is generally reliable.",
                  "zh": "内插：对落在数据范围内的 $x$ 进行预测。这通常是可靠的。"
                },
                {
                  "en": "Extrapolation: predicting for an $x$ far outside the range of the data. This is risky, because the linear pattern may not continue. Extending the truck model to $x = 30$ years might predict a negative price — nonsense.",
                  "zh": "外推：对远超数据范围的 $x$ 进行预测。这很冒险，因为线性模式可能不再成立。把皮卡模型延伸到 $x = 30$ 年可能预测出负价格——毫无意义。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: whenever a prediction uses an $x$-value beyond the data you were given, name it extrapolation and warn that the prediction is unreliable. Graders reward recognizing the danger, not just plugging in.",
              "zh": "考试提示：只要预测所用的 $x$ 值超出了给定的数据范围，就要指出这是外推，并提醒该预测不可靠。阅卷者奖励识别出这种危险，而不只是代入求值。"
            },
            {
              "type": "h3",
              "en": "Residuals: Checking the Fit",
              "zh": "残差：检验拟合优劣"
            },
            {
              "type": "p",
              "en": "A residual measures how far off a prediction is for one point: it is the actual value minus the predicted value.",
              "zh": "残差衡量某一点的预测偏离了多少：它等于实际值减去预测值。"
            },
            {
              "type": "math",
              "tex": "\\text{residual} = y - \\hat{y}"
            },
            {
              "type": "p",
              "en": "A positive residual means the actual point sits above the line (the model underpredicted); a negative residual means it sits below the line (the model overpredicted). A residual plot graphs each residual against $x$. The key idea: if the linear model fits well, the residual plot shows random scatter with no pattern. If instead the residuals form a curve (like a U or an arch), a line is the wrong model — the true relationship is nonlinear.",
              "zh": "正残差表示实际点在直线上方（模型预测偏低）；负残差表示它在直线下方（模型预测偏高）。残差图把每个残差对 $x$ 作图。核心思想：若线性模型拟合得好，残差图呈现无规律的随机散布。若残差反而形成曲线（如 U 形或拱形），则直线是错误的模型——真实关系是非线性的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Computing a residual",
                "zh": "例题 2：计算残差"
              },
              "problem": {
                "en": "The model $\\hat{y} = 28000 - 1800x$ predicts a truck's price. A particular 5-year-old truck actually sold for \\$21,000. Find the residual and interpret it.",
                "zh": "模型 $\\hat{y} = 28000 - 1800x$ 预测皮卡价格。某辆 5 年车龄的皮卡实际售价 \\$21,000。求残差并解释。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First predict at $x = 5$: $\\hat{y} = 28000 - 1800(5) = 28000 - 9000 = 19000$.",
                  "zh": "先在 $x = 5$ 处预测：$\\hat{y} = 28000 - 1800(5) = 28000 - 9000 = 19000$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{residual} = y - \\hat{y} = 21000 - 19000 = 2000"
                },
                {
                  "type": "p",
                  "en": "The residual is $+\\$2000$: this truck actually sold for \\$2000 more than the model predicted, so its point lies above the line.",
                  "zh": "残差为 $+\\$2000$：这辆皮卡的实际售价比模型预测高出 \\$2000，因此它的点位于直线上方。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Correlation vs. Causation",
              "zh": "相关与因果"
            },
            {
              "type": "p",
              "en": "A strong correlation shows that two variables move together — it does NOT prove that one causes the other. Ice cream sales and drowning deaths are strongly correlated, but neither causes the other; a hidden lurking variable, hot summer weather, drives both up. To establish causation you need a carefully controlled experiment, not just correlation from observed data.",
              "zh": "强相关表明两个变量一起变动——它并不能证明一个导致了另一个。冰淇淋销量与溺水死亡人数强相关，但两者互不导致；一个隐藏的潜伏变量——炎热的夏季天气——使两者同时上升。要确立因果关系，需要精心控制的实验，而不只是从观测数据得来的相关。"
            },
            {
              "type": "note",
              "en": "Common mistake: writing \"more $x$ causes more $y$\" from a scatter plot. Observational data can only support \"$x$ and $y$ are associated.\" Reserve causal language for controlled experiments, and stay alert for a lurking variable.",
              "zh": "常见错误：从散点图就写出\"更多的 $x$ 导致更多的 $y$\"。观测数据只能支持\"$x$ 与 $y$ 相关\"。把因果性的措辞留给控制实验，并警惕潜伏变量。"
            },
            {
              "type": "h3",
              "en": "Two-Way Frequency Tables for Categorical Data",
              "zh": "分类数据的双向频数表"
            },
            {
              "type": "p",
              "en": "When both variables are categorical (not numbers) — say, grade level and whether a student plays a sport — we organize counts in a two-way frequency table. From it we read three kinds of relative frequency:",
              "zh": "当两个变量都是分类的（不是数字）——比如年级与学生是否参加体育运动——我们用双向频数表来整理计数。从中可读出三种相对频数："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Joint relative frequency: a single cell count divided by the grand total — the fraction of everyone in that one combination.",
                  "zh": "联合相对频数：某一格的计数除以总计——处于该组合中的人占全体的比例。"
                },
                {
                  "en": "Marginal relative frequency: a row total or column total divided by the grand total — the fraction in one whole category (read from the margins of the table).",
                  "zh": "边际相对频数：某一行合计或某一列合计除以总计——处于某一整个类别中的比例（从表格边缘读出）。"
                },
                {
                  "en": "Conditional relative frequency: a cell count divided by its row total (or column total) — the fraction WITHIN one group. These reveal whether the two variables are associated.",
                  "zh": "条件相对频数：某一格的计数除以它所在行（或列）的合计——某一群体内部的比例。它揭示两个变量是否相关。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Reading a two-way table",
                "zh": "例题 3：读双向表"
              },
              "problem": {
                "en": "Among $200$ students surveyed, $150$ play a sport and $50$ do not. Of the $150$ athletes, $90$ get 8+ hours of sleep. Of the $50$ non-athletes, $20$ get 8+ hours. Find the conditional relative frequency of getting 8+ hours of sleep GIVEN that a student is an athlete, and compare it to the same for non-athletes.",
                "zh": "在受访的 $200$ 名学生中，$150$ 人参加体育运动，$50$ 人不参加。在 $150$ 名运动员中，$90$ 人睡眠 8 小时以上。在 $50$ 名非运动员中，$20$ 人睡眠 8 小时以上。求在\"是运动员\"条件下睡眠 8 小时以上的条件相对频数，并与非运动员作比较。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Condition on athletes: divide by the athlete row total, $150$. So $\\frac{90}{150} = 0.60$, i.e. $60\\%$ of athletes get 8+ hours.",
                  "zh": "以运动员为条件：除以运动员那一行的合计 $150$。故 $\\frac{90}{150} = 0.60$，即 $60\\%$ 的运动员睡眠 8 小时以上。"
                },
                {
                  "type": "p",
                  "en": "For non-athletes: $\\frac{20}{50} = 0.40$, i.e. $40\\%$. Since $60\\% \\ne 40\\%$, sleep and sport participation appear associated in this sample — athletes are more likely to get enough sleep. (This is association, not proof of causation.)",
                  "zh": "对非运动员：$\\frac{20}{50} = 0.40$，即 $40\\%$。由于 $60\\% \\ne 40\\%$，在本样本中睡眠与是否参加运动似乎相关——运动员更可能获得充足睡眠。（这是相关，并非因果的证明。）"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A scatter plot of hours studied ($x$) versus exam score ($y$) shows points rising from lower-left to upper-right in a tight straight band. How would you describe the association?",
                "zh": "学习时长（$x$）与考试成绩（$y$）的散点图显示点从左下向右上升，形成一条紧凑的直线带。你会如何描述这种相关？"
              },
              "choices": [
                "Negative, linear, strong",
                "Positive, linear, strong",
                "Positive, nonlinear, weak",
                "No association"
              ],
              "answer": 1,
              "explanation": {
                "en": "Points rising left to right means positive direction; a straight band means linear form; tightly clustered means strong. It is positive because $y$ increases with $x$ — choosing \"negative\" reverses the direction of the trend.",
                "zh": "点从左到右上升表示正方向；直线带表示线性形态；紧密聚集表示强。它是正相关，因为 $y$ 随 $x$ 增大——选\"负\"就把趋势方向搞反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Over many cities, the number of firefighters sent to a fire is strongly positively correlated with the damage the fire causes. What is the best conclusion?",
                "zh": "在许多城市中，派往火灾现场的消防员人数与火灾造成的损失呈强正相关。最恰当的结论是什么？"
              },
              "choices": [
                "Sending more firefighters causes more damage, so send fewer",
                "The damage causes firefighters to be sent, proving causation",
                "A lurking variable (the size of the fire) drives both, so this is association, not causation",
                "The correlation must be a computational error since it makes no sense"
              ],
              "answer": 2,
              "explanation": {
                "en": "A bigger fire is a lurking variable that both increases damage and calls for more firefighters. The correlation is real but does not mean firefighters cause damage. Correlation from observational data cannot establish causation.",
                "zh": "更大的火灾是一个潜伏变量，它既增加损失又需要更多消防员。相关是真实的，但不代表消防员导致损失。观测数据的相关无法确立因果。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A model for a plant's height is $\\hat{y} = 4 + 1.5x$, where $x$ is weeks and $\\hat{y}$ is height in cm. Predict the height at $x = 6$ weeks. Give the number of centimeters.",
                "zh": "某植物高度的模型为 $\\hat{y} = 4 + 1.5x$，其中 $x$ 为周数，$\\hat{y}$ 为高度（厘米）。预测第 $x = 6$ 周的高度。请给出厘米数。"
              },
              "answer": "13",
              "accept": [
                "13.0",
                "13 cm"
              ],
              "explanation": {
                "en": "Substitute $x = 6$: $\\hat{y} = 4 + 1.5(6) = 4 + 9 = 13$ cm. Remember order of operations — multiply $1.5 \\times 6$ before adding the intercept $4$.",
                "zh": "代入 $x = 6$：$\\hat{y} = 4 + 1.5(6) = 4 + 9 = 13$ 厘米。记住运算顺序——先算 $1.5 \\times 6$，再加截距 $4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Data on Utah lakes were collected for elevations between 1300 m and 1900 m. Using the linear model to predict a value at an elevation of 3500 m is an example of what, and how reliable is it?",
                "zh": "所收集的犹他州湖泊数据海拔介于 1300 米到 1900 米之间。用该线性模型预测海拔 3500 米处的值属于什么，其可靠性如何？"
              },
              "choices": [
                "Interpolation; very reliable",
                "Interpolation; unreliable",
                "Extrapolation; very reliable",
                "Extrapolation; unreliable because 3500 m is far outside the data range"
              ],
              "answer": 3,
              "explanation": {
                "en": "3500 m lies far beyond the data range (1300–1900 m), so predicting there is extrapolation, which is unreliable — the linear pattern may not continue. Interpolation would mean predicting inside the 1300–1900 m range.",
                "zh": "3500 米远超数据范围（1300–1900 米），因此在那里预测是外推，不可靠——线性模式可能不再成立。内插指的是在 1300–1900 米范围内预测。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A regression model predicts a house price of \\$310{,}000, but the house actually sold for \\$295{,}000. Find the residual (actual − predicted) in dollars. Include the sign.",
                "zh": "某回归模型预测房价为 \\$310{,}000，但该房实际售价为 \\$295{,}000。求残差（实际值 − 预测值），以美元计。请带上符号。"
              },
              "answer": "-15000",
              "accept": [
                "-15,000",
                "-15000.0",
                "-$15000"
              ],
              "explanation": {
                "en": "Residual $= y - \\hat{y} = 295000 - 310000 = -15000$. The negative sign means the model overpredicted; the actual point lies below the regression line. Writing $+15000$ reverses the subtraction order.",
                "zh": "残差 $= y - \\hat{y} = 295000 - 310000 = -15000$。负号表示模型预测偏高；实际点位于回归直线下方。写成 $+15000$ 就把减法顺序弄反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "After fitting a line to a data set, you make a residual plot and see the residuals form a clear U-shaped (curved) pattern. What does this tell you?",
                "zh": "对一组数据拟合一条直线后，你作出残差图，看到残差形成明显的 U 形（弯曲）模式。这说明什么？"
              },
              "choices": [
                "The linear model fits perfectly",
                "A linear model is a poor fit; the true relationship is nonlinear",
                "There is a computational mistake, since residual plots are always random",
                "The correlation must be exactly zero"
              ],
              "answer": 1,
              "explanation": {
                "en": "A well-fitting line leaves residuals scattered randomly with no pattern. A clear curved (U-shaped) pattern signals that a straight line is the wrong model and the relationship is actually nonlinear. Residual plots are not \"always random\" — that only happens when the model fits well.",
                "zh": "拟合良好的直线会使残差无规律地随机散布。明显的弯曲（U 形）模式表明直线是错误的模型，关系实际上是非线性的。残差图并非\"总是随机\"——只有模型拟合良好时才如此。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a survey of $80$ students, $32$ are freshmen and $12$ of those freshmen bring lunch from home. Find the conditional relative frequency that a student brings lunch from home GIVEN they are a freshman. Give a fraction or decimal.",
                "zh": "在对 $80$ 名学生的调查中，$32$ 人是高一新生，其中 $12$ 名新生自带午餐。求在\"是高一新生\"条件下自带午餐的条件相对频数。请以分数或小数作答。"
              },
              "answer": "0.375",
              "accept": [
                "3/8",
                ".375",
                "37.5%"
              ],
              "explanation": {
                "en": "Condition on freshmen, so divide by the freshman total, $32$: $\\frac{12}{32} = \\frac{3}{8} = 0.375$. A common error is dividing by the grand total $80$ — that would give the joint relative frequency, not the conditional one.",
                "zh": "以新生为条件，故除以新生总数 $32$：$\\frac{12}{32} = \\frac{3}{8} = 0.375$。常见错误是除以总计 $80$——那得到的是联合相对频数，而非条件相对频数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A least-squares line always passes through the point $(\\bar{x}, \\bar{y})$, the means of the two variables. If $\\bar{x} = 10$, $\\bar{y} = 45$, and the slope is $b = 3$, what is the intercept $a$ of the model $\\hat{y} = a + bx$?",
                "zh": "荣誉挑战：最小二乘直线总是经过点 $(\\bar{x}, \\bar{y})$，即两个变量的平均数。若 $\\bar{x} = 10$，$\\bar{y} = 45$，斜率 $b = 3$，则模型 $\\hat{y} = a + bx$ 的截距 $a$ 是多少？"
              },
              "choices": [
                "$a = 15$",
                "$a = 75$",
                "$a = 45$",
                "$a = 3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The line passes through $(10, 45)$, so $45 = a + 3(10) = a + 30$, giving $a = 15$. A tempting error is to compute $a = \\bar{y} + b\\bar{x} = 45 + 30 = 75$, which uses the wrong sign — you must solve $45 = a + 30$, so subtract.",
                "zh": "直线经过 $(10, 45)$，故 $45 = a + 3(10) = a + 30$，得 $a = 15$。一个诱人的错误是算成 $a = \\bar{y} + b\\bar{x} = 45 + 30 = 75$，这用错了符号——你必须解 $45 = a + 30$，所以要相减。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "congruence-construction-proof",
      "title": "Unit 7: Congruence, Construction, and Proof",
      "titleZh": "第七单元：全等、作图与证明",
      "lessons": [
        {
          "id": "transformations-and-congruence",
          "title": "Rigid Transformations and Congruence",
          "titleZh": "刚体变换与全等",
          "content": [
            {
              "type": "h2",
              "en": "Moving Shapes Without Changing Them",
              "zh": "移动图形而不改变其形状"
            },
            {
              "type": "p",
              "en": "When a snowboarder at Park City slides a stencil across a banner, spins it, or flips it over to print a mirror-image logo, the stencil itself never stretches or shrinks — only its position changes. In geometry, motions that move a figure without changing its size or shape are called rigid transformations (or rigid motions). This lesson builds the idea of congruence directly out of these motions.",
              "zh": "当帕克城的滑雪者把一个模板在横幅上平移、旋转，或翻转过来印出镜像标志时，模板本身从不拉伸或缩小——只有它的位置发生变化。在几何中，把图形移动而不改变其大小或形状的运动称为刚体变换（或刚体运动）。本课将直接由这些运动建立全等的概念。"
            },
            {
              "type": "p",
              "en": "A rigid transformation takes a figure (the pre-image) to a new figure (the image). Its defining property is that it preserves distance and angle measure: the distance between any two points equals the distance between their images, and every angle keeps its measure. Because lengths and angles are unchanged, the image is an exact copy of the pre-image in a new location or orientation.",
              "zh": "刚体变换把一个图形（原像）变到一个新图形（像）。其定义性质是保持距离和角度：任意两点之间的距离等于它们的像之间的距离，每个角都保持其度数。由于长度和角度都不变，像是原像在新位置或新方向上的精确副本。"
            },
            {
              "type": "h3",
              "en": "The Three Basic Rigid Motions",
              "zh": "三种基本刚体运动"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A translation slides every point the same distance in the same direction (a \"shift\").",
                  "zh": "平移把每个点沿同一方向移动相同的距离（\"滑动\"）。"
                },
                {
                  "en": "A reflection flips the figure across a line called the line of reflection, producing a mirror image.",
                  "zh": "反射把图形沿一条称为对称轴的直线翻折，产生镜像。"
                },
                {
                  "en": "A rotation turns the figure about a fixed point called the center, through a directed angle (counterclockwise is positive).",
                  "zh": "旋转把图形绕一个称为旋转中心的定点转过一个有向角（逆时针为正）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "A fourth rigid motion, the glide reflection, is a reflection combined with a translation along the same line, but the three above are the building blocks. Any rigid motion in the plane can be written as a sequence of these.",
              "zh": "第四种刚体运动——滑动反射，是反射与沿同一直线平移的组合，但上述三种是基本构件。平面内任何刚体运动都可以写成这些运动的序列。"
            },
            {
              "type": "h3",
              "en": "Coordinate Rules",
              "zh": "坐标法则"
            },
            {
              "type": "p",
              "en": "On the coordinate plane, each rigid motion becomes an algebraic rule that sends a point $(x, y)$ to a new point. This is where the integrated course links geometry and algebra directly.",
              "zh": "在坐标平面上，每种刚体运动都变成一条代数法则，把点 $(x, y)$ 送到一个新点。这正是整合式课程把几何与代数直接联系起来的地方。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Translation by $a$ horizontally and $b$ vertically: $(x, y) \\to (x + a,\\ y + b)$.",
                  "zh": "水平平移 $a$、竖直平移 $b$：$(x, y) \\to (x + a,\\ y + b)$。"
                },
                {
                  "en": "Reflection over the $x$-axis: $(x, y) \\to (x,\\ -y)$.",
                  "zh": "关于 $x$ 轴反射：$(x, y) \\to (x,\\ -y)$。"
                },
                {
                  "en": "Reflection over the $y$-axis: $(x, y) \\to (-x,\\ y)$.",
                  "zh": "关于 $y$ 轴反射：$(x, y) \\to (-x,\\ y)$。"
                },
                {
                  "en": "Reflection over the line $y = x$: $(x, y) \\to (y,\\ x)$.",
                  "zh": "关于直线 $y = x$ 反射：$(x, y) \\to (y,\\ x)$。"
                },
                {
                  "en": "Rotation $90^\\circ$ counterclockwise about the origin: $(x, y) \\to (-y,\\ x)$.",
                  "zh": "绕原点逆时针旋转 $90^\\circ$：$(x, y) \\to (-y,\\ x)$。"
                },
                {
                  "en": "Rotation $180^\\circ$ about the origin: $(x, y) \\to (-x,\\ -y)$.",
                  "zh": "绕原点旋转 $180^\\circ$：$(x, y) \\to (-x,\\ -y)$。"
                },
                {
                  "en": "Rotation $270^\\circ$ counterclockwise about the origin (same as $90^\\circ$ clockwise): $(x, y) \\to (y,\\ -x)$.",
                  "zh": "绕原点逆时针旋转 $270^\\circ$（等同于顺时针 $90^\\circ$）：$(x, y) \\to (y,\\ -x)$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: mixing up the $90^\\circ$ and $270^\\circ$ rules. For $90^\\circ$ counterclockwise, swap the coordinates and negate the NEW first coordinate: $(-y, x)$. For $270^\\circ$ counterclockwise, swap and negate the NEW second coordinate: $(y, -x)$. Check with a test point like $(1, 0)$: a $90^\\circ$ turn should send it up to $(0, 1)$.",
              "zh": "常见错误：混淆 $90^\\circ$ 与 $270^\\circ$ 的法则。逆时针 $90^\\circ$：交换坐标并把新的第一个坐标取负，得 $(-y, x)$。逆时针 $270^\\circ$：交换坐标并把新的第二个坐标取负，得 $(y, -x)$。用测试点 $(1, 0)$ 验证：转 $90^\\circ$ 应把它送到上方的 $(0, 1)$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying a rotation rule",
                "zh": "例题 1：应用旋转法则"
              },
              "problem": {
                "en": "Triangle $ABC$ has vertices $A(2, 1)$, $B(5, 1)$, and $C(5, 3)$ (a right triangle with the right angle at $B$). Find the image of each vertex after a $90^\\circ$ counterclockwise rotation about the origin, and state where the right angle lands.",
                "zh": "三角形 $ABC$ 的顶点为 $A(2, 1)$、$B(5, 1)$、$C(5, 3)$（直角在 $B$ 处的直角三角形）。求绕原点逆时针旋转 $90^\\circ$ 后各顶点的像，并说明直角落在何处。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the rule $(x, y) \\to (-y, x)$ to each vertex:",
                  "zh": "对每个顶点应用法则 $(x, y) \\to (-y, x)$："
                },
                {
                  "type": "math",
                  "tex": "A(2, 1) \\to A'(-1, 2), \\quad B(5, 1) \\to B'(-1, 5), \\quad C(5, 3) \\to C'(-3, 5)"
                },
                {
                  "type": "p",
                  "en": "The right angle was at $B$, so after the rigid motion the right angle is at $B'(-1, 5)$. Because rotation preserves angle measure, it is still exactly $90^\\circ$. The image triangle $A'B'C'$ is congruent to $ABC$.",
                  "zh": "直角原在 $B$ 处，故刚体运动后直角在 $B'(-1, 5)$ 处。由于旋转保持角度，它仍恰好是 $90^\\circ$。像三角形 $A'B'C'$ 与 $ABC$ 全等。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Defining Congruence Through Motion",
              "zh": "用运动定义全等"
            },
            {
              "type": "p",
              "en": "Two figures are congruent if there is a sequence of rigid motions that maps one exactly onto the other. This is the modern, transformation-based definition used in the Utah Core. It replaces the older idea of \"same size and shape\" with something you can actually verify: try to carry one figure onto the other using slides, flips, and turns. If you can, they are congruent; if no sequence works, they are not.",
              "zh": "如果存在一系列刚体运动能把一个图形恰好映到另一个图形上，则这两个图形全等。这是犹他州核心标准采用的、基于变换的现代定义。它用一种可以真正验证的方式取代了旧的\"大小和形状相同\"：尝试用平移、翻折和旋转把一个图形搬到另一个上。若能做到，它们全等；若没有任何序列能做到，则不全等。"
            },
            {
              "type": "p",
              "en": "Since each rigid motion preserves distance and angle, corresponding sides of congruent figures are equal in length and corresponding angles are equal in measure. We write $\\triangle ABC \\cong \\triangle DEF$, and the order of letters tells you which parts correspond: $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$.",
              "zh": "由于每种刚体运动都保持距离和角度，全等图形的对应边长度相等、对应角度数相等。我们记作 $\\triangle ABC \\cong \\triangle DEF$，字母的顺序表明各部分的对应关系：$A \\leftrightarrow D$、$B \\leftrightarrow E$、$C \\leftrightarrow F$。"
            },
            {
              "type": "note",
              "en": "Test tip: congruence statements must match corresponding vertices in order. If $\\triangle ABC \\cong \\triangle DEF$, then $\\overline{AB} \\cong \\overline{DE}$ and $\\angle B \\cong \\angle E$. Writing $\\triangle ABC \\cong \\triangle EFD$ when it is not true will cost you credit even if the triangles really are congruent.",
              "zh": "考试提示：全等陈述必须按顺序对应顶点。若 $\\triangle ABC \\cong \\triangle DEF$，则 $\\overline{AB} \\cong \\overline{DE}$ 且 $\\angle B \\cong \\angle E$。即使两个三角形确实全等，若错写成 $\\triangle ABC \\cong \\triangle EFD$ 也会失分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Describing a sequence of transformations",
                "zh": "例题 2：描述变换序列"
              },
              "problem": {
                "en": "Segment $PQ$ has endpoints $P(1, 2)$ and $Q(4, 2)$. Segment $P'Q'$ has endpoints $P'(1, -2)$ and $Q'(1, -5)$. Describe a sequence of rigid motions that maps $PQ$ onto $P'Q'$, showing the two segments are congruent.",
                "zh": "线段 $PQ$ 的端点为 $P(1, 2)$、$Q(4, 2)$。线段 $P'Q'$ 的端点为 $P'(1, -2)$、$Q'(1, -5)$。描述一系列刚体运动把 $PQ$ 映到 $P'Q'$，从而说明两线段全等。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First check lengths: $PQ$ is horizontal with length $4 - 1 = 3$; $P'Q'$ is vertical with length $|-2 - (-5)| = 3$. Equal lengths mean a sequence should exist. The segment turned from horizontal to vertical, suggesting a rotation.",
                  "zh": "先检验长度：$PQ$ 是水平的，长度为 $4 - 1 = 3$；$P'Q'$ 是竖直的，长度为 $|-2 - (-5)| = 3$。长度相等意味着应存在这样的序列。线段从水平变为竖直，提示要用旋转。"
                },
                {
                  "type": "p",
                  "en": "Step 1: Rotate $90^\\circ$ clockwise (i.e. $270^\\circ$ counterclockwise) about the origin, $(x, y) \\to (y, -x)$. Then $P(1, 2) \\to (2, -1)$ and $Q(4, 2) \\to (2, -4)$.",
                  "zh": "第一步：绕原点顺时针旋转 $90^\\circ$（即逆时针 $270^\\circ$），$(x, y) \\to (y, -x)$。则 $P(1, 2) \\to (2, -1)$，$Q(4, 2) \\to (2, -4)$。"
                },
                {
                  "type": "p",
                  "en": "Step 2: Translate by $(x, y) \\to (x - 1,\\ y - 1)$. Then $(2, -1) \\to (1, -2) = P'$ and $(2, -4) \\to (1, -5) = Q'$. The composition maps $PQ$ exactly onto $P'Q'$, so $PQ \\cong P'Q'$.",
                  "zh": "第二步：平移 $(x, y) \\to (x - 1,\\ y - 1)$。则 $(2, -1) \\to (1, -2) = P'$，$(2, -4) \\to (1, -5) = Q'$。该复合把 $PQ$ 恰好映到 $P'Q'$，所以 $PQ \\cong P'Q'$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Symmetry: Reflections and Rotations of a Single Figure",
              "zh": "对称：单个图形的反射与旋转"
            },
            {
              "type": "p",
              "en": "A figure has line symmetry (reflection symmetry) if some reflection maps the figure onto itself; the line of reflection is a line of symmetry. A figure has rotational symmetry if some rotation of less than $360^\\circ$ about its center maps the figure onto itself; the smallest such angle is the angle of rotational symmetry, and $360^\\circ$ divided by that angle gives the order of symmetry.",
              "zh": "若某个反射能把图形映到自身，则该图形具有轴对称（反射对称）；对称轴即为该对称直线。若绕中心旋转小于 $360^\\circ$ 的某个角能把图形映到自身，则该图形具有旋转对称；最小的这种角称为旋转对称角，$360^\\circ$ 除以该角即为对称的阶数。"
            },
            {
              "type": "p",
              "en": "For example, a square centered at the origin with vertices $(1, 1)$, $(-1, 1)$, $(-1, -1)$, $(1, -1)$ has 4 lines of symmetry (the $x$-axis, the $y$-axis, the line $y = x$, and the line $y = -x$) and rotational symmetry of order 4 (it maps onto itself under rotations of $90^\\circ$, $180^\\circ$, and $270^\\circ$ about the origin). A regular hexagon has 6 lines of symmetry and rotational symmetry of order 6 (smallest angle $60^\\circ$).",
              "zh": "例如，以原点为中心、顶点为 $(1, 1)$、$(-1, 1)$、$(-1, -1)$、$(1, -1)$ 的正方形有 4 条对称轴（$x$ 轴、$y$ 轴、直线 $y = x$、直线 $y = -x$），旋转对称阶数为 4（在绕原点旋转 $90^\\circ$、$180^\\circ$、$270^\\circ$ 下映到自身）。正六边形有 6 条对称轴，旋转对称阶数为 6（最小角 $60^\\circ$）。"
            },
            {
              "type": "note",
              "en": "Common mistake: counting $360^\\circ$ (or $0^\\circ$) as rotational symmetry. Every figure maps onto itself after a full turn, so that never counts — rotational symmetry requires a turn strictly between $0^\\circ$ and $360^\\circ$. A figure with no such turn (like a scalene triangle) has rotational symmetry of order 1, which we usually just call \"no rotational symmetry.\"",
              "zh": "常见错误：把 $360^\\circ$（或 $0^\\circ$）算作旋转对称。任何图形转一整圈都会映到自身，所以那永远不算——旋转对称要求旋转角严格介于 $0^\\circ$ 与 $360^\\circ$ 之间。没有这种旋转的图形（如不等边三角形）旋转对称阶数为 1，通常就说它\"没有旋转对称\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Identifying symmetry",
                "zh": "例题 3：判断对称性"
              },
              "problem": {
                "en": "A capital letter \"H\" is drawn upright and symmetric. How many lines of symmetry does it have, and what is its order of rotational symmetry?",
                "zh": "一个端正且对称的大写字母 \"H\"。它有多少条对称轴？旋转对称的阶数是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A vertical line down the middle of the H maps its left half onto its right half, and a horizontal line through the middle maps its top onto its bottom. That is 2 lines of symmetry.",
                  "zh": "沿 H 正中的竖直线把左半映到右半，穿过正中的水平线把上半映到下半。因此有 2 条对称轴。"
                },
                {
                  "type": "p",
                  "en": "A $180^\\circ$ rotation about the center maps the H onto itself (top-left goes to bottom-right, and so on), but a $90^\\circ$ rotation would tip it sideways and it would not match. So the order of rotational symmetry is 2 (smallest angle $180^\\circ$).",
                  "zh": "绕中心旋转 $180^\\circ$ 把 H 映到自身（左上到右下，依此类推），但旋转 $90^\\circ$ 会把它转倒，无法重合。所以旋转对称阶数为 2（最小角 $180^\\circ$）。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Point $A(3, -5)$ is reflected over the $y$-axis. What are the coordinates of its image?",
                "zh": "点 $A(3, -5)$ 关于 $y$ 轴反射。它的像的坐标是什么？"
              },
              "choices": [
                "$(-3, -5)$",
                "$(3, 5)$",
                "$(-3, 5)$",
                "$(5, 3)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Reflection over the $y$-axis uses $(x, y) \\to (-x, y)$: only the $x$-coordinate changes sign, giving $(-3, -5)$. The choice $(3, 5)$ is the error of reflecting over the $x$-axis instead.",
                "zh": "关于 $y$ 轴反射用 $(x, y) \\to (-x, y)$：只有 $x$ 坐标变号，得 $(-3, -5)$。选项 $(3, 5)$ 是误按关于 $x$ 轴反射所致。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which sequence of rigid motions could map a figure in Quadrant I to a congruent figure in Quadrant III with the same orientation (not mirrored)?",
                "zh": "哪一系列刚体运动能把第一象限中的图形映到第三象限中一个方向相同（未镜像）的全等图形？"
              },
              "choices": [
                "A single reflection over the $x$-axis",
                "A single reflection over the $y$-axis",
                "A $180^\\circ$ rotation about the origin",
                "A reflection over the line $y = x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A $180^\\circ$ rotation, $(x, y) \\to (-x, -y)$, sends Quadrant I to Quadrant III and preserves orientation (rotations never mirror a figure). Any single reflection would flip the figure into a mirror image, so the orientation would not match.",
                "zh": "旋转 $180^\\circ$，即 $(x, y) \\to (-x, -y)$，把第一象限送到第三象限且保持方向（旋转从不使图形镜像）。任何单一反射都会把图形翻成镜像，方向就不一致了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Point $B(-2, 6)$ is rotated $90^\\circ$ counterclockwise about the origin. Give the image as a coordinate pair $(x, y)$.",
                "zh": "点 $B(-2, 6)$ 绕原点逆时针旋转 $90^\\circ$。请以坐标对 $(x, y)$ 给出其像。"
              },
              "answer": "(-6, -2)",
              "accept": [
                "(-6,-2)",
                "-6, -2",
                "-6,-2"
              ],
              "explanation": {
                "en": "The rule is $(x, y) \\to (-y, x)$, so $(-2, 6) \\to (-6, -2)$. A common slip is to get $(6, -2)$ by forgetting to negate the $y$-value before it moves to the first position.",
                "zh": "法则是 $(x, y) \\to (-y, x)$，故 $(-2, 6) \\to (-6, -2)$。常见失误是忘记先把 $y$ 值取负，误得 $(6, -2)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A translation maps $(x, y) \\to (x - 4,\\ y + 3)$. Which statement about this transformation is FALSE?",
                "zh": "一个平移把 $(x, y) \\to (x - 4,\\ y + 3)$。关于此变换，哪个说法是错误的？"
              },
              "choices": [
                "It preserves the distance between any two points.",
                "It preserves every angle measure.",
                "It moves the figure 4 units left and 3 units up.",
                "It turns the figure so its orientation is reversed."
              ],
              "answer": 3,
              "explanation": {
                "en": "A translation only slides a figure; it never reverses orientation (that is what reflections do). The other three statements are all true properties of a translation, which is a rigid motion moving each point 4 left and 3 up.",
                "zh": "平移只是滑动图形，绝不改变方向（那是反射所为）。其余三项都是平移的正确性质：它是把每个点向左 4、向上 3 的刚体运动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Triangle $DEF$ has vertices $D(0, 0)$, $E(4, 0)$, $F(4, 3)$, so $DF = 5$. After ANY sequence of rigid motions, what is the length of the image of side $DF$? Give an integer.",
                "zh": "三角形 $DEF$ 的顶点为 $D(0, 0)$、$E(4, 0)$、$F(4, 3)$，故 $DF = 5$。经过任意一系列刚体运动后，边 $DF$ 的像的长度是多少？请以整数作答。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "Rigid motions preserve distance, so the image of $DF$ has the same length as $DF$. By the distance formula $DF = \\sqrt{(4-0)^2 + (3-0)^2} = \\sqrt{16 + 9} = 5$, and this length is unchanged no matter what sequence of translations, reflections, or rotations is applied.",
                "zh": "刚体运动保持距离，所以 $DF$ 的像与 $DF$ 长度相同。由距离公式 $DF = \\sqrt{(4-0)^2 + (3-0)^2} = \\sqrt{16 + 9} = 5$，无论施加怎样的平移、反射或旋转序列，此长度都不变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A regular pentagon is centered at the origin. What is its smallest angle of rotational symmetry?",
                "zh": "一个正五边形以原点为中心。它最小的旋转对称角是多少？"
              },
              "choices": [
                "$36^\\circ$",
                "$54^\\circ$",
                "$72^\\circ$",
                "$108^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A regular $n$-gon has rotational symmetry of order $n$, with smallest angle $\\frac{360^\\circ}{n}$. For a pentagon, $\\frac{360^\\circ}{5} = 72^\\circ$. The value $108^\\circ$ is the interior angle of the pentagon, not its rotation angle — a common mix-up.",
                "zh": "正 $n$ 边形的旋转对称阶数为 $n$，最小角为 $\\frac{360^\\circ}{n}$。五边形为 $\\frac{360^\\circ}{5} = 72^\\circ$。$108^\\circ$ 是五边形的内角，不是旋转角——这是常见的混淆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A stencil logo is printed at position $P(6, 2)$. The design calls for a matching mark to appear at $(2, 6)$ using a single reflection. Over which line $y = \\underline{\\ \\ }$ should the stencil be reflected? Give the equation as \"y=x\" or \"y=-x\".",
                "zh": "一个模板标志印在位置 $P(6, 2)$。设计要求用一次反射在 $(2, 6)$ 处出现一个相配的标记。应关于哪条直线 $y = \\underline{\\ \\ }$ 反射模板？请以 \"y=x\" 或 \"y=-x\" 作答。"
              },
              "answer": "y=x",
              "accept": [
                "y = x",
                "x",
                "the line y=x"
              ],
              "explanation": {
                "en": "Reflection over $y = x$ uses $(x, y) \\to (y, x)$, which swaps the coordinates: $(6, 2) \\to (2, 6)$. This is a real-world use of the swap rule. Reflecting over $y = -x$ would give $(-2, -6)$ instead.",
                "zh": "关于 $y = x$ 反射用 $(x, y) \\to (y, x)$，即交换坐标：$(6, 2) \\to (2, 6)$。这是交换法则的实际应用。若关于 $y = -x$ 反射则会得到 $(-2, -6)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Triangle $T$ has vertices $(1, 1)$, $(1, 4)$, $(3, 1)$. It is reflected over the $x$-axis and then translated by $(x, y) \\to (x + 2,\\ y)$. Which single description also gives a valid check that the final image is congruent to $T$?",
                "zh": "三角形 $T$ 的顶点为 $(1, 1)$、$(1, 4)$、$(3, 1)$。先关于 $x$ 轴反射，再平移 $(x, y) \\to (x + 2,\\ y)$。下列哪一项也能有效地检验最终的像与 $T$ 全等？"
              },
              "choices": [
                "The final image has the same area but longer sides than $T$.",
                "Each side of the final image has the same length as the corresponding side of $T$, and each angle has the same measure.",
                "The final image is a mirror image, so it cannot be congruent to $T$.",
                "Congruence holds only if the figure returns to its exact starting position."
              ],
              "answer": 1,
              "explanation": {
                "en": "The image results from a sequence of rigid motions (a reflection then a translation), so it is congruent to $T$ by definition: corresponding sides are equal in length and corresponding angles are equal in measure. Mirror images from reflections are still congruent, and a figure need not return to its start to be congruent to itself under the motion.",
                "zh": "像由一系列刚体运动（先反射后平移）得到，故按定义与 $T$ 全等：对应边长度相等、对应角度数相等。反射产生的镜像仍然全等，且图形无需回到起点就与自身在该运动下全等。"
              }
            }
          ]
        },
        {
          "id": "constructions-and-proof",
          "title": "Constructions and Geometric Proof",
          "titleZh": "尺规作图与几何证明",
          "content": [
            {
              "type": "h2",
              "en": "Building and Proving with a Compass and Straightedge",
              "zh": "用圆规和直尺作图与证明"
            },
            {
              "type": "p",
              "en": "Long before rulers with tick marks, surveyors laying out fields near the Great Salt Lake could still copy a length exactly, split an angle in half, or draw a perfectly perpendicular boundary — using only a compass (to draw circles and copy distances) and a straightedge (to draw straight lines, but NOT to measure). These compass-and-straightedge constructions are exact by logic, not by measurement, and each one can be justified with a proof.",
              "zh": "早在带刻度的尺子出现之前，在大盐湖附近划分土地的测量员就已能精确复制一段长度、把一个角平分，或画出完全垂直的边界——只用一把圆规（画圆和复制距离）和一把直尺（画直线，但不用来测量）。这些尺规作图靠逻辑而非测量做到精确，而每一种都可以用证明来说明其正确性。"
            },
            {
              "type": "note",
              "en": "Rule of the game: a straightedge draws lines but has no marks, and a compass sets a radius and draws arcs or circles. You may not measure lengths or angles with a ruler or protractor in a true construction — every point must come from intersecting lines and arcs.",
              "zh": "作图规则：直尺只用来画线、没有刻度，圆规用来定半径、画弧或圆。真正的作图中不得用刻度尺或量角器测量长度或角度——每个点都必须来自直线与弧的交点。"
            },
            {
              "type": "h3",
              "en": "Copying a Segment",
              "zh": "复制一条线段"
            },
            {
              "type": "p",
              "en": "To copy segment $\\overline{AB}$ onto a ray starting at point $C$:",
              "zh": "把线段 $\\overline{AB}$ 复制到以点 $C$ 为端点的射线上："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Draw a ray with endpoint $C$ (using the straightedge).",
                  "zh": "第一步：用直尺画一条以 $C$ 为端点的射线。"
                },
                {
                  "en": "Step 2: Open the compass so its point is on $A$ and its pencil is on $B$; this fixes the radius equal to length $AB$.",
                  "zh": "第二步：把圆规针尖放在 $A$、笔尖放在 $B$，这就把半径固定为长度 $AB$。"
                },
                {
                  "en": "Step 3: Without changing the opening, place the compass point on $C$ and draw an arc that crosses the ray. Label the crossing point $D$. Then $\\overline{CD} \\cong \\overline{AB}$.",
                  "zh": "第三步：保持张开不变，把圆规针尖放在 $C$，画弧与射线相交。记交点为 $D$。则 $\\overline{CD} \\cong \\overline{AB}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Perpendicular Bisector of a Segment",
              "zh": "线段的垂直平分线"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Open the compass to more than half of $AB$.",
                  "zh": "第一步：把圆规张开到大于 $AB$ 的一半。"
                },
                {
                  "en": "Step 2: With the point on $A$, draw arcs above and below the segment. With the SAME opening and the point on $B$, draw two more arcs, crossing the first two. Label the two intersection points $M$ (above) and $N$ (below).",
                  "zh": "第二步：以 $A$ 为圆心，在线段上下各画弧。用相同张开、以 $B$ 为圆心再画两条弧，与前两条相交。记两个交点为 $M$（上方）与 $N$（下方）。"
                },
                {
                  "en": "Step 3: Draw line $MN$ with the straightedge. It is the perpendicular bisector: it crosses $\\overline{AB}$ at its midpoint and forms a $90^\\circ$ angle.",
                  "zh": "第三步：用直尺画直线 $MN$。它就是垂直平分线：与 $\\overline{AB}$ 相交于其中点，并构成 $90^\\circ$ 角。"
                }
              ]
            },
            {
              "type": "p",
              "en": "This works because $M$ and $N$ are each the same distance from $A$ as from $B$ (all four arcs used one radius), so both lie on the set of points equidistant from $A$ and $B$ — which is exactly the perpendicular bisector.",
              "zh": "这之所以成立，是因为 $M$ 和 $N$ 到 $A$ 与到 $B$ 的距离都相等（四条弧用的是同一半径），所以两点都落在到 $A$ 与到 $B$ 等距的点集上——而那正是垂直平分线。"
            },
            {
              "type": "h3",
              "en": "Bisecting an Angle, and Perpendicular / Parallel Lines",
              "zh": "角平分线，以及垂线与平行线"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Angle bisector of $\\angle A$: with the point on vertex $A$, draw an arc crossing both sides at points $P$ and $Q$. From $P$ and $Q$, draw two arcs of equal radius that cross at point $R$ inside the angle. Ray $AR$ bisects $\\angle A$.",
                  "zh": "$\\angle A$ 的角平分线：以顶点 $A$ 为圆心画弧，与两边分别交于 $P$、$Q$。分别以 $P$、$Q$ 为圆心画两条等半径的弧，在角内交于点 $R$。射线 $AR$ 平分 $\\angle A$。"
                },
                {
                  "en": "Perpendicular through a point on a line: treat the point as the midpoint of a short segment (mark equal distances left and right with the compass), then construct the perpendicular bisector of that segment.",
                  "zh": "过直线上一点作垂线：把该点视为一小段线段的中点（用圆规在左右标出等距点），再作该线段的垂直平分线。"
                },
                {
                  "en": "Parallel line through a point $P$ not on line $\\ell$: draw any transversal through $P$ meeting $\\ell$, then copy the angle it makes with $\\ell$ at $P$ on the same side. Equal corresponding angles force the new line to be parallel to $\\ell$.",
                  "zh": "过不在直线 $\\ell$ 上的点 $P$ 作平行线：过 $P$ 画任一条与 $\\ell$ 相交的截线，然后在 $P$ 处、同侧复制它与 $\\ell$ 所成的角。相等的同位角迫使新直线与 $\\ell$ 平行。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: changing the compass opening in the middle of a construction. The perpendicular-bisector and angle-bisector constructions only work because certain radii are kept equal. If you accidentally re-open the compass between arcs, the intersection points no longer have the equal-distance property the proof relies on.",
              "zh": "常见错误：作图中途改变圆规的张开。垂直平分线和角平分线的作图之所以成立，正是因为某些半径保持相等。若你在两条弧之间不小心重新张开圆规，交点就不再具有证明所依赖的等距性质。"
            },
            {
              "type": "h3",
              "en": "Triangle Congruence Criteria from Rigid Motions",
              "zh": "由刚体运动得到的三角形全等判定"
            },
            {
              "type": "p",
              "en": "From the previous lesson, two triangles are congruent when a sequence of rigid motions maps one onto the other. Checking all three sides and all three angles would be tedious, so we use shortcuts. Each criterion below guarantees that such a sequence of rigid motions exists, so only a few matching parts are needed:",
              "zh": "由上一课可知，当一系列刚体运动能把一个三角形映到另一个时，两三角形全等。逐一核对三条边和三个角很繁琐，所以我们用捷径。下面每个判定都保证存在这样的刚体运动序列，因而只需少数对应部分相等："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "SSS (Side-Side-Side): if all three pairs of corresponding sides are equal, the triangles are congruent.",
                  "zh": "SSS（边边边）：若三对对应边都相等，则三角形全等。"
                },
                {
                  "en": "SAS (Side-Angle-Side): if two pairs of sides and the INCLUDED angle (the angle between them) are equal, the triangles are congruent.",
                  "zh": "SAS（边角边）：若两对边及其夹角（两边之间的角）相等，则三角形全等。"
                },
                {
                  "en": "ASA (Angle-Side-Angle): if two pairs of angles and the INCLUDED side (the side between them) are equal, the triangles are congruent.",
                  "zh": "ASA（角边角）：若两对角及其夹边（两角之间的边）相等，则三角形全等。"
                },
                {
                  "en": "AAS (Angle-Angle-Side): if two pairs of angles and a NON-included side are equal, the triangles are congruent.",
                  "zh": "AAS（角角边）：若两对角及一条非夹边相等，则三角形全等。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: assuming SSA or AAA prove congruence. They do not. AAA gives the same shape but possibly different sizes (similar, not congruent), and SSA (two sides and a non-included angle) can produce two different triangles — the \"ambiguous case.\" Only SSS, SAS, ASA, and AAS are valid triangle-congruence shortcuts.",
              "zh": "常见错误：以为 SSA 或 AAA 能证明全等。它们不能。AAA 给出相同形状但大小可能不同（相似而非全等），而 SSA（两边及一非夹角）可能产生两个不同的三角形——即\"歧义情形\"。只有 SSS、SAS、ASA、AAS 才是有效的三角形全等捷径。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Choosing a congruence criterion",
                "zh": "例题 1：选择全等判定"
              },
              "problem": {
                "en": "In triangles $ABC$ and $DEF$, you know $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and $\\overline{AB} \\cong \\overline{DE}$ (the side between the two known angles). Which criterion proves $\\triangle ABC \\cong \\triangle DEF$?",
                "zh": "在三角形 $ABC$ 与 $DEF$ 中，已知 $\\angle A \\cong \\angle D$、$\\angle B \\cong \\angle E$，且 $\\overline{AB} \\cong \\overline{DE}$（两已知角之间的边）。哪个判定能证明 $\\triangle ABC \\cong \\triangle DEF$？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The side $\\overline{AB}$ lies between angles $A$ and $B$, so it is the included side of the two angle pairs. Two angles with the included side is exactly ASA.",
                  "zh": "边 $\\overline{AB}$ 位于角 $A$ 与角 $B$ 之间，故它是两对角的夹边。两角及其夹边正是 ASA。"
                },
                {
                  "type": "p",
                  "en": "Therefore $\\triangle ABC \\cong \\triangle DEF$ by ASA. (Had the equal side been $\\overline{BC}$ or $\\overline{AC}$ instead — not between the two angles — the correct criterion would have been AAS.)",
                  "zh": "所以由 ASA 得 $\\triangle ABC \\cong \\triangle DEF$。（若相等的边换成 $\\overline{BC}$ 或 $\\overline{AC}$——不在两角之间——则应用 AAS。）"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Writing Two-Column Proofs",
              "zh": "书写两栏证明"
            },
            {
              "type": "p",
              "en": "A proof is a chain of statements, each backed by a reason (a given fact, a definition, or a previously proven theorem). We often organize it as two columns: statements on the left, reasons on the right, starting from what is given and ending with what we want to prove.",
              "zh": "证明是一连串陈述，每条都有一个理由支撑（已知条件、定义或已证定理）。我们常把它排成两栏：左边写陈述，右边写理由，从已知出发，止于所要证明的结论。"
            },
            {
              "type": "p",
              "en": "A key building block is the Vertical Angles Theorem: when two lines cross, the opposite (vertical) angles are congruent. Suppose lines cross forming angles $\\angle 1$ and $\\angle 3$ as a vertical pair, with $\\angle 2$ between them. Since $\\angle 1$ and $\\angle 2$ form a straight line, $\\angle 1 + \\angle 2 = 180^\\circ$; likewise $\\angle 2 + \\angle 3 = 180^\\circ$. Setting these equal gives $\\angle 1 = \\angle 3$.",
              "zh": "一个关键构件是对顶角定理：两直线相交时，相对的（对顶）角相等。设两线相交，$\\angle 1$ 与 $\\angle 3$ 为一对对顶角，$\\angle 2$ 位于其间。由于 $\\angle 1$ 与 $\\angle 2$ 构成一条直线，$\\angle 1 + \\angle 2 = 180^\\circ$；同理 $\\angle 2 + \\angle 3 = 180^\\circ$。令两式相等即得 $\\angle 1 = \\angle 3$。"
            },
            {
              "type": "math",
              "tex": "\\angle 1 + \\angle 2 = 180^\\circ = \\angle 2 + \\angle 3 \\ \\Rightarrow\\ \\angle 1 = \\angle 3"
            },
            {
              "type": "p",
              "en": "When a transversal crosses two parallel lines, more angle relationships appear: corresponding angles are congruent, alternate interior angles are congruent, and co-interior (same-side interior) angles are supplementary (sum to $180^\\circ$). These facts turn parallel-line diagrams into a rich source of angle proofs.",
              "zh": "当一条截线穿过两条平行线时，会出现更多角的关系：同位角相等、内错角相等、同旁内角互补（和为 $180^\\circ$）。这些事实使平行线图成为角的证明的丰富来源。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A short parallel-lines proof",
                "zh": "例题 2：一个简短的平行线证明"
              },
              "problem": {
                "en": "Lines $\\ell$ and $m$ are parallel, cut by transversal $t$. At line $\\ell$ the transversal forms $\\angle 1$; at line $m$ it forms $\\angle 2$, where $\\angle 1$ and $\\angle 2$ are alternate interior angles, and $\\angle 3$ is vertical to $\\angle 1$. Prove $\\angle 3 \\cong \\angle 2$.",
                "zh": "直线 $\\ell$ 与 $m$ 平行，被截线 $t$ 所截。截线在 $\\ell$ 处形成 $\\angle 1$，在 $m$ 处形成 $\\angle 2$，其中 $\\angle 1$ 与 $\\angle 2$ 是内错角，$\\angle 3$ 与 $\\angle 1$ 是对顶角。求证 $\\angle 3 \\cong \\angle 2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Statement 1: $\\ell \\parallel m$ cut by transversal $t$. Reason: Given.",
                  "zh": "陈述 1：$\\ell \\parallel m$，被截线 $t$ 所截。理由：已知。"
                },
                {
                  "type": "p",
                  "en": "Statement 2: $\\angle 1 \\cong \\angle 2$. Reason: Alternate interior angles of parallel lines are congruent.",
                  "zh": "陈述 2：$\\angle 1 \\cong \\angle 2$。理由：平行线的内错角相等。"
                },
                {
                  "type": "p",
                  "en": "Statement 3: $\\angle 3 \\cong \\angle 1$. Reason: Vertical angles are congruent.",
                  "zh": "陈述 3：$\\angle 3 \\cong \\angle 1$。理由：对顶角相等。"
                },
                {
                  "type": "p",
                  "en": "Statement 4: $\\angle 3 \\cong \\angle 2$. Reason: Transitive property of congruence (both equal $\\angle 1$). This completes the proof.",
                  "zh": "陈述 4：$\\angle 3 \\cong \\angle 2$。理由：全等的传递性（两者都等于 $\\angle 1$）。证毕。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Isosceles triangle base angles",
                "zh": "例题 3：等腰三角形的底角"
              },
              "problem": {
                "en": "Triangle $ABC$ is isosceles with $\\overline{AB} \\cong \\overline{AC}$. Prove the base angles are congruent: $\\angle B \\cong \\angle C$.",
                "zh": "三角形 $ABC$ 是等腰三角形，$\\overline{AB} \\cong \\overline{AC}$。求证底角相等：$\\angle B \\cong \\angle C$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Construct the angle bisector of $\\angle A$; let it meet $\\overline{BC}$ at point $D$. This creates two triangles, $\\triangle ABD$ and $\\triangle ACD$.",
                  "zh": "作 $\\angle A$ 的角平分线，设它与 $\\overline{BC}$ 交于点 $D$。这就产生两个三角形 $\\triangle ABD$ 与 $\\triangle ACD$。"
                },
                {
                  "type": "p",
                  "en": "Statement 1: $\\overline{AB} \\cong \\overline{AC}$ (Given). Statement 2: $\\angle BAD \\cong \\angle CAD$ (definition of angle bisector). Statement 3: $\\overline{AD} \\cong \\overline{AD}$ (reflexive property — the shared side).",
                  "zh": "陈述 1：$\\overline{AB} \\cong \\overline{AC}$（已知）。陈述 2：$\\angle BAD \\cong \\angle CAD$（角平分线定义）。陈述 3：$\\overline{AD} \\cong \\overline{AD}$（自反性——公共边）。"
                },
                {
                  "type": "p",
                  "en": "Statement 4: $\\triangle ABD \\cong \\triangle ACD$ by SAS (two sides and the included angle). Statement 5: therefore $\\angle B \\cong \\angle C$, because corresponding parts of congruent triangles are congruent (CPCTC). This proves the base angles of an isosceles triangle are congruent.",
                  "zh": "陈述 4：由 SAS（两边及夹角）得 $\\triangle ABD \\cong \\triangle ACD$。陈述 5：因此 $\\angle B \\cong \\angle C$，因为全等三角形的对应部分相等（CPCTC）。这就证明了等腰三角形的底角相等。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: the reflexive property ($\\overline{AD} \\cong \\overline{AD}$) is easy to forget but is often the third fact that unlocks SAS or ASA when two triangles share a side. Always look for a shared side or shared angle in the figure.",
              "zh": "考试提示：自反性（$\\overline{AD} \\cong \\overline{AD}$）容易被遗漏，但当两个三角形共用一条边时，它常常是打开 SAS 或 ASA 的第三个条件。要始终留意图中是否有公共边或公共角。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In a compass-and-straightedge construction, what is the straightedge allowed to do?",
                "zh": "在尺规作图中，直尺被允许做什么？"
              },
              "choices": [
                "Measure the exact length of a segment in centimeters",
                "Draw straight lines and rays, but not measure lengths",
                "Draw circles of a chosen radius",
                "Measure angles in degrees"
              ],
              "answer": 1,
              "explanation": {
                "en": "A straightedge draws straight lines and rays but has no marks, so it cannot measure. Measuring lengths or angles (choices about centimeters or degrees) is forbidden, and drawing circles is the compass's job.",
                "zh": "直尺画直线和射线，但没有刻度，所以不能测量。测量长度或角度（涉及厘米或度数的选项）是被禁止的，而画圆是圆规的工作。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two triangles have $\\angle A \\cong \\angle D$, $\\overline{AB} \\cong \\overline{DE}$, and $\\angle B \\cong \\angle E$. By which criterion are they congruent?",
                "zh": "两个三角形满足 $\\angle A \\cong \\angle D$、$\\overline{AB} \\cong \\overline{DE}$、$\\angle B \\cong \\angle E$。它们依据哪个判定全等？"
              },
              "choices": [
                "SSS",
                "SAS",
                "ASA",
                "SSA"
              ],
              "answer": 2,
              "explanation": {
                "en": "The congruent side $\\overline{AB}$ is between the two congruent angles $\\angle A$ and $\\angle B$, so this is Angle-Side-Angle (ASA). SAS would need the angle between two sides, and SSA is not a valid congruence criterion at all.",
                "zh": "相等的边 $\\overline{AB}$ 位于两个相等角 $\\angle A$ 与 $\\angle B$ 之间，所以这是角边角（ASA）。SAS 需要的是两边之间的角，而 SSA 根本不是有效的全等判定。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which set of corresponding parts does NOT guarantee that two triangles are congruent?",
                "zh": "哪一组对应部分不能保证两个三角形全等？"
              },
              "choices": [
                "Three pairs of sides (SSS)",
                "Three pairs of angles (AAA)",
                "Two angles and the included side (ASA)",
                "Two sides and the included angle (SAS)"
              ],
              "answer": 1,
              "explanation": {
                "en": "AAA guarantees only the same shape, not the same size — the triangles are similar but can be scaled differently, so they need not be congruent. SSS, ASA, and SAS are all valid congruence criteria.",
                "zh": "AAA 只保证形状相同，不保证大小相同——三角形相似但可以按不同比例缩放，故不一定全等。SSS、ASA、SAS 都是有效的全等判定。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two lines cross. One of a pair of vertical angles measures $47^\\circ$. What is the measure of the other (vertical) angle? Give the answer in degrees as a number.",
                "zh": "两直线相交。一对对顶角中的一个为 $47^\\circ$。另一个（对顶）角的度数是多少？请以度数（数字）作答。"
              },
              "answer": "47",
              "accept": [
                "47°",
                "47 degrees"
              ],
              "explanation": {
                "en": "Vertical angles are congruent, so the other angle also measures $47^\\circ$. A common error is to give $133^\\circ$, which would be the supplementary (adjacent) angle, not the vertical one.",
                "zh": "对顶角相等，所以另一个角也是 $47^\\circ$。常见错误是给出 $133^\\circ$，那是补角（邻角），而非对顶角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A transversal cuts two parallel lines. A co-interior (same-side interior) angle pair has one angle equal to $118^\\circ$. What is the measure of the other angle in the pair? Give the answer in degrees as a number.",
                "zh": "一条截线穿过两条平行线。一对同旁内角中，一个角为 $118^\\circ$。这对角中另一个角的度数是多少？请以度数（数字）作答。"
              },
              "answer": "62",
              "accept": [
                "62°",
                "62 degrees"
              ],
              "explanation": {
                "en": "Co-interior angles on parallel lines are supplementary, summing to $180^\\circ$: $180^\\circ - 118^\\circ = 62^\\circ$. Treating them as congruent (giving $118^\\circ$) confuses co-interior angles with alternate interior angles.",
                "zh": "平行线的同旁内角互补，和为 $180^\\circ$：$180^\\circ - 118^\\circ = 62^\\circ$。若把它们当作相等（给出 $118^\\circ$），则是把同旁内角与内错角弄混了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the isosceles-triangle base-angle proof, two triangles are formed by the angle bisector from the apex and share the bisector as a side. Which fact provides that shared side is congruent to itself?",
                "zh": "在等腰三角形底角的证明中，由顶点引出的角平分线形成两个三角形，并以该平分线为公共边。哪个事实说明这条公共边与自身相等？"
              },
              "choices": [
                "The reflexive property of congruence",
                "The transitive property of congruence",
                "The definition of a midpoint",
                "The Vertical Angles Theorem"
              ],
              "answer": 0,
              "explanation": {
                "en": "A segment is always congruent to itself; this is the reflexive property, which supplies the shared side $\\overline{AD} \\cong \\overline{AD}$ needed for SAS. The transitive property links two separate congruences, and vertical angles are not involved here.",
                "zh": "一条线段总与自身全等；这就是自反性，它提供了 SAS 所需的公共边 $\\overline{AD} \\cong \\overline{AD}$。传递性用于连接两个不同的全等，而此处与对顶角无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "When constructing the perpendicular bisector of a $6$ cm segment $\\overline{AB}$, the compass must be opened to more than half of $AB$. What is the smallest whole number of centimeters greater than half that guarantees the arcs will cross? Give a number of centimeters.",
                "zh": "在作 $6$ 厘米线段 $\\overline{AB}$ 的垂直平分线时，圆规必须张开到大于 $AB$ 的一半。大于一半且能保证两弧相交的最小整数厘米是多少？请以厘米数作答。"
              },
              "answer": "4",
              "accept": [
                "4cm",
                "4 cm",
                "4 centimeters"
              ],
              "explanation": {
                "en": "Half of $6$ cm is $3$ cm, and the opening must be strictly greater than $3$ cm for the arcs from $A$ and $B$ to intersect on both sides. The smallest whole number greater than $3$ is $4$. Using exactly $3$ cm would make the arcs just touch at the midpoint and fail to cross.",
                "zh": "$6$ 厘米的一半是 $3$ 厘米，张开必须严格大于 $3$ 厘米，来自 $A$ 与 $B$ 的两弧才能在两侧相交。大于 $3$ 的最小整数是 $4$。恰好用 $3$ 厘米会使两弧只在中点相触而无法相交。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: In quadrilateral $ABCD$, the diagonals meet at $M$. You are given $\\overline{AM} \\cong \\overline{CM}$ and $\\overline{BM} \\cong \\overline{DM}$. Which reasoning proves $\\triangle AMB \\cong \\triangle CMD$?",
                "zh": "荣誉挑战：在四边形 $ABCD$ 中，对角线相交于 $M$。已知 $\\overline{AM} \\cong \\overline{CM}$ 且 $\\overline{BM} \\cong \\overline{DM}$。哪种推理能证明 $\\triangle AMB \\cong \\triangle CMD$？"
              },
              "choices": [
                "AAA, because all three angles match",
                "SSA, using the two given sides and angle $\\angle A$",
                "SAS, because $\\angle AMB \\cong \\angle CMD$ are vertical angles included between the two pairs of congruent sides",
                "They cannot be proven congruent from this information"
              ],
              "answer": 2,
              "explanation": {
                "en": "The angles $\\angle AMB$ and $\\angle CMD$ are vertical angles at $M$, hence congruent, and each is the included angle between the given congruent side pairs $\\overline{AM} \\cong \\overline{CM}$ and $\\overline{BM} \\cong \\overline{DM}$. That is exactly SAS. AAA never proves congruence, and SSA is not a valid criterion.",
                "zh": "角 $\\angle AMB$ 与 $\\angle CMD$ 是 $M$ 处的对顶角，故相等，且各自都是已知相等边对 $\\overline{AM} \\cong \\overline{CM}$ 与 $\\overline{BM} \\cong \\overline{DM}$ 之间的夹角。这正是 SAS。AAA 永远不能证明全等，SSA 也不是有效判定。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "algebra-geometry-coordinates",
      "title": "Unit 8: Connecting Algebra and Geometry through Coordinates",
      "titleZh": "第八单元：用坐标连接代数与几何",
      "lessons": [
        {
          "id": "distance-midpoint-and-coordinate-figures",
          "title": "Distance, Midpoint, and Figures on the Coordinate Plane",
          "titleZh": "距离、中点与坐标平面上的图形",
          "content": [
            {
              "type": "h2",
              "en": "Geometry Meets Algebra on the Grid",
              "zh": "在坐标网格上，几何与代数相遇"
            },
            {
              "type": "p",
              "en": "In an integrated course, the coordinate plane is where algebra and geometry become one subject. If you know the coordinates of the corners of a figure, you can answer geometric questions — How long is this side? Is this a right angle? Where is the exact center? — using nothing but arithmetic. Think of laying out a rectangular garden bed at the Salt Lake Community Garden: stake the four corners onto a grid, and their coordinates tell you every length and area you need before you buy any fencing.",
              "zh": "在整合式课程中，坐标平面把代数和几何变成了同一门学科。只要知道图形各顶点的坐标，你就能仅凭算术回答几何问题——这条边有多长？这个角是直角吗？正中心在哪里？想象在盐湖城社区花园里规划一块矩形花圃：把四个角钉在网格上，它们的坐标就能在你买任何围栏之前告诉你所需的每一段长度和面积。"
            },
            {
              "type": "h3",
              "en": "The Distance Formula Comes from the Pythagorean Theorem",
              "zh": "距离公式来自勾股定理"
            },
            {
              "type": "p",
              "en": "Take two points, $A = (x_1, y_1)$ and $B = (x_2, y_2)$. Draw a horizontal segment from $A$ and a vertical segment from $B$ so they meet at a right angle at the corner point $(x_2, y_1)$. The horizontal leg has length $|x_2 - x_1|$ and the vertical leg has length $|y_2 - y_1|$. The segment $AB$ is the hypotenuse of this right triangle, so by the Pythagorean theorem $AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$.",
              "zh": "取两点 $A = (x_1, y_1)$ 与 $B = (x_2, y_2)$。从 $A$ 画一条水平线段、从 $B$ 画一条竖直线段，它们在角点 $(x_2, y_1)$ 处成直角相交。水平直角边长为 $|x_2 - x_1|$，竖直直角边长为 $|y_2 - y_1|$。线段 $AB$ 是这个直角三角形的斜边，因此由勾股定理得 $AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$。"
            },
            {
              "type": "math",
              "tex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"
            },
            {
              "type": "p",
              "en": "Because each difference is squared, it does not matter which point you call first — $(x_2 - x_1)^2 = (x_1 - x_2)^2$. The absolute-value bars disappear once you square. For example, the distance between $(1, 2)$ and $(4, 6)$ is $\\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
              "zh": "由于每个差都被平方，先取哪个点无所谓——$(x_2 - x_1)^2 = (x_1 - x_2)^2$。一旦平方，绝对值符号就消失了。例如，$(1, 2)$ 与 $(4, 6)$ 之间的距离为 $\\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$。"
            },
            {
              "type": "note",
              "en": "Common mistake: subtracting then forgetting to square, or squaring only one difference. Both differences must be squared, and you subtract $x$ with $x$ and $y$ with $y$ — never mix an $x$ with a $y$. Keep answers in exact radical form (like $\\sqrt{20} = 2\\sqrt{5}$) unless the problem asks for a decimal.",
              "zh": "常见错误：相减后忘记平方，或只平方一个差。两个差都必须平方，而且要 $x$ 与 $x$ 相减、$y$ 与 $y$ 相减——绝不能把 $x$ 和 $y$ 混在一起。除非题目要求小数，否则答案应保留精确的根号形式（如 $\\sqrt{20} = 2\\sqrt{5}$）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Distance in exact form",
                "zh": "例题 1：以精确形式求距离"
              },
              "problem": {
                "en": "Find the exact distance between $P = (-2, 3)$ and $Q = (4, -1)$.",
                "zh": "求 $P = (-2, 3)$ 与 $Q = (4, -1)$ 之间的精确距离。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Subtract coordinate by coordinate: $x_2 - x_1 = 4 - (-2) = 6$ and $y_2 - y_1 = -1 - 3 = -4$.",
                  "zh": "逐坐标相减：$x_2 - x_1 = 4 - (-2) = 6$，$y_2 - y_1 = -1 - 3 = -4$。"
                },
                {
                  "type": "math",
                  "tex": "d = \\sqrt{6^2 + (-4)^2} = \\sqrt{36 + 16} = \\sqrt{52}"
                },
                {
                  "type": "p",
                  "en": "Simplify the radical: $\\sqrt{52} = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}$. The exact distance is $2\\sqrt{13} \\approx 7.21$.",
                  "zh": "化简根号：$\\sqrt{52} = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}$。精确距离为 $2\\sqrt{13} \\approx 7.21$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Midpoint Formula",
              "zh": "中点公式"
            },
            {
              "type": "p",
              "en": "The midpoint of a segment is the point exactly halfway between its endpoints. Since \"halfway\" happens independently in the horizontal and vertical directions, you simply average the $x$-coordinates and average the $y$-coordinates. This is the coordinate version of finding the mean of two numbers.",
              "zh": "线段的中点是恰好位于两端点正中间的点。由于水平方向与竖直方向上的\"中间\"各自独立发生，你只需分别对 $x$ 坐标取平均、对 $y$ 坐标取平均。这正是求两数平均值在坐标上的版本。"
            },
            {
              "type": "math",
              "tex": "M = \\left( \\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2} \\right)"
            },
            {
              "type": "p",
              "en": "For $(1, 2)$ and $(4, 6)$, the midpoint is $\\left(\\frac{1+4}{2}, \\frac{2+6}{2}\\right) = (2.5, 4)$. Notice the operations differ from distance: midpoint uses addition and division by 2 (an average), while distance uses subtraction and squaring. Confusing the two is the single most common error in this unit.",
              "zh": "对于 $(1, 2)$ 与 $(4, 6)$，中点是 $\\left(\\frac{1+4}{2}, \\frac{2+6}{2}\\right) = (2.5, 4)$。注意其运算与距离不同：中点用加法并除以 2（求平均），而距离用减法并平方。把两者弄混是本单元最常见的错误。"
            },
            {
              "type": "note",
              "en": "Test tip: distance SUBTRACTS the coordinates; midpoint ADDS them. If a midpoint answer ever lands outside the box formed by the two endpoints, you subtracted by mistake. If a distance comes out negative, you forgot to square. A quick sanity check catches both.",
              "zh": "考试提示：距离是把坐标相减；中点是把坐标相加。如果算出的中点落在两端点所围成的矩形之外，说明你误用了减法。如果距离算出负数，说明你忘了平方。快速检验一下就能发现这两类错误。"
            },
            {
              "type": "h3",
              "en": "Finding an Endpoint from a Midpoint",
              "zh": "由中点反求端点"
            },
            {
              "type": "p",
              "en": "Sometimes you know one endpoint and the midpoint and must find the other endpoint. Do not average — instead, reverse the process. If $M$ is the midpoint of $A$ and $B$, then $B = (2x_M - x_A,\\ 2y_M - y_A)$. This says the midpoint is the same \"step\" from $A$ as it is to $B$, so double the midpoint and subtract the known endpoint.",
              "zh": "有时你已知一个端点和中点，需要求另一个端点。不要取平均——而要把过程反过来。如果 $M$ 是 $A$ 与 $B$ 的中点，那么 $B = (2x_M - x_A,\\ 2y_M - y_A)$。这表示从 $A$ 到中点的\"步长\"与从中点到 $B$ 的步长相同，所以把中点坐标翻倍再减去已知端点。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Recovering a missing endpoint",
                "zh": "例题 2：求缺失的端点"
              },
              "problem": {
                "en": "The midpoint of segment $AB$ is $M = (3, -1)$, and one endpoint is $A = (7, 2)$. Find endpoint $B$.",
                "zh": "线段 $AB$ 的中点是 $M = (3, -1)$，一个端点是 $A = (7, 2)$。求端点 $B$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Double each midpoint coordinate, then subtract the matching coordinate of $A$:",
                  "zh": "把中点的每个坐标翻倍，再减去 $A$ 对应的坐标："
                },
                {
                  "type": "math",
                  "tex": "x_B = 2(3) - 7 = -1, \\qquad y_B = 2(-1) - 2 = -4"
                },
                {
                  "type": "p",
                  "en": "So $B = (-1, -4)$. Check: the midpoint of $(7,2)$ and $(-1,-4)$ is $\\left(\\frac{7 + (-1)}{2}, \\frac{2 + (-4)}{2}\\right) = (3, -1)$. It matches.",
                  "zh": "所以 $B = (-1, -4)$。验证：$(7,2)$ 与 $(-1,-4)$ 的中点是 $\\left(\\frac{7 + (-1)}{2}, \\frac{2 + (-4)}{2}\\right) = (3, -1)$，与题设相符。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Classifying Triangles and Quadrilaterals from Coordinates",
              "zh": "用坐标判定三角形与四边形"
            },
            {
              "type": "p",
              "en": "To classify a figure, compute the lengths of its sides with the distance formula and compare them. A triangle with all three sides different is scalene; two equal sides make it isosceles; three equal sides make it equilateral. For a quadrilateral, comparing the lengths of opposite sides hints at a parallelogram, and equal diagonals or equal all-four sides push toward a rectangle or rhombus. (In the next lesson we add slope, which lets you confirm parallel and perpendicular sides.)",
              "zh": "要判定一个图形，用距离公式算出各边长再比较。三条边都不相等的三角形是不等边三角形；两条边相等是等腰三角形；三条边相等是等边三角形。对四边形而言，比较对边长度可提示是否为平行四边形，而对角线相等或四边全等则倾向于矩形或菱形。（下一课我们会加入斜率，用来确认边是否平行或垂直。）"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Scalene triangle: all three side lengths different.",
                  "zh": "不等边三角形：三条边长度都不同。"
                },
                {
                  "en": "Isosceles triangle: exactly two side lengths equal.",
                  "zh": "等腰三角形：恰有两条边长度相等。"
                },
                {
                  "en": "Parallelogram: both pairs of opposite sides have equal length.",
                  "zh": "平行四边形：两组对边长度分别相等。"
                },
                {
                  "en": "Rectangle: a parallelogram whose diagonals are also equal in length.",
                  "zh": "矩形：对角线也相等的平行四边形。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Classifying a triangle",
                "zh": "例题 3：判定三角形"
              },
              "problem": {
                "en": "A triangle has vertices $D = (0, 0)$, $E = (4, 0)$, and $F = (2, 5)$. Classify it by its sides.",
                "zh": "一个三角形的顶点为 $D = (0, 0)$、$E = (4, 0)$、$F = (2, 5)$。按边判定它的类型。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Find each side length. $DE$: both points are on the x-axis, so $DE = |4 - 0| = 4$.",
                  "zh": "求各边长。$DE$：两点都在 x 轴上，所以 $DE = |4 - 0| = 4$。"
                },
                {
                  "type": "math",
                  "tex": "DF = \\sqrt{(2-0)^2 + (5-0)^2} = \\sqrt{4 + 25} = \\sqrt{29}"
                },
                {
                  "type": "math",
                  "tex": "EF = \\sqrt{(2-4)^2 + (5-0)^2} = \\sqrt{4 + 25} = \\sqrt{29}"
                },
                {
                  "type": "p",
                  "en": "Since $DF = EF = \\sqrt{29}$ but $DE = 4$ is different, exactly two sides are equal. The triangle is isosceles.",
                  "zh": "由于 $DF = EF = \\sqrt{29}$ 而 $DE = 4$ 不同，恰有两条边相等。该三角形是等腰三角形。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Perimeter and Area of Polygons on the Plane",
              "zh": "坐标平面上多边形的周长与面积"
            },
            {
              "type": "p",
              "en": "The perimeter of any polygon is just the sum of its side lengths, each found with the distance formula. Area is easiest when a side is horizontal or vertical, because that side can serve as a base with the perpendicular height read directly off the grid. For a triangle, area $= \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$; for a rectangle, area $= \\text{length} \\cdot \\text{width}$. When no side is axis-aligned, you can enclose the figure in a rectangle and subtract the surrounding right triangles — a technique sometimes called the \"box method.\"",
              "zh": "任何多边形的周长就是各边长之和，每条边都用距离公式求出。当某条边是水平或竖直时，求面积最简单，因为这条边可作底，其垂直高度可直接从网格读出。三角形面积 $= \\frac{1}{2} \\cdot \\text{底} \\cdot \\text{高}$；矩形面积 $= \\text{长} \\cdot \\text{宽}$。当没有边与坐标轴平行时，可以把图形框进一个矩形，再减去周围的直角三角形——这种方法有时称为\"外框法\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Perimeter and area of a triangle",
                "zh": "例题 4：三角形的周长与面积"
              },
              "problem": {
                "en": "For triangle $D = (0, 0)$, $E = (4, 0)$, $F = (2, 5)$ from Example 3, find its perimeter and its area.",
                "zh": "对于例题 3 中的三角形 $D = (0, 0)$、$E = (4, 0)$、$F = (2, 5)$，求它的周长与面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Perimeter is the sum of the three sides: $4 + \\sqrt{29} + \\sqrt{29} = 4 + 2\\sqrt{29} \\approx 14.77$.",
                  "zh": "周长是三边之和：$4 + \\sqrt{29} + \\sqrt{29} = 4 + 2\\sqrt{29} \\approx 14.77$。"
                },
                {
                  "type": "p",
                  "en": "For area, use the horizontal side $DE$ as the base: its length is $4$. The height is the vertical distance from $F=(2,5)$ down to the x-axis, which is $5$.",
                  "zh": "求面积时，用水平边 $DE$ 作底：底长为 $4$。高是从 $F=(2,5)$ 到 x 轴的竖直距离，即 $5$。"
                },
                {
                  "type": "math",
                  "tex": "A = \\tfrac{1}{2} \\cdot 4 \\cdot 5 = 10"
                },
                {
                  "type": "p",
                  "en": "The perimeter is $4 + 2\\sqrt{29}$ units and the area is $10$ square units.",
                  "zh": "周长为 $4 + 2\\sqrt{29}$ 单位，面积为 $10$ 平方单位。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake with area: using a slanted side as the \"base\" and reading a coordinate difference as the \"height.\" The height must be perpendicular to the base. Only when the base is horizontal (or vertical) can you read the height straight off the grid; otherwise use the box method.",
              "zh": "求面积的常见错误：把斜边当作\"底\"，又把某个坐标差当作\"高\"。高必须垂直于底。只有当底是水平（或竖直）时，才能直接从网格读出高；否则请用外框法。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the distance between $(3, -2)$ and $(3, 6)$?",
                "zh": "$(3, -2)$ 与 $(3, 6)$ 之间的距离是多少？"
              },
              "choices": [
                "$4$",
                "$3$",
                "$10$",
                "$8$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The x-coordinates are equal, so the segment is vertical and its length is $|6 - (-2)| = 8$. A student who averages instead of subtracts might get $4$; averaging finds the midpoint, not the distance.",
                "zh": "x 坐标相等，所以线段是竖直的，长度为 $|6 - (-2)| = 8$。若误用平均而非相减会得到 $4$；取平均求的是中点，不是距离。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the midpoint of the segment joining $(-4, 5)$ and $(2, -3)$. Give your answer as a coordinate pair like $(x, y)$.",
                "zh": "求连接 $(-4, 5)$ 与 $(2, -3)$ 的线段的中点。请以坐标对 $(x, y)$ 的形式作答。"
              },
              "answer": "(-1, 1)",
              "accept": [
                "(-1,1)",
                "-1, 1",
                "-1,1"
              ],
              "explanation": {
                "en": "Average each coordinate: $x = \\frac{-4+2}{2} = -1$ and $y = \\frac{5 + (-3)}{2} = 1$. The midpoint is $(-1, 1)$.",
                "zh": "对每个坐标取平均：$x = \\frac{-4+2}{2} = -1$，$y = \\frac{5 + (-3)}{2} = 1$。中点为 $(-1, 1)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The distance between two points is $\\sqrt{45}$. What is this in simplest radical form?",
                "zh": "两点间距离为 $\\sqrt{45}$。化为最简根式是多少？"
              },
              "choices": [
                "$9\\sqrt{5}$",
                "$5\\sqrt{3}$",
                "$3\\sqrt{5}$",
                "$\\sqrt{45}$ cannot be simplified"
              ],
              "answer": 2,
              "explanation": {
                "en": "Factor out the largest perfect square: $45 = 9 \\cdot 5$, so $\\sqrt{45} = \\sqrt{9}\\sqrt{5} = 3\\sqrt{5}$. The distractor $9\\sqrt{5}$ wrongly moves $9$ outside without taking its square root.",
                "zh": "提出最大的完全平方因数：$45 = 9 \\cdot 5$，所以 $\\sqrt{45} = \\sqrt{9}\\sqrt{5} = 3\\sqrt{5}$。干扰项 $9\\sqrt{5}$ 错在把 $9$ 直接移出而没有开平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Triangle with vertices $(1, 1)$, $(5, 1)$, $(1, 4)$ is best classified by its sides as:",
                "zh": "顶点为 $(1, 1)$、$(5, 1)$、$(1, 4)$ 的三角形，按边最恰当的分类是："
              },
              "choices": [
                "Equilateral",
                "Isosceles",
                "Scalene",
                "Cannot be determined"
              ],
              "answer": 2,
              "explanation": {
                "en": "The sides are $4$ (from $(1,1)$ to $(5,1)$), $3$ (from $(1,1)$ to $(1,4)$), and $\\sqrt{4^2+3^2}=5$ (the hypotenuse). All three lengths differ, so it is scalene. It is also a right triangle, but by SIDE lengths the classification is scalene.",
                "zh": "各边为 $4$（$(1,1)$ 到 $(5,1)$）、$3$（$(1,1)$ 到 $(1,4)$）、$\\sqrt{4^2+3^2}=5$（斜边）。三条长度都不同，故为不等边三角形。它同时也是直角三角形，但按边长分类是不等边。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The midpoint of $AB$ is $(2, 5)$ and one endpoint is $A = (-1, 3)$. Find endpoint $B$ as a coordinate pair $(x, y)$.",
                "zh": "$AB$ 的中点是 $(2, 5)$，一个端点是 $A = (-1, 3)$。求端点 $B$，以坐标对 $(x, y)$ 作答。"
              },
              "answer": "(5, 7)",
              "accept": [
                "(5,7)",
                "5, 7",
                "5,7"
              ],
              "explanation": {
                "en": "Double the midpoint and subtract $A$: $x_B = 2(2) - (-1) = 5$, $y_B = 2(5) - 3 = 7$. So $B = (5, 7)$. Averaging here would be wrong — you already know the average (the midpoint) and must undo it.",
                "zh": "把中点翻倍再减去 $A$：$x_B = 2(2) - (-1) = 5$，$y_B = 2(5) - 3 = 7$。所以 $B = (5, 7)$。这里再取平均是错的——你已知平均值（中点），要做的是逆运算。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A quadrilateral has vertices $A=(0,0)$, $B=(4,0)$, $C=(6,3)$, $D=(2,3)$. Using side lengths, which is true?",
                "zh": "四边形顶点为 $A=(0,0)$、$B=(4,0)$、$C=(6,3)$、$D=(2,3)$。用边长判断，下列哪项正确？"
              },
              "choices": [
                "Opposite sides $AB=DC=4$ and $BC=AD=\\sqrt{13}$, consistent with a parallelogram",
                "All four sides are equal, so it is a rhombus",
                "The diagonals are equal, so it is a rectangle",
                "No two sides are equal, so it is scalene"
              ],
              "answer": 0,
              "explanation": {
                "en": "$AB = 4$ and $DC = |6-2| = 4$; $BC = \\sqrt{(6-4)^2+3^2} = \\sqrt{13}$ and $AD = \\sqrt{2^2+3^2} = \\sqrt{13}$. Both pairs of opposite sides are equal, consistent with a parallelogram. It is not a rhombus since $4 \\ne \\sqrt{13}$.",
                "zh": "$AB = 4$，$DC = |6-2| = 4$；$BC = \\sqrt{(6-4)^2+3^2} = \\sqrt{13}$，$AD = \\sqrt{2^2+3^2} = \\sqrt{13}$。两组对边分别相等，符合平行四边形。因为 $4 \\ne \\sqrt{13}$，所以不是菱形。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rectangular soccer field is drawn on a coordinate map with corners at $(0,0)$, $(120,0)$, $(120,75)$, and $(0,75)$ (units in meters). A trainer jogs diagonally from one corner to the opposite corner. How far does she jog, in meters? Round to the nearest whole meter.",
                "zh": "一个矩形足球场画在坐标地图上，四角为 $(0,0)$、$(120,0)$、$(120,75)$、$(0,75)$（单位：米）。一位教练从一角沿对角线慢跑到对角。她跑了多少米？四舍五入到最接近的整数米。"
              },
              "answer": "141",
              "accept": [
                "141 m",
                "141 meters",
                "141.0"
              ],
              "explanation": {
                "en": "The diagonal length is $\\sqrt{120^2 + 75^2} = \\sqrt{14400 + 5625} = \\sqrt{20025} \\approx 141.5$, which rounds to $141$ meters. This is the distance formula applied to opposite corners.",
                "zh": "对角线长为 $\\sqrt{120^2 + 75^2} = \\sqrt{14400 + 5625} = \\sqrt{20025} \\approx 141.5$，四舍五入为 $141$ 米。这就是对对角顶点使用距离公式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Find the area of the quadrilateral with vertices $(0,0)$, $(5,0)$, $(6,4)$, $(1,4)$ (a parallelogram).",
                "zh": "荣誉挑战：求顶点为 $(0,0)$、$(5,0)$、$(6,4)$、$(1,4)$ 的四边形（一个平行四边形）的面积。"
              },
              "choices": [
                "$16$ square units",
                "$20$ square units",
                "$24$ square units",
                "$30$ square units"
              ],
              "answer": 1,
              "explanation": {
                "en": "The bottom side from $(0,0)$ to $(5,0)$ is a horizontal base of length $5$. The height is the vertical distance to the top side (at $y = 4$), which is $4$. Area of a parallelogram $= \\text{base} \\times \\text{height} = 5 \\times 4 = 20$. The slanted sides are longer than $4$, so multiplying side lengths would overcount — height must be perpendicular to the base.",
                "zh": "从 $(0,0)$ 到 $(5,0)$ 的底边是长为 $5$ 的水平底。高是到顶边（$y = 4$）的竖直距离，即 $4$。平行四边形面积 $= \\text{底} \\times \\text{高} = 5 \\times 4 = 20$。斜边比 $4$ 长，用边长相乘会算多——高必须垂直于底。"
              }
            }
          ]
        },
        {
          "id": "slope-criteria-and-coordinate-proofs",
          "title": "Slope Criteria and Coordinate Proofs",
          "titleZh": "斜率判定与坐标证明",
          "content": [
            {
              "type": "h2",
              "en": "Proving Geometry with Numbers",
              "zh": "用数字证明几何"
            },
            {
              "type": "p",
              "en": "Distance tells you how long a side is; slope tells you which direction it points. Together, slope and distance let you PROVE geometric facts instead of just eyeballing a picture — that two roads are exactly parallel, that a support beam meets a wall at a true right angle, that a plot of land is genuinely a rectangle and not just close to one. This is the heart of coordinate proof: replacing \"it looks like...\" with \"it must be, because the numbers say so.\"",
              "zh": "距离告诉你一条边有多长；斜率告诉你它指向哪个方向。把斜率和距离结合起来，你就能\"证明\"几何事实，而不只是凭眼睛观察一张图——证明两条路恰好平行、一根支撑梁与墙成真正的直角、一块土地确实是矩形而不只是近似。这正是坐标证明的核心：用\"数字如此，故必然如此\"取代\"看起来像……\"。"
            },
            {
              "type": "h3",
              "en": "Recalling Slope",
              "zh": "回顾斜率"
            },
            {
              "type": "p",
              "en": "The slope between $(x_1, y_1)$ and $(x_2, y_2)$ measures rise over run: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$. A horizontal line has slope $0$; a vertical line has an undefined slope (its run is $0$, and dividing by zero is not allowed).",
              "zh": "$(x_1, y_1)$ 与 $(x_2, y_2)$ 之间的斜率衡量纵向变化与横向变化之比：$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$。水平线斜率为 $0$；竖直线斜率无定义（其横向变化为 $0$，而不能除以零）。"
            },
            {
              "type": "h3",
              "en": "Slope Criterion for Parallel Lines",
              "zh": "平行线的斜率判定"
            },
            {
              "type": "p",
              "en": "Two non-vertical lines are parallel if and only if they have equal slopes. Parallel lines rise and run at the same rate, so they never meet. For example, the line through $(0,1)$ and $(2,5)$ has slope $\\frac{5-1}{2-0} = 2$, and the line through $(1,-3)$ and $(3,1)$ also has slope $\\frac{1-(-3)}{3-1} = 2$; the two lines are parallel.",
              "zh": "两条非竖直直线平行，当且仅当它们的斜率相等。平行线以相同的速率上升和横移，因此永不相交。例如，过 $(0,1)$ 与 $(2,5)$ 的直线斜率为 $\\frac{5-1}{2-0} = 2$，过 $(1,-3)$ 与 $(3,1)$ 的直线斜率也是 $\\frac{1-(-3)}{3-1} = 2$；这两条线平行。"
            },
            {
              "type": "math",
              "tex": "l_1 \\parallel l_2 \\iff m_1 = m_2"
            },
            {
              "type": "h3",
              "en": "Slope Criterion for Perpendicular Lines",
              "zh": "垂直线的斜率判定"
            },
            {
              "type": "p",
              "en": "Two lines are perpendicular if and only if their slopes are negative reciprocals — that is, their product is $-1$. To get the negative reciprocal of a slope, flip it and change its sign: the negative reciprocal of $\\frac{2}{3}$ is $-\\frac{3}{2}$, and indeed $\\frac{2}{3} \\cdot \\left(-\\frac{3}{2}\\right) = -1$.",
              "zh": "两条直线垂直，当且仅当它们的斜率互为负倒数——即它们的乘积为 $-1$。求一个斜率的负倒数，就把它倒过来并变号：$\\frac{2}{3}$ 的负倒数是 $-\\frac{3}{2}$，确实 $\\frac{2}{3} \\cdot \\left(-\\frac{3}{2}\\right) = -1$。"
            },
            {
              "type": "math",
              "tex": "l_1 \\perp l_2 \\iff m_1 \\cdot m_2 = -1"
            },
            {
              "type": "note",
              "en": "Common mistake: negating without flipping (thinking the perpendicular slope to $\\frac{2}{3}$ is $-\\frac{2}{3}$) or flipping without negating (thinking it is $\\frac{3}{2}$). You must do BOTH. Also remember the special pair: a horizontal line (slope $0$) is perpendicular to a vertical line (undefined slope) — this case is not captured by the product rule and must be checked separately.",
              "zh": "常见错误：只变号不倒数（以为 $\\frac{2}{3}$ 的垂直斜率是 $-\\frac{2}{3}$），或只倒数不变号（以为是 $\\frac{3}{2}$）。你必须两步都做。还要记住特殊情形：水平线（斜率 $0$）与竖直线（斜率无定义）垂直——这种情况乘积规则无法涵盖，必须单独判断。"
            },
            {
              "type": "h3",
              "en": "Writing Equations of Parallel and Perpendicular Lines",
              "zh": "写出平行线与垂直线的方程"
            },
            {
              "type": "p",
              "en": "To write a line through a given point with a given slope, point-slope form $y - y_1 = m(x - x_1)$ is fastest. If you need a line parallel to a given line, copy its slope; if perpendicular, use the negative reciprocal. Then plug in the point.",
              "zh": "要写出过某点且斜率给定的直线，点斜式 $y - y_1 = m(x - x_1)$ 最快捷。若要与已知直线平行，就照抄它的斜率；若要垂直，就用负倒数。然后代入该点。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Parallel and perpendicular through a point",
                "zh": "例题 1：过一点作平行线与垂直线"
              },
              "problem": {
                "en": "The line $L$ is $y = \\frac{3}{4}x - 2$. Write the equation of (a) the line parallel to $L$ through $(8, 1)$, and (b) the line perpendicular to $L$ through $(8, 1)$.",
                "zh": "直线 $L$ 为 $y = \\frac{3}{4}x - 2$。写出 (a) 过 $(8, 1)$ 且与 $L$ 平行的直线方程，(b) 过 $(8, 1)$ 且与 $L$ 垂直的直线方程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The slope of $L$ is $\\frac{3}{4}$. (a) A parallel line has the same slope $\\frac{3}{4}$. Using point-slope: $y - 1 = \\frac{3}{4}(x - 8)$, which simplifies to $y = \\frac{3}{4}x - 6 + 1 = \\frac{3}{4}x - 5$.",
                  "zh": "$L$ 的斜率是 $\\frac{3}{4}$。(a) 平行线斜率相同，为 $\\frac{3}{4}$。用点斜式：$y - 1 = \\frac{3}{4}(x - 8)$，化简得 $y = \\frac{3}{4}x - 6 + 1 = \\frac{3}{4}x - 5$。"
                },
                {
                  "type": "p",
                  "en": "(b) A perpendicular line has slope $-\\frac{4}{3}$ (flip and negate). Using point-slope: $y - 1 = -\\frac{4}{3}(x - 8)$, which gives $y = -\\frac{4}{3}x + \\frac{32}{3} + 1 = -\\frac{4}{3}x + \\frac{35}{3}$.",
                  "zh": "(b) 垂直线斜率为 $-\\frac{4}{3}$（倒数并变号）。用点斜式：$y - 1 = -\\frac{4}{3}(x - 8)$，得 $y = -\\frac{4}{3}x + \\frac{32}{3} + 1 = -\\frac{4}{3}x + \\frac{35}{3}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Coordinate Proofs: Classifying a Figure",
              "zh": "坐标证明：判定图形类型"
            },
            {
              "type": "p",
              "en": "A coordinate proof states a claim about a figure and backs it up with slope and distance calculations. A reliable strategy:",
              "zh": "坐标证明先提出关于图形的论断，再用斜率与距离的计算来支撑它。一个可靠的策略是："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "To show sides are parallel, compare their slopes (equal slopes = parallel).",
                  "zh": "要证明边平行，比较它们的斜率（斜率相等 = 平行）。"
                },
                {
                  "en": "To show an angle is right, show the two sides meeting there have slopes whose product is $-1$.",
                  "zh": "要证明某角是直角，说明在此相交的两条边的斜率乘积为 $-1$。"
                },
                {
                  "en": "To show sides are congruent, compare their lengths with the distance formula.",
                  "zh": "要证明边全等，用距离公式比较它们的长度。"
                },
                {
                  "en": "Parallelogram: both pairs of opposite sides parallel. Rectangle: a parallelogram with one right angle. Rhombus: a parallelogram with two adjacent sides congruent.",
                  "zh": "平行四边形：两组对边分别平行。矩形：有一个直角的平行四边形。菱形：有两条相邻边全等的平行四边形。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Proving a quadrilateral is a rectangle",
                "zh": "例题 2：证明四边形是矩形"
              },
              "problem": {
                "en": "Prove that $A=(0,0)$, $B=(4,2)$, $C=(3,4)$, $D=(-1,2)$ is a rectangle.",
                "zh": "证明 $A=(0,0)$、$B=(4,2)$、$C=(3,4)$、$D=(-1,2)$ 是矩形。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1 — show it is a parallelogram by comparing opposite-side slopes. Slope of $AB = \\frac{2-0}{4-0} = \\frac{1}{2}$; slope of $DC = \\frac{4-2}{3-(-1)} = \\frac{2}{4} = \\frac{1}{2}$. Equal, so $AB \\parallel DC$.",
                  "zh": "第 1 步——通过比较对边斜率证明它是平行四边形。$AB$ 斜率 $= \\frac{2-0}{4-0} = \\frac{1}{2}$；$DC$ 斜率 $= \\frac{4-2}{3-(-1)} = \\frac{2}{4} = \\frac{1}{2}$。相等，故 $AB \\parallel DC$。"
                },
                {
                  "type": "p",
                  "en": "Slope of $AD = \\frac{2-0}{-1-0} = -2$; slope of $BC = \\frac{4-2}{3-4} = \\frac{2}{-1} = -2$. Equal, so $AD \\parallel BC$. Both pairs of opposite sides are parallel, so $ABCD$ is a parallelogram.",
                  "zh": "$AD$ 斜率 $= \\frac{2-0}{-1-0} = -2$；$BC$ 斜率 $= \\frac{4-2}{3-4} = \\frac{2}{-1} = -2$。相等，故 $AD \\parallel BC$。两组对边都平行，所以 $ABCD$ 是平行四边形。"
                },
                {
                  "type": "p",
                  "en": "Step 2 — show one angle is right. At vertex $A$, sides $AB$ (slope $\\frac{1}{2}$) and $AD$ (slope $-2$) meet. Their product is $\\frac{1}{2} \\cdot (-2) = -1$, so $AB \\perp AD$ and angle $A$ is a right angle.",
                  "zh": "第 2 步——证明有一个直角。在顶点 $A$ 处，边 $AB$（斜率 $\\frac{1}{2}$）与 $AD$（斜率 $-2$）相交。乘积为 $\\frac{1}{2} \\cdot (-2) = -1$，故 $AB \\perp AD$，$A$ 角为直角。"
                },
                {
                  "type": "p",
                  "en": "A parallelogram with a right angle is a rectangle. Therefore $ABCD$ is a rectangle. (Q.E.D.)",
                  "zh": "有一个直角的平行四边形是矩形。因此 $ABCD$ 是矩形。（证毕）"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: to prove a RECTANGLE you must show BOTH that it is a parallelogram AND that one angle is right — parallel sides alone are not enough, and a single right angle alone does not prove the opposite sides are parallel. To prove a SQUARE you additionally show two adjacent sides are congruent using distance.",
              "zh": "考试提示：要证明\"矩形\"，必须同时说明它是平行四边形\"且\"有一个直角——仅有平行边不够，仅有一个直角也不能证明对边平行。要证明\"正方形\"，还要用距离证明两条相邻边全等。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Proving a right triangle",
                "zh": "例题 3：证明直角三角形"
              },
              "problem": {
                "en": "Show that the triangle with vertices $P=(-2,1)$, $Q=(1,-1)$, $R=(3,2)$ is a right triangle.",
                "zh": "证明顶点为 $P=(-2,1)$、$Q=(1,-1)$、$R=(3,2)$ 的三角形是直角三角形。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Find the slope of each side. $PQ = \\frac{-1-1}{1-(-2)} = \\frac{-2}{3}$. $QR = \\frac{2-(-1)}{3-1} = \\frac{3}{2}$.",
                  "zh": "求各边斜率。$PQ = \\frac{-1-1}{1-(-2)} = \\frac{-2}{3}$。$QR = \\frac{2-(-1)}{3-1} = \\frac{3}{2}$。"
                },
                {
                  "type": "p",
                  "en": "The product $\\frac{-2}{3} \\cdot \\frac{3}{2} = -1$, so $PQ \\perp QR$. The angle at $Q$ is a right angle, which makes triangle $PQR$ a right triangle.",
                  "zh": "乘积 $\\frac{-2}{3} \\cdot \\frac{3}{2} = -1$，故 $PQ \\perp QR$。$Q$ 处的角是直角，因此三角形 $PQR$ 是直角三角形。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Honors: Partitioning a Directed Segment in a Given Ratio",
              "zh": "荣誉内容：按给定比例分割有向线段"
            },
            {
              "type": "p",
              "en": "A directed segment from $A$ to $B$ has a direction — we start at $A$ and travel toward $B$. To find the point $P$ that partitions $\\overline{AB}$ in the ratio $m : n$ (so that $AP : PB = m : n$), travel the fraction $\\frac{m}{m+n}$ of the way from $A$ to $B$. Add that fraction of the total change to the starting point:",
              "zh": "从 $A$ 到 $B$ 的有向线段带有方向——我们从 $A$ 出发朝 $B$ 前进。要找到把 $\\overline{AB}$ 按比例 $m : n$ 分割的点 $P$（使 $AP : PB = m : n$），需从 $A$ 向 $B$ 前进全程的 $\\frac{m}{m+n}$。把这一比例的总变化量加到起点上："
            },
            {
              "type": "math",
              "tex": "P = \\left( x_A + \\tfrac{m}{m+n}(x_B - x_A),\\ \\ y_A + \\tfrac{m}{m+n}(y_B - y_A) \\right)"
            },
            {
              "type": "p",
              "en": "When the ratio is $1:1$, the fraction $\\frac{1}{2}$ makes this collapse into the midpoint formula — the midpoint is just the special case that partitions a segment evenly.",
              "zh": "当比例为 $1:1$ 时，分数 $\\frac{1}{2}$ 使此式退化为中点公式——中点正是把线段均匀分割的特殊情形。"
            },
            {
              "type": "note",
              "en": "Common mistake: using $\\frac{m}{n}$ instead of $\\frac{m}{m+n}$ as the fraction of the way. The ratio $m:n$ splits the segment into $m+n$ equal parts, and $P$ is $m$ of those parts from $A$ — so the fraction is $\\frac{m}{m+n}$. Also, direction matters: partitioning from $A$ to $B$ in ratio $2:3$ is NOT the same point as from $B$ to $A$ in ratio $2:3$.",
              "zh": "常见错误：把前进比例误用成 $\\frac{m}{n}$ 而非 $\\frac{m}{m+n}$。比例 $m:n$ 把线段分成 $m+n$ 等份，$P$ 距 $A$ 有其中 $m$ 份——所以比例是 $\\frac{m}{m+n}$。此外方向很重要：从 $A$ 到 $B$ 按 $2:3$ 分割，与从 $B$ 到 $A$ 按 $2:3$ 分割，不是同一个点。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Partitioning in ratio 2 : 3",
                "zh": "例题 4：按 2 : 3 分割"
              },
              "problem": {
                "en": "Find the point $P$ that partitions the directed segment from $A=(-3, 2)$ to $B=(7, -3)$ in the ratio $2 : 3$.",
                "zh": "求把从 $A=(-3, 2)$ 到 $B=(7, -3)$ 的有向线段按比例 $2 : 3$ 分割的点 $P$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The fraction of the way is $\\frac{m}{m+n} = \\frac{2}{2+3} = \\frac{2}{5}$. The total change from $A$ to $B$ is $(x_B - x_A, y_B - y_A) = (7-(-3),\\ -3-2) = (10, -5)$.",
                  "zh": "前进比例为 $\\frac{m}{m+n} = \\frac{2}{2+3} = \\frac{2}{5}$。从 $A$ 到 $B$ 的总变化量为 $(x_B - x_A, y_B - y_A) = (7-(-3),\\ -3-2) = (10, -5)$。"
                },
                {
                  "type": "math",
                  "tex": "P = \\left( -3 + \\tfrac{2}{5}(10),\\ \\ 2 + \\tfrac{2}{5}(-5) \\right)"
                },
                {
                  "type": "p",
                  "en": "Compute each coordinate: $x_P = -3 + 4 = 1$ and $y_P = 2 + (-2) = 0$. So $P = (1, 0)$.",
                  "zh": "计算每个坐标：$x_P = -3 + 4 = 1$，$y_P = 2 + (-2) = 0$。所以 $P = (1, 0)$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the slope of a line perpendicular to a line with slope $-\\frac{5}{2}$?",
                "zh": "与斜率为 $-\\frac{5}{2}$ 的直线垂直的直线，其斜率是多少？"
              },
              "choices": [
                "$-\\frac{2}{5}$",
                "$\\frac{2}{5}$",
                "$\\frac{5}{2}$",
                "$-\\frac{5}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The perpendicular slope is the negative reciprocal: flip $-\\frac{5}{2}$ to $-\\frac{2}{5}$, then negate to get $\\frac{2}{5}$. Check: $-\\frac{5}{2} \\cdot \\frac{2}{5} = -1$. The distractor $-\\frac{2}{5}$ flipped but forgot to change the sign.",
                "zh": "垂直斜率是负倒数：把 $-\\frac{5}{2}$ 倒过来得 $-\\frac{2}{5}$，再变号得 $\\frac{2}{5}$。验证：$-\\frac{5}{2} \\cdot \\frac{2}{5} = -1$。干扰项 $-\\frac{2}{5}$ 倒了数却忘了变号。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which line is parallel to $y = -3x + 7$?",
                "zh": "下列哪条直线与 $y = -3x + 7$ 平行？"
              },
              "choices": [
                "$y = \\frac{1}{3}x + 7$",
                "$y = 3x - 2$",
                "$y = -3x - 4$",
                "$y = -\\frac{1}{3}x + 1$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Parallel lines share the same slope, $-3$. Only $y = -3x - 4$ has slope $-3$ (a different y-intercept keeps it a distinct, parallel line). $y = \\frac{1}{3}x+7$ shares the intercept but not the slope, and $y=-\\frac{1}{3}x+1$ is the perpendicular slope, not parallel.",
                "zh": "平行线斜率相同，为 $-3$。只有 $y = -3x - 4$ 斜率为 $-3$（不同的 y 截距使它是另一条平行的直线）。$y = \\frac{1}{3}x+7$ 截距相同但斜率不同，而 $y=-\\frac{1}{3}x+1$ 是垂直斜率而非平行。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write the equation, in slope-intercept form $y = mx + b$, of the line parallel to $y = 2x - 5$ that passes through $(3, 4)$.",
                "zh": "写出与 $y = 2x - 5$ 平行且过 $(3, 4)$ 的直线方程，用斜截式 $y = mx + b$ 表示。"
              },
              "answer": "y = 2x - 2",
              "accept": [
                "y=2x-2",
                "y = 2x-2",
                "2x-2",
                "y=2x - 2"
              ],
              "explanation": {
                "en": "Parallel means slope $2$. Point-slope: $y - 4 = 2(x - 3)$, so $y = 2x - 6 + 4 = 2x - 2$.",
                "zh": "平行意味着斜率为 $2$。点斜式：$y - 4 = 2(x - 3)$，所以 $y = 2x - 6 + 4 = 2x - 2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To prove quadrilateral $ABCD$ is a parallelogram using slopes, what must you show?",
                "zh": "要用斜率证明四边形 $ABCD$ 是平行四边形，必须说明什么？"
              },
              "choices": [
                "Both pairs of opposite sides have equal slopes (are parallel)",
                "All four sides have the same slope",
                "The slopes of two adjacent sides multiply to $-1$",
                "The diagonals have equal slopes"
              ],
              "answer": 0,
              "explanation": {
                "en": "A parallelogram is defined by both pairs of opposite sides being parallel, i.e. slope of $AB$ = slope of $DC$ and slope of $BC$ = slope of $AD$. All four sides having one slope would collapse the figure to a line; a $-1$ product would show a right angle, not parallelism.",
                "zh": "平行四边形的定义是两组对边分别平行，即 $AB$ 斜率 $=$ $DC$ 斜率，且 $BC$ 斜率 $=$ $AD$ 斜率。四边斜率都相同会使图形退化成一条直线；乘积为 $-1$ 说明的是直角，而非平行。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A triangle has vertices $(0,0)$, $(4,2)$, $(2,-4)$. The slopes of the two sides from the origin are $\\frac{1}{2}$ and $-2$. What can you conclude?",
                "zh": "一个三角形顶点为 $(0,0)$、$(4,2)$、$(2,-4)$。从原点出发的两条边斜率为 $\\frac{1}{2}$ 与 $-2$。能得出什么结论？"
              },
              "choices": [
                "The two sides are parallel",
                "The triangle is equilateral",
                "The angle at the origin is a right angle, so it is a right triangle",
                "Nothing can be concluded from slopes"
              ],
              "answer": 2,
              "explanation": {
                "en": "The product of the slopes is $\\frac{1}{2} \\cdot (-2) = -1$, so those two sides are perpendicular. The angle where they meet (at the origin) is a right angle, making the triangle a right triangle. Equal slopes would mean parallel, but $\\frac{1}{2} \\ne -2$.",
                "zh": "两斜率乘积为 $\\frac{1}{2} \\cdot (-2) = -1$，故这两条边垂直。它们相交处（原点）的角是直角，使三角形成为直角三角形。斜率相等才意味着平行，但 $\\frac{1}{2} \\ne -2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A drone flies a straight path modeled by $y = \\frac{1}{2}x + 3$. A second drone must fly perpendicular to this path and pass through the base station at $(4, 1)$. Write the second drone's path in slope-intercept form $y = mx + b$.",
                "zh": "一架无人机沿直线路径 $y = \\frac{1}{2}x + 3$ 飞行。第二架无人机须与该路径垂直，并经过位于 $(4, 1)$ 的基站。用斜截式 $y = mx + b$ 写出第二架无人机的路径。"
              },
              "answer": "y = -2x + 9",
              "accept": [
                "y=-2x+9",
                "y = -2x+9",
                "-2x+9",
                "y=-2x + 9"
              ],
              "explanation": {
                "en": "The perpendicular slope to $\\frac{1}{2}$ is $-2$ (flip and negate). Point-slope through $(4,1)$: $y - 1 = -2(x - 4)$, so $y = -2x + 8 + 1 = -2x + 9$.",
                "zh": "$\\frac{1}{2}$ 的垂直斜率是 $-2$（倒数并变号）。过 $(4,1)$ 的点斜式：$y - 1 = -2(x - 4)$，所以 $y = -2x + 8 + 1 = -2x + 9$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the point that partitions the directed segment from $A=(2, 1)$ to $B=(8, 10)$ in the ratio $1 : 2$. Give your answer as a coordinate pair $(x, y)$.",
                "zh": "求把从 $A=(2, 1)$ 到 $B=(8, 10)$ 的有向线段按比例 $1 : 2$ 分割的点，以坐标对 $(x, y)$ 作答。"
              },
              "answer": "(4, 4)",
              "accept": [
                "(4,4)",
                "4, 4",
                "4,4"
              ],
              "explanation": {
                "en": "The fraction is $\\frac{1}{1+2} = \\frac{1}{3}$. The change from $A$ to $B$ is $(6, 9)$. So $P = (2 + \\frac{1}{3}\\cdot 6,\\ 1 + \\frac{1}{3}\\cdot 9) = (2+2,\\ 1+3) = (4, 4)$. Using $\\frac{1}{2}$ instead of $\\frac{1}{3}$ is the classic error.",
                "zh": "比例为 $\\frac{1}{1+2} = \\frac{1}{3}$。从 $A$ 到 $B$ 的变化量为 $(6, 9)$。所以 $P = (2 + \\frac{1}{3}\\cdot 6,\\ 1 + \\frac{1}{3}\\cdot 9) = (2+2,\\ 1+3) = (4, 4)$。误用 $\\frac{1}{2}$ 代替 $\\frac{1}{3}$ 是典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Point $P$ partitions the directed segment from $A=(-4, -1)$ to $B=(6, 9)$ in the ratio $3 : 2$. Where is $P$?",
                "zh": "荣誉挑战：点 $P$ 把从 $A=(-4, -1)$ 到 $B=(6, 9)$ 的有向线段按比例 $3 : 2$ 分割。$P$ 在哪里？"
              },
              "choices": [
                "$(1, 4)$",
                "$(0, 3)$",
                "$(4, 7)$",
                "$(2, 5)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The fraction is $\\frac{3}{3+2} = \\frac{3}{5}$. The change is $(6-(-4),\\ 9-(-1)) = (10, 10)$. Then $P = (-4 + \\frac{3}{5}\\cdot 10,\\ -1 + \\frac{3}{5}\\cdot 10) = (-4+6,\\ -1+6) = (2, 5)$. Choice $(4,7)$ comes from using $\\frac{3}{5}$ of the way but measuring from $B$; choice $(1,4)$ uses the wrong fraction $\\frac{1}{2}$.",
                "zh": "比例为 $\\frac{3}{3+2} = \\frac{3}{5}$。变化量为 $(6-(-4),\\ 9-(-1)) = (10, 10)$。则 $P = (-4 + \\frac{3}{5}\\cdot 10,\\ -1 + \\frac{3}{5}\\cdot 10) = (-4+6,\\ -1+6) = (2, 5)$。选项 $(4,7)$ 来自从 $B$ 起量；选项 $(1,4)$ 用错了比例 $\\frac{1}{2}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "operations-on-functions",
      "title": "Unit 9: Operations on Functions",
      "titleZh": "第九单元：函数的运算",
      "lessons": [
        {
          "id": "operations-on-functions",
          "title": "Operations on Functions",
          "titleZh": "函数的运算",
          "content": [
            {
              "type": "h2",
              "en": "Building New Functions from Old Ones",
              "zh": "用旧函数搭建新函数"
            },
            {
              "type": "p",
              "en": "Suppose you run a booth selling shave ice at a summer festival in Provo. Your revenue (money taken in) depends on how many cups you sell, and so does your cost (ice, syrup, cups, the booth fee). Both revenue and cost are functions of the same input — the number of cups $x$. Your profit is simply revenue minus cost. In other words, you build a brand-new function, profit, by subtracting one function from another. This is what \"operations on functions\" is about: just as we add, subtract, multiply, and divide numbers, we can combine two whole functions into a new one.",
              "zh": "假设你在普罗沃的夏日集市上摆摊卖刨冰。你的收入（收进来的钱）取决于卖出多少杯，成本（冰、糖浆、杯子、摊位费）也一样。收入和成本都是同一个自变量的函数——杯数 $x$。你的利润就是收入减去成本。换句话说，你用一个函数减去另一个函数，搭建出了一个全新的函数——利润。这正是\"函数的运算\"要讲的内容：就像我们对数做加、减、乘、除一样，我们也可以把两个完整的函数组合成一个新函数。"
            },
            {
              "type": "p",
              "en": "For two functions $f$ and $g$, we define four combined functions by doing the arithmetic on their outputs at each input $x$:",
              "zh": "对于两个函数 $f$ 和 $g$，我们通过对它们在每个自变量 $x$ 处的输出做算术运算，定义出四个组合函数："
            },
            {
              "type": "math",
              "tex": "(f+g)(x) = f(x) + g(x), \\quad (f-g)(x) = f(x) - g(x)"
            },
            {
              "type": "math",
              "tex": "(f \\cdot g)(x) = f(x) \\cdot g(x), \\quad \\left(\\tfrac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}, \\ g(x) \\neq 0"
            },
            {
              "type": "p",
              "en": "The notation looks fancy, but the rule is plain: evaluate each function separately, then combine the two results with $+$, $-$, $\\times$, or $\\div$. The little symbol between the parentheses just tells you which operation to use.",
              "zh": "记号看起来花哨，但规则很朴素：分别求出每个函数的值，再用 $+$、$-$、$\\times$ 或 $\\div$ 把两个结果组合起来。括号之间的小符号只是告诉你用哪种运算。"
            },
            {
              "type": "h3",
              "en": "Combining Functions Given by Formulas",
              "zh": "由公式给出的函数的组合"
            },
            {
              "type": "p",
              "en": "When both functions are written as formulas, substitute the formulas in, then simplify by combining like terms (for $+$ and $-$) or by distributing (for $\\times$). The most common slip is with subtraction: $(f-g)(x)$ means you subtract the ENTIRE function $g(x)$, so every term of $g$ changes sign.",
              "zh": "当两个函数都以公式形式给出时，先把公式代入，再化简：加减法就合并同类项，乘法就用分配律展开。最常见的失误出在减法上：$(f-g)(x)$ 意味着你要减去整个函数 $g(x)$，所以 $g$ 的每一项都要变号。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Adding, subtracting, and multiplying from formulas",
                "zh": "例题 1：由公式做加、减、乘"
              },
              "problem": {
                "en": "Let $f(x) = 2x + 5$ and $g(x) = x - 3$. Find $(f+g)(x)$, $(f-g)(x)$, and $(f \\cdot g)(x)$.",
                "zh": "设 $f(x) = 2x + 5$，$g(x) = x - 3$。求 $(f+g)(x)$、$(f-g)(x)$ 与 $(f \\cdot g)(x)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Add the outputs and combine like terms:",
                  "zh": "把输出相加并合并同类项："
                },
                {
                  "type": "math",
                  "tex": "(f+g)(x) = (2x+5) + (x-3) = 3x + 2"
                },
                {
                  "type": "p",
                  "en": "For the difference, subtract every term of $g$ — notice the $-3$ becomes $+3$:",
                  "zh": "求差时，要减去 $g$ 的每一项——注意 $-3$ 变成了 $+3$："
                },
                {
                  "type": "math",
                  "tex": "(f-g)(x) = (2x+5) - (x-3) = 2x + 5 - x + 3 = x + 8"
                },
                {
                  "type": "p",
                  "en": "For the product, multiply the two binomials with the distributive property (FOIL):",
                  "zh": "求积时，用分配律（FOIL）把两个二项式相乘："
                },
                {
                  "type": "math",
                  "tex": "(f \\cdot g)(x) = (2x+5)(x-3) = 2x^2 - 6x + 5x - 15 = 2x^2 - x - 15"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: writing $(f-g)(x) = 2x + 5 - x - 3 = x + 2$. That subtracts only the first term of $g$ and forgets to change the sign of $-3$. Wrap $g(x)$ in parentheses before subtracting so that the minus sign flips every term inside.",
              "zh": "常见错误：写成 $(f-g)(x) = 2x + 5 - x - 3 = x + 2$。这只减去了 $g$ 的第一项，忘了把 $-3$ 变号。相减前先给 $g(x)$ 加上括号，这样负号就会翻转括号内的每一项。"
            },
            {
              "type": "h3",
              "en": "Combining Functions from Tables and Graphs",
              "zh": "由表格和图象组合函数"
            },
            {
              "type": "p",
              "en": "You do not need a formula to combine functions — you only need the two output values at the input you care about. From a table, read off $f(x)$ and $g(x)$ in the correct rows and combine them. From a graph, read the height of each curve at that $x$-value and combine the heights. For instance, $(f+g)(2)$ just means \"the height of $f$ at 2 plus the height of $g$ at 2.\"",
              "zh": "组合函数并不需要公式——你只需要在关心的那个自变量处的两个输出值。从表格中，在正确的行读出 $f(x)$ 与 $g(x)$ 再组合；从图象中，读出每条曲线在该 $x$ 值处的高度再组合。例如，$(f+g)(2)$ 就是\"$f$ 在 2 处的高度加上 $g$ 在 2 处的高度\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading a table",
                "zh": "例题 2：读表格"
              },
              "problem": {
                "en": "The table gives values of $f$ and $g$. Find $(f \\cdot g)(1)$ and $(f-g)(4)$.\n\n| $x$ | $1$ | $4$ |\n|---|---|---|\n| $f(x)$ | $6$ | $2$ |\n| $g(x)$ | $-3$ | $5$ |",
                "zh": "下表给出 $f$ 与 $g$ 的值。求 $(f \\cdot g)(1)$ 与 $(f-g)(4)$。\n\n| $x$ | $1$ | $4$ |\n|---|---|---|\n| $f(x)$ | $6$ | $2$ |\n| $g(x)$ | $-3$ | $5$ |"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At $x = 1$: $f(1) = 6$ and $g(1) = -3$, so the product is $6 \\cdot (-3) = -18$.",
                  "zh": "当 $x = 1$ 时：$f(1) = 6$，$g(1) = -3$，所以积为 $6 \\cdot (-3) = -18$。"
                },
                {
                  "type": "math",
                  "tex": "(f \\cdot g)(1) = f(1) \\cdot g(1) = 6 \\cdot (-3) = -18"
                },
                {
                  "type": "p",
                  "en": "At $x = 4$: $f(4) = 2$ and $g(4) = 5$, so the difference is $2 - 5 = -3$.",
                  "zh": "当 $x = 4$ 时：$f(4) = 2$，$g(4) = 5$，所以差为 $2 - 5 = -3$。"
                },
                {
                  "type": "math",
                  "tex": "(f-g)(4) = f(4) - g(4) = 2 - 5 = -3"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Domain of a Combined Function",
              "zh": "组合函数的定义域"
            },
            {
              "type": "p",
              "en": "A combined function can only accept an input $x$ if BOTH $f$ and $g$ accept it — so the domain of $f+g$, $f-g$, and $f \\cdot g$ is the overlap (the values allowed by both). Division adds one more restriction: since we can never divide by zero, the domain of $\\frac{f}{g}$ also excludes every $x$ where $g(x) = 0$. Always hunt for those \"forbidden\" inputs.",
              "zh": "组合函数只有在 $f$ 和 $g$ 都接受某个自变量 $x$ 时才能接受它——所以 $f+g$、$f-g$、$f \\cdot g$ 的定义域是两者的交集（两个函数都允许的值）。除法还多一条限制：因为绝不能除以零，$\\frac{f}{g}$ 的定义域还要排除所有使 $g(x) = 0$ 的 $x$。一定要找出这些\"禁止\"的自变量。"
            },
            {
              "type": "note",
              "en": "Test tip: when you build a quotient $\\frac{f}{g}$, set the DENOMINATOR $g(x) = 0$ and solve. Those solutions are exactly the $x$-values you must throw out of the domain. Setting the numerator to zero instead is a classic trap — a zero on top is perfectly fine (the output is just 0), it is a zero on the bottom that is illegal.",
              "zh": "考试提示：构造商 $\\frac{f}{g}$ 时，令分母 $g(x) = 0$ 并求解。这些解正是你必须从定义域中剔除的 $x$ 值。反过来把分子设为零是一个经典陷阱——分子为零完全没问题（输出就是 0），分母为零才是不允许的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: A quotient and its domain",
                "zh": "例题 3：商及其定义域"
              },
              "problem": {
                "en": "Let $f(x) = x^2 - 9$ and $g(x) = x - 2$. Find $\\left(\\tfrac{f}{g}\\right)(x)$ and state the value of $x$ that must be excluded from its domain.",
                "zh": "设 $f(x) = x^2 - 9$，$g(x) = x - 2$。求 $\\left(\\tfrac{f}{g}\\right)(x)$，并指出必须从定义域中排除的 $x$ 值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Write the quotient as the top over the bottom:",
                  "zh": "把商写成上比下："
                },
                {
                  "type": "math",
                  "tex": "\\left(\\tfrac{f}{g}\\right)(x) = \\frac{x^2 - 9}{x - 2}"
                },
                {
                  "type": "p",
                  "en": "Find where the denominator is zero: $x - 2 = 0$ gives $x = 2$. At $x = 2$ the expression would be division by zero, so $x = 2$ is excluded. The domain is all real numbers except $2$.",
                  "zh": "找出分母为零的地方：$x - 2 = 0$ 得 $x = 2$。在 $x = 2$ 处该式会除以零，所以要排除 $x = 2$。定义域是除 $2$ 以外的所有实数。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Composition: Putting One Function Inside Another",
              "zh": "复合：把一个函数放进另一个函数里"
            },
            {
              "type": "p",
              "en": "There is a fifth way to combine functions that is not one of the four arithmetic operations: composition. Instead of combining the two outputs, you feed the entire output of one function in as the input of the other. We write this as $(f \\circ g)(x) = f(g(x))$, read \"f of g of x.\" Work from the inside out: first compute $g(x)$, then apply $f$ to that result. Think of it as a two-machine assembly line — a number enters machine $g$, and whatever comes out is immediately fed into machine $f$.",
              "zh": "还有第五种组合函数的方式，它不属于四种算术运算，那就是复合。你不再把两个输出组合起来，而是把一个函数的整个输出作为另一个函数的输入送进去。记作 $(f \\circ g)(x) = f(g(x))$，读作\"f 复合 g\"。要从里往外算：先求 $g(x)$，再把这个结果代入 $f$。可以把它想成一条双机流水线——一个数进入机器 $g$，出来的东西立刻被送进机器 $f$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Composition from a formula and a table",
                "zh": "例题 4：由公式和表格做复合"
              },
              "problem": {
                "en": "Let $f(x) = x^2 + 1$ and $g(x) = x + 4$. Find $(f \\circ g)(3) = f(g(3))$.",
                "zh": "设 $f(x) = x^2 + 1$，$g(x) = x + 4$。求 $(f \\circ g)(3) = f(g(3))$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Work inside first: $g(3) = 3 + 4 = 7$. Now apply $f$ to $7$:",
                  "zh": "先算里面：$g(3) = 3 + 4 = 7$。再把 $7$ 代入 $f$："
                },
                {
                  "type": "math",
                  "tex": "f(g(3)) = f(7) = 7^2 + 1 = 49 + 1 = 50"
                },
                {
                  "type": "p",
                  "en": "So $(f \\circ g)(3) = 50$. From a table you do the same thing: look up the inner value in one row, then look up THAT number in the other row.",
                  "zh": "所以 $(f \\circ g)(3) = 50$。用表格做法相同：先在一行查出里面的值，再把那个数拿到另一行去查。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: assuming order does not matter. Composition is usually NOT commutative — $f(g(x))$ and $g(f(x))$ are different. With $f(x)=x^2+1$ and $g(x)=x+4$, we get $f(g(3)) = 50$ but $g(f(3)) = g(10) = 14$. Always start with the innermost function.",
              "zh": "常见错误：以为顺序无所谓。复合通常不满足交换律——$f(g(x))$ 与 $g(f(x))$ 是不同的。当 $f(x)=x^2+1$、$g(x)=x+4$ 时，$f(g(3)) = 50$，但 $g(f(3)) = g(10) = 14$。永远从最里面的函数开始算。"
            },
            {
              "type": "h3",
              "en": "Back to the Shave-Ice Booth: Interpreting a Combined Function",
              "zh": "回到刨冰摊：解释组合函数"
            },
            {
              "type": "p",
              "en": "Say your revenue is $R(x) = 4x$ dollars (each cup sells for \\$4) and your cost is $C(x) = 1.5x + 40$ dollars (\\$1.50 of supplies per cup plus a \\$40 booth fee). Profit is the difference function $P(x) = (R - C)(x) = 4x - (1.5x + 40) = 2.5x - 40$. This new function tells the whole story at once: you earn \\$2.50 of profit per cup, but start \\$40 in the hole, so you break even when $2.5x - 40 = 0$, at $x = 16$ cups. Reading a combined function in context turns four separate numbers into one meaningful rule.",
              "zh": "假设你的收入是 $R(x) = 4x$ 美元（每杯卖 \\$4），成本是 $C(x) = 1.5x + 40$ 美元（每杯 \\$1.50 的原料，加 \\$40 摊位费）。利润是差函数 $P(x) = (R - C)(x) = 4x - (1.5x + 40) = 2.5x - 40$。这个新函数一下子讲清了整个故事：你每杯赚 \\$2.50 的利润，但起步就欠 \\$40，所以当 $2.5x - 40 = 0$ 即 $x = 16$ 杯时收支平衡。在情境中解读组合函数，能把四个孤立的数变成一条有意义的规则。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $f(x) = 3x - 1$ and $g(x) = x + 6$, what is $(f+g)(x)$?",
                "zh": "若 $f(x) = 3x - 1$，$g(x) = x + 6$，则 $(f+g)(x)$ 是多少？"
              },
              "choices": [
                "$3x - 6$",
                "$4x + 7$",
                "$4x + 5$",
                "$3x^2 + 5$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Add the outputs and combine like terms: $(3x - 1) + (x + 6) = 4x + 5$. A tempting wrong answer, $4x + 7$, comes from adding $-1$ and $6$ as if they were $1 + 6$ — but $-1 + 6 = 5$, not $7$. Multiplying instead of adding would wrongly produce an $x^2$ term.",
                "zh": "把输出相加并合并同类项：$(3x - 1) + (x + 6) = 4x + 5$。一个诱人的错误答案 $4x + 7$ 来自把 $-1$ 和 $6$ 当成 $1 + 6$ 相加——但 $-1 + 6 = 5$，不是 $7$。若误用乘法则会错误地产生 $x^2$ 项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f(x) = 5x + 2$ and $g(x) = 2x - 7$, what is $(f-g)(x)$?",
                "zh": "若 $f(x) = 5x + 2$，$g(x) = 2x - 7$，则 $(f-g)(x)$ 是多少？"
              },
              "choices": [
                "$3x - 5$",
                "$3x + 9$",
                "$7x - 5$",
                "$3x + 5$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Subtract every term of $g$: $(5x + 2) - (2x - 7) = 5x + 2 - 2x + 7 = 3x + 9$. The classic error is $3x - 5$, which forgets to flip the sign of $-7$ (it should become $+7$). Adding instead of subtracting the $x$-terms would give $7x$.",
                "zh": "减去 $g$ 的每一项：$(5x + 2) - (2x - 7) = 5x + 2 - 2x + 7 = 3x + 9$。经典错误是 $3x - 5$，它忘了把 $-7$ 变号（应变成 $+7$）。把 $x$ 项相加而非相减则会得到 $7x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x + 4$ and $g(x) = x - 4$. Find $(f \\cdot g)(3)$. Give your answer as an integer.",
                "zh": "设 $f(x) = x + 4$，$g(x) = x - 4$。求 $(f \\cdot g)(3)$。请以整数作答。"
              },
              "answer": "-7",
              "accept": [
                "-7.0",
                "−7"
              ],
              "explanation": {
                "en": "Evaluate each function at $3$: $f(3) = 3 + 4 = 7$ and $g(3) = 3 - 4 = -1$. Their product is $(f \\cdot g)(3) = 7 \\cdot (-1) = -7$.",
                "zh": "在 $3$ 处分别求值：$f(3) = 3 + 4 = 7$，$g(3) = 3 - 4 = -1$。它们的积是 $(f \\cdot g)(3) = 7 \\cdot (-1) = -7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The table shows: $f(2) = 8$, $g(2) = -5$, $f(6) = 1$, $g(6) = 3$. What is $(f+g)(6)$?",
                "zh": "表格显示：$f(2) = 8$，$g(2) = -5$，$f(6) = 1$，$g(6) = 3$。求 $(f+g)(6)$。"
              },
              "choices": [
                "$3$",
                "$9$",
                "$13$",
                "$4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Use the values at $x = 6$ only: $(f+g)(6) = f(6) + g(6) = 1 + 3 = 4$. The distractor $3$ comes from using $g(6)$ alone, and $13$ comes from mistakenly reading the $x = 2$ column ($8 + 5$). Always match the input to the correct row and column.",
                "zh": "只用 $x = 6$ 处的值：$(f+g)(6) = f(6) + g(6) = 1 + 3 = 4$。干扰项 $3$ 来自只用了 $g(6)$，而 $13$ 来自误读了 $x = 2$ 那一列（$8 + 5$）。一定要让自变量对应到正确的行和列。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^2$ and $g(x) = x + 1$. Find $\\left(\\tfrac{f}{g}\\right)(3)$, the value of $f/g$ at $x = 3$. Give your answer as a fraction or decimal.",
                "zh": "设 $f(x) = x^2$，$g(x) = x + 1$。求 $\\left(\\tfrac{f}{g}\\right)(3)$，即 $f/g$ 在 $x = 3$ 处的值。请以分数或小数作答。"
              },
              "answer": "9/4",
              "accept": [
                "2.25",
                "2 1/4"
              ],
              "explanation": {
                "en": "Evaluate top and bottom separately: $f(3) = 3^2 = 9$ and $g(3) = 3 + 1 = 4$. The quotient is $\\frac{f(3)}{g(3)} = \\frac{9}{4} = 2.25$.",
                "zh": "分别求分子和分母：$f(3) = 3^2 = 9$，$g(3) = 3 + 1 = 4$。商为 $\\frac{f(3)}{g(3)} = \\frac{9}{4} = 2.25$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = x + 7$ and $g(x) = x - 5$. Which value of $x$ must be excluded from the domain of $\\left(\\tfrac{f}{g}\\right)(x)$?",
                "zh": "设 $f(x) = x + 7$，$g(x) = x - 5$。$\\left(\\tfrac{f}{g}\\right)(x)$ 的定义域中必须排除哪个 $x$ 值？"
              },
              "choices": [
                "$x = 5$",
                "$x = -7$",
                "$x = 7$",
                "$x = -5$"
              ],
              "answer": 0,
              "explanation": {
                "en": "A quotient is undefined where its denominator is zero. Set $g(x) = x - 5 = 0$, giving $x = 5$. The value $x = -7$ makes the numerator zero, which is allowed (the output is just $0$); only a zero denominator is forbidden.",
                "zh": "商在分母为零处无定义。令 $g(x) = x - 5 = 0$，得 $x = 5$。而 $x = -7$ 使分子为零，这是允许的（输出就是 $0$）；只有分母为零才被禁止。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = 2x - 3$ and $g(x) = x^2$. What is $(f \\circ g)(2) = f(g(2))$?",
                "zh": "设 $f(x) = 2x - 3$，$g(x) = x^2$。求 $(f \\circ g)(2) = f(g(2))$。"
              },
              "choices": [
                "$1$",
                "$4$",
                "$5$",
                "$8$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Work inside out: $g(2) = 2^2 = 4$, then $f(4) = 2(4) - 3 = 5$. The distractor $1$ comes from reversing the order, $g(f(2)) = g(1) = 1$, which is a different composition. Always apply the inner function first.",
                "zh": "从里往外算：$g(2) = 2^2 = 4$，再算 $f(4) = 2(4) - 3 = 5$。干扰项 $1$ 来自颠倒顺序 $g(f(2)) = g(1) = 1$，那是另一个复合。永远先作用里面的函数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A food truck has revenue $R(x) = 9x$ dollars and cost $C(x) = 3.5x + 66$ dollars, where $x$ is the number of meals sold. Using the profit function $P(x) = (R - C)(x)$, how many meals must be sold to break even (where $P(x) = 0$)? Give your answer as a whole number of meals.",
                "zh": "一辆餐车的收入为 $R(x) = 9x$ 美元，成本为 $C(x) = 3.5x + 66$ 美元，其中 $x$ 是卖出的餐数。用利润函数 $P(x) = (R - C)(x)$，需卖出多少份餐才能收支平衡（即 $P(x) = 0$）？请以整数份数作答。"
              },
              "answer": "12",
              "accept": [
                "12 meals",
                "12.0"
              ],
              "explanation": {
                "en": "Build the profit function by subtracting the whole cost: $P(x) = 9x - (3.5x + 66) = 5.5x - 66$. Break-even means $P(x) = 0$, so $5.5x = 66$ and $x = 12$. A frequent error is writing $9x - 3.5x + 66$ (forgetting to distribute the minus sign), which changes the answer entirely.",
                "zh": "通过减去整个成本来构造利润函数：$P(x) = 9x - (3.5x + 66) = 5.5x - 66$。收支平衡即 $P(x) = 0$，所以 $5.5x = 66$，$x = 12$。常见错误是写成 $9x - 3.5x + 66$（忘了分配负号），那会彻底改变答案。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "basics-of-geometry",
      "title": "Unit 10: Basics of Geometry",
      "titleZh": "第十单元：几何基础",
      "lessons": [
        {
          "id": "points-lines-planes-and-segments",
          "title": "Points, Lines, Planes, and Segments",
          "titleZh": "点、线、面与线段",
          "content": [
            {
              "type": "h2",
              "en": "The Building Blocks of Geometry",
              "zh": "几何的基本构件"
            },
            {
              "type": "p",
              "en": "Every geometric figure you will ever study — a triangle roof truss, the boundary of a Utah county on a survey map, the flight path of a drone — is built from three ideas so basic that we do not even try to define them: point, line, and plane. We call these the undefined terms. Instead of defining them with simpler words, we describe how they behave and agree on symbols for naming them. Think of a surveyor laying out a new subdivision near Provo: a stake in the ground is a point, the taut string between two stakes is a line, and the flat graded lot is a plane.",
              "zh": "你将学习的每一个几何图形——三角形屋架、测量图上某个犹他县的边界、无人机的飞行路线——都由三个极其基本、以至于我们不去定义的概念构成：点、线和面。我们称它们为不定义术语。我们不用更简单的词去定义它们，而是描述它们的性质，并约定表示它们的符号。想象一位测量员在普若佛附近规划新的住宅区：钉在地上的一根桩是一个点，两桩之间拉直的绳是一条线，平整过的地块是一个平面。"
            },
            {
              "type": "h3",
              "en": "Point, Line, and Plane",
              "zh": "点、线、面"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A point has no size — no length, width, or thickness. It marks a location. We draw it as a dot and name it with a single capital letter, like point $A$.",
                  "zh": "点没有大小——没有长度、宽度或厚度。它标记一个位置。我们把它画成一个圆点，用一个大写字母命名，如点 $A$。"
                },
                {
                  "en": "A line is a straight path that extends without end in both directions and has no thickness. It is named by any two points on it with a double arrow, like line $\\overleftrightarrow{AB}$, or by a lowercase script letter, like line $\\ell$.",
                  "zh": "线（直线）是一条向两端无限延伸、没有粗细的笔直路径。它用线上任意两点加双向箭头命名，如直线 $\\overleftrightarrow{AB}$，也可用一个小写字母命名，如直线 $\\ell$。"
                },
                {
                  "en": "A plane is a perfectly flat surface that extends without end in every direction and has no thickness. It is named by a single capital script letter, like plane $\\mathcal{M}$, or by any three of its points that are not on one line, like plane $ABC$.",
                  "zh": "面（平面）是一个完全平坦、向各个方向无限延伸、没有厚度的表面。它用一个大写花体字母命名，如平面 $\\mathcal{M}$，也可用面上不在同一直线上的任意三点命名，如平面 $ABC$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Two facts follow directly. Through any two distinct points there is exactly one line — this is why two stakes fix a single straight string. And through any three points not on the same line there is exactly one plane — this is why a three-legged stool never wobbles, while a four-legged chair sometimes does.",
              "zh": "由此直接得到两个事实：经过任意两个不同的点恰好有一条直线——这就是为什么两根桩能确定唯一一条直绳；经过不在同一直线上的任意三点恰好有一个平面——这就是为什么三条腿的凳子从不晃，而四条腿的椅子有时会晃。"
            },
            {
              "type": "note",
              "en": "Common mistake: naming a line with just one point. A single point does not determine a line — infinitely many lines pass through one point. You always need two points (or a special line name) to name a line unambiguously.",
              "zh": "常见错误：只用一个点命名一条直线。单独一个点无法确定一条直线——经过一个点的直线有无数条。要无歧义地命名一条直线，总需要两个点（或一个专门的直线名称）。"
            },
            {
              "type": "h3",
              "en": "Collinear and Coplanar",
              "zh": "共线与共面"
            },
            {
              "type": "p",
              "en": "Points that lie on the same line are collinear. Points (or lines) that lie in the same plane are coplanar. For example, suppose points $A$, $B$, and $C$ sit on one straight fence line while point $D$ stands off to the side, away from the fence. Then $A$, $B$, $C$ are collinear, but $A$, $B$, $D$ are not collinear (no single straight line contains all three). All four points, however, can still lie flat on the same field, so $A$, $B$, $C$, $D$ are coplanar.",
              "zh": "在同一条直线上的点叫做共线的。在同一平面内的点（或线）叫做共面的。例如，设点 $A$、$B$、$C$ 位于同一条笔直的栅栏线上，而点 $D$ 立在一旁、偏离栅栏。那么 $A$、$B$、$C$ 共线，但 $A$、$B$、$D$ 不共线（没有一条直线能同时包含这三点）。然而这四个点仍可平铺在同一片田地上，所以 $A$、$B$、$C$、$D$ 共面。"
            },
            {
              "type": "h3",
              "en": "Segments and Rays",
              "zh": "线段与射线"
            },
            {
              "type": "p",
              "en": "A line goes on forever, but the pieces of it we can measure do not. A segment is the part of a line between two endpoints, including both endpoints. We write segment $AB$ as $\\overline{AB}$, and its length — a number — as $AB$ (no bar). A ray starts at one endpoint and extends without end in one direction; ray $\\overrightarrow{AB}$ starts at $A$ and passes through $B$. Order matters for rays: $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ point in opposite directions.",
              "zh": "直线无限延伸，但我们能度量的部分不会。线段是直线上位于两个端点之间的部分，包含这两个端点。我们把线段 $AB$ 记作 $\\overline{AB}$，而它的长度（一个数）记作 $AB$（不带横线）。射线从一个端点出发、向一个方向无限延伸；射线 $\\overrightarrow{AB}$ 从 $A$ 出发并经过 $B$。射线的顺序很重要：$\\overrightarrow{AB}$ 与 $\\overrightarrow{BA}$ 指向相反方向。"
            },
            {
              "type": "note",
              "en": "Notation matters: $\\overline{AB}$ (with a bar) is a geometric object — a segment you can draw. $AB$ (no bar) is its length — a number you can compute and put into equations. Writing \"$\\overline{AB} = 7$\" mixes an object with a number; write \"$AB = 7$\" instead.",
              "zh": "记号很重要：$\\overline{AB}$（带横线）是一个几何对象——一条可以画出的线段。$AB$（不带横线）是它的长度——一个可以计算并代入方程的数。写成 “$\\overline{AB} = 7$” 把对象和数字混在一起了；应写成 “$AB = 7$”。"
            },
            {
              "type": "h3",
              "en": "The Segment Addition Postulate",
              "zh": "线段和公理"
            },
            {
              "type": "p",
              "en": "If a point $B$ lies on segment $\\overline{AC}$ — that is, $B$ is between $A$ and $C$ on the line — then the two shorter pieces add up to the whole:",
              "zh": "如果点 $B$ 在线段 $\\overline{AC}$ 上——即 $B$ 在直线上位于 $A$ 与 $C$ 之间——那么两段较短的部分之和等于整段："
            },
            {
              "type": "math",
              "tex": "AB + BC = AC"
            },
            {
              "type": "p",
              "en": "This is the geometric version of \"the parts make the whole.\" It lets you find an unknown length by adding pieces you know, or by subtracting a known piece from the whole. For instance, if $A$, $B$, $C$ are collinear with $B$ between the others, $AC = 20$, and $AB = 12$, then $BC = AC - AB = 20 - 12 = 8$.",
              "zh": "这是 “部分之和等于整体” 的几何版本。它让你可以通过把已知的各段相加来求未知长度，或用整段减去已知的一段来求。例如，若 $A$、$B$、$C$ 共线且 $B$ 在其余两点之间，$AC = 20$，$AB = 12$，则 $BC = AC - AB = 20 - 12 = 8$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Adding and subtracting lengths",
                "zh": "例题 1：长度的加与减"
              },
              "problem": {
                "en": "Points $P$, $Q$, $R$, $S$ are collinear in that order along a straight bike path. If $PQ = 5$, $QR = 9$, and $PS = 21$ (all in kilometers), find $RS$.",
                "zh": "点 $P$、$Q$、$R$、$S$ 按此顺序共线，位于一条笔直的自行车道上。若 $PQ = 5$、$QR = 9$、$PS = 21$（单位均为千米），求 $RS$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Because the points are in order $P$–$Q$–$R$–$S$, the whole path is $PS = PQ + QR + RS$. Substitute what you know:",
                  "zh": "由于各点按 $P$–$Q$–$R$–$S$ 的顺序排列，整条路为 $PS = PQ + QR + RS$。代入已知量："
                },
                {
                  "type": "math",
                  "tex": "21 = 5 + 9 + RS"
                },
                {
                  "type": "p",
                  "en": "So $21 = 14 + RS$, which gives $RS = 21 - 14 = 7$ kilometers.",
                  "zh": "所以 $21 = 14 + RS$，得 $RS = 21 - 14 = 7$ 千米。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Congruent Segments and the Midpoint",
              "zh": "全等线段与中点"
            },
            {
              "type": "p",
              "en": "Two segments are congruent when they have exactly the same length. We write $\\overline{AB} \\cong \\overline{CD}$ for the segments and $AB = CD$ for their equal lengths. The midpoint of a segment is the point that divides it into two congruent halves. If $M$ is the midpoint of $\\overline{AB}$, then $AM = MB$ and each equals half of $AB$. A line, ray, or segment that passes through the midpoint is called a segment bisector, because it cuts the segment into two equal parts.",
              "zh": "当两条线段的长度完全相同时，它们是全等的。我们把线段记作 $\\overline{AB} \\cong \\overline{CD}$，把它们相等的长度记作 $AB = CD$。线段的中点是把它分成两条全等的一半的点。若 $M$ 是 $\\overline{AB}$ 的中点，则 $AM = MB$，且每段都等于 $AB$ 的一半。经过中点的直线、射线或线段称为线段的平分线（中分线），因为它把线段分成两个相等的部分。"
            },
            {
              "type": "note",
              "en": "Congruent ($\\cong$) describes the objects; equal ($=$) describes their measures. Segments are congruent; their lengths are equal. In practice you use the equal lengths to compute, but on proofs and honors problems the distinction is graded, so keep the symbols straight.",
              "zh": "全等（$\\cong$）描述对象；相等（$=$）描述它们的度量。线段是全等的；它们的长度是相等的。实际计算时你用相等的长度，但在证明和荣誉题中这一区别会被评分，所以要把符号用对。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Using a midpoint",
                "zh": "例题 2：利用中点"
              },
              "problem": {
                "en": "A ray of reflective tape $\\overline{XY}$ is $34$ cm long, and $M$ is its midpoint. Point $N$ lies between $X$ and $M$ with $XN = 6$ cm. Find $NM$ and $NY$.",
                "zh": "一条反光胶带 $\\overline{XY}$ 长 $34$ 厘米，$M$ 是它的中点。点 $N$ 位于 $X$ 与 $M$ 之间，且 $XN = 6$ 厘米。求 $NM$ 与 $NY$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The midpoint splits $\\overline{XY}$ into two equal halves, so $XM = MY = \\frac{34}{2} = 17$ cm.",
                  "zh": "中点把 $\\overline{XY}$ 分成两个相等的一半，所以 $XM = MY = \\frac{34}{2} = 17$ 厘米。"
                },
                {
                  "type": "p",
                  "en": "Since $N$ is between $X$ and $M$, we have $XN + NM = XM$, so $NM = 17 - 6 = 11$ cm.",
                  "zh": "由于 $N$ 在 $X$ 与 $M$ 之间，有 $XN + NM = XM$，故 $NM = 17 - 6 = 11$ 厘米。"
                },
                {
                  "type": "p",
                  "en": "Then $NY = NM + MY = 11 + 17 = 28$ cm.",
                  "zh": "于是 $NY = NM + MY = 11 + 17 = 28$ 厘米。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Using Algebra with Segments",
              "zh": "用代数解线段问题"
            },
            {
              "type": "p",
              "en": "In an integrated course, segment lengths are often given as algebraic expressions. The strategy is always the same: write the segment relationship (usually the Segment Addition Postulate or a midpoint condition), substitute the expressions, and solve the resulting equation for the variable. Then plug the variable back in to answer what was actually asked.",
              "zh": "在整合式课程中，线段长度常以代数式给出。策略始终一致：写出线段关系（通常是线段和公理或中点条件），代入各表达式，解出所得方程中的变量，再把变量代回去回答真正要求的量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Solving for a variable",
                "zh": "例题 3：解出变量"
              },
              "problem": {
                "en": "Point $B$ is between $A$ and $C$ on a line. $AB = 3x + 2$, $BC = 5x - 4$, and $AC = 30$. Find $x$, then find $AB$ and $BC$.",
                "zh": "点 $B$ 在直线上位于 $A$ 与 $C$ 之间。$AB = 3x + 2$，$BC = 5x - 4$，$AC = 30$。求 $x$，再求 $AB$ 与 $BC$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By the Segment Addition Postulate, $AB + BC = AC$. Substitute the expressions:",
                  "zh": "由线段和公理，$AB + BC = AC$。代入各表达式："
                },
                {
                  "type": "math",
                  "tex": "(3x + 2) + (5x - 4) = 30"
                },
                {
                  "type": "p",
                  "en": "Combine like terms: $8x - 2 = 30$. Add $2$ to both sides: $8x = 32$, so $x = 4$.",
                  "zh": "合并同类项：$8x - 2 = 30$。两边加 $2$：$8x = 32$，所以 $x = 4$。"
                },
                {
                  "type": "p",
                  "en": "Now substitute back: $AB = 3(4) + 2 = 14$ and $BC = 5(4) - 4 = 16$. Check: $14 + 16 = 30 = AC$. ✓",
                  "zh": "再代回：$AB = 3(4) + 2 = 14$，$BC = 5(4) - 4 = 16$。检验：$14 + 16 = 30 = AC$。✓"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: after solving for the variable, reread the question. Problems often ask for a length like $AB$, not for $x$ itself. Finding $x = 4$ and stopping there is the most common way to lose points on segment problems.",
              "zh": "考试提示：解出变量后，重新读题。题目常常问的是像 $AB$ 这样的长度，而不是 $x$ 本身。求出 $x = 4$ 就停下来，是线段题最常见的失分方式。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following can be used to name a plane?",
                "zh": "下列哪一项可以用来命名一个平面？"
              },
              "choices": [
                "A single point on it",
                "Two points on it",
                "Three points on it that are not all on one line",
                "Its length in square meters"
              ],
              "answer": 2,
              "explanation": {
                "en": "A plane is determined by three points that are not collinear, so three such points name it. One point or two points are not enough — infinitely many planes pass through a single point or a single line. The idea that a plane has a \"length in square meters\" confuses a flat surface (which extends without end) with the area of a bounded region.",
                "zh": "一个平面由三个不共线的点确定，因此这样的三点可以命名它。一个点或两个点都不够——经过一个点或一条直线的平面有无数个。所谓平面有 “以平方米计的长度” 这一想法，把无限延伸的平坦表面与某个有界区域的面积混淆了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Points $A$, $B$, and $C$ lie on the same straight line, but point $D$ does not lie on that line. Which statement is true?",
                "zh": "点 $A$、$B$、$C$ 在同一条直线上，但点 $D$ 不在这条直线上。下列哪项正确？"
              },
              "choices": [
                "$A$, $B$, $C$ are collinear; $A$, $B$, $D$ are not collinear",
                "$A$, $B$, $C$ are not collinear; they are coplanar only",
                "No three of the points can be coplanar",
                "$A$, $B$, $D$ must be collinear because any three points are"
              ],
              "answer": 0,
              "explanation": {
                "en": "$A$, $B$, $C$ share one line, so they are collinear. $D$ is off that line, so no single line holds $A$, $B$, and $D$ — they are not collinear. The claim that \"any three points are collinear\" is false; three points are collinear only when one line passes through all of them.",
                "zh": "$A$、$B$、$C$ 在同一条直线上，故它们共线。$D$ 不在这条线上，所以没有一条直线能同时容纳 $A$、$B$、$D$——它们不共线。所谓 “任意三点都共线” 是错的；三点共线仅当有一条直线经过它们全部时才成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement uses geometry notation correctly?",
                "zh": "下列哪一句正确使用了几何记号？"
              },
              "choices": [
                "$\\overline{AB} = 7$, meaning the segment equals the number $7$",
                "$\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ are the same ray",
                "$AB = 7$, meaning the length of segment $\\overline{AB}$ is $7$",
                "$\\overleftrightarrow{AB}$ names a segment with endpoints $A$ and $B$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$AB$ without a bar is a number — the length — so \"$AB = 7$\" is correct. Writing \"$\\overline{AB} = 7$\" sets a segment (an object) equal to a number, which mixes categories. The rays $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ point in opposite directions, and $\\overleftrightarrow{AB}$ (double arrow) names a full line, not a segment.",
                "zh": "不带横线的 $AB$ 是一个数——长度——所以 “$AB = 7$” 正确。写成 “$\\overline{AB} = 7$” 是把线段（对象）等于一个数，混淆了类别。射线 $\\overrightarrow{AB}$ 与 $\\overrightarrow{BA}$ 指向相反方向，而 $\\overleftrightarrow{AB}$（双向箭头）命名的是整条直线，不是线段。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Points $R$, $S$, $T$ are collinear with $S$ between $R$ and $T$. If $RS = 13$ and $ST = 9$, find $RT$. Give your answer as a number.",
                "zh": "点 $R$、$S$、$T$ 共线，$S$ 在 $R$ 与 $T$ 之间。若 $RS = 13$，$ST = 9$，求 $RT$。请以数字作答。"
              },
              "answer": "22",
              "accept": [
                "22.0",
                "RT = 22"
              ],
              "explanation": {
                "en": "By the Segment Addition Postulate, $RT = RS + ST = 13 + 9 = 22$. The whole is the sum of its two parts. Subtracting instead of adding (getting $4$) would treat the whole as if it were a piece.",
                "zh": "由线段和公理，$RT = RS + ST = 13 + 9 = 22$。整体等于两部分之和。若误用相减（得 $4$），就把整体当成了其中一段。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$M$ is the midpoint of $\\overline{JK}$. If $JK = 46$, find $JM$. Give your answer as a number.",
                "zh": "$M$ 是 $\\overline{JK}$ 的中点。若 $JK = 46$，求 $JM$。请以数字作答。"
              },
              "answer": "23",
              "accept": [
                "23.0"
              ],
              "explanation": {
                "en": "A midpoint divides a segment into two congruent halves, so $JM = \\frac{1}{2}(46) = 23$. Doubling instead of halving (getting $92$) would find the length of a segment twice as long, not one half.",
                "zh": "中点把线段分成两条全等的一半，所以 $JM = \\frac{1}{2}(46) = 23$。若误把它翻倍（得 $92$），求的是长一倍的线段，而不是一半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Point $B$ is between $A$ and $C$. $AB = 2x + 1$, $BC = x + 5$, and $AC = 18$. What is the value of $x$?",
                "zh": "点 $B$ 在 $A$ 与 $C$ 之间。$AB = 2x + 1$，$BC = x + 5$，$AC = 18$。$x$ 的值是多少？"
              },
              "choices": [
                "$x = 6$",
                "$x = 4$",
                "$x = 3$",
                "$x = 12$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Set up $AB + BC = AC$: $(2x+1) + (x+5) = 18$, so $3x + 6 = 18$, giving $3x = 12$ and $x = 4$. A tempting error is to set one expression equal to $18$, or to forget to combine the constants $1$ and $5$; both skip the \"parts add to the whole\" relationship.",
                "zh": "列式 $AB + BC = AC$：$(2x+1) + (x+5) = 18$，即 $3x + 6 = 18$，得 $3x = 12$，$x = 4$。一个诱人的错误是把某一个表达式直接等于 $18$，或忘记合并常数 $1$ 与 $5$；两者都跳过了 “部分之和等于整体” 这一关系。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "On a straight nature trail, marker $B$ is between markers $A$ and $C$. The full trail is $AC = 40$ m. If $AB = 7y$ and $BC = 3y$, find the value of $y$, then state the length $BC$ in meters. Give $BC$ as a number.",
                "zh": "在一条笔直的自然步道上，标志 $B$ 位于标志 $A$ 与 $C$ 之间。全程 $AC = 40$ 米。若 $AB = 7y$，$BC = 3y$，求 $y$ 的值，再说出长度 $BC$（米）。$BC$ 请以数字作答。"
              },
              "answer": "12",
              "accept": [
                "12 m",
                "12.0",
                "12 meters"
              ],
              "explanation": {
                "en": "Add the parts: $7y + 3y = 40$, so $10y = 40$ and $y = 4$. The question asks for $BC = 3y = 3(4) = 12$ m. Stopping at $y = 4$ answers a different question — always substitute back into the length you were asked for.",
                "zh": "把各段相加：$7y + 3y = 40$，即 $10y = 40$，$y = 4$。题目求的是 $BC = 3y = 3(4) = 12$ 米。停在 $y = 4$ 回答的是另一个问题——一定要代回你被要求的那个长度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: $M$ is the midpoint of $\\overline{PQ}$. $PM = 4x - 3$ and $MQ = 2x + 9$. What is the full length $PQ$?",
                "zh": "荣誉挑战：$M$ 是 $\\overline{PQ}$ 的中点。$PM = 4x - 3$，$MQ = 2x + 9$。整段长度 $PQ$ 是多少？"
              },
              "choices": [
                "$PQ = 21$",
                "$PQ = 6$",
                "$PQ = 30$",
                "$PQ = 42$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Because $M$ is the midpoint, the two halves are congruent: $PM = MQ$, so $4x - 3 = 2x + 9$. Then $2x = 12$ and $x = 6$. Each half is $PM = 4(6) - 3 = 21$, so the whole segment is $PQ = 2(21) = 42$. Answering $21$ gives just one half; answering $6$ gives only $x$ — neither is the full length asked for.",
                "zh": "因为 $M$ 是中点，两半全等：$PM = MQ$，故 $4x - 3 = 2x + 9$。则 $2x = 12$，$x = 6$。每半为 $PM = 4(6) - 3 = 21$，所以整段 $PQ = 2(21) = 42$。答 $21$ 只是其中一半；答 $6$ 只是 $x$——都不是所求的整段长度。"
              }
            }
          ]
        },
        {
          "id": "angles-and-angle-relationships",
          "title": "Angles and Angle Relationships",
          "titleZh": "角与角的关系",
          "content": [
            {
              "type": "h2",
              "en": "Turning, Measuring, and Naming Angles",
              "zh": "角的旋转、度量与命名"
            },
            {
              "type": "p",
              "en": "An angle is what you get when two rays share a common endpoint. That shared endpoint is the vertex, and the two rays are the sides. Angles are everywhere in Utah engineering: the pitch of a snow-shedding roof in Park City, the lean of a highway on-ramp, the swing of a ski-lift chair. To work with them we need to name them, measure them, and understand how neighboring angles relate — because those relationships turn a single known angle into a whole set of equations.",
              "zh": "当两条射线共用一个端点时，就得到一个角。这个公共端点是顶点，两条射线是角的边。犹他州的工程处处有角：帕克城可以卸雪的屋顶坡度、高速公路匝道的倾斜、缆车座椅的摆动。要使用角，我们需要命名它、度量它，并理解相邻角之间的关系——因为这些关系能把一个已知的角变成一整组方程。"
            },
            {
              "type": "h3",
              "en": "Naming and Measuring Angles",
              "zh": "角的命名与度量"
            },
            {
              "type": "p",
              "en": "We name an angle with the symbol $\\angle$ in three common ways: by its vertex alone ($\\angle B$), by a number placed inside it ($\\angle 1$), or by three points with the vertex in the middle ($\\angle ABC$, where $A$ is on one side, $B$ is the vertex, and $C$ is on the other side). The middle letter is always the vertex. We measure an angle in degrees, writing $m\\angle ABC = 50^\\circ$ for \"the measure of angle $ABC$ is $50$ degrees.\"",
              "zh": "我们用符号 $\\angle$ 以三种常见方式命名角：仅用顶点（$\\angle B$）、用角内标的数字（$\\angle 1$），或用三个点且顶点居中（$\\angle ABC$，其中 $A$ 在一边、$B$ 是顶点、$C$ 在另一边）。中间的字母永远是顶点。我们以度为单位度量角，把 “角 $ABC$ 的度数是 $50$ 度” 写作 $m\\angle ABC = 50^\\circ$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "An acute angle measures between $0^\\circ$ and $90^\\circ$.",
                  "zh": "锐角的度数在 $0^\\circ$ 与 $90^\\circ$ 之间。"
                },
                {
                  "en": "A right angle measures exactly $90^\\circ$; its sides are perpendicular, and we mark it with a small square at the vertex.",
                  "zh": "直角恰好为 $90^\\circ$；它的两边互相垂直，我们在顶点处用一个小方块标出。"
                },
                {
                  "en": "An obtuse angle measures between $90^\\circ$ and $180^\\circ$.",
                  "zh": "钝角的度数在 $90^\\circ$ 与 $180^\\circ$ 之间。"
                },
                {
                  "en": "A straight angle measures exactly $180^\\circ$; its two sides form a straight line.",
                  "zh": "平角恰好为 $180^\\circ$；它的两边构成一条直线。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: naming a three-letter angle with the vertex written first or last, like calling the angle at vertex $B$ \"$\\angle BAC$.\" The vertex must be the middle letter. When several angles meet at one vertex, a single-letter name like $\\angle B$ is ambiguous — use the three-letter or numbered name instead.",
              "zh": "常见错误：三字母命名时把顶点写在最前或最后，例如把顶点在 $B$ 的角叫成 “$\\angle BAC$”。顶点必须是中间那个字母。当多个角相交于同一个顶点时，像 $\\angle B$ 这样的单字母名称会有歧义——此时应改用三字母或数字命名。"
            },
            {
              "type": "h3",
              "en": "The Angle Addition Postulate",
              "zh": "角的和公理"
            },
            {
              "type": "p",
              "en": "The Angle Addition Postulate is the exact analog of the Segment Addition Postulate. If ray $\\overrightarrow{BD}$ lies in the interior of $\\angle ABC$ — that is, $D$ is inside the opening of the angle — then the two smaller angles add up to the whole:",
              "zh": "角的和公理与线段和公理完全对应。如果射线 $\\overrightarrow{BD}$ 位于 $\\angle ABC$ 的内部——即 $D$ 落在角的开口内——那么两个较小的角之和等于整个角："
            },
            {
              "type": "math",
              "tex": "m\\angle ABD + m\\angle DBC = m\\angle ABC"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Splitting an angle",
                "zh": "例题 1：分割一个角"
              },
              "problem": {
                "en": "Ray $\\overrightarrow{BD}$ is in the interior of $\\angle ABC$. If $m\\angle ABC = 74^\\circ$ and $m\\angle ABD = 31^\\circ$, find $m\\angle DBC$.",
                "zh": "射线 $\\overrightarrow{BD}$ 在 $\\angle ABC$ 的内部。若 $m\\angle ABC = 74^\\circ$，$m\\angle ABD = 31^\\circ$，求 $m\\angle DBC$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The whole angle is the sum of its two parts: $m\\angle ABD + m\\angle DBC = m\\angle ABC$. Subtract the known piece from the whole:",
                  "zh": "整个角等于两部分之和：$m\\angle ABD + m\\angle DBC = m\\angle ABC$。用整个角减去已知的一部分："
                },
                {
                  "type": "math",
                  "tex": "m\\angle DBC = 74^\\circ - 31^\\circ = 43^\\circ"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Angle Bisectors",
              "zh": "角平分线"
            },
            {
              "type": "p",
              "en": "An angle bisector is a ray from the vertex that divides an angle into two congruent angles — the angular twin of a segment midpoint. If $\\overrightarrow{BD}$ bisects $\\angle ABC$, then $m\\angle ABD = m\\angle DBC$, and each equals half of $m\\angle ABC$. For example, if $\\overrightarrow{BD}$ bisects a $68^\\circ$ angle, each half measures $34^\\circ$.",
              "zh": "角平分线是从顶点出发、把一个角分成两个全等的角的射线——它是线段中点在角上的对应物。如果 $\\overrightarrow{BD}$ 平分 $\\angle ABC$，则 $m\\angle ABD = m\\angle DBC$，且每个都等于 $m\\angle ABC$ 的一半。例如，若 $\\overrightarrow{BD}$ 平分一个 $68^\\circ$ 的角，每一半为 $34^\\circ$。"
            },
            {
              "type": "h3",
              "en": "Angle Pair Relationships",
              "zh": "成对角的关系"
            },
            {
              "type": "p",
              "en": "Certain pairs of angles come up so often that they have names and built-in equations. Learn these four, and most angle problems become algebra:",
              "zh": "某些成对的角出现得如此频繁，以至于它们有专门的名称和现成的方程。掌握这四种，大多数角的问题就变成了代数："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Complementary angles are two angles whose measures add to $90^\\circ$. Example: a $57^\\circ$ angle and a $33^\\circ$ angle.",
                  "zh": "互余角是两个度数之和为 $90^\\circ$ 的角。例如：一个 $57^\\circ$ 的角和一个 $33^\\circ$ 的角。"
                },
                {
                  "en": "Supplementary angles are two angles whose measures add to $180^\\circ$. Example: a $110^\\circ$ angle and a $70^\\circ$ angle.",
                  "zh": "互补角是两个度数之和为 $180^\\circ$ 的角。例如：一个 $110^\\circ$ 的角和一个 $70^\\circ$ 的角。"
                },
                {
                  "en": "Adjacent angles share a vertex and a common side but do not overlap — they sit side by side, like $\\angle ABD$ and $\\angle DBC$ sharing side $\\overrightarrow{BD}$.",
                  "zh": "邻角共用一个顶点和一条公共边，但互不重叠——它们并排而列，如 $\\angle ABD$ 与 $\\angle DBC$ 共用边 $\\overrightarrow{BD}$。"
                },
                {
                  "en": "A linear pair is two adjacent angles whose non-shared sides form a straight line. A linear pair is always supplementary (adds to $180^\\circ$).",
                  "zh": "线性对（邻补角）是两个相邻的角，其不共用的两边构成一条直线。线性对总是互补的（和为 $180^\\circ$）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "When two straight lines cross, they form two pairs of vertical angles — the angles directly across the intersection from each other, sharing only the vertex. Picture two roads crossing at point $O$: the angle opening to the north-east and the angle opening to the south-west are vertical angles. A key theorem says vertical angles are congruent (equal in measure). Here is why: if $\\angle 1$ and $\\angle 2$ form a linear pair, they add to $180^\\circ$; if $\\angle 2$ and $\\angle 3$ also form a linear pair, they also add to $180^\\circ$. Both equal $180^\\circ - m\\angle 2$, so $m\\angle 1 = m\\angle 3$.",
              "zh": "当两条直线相交时，它们形成两对对顶角——就是在交点两侧正对、仅共用顶点的角。想象两条道路相交于点 $O$：朝东北张开的角与朝西南张开的角是对顶角。一个关键定理说：对顶角相等（度数相等）。理由如下：若 $\\angle 1$ 与 $\\angle 2$ 构成线性对，它们和为 $180^\\circ$；若 $\\angle 2$ 与 $\\angle 3$ 也构成线性对，它们也和为 $180^\\circ$。两者都等于 $180^\\circ - m\\angle 2$，所以 $m\\angle 1 = m\\angle 3$。"
            },
            {
              "type": "note",
              "en": "Common mistake: mixing up complementary and supplementary. \"Complementary\" pairs with the Corner of a right angle ($90^\\circ$) — think \"C for Corner.\" \"Supplementary\" makes a Straight line ($180^\\circ$) — think \"S for Straight.\" Swapping them is the single most frequent error on angle tests.",
              "zh": "常见错误：混淆互余与互补。“互余”（complementary）配的是直角的角落（$90^\\circ$）——记 “C 对应 Corner（角落）”。“互补”（supplementary）构成一条直线（$180^\\circ$）——记 “S 对应 Straight（直线）”。把两者弄反是角的测验中最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A linear pair with algebra",
                "zh": "例题 2：用代数解线性对"
              },
              "problem": {
                "en": "Two angles form a linear pair. One measures $(3x + 10)^\\circ$ and the other measures $(2x - 5)^\\circ$. Find $x$ and the measure of each angle.",
                "zh": "两个角构成一个线性对。一个是 $(3x + 10)^\\circ$，另一个是 $(2x - 5)^\\circ$。求 $x$ 及每个角的度数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A linear pair is supplementary, so the two measures add to $180^\\circ$:",
                  "zh": "线性对互补，故两个度数之和为 $180^\\circ$："
                },
                {
                  "type": "math",
                  "tex": "(3x + 10) + (2x - 5) = 180"
                },
                {
                  "type": "p",
                  "en": "Combine: $5x + 5 = 180$, so $5x = 175$ and $x = 35$.",
                  "zh": "合并：$5x + 5 = 180$，故 $5x = 175$，$x = 35$。"
                },
                {
                  "type": "p",
                  "en": "Substitute back: $3(35) + 10 = 115^\\circ$ and $2(35) - 5 = 65^\\circ$. Check: $115 + 65 = 180$. ✓",
                  "zh": "代回：$3(35) + 10 = 115^\\circ$，$2(35) - 5 = 65^\\circ$。检验：$115 + 65 = 180$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Vertical angles",
                "zh": "例题 3：对顶角"
              },
              "problem": {
                "en": "Two lines cross at a point. One of the four angles measures $(5x - 8)^\\circ$ and the angle vertical to it measures $(3x + 12)^\\circ$. Find $x$ and the measure of these vertical angles.",
                "zh": "两条直线相交于一点。四个角中的一个为 $(5x - 8)^\\circ$，与它相对的对顶角为 $(3x + 12)^\\circ$。求 $x$ 及这对对顶角的度数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Vertical angles are congruent, so their measures are equal:",
                  "zh": "对顶角相等，故它们的度数相等："
                },
                {
                  "type": "math",
                  "tex": "5x - 8 = 3x + 12"
                },
                {
                  "type": "p",
                  "en": "Subtract $3x$ from both sides: $2x - 8 = 12$. Then $2x = 20$, so $x = 10$.",
                  "zh": "两边减 $3x$：$2x - 8 = 12$。则 $2x = 20$，故 $x = 10$。"
                },
                {
                  "type": "p",
                  "en": "Each vertical angle measures $5(10) - 8 = 42^\\circ$ (and $3(10) + 12 = 42^\\circ$ confirms it).",
                  "zh": "每个对顶角为 $5(10) - 8 = 42^\\circ$（且 $3(10) + 12 = 42^\\circ$ 予以确认）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: decide the relationship before you write the equation. Vertical angles are set equal ($=$); complementary angles are summed to $90$; supplementary angles and linear pairs are summed to $180$. Choosing the wrong total is what sends an otherwise-correct solution off track.",
              "zh": "考试提示：先判断关系，再列方程。对顶角令其相等（$=$）；互余角相加等于 $90$；互补角与线性对相加等于 $180$。选错了那个总和，会让本来正确的解法走偏。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "An angle measures $63^\\circ$. What is the measure of its complement, in degrees? Give a number.",
                "zh": "一个角为 $63^\\circ$。它的余角是多少度？请给出数字。"
              },
              "answer": "27",
              "accept": [
                "27 degrees",
                "27.0",
                "$27^\\circ$"
              ],
              "explanation": {
                "en": "Complementary angles add to $90^\\circ$, so the complement is $90 - 63 = 27^\\circ$. Using $180$ instead would find the supplement ($117^\\circ$) — that mistake comes from confusing complementary (corner, $90^\\circ$) with supplementary (straight, $180^\\circ$).",
                "zh": "互余角相加为 $90^\\circ$，故余角为 $90 - 63 = 27^\\circ$。若误用 $180$ 会求出补角（$117^\\circ$）——这源于把互余（角落，$90^\\circ$）与互补（直线，$180^\\circ$）弄混。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the name $\\angle RST$, which point is the vertex of the angle?",
                "zh": "在名称 $\\angle RST$ 中，哪个点是这个角的顶点？"
              },
              "choices": [
                "$R$",
                "$S$",
                "$T$",
                "It cannot be determined from the name"
              ],
              "answer": 1,
              "explanation": {
                "en": "In a three-letter angle name, the middle letter is always the vertex, so $S$ is the vertex, with $R$ and $T$ on the two sides. Picking $R$ or $T$ treats an endpoint of a side as the vertex, which reverses the naming rule.",
                "zh": "在三字母的角名称中，中间的字母永远是顶点，所以 $S$ 是顶点，$R$ 与 $T$ 在两条边上。选 $R$ 或 $T$ 是把边上的一个端点当成顶点，颠倒了命名规则。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two angles form a linear pair. If one of them measures $124^\\circ$, what does the other measure?",
                "zh": "两个角构成一个线性对。若其中一个为 $124^\\circ$，另一个是多少度？"
              },
              "choices": [
                "$124^\\circ$",
                "$236^\\circ$",
                "$56^\\circ$",
                "$66^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A linear pair is supplementary, so the angles add to $180^\\circ$: the other is $180 - 124 = 56^\\circ$. Answering $124^\\circ$ would treat the pair as vertical (equal) rather than linear; answering $66^\\circ$ mistakenly uses $90^\\circ$ (complementary) instead of $180^\\circ$.",
                "zh": "线性对互补，故两角之和为 $180^\\circ$：另一个为 $180 - 124 = 56^\\circ$。答 $124^\\circ$ 是把这对角当成对顶（相等）而非线性对；答 $66^\\circ$ 则错用了 $90^\\circ$（互余）而不是 $180^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Ray $\\overrightarrow{BD}$ is in the interior of $\\angle ABC$. If $m\\angle ABD = 25^\\circ$ and $m\\angle DBC = 48^\\circ$, find $m\\angle ABC$ in degrees. Give a number.",
                "zh": "射线 $\\overrightarrow{BD}$ 在 $\\angle ABC$ 的内部。若 $m\\angle ABD = 25^\\circ$，$m\\angle DBC = 48^\\circ$，求 $m\\angle ABC$（度）。请给出数字。"
              },
              "answer": "73",
              "accept": [
                "73 degrees",
                "73.0",
                "$73^\\circ$"
              ],
              "explanation": {
                "en": "By the Angle Addition Postulate, the whole angle is the sum of its parts: $m\\angle ABC = 25 + 48 = 73^\\circ$. Subtracting the parts would wrongly treat one small angle as the whole.",
                "zh": "由角的和公理，整个角等于各部分之和：$m\\angle ABC = 25 + 48 = 73^\\circ$。若相减，就错把一个小角当成了整个角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two vertical angles have measures $(4x + 5)^\\circ$ and $(6x - 15)^\\circ$. What is the value of $x$?",
                "zh": "一对对顶角的度数为 $(4x + 5)^\\circ$ 与 $(6x - 15)^\\circ$。$x$ 的值是多少？"
              },
              "choices": [
                "$x = 19$",
                "$x = 17$",
                "$x = 1$",
                "$x = 10$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Vertical angles are congruent, so set the measures equal: $4x + 5 = 6x - 15$. Then $20 = 2x$, so $x = 10$. A common error is to add the two expressions and set them to $180$ (treating them as supplementary), which ignores that vertical angles are equal, not paired to a straight line.",
                "zh": "对顶角相等，故令两度数相等：$4x + 5 = 6x - 15$。则 $20 = 2x$，$x = 10$。常见错误是把两个表达式相加并令其为 $180$（当作互补），这忽略了对顶角是相等的，而不是构成一条直线的一对。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Ray $\\overrightarrow{BD}$ bisects $\\angle ABC$, and $m\\angle ABC = 96^\\circ$. Find $m\\angle ABD$ in degrees. Give a number.",
                "zh": "射线 $\\overrightarrow{BD}$ 平分 $\\angle ABC$，且 $m\\angle ABC = 96^\\circ$。求 $m\\angle ABD$（度）。请给出数字。"
              },
              "answer": "48",
              "accept": [
                "48 degrees",
                "48.0",
                "$48^\\circ$"
              ],
              "explanation": {
                "en": "A bisector cuts an angle into two congruent halves, so $m\\angle ABD = \\frac{1}{2}(96) = 48^\\circ$. Doubling instead of halving (getting $192^\\circ$) is impossible for a part of a $96^\\circ$ angle — a piece cannot exceed the whole.",
                "zh": "平分线把角分成两个全等的一半，所以 $m\\angle ABD = \\frac{1}{2}(96) = 48^\\circ$。若误翻倍（得 $192^\\circ$），对一个 $96^\\circ$ 的角的一部分来说是不可能的——部分不能超过整体。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A roof brace and a support beam meet so that the angle between them and its complement together fill a right angle. If the angle between them is $(2x)^\\circ$ and its complement is $(x + 30)^\\circ$, what is the measure of the larger of the two angles?",
                "zh": "一根屋顶斜撑与一根支撑梁相接，使它们之间的角与其余角合起来正好填满一个直角。若它们之间的角为 $(2x)^\\circ$，其余角为 $(x + 30)^\\circ$，则两角中较大者是多少度？"
              },
              "choices": [
                "$40^\\circ$",
                "$20^\\circ$",
                "$50^\\circ$",
                "$60^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Complementary angles add to $90^\\circ$: $2x + (x + 30) = 90$, so $3x + 30 = 90$, giving $3x = 60$ and $x = 20$. The angles are $2x = 40^\\circ$ and $x + 30 = 50^\\circ$; the larger is $50^\\circ$. Answering $40^\\circ$ reports the smaller angle, and answering $20^\\circ$ stops at $x$ instead of the angle measure.",
                "zh": "互余角相加为 $90^\\circ$：$2x + (x + 30) = 90$，即 $3x + 30 = 90$，得 $3x = 60$，$x = 20$。两角为 $2x = 40^\\circ$ 与 $x + 30 = 50^\\circ$；较大者为 $50^\\circ$。答 $40^\\circ$ 报的是较小的角，答 $20^\\circ$ 停在了 $x$ 而不是角的度数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Two lines cross at point $O$. One angle measures $(4x + 16)^\\circ$, and the angle adjacent to it (forming a linear pair with it) measures $(3x - 11)^\\circ$. What is the measure of the angle vertical to the first angle?",
                "zh": "荣誉挑战：两条直线相交于点 $O$。一个角为 $(4x + 16)^\\circ$，与它相邻（构成线性对）的角为 $(3x - 11)^\\circ$。求与第一个角相对的对顶角的度数。"
              },
              "choices": [
                "$64^\\circ$",
                "$58^\\circ$",
                "$90^\\circ$",
                "$116^\\circ$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The first angle and its adjacent angle form a linear pair, so they sum to $180^\\circ$: $(4x + 16) + (3x - 11) = 180$, giving $7x + 5 = 180$, so $7x = 175$ and $x = 25$. The first angle is $4(25) + 16 = 116^\\circ$. A vertical angle is congruent to the angle it is opposite, so the angle vertical to the first angle also measures $116^\\circ$. The trap value $64^\\circ$ is the linear-pair partner ($3(25) - 11 = 64^\\circ$, and $116 + 64 = 180$ ✓) — but the vertical angle equals the FIRST angle, not its supplement.",
                "zh": "第一个角与其相邻角构成线性对，故相加为 $180^\\circ$：$(4x + 16) + (3x - 11) = 180$，即 $7x + 5 = 180$，得 $7x = 175$，$x = 25$。第一个角为 $4(25) + 16 = 116^\\circ$。对顶角与它所对的角全等，所以与第一个角相对的对顶角也是 $116^\\circ$。陷阱值 $64^\\circ$ 是线性对的另一半（$3(25) - 11 = 64^\\circ$，且 $116 + 64 = 180$ ✓）——但对顶角等于第一个角，而不是它的补角。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "matrices-and-scalars",
      "title": "Unit 11: Matrices and Scalars",
      "titleZh": "第十一单元：矩阵与标量",
      "lessons": [
        {
          "id": "matrices-and-scalars",
          "title": "Matrices and Scalars",
          "titleZh": "矩阵与标量",
          "content": [
            {
              "type": "h2",
              "en": "Organizing Data in a Grid",
              "zh": "用网格整理数据"
            },
            {
              "type": "p",
              "en": "Imagine a Utah outdoor-gear company with stores in Salt Lake City, Provo, and Moab. Each store keeps track of how many tents, sleeping bags, and backpacks it has in stock. You could write nine separate numbers, but it is far clearer to arrange them in a rectangular grid — one row per store, one column per product. Such a grid of numbers, enclosed in brackets, is called a matrix (plural: matrices).",
              "zh": "设想一家犹他州的户外装备公司，在盐湖城、普若佛和摩押设有门店。每家门店都记录着自己库存的帐篷、睡袋和背包的数量。你可以写下九个分散的数字，但把它们排成一个矩形网格——每家门店一行、每种产品一列——会清晰得多。这样一个用方括号括起来的数字网格，就称为矩阵（复数：矩阵）。"
            },
            {
              "type": "math",
              "tex": "S = \\begin{bmatrix} 12 & 30 & 18 \\\\ 8 & 22 & 15 \\\\ 5 & 14 & 9 \\end{bmatrix}"
            },
            {
              "type": "p",
              "en": "Here each row is a store and each column is a product. The matrix $S$ turns a messy list into a compact table we can compute with. Matrices power spreadsheets, computer graphics, and the systems of equations you will meet later this year.",
              "zh": "这里每一行代表一家门店，每一列代表一种产品。矩阵 $S$ 把杂乱的清单变成了可以直接运算的紧凑表格。矩阵是电子表格、计算机图形以及你今年稍后将学到的方程组背后的强大工具。"
            },
            {
              "type": "h3",
              "en": "Dimensions: Rows × Columns",
              "zh": "维数：行 × 列"
            },
            {
              "type": "p",
              "en": "The size, or dimensions, of a matrix is written as (number of rows) × (number of columns), read \"rows by columns.\" The matrix $S$ above has 3 rows and 3 columns, so it is a $3 \\times 3$ matrix. A matrix with $m$ rows and $n$ columns is called an $m \\times n$ matrix. Order matters: a $2 \\times 3$ matrix (2 rows, 3 columns) is not the same shape as a $3 \\times 2$ matrix.",
              "zh": "矩阵的大小或维数写作（行数）×（列数），读作\"行乘列\"。上面的矩阵 $S$ 有 3 行 3 列，所以它是一个 $3 \\times 3$ 矩阵。一个有 $m$ 行 $n$ 列的矩阵称为 $m \\times n$ 矩阵。顺序很重要：$2 \\times 3$ 矩阵（2 行 3 列）与 $3 \\times 2$ 矩阵（3 行 2 列）的形状并不相同。"
            },
            {
              "type": "note",
              "en": "Common mistake: giving dimensions as columns × rows. Always state rows first, then columns. A matrix with 4 rows and 1 column is $4 \\times 1$, not $1 \\times 4$. Reversing them describes a completely different grid.",
              "zh": "常见错误：把维数写成列 × 行。务必先写行数，再写列数。一个有 4 行 1 列的矩阵是 $4 \\times 1$，而不是 $1 \\times 4$。颠倒顺序描述的是一个完全不同的网格。"
            },
            {
              "type": "h3",
              "en": "Elements and Notation",
              "zh": "元素与记号"
            },
            {
              "type": "p",
              "en": "Each number inside a matrix is called an element (or entry). We name a matrix with a capital letter, such as $A$, and refer to the element in row $i$ and column $j$ as $a_{ij}$ — a lowercase letter with the row number first, then the column number. For example, $a_{23}$ is the element in the 2nd row and 3rd column.",
              "zh": "矩阵中的每个数字称为元素（或称元）。我们用大写字母（如 $A$）给矩阵命名，并把第 $i$ 行第 $j$ 列的元素记作 $a_{ij}$——一个小写字母，先写行号，再写列号。例如，$a_{23}$ 是第 2 行第 3 列的元素。"
            },
            {
              "type": "math",
              "tex": "A = \\begin{bmatrix} 4 & -1 & 6 \\\\ 0 & 7 & -3 \\end{bmatrix}, \\quad a_{12} = -1, \\quad a_{23} = -3"
            },
            {
              "type": "p",
              "en": "In the inventory matrix $S$, the element $s_{31} = 5$ tells us the Moab store (row 3) has 5 tents (column 1). Reading an element is just finding the intersection of its row and column.",
              "zh": "在库存矩阵 $S$ 中，元素 $s_{31} = 5$ 告诉我们摩押门店（第 3 行）有 5 顶帐篷（第 1 列）。读取一个元素，就是找到它所在行与列的交叉处。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Dimensions and elements",
                "zh": "例题 1：维数与元素"
              },
              "problem": {
                "en": "Give the dimensions of $B = \\begin{bmatrix} 2 & 9 & 5 & 1 \\\\ 6 & 0 & 3 & 8 \\end{bmatrix}$ and state the value of $b_{14}$.",
                "zh": "写出 $B = \\begin{bmatrix} 2 & 9 & 5 & 1 \\\\ 6 & 0 & 3 & 8 \\end{bmatrix}$ 的维数，并给出 $b_{14}$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Count the rows, then the columns: there are 2 rows and 4 columns, so $B$ is a $2 \\times 4$ matrix.",
                  "zh": "先数行，再数列：有 2 行、4 列，所以 $B$ 是一个 $2 \\times 4$ 矩阵。"
                },
                {
                  "type": "p",
                  "en": "The element $b_{14}$ is in row 1, column 4. Following row 1 across to the 4th column gives $1$.",
                  "zh": "元素 $b_{14}$ 位于第 1 行、第 4 列。沿第 1 行数到第 4 列，得到 $1$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "When Are Two Matrices Equal?",
              "zh": "两个矩阵何时相等？"
            },
            {
              "type": "p",
              "en": "Two matrices are equal only when they have the same dimensions AND every pair of corresponding elements is equal. It is not enough to contain the same numbers — they must sit in exactly the same positions. This lets us solve for unknowns: if two equal matrices have a variable in one spot, we set it equal to the matching element.",
              "zh": "两个矩阵相等，当且仅当它们的维数相同，并且每一对对应元素都相等。仅仅含有相同的数字是不够的——它们必须处在完全相同的位置。这一点可以用来求未知数：如果两个相等的矩阵在某个位置有一个变量，我们就把它与对应的元素相等。"
            },
            {
              "type": "math",
              "tex": "\\begin{bmatrix} x & 7 \\\\ 3 & y \\end{bmatrix} = \\begin{bmatrix} 5 & 7 \\\\ 3 & -2 \\end{bmatrix} \\quad\\Longrightarrow\\quad x = 5,\\; y = -2"
            },
            {
              "type": "h3",
              "en": "Adding and Subtracting Matrices",
              "zh": "矩阵的加法与减法"
            },
            {
              "type": "p",
              "en": "To add or subtract two matrices, they must have the same dimensions. Then you simply add (or subtract) the corresponding elements — the ones in matching positions. The result has the same dimensions as the originals. For example, if last month's sales and this month's sales are stored in matrices of the same shape, adding them gives a two-month total.",
              "zh": "要对两个矩阵做加法或减法，它们必须具有相同的维数。然后你只需把对应位置的元素相加（或相减）即可。结果的维数与原矩阵相同。例如，如果上个月和这个月的销量分别存放在形状相同的矩阵中，把它们相加就得到两个月的总销量。"
            },
            {
              "type": "math",
              "tex": "\\begin{bmatrix} 2 & 5 \\\\ 1 & 4 \\end{bmatrix} + \\begin{bmatrix} 3 & -1 \\\\ 6 & 0 \\end{bmatrix} = \\begin{bmatrix} 5 & 4 \\\\ 7 & 4 \\end{bmatrix}"
            },
            {
              "type": "note",
              "en": "Common mistake: trying to add matrices of different sizes. A $2 \\times 3$ matrix and a $3 \\times 2$ matrix cannot be added — there is no element to pair with. If the dimensions do not match exactly, the sum is simply undefined.",
              "zh": "常见错误：试图把不同大小的矩阵相加。$2 \\times 3$ 矩阵与 $3 \\times 2$ 矩阵不能相加——找不到可以配对的元素。如果维数不完全一致，其和根本无定义。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Combining inventory changes",
                "zh": "例题 2：合并库存变化"
              },
              "problem": {
                "en": "A store has stock $\\begin{bmatrix} 12 & 30 \\\\ 8 & 22 \\end{bmatrix}$ (tents, bags for two branches). A shipment adds $\\begin{bmatrix} 4 & 10 \\\\ 6 & 5 \\end{bmatrix}$. Find the new stock matrix.",
                "zh": "某门店库存为 $\\begin{bmatrix} 12 & 30 \\\\ 8 & 22 \\end{bmatrix}$（两个分店的帐篷、睡袋）。一批到货补充了 $\\begin{bmatrix} 4 & 10 \\\\ 6 & 5 \\end{bmatrix}$。求新的库存矩阵。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Both are $2 \\times 2$, so we add corresponding elements:",
                  "zh": "两者都是 $2 \\times 2$ 矩阵，所以把对应元素相加："
                },
                {
                  "type": "math",
                  "tex": "\\begin{bmatrix} 12+4 & 30+10 \\\\ 8+6 & 22+5 \\end{bmatrix} = \\begin{bmatrix} 16 & 40 \\\\ 14 & 27 \\end{bmatrix}"
                },
                {
                  "type": "p",
                  "en": "The new stock matrix is $\\begin{bmatrix} 16 & 40 \\\\ 14 & 27 \\end{bmatrix}$.",
                  "zh": "新的库存矩阵为 $\\begin{bmatrix} 16 & 40 \\\\ 14 & 27 \\end{bmatrix}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Scalar Multiplication",
              "zh": "标量乘法"
            },
            {
              "type": "p",
              "en": "A single number (not a matrix) is called a scalar. To multiply a matrix by a scalar, multiply every element of the matrix by that number. The dimensions stay the same. This models real situations: multiplying an order matrix by $2$ doubles every quantity, and multiplying a price matrix by $0.8$ applies a 20% discount to every price.",
              "zh": "一个单独的数（不是矩阵）称为标量。要用一个标量去乘矩阵，就把矩阵的每一个元素都乘以该数。维数保持不变。这可以刻画现实情形：把订货矩阵乘以 $2$ 会使每个数量翻倍，把价格矩阵乘以 $0.8$ 则相当于对每个价格打八折（减价 20%）。"
            },
            {
              "type": "math",
              "tex": "3 \\begin{bmatrix} 2 & -1 \\\\ 0 & 5 \\end{bmatrix} = \\begin{bmatrix} 3\\cdot 2 & 3\\cdot(-1) \\\\ 3\\cdot 0 & 3\\cdot 5 \\end{bmatrix} = \\begin{bmatrix} 6 & -3 \\\\ 0 & 15 \\end{bmatrix}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: A discount and a combination",
                "zh": "例题 3：折扣与综合运算"
              },
              "problem": {
                "en": "Prices are $P = \\begin{bmatrix} 50 & 80 \\\\ 40 & 100 \\end{bmatrix}$. During a sale every price is cut to 90% of its value. Then a $\\$5$ fee is added to each item, given by $F = \\begin{bmatrix} 5 & 5 \\\\ 5 & 5 \\end{bmatrix}$. Compute $0.9P + F$.",
                "zh": "价格为 $P = \\begin{bmatrix} 50 & 80 \\\\ 40 & 100 \\end{bmatrix}$。促销期间每个价格降为原价的 90%。随后每件商品加收 $\\$5$ 的手续费，记为 $F = \\begin{bmatrix} 5 & 5 \\\\ 5 & 5 \\end{bmatrix}$。计算 $0.9P + F$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First apply the scalar $0.9$ to every element of $P$:",
                  "zh": "先把标量 $0.9$ 乘到 $P$ 的每个元素上："
                },
                {
                  "type": "math",
                  "tex": "0.9P = \\begin{bmatrix} 45 & 72 \\\\ 36 & 90 \\end{bmatrix}"
                },
                {
                  "type": "p",
                  "en": "Now add $F$ element by element:",
                  "zh": "再把 $F$ 逐元素相加："
                },
                {
                  "type": "math",
                  "tex": "0.9P + F = \\begin{bmatrix} 45+5 & 72+5 \\\\ 36+5 & 90+5 \\end{bmatrix} = \\begin{bmatrix} 50 & 77 \\\\ 41 & 95 \\end{bmatrix}"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: scalar multiplication and matrix addition/subtraction all work element by element, so they follow the same rules as ordinary numbers — you can factor a scalar out, like $2A + 2B = 2(A+B)$. But multiplying two matrices together is a different, more involved operation (it does NOT just multiply corresponding elements) and you will learn it in a later course.",
              "zh": "考试提示：标量乘法与矩阵的加减都是逐元素进行的，因此遵循与普通数相同的规则——你可以把标量提取出来，例如 $2A + 2B = 2(A+B)$。但把两个矩阵相乘则是另一种更复杂的运算（它并不是简单地把对应元素相乘），你将在以后的课程中学到它。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What are the dimensions of the matrix $\\begin{bmatrix} 3 & 1 & 7 \\\\ 5 & 2 & 9 \\end{bmatrix}$?",
                "zh": "矩阵 $\\begin{bmatrix} 3 & 1 & 7 \\\\ 5 & 2 & 9 \\end{bmatrix}$ 的维数是多少？"
              },
              "choices": [
                "$3 \\times 2$",
                "$6 \\times 1$",
                "$2 \\times 3$",
                "$2 \\times 2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Dimensions are written rows × columns. This matrix has 2 rows and 3 columns, so it is $2 \\times 3$. Writing $3 \\times 2$ reverses the order and describes the wrong shape (3 rows, 2 columns).",
                "zh": "维数按行 × 列书写。此矩阵有 2 行 3 列，所以是 $2 \\times 3$。写成 $3 \\times 2$ 则颠倒了顺序，描述的是错误的形状（3 行 2 列）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $A = \\begin{bmatrix} 4 & -6 & 2 \\\\ 9 & 0 & 7 \\end{bmatrix}$, what is the value of the element $a_{13}$? Give an integer.",
                "zh": "对于 $A = \\begin{bmatrix} 4 & -6 & 2 \\\\ 9 & 0 & 7 \\end{bmatrix}$，元素 $a_{13}$ 的值是多少？请以整数作答。"
              },
              "answer": "2",
              "accept": [
                "2",
                "+2"
              ],
              "explanation": {
                "en": "The subscript gives row first, then column: $a_{13}$ is row 1, column 3. Following the first row to its third entry gives $2$. A common slip is reading it as column 1, row 3, which would grab a wrong number.",
                "zh": "下标先给行、再给列：$a_{13}$ 是第 1 行第 3 列。沿第一行数到第三个元素，得到 $2$。常见的失误是把它读成第 1 列第 3 行，那样会取到错误的数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about adding a $2 \\times 3$ matrix and a $3 \\times 2$ matrix is correct?",
                "zh": "关于把一个 $2 \\times 3$ 矩阵与一个 $3 \\times 2$ 矩阵相加，下列哪种说法正确？"
              },
              "choices": [
                "The sum is undefined because the dimensions are different",
                "The sum is a $2 \\times 2$ matrix",
                "You add the totals of all elements",
                "The sum is a $5 \\times 5$ matrix"
              ],
              "answer": 0,
              "explanation": {
                "en": "Matrix addition requires identical dimensions so that every element has a partner in the same position. A $2 \\times 3$ and a $3 \\times 2$ do not match, so the sum simply does not exist. The idea of adding element totals or reshaping the result ignores the position-by-position rule.",
                "zh": "矩阵加法要求维数完全相同，这样每个元素才能在相同位置找到配对。$2 \\times 3$ 与 $3 \\times 2$ 不匹配，所以其和根本不存在。把所有元素的总和相加或改变结果形状的想法，都忽视了逐位置对应的规则。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Compute $\\begin{bmatrix} 7 & 2 \\\\ 3 & 5 \\end{bmatrix} - \\begin{bmatrix} 4 & 6 \\\\ 1 & 5 \\end{bmatrix}$. Enter the element in row 1, column 2 of the result as an integer.",
                "zh": "计算 $\\begin{bmatrix} 7 & 2 \\\\ 3 & 5 \\end{bmatrix} - \\begin{bmatrix} 4 & 6 \\\\ 1 & 5 \\end{bmatrix}$。将结果中第 1 行第 2 列的元素以整数形式填入。"
              },
              "answer": "-4",
              "accept": [
                "-4",
                "-4.0"
              ],
              "explanation": {
                "en": "Subtract corresponding elements. Row 1, column 2 comes from $2 - 6 = -4$. A common error is subtracting in the wrong direction ($6 - 2 = 4$); order matters in subtraction.",
                "zh": "把对应元素相减。第 1 行第 2 列由 $2 - 6 = -4$ 得到。常见错误是减反了方向（$6 - 2 = 4$）；减法中顺序很重要。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $4\\begin{bmatrix} 1 & -2 \\\\ 0 & 3 \\end{bmatrix}$?",
                "zh": "$4\\begin{bmatrix} 1 & -2 \\\\ 0 & 3 \\end{bmatrix}$ 等于多少？"
              },
              "choices": [
                "$\\begin{bmatrix} 4 & -2 \\\\ 0 & 3 \\end{bmatrix}$",
                "$\\begin{bmatrix} 4 & 2 \\\\ 4 & 7 \\end{bmatrix}$",
                "$\\begin{bmatrix} 5 & 2 \\\\ 4 & 7 \\end{bmatrix}$",
                "$\\begin{bmatrix} 4 & -8 \\\\ 0 & 12 \\end{bmatrix}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Scalar multiplication multiplies EVERY element by 4: $4\\cdot 1=4$, $4\\cdot(-2)=-8$, $4\\cdot 0=0$, $4\\cdot 3=12$. Multiplying only the first element, or adding 4 to each element instead of multiplying, both misapply the rule.",
                "zh": "标量乘法要把每一个元素都乘以 4：$4\\cdot 1=4$、$4\\cdot(-2)=-8$、$4\\cdot 0=0$、$4\\cdot 3=12$。只乘第一个元素，或把每个元素加上 4 而非相乘，都是对规则的误用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Matrices $\\begin{bmatrix} x & 8 \\\\ 3 & -1 \\end{bmatrix}$ and $\\begin{bmatrix} 6 & 8 \\\\ 3 & -1 \\end{bmatrix}$ are equal. What is the value of $x$? Give an integer.",
                "zh": "矩阵 $\\begin{bmatrix} x & 8 \\\\ 3 & -1 \\end{bmatrix}$ 与 $\\begin{bmatrix} 6 & 8 \\\\ 3 & -1 \\end{bmatrix}$ 相等。$x$ 的值是多少？请以整数作答。"
              },
              "answer": "6",
              "accept": [
                "6",
                "+6"
              ],
              "explanation": {
                "en": "Equal matrices have equal corresponding elements. The entry in row 1, column 1 must match, so $x = 6$. Equality is checked position by position, not by rearranging numbers.",
                "zh": "相等的矩阵对应元素相等。第 1 行第 1 列的元素必须相同，所以 $x = 6$。相等性是逐位置检验的，而不是把数字重新排列。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A bakery records daily muffin and cookie sales in $\\begin{bmatrix} 20 & 35 \\\\ 18 & 40 \\end{bmatrix}$ (two shops). To estimate a full week they multiply by 7. Which operation and result are correct?",
                "zh": "一家面包店在 $\\begin{bmatrix} 20 & 35 \\\\ 18 & 40 \\end{bmatrix}$ 中记录两家店每天松饼和饼干的销量。为估算整周，他们乘以 7。哪种运算及结果是正确的？"
              },
              "choices": [
                "Add 7 to each element, giving $\\begin{bmatrix} 27 & 42 \\\\ 25 & 47 \\end{bmatrix}$",
                "Scalar multiply by 7, giving $\\begin{bmatrix} 140 & 245 \\\\ 126 & 280 \\end{bmatrix}$",
                "Multiply only the first row by 7",
                "The operation is undefined for a $2 \\times 2$ matrix"
              ],
              "answer": 1,
              "explanation": {
                "en": "Multiplying daily sales by the scalar 7 scales every element to a weekly estimate: $7\\cdot 20=140$, $7\\cdot 35=245$, $7\\cdot 18=126$, $7\\cdot 40=280$. Adding 7 changes each value by only 7 instead of multiplying, and scaling just one row ignores the second shop.",
                "zh": "把每天的销量乘以标量 7，会把每个元素放大为整周的估计值：$7\\cdot 20=140$、$7\\cdot 35=245$、$7\\cdot 18=126$、$7\\cdot 40=280$。加 7 只是把每个值增加 7 而非相乘，而只放大一行则忽略了第二家店。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: For $A = \\begin{bmatrix} 3 & -1 \\\\ 2 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 5 & 0 \\\\ -2 & 1 \\end{bmatrix}$, compute $2A - B$. Enter the element in row 2, column 1 of the result as an integer.",
                "zh": "荣誉挑战：设 $A = \\begin{bmatrix} 3 & -1 \\\\ 2 & 4 \\end{bmatrix}$，$B = \\begin{bmatrix} 5 & 0 \\\\ -2 & 1 \\end{bmatrix}$，计算 $2A - B$。将结果中第 2 行第 1 列的元素以整数形式填入。"
              },
              "answer": "6",
              "accept": [
                "6",
                "+6"
              ],
              "explanation": {
                "en": "Combine the operations element by element. First $2A$ scales every element by 2, so row 2, column 1 becomes $2\\cdot 2 = 4$. Then subtract the matching element of $B$, which is $-2$: $4 - (-2) = 6$. Forgetting to double first, or mishandling the double negative, are the usual slips.",
                "zh": "逐元素地综合运算。先做 $2A$，把每个元素乘以 2，于是第 2 行第 1 列变为 $2\\cdot 2 = 4$。再减去 $B$ 中对应的元素 $-2$：$4 - (-2) = 6$。忘记先乘以 2，或处理不好双重负号，都是常见的失误。"
              }
            }
          ]
        }
      ]
    }
  ]
}
