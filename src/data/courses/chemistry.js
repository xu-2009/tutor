export default {
  "id": "chemistry",
  "title": "Honors Chemistry",
  "titleZh": "荣誉化学",
  "subject": "science",
  "level": "Honors",
  "description": "A complete first-year honors chemistry course: matter and measurement, atomic structure, the periodic table, bonding, nomenclature and reactions, stoichiometry, gases, solutions, acids and bases, thermochemistry, kinetics and equilibrium, and nuclear chemistry.",
  "descriptionZh": "完整的一年级荣誉化学课程：物质与测量、原子结构、元素周期表、化学键、命名与化学反应、化学计量、气体、溶液、酸碱、热化学、动力学与平衡，以及核化学。",
  "units": [
    {
      "id": "matter-and-measurement",
      "title": "Unit 1: Matter and Measurement",
      "titleZh": "第一单元：物质与测量",
      "lessons": [
        {
          "id": "classifying-matter",
          "title": "States and Classification of Matter",
          "titleZh": "物质的状态与分类",
          "content": [
            {
              "type": "h2",
              "en": "What Is Matter?",
              "zh": "什么是物质？"
            },
            {
              "type": "p",
              "en": "Matter is anything that has mass and takes up space. Chemistry is the study of matter and the changes it undergoes. Before we can study those changes, we need a vocabulary for describing and classifying matter itself.",
              "zh": "物质是任何具有质量并占据空间的东西。化学研究的就是物质及其变化。在研究这些变化之前，我们需要一套描述和分类物质的词汇。"
            },
            {
              "type": "h3",
              "en": "The Three Common States",
              "zh": "三种常见状态"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Solid: definite shape and definite volume; particles are tightly packed and only vibrate in place.",
                  "zh": "固态：有固定形状和固定体积；粒子紧密排列，只能在原位振动。"
                },
                {
                  "en": "Liquid: definite volume but no definite shape; particles slide past one another.",
                  "zh": "液态：有固定体积但没有固定形状；粒子可以相互滑动。"
                },
                {
                  "en": "Gas: no definite shape or volume; particles are far apart and move rapidly, filling any container.",
                  "zh": "气态：没有固定形状和体积；粒子间距很大且高速运动，会充满整个容器。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Classifying Matter",
              "zh": "物质的分类"
            },
            {
              "type": "p",
              "en": "All matter is either a pure substance or a mixture. A pure substance has a fixed composition: it is either an element (one kind of atom, like $\\text{Cu}$ or $\\text{O}_2$) or a compound (two or more elements chemically bonded in a fixed ratio, like $\\text{H}_2\\text{O}$ or $\\text{NaCl}$).",
              "zh": "所有物质要么是纯净物，要么是混合物。纯净物具有固定的组成：它要么是单质（只含一种原子，如 $\\text{Cu}$ 或 $\\text{O}_2$），要么是化合物（两种或多种元素以固定比例化学结合，如 $\\text{H}_2\\text{O}$ 或 $\\text{NaCl}$）。"
            },
            {
              "type": "p",
              "en": "A mixture is a physical combination of two or more substances. A homogeneous mixture (a solution) looks uniform throughout, like salt water or air. A heterogeneous mixture has visibly different parts, like salad or granite. Mixtures can be separated by physical means such as filtration, distillation, or evaporation.",
              "zh": "混合物是两种或多种物质的物理组合。均匀混合物（溶液）各处看起来一致，如盐水或空气。不均匀混合物有肉眼可辨的不同部分，如沙拉或花岗岩。混合物可以通过过滤、蒸馏、蒸发等物理方法分离。"
            },
            {
              "type": "note",
              "en": "Common mistake: a compound is NOT a mixture. In a compound the elements are chemically bonded in a fixed ratio and can only be separated by a chemical change. In a mixture the components keep their own properties and any ratio is possible.",
              "zh": "常见错误：化合物不是混合物。化合物中的元素以固定比例化学结合，只能通过化学变化分离；而混合物中各组分保留自身性质，比例可以任意。"
            },
            {
              "type": "h3",
              "en": "Physical vs. Chemical Changes",
              "zh": "物理变化与化学变化"
            },
            {
              "type": "p",
              "en": "A physical change alters the form of a substance without changing its identity (melting ice, dissolving sugar). A chemical change produces one or more new substances (burning wood, rusting iron). Evidence of chemical change includes color change, gas production, precipitate formation, and energy released or absorbed.",
              "zh": "物理变化只改变物质的形态而不改变其本质（冰融化、糖溶解）。化学变化会生成一种或多种新物质（木头燃烧、铁生锈）。化学变化的证据包括颜色变化、产生气体、生成沉淀以及能量的释放或吸收。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Classifying Samples",
                "zh": "例题 1：给样品分类"
              },
              "problem": {
                "en": "Classify each as element, compound, homogeneous mixture, or heterogeneous mixture: (a) carbon dioxide, (b) brass (a uniform blend of copper and zinc), (c) neon gas, (d) chicken noodle soup.",
                "zh": "将下列各项分类为单质、化合物、均匀混合物或不均匀混合物：(a) 二氧化碳，(b) 黄铜（铜和锌的均匀合金），(c) 氖气，(d) 鸡肉面条汤。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Carbon dioxide, $\\text{CO}_2$, contains two elements chemically bonded in a fixed ratio, so it is a compound.",
                  "zh": "(a) 二氧化碳 $\\text{CO}_2$ 含有两种以固定比例化学结合的元素，所以是化合物。"
                },
                {
                  "type": "p",
                  "en": "(b) Brass is uniform throughout but its Cu : Zn ratio can vary, so it is a homogeneous mixture (a solid solution).",
                  "zh": "(b) 黄铜各处均匀，但铜锌比例可以变化，所以是均匀混合物（固溶体）。"
                },
                {
                  "type": "p",
                  "en": "(c) Neon contains only Ne atoms, so it is an element. (d) Soup has visibly distinct parts, so it is a heterogeneous mixture.",
                  "zh": "(c) 氖气只含 Ne 原子，是单质。(d) 汤有肉眼可辨的不同成分，是不均匀混合物。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Physical or Chemical Change?",
                "zh": "例题 2：物理变化还是化学变化？"
              },
              "problem": {
                "en": "Decide whether each is a physical or chemical change: (a) an antacid tablet fizzes in water, (b) dry ice sublimes into vapor, (c) a silver spoon tarnishes black.",
                "zh": "判断下列变化是物理变化还是化学变化：(a) 抗酸药片在水中冒泡，(b) 干冰升华成气体，(c) 银勺变黑（失去光泽）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Fizzing means a new gas ($\\text{CO}_2$) is being produced — chemical change.",
                  "zh": "(a) 冒泡说明生成了新的气体（$\\text{CO}_2$）——化学变化。"
                },
                {
                  "type": "p",
                  "en": "(b) Sublimation is a state change only; the substance is still $\\text{CO}_2$ — physical change.",
                  "zh": "(b) 升华只是状态改变；物质仍是 $\\text{CO}_2$——物理变化。"
                },
                {
                  "type": "p",
                  "en": "(c) Tarnish is a new substance, silver sulfide ($\\text{Ag}_2\\text{S}$), formed from silver — chemical change.",
                  "zh": "(c) 黑色物质是由银生成的新物质硫化银（$\\text{Ag}_2\\text{S}$）——化学变化。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which state of matter has a definite volume but no definite shape?",
                "zh": "哪种物质状态有固定体积但没有固定形状？"
              },
              "choices": [
                "Solid",
                "Liquid",
                "Gas",
                "Both solid and gas"
              ],
              "answer": 1,
              "explanation": {
                "en": "Liquid particles stay close together (definite volume) but can slide past each other, so a liquid takes the shape of its container.",
                "zh": "液体粒子彼此靠近（体积固定），但可以相互滑动，所以液体会随容器改变形状。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is a pure substance?",
                "zh": "下列哪一项是纯净物？"
              },
              "choices": [
                "Salt water",
                "Air",
                "Distilled water",
                "Granite"
              ],
              "answer": 2,
              "explanation": {
                "en": "Distilled water is the compound $\\text{H}_2\\text{O}$ with a fixed composition. Salt water and air are homogeneous mixtures; granite is heterogeneous.",
                "zh": "蒸馏水是组成固定的化合物 $\\text{H}_2\\text{O}$。盐水和空气是均匀混合物；花岗岩是不均匀混合物。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Dissolving sugar in tea is best described as a…",
                "zh": "把糖溶解在茶里最恰当的描述是……"
              },
              "choices": [
                "chemical change, because the sugar disappears",
                "physical change, because the sugar molecules are unchanged",
                "chemical change, because a solution forms",
                "nuclear change"
              ],
              "answer": 1,
              "explanation": {
                "en": "Dissolving spreads sugar molecules among water molecules but does not change their identity — you could recover the sugar by evaporating the water. That makes it a physical change.",
                "zh": "溶解只是把糖分子分散到水分子之间，并没有改变糖的本质——把水蒸发掉就能重新得到糖，所以是物理变化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which observation is the strongest evidence of a chemical change?",
                "zh": "哪个现象是化学变化最有力的证据？"
              },
              "choices": [
                "A liquid boils when heated",
                "A solid melts into a liquid",
                "Two clear solutions mix and a solid precipitate forms",
                "A gas expands to fill a larger container"
              ],
              "answer": 2,
              "explanation": {
                "en": "A precipitate is a new substance appearing where there was none, which signals a chemical reaction. Boiling, melting, and expansion are all physical changes of state or volume.",
                "zh": "沉淀是原来不存在的新物质，说明发生了化学反应。沸腾、熔化和膨胀都只是状态或体积的物理变化。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform mixture such as salt water is called a ______ mixture. (One word, in English.)",
                "zh": "像盐水这样各处均匀的混合物叫做 ______ 混合物。（填一个英文单词。）"
              },
              "answer": "homogeneous",
              "accept": [
                "homogenous"
              ],
              "explanation": {
                "en": "Homogeneous means \"the same throughout.\" Every sip of salt water has the same composition, unlike a heterogeneous mixture such as salad.",
                "zh": "Homogeneous 意为“各处相同”。盐水的每一口成分都一样，这与沙拉这类不均匀（heterogeneous）混合物不同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Element X combines with oxygen in a fixed 1:2 ratio to form a new substance with completely different properties. The new substance is a(n)…",
                "zh": "元素 X 与氧以固定的 1:2 比例结合，生成一种性质完全不同的新物质。这种新物质是……"
              },
              "choices": [
                "element",
                "compound",
                "homogeneous mixture",
                "heterogeneous mixture"
              ],
              "answer": 1,
              "explanation": {
                "en": "A fixed ratio plus new properties are the two hallmarks of a compound. Mixtures have variable ratios and keep the properties of their components.",
                "zh": "固定的比例加上全新的性质正是化合物的两大特征。混合物比例可变，且各组分保留自身性质。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Iron combines with oxygen and water to form rust. Is this a \"physical\" or \"chemical\" change? (Answer with one word in English.)",
                "zh": "铁与氧气和水结合生成铁锈。这是 physical（物理）还是 chemical（化学）变化？（用一个英文单词作答。）"
              },
              "answer": "chemical",
              "explanation": {
                "en": "Rust (iron oxide) is a new substance with different properties from iron, so a chemical change occurred. You cannot get the shiny iron back by physical means alone.",
                "zh": "铁锈（氧化铁）是与铁性质不同的新物质，所以发生了化学变化。仅靠物理方法无法把发亮的铁还原回来。"
              }
            }
          ]
        },
        {
          "id": "measurement-and-density",
          "title": "Significant Figures, Unit Conversions, and Density",
          "titleZh": "有效数字、单位换算与密度",
          "content": [
            {
              "type": "h2",
              "en": "Measurement and Uncertainty",
              "zh": "测量与不确定度"
            },
            {
              "type": "p",
              "en": "Every measurement carries uncertainty, and significant figures (sig figs) communicate how precise a measurement is. The rules: (1) all nonzero digits are significant; (2) zeros between nonzero digits are significant; (3) leading zeros are never significant; (4) trailing zeros are significant only if the number contains a decimal point. So $0.00450$ has 3 sig figs, and $1200$ has only 2, but $1200.$ has 4.",
              "zh": "每一次测量都带有不确定度，有效数字表达了测量的精确程度。规则：(1) 所有非零数字都是有效数字；(2) 非零数字之间的零是有效的；(3) 前导零永远无效；(4) 末尾的零只有在数中含小数点时才有效。因此 $0.00450$ 有 3 位有效数字，$1200$ 只有 2 位，而 $1200.$ 有 4 位。"
            },
            {
              "type": "h3",
              "en": "Sig Figs in Calculations",
              "zh": "计算中的有效数字"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Multiplication/division: round the result to the fewest sig figs among the inputs.",
                  "zh": "乘除法：结果保留与各输入中有效数字位数最少者相同的位数。"
                },
                {
                  "en": "Addition/subtraction: round the result to the fewest decimal places among the inputs.",
                  "zh": "加减法：结果保留与各输入中小数位数最少者相同的小数位。"
                },
                {
                  "en": "Exact numbers (counted items, defined conversions like 100 cm = 1 m) never limit sig figs.",
                  "zh": "精确数（计数值、定义换算如 100 cm = 1 m）不限制有效数字。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Dimensional Analysis",
              "zh": "量纲分析（单位换算）"
            },
            {
              "type": "p",
              "en": "Dimensional analysis converts units by multiplying by conversion factors — fractions equal to 1, such as $\\frac{1000\\ \\text{m}}{1\\ \\text{km}}$. Arrange each factor so unwanted units cancel. This method is the backbone of nearly every chemistry calculation, so practice it until it is automatic.",
              "zh": "量纲分析通过乘以换算因子来转换单位——换算因子是值为 1 的分数，例如 $\\frac{1000\\ \\text{m}}{1\\ \\text{km}}$。摆放每个因子时要让不需要的单位相消。这种方法是几乎所有化学计算的支柱，要练到熟练为止。"
            },
            {
              "type": "h2",
              "en": "Density",
              "zh": "密度"
            },
            {
              "type": "p",
              "en": "Density is the ratio of mass to volume and is an intensive property — it does not depend on sample size, so it can identify a substance.",
              "zh": "密度是质量与体积之比，是一种强度性质——它与样品大小无关，因此可以用来鉴别物质。"
            },
            {
              "type": "math",
              "tex": "d = \\frac{m}{V}"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting that leading zeros are not significant, and rounding at every intermediate step. Keep extra digits during the calculation and round only the final answer.",
              "zh": "常见错误：忘记前导零不是有效数字，以及在每个中间步骤都四舍五入。计算过程中应多保留几位数字，只在最终答案时取舍。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Unit Conversion with Sig Figs",
                "zh": "例题 1：带有效数字的单位换算"
              },
              "problem": {
                "en": "A sprinter runs $100.0$ m in $12.5$ s. Convert this speed to km/h, reported to the correct number of sig figs.",
                "zh": "一名短跑运动员用 $12.5$ 秒跑完 $100.0$ 米。把这个速度换算成 km/h，并保留正确的有效数字位数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set up conversion factors so meters and seconds cancel:",
                  "zh": "摆放换算因子，使米和秒相消："
                },
                {
                  "type": "math",
                  "tex": "\\frac{100.0\\ \\text{m}}{12.5\\ \\text{s}} \\times \\frac{1\\ \\text{km}}{1000\\ \\text{m}} \\times \\frac{3600\\ \\text{s}}{1\\ \\text{h}} = 28.8\\ \\text{km/h}"
                },
                {
                  "type": "p",
                  "en": "The measurement with the fewest sig figs is $12.5$ s (3 sig figs), so the answer keeps 3 sig figs: $28.8$ km/h. The conversion factors are exact and do not limit sig figs.",
                  "zh": "有效数字最少的测量值是 $12.5$ s（3 位），所以答案保留 3 位有效数字：$28.8$ km/h。换算因子是精确数，不限制有效数字。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Identifying a Metal by Density",
                "zh": "例题 2：用密度鉴别金属"
              },
              "problem": {
                "en": "A metal cube has a mass of $54.0$ g. When placed in a graduated cylinder holding $20.0$ mL of water, the level rises to $40.0$ mL. Find the density and identify the metal (aluminum $2.70$, iron $7.87$, lead $11.3$ g/mL).",
                "zh": "一个金属立方体质量为 $54.0$ g。把它放入盛有 $20.0$ mL 水的量筒后，液面升到 $40.0$ mL。求其密度并鉴别该金属（铝 $2.70$、铁 $7.87$、铅 $11.3$ g/mL）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The volume of the cube equals the water displaced: $V = 40.0 - 20.0 = 20.0$ mL.",
                  "zh": "立方体的体积等于排开水的体积：$V = 40.0 - 20.0 = 20.0$ mL。"
                },
                {
                  "type": "math",
                  "tex": "d = \\frac{m}{V} = \\frac{54.0\\ \\text{g}}{20.0\\ \\text{mL}} = 2.70\\ \\text{g/mL}"
                },
                {
                  "type": "p",
                  "en": "The density matches aluminum. Because density is intensive, this identification works for any size sample.",
                  "zh": "该密度与铝相符。由于密度是强度性质，无论样品大小，这种鉴别方法都成立。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "How many significant figures are in the measurement $0.03060$ kg? (Give a whole number.)",
                "zh": "测量值 $0.03060$ kg 有几位有效数字？（填一个整数。）"
              },
              "answer": "4",
              "explanation": {
                "en": "Leading zeros (0.0…) are not significant. The digits 3, 0, 6, and the trailing 0 after the decimal point are significant: 4 sig figs.",
                "zh": "前导零（0.0…）不是有效数字。数字 3、0、6 以及小数点后的末尾 0 是有效的：共 4 位。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many significant figures should the answer to $4.56 \\times 1.4$ have?",
                "zh": "$4.56 \\times 1.4$ 的结果应保留几位有效数字？"
              },
              "choices": [
                "1",
                "2",
                "3",
                "4"
              ],
              "answer": 1,
              "explanation": {
                "en": "For multiplication, the answer matches the input with the fewest sig figs. $1.4$ has 2 sig figs, so the product $6.384$ rounds to $6.4$.",
                "zh": "乘法中结果与有效数字最少的输入保持一致。$1.4$ 有 2 位有效数字，所以乘积 $6.384$ 应舍为 $6.4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Convert $2.5$ km to centimeters. Give your answer as a number in cm (you may use scientific notation like 2.5e5).",
                "zh": "把 $2.5$ km 换算成厘米。用数字作答，单位为 cm（可用科学计数法，如 2.5e5）。"
              },
              "answer": "250000",
              "accept": [
                "2.5e5",
                "2.5E5",
                "250,000",
                "2.5x10^5"
              ],
              "explanation": {
                "en": "$2.5\\ \\text{km} \\times \\frac{1000\\ \\text{m}}{1\\ \\text{km}} \\times \\frac{100\\ \\text{cm}}{1\\ \\text{m}} = 250{,}000$ cm. Each factor equals 1, so only the units change.",
                "zh": "$2.5\\ \\text{km} \\times \\frac{1000\\ \\text{m}}{1\\ \\text{km}} \\times \\frac{100\\ \\text{cm}}{1\\ \\text{m}} = 250000$ cm。每个换算因子都等于 1，所以只有单位改变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which property could you use to tell two colorless liquids apart without changing them chemically?",
                "zh": "要在不发生化学变化的前提下区分两种无色液体，可以利用哪种性质？"
              },
              "choices": [
                "Mass",
                "Volume",
                "Density",
                "Temperature"
              ],
              "answer": 2,
              "explanation": {
                "en": "Mass and volume are extensive (they depend on how much you have), and temperature is just the current condition. Density is intensive and characteristic of the substance, so it can identify it.",
                "zh": "质量和体积是广度性质（取决于样品多少），温度只是当前状态。密度是强度性质，是物质的特征，因此可以用来鉴别。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A liquid has a density of $0.80$ g/mL. What is the mass, in grams, of $25$ mL of this liquid? (Give a number.)",
                "zh": "某液体密度为 $0.80$ g/mL。$25$ mL 这种液体的质量是多少克？（填一个数字。）"
              },
              "answer": "20",
              "accept": [
                "20.",
                "20.0"
              ],
              "explanation": {
                "en": "Rearrange $d = m/V$ to $m = dV = 0.80 \\times 25 = 20$ g. With 2 sig figs in each input, 20. g is appropriate.",
                "zh": "把 $d = m/V$ 变形为 $m = dV = 0.80 \\times 25 = 20$ g。两个输入都是 2 位有效数字，结果取 20 g。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student adds $12.11$ g, $18.0$ g, and $1.013$ g. What is the correctly rounded sum?",
                "zh": "一名学生把 $12.11$ g、$18.0$ g 和 $1.013$ g 相加。正确取舍后的和是多少？"
              },
              "choices": [
                "$31.123$ g",
                "$31.12$ g",
                "$31.1$ g",
                "$31$ g"
              ],
              "answer": 2,
              "explanation": {
                "en": "For addition, round to the fewest decimal places among the inputs. $18.0$ has one decimal place, so $31.123$ rounds to $31.1$ g.",
                "zh": "加法按小数位数最少的输入取舍。$18.0$ 只有一位小数，所以 $31.123$ 应舍为 $31.1$ g。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An irregular stone has a mass of $91.0$ g. It raises the water level in a cylinder from $25.0$ mL to $60.0$ mL. What is its density in g/mL? (Give a number.)",
                "zh": "一块形状不规则的石头质量为 $91.0$ g。它使量筒中的水面从 $25.0$ mL 升到 $60.0$ mL。它的密度是多少 g/mL？（填一个数字。）"
              },
              "answer": "2.6",
              "accept": [
                "2.60"
              ],
              "explanation": {
                "en": "Volume by displacement: $60.0 - 25.0 = 35.0$ mL. Then $d = 91.0 / 35.0 = 2.60$ g/mL. Displacement is the standard way to find the volume of an irregular solid.",
                "zh": "排水法求体积：$60.0 - 25.0 = 35.0$ mL。则 $d = 91.0 / 35.0 = 2.60$ g/mL。排水法是测量不规则固体体积的标准方法。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "atomic-structure-periodic-table",
      "title": "Unit 2: Atomic Structure and the Periodic Table",
      "titleZh": "第二单元：原子结构与元素周期表",
      "lessons": [
        {
          "id": "atoms-and-isotopes",
          "title": "Subatomic Particles and Isotopes",
          "titleZh": "亚原子粒子与同位素",
          "content": [
            {
              "type": "h2",
              "en": "Inside the Atom",
              "zh": "原子内部"
            },
            {
              "type": "p",
              "en": "Atoms are built from three subatomic particles. Protons (charge $+1$, mass $\\approx 1$ amu) and neutrons (charge $0$, mass $\\approx 1$ amu) sit in a tiny, dense nucleus. Electrons (charge $-1$, mass $\\approx \\frac{1}{1836}$ amu) occupy the space around the nucleus. Almost all of an atom’s mass is in the nucleus, but almost all of its volume is electron cloud.",
              "zh": "原子由三种亚原子粒子构成。质子（电荷 $+1$，质量约 $1$ amu）和中子（电荷 $0$，质量约 $1$ amu）位于极小而致密的原子核中。电子（电荷 $-1$，质量约 $\\frac{1}{1836}$ amu）占据核外空间。原子的质量几乎全部集中在核内，而体积几乎全部是电子云。"
            },
            {
              "type": "h3",
              "en": "Atomic Number and Mass Number",
              "zh": "原子序数与质量数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Atomic number $Z$ = number of protons. It defines the element.",
                  "zh": "原子序数 $Z$ = 质子数。它决定了元素的种类。"
                },
                {
                  "en": "Mass number $A$ = protons + neutrons.",
                  "zh": "质量数 $A$ = 质子数 + 中子数。"
                },
                {
                  "en": "In a neutral atom, electrons = protons. An ion has gained or lost electrons: a $2+$ charge means 2 electrons were lost.",
                  "zh": "中性原子中，电子数 = 质子数。离子得失了电子：$2+$ 电荷表示失去了 2 个电子。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Isotope notation writes the mass number as a superscript and atomic number as a subscript, e.g. $^{23}_{11}\\text{Na}$, or simply \"sodium-23.\"",
              "zh": "同位素符号把质量数写在左上角、原子序数写在左下角，例如 $^{23}_{11}\\text{Na}$，也可以简写为“钠-23”。"
            },
            {
              "type": "h2",
              "en": "Isotopes and Average Atomic Mass",
              "zh": "同位素与平均原子质量"
            },
            {
              "type": "p",
              "en": "Isotopes are atoms of the same element (same protons) with different numbers of neutrons, and therefore different masses. Chemically they behave almost identically because chemistry depends on electrons. The atomic mass on the periodic table is a weighted average of the naturally occurring isotopes:",
              "zh": "同位素是同一元素（质子数相同）但中子数不同、因而质量不同的原子。它们的化学行为几乎相同，因为化学性质取决于电子。周期表上的原子质量是天然同位素的加权平均值："
            },
            {
              "type": "math",
              "tex": "\\text{avg mass} = \\sum (\\text{isotope mass} \\times \\text{fractional abundance})"
            },
            {
              "type": "note",
              "en": "Common mistake: confusing mass number with atomic mass. The mass number ($A$) is a whole-number count of protons + neutrons for ONE isotope; the atomic mass on the periodic table is a decimal average over all isotopes.",
              "zh": "常见错误：把质量数和原子质量混为一谈。质量数（$A$）是某一种同位素中质子与中子的整数计数；周期表上的原子质量则是所有同位素的小数形式加权平均。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Counting Particles",
                "zh": "例题 1：数粒子"
              },
              "problem": {
                "en": "How many protons, neutrons, and electrons are in the ion $^{56}_{26}\\text{Fe}^{3+}$?",
                "zh": "离子 $^{56}_{26}\\text{Fe}^{3+}$ 中有多少个质子、中子和电子？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Protons = atomic number = 26. Neutrons = $A - Z$ = $56 - 26 = 30$.",
                  "zh": "质子数 = 原子序数 = 26。中子数 = $A - Z$ = $56 - 26 = 30$。"
                },
                {
                  "type": "p",
                  "en": "A neutral Fe atom would have 26 electrons; the $3+$ charge means 3 electrons were lost: $26 - 3 = 23$ electrons.",
                  "zh": "中性 Fe 原子有 26 个电子；$3+$ 电荷表示失去了 3 个电子：$26 - 3 = 23$ 个电子。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Average Atomic Mass",
                "zh": "例题 2：平均原子质量"
              },
              "problem": {
                "en": "Chlorine is $75.8\\%$ chlorine-35 (mass $34.97$ amu) and $24.2\\%$ chlorine-37 (mass $36.97$ amu). Calculate its average atomic mass.",
                "zh": "氯由 $75.8\\%$ 的氯-35（质量 $34.97$ amu）和 $24.2\\%$ 的氯-37（质量 $36.97$ amu）组成。计算它的平均原子质量。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "(0.758)(34.97) + (0.242)(36.97) = 26.51 + 8.95 = 35.45\\ \\text{amu}"
                },
                {
                  "type": "p",
                  "en": "Convert each percent to a decimal, multiply by that isotope’s mass, and add. The result, $35.45$ amu, matches the periodic table — closer to 35 than 37 because Cl-35 is more abundant.",
                  "zh": "把每个百分数化为小数，乘以对应同位素的质量再相加。结果 $35.45$ amu 与周期表一致——更接近 35 而不是 37，因为 Cl-35 丰度更高。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which subatomic particle determines the identity of an element?",
                "zh": "哪种亚原子粒子决定元素的种类？"
              },
              "choices": [
                "Electron",
                "Neutron",
                "Proton",
                "Photon"
              ],
              "answer": 2,
              "explanation": {
                "en": "The number of protons (atomic number) defines the element. Changing neutrons gives an isotope; changing electrons gives an ion — but changing protons gives a different element.",
                "zh": "质子数（原子序数）决定元素。改变中子数得到同位素；改变电子数得到离子；而改变质子数就变成了另一种元素。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many neutrons are in an atom of $^{31}_{15}\\text{P}$? (Give a whole number.)",
                "zh": "$^{31}_{15}\\text{P}$ 原子中有多少个中子？（填一个整数。）"
              },
              "answer": "16",
              "explanation": {
                "en": "Neutrons = mass number − atomic number = $31 - 15 = 16$.",
                "zh": "中子数 = 质量数 − 原子序数 = $31 - 15 = 16$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two atoms are isotopes of each other if they have the same number of ______ but different numbers of ______.",
                "zh": "如果两个原子的 ______ 数相同而 ______ 数不同，它们互为同位素。"
              },
              "choices": [
                "neutrons; protons",
                "protons; neutrons",
                "electrons; protons",
                "protons; electrons"
              ],
              "answer": 1,
              "explanation": {
                "en": "Isotopes share the same atomic number (protons) — they are the same element — but differ in neutrons, so their mass numbers differ.",
                "zh": "同位素的原子序数（质子数）相同——是同一种元素——但中子数不同，所以质量数不同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many electrons are in the ion $\\text{Ca}^{2+}$? (Calcium has atomic number 20. Give a whole number.)",
                "zh": "$\\text{Ca}^{2+}$ 离子中有多少个电子？（钙的原子序数为 20。填一个整数。）"
              },
              "answer": "18",
              "explanation": {
                "en": "Neutral Ca has 20 electrons. The $2+$ charge means 2 electrons were lost: $20 - 2 = 18$. Note that ions form by gaining or losing electrons, never protons.",
                "zh": "中性 Ca 有 20 个电子。$2+$ 电荷表示失去 2 个电子：$20 - 2 = 18$。注意离子是通过得失电子形成的，质子数不变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Where is nearly all of the mass of an atom located?",
                "zh": "原子的质量几乎全部集中在哪里？"
              },
              "choices": [
                "In the electron cloud",
                "In the nucleus",
                "Spread evenly through the atom",
                "In the outermost shell"
              ],
              "answer": 1,
              "explanation": {
                "en": "Protons and neutrons, each about 1 amu, are in the nucleus. Electrons are about 1800 times lighter, so the nucleus holds over 99.9% of the mass in a tiny fraction of the volume.",
                "zh": "质子和中子各约 1 amu，都在原子核内。电子轻约 1800 倍，因此原子核以极小的体积集中了 99.9% 以上的质量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Boron is about $20\\%$ boron-10 and $80\\%$ boron-11. Its average atomic mass should be closest to…",
                "zh": "硼约含 $20\\%$ 的硼-10 和 $80\\%$ 的硼-11。它的平均原子质量最接近……"
              },
              "choices": [
                "$10.2$ amu",
                "$10.5$ amu",
                "$10.8$ amu",
                "$11.0$ amu"
              ],
              "answer": 2,
              "explanation": {
                "en": "The average is weighted toward the more abundant isotope: $(0.20)(10) + (0.80)(11) = 2.0 + 8.8 = 10.8$ amu. A plain average of 10 and 11 (10.5) ignores abundance.",
                "zh": "平均值偏向丰度更高的同位素：$(0.20)(10) + (0.80)(11) = 2.0 + 8.8 = 10.8$ amu。直接取 10 和 11 的平均（10.5）忽略了丰度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Silver is $51.8\\%$ Ag-107 (mass $106.9$ amu) and $48.2\\%$ Ag-109 (mass $108.9$ amu). Calculate the average atomic mass in amu, rounded to one decimal place. (Give a number.)",
                "zh": "银由 $51.8\\%$ 的 Ag-107（质量 $106.9$ amu）和 $48.2\\%$ 的 Ag-109（质量 $108.9$ amu）组成。计算平均原子质量（amu），保留一位小数。（填一个数字。）"
              },
              "answer": "107.9",
              "accept": [
                "107.86",
                "107.87"
              ],
              "explanation": {
                "en": "$(0.518)(106.9) + (0.482)(108.9) = 55.37 + 52.49 = 107.9$ amu. Because the two abundances are nearly equal, the answer lands near the midpoint of the two masses.",
                "zh": "$(0.518)(106.9) + (0.482)(108.9) = 55.37 + 52.49 = 107.9$ amu。由于两种丰度几乎相等，结果接近两个质量的中点。"
              }
            }
          ]
        },
        {
          "id": "electron-configuration-and-trends",
          "title": "Electron Configuration and Periodic Trends",
          "titleZh": "电子排布与周期性规律",
          "content": [
            {
              "type": "h2",
              "en": "Electron Configuration",
              "zh": "电子排布"
            },
            {
              "type": "p",
              "en": "Electrons occupy orbitals grouped into sublevels: $s$ (holds 2 electrons), $p$ (6), $d$ (10), and $f$ (14). The Aufbau principle says electrons fill the lowest-energy sublevels first, in the order $1s\\,2s\\,2p\\,3s\\,3p\\,4s\\,3d\\,4p\\ldots$ The Pauli exclusion principle limits each orbital to 2 electrons with opposite spins, and Hund’s rule says electrons spread out singly within a sublevel before pairing.",
              "zh": "电子占据的轨道按亚层分组：$s$（容纳 2 个电子）、$p$（6 个）、$d$（10 个）、$f$（14 个）。构造原理（Aufbau）指出电子先填充能量最低的亚层，顺序为 $1s\\,2s\\,2p\\,3s\\,3p\\,4s\\,3d\\,4p\\ldots$。泡利不相容原理规定每个轨道最多容纳 2 个自旋相反的电子；洪特规则指出电子在同一亚层中先单独占据轨道，然后才配对。"
            },
            {
              "type": "p",
              "en": "Example: oxygen ($Z = 8$) is $1s^2 2s^2 2p^4$. The outermost-shell electrons are the valence electrons — oxygen has $2 + 4 = 6$. Valence electrons determine an element’s chemistry, which is why elements in the same group behave alike.",
              "zh": "例如：氧（$Z = 8$）的电子排布是 $1s^2 2s^2 2p^4$。最外层的电子叫价电子——氧有 $2 + 4 = 6$ 个。价电子决定元素的化学性质，这也是同族元素性质相似的原因。"
            },
            {
              "type": "h2",
              "en": "Periodic Trends",
              "zh": "周期性规律"
            },
            {
              "type": "p",
              "en": "Trends across the table are explained by two competing ideas: nuclear charge (more protons pull electrons in) and shell number (more shells put valence electrons farther out, shielded by inner electrons).",
              "zh": "周期表中的规律可以用两个相互竞争的因素解释：核电荷（质子越多对电子的吸引越强）和电子层数（层数越多价电子离核越远，并被内层电子屏蔽）。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Atomic radius: decreases left → right (more nuclear pull, same shell); increases top → bottom (more shells).",
                  "zh": "原子半径：从左到右减小（核吸引增强、层数不变）；从上到下增大（层数增多）。"
                },
                {
                  "en": "Ionization energy (energy to remove an electron): increases left → right; decreases top → bottom.",
                  "zh": "电离能（移走一个电子所需的能量）：从左到右增大；从上到下减小。"
                },
                {
                  "en": "Electronegativity (pull on shared electrons): increases toward fluorine, the most electronegative element.",
                  "zh": "电负性（对共用电子的吸引力）：越靠近氟越大，氟是电负性最强的元素。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: assuming atoms get bigger left to right because they gain electrons. Those electrons enter the SAME shell while the nuclear charge grows, so the atom actually shrinks across a period.",
              "zh": "常见错误：以为从左到右原子因为电子增多而变大。其实这些电子进入的是同一电子层，而核电荷在增大，所以同一周期内原子实际上是变小的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Writing a Configuration",
                "zh": "例题 1：写电子排布式"
              },
              "problem": {
                "en": "Write the full electron configuration of sulfur ($Z = 16$) and state its number of valence electrons.",
                "zh": "写出硫（$Z = 16$）的完整电子排布式，并说明它的价电子数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Fill sublevels in Aufbau order until 16 electrons are placed:",
                  "zh": "按构造原理顺序填充亚层，直到放入 16 个电子："
                },
                {
                  "type": "math",
                  "tex": "1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4"
                },
                {
                  "type": "p",
                  "en": "Check: $2+2+6+2+4 = 16$. The outer shell is $n = 3$ with $3s^2 3p^4$, so sulfur has $2 + 4 = 6$ valence electrons — the same as oxygen, its group-mate.",
                  "zh": "检查：$2+2+6+2+4 = 16$。最外层是 $n = 3$，即 $3s^2 3p^4$，所以硫有 $2 + 4 = 6$ 个价电子——与同族的氧相同。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Ranking by a Trend",
                "zh": "例题 2：按规律排序"
              },
              "problem": {
                "en": "Rank Na, Mg, and K from smallest to largest atomic radius, and explain.",
                "zh": "将 Na、Mg、K 按原子半径从小到大排序，并解释原因。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Mg is to the right of Na in period 3, so Mg < Na (greater nuclear charge pulls the same shell in tighter). K is below Na in group 1, so K > Na (an extra shell).",
                  "zh": "Mg 在第 3 周期中位于 Na 右边，所以 Mg < Na（核电荷更大，把同一电子层拉得更紧）。K 在第 1 族中位于 Na 下方，所以 K > Na（多一个电子层）。"
                },
                {
                  "type": "p",
                  "en": "Order: $\\text{Mg} < \\text{Na} < \\text{K}$. Down a group beats across a period: adding a whole shell changes size more than adding protons does.",
                  "zh": "顺序：$\\text{Mg} < \\text{Na} < \\text{K}$。“沿族向下”的影响大于“沿周期横移”：增加一个电子层对半径的影响比增加质子更大。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the maximum number of electrons a $p$ sublevel can hold?",
                "zh": "一个 $p$ 亚层最多能容纳多少个电子？"
              },
              "choices": [
                "2",
                "6",
                "10",
                "14"
              ],
              "answer": 1,
              "explanation": {
                "en": "A $p$ sublevel has 3 orbitals, each holding 2 electrons: $3 \\times 2 = 6$. ($s$ holds 2, $d$ holds 10, $f$ holds 14.)",
                "zh": "$p$ 亚层有 3 个轨道，每个容纳 2 个电子：$3 \\times 2 = 6$。（$s$ 容纳 2 个，$d$ 容纳 10 个，$f$ 容纳 14 个。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is the correct electron configuration of neon ($Z = 10$)?",
                "zh": "氖（$Z = 10$）的正确电子排布式是哪个？"
              },
              "choices": [
                "$1s^2 2s^2 2p^6$",
                "$1s^2 2s^8$",
                "$1s^2 2p^8$",
                "$1s^2 2s^2 2p^4 3s^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Fill in Aufbau order: $1s^2$ (2), $2s^2$ (4), then $2p^6$ (10). An $s$ sublevel can never hold 8 electrons, and electrons do not skip $2s$.",
                "zh": "按构造原理填充：$1s^2$（2 个）、$2s^2$（4 个）、然后 $2p^6$（10 个）。$s$ 亚层不可能容纳 8 个电子，电子也不会跳过 $2s$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many valence electrons does chlorine ($1s^2 2s^2 2p^6 3s^2 3p^5$) have? (Give a whole number.)",
                "zh": "氯（$1s^2 2s^2 2p^6 3s^2 3p^5$）有几个价电子？（填一个整数。）"
              },
              "answer": "7",
              "explanation": {
                "en": "Valence electrons are those in the outermost shell, $n = 3$: $3s^2 3p^5$ gives $2 + 5 = 7$. That is why chlorine gains one electron to reach a stable octet.",
                "zh": "价电子是最外层（$n = 3$）的电子：$3s^2 3p^5$ 共 $2 + 5 = 7$ 个。这就是氯要获得一个电子以达到稳定八隅体的原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Hund’s rule states that electrons in the same sublevel…",
                "zh": "洪特规则指出，同一亚层中的电子……"
              },
              "choices": [
                "always pair up immediately",
                "occupy separate orbitals singly before pairing",
                "must have the same spin in one orbital",
                "fill the highest-energy orbital first"
              ],
              "answer": 1,
              "explanation": {
                "en": "Electrons repel each other, so they spread out one per orbital (with parallel spins) before any orbital gets a second electron. Pairing in one orbital costs extra energy.",
                "zh": "电子之间相互排斥，所以它们先每个轨道单独占据一个（自旋平行），之后才会配对。在同一轨道中配对需要额外能量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which atom has the largest atomic radius?",
                "zh": "哪个原子的半径最大？"
              },
              "choices": [
                "F",
                "Cl",
                "Br",
                "I"
              ],
              "answer": 3,
              "explanation": {
                "en": "These are all group 17 elements. Radius increases down a group because each row adds a new electron shell, so iodine, the lowest, is largest.",
                "zh": "这些都是第 17 族元素。沿族向下每行增加一个电子层，半径增大，所以位置最靠下的碘最大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which element has the highest first ionization energy?",
                "zh": "哪种元素的第一电离能最高？"
              },
              "choices": [
                "Na",
                "Al",
                "S",
                "Ar"
              ],
              "answer": 3,
              "explanation": {
                "en": "Ionization energy increases across a period as nuclear charge grows. All four are in period 3, and argon is farthest right — its full octet is held most tightly.",
                "zh": "同一周期内核电荷增大，电离能随之升高。四者都在第 3 周期，氩最靠右——它的满八隅体电子被束缚得最紧。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An element has the configuration $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2$. What is its atomic number? (Give a whole number.)",
                "zh": "某元素的电子排布式为 $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2$。它的原子序数是多少？（填一个整数。）"
              },
              "answer": "20",
              "explanation": {
                "en": "Add the superscripts: $2+2+6+2+6+2 = 20$. In a neutral atom, electrons = protons = atomic number, so this is calcium.",
                "zh": "把上标相加：$2+2+6+2+6+2 = 20$。中性原子中电子数 = 质子数 = 原子序数，所以这是钙。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-bonding",
      "title": "Unit 3: Chemical Bonding",
      "titleZh": "第三单元：化学键",
      "lessons": [
        {
          "id": "ionic-covalent-lewis",
          "title": "Ionic and Covalent Bonds; Lewis Structures",
          "titleZh": "离子键、共价键与路易斯结构",
          "content": [
            {
              "type": "h2",
              "en": "Why Atoms Bond",
              "zh": "原子为何成键"
            },
            {
              "type": "p",
              "en": "Atoms bond to reach a lower-energy, more stable arrangement — usually a full valence shell of 8 electrons (the octet rule). There are two main strategies: transfer electrons (ionic bonding) or share them (covalent bonding).",
              "zh": "原子成键是为了达到能量更低、更稳定的状态——通常是拥有 8 个价电子的满外层（八隅体规则）。主要有两种方式：转移电子（离子键）或共享电子（共价键）。"
            },
            {
              "type": "h3",
              "en": "Ionic Bonds",
              "zh": "离子键"
            },
            {
              "type": "p",
              "en": "Ionic bonds form between a metal and a nonmetal. The metal loses electrons to become a cation; the nonmetal gains them to become an anion. The opposite charges attract in a rigid crystal lattice. Ionic compounds have high melting points and conduct electricity when molten or dissolved, because the ions are then free to move.",
              "zh": "离子键通常在金属与非金属之间形成。金属失去电子成为阳离子；非金属获得电子成为阴离子。异性电荷相互吸引，形成坚固的晶格。离子化合物熔点高，熔融或溶解后能导电，因为此时离子可以自由移动。"
            },
            {
              "type": "h3",
              "en": "Covalent Bonds",
              "zh": "共价键"
            },
            {
              "type": "p",
              "en": "Covalent bonds form between nonmetals, which share pairs of electrons. One shared pair is a single bond, two pairs a double bond, three pairs a triple bond. More shared pairs means a shorter, stronger bond. Covalent (molecular) compounds tend to have lower melting points and do not conduct electricity.",
              "zh": "共价键在非金属之间形成，原子共享电子对。共享一对电子是单键，两对是双键，三对是三键。共享的电子对越多，键越短越强。共价（分子）化合物熔点通常较低，且不导电。"
            },
            {
              "type": "h2",
              "en": "Drawing Lewis Structures",
              "zh": "画路易斯结构"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Count all valence electrons (adjust for any charge).",
                  "zh": "第一步：数出所有价电子（若有电荷需相应加减）。"
                },
                {
                  "en": "Step 2: Place the least electronegative atom in the center (never H) and connect atoms with single bonds.",
                  "zh": "第二步：把电负性最小的原子放在中心（H 永远不居中），用单键把原子连起来。"
                },
                {
                  "en": "Step 3: Distribute remaining electrons as lone pairs, outer atoms first, to complete octets.",
                  "zh": "第三步：把剩余电子作为孤对分配，先满足外围原子的八隅体。"
                },
                {
                  "en": "Step 4: If the central atom lacks an octet, convert lone pairs on outer atoms into double or triple bonds.",
                  "zh": "第四步：若中心原子不足八电子，把外围原子的孤对转为双键或三键。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting that hydrogen only needs 2 electrons (one bond), and miscounting valence electrons for polyatomic ions — add one electron for each negative charge, subtract one for each positive charge.",
              "zh": "常见错误：忘记氢只需要 2 个电子（一个键），以及多原子离子的价电子数错——每带一个负电荷要加一个电子，每带一个正电荷要减一个电子。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Predicting an Ionic Formula",
                "zh": "例题 1：预测离子化合物的化学式"
              },
              "problem": {
                "en": "Predict the formula of the compound formed between magnesium and chlorine.",
                "zh": "预测镁和氯形成的化合物的化学式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Magnesium (group 2) loses 2 electrons to form $\\text{Mg}^{2+}$. Chlorine (group 17) gains 1 electron to form $\\text{Cl}^-$.",
                  "zh": "镁（第 2 族）失去 2 个电子形成 $\\text{Mg}^{2+}$；氯（第 17 族）获得 1 个电子形成 $\\text{Cl}^-$。"
                },
                {
                  "type": "p",
                  "en": "For a neutral compound the charges must cancel: one $\\text{Mg}^{2+}$ needs two $\\text{Cl}^-$. The formula is $\\text{MgCl}_2$.",
                  "zh": "化合物必须电中性：一个 $\\text{Mg}^{2+}$ 需要两个 $\\text{Cl}^-$。化学式为 $\\text{MgCl}_2$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Lewis Structure of CO2",
                "zh": "例题 2：CO2 的路易斯结构"
              },
              "problem": {
                "en": "Draw the Lewis structure of carbon dioxide, $\\text{CO}_2$.",
                "zh": "画出二氧化碳 $\\text{CO}_2$ 的路易斯结构。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Valence electrons: $4 + 2(6) = 16$. Carbon (less electronegative) is central: O–C–O uses 4 electrons, leaving 12 as lone pairs on the oxygens.",
                  "zh": "价电子：$4 + 2(6) = 16$。碳电负性较小，居中：O–C–O 用去 4 个电子，剩下 12 个作为氧上的孤对。"
                },
                {
                  "type": "p",
                  "en": "Carbon then has only 4 electrons, so convert one lone pair from each oxygen into a bond, giving two double bonds: $\\text{O}{=}\\text{C}{=}\\text{O}$, with two lone pairs left on each oxygen. Every atom now has an octet.",
                  "zh": "此时碳只有 4 个电子，因此把每个氧上的一个孤对转为成键电子对，形成两个双键：$\\text{O}{=}\\text{C}{=}\\text{O}$，每个氧上还剩两个孤对。现在每个原子都满足八隅体。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "An ionic bond is best described as…",
                "zh": "离子键最恰当的描述是……"
              },
              "choices": [
                "a shared pair of electrons",
                "the attraction between oppositely charged ions",
                "the attraction between two metal atoms",
                "a bond between two nonmetals"
              ],
              "answer": 1,
              "explanation": {
                "en": "In ionic bonding, electrons are transferred, creating a cation and an anion; the electrostatic attraction between those opposite charges is the bond. Sharing pairs is covalent bonding.",
                "zh": "离子键中电子发生转移，产生阳离子和阴离子；这两种异性电荷之间的静电吸引就是离子键。共享电子对属于共价键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of elements is most likely to form a covalent compound?",
                "zh": "哪一对元素最可能形成共价化合物？"
              },
              "choices": [
                "Na and Cl",
                "Mg and O",
                "C and O",
                "K and F"
              ],
              "answer": 2,
              "explanation": {
                "en": "Covalent bonds form between two nonmetals, and both carbon and oxygen are nonmetals. The other pairs are metal + nonmetal, which transfer electrons and bond ionically.",
                "zh": "共价键在两种非金属之间形成，碳和氧都是非金属。其余各对都是金属加非金属，会通过转移电子形成离子键。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many total valence electrons are in the Lewis structure of $\\text{NH}_3$? (Give a whole number.)",
                "zh": "$\\text{NH}_3$ 的路易斯结构中共有多少个价电子？（填一个整数。）"
              },
              "answer": "8",
              "explanation": {
                "en": "Nitrogen contributes 5 and each hydrogen contributes 1: $5 + 3(1) = 8$. Three N–H bonds use 6 electrons, and the last 2 form nitrogen’s lone pair.",
                "zh": "氮提供 5 个，每个氢提供 1 个：$5 + 3(1) = 8$。三个 N–H 键用去 6 个电子，剩下 2 个构成氮上的孤对。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Predict the formula of the ionic compound formed from $\\text{Al}^{3+}$ and $\\text{O}^{2-}$. (Write it like Al2O3.)",
                "zh": "预测由 $\\text{Al}^{3+}$ 和 $\\text{O}^{2-}$ 形成的离子化合物的化学式。（按 Al2O3 的格式书写。）"
              },
              "answer": "Al2O3",
              "accept": [
                "al2o3"
              ],
              "explanation": {
                "en": "Charges must cancel: the least common multiple of 3 and 2 is 6, so use two $\\text{Al}^{3+}$ ($+6$) and three $\\text{O}^{2-}$ ($-6$). A shortcut is the criss-cross method: swap the charge numbers into subscripts.",
                "zh": "电荷必须抵消：3 和 2 的最小公倍数是 6，用两个 $\\text{Al}^{3+}$（$+6$）和三个 $\\text{O}^{2-}$（$-6$）。捷径是交叉法：把电荷数交换后写成下标。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which bond is the shortest and strongest?",
                "zh": "哪种键最短、最强？"
              },
              "choices": [
                "C–C single bond",
                "C=C double bond",
                "C≡C triple bond",
                "They are all equal"
              ],
              "answer": 2,
              "explanation": {
                "en": "More shared electron pairs pull the nuclei closer together: triple bonds are shorter and stronger than double bonds, which beat single bonds.",
                "zh": "共享的电子对越多，把原子核拉得越近：三键比双键更短更强，双键又强于单键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solid sodium chloride does not conduct electricity, but molten NaCl does. Why?",
                "zh": "固态氯化钠不导电，而熔融的 NaCl 却能导电。为什么？"
              },
              "choices": [
                "Melting releases free electrons",
                "In the liquid, the ions are free to move and carry charge",
                "Melting breaks the ionic bonds into neutral atoms",
                "Solid NaCl has no ions"
              ],
              "answer": 1,
              "explanation": {
                "en": "Conduction requires mobile charge carriers. In the solid, ions are locked in the lattice; melting frees the $\\text{Na}^+$ and $\\text{Cl}^-$ ions to move. No electrons are released and the ions remain charged.",
                "zh": "导电需要可移动的电荷载体。固态中离子被晶格锁住；熔化后 $\\text{Na}^+$ 和 $\\text{Cl}^-$ 离子可以自由移动。这一过程既不释放电子，离子也不会变成中性原子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many lone pairs are on the central atom in the Lewis structure of water, $\\text{H}_2\\text{O}$? (Give a whole number.)",
                "zh": "水 $\\text{H}_2\\text{O}$ 的路易斯结构中，中心原子上有几个孤对电子？（填一个整数。）"
              },
              "answer": "2",
              "explanation": {
                "en": "Water has $6 + 2(1) = 8$ valence electrons. Two O–H bonds use 4; the remaining 4 electrons sit on oxygen as 2 lone pairs. Those lone pairs are what bend the molecule.",
                "zh": "水共有 $6 + 2(1) = 8$ 个价电子。两个 O–H 键用去 4 个；剩下 4 个电子以 2 个孤对的形式留在氧上。正是这些孤对使分子呈弯曲形。"
              }
            }
          ]
        },
        {
          "id": "vsepr-polarity-imfs",
          "title": "VSEPR, Polarity, and Intermolecular Forces",
          "titleZh": "VSEPR、极性与分子间作用力",
          "content": [
            {
              "type": "h2",
              "en": "VSEPR: Predicting Molecular Shape",
              "zh": "VSEPR：预测分子形状"
            },
            {
              "type": "p",
              "en": "VSEPR (Valence Shell Electron Pair Repulsion) theory says electron groups around a central atom — bonds and lone pairs alike — repel each other and spread as far apart as possible. Count the electron groups (a double or triple bond counts as ONE group), then account for lone pairs to name the shape.",
              "zh": "VSEPR（价层电子对互斥）理论认为，中心原子周围的电子组——无论成键电子对还是孤对——相互排斥并尽可能远离。先数电子组的数目（双键或三键算一组），再根据孤对数目确定分子形状。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "2 groups, 0 lone pairs: linear, $180^\\circ$ (e.g. $\\text{CO}_2$).",
                  "zh": "2 组、无孤对：直线形，$180^\\circ$（如 $\\text{CO}_2$）。"
                },
                {
                  "en": "3 groups, 0 lone pairs: trigonal planar, $120^\\circ$ (e.g. $\\text{BF}_3$); 1 lone pair: bent.",
                  "zh": "3 组、无孤对：平面三角形，$120^\\circ$（如 $\\text{BF}_3$）；1 个孤对：弯曲形。"
                },
                {
                  "en": "4 groups, 0 lone pairs: tetrahedral, $109.5^\\circ$ (e.g. $\\text{CH}_4$); 1 lone pair: trigonal pyramidal (e.g. $\\text{NH}_3$); 2 lone pairs: bent (e.g. $\\text{H}_2\\text{O}$).",
                  "zh": "4 组、无孤对：正四面体形，$109.5^\\circ$（如 $\\text{CH}_4$）；1 个孤对：三角锥形（如 $\\text{NH}_3$）；2 个孤对：弯曲形（如 $\\text{H}_2\\text{O}$）。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Bond Polarity and Molecular Polarity",
              "zh": "键的极性与分子的极性"
            },
            {
              "type": "p",
              "en": "When two bonded atoms differ in electronegativity, the shared electrons shift toward the more electronegative atom, creating a polar bond with partial charges ($\\delta^+$ and $\\delta^-$). A molecule is polar only if its polar bonds do NOT cancel by symmetry. $\\text{CO}_2$ is nonpolar (linear, dipoles cancel); $\\text{H}_2\\text{O}$ is polar (bent, dipoles add).",
              "zh": "当成键的两个原子电负性不同时，共用电子偏向电负性较大的原子，形成带部分电荷（$\\delta^+$ 和 $\\delta^-$）的极性键。只有当极性键不能因对称而相互抵消时，分子才是极性分子。$\\text{CO}_2$ 是非极性的（直线形，偶极相消）；$\\text{H}_2\\text{O}$ 是极性的（弯曲形，偶极叠加）。"
            },
            {
              "type": "note",
              "en": "Common mistake: assuming polar bonds always make a polar molecule. Geometry decides! A symmetric molecule like $\\text{CCl}_4$ has four polar bonds that cancel perfectly, making it nonpolar overall.",
              "zh": "常见错误：以为有极性键的分子一定是极性分子。几何形状才是决定因素！像 $\\text{CCl}_4$ 这样对称的分子有四个极性键，但它们完全抵消，整体是非极性的。"
            },
            {
              "type": "h2",
              "en": "Intermolecular Forces (IMFs)",
              "zh": "分子间作用力"
            },
            {
              "type": "p",
              "en": "IMFs are attractions BETWEEN molecules, far weaker than the covalent bonds within them, and they control melting point, boiling point, and solubility. From weakest to strongest: London dispersion forces (all molecules; grow with molecular size), dipole–dipole forces (polar molecules), and hydrogen bonds (H bonded directly to N, O, or F). Stronger IMFs mean higher boiling points.",
              "zh": "分子间作用力是分子之间的吸引力，远弱于分子内部的共价键，它决定熔点、沸点和溶解性。由弱到强依次为：伦敦色散力（所有分子都有，随分子增大而增强）、偶极-偶极作用力（极性分子）、氢键（H 直接与 N、O 或 F 相连）。分子间作用力越强，沸点越高。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Shape and Polarity of NH3",
                "zh": "例题 1：NH3 的形状与极性"
              },
              "problem": {
                "en": "Predict the shape and polarity of ammonia, $\\text{NH}_3$.",
                "zh": "预测氨 $\\text{NH}_3$ 的分子形状和极性。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Nitrogen has 4 electron groups: 3 N–H bonds and 1 lone pair. Four groups arrange tetrahedrally, but with one lone pair the molecular shape is trigonal pyramidal, with bond angles slightly under $109.5^\\circ$.",
                  "zh": "氮周围有 4 个电子组：3 个 N–H 键和 1 个孤对。四组电子按四面体排布，但由于有一个孤对，分子形状为三角锥形，键角略小于 $109.5^\\circ$。"
                },
                {
                  "type": "p",
                  "en": "N–H bonds are polar, and the pyramid is not symmetric enough to cancel them — all three dipoles point up toward the lone pair side. $\\text{NH}_3$ is polar.",
                  "zh": "N–H 键是极性键，三角锥形不对称，偶极无法抵消——三个偶极都指向孤对一侧。所以 $\\text{NH}_3$ 是极性分子。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Comparing Boiling Points",
                "zh": "例题 2：比较沸点"
              },
              "problem": {
                "en": "Water ($\\text{H}_2\\text{O}$, molar mass 18) boils at $100^\\circ\\text{C}$, but the heavier methane ($\\text{CH}_4$, molar mass 16) boils at $-162^\\circ\\text{C}$. Explain.",
                "zh": "水（$\\text{H}_2\\text{O}$，摩尔质量 18）的沸点是 $100^\\circ\\text{C}$，而更重一些的甲烷（$\\text{CH}_4$，摩尔质量 16）的沸点是 $-162^\\circ\\text{C}$。请解释。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Boiling requires overcoming intermolecular forces. Water is polar and has H bonded to O, so its molecules form strong hydrogen bonds.",
                  "zh": "沸腾需要克服分子间作用力。水是极性分子，且 H 直接连在 O 上，分子之间能形成很强的氢键。"
                },
                {
                  "type": "p",
                  "en": "Methane is nonpolar and symmetric (tetrahedral), so it has only weak London dispersion forces. Much less energy is needed to separate its molecules, so it boils at a far lower temperature.",
                  "zh": "甲烷是非极性的对称分子（四面体形），只有微弱的伦敦色散力。分开甲烷分子所需能量小得多，所以它的沸点低得多。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the molecular shape of methane, $\\text{CH}_4$?",
                "zh": "甲烷 $\\text{CH}_4$ 的分子形状是什么？"
              },
              "choices": [
                "Square planar",
                "Trigonal pyramidal",
                "Tetrahedral",
                "Linear"
              ],
              "answer": 2,
              "explanation": {
                "en": "Carbon has 4 bonding groups and no lone pairs. Four groups spread to the corners of a tetrahedron with $109.5^\\circ$ angles — not a flat square, which would force $90^\\circ$ angles.",
                "zh": "碳有 4 个成键电子组、没有孤对。四组电子指向四面体的四个顶点，键角 $109.5^\\circ$——而不是角度只有 $90^\\circ$ 的平面正方形。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Water is bent rather than linear because…",
                "zh": "水分子是弯曲形而不是直线形，原因是……"
              },
              "choices": [
                "hydrogen atoms repel each other strongly",
                "oxygen’s two lone pairs push the bonding pairs together",
                "the O–H bonds are double bonds",
                "oxygen is heavier than hydrogen"
              ],
              "answer": 1,
              "explanation": {
                "en": "Oxygen has 4 electron groups: 2 bonds and 2 lone pairs. The lone pairs occupy two tetrahedral positions and squeeze the O–H bonds into a bent shape of about $104.5^\\circ$.",
                "zh": "氧周围有 4 个电子组：2 个成键对和 2 个孤对。孤对占据四面体的两个位置，把 O–H 键挤成约 $104.5^\\circ$ 的弯曲形。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the approximate bond angle, in degrees, in the trigonal planar molecule $\\text{BF}_3$? (Give a number.)",
                "zh": "平面三角形分子 $\\text{BF}_3$ 的键角约为多少度？（填一个数字。）"
              },
              "answer": "120",
              "explanation": {
                "en": "Three electron groups with no lone pairs spread evenly in a plane: $360^\\circ / 3 = 120^\\circ$.",
                "zh": "三个电子组且无孤对时，电子组在平面内均匀分布：$360^\\circ / 3 = 120^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which molecule is nonpolar despite having polar bonds?",
                "zh": "哪个分子虽然含有极性键，但整体是非极性的？"
              },
              "choices": [
                "$\\text{H}_2\\text{O}$",
                "$\\text{NH}_3$",
                "$\\text{CO}_2$",
                "$\\text{HCl}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\text{CO}_2$ is linear, so its two equal C=O bond dipoles point in exactly opposite directions and cancel. Water and ammonia are asymmetric (bent, pyramidal), and HCl has a single uncancelled polar bond.",
                "zh": "$\\text{CO}_2$ 是直线形，两个相等的 C=O 键偶极方向完全相反而抵消。水和氨是不对称的（弯曲形、三角锥形），HCl 只有一个无法抵消的极性键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which substance can form hydrogen bonds between its molecules?",
                "zh": "哪种物质的分子之间能形成氢键？"
              },
              "choices": [
                "$\\text{CH}_4$",
                "$\\text{HF}$",
                "$\\text{CO}_2$",
                "$\\text{Cl}_2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Hydrogen bonding requires H covalently bonded to N, O, or F. Only HF qualifies. $\\text{CH}_4$ has H, but bonded to carbon, which is not electronegative enough.",
                "zh": "氢键要求 H 与 N、O 或 F 直接共价相连，只有 HF 符合。$\\text{CH}_4$ 虽有氢，但连在碳上，碳的电负性不够大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Rank the intermolecular forces from weakest to strongest.",
                "zh": "将分子间作用力按由弱到强排序。"
              },
              "choices": [
                "hydrogen bond < dipole–dipole < dispersion",
                "dispersion < dipole–dipole < hydrogen bond",
                "dipole–dipole < dispersion < hydrogen bond",
                "dispersion < hydrogen bond < dipole–dipole"
              ],
              "answer": 1,
              "explanation": {
                "en": "For molecules of similar size: London dispersion (temporary dipoles) is weakest, dipole–dipole (permanent partial charges) is stronger, and hydrogen bonds (an especially strong dipole attraction involving N, O, or F) are strongest.",
                "zh": "对大小相近的分子：伦敦色散力（瞬时偶极）最弱，偶极-偶极作用力（永久部分电荷）较强，氢键（涉及 N、O、F 的特别强的偶极吸引）最强。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A molecule has 4 electron groups around its central atom, and exactly 1 of them is a lone pair. How many atoms are bonded to the central atom? (Give a whole number.)",
                "zh": "某分子中心原子周围有 4 个电子组，其中恰好 1 个是孤对。中心原子上连有多少个原子？（填一个整数。）"
              },
              "answer": "3",
              "explanation": {
                "en": "Electron groups = bonds + lone pairs, so bonds $= 4 - 1 = 3$. This is the trigonal pyramidal case, like $\\text{NH}_3$.",
                "zh": "电子组 = 成键对 + 孤对，所以成键数 $= 4 - 1 = 3$。这就是三角锥形的情形，如 $\\text{NH}_3$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "nomenclature-reactions",
      "title": "Unit 4: Nomenclature and Chemical Reactions",
      "titleZh": "第四单元：命名与化学反应",
      "lessons": [
        {
          "id": "naming-compounds-and-formulas",
          "title": "Naming Compounds and Writing Formulas",
          "titleZh": "化合物命名与化学式",
          "content": [
            {
              "type": "h2",
              "en": "Why We Need Chemical Names",
              "zh": "为什么需要化学命名"
            },
            {
              "type": "p",
              "en": "Chemists worldwide use one shared naming system (nomenclature) so that a formula written in Utah means exactly the same thing in Shanghai. Every compound has a systematic name that tells you precisely which elements it contains and in what ratio. In this lesson you will learn to move confidently in both directions: from a name to a formula, and from a formula to a name.",
              "zh": "全世界的化学家使用同一套命名系统（nomenclature），这样在犹他州写下的化学式在上海也表示完全相同的物质。每种化合物都有一个系统名称，准确说明它含有哪些元素以及元素比例。本课将教你熟练地双向转换：由名称写出化学式，也由化学式写出名称。"
            },
            {
              "type": "p",
              "en": "The first question to ask about any compound is: is it ionic (a metal with a nonmetal, or something containing a polyatomic ion) or molecular (two nonmetals)? The two families follow different rules, so identifying the type first saves you from most naming errors.",
              "zh": "面对任何化合物，先问的第一个问题是：它是离子化合物（金属与非金属结合，或含有多原子离子）还是分子化合物（两种非金属）？两类遵循不同的规则，因此先判断类型能帮你避免大多数命名错误。"
            },
            {
              "type": "h2",
              "en": "Monatomic Ions and Predicting Charges",
              "zh": "单原子离子与电荷预测"
            },
            {
              "type": "p",
              "en": "A monatomic ion is a single atom that has gained or lost electrons. Atoms gain or lose electrons to reach the stable electron configuration of the nearest noble gas (a full outer shell). For the main-group elements, the periodic table predicts the charge directly.",
              "zh": "单原子离子是得到或失去电子的单个原子。原子通过得失电子达到最近惰性气体的稳定电子排布（外层填满）。对于主族元素，周期表可以直接预测电荷。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Group 1 (alkali metals) lose 1 electron: charge $+1$ (e.g. $\\text{Na}^{+}$, $\\text{K}^{+}$).",
                  "zh": "第 1 族（碱金属）失去 1 个电子：电荷 $+1$（如 $\\text{Na}^{+}$、$\\text{K}^{+}$）。"
                },
                {
                  "en": "Group 2 (alkaline earth metals) lose 2 electrons: charge $+2$ (e.g. $\\text{Mg}^{2+}$, $\\text{Ca}^{2+}$).",
                  "zh": "第 2 族（碱土金属）失去 2 个电子：电荷 $+2$（如 $\\text{Mg}^{2+}$、$\\text{Ca}^{2+}$）。"
                },
                {
                  "en": "Group 13 loses 3 electrons: charge $+3$ (e.g. $\\text{Al}^{3+}$).",
                  "zh": "第 13 族失去 3 个电子：电荷 $+3$（如 $\\text{Al}^{3+}$）。"
                },
                {
                  "en": "Group 15 gains 3 electrons: charge $-3$ (e.g. $\\text{N}^{3-}$).",
                  "zh": "第 15 族得到 3 个电子：电荷 $-3$（如 $\\text{N}^{3-}$）。"
                },
                {
                  "en": "Group 16 gains 2 electrons: charge $-2$ (e.g. $\\text{O}^{2-}$, $\\text{S}^{2-}$).",
                  "zh": "第 16 族得到 2 个电子：电荷 $-2$（如 $\\text{O}^{2-}$、$\\text{S}^{2-}$）。"
                },
                {
                  "en": "Group 17 (halogens) gains 1 electron: charge $-1$ (e.g. $\\text{Cl}^{-}$, $\\text{Br}^{-}$).",
                  "zh": "第 17 族（卤素）得到 1 个电子：电荷 $-1$（如 $\\text{Cl}^{-}$、$\\text{Br}^{-}$）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "When you name a monatomic anion, change the ending of the element to \"-ide\": chlorine becomes chloride, oxygen becomes oxide, nitrogen becomes nitride. Cations (positive ions) simply keep the element name: $\\text{Na}^{+}$ is \"sodium ion.\"",
              "zh": "给单原子阴离子命名时，把元素名的词尾改为 \"-ide\"：chlorine 变 chloride（氯离子），oxygen 变 oxide（氧离子），nitrogen 变 nitride（氮离子）。阳离子（正离子）则保留元素名：$\\text{Na}^{+}$ 就是 \"sodium ion\"（钠离子）。"
            },
            {
              "type": "h3",
              "en": "Transition Metals and Roman Numerals",
              "zh": "过渡金属与罗马数字"
            },
            {
              "type": "p",
              "en": "Most transition metals can form more than one charge — iron can be $\\text{Fe}^{2+}$ or $\\text{Fe}^{3+}$. Because the group number no longer tells you the charge, we write the charge with a Roman numeral in parentheses right after the metal name: $\\text{Fe}^{2+}$ is iron(II) and $\\text{Fe}^{3+}$ is iron(III). A few metals have only one common charge and need no numeral: zinc is always $\\text{Zn}^{2+}$, silver is always $\\text{Ag}^{+}$, and aluminum is always $\\text{Al}^{3+}$.",
              "zh": "大多数过渡金属可形成不止一种电荷——铁可以是 $\\text{Fe}^{2+}$ 或 $\\text{Fe}^{3+}$。由于族序号不再能告诉你电荷，我们在金属名后的括号中用罗马数字标出电荷：$\\text{Fe}^{2+}$ 是 iron(II)（铁(II)），$\\text{Fe}^{3+}$ 是 iron(III)（铁(III)）。少数金属只有一种常见电荷，不需数字：锌总是 $\\text{Zn}^{2+}$，银总是 $\\text{Ag}^{+}$，铝总是 $\\text{Al}^{3+}$。"
            },
            {
              "type": "note",
              "en": "Common mistake: the Roman numeral shows the charge on the metal ion, NOT the number of atoms. In $\\text{FeCl}_3$, iron is iron(III) because each $\\text{Fe}^{3+}$ balances three $\\text{Cl}^{-}$ — the \"III\" is the charge, and it just happens to equal the number of chlorides here by coincidence of the math.",
              "zh": "常见错误：罗马数字表示金属离子的电荷，而不是原子个数。在 $\\text{FeCl}_3$ 中，铁是 iron(III)，因为每个 $\\text{Fe}^{3+}$ 平衡三个 $\\text{Cl}^{-}$——\"III\" 是电荷，这里恰好等于氯离子数只是数值上的巧合。"
            },
            {
              "type": "h2",
              "en": "Common Polyatomic Ions",
              "zh": "常见多原子离子"
            },
            {
              "type": "p",
              "en": "A polyatomic ion is a group of atoms bonded together that carries an overall charge and travels as a unit. You must memorize the common ones. Notice the \"-ate/-ite\" pattern: the \"-ate\" ion has one more oxygen than the \"-ite\" ion, but both have the same charge.",
              "zh": "多原子离子是键合在一起并带有整体电荷、作为一个整体参与反应的原子团。你必须记住常见的这些。注意 \"-ate/-ite\" 规律：\"-ate\" 离子比 \"-ite\" 离子多一个氧原子，但两者电荷相同。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Ammonium $\\text{NH}_4^{+}$ (the only common positive polyatomic ion), hydroxide $\\text{OH}^{-}$, nitrate $\\text{NO}_3^{-}$, nitrite $\\text{NO}_2^{-}$.",
                  "zh": "铵根 $\\text{NH}_4^{+}$（唯一常见的正多原子离子）、氢氧根 $\\text{OH}^{-}$、硝酸根 $\\text{NO}_3^{-}$、亚硝酸根 $\\text{NO}_2^{-}$。"
                },
                {
                  "en": "Carbonate $\\text{CO}_3^{2-}$, sulfate $\\text{SO}_4^{2-}$, sulfite $\\text{SO}_3^{2-}$, phosphate $\\text{PO}_4^{3-}$.",
                  "zh": "碳酸根 $\\text{CO}_3^{2-}$、硫酸根 $\\text{SO}_4^{2-}$、亚硫酸根 $\\text{SO}_3^{2-}$、磷酸根 $\\text{PO}_4^{3-}$。"
                },
                {
                  "en": "Acetate $\\text{C}_2\\text{H}_3\\text{O}_2^{-}$, hydrogen carbonate (bicarbonate) $\\text{HCO}_3^{-}$, permanganate $\\text{MnO}_4^{-}$.",
                  "zh": "醋酸根 $\\text{C}_2\\text{H}_3\\text{O}_2^{-}$、碳酸氢根（重碳酸根）$\\text{HCO}_3^{-}$、高锰酸根 $\\text{MnO}_4^{-}$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Writing Ionic Formulas: The Criss-Cross Method",
              "zh": "书写离子化学式：交叉法"
            },
            {
              "type": "p",
              "en": "Every ionic compound is electrically neutral overall: the total positive charge must exactly cancel the total negative charge. The criss-cross method finds the smallest whole-number ratio that does this. Write each ion with its charge, then drop each ion's charge number down to become the subscript of the OTHER ion.",
              "zh": "每种离子化合物整体呈电中性：正电荷总量必须恰好抵消负电荷总量。交叉法能找到实现这一点的最小整数比。写出每个离子及其电荷，然后把每个离子的电荷数交叉写成对方离子的下标。"
            },
            {
              "type": "math",
              "tex": "\\text{Al}^{3+}\\quad \\text{O}^{2-}\\ \\longrightarrow\\ \\text{Al}_2\\text{O}_3"
            },
            {
              "type": "p",
              "en": "After criss-crossing, always reduce the subscripts to the smallest whole-number ratio. For example, $\\text{Mg}^{2+}$ with $\\text{O}^{2-}$ would criss-cross to $\\text{Mg}_2\\text{O}_2$, which reduces to $\\text{MgO}$. When a polyatomic ion needs a subscript greater than 1, wrap it in parentheses first: calcium nitrate is $\\text{Ca(NO}_3)_2$.",
              "zh": "交叉之后，一定要把下标约成最小整数比。例如 $\\text{Mg}^{2+}$ 与 $\\text{O}^{2-}$ 交叉得 $\\text{Mg}_2\\text{O}_2$，应约简为 $\\text{MgO}$。当多原子离子需要大于 1 的下标时，先用括号括起来：硝酸钙是 $\\text{Ca(NO}_3)_2$。"
            },
            {
              "type": "note",
              "en": "Exam tip: ionic compounds do NOT use Greek prefixes. Write \"aluminum oxide,\" never \"dialuminum trioxide.\" Prefixes belong only to molecular (covalent) compounds, discussed next.",
              "zh": "考试提示：离子化合物不用希腊数字前缀。写 \"aluminum oxide\"（氧化铝），绝不要写 \"dialuminum trioxide\"。前缀只用于分子（共价）化合物，见下文。"
            },
            {
              "type": "h2",
              "en": "Naming Binary Molecular Compounds",
              "zh": "二元分子化合物的命名"
            },
            {
              "type": "p",
              "en": "When two nonmetals bond, they share electrons and form a molecular compound. Here we cannot predict the ratio from charges, so we state it explicitly with Greek prefixes. Name the first element with a prefix (but drop \"mono-\" on the first element), then the second element with a prefix and an \"-ide\" ending.",
              "zh": "当两种非金属键合时，它们共用电子形成分子化合物。此时无法由电荷预测比例，因此用希腊数字前缀明确标出。第一个元素用前缀命名（但第一个元素省略 \"mono-\"），第二个元素用前缀加 \"-ide\" 词尾。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "1 = mono-, 2 = di-, 3 = tri-, 4 = tetra-, 5 = penta-, 6 = hexa-.",
                  "zh": "1 = mono-，2 = di-，3 = tri-，4 = tetra-，5 = penta-，6 = hexa-。"
                },
                {
                  "en": "$\\text{CO}$ = carbon monoxide, $\\text{CO}_2$ = carbon dioxide, $\\text{N}_2\\text{O}_4$ = dinitrogen tetroxide.",
                  "zh": "$\\text{CO}$ = carbon monoxide（一氧化碳），$\\text{CO}_2$ = carbon dioxide（二氧化碳），$\\text{N}_2\\text{O}_4$ = dinitrogen tetroxide（四氧化二氮）。"
                },
                {
                  "en": "For smoother pronunciation, \"a\" or \"o\" at the end of a prefix is often dropped before \"oxide\": \"tetraoxide\" becomes \"tetroxide,\" \"monooxide\" becomes \"monoxide.\"",
                  "zh": "为便于发音，前缀末尾的 \"a\" 或 \"o\" 在 \"oxide\" 前常省略：\"tetraoxide\" 变 \"tetroxide\"，\"monooxide\" 变 \"monoxide\"。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Naming Common Acids",
              "zh": "常见酸的命名"
            },
            {
              "type": "p",
              "en": "Acids are a special group of compounds that produce $\\text{H}^{+}$ ions in water; their formulas begin with H. The name depends on the anion attached to the hydrogen.",
              "zh": "酸是一类在水中产生 $\\text{H}^{+}$ 离子的特殊化合物，其化学式以 H 开头。名称取决于与氢结合的阴离子。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Anion ends in \"-ide\" → \"hydro-...-ic acid\": $\\text{HCl}$ is hydrochloric acid.",
                  "zh": "阴离子以 \"-ide\" 结尾 → \"hydro-...-ic acid\"：$\\text{HCl}$ 是 hydrochloric acid（盐酸）。"
                },
                {
                  "en": "Anion ends in \"-ate\" → \"...-ic acid\": $\\text{H}_2\\text{SO}_4$ (sulfate) is sulfuric acid; $\\text{HNO}_3$ (nitrate) is nitric acid.",
                  "zh": "阴离子以 \"-ate\" 结尾 → \"...-ic acid\"：$\\text{H}_2\\text{SO}_4$（硫酸根）是 sulfuric acid（硫酸）；$\\text{HNO}_3$（硝酸根）是 nitric acid（硝酸）。"
                },
                {
                  "en": "Anion ends in \"-ite\" → \"...-ous acid\": $\\text{HNO}_2$ (nitrite) is nitrous acid.",
                  "zh": "阴离子以 \"-ite\" 结尾 → \"...-ous acid\"：$\\text{HNO}_2$（亚硝酸根）是 nitrous acid（亚硝酸）。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Formula from a Name",
                "zh": "例题 1：由名称写化学式"
              },
              "problem": {
                "en": "Write the correct formula for iron(III) sulfate.",
                "zh": "写出 iron(III) sulfate（硫酸铁(III)）的正确化学式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Identify the two ions. The Roman numeral tells us iron is $\\text{Fe}^{3+}$. Sulfate is the polyatomic ion $\\text{SO}_4^{2-}$.",
                  "zh": "找出两种离子。罗马数字表明铁是 $\\text{Fe}^{3+}$。硫酸根是多原子离子 $\\text{SO}_4^{2-}$。"
                },
                {
                  "type": "p",
                  "en": "Criss-cross the charge magnitudes: the 3 from iron becomes the subscript of sulfate, and the 2 from sulfate becomes the subscript of iron.",
                  "zh": "交叉电荷的绝对值：铁的 3 成为硫酸根的下标，硫酸根的 2 成为铁的下标。"
                },
                {
                  "type": "math",
                  "tex": "\\text{Fe}^{3+}\\quad \\text{SO}_4^{2-}\\ \\longrightarrow\\ \\text{Fe}_2(\\text{SO}_4)_3"
                },
                {
                  "type": "p",
                  "en": "Because sulfate takes a subscript of 3, it must be wrapped in parentheses. Check neutrality: $2(+3) = +6$ and $3(-2) = -6$; they cancel, so $\\text{Fe}_2(\\text{SO}_4)_3$ is correct.",
                  "zh": "由于硫酸根的下标为 3，必须加括号。检验电中性：$2(+3) = +6$，$3(-2) = -6$，二者抵消，所以 $\\text{Fe}_2(\\text{SO}_4)_3$ 正确。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Name from a Formula",
                "zh": "例题 2：由化学式写名称"
              },
              "problem": {
                "en": "Name each compound: (a) $\\text{Cu}_2\\text{O}$, (b) $\\text{P}_2\\text{O}_5$.",
                "zh": "给下列化合物命名：(a) $\\text{Cu}_2\\text{O}$，(b) $\\text{P}_2\\text{O}_5$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Copper is a metal and oxygen a nonmetal, so this is ionic — use a Roman numeral. Oxygen is $\\text{O}^{2-}$, giving a total of $-2$. Two copper ions must supply $+2$ total, so each copper is $+1$: this is copper(I) oxide.",
                  "zh": "(a) 铜是金属，氧是非金属，所以这是离子化合物——用罗马数字。氧是 $\\text{O}^{2-}$，共 $-2$。两个铜离子必须共提供 $+2$，所以每个铜是 $+1$：这是 copper(I) oxide（氧化亚铜）。"
                },
                {
                  "type": "p",
                  "en": "(b) Phosphorus and oxygen are both nonmetals, so this is molecular — use Greek prefixes. Two phosphorus and five oxygen: diphosphorus pentoxide.",
                  "zh": "(b) 磷和氧都是非金属，所以是分子化合物——用希腊前缀。两个磷、五个氧：diphosphorus pentoxide（五氧化二磷）。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Based on its position in the periodic table, what charge will a calcium ion have?",
                "zh": "根据钙在周期表中的位置，钙离子会带什么电荷？"
              },
              "choices": [
                "$+2$",
                "$+1$",
                "$-2$",
                "$+3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Calcium is in Group 2, so it loses its two outer electrons to form $\\text{Ca}^{2+}$. Choosing $+1$ is the classic error of copying the alkali-metal (Group 1) behavior.",
                "zh": "钙在第 2 族，因此失去两个外层电子形成 $\\text{Ca}^{2+}$。选 $+1$ 是照搬碱金属（第 1 族）行为的典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the correct formula for aluminum oxide?",
                "zh": "aluminum oxide（氧化铝）的正确化学式是什么？"
              },
              "choices": [
                "$\\text{AlO}$",
                "$\\text{Al}_3\\text{O}_2$",
                "$\\text{Al}_2\\text{O}_3$",
                "$\\text{Al}_3\\text{O}_2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "With $\\text{Al}^{3+}$ and $\\text{O}^{2-}$, criss-cross gives $\\text{Al}_2\\text{O}_3$: two $\\text{Al}^{3+}$ ($+6$) balance three $\\text{O}^{2-}$ ($-6$). $\\text{AlO}$ would leave the charges unbalanced.",
                "zh": "$\\text{Al}^{3+}$ 与 $\\text{O}^{2-}$ 交叉得 $\\text{Al}_2\\text{O}_3$：两个 $\\text{Al}^{3+}$（$+6$）平衡三个 $\\text{O}^{2-}$（$-6$）。$\\text{AlO}$ 会使电荷不平衡。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which name correctly identifies the molecular compound $\\text{N}_2\\text{O}_3$?",
                "zh": "哪个名称正确标识分子化合物 $\\text{N}_2\\text{O}_3$？"
              },
              "choices": [
                "nitrogen oxide",
                "nitrate",
                "nitrogen(III) oxide",
                "dinitrogen trioxide"
              ],
              "answer": 3,
              "explanation": {
                "en": "Two nonmetals means Greek prefixes: two nitrogen (\"dinitrogen\") and three oxygen (\"trioxide\"). Roman numerals and prefix-free names are only for ionic compounds, and $\\text{N}_2\\text{O}_3$ has no metal.",
                "zh": "两种非金属要用希腊前缀：两个氮（\"dinitrogen\"）、三个氧（\"trioxide\"）。罗马数字和无前缀名称只用于离子化合物，而 $\\text{N}_2\\text{O}_3$ 不含金属。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A compound has the formula $\\text{Cr}_2(\\text{CO}_3)_3$. What is the charge on each chromium ion?",
                "zh": "某化合物的化学式为 $\\text{Cr}_2(\\text{CO}_3)_3$。每个铬离子的电荷是多少？"
              },
              "choices": [
                "$+2$",
                "$+3$",
                "$+6$",
                "$-2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Three carbonate ions ($\\text{CO}_3^{2-}$) give $3 \\times (-2) = -6$. Two chromium ions must supply $+6$ total, so each is $+3$: chromium(III). Answering $+6$ confuses the total charge with the per-ion charge.",
                "zh": "三个碳酸根离子（$\\text{CO}_3^{2-}$）共 $3 \\times (-2) = -6$。两个铬离子必须共提供 $+6$，所以每个是 $+3$：铬(III)。选 $+6$ 是把总电荷和单个离子电荷混淆了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In magnesium phosphate, $\\text{Mg}_3(\\text{PO}_4)_2$, how many oxygen atoms are in one formula unit? (Give a whole number.)",
                "zh": "在磷酸镁 $\\text{Mg}_3(\\text{PO}_4)_2$ 中，一个化学式单元含多少个氧原子？（填一个整数。）"
              },
              "answer": "8",
              "explanation": {
                "en": "The subscript 2 outside the parentheses multiplies everything inside: each phosphate has 4 oxygen, and there are 2 phosphates, so $4 \\times 2 = 8$ oxygen atoms.",
                "zh": "括号外的下标 2 乘以括号内的所有原子：每个磷酸根有 4 个氧，共 2 个磷酸根，所以 $4 \\times 2 = 8$ 个氧原子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "To name an ionic compound whose metal is a transition metal such as copper, you place a Roman numeral in parentheses that equals the ______ on the metal ion. (One word, in English.)",
                "zh": "给金属为过渡金属（如铜）的离子化合物命名时，要在括号中放一个罗马数字，它等于金属离子上的 ______。（填一个英文单词。）"
              },
              "answer": "charge",
              "explanation": {
                "en": "The Roman numeral states the ionic charge, which is needed because transition metals can form more than one charge (e.g. copper as $+1$ or $+2$).",
                "zh": "罗马数字表示离子电荷，之所以需要它，是因为过渡金属可形成不止一种电荷（如铜可为 $+1$ 或 $+2$）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Hydrochloric acid, $\\text{HCl}$, and nitric acid, $\\text{HNO}_3$, are named differently because…",
                "zh": "盐酸 $\\text{HCl}$ 和硝酸 $\\text{HNO}_3$ 命名不同，是因为……"
              },
              "choices": [
                "one is a strong acid and the other is weak",
                "they have the same anion",
                "nitric acid contains a metal",
                "chloride ends in \"-ide\" (giving \"hydro-...-ic\") while nitrate ends in \"-ate\" (giving \"...-ic\")"
              ],
              "answer": 3,
              "explanation": {
                "en": "An \"-ide\" anion gives the \"hydro-...-ic acid\" pattern (hydrochloric), while an \"-ate\" anion gives plain \"...-ic acid\" (nitric). The naming difference comes from the anion ending, not acid strength.",
                "zh": "以 \"-ide\" 结尾的阴离子给出 \"hydro-...-ic acid\" 模式（hydrochloric，盐酸），而以 \"-ate\" 结尾的阴离子给出 \"...-ic acid\"（nitric，硝酸）。命名差异来自阴离子词尾，而非酸的强弱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Ammonium nitrate is a common fertilizer built from the ammonium ion and the nitrate ion. Both ions carry a charge of magnitude 1, so they combine in a 1:1 ratio. How many nitrogen atoms are in one formula unit of ammonium nitrate? (Give a whole number.)",
                "zh": "硝酸铵是一种常见化肥，由铵根离子和硝酸根离子构成。两种离子的电荷大小都是 1，因此以 1:1 比例结合。一个化学式单元的硝酸铵含多少个氮原子？（填一个整数。）"
              },
              "answer": "2",
              "explanation": {
                "en": "The formula is $\\text{NH}_4\\text{NO}_3$: one nitrogen in the ammonium ion ($\\text{NH}_4^{+}$) plus one nitrogen in the nitrate ion ($\\text{NO}_3^{-}$) gives 2 nitrogen atoms total.",
                "zh": "化学式为 $\\text{NH}_4\\text{NO}_3$：铵根 $\\text{NH}_4^{+}$ 中一个氮加硝酸根 $\\text{NO}_3^{-}$ 中一个氮，共 2 个氮原子。"
              }
            }
          ]
        },
        {
          "id": "chemical-reactions-and-balancing",
          "title": "Chemical Reactions and Balancing Equations",
          "titleZh": "化学反应与配平方程式",
          "content": [
            {
              "type": "h2",
              "en": "Recognizing a Chemical Reaction",
              "zh": "识别化学反应"
            },
            {
              "type": "p",
              "en": "A chemical reaction rearranges atoms to form new substances. Because you cannot see atoms directly, chemists rely on observable evidence that a reaction has occurred.",
              "zh": "化学反应通过重新排列原子来生成新物质。由于无法直接看到原子，化学家依靠可观察的证据来判断反应是否发生。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A color change (e.g. a shiny nail turning orange-brown with rust).",
                  "zh": "颜色变化（如光亮的钉子生锈变成橙棕色）。"
                },
                {
                  "en": "Formation of a gas (bubbles) when no boiling is involved.",
                  "zh": "在没有沸腾的情况下产生气体（气泡）。"
                },
                {
                  "en": "Formation of a precipitate — an insoluble solid appearing when two solutions mix.",
                  "zh": "生成沉淀——两种溶液混合时出现不溶性固体。"
                },
                {
                  "en": "A temperature change: heat released (exothermic) or absorbed (endothermic).",
                  "zh": "温度变化：放热（放热反应）或吸热（吸热反应）。"
                },
                {
                  "en": "Emission of light, as in a glow stick or burning magnesium.",
                  "zh": "发光，如荧光棒或镁条燃烧。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: bubbles alone do not always mean a reaction. Boiling water bubbles vigorously, but that is a physical change — the escaping gas is still $\\text{H}_2\\text{O}$. Look for a NEW substance being formed before concluding a reaction happened.",
              "zh": "常见错误：仅有气泡并不总意味着发生了反应。沸水会剧烈冒泡，但那是物理变化——逸出的气体仍是 $\\text{H}_2\\text{O}$。在断定发生反应之前，要看是否生成了新物质。"
            },
            {
              "type": "h2",
              "en": "Reading and Writing Chemical Equations",
              "zh": "读写化学方程式"
            },
            {
              "type": "p",
              "en": "A chemical equation summarizes a reaction. Reactants (starting materials) are written on the left, an arrow ($\\rightarrow$, read \"yields\") points to the products on the right. State symbols in parentheses tell you the physical state of each species: $(s)$ solid, $(l)$ liquid, $(g)$ gas, and $(aq)$ aqueous — meaning dissolved in water.",
              "zh": "化学方程式概括一个反应。反应物（起始物质）写在左边，箭头（$\\rightarrow$，读作 \"yields/生成\"）指向右边的产物。括号中的状态符号说明每种物质的物理状态：$(s)$ 固态、$(l)$ 液态、$(g)$ 气态、$(aq)$ 水溶液——即溶解在水中。"
            },
            {
              "type": "math",
              "tex": "2\\,\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{H}_2\\text{O}(l)"
            },
            {
              "type": "p",
              "en": "The large numbers in front of formulas are coefficients; they tell you how many of each molecule or formula unit take part. Coefficients can be changed to balance an equation, but subscripts (the small numbers inside a formula) can NEVER be changed — changing a subscript would change the identity of the substance itself.",
              "zh": "化学式前的大数字是系数（coefficient），表示参与反应的每种分子或化学式单元的数量。系数可以调整以配平方程式，但下标（化学式内的小数字）绝不能改动——改下标会改变物质本身的性质。"
            },
            {
              "type": "h2",
              "en": "Balancing by Inspection: Conservation of Mass",
              "zh": "观察法配平：质量守恒"
            },
            {
              "type": "p",
              "en": "The law of conservation of mass says atoms are neither created nor destroyed in a reaction; they are only rearranged. Therefore each element must have the same number of atoms on both sides of the equation. Balancing means choosing coefficients that make the atom counts match.",
              "zh": "质量守恒定律指出，反应中原子既不会产生也不会消失，只会被重新排列。因此每种元素在方程式两边的原子数必须相同。配平就是选择合适的系数使两边原子数相等。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Balance one element at a time; leave hydrogen and oxygen for last, since they often appear in several compounds.",
                  "zh": "一次配平一种元素；把氢和氧留到最后，因为它们常出现在多种化合物中。"
                },
                {
                  "en": "If a polyatomic ion (like $\\text{SO}_4^{2-}$) stays intact through the reaction, balance it as a single unit.",
                  "zh": "如果某个多原子离子（如 $\\text{SO}_4^{2-}$）在反应中保持完整，就把它作为一个整体来配平。"
                },
                {
                  "en": "Adjust only coefficients, then recount every element. Finish by reducing coefficients to the smallest whole-number ratio.",
                  "zh": "只调整系数，然后重新数每种元素。最后把系数约成最小整数比。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Five Reaction Types",
              "zh": "五种反应类型"
            },
            {
              "type": "p",
              "en": "Classifying a reaction helps you predict its products. Almost every reaction in this course fits one of five patterns.",
              "zh": "对反应分类有助于预测产物。本课几乎所有反应都符合以下五种模式之一。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Synthesis (combination): two or more reactants join into one product. $\\text{A} + \\text{B} \\rightarrow \\text{AB}$, e.g. $2\\,\\text{Mg} + \\text{O}_2 \\rightarrow 2\\,\\text{MgO}$.",
                  "zh": "化合（合成）：两种或多种反应物结合成一种产物。$\\text{A} + \\text{B} \\rightarrow \\text{AB}$，如 $2\\,\\text{Mg} + \\text{O}_2 \\rightarrow 2\\,\\text{MgO}$。"
                },
                {
                  "en": "Decomposition: one reactant breaks into two or more products. $\\text{AB} \\rightarrow \\text{A} + \\text{B}$, e.g. $2\\,\\text{H}_2\\text{O} \\rightarrow 2\\,\\text{H}_2 + \\text{O}_2$.",
                  "zh": "分解：一种反应物分裂成两种或多种产物。$\\text{AB} \\rightarrow \\text{A} + \\text{B}$，如 $2\\,\\text{H}_2\\text{O} \\rightarrow 2\\,\\text{H}_2 + \\text{O}_2$。"
                },
                {
                  "en": "Single replacement: one element replaces another in a compound. $\\text{A} + \\text{BC} \\rightarrow \\text{AC} + \\text{B}$, e.g. $\\text{Zn} + 2\\,\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$.",
                  "zh": "置换（单置换）：一种元素替换化合物中的另一种元素。$\\text{A} + \\text{BC} \\rightarrow \\text{AC} + \\text{B}$，如 $\\text{Zn} + 2\\,\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$。"
                },
                {
                  "en": "Double replacement: two compounds swap partners. $\\text{AB} + \\text{CD} \\rightarrow \\text{AD} + \\text{CB}$, e.g. $\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl} + \\text{NaNO}_3$.",
                  "zh": "复分解（双置换）：两种化合物交换组分。$\\text{AB} + \\text{CD} \\rightarrow \\text{AD} + \\text{CB}$，如 $\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl} + \\text{NaNO}_3$。"
                },
                {
                  "en": "Combustion: a fuel (usually a hydrocarbon) reacts with $\\text{O}_2$ to give $\\text{CO}_2$ and $\\text{H}_2\\text{O}$, e.g. $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$.",
                  "zh": "燃烧：燃料（通常是碳氢化合物）与 $\\text{O}_2$ 反应生成 $\\text{CO}_2$ 和 $\\text{H}_2\\text{O}$，如 $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Activity Series for Single Replacement",
              "zh": "置换反应的活动性顺序"
            },
            {
              "type": "p",
              "en": "A single-replacement reaction only occurs if the lone element is more reactive than the element it is trying to replace. The activity series ranks metals from most to least reactive: a metal higher on the list will displace any metal below it from a compound. For example, zinc is above copper, so $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$ proceeds — but copper sits below zinc, so it cannot displace zinc, and $\\text{Cu} + \\text{ZnSO}_4$ gives no reaction.",
              "zh": "置换反应只有在单质比它想替换的元素更活泼时才发生。活动性顺序把金属从最活泼到最不活泼排列：排在前面的金属能把排在后面的金属从化合物中置换出来。例如锌在铜之前，所以 $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$ 能进行——但铜排在锌之后，无法置换锌，所以 $\\text{Cu} + \\text{ZnSO}_4$ 不反应。"
            },
            {
              "type": "h2",
              "en": "Solubility Rules and Net Ionic Equations",
              "zh": "溶解度规则与净离子方程式"
            },
            {
              "type": "p",
              "en": "Double-replacement reactions in water typically \"go\" only when they form a product that leaves the solution — most often an insoluble solid (a precipitate). Solubility rules predict which ionic compounds dissolve.",
              "zh": "水溶液中的复分解反应通常只有生成脱离溶液的产物时才 \"进行\"——最常见的是不溶性固体（沉淀）。溶解度规则可预测哪些离子化合物能溶解。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Almost always soluble: compounds of Group 1 metals and ammonium ($\\text{NH}_4^{+}$); all nitrates ($\\text{NO}_3^{-}$).",
                  "zh": "几乎总是可溶：第 1 族金属和铵根（$\\text{NH}_4^{+}$）的化合物；所有硝酸盐（$\\text{NO}_3^{-}$）。"
                },
                {
                  "en": "Usually soluble but with exceptions: chlorides (except $\\text{AgCl}$, $\\text{PbCl}_2$) and sulfates (except $\\text{BaSO}_4$, $\\text{PbSO}_4$).",
                  "zh": "通常可溶但有例外：氯化物（除 $\\text{AgCl}$、$\\text{PbCl}_2$ 外）和硫酸盐（除 $\\text{BaSO}_4$、$\\text{PbSO}_4$ 外）。"
                },
                {
                  "en": "Usually insoluble: most carbonates ($\\text{CO}_3^{2-}$), phosphates ($\\text{PO}_4^{3-}$), and hydroxides ($\\text{OH}^{-}$).",
                  "zh": "通常不溶：大多数碳酸盐（$\\text{CO}_3^{2-}$）、磷酸盐（$\\text{PO}_4^{3-}$）和氢氧化物（$\\text{OH}^{-}$）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "When soluble ionic compounds dissolve, they separate into free ions floating in the water. Ions that appear unchanged on both sides of the equation are called spectator ions — they do not participate. Removing the spectators leaves the net ionic equation, which shows only the particles that actually combine.",
              "zh": "可溶离子化合物溶解时会分解为在水中自由漂浮的离子。在方程式两边都原样出现的离子称为旁观离子——它们不参与反应。去掉旁观离子后剩下的就是净离子方程式，只显示真正结合的粒子。"
            },
            {
              "type": "math",
              "tex": "\\text{Ag}^{+}(aq) + \\text{Cl}^{-}(aq) \\rightarrow \\text{AgCl}(s)"
            },
            {
              "type": "note",
              "en": "Exam tip: only split compounds labeled $(aq)$ into ions. Solids $(s)$, liquids $(l)$, and gases $(g)$ stay written as whole formulas in an ionic equation. Writing $\\text{AgCl}$ as separate ions is a very common error — it is a solid precipitate, so it stays together.",
              "zh": "考试提示：只把标为 $(aq)$ 的化合物拆成离子。固体 $(s)$、液体 $(l)$ 和气体 $(g)$ 在离子方程式中仍写成完整化学式。把 $\\text{AgCl}$ 拆成离子是很常见的错误——它是固体沉淀，应保持整体。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Balancing a Combustion Reaction",
                "zh": "例题 1：配平燃烧反应"
              },
              "problem": {
                "en": "Balance the combustion of propane: $\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$.",
                "zh": "配平丙烷的燃烧：$\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Balance carbon first: 3 carbons on the left need 3 $\\text{CO}_2$ on the right. Then balance hydrogen: 8 hydrogens need 4 $\\text{H}_2\\text{O}$.",
                  "zh": "先配碳：左边 3 个碳，右边需要 3 个 $\\text{CO}_2$。再配氢：8 个氢需要 4 个 $\\text{H}_2\\text{O}$。"
                },
                {
                  "type": "p",
                  "en": "Now count oxygen on the right: $3 \\times 2 = 6$ from $\\text{CO}_2$ plus $4 \\times 1 = 4$ from water gives 10 oxygen atoms. Since $\\text{O}_2$ supplies 2 at a time, we need 5 $\\text{O}_2$.",
                  "zh": "现在数右边的氧：$\\text{CO}_2$ 提供 $3 \\times 2 = 6$，水提供 $4 \\times 1 = 4$，共 10 个氧原子。由于 $\\text{O}_2$ 每次提供 2 个，需要 5 个 $\\text{O}_2$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}"
                },
                {
                  "type": "p",
                  "en": "Final check: C is 3 = 3, H is 8 = 8, O is 10 = 10. The equation is balanced.",
                  "zh": "最终检查：碳 3 = 3，氢 8 = 8，氧 10 = 10。方程式已配平。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Predicting a Precipitate and the Net Ionic Equation",
                "zh": "例题 2：预测沉淀与净离子方程式"
              },
              "problem": {
                "en": "Solutions of lead(II) nitrate, $\\text{Pb(NO}_3)_2$, and potassium iodide, $\\text{KI}$, are mixed. Predict the products, decide whether a precipitate forms, and write the net ionic equation. (Lead(II) iodide is insoluble.)",
                "zh": "把硝酸铅(II) $\\text{Pb(NO}_3)_2$ 溶液与碘化钾 $\\text{KI}$ 溶液混合。预测产物，判断是否生成沉淀，并写出净离子方程式。（碘化铅(II)不溶。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This is double replacement, so the cations swap anions. The products are $\\text{PbI}_2$ and $\\text{KNO}_3$.",
                  "zh": "这是复分解反应，阳离子交换阴离子。产物是 $\\text{PbI}_2$ 和 $\\text{KNO}_3$。"
                },
                {
                  "type": "p",
                  "en": "By the solubility rules, potassium nitrate is soluble (Group 1 and nitrate), but lead(II) iodide is insoluble — it precipitates as a bright yellow solid. The balanced full equation is $\\text{Pb(NO}_3)_2(aq) + 2\\,\\text{KI}(aq) \\rightarrow \\text{PbI}_2(s) + 2\\,\\text{KNO}_3(aq)$.",
                  "zh": "根据溶解度规则，硝酸钾可溶（第 1 族且是硝酸盐），但碘化铅(II)不溶——它以亮黄色固体析出。配平的完整方程式为 $\\text{Pb(NO}_3)_2(aq) + 2\\,\\text{KI}(aq) \\rightarrow \\text{PbI}_2(s) + 2\\,\\text{KNO}_3(aq)$。"
                },
                {
                  "type": "p",
                  "en": "The potassium and nitrate ions are spectators (they stay $(aq)$ on both sides). Removing them leaves the net ionic equation:",
                  "zh": "钾离子和硝酸根离子是旁观离子（两边都保持 $(aq)$）。去掉它们后得到净离子方程式："
                },
                {
                  "type": "math",
                  "tex": "\\text{Pb}^{2+}(aq) + 2\\,\\text{I}^{-}(aq) \\rightarrow \\text{PbI}_2(s)"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which observation is the LEAST reliable evidence that a chemical reaction has occurred?",
                "zh": "哪个现象是发生化学反应的最不可靠证据？"
              },
              "choices": [
                "A precipitate forms",
                "Bubbles appear as water is heated to boiling",
                "A solution changes from colorless to deep blue",
                "A test tube becomes noticeably warm"
              ],
              "answer": 1,
              "explanation": {
                "en": "Bubbles from boiling water are just a physical state change — the gas is still $\\text{H}_2\\text{O}$. A precipitate, a color change, and a temperature change all point to new substances forming.",
                "zh": "沸水产生的气泡只是物理状态变化——气体仍是 $\\text{H}_2\\text{O}$。沉淀、颜色变化和温度变化都表明生成了新物质。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When balancing $\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$, a student changes the formula to $\\text{H}_2\\text{O}_2$ to balance the oxygen. Why is this wrong?",
                "zh": "在配平 $\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$ 时，一名学生把化学式改成 $\\text{H}_2\\text{O}_2$ 来平衡氧。为什么这是错的？"
              },
              "choices": [
                "Coefficients cannot be fractions",
                "Changing a subscript changes the substance into a different compound (hydrogen peroxide)",
                "Oxygen does not need to be balanced",
                "The arrow should point the other way"
              ],
              "answer": 1,
              "explanation": {
                "en": "You may only change coefficients, never subscripts. $\\text{H}_2\\text{O}_2$ is hydrogen peroxide, a completely different substance from water. The correct balance is $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$.",
                "zh": "只能改系数，绝不能改下标。$\\text{H}_2\\text{O}_2$ 是过氧化氢，与水完全不同。正确配平为 $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Balance the equation $\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$. What is the coefficient in front of $\\text{O}_2$? (Give a whole number.)",
                "zh": "配平方程式 $\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$。$\\text{O}_2$ 前的系数是多少？（填一个整数。）"
              },
              "answer": "3",
              "explanation": {
                "en": "The balanced equation is $4\\,\\text{Al} + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{Al}_2\\text{O}_3$. The right side has $2 \\times 3 = 6$ oxygen atoms, so $\\text{O}_2$ needs a coefficient of 3 to supply 6 oxygen atoms.",
                "zh": "配平后的方程式为 $4\\,\\text{Al} + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{Al}_2\\text{O}_3$。右边有 $2 \\times 3 = 6$ 个氧原子，所以 $\\text{O}_2$ 需要系数 3 来提供 6 个氧原子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What type of reaction is $2\\,\\text{KClO}_3 \\rightarrow 2\\,\\text{KCl} + 3\\,\\text{O}_2$?",
                "zh": "$2\\,\\text{KClO}_3 \\rightarrow 2\\,\\text{KCl} + 3\\,\\text{O}_2$ 属于哪种反应类型？"
              },
              "choices": [
                "Synthesis",
                "Single replacement",
                "Decomposition",
                "Combustion"
              ],
              "answer": 2,
              "explanation": {
                "en": "One reactant breaks apart into two products, which is the signature of a decomposition reaction. Synthesis is the reverse (many into one).",
                "zh": "一种反应物分裂成两种产物，这是分解反应的标志。化合反应正相反（多合一）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Using the activity series (Zn is more reactive than Cu, which is more reactive than Ag), which reaction will actually occur?",
                "zh": "利用活动性顺序（锌比铜活泼，铜比银活泼），哪个反应实际会发生？"
              },
              "choices": [
                "$\\text{Ag} + \\text{Cu(NO}_3)_2 \\rightarrow$ reaction",
                "$\\text{Cu} + \\text{ZnSO}_4 \\rightarrow$ reaction",
                "$\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$",
                "All three occur"
              ],
              "answer": 2,
              "explanation": {
                "en": "A single replacement proceeds only when the free metal is more reactive than the one in the compound. Zinc is above copper, so it displaces copper. Silver (below copper) and copper (below zinc) cannot displace the metals in their compounds.",
                "zh": "置换反应只有当单质金属比化合物中的金属更活泼时才进行。锌在铜之前，所以能置换铜。银（在铜之后）和铜（在锌之后）无法置换各自化合物中的金属。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the reaction $\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\,\\text{NaCl}(aq)$, which element's ion is a spectator ion along with chloride? Give the element symbol.",
                "zh": "在反应 $\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\,\\text{NaCl}(aq)$ 中，除氯离子外，哪种元素的离子是旁观离子？请填元素符号。"
              },
              "answer": "Na",
              "accept": [
                "sodium",
                "Sodium"
              ],
              "explanation": {
                "en": "Sodium ($\\text{Na}^{+}$) and chloride ($\\text{Cl}^{-}$) stay dissolved and unchanged on both sides, so both are spectators. The net ionic equation is $\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$.",
                "zh": "钠离子（$\\text{Na}^{+}$）和氯离子（$\\text{Cl}^{-}$）在两边都保持溶解且不变，所以都是旁观离子。净离子方程式为 $\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two clear solutions are mixed. Using the solubility rules, which pair will produce a precipitate?",
                "zh": "把两种澄清溶液混合。根据溶解度规则，哪一对会产生沉淀？"
              },
              "choices": [
                "$\\text{NaCl} + \\text{KNO}_3$",
                "$\\text{AgNO}_3 + \\text{NaCl}$",
                "$\\text{KNO}_3 + \\text{NH}_4\\text{Cl}$",
                "$\\text{NaNO}_3 + \\text{K}_2\\text{SO}_4$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Swapping partners in $\\text{AgNO}_3 + \\text{NaCl}$ gives $\\text{AgCl}$, which is one of the insoluble chloride exceptions — it precipitates. The other mixtures produce only soluble Group 1 and nitrate compounds, so no solid forms.",
                "zh": "$\\text{AgNO}_3 + \\text{NaCl}$ 交换组分生成 $\\text{AgCl}$，它是不溶的氯化物例外之一——会析出沉淀。其他混合物只生成可溶的第 1 族和硝酸盐化合物，不产生固体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Balance the synthesis reaction $\\text{N}_2 + \\text{H}_2 \\rightarrow \\text{NH}_3$ (the industrial production of ammonia). What is the coefficient in front of $\\text{H}_2$? (Give a whole number.)",
                "zh": "配平化合反应 $\\text{N}_2 + \\text{H}_2 \\rightarrow \\text{NH}_3$（工业制氨）。$\\text{H}_2$ 前的系数是多少？（填一个整数。）"
              },
              "answer": "3",
              "explanation": {
                "en": "The balanced equation is $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$: 2 nitrogen atoms on each side, and $3 \\times 2 = 6$ hydrogen atoms matching $2 \\times 3 = 6$ in the ammonia.",
                "zh": "配平后的方程式为 $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$：两边各 2 个氮原子，$3 \\times 2 = 6$ 个氢原子与氨中的 $2 \\times 3 = 6$ 相匹配。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "stoichiometry",
      "title": "Unit 5: Stoichiometry",
      "titleZh": "第五单元：化学计量",
      "lessons": [
        {
          "id": "the-mole-and-molar-mass",
          "title": "The Mole, Molar Mass, and Chemical Quantities",
          "titleZh": "摩尔、摩尔质量与化学计量",
          "content": [
            {
              "type": "h2",
              "en": "Counting Atoms by Weighing: The Mole",
              "zh": "通过称重来数原子：摩尔"
            },
            {
              "type": "p",
              "en": "Atoms are far too small and too numerous to count one at a time. Chemists solve this with a counting unit called the mole. Just as \"a dozen\" always means 12 items, \"a mole\" always means the same very large number of particles, so we can count particles by weighing a sample.",
              "zh": "原子太小、数量太多，无法逐个计数。化学家用一个叫做“摩尔”的计量单位来解决这个问题。就像“一打”总是指 12 个一样，“一摩尔”总是指同样一个巨大数目的粒子，因此我们可以通过称量样品来数粒子。"
            },
            {
              "type": "p",
              "en": "One mole is defined as $6.022 \\times 10^{23}$ particles. This value is called Avogadro's number, $N_A$. The particles may be atoms, molecules, formula units, ions, or even electrons — you must always state what you are counting.",
              "zh": "一摩尔定义为 $6.022 \\times 10^{23}$ 个粒子。这个数值称为阿伏伽德罗常数 $N_A$。这些粒子可以是原子、分子、化学式单元、离子甚至电子——你必须始终说明你在数的是什么。"
            },
            {
              "type": "math",
              "tex": "N_A = 6.022 \\times 10^{23}\\ \\text{particles/mol}"
            },
            {
              "type": "h3",
              "en": "Molar Mass from the Periodic Table",
              "zh": "从周期表得到摩尔质量"
            },
            {
              "type": "p",
              "en": "The molar mass is the mass in grams of one mole of a substance, in units of $\\text{g/mol}$. For an element it equals the atomic mass listed on the periodic table. For a compound, add the molar masses of every atom in the formula.",
              "zh": "摩尔质量是一摩尔物质的质量（以克计），单位为 $\\text{g/mol}$。对于单质，它等于周期表上列出的原子质量。对于化合物，把化学式中每个原子的摩尔质量相加即可。"
            },
            {
              "type": "p",
              "en": "For example, water $\\text{H}_2\\text{O}$ contains two hydrogen atoms ($2 \\times 1.008$) and one oxygen atom ($16.00$), giving $18.02\\ \\text{g/mol}$. This single number links the mass you can weigh to the number of particles you cannot see.",
              "zh": "例如，水 $\\text{H}_2\\text{O}$ 含有两个氢原子（$2 \\times 1.008$）和一个氧原子（$16.00$），共 $18.02\\ \\text{g/mol}$。这个数把你能称量的质量与你看不见的粒子数目联系起来。"
            },
            {
              "type": "h3",
              "en": "The Mole Map: Grams, Moles, and Particles",
              "zh": "摩尔换算图：克、摩尔与粒子"
            },
            {
              "type": "p",
              "en": "Three quantities are connected through the mole. To move between them, multiply by the right conversion factor so unwanted units cancel — the same dimensional analysis you already know.",
              "zh": "三个量通过摩尔联系在一起。要在它们之间转换，就乘以合适的换算因子使不需要的单位相消——正是你已经掌握的量纲分析。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Grams $\\leftrightarrow$ moles: divide by molar mass to get moles; multiply by molar mass to get grams.",
                  "zh": "克 $\\leftrightarrow$ 摩尔：除以摩尔质量得到摩尔；乘以摩尔质量得到克。"
                },
                {
                  "en": "Moles $\\leftrightarrow$ particles: multiply by $N_A$ to get particles; divide by $N_A$ to get moles.",
                  "zh": "摩尔 $\\leftrightarrow$ 粒子：乘以 $N_A$ 得到粒子数；除以 $N_A$ 得到摩尔。"
                },
                {
                  "en": "To go from grams to particles you must pass through moles — moles is always the hub in the middle.",
                  "zh": "从克到粒子数必须经过摩尔——摩尔永远是中间的枢纽。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: trying to convert grams directly to atoms in one step. Grams and particles are never directly proportional; you must always stop at moles first. Set up the map as grams $\\to$ mol $\\to$ particles.",
              "zh": "常见错误：想一步把克直接换算成原子数。克和粒子数从不直接成正比；你必须先停在摩尔。把换算路线写成 克 $\\to$ 摩尔 $\\to$ 粒子数。"
            },
            {
              "type": "h2",
              "en": "Percent Composition and Formulas",
              "zh": "质量百分组成与化学式"
            },
            {
              "type": "p",
              "en": "The percent composition by mass tells what fraction of a compound's mass comes from each element. For any element in a compound:",
              "zh": "质量百分组成告诉我们化合物的质量中有多少来自每种元素。对化合物中的任一元素："
            },
            {
              "type": "math",
              "tex": "\\%\\ \\text{element} = \\frac{\\text{mass of that element in 1 mol}}{\\text{molar mass of compound}} \\times 100\\%"
            },
            {
              "type": "h3",
              "en": "Empirical vs. Molecular Formulas",
              "zh": "实验式与分子式"
            },
            {
              "type": "p",
              "en": "The empirical formula gives the smallest whole-number ratio of atoms (for example $\\text{CH}_2\\text{O}$). The molecular formula gives the actual number of atoms per molecule (for example glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6$). The molecular formula is always a whole-number multiple of the empirical formula.",
              "zh": "实验式给出原子的最小整数比（例如 $\\text{CH}_2\\text{O}$）。分子式给出每个分子中原子的实际数目（例如葡萄糖 $\\text{C}_6\\text{H}_{12}\\text{O}_6$）。分子式总是实验式的整数倍。"
            },
            {
              "type": "p",
              "en": "To find an empirical formula from data: assume $100\\ \\text{g}$ so percents become grams, convert each element's mass to moles, then divide every mole value by the smallest one. If a ratio comes out near $1.5$, multiply all subscripts by 2 to reach whole numbers.",
              "zh": "从数据求实验式：假设有 $100\\ \\text{g}$ 使百分比变成克，把每种元素的质量换算成摩尔，然后把每个摩尔值都除以其中最小的那个。若某个比值接近 $1.5$，就把所有下标乘以 2 得到整数。"
            },
            {
              "type": "p",
              "en": "To find a molecular formula, first get the empirical formula and its mass, then divide the known molar mass by the empirical mass to find the whole-number multiple $n$, and multiply every subscript by $n$.",
              "zh": "求分子式时，先求出实验式及其式量，然后用已知的摩尔质量除以实验式量得到整数倍 $n$，再把每个下标乘以 $n$。"
            },
            {
              "type": "note",
              "en": "Exam tip: never round mole ratios too early. A value of $2.33$ is really $7/3$, so multiply by 3 (not 2) to clear it. Rounding $2.33$ down to $2$ is a very common error that changes the formula.",
              "zh": "考试提示：不要过早对摩尔比取整。$2.33$ 实际上是 $7/3$，所以要乘以 3（而不是 2）才能化为整数。把 $2.33$ 直接舍成 $2$ 是很常见的错误，会改变化学式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Grams to Particles",
                "zh": "例题 1：克换算成粒子数"
              },
              "problem": {
                "en": "How many oxygen atoms are in $36.0\\ \\text{g}$ of water, $\\text{H}_2\\text{O}$? (Molar mass $= 18.02\\ \\text{g/mol}$.)",
                "zh": "$36.0\\ \\text{g}$ 水 $\\text{H}_2\\text{O}$ 中含有多少个氧原子？（摩尔质量 $= 18.02\\ \\text{g/mol}$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First convert grams of water to moles of water:",
                  "zh": "先把水的克数换算成水的摩尔数："
                },
                {
                  "type": "math",
                  "tex": "36.0\\ \\text{g} \\times \\frac{1\\ \\text{mol}}{18.02\\ \\text{g}} = 2.00\\ \\text{mol}\\ \\text{H}_2\\text{O}"
                },
                {
                  "type": "p",
                  "en": "Each water molecule has 1 oxygen atom, so moles of O equal moles of water. Now multiply by Avogadro's number:",
                  "zh": "每个水分子有 1 个氧原子，所以氧的摩尔数等于水的摩尔数。再乘以阿伏伽德罗常数："
                },
                {
                  "type": "math",
                  "tex": "2.00\\ \\text{mol} \\times \\frac{6.022 \\times 10^{23}\\ \\text{atoms}}{1\\ \\text{mol}} = 1.20 \\times 10^{24}\\ \\text{O atoms}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Empirical and Molecular Formula",
                "zh": "例题 2：实验式与分子式"
              },
              "problem": {
                "en": "A compound is $40.0\\%$ C, $6.71\\%$ H, and $53.3\\%$ O by mass, with a molar mass of $180.\\ \\text{g/mol}$. Find its empirical and molecular formulas.",
                "zh": "某化合物质量组成为 $40.0\\%$ C、$6.71\\%$ H、$53.3\\%$ O，摩尔质量为 $180.\\ \\text{g/mol}$。求其实验式和分子式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Assume $100\\ \\text{g}$, so the percents become grams. Convert each to moles:",
                  "zh": "假设有 $100\\ \\text{g}$，百分比就变成克。分别换算成摩尔："
                },
                {
                  "type": "math",
                  "tex": "\\text{C}: \\frac{40.0}{12.01}=3.33,\\quad \\text{H}: \\frac{6.71}{1.008}=6.66,\\quad \\text{O}: \\frac{53.3}{16.00}=3.33"
                },
                {
                  "type": "p",
                  "en": "Divide each by the smallest ($3.33$): C $= 1$, H $= 2$, O $= 1$. The empirical formula is $\\text{CH}_2\\text{O}$, with empirical mass $30.03\\ \\text{g/mol}$.",
                  "zh": "各除以最小值（$3.33$）：C $= 1$，H $= 2$，O $= 1$。实验式为 $\\text{CH}_2\\text{O}$，实验式量为 $30.03\\ \\text{g/mol}$。"
                },
                {
                  "type": "math",
                  "tex": "n = \\frac{180.}{30.03} \\approx 6,\\quad \\text{so the molecular formula is } \\text{C}_6\\text{H}_{12}\\text{O}_6"
                },
                {
                  "type": "p",
                  "en": "Multiplying every subscript by 6 gives glucose, $\\text{C}_6\\text{H}_{12}\\text{O}_6$.",
                  "zh": "把每个下标乘以 6 得到葡萄糖 $\\text{C}_6\\text{H}_{12}\\text{O}_6$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which quantity is equal to Avogadro's number, $6.022 \\times 10^{23}$?",
                "zh": "下列哪个量等于阿伏伽德罗常数 $6.022 \\times 10^{23}$？"
              },
              "choices": [
                "The mass of one mole of carbon",
                "The number of particles in one mole",
                "The molar mass of any element",
                "The number of grams in one mole of water"
              ],
              "answer": 1,
              "explanation": {
                "en": "Avogadro's number is a count — the number of particles in exactly one mole. Choices about mass ($\\text{g}$ or $\\text{g/mol}$) confuse the count of particles with the mass of a mole.",
                "zh": "阿伏伽德罗常数是一个计数——恰好一摩尔中的粒子数。关于质量（$\\text{g}$ 或 $\\text{g/mol}$）的选项把粒子数与一摩尔的质量混为一谈。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the molar mass of calcium carbonate, $\\text{CaCO}_3$? (Ca $= 40.08$, C $= 12.01$, O $= 16.00$)",
                "zh": "碳酸钙 $\\text{CaCO}_3$ 的摩尔质量是多少？（Ca $= 40.08$，C $= 12.01$，O $= 16.00$）"
              },
              "choices": [
                "$68.09\\ \\text{g/mol}$",
                "$84.09\\ \\text{g/mol}$",
                "$100.09\\ \\text{g/mol}$",
                "$116.09\\ \\text{g/mol}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$40.08 + 12.01 + 3(16.00) = 100.09\\ \\text{g/mol}$. A tempting error is to count only one oxygen ($68.09$) instead of the three shown by the subscript.",
                "zh": "$40.08 + 12.01 + 3(16.00) = 100.09\\ \\text{g/mol}$。一个诱人的错误是只算一个氧（$68.09$），而不是下标所示的三个。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many moles are in $88.0\\ \\text{g}$ of carbon dioxide, $\\text{CO}_2$ (molar mass $44.01\\ \\text{g/mol}$)? Give your answer to 2 significant figures.",
                "zh": "$88.0\\ \\text{g}$ 二氧化碳 $\\text{CO}_2$（摩尔质量 $44.01\\ \\text{g/mol}$）中有多少摩尔？答案保留 2 位有效数字。"
              },
              "answer": "2.0",
              "accept": [
                "2",
                "2.00"
              ],
              "explanation": {
                "en": "Divide mass by molar mass: $88.0 / 44.01 = 2.00\\ \\text{mol}$. Multiplying instead of dividing is the usual slip.",
                "zh": "用质量除以摩尔质量：$88.0 / 44.01 = 2.00\\ \\text{mol}$。用乘法而不是除法是常见的失误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To convert a mass in grams to a number of molecules, the correct order of steps is:",
                "zh": "要把以克为单位的质量换算成分子数，正确的步骤顺序是："
              },
              "choices": [
                "grams $\\to$ molecules directly",
                "grams $\\to$ moles $\\to$ molecules",
                "grams $\\to$ molecules $\\to$ moles",
                "moles $\\to$ grams $\\to$ molecules"
              ],
              "answer": 1,
              "explanation": {
                "en": "Moles is the required hub: divide by molar mass to reach moles, then multiply by $N_A$. Grams and molecules are never directly proportional, so the one-step choice fails.",
                "zh": "摩尔是必经的枢纽：先除以摩尔质量得到摩尔，再乘以 $N_A$。克和分子数从不直接成正比，所以一步换算的选项是错的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the mass percent of nitrogen in ammonia, $\\text{NH}_3$ (N $= 14.01$, H $= 1.008$, molar mass $17.03\\ \\text{g/mol}$)? Give the answer as a percent to 1 decimal place, e.g. 82.3",
                "zh": "氨 $\\text{NH}_3$ 中氮的质量百分比是多少（N $= 14.01$，H $= 1.008$，摩尔质量 $17.03\\ \\text{g/mol}$）？以百分数形式作答，保留 1 位小数，例如 82.3"
              },
              "answer": "82.3",
              "accept": [
                "82.3%",
                "82.2"
              ],
              "explanation": {
                "en": "$\\frac{14.01}{17.03} \\times 100\\% = 82.3\\%$. A common error is dividing by the mass of hydrogen instead of the total molar mass.",
                "zh": "$\\frac{14.01}{17.03} \\times 100\\% = 82.3\\%$。常见错误是除以氢的质量而不是总摩尔质量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A compound has the empirical formula $\\text{CH}_2$ (empirical mass $14.03\\ \\text{g/mol}$) and a molar mass of $56.11\\ \\text{g/mol}$. What is its molecular formula?",
                "zh": "某化合物实验式为 $\\text{CH}_2$（实验式量 $14.03\\ \\text{g/mol}$），摩尔质量为 $56.11\\ \\text{g/mol}$。它的分子式是什么？"
              },
              "choices": [
                "$\\text{CH}_2$",
                "$\\text{C}_2\\text{H}_4$",
                "$\\text{C}_3\\text{H}_6$",
                "$\\text{C}_4\\text{H}_8$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$n = 56.11 / 14.03 = 4$, so multiply subscripts by 4 to get $\\text{C}_4\\text{H}_8$. Choosing $\\text{C}_2\\text{H}_4$ comes from dividing incorrectly and getting $n = 2$.",
                "zh": "$n = 56.11 / 14.03 = 4$，所以把下标乘以 4 得到 $\\text{C}_4\\text{H}_8$。选 $\\text{C}_2\\text{H}_4$ 是因为除错得到 $n = 2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $100.\\ \\text{g}$ sample of an oxide of iron contains $69.9\\ \\text{g}$ Fe and $30.1\\ \\text{g}$ O. In the empirical formula, how many oxygen atoms accompany every 2 iron atoms? (Fe $= 55.85$, O $= 16.00$. Give a whole number.)",
                "zh": "一份 $100.\\ \\text{g}$ 的铁的氧化物含 $69.9\\ \\text{g}$ Fe 和 $30.1\\ \\text{g}$ O。在实验式中，每 2 个铁原子对应多少个氧原子？（Fe $= 55.85$，O $= 16.00$。填一个整数。）"
              },
              "answer": "3",
              "accept": [],
              "explanation": {
                "en": "Fe: $69.9/55.85 = 1.25$; O: $30.1/16.00 = 1.88$. Dividing by $1.25$ gives Fe $= 1$, O $= 1.5$; multiply by 2 to get $\\text{Fe}_2\\text{O}_3$, so 3 oxygen atoms per 2 iron. Rounding $1.5$ down to $1$ would wrongly give FeO.",
                "zh": "Fe：$69.9/55.85 = 1.25$；O：$30.1/16.00 = 1.88$。除以 $1.25$ 得 Fe $= 1$、O $= 1.5$；乘以 2 得到 $\\text{Fe}_2\\text{O}_3$，即每 2 个铁对应 3 个氧。把 $1.5$ 舍成 $1$ 会错误地得到 FeO。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which sample contains the greatest number of atoms?",
                "zh": "下列哪个样品含有的原子数最多？"
              },
              "choices": [
                "$1\\ \\text{mol}$ of $\\text{He}$",
                "$1\\ \\text{mol}$ of $\\text{O}_2$",
                "$1\\ \\text{mol}$ of $\\text{CO}_2$",
                "$1\\ \\text{mol}$ of $\\text{Ne}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Each sample has the same number of molecules, but atoms per unit differ: He (1), $\\text{O}_2$ (2), $\\text{CO}_2$ (3), Ne (1). So $\\text{CO}_2$ has the most atoms. The trap is assuming equal moles always means equal atoms — that is only true of molecules, not atoms.",
                "zh": "每个样品的分子数相同，但每个单元含的原子数不同：He（1）、$\\text{O}_2$（2）、$\\text{CO}_2$（3）、Ne（1）。所以 $\\text{CO}_2$ 的原子数最多。陷阱在于以为摩尔数相同就等于原子数相同——那只对分子成立，对原子不成立。"
              }
            }
          ]
        },
        {
          "id": "stoichiometry-calculations",
          "title": "Stoichiometry: Mass and Mole Calculations",
          "titleZh": "化学计量计算：质量与摩尔",
          "content": [
            {
              "type": "h2",
              "en": "Reading a Balanced Equation as a Recipe",
              "zh": "把配平的方程式读作配方"
            },
            {
              "type": "p",
              "en": "A balanced chemical equation is a recipe written in particles. The coefficients tell you the ratio in which substances react and form. Because the same ratio holds for moles, coefficients let us predict exactly how much product a given amount of reactant can make.",
              "zh": "一个配平的化学方程式是用粒子写成的配方。系数告诉你各物质反应和生成的比例。由于这个比例对摩尔同样成立，系数让我们能精确预测一定量反应物能生成多少产物。"
            },
            {
              "type": "p",
              "en": "Consider the formation of ammonia. The coefficients $1, 3, 2$ mean 1 mole of nitrogen reacts with 3 moles of hydrogen to make 2 moles of ammonia.",
              "zh": "以氨的合成为例。系数 $1, 3, 2$ 表示 1 摩尔氮气与 3 摩尔氢气反应生成 2 摩尔氨气。"
            },
            {
              "type": "math",
              "tex": "\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"
            },
            {
              "type": "h3",
              "en": "Mole Ratios",
              "zh": "摩尔比"
            },
            {
              "type": "p",
              "en": "A mole ratio is a conversion factor built from the coefficients of two substances in the balanced equation. From the equation above we can write ratios such as $\\frac{3\\ \\text{mol}\\ \\text{H}_2}{1\\ \\text{mol}\\ \\text{N}_2}$ or $\\frac{2\\ \\text{mol}\\ \\text{NH}_3}{3\\ \\text{mol}\\ \\text{H}_2}$. The mole ratio is the bridge that carries you from one substance to another.",
              "zh": "摩尔比是由配平方程式中两种物质的系数构成的换算因子。由上面的方程式可写出如 $\\frac{3\\ \\text{mol}\\ \\text{H}_2}{1\\ \\text{mol}\\ \\text{N}_2}$ 或 $\\frac{2\\ \\text{mol}\\ \\text{NH}_3}{3\\ \\text{mol}\\ \\text{H}_2}$ 这样的比。摩尔比是把你从一种物质带到另一种物质的桥梁。"
            },
            {
              "type": "h3",
              "en": "The General Pathway: Mass A to Mass B",
              "zh": "通用路线：质量 A 到质量 B"
            },
            {
              "type": "p",
              "en": "Almost every stoichiometry problem follows the same three-step path. Notice that the mole ratio is the only step that crosses from one substance to another — the outer steps just convert between grams and moles of a single substance.",
              "zh": "几乎每一道化学计量题都遵循同样的三步路线。注意摩尔比是唯一从一种物质跨到另一种物质的步骤——两端的步骤只是在同一种物质的克和摩尔之间转换。"
            },
            {
              "type": "math",
              "tex": "\\text{mass A} \\xrightarrow{\\div\\, M_A} \\text{mol A} \\xrightarrow{\\text{mole ratio}} \\text{mol B} \\xrightarrow{\\times\\, M_B} \\text{mass B}"
            },
            {
              "type": "note",
              "en": "Common mistake: using the mole ratio with grams instead of moles. Coefficients are ratios of moles, never of masses. You must convert to moles before applying the ratio, then back to grams afterward.",
              "zh": "常见错误：把摩尔比用在克上而不是摩尔上。系数是摩尔之比，绝不是质量之比。你必须先换算成摩尔再用比，之后再换回克。"
            },
            {
              "type": "h2",
              "en": "Limiting and Excess Reactants",
              "zh": "限量反应物与过量反应物"
            },
            {
              "type": "p",
              "en": "When you mix reactants, they rarely appear in the exact ratio the equation calls for. The limiting reactant is the one that runs out first; it limits how much product can form and is completely consumed. The excess reactant is left over when the reaction stops.",
              "zh": "当你混合反应物时，它们很少恰好按方程式所要求的比例存在。限量反应物是最先耗尽的那一种；它限制了能生成多少产物，并被完全消耗。过量反应物则在反应停止时有剩余。"
            },
            {
              "type": "p",
              "en": "To find the limiting reactant, convert each reactant to moles and use the mole ratio to compute how much product each could make on its own. The reactant that yields the least product is limiting; that smallest amount is the true yield.",
              "zh": "要找出限量反应物，把每种反应物换算成摩尔，用摩尔比算出各自单独能生成多少产物。生成产物最少的那种反应物就是限量反应物；那个最小的量就是真实产量。"
            },
            {
              "type": "note",
              "en": "Exam tip: the limiting reactant is not simply the one with fewer grams or fewer moles. You must compare through the mole ratio, because the coefficients may be unequal. Always compare \"product each could make,\" not raw amounts.",
              "zh": "考试提示：限量反应物并不是克数少或摩尔数少的那一种。你必须通过摩尔比来比较，因为系数可能不相等。要比较的是“各自能生成的产物量”，而不是原始的量。"
            },
            {
              "type": "h2",
              "en": "Theoretical Yield, Actual Yield, and Percent Yield",
              "zh": "理论产量、实际产量与产率"
            },
            {
              "type": "p",
              "en": "The theoretical yield is the maximum product predicted by stoichiometry from the limiting reactant. The actual yield is what you really collect in the lab, which is almost always less because of side reactions, spills, and product left behind on glassware. The percent yield compares the two:",
              "zh": "理论产量是由限量反应物根据化学计量预测的最大产物量。实际产量是你在实验室里真正收集到的量，由于副反应、洒漏和残留在玻璃器皿上的产物，实际产量几乎总是更少。产率把两者作比较："
            },
            {
              "type": "math",
              "tex": "\\%\\ \\text{yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%"
            },
            {
              "type": "note",
              "en": "Common mistake: a percent yield above $100\\%$ is impossible from the reaction itself and usually means the product was not fully dried and still holds water or impurity. Always base theoretical yield on the limiting reactant, not the excess one.",
              "zh": "常见错误：产率超过 $100\\%$ 就反应本身而言是不可能的，通常说明产物没有完全干燥、仍含有水分或杂质。理论产量必须以限量反应物为依据，而不是过量反应物。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Mass-to-Mass Calculation",
                "zh": "例题 1：质量到质量的计算"
              },
              "problem": {
                "en": "How many grams of oxygen are needed to burn $32.0\\ \\text{g}$ of methane? $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$. (Molar masses: $\\text{CH}_4 = 16.04$, $\\text{O}_2 = 32.00\\ \\text{g/mol}$.)",
                "zh": "燃烧 $32.0\\ \\text{g}$ 甲烷需要多少克氧气？$\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$。（摩尔质量：$\\text{CH}_4 = 16.04$，$\\text{O}_2 = 32.00\\ \\text{g/mol}$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Follow mass $\\to$ mol $\\to$ mol $\\to$ mass. First, moles of methane:",
                  "zh": "按照 质量 $\\to$ 摩尔 $\\to$ 摩尔 $\\to$ 质量 进行。首先求甲烷的摩尔数："
                },
                {
                  "type": "math",
                  "tex": "32.0\\ \\text{g} \\times \\frac{1\\ \\text{mol}\\ \\text{CH}_4}{16.04\\ \\text{g}} = 1.995\\ \\text{mol}\\ \\text{CH}_4"
                },
                {
                  "type": "p",
                  "en": "Apply the mole ratio $2\\ \\text{mol}\\ \\text{O}_2 : 1\\ \\text{mol}\\ \\text{CH}_4$, then convert to grams:",
                  "zh": "用摩尔比 $2\\ \\text{mol}\\ \\text{O}_2 : 1\\ \\text{mol}\\ \\text{CH}_4$，再换算成克："
                },
                {
                  "type": "math",
                  "tex": "1.995\\ \\text{mol}\\ \\text{CH}_4 \\times \\frac{2\\ \\text{mol}\\ \\text{O}_2}{1\\ \\text{mol}\\ \\text{CH}_4} \\times \\frac{32.00\\ \\text{g}}{1\\ \\text{mol}} = 128\\ \\text{g}\\ \\text{O}_2"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Limiting Reactant and Percent Yield",
                "zh": "例题 2：限量反应物与产率"
              },
              "problem": {
                "en": "In the lab, $28.0\\ \\text{g}$ of $\\text{N}_2$ reacts with $10.0\\ \\text{g}$ of $\\text{H}_2$: $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$. If $22.0\\ \\text{g}$ of $\\text{NH}_3$ is collected, find the limiting reactant and the percent yield. (Molar masses: $\\text{N}_2 = 28.02$, $\\text{H}_2 = 2.016$, $\\text{NH}_3 = 17.03\\ \\text{g/mol}$.)",
                "zh": "在实验室中，$28.0\\ \\text{g}$ $\\text{N}_2$ 与 $10.0\\ \\text{g}$ $\\text{H}_2$ 反应：$\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$。若收集到 $22.0\\ \\text{g}$ $\\text{NH}_3$，求限量反应物和产率。（摩尔质量：$\\text{N}_2 = 28.02$，$\\text{H}_2 = 2.016$，$\\text{NH}_3 = 17.03\\ \\text{g/mol}$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Convert each reactant to moles: $\\text{N}_2 = 28.0/28.02 = 1.00\\ \\text{mol}$; $\\text{H}_2 = 10.0/2.016 = 4.96\\ \\text{mol}$.",
                  "zh": "把每种反应物换算成摩尔：$\\text{N}_2 = 28.0/28.02 = 1.00\\ \\text{mol}$；$\\text{H}_2 = 10.0/2.016 = 4.96\\ \\text{mol}$。"
                },
                {
                  "type": "p",
                  "en": "Product each could make: from $\\text{N}_2$, $1.00 \\times \\frac{2}{1} = 2.00\\ \\text{mol}\\ \\text{NH}_3$; from $\\text{H}_2$, $4.96 \\times \\frac{2}{3} = 3.31\\ \\text{mol}\\ \\text{NH}_3$. Nitrogen makes less, so $\\text{N}_2$ is limiting.",
                  "zh": "各自能生成的产物：由 $\\text{N}_2$，$1.00 \\times \\frac{2}{1} = 2.00\\ \\text{mol}\\ \\text{NH}_3$；由 $\\text{H}_2$，$4.96 \\times \\frac{2}{3} = 3.31\\ \\text{mol}\\ \\text{NH}_3$。氮气生成得更少，所以 $\\text{N}_2$ 是限量反应物。"
                },
                {
                  "type": "math",
                  "tex": "\\text{theoretical} = 2.00\\ \\text{mol} \\times 17.03\\ \\text{g/mol} = 34.1\\ \\text{g}\\ \\text{NH}_3"
                },
                {
                  "type": "math",
                  "tex": "\\%\\ \\text{yield} = \\frac{22.0}{34.1} \\times 100\\% = 64.5\\%"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$, which is a correct mole ratio?",
                "zh": "对于 $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$，下列哪个是正确的摩尔比？"
              },
              "choices": [
                "$\\frac{2\\ \\text{mol}\\ \\text{H}_2}{1\\ \\text{mol}\\ \\text{O}_2}$",
                "$\\frac{1\\ \\text{mol}\\ \\text{H}_2}{2\\ \\text{mol}\\ \\text{O}_2}$",
                "$\\frac{2\\ \\text{g}\\ \\text{H}_2}{1\\ \\text{g}\\ \\text{O}_2}$",
                "$\\frac{1\\ \\text{mol}\\ \\text{H}_2}{2\\ \\text{mol}\\ \\text{H}_2\\text{O}}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The coefficients give $2\\ \\text{mol}\\ \\text{H}_2$ per $1\\ \\text{mol}\\ \\text{O}_2$. Ratios in grams are wrong because coefficients count moles, not mass, and the $\\text{H}_2$:$\\text{H}_2\\text{O}$ ratio is $2$:$2$, not $1$:$2$.",
                "zh": "系数给出每 $1\\ \\text{mol}\\ \\text{O}_2$ 对应 $2\\ \\text{mol}\\ \\text{H}_2$。以克表示的比是错的，因为系数计的是摩尔而非质量，且 $\\text{H}_2$:$\\text{H}_2\\text{O}$ 的比是 $2$:$2$，不是 $1$:$2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$, how many moles of $\\text{NH}_3$ form from $6.0\\ \\text{mol}$ of $\\text{H}_2$ (with excess $\\text{N}_2$)? Give your answer to 1 decimal place.",
                "zh": "对于 $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$，$6.0\\ \\text{mol}$ $\\text{H}_2$（$\\text{N}_2$ 过量）能生成多少摩尔 $\\text{NH}_3$？答案保留 1 位小数。"
              },
              "answer": "4.0",
              "accept": [
                "4",
                "4.00"
              ],
              "explanation": {
                "en": "Use the ratio $\\frac{2\\ \\text{mol}\\ \\text{NH}_3}{3\\ \\text{mol}\\ \\text{H}_2}$: $6.0 \\times \\frac{2}{3} = 4.0\\ \\text{mol}$. Flipping the ratio gives $9.0$, a common mistake.",
                "zh": "用比 $\\frac{2\\ \\text{mol}\\ \\text{NH}_3}{3\\ \\text{mol}\\ \\text{H}_2}$：$6.0 \\times \\frac{2}{3} = 4.0\\ \\text{mol}$。把比倒过来会得到 $9.0$，是常见错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the general stoichiometry pathway, what is the purpose of the mole ratio step?",
                "zh": "在通用的化学计量路线中，摩尔比这一步的作用是什么？"
              },
              "choices": [
                "To convert grams to moles of the same substance",
                "To convert moles of one substance to moles of another",
                "To convert moles to particles",
                "To balance the chemical equation"
              ],
              "answer": 1,
              "explanation": {
                "en": "The mole ratio is the only step that crosses from substance A to substance B. Converting grams to moles uses molar mass, and moles to particles uses $N_A$ — those are the outer steps.",
                "zh": "摩尔比是唯一从物质 A 跨到物质 B 的步骤。克到摩尔用摩尔质量，摩尔到粒子用 $N_A$——那些是两端的步骤。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many grams of $\\text{CO}_2$ are produced from $10.0\\ \\text{g}$ of $\\text{CH}_4$ in $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$? (Molar masses: $\\text{CH}_4 = 16.04$, $\\text{CO}_2 = 44.01\\ \\text{g/mol}$.) Give 3 significant figures.",
                "zh": "在 $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$ 中，$10.0\\ \\text{g}$ $\\text{CH}_4$ 生成多少克 $\\text{CO}_2$？（摩尔质量：$\\text{CH}_4 = 16.04$，$\\text{CO}_2 = 44.01\\ \\text{g/mol}$。）保留 3 位有效数字。"
              },
              "answer": "27.4",
              "accept": [
                "27.5"
              ],
              "explanation": {
                "en": "$10.0/16.04 = 0.623\\ \\text{mol}\\ \\text{CH}_4$; ratio $1$:$1$ gives $0.623\\ \\text{mol}\\ \\text{CO}_2$; $\\times 44.01 = 27.4\\ \\text{g}$. Skipping the conversion to moles and scaling grams directly is the classic error.",
                "zh": "$10.0/16.04 = 0.623\\ \\text{mol}\\ \\text{CH}_4$；$1$:$1$ 的比给出 $0.623\\ \\text{mol}\\ \\text{CO}_2$；$\\times 44.01 = 27.4\\ \\text{g}$。跳过换算成摩尔而直接对克数缩放是经典错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly describes the limiting reactant?",
                "zh": "下列哪句话正确描述了限量反应物？"
              },
              "choices": [
                "It is always the reactant present in the smallest mass",
                "It is the reactant left over after the reaction stops",
                "It is the reactant that is completely used up and sets the maximum product",
                "It is always the reactant with the largest coefficient"
              ],
              "answer": 2,
              "explanation": {
                "en": "The limiting reactant runs out first and caps the product amount. It is not simply the smallest mass or moles, and the leftover reactant is the excess, not the limiting one.",
                "zh": "限量反应物最先耗尽，并限定了产物的最大量。它不是简单地看质量或摩尔最小的那种，剩下的反应物是过量反应物，而不是限量反应物。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A reaction has a theoretical yield of $50.0\\ \\text{g}$, but only $42.0\\ \\text{g}$ of product is collected. What is the percent yield? Give the answer as a percent to 1 decimal place, e.g. 84.0",
                "zh": "某反应理论产量为 $50.0\\ \\text{g}$，但只收集到 $42.0\\ \\text{g}$ 产物。产率是多少？以百分数形式作答，保留 1 位小数，例如 84.0"
              },
              "answer": "84.0",
              "accept": [
                "84",
                "84.0%"
              ],
              "explanation": {
                "en": "$\\frac{42.0}{50.0} \\times 100\\% = 84.0\\%$. Dividing theoretical by actual (the ratio upside down) would wrongly give about $119\\%$.",
                "zh": "$\\frac{42.0}{50.0} \\times 100\\% = 84.0\\%$。把理论除以实际（比倒过来）会错误地得到约 $119\\%$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student calculates a percent yield of $108\\%$ for a solid product. The most likely explanation is:",
                "zh": "一名学生算出某固体产物的产率为 $108\\%$。最可能的解释是："
              },
              "choices": [
                "The reaction created extra mass from nothing",
                "The theoretical yield was based on the limiting reactant",
                "The mole ratio was applied correctly",
                "The product was not fully dried and still contains water or impurity"
              ],
              "answer": 3,
              "explanation": {
                "en": "Yields above $100\\%$ signal impure or wet product adding extra mass, not extra product. Mass cannot be created, and correctly using the limiting reactant and mole ratio would give a value at or below $100\\%$.",
                "zh": "产率超过 $100\\%$ 说明产物不纯或潮湿而增加了额外质量，而不是多出了产物。质量不能凭空产生，正确使用限量反应物和摩尔比会得到不超过 $100\\%$ 的值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $2\\,\\text{Al} + 3\\,\\text{Cl}_2 \\rightarrow 2\\,\\text{AlCl}_3$, you have $4.0\\ \\text{mol}\\ \\text{Al}$ and $3.0\\ \\text{mol}\\ \\text{Cl}_2$. How many moles of $\\text{AlCl}_3$ can form? Give your answer to 1 decimal place.",
                "zh": "对于 $2\\,\\text{Al} + 3\\,\\text{Cl}_2 \\rightarrow 2\\,\\text{AlCl}_3$，你有 $4.0\\ \\text{mol}\\ \\text{Al}$ 和 $3.0\\ \\text{mol}\\ \\text{Cl}_2$。能生成多少摩尔 $\\text{AlCl}_3$？答案保留 1 位小数。"
              },
              "answer": "2.0",
              "accept": [
                "2",
                "2.00"
              ],
              "explanation": {
                "en": "From Al: $4.0 \\times \\frac{2}{2} = 4.0\\ \\text{mol}$; from $\\text{Cl}_2$: $3.0 \\times \\frac{2}{3} = 2.0\\ \\text{mol}$. Chlorine makes less, so it is limiting and only $2.0\\ \\text{mol}\\ \\text{AlCl}_3$ forms. Picking Al as limiting because there is more of it ignores the mole ratio.",
                "zh": "由 Al：$4.0 \\times \\frac{2}{2} = 4.0\\ \\text{mol}$；由 $\\text{Cl}_2$：$3.0 \\times \\frac{2}{3} = 2.0\\ \\text{mol}$。氯气生成得更少，所以它是限量反应物，只生成 $2.0\\ \\text{mol}\\ \\text{AlCl}_3$。因为铝更多就选它作限量反应物，忽视了摩尔比。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "gases",
      "title": "Unit 6: Gases",
      "titleZh": "第六单元：气体",
      "lessons": [
        {
          "id": "gas-laws",
          "title": "The Gas Laws",
          "titleZh": "气体定律",
          "content": [
            {
              "type": "h2",
              "en": "The Behavior of Gases",
              "zh": "气体的行为"
            },
            {
              "type": "p",
              "en": "Gases are the simplest state of matter to describe mathematically. Their particles are far apart and in constant, rapid motion, so a gas fills any container, is easily compressed, and mixes readily with other gases. Because gas behavior is so uniform, a few simple laws relate its four key measurable properties: pressure ($P$), volume ($V$), temperature ($T$), and amount in moles ($n$).",
              "zh": "气体是数学上最容易描述的物质状态。它的粒子间距很大且不停高速运动，因此气体会充满任何容器、容易被压缩、也容易与其他气体混合。由于气体的行为非常规律，几条简单的定律就能把它的四个关键可测量性质联系起来：压强（$P$）、体积（$V$）、温度（$T$）和以摩尔计的物质的量（$n$）。"
            },
            {
              "type": "h3",
              "en": "Pressure and Its Units",
              "zh": "压强及其单位"
            },
            {
              "type": "p",
              "en": "Pressure is force per unit area. A gas exerts pressure because its particles constantly collide with the walls of the container. More frequent or more forceful collisions mean higher pressure. Because pressure is measured many different ways in the lab and in industry, you must be comfortable converting among its units.",
              "zh": "压强是单位面积上受到的力。气体之所以产生压强，是因为它的粒子不断撞击容器壁。撞击越频繁、越猛烈，压强就越大。由于实验室和工业中用许多不同方式测量压强，你必须能熟练地在这些单位之间换算。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$1\\ \\text{atm} = 101.325\\ \\text{kPa}$ (kilopascals, the SI unit)",
                  "zh": "$1\\ \\text{atm} = 101.325\\ \\text{kPa}$（千帕，国际单位制单位）"
                },
                {
                  "en": "$1\\ \\text{atm} = 760\\ \\text{mmHg}$ (millimeters of mercury, from a barometer)",
                  "zh": "$1\\ \\text{atm} = 760\\ \\text{mmHg}$（毫米汞柱，来自气压计）"
                },
                {
                  "en": "$1\\ \\text{atm} = 760\\ \\text{torr}$ (1 torr = 1 mmHg exactly)",
                  "zh": "$1\\ \\text{atm} = 760\\ \\text{torr}$（1 托 = 1 毫米汞柱，精确相等）"
                }
              ]
            },
            {
              "type": "p",
              "en": "A useful shortcut: $1\\ \\text{atm} = 760\\ \\text{mmHg} = 760\\ \\text{torr} = 101.325\\ \\text{kPa}$. To convert, multiply by a conversion factor that cancels the unit you have and leaves the unit you want.",
              "zh": "一个实用的记忆：$1\\ \\text{atm} = 760\\ \\text{mmHg} = 760\\ \\text{torr} = 101.325\\ \\text{kPa}$。换算时，乘以一个能消掉已知单位、留下所需单位的换算因子即可。"
            },
            {
              "type": "h2",
              "en": "Temperature Must Be in Kelvin",
              "zh": "温度必须用开尔文"
            },
            {
              "type": "p",
              "en": "In every gas law, temperature must be expressed on the Kelvin (absolute) scale, never in degrees Celsius. Kelvin starts at absolute zero, the point where particle motion is minimized, so a Kelvin temperature is directly proportional to the average kinetic energy of the particles. Convert with $K = {}^{\\circ}\\text{C} + 273$ (more precisely $273.15$).",
              "zh": "在每一条气体定律中，温度都必须用开尔文（绝对）温标表示，绝不能用摄氏度。开尔文从绝对零度起算，即粒子运动最弱的那一点，因此开尔文温度与粒子的平均动能成正比。换算公式为 $K = {}^{\\circ}\\text{C} + 273$（更精确为 $273.15$）。"
            },
            {
              "type": "note",
              "en": "Common mistake: plugging Celsius temperatures into a gas law. Using $25\\ {}^{\\circ}\\text{C}$ instead of $298\\ \\text{K}$ gives a completely wrong answer — and $0\\ {}^{\\circ}\\text{C}$ would falsely say the volume is zero! Convert every temperature to Kelvin BEFORE substituting. This is the single most common gas-law error on tests.",
              "zh": "常见错误：把摄氏温度直接代入气体定律。用 $25\\ {}^{\\circ}\\text{C}$ 而不是 $298\\ \\text{K}$ 会得到完全错误的答案——而 $0\\ {}^{\\circ}\\text{C}$ 会错误地算出体积为零！在代入之前，务必先把每个温度换算成开尔文。这是考试中最常见的气体定律错误。"
            },
            {
              "type": "h2",
              "en": "The Individual Gas Laws",
              "zh": "各条气体定律"
            },
            {
              "type": "h3",
              "en": "Boyle's Law: P and V (constant T, n)",
              "zh": "玻意耳定律：P 与 V（T、n 不变）"
            },
            {
              "type": "p",
              "en": "At constant temperature and amount, the pressure and volume of a gas are inversely proportional: squeeze a gas into half the volume and its pressure doubles. This happens because the same number of particles hit a smaller wall area more often.",
              "zh": "在温度和物质的量不变时，气体的压强与体积成反比：把气体压到一半体积，其压强就加倍。这是因为相同数目的粒子在更小的器壁面积上撞击得更频繁。"
            },
            {
              "type": "math",
              "tex": "P_1 V_1 = P_2 V_2"
            },
            {
              "type": "h3",
              "en": "Charles's Law: V and T (constant P, n)",
              "zh": "查理定律：V 与 T（P、n 不变）"
            },
            {
              "type": "p",
              "en": "At constant pressure and amount, the volume of a gas is directly proportional to its Kelvin temperature: heat a gas and it expands. This is why a hot-air balloon rises — warming the gas increases its volume, lowering its density.",
              "zh": "在压强和物质的量不变时，气体的体积与其开尔文温度成正比：加热气体，它就膨胀。这正是热气球上升的原因——加热气体使其体积增大、密度减小。"
            },
            {
              "type": "math",
              "tex": "\\frac{V_1}{T_1} = \\frac{V_2}{T_2}"
            },
            {
              "type": "h3",
              "en": "Gay-Lussac's Law: P and T (constant V, n)",
              "zh": "盖-吕萨克定律：P 与 T（V、n 不变）"
            },
            {
              "type": "p",
              "en": "At constant volume and amount, the pressure of a gas is directly proportional to its Kelvin temperature: heat a sealed rigid container and the pressure climbs. This is why an aerosol can warns \"do not incinerate\" — heating raises the internal pressure until the can bursts.",
              "zh": "在体积和物质的量不变时，气体的压强与其开尔文温度成正比：加热一个密封的刚性容器，压强就上升。这就是气雾罐上标注“切勿焚烧”的原因——加热会使内部压强升高，直到罐体爆裂。"
            },
            {
              "type": "math",
              "tex": "\\frac{P_1}{T_1} = \\frac{P_2}{T_2}"
            },
            {
              "type": "h3",
              "en": "The Combined Gas Law",
              "zh": "联合气体定律"
            },
            {
              "type": "p",
              "en": "The three laws above are special cases of one master equation that holds whenever the amount of gas is fixed. Whichever quantity stays constant simply cancels from both sides, recovering the individual law you need.",
              "zh": "上面三条定律都是一个主方程的特例，只要气体的量不变，这个方程就成立。无论哪个量保持不变，它都会从等式两边消去，从而还原出你需要的那条单独定律。"
            },
            {
              "type": "math",
              "tex": "\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}"
            },
            {
              "type": "note",
              "en": "Exam tip: STP means Standard Temperature and Pressure, defined as $0\\ {}^{\\circ}\\text{C}$ ($273\\ \\text{K}$) and $1\\ \\text{atm}$. Whenever a problem says \"at STP,\" you can immediately write down $T = 273\\ \\text{K}$ and $P = 1\\ \\text{atm}$.",
              "zh": "考试提示：STP 指标准温度和压强，定义为 $0\\ {}^{\\circ}\\text{C}$（$273\\ \\text{K}$）和 $1\\ \\text{atm}$。只要题目说“在标准状况下（at STP）”，你就可以立刻写下 $T = 273\\ \\text{K}$、$P = 1\\ \\text{atm}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A Scuba Diver and Boyle's Law",
                "zh": "例题 1：潜水员与玻意耳定律"
              },
              "problem": {
                "en": "A scuba diver releases a $0.750$ L air bubble at a depth where the pressure is $3.00\\ \\text{atm}$. What is the bubble's volume when it reaches the surface at $1.00\\ \\text{atm}$? Assume constant temperature.",
                "zh": "一名潜水员在压强为 $3.00\\ \\text{atm}$ 的深度释放了一个 $0.750$ L 的气泡。当气泡上升到压强为 $1.00\\ \\text{atm}$ 的水面时，其体积是多少？设温度不变。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Temperature and amount are constant, so use Boyle's law. Solve for $V_2$:",
                  "zh": "温度和物质的量不变，所以用玻意耳定律。解出 $V_2$："
                },
                {
                  "type": "math",
                  "tex": "V_2 = \\frac{P_1 V_1}{P_2} = \\frac{(3.00\\ \\text{atm})(0.750\\ \\text{L})}{1.00\\ \\text{atm}} = 2.25\\ \\text{L}"
                },
                {
                  "type": "p",
                  "en": "The pressure dropped to one-third, so the volume tripled. This is exactly why divers must never hold their breath while ascending — the expanding air could rupture their lungs.",
                  "zh": "压强降到了三分之一，所以体积增大到三倍。这正是潜水员上升时绝不能屏住呼吸的原因——膨胀的空气可能撑破肺部。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Weather Balloon and the Combined Gas Law",
                "zh": "例题 2：探空气球与联合气体定律"
              },
              "problem": {
                "en": "A weather balloon holds $15.0$ L of helium at ground level, where $P = 755\\ \\text{mmHg}$ and $T = 25\\ {}^{\\circ}\\text{C}$. It rises to an altitude where $P = 210\\ \\text{mmHg}$ and $T = -35\\ {}^{\\circ}\\text{C}$. Find its new volume.",
                "zh": "一个探空气球在地面装有 $15.0$ L 氦气，此时 $P = 755\\ \\text{mmHg}$、$T = 25\\ {}^{\\circ}\\text{C}$。它上升到 $P = 210\\ \\text{mmHg}$、$T = -35\\ {}^{\\circ}\\text{C}$ 的高空。求其新的体积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First convert both temperatures to Kelvin: $T_1 = 25 + 273 = 298\\ \\text{K}$ and $T_2 = -35 + 273 = 238\\ \\text{K}$. The pressures are both in mmHg, so no pressure conversion is needed.",
                  "zh": "先把两个温度都换成开尔文：$T_1 = 25 + 273 = 298\\ \\text{K}$，$T_2 = -35 + 273 = 238\\ \\text{K}$。两个压强都用 mmHg，所以不必换算压强。"
                },
                {
                  "type": "math",
                  "tex": "V_2 = V_1 \\times \\frac{P_1}{P_2} \\times \\frac{T_2}{T_1} = 15.0\\ \\text{L} \\times \\frac{755}{210} \\times \\frac{238}{298}"
                },
                {
                  "type": "math",
                  "tex": "V_2 = 15.0 \\times 3.595 \\times 0.7987 = 43.1\\ \\text{L}"
                },
                {
                  "type": "p",
                  "en": "The large pressure drop makes the balloon expand a lot, while the colder temperature shrinks it only slightly. The net effect is a much larger balloon — which is why weather balloons are launched only partly inflated.",
                  "zh": "压强大幅下降使气球大幅膨胀，而温度降低只让它稍稍收缩。综合效果是气球变得大得多——这正是探空气球发射时只充部分气体的原因。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A gas is compressed to half its original volume at constant temperature. What happens to its pressure?",
                "zh": "在温度不变时，把气体压缩到原来体积的一半。它的压强会怎样？"
              },
              "choices": [
                "It stays the same",
                "It is halved",
                "It quadruples",
                "It doubles"
              ],
              "answer": 3,
              "explanation": {
                "en": "By Boyle's law, $P$ and $V$ are inversely proportional, so halving the volume doubles the pressure. Choosing \"halved\" confuses a direct relationship with the correct inverse one.",
                "zh": "根据玻意耳定律，$P$ 与 $V$ 成反比，所以体积减半会使压强加倍。选“减半”是把反比关系错当成了正比关系。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which temperature must be used when applying any gas law?",
                "zh": "应用任何气体定律时必须使用哪种温度？"
              },
              "choices": [
                "Kelvin",
                "Celsius",
                "Fahrenheit",
                "Whichever is given in the problem"
              ],
              "answer": 0,
              "explanation": {
                "en": "Gas laws require absolute temperature, so always convert to Kelvin first. Using Celsius (which can be zero or negative) breaks the direct proportionality between temperature and volume or pressure.",
                "zh": "气体定律要求使用绝对温度，所以总要先换算成开尔文。用摄氏度（它可以是零或负数）会破坏温度与体积或压强之间的正比关系。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Convert $2.50\\ \\text{atm}$ to mmHg. Give your answer in mmHg to 3 sig figs.",
                "zh": "把 $2.50\\ \\text{atm}$ 换算成 mmHg。答案用 mmHg 表示，保留 3 位有效数字。"
              },
              "answer": "1900",
              "accept": [
                "1.90e3",
                "1900.",
                "1.90x10^3"
              ],
              "explanation": {
                "en": "Multiply by the conversion factor $760\\ \\text{mmHg}/1\\ \\text{atm}$: $2.50 \\times 760 = 1900\\ \\text{mmHg}$.",
                "zh": "乘以换算因子 $760\\ \\text{mmHg}/1\\ \\text{atm}$：$2.50 \\times 760 = 1900\\ \\text{mmHg}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rigid sealed can of gas is heated from $300\\ \\text{K}$ to $600\\ \\text{K}$. What happens to the pressure inside?",
                "zh": "一个刚性密封的气罐从 $300\\ \\text{K}$ 加热到 $600\\ \\text{K}$。罐内压强会怎样？"
              },
              "choices": [
                "It is halved",
                "It stays the same",
                "It doubles",
                "It cannot be determined"
              ],
              "answer": 2,
              "explanation": {
                "en": "A rigid can means constant volume, so use Gay-Lussac's law: $P \\propto T$ in Kelvin. Doubling the Kelvin temperature doubles the pressure. This is why pressurized cans should never be thrown into fire.",
                "zh": "刚性罐意味着体积不变，所以用盖-吕萨克定律：压强与开尔文温度成正比。开尔文温度加倍，压强就加倍。这就是加压罐绝不能扔进火里的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A gas occupies $4.00\\ \\text{L}$ at $200\\ \\text{K}$. At constant pressure, what volume (in L) will it occupy at $300\\ \\text{K}$? Give your answer to 2 sig figs.",
                "zh": "某气体在 $200\\ \\text{K}$ 时占 $4.00\\ \\text{L}$。在压强不变时，它在 $300\\ \\text{K}$ 时占多少体积（单位 L）？答案保留 2 位有效数字。"
              },
              "answer": "6.0",
              "accept": [
                "6",
                "6.00"
              ],
              "explanation": {
                "en": "Charles's law: $V_2 = V_1 \\times T_2/T_1 = 4.00 \\times 300/200 = 6.0\\ \\text{L}$. The temperatures are already in Kelvin, so no conversion is needed.",
                "zh": "查理定律：$V_2 = V_1 \\times T_2/T_1 = 4.00 \\times 300/200 = 6.0\\ \\text{L}$。温度已是开尔文，无需换算。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which set of conditions correctly describes STP?",
                "zh": "哪一组条件正确描述了标准状况（STP）？"
              },
              "choices": [
                "$25\\ {}^{\\circ}\\text{C}$ and $1\\ \\text{atm}$",
                "$273\\ \\text{K}$ and $1\\ \\text{atm}$",
                "$0\\ \\text{K}$ and $760\\ \\text{kPa}$",
                "$100\\ {}^{\\circ}\\text{C}$ and $1\\ \\text{atm}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "STP is $0\\ {}^{\\circ}\\text{C}$ ($273\\ \\text{K}$) and $1\\ \\text{atm}$. The tempting distractor $25\\ {}^{\\circ}\\text{C}$ is \"room temperature\" (used for a different standard), not STP.",
                "zh": "STP 是 $0\\ {}^{\\circ}\\text{C}$（$273\\ \\text{K}$）和 $1\\ \\text{atm}$。诱人的干扰项 $25\\ {}^{\\circ}\\text{C}$ 是“室温”（用于另一种标准），不是 STP。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $6.00\\ \\text{L}$ sample of gas at $2.00\\ \\text{atm}$ is allowed to expand to $12.0\\ \\text{L}$ at constant temperature. What is the new pressure (in atm)? Give your answer to 2 sig figs.",
                "zh": "一份 $6.00\\ \\text{L}$、压强 $2.00\\ \\text{atm}$ 的气体在温度不变时膨胀到 $12.0\\ \\text{L}$。新的压强是多少（单位 atm）？答案保留 2 位有效数字。"
              },
              "answer": "1.0",
              "accept": [
                "1",
                "1.00"
              ],
              "explanation": {
                "en": "Boyle's law: $P_2 = P_1 V_1 / V_2 = (2.00)(6.00)/12.0 = 1.0\\ \\text{atm}$. Doubling the volume halves the pressure.",
                "zh": "玻意耳定律：$P_2 = P_1 V_1 / V_2 = (2.00)(6.00)/12.0 = 1.0\\ \\text{atm}$。体积加倍，压强减半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A car tire is inflated on a cold morning at $-3\\ {}^{\\circ}\\text{C}$. After highway driving, the tire warms to $37\\ {}^{\\circ}\\text{C}$. Assuming the tire volume is essentially fixed, why does the gauge pressure rise?",
                "zh": "在 $-3\\ {}^{\\circ}\\text{C}$ 的寒冷早晨给汽车轮胎打气。经过高速行驶后，轮胎升温到 $37\\ {}^{\\circ}\\text{C}$。假设轮胎体积基本固定，为什么胎压表读数会升高？"
              },
              "choices": [
                "The number of gas molecules increases",
                "Higher Kelvin temperature makes molecules strike the walls harder and more often",
                "The volume of the tire decreases sharply",
                "The pressure units change from atm to kPa"
              ],
              "answer": 1,
              "explanation": {
                "en": "At fixed volume (Gay-Lussac's law), raising the temperature from $270\\ \\text{K}$ to $310\\ \\text{K}$ speeds up the molecules, so collisions with the tire wall are more frequent and forceful — pressure rises. No molecules are added, and the volume is nearly constant.",
                "zh": "在体积固定时（盖-吕萨克定律），温度从 $270\\ \\text{K}$ 升到 $310\\ \\text{K}$ 使分子运动加快，因此对胎壁的撞击更频繁、更猛烈——压强升高。分子数并未增加，体积也几乎不变。"
              }
            }
          ]
        },
        {
          "id": "ideal-gas-law-and-kmt",
          "title": "The Ideal Gas Law and Kinetic Molecular Theory",
          "titleZh": "理想气体定律与分子动理论",
          "content": [
            {
              "type": "h2",
              "en": "From Four Variables to One Equation",
              "zh": "从四个变量到一个方程"
            },
            {
              "type": "p",
              "en": "The combined gas law relates a gas at two sets of conditions, but it cannot find the amount of gas ($n$) present under a single set of conditions. The ideal gas law solves that problem by linking all four variables — pressure, volume, moles, and temperature — in one equation through a proportionality constant $R$.",
              "zh": "联合气体定律联系的是同一气体在两组条件下的状态，但它无法求出单一条件下所含气体的量（$n$）。理想气体定律通过一个比例常数 $R$，把全部四个变量——压强、体积、摩尔数和温度——联系在一个方程里，从而解决了这个问题。"
            },
            {
              "type": "math",
              "tex": "PV = nRT"
            },
            {
              "type": "h3",
              "en": "Choosing the Right R",
              "zh": "选择正确的 R"
            },
            {
              "type": "p",
              "en": "The gas constant $R$ comes in different numerical values depending on the units of pressure. You must match $R$ to the units in your problem. In this course the most common choice is:",
              "zh": "气体常数 $R$ 会因压强单位不同而取不同的数值。你必须让 $R$ 与题目中的单位相匹配。本课程中最常用的取值是："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$R = 0.0821\\ \\dfrac{\\text{L} \\cdot \\text{atm}}{\\text{mol} \\cdot \\text{K}}$ — use when pressure is in atm (the usual choice).",
                  "zh": "$R = 0.0821\\ \\dfrac{\\text{L} \\cdot \\text{atm}}{\\text{mol} \\cdot \\text{K}}$ —— 当压强用 atm 时使用（通常选它）。"
                },
                {
                  "en": "$R = 8.314\\ \\dfrac{\\text{L} \\cdot \\text{kPa}}{\\text{mol} \\cdot \\text{K}}$ — use when pressure is in kPa.",
                  "zh": "$R = 8.314\\ \\dfrac{\\text{L} \\cdot \\text{kPa}}{\\text{mol} \\cdot \\text{K}}$ —— 当压强用 kPa 时使用。"
                },
                {
                  "en": "In every case, volume must be in liters and temperature in Kelvin.",
                  "zh": "无论哪种情况，体积都必须用升，温度都必须用开尔文。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: mismatching R with the units, or forgetting to convert. If pressure is given in mmHg or torr, convert it to atm (divide by 760) before using $R = 0.0821$. And always convert temperature to Kelvin first.",
              "zh": "常见错误：$R$ 与单位不匹配，或忘记换算。如果压强以 mmHg 或 torr 给出，先换算成 atm（除以 760）再用 $R = 0.0821$。而且一定要先把温度换成开尔文。"
            },
            {
              "type": "h3",
              "en": "Molar Volume at STP",
              "zh": "标准状况下的摩尔体积"
            },
            {
              "type": "p",
              "en": "A powerful special case: one mole of ANY ideal gas occupies $22.4\\ \\text{L}$ at STP ($273\\ \\text{K}$, $1\\ \\text{atm}$). You can verify this by plugging $n = 1$, $P = 1\\ \\text{atm}$, $T = 273\\ \\text{K}$ into $PV = nRT$. This molar volume is a handy conversion factor whenever a gas is at standard conditions.",
              "zh": "一个很有用的特例：在标准状况（$273\\ \\text{K}$、$1\\ \\text{atm}$）下，1 摩尔任何理想气体都占 $22.4\\ \\text{L}$。把 $n = 1$、$P = 1\\ \\text{atm}$、$T = 273\\ \\text{K}$ 代入 $PV = nRT$ 即可验证。只要气体处于标准状况，这个摩尔体积就是一个方便的换算因子。"
            },
            {
              "type": "math",
              "tex": "V = \\frac{nRT}{P} = \\frac{(1\\ \\text{mol})(0.0821)(273\\ \\text{K})}{1\\ \\text{atm}} = 22.4\\ \\text{L}"
            },
            {
              "type": "h3",
              "en": "Density and Molar Mass from PV = nRT",
              "zh": "由 PV = nRT 求密度和摩尔质量"
            },
            {
              "type": "p",
              "en": "Because moles equal mass divided by molar mass ($n = m/M$), the ideal gas law can be rearranged to find the density or molar mass of a gas. Substituting $n = m/M$ and using density $d = m/V$ gives:",
              "zh": "由于摩尔数等于质量除以摩尔质量（$n = m/M$），理想气体定律可以变形来求气体的密度或摩尔质量。代入 $n = m/M$ 并利用密度 $d = m/V$，得到："
            },
            {
              "type": "math",
              "tex": "M = \\frac{dRT}{P} \\qquad \\text{and} \\qquad d = \\frac{PM}{RT}"
            },
            {
              "type": "p",
              "en": "These forms let you identify an unknown gas from its measured density, or predict how dense a known gas will be under given conditions.",
              "zh": "这些形式让你能够根据测得的密度鉴别未知气体，或预测已知气体在给定条件下的密度。"
            },
            {
              "type": "h2",
              "en": "Kinetic Molecular Theory",
              "zh": "分子动理论"
            },
            {
              "type": "p",
              "en": "The gas laws describe HOW gases behave; kinetic molecular theory (KMT) explains WHY, using a model of gas particles in motion. The ideal gas model rests on these assumptions:",
              "zh": "气体定律描述气体“怎样”行为；分子动理论（KMT）则用运动中气体粒子的模型来解释“为什么”。理想气体模型基于以下假设："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Gas particles are tiny compared with the distances between them, so their own volume is negligible — a gas is mostly empty space.",
                  "zh": "气体粒子相对于它们之间的距离非常微小，因此粒子自身的体积可以忽略——气体大部分是空的空间。"
                },
                {
                  "en": "Particles are in constant, random, straight-line motion, colliding with each other and the container walls.",
                  "zh": "粒子处于持续、随机的直线运动中，彼此以及与器壁发生碰撞。"
                },
                {
                  "en": "Collisions are perfectly elastic — no kinetic energy is lost overall.",
                  "zh": "碰撞是完全弹性的——总动能没有损失。"
                },
                {
                  "en": "There are no attractive or repulsive forces between the particles.",
                  "zh": "粒子之间没有吸引力或排斥力。"
                },
                {
                  "en": "The average kinetic energy of the particles is directly proportional to the Kelvin temperature.",
                  "zh": "粒子的平均动能与开尔文温度成正比。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The last point is central: temperature is a measure of the average kinetic energy of particle motion. At the same temperature, two different gases have the same average kinetic energy — so the lighter gas must move faster on average. This is why light hydrogen molecules diffuse more quickly than heavy carbon dioxide molecules.",
              "zh": "最后一点至关重要：温度是粒子运动平均动能的量度。在相同温度下，两种不同气体具有相同的平均动能——所以较轻的气体平均运动得更快。这就是轻的氢分子比重的二氧化碳分子扩散得更快的原因。"
            },
            {
              "type": "note",
              "en": "Exam tip: \"raising the temperature\" always means raising the AVERAGE kinetic energy of the particles, not their mass or number. Justify pressure and temperature effects by describing how the particles move and collide.",
              "zh": "考试提示：“升高温度”始终意味着提高粒子的平均动能，而不是它们的质量或数目。要通过描述粒子如何运动和碰撞来解释压强和温度的影响。"
            },
            {
              "type": "h2",
              "en": "Dalton's Law of Partial Pressures",
              "zh": "道尔顿分压定律"
            },
            {
              "type": "p",
              "en": "In a mixture of gases that do not react, each gas contributes a partial pressure as if it alone occupied the container. The total pressure is simply the sum of these partial pressures. This follows naturally from KMT: because particles have no forces between them, each gas pushes on the walls independently.",
              "zh": "在互不反应的气体混合物中，每种气体都贡献一个分压，就好像它单独占据整个容器一样。总压强就是这些分压之和。这可由分子动理论自然推出：由于粒子之间没有作用力，每种气体都独立地对器壁施压。"
            },
            {
              "type": "math",
              "tex": "P_{\\text{total}} = P_1 + P_2 + P_3 + \\cdots"
            },
            {
              "type": "p",
              "en": "A common lab use is collecting a gas over water: the measured total pressure includes the pressure of water vapor, which must be subtracted to get the pressure of the dry gas ($P_{\\text{gas}} = P_{\\text{total}} - P_{\\text{water}}$).",
              "zh": "一个常见的实验应用是排水集气：测得的总压强包含了水蒸气的压强，必须减去它才能得到干燥气体的压强（$P_{\\text{gas}} = P_{\\text{total}} - P_{\\text{water}}$）。"
            },
            {
              "type": "h2",
              "en": "Gas Stoichiometry",
              "zh": "气体化学计量"
            },
            {
              "type": "p",
              "en": "The molar volume connects gas volume to moles, so a balanced equation lets you relate the volume of one gas to the moles or volume of another. At STP, use $22.4\\ \\text{L/mol}$ as a conversion factor; at other conditions, use $PV = nRT$ to find moles first.",
              "zh": "摩尔体积把气体体积与摩尔数联系起来，因此配平的方程可以让你把一种气体的体积与另一种物质的摩尔数或体积联系起来。在标准状况下，用 $22.4\\ \\text{L/mol}$ 作换算因子；在其他条件下，先用 $PV = nRT$ 求摩尔数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Finding Moles with PV = nRT",
                "zh": "例题 1：用 PV = nRT 求摩尔数"
              },
              "problem": {
                "en": "How many moles of oxygen gas are in a $5.00\\ \\text{L}$ tank at $27\\ {}^{\\circ}\\text{C}$ and a pressure of $3.00\\ \\text{atm}$?",
                "zh": "在 $27\\ {}^{\\circ}\\text{C}$、压强 $3.00\\ \\text{atm}$ 的 $5.00\\ \\text{L}$ 气罐中，含有多少摩尔氧气？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Convert temperature to Kelvin: $T = 27 + 273 = 300\\ \\text{K}$. Pressure is in atm, so use $R = 0.0821$. Solve $PV = nRT$ for $n$:",
                  "zh": "把温度换成开尔文：$T = 27 + 273 = 300\\ \\text{K}$。压强用 atm，所以取 $R = 0.0821$。由 $PV = nRT$ 解出 $n$："
                },
                {
                  "type": "math",
                  "tex": "n = \\frac{PV}{RT} = \\frac{(3.00\\ \\text{atm})(5.00\\ \\text{L})}{(0.0821)(300\\ \\text{K})} = 0.609\\ \\text{mol}"
                },
                {
                  "type": "p",
                  "en": "So the tank holds about $0.609$ mol of $\\text{O}_2$. Notice how the atm units cancel with the atm inside $R$, leaving moles.",
                  "zh": "所以罐中约含 $0.609$ mol 的 $\\text{O}_2$。注意 atm 单位与 $R$ 中的 atm 相消，剩下摩尔。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Molar Mass of an Unknown Gas",
                "zh": "例题 2：未知气体的摩尔质量"
              },
              "problem": {
                "en": "An unknown gas has a density of $1.96\\ \\text{g/L}$ at STP ($273\\ \\text{K}$, $1.00\\ \\text{atm}$). What is its molar mass, and which common gas could it be?",
                "zh": "某未知气体在标准状况（$273\\ \\text{K}$、$1.00\\ \\text{atm}$）下密度为 $1.96\\ \\text{g/L}$。它的摩尔质量是多少？它可能是哪种常见气体？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use $M = dRT/P$ with $R = 0.0821$:",
                  "zh": "用 $M = dRT/P$，取 $R = 0.0821$："
                },
                {
                  "type": "math",
                  "tex": "M = \\frac{dRT}{P} = \\frac{(1.96\\ \\text{g/L})(0.0821)(273\\ \\text{K})}{1.00\\ \\text{atm}} = 43.9\\ \\text{g/mol}"
                },
                {
                  "type": "p",
                  "en": "A molar mass near $44\\ \\text{g/mol}$ matches carbon dioxide, $\\text{CO}_2$ ($12 + 2 \\times 16 = 44\\ \\text{g/mol}$). Its high density compared with air is why $\\text{CO}_2$ can smother a flame by sinking over it.",
                  "zh": "约 $44\\ \\text{g/mol}$ 的摩尔质量与二氧化碳 $\\text{CO}_2$ 相符（$12 + 2 \\times 16 = 44\\ \\text{g/mol}$）。它比空气密度大，正是 $\\text{CO}_2$ 能下沉覆盖火焰、使其熄灭的原因。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "When pressure is measured in atm, volume in L, and temperature in K, which value of $R$ should be used in $PV = nRT$?",
                "zh": "当压强用 atm、体积用 L、温度用 K 时，$PV = nRT$ 中应使用哪个 $R$ 值？"
              },
              "choices": [
                "$0.0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$",
                "$8.314\\ \\frac{\\text{L}\\cdot\\text{kPa}}{\\text{mol}\\cdot\\text{K}}$",
                "$760\\ \\frac{\\text{mmHg}}{\\text{atm}}$",
                "$22.4\\ \\frac{\\text{L}}{\\text{mol}}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$R = 0.0821\\ \\text{L·atm/(mol·K)}$ matches atm and L. The value $8.314$ is for kPa, and $22.4\\ \\text{L/mol}$ is the molar volume at STP, not the gas constant.",
                "zh": "$R = 0.0821\\ \\text{L·atm/(mol·K)}$ 与 atm 和 L 匹配。$8.314$ 用于 kPa，而 $22.4\\ \\text{L/mol}$ 是标准状况下的摩尔体积，不是气体常数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What volume (in L) does $2.00\\ \\text{mol}$ of any ideal gas occupy at STP? Give your answer to 3 sig figs.",
                "zh": "在标准状况下，$2.00\\ \\text{mol}$ 任何理想气体占多少体积（单位 L）？答案保留 3 位有效数字。"
              },
              "answer": "44.8",
              "accept": [
                "44.80"
              ],
              "explanation": {
                "en": "Molar volume at STP is $22.4\\ \\text{L/mol}$, so $2.00\\ \\text{mol} \\times 22.4\\ \\text{L/mol} = 44.8\\ \\text{L}$.",
                "zh": "标准状况下摩尔体积为 $22.4\\ \\text{L/mol}$，所以 $2.00\\ \\text{mol} \\times 22.4\\ \\text{L/mol} = 44.8\\ \\text{L}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "According to kinetic molecular theory, what does the Kelvin temperature of a gas measure?",
                "zh": "根据分子动理论，气体的开尔文温度衡量的是什么？"
              },
              "choices": [
                "The total mass of the gas particles",
                "The average kinetic energy of the gas particles",
                "The volume of a single gas particle",
                "The strength of attractions between particles"
              ],
              "answer": 1,
              "explanation": {
                "en": "Kelvin temperature is directly proportional to the average kinetic energy of the particles. In the ideal model there are no attractions, and particle volume is treated as negligible.",
                "zh": "开尔文温度与粒子的平均动能成正比。在理想模型中不存在吸引力，粒子体积也被视为可忽略。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two flasks at the same temperature hold helium and oxygen. Which statement is true?",
                "zh": "两个相同温度的烧瓶分别装有氦气和氧气。哪种说法正确？"
              },
              "choices": [
                "The oxygen molecules move faster on average",
                "Both gases have the same average kinetic energy",
                "The helium atoms have more kinetic energy",
                "Both gases have particles moving at the same speed"
              ],
              "answer": 1,
              "explanation": {
                "en": "At equal temperature, average kinetic energy is identical for both gases. Because helium is lighter, its atoms move FASTER on average to have the same energy — so \"same speed\" and \"oxygen faster\" are both wrong.",
                "zh": "在相同温度下，两种气体的平均动能相同。由于氦更轻，它的原子平均运动得更快才能有相同的动能——所以“速度相同”和“氧气更快”都是错的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A container holds nitrogen at $0.60\\ \\text{atm}$ and oxygen at $0.25\\ \\text{atm}$. What is the total pressure (in atm)? Give your answer to 2 sig figs.",
                "zh": "一个容器中氮气分压为 $0.60\\ \\text{atm}$，氧气分压为 $0.25\\ \\text{atm}$。总压强是多少（单位 atm）？答案保留 2 位有效数字。"
              },
              "answer": "0.85",
              "accept": [
                ".85"
              ],
              "explanation": {
                "en": "By Dalton's law, $P_{\\text{total}} = P_{\\text{N}_2} + P_{\\text{O}_2} = 0.60 + 0.25 = 0.85\\ \\text{atm}$. Partial pressures simply add.",
                "zh": "根据道尔顿定律，$P_{\\text{total}} = P_{\\text{N}_2} + P_{\\text{O}_2} = 0.60 + 0.25 = 0.85\\ \\text{atm}$。分压直接相加。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A gas is collected over water. The total pressure is $755\\ \\text{mmHg}$ and the water vapor pressure is $24\\ \\text{mmHg}$. What is the pressure of the dry gas?",
                "zh": "用排水法收集一种气体。总压强为 $755\\ \\text{mmHg}$，水蒸气压为 $24\\ \\text{mmHg}$。干燥气体的压强是多少？"
              },
              "choices": [
                "$779\\ \\text{mmHg}$",
                "$755\\ \\text{mmHg}$",
                "$731\\ \\text{mmHg}$",
                "$24\\ \\text{mmHg}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The dry gas pressure is the total minus the water vapor: $755 - 24 = 731\\ \\text{mmHg}$. Adding (giving $779$) is the tempting error — the water vapor is part of the total, so it is subtracted.",
                "zh": "干燥气体的压强等于总压减去水蒸气压：$755 - 24 = 731\\ \\text{mmHg}$。相加（得 $779$）是易犯的错误——水蒸气是总压的一部分，所以要减去。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $PV = nRT$ with $R = 0.0821$, find the pressure (in atm) of $0.500\\ \\text{mol}$ of gas in a $2.00\\ \\text{L}$ container at $300\\ \\text{K}$. Give your answer to 2 sig figs.",
                "zh": "用 $PV = nRT$（取 $R = 0.0821$），求 $300\\ \\text{K}$ 时装在 $2.00\\ \\text{L}$ 容器中的 $0.500\\ \\text{mol}$ 气体的压强（单位 atm）。答案保留 2 位有效数字。"
              },
              "answer": "6.2",
              "accept": [
                "6.16",
                "6.2 atm"
              ],
              "explanation": {
                "en": "$P = nRT/V = (0.500)(0.0821)(300)/2.00 = 6.16 \\approx 6.2\\ \\text{atm}$. Temperature is already in Kelvin, so no conversion is needed.",
                "zh": "$P = nRT/V = (0.500)(0.0821)(300)/2.00 = 6.16 \\approx 6.2\\ \\text{atm}$。温度已是开尔文，无需换算。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the reaction $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, how many liters of oxygen at STP are needed to react completely with $4.48\\ \\text{L}$ of hydrogen at STP?",
                "zh": "对于反应 $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$，在标准状况下要使 $4.48\\ \\text{L}$ 氢气完全反应，需要多少升标准状况下的氧气？"
              },
              "choices": [
                "$1.12\\ \\text{L}$",
                "$4.48\\ \\text{L}$",
                "$8.96\\ \\text{L}$",
                "$2.24\\ \\text{L}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "At the same temperature and pressure, gas volumes are in the same ratio as moles. The equation needs $2\\ \\text{H}_2 : 1\\ \\text{O}_2$, so oxygen volume is half of hydrogen: $4.48/2 = 2.24\\ \\text{L}$. Choosing $4.48$ ignores the 2:1 mole ratio.",
                "zh": "在相同温度和压强下，气体体积之比等于摩尔数之比。方程要求 $2\\ \\text{H}_2 : 1\\ \\text{O}_2$，所以氧气体积是氢气的一半：$4.48/2 = 2.24\\ \\text{L}$。选 $4.48$ 忽略了 2:1 的摩尔比。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "solutions",
      "title": "Unit 7: Solutions",
      "titleZh": "第七单元：溶液",
      "lessons": [
        {
          "id": "solutions-and-solubility",
          "title": "Solutions, Solubility, and the Dissolving Process",
          "titleZh": "溶液、溶解度与溶解过程",
          "content": [
            {
              "type": "h2",
              "en": "The Language of Solutions",
              "zh": "溶液的术语"
            },
            {
              "type": "p",
              "en": "A solution is a homogeneous mixture — it looks uniform all the way down to the particle level. Every solution has two parts: the solute is the substance that gets dissolved (present in the smaller amount), and the solvent is the substance that does the dissolving (present in the larger amount). When you stir salt into water, salt is the solute and water is the solvent. Because water dissolves so many things, it is called the universal solvent, and any solution in which water is the solvent is called an aqueous solution.",
              "zh": "溶液是均匀混合物——即使深入到粒子层面看也是均匀的。每个溶液都有两部分：溶质是被溶解的物质（量较少），溶剂是起溶解作用的物质（量较多）。当你把盐搅入水中时，盐是溶质，水是溶剂。因为水能溶解许多物质，它被称为“万能溶剂”，凡是以水作溶剂的溶液都叫水溶液。"
            },
            {
              "type": "note",
              "en": "Exam tip: solute and solvent are defined by amount, not by state. In a solution of $95\\%$ water and $5\\%$ ethanol, ethanol is the solute even though both are liquids. The component present in the greater amount is always the solvent.",
              "zh": "考试提示：溶质和溶剂是按“量的多少”而不是按状态来区分的。在 $95\\%$ 水与 $5\\%$ 乙醇的溶液中，尽管两者都是液体，乙醇仍是溶质。量较多的组分永远是溶剂。"
            },
            {
              "type": "h2",
              "en": "The Dissolving Process at the Particle Level",
              "zh": "粒子层面的溶解过程"
            },
            {
              "type": "p",
              "en": "Dissolving happens when solvent particles surround and pull apart solute particles, a process called solvation (or hydration when the solvent is water). For an ionic solid like $\\text{NaCl}$, the slightly negative oxygen ends of water molecules attach to the $\\text{Na}^+$ ions and the slightly positive hydrogen ends attach to the $\\text{Cl}^-$ ions. The tug of many water molecules overcomes the attraction holding the crystal together, and the ions drift off into solution surrounded by water.",
              "zh": "溶解发生在溶剂粒子包围并把溶质粒子拉开的时候，这一过程叫溶剂化（当溶剂是水时叫水合）。对于像 $\\text{NaCl}$ 这样的离子固体，水分子带微弱负电的氧端会吸附到 $\\text{Na}^+$ 离子上，带微弱正电的氢端会吸附到 $\\text{Cl}^-$ 离子上。众多水分子的拉力克服了维系晶体的吸引力，离子便被水包围着扩散进溶液。"
            },
            {
              "type": "h3",
              "en": "Why \"Like Dissolves Like\"",
              "zh": "为什么“相似相溶”"
            },
            {
              "type": "p",
              "en": "The rule of thumb is that like dissolves like: polar solvents dissolve polar and ionic solutes, and nonpolar solvents dissolve nonpolar solutes. Water (polar) dissolves salt and sugar but not oil, because the strong attractions between polar water molecules will not make room for nonpolar oil molecules — instead the water molecules cling to each other and squeeze the oil out. For a solute to dissolve, the new solute–solvent attractions must be able to replace the attractions that were broken.",
              "zh": "经验法则是“相似相溶”：极性溶剂溶解极性和离子溶质，非极性溶剂溶解非极性溶质。水（极性）能溶解盐和糖却溶不了油，因为极性水分子之间的强吸引力不愿给非极性油分子腾出空间——水分子彼此紧抱，把油挤了出去。要让溶质溶解，新形成的溶质—溶剂吸引力必须能够替代被破坏的那些吸引力。"
            },
            {
              "type": "h3",
              "en": "Electrolytes vs. Nonelectrolytes",
              "zh": "电解质与非电解质"
            },
            {
              "type": "p",
              "en": "When a solute dissolves in water, whether the solution conducts electricity depends on whether ions are present. An electrolyte produces ions in solution and conducts electricity; a nonelectrolyte dissolves as neutral molecules and does not conduct.",
              "zh": "当溶质溶于水时，溶液能否导电取决于其中是否存在离子。电解质在溶液中产生离子并能导电；非电解质以中性分子形式溶解，不能导电。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Strong electrolytes (soluble ionic compounds like $\\text{NaCl}$, and strong acids like $\\text{HCl}$) dissociate almost completely into ions — the solution conducts strongly.",
                  "zh": "强电解质（如 $\\text{NaCl}$ 等可溶离子化合物，以及 $\\text{HCl}$ 等强酸）几乎完全电离成离子——溶液导电性强。"
                },
                {
                  "en": "Weak electrolytes (like acetic acid in vinegar) form only a few ions — the solution conducts weakly.",
                  "zh": "弱电解质（如醋中的乙酸）只产生少量离子——溶液导电性弱。"
                },
                {
                  "en": "Nonelectrolytes (like sugar, $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$, or ethanol) dissolve as whole molecules with no ions — the solution does not conduct.",
                  "zh": "非电解质（如蔗糖 $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$ 或乙醇）以完整分子溶解，不产生离子——溶液不导电。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: thinking that anything dissolved in water conducts electricity. Sugar water does not light a conductivity bulb at all — dissolving is not the same as forming ions. Only solutes that release charged particles (ions) let the solution carry a current.",
              "zh": "常见错误：以为凡是溶于水的东西都能导电。糖水根本无法点亮导电性测试灯泡——溶解并不等于产生离子。只有能释放带电粒子（离子）的溶质才能让溶液导电。"
            },
            {
              "type": "h2",
              "en": "Rate of Dissolving vs. Amount That Dissolves",
              "zh": "溶解速率与溶解量"
            },
            {
              "type": "p",
              "en": "Two different questions are easy to confuse: how fast a solute dissolves (rate) and how much can dissolve (solubility). The rate of dissolving is increased by three things that put more solvent in contact with the solute surface, but none of them change the final amount that dissolves.",
              "zh": "有两个容易混淆的问题：溶质溶解得多快（速率）和最多能溶解多少（溶解度）。让更多溶剂接触溶质表面可以加快溶解速率，共有三种方法，但它们都不会改变最终的溶解量。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Stirring (agitation): moves fresh solvent to the solute surface.",
                  "zh": "搅拌：把新鲜溶剂带到溶质表面。"
                },
                {
                  "en": "Heating: faster-moving solvent particles collide with the solute more often.",
                  "zh": "加热：运动更快的溶剂粒子更频繁地撞击溶质。"
                },
                {
                  "en": "Increasing surface area (grinding into powder): exposes more solute to the solvent at once.",
                  "zh": "增大表面积（磨成粉末）：一次让更多溶质暴露于溶剂中。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Solubility and Saturation",
              "zh": "溶解度与饱和"
            },
            {
              "type": "p",
              "en": "Solubility is the maximum amount of solute that dissolves in a given amount of solvent at a given temperature, usually reported as grams of solute per $100\\ \\text{g}$ of water. Using solubility we describe three kinds of solution:",
              "zh": "溶解度是指在给定温度下，一定量溶剂中能溶解溶质的最大量，通常以每 $100\\ \\text{g}$ 水中溶解溶质的克数表示。根据溶解度，我们把溶液分为三类："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Unsaturated: less solute is dissolved than the maximum, so more can still dissolve.",
                  "zh": "不饱和：已溶解的溶质少于最大值，还能继续溶解更多。"
                },
                {
                  "en": "Saturated: the solution holds the maximum amount; dissolved and undissolved solute are in dynamic equilibrium.",
                  "zh": "饱和：溶液已溶解最大量；已溶解与未溶解的溶质处于动态平衡。"
                },
                {
                  "en": "Supersaturated: an unstable state holding more solute than the maximum, made by dissolving at high temperature then cooling carefully. Disturbing it makes the excess solute crystallize out at once.",
                  "zh": "过饱和：一种不稳定状态，所含溶质超过了最大值，通过在高温下溶解后小心冷却而形成。一旦受扰动，多余的溶质会立刻结晶析出。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Effect of Temperature and Pressure",
              "zh": "温度与压强的影响"
            },
            {
              "type": "p",
              "en": "For most solid solutes, solubility increases as temperature rises — hot water dissolves more sugar than cold water. For gases the trend is the opposite: gas solubility decreases as temperature rises (warm soda goes flat faster because it holds less $\\text{CO}_2$). Pressure barely affects solids and liquids, but it strongly affects gases. Henry's law states that the solubility of a gas is directly proportional to the pressure of that gas above the liquid, which is why a soda can fizzes when you open it and release the pressure.",
              "zh": "对大多数固体溶质，溶解度随温度升高而增大——热水比冷水能溶解更多糖。对气体则相反：气体溶解度随温度升高而减小（温热的汽水更快跑气，因为它容纳的 $\\text{CO}_2$ 更少）。压强对固体和液体几乎没有影响，但对气体影响很大。亨利定律指出：气体的溶解度与液面上方该气体的压强成正比，这正是打开汽水罐、压强释放时会冒泡的原因。"
            },
            {
              "type": "h3",
              "en": "Reading a Solubility Curve",
              "zh": "读溶解度曲线"
            },
            {
              "type": "p",
              "en": "A solubility curve plots solubility (g per $100\\ \\text{g}$ water) on the y-axis against temperature on the x-axis. A point exactly on the curve represents a saturated solution; a point below the curve is unsaturated (more could dissolve); a point above the curve is supersaturated (unstable). To find how much solute crystallizes when a saturated solution is cooled, subtract the solubility at the lower temperature from the solubility at the higher temperature.",
              "zh": "溶解度曲线的纵轴是溶解度（每 $100\\ \\text{g}$ 水中溶解的克数），横轴是温度。恰好落在曲线上的点代表饱和溶液；曲线下方的点是不饱和（还能溶解更多）；曲线上方的点是过饱和（不稳定）。要算出饱和溶液冷却时会结晶析出多少溶质，只需用较高温度下的溶解度减去较低温度下的溶解度。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Predicting Solubility",
                "zh": "例题 1：预测溶解度"
              },
              "problem": {
                "en": "Will each solute dissolve well in water? Explain using \"like dissolves like\": (a) potassium nitrate, $\\text{KNO}_3$ (ionic), (b) vegetable oil (nonpolar), (c) ammonia, $\\text{NH}_3$ (polar).",
                "zh": "下列溶质在水中溶解性好吗？用“相似相溶”解释：(a) 硝酸钾 $\\text{KNO}_3$（离子型），(b) 植物油（非极性），(c) 氨 $\\text{NH}_3$（极性）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) $\\text{KNO}_3$ is ionic, and water is polar, so water molecules surround and pull apart the ions — it dissolves well.",
                  "zh": "(a) $\\text{KNO}_3$ 是离子型，水是极性的，水分子会包围并拉开离子——溶解性好。"
                },
                {
                  "type": "p",
                  "en": "(b) Oil is nonpolar and cannot form strong attractions with polar water, so the water molecules exclude it — it does not dissolve (they form separate layers).",
                  "zh": "(b) 油是非极性的，无法与极性水形成强吸引力，水分子会把它排斥出去——不溶解（会分成两层）。"
                },
                {
                  "type": "p",
                  "en": "(c) $\\text{NH}_3$ is polar and even forms hydrogen bonds with water, so it dissolves very well — like dissolves like.",
                  "zh": "(c) $\\text{NH}_3$ 是极性的，甚至能与水形成氢键，所以溶解性很好——相似相溶。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Crystallizing from a Solubility Curve",
                "zh": "例题 2：从溶解度曲线计算结晶量"
              },
              "problem": {
                "en": "The solubility of $\\text{KNO}_3$ is $110\\ \\text{g}$ per $100\\ \\text{g}$ water at $60\\,^{\\circ}\\text{C}$ and $32\\ \\text{g}$ per $100\\ \\text{g}$ water at $20\\,^{\\circ}\\text{C}$. A solution saturated at $60\\,^{\\circ}\\text{C}$ using $100\\ \\text{g}$ of water is cooled to $20\\,^{\\circ}\\text{C}$. How many grams of $\\text{KNO}_3$ crystallize out?",
                "zh": "$\\text{KNO}_3$ 在 $60\\,^{\\circ}\\text{C}$ 时的溶解度为每 $100\\ \\text{g}$ 水 $110\\ \\text{g}$，在 $20\\,^{\\circ}\\text{C}$ 时为每 $100\\ \\text{g}$ 水 $32\\ \\text{g}$。用 $100\\ \\text{g}$ 水在 $60\\,^{\\circ}\\text{C}$ 配成饱和溶液后冷却到 $20\\,^{\\circ}\\text{C}$，会有多少克 $\\text{KNO}_3$ 结晶析出？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At $60\\,^{\\circ}\\text{C}$ the water holds $110\\ \\text{g}$; at $20\\,^{\\circ}\\text{C}$ it can hold only $32\\ \\text{g}$. The excess that can no longer stay dissolved crystallizes out:",
                  "zh": "在 $60\\,^{\\circ}\\text{C}$ 时水中溶有 $110\\ \\text{g}$；在 $20\\,^{\\circ}\\text{C}$ 时只能溶 $32\\ \\text{g}$。无法再溶解的多余部分结晶析出："
                },
                {
                  "type": "math",
                  "tex": "110\\ \\text{g} - 32\\ \\text{g} = 78\\ \\text{g}"
                },
                {
                  "type": "p",
                  "en": "So $78\\ \\text{g}$ of $\\text{KNO}_3$ crystallizes, and the cooled solution is now saturated at $20\\,^{\\circ}\\text{C}$.",
                  "zh": "所以有 $78\\ \\text{g}$ $\\text{KNO}_3$ 结晶析出，冷却后的溶液在 $20\\,^{\\circ}\\text{C}$ 时恰好饱和。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In a solution made of $10\\ \\text{g}$ of salt dissolved in $200\\ \\text{g}$ of water, which is the solvent?",
                "zh": "在由 $10\\ \\text{g}$ 盐溶于 $200\\ \\text{g}$ 水配成的溶液中，哪个是溶剂？"
              },
              "choices": [
                "The salt",
                "The water",
                "Both equally",
                "Neither — a solution has no solvent"
              ],
              "answer": 1,
              "explanation": {
                "en": "The solvent is the component present in the greater amount. Water ($200\\ \\text{g}$) is far more than salt ($10\\ \\text{g}$), so water is the solvent and salt is the solute. It is tempting to name the salt because it is \"what dissolves,\" but that makes it the solute.",
                "zh": "溶剂是量较多的组分。水（$200\\ \\text{g}$）远多于盐（$10\\ \\text{g}$），所以水是溶剂，盐是溶质。容易误选盐，因为它是“被溶解的东西”，但那恰恰使它成为溶质。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which solution would best conduct electricity?",
                "zh": "下列哪种溶液导电性最好？"
              },
              "choices": [
                "Sugar dissolved in water",
                "Ethanol dissolved in water",
                "Table salt ($\\text{NaCl}$) dissolved in water",
                "Pure distilled water"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\text{NaCl}$ is a strong electrolyte: it dissociates into $\\text{Na}^+$ and $\\text{Cl}^-$ ions that carry current. Sugar and ethanol are nonelectrolytes (they dissolve as neutral molecules), and pure water has almost no ions.",
                "zh": "$\\text{NaCl}$ 是强电解质：它电离成 $\\text{Na}^+$ 和 $\\text{Cl}^-$ 离子来传导电流。糖和乙醇是非电解质（以中性分子溶解），纯水几乎没有离子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why does an opened bottle of soda go flat, and warm soda go flat even faster?",
                "zh": "为什么打开的汽水会跑气，而温热的汽水跑气更快？"
              },
              "choices": [
                "Gas solubility increases with lower pressure and higher temperature",
                "Gas solubility only depends on stirring",
                "Warm liquids hold more dissolved gas",
                "Gas solubility decreases with lower pressure and higher temperature"
              ],
              "answer": 3,
              "explanation": {
                "en": "By Henry's law, lower pressure above the liquid means less $\\text{CO}_2$ stays dissolved, so it fizzes out. Higher temperature also lowers gas solubility, so warm soda loses its $\\text{CO}_2$ faster. The other choices reverse the correct temperature or pressure trend.",
                "zh": "根据亨利定律，液面上方压强降低意味着溶解的 $\\text{CO}_2$ 减少，于是冒出气泡。温度升高也会降低气体溶解度，所以温热的汽水更快失去 $\\text{CO}_2$。其他选项把温度或压强的正确趋势弄反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student adds sugar to iced tea and it all dissolves. Which action increases the RATE of dissolving but not the total amount that can dissolve?",
                "zh": "一名学生把糖加入冰茶中并全部溶解。下列哪个操作能加快溶解速率但不改变最终能溶解的总量？"
              },
              "choices": [
                "Stirring the tea",
                "Adding more sugar",
                "Removing some water",
                "Letting it sit untouched overnight"
              ],
              "answer": 0,
              "explanation": {
                "en": "Stirring brings fresh solvent to the sugar surface, speeding dissolving, but the solubility (maximum amount) is fixed by temperature. Adding sugar or removing water changes amounts, not rate; sitting still is slower, not faster.",
                "zh": "搅拌把新鲜溶剂带到糖的表面，加快溶解，但溶解度（最大量）由温度决定、不变。加糖或去水改变的是量而非速率；静置不动只会更慢。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solution that contains the maximum amount of dissolved solute at a given temperature, with dissolved and undissolved solute in equilibrium, is called a ______ solution. (One word, in English.)",
                "zh": "在给定温度下含有最大溶解量、已溶解与未溶解溶质处于平衡的溶液，叫做 ______ 溶液。（填一个英文单词。）"
              },
              "answer": "saturated",
              "accept": [
                "Saturated"
              ],
              "explanation": {
                "en": "Saturated means no more solute can dissolve at that temperature. Below the maximum it is unsaturated; above the maximum (unstable) it is supersaturated.",
                "zh": "Saturated（饱和）意为该温度下不能再溶解更多溶质。低于最大值为不饱和；高于最大值（不稳定）为过饱和。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The solubility of $\\text{KClO}_3$ is $24\\ \\text{g}$ per $100\\ \\text{g}$ water at $70\\,^{\\circ}\\text{C}$ and $7\\ \\text{g}$ per $100\\ \\text{g}$ water at $30\\,^{\\circ}\\text{C}$. If a solution saturated at $70\\,^{\\circ}\\text{C}$ using $100\\ \\text{g}$ of water is cooled to $30\\,^{\\circ}\\text{C}$, how many grams crystallize out? (Give a whole number in grams.)",
                "zh": "$\\text{KClO}_3$ 在 $70\\,^{\\circ}\\text{C}$ 时溶解度为每 $100\\ \\text{g}$ 水 $24\\ \\text{g}$，在 $30\\,^{\\circ}\\text{C}$ 时为 $7\\ \\text{g}$。若用 $100\\ \\text{g}$ 水在 $70\\,^{\\circ}\\text{C}$ 配成的饱和溶液冷却到 $30\\,^{\\circ}\\text{C}$，会有多少克结晶析出？（填一个整数，单位克。）"
              },
              "answer": "17",
              "accept": [
                "17 g"
              ],
              "explanation": {
                "en": "Subtract the lower-temperature solubility from the higher: $24\\ \\text{g} - 7\\ \\text{g} = 17\\ \\text{g}$. That excess can no longer stay dissolved once the water cools, so it crystallizes out.",
                "zh": "用高温溶解度减去低温溶解度：$24\\ \\text{g} - 7\\ \\text{g} = 17\\ \\text{g}$。水冷却后这部分多余溶质无法继续溶解，便结晶析出。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Oil and water form separate layers instead of mixing. The best particle-level explanation is that…",
                "zh": "油和水会分层而不混合。最佳的粒子层面解释是……"
              },
              "choices": [
                "polar water molecules attract each other strongly and exclude the nonpolar oil molecules",
                "oil molecules are too heavy to move",
                "oil is an electrolyte and water is not",
                "water molecules are nonpolar"
              ],
              "answer": 0,
              "explanation": {
                "en": "\"Like dissolves like\": polar water molecules attract one another strongly and cannot form comparable attractions to nonpolar oil, so they cling together and squeeze the oil out. Weight is not the issue, oil is not an electrolyte, and water is polar (not nonpolar).",
                "zh": "“相似相溶”：极性水分子彼此强烈吸引，无法与非极性油形成相当的吸引力，于是紧抱在一起把油挤出去。重量不是原因，油不是电解质，水是极性的（不是非极性）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On a solubility curve, a data point plotted BELOW the curve line represents a solution that is…",
                "zh": "在溶解度曲线上，落在曲线下方的数据点代表的溶液是……"
              },
              "choices": [
                "supersaturated",
                "saturated",
                "unsaturated",
                "unable to exist"
              ],
              "answer": 2,
              "explanation": {
                "en": "Below the curve, less solute is dissolved than the maximum, so more could still dissolve — that is unsaturated. On the curve is exactly saturated; above the curve (holding more than the maximum) is the unstable supersaturated case.",
                "zh": "曲线下方表示溶解的溶质少于最大值，还能溶解更多——即不饱和。曲线上恰为饱和；曲线上方（超过最大值）是不稳定的过饱和情况。"
              }
            }
          ]
        },
        {
          "id": "molarity-and-concentration",
          "title": "Concentration, Molarity, and Dilution",
          "titleZh": "浓度、摩尔浓度与稀释",
          "content": [
            {
              "type": "h2",
              "en": "Measuring Concentration",
              "zh": "衡量浓度"
            },
            {
              "type": "p",
              "en": "Concentration describes how much solute is dissolved in a given amount of solution. A concentrated solution has a lot of solute per unit volume; a dilute solution has little. To do chemistry we need a precise numerical measure of concentration, and the most useful one for reactions is molarity, because it connects directly to moles.",
              "zh": "浓度描述在一定量溶液中溶解了多少溶质。浓溶液每单位体积含大量溶质；稀溶液则很少。做化学需要一个精确的浓度数值，而在反应中最有用的是摩尔浓度，因为它直接与摩尔数相联系。"
            },
            {
              "type": "h2",
              "en": "Molarity",
              "zh": "摩尔浓度"
            },
            {
              "type": "p",
              "en": "Molarity ($M$) is the number of moles of solute per liter of solution. Notice it is per liter of solution (solute plus solvent together after mixing), not per liter of solvent.",
              "zh": "摩尔浓度（$M$）是每升溶液中溶质的摩尔数。注意是“每升溶液”（混合后溶质加溶剂的总量），而不是每升溶剂。"
            },
            {
              "type": "math",
              "tex": "M = \\frac{\\text{moles of solute}}{\\text{liters of solution}}"
            },
            {
              "type": "p",
              "en": "A solution labeled $2.0\\ M$ (read \"2.0 molar\") contains $2.0$ moles of solute in every liter of solution. If a problem gives you grams instead of moles, convert grams to moles first using the molar mass, then divide by the volume in liters.",
              "zh": "标注为 $2.0\\ M$（读作“2.0 摩尔每升”）的溶液，每升溶液含 $2.0$ 摩尔溶质。如果题目给的是克而不是摩尔，先用摩尔质量把克换算成摩尔，再除以以升为单位的体积。"
            },
            {
              "type": "note",
              "en": "Common mistake: dividing by milliliters instead of liters, or forgetting to convert grams to moles. Molarity is moles per LITER — always convert mL to L (divide by $1000$) and convert grams to moles (divide by molar mass) before dividing.",
              "zh": "常见错误：用毫升而不是升来除，或忘记把克换算成摩尔。摩尔浓度是“每升的摩尔数”——务必先把 mL 换成 L（除以 $1000$）、把克换成摩尔（除以摩尔质量）再相除。"
            },
            {
              "type": "h3",
              "en": "Preparing a Solution of Known Molarity",
              "zh": "配制已知摩尔浓度的溶液"
            },
            {
              "type": "p",
              "en": "To prepare, say, $500\\ \\text{mL}$ of $1.0\\ M$ $\\text{NaCl}$, you first calculate the moles needed ($M \\times V$), convert to grams with the molar mass, and weigh out that mass. Then you add the solid to a volumetric flask, dissolve it in some water, and add water up to the calibration mark. You do not add the solute to a full liter of water — you dissolve it and then bring the total volume to the target, because the solute itself takes up space.",
              "zh": "例如要配制 $500\\ \\text{mL}$ 的 $1.0\\ M$ $\\text{NaCl}$，先算出所需摩尔数（$M \\times V$），用摩尔质量换算成克，称取这个质量。然后把固体加入容量瓶，用一些水溶解，再加水到刻度线。不要把溶质加入一整升水中——而是先溶解再定容到目标体积，因为溶质本身也占空间。"
            },
            {
              "type": "h2",
              "en": "Dilution",
              "zh": "稀释"
            },
            {
              "type": "p",
              "en": "Diluting means adding solvent to lower the concentration. Adding water spreads the same number of moles of solute through a larger volume, so the moles of solute do not change. Since moles $= M \\times V$, that gives the dilution equation:",
              "zh": "稀释是指加入溶剂以降低浓度。加水把相同摩尔数的溶质分散到更大的体积中，因此溶质的摩尔数不变。由于摩尔数 $= M \\times V$，就得到稀释公式："
            },
            {
              "type": "math",
              "tex": "M_1 V_1 = M_2 V_2"
            },
            {
              "type": "p",
              "en": "Here $M_1$ and $V_1$ are the concentration and volume before dilution, and $M_2$ and $V_2$ are after. Because both sides are just moles, any consistent volume unit works (both in mL or both in L) as long as you use the same unit on both sides.",
              "zh": "这里 $M_1$、$V_1$ 是稀释前的浓度和体积，$M_2$、$V_2$ 是稀释后的。由于两边都是摩尔数，只要两边用同一个体积单位（都用 mL 或都用 L），任何一致的体积单位都可以。"
            },
            {
              "type": "note",
              "en": "Exam tip: when acids like $\\text{H}_2\\text{SO}_4$ are diluted, always add acid to water, never water to acid. The mixing releases heat, and adding a small amount of water to concentrated acid can boil and splash it out. \"Do what you oughta, add acid to water.\"",
              "zh": "考试提示：稀释像 $\\text{H}_2\\text{SO}_4$ 这样的酸时，永远是把酸加入水中，而不是把水加入酸中。混合会放热，向浓酸中加少量水可能使其沸腾溅出。记住“应该做的：把酸加入水”。"
            },
            {
              "type": "h2",
              "en": "Other Ways to Express Concentration",
              "zh": "表达浓度的其他方式"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Percent by mass: $\\%\\text{ mass} = \\dfrac{\\text{mass of solute}}{\\text{mass of solution}} \\times 100\\%$. Useful for everyday solutions like a $5\\%$ salt solution.",
                  "zh": "质量百分数：$\\%\\text{质量} = \\dfrac{\\text{溶质质量}}{\\text{溶液质量}} \\times 100\\%$。适用于像 $5\\%$ 盐水这样的日常溶液。"
                },
                {
                  "en": "Parts per million (ppm): $\\text{ppm} = \\dfrac{\\text{mass of solute}}{\\text{mass of solution}} \\times 10^6$. Used for very dilute solutions, like pollutants or minerals in drinking water.",
                  "zh": "百万分比（ppm）：$\\text{ppm} = \\dfrac{\\text{溶质质量}}{\\text{溶液质量}} \\times 10^6$。用于极稀的溶液，如饮用水中的污染物或矿物质。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For dilute water solutions, $1\\ \\text{ppm}$ is about $1\\ \\text{mg}$ of solute per $\\text{kg}$ (or per liter) of solution, because a liter of dilute solution has a mass of about $1000\\ \\text{g}$.",
              "zh": "对稀水溶液，$1\\ \\text{ppm}$ 约等于每 $\\text{kg}$（或每升）溶液中 $1\\ \\text{mg}$ 溶质，因为一升稀溶液的质量约为 $1000\\ \\text{g}$。"
            },
            {
              "type": "h2",
              "en": "Solution Stoichiometry Basics",
              "zh": "溶液化学计量基础"
            },
            {
              "type": "p",
              "en": "Molarity is a bridge between volume and moles. If you know the molarity and volume of a solution, you can find moles ($\\text{mol} = M \\times V$), then use the mole ratio from a balanced equation to find moles of another substance. This is the foundation of titration, a lab technique where a solution of known concentration is added to another until the reaction is just complete.",
              "zh": "摩尔浓度是体积与摩尔数之间的桥梁。若已知溶液的摩尔浓度和体积，就能求出摩尔数（$\\text{mol} = M \\times V$），再用配平方程式中的摩尔比求出另一种物质的摩尔数。这是滴定的基础——一种把已知浓度的溶液加入另一溶液直到反应恰好完成的实验技术。"
            },
            {
              "type": "h2",
              "en": "Colligative Properties",
              "zh": "依数性（稀溶液的性质）"
            },
            {
              "type": "p",
              "en": "Some properties of a solution depend only on how many solute particles are dissolved, not on what they are. These are colligative properties. Two important ones are freezing point depression (a solution freezes at a lower temperature than the pure solvent) and boiling point elevation (a solution boils at a higher temperature). Dissolved particles get in the way of the solvent forming an orderly solid and reduce escape into the gas phase, so more cooling is needed to freeze and more heating is needed to boil.",
              "zh": "溶液的某些性质只取决于溶解了多少溶质粒子，而与它们是什么无关，这类性质叫依数性。两个重要的依数性是凝固点降低（溶液的凝固温度低于纯溶剂）和沸点升高（溶液的沸腾温度更高）。溶解的粒子妨碍溶剂形成有序固体，也减少了粒子逸入气相，所以需要更冷才能凝固、更热才能沸腾。"
            },
            {
              "type": "p",
              "en": "This is why salt is spread on icy roads: dissolved salt lowers water's freezing point, so ice melts and refreezing is harder. It is also why antifreeze (ethylene glycol) is added to a car's radiator — it both lowers the freezing point in winter and raises the boiling point in summer, protecting the engine in both seasons. Because ionic solutes break into multiple particles, $\\text{NaCl}$ ($\\to \\text{Na}^+ + \\text{Cl}^-$, 2 particles) affects freezing more than the same number of moles of sugar (1 particle).",
              "zh": "这就是为什么在结冰的路面上撒盐：溶解的盐降低了水的凝固点，使冰融化且更难重新结冰。这也是为什么给汽车水箱加防冻液（乙二醇）——它既在冬天降低凝固点，又在夏天升高沸点，两季都保护发动机。由于离子溶质会分裂成多个粒子，$\\text{NaCl}$（$\\to \\text{Na}^+ + \\text{Cl}^-$，2 个粒子）对凝固点的影响大于相同摩尔数的糖（1 个粒子）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Calculating Molarity",
                "zh": "例题 1：计算摩尔浓度"
              },
              "problem": {
                "en": "A student dissolves $23.4\\ \\text{g}$ of $\\text{NaCl}$ (molar mass $58.5\\ \\text{g/mol}$) in enough water to make $250.\\ \\text{mL}$ of solution. What is the molarity? (2 sig figs)",
                "zh": "一名学生把 $23.4\\ \\text{g}$ $\\text{NaCl}$（摩尔质量 $58.5\\ \\text{g/mol}$）溶于水配成 $250.\\ \\text{mL}$ 溶液。摩尔浓度是多少？（2 位有效数字）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First convert grams to moles:",
                  "zh": "先把克换算成摩尔："
                },
                {
                  "type": "math",
                  "tex": "23.4\\ \\text{g} \\times \\frac{1\\ \\text{mol}}{58.5\\ \\text{g}} = 0.400\\ \\text{mol}"
                },
                {
                  "type": "p",
                  "en": "Then convert the volume to liters: $250.\\ \\text{mL} = 0.250\\ \\text{L}$. Now divide:",
                  "zh": "再把体积换算成升：$250.\\ \\text{mL} = 0.250\\ \\text{L}$。然后相除："
                },
                {
                  "type": "math",
                  "tex": "M = \\frac{0.400\\ \\text{mol}}{0.250\\ \\text{L}} = 1.6\\ M"
                },
                {
                  "type": "p",
                  "en": "The concentration is $1.6\\ M$. Skipping the mL-to-L step is the most common error and would give an answer $1000$ times too small.",
                  "zh": "浓度为 $1.6\\ M$。漏掉 mL 到 L 的换算是最常见的错误，会得到一个小 $1000$ 倍的答案。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Dilution",
                "zh": "例题 2：稀释"
              },
              "problem": {
                "en": "How many milliliters of $12.0\\ M$ concentrated $\\text{HCl}$ are needed to make $500.\\ \\text{mL}$ of $3.00\\ M$ $\\text{HCl}$?",
                "zh": "需要多少毫升 $12.0\\ M$ 的浓盐酸才能配成 $500.\\ \\text{mL}$ 的 $3.00\\ M$ $\\text{HCl}$？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use $M_1 V_1 = M_2 V_2$ with $M_1 = 12.0\\ M$, $M_2 = 3.00\\ M$, $V_2 = 500.\\ \\text{mL}$. Solve for $V_1$:",
                  "zh": "用 $M_1 V_1 = M_2 V_2$，其中 $M_1 = 12.0\\ M$，$M_2 = 3.00\\ M$，$V_2 = 500.\\ \\text{mL}$。解出 $V_1$："
                },
                {
                  "type": "math",
                  "tex": "V_1 = \\frac{M_2 V_2}{M_1} = \\frac{(3.00\\ M)(500.\\ \\text{mL})}{12.0\\ M} = 125\\ \\text{mL}"
                },
                {
                  "type": "p",
                  "en": "Measure $125\\ \\text{mL}$ of the concentrated acid and add water up to $500.\\ \\text{mL}$ total. Remember to add the acid to the water for safety.",
                  "zh": "量取 $125\\ \\text{mL}$ 浓酸，加水到总量 $500.\\ \\text{mL}$。为安全起见，记得把酸加入水中。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "What is the molarity of a solution containing $0.50\\ \\text{mol}$ of $\\text{KBr}$ dissolved in $2.0\\ \\text{L}$ of solution? (Give the answer in $M$ to 2 sig figs.)",
                "zh": "含 $0.50\\ \\text{mol}$ $\\text{KBr}$ 溶于 $2.0\\ \\text{L}$ 溶液的摩尔浓度是多少？（用 $M$ 表示，保留 2 位有效数字。）"
              },
              "answer": "0.25",
              "accept": [
                "0.25 M",
                ".25"
              ],
              "explanation": {
                "en": "Molarity is moles divided by liters: $0.50\\ \\text{mol} \\div 2.0\\ \\text{L} = 0.25\\ M$. Both quantities are already in mol and L, so no conversion is needed.",
                "zh": "摩尔浓度是摩尔数除以升数：$0.50\\ \\text{mol} \\div 2.0\\ \\text{L} = 0.25\\ M$。两个量已经是 mol 和 L，无需换算。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many moles of solute are in $250\\ \\text{mL}$ of a $0.40\\ M$ solution?",
                "zh": "$250\\ \\text{mL}$ 的 $0.40\\ M$ 溶液中含多少摩尔溶质？"
              },
              "choices": [
                "$0.010\\ \\text{mol}$",
                "$0.10\\ \\text{mol}$",
                "$1.6\\ \\text{mol}$",
                "$100\\ \\text{mol}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Rearrange $M = \\text{mol}/V$ to $\\text{mol} = M \\times V = 0.40\\ M \\times 0.250\\ \\text{L} = 0.10\\ \\text{mol}$. The tempting error is to use $250$ instead of $0.250\\ \\text{L}$, which gives a wildly large answer.",
                "zh": "把 $M = \\text{mol}/V$ 变形为 $\\text{mol} = M \\times V = 0.40\\ M \\times 0.250\\ \\text{L} = 0.10\\ \\text{mol}$。诱人的错误是用 $250$ 而不是 $0.250\\ \\text{L}$，会得到大得离谱的答案。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $100.\\ \\text{mL}$ of $6.0\\ M$ $\\text{HCl}$ is diluted with water to a final volume of $300.\\ \\text{mL}$, what is the new molarity? (Give the answer in $M$ to 2 sig figs.)",
                "zh": "把 $100.\\ \\text{mL}$ 的 $6.0\\ M$ $\\text{HCl}$ 用水稀释到最终体积 $300.\\ \\text{mL}$，新的摩尔浓度是多少？（用 $M$ 表示，保留 2 位有效数字。）"
              },
              "answer": "2.0",
              "accept": [
                "2",
                "2.0 M"
              ],
              "explanation": {
                "en": "Use $M_1 V_1 = M_2 V_2$: $M_2 = \\frac{(6.0)(100.)}{300.} = 2.0\\ M$. Both volumes are in mL, which is fine since the units cancel. The concentration drops by a factor of 3 because the volume tripled.",
                "zh": "用 $M_1 V_1 = M_2 V_2$：$M_2 = \\frac{(6.0)(100.)}{300.} = 2.0\\ M$。两个体积都用 mL 即可，因为单位会相消。体积增大到 3 倍，浓度就降为 $1/3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When you dilute a solution by adding water, which quantity stays the SAME?",
                "zh": "当你加水稀释溶液时，哪个量保持不变？"
              },
              "choices": [
                "The molarity",
                "The total volume",
                "The concentration in ppm",
                "The moles of solute"
              ],
              "answer": 3,
              "explanation": {
                "en": "Adding water spreads the same solute through more volume, so the moles of solute are unchanged — that is exactly why $M_1 V_1 = M_2 V_2$ works (both sides equal the moles). The molarity, volume, and ppm all change.",
                "zh": "加水把相同的溶质分散到更大体积中，因此溶质的摩尔数不变——这正是 $M_1 V_1 = M_2 V_2$ 成立的原因（两边都等于摩尔数）。摩尔浓度、体积和 ppm 都会改变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solution is made by dissolving $15\\ \\text{g}$ of sugar in enough water to make $135\\ \\text{g}$ of solution. What is the percent by mass of sugar?",
                "zh": "把 $15\\ \\text{g}$ 糖溶于水配成 $135\\ \\text{g}$ 溶液。糖的质量百分数是多少？"
              },
              "choices": [
                "$11\\%$",
                "$9.0\\%$",
                "$15\\%$",
                "$90.\\%$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Percent by mass $= \\frac{15\\ \\text{g}}{135\\ \\text{g}} \\times 100\\% = 11\\%$. A common error is dividing by the mass of water ($120\\ \\text{g}$) instead of the total solution mass ($135\\ \\text{g}$).",
                "zh": "质量百分数 $= \\frac{15\\ \\text{g}}{135\\ \\text{g}} \\times 100\\% = 11\\%$。常见错误是除以水的质量（$120\\ \\text{g}$）而不是溶液总质量（$135\\ \\text{g}$）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why does spreading salt on an icy road help melt the ice?",
                "zh": "为什么在结冰的路面撒盐有助于融冰？"
              },
              "choices": [
                "Salt raises the freezing point of water",
                "Salt raises the boiling point, melting ice",
                "Salt lowers the freezing point of water",
                "Salt reacts chemically with ice to make heat"
              ],
              "answer": 2,
              "explanation": {
                "en": "Dissolved salt is a colligative effect: its particles lower water's freezing point, so ice melts at temperatures below $0\\,^{\\circ}\\text{C}$ and refreezing is harder. It is freezing point depression, not a change in boiling point or a heat-releasing reaction.",
                "zh": "溶解的盐产生依数性效应：其粒子降低了水的凝固点，使冰在低于 $0\\,^{\\circ}\\text{C}$ 时也能融化且更难重新结冰。这是凝固点降低，而不是沸点变化或放热反应。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Equal moles of the following are each dissolved in $1\\ \\text{kg}$ of water. Which lowers the freezing point the MOST?",
                "zh": "下列各物质各取相同摩尔数分别溶于 $1\\ \\text{kg}$ 水。哪个使凝固点降低得最多？"
              },
              "choices": [
                "Sugar (does not break apart)",
                "$\\text{NaCl}$ (breaks into 2 ions)",
                "They all lower it equally",
                "$\\text{CaCl}_2$ (breaks into 3 ions)"
              ],
              "answer": 3,
              "explanation": {
                "en": "Colligative properties depend on the number of dissolved particles. $\\text{CaCl}_2 \\rightarrow \\text{Ca}^{2+} + 2\\,\\text{Cl}^-$ makes 3 particles per formula unit, more than $\\text{NaCl}$ (2) or sugar (1), so it lowers the freezing point most. The trap is thinking identity matters — only particle count does.",
                "zh": "依数性取决于溶解粒子的数目。$\\text{CaCl}_2 \\rightarrow \\text{Ca}^{2+} + 2\\,\\text{Cl}^-$ 每个化学式产生 3 个粒子，多于 $\\text{NaCl}$（2 个）或糖（1 个），所以使凝固点降低最多。误区是以为物质种类重要——其实只有粒子数目重要。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A water sample contains $3\\ \\text{mg}$ of fluoride in $1\\ \\text{kg}$ ($1{,}000{,}000\\ \\text{mg}$) of water. What is the concentration in ppm? (Give a whole number.)",
                "zh": "一份水样在 $1\\ \\text{kg}$（$1{,}000{,}000\\ \\text{mg}$）水中含 $3\\ \\text{mg}$ 氟化物。浓度是多少 ppm？（填一个整数。）"
              },
              "answer": "3",
              "accept": [
                "3 ppm"
              ],
              "explanation": {
                "en": "ppm $= \\frac{\\text{mass solute}}{\\text{mass solution}} \\times 10^6 = \\frac{3\\ \\text{mg}}{1{,}000{,}000\\ \\text{mg}} \\times 10^6 = 3\\ \\text{ppm}$. Conveniently, for dilute water solutions $1\\ \\text{mg}$ per $\\text{kg}$ equals $1\\ \\text{ppm}$.",
                "zh": "ppm $= \\frac{\\text{溶质质量}}{\\text{溶液质量}} \\times 10^6 = \\frac{3\\ \\text{mg}}{1{,}000{,}000\\ \\text{mg}} \\times 10^6 = 3\\ \\text{ppm}$。方便的是，对稀水溶液，每 $\\text{kg}$ 中 $1\\ \\text{mg}$ 就等于 $1\\ \\text{ppm}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "acids-bases",
      "title": "Unit 8: Acids and Bases",
      "titleZh": "第八单元：酸与碱",
      "lessons": [
        {
          "id": "acids-bases-and-ph",
          "title": "Acids, Bases, and the pH Scale",
          "titleZh": "酸、碱与 pH 标度",
          "content": [
            {
              "type": "h2",
              "en": "What Are Acids and Bases?",
              "zh": "什么是酸和碱？"
            },
            {
              "type": "p",
              "en": "Acids and bases are two families of compounds that behave in opposite, complementary ways. You already know many of them: the citric acid in a lemon, the acetic acid in vinegar, the sodium hydroxide in drain cleaner, the ammonia in a window spray. This lesson gives you precise definitions, tells you which acids and bases are strong and which are weak, and shows you how to put a number — the pH — on how acidic or basic a solution is.",
              "zh": "酸和碱是两类行为相反、又相互补充的化合物。你已经认识很多：柠檬里的柠檬酸、醋里的乙酸、通渠剂里的氢氧化钠、玻璃清洁剂里的氨。本节课给出精确的定义，告诉你哪些酸碱强、哪些弱，并教你如何用一个数字——pH——来量化溶液的酸碱程度。"
            },
            {
              "type": "h3",
              "en": "Observable Properties",
              "zh": "可观察的性质"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Acids taste sour (never taste lab chemicals!), turn blue litmus red, react with active metals to release $\\text{H}_2$ gas, and react with carbonates to release $\\text{CO}_2$.",
                  "zh": "酸味道酸（切勿品尝实验室化学品！），使蓝色石蕊变红，与活泼金属反应放出 $\\text{H}_2$ 气体，与碳酸盐反应放出 $\\text{CO}_2$。"
                },
                {
                  "en": "Bases taste bitter, feel slippery, turn red litmus blue, and neutralize acids.",
                  "zh": "碱味道苦，摸起来滑腻，使红色石蕊变蓝，并能中和酸。"
                },
                {
                  "en": "Both strong acids and strong bases conduct electricity in water because they form ions (they are electrolytes).",
                  "zh": "强酸和强碱在水中都能导电，因为它们会形成离子（都是电解质）。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Two Definitions",
              "zh": "两种定义"
            },
            {
              "type": "h3",
              "en": "The Arrhenius Definition",
              "zh": "阿伦尼乌斯定义"
            },
            {
              "type": "p",
              "en": "Arrhenius said an acid is a substance that produces hydrogen ions, $\\text{H}^+$, when dissolved in water, and a base produces hydroxide ions, $\\text{OH}^-$. For example $\\text{HCl} \\rightarrow \\text{H}^+ + \\text{Cl}^-$ and $\\text{NaOH} \\rightarrow \\text{Na}^+ + \\text{OH}^-$. A bare $\\text{H}^+$ is just a proton, so in water it attaches to a water molecule to form the hydronium ion $\\text{H}_3\\text{O}^+$; chemists use $\\text{H}^+$ and $\\text{H}_3\\text{O}^+$ interchangeably.",
              "zh": "阿伦尼乌斯认为，酸是溶于水时产生氢离子 $\\text{H}^+$ 的物质，碱则产生氢氧根离子 $\\text{OH}^-$。例如 $\\text{HCl} \\rightarrow \\text{H}^+ + \\text{Cl}^-$，$\\text{NaOH} \\rightarrow \\text{Na}^+ + \\text{OH}^-$。裸露的 $\\text{H}^+$ 其实就是一个质子，因此在水中它会结合到水分子上，形成水合氢离子 $\\text{H}_3\\text{O}^+$；化学家常把 $\\text{H}^+$ 和 $\\text{H}_3\\text{O}^+$ 交替使用。"
            },
            {
              "type": "h3",
              "en": "The Brønsted-Lowry Definition",
              "zh": "布朗斯特-劳里定义"
            },
            {
              "type": "p",
              "en": "A broader view: a Brønsted-Lowry acid is a proton ($\\text{H}^+$) donor, and a base is a proton acceptor. This lets ammonia count as a base even though it has no $\\text{OH}^-$: $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$. Here $\\text{NH}_3$ accepts a proton from water, so $\\text{NH}_3$ is the base and water is the acid.",
              "zh": "更宽泛的观点：布朗斯特-劳里酸是质子（$\\text{H}^+$）给予体，碱是质子接受体。这样即使氨没有 $\\text{OH}^-$ 也能算作碱：$\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$。这里 $\\text{NH}_3$ 从水中接受一个质子，所以 $\\text{NH}_3$ 是碱，水是酸。"
            },
            {
              "type": "p",
              "en": "When an acid donates a proton, what is left behind is its conjugate base; when a base accepts a proton, what forms is its conjugate acid. The two differ by exactly one $\\text{H}^+$. In the ammonia reaction, $\\text{NH}_3$ and $\\text{NH}_4^+$ are a conjugate acid-base pair, and $\\text{H}_2\\text{O}$ and $\\text{OH}^-$ are the other pair.",
              "zh": "当酸给出一个质子后，剩下的就是它的共轭碱；当碱接受一个质子后，形成的就是它的共轭酸。两者恰好相差一个 $\\text{H}^+$。在氨的反应中，$\\text{NH}_3$ 与 $\\text{NH}_4^+$ 是一对共轭酸碱，$\\text{H}_2\\text{O}$ 与 $\\text{OH}^-$ 是另一对。"
            },
            {
              "type": "note",
              "en": "Common mistake: a conjugate base is NOT the same as \"a base\" you would find on a shelf. It is just the particle left after an acid loses one proton. $\\text{Cl}^-$ is the conjugate base of $\\text{HCl}$, but a chloride solution is not basic — a strong acid leaves behind a very weak conjugate base.",
              "zh": "常见错误：共轭碱并不等同于你在货架上找到的“碱”。它只是酸失去一个质子后剩下的粒子。$\\text{Cl}^-$ 是 $\\text{HCl}$ 的共轭碱，但氯离子溶液并不呈碱性——强酸留下的共轭碱非常弱。"
            },
            {
              "type": "h2",
              "en": "Strong vs. Weak",
              "zh": "强与弱"
            },
            {
              "type": "p",
              "en": "Strong does not mean concentrated. A strong acid ionizes completely — essentially every molecule gives up its proton in water. A weak acid ionizes only partially, so most molecules stay intact and the solution is an equilibrium mixture (note the $\\rightleftharpoons$ arrow). The same distinction applies to bases.",
              "zh": "“强”不等于“浓”。强酸完全电离——在水中几乎每个分子都会给出质子。弱酸只部分电离，因此大多数分子保持完整，溶液是一个平衡混合物（注意 $\\rightleftharpoons$ 双向箭头）。碱也有同样的区分。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Strong acids to memorize: $\\text{HCl}$, $\\text{HBr}$, $\\text{HI}$, $\\text{HNO}_3$, $\\text{H}_2\\text{SO}_4$, $\\text{HClO}_4$. Everything else is a weak acid (e.g. acetic acid $\\text{CH}_3\\text{COOH}$, carbonic acid $\\text{H}_2\\text{CO}_3$, HF).",
                  "zh": "需要记住的强酸：$\\text{HCl}$、$\\text{HBr}$、$\\text{HI}$、$\\text{HNO}_3$、$\\text{H}_2\\text{SO}_4$、$\\text{HClO}_4$。其余都是弱酸（如乙酸 $\\text{CH}_3\\text{COOH}$、碳酸 $\\text{H}_2\\text{CO}_3$、HF）。"
                },
                {
                  "en": "Strong bases: the Group 1 hydroxides ($\\text{NaOH}$, $\\text{KOH}$, $\\text{LiOH}$) and the heavier Group 2 hydroxides ($\\text{Ca(OH)}_2$, $\\text{Ba(OH)}_2$). A common weak base is ammonia, $\\text{NH}_3$.",
                  "zh": "强碱：第一族氢氧化物（$\\text{NaOH}$、$\\text{KOH}$、$\\text{LiOH}$）和较重的第二族氢氧化物（$\\text{Ca(OH)}_2$、$\\text{Ba(OH)}_2$）。常见的弱碱是氨 $\\text{NH}_3$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Self-Ionization of Water and $K_w$",
              "zh": "水的自偶电离与 $K_w$"
            },
            {
              "type": "p",
              "en": "Even pure water conducts a tiny current because water molecules react with each other: $2\\,\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{OH}^-$. At $25^\\circ\\text{C}$ this produces equal, tiny concentrations $[\\text{H}^+] = [\\text{OH}^-] = 1.0 \\times 10^{-7}\\ M$. Their product is the ion-product constant of water, $K_w$.",
              "zh": "即使是纯水也能导微弱的电流，因为水分子会相互反应：$2\\,\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{OH}^-$。在 $25^\\circ\\text{C}$ 下产生相等的极小浓度 $[\\text{H}^+] = [\\text{OH}^-] = 1.0 \\times 10^{-7}\\ M$。它们的乘积就是水的离子积常数 $K_w$。"
            },
            {
              "type": "math",
              "tex": "K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\ (\\text{at } 25^\\circ\\text{C})"
            },
            {
              "type": "p",
              "en": "This relationship holds in every aqueous solution, not just pure water. So if you know one of $[\\text{H}^+]$ or $[\\text{OH}^-]$, you can always find the other by dividing into $1.0 \\times 10^{-14}$. When $[\\text{H}^+] > [\\text{OH}^-]$ the solution is acidic; when they are equal it is neutral; when $[\\text{OH}^-] > [\\text{H}^+]$ it is basic.",
              "zh": "这一关系在任何水溶液中都成立，不只是纯水。因此只要知道 $[\\text{H}^+]$ 或 $[\\text{OH}^-]$ 之一，就可以用 $1.0 \\times 10^{-14}$ 除以它来求另一个。当 $[\\text{H}^+] > [\\text{OH}^-]$ 时溶液呈酸性；相等时呈中性；$[\\text{OH}^-] > [\\text{H}^+]$ 时呈碱性。"
            },
            {
              "type": "h2",
              "en": "The pH and pOH Scales",
              "zh": "pH 与 pOH 标度"
            },
            {
              "type": "p",
              "en": "Because these concentrations span many powers of ten, we use a logarithmic scale. The pH is the negative base-10 logarithm of the hydrogen-ion concentration, and pOH is defined the same way for hydroxide:",
              "zh": "由于这些浓度跨越许多个数量级，我们采用对数标度。pH 是氢离子浓度的负常用对数，pOH 对氢氧根也同样定义："
            },
            {
              "type": "math",
              "tex": "\\text{pH} = -\\log[\\text{H}^+], \\qquad \\text{pOH} = -\\log[\\text{OH}^-]"
            },
            {
              "type": "p",
              "en": "At $25^\\circ\\text{C}$ the two are linked by $\\text{pH} + \\text{pOH} = 14$. On this scale pH $7$ is neutral, below $7$ is acidic, above $7$ is basic. Because it is logarithmic, each whole-number step means a tenfold change in $[\\text{H}^+]$: a pH-3 solution has ten times the $[\\text{H}^+]$ of a pH-4 solution and one hundred times that of pH 5.",
              "zh": "在 $25^\\circ\\text{C}$ 下两者由 $\\text{pH} + \\text{pOH} = 14$ 相联系。在此标度上 pH 为 $7$ 呈中性，低于 $7$ 呈酸性，高于 $7$ 呈碱性。由于是对数标度，每变化一个整数就意味着 $[\\text{H}^+]$ 相差十倍：pH 为 3 的溶液的 $[\\text{H}^+]$ 是 pH 为 4 溶液的十倍，是 pH 为 5 溶液的一百倍。"
            },
            {
              "type": "note",
              "en": "Exam tip: to go from pH back to concentration, undo the log: $[\\text{H}^+] = 10^{-\\text{pH}}$. Also, the number of decimal places in a pH equals the number of sig figs in the concentration. $[\\text{H}^+] = 1.0 \\times 10^{-3}$ (2 sig figs) gives pH $= 3.00$ (2 decimal places).",
              "zh": "考试提示：由 pH 反求浓度时，把对数还原：$[\\text{H}^+] = 10^{-\\text{pH}}$。另外，pH 的小数位数等于浓度的有效数字位数。$[\\text{H}^+] = 1.0 \\times 10^{-3}$（2 位有效数字）对应 pH $= 3.00$（2 位小数）。"
            },
            {
              "type": "h2",
              "en": "Indicators",
              "zh": "指示剂"
            },
            {
              "type": "p",
              "en": "An indicator is a dye that is itself a weak acid or base and changes color over a specific pH range. Litmus is red in acid and blue in base; phenolphthalein is colorless in acid and pink above about pH 9; universal indicator shows a rainbow of colors across the whole scale. Indicators give a quick visual estimate of pH and are essential for spotting the endpoint of a titration.",
              "zh": "指示剂是一种本身为弱酸或弱碱的染料，会在特定 pH 范围内变色。石蕊在酸中呈红色、在碱中呈蓝色；酚酞在酸中无色、在约 pH 9 以上呈粉红色；广泛指示剂在整个标度上呈现彩虹般的颜色。指示剂能快速目测 pH，是判断滴定终点不可或缺的工具。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: From Concentration to pH",
                "zh": "例题 1：由浓度求 pH"
              },
              "problem": {
                "en": "A sample of stomach acid has $[\\text{H}^+] = 1.0 \\times 10^{-2}\\ M$. Find its pH, and find $[\\text{OH}^-]$ at $25^\\circ\\text{C}$.",
                "zh": "一份胃酸样品的 $[\\text{H}^+] = 1.0 \\times 10^{-2}\\ M$。求它的 pH，并求 $25^\\circ\\text{C}$ 下的 $[\\text{OH}^-]$。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\text{pH} = -\\log(1.0 \\times 10^{-2}) = 2.00"
                },
                {
                  "type": "p",
                  "en": "Then use $K_w$ to get the hydroxide concentration:",
                  "zh": "再用 $K_w$ 求氢氧根浓度："
                },
                {
                  "type": "math",
                  "tex": "[\\text{OH}^-] = \\frac{1.0 \\times 10^{-14}}{1.0 \\times 10^{-2}} = 1.0 \\times 10^{-12}\\ M"
                },
                {
                  "type": "p",
                  "en": "Since $[\\text{H}^+] \\gg [\\text{OH}^-]$, the solution is strongly acidic, as expected for stomach acid.",
                  "zh": "由于 $[\\text{H}^+] \\gg [\\text{OH}^-]$，溶液呈强酸性，这与胃酸的性质相符。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: pH of a Strong Base",
                "zh": "例题 2：强碱的 pH"
              },
              "problem": {
                "en": "What is the pH of a $0.0010\\ M$ solution of $\\text{NaOH}$ at $25^\\circ\\text{C}$?",
                "zh": "$25^\\circ\\text{C}$ 下 $0.0010\\ M$ 的 $\\text{NaOH}$ 溶液 pH 是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "NaOH is a strong base, so it dissociates completely: $[\\text{OH}^-] = 0.0010 = 1.0 \\times 10^{-3}\\ M$. Find pOH first:",
                  "zh": "NaOH 是强碱，完全解离：$[\\text{OH}^-] = 0.0010 = 1.0 \\times 10^{-3}\\ M$。先求 pOH："
                },
                {
                  "type": "math",
                  "tex": "\\text{pOH} = -\\log(1.0 \\times 10^{-3}) = 3.00"
                },
                {
                  "type": "math",
                  "tex": "\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 3.00 = 11.00"
                },
                {
                  "type": "p",
                  "en": "A pH of $11.00$ confirms the solution is basic. A common error is to take $-\\log$ of the concentration directly and report pH $= 3$; that gives the pOH, not the pH, for a base.",
                  "zh": "pH 为 $11.00$ 证实溶液呈碱性。常见错误是直接对浓度取 $-\\log$ 得到 pH $= 3$；对碱来说那算出的是 pOH，而不是 pH。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "According to the Brønsted-Lowry definition, an acid is a substance that…",
                "zh": "按照布朗斯特-劳里定义，酸是一种……的物质。"
              },
              "choices": [
                "accepts a proton",
                "donates a proton",
                "produces $\\text{OH}^-$ ions",
                "feels slippery"
              ],
              "answer": 1,
              "explanation": {
                "en": "A Brønsted-Lowry acid donates a proton ($\\text{H}^+$); the base accepts it. \"Produces $\\text{OH}^-$\" describes an Arrhenius base, and \"slippery\" is a property of bases, not a definition.",
                "zh": "布朗斯特-劳里酸给出质子（$\\text{H}^+$）；碱接受质子。“产生 $\\text{OH}^-$”是阿伦尼乌斯碱的描述，“滑腻”是碱的性质而非定义。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the conjugate base of the acid $\\text{HNO}_3$?",
                "zh": "酸 $\\text{HNO}_3$ 的共轭碱是什么？"
              },
              "choices": [
                "$\\text{NO}_3^-$",
                "$\\text{H}_2\\text{NO}_3^+$",
                "$\\text{OH}^-$",
                "$\\text{NO}_2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Remove one $\\text{H}^+$ from $\\text{HNO}_3$ to get its conjugate base $\\text{NO}_3^-$. Adding a proton would give a conjugate acid; $\\text{OH}^-$ is unrelated.",
                "zh": "从 $\\text{HNO}_3$ 中去掉一个 $\\text{H}^+$ 就得到共轭碱 $\\text{NO}_3^-$。加一个质子会得到共轭酸；$\\text{OH}^-$ 与此无关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of these is a WEAK acid?",
                "zh": "下列哪一个是弱酸？"
              },
              "choices": [
                "$\\text{HCl}$",
                "$\\text{HNO}_3$",
                "$\\text{CH}_3\\text{COOH}$",
                "$\\text{HClO}_4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Acetic acid ($\\text{CH}_3\\text{COOH}$) ionizes only partially, so it is weak. The other three are on the short list of strong acids that ionize completely.",
                "zh": "乙酸（$\\text{CH}_3\\text{COOH}$）只部分电离，所以是弱酸。另外三个都在完全电离的强酸清单上。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solution has $[\\text{H}^+] = 1 \\times 10^{-9}\\ M$ at $25^\\circ\\text{C}$. This solution is…",
                "zh": "$25^\\circ\\text{C}$ 下某溶液 $[\\text{H}^+] = 1 \\times 10^{-9}\\ M$。该溶液呈……"
              },
              "choices": [
                "strongly acidic",
                "impossible to determine",
                "neutral",
                "basic"
              ],
              "answer": 3,
              "explanation": {
                "en": "$[\\text{H}^+] = 10^{-9}$ is smaller than the neutral $10^{-7}$, so pH $= 9$ and the solution is basic. It is tempting to see a negative exponent and call it acidic, but you must compare to $10^{-7}$.",
                "zh": "$[\\text{H}^+] = 10^{-9}$ 小于中性的 $10^{-7}$，所以 pH $= 9$，呈碱性。看到负指数就判为酸性是一种诱惑，但必须与 $10^{-7}$ 比较。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solution has $[\\text{H}^+] = 1.0 \\times 10^{-5}\\ M$. What is its pH? (Give the number to 2 decimal places.)",
                "zh": "某溶液 $[\\text{H}^+] = 1.0 \\times 10^{-5}\\ M$。它的 pH 是多少？（保留 2 位小数。）"
              },
              "answer": "5.00",
              "accept": [
                "5",
                "5.0"
              ],
              "explanation": {
                "en": "$\\text{pH} = -\\log(1.0 \\times 10^{-5}) = 5.00$. Because the coefficient is 1.0, the pH is just the magnitude of the exponent.",
                "zh": "$\\text{pH} = -\\log(1.0 \\times 10^{-5}) = 5.00$。由于系数是 1.0，pH 恰好等于指数的绝对值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "At $25^\\circ\\text{C}$ a solution has pOH $= 4.00$. What is its pH? (Give an integer.)",
                "zh": "$25^\\circ\\text{C}$ 下某溶液 pOH $= 4.00$。它的 pH 是多少？（填一个整数。）"
              },
              "answer": "10",
              "accept": [
                "10.00",
                "10.0"
              ],
              "explanation": {
                "en": "Use $\\text{pH} + \\text{pOH} = 14$, so $\\text{pH} = 14 - 4 = 10$. The solution is basic, which fits a low pOH.",
                "zh": "利用 $\\text{pH} + \\text{pOH} = 14$，得 $\\text{pH} = 14 - 4 = 10$。溶液呈碱性，与较低的 pOH 相符。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A strong acid solution has pH $= 3.00$ at $25^\\circ\\text{C}$. What is $[\\text{OH}^-]$? Give your answer as a power of ten in the form $1 \\times 10^{-n}$ — just enter the value of $n$ as an integer.",
                "zh": "$25^\\circ\\text{C}$ 下某强酸溶液 pH $= 3.00$。$[\\text{OH}^-]$ 是多少？把答案写成 $1 \\times 10^{-n}$ 的形式——只需填整数 $n$。"
              },
              "answer": "11",
              "explanation": {
                "en": "pH 3 means $[\\text{H}^+] = 1 \\times 10^{-3}$. Then $[\\text{OH}^-] = 10^{-14}/10^{-3} = 1 \\times 10^{-11}\\ M$, so $n = 11$. Equivalently, pOH $= 14 - 3 = 11$.",
                "zh": "pH 为 3 意味着 $[\\text{H}^+] = 1 \\times 10^{-3}$。则 $[\\text{OH}^-] = 10^{-14}/10^{-3} = 1 \\times 10^{-11}\\ M$，所以 $n = 11$。等价地，pOH $= 14 - 3 = 11$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solution A has pH $2$ and solution B has pH $5$. How does the hydrogen-ion concentration of A compare to B?",
                "zh": "溶液 A 的 pH 为 $2$，溶液 B 的 pH 为 $5$。A 的氢离子浓度与 B 相比如何？"
              },
              "choices": [
                "A has 3 times more $[\\text{H}^+]$",
                "A has 3 times less $[\\text{H}^+]$",
                "A has 1000 times more $[\\text{H}^+]$",
                "They are equal"
              ],
              "answer": 2,
              "explanation": {
                "en": "Each pH unit is a factor of 10. From pH 5 to pH 2 is 3 units, so $10^3 = 1000$ times more $[\\text{H}^+]$. Reading the difference as \"3 times\" ignores that the scale is logarithmic.",
                "zh": "每个 pH 单位对应 10 倍。从 pH 5 到 pH 2 相差 3 个单位，所以 $[\\text{H}^+]$ 是 $10^3 = 1000$ 倍。把差值当成“3 倍”忽略了标度是对数的。"
              }
            }
          ]
        },
        {
          "id": "neutralization-and-titration",
          "title": "Neutralization and Titration",
          "titleZh": "中和反应与滴定",
          "content": [
            {
              "type": "h2",
              "en": "Neutralization Reactions",
              "zh": "中和反应"
            },
            {
              "type": "p",
              "en": "When an acid and a base are mixed, they cancel each other in a neutralization reaction. The general pattern is simple to memorize: an acid plus a base produces a salt plus water.",
              "zh": "当酸与碱混合时，它们会在中和反应中相互抵消。这一通式很好记：酸加碱生成盐和水。"
            },
            {
              "type": "math",
              "tex": "\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}"
            },
            {
              "type": "p",
              "en": "The water forms when $\\text{H}^+$ from the acid joins $\\text{OH}^-$ from the base: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$. The \"salt\" is simply the ionic compound made from the leftover cation of the base and anion of the acid. For example:",
              "zh": "当酸中的 $\\text{H}^+$ 与碱中的 $\\text{OH}^-$ 结合时便生成水：$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$。“盐”就是由碱剩下的阳离子和酸剩下的阴离子组成的离子化合物。例如："
            },
            {
              "type": "math",
              "tex": "\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}"
            },
            {
              "type": "h3",
              "en": "Writing and Balancing Them",
              "zh": "书写与配平"
            },
            {
              "type": "p",
              "en": "To write a neutralization equation: pair the cation of the base with the anion of the acid to get the salt (making the charges balance), then balance the whole equation. When the acid has more than one acidic hydrogen or the base has more than one hydroxide, the coefficients are no longer 1:1. For example, sulfuric acid has two acidic hydrogens:",
              "zh": "书写中和方程式的步骤：把碱的阳离子与酸的阴离子配对得到盐（使电荷平衡），再配平整个方程式。当酸含有多个酸性氢、或碱含有多个氢氧根时，系数就不再是 1:1。例如硫酸有两个酸性氢："
            },
            {
              "type": "math",
              "tex": "\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting to account for diprotic acids like $\\text{H}_2\\text{SO}_4$ or dibasic bases like $\\text{Ca(OH)}_2$. Each mole of $\\text{H}_2\\text{SO}_4$ neutralizes TWO moles of $\\text{OH}^-$, so it takes twice as much base. Always balance the equation before doing any mole math.",
              "zh": "常见错误：忽略像 $\\text{H}_2\\text{SO}_4$ 这样的二元酸或像 $\\text{Ca(OH)}_2$ 这样的二元碱。每摩尔 $\\text{H}_2\\text{SO}_4$ 中和两摩尔 $\\text{OH}^-$，所以需要两倍的碱。做任何摩尔计算之前一定要先配平方程式。"
            },
            {
              "type": "h2",
              "en": "Titration",
              "zh": "滴定"
            },
            {
              "type": "p",
              "en": "Titration is a lab technique for finding the unknown concentration of an acid or base. You slowly add a solution of known concentration (the titrant, in a burette) to a measured volume of the unknown until the reaction is exactly complete. A few drops of indicator signal the endpoint with a color change.",
              "zh": "滴定是一种测定酸或碱未知浓度的实验技术。你把已知浓度的溶液（滴定剂，装在滴定管中）缓慢加入到量取好体积的未知液中，直到反应恰好完全。加入几滴指示剂，通过颜色变化标示终点。"
            },
            {
              "type": "h3",
              "en": "The Equivalence Point",
              "zh": "等当点（化学计量点）"
            },
            {
              "type": "p",
              "en": "The equivalence point is the moment when the moles of $\\text{H}^+$ added exactly equal the moles of $\\text{OH}^-$ present (in stoichiometric ratio) — neither reactant is in excess. The endpoint is where the indicator changes color; a well-chosen indicator makes the endpoint fall right at the equivalence point.",
              "zh": "等当点是加入的 $\\text{H}^+$ 摩尔数恰好等于（按化学计量比）存在的 $\\text{OH}^-$ 摩尔数的时刻——两种反应物都不过量。终点是指示剂变色之处；选得好的指示剂能使终点恰好落在等当点上。"
            },
            {
              "type": "h2",
              "en": "The Titration Calculation",
              "zh": "滴定计算"
            },
            {
              "type": "p",
              "en": "The key idea is that moles of a solute equal molarity times volume: $\\text{moles} = M \\times V$. For a reaction where acid and base react in a 1:1 ratio, at the equivalence point moles of acid equal moles of base, which gives the compact formula:",
              "zh": "关键思想是溶质的摩尔数等于摩尔浓度乘以体积：$\\text{摩尔数} = M \\times V$。对于酸碱按 1:1 比例反应的情形，在等当点酸的摩尔数等于碱的摩尔数，于是得到简洁公式："
            },
            {
              "type": "math",
              "tex": "M_a V_a = M_b V_b"
            },
            {
              "type": "p",
              "en": "Here $M_a, V_a$ are the molarity and volume of the acid and $M_b, V_b$ are those of the base. Because volume appears on both sides, you may use mL on both sides without converting to liters — the units cancel.",
              "zh": "这里 $M_a, V_a$ 是酸的摩尔浓度和体积，$M_b, V_b$ 是碱的。由于体积在两边都出现，你可以两边都用 mL 而不必换算成升——单位会相消。"
            },
            {
              "type": "p",
              "en": "When the ratio is not 1:1 (for a diprotic acid or dibasic base), the balanced equation gives the mole ratio, and you extend the formula accordingly. The safe, general method is: (1) find moles of the titrant from $M \\times V$, (2) use the balanced equation's mole ratio to find moles of the unknown, (3) divide by the unknown's volume to get its molarity.",
              "zh": "当比例不是 1:1 时（对二元酸或二元碱），配平的方程式给出摩尔比，你据此推广公式。稳妥而通用的方法是：(1) 用 $M \\times V$ 求出滴定剂的摩尔数，(2) 用配平方程式的摩尔比求出未知物的摩尔数，(3) 除以未知物的体积得到其摩尔浓度。"
            },
            {
              "type": "note",
              "en": "Exam tip: the $M_a V_a = M_b V_b$ shortcut is ONLY valid for a 1:1 acid-base ratio. For $\\text{H}_2\\text{SO}_4$ vs. $\\text{NaOH}$ (1:2) or $\\text{HCl}$ vs. $\\text{Ca(OH)}_2$ (2:1) you must include the coefficients. When in doubt, fall back to the three-step mole method.",
              "zh": "考试提示：$M_a V_a = M_b V_b$ 这个捷径只对 1:1 的酸碱比例成立。对于 $\\text{H}_2\\text{SO}_4$ 与 $\\text{NaOH}$（1:2）或 $\\text{HCl}$ 与 $\\text{Ca(OH)}_2$（2:1），必须计入系数。拿不准时，就回到三步摩尔法。"
            },
            {
              "type": "h3",
              "en": "Choosing an Indicator",
              "zh": "选择指示剂"
            },
            {
              "type": "p",
              "en": "A good indicator changes color over a pH range that includes the pH at the equivalence point. For a strong acid titrated with a strong base, the equivalence point is at pH 7, and either bromothymol blue (changes near 6-7) or phenolphthalein (changes near 8-10) works well in practice. The wrong indicator changes color too early or too late and gives an inaccurate result.",
              "zh": "好的指示剂会在包含等当点 pH 的范围内变色。对于用强碱滴定强酸，等当点在 pH 7，实践中溴百里酚蓝（约 6-7 变色）或酚酞（约 8-10 变色）都很好用。选错指示剂会导致变色过早或过晚，给出不准确的结果。"
            },
            {
              "type": "h2",
              "en": "Buffers",
              "zh": "缓冲溶液"
            },
            {
              "type": "p",
              "en": "A buffer is a solution that resists changes in pH when small amounts of acid or base are added. It is made from a weak acid together with its conjugate base (or a weak base with its conjugate acid). The weak acid neutralizes added base, and the conjugate base neutralizes added acid, so the pH barely moves. A familiar example is the carbonic-acid/bicarbonate buffer ($\\text{H}_2\\text{CO}_3$ / $\\text{HCO}_3^-$) that keeps human blood near pH 7.4.",
              "zh": "缓冲溶液是一种在加入少量酸或碱时能抵抗 pH 变化的溶液。它由弱酸及其共轭碱（或弱碱及其共轭酸）组成。弱酸中和加入的碱，共轭碱中和加入的酸，因此 pH 几乎不变。一个熟悉的例子是碳酸/碳酸氢盐缓冲体系（$\\text{H}_2\\text{CO}_3$ / $\\text{HCO}_3^-$），它把人体血液维持在约 pH 7.4。"
            },
            {
              "type": "h2",
              "en": "Real Applications",
              "zh": "实际应用"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Antacids: tablets contain a mild base such as $\\text{CaCO}_3$ or $\\text{Mg(OH)}_2$ that neutralizes excess stomach acid (HCl), relieving heartburn.",
                  "zh": "抗酸药：药片含有像 $\\text{CaCO}_3$ 或 $\\text{Mg(OH)}_2$ 这样的温和碱，能中和过量的胃酸（HCl），缓解烧心。"
                },
                {
                  "en": "Pool care: the pH of pool water is tested and adjusted (adding acid or base) to stay near 7.4 so it is comfortable and the chlorine works effectively.",
                  "zh": "泳池维护：检测并调节泳池水的 pH（加酸或加碱）使其保持在约 7.4，这样既舒适，氯消毒也能有效发挥作用。"
                },
                {
                  "en": "Farming: lime (a base) is added to acidic soil to raise its pH so crops can grow.",
                  "zh": "农业：向酸性土壤中加入石灰（一种碱）以提高其 pH，使作物得以生长。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A 1:1 Titration",
                "zh": "例题 1：1:1 滴定"
              },
              "problem": {
                "en": "It takes $25.0$ mL of $0.100\\ M$ $\\text{NaOH}$ to neutralize $20.0$ mL of $\\text{HCl}$ of unknown concentration. Find the molarity of the HCl.",
                "zh": "用 $25.0$ mL 的 $0.100\\ M$ $\\text{NaOH}$ 恰好中和 $20.0$ mL 未知浓度的 $\\text{HCl}$。求该 HCl 的摩尔浓度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The reaction $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ is 1:1, so use $M_a V_a = M_b V_b$:",
                  "zh": "反应 $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ 是 1:1，所以用 $M_a V_a = M_b V_b$："
                },
                {
                  "type": "math",
                  "tex": "M_a = \\frac{M_b V_b}{V_a} = \\frac{(0.100\\ M)(25.0\\ \\text{mL})}{20.0\\ \\text{mL}} = 0.125\\ M"
                },
                {
                  "type": "p",
                  "en": "The HCl is $0.125\\ M$ (3 sig figs). Notice the mL units cancelled, so no conversion to liters was needed.",
                  "zh": "HCl 的浓度是 $0.125\\ M$（3 位有效数字）。注意 mL 单位相消，因此不需要换算成升。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Diprotic Acid",
                "zh": "例题 2：二元酸"
              },
              "problem": {
                "en": "How many mL of $0.200\\ M$ $\\text{NaOH}$ are needed to completely neutralize $30.0$ mL of $0.150\\ M$ $\\text{H}_2\\text{SO}_4$?",
                "zh": "需要多少 mL 的 $0.200\\ M$ $\\text{NaOH}$ 才能完全中和 $30.0$ mL 的 $0.150\\ M$ $\\text{H}_2\\text{SO}_4$？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Balance first: $\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$. The ratio is 1 acid : 2 base. Step 1 — moles of acid:",
                  "zh": "先配平：$\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$。比例为 1 酸 : 2 碱。第一步——酸的摩尔数："
                },
                {
                  "type": "math",
                  "tex": "n_{\\text{acid}} = (0.150\\ M)(0.0300\\ \\text{L}) = 0.00450\\ \\text{mol}"
                },
                {
                  "type": "p",
                  "en": "Step 2 — moles of NaOH needed are twice the acid: $2 \\times 0.00450 = 0.00900$ mol. Step 3 — divide by molarity to get volume:",
                  "zh": "第二步——所需 NaOH 的摩尔数是酸的两倍：$2 \\times 0.00450 = 0.00900$ mol。第三步——除以摩尔浓度得到体积："
                },
                {
                  "type": "math",
                  "tex": "V = \\frac{0.00900\\ \\text{mol}}{0.200\\ M} = 0.0450\\ \\text{L} = 45.0\\ \\text{mL}"
                },
                {
                  "type": "p",
                  "en": "You need $45.0$ mL. Using the 1:1 shortcut would have wrongly given $22.5$ mL — exactly half — because it ignores the two acidic protons.",
                  "zh": "你需要 $45.0$ mL。若误用 1:1 捷径会得到 $22.5$ mL——恰好一半——因为它忽略了两个酸性质子。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The general products of an acid-base neutralization reaction are…",
                "zh": "酸碱中和反应的一般产物是……"
              },
              "choices": [
                "a salt and water",
                "a gas and water",
                "two salts",
                "an acid and a base"
              ],
              "answer": 0,
              "explanation": {
                "en": "Acid + base $\\rightarrow$ salt + water. The $\\text{H}^+$ and $\\text{OH}^-$ combine to form water, and the leftover ions form the salt. No gas is required in a simple neutralization.",
                "zh": "酸 + 碱 $\\rightarrow$ 盐 + 水。$\\text{H}^+$ 与 $\\text{OH}^-$ 结合成水，剩下的离子组成盐。简单的中和反应不需要生成气体。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the reaction $\\text{H}_2\\text{SO}_4 + 2\\,\\text{KOH} \\rightarrow \\text{K}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$, how many moles of KOH react with one mole of $\\text{H}_2\\text{SO}_4$?",
                "zh": "在反应 $\\text{H}_2\\text{SO}_4 + 2\\,\\text{KOH} \\rightarrow \\text{K}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$ 中，一摩尔 $\\text{H}_2\\text{SO}_4$ 与多少摩尔 KOH 反应？"
              },
              "choices": [
                "1",
                "2",
                "3",
                "4"
              ],
              "answer": 1,
              "explanation": {
                "en": "The balanced coefficient on KOH is 2, so 2 moles of KOH react with 1 mole of the diprotic acid. Reading it as 1:1 is the classic diprotic-acid error.",
                "zh": "KOH 前的配平系数是 2，所以 2 摩尔 KOH 与 1 摩尔这种二元酸反应。误读成 1:1 是二元酸的典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At the equivalence point of a titration…",
                "zh": "在滴定的等当点……"
              },
              "choices": [
                "the indicator has just been added",
                "the acid is always in large excess",
                "the pH is always exactly 7 for any titration",
                "moles of $\\text{H}^+$ added stoichiometrically equal moles of $\\text{OH}^-$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The equivalence point is defined by stoichiometric balance of $\\text{H}^+$ and $\\text{OH}^-$. pH 7 holds only for strong acid + strong base; weak-acid titrations reach equivalence above pH 7.",
                "zh": "等当点由 $\\text{H}^+$ 与 $\\text{OH}^-$ 的化学计量平衡定义。pH 为 7 只对强酸 + 强碱成立；弱酸滴定的等当点在 pH 7 以上。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A buffer solution is best described as a mixture of…",
                "zh": "缓冲溶液最恰当的描述是……的混合物。"
              },
              "choices": [
                "a strong acid and a strong base",
                "two strong acids",
                "a weak acid and its conjugate base",
                "pure water and salt"
              ],
              "answer": 2,
              "explanation": {
                "en": "A buffer pairs a weak acid with its conjugate base (or a weak base with its conjugate acid), letting it absorb added acid or base. A strong acid + strong base simply neutralize and buffer nothing.",
                "zh": "缓冲液把弱酸与其共轭碱（或弱碱与其共轭酸）配对，从而吸收加入的酸或碱。强酸 + 强碱只会中和，起不到缓冲作用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "It takes $30.0$ mL of $0.100\\ M$ NaOH to neutralize $15.0$ mL of HCl. What is the molarity of the HCl? (Give your answer in $M$ to 3 sig figs.)",
                "zh": "用 $30.0$ mL 的 $0.100\\ M$ NaOH 恰好中和 $15.0$ mL 的 HCl。HCl 的摩尔浓度是多少？（以 $M$ 为单位，保留 3 位有效数字。）"
              },
              "answer": "0.200",
              "accept": [
                "0.2",
                "0.20"
              ],
              "explanation": {
                "en": "The reaction is 1:1, so $M_a = M_b V_b / V_a = (0.100)(30.0)/15.0 = 0.200\\ M$. The base volume is larger, so the acid must be more concentrated.",
                "zh": "反应为 1:1，所以 $M_a = M_b V_b / V_a = (0.100)(30.0)/15.0 = 0.200\\ M$。碱的体积更大，所以酸必然更浓。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What volume of $0.500\\ M$ NaOH (in mL) is needed to exactly neutralize $40.0$ mL of $0.250\\ M$ HCl? (Give the number of mL.)",
                "zh": "需要多少毫升 $0.500\\ M$ 的 NaOH 才能恰好中和 $40.0$ mL 的 $0.250\\ M$ HCl？（填毫升数。）"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20.00"
              ],
              "explanation": {
                "en": "1:1 reaction: $V_b = M_a V_a / M_b = (0.250)(40.0)/0.500 = 20.0$ mL. Because the base is twice as concentrated as the acid, you need half the volume.",
                "zh": "1:1 反应：$V_b = M_a V_a / M_b = (0.250)(40.0)/0.500 = 20.0$ mL。由于碱的浓度是酸的两倍，所需体积是一半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many moles of $\\text{OH}^-$ are needed to completely neutralize $0.0030$ mol of $\\text{H}_2\\text{SO}_4$? (Give your answer to 2 sig figs.)",
                "zh": "完全中和 $0.0030$ mol 的 $\\text{H}_2\\text{SO}_4$ 需要多少摩尔 $\\text{OH}^-$？（保留 2 位有效数字。）"
              },
              "answer": "0.0060",
              "accept": [
                "0.006",
                "6.0e-3",
                "6e-3"
              ],
              "explanation": {
                "en": "$\\text{H}_2\\text{SO}_4$ has two acidic protons, so each mole needs 2 moles of $\\text{OH}^-$: $2 \\times 0.0030 = 0.0060$ mol. Forgetting the factor of 2 is the most common error here.",
                "zh": "$\\text{H}_2\\text{SO}_4$ 有两个酸性质子，所以每摩尔需要 2 摩尔 $\\text{OH}^-$：$2 \\times 0.0030 = 0.0060$ mol。忘记乘以 2 是这里最常见的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An antacid tablet relieves heartburn because it contains a mild base that…",
                "zh": "抗酸药片能缓解烧心，因为它含有一种温和的碱，能……"
              },
              "choices": [
                "increases the amount of stomach acid",
                "neutralizes excess stomach acid (HCl)",
                "lowers the pH of the stomach",
                "turns the stomach acid into a strong acid"
              ],
              "answer": 1,
              "explanation": {
                "en": "Antacids such as $\\text{CaCO}_3$ or $\\text{Mg(OH)}_2$ neutralize excess HCl, raising the stomach pH toward comfort. Lowering the pH or adding acid would make heartburn worse.",
                "zh": "像 $\\text{CaCO}_3$ 或 $\\text{Mg(OH)}_2$ 这样的抗酸药中和过量的 HCl，使胃的 pH 升高至舒适水平。降低 pH 或加酸只会加重烧心。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "thermochemistry",
      "title": "Unit 9: Thermochemistry",
      "titleZh": "第九单元：热化学",
      "lessons": [
        {
          "id": "energy-heat-and-calorimetry",
          "title": "Energy, Heat, and Calorimetry",
          "titleZh": "能量、热与量热法",
          "content": [
            {
              "type": "h2",
              "en": "Energy and Its Forms",
              "zh": "能量及其形式"
            },
            {
              "type": "p",
              "en": "Thermochemistry is the study of the energy changes that accompany physical and chemical processes. Energy is the capacity to do work or to transfer heat. It comes in two broad forms: kinetic energy, the energy of motion (a rolling ball, a vibrating molecule), and potential energy, stored energy that depends on position or composition (a stretched spring, the chemical bonds in fuel).",
              "zh": "热化学研究伴随物理和化学过程发生的能量变化。能量是做功或传递热量的能力。它有两大类：动能，即运动的能量（滚动的球、振动的分子）；势能，即取决于位置或组成的储存能量（拉伸的弹簧、燃料中的化学键）。"
            },
            {
              "type": "p",
              "en": "The energy stored in chemical bonds is a form of potential energy called chemical energy. When a reaction rearranges atoms into new bonds, this stored energy is released or absorbed, usually appearing as heat. The SI unit of energy is the joule ($\\text{J}$); chemists also use the kilojoule ($1\\ \\text{kJ} = 1000\\ \\text{J}$) and the calorie ($1\\ \\text{cal} = 4.184\\ \\text{J}$).",
              "zh": "储存在化学键中的能量是一种势能，称为化学能。当反应把原子重新组合成新的化学键时，这种储存的能量会被释放或吸收，通常以热的形式出现。能量的国际单位是焦耳（$\\text{J}$）；化学家也用千焦（$1\\ \\text{kJ} = 1000\\ \\text{J}$）和卡路里（$1\\ \\text{cal} = 4.184\\ \\text{J}$）。"
            },
            {
              "type": "h3",
              "en": "The Law of Conservation of Energy",
              "zh": "能量守恒定律"
            },
            {
              "type": "p",
              "en": "The law of conservation of energy (the first law of thermodynamics) states that energy can be converted from one form to another but can never be created or destroyed. In any process, the total energy of the universe stays constant. So when we track energy flowing out of a reaction, that energy does not vanish — it moves into the surroundings.",
              "zh": "能量守恒定律（热力学第一定律）指出，能量可以从一种形式转化为另一种形式，但既不能被创造也不能被消灭。在任何过程中，宇宙的总能量保持不变。因此当我们追踪从反应流出的能量时，那些能量不会消失——它转移到了周围环境中。"
            },
            {
              "type": "h2",
              "en": "System, Surroundings, Endothermic, and Exothermic",
              "zh": "体系、环境、吸热与放热"
            },
            {
              "type": "p",
              "en": "To keep track of energy flow, we divide the world into the system (the reaction or substance we are studying) and the surroundings (everything else — the container, the air, the water bath). Heat flows between them until they reach the same temperature.",
              "zh": "为了追踪能量流动，我们把世界分为体系（我们研究的反应或物质）和环境（其余的一切——容器、空气、水浴）。热在两者之间流动，直到达到相同温度。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Exothermic process: the system releases energy to the surroundings. The surroundings get warmer. Examples: combustion, most neutralizations, water freezing.",
                  "zh": "放热过程：体系向环境释放能量，环境温度升高。例子：燃烧、大多数中和反应、水结冰。"
                },
                {
                  "en": "Endothermic process: the system absorbs energy from the surroundings. The surroundings get colder. Examples: melting ice, a cold pack dissolving, photosynthesis.",
                  "zh": "吸热过程：体系从环境吸收能量，环境温度降低。例子：冰融化、冷敷袋溶解、光合作用。"
                }
              ]
            },
            {
              "type": "p",
              "en": "An energy diagram plots potential energy against the progress of a process. In an exothermic reaction the products sit lower than the reactants (energy was released). In an endothermic reaction the products sit higher than the reactants (energy was absorbed and stored).",
              "zh": "能量图以势能对过程进程作图。在放热反应中，产物比反应物低（能量被释放）；在吸热反应中，产物比反应物高（能量被吸收并储存）。"
            },
            {
              "type": "note",
              "en": "Exam tip: \"exothermic\" means energy EXITS the system, so the surroundings warm up and the products are lower in energy. Students often mix up the direction — remember that a hand pack feels hot because the reaction inside it is exothermic, sending heat OUT to your hand.",
              "zh": "考试提示：\"exothermic\"（放热）意味着能量 EXIT（离开）体系，所以环境变暖、产物能量更低。学生常搞反方向——记住暖手宝之所以发热，是因为内部反应放热，把热量送出到你的手上。"
            },
            {
              "type": "h2",
              "en": "Heat vs. Temperature",
              "zh": "热与温度"
            },
            {
              "type": "p",
              "en": "Heat and temperature are not the same thing. Temperature measures the average kinetic energy of the particles in a sample — how fast they move on average. Heat ($q$) is the total energy transferred between objects because of a temperature difference. A lit match has a higher temperature than a bathtub of warm water, but the bathtub holds far more total heat because it contains vastly more particles.",
              "zh": "热和温度不是一回事。温度衡量样品中粒子的平均动能——它们平均运动得多快。热（$q$）是由于温度差而在物体间传递的总能量。点燃的火柴温度比一浴缸温水高，但浴缸储存的总热量却多得多，因为它含有多得多的粒子。"
            },
            {
              "type": "h3",
              "en": "Specific Heat Capacity and $q = mc\\Delta T$",
              "zh": "比热容与 $q = mc\\Delta T$"
            },
            {
              "type": "p",
              "en": "The specific heat capacity ($c$) of a substance is the amount of heat needed to raise the temperature of $1\\ \\text{g}$ of it by $1\\ ^\\circ\\text{C}$. Water has an unusually large specific heat, $4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$, which is why oceans moderate climate and why water is used as a coolant. The heat absorbed or released by a sample is:",
              "zh": "物质的比热容（$c$）是使 $1\\ \\text{g}$ 该物质温度升高 $1\\ ^\\circ\\text{C}$ 所需的热量。水的比热异常大，为 $4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$，这就是为什么海洋能调节气候、水被用作冷却剂。样品吸收或释放的热量为："
            },
            {
              "type": "math",
              "tex": "q = mc\\Delta T \\quad\\text{where}\\quad \\Delta T = T_\\text{final} - T_\\text{initial}"
            },
            {
              "type": "p",
              "en": "A positive $q$ means the sample absorbed heat (its temperature rose); a negative $q$ means it released heat (its temperature fell). Because $\\Delta T$ is final minus initial, its sign automatically carries this information.",
              "zh": "$q$ 为正表示样品吸收了热量（温度升高）；$q$ 为负表示样品释放了热量（温度降低）。由于 $\\Delta T$ 是末温减初温，它的正负号自动携带了这一信息。"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting to convert mass to grams, or reversing $\\Delta T$. Always compute $\\Delta T = T_\\text{final} - T_\\text{initial}$ (not the other way around) so the sign of $q$ is correct.",
              "zh": "常见错误：忘记把质量换算成克，或把 $\\Delta T$ 算反。始终计算 $\\Delta T = T_\\text{末} - T_\\text{初}$（不能反过来），这样 $q$ 的符号才正确。"
            },
            {
              "type": "h2",
              "en": "Calorimetry",
              "zh": "量热法"
            },
            {
              "type": "p",
              "en": "Calorimetry is the experimental measurement of heat flow. In a coffee-cup calorimeter (two nested foam cups), a reaction happens in a known mass of water, and we measure the water's temperature change. Because the foam insulates the system, we assume no heat escapes: the heat released by the reaction equals the heat absorbed by the water, so $q_\\text{reaction} = -q_\\text{water}$.",
              "zh": "量热法是对热流的实验测量。在咖啡杯量热计（两个嵌套的泡沫杯）中，反应在已知质量的水中进行，我们测量水的温度变化。由于泡沫使体系绝热，我们假设没有热量逸出：反应释放的热量等于水吸收的热量，因此 $q_\\text{反应} = -q_\\text{水}$。"
            },
            {
              "type": "h2",
              "en": "Phase Changes and Heating Curves",
              "zh": "相变与加热曲线"
            },
            {
              "type": "p",
              "en": "When you heat a substance steadily, its temperature rises until it reaches a phase change (melting or boiling). During a phase change the temperature stays constant even though heat keeps flowing in — the energy goes into breaking the attractions between particles, not into speeding them up. A heating curve therefore has sloped sections (temperature rising) separated by flat plateaus (phase changes).",
              "zh": "当你稳定加热一种物质时，它的温度会上升，直到达到相变（熔化或沸腾）。相变期间，即使热量持续流入，温度仍保持恒定——能量用于打破粒子间的吸引，而不是让它们运动得更快。因此加热曲线有倾斜段（温度上升）与平坦段（相变）交替出现。"
            },
            {
              "type": "p",
              "en": "The heat needed to melt $1\\ \\text{g}$ of a solid at its melting point is the heat of fusion; the heat needed to boil $1\\ \\text{g}$ of a liquid at its boiling point is the heat of vaporization. For water these are large ($334\\ \\text{J/g}$ and $2260\\ \\text{J/g}$), because hydrogen bonds must be overcome. During the flat plateaus you cannot use $q = mc\\Delta T$ (since $\\Delta T = 0$); you use $q = m \\times (\\text{heat of fusion or vaporization})$ instead.",
              "zh": "在熔点使 $1\\ \\text{g}$ 固体熔化所需的热量是熔化热；在沸点使 $1\\ \\text{g}$ 液体沸腾所需的热量是汽化热。对水来说这些值很大（$334\\ \\text{J/g}$ 和 $2260\\ \\text{J/g}$），因为必须克服氢键。在平坦段不能用 $q = mc\\Delta T$（因为 $\\Delta T = 0$），而要用 $q = m \\times (\\text{熔化热或汽化热})$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Using $q = mc\\Delta T$",
                "zh": "例题 1：使用 $q = mc\\Delta T$"
              },
              "problem": {
                "en": "How much heat is required to raise the temperature of $150.0\\ \\text{g}$ of water from $22.0\\ ^\\circ\\text{C}$ to $85.0\\ ^\\circ\\text{C}$? The specific heat of water is $4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$.",
                "zh": "把 $150.0\\ \\text{g}$ 水从 $22.0\\ ^\\circ\\text{C}$ 加热到 $85.0\\ ^\\circ\\text{C}$ 需要多少热量？水的比热为 $4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find $\\Delta T = 85.0 - 22.0 = 63.0\\ ^\\circ\\text{C}$. Then apply the formula:",
                  "zh": "先求 $\\Delta T = 85.0 - 22.0 = 63.0\\ ^\\circ\\text{C}$，然后代入公式："
                },
                {
                  "type": "math",
                  "tex": "q = mc\\Delta T = (150.0\\ \\text{g})(4.184\\ \\tfrac{\\text{J}}{\\text{g}\\cdot^\\circ\\text{C}})(63.0\\ ^\\circ\\text{C}) = 39{,}500\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "That is about $39.5\\ \\text{kJ}$. The value is positive because the water absorbed heat.",
                  "zh": "约为 $39.5\\ \\text{kJ}$。数值为正，因为水吸收了热量。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Coffee-Cup Calorimetry Problem",
                "zh": "例题 2：咖啡杯量热计问题"
              },
              "problem": {
                "en": "A hot piece of metal is dropped into $100.0\\ \\text{g}$ of water in a calorimeter. The water's temperature rises from $20.0\\ ^\\circ\\text{C}$ to $24.5\\ ^\\circ\\text{C}$. How much heat did the metal release? ($c_\\text{water} = 4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$.)",
                "zh": "一块热金属被投入量热计中 $100.0\\ \\text{g}$ 的水里。水温从 $20.0\\ ^\\circ\\text{C}$ 升到 $24.5\\ ^\\circ\\text{C}$。金属释放了多少热量？（$c_\\text{水} = 4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The heat absorbed by the water is:",
                  "zh": "水吸收的热量为："
                },
                {
                  "type": "math",
                  "tex": "q_\\text{water} = (100.0\\ \\text{g})(4.184\\ \\tfrac{\\text{J}}{\\text{g}\\cdot^\\circ\\text{C}})(24.5 - 20.0) = 1883\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "By conservation of energy, the metal released this same amount: $q_\\text{metal} = -q_\\text{water} = -1883\\ \\text{J}$, or about $-1.88\\ \\text{kJ}$. The negative sign shows the metal lost heat.",
                  "zh": "根据能量守恒，金属释放了等量的热：$q_\\text{金属} = -q_\\text{水} = -1883\\ \\text{J}$，约 $-1.88\\ \\text{kJ}$。负号表示金属失去了热量。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A reaction makes the beaker feel cold to the touch. This process is best described as…",
                "zh": "某反应让烧杯摸起来发凉。这个过程最恰当的描述是……"
              },
              "choices": [
                "endothermic; the system absorbs heat",
                "exothermic; the system releases heat",
                "exothermic; the surroundings warm up",
                "a physical change with no energy transfer"
              ],
              "answer": 0,
              "explanation": {
                "en": "A cold beaker means heat flowed FROM the surroundings INTO the system, so it is endothermic. It is tempting to pick \"exothermic\" because energy is involved, but exothermic reactions make the surroundings warmer, not colder.",
                "zh": "烧杯变凉说明热量从环境流入体系，所以是吸热的。有人会想选\"放热\"，因为涉及能量，但放热反应会使环境变暖而不是变凉。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly distinguishes heat from temperature?",
                "zh": "哪项正确区分了热与温度？"
              },
              "choices": [
                "Heat and temperature are two names for the same quantity",
                "Heat measures average kinetic energy; temperature is total energy",
                "Temperature measures average kinetic energy; heat is total energy transferred due to a temperature difference",
                "A large cold lake has a higher temperature than a small candle flame"
              ],
              "answer": 2,
              "explanation": {
                "en": "Temperature is the average kinetic energy per particle; heat is the total energy that flows because of a temperature difference. A candle flame is hotter (higher temperature) than a lake, but the lake stores far more total heat.",
                "zh": "温度是每个粒子的平均动能；热是由于温度差而流动的总能量。烛焰比湖水温度更高，但湖水储存的总热量却多得多。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On a heating curve, why does the temperature stay flat during boiling even though heat is still being added?",
                "zh": "在加热曲线上，为什么沸腾期间即使仍在加热，温度却保持不变？"
              },
              "choices": [
                "The thermometer stops working at the boiling point",
                "The substance stops absorbing heat once it boils",
                "Heat is being destroyed during the phase change",
                "The added energy goes into overcoming attractions between particles rather than increasing their average kinetic energy"
              ],
              "answer": 3,
              "explanation": {
                "en": "During a phase change the incoming energy breaks the intermolecular attractions holding the liquid together, so it does not raise the average kinetic energy (temperature). Energy is never destroyed, so that choice violates conservation of energy.",
                "zh": "相变期间，输入的能量用于打破维系液体的分子间吸引，因此不会提高平均动能（温度）。能量绝不会被消灭，所以那个选项违反能量守恒。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How much heat (in $\\text{J}$) is needed to raise the temperature of $25.0\\ \\text{g}$ of water by $10.0\\ ^\\circ\\text{C}$? Use $c = 4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$ and give your answer to 3 sig figs.",
                "zh": "把 $25.0\\ \\text{g}$ 水升温 $10.0\\ ^\\circ\\text{C}$ 需要多少热量（单位 $\\text{J}$）？用 $c = 4.184\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$，答案保留 3 位有效数字。"
              },
              "answer": "1050",
              "accept": [
                "1046",
                "1.05e3"
              ],
              "explanation": {
                "en": "$q = mc\\Delta T = (25.0)(4.184)(10.0) = 1046\\ \\text{J}$, which rounds to $1050\\ \\text{J}$ (3 sig figs). Watch that $\\Delta T$ in °C equals $\\Delta T$ in K, so no temperature conversion is needed.",
                "zh": "$q = mc\\Delta T = (25.0)(4.184)(10.0) = 1046\\ \\text{J}$，保留 3 位有效数字为 $1050\\ \\text{J}$。注意 °C 的温度差等于 K 的温度差，所以无需换算温度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two 50 g samples, one water ($c = 4.18$) and one iron ($c = 0.45\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$), each absorb the same amount of heat. Which warms up more?",
                "zh": "两份 50 g 的样品，一份是水（$c = 4.18$），一份是铁（$c = 0.45\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$），各吸收相同的热量。哪一份升温更多？"
              },
              "choices": [
                "The water, because it has the larger specific heat",
                "The iron, because it has the smaller specific heat",
                "They warm up by exactly the same amount",
                "Neither warms up; the heat is stored as potential energy"
              ],
              "answer": 1,
              "explanation": {
                "en": "From $\\Delta T = q/(mc)$, a smaller $c$ gives a larger $\\Delta T$ for the same $q$ and $m$. Iron's low specific heat means it heats up (and cools down) quickly — that is why a metal pan gets hot fast while the water in it lags behind.",
                "zh": "由 $\\Delta T = q/(mc)$，在 $q$ 和 $m$ 相同时，$c$ 越小 $\\Delta T$ 越大。铁的比热低意味着它升温（和降温）都快——这就是金属锅很快变热而里面的水却慢半拍的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $200.0\\ \\text{g}$ block of copper cools from $95.0\\ ^\\circ\\text{C}$ to $25.0\\ ^\\circ\\text{C}$. Using $c = 0.385\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$, how much heat (in $\\text{J}$) does it release? Give a positive integer for the magnitude.",
                "zh": "一块 $200.0\\ \\text{g}$ 的铜从 $95.0\\ ^\\circ\\text{C}$ 冷却到 $25.0\\ ^\\circ\\text{C}$。用 $c = 0.385\\ \\text{J/(g}\\cdot\\text{}^\\circ\\text{C)}$，它释放多少热量（单位 $\\text{J}$）？以正整数填写数值大小。"
              },
              "answer": "5390",
              "accept": [
                "5390.0"
              ],
              "explanation": {
                "en": "$q = mc\\Delta T = (200.0)(0.385)(25.0 - 95.0) = -5390\\ \\text{J}$. The negative sign means heat is released; its magnitude is $5390\\ \\text{J}$.",
                "zh": "$q = mc\\Delta T = (200.0)(0.385)(25.0 - 95.0) = -5390\\ \\text{J}$。负号表示放热，其大小为 $5390\\ \\text{J}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How much heat (in $\\text{J}$) is needed to melt $30.0\\ \\text{g}$ of ice at $0\\ ^\\circ\\text{C}$? The heat of fusion of water is $334\\ \\text{J/g}$. Give an integer.",
                "zh": "在 $0\\ ^\\circ\\text{C}$ 熔化 $30.0\\ \\text{g}$ 冰需要多少热量（单位 $\\text{J}$）？水的熔化热为 $334\\ \\text{J/g}$。填一个整数。"
              },
              "answer": "10020",
              "accept": [
                "10000",
                "1.00e4"
              ],
              "explanation": {
                "en": "During a phase change use $q = m \\times (\\text{heat of fusion}) = (30.0)(334) = 10{,}020\\ \\text{J}$. You cannot use $q = mc\\Delta T$ here because the temperature stays at $0\\ ^\\circ\\text{C}$ (so $\\Delta T = 0$).",
                "zh": "相变期间用 $q = m \\times (\\text{熔化热}) = (30.0)(334) = 10{,}020\\ \\text{J}$。这里不能用 $q = mc\\Delta T$，因为温度保持在 $0\\ ^\\circ\\text{C}$（即 $\\Delta T = 0$）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a coffee-cup calorimeter, a salt dissolves and the water temperature drops from $25.0\\ ^\\circ\\text{C}$ to $19.0\\ ^\\circ\\text{C}$. What is true about the dissolving process?",
                "zh": "在咖啡杯量热计中，一种盐溶解后水温从 $25.0\\ ^\\circ\\text{C}$ 降到 $19.0\\ ^\\circ\\text{C}$。关于该溶解过程，下列哪项正确？"
              },
              "choices": [
                "It is exothermic; $q_\\text{process} > 0$",
                "The water gained heat from the salt",
                "No energy was exchanged with the water",
                "It is endothermic; the process absorbed heat from the water"
              ],
              "answer": 3,
              "explanation": {
                "en": "The water lost heat (its temperature dropped), so $q_\\text{water} < 0$. By $q_\\text{process} = -q_\\text{water}$, the dissolving absorbed that heat, making it endothermic — this is exactly how a chemical cold pack works.",
                "zh": "水失去了热量（温度下降），所以 $q_\\text{水} < 0$。由 $q_\\text{过程} = -q_\\text{水}$，溶解吸收了这些热量，因此是吸热的——这正是化学冷敷袋的工作原理。"
              }
            }
          ]
        },
        {
          "id": "enthalpy-and-reaction-energy",
          "title": "Enthalpy and Reaction Energy",
          "titleZh": "焓与反应能量",
          "content": [
            {
              "type": "h2",
              "en": "Enthalpy of Reaction ($\\Delta H$)",
              "zh": "反应焓（$\\Delta H$）"
            },
            {
              "type": "p",
              "en": "Most reactions in the lab happen in open containers at constant atmospheric pressure. Under these everyday conditions, the heat absorbed or released by a reaction is called the enthalpy change, or enthalpy of reaction, written $\\Delta H$. You can think of $\\Delta H$ as \"the heat of the reaction at constant pressure.\" Its units are usually $\\text{kJ}$ (for a specific amount) or $\\text{kJ/mol}$.",
              "zh": "实验室里大多数反应在开口容器中、在恒定大气压下进行。在这些日常条件下，反应吸收或释放的热量称为焓变或反应焓，记作 $\\Delta H$。你可以把 $\\Delta H$ 理解为\"恒压下的反应热\"。它的单位通常是 $\\text{kJ}$（对应特定的量）或 $\\text{kJ/mol}$。"
            },
            {
              "type": "p",
              "en": "The sign of $\\Delta H$ tells you the direction of energy flow, just like the sign of $q$ did:",
              "zh": "$\\Delta H$ 的符号告诉你能量流动的方向，就像 $q$ 的符号一样："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Exothermic reaction: energy is released, products are lower in energy, so $\\Delta H < 0$ (negative).",
                  "zh": "放热反应：释放能量，产物能量较低，所以 $\\Delta H < 0$（负）。"
                },
                {
                  "en": "Endothermic reaction: energy is absorbed, products are higher in energy, so $\\Delta H > 0$ (positive).",
                  "zh": "吸热反应：吸收能量，产物能量较高，所以 $\\Delta H > 0$（正）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Thermochemical Equations",
              "zh": "热化学方程式"
            },
            {
              "type": "p",
              "en": "A thermochemical equation is a balanced equation that includes the enthalpy change. For example, the combustion of methane:",
              "zh": "热化学方程式是一个包含焓变的配平方程式。例如甲烷的燃烧："
            },
            {
              "type": "math",
              "tex": "\\text{CH}_4(g) + 2\\,\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\,\\text{H}_2\\text{O}(l) \\qquad \\Delta H = -890\\ \\text{kJ}"
            },
            {
              "type": "p",
              "en": "This tells us that burning one mole of methane releases $890\\ \\text{kJ}$. The coefficients now count moles, and the $\\Delta H$ value belongs to those exact amounts. If you reverse a reaction, you flip the sign of $\\Delta H$; if you double the amounts, you double $\\Delta H$.",
              "zh": "这告诉我们燃烧一摩尔甲烷释放 $890\\ \\text{kJ}$。系数此时表示摩尔数，$\\Delta H$ 的值对应这些确切的量。如果把反应逆转，$\\Delta H$ 变号；如果把用量加倍，$\\Delta H$ 也加倍。"
            },
            {
              "type": "note",
              "en": "Common mistake: dropping the sign of $\\Delta H$. A negative $\\Delta H$ is not \"less energy\" carelessly — the sign is essential information. Writing $\\Delta H = 890\\ \\text{kJ}$ (positive) for an exothermic reaction reverses its physical meaning and would be marked wrong.",
              "zh": "常见错误：漏掉 $\\Delta H$ 的符号。负的 $\\Delta H$ 不是随便的\"较少能量\"——符号是关键信息。给放热反应写成 $\\Delta H = 890\\ \\text{kJ}$（正）会颠倒其物理意义，会被判错。"
            },
            {
              "type": "h2",
              "en": "Energy as a Reactant or Product: Stoichiometry",
              "zh": "把能量当作反应物或产物：化学计量"
            },
            {
              "type": "p",
              "en": "Because $\\Delta H$ is tied to the moles in the balanced equation, energy behaves like a stoichiometric quantity. In an exothermic reaction you can picture energy as a \"product\"; in an endothermic reaction, as a \"reactant.\" This lets you use the enthalpy as a conversion factor to find the heat released or absorbed by any amount of substance.",
              "zh": "由于 $\\Delta H$ 与配平方程式中的摩尔数相关联，能量表现得像一个化学计量量。在放热反应中你可以把能量想象成\"产物\"；在吸热反应中想象成\"反应物\"。这样就能把焓当作换算因子，求出任意量物质释放或吸收的热量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Heat from a Given Mass",
                "zh": "例题 1：由给定质量求热量"
              },
              "problem": {
                "en": "Using $\\text{CH}_4(g) + 2\\,\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\,\\text{H}_2\\text{O}(l)$, $\\Delta H = -890\\ \\text{kJ}$, how much heat is released when $8.00\\ \\text{g}$ of methane burns? (Molar mass of $\\text{CH}_4 = 16.0\\ \\text{g/mol}$.)",
                "zh": "利用 $\\text{CH}_4(g) + 2\\,\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\,\\text{H}_2\\text{O}(l)$，$\\Delta H = -890\\ \\text{kJ}$，燃烧 $8.00\\ \\text{g}$ 甲烷释放多少热量？（$\\text{CH}_4$ 摩尔质量 $= 16.0\\ \\text{g/mol}$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First convert grams to moles, then use $\\Delta H$ as a conversion factor (890 kJ per 1 mol $\\text{CH}_4$):",
                  "zh": "先把克换算成摩尔，再用 $\\Delta H$ 作换算因子（每 1 mol $\\text{CH}_4$ 对应 890 kJ）："
                },
                {
                  "type": "math",
                  "tex": "8.00\\ \\text{g} \\times \\frac{1\\ \\text{mol}}{16.0\\ \\text{g}} \\times \\frac{890\\ \\text{kJ}}{1\\ \\text{mol}} = 445\\ \\text{kJ}"
                },
                {
                  "type": "p",
                  "en": "So $445\\ \\text{kJ}$ of heat is released. Because the reaction is exothermic, we could report the change as $\\Delta H = -445\\ \\text{kJ}$ for this amount.",
                  "zh": "所以释放 $445\\ \\text{kJ}$ 的热量。由于反应放热，对这个用量可记为 $\\Delta H = -445\\ \\text{kJ}$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Hess's Law",
              "zh": "盖斯定律"
            },
            {
              "type": "p",
              "en": "Hess's law states that if a reaction can be written as the sum of several steps, its overall $\\Delta H$ equals the sum of the $\\Delta H$ values of those steps. Enthalpy is a \"state function\" — it depends only on the starting and ending states, not on the path taken. This lets us find the enthalpy of a reaction that is hard to measure directly by adding up reactions we can measure.",
              "zh": "盖斯定律指出，如果一个反应可以写成几个步骤之和，则其总 $\\Delta H$ 等于这些步骤 $\\Delta H$ 之和。焓是一个\"状态函数\"——它只取决于起始和终止状态，而与所经路径无关。这让我们能够通过把可测量的反应相加，求出难以直接测量的反应的焓。"
            },
            {
              "type": "p",
              "en": "When you combine reactions: if you reverse a step, flip the sign of its $\\Delta H$; if you multiply a step by a factor, multiply its $\\Delta H$ by the same factor. Then add.",
              "zh": "组合反应时：如果逆转某一步，就把它的 $\\Delta H$ 变号；如果把某一步乘以一个倍数，就把它的 $\\Delta H$ 乘以同一倍数。然后相加。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Applying Hess's Law",
                "zh": "例题 2：应用盖斯定律"
              },
              "problem": {
                "en": "Given: (1) $\\text{C}(s) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$, $\\Delta H_1 = -394\\ \\text{kJ}$; (2) $\\text{CO}(g) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$, $\\Delta H_2 = -283\\ \\text{kJ}$. Find $\\Delta H$ for $\\text{C}(s) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$.",
                "zh": "已知：(1) $\\text{C}(s) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$，$\\Delta H_1 = -394\\ \\text{kJ}$；(2) $\\text{CO}(g) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$，$\\Delta H_2 = -283\\ \\text{kJ}$。求 $\\text{C}(s) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$ 的 $\\Delta H$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Keep reaction (1) as written (it makes $\\text{CO}_2$ from C). Reverse reaction (2) so $\\text{CO}_2$ becomes a reactant and $\\text{CO}$ a product; reversing flips its sign to $+283\\ \\text{kJ}$.",
                  "zh": "保留反应 (1) 不变（它由 C 生成 $\\text{CO}_2$）。逆转反应 (2)，使 $\\text{CO}_2$ 成为反应物、$\\text{CO}$ 成为产物；逆转使其符号变为 $+283\\ \\text{kJ}$。"
                },
                {
                  "type": "p",
                  "en": "Adding, the $\\text{CO}_2$ cancels on both sides, leaving $\\text{C}(s) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$:",
                  "zh": "相加后，两侧的 $\\text{CO}_2$ 相消，剩下 $\\text{C}(s) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$："
                },
                {
                  "type": "math",
                  "tex": "\\Delta H = \\Delta H_1 + (-\\Delta H_2) = -394 + 283 = -111\\ \\text{kJ}"
                },
                {
                  "type": "p",
                  "en": "The reaction is exothermic by $111\\ \\text{kJ}$ — a value that is very hard to measure directly because carbon burning tends to go all the way to $\\text{CO}_2$.",
                  "zh": "该反应放热 $111\\ \\text{kJ}$——这个值很难直接测量，因为碳燃烧往往一直进行到 $\\text{CO}_2$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Enthalpy of Formation",
              "zh": "生成焓"
            },
            {
              "type": "p",
              "en": "The standard enthalpy of formation ($\\Delta H_f^\\circ$) is the enthalpy change when one mole of a compound forms from its elements in their standard states. By definition, the $\\Delta H_f^\\circ$ of any element in its standard state (like $\\text{O}_2(g)$ or $\\text{C}(s)$) is exactly zero. Tabulated formation values let us compute the enthalpy of almost any reaction with a single rule:",
              "zh": "标准生成焓（$\\Delta H_f^\\circ$）是由处于标准态的元素生成一摩尔化合物时的焓变。根据定义，任何处于标准态的元素（如 $\\text{O}_2(g)$ 或 $\\text{C}(s)$）的 $\\Delta H_f^\\circ$ 恰好为零。查表得到的生成焓让我们能用一条规则计算几乎任何反应的焓："
            },
            {
              "type": "math",
              "tex": "\\Delta H_\\text{rxn} = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})"
            },
            {
              "type": "p",
              "en": "In words: \"products minus reactants\" (each multiplied by its coefficient). This is really just Hess's law in a convenient package.",
              "zh": "用文字说就是：\"产物减反应物\"（每一项乘以其系数）。这其实就是盖斯定律的一个方便形式。"
            },
            {
              "type": "note",
              "en": "Exam tip: the order is always products MINUS reactants — reversing it flips the sign of your answer. Also remember to multiply each $\\Delta H_f^\\circ$ by its coefficient, and to set elements in their standard state to zero.",
              "zh": "考试提示：顺序永远是产物减反应物——弄反会使答案变号。还要记得把每个 $\\Delta H_f^\\circ$ 乘以其系数，并把处于标准态的元素设为零。"
            },
            {
              "type": "h2",
              "en": "Bond Energy: Why Reactions Release or Absorb Energy",
              "zh": "键能：反应为何释放或吸收能量"
            },
            {
              "type": "p",
              "en": "At the particle level, every reaction breaks old bonds and forms new ones. Breaking a bond always requires energy (it is endothermic); forming a bond always releases energy (it is exothermic). The overall $\\Delta H$ is the balance between the two:",
              "zh": "在粒子层面，每个反应都会打破旧键并形成新键。断键总是需要能量（吸热）；成键总是释放能量（放热）。总的 $\\Delta H$ 就是二者的平衡："
            },
            {
              "type": "math",
              "tex": "\\Delta H \\approx \\sum (\\text{bond energies broken}) - \\sum (\\text{bond energies formed})"
            },
            {
              "type": "p",
              "en": "If the new bonds in the products are stronger (release more energy) than the bonds broken in the reactants, the reaction is exothermic. If the bonds broken cost more than the bonds formed give back, it is endothermic. This is the deep reason a fuel like methane releases so much heat: the $\\text{C=O}$ and $\\text{O-H}$ bonds in the products are very strong.",
              "zh": "如果产物中新形成的键比反应物中断裂的键更强（释放更多能量），反应就是放热的。如果断键消耗的能量多于成键放出的能量，反应就是吸热的。这就是甲烷这样的燃料释放大量热的深层原因：产物中的 $\\text{C=O}$ 和 $\\text{O-H}$ 键非常强。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For the reaction $\\text{N}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{NO}(g)$, $\\Delta H = +180\\ \\text{kJ}$. This reaction is…",
                "zh": "对反应 $\\text{N}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{NO}(g)$，$\\Delta H = +180\\ \\text{kJ}$。该反应是……"
              },
              "choices": [
                "exothermic; it releases heat to the surroundings",
                "endothermic; it absorbs heat and the products store more energy",
                "neither; $\\Delta H$ has no meaning here",
                "exothermic; the products are lower in energy"
              ],
              "answer": 1,
              "explanation": {
                "en": "A positive $\\Delta H$ means energy is absorbed, so the reaction is endothermic and the products (NO) sit higher in energy than the reactants. Choices about releasing heat describe the exothermic case ($\\Delta H < 0$).",
                "zh": "正的 $\\Delta H$ 表示吸收能量，所以反应吸热，产物（NO）的能量比反应物高。关于放热的选项描述的是放热情形（$\\Delta H < 0$）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A reaction has $\\Delta H = -250\\ \\text{kJ}$. What is $\\Delta H$ for the reverse reaction?",
                "zh": "某反应 $\\Delta H = -250\\ \\text{kJ}$。其逆反应的 $\\Delta H$ 是多少？"
              },
              "choices": [
                "$+250\\ \\text{kJ}$",
                "$-250\\ \\text{kJ}$",
                "$-500\\ \\text{kJ}$",
                "$0\\ \\text{kJ}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Reversing a reaction flips the sign of $\\Delta H$, so it becomes $+250\\ \\text{kJ}$. If the forward reaction releases 250 kJ, the reverse must absorb 250 kJ — energy conservation demands the sign flip.",
                "zh": "逆转反应会使 $\\Delta H$ 变号，所以变为 $+250\\ \\text{kJ}$。如果正反应释放 250 kJ，逆反应就必须吸收 250 kJ——能量守恒要求符号翻转。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At the particle level, which statement about bonds and energy is correct?",
                "zh": "在粒子层面，关于化学键与能量，哪项说法正确？"
              },
              "choices": [
                "Breaking bonds releases energy; forming bonds requires energy",
                "Both breaking and forming bonds release energy",
                "Breaking bonds requires energy; forming bonds releases energy",
                "Bonds have nothing to do with the energy of a reaction"
              ],
              "answer": 2,
              "explanation": {
                "en": "Breaking a bond always costs energy (endothermic), and forming a bond always releases energy (exothermic). A common trap is to reverse these — remember that pulling atoms apart is like stretching them apart against an attraction, which takes work.",
                "zh": "断键总是消耗能量（吸热），成键总是释放能量（放热）。常见陷阱是把二者搞反——记住把原子拉开就像克服吸引把它们分开，这需要做功。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Hess's law works because enthalpy is a state function. This means $\\Delta H$ depends on…",
                "zh": "盖斯定律成立是因为焓是状态函数。这意味着 $\\Delta H$ 取决于……"
              },
              "choices": [
                "the number of steps taken to get there",
                "the speed of the reaction",
                "only the initial and final states, not the path",
                "the size of the container"
              ],
              "answer": 2,
              "explanation": {
                "en": "A state function depends only on the beginning and ending states, not the route between them. That is why we can add step reactions to reach an overall $\\Delta H$. Reaction speed and container size do not affect $\\Delta H$.",
                "zh": "状态函数只取决于起点和终点，与其间的路径无关。这就是为什么我们可以把分步反应相加得到总 $\\Delta H$。反应速率和容器大小都不影响 $\\Delta H$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $2\\,\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{H}_2\\text{O}(l)$, $\\Delta H = -572\\ \\text{kJ}$. How much heat (in $\\text{kJ}$) is released when $1$ mole of $\\text{H}_2\\text{O}$ forms? Give the magnitude as an integer.",
                "zh": "对 $2\\,\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{H}_2\\text{O}(l)$，$\\Delta H = -572\\ \\text{kJ}$。生成 $1$ 摩尔 $\\text{H}_2\\text{O}$ 时释放多少热量（单位 $\\text{kJ}$）？以整数填写数值大小。"
              },
              "answer": "286",
              "accept": [
                "286.0"
              ],
              "explanation": {
                "en": "The $-572\\ \\text{kJ}$ corresponds to 2 moles of water. For 1 mole, halve it: $572/2 = 286\\ \\text{kJ}$ released. The coefficient tells you how the enthalpy is divided among the moles.",
                "zh": "$-572\\ \\text{kJ}$ 对应 2 摩尔水。对 1 摩尔取一半：$572/2 = 286\\ \\text{kJ}$ 被释放。系数告诉你焓如何在各摩尔间分配。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given (1) $\\text{A} \\rightarrow \\text{B}$, $\\Delta H = +40\\ \\text{kJ}$ and (2) $\\text{B} \\rightarrow \\text{C}$, $\\Delta H = -15\\ \\text{kJ}$, use Hess's law to find $\\Delta H$ (in $\\text{kJ}$) for $\\text{A} \\rightarrow \\text{C}$. Give a signed integer.",
                "zh": "已知 (1) $\\text{A} \\rightarrow \\text{B}$，$\\Delta H = +40\\ \\text{kJ}$；(2) $\\text{B} \\rightarrow \\text{C}$，$\\Delta H = -15\\ \\text{kJ}$，用盖斯定律求 $\\text{A} \\rightarrow \\text{C}$ 的 $\\Delta H$（单位 $\\text{kJ}$）。填一个带符号的整数。"
              },
              "answer": "25",
              "accept": [
                "+25"
              ],
              "explanation": {
                "en": "The two steps add directly (B cancels): $\\Delta H = (+40) + (-15) = +25\\ \\text{kJ}$. Neither step needed reversing or scaling, so you simply sum them.",
                "zh": "两步直接相加（B 相消）：$\\Delta H = (+40) + (-15) = +25\\ \\text{kJ}$。两步都无需逆转或缩放，直接求和即可。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $\\Delta H_\\text{rxn} = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$ for a reaction whose products total $-600\\ \\text{kJ}$ and reactants total $-200\\ \\text{kJ}$, find $\\Delta H_\\text{rxn}$ (in $\\text{kJ}$). Give a signed integer.",
                "zh": "用 $\\Delta H_\\text{rxn} = \\sum \\Delta H_f^\\circ(\\text{产物}) - \\sum \\Delta H_f^\\circ(\\text{反应物})$，某反应产物总和为 $-600\\ \\text{kJ}$、反应物总和为 $-200\\ \\text{kJ}$，求 $\\Delta H_\\text{rxn}$（单位 $\\text{kJ}$）。填一个带符号的整数。"
              },
              "answer": "-400",
              "accept": [
                "-400.0"
              ],
              "explanation": {
                "en": "$\\Delta H_\\text{rxn} = (-600) - (-200) = -600 + 200 = -400\\ \\text{kJ}$. A frequent error is subtracting in the wrong order (reactants minus products), which would give $+400$ and the wrong sign.",
                "zh": "$\\Delta H_\\text{rxn} = (-600) - (-200) = -600 + 200 = -400\\ \\text{kJ}$。常见错误是相减顺序反了（反应物减产物），那会得到 $+400$，符号错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A reaction breaks bonds that require $700\\ \\text{kJ}$ total and forms bonds that release $850\\ \\text{kJ}$ total. The reaction is…",
                "zh": "某反应断键共需要 $700\\ \\text{kJ}$，成键共释放 $850\\ \\text{kJ}$。该反应是……"
              },
              "choices": [
                "endothermic, $\\Delta H \\approx +150\\ \\text{kJ}$",
                "exothermic, $\\Delta H \\approx -150\\ \\text{kJ}$",
                "exothermic, $\\Delta H \\approx -1550\\ \\text{kJ}$",
                "endothermic, $\\Delta H \\approx +1550\\ \\text{kJ}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Using $\\Delta H \\approx (\\text{broken}) - (\\text{formed}) = 700 - 850 = -150\\ \\text{kJ}$. The new bonds are stronger, releasing more than it cost to break the old ones, so the reaction is exothermic. Adding the two (giving 1550) instead of subtracting is the classic mistake.",
                "zh": "用 $\\Delta H \\approx (\\text{断键}) - (\\text{成键}) = 700 - 850 = -150\\ \\text{kJ}$。新键更强，放出的能量多于断旧键所耗，所以反应放热。把两者相加（得 1550）而不是相减是典型错误。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "kinetics-equilibrium",
      "title": "Unit 10: Kinetics and Equilibrium",
      "titleZh": "第十单元：动力学与平衡",
      "lessons": [
        {
          "id": "reaction-rates-and-kinetics",
          "title": "Reaction Rates and Kinetics",
          "titleZh": "反应速率与动力学",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Reaction Rate?",
              "zh": "什么是反应速率？"
            },
            {
              "type": "p",
              "en": "Some reactions finish in a flash (an explosion), while others take years (iron rusting). Chemical kinetics is the study of how fast reactions happen and why. A reaction rate measures how quickly reactants are used up or products are formed over time — for example, moles of reactant consumed per second, or the change in concentration per second.",
              "zh": "有些反应瞬间完成（爆炸），有些则要花上数年（铁生锈）。化学动力学研究的是反应发生的快慢以及原因。反应速率衡量的是反应物被消耗或产物生成的快慢，例如每秒消耗的反应物摩尔数，或每秒浓度的变化。"
            },
            {
              "type": "p",
              "en": "A convenient general definition uses concentration (in molarity, $M$) and time: the rate equals the change in concentration divided by the change in time. We usually report it as a positive number, so a minus sign is placed in front of a reactant term because its concentration is decreasing.",
              "zh": "一个方便的通用定义使用浓度（以摩尔浓度 $M$ 表示）和时间：速率等于浓度变化除以时间变化。我们通常把它写成正数，所以在反应物一项前加负号，因为它的浓度在减少。"
            },
            {
              "type": "math",
              "tex": "\\text{rate} = -\\frac{\\Delta[\\text{reactant}]}{\\Delta t} = +\\frac{\\Delta[\\text{product}]}{\\Delta t}"
            },
            {
              "type": "p",
              "en": "Rates are not constant. They are usually fastest at the very start, when reactant concentrations are highest, and slow down as reactants are used up.",
              "zh": "速率并非恒定。它通常在最开始最快，因为此时反应物浓度最高，随着反应物被消耗而逐渐变慢。"
            },
            {
              "type": "h2",
              "en": "Collision Theory",
              "zh": "碰撞理论"
            },
            {
              "type": "p",
              "en": "Collision theory explains rate at the particle level. For a reaction to occur, particles must collide. But not every collision leads to a reaction. A collision that actually produces products is called an effective (or successful) collision, and it needs two things to be right.",
              "zh": "碰撞理论从粒子层面解释反应速率。要发生反应，粒子必须碰撞。但并非每次碰撞都能引发反应。真正生成产物的碰撞称为有效碰撞（或成功碰撞），它需要满足两个条件。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Enough energy: the colliding particles must have at least a minimum amount of energy called the activation energy ($E_a$) — the energy needed to break old bonds and start forming new ones.",
                  "zh": "足够的能量：碰撞的粒子必须至少具有一个最低能量，称为活化能（$E_a$）——即断开旧键、开始形成新键所需的能量。"
                },
                {
                  "en": "Correct orientation: the particles must be lined up so the right atoms meet. A high-energy collision at the wrong angle still bounces off without reacting.",
                  "zh": "正确的取向：粒子必须对齐，使正确的原子相遇。能量再高的碰撞若角度不对，也只会弹开而不发生反应。"
                }
              ]
            },
            {
              "type": "p",
              "en": "So the reaction rate depends on the frequency of collisions, the fraction of collisions with energy at or above $E_a$, and the fraction with the correct orientation.",
              "zh": "因此反应速率取决于碰撞的频率、能量达到或超过 $E_a$ 的碰撞比例，以及取向正确的碰撞比例。"
            },
            {
              "type": "h3",
              "en": "Energy Profile Diagrams",
              "zh": "能量变化图（反应进程图）"
            },
            {
              "type": "p",
              "en": "An energy profile (reaction coordinate diagram) plots the energy of the particles as the reaction proceeds. Reactants start at one energy level, climb up a hill to a peak called the transition state (the top of the activation-energy barrier), and then come down to the products. The height of the hill measured from the reactants is the activation energy $E_a$.",
              "zh": "能量变化图（反应坐标图）描绘反应进行过程中粒子能量的变化。反应物从某一能级开始，爬上一座小山到达峰顶——称为过渡态（活化能垒的顶点），然后下降到产物。从反应物量起的山峰高度就是活化能 $E_a$。"
            },
            {
              "type": "p",
              "en": "The difference in energy between products and reactants is the overall energy change of the reaction. If the products sit lower than the reactants, energy is released (exothermic); if the products sit higher, energy is absorbed (endothermic). A catalyst provides a new pathway with a lower peak — it lowers $E_a$ but does not change the starting or ending energy levels.",
              "zh": "产物与反应物之间的能量差就是反应的总能量变化。若产物低于反应物，则释放能量（放热）；若产物高于反应物，则吸收能量（吸热）。催化剂提供一条峰更低的新途径——它降低 $E_a$，但不改变起点和终点的能级。"
            },
            {
              "type": "note",
              "en": "Exam tip: a catalyst lowers the activation energy but does NOT change how exothermic or endothermic a reaction is. On an energy diagram, a catalyst pulls the peak down but leaves the reactant and product levels exactly where they were.",
              "zh": "考试提示：催化剂降低活化能，但不改变反应放热或吸热的程度。在能量图上，催化剂把峰拉低，但反应物和产物的能级位置完全不变。"
            },
            {
              "type": "h2",
              "en": "Factors That Affect Reaction Rate",
              "zh": "影响反应速率的因素"
            },
            {
              "type": "p",
              "en": "Each of the following factors changes the rate, and collision theory explains why. The key idea is to ask: does this change make collisions more frequent, more energetic, or both?",
              "zh": "下列每个因素都会改变速率，碰撞理论解释了原因。关键在于问：这个变化是让碰撞更频繁、更有能量，还是两者兼有？"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Concentration (or pressure for gases): more particles in the same volume means more frequent collisions, so a faster rate.",
                  "zh": "浓度（气体则为压强）：同样体积中粒子更多，意味着碰撞更频繁，因此速率更快。"
                },
                {
                  "en": "Temperature: raising the temperature makes particles move faster (more frequent collisions) and, more importantly, gives a much larger fraction of them energy above $E_a$. This is why a modest temperature increase can dramatically speed up a reaction.",
                  "zh": "温度：升高温度使粒子运动更快（碰撞更频繁），更重要的是，让更大比例的粒子能量超过 $E_a$。这就是为什么温度小幅升高就能显著加快反应。"
                },
                {
                  "en": "Surface area: for a solid reactant, breaking it into smaller pieces (or a powder) exposes more particles to collisions, so the rate increases.",
                  "zh": "表面积：对固体反应物，把它碎成小块（或磨成粉）会让更多粒子暴露以供碰撞，因此速率增大。"
                },
                {
                  "en": "Catalyst: a substance that speeds up a reaction by providing a lower-$E_a$ pathway, without being used up itself. More collisions now have enough energy to succeed.",
                  "zh": "催化剂：通过提供活化能更低的途径来加快反应、且自身不被消耗的物质。此时有更多碰撞具备足够能量而成功。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Real-World Examples",
              "zh": "现实中的例子"
            },
            {
              "type": "p",
              "en": "Refrigeration slows food spoilage: lowering the temperature reduces both the collision frequency and the fraction of high-energy collisions, so the reactions that cause spoilage crawl. A catalytic converter in a car uses solid catalysts (platinum, palladium, rhodium) to speed the conversion of toxic $\\text{CO}$ and unburned fuel into $\\text{CO}_2$ and water — the catalyst lowers the activation energy so the cleanup happens fast enough in the exhaust stream.",
              "zh": "冷藏减缓食物变质：降温既减少碰撞频率，又减少高能碰撞的比例，因此导致变质的反应变得极慢。汽车的催化转化器使用固体催化剂（铂、钯、铑）来加快把有毒的 $\\text{CO}$ 和未燃尽的燃料转化为 $\\text{CO}_2$ 和水——催化剂降低活化能，使净化在尾气流中足够快地完成。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Explaining a Rate Change with Collision Theory",
                "zh": "例题 1：用碰撞理论解释速率变化"
              },
              "problem": {
                "en": "A piece of solid zinc reacts slowly with hydrochloric acid. A student instead uses the same mass of powdered zinc and warms the acid. State two reasons, in terms of particles and collisions, why the reaction is now much faster.",
                "zh": "一块固体锌与盐酸反应很慢。某学生改用相同质量的锌粉，并加热盐酸。请用粒子和碰撞的语言，说出反应现在快得多的两个原因。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Reason 1 (surface area): powdering the zinc exposes far more zinc atoms at the surface, so acid particles collide with zinc much more frequently, increasing the number of effective collisions per second.",
                  "zh": "原因 1（表面积）：把锌磨成粉使表面暴露出多得多的锌原子，因此酸的粒子与锌碰撞的频率大大提高，每秒的有效碰撞数增多。"
                },
                {
                  "type": "p",
                  "en": "Reason 2 (temperature): warming the acid makes its particles move faster and, crucially, gives a larger fraction of collisions energy at or above the activation energy. Both the frequency and the success rate of collisions rise, so the reaction speeds up.",
                  "zh": "原因 2（温度）：加热盐酸使其粒子运动更快，关键是让更大比例的碰撞具有达到或超过活化能的能量。碰撞的频率和成功率都升高，因此反应加快。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading an Energy Profile",
                "zh": "例题 2：读能量变化图"
              },
              "problem": {
                "en": "For a reaction, the reactants have an energy of $150\\ \\text{kJ}$, the transition-state peak is at $210\\ \\text{kJ}$, and the products have an energy of $120\\ \\text{kJ}$. (a) Find the activation energy. (b) Is the reaction exothermic or endothermic? (c) If a catalyst lowers the peak to $180\\ \\text{kJ}$, what is the new activation energy?",
                "zh": "某反应中，反应物能量为 $150\\ \\text{kJ}$，过渡态峰值为 $210\\ \\text{kJ}$，产物能量为 $120\\ \\text{kJ}$。(a) 求活化能。(b) 反应是放热还是吸热？(c) 若催化剂把峰值降到 $180\\ \\text{kJ}$，新的活化能是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) The activation energy is the peak measured from the reactants:",
                  "zh": "(a) 活化能是从反应物量起的峰高："
                },
                {
                  "type": "math",
                  "tex": "E_a = 210\\ \\text{kJ} - 150\\ \\text{kJ} = 60\\ \\text{kJ}"
                },
                {
                  "type": "p",
                  "en": "(b) The products ($120\\ \\text{kJ}$) are lower than the reactants ($150\\ \\text{kJ}$), so energy is released — the reaction is exothermic.",
                  "zh": "(b) 产物（$120\\ \\text{kJ}$）低于反应物（$150\\ \\text{kJ}$），因此释放能量——反应是放热的。"
                },
                {
                  "type": "p",
                  "en": "(c) With the catalyst the peak is $180\\ \\text{kJ}$, so $E_a = 180 - 150 = 30\\ \\text{kJ}$. The catalyst halved the barrier but the product level (and thus the exothermic energy change) is unchanged.",
                  "zh": "(c) 有催化剂时峰值为 $180\\ \\text{kJ}$，故 $E_a = 180 - 150 = 30\\ \\text{kJ}$。催化剂把能垒减半，但产物能级（因此放热的能量变化）不变。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "According to collision theory, which two conditions must be met for a collision to produce a reaction?",
                "zh": "根据碰撞理论，碰撞要引发反应必须满足哪两个条件？"
              },
              "choices": [
                "Sufficient energy (at least $E_a$) and correct orientation",
                "A catalyst must be present, and the temperature must be high",
                "The reaction must be exothermic and the pressure high",
                "The particles must be solids with large surface area"
              ],
              "answer": 0,
              "explanation": {
                "en": "An effective collision needs energy at or above the activation energy AND the correct orientation of the particles. A catalyst and high temperature help but are not requirements for an individual collision to succeed.",
                "zh": "有效碰撞需要能量达到或超过活化能，并且粒子取向正确。催化剂和高温有帮助，但并不是单次碰撞成功的必要条件。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How does a catalyst speed up a reaction?",
                "zh": "催化剂如何加快反应？"
              },
              "choices": [
                "It raises the temperature of the reactants",
                "It increases the energy released by the reaction",
                "It provides an alternate pathway with a lower activation energy",
                "It shifts the products to a higher energy level"
              ],
              "answer": 2,
              "explanation": {
                "en": "A catalyst lowers $E_a$ by offering a new pathway, so a larger fraction of collisions succeed. It does not change the temperature, the energy released, or the reactant/product energy levels — a tempting wrong answer is \"energy released,\" which stays the same.",
                "zh": "催化剂通过提供新途径降低 $E_a$，使更大比例的碰撞成功。它不改变温度、释放的能量或反应物/产物能级——一个诱人的错误答案是“释放的能量”，而它其实保持不变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why does increasing temperature usually have a much larger effect on rate than increasing concentration?",
                "zh": "为什么升高温度对速率的影响通常比增大浓度大得多？"
              },
              "choices": [
                "Temperature increases the number of particles in the container",
                "Temperature both increases collision frequency and greatly increases the fraction of collisions with energy above $E_a$",
                "Temperature lowers the activation energy of the reaction",
                "Temperature changes the orientation requirement"
              ],
              "answer": 1,
              "explanation": {
                "en": "Higher concentration only increases collision frequency. Higher temperature raises frequency too, but its dominant effect is sharply increasing the fraction of particles with energy at or above $E_a$. Note that temperature does not lower $E_a$ (only a catalyst does that).",
                "zh": "增大浓度只提高碰撞频率。升温也提高频率，但其主要作用是大幅提高能量达到或超过 $E_a$ 的粒子比例。注意温度并不降低 $E_a$（只有催化剂才能）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "On an energy profile, the reactants are at $80\\ \\text{kJ}$ and the transition-state peak is at $135\\ \\text{kJ}$. What is the activation energy in $\\text{kJ}$? (Give an integer.)",
                "zh": "在能量变化图上，反应物位于 $80\\ \\text{kJ}$，过渡态峰值位于 $135\\ \\text{kJ}$。活化能是多少 $\\text{kJ}$？（填一个整数。）"
              },
              "answer": "55",
              "accept": [
                "55.0",
                "+55"
              ],
              "explanation": {
                "en": "The activation energy is the height of the peak above the reactants: $135 - 80 = 55\\ \\text{kJ}$. Do not measure from the products or from zero.",
                "zh": "活化能是峰高于反应物的高度：$135 - 80 = 55\\ \\text{kJ}$。不要从产物或从零量起。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solid reactant reacts faster as a fine powder than as a single lump of the same mass. The best particle-level explanation is that the powder has…",
                "zh": "相同质量的固体反应物，细粉比整块反应更快。最佳的粒子层面解释是粉末具有……"
              },
              "choices": [
                "a lower activation energy",
                "a higher temperature",
                "a greater total number of atoms",
                "more surface area, exposing more particles to collisions"
              ],
              "answer": 3,
              "explanation": {
                "en": "Grinding a solid into powder does not change the amount of matter, the temperature, or $E_a$ — it exposes more surface particles, so collisions with the other reactant happen more often. \"More total atoms\" is wrong because the mass is the same.",
                "zh": "把固体磨成粉不改变物质的量、温度或 $E_a$——它暴露出更多表面粒子，因此与另一反应物的碰撞更频繁。“原子总数更多”是错的，因为质量相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The concentration of a reactant drops from $0.80\\ M$ to $0.50\\ M$ over $6.0\\ \\text{s}$. What is the average rate of disappearance of the reactant, in $M/\\text{s}$, reported as a positive number to 2 sig figs?",
                "zh": "某反应物的浓度在 $6.0\\ \\text{s}$ 内从 $0.80\\ M$ 降到 $0.50\\ M$。反应物的平均消失速率是多少 $M/\\text{s}$？以正数表示，保留 2 位有效数字。"
              },
              "answer": "0.050",
              "accept": [
                "0.05",
                "5.0e-2"
              ],
              "explanation": {
                "en": "Rate $= -\\Delta[\\text{reactant}]/\\Delta t = -(0.50 - 0.80)/6.0 = 0.30/6.0 = 0.050\\ M/\\text{s}$. The minus sign makes the reported rate positive even though the reactant is disappearing.",
                "zh": "速率 $= -\\Delta[\\text{反应物}]/\\Delta t = -(0.50 - 0.80)/6.0 = 0.30/6.0 = 0.050\\ M/\\text{s}$。负号使得报告的速率为正，尽管反应物在减少。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Food is refrigerated to slow spoilage. In terms of collision theory, lowering the temperature slows the spoilage reactions because it…",
                "zh": "食物冷藏以减缓变质。用碰撞理论来说，降温减慢变质反应是因为它……"
              },
              "choices": [
                "raises the activation energy of the reactions",
                "decreases collision frequency and reduces the fraction of collisions that reach $E_a$",
                "removes all the reactant particles",
                "changes the spoilage reactions into physical changes"
              ],
              "answer": 1,
              "explanation": {
                "en": "Cooling makes particles move slower (fewer collisions) and shifts far fewer of them above the activation energy, so effective collisions become rare. Temperature does not change $E_a$ itself — that misconception is the trap in the first choice.",
                "zh": "降温使粒子运动更慢（碰撞减少），并使远少的粒子能量超过活化能，因此有效碰撞变得稀少。温度本身不改变 $E_a$——第一个选项正是这个误区设下的陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about a catalyst in an exothermic reaction is correct?",
                "zh": "关于放热反应中催化剂的说法，哪一项正确？"
              },
              "choices": [
                "It makes the reaction release more energy overall",
                "It is permanently consumed by the reaction",
                "It lowers the activation energy but leaves the overall energy change unchanged",
                "It only works if the reaction is heated first"
              ],
              "answer": 2,
              "explanation": {
                "en": "A catalyst lowers $E_a$ (pulling down the peak) but the reactant and product energy levels are unchanged, so the overall energy released is the same. It is not consumed, and it does not require preheating. The tempting distractor is that it \"releases more energy,\" but the energy change is fixed by the reactants and products.",
                "zh": "催化剂降低 $E_a$（把峰拉低），但反应物和产物的能级不变，因此总释放的能量相同。它不被消耗，也不需要先加热。诱人的干扰项是它“释放更多能量”，但能量变化由反应物和产物决定，是固定的。"
              }
            }
          ]
        },
        {
          "id": "chemical-equilibrium",
          "title": "Chemical Equilibrium and Le Châtelier's Principle",
          "titleZh": "化学平衡与勒夏特列原理",
          "content": [
            {
              "type": "h2",
              "en": "Reversible Reactions and Dynamic Equilibrium",
              "zh": "可逆反应与动态平衡"
            },
            {
              "type": "p",
              "en": "Many reactions are reversible: products can react to re-form reactants. We show this with a double arrow, $\\rightleftharpoons$. Imagine a closed flask where reactants form products (the forward reaction) while products turn back into reactants (the reverse reaction). At first the forward reaction is fast (lots of reactant) and the reverse is slow. As reactants are used up, the forward rate drops; as product builds up, the reverse rate rises.",
              "zh": "许多反应是可逆的：产物可以反应重新生成反应物。我们用双向箭头 $\\rightleftharpoons$ 表示。想象一个密闭烧瓶，反应物生成产物（正反应），同时产物又变回反应物（逆反应）。起初正反应很快（反应物多）而逆反应很慢。随着反应物被消耗，正反应速率下降；随着产物累积，逆反应速率上升。"
            },
            {
              "type": "p",
              "en": "Eventually the two rates become equal. At that point the reaction has reached dynamic equilibrium: the forward and reverse reactions are still happening, but at the same rate, so the concentrations of all species stay constant. \"Dynamic\" means the molecules never stop reacting; \"equilibrium\" means nothing appears to change on the outside.",
              "zh": "最终两个速率变得相等。此时反应达到动态平衡：正反应和逆反应仍在进行，但速率相同，所以各物质的浓度保持不变。“动态”指分子从未停止反应；“平衡”指从外部看没有任何变化。"
            },
            {
              "type": "math",
              "tex": "\\text{At equilibrium:}\\quad \\text{rate}_{\\text{forward}} = \\text{rate}_{\\text{reverse}}"
            },
            {
              "type": "note",
              "en": "Common mistake: equilibrium does NOT mean the concentrations of reactants and products are equal. It means their concentrations are no longer changing, because the two rates are equal. The actual amounts can be very different.",
              "zh": "常见错误：平衡并不意味着反应物和产物的浓度相等。它意味着它们的浓度不再变化，因为两个速率相等。实际的量可以相差很大。"
            },
            {
              "type": "h2",
              "en": "The Equilibrium Constant $K$",
              "zh": "平衡常数 $K$"
            },
            {
              "type": "p",
              "en": "The equilibrium constant $K$ is a single number that describes the position of equilibrium — how far a reaction proceeds before the rates balance. For a general reaction $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$, we write $K$ as the product concentrations over the reactant concentrations, each raised to the power of its coefficient:",
              "zh": "平衡常数 $K$ 是一个描述平衡位置的数值——即反应在速率平衡前进行的程度。对于一般反应 $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$，我们把 $K$ 写成产物浓度比反应物浓度，各自以其系数为幂："
            },
            {
              "type": "math",
              "tex": "K = \\frac{[\\text{C}]^{c}[\\text{D}]^{d}}{[\\text{A}]^{a}[\\text{B}]^{b}}"
            },
            {
              "type": "p",
              "en": "Products go on top, reactants on the bottom, and coefficients become exponents. Square brackets mean molar concentration at equilibrium. (Pure solids and pure liquids are left out of the expression because their concentration does not change.)",
              "zh": "产物在上，反应物在下，系数变成指数。方括号表示平衡时的摩尔浓度。（纯固体和纯液体不写进表达式，因为它们的浓度不变。）"
            },
            {
              "type": "h3",
              "en": "What the Size of $K$ Tells You",
              "zh": "$K$ 的大小说明什么"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $K \\gg 1$ (large): the numerator dominates, so at equilibrium there are mostly products. We say the equilibrium \"lies to the right\" and the forward reaction goes nearly to completion.",
                  "zh": "若 $K \\gg 1$（很大）：分子占主导，因此平衡时主要是产物。我们说平衡“偏向右侧”，正反应几乎进行到底。"
                },
                {
                  "en": "If $K \\ll 1$ (small): the denominator dominates, so at equilibrium there are mostly reactants. The equilibrium \"lies to the left\" and little product forms.",
                  "zh": "若 $K \\ll 1$（很小）：分母占主导，因此平衡时主要是反应物。平衡“偏向左侧”，几乎不生成产物。"
                },
                {
                  "en": "If $K \\approx 1$: appreciable amounts of both reactants and products are present at equilibrium.",
                  "zh": "若 $K \\approx 1$：平衡时反应物和产物都有相当的量。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Exam tip: $K$ depends only on temperature. Changing concentrations or pressure shifts the position of equilibrium but does NOT change the value of $K$. Only a temperature change gives a new $K$.",
              "zh": "考试提示：$K$ 只与温度有关。改变浓度或压强会移动平衡的位置，但不改变 $K$ 的值。只有温度改变才会给出新的 $K$。"
            },
            {
              "type": "h2",
              "en": "Le Châtelier's Principle",
              "zh": "勒夏特列原理"
            },
            {
              "type": "p",
              "en": "Le Châtelier's principle predicts how an equilibrium responds to a disturbance (a \"stress\"): if a system at equilibrium is disturbed, it shifts in the direction that partially counteracts the disturbance and restores equilibrium. Think of it as the system pushing back against whatever you did.",
              "zh": "勒夏特列原理预测平衡如何应对扰动（“压力”）：当处于平衡的体系受到扰动时，它会朝着部分抵消该扰动、恢复平衡的方向移动。可以把它想成体系对你所做的事进行“反抗”。"
            },
            {
              "type": "h3",
              "en": "Changing Concentration",
              "zh": "改变浓度"
            },
            {
              "type": "p",
              "en": "Add more of a substance and the equilibrium shifts away from it (to use it up); remove a substance and the equilibrium shifts toward it (to replace it). For example, adding more reactant shifts the equilibrium to the right, making more product.",
              "zh": "加入更多某物质，平衡就朝远离它的方向移动（把它消耗掉）；移走某物质，平衡就朝它的方向移动（把它补回来）。例如，加入更多反应物会使平衡右移，生成更多产物。"
            },
            {
              "type": "h3",
              "en": "Changing Pressure or Volume (Gases)",
              "zh": "改变压强或体积（气体）"
            },
            {
              "type": "p",
              "en": "For gaseous equilibria, decreasing the volume (increasing the pressure) shifts the equilibrium toward the side with fewer moles of gas, to reduce the pressure. Increasing the volume (decreasing the pressure) shifts toward the side with more moles of gas. Count the gas moles using the coefficients. If both sides have the same number of gas moles, a pressure change has no effect.",
              "zh": "对气态平衡，减小体积（增大压强）会使平衡向气体摩尔数较少的一侧移动，以降低压强。增大体积（减小压强）则向气体摩尔数较多的一侧移动。用系数数气体摩尔数。若两侧气体摩尔数相同，改变压强没有影响。"
            },
            {
              "type": "h3",
              "en": "Changing Temperature",
              "zh": "改变温度"
            },
            {
              "type": "p",
              "en": "Treat heat as a reactant or product. For an exothermic reaction, heat is a product ($\\text{reactants} \\rightleftharpoons \\text{products} + \\text{heat}$): raising the temperature adds heat, shifting the equilibrium left (toward reactants) and lowering $K$. For an endothermic reaction, heat is a reactant: raising the temperature shifts it right and raises $K$. Temperature is the only stress that actually changes the value of $K$.",
              "zh": "把热当作反应物或产物。对放热反应，热是产物（$\\text{反应物} \\rightleftharpoons \\text{产物} + \\text{热}$）：升温相当于加入热，使平衡左移（偏向反应物）并降低 $K$。对吸热反应，热是反应物：升温使平衡右移并升高 $K$。温度是唯一真正改变 $K$ 值的扰动。"
            },
            {
              "type": "note",
              "en": "Common mistake: adding a catalyst does NOT shift the equilibrium. A catalyst speeds up the forward and reverse reactions equally, so the system reaches the same equilibrium faster — but the final amounts and $K$ are unchanged.",
              "zh": "常见错误：加入催化剂不会移动平衡。催化剂对正反应和逆反应加速的程度相同，因此体系更快达到相同的平衡——但最终的量和 $K$ 不变。"
            },
            {
              "type": "h3",
              "en": "Real Applications",
              "zh": "实际应用"
            },
            {
              "type": "p",
              "en": "The Haber process makes ammonia: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, which is exothermic. To push the equilibrium toward ammonia, engineers use high pressure (the right side has fewer gas moles: 2 vs 4) and remove ammonia as it forms. A moderate temperature is a compromise — lower temperature favors more product but makes the reaction too slow, so a catalyst is added for speed. In your blood, hemoglobin binds oxygen in an equilibrium; in the oxygen-rich lungs the equilibrium shifts to load oxygen, while in oxygen-poor tissues it shifts to release oxygen. Both are Le Châtelier shifts driven by changing $\\text{O}_2$ concentration.",
              "zh": "哈伯法制氨：$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$，是放热反应。为把平衡推向氨，工程师采用高压（右侧气体摩尔数较少：2 对 4），并随生成随移走氨。适中的温度是一种折衷——低温有利于生成更多产物，但会使反应太慢，因此加入催化剂来提速。在血液中，血红蛋白与氧结合形成一个平衡；在富氧的肺部平衡右移以装载氧，而在缺氧的组织平衡左移以释放氧。两者都是由 $\\text{O}_2$ 浓度变化驱动的勒夏特列移动。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Writing $K$ and Reading Its Size",
                "zh": "例题 1：写出 $K$ 并解读其大小"
              },
              "problem": {
                "en": "For the reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, (a) write the equilibrium-constant expression, and (b) if $K = 2.8 \\times 10^{2}$ at a certain temperature, are reactants or products favored at equilibrium?",
                "zh": "对于反应 $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$，(a) 写出平衡常数表达式；(b) 若在某温度下 $K = 2.8 \\times 10^{2}$，平衡时是反应物还是产物占优？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Put products over reactants, with coefficients as exponents:",
                  "zh": "(a) 产物比反应物，系数作指数："
                },
                {
                  "type": "math",
                  "tex": "K = \\frac{[\\text{SO}_3]^{2}}{[\\text{SO}_2]^{2}[\\text{O}_2]}"
                },
                {
                  "type": "p",
                  "en": "(b) $K = 280$ is much greater than 1, so the numerator (products) dominates. At equilibrium the mixture is mostly $\\text{SO}_3$ — products are favored and the equilibrium lies to the right.",
                  "zh": "(b) $K = 280$ 远大于 1，所以分子（产物）占主导。平衡时混合物主要是 $\\text{SO}_3$——产物占优，平衡偏向右侧。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Applying Le Châtelier's Principle",
                "zh": "例题 2：应用勒夏特列原理"
              },
              "problem": {
                "en": "Consider the exothermic equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + \\text{heat}$. Predict the direction of shift (left, right, or none) for each change: (a) adding more $\\text{H}_2$, (b) decreasing the container volume, (c) increasing the temperature, (d) adding a catalyst.",
                "zh": "考虑放热平衡 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + \\text{热}$。预测下列每个变化引起的移动方向（左、右或不移动）：(a) 加入更多 $\\text{H}_2$，(b) 减小容器体积，(c) 升高温度，(d) 加入催化剂。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Adding $\\text{H}_2$ (a reactant) shifts the equilibrium right to consume it, making more $\\text{NH}_3$.",
                  "zh": "(a) 加入 $\\text{H}_2$（反应物）使平衡右移以消耗它，生成更多 $\\text{NH}_3$。"
                },
                {
                  "type": "p",
                  "en": "(b) Decreasing the volume raises the pressure, so the system shifts toward fewer gas moles. The left has $1 + 3 = 4$ moles of gas, the right has $2$; the equilibrium shifts right.",
                  "zh": "(b) 减小体积使压强升高，体系向气体摩尔数较少的一侧移动。左侧有 $1 + 3 = 4$ 摩尔气体，右侧有 $2$ 摩尔；平衡右移。"
                },
                {
                  "type": "p",
                  "en": "(c) Heat is a product (exothermic). Increasing the temperature adds heat, so the equilibrium shifts left toward reactants, and $K$ decreases.",
                  "zh": "(c) 热是产物（放热）。升温相当于加入热，因此平衡向反应物左移，$K$ 减小。"
                },
                {
                  "type": "p",
                  "en": "(d) A catalyst speeds both directions equally, so there is no shift — equilibrium is just reached faster.",
                  "zh": "(d) 催化剂对两个方向加速相同，因此不移动——只是更快达到平衡。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which statement best describes a system at dynamic equilibrium?",
                "zh": "哪种说法最能描述处于动态平衡的体系？"
              },
              "choices": [
                "Both the forward and reverse reactions have stopped",
                "The concentrations of reactants and products are equal",
                "The forward and reverse reactions occur at equal rates, so concentrations stay constant",
                "Only the forward reaction is still occurring"
              ],
              "answer": 2,
              "explanation": {
                "en": "At dynamic equilibrium both reactions continue but at equal rates, so concentrations no longer change. The reactions have not stopped (choice 1), and equal concentrations (choice 2) is a common misconception — the amounts are constant, not necessarily equal.",
                "zh": "在动态平衡时，两个反应都在继续但速率相等，因此浓度不再变化。反应并未停止（选项 1），浓度相等（选项 2）是常见误区——量是恒定的，未必相等。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $2\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g)$, which is the correct equilibrium expression?",
                "zh": "对于 $2\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}_2(g)$，哪个是正确的平衡表达式？"
              },
              "choices": [
                "$K = \\dfrac{[\\text{NO}]^{2}[\\text{O}_2]}{[\\text{NO}_2]^{2}}$",
                "$K = \\dfrac{[\\text{NO}_2]^{2}}{[\\text{NO}]^{2}[\\text{O}_2]}$",
                "$K = \\dfrac{2[\\text{NO}_2]}{2[\\text{NO}][\\text{O}_2]}$",
                "$K = \\dfrac{[\\text{NO}_2]}{[\\text{NO}][\\text{O}_2]}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Products over reactants, with coefficients as exponents (not as multipliers): $K = [\\text{NO}_2]^2 / ([\\text{NO}]^2[\\text{O}_2])$. Choice 1 inverts products and reactants; choices 3 and 4 wrongly use coefficients as multipliers or drop them.",
                "zh": "产物比反应物，系数作指数（不是乘数）：$K = [\\text{NO}_2]^2 / ([\\text{NO}]^2[\\text{O}_2])$。选项 1 把产物和反应物颠倒；选项 3、4 错误地把系数当乘数或漏掉了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A reaction has $K = 3.0 \\times 10^{-6}$. What does this tell you about the equilibrium mixture?",
                "zh": "某反应 $K = 3.0 \\times 10^{-6}$。这说明平衡混合物是怎样的？"
              },
              "choices": [
                "It contains mostly products",
                "It contains roughly equal reactants and products",
                "It contains mostly reactants; little product forms",
                "The reaction never reaches equilibrium"
              ],
              "answer": 2,
              "explanation": {
                "en": "A very small $K$ (much less than 1) means the denominator (reactants) dominates, so at equilibrium there are mostly reactants and little product. A small $K$ still describes a real equilibrium — the reaction just does not proceed far.",
                "zh": "$K$ 很小（远小于 1）意味着分母（反应物）占主导，所以平衡时主要是反应物，产物很少。$K$ 小仍然描述真实的平衡——只是反应进行得不远。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the gas equilibrium $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, the volume is suddenly decreased (pressure increased). Does the equilibrium shift toward the side with fewer moles of gas? Answer \"left\" or \"right\".",
                "zh": "对于气体平衡 $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$，体积突然减小（压强增大）。平衡会移向气体摩尔数较少的一侧吗？回答 “left” 或 “right”。"
              },
              "answer": "left",
              "accept": [
                "Left",
                "LEFT"
              ],
              "explanation": {
                "en": "Increasing pressure shifts the equilibrium toward fewer gas moles. The left side has 1 mole of gas and the right has $1 + 1 = 2$ moles, so the system shifts left toward $\\text{PCl}_5$.",
                "zh": "增大压强使平衡向气体摩尔数较少的一侧移动。左侧有 1 摩尔气体，右侧有 $1 + 1 = 2$ 摩尔，所以体系向 $\\text{PCl}_5$ 左移。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the endothermic equilibrium $\\text{heat} + \\text{A} \\rightleftharpoons \\text{B}$, what happens when the temperature is increased?",
                "zh": "对于吸热平衡 $\\text{热} + \\text{A} \\rightleftharpoons \\text{B}$，升高温度会发生什么？"
              },
              "choices": [
                "The equilibrium shifts right and $K$ increases",
                "The equilibrium shifts left and $K$ decreases",
                "The equilibrium does not shift, but $K$ increases",
                "A catalyst is required before any shift can occur"
              ],
              "answer": 0,
              "explanation": {
                "en": "Heat is a reactant in an endothermic reaction, so adding heat (raising the temperature) shifts the equilibrium right toward B, and because more product is favored, $K$ increases. Temperature is the only stress that changes $K$.",
                "zh": "在吸热反应中热是反应物，所以加入热（升温）使平衡向 B 右移，且因更有利于生成产物，$K$ 增大。温度是唯一改变 $K$ 的扰动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A catalyst is added to a reaction that has already reached equilibrium. By how many does the amount of product change? Give an integer.",
                "zh": "向已达平衡的反应中加入催化剂。产物的量改变了多少？填一个整数。"
              },
              "answer": "0",
              "accept": [
                "zero",
                "0.0"
              ],
              "explanation": {
                "en": "A catalyst speeds the forward and reverse reactions equally, so it does not shift the equilibrium — the amount of product does not change (change = 0). It only helps a system reach equilibrium faster.",
                "zh": "催化剂对正反应和逆反应加速相同，所以不移动平衡——产物的量不变（变化 = 0）。它只帮助体系更快达到平衡。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the Haber process $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, why do engineers run the reaction at high pressure to maximize ammonia yield?",
                "zh": "在哈伯法 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ 中，工程师为什么在高压下进行反应以最大化氨的产率？"
              },
              "choices": [
                "High pressure raises the value of $K$",
                "The product side has fewer gas moles (2 vs 4), so high pressure shifts the equilibrium right",
                "High pressure lowers the activation energy",
                "High pressure removes ammonia from the system"
              ],
              "answer": 1,
              "explanation": {
                "en": "Increasing pressure shifts a gas equilibrium toward the side with fewer moles of gas. The product side has 2 moles versus 4 on the reactant side, so high pressure favors $\\text{NH}_3$. Pressure does not change $K$ (only temperature does) — that is the trap in the first choice.",
                "zh": "增大压强使气体平衡向气体摩尔数较少的一侧移动。产物侧有 2 摩尔，反应物侧有 4 摩尔，所以高压有利于 $\\text{NH}_3$。压强不改变 $K$（只有温度才能）——第一个选项正是这个陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Hemoglobin binds oxygen in the reversible equilibrium $\\text{Hb} + \\text{O}_2 \\rightleftharpoons \\text{HbO}_2$. In the oxygen-poor tissues of a working muscle, which way does the equilibrium shift, and what is the result?",
                "zh": "血红蛋白在可逆平衡 $\\text{Hb} + \\text{O}_2 \\rightleftharpoons \\text{HbO}_2$ 中结合氧。在工作肌肉这类缺氧组织中，平衡向哪个方向移动，结果是什么？"
              },
              "choices": [
                "Shifts right, loading more oxygen onto hemoglobin",
                "Does not shift, because equilibria are fixed in the body",
                "Shifts right, releasing oxygen to the tissues",
                "Shifts left, releasing oxygen to the tissues"
              ],
              "answer": 3,
              "explanation": {
                "en": "Low $\\text{O}_2$ concentration in tissues is like removing a reactant, so by Le Châtelier the equilibrium shifts left toward $\\text{Hb} + \\text{O}_2$, releasing oxygen where the muscle needs it. Choice 3 pairs the right effect (releasing oxygen) with the wrong direction.",
                "zh": "组织中低 $\\text{O}_2$ 浓度相当于移走反应物，所以按勒夏特列原理平衡向 $\\text{Hb} + \\text{O}_2$ 左移，在肌肉需要的地方释放氧。选项 3 把正确的结果（释放氧）配上了错误的方向。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "nuclear-chemistry",
      "title": "Unit 11: Nuclear Chemistry",
      "titleZh": "第十一单元：核化学",
      "lessons": [
        {
          "id": "nuclear-chemistry",
          "title": "Nuclear Chemistry",
          "titleZh": "核化学",
          "content": [
            {
              "type": "h2",
              "en": "The Nucleus and Nuclear Stability",
              "zh": "原子核与核稳定性"
            },
            {
              "type": "p",
              "en": "Ordinary chemistry rearranges electrons; nuclear chemistry changes the nucleus itself. The nucleus contains protons and neutrons (together called nucleons). We describe a specific nucleus, or nuclide, by its mass number $A$ (protons + neutrons) and its atomic number $Z$ (protons), written $^{A}_{Z}\\text{X}$. For example, $^{14}_{6}\\text{C}$ has 6 protons and $14 - 6 = 8$ neutrons.",
              "zh": "普通化学重新排布电子；核化学则改变原子核本身。原子核含有质子和中子（合称核子）。我们用质量数 $A$（质子 + 中子）和原子序数 $Z$（质子）来描述一个特定的原子核（核素），记作 $^{A}_{Z}\\text{X}$。例如 $^{14}_{6}\\text{C}$ 有 6 个质子和 $14 - 6 = 8$ 个中子。"
            },
            {
              "type": "p",
              "en": "Protons repel each other because they carry the same positive charge, yet nuclei hold together thanks to the strong nuclear force acting between nucleons at very short range. Whether a nucleus is stable depends largely on its ratio of neutrons to protons. Nuclei with an unstable neutron-to-proton ratio, or that are simply too large (every element beyond bismuth, $Z = 83$, is unstable), are radioactive: they spontaneously emit particles or energy to become more stable.",
              "zh": "质子带同种正电荷会相互排斥，但原子核之所以能结合在一起，靠的是核子之间在极短距离内作用的强核力。原子核是否稳定，很大程度上取决于中子与质子之比。中子质子比不稳定、或体积太大的原子核（铋 $Z = 83$ 之后的每种元素都不稳定）具有放射性：它们自发地放出粒子或能量以变得更稳定。"
            },
            {
              "type": "h2",
              "en": "Types of Radioactive Decay",
              "zh": "放射性衰变的类型"
            },
            {
              "type": "p",
              "en": "There are three classic types of radiation, discovered by how they behave in an electric field and how deeply they penetrate matter.",
              "zh": "经典的辐射有三种，通过它们在电场中的行为和穿透物质的深度而被发现。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Alpha ($\\alpha$) decay: the nucleus emits an alpha particle, which is a helium nucleus $^{4}_{2}\\text{He}$ (2 protons, 2 neutrons). Alpha particles are heavy and slow, stopped by a sheet of paper. The nucleus loses 4 from its mass number and 2 from its atomic number.",
                  "zh": "阿尔法（$\\alpha$）衰变：原子核放出一个阿尔法粒子，即氦核 $^{4}_{2}\\text{He}$（2 质子、2 中子）。阿尔法粒子又重又慢，一张纸就能挡住。原子核的质量数减 4，原子序数减 2。"
                },
                {
                  "en": "Beta ($\\beta$) decay: a neutron converts into a proton and emits a fast electron, the beta particle $^{0}_{-1}e$. The mass number is unchanged, but the atomic number increases by 1. Beta particles penetrate more than alpha and are stopped by thin aluminum.",
                  "zh": "贝塔（$\\beta$）衰变：一个中子转变为一个质子并放出一个快速电子，即贝塔粒子 $^{0}_{-1}e$。质量数不变，但原子序数增加 1。贝塔粒子比阿尔法穿透力强，用薄铝片可挡住。"
                },
                {
                  "en": "Gamma ($\\gamma$) decay: the nucleus releases energy as a high-energy photon, $^{0}_{0}\\gamma$. Gamma rays have no mass and no charge, so they do not change $A$ or $Z$; they usually accompany other decays. They are very penetrating and need thick lead or concrete to stop.",
                  "zh": "伽马（$\\gamma$）衰变：原子核以高能光子 $^{0}_{0}\\gamma$ 的形式释放能量。伽马射线没有质量也没有电荷，因此不改变 $A$ 或 $Z$；它们通常伴随其他衰变发生。伽马射线穿透力极强，需要厚铅或混凝土才能挡住。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Writing and Balancing Nuclear Equations",
              "zh": "书写与配平核方程"
            },
            {
              "type": "p",
              "en": "A nuclear equation is balanced by conserving two quantities: the total mass number $A$ (top numbers) and the total atomic number $Z$ (bottom numbers) must each be equal on both sides. To find an unknown particle, make the sums match.",
              "zh": "核方程通过守恒两个量来配平：总质量数 $A$（上标数字）和总原子序数 $Z$（下标数字）在两边必须各自相等。要找出未知粒子，使两边的和相等即可。"
            },
            {
              "type": "math",
              "tex": "^{238}_{\\;92}\\text{U} \\rightarrow\\ ^{234}_{\\;90}\\text{Th} + \\,^{4}_{2}\\text{He}"
            },
            {
              "type": "p",
              "en": "Check: mass numbers $238 = 234 + 4$; atomic numbers $92 = 90 + 2$. Both balance, confirming an alpha particle was emitted.",
              "zh": "检验：质量数 $238 = 234 + 4$；原子序数 $92 = 90 + 2$。两者都平衡，确认放出了一个阿尔法粒子。"
            },
            {
              "type": "note",
              "en": "Common mistake: in beta decay the atomic number goes UP by 1 (a neutron becomes a proton), even though the beta particle is written with a $-1$ on the bottom. The $-1$ makes the charges balance: $Z_{\\text{parent}} = Z_{\\text{daughter}} + (-1)$, so the daughter has a larger $Z$.",
              "zh": "常见错误：在贝塔衰变中原子序数增加 1（一个中子变成质子），尽管贝塔粒子的下标写作 $-1$。这个 $-1$ 是为了让电荷平衡：$Z_{\\text{母核}} = Z_{\\text{子核}} + (-1)$，因此子核的 $Z$ 更大。"
            },
            {
              "type": "h2",
              "en": "Half-Life",
              "zh": "半衰期"
            },
            {
              "type": "p",
              "en": "Radioactive decay is random for any single nucleus, but a large sample decays at a steady, predictable pace. The half-life ($t_{1/2}$) is the time for half of the radioactive nuclei in a sample to decay. After each half-life, the amount remaining is cut in half: after $n$ half-lives, the fraction remaining is $\\left(\\tfrac{1}{2}\\right)^{n}$.",
              "zh": "放射性衰变对任何单个原子核来说是随机的，但大量样品会以稳定、可预测的节奏衰变。半衰期（$t_{1/2}$）是样品中一半放射性原子核衰变所需的时间。每过一个半衰期，剩余量减半：经过 $n$ 个半衰期后，剩余的比例为 $\\left(\\tfrac{1}{2}\\right)^{n}$。"
            },
            {
              "type": "math",
              "tex": "\\text{amount remaining} = \\text{initial amount} \\times \\left(\\tfrac{1}{2}\\right)^{n},\\qquad n = \\frac{\\text{total time}}{t_{1/2}}"
            },
            {
              "type": "h2",
              "en": "Fission, Fusion, and Nuclear Energy",
              "zh": "裂变、聚变与核能"
            },
            {
              "type": "p",
              "en": "The nucleus stores enormous energy. Two processes release it. Fission splits a heavy nucleus (such as $^{235}\\text{U}$) into smaller nuclei when it absorbs a neutron, releasing more neutrons that can trigger a chain reaction — this powers nuclear reactors and the atomic bomb. Fusion joins light nuclei (such as isotopes of hydrogen) into a heavier one, releasing even more energy per gram — this powers the Sun and stars. Fusion requires extreme temperatures and pressures, which is why it is hard to harness on Earth.",
              "zh": "原子核储存着巨大的能量。有两个过程能把它释放出来。裂变是重核（如 $^{235}\\text{U}$）吸收一个中子后分裂成较小的核，同时放出更多中子，可引发链式反应——它为核反应堆和原子弹提供能量。聚变是把轻核（如氢的同位素）结合成较重的核，每克释放的能量甚至更多——它为太阳和恒星提供能量。聚变需要极高的温度和压强，这就是它在地球上难以利用的原因。"
            },
            {
              "type": "h3",
              "en": "How Nuclear Reactions Differ from Chemical Reactions",
              "zh": "核反应与化学反应的区别"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Chemical reactions rearrange electrons and form/break bonds; nuclear reactions change the nucleus, so one element turns into a different element.",
                  "zh": "化学反应重排电子、形成或断开化学键；核反应改变原子核，因此一种元素会变成另一种元素。"
                },
                {
                  "en": "Chemical reactions conserve each element and the identity of atoms; nuclear reactions conserve mass number and atomic number but transmute atoms.",
                  "zh": "化学反应守恒每种元素和原子的种类；核反应守恒质量数和原子序数，但会使原子发生嬗变。"
                },
                {
                  "en": "Nuclear reactions release roughly a million times more energy per gram than chemical reactions, and their rate is unaffected by temperature, pressure, or catalysts.",
                  "zh": "核反应每克释放的能量约为化学反应的一百万倍，而且其速率不受温度、压强或催化剂影响。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Real Applications",
              "zh": "实际应用"
            },
            {
              "type": "p",
              "en": "Medicine uses radioactive isotopes for imaging (technetium-99m and PET scans reveal how organs function) and for treating cancer with targeted gamma radiation. Carbon-14 dating measures the tiny amount of radioactive $^{14}\\text{C}$ left in once-living material to estimate its age, using $^{14}\\text{C}$'s half-life of about 5730 years. Nuclear power plants use controlled fission to boil water into steam that spins turbines, generating electricity without producing carbon dioxide.",
              "zh": "医学利用放射性同位素进行成像（锝-99m 和 PET 扫描可显示器官的功能），并用定向的伽马辐射治疗癌症。碳-14 测年通过测量曾经有生命的物质中残留的微量放射性 $^{14}\\text{C}$ 来估算其年龄，利用 $^{14}\\text{C}$ 约 5730 年的半衰期。核电站利用受控裂变把水烧成蒸汽推动涡轮机发电，且不产生二氧化碳。"
            },
            {
              "type": "note",
              "en": "Exam tip: to identify a missing particle in a nuclear equation, balance the top numbers (mass) and the bottom numbers (charge) separately. A leftover of $A=4, Z=2$ is an alpha particle; $A=0, Z=-1$ is a beta particle; $A=0, Z=0$ is a gamma ray.",
              "zh": "考试提示：要在核方程中找出缺失的粒子，分别配平上标数字（质量）和下标数字（电荷）。若差额为 $A=4, Z=2$，就是阿尔法粒子；$A=0, Z=-1$ 是贝塔粒子；$A=0, Z=0$ 是伽马射线。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Balancing a Nuclear Equation",
                "zh": "例题 1：配平核方程"
              },
              "problem": {
                "en": "Carbon-14 undergoes beta decay. Write the balanced nuclear equation and identify the daughter element. ($^{14}_{6}\\text{C} \\rightarrow\\ ?\\ + \\,^{0}_{-1}e$)",
                "zh": "碳-14 发生贝塔衰变。写出配平的核方程并指出子体元素。（$^{14}_{6}\\text{C} \\rightarrow\\ ?\\ + \\,^{0}_{-1}e$）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Conserve mass number: $14 = A + 0$, so $A = 14$. Conserve atomic number: $6 = Z + (-1)$, so $Z = 7$. Element 7 is nitrogen.",
                  "zh": "守恒质量数：$14 = A + 0$，所以 $A = 14$。守恒原子序数：$6 = Z + (-1)$，所以 $Z = 7$。7 号元素是氮。"
                },
                {
                  "type": "math",
                  "tex": "^{14}_{\\;6}\\text{C} \\rightarrow\\ ^{14}_{\\;7}\\text{N} + \\,^{0}_{-1}e"
                },
                {
                  "type": "p",
                  "en": "Notice the atomic number increased from 6 to 7: a neutron became a proton, which is the signature of beta decay.",
                  "zh": "注意原子序数从 6 增加到 7：一个中子变成了质子，这正是贝塔衰变的标志。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Half-Life Calculation",
                "zh": "例题 2：半衰期计算"
              },
              "problem": {
                "en": "Iodine-131 has a half-life of 8 days. A hospital receives a $200.\\ \\text{mg}$ sample. How many milligrams of iodine-131 remain after 24 days?",
                "zh": "碘-131 的半衰期为 8 天。某医院收到一份 $200.\\ \\text{mg}$ 的样品。24 天后还剩多少毫克碘-131？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find the number of half-lives: $n = \\dfrac{24\\ \\text{days}}{8\\ \\text{days}} = 3$.",
                  "zh": "先求半衰期的个数：$n = \\dfrac{24\\ \\text{天}}{8\\ \\text{天}} = 3$。"
                },
                {
                  "type": "math",
                  "tex": "200.\\ \\text{mg} \\times \\left(\\tfrac{1}{2}\\right)^{3} = 200.\\ \\text{mg} \\times \\tfrac{1}{8} = 25.0\\ \\text{mg}"
                },
                {
                  "type": "p",
                  "en": "Check by halving three times: $200 \\to 100 \\to 50 \\to 25\\ \\text{mg}$. So $25.0\\ \\text{mg}$ remains.",
                  "zh": "用连续减半来检验：$200 \\to 100 \\to 50 \\to 25\\ \\text{mg}$。所以剩下 $25.0\\ \\text{mg}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "How does a nuclear reaction fundamentally differ from a chemical reaction?",
                "zh": "核反应与化学反应的根本区别是什么？"
              },
              "choices": [
                "A nuclear reaction only rearranges electrons",
                "A nuclear reaction always conserves the identity of every atom",
                "A nuclear reaction changes the nucleus, so one element becomes a different element",
                "A nuclear reaction is sped up by adding a catalyst"
              ],
              "answer": 2,
              "explanation": {
                "en": "Nuclear reactions alter the nucleus itself, transmuting one element into another and releasing about a million times more energy per gram. Rearranging electrons (choice 1) describes a chemical reaction, and catalysts/temperature do not affect nuclear rates.",
                "zh": "核反应改变原子核本身，使一种元素嬗变为另一种，并且每克释放的能量约为化学反应的一百万倍。重排电子（选项 1）描述的是化学反应，而催化剂/温度不影响核反应速率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When a nucleus emits an alpha particle, how do its mass number and atomic number change?",
                "zh": "当原子核放出一个阿尔法粒子时，它的质量数和原子序数如何变化？"
              },
              "choices": [
                "Mass number decreases by 2, atomic number decreases by 2",
                "Mass number decreases by 4, atomic number decreases by 2",
                "Mass number unchanged, atomic number increases by 1",
                "Mass number decreases by 4, atomic number decreases by 4"
              ],
              "answer": 1,
              "explanation": {
                "en": "An alpha particle is $^{4}_{2}\\text{He}$, so the nucleus loses 4 from its mass number and 2 from its atomic number. The tempting error is matching the number 4 to both changes (choice 4), but the atomic number only drops by 2.",
                "zh": "阿尔法粒子是 $^{4}_{2}\\text{He}$，所以原子核质量数减 4、原子序数减 2。诱人的错误是把 4 同时用于两个变化（选项 4），但原子序数只减 2。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the equation $^{222}_{\\;86}\\text{Rn} \\rightarrow\\ ^{218}_{\\;84}\\text{Po} + ?$, what is the atomic number ($Z$) of the missing particle? Give an integer.",
                "zh": "在方程 $^{222}_{\\;86}\\text{Rn} \\rightarrow\\ ^{218}_{\\;84}\\text{Po} + ?$ 中，缺失粒子的原子序数（$Z$）是多少？填一个整数。"
              },
              "answer": "2",
              "accept": [
                "+2"
              ],
              "explanation": {
                "en": "Balance atomic numbers: $86 = 84 + Z$, so $Z = 2$. (The mass number is $222 - 218 = 4$, so the particle is an alpha particle, $^{4}_{2}\\text{He}$.)",
                "zh": "配平原子序数：$86 = 84 + Z$，所以 $Z = 2$。（质量数为 $222 - 218 = 4$，所以该粒子是阿尔法粒子 $^{4}_{2}\\text{He}$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In beta decay, why does the atomic number of the nucleus increase by 1?",
                "zh": "在贝塔衰变中，为什么原子核的原子序数增加 1？"
              },
              "choices": [
                "A proton is captured from outside the nucleus",
                "A neutron converts into a proton and emits an electron",
                "The nucleus gains an alpha particle",
                "A proton converts into a neutron"
              ],
              "answer": 1,
              "explanation": {
                "en": "In beta decay a neutron turns into a proton (which stays in the nucleus) while ejecting a fast electron. Gaining a proton raises $Z$ by 1 while the mass number stays the same. Choice 4 describes the opposite change.",
                "zh": "在贝塔衰变中，一个中子转变成一个质子（留在核内）并射出一个快速电子。多一个质子使 $Z$ 增加 1，而质量数不变。选项 4 描述的是相反的变化。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A radioactive isotope has a half-life of 5 years. Starting from $80\\ \\text{g}$, how many grams remain after 15 years? Give your answer in grams (integer).",
                "zh": "某放射性同位素的半衰期为 5 年。从 $80\\ \\text{g}$ 开始，15 年后还剩多少克？以克为单位作答（整数）。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "$n = 15/5 = 3$ half-lives. Halving three times: $80 \\to 40 \\to 20 \\to 10\\ \\text{g}$. Equivalently, $80 \\times (1/2)^3 = 80/8 = 10\\ \\text{g}$.",
                "zh": "$n = 15/5 = 3$ 个半衰期。连续减半三次：$80 \\to 40 \\to 20 \\to 10\\ \\text{g}$。等价地，$80 \\times (1/2)^3 = 80/8 = 10\\ \\text{g}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A sample decays until only $1/8$ of the original amount remains. How many half-lives have passed? Give an integer.",
                "zh": "某样品衰变到只剩原来量的 $1/8$。经过了多少个半衰期？填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Each half-life leaves half: $1/2, 1/4, 1/8$ after 1, 2, and 3 half-lives. Since $(1/2)^3 = 1/8$, three half-lives have passed.",
                "zh": "每个半衰期剩一半：经过 1、2、3 个半衰期后分别剩 $1/2, 1/4, 1/8$。由于 $(1/2)^3 = 1/8$，经过了 3 个半衰期。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly contrasts nuclear fission and fusion?",
                "zh": "关于核裂变与核聚变的对比，哪种说法正确？"
              },
              "choices": [
                "Fission joins light nuclei; fusion splits a heavy nucleus",
                "Both fission and fusion split heavy nuclei",
                "Fusion occurs easily at room temperature; fission needs extreme heat",
                "Fission splits a heavy nucleus; fusion joins light nuclei, and fusion powers the Sun"
              ],
              "answer": 3,
              "explanation": {
                "en": "Fission splits a heavy nucleus (used in reactors); fusion combines light nuclei and powers the Sun, but it needs extreme temperature and pressure. Choice 3 reverses which process is hard to achieve on Earth.",
                "zh": "裂变是重核分裂（用于反应堆）；聚变是轻核结合，为太阳提供能量，但需要极高的温度和压强。选项 3 把哪个过程在地球上难以实现弄反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Carbon-14 dating works because the amount of $^{14}\\text{C}$ in a once-living object decreases predictably after it dies. Which property makes this possible?",
                "zh": "碳-14 测年之所以有效，是因为曾经有生命的物体死亡后其中 $^{14}\\text{C}$ 的量会可预测地减少。哪个性质使这成为可能？"
              },
              "choices": [
                "Its constant, known half-life of about 5730 years",
                "Its ability to speed up when heated",
                "The fact that $^{14}\\text{C}$ never decays",
                "That $^{14}\\text{C}$ turns back into living tissue"
              ],
              "answer": 0,
              "explanation": {
                "en": "Because $^{14}\\text{C}$ has a fixed half-life (about 5730 years) unaffected by temperature or environment, the fraction remaining acts as a reliable clock. It does decay (ruling out choice 3), and nuclear decay rates are not changed by heating.",
                "zh": "由于 $^{14}\\text{C}$ 有固定的半衰期（约 5730 年），且不受温度或环境影响，剩余的比例就成了可靠的“时钟”。它确实会衰变（排除选项 3），而且核衰变速率不因加热而改变。"
              }
            }
          ]
        }
      ]
    }
  ]
}
