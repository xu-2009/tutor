export default {
  "quantities-linear-relationships/quantities-units-and-expressions": [
    {
      "type": "mc",
      "question": {
        "en": "Convert 2.5 hours to minutes.",
        "zh": "将 2.5 小时换算成分钟。"
      },
      "choices": [
        "150 min",
        "120 min",
        "90 min",
        "300 min"
      ],
      "answer": 0,
      "explanation": {
        "en": "There are 60 minutes in 1 hour, so $2.5 \\times 60 = 150$ minutes. A value like 90 comes from multiplying by 36 or mis-tracking the conversion factor; multiplying by the correct factor 60 is essential.",
        "zh": "1 小时有 60 分钟，所以 $2.5 \\times 60 = 150$ 分钟。得到 90 之类的结果是因为用错了换算因数；必须乘以正确的因数 60。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert 4500 meters to kilometers.",
        "zh": "将 4500 米换算成千米。"
      },
      "choices": [
        "45 km",
        "4.5 km",
        "0.45 km",
        "450 km"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since 1 km = 1000 m, divide: $4500 \\div 1000 = 4.5$ km. Multiplying by 1000 instead of dividing gives a value far too large; converting to a larger unit makes the number smaller.",
        "zh": "因为 1 千米 = 1000 米，所以要除：$4500 \\div 1000 = 4.5$ 千米。若乘以 1000 而不是除，结果会大得离谱；换算成更大的单位时数字应变小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car travels 60 miles in 1.5 hours. What is its average speed?",
        "zh": "一辆车在 1.5 小时内行驶了 60 英里。它的平均速度是多少？"
      },
      "choices": [
        "90 mph",
        "45 mph",
        "40 mph",
        "30 mph"
      ],
      "answer": 2,
      "explanation": {
        "en": "Average speed is distance divided by time: $60 \\div 1.5 = 40$ mph. Multiplying $60 \\times 1.5 = 90$ reverses the operation; speed uses distance per unit time, so you divide.",
        "zh": "平均速度等于路程除以时间：$60 \\div 1.5 = 40$ 英里/小时。用 $60 \\times 1.5 = 90$ 把运算方向弄反了；速度是单位时间内的路程，所以要用除法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression has units of area?",
        "zh": "下列哪个表达式的单位是面积？"
      },
      "choices": [
        "distance ÷ time",
        "mass × time",
        "length + width",
        "length × width"
      ],
      "answer": 3,
      "explanation": {
        "en": "Area is a length multiplied by a length, giving square units (like $\\text{m}^2$). Adding two lengths keeps a single length unit, and distance over time gives speed, not area.",
        "zh": "面积是长度乘以长度，得到平方单位（如 $\\text{m}^2$）。两个长度相加仍是长度单位，而路程除以时间得到的是速度而非面积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A plumber charges by the formula $C = 15n + 40$, where $n$ is the number of hours worked. What does the 40 represent?",
        "zh": "一位水管工按公式 $C = 15n + 40$ 收费，其中 $n$ 是工作小时数。式中的 40 代表什么？"
      },
      "choices": [
        "a fixed base fee charged no matter the time",
        "the number of hours",
        "the total cost",
        "the cost per hour"
      ],
      "answer": 0,
      "explanation": {
        "en": "The 40 is the constant term, added even when $n = 0$, so it is a fixed base (service-call) fee. The 15 is the amount that grows with each hour, so treating 40 as the hourly rate confuses the constant with the rate of change.",
        "zh": "40 是常数项，即使 $n = 0$ 也要加上，所以它是固定的基础（上门）费用。15 才是随每小时增长的量，把 40 当作每小时费率就混淆了常数与变化率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To convert a measurement in meters to centimeters, what should you multiply by?",
        "zh": "要把以米为单位的测量值换算成厘米，应该乘以多少？"
      },
      "choices": [
        "10",
        "100",
        "1000",
        "0.01"
      ],
      "answer": 1,
      "explanation": {
        "en": "There are 100 centimeters in 1 meter, so multiply by 100. Using 1000 is the meter-to-millimeter factor, and multiplying by 0.01 would shrink a larger unit into a smaller-numbered one, which is backwards.",
        "zh": "1 米有 100 厘米，所以乘以 100。用 1000 是米换算成毫米的因数，而乘以 0.01 会把数字变小，方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A digital scale weighs a known 5.0 g mass five times and reads 3.2 g every time. How would you describe this scale?",
        "zh": "一台电子秤称量一个已知 5.0 克的物体五次，每次都读数 3.2 克。该如何描述这台秤？"
      },
      "choices": [
        "accurate and precise",
        "accurate but not precise",
        "precise but not accurate",
        "neither accurate nor precise"
      ],
      "answer": 2,
      "explanation": {
        "en": "The readings agree closely with each other (precise) but miss the true 5.0 g value (not accurate). Calling it accurate ignores the consistent 1.8 g error; consistency and closeness-to-truth are two different ideas.",
        "zh": "多次读数彼此非常接近（精密），但都偏离真实值 5.0 克（不准确）。称它准确就忽视了持续 1.8 克的误差；一致性与接近真值是两个不同的概念。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You want to graph city-to-city distances that range from 200 to 800 miles. Which axis scale is most appropriate?",
        "zh": "你要绘制范围在 200 到 800 英里之间的城市间距离图。哪种坐标轴刻度最合适？"
      },
      "choices": [
        "increments of 1",
        "increments of 5",
        "increments of 1000",
        "increments of 100"
      ],
      "answer": 3,
      "explanation": {
        "en": "Increments of 100 spread the 200-to-800 range across a readable number of gridlines. Increments of 1 would need hundreds of lines, and increments of 1000 are larger than the whole range, so the data would not spread out at all.",
        "zh": "以 100 为刻度可以把 200 到 800 的范围分成便于阅读的若干格。以 1 为刻度需要几百条网格线，而以 1000 为刻度比整个范围还大，数据完全无法展开。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert 2 liters to milliliters.",
        "zh": "将 2 升换算成毫升。"
      },
      "choices": [
        "2000 mL",
        "200 mL",
        "20 mL",
        "0.002 mL"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since 1 L = 1000 mL, multiply: $2 \\times 1000 = 2000$ mL. Using only 100 or 10 as the factor undercounts; a liter contains one thousand milliliters.",
        "zh": "因为 1 升 = 1000 毫升，所以要乘：$2 \\times 1000 = 2000$ 毫升。只用 100 或 10 作因数会算少；1 升含有一千毫升。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these length measurements is the most precise?",
        "zh": "下列哪个长度测量值最精密？"
      },
      "choices": [
        "12.3 cm",
        "12.34 cm",
        "12 cm",
        "10 cm"
      ],
      "answer": 1,
      "explanation": {
        "en": "Precision increases with more decimal places recorded; 12.34 cm is measured to the nearest hundredth. Choosing 12 cm treats a rounder-looking number as better, but fewer decimal places means less precision.",
        "zh": "记录的小数位越多，精密度越高；12.34 厘米精确到百分位。选 12 厘米是把看起来更整的数字当作更好，但小数位越少精密度越低。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A recipe for 4 people uses 6 eggs. Keeping the same ratio, how many eggs are needed for 6 people?",
        "zh": "一份供 4 人食用的食谱用 6 个鸡蛋。按相同比例，供 6 人食用需要多少个鸡蛋？"
      },
      "choices": [
        "6 eggs",
        "8 eggs",
        "9 eggs",
        "12 eggs"
      ],
      "answer": 2,
      "explanation": {
        "en": "The ratio is $6 \\div 4 = 1.5$ eggs per person, so $1.5 \\times 6 = 9$ eggs. Adding 2 eggs to match 2 extra people ignores that the rate is 1.5 eggs each, not 1.",
        "zh": "比例是 $6 \\div 4 = 1.5$ 个鸡蛋每人，所以 $1.5 \\times 6 = 9$ 个鸡蛋。多 2 人就加 2 个鸡蛋忽略了每人是 1.5 个而不是 1 个的速率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A store sells 3 pounds of apples for $12. What is the unit price per pound?",
        "zh": "一家商店卖 3 磅苹果售价 12 美元。每磅的单价是多少？"
      },
      "choices": [
        "$3",
        "$36",
        "$5",
        "$4"
      ],
      "answer": 3,
      "explanation": {
        "en": "Unit price is total cost divided by amount: $12 \\div 3 = \\$4$ per pound. Multiplying $12 \\times 3 = 36$ gives the cost of 3 more batches, not the per-pound rate; a unit rate always divides by the quantity.",
        "zh": "单价是总价除以数量：$12 \\div 3 = \\$4$ 每磅。用 $12 \\times 3 = 36$ 算出的是更多批次的总价而非每磅单价；单位比率总是要除以数量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert 3.5 kilometers to meters. (Give the number of meters.)",
        "zh": "将 3.5 千米换算成米。（给出米数。）"
      },
      "answer": "3500",
      "accept": [
        "3500 m",
        "3500m",
        "3500.0",
        "3,500"
      ],
      "explanation": {
        "en": "Since 1 km = 1000 m, multiply: $3.5 \\times 1000 = 3500$ m. Converting to a smaller unit makes the number larger.",
        "zh": "因为 1 千米 = 1000 米，所以要乘：$3.5 \\times 1000 = 3500$ 米。换算成更小的单位时数字应变大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert 250 centimeters to meters. (Give the number of meters.)",
        "zh": "将 250 厘米换算成米。（给出米数。）"
      },
      "answer": "2.5",
      "accept": [
        "2.50",
        "5/2",
        "2.5 m",
        "2.5m"
      ],
      "explanation": {
        "en": "Since 100 cm = 1 m, divide: $250 \\div 100 = 2.5$ m. Converting to a larger unit makes the number smaller.",
        "zh": "因为 100 厘米 = 1 米，所以要除：$250 \\div 100 = 2.5$ 米。换算成更大的单位时数字应变小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car travels 150 miles using 5 gallons of gas. What is its fuel economy in miles per gallon?",
        "zh": "一辆车用 5 加仑汽油行驶了 150 英里。它的燃油效率是多少英里每加仑？"
      },
      "answer": "30",
      "accept": [
        "30 mpg",
        "30.0",
        "30mpg"
      ],
      "explanation": {
        "en": "Miles per gallon is distance divided by fuel: $150 \\div 5 = 30$ mpg. The word 'per' signals division of the two quantities.",
        "zh": "英里每加仑等于路程除以油量：$150 \\div 5 = 30$ 英里/加仑。'每'字表示两个量相除。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert 90 minutes to hours. (Give the number of hours.)",
        "zh": "将 90 分钟换算成小时。（给出小时数。）"
      },
      "answer": "1.5",
      "accept": [
        "1.50",
        "3/2",
        "1.5 hours",
        "1.5 h"
      ],
      "explanation": {
        "en": "Since 60 min = 1 hour, divide: $90 \\div 60 = 1.5$ hours. Converting to the larger unit (hours) gives a smaller number.",
        "zh": "因为 60 分钟 = 1 小时，所以要除：$90 \\div 60 = 1.5$ 小时。换算成更大的单位（小时）时数字变小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the area formula $A = lw$, a rectangle has area 24 square units and length 6 units. What is its width?",
        "zh": "在面积公式 $A = lw$ 中，一个矩形的面积为 24 平方单位，长为 6 单位。它的宽是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 units"
      ],
      "explanation": {
        "en": "Solve $24 = 6w$ by dividing both sides by 6: $w = 4$. The width is found by dividing area by length, not by subtracting.",
        "zh": "由 $24 = 6w$ 两边同除以 6：$w = 4$。宽是用面积除以长求得，而不是相减。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert 5000 grams to kilograms. (Give the number of kilograms.)",
        "zh": "将 5000 克换算成千克。（给出千克数。）"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5 kg",
        "5kg"
      ],
      "explanation": {
        "en": "Since 1000 g = 1 kg, divide: $5000 \\div 1000 = 5$ kg. Converting to a larger unit makes the number smaller.",
        "zh": "因为 1000 克 = 1 千克，所以要除：$5000 \\div 1000 = 5$ 千克。换算成更大的单位时数字变小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "On a map, 1 inch represents 50 miles. How many miles does 3.5 inches represent?",
        "zh": "在一幅地图上，1 英寸代表 50 英里。3.5 英寸代表多少英里？"
      },
      "answer": "175",
      "accept": [
        "175 mi",
        "175 miles",
        "175.0"
      ],
      "explanation": {
        "en": "Multiply by the scale factor: $3.5 \\times 50 = 175$ miles. Each inch stands for 50 miles, so scale up by the number of inches.",
        "zh": "乘以比例因数：$3.5 \\times 50 = 175$ 英里。每英寸代表 50 英里，所以按英寸数放大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A train travels 240 kilometers in 3 hours. What is its average speed in kilometers per hour?",
        "zh": "一列火车在 3 小时内行驶了 240 千米。它的平均速度是多少千米每小时？"
      },
      "answer": "80",
      "accept": [
        "80 km/h",
        "80.0",
        "80 kph"
      ],
      "explanation": {
        "en": "Speed is distance divided by time: $240 \\div 3 = 80$ km/h. The unit 'kilometers per hour' tells you to divide kilometers by hours.",
        "zh": "速度等于路程除以时间：$240 \\div 3 = 80$ 千米/小时。'千米每小时'这个单位提示要用千米除以小时。"
      }
    }
  ],
  "quantities-linear-relationships/linear-equations-and-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $2x + 5 = 13$.",
        "zh": "解方程 $2x + 5 = 13$。"
      },
      "choices": [
        "4",
        "3",
        "6",
        "9"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract 5 from both sides to get $2x = 8$, then divide by 2 to get $x = 4$. Getting 9 comes from subtracting 5 but forgetting to divide by the coefficient 2.",
        "zh": "两边减 5 得到 $2x = 8$，再除以 2 得到 $x = 4$。得到 9 是因为减了 5 却忘了除以系数 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $3x - 7 = 8$.",
        "zh": "解方程 $3x - 7 = 8$。"
      },
      "choices": [
        "1",
        "5",
        "3",
        "15"
      ],
      "answer": 1,
      "explanation": {
        "en": "Add 7 to both sides to get $3x = 15$, then divide by 3 to get $x = 5$. Stopping at 15 skips the final step of dividing by the coefficient 3.",
        "zh": "两边加 7 得到 $3x = 15$，再除以 3 得到 $x = 5$。停在 15 就漏掉了最后除以系数 3 这一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $-2x = 10$.",
        "zh": "解方程 $-2x = 10$。"
      },
      "choices": [
        "-20",
        "5",
        "-5",
        "-8"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide both sides by $-2$: $x = 10 \\div (-2) = -5$. Dividing by 2 while ignoring the negative sign gives the wrong sign; the coefficient is $-2$, not 2.",
        "zh": "两边除以 $-2$：$x = 10 \\div (-2) = -5$。只除以 2 而忽略负号会得到错误的符号；系数是 $-2$ 而不是 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the inequality: $x + 3 < 7$.",
        "zh": "解不等式 $x + 3 < 7$。"
      },
      "choices": [
        "$x > 4$",
        "$x < 10$",
        "$x > 10$",
        "$x < 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Subtract 3 from both sides: $x < 4$. The direction of the sign stays the same because we only subtracted a positive number; adding 3 instead of subtracting produces the incorrect bound of 10.",
        "zh": "两边减 3：$x < 4$。因为只是减去一个正数，不等号方向不变；把 3 加上而不是减去会得到错误的界限 10。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the inequality: $-3x > 12$.",
        "zh": "解不等式 $-3x > 12$。"
      },
      "choices": [
        "$x < -4$",
        "$x > -4$",
        "$x < 4$",
        "$x > 4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Divide both sides by $-3$, and because you divide by a negative you must flip the inequality: $x < -4$. Keeping the sign as $>$ is the classic mistake when dividing by a negative number.",
        "zh": "两边除以 $-3$，由于除以负数必须翻转不等号：$x < -4$。除以负数时仍保留 $>$ 是最典型的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A number is tripled and then increased by 4, giving 19. What is the number?",
        "zh": "一个数先乘以 3，再加上 4，结果为 19。这个数是多少？"
      },
      "choices": [
        "7",
        "5",
        "15",
        "23"
      ],
      "answer": 1,
      "explanation": {
        "en": "Write $3n + 4 = 19$, subtract 4 to get $3n = 15$, then divide by 3 to get $n = 5$. Adding 4 to 19 instead of subtracting undoes the operation in the wrong direction.",
        "zh": "列出 $3n + 4 = 19$，减 4 得到 $3n = 15$，再除以 3 得到 $n = 5$。把 4 加到 19 上而不是减去，就把运算方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $5(x - 2) = 15$.",
        "zh": "解方程 $5(x - 2) = 15$。"
      },
      "choices": [
        "1",
        "3",
        "5",
        "13"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide both sides by 5 to get $x - 2 = 3$, then add 2 to get $x = 5$. Distributing wrong or forgetting to add the 2 back leads to a value like 3.",
        "zh": "两边除以 5 得到 $x - 2 = 3$，再加 2 得到 $x = 5$。分配律用错或忘了把 2 加回来会得到 3 之类的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $2x + 3 = x + 9$.",
        "zh": "解方程 $2x + 3 = x + 9$。"
      },
      "choices": [
        "2",
        "4",
        "12",
        "6"
      ],
      "answer": 3,
      "explanation": {
        "en": "Subtract $x$ from both sides to get $x + 3 = 9$, then subtract 3 to get $x = 6$. Combining the variables into $3x$ instead of subtracting $x$ leads to an incorrect answer.",
        "zh": "两边减 $x$ 得到 $x + 3 = 9$，再减 3 得到 $x = 6$。把变量错误地合并成 $3x$ 而不是减去一个 $x$，会导致答案出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $4x + 1 = 2x + 9$.",
        "zh": "解方程 $4x + 1 = 2x + 9$。"
      },
      "choices": [
        "4",
        "5",
        "2",
        "8"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract $2x$ from both sides to get $2x + 1 = 9$, subtract 1 to get $2x = 8$, then divide by 2 to get $x = 4$. Stopping at $2x = 8$ and reporting 8 skips the final division by 2.",
        "zh": "两边减 $2x$ 得到 $2x + 1 = 9$，减 1 得到 $2x = 8$，再除以 2 得到 $x = 4$。停在 $2x = 8$ 就报 8，漏掉了最后除以 2 这一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You have $50 to spend on concert tickets that cost $8 each. What is the greatest number of tickets you can buy?",
        "zh": "你有 50 美元用来买每张 8 美元的演唱会门票。你最多能买多少张？"
      },
      "choices": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 1,
      "explanation": {
        "en": "Solve $8t \\le 50$ to get $t \\le 6.25$; since tickets are whole, the most you can buy is 6. Rounding 6.25 up to 7 would cost $56, which is more than $50.",
        "zh": "解 $8t \\le 50$ 得到 $t \\le 6.25$；因为门票是整数，最多能买 6 张。把 6.25 向上取整成 7 需要 56 美元，超过了 50 美元。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When you multiply or divide both sides of an inequality by a negative number, what must you do?",
        "zh": "当你给不等式两边同乘或同除一个负数时，必须怎么做？"
      },
      "choices": [
        "keep the sign the same",
        "add the number to both sides",
        "reverse the inequality sign",
        "switch the variables"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying or dividing by a negative reverses the order of the numbers, so the inequality sign must flip (for example $<$ becomes $>$). Keeping the sign the same is the most common error with negative coefficients.",
        "zh": "乘或除以负数会颠倒数的大小顺序，所以不等号必须翻转（例如 $<$ 变成 $>$）。保持不等号方向不变是负系数时最常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $0.5x = 3$.",
        "zh": "解方程 $0.5x = 3$。"
      },
      "choices": [
        "1.5",
        "0.16",
        "3",
        "6"
      ],
      "answer": 3,
      "explanation": {
        "en": "Divide both sides by 0.5 (the same as multiplying by 2): $x = 6$. Multiplying $3 \\times 0.5 = 1.5$ instead of dividing undoes the coefficient in the wrong direction.",
        "zh": "两边除以 0.5（相当于乘以 2）：$x = 6$。用 $3 \\times 0.5 = 1.5$ 相乘而不是相除，就把系数处理反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$: $3x + 6 = 21$.",
        "zh": "解方程 $3x + 6 = 21$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "x=5",
        "x = 5"
      ],
      "explanation": {
        "en": "Subtract 6 to get $3x = 15$, then divide by 3 to get $x = 5$.",
        "zh": "减 6 得到 $3x = 15$，再除以 3 得到 $x = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$: $7 - 2x = 1$.",
        "zh": "解方程 $7 - 2x = 1$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "x=3",
        "x = 3"
      ],
      "explanation": {
        "en": "Subtract 7 to get $-2x = -6$, then divide by $-2$ to get $x = 3$. The two negatives divide to a positive result.",
        "zh": "减 7 得到 $-2x = -6$，再除以 $-2$ 得到 $x = 3$。两个负数相除得到正结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$: $\\frac{x}{5} + 2 = 6$.",
        "zh": "解方程 $\\frac{x}{5} + 2 = 6$。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "x=20",
        "x = 20"
      ],
      "explanation": {
        "en": "Subtract 2 to get $\\frac{x}{5} = 4$, then multiply both sides by 5 to get $x = 20$.",
        "zh": "减 2 得到 $\\frac{x}{5} = 4$，再两边乘以 5 得到 $x = 20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$: $4(x + 3) = 28$.",
        "zh": "解方程 $4(x + 3) = 28$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "x=4",
        "x = 4"
      ],
      "explanation": {
        "en": "Divide both sides by 4 to get $x + 3 = 7$, then subtract 3 to get $x = 4$.",
        "zh": "两边除以 4 得到 $x + 3 = 7$，再减 3 得到 $x = 4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve the inequality and write your answer in the form x >= number: $2x - 5 \\ge 9$.",
        "zh": "解不等式，并以 x >= 数 的形式写出答案：$2x - 5 \\ge 9$。"
      },
      "answer": "x>=7",
      "accept": [
        "x >= 7",
        "x ≥ 7",
        "x≥7",
        "7",
        "x>= 7",
        "x >=7"
      ],
      "explanation": {
        "en": "Add 5 to both sides to get $2x \\ge 14$, then divide by the positive number 2, keeping the sign: $x \\ge 7$.",
        "zh": "两边加 5 得到 $2x \\ge 14$，再除以正数 2，不等号方向不变：$x \\ge 7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The perimeter of a rectangle is 30 units and its length is 9 units. What is its width?",
        "zh": "一个矩形的周长为 30 单位，长为 9 单位。它的宽是多少？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 units"
      ],
      "explanation": {
        "en": "Use $P = 2(l + w)$: $30 = 2(9 + w)$, so $15 = 9 + w$ and $w = 6$.",
        "zh": "用 $P = 2(l + w)$：$30 = 2(9 + w)$，所以 $15 = 9 + w$，得 $w = 6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Twice a number, decreased by 8, equals 10. What is the number?",
        "zh": "一个数的 2 倍减去 8 等于 10。这个数是多少？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "n=9",
        "n = 9"
      ],
      "explanation": {
        "en": "Write $2n - 8 = 10$, add 8 to get $2n = 18$, then divide by 2 to get $n = 9$.",
        "zh": "列出 $2n - 8 = 10$，加 8 得到 $2n = 18$，再除以 2 得到 $n = 9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$: $-5x + 2 = -13$.",
        "zh": "解方程 $-5x + 2 = -13$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "x=3",
        "x = 3"
      ],
      "explanation": {
        "en": "Subtract 2 to get $-5x = -15$, then divide by $-5$ to get $x = 3$.",
        "zh": "减 2 得到 $-5x = -15$，再除以 $-5$ 得到 $x = 3$。"
      }
    }
  ],
  "linear-functions/functions-and-notation": [
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=2x+3$, find $f(4)$.",
        "zh": "若 $f(x)=2x+3$，求 $f(4)$。"
      },
      "choices": [
        "$11$",
        "$24$",
        "$14$",
        "$8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Substitute $4$ for $x$: $f(4)=2(4)+3=8+3=11$. A common slip is grouping first and computing $2(4+3)=14$; multiplication of $2\\cdot x$ must happen before adding the $3$.",
        "zh": "把 $x$ 代成 $4$：$f(4)=2(4)+3=8+3=11$。常见错误是先加括号算成 $2(4+3)=14$；应先算 $2\\cdot x$ 再加 $3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which relation is a function?",
        "zh": "下列哪个关系是函数？"
      },
      "choices": [
        "$\\{(1,2),(1,3),(2,4)\\}$",
        "$\\{(1,2),(2,3),(3,4)\\}$",
        "$\\{(2,5),(2,6),(3,7)\\}$",
        "$\\{(0,1),(1,1),(0,2)\\}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A function assigns each input exactly one output. Only the set where every first coordinate appears once qualifies. Sets where an input like $1$, $2$, or $0$ is paired with two different outputs violate the definition.",
        "zh": "函数要求每个输入只对应一个输出。只有第一坐标都不重复的那组符合。若某个输入（如 $1$、$2$ 或 $0$）配了两个不同的输出，就违反了函数的定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a graph passes the vertical line test, what does that tell you?",
        "zh": "如果一个图像通过了垂直线检验，这说明什么？"
      },
      "choices": [
        "The graph is a straight line",
        "The graph has a positive slope",
        "The graph represents a function",
        "The graph is symmetric"
      ],
      "answer": 2,
      "explanation": {
        "en": "Passing the vertical line test means no vertical line hits the graph more than once, so each $x$ has one $y$ — the graph is a function. It says nothing about being straight, sloped a certain way, or symmetric.",
        "zh": "通过垂直线检验意味着任何一条垂直线与图像至多相交一次，即每个 $x$ 只有一个 $y$，因此图像表示函数。它并不说明图像是直线、斜率正负或是否对称。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2-1$, find $f(-3)$.",
        "zh": "若 $f(x)=x^2-1$，求 $f(-3)$。"
      },
      "choices": [
        "$-10$",
        "$10$",
        "$-8$",
        "$8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(-3)^2=9$, so $f(-3)=9-1=8$. Squaring a negative gives a positive; treating $(-3)^2$ as $-9$ and getting $-10$ is a common sign error.",
        "zh": "$(-3)^2=9$，所以 $f(-3)=9-1=8$。负数平方为正；若把 $(-3)^2$ 误当成 $-9$ 从而得到 $-10$，这是常见的符号错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of the relation $\\{(1,4),(2,5),(3,6)\\}$?",
        "zh": "关系 $\\{(1,4),(2,5),(3,6)\\}$ 的定义域是什么？"
      },
      "choices": [
        "$\\{1,2,3\\}$",
        "$\\{1,2,3,4,5,6\\}$",
        "$\\{1,4\\}$",
        "$\\{4,5,6\\}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The domain is the set of inputs (first coordinates): $\\{1,2,3\\}$. Listing the second coordinates $\\{4,5,6\\}$ instead confuses the range with the domain.",
        "zh": "定义域是所有输入（第一坐标）的集合：$\\{1,2,3\\}$。若列出第二坐标 $\\{4,5,6\\}$，则是把值域误当成了定义域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of the relation $\\{(1,4),(2,5),(3,6)\\}$?",
        "zh": "关系 $\\{(1,4),(2,5),(3,6)\\}$ 的值域是什么？"
      },
      "choices": [
        "$\\{1,2,3\\}$",
        "$\\{4,5,6\\}$",
        "$\\{4,6\\}$",
        "$\\{1,4\\}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The range is the set of outputs (second coordinates): $\\{4,5,6\\}$. Listing the inputs $\\{1,2,3\\}$ instead gives the domain, not the range.",
        "zh": "值域是所有输出（第二坐标）的集合：$\\{4,5,6\\}$。若列出输入 $\\{1,2,3\\}$，那是定义域而非值域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=3x-5$, find $f(0)$.",
        "zh": "若 $f(x)=3x-5$，求 $f(0)$。"
      },
      "choices": [
        "$0$",
        "$5$",
        "$-5$",
        "$3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$f(0)=3(0)-5=0-5=-5$. The $3x$ term becomes $0$ when $x=0$, but the constant $-5$ remains; answering $0$ forgets that constant.",
        "zh": "$f(0)=3(0)-5=0-5=-5$。当 $x=0$ 时 $3x$ 项为 $0$，但常数 $-5$ 仍在；若答 $0$ 则是忘了这个常数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The statement $f(2)=7$ means:",
        "zh": "式子 $f(2)=7$ 的含义是："
      },
      "choices": [
        "$f$ times $2$ equals $7$",
        "The function equals $2$ when $x$ is $7$",
        "The graph crosses the axis at $7$",
        "When the input is $2$, the output is $7$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Function notation $f(2)=7$ says the input $2$ produces the output $7$. It is not multiplication of $f$ and $2$; reading it that way misunderstands what the parentheses mean.",
        "zh": "函数记号 $f(2)=7$ 表示输入 $2$ 得到输出 $7$。它不是 $f$ 乘以 $2$；那样理解就误解了括号的含义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation does NOT represent $y$ as a function of $x$?",
        "zh": "下列哪个方程中 $y$ 不是 $x$ 的函数？"
      },
      "choices": [
        "$x=y^2$",
        "$y=x^2$",
        "$y=2x+1$",
        "$y=|x|$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In $x=y^2$ a single $x$ (e.g. $x=4$) gives two $y$-values ($2$ and $-2$), so it fails the function test. The others assign exactly one $y$ to each $x$; note $y=x^2$ is fine because each $x$ still has one output.",
        "zh": "在 $x=y^2$ 中，一个 $x$（如 $x=4$）对应两个 $y$（$2$ 和 $-2$），因此不是函数。其余方程每个 $x$ 只有一个 $y$；注意 $y=x^2$ 仍是函数，因为每个 $x$ 只有一个输出。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=2x-1$, what is $f(3)-f(1)$?",
        "zh": "若 $f(x)=2x-1$，求 $f(3)-f(1)$。"
      },
      "choices": [
        "$6$",
        "$4$",
        "$8$",
        "$2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$f(3)=5$ and $f(1)=1$, so $f(3)-f(1)=5-1=4$. Evaluate each separately before subtracting; subtracting the inputs $3-1$ first and plugging in gives the wrong idea.",
        "zh": "$f(3)=5$，$f(1)=1$，所以 $f(3)-f(1)=5-1=4$。要先分别求值再相减；若先算输入 $3-1$ 再代入就用错了方法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x)=\\frac{1}{x-2}$?",
        "zh": "函数 $f(x)=\\frac{1}{x-2}$ 的定义域是什么？"
      },
      "choices": [
        "$x\\neq 0$",
        "$x\\ge 2$",
        "all $x$ with $x\\neq 2$",
        "all real numbers"
      ],
      "answer": 2,
      "explanation": {
        "en": "The denominator cannot be $0$, so $x-2\\neq 0$, meaning $x\\neq 2$. Excluding $x=0$ instead looks at the wrong quantity — it is the denominator $x-2$, not $x$ itself, that must be nonzero.",
        "zh": "分母不能为 $0$，所以 $x-2\\neq 0$，即 $x\\neq 2$。若排除 $x=0$ 就看错了对象——必须非零的是分母 $x-2$，而不是 $x$ 本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the notation $f(x)$, what is $x$ called?",
        "zh": "在记号 $f(x)$ 中，$x$ 被称为什么？"
      },
      "choices": [
        "the output",
        "the range",
        "the slope",
        "the input (independent variable)"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x$ is the input, or independent variable, that we feed into the function; the resulting $f(x)$ is the output. Calling $x$ the output reverses the roles of input and output.",
        "zh": "$x$ 是我们代入函数的输入，即自变量；得到的 $f(x)$ 才是输出。若把 $x$ 说成输出，就把输入与输出的角色弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=5x-2$, find $f(3)$.",
        "zh": "若 $f(x)=5x-2$，求 $f(3)$。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "$f(3)=5(3)-2=15-2=13$. Multiply first, then subtract the constant $2$.",
        "zh": "$f(3)=5(3)-2=15-2=13$。先做乘法，再减去常数 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x^2+1$, find $f(-4)$.",
        "zh": "若 $f(x)=x^2+1$，求 $f(-4)$。"
      },
      "answer": "17",
      "accept": [
        "17.0",
        "+17"
      ],
      "explanation": {
        "en": "$(-4)^2=16$, so $f(-4)=16+1=17$. Squaring the negative gives a positive $16$.",
        "zh": "$(-4)^2=16$，所以 $f(-4)=16+1=17$。负数平方得正数 $16$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $g(x)=4-2x$, find $g(5)$.",
        "zh": "若 $g(x)=4-2x$，求 $g(5)$。"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "−6"
      ],
      "explanation": {
        "en": "$g(5)=4-2(5)=4-10=-6$. Compute $2(5)=10$ first, then subtract from $4$.",
        "zh": "$g(5)=4-2(5)=4-10=-6$。先算 $2(5)=10$，再用 $4$ 去减。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=\\sqrt{x-3}$, what is the smallest value of $x$ in the domain?",
        "zh": "对于 $f(x)=\\sqrt{x-3}$，定义域中 $x$ 的最小值是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "x=3",
        "x = 3"
      ],
      "explanation": {
        "en": "The expression under the square root must be $\\ge 0$: $x-3\\ge 0$, so $x\\ge 3$. The smallest allowed value is $3$.",
        "zh": "根号下的式子必须 $\\ge 0$：$x-3\\ge 0$，所以 $x\\ge 3$。允许的最小值是 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=\\frac{x+1}{2}$, find $f(7)$.",
        "zh": "若 $f(x)=\\frac{x+1}{2}$，求 $f(7)$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$f(7)=\\frac{7+1}{2}=\\frac{8}{2}=4$. Add inside the numerator first, then divide by $2$.",
        "zh": "$f(7)=\\frac{7+1}{2}=\\frac{8}{2}=4$。先算分子的加法，再除以 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a function, how many outputs can a single input have?",
        "zh": "在函数中，一个输入最多可以对应几个输出？"
      },
      "answer": "1",
      "accept": [
        "one",
        "1.0",
        "one output",
        "一个",
        "1个"
      ],
      "explanation": {
        "en": "By definition a function maps each input to exactly one output — never two or more.",
        "zh": "根据定义，函数把每个输入映射到恰好一个输出——绝不会有两个或更多。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=2x^2-3x$, find $f(2)$.",
        "zh": "若 $f(x)=2x^2-3x$，求 $f(2)$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$f(2)=2(2)^2-3(2)=2(4)-6=8-6=2$. Square before multiplying by $2$, then subtract $3(2)=6$.",
        "zh": "$f(2)=2(2)^2-3(2)=2(4)-6=8-6=2$。先平方再乘以 $2$，然后减去 $3(2)=6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The set of all possible input values of a function is called its ___.",
        "zh": "函数所有可能输入值构成的集合称为它的 ___。"
      },
      "answer": "domain",
      "accept": [
        "Domain",
        "the domain",
        "定义域",
        "domain (定义域)"
      ],
      "explanation": {
        "en": "The set of allowed inputs is the domain; the set of resulting outputs is the range.",
        "zh": "允许的输入构成的集合是定义域；对应输出构成的集合是值域。"
      }
    }
  ],
  "linear-functions/slope-and-linear-equations": [
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the line through $(1,2)$ and $(3,8)$?",
        "zh": "过点 $(1,2)$ 和 $(3,8)$ 的直线斜率是多少？"
      },
      "choices": [
        "$3$",
        "$2$",
        "$6$",
        "$-3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Slope $=\\frac{8-2}{3-1}=\\frac{6}{2}=3$. Both a change in $y$ and a change in $x$ are needed; using only the rise $6$ and skipping division by the run $2$ gives the wrong value.",
        "zh": "斜率 $=\\frac{8-2}{3-1}=\\frac{6}{2}=3$。要同时用到 $y$ 的变化和 $x$ 的变化；若只取上升量 $6$ 而不除以水平变化 $2$，就会算错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $y$-intercept of $y=2x-5$?",
        "zh": "$y=2x-5$ 的 $y$ 轴截距是多少？"
      },
      "choices": [
        "$2$",
        "$-5$",
        "$(5,0)$",
        "$5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In $y=mx+b$ the $y$-intercept is $b=-5$ (the point $(0,-5)$). The coefficient $2$ is the slope, not the intercept; dropping the negative sign to get $5$ is also a common error.",
        "zh": "在 $y=mx+b$ 中，$y$ 轴截距是 $b=-5$（即点 $(0,-5)$）。系数 $2$ 是斜率而非截距；把负号丢掉写成 $5$ 也是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of $y=-4x+7$?",
        "zh": "$y=-4x+7$ 的斜率是多少？"
      },
      "choices": [
        "$7$",
        "$4$",
        "$-4$",
        "$-7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The slope is the coefficient of $x$, including its sign: $-4$. The constant $7$ is the $y$-intercept, and dropping the negative sign to write $4$ loses the direction of the line.",
        "zh": "斜率是 $x$ 的系数，并要带上符号：$-4$。常数 $7$ 是 $y$ 轴截距；若丢掉负号写成 $4$，就丢失了直线的方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $x$-intercept of $y=2x-6$?",
        "zh": "$y=2x-6$ 的 $x$ 轴截距是多少？"
      },
      "choices": [
        "$x=-6$",
        "$x=-3$",
        "$x=6$",
        "$x=3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Set $y=0$: $0=2x-6\\Rightarrow 2x=6\\Rightarrow x=3$. Using the constant $-6$ directly as the intercept skips solving for $x$.",
        "zh": "令 $y=0$：$0=2x-6\\Rightarrow 2x=6\\Rightarrow x=3$。若直接把常数 $-6$ 当作截距，就跳过了解 $x$ 的步骤。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write the equation in slope-intercept form with slope $3$ and $y$-intercept $-2$.",
        "zh": "写出斜率为 $3$、$y$ 轴截距为 $-2$ 的斜截式方程。"
      },
      "choices": [
        "$y=3x-2$",
        "$y=3x+2$",
        "$y=-2x+3$",
        "$y=2x-3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Slope-intercept form is $y=mx+b$ with $m=3$, $b=-2$, giving $y=3x-2$. Swapping the roles of slope and intercept (writing $-2$ as the slope) misplaces the numbers.",
        "zh": "斜截式为 $y=mx+b$，其中 $m=3$、$b=-2$，得 $y=3x-2$。若把斜率与截距互换（把 $-2$ 当斜率），就放错了位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write the point-slope equation of the line through $(2,5)$ with slope $4$.",
        "zh": "写出过点 $(2,5)$、斜率为 $4$ 的点斜式方程。"
      },
      "choices": [
        "$y-2=4(x-5)$",
        "$y-5=4(x-2)$",
        "$y+5=4(x+2)$",
        "$y-5=4(x+2)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Point-slope form is $y-y_1=m(x-x_1)$ with $(x_1,y_1)=(2,5)$: $y-5=4(x-2)$. Swapping the $x$- and $y$-coordinates, or using $+$ instead of $-$, breaks the pattern.",
        "zh": "点斜式为 $y-y_1=m(x-x_1)$，其中 $(x_1,y_1)=(2,5)$：$y-5=4(x-2)$。若把 $x$、$y$ 坐标互换，或把减号写成加号，就破坏了格式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write $y=2x+3$ in standard form $Ax+By=C$.",
        "zh": "把 $y=2x+3$ 化为标准式 $Ax+By=C$。"
      },
      "choices": [
        "$2x-y=3$",
        "$2x+y=3$",
        "$2x-y=-3$",
        "$-2x-y=3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Move the $x$-term: $y=2x+3\\Rightarrow -2x+y=3\\Rightarrow 2x-y=-3$. Forgetting to change the sign of $3$ when moving terms leads to the wrong constant.",
        "zh": "移动含 $x$ 的项：$y=2x+3\\Rightarrow -2x+y=3\\Rightarrow 2x-y=-3$。移项时若忘记改变 $3$ 的符号，就会得到错误的常数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A plant is $5$ cm tall and grows $2$ cm each week, modeled by $h=2w+5$. What does the slope $2$ represent?",
        "zh": "一株植物高 $5$ 厘米，每周长高 $2$ 厘米，用 $h=2w+5$ 表示。斜率 $2$ 代表什么？"
      },
      "choices": [
        "the starting height",
        "the height at week $5$",
        "the total number of weeks",
        "the growth per week (rate of change)"
      ],
      "answer": 3,
      "explanation": {
        "en": "The slope is the rate of change: $2$ cm gained each week. The starting height $5$ is the $y$-intercept, not the slope.",
        "zh": "斜率是变化率：每周长高 $2$ 厘米。起始高度 $5$ 是 $y$ 轴截距，而不是斜率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of a horizontal line?",
        "zh": "水平线的斜率是多少？"
      },
      "choices": [
        "$0$",
        "$1$",
        "it depends",
        "undefined"
      ],
      "answer": 0,
      "explanation": {
        "en": "A horizontal line has no vertical change, so slope $=\\frac{0}{\\text{run}}=0$. An undefined slope belongs to a vertical line, where the run is $0$ instead.",
        "zh": "水平线没有竖直方向的变化，所以斜率 $=\\frac{0}{\\text{水平变化}}=0$。斜率无定义的是竖直线，因为那时水平变化为 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of a vertical line?",
        "zh": "竖直线的斜率是多少？"
      },
      "choices": [
        "$0$",
        "undefined",
        "$1$",
        "$-1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A vertical line has zero run, and dividing by $0$ is undefined. A slope of $0$ describes a horizontal line, which is the opposite case.",
        "zh": "竖直线的水平变化为 $0$，除以 $0$ 无意义，故斜率无定义。斜率为 $0$ 描述的是水平线，情况正好相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of any line parallel to $y=\\frac{2}{3}x+1$?",
        "zh": "与 $y=\\frac{2}{3}x+1$ 平行的直线斜率是多少？"
      },
      "choices": [
        "$-\\frac{3}{2}$",
        "$\\frac{3}{2}$",
        "$\\frac{2}{3}$",
        "$-\\frac{2}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Parallel lines share the same slope, so the slope is $\\frac{2}{3}$. Flipping and negating to $-\\frac{3}{2}$ gives the perpendicular slope, not the parallel one.",
        "zh": "平行线的斜率相同，所以斜率为 $\\frac{2}{3}$。若取倒数再变号得到 $-\\frac{3}{2}$，那是垂直线的斜率，而非平行线的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is the standard form of a linear equation?",
        "zh": "下列哪个是线性方程的标准式？"
      },
      "choices": [
        "$y=mx+b$",
        "$y=ax^2+bx+c$",
        "$y-y_1=m(x-x_1)$",
        "$Ax+By=C$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Standard form is $Ax+By=C$. The form $y=mx+b$ is slope-intercept, and $y=ax^2+bx+c$ is quadratic, not linear.",
        "zh": "标准式为 $Ax+By=C$。$y=mx+b$ 是斜截式，而 $y=ax^2+bx+c$ 是二次式，并非线性。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(2,3)$ and $(6,11)$.",
        "zh": "求过点 $(2,3)$ 和 $(6,11)$ 的直线斜率。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Slope $=\\frac{11-3}{6-2}=\\frac{8}{4}=2$.",
        "zh": "斜率 $=\\frac{11-3}{6-2}=\\frac{8}{4}=2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-intercept of $y=-3x+8$?",
        "zh": "$y=-3x+8$ 的 $y$ 轴截距是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "(0,8)",
        "(0, 8)"
      ],
      "explanation": {
        "en": "In $y=mx+b$ the $y$-intercept is $b=8$.",
        "zh": "在 $y=mx+b$ 中，$y$ 轴截距是 $b=8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-intercept of $y=4x-12$ (give the $x$-value).",
        "zh": "求 $y=4x-12$ 的 $x$ 轴截距（给出 $x$ 值）。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "x=3",
        "(3,0)",
        "(3, 0)"
      ],
      "explanation": {
        "en": "Set $y=0$: $0=4x-12\\Rightarrow 4x=12\\Rightarrow x=3$.",
        "zh": "令 $y=0$：$0=4x-12\\Rightarrow 4x=12\\Rightarrow x=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(-1,4)$ and $(2,-5)$.",
        "zh": "求过点 $(-1,4)$ 和 $(2,-5)$ 的直线斜率。"
      },
      "answer": "-3",
      "accept": [
        "-3.0",
        "−3"
      ],
      "explanation": {
        "en": "Slope $=\\frac{-5-4}{2-(-1)}=\\frac{-9}{3}=-3$. Keep the signs consistent in both the numerator and denominator.",
        "zh": "斜率 $=\\frac{-5-4}{2-(-1)}=\\frac{-9}{3}=-3$。分子和分母的符号都要保持一致。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the line $y=3x-7$, find $y$ when $x=4$.",
        "zh": "对于直线 $y=3x-7$，当 $x=4$ 时求 $y$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$y=3(4)-7=12-7=5$.",
        "zh": "$y=3(4)-7=12-7=5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line $5x+2y=10$.",
        "zh": "求直线 $5x+2y=10$ 的斜率。"
      },
      "answer": "-5/2",
      "accept": [
        "-2.5",
        "−5/2",
        "-2.50",
        "−2.5"
      ],
      "explanation": {
        "en": "Solve for $y$: $2y=-5x+10\\Rightarrow y=-\\frac{5}{2}x+5$, so the slope is $-\\frac{5}{2}$.",
        "zh": "解出 $y$：$2y=-5x+10\\Rightarrow y=-\\frac{5}{2}x+5$，所以斜率为 $-\\frac{5}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car's distance is given by $d=60t$ (miles, hours). What is the rate of change (speed)?",
        "zh": "一辆车的行驶距离为 $d=60t$（英里、小时）。变化率（速度）是多少？"
      },
      "answer": "60",
      "accept": [
        "60.0",
        "60 mph",
        "60mph"
      ],
      "explanation": {
        "en": "The rate of change is the coefficient of $t$, which is $60$ miles per hour.",
        "zh": "变化率是 $t$ 的系数，即每小时 $60$ 英里。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of the line $y=7$?",
        "zh": "直线 $y=7$ 的斜率是多少？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "zero"
      ],
      "explanation": {
        "en": "$y=7$ is a horizontal line, which has slope $0$.",
        "zh": "$y=7$ 是一条水平线，斜率为 $0$。"
      }
    }
  ],
  "systems-equations-inequalities/solving-systems-of-equations": [
    {
      "type": "mc",
      "question": {
        "en": "What does the solution to a system of two linear equations represent graphically?",
        "zh": "两个线性方程组成的方程组的解在图像上表示什么？"
      },
      "choices": [
        "The point where the two lines intersect",
        "The y-intercepts of both lines",
        "The slopes of both lines",
        "The x-intercepts of both lines"
      ],
      "answer": 0,
      "explanation": {
        "en": "The solution is the ordered pair that satisfies BOTH equations, which is exactly the point where the graphs cross. Confusing it with the intercepts mixes up 'where a line meets an axis' with 'where two lines meet each other'.",
        "zh": "解是同时满足两个方程的有序数对，也就是两条直线相交的点。把它当成截距是混淆了'直线与坐标轴的交点'和'两条直线的交点'。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve by substitution: $y = 2x + 1$ and $y = x + 4$. What is $x$?",
        "zh": "用代入法解：$y = 2x + 1$ 和 $y = x + 4$。求 $x$。"
      },
      "choices": [
        "1",
        "3",
        "2",
        "5"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $2x + 1 = x + 4$, so $x = 3$. A common slip is subtracting only one $x$ or the constants in the wrong direction, which would give $x = 5$ or a negative value.",
        "zh": "令 $2x + 1 = x + 4$，得 $x = 3$。常见错误是只移动一个 $x$ 或常数移项方向错误，会得到 $x = 5$ 或负值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the system in the previous style $y = 2x + 1$, $y = x + 4$ with $x = 3$, what is $y$?",
        "zh": "对上一题的方程组 $y = 2x + 1$、$y = x + 4$，当 $x = 3$ 时，$y$ 是多少？"
      },
      "choices": [
        "5",
        "4",
        "7",
        "6"
      ],
      "answer": 2,
      "explanation": {
        "en": "Substitute $x = 3$: $y = 3 + 4 = 7$ (or $2(3)+1 = 7$). Using $x = 3$ but forgetting to add the constant, or plugging into the wrong equation carelessly, leads to smaller values.",
        "zh": "代入 $x = 3$：$y = 3 + 4 = 7$（或 $2(3)+1 = 7$）。用了 $x = 3$ 但忘记加常数，或代错方程，会得到更小的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve by elimination: $x + y = 10$ and $x - y = 4$. What is $x$?",
        "zh": "用消元法解：$x + y = 10$ 和 $x - y = 4$。求 $x$。"
      },
      "choices": [
        "3",
        "6",
        "5",
        "7"
      ],
      "answer": 3,
      "explanation": {
        "en": "Adding the equations eliminates $y$: $2x = 14$, so $x = 7$. Subtracting instead of adding cancels $x$ (not what you want) or mis-adds to give 6 or 5.",
        "zh": "两式相加消去 $y$：$2x = 14$，所以 $x = 7$。若相减而不是相加会消去 $x$（不是想要的），或加错得到 6 或 5。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does this system have: $y = 3x + 2$ and $y = 3x - 5$?",
        "zh": "这个方程组有多少个解：$y = 3x + 2$ 和 $y = 3x - 5$？"
      },
      "choices": [
        "No solution",
        "Infinitely many",
        "Exactly one",
        "Exactly two"
      ],
      "answer": 0,
      "explanation": {
        "en": "Both lines have slope 3 but different y-intercepts, so they are parallel and never meet — no solution. Thinking 'same slope means same line' wrongly suggests infinitely many; the intercepts differ.",
        "zh": "两条直线斜率都是 3 但 y 截距不同，所以平行且永不相交——无解。误以为'斜率相同就是同一条线'会错误地得出无穷多解；但截距不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does this system have: $2x + 4y = 8$ and $x + 2y = 4$?",
        "zh": "这个方程组有多少个解：$2x + 4y = 8$ 和 $x + 2y = 4$？"
      },
      "choices": [
        "No solution",
        "Exactly one",
        "Infinitely many",
        "Exactly two"
      ],
      "answer": 2,
      "explanation": {
        "en": "Dividing the first equation by 2 gives the second exactly, so they are the same line — infinitely many solutions. Stopping too early and treating them as different lines wrongly gives 'one solution'.",
        "zh": "第一个方程除以 2 恰好得到第二个，所以是同一条直线——无穷多解。过早停止把它们当作不同直线会错误地得到'一个解'。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To eliminate $y$ from $3x + 2y = 12$ and $x - y = 1$, by what number should you multiply the SECOND equation?",
        "zh": "要从 $3x + 2y = 12$ 和 $x - y = 1$ 中消去 $y$，应把第二个方程乘以几？"
      },
      "choices": [
        "3",
        "$-2$",
        "2",
        "$-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying $x - y = 1$ by 2 gives $2x - 2y = 2$; adding to the first cancels $y$ ($+2y$ and $-2y$). Multiplying by 3 targets the $x$ coefficient instead, not $y$.",
        "zh": "把 $x - y = 1$ 乘以 2 得 $2x - 2y = 2$；与第一式相加消去 $y$（$+2y$ 与 $-2y$）。乘以 3 是针对 $x$ 系数而非 $y$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The point $(2, 3)$ is a solution to which system?",
        "zh": "点 $(2, 3)$ 是下列哪个方程组的解？"
      },
      "choices": [
        "$x + y = 6$ and $x - y = 1$",
        "$2x + y = 5$ and $x - y = 1$",
        "$x + y = 5$ and $x - y = 1$",
        "$x + y = 5$ and $2x - y = 1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Check $(2,3)$: $2 + 3 = 5$ (true) and $2(2) - 3 = 1$ (true). A tempting choice satisfies only one equation; a valid solution must satisfy BOTH.",
        "zh": "验证 $(2,3)$：$2 + 3 = 5$（成立）且 $2(2) - 3 = 1$（成立）。诱人的选项只满足一个方程；有效解必须同时满足两个方程。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two numbers have a sum of 20 and a difference of 6. What is the larger number?",
        "zh": "两个数的和是 20，差是 6。较大的数是多少？"
      },
      "choices": [
        "13",
        "14",
        "12",
        "11"
      ],
      "answer": 0,
      "explanation": {
        "en": "Let the numbers be $x$ and $y$: $x + y = 20$, $x - y = 6$. Adding gives $2x = 26$, so $x = 13$. Forgetting to divide the sum $26$ by 2, or averaging incorrectly, gives 14 or 11.",
        "zh": "设两数为 $x$ 和 $y$：$x + y = 20$，$x - y = 6$。相加得 $2x = 26$，所以 $x = 13$。忘记把和 $26$ 除以 2，或平均计算错误，会得到 14 或 11。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which method is usually easiest for the system $y = 4x - 3$ and $2x + y = 9$?",
        "zh": "对方程组 $y = 4x - 3$ 和 $2x + y = 9$，通常哪种方法最简便？"
      },
      "choices": [
        "Graphing, because the point is an integer",
        "Substitution, because one equation is already solved for $y$",
        "Elimination, because the coefficients match",
        "Guess and check"
      ],
      "answer": 1,
      "explanation": {
        "en": "One equation is already $y = \\ldots$, so substituting that expression into the other is fastest. Elimination isn't ideal here because the coefficients aren't lined up to cancel directly.",
        "zh": "一个方程已经是 $y = \\ldots$ 的形式，所以把该表达式代入另一个方程最快。这里消元法不理想，因为系数没有对齐以直接抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve: $3x + y = 7$ and $x - y = 1$. What is the value of $y$?",
        "zh": "解：$3x + y = 7$ 和 $x - y = 1$。求 $y$ 的值。"
      },
      "choices": [
        "2",
        "0",
        "1",
        "$-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Adding the equations gives $4x = 8$, so $x = 2$; then $y = x - 1 = 1$. Solving for $x$ but forgetting the last step and reporting $x$ as the answer would give 2.",
        "zh": "两式相加得 $4x = 8$，所以 $x = 2$；再代入 $y = x - 1 = 1$。求出 $x$ 却忘记最后一步、把 $x$ 当作答案会得到 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A system written in slope-intercept form has lines with the SAME slope and the SAME y-intercept. The system has:",
        "zh": "以斜截式写出的方程组，两条直线斜率相同且 y 截距也相同。该方程组有："
      },
      "choices": [
        "No solution",
        "Exactly one solution",
        "Two solutions",
        "Infinitely many solutions"
      ],
      "answer": 3,
      "explanation": {
        "en": "Same slope and same intercept means the two equations describe the identical line, so every point on it is a solution — infinitely many. Same slope with DIFFERENT intercepts would instead give no solution.",
        "zh": "斜率相同且截距相同意味着两个方程表示同一条直线，所以直线上每个点都是解——无穷多解。斜率相同但截距不同则会无解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve the system $y = x + 2$ and $y = -x + 8$. Enter the value of $x$.",
        "zh": "解方程组 $y = x + 2$ 和 $y = -x + 8$。输入 $x$ 的值。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "x=3"
      ],
      "explanation": {
        "en": "Set $x + 2 = -x + 8$, so $2x = 6$ and $x = 3$. A sign error on the $-x$ term (treating it as $+x$) removes the variable and blocks a solution.",
        "zh": "令 $x + 2 = -x + 8$，得 $2x = 6$，$x = 3$。对 $-x$ 项符号处理错误（当作 $+x$）会消去变量而无法求解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $y = x + 2$ with $x = 3$, enter the value of $y$.",
        "zh": "用 $y = x + 2$ 且 $x = 3$，输入 $y$ 的值。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "y=5"
      ],
      "explanation": {
        "en": "Substitute $x = 3$: $y = 3 + 2 = 5$. Using the wrong equation or forgetting to add 2 gives a different value.",
        "zh": "代入 $x = 3$：$y = 3 + 2 = 5$。用错方程或忘记加 2 会得到不同的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by elimination: $2x + 3y = 13$ and $2x - y = 5$. Enter the value of $y$.",
        "zh": "用消元法解：$2x + 3y = 13$ 和 $2x - y = 5$。输入 $y$ 的值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "y=2"
      ],
      "explanation": {
        "en": "Subtracting the second from the first eliminates $x$: $4y = 8$, so $y = 2$. Adding instead of subtracting would keep $x$ and not isolate $y$.",
        "zh": "第一式减第二式消去 $x$：$4y = 8$，所以 $y = 2$。相加而非相减会保留 $x$，无法分离 $y$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many solutions does the system $y = 2x + 1$ and $y = 2x + 1$ have? Answer 'one', 'none', or 'infinite'.",
        "zh": "方程组 $y = 2x + 1$ 和 $y = 2x + 1$ 有多少个解？回答'一个'、'无'或'无穷'。"
      },
      "answer": "infinite",
      "accept": [
        "infinitely many",
        "infinite solutions",
        "无穷",
        "无穷多",
        "无穷多个",
        "无数",
        "infinity"
      ],
      "explanation": {
        "en": "The two equations are identical — the same line — so every point works: infinitely many solutions. Reading them as different lines and saying 'one' is the common mistake.",
        "zh": "两个方程完全相同——同一条直线——所以每个点都成立：无穷多解。把它们读作不同直线而回答'一个'是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A movie theater sells adult tickets for $10 and child tickets for $6. If 5 tickets cost $38 total, how many CHILD tickets were sold?",
        "zh": "一家电影院成人票 10 美元，儿童票 6 美元。若 5 张票共 38 美元，卖出多少张儿童票？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "3 tickets",
        "3 张"
      ],
      "explanation": {
        "en": "Let $a + c = 5$ and $10a + 6c = 38$. Substituting $a = 5 - c$ gives $50 - 4c = 38$, so $c = 3$. Solving for adults instead and reporting that count gives 2, not the child count asked for.",
        "zh": "设 $a + c = 5$ 且 $10a + 6c = 38$。代入 $a = 5 - c$ 得 $50 - 4c = 38$，所以 $c = 3$。求成人票并回答其数量会得到 2，而非题目要的儿童票数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve: $x + y = 7$ and $3x + y = 15$. Enter the value of $x$.",
        "zh": "解：$x + y = 7$ 和 $3x + y = 15$。输入 $x$ 的值。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4",
        "x=4"
      ],
      "explanation": {
        "en": "Subtracting the first from the second eliminates $y$: $2x = 8$, so $x = 4$. Adding the equations instead keeps $y$ and gives no clean value for $x$.",
        "zh": "第二式减第一式消去 $y$：$2x = 8$，所以 $x = 4$。相加则保留 $y$，无法直接求出 $x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The system $y = \\frac{1}{2}x + 3$ and $y = \\frac{1}{2}x - 1$ has how many solutions? Answer 'one', 'none', or 'infinite'.",
        "zh": "方程组 $y = \\frac{1}{2}x + 3$ 和 $y = \\frac{1}{2}x - 1$ 有多少个解？回答'一个'、'无'或'无穷'。"
      },
      "answer": "none",
      "accept": [
        "no solution",
        "no solutions",
        "zero",
        "0",
        "无",
        "无解",
        "没有",
        "没有解"
      ],
      "explanation": {
        "en": "Both lines have slope $\\frac{1}{2}$ but different y-intercepts, so they are parallel and never intersect — no solution. Same slope alone tempts an answer of 'infinite', but equal intercepts are also required for that.",
        "zh": "两条直线斜率都是 $\\frac{1}{2}$ 但 y 截距不同，所以平行且永不相交——无解。仅斜率相同会诱使人回答'无穷'，但那还需要截距也相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle has a perimeter of 24 and its length is 2 more than its width. Enter the WIDTH.",
        "zh": "一个长方形的周长是 24，长比宽多 2。输入宽。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "w=5",
        "5 units",
        "5 单位"
      ],
      "explanation": {
        "en": "With $l = w + 2$ and $2(l + w) = 24$, so $l + w = 12$. Then $(w + 2) + w = 12$ gives $2w = 10$, $w = 5$. Solving for length and reporting it gives 7, not the width.",
        "zh": "由 $l = w + 2$ 且 $2(l + w) = 24$，得 $l + w = 12$。则 $(w + 2) + w = 12$，$2w = 10$，$w = 5$。求长并回答会得到 7，而非宽。"
      }
    }
  ],
  "systems-equations-inequalities/systems-of-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "When graphing the inequality $y > 2x + 1$, the boundary line should be:",
        "zh": "画不等式 $y > 2x + 1$ 时，边界线应为："
      },
      "choices": [
        "Dashed, because the inequality is strict ($>$)",
        "Solid, because the inequality has a variable",
        "Solid, because $y$ is greater",
        "Dashed, because the slope is positive"
      ],
      "answer": 0,
      "explanation": {
        "en": "A strict inequality ($<$ or $>$) uses a dashed line because points ON the line are NOT included. Using a solid line would wrongly include the boundary, which only $\\leq$ or $\\geq$ allow.",
        "zh": "严格不等式（$<$ 或 $>$）用虚线，因为线上的点不包含在内。用实线会错误地包含边界，那只有 $\\leq$ 或 $\\geq$ 才允许。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the inequality $y \\leq 3x - 2$, the boundary line is:",
        "zh": "对不等式 $y \\leq 3x - 2$，边界线是："
      },
      "choices": [
        "Dashed",
        "Solid",
        "Curved",
        "Vertical"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because $\\leq$ includes equality, points on the line ARE solutions, so the boundary is solid. Reflexively drawing dashed lines for every inequality ignores that $\\leq$ and $\\geq$ include the boundary.",
        "zh": "因为 $\\leq$ 包含等于，线上的点也是解，所以边界线是实线。对每个不等式都反射性地画虚线，忽略了 $\\leq$ 和 $\\geq$ 包含边界。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $y > 2x + 1$, which region is shaded?",
        "zh": "对 $y > 2x + 1$，阴影在哪个区域？"
      },
      "choices": [
        "Below the line",
        "On the line only",
        "Above the line",
        "To the right of the y-axis"
      ],
      "answer": 2,
      "explanation": {
        "en": "When $y$ is GREATER than the expression, you shade above the boundary line. Shading below matches $y <$, so flipping the direction is the common error.",
        "zh": "当 $y$ 大于该表达式时，阴影在边界线上方。阴影在下方对应 $y <$，所以搞反方向是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Is the point $(0, 0)$ a solution to $y < x + 3$?",
        "zh": "点 $(0, 0)$ 是 $y < x + 3$ 的解吗？"
      },
      "choices": [
        "No, because it is on the line",
        "Cannot be determined",
        "No, because both coordinates are zero",
        "Yes, because $0 < 3$ is true"
      ],
      "answer": 3,
      "explanation": {
        "en": "Substitute $(0,0)$: $0 < 0 + 3$, i.e. $0 < 3$, which is true, so it IS a solution. Assuming the origin can never be tested, or that zeros disqualify it, misunderstands the test-point method.",
        "zh": "代入 $(0,0)$：$0 < 0 + 3$，即 $0 < 3$，成立，所以它是解。以为原点不能测试，或以为坐标为零就不符合，都是对测试点法的误解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The solution to a SYSTEM of two linear inequalities is:",
        "zh": "两个线性不等式组成的方程组的解是："
      },
      "choices": [
        "The overlap where BOTH inequalities are satisfied",
        "The boundary lines only",
        "The region satisfying at least one inequality",
        "The area outside both shaded regions"
      ],
      "answer": 0,
      "explanation": {
        "en": "A system's solution is the overlap (intersection) where both shadings agree. Taking 'at least one' describes a union, which over-counts points that satisfy only a single inequality.",
        "zh": "方程组的解是两个阴影重叠（交集）的区域。取'至少满足一个'描述的是并集，会多算只满足单个不等式的点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which point lies in the solution region of the system $y \\geq 1$ and $x \\leq 4$?",
        "zh": "哪个点位于方程组 $y \\geq 1$ 和 $x \\leq 4$ 的解区域中？"
      },
      "choices": [
        "$(5, 2)$",
        "$(2, 3)$",
        "$(2, 0)$",
        "$(6, 6)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Need $y \\geq 1$ AND $x \\leq 4$. Only $(2,3)$ has $3 \\geq 1$ and $2 \\leq 4$. Points that pass just one condition (like $x \\leq 4$ but $y < 1$) are tempting but fail the system.",
        "zh": "需要 $y \\geq 1$ 且 $x \\leq 4$。只有 $(2,3)$ 满足 $3 \\geq 1$ 且 $2 \\leq 4$。只满足一个条件的点（如 $x \\leq 4$ 但 $y < 1$）看似可行但不满足整个方程组。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When you divide or multiply both sides of an inequality by a NEGATIVE number, you must:",
        "zh": "当不等式两边同时除以或乘以负数时，必须："
      },
      "choices": [
        "Keep the inequality sign the same",
        "Change the boundary to dashed",
        "Reverse the inequality sign",
        "Add the number to both sides"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying or dividing by a negative reverses the direction of the inequality (e.g. $<$ becomes $>$). Forgetting to flip the sign is the classic error that shades the wrong side.",
        "zh": "乘以或除以负数会使不等号方向反转（如 $<$ 变 $>$）。忘记翻转不等号是导致阴影画反的经典错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A feasible region in a system of inequalities is best described as:",
        "zh": "不等式组中的可行域最恰当的描述是："
      },
      "choices": [
        "The single intersection point of the boundary lines",
        "The region above all the lines",
        "The largest triangle in the graph",
        "The set of all points satisfying every inequality at once"
      ],
      "answer": 3,
      "explanation": {
        "en": "The feasible region is every point meeting all constraints simultaneously — usually an area, not a single point. Reducing it to one intersection point confuses systems of inequalities with systems of equations.",
        "zh": "可行域是同时满足所有约束的每个点——通常是一个区域，而非单个点。把它缩成一个交点是把不等式组和方程组混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To graph $2x + y < 6$, which form makes it easiest to see the boundary's slope and intercept?",
        "zh": "画 $2x + y < 6$ 时，哪种形式最容易看出边界线的斜率和截距？"
      },
      "choices": [
        "$y < -2x + 6$",
        "$y < 2x + 6$",
        "$y < 6 - x$",
        "$x < 3 - y$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Solve for $y$: subtract $2x$ to get $y < -2x + 6$, showing slope $-2$ and intercept 6. Dropping the negative on the $2x$ term gives $+2x$, a wrong slope.",
        "zh": "解出 $y$：两边减 $2x$ 得 $y < -2x + 6$，显示斜率为 $-2$、截距为 6。把 $2x$ 项的负号丢掉得到 $+2x$，斜率就错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the inequality $x \\geq 2$, the boundary line is:",
        "zh": "对不等式 $x \\geq 2$，边界线是："
      },
      "choices": [
        "A horizontal solid line at $y = 2$",
        "A vertical solid line at $x = 2$",
        "A dashed vertical line at $x = 2$",
        "A diagonal line through the origin"
      ],
      "answer": 1,
      "explanation": {
        "en": "$x = 2$ is a vertical line, and $\\geq$ makes it solid; shade to the right where $x$ is larger. Reading $x = 2$ as a horizontal line confuses the roles of the $x$- and $y$-axes.",
        "zh": "$x = 2$ 是一条竖直线，$\\geq$ 使其为实线；向右阴影（$x$ 更大的一侧）。把 $x = 2$ 读作水平线是混淆了 $x$ 轴和 $y$ 轴的作用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Test the point $(1, 5)$ in $y \\geq 4x$. Is it a solution?",
        "zh": "把点 $(1, 5)$ 代入 $y \\geq 4x$。它是解吗？"
      },
      "choices": [
        "No, because $5 < 4$",
        "No, because $x$ is positive",
        "Yes, because $5 \\geq 4$ is true",
        "Cannot tell without graphing"
      ],
      "answer": 2,
      "explanation": {
        "en": "Substitute: $5 \\geq 4(1)$, i.e. $5 \\geq 4$, which is true, so the point is a solution. Comparing $5$ to just the coefficient $4$ instead of $4x = 4$ happens to agree here, but always evaluate the full right side.",
        "zh": "代入：$5 \\geq 4(1)$，即 $5 \\geq 4$，成立，所以该点是解。把 $5$ 只与系数 $4$ 比较而非 $4x = 4$ 在这里恰好一致，但务必计算完整的右边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a system of inequalities graph, if the two shaded regions do NOT overlap anywhere, the system has:",
        "zh": "在不等式组的图像中，如果两个阴影区域完全不重叠，则该方程组有："
      },
      "choices": [
        "Exactly one solution",
        "A single boundary point solution",
        "Infinitely many solutions along one line",
        "No solution"
      ],
      "answer": 3,
      "explanation": {
        "en": "If the shaded regions never overlap, no point satisfies both inequalities, so there is no solution. Expecting 'one solution' treats inequalities like equations, which meet at a point.",
        "zh": "如果阴影区域从不重叠，就没有点同时满足两个不等式，所以无解。期望'一个解'是把不等式当成在一点相交的方程了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the inequality $y < 5x - 2$, is the boundary line solid or dashed? Answer 'solid' or 'dashed'.",
        "zh": "对不等式 $y < 5x - 2$，边界线是实线还是虚线？回答'实线'或'虚线'。"
      },
      "answer": "dashed",
      "accept": [
        "dotted",
        "虚线",
        "dash",
        "broken"
      ],
      "explanation": {
        "en": "The strict symbol $<$ excludes points on the line, so the boundary is dashed. A solid line would wrongly include the boundary, which only $\\leq$ or $\\geq$ do.",
        "zh": "严格符号 $<$ 不包含线上的点，所以边界为虚线。实线会错误地包含边界，那只有 $\\leq$ 或 $\\geq$ 才这样。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Test the point $(0, 0)$ in $y \\leq -x + 4$. Is it a solution? Answer 'yes' or 'no'.",
        "zh": "把点 $(0, 0)$ 代入 $y \\leq -x + 4$。它是解吗？回答'是'或'否'。"
      },
      "answer": "yes",
      "accept": [
        "y",
        "true",
        "是",
        "是的",
        "对",
        "correct"
      ],
      "explanation": {
        "en": "Substitute: $0 \\leq -0 + 4$, i.e. $0 \\leq 4$, which is true, so $(0,0)$ is a solution. Assuming the origin is never in the region skips the actual test.",
        "zh": "代入：$0 \\leq -0 + 4$，即 $0 \\leq 4$，成立，所以 $(0,0)$ 是解。以为原点永远不在区域内就跳过了实际验证。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the system $y > 1$ and $y < 5$, how many INTEGER values of $y$ satisfy both (strictly)?",
        "zh": "在方程组 $y > 1$ 和 $y < 5$ 中，有多少个整数 $y$ 同时（严格地）满足两者？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "three",
        "三",
        "3个",
        "3 个"
      ],
      "explanation": {
        "en": "Strictly between 1 and 5 means $y = 2, 3, 4$ — three integers. Including the endpoints 1 and 5 would give 5, but strict inequalities exclude them.",
        "zh": "严格介于 1 和 5 之间意味着 $y = 2, 3, 4$——三个整数。若包含端点 1 和 5 会得到 5，但严格不等式不包含端点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Rewrite $3x + y \\geq 9$ by solving for $y$. Enter the right-hand side expression (in terms of $x$).",
        "zh": "把 $3x + y \\geq 9$ 解出 $y$。输入右边的表达式（用 $x$ 表示）。"
      },
      "answer": "-3x + 9",
      "accept": [
        "9 - 3x",
        "-3x+9",
        "9-3x",
        "9 – 3x",
        "-3*x+9",
        "9-3*x"
      ],
      "explanation": {
        "en": "Subtract $3x$ from both sides: $y \\geq -3x + 9$. Because we subtracted (not multiplied by a negative), the $\\geq$ sign stays the same; the $3x$ becomes $-3x$.",
        "zh": "两边减 $3x$：$y \\geq -3x + 9$。因为是减法（而非乘以负数），$\\geq$ 号不变；$3x$ 变为 $-3x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $y \\geq 2x + 1$, do you shade above or below the boundary line? Answer 'above' or 'below'.",
        "zh": "对 $y \\geq 2x + 1$，应在边界线的上方还是下方阴影？回答'上方'或'下方'。"
      },
      "answer": "above",
      "accept": [
        "up",
        "上方",
        "上",
        "上面",
        "over"
      ],
      "explanation": {
        "en": "Since $y$ is greater than or equal to the expression, shade above the line. Shading below corresponds to $y \\leq$, so reversing it is the frequent slip.",
        "zh": "因为 $y$ 大于或等于该表达式，所以在线上方阴影。下方阴影对应 $y \\leq$，搞反是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A store needs at least 3 workers ($x$) and at most 10 total staff, with $y$ managers, so $x \\geq 3$. If there are exactly 3 workers and 4 managers, is $(3, 4)$ a solution to $x \\geq 3$? Answer 'yes' or 'no'.",
        "zh": "一家商店需要至少 3 名工人（$x$），即 $x \\geq 3$。若恰好有 3 名工人和 4 名经理，$(3, 4)$ 是 $x \\geq 3$ 的解吗？回答'是'或'否'。"
      },
      "answer": "yes",
      "accept": [
        "y",
        "true",
        "是",
        "是的",
        "对",
        "correct"
      ],
      "explanation": {
        "en": "Check $x \\geq 3$ with $x = 3$: $3 \\geq 3$ is true because $\\geq$ includes equality, so yes. Treating $\\geq$ as strict ($>$) would wrongly exclude the boundary value 3.",
        "zh": "用 $x = 3$ 验证 $x \\geq 3$：$3 \\geq 3$ 成立，因为 $\\geq$ 包含等于，所以是。把 $\\geq$ 当作严格的 $>$ 会错误地排除边界值 3。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve the inequality $-2x > 8$ for $x$. Enter the solution.",
        "zh": "解不等式 $-2x > 8$ 求 $x$。输入解。"
      },
      "answer": "x < -4",
      "accept": [
        "x<-4",
        "x < -4",
        "<-4",
        "-4",
        "x lt -4",
        "x＜-4"
      ],
      "explanation": {
        "en": "Divide both sides by $-2$ AND reverse the sign: $x < -4$. Forgetting to flip the inequality when dividing by a negative gives the wrong direction $x > -4$.",
        "zh": "两边除以 $-2$ 并翻转不等号：$x < -4$。除以负数时忘记翻转不等号会得到方向相反的 $x > -4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a system of two linear inequalities, the solution set is the ____ of the two shaded regions. Fill in the blank (one word).",
        "zh": "在两个线性不等式的方程组中，解集是两个阴影区域的____。填空（一个词）。"
      },
      "answer": "overlap",
      "accept": [
        "intersection",
        "overlapping",
        "重叠",
        "交集",
        "重叠区域",
        "交",
        "common"
      ],
      "explanation": {
        "en": "The solution is the overlap (intersection) where both shadings coincide. Choosing 'union' would incorrectly include points satisfying only one inequality.",
        "zh": "解是两个阴影重合的重叠（交集）区域。选'并集'会错误地包含只满足一个不等式的点。"
      }
    }
  ],
  "sequences/arithmetic-sequences": [
    {
      "type": "mc",
      "question": {
        "en": "What is the common difference of the arithmetic sequence 4, 7, 10, 13, ...?",
        "zh": "等差数列 4, 7, 10, 13, ... 的公差是多少？"
      },
      "choices": [
        "$3$",
        "$2$",
        "$4$",
        "$7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract any term from the next: $7-4=3$. The common difference is $3$. A common slip is to use the first term $4$ as the difference instead of the gap between terms.",
        "zh": "用后一项减去前一项：$7-4=3$，公差为 $3$。常见错误是把首项 $4$ 当成公差，而不是相邻两项之差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An arithmetic sequence has first term $a_1=5$ and common difference $d=4$. What is $a_1$ in the explicit formula $a_n=a_1+(n-1)d$?",
        "zh": "一个等差数列首项 $a_1=5$，公差 $d=4$。在通项公式 $a_n=a_1+(n-1)d$ 中，$a_1$ 是多少？"
      },
      "choices": [
        "$4$",
        "$5$",
        "$9$",
        "$1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In the explicit formula, $a_1$ is simply the first term, $5$. A common mix-up is to substitute the common difference $4$ in place of the first term.",
        "zh": "在通项公式中，$a_1$ 就是首项，即 $5$。常见混淆是把公差 $4$ 误当作首项代入。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula is the explicit (closed) form for an arithmetic sequence?",
        "zh": "下列哪个是等差数列的通项（显式）公式？"
      },
      "choices": [
        "$a_n=a_{n-1}+d$",
        "$a_n=a_1 \\cdot r^{n-1}$",
        "$a_n=a_1+(n-1)d$",
        "$a_n=a_1+nd$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The explicit form is $a_n=a_1+(n-1)d$, giving any term directly from $n$. The form $a_n=a_{n-1}+d$ is recursive (needs the previous term), and using $nd$ instead of $(n-1)d$ overshoots by one step of $d$.",
        "zh": "通项公式为 $a_n=a_1+(n-1)d$，可直接由 $n$ 求任意项。$a_n=a_{n-1}+d$ 是递推式（需要前一项），而用 $nd$ 代替 $(n-1)d$ 会多加一个 $d$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the 10th term of the arithmetic sequence 3, 8, 13, 18, ...",
        "zh": "求等差数列 3, 8, 13, 18, ... 的第 10 项。"
      },
      "choices": [
        "$45$",
        "$53$",
        "$50$",
        "$48$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Here $a_1=3$, $d=5$, so $a_{10}=3+(10-1)(5)=3+45=48$. Using $nd=10\\times5=50$ instead of $(n-1)d$ gives $53$, one step too far.",
        "zh": "这里 $a_1=3$，$d=5$，所以 $a_{10}=3+(10-1)(5)=3+45=48$。若用 $nd=10\\times5=50$ 代替 $(n-1)d$ 会得到 $53$，多算了一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The recursive rule for a sequence is $a_1=2,\\ a_n=a_{n-1}+6$. What is $a_3$?",
        "zh": "一个数列的递推规则为 $a_1=2,\\ a_n=a_{n-1}+6$。$a_3$ 是多少？"
      },
      "choices": [
        "$14$",
        "$12$",
        "$8$",
        "$20$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Build up: $a_2=2+6=8$, then $a_3=8+6=14$. Stopping at $a_2=8$ is the common error of counting one term too few.",
        "zh": "逐项计算：$a_2=2+6=8$，再 $a_3=8+6=14$。停在 $a_2=8$ 是少数一项的常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An arithmetic sequence has $a_1=20$ and $d=-3$. What is $a_6$?",
        "zh": "等差数列 $a_1=20$，$d=-3$，求 $a_6$。"
      },
      "choices": [
        "$2$",
        "$5$",
        "$17$",
        "$38$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$a_6=20+(6-1)(-3)=20-15=5$. Treating $d$ as $+3$ (ignoring the negative sign) would give $35$, and using $6\\times(-3)$ instead of $5\\times(-3)$ gives $2$.",
        "zh": "$a_6=20+(6-1)(-3)=20-15=5$。把 $d$ 当作 $+3$（忽略负号）会得 $35$，用 $6\\times(-3)$ 而非 $5\\times(-3)$ 会得 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which explicit formula generates the sequence 7, 11, 15, 19, ...?",
        "zh": "下列哪个通项公式能生成数列 7, 11, 15, 19, ...？"
      },
      "choices": [
        "$a_n=7+4n$",
        "$a_n=4+7(n-1)$",
        "$a_n=7+4(n-1)$",
        "$a_n=7n+4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With $a_1=7$ and $d=4$: $a_n=7+4(n-1)$. Writing $7+4n$ gives $11$ at $n=1$, off by one $d$. Swapping the roles of $a_1$ and $d$ produces $4+7(n-1)$, the wrong sequence.",
        "zh": "$a_1=7$，$d=4$：$a_n=7+4(n-1)$。写成 $7+4n$ 时 $n=1$ 得 $11$，多了一个 $d$。把 $a_1$ 与 $d$ 互换得到 $4+7(n-1)$，是错误的数列。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why can every arithmetic sequence be viewed as a linear function?",
        "zh": "为什么每个等差数列都可以看作一个线性函数？"
      },
      "choices": [
        "Because its terms grow by a constant ratio",
        "Because the terms eventually repeat",
        "Because it curves upward without bound",
        "Because it has a constant rate of change (the common difference)"
      ],
      "answer": 3,
      "explanation": {
        "en": "The common difference $d$ is a constant rate of change, exactly like the slope of a line, so $a_n=a_1+(n-1)d$ is linear in $n$. A constant ratio describes geometric (exponential) sequences, not arithmetic ones.",
        "zh": "公差 $d$ 是恒定的变化率，正如直线的斜率，因此 $a_n=a_1+(n-1)d$ 关于 $n$ 是线性的。恒定的比值描述的是等比（指数）数列，而非等差数列。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the arithmetic sequence $a_n=a_1+(n-1)d$, which quantity plays the role of the slope when graphed as a line?",
        "zh": "在等差数列 $a_n=a_1+(n-1)d$ 中，当画成直线时，哪个量充当斜率？"
      },
      "choices": [
        "$d$",
        "$n$",
        "$a_n$",
        "$a_1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rewriting gives $a_n=dn+(a_1-d)$, so $d$ is the slope and $a_1-d$ is the y-intercept. The first term $a_1$ sets the starting value, not the rate of change.",
        "zh": "改写为 $a_n=dn+(a_1-d)$，可见 $d$ 是斜率，$a_1-d$ 是 y 轴截距。首项 $a_1$ 决定起始值，而非变化率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The 3rd term of an arithmetic sequence is $12$ and the 4th term is $17$. What is the 1st term?",
        "zh": "一个等差数列第 3 项为 $12$，第 4 项为 $17$，求第 1 项。"
      },
      "choices": [
        "$7$",
        "$2$",
        "$5$",
        "$22$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The difference is $17-12=5$. Step backward: $a_2=12-5=7$, $a_1=7-5=2$. Stopping at $a_2=7$ is the common error of going back one step too few.",
        "zh": "公差为 $17-12=5$。向前倒推：$a_2=12-5=7$，$a_1=7-5=2$。停在 $a_2=7$ 是倒推少一步的常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which sequence is NOT arithmetic?",
        "zh": "下列哪个数列不是等差数列？"
      },
      "choices": [
        "2, 5, 8, 11, ...",
        "10, 6, 2, -2, ...",
        "3, 6, 12, 24, ...",
        "1, 1.5, 2, 2.5, ..."
      ],
      "answer": 2,
      "explanation": {
        "en": "3, 6, 12, 24 multiplies by $2$ each time (a constant ratio), so it is geometric, not arithmetic. The others each add a fixed amount ($+3$, $-4$, $+0.5$).",
        "zh": "3, 6, 12, 24 每次乘以 $2$（恒定比值），是等比数列而非等差数列。其余每次加固定量（$+3$、$-4$、$+0.5$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A theater has 15 seats in row 1 and adds 3 seats per row. How many seats are in row 8?",
        "zh": "剧院第 1 排有 15 个座位，之后每排增加 3 个。第 8 排有多少个座位？"
      },
      "choices": [
        "$39$",
        "$42$",
        "$24$",
        "$36$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $a_1=15$, $d=3$: $a_8=15+(8-1)(3)=15+21=36$. Using $8\\times3=24$ added to $15$ gives $39$ by counting one extra row of increase.",
        "zh": "$a_1=15$，$d=3$：$a_8=15+(8-1)(3)=15+21=36$。用 $8\\times3=24$ 加到 $15$ 会得 $39$，多算了一排的增量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the common difference of the sequence 9, 4, -1, -6, ...",
        "zh": "求数列 9, 4, -1, -6, ... 的公差。"
      },
      "answer": "-5",
      "accept": [
        "-5",
        "-5.0",
        "−5"
      ],
      "explanation": {
        "en": "$4-9=-5$, and the same drop repeats. The common difference is $-5$. Forgetting the negative sign and answering $5$ reverses the direction of the sequence.",
        "zh": "$4-9=-5$，之后每次都减少同样的量。公差为 $-5$。忘记负号答成 $5$ 会颠倒数列的方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence has $a_1=6$ and $d=4$. Find $a_{12}$.",
        "zh": "等差数列 $a_1=6$，$d=4$，求 $a_{12}$。"
      },
      "answer": "50",
      "accept": [
        "50",
        "50.0"
      ],
      "explanation": {
        "en": "$a_{12}=6+(12-1)(4)=6+44=50$. Using $12\\times4=48$ instead of $(12-1)\\times4$ gives $54$, one step of $d$ too many.",
        "zh": "$a_{12}=6+(12-1)(4)=6+44=50$。用 $12\\times4=48$ 代替 $(12-1)\\times4$ 会得 $54$，多算一个 $d$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the sequence 2, 9, 16, 23, ..., which term number equals 65? (Give $n$.)",
        "zh": "对于数列 2, 9, 16, 23, ...，第几项等于 65？（给出 $n$。）"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "n=10"
      ],
      "explanation": {
        "en": "$a_1=2$, $d=7$: solve $65=2+(n-1)(7)$, so $63=7(n-1)$, $n-1=9$, $n=10$. Forgetting to subtract $1$ from $n$ (using $65=2+7n$) gives $n=9$.",
        "zh": "$a_1=2$，$d=7$：解 $65=2+(n-1)(7)$，得 $63=7(n-1)$，$n-1=9$，$n=10$。忘记对 $n$ 减 $1$（用 $65=2+7n$）会得 $n=9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The 2nd term of an arithmetic sequence is 11 and the 5th term is 26. Find the common difference $d$.",
        "zh": "一个等差数列第 2 项为 11，第 5 项为 26，求公差 $d$。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "From term 2 to term 5 is 3 steps: $26-11=15$, so $d=15/3=5$. Dividing by the term-number difference of $5$ or $4$ instead of the $3$ steps between them gives a wrong $d$.",
        "zh": "从第 2 项到第 5 项共 3 步：$26-11=15$，所以 $d=15/3=5$。用项数差 $5$ 或 $4$ 而非中间的 3 步来除会得到错误的 $d$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write the value of $a_1$ if the explicit formula is $a_n=-3+7(n-1)$.",
        "zh": "若通项公式为 $a_n=-3+7(n-1)$，写出 $a_1$ 的值。"
      },
      "answer": "-3",
      "accept": [
        "-3",
        "-3.0",
        "−3"
      ],
      "explanation": {
        "en": "Substitute $n=1$: $a_1=-3+7(0)=-3$. The number $7$ is the common difference, not the first term.",
        "zh": "代入 $n=1$：$a_1=-3+7(0)=-3$。数字 $7$ 是公差，而不是首项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ladder's rungs decrease evenly: the bottom rung is 100 cm wide and each rung up is 4 cm narrower. How wide (cm) is the 6th rung from the bottom?",
        "zh": "梯子的横档均匀变窄：最底档宽 100 厘米，每往上一档窄 4 厘米。从底往上数第 6 档宽多少厘米？"
      },
      "answer": "80",
      "accept": [
        "80",
        "80.0",
        "80cm",
        "80 cm"
      ],
      "explanation": {
        "en": "$a_1=100$, $d=-4$: $a_6=100+(6-1)(-4)=100-20=80$ cm. Using $6\\times(-4)=-24$ instead of $5\\times(-4)$ gives $76$, subtracting one extra step.",
        "zh": "$a_1=100$，$d=-4$：$a_6=100+(6-1)(-4)=100-20=80$ 厘米。用 $6\\times(-4)=-24$ 而非 $5\\times(-4)$ 会得 $76$，多减一步。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the 20th term of the arithmetic sequence 1, 4, 7, 10, ...",
        "zh": "求等差数列 1, 4, 7, 10, ... 的第 20 项。"
      },
      "answer": "58",
      "accept": [
        "58",
        "58.0"
      ],
      "explanation": {
        "en": "$a_1=1$, $d=3$: $a_{20}=1+(20-1)(3)=1+57=58$. Using $20\\times3=60$ then adding $1$ gives $61$, one step of $d$ too many.",
        "zh": "$a_1=1$，$d=3$：$a_{20}=1+(20-1)(3)=1+57=58$。用 $20\\times3=60$ 再加 $1$ 会得 $61$，多算一个 $d$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence starts 3, 3.5, 4, 4.5, ... Find the 11th term.",
        "zh": "一个等差数列为 3, 3.5, 4, 4.5, ...，求第 11 项。"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "8.00"
      ],
      "explanation": {
        "en": "$a_1=3$, $d=0.5$: $a_{11}=3+(11-1)(0.5)=3+5=8$. Using $11\\times0.5=5.5$ added to $3$ gives $8.5$, counting one extra half-step.",
        "zh": "$a_1=3$，$d=0.5$：$a_{11}=3+(11-1)(0.5)=3+5=8$。用 $11\\times0.5=5.5$ 加到 $3$ 会得 $8.5$，多算半步。"
      }
    }
  ],
  "sequences/geometric-sequences": [
    {
      "type": "mc",
      "question": {
        "en": "What is the common ratio of the geometric sequence 3, 6, 12, 24, ...?",
        "zh": "等比数列 3, 6, 12, 24, ... 的公比是多少？"
      },
      "choices": [
        "$2$",
        "$3$",
        "$6$",
        "$12$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Divide any term by the previous one: $6/3=2$. The common ratio is $2$. A common slip is to subtract terms ($6-3=3$), which finds a difference, not a ratio.",
        "zh": "用后一项除以前一项：$6/3=2$，公比为 $2$。常见错误是相减（$6-3=3$），那求的是差而不是比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula is the explicit (closed) form for a geometric sequence?",
        "zh": "下列哪个是等比数列的通项（显式）公式？"
      },
      "choices": [
        "$a_n=a_1+(n-1)d$",
        "$a_n=a_1 \\cdot r^{n-1}$",
        "$a_n=a_{n-1} \\cdot r$",
        "$a_n=a_1 \\cdot r^{n}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The explicit form is $a_n=a_1 \\cdot r^{n-1}$. The form $a_n=a_{n-1}\\cdot r$ is recursive (needs the previous term), and using $r^{n}$ instead of $r^{n-1}$ multiplies by one extra factor of $r$.",
        "zh": "通项公式为 $a_n=a_1 \\cdot r^{n-1}$。$a_n=a_{n-1}\\cdot r$ 是递推式（需要前一项），而用 $r^{n}$ 代替 $r^{n-1}$ 会多乘一个 $r$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the 5th term of the geometric sequence 2, 6, 18, 54, ...",
        "zh": "求等比数列 2, 6, 18, 54, ... 的第 5 项。"
      },
      "choices": [
        "$216$",
        "$108$",
        "$162$",
        "$486$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$a_1=2$, $r=3$: $a_5=2\\cdot3^{5-1}=2\\cdot81=162$. Using $3^{5}=243$ instead of $3^{4}$ multiplies by one extra $r$ and gives $486$.",
        "zh": "$a_1=2$，$r=3$：$a_5=2\\cdot3^{5-1}=2\\cdot81=162$。用 $3^{5}=243$ 代替 $3^{4}$ 会多乘一个 $r$，得到 $486$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The recursive rule is $a_1=5,\\ a_n=a_{n-1}\\cdot 2$. What is $a_4$?",
        "zh": "递推规则为 $a_1=5,\\ a_n=a_{n-1}\\cdot 2$。$a_4$ 是多少？"
      },
      "choices": [
        "$20$",
        "$10$",
        "$80$",
        "$40$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Build up: $a_2=10$, $a_3=20$, $a_4=40$. Stopping at $a_3=20$ counts one term too few.",
        "zh": "逐项计算：$a_2=10$，$a_3=20$，$a_4=40$。停在 $a_3=20$ 少数了一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric sequence has $a_1=64$ and $r=\\frac{1}{2}$. What is $a_4$?",
        "zh": "等比数列 $a_1=64$，$r=\\frac{1}{2}$，求 $a_4$。"
      },
      "choices": [
        "$8$",
        "$4$",
        "$16$",
        "$32$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$a_4=64\\cdot\\left(\\frac{1}{2}\\right)^{3}=64\\cdot\\frac{1}{8}=8$. Using the exponent $4$ instead of $n-1=3$ gives $4$, one halving too many.",
        "zh": "$a_4=64\\cdot\\left(\\frac{1}{2}\\right)^{3}=64\\cdot\\frac{1}{8}=8$。用指数 $4$ 而非 $n-1=3$ 会得 $4$，多减半一次。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which explicit formula generates the sequence 5, 15, 45, 135, ...?",
        "zh": "下列哪个通项公式能生成数列 5, 15, 45, 135, ...？"
      },
      "choices": [
        "$a_n=5\\cdot3^{n}$",
        "$a_n=5\\cdot3^{n-1}$",
        "$a_n=5+3(n-1)$",
        "$a_n=3\\cdot5^{n-1}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $a_1=5$, $r=3$: $a_n=5\\cdot3^{n-1}$. Using $3^{n}$ gives $15$ at $n=1$, off by a factor of $r$. The form $5+3(n-1)$ is arithmetic (adds $3$), not geometric.",
        "zh": "$a_1=5$，$r=3$：$a_n=5\\cdot3^{n-1}$。用 $3^{n}$ 时 $n=1$ 得 $15$，差一个 $r$。$5+3(n-1)$ 是等差（每次加 $3$），不是等比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why can every geometric sequence be viewed as an exponential function?",
        "zh": "为什么每个等比数列都可以看作一个指数函数？"
      },
      "choices": [
        "Because it changes by a constant amount each step",
        "Because its terms are always positive",
        "Because it is multiplied by a constant ratio each step",
        "Because it forms a straight line when graphed"
      ],
      "answer": 2,
      "explanation": {
        "en": "Repeated multiplication by the constant ratio $r$ makes $a_n=a_1\\cdot r^{n-1}$ an exponential function of $n$. Changing by a constant amount each step describes an arithmetic (linear) pattern instead.",
        "zh": "每步重复乘以恒定比值 $r$，使 $a_n=a_1\\cdot r^{n-1}$ 成为关于 $n$ 的指数函数。每步变化固定的量描述的是等差（线性）规律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $a_n=a_1\\cdot r^{n-1}$, which quantity acts like the base of the exponential function?",
        "zh": "在 $a_n=a_1\\cdot r^{n-1}$ 中，哪个量相当于指数函数的底数？"
      },
      "choices": [
        "$a_n$",
        "$n$",
        "$a_1$",
        "$r$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The common ratio $r$ is the repeated multiplier, so it is the base. The first term $a_1$ is the initial value (like the coefficient), not the base.",
        "zh": "公比 $r$ 是重复的乘数，因此是底数。首项 $a_1$ 是初始值（相当于系数），而非底数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which sequence is geometric?",
        "zh": "下列哪个数列是等比数列？"
      },
      "choices": [
        "2, 4, 8, 16, ...",
        "4, 7, 10, 13, ...",
        "5, 10, 15, 20, ...",
        "1, 4, 9, 16, ..."
      ],
      "answer": 0,
      "explanation": {
        "en": "2, 4, 8, 16 multiplies by $2$ each time (constant ratio), so it is geometric. Sequences that add a fixed amount are arithmetic, and 1, 4, 9, 16 (perfect squares) has neither a constant ratio nor a constant difference.",
        "zh": "2, 4, 8, 16 每次乘以 $2$（恒定比值），是等比数列。每次加固定量的是等差数列，而 1, 4, 9, 16（完全平方数）既无恒定比值也无恒定差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The 2nd term of a geometric sequence is 12 and the 3rd term is 36. What is the common ratio?",
        "zh": "一个等比数列第 2 项为 12，第 3 项为 36，求公比。"
      },
      "choices": [
        "$4$",
        "$3$",
        "$24$",
        "$\\frac{1}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Divide consecutive terms: $36/12=3$. A common slip is to subtract ($36-12=24$), which gives a difference, not a ratio.",
        "zh": "相邻两项相除：$36/12=3$。常见错误是相减（$36-12=24$），那得到的是差而非比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric sequence has $a_1=3$ and $r=-2$. What is $a_4$?",
        "zh": "等比数列 $a_1=3$，$r=-2$，求 $a_4$。"
      },
      "choices": [
        "$24$",
        "$-12$",
        "$-24$",
        "$48$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$a_4=3\\cdot(-2)^{3}=3\\cdot(-8)=-24$. Since the exponent $3$ is odd, the result is negative; treating $(-2)^3$ as positive $8$ gives $24$.",
        "zh": "$a_4=3\\cdot(-2)^{3}=3\\cdot(-8)=-24$。指数 $3$ 为奇数，结果为负；把 $(-2)^3$ 当作正的 $8$ 会得 $24$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A colony of bacteria doubles every hour, starting at 100. How many are there after 5 hours?",
        "zh": "细菌菌落每小时翻倍，起始为 100。5 小时后有多少个？"
      },
      "choices": [
        "$1000$",
        "$1600$",
        "$500$",
        "$3200$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Doubling gives $100\\cdot2^{5}=100\\cdot32=3200$. Using $2^{4}=16$ (treating the start as hour 1 instead of hour 0) gives $1600$, one doubling too few.",
        "zh": "翻倍得 $100\\cdot2^{5}=100\\cdot32=3200$。用 $2^{4}=16$（把起始当作第 1 小时而非第 0 小时）会得 $1600$，少翻倍一次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the common ratio of the sequence 80, 40, 20, 10, ...",
        "zh": "求数列 80, 40, 20, 10, ... 的公比。"
      },
      "answer": "0.5",
      "accept": [
        "0.5",
        "1/2",
        ".5",
        "0.50",
        "½"
      ],
      "explanation": {
        "en": "Divide consecutive terms: $40/80=0.5$. The sequence is shrinking, so the ratio is a fraction between 0 and 1, not the difference $-40$.",
        "zh": "相邻两项相除：$40/80=0.5$。数列在缩小，因此公比是 0 到 1 之间的分数，而不是差 $-40$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_1=7$ and $r=2$. Find $a_5$.",
        "zh": "等比数列 $a_1=7$，$r=2$，求 $a_5$。"
      },
      "answer": "112",
      "accept": [
        "112",
        "112.0"
      ],
      "explanation": {
        "en": "$a_5=7\\cdot2^{5-1}=7\\cdot16=112$. Using $2^{5}=32$ instead of $2^{4}$ multiplies by one extra $r$ and gives $224$.",
        "zh": "$a_5=7\\cdot2^{5-1}=7\\cdot16=112$。用 $2^{5}=32$ 代替 $2^{4}$ 会多乘一个 $r$，得到 $224$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the 6th term of the geometric sequence 1, 3, 9, 27, ...",
        "zh": "求等比数列 1, 3, 9, 27, ... 的第 6 项。"
      },
      "answer": "243",
      "accept": [
        "243",
        "243.0"
      ],
      "explanation": {
        "en": "$a_1=1$, $r=3$: $a_6=1\\cdot3^{6-1}=3^{5}=243$. Using $3^{6}=729$ instead of $3^{5}$ counts one extra factor of $r$.",
        "zh": "$a_1=1$，$r=3$：$a_6=1\\cdot3^{6-1}=3^{5}=243$。用 $3^{6}=729$ 代替 $3^{5}$ 会多算一个 $r$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_1=800$ and $r=\\frac{1}{2}$. Find $a_3$.",
        "zh": "等比数列 $a_1=800$，$r=\\frac{1}{2}$，求 $a_3$。"
      },
      "answer": "200",
      "accept": [
        "200",
        "200.0"
      ],
      "explanation": {
        "en": "$a_3=800\\cdot\\left(\\frac{1}{2}\\right)^{2}=800\\cdot\\frac{1}{4}=200$. Using the exponent $3$ instead of $n-1=2$ gives $100$, one halving too many.",
        "zh": "$a_3=800\\cdot\\left(\\frac{1}{2}\\right)^{2}=800\\cdot\\frac{1}{4}=200$。用指数 $3$ 而非 $n-1=2$ 会得 $100$，多减半一次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write the common ratio $r$ for the explicit formula $a_n=6\\cdot4^{n-1}$.",
        "zh": "写出通项公式 $a_n=6\\cdot4^{n-1}$ 的公比 $r$。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The base of the exponent is the common ratio, so $r=4$. The number $6$ is the first term $a_1$, not the ratio.",
        "zh": "指数的底数就是公比，所以 $r=4$。数字 $6$ 是首项 $a_1$，不是公比。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The 1st term of a geometric sequence is 2 and the 4th term is 54. Find the common ratio $r$.",
        "zh": "一个等比数列第 1 项为 2，第 4 项为 54，求公比 $r$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$a_4=a_1\\cdot r^{3}$, so $54=2r^{3}$, $r^{3}=27$, $r=3$. Dividing $54/2=27$ and stopping there mistakes $r^3$ for $r$.",
        "zh": "$a_4=a_1\\cdot r^{3}$，所以 $54=2r^{3}$，$r^{3}=27$，$r=3$。算 $54/2=27$ 就停下会把 $r^3$ 误当作 $r$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car worth $\\$20000$ loses half its value each year. What is it worth (in dollars) after 2 years?",
        "zh": "一辆价值 $\\$20000$ 的汽车每年价值减半。2 年后价值多少美元？"
      },
      "answer": "5000",
      "accept": [
        "5000",
        "5000.0",
        "$5000",
        "5,000"
      ],
      "explanation": {
        "en": "$a_1=20000$, $r=\\frac{1}{2}$, after 2 years: $20000\\cdot\\left(\\frac{1}{2}\\right)^{2}=20000\\cdot\\frac{1}{4}=5000$. Halving only once gives $10000$, one step too few.",
        "zh": "$a_1=20000$，$r=\\frac{1}{2}$，2 年后：$20000\\cdot\\left(\\frac{1}{2}\\right)^{2}=20000\\cdot\\frac{1}{4}=5000$。只减半一次会得 $10000$，少算一步。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the 7th term of the geometric sequence 4, 8, 16, 32, ...",
        "zh": "求等比数列 4, 8, 16, 32, ... 的第 7 项。"
      },
      "answer": "256",
      "accept": [
        "256",
        "256.0"
      ],
      "explanation": {
        "en": "$a_1=4$, $r=2$: $a_7=4\\cdot2^{7-1}=4\\cdot64=256$. Using $2^{7}=128$ instead of $2^{6}$ multiplies by one extra $r$ and gives $512$.",
        "zh": "$a_1=4$，$r=2$：$a_7=4\\cdot2^{7-1}=4\\cdot64=256$。用 $2^{7}=128$ 代替 $2^{6}$ 会多乘一个 $r$，得到 $512$。"
      }
    }
  ],
  "linear-exponential-functions/exponential-functions-and-models": [
    {
      "type": "mc",
      "question": {
        "en": "For the exponential function $y = 3 \\cdot 2^x$, what is the initial value (the $y$-intercept)?",
        "zh": "对于指数函数 $y = 3 \\cdot 2^x$，初始值（$y$ 轴截距）是多少？"
      },
      "choices": [
        "$3$",
        "$2$",
        "$6$",
        "$8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The $y$-intercept is the value of $y$ when $x = 0$. Since $2^0 = 1$, we get $y = 3 \\cdot 1 = 3$. The value $3$ is the coefficient $a$ in $y = a \\cdot b^x$. Picking $2$ confuses the base $b$ with the initial value.",
        "zh": "$y$ 轴截距是 $x = 0$ 时的 $y$ 值。因为 $2^0 = 1$，所以 $y = 3 \\cdot 1 = 3$。数值 $3$ 就是 $y = a \\cdot b^x$ 中的系数 $a$。选 $2$ 是把底数 $b$ 误当成了初始值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Does the function $y = 5 \\cdot (0.8)^x$ represent growth or decay?",
        "zh": "函数 $y = 5 \\cdot (0.8)^x$ 表示增长还是衰减？"
      },
      "choices": [
        "Growth",
        "Decay",
        "Neither — it is constant",
        "Linear growth"
      ],
      "answer": 1,
      "explanation": {
        "en": "When the base $b$ satisfies $0 < b < 1$, the function decays. Here $b = 0.8 < 1$, so it is decay. Thinking any positive base means growth ignores that a base below $1$ shrinks the output each step.",
        "zh": "当底数 $b$ 满足 $0 < b < 1$ 时，函数衰减。这里 $b = 0.8 < 1$，所以是衰减。以为只要底数为正就是增长，忽略了小于 $1$ 的底数会让输出每步变小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $y = 2 \\cdot 3^x$ at $x = 2$.",
        "zh": "求 $y = 2 \\cdot 3^x$ 在 $x = 2$ 时的值。"
      },
      "choices": [
        "$36$",
        "$12$",
        "$18$",
        "$6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Apply the exponent before multiplying: $3^2 = 9$, then $2 \\cdot 9 = 18$. Getting $36$ comes from multiplying $2 \\cdot 3 = 6$ first and then squaring, which violates order of operations.",
        "zh": "先算指数再相乘：$3^2 = 9$，再 $2 \\cdot 9 = 18$。得到 $36$ 是先算 $2 \\cdot 3 = 6$ 再平方，违反了运算顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these tables represents an exponential function (constant ratio between successive $y$-values)?",
        "zh": "下列哪个表格表示指数函数（相邻 $y$ 值之间比值不变）？"
      },
      "choices": [
        "$y$: $2, 4, 6, 8$",
        "$y$: $10, 7, 4, 1$",
        "$y$: $5, 8, 11, 14$",
        "$y$: $1, 3, 9, 27$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Exponential functions multiply by a constant factor each step. In $1, 3, 9, 27$ each term is $\\times 3$. The sequence $2, 4, 6, 8$ adds $2$ each time, which is linear (constant difference, not constant ratio).",
        "zh": "指数函数每步乘以一个不变的因子。在 $1, 3, 9, 27$ 中每项都是 $\\times 3$。而 $2, 4, 6, 8$ 是每次加 $2$，属于线性（差不变，而非比不变）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $y = 100 \\cdot (1.5)^x$, what is the growth factor?",
        "zh": "在 $y = 100 \\cdot (1.5)^x$ 中，增长因子是多少？"
      },
      "choices": [
        "$1.5$",
        "$0.5$",
        "$100$",
        "$50$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The growth factor is the base $b = 1.5$; the output is multiplied by $1.5$ each step. Choosing $0.5$ reports only the percent increase ($50\\%$) as a decimal rather than the full multiplier.",
        "zh": "增长因子是底数 $b = 1.5$；输出每步乘以 $1.5$。选 $0.5$ 只是把增长的百分比（$50\\%$）写成小数，而不是完整的乘数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An exponential model has base $b = 1.05$. What is the percent rate of increase per step?",
        "zh": "某指数模型的底数为 $b = 1.05$。每步的增长百分率是多少？"
      },
      "choices": [
        "$105\\%$",
        "$5\\%$",
        "$0.05\\%$",
        "$1.05\\%$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Write $b = 1 + r$, so $r = 1.05 - 1 = 0.05 = 5\\%$. Answering $105\\%$ mistakes the whole multiplier for the growth rate; the extra amount added each step is only $5\\%$.",
        "zh": "写成 $b = 1 + r$，则 $r = 1.05 - 1 = 0.05 = 5\\%$。答 $105\\%$ 是把整个乘数当成增长率；每步实际增加的只有 $5\\%$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An exponential model has base $b = 0.9$. What is the percent rate of decrease per step?",
        "zh": "某指数模型的底数为 $b = 0.9$。每步的衰减百分率是多少？"
      },
      "choices": [
        "$90\\%$",
        "$9\\%$",
        "$10\\%$",
        "$1\\%$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Write $b = 1 - r$, so $r = 1 - 0.9 = 0.10 = 10\\%$. Answering $90\\%$ reports the fraction that remains, not the fraction lost each step.",
        "zh": "写成 $b = 1 - r$，则 $r = 1 - 0.9 = 0.10 = 10\\%$。答 $90\\%$ 报的是每步剩下的比例，而不是失去的比例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $y = 4 \\cdot \\left(\\frac{1}{2}\\right)^x$ at $x = 3$.",
        "zh": "求 $y = 4 \\cdot \\left(\\frac{1}{2}\\right)^x$ 在 $x = 3$ 时的值。"
      },
      "choices": [
        "$2$",
        "$1$",
        "$6$",
        "$0.5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$, so $y = 4 \\cdot \\frac{1}{8} = 0.5$. Getting $2$ comes from halving only once ($4 \\div 2$) instead of applying the exponent three times.",
        "zh": "$\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$，所以 $y = 4 \\cdot \\frac{1}{8} = 0.5$。得到 $2$ 是只减半一次（$4 \\div 2$），而没有把指数应用三次。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A bacteria population doubles every hour and starts at $50$. Which model fits?",
        "zh": "某细菌数量每小时翻倍，初始为 $50$。哪个模型合适？"
      },
      "choices": [
        "$y = 50 \\cdot 2^x$",
        "$y = 50 + 2x$",
        "$y = 2 \\cdot 50^x$",
        "$y = 50 \\cdot x^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Start value $a = 50$ and a doubling factor $b = 2$ give $y = 50 \\cdot 2^x$. The form $y = 50 + 2x$ adds a fixed amount each hour (linear), which does not double the population.",
        "zh": "初始值 $a = 50$、翻倍因子 $b = 2$，得 $y = 50 \\cdot 2^x$。而 $y = 50 + 2x$ 是每小时加固定量（线性），并不会让数量翻倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Function A is linear, $y = 5x$; Function B is exponential, $y = 2^x$. Which is true for large $x$?",
        "zh": "函数 A 为线性 $y = 5x$；函数 B 为指数 $y = 2^x$。当 $x$ 很大时，下列哪项正确？"
      },
      "choices": [
        "Function A always stays larger",
        "Function B eventually exceeds Function A",
        "They are always equal",
        "Function B stays smaller forever"
      ],
      "answer": 1,
      "explanation": {
        "en": "Exponential growth eventually outpaces any linear growth. Although $5x$ is larger for small $x$, $2^x$ multiplies rather than adds, so it eventually overtakes and stays larger. Assuming the linear function wins forever ignores that repeated multiplication accelerates.",
        "zh": "指数增长最终会超过任何线性增长。虽然在 $x$ 较小时 $5x$ 更大，但 $2^x$ 是乘而不是加，最终会反超并保持更大。以为线性函数永远领先，忽略了反复相乘会不断加速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation represents exponential decay?",
        "zh": "下列哪个方程表示指数衰减？"
      },
      "choices": [
        "$y = 4 \\cdot 3^x$",
        "$y = 4 + 0.75x$",
        "$y = 4 \\cdot (0.75)^x$",
        "$y = 4 \\cdot (1.75)^x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Decay needs a base strictly between $0$ and $1$; only $0.75$ qualifies. The base $1.75$ is greater than $1$, so it grows, and $4 + 0.75x$ is linear rather than exponential.",
        "zh": "衰减需要底数严格在 $0$ 与 $1$ 之间，只有 $0.75$ 符合。底数 $1.75$ 大于 $1$，所以是增长；而 $4 + 0.75x$ 是线性而非指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y = a \\cdot b^x$ (with $a > 0$, $b > 1$) passes through $(0, 6)$. What is $a$?",
        "zh": "$y = a \\cdot b^x$（$a > 0$，$b > 1$）的图像过点 $(0, 6)$。$a$ 是多少？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$b$",
        "$6$"
      ],
      "answer": 3,
      "explanation": {
        "en": "At $x = 0$, $b^0 = 1$, so $y = a = 6$. The point where the curve crosses the $y$-axis always gives $a$ directly. Answering $1$ confuses the value of $b^0$ with the value of $a$.",
        "zh": "当 $x = 0$ 时 $b^0 = 1$，所以 $y = a = 6$。曲线与 $y$ 轴的交点总能直接给出 $a$。答 $1$ 是把 $b^0$ 的值与 $a$ 的值混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $y = 6 \\cdot 2^x$ at $x = 3$.",
        "zh": "求 $y = 6 \\cdot 2^x$ 在 $x = 3$ 时的值。"
      },
      "answer": "48",
      "accept": [
        "48.0",
        "+48"
      ],
      "explanation": {
        "en": "$2^3 = 8$, then $6 \\cdot 8 = 48$. Apply the exponent first, then multiply by the initial value.",
        "zh": "$2^3 = 8$，再 $6 \\cdot 8 = 48$。先算指数，再乘以初始值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-intercept of $y = 9 \\cdot 3^x$?",
        "zh": "$y = 9 \\cdot 3^x$ 的 $y$ 轴截距是多少？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9",
        "(0,9)",
        "(0, 9)"
      ],
      "explanation": {
        "en": "At $x = 0$, $3^0 = 1$, so $y = 9 \\cdot 1 = 9$. The coefficient in front of the base is the initial value.",
        "zh": "当 $x = 0$ 时 $3^0 = 1$，所以 $y = 9 \\cdot 1 = 9$。底数前面的系数就是初始值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity grows by $8\\%$ each year. What base $b$ goes in $y = a \\cdot b^x$? (Give a decimal.)",
        "zh": "某数量每年增长 $8\\%$。$y = a \\cdot b^x$ 中的底数 $b$ 是多少？（用小数表示。）"
      },
      "answer": "1.08",
      "accept": [
        "1.080",
        "+1.08"
      ],
      "explanation": {
        "en": "Growth base is $b = 1 + r = 1 + 0.08 = 1.08$. Add the growth rate to $1$; using just $0.08$ would forget to keep the original amount.",
        "zh": "增长底数为 $b = 1 + r = 1 + 0.08 = 1.08$。把增长率加到 $1$ 上；只用 $0.08$ 会丢掉原有的部分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $y = 1000 \\cdot (0.5)^x$ at $x = 2$.",
        "zh": "求 $y = 1000 \\cdot (0.5)^x$ 在 $x = 2$ 时的值。"
      },
      "answer": "250",
      "accept": [
        "250.0",
        "+250"
      ],
      "explanation": {
        "en": "$(0.5)^2 = 0.25$, then $1000 \\cdot 0.25 = 250$. Square the base first; halving only once would wrongly give $500$.",
        "zh": "$(0.5)^2 = 0.25$，再 $1000 \\cdot 0.25 = 250$。先对底数平方；只减半一次会错得 $500$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An exponential function passes through $(0, 12)$. What is the initial value $a$?",
        "zh": "某指数函数过点 $(0, 12)$。初始值 $a$ 是多少？"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "At $x = 0$ the base raised to $0$ equals $1$, so $y = a = 12$. The $y$-intercept of an exponential curve is always its initial value.",
        "zh": "当 $x = 0$ 时底数的 $0$ 次方等于 $1$，所以 $y = a = 12$。指数曲线的 $y$ 轴截距总是它的初始值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $y = 3 \\cdot 4^x$ at $x = 0$.",
        "zh": "求 $y = 3 \\cdot 4^x$ 在 $x = 0$ 时的值。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Any nonzero base to the power $0$ is $1$, so $4^0 = 1$ and $y = 3 \\cdot 1 = 3$. It is not $0$ — raising to the zero power gives $1$, not $0$.",
        "zh": "任何非零底数的 $0$ 次方都是 $1$，所以 $4^0 = 1$，$y = 3 \\cdot 1 = 3$。结果不是 $0$——$0$ 次方得 $1$ 而不是 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car worth $\\$20000$ loses $10\\%$ of its value each year. What is it worth after $1$ year? (Dollars, no symbol.)",
        "zh": "一辆价值 $\\$20000$ 的汽车每年贬值 $10\\%$。$1$ 年后价值多少？（美元，不带符号。）"
      },
      "answer": "18000",
      "accept": [
        "18000.0",
        "18,000",
        "+18000",
        "$18000"
      ],
      "explanation": {
        "en": "Decay base $b = 1 - 0.10 = 0.90$, so value $= 20000 \\cdot 0.90 = 18000$. Subtracting $10$ dollars instead of $10\\%$ of the value would be the common slip.",
        "zh": "衰减底数 $b = 1 - 0.10 = 0.90$，所以价值 $= 20000 \\cdot 0.90 = 18000$。常见错误是减去 $10$ 美元而不是价值的 $10\\%$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $y = 2^x$ at $x = 5$.",
        "zh": "求 $y = 2^x$ 在 $x = 5$ 时的值。"
      },
      "answer": "32",
      "accept": [
        "32.0",
        "+32"
      ],
      "explanation": {
        "en": "$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Multiplying $2 \\cdot 5 = 10$ instead treats the exponent as a factor, which is not how powers work.",
        "zh": "$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$。算成 $2 \\cdot 5 = 10$ 是把指数当成了乘数，这不是幂的运算方式。"
      }
    }
  ],
  "linear-exponential-functions/features-of-functions-and-transformations": [
    {
      "type": "mc",
      "question": {
        "en": "What does the $x$-intercept of a function's graph represent?",
        "zh": "函数图像的 $x$ 轴截距表示什么？"
      },
      "choices": [
        "The point where $y = 0$",
        "The point where $x = 0$",
        "The highest point of the graph",
        "The slope of the graph"
      ],
      "answer": 0,
      "explanation": {
        "en": "An $x$-intercept is where the graph crosses the $x$-axis, and there the output is $y = 0$. Saying it is where $x = 0$ describes the $y$-intercept instead, confusing which coordinate is zero.",
        "zh": "$x$ 轴截距是图像与 $x$ 轴相交处，此处输出 $y = 0$。说成 $x = 0$ 描述的是 $y$ 轴截距，混淆了哪个坐标为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $y$-intercept of $f(x) = 2x + 7$?",
        "zh": "$f(x) = 2x + 7$ 的 $y$ 轴截距是多少？"
      },
      "choices": [
        "$2$",
        "$7$",
        "$-7$",
        "$0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $x = 0$: $f(0) = 2(0) + 7 = 7$. The constant term is the $y$-intercept. Choosing $2$ reports the slope, which describes steepness, not where the line crosses the $y$-axis.",
        "zh": "令 $x = 0$：$f(0) = 2(0) + 7 = 7$。常数项就是 $y$ 轴截距。选 $2$ 报的是斜率，描述陡峭程度，而不是与 $y$ 轴的交点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On which interval is $f(x) = x^2$ decreasing?",
        "zh": "$f(x) = x^2$ 在哪个区间上递减？"
      },
      "choices": [
        "$x > 0$",
        "All real numbers",
        "$x < 0$",
        "It never decreases"
      ],
      "answer": 2,
      "explanation": {
        "en": "The parabola falls as $x$ moves toward $0$ from the left, so it decreases for $x < 0$ and increases for $x > 0$. Picking $x > 0$ reverses the two halves of the parabola.",
        "zh": "抛物线从左侧向 $0$ 靠近时下降，所以在 $x < 0$ 上递减、在 $x > 0$ 上递增。选 $x > 0$ 把抛物线的两半弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph $g(x) = f(x) + 4$ is the graph of $f$ shifted how?",
        "zh": "$g(x) = f(x) + 4$ 的图像是把 $f$ 的图像如何平移？"
      },
      "choices": [
        "Down $4$ units",
        "Right $4$ units",
        "Left $4$ units",
        "Up $4$ units"
      ],
      "answer": 3,
      "explanation": {
        "en": "Adding a constant outside the function, $f(x) + 4$, raises every output by $4$, shifting the graph up. Reading it as a horizontal shift confuses outside changes (vertical) with inside changes (horizontal).",
        "zh": "在函数外部加常数 $f(x) + 4$ 使每个输出增加 $4$，图像向上平移。把它当成水平平移，是混淆了外部变化（竖直）与内部变化（水平）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph $g(x) = f(x - 3)$ is the graph of $f$ shifted how?",
        "zh": "$g(x) = f(x - 3)$ 的图像是把 $f$ 的图像如何平移？"
      },
      "choices": [
        "Right $3$ units",
        "Left $3$ units",
        "Down $3$ units",
        "Up $3$ units"
      ],
      "answer": 0,
      "explanation": {
        "en": "A change inside the function, $f(x - 3)$, shifts horizontally in the opposite direction of the sign, so the graph moves right $3$. Reading $-3$ as a leftward move follows the sign literally and reverses the true direction.",
        "zh": "函数内部的变化 $f(x - 3)$ 使图像沿与符号相反的方向水平平移，所以向右移 $3$。把 $-3$ 读作向左，是照符号直译，方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does $g(x) = -f(x)$ transform the graph of $f$?",
        "zh": "$g(x) = -f(x)$ 如何变换 $f$ 的图像？"
      },
      "choices": [
        "Reflection across the $y$-axis",
        "Reflection across the $x$-axis",
        "Shift down",
        "Vertical stretch"
      ],
      "answer": 1,
      "explanation": {
        "en": "Negating the output, $-f(x)$, flips each point over the $x$-axis (up becomes down). Reflecting across the $y$-axis instead comes from $f(-x)$, which negates the input, not the output.",
        "zh": "对输出取负 $-f(x)$ 使每个点关于 $x$ 轴翻转（上变下）。关于 $y$ 轴的反射来自 $f(-x)$，那是对输入取负而非对输出取负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does $g(x) = 3f(x)$ transform the graph of $f$?",
        "zh": "$g(x) = 3f(x)$ 如何变换 $f$ 的图像？"
      },
      "choices": [
        "Shift up $3$ units",
        "Horizontal stretch",
        "Vertical stretch by factor $3$",
        "Shift right $3$ units"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying the whole output by $3$ stretches the graph vertically by a factor of $3$; each $y$-value triples. Treating it as a shift up confuses multiplying the output with adding to it.",
        "zh": "把整个输出乘以 $3$ 使图像竖直方向拉伸 $3$ 倍；每个 $y$ 值变为原来的三倍。当成向上平移，是把乘以输出与加到输出上混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the maximum value of $f(x) = -x^2 + 5$?",
        "zh": "$f(x) = -x^2 + 5$ 的最大值是多少？"
      },
      "choices": [
        "$0$",
        "$-5$",
        "There is no maximum",
        "$5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Because $-x^2 \\le 0$ with its largest value $0$ at $x = 0$, the greatest output is $0 + 5 = 5$. Answering $-5$ mishandles the sign of the constant term.",
        "zh": "因为 $-x^2 \\le 0$，在 $x = 0$ 处取最大值 $0$，所以最大输出为 $0 + 5 = 5$。答 $-5$ 是把常数项的符号处理错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As $x \\rightarrow +\\infty$, what is the end behavior of $f(x) = 2^x$?",
        "zh": "当 $x \\rightarrow +\\infty$ 时，$f(x) = 2^x$ 的末端行为是什么？"
      },
      "choices": [
        "$f(x) \\rightarrow +\\infty$",
        "$f(x) \\rightarrow -\\infty$",
        "$f(x)$ stays constant",
        "$f(x) \\rightarrow 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "An increasing exponential grows without bound as $x$ increases, so $f(x) \\rightarrow +\\infty$. Approaching $0$ describes the other end (as $x \\rightarrow -\\infty$), not the right-hand behavior.",
        "zh": "递增的指数函数在 $x$ 增大时无限增长，所以 $f(x) \\rightarrow +\\infty$。趋于 $0$ 描述的是另一端（$x \\rightarrow -\\infty$），而非右侧行为。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Line A has equation $y = 4x + 1$. Line B is given by a table where $y$ increases by $6$ every time $x$ increases by $2$. Which line has the greater rate of change?",
        "zh": "直线 A 的方程为 $y = 4x + 1$。直线 B 由表格给出：$x$ 每增加 $2$，$y$ 增加 $6$。哪条直线的变化率更大？"
      },
      "choices": [
        "Line B",
        "Line A",
        "They are equal",
        "Cannot be determined"
      ],
      "answer": 1,
      "explanation": {
        "en": "Line A has slope $4$. Line B's slope is $\\frac{6}{2} = 3$. Since $4 > 3$, Line A changes faster. Comparing $4$ to the raw rise $6$ (instead of the rate $3$) would wrongly favor Line B.",
        "zh": "直线 A 的斜率为 $4$。直线 B 的斜率为 $\\frac{6}{2} = 3$。因为 $4 > 3$，直线 A 变化更快。若把 $4$ 与原始增量 $6$（而非变化率 $3$）比较，会错误地认为直线 B 更大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph $g(x) = f(x) - 6$ moves the graph of $f$ which way?",
        "zh": "$g(x) = f(x) - 6$ 把 $f$ 的图像向哪个方向移动？"
      },
      "choices": [
        "Left $6$",
        "Right $6$",
        "Down $6$",
        "Up $6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Subtracting $6$ from the output lowers every point by $6$, a downward shift. Reading it as a horizontal move confuses an outside change (vertical) with an inside change (horizontal).",
        "zh": "从输出中减去 $6$ 使每个点下降 $6$，是向下平移。把它读成水平移动，是混淆了外部变化（竖直）与内部变化（水平）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = (x - 2)^2$, where does the minimum occur?",
        "zh": "对于 $f(x) = (x - 2)^2$，最小值出现在何处？"
      },
      "choices": [
        "$x = -2$",
        "$x = 0$",
        "$x = 4$",
        "$x = 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A squared term is smallest ($0$) when its inside is $0$, so $x - 2 = 0$ gives $x = 2$. Choosing $x = -2$ follows the sign inside literally, but the vertex shifts opposite to that sign.",
        "zh": "平方项在其内部为 $0$ 时最小（$0$），所以 $x - 2 = 0$ 得 $x = 2$。选 $x = -2$ 是照内部符号直译，但顶点是沿与该符号相反的方向移动。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = x^2$ and $g(x) = f(x) + 4$, what is $g(0)$?",
        "zh": "若 $f(x) = x^2$ 且 $g(x) = f(x) + 4$，求 $g(0)$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$g(0) = f(0) + 4 = 0^2 + 4 = 4$. The $+4$ raises the output, so the vertex value becomes $4$ instead of $0$.",
        "zh": "$g(0) = f(0) + 4 = 0^2 + 4 = 4$。$+4$ 抬高了输出，所以顶点值由 $0$ 变为 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph $g(x) = f(x - 5)$ shifts $f$ to the right by how many units?",
        "zh": "$g(x) = f(x - 5)$ 把 $f$ 向右平移了多少个单位？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "5 units",
        "five"
      ],
      "explanation": {
        "en": "A change of $x - 5$ inside the function shifts the graph right by $5$. The inside sign is negative, but a horizontal shift moves opposite to that sign.",
        "zh": "函数内部的 $x - 5$ 使图像向右平移 $5$。内部符号为负，但水平平移是沿与该符号相反的方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-intercept of $f(x) = -3x + 8$?",
        "zh": "$f(x) = -3x + 8$ 的 $y$ 轴截距是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8",
        "(0,8)",
        "(0, 8)"
      ],
      "explanation": {
        "en": "Set $x = 0$: $f(0) = -3(0) + 8 = 8$. The constant term gives the $y$-intercept; the $-3$ is the slope, not the intercept.",
        "zh": "令 $x = 0$：$f(0) = -3(0) + 8 = 8$。常数项给出 $y$ 轴截距；$-3$ 是斜率而非截距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-intercept of $f(x) = 2x - 6$ (give the $x$-value).",
        "zh": "求 $f(x) = 2x - 6$ 的 $x$ 轴截距（给出 $x$ 值）。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "(3,0)",
        "(3, 0)"
      ],
      "explanation": {
        "en": "Set $f(x) = 0$: $2x - 6 = 0 \\Rightarrow x = 3$. The $x$-intercept comes from setting the output to $0$, not the input.",
        "zh": "令 $f(x) = 0$：$2x - 6 = 0 \\Rightarrow x = 3$。$x$ 轴截距是把输出设为 $0$ 得到，而不是把输入设为 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = x^2$ and $g(x) = -f(x)$, what is $g(3)$?",
        "zh": "若 $f(x) = x^2$ 且 $g(x) = -f(x)$，求 $g(3)$。"
      },
      "answer": "-9",
      "accept": [
        "-9.0",
        "−9"
      ],
      "explanation": {
        "en": "$f(3) = 9$, and the negative sign reflects it across the $x$-axis: $g(3) = -9$. The reflection makes the output negative; leaving it positive ignores the leading minus sign.",
        "zh": "$f(3) = 9$，负号使其关于 $x$ 轴反射：$g(3) = -9$。反射使输出变负；保留为正是忽略了前面的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(2) = 5$ and $g(x) = 4f(x)$, what is $g(2)$?",
        "zh": "若 $f(2) = 5$ 且 $g(x) = 4f(x)$，求 $g(2)$。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "+20"
      ],
      "explanation": {
        "en": "$g(2) = 4 \\cdot f(2) = 4 \\cdot 5 = 20$. The factor $4$ multiplies the output (vertical stretch); adding $4$ instead would wrongly give $9$.",
        "zh": "$g(2) = 4 \\cdot f(2) = 4 \\cdot 5 = 20$。因子 $4$ 是乘以输出（竖直拉伸）；改成加 $4$ 会错得 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the minimum value of $f(x) = |x| + 2$?",
        "zh": "$f(x) = |x| + 2$ 的最小值是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "The absolute value is smallest ($0$) at $x = 0$, so the minimum output is $0 + 2 = 2$. The graph cannot go below $2$ because $|x|$ is never negative.",
        "zh": "绝对值在 $x = 0$ 处最小（$0$），所以最小输出为 $0 + 2 = 2$。因为 $|x|$ 永不为负，图像不会低于 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph $g(x) = f(x) - 7$ shifts $f$ down by how many units?",
        "zh": "$g(x) = f(x) - 7$ 把 $f$ 向下平移了多少个单位？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7",
        "7 units",
        "seven"
      ],
      "explanation": {
        "en": "Subtracting $7$ from the output lowers every point by $7$, a downward shift of $7$. This outside change affects the vertical position, not the horizontal.",
        "zh": "从输出中减去 $7$ 使每个点下降 $7$，即向下平移 $7$。这种外部变化影响竖直位置，而非水平位置。"
      }
    }
  ],
  "descriptive-statistics/one-variable-statistics": [
    {
      "type": "mc",
      "question": {
        "en": "Find the mean of the data set: 5, 9, 7, 3, 6.",
        "zh": "求这组数据的平均数：5, 9, 7, 3, 6。"
      },
      "choices": [
        "6",
        "5",
        "7",
        "30"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add the values: $5+9+7+3+6=30$, then divide by the count $5$: $30\\div 5=6$. A common mistake is stopping at the sum $30$ without dividing, or dividing by the wrong count.",
        "zh": "先求和：$5+9+7+3+6=30$，再除以个数 $5$：$30\\div 5=6$。常见错误是只算到总和 $30$ 却没有除以个数，或除错了个数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the median of: 10, 4, 7, 2, 9, 6.",
        "zh": "求这组数据的中位数：10, 4, 7, 2, 9, 6。"
      },
      "choices": [
        "6",
        "6.5",
        "6.25",
        "7"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sort first: $2,4,6,7,9,10$. With an even count of six, average the two middle values $6$ and $7$: $(6+7)\\div 2=6.5$. Forgetting to sort, or picking a single middle number instead of averaging the middle pair, gives a wrong value.",
        "zh": "先排序：$2,4,6,7,9,10$。共 6 个（偶数），取中间两个数 $6$ 和 $7$ 的平均：$(6+7)\\div 2=6.5$。忘记排序，或只取一个中间数而不对中间两数求平均，会得到错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the mode of: 4, 7, 4, 9, 4, 2, 7?",
        "zh": "求这组数据的众数：4, 7, 4, 9, 4, 2, 7。"
      },
      "choices": [
        "3",
        "7",
        "4",
        "9"
      ],
      "answer": 2,
      "explanation": {
        "en": "The mode is the value that appears most often. Here $4$ appears three times while $7$ appears twice, so the mode is $4$. Choosing $7$ confuses the second-most-frequent value with the most frequent.",
        "zh": "众数是出现次数最多的数值。这里 $4$ 出现三次，$7$ 出现两次，所以众数是 $4$。选 $7$ 是把出现次数第二多的数误当成出现最多的数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the range of: 18, 5, 23, 11, 9.",
        "zh": "求这组数据的极差（全距）：18, 5, 23, 11, 9。"
      },
      "choices": [
        "9",
        "14",
        "23",
        "18"
      ],
      "answer": 3,
      "explanation": {
        "en": "Range = maximum minus minimum $= 23-5=18$. A common error is reporting just the maximum value $23$ instead of subtracting the minimum.",
        "zh": "极差 = 最大值 − 最小值 $= 23-5=18$。常见错误是只报最大值 $23$，而没有减去最小值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the data 2, 4, 5, 7, 9, 11, 14, 16, find the interquartile range (IQR).",
        "zh": "对于数据 2, 4, 5, 7, 9, 11, 14, 16，求四分位距（IQR）。"
      },
      "choices": [
        "8",
        "6.5",
        "12.5",
        "4"
      ],
      "answer": 0,
      "explanation": {
        "en": "The median splits the eight values into a lower half $2,4,5,7$ (so $Q_1=(4+5)\\div 2=4.5$) and an upper half $9,11,14,16$ (so $Q_3=(11+14)\\div 2=12.5$). IQR $=Q_3-Q_1=12.5-4.5=8$. Using the full range instead of $Q_3-Q_1$ is a common slip.",
        "zh": "中位数把 8 个数分成下半部分 $2,4,5,7$（$Q_1=(4+5)\\div 2=4.5$）和上半部分 $9,11,14,16$（$Q_3=(11+14)\\div 2=12.5$）。IQR $=Q_3-Q_1=12.5-4.5=8$。用整体极差代替 $Q_3-Q_1$ 是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two classes have the same mean score. In Class A all scores are close to the mean; in Class B scores are widely spread out. Which has the larger standard deviation?",
        "zh": "两个班的平均分相同。A 班的分数都很接近平均分，B 班的分数分布很分散。哪个班的标准差更大？"
      },
      "choices": [
        "Class A",
        "Class B",
        "They are equal",
        "Cannot be determined"
      ],
      "answer": 1,
      "explanation": {
        "en": "Standard deviation measures spread about the mean. More spread means a larger standard deviation, so Class B is larger. Assuming equal means force equal standard deviations ignores that spread, not center, drives standard deviation.",
        "zh": "标准差衡量数据相对平均数的离散程度。越分散，标准差越大，所以 B 班更大。认为平均数相同就标准差相同，是忽略了标准差取决于离散程度而非中心位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A histogram has a long tail stretching toward the larger (right-hand) values. The distribution is best described as:",
        "zh": "一个直方图有一条长尾伸向较大的（右侧）数值。该分布最适合描述为："
      },
      "choices": [
        "Skewed left",
        "Symmetric",
        "Skewed right",
        "Uniform"
      ],
      "answer": 2,
      "explanation": {
        "en": "Skew is named for the direction of the long tail. A tail toward the large values means skewed right (positively skewed). Naming the skew by where the peak sits instead of where the tail points reverses the answer.",
        "zh": "偏态按长尾的方向命名。尾巴伸向较大数值即为右偏（正偏）。若按峰的位置而不是尾的方向来命名偏态，就会得出相反的答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the data 4, 6, 7, 8, 9, 10, 35, which value is an outlier by the 1.5\\times IQR rule?",
        "zh": "对于数据 4, 6, 7, 8, 9, 10, 35，用 1.5\\times IQR 规则判断，哪个值是离群值（异常值）？"
      },
      "choices": [
        "4",
        "10",
        "None of these",
        "35"
      ],
      "answer": 3,
      "explanation": {
        "en": "Here $Q_1=6$, $Q_3=10$, so IQR $=4$ and $1.5\\times 4=6$. The upper fence is $10+6=16$; since $35>16$ it is an outlier. Judging an outlier only by 'it looks big' without the fence calculation can misclassify values.",
        "zh": "此处 $Q_1=6$，$Q_3=10$，故 IQR $=4$，$1.5\\times 4=6$。上界为 $10+6=16$；因为 $35>16$，所以它是离群值。若只凭“看起来很大”而不做上下界计算，可能会判断错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a box plot, the vertical line drawn inside the box represents:",
        "zh": "在箱线图中，画在箱体内部的那条竖线表示："
      },
      "choices": [
        "The median",
        "The range",
        "The mean",
        "The mode"
      ],
      "answer": 0,
      "explanation": {
        "en": "The box spans $Q_1$ to $Q_3$ and the line inside marks the median ($Q_2$). Reading that line as the mean is a common confusion; the box plot does not display the mean.",
        "zh": "箱体从 $Q_1$ 延伸到 $Q_3$，内部的线标记中位数（$Q_2$）。把这条线误读为平均数是常见混淆；箱线图并不显示平均数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a histogram, the height of each bar represents:",
        "zh": "在直方图中，每根柱子的高度表示："
      },
      "choices": [
        "The median of the data",
        "The frequency (count) of values in that interval",
        "Each individual data value",
        "The range of the data"
      ],
      "answer": 1,
      "explanation": {
        "en": "A histogram groups data into intervals and each bar's height shows how many values fall in that interval (the frequency). Treating a bar as a single data point confuses grouped counts with individual values.",
        "zh": "直方图把数据分成若干区间，每根柱子的高度表示落在该区间内的数据个数（频数）。把一根柱子当成单个数据点，是把分组频数与单个数值混为一谈。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A dot plot shows 3 dots above 2, 5 dots above 3, and 2 dots above 4. How many data values are there in all?",
        "zh": "一个点图在 2 上方有 3 个点，在 3 上方有 5 个点，在 4 上方有 2 个点。总共有多少个数据？"
      },
      "choices": [
        "5",
        "3",
        "10",
        "4"
      ],
      "answer": 2,
      "explanation": {
        "en": "Each dot is one data value, so add the dots: $3+5+2=10$. Reporting the tallest stack $5$ counts only one location instead of totaling all the dots.",
        "zh": "每个点代表一个数据，所以把点数相加：$3+5+2=10$。只报最高的一列 $5$，是只数了一个位置，而没有把所有点加起来。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Adding one very large outlier to a data set will most strongly affect the:",
        "zh": "向一组数据中加入一个很大的离群值，会最强烈地影响："
      },
      "choices": [
        "Median",
        "Mode",
        "IQR",
        "Mean"
      ],
      "answer": 3,
      "explanation": {
        "en": "The mean sums every value, so a single extreme value pulls it noticeably. The median, mode, and IQR depend on position or frequency and are resistant to one extreme value. Assuming all measures shift equally overlooks that the mean is the least resistant.",
        "zh": "平均数把所有数值相加，因此单个极端值会明显地把它拉动。中位数、众数和 IQR 依赖于位置或频数，对单个极端值不敏感。认为所有统计量受影响相同，就忽略了平均数最不稳健。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the mean of: 8, 12, 15, 5, 10.",
        "zh": "求这组数据的平均数：8, 12, 15, 5, 10。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10.00"
      ],
      "explanation": {
        "en": "Add the values: $8+12+15+5+10=50$, then divide by $5$: $50\\div 5=10$. Dividing by the wrong count is the usual error.",
        "zh": "求和：$8+12+15+5+10=50$，再除以 $5$：$50\\div 5=10$。除错个数是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the median of: 14, 9, 21, 6, 18.",
        "zh": "求这组数据的中位数：14, 9, 21, 6, 18。"
      },
      "answer": "14",
      "accept": [
        "14.0"
      ],
      "explanation": {
        "en": "Sort first: $6,9,14,18,21$. With five values, the middle (third) value is the median: $14$. Taking the middle of the unsorted list gives the wrong number.",
        "zh": "先排序：$6,9,14,18,21$。共 5 个数，中间（第三个）就是中位数：$14$。在未排序的列表里取中间数会出错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the range of: 30, 12, 45, 22, 8.",
        "zh": "求这组数据的极差：30, 12, 45, 22, 8。"
      },
      "answer": "37",
      "accept": [
        "37.0"
      ],
      "explanation": {
        "en": "Range = maximum minus minimum $=45-8=37$. Subtracting the wrong pair, or reporting only the maximum, gives an incorrect range.",
        "zh": "极差 = 最大值 − 最小值 $=45-8=37$。减错数对或只报最大值都会得到错误的极差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the interquartile range (IQR) of: 1, 3, 5, 7, 9, 11.",
        "zh": "求这组数据的四分位距（IQR）：1, 3, 5, 7, 9, 11。"
      },
      "answer": "6",
      "accept": [
        "6.0"
      ],
      "explanation": {
        "en": "The lower half is $1,3,5$ so $Q_1=3$; the upper half is $7,9,11$ so $Q_3=9$. IQR $=9-3=6$. Using the overall spread $11-1$ instead of $Q_3-Q_1$ is the common mistake.",
        "zh": "下半部分是 $1,3,5$，所以 $Q_1=3$；上半部分是 $7,9,11$，所以 $Q_3=9$。IQR $=9-3=6$。用整体极差 $11-1$ 代替 $Q_3-Q_1$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the first quartile $Q_1$ of: 2, 5, 8, 11, 14, 17, 20, 23.",
        "zh": "求这组数据的第一四分位数 $Q_1$：2, 5, 8, 11, 14, 17, 20, 23。"
      },
      "answer": "6.5",
      "accept": [
        "6.50",
        "13/2"
      ],
      "explanation": {
        "en": "With eight values the lower half is $2,5,8,11$; its median is $(5+8)\\div 2=6.5$, which is $Q_1$. Averaging the wrong two numbers, or using the whole-data median, gives a different value.",
        "zh": "共 8 个数，下半部分是 $2,5,8,11$；其中位数为 $(5+8)\\div 2=6.5$，即 $Q_1$。对错误的两个数求平均，或用整组数据的中位数，都会得到不同的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a data set that is strongly skewed and has an outlier, which single measure of center best represents a typical value? (one word)",
        "zh": "对于一组明显偏斜且含有离群值的数据，哪一个中心度量最能代表典型值？（一个词）"
      },
      "answer": "median",
      "accept": [
        "Median",
        "the median",
        "中位数",
        "中位数（median）"
      ],
      "explanation": {
        "en": "The median is resistant to outliers and skew because it depends on position, not on the actual sizes of extreme values. The mean gets pulled toward the tail, so it is less representative here.",
        "zh": "中位数对离群值和偏斜稳健，因为它取决于位置，而不是极端值的具体大小。平均数会被尾部拉动，所以在这里代表性较差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A dot plot shows 4 dots above 5, 6 dots above 6, and 2 dots above 7. What is the mode?",
        "zh": "一个点图在 5 上方有 4 个点，在 6 上方有 6 个点，在 7 上方有 2 个点。众数是多少？"
      },
      "answer": "6",
      "accept": [
        "6.0"
      ],
      "explanation": {
        "en": "The mode is the value with the most dots. The value $6$ has $6$ dots, more than any other, so the mode is $6$. Reporting the count $6$ dots and the value $6$ happen to match here, but the mode is the data value, not the number of dots.",
        "zh": "众数是点数最多的那个数值。$6$ 上方有 $6$ 个点，多于其他值，所以众数是 $6$。这里点数“6”和数值“6”恰好相同，但众数指的是数据值，而不是点的个数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A data set consists of the identical values 7, 7, 7, 7. What is its standard deviation?",
        "zh": "一组数据全部相同：7, 7, 7, 7。它的标准差是多少？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "0.00"
      ],
      "explanation": {
        "en": "Standard deviation measures spread about the mean. Every value equals the mean $7$, so there is no spread and the standard deviation is $0$. Assuming a nonzero spread ignores that identical values have zero deviation.",
        "zh": "标准差衡量数据相对平均数的离散程度。每个值都等于平均数 $7$，没有任何离散，所以标准差是 $0$。若以为有非零离散，就忽略了相同数值的偏差为零。"
      }
    }
  ],
  "descriptive-statistics/two-variable-statistics": [
    {
      "type": "mc",
      "question": {
        "en": "In a scatter plot, as the $x$-values increase the $y$-values also tend to increase. This shows a:",
        "zh": "在散点图中，随着 $x$ 值增大，$y$ 值也倾向于增大。这表示："
      },
      "choices": [
        "Positive association",
        "Negative association",
        "No association",
        "A perfect circle"
      ],
      "answer": 0,
      "explanation": {
        "en": "When two variables rise together, the association is positive. Calling it negative reverses the direction; negative association means $y$ falls as $x$ rises.",
        "zh": "当两个变量同增时，为正相关（正关联）。称其为负相关就搞反了方向；负相关是指 $x$ 增大时 $y$ 减小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A correlation coefficient $r$ close to $-1$ indicates:",
        "zh": "相关系数 $r$ 接近 $-1$ 表示："
      },
      "choices": [
        "A strong positive linear relationship",
        "A strong negative linear relationship",
        "A weak relationship",
        "No relationship at all"
      ],
      "answer": 1,
      "explanation": {
        "en": "The magnitude near $1$ means strong and linear; the negative sign means the trend goes downward, so it is a strong negative linear relationship. Reading only the size and ignoring the minus sign wrongly suggests a positive trend.",
        "zh": "绝对值接近 $1$ 表示强且线性；负号表示趋势向下，所以是强负线性关系。只看大小而忽略负号，会错误地判断为正趋势。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line of best fit predicting plant height (cm) from time is $y=3x+5$, where $x$ is weeks. What does the slope $3$ mean?",
        "zh": "根据时间预测植物高度（厘米）的最佳拟合直线为 $y=3x+5$，其中 $x$ 为周数。斜率 $3$ 表示什么？"
      },
      "choices": [
        "The height is always 3 cm",
        "The starting height is 3 cm",
        "The height increases about 3 cm each week",
        "The height decreases 3 cm each week"
      ],
      "answer": 2,
      "explanation": {
        "en": "Slope is the change in $y$ per one-unit change in $x$, so height rises about $3$ cm for each additional week. Reading the slope as a starting amount confuses it with the $y$-intercept.",
        "zh": "斜率是 $x$ 每增加 1 个单位时 $y$ 的变化量，所以每多一周，高度约增加 $3$ 厘米。把斜率理解为初始量，是与 $y$ 轴截距混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the line of best fit $y=3x+5$ (height in cm, $x$ in weeks), what does the $y$-intercept $5$ mean?",
        "zh": "对于最佳拟合直线 $y=3x+5$（高度以厘米计，$x$ 为周数），$y$ 轴截距 $5$ 表示什么？"
      },
      "choices": [
        "The plant has 5 leaves",
        "The plant grows 5 cm each week",
        "The height reaches 5 cm at the end",
        "The predicted height at week 0 is 5 cm"
      ],
      "answer": 3,
      "explanation": {
        "en": "The $y$-intercept is the predicted $y$ when $x=0$, so at week $0$ the model predicts a height of $5$ cm. Treating $5$ as a per-week growth rate confuses the intercept with the slope.",
        "zh": "$y$ 轴截距是 $x=0$ 时预测的 $y$ 值，所以在第 $0$ 周模型预测高度为 $5$ 厘米。把 $5$ 当成每周增长率，是把截距与斜率混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In regression, a residual is defined as:",
        "zh": "在回归分析中，残差的定义是："
      },
      "choices": [
        "The observed $y$-value minus the predicted $y$-value",
        "The predicted $y$-value",
        "The slope of the line",
        "The correlation coefficient"
      ],
      "answer": 0,
      "explanation": {
        "en": "A residual is observed minus predicted, measuring how far a point sits from the line. Naming it as just the predicted value leaves out the comparison to the actual data.",
        "zh": "残差 = 实际值 − 预测值，衡量一个点离拟合直线有多远。只说“预测值”就漏掉了与实际数据的比较。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a data point lies above the line of best fit, its residual is:",
        "zh": "如果一个数据点位于最佳拟合直线的上方，它的残差是："
      },
      "choices": [
        "Negative",
        "Positive",
        "Zero",
        "Undefined"
      ],
      "answer": 1,
      "explanation": {
        "en": "Above the line means the observed value is greater than the predicted value, so observed minus predicted is positive. Assuming 'above' means negative reverses the sign of the residual.",
        "zh": "位于直线上方意味着实际值大于预测值，所以“实际值 − 预测值”为正。以为“上方”对应负值，就把残差的符号搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The correlation coefficient $r$ always falls between:",
        "zh": "相关系数 $r$ 的取值总是介于："
      },
      "choices": [
        "$-100$ and $100$",
        "$0$ and $1$",
        "$-1$ and $1$",
        "$0$ and $100$"
      ],
      "answer": 2,
      "explanation": {
        "en": "By definition $r$ ranges from $-1$ to $1$ inclusive. Restricting it to $0$ to $1$ forgets that $r$ can be negative for downward trends.",
        "zh": "根据定义，$r$ 的取值范围是 $-1$ 到 $1$（含端点）。把范围限制在 $0$ 到 $1$，就忽略了下降趋势时 $r$ 可以为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A two-way table shows: Morning (Coffee 30, Tea 10) and Evening (Coffee 15, Tea 45). How many people in all prefer tea?",
        "zh": "一个双向频数表显示：上午（咖啡 30，茶 10），下午（咖啡 15，茶 45）。总共有多少人偏好茶？"
      },
      "choices": [
        "10",
        "45",
        "100",
        "55"
      ],
      "answer": 3,
      "explanation": {
        "en": "Add the tea column across both rows: $10+45=55$. Reading only one cell such as the $45$ evening tea drinkers misses the morning tea drinkers.",
        "zh": "把“茶”这一列的两行相加：$10+45=55$。只读一个单元格（如下午喝茶的 $45$ 人）会漏掉上午喝茶的人。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A study finds a strong correlation between ice cream sales and drownings. The best conclusion is:",
        "zh": "一项研究发现冰淇淋销量与溺水事件之间有很强的相关性。最恰当的结论是："
      },
      "choices": [
        "Both tend to rise in summer, so correlation does not prove causation",
        "Drownings cause ice cream sales",
        "Eating ice cream causes drownings",
        "The correlation $r$ must equal exactly 1"
      ],
      "answer": 0,
      "explanation": {
        "en": "A strong correlation can come from a shared cause (hot summer weather), so correlation does not imply causation. Concluding that one directly causes the other ignores the lurking variable.",
        "zh": "很强的相关可能来自共同原因（炎热的夏天），所以相关不等于因果。断定其中一个直接导致另一个，是忽略了潜在的第三变量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the line of best fit $y=2x+1$, predict $y$ when $x=4$.",
        "zh": "利用最佳拟合直线 $y=2x+1$，预测当 $x=4$ 时的 $y$ 值。"
      },
      "choices": [
        "7",
        "9",
        "10",
        "8"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substitute $x=4$: $y=2(4)+1=8+1=9$. Forgetting to add the intercept $1$, or adding before multiplying, gives a value that is off by one.",
        "zh": "代入 $x=4$：$y=2(4)+1=8+1=9$。忘记加上截距 $1$，或先加后乘，都会得到相差 1 的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A scatter plot whose points show no pattern or trend indicates:",
        "zh": "一个散点图的点没有任何规律或趋势，这表明："
      },
      "choices": [
        "A strong positive relationship",
        "A perfect correlation",
        "No association",
        "A strong negative relationship"
      ],
      "answer": 2,
      "explanation": {
        "en": "No visible trend means the variables are not linearly related, so there is no association ($r$ near $0$). Seeing scattered points as a strong relationship misreads randomness as a trend.",
        "zh": "看不出趋势意味着变量之间没有线性关系，即无相关（$r$ 接近 $0$）。把杂乱的点当成很强的关系，是把随机误认为趋势。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the two-way table, 40 people are surveyed in the morning: 30 prefer coffee and 10 prefer tea. What fraction of the morning group prefers coffee?",
        "zh": "在双向表中，上午共调查 40 人：30 人偏好咖啡，10 人偏好茶。上午组中偏好咖啡的比例是多少？"
      },
      "choices": [
        "0.30",
        "0.45",
        "0.55",
        "0.75"
      ],
      "answer": 3,
      "explanation": {
        "en": "Divide the coffee count by the morning total: $30\\div 40=0.75$. Dividing by the whole survey total instead of the morning subtotal gives the wrong relative frequency.",
        "zh": "用咖啡人数除以上午总人数：$30\\div 40=0.75$。若用整个调查的总人数而不是上午的小计来除，就会得到错误的相对频率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the line of best fit $y=1.5x+2$, predict $y$ when $x=6$.",
        "zh": "利用最佳拟合直线 $y=1.5x+2$，预测当 $x=6$ 时的 $y$ 值。"
      },
      "answer": "11",
      "accept": [
        "11.0",
        "11.00"
      ],
      "explanation": {
        "en": "Substitute $x=6$: $y=1.5(6)+2=9+2=11$. Forgetting the intercept, or mishandling the decimal slope, changes the result.",
        "zh": "代入 $x=6$：$y=1.5(6)+2=9+2=11$。忘记截距或处理错小数斜率都会改变结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line of best fit passes through the points $(2,5)$ and $(6,13)$. What is its slope?",
        "zh": "一条最佳拟合直线经过点 $(2,5)$ 和 $(6,13)$。它的斜率是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Slope $=\\dfrac{13-5}{6-2}=\\dfrac{8}{4}=2$. Flipping the fraction to $\\dfrac{\\Delta x}{\\Delta y}$, or subtracting in inconsistent order, gives a wrong slope.",
        "zh": "斜率 $=\\dfrac{13-5}{6-2}=\\dfrac{8}{4}=2$。把分式倒成 $\\dfrac{\\Delta x}{\\Delta y}$，或上下相减的顺序不一致，都会得到错误的斜率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A model predicts a value of 17, but the observed value is 20. What is the residual?",
        "zh": "某模型预测值为 17，而实际观测值为 20。残差是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Residual = observed minus predicted $=20-17=3$. Computing predicted minus observed reverses the sign and gives $-3$.",
        "zh": "残差 = 实际值 − 预测值 $=20-17=3$。用预测值减实际值会把符号搞反，得到 $-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A two-way table has Morning (Coffee 30, Tea 10) and Evening (Coffee 15, Tea 45). How many people were surveyed in total?",
        "zh": "一个双向表：上午（咖啡 30，茶 10），下午（咖啡 15，茶 45）。总共调查了多少人？"
      },
      "answer": "100",
      "accept": [
        "100.0"
      ],
      "explanation": {
        "en": "Add every cell: $30+10+15+45=100$. Adding only one row or one column undercounts the grand total.",
        "zh": "把所有单元格相加：$30+10+15+45=100$。只加一行或一列会少算总数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the line of best fit $y=-2x+20$, predict $y$ when $x=5$.",
        "zh": "利用最佳拟合直线 $y=-2x+20$，预测当 $x=5$ 时的 $y$ 值。"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "Substitute $x=5$: $y=-2(5)+20=-10+20=10$. Dropping the negative sign on the slope would give $30$ instead.",
        "zh": "代入 $x=5$：$y=-2(5)+20=-10+20=10$。若丢掉斜率的负号，就会得到 $30$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What single word names the statistic $r$ that measures how closely points cluster around a straight line?",
        "zh": "衡量各点围绕一条直线聚集紧密程度的统计量 $r$，用哪个词来命名？（一个词）"
      },
      "answer": "correlation",
      "accept": [
        "Correlation",
        "correlation coefficient",
        "相关",
        "相关性",
        "相关系数"
      ],
      "explanation": {
        "en": "The correlation (coefficient) $r$ measures the strength and direction of a linear relationship. Confusing it with slope mixes up how tight the fit is with how steep the line is.",
        "zh": "相关系数 $r$ 衡量线性关系的强度和方向。把它与斜率混淆，是把拟合的紧密程度与直线的陡峭程度搞混了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "As $x$ increases, $y$ consistently decreases. Is this association positive or negative? (one word)",
        "zh": "随着 $x$ 增大，$y$ 持续减小。这种关联是正相关还是负相关？（一个词）"
      },
      "answer": "negative",
      "accept": [
        "Negative",
        "负",
        "负相关",
        "负相关（negative）"
      ],
      "explanation": {
        "en": "When $y$ falls as $x$ rises, the trend slopes downward, which is a negative association. Calling it positive would describe two variables rising together instead.",
        "zh": "当 $x$ 增大而 $y$ 减小时，趋势向下，这是负相关。称其为正相关，描述的却是两个变量同增的情形。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the two-way table, 45 of the 100 surveyed people prefer coffee. What fraction of all people prefer coffee? (as a decimal)",
        "zh": "在双向表中，100 名被调查者中有 45 人偏好咖啡。偏好咖啡的人占总数的比例是多少？（用小数表示）"
      },
      "answer": "0.45",
      "accept": [
        ".45",
        "0.450",
        "45%",
        "9/20"
      ],
      "explanation": {
        "en": "Divide the coffee total by the grand total: $45\\div 100=0.45$. Dividing by a single subgroup total instead of $100$ would give a different relative frequency.",
        "zh": "用咖啡总人数除以总人数：$45\\div 100=0.45$。若用某个子组的小计而不是 $100$ 来除，就会得到不同的相对频率。"
      }
    }
  ],
  "congruence-construction-proof/transformations-and-congruence": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT a rigid motion (isometry)?",
        "zh": "下列哪一项不是刚体运动（等距变换）？"
      },
      "choices": [
        "A dilation / 位似（放缩）",
        "A translation / 平移",
        "A reflection / 反射",
        "A rotation / 旋转"
      ],
      "answer": 0,
      "explanation": {
        "en": "A dilation changes the size of a figure, so distances are not preserved and it is not a rigid motion. Translations, reflections, and rotations all keep every distance the same, so they are rigid motions.",
        "zh": "位似会改变图形的大小，因此长度不被保持，它不是刚体运动。平移、反射和旋转都保持所有长度不变，所以它们都是刚体运动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The point $(3,-5)$ is reflected across the x-axis. What is its image?",
        "zh": "点 $(3,-5)$ 关于 x 轴反射，它的像是什么？"
      },
      "choices": [
        "$(-3,-5)$",
        "$(3,5)$",
        "$(-3,5)$",
        "$(3,-5)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Reflection across the x-axis uses the rule $(x,y)\\rightarrow(x,-y)$, so $(3,-5)$ maps to $(3,5)$. Negating the x-coordinate instead would be a reflection across the y-axis, which is a different transformation.",
        "zh": "关于 x 轴反射的规则是 $(x,y)\\rightarrow(x,-y)$，所以 $(3,-5)$ 映射到 $(3,5)$。若改为对 x 坐标取负，那是关于 y 轴的反射，是另一种变换。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rotate $(4,2)$ by $90^{\\circ}$ counterclockwise about the origin. What is the image?",
        "zh": "将 $(4,2)$ 绕原点逆时针旋转 $90^{\\circ}$，像是什么？"
      },
      "choices": [
        "$(2,-4)$",
        "$(-4,-2)$",
        "$(-2,4)$",
        "$(4,2)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A $90^{\\circ}$ counterclockwise rotation about the origin uses $(x,y)\\rightarrow(-y,x)$, so $(4,2)$ maps to $(-2,4)$. Swapping the coordinates without the correct sign change gives the clockwise result and is wrong.",
        "zh": "绕原点逆时针旋转 $90^{\\circ}$ 的规则是 $(x,y)\\rightarrow(-y,x)$，所以 $(4,2)$ 映射到 $(-2,4)$。若交换坐标却搞错符号，得到的是顺时针的结果，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rotate $(-6,3)$ by $180^{\\circ}$ about the origin. What is the image?",
        "zh": "将 $(-6,3)$ 绕原点旋转 $180^{\\circ}$，像是什么？"
      },
      "choices": [
        "$(-6,-3)$",
        "$(6,3)$",
        "$(-3,6)$",
        "$(6,-3)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A $180^{\\circ}$ rotation about the origin uses $(x,y)\\rightarrow(-x,-y)$, so $(-6,3)$ maps to $(6,-3)$. Negating only one coordinate is a reflection, not a $180^{\\circ}$ rotation.",
        "zh": "绕原点旋转 $180^{\\circ}$ 的规则是 $(x,y)\\rightarrow(-x,-y)$，所以 $(-6,3)$ 映射到 $(6,-3)$。只对一个坐标取负是反射，而不是 $180^{\\circ}$ 旋转。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A figure is translated right 5 units and down 2 units. Where does $(-1,4)$ move?",
        "zh": "一个图形向右平移 5 个单位、向下平移 2 个单位。点 $(-1,4)$ 移到哪里？"
      },
      "choices": [
        "$(4,2)$",
        "$(-6,6)$",
        "$(4,6)$",
        "$(6,2)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Right 5 adds 5 to x and down 2 subtracts 2 from y: $(x,y)\\rightarrow(x+5,y-2)$, giving $(-1+5,\\,4-2)=(4,2)$. Moving down means subtracting from y; adding to y would move the point up instead.",
        "zh": "向右 5 即 x 加 5，向下 2 即 y 减 2：$(x,y)\\rightarrow(x+5,y-2)$，得到 $(-1+5,\\,4-2)=(4,2)$。向下应从 y 中减去；若加到 y 上则是向上移动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Reflect $(7,-2)$ across the y-axis. What is the image?",
        "zh": "将 $(7,-2)$ 关于 y 轴反射，像是什么？"
      },
      "choices": [
        "$(7,2)$",
        "$(-7,-2)$",
        "$(-7,2)$",
        "$(2,-7)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Reflection across the y-axis uses $(x,y)\\rightarrow(-x,y)$, so $(7,-2)$ maps to $(-7,-2)$. Negating the y-coordinate instead would reflect across the x-axis, a different line.",
        "zh": "关于 y 轴反射的规则是 $(x,y)\\rightarrow(-x,y)$，所以 $(7,-2)$ 映射到 $(-7,-2)$。若改为对 y 坐标取负，那是关于 x 轴的反射，是不同的直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Reflect $(2,-9)$ across the line $y=x$. What is the image?",
        "zh": "将 $(2,-9)$ 关于直线 $y=x$ 反射，像是什么？"
      },
      "choices": [
        "$(2,-9)$",
        "$(-2,9)$",
        "$(-9,2)$",
        "$(9,-2)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Reflection across $y=x$ swaps the coordinates: $(x,y)\\rightarrow(y,x)$, so $(2,-9)$ maps to $(-9,2)$. Swapping and also negating both signs would be a reflection across $y=-x$, which is different.",
        "zh": "关于 $y=x$ 反射会交换坐标：$(x,y)\\rightarrow(y,x)$，所以 $(2,-9)$ 映射到 $(-9,2)$。若交换的同时还把两个符号都取负，那是关于 $y=-x$ 的反射，是不同的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about rigid motions is TRUE?",
        "zh": "关于刚体运动，下列哪种说法是正确的？"
      },
      "choices": [
        "Rigid motions change side lengths / 刚体运动会改变边长",
        "Rigid motions change angle measures / 刚体运动会改变角的大小",
        "Rigid motions produce a similar but not congruent figure / 刚体运动产生相似但不全等的图形",
        "Rigid motions preserve both distance and angle measure / 刚体运动同时保持长度和角的大小"
      ],
      "answer": 3,
      "explanation": {
        "en": "Rigid motions (translations, reflections, rotations) preserve both distance and angle measure, so the image is congruent to the original. Believing the size or angles change confuses rigid motions with dilations.",
        "zh": "刚体运动（平移、反射、旋转）同时保持长度和角的大小，因此像与原图形全等。认为大小或角会改变，是把刚体运动与位似混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rotate $(5,1)$ by $90^{\\circ}$ clockwise about the origin. What is the image?",
        "zh": "将 $(5,1)$ 绕原点顺时针旋转 $90^{\\circ}$，像是什么？"
      },
      "choices": [
        "$(1,-5)$",
        "$(-1,5)$",
        "$(-5,-1)$",
        "$(5,-1)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A $90^{\\circ}$ clockwise rotation about the origin uses $(x,y)\\rightarrow(y,-x)$, so $(5,1)$ maps to $(1,-5)$. Using $(-y,x)$ would give the counterclockwise image, which points the wrong way.",
        "zh": "绕原点顺时针旋转 $90^{\\circ}$ 的规则是 $(x,y)\\rightarrow(y,-x)$，所以 $(5,1)$ 映射到 $(1,-5)$。若用 $(-y,x)$ 得到的是逆时针的像，方向相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two figures are congruent if and only if:",
        "zh": "两个图形全等当且仅当："
      },
      "choices": [
        "they have the same area / 它们面积相同",
        "one can be mapped onto the other by a sequence of rigid motions / 其中一个可通过一系列刚体运动映射到另一个",
        "they have at least one pair of equal angles / 它们至少有一对相等的角",
        "they have the same perimeter / 它们周长相同"
      ],
      "answer": 1,
      "explanation": {
        "en": "The definition of congruence is that a sequence of rigid motions maps one figure exactly onto the other. Equal area or perimeter can happen for non-congruent shapes, so those conditions are not enough.",
        "zh": "全等的定义是：存在一系列刚体运动能把一个图形恰好映射到另一个上。面积或周长相等在不全等的图形中也可能出现，所以这些条件并不充分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Reflect $(3,8)$ across the line $y=-x$. What is the image?",
        "zh": "将 $(3,8)$ 关于直线 $y=-x$ 反射，像是什么？"
      },
      "choices": [
        "$(8,3)$",
        "$(3,8)$",
        "$(-8,-3)$",
        "$(-3,-8)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Reflection across $y=-x$ uses $(x,y)\\rightarrow(-y,-x)$, so $(3,8)$ maps to $(-8,-3)$. Simply swapping coordinates without negating gives the reflection across $y=x$, which is the wrong line.",
        "zh": "关于 $y=-x$ 反射的规则是 $(x,y)\\rightarrow(-y,-x)$，所以 $(3,8)$ 映射到 $(-8,-3)$。若只交换坐标而不取负，得到的是关于 $y=x$ 的反射，直线选错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\triangle ABC \\cong \\triangle DEF$, which side corresponds to $\\overline{AB}$?",
        "zh": "若 $\\triangle ABC \\cong \\triangle DEF$，哪条边与 $\\overline{AB}$ 对应？"
      },
      "choices": [
        "$\\overline{EF}$",
        "$\\overline{DF}$",
        "$\\overline{FD}$",
        "$\\overline{DE}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "In a congruence statement, corresponding parts follow the order of the letters: A pairs with D and B pairs with E, so $\\overline{AB}$ corresponds to $\\overline{DE}$. Matching A with the wrong vertex leads to naming a side that is not the true correspondence.",
        "zh": "在全等式中，对应部分按字母顺序配对：A 对 D、B 对 E，所以 $\\overline{AB}$ 与 $\\overline{DE}$ 对应。若把 A 与错误的顶点配对，就会说出并非真正对应的边。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Translate $(2,3)$ by the vector $\\langle -4,6\\rangle$. Give the image as an ordered pair.",
        "zh": "将 $(2,3)$ 沿向量 $\\langle -4,6\\rangle$ 平移，用有序对给出像。"
      },
      "answer": "(-2,9)",
      "accept": [
        "(-2, 9)",
        "-2,9",
        "-2, 9",
        "x=-2,y=9"
      ],
      "explanation": {
        "en": "Add the vector to the coordinates: $(2+(-4),\\,3+6)=(-2,9)$. A translation adds the same amounts to every point.",
        "zh": "把向量加到坐标上：$(2+(-4),\\,3+6)=(-2,9)$。平移对每个点加上相同的量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rotation of $270^{\\circ}$ counterclockwise about the origin equals a rotation of how many degrees clockwise?",
        "zh": "绕原点逆时针旋转 $270^{\\circ}$ 等于顺时针旋转多少度？"
      },
      "answer": "90",
      "accept": [
        "90°",
        "90 degrees",
        "90度",
        "90 deg"
      ],
      "explanation": {
        "en": "A full turn is $360^{\\circ}$, so $270^{\\circ}$ counterclockwise leaves $360-270=90^{\\circ}$ to complete the circle in the clockwise direction. Both rotations land a point in the same place.",
        "zh": "一整圈是 $360^{\\circ}$，因此逆时针 $270^{\\circ}$ 距离转满一圈还差 $360-270=90^{\\circ}$，正是顺时针的度数。两种旋转会把点落在同一位置。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(-3,10)$ is reflected across the x-axis. What is the y-coordinate of the image?",
        "zh": "点 $(-3,10)$ 关于 x 轴反射。像的 y 坐标是多少？"
      },
      "answer": "-10",
      "accept": [
        "−10",
        "-10.0",
        "y=-10"
      ],
      "explanation": {
        "en": "Reflection across the x-axis negates the y-coordinate: $10\\rightarrow -10$. The x-coordinate stays the same at $-3$.",
        "zh": "关于 x 轴反射会把 y 坐标取负：$10\\rightarrow -10$。x 坐标保持不变为 $-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Under a $180^{\\circ}$ rotation about the origin, what is the image of $(8,-4)$? Give an ordered pair.",
        "zh": "绕原点旋转 $180^{\\circ}$，点 $(8,-4)$ 的像是什么？用有序对表示。"
      },
      "answer": "(-8,4)",
      "accept": [
        "(-8, 4)",
        "-8,4",
        "-8, 4"
      ],
      "explanation": {
        "en": "A $180^{\\circ}$ rotation about the origin negates both coordinates: $(8,-4)\\rightarrow(-8,4)$.",
        "zh": "绕原点旋转 $180^{\\circ}$ 会把两个坐标都取负：$(8,-4)\\rightarrow(-8,4)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A translation maps $(1,1)$ to $(6,-2)$. Where does the same translation map $(0,0)$? Give an ordered pair.",
        "zh": "某平移把 $(1,1)$ 映射到 $(6,-2)$。同一个平移把 $(0,0)$ 映射到哪里？用有序对表示。"
      },
      "answer": "(5,-3)",
      "accept": [
        "(5, -3)",
        "5,-3",
        "5, -3"
      ],
      "explanation": {
        "en": "The translation vector is $\\langle 6-1,\\,-2-1\\rangle=\\langle 5,-3\\rangle$. Applying it to the origin gives $(0+5,\\,0-3)=(5,-3)$.",
        "zh": "平移向量为 $\\langle 6-1,\\,-2-1\\rangle=\\langle 5,-3\\rangle$。作用于原点得到 $(0+5,\\,0-3)=(5,-3)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\triangle ABC \\cong \\triangle XYZ$ and $m\\angle A = 47^{\\circ}$, what is $m\\angle X$ in degrees?",
        "zh": "若 $\\triangle ABC \\cong \\triangle XYZ$ 且 $m\\angle A = 47^{\\circ}$，则 $m\\angle X$ 是多少度？"
      },
      "answer": "47",
      "accept": [
        "47°",
        "47 degrees",
        "47度"
      ],
      "explanation": {
        "en": "Congruent triangles have congruent corresponding angles. Since A corresponds to X, $m\\angle X = 47^{\\circ}$.",
        "zh": "全等三角形的对应角相等。由于 A 与 X 对应，所以 $m\\angle X = 47^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the image of $(0,5)$ under a $90^{\\circ}$ counterclockwise rotation about the origin? Give an ordered pair.",
        "zh": "点 $(0,5)$ 绕原点逆时针旋转 $90^{\\circ}$ 的像是什么？用有序对表示。"
      },
      "answer": "(-5,0)",
      "accept": [
        "(-5, 0)",
        "-5,0",
        "-5, 0"
      ],
      "explanation": {
        "en": "The rule $(x,y)\\rightarrow(-y,x)$ gives $(0,5)\\rightarrow(-5,0)$.",
        "zh": "规则 $(x,y)\\rightarrow(-y,x)$ 给出 $(0,5)\\rightarrow(-5,0)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\triangle ABC$, $AB = 12$. If $\\triangle ABC \\cong \\triangle DEF$, what is the length of $\\overline{DE}$?",
        "zh": "在 $\\triangle ABC$ 中，$AB = 12$。若 $\\triangle ABC \\cong \\triangle DEF$，则 $\\overline{DE}$ 的长度是多少？"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "12 units",
        "12 个单位"
      ],
      "explanation": {
        "en": "Corresponding sides of congruent triangles are equal. Since $\\overline{AB}$ corresponds to $\\overline{DE}$, $DE = 12$.",
        "zh": "全等三角形的对应边相等。由于 $\\overline{AB}$ 与 $\\overline{DE}$ 对应，所以 $DE = 12$。"
      }
    }
  ],
  "congruence-construction-proof/constructions-and-proof": [
    {
      "type": "mc",
      "question": {
        "en": "Which triangle congruence criterion uses two sides and the angle between them?",
        "zh": "哪一个三角形全等判定使用两条边及其夹角？"
      },
      "choices": [
        "SAS",
        "SSS",
        "ASA",
        "AAS"
      ],
      "answer": 0,
      "explanation": {
        "en": "SAS means Side-Angle-Side, where the angle is the one included between the two known sides. Choosing three sides describes SSS, which uses no angle at all.",
        "zh": "SAS 表示“边-角-边”，其中的角是两条已知边所夹的角。若选三条边那是 SSS，完全不涉及角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT a valid triangle congruence criterion?",
        "zh": "下列哪一项不是有效的三角形全等判定？"
      },
      "choices": [
        "SSS",
        "SSA",
        "SAS",
        "ASA"
      ],
      "answer": 1,
      "explanation": {
        "en": "SSA (two sides and a non-included angle) does not guarantee congruence because it can produce two different triangles (the ambiguous case). SSS, SAS, and ASA are all valid criteria.",
        "zh": "SSA（两条边及一个非夹角）不能保证全等，因为它可能得出两个不同的三角形（歧义情形）。SSS、SAS 和 ASA 都是有效的判定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To construct the perpendicular bisector of a segment with a compass, how wide should you open the compass?",
        "zh": "用圆规作一条线段的垂直平分线时，圆规应张开多大？"
      },
      "choices": [
        "Exactly half the segment / 恰好线段的一半",
        "The full segment length / 整条线段的长度",
        "More than half the segment length / 大于线段一半的宽度",
        "Any width less than half / 小于一半的任意宽度"
      ],
      "answer": 2,
      "explanation": {
        "en": "The compass must open to more than half the segment so the arcs drawn from each endpoint intersect on both sides. A width of half or less makes the arcs just touch or miss, giving no intersection points.",
        "zh": "圆规必须张开到大于线段一半，这样从两端点画的弧才能在两侧相交。若宽度等于或小于一半，弧只会相切或不相交，得不到交点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The ASA criterion requires:",
        "zh": "ASA 判定要求："
      },
      "choices": [
        "Two sides and the included angle / 两条边及其夹角",
        "Two angles and a non-included side / 两个角及一条非夹边",
        "Three angles / 三个角",
        "Two angles and the included side / 两个角及其夹边"
      ],
      "answer": 3,
      "explanation": {
        "en": "ASA is Angle-Side-Angle, so the known side lies between the two known angles. If the side is not between the angles, that is AAS instead, a different criterion.",
        "zh": "ASA 是“角-边-角”，已知的边位于两个已知角之间。若边不在两角之间，那是 AAS，是另一种判定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The AAS criterion requires:",
        "zh": "AAS 判定要求："
      },
      "choices": [
        "Two angles and a non-included side / 两个角及一条非夹边",
        "Three sides / 三条边",
        "Two sides and the included angle / 两条边及其夹角",
        "Two sides and a non-included angle / 两条边及一个非夹角"
      ],
      "answer": 0,
      "explanation": {
        "en": "AAS is Angle-Angle-Side, where the side is not between the two angles. Putting the side between the angles would instead be ASA.",
        "zh": "AAS 是“角-角-边”，边不在两角之间。若把边放在两角之间那就是 ASA。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An angle bisector divides an angle into:",
        "zh": "角平分线把一个角分成："
      },
      "choices": [
        "Two complementary angles / 两个互余的角",
        "Two congruent angles / 两个全等（相等）的角",
        "Two supplementary angles / 两个互补的角",
        "Two right angles / 两个直角"
      ],
      "answer": 1,
      "explanation": {
        "en": "By definition, a bisector splits an angle into two congruent (equal) angles. The two halves are only complementary or right angles in special cases, not in general.",
        "zh": "根据定义，平分线把一个角分成两个全等（相等）的角。只有在特殊情况下两半才恰好互余或为直角，一般情况下并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a two-column proof, the Reflexive Property justifies which statement?",
        "zh": "在两栏证明中，自反性（Reflexive Property）能证明下列哪个陈述？"
      },
      "choices": [
        "$\\overline{AB} \\cong \\overline{CD}$ (given) / $\\overline{AB} \\cong \\overline{CD}$（已知）",
        "$\\angle A \\cong \\angle B$",
        "$\\overline{AB} \\cong \\overline{AB}$",
        "$AB + BC = AC$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The Reflexive Property states any segment or angle is congruent to itself, which justifies $\\overline{AB} \\cong \\overline{AB}$. A statement pairing two different segments needs a given or another reason, not reflexivity.",
        "zh": "自反性指任何线段或角都与自身全等，因此可证 $\\overline{AB} \\cong \\overline{AB}$。而把两条不同线段配对的陈述需要“已知”或其他理由，不能用自反性。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The compass-and-straightedge construction that copies an angle works because it creates:",
        "zh": "用圆规和直尺复制一个角的作图之所以成立，是因为它构造了："
      },
      "choices": [
        "Parallel lines / 平行线",
        "Two triangles congruent by SAS / 两个由 SAS 判定全等的三角形",
        "A perpendicular line / 一条垂线",
        "Two triangles congruent by SSS / 两个由 SSS 判定全等的三角形"
      ],
      "answer": 3,
      "explanation": {
        "en": "Copying an angle marks off equal arc radii, producing two triangles with three pairs of equal sides, so they are congruent by SSS and their angles match. It does not rely on an included-angle argument like SAS.",
        "zh": "复制角时截取相等的弧半径，得到两个三边分别相等的三角形，因此它们由 SSS 全等，对应角也相等。这不依赖像 SAS 那样的夹角论证。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which criterion proves two triangles congruent given three pairs of congruent sides?",
        "zh": "已知三对对应边相等，用哪个判定证明两三角形全等？"
      },
      "choices": [
        "SSS",
        "SAS",
        "ASA",
        "AAS"
      ],
      "answer": 0,
      "explanation": {
        "en": "Three pairs of congruent sides is exactly the SSS (Side-Side-Side) criterion. A criterion that includes an angle, such as SAS, would require angle information that is not given here.",
        "zh": "三对相等的边正是 SSS（边-边-边）判定。含有角的判定（如 SAS）需要这里未给出的角的信息。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles have two pairs of congruent angles, and the sides between those angles are also congruent. Which criterion applies?",
        "zh": "两个三角形有两对相等的角，且这两角之间的边也相等。适用哪个判定？"
      },
      "choices": [
        "SSS",
        "ASA",
        "SAS",
        "AAS"
      ],
      "answer": 1,
      "explanation": {
        "en": "Two angles with the included side congruent is the ASA (Angle-Side-Angle) criterion. If the congruent side were outside the two angles, it would be AAS instead.",
        "zh": "两个角及其夹边相等是 ASA（角-边-角）判定。若相等的边在两角之外，则应为 AAS。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which tool is used to draw an arc of fixed radius in a classical construction?",
        "zh": "在传统尺规作图中，用哪种工具画出固定半径的弧？"
      },
      "choices": [
        "A protractor / 量角器",
        "A ruler with markings / 有刻度的直尺",
        "A compass / 圆规",
        "A set square / 三角板"
      ],
      "answer": 2,
      "explanation": {
        "en": "A compass holds a fixed radius and draws arcs and circles, which is the heart of classical constructions. A protractor measures angles and a marked ruler measures length, but neither is allowed for pure straightedge-and-compass work in the way a compass is used here.",
        "zh": "圆规能保持固定半径并画出弧和圆，这是传统作图的核心。量角器用于量角，有刻度的直尺用于量长度，在纯尺规作图中都不能替代此处圆规的作用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does CPCTC allow you to conclude, and when?",
        "zh": "CPCTC 让你得出什么结论，且在什么时候使用？"
      },
      "choices": [
        "How to bisect a segment / 如何平分一条线段",
        "That two triangles are congruent in the first place / 首先证明两个三角形全等",
        "How to measure angles with a protractor / 如何用量角器量角",
        "After proving two triangles congruent, that their remaining corresponding parts are congruent / 在证明两三角形全等之后，得出其余对应部分也相等"
      ],
      "answer": 3,
      "explanation": {
        "en": "CPCTC (Corresponding Parts of Congruent Triangles are Congruent) is used only after the triangles are already proven congruent, to conclude that the leftover sides and angles match. It cannot be the reason that establishes the congruence itself.",
        "zh": "CPCTC（全等三角形的对应部分相等）只在三角形已被证明全等之后使用，用来得出剩余的边和角也相等。它不能作为最初确立全等的理由。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Give the three-letter abbreviation for the congruence criterion that uses two sides and the included angle.",
        "zh": "写出使用两条边及其夹角的全等判定的三字母缩写。"
      },
      "answer": "SAS",
      "accept": [
        "sas",
        "S-A-S",
        "s-a-s",
        "边角边"
      ],
      "explanation": {
        "en": "Two sides with the angle between them is Side-Angle-Side, abbreviated SAS.",
        "zh": "两条边及其夹角是“边-角-边”，缩写为 SAS。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two angles of a triangle measure $50^{\\circ}$ and $60^{\\circ}$. What is the third angle, in degrees?",
        "zh": "一个三角形的两个角为 $50^{\\circ}$ 和 $60^{\\circ}$。第三个角是多少度？"
      },
      "answer": "70",
      "accept": [
        "70°",
        "70 degrees",
        "70度"
      ],
      "explanation": {
        "en": "The angles of a triangle sum to $180^{\\circ}$, so the third angle is $180-50-60=70^{\\circ}$.",
        "zh": "三角形内角和为 $180^{\\circ}$，所以第三个角是 $180-50-60=70^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many pairs of congruent corresponding parts does a criterion like SSS or ASA require to prove two triangles congruent?",
        "zh": "像 SSS 或 ASA 这样的判定，需要多少对相等的对应部分才能证明两三角形全等？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "three",
        "三",
        "3 pairs",
        "三对"
      ],
      "explanation": {
        "en": "Each standard criterion (SSS, SAS, ASA, AAS) uses exactly three pairs of congruent parts to guarantee the whole triangles match.",
        "zh": "每个标准判定（SSS、SAS、ASA、AAS）都恰好使用三对相等的部分来保证整个三角形全等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\triangle ABC$, $m\\angle A = 40^{\\circ}$ and $m\\angle C = 75^{\\circ}$. What is $m\\angle B$ in degrees?",
        "zh": "在 $\\triangle ABC$ 中，$m\\angle A = 40^{\\circ}$，$m\\angle C = 75^{\\circ}$。$m\\angle B$ 是多少度？"
      },
      "answer": "65",
      "accept": [
        "65°",
        "65 degrees",
        "65度"
      ],
      "explanation": {
        "en": "The angle sum of a triangle is $180^{\\circ}$, so $m\\angle B = 180-40-75=65^{\\circ}$.",
        "zh": "三角形内角和为 $180^{\\circ}$，所以 $m\\angle B = 180-40-75=65^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $90^{\\circ}$ angle is bisected. What is the measure of each resulting angle, in degrees?",
        "zh": "一个 $90^{\\circ}$ 的角被平分。每个所得角是多少度？"
      },
      "answer": "45",
      "accept": [
        "45°",
        "45 degrees",
        "45度"
      ],
      "explanation": {
        "en": "A bisector splits the angle into two equal parts, so each is $90\\div 2 = 45^{\\circ}$.",
        "zh": "平分线把角分成两个相等的部分，所以每个是 $90\\div 2 = 45^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The perpendicular bisector of a segment crosses it at what fraction of the way from one endpoint? Give a decimal.",
        "zh": "线段的垂直平分线在从一端点起全长的多少处与线段相交？用小数表示。"
      },
      "answer": "0.5",
      "accept": [
        "0.50",
        ".5",
        "1/2",
        "0.5 ",
        "二分之一",
        "一半"
      ],
      "explanation": {
        "en": "A perpendicular bisector passes through the midpoint, which is halfway, or $0.5$ of the way, from either endpoint.",
        "zh": "垂直平分线经过中点，中点在从任一端点起全长的一半处，即 $0.5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Which property of congruence justifies the statement that a shared side is congruent to itself in a proof? (Give the property name.)",
        "zh": "在证明中，公共边与自身相等，这依据的是哪条全等性质？（写出性质名称。）"
      },
      "answer": "Reflexive",
      "accept": [
        "reflexive",
        "reflexive property",
        "Reflexive Property",
        "自反性",
        "自反",
        "reflexive property of congruence"
      ],
      "explanation": {
        "en": "The Reflexive Property says any figure is congruent to itself, which is why a shared side can be marked congruent in both triangles.",
        "zh": "自反性指任何图形都与自身全等，这就是公共边能在两个三角形中都标为相等的原因。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If two triangles are congruent, by how many degrees do corresponding angles differ?",
        "zh": "若两个三角形全等，对应角相差多少度？"
      },
      "answer": "0",
      "accept": [
        "0°",
        "0 degrees",
        "zero",
        "0度",
        "0.0"
      ],
      "explanation": {
        "en": "Corresponding angles of congruent triangles are equal, so their difference is $0^{\\circ}$.",
        "zh": "全等三角形的对应角相等，所以它们的差是 $0^{\\circ}$。"
      }
    }
  ],
  "algebra-geometry-coordinates/distance-midpoint-and-coordinate-figures": [
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between the points $(1, 2)$ and $(4, 6)$.",
        "zh": "求点 $(1, 2)$ 与 $(4, 6)$ 之间的距离。"
      },
      "choices": [
        "5",
        "3",
        "7",
        "\\sqrt{5}"
      ],
      "answer": 0,
      "explanation": {
        "en": "The horizontal change is $4-1=3$ and the vertical change is $6-2=4$, so the distance is $\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$. Adding the changes instead of squaring them (getting $3+4=7$) skips the Pythagorean step and is wrong.",
        "zh": "水平变化为 $4-1=3$，竖直变化为 $6-2=4$，所以距离为 $\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$。若把两个变化直接相加（得到 $3+4=7$），就跳过了勾股定理的平方步骤，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the midpoint of the segment joining $(2, 6)$ and $(10, 2)$?",
        "zh": "连接 $(2, 6)$ 与 $(10, 2)$ 的线段的中点是什么？"
      },
      "choices": [
        "(4, 6)",
        "(6, 4)",
        "(8, 8)",
        "(12, 8)"
      ],
      "answer": 1,
      "explanation": {
        "en": "Average the coordinates: $\\left(\\frac{2+10}{2}, \\frac{6+2}{2}\\right)=(6, 4)$. Swapping the x- and y-averages (getting $(4, 6)$) mixes up which sum belongs to which axis and is wrong.",
        "zh": "对坐标取平均：$\\left(\\frac{2+10}{2}, \\frac{6+2}{2}\\right)=(6, 4)$。若把 x 与 y 的平均值调换（得到 $(4, 6)$），就混淆了哪个和属于哪个坐标轴，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(0, 0)$ and $(6, 8)$.",
        "zh": "求 $(0, 0)$ 与 $(6, 8)$ 之间的距离。"
      },
      "choices": [
        "14",
        "\\sqrt{14}",
        "10",
        "2\\sqrt{7}"
      ],
      "answer": 2,
      "explanation": {
        "en": "The distance is $\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$. Simply adding the coordinates (getting $6+8=14$) ignores that distance requires squaring, summing, then taking a root.",
        "zh": "距离为 $\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$。若只是把坐标相加（得到 $6+8=14$），就忽略了距离需要先平方、再求和、最后开方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the distance between $(x_1, y_1)$ and $(x_2, y_2)$?",
        "zh": "下列哪个表达式给出 $(x_1, y_1)$ 与 $(x_2, y_2)$ 之间的距离？"
      },
      "choices": [
        "$(x_2-x_1)+(y_2-y_1)$",
        "$\\sqrt{(x_2-x_1)+(y_2-y_1)}$",
        "$(x_2-x_1)^2+(y_2-y_1)^2$",
        "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Distance is the square root of the sum of the squared differences: $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Leaving off the square root (keeping $(x_2-x_1)^2+(y_2-y_1)^2$) gives the squared distance, not the distance itself.",
        "zh": "距离等于坐标差平方和的平方根：$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$。若漏掉平方根（只保留 $(x_2-x_1)^2+(y_2-y_1)^2$），得到的是距离的平方，而非距离本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the midpoint of the segment joining $(-4, 3)$ and $(2, -7)$.",
        "zh": "求连接 $(-4, 3)$ 与 $(2, -7)$ 的线段的中点。"
      },
      "choices": [
        "(-1, -2)",
        "(-3, -5)",
        "(3, 5)",
        "(-1, 2)"
      ],
      "answer": 0,
      "explanation": {
        "en": "Average each coordinate: $\\left(\\frac{-4+2}{2}, \\frac{3+(-7)}{2}\\right)=(-1, -2)$. Subtracting instead of adding the coordinates (getting $(-3, 5)$) uses the distance idea, not the midpoint average, and is wrong.",
        "zh": "对每个坐标取平均：$\\left(\\frac{-4+2}{2}, \\frac{3+(-7)}{2}\\right)=(-1, -2)$。若把坐标相减而不是相加（得到 $(-3, 5)$），用的是距离的思路而非中点的平均，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(-1, 2)$ and $(-1, 7)$.",
        "zh": "求 $(-1, 2)$ 与 $(-1, 7)$ 之间的距离。"
      },
      "choices": [
        "0",
        "5",
        "9",
        "\\sqrt{29}"
      ],
      "answer": 1,
      "explanation": {
        "en": "The x-coordinates match, so this is a vertical segment; the distance is just $|7-2|=5$. Concluding the distance is $0$ because the x-values are equal confuses matching x-values with being the same point.",
        "zh": "两点的 x 坐标相同，所以这是一条竖直线段，距离就是 $|7-2|=5$。若因为 x 值相同就判断距离为 $0$，是把 x 相同误当成了同一个点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle has vertices $(0,0)$, $(5,0)$, $(5,3)$, and $(0,3)$. What is its perimeter?",
        "zh": "一个矩形的顶点为 $(0,0)$、$(5,0)$、$(5,3)$、$(0,3)$。它的周长是多少？"
      },
      "choices": [
        "15",
        "8",
        "16",
        "30"
      ],
      "answer": 2,
      "explanation": {
        "en": "The width is $5$ and the height is $3$, so the perimeter is $2(5+3)=16$. Multiplying the side lengths (getting $5\\times3=15$) computes the area, not the perimeter.",
        "zh": "宽为 $5$，高为 $3$，所以周长为 $2(5+3)=16$。若把边长相乘（得到 $5\\times3=15$），算的是面积而不是周长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle has vertices $(0,0)$, $(6,0)$, $(6,4)$, and $(0,4)$. What is its area?",
        "zh": "一个矩形的顶点为 $(0,0)$、$(6,0)$、$(6,4)$、$(0,4)$。它的面积是多少？"
      },
      "choices": [
        "48",
        "20",
        "10",
        "24"
      ],
      "answer": 3,
      "explanation": {
        "en": "The width is $6$ and the height is $4$, so the area is $6\\times4=24$. Adding the two dimensions and doubling (getting $2(6+4)=20$) computes the perimeter, not the area.",
        "zh": "宽为 $6$，高为 $4$，所以面积为 $6\\times4=24$。若把两个尺寸相加再乘二（得到 $2(6+4)=20$），算的是周长而不是面积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quadrilateral has vertices $A(0,0)$, $B(3,0)$, $C(4,2)$, $D(1,2)$. Both pairs of opposite sides are parallel but adjacent sides have different lengths. What is the most specific classification?",
        "zh": "一个四边形的顶点为 $A(0,0)$、$B(3,0)$、$C(4,2)$、$D(1,2)$。两组对边都平行，但相邻边长度不同。最精确的分类是什么？"
      },
      "choices": [
        "Parallelogram / 平行四边形",
        "Rectangle / 矩形",
        "Rhombus / 菱形",
        "Square / 正方形"
      ],
      "answer": 0,
      "explanation": {
        "en": "Opposite sides are parallel (slopes match), so it is a parallelogram; but the sides are not all equal and the angles are not right, so it is not a rhombus, rectangle, or square. Calling it a rectangle assumes right angles that the slopes do not confirm.",
        "zh": "对边平行（斜率相同），所以它是平行四边形；但各边不全相等、角也不是直角，因此不是菱形、矩形或正方形。若称它为矩形，就假设了斜率并未证实的直角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The distance formula is a direct application of which theorem?",
        "zh": "距离公式是下列哪个定理的直接应用？"
      },
      "choices": [
        "Midpoint formula / 中点公式",
        "Pythagorean theorem / 勾股定理",
        "Slope criteria / 斜率判据",
        "Triangle inequality / 三角不等式"
      ],
      "answer": 1,
      "explanation": {
        "en": "The horizontal and vertical changes form the legs of a right triangle, and the distance is the hypotenuse, so the distance formula comes straight from the Pythagorean theorem. The midpoint formula only averages coordinates and does not produce a length.",
        "zh": "水平与竖直的变化构成直角三角形的两条直角边，距离就是斜边，所以距离公式直接来自勾股定理。中点公式只是对坐标取平均，并不产生长度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The midpoint of segment $AB$ is $(4, 3)$ and endpoint $A$ is $(1, 1)$. Find endpoint $B$.",
        "zh": "线段 $AB$ 的中点为 $(4, 3)$，端点 $A$ 为 $(1, 1)$。求端点 $B$。"
      },
      "choices": [
        "(3, 2)",
        "(2.5, 2)",
        "(7, 5)",
        "(5, 7)"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since the midpoint's coordinates are the averages, $B=(2\\cdot4-1,\\ 2\\cdot3-1)=(7, 5)$. Averaging the midpoint with $A$ again (getting $(2.5, 2)$) finds a point one-quarter of the way, not the far endpoint.",
        "zh": "由于中点坐标是平均值，所以 $B=(2\\cdot4-1,\\ 2\\cdot3-1)=(7, 5)$。若再次对中点与 $A$ 取平均（得到 $(2.5, 2)$），找到的是四分之一处的点，而不是远端端点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(3, -2)$ and $(3, 4)$.",
        "zh": "求 $(3, -2)$ 与 $(3, 4)$ 之间的距离。"
      },
      "choices": [
        "-6",
        "0",
        "2",
        "6"
      ],
      "answer": 3,
      "explanation": {
        "en": "The points share an x-coordinate, so the distance is $|4-(-2)|=6$. Getting $-6$ forgets that distance is always positive, and $2$ comes from mishandling the negative sign as $4-2$.",
        "zh": "两点 x 坐标相同，所以距离为 $|4-(-2)|=6$。若得到 $-6$，就忘了距离总是正值；得到 $2$ 则是把负号错误地算成了 $4-2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the distance between $(0, 0)$ and $(9, 12)$.",
        "zh": "求 $(0, 0)$ 与 $(9, 12)$ 之间的距离。"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "15.00",
        "+15"
      ],
      "explanation": {
        "en": "The distance is $\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$. Adding the coordinates would give $21$, which skips the required squaring and root.",
        "zh": "距离为 $\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$。若把坐标相加会得到 $21$，这跳过了必要的平方与开方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the midpoint of the segment joining $(3, 7)$ and $(9, 1)$. Write it as an ordered pair.",
        "zh": "求连接 $(3, 7)$ 与 $(9, 1)$ 的线段的中点，写成有序对。"
      },
      "answer": "(6, 4)",
      "accept": [
        "(6,4)",
        "6, 4",
        "6,4",
        "(6.0, 4.0)"
      ],
      "explanation": {
        "en": "Average each coordinate: $\\left(\\frac{3+9}{2}, \\frac{7+1}{2}\\right)=(6, 4)$. Subtracting the coordinates would give differences, not the midpoint.",
        "zh": "对每个坐标取平均：$\\left(\\frac{3+9}{2}, \\frac{7+1}{2}\\right)=(6, 4)$。若把坐标相减，得到的是差值而不是中点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the distance between $(-3, -4)$ and $(0, 0)$.",
        "zh": "求 $(-3, -4)$ 与 $(0, 0)$ 之间的距离。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5.00",
        "+5"
      ],
      "explanation": {
        "en": "The distance is $\\sqrt{(-3)^2+(-4)^2}=\\sqrt{9+16}=\\sqrt{25}=5$. The negative signs disappear once the differences are squared, so the answer stays positive.",
        "zh": "距离为 $\\sqrt{(-3)^2+(-4)^2}=\\sqrt{9+16}=\\sqrt{25}=5$。差值平方后负号消失，所以答案为正。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A square has vertices $(1,1)$, $(1,5)$, $(5,5)$, and $(5,1)$. What is its area?",
        "zh": "一个正方形的顶点为 $(1,1)$、$(1,5)$、$(5,5)$、$(5,1)$。它的面积是多少？"
      },
      "answer": "16",
      "accept": [
        "16.0",
        "16 square units",
        "16 units^2"
      ],
      "explanation": {
        "en": "Each side has length $5-1=4$, so the area is $4^2=16$. Using $4\\times4$ is correct; computing the perimeter $4\\times4=16$ happens to match here only by coincidence, but area is side squared.",
        "zh": "每条边长为 $5-1=4$，所以面积为 $4^2=16$。用 $4\\times4$ 是正确的；此处周长 $4\\times4=16$ 恰好数值相同只是巧合，面积应为边长的平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The midpoint of a segment is $(0, 0)$ and one endpoint is $(-6, 8)$. Find the other endpoint as an ordered pair.",
        "zh": "一条线段的中点为 $(0, 0)$，其中一个端点为 $(-6, 8)$。求另一个端点，写成有序对。"
      },
      "answer": "(6, -8)",
      "accept": [
        "(6,-8)",
        "6, -8",
        "6,-8",
        "(6.0, -8.0)"
      ],
      "explanation": {
        "en": "The other endpoint is $(2\\cdot0-(-6),\\ 2\\cdot0-8)=(6, -8)$. Keeping the same signs as the given endpoint would place the point on the wrong side of the midpoint.",
        "zh": "另一个端点为 $(2\\cdot0-(-6),\\ 2\\cdot0-8)=(6, -8)$。若保留与已知端点相同的符号，会把点放在中点的错误一侧。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the distance between $(0, 0)$ and $(5, 12)$.",
        "zh": "求 $(0, 0)$ 与 $(5, 12)$ 之间的距离。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "13.00",
        "+13"
      ],
      "explanation": {
        "en": "The distance is $\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$. Adding $5+12=17$ skips the Pythagorean relationship.",
        "zh": "距离为 $\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$。若相加得 $5+12=17$，就跳过了勾股关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle has vertices $(2,1)$, $(2,6)$, $(7,6)$, and $(7,1)$. What is its area?",
        "zh": "一个矩形的顶点为 $(2,1)$、$(2,6)$、$(7,6)$、$(7,1)$。它的面积是多少？"
      },
      "answer": "25",
      "accept": [
        "25.0",
        "25 square units",
        "25 units^2"
      ],
      "explanation": {
        "en": "The width is $7-2=5$ and the height is $6-1=5$, so the area is $5\\times5=25$. Adding the side lengths instead would give a perimeter-style value, not area.",
        "zh": "宽为 $7-2=5$，高为 $6-1=5$，所以面积为 $5\\times5=25$。若改为把边长相加，得到的是类似周长的值，而不是面积。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle has vertices $(0,0)$, $(8,0)$, $(8,6)$, and $(0,6)$. What is its perimeter?",
        "zh": "一个矩形的顶点为 $(0,0)$、$(8,0)$、$(8,6)$、$(0,6)$。它的周长是多少？"
      },
      "answer": "28",
      "accept": [
        "28.0",
        "28 units",
        "+28"
      ],
      "explanation": {
        "en": "The width is $8$ and the height is $6$, so the perimeter is $2(8+6)=28$. Multiplying $8\\times6=48$ would give the area instead of the perimeter.",
        "zh": "宽为 $8$，高为 $6$，所以周长为 $2(8+6)=28$。若相乘得 $8\\times6=48$，得到的是面积而不是周长。"
      }
    }
  ],
  "algebra-geometry-coordinates/slope-criteria-and-coordinate-proofs": [
    {
      "type": "mc",
      "question": {
        "en": "Find the slope of the line through $(2, 3)$ and $(6, 11)$.",
        "zh": "求经过 $(2, 3)$ 与 $(6, 11)$ 的直线的斜率。"
      },
      "choices": [
        "2",
        "\\frac{1}{2}",
        "4",
        "8"
      ],
      "answer": 0,
      "explanation": {
        "en": "Slope is rise over run: $\\frac{11-3}{6-2}=\\frac{8}{4}=2$. Using only the rise $8$ without dividing by the run treats the vertical change as the slope and is wrong.",
        "zh": "斜率等于纵向变化除以横向变化：$\\frac{11-3}{6-2}=\\frac{8}{4}=2$。若只用纵向变化 $8$ 而不除以横向变化，就把竖直变化当成了斜率，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line is parallel to $y = 3x - 5$. What is the slope of the parallel line?",
        "zh": "一条直线与 $y = 3x - 5$ 平行。这条平行线的斜率是多少？"
      },
      "choices": [
        "-3",
        "3",
        "-\\frac{1}{3}",
        "\\frac{1}{3}"
      ],
      "answer": 1,
      "explanation": {
        "en": "Parallel lines have equal slopes, so the slope is $3$. Taking the negative reciprocal $-\\frac{1}{3}$ would give a perpendicular line, not a parallel one.",
        "zh": "平行线的斜率相等，所以斜率为 $3$。若取负倒数 $-\\frac{1}{3}$，得到的是垂直线而不是平行线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of a line perpendicular to a line with slope $2$?",
        "zh": "与斜率为 $2$ 的直线垂直的直线，其斜率是多少？"
      },
      "choices": [
        "\\frac{1}{2}",
        "2",
        "-\\frac{1}{2}",
        "-2"
      ],
      "answer": 2,
      "explanation": {
        "en": "Perpendicular slopes are negative reciprocals, so the slope is $-\\frac{1}{2}$. Just flipping the sign to $-2$ keeps the same steepness and does not make the lines perpendicular.",
        "zh": "垂直线的斜率互为负倒数，所以斜率为 $-\\frac{1}{2}$。若只把符号改成 $-2$，斜率大小不变，并不能使两线垂直。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of a line perpendicular to a line with slope $-\\frac{3}{4}$?",
        "zh": "与斜率为 $-\\frac{3}{4}$ 的直线垂直的直线，其斜率是多少？"
      },
      "choices": [
        "-\\frac{4}{3}",
        "\\frac{3}{4}",
        "-\\frac{3}{4}",
        "\\frac{4}{3}"
      ],
      "answer": 3,
      "explanation": {
        "en": "The negative reciprocal of $-\\frac{3}{4}$ is $\\frac{4}{3}$: flip to $\\frac{4}{3}$ and change the sign from negative to positive. Only flipping the sign (getting $\\frac{3}{4}$) forgets to invert the fraction.",
        "zh": "$-\\frac{3}{4}$ 的负倒数是 $\\frac{4}{3}$：先取倒数得 $\\frac{4}{3}$，再把负号变为正号。若只改符号（得到 $\\frac{3}{4}$），就忘了对分数取倒数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines have slopes $2$ and $-\\frac{1}{2}$. What is their relationship?",
        "zh": "两条直线的斜率分别为 $2$ 与 $-\\frac{1}{2}$。它们的关系是什么？"
      },
      "choices": [
        "Perpendicular / 垂直",
        "Parallel / 平行",
        "Same line / 同一条线",
        "Neither / 都不是"
      ],
      "answer": 0,
      "explanation": {
        "en": "The product of the slopes is $2\\cdot(-\\frac{1}{2})=-1$, which means the lines are perpendicular. Calling them parallel would require equal slopes, but $2\\ne-\\frac{1}{2}$.",
        "zh": "斜率之积为 $2\\cdot(-\\frac{1}{2})=-1$，说明两线垂直。若称它们平行，则需要斜率相等，但 $2\\ne-\\frac{1}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines have slopes $\\frac{2}{3}$ and $\\frac{2}{3}$ but different y-intercepts. What is their relationship?",
        "zh": "两条直线的斜率都是 $\\frac{2}{3}$，但 y 轴截距不同。它们的关系是什么？"
      },
      "choices": [
        "Perpendicular / 垂直",
        "Parallel / 平行",
        "Same line / 同一条线",
        "Neither / 都不是"
      ],
      "answer": 1,
      "explanation": {
        "en": "Equal slopes with different intercepts mean the lines never meet, so they are parallel. They are not the same line because their intercepts differ.",
        "zh": "斜率相等而截距不同，意味着两线永不相交，所以它们平行。由于截距不同，它们并非同一条线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which condition tells you two distinct lines are parallel?",
        "zh": "下列哪个条件表明两条不同的直线平行？"
      },
      "choices": [
        "Slopes are negative reciprocals / 斜率互为负倒数",
        "Slopes multiply to $-1$ / 斜率之积为 $-1$",
        "Slopes are equal and intercepts differ / 斜率相等且截距不同",
        "One slope is $0$ and the other undefined / 一个斜率为 $0$，另一个不存在"
      ],
      "answer": 2,
      "explanation": {
        "en": "Parallel lines have the same slope but different intercepts. Negative reciprocal slopes (product $-1$) describe perpendicular lines, not parallel ones.",
        "zh": "平行线斜率相同但截距不同。斜率互为负倒数（积为 $-1$）描述的是垂直线，而不是平行线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $P$ partitions the segment from $A(2, 3)$ to $B(8, 15)$ so that $AP:PB = 1:2$. Find $P$.",
        "zh": "点 $P$ 把从 $A(2, 3)$ 到 $B(8, 15)$ 的线段按 $AP:PB = 1:2$ 分割。求 $P$。"
      },
      "choices": [
        "(4, 9)",
        "(6, 11)",
        "(5, 9)",
        "(4, 7)"
      ],
      "answer": 3,
      "explanation": {
        "en": "A ratio of $1:2$ places $P$ one-third of the way: $P=\\left(2+\\frac{1}{3}(8-2),\\ 3+\\frac{1}{3}(15-3)\\right)=(4, 7)$. Using the midpoint $(5, 9)$ treats the ratio as $1:1$ and is wrong.",
        "zh": "比 $1:2$ 使 $P$ 位于三分之一处：$P=\\left(2+\\frac{1}{3}(8-2),\\ 3+\\frac{1}{3}(15-3)\\right)=(4, 7)$。若用中点 $(5, 9)$，就把比当成了 $1:1$，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To prove a quadrilateral is a parallelogram using coordinates, which slope fact should you show?",
        "zh": "用坐标证明一个四边形是平行四边形时，应展示哪个关于斜率的事实？"
      },
      "choices": [
        "Both pairs of opposite sides have equal slopes / 两组对边的斜率分别相等",
        "All four sides have the same length / 四条边长度都相等",
        "The diagonals have equal slopes / 对角线的斜率相等",
        "One pair of sides is perpendicular / 有一组边互相垂直"
      ],
      "answer": 0,
      "explanation": {
        "en": "A parallelogram needs both pairs of opposite sides parallel, which is shown by matching slopes on each pair. Equal side lengths alone would point toward a rhombus and do not by themselves prove parallelism.",
        "zh": "平行四边形需要两组对边都平行，这通过每组对边斜率相等来证明。仅仅边长相等更倾向于菱形，本身并不能证明平行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If two non-vertical lines are perpendicular, the product of their slopes is:",
        "zh": "如果两条非竖直的直线互相垂直，它们斜率之积是："
      },
      "choices": [
        "1",
        "-1",
        "0",
        "undefined / 不存在"
      ],
      "answer": 1,
      "explanation": {
        "en": "Perpendicular slopes are negative reciprocals, and a number times its negative reciprocal is $-1$. A product of $0$ would require one slope to be $0$, which describes a horizontal line, not a perpendicular pair.",
        "zh": "垂直线斜率互为负倒数，一个数乘以它的负倒数得 $-1$。若积为 $0$，则需其中一个斜率为 $0$，那描述的是水平线，而不是垂直的一对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line is horizontal (slope $0$). What is the slope of a line perpendicular to it?",
        "zh": "一条直线是水平的（斜率为 $0$）。与它垂直的直线，其斜率是多少？"
      },
      "choices": [
        "0",
        "1",
        "Undefined / 不存在",
        "-1"
      ],
      "answer": 2,
      "explanation": {
        "en": "A line perpendicular to a horizontal line is vertical, and vertical lines have undefined slope. Answering $0$ repeats the horizontal line's own slope instead of turning it 90 degrees.",
        "zh": "与水平线垂直的直线是竖直的，而竖直线的斜率不存在。若回答 $0$，就是重复了水平线自身的斜率，而没有把它旋转 90 度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $P$ partitions the segment from $A(1, 2)$ to $B(7, 11)$ so that $AP:PB = 2:1$. Find $P$.",
        "zh": "点 $P$ 把从 $A(1, 2)$ 到 $B(7, 11)$ 的线段按 $AP:PB = 2:1$ 分割。求 $P$。"
      },
      "choices": [
        "(3, 5)",
        "(4, 6.5)",
        "(6, 9.5)",
        "(5, 8)"
      ],
      "answer": 3,
      "explanation": {
        "en": "A ratio of $2:1$ places $P$ two-thirds of the way: $P=\\left(1+\\frac{2}{3}(7-1),\\ 2+\\frac{2}{3}(11-2)\\right)=(5, 8)$. Going only one-third of the way (getting $(3, 5)$) reverses the ratio to $1:2$.",
        "zh": "比 $2:1$ 使 $P$ 位于三分之二处：$P=\\left(1+\\frac{2}{3}(7-1),\\ 2+\\frac{2}{3}(11-2)\\right)=(5, 8)$。若只走三分之一（得到 $(3, 5)$），就把比颠倒成了 $1:2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(1, 2)$ and $(5, 10)$.",
        "zh": "求经过 $(1, 2)$ 与 $(5, 10)$ 的直线的斜率。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2/1",
        "+2"
      ],
      "explanation": {
        "en": "Slope is $\\frac{10-2}{5-1}=\\frac{8}{4}=2$. Dividing the run by the rise (getting $\\frac{4}{8}=\\frac{1}{2}$) inverts the formula.",
        "zh": "斜率为 $\\frac{10-2}{5-1}=\\frac{8}{4}=2$。若用横向变化除以纵向变化（得到 $\\frac{4}{8}=\\frac{1}{2}$），就把公式颠倒了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(0, 0)$ and $(4, -6)$.",
        "zh": "求经过 $(0, 0)$ 与 $(4, -6)$ 的直线的斜率。"
      },
      "answer": "-3/2",
      "accept": [
        "-1.5",
        "-1.50",
        "-6/4",
        "-3\\/2"
      ],
      "explanation": {
        "en": "Slope is $\\frac{-6-0}{4-0}=\\frac{-6}{4}=-\\frac{3}{2}$. Dropping the negative sign would put the line going uphill instead of downhill.",
        "zh": "斜率为 $\\frac{-6-0}{4-0}=\\frac{-6}{4}=-\\frac{3}{2}$。若丢掉负号，会使直线变成上升而不是下降。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of a line perpendicular to a line with slope $5$? Give the exact value.",
        "zh": "与斜率为 $5$ 的直线垂直的直线，其斜率是多少？给出精确值。"
      },
      "answer": "-1/5",
      "accept": [
        "-0.2",
        "-0.20",
        "-1\\/5"
      ],
      "explanation": {
        "en": "The negative reciprocal of $5$ is $-\\frac{1}{5}$. Using $-5$ only changes the sign and keeps the same steepness, so the lines would not be perpendicular.",
        "zh": "$5$ 的负倒数是 $-\\frac{1}{5}$。若用 $-5$，只是改变了符号而斜率大小不变，两线不会垂直。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of a line perpendicular to a line with slope $-\\frac{2}{3}$? Give the exact value.",
        "zh": "与斜率为 $-\\frac{2}{3}$ 的直线垂直的直线，其斜率是多少？给出精确值。"
      },
      "answer": "3/2",
      "accept": [
        "1.5",
        "1.50",
        "3\\/2",
        "+3/2"
      ],
      "explanation": {
        "en": "Flip $-\\frac{2}{3}$ to $\\frac{3}{2}$ and change the sign to positive, giving $\\frac{3}{2}$. Leaving the fraction as $-\\frac{3}{2}$ forgets that the negative reciprocal reverses the sign.",
        "zh": "把 $-\\frac{2}{3}$ 取倒数得 $\\frac{3}{2}$，再把符号变为正号，得 $\\frac{3}{2}$。若保留为 $-\\frac{3}{2}$，就忘了负倒数要改变符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $P$ partitions the segment from $A(0, 0)$ to $B(8, 12)$ so that $AP:PB = 1:3$. Find $P$ as an ordered pair.",
        "zh": "点 $P$ 把从 $A(0, 0)$ 到 $B(8, 12)$ 的线段按 $AP:PB = 1:3$ 分割。求 $P$，写成有序对。"
      },
      "answer": "(2, 3)",
      "accept": [
        "(2,3)",
        "2, 3",
        "2,3",
        "(2.0, 3.0)"
      ],
      "explanation": {
        "en": "A $1:3$ ratio places $P$ one-fourth of the way: $\\left(0+\\frac{1}{4}(8),\\ 0+\\frac{1}{4}(12)\\right)=(2, 3)$. Using one-third of the way would misread the ratio as $1:2$.",
        "zh": "$1:3$ 的比使 $P$ 位于四分之一处：$\\left(0+\\frac{1}{4}(8),\\ 0+\\frac{1}{4}(12)\\right)=(2, 3)$。若走三分之一，就把比误读成了 $1:2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $P$ partitions the segment from $A(0, 0)$ to $B(8, 12)$ so that $AP:PB = 3:1$. Find $P$ as an ordered pair.",
        "zh": "点 $P$ 把从 $A(0, 0)$ 到 $B(8, 12)$ 的线段按 $AP:PB = 3:1$ 分割。求 $P$，写成有序对。"
      },
      "answer": "(6, 9)",
      "accept": [
        "(6,9)",
        "6, 9",
        "6,9",
        "(6.0, 9.0)"
      ],
      "explanation": {
        "en": "A $3:1$ ratio places $P$ three-fourths of the way: $\\left(0+\\frac{3}{4}(8),\\ 0+\\frac{3}{4}(12)\\right)=(6, 9)$. Using one-fourth of the way (getting $(2, 3)$) reverses the ratio.",
        "zh": "$3:1$ 的比使 $P$ 位于四分之三处：$\\left(0+\\frac{3}{4}(8),\\ 0+\\frac{3}{4}(12)\\right)=(6, 9)$。若走四分之一（得到 $(2, 3)$），就把比颠倒了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of the line through $(2, 5)$ and $(2, 9)$?",
        "zh": "求经过 $(2, 5)$ 与 $(2, 9)$ 的直线的斜率。"
      },
      "answer": "undefined",
      "accept": [
        "undef",
        "no slope",
        "vertical",
        "does not exist",
        "不存在",
        "无斜率",
        "垂直"
      ],
      "explanation": {
        "en": "The run is $2-2=0$, and dividing by zero makes the slope undefined; the line is vertical. Answering $0$ describes a horizontal line, which is the opposite situation.",
        "zh": "横向变化为 $2-2=0$，除以零使斜率不存在，这条线是竖直的。若回答 $0$，描述的是水平线，恰好相反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line is parallel to $y = -\\frac{2}{5}x + 1$. What is its slope? Give the exact value.",
        "zh": "一条直线与 $y = -\\frac{2}{5}x + 1$ 平行。它的斜率是多少？给出精确值。"
      },
      "answer": "-2/5",
      "accept": [
        "-0.4",
        "-0.40",
        "-2\\/5"
      ],
      "explanation": {
        "en": "Parallel lines share the same slope, so the slope is $-\\frac{2}{5}$. Taking the negative reciprocal $\\frac{5}{2}$ would describe a perpendicular line instead.",
        "zh": "平行线斜率相同，所以斜率为 $-\\frac{2}{5}$。若取负倒数 $\\frac{5}{2}$，描述的是垂直线。"
      }
    }
  ],
  "operations-on-functions/operations-on-functions": [
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = 3x + 2$ and $g(x) = x - 5$, what is $(f+g)(x)$?",
        "zh": "若 $f(x) = 3x + 2$，$g(x) = x - 5$，求 $(f+g)(x)$。"
      },
      "choices": [
        "$4x - 3$",
        "$4x + 7$",
        "$2x - 3$",
        "$3x^2 - 13x - 10$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add like terms: $(3x + x) + (2 - 5) = 4x - 3$. A tempting mistake is subtracting the second function instead of adding, giving $2x - 3$, or multiplying the two functions instead of adding them.",
        "zh": "合并同类项：$(3x + x) + (2 - 5) = 4x - 3$。常见错误是把第二个函数减去而不是相加，得到 $2x - 3$，或把两个函数相乘而不是相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x^2 + 3x$ and $g(x) = x^2 - x$, what is $(f-g)(x)$?",
        "zh": "若 $f(x) = x^2 + 3x$，$g(x) = x^2 - x$，求 $(f-g)(x)$。"
      },
      "choices": [
        "$2x$",
        "$4x$",
        "$-4x$",
        "$2x^2 + 2x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distribute the minus sign to every term of $g$: $(x^2 + 3x) - (x^2 - x) = x^2 + 3x - x^2 + x = 4x$. Forgetting to flip the sign of $-x$ leaves $2x$.",
        "zh": "把减号分配到 $g$ 的每一项：$(x^2 + 3x) - (x^2 - x) = x^2 + 3x - x^2 + x = 4x$。忘记把 $-x$ 的符号变号会得到 $2x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x + 2$ and $g(x) = x - 2$, what is $(f \\cdot g)(x)$?",
        "zh": "若 $f(x) = x + 2$，$g(x) = x - 2$，求 $(f \\cdot g)(x)$。"
      },
      "choices": [
        "$x^2 + 4$",
        "$2x$",
        "$x^2 - 4$",
        "$x^2 - 4x - 4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply as a difference of squares: $(x + 2)(x - 2) = x^2 - 4$. Adding the functions instead of multiplying gives $2x$, and dropping the middle-term cancellation gives a wrong sign on the constant.",
        "zh": "按平方差公式相乘：$(x + 2)(x - 2) = x^2 - 4$。把函数相加而不是相乘会得到 $2x$，忘记中间项相消会使常数项符号出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x^2$ and $g(x) = 2x + 1$, what is $(f+g)(2)$?",
        "zh": "若 $f(x) = x^2$，$g(x) = 2x + 1$，求 $(f+g)(2)$。"
      },
      "choices": [
        "$7$",
        "$20$",
        "$14$",
        "$9$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Evaluate each first: $f(2) = 4$ and $g(2) = 5$, then add to get $9$. Multiplying the two values instead of adding them gives $20$.",
        "zh": "先分别求值：$f(2) = 4$，$g(2) = 5$，再相加得 $9$。把两个值相乘而不是相加会得到 $20$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x^2 - 9$ and $g(x) = x - 3$, simplify $\\left(\\frac{f}{g}\\right)(x)$ for $x \\neq 3$.",
        "zh": "若 $f(x) = x^2 - 9$，$g(x) = x - 3$，化简 $\\left(\\frac{f}{g}\\right)(x)$（$x \\neq 3$）。"
      },
      "choices": [
        "$x + 3$",
        "$x - 3$",
        "$x^2 - 6$",
        "$\\frac{1}{x + 3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor the numerator: $x^2 - 9 = (x + 3)(x - 3)$, then cancel the common $(x - 3)$ to get $x + 3$. Cancelling the wrong factor or subtracting the functions leads to $x - 3$.",
        "zh": "分解分子：$x^2 - 9 = (x + 3)(x - 3)$，约去公因式 $(x - 3)$ 得 $x + 3$。约错因式或把函数相减会得到 $x - 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x$ and $g(x) = x - 4$, what is the domain of $\\left(\\frac{f}{g}\\right)(x)$?",
        "zh": "若 $f(x) = x$，$g(x) = x - 4$，求 $\\left(\\frac{f}{g}\\right)(x)$ 的定义域。"
      },
      "choices": [
        "all real numbers",
        "$x \\neq 4$",
        "$x \\neq -4$",
        "$x \\neq 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A quotient is undefined where the denominator is zero, so set $g(x) = x - 4 = 0$, giving $x = 4$. Excluding the zero of the numerator instead would wrongly remove $x = 0$.",
        "zh": "商在分母为零处无定义，故令 $g(x) = x - 4 = 0$，得 $x = 4$。误把分子的零点排除会错误地去掉 $x = 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = 2x$ and $g(x) = x + 3$, what is the composition $(f \\circ g)(x)$?",
        "zh": "若 $f(x) = 2x$，$g(x) = x + 3$，求复合函数 $(f \\circ g)(x)$。"
      },
      "choices": [
        "$2x + 3$",
        "$x + 6$",
        "$2x + 6$",
        "$2x^2 + 6x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(f \\circ g)(x) = f(g(x)) = 2(x + 3) = 2x + 6$. Computing $g(f(x))$ instead gives $2x + 3$, and multiplying the functions gives $2x^2 + 6x$.",
        "zh": "$(f \\circ g)(x) = f(g(x)) = 2(x + 3) = 2x + 6$。误算成 $g(f(x))$ 会得到 $2x + 3$，把函数相乘会得到 $2x^2 + 6x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x + 1$ and $g(x) = x^2$, what is $(f \\circ g)(3)$?",
        "zh": "若 $f(x) = x + 1$，$g(x) = x^2$，求 $(f \\circ g)(3)$。"
      },
      "choices": [
        "$16$",
        "$28$",
        "$4$",
        "$10$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Work inside out: $g(3) = 9$, then $f(9) = 9 + 1 = 10$. Reversing the order to $(g \\circ f)(3) = g(4) = 16$ is the classic trap.",
        "zh": "从内到外计算：$g(3) = 9$，再 $f(9) = 9 + 1 = 10$。把顺序反过来算成 $(g \\circ f)(3) = g(4) = 16$ 是常见陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x^2 + 1$ and $g(x) = 3x - 4$, what is $(f+g)(x)$?",
        "zh": "若 $f(x) = x^2 + 1$，$g(x) = 3x - 4$，求 $(f+g)(x)$。"
      },
      "choices": [
        "$x^2 + 3x - 3$",
        "$x^2 - 3x + 5$",
        "$x^2 + 3x + 5$",
        "$3x^2 - 4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Combine like terms: $x^2 + (3x) + (1 - 4) = x^2 + 3x - 3$. Subtracting $g$ instead of adding flips the middle and constant terms into $x^2 - 3x + 5$.",
        "zh": "合并同类项：$x^2 + (3x) + (1 - 4) = x^2 + 3x - 3$。把 $g$ 相减而不是相加会把中间项和常数项变成 $x^2 - 3x + 5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = 2x^2$ and $g(x) = x + 5$, what is $(f-g)(3)$?",
        "zh": "若 $f(x) = 2x^2$，$g(x) = x + 5$，求 $(f-g)(3)$。"
      },
      "choices": [
        "$26$",
        "$10$",
        "$18$",
        "$8$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Evaluate each: $f(3) = 2(9) = 18$ and $g(3) = 8$, then subtract: $18 - 8 = 10$. Adding the values instead of subtracting gives $26$.",
        "zh": "分别求值：$f(3) = 2(9) = 18$，$g(3) = 8$，再相减：$18 - 8 = 10$。把两个值相加而不是相减会得到 $26$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x$ and $g(x) = x + 5$, what is $(f \\cdot g)(x)$?",
        "zh": "若 $f(x) = x$，$g(x) = x + 5$，求 $(f \\cdot g)(x)$。"
      },
      "choices": [
        "$2x + 5$",
        "$x^2 + 5$",
        "$x^2 + 5x$",
        "$5x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Distribute the multiplication: $x(x + 5) = x^2 + 5x$. Adding the functions instead of multiplying gives $2x + 5$, and forgetting to multiply the $x$ through gives $x^2 + 5$.",
        "zh": "分配相乘：$x(x + 5) = x^2 + 5x$。把函数相加而不是相乘会得到 $2x + 5$，忘记把 $x$ 乘进去会得到 $x^2 + 5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x^2 + 1$ and $g(x) = 4x - 7$ are both polynomials, what is the domain of $(f+g)(x)$?",
        "zh": "若 $f(x) = x^2 + 1$ 和 $g(x) = 4x - 7$ 都是多项式，求 $(f+g)(x)$ 的定义域。"
      },
      "choices": [
        "$x \\neq 0$",
        "$x > 0$",
        "$x \\neq 1$",
        "all real numbers"
      ],
      "answer": 3,
      "explanation": {
        "en": "The sum of two polynomials is a polynomial, which is defined everywhere, so the domain is all real numbers. Excluding a value would only be needed if a variable sat in a denominator, which does not happen with addition of polynomials.",
        "zh": "两个多项式之和仍是多项式，处处有定义，故定义域为全体实数。只有当变量出现在分母中才需要排除某个值，而多项式相加不会出现这种情况。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = 4x - 1$ and $g(x) = 2x + 3$, find $(f+g)(1)$.",
        "zh": "若 $f(x) = 4x - 1$，$g(x) = 2x + 3$，求 $(f+g)(1)$。"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$f(1) = 3$ and $g(1) = 5$, so $(f+g)(1) = 3 + 5 = 8$. You can also add first, $(f+g)(x) = 6x + 2$, then substitute: $6(1) + 2 = 8$.",
        "zh": "$f(1) = 3$，$g(1) = 5$，故 $(f+g)(1) = 3 + 5 = 8$。也可先相加 $(f+g)(x) = 6x + 2$，再代入：$6(1) + 2 = 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = x + 1$ and $g(x) = x - 1$, find $(f \\cdot g)(2)$.",
        "zh": "若 $f(x) = x + 1$，$g(x) = x - 1$，求 $(f \\cdot g)(2)$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$f(2) = 3$ and $g(2) = 1$, so $(f \\cdot g)(2) = 3 \\times 1 = 3$. Adding instead of multiplying would give $4$.",
        "zh": "$f(2) = 3$，$g(2) = 1$，故 $(f \\cdot g)(2) = 3 \\times 1 = 3$。相加而不是相乘会得到 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = x^2 + 2x + 1$ and $g(x) = x - 4$, find $(f-g)(0)$.",
        "zh": "若 $f(x) = x^2 + 2x + 1$，$g(x) = x - 4$，求 $(f-g)(0)$。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$f(0) = 1$ and $g(0) = -4$, so $(f-g)(0) = 1 - (-4) = 5$. Forgetting that subtracting a negative adds would give $-3$.",
        "zh": "$f(0) = 1$，$g(0) = -4$，故 $(f-g)(0) = 1 - (-4) = 5$。忘记减负数等于加会得到 $-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = x^2$ and $g(x) = x - 2$, find $\\left(\\frac{f}{g}\\right)(4)$.",
        "zh": "若 $f(x) = x^2$，$g(x) = x - 2$，求 $\\left(\\frac{f}{g}\\right)(4)$。"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$f(4) = 16$ and $g(4) = 2$, so $\\left(\\frac{f}{g}\\right)(4) = \\frac{16}{2} = 8$. Subtracting the values instead of dividing would give $14$.",
        "zh": "$f(4) = 16$，$g(4) = 2$，故 $\\left(\\frac{f}{g}\\right)(4) = \\frac{16}{2} = 8$。相减而不是相除会得到 $14$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = x - 1$ and $g(x) = x^2$, find $(g \\circ f)(3)$.",
        "zh": "若 $f(x) = x - 1$，$g(x) = x^2$，求 $(g \\circ f)(3)$。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Work inside out: $f(3) = 2$, then $g(2) = 2^2 = 4$. Reversing the order to $(f \\circ g)(3) = g(3) - 1 = 8$ is the common mix-up.",
        "zh": "从内到外：$f(3) = 2$，再 $g(2) = 2^2 = 4$。把顺序反过来算成 $(f \\circ g)(3) = g(3) - 1 = 8$ 是常见混淆。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $g(x) = x + 7$, at what value of $x$ is $\\left(\\frac{f}{g}\\right)(x)$ undefined?",
        "zh": "若 $g(x) = x + 7$，$\\left(\\frac{f}{g}\\right)(x)$ 在 $x$ 等于何值时无定义？"
      },
      "answer": "-7",
      "accept": [
        "-7",
        "-7.0",
        "x = -7",
        "x=-7"
      ],
      "explanation": {
        "en": "A quotient is undefined where the denominator equals zero: $x + 7 = 0$ gives $x = -7$. Using $+7$ solves the wrong equation, $x - 7 = 0$.",
        "zh": "商在分母为零处无定义：$x + 7 = 0$ 得 $x = -7$。写成 $+7$ 解错了方程 $x - 7 = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = 3x^2$ and $g(x) = -x^2 + 2x$, find $(f+g)(2)$.",
        "zh": "若 $f(x) = 3x^2$，$g(x) = -x^2 + 2x$，求 $(f+g)(2)$。"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "$(f+g)(x) = 2x^2 + 2x$, so at $x = 2$: $2(4) + 2(2) = 8 + 4 = 12$. You can also add the values: $f(2) = 12$ and $g(2) = 0$, giving $12$.",
        "zh": "$(f+g)(x) = 2x^2 + 2x$，在 $x = 2$ 时：$2(4) + 2(2) = 8 + 4 = 12$。也可直接相加：$f(2) = 12$，$g(2) = 0$，得 $12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x) = 2x + 1$ and $g(x) = 3x - 2$, find $(f \\circ g)(1)$.",
        "zh": "若 $f(x) = 2x + 1$，$g(x) = 3x - 2$，求 $(f \\circ g)(1)$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Inside first: $g(1) = 1$, then $f(1) = 2(1) + 1 = 3$. Computing $(g \\circ f)(1) = g(3) = 7$ instead reverses the composition order.",
        "zh": "先算内层：$g(1) = 1$，再 $f(1) = 2(1) + 1 = 3$。算成 $(g \\circ f)(1) = g(3) = 7$ 则是把复合顺序反了。"
      }
    }
  ],
  "basics-of-geometry/points-lines-planes-and-segments": [
    {
      "type": "mc",
      "question": {
        "en": "Which of these is an undefined term in geometry?",
        "zh": "以下哪一个是几何中的不定义术语（基本概念）？"
      },
      "choices": [
        "Point",
        "Angle",
        "Segment",
        "Triangle"
      ],
      "answer": 0,
      "explanation": {
        "en": "Point, line, and plane are the three undefined terms; they are described but not formally defined. Segments, angles, and triangles are all defined using these basic building blocks, so they are not undefined terms.",
        "zh": "点、线、面是三个不定义术语，只作描述而不给出正式定义。线段、角和三角形都是用这些基本概念定义出来的，因此都不是不定义术语。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Points that lie on the same line are called ___.",
        "zh": "位于同一条直线上的点称为 ___。"
      },
      "choices": [
        "coplanar",
        "collinear",
        "congruent",
        "adjacent"
      ],
      "answer": 1,
      "explanation": {
        "en": "Collinear means on the same line. A common mix-up is coplanar, which means lying on the same plane, not the same line.",
        "zh": "共线（collinear）指在同一条直线上。常见的混淆是共面（coplanar），它指在同一平面上，而不是同一直线上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many points are needed to determine exactly one line?",
        "zh": "确定唯一一条直线至少需要多少个点？"
      },
      "choices": [
        "1",
        "3",
        "2",
        "infinitely many"
      ],
      "answer": 2,
      "explanation": {
        "en": "Through any two distinct points there is exactly one line. A single point has infinitely many lines through it, so one point is not enough.",
        "zh": "过任意两个不同的点有且只有一条直线。仅一个点会有无数条直线经过，所以一个点是不够的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A flat surface that extends infinitely in all directions and has no thickness is a ___.",
        "zh": "一个向各个方向无限延伸、没有厚度的平面叫做 ___。"
      },
      "choices": [
        "segment",
        "line",
        "ray",
        "plane"
      ],
      "answer": 3,
      "explanation": {
        "en": "A plane is a flat two-dimensional surface extending without end. A line extends in only one dimension, so it cannot describe a whole flat surface.",
        "zh": "平面是一个二维的、无限延伸的平坦表面。直线只在一个维度上延伸，无法描述整个平坦表面。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On a line, point $B$ is between $A$ and $C$. If $AB = 5$ and $BC = 8$, what is $AC$?",
        "zh": "在一条直线上，点 $B$ 在 $A$ 与 $C$ 之间。若 $AB = 5$，$BC = 8$，则 $AC$ 为多少？"
      },
      "choices": [
        "13",
        "3",
        "40",
        "6.5"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the Segment Addition Postulate, $AC = AB + BC = 5 + 8 = 13$. Subtracting instead of adding gives $3$, which mistakenly treats the whole as a difference of the parts.",
        "zh": "根据线段加法公理，$AC = AB + BC = 5 + 8 = 13$。若做减法会得到 $3$，那是错误地把整体当成两部分之差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $M$ is between $P$ and $Q$. If $PQ = 20$ and $PM = 12$, what is $MQ$?",
        "zh": "点 $M$ 在 $P$ 与 $Q$ 之间。若 $PQ = 20$，$PM = 12$，则 $MQ$ 为多少？"
      },
      "choices": [
        "32",
        "8",
        "12",
        "10"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $PM + MQ = PQ$, we get $MQ = 20 - 12 = 8$. Adding the two given values gives $32$, which ignores that $PQ$ is the whole, not another part.",
        "zh": "由于 $PM + MQ = PQ$，所以 $MQ = 20 - 12 = 8$。把两个已知值相加会得到 $32$，那忽略了 $PQ$ 是整体而不是另一部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which notation names a ray that starts at $A$ and passes through $B$?",
        "zh": "下列哪种记号表示一条以 $A$ 为端点并经过 $B$ 的射线？"
      },
      "choices": [
        "$\\overline{AB}$",
        "$\\overleftrightarrow{AB}$",
        "$\\overrightarrow{AB}$",
        "$AB$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A ray uses a single arrow pointing from the endpoint through the other point, so $\\overrightarrow{AB}$ starts at $A$. A bar over the letters denotes a segment, which has two endpoints instead of one.",
        "zh": "射线用单向箭头，从端点指向另一点，故 $\\overrightarrow{AB}$ 以 $A$ 为端点。字母上加一横表示线段，它有两个端点而非一个端点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\overrightarrow{BA}$ and $\\overrightarrow{BC}$ point in opposite directions along the same line. These are called ___.",
        "zh": "$\\overrightarrow{BA}$ 与 $\\overrightarrow{BC}$ 沿同一条直线指向相反方向。它们被称为 ___。"
      },
      "choices": [
        "congruent rays",
        "collinear segments",
        "parallel rays",
        "opposite rays"
      ],
      "answer": 3,
      "explanation": {
        "en": "Two rays with a common endpoint that form a straight line are opposite rays. They are not called parallel, because parallel rays would never share an endpoint or lie on one line.",
        "zh": "有公共端点且合成一条直线的两条射线叫做互为反向射线（对射线）。它们不叫平行射线，因为平行射线不会共端点也不会在同一直线上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Segments are congruent when they have equal ___.",
        "zh": "当两条线段的 ___ 相等时，它们是全等的。"
      },
      "choices": [
        "length",
        "slope",
        "midpoints",
        "direction"
      ],
      "answer": 0,
      "explanation": {
        "en": "Congruent segments have equal length. Slope or direction can differ; a vertical and a horizontal segment of the same length are still congruent.",
        "zh": "全等线段具有相等的长度。斜率或方向可以不同；同长度的竖直线段与水平线段仍然是全等的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many points do two distinct intersecting lines share?",
        "zh": "两条相交的不同直线有多少个公共点？"
      },
      "choices": [
        "0",
        "exactly 1",
        "exactly 2",
        "infinitely many"
      ],
      "answer": 1,
      "explanation": {
        "en": "Two distinct lines can meet in at most one point, so intersecting lines share exactly one. Sharing infinitely many points would mean they are the same line, not two distinct lines.",
        "zh": "两条不同直线最多相交于一点，故相交直线恰有一个公共点。若有无数个公共点则说明它们是同一条直线，而非两条不同直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about a line segment is TRUE?",
        "zh": "关于线段，下列哪种说法是正确的？"
      },
      "choices": [
        "It extends forever in both directions.",
        "It has exactly one endpoint.",
        "It has two endpoints and a finite length.",
        "It has no endpoints."
      ],
      "answer": 2,
      "explanation": {
        "en": "A segment has two endpoints and a measurable, finite length. Extending forever in both directions describes a line, and having one endpoint describes a ray.",
        "zh": "线段有两个端点和可度量的有限长度。向两端无限延伸描述的是直线，只有一个端点描述的是射线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $B$ lies on $\\overline{AC}$ with $AB = 3x$, $BC = 2x$, and $AC = 25$. What is $x$?",
        "zh": "点 $B$ 在 $\\overline{AC}$ 上，且 $AB = 3x$，$BC = 2x$，$AC = 25$。求 $x$。"
      },
      "choices": [
        "10",
        "12.5",
        "25",
        "5"
      ],
      "answer": 3,
      "explanation": {
        "en": "By segment addition $3x + 2x = 25$, so $5x = 25$ and $x = 5$. Dividing $25$ by $2$ to get $12.5$ ignores that both parts together, $5x$, equal the whole.",
        "zh": "由线段加法 $3x + 2x = 25$，即 $5x = 25$，所以 $x = 5$。把 $25$ 除以 $2$ 得 $12.5$ 忽略了两部分之和 $5x$ 才等于整体。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $Q$ is between $P$ and $R$. If $PQ = 7$ and $QR = 15$, find $PR$.",
        "zh": "点 $Q$ 在 $P$ 与 $R$ 之间。若 $PQ = 7$，$QR = 15$，求 $PR$。"
      },
      "answer": "22",
      "accept": [
        "22.0",
        "+22"
      ],
      "explanation": {
        "en": "By the Segment Addition Postulate, $PR = PQ + QR = 7 + 15 = 22$. Do not subtract; the outer points bound the whole segment.",
        "zh": "根据线段加法公理，$PR = PQ + QR = 7 + 15 = 22$。不要相减；外侧两点界定的是整条线段。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $N$ is between $M$ and $O$. If $MO = 31$ and $MN = 18$, find $NO$.",
        "zh": "点 $N$ 在 $M$ 与 $O$ 之间。若 $MO = 31$，$MN = 18$，求 $NO$。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "Since $MN + NO = MO$, we get $NO = 31 - 18 = 13$. Here the whole is known, so subtract the given part.",
        "zh": "由于 $MN + NO = MO$，所以 $NO = 31 - 18 = 13$。这里已知整体，因此要减去已知的那一部分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many points are needed to determine a unique plane (no three collinear)?",
        "zh": "确定唯一一个平面（无三点共线）至少需要多少个点？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "three",
        "三",
        "3个",
        "3个点",
        "three points"
      ],
      "explanation": {
        "en": "Three non-collinear points determine exactly one plane. Two points only fix a line, which infinitely many planes can contain.",
        "zh": "三个不共线的点确定唯一一个平面。两个点只能确定一条直线，而无数个平面都能包含这条直线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $B$ is between $A$ and $C$ on a line. $AB = 4x$, $BC = 9$, and $AC = 29$. Find $x$.",
        "zh": "点 $B$ 在直线上位于 $A$ 与 $C$ 之间。$AB = 4x$，$BC = 9$，$AC = 29$。求 $x$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Segment addition gives $4x + 9 = 29$, so $4x = 20$ and $x = 5$. A common slip is forgetting to subtract the $9$ before dividing.",
        "zh": "由线段加法 $4x + 9 = 29$，得 $4x = 20$，所以 $x = 5$。常见错误是在除之前忘记先减去 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$M$ is the midpoint of $\\overline{AB}$. If $AM = 6.5$, find $AB$.",
        "zh": "$M$ 是 $\\overline{AB}$ 的中点。若 $AM = 6.5$，求 $AB$。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "13/1",
        "+13"
      ],
      "explanation": {
        "en": "A midpoint splits the segment into two equal halves, so $AB = 2 \\times AM = 2 \\times 6.5 = 13$. Using $AM$ alone as the answer forgets the second half.",
        "zh": "中点把线段分成相等的两半，所以 $AB = 2 \\times AM = 2 \\times 6.5 = 13$。只用 $AM$ 作答忽略了另一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Points $A$, $B$, and $C$ are collinear with $B$ between $A$ and $C$. $AB = 2x + 1$, $BC = x + 4$, and $AC = 20$. Find $x$.",
        "zh": "点 $A$、$B$、$C$ 共线，$B$ 在 $A$ 与 $C$ 之间。$AB = 2x + 1$，$BC = x + 4$，$AC = 20$。求 $x$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "By segment addition $(2x + 1) + (x + 4) = 20$, so $3x + 5 = 20$, giving $3x = 15$ and $x = 5$. Combine like terms before solving.",
        "zh": "由线段加法 $(2x + 1) + (x + 4) = 20$，即 $3x + 5 = 20$，得 $3x = 15$，$x = 5$。求解前先合并同类项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A segment from $A(1)$ to $B(9)$ lies on a number line. What is its length $AB$?",
        "zh": "数轴上有一条从 $A(1)$ 到 $B(9)$ 的线段。它的长度 $AB$ 是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "On a number line the length is the absolute difference: $|9 - 1| = 8$. Adding the coordinates instead of subtracting gives $10$, which is not a distance.",
        "zh": "在数轴上长度为坐标之差的绝对值：$|9 - 1| = 8$。把坐标相加而不是相减会得到 $10$，那不是距离。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the geometry term for points that all lie in the same plane? (one word)",
        "zh": "所有点都位于同一平面上，这在几何中叫什么？（一个词）"
      },
      "answer": "coplanar",
      "accept": [
        "Coplanar",
        "COPLANAR",
        "共面",
        "共面的",
        "coplanar points"
      ],
      "explanation": {
        "en": "Points in the same plane are coplanar. Do not confuse this with collinear, which requires the points to share a single line.",
        "zh": "在同一平面上的点是共面的（coplanar）。不要与共线（collinear）混淆，共线要求这些点在同一条直线上。"
      }
    }
  ],
  "basics-of-geometry/angles-and-angle-relationships": [
    {
      "type": "mc",
      "question": {
        "en": "An angle that measures exactly $90^{\\circ}$ is called a ___ angle.",
        "zh": "恰好为 $90^{\\circ}$ 的角叫做 ___ 角。"
      },
      "choices": [
        "right",
        "acute",
        "obtuse",
        "straight"
      ],
      "answer": 0,
      "explanation": {
        "en": "A right angle measures exactly $90^{\\circ}$. An acute angle is less than $90^{\\circ}$, so it cannot describe a square corner.",
        "zh": "直角恰好为 $90^{\\circ}$。锐角小于 $90^{\\circ}$，无法描述一个方正的直角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An angle measuring $140^{\\circ}$ is classified as ___.",
        "zh": "一个 $140^{\\circ}$ 的角属于 ___。"
      },
      "choices": [
        "acute",
        "obtuse",
        "right",
        "straight"
      ],
      "answer": 1,
      "explanation": {
        "en": "An obtuse angle is greater than $90^{\\circ}$ but less than $180^{\\circ}$, and $140^{\\circ}$ fits. Calling it acute confuses greater-than-$90$ with less-than-$90$.",
        "zh": "钝角大于 $90^{\\circ}$ 且小于 $180^{\\circ}$，$140^{\\circ}$ 正好符合。称其为锐角是把大于 $90$ 与小于 $90$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two angles are complementary. If one measures $35^{\\circ}$, what is the other?",
        "zh": "两个角互为余角。若其中一个为 $35^{\\circ}$，另一个是多少？"
      },
      "choices": [
        "$145^{\\circ}$",
        "$65^{\\circ}$",
        "$55^{\\circ}$",
        "$35^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Complementary angles sum to $90^{\\circ}$, so the other is $90 - 35 = 55^{\\circ}$. Subtracting from $180$ instead gives $145^{\\circ}$, which is the supplementary value, not complementary.",
        "zh": "互余的两角之和为 $90^{\\circ}$，所以另一个是 $90 - 35 = 55^{\\circ}$。若从 $180$ 中减去会得到 $145^{\\circ}$，那是补角而非余角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two angles are supplementary. If one measures $110^{\\circ}$, what is the other?",
        "zh": "两个角互为补角。若其中一个为 $110^{\\circ}$，另一个是多少？"
      },
      "choices": [
        "$250^{\\circ}$",
        "$20^{\\circ}$",
        "$110^{\\circ}$",
        "$70^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Supplementary angles sum to $180^{\\circ}$, so the other is $180 - 110 = 70^{\\circ}$. Using $90$ instead of $180$ gives a negative result, showing the complement rule was applied by mistake.",
        "zh": "互补的两角之和为 $180^{\\circ}$，所以另一个是 $180 - 110 = 70^{\\circ}$。若用 $90$ 代替 $180$ 会得到负数，说明误用了余角规则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ray $\\overrightarrow{BD}$ is in the interior of $\\angle ABC$. If $\\angle ABD = 25^{\\circ}$ and $\\angle DBC = 40^{\\circ}$, what is $\\angle ABC$?",
        "zh": "射线 $\\overrightarrow{BD}$ 在 $\\angle ABC$ 内部。若 $\\angle ABD = 25^{\\circ}$，$\\angle DBC = 40^{\\circ}$，则 $\\angle ABC$ 为多少？"
      },
      "choices": [
        "$65^{\\circ}$",
        "$32.5^{\\circ}$",
        "$15^{\\circ}$",
        "$130^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the Angle Addition Postulate, $\\angle ABC = 25 + 40 = 65^{\\circ}$. Subtracting gives $15^{\\circ}$, which wrongly treats the whole angle as a difference of its parts.",
        "zh": "根据角加法公理，$\\angle ABC = 25 + 40 = 65^{\\circ}$。相减会得到 $15^{\\circ}$，那错误地把整个角当成两部分之差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines cross, forming four angles. The pair of non-adjacent (opposite) angles are called ___.",
        "zh": "两条直线相交形成四个角。互不相邻（相对）的一对角叫做 ___。"
      },
      "choices": [
        "linear pair",
        "vertical angles",
        "complementary angles",
        "adjacent angles"
      ],
      "answer": 1,
      "explanation": {
        "en": "Opposite angles formed by two intersecting lines are vertical angles, and they are always congruent. A linear pair is instead adjacent and lies along a straight line.",
        "zh": "两条相交直线所成的相对角是对顶角，它们总是相等的。而线性对（邻补角）是相邻的，并沿一条直线排列。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two angles form a linear pair. If one measures $x$, the two angles always sum to ___.",
        "zh": "两个角构成一个线性对（邻补角）。若其中一个为 $x$，则两角之和总为 ___。"
      },
      "choices": [
        "$90^{\\circ}$",
        "$360^{\\circ}$",
        "$180^{\\circ}$",
        "$45^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A linear pair forms a straight line, so the two angles are supplementary and add to $180^{\\circ}$. Confusing this with complementary angles would give $90^{\\circ}$.",
        "zh": "线性对沿一条直线排列，因此两角互补，和为 $180^{\\circ}$。若与余角混淆则会得到 $90^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best describes two adjacent angles?",
        "zh": "下列哪项最能描述相邻的两个角？"
      },
      "choices": [
        "They add up to $90^{\\circ}$.",
        "They are always on opposite sides of two intersecting lines.",
        "They are always congruent.",
        "They share a common vertex and side but no interior points."
      ],
      "answer": 3,
      "explanation": {
        "en": "Adjacent angles share a vertex and a common side while their interiors do not overlap. Being congruent or summing to $90^{\\circ}$ is not required by adjacency alone.",
        "zh": "相邻角共用一个顶点和一条公共边，且内部不重叠。仅凭相邻并不要求它们全等或和为 $90^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Vertical angles are always ___.",
        "zh": "对顶角总是 ___。"
      },
      "choices": [
        "congruent",
        "supplementary",
        "complementary",
        "right angles"
      ],
      "answer": 0,
      "explanation": {
        "en": "Vertical angles are always congruent (equal in measure). They are not necessarily supplementary; that describes the adjacent linear-pair angles beside them.",
        "zh": "对顶角总是全等（度数相等）。它们不一定互补；互补描述的是旁边构成线性对的相邻角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two supplementary angles are equal to each other. What is the measure of each?",
        "zh": "两个互补的角彼此相等。每个角的度数是多少？"
      },
      "choices": [
        "$45^{\\circ}$",
        "$90^{\\circ}$",
        "$180^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "If the two equal angles sum to $180^{\\circ}$, each is $180 \\div 2 = 90^{\\circ}$. Splitting $90$ into two would give $45^{\\circ}$, which mistakenly uses the complementary total.",
        "zh": "若两个相等的角之和为 $180^{\\circ}$，则每个为 $180 \\div 2 = 90^{\\circ}$。把 $90$ 分成两份会得到 $45^{\\circ}$，那误用了余角的总和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\angle 1$ and $\\angle 2$ are vertical angles. If $\\angle 1 = (3x)^{\\circ}$ and $\\angle 2 = (x + 40)^{\\circ}$, find $x$.",
        "zh": "$\\angle 1$ 与 $\\angle 2$ 是对顶角。若 $\\angle 1 = (3x)^{\\circ}$，$\\angle 2 = (x + 40)^{\\circ}$，求 $x$。"
      },
      "choices": [
        "10",
        "30",
        "20",
        "60"
      ],
      "answer": 2,
      "explanation": {
        "en": "Vertical angles are equal, so $3x = x + 40$, giving $2x = 40$ and $x = 20$. Setting the sum to $180$ instead would wrongly treat them as supplementary.",
        "zh": "对顶角相等，故 $3x = x + 40$，得 $2x = 40$，$x = 20$。若令两者之和为 $180$ 则错误地把它们当成互补角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An angle that measures exactly $180^{\\circ}$ is called a ___ angle.",
        "zh": "恰好为 $180^{\\circ}$ 的角叫做 ___ 角。"
      },
      "choices": [
        "reflex",
        "full",
        "obtuse",
        "straight"
      ],
      "answer": 3,
      "explanation": {
        "en": "A straight angle measures exactly $180^{\\circ}$ and forms a straight line. A reflex angle is greater than $180^{\\circ}$, so it does not fit.",
        "zh": "平角恰好为 $180^{\\circ}$，构成一条直线。优角（reflex angle）大于 $180^{\\circ}$，因此不符合。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the complement of a $28^{\\circ}$ angle (in degrees).",
        "zh": "求一个 $28^{\\circ}$ 角的余角（以度为单位）。"
      },
      "answer": "62",
      "accept": [
        "62.0",
        "62 degrees",
        "62°",
        "+62"
      ],
      "explanation": {
        "en": "Complementary angles sum to $90^{\\circ}$, so the complement is $90 - 28 = 62^{\\circ}$. Subtracting from $180$ would give the supplement instead.",
        "zh": "互余的两角之和为 $90^{\\circ}$，所以余角为 $90 - 28 = 62^{\\circ}$。从 $180$ 中减去得到的是补角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the supplement of a $73^{\\circ}$ angle (in degrees).",
        "zh": "求一个 $73^{\\circ}$ 角的补角（以度为单位）。"
      },
      "answer": "107",
      "accept": [
        "107.0",
        "107 degrees",
        "107°",
        "+107"
      ],
      "explanation": {
        "en": "Supplementary angles sum to $180^{\\circ}$, so the supplement is $180 - 73 = 107^{\\circ}$. Using $90$ instead of $180$ applies the complement rule by mistake.",
        "zh": "互补的两角之和为 $180^{\\circ}$，所以补角为 $180 - 73 = 107^{\\circ}$。若用 $90$ 代替 $180$ 则误用了余角规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Ray $\\overrightarrow{QS}$ is interior to $\\angle PQR$. If $\\angle PQS = 47^{\\circ}$ and $\\angle PQR = 120^{\\circ}$, find $\\angle SQR$ (in degrees).",
        "zh": "射线 $\\overrightarrow{QS}$ 在 $\\angle PQR$ 内部。若 $\\angle PQS = 47^{\\circ}$，$\\angle PQR = 120^{\\circ}$，求 $\\angle SQR$（以度为单位）。"
      },
      "answer": "73",
      "accept": [
        "73.0",
        "73 degrees",
        "73°",
        "+73"
      ],
      "explanation": {
        "en": "By the Angle Addition Postulate, $\\angle SQR = \\angle PQR - \\angle PQS = 120 - 47 = 73^{\\circ}$. Adding instead of subtracting ignores that $\\angle PQR$ is the whole angle.",
        "zh": "根据角加法公理，$\\angle SQR = \\angle PQR - \\angle PQS = 120 - 47 = 73^{\\circ}$。相加而非相减忽略了 $\\angle PQR$ 是整个角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two angles form a linear pair. If one is $125^{\\circ}$, what is the other (in degrees)?",
        "zh": "两个角构成一个线性对。若其中一个为 $125^{\\circ}$，另一个是多少（以度为单位）？"
      },
      "answer": "55",
      "accept": [
        "55.0",
        "55 degrees",
        "55°",
        "+55"
      ],
      "explanation": {
        "en": "A linear pair is supplementary, so the other angle is $180 - 125 = 55^{\\circ}$. Treating them as complementary would give a negative result.",
        "zh": "线性对互补，所以另一个角为 $180 - 125 = 55^{\\circ}$。若当作互余则会得到负数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An angle's supplement is three times the angle. Find the angle (in degrees).",
        "zh": "一个角的补角是这个角的三倍。求这个角（以度为单位）。"
      },
      "answer": "45",
      "accept": [
        "45.0",
        "45 degrees",
        "45°",
        "+45"
      ],
      "explanation": {
        "en": "Let the angle be $x$; then $x + 3x = 180$, so $4x = 180$ and $x = 45^{\\circ}$. Forgetting that the angle plus its supplement equals $180$ leads to the wrong equation.",
        "zh": "设这个角为 $x$，则 $x + 3x = 180$，即 $4x = 180$，$x = 45^{\\circ}$。若忘记角与其补角之和为 $180$ 就会列错方程。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$\\angle A$ and $\\angle B$ are complementary. If $\\angle A = (2x)^{\\circ}$ and $\\angle B = (x + 15)^{\\circ}$, find $x$.",
        "zh": "$\\angle A$ 与 $\\angle B$ 互为余角。若 $\\angle A = (2x)^{\\circ}$，$\\angle B = (x + 15)^{\\circ}$，求 $x$。"
      },
      "answer": "25",
      "accept": [
        "25.0",
        "+25"
      ],
      "explanation": {
        "en": "Complementary means $2x + (x + 15) = 90$, so $3x + 15 = 90$, giving $3x = 75$ and $x = 25$. Using $180$ instead of $90$ applies the supplement rule by mistake.",
        "zh": "互余表示 $2x + (x + 15) = 90$，即 $3x + 15 = 90$，得 $3x = 75$，$x = 25$。若用 $180$ 代替 $90$ 则误用了补角规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the term for the pair of opposite, congruent angles formed by two intersecting lines? (one word or phrase)",
        "zh": "两条相交直线所形成的一对相对且相等的角叫什么？（一个词或短语）"
      },
      "answer": "vertical angles",
      "accept": [
        "vertical",
        "Vertical angles",
        "vertical angle",
        "对顶角",
        "对顶角的",
        "对顶"
      ],
      "explanation": {
        "en": "These are vertical angles, always congruent. They should not be called a linear pair, which is instead adjacent and supplementary.",
        "zh": "这些是对顶角，总是相等。不应称其为线性对（邻补角），后者是相邻且互补的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "One angle of a linear pair is $x$ and the other is $2x$. Find $x$ (in degrees).",
        "zh": "一个线性对中，一个角为 $x$，另一个为 $2x$。求 $x$（以度为单位）。"
      },
      "answer": "60",
      "accept": [
        "60.0",
        "60 degrees",
        "60°",
        "+60"
      ],
      "explanation": {
        "en": "A linear pair is supplementary, so $x + 2x = 180$, giving $3x = 180$ and $x = 60^{\\circ}$. Using $90$ as the total would apply the complementary rule instead.",
        "zh": "线性对互补，故 $x + 2x = 180$，即 $3x = 180$，$x = 60^{\\circ}$。若把总和当作 $90$ 则用成了余角规则。"
      }
    }
  ],
  "matrices-and-scalars/matrices-and-scalars": [
    {
      "type": "mc",
      "question": {
        "en": "The matrix $\\begin{bmatrix}2 & -1 & 5 & 0\\\\ 3 & 6 & 1 & 4\\\\ 7 & 8 & 2 & 9\\end{bmatrix}$ has 3 rows and 4 columns. What are its dimensions?",
        "zh": "矩阵 $\\begin{bmatrix}2 & -1 & 5 & 0\\\\ 3 & 6 & 1 & 4\\\\ 7 & 8 & 2 & 9\\end{bmatrix}$ 有 3 行 4 列。它的维数是多少？"
      },
      "choices": [
        "$3 \\times 4$",
        "$4 \\times 3$",
        "$7$",
        "$12$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Dimensions are always written rows × columns, so 3 rows and 4 columns give $3 \\times 4$. A common error is reversing the order to columns × rows, or reporting the total count of entries (12) instead of the dimensions.",
        "zh": "维数总是写成 行 × 列，所以 3 行 4 列就是 $3 \\times 4$。常见错误是把顺序颠倒成 列 × 行，或者报出元素总数（12）而不是维数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two matrices can be added only when they have the same dimensions. Which sum is defined?",
        "zh": "只有当两个矩阵维数相同时才能相加。下列哪个和是有定义的？"
      },
      "choices": [
        "$A_{2\\times3} + B_{3\\times2}$",
        "$A_{2\\times3} + B_{2\\times3}$",
        "$A_{2\\times2} + B_{3\\times3}$",
        "$A_{1\\times3} + B_{3\\times1}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Matrix addition requires identical dimensions, and only the pair that is $2\\times3$ and $2\\times3$ matches exactly. The tempting mistake is thinking it is enough for the two matrices to hold the same total number of entries — matching entry counts is not enough; the row and column counts must both agree.",
        "zh": "矩阵加法要求维数完全相同，只有都是 $2\\times3$ 的那一对完全吻合。诱人的错误是认为只要两个矩阵元素总数相同就行——元素个数相同并不够，行数和列数都必须一致。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute $\\begin{bmatrix}1 & 2\\\\ 3 & 4\\end{bmatrix} + \\begin{bmatrix}5 & 6\\\\ 7 & 8\\end{bmatrix}$.",
        "zh": "计算 $\\begin{bmatrix}1 & 2\\\\ 3 & 4\\end{bmatrix} + \\begin{bmatrix}5 & 6\\\\ 7 & 8\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}6 & 8\\\\ 10 & 11\\end{bmatrix}$",
        "$\\begin{bmatrix}5 & 12\\\\ 21 & 32\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & 8\\\\ 10 & 12\\end{bmatrix}$",
        "$\\begin{bmatrix}4 & 4\\\\ 4 & 4\\end{bmatrix}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Add corresponding entries: $1+5=6$, $2+6=8$, $3+7=10$, $4+8=12$. One tempting error is multiplying corresponding entries instead of adding; another is subtracting them.",
        "zh": "把对应位置的元素相加：$1+5=6$、$2+6=8$、$3+7=10$、$4+8=12$。一个诱人的错误是把对应元素相乘而不是相加；另一个是相减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute the scalar product $3 \\cdot \\begin{bmatrix}2 & -1\\\\ 0 & 4\\end{bmatrix}$.",
        "zh": "计算数乘 $3 \\cdot \\begin{bmatrix}2 & -1\\\\ 0 & 4\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}6 & -1\\\\ 0 & 4\\end{bmatrix}$",
        "$\\begin{bmatrix}5 & 2\\\\ 3 & 7\\end{bmatrix}$",
        "$\\begin{bmatrix}2 & -3\\\\ 0 & 12\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & -3\\\\ 0 & 12\\end{bmatrix}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A scalar multiplies every entry: $3\\cdot2=6$, $3\\cdot(-1)=-3$, $3\\cdot0=0$, $3\\cdot4=12$. Common mistakes are multiplying only some entries and leaving the rest unchanged, or adding the scalar to each entry instead of multiplying.",
        "zh": "数乘要乘以每一个元素：$3\\cdot2=6$、$3\\cdot(-1)=-3$、$3\\cdot0=0$、$3\\cdot4=12$。常见错误是只乘部分元素而保留其余不变，或者把数加到每个元素上而不是相乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\begin{bmatrix}x & 3\\\\ 1 & y\\end{bmatrix} = \\begin{bmatrix}5 & 3\\\\ 1 & 8\\end{bmatrix}$, what is $x + y$?",
        "zh": "若 $\\begin{bmatrix}x & 3\\\\ 1 & y\\end{bmatrix} = \\begin{bmatrix}5 & 3\\\\ 1 & 8\\end{bmatrix}$，则 $x + y$ 等于多少？"
      },
      "choices": [
        "$13$",
        "$8$",
        "$5$",
        "$40$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Equal matrices have equal corresponding entries, so $x=5$ and $y=8$, giving $x+y=13$. A tempting error is multiplying the two values to get 40 instead of adding, or reporting just one of them.",
        "zh": "相等的矩阵对应元素相等，所以 $x=5$、$y=8$，于是 $x+y=13$。诱人的错误是把两个值相乘得到 40 而不是相加，或者只报出其中一个。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A store organizes its data in a matrix with 4 rows (one per store location) and 3 columns (one per product). How many data entries does the matrix hold in total?",
        "zh": "某商店把数据整理成一个矩阵，有 4 行（每个门店一行）和 3 列（每种产品一列）。这个矩阵总共有多少个数据元素？"
      },
      "choices": [
        "$4$",
        "$12$",
        "$7$",
        "$3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The number of entries equals rows × columns $= 4 \\times 3 = 12$. A common error is adding rows and columns ($4+3=7$) instead of multiplying them.",
        "zh": "元素个数等于 行 × 列 $= 4 \\times 3 = 12$。常见错误是把行数和列数相加（$4+3=7$）而不是相乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute $\\begin{bmatrix}9 & 5\\\\ 4 & 7\\end{bmatrix} - \\begin{bmatrix}3 & 2\\\\ 1 & 6\\end{bmatrix}$.",
        "zh": "计算 $\\begin{bmatrix}9 & 5\\\\ 4 & 7\\end{bmatrix} - \\begin{bmatrix}3 & 2\\\\ 1 & 6\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}12 & 7\\\\ 5 & 13\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & 3\\\\ 3 & -1\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & 3\\\\ 3 & 1\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & 7\\\\ 3 & 1\\end{bmatrix}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Subtract corresponding entries: $9-3=6$, $5-2=3$, $4-1=3$, $7-6=1$. The tempting error is adding the entries instead of subtracting; another is mishandling the last entry as $6-7=-1$ by reversing the order of subtraction.",
        "zh": "把对应元素相减：$9-3=6$、$5-2=3$、$4-1=3$、$7-6=1$。诱人的错误是把元素相加而不是相减；另一个是把最后一个元素颠倒相减顺序算成 $6-7=-1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A price matrix lists every item's cost. During a promotion, every price is exactly doubled. Which single matrix operation produces the new price matrix?",
        "zh": "一个价格矩阵列出了每件商品的价格。促销期间，每个价格都正好翻倍。哪一种矩阵运算能得到新的价格矩阵？"
      },
      "choices": [
        "Square every entry",
        "Add 2 to every entry",
        "Multiply only the first row by 2",
        "Multiply every entry by 2 (scalar multiplication by 2)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Doubling all prices is scalar multiplication by 2, which multiplies every entry by 2 at once. The tempting error is adding 2 to each price, but that raises every item by a flat 2 rather than doubling it.",
        "zh": "把所有价格翻倍就是数乘 2，一次性把每个元素都乘以 2。诱人的错误是给每个价格加 2，但那只是把每件商品统一抬高 2，而不是翻倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two matrices are equal if and only if which condition holds?",
        "zh": "两个矩阵相等，当且仅当满足下列哪个条件？"
      },
      "choices": [
        "They have the same dimensions and all corresponding entries are equal.",
        "Their sums of all entries are equal.",
        "They contain the same total number of entries.",
        "Their first entries are equal."
      ],
      "answer": 0,
      "explanation": {
        "en": "Equality of matrices requires the same dimensions AND every corresponding entry to match. The tempting error is thinking that having the same number of entries (same total count) is enough, but two matrices of different shapes, or with any single differing entry, are not equal.",
        "zh": "矩阵相等要求维数相同，且每个对应元素都相等。诱人的错误是认为元素总数相同就够了，但形状不同、或哪怕只有一个元素不同的两个矩阵都不相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Matrix $A$ has dimensions $3 \\times 2$ and matrix $B$ has dimensions $3 \\times 2$. What are the dimensions of $A + B$?",
        "zh": "矩阵 $A$ 的维数是 $3 \\times 2$，矩阵 $B$ 的维数是 $3 \\times 2$。$A + B$ 的维数是多少？"
      },
      "choices": [
        "$2 \\times 3$",
        "$3 \\times 2$",
        "$3 \\times 3$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A sum of two matrices keeps the same dimensions as the addends, so the result is $3 \\times 2$. The tempting error is swapping the numbers to $2 \\times 3$, or collapsing the dimensions into a single count of entries.",
        "zh": "两个矩阵之和的维数与被加矩阵相同，所以结果是 $3 \\times 2$。诱人的错误是把数字对调成 $2 \\times 3$，或者把维数合并成一个元素总数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute the scalar product $-2 \\cdot \\begin{bmatrix}1 & -4\\\\ 3 & 0\\end{bmatrix}$.",
        "zh": "计算数乘 $-2 \\cdot \\begin{bmatrix}1 & -4\\\\ 3 & 0\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}2 & 8\\\\ 6 & 0\\end{bmatrix}$",
        "$\\begin{bmatrix}-2 & -8\\\\ -6 & 0\\end{bmatrix}$",
        "$\\begin{bmatrix}-2 & 8\\\\ -6 & 0\\end{bmatrix}$",
        "$\\begin{bmatrix}-2 & -4\\\\ 3 & 0\\end{bmatrix}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply every entry by $-2$, tracking signs: $-2\\cdot1=-2$, $-2\\cdot(-4)=8$, $-2\\cdot3=-6$, $-2\\cdot0=0$. The tempting error is a sign slip on the $-4$ entry, writing $-8$ instead of $+8$, since a negative times a negative is positive.",
        "zh": "把每个元素乘以 $-2$，注意符号：$-2\\cdot1=-2$、$-2\\cdot(-4)=8$、$-2\\cdot3=-6$、$-2\\cdot0=0$。诱人的错误是在 $-4$ 那一项上符号出错，写成 $-8$ 而不是 $+8$，因为负负得正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the matrix $A = \\begin{bmatrix}7 & 2 & 5\\\\ 3 & 9 & 1\\end{bmatrix}$, the entry $a_{ij}$ sits in row $i$, column $j$. What is $a_{21}$ (row 2, column 1)?",
        "zh": "对于矩阵 $A = \\begin{bmatrix}7 & 2 & 5\\\\ 3 & 9 & 1\\end{bmatrix}$，元素 $a_{ij}$ 位于第 $i$ 行第 $j$ 列。$a_{21}$（第 2 行第 1 列）是多少？"
      },
      "choices": [
        "$2$",
        "$7$",
        "$9$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The subscript reads row first, then column, so $a_{21}$ is the row-2, column-1 entry, which is $3$. The tempting error is reversing the subscript to read column-2, row-1, which would wrongly give $2$.",
        "zh": "下标先读行、再读列，所以 $a_{21}$ 是第 2 行第 1 列的元素，即 $3$。诱人的错误是把下标颠倒成第 1 行第 2 列，那样会错误地得到 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $A = \\begin{bmatrix}2 & -1 & 4\\\\ 0 & 3 & 5\\end{bmatrix}$, what is the entry in row 2, column 3?",
        "zh": "对于 $A = \\begin{bmatrix}2 & -1 & 4\\\\ 0 & 3 & 5\\end{bmatrix}$，第 2 行第 3 列的元素是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5.00",
        "+5"
      ],
      "explanation": {
        "en": "Read down to row 2, then across to column 3: the entry is $5$. A common slip is reading column first (column 2, row 3) — but this matrix has no row 3, and the subscript order is row then column.",
        "zh": "先下到第 2 行，再横到第 3 列：元素是 $5$。常见的失误是先读列（第 2 列第 3 行）——但这个矩阵没有第 3 行，而且下标顺序是先行后列。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\begin{bmatrix}4 & 7\\\\ 2 & 9\\end{bmatrix} + \\begin{bmatrix}1 & 3\\\\ 5 & 0\\end{bmatrix}$, what number appears in row 1, column 2 of the sum?",
        "zh": "在 $\\begin{bmatrix}4 & 7\\\\ 2 & 9\\end{bmatrix} + \\begin{bmatrix}1 & 3\\\\ 5 & 0\\end{bmatrix}$ 中，和矩阵第 1 行第 2 列的数是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10.00",
        "+10"
      ],
      "explanation": {
        "en": "Add the corresponding row-1, column-2 entries: $7 + 3 = 10$. A common error is combining entries from mismatched positions rather than the same position in each matrix.",
        "zh": "把对应的第 1 行第 2 列元素相加：$7 + 3 = 10$。常见错误是把不对应位置的元素相加，而不是取每个矩阵中相同位置的元素。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the scalar product $4 \\cdot \\begin{bmatrix}3 & -2\\\\ 1 & 6\\end{bmatrix}$, what is the entry in row 2, column 2?",
        "zh": "在数乘 $4 \\cdot \\begin{bmatrix}3 & -2\\\\ 1 & 6\\end{bmatrix}$ 中，第 2 行第 2 列的元素是多少？"
      },
      "answer": "24",
      "accept": [
        "24.0",
        "24.00",
        "+24"
      ],
      "explanation": {
        "en": "Scalar multiplication multiplies that entry by 4: $4 \\times 6 = 24$. A common error is adding the scalar instead ($6 + 4 = 10$), but the operation is multiplication.",
        "zh": "数乘把该元素乘以 4：$4 \\times 6 = 24$。常见错误是改成加上这个数（$6 + 4 = 10$），但运算是乘法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\begin{bmatrix}x-1 & 4\\\\ 2 & 7\\end{bmatrix} = \\begin{bmatrix}6 & 4\\\\ 2 & 7\\end{bmatrix}$, what is $x$?",
        "zh": "若 $\\begin{bmatrix}x-1 & 4\\\\ 2 & 7\\end{bmatrix} = \\begin{bmatrix}6 & 4\\\\ 2 & 7\\end{bmatrix}$，则 $x$ 等于多少？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "7.00",
        "+7"
      ],
      "explanation": {
        "en": "Equal matrices have equal corresponding entries, so $x - 1 = 6$, giving $x = 7$. A common error is setting $x = 6$ by reading off the target entry directly and forgetting to undo the $-1$.",
        "zh": "相等的矩阵对应元素相等，所以 $x - 1 = 6$，得 $x = 7$。常见错误是直接读出目标元素令 $x = 6$，忘了把 $-1$ 还原。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\begin{bmatrix}10 & 8\\end{bmatrix} - \\begin{bmatrix}3 & 15\\end{bmatrix}$, what number appears in row 1, column 2 of the difference?",
        "zh": "在 $\\begin{bmatrix}10 & 8\\end{bmatrix} - \\begin{bmatrix}3 & 15\\end{bmatrix}$ 中，差矩阵第 1 行第 2 列的数是多少？"
      },
      "answer": "-7",
      "accept": [
        "-7.0",
        "-7.00",
        "−7"
      ],
      "explanation": {
        "en": "Subtract in order: $8 - 15 = -7$. A common error is reversing the subtraction to $15 - 8 = 7$ and dropping the negative sign; the first matrix's entry must come first.",
        "zh": "按顺序相减：$8 - 15 = -7$。常见错误是把减法颠倒成 $15 - 8 = 7$ 而丢掉负号；必须让第一个矩阵的元素在前。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A gradebook is stored as a matrix with 25 students (rows) and 6 assignments (columns). How many entries does the gradebook hold in total?",
        "zh": "一个成绩册被存成矩阵，有 25 名学生（行）和 6 项作业（列）。这个成绩册总共有多少个元素？"
      },
      "answer": "150",
      "accept": [
        "150.0",
        "150.00",
        "+150"
      ],
      "explanation": {
        "en": "The total number of entries is rows × columns $= 25 \\times 6 = 150$. A common error is adding the counts ($25 + 6 = 31$) instead of multiplying them.",
        "zh": "元素总数是 行 × 列 $= 25 \\times 6 = 150$。常见错误是把数量相加（$25 + 6 = 31$）而不是相乘。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A recipe's ingredient amounts are stored in a matrix. To triple the recipe, the whole matrix is multiplied by 3. If one entry was $2.5$ cups, what does it become?",
        "zh": "一份食谱的配料用量存在一个矩阵里。要把食谱做成三倍，就把整个矩阵乘以 3。若某个元素原本是 $2.5$ 杯，它会变成多少？"
      },
      "answer": "7.5",
      "accept": [
        "7.50",
        "15/2",
        "7.5 cups",
        "7.50 cups"
      ],
      "explanation": {
        "en": "Scalar multiplication by 3 multiplies the entry: $3 \\times 2.5 = 7.5$. A common error is adding 3 ($2.5 + 3 = 5.5$), but tripling means multiplying every amount by 3.",
        "zh": "数乘 3 把该元素乘以 3：$3 \\times 2.5 = 7.5$。常见错误是加上 3（$2.5 + 3 = 5.5$），但三倍意味着把每个用量乘以 3。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Matrix $A$ is $4 \\times 7$ and matrix $B$ is $4 \\times 7$. State the dimensions of $A + B$ in the form rows×columns (for example, 3×5).",
        "zh": "矩阵 $A$ 是 $4 \\times 7$，矩阵 $B$ 是 $4 \\times 7$。请以 行×列 的形式（例如 3×5）写出 $A + B$ 的维数。"
      },
      "answer": "4×7",
      "accept": [
        "4x7",
        "4X7",
        "4 × 7",
        "4 x 7",
        "4,7",
        "4 by 7"
      ],
      "explanation": {
        "en": "Adding matrices preserves dimensions, so the sum is $4 \\times 7$. A common error is swapping the numbers to $7 \\times 4$; the row count stays first and the column count second.",
        "zh": "矩阵相加保持维数不变，所以和是 $4 \\times 7$。常见错误是把数字对调成 $7 \\times 4$；行数在前、列数在后。"
      }
    }
  ]
};
