export default {
  "functions-transformations/parent-functions-transformations": [
    {
      "type": "mc",
      "question": {
        "en": "Which function is the parent absolute value function?",
        "zh": "下列哪个是绝对值母函数？"
      },
      "choices": [
        "$f(x)=|x|$",
        "$f(x)=x^2$",
        "$f(x)=\\sqrt{x}$",
        "$f(x)=x^3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The parent absolute value function is $f(x)=|x|$, whose V-shaped graph has a vertex at the origin. Choosing $x^2$ confuses the V-shape of absolute value with the U-shape (parabola) of the quadratic parent.",
        "zh": "绝对值母函数是 $f(x)=|x|$，其 V 形图像顶点在原点。选 $x^2$ 是把绝对值的 V 形与二次母函数的抛物线 U 形混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compared with the parent parabola $f(x)=x^2$, the graph of $g(x)=(x-4)^2$ is shifted:",
        "zh": "与母抛物线 $f(x)=x^2$ 相比，$g(x)=(x-4)^2$ 的图像发生了怎样的平移？"
      },
      "choices": [
        "left 4 units",
        "right 4 units",
        "up 4 units",
        "down 4 units"
      ],
      "answer": 1,
      "explanation": {
        "en": "In $f(x-h)$ a subtraction inside the parentheses shifts the graph right by $h$, so $(x-4)^2$ moves right 4. The common error is reading the minus sign as a leftward shift; inside-the-function changes act opposite to their sign.",
        "zh": "在 $f(x-h)$ 中，括号内的减法使图像向右平移 $h$，所以 $(x-4)^2$ 向右移 4。常见错误是把负号当成向左移；括号内的变化方向与符号相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=x^2-5$ is the parent parabola shifted:",
        "zh": "$g(x)=x^2-5$ 的图像是母抛物线经过怎样的平移？"
      },
      "choices": [
        "up 5 units",
        "right 5 units",
        "down 5 units",
        "left 5 units"
      ],
      "answer": 2,
      "explanation": {
        "en": "Adding $k$ outside the function, here $-5$, shifts vertically; a negative moves the graph down 5. Treating $-5$ as a horizontal move mixes up outside changes (vertical) with inside changes (horizontal).",
        "zh": "在函数外加 $k$（此处为 $-5$）产生竖直平移；负数使图像向下移 5。把 $-5$ 当作水平移动是混淆了外部变化（竖直）与内部变化（水平）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which describes the transformation from $f(x)=x^2$ to $g(x)=-x^2$?",
        "zh": "从 $f(x)=x^2$ 到 $g(x)=-x^2$ 是哪种变换？"
      },
      "choices": [
        "shift down 1 unit",
        "reflection over the $y$-axis",
        "vertical stretch",
        "reflection over the $x$-axis"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiplying the whole output by $-1$ gives $-f(x)$, a reflection over the $x$-axis (outputs flip sign). Reflecting over the $y$-axis would be $f(-x)$, which negates the input, not the output.",
        "zh": "把整个输出乘以 $-1$ 得到 $-f(x)$，即关于 $x$ 轴的反射（输出变号）。关于 $y$ 轴的反射是 $f(-x)$，是把输入变号而非输出。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression represents a reflection of $f(x)$ over the $y$-axis?",
        "zh": "下列哪个表达式表示 $f(x)$ 关于 $y$ 轴的反射？"
      },
      "choices": [
        "$f(-x)$",
        "$-f(x)$",
        "$f(x-1)$",
        "$f(x)+1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Replacing $x$ with $-x$ gives $f(-x)$, reflecting the graph across the $y$-axis. Picking $-f(x)$ negates the output, which reflects over the $x$-axis instead.",
        "zh": "把 $x$ 替换为 $-x$ 得到 $f(-x)$，图像关于 $y$ 轴反射。选 $-f(x)$ 是把输出变号，那是关于 $x$ 轴的反射。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of the parent square-root function $f(x)=\\sqrt{x}$?",
        "zh": "平方根母函数 $f(x)=\\sqrt{x}$ 的定义域是什么？"
      },
      "choices": [
        "$x\\le0$",
        "$x\\ge0$",
        "all real numbers",
        "$x>0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "You cannot take the real square root of a negative number, and $\\sqrt{0}=0$ is allowed, so the domain is $x\\ge0$. Excluding $0$ (writing $x>0$) wrongly drops the valid input $x=0$.",
        "zh": "负数没有实数平方根，而 $\\sqrt{0}=0$ 是允许的，所以定义域是 $x\\ge0$。写成 $x>0$ 错误地排除了有效输入 $x=0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of the parent quadratic function $f(x)=x^2$?",
        "zh": "二次母函数 $f(x)=x^2$ 的值域是什么？"
      },
      "choices": [
        "$y\\le0$",
        "all real numbers",
        "$y\\ge0$",
        "$y>0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A square is never negative and reaches $0$ at $x=0$, so outputs satisfy $y\\ge0$. Saying 'all real numbers' forgets that $x^2$ can never produce a negative value.",
        "zh": "平方永远非负且在 $x=0$ 时取到 $0$，所以输出满足 $y\\ge0$。回答“全体实数”忽略了 $x^2$ 不可能得到负值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does $g(x)=3x^2$ transform the parent parabola $f(x)=x^2$?",
        "zh": "$g(x)=3x^2$ 对母抛物线 $f(x)=x^2$ 做了什么变换？"
      },
      "choices": [
        "shift up 3 units",
        "horizontal shift",
        "reflection",
        "vertical stretch by factor 3"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiplying the output by $a=3$ (with $a>1$) stretches the graph vertically by a factor of 3, making it narrower. Reading the 3 as 'shift up 3' confuses a multiplier with an added constant.",
        "zh": "把输出乘以 $a=3$（$a>1$）使图像竖直方向拉伸 3 倍，变得更窄。把 3 当作“上移 3”是混淆了乘数与加常数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of the parent cubic function $f(x)=x^3$?",
        "zh": "三次母函数 $f(x)=x^3$ 的定义域是什么？"
      },
      "choices": [
        "all real numbers",
        "$y\\ge0$",
        "$x\\ne0$",
        "$x\\ge0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "You can cube any real number, so the domain (and range) of $x^3$ is all real numbers. Restricting to $x\\ge0$ borrows the square-root domain, which does not apply to a cubic.",
        "zh": "任何实数都可以立方，所以 $x^3$ 的定义域（和值域）都是全体实数。限制为 $x\\ge0$ 是套用了平方根的定义域，对三次函数并不适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=|x+2|-3$ is the parent $|x|$ shifted:",
        "zh": "$g(x)=|x+2|-3$ 的图像是母函数 $|x|$ 经过怎样的平移？"
      },
      "choices": [
        "right 2, up 3",
        "left 2, down 3",
        "left 2, up 3",
        "right 2, down 3"
      ],
      "answer": 1,
      "explanation": {
        "en": "The $+2$ inside acts opposite to its sign, shifting left 2; the $-3$ outside shifts down 3. Reading $+2$ as 'right 2' misapplies the inside-opposite rule.",
        "zh": "括号内的 $+2$ 方向与符号相反，向左移 2；括号外的 $-3$ 向下移 3。把 $+2$ 读作“右移 2”是弄错了“括号内相反”的规则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $k>0$, the transformation $f(x)+k$ produces which change?",
        "zh": "当 $k>0$ 时，变换 $f(x)+k$ 产生哪种变化？"
      },
      "choices": [
        "vertical shift down",
        "horizontal shift right",
        "vertical shift up",
        "reflection over the $x$-axis"
      ],
      "answer": 2,
      "explanation": {
        "en": "Adding a positive constant outside the function raises every output, shifting the graph up. Calling it a horizontal shift confuses outside changes (vertical) with inside changes (horizontal).",
        "zh": "在函数外加正常数使每个输出增大，图像上移。称之为水平平移是混淆了外部变化（竖直）与内部变化（水平）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $g(x)=(x-3)^2+2$?",
        "zh": "$g(x)=(x-3)^2+2$ 的顶点是什么？"
      },
      "choices": [
        "$(-3,2)$",
        "$(3,-2)$",
        "$(-3,-2)$",
        "$(3,2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "In vertex form $(x-h)^2+k$ the vertex is $(h,k)=(3,2)$; the inside $-3$ means $h=+3$. Writing $(-3,2)$ copies the sign inside the parentheses instead of solving $x-h=0$.",
        "zh": "在顶点式 $(x-h)^2+k$ 中，顶点为 $(h,k)=(3,2)$；括号内的 $-3$ 表示 $h=+3$。写成 $(-3,2)$ 是照抄括号内符号，而非解 $x-h=0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $g(x)=(x-3)^2+5$, what is the $x$-coordinate of the vertex?",
        "zh": "对于 $g(x)=(x-3)^2+5$，顶点的 $x$ 坐标是多少？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Vertex form $(x-h)^2+k$ has $x$-coordinate $h$; since $x-3$ gives $h=3$, the vertex $x$-value is 3.",
        "zh": "顶点式 $(x-h)^2+k$ 的 $x$ 坐标为 $h$；由 $x-3$ 得 $h=3$，所以顶点 $x$ 值为 3。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $f(x)=|x|+6$ is shifted up how many units from the parent $|x|$?",
        "zh": "$f(x)=|x|+6$ 的图像相对母函数 $|x|$ 向上平移了多少个单位？"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "The $+6$ added outside the function raises every output by 6, a vertical shift up of 6 units.",
        "zh": "在函数外加的 $+6$ 使每个输出增加 6，即向上平移 6 个单位。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the parent square-root function at $x=9$: find $\\sqrt{9}$.",
        "zh": "在 $x=9$ 处求平方根母函数的值：求 $\\sqrt{9}$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The principal square root of 9 is 3 because $3^2=9$. The square-root function returns the nonnegative root.",
        "zh": "9 的算术平方根是 3，因为 $3^2=9$。平方根函数取非负根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the parent cubic function at $x=-2$: find $(-2)^3$.",
        "zh": "在 $x=-2$ 处求三次母函数的值：求 $(-2)^3$。"
      },
      "answer": "-8",
      "accept": [
        "-8",
        "-8.0"
      ],
      "explanation": {
        "en": "$(-2)^3=(-2)(-2)(-2)=-8$; an odd power keeps the negative sign.",
        "zh": "$(-2)^3=(-2)(-2)(-2)=-8$；奇数次幂保留负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $g(x)=2|x|$, what is the vertical stretch factor?",
        "zh": "对于 $g(x)=2|x|$，竖直拉伸因子是多少？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0"
      ],
      "explanation": {
        "en": "The multiplier $a=2$ outside the function stretches the graph vertically by a factor of 2.",
        "zh": "函数外的乘数 $a=2$ 使图像竖直方向拉伸 2 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $f(x)=(x+5)^2$ is shifted left how many units from the parent parabola?",
        "zh": "$f(x)=(x+5)^2$ 的图像相对母抛物线向左平移了多少个单位？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The $+5$ inside acts opposite to its sign, shifting the graph left 5 units.",
        "zh": "括号内的 $+5$ 方向与符号相反，使图像向左平移 5 个单位。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the minimum $y$-value (range minimum) of $g(x)=x^2+4$?",
        "zh": "$g(x)=x^2+4$ 的最小 $y$ 值（值域下界）是多少？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0"
      ],
      "explanation": {
        "en": "Since $x^2\\ge0$ with minimum 0 at $x=0$, the smallest output is $0+4=4$.",
        "zh": "由于 $x^2\\ge0$ 且在 $x=0$ 时最小为 0，所以最小输出为 $0+4=4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $g(x)=-x^2$ at $x=3$.",
        "zh": "在 $x=3$ 处求 $g(x)=-x^2$ 的值。"
      },
      "answer": "-9",
      "accept": [
        "-9",
        "-9.0"
      ],
      "explanation": {
        "en": "Square first, then negate: $-(3)^2=-(9)=-9$. The negative applies to the squared result, not to the base.",
        "zh": "先平方再取负：$-(3)^2=-(9)=-9$。负号作用于平方后的结果，而非底数。"
      }
    }
  ],
  "functions-transformations/inverses-composition": [
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=2x+1$ and $g(x)=x-3$, find $(f\\circ g)(x)$.",
        "zh": "若 $f(x)=2x+1$，$g(x)=x-3$，求 $(f\\circ g)(x)$。"
      },
      "choices": [
        "$2x-5$",
        "$2x-2$",
        "$2x+4$",
        "$x-2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$(f\\circ g)(x)=f(g(x))=2(x-3)+1=2x-6+1=2x-5$. Getting $2x-2$ comes from adding instead of substituting, forgetting to distribute the 2 over the $-3$.",
        "zh": "$(f\\circ g)(x)=f(g(x))=2(x-3)+1=2x-6+1=2x-5$。得到 $2x-2$ 是因为把两式相加而非代入，忘了把 2 分配到 $-3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does the composition $(f\\circ g)(x)$ mean?",
        "zh": "复合 $(f\\circ g)(x)$ 表示什么？"
      },
      "choices": [
        "$g(f(x))$",
        "$f(g(x))$",
        "$f(x)\\cdot g(x)$",
        "$f(x)+g(x)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$(f\\circ g)(x)$ means apply $g$ first, then $f$: $f(g(x))$. Choosing $g(f(x))$ reverses the order; the function closest to $x$ is applied first.",
        "zh": "$(f\\circ g)(x)$ 表示先用 $g$ 再用 $f$，即 $f(g(x))$。选 $g(f(x))$ 是把顺序弄反了；离 $x$ 最近的函数先作用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=x+7$?",
        "zh": "$f(x)=x+7$ 的反函数是什么？"
      },
      "choices": [
        "$x+7$",
        "$7-x$",
        "$x-7$",
        "$\\frac{x}{7}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Swap and solve: $x=y+7$ gives $y=x-7$, the inverse. Writing $7-x$ negates $x$ as well, but undoing '$+7$' only requires subtracting 7.",
        "zh": "交换变量并求解：$x=y+7$ 得 $y=x-7$，即反函数。写成 $7-x$ 把 $x$ 也变号了，但抵消“$+7$”只需减去 7。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=3x$?",
        "zh": "$f(x)=3x$ 的反函数是什么？"
      },
      "choices": [
        "$3x$",
        "$x-3$",
        "$\\frac{3}{x}$",
        "$\\frac{x}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "From $x=3y$ we get $y=\\frac{x}{3}$; multiplication by 3 is undone by dividing by 3. The form $\\frac{3}{x}$ is a reciprocal, not the inverse operation.",
        "zh": "由 $x=3y$ 得 $y=\\frac{x}{3}$；乘以 3 用除以 3 来抵消。$\\frac{3}{x}$ 是倒数，并非逆运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f$ and $g$ are inverse functions, which statement must be true?",
        "zh": "若 $f$ 与 $g$ 互为反函数，下列哪项一定成立？"
      },
      "choices": [
        "$f(g(x))=x$",
        "$f(g(x))=0$",
        "$f(g(x))=1$",
        "$f(g(x))=g(x)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Inverse functions undo each other, so $f(g(x))=x$ for all valid $x$. Expecting $f(g(x))=1$ confuses composition with a product equaling one.",
        "zh": "反函数彼此抵消，所以对所有有效的 $x$ 有 $f(g(x))=x$。期望 $f(g(x))=1$ 是把复合与乘积等于 1 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A function has an inverse that is also a function exactly when the function is:",
        "zh": "一个函数的反函数也是函数，当且仅当该函数是："
      },
      "choices": [
        "even",
        "one-to-one",
        "increasing only",
        "continuous"
      ],
      "answer": 1,
      "explanation": {
        "en": "Only a one-to-one function (passing the horizontal line test) has an inverse that is itself a function. 'Even' functions like $x^2$ are not one-to-one and fail this.",
        "zh": "只有一一对应（通过水平线检验）的函数，其反函数才是函数。像 $x^2$ 这样的偶函数不是一一对应，不满足此条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does $f(x)=x^2$ over all real numbers fail to have an inverse function?",
        "zh": "为什么定义在全体实数上的 $f(x)=x^2$ 没有反函数？"
      },
      "choices": [
        "it is undefined",
        "it is not continuous",
        "it fails the horizontal line test",
        "it fails the vertical line test"
      ],
      "answer": 2,
      "explanation": {
        "en": "Two inputs (e.g. $2$ and $-2$) give the same output 4, so a horizontal line hits the graph twice — it fails the horizontal line test and is not one-to-one. It does pass the vertical line test, which only confirms it is a function.",
        "zh": "两个输入（如 $2$ 和 $-2$）给出相同输出 4，所以水平线与图像相交两次——未通过水平线检验，不是一一对应。它能通过垂直线检验，那只说明它是函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $f(x)=x-4$ and $g(x)=x+4$, find $(g\\circ f)(x)$.",
        "zh": "已知 $f(x)=x-4$，$g(x)=x+4$，求 $(g\\circ f)(x)$。"
      },
      "choices": [
        "$2x$",
        "$x-8$",
        "$x+8$",
        "$x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(g\\circ f)(x)=g(f(x))=(x-4)+4=x$; these are inverses so they cancel. Getting $2x$ comes from adding the two rules instead of substituting one into the other.",
        "zh": "$(g\\circ f)(x)=g(f(x))=(x-4)+4=x$；两者互为反函数因而抵消。得到 $2x$ 是把两式相加而非将一式代入另一式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=2x-6$?",
        "zh": "$f(x)=2x-6$ 的反函数是什么？"
      },
      "choices": [
        "$\\frac{x+6}{2}$",
        "$2x+6$",
        "$\\frac{x-6}{2}$",
        "$\\frac{x}{2}-6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Solve $x=2y-6$: add 6, then divide by 2 to get $y=\\frac{x+6}{2}$. Writing $\\frac{x}{2}-6$ divides only part of the expression, skipping the step of adding 6 before dividing.",
        "zh": "解 $x=2y-6$：先加 6，再除以 2 得 $y=\\frac{x+6}{2}$。写成 $\\frac{x}{2}-6$ 只对部分表达式除以 2，漏掉了先加 6 再除的步骤。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2+1$ and $g(x)=\\sqrt{x}$, find $(f\\circ g)(4)$.",
        "zh": "若 $f(x)=x^2+1$，$g(x)=\\sqrt{x}$，求 $(f\\circ g)(4)$。"
      },
      "choices": [
        "17",
        "5",
        "3",
        "9"
      ],
      "answer": 1,
      "explanation": {
        "en": "First $g(4)=\\sqrt{4}=2$, then $f(2)=2^2+1=5$. Getting 17 comes from computing $f(4)=17$ and ignoring that $g$ must be applied first.",
        "zh": "先 $g(4)=\\sqrt{4}=2$，再 $f(2)=2^2+1=5$。得到 17 是先算 $f(4)=17$，忽略了必须先作用 $g$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $f^{-1}$ is the reflection of the graph of $f$ over which line?",
        "zh": "$f^{-1}$ 的图像是 $f$ 的图像关于哪条直线的反射？"
      },
      "choices": [
        "the $x$-axis",
        "the $y$-axis",
        "the line $y=x$",
        "the origin"
      ],
      "answer": 2,
      "explanation": {
        "en": "Because inverses swap $x$ and $y$, their graphs are mirror images across the line $y=x$. Reflecting over the $x$-axis instead only negates outputs and does not swap coordinates.",
        "zh": "由于反函数交换 $x$ 与 $y$，它们的图像关于直线 $y=x$ 互为镜像。关于 $x$ 轴反射只是把输出变号，并不交换坐标。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $(f\\circ g)(x)=x$ and $(g\\circ f)(x)=x$ for all $x$, then $f$ and $g$ are:",
        "zh": "若对所有 $x$ 都有 $(f\\circ g)(x)=x$ 且 $(g\\circ f)(x)=x$，则 $f$ 与 $g$："
      },
      "choices": [
        "equal functions",
        "both even",
        "both linear",
        "inverses of each other"
      ],
      "answer": 3,
      "explanation": {
        "en": "Composing in either order returning $x$ is exactly the definition of inverse functions. Concluding they are 'equal' misreads composition-to-identity as the functions being the same.",
        "zh": "两种顺序复合都得到 $x$，这正是反函数的定义。断言两者“相等”是把复合得到恒等式误读为两函数相同。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=2x+1$ and $g(x)=x-3$, find $(f\\circ g)(5)$.",
        "zh": "若 $f(x)=2x+1$，$g(x)=x-3$，求 $(f\\circ g)(5)$。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "First $g(5)=5-3=2$, then $f(2)=2(2)+1=5$.",
        "zh": "先 $g(5)=5-3=2$，再 $f(2)=2(2)+1=5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x^2$, find $(f\\circ f)(2)$.",
        "zh": "若 $f(x)=x^2$，求 $(f\\circ f)(2)$。"
      },
      "answer": "16",
      "accept": [
        "16",
        "16.0"
      ],
      "explanation": {
        "en": "First $f(2)=2^2=4$, then $f(4)=4^2=16$.",
        "zh": "先 $f(2)=2^2=4$，再 $f(4)=4^2=16$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x-4$, find $f^{-1}(10)$.",
        "zh": "若 $f(x)=x-4$，求 $f^{-1}(10)$。"
      },
      "answer": "14",
      "accept": [
        "14",
        "14.0"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=x+4$, so $f^{-1}(10)=10+4=14$.",
        "zh": "反函数为 $f^{-1}(x)=x+4$，所以 $f^{-1}(10)=10+4=14$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=3x$, find $f^{-1}(12)$.",
        "zh": "若 $f(x)=3x$，求 $f^{-1}(12)$。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=\\frac{x}{3}$, so $f^{-1}(12)=\\frac{12}{3}=4$.",
        "zh": "反函数为 $f^{-1}(x)=\\frac{x}{3}$，所以 $f^{-1}(12)=\\frac{12}{3}=4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=2x-6$, evaluate its inverse at $x=0$.",
        "zh": "对于 $f(x)=2x-6$，求其反函数在 $x=0$ 处的值。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=\\frac{x+6}{2}$, so $f^{-1}(0)=\\frac{0+6}{2}=3$.",
        "zh": "反函数为 $f^{-1}(x)=\\frac{x+6}{2}$，所以 $f^{-1}(0)=\\frac{0+6}{2}=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=5x+2$ and $g(x)=x-1$, find $(g\\circ f)(1)$.",
        "zh": "若 $f(x)=5x+2$，$g(x)=x-1$，求 $(g\\circ f)(1)$。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0"
      ],
      "explanation": {
        "en": "First $f(1)=5(1)+2=7$, then $g(7)=7-1=6$.",
        "zh": "先 $f(1)=5(1)+2=7$，再 $g(7)=7-1=6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=\\sqrt{x}$ and $g(x)=x+7$, find $(f\\circ g)(2)$.",
        "zh": "若 $f(x)=\\sqrt{x}$，$g(x)=x+7$，求 $(f\\circ g)(2)$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0"
      ],
      "explanation": {
        "en": "First $g(2)=2+7=9$, then $f(9)=\\sqrt{9}=3$.",
        "zh": "先 $g(2)=2+7=9$，再 $f(9)=\\sqrt{9}=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The inverse of $f(x)=x+8$ evaluated at $x=20$ equals what?",
        "zh": "$f(x)=x+8$ 的反函数在 $x=20$ 处的值等于多少？"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=x-8$, so $f^{-1}(20)=20-8=12$.",
        "zh": "反函数为 $f^{-1}(x)=x-8$，所以 $f^{-1}(20)=20-8=12$。"
      }
    }
  ],
  "functions-transformations/modeling-and-linear-systems": [
    {
      "type": "mc",
      "question": {
        "en": "Solve the system $x+y=10$ and $x-y=2$. What is $x$?",
        "zh": "解方程组 $x+y=10$ 与 $x-y=2$。$x$ 等于多少？"
      },
      "choices": [
        "6",
        "4",
        "5",
        "8"
      ],
      "answer": 0,
      "explanation": {
        "en": "Adding the equations eliminates $y$: $2x=12$, so $x=6$. Getting 4 comes from solving for $y$ (which is 4) and reporting the wrong variable.",
        "zh": "两式相加消去 $y$：$2x=12$，所以 $x=6$。得到 4 是求出了 $y$（等于 4）却报了错的变量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A phone plan costs \\$30 per month plus \\$0.10 per minute. Which equation models the cost $C$ for $m$ minutes?",
        "zh": "某话费套餐每月 30 美元，另加每分钟 0.10 美元。下列哪个方程能表示 $m$ 分钟的费用 $C$？"
      },
      "choices": [
        "$C=0.10+30m$",
        "$C=30+0.10m$",
        "$C=30m$",
        "$C=30-0.10m$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The fixed \\$30 is the constant (y-intercept) and \\$0.10 is the per-minute rate (slope), giving $C=30+0.10m$. Swapping them to $0.10+30m$ charges \\$30 per minute, which misreads which value is the rate.",
        "zh": "固定的 30 美元是常数（截距），0.10 美元是每分钟费率（斜率），得 $C=30+0.10m$。写成 $0.10+30m$ 变成每分钟收 30 美元，弄错了哪个是费率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the system $2x+y=7$ and $x=3$, what is $y$?",
        "zh": "在方程组 $2x+y=7$ 与 $x=3$ 中，$y$ 等于多少？"
      },
      "choices": [
        "4",
        "7",
        "1",
        "13"
      ],
      "answer": 2,
      "explanation": {
        "en": "Substitute $x=3$: $2(3)+y=7$, so $6+y=7$ and $y=1$. Getting 13 comes from adding $2(3)$ instead of subtracting it from 7.",
        "zh": "代入 $x=3$：$2(3)+y=7$，即 $6+y=7$，所以 $y=1$。得到 13 是把 $2(3)$ 加上而不是从 7 中减去。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines have the same slope but different $y$-intercepts. How many solutions does the system have?",
        "zh": "两条直线斜率相同但 $y$ 截距不同。该方程组有多少个解？"
      },
      "choices": [
        "exactly one",
        "infinitely many",
        "exactly two",
        "none"
      ],
      "answer": 3,
      "explanation": {
        "en": "Equal slopes with different intercepts means the lines are parallel and never meet, so there is no solution. Answering 'infinitely many' would require the lines to be identical, not merely parallel.",
        "zh": "斜率相同而截距不同意味着两直线平行、永不相交，所以无解。回答“无穷多”需要两直线完全重合，而不仅仅是平行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the system $y=2x$ and $y=x+3$. What is $y$?",
        "zh": "解方程组 $y=2x$ 与 $y=x+3$。$y$ 等于多少？"
      },
      "choices": [
        "6",
        "9",
        "3",
        "0"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set $2x=x+3$ to get $x=3$, then $y=2(3)=6$. Stopping at $x=3$ and reporting it as $y$ gives the value 3, which is the $x$-coordinate, not $y$.",
        "zh": "令 $2x=x+3$ 得 $x=3$，再 $y=2(3)=6$。停在 $x=3$ 并当作 $y$ 会得到 3，那是 $x$ 坐标而非 $y$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A system whose two equations describe the exact same line has how many solutions?",
        "zh": "两个方程表示同一条直线的方程组有多少个解？"
      },
      "choices": [
        "no solution",
        "infinitely many",
        "exactly two",
        "exactly one"
      ],
      "answer": 1,
      "explanation": {
        "en": "Identical lines overlap at every point, so every point on the line is a solution — infinitely many. Saying 'no solution' confuses coincident lines with parallel (non-intersecting) lines.",
        "zh": "两条重合的直线处处相交，直线上每个点都是解——无穷多个。回答“无解”是把重合直线与平行（不相交）直线混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the cost model $C=15+4t$, what does the number 4 represent?",
        "zh": "在费用模型 $C=15+4t$ 中，数字 4 表示什么？"
      },
      "choices": [
        "the starting value",
        "the total cost",
        "the cost increases \\$4 for each unit of $t$",
        "\\$15 per unit"
      ],
      "answer": 2,
      "explanation": {
        "en": "The coefficient of $t$ is the slope, the rate of change: cost rises \\$4 per unit increase in $t$. Calling 4 the 'starting value' confuses the rate (slope) with the constant term 15.",
        "zh": "$t$ 的系数是斜率，即变化率：$t$ 每增加一个单位，费用上升 4 美元。把 4 称为“初始值”是混淆了变化率（斜率）与常数项 15。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Adult tickets cost \\$8 and child tickets \\$5. If 100 tickets sold for \\$680 total, which system models this ($a$ adults, $c$ children)?",
        "zh": "成人票 8 美元，儿童票 5 美元。若共卖出 100 张票收入 680 美元，下列哪个方程组正确（$a$ 成人，$c$ 儿童）？"
      },
      "choices": [
        "$a+c=100,\\;5a+8c=680$",
        "$a+c=680$",
        "$8a+5c=100$",
        "$a+c=100,\\;8a+5c=680$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Total tickets give $a+c=100$ and total revenue gives $8a+5c=680$ (price times quantity). Pairing \\$8 with children and \\$5 with adults swaps each ticket type with the wrong price.",
        "zh": "总票数给出 $a+c=100$，总收入给出 $8a+5c=680$（单价乘数量）。把 8 美元配给儿童、5 美元配给成人是把票种与价格对调了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $3x+2y=12$ and $3x-2y=0$ by elimination. What is $y$?",
        "zh": "用消元法解 $3x+2y=12$ 与 $3x-2y=0$。$y$ 等于多少？"
      },
      "choices": [
        "3",
        "6",
        "2",
        "0"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtracting the equations eliminates $x$: $4y=12$, so $y=3$. Getting 2 comes from solving for $x$ (adding gives $6x=12$, $x=2$) and reporting the wrong variable.",
        "zh": "两式相减消去 $x$：$4y=12$，所以 $y=3$。得到 2 是求出了 $x$（相加得 $6x=12$，$x=2$）却报了错的变量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many equations are needed to solve a system in three variables for a unique solution?",
        "zh": "求解三元方程组以得到唯一解，最少需要多少个方程？"
      },
      "choices": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answer": 1,
      "explanation": {
        "en": "To pin down three unknowns uniquely you generally need three independent equations, one per variable. Using only two leaves a variable free, so the solution is not unique.",
        "zh": "要唯一确定三个未知数，一般需要三个独立方程，每个变量一个。只用两个会留下一个自由变量，解不唯一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A linear function passes through $(0,5)$ with slope 3. What is its equation?",
        "zh": "一个线性函数过点 $(0,5)$ 且斜率为 3。它的方程是什么？"
      },
      "choices": [
        "$y=3x-5$",
        "$y=5x+3$",
        "$y=3x+5$",
        "$y=3x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With slope 3 and $y$-intercept 5, slope-intercept form is $y=3x+5$. Writing $y=5x+3$ swaps the slope and intercept, using each number in the wrong role.",
        "zh": "斜率为 3、$y$ 截距为 5，斜截式为 $y=3x+5$。写成 $y=5x+3$ 是把斜率与截距对调，两个数用错了位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x+y+z=6$, $y=2$, $z=1$. What is $x$?",
        "zh": "解 $x+y+z=6$，$y=2$，$z=1$。$x$ 等于多少？"
      },
      "choices": [
        "1",
        "2",
        "6",
        "3"
      ],
      "answer": 3,
      "explanation": {
        "en": "Substitute the known values: $x+2+1=6$, so $x=3$. Getting 2 comes from subtracting only one known value instead of both.",
        "zh": "代入已知值：$x+2+1=6$，所以 $x=3$。得到 2 是只减去了一个已知值而非两个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve the system $x+y=15$ and $x-y=3$. Find $x$.",
        "zh": "解方程组 $x+y=15$ 与 $x-y=3$。求 $x$。"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "Adding the equations: $2x=18$, so $x=9$.",
        "zh": "两式相加：$2x=18$，所以 $x=9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the cost model $C=20+3n$, find the cost when $n=10$.",
        "zh": "对于费用模型 $C=20+3n$，求 $n=10$ 时的费用。"
      },
      "answer": "50",
      "accept": [
        "50",
        "50.0",
        "$50",
        "50 dollars"
      ],
      "explanation": {
        "en": "$C=20+3(10)=20+30=50$.",
        "zh": "$C=20+3(10)=20+30=50$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $y=4x$ and $y=x+9$. Find $x$.",
        "zh": "解 $y=4x$ 与 $y=x+9$。求 $x$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Set $4x=x+9$: $3x=9$, so $x=3$.",
        "zh": "令 $4x=x+9$：$3x=9$，所以 $x=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the system $2x+y=11$ with $x=4$, find $y$.",
        "zh": "在方程组 $2x+y=11$ 中，$x=4$，求 $y$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Substitute $x=4$: $8+y=11$, so $y=3$.",
        "zh": "代入 $x=4$：$8+y=11$，所以 $y=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At an event $a+c=50$ (adults plus children). If $a=30$, find $c$.",
        "zh": "某活动中 $a+c=50$（成人加儿童）。若 $a=30$，求 $c$。"
      },
      "answer": "20",
      "accept": [
        "20",
        "20.0"
      ],
      "explanation": {
        "en": "$c=50-30=20$.",
        "zh": "$c=50-30=20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A linear model passes through $(2,4)$ and $(6,12)$. Find its slope.",
        "zh": "一个线性模型过点 $(2,4)$ 和 $(6,12)$。求其斜率。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Slope $=\\frac{12-4}{6-2}=\\frac{8}{4}=2$.",
        "zh": "斜率 $=\\frac{12-4}{6-2}=\\frac{8}{4}=2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x+y+z=12$ with $y=5$ and $z=4$. Find $x$.",
        "zh": "解 $x+y+z=12$，其中 $y=5$，$z=4$。求 $x$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$x=12-5-4=3$.",
        "zh": "$x=12-5-4=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A taxi charges \\$4 plus \\$2 per mile. For how many miles is the total fare \\$20?",
        "zh": "出租车起步价 4 美元，另加每英里 2 美元。总车费为 20 美元时行驶了多少英里？"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "8 miles"
      ],
      "explanation": {
        "en": "Solve $4+2m=20$: $2m=16$, so $m=8$ miles.",
        "zh": "解 $4+2m=20$：$2m=16$，所以 $m=8$ 英里。"
      }
    }
  ],
  "quadratics-complex-numbers/vertex-form-completing-square": [
    {
      "type": "mc",
      "question": {
        "en": "Write $y = x^2 + 6x + 5$ in vertex form.",
        "zh": "把 $y = x^2 + 6x + 5$ 写成顶点式。"
      },
      "choices": [
        "$y = (x+3)^2 - 4$",
        "$y = (x+3)^2 + 5$",
        "$y = (x-3)^2 - 4$",
        "$y = (x+6)^2 - 31$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Take half of $6$ to get $3$, square it to get $9$: $x^2+6x = (x+3)^2 - 9$. Then $y = (x+3)^2 - 9 + 5 = (x+3)^2 - 4$. A common error is completing the square but forgetting to subtract the added $9$, which leaves the original $+5$ untouched. Another slip is using the wrong sign inside the parentheses.",
        "zh": "取 $6$ 的一半得 $3$，平方得 $9$：$x^2+6x = (x+3)^2 - 9$。于是 $y = (x+3)^2 - 9 + 5 = (x+3)^2 - 4$。常见错误是配方后忘记减去补进的 $9$，从而保留了原来的 $+5$。另一种错误是括号内符号写反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = (x-4)^2 + 7$?",
        "zh": "$y = (x-4)^2 + 7$ 的顶点是什么？"
      },
      "choices": [
        "$(-4, 7)$",
        "$(4, 7)$",
        "$(4, -7)$",
        "$(-4, -7)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In vertex form $y = a(x-h)^2 + k$ the vertex is $(h, k)$. Here $x-4$ means $h = 4$ (opposite sign from what is written), and $k = 7$, so the vertex is $(4, 7)$. The tempting mistake is reading $h$ straight off as $-4$ instead of flipping the sign of the number subtracted inside.",
        "zh": "在顶点式 $y = a(x-h)^2 + k$ 中，顶点为 $(h, k)$。这里 $x-4$ 表示 $h = 4$（与式中数字符号相反），而 $k = 7$，所以顶点为 $(4, 7)$。诱人的错误是直接把 $h$ 读成 $-4$，而没有对括号内被减的数取相反符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the axis of symmetry of $y = 2x^2 - 8x + 1$.",
        "zh": "求 $y = 2x^2 - 8x + 1$ 的对称轴。"
      },
      "choices": [
        "$x = -2$",
        "$x = 4$",
        "$x = 2$",
        "$x = 8$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The axis of symmetry is $x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$. A frequent error is dropping the leading negative and getting $-2$, or forgetting the $2a$ in the denominator and dividing by $a$ alone.",
        "zh": "对称轴为 $x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$。常见错误是漏掉前面的负号得到 $-2$，或忘记分母中的 $2a$ 而只除以 $a$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Does $y = -3(x-2)^2 + 5$ have a maximum or minimum, and what is it?",
        "zh": "$y = -3(x-2)^2 + 5$ 有最大值还是最小值？它是多少？"
      },
      "choices": [
        "minimum of $5$",
        "minimum of $-3$",
        "maximum of $2$",
        "maximum of $5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Because $a = -3 < 0$ the parabola opens downward, so the vertex is the highest point, giving a maximum. The maximum value is $k = 5$ (the output at the vertex). Confusing the vertex's $y$-value with its $x$-value gives $2$, and assuming an upward opening (a minimum) mistakes the sign of $a$.",
        "zh": "因为 $a = -3 < 0$，抛物线开口向下，顶点是最高点，所以有最大值。最大值为 $k = 5$（顶点处的函数值）。把顶点的 $y$ 值和 $x$ 值混淆会得到 $2$，而误以为开口向上（有最小值）则是弄错了 $a$ 的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write $y = x^2 - 10x + 3$ in vertex form.",
        "zh": "把 $y = x^2 - 10x + 3$ 写成顶点式。"
      },
      "choices": [
        "$y = (x-5)^2 - 22$",
        "$y = (x+5)^2 - 22$",
        "$y = (x-5)^2 - 28$",
        "$y = (x-5)^2 + 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Half of $-10$ is $-5$, squared is $25$: $x^2 - 10x = (x-5)^2 - 25$. Then $y = (x-5)^2 - 25 + 3 = (x-5)^2 - 22$. Forgetting to subtract the $25$ leaves $+3$ unchanged, and adding $-25$ and $+3$ carelessly as $-28$ comes from subtracting instead of combining $-25+3$.",
        "zh": "$-10$ 的一半是 $-5$，平方为 $25$：$x^2 - 10x = (x-5)^2 - 25$。于是 $y = (x-5)^2 - 25 + 3 = (x-5)^2 - 22$。忘记减去 $25$ 会保留 $+3$；把 $-25$ 与 $+3$ 错误相加得到 $-28$，是因为做成了相减而非合并 $-25+3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = x^2 + 8x + 10$?",
        "zh": "$y = x^2 + 8x + 10$ 的顶点是什么？"
      },
      "choices": [
        "$(4, -6)$",
        "$(-4, -6)$",
        "$(-4, 10)$",
        "$(-8, 10)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The vertex $x$-coordinate is $-\\frac{b}{2a} = -\\frac{8}{2} = -4$. Then $y(-4) = 16 - 32 + 10 = -6$, so the vertex is $(-4, -6)$. Using $+4$ ignores the negative sign in the formula, and reading $10$ as the $y$-value uses the constant term instead of evaluating at the vertex.",
        "zh": "顶点横坐标为 $-\\frac{b}{2a} = -\\frac{8}{2} = -4$。于是 $y(-4) = 16 - 32 + 10 = -6$，所以顶点为 $(-4, -6)$。取 $+4$ 忽略了公式中的负号，而把 $10$ 当作 $y$ 值则是直接用了常数项，没有代入顶点计算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write $y = 2x^2 + 12x + 5$ in vertex form.",
        "zh": "把 $y = 2x^2 + 12x + 5$ 写成顶点式。"
      },
      "choices": [
        "$y = 2(x+3)^2 + 5$",
        "$y = 2(x+6)^2 - 13$",
        "$y = 2(x+3)^2 - 13$",
        "$y = 2(x+3)^2 - 18$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Factor $2$ from the variable terms: $2(x^2+6x)+5$. Complete the square inside: $x^2+6x = (x+3)^2 - 9$, so $2((x+3)^2 - 9) + 5 = 2(x+3)^2 - 18 + 5 = 2(x+3)^2 - 13$. A key error is subtracting only $9$ (not $2 \\times 9 = 18$) when distributing the leading $2$, or forgetting to add back the $+5$.",
        "zh": "先从变量项提出 $2$：$2(x^2+6x)+5$。在括号内配方：$x^2+6x = (x+3)^2 - 9$，于是 $2((x+3)^2 - 9) + 5 = 2(x+3)^2 - 18 + 5 = 2(x+3)^2 - 13$。关键错误是分配前导系数 $2$ 时只减 $9$ 而非 $2 \\times 9 = 18$，或忘记加回 $+5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the minimum value of $y = x^2 - 6x + 11$?",
        "zh": "$y = x^2 - 6x + 11$ 的最小值是多少？"
      },
      "choices": [
        "$3$",
        "$11$",
        "$-2$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Completing the square: $x^2 - 6x + 11 = (x-3)^2 - 9 + 11 = (x-3)^2 + 2$. Since the parabola opens upward, the minimum value is $k = 2$. Reading $11$ mistakes the constant term for the minimum, and $3$ is the $x$-value where the minimum occurs, not the minimum itself.",
        "zh": "配方：$x^2 - 6x + 11 = (x-3)^2 - 9 + 11 = (x-3)^2 + 2$。由于抛物线开口向上，最小值为 $k = 2$。读作 $11$ 是把常数项当成了最小值，而 $3$ 是取得最小值时的 $x$ 值，并非最小值本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A parabola $y = a(x-h)^2 + k$ has a maximum when:",
        "zh": "抛物线 $y = a(x-h)^2 + k$ 在什么情况下有最大值？"
      },
      "choices": [
        "$a < 0$",
        "$h < 0$",
        "$a > 0$",
        "$k < 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The sign of $a$ controls the opening direction. When $a < 0$ the parabola opens downward, so the vertex is the highest point and the function has a maximum. Choosing $a > 0$ describes the upward case (a minimum), while $h$ and $k$ only locate the vertex and do not decide max versus min.",
        "zh": "$a$ 的符号决定开口方向。当 $a < 0$ 时抛物线开口向下，顶点是最高点，函数有最大值。选 $a > 0$ 描述的是开口向上的情况（有最小值），而 $h$ 和 $k$ 只确定顶点位置，并不决定是最大值还是最小值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the axis of symmetry of $y = -\\frac{1}{2}(x+7)^2 - 3$.",
        "zh": "求 $y = -\\frac{1}{2}(x+7)^2 - 3$ 的对称轴。"
      },
      "choices": [
        "$x = 7$",
        "$x = -7$",
        "$x = -3$",
        "$x = 3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The axis of symmetry passes through the vertex, $x = h$. Since $x+7 = x-(-7)$, we have $h = -7$, so the axis is $x = -7$. Reading $x = 7$ ignores that $x+7$ means $h$ is negative, and $x = -3$ mistakenly uses the constant $k$ as the axis.",
        "zh": "对称轴过顶点，即 $x = h$。由于 $x+7 = x-(-7)$，所以 $h = -7$，对称轴为 $x = -7$。读作 $x = 7$ 忽略了 $x+7$ 意味着 $h$ 为负，而 $x = -3$ 则错误地把常数 $k$ 当成了对称轴。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $y = x^2 + 4x + 1$, what does the vertex tell you?",
        "zh": "对于 $y = x^2 + 4x + 1$，顶点告诉你什么？"
      },
      "choices": [
        "the maximum value of $y$",
        "the $y$-intercept",
        "the minimum value of $y$",
        "an $x$-intercept"
      ],
      "answer": 2,
      "explanation": {
        "en": "Because $a = 1 > 0$ the parabola opens upward, so its vertex is the lowest point and gives the minimum value of $y$. Calling it a maximum reverses the opening direction; the $y$-intercept is found at $x = 0$ and the $x$-intercepts where $y = 0$, neither of which is the vertex.",
        "zh": "因为 $a = 1 > 0$，抛物线开口向上，顶点是最低点，给出 $y$ 的最小值。称其为最大值是弄反了开口方向；$y$ 截距在 $x = 0$ 处求得，$x$ 截距在 $y = 0$ 处求得，二者都不是顶点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What number completes the square for $x^2 + 14x$?",
        "zh": "要对 $x^2 + 14x$ 配方，应加上什么数？"
      },
      "choices": [
        "$7$",
        "$14$",
        "$28$",
        "$49$"
      ],
      "answer": 3,
      "explanation": {
        "en": "To complete the square, add $\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{14}{2}\\right)^2 = 7^2 = 49$. Stopping at $7$ gives only half of $b$ without squaring, and $28$ comes from doubling $14$ instead of halving then squaring.",
        "zh": "配方需加上 $\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{14}{2}\\right)^2 = 7^2 = 49$。停在 $7$ 只是取了 $b$ 的一半而没有平方，而 $28$ 是把 $14$ 加倍，而非先取一半再平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The vertex of $y = x^2 + 2x - 5$ is $(-1, k)$. Find $k$.",
        "zh": "$y = x^2 + 2x - 5$ 的顶点是 $(-1, k)$。求 $k$。"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "−6",
        "k=-6"
      ],
      "explanation": {
        "en": "Completing the square: $x^2 + 2x - 5 = (x+1)^2 - 1 - 5 = (x+1)^2 - 6$, so $k = -6$. Equivalently, evaluate $y(-1) = 1 - 2 - 5 = -6$. Forgetting to subtract the added $1$ would wrongly give $-5$.",
        "zh": "配方：$x^2 + 2x - 5 = (x+1)^2 - 1 - 5 = (x+1)^2 - 6$，所以 $k = -6$。或直接代入 $y(-1) = 1 - 2 - 5 = -6$。忘记减去补进的 $1$ 会错误地得到 $-5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the axis of symmetry of $y = 3x^2 - 12x + 7$. Give the value of $x$.",
        "zh": "求 $y = 3x^2 - 12x + 7$ 的对称轴，写出 $x$ 的值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "x=2",
        "x = 2"
      ],
      "explanation": {
        "en": "The axis of symmetry is $x = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$. Dropping the negative sign or dividing by $a$ alone are the usual mistakes.",
        "zh": "对称轴为 $x = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$。漏掉负号或只除以 $a$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the minimum value of $y = x^2 - 8x + 20$?",
        "zh": "$y = x^2 - 8x + 20$ 的最小值是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Complete the square: $(x-4)^2 - 16 + 20 = (x-4)^2 + 4$. The parabola opens upward, so the minimum value is $4$. Using $20$ mistakes the constant term for the minimum.",
        "zh": "配方：$(x-4)^2 - 16 + 20 = (x-4)^2 + 4$。抛物线开口向上，最小值为 $4$。用 $20$ 是把常数项当成了最小值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-coordinate of the vertex of $y = -x^2 + 6x - 1$.",
        "zh": "求 $y = -x^2 + 6x - 1$ 顶点的横坐标。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The vertex $x$-coordinate is $-\\frac{b}{2a} = -\\frac{6}{2(-1)} = -\\frac{6}{-2} = 3$. Care with the double negative from $a = -1$ is essential; missing it flips the sign to $-3$.",
        "zh": "顶点横坐标为 $-\\frac{b}{2a} = -\\frac{6}{2(-1)} = -\\frac{6}{-2} = 3$。要注意 $a = -1$ 带来的双重负号；忽略它会把符号变成 $-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What constant completes the square for $x^2 - 5x$? Give a decimal or fraction.",
        "zh": "要对 $x^2 - 5x$ 配方，应加上什么常数？用小数或分数表示。"
      },
      "answer": "6.25",
      "accept": [
        "25/4",
        "6.250",
        "6 1/4"
      ],
      "explanation": {
        "en": "Add $\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{-5}{2}\\right)^2 = \\frac{25}{4} = 6.25$. The sign of $b$ disappears once squared, so $-6.25$ would be wrong.",
        "zh": "加上 $\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{-5}{2}\\right)^2 = \\frac{25}{4} = 6.25$。平方后 $b$ 的符号消失，所以 $-6.25$ 是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the maximum value of $y = -2(x-1)^2 + 8$?",
        "zh": "$y = -2(x-1)^2 + 8$ 的最大值是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "Since $a = -2 < 0$ the parabola opens downward, so the vertex value $k = 8$ is the maximum. Using $1$ mistakes the vertex's $x$-value for the maximum.",
        "zh": "由于 $a = -2 < 0$，抛物线开口向下，顶点值 $k = 8$ 就是最大值。用 $1$ 是把顶点的 $x$ 值当成了最大值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write $y = x^2 + 10x + 21$ as $(x+5)^2 + k$. Find $k$.",
        "zh": "把 $y = x^2 + 10x + 21$ 写成 $(x+5)^2 + k$，求 $k$。"
      },
      "answer": "-4",
      "accept": [
        "-4.0",
        "−4"
      ],
      "explanation": {
        "en": "$(x+5)^2 = x^2 + 10x + 25$, so $y = (x+5)^2 - 25 + 21 = (x+5)^2 - 4$, giving $k = -4$. Forgetting to subtract the $25$ would wrongly leave $k = 21$.",
        "zh": "$(x+5)^2 = x^2 + 10x + 25$，所以 $y = (x+5)^2 - 25 + 21 = (x+5)^2 - 4$，得 $k = -4$。忘记减去 $25$ 会错误地保留 $k = 21$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write $y = 2x^2 - 4x + 9$ in vertex form and give the $y$-coordinate of the vertex.",
        "zh": "把 $y = 2x^2 - 4x + 9$ 写成顶点式，并写出顶点的纵坐标。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Factor: $2(x^2 - 2x) + 9 = 2((x-1)^2 - 1) + 9 = 2(x-1)^2 - 2 + 9 = 2(x-1)^2 + 7$. The vertex $y$-coordinate is $7$. Forgetting to multiply the $-1$ by the factored-out $2$ (using $-1$ instead of $-2$) would give $8$.",
        "zh": "提取系数：$2(x^2 - 2x) + 9 = 2((x-1)^2 - 1) + 9 = 2(x-1)^2 - 2 + 9 = 2(x-1)^2 + 7$。顶点纵坐标为 $7$。忘记把 $-1$ 乘以提出的 $2$（用 $-1$ 而非 $-2$）会得到 $8$。"
      }
    }
  ],
  "quadratics-complex-numbers/discriminant-complex-numbers": [
    {
      "type": "mc",
      "question": {
        "en": "How many and what type of roots does $x^2 + 4x + 5 = 0$ have?",
        "zh": "$x^2 + 4x + 5 = 0$ 有几个、什么类型的根？"
      },
      "choices": [
        "two complex (non-real) roots",
        "one repeated real root",
        "two distinct real roots",
        "no roots at all"
      ],
      "answer": 0,
      "explanation": {
        "en": "The discriminant is $b^2 - 4ac = 16 - 20 = -4 < 0$, so the equation has two complex (non-real) conjugate roots. A negative discriminant does not mean 'no roots' — a quadratic always has two roots, they are just complex here. Getting two real roots would require a positive discriminant.",
        "zh": "判别式为 $b^2 - 4ac = 16 - 20 = -4 < 0$，所以方程有两个共轭复数（非实数）根。判别式为负并不表示“没有根”——二次方程总有两个根，只是这里是复数。要得到两个实根需要判别式为正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $i^2$?",
        "zh": "$i^2$ 等于多少？"
      },
      "choices": [
        "$1$",
        "$-1$",
        "$i$",
        "$-i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By definition $i = \\sqrt{-1}$, so $i^2 = -1$. Answering $1$ treats $i$ as if it were a real number whose square is positive, which is exactly what the imaginary unit is designed to avoid.",
        "zh": "根据定义 $i = \\sqrt{-1}$，所以 $i^2 = -1$。答 $1$ 是把 $i$ 当成平方为正的实数，而虚数单位正是为避免这一点而设的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Describe the roots of $x^2 - 6x + 9 = 0$ using the discriminant.",
        "zh": "用判别式描述 $x^2 - 6x + 9 = 0$ 的根。"
      },
      "choices": [
        "two complex roots",
        "two distinct real roots",
        "one repeated (double) real root",
        "cannot be determined"
      ],
      "answer": 2,
      "explanation": {
        "en": "The discriminant is $b^2 - 4ac = 36 - 36 = 0$. A zero discriminant means exactly one repeated real root (here $x = 3$). Thinking $\\Delta = 0$ gives two separate real roots misreads the boundary case where the two roots coincide.",
        "zh": "判别式为 $b^2 - 4ac = 36 - 36 = 0$。判别式为零表示恰有一个重根（这里 $x = 3$）。认为 $\\Delta = 0$ 给出两个不同实根，是误读了两根重合的临界情形。"
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
        "$-1$",
        "$-i$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$i^3 = i^2 \\cdot i = (-1)(i) = -i$. Answering $i$ forgets to apply $i^2 = -1$ and leaves the sign positive.",
        "zh": "$i^3 = i^2 \\cdot i = (-1)(i) = -i$。答 $i$ 是忘了应用 $i^2 = -1$，从而保留了正号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $(3 + 2i) + (4 - 5i)$.",
        "zh": "化简 $(3 + 2i) + (4 - 5i)$。"
      },
      "choices": [
        "$7 - 3i$",
        "$7 - 7i$",
        "$7 + 7i$",
        "$-1 - 3i$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add real parts and imaginary parts separately: $(3+4) + (2-5)i = 7 - 3i$. Mishandling the imaginary parts as $2 + 5 = 7$ ignores the minus sign on $5i$, and $-1$ for the real part comes from subtracting instead of adding.",
        "zh": "分别对实部和虚部相加：$(3+4) + (2-5)i = 7 - 3i$。把虚部处理成 $2 + 5 = 7$ 忽略了 $5i$ 的负号，而实部得 $-1$ 是做成了相减而非相加。"
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
        "$4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\sqrt{-16} = \\sqrt{16}\\,\\sqrt{-1} = 4i$. Writing $-4$ treats the square root of a negative as a real number, and $16i$ forgets to take the square root of $16$.",
        "zh": "$\\sqrt{-16} = \\sqrt{16}\\,\\sqrt{-1} = 4i$。写成 $-4$ 是把负数的平方根当成实数，而 $16i$ 忘了对 $16$ 开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many real solutions does $2x^2 + 3x + 5 = 0$ have?",
        "zh": "$2x^2 + 3x + 5 = 0$ 有几个实数解？"
      },
      "choices": [
        "$2$ real solutions",
        "$1$ real solution",
        "$0$ real solutions",
        "$3$ real solutions"
      ],
      "answer": 2,
      "explanation": {
        "en": "The discriminant is $b^2 - 4ac = 9 - 40 = -31 < 0$, so there are no real solutions (the two solutions are complex). Assuming every quadratic has two real solutions ignores that a negative discriminant pushes them off the real number line.",
        "zh": "判别式为 $b^2 - 4ac = 9 - 40 = -31 < 0$，所以没有实数解（两个解都是复数）。认为每个二次方程都有两个实解，忽略了判别式为负会使解离开实数轴。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply $(2 + 3i)(1 - i)$.",
        "zh": "计算 $(2 + 3i)(1 - i)$。"
      },
      "choices": [
        "$-1 + 5i$",
        "$5 + 5i$",
        "$2 - 3i$",
        "$5 + i$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Expand: $2 - 2i + 3i - 3i^2 = 2 + i - 3(-1) = 2 + i + 3 = 5 + i$. Leaving $-3i^2$ as $-3$ (or forgetting $i^2 = -1$ entirely) is the usual slip that changes the real part.",
        "zh": "展开：$2 - 2i + 3i - 3i^2 = 2 + i - 3(-1) = 2 + i + 3 = 5 + i$。把 $-3i^2$ 当作 $-3$（或完全忘记 $i^2 = -1$）是改变实部的常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $i^4$?",
        "zh": "$i^4$ 等于多少？"
      },
      "choices": [
        "$1$",
        "$-1$",
        "$i$",
        "$-i$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$i^4 = (i^2)^2 = (-1)^2 = 1$. The powers of $i$ cycle with period $4$: $i, -1, -i, 1$. Answering $-1$ stops one step early at $i^2$.",
        "zh": "$i^4 = (i^2)^2 = (-1)^2 = 1$。$i$ 的幂以 $4$ 为周期循环：$i, -1, -i, 1$。答 $-1$ 是在 $i^2$ 处提前停了一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the discriminant $b^2 - 4ac$ is positive, the quadratic has:",
        "zh": "如果判别式 $b^2 - 4ac$ 为正，则该二次方程有："
      },
      "choices": [
        "two complex roots",
        "two distinct real roots",
        "one repeated root",
        "no solutions"
      ],
      "answer": 1,
      "explanation": {
        "en": "A positive discriminant means the square root in the quadratic formula is a positive real number, so $\\pm$ produces two distinct real roots. A positive discriminant is the opposite of the complex-root case, which needs a negative discriminant.",
        "zh": "判别式为正意味着求根公式中的平方根是一个正实数，所以 $\\pm$ 产生两个不同的实根。判别式为正与复数根情形相反，后者需要判别式为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the complex conjugate of $5 - 2i$?",
        "zh": "$5 - 2i$ 的共轭复数是什么？"
      },
      "choices": [
        "$-5 + 2i$",
        "$2 - 5i$",
        "$5 + 2i$",
        "$-5 - 2i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The complex conjugate flips only the sign of the imaginary part, so the conjugate of $5 - 2i$ is $5 + 2i$. Changing the sign of the real part too, giving $-5 + 2i$, is a common overreach.",
        "zh": "共轭复数只改变虚部的符号，所以 $5 - 2i$ 的共轭为 $5 + 2i$。连实部符号也一起改成 $-5 + 2i$ 是常见的过度处理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 + 9 = 0$.",
        "zh": "解方程 $x^2 + 9 = 0$。"
      },
      "choices": [
        "$x = \\pm 3$",
        "$x = \\pm 9$",
        "$x = \\pm 9i$",
        "$x = \\pm 3i$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x^2 = -9$, so $x = \\pm\\sqrt{-9} = \\pm 3i$. Writing $\\pm 3$ ignores the negative under the root, and $\\pm 9i$ forgets to take the square root of $9$.",
        "zh": "$x^2 = -9$，所以 $x = \\pm\\sqrt{-9} = \\pm 3i$。写成 $\\pm 3$ 忽略了根号下的负号，而 $\\pm 9i$ 忘了对 $9$ 开平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute the discriminant of $x^2 - 5x + 6 = 0$.",
        "zh": "计算 $x^2 - 5x + 6 = 0$ 的判别式。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "$b^2 - 4ac = (-5)^2 - 4(1)(6) = 25 - 24 = 1$. Note $(-5)^2 = 25$ is positive; writing $-25$ from mishandling the square is the common error.",
        "zh": "$b^2 - 4ac = (-5)^2 - 4(1)(6) = 25 - 24 = 1$。注意 $(-5)^2 = 25$ 为正；因平方处理不当写成 $-25$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $i^{10}$. Give your answer as $1$, $-1$, $i$, or $-i$.",
        "zh": "化简 $i^{10}$，答案写成 $1$、$-1$、$i$ 或 $-i$。"
      },
      "answer": "-1",
      "accept": [
        "−1",
        "-1.0"
      ],
      "explanation": {
        "en": "Divide the exponent by $4$: $10 = 4(2) + 2$, so $i^{10} = i^2 = -1$. Forgetting the remainder cycle and guessing $i$ (which corresponds to remainder $1$) is the usual mistake.",
        "zh": "把指数除以 $4$：$10 = 4(2) + 2$，所以 $i^{10} = i^2 = -1$。忘记余数循环而猜成 $i$（对应余数 $1$）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the real part of $4 - 7i$?",
        "zh": "$4 - 7i$ 的实部是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "In $a + bi$ the real part is $a = 4$. Answering $-7$ reports the imaginary coefficient instead of the real part.",
        "zh": "在 $a + bi$ 中，实部为 $a = 4$。答 $-7$ 是报了虚部系数，而非实部。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $(6 + 2i) - (1 + 9i)$ and give the coefficient of $i$ (the imaginary part).",
        "zh": "化简 $(6 + 2i) - (1 + 9i)$，写出 $i$ 的系数（虚部）。"
      },
      "answer": "-7",
      "accept": [
        "−7",
        "-7.0"
      ],
      "explanation": {
        "en": "Subtract componentwise: $(6-1) + (2-9)i = 5 - 7i$, so the imaginary part is $-7$. Distributing the subtraction to only the real part and keeping $2 + 9 = 11$ is the tempting error.",
        "zh": "逐项相减：$(6-1) + (2-9)i = 5 - 7i$，所以虚部为 $-7$。只对实部执行减法而虚部保留 $2 + 9 = 11$ 是诱人的错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute the discriminant of $3x^2 + 6x + 3 = 0$.",
        "zh": "计算 $3x^2 + 6x + 3 = 0$ 的判别式。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "-0"
      ],
      "explanation": {
        "en": "$b^2 - 4ac = 6^2 - 4(3)(3) = 36 - 36 = 0$, indicating one repeated real root. Forgetting the leading coefficient $a = 3$ and using $4(1)(3) = 12$ would wrongly give $24$.",
        "zh": "$b^2 - 4ac = 6^2 - 4(3)(3) = 36 - 36 = 0$，说明有一个重根。忘记前导系数 $a = 3$ 而用 $4(1)(3) = 12$ 会错误地得到 $24$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\sqrt{-49}$ and give the coefficient of $i$.",
        "zh": "化简 $\\sqrt{-49}$，写出 $i$ 的系数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "$\\sqrt{-49} = \\sqrt{49}\\,\\sqrt{-1} = 7i$, so the coefficient is $7$. Reporting $49$ forgets to take the square root.",
        "zh": "$\\sqrt{-49} = \\sqrt{49}\\,\\sqrt{-1} = 7i$，所以系数为 $7$。报 $49$ 是忘了开平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many real solutions does $x^2 + 2x + 10 = 0$ have?",
        "zh": "$x^2 + 2x + 10 = 0$ 有几个实数解？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "zero",
        "none"
      ],
      "explanation": {
        "en": "The discriminant is $4 - 40 = -36 < 0$, so there are $0$ real solutions (both solutions are complex). A negative discriminant always means no real solutions.",
        "zh": "判别式为 $4 - 40 = -36 < 0$，所以有 $0$ 个实数解（两个解都是复数）。判别式为负总是意味着没有实数解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Multiply $(1 + i)(1 - i)$.",
        "zh": "计算 $(1 + i)(1 - i)$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "This is a conjugate product: $1 - i^2 = 1 - (-1) = 2$. Treating $-i^2$ as $-1$ (forgetting $i^2 = -1$) would wrongly give $0$.",
        "zh": "这是共轭相乘：$1 - i^2 = 1 - (-1) = 2$。把 $-i^2$ 当作 $-1$（忘记 $i^2 = -1$）会错误地得到 $0$。"
      }
    }
  ],
  "quadratics-complex-numbers/quadratic-modeling-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "A ball is thrown so its height is $h(t) = -16t^2 + 64t$ (feet, seconds). At what time does it reach maximum height?",
        "zh": "一个球被抛出，其高度为 $h(t) = -16t^2 + 64t$（英尺、秒）。它在何时达到最大高度？"
      },
      "choices": [
        "$2$ s",
        "$1$ s",
        "$4$ s",
        "$64$ s"
      ],
      "answer": 0,
      "explanation": {
        "en": "Maximum height occurs at the vertex time $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = \\frac{64}{32} = 2$ s. The value $4$ s is when the ball returns to the ground, not the peak, and $64$ confuses the coefficient with a time.",
        "zh": "最大高度出现在顶点时刻 $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = \\frac{64}{32} = 2$ 秒。$4$ 秒是球落回地面的时刻，而非最高点；$64$ 则把系数误当成时间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $h(t) = -16t^2 + 64t$, what is the maximum height reached?",
        "zh": "对于 $h(t) = -16t^2 + 64t$，达到的最大高度是多少？"
      },
      "choices": [
        "$32$ ft",
        "$64$ ft",
        "$128$ ft",
        "$16$ ft"
      ],
      "answer": 1,
      "explanation": {
        "en": "The peak is at $t = 2$ s, so $h(2) = -16(4) + 64(2) = -64 + 128 = 64$ ft. Reporting $2$ (the time) instead of the height, or stopping at $128$ without subtracting the $-64$ term, are the common slips.",
        "zh": "最高点在 $t = 2$ 秒，所以 $h(2) = -16(4) + 64(2) = -64 + 128 = 64$ 英尺。报出 $2$（时间）而非高度，或停在 $128$ 而没减去 $-64$ 项，都是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $h(t) = -16t^2 + 64t$, when does the ball hit the ground?",
        "zh": "对于 $h(t) = -16t^2 + 64t$，球何时落地？"
      },
      "choices": [
        "$2$ s",
        "$8$ s",
        "$4$ s",
        "$64$ s"
      ],
      "answer": 2,
      "explanation": {
        "en": "Set $h = 0$: $-16t^2 + 64t = -16t(t - 4) = 0$, giving $t = 0$ (launch) or $t = 4$ s (landing). Choosing $2$ s gives the time of maximum height, which is halfway to landing, not the landing itself.",
        "zh": "令 $h = 0$：$-16t^2 + 64t = -16t(t - 4) = 0$，得 $t = 0$（发射）或 $t = 4$ 秒（落地）。选 $2$ 秒是最大高度的时刻，即到落地时间的一半，而非落地本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the inequality $x^2 - 4 < 0$.",
        "zh": "解不等式 $x^2 - 4 < 0$。"
      },
      "choices": [
        "$x < 2$",
        "$x > 2$",
        "$x < -2$ or $x > 2$",
        "$-2 < x < 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The roots are $x = \\pm 2$. Since the upward parabola is below zero between its roots, the solution is $-2 < x < 2$. The 'outside' answer $x < -2$ or $x > 2$ is where the expression is positive, the opposite of what is asked.",
        "zh": "根为 $x = \\pm 2$。由于开口向上的抛物线在两根之间低于零，解为 $-2 < x < 2$。“两侧”答案 $x < -2$ 或 $x > 2$ 是表达式为正的区域，与所求相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the inequality $x^2 - x - 6 > 0$.",
        "zh": "解不等式 $x^2 - x - 6 > 0$。"
      },
      "choices": [
        "$x < -2$ or $x > 3$",
        "$-2 < x < 3$",
        "$-3 < x < 2$",
        "$x < -3$ or $x > 2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor: $(x-3)(x+2) > 0$ with roots $-2$ and $3$. An upward parabola is positive outside its roots, so $x < -2$ or $x > 3$. The interval $-2 < x < 3$ is where the expression is negative, and mixing up the root signs gives $-3$ and $2$.",
        "zh": "因式分解：$(x-3)(x+2) > 0$，根为 $-2$ 和 $3$。开口向上的抛物线在两根之外为正，所以 $x < -2$ 或 $x > 3$。区间 $-2 < x < 3$ 是表达式为负的区域，而弄错根的符号会得到 $-3$ 和 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle's length is $3$ more than its width and its area is $40$. Find the width.",
        "zh": "一个矩形的长比宽多 $3$，面积为 $40$。求宽。"
      },
      "choices": [
        "$8$",
        "$5$",
        "$40$",
        "$4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Let width $= w$. Then $w(w+3) = 40$, so $w^2 + 3w - 40 = (w+8)(w-5) = 0$. The width must be positive, so $w = 5$. The root $w = -8$ is rejected as a negative length, and $8$ is the length, not the width.",
        "zh": "设宽为 $w$。则 $w(w+3) = 40$，所以 $w^2 + 3w - 40 = (w+8)(w-5) = 0$。宽必须为正，所以 $w = 5$。根 $w = -8$ 因长度为负被舍去，而 $8$ 是长，不是宽。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does the system $y = x^2$ and $y = x + 2$ have?",
        "zh": "方程组 $y = x^2$ 与 $y = x + 2$ 有几个解？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$2$",
        "infinitely many"
      ],
      "answer": 2,
      "explanation": {
        "en": "Set $x^2 = x + 2$: $x^2 - x - 2 = (x-2)(x+1) = 0$, giving $x = 2$ and $x = -1$. Two distinct $x$-values mean two intersection points. The discriminant $1 + 8 = 9 > 0$ confirms two real solutions rather than one or none.",
        "zh": "令 $x^2 = x + 2$：$x^2 - x - 2 = (x-2)(x+1) = 0$，得 $x = 2$ 和 $x = -1$。两个不同的 $x$ 值意味着两个交点。判别式 $1 + 8 = 9 > 0$ 证实有两个实数解，而非一个或没有。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At most how many points can a line intersect a parabola?",
        "zh": "一条直线最多能与一条抛物线相交于几个点？"
      },
      "choices": [
        "$1$",
        "$3$",
        "infinitely many",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Substituting a line into a parabola gives a quadratic equation, which has at most two real solutions, so at most two intersection points. Expecting three would require a cubic, and 'infinitely many' would only happen if the two curves were identical, which a line and a parabola never are.",
        "zh": "把直线代入抛物线得到一个二次方程，它最多有两个实数解，所以最多两个交点。期望三个需要三次方程，而“无穷多”只有当两条曲线完全相同时才会发生，直线与抛物线绝不会如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 \\le 9$.",
        "zh": "解 $x^2 \\le 9$。"
      },
      "choices": [
        "$-3 \\le x \\le 3$",
        "$x \\le -3$ or $x \\ge 3$",
        "$x \\le 9$",
        "$-9 \\le x \\le 9$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The roots are $x = \\pm 3$, and the upward parabola is at or below $9$ between them, so $-3 \\le x \\le 3$. The 'outside' answer is where $x^2 \\ge 9$, and using $\\pm 9$ forgets to take the square root of $9$.",
        "zh": "根为 $x = \\pm 3$，开口向上的抛物线在两根之间不超过 $9$，所以 $-3 \\le x \\le 3$。“两侧”答案是 $x^2 \\ge 9$ 的区域，而用 $\\pm 9$ 是忘了对 $9$ 开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rocket has height $h(t) = -16t^2 + 32t + 48$. When does it hit the ground?",
        "zh": "一枚火箭的高度为 $h(t) = -16t^2 + 32t + 48$。它何时落地？"
      },
      "choices": [
        "$1$ s",
        "$3$ s",
        "$48$ s",
        "$2$ s"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $h = 0$ and divide by $-16$: $t^2 - 2t - 3 = (t-3)(t+1) = 0$, so $t = 3$ s (rejecting $t = -1$). Choosing $2$ s gives the vertex time; $48$ is the initial height, not a landing time.",
        "zh": "令 $h = 0$ 并除以 $-16$：$t^2 - 2t - 3 = (t-3)(t+1) = 0$，所以 $t = 3$ 秒（舍去 $t = -1$）。选 $2$ 秒是顶点时刻；$48$ 是初始高度，而非落地时间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 + 1 < 0$.",
        "zh": "解 $x^2 + 1 < 0$。"
      },
      "choices": [
        "all real $x$",
        "$x < -1$",
        "no solution",
        "$-1 < x < 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $x^2 \\ge 0$ for every real $x$, $x^2 + 1 \\ge 1 > 0$ always, so the expression is never negative and there is no solution. Answering 'all real $x$' describes where $x^2 + 1 > 0$, the opposite inequality.",
        "zh": "由于对任意实数 $x$ 都有 $x^2 \\ge 0$，所以 $x^2 + 1 \\ge 1 > 0$ 恒成立，表达式永不为负，故无解。答“所有实数 $x$”描述的是 $x^2 + 1 > 0$ 的区域，即相反的不等式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quadratic-linear system has exactly one solution. The discriminant of the resulting quadratic is:",
        "zh": "一个二次-线性方程组恰有一个解。所得二次方程的判别式为："
      },
      "choices": [
        "positive",
        "negative",
        "undefined",
        "zero"
      ],
      "answer": 3,
      "explanation": {
        "en": "Exactly one solution means the line touches the parabola at a single point (tangent), so the combined quadratic has a repeated root, which requires discriminant $= 0$. A positive discriminant gives two intersection points and a negative one gives none.",
        "zh": "恰有一个解意味着直线与抛物线只在一点相切，所以合并后的二次方程有重根，即判别式 $= 0$。判别式为正给出两个交点，为负则没有交点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $h(t) = -16t^2 + 80t$, at what time (seconds) is the maximum height reached?",
        "zh": "对于 $h(t) = -16t^2 + 80t$，在何时（秒）达到最大高度？"
      },
      "answer": "2.5",
      "accept": [
        "5/2",
        "2.50"
      ],
      "explanation": {
        "en": "The vertex time is $t = -\\frac{b}{2a} = -\\frac{80}{2(-16)} = \\frac{80}{32} = 2.5$ s. Dropping the negative in the denominator or dividing $80$ by $16$ alone are the usual errors.",
        "zh": "顶点时刻为 $t = -\\frac{b}{2a} = -\\frac{80}{2(-16)} = \\frac{80}{32} = 2.5$ 秒。漏掉分母中的负号，或只把 $80$ 除以 $16$，都是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $h(t) = -16t^2 + 80t$, what is the maximum height (feet)?",
        "zh": "对于 $h(t) = -16t^2 + 80t$，最大高度是多少（英尺）？"
      },
      "answer": "100",
      "accept": [
        "100.0",
        "100 ft"
      ],
      "explanation": {
        "en": "At $t = 2.5$ s, $h(2.5) = -16(6.25) + 80(2.5) = -100 + 200 = 100$ ft. Reporting $2.5$ gives the time, not the height, and stopping at $200$ forgets the $-100$ term.",
        "zh": "在 $t = 2.5$ 秒时，$h(2.5) = -16(6.25) + 80(2.5) = -100 + 200 = 100$ 英尺。报 $2.5$ 是时间而非高度，停在 $200$ 是忘了 $-100$ 项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle's length is $2$ more than its width and its area is $35$. Find the width.",
        "zh": "一个矩形的长比宽多 $2$，面积为 $35$。求宽。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Solve $w(w+2) = 35$: $w^2 + 2w - 35 = (w+7)(w-5) = 0$, so $w = 5$ (rejecting $w = -7$ as a negative length). The value $7$ is the length, not the width.",
        "zh": "解 $w(w+2) = 35$：$w^2 + 2w - 35 = (w+7)(w-5) = 0$，所以 $w = 5$（舍去 $w = -7$，因长度不能为负）。$7$ 是长，不是宽。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The inequality $x^2 - 5x + 6 \\ge 0$ has boundary points at the roots of $x^2 - 5x + 6 = 0$. What is the larger root?",
        "zh": "不等式 $x^2 - 5x + 6 \\ge 0$ 的边界点是 $x^2 - 5x + 6 = 0$ 的根。较大的根是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Factor: $(x-2)(x-3) = 0$, giving roots $2$ and $3$. The larger root is $3$. Sign errors when factoring would flip these to $-2$ and $-3$.",
        "zh": "因式分解：$(x-2)(x-3) = 0$，根为 $2$ 和 $3$。较大的根是 $3$。因式分解时的符号错误会把它们变成 $-2$ 和 $-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve the system $y = x^2 - 1$ and $y = 3$. Give the positive value of $x$.",
        "zh": "解方程组 $y = x^2 - 1$ 与 $y = 3$，写出 $x$ 的正值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Set $x^2 - 1 = 3$, so $x^2 = 4$ and $x = \\pm 2$. The positive value is $2$. Forgetting to add the $1$ back (using $x^2 = 3$) is the common slip.",
        "zh": "令 $x^2 - 1 = 3$，则 $x^2 = 4$，$x = \\pm 2$。正值为 $2$。忘记把 $1$ 加回（用 $x^2 = 3$）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $h(t) = -16t^2 + 48t$, at what time (seconds) does the object return to the ground?",
        "zh": "对于 $h(t) = -16t^2 + 48t$，物体在何时（秒）返回地面？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Set $h = 0$: $-16t(t - 3) = 0$, giving $t = 0$ (launch) or $t = 3$ s (landing). Choosing $1.5$ s would give the vertex time, the halfway point, not the landing.",
        "zh": "令 $h = 0$：$-16t(t - 3) = 0$，得 $t = 0$（发射）或 $t = 3$ 秒（落地）。选 $1.5$ 秒是顶点时刻，即中点，而非落地。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many intersection points do $y = x^2 + 1$ and $y = x - 1$ have?",
        "zh": "$y = x^2 + 1$ 与 $y = x - 1$ 有几个交点？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "zero",
        "none"
      ],
      "explanation": {
        "en": "Set $x^2 + 1 = x - 1$: $x^2 - x + 2 = 0$ with discriminant $1 - 8 = -7 < 0$, so there are no real intersection points. A negative discriminant means the line misses the parabola entirely.",
        "zh": "令 $x^2 + 1 = x - 1$：$x^2 - x + 2 = 0$，判别式为 $1 - 8 = -7 < 0$，所以没有实数交点。判别式为负意味着直线完全错过抛物线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 < 16$. Give the upper bound of the solution interval.",
        "zh": "解 $x^2 < 16$，写出解区间的上界。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The roots are $x = \\pm 4$, and the solution is $-4 < x < 4$, so the upper bound is $4$. Using $16$ forgets to take the square root, and treating it like $x < 16$ ignores the two-sided nature of the inequality.",
        "zh": "根为 $x = \\pm 4$，解为 $-4 < x < 4$，所以上界为 $4$。用 $16$ 是忘了开平方，而当作 $x < 16$ 则忽略了不等式的双侧性质。"
      }
    }
  ],
  "polynomial-functions/end-behavior-graphs": [
    {
      "type": "mc",
      "question": {
        "en": "What is the end behavior of $f(x) = 3x^4 - 5x^2 + 1$?",
        "zh": "$f(x) = 3x^4 - 5x^2 + 1$ 的两端走向是什么？"
      },
      "choices": [
        "As $x \\rightarrow \\pm\\infty$, $f(x) \\rightarrow +\\infty$",
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow -\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow +\\infty$",
        "As $x \\rightarrow \\pm\\infty$, $f(x) \\rightarrow -\\infty$",
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow +\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow -\\infty$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Even degree (4) with a positive leading coefficient means both ends rise to $+\\infty$. Treating it like an odd-degree function would wrongly make the ends go in opposite directions.",
        "zh": "偶次（4 次）且首项系数为正，两端都升向 $+\\infty$。若误当作奇次函数，则会错误地让两端走向相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the end behavior of $f(x) = -2x^3 + 7x$?",
        "zh": "$f(x) = -2x^3 + 7x$ 的两端走向是什么？"
      },
      "choices": [
        "Both ends rise to $+\\infty$",
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow +\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow -\\infty$",
        "Both ends fall to $-\\infty$",
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow -\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow +\\infty$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Odd degree (3) with a negative leading coefficient gives a left end up and right end down. Ignoring the negative sign would flip both ends the wrong way.",
        "zh": "奇次（3 次）且首项系数为负，左端升、右端降。若忽略负号，则两端方向都会弄反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a polynomial whose graph falls to $-\\infty$ on the left and rises to $+\\infty$ on the right, which is true?",
        "zh": "若某多项式图象在左端降向 $-\\infty$、右端升向 $+\\infty$，下列哪项正确？"
      },
      "choices": [
        "Even degree, positive leading coefficient",
        "Even degree, negative leading coefficient",
        "Odd degree, positive leading coefficient",
        "Odd degree, negative leading coefficient"
      ],
      "answer": 2,
      "explanation": {
        "en": "Ends going in opposite directions means odd degree; rising on the right means a positive leading coefficient. Concluding even degree ignores that the two ends disagree.",
        "zh": "两端方向相反说明是奇次；右端上升说明首项系数为正。若判断为偶次，则忽略了两端方向不一致这一事实。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At a zero of even multiplicity, the graph of a polynomial does what to the x-axis?",
        "zh": "在偶数重根处，多项式图象对 x 轴表现如何？"
      },
      "choices": [
        "Crosses through it",
        "Becomes a straight horizontal line",
        "Has a vertical asymptote there",
        "Touches it and turns back (bounces)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Even multiplicity makes the factor never change sign, so the curve touches and bounces off the axis. Expecting it to cross is the behavior of odd multiplicity, not even.",
        "zh": "偶数重根使该因式不变号，所以曲线触及 x 轴后反弹。若以为它会穿过，那是奇数重根的行为，而非偶数重根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The polynomial $f(x) = (x-1)^3(x+2)$ behaves how at $x = 1$?",
        "zh": "多项式 $f(x) = (x-1)^3(x+2)$ 在 $x = 1$ 处表现如何？"
      },
      "choices": [
        "Crosses the axis, flattening as it passes",
        "Touches and bounces off the axis",
        "Jumps discontinuously",
        "Has a hole in the graph"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiplicity 3 is odd, so the graph crosses, and the higher odd power makes it flatten near the axis. Predicting a bounce would require an even multiplicity.",
        "zh": "重数为 3 是奇数，所以图象穿过 x 轴，而较高的奇次幂使其在轴附近变平。若预测为反弹，则需要偶数重根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A polynomial of degree $n$ has at most how many turning points?",
        "zh": "一个 $n$ 次多项式最多有多少个拐点（极值点）？"
      },
      "choices": [
        "$n$",
        "$n - 1$",
        "$n + 1$",
        "$2n$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A degree-$n$ polynomial has at most $n-1$ turning points. Saying $n$ confuses the maximum number of real zeros with the maximum number of turning points.",
        "zh": "$n$ 次多项式最多有 $n-1$ 个拐点。若答 $n$，则把实根的最大个数与拐点的最大个数混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the maximum number of real zeros of a degree-5 polynomial?",
        "zh": "5 次多项式最多有多少个实根？"
      },
      "choices": [
        "4",
        "6",
        "5",
        "10"
      ],
      "answer": 2,
      "explanation": {
        "en": "The degree equals the maximum number of real zeros, so 5. Answering 4 confuses zeros with the maximum $n-1$ turning points.",
        "zh": "次数等于实根的最大个数，所以是 5。若答 4，则把实根与最多 $n-1$ 个拐点混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which factored polynomial touches the x-axis at $x = 3$ without crossing?",
        "zh": "下列哪个因式分解的多项式在 $x = 3$ 处触及 x 轴但不穿过？"
      },
      "choices": [
        "$(x-3)(x+1)$",
        "$(x+3)^2(x-1)$",
        "$(x-3)^3(x+1)$",
        "$(x-3)^2(x+1)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A squared factor $(x-3)^2$ gives even multiplicity at $x=3$, so the graph touches and turns. A first-power factor would cross instead of bounce.",
        "zh": "平方因式 $(x-3)^2$ 使 $x=3$ 处为偶数重根，图象触及后反弹。若为一次因式，则会穿过而非反弹。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As $x \\rightarrow -\\infty$, what happens to $f(x) = 5 - 2x^6$?",
        "zh": "当 $x \\rightarrow -\\infty$ 时，$f(x) = 5 - 2x^6$ 会怎样？"
      },
      "choices": [
        "$f(x) \\rightarrow -\\infty$",
        "$f(x) \\rightarrow 5$",
        "$f(x) \\rightarrow +\\infty$",
        "$f(x) \\rightarrow 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The leading term $-2x^6$ dominates; even power keeps $x^6$ positive and the negative coefficient sends it to $-\\infty$. Thinking it approaches the constant 5 ignores that the leading term grows without bound.",
        "zh": "首项 $-2x^6$ 起主导作用；偶次使 $x^6$ 为正，负系数将其送向 $-\\infty$。若以为它趋近常数 5，则忽略了首项无界增长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about $f(x) = x^2(x-4)$ is correct?",
        "zh": "关于 $f(x) = x^2(x-4)$ 的下列陈述哪项正确？"
      },
      "choices": [
        "It crosses at $x=0$ and bounces at $x=4$",
        "It bounces at $x=0$ and crosses at $x=4$",
        "It bounces at both zeros",
        "It crosses at both zeros"
      ],
      "answer": 1,
      "explanation": {
        "en": "The factor $x^2$ gives even multiplicity at $x=0$ (bounce) while $(x-4)$ has multiplicity 1 at $x=4$ (cross). Swapping these misreads which factor is squared.",
        "zh": "因式 $x^2$ 使 $x=0$ 为偶数重根（反弹），而 $(x-4)$ 在 $x=4$ 为一重根（穿过）。若把两者互换，则读错了哪个因式被平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A degree-4 polynomial with a positive leading coefficient can have at most how many turning points?",
        "zh": "首项系数为正的 4 次多项式最多有多少个拐点？"
      },
      "choices": [
        "2",
        "4",
        "3",
        "1"
      ],
      "answer": 2,
      "explanation": {
        "en": "Maximum turning points is $n-1 = 4-1 = 3$. Answering 4 uses the degree itself instead of $n-1$.",
        "zh": "拐点最大数为 $n-1 = 4-1 = 3$。若答 4，则用了次数本身而非 $n-1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two polynomials both have degree 3, but graph A rises on the right while graph B falls on the right. What differs?",
        "zh": "两个多项式都是 3 次，但图象 A 右端上升、图象 B 右端下降。区别在于什么？"
      },
      "choices": [
        "Their degree parity",
        "The number of real zeros",
        "The constant term",
        "The sign of the leading coefficient"
      ],
      "answer": 3,
      "explanation": {
        "en": "With the same odd degree, the right-end direction is set by the leading coefficient sign. Attributing it to degree parity is impossible when both degrees are 3.",
        "zh": "在相同奇次下，右端方向由首项系数的符号决定。若归因于次数奇偶性，则不成立，因为两者都是 3 次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = 7x^5 - 3x^2$, as $x \\rightarrow +\\infty$ does $f(x)$ go to $+\\infty$ or $-\\infty$? Answer with the sign symbol (e.g. +infinity as \"+inf\").",
        "zh": "对于 $f(x) = 7x^5 - 3x^2$，当 $x \\rightarrow +\\infty$ 时 $f(x)$ 趋向 $+\\infty$ 还是 $-\\infty$？用符号作答（如正无穷记为 \"+inf\"）。"
      },
      "answer": "+inf",
      "accept": [
        "+inf",
        "+infinity",
        "positive infinity",
        "+∞",
        "正无穷",
        "正无穷大",
        "plus infinity",
        "inf"
      ],
      "explanation": {
        "en": "Odd degree with a positive leading coefficient rises on the right, so $f(x) \\rightarrow +\\infty$. The lower $-3x^2$ term does not affect the far-right end behavior.",
        "zh": "奇次且首项系数为正，右端上升，故 $f(x) \\rightarrow +\\infty$。较低次的 $-3x^2$ 项不影响远右端的走向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the multiplicity of the zero $x = 2$ in $f(x) = (x-2)^4(x+5)$?",
        "zh": "在 $f(x) = (x-2)^4(x+5)$ 中，零点 $x = 2$ 的重数是多少？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "The exponent on $(x-2)$ is the multiplicity, which is 4. The other factor $(x+5)$ belongs to the zero $x=-5$, not to $x=2$.",
        "zh": "$(x-2)$ 的指数即为重数，是 4。另一个因式 $(x+5)$ 属于零点 $x=-5$，与 $x=2$ 无关。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many real zeros (counting multiplicity) does $f(x) = (x-1)^2(x+3)^3$ have?",
        "zh": "$f(x) = (x-1)^2(x+3)^3$ 共有多少个实根（按重数计）？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "five",
        "五"
      ],
      "explanation": {
        "en": "Add the multiplicities: $2 + 3 = 5$. Counting only the two distinct zeros would give 2 and miss the repeated roots.",
        "zh": "将重数相加：$2 + 3 = 5$。若只数两个不同的零点得 2，则漏掉了重根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the maximum number of turning points on the graph of a degree-7 polynomial?",
        "zh": "7 次多项式图象最多有多少个拐点？"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "six",
        "六"
      ],
      "explanation": {
        "en": "Maximum turning points is $n-1 = 7-1 = 6$. Answering 7 mistakes the degree for the turning-point count.",
        "zh": "拐点最大数为 $n-1 = 7-1 = 6$。若答 7，则把次数误当作拐点数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At how many x-values does the graph of $f(x) = x(x-2)^2(x+1)$ CROSS (not just touch) the x-axis?",
        "zh": "$f(x) = x(x-2)^2(x+1)$ 的图象在多少个 x 值处穿过（而非仅触及）x 轴？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "二"
      ],
      "explanation": {
        "en": "Odd-multiplicity zeros $x=0$ and $x=-1$ cross; the even-multiplicity zero $x=2$ only touches. Counting all three zeros ignores that the squared factor bounces.",
        "zh": "奇数重根 $x=0$ 和 $x=-1$ 穿过；偶数重根 $x=2$ 只触及。若把三个零点都算上，则忽略了平方因式会反弹。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The leading term of $f(x) = -4x^6 + 2x^3 - 9$ determines the end behavior. Both ends go to which infinity? Answer \"+inf\" or \"-inf\".",
        "zh": "$f(x) = -4x^6 + 2x^3 - 9$ 的首项决定两端走向。两端都趋向哪个无穷？答 \"+inf\" 或 \"-inf\"。"
      },
      "answer": "-inf",
      "accept": [
        "-inf",
        "-infinity",
        "negative infinity",
        "-∞",
        "负无穷",
        "负无穷大",
        "minus infinity"
      ],
      "explanation": {
        "en": "Even degree makes both ends match; the negative leading coefficient sends both to $-\\infty$. Forgetting the negative sign would wrongly give $+\\infty$.",
        "zh": "偶次使两端一致；首项系数为负将两端都送向 $-\\infty$。若忘记负号，则会错答 $+\\infty$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the y-intercept of $f(x) = (x-3)(x+2)(x-1)$? (Give the number.)",
        "zh": "$f(x) = (x-3)(x+2)(x-1)$ 的 y 轴截距是多少？（给出数值。）"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "+6",
        "six",
        "六"
      ],
      "explanation": {
        "en": "Set $x=0$: $(-3)(2)(-1) = 6$. Multiplying the roots $3 \\cdot (-2) \\cdot 1$ directly gives the wrong sign because each factor is $(x - \\text{root})$ evaluated at 0.",
        "zh": "令 $x=0$：$(-3)(2)(-1) = 6$。若直接把根相乘 $3 \\cdot (-2) \\cdot 1$，符号会错，因为每个因式在 0 处的值是 $(0 - \\text{根})$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A polynomial has degree 4 and its graph shows exactly 1 turning point. Is that possible? Answer \"yes\" or \"no\".",
        "zh": "某多项式为 4 次，图象恰好有 1 个拐点。这可能吗？答 \"yes\" 或 \"no\"。"
      },
      "answer": "yes",
      "accept": [
        "yes",
        "y",
        "是",
        "可以",
        "possible",
        "true"
      ],
      "explanation": {
        "en": "The count $n-1$ is only the maximum; a degree-4 graph may have 1 or 3 turning points. Assuming it must have exactly 3 confuses the maximum with a required value.",
        "zh": "$n-1$ 只是最大值；4 次图象可以有 1 个或 3 个拐点。若认为必须恰好 3 个，则把最大值误当作必然值。"
      }
    }
  ],
  "polynomial-functions/division-remainder-factor": [
    {
      "type": "mc",
      "question": {
        "en": "By the Remainder Theorem, the remainder when $f(x)$ is divided by $(x - c)$ equals what?",
        "zh": "根据余数定理，$f(x)$ 除以 $(x - c)$ 的余数等于什么？"
      },
      "choices": [
        "$f(c)$",
        "$f(-c)$",
        "$f(0)$",
        "$c \\cdot f(x)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Dividing by $(x-c)$ leaves remainder $f(c)$. Using $f(-c)$ mishandles the sign inside the divisor $(x-c)$.",
        "zh": "除以 $(x-c)$ 的余数是 $f(c)$。若用 $f(-c)$，则弄错了除式 $(x-c)$ 中的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = x^3 - 2x^2 + 3x - 4$, what is the remainder when divided by $(x - 2)$?",
        "zh": "对于 $f(x) = x^3 - 2x^2 + 3x - 4$，除以 $(x - 2)$ 的余数是多少？"
      },
      "choices": [
        "$-2$",
        "$2$",
        "$0$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the Remainder Theorem, $f(2) = 8 - 8 + 6 - 4 = 2$. Evaluating $f(-2)$ instead would use the wrong sign for $c$.",
        "zh": "根据余数定理，$f(2) = 8 - 8 + 6 - 4 = 2$。若改算 $f(-2)$，则 $c$ 的符号取错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "According to the Factor Theorem, $(x - c)$ is a factor of $f(x)$ exactly when:",
        "zh": "根据因式定理，$(x - c)$ 是 $f(x)$ 的因式当且仅当："
      },
      "choices": [
        "$f(0) = c$",
        "$f(c) = 1$",
        "$f(c) = 0$",
        "$f'(c) = 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A zero remainder means $f(c) = 0$, so $(x-c)$ divides evenly. Requiring $f(c)=1$ misremembers that a factor leaves remainder zero, not one.",
        "zh": "余数为零意味着 $f(c) = 0$，故 $(x-c)$ 能整除。若要求 $f(c)=1$，则记错了因式应余数为零而非一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Dividing $x^2 + 5x + 6$ by $(x + 2)$ gives which quotient?",
        "zh": "$x^2 + 5x + 6$ 除以 $(x + 2)$ 得到的商是什么？"
      },
      "choices": [
        "$x + 2$",
        "$x - 3$",
        "$x + 4$",
        "$x + 3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x^2+5x+6 = (x+2)(x+3)$, so the quotient is $x+3$ with remainder 0. Writing $x-3$ flips the sign of the root.",
        "zh": "$x^2+5x+6 = (x+2)(x+3)$，故商为 $x+3$，余数为 0。若写成 $x-3$，则把根的符号弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using synthetic division of $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$, what is the remainder?",
        "zh": "用综合除法把 $x^3 - 6x^2 + 11x - 6$ 除以 $(x - 1)$，余数是多少？"
      },
      "choices": [
        "$0$",
        "$-6$",
        "$1$",
        "$6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Synthetic division with 1 yields 1, $-5$, 6, and a final 0, so $x=1$ is a root. A nonzero remainder would mean $(x-1)$ is not a factor, which is not the case here.",
        "zh": "以 1 作综合除法得到 1、$-5$、6，最后为 0，故 $x=1$ 是根。若余数非零，则 $(x-1)$ 不是因式，但此处并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When setting up synthetic division to divide by $(x + 3)$, what number goes in the box?",
        "zh": "用综合除法除以 $(x + 3)$ 时，方框里放的数是多少？"
      },
      "choices": [
        "$3$",
        "$-3$",
        "$\\frac{1}{3}$",
        "$0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $x+3=0$, giving $c=-3$. Using $+3$ ignores that the divisor's zero is the negative of the constant.",
        "zh": "令 $x+3=0$，得 $c=-3$。若用 $+3$，则忽略了除式的零点是常数的相反数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(2) = 0$ for a polynomial $f$, which is guaranteed?",
        "zh": "若多项式 $f$ 满足 $f(2) = 0$，下列哪项一定成立？"
      },
      "choices": [
        "$(x + 2)$ is a factor",
        "The remainder over $(x-2)$ is 2",
        "$(x - 2)$ is a factor",
        "$f$ has degree 2"
      ],
      "answer": 2,
      "explanation": {
        "en": "$f(2)=0$ means $(x-2)$ divides $f$ evenly. Choosing $(x+2)$ reverses the sign relationship between a root and its factor.",
        "zh": "$f(2)=0$ 说明 $(x-2)$ 能整除 $f$。若选 $(x+2)$，则弄反了根与其因式之间的符号关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given that $x = 3$ is a zero of $f(x) = x^3 - 4x^2 + x + 6$, the remaining quadratic factor is:",
        "zh": "已知 $x = 3$ 是 $f(x) = x^3 - 4x^2 + x + 6$ 的零点，剩下的二次因式是："
      },
      "choices": [
        "$x^2 - x + 2$",
        "$x^2 + x - 2$",
        "$x^2 - 7x + 22$",
        "$x^2 - x - 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Synthetic division by $(x-3)$ gives $1, -1, -2, 0$, so the factor is $x^2 - x - 2$. Sign slips in the synthetic steps produce the near-miss with $+x$.",
        "zh": "以 $(x-3)$ 作综合除法得 $1, -1, -2, 0$，故因式为 $x^2 - x - 2$。综合除法步骤中的符号失误会产生带 $+x$ 的相近错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The polynomial long division of $2x^2 + 3x - 5$ by $(x - 1)$ has what remainder?",
        "zh": "$2x^2 + 3x - 5$ 除以 $(x - 1)$ 的多项式长除法余数是多少？"
      },
      "choices": [
        "$0$",
        "$5$",
        "$-10$",
        "$-5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the Remainder Theorem, $f(1) = 2 + 3 - 5 = 0$, so it divides evenly. Reading the constant term $-5$ as the remainder skips the evaluation step.",
        "zh": "由余数定理，$f(1) = 2 + 3 - 5 = 0$，可整除。若把常数项 $-5$ 当作余数，则跳过了代入求值这一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $g(x) = x^4 - 1$, what is $g(1)$, i.e. the remainder over $(x - 1)$?",
        "zh": "对于 $g(x) = x^4 - 1$，$g(1)$ 是多少，即除以 $(x - 1)$ 的余数？"
      },
      "choices": [
        "$2$",
        "$0$",
        "$-1$",
        "$1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$g(1) = 1 - 1 = 0$, so $(x-1)$ is a factor. Answering $-1$ uses only the constant term and forgets to substitute $x=1$ into $x^4$.",
        "zh": "$g(1) = 1 - 1 = 0$，故 $(x-1)$ 是因式。若答 $-1$，则只用了常数项，忘了把 $x=1$ 代入 $x^4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In long division, after subtracting you should bring down the next term. What common error changes the answer?",
        "zh": "在长除法中，减法之后应把下一项落下来。哪种常见错误会改变结果？"
      },
      "choices": [
        "Multiplying the divisor by the quotient term",
        "Aligning like-degree terms in columns",
        "Forgetting to distribute the minus sign when subtracting",
        "Writing a zero placeholder for a missing term"
      ],
      "answer": 2,
      "explanation": {
        "en": "Failing to distribute the subtraction across every term flips signs and corrupts the running polynomial. The other listed actions are correct steps of the algorithm.",
        "zh": "减法时未把负号分配到每一项会导致符号出错、破坏中间多项式。所列的其他动作都是算法的正确步骤。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If dividing $f(x)$ by $(x - 4)$ leaves remainder 7, then $f(4)$ equals:",
        "zh": "若 $f(x)$ 除以 $(x - 4)$ 余数为 7，则 $f(4)$ 等于："
      },
      "choices": [
        "$-7$",
        "$4$",
        "$0$",
        "$7$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The Remainder Theorem directly gives $f(4) = 7$. Answering 0 would only hold if $(x-4)$ were a factor, but the remainder is nonzero.",
        "zh": "余数定理直接给出 $f(4) = 7$。只有当 $(x-4)$ 是因式时才为 0，但此处余数非零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find $f(-1)$ for $f(x) = x^3 + 2x^2 - x + 5$ (this is the remainder over $(x+1)$).",
        "zh": "求 $f(-1)$，其中 $f(x) = x^3 + 2x^2 - x + 5$（即除以 $(x+1)$ 的余数）。"
      },
      "answer": "7",
      "accept": [
        "7",
        "7.0",
        "+7",
        "seven",
        "七"
      ],
      "explanation": {
        "en": "$f(-1) = -1 + 2 + 1 + 5 = 7$. Sign errors on the $-x$ term (giving $-1$ instead of $+1$) are the usual slip.",
        "zh": "$f(-1) = -1 + 2 + 1 + 5 = 7$。对 $-x$ 项的符号处理出错（本应 $+1$ 却得 $-1$）是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Divide $x^2 - 9$ by $(x - 3)$. What is the quotient? (Give the polynomial.)",
        "zh": "把 $x^2 - 9$ 除以 $(x - 3)$，商是什么？（给出多项式。）"
      },
      "answer": "x+3",
      "accept": [
        "x+3",
        "x + 3",
        "(x+3)",
        "3+x",
        "x＋3"
      ],
      "explanation": {
        "en": "$x^2 - 9 = (x-3)(x+3)$, so the quotient is $x+3$ with remainder 0. Writing $x-3$ repeats the divisor instead of the other factor.",
        "zh": "$x^2 - 9 = (x-3)(x+3)$，故商为 $x+3$，余数为 0。若写成 $x-3$，则重复了除式而非另一个因式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Is $(x - 2)$ a factor of $f(x) = x^3 - 3x^2 + 4$? Answer \"yes\" or \"no\".",
        "zh": "$(x - 2)$ 是 $f(x) = x^3 - 3x^2 + 4$ 的因式吗？答 \"yes\" 或 \"no\"。"
      },
      "answer": "yes",
      "accept": [
        "yes",
        "y",
        "是",
        "是的",
        "true"
      ],
      "explanation": {
        "en": "$f(2) = 8 - 12 + 4 = 0$, so by the Factor Theorem $(x-2)$ is a factor. Concluding no would mean overlooking that the value evaluates to zero.",
        "zh": "$f(2) = 8 - 12 + 4 = 0$，由因式定理 $(x-2)$ 是因式。若答否，则忽略了代入值恰为零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using synthetic division of $x^3 - 7x + 6$ by $(x - 2)$, what is the remainder?",
        "zh": "用综合除法把 $x^3 - 7x + 6$ 除以 $(x - 2)$，余数是多少？"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0",
        "zero",
        "零"
      ],
      "explanation": {
        "en": "$f(2) = 8 - 14 + 6 = 0$, so the remainder is 0 and $(x-2)$ is a factor. Forgetting the missing $x^2$ term's zero placeholder is what usually derails this.",
        "zh": "$f(2) = 8 - 14 + 6 = 0$，故余数为 0，$(x-2)$ 是因式。忘记为缺失的 $x^2$ 项补零占位是常见出错原因。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $x = -2$ is a zero of $f(x) = x^3 + 2x^2 - 4x - 8$, factor out $(x+2)$ and give the remaining quadratic factor.",
        "zh": "已知 $x = -2$ 是 $f(x) = x^3 + 2x^2 - 4x - 8$ 的零点，分离出 $(x+2)$，给出剩余的二次因式。"
      },
      "answer": "x^2-4",
      "accept": [
        "x^2-4",
        "x^2 - 4",
        "x²-4",
        "(x-2)(x+2)",
        "x^2-4.0",
        "x**2-4"
      ],
      "explanation": {
        "en": "Synthetic division by $-2$ gives $1, 0, -4, 0$, so the quotient is $x^2 - 4$. Dropping the zero coefficient for the middle term would shift the digits and give a wrong factor.",
        "zh": "以 $-2$ 作综合除法得 $1, 0, -4, 0$，故商为 $x^2 - 4$。若漏掉中间项的零系数，则数字错位，得到错误因式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What value of $c$ makes $(x - c)$ a factor of $f(x) = x^2 - 5x + 6$ where $c$ is the larger root?",
        "zh": "取较大的根 $c$，使 $(x - c)$ 成为 $f(x) = x^2 - 5x + 6$ 的因式，$c$ 是多少？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3",
        "three",
        "三"
      ],
      "explanation": {
        "en": "$x^2-5x+6=(x-2)(x-3)$; the larger root is 3, and $f(3)=0$. Picking 2 would give the smaller root instead of the larger one requested.",
        "zh": "$x^2-5x+6=(x-2)(x-3)$；较大的根是 3，且 $f(3)=0$。若选 2，则取到较小的根，而非题目要求的较大者。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Divide $6x^2 + 7x - 3$ by $(2x - 1)$. What is the quotient? (Give the polynomial.)",
        "zh": "把 $6x^2 + 7x - 3$ 除以 $(2x - 1)$，商是什么？（给出多项式。）"
      },
      "answer": "3x+5",
      "accept": [
        "3x+5",
        "3x + 5",
        "(3x+5)",
        "5+3x"
      ],
      "explanation": {
        "en": "Long division: $6x^2+7x-3 = (2x-1)(3x+5) + 2$, so the quotient is $3x+5$ with remainder 2. Stopping after the first term $3x$ forgets to continue dividing the new leading term.",
        "zh": "长除法：$6x^2+7x-3 = (2x-1)(3x+5) + 2$，故商为 $3x+5$，余数为 2。若在第一项 $3x$ 后就停下，则忘了继续对新的首项作除。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = 3x^3 - 2x + 1$, compute $f(0)$ (the remainder over $x$, i.e. over $(x-0)$).",
        "zh": "对于 $f(x) = 3x^3 - 2x + 1$，计算 $f(0)$（即除以 $x$，也就是 $(x-0)$ 的余数）。"
      },
      "answer": "1",
      "accept": [
        "1",
        "1.0",
        "+1",
        "one",
        "一"
      ],
      "explanation": {
        "en": "$f(0) = 1$, the constant term, since every term with $x$ vanishes. Including the $3x^3$ or $-2x$ contribution ignores that they are zero at $x=0$.",
        "zh": "$f(0) = 1$，即常数项，因为含 $x$ 的每一项都为零。若把 $3x^3$ 或 $-2x$ 计入，则忽略了它们在 $x=0$ 处为零。"
      }
    }
  ],
  "polynomial-functions/solving-polynomial-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Factor the difference of cubes $x^3 - 8$.",
        "zh": "分解立方差 $x^3 - 8$。"
      },
      "choices": [
        "$(x-2)(x^2+2x+4)$",
        "$(x-2)(x^2-2x+4)$",
        "$(x+2)(x^2-2x+4)$",
        "$(x-2)(x^2+4x+4)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $a=x,\\ b=2$: $a^3-b^3=(a-b)(a^2+ab+b^2)=(x-2)(x^2+2x+4)$. Making the middle sign negative confuses the difference-of-cubes pattern with the sum-of-cubes pattern.",
        "zh": "取 $a=x,\\ b=2$：$a^3-b^3=(a-b)(a^2+ab+b^2)=(x-2)(x^2+2x+4)$。若把中间符号写成负号，则把立方差公式与立方和公式混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor the sum of cubes $x^3 + 27$.",
        "zh": "分解立方和 $x^3 + 27$。"
      },
      "choices": [
        "$(x+3)(x^2+3x+9)$",
        "$(x+3)(x^2-3x+9)$",
        "$(x-3)(x^2+3x+9)$",
        "$(x+3)(x^2-3x-9)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $a=x,\\ b=3$: $a^3+b^3=(a+b)(a^2-ab+b^2)=(x+3)(x^2-3x+9)$. A positive middle term would come from misusing the difference-of-cubes sign.",
        "zh": "取 $a=x,\\ b=3$：$a^3+b^3=(a+b)(a^2-ab+b^2)=(x+3)(x^2-3x+9)$。若中间项为正号，则误用了立方差的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Fundamental Theorem of Algebra, a degree-5 polynomial has exactly how many roots in the complex numbers (counting multiplicity)?",
        "zh": "根据代数基本定理，5 次多项式在复数范围内恰好有多少个根（按重数计）？"
      },
      "choices": [
        "At most 5",
        "At most 4",
        "5",
        "It depends on the coefficients"
      ],
      "answer": 2,
      "explanation": {
        "en": "Counting multiplicity over the complex numbers, the count equals the degree exactly, 5. Saying at most 5 describes real roots, not the full complex count.",
        "zh": "在复数范围内按重数计，根数恰等于次数，即 5。若说至多 5 个，那是实根的情形，而非完整的复数根数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a polynomial has real coefficients and $2 + 3i$ is a root, which must also be a root?",
        "zh": "若某多项式系数为实数且 $2 + 3i$ 是根，则下列哪个也一定是根？"
      },
      "choices": [
        "$-2 + 3i$",
        "$3 + 2i$",
        "$-2 - 3i$",
        "$2 - 3i$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Complex roots of real-coefficient polynomials come in conjugate pairs, so $2-3i$ is forced. Negating the real part instead of the imaginary part misapplies conjugation.",
        "zh": "实系数多项式的复根成共轭对出现，故 $2-3i$ 必为根。若改变实部而非虚部的符号，则误用了共轭运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor by grouping: $x^3 + 2x^2 + 3x + 6$.",
        "zh": "用分组分解：$x^3 + 2x^2 + 3x + 6$。"
      },
      "choices": [
        "$(x+2)(x^2+3)$",
        "$(x+3)(x^2+2)$",
        "$(x+2)(x^2-3)$",
        "$(x^2+2)(x+3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Group as $x^2(x+2)+3(x+2)=(x+2)(x^2+3)$. Pairing the terms so the common binomial does not match is the usual grouping error.",
        "zh": "分组为 $x^2(x+2)+3(x+2)=(x+2)(x^2+3)$。若配对方式使公因二项式不一致，则是分组时的常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Rational Root Theorem, which is a possible rational root of $2x^3 - 3x^2 + 4x - 6$?",
        "zh": "根据有理根定理，$2x^3 - 3x^2 + 4x - 6$ 的可能有理根是哪个？"
      },
      "choices": [
        "$\\frac{2}{3}$",
        "$\\frac{3}{2}$",
        "$5$",
        "$\\frac{1}{4}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Possible roots are $\\pm\\frac{p}{q}$ with $p \\mid 6$ and $q \\mid 2$, and $\\frac{3}{2}$ fits. Writing $\\frac{2}{3}$ swaps the numerator and denominator roles of $p$ and $q$.",
        "zh": "可能的根为 $\\pm\\frac{p}{q}$，其中 $p \\mid 6$ 且 $q \\mid 2$，$\\frac{3}{2}$ 符合。若写成 $\\frac{2}{3}$，则把 $p$ 与 $q$ 的分子分母角色弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 + 16 = 0$ over the complex numbers.",
        "zh": "在复数范围内解 $x^2 + 16 = 0$。"
      },
      "choices": [
        "$x = \\pm 4$",
        "$x = \\pm 8i$",
        "$x = \\pm 4i$",
        "$x = \\pm 16i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$x^2=-16$ gives $x=\\pm\\sqrt{-16}=\\pm 4i$. Forgetting the imaginary unit and answering $\\pm 4$ ignores that $-16$ has no real square root.",
        "zh": "$x^2=-16$ 得 $x=\\pm\\sqrt{-16}=\\pm 4i$。若忘记虚数单位而答 $\\pm 4$，则忽略了 $-16$ 没有实数平方根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many non-real complex roots does a cubic with real coefficients and exactly one real root have?",
        "zh": "一个实系数、恰有一个实根的三次方程有多少个非实复根？"
      },
      "choices": [
        "1",
        "0",
        "3",
        "2"
      ],
      "answer": 3,
      "explanation": {
        "en": "A cubic has 3 roots total; one real leaves 2, which must be a conjugate pair. Answering 1 is impossible because non-real roots always come in pairs.",
        "zh": "三次方程共有 3 个根；一个实根剩下 2 个，必成共轭对。若答 1 则不可能，因为非实根总是成对出现。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which quadratic has roots $3i$ and $-3i$?",
        "zh": "哪个二次式的根是 $3i$ 和 $-3i$？"
      },
      "choices": [
        "$x^2 + 9$",
        "$x^2 - 6x + 9$",
        "$x^2 - 9$",
        "$x^2 + 6x + 9$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$(x-3i)(x+3i)=x^2-(3i)^2=x^2+9$. Choosing $x^2-9$ forgets that $(3i)^2=-9$, which flips the constant sign.",
        "zh": "$(x-3i)(x+3i)=x^2-(3i)^2=x^2+9$。若选 $x^2-9$，则忘了 $(3i)^2=-9$，导致常数符号相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 - 2x + 5 = 0$.",
        "zh": "解 $x^2 - 2x + 5 = 0$。"
      },
      "choices": [
        "$x = -1 \\pm 2i$",
        "$x = 1 \\pm 2i$",
        "$x = 2 \\pm 4i$",
        "$x = 1 \\pm 4i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The discriminant is $4-20=-16$, so $x=\\frac{2\\pm\\sqrt{-16}}{2}=1\\pm 2i$. Dividing only the radical part and not the whole numerator by 2 gives the $2\\pm 4i$ slip.",
        "zh": "判别式为 $4-20=-16$，故 $x=\\frac{2\\pm\\sqrt{-16}}{2}=1\\pm 2i$。若只对根号部分而非整个分子除以 2，则得到 $2\\pm 4i$ 的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A degree-4 polynomial with real coefficients has roots $1$, $-1$, and $2i$. What is its fourth root?",
        "zh": "一个实系数 4 次多项式的根有 $1$、$-1$ 和 $2i$。它的第四个根是什么？"
      },
      "choices": [
        "$-2$",
        "$2$",
        "$-2i$",
        "$2i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Real coefficients force the conjugate $-2i$ to pair with $2i$. Picking a real number overlooks that the non-real root still needs its conjugate partner.",
        "zh": "实系数要求共轭 $-2i$ 与 $2i$ 配对。若选一个实数，则忽略了非实根仍需其共轭伙伴。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the complete real factorization used to solve $x^3 - x = 0$?",
        "zh": "求解 $x^3 - x = 0$ 时使用的完整实数因式分解是哪个？"
      },
      "choices": [
        "$x(x^2-1)$",
        "$x^2(x-1)$",
        "$(x-1)(x+1)$",
        "$x(x-1)(x+1)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor out $x$, then $x^2-1=(x-1)(x+1)$, giving roots $0, 1, -1$. Stopping at $x(x^2-1)$ leaves the difference of squares unfactored and hides two of the roots.",
        "zh": "先提出 $x$，再 $x^2-1=(x-1)(x+1)$，得根 $0, 1, -1$。若停在 $x(x^2-1)$，则平方差未分解，隐藏了其中两个根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the real solution of $x^3 - 27 = 0$.",
        "zh": "求 $x^3 - 27 = 0$ 的实数解。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3",
        "three",
        "三",
        "x=3"
      ],
      "explanation": {
        "en": "$x^3=27$ gives the real cube root $x=3$; the other two roots are non-real. Answering 9 confuses the cube root with a square-root-style step.",
        "zh": "$x^3=27$ 给出实立方根 $x=3$；另外两个根为非实数。若答 9，则把立方根与开平方式的步骤混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many roots (counting multiplicity, over the complex numbers) does $x^4 - 5x^2 + 6 = 0$ have?",
        "zh": "$x^4 - 5x^2 + 6 = 0$ 在复数范围内共有多少个根（按重数计）？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "By the Fundamental Theorem of Algebra the count equals the degree, 4. Counting only distinct real solutions would undercount the total guaranteed roots.",
        "zh": "由代数基本定理，根数等于次数，即 4。若只数不同的实数解，则会少于所保证的总根数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If a real-coefficient polynomial has $5 - 2i$ as a root, write its required conjugate partner.",
        "zh": "若某实系数多项式以 $5 - 2i$ 为根，写出它必然对应的共轭根。"
      },
      "answer": "5+2i",
      "accept": [
        "5+2i",
        "5 + 2i",
        "5+2 i",
        "(5+2i)",
        "5＋2i"
      ],
      "explanation": {
        "en": "Conjugation flips only the sign of the imaginary part, giving $5+2i$. Changing the real part's sign instead would misapply the conjugate rule.",
        "zh": "共轭只改变虚部的符号，得 $5+2i$。若改变实部的符号，则误用了共轭规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 + 49 = 0$ and give the root with the positive imaginary part.",
        "zh": "解 $x^2 + 49 = 0$，给出虚部为正的那个根。"
      },
      "answer": "7i",
      "accept": [
        "7i",
        "+7i",
        "7 i",
        "i7",
        "7i "
      ],
      "explanation": {
        "en": "$x^2=-49$ gives $x=\\pm 7i$; the positive one is $7i$. Answering 7 drops the imaginary unit that $-49$ requires.",
        "zh": "$x^2=-49$ 得 $x=\\pm 7i$；虚部为正的是 $7i$。若答 7，则漏掉了 $-49$ 所需的虚数单位。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factoring $x^3 + x^2 - 6x = 0$, what is the LARGEST real root?",
        "zh": "分解 $x^3 + x^2 - 6x = 0$，最大的实根是多少？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "+2",
        "two",
        "二",
        "x=2"
      ],
      "explanation": {
        "en": "Factor to $x(x+3)(x-2)=0$, roots $0, -3, 2$; the largest is 2. Overlooking the factored-out $x$ or a sign error can hide this root.",
        "zh": "分解为 $x(x+3)(x-2)=0$，根为 $0, -3, 2$；最大者为 2。若忽略提出的 $x$ 或出现符号错误，可能漏掉此根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the difference-of-cubes factorization $x^3 - 64 = (x-4)(x^2 + ax + 16)$, what is $a$?",
        "zh": "在立方差分解 $x^3 - 64 = (x-4)(x^2 + ax + 16)$ 中，$a$ 是多少？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "+4",
        "four",
        "四"
      ],
      "explanation": {
        "en": "The pattern $a^3-b^3=(a-b)(a^2+ab+b^2)$ gives a middle coefficient of $+4$ (from $x \\cdot 4$). A negative value here would borrow the sign from the sum-of-cubes form.",
        "zh": "公式 $a^3-b^3=(a-b)(a^2+ab+b^2)$ 给出中间系数为 $+4$（来自 $x \\cdot 4$）。若取负值，则借用了立方和形式的符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many possible rational roots (positive and negative) does the Rational Root Theorem list for $x^2 - 5x + 6$? Count $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.",
        "zh": "有理根定理为 $x^2 - 5x + 6$ 列出多少个可能的有理根（含正负）？数 $\\pm 1, \\pm 2, \\pm 3, \\pm 6$。"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "eight",
        "八"
      ],
      "explanation": {
        "en": "The divisors of 6 are $1,2,3,6$, each taken $\\pm$, giving $4 \\times 2 = 8$ candidates. Counting only the positive values would halve the list to 4.",
        "zh": "6 的因数为 $1,2,3,6$，各取 $\\pm$，共 $4 \\times 2 = 8$ 个候选。若只数正值，则列表减半为 4。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The polynomial $(x-1)^2(x+4)$ is set equal to zero. What is the multiplicity of the root $x = 1$?",
        "zh": "令 $(x-1)^2(x+4)=0$。根 $x = 1$ 的重数是多少？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "二"
      ],
      "explanation": {
        "en": "The exponent on $(x-1)$ is 2, so the root has multiplicity 2. Counting it once treats a repeated root as a simple root.",
        "zh": "$(x-1)$ 的指数为 2，故该根重数为 2。若只算一次，则把重根当作单根。"
      }
    }
  ],
  "radicals-rational-exponents/nth-roots-rational-exponents": [
    {
      "type": "mc",
      "question": {
        "en": "Rewrite $x^{2/5}$ as a radical.",
        "zh": "把 $x^{2/5}$ 写成根式形式。"
      },
      "choices": [
        "$\\sqrt[5]{x^2}$",
        "$\\sqrt[2]{x^5}$",
        "$x^{5/2}$",
        "$\\sqrt{x^5}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The denominator of the exponent is the index of the root and the numerator is the power inside, so $x^{2/5}=\\sqrt[5]{x^2}$. Swapping the numerator and denominator gives the fifth power under a square root, which reverses the roles of index and power.",
        "zh": "指数的分母是根的次数，分子是根号内的乘方，所以 $x^{2/5}=\\sqrt[5]{x^2}$。若把分子分母对调，就得到平方根下的五次方，颠倒了根次数与乘方的位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rewrite $\\sqrt[3]{x^7}$ using a rational exponent.",
        "zh": "用分数指数写出 $\\sqrt[3]{x^7}$。"
      },
      "choices": [
        "$x^{3/7}$",
        "$x^{7/3}$",
        "$x^{10}$",
        "$x^{21}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The inner power goes on top and the index goes on the bottom: $\\sqrt[3]{x^7}=x^{7/3}$. Placing the index on top gives $x^{3/7}$, which swaps the root and the power.",
        "zh": "内部的乘方作分子，根的次数作分母：$\\sqrt[3]{x^7}=x^{7/3}$。若把根次数放到分子上得到 $x^{3/7}$，就把根与乘方对调了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $8^{4/3}$.",
        "zh": "求 $8^{4/3}$ 的值。"
      },
      "choices": [
        "$\\frac{32}{3}$",
        "12",
        "16",
        "32"
      ],
      "answer": 2,
      "explanation": {
        "en": "Take the cube root first, then raise to the fourth power: $\\sqrt[3]{8}=2$ and $2^4=16$. Multiplying $8\\times\\frac{4}{3}$ treats the fractional exponent as ordinary multiplication, which is not how exponents work.",
        "zh": "先开三次方再取四次方：$\\sqrt[3]{8}=2$，$2^4=16$。若用 $8\\times\\frac{4}{3}$，就把分数指数当作普通乘法了，指数运算并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $16^{-1/2}$.",
        "zh": "求 $16^{-1/2}$ 的值。"
      },
      "choices": [
        "$-\\frac{1}{4}$",
        "$-4$",
        "4",
        "$\\frac{1}{4}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The negative exponent means take the reciprocal, and the $1/2$ means the square root: $16^{-1/2}=\\frac{1}{\\sqrt{16}}=\\frac{1}{4}$. Treating the negative exponent as making the result negative gives $-4$, but a negative exponent creates a reciprocal, not a negative value.",
        "zh": "负指数表示取倒数，$1/2$ 表示开平方：$16^{-1/2}=\\frac{1}{\\sqrt{16}}=\\frac{1}{4}$。若把负指数理解为让结果变负而得到 $-4$，那是错的：负指数产生倒数，而不是负值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt[3]{54}$ to simplest radical form.",
        "zh": "把 $\\sqrt[3]{54}$ 化为最简根式。"
      },
      "choices": [
        "$3\\sqrt[3]{2}$",
        "$2\\sqrt[3]{27}$",
        "$9\\sqrt[3]{6}$",
        "$6\\sqrt[3]{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor out the largest perfect cube: $54=27\\cdot 2$, so $\\sqrt[3]{54}=\\sqrt[3]{27}\\cdot\\sqrt[3]{2}=3\\sqrt[3]{2}$. Pulling out $2$ instead and leaving $\\sqrt[3]{27}$ inside fails to simplify the perfect cube that should come out.",
        "zh": "提出最大的完全立方因子：$54=27\\cdot 2$，所以 $\\sqrt[3]{54}=\\sqrt[3]{27}\\cdot\\sqrt[3]{2}=3\\sqrt[3]{2}$。若提出 $2$ 而把 $\\sqrt[3]{27}$ 留在根号内，就没有把应当开出的完全立方化简掉。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt[4]{16x^8}$, assuming $x\\ge 0$.",
        "zh": "化简 $\\sqrt[4]{16x^8}$（设 $x\\ge 0$）。"
      },
      "choices": [
        "$2x^4$",
        "$2x^2$",
        "$4x^2$",
        "$16x^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $16=2^4$ and $x^8=(x^2)^4$, the fourth root of each is $2$ and $x^2$, giving $2x^2$. Writing $x^4$ comes from dividing the exponent by 2 instead of by the index 4.",
        "zh": "因为 $16=2^4$，$x^8=(x^2)^4$，各自的四次方根为 $2$ 和 $x^2$，得 $2x^2$。若写成 $x^4$，是把指数除以 2 而不是除以根次数 4 造成的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $x^{1/2}\\cdot x^{1/3}$.",
        "zh": "化简 $x^{1/2}\\cdot x^{1/3}$。"
      },
      "choices": [
        "$x^{1/6}$",
        "$x^{2/5}$",
        "$x^{5/6}$",
        "$x^{1/5}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying powers with the same base adds the exponents: $\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$, so the product is $x^{5/6}$. Adding the fractions incorrectly as $\\frac{1}{2+3}=\\frac{1}{5}$ ignores the need for a common denominator.",
        "zh": "同底数幂相乘时指数相加：$\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$，所以乘积为 $x^{5/6}$。若错误地把分数加成 $\\frac{1}{2+3}=\\frac{1}{5}$，就忽略了需要通分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\dfrac{x^{3/4}}{x^{1/4}}$.",
        "zh": "化简 $\\dfrac{x^{3/4}}{x^{1/4}}$。"
      },
      "choices": [
        "$x^{3/16}$",
        "$x^{1}$",
        "$x^{3}$",
        "$x^{1/2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Dividing powers with the same base subtracts the exponents: $\\frac{3}{4}-\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$, so the result is $x^{1/2}$. Dividing the exponents to get $x^{3}$ misuses the quotient rule, which subtracts rather than divides exponents.",
        "zh": "同底数幂相除时指数相减：$\\frac{3}{4}-\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$，所以结果为 $x^{1/2}$。若把指数相除得到 $x^{3}$，就误用了商的法则——应当相减而不是相除。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\left(x^{2/3}\\right)^{6}$.",
        "zh": "化简 $\\left(x^{2/3}\\right)^{6}$。"
      },
      "choices": [
        "$x^{4}$",
        "$x^{8}$",
        "$x^{2/9}$",
        "$x^{20/3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A power raised to a power multiplies the exponents: $\\frac{2}{3}\\times 6=4$, giving $x^4$. Adding the outer 6 to the exponent instead of multiplying would misapply the rule for raising a power to a power.",
        "zh": "幂的乘方时指数相乘：$\\frac{2}{3}\\times 6=4$，得 $x^4$。若把外层的 6 与指数相加而不是相乘，就误用了幂的乘方法则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\sqrt{x}\\cdot\\sqrt[3]{x}$ written as a single rational power?",
        "zh": "下列哪个把 $\\sqrt{x}\\cdot\\sqrt[3]{x}$ 写成了单一分数指数？"
      },
      "choices": [
        "$x^{1/6}$",
        "$x^{5/6}$",
        "$x^{2/3}$",
        "$x^{1/5}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Convert to exponents and add: $x^{1/2}\\cdot x^{1/3}=x^{1/2+1/3}=x^{5/6}$. Reading the two radicals as $\\sqrt[5]{x}$ by adding the indices $2+3$ is not a valid operation on roots.",
        "zh": "化为指数再相加：$x^{1/2}\\cdot x^{1/3}=x^{1/2+1/3}=x^{5/6}$。若把两个根号看成 $\\sqrt[5]{x}$（把次数 $2+3$ 相加），那对根号来说是无效运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\left(\\dfrac{27}{8}\\right)^{-2/3}$.",
        "zh": "求 $\\left(\\dfrac{27}{8}\\right)^{-2/3}$ 的值。"
      },
      "choices": [
        "$\\frac{9}{4}$",
        "$-\\frac{9}{4}$",
        "$\\frac{4}{9}$",
        "$\\frac{3}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The negative exponent flips the fraction, then take the cube root and square: $\\left(\\frac{8}{27}\\right)^{2/3}=\\left(\\frac{2}{3}\\right)^2=\\frac{4}{9}$. Forgetting to reciprocate first leaves $\\frac{9}{4}$, which ignores the negative sign in the exponent.",
        "zh": "负指数先把分数倒置，再开三次方并平方：$\\left(\\frac{8}{27}\\right)^{2/3}=\\left(\\frac{2}{3}\\right)^2=\\frac{4}{9}$。若忘记先取倒数就得到 $\\frac{9}{4}$，那是忽略了指数中的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about $\\sqrt[4]{-16}$ is correct over the real numbers?",
        "zh": "关于 $\\sqrt[4]{-16}$，下列在实数范围内正确的是哪一项？"
      },
      "choices": [
        "It equals $-2$",
        "It equals $2$",
        "It equals $\\pm 2$",
        "It is not a real number"
      ],
      "answer": 3,
      "explanation": {
        "en": "An even root of a negative number has no real value, because any real number raised to the 4th power is non-negative. Answering $-2$ assumes an even root can be negative, but $(-2)^4=16$, not $-16$.",
        "zh": "负数的偶次根在实数范围内不存在，因为任何实数的四次方都非负。若答 $-2$，是以为偶次根可以为负，但 $(-2)^4=16$，而不是 $-16$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $25^{3/2}$.",
        "zh": "求 $25^{3/2}$ 的值。"
      },
      "answer": "125",
      "accept": [
        "125.0",
        "+125"
      ],
      "explanation": {
        "en": "Take the square root first, then cube: $\\sqrt{25}=5$ and $5^3=125$. Multiplying $25\\times\\frac{3}{2}=37.5$ would treat the fractional exponent as multiplication.",
        "zh": "先开平方再立方：$\\sqrt{25}=5$，$5^3=125$。若用 $25\\times\\frac{3}{2}=37.5$，就把分数指数当作乘法了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $32^{2/5}$.",
        "zh": "求 $32^{2/5}$ 的值。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Take the fifth root first, then square: $\\sqrt[5]{32}=2$ and $2^2=4$. Squaring first gives $1024$, whose fifth root is still $4$, but the reliable order is root then power.",
        "zh": "先开五次方再平方：$\\sqrt[5]{32}=2$，$2^2=4$。若先平方得 $1024$，其五次根仍是 $4$，但可靠的顺序是先开方再乘方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\left(\\dfrac{1}{81}\\right)^{-1/4}$.",
        "zh": "求 $\\left(\\dfrac{1}{81}\\right)^{-1/4}$ 的值。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The negative exponent flips the fraction to $81$, then the fourth root gives $\\sqrt[4]{81}=3$. Keeping the fraction and getting $\\frac{1}{3}$ forgets that the negative exponent reciprocates first.",
        "zh": "负指数把分数倒置为 $81$，再开四次方得 $\\sqrt[4]{81}=3$。若保留分数得到 $\\frac{1}{3}$，就忘了负指数应先取倒数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write $\\sqrt[3]{x^2}$ using a rational exponent (answer in the form x^(a/b)). Enter the exponent as a fraction a/b.",
        "zh": "把 $\\sqrt[3]{x^2}$ 写成分数指数 $x^{a/b}$，请以分数 a/b 输入该指数。"
      },
      "answer": "2/3",
      "accept": [
        "2 / 3",
        "0.6667",
        "0.667",
        ".6667"
      ],
      "explanation": {
        "en": "The inner power 2 is the numerator and the index 3 is the denominator, so the exponent is $\\frac{2}{3}$. Writing $\\frac{3}{2}$ swaps the index and the inner power.",
        "zh": "内部乘方 2 作分子，根次数 3 作分母，所以指数为 $\\frac{2}{3}$。若写成 $\\frac{3}{2}$，就把根次数与内部乘方对调了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\sqrt{72}$ to the form $a\\sqrt{b}$ and enter the value of $a$.",
        "zh": "把 $\\sqrt{72}$ 化为 $a\\sqrt{b}$ 的形式，输入 $a$ 的值。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "The largest perfect-square factor of 72 is 36, so $\\sqrt{72}=\\sqrt{36}\\cdot\\sqrt{2}=6\\sqrt{2}$, giving $a=6$. Pulling out only $\\sqrt{4}$ leaves $2\\sqrt{18}$, which is not fully simplified.",
        "zh": "72 的最大完全平方因子是 36，所以 $\\sqrt{72}=\\sqrt{36}\\cdot\\sqrt{2}=6\\sqrt{2}$，得 $a=6$。若只提出 $\\sqrt{4}$ 得到 $2\\sqrt{18}$，尚未化到最简。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $16^{1/4}\\cdot 16^{1/4}$ to a single number.",
        "zh": "把 $16^{1/4}\\cdot 16^{1/4}$ 化为一个数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Add the exponents: $\\frac{1}{4}+\\frac{1}{4}=\\frac{1}{2}$, so this is $16^{1/2}=\\sqrt{16}=4$. Multiplying the bases to get $256^{1/4}=4$ works here too, but adding exponents is the clean method.",
        "zh": "指数相加：$\\frac{1}{4}+\\frac{1}{4}=\\frac{1}{2}$，所以为 $16^{1/2}=\\sqrt{16}=4$。虽然把底数相乘得 $256^{1/4}=4$ 也可以，但相加指数才是简洁的方法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\left(x^{3/4}\\right)^{8}$ and enter the exponent of $x$ in the simplified result.",
        "zh": "化简 $\\left(x^{3/4}\\right)^{8}$，输入结果中 $x$ 的指数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Multiply the exponents: $\\frac{3}{4}\\times 8=6$, so the result is $x^6$. Adding 8 to the exponent would misapply the power-of-a-power rule, which multiplies.",
        "zh": "指数相乘：$\\frac{3}{4}\\times 8=6$，所以结果为 $x^6$。若把 8 加到指数上，就误用了幂的乘方法则——应当相乘。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt[3]{-125}$.",
        "zh": "求 $\\sqrt[3]{-125}$ 的值。"
      },
      "answer": "-5",
      "accept": [
        "-5.0"
      ],
      "explanation": {
        "en": "An odd root of a negative number is negative because $(-5)^3=-125$, so $\\sqrt[3]{-125}=-5$. Answering $5$ ignores that a cube root keeps the sign of the radicand.",
        "zh": "负数的奇次根为负，因为 $(-5)^3=-125$，所以 $\\sqrt[3]{-125}=-5$。若答 $5$，就忽略了立方根保留被开方数的符号。"
      }
    }
  ],
  "radicals-rational-exponents/solving-radical-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x}=7$.",
        "zh": "解方程 $\\sqrt{x}=7$。"
      },
      "choices": [
        "$x=49$",
        "$x=\\sqrt{7}$",
        "$x=14$",
        "$x=3.5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Square both sides to undo the square root: $(\\sqrt{x})^2=7^2$, so $x=49$. Doubling to get $14$ treats the square root as multiplication by 2 rather than the inverse of squaring.",
        "zh": "两边平方以消去平方根：$(\\sqrt{x})^2=7^2$，所以 $x=49$。若加倍得到 $14$，就把平方根当作乘以 2，而不是平方的逆运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x-3}=5$.",
        "zh": "解方程 $\\sqrt{x-3}=5$。"
      },
      "choices": [
        "$x=8$",
        "$x=28$",
        "$x=22$",
        "$x=25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Square both sides: $x-3=25$, then add 3 to get $x=28$. Forgetting to add the 3 back leaves $x=25$, which solves only the squared radicand, not the original equation.",
        "zh": "两边平方：$x-3=25$，再加 3 得 $x=28$。若忘记把 3 加回去而留下 $x=25$，那只解了平方后的被开方式，而非原方程。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{2x+1}=3$.",
        "zh": "解方程 $\\sqrt{2x+1}=3$。"
      },
      "choices": [
        "$x=5$",
        "$x=1$",
        "$x=4$",
        "$x=8$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Square to get $2x+1=9$, so $2x=8$ and $x=4$. Squaring only the constant on the left to get $2x+1=6$ (using $2\\times 3$) misuses squaring, which should give $9$.",
        "zh": "平方得 $2x+1=9$，所以 $2x=8$，$x=4$。若把右边算成 $2\\times 3=6$ 得到 $2x+1=6$，就误用了平方——应当得到 $9$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x+6}=x$.",
        "zh": "解方程 $\\sqrt{x+6}=x$。"
      },
      "choices": [
        "$x=-2$ and $x=3$",
        "no solution",
        "$x=-2$",
        "$x=3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Squaring gives $x+6=x^2$, so $x^2-x-6=0$ and $x=3$ or $x=-2$. Checking, $x=-2$ fails since $\\sqrt{4}=2\\neq -2$, so only $x=3$ is valid; keeping both solutions ignores the extraneous-root check.",
        "zh": "平方得 $x+6=x^2$，即 $x^2-x-6=0$，解为 $x=3$ 或 $x=-2$。检验时 $x=-2$ 不成立，因为 $\\sqrt{4}=2\\neq -2$，所以只有 $x=3$ 有效；若两个都保留，就漏掉了增根检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why must you check solutions when solving radical equations?",
        "zh": "解根式方程时为什么必须检验解？"
      },
      "choices": [
        "Squaring can introduce extraneous solutions",
        "Radicals always have two answers",
        "Checking changes the equation",
        "Squaring removes valid solutions"
      ],
      "answer": 0,
      "explanation": {
        "en": "Raising both sides to an even power can create solutions that satisfy the squared equation but not the original, so each must be verified. Assuming radicals always yield two answers confuses the process with the $\\pm$ of a square root of a constant.",
        "zh": "两边取偶次幂可能产生满足平方后方程却不满足原方程的解，因此每个解都要验证。若以为根式方程总有两个解，就把它与常数平方根的 $\\pm$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x}+4=1$.",
        "zh": "解方程 $\\sqrt{x}+4=1$。"
      },
      "choices": [
        "$x=9$",
        "no real solution",
        "$x=25$",
        "$x=-3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Isolating gives $\\sqrt{x}=-3$, but a principal square root is never negative, so there is no real solution. Squaring the isolated equation to get $x=9$ produces an extraneous value, since $\\sqrt{9}+4=7\\neq 1$.",
        "zh": "移项得 $\\sqrt{x}=-3$，但算术平方根不可能为负，所以无实数解。若把移项后的方程平方得 $x=9$，那是增根，因为 $\\sqrt{9}+4=7\\neq 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt[3]{x-1}=2$.",
        "zh": "解方程 $\\sqrt[3]{x-1}=2$。"
      },
      "choices": [
        "$x=5$",
        "$x=7$",
        "$x=9$",
        "$x=3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Cube both sides to undo the cube root: $x-1=2^3=8$, so $x=9$. Squaring instead of cubing gives $x-1=4$ and $x=5$, using the wrong inverse for a cube root.",
        "zh": "两边取立方以消去立方根：$x-1=2^3=8$，所以 $x=9$。若用平方而非立方得到 $x-1=4$、$x=5$，就对立方根用错了逆运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $(x-2)^{2/3}=4$.",
        "zh": "解方程 $(x-2)^{2/3}=4$。"
      },
      "choices": [
        "$x=6$",
        "$x=18$",
        "$x=10$",
        "$x=10$ and $x=-6$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Raise both sides to the $3/2$ power: $x-2=\\pm 4^{3/2}=\\pm 8$, so $x=10$ or $x=-6$, and both check. Taking only the positive root misses that an even numerator allows a $\\pm$ result.",
        "zh": "两边取 $3/2$ 次方：$x-2=\\pm 4^{3/2}=\\pm 8$，所以 $x=10$ 或 $x=-6$，两者都通过检验。若只取正根，就漏掉了偶数分子允许 $\\pm$ 结果的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After squaring both sides of $\\sqrt{x+5}=x-1$, which equation results?",
        "zh": "把 $\\sqrt{x+5}=x-1$ 两边平方后得到哪个方程？"
      },
      "choices": [
        "$x+5=x^2-2x+1$",
        "$x+5=x^2-1$",
        "$x+5=x^2+1$",
        "$x+5=x-1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The right side must be squared as a binomial: $(x-1)^2=x^2-2x+1$. Writing $x^2-1$ forgets the middle term, treating $(x-1)^2$ as $x^2-1^2$.",
        "zh": "右边作为二项式平方：$(x-1)^2=x^2-2x+1$。若写成 $x^2-1$，就漏掉了中间项，把 $(x-1)^2$ 当成 $x^2-1^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x+7}=x+1$.",
        "zh": "解方程 $\\sqrt{x+7}=x+1$。"
      },
      "choices": [
        "$x=-3$",
        "$x=2$",
        "$x=3$",
        "$x=2$ and $x=-3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Squaring gives $x+7=x^2+2x+1$, so $x^2+x-6=0$ and $x=2$ or $x=-3$. Checking, $x=-3$ fails because $\\sqrt{4}=2\\neq -2$, so only $x=2$ is valid; keeping $-3$ ignores the extraneous-root check.",
        "zh": "平方得 $x+7=x^2+2x+1$，即 $x^2+x-6=0$，解为 $x=2$ 或 $x=-3$。检验时 $x=-3$ 不成立，因为 $\\sqrt{4}=2\\neq -2$，所以只有 $x=2$ 有效；若保留 $-3$，就漏掉了增根检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x+9}=\\sqrt{2x-3}$.",
        "zh": "解方程 $\\sqrt{x+9}=\\sqrt{2x-3}$。"
      },
      "choices": [
        "$x=6$",
        "$x=-12$",
        "$x=12$",
        "$x=4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Squaring both radicals gives $x+9=2x-3$, so $12=x$. Subtracting the radicands the wrong way to get $x=-12$ mishandles the linear step after squaring.",
        "zh": "两个根号都平方得 $x+9=2x-3$，所以 $x=12$。若移项方向弄反得到 $x=-12$，就在平方后的线性步骤上出错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x}=x-6$.",
        "zh": "解方程 $\\sqrt{x}=x-6$。"
      },
      "choices": [
        "$x=36$",
        "$x=4$ and $x=9$",
        "$x=4$",
        "$x=9$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Squaring gives $x=x^2-12x+36$, so $x^2-13x+36=0$ and $x=4$ or $x=9$. Checking, $x=4$ fails since $\\sqrt{4}=2\\neq -2$, so only $x=9$ works; keeping both solutions skips the extraneous-root check.",
        "zh": "平方得 $x=x^2-12x+36$，即 $x^2-13x+36=0$，解为 $x=4$ 或 $x=9$。检验时 $x=4$ 不成立，因为 $\\sqrt{4}=2\\neq -2$，所以只有 $x=9$ 有效；若两个都保留，就跳过了增根检验。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{x-2}=6$ for $x$.",
        "zh": "解 $\\sqrt{x-2}=6$，求 $x$。"
      },
      "answer": "38",
      "accept": [
        "38.0",
        "+38"
      ],
      "explanation": {
        "en": "Square both sides: $x-2=36$, then add 2 to get $x=38$. Forgetting to add 2 leaves $36$, which solves only the squared radicand.",
        "zh": "两边平方：$x-2=36$，再加 2 得 $x=38$。若忘记加 2 而留下 $36$，那只解了平方后的被开方式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{3x-2}=4$ for $x$.",
        "zh": "解 $\\sqrt{3x-2}=4$，求 $x$。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Square to get $3x-2=16$, so $3x=18$ and $x=6$. Squaring the 4 as $2\\times 4=8$ instead of $16$ would misapply squaring.",
        "zh": "平方得 $3x-2=16$，所以 $3x=18$，$x=6$。若把 4 算成 $2\\times 4=8$ 而不是 $16$，就误用了平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt[3]{2x+3}=3$ for $x$.",
        "zh": "解 $\\sqrt[3]{2x+3}=3$，求 $x$。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "Cube both sides: $2x+3=27$, so $2x=24$ and $x=12$. Squaring instead of cubing gives $2x+3=9$ and $x=3$, the wrong inverse for a cube root.",
        "zh": "两边取立方：$2x+3=27$，所以 $2x=24$，$x=12$。若用平方而非立方得到 $2x+3=9$、$x=3$，就对立方根用错了逆运算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^{3/2}=8$ for $x$.",
        "zh": "解 $x^{3/2}=8$，求 $x$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Raise both sides to the $2/3$ power: $x=8^{2/3}=(\\sqrt[3]{8})^2=2^2=4$. Cubing instead to get $x=512$ misuses the inverse of a $3/2$ power.",
        "zh": "两边取 $2/3$ 次方：$x=8^{2/3}=(\\sqrt[3]{8})^2=2^2=4$。若改用立方得 $x=512$，就用错了 $3/2$ 次方的逆运算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{x+4}=\\sqrt{3x-8}$ for $x$.",
        "zh": "解 $\\sqrt{x+4}=\\sqrt{3x-8}$，求 $x$。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Square both sides: $x+4=3x-8$, so $12=2x$ and $x=6$, which checks. Combining the radicals under one root instead of squaring each side is not a valid step.",
        "zh": "两边平方：$x+4=3x-8$，所以 $12=2x$，$x=6$，经检验成立。若把两个根号合并到一个根号下而不是各自平方，那不是有效步骤。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The equation $\\sqrt{x}=-4$ has how many real solutions?",
        "zh": "方程 $\\sqrt{x}=-4$ 有几个实数解？"
      },
      "answer": "0",
      "accept": [
        "zero",
        "none",
        "0.0",
        "no solution"
      ],
      "explanation": {
        "en": "A principal square root is never negative, so no real $x$ makes $\\sqrt{x}=-4$. Squaring to get $x=16$ is extraneous because $\\sqrt{16}=4\\neq -4$.",
        "zh": "算术平方根不可能为负，所以没有实数 $x$ 使 $\\sqrt{x}=-4$。若平方得 $x=16$，那是增根，因为 $\\sqrt{16}=4\\neq -4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{x+15}=x-5$ for the valid real solution.",
        "zh": "解 $\\sqrt{x+15}=x-5$，求有效的实数解。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "Squaring gives $x+15=x^2-10x+25$, so $x^2-11x+10=0$ and $x=10$ or $x=1$. Only $x=10$ checks, since $x=1$ gives $\\sqrt{16}=4\\neq -4$; the value $1$ is extraneous.",
        "zh": "平方得 $x+15=x^2-10x+25$，即 $x^2-11x+10=0$，解为 $x=10$ 或 $x=1$。只有 $x=10$ 通过检验，因为 $x=1$ 时 $\\sqrt{16}=4\\neq -4$；$1$ 是增根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{5x-4}=x$ for the largest valid real solution.",
        "zh": "解 $\\sqrt{5x-4}=x$，求最大的有效实数解。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Squaring gives $5x-4=x^2$, so $x^2-5x+4=0$ and $x=1$ or $x=4$; both check, and the largest is $4$. Dividing both sides by $x$ before squaring would risk dropping the valid solution.",
        "zh": "平方得 $5x-4=x^2$，即 $x^2-5x+4=0$，解为 $x=1$ 或 $x=4$；两者都通过检验，最大的是 $4$。若在平方前两边除以 $x$，就可能丢失有效解。"
      }
    }
  ],
  "radicals-rational-exponents/graphing-radical-functions": [
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x)=\\sqrt{x}$?",
        "zh": "函数 $f(x)=\\sqrt{x}$ 的定义域是什么？"
      },
      "choices": [
        "$x\\ge 0$",
        "all real numbers",
        "$x\\le 0$",
        "$x>0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A square root requires a non-negative radicand, so $x\\ge 0$. Excluding $0$ with $x>0$ forgets that $\\sqrt{0}=0$ is defined.",
        "zh": "平方根要求被开方数非负，所以 $x\\ge 0$。若用 $x>0$ 排除 $0$，就忘了 $\\sqrt{0}=0$ 是有定义的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $f(x)=\\sqrt{x}$?",
        "zh": "函数 $f(x)=\\sqrt{x}$ 的值域是什么？"
      },
      "choices": [
        "all real numbers",
        "$y\\ge 0$",
        "$y\\le 0$",
        "$y>0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The principal square root only outputs non-negative values, so $y\\ge 0$. Including negatives (all reals) confuses this with solving $y^2=x$, which allows $\\pm$.",
        "zh": "算术平方根只输出非负值，所以 $y\\ge 0$。若包含负值（全体实数），就把它与解 $y^2=x$（允许 $\\pm$）混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x)=\\sqrt[3]{x}$?",
        "zh": "函数 $f(x)=\\sqrt[3]{x}$ 的定义域是什么？"
      },
      "choices": [
        "$x\\ge 0$",
        "$x\\neq 0$",
        "all real numbers",
        "$x\\le 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A cube root is defined for every real number, including negatives, so the domain is all reals. Restricting to $x\\ge 0$ wrongly applies the even-root rule to an odd root.",
        "zh": "立方根对所有实数（包括负数）都有定义，所以定义域为全体实数。若限制为 $x\\ge 0$，就错把偶次根的规则用到了奇次根上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=\\sqrt{x}+3$ is the graph of $\\sqrt{x}$ shifted how?",
        "zh": "$g(x)=\\sqrt{x}+3$ 的图像是 $\\sqrt{x}$ 图像如何平移得到的？"
      },
      "choices": [
        "Left 3",
        "Down 3",
        "Right 3",
        "Up 3"
      ],
      "answer": 3,
      "explanation": {
        "en": "Adding 3 outside the radical raises every output by 3, shifting the graph up 3. Reading it as a horizontal shift confuses a change outside the function with one inside.",
        "zh": "在根号外加 3 使每个输出增加 3，图像向上平移 3。若理解为水平平移，就把函数外的变化与函数内的变化混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=\\sqrt{x-4}$ is the graph of $\\sqrt{x}$ shifted how?",
        "zh": "$g(x)=\\sqrt{x-4}$ 的图像是 $\\sqrt{x}$ 图像如何平移得到的？"
      },
      "choices": [
        "Right 4",
        "Down 4",
        "Up 4",
        "Left 4"
      ],
      "answer": 0,
      "explanation": {
        "en": "The $x-4$ inside the radical shifts the graph right 4, since the starting point moves from $x=0$ to $x=4$. Reading $x-4$ as a left shift reverses the direction of a horizontal translation.",
        "zh": "根号内的 $x-4$ 使图像向右平移 4，因为起点从 $x=0$ 移到 $x=4$。若把 $x-4$ 理解为向左平移，就把水平平移的方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x)=\\sqrt{x-5}$?",
        "zh": "函数 $f(x)=\\sqrt{x-5}$ 的定义域是什么？"
      },
      "choices": [
        "$x\\ge -5$",
        "$x\\ge 5$",
        "$x\\ge 0$",
        "$x\\le 5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The radicand must be non-negative: $x-5\\ge 0$ gives $x\\ge 5$. Solving as $x\\ge -5$ moves the 5 the wrong way across the inequality.",
        "zh": "被开方数须非负：$x-5\\ge 0$ 得 $x\\ge 5$。若解成 $x\\ge -5$，就把 5 移到了不等式的错误一侧。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=-\\sqrt{x}$ is the graph of $\\sqrt{x}$ transformed how?",
        "zh": "$g(x)=-\\sqrt{x}$ 的图像是 $\\sqrt{x}$ 图像经过怎样的变换？"
      },
      "choices": [
        "Reflected over the $y$-axis",
        "Shifted down",
        "Reflected over the $x$-axis",
        "Stretched vertically"
      ],
      "answer": 2,
      "explanation": {
        "en": "The negative sign outside makes every output the opposite sign, reflecting the graph over the $x$-axis. A reflection over the $y$-axis would instead require a negative inside the radical.",
        "zh": "根号外的负号使每个输出取相反符号，图像关于 $x$ 轴反射。若是关于 $y$ 轴反射，则需要在根号内加负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the domain and range of $f(x)=\\sqrt[3]{x}$?",
        "zh": "函数 $f(x)=\\sqrt[3]{x}$ 的定义域和值域是什么？"
      },
      "choices": [
        "Domain $x\\ge 0$, range all reals",
        "Domain $x\\ge 0$, range $y\\ge 0$",
        "Domain all reals, range $y\\ge 0$",
        "Domain and range both all reals"
      ],
      "answer": 3,
      "explanation": {
        "en": "A cube root accepts and produces every real number, so both domain and range are all reals. Restricting either to non-negatives misapplies the square-root behavior to a cube root.",
        "zh": "立方根接受并产生所有实数，所以定义域和值域都是全体实数。若把其中之一限制为非负，就把平方根的性质误用到了立方根上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The function $f(x)=\\sqrt{x}$ is the inverse of which function (for $x\\ge 0$)?",
        "zh": "函数 $f(x)=\\sqrt{x}$ 是下列哪个函数的反函数（当 $x\\ge 0$）？"
      },
      "choices": [
        "$g(x)=x^2$",
        "$g(x)=2x$",
        "$g(x)=\\sqrt[3]{x}$",
        "$g(x)=\\frac{1}{x}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Squaring and taking a square root undo each other on $x\\ge 0$, so $\\sqrt{x}$ inverts $x^2$. Choosing $2x$ confuses a square with doubling.",
        "zh": "在 $x\\ge 0$ 上，平方与开平方互为逆运算，所以 $\\sqrt{x}$ 是 $x^2$ 的反函数。若选 $2x$，就把平方与加倍混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the starting point (endpoint) of the graph of $f(x)=\\sqrt{x-2}+3$?",
        "zh": "$f(x)=\\sqrt{x-2}+3$ 图像的起点（端点）是什么？"
      },
      "choices": [
        "$(3,2)$",
        "$(2,3)$",
        "$(-2,3)$",
        "$(2,-3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The radical starts where the radicand is 0: $x=2$, and then $y=0+3=3$, giving $(2,3)$. Swapping the coordinates to $(3,2)$ reverses the horizontal and vertical shifts.",
        "zh": "根式从被开方数为 0 处开始：$x=2$，此时 $y=0+3=3$，得 $(2,3)$。若把坐标对调成 $(3,2)$，就把水平与竖直平移弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $f(x)=\\sqrt{x}+2$?",
        "zh": "函数 $f(x)=\\sqrt{x}+2$ 的值域是什么？"
      },
      "choices": [
        "all real numbers",
        "$y\\ge 0$",
        "$y\\ge 2$",
        "$y\\le 2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $\\sqrt{x}\\ge 0$, adding 2 makes $y\\ge 2$. Leaving the range as $y\\ge 0$ ignores the upward shift of 2.",
        "zh": "因为 $\\sqrt{x}\\ge 0$，加 2 后 $y\\ge 2$。若把值域写成 $y\\ge 0$，就忽略了向上平移的 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=\\sqrt{-x}$ compared to $\\sqrt{x}$ is:",
        "zh": "$g(x)=\\sqrt{-x}$ 与 $\\sqrt{x}$ 相比，其图像是："
      },
      "choices": [
        "Reflected over the $x$-axis",
        "Shifted left",
        "Unchanged",
        "Reflected over the $y$-axis"
      ],
      "answer": 3,
      "explanation": {
        "en": "The negative inside the radical reflects the graph over the $y$-axis, so it opens toward negative $x$ with domain $x\\le 0$. A reflection over the $x$-axis would instead need a negative outside the radical.",
        "zh": "根号内的负号使图像关于 $y$ 轴反射，因此向负 $x$ 方向延伸，定义域为 $x\\le 0$。若是关于 $x$ 轴反射，则需要在根号外加负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=\\sqrt{x-3}$, what is the smallest $x$ in the domain?",
        "zh": "对于 $f(x)=\\sqrt{x-3}$，定义域中最小的 $x$ 是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The radicand must satisfy $x-3\\ge 0$, so the smallest allowed value is $x=3$. Using $-3$ moves the constant the wrong way across the inequality.",
        "zh": "被开方数须满足 $x-3\\ge 0$，所以最小允许值为 $x=3$。若用 $-3$，就把常数移到了不等式的错误一侧。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(x)=\\sqrt{x}+1$ at $x=9$.",
        "zh": "求 $f(x)=\\sqrt{x}+1$ 在 $x=9$ 处的值。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Compute the root first, then add: $\\sqrt{9}=3$ and $3+1=4$. Adding before rooting to get $\\sqrt{10}$ ignores the order of operations.",
        "zh": "先开方再相加：$\\sqrt{9}=3$，$3+1=4$。若先相加得 $\\sqrt{10}$，就忽略了运算顺序。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(x)=\\sqrt[3]{x}$ at $x=-27$.",
        "zh": "求 $f(x)=\\sqrt[3]{x}$ 在 $x=-27$ 处的值。"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "A cube root keeps the sign of the input: $\\sqrt[3]{-27}=-3$ because $(-3)^3=-27$. Answering $3$ ignores that odd roots of negatives are negative.",
        "zh": "立方根保留输入的符号：$\\sqrt[3]{-27}=-3$，因为 $(-3)^3=-27$。若答 $3$，就忽略了负数的奇次根为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $g(x)=\\sqrt{x}-5$, what is the smallest $y$-value (minimum of the range)?",
        "zh": "对于 $g(x)=\\sqrt{x}-5$，最小的 $y$ 值（值域的最小值）是多少？"
      },
      "answer": "-5",
      "accept": [
        "-5.0"
      ],
      "explanation": {
        "en": "Since $\\sqrt{x}\\ge 0$, its minimum is 0, so $g$ reaches its lowest at $0-5=-5$. Using $0$ ignores the downward shift of 5.",
        "zh": "因为 $\\sqrt{x}\\ge 0$，其最小值为 0，所以 $g$ 的最小值为 $0-5=-5$。若用 $0$，就忽略了向下平移的 5。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $\\sqrt{x}$ is shifted to give $f(x)=\\sqrt{x+6}$. By how many units and in which direction along the x-axis? Enter a signed number (left is negative).",
        "zh": "$\\sqrt{x}$ 平移得到 $f(x)=\\sqrt{x+6}$。沿 x 轴平移多少个单位、方向如何？请输入带符号的数（向左为负）。"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "left 6",
        "6 left"
      ],
      "explanation": {
        "en": "The $x+6$ inside shifts the graph left 6, which is $-6$ along the x-axis. Reading $+6$ as a rightward shift reverses the direction of a horizontal translation.",
        "zh": "根号内的 $x+6$ 使图像向左平移 6，即沿 x 轴 $-6$。若把 $+6$ 理解为向右平移，就把水平平移的方向弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At what $x$-value does the graph of $f(x)=\\sqrt{x-4}$ begin (its endpoint x-coordinate)?",
        "zh": "$f(x)=\\sqrt{x-4}$ 的图像从哪个 $x$ 值开始（端点的 x 坐标）？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The graph starts where the radicand is 0: $x-4=0$ gives $x=4$. Using $-4$ moves the constant the wrong way.",
        "zh": "图像从被开方数为 0 处开始：$x-4=0$ 得 $x=4$。若用 $-4$，就把常数移错了方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The inverse of $f(x)=x^2$ (for $x\\ge 0$) is $f^{-1}(x)=\\sqrt{x}$. Evaluate $f^{-1}(16)$.",
        "zh": "$f(x)=x^2$（当 $x\\ge 0$）的反函数是 $f^{-1}(x)=\\sqrt{x}$。求 $f^{-1}(16)$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The inverse takes a square root: $f^{-1}(16)=\\sqrt{16}=4$. Squaring instead to get $256$ applies the original function rather than its inverse.",
        "zh": "反函数取平方根：$f^{-1}(16)=\\sqrt{16}=4$。若改为平方得 $256$，就用了原函数而非其反函数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=2\\sqrt{x}$, evaluate $f(25)$.",
        "zh": "对于 $f(x)=2\\sqrt{x}$，求 $f(25)$。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "Take the root first, then multiply: $\\sqrt{25}=5$ and $2\\times 5=10$. Multiplying inside as $\\sqrt{50}$ misplaces the factor of 2, which stretches the output, not the input.",
        "zh": "先开方再相乘：$\\sqrt{25}=5$，$2\\times 5=10$。若把 2 乘到根号内当成 $\\sqrt{50}$，就放错了系数 2 的位置——它拉伸的是输出而非输入。"
      }
    }
  ],
  "exponential-logarithmic/exponential-functions-and-e": [
    {
      "type": "mc",
      "question": {
        "en": "Which best describes $f(x) = 3(0.85)^x$?",
        "zh": "下列哪一项最能描述 $f(x) = 3(0.85)^x$？"
      },
      "choices": [
        "Exponential decay",
        "Exponential growth",
        "Linear",
        "Constant"
      ],
      "answer": 0,
      "explanation": {
        "en": "The base is $0.85$, which is between $0$ and $1$, so the function decays. Thinking any exponential rises confuses the base being greater than $1$ (growth) with a base less than $1$ (decay).",
        "zh": "底数为 $0.85$，介于 $0$ 与 $1$ 之间，因此函数递减（衰减）。以为所有指数函数都上升，是把底数大于 $1$（增长）与底数小于 $1$（衰减）搞混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A population grows $6\\%$ each year. What is the growth factor (base) of the exponential model?",
        "zh": "某人口每年增长 $6\\%$。该指数模型的增长因子（底数）是多少？"
      },
      "choices": [
        "$0.06$",
        "$1.06$",
        "$6$",
        "$0.94$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A $6\\%$ increase means the base is $1 + 0.06 = 1.06$. Using $0.06$ alone forgets to add the original whole ($1$) to the rate.",
        "zh": "增长 $6\\%$ 表示底数为 $1 + 0.06 = 1.06$。只用 $0.06$ 忘了把原来的整体（$1$）加到增长率上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car's value decreases $12\\%$ per year. What is the decay factor (base)?",
        "zh": "一辆汽车每年贬值 $12\\%$。其衰减因子（底数）是多少？"
      },
      "choices": [
        "$0.12$",
        "$1.12$",
        "$0.88$",
        "$-0.12$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A $12\\%$ decrease means the base is $1 - 0.12 = 0.88$. Adding the rate to get $1.12$ would model growth instead of decay.",
        "zh": "下降 $12\\%$ 表示底数为 $1 - 0.12 = 0.88$。把增长率加上得到 $1.12$ 反而表示增长而不是衰减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The number $e$ is approximately equal to which value?",
        "zh": "自然常数 $e$ 约等于下列哪个值？"
      },
      "choices": [
        "$3.142$",
        "$1.618$",
        "$1.414$",
        "$2.718$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$e \\approx 2.718$. Choosing $3.142$ confuses $e$ with $\\pi$, a different famous constant.",
        "zh": "$e \\approx 2.718$。选 $3.142$ 是把 $e$ 与另一著名常数 $\\pi$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $y$-intercept of $f(x) = 5(2)^x$?",
        "zh": "$f(x) = 5(2)^x$ 的 $y$ 轴截距是多少？"
      },
      "choices": [
        "$5$",
        "$2$",
        "$10$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "At $x = 0$, $2^0 = 1$, so $f(0) = 5(1) = 5$. Multiplying $5 \\times 2 = 10$ wrongly treats $2^0$ as $2$ instead of $1$.",
        "zh": "当 $x = 0$ 时，$2^0 = 1$，所以 $f(0) = 5(1) = 5$。算成 $5 \\times 2 = 10$ 是错把 $2^0$ 当作 $2$ 而不是 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the horizontal asymptote of $f(x) = 4(3)^x$?",
        "zh": "$f(x) = 4(3)^x$ 的水平渐近线是什么？"
      },
      "choices": [
        "$y = 4$",
        "$y = 0$",
        "$y = 3$",
        "$x = 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A basic exponential $ab^x$ with no vertical shift approaches $y = 0$. Reading $y = 4$ from the coefficient mistakes the starting value for the asymptote.",
        "zh": "没有上下平移的基本指数函数 $ab^x$ 趋近于 $y = 0$。把系数看成 $y = 4$ 是把初始值误当作渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula gives the amount from continuous compounding?",
        "zh": "下列哪个公式表示连续复利的金额？"
      },
      "choices": [
        "$A = P(1+\\frac{r}{n})^{nt}$",
        "$A = P(1+r)^t$",
        "$A = Pe^{rt}$",
        "$A = Prt$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Continuous compounding uses the base $e$: $A = Pe^{rt}$. The form $A = P(1+r)^t$ is annual (discrete) compounding, not continuous.",
        "zh": "连续复利使用底数 $e$：$A = Pe^{rt}$。而 $A = P(1+r)^t$ 是按年（离散）复利，不是连续复利。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula gives the amount when interest is compounded $n$ times per year?",
        "zh": "当利息每年复利 $n$ 次时，下列哪个公式给出金额？"
      },
      "choices": [
        "$A = Pe^{rt}$",
        "$A = P(1+r)^t$",
        "$A = Prt$",
        "$A = P(1+\\frac{r}{n})^{nt}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Compounding $n$ times per year splits the rate into $\\frac{r}{n}$ and the exponent into $nt$: $A = P(1+\\frac{r}{n})^{nt}$. The form with base $e$ is for continuous compounding only.",
        "zh": "每年复利 $n$ 次会把利率分成 $\\frac{r}{n}$、指数变为 $nt$：$A = P(1+\\frac{r}{n})^{nt}$。带底数 $e$ 的公式只用于连续复利。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $2^{-3}$.",
        "zh": "求 $2^{-3}$。"
      },
      "choices": [
        "$\\frac{1}{8}$",
        "$6$",
        "$8$",
        "$-8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A negative exponent means reciprocal: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. Getting $-8$ treats the negative exponent as multiplying by $-1$ instead of taking a reciprocal.",
        "zh": "负指数表示取倒数：$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$。算成 $-8$ 是把负指数当成乘以 $-1$，而不是取倒数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You invest $\\$1000$ at $4\\%$ compounded annually. What is the balance after $2$ years?",
        "zh": "你以年利率 $4\\%$、每年复利一次投资 $\\$1000$。$2$ 年后余额是多少？"
      },
      "choices": [
        "$\\$1080.00$",
        "$\\$1081.60$",
        "$\\$1083.29$",
        "$\\$1160.00$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$1000(1.04)^2 = 1000(1.0816) = 1081.60$. Getting $1080$ uses simple interest ($4\\% \\times 2 = 8\\%$) and ignores compounding.",
        "zh": "$1000(1.04)^2 = 1000(1.0816) = 1081.60$。算成 $1080$ 是用了单利（$4\\% \\times 2 = 8\\%$），忽略了复利。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is an exponential decay function?",
        "zh": "下列哪一个是指数衰减函数？"
      },
      "choices": [
        "$y = 2x$",
        "$y = x^2$",
        "$y = 4(\\frac{1}{2})^x$",
        "$y = 4(2)^x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$y = 4(\\frac{1}{2})^x$ has a base between $0$ and $1$, so it decays. $y = x^2$ is a power function (variable in the base), not an exponential.",
        "zh": "$y = 4(\\frac{1}{2})^x$ 的底数介于 $0$ 与 $1$ 之间，所以衰减。$y = x^2$ 是幂函数（变量在底数上），不是指数函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x) = 2^x$?",
        "zh": "$f(x) = 2^x$ 的定义域是什么？"
      },
      "choices": [
        "$y > 0$",
        "$x > 0$",
        "$x \\ge 0$",
        "All real numbers"
      ],
      "answer": 3,
      "explanation": {
        "en": "Any real number can be an exponent, so the domain is all real numbers. The condition $y > 0$ describes the range (outputs), not the domain (inputs).",
        "zh": "任何实数都可以作指数，所以定义域是全体实数。$y > 0$ 描述的是值域（输出），不是定义域（输入）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "You invest $\\$2000$ at $5\\%$ compounded annually for $3$ years. What is the balance? Round to the nearest cent.",
        "zh": "你以年利率 $5\\%$、每年复利一次投资 $\\$2000$，共 $3$ 年。余额是多少？四舍五入到分。"
      },
      "answer": "2315.25",
      "accept": [
        "$2315.25",
        "2315.25 dollars",
        "2315.3"
      ],
      "explanation": {
        "en": "$2000(1.05)^3 = 2000(1.157625) = 2315.25$. Compound growth multiplies by $1.05$ each year.",
        "zh": "$2000(1.05)^3 = 2000(1.157625) = 2315.25$。复利每年乘以 $1.05$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use $A = Pe^{rt}$ with $P = 1000$, $r = 0.03$, $t = 5$. Find $A$, rounded to the nearest cent.",
        "zh": "用 $A = Pe^{rt}$，其中 $P = 1000$、$r = 0.03$、$t = 5$。求 $A$，四舍五入到分。"
      },
      "answer": "1161.83",
      "accept": [
        "$1161.83",
        "1161.83 dollars",
        "1161.8"
      ],
      "explanation": {
        "en": "$rt = 0.03 \\times 5 = 0.15$, so $A = 1000e^{0.15} = 1000(1.161834) \\approx 1161.83$.",
        "zh": "$rt = 0.03 \\times 5 = 0.15$，所以 $A = 1000e^{0.15} = 1000(1.161834) \\approx 1161.83$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $e^0$.",
        "zh": "求 $e^0$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "Any nonzero base raised to the power $0$ equals $1$, so $e^0 = 1$.",
        "zh": "任何非零底数的 $0$ 次幂都等于 $1$，所以 $e^0 = 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity increases by $25\\%$ each period. What is its growth factor (base)?",
        "zh": "某量每期增长 $25\\%$。其增长因子（底数）是多少？"
      },
      "answer": "1.25",
      "accept": [
        "1.250",
        "5/4"
      ],
      "explanation": {
        "en": "A $25\\%$ increase gives a base of $1 + 0.25 = 1.25$.",
        "zh": "增长 $25\\%$ 得到底数 $1 + 0.25 = 1.25$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = 3(2)^x$, find $f(4)$.",
        "zh": "对于 $f(x) = 3(2)^x$，求 $f(4)$。"
      },
      "answer": "48",
      "accept": [
        "48.0",
        "+48"
      ],
      "explanation": {
        "en": "$2^4 = 16$, then $3 \\times 16 = 48$. Multiply the base power by the coefficient, not add them.",
        "zh": "$2^4 = 16$，再 $3 \\times 16 = 48$。要把幂与系数相乘，而不是相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample of $500$ mg decays by a factor of $0.9$ each hour. How many mg remain after $2$ hours?",
        "zh": "一份 $500$ 毫克的样本每小时按因子 $0.9$ 衰减。$2$ 小时后剩下多少毫克？"
      },
      "answer": "405",
      "accept": [
        "405.0",
        "405 mg",
        "405mg"
      ],
      "explanation": {
        "en": "$500(0.9)^2 = 500(0.81) = 405$ mg. Apply the decay factor once per hour.",
        "zh": "$500(0.9)^2 = 500(0.81) = 405$ 毫克。每小时施加一次衰减因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the horizontal asymptote (the $y$-value) of $f(x) = 2(5)^x - 3$?",
        "zh": "$f(x) = 2(5)^x - 3$ 的水平渐近线（$y$ 值）是多少？"
      },
      "answer": "-3",
      "accept": [
        "y=-3",
        "y = -3",
        "-3.0"
      ],
      "explanation": {
        "en": "The $-3$ shifts the whole graph down $3$ units, moving the asymptote from $y = 0$ to $y = -3$.",
        "zh": "$-3$ 把整个图像向下平移 $3$ 个单位，使渐近线从 $y = 0$ 移到 $y = -3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use $A = Pe^{rt}$ with $P = 5000$, $r = 0.06$, $t = 10$. Find $A$, rounded to the nearest cent.",
        "zh": "用 $A = Pe^{rt}$，其中 $P = 5000$、$r = 0.06$、$t = 10$。求 $A$，四舍五入到分。"
      },
      "answer": "9110.59",
      "accept": [
        "$9110.59",
        "9110.59 dollars",
        "9110.6"
      ],
      "explanation": {
        "en": "$rt = 0.06 \\times 10 = 0.6$, so $A = 5000e^{0.6} = 5000(1.822119) \\approx 9110.59$.",
        "zh": "$rt = 0.06 \\times 10 = 0.6$，所以 $A = 5000e^{0.6} = 5000(1.822119) \\approx 9110.59$。"
      }
    }
  ],
  "exponential-logarithmic/logarithms-and-properties": [
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct logarithmic form of $2^3 = 8$?",
        "zh": "$2^3 = 8$ 的正确对数形式是哪一个？"
      },
      "choices": [
        "$\\log_2 8 = 3$",
        "$\\log_8 2 = 3$",
        "$\\log_3 8 = 2$",
        "$\\log_2 3 = 8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A logarithm asks 'what exponent': base $2$ raised to $3$ gives $8$, so $\\log_2 8 = 3$. Writing $\\log_8 2 = 3$ swaps the base and the result.",
        "zh": "对数在问'指数是多少'：底数 $2$ 的 $3$ 次幂得 $8$，所以 $\\log_2 8 = 3$。写成 $\\log_8 2 = 3$ 是把底数和结果互换了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\log_2 16$.",
        "zh": "求 $\\log_2 16$。"
      },
      "choices": [
        "$2$",
        "$4$",
        "$8$",
        "$32$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Ask what power of $2$ gives $16$: since $2^4 = 16$, the answer is $4$. Getting $8$ divides $16$ by $2$ instead of finding the exponent.",
        "zh": "问 $2$ 的几次幂等于 $16$：因为 $2^4 = 16$，答案是 $4$。算成 $8$ 是把 $16$ 除以 $2$，而不是求指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\log 1000$ (common logarithm, base $10$).",
        "zh": "求 $\\log 1000$（常用对数，底数 $10$）。"
      },
      "choices": [
        "$100$",
        "$10$",
        "$3$",
        "$2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The common log has base $10$, and $10^3 = 1000$, so $\\log 1000 = 3$. Answering $100$ just divides by $10$ rather than counting the exponent.",
        "zh": "常用对数底数为 $10$，且 $10^3 = 1000$，所以 $\\log 1000 = 3$。回答 $100$ 只是除以 $10$，而不是数指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\ln e$.",
        "zh": "求 $\\ln e$。"
      },
      "choices": [
        "$0$",
        "$e$",
        "$2.718$",
        "$1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\ln$ is log base $e$, and $e^1 = e$, so $\\ln e = 1$. Answering $0$ confuses this with $\\ln 1 = 0$.",
        "zh": "$\\ln$ 是以 $e$ 为底的对数，且 $e^1 = e$，所以 $\\ln e = 1$。回答 $0$ 是与 $\\ln 1 = 0$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the product property, $\\log(xy)$ equals which of the following?",
        "zh": "根据乘积性质，$\\log(xy)$ 等于下列哪一项？"
      },
      "choices": [
        "$\\log x + \\log y$",
        "$\\log x \\cdot \\log y$",
        "$\\log x - \\log y$",
        "$(\\log x)(\\log y)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The log of a product is the sum of the logs: $\\log(xy) = \\log x + \\log y$. Multiplying the two logs together is a common misuse of the property.",
        "zh": "乘积的对数等于对数之和：$\\log(xy) = \\log x + \\log y$。把两个对数相乘是对该性质的常见误用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the quotient property, $\\log\\left(\\frac{x}{y}\\right)$ equals which of the following?",
        "zh": "根据商性质，$\\log\\left(\\frac{x}{y}\\right)$ 等于下列哪一项？"
      },
      "choices": [
        "$\\log x + \\log y$",
        "$\\log x - \\log y$",
        "$\\frac{\\log x}{\\log y}$",
        "$\\log y - \\log x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The log of a quotient is the difference of the logs: $\\log x - \\log y$. Writing $\\frac{\\log x}{\\log y}$ divides the logs, which is not the quotient property.",
        "zh": "商的对数等于对数之差：$\\log x - \\log y$。写成 $\\frac{\\log x}{\\log y}$ 是把对数相除，那不是商性质。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the power property, $\\log(x^3)$ equals which of the following?",
        "zh": "根据幂性质，$\\log(x^3)$ 等于下列哪一项？"
      },
      "choices": [
        "$3 + \\log x$",
        "$(\\log x)^3$",
        "$3 \\log x$",
        "$\\log 3x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The exponent moves out in front: $\\log(x^3) = 3\\log x$. Writing $(\\log x)^3$ raises the log to a power instead of bringing the exponent down.",
        "zh": "指数移到前面：$\\log(x^3) = 3\\log x$。写成 $(\\log x)^3$ 是把对数取幂，而不是把指数移下来。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the change-of-base formula, $\\log_5 20$ equals which of the following?",
        "zh": "用换底公式，$\\log_5 20$ 等于下列哪一项？"
      },
      "choices": [
        "$\\frac{\\ln 5}{\\ln 20}$",
        "$\\ln 20 - \\ln 5$",
        "$\\ln 20 \\cdot \\ln 5$",
        "$\\frac{\\ln 20}{\\ln 5}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Change of base puts the argument on top: $\\log_5 20 = \\frac{\\ln 20}{\\ln 5}$. Flipping it to $\\frac{\\ln 5}{\\ln 20}$ reverses the base and argument.",
        "zh": "换底公式把真数放在上面：$\\log_5 20 = \\frac{\\ln 20}{\\ln 5}$。写成 $\\frac{\\ln 5}{\\ln 20}$ 是把底数与真数颠倒了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\log_3\\left(\\frac{1}{9}\\right)$.",
        "zh": "求 $\\log_3\\left(\\frac{1}{9}\\right)$。"
      },
      "choices": [
        "$-2$",
        "$\\frac{1}{2}$",
        "$-\\frac{1}{2}$",
        "$2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $3^{-2} = \\frac{1}{9}$, the answer is $-2$. Answering $2$ ignores that a reciprocal ($\\frac{1}{9}$) needs a negative exponent.",
        "zh": "因为 $3^{-2} = \\frac{1}{9}$，答案是 $-2$。回答 $2$ 忽略了倒数（$\\frac{1}{9}$）需要负指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x) = \\log x$?",
        "zh": "$f(x) = \\log x$ 的定义域是什么？"
      },
      "choices": [
        "All real numbers",
        "$x > 0$",
        "$x \\ge 0$",
        "$x \\ne 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "You can only take the log of a positive number, so $x > 0$. Including $x = 0$ fails because $\\log 0$ is undefined.",
        "zh": "只能对正数取对数，所以 $x > 0$。把 $x = 0$ 包含进来不行，因为 $\\log 0$ 无定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertical asymptote of $y = \\log x$?",
        "zh": "$y = \\log x$ 的垂直渐近线是什么？"
      },
      "choices": [
        "$y = 0$",
        "$x = 1$",
        "$x = 0$",
        "$y = 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "As $x$ approaches $0$ from the right, $\\log x$ shoots to $-\\infty$, so the vertical asymptote is $x = 0$. Choosing $x = 1$ confuses the asymptote with the $x$-intercept.",
        "zh": "当 $x$ 从右侧趋近 $0$ 时，$\\log x$ 趋向 $-\\infty$，所以垂直渐近线是 $x = 0$。选 $x = 1$ 是把渐近线与 $x$ 轴截距混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For any valid base $b$, what is $\\log_b 1$?",
        "zh": "对任意有效底数 $b$，$\\log_b 1$ 等于多少？"
      },
      "choices": [
        "Undefined",
        "$1$",
        "$b$",
        "$0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Any base raised to the power $0$ gives $1$, so $\\log_b 1 = 0$. Answering $1$ confuses $\\log_b 1$ with $\\log_b b = 1$.",
        "zh": "任何底数的 $0$ 次幂都得 $1$，所以 $\\log_b 1 = 0$。回答 $1$ 是把 $\\log_b 1$ 与 $\\log_b b = 1$ 混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log_2 32$.",
        "zh": "求 $\\log_2 32$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Since $2^5 = 32$, $\\log_2 32 = 5$.",
        "zh": "因为 $2^5 = 32$，所以 $\\log_2 32 = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log 0.01$ (common logarithm, base $10$).",
        "zh": "求 $\\log 0.01$（常用对数，底数 $10$）。"
      },
      "answer": "-2",
      "accept": [
        "-2.0",
        "−2"
      ],
      "explanation": {
        "en": "$0.01 = 10^{-2}$, so $\\log 0.01 = -2$.",
        "zh": "$0.01 = 10^{-2}$，所以 $\\log 0.01 = -2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\ln 1$.",
        "zh": "求 $\\ln 1$。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "-0"
      ],
      "explanation": {
        "en": "Since $e^0 = 1$, $\\ln 1 = 0$.",
        "zh": "因为 $e^0 = 1$，所以 $\\ln 1 = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log_4 64$.",
        "zh": "求 $\\log_4 64$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Since $4^3 = 64$, $\\log_4 64 = 3$.",
        "zh": "因为 $4^3 = 64$，所以 $\\log_4 64 = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the change-of-base formula to evaluate $\\log_2 10$. Round to two decimal places.",
        "zh": "用换底公式求 $\\log_2 10$。四舍五入到两位小数。"
      },
      "answer": "3.32",
      "accept": [
        "3.32",
        "3.322",
        "3.3219"
      ],
      "explanation": {
        "en": "$\\log_2 10 = \\frac{\\ln 10}{\\ln 2} = \\frac{2.302585}{0.693147} \\approx 3.32$.",
        "zh": "$\\log_2 10 = \\frac{\\ln 10}{\\ln 2} = \\frac{2.302585}{0.693147} \\approx 3.32$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\log_5 x = 3$, what is $x$?",
        "zh": "若 $\\log_5 x = 3$，$x$ 是多少？"
      },
      "answer": "125",
      "accept": [
        "125.0",
        "+125"
      ],
      "explanation": {
        "en": "Rewrite in exponential form: $x = 5^3 = 125$.",
        "zh": "改写为指数形式：$x = 5^3 = 125$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log_9 3$.",
        "zh": "求 $\\log_9 3$。"
      },
      "answer": "0.5",
      "accept": [
        "1/2",
        ".5",
        "0.50"
      ],
      "explanation": {
        "en": "Since $9^{1/2} = 3$, $\\log_9 3 = \\frac{1}{2}$.",
        "zh": "因为 $9^{1/2} = 3$，所以 $\\log_9 3 = \\frac{1}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use log properties to evaluate $\\log_6 4 + \\log_6 9$.",
        "zh": "用对数性质求 $\\log_6 4 + \\log_6 9$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "By the product property, $\\log_6 4 + \\log_6 9 = \\log_6(4 \\times 9) = \\log_6 36 = 2$, since $6^2 = 36$.",
        "zh": "根据乘积性质，$\\log_6 4 + \\log_6 9 = \\log_6(4 \\times 9) = \\log_6 36 = 2$，因为 $6^2 = 36$。"
      }
    }
  ],
  "exponential-logarithmic/solving-exponential-log-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $2^x = 8$.",
        "zh": "解 $2^x = 8$。"
      },
      "choices": [
        "$x = 3$",
        "$x = 2$",
        "$x = 4$",
        "$x = 16$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Write $8$ as $2^3$, so $x = 3$. Answering $16$ multiplies $2 \\times 8$ instead of finding the exponent.",
        "zh": "把 $8$ 写成 $2^3$，所以 $x = 3$。回答 $16$ 是把 $2 \\times 8$ 相乘，而不是求指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $10^x = 1000$.",
        "zh": "解 $10^x = 1000$。"
      },
      "choices": [
        "$x = 100$",
        "$x = 3$",
        "$x = 2$",
        "$x = 30$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $1000 = 10^3$, $x = 3$. Answering $100$ divides $1000$ by $10$ instead of counting the exponent.",
        "zh": "因为 $1000 = 10^3$，所以 $x = 3$。回答 $100$ 是把 $1000$ 除以 $10$，而不是数指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $e^x = 1$.",
        "zh": "解 $e^x = 1$。"
      },
      "choices": [
        "$x = 1$",
        "$x = e$",
        "$x = 0$",
        "Undefined"
      ],
      "answer": 2,
      "explanation": {
        "en": "Any base to the power $0$ is $1$, so $x = 0$. Answering $1$ confuses $e^x = 1$ with $e^x = e$.",
        "zh": "任何底数的 $0$ 次幂都是 $1$，所以 $x = 0$。回答 $1$ 是把 $e^x = 1$ 与 $e^x = e$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the exact solution of $3^x = 20$?",
        "zh": "下列哪个表达式给出 $3^x = 20$ 的精确解？"
      },
      "choices": [
        "$\\frac{20}{3}$",
        "$\\frac{\\log 3}{\\log 20}$",
        "$\\log 20 - \\log 3$",
        "$\\frac{\\log 20}{\\log 3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Take logs of both sides: $x\\log 3 = \\log 20$, so $x = \\frac{\\log 20}{\\log 3}$. Flipping the fraction reverses which side you divided by.",
        "zh": "两边取对数：$x\\log 3 = \\log 20$，所以 $x = \\frac{\\log 20}{\\log 3}$。把分数上下颠倒会把除数搞反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\log_2 x = 5$.",
        "zh": "解 $\\log_2 x = 5$。"
      },
      "choices": [
        "$x = 32$",
        "$x = 25$",
        "$x = 10$",
        "$x = 7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rewrite as $x = 2^5 = 32$. Answering $10$ multiplies $2 \\times 5$ instead of raising $2$ to the fifth power.",
        "zh": "改写为 $x = 2^5 = 32$。回答 $10$ 是把 $2 \\times 5$ 相乘，而不是求 $2$ 的五次幂。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\ln x = 0$.",
        "zh": "解 $\\ln x = 0$。"
      },
      "choices": [
        "$x = 0$",
        "$x = 1$",
        "$x = e$",
        "Undefined"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rewrite as $x = e^0 = 1$. Answering $0$ mistakes the input for the output; note $\\ln 0$ is actually undefined.",
        "zh": "改写为 $x = e^0 = 1$。回答 $0$ 是把输入与输出搞混；注意 $\\ln 0$ 实际上无定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\log x = 2$ (common logarithm, base $10$).",
        "zh": "解 $\\log x = 2$（常用对数，底数 $10$）。"
      },
      "choices": [
        "$x = 20$",
        "$x = 0.01$",
        "$x = 100$",
        "$x = 1000$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rewrite as $x = 10^2 = 100$. Answering $20$ multiplies $10 \\times 2$ instead of raising $10$ to the second power.",
        "zh": "改写为 $x = 10^2 = 100$。回答 $20$ 是把 $10 \\times 2$ 相乘，而不是求 $10$ 的平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula models a quantity with half-life $h$?",
        "zh": "下列哪个公式表示半衰期为 $h$ 的量？"
      },
      "choices": [
        "$A = A_0(2)^{ht}$",
        "$A = A_0(2)^{t/h}$",
        "$A = A_0\\left(\\frac{1}{2}\\right)^{ht}$",
        "$A = A_0\\left(\\frac{1}{2}\\right)^{t/h}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Each half-life multiplies by $\\frac{1}{2}$, and $t/h$ counts how many half-lives have passed: $A = A_0(\\frac{1}{2})^{t/h}$. Using base $2$ would model doubling, not halving.",
        "zh": "每个半衰期乘以 $\\frac{1}{2}$，而 $t/h$ 数出经过了多少个半衰期：$A = A_0(\\frac{1}{2})^{t/h}$。用底数 $2$ 表示的是翻倍而不是减半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula models a quantity with doubling time $d$?",
        "zh": "下列哪个公式表示倍增时间为 $d$ 的量？"
      },
      "choices": [
        "$A = A_0(2)^{t/d}$",
        "$A = A_0\\left(\\frac{1}{2}\\right)^{t/d}$",
        "$A = A_0(2)^{dt}$",
        "$A = A_0 e^{-dt}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each doubling time multiplies by $2$, and $t/d$ counts the doublings: $A = A_0(2)^{t/d}$. Putting $dt$ in the exponent instead of $t/d$ mishandles the doubling period.",
        "zh": "每个倍增时间乘以 $2$，而 $t/d$ 数出翻倍次数：$A = A_0(2)^{t/d}$。把指数写成 $dt$ 而不是 $t/d$ 会用错倍增周期。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solving $\\log x + \\log(x-3) = 1$ leads to $x = 5$ and $x = -2$. Which is the valid solution?",
        "zh": "解 $\\log x + \\log(x-3) = 1$ 得到 $x = 5$ 和 $x = -2$。哪个是有效解？"
      },
      "choices": [
        "$x = -2$",
        "$x = 5$",
        "Both $x = 5$ and $x = -2$",
        "Neither"
      ],
      "answer": 1,
      "explanation": {
        "en": "Only $x = 5$ keeps both logarithm arguments positive; $x = -2$ makes $\\log x$ undefined, so it is extraneous. Keeping both ignores the domain check.",
        "zh": "只有 $x = 5$ 能使两个对数的真数都为正；$x = -2$ 会让 $\\log x$ 无定义，是增根。保留两个解就是忽略了定义域检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $5^x = 5^{2x-1}$.",
        "zh": "解 $5^x = 5^{2x-1}$。"
      },
      "choices": [
        "$x = 0$",
        "$x = 2$",
        "$x = 1$",
        "$x = -1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Equal bases let you set the exponents equal: $x = 2x - 1$, so $x = 1$. Forgetting to move the $x$ terms together leads to a wrong value.",
        "zh": "底数相同可令指数相等：$x = 2x - 1$，所以 $x = 1$。忘记把 $x$ 项移到一起就会得到错误的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\log_3 x = 4$.",
        "zh": "解 $\\log_3 x = 4$。"
      },
      "choices": [
        "$x = 12$",
        "$x = 64$",
        "$x = 7$",
        "$x = 81$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Rewrite as $x = 3^4 = 81$. Answering $12$ multiplies $3 \\times 4$ instead of raising $3$ to the fourth power.",
        "zh": "改写为 $x = 3^4 = 81$。回答 $12$ 是把 $3 \\times 4$ 相乘，而不是求 $3$ 的四次幂。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $4^x = 64$.",
        "zh": "解 $4^x = 64$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Since $64 = 4^3$, $x = 3$.",
        "zh": "因为 $64 = 4^3$，所以 $x = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $2^x = 32$.",
        "zh": "解 $2^x = 32$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Since $32 = 2^5$, $x = 5$.",
        "zh": "因为 $32 = 2^5$，所以 $x = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\log_2 x = 6$.",
        "zh": "解 $\\log_2 x = 6$。"
      },
      "answer": "64",
      "accept": [
        "64.0",
        "+64"
      ],
      "explanation": {
        "en": "Rewrite as $x = 2^6 = 64$.",
        "zh": "改写为 $x = 2^6 = 64$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $10^x = 0.001$.",
        "zh": "解 $10^x = 0.001$。"
      },
      "answer": "-3",
      "accept": [
        "-3.0",
        "−3"
      ],
      "explanation": {
        "en": "Since $0.001 = 10^{-3}$, $x = -3$.",
        "zh": "因为 $0.001 = 10^{-3}$，所以 $x = -3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Bacteria double every $3$ hours. How many doublings occur in $12$ hours?",
        "zh": "细菌每 $3$ 小时翻倍一次。$12$ 小时内翻倍多少次？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4",
        "4 times"
      ],
      "explanation": {
        "en": "Number of doublings is $\\frac{12}{3} = 4$.",
        "zh": "翻倍次数为 $\\frac{12}{3} = 4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A substance has a half-life of $5$ years. What fraction remains after $15$ years? Give a decimal.",
        "zh": "某物质半衰期为 $5$ 年。$15$ 年后剩下几分之几？请填小数。"
      },
      "answer": "0.125",
      "accept": [
        "1/8",
        ".125",
        "0.13"
      ],
      "explanation": {
        "en": "In $15$ years there are $\\frac{15}{5} = 3$ half-lives, so the fraction is $(\\frac{1}{2})^3 = \\frac{1}{8} = 0.125$.",
        "zh": "$15$ 年内有 $\\frac{15}{5} = 3$ 个半衰期，所以剩下 $(\\frac{1}{2})^3 = \\frac{1}{8} = 0.125$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\ln x = 2$. Round to two decimal places.",
        "zh": "解 $\\ln x = 2$。四舍五入到两位小数。"
      },
      "answer": "7.39",
      "accept": [
        "7.389",
        "7.3891",
        "e^2"
      ],
      "explanation": {
        "en": "Rewrite as $x = e^2 \\approx 7.39$.",
        "zh": "改写为 $x = e^2 \\approx 7.39$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\log_5 x = 3$.",
        "zh": "解 $\\log_5 x = 3$。"
      },
      "answer": "125",
      "accept": [
        "125.0",
        "+125"
      ],
      "explanation": {
        "en": "Rewrite as $x = 5^3 = 125$.",
        "zh": "改写为 $x = 5^3 = 125$。"
      }
    }
  ],
  "rational-functions/graphing-rational-functions": [
    {
      "type": "mc",
      "question": {
        "en": "The variable $y$ varies inversely with $x$, and $y=8$ when $x=3$. What is the constant of variation $k$?",
        "zh": "变量 $y$ 与 $x$ 成反比，且当 $x=3$ 时 $y=8$。反比例常数 $k$ 是多少？"
      },
      "choices": [
        "$24$",
        "$2.67$",
        "$11$",
        "$\\frac{8}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Inverse variation means $y=\\frac{k}{x}$, so $k=xy=3\\times 8=24$. Dividing $y$ by $x$ or adding them treats the relationship as direct variation or a sum, which is not how inverse variation works.",
        "zh": "反比例意味着 $y=\\frac{k}{x}$，所以 $k=xy=3\\times 8=24$。用 $y$ 除以 $x$ 或把它们相加，是把关系当成了正比例或求和，这不是反比例的做法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The variable $z$ varies jointly with $x$ and $y$, so $z=kxy$. If $z=36$ when $x=2$ and $y=3$, find $k$.",
        "zh": "变量 $z$ 与 $x$、$y$ 成联合变化，即 $z=kxy$。若当 $x=2$、$y=3$ 时 $z=36$，求 $k$。"
      },
      "choices": [
        "$3$",
        "$6$",
        "$18$",
        "$12$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Joint variation gives $k=\\frac{z}{xy}=\\frac{36}{2\\times 3}=\\frac{36}{6}=6$. Dividing by only one variable (using $\\frac{36}{2}$ or $\\frac{36}{3}$) ignores that $z$ depends on the product $xy$.",
        "zh": "联合变化中 $k=\\frac{z}{xy}=\\frac{36}{2\\times 3}=\\frac{36}{6}=6$。只除以一个变量（用 $\\frac{36}{2}$ 或 $\\frac{36}{3}$）忽略了 $z$ 取决于乘积 $xy$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Where are the vertical asymptotes of $f(x)=\\frac{x+2}{(x-3)(x+1)}$?",
        "zh": "函数 $f(x)=\\frac{x+2}{(x-3)(x+1)}$ 的垂直渐近线在哪里？"
      },
      "choices": [
        "$x=-2$",
        "$x=3$ only",
        "$x=3$ and $x=-1$",
        "$x=-3$ and $x=1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Vertical asymptotes occur where the denominator is zero (and the factor does not cancel): $x-3=0$ and $x+1=0$ give $x=3$ and $x=-1$. Using the numerator $x+2=0$ finds an intercept, not an asymptote, and flipping the signs of the factors misreads where each equals zero.",
        "zh": "垂直渐近线出现在分母为零处（且该因式不能约去）：$x-3=0$ 和 $x+1=0$ 得到 $x=3$ 和 $x=-1$。用分子 $x+2=0$ 求得的是截距而非渐近线，把因式符号弄反则读错了每个因式的零点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The function $f(x)=\\frac{x-4}{(x-4)(x+2)}$ has a hole (removable discontinuity) at which $x$-value?",
        "zh": "函数 $f(x)=\\frac{x-4}{(x-4)(x+2)}$ 在哪个 $x$ 值处有一个洞（可去间断点）？"
      },
      "choices": [
        "$x=-2$",
        "$x=4$ and $x=-2$",
        "$x=0$",
        "$x=4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The factor $x-4$ appears in both numerator and denominator and cancels, creating a hole at $x=4$; the remaining factor $x+2$ gives a vertical asymptote at $x=-2$, not a hole. A cancelled factor makes a hole, an uncancelled one makes an asymptote.",
        "zh": "因式 $x-4$ 同时出现在分子和分母中并被约去，在 $x=4$ 处形成一个洞；剩下的因式 $x+2$ 给出的是 $x=-2$ 处的垂直渐近线，而不是洞。被约去的因式产生洞，未被约去的产生渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the horizontal asymptote of $f(x)=\\frac{2x+1}{x^{2}-4}$?",
        "zh": "函数 $f(x)=\\frac{2x+1}{x^{2}-4}$ 的水平渐近线是什么？"
      },
      "choices": [
        "$y=0$",
        "$y=2$",
        "no horizontal asymptote",
        "$y=\\frac{1}{4}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The numerator degree ($1$) is less than the denominator degree ($2$), so the horizontal asymptote is $y=0$. Using the leading coefficient $2$ as $y=2$ only applies when the degrees are equal.",
        "zh": "分子次数（$1$）小于分母次数（$2$），所以水平渐近线是 $y=0$。把首项系数 $2$ 当作 $y=2$ 只在两者次数相等时才适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the horizontal asymptote of $f(x)=\\frac{3x^{2}+1}{6x^{2}-x}$?",
        "zh": "函数 $f(x)=\\frac{3x^{2}+1}{6x^{2}-x}$ 的水平渐近线是什么？"
      },
      "choices": [
        "$y=3$",
        "$y=\\frac{1}{2}$",
        "$y=0$",
        "$y=2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The degrees are equal, so the horizontal asymptote is the ratio of leading coefficients: $\\frac{3}{6}=\\frac{1}{2}$. Answering $y=0$ is the rule for when the numerator degree is smaller, which is not the case here.",
        "zh": "分子分母次数相等，所以水平渐近线是首项系数之比：$\\frac{3}{6}=\\frac{1}{2}$。回答 $y=0$ 是分子次数较小时的规则，此处并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rational function has a slant (oblique) asymptote exactly when which condition holds?",
        "zh": "有理函数恰好在什么条件下有斜渐近线？"
      },
      "choices": [
        "numerator degree equals denominator degree",
        "numerator degree is less than denominator degree",
        "numerator degree is exactly one more than denominator degree",
        "numerator degree is two more than denominator degree"
      ],
      "answer": 2,
      "explanation": {
        "en": "A slant asymptote appears when the numerator degree is exactly one greater than the denominator degree, so the division leaves a linear quotient. Equal degrees give a horizontal asymptote instead, and a gap of two or more gives no linear asymptote.",
        "zh": "当分子次数恰好比分母次数大 1 时会出现斜渐近线，因为做除法后余下一个一次的商。次数相等时得到的是水平渐近线，相差 2 或更多时则没有一次渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the slant asymptote of $f(x)=\\frac{x^{2}+2x+3}{x+1}$.",
        "zh": "求函数 $f(x)=\\frac{x^{2}+2x+3}{x+1}$ 的斜渐近线。"
      },
      "choices": [
        "$y=x$",
        "$y=x+2$",
        "$y=x-1$",
        "$y=x+1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Dividing $x^{2}+2x+3$ by $x+1$ gives $x+1$ with remainder $2$, so the slant asymptote is $y=x+1$ (the remainder term vanishes as $x$ grows). Stopping the division early or misreading the quotient gives the other lines.",
        "zh": "用 $x^{2}+2x+3$ 除以 $x+1$ 得到商 $x+1$、余数 $2$，所以斜渐近线是 $y=x+1$（当 $x$ 增大时余数项趋于零）。过早停止除法或读错商就会得到其他直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $x$-intercept of $f(x)=\\frac{x-5}{x+2}$?",
        "zh": "函数 $f(x)=\\frac{x-5}{x+2}$ 的 $x$ 轴截距是多少？"
      },
      "choices": [
        "$x=5$",
        "$x=-2$",
        "$x=-5$",
        "$x=0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "An $x$-intercept occurs where the numerator is zero: $x-5=0$ gives $x=5$. Setting the denominator to zero ($x=-2$) locates a vertical asymptote, not an intercept.",
        "zh": "$x$ 轴截距出现在分子为零处：$x-5=0$ 得到 $x=5$。令分母为零（$x=-2$）找到的是垂直渐近线，而不是截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $y$-intercept of $f(x)=\\frac{x-6}{x+3}$?",
        "zh": "函数 $f(x)=\\frac{x-6}{x+3}$ 的 $y$ 轴截距是多少？"
      },
      "choices": [
        "$-6$",
        "$-2$",
        "$2$",
        "$-\\frac{1}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The $y$-intercept is $f(0)=\\frac{0-6}{0+3}=\\frac{-6}{3}=-2$. Reading off only the numerator constant $-6$ forgets to divide by the denominator evaluated at $0$.",
        "zh": "$y$ 轴截距是 $f(0)=\\frac{0-6}{0+3}=\\frac{-6}{3}=-2$。只看分子常数 $-6$ 忘记了要除以在 $0$ 处求得的分母。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $k>0$, the graph of the inverse variation $y=\\frac{k}{x}$ lies in which two quadrants?",
        "zh": "当 $k>0$ 时，反比例函数 $y=\\frac{k}{x}$ 的图象位于哪两个象限？"
      },
      "choices": [
        "II and IV",
        "I and II",
        "I and III",
        "III and IV"
      ],
      "answer": 2,
      "explanation": {
        "en": "When $k>0$, $x$ and $y$ always share the same sign, so the curve sits in Quadrants I and III. Quadrants II and IV would require $x$ and $y$ to have opposite signs, which happens only when $k<0$.",
        "zh": "当 $k>0$ 时，$x$ 和 $y$ 总是同号，所以曲线位于第一和第三象限。第二和第四象限要求 $x$ 与 $y$ 异号，那只在 $k<0$ 时发生。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The function $f(x)=\\frac{x^{2}-9}{x-3}$ has a hole. What are the coordinates of the hole?",
        "zh": "函数 $f(x)=\\frac{x^{2}-9}{x-3}$ 有一个洞。这个洞的坐标是多少？"
      },
      "choices": [
        "$(3,0)$",
        "$(-3,0)$",
        "$(3,3)$",
        "$(3,6)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor: $\\frac{(x-3)(x+3)}{x-3}=x+3$ with $x\\ne 3$, so the hole is at $x=3$, where the simplified form gives $y=3+3=6$: the point $(3,6)$. Using $y=0$ treats the hole like an $x$-intercept instead of substituting into the reduced expression.",
        "zh": "因式分解：$\\frac{(x-3)(x+3)}{x-3}=x+3$（$x\\ne 3$），所以洞在 $x=3$ 处，代入化简后的式子得 $y=3+3=6$，即点 $(3,6)$。用 $y=0$ 是把洞当成了 $x$ 轴截距，而没有代入化简后的表达式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The variable $y$ varies inversely with $x$, and $y=5$ when $x=6$. Find $y$ when $x=10$.",
        "zh": "变量 $y$ 与 $x$ 成反比，且当 $x=6$ 时 $y=5$。求当 $x=10$ 时 $y$ 的值。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00"
      ],
      "explanation": {
        "en": "First find $k=xy=6\\times 5=30$. Then $y=\\frac{k}{x}=\\frac{30}{10}=3$. Treating it as direct variation (scaling $y$ up with $x$) would move the answer the wrong direction.",
        "zh": "先求 $k=xy=6\\times 5=30$。再算 $y=\\frac{k}{x}=\\frac{30}{10}=3$。把它当成正比例（让 $y$ 随 $x$ 一起增大）会使答案朝错误方向变化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The variable $w$ varies jointly with $x$ and $y$. If $w=48$ when $x=4$ and $y=2$, find $w$ when $x=3$ and $y=5$.",
        "zh": "变量 $w$ 与 $x$、$y$ 成联合变化。若当 $x=4$、$y=2$ 时 $w=48$，求当 $x=3$、$y=5$ 时 $w$ 的值。"
      },
      "answer": "90",
      "accept": [
        "90.0",
        "90.00"
      ],
      "explanation": {
        "en": "From $w=kxy$: $k=\\frac{48}{4\\times 2}=6$. Then $w=6\\times 3\\times 5=90$. Forgetting to multiply by both new values would undercount the change.",
        "zh": "由 $w=kxy$：$k=\\frac{48}{4\\times 2}=6$。再算 $w=6\\times 3\\times 5=90$。忘记同时乘以两个新值会使变化量被算少。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At what $x$-value does $f(x)=\\frac{x+1}{2x-8}$ have a vertical asymptote?",
        "zh": "函数 $f(x)=\\frac{x+1}{2x-8}$ 在哪个 $x$ 值处有垂直渐近线？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "x=4"
      ],
      "explanation": {
        "en": "Set the denominator to zero: $2x-8=0$ gives $x=4$. Using the numerator $x+1=0$ would find an $x$-intercept instead of the asymptote.",
        "zh": "令分母为零：$2x-8=0$ 得到 $x=4$。用分子 $x+1=0$ 求得的是 $x$ 轴截距，而不是渐近线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-value of the horizontal asymptote of $f(x)=\\frac{4x^{2}+2}{2x^{2}+7}$?",
        "zh": "函数 $f(x)=\\frac{4x^{2}+2}{2x^{2}+7}$ 的水平渐近线的 $y$ 值是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "y=2"
      ],
      "explanation": {
        "en": "The degrees are equal, so the horizontal asymptote is the ratio of leading coefficients: $\\frac{4}{2}=2$. Answering $0$ would apply the smaller-numerator-degree rule, which does not fit here.",
        "zh": "分子分母次数相等，所以水平渐近线是首项系数之比：$\\frac{4}{2}=2$。回答 $0$ 是套用了分子次数较小的规则，此处并不适用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-intercept of $f(x)=\\frac{3x-12}{x+5}$.",
        "zh": "求函数 $f(x)=\\frac{3x-12}{x+5}$ 的 $x$ 轴截距。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "x=4"
      ],
      "explanation": {
        "en": "The numerator is zero when $3x-12=0$, so $x=4$. Setting the denominator to zero ($x=-5$) would give a vertical asymptote instead.",
        "zh": "分子在 $3x-12=0$ 时为零，所以 $x=4$。令分母为零（$x=-5$）得到的是垂直渐近线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $y$-intercept of $f(x)=\\frac{2x-1}{x-4}$. Give the value as a decimal.",
        "zh": "求函数 $f(x)=\\frac{2x-1}{x-4}$ 的 $y$ 轴截距，用小数表示。"
      },
      "answer": "0.25",
      "accept": [
        "1/4",
        ".25",
        "0.250"
      ],
      "explanation": {
        "en": "Evaluate $f(0)=\\frac{2(0)-1}{0-4}=\\frac{-1}{-4}=0.25$. The two negatives make a positive; dropping a sign would give $-0.25$.",
        "zh": "计算 $f(0)=\\frac{2(0)-1}{0-4}=\\frac{-1}{-4}=0.25$。两个负号相除得正；漏掉一个符号会得到 $-0.25$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The function $f(x)=\\frac{x^{2}-x-6}{x-3}$ has a hole. What is the $y$-coordinate of the hole?",
        "zh": "函数 $f(x)=\\frac{x^{2}-x-6}{x-3}$ 有一个洞。这个洞的 $y$ 坐标是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5.00"
      ],
      "explanation": {
        "en": "Factor: $\\frac{(x-3)(x+2)}{x-3}=x+2$ with $x\\ne 3$. At $x=3$ the reduced form gives $y=3+2=5$. Plugging $x=3$ into the original unreduced fraction gives $\\frac{0}{0}$, which is why you must simplify first.",
        "zh": "因式分解：$\\frac{(x-3)(x+2)}{x-3}=x+2$（$x\\ne 3$）。在 $x=3$ 处化简式给出 $y=3+2=5$。把 $x=3$ 代入未化简的原式得到 $\\frac{0}{0}$，所以必须先化简。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The slant asymptote of $f(x)=\\frac{x^{2}+5x+7}{x+2}$ has the form $y=x+b$. Find $b$.",
        "zh": "函数 $f(x)=\\frac{x^{2}+5x+7}{x+2}$ 的斜渐近线形如 $y=x+b$。求 $b$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00"
      ],
      "explanation": {
        "en": "Dividing $x^{2}+5x+7$ by $x+2$ gives quotient $x+3$ with remainder $1$, so the slant asymptote is $y=x+3$ and $b=3$. Ignoring the middle term of the division would give the wrong constant.",
        "zh": "用 $x^{2}+5x+7$ 除以 $x+2$ 得到商 $x+3$、余数 $1$，所以斜渐近线是 $y=x+3$，$b=3$。忽略除法中的中间项会得到错误的常数。"
      }
    }
  ],
  "rational-functions/rational-expressions-and-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{x^{2}-9}{x^{2}-6x+9}$.",
        "zh": "化简 $\\frac{x^{2}-9}{x^{2}-6x+9}$。"
      },
      "choices": [
        "$\\frac{x+3}{x-3}$",
        "$\\frac{x-3}{x+3}$",
        "$x+3$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor both parts: $\\frac{(x-3)(x+3)}{(x-3)(x-3)}$, then cancel one $x-3$ to get $\\frac{x+3}{x-3}$. Cancelling the wrong factor or the $x$ terms individually (you may only cancel whole factors) leads to the other forms.",
        "zh": "把上下都因式分解：$\\frac{(x-3)(x+3)}{(x-3)(x-3)}$，再约去一个 $x-3$ 得到 $\\frac{x+3}{x-3}$。约错因式，或单独约去 $x$（只能约去整个因式）会得到其他形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{x^{2}-4}{x+2}$.",
        "zh": "化简 $\\frac{x^{2}-4}{x+2}$。"
      },
      "choices": [
        "$x+2$",
        "$x-2$",
        "$x^{2}-2$",
        "$\\frac{1}{x-2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The numerator is a difference of squares: $\\frac{(x-2)(x+2)}{x+2}=x-2$ after cancelling $x+2$. Keeping $x+2$ cancels the wrong factor, and $x^{2}-2$ comes from cancelling only part of a term.",
        "zh": "分子是平方差：$\\frac{(x-2)(x+2)}{x+2}$，约去 $x+2$ 后得 $x-2$。保留 $x+2$ 是约错了因式，而 $x^{2}-2$ 来自只约去某一项的一部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply and simplify: $\\frac{2}{x}\\cdot\\frac{x^{2}}{6}$.",
        "zh": "相乘并化简：$\\frac{2}{x}\\cdot\\frac{x^{2}}{6}$。"
      },
      "choices": [
        "$\\frac{x}{6}$",
        "$\\frac{2x}{6}$",
        "$\\frac{x}{3}$",
        "$\\frac{2}{6x}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply across: $\\frac{2x^{2}}{6x}$, then cancel one $x$ and reduce $\\frac{2}{6}$ to get $\\frac{x}{3}$. Leaving $\\frac{2x}{6}$ unreduced skips simplifying the number, and $\\frac{2}{6x}$ divides by $x$ instead of cancelling it.",
        "zh": "分子分母分别相乘：$\\frac{2x^{2}}{6x}$，约去一个 $x$ 并把 $\\frac{2}{6}$ 化简，得到 $\\frac{x}{3}$。留下 $\\frac{2x}{6}$ 没有化简数字，而 $\\frac{2}{6x}$ 是把 $x$ 除下去而不是约掉。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Divide and simplify: $\\frac{a}{3}\\div\\frac{a}{6}$.",
        "zh": "相除并化简：$\\frac{a}{3}\\div\\frac{a}{6}$。"
      },
      "choices": [
        "$\\frac{a^{2}}{18}$",
        "$\\frac{1}{2}$",
        "$a$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Dividing means multiplying by the reciprocal: $\\frac{a}{3}\\cdot\\frac{6}{a}=\\frac{6a}{3a}=2$. Multiplying straight across without flipping gives $\\frac{a^{2}}{18}$, and flipping the wrong fraction inverts the result to $\\frac{1}{2}$.",
        "zh": "除法就是乘以倒数：$\\frac{a}{3}\\cdot\\frac{6}{a}=\\frac{6a}{3a}=2$。不取倒数直接相乘得到 $\\frac{a^{2}}{18}$，而把错误的那个分数取倒数会使结果反过来变成 $\\frac{1}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Add: $\\frac{3}{x}+\\frac{5}{x}$.",
        "zh": "相加：$\\frac{3}{x}+\\frac{5}{x}$。"
      },
      "choices": [
        "$\\frac{8}{x}$",
        "$\\frac{8}{2x}$",
        "$\\frac{15}{x}$",
        "$\\frac{8}{x^{2}}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With a common denominator you add only the numerators: $\\frac{3+5}{x}=\\frac{8}{x}$. Adding the denominators too gives $\\frac{8}{2x}$, and multiplying the denominators gives $\\frac{8}{x^{2}}$ - neither is allowed once denominators already match.",
        "zh": "分母相同时只把分子相加：$\\frac{3+5}{x}=\\frac{8}{x}$。把分母也加起来得到 $\\frac{8}{2x}$，把分母相乘得到 $\\frac{8}{x^{2}}$，在分母已相同时都不允许。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Subtract: $\\frac{1}{x}-\\frac{1}{y}$.",
        "zh": "相减：$\\frac{1}{x}-\\frac{1}{y}$。"
      },
      "choices": [
        "$\\frac{1}{x-y}$",
        "$\\frac{y-x}{xy}$",
        "$0$",
        "$\\frac{x-y}{xy}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use the common denominator $xy$: $\\frac{y}{xy}-\\frac{x}{xy}=\\frac{y-x}{xy}$. Subtracting the denominators to get $\\frac{1}{x-y}$ ignores that you must rewrite each fraction first, and reversing the numerator to $x-y$ flips the sign.",
        "zh": "使用公分母 $xy$：$\\frac{y}{xy}-\\frac{x}{xy}=\\frac{y-x}{xy}$。把分母相减得到 $\\frac{1}{x-y}$ 忽略了必须先通分，而把分子写成 $x-y$ 则弄反了符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the least common denominator (LCD) of $\\frac{1}{x^{2}-x}$ and $\\frac{1}{x^{2}-1}$?",
        "zh": "$\\frac{1}{x^{2}-x}$ 与 $\\frac{1}{x^{2}-1}$ 的最小公分母（LCD）是什么？"
      },
      "choices": [
        "$x(x-1)$",
        "$(x-1)(x+1)$",
        "$x(x-1)(x+1)$",
        "$x(x-1)^{2}(x+1)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Factor: $x^{2}-x=x(x-1)$ and $x^{2}-1=(x-1)(x+1)$. The LCD uses each distinct factor once: $x(x-1)(x+1)$. The shared factor $x-1$ is counted only once, so squaring it over-builds the denominator.",
        "zh": "因式分解：$x^{2}-x=x(x-1)$，$x^{2}-1=(x-1)(x+1)$。LCD 取每个不同因式各一次：$x(x-1)(x+1)$。公共因式 $x-1$ 只算一次，把它平方就多算了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify the complex fraction $\\frac{\\;\\frac{1}{2}\\;}{\\;\\frac{3}{4}\\;}$.",
        "zh": "化简繁分数 $\\frac{\\;\\frac{1}{2}\\;}{\\;\\frac{3}{4}\\;}$。"
      },
      "choices": [
        "$\\frac{3}{8}$",
        "$\\frac{1}{2}$",
        "$\\frac{8}{3}$",
        "$\\frac{2}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A complex fraction is a division: $\\frac{1}{2}\\div\\frac{3}{4}=\\frac{1}{2}\\cdot\\frac{4}{3}=\\frac{4}{6}=\\frac{2}{3}$. Multiplying the two fractions directly gives $\\frac{3}{8}$, and flipping the top instead of the bottom inverts the answer.",
        "zh": "繁分数就是除法：$\\frac{1}{2}\\div\\frac{3}{4}=\\frac{1}{2}\\cdot\\frac{4}{3}=\\frac{4}{6}=\\frac{2}{3}$。直接把两个分数相乘得到 $\\frac{3}{8}$，而把上面而不是下面的分数取倒数会使答案颠倒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\frac{3}{x}=\\frac{6}{x+2}$.",
        "zh": "解方程 $\\frac{3}{x}=\\frac{6}{x+2}$。"
      },
      "choices": [
        "$x=2$",
        "$x=-2$",
        "$x=1$",
        "$x=6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Cross-multiply: $3(x+2)=6x$, so $3x+6=6x$, giving $6=3x$ and $x=2$ (which keeps both denominators nonzero). The value $x=-2$ would make a denominator zero and must be rejected.",
        "zh": "交叉相乘：$3(x+2)=6x$，即 $3x+6=6x$，得 $6=3x$，$x=2$（此时两个分母都不为零）。$x=-2$ 会使某个分母为零，必须排除。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When solving a rational equation, why must every candidate solution be checked?",
        "zh": "解有理方程时，为什么必须检验每一个候选解？"
      },
      "choices": [
        "to round the answer to a decimal",
        "because a value that makes any denominator zero is extraneous and must be rejected",
        "because a rational equation always has exactly two answers",
        "to convert the answer into a fraction"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiplying both sides by the denominators can introduce values that make an original denominator zero; those extraneous solutions are undefined and must be discarded. Checking is not about rounding or a fixed number of roots.",
        "zh": "两边同乘分母可能引入使原分母为零的值；这些增根是无定义的，必须舍去。检验与四舍五入或固定的解的个数无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\frac{x}{x-3}=\\frac{3}{x-3}+2$.",
        "zh": "解方程 $\\frac{x}{x-3}=\\frac{3}{x-3}+2$。"
      },
      "choices": [
        "$x=3$",
        "$x=0$",
        "no solution",
        "$x=6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply by $x-3$: $x=3+2(x-3)=2x-3$, so $x=3$. But $x=3$ makes the denominators zero, so it is extraneous and the equation has no solution. Reporting $x=3$ skips the required check.",
        "zh": "两边乘 $x-3$：$x=3+2(x-3)=2x-3$，解得 $x=3$。但 $x=3$ 使分母为零，是增根，所以方程无解。直接写 $x=3$ 是漏了必要的检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply and simplify: $\\frac{x^{2}-1}{x}\\cdot\\frac{x}{x+1}$.",
        "zh": "相乘并化简：$\\frac{x^{2}-1}{x}\\cdot\\frac{x}{x+1}$。"
      },
      "choices": [
        "$x+1$",
        "$x^{2}-1$",
        "$\\frac{1}{x-1}$",
        "$x-1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor $x^{2}-1=(x-1)(x+1)$, cancel the $x$ factors, then cancel $x+1$: $\\frac{(x-1)(x+1)}{x+1}=x-1$. Forgetting to factor first leaves the product looking like $x^{2}-1$.",
        "zh": "把 $x^{2}-1$ 分解为 $(x-1)(x+1)$，约去 $x$，再约去 $x+1$：$\\frac{(x-1)(x+1)}{x+1}=x-1$。忘记先因式分解会让乘积看起来像 $x^{2}-1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{4}{x}=2$.",
        "zh": "解方程 $\\frac{4}{x}=2$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "x=2"
      ],
      "explanation": {
        "en": "Multiply both sides by $x$: $4=2x$, so $x=2$. Dividing $4$ by $2$ directly happens to work here because $x$ is in the denominator, but the reliable step is to clear the denominator first.",
        "zh": "两边同乘 $x$：$4=2x$，得 $x=2$。这里直接用 $4$ 除以 $2$ 恰好可行，因为 $x$ 在分母上，但可靠的做法是先去分母。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{5}{x-1}=1$.",
        "zh": "解方程 $\\frac{5}{x-1}=1$。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "x=6"
      ],
      "explanation": {
        "en": "Multiply by $x-1$: $5=x-1$, so $x=6$ (and $x-1=5\\ne 0$, so it is valid). Forgetting to add the $1$ back after isolating $x-1$ would give $x=5$.",
        "zh": "两边乘 $x-1$：$5=x-1$，得 $x=6$（此时 $x-1=5\\ne 0$，有效）。在解出 $x-1$ 后忘记把 $1$ 加回去会得到 $x=5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{x}{2}+\\frac{x}{4}=6$.",
        "zh": "解方程 $\\frac{x}{2}+\\frac{x}{4}=6$。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "x=8"
      ],
      "explanation": {
        "en": "Multiply through by the LCD $4$: $2x+x=24$, so $3x=24$ and $x=8$. Adding the denominators instead of using a common denominator would corrupt the coefficients.",
        "zh": "两边同乘 LCD $4$：$2x+x=24$，即 $3x=24$，$x=8$。把分母相加而不是通分会破坏系数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{1}{x}+\\frac{1}{2x}=\\frac{3}{2}$.",
        "zh": "解方程 $\\frac{1}{x}+\\frac{1}{2x}=\\frac{3}{2}$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "x=1"
      ],
      "explanation": {
        "en": "The left side combines over $2x$: $\\frac{2}{2x}+\\frac{1}{2x}=\\frac{3}{2x}$. Setting $\\frac{3}{2x}=\\frac{3}{2}$ gives $2x=2$, so $x=1$. Adding the numerators without a common denominator would misstate the left side.",
        "zh": "左边通分为 $2x$：$\\frac{2}{2x}+\\frac{1}{2x}=\\frac{3}{2x}$。令 $\\frac{3}{2x}=\\frac{3}{2}$ 得 $2x=2$，$x=1$。不通分直接把分子相加会写错左边。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\frac{x^{2}-4}{x-2}$ and evaluate the result at $x=5$.",
        "zh": "化简 $\\frac{x^{2}-4}{x-2}$ 并在 $x=5$ 处求值。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "7.00"
      ],
      "explanation": {
        "en": "Simplify $\\frac{(x-2)(x+2)}{x-2}=x+2$, then substitute $x=5$: $5+2=7$. Plugging $x=5$ into the original fraction also works ($\\frac{21}{3}=7$), but simplifying first avoids heavy arithmetic.",
        "zh": "化简 $\\frac{(x-2)(x+2)}{x-2}=x+2$，再代入 $x=5$：$5+2=7$。直接把 $x=5$ 代入原分式也可以（$\\frac{21}{3}=7$），但先化简可以避免繁琐运算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify the complex fraction $\\frac{\\;\\frac{2}{3}\\;}{\\;\\frac{4}{9}\\;}$. Give the value as a decimal.",
        "zh": "化简繁分数 $\\frac{\\;\\frac{2}{3}\\;}{\\;\\frac{4}{9}\\;}$，用小数表示。"
      },
      "answer": "1.5",
      "accept": [
        "3/2",
        "1.50",
        "1.500"
      ],
      "explanation": {
        "en": "Divide: $\\frac{2}{3}\\div\\frac{4}{9}=\\frac{2}{3}\\cdot\\frac{9}{4}=\\frac{18}{12}=\\frac{3}{2}=1.5$. Multiplying the two fractions directly instead of flipping the bottom would give the wrong value.",
        "zh": "做除法：$\\frac{2}{3}\\div\\frac{4}{9}=\\frac{2}{3}\\cdot\\frac{9}{4}=\\frac{18}{12}=\\frac{3}{2}=1.5$。不把下面的分数取倒数而直接相乘会得到错误的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Add and simplify to a decimal: $\\frac{1}{6}+\\frac{1}{3}$.",
        "zh": "相加并化为小数：$\\frac{1}{6}+\\frac{1}{3}$。"
      },
      "answer": "0.5",
      "accept": [
        "1/2",
        ".5",
        "0.50"
      ],
      "explanation": {
        "en": "Use the common denominator $6$: $\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}=0.5$. Adding numerators and denominators straight across ($\\frac{2}{9}$) is not a valid way to add fractions.",
        "zh": "使用公分母 $6$：$\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}=0.5$。把分子和分母分别直接相加（得 $\\frac{2}{9}$）不是正确的分数加法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In an equation whose only denominator is $x-3$, which single $x$-value must be excluded because it would be an extraneous solution?",
        "zh": "在一个唯一分母为 $x-3$ 的方程中，必须排除哪个 $x$ 值，因为它会是增根？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "x=3"
      ],
      "explanation": {
        "en": "The denominator $x-3$ is zero when $x=3$, making the expression undefined; any solution equal to $3$ is extraneous and must be rejected. Other values keep the denominator nonzero and are allowed.",
        "zh": "当 $x=3$ 时分母 $x-3$ 为零，使表达式无定义；任何等于 $3$ 的解都是增根，必须舍去。其他值使分母不为零，是允许的。"
      }
    }
  ],
  "sequences-series/sequences-and-sigma-notation": [
    {
      "type": "mc",
      "question": {
        "en": "The arithmetic sequence $3, 7, 11, 15, \\dots$ has which explicit formula?",
        "zh": "等差数列 $3, 7, 11, 15, \\dots$ 的通项公式是哪一个？"
      },
      "choices": [
        "$a_n = 4n+3$",
        "$a_n = 3n+4$",
        "$a_n = 4n-1$",
        "$a_n = 4n$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $a_1 = 3$ and the common difference is $d = 4$, so $a_n = a_1 + (n-1)d = 3 + 4(n-1) = 4n - 1$. Adding $a_1 + n\\cdot d$ instead (giving $4n+3$) forgets that the first term uses $n-1 = 0$ steps of $d$.",
        "zh": "这里 $a_1 = 3$，公差 $d = 4$，所以 $a_n = a_1 + (n-1)d = 3 + 4(n-1) = 4n - 1$。若写成 $a_1 + n\\cdot d$（得 $4n+3$），就是忘了第一项对应 $n-1 = 0$ 次公差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An arithmetic sequence has $a_1 = 5$ and common difference $d = 3$. Find $a_{20}$.",
        "zh": "等差数列 $a_1 = 5$，公差 $d = 3$。求 $a_{20}$。"
      },
      "choices": [
        "$65$",
        "$62$",
        "$60$",
        "$59$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$a_{20} = a_1 + (20-1)d = 5 + 19\\cdot 3 = 5 + 57 = 62$. Using $20\\cdot 3$ instead of $19\\cdot 3$ (giving $65$) counts one too many steps of the common difference.",
        "zh": "$a_{20} = a_1 + (20-1)d = 5 + 19\\cdot 3 = 5 + 57 = 62$。若用 $20\\cdot 3$ 而非 $19\\cdot 3$（得 $65$），就是多算了一次公差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The geometric sequence $2, 6, 18, 54, \\dots$ has which explicit formula?",
        "zh": "等比数列 $2, 6, 18, 54, \\dots$ 的通项公式是哪一个？"
      },
      "choices": [
        "$a_n = 2 \\cdot 3^{n}$",
        "$a_n = 3 \\cdot 2^{n-1}$",
        "$a_n = 2 \\cdot 3^{n-1}$",
        "$a_n = 6^{n-1}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With $a_1 = 2$ and ratio $r = 3$, $a_n = a_1 r^{n-1} = 2\\cdot 3^{n-1}$. Writing $2\\cdot 3^{n}$ uses the exponent $n$ instead of $n-1$, which makes $a_1 = 6$ rather than $2$.",
        "zh": "首项 $a_1 = 2$，公比 $r = 3$，所以 $a_n = a_1 r^{n-1} = 2\\cdot 3^{n-1}$。若写成 $2\\cdot 3^{n}$，指数用 $n$ 而非 $n-1$，会使 $a_1 = 6$ 而不是 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric sequence has $a_1 = 3$ and ratio $r = 2$. Find $a_5$.",
        "zh": "等比数列 $a_1 = 3$，公比 $r = 2$。求 $a_5$。"
      },
      "choices": [
        "$16$",
        "$96$",
        "$24$",
        "$48$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$a_5 = a_1 r^{5-1} = 3\\cdot 2^4 = 3\\cdot 16 = 48$. Using the exponent $5$ instead of $4$ (giving $3\\cdot 2^5 = 96$) applies one too many factors of $r$.",
        "zh": "$a_5 = a_1 r^{5-1} = 3\\cdot 2^4 = 3\\cdot 16 = 48$。若指数用 $5$ 而非 $4$（得 $3\\cdot 2^5 = 96$），就是多乘了一次公比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the first 10 terms of the arithmetic sequence $2, 5, 8, \\dots$",
        "zh": "求等差数列 $2, 5, 8, \\dots$ 前 10 项的和。"
      },
      "choices": [
        "$155$",
        "$150$",
        "$145$",
        "$160$"
      ],
      "answer": 0,
      "explanation": {
        "en": "First find $a_{10} = 2 + 9\\cdot 3 = 29$, then $S_{10} = \\frac{n}{2}(a_1 + a_n) = \\frac{10}{2}(2 + 29) = 5\\cdot 31 = 155$. Forgetting the $\\frac{1}{2}$ or miscounting $a_{10}$ is the usual slip.",
        "zh": "先求 $a_{10} = 2 + 9\\cdot 3 = 29$，再用 $S_{10} = \\frac{n}{2}(a_1 + a_n) = \\frac{10}{2}(2 + 29) = 5\\cdot 31 = 155$。常见错误是漏掉 $\\frac{1}{2}$ 或算错 $a_{10}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the first 5 terms of the geometric sequence $1, 2, 4, 8, 16$.",
        "zh": "求等比数列 $1, 2, 4, 8, 16$ 前 5 项的和。"
      },
      "choices": [
        "$32$",
        "$31$",
        "$63$",
        "$16$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$S_n = \\frac{a_1(1 - r^n)}{1 - r} = \\frac{1(1 - 2^5)}{1 - 2} = \\frac{1 - 32}{-1} = 31$. Reporting $2^5 = 32$ gives just the next term, not the sum of the five terms.",
        "zh": "$S_n = \\frac{a_1(1 - r^n)}{1 - r} = \\frac{1(1 - 2^5)}{1 - 2} = \\frac{1 - 32}{-1} = 31$。若答 $2^5 = 32$，那只是下一项，而不是前五项之和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sum_{k=1}^{4} (2k+1)$.",
        "zh": "求 $\\sum_{k=1}^{4} (2k+1)$ 的值。"
      },
      "choices": [
        "$20$",
        "$16$",
        "$24$",
        "$28$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The terms are $3, 5, 7, 9$, so the sum is $3+5+7+9 = 24$. Summing only $2k$ ($2+4+6+8 = 20$) drops the constant $+1$ added in each of the four terms.",
        "zh": "各项为 $3, 5, 7, 9$，所以和为 $3+5+7+9 = 24$。若只加 $2k$（$2+4+6+8 = 20$），就漏掉了四项各自的常数 $+1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sum_{k=1}^{5} 3$.",
        "zh": "求 $\\sum_{k=1}^{5} 3$ 的值。"
      },
      "choices": [
        "$3$",
        "$8$",
        "$18$",
        "$15$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The summand is the constant $3$, added once for each $k$ from 1 to 5, so the sum is $5\\cdot 3 = 15$. Reporting $3$ ignores that a constant is still summed over all index values.",
        "zh": "被加项是常数 $3$，从 $k=1$ 到 $5$ 每个 $k$ 各加一次，所以和为 $5\\cdot 3 = 15$。若答 $3$，就忽略了常数仍要对所有指标求和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a geometric sequence?",
        "zh": "下列哪一个是等比数列？"
      },
      "choices": [
        "$1, 3, 9, 27$",
        "$2, 4, 6, 8$",
        "$5, 10, 15, 20$",
        "$1, 4, 9, 16$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In $1, 3, 9, 27$ each term is the previous term times a constant ratio $r = 3$. Sequences like $2,4,6,8$ share a constant difference, not a constant ratio, so they are arithmetic, not geometric.",
        "zh": "在 $1, 3, 9, 27$ 中，每一项都是前一项乘以固定公比 $r = 3$。像 $2,4,6,8$ 这样是固定差而非固定比，属于等差数列，不是等比数列。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the common ratio of the geometric sequence $81, 27, 9, 3, \\dots$",
        "zh": "求等比数列 $81, 27, 9, 3, \\dots$ 的公比。"
      },
      "choices": [
        "$3$",
        "$\\frac{1}{3}$",
        "$-3$",
        "$\\frac{1}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The ratio is any term divided by the one before it: $\\frac{27}{81} = \\frac{1}{3}$. Answering $3$ divides the earlier term by the later one, which reverses the ratio.",
        "zh": "公比是后一项除以前一项：$\\frac{27}{81} = \\frac{1}{3}$。若答 $3$，则是用前项除以后项，把比值倒过来了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression represents $4 + 7 + 10 + 13 + 16$ in sigma notation?",
        "zh": "下列哪个 $\\sum$ 记号表示 $4 + 7 + 10 + 13 + 16$？"
      },
      "choices": [
        "$\\sum_{k=1}^{5} 3k$",
        "$\\sum_{k=1}^{5} (3k-1)$",
        "$\\sum_{k=1}^{5} (3k+1)$",
        "$\\sum_{k=1}^{4} (3k+1)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The terms are arithmetic with $a_k = 3k+1$: at $k=1$ this gives $4$, and there are 5 terms ($k$ from 1 to 5). Using $3k-1$ would start at $2$, and stopping at $k=4$ would drop the final $16$.",
        "zh": "各项是等差的，$a_k = 3k+1$：$k=1$ 时为 $4$，共 5 项（$k$ 从 1 到 5）。若用 $3k-1$ 则从 $2$ 开始；若停在 $k=4$ 则漏掉最后的 $16$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum $1 + 2 + 3 + \\dots + 100$.",
        "zh": "求和 $1 + 2 + 3 + \\dots + 100$。"
      },
      "choices": [
        "$5150$",
        "$5000$",
        "$10100$",
        "$5050$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$S = \\frac{n(a_1 + a_n)}{2} = \\frac{100(1 + 100)}{2} = \\frac{10100}{2} = 5050$. The value $10100$ is $n(a_1+a_n)$ without dividing by 2.",
        "zh": "$S = \\frac{n(a_1 + a_n)}{2} = \\frac{100(1 + 100)}{2} = \\frac{10100}{2} = 5050$。$10100$ 是 $n(a_1+a_n)$ 忘了除以 2 的结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence has $a_1 = 7$ and common difference $d = 4$. Find $a_{10}$.",
        "zh": "等差数列 $a_1 = 7$，公差 $d = 4$。求 $a_{10}$。"
      },
      "answer": "43",
      "accept": [
        "43.0",
        "+43"
      ],
      "explanation": {
        "en": "$a_{10} = a_1 + (10-1)d = 7 + 9\\cdot 4 = 7 + 36 = 43$. Remember to multiply $d$ by $n-1 = 9$, not by $10$.",
        "zh": "$a_{10} = a_1 + (10-1)d = 7 + 9\\cdot 4 = 7 + 36 = 43$。注意公差乘以 $n-1 = 9$，而不是乘以 $10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_1 = 5$ and ratio $r = 2$. Find $a_4$.",
        "zh": "等比数列 $a_1 = 5$，公比 $r = 2$。求 $a_4$。"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "+40"
      ],
      "explanation": {
        "en": "$a_4 = a_1 r^{4-1} = 5\\cdot 2^3 = 5\\cdot 8 = 40$. The exponent is $n-1 = 3$, not $4$.",
        "zh": "$a_4 = a_1 r^{4-1} = 5\\cdot 2^3 = 5\\cdot 8 = 40$。指数是 $n-1 = 3$，而不是 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the first 20 positive odd numbers: $1 + 3 + 5 + \\dots$",
        "zh": "求前 20 个正奇数之和：$1 + 3 + 5 + \\dots$"
      },
      "answer": "400",
      "accept": [
        "400.0",
        "+400"
      ],
      "explanation": {
        "en": "This is arithmetic with $a_1 = 1$, $d = 2$, so $a_{20} = 1 + 19\\cdot 2 = 39$ and $S_{20} = \\frac{20}{2}(1 + 39) = 10\\cdot 40 = 400$. (The sum of the first $n$ odd numbers is $n^2 = 20^2 = 400$.)",
        "zh": "这是等差数列，$a_1 = 1$，$d = 2$，所以 $a_{20} = 1 + 19\\cdot 2 = 39$，$S_{20} = \\frac{20}{2}(1 + 39) = 10\\cdot 40 = 400$。（前 $n$ 个奇数之和为 $n^2 = 20^2 = 400$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sum_{k=1}^{3} k^2$.",
        "zh": "求 $\\sum_{k=1}^{3} k^2$ 的值。"
      },
      "answer": "14",
      "accept": [
        "14.0",
        "+14"
      ],
      "explanation": {
        "en": "The terms are $1^2, 2^2, 3^2 = 1, 4, 9$, so the sum is $1 + 4 + 9 = 14$. Do not square the total ($6^2 = 36$); square each term first, then add.",
        "zh": "各项为 $1^2, 2^2, 3^2 = 1, 4, 9$，所以和为 $1 + 4 + 9 = 14$。不要把总和再平方（$6^2 = 36$）；应先把每一项平方，再相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the common difference of the arithmetic sequence $10, 4, -2, -8, \\dots$",
        "zh": "求等差数列 $10, 4, -2, -8, \\dots$ 的公差。"
      },
      "answer": "-6",
      "accept": [
        "−6",
        "-6.0",
        "-6.00"
      ],
      "explanation": {
        "en": "The common difference is any term minus the previous one: $4 - 10 = -6$. The sequence decreases, so $d$ is negative; answering $6$ drops the sign.",
        "zh": "公差是后一项减前一项：$4 - 10 = -6$。数列在递减，所以 $d$ 为负；若答 $6$ 就漏掉了负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the first 4 terms of the geometric sequence $3, 6, 12, 24$.",
        "zh": "求等比数列 $3, 6, 12, 24$ 前 4 项的和。"
      },
      "answer": "45",
      "accept": [
        "45.0",
        "+45"
      ],
      "explanation": {
        "en": "$S_4 = \\frac{a_1(1 - r^n)}{1 - r} = \\frac{3(1 - 2^4)}{1 - 2} = \\frac{3(1 - 16)}{-1} = \\frac{-45}{-1} = 45$. You can also add directly: $3+6+12+24 = 45$.",
        "zh": "$S_4 = \\frac{a_1(1 - r^n)}{1 - r} = \\frac{3(1 - 2^4)}{1 - 2} = \\frac{3(1 - 16)}{-1} = \\frac{-45}{-1} = 45$。也可直接相加：$3+6+12+24 = 45$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sum_{k=2}^{5} (k-1)$.",
        "zh": "求 $\\sum_{k=2}^{5} (k-1)$ 的值。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "As $k$ runs 2, 3, 4, 5 the terms $k-1$ are $1, 2, 3, 4$, so the sum is $1+2+3+4 = 10$. Watch the lower limit: the index starts at $k=2$, not $k=1$.",
        "zh": "当 $k$ 取 2, 3, 4, 5 时，$k-1$ 各项为 $1, 2, 3, 4$，所以和为 $1+2+3+4 = 10$。注意下限：指标从 $k=2$ 开始，而不是 $k=1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the arithmetic sequence with $a_1 = 2$ and $d = 5$, which term number $n$ equals 47?",
        "zh": "在等差数列 $a_1 = 2$、$d = 5$ 中，第几项 $n$ 等于 47？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10",
        "n=10"
      ],
      "explanation": {
        "en": "Set $a_n = 2 + (n-1)\\cdot 5 = 47$, so $5(n-1) = 45$, giving $n - 1 = 9$ and $n = 10$. Solve for the position $n$, not for the value.",
        "zh": "令 $a_n = 2 + (n-1)\\cdot 5 = 47$，则 $5(n-1) = 45$，得 $n - 1 = 9$，$n = 10$。要解的是项数 $n$，不是数值。"
      }
    }
  ],
  "sequences-series/infinite-geometric-series-recursion": [
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 8$ and $r = \\frac{1}{2}$.",
        "zh": "求无穷等比级数 $a_1 = 8$、$r = \\frac{1}{2}$ 的和。"
      },
      "choices": [
        "$16$",
        "$8$",
        "$4$",
        "$\\infty$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $|r| < 1$, use $S = \\frac{a_1}{1 - r} = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16$. Dividing by $r$ instead of $1 - r$ is the usual mistake.",
        "zh": "由于 $|r| < 1$，用 $S = \\frac{a_1}{1 - r} = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16$。常见错误是除以 $r$ 而不是 $1 - r$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An infinite geometric series has a finite sum exactly when the common ratio satisfies which condition?",
        "zh": "无穷等比级数存在有限和，当且仅当公比满足哪个条件？"
      },
      "choices": [
        "$|r| > 1$",
        "$|r| < 1$",
        "$|r| = 1$",
        "$r > 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The series converges only when $|r| < 1$, so the terms shrink toward 0. If $|r| \\ge 1$ the terms do not shrink and the partial sums grow without bound. The sign of $r$ alone does not decide convergence.",
        "zh": "级数收敛当且仅当 $|r| < 1$，此时各项趋于 0。若 $|r| \\ge 1$，各项不趋于零，部分和无限增大。仅凭 $r$ 的正负不能判定收敛。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which infinite geometric series diverges (has no finite sum)?",
        "zh": "下列哪个无穷等比级数发散（没有有限和）？"
      },
      "choices": [
        "$a_1 = 3, \\; r = \\frac{1}{3}$",
        "$a_1 = 1, \\; r = -\\frac{1}{2}$",
        "$a_1 = 5, \\; r = 2$",
        "$a_1 = 4, \\; r = 0.9$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divergence depends on $|r|$: with $r = 2$, $|r| = 2 \\ge 1$, so the terms grow and the sum is infinite. A negative ratio like $r = -\\frac{1}{2}$ still converges because $|r| < 1$.",
        "zh": "是否发散取决于 $|r|$：当 $r = 2$ 时 $|r| = 2 \\ge 1$，各项增大，和为无穷。像 $r = -\\frac{1}{2}$ 这样的负公比仍然收敛，因为 $|r| < 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 1$ and $r = \\frac{1}{3}$.",
        "zh": "求无穷等比级数 $a_1 = 1$、$r = \\frac{1}{3}$ 的和。"
      },
      "choices": [
        "$\\frac{1}{3}$",
        "$\\frac{2}{3}$",
        "$3$",
        "$\\frac{3}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$S = \\frac{a_1}{1 - r} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$. Answering $\\frac{2}{3}$ leaves the result as $1 - r$ without taking the reciprocal.",
        "zh": "$S = \\frac{a_1}{1 - r} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$。若答 $\\frac{2}{3}$，就是停在 $1 - r$ 而没有取倒数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula is a recursive rule for the sequence $2, 5, 8, 11, \\dots$ (with $a_1 = 2$)?",
        "zh": "下列哪个是数列 $2, 5, 8, 11, \\dots$（$a_1 = 2$）的递推公式？"
      },
      "choices": [
        "$a_n = a_{n-1} + 3$",
        "$a_n = a_{n-1} \\cdot 3$",
        "$a_n = a_{n-1} + n$",
        "$a_n = 3n - 1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A recursive rule defines each term from the previous one; here each term is the one before plus $3$, so $a_n = a_{n-1} + 3$. The formula $3n - 1$ is explicit (closed form), not recursive.",
        "zh": "递推公式用前一项定义当前项；这里每一项都是前一项加 $3$，所以 $a_n = a_{n-1} + 3$。而 $3n - 1$ 是显式（通项）公式，不是递推公式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is an explicit (closed-form) formula rather than a recursive one?",
        "zh": "下列哪个是显式（通项）公式，而不是递推公式？"
      },
      "choices": [
        "$a_n = a_{n-1} + 4$",
        "$a_n = 5n - 2$",
        "$a_1 = 3, \\; a_n = 2a_{n-1}$",
        "$a_n = a_{n-1} - 7$"
      ],
      "answer": 1,
      "explanation": {
        "en": "An explicit formula gives $a_n$ directly from $n$ without needing the previous term, so $a_n = 5n - 2$ qualifies. Any rule written in terms of $a_{n-1}$ is recursive.",
        "zh": "显式公式直接用 $n$ 给出 $a_n$，不需要前一项，所以 $a_n = 5n - 2$ 符合。任何用 $a_{n-1}$ 表示的规则都是递推公式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Express the repeating decimal $0.\\overline{3} = 0.333\\dots$ as a fraction using an infinite geometric series.",
        "zh": "用无穷等比级数把循环小数 $0.\\overline{3} = 0.333\\dots$ 写成分数。"
      },
      "choices": [
        "$\\frac{3}{100}$",
        "$\\frac{1}{9}$",
        "$\\frac{1}{3}$",
        "$\\frac{3}{10}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Write it as $a_1 = \\frac{3}{10}$, $r = \\frac{1}{10}$, so $S = \\frac{3/10}{1 - 1/10} = \\frac{3/10}{9/10} = \\frac{1}{3}$. The value $\\frac{3}{10}$ is only the first term, not the full sum.",
        "zh": "写成 $a_1 = \\frac{3}{10}$，$r = \\frac{1}{10}$，则 $S = \\frac{3/10}{1 - 1/10} = \\frac{3/10}{9/10} = \\frac{1}{3}$。$\\frac{3}{10}$ 只是首项，而不是整个级数的和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 12$ and $r = \\frac{1}{4}$.",
        "zh": "求无穷等比级数 $a_1 = 12$、$r = \\frac{1}{4}$ 的和。"
      },
      "choices": [
        "$12$",
        "$48$",
        "$9$",
        "$16$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$S = \\frac{a_1}{1 - r} = \\frac{12}{1 - \\frac{1}{4}} = \\frac{12}{\\frac{3}{4}} = 12\\cdot\\frac{4}{3} = 16$. Dividing by $\\frac{1}{4}$ instead of $\\frac{3}{4}$ gives the incorrect $48$.",
        "zh": "$S = \\frac{a_1}{1 - r} = \\frac{12}{1 - \\frac{1}{4}} = \\frac{12}{\\frac{3}{4}} = 12\\cdot\\frac{4}{3} = 16$。若除以 $\\frac{1}{4}$ 而非 $\\frac{3}{4}$，会得到错误的 $48$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sequence is defined recursively by $a_1 = 4$ and $a_n = a_{n-1} + 3$. Find $a_3$.",
        "zh": "数列由 $a_1 = 4$ 和 $a_n = a_{n-1} + 3$ 递推定义。求 $a_3$。"
      },
      "choices": [
        "$10$",
        "$7$",
        "$13$",
        "$4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Apply the rule step by step: $a_2 = 4 + 3 = 7$, then $a_3 = 7 + 3 = 10$. Stopping at $a_2 = 7$ answers the wrong term.",
        "zh": "逐步应用规则：$a_2 = 4 + 3 = 7$，再 $a_3 = 7 + 3 = 10$。若停在 $a_2 = 7$，就答错了项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 6$ and $r = -\\frac{1}{2}$.",
        "zh": "求无穷等比级数 $a_1 = 6$、$r = -\\frac{1}{2}$ 的和。"
      },
      "choices": [
        "$12$",
        "$4$",
        "$-4$",
        "$3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$S = \\frac{a_1}{1 - r} = \\frac{6}{1 - (-\\frac{1}{2})} = \\frac{6}{\\frac{3}{2}} = 4$. Dropping the sign of $r$ and using $1 - \\frac{1}{2}$ gives $12$; subtracting a negative actually makes the denominator larger.",
        "zh": "$S = \\frac{a_1}{1 - r} = \\frac{6}{1 - (-\\frac{1}{2})} = \\frac{6}{\\frac{3}{2}} = 4$。若漏掉 $r$ 的负号、用 $1 - \\frac{1}{2}$，会得到 $12$；减去一个负数其实使分母变大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For which value of $r$ does the infinite geometric series converge?",
        "zh": "当公比 $r$ 取哪个值时，无穷等比级数收敛？"
      },
      "choices": [
        "$r = -2$",
        "$r = \\frac{5}{4}$",
        "$r = -\\frac{3}{4}$",
        "$r = 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Convergence needs $|r| < 1$. Only $-\\frac{3}{4}$ has absolute value below 1; $\\frac{5}{4}$, $-2$, and $1$ all have $|r| \\ge 1$. A negative ratio is fine as long as its size is under 1.",
        "zh": "收敛要求 $|r| < 1$。只有 $-\\frac{3}{4}$ 的绝对值小于 1；$\\frac{5}{4}$、$-2$、$1$ 的 $|r| \\ge 1$。负公比也可以，只要其绝对值小于 1。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 100$ and $r = 0.2$.",
        "zh": "求无穷等比级数 $a_1 = 100$、$r = 0.2$ 的和。"
      },
      "choices": [
        "$120$",
        "$500$",
        "$80$",
        "$125$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$S = \\frac{a_1}{1 - r} = \\frac{100}{1 - 0.2} = \\frac{100}{0.8} = 125$. Dividing by $r = 0.2$ instead of $1 - r = 0.8$ produces the incorrect $500$.",
        "zh": "$S = \\frac{a_1}{1 - r} = \\frac{100}{1 - 0.2} = \\frac{100}{0.8} = 125$。若除以 $r = 0.2$ 而非 $1 - r = 0.8$，会得到错误的 $500$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 10$ and $r = \\frac{1}{2}$.",
        "zh": "求无穷等比级数 $a_1 = 10$、$r = \\frac{1}{2}$ 的和。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "+20"
      ],
      "explanation": {
        "en": "$S = \\frac{a_1}{1 - r} = \\frac{10}{1 - \\frac{1}{2}} = \\frac{10}{\\frac{1}{2}} = 20$. Since $|r| < 1$, a finite sum exists.",
        "zh": "$S = \\frac{a_1}{1 - r} = \\frac{10}{1 - \\frac{1}{2}} = \\frac{10}{\\frac{1}{2}} = 20$。因为 $|r| < 1$，存在有限和。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 9$ and $r = \\frac{1}{3}$.",
        "zh": "求无穷等比级数 $a_1 = 9$、$r = \\frac{1}{3}$ 的和。"
      },
      "answer": "13.5",
      "accept": [
        "27/2",
        "13.50",
        "13.500"
      ],
      "explanation": {
        "en": "$S = \\frac{a_1}{1 - r} = \\frac{9}{1 - \\frac{1}{3}} = \\frac{9}{\\frac{2}{3}} = 9\\cdot\\frac{3}{2} = \\frac{27}{2} = 13.5$. Remember to multiply by the reciprocal of $1 - r$.",
        "zh": "$S = \\frac{a_1}{1 - r} = \\frac{9}{1 - \\frac{1}{3}} = \\frac{9}{\\frac{2}{3}} = 9\\cdot\\frac{3}{2} = \\frac{27}{2} = 13.5$。记得乘以 $1 - r$ 的倒数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write the repeating decimal $0.\\overline{6} = 0.666\\dots$ as a simplified fraction.",
        "zh": "把循环小数 $0.\\overline{6} = 0.666\\dots$ 写成最简分数。"
      },
      "answer": "2/3",
      "accept": [
        "0.667",
        "0.6667",
        "0.66667",
        "0.\\overline{6}",
        "6/9"
      ],
      "explanation": {
        "en": "As a geometric series $a_1 = \\frac{6}{10}$, $r = \\frac{1}{10}$, so $S = \\frac{6/10}{1 - 1/10} = \\frac{6/10}{9/10} = \\frac{6}{9} = \\frac{2}{3}$.",
        "zh": "作为等比级数 $a_1 = \\frac{6}{10}$，$r = \\frac{1}{10}$，所以 $S = \\frac{6/10}{1 - 1/10} = \\frac{6/10}{9/10} = \\frac{6}{9} = \\frac{2}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sequence is defined recursively by $a_1 = 3$ and $a_n = 2a_{n-1}$. Find $a_4$.",
        "zh": "数列由 $a_1 = 3$ 和 $a_n = 2a_{n-1}$ 递推定义。求 $a_4$。"
      },
      "answer": "24",
      "accept": [
        "24.0",
        "+24"
      ],
      "explanation": {
        "en": "Apply the rule repeatedly: $a_2 = 6$, $a_3 = 12$, $a_4 = 24$. Each step multiplies the previous term by 2 (a geometric sequence with $r = 2$).",
        "zh": "反复应用规则：$a_2 = 6$，$a_3 = 12$，$a_4 = 24$。每一步把前一项乘以 2（公比 $r = 2$ 的等比数列）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An infinite geometric series converges when the absolute value of the common ratio, $|r|$, is strictly less than what number?",
        "zh": "当公比的绝对值 $|r|$ 严格小于哪个数时，无穷等比级数收敛？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1",
        "one",
        "一"
      ],
      "explanation": {
        "en": "Convergence requires $|r| < 1$, so the boundary value is $1$. When $|r| \\ge 1$ the terms do not approach 0 and the sum is infinite.",
        "zh": "收敛要求 $|r| < 1$，所以临界值是 $1$。当 $|r| \\ge 1$ 时，各项不趋于 0，和为无穷。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the infinite geometric series with $a_1 = 5$ and $r = \\frac{1}{5}$.",
        "zh": "求无穷等比级数 $a_1 = 5$、$r = \\frac{1}{5}$ 的和。"
      },
      "answer": "6.25",
      "accept": [
        "25/4",
        "6.250"
      ],
      "explanation": {
        "en": "$S = \\frac{a_1}{1 - r} = \\frac{5}{1 - \\frac{1}{5}} = \\frac{5}{\\frac{4}{5}} = 5\\cdot\\frac{5}{4} = \\frac{25}{4} = 6.25$.",
        "zh": "$S = \\frac{a_1}{1 - r} = \\frac{5}{1 - \\frac{1}{5}} = \\frac{5}{\\frac{4}{5}} = 5\\cdot\\frac{5}{4} = \\frac{25}{4} = 6.25$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the infinite geometric series $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots$",
        "zh": "求无穷等比级数 $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots$ 的和。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Here $a_1 = 1$ and $r = \\frac{1}{2}$, so $S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$. The partial sums approach 2 but never exceed it.",
        "zh": "这里 $a_1 = 1$，$r = \\frac{1}{2}$，所以 $S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$。部分和趋近于 2 但永不超过它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sequence is defined recursively by $a_1 = 2$ and $a_n = a_{n-1} + 5$. Find $a_5$.",
        "zh": "数列由 $a_1 = 2$ 和 $a_n = a_{n-1} + 5$ 递推定义。求 $a_5$。"
      },
      "answer": "22",
      "accept": [
        "22.0",
        "+22"
      ],
      "explanation": {
        "en": "This recursion adds 5 each step, an arithmetic sequence with $d = 5$: $a_5 = a_1 + 4\\cdot 5 = 2 + 20 = 22$. Use $n - 1 = 4$ steps, not 5.",
        "zh": "该递推每步加 5，是公差 $d = 5$ 的等差数列：$a_5 = a_1 + 4\\cdot 5 = 2 + 20 = 22$。用 $n - 1 = 4$ 次，而不是 5 次。"
      }
    }
  ],
  "trigonometry/radians-and-angles-of-rotation": [
    {
      "type": "mc",
      "question": {
        "en": "Convert $180^{\\circ}$ to radians.",
        "zh": "把 $180^{\\circ}$ 转换成弧度。"
      },
      "choices": [
        "$\\pi$",
        "$\\frac{\\pi}{2}$",
        "$2\\pi$",
        "$\\frac{\\pi}{4}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply degrees by $\\frac{\\pi}{180}$: $180 \\times \\frac{\\pi}{180} = \\pi$. A common error is treating a half-turn as $2\\pi$, which is a full turn.",
        "zh": "度数乘以 $\\frac{\\pi}{180}$：$180 \\times \\frac{\\pi}{180} = \\pi$。常见错误是把半圈当成 $2\\pi$，而 $2\\pi$ 是一整圈。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $90^{\\circ}$ to radians.",
        "zh": "把 $90^{\\circ}$ 转换成弧度。"
      },
      "choices": [
        "$\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{2}$",
        "$\\frac{\\pi}{4}$",
        "$\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$90 \\times \\frac{\\pi}{180} = \\frac{\\pi}{2}$. Reducing $\\frac{90}{180}$ to $\\frac{1}{2}$ is the key step; leaving it as $\\pi$ mistakes a quarter-turn for a half-turn.",
        "zh": "$90 \\times \\frac{\\pi}{180} = \\frac{\\pi}{2}$。把 $\\frac{90}{180}$ 约成 $\\frac{1}{2}$ 是关键；写成 $\\pi$ 就把四分之一圈误当成半圈。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $\\frac{\\pi}{6}$ radians to degrees.",
        "zh": "把 $\\frac{\\pi}{6}$ 弧度转换成度。"
      },
      "choices": [
        "$45^{\\circ}$",
        "$60^{\\circ}$",
        "$30^{\\circ}$",
        "$15^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply radians by $\\frac{180}{\\pi}$: $\\frac{\\pi}{6} \\times \\frac{180}{\\pi} = 30$. Getting $60$ comes from dividing $180$ by $3$ instead of by $6$.",
        "zh": "弧度乘以 $\\frac{180}{\\pi}$：$\\frac{\\pi}{6} \\times \\frac{180}{\\pi} = 30$。得到 $60$ 是把 $180$ 除以 $3$ 而不是除以 $6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $\\frac{2\\pi}{3}$ radians to degrees.",
        "zh": "把 $\\frac{2\\pi}{3}$ 弧度转换成度。"
      },
      "choices": [
        "$60^{\\circ}$",
        "$90^{\\circ}$",
        "$150^{\\circ}$",
        "$120^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\frac{2\\pi}{3} \\times \\frac{180}{\\pi} = \\frac{2 \\times 180}{3} = 120$. Dropping the factor of $2$ in the numerator gives the wrong value $60$.",
        "zh": "$\\frac{2\\pi}{3} \\times \\frac{180}{\\pi} = \\frac{2 \\times 180}{3} = 120$。忘掉分子里的 $2$ 就会得到错误的 $60$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the reference angle for $150^{\\circ}$?",
        "zh": "$150^{\\circ}$ 的参考角是多少？"
      },
      "choices": [
        "$30^{\\circ}$",
        "$60^{\\circ}$",
        "$15^{\\circ}$",
        "$150^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In Quadrant II the reference angle is $180^{\\circ} - 150^{\\circ} = 30^{\\circ}$. Using the angle itself as its reference ignores that the reference angle is measured from the x-axis.",
        "zh": "在第二象限，参考角为 $180^{\\circ} - 150^{\\circ} = 30^{\\circ}$。直接用原角当参考角忽略了参考角是相对 x 轴度量的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the reference angle for $210^{\\circ}$?",
        "zh": "$210^{\\circ}$ 的参考角是多少？"
      },
      "choices": [
        "$210^{\\circ}$",
        "$30^{\\circ}$",
        "$60^{\\circ}$",
        "$45^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$210^{\\circ}$ is in Quadrant III, so the reference angle is $210^{\\circ} - 180^{\\circ} = 30^{\\circ}$. Subtracting from $360^{\\circ}$ instead would wrongly give $150^{\\circ}$.",
        "zh": "$210^{\\circ}$ 在第三象限，参考角为 $210^{\\circ} - 180^{\\circ} = 30^{\\circ}$。若改用 $360^{\\circ}$ 去减会错得 $150^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which angle is coterminal with $45^{\\circ}$?",
        "zh": "哪个角与 $45^{\\circ}$ 终边相同（共终边）？"
      },
      "choices": [
        "$315^{\\circ}$",
        "$135^{\\circ}$",
        "$405^{\\circ}$",
        "$225^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Coterminal angles differ by a full $360^{\\circ}$: $45^{\\circ} + 360^{\\circ} = 405^{\\circ}$. Choosing a supplement like $135^{\\circ}$ changes the terminal side rather than keeping it fixed.",
        "zh": "共终边角相差整整 $360^{\\circ}$：$45^{\\circ} + 360^{\\circ} = 405^{\\circ}$。选补角 $135^{\\circ}$ 改变了终边，而不是保持终边不变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the positive coterminal angle for $-60^{\\circ}$ that lies between $0^{\\circ}$ and $360^{\\circ}$.",
        "zh": "求 $-60^{\\circ}$ 在 $0^{\\circ}$ 到 $360^{\\circ}$ 之间的正共终边角。"
      },
      "choices": [
        "$240^{\\circ}$",
        "$60^{\\circ}$",
        "$120^{\\circ}$",
        "$300^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Add $360^{\\circ}$: $-60^{\\circ} + 360^{\\circ} = 300^{\\circ}$. Simply dropping the negative sign to get $60^{\\circ}$ lands on a different terminal side.",
        "zh": "加上 $360^{\\circ}$：$-60^{\\circ} + 360^{\\circ} = 300^{\\circ}$。只是去掉负号得 $60^{\\circ}$ 会落在不同的终边上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In which quadrant does an angle of $200^{\\circ}$ in standard position terminate?",
        "zh": "标准位置下 $200^{\\circ}$ 的角终边落在哪个象限？"
      },
      "choices": [
        "Quadrant III",
        "Quadrant II",
        "Quadrant I",
        "Quadrant IV"
      ],
      "answer": 0,
      "explanation": {
        "en": "Angles from $180^{\\circ}$ to $270^{\\circ}$ lie in Quadrant III, and $200^{\\circ}$ is in that range. Confusing it with $180^{\\circ}$-to-$90^{\\circ}$ would place it in Quadrant II by mistake.",
        "zh": "$180^{\\circ}$ 到 $270^{\\circ}$ 的角在第三象限，$200^{\\circ}$ 正在此范围。若与 $90^{\\circ}$–$180^{\\circ}$ 混淆会错放到第二象限。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $r = 5$. Find the arc length for a central angle of $\\theta = 2$ radians.",
        "zh": "一个圆半径 $r = 5$。求圆心角 $\\theta = 2$ 弧度所对的弧长。"
      },
      "choices": [
        "$5$",
        "$10$",
        "$2.5$",
        "$25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Arc length $s = r\\theta = 5 \\times 2 = 10$. Dividing radius by angle instead of multiplying gives the wrong $2.5$.",
        "zh": "弧长 $s = r\\theta = 5 \\times 2 = 10$。把半径除以角度而不是相乘会错得 $2.5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $r = 3$. Find the arc length for a central angle of $\\theta = \\frac{\\pi}{2}$ radians.",
        "zh": "一个圆半径 $r = 3$。求圆心角 $\\theta = \\frac{\\pi}{2}$ 弧度所对的弧长。"
      },
      "choices": [
        "$\\frac{\\pi}{2}$",
        "$3\\pi$",
        "$\\frac{3\\pi}{2}$",
        "$6\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$s = r\\theta = 3 \\times \\frac{\\pi}{2} = \\frac{3\\pi}{2}$. The formula needs the angle in radians; converting $\\frac{\\pi}{2}$ to $90$ first and multiplying would inflate the answer.",
        "zh": "$s = r\\theta = 3 \\times \\frac{\\pi}{2} = \\frac{3\\pi}{2}$。公式要求角用弧度；先把 $\\frac{\\pi}{2}$ 换成 $90$ 再乘会把答案放大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $270^{\\circ}$ to radians.",
        "zh": "把 $270^{\\circ}$ 转换成弧度。"
      },
      "choices": [
        "$\\frac{2\\pi}{3}$",
        "$\\frac{5\\pi}{4}$",
        "$\\frac{7\\pi}{6}$",
        "$\\frac{3\\pi}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$270 \\times \\frac{\\pi}{180} = \\frac{270\\pi}{180} = \\frac{3\\pi}{2}$. The fraction $\\frac{270}{180}$ reduces to $\\frac{3}{2}$, not $\\frac{5}{4}$ or $\\frac{7}{6}$.",
        "zh": "$270 \\times \\frac{\\pi}{180} = \\frac{270\\pi}{180} = \\frac{3\\pi}{2}$。分数 $\\frac{270}{180}$ 约成 $\\frac{3}{2}$，而不是 $\\frac{5}{4}$ 或 $\\frac{7}{6}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many degrees are in $\\pi$ radians? (Enter a number of degrees.)",
        "zh": "$\\pi$ 弧度等于多少度？（填度数。）"
      },
      "answer": "180",
      "accept": [
        "180",
        "180°",
        "180 degrees",
        "180.0"
      ],
      "explanation": {
        "en": "$\\pi \\times \\frac{180}{\\pi} = 180$ degrees. $\\pi$ radians is a half-turn, so it equals $180^{\\circ}$, not $360^{\\circ}$.",
        "zh": "$\\pi \\times \\frac{180}{\\pi} = 180$ 度。$\\pi$ 弧度是半圈，所以等于 $180^{\\circ}$，而非 $360^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the reference angle (in degrees) for $300^{\\circ}$?",
        "zh": "$300^{\\circ}$ 的参考角是多少度？"
      },
      "answer": "60",
      "accept": [
        "60",
        "60°",
        "60 degrees",
        "60.0"
      ],
      "explanation": {
        "en": "$300^{\\circ}$ is in Quadrant IV, so the reference angle is $360^{\\circ} - 300^{\\circ} = 60^{\\circ}$. Subtracting $180^{\\circ}$ instead is the common slip.",
        "zh": "$300^{\\circ}$ 在第四象限，参考角为 $360^{\\circ} - 300^{\\circ} = 60^{\\circ}$。误减 $180^{\\circ}$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $r = 4$ and central angle $\\theta = 3$ radians. Find the arc length $s$.",
        "zh": "圆半径 $r = 4$，圆心角 $\\theta = 3$ 弧度。求弧长 $s$。"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0"
      ],
      "explanation": {
        "en": "$s = r\\theta = 4 \\times 3 = 12$. The angle is already in radians, so no conversion is needed before multiplying.",
        "zh": "$s = r\\theta = 4 \\times 3 = 12$。角已是弧度，相乘前不需要转换。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the positive coterminal angle (in degrees) for $400^{\\circ}$ that lies between $0^{\\circ}$ and $360^{\\circ}$.",
        "zh": "求 $400^{\\circ}$ 在 $0^{\\circ}$ 到 $360^{\\circ}$ 之间的正共终边角（度）。"
      },
      "answer": "40",
      "accept": [
        "40",
        "40°",
        "40 degrees",
        "40.0"
      ],
      "explanation": {
        "en": "Subtract one full turn: $400^{\\circ} - 360^{\\circ} = 40^{\\circ}$. Subtracting $180^{\\circ}$ would leave $220^{\\circ}$, a different terminal side.",
        "zh": "减去一整圈：$400^{\\circ} - 360^{\\circ} = 40^{\\circ}$。若减 $180^{\\circ}$ 会得 $220^{\\circ}$，是不同的终边。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arc of length $s = 15$ lies on a circle of radius $r = 5$. Find the central angle $\\theta$ in radians.",
        "zh": "半径 $r = 5$ 的圆上有一段弧长 $s = 15$。求圆心角 $\\theta$（弧度）。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0"
      ],
      "explanation": {
        "en": "Rearrange $s = r\\theta$ to $\\theta = \\frac{s}{r} = \\frac{15}{5} = 3$ radians. Multiplying $s$ by $r$ instead of dividing gives an incorrect value.",
        "zh": "由 $s = r\\theta$ 得 $\\theta = \\frac{s}{r} = \\frac{15}{5} = 3$ 弧度。把 $s$ 乘以 $r$ 而不是相除会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the reference angle (in degrees) for $135^{\\circ}$?",
        "zh": "$135^{\\circ}$ 的参考角是多少度？"
      },
      "answer": "45",
      "accept": [
        "45",
        "45°",
        "45 degrees",
        "45.0"
      ],
      "explanation": {
        "en": "$135^{\\circ}$ is in Quadrant II, so the reference angle is $180^{\\circ} - 135^{\\circ} = 45^{\\circ}$. It is measured from the nearest part of the x-axis.",
        "zh": "$135^{\\circ}$ 在第二象限，参考角为 $180^{\\circ} - 135^{\\circ} = 45^{\\circ}$。它是相对最近的 x 轴度量的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $r = 6$ and central angle $\\theta = \\frac{\\pi}{3}$ radians. Find the exact arc length. (You may enter it in terms of $\\pi$.)",
        "zh": "圆半径 $r = 6$，圆心角 $\\theta = \\frac{\\pi}{3}$ 弧度。求精确弧长。（可用 $\\pi$ 表示。）"
      },
      "answer": "2π",
      "accept": [
        "2π",
        "2pi",
        "2*pi",
        "2 pi",
        "2\\pi",
        "6.28",
        "6.283",
        "6.2832"
      ],
      "explanation": {
        "en": "$s = r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi \\approx 6.28$. Cancel the $6$ with the $3$ before multiplying by $\\pi$.",
        "zh": "$s = r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi \\approx 6.28$。先用 $6$ 与 $3$ 约分，再乘 $\\pi$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the positive coterminal angle (in degrees) for $-100^{\\circ}$ that lies between $0^{\\circ}$ and $360^{\\circ}$.",
        "zh": "求 $-100^{\\circ}$ 在 $0^{\\circ}$ 到 $360^{\\circ}$ 之间的正共终边角（度）。"
      },
      "answer": "260",
      "accept": [
        "260",
        "260°",
        "260 degrees",
        "260.0"
      ],
      "explanation": {
        "en": "Add a full turn: $-100^{\\circ} + 360^{\\circ} = 260^{\\circ}$. Just removing the sign to get $100^{\\circ}$ points to a different terminal side.",
        "zh": "加一整圈：$-100^{\\circ} + 360^{\\circ} = 260^{\\circ}$。只去掉负号得 $100^{\\circ}$ 会指向不同的终边。"
      }
    }
  ],
  "trigonometry/unit-circle-and-trig-graphs": [
    {
      "type": "mc",
      "question": {
        "en": "Using the unit circle, what is $\\sin 30^{\\circ}$?",
        "zh": "利用单位圆，$\\sin 30^{\\circ}$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "On the unit circle $\\sin 30^{\\circ} = \\frac{1}{2}$ (the y-coordinate). Swapping in $\\frac{\\sqrt{3}}{2}$ is the value of $\\cos 30^{\\circ}$, not $\\sin 30^{\\circ}$.",
        "zh": "在单位圆上 $\\sin 30^{\\circ} = \\frac{1}{2}$（即 y 坐标）。写成 $\\frac{\\sqrt{3}}{2}$ 是 $\\cos 30^{\\circ}$ 的值，不是 $\\sin 30^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\cos 60^{\\circ}$?",
        "zh": "$\\cos 60^{\\circ}$ 等于多少？"
      },
      "choices": [
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{1}{2}$",
        "$0$",
        "$\\frac{\\sqrt{2}}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\cos 60^{\\circ} = \\frac{1}{2}$ (the x-coordinate). The value $\\frac{\\sqrt{3}}{2}$ belongs to $\\cos 30^{\\circ}$; the $30$ and $60$ values are swapped for cosine.",
        "zh": "$\\cos 60^{\\circ} = \\frac{1}{2}$（即 x 坐标）。$\\frac{\\sqrt{3}}{2}$ 是 $\\cos 30^{\\circ}$ 的值；余弦在 $30$ 与 $60$ 处的值恰好互换。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\sin 90^{\\circ}$?",
        "zh": "$\\sin 90^{\\circ}$ 等于多少？"
      },
      "choices": [
        "$0$",
        "$\\frac{1}{2}$",
        "$1$",
        "$\\frac{\\sqrt{2}}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At $90^{\\circ}$ the point on the unit circle is $(0, 1)$, so $\\sin 90^{\\circ} = 1$. Answering $0$ confuses the y-coordinate with the x-coordinate.",
        "zh": "在 $90^{\\circ}$ 处单位圆上的点为 $(0, 1)$，所以 $\\sin 90^{\\circ} = 1$。答 $0$ 是把 y 坐标与 x 坐标混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\cos 180^{\\circ}$?",
        "zh": "$\\cos 180^{\\circ}$ 等于多少？"
      },
      "choices": [
        "$1$",
        "$0$",
        "$-\\frac{1}{2}$",
        "$-1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "At $180^{\\circ}$ the point is $(-1, 0)$, so $\\cos 180^{\\circ} = -1$. Choosing $1$ forgets that cosine is negative on the left half of the circle.",
        "zh": "在 $180^{\\circ}$ 处的点为 $(-1, 0)$，所以 $\\cos 180^{\\circ} = -1$。选 $1$ 忘记了圆的左半部分余弦为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In which quadrant is $\\sin\\theta < 0$ and $\\cos\\theta > 0$?",
        "zh": "在哪个象限里 $\\sin\\theta < 0$ 且 $\\cos\\theta > 0$？"
      },
      "choices": [
        "Quadrant IV",
        "Quadrant II",
        "Quadrant III",
        "Quadrant I"
      ],
      "answer": 0,
      "explanation": {
        "en": "Cosine (x) is positive on the right, sine (y) is negative on the bottom, which meet in Quadrant IV. Quadrant III also has negative sine but there cosine is negative too.",
        "zh": "余弦（x）在右侧为正，正弦（y）在下方为负，二者交于第四象限。第三象限正弦也为负，但那里余弦也为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the sign of $\\cos\\theta$ when $\\theta$ is in Quadrant II?",
        "zh": "当 $\\theta$ 在第二象限时，$\\cos\\theta$ 的符号是什么？"
      },
      "choices": [
        "Positive",
        "Negative",
        "Zero",
        "Cannot be determined"
      ],
      "answer": 1,
      "explanation": {
        "en": "In Quadrant II the x-coordinate is negative, so $\\cos\\theta$ is negative. Only sine (the y-coordinate) stays positive in that quadrant.",
        "zh": "在第二象限 x 坐标为负，所以 $\\cos\\theta$ 为负。该象限只有正弦（y 坐标）保持为正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the amplitude of $y = 3\\sin x$?",
        "zh": "$y = 3\\sin x$ 的振幅是多少？"
      },
      "choices": [
        "$6$",
        "$1$",
        "$3$",
        "$\\frac{1}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Amplitude is the absolute value of the coefficient in front of sine: $|3| = 3$. It is the coefficient itself, not twice it, so $6$ overcounts the swing.",
        "zh": "振幅是正弦前系数的绝对值：$|3| = 3$。它就是该系数本身，而非其两倍，所以 $6$ 把摆幅算多了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the period of $y = \\sin(2x)$?",
        "zh": "$y = \\sin(2x)$ 的周期是多少？"
      },
      "choices": [
        "$4\\pi$",
        "$2\\pi$",
        "$\\frac{\\pi}{2}$",
        "$\\pi$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{2} = \\pi$. Leaving the period as $2\\pi$ ignores that the factor of $2$ compresses the graph horizontally.",
        "zh": "周期 $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{2} = \\pi$。仍写 $2\\pi$ 忽略了系数 $2$ 使图像水平压缩。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the midline of $y = \\cos x + 4$?",
        "zh": "$y = \\cos x + 4$ 的中线是什么？"
      },
      "choices": [
        "$y = 4$",
        "$y = 1$",
        "$y = -4$",
        "$y = 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The added constant shifts the graph up, so the midline is $y = 4$. The sign of the vertical shift is positive here, so it is not $y = -4$.",
        "zh": "所加常数使图像上移，因此中线是 $y = 4$。此处竖直平移为正，所以不是 $y = -4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\cos 30^{\\circ}$?",
        "zh": "$\\cos 30^{\\circ}$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$\\frac{\\sqrt{3}}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\cos 30^{\\circ} = \\frac{\\sqrt{3}}{2}$ (the x-coordinate at $30^{\\circ}$). The value $\\frac{1}{2}$ is $\\sin 30^{\\circ}$, so those two are being confused.",
        "zh": "$\\cos 30^{\\circ} = \\frac{\\sqrt{3}}{2}$（$30^{\\circ}$ 处的 x 坐标）。$\\frac{1}{2}$ 是 $\\sin 30^{\\circ}$，二者被混淆了。"
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
        "$10$",
        "$5$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Amplitude is $|-5| = 5$; it is always non-negative. Keeping the minus sign to write $-5$ describes a reflection, not the amplitude.",
        "zh": "振幅是 $|-5| = 5$；它总是非负的。保留负号写 $-5$ 描述的是翻折，而不是振幅。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\sin 45^{\\circ}$?",
        "zh": "$\\sin 45^{\\circ}$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$1$",
        "$\\frac{\\sqrt{2}}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\sin 45^{\\circ} = \\frac{\\sqrt{2}}{2}$, since the $45^{\\circ}$ point has equal x and y coordinates. The value $\\frac{1}{2}$ belongs to $30^{\\circ}$, not $45^{\\circ}$.",
        "zh": "$\\sin 45^{\\circ} = \\frac{\\sqrt{2}}{2}$，因为 $45^{\\circ}$ 处的点 x、y 坐标相等。$\\frac{1}{2}$ 是 $30^{\\circ}$ 的值，不是 $45^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is $\\sin 0^{\\circ}$?",
        "zh": "$\\sin 0^{\\circ}$ 等于多少？"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0"
      ],
      "explanation": {
        "en": "At $0^{\\circ}$ the unit-circle point is $(1, 0)$, so $\\sin 0^{\\circ} = 0$ (the y-coordinate). The x-coordinate $1$ is $\\cos 0^{\\circ}$.",
        "zh": "在 $0^{\\circ}$ 处单位圆上的点为 $(1, 0)$，所以 $\\sin 0^{\\circ} = 0$（y 坐标）。x 坐标 $1$ 是 $\\cos 0^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the amplitude of $y = 4\\sin(3x)$?",
        "zh": "$y = 4\\sin(3x)$ 的振幅是多少？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0"
      ],
      "explanation": {
        "en": "Amplitude comes only from the coefficient of sine: $|4| = 4$. The $3$ affects the period, not the amplitude.",
        "zh": "振幅只来自正弦的系数：$|4| = 4$。里面的 $3$ 影响的是周期，而非振幅。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the period of $y = \\cos(4x)$? (You may enter it in terms of $\\pi$.)",
        "zh": "$y = \\cos(4x)$ 的周期是多少？（可用 $\\pi$ 表示。）"
      },
      "answer": "π/2",
      "accept": [
        "π/2",
        "pi/2",
        "\\pi/2",
        "0.5π",
        "1.57",
        "1.571",
        "1.5708"
      ],
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. Forgetting to divide by $b$ would leave the wrong period $2\\pi$.",
        "zh": "周期 $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。忘记除以 $b$ 会错留周期 $2\\pi$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the midline value (the constant $y$-value) of $y = 2\\sin x - 3$?",
        "zh": "$y = 2\\sin x - 3$ 的中线值（常数 $y$ 值）是多少？"
      },
      "answer": "-3",
      "accept": [
        "-3",
        "-3.0"
      ],
      "explanation": {
        "en": "The vertical shift $-3$ sets the midline at $y = -3$. The coefficient $2$ is the amplitude and does not change the midline.",
        "zh": "竖直平移 $-3$ 使中线在 $y = -3$。系数 $2$ 是振幅，不改变中线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is $\\sin 270^{\\circ}$?",
        "zh": "$\\sin 270^{\\circ}$ 等于多少？"
      },
      "answer": "-1",
      "accept": [
        "-1",
        "-1.0"
      ],
      "explanation": {
        "en": "At $270^{\\circ}$ the point is $(0, -1)$, so $\\sin 270^{\\circ} = -1$. Dropping the sign to write $1$ ignores that this point is at the bottom of the circle.",
        "zh": "在 $270^{\\circ}$ 处的点为 $(0, -1)$，所以 $\\sin 270^{\\circ} = -1$。去掉负号写 $1$ 忽略了此点在圆的最下方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the maximum value of $y = \\cos x + 2$?",
        "zh": "$y = \\cos x + 2$ 的最大值是多少？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0"
      ],
      "explanation": {
        "en": "Max $=$ midline $+$ amplitude $= 2 + 1 = 3$. Since $\\cos x$ tops out at $1$, adding the shift of $2$ gives $3$, not $2$.",
        "zh": "最大值 $=$ 中线 $+$ 振幅 $= 2 + 1 = 3$。因为 $\\cos x$ 最大为 $1$，加上平移 $2$ 得 $3$，而不是 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the period of $y = \\sin x$? (You may enter it in terms of $\\pi$.)",
        "zh": "$y = \\sin x$ 的周期是多少？（可用 $\\pi$ 表示。）"
      },
      "answer": "2π",
      "accept": [
        "2π",
        "2pi",
        "2*pi",
        "2 pi",
        "2\\pi",
        "6.28",
        "6.283",
        "6.2832"
      ],
      "explanation": {
        "en": "With $b = 1$, period $= \\frac{2\\pi}{1} = 2\\pi$. The basic sine curve completes one full cycle over $2\\pi$, not $\\pi$.",
        "zh": "当 $b = 1$ 时，周期 $= \\frac{2\\pi}{1} = 2\\pi$。基本正弦曲线在 $2\\pi$ 上完成一个完整周期，而不是 $\\pi$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is $\\cos 0^{\\circ}$?",
        "zh": "$\\cos 0^{\\circ}$ 等于多少？"
      },
      "answer": "1",
      "accept": [
        "1",
        "1.0"
      ],
      "explanation": {
        "en": "At $0^{\\circ}$ the point is $(1, 0)$, so $\\cos 0^{\\circ} = 1$ (the x-coordinate). Answering $0$ mixes it up with $\\sin 0^{\\circ}$.",
        "zh": "在 $0^{\\circ}$ 处的点为 $(1, 0)$，所以 $\\cos 0^{\\circ} = 1$（x 坐标）。答 $0$ 是与 $\\sin 0^{\\circ}$ 混淆了。"
      }
    }
  ],
  "trigonometry/trig-identities-and-equations": [
    {
      "type": "mc",
      "question": {
        "en": "What does $\\sin^2\\theta + \\cos^2\\theta$ equal?",
        "zh": "$\\sin^2\\theta + \\cos^2\\theta$ 等于多少？"
      },
      "choices": [
        "$1$",
        "$0$",
        "$2$",
        "$\\tan\\theta$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The Pythagorean identity states $\\sin^2\\theta + \\cos^2\\theta = 1$ for every angle. It equals $1$, not $2$, because the squares add to exactly one on the unit circle.",
        "zh": "毕达哥拉斯恒等式为 $\\sin^2\\theta + \\cos^2\\theta = 1$，对任意角都成立。它等于 $1$ 而非 $2$，因为在单位圆上两平方之和恰为一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant I, what is $\\cos\\theta$?",
        "zh": "若 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 在第一象限，$\\cos\\theta$ 是多少？"
      },
      "choices": [
        "$\\frac{3}{4}$",
        "$\\frac{4}{5}$",
        "$\\frac{5}{4}$",
        "$-\\frac{4}{5}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $\\cos^2\\theta = 1 - \\left(\\frac{3}{5}\\right)^2 = \\frac{16}{25}$, so $\\cos\\theta = \\frac{4}{5}$ (positive in Quadrant I). Taking $\\frac{3}{4}$ treats the given as a tangent ratio instead of using the identity.",
        "zh": "由 $\\cos^2\\theta = 1 - \\left(\\frac{3}{5}\\right)^2 = \\frac{16}{25}$，得 $\\cos\\theta = \\frac{4}{5}$（第一象限为正）。取 $\\frac{3}{4}$ 是把已知当成正切比，而没用恒等式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant II, what is $\\cos\\theta$?",
        "zh": "若 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 在第二象限，$\\cos\\theta$ 是多少？"
      },
      "choices": [
        "$\\frac{4}{5}$",
        "$\\frac{3}{5}$",
        "$-\\frac{4}{5}$",
        "$-\\frac{3}{5}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The identity gives $|\\cos\\theta| = \\frac{4}{5}$, and cosine is negative in Quadrant II, so $\\cos\\theta = -\\frac{4}{5}$. Keeping it positive ignores the quadrant sign.",
        "zh": "恒等式给出 $|\\cos\\theta| = \\frac{4}{5}$，而余弦在第二象限为负，所以 $\\cos\\theta = -\\frac{4}{5}$。保持为正忽略了象限符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\tan\\theta$?",
        "zh": "哪个表达式等于 $\\tan\\theta$？"
      },
      "choices": [
        "$\\frac{\\cos\\theta}{\\sin\\theta}$",
        "$\\sin\\theta\\cos\\theta$",
        "$\\frac{1}{\\sin\\theta}$",
        "$\\frac{\\sin\\theta}{\\cos\\theta}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "By definition $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$. Flipping it to $\\frac{\\cos\\theta}{\\sin\\theta}$ gives cotangent, not tangent.",
        "zh": "根据定义 $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$。把它倒过来写成 $\\frac{\\cos\\theta}{\\sin\\theta}$ 得到的是余切，而不是正切。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the smallest positive angle (in degrees) that solves $\\sin\\theta = \\frac{1}{2}$?",
        "zh": "使 $\\sin\\theta = \\frac{1}{2}$ 成立的最小正角（度）是多少？"
      },
      "choices": [
        "$30^{\\circ}$",
        "$60^{\\circ}$",
        "$45^{\\circ}$",
        "$90^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sin 30^{\\circ} = \\frac{1}{2}$, so the smallest solution is $30^{\\circ}$. Answering $60^{\\circ}$ confuses this with the angle whose cosine is $\\frac{1}{2}$.",
        "zh": "$\\sin 30^{\\circ} = \\frac{1}{2}$，所以最小解是 $30^{\\circ}$。答 $60^{\\circ}$ 是与余弦为 $\\frac{1}{2}$ 的角混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the smallest positive angle (in degrees) that solves $\\cos\\theta = 0$?",
        "zh": "使 $\\cos\\theta = 0$ 成立的最小正角（度）是多少？"
      },
      "choices": [
        "$0^{\\circ}$",
        "$90^{\\circ}$",
        "$180^{\\circ}$",
        "$45^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Cosine (the x-coordinate) is $0$ first at $90^{\\circ}$. At $0^{\\circ}$ cosine equals $1$, not $0$.",
        "zh": "余弦（x 坐标）首次为 $0$ 是在 $90^{\\circ}$。在 $0^{\\circ}$ 处余弦等于 $1$，而不是 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\cos\\theta = \\frac{1}{2}$ and $\\theta$ is in Quadrant I, what is $\\sin\\theta$?",
        "zh": "若 $\\cos\\theta = \\frac{1}{2}$ 且 $\\theta$ 在第一象限，$\\sin\\theta$ 是多少？"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$-\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{2}}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\sin^2\\theta = 1 - \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4}$, so $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ (positive in Quadrant I). Answering $\\frac{1}{2}$ just copies the cosine value.",
        "zh": "$\\sin^2\\theta = 1 - \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4}$，所以 $\\sin\\theta = \\frac{\\sqrt{3}}{2}$（第一象限为正）。答 $\\frac{1}{2}$ 只是照抄了余弦值。"
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
        "$\\sin^2\\theta$",
        "$1$",
        "$\\cos^2\\theta$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Rearranging the Pythagorean identity gives $1 - \\sin^2\\theta = \\cos^2\\theta$. Leaving it as $1$ forgets to subtract the $\\sin^2\\theta$ term.",
        "zh": "变形毕达哥拉斯恒等式得 $1 - \\sin^2\\theta = \\cos^2\\theta$。写成 $1$ 忘了减去 $\\sin^2\\theta$ 这一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the smallest positive angle (in degrees) that solves $\\tan\\theta = 1$?",
        "zh": "使 $\\tan\\theta = 1$ 成立的最小正角（度）是多少？"
      },
      "choices": [
        "$45^{\\circ}$",
        "$60^{\\circ}$",
        "$30^{\\circ}$",
        "$90^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\tan 45^{\\circ} = \\frac{\\sin 45^{\\circ}}{\\cos 45^{\\circ}} = 1$, so the answer is $45^{\\circ}$. Tangent equals $1$ where sine and cosine are equal, not at $30^{\\circ}$.",
        "zh": "$\\tan 45^{\\circ} = \\frac{\\sin 45^{\\circ}}{\\cos 45^{\\circ}} = 1$，所以答案是 $45^{\\circ}$。正切等于 $1$ 是在正弦与余弦相等处，而非 $30^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which angle in $[0^{\\circ}, 360^{\\circ})$ in Quadrant III solves $\\sin\\theta = -\\frac{1}{2}$?",
        "zh": "在 $[0^{\\circ}, 360^{\\circ})$ 内第三象限中，哪个角满足 $\\sin\\theta = -\\frac{1}{2}$？"
      },
      "choices": [
        "$330^{\\circ}$",
        "$210^{\\circ}$",
        "$150^{\\circ}$",
        "$30^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The reference angle is $30^{\\circ}$; in Quadrant III that gives $180^{\\circ} + 30^{\\circ} = 210^{\\circ}$. The angle $330^{\\circ}$ also has sine $-\\frac{1}{2}$ but sits in Quadrant IV.",
        "zh": "参考角为 $30^{\\circ}$；在第三象限得 $180^{\\circ} + 30^{\\circ} = 210^{\\circ}$。$330^{\\circ}$ 的正弦也是 $-\\frac{1}{2}$，但它在第四象限。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\sin\\theta = \\frac{1}{2}$ and $\\cos\\theta = \\frac{\\sqrt{3}}{2}$, what is $\\tan\\theta$?",
        "zh": "若 $\\sin\\theta = \\frac{1}{2}$ 且 $\\cos\\theta = \\frac{\\sqrt{3}}{2}$，$\\tan\\theta$ 是多少？"
      },
      "choices": [
        "$\\sqrt{3}$",
        "$1$",
        "$\\frac{\\sqrt{3}}{3}$",
        "$\\frac{1}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$. Inverting the ratio to $\\sqrt{3}$ divides cosine by sine instead.",
        "zh": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。把比值倒成 $\\sqrt{3}$ 是用余弦除以正弦了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2\\cos\\theta = 1$ for the smallest positive angle in degrees.",
        "zh": "解 $2\\cos\\theta = 1$，求最小正角（度）。"
      },
      "choices": [
        "$30^{\\circ}$",
        "$45^{\\circ}$",
        "$90^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Divide first: $\\cos\\theta = \\frac{1}{2}$, and $\\cos 60^{\\circ} = \\frac{1}{2}$, so $\\theta = 60^{\\circ}$. Skipping the division and reading $\\cos\\theta = 1$ would wrongly give $0^{\\circ}$.",
        "zh": "先除：$\\cos\\theta = \\frac{1}{2}$，而 $\\cos 60^{\\circ} = \\frac{1}{2}$，所以 $\\theta = 60^{\\circ}$。不先除、误当 $\\cos\\theta = 1$ 会错得 $0^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify: $\\sin^2\\theta + \\cos^2\\theta = $ ?",
        "zh": "化简：$\\sin^2\\theta + \\cos^2\\theta = $ ？"
      },
      "answer": "1",
      "accept": [
        "1",
        "1.0"
      ],
      "explanation": {
        "en": "This is the Pythagorean identity, which always equals $1$. It does not depend on the value of $\\theta$.",
        "zh": "这是毕达哥拉斯恒等式，恒等于 $1$。它与 $\\theta$ 的取值无关。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\sin\\theta = \\frac{4}{5}$ and $\\theta$ is in Quadrant I, find $\\cos\\theta$.",
        "zh": "若 $\\sin\\theta = \\frac{4}{5}$ 且 $\\theta$ 在第一象限，求 $\\cos\\theta$。"
      },
      "answer": "3/5",
      "accept": [
        "3/5",
        "0.6",
        "0.60",
        ".6"
      ],
      "explanation": {
        "en": "$\\cos^2\\theta = 1 - \\left(\\frac{4}{5}\\right)^2 = \\frac{9}{25}$, so $\\cos\\theta = \\frac{3}{5} = 0.6$ (positive in Quadrant I).",
        "zh": "$\\cos^2\\theta = 1 - \\left(\\frac{4}{5}\\right)^2 = \\frac{9}{25}$，所以 $\\cos\\theta = \\frac{3}{5} = 0.6$（第一象限为正）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sin\\theta = \\frac{1}{2}$ for the smallest positive angle in degrees.",
        "zh": "解 $\\sin\\theta = \\frac{1}{2}$，求最小正角（度）。"
      },
      "answer": "30",
      "accept": [
        "30",
        "30°",
        "30 degrees",
        "30.0"
      ],
      "explanation": {
        "en": "$\\sin 30^{\\circ} = \\frac{1}{2}$, so the smallest positive solution is $30^{\\circ}$. The other solution in a full turn is $150^{\\circ}$, which is larger.",
        "zh": "$\\sin 30^{\\circ} = \\frac{1}{2}$，所以最小正解是 $30^{\\circ}$。一圈内的另一个解是 $150^{\\circ}$，更大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\cos\\theta = 0.8$ and $\\theta$ is in Quadrant I, find $\\sin\\theta$.",
        "zh": "若 $\\cos\\theta = 0.8$ 且 $\\theta$ 在第一象限，求 $\\sin\\theta$。"
      },
      "answer": "0.6",
      "accept": [
        "0.6",
        "0.60",
        ".6",
        "3/5"
      ],
      "explanation": {
        "en": "$\\sin^2\\theta = 1 - 0.8^2 = 1 - 0.64 = 0.36$, so $\\sin\\theta = 0.6$ (positive in Quadrant I). Forgetting to square $0.8$ before subtracting gives a wrong result.",
        "zh": "$\\sin^2\\theta = 1 - 0.8^2 = 1 - 0.64 = 0.36$，所以 $\\sin\\theta = 0.6$（第一象限为正）。相减前忘记把 $0.8$ 平方会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\sin\\theta = 0.6$ and $\\cos\\theta = 0.8$, find $\\tan\\theta$.",
        "zh": "若 $\\sin\\theta = 0.6$ 且 $\\cos\\theta = 0.8$，求 $\\tan\\theta$。"
      },
      "answer": "0.75",
      "accept": [
        "0.75",
        ".75",
        "3/4",
        "0.750"
      ],
      "explanation": {
        "en": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{0.6}{0.8} = 0.75$. Dividing cosine by sine instead would give the reciprocal.",
        "zh": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{0.6}{0.8} = 0.75$。若用余弦除以正弦会得到它的倒数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\cos\\theta = 1$ for the smallest non-negative angle in degrees.",
        "zh": "解 $\\cos\\theta = 1$，求最小非负角（度）。"
      },
      "answer": "0",
      "accept": [
        "0",
        "0°",
        "0 degrees",
        "0.0"
      ],
      "explanation": {
        "en": "$\\cos 0^{\\circ} = 1$, so the smallest non-negative solution is $0^{\\circ}$. Confusing this with where sine equals $1$ would wrongly give $90^{\\circ}$.",
        "zh": "$\\cos 0^{\\circ} = 1$，所以最小非负解是 $0^{\\circ}$。与正弦为 $1$ 的角混淆会错得 $90^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\cos\\theta = \\frac{1}{2}$, find $\\sin^2\\theta$.",
        "zh": "若 $\\cos\\theta = \\frac{1}{2}$，求 $\\sin^2\\theta$。"
      },
      "answer": "3/4",
      "accept": [
        "3/4",
        "0.75",
        ".75",
        "0.750"
      ],
      "explanation": {
        "en": "$\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\frac{1}{4} = \\frac{3}{4}$. This asks for $\\sin^2\\theta$, so no square root is taken.",
        "zh": "$\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\frac{1}{4} = \\frac{3}{4}$。此题求 $\\sin^2\\theta$，因此不必开方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\tan\\theta = 1$ and $\\theta$ is in Quadrant I, find $\\theta$ in degrees.",
        "zh": "若 $\\tan\\theta = 1$ 且 $\\theta$ 在第一象限，求 $\\theta$（度）。"
      },
      "answer": "45",
      "accept": [
        "45",
        "45°",
        "45 degrees",
        "45.0"
      ],
      "explanation": {
        "en": "Tangent is $1$ where sine equals cosine, which happens at $45^{\\circ}$ in Quadrant I. The other angle with tangent $1$ is $225^{\\circ}$, in Quadrant III.",
        "zh": "正切为 $1$ 是在正弦等于余弦处，即第一象限的 $45^{\\circ}$。另一个正切为 $1$ 的角是 $225^{\\circ}$，在第三象限。"
      }
    }
  ],
  "probability/probability-fundamentals": [
    {
      "type": "mc",
      "question": {
        "en": "Two standard six-sided dice are rolled. How many outcomes are in the sample space?",
        "zh": "掷两个标准的六面骰子。样本空间中有多少个结果？"
      },
      "choices": [
        "36",
        "21",
        "6",
        "12"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each die has 6 outcomes, and the rolls are independent, so the sample space has $6 \\times 6 = 36$ ordered pairs. Counting only the 21 unordered combinations treats $(2,3)$ and $(3,2)$ as the same, which undercounts the equally likely outcomes.",
        "zh": "每个骰子有 6 种结果，且两次投掷相互独立，所以样本空间有 $6 \\times 6 = 36$ 个有序对。只数 21 种无序组合会把 $(2,3)$ 和 $(3,2)$ 当作同一个，从而漏数了等可能的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two dice are rolled. What is the theoretical probability that the sum equals 7?",
        "zh": "掷两个骰子。点数之和等于 7 的理论概率是多少？"
      },
      "choices": [
        "$\\frac{1}{11}$",
        "$\\frac{1}{6}$",
        "$\\frac{1}{12}$",
        "$\\frac{5}{36}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "There are 6 ways to get a sum of 7 out of 36 outcomes: $\\frac{6}{36} = \\frac{1}{6}$. Treating the 11 possible sums (2 through 12) as equally likely is wrong because sums like 7 occur more often than sums like 2.",
        "zh": "在 36 个结果中有 6 种方式使和为 7：$\\frac{6}{36} = \\frac{1}{6}$。把 11 种可能的和（2 到 12）当作等可能是错误的，因为像 7 这样的和比像 2 这样的和出现得更频繁。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $P(A) = 0.35$, what is $P(\\text{not } A)$?",
        "zh": "若 $P(A) = 0.35$，则 $P(\\text{非 } A)$ 是多少？"
      },
      "choices": [
        "0.35",
        "0.55",
        "0.65",
        "0.75"
      ],
      "answer": 2,
      "explanation": {
        "en": "The complement is $1 - P(A) = 1 - 0.35 = 0.65$. Repeating 0.35 forgets that a probability and its complement must sum to 1.",
        "zh": "补事件的概率是 $1 - P(A) = 1 - 0.35 = 0.65$。直接写 0.35 忽略了一个事件与其补事件的概率之和必须为 1。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A coin is flipped 50 times and lands heads 22 times. What is the experimental probability of heads?",
        "zh": "一枚硬币抛了 50 次，其中 22 次正面朝上。正面的实验概率是多少？"
      },
      "choices": [
        "0.5",
        "0.56",
        "0.22",
        "0.44"
      ],
      "answer": 3,
      "explanation": {
        "en": "Experimental probability uses observed results: $\\frac{22}{50} = 0.44$. Answering 0.5 gives the theoretical value and ignores what actually happened in the trials.",
        "zh": "实验概率使用观察到的结果：$\\frac{22}{50} = 0.44$。回答 0.5 给出的是理论值，忽略了试验中实际发生的情况。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.5$. Find $P(A \\text{ or } B)$.",
        "zh": "事件 $A$ 与 $B$ 互斥，$P(A) = 0.3$，$P(B) = 0.5$。求 $P(A \\text{ 或 } B)$。"
      },
      "choices": [
        "0.8",
        "0.2",
        "0.15",
        "0.5"
      ],
      "answer": 0,
      "explanation": {
        "en": "For mutually exclusive events $P(A \\text{ or } B) = P(A) + P(B) = 0.3 + 0.5 = 0.8$. Multiplying to get 0.15 uses the rule for 'and' with independent events, not 'or'.",
        "zh": "对于互斥事件，$P(A \\text{ 或 } B) = P(A) + P(B) = 0.3 + 0.5 = 0.8$。相乘得到 0.15 用的是独立事件'且'的规则，而不是'或'。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\text{ and } B) = 0.2$, find $P(A \\text{ or } B)$.",
        "zh": "已知 $P(A) = 0.6$，$P(B) = 0.5$，$P(A \\text{ 且 } B) = 0.2$，求 $P(A \\text{ 或 } B)$。"
      },
      "choices": [
        "1.1",
        "0.9",
        "0.7",
        "0.3"
      ],
      "answer": 1,
      "explanation": {
        "en": "The general addition rule gives $0.6 + 0.5 - 0.2 = 0.9$. Getting 1.1 forgets to subtract the overlap $P(A \\text{ and } B)$, which double-counts the shared outcomes.",
        "zh": "一般加法法则给出 $0.6 + 0.5 - 0.2 = 0.9$。得到 1.1 是忘了减去交集 $P(A \\text{ 且 } B)$，从而把重叠的结果数了两遍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ are independent with $P(A) = 0.4$ and $P(B) = 0.25$. Find $P(A \\text{ and } B)$.",
        "zh": "事件 $A$ 与 $B$ 相互独立，$P(A) = 0.4$，$P(B) = 0.25$。求 $P(A \\text{ 且 } B)$。"
      },
      "choices": [
        "0.65",
        "0.15",
        "0.1",
        "0.5"
      ],
      "answer": 2,
      "explanation": {
        "en": "For independent events $P(A \\text{ and } B) = P(A) \\times P(B) = 0.4 \\times 0.25 = 0.1$. Adding to get 0.65 uses the 'or' rule instead of multiplying for 'and'.",
        "zh": "对于独立事件，$P(A \\text{ 且 } B) = P(A) \\times P(B) = 0.4 \\times 0.25 = 0.1$。相加得到 0.65 用的是'或'的法则，而不是'且'的相乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A survey of 100 people recorded pets. Dog & Cat: 15; Dog & No Cat: 35; No Dog & Cat: 25; No Dog & No Cat: 25. What is $P(\\text{owns a dog})$?",
        "zh": "对 100 人进行的调查记录了养宠物情况。养狗且养猫：15；养狗不养猫：35；不养狗但养猫：25；不养狗也不养猫：25。$P(\\text{养狗})$ 是多少？"
      },
      "choices": [
        "0.15",
        "0.35",
        "0.4",
        "0.5"
      ],
      "answer": 3,
      "explanation": {
        "en": "The dog owners total $15 + 35 = 50$ out of 100, so $P = 0.5$. Using only 15 counts just the people who own both a dog and a cat, not all dog owners.",
        "zh": "养狗的人共有 $15 + 35 = 50$（共 100 人），所以 $P = 0.5$。只用 15 只数了同时养狗又养猫的人，而不是所有养狗的人。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the same table (Dog & Cat: 15; Dog & No Cat: 35; No Dog & Cat: 25; No Dog & No Cat: 25), find $P(\\text{Cat} \\mid \\text{Dog})$.",
        "zh": "用同一个表格（养狗且养猫：15；养狗不养猫：35；不养狗但养猫：25；不养狗也不养猫：25），求 $P(\\text{猫} \\mid \\text{狗})$。"
      },
      "choices": [
        "0.3",
        "0.375",
        "0.15",
        "0.5"
      ],
      "answer": 0,
      "explanation": {
        "en": "Condition on dog owners: $\\frac{15}{50} = 0.3$. Dividing 15 by the cat total of 40 gives 0.375 but wrongly conditions on cats instead of dogs.",
        "zh": "以养狗的人为条件：$\\frac{15}{50} = 0.3$。用 15 除以养猫总数 40 得到 0.375，是错误地以养猫而非养狗为条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For events with $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \\text{ and } B) = 0.2$, are $A$ and $B$ independent?",
        "zh": "对于 $P(A) = 0.5$、$P(B) = 0.4$、$P(A \\text{ 且 } B) = 0.2$ 的事件，$A$ 与 $B$ 独立吗？"
      },
      "choices": [
        "No, P(A and B) is too large",
        "Yes, independent",
        "No, they are mutually exclusive",
        "Cannot be determined"
      ],
      "answer": 1,
      "explanation": {
        "en": "They are independent because $P(A) \\times P(B) = 0.5 \\times 0.4 = 0.2 = P(A \\text{ and } B)$. Calling them mutually exclusive is wrong since mutually exclusive events have $P(A \\text{ and } B) = 0$, not 0.2.",
        "zh": "它们是独立的，因为 $P(A) \\times P(B) = 0.5 \\times 0.4 = 0.2 = P(A \\text{ 且 } B)$。说它们互斥是错的，因为互斥事件满足 $P(A \\text{ 且 } B) = 0$，而不是 0.2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $P(A \\text{ and } B) = 0.12$ and $P(B) = 0.3$, find $P(A \\mid B)$.",
        "zh": "已知 $P(A \\text{ 且 } B) = 0.12$ 且 $P(B) = 0.3$，求 $P(A \\mid B)$。"
      },
      "choices": [
        "0.036",
        "0.42",
        "0.4",
        "0.12"
      ],
      "answer": 2,
      "explanation": {
        "en": "By definition $P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)} = \\frac{0.12}{0.3} = 0.4$. Multiplying the two values to get 0.036 reverses the conditional-probability formula.",
        "zh": "根据定义 $P(A \\mid B) = \\frac{P(A \\text{ 且 } B)}{P(B)} = \\frac{0.12}{0.3} = 0.4$。把两个值相乘得到 0.036 把条件概率公式弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A fair coin is flipped twice. What is the probability of getting at least one head?",
        "zh": "一枚均匀硬币抛两次。至少得到一次正面的概率是多少？"
      },
      "choices": [
        "$\\frac{1}{4}$",
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$",
        "$\\frac{3}{4}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Use the complement: $1 - P(\\text{no heads}) = 1 - \\frac{1}{4} = \\frac{3}{4}$. Answering $\\frac{1}{4}$ gives the probability of no heads instead of subtracting it from 1.",
        "zh": "用补事件：$1 - P(\\text{没有正面}) = 1 - \\frac{1}{4} = \\frac{3}{4}$。回答 $\\frac{1}{4}$ 给出的是没有正面的概率，而不是用 1 减去它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A bag has 3 red, 2 blue, and 5 green marbles. What is the probability of drawing a red marble? Give a decimal.",
        "zh": "一个袋子里有 3 个红球、2 个蓝球和 5 个绿球。抽到一个红球的概率是多少？用小数表示。"
      },
      "answer": "0.3",
      "accept": [
        "3/10",
        ".3",
        "0.30",
        "30%"
      ],
      "explanation": {
        "en": "There are $3 + 2 + 5 = 10$ marbles, so $P(\\text{red}) = \\frac{3}{10} = 0.3$. Be sure to use the full total of 10 in the denominator, not just the non-red marbles.",
        "zh": "共有 $3 + 2 + 5 = 10$ 个球，所以 $P(\\text{红}) = \\frac{3}{10} = 0.3$。注意分母要用总数 10，而不是只用非红球的数量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "From the pet table (Dog & Cat: 15; Dog & No Cat: 35; No Dog & Cat: 25; No Dog & No Cat: 25), find $P(\\text{No Dog and No Cat})$ as a decimal.",
        "zh": "根据宠物表（养狗且养猫：15；养狗不养猫：35；不养狗但养猫：25；不养狗也不养猫：25），求 $P(\\text{不养狗且不养猫})$，用小数表示。"
      },
      "answer": "0.25",
      "accept": [
        "1/4",
        "25/100",
        ".25",
        "0.250",
        "25%"
      ],
      "explanation": {
        "en": "That cell holds 25 out of 100 people: $\\frac{25}{100} = 0.25$. Divide by the grand total 100, not by a row or column subtotal.",
        "zh": "该格有 25 人（共 100 人）：$\\frac{25}{100} = 0.25$。要除以总人数 100，而不是某一行或某一列的小计。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $P(E) = 0.72$, what is $P(\\text{not } E)$?",
        "zh": "若 $P(E) = 0.72$，则 $P(\\text{非 } E)$ 是多少？"
      },
      "answer": "0.28",
      "accept": [
        ".28",
        "0.280",
        "28%"
      ],
      "explanation": {
        "en": "The complement is $1 - 0.72 = 0.28$. A probability and its complement always add to 1.",
        "zh": "补事件的概率是 $1 - 0.72 = 0.28$。一个事件与其补事件的概率之和总是 1。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The chance of rain each day is 0.3, and the two days are independent. What is the probability it rains on both days?",
        "zh": "每天下雨的概率是 0.3，且两天相互独立。两天都下雨的概率是多少？"
      },
      "answer": "0.09",
      "accept": [
        ".09",
        "9/100",
        "0.090",
        "9%"
      ],
      "explanation": {
        "en": "For independent events multiply: $0.3 \\times 0.3 = 0.09$. Adding the probabilities would incorrectly give 0.6.",
        "zh": "对于独立事件要相乘：$0.3 \\times 0.3 = 0.09$。把概率相加会错误地得到 0.6。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "From the pet table (Dog & Cat: 15; Dog & No Cat: 35; No Dog & Cat: 25; No Dog & No Cat: 25), find $P(\\text{No Cat} \\mid \\text{No Dog})$ as a decimal.",
        "zh": "根据宠物表（养狗且养猫：15；养狗不养猫：35；不养狗但养猫：25；不养狗也不养猫：25），求 $P(\\text{不养猫} \\mid \\text{不养狗})$，用小数表示。"
      },
      "answer": "0.5",
      "accept": [
        "1/2",
        ".5",
        "0.50",
        "50%"
      ],
      "explanation": {
        "en": "Among the 50 people with no dog, 25 also have no cat: $\\frac{25}{50} = 0.5$. Condition on the no-dog group, not the whole 100 people.",
        "zh": "在 50 个不养狗的人中，有 25 人也不养猫：$\\frac{25}{50} = 0.5$。要以不养狗的人群为条件，而不是全部 100 人。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spinner is spun 80 times and lands on red 20 times. What is the experimental probability of red? Give a decimal.",
        "zh": "一个转盘转了 80 次，其中 20 次停在红色。红色的实验概率是多少？用小数表示。"
      },
      "answer": "0.25",
      "accept": [
        "1/4",
        "20/80",
        ".25",
        "0.250",
        "25%"
      ],
      "explanation": {
        "en": "Experimental probability is $\\frac{20}{80} = 0.25$ based on observed spins. This uses the actual results rather than an assumed theoretical value.",
        "zh": "实验概率是 $\\frac{20}{80} = 0.25$，基于观察到的转盘结果。它用的是实际结果，而不是假设的理论值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $P(A) = 0.45$, $P(B) = 0.35$, and $P(A \\text{ and } B) = 0.15$, find $P(A \\text{ or } B)$.",
        "zh": "已知 $P(A) = 0.45$，$P(B) = 0.35$，$P(A \\text{ 且 } B) = 0.15$，求 $P(A \\text{ 或 } B)$。"
      },
      "answer": "0.65",
      "accept": [
        ".65",
        "0.650",
        "65%",
        "13/20"
      ],
      "explanation": {
        "en": "Apply the addition rule: $0.45 + 0.35 - 0.15 = 0.65$. Remember to subtract the overlap so shared outcomes are not counted twice.",
        "zh": "应用加法法则：$0.45 + 0.35 - 0.15 = 0.65$。记得减去交集，这样重叠的结果就不会被数两遍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A coin is flipped 3 times. How many outcomes are in the sample space?",
        "zh": "一枚硬币抛 3 次。样本空间中有多少个结果？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "eight"
      ],
      "explanation": {
        "en": "Each flip has 2 outcomes and flips are independent: $2^3 = 8$. Multiplying $2 \\times 3 = 6$ confuses the counting principle with simple addition of options.",
        "zh": "每次抛掷有 2 种结果，且各次独立：$2^3 = 8$。用 $2 \\times 3 = 6$ 是把计数原理与简单相加混淆了。"
      }
    }
  ],
  "probability/counting-and-binomial-distributions": [
    {
      "type": "mc",
      "question": {
        "en": "A cafe offers 4 shirts, 3 pants, and 2 pairs of shoes. How many different outfits (one of each) are possible?",
        "zh": "有 4 件衬衫、3 条裤子和 2 双鞋。可以搭配出多少套不同的服装（每样各一件）？"
      },
      "choices": [
        "24",
        "9",
        "12",
        "20"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the fundamental counting principle, multiply the choices: $4 \\times 3 \\times 2 = 24$. Adding to get 9 counts total items instead of combinations of one from each category.",
        "zh": "根据基本计数原理，把各项选择相乘：$4 \\times 3 \\times 2 = 24$。相加得到 9 数的是物品总数，而不是每类各取一件的组合数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In how many ways can 5 different books be arranged in a row on a shelf?",
        "zh": "5 本不同的书排成一排放在书架上，有多少种排法？"
      },
      "choices": [
        "25",
        "120",
        "60",
        "20"
      ],
      "answer": 1,
      "explanation": {
        "en": "Order matters, so it is $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. Computing $5^2 = 25$ or $5 \\times 4 = 20$ stops short of the full factorial for all positions.",
        "zh": "顺序有关，所以是 $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$。算成 $5^2 = 25$ 或 $5 \\times 4 = 20$ 都没有完成对所有位置的阶乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the permutation $_7P_3$.",
        "zh": "计算排列 $_7P_3$。"
      },
      "choices": [
        "343",
        "35",
        "210",
        "21"
      ],
      "answer": 2,
      "explanation": {
        "en": "$_7P_3 = 7 \\times 6 \\times 5 = 210$. Getting 35 computes the combination $_7C_3$, which divides out the ordering that permutations keep.",
        "zh": "$_7P_3 = 7 \\times 6 \\times 5 = 210$。得到 35 算的是组合 $_7C_3$，它约去了排列所保留的顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the combination $_6C_2$.",
        "zh": "计算组合 $_6C_2$。"
      },
      "choices": [
        "30",
        "36",
        "12",
        "15"
      ],
      "answer": 3,
      "explanation": {
        "en": "$_6C_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$. Getting 30 computes $_6P_2$ and forgets to divide by $2!$ because order should not matter here.",
        "zh": "$_6C_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$。得到 30 算的是 $_6P_2$，忘了除以 $2!$，而这里顺序是无关的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A pizza lets you choose 3 toppings from 8, where order does not matter. How many topping selections are possible?",
        "zh": "一份披萨可以从 8 种配料中选 3 种，顺序无关。有多少种配料选法？"
      },
      "choices": [
        "56",
        "336",
        "24",
        "512"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since order does not matter, use $_8C_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$. Getting 336 uses $_8P_3$ and wrongly treats different orders as different selections.",
        "zh": "由于顺序无关，用 $_8C_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$。得到 336 用的是 $_8P_3$，错误地把不同顺序当作不同的选法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation should be counted using combinations rather than permutations?",
        "zh": "下列哪种情形应当用组合而非排列来计数？"
      },
      "choices": [
        "Arranging 3 people in a line",
        "Choosing a 3-person committee",
        "Ranking the top 3 finishers",
        "Assigning president, VP, and secretary"
      ],
      "answer": 1,
      "explanation": {
        "en": "A committee has no ranking, so order does not matter and combinations apply. Assigning distinct titles or ranking finishers makes order matter, which calls for permutations.",
        "zh": "委员会没有排名，顺序无关，因此用组合。分配不同职务或对名次排序时顺序有关，就要用排列。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the expansion of $(x + 1)^4$, what is the coefficient of $x^2$?",
        "zh": "在 $(x + 1)^4$ 的展开式中，$x^2$ 的系数是多少？"
      },
      "choices": [
        "12",
        "4",
        "6",
        "1"
      ],
      "answer": 2,
      "explanation": {
        "en": "The coefficient is $_4C_2 = 6$. Answering 4 uses $_4C_1$ (the coefficient of $x^3$) instead of the term for $x^2$.",
        "zh": "系数是 $_4C_2 = 6$。回答 4 用的是 $_4C_1$（即 $x^3$ 的系数），而不是 $x^2$ 项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many terms are in the expansion of $(a + b)^6$?",
        "zh": "$(a + b)^6$ 的展开式有多少项？"
      },
      "choices": [
        "6",
        "12",
        "5",
        "7"
      ],
      "answer": 3,
      "explanation": {
        "en": "The expansion of $(a+b)^n$ has $n + 1$ terms, so $6 + 1 = 7$. Answering 6 uses the exponent itself and forgets the extra term from the constant power.",
        "zh": "$(a+b)^n$ 的展开式有 $n + 1$ 项，所以 $6 + 1 = 7$。回答 6 用的是指数本身，忘了从零次幂产生的那一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A fair coin is flipped 4 times. What is the probability of exactly 2 heads?",
        "zh": "一枚均匀硬币抛 4 次。恰好出现 2 次正面的概率是多少？"
      },
      "choices": [
        "0.375",
        "0.25",
        "0.5",
        "0.125"
      ],
      "answer": 0,
      "explanation": {
        "en": "Use the binomial formula: $_4C_2 (0.5)^2 (0.5)^2 = 6 \\times \\frac{1}{16} = \\frac{6}{16} = 0.375$. Answering 0.5 ignores that '2 out of 4' is not simply one-half of the flips.",
        "zh": "用二项公式：$_4C_2 (0.5)^2 (0.5)^2 = 6 \\times \\frac{1}{16} = \\frac{6}{16} = 0.375$。回答 0.5 忽略了'4 次中的 2 次'并不等于抛掷数的一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A binomial experiment has $n = 20$ trials with success probability $p = 0.3$. What is the mean number of successes?",
        "zh": "一个二项试验有 $n = 20$ 次试验，成功概率 $p = 0.3$。成功次数的均值是多少？"
      },
      "choices": [
        "0.3",
        "6",
        "20",
        "3"
      ],
      "answer": 1,
      "explanation": {
        "en": "The mean of a binomial distribution is $np = 20 \\times 0.3 = 6$. Answering 3 or 0.3 forgets to multiply the probability by the number of trials.",
        "zh": "二项分布的均值是 $np = 20 \\times 0.3 = 6$。回答 3 或 0.3 是忘了把概率乘以试验次数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A basketball player makes each free throw with probability 0.8. What is the probability of making all 5 of 5 attempts?",
        "zh": "一名篮球运动员每次罚球命中的概率是 0.8。5 次罚球全部命中的概率是多少？"
      },
      "choices": [
        "0.8",
        "0.4",
        "0.328",
        "0.032"
      ],
      "answer": 2,
      "explanation": {
        "en": "All 5 made means $(0.8)^5 \\approx 0.328$. Answering 0.8 gives the chance of a single make and ignores that all five independent shots must succeed.",
        "zh": "5 次全部命中意味着 $(0.8)^5 \\approx 0.328$。回答 0.8 给出的是单次命中的概率，忽略了五次独立投篮都必须成功。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A binomial distribution has $n = 10$ and $p = 0.5$. What is its variance?",
        "zh": "一个二项分布有 $n = 10$，$p = 0.5$。它的方差是多少？"
      },
      "choices": [
        "5",
        "1.25",
        "10",
        "2.5"
      ],
      "answer": 3,
      "explanation": {
        "en": "Variance is $np(1-p) = 10 \\times 0.5 \\times 0.5 = 2.5$. Answering 5 reports the mean $np$ instead of the variance.",
        "zh": "方差是 $np(1-p) = 10 \\times 0.5 \\times 0.5 = 2.5$。回答 5 报告的是均值 $np$，而不是方差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A PIN is 4 digits long, each digit from 0 to 9, and digits may repeat. How many different PINs are possible?",
        "zh": "一个密码由 4 位数字组成，每位是 0 到 9 之间的数字，且数字可以重复。共有多少个不同的密码？"
      },
      "answer": "10000",
      "accept": [
        "10,000",
        "1e4",
        "10^4"
      ],
      "explanation": {
        "en": "By the counting principle each of the 4 positions has 10 choices: $10^4 = 10000$. Because repetition is allowed, do not reduce the choices at later positions.",
        "zh": "根据计数原理，4 个位置每个都有 10 种选择：$10^4 = 10000$。由于允许重复，后面位置的选择数不应减少。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $6!$ (6 factorial).",
        "zh": "计算 $6!$（6 的阶乘）。"
      },
      "answer": "720",
      "accept": [
        "720.0"
      ],
      "explanation": {
        "en": "$6! = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$. Multiply every whole number down to 1, not just the first few factors.",
        "zh": "$6! = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$。要把每个整数一直乘到 1，而不是只乘前几个因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the permutation $_8P_2$.",
        "zh": "计算排列 $_8P_2$。"
      },
      "answer": "56",
      "accept": [
        "56.0"
      ],
      "explanation": {
        "en": "$_8P_2 = 8 \\times 7 = 56$. Order matters here, so no division by a factorial is needed.",
        "zh": "$_8P_2 = 8 \\times 7 = 56$。这里顺序有关，因此不需要再除以阶乘。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the combination $_{10}C_3$.",
        "zh": "计算组合 $_{10}C_3$。"
      },
      "answer": "120",
      "accept": [
        "120.0"
      ],
      "explanation": {
        "en": "$_{10}C_3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120$. Remember to divide by $3!$ since order does not matter.",
        "zh": "$_{10}C_3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120$。记得除以 $3!$，因为顺序无关。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x + 2)^5$, what is the coefficient of $x^3$?",
        "zh": "在 $(x + 2)^5$ 的展开式中，$x^3$ 的系数是多少？"
      },
      "answer": "40",
      "accept": [
        "40.0"
      ],
      "explanation": {
        "en": "The term is $_5C_3 \\, x^3 \\, 2^2 = 10 \\times 4 = 40$. Do not forget the factor $2^2$ from the constant raised to the matching power.",
        "zh": "该项是 $_5C_3 \\, x^3 \\, 2^2 = 10 \\times 4 = 40$。不要忘了常数取相应幂次得到的因子 $2^2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A fair coin is flipped 3 times. What is the probability of exactly 2 heads? Give a decimal.",
        "zh": "一枚均匀硬币抛 3 次。恰好出现 2 次正面的概率是多少？用小数表示。"
      },
      "answer": "0.375",
      "accept": [
        "3/8",
        ".375",
        "0.3750",
        "37.5%"
      ],
      "explanation": {
        "en": "$_3C_2 (0.5)^3 = 3 \\times \\frac{1}{8} = \\frac{3}{8} = 0.375$. The factor $_3C_2 = 3$ accounts for the different positions the two heads can take.",
        "zh": "$_3C_2 (0.5)^3 = 3 \\times \\frac{1}{8} = \\frac{3}{8} = 0.375$。因子 $_3C_2 = 3$ 计入了两次正面可以出现的不同位置。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A binomial experiment has $n = 50$ trials with success probability $p = 0.2$. What is the mean number of successes?",
        "zh": "一个二项试验有 $n = 50$ 次试验，成功概率 $p = 0.2$。成功次数的均值是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "The mean is $np = 50 \\times 0.2 = 10$. Multiply the number of trials by the success probability.",
        "zh": "均值是 $np = 50 \\times 0.2 = 10$。用试验次数乘以成功概率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At a party of 6 people, everyone shakes hands with everyone else exactly once. How many handshakes occur?",
        "zh": "在一个 6 人的聚会上，每个人都与其他每个人恰好握手一次。一共发生了多少次握手？"
      },
      "answer": "15",
      "accept": [
        "15.0"
      ],
      "explanation": {
        "en": "A handshake is a pair with no order, so use $_6C_2 = \\frac{6 \\times 5}{2} = 15$. Using $6 \\times 5 = 30$ counts each handshake twice because it treats the two people as ordered.",
        "zh": "一次握手是无序的一对，所以用 $_6C_2 = \\frac{6 \\times 5}{2} = 15$。用 $6 \\times 5 = 30$ 会把每次握手数两遍，因为它把两个人当作有序的。"
      }
    }
  ],
  "data-statistics/normal-distributions-and-studies": [
    {
      "type": "mc",
      "question": {
        "en": "In the empirical (68-95-99.7) rule for a normal distribution, about what percent of data falls within 1 standard deviation of the mean?",
        "zh": "对于正态分布，根据经验法则（68-95-99.7 法则），大约有百分之多少的数据落在均值的 1 个标准差之内？"
      },
      "choices": [
        "68%",
        "50%",
        "95%",
        "99.7%"
      ],
      "answer": 0,
      "explanation": {
        "en": "The empirical rule states about 68% lies within 1 standard deviation, 95% within 2, and 99.7% within 3. Picking 95% confuses the 1-deviation band with the 2-deviation band.",
        "zh": "经验法则指出约 68% 落在 1 个标准差内，95% 落在 2 个标准差内，99.7% 落在 3 个标准差内。选 95% 是把 1 个标准差的范围与 2 个标准差的范围混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A dataset is normally distributed with mean $\\mu = 70$ and standard deviation $\\sigma = 5$. What interval captures about 95% of the values?",
        "zh": "某数据集服从正态分布，均值 $\\mu = 70$，标准差 $\\sigma = 5$。大约有 95% 的值落在哪个区间内？"
      },
      "choices": [
        "$[65, 75]$",
        "$[60, 80]$",
        "$[55, 85]$",
        "$[50, 90]$"
      ],
      "answer": 1,
      "explanation": {
        "en": "95% lies within 2 standard deviations: $70 \\pm 2(5) = [60, 80]$. Using only 1 standard deviation gives $[65, 75]$, which captures about 68%, not 95%.",
        "zh": "95% 落在 2 个标准差内：$70 \\pm 2(5) = [60, 80]$。只用 1 个标准差得到 $[65, 75]$，那只覆盖约 68%，不是 95%。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a value $x = 82$ from a distribution with mean $\\mu = 70$ and standard deviation $\\sigma = 8$, what is the z-score?",
        "zh": "某分布均值 $\\mu = 70$，标准差 $\\sigma = 8$，数值 $x = 82$ 的 z 分数是多少？"
      },
      "choices": [
        "$-1.5$",
        "$0.15$",
        "$1.5$",
        "$12$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The z-score is $z = \\frac{x - \\mu}{\\sigma} = \\frac{82 - 70}{8} = 1.5$. Getting $12$ means forgetting to divide by the standard deviation; a negative sign would mean $x$ is below the mean, but here $82 > 70$.",
        "zh": "z 分数为 $z = \\frac{x - \\mu}{\\sigma} = \\frac{82 - 70}{8} = 1.5$。得到 $12$ 说明忘了除以标准差；负号则表示 $x$ 低于均值，但这里 $82 > 70$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A z-score of $-2$ tells you that the data value is:",
        "zh": "z 分数为 $-2$ 说明该数据值："
      },
      "choices": [
        "2 standard deviations above the mean",
        "2 units below the mean",
        "at the mean",
        "2 standard deviations below the mean"
      ],
      "answer": 3,
      "explanation": {
        "en": "A negative z-score means the value is below the mean, and its magnitude is measured in standard deviations, so $-2$ is 2 standard deviations below the mean. Reading it as 2 raw units ignores that z-scores are scaled by $\\sigma$.",
        "zh": "负的 z 分数表示该值低于均值，其大小以标准差为单位，所以 $-2$ 表示低于均值 2 个标准差。把它当作 2 个原始单位则忽略了 z 分数是以 $\\sigma$ 为单位缩放的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the empirical rule, approximately what percent of a normal distribution lies ABOVE a value that is 1 standard deviation above the mean?",
        "zh": "利用经验法则，正态分布中大约有百分之多少落在'高于均值 1 个标准差'的值之上？"
      },
      "choices": [
        "16%",
        "68%",
        "84%",
        "32%"
      ],
      "answer": 0,
      "explanation": {
        "en": "About 68% lies within 1 standard deviation, leaving 32% in the two tails, split evenly, so each tail has 16%. The area above $+1\\sigma$ is one tail: 16%. Choosing 32% forgets to split the leftover between both tails.",
        "zh": "约 68% 落在 1 个标准差内，剩下 32% 分布在两个尾部，平均分配，每个尾部 16%。高于 $+1\\sigma$ 的部分是一个尾部：16%。选 32% 是忘了把剩余部分分到两个尾部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which study design is BEST for establishing that a new fertilizer CAUSES higher crop yield?",
        "zh": "要确立一种新肥料能'导致'作物产量提高，哪种研究设计最合适？"
      },
      "choices": [
        "An observational study",
        "A randomized controlled experiment",
        "A sample survey",
        "A census"
      ],
      "answer": 1,
      "explanation": {
        "en": "Only a randomized controlled experiment, which imposes treatments and randomly assigns groups, can support a cause-and-effect claim. An observational study only records what happens and can show association but not causation because of lurking variables.",
        "zh": "只有随机对照实验通过施加处理并随机分组，才能支持因果结论。观察性研究只记录发生的情况，由于存在潜在混杂变量，只能显示相关性而不能确立因果关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A researcher records the exercise habits and blood pressure of volunteers WITHOUT assigning any treatment. This is an example of:",
        "zh": "研究者在不施加任何处理的情况下记录志愿者的运动习惯和血压。这是一个："
      },
      "choices": [
        "A randomized trial",
        "An experiment",
        "An observational study",
        "A margin-of-error calculation"
      ],
      "answer": 2,
      "explanation": {
        "en": "Because the researcher only observes and measures existing behavior without imposing a treatment, this is an observational study. It would be an experiment only if the researcher actively assigned some people to exercise and others not.",
        "zh": "由于研究者只是观察和测量已有行为而没有施加处理，这是观察性研究。只有当研究者主动分配一些人运动、另一些人不运动时，才算实验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A polling company only calls landline telephones to survey opinions. This is most likely to cause:",
        "zh": "一家民调公司只拨打固定电话进行意见调查。这最可能造成："
      },
      "choices": [
        "A larger margin of error",
        "A perfectly random sample",
        "An increase in the mean",
        "Sampling bias"
      ],
      "answer": 3,
      "explanation": {
        "en": "Excluding cell-phone-only households systematically leaves out certain groups, producing sampling bias so the sample is not representative. This is a flaw in who is reached, not merely a matter of the margin of error, which describes random variation in a fair sample.",
        "zh": "只拨打固定电话会系统性地漏掉只用手机的家庭，导致抽样偏差，使样本不具代表性。这是'谁被覆盖到'的缺陷，而不仅是误差范围问题；误差范围描述的是公平样本中的随机波动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A survey estimates 52% support with a margin of error of $\\pm 3\\%$. Which statement is correct?",
        "zh": "一项调查估计支持率为 52%，误差范围为 $\\pm 3\\%$。哪种说法正确？"
      },
      "choices": [
        "The true support is plausibly between 49% and 55%",
        "Support is definitely exactly 52%",
        "The true support is between 46% and 58%",
        "The sample was biased"
      ],
      "answer": 0,
      "explanation": {
        "en": "The plausible interval is the estimate plus or minus the margin of error: $52\\% \\pm 3\\% = [49\\%, 55\\%]$. Doubling the margin to get $[46\\%, 58\\%]$ misapplies the $\\pm 3\\%$; the estimate is also not an exact certainty.",
        "zh": "合理区间为估计值加减误差范围：$52\\% \\pm 3\\% = [49\\%, 55\\%]$。把误差加倍得到 $[46\\%, 58\\%]$ 是错误使用了 $\\pm 3\\%$；估计值也并非绝对确定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As the sample size of a well-designed survey INCREASES, the margin of error typically:",
        "zh": "在设计良好的调查中，当样本量增大时，误差范围通常会："
      },
      "choices": [
        "Increases",
        "Decreases",
        "Stays exactly the same",
        "Becomes negative"
      ],
      "answer": 1,
      "explanation": {
        "en": "Larger samples give more precise estimates, so the margin of error decreases (it shrinks roughly with $1/\\sqrt{n}$). Thinking it increases confuses sample size with variability; a margin of error can never be negative.",
        "zh": "样本越大，估计越精确，因此误差范围减小（大致按 $1/\\sqrt{n}$ 缩小）。认为它增大是把样本量与波动性搞混了；误差范围永远不会是负数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Test scores are normally distributed with mean 500 and standard deviation 100. A score of 500 corresponds to which percentile?",
        "zh": "考试成绩服从正态分布，均值为 500，标准差为 100。成绩 500 对应第几百分位？"
      },
      "choices": [
        "The 25th percentile",
        "The 68th percentile",
        "The 50th percentile",
        "The 84th percentile"
      ],
      "answer": 2,
      "explanation": {
        "en": "A normal distribution is symmetric about its mean, so the mean sits exactly at the 50th percentile. Choosing the 84th percentile would be correct for a score one standard deviation above the mean (600), not for the mean itself.",
        "zh": "正态分布关于均值对称，因此均值恰好位于第 50 百分位。选第 84 百分位适用于高于均值一个标准差的成绩（600），而不是均值本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Heights are normally distributed with mean 160 cm and standard deviation 6 cm. Using the empirical rule, about what percent of people are BETWEEN 154 cm and 172 cm?",
        "zh": "身高服从正态分布，均值 160 cm，标准差 6 cm。利用经验法则，大约有百分之多少的人身高在 154 cm 到 172 cm 之间？"
      },
      "choices": [
        "49.85%",
        "68%",
        "95%",
        "81.5%"
      ],
      "answer": 3,
      "explanation": {
        "en": "154 is $-1\\sigma$ and 172 is $+2\\sigma$. The area is 34% (from $-1\\sigma$ to mean) plus 47.5% (from mean to $+2\\sigma$) = 81.5%. Answering 68% ignores that the two sides use different numbers of standard deviations.",
        "zh": "154 是 $-1\\sigma$，172 是 $+2\\sigma$。面积为 34%（$-1\\sigma$ 到均值）加 47.5%（均值到 $+2\\sigma$）= 81.5%。答 68% 忽略了两边使用的标准差个数不同。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A normal distribution has mean $\\mu = 50$ and standard deviation $\\sigma = 4$. What is the z-score of the value $x = 58$?",
        "zh": "正态分布均值 $\\mu = 50$，标准差 $\\sigma = 4$。数值 $x = 58$ 的 z 分数是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "2.00",
        "z=2"
      ],
      "explanation": {
        "en": "$z = \\frac{x - \\mu}{\\sigma} = \\frac{58 - 50}{4} = \\frac{8}{4} = 2$. Forgetting to divide by $\\sigma$ would wrongly give 8.",
        "zh": "$z = \\frac{x - \\mu}{\\sigma} = \\frac{58 - 50}{4} = \\frac{8}{4} = 2$。忘记除以 $\\sigma$ 会错误地得到 8。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "According to the empirical rule, what percent of a normal distribution falls within 3 standard deviations of the mean? (Give the number only, e.g. 68)",
        "zh": "根据经验法则，正态分布中有百分之多少落在均值的 3 个标准差之内？（只写数字，例如 68）"
      },
      "answer": "99.7",
      "accept": [
        "99.7%",
        "99.70",
        "99.7 percent",
        "0.997"
      ],
      "explanation": {
        "en": "The empirical rule gives 68%, 95%, and 99.7% for 1, 2, and 3 standard deviations. Nearly all data (99.7%) lies within 3; answering 95% uses the 2-deviation band instead.",
        "zh": "经验法则对 1、2、3 个标准差分别给出 68%、95%、99.7%。几乎全部数据（99.7%）落在 3 个标准差内；答 95% 用的是 2 个标准差的范围。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Scores are normally distributed with mean 200 and standard deviation 25. Within what value ABOVE the mean does a score lie if it is exactly 2 standard deviations above the mean? (Give the score.)",
        "zh": "成绩服从正态分布，均值 200，标准差 25。若某成绩恰好高于均值 2 个标准差，该成绩是多少？"
      },
      "answer": "250",
      "accept": [
        "250.0",
        "250.00"
      ],
      "explanation": {
        "en": "Two standard deviations above the mean is $200 + 2(25) = 200 + 50 = 250$. Adding only one standard deviation would give 225.",
        "zh": "高于均值 2 个标准差为 $200 + 2(25) = 200 + 50 = 250$。只加一个标准差会得到 225。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A normal distribution has mean 75. By symmetry, what percent of the data lies BELOW the mean? (Number only.)",
        "zh": "正态分布均值为 75。由对称性，有百分之多少的数据低于均值？（只写数字。）"
      },
      "answer": "50",
      "accept": [
        "50%",
        "50.0",
        "0.5",
        "half"
      ],
      "explanation": {
        "en": "A normal curve is symmetric about its mean, so exactly half (50%) lies below the mean. Using an empirical-rule number like 68 confuses the whole lower half with a within-deviation band.",
        "zh": "正态曲线关于均值对称，因此恰好一半（50%）低于均值。用经验法则里的 68 之类的数字，是把整个下半部分与'某个标准差范围内'混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A value has z-score $z = -1$ in a distribution with mean 60 and standard deviation 7. What is the original value $x$?",
        "zh": "在均值 60、标准差 7 的分布中，某值的 z 分数为 $z = -1$。原始值 $x$ 是多少？"
      },
      "answer": "53",
      "accept": [
        "53.0",
        "53.00"
      ],
      "explanation": {
        "en": "Rearranging $z = \\frac{x-\\mu}{\\sigma}$ gives $x = \\mu + z\\sigma = 60 + (-1)(7) = 53$. Adding instead of subtracting (using $+1$) would wrongly give 67.",
        "zh": "由 $z = \\frac{x-\\mu}{\\sigma}$ 变形得 $x = \\mu + z\\sigma = 60 + (-1)(7) = 53$。若加而不是减（用 $+1$）会错误地得到 67。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A poll reports 46% approval with a margin of error of $\\pm 4\\%$. What is the LOWER end of the plausible range for true approval? (Give the percent number only.)",
        "zh": "一项民调报告支持率为 46%，误差范围为 $\\pm 4\\%$。真实支持率合理区间的下限是多少？（只写百分数数字。）"
      },
      "answer": "42",
      "accept": [
        "42%",
        "42.0",
        "42 percent"
      ],
      "explanation": {
        "en": "The lower end is estimate minus margin of error: $46\\% - 4\\% = 42\\%$. Subtracting twice the margin (getting 38) misuses the $\\pm 4\\%$.",
        "zh": "下限为估计值减误差范围：$46\\% - 4\\% = 42\\%$。减去两倍误差（得 38）是错误使用了 $\\pm 4\\%$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a study, 200 patients are randomly split into a group that gets a new drug and a group that gets a placebo, then outcomes are compared. What one word names this type of study (the design that can show causation)?",
        "zh": "在一项研究中，200 名患者被随机分为服用新药组和服用安慰剂组，然后比较结果。这种能显示因果关系的研究设计叫什么？（一个词）"
      },
      "answer": "experiment",
      "accept": [
        "Experiment",
        "an experiment",
        "randomized experiment",
        "controlled experiment",
        "实验",
        "随机对照实验",
        "对照实验"
      ],
      "explanation": {
        "en": "Randomly assigning subjects to treatment and placebo groups and imposing the treatment defines an experiment, which can support causal conclusions. Merely watching who chose the drug would instead be an observational study.",
        "zh": "将受试者随机分配到处理组和安慰剂组并施加处理，这就是实验，能支持因果结论。若只是观察谁选择了服药，则属于观察性研究。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Heights follow a normal distribution with mean 170 cm and standard deviation 8 cm. Using the empirical rule, about what percent of people are TALLER than 178 cm? (Number only.)",
        "zh": "身高服从正态分布，均值 170 cm，标准差 8 cm。利用经验法则，大约有百分之多少的人身高超过 178 cm？（只写数字。）"
      },
      "answer": "16",
      "accept": [
        "16%",
        "16.0",
        "0.16"
      ],
      "explanation": {
        "en": "178 cm is $+1\\sigma$. About 68% lies within $1\\sigma$, so 32% is in the two tails; the upper tail above $+1\\sigma$ is half of that, 16%. Answering 32% forgets to take only the one upper tail.",
        "zh": "178 cm 是 $+1\\sigma$。约 68% 落在 $1\\sigma$ 内，故 32% 在两个尾部；高于 $+1\\sigma$ 的上尾是其一半，即 16%。答 32% 是忘了只取一个上尾。"
      }
    }
  ]
};
