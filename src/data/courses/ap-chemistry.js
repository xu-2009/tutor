export default {
  "id": "ap-chemistry",
  "title": "AP Chemistry",
  "titleZh": "AP 化学",
  "subject": "science",
  "level": "AP",
  "description": "The complete AP Chemistry course following the official College Board nine-unit framework: atomic structure, bonding, properties of matter, reactions, kinetics, thermochemistry, equilibrium, acids and bases, and electrochemistry.",
  "descriptionZh": "完整的 AP 化学课程，按照 College Board 官方九个单元的框架编排：原子结构、化学键、物质性质、化学反应、动力学、热化学、化学平衡、酸碱以及电化学。",
  "units": [
    {
      "id": "unit-1-atomic-structure",
      "title": "Unit 1: Atomic Structure and Properties",
      "titleZh": "第一单元：原子结构与性质",
      "lessons": [
        {
          "id": "moles-molar-mass",
          "title": "Moles and Molar Mass",
          "titleZh": "摩尔与摩尔质量",
          "content": [
            {
              "type": "h2",
              "en": "The Mole: Chemistry’s Counting Unit",
              "zh": "摩尔：化学的计数单位"
            },
            {
              "type": "p",
              "en": "Atoms are far too small to count one by one, so chemists count them in groups called moles. One mole contains Avogadro’s number of particles, $N_A = 6.022 \\times 10^{23}$. Just as a dozen always means 12, a mole always means $6.022 \\times 10^{23}$ particles—whether those particles are atoms, molecules, ions, or electrons.",
              "zh": "原子太小无法逐个计数，因此化学家用「摩尔」这个单位成组地计数。1 摩尔含有阿伏伽德罗数个粒子，$N_A = 6.022 \\times 10^{23}$。就像「一打」总是 12 个一样，1 摩尔总是 $6.022 \\times 10^{23}$ 个粒子——无论是原子、分子、离子还是电子。"
            },
            {
              "type": "h3",
              "en": "Molar Mass",
              "zh": "摩尔质量"
            },
            {
              "type": "p",
              "en": "The molar mass ($M$) of a substance is the mass of one mole of it, in grams per mole (g/mol). For an element, the molar mass in g/mol equals the atomic mass listed on the periodic table. For a compound, add up the molar masses of all atoms in the formula. Molar mass is the bridge between mass (which we can weigh) and moles (which we count).",
              "zh": "物质的摩尔质量（$M$）是 1 摩尔该物质的质量，单位为克每摩尔（g/mol）。对于元素，其摩尔质量（g/mol）等于周期表上的原子质量。对于化合物，将化学式中所有原子的摩尔质量相加即可。摩尔质量是连接质量（可称量）与摩尔（可计数）之间的桥梁。"
            },
            {
              "type": "math",
              "tex": "n = \\frac{m}{M} \\qquad N = n \\times N_A"
            },
            {
              "type": "note",
              "en": "AP tip: Always carry units through your calculation and cancel them explicitly (dimensional analysis). If your units don’t simplify to what the question asks for, you set up the problem wrong. This alone catches most stoichiometry mistakes.",
              "zh": "AP 提示：计算时始终带着单位并明确约分（量纲分析）。如果单位化简后不是题目要求的，说明式子列错了。仅此一点就能避免大多数化学计量错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Grams to Moles",
                "zh": "例题 1：克换算摩尔"
              },
              "problem": {
                "en": "How many moles are in $36.0\\ \\text{g}$ of water, $\\text{H}_2\\text{O}$?",
                "zh": "$36.0\\ \\text{g}$ 水 $\\text{H}_2\\text{O}$ 中含有多少摩尔？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find the molar mass of $\\text{H}_2\\text{O}$: two H atoms ($2 \\times 1.008$) plus one O ($16.00$) gives $18.02\\ \\text{g/mol}$.",
                  "zh": "先求 $\\text{H}_2\\text{O}$ 的摩尔质量：两个 H（$2 \\times 1.008$）加一个 O（$16.00$）得 $18.02\\ \\text{g/mol}$。"
                },
                {
                  "type": "math",
                  "tex": "n = \\frac{36.0\\ \\text{g}}{18.02\\ \\text{g/mol}} = 2.00\\ \\text{mol}"
                },
                {
                  "type": "p",
                  "en": "So $36.0\\ \\text{g}$ of water is $2.00$ moles.",
                  "zh": "因此 $36.0\\ \\text{g}$ 水是 $2.00$ 摩尔。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Counting Particles",
                "zh": "例题 2：计算粒子数"
              },
              "problem": {
                "en": "How many oxygen atoms are in $2.00$ mol of $\\text{CO}_2$?",
                "zh": "$2.00$ mol $\\text{CO}_2$ 中含有多少个氧原子？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Each $\\text{CO}_2$ molecule has 2 oxygen atoms, so first find molecules, then multiply by 2.",
                  "zh": "每个 $\\text{CO}_2$ 分子有 2 个氧原子，先求分子数，再乘以 2。"
                },
                {
                  "type": "math",
                  "tex": "2.00\\ \\text{mol} \\times 6.022 \\times 10^{23} = 1.204 \\times 10^{24}\\ \\text{molecules}"
                },
                {
                  "type": "math",
                  "tex": "1.204 \\times 10^{24} \\times 2 = 2.41 \\times 10^{24}\\ \\text{O atoms}"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Percent Composition",
              "zh": "质量百分组成"
            },
            {
              "type": "p",
              "en": "The percent by mass of an element in a compound is the mass contributed by that element divided by the total molar mass, times 100%. This connects to finding empirical formulas from experimental data, a common AP task.",
              "zh": "化合物中某元素的质量百分比等于该元素贡献的质量除以总摩尔质量，再乘以 100%。这与由实验数据求经验式相关，是 AP 常见考点。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the molar mass of $\\text{NaCl}$? (Na = 22.99, Cl = 35.45)",
                "zh": "$\\text{NaCl}$ 的摩尔质量是多少？（Na = 22.99，Cl = 35.45）"
              },
              "choices": [
                "$58.44\\ \\text{g/mol}$",
                "$35.45\\ \\text{g/mol}$",
                "$22.99\\ \\text{g/mol}$",
                "$74.55\\ \\text{g/mol}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Add the molar masses: $22.99 + 35.45 = 58.44\\ \\text{g/mol}$.",
                "zh": "将摩尔质量相加：$22.99 + 35.45 = 58.44\\ \\text{g/mol}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many moles are in $44.0\\ \\text{g}$ of $\\text{CO}_2$ ($M = 44.0\\ \\text{g/mol}$)? Give a number.",
                "zh": "$44.0\\ \\text{g}$ $\\text{CO}_2$（$M = 44.0\\ \\text{g/mol}$）含多少摩尔？给出数字。"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "1.00"
              ],
              "explanation": {
                "en": "$n = 44.0 / 44.0 = 1.00\\ \\text{mol}$.",
                "zh": "$n = 44.0 / 44.0 = 1.00\\ \\text{mol}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many atoms are in $1.00$ mol of helium?",
                "zh": "$1.00$ mol 氦含有多少个原子？"
              },
              "choices": [
                "$6.022 \\times 10^{23}$",
                "$1.204 \\times 10^{24}$",
                "$4.00$",
                "$3.011 \\times 10^{23}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "One mole of any substance contains Avogadro’s number, $6.022 \\times 10^{23}$, of its particles.",
                "zh": "任何物质 1 摩尔都含有阿伏伽德罗数 $6.022 \\times 10^{23}$ 个粒子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the mass, in grams, of $0.500$ mol of $\\text{H}_2\\text{O}$ ($M = 18.0$)? Give a number.",
                "zh": "$0.500$ mol $\\text{H}_2\\text{O}$（$M = 18.0$）的质量是多少克？给出数字。"
              },
              "answer": "9",
              "accept": [
                "9.0",
                "9.00"
              ],
              "explanation": {
                "en": "$m = n \\times M = 0.500 \\times 18.0 = 9.00\\ \\text{g}$.",
                "zh": "$m = n \\times M = 0.500 \\times 18.0 = 9.00\\ \\text{g}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which sample contains the greatest number of atoms?",
                "zh": "下列哪个样品含原子数最多？"
              },
              "choices": [
                "$1\\ \\text{mol}\\ \\text{He}$",
                "$1\\ \\text{mol}\\ \\text{O}_2$",
                "$1\\ \\text{mol}\\ \\text{CH}_4$",
                "$1\\ \\text{mol}\\ \\text{H}_2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\text{CH}_4$ has 5 atoms per molecule (1 C + 4 H), so $1$ mol contains $5\\,N_A$ atoms—more than He (1), $\\text{O}_2$ (2), or $\\text{H}_2$ (2).",
                "zh": "$\\text{CH}_4$ 每分子含 5 个原子（1 C + 4 H），故 1 mol 含 $5\\,N_A$ 个原子，多于 He（1）、$\\text{O}_2$（2）、$\\text{H}_2$（2）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A compound is $40.0\\%$ carbon by mass. In $100\\ \\text{g}$ of it, how many grams are carbon? Give a number.",
                "zh": "某化合物碳的质量分数为 $40.0\\%$。$100\\ \\text{g}$ 该化合物中碳有多少克？给出数字。"
              },
              "answer": "40",
              "accept": [
                "40.0"
              ],
              "explanation": {
                "en": "Percent by mass means $40.0\\ \\text{g}$ of carbon per $100\\ \\text{g}$ of compound.",
                "zh": "质量百分比意味着每 $100\\ \\text{g}$ 化合物含 $40.0\\ \\text{g}$ 碳。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many moles of oxygen atoms are in $2.0$ mol of $\\text{Al}_2(\\text{SO}_4)_3$?",
                "zh": "$2.0$ mol $\\text{Al}_2(\\text{SO}_4)_3$ 中含多少摩尔氧原子？"
              },
              "choices": [
                "$4\\ \\text{mol}$",
                "$12\\ \\text{mol}$",
                "$24\\ \\text{mol}$",
                "$6\\ \\text{mol}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Each formula unit has $4 \\times 3 = 12$ O atoms; $2.0\\ \\text{mol} \\times 12 = 24\\ \\text{mol}$ O.",
                "zh": "每个式量单位含 $4 \\times 3 = 12$ 个 O 原子；$2.0\\ \\text{mol} \\times 12 = 24\\ \\text{mol}$ O。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A hydrocarbon contains $0.50$ mol C and $1.0$ mol H. What is its empirical formula? (Write like CH4.)",
                "zh": "某碳氢化合物含 $0.50$ mol C 和 $1.0$ mol H。其经验式是什么？（写成 CH4 形式。）"
              },
              "answer": "CH2",
              "accept": [
                "ch2"
              ],
              "explanation": {
                "en": "Divide by the smallest: C = 1, H = 2, giving $\\text{CH}_2$.",
                "zh": "同除以最小值：C = 1，H = 2，得 $\\text{CH}_2$。"
              }
            }
          ]
        },
        {
          "id": "mass-spectroscopy",
          "title": "Mass Spectroscopy and Isotopes",
          "titleZh": "质谱与同位素",
          "content": [
            {
              "type": "h2",
              "en": "Isotopes and Average Atomic Mass",
              "zh": "同位素与平均原子质量"
            },
            {
              "type": "p",
              "en": "Atoms of the same element always have the same number of protons but can differ in the number of neutrons. These variants are called isotopes. Because they have different numbers of neutrons, isotopes have different masses but nearly identical chemical behavior. The atomic mass shown on the periodic table is a weighted average of all naturally occurring isotopes of that element.",
              "zh": "同种元素的原子质子数总是相同，但中子数可以不同。这些变体称为同位素。由于中子数不同，同位素质量不同，但化学性质几乎完全相同。周期表上的原子质量是该元素所有天然同位素的加权平均值。"
            },
            {
              "type": "p",
              "en": "To compute the average atomic mass, multiply each isotope’s mass by its fractional abundance (percent divided by 100) and sum the results.",
              "zh": "计算平均原子质量时，将每种同位素的质量乘以其丰度分数（百分比除以 100），再求和。"
            },
            {
              "type": "math",
              "tex": "\\bar{m} = \\sum_i (\\text{mass}_i \\times \\text{fraction}_i)"
            },
            {
              "type": "h3",
              "en": "The Mass Spectrometer",
              "zh": "质谱仪"
            },
            {
              "type": "p",
              "en": "A mass spectrometer ionizes a sample, accelerates the ions through a magnetic field, and separates them by mass-to-charge ratio ($m/z$). The output is a spectrum: peaks at each isotope’s mass, with peak heights proportional to relative abundance. Reading a mass spectrum lets you identify isotopes and calculate the average atomic mass directly.",
              "zh": "质谱仪将样品电离，使离子在磁场中加速，并按质荷比（$m/z$）分离。输出是一张谱图：每种同位素的质量处有峰，峰高与相对丰度成正比。读懂质谱可直接识别同位素并计算平均原子质量。"
            },
            {
              "type": "note",
              "en": "Common mistake: students forget to convert percent abundance to a decimal fraction. $75.8\\%$ must become $0.758$ before multiplying. Also remember the fractions must add to 1 (or the percents to 100).",
              "zh": "常见错误：忘记把百分丰度转换成小数。$75.8\\%$ 相乘前必须写成 $0.758$。还要记住所有分数之和为 1（或百分比之和为 100）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Average Atomic Mass of Chlorine",
                "zh": "例题 1：氯的平均原子质量"
              },
              "problem": {
                "en": "Chlorine has two isotopes: $^{35}\\text{Cl}$ (mass $34.97$, abundance $75.8\\%$) and $^{37}\\text{Cl}$ (mass $36.97$, abundance $24.2\\%$). Find the average atomic mass.",
                "zh": "氯有两种同位素：$^{35}\\text{Cl}$（质量 $34.97$，丰度 $75.8\\%$）与 $^{37}\\text{Cl}$（质量 $36.97$，丰度 $24.2\\%$）。求平均原子质量。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\bar{m} = (34.97)(0.758) + (36.97)(0.242)"
                },
                {
                  "type": "math",
                  "tex": "\\bar{m} = 26.51 + 8.95 = 35.46\\ \\text{amu}"
                },
                {
                  "type": "p",
                  "en": "This matches the $35.45$ on the periodic table—the small difference is rounding.",
                  "zh": "这与周期表上的 $35.45$ 相符，微小差异来自四舍五入。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Finding an Unknown Abundance",
                "zh": "例题 2：求未知丰度"
              },
              "problem": {
                "en": "Boron ($\\bar{m} = 10.81$) has isotopes $^{10}\\text{B}$ (mass $10.01$) and $^{11}\\text{B}$ (mass $11.01$). What fraction is $^{11}\\text{B}$?",
                "zh": "硼（$\\bar{m} = 10.81$）有同位素 $^{10}\\text{B}$（质量 $10.01$）与 $^{11}\\text{B}$（质量 $11.01$）。$^{11}\\text{B}$ 的丰度分数是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $x$ be the fraction of $^{11}\\text{B}$; then $^{10}\\text{B}$ is $1-x$.",
                  "zh": "设 $^{11}\\text{B}$ 分数为 $x$，则 $^{10}\\text{B}$ 为 $1-x$。"
                },
                {
                  "type": "math",
                  "tex": "10.01(1-x) + 11.01x = 10.81"
                },
                {
                  "type": "math",
                  "tex": "10.01 + 1.00x = 10.81 \\Rightarrow x = 0.80"
                },
                {
                  "type": "p",
                  "en": "So $^{11}\\text{B}$ makes up about $80\\%$ of natural boron.",
                  "zh": "故 $^{11}\\text{B}$ 约占天然硼的 $80\\%$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Two atoms are isotopes of the same element. They must have the same number of:",
                "zh": "两个原子是同种元素的同位素。它们的下列哪项必然相同："
              },
              "choices": [
                "protons",
                "neutrons",
                "nucleons",
                "nothing"
              ],
              "answer": 0,
              "explanation": {
                "en": "Isotopes share the same number of protons (same element) but differ in neutrons.",
                "zh": "同位素质子数相同（同种元素），但中子数不同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An element has isotopes of mass $20$ ($90\\%$) and $22$ ($10\\%$). What is its average atomic mass? Give a number.",
                "zh": "某元素同位素质量为 $20$（$90\\%$）和 $22$（$10\\%$）。平均原子质量是多少？给出数字。"
              },
              "answer": "20.2",
              "accept": [
                "20.20"
              ],
              "explanation": {
                "en": "$(20)(0.90) + (22)(0.10) = 18.0 + 2.2 = 20.2$.",
                "zh": "$(20)(0.90) + (22)(0.10) = 18.0 + 2.2 = 20.2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a mass spectrum, the height of each peak is proportional to:",
                "zh": "在质谱图中，每个峰的高度与什么成正比："
              },
              "choices": [
                "the relative abundance of that isotope",
                "the atomic number",
                "the number of protons",
                "the ionization energy"
              ],
              "answer": 0,
              "explanation": {
                "en": "Peak height (intensity) reflects how abundant that isotope is in the sample.",
                "zh": "峰高（强度）反映该同位素在样品中的丰度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The isotope $^{24}\\text{Mg}$ has 12 protons. How many neutrons does it have?",
                "zh": "同位素 $^{24}\\text{Mg}$ 有 12 个质子。它有多少个中子？"
              },
              "choices": [
                "12",
                "24",
                "36",
                "0"
              ],
              "answer": 0,
              "explanation": {
                "en": "Neutrons = mass number − protons = $24 - 12 = 12$.",
                "zh": "中子数 = 质量数 − 质子数 = $24 - 12 = 12$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Copper has isotopes $^{63}\\text{Cu}$ (mass $62.93$) and $^{65}\\text{Cu}$ (mass $64.93$). If $^{63}\\text{Cu}$ is $69\\%$ abundant, is the average mass closer to 63 or 65? Answer 63 or 65.",
                "zh": "铜有同位素 $^{63}\\text{Cu}$（质量 $62.93$）与 $^{65}\\text{Cu}$（质量 $64.93$）。若 $^{63}\\text{Cu}$ 丰度为 $69\\%$，平均质量更接近 63 还是 65？回答 63 或 65。"
              },
              "answer": "63",
              "accept": [
                "63.0"
              ],
              "explanation": {
                "en": "The weighted average is pulled toward the more abundant isotope, $^{63}\\text{Cu}$.",
                "zh": "加权平均值偏向丰度更高的同位素 $^{63}\\text{Cu}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Element X ($\\bar{m} = 63.5$) has isotopes of mass 63 and 65. What fraction is mass-63? Give a decimal.",
                "zh": "元素 X（$\\bar{m} = 63.5$）有质量 63 和 65 的同位素。质量为 63 的丰度分数是多少？给出小数。"
              },
              "answer": "0.75",
              "accept": [
                ".75",
                "0.750"
              ],
              "explanation": {
                "en": "$63x + 65(1-x) = 63.5 \\Rightarrow -2x = -1.5 \\Rightarrow x = 0.75$.",
                "zh": "$63x + 65(1-x) = 63.5 \\Rightarrow -2x = -1.5 \\Rightarrow x = 0.75$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why do isotopes of an element have nearly identical chemical properties?",
                "zh": "为什么同种元素的同位素化学性质几乎相同？"
              },
              "choices": [
                "They have the same number and arrangement of electrons",
                "They have the same mass",
                "They have the same number of neutrons",
                "They occupy the same place in the nucleus"
              ],
              "answer": 0,
              "explanation": {
                "en": "Chemistry is governed by electrons; isotopes have the same electron configuration, so they react the same way.",
                "zh": "化学性质由电子决定；同位素电子排布相同，故反应方式相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A spectrum shows peaks only at $m/z = 20$ (abundance 100%). What is the average atomic mass? Give a number.",
                "zh": "某谱图仅在 $m/z = 20$ 处有峰（丰度 100%）。平均原子质量是多少？给出数字。"
              },
              "answer": "20",
              "accept": [
                "20.0"
              ],
              "explanation": {
                "en": "With a single isotope at 100% abundance, the average equals that isotope’s mass, 20.",
                "zh": "只有一种同位素且丰度 100% 时，平均值等于该同位素质量 20。"
              }
            }
          ]
        },
        {
          "id": "electron-config-trends",
          "title": "Electron Configuration and Periodic Trends",
          "titleZh": "电子排布与周期性趋势",
          "content": [
            {
              "type": "h2",
              "en": "Electron Configuration",
              "zh": "电子排布"
            },
            {
              "type": "p",
              "en": "Electrons occupy orbitals in order of increasing energy, following three rules. The Aufbau principle says fill lowest-energy orbitals first. The Pauli exclusion principle says each orbital holds at most two electrons with opposite spins. Hund’s rule says electrons fill degenerate orbitals singly before pairing. Writing a configuration like $1s^2\\,2s^2\\,2p^6$ tells you exactly where every electron lives.",
              "zh": "电子按能量递增顺序填入轨道，遵循三条规则。构造原理（Aufbau）：先填能量最低的轨道。泡利不相容原理：每个轨道最多容纳两个自旋相反的电子。洪特规则：电子先单独占据能量相同的轨道，再配对。像 $1s^2\\,2s^2\\,2p^6$ 这样的排布式精确说明每个电子的位置。"
            },
            {
              "type": "math",
              "tex": "\\text{Fe:}\\quad 1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^6"
            },
            {
              "type": "p",
              "en": "The outermost (valence) electrons determine chemical behavior. Core electrons can be abbreviated with the previous noble gas: iron is $[\\text{Ar}]\\,4s^2\\,3d^6$.",
              "zh": "最外层（价）电子决定化学性质。内层电子可用前一个稀有气体缩写：铁为 $[\\text{Ar}]\\,4s^2\\,3d^6$。"
            },
            {
              "type": "h3",
              "en": "Coulomb’s Law and Effective Nuclear Charge",
              "zh": "库仑定律与有效核电荷"
            },
            {
              "type": "p",
              "en": "Periodic trends all trace back to Coulomb’s law: the attraction between the nucleus and an electron increases with nuclear charge and decreases with distance. Inner electrons shield outer electrons from the full nuclear charge, so an outer electron feels a smaller effective nuclear charge, $Z_{\\text{eff}}$. Across a period $Z_{\\text{eff}}$ rises; down a group the outer electrons are farther out.",
              "zh": "所有周期性趋势都可追溯到库仑定律：原子核与电子间的吸引力随核电荷增大、随距离增大而减小。内层电子屏蔽外层电子，使外层电子感受到较小的有效核电荷 $Z_{\\text{eff}}$。同周期从左到右 $Z_{\\text{eff}}$ 增大；同族从上到下外层电子离核更远。"
            },
            {
              "type": "note",
              "en": "AP tip: Never just state a trend—explain it with Coulomb’s law. On free-response, credit comes from reasoning about $Z_{\\text{eff}}$ and distance, not from naming the trend.",
              "zh": "AP 提示：不要只陈述趋势，要用库仑定律解释。在简答题中，得分点来自对 $Z_{\\text{eff}}$ 和距离的推理，而非仅说出趋势名称。"
            },
            {
              "type": "h3",
              "en": "Key Trends",
              "zh": "主要趋势"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Atomic radius decreases across a period (higher $Z_{\\text{eff}}$) and increases down a group (more shells).",
                  "zh": "原子半径同周期从左到右减小（$Z_{\\text{eff}}$ 增大），同族从上到下增大（电子层增多）。"
                },
                {
                  "en": "Ionization energy increases across a period and decreases down a group.",
                  "zh": "电离能同周期增大，同族减小。"
                },
                {
                  "en": "Electronegativity follows ionization energy: highest at the top right (excluding noble gases).",
                  "zh": "电负性与电离能趋势一致：在右上角最大（不含稀有气体）。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Configuration of an Ion",
                "zh": "例题 1：离子的电子排布"
              },
              "problem": {
                "en": "Write the electron configuration of $\\text{Ca}^{2+}$ (Ca has 20 electrons).",
                "zh": "写出 $\\text{Ca}^{2+}$ 的电子排布式（Ca 有 20 个电子）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Neutral Ca is $[\\text{Ar}]\\,4s^2$. Removing two electrons takes both $4s$ electrons.",
                  "zh": "中性 Ca 为 $[\\text{Ar}]\\,4s^2$。失去两个电子即去掉两个 $4s$ 电子。"
                },
                {
                  "type": "math",
                  "tex": "\\text{Ca}^{2+}:\\ 1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6 = [\\text{Ar}]"
                },
                {
                  "type": "p",
                  "en": "The ion is isoelectronic with argon.",
                  "zh": "该离子与氩等电子。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Comparing Radii",
                "zh": "例题 2：比较半径"
              },
              "problem": {
                "en": "Which is larger, Na or Mg? Explain using Coulomb’s law.",
                "zh": "Na 和 Mg 哪个更大？用库仑定律解释。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Na and Mg are in the same period, but Mg has one more proton, giving it a higher $Z_{\\text{eff}}$.",
                  "zh": "Na 和 Mg 同周期，但 Mg 多一个质子，$Z_{\\text{eff}}$ 更大。"
                },
                {
                  "type": "p",
                  "en": "The greater nuclear attraction pulls Mg’s electrons closer, so Na is the larger atom.",
                  "zh": "更强的核吸引力把 Mg 的电子拉得更近，故 Na 是更大的原子。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the ground-state electron configuration of oxygen (8 electrons)?",
                "zh": "氧（8 个电子）的基态电子排布式是什么？"
              },
              "choices": [
                "$1s^2\\,2s^2\\,2p^4$",
                "$1s^2\\,2s^2\\,2p^6$",
                "$1s^2\\,2s^4\\,2p^2$",
                "$1s^2\\,2p^6$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Fill $1s^2$, $2s^2$, then place the remaining 4 electrons in $2p$: $2p^4$.",
                "zh": "先填 $1s^2$、$2s^2$，剩余 4 个电子填入 $2p$：$2p^4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which atom has the largest atomic radius?",
                "zh": "下列哪个原子半径最大？"
              },
              "choices": [
                "K",
                "Na",
                "Li",
                "H"
              ],
              "answer": 0,
              "explanation": {
                "en": "All are Group 1; radius increases down a group, so K (period 4) is largest.",
                "zh": "均为第 1 族；半径同族从上到下增大，故 K（第 4 周期）最大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Ionization energy generally increases:",
                "zh": "电离能通常沿什么方向增大："
              },
              "choices": [
                "left to right across a period",
                "right to left across a period",
                "down a group",
                "in no predictable pattern"
              ],
              "answer": 0,
              "explanation": {
                "en": "Higher $Z_{\\text{eff}}$ across a period holds electrons more tightly, raising ionization energy.",
                "zh": "同周期 $Z_{\\text{eff}}$ 增大，电子被束缚更紧，电离能升高。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many valence electrons does nitrogen (Group 15) have? Give a number.",
                "zh": "氮（第 15 族）有多少个价电子？给出数字。"
              },
              "answer": "5",
              "accept": [
                "five"
              ],
              "explanation": {
                "en": "Group 15 elements have 5 valence electrons ($2s^2\\,2p^3$).",
                "zh": "第 15 族元素有 5 个价电子（$2s^2\\,2p^3$）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which principle explains why electrons occupy separate $2p$ orbitals before pairing?",
                "zh": "哪条规则解释了电子先单独占据不同 $2p$ 轨道再配对？"
              },
              "choices": [
                "Hund’s rule",
                "Aufbau principle",
                "Pauli exclusion principle",
                "Heisenberg principle"
              ],
              "answer": 0,
              "explanation": {
                "en": "Hund’s rule: electrons fill degenerate orbitals singly to minimize repulsion.",
                "zh": "洪特规则：电子先单独填入简并轨道以减小排斥。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which species is isoelectronic with neon?",
                "zh": "下列哪种粒子与氖等电子？"
              },
              "choices": [
                "$\\text{F}^-$",
                "$\\text{Cl}^-$",
                "$\\text{Na}$",
                "$\\text{O}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\text{F}^-$ has $9+1 = 10$ electrons, matching neon’s 10.",
                "zh": "$\\text{F}^-$ 有 $9+1 = 10$ 个电子，与氖的 10 个相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Which has higher ionization energy, Mg or Al? (Answer Mg or Al.)",
                "zh": "Mg 和 Al 哪个电离能更高？（回答 Mg 或 Al。）"
              },
              "answer": "Mg",
              "accept": [
                "mg"
              ],
              "explanation": {
                "en": "Mg’s filled $3s^2$ subshell is unusually stable, so removing an electron from Mg takes more energy than from Al ($3p^1$)—a notable exception to the smooth period trend.",
                "zh": "Mg 的 $3s^2$ 全充满亚层格外稳定，故从 Mg 移走电子比从 Al（$3p^1$）更难——这是周期趋势的一个著名例外。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Down a group, atomic radius increases mainly because:",
                "zh": "同族从上到下原子半径增大，主要因为："
              },
              "choices": [
                "electrons occupy shells farther from the nucleus",
                "nuclear charge decreases",
                "there are fewer electrons",
                "shielding decreases"
              ],
              "answer": 0,
              "explanation": {
                "en": "Each period adds a shell, placing valence electrons farther out despite greater nuclear charge.",
                "zh": "每增加一个周期就多一个电子层，尽管核电荷增大，价电子仍离核更远。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-compound-structure",
      "title": "Unit 2: Compound Structure and Properties",
      "titleZh": "第二单元：化合物的结构与性质",
      "lessons": [
        {
          "id": "lewis-structures",
          "title": "Lewis Structures",
          "titleZh": "路易斯结构",
          "content": [
            {
              "type": "h2",
              "en": "Drawing Lewis Structures",
              "zh": "绘制路易斯结构"
            },
            {
              "type": "p",
              "en": "A Lewis structure shows how valence electrons are arranged in a molecule as bonding pairs (shared) and lone pairs (unshared). The guiding idea is the octet rule: main-group atoms tend to acquire eight valence electrons, like a noble gas. Hydrogen is the exception, wanting only two.",
              "zh": "路易斯结构表示分子中价电子的排布，包括成键电子对（共享）和孤对电子（未共享）。核心思想是八隅体规则：主族原子倾向于获得 8 个价电子，像稀有气体一样。氢是例外，只需 2 个。"
            },
            {
              "type": "h3",
              "en": "Step-by-Step Method",
              "zh": "分步方法"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Count all valence electrons (add electrons for negative ions, subtract for positive).",
                  "zh": "统计所有价电子（阴离子加电子，阳离子减电子）。"
                },
                {
                  "en": "Place the least electronegative atom in the center (never H).",
                  "zh": "把电负性最小的原子放中心（H 除外）。"
                },
                {
                  "en": "Connect atoms with single bonds, then distribute remaining electrons as lone pairs.",
                  "zh": "用单键连接原子，然后把剩余电子作为孤对分配。"
                },
                {
                  "en": "Form double or triple bonds if a central atom lacks an octet.",
                  "zh": "若中心原子未满八隅体，则形成双键或三键。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Formal charge helps you pick the best structure. Formal charge $= (\\text{valence } e^-) - (\\text{lone } e^-) - \\tfrac{1}{2}(\\text{bonding } e^-)$. The best structure minimizes formal charges and puts any negative formal charge on the most electronegative atom.",
              "zh": "AP 提示：形式电荷帮你选出最佳结构。形式电荷 $= （\\text{价电子}） - （\\text{孤对电子}） - \\tfrac{1}{2}（\\text{成键电子}）$。最佳结构使形式电荷最小，并把负的形式电荷放在电负性最大的原子上。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Water",
                "zh": "例题 1：水"
              },
              "problem": {
                "en": "Draw the Lewis structure of $\\text{H}_2\\text{O}$.",
                "zh": "画出 $\\text{H}_2\\text{O}$ 的路易斯结构。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Valence electrons: $2(1) + 6 = 8$. Oxygen is central, bonded to two H atoms.",
                  "zh": "价电子：$2(1) + 6 = 8$。氧居中，与两个 H 成键。"
                },
                {
                  "type": "p",
                  "en": "Two O–H bonds use 4 electrons; the remaining 4 become two lone pairs on oxygen. Oxygen has a full octet; each H has 2.",
                  "zh": "两条 O–H 键用去 4 个电子；剩余 4 个成为氧上的两对孤对。氧满八隅体；每个 H 有 2 个。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Carbon Dioxide",
                "zh": "例题 2：二氧化碳"
              },
              "problem": {
                "en": "Draw the Lewis structure of $\\text{CO}_2$.",
                "zh": "画出 $\\text{CO}_2$ 的路易斯结构。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Valence electrons: $4 + 2(6) = 16$. Carbon is central. Single bonds leave carbon short of an octet.",
                  "zh": "价电子：$4 + 2(6) = 16$。碳居中。单键使碳不满八隅体。"
                },
                {
                  "type": "math",
                  "tex": "\\text{O}=\\text{C}=\\text{O}"
                },
                {
                  "type": "p",
                  "en": "Two double bonds give carbon its octet; each oxygen has two lone pairs. All formal charges are zero.",
                  "zh": "两条双键使碳满八隅体；每个氧有两对孤对。所有形式电荷为零。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "How many valence electrons are in $\\text{NH}_3$? (N=5, H=1) Give a number.",
                "zh": "$\\text{NH}_3$ 有多少个价电子？（N=5，H=1）给出数字。"
              },
              "answer": "8",
              "accept": [
                "eight"
              ],
              "explanation": {
                "en": "$5 + 3(1) = 8$ valence electrons.",
                "zh": "$5 + 3(1) = 8$ 个价电子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which molecule contains a triple bond?",
                "zh": "下列哪个分子含三键？"
              },
              "choices": [
                "$\\text{N}_2$",
                "$\\text{O}_2$",
                "$\\text{H}_2$",
                "$\\text{Cl}_2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\text{N}_2$ needs a triple bond so each N reaches an octet: $:\\!\\text{N}\\!\\equiv\\!\\text{N}\\!:$",
                "zh": "$\\text{N}_2$ 需三键才能使每个 N 满八隅体：$:\\!\\text{N}\\!\\equiv\\!\\text{N}\\!:$"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the best Lewis structure, a negative formal charge should be placed on:",
                "zh": "在最佳路易斯结构中，负的形式电荷应放在："
              },
              "choices": [
                "the most electronegative atom",
                "the least electronegative atom",
                "the central atom always",
                "hydrogen"
              ],
              "answer": 0,
              "explanation": {
                "en": "The most electronegative atom best stabilizes a negative formal charge.",
                "zh": "电负性最大的原子最能稳定负的形式电荷。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the formal charge on the central N in $\\text{NH}_4^+$? (N has 4 bonds, 0 lone pairs) Give a signed integer.",
                "zh": "$\\text{NH}_4^+$ 中心 N 的形式电荷是多少？（N 有 4 条键，0 孤对）给出带符号整数。"
              },
              "answer": "+1",
              "accept": [
                "1",
                "+1.0"
              ],
              "explanation": {
                "en": "FC $= 5 - 0 - \\tfrac{1}{2}(8) = 5 - 4 = +1$.",
                "zh": "形式电荷 $= 5 - 0 - \\tfrac{1}{2}(8) = 5 - 4 = +1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which species is an exception to the octet rule with fewer than 8 electrons on the central atom?",
                "zh": "下列哪种物质是八隅体规则的例外，中心原子电子少于 8 个？"
              },
              "choices": [
                "$\\text{BF}_3$",
                "$\\text{CH}_4$",
                "$\\text{H}_2\\text{O}$",
                "$\\text{CO}_2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Boron in $\\text{BF}_3$ has only 6 electrons—an electron-deficient exception.",
                "zh": "$\\text{BF}_3$ 中的硼只有 6 个电子——缺电子例外。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Resonance structures are used when:",
                "zh": "什么情况下使用共振结构："
              },
              "choices": [
                "electrons can be drawn in more than one equivalent way",
                "the molecule is ionic",
                "there are no lone pairs",
                "hydrogen is central"
              ],
              "answer": 0,
              "explanation": {
                "en": "Resonance depicts delocalized electrons that could be drawn in several equivalent positions, e.g. in $\\text{O}_3$ or $\\text{NO}_3^-$.",
                "zh": "共振描述可画在多个等效位置的离域电子，如 $\\text{O}_3$ 或 $\\text{NO}_3^-$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many lone pairs are on the oxygen atom in $\\text{H}_2\\text{O}$? Give a number.",
                "zh": "$\\text{H}_2\\text{O}$ 中氧原子上有多少对孤对电子？给出数字。"
              },
              "answer": "2",
              "accept": [
                "two"
              ],
              "explanation": {
                "en": "Oxygen forms 2 bonds and keeps 2 lone pairs to complete its octet.",
                "zh": "氧形成 2 条键并保留 2 对孤对以满足八隅体。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The average bond order in the nitrate ion $\\text{NO}_3^-$ (three resonance structures) is:",
                "zh": "硝酸根 $\\text{NO}_3^-$（三个共振结构）的平均键级是："
              },
              "choices": [
                "$4/3$",
                "$1$",
                "$2$",
                "$3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Four bonds (one double, two single) shared over three N–O positions give an average bond order of $4/3$.",
                "zh": "四条键（一双两单）分摊于三个 N–O 位置，平均键级为 $4/3$。"
              }
            }
          ]
        },
        {
          "id": "vsepr-hybridization",
          "title": "VSEPR and Hybridization",
          "titleZh": "VSEPR 与杂化",
          "content": [
            {
              "type": "h2",
              "en": "VSEPR: Predicting Shape",
              "zh": "VSEPR：预测形状"
            },
            {
              "type": "p",
              "en": "Valence Shell Electron Pair Repulsion (VSEPR) theory says electron domains—bonds and lone pairs—arrange themselves as far apart as possible to minimize repulsion. Count the electron domains around the central atom, and geometry follows. Lone pairs repel more strongly than bonding pairs, slightly compressing bond angles.",
              "zh": "价层电子对互斥（VSEPR）理论认为电子域——键和孤对——会尽量彼此远离以减小排斥。数出中心原子周围的电子域，几何构型随之确定。孤对比成键对排斥更强，会略微压缩键角。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "2 domains: linear, $180°$.",
                  "zh": "2 个域：直线形，$180°$。"
                },
                {
                  "en": "3 domains: trigonal planar, $120°$.",
                  "zh": "3 个域：平面三角形，$120°$。"
                },
                {
                  "en": "4 domains: tetrahedral, $109.5°$.",
                  "zh": "4 个域：四面体，$109.5°$。"
                },
                {
                  "en": "Lone pairs reduce the bond angle (e.g. water is bent, $104.5°$).",
                  "zh": "孤对减小键角（如水为角形，$104.5°$）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Hybridization",
              "zh": "杂化"
            },
            {
              "type": "p",
              "en": "Hybridization describes how atomic orbitals mix to form bonds matching the observed geometry. Count electron domains: 2 domains means $sp$, 3 means $sp^2$, 4 means $sp^3$. Sigma ($\\sigma$) bonds form along the internuclear axis; pi ($\\pi$) bonds form from sideways overlap of unhybridized p orbitals and appear in double and triple bonds.",
              "zh": "杂化描述原子轨道如何混合成键以符合观察到的几何构型。数电子域：2 个域为 $sp$，3 个为 $sp^2$，4 个为 $sp^3$。$\\sigma$ 键沿核间轴形成；$\\pi$ 键由未杂化 p 轨道侧向重叠形成，出现在双键和三键中。"
            },
            {
              "type": "note",
              "en": "Common mistake: a double bond counts as ONE electron domain for VSEPR, not two. Always count domains (groups of electrons), not individual bonds.",
              "zh": "常见错误：在 VSEPR 中双键算作一个电子域，而非两个。始终数电子域（电子基团），而非单条键。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Shape of $\\text{CH}_4$",
                "zh": "例题 1：$\\text{CH}_4$ 的形状"
              },
              "problem": {
                "en": "Predict the shape and hybridization of methane.",
                "zh": "预测甲烷的形状和杂化。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Carbon has 4 bonding domains, no lone pairs. Four domains give a tetrahedral shape with $109.5°$ angles.",
                  "zh": "碳有 4 个成键域，无孤对。四个域给出四面体形，键角 $109.5°$。"
                },
                {
                  "type": "p",
                  "en": "Four domains means $sp^3$ hybridization.",
                  "zh": "四个域意味着 $sp^3$ 杂化。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Shape of $\\text{NH}_3$",
                "zh": "例题 2：$\\text{NH}_3$ 的形状"
              },
              "problem": {
                "en": "Predict the shape and bond angle of ammonia.",
                "zh": "预测氨的形状和键角。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Nitrogen has 3 bonds and 1 lone pair = 4 domains. The electron geometry is tetrahedral, but the shape (atoms only) is trigonal pyramidal.",
                  "zh": "氮有 3 条键和 1 对孤对 = 4 个域。电子几何为四面体，但分子形状（仅原子）为三角锥形。"
                },
                {
                  "type": "p",
                  "en": "The lone pair compresses the angle from $109.5°$ to about $107°$.",
                  "zh": "孤对把键角从 $109.5°$ 压缩到约 $107°$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the molecular geometry of $\\text{CO}_2$?",
                "zh": "$\\text{CO}_2$ 的分子几何是什么？"
              },
              "choices": [
                "linear",
                "bent",
                "trigonal planar",
                "tetrahedral"
              ],
              "answer": 0,
              "explanation": {
                "en": "Carbon has 2 electron domains (two double bonds), giving a linear shape, $180°$.",
                "zh": "碳有 2 个电子域（两条双键），呈直线形，$180°$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The hybridization of the carbon in $\\text{CH}_4$ is:",
                "zh": "$\\text{CH}_4$ 中碳的杂化是："
              },
              "choices": [
                "$sp^3$",
                "$sp^2$",
                "$sp$",
                "$sp^3d$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Four electron domains correspond to $sp^3$ hybridization.",
                "zh": "四个电子域对应 $sp^3$ 杂化。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many electron domains surround the central atom in a trigonal planar molecule? Give a number.",
                "zh": "平面三角形分子中心原子周围有几个电子域？给出数字。"
              },
              "answer": "3",
              "accept": [
                "three"
              ],
              "explanation": {
                "en": "Trigonal planar geometry arises from 3 electron domains at $120°$.",
                "zh": "平面三角形几何源于 3 个电子域，键角 $120°$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which molecule is bent?",
                "zh": "下列哪个分子是角形？"
              },
              "choices": [
                "$\\text{H}_2\\text{O}$",
                "$\\text{CO}_2$",
                "$\\text{BeH}_2$",
                "$\\text{BF}_3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Water has 2 bonds and 2 lone pairs (4 domains), giving a bent shape near $104.5°$.",
                "zh": "水有 2 条键和 2 对孤对（4 个域），呈约 $104.5°$ 的角形。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A double bond consists of how many pi ($\\pi$) bonds? Give a number.",
                "zh": "一条双键含多少条 $\\pi$ 键？给出数字。"
              },
              "answer": "1",
              "accept": [
                "one"
              ],
              "explanation": {
                "en": "A double bond is one $\\sigma$ bond plus one $\\pi$ bond.",
                "zh": "一条双键由一条 $\\sigma$ 键加一条 $\\pi$ 键组成。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why is the H–N–H angle in $\\text{NH}_3$ smaller than $109.5°$?",
                "zh": "为什么 $\\text{NH}_3$ 中 H–N–H 键角小于 $109.5°$？"
              },
              "choices": [
                "the lone pair repels bonding pairs more strongly",
                "nitrogen is small",
                "hydrogen has lone pairs",
                "the molecule is linear"
              ],
              "answer": 0,
              "explanation": {
                "en": "Lone pair–bond pair repulsion exceeds bond–bond repulsion, compressing the angle.",
                "zh": "孤对与成键对的排斥大于成键对之间的排斥，压缩了键角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many sigma ($\\sigma$) bonds are in a molecule of $\\text{N}_2$ ($:\\!\\text{N}\\!\\equiv\\!\\text{N}\\!:$)? Give a number.",
                "zh": "$\\text{N}_2$（$:\\!\\text{N}\\!\\equiv\\!\\text{N}\\!:$）分子中有多少条 $\\sigma$ 键？给出数字。"
              },
              "answer": "1",
              "accept": [
                "one"
              ],
              "explanation": {
                "en": "A triple bond has one $\\sigma$ and two $\\pi$ bonds.",
                "zh": "三键含一条 $\\sigma$ 键和两条 $\\pi$ 键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The hybridization of carbon in ethene, $\\text{C}_2\\text{H}_4$ (contains a C=C), is:",
                "zh": "乙烯 $\\text{C}_2\\text{H}_4$（含 C=C）中碳的杂化是："
              },
              "choices": [
                "$sp^2$",
                "$sp^3$",
                "$sp$",
                "$sp^3d^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Each carbon has 3 electron domains (2 C–H bonds + 1 C=C), so $sp^2$.",
                "zh": "每个碳有 3 个电子域（2 条 C–H 键 + 1 条 C=C），故为 $sp^2$。"
              }
            }
          ]
        },
        {
          "id": "ionic-metallic-bonding",
          "title": "Ionic Solids, Metals, and Alloys",
          "titleZh": "离子晶体、金属与合金",
          "content": [
            {
              "type": "h2",
              "en": "Types of Chemical Bonds",
              "zh": "化学键的类型"
            },
            {
              "type": "p",
              "en": "Whether two atoms share electrons or transfer them depends on how strongly each atom attracts electrons—its electronegativity. A large electronegativity difference (roughly $\\Delta EN > 1.7$, typically a metal with a nonmetal) leads to electron transfer and an ionic bond. A small difference between two nonmetals leads to sharing: a polar covalent bond if $\\Delta EN$ is moderate, and a nonpolar covalent bond if $\\Delta EN \\approx 0$. Between two metals, valence electrons are shared collectively in a metallic bond.",
              "zh": "两个原子是共用电子还是转移电子，取决于每个原子吸引电子的能力——电负性。电负性差很大时（大约 $\\Delta EN > 1.7$，通常是金属与非金属之间）发生电子转移，形成离子键。两种非金属之间差值较小则共用电子：$\\Delta EN$ 中等时为极性共价键，$\\Delta EN \\approx 0$ 时为非极性共价键。两种金属之间，价电子被集体共享，形成金属键。"
            },
            {
              "type": "p",
              "en": "On the AP exam, bond type is a spectrum, not three rigid boxes. A bond like H–Cl is best described as polar covalent because the shared electrons are pulled unequally toward Cl, giving partial charges $\\delta^+$ and $\\delta^-$. Always justify a classification using electronegativity difference and the positions of the elements in the periodic table, not memorized labels.",
              "zh": "在 AP 考试中，键的类型是一个连续谱，而不是三个僵硬的类别。像 H–Cl 这样的键最好描述为极性共价键，因为共用电子被不均等地拉向 Cl，产生部分电荷 $\\delta^+$ 和 $\\delta^-$。分类时务必用电负性差和元素在周期表中的位置来论证，而不是死记标签。"
            },
            {
              "type": "h3",
              "en": "Lattice Energy and Coulomb’s Law",
              "zh": "晶格能与库仑定律"
            },
            {
              "type": "p",
              "en": "An ionic solid is a three-dimensional lattice of alternating cations and anions held together by electrostatic attraction. The strength of that attraction follows Coulomb’s law: the potential energy between two ions is proportional to the product of their charges and inversely proportional to the distance between their centers.",
              "zh": "离子晶体是阳离子与阴离子交替排列、靠静电吸引结合的三维晶格。这种吸引力的强弱遵循库仑定律：两离子间的势能与电荷乘积成正比，与两离子中心间的距离成反比。"
            },
            {
              "type": "math",
              "tex": "E \\propto \\frac{q_1 q_2}{r}"
            },
            {
              "type": "p",
              "en": "Lattice energy measures how strongly the lattice is held together. Charge matters far more than size: doubling both charges (as in $\\text{MgO}$, with $2+$ and $2-$, versus $\\text{NaF}$, with $1+$ and $1-$) roughly quadruples the attraction, while a small change in ionic radius changes $r$ only modestly. Higher lattice energy means a higher melting point and a harder solid.",
              "zh": "晶格能衡量晶格结合的牢固程度。电荷的影响远大于半径：电荷都翻倍（如 $\\text{MgO}$ 的 $2+$ 与 $2-$，对比 $\\text{NaF}$ 的 $1+$ 与 $1-$）会使吸引力大约变为四倍，而离子半径的微小变化对 $r$ 的影响有限。晶格能越大，熔点越高，固体越硬。"
            },
            {
              "type": "note",
              "en": "AP tip: When comparing lattice energies or melting points of ionic solids, compare charges FIRST, then radii. Full credit requires explicit Coulomb’s law reasoning: “$\\text{MgO}$ has $2+/2-$ charges while $\\text{NaCl}$ has $1+/1-$, so the electrostatic attraction is greater and more energy is required to separate the ions.” Just saying “stronger bonds” earns nothing.",
              "zh": "AP 提示：比较离子晶体的晶格能或熔点时，先比电荷，再比半径。要拿满分必须写出明确的库仑定律推理：「$\\text{MgO}$ 的电荷为 $2+/2-$，而 $\\text{NaCl}$ 为 $1+/1-$，静电吸引更强，分开离子需要更多能量。」只写「键更强」是不得分的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Ranking Lattice Energies",
                "zh": "例题 1：晶格能排序"
              },
              "problem": {
                "en": "Rank $\\text{NaCl}$, $\\text{MgO}$, and $\\text{NaF}$ from highest to lowest lattice energy, and justify with Coulomb’s law.",
                "zh": "将 $\\text{NaCl}$、$\\text{MgO}$、$\\text{NaF}$ 按晶格能从高到低排序，并用库仑定律说明理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compare charges first. $\\text{MgO}$ is built from $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$, so $q_1 q_2 = 4$ in magnitude; both sodium salts have $q_1 q_2 = 1$. Thus $\\text{MgO}$ has by far the highest lattice energy.",
                  "zh": "先比电荷。$\\text{MgO}$ 由 $\\text{Mg}^{2+}$ 和 $\\text{O}^{2-}$ 构成，$q_1 q_2$ 的大小为 4；两种钠盐的 $q_1 q_2$ 均为 1。因此 $\\text{MgO}$ 的晶格能远远最高。"
                },
                {
                  "type": "p",
                  "en": "Between $\\text{NaF}$ and $\\text{NaCl}$, charges are equal, so compare radii: $\\text{F}^-$ is smaller than $\\text{Cl}^-$, making $r$ smaller and the attraction stronger in $\\text{NaF}$.",
                  "zh": "$\\text{NaF}$ 与 $\\text{NaCl}$ 电荷相同，故比较半径：$\\text{F}^-$ 比 $\\text{Cl}^-$ 小，$r$ 更小，$\\text{NaF}$ 中的吸引更强。"
                },
                {
                  "type": "math",
                  "tex": "\\text{MgO} > \\text{NaF} > \\text{NaCl}"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Properties of Ionic Solids",
              "zh": "离子晶体的性质"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "High melting and boiling points: strong electrostatic attractions must be overcome throughout the lattice.",
                  "zh": "熔点和沸点高：必须克服整个晶格中强烈的静电吸引。"
                },
                {
                  "en": "Brittle: shifting one layer of ions aligns like charges next to each other, and the resulting repulsion cracks the crystal.",
                  "zh": "性脆：离子层错位后同种电荷相邻，产生的排斥使晶体碎裂。"
                },
                {
                  "en": "Do not conduct electricity as solids—ions are locked in place. They conduct when molten or dissolved, because ions become mobile charge carriers.",
                  "zh": "固态不导电——离子被固定在晶格中。熔融或溶解后导电，因为离子成为可移动的载流子。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Metallic Bonding and Alloys",
              "zh": "金属键与合金"
            },
            {
              "type": "p",
              "en": "In a metal, the valence electrons are delocalized: picture a lattice of metal cations immersed in a mobile “sea of electrons.” This electron-sea model explains why metals conduct electricity and heat (mobile electrons carry charge and energy) and why they are malleable and ductile: layers of cations can slide past one another without breaking the bonding, because the electron sea continuously surrounds them.",
              "zh": "在金属中，价电子是离域的：可以想象金属阳离子晶格浸泡在可流动的「电子海」中。电子海模型解释了金属为什么导电导热（可移动的电子传递电荷和能量），以及为什么有延展性：阳离子层可以相互滑动而不破坏成键，因为电子海始终包围着它们。"
            },
            {
              "type": "p",
              "en": "An alloy is a mixture of a metal with one or more other elements. In a substitutional alloy, atoms of similar radius replace host atoms in the lattice—brass is copper with zinc atoms substituting for some copper atoms. In an interstitial alloy, much smaller atoms fit into the holes (interstices) between host atoms—steel is iron with small carbon atoms in the interstices. Interstitial atoms restrict the sliding of metal layers, so steel is harder and less malleable than pure iron.",
              "zh": "合金是金属与一种或多种其他元素的混合物。在置换合金中，半径相近的原子取代晶格中的主体原子——黄铜就是锌原子取代部分铜原子。在间隙合金中，小得多的原子填入主体原子之间的空隙——钢是铁的间隙中嵌入了小的碳原子。间隙原子阻碍金属层滑动，因此钢比纯铁更硬、延展性更差。"
            },
            {
              "type": "note",
              "en": "AP tip: “Justify in terms of particles” questions about alloys want you to compare atomic radii. Similar radii (Cu, Zn) → substitutional; very different radii (Fe, C) → interstitial. Then connect structure to property: interstitial atoms pin the layers, increasing hardness.",
              "zh": "AP 提示：关于合金的「从粒子角度论证」题目要求比较原子半径。半径相近（Cu、Zn）→ 置换合金；半径悬殊（Fe、C）→ 间隙合金。然后把结构与性质联系起来：间隙原子钉住金属层，使硬度增大。"
            },
            {
              "type": "h3",
              "en": "Choosing the Best Lewis Structure: Resonance and Formal Charge",
              "zh": "选择最佳路易斯结构：共振与形式电荷"
            },
            {
              "type": "p",
              "en": "Some molecules and ions can be drawn with electrons in more than one valid arrangement. When the structures are equivalent (as in $\\text{NO}_3^-$), the true species is a resonance hybrid with delocalized electrons and identical, intermediate bond lengths. When the candidate structures are NOT equivalent, formal charge decides which one contributes most.",
              "zh": "有些分子和离子的电子可以画出不止一种合理的排布。当各结构等价时（如 $\\text{NO}_3^-$），真实粒子是电子离域的共振杂化体，各键长相同且介于单双键之间。当候选结构不等价时，用形式电荷判断哪一个贡献最大。"
            },
            {
              "type": "math",
              "tex": "\\text{FC} = (\\text{valence } e^-) - (\\text{lone } e^-) - \\tfrac{1}{2}(\\text{bonding } e^-)"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Best structure: formal charges as close to zero as possible.",
                  "zh": "最佳结构：各原子的形式电荷尽可能接近零。"
                },
                {
                  "en": "If a nonzero formal charge is unavoidable, the negative one belongs on the most electronegative atom.",
                  "zh": "若无法避免非零形式电荷，负电荷应位于电负性最大的原子上。"
                },
                {
                  "en": "The sum of all formal charges must equal the overall charge of the species.",
                  "zh": "所有形式电荷之和必须等于该粒子的总电荷。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Best Structure of the Cyanate Ion",
                "zh": "例题 2：氰酸根的最佳结构"
              },
              "problem": {
                "en": "Two Lewis structures of cyanate, $\\text{OCN}^-$ (C central), place the triple bond differently: (a) $\\text{O}\\!-\\!\\text{C}\\!\\equiv\\!\\text{N}$ with three lone pairs on O, and (b) $\\text{O}\\!\\equiv\\!\\text{C}\\!-\\!\\text{N}$ with three lone pairs on N. Use formal charge to choose the better structure.",
                "zh": "氰酸根 $\\text{OCN}^-$（C 居中）的两种路易斯结构中三键位置不同：(a) $\\text{O}\\!-\\!\\text{C}\\!\\equiv\\!\\text{N}$，O 上有三对孤对；(b) $\\text{O}\\!\\equiv\\!\\text{C}\\!-\\!\\text{N}$，N 上有三对孤对。用形式电荷选出更好的结构。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Structure (a): O has $6 - 6 - 1 = -1$; C has $4 - 0 - 4 = 0$; N has $5 - 2 - 3 = 0$. The $-1$ sits on oxygen.",
                  "zh": "结构 (a)：O 为 $6 - 6 - 1 = -1$；C 为 $4 - 0 - 4 = 0$；N 为 $5 - 2 - 3 = 0$。$-1$ 在氧上。"
                },
                {
                  "type": "p",
                  "en": "Structure (b): O has $6 - 2 - 3 = +1$; C has $0$; N has $5 - 6 - 1 = -2$. Larger charges, and a positive charge on the most electronegative atom.",
                  "zh": "结构 (b)：O 为 $6 - 2 - 3 = +1$；C 为 $0$；N 为 $5 - 6 - 1 = -2$。形式电荷更大，且正电荷落在电负性最大的原子上。"
                },
                {
                  "type": "p",
                  "en": "Structure (a) wins: charges are minimized and the $-1$ rests on the most electronegative atom, O. Both sum to the ion’s $-1$ charge, as they must.",
                  "zh": "结构 (a) 更优：形式电荷最小化，且 $-1$ 位于电负性最大的 O 上。两种结构的形式电荷之和都等于离子的 $-1$，这是必要条件。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which compound is expected to have the highest lattice energy?",
                "zh": "下列哪种化合物的晶格能预计最高？"
              },
              "choices": [
                "$\\text{NaCl}$",
                "$\\text{KBr}$",
                "$\\text{MgO}$",
                "$\\text{NaF}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\text{MgO}$ has $2+$ and $2-$ ions, so $|q_1 q_2| = 4$, versus 1 for the others. By Coulomb’s law, charge dominates. $\\text{NaF}$ is tempting because its ions are small, but radius only fine-tunes $r$; it cannot beat a fourfold charge advantage.",
                "zh": "$\\text{MgO}$ 的离子为 $2+$ 和 $2-$，$|q_1 q_2| = 4$，其余均为 1。根据库仑定律，电荷起主导作用。$\\text{NaF}$ 因离子小而具有迷惑性，但半径只微调 $r$，敌不过四倍的电荷优势。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Ionic solids are brittle because an applied force can:",
                "zh": "离子晶体性脆，是因为外力可以："
              },
              "choices": [
                "break the covalent network",
                "shift ion layers so that like charges align and repel",
                "free the delocalized electrons",
                "vaporize the surface ions"
              ],
              "answer": 1,
              "explanation": {
                "en": "Sliding one layer of the lattice puts cations next to cations and anions next to anions; the sudden repulsion fractures the crystal. Choice (a) describes covalent network solids like diamond, not ionic solids.",
                "zh": "晶格中某一层滑动后，阳离子与阳离子、阴离子与阴离子相邻，突然出现的排斥力使晶体断裂。选项 (a) 描述的是金刚石等共价网络固体，不是离子晶体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a Lewis structure, an oxygen atom has 1 single bond and 3 lone pairs. What is its formal charge? Give a signed integer.",
                "zh": "某路易斯结构中，一个氧原子有 1 条单键和 3 对孤对电子。它的形式电荷是多少？请给出带符号的整数。"
              },
              "answer": "-1",
              "accept": [
                "-1.0"
              ],
              "explanation": {
                "en": "FC $= 6 - 6 - \\tfrac{1}{2}(2) = -1$.",
                "zh": "形式电荷 $= 6 - 6 - \\tfrac{1}{2}(2) = -1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of elements is most likely to form an ionic compound?",
                "zh": "下列哪对元素最可能形成离子化合物？"
              },
              "choices": [
                "C and O",
                "N and H",
                "Cu and Zn",
                "Ca and Cl"
              ],
              "answer": 3,
              "explanation": {
                "en": "Ca (a metal, low electronegativity) transfers electrons to Cl (a nonmetal, high electronegativity), giving a large $\\Delta EN$ and an ionic bond. C–O and N–H are nonmetal pairs (polar covalent); Cu–Zn is two metals (metallic/alloy).",
                "zh": "Ca（金属，电负性低）把电子转移给 Cl（非金属，电负性高），$\\Delta EN$ 大，形成离子键。C–O 和 N–H 是非金属组合（极性共价）；Cu–Zn 是两种金属（金属键/合金）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Steel is harder than pure iron because the carbon atoms in steel:",
                "zh": "钢比纯铁更硬，是因为钢中的碳原子："
              },
              "choices": [
                "substitute for iron atoms of similar radius",
                "occupy interstices and restrict the sliding of iron layers",
                "form ionic bonds with iron cations",
                "increase the number of delocalized electrons"
              ],
              "answer": 1,
              "explanation": {
                "en": "Carbon atoms are much smaller than iron atoms, so they fit into interstitial holes and pin adjacent layers, making sliding harder. Choice (a) describes a substitutional alloy such as brass, which requires similar radii.",
                "zh": "碳原子比铁原子小得多，因此填入间隙并钉住相邻金属层，使滑动更难。选项 (a) 描述的是黄铜这类需要半径相近的置换合金。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many equivalent resonance structures does the nitrate ion $\\text{NO}_3^-$ have? Give an integer.",
                "zh": "硝酸根 $\\text{NO}_3^-$ 有多少个等价的共振结构？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "three",
                "3.0"
              ],
              "explanation": {
                "en": "The double bond can be drawn to any of the three equivalent oxygen atoms, so there are 3 resonance structures; the real ion has three identical N–O bonds of order $4/3$.",
                "zh": "双键可以画在三个等价氧原子中的任意一个上，故有 3 个共振结构；真实离子的三条 N–O 键完全相同，键级为 $4/3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement best explains, at the particulate level, why solid copper conducts electricity but solid $\\text{NaCl}$ does not?",
                "zh": "下列哪项从粒子层面最好地解释了固态铜导电而固态 $\\text{NaCl}$ 不导电？"
              },
              "choices": [
                "Copper’s valence electrons are delocalized and mobile, while the ions in $\\text{NaCl}$ are fixed in the lattice",
                "Copper atoms are smaller than sodium ions",
                "Copper has more protons, so it attracts current",
                "$\\text{NaCl}$ has no charged particles"
              ],
              "answer": 0,
              "explanation": {
                "en": "Conduction needs mobile charge carriers. The metallic electron sea provides mobile electrons; in solid $\\text{NaCl}$ the ions (which ARE charged, so choice (d) is wrong) cannot move until melted or dissolved.",
                "zh": "导电需要可移动的载流子。金属的电子海提供可移动的电子；固态 $\\text{NaCl}$ 中的离子（确实带电，所以选项 (d) 错误）在熔融或溶解前无法移动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Which solid has the higher melting point: $\\text{CaO}$ or $\\text{KCl}$? Answer CaO or KCl.",
                "zh": "$\\text{CaO}$ 和 $\\text{KCl}$ 哪种固体熔点更高？回答 CaO 或 KCl。"
              },
              "answer": "CaO",
              "accept": [
                "cao",
                "Cao"
              ],
              "explanation": {
                "en": "$\\text{CaO}$ is $2+/2-$ while $\\text{KCl}$ is $1+/1-$. By Coulomb’s law the electrostatic attraction in $\\text{CaO}$ is about four times greater, so far more thermal energy is needed to separate its ions.",
                "zh": "$\\text{CaO}$ 为 $2+/2-$，$\\text{KCl}$ 为 $1+/1-$。由库仑定律，$\\text{CaO}$ 中的静电吸引约为四倍，分开离子需要多得多的热能。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-properties-of-substances",
      "title": "Unit 3: Properties of Substances and Mixtures",
      "titleZh": "第三单元：物质与混合物的性质",
      "lessons": [
        {
          "id": "polarity-imf",
          "title": "Bond Polarity and Intermolecular Forces",
          "titleZh": "键的极性与分子间作用力",
          "content": [
            {
              "type": "h2",
              "en": "Bond and Molecular Polarity",
              "zh": "键与分子的极性"
            },
            {
              "type": "p",
              "en": "A bond is polar when the two atoms differ in electronegativity, pulling shared electrons unevenly and creating partial charges ($\\delta^+$ and $\\delta^-$). Whether the whole molecule is polar depends on both bond polarity and geometry: symmetric molecules can have polar bonds that cancel. $\\text{CO}_2$ has polar bonds but is nonpolar because its linear shape makes the dipoles cancel; water is polar because its bent shape does not.",
              "zh": "当两个原子电负性不同时，共享电子被不均匀地吸引，产生部分电荷（$\\delta^+$ 和 $\\delta^-$），此键为极性键。整个分子是否极性取决于键的极性和几何构型：对称分子的极性键可能相互抵消。$\\text{CO}_2$ 有极性键但为非极性，因为直线形使偶极相互抵消；水为极性，因为角形不能抵消。"
            },
            {
              "type": "h3",
              "en": "Intermolecular Forces (IMFs)",
              "zh": "分子间作用力（IMF）"
            },
            {
              "type": "p",
              "en": "IMFs are attractions between molecules (not the bonds within them). From weakest to strongest: London dispersion forces (present in all molecules, stronger with more electrons/larger molar mass), dipole–dipole forces (between polar molecules), and hydrogen bonding (a special strong dipole force when H is bonded to N, O, or F). Stronger IMFs mean higher boiling points, higher viscosity, and lower vapor pressure.",
              "zh": "分子间作用力是分子之间（而非分子内部）的吸引力。由弱到强：伦敦色散力（存在于所有分子，电子越多/摩尔质量越大越强）、偶极-偶极力（极性分子之间）、氢键（当 H 与 N、O、F 成键时的特别强偶极力）。IMF 越强，沸点越高、粘度越大、蒸气压越低。"
            },
            {
              "type": "note",
              "en": "AP tip: To compare boiling points, first ask if hydrogen bonding is present, then compare dipole–dipole, then molar mass (dispersion). Bigger molecules have more electrons and stronger dispersion forces—this often dominates for nonpolar substances.",
              "zh": "AP 提示：比较沸点时，先看有无氢键，再比较偶极-偶极，最后比较摩尔质量（色散）。较大分子电子更多、色散力更强——对非极性物质这常占主导。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Is $\\text{CCl}_4$ Polar?",
                "zh": "例题 1：$\\text{CCl}_4$ 是极性吗？"
              },
              "problem": {
                "en": "Carbon tetrachloride has four polar C–Cl bonds. Is the molecule polar?",
                "zh": "四氯化碳有四条极性 C–Cl 键。分子是极性吗？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The shape is tetrahedral and symmetric, so the four bond dipoles point outward equally and cancel.",
                  "zh": "形状为对称的四面体，故四个键偶极均匀向外指向并相互抵消。"
                },
                {
                  "type": "p",
                  "en": "Net dipole is zero: $\\text{CCl}_4$ is nonpolar.",
                  "zh": "净偶极为零：$\\text{CCl}_4$ 为非极性。"
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
                "en": "Which has the higher boiling point, $\\text{H}_2\\text{O}$ or $\\text{H}_2\\text{S}$?",
                "zh": "$\\text{H}_2\\text{O}$ 和 $\\text{H}_2\\text{S}$ 哪个沸点更高？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Both are bent and polar, but water can form hydrogen bonds (H bonded to O); $\\text{H}_2\\text{S}$ cannot (S is not N, O, or F).",
                  "zh": "两者都是角形极性分子，但水能形成氢键（H 与 O 成键）；$\\text{H}_2\\text{S}$ 不能（S 不是 N、O、F）。"
                },
                {
                  "type": "p",
                  "en": "Hydrogen bonding makes water’s boiling point much higher despite its lower molar mass.",
                  "zh": "氢键使水的沸点远高于 $\\text{H}_2\\text{S}$，尽管其摩尔质量更小。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which molecule is nonpolar overall despite having polar bonds?",
                "zh": "下列哪个分子虽有极性键但整体为非极性？"
              },
              "choices": [
                "$\\text{CO}_2$",
                "$\\text{H}_2\\text{O}$",
                "$\\text{NH}_3$",
                "$\\text{HCl}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\text{CO}_2$ is linear and symmetric, so its bond dipoles cancel.",
                "zh": "$\\text{CO}_2$ 直线对称，键偶极相互抵消。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The strongest intermolecular force in liquid water is:",
                "zh": "液态水中最强的分子间作用力是："
              },
              "choices": [
                "hydrogen bonding",
                "London dispersion",
                "dipole–dipole",
                "ionic bonding"
              ],
              "answer": 0,
              "explanation": {
                "en": "Water molecules hydrogen bond because H is bonded to highly electronegative O.",
                "zh": "水分子形成氢键，因为 H 与电负性很大的 O 成键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which force is present in ALL molecules?",
                "zh": "下列哪种力存在于所有分子中？"
              },
              "choices": [
                "London dispersion forces",
                "hydrogen bonding",
                "dipole–dipole forces",
                "ionic forces"
              ],
              "answer": 0,
              "explanation": {
                "en": "London dispersion forces arise from temporary dipoles and exist in every substance.",
                "zh": "伦敦色散力源于瞬时偶极，存在于每种物质中。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Among $\\text{F}_2$, $\\text{Cl}_2$, $\\text{Br}_2$, and $\\text{I}_2$, which has the highest boiling point?",
                "zh": "$\\text{F}_2$、$\\text{Cl}_2$、$\\text{Br}_2$、$\\text{I}_2$ 中沸点最高的是？"
              },
              "choices": [
                "$\\text{I}_2$",
                "$\\text{F}_2$",
                "$\\text{Cl}_2$",
                "$\\text{Br}_2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "All are nonpolar; $\\text{I}_2$ has the most electrons and strongest dispersion forces.",
                "zh": "均为非极性；$\\text{I}_2$ 电子最多、色散力最强。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Does $\\text{HF}$ exhibit hydrogen bonding? Answer yes or no.",
                "zh": "$\\text{HF}$ 是否存在氢键？回答 yes 或 no。"
              },
              "answer": "yes",
              "accept": [
                "y"
              ],
              "explanation": {
                "en": "Yes—H is bonded to F, one of the three atoms (N, O, F) that enable hydrogen bonding.",
                "zh": "是——H 与 F 成键，F 是能形成氢键的三种原子（N、O、F）之一。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A liquid with strong intermolecular forces will tend to have:",
                "zh": "分子间作用力强的液体往往具有："
              },
              "choices": [
                "a low vapor pressure",
                "a high vapor pressure",
                "a low boiling point",
                "low viscosity"
              ],
              "answer": 0,
              "explanation": {
                "en": "Strong IMFs hold molecules in the liquid, lowering vapor pressure and raising boiling point.",
                "zh": "强分子间作用力把分子束缚在液体中，降低蒸气压、升高沸点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Which is more polar, a C–F bond or a C–C bond? Answer C–F or C–C.",
                "zh": "C–F 键和 C–C 键哪个更极性？回答 C–F 或 C–C。"
              },
              "answer": "C-F",
              "accept": [
                "c-f",
                "cf",
                "c–f"
              ],
              "explanation": {
                "en": "C–F has a large electronegativity difference; C–C has zero difference and is nonpolar.",
                "zh": "C–F 电负性差大；C–C 差为零，是非极性键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$) has a much higher boiling point than propane ($\\text{C}_3\\text{H}_8$) of similar molar mass because ethanol:",
                "zh": "乙醇（$\\text{CH}_3\\text{CH}_2\\text{OH}$）沸点远高于摩尔质量相近的丙烷（$\\text{C}_3\\text{H}_8$），因为乙醇："
              },
              "choices": [
                "forms hydrogen bonds via its O–H group",
                "is nonpolar",
                "has more London forces only",
                "is ionic"
              ],
              "answer": 0,
              "explanation": {
                "en": "The –OH group lets ethanol hydrogen bond, a much stronger IMF than the dispersion forces in propane.",
                "zh": "–OH 基团使乙醇能形成氢键，比丙烷中的色散力强得多。"
              }
            }
          ]
        },
        {
          "id": "gases-and-kinetic-molecular-theory",
          "title": "Gases and Kinetic Molecular Theory",
          "titleZh": "气体与分子动理论",
          "content": [
            {
              "type": "h2",
              "en": "The Gas Phase: Particles in Motion",
              "zh": "气态：运动中的粒子"
            },
            {
              "type": "p",
              "en": "Gases are mostly empty space: tiny particles flying around at hundreds of meters per second, colliding with each other and the container walls. Those wall collisions are what we measure as pressure. Because the particles are so far apart, most gases obey one remarkably simple equation—the ideal gas law—that links pressure, volume, temperature, and moles.",
              "zh": "气体的大部分空间是真空：微小的粒子以每秒数百米的速度飞行，彼此碰撞并撞击容器壁。这些对器壁的碰撞就是我们测得的压强。由于粒子间距极大，大多数气体都遵循一个极其简单的方程——理想气体定律——把压强、体积、温度和摩尔数联系起来。"
            },
            {
              "type": "h3",
              "en": "The Ideal Gas Law and Its Component Laws",
              "zh": "理想气体定律及其分定律"
            },
            {
              "type": "math",
              "tex": "PV = nRT \\qquad R = 0.08206\\ \\text{L·atm/(mol·K)}"
            },
            {
              "type": "p",
              "en": "Here $P$ is pressure (atm), $V$ is volume (L), $n$ is moles, and $T$ is temperature in kelvin. Holding two of the four variables constant recovers the historical gas laws, each of which the AP exam expects you to reason about qualitatively:",
              "zh": "其中 $P$ 为压强（atm），$V$ 为体积（L），$n$ 为摩尔数，$T$ 为开尔文温度。固定四个变量中的两个，就得到各条经典气体定律，AP 考试要求你能对每一条作定性推理："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Boyle: at constant $n, T$, pressure and volume are inversely proportional ($P_1V_1 = P_2V_2$).",
                  "zh": "玻意耳定律：$n、T$ 不变时，压强与体积成反比（$P_1V_1 = P_2V_2$）。"
                },
                {
                  "en": "Charles: at constant $n, P$, volume is directly proportional to Kelvin temperature ($V_1/T_1 = V_2/T_2$).",
                  "zh": "查理定律：$n、P$ 不变时，体积与开尔文温度成正比（$V_1/T_1 = V_2/T_2$）。"
                },
                {
                  "en": "Gay-Lussac: at constant $n, V$, pressure is directly proportional to Kelvin temperature ($P_1/T_1 = P_2/T_2$).",
                  "zh": "盖-吕萨克定律：$n、V$ 不变时，压强与开尔文温度成正比（$P_1/T_1 = P_2/T_2$）。"
                },
                {
                  "en": "Avogadro: at constant $P, T$, equal volumes contain equal moles—at STP ($273$ K, $1$ atm) one mole occupies $22.4$ L.",
                  "zh": "阿伏伽德罗定律：$P、T$ 不变时，等体积含等摩尔——在 STP（$273$ K，$1$ atm）下 1 摩尔占 $22.4$ L。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: temperature in any gas law must be in kelvin ($T_K = T_{°C} + 273$). Doubling $25\\ °C$ to $50\\ °C$ does NOT double the volume—$298$ K to $323$ K is only about an $8\\%$ increase.",
              "zh": "常见错误：任何气体定律中的温度都必须用开尔文（$T_K = T_{°C} + 273$）。把 $25\\ °C$ 加热到 $50\\ °C$ 并不会使体积翻倍——从 $298$ K 到 $323$ K 只增加约 $8\\%$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Using PV = nRT",
                "zh": "例题 1：使用 PV = nRT"
              },
              "problem": {
                "en": "What pressure is exerted by $0.500$ mol of $\\text{N}_2$ gas in a $10.0$ L container at $298$ K?",
                "zh": "$0.500$ mol $\\text{N}_2$ 气体在 $298$ K、$10.0$ L 容器中的压强是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Solve the ideal gas law for $P$ and substitute, letting the units cancel to atm.",
                  "zh": "将理想气体定律对 $P$ 求解并代入，单位约分后应得 atm。"
                },
                {
                  "type": "math",
                  "tex": "P = \\frac{nRT}{V} = \\frac{(0.500\\ \\text{mol})(0.08206\\ \\tfrac{\\text{L·atm}}{\\text{mol·K}})(298\\ \\text{K})}{10.0\\ \\text{L}} = 1.22\\ \\text{atm}"
                },
                {
                  "type": "p",
                  "en": "Three significant figures match the data given.",
                  "zh": "结果保留三位有效数字，与已知数据一致。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Partial Pressures and Mole Fractions",
              "zh": "分压与摩尔分数"
            },
            {
              "type": "p",
              "en": "In a mixture, each gas behaves as if it were alone: it contributes a partial pressure proportional to its share of the moles. That share is the mole fraction, $X_A = n_A / n_{\\text{total}}$. Dalton’s law says the partial pressures simply add up. On the AP exam this often appears with gases collected over water, where you must subtract the vapor pressure of water from the total.",
              "zh": "在混合气体中，每种气体的行为如同单独存在：它贡献的分压与其摩尔占比成正比。这个占比就是摩尔分数 $X_A = n_A / n_{\\text{total}}$。道尔顿定律指出各分压直接相加。AP 考试中常见于排水集气情境，此时须从总压中减去水的蒸气压。"
            },
            {
              "type": "math",
              "tex": "P_{\\text{total}} = P_A + P_B + \\cdots \\qquad P_A = X_A\\,P_{\\text{total}}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Partial Pressure",
                "zh": "例题 2：分压"
              },
              "problem": {
                "en": "A rigid vessel contains $0.30$ mol $\\text{N}_2$ and $0.10$ mol $\\text{O}_2$ at a total pressure of $2.0$ atm. Find the partial pressure of $\\text{O}_2$.",
                "zh": "某刚性容器中含 $0.30$ mol $\\text{N}_2$ 和 $0.10$ mol $\\text{O}_2$，总压为 $2.0$ atm。求 $\\text{O}_2$ 的分压。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "X_{\\text{O}_2} = \\frac{0.10}{0.30 + 0.10} = 0.25"
                },
                {
                  "type": "math",
                  "tex": "P_{\\text{O}_2} = (0.25)(2.0\\ \\text{atm}) = 0.50\\ \\text{atm}"
                },
                {
                  "type": "p",
                  "en": "Notice the identity of the gases never mattered—only the mole ratio. Ideal gases are counted, not weighed.",
                  "zh": "注意气体的种类完全无关——只有摩尔比重要。理想气体是按个数计，不是按质量计。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Kinetic Molecular Theory and Maxwell-Boltzmann Distributions",
              "zh": "分子动理论与麦克斯韦-玻尔兹曼分布"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Gas particles are in constant, random, straight-line motion.",
                  "zh": "气体粒子作永不停息的、随机的直线运动。"
                },
                {
                  "en": "The particles’ own volume is negligible compared with the container volume.",
                  "zh": "粒子自身体积与容器体积相比可忽略不计。"
                },
                {
                  "en": "Particles exert no attractive or repulsive forces on each other; collisions are elastic (no kinetic energy lost).",
                  "zh": "粒子间无吸引或排斥作用；碰撞为弹性碰撞（动能不损失）。"
                },
                {
                  "en": "The average kinetic energy of the particles depends only on the Kelvin temperature.",
                  "zh": "粒子的平均动能只取决于开尔文温度。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Not all particles move at the same speed—speeds follow a Maxwell-Boltzmann distribution. Raising the temperature shifts the peak to higher speeds and flattens the curve (more particles in the fast tail). At a given temperature, all gases have the same average kinetic energy, so lighter particles must move faster on average: a curve for $\\text{He}$ peaks at a higher speed than one for $\\text{N}_2$ at the same $T$. Since $KE = \\tfrac{1}{2}mv^2$, equal energy with smaller mass forces a larger speed.",
              "zh": "并非所有粒子速度相同——速度服从麦克斯韦-玻尔兹曼分布。升高温度使峰向高速方向移动并使曲线变得扁平（快速「尾部」的粒子更多）。在同一温度下，所有气体的平均动能相同，因此较轻的粒子平均速度必然更快：同温下 $\\text{He}$ 的曲线峰值速度高于 $\\text{N}_2$。由 $KE = \\tfrac{1}{2}mv^2$ 可知，能量相同而质量更小，速度必然更大。"
            },
            {
              "type": "math",
              "tex": "KE_{\\text{avg}} = \\tfrac{3}{2}RT \\qquad \\text{(same for every gas at a given } T\\text{)}"
            },
            {
              "type": "h3",
              "en": "Real Gases: When the Ideal Model Breaks Down",
              "zh": "真实气体：理想模型何时失效"
            },
            {
              "type": "p",
              "en": "The ideal gas law fails when its two key assumptions fail. At high pressure, particles are squeezed close together, so their own volume is no longer negligible—the measured volume is larger than $nRT/P$ predicts. At low temperature, particles move slowly enough that intermolecular attractions (the same forces that govern condensation) tug particles inward before wall collisions, making the measured pressure lower than ideal. Gases with strong intermolecular forces, such as $\\text{NH}_3$ or $\\text{H}_2\\text{O}$, deviate the most; small nonpolar gases like $\\text{He}$ stay nearly ideal.",
              "zh": "当理想气体定律的两个核心假设不成立时，它就会失效。高压下粒子被挤得很近，其自身体积不再可忽略——实测体积大于 $nRT/P$ 的预测值。低温下粒子运动缓慢，分子间吸引力（正是支配凝结的那些作用力）在粒子撞壁前把它们向内拉，使实测压强低于理想值。分子间作用力强的气体（如 $\\text{NH}_3$、$\\text{H}_2\\text{O}$）偏差最大；小的非极性气体（如 $\\text{He}$）则几乎保持理想。"
            },
            {
              "type": "note",
              "en": "AP tip: When asked to justify non-ideal behavior, name the specific cause: “at high $P$, particle volume is non-negligible” or “at low $T$, attractive forces reduce wall-collision force.” Answers that just say “it is not ideal” earn no points—connect the deviation to particles and forces.",
              "zh": "AP 提示：解释非理想行为时要点明具体原因：「高压下粒子体积不可忽略」或「低温下吸引力削弱了撞壁的力度」。只说「它不理想」不得分——必须把偏差与粒子和作用力联系起来。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Under which conditions does a real gas behave most ideally?",
                "zh": "真实气体在哪种条件下最接近理想行为？"
              },
              "choices": [
                "high pressure and low temperature",
                "low pressure and high temperature",
                "high pressure and high temperature",
                "low pressure and low temperature"
              ],
              "answer": 1,
              "explanation": {
                "en": "Low pressure keeps particles far apart (own volume negligible), and high temperature gives them enough kinetic energy to overwhelm intermolecular attractions. High $P$/high $T$ is tempting because heat helps, but compression still makes particle volume significant.",
                "zh": "低压使粒子相距很远（自身体积可忽略），高温使其动能足以压倒分子间吸引力。「高压高温」有迷惑性——升温确实有帮助，但压缩仍会使粒子体积变得显著。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What volume, in liters, does $2.00$ mol of an ideal gas occupy at STP ($273$ K, $1.00$ atm)? Give 3 sig figs.",
                "zh": "$2.00$ mol 理想气体在 STP（$273$ K，$1.00$ atm）下占多少升？保留 3 位有效数字。"
              },
              "answer": "44.8",
              "accept": [
                "44.9",
                "44.80"
              ],
              "explanation": {
                "en": "One mole at STP occupies $22.4$ L (from $V = nRT/P$), so $2.00$ mol occupies $2.00 \\times 22.4 = 44.8$ L.",
                "zh": "STP 下 1 摩尔占 $22.4$ L（由 $V = nRT/P$ 得），故 $2.00$ mol 占 $2.00 \\times 22.4 = 44.8$ L。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Samples of $\\text{He}$ ($M = 4$ g/mol) and $\\text{N}_2$ ($M = 28$ g/mol) are at the same temperature. Which statement is true?",
                "zh": "同温下的 $\\text{He}$（$M = 4$ g/mol）与 $\\text{N}_2$（$M = 28$ g/mol）样品，下列哪项正确？"
              },
              "choices": [
                "They have the same average kinetic energy, and He has the higher average speed",
                "They have the same average speed, and He has the higher kinetic energy",
                "$\\text{N}_2$ has both higher speed and higher kinetic energy",
                "He has both lower speed and lower kinetic energy"
              ],
              "answer": 0,
              "explanation": {
                "en": "Average kinetic energy depends only on $T$, so it is equal. Since $KE = \\tfrac{1}{2}mv^2$, the lighter He must move faster to have the same energy. The “same speed” distractor confuses speed with energy.",
                "zh": "平均动能只取决于 $T$，故相等。由 $KE = \\tfrac{1}{2}mv^2$，更轻的 He 必须更快才能有相同能量。「速度相同」的选项混淆了速度与能量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When the temperature of a gas sample is increased, its Maxwell-Boltzmann speed distribution:",
                "zh": "升高气体温度时，其麦克斯韦-玻尔兹曼速度分布会："
              },
              "choices": [
                "shifts to lower speeds and gets taller",
                "does not change shape, only area",
                "gets narrower around the same peak speed",
                "shifts its peak to higher speeds and flattens"
              ],
              "answer": 3,
              "explanation": {
                "en": "Higher $T$ means higher average kinetic energy: the peak moves right and the curve broadens (flattens), while the total area—the number of particles—stays constant. The “taller” distractor forgets that area is fixed.",
                "zh": "温度升高意味着平均动能增大：峰右移且曲线变宽（变扁），而曲线下总面积——粒子总数——保持不变。「变高」的选项忽略了面积固定这一点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A vessel holds $2.0$ mol $\\text{N}_2$ and $3.0$ mol $\\text{O}_2$ at a total pressure of $5.0$ atm. What is the partial pressure of $\\text{O}_2$ in atm? Give 2 sig figs.",
                "zh": "容器中含 $2.0$ mol $\\text{N}_2$ 和 $3.0$ mol $\\text{O}_2$，总压 $5.0$ atm。$\\text{O}_2$ 的分压是多少 atm？保留 2 位有效数字。"
              },
              "answer": "3.0",
              "accept": [
                "3"
              ],
              "explanation": {
                "en": "$X_{\\text{O}_2} = 3.0/5.0 = 0.60$, so $P_{\\text{O}_2} = 0.60 \\times 5.0 = 3.0$ atm.",
                "zh": "$X_{\\text{O}_2} = 3.0/5.0 = 0.60$，故 $P_{\\text{O}_2} = 0.60 \\times 5.0 = 3.0$ atm。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which gas is expected to deviate most from ideal behavior at low temperature?",
                "zh": "低温下哪种气体偏离理想行为最严重？"
              },
              "choices": [
                "$\\text{He}$",
                "$\\text{NH}_3$",
                "$\\text{Ne}$",
                "$\\text{CH}_4$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\text{NH}_3$ is polar and hydrogen-bonds, so its strong intermolecular attractions pull particles together at low $T$. $\\text{CH}_4$ is tempting because it is larger than He, but its dispersion forces are far weaker than hydrogen bonding.",
                "zh": "$\\text{NH}_3$ 是极性分子且能形成氢键，低温下强的分子间吸引力把粒子拉近。$\\text{CH}_4$ 有迷惑性——它比 He 大，但其色散力远弱于氢键。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rigid container of gas at $300$ K exerts $1.5$ atm. If it is heated to $600$ K (constant $V$ and $n$), what is the new pressure in atm? Give 2 sig figs.",
                "zh": "刚性容器中的气体在 $300$ K 时压强为 $1.5$ atm。加热到 $600$ K（$V$、$n$ 不变）后新压强是多少 atm？保留 2 位有效数字。"
              },
              "answer": "3.0",
              "accept": [
                "3"
              ],
              "explanation": {
                "en": "At constant $V$, $P \\propto T$ (in kelvin). Doubling $T$ from $300$ to $600$ K doubles $P$: $1.5 \\times 2 = 3.0$ atm. Particles hit the walls both harder and more often.",
                "zh": "$V$ 不变时 $P \\propto T$（开尔文）。$T$ 从 $300$ 翻倍到 $600$ K，$P$ 也翻倍：$1.5 \\times 2 = 3.0$ atm。粒子撞壁更猛也更频繁。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At very high pressure, the measured molar volume of a real gas is larger than the ideal gas law predicts. The best explanation is:",
                "zh": "在极高压强下，真实气体的实测摩尔体积大于理想气体定律的预测值。最佳解释是："
              },
              "choices": [
                "attractive forces pull the particles together",
                "the gas begins to condense",
                "the volume of the particles themselves is no longer negligible",
                "collisions stop being elastic"
              ],
              "answer": 2,
              "explanation": {
                "en": "When particles are crowded, their own volume adds to the space the gas occupies, so $V_{\\text{real}} > V_{\\text{ideal}}$. Attractions (the tempting distractor) cause the opposite deviation—a smaller measured pressure or volume—and dominate at low $T$, not high $P$.",
                "zh": "粒子拥挤时，其自身体积计入气体所占空间，故 $V_{\\text{real}} > V_{\\text{ideal}}$。吸引力（迷惑选项）导致相反方向的偏差——实测压强或体积偏小——且在低温而非高压下起主导作用。"
              }
            }
          ]
        },
        {
          "id": "solutions-and-mixtures",
          "title": "Solutions, Mixtures, and Separations",
          "titleZh": "溶液、混合物与分离",
          "content": [
            {
              "type": "h2",
              "en": "Solutions: Homogeneous Mixtures at the Particle Level",
              "zh": "溶液：粒子层面的均匀混合物"
            },
            {
              "type": "p",
              "en": "A solution is a homogeneous mixture: the solute particles are dispersed uniformly among solvent particles, down to the molecular scale. Unlike a compound, a mixture has no fixed ratio and its components keep their identities—which is exactly why physical techniques like chromatography and distillation can pull them back apart. The AP exam constantly asks you to connect the macroscopic (concentration, separation) to the particulate (which particles are present and what forces act between them).",
              "zh": "溶液是均匀混合物：溶质粒子均匀地分散在溶剂粒子之间，一直均匀到分子尺度。与化合物不同，混合物没有固定比例，各组分保留自身的本性——这正是色谱、蒸馏等物理方法能把它们重新分开的原因。AP 考试反复要求你把宏观（浓度、分离）与微观粒子层面（存在哪些粒子、粒子间有什么作用力）联系起来。"
            },
            {
              "type": "h3",
              "en": "Molarity and Dilution",
              "zh": "摩尔浓度与稀释"
            },
            {
              "type": "p",
              "en": "The standard concentration unit is molarity: moles of solute per liter of solution. When you dilute a solution, you add solvent but the moles of solute do not change—that single fact gives the dilution equation.",
              "zh": "标准浓度单位是摩尔浓度：每升溶液所含溶质的摩尔数。稀释溶液时只是加入溶剂，溶质的摩尔数不变——仅凭这一事实就能得到稀释公式。"
            },
            {
              "type": "math",
              "tex": "M = \\frac{n_{\\text{solute}}\\ (\\text{mol})}{V_{\\text{solution}}\\ (\\text{L})}"
            },
            {
              "type": "math",
              "tex": "M_1V_1 = M_2V_2 \\qquad (\\text{moles of solute constant during dilution})"
            },
            {
              "type": "note",
              "en": "Common mistake: molarity uses liters, but lab glassware reads milliliters. Convert $250$ mL to $0.250$ L before dividing. In $M_1V_1 = M_2V_2$ alone you may keep both volumes in mL, since the units cancel—but never mix mL on one side with L on the other.",
              "zh": "常见错误：摩尔浓度用升，而实验玻璃仪器读数是毫升。相除前要把 $250$ mL 换成 $0.250$ L。仅在 $M_1V_1 = M_2V_2$ 中两边体积可都用 mL（单位可约掉）——但绝不能一边用 mL、另一边用 L。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Preparing a Dilute Solution",
                "zh": "例题 1：配制稀溶液"
              },
              "problem": {
                "en": "What volume of $6.0\\ M$ $\\text{HCl}$ stock solution is needed to prepare $250$ mL of $0.60\\ M$ $\\text{HCl}$?",
                "zh": "需要多少体积的 $6.0\\ M$ $\\text{HCl}$ 储备液才能配制 $250$ mL $0.60\\ M$ 的 $\\text{HCl}$？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "V_1 = \\frac{M_2V_2}{M_1} = \\frac{(0.60\\ M)(250\\ \\text{mL})}{6.0\\ M} = 25\\ \\text{mL}"
                },
                {
                  "type": "p",
                  "en": "Measure $25$ mL of stock, then add water to a total volume of $250$ mL. The moles of $\\text{HCl}$—$0.15$ mol—are identical before and after; only the amount of water changed.",
                  "zh": "量取 $25$ mL 储备液，然后加水至总体积 $250$ mL。$\\text{HCl}$ 的摩尔数——$0.15$ mol——前后完全相同；改变的只是水量。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Particulate Pictures and Like Dissolves Like",
              "zh": "粒子图像与相似相溶"
            },
            {
              "type": "p",
              "en": "A correct particulate drawing of aqueous $\\text{NaCl}$ shows separated $\\text{Na}^+$ and $\\text{Cl}^-$ ions—no NaCl pairs—each surrounded by a shell of oriented water molecules: oxygen (partial negative) pointing toward $\\text{Na}^+$, hydrogens (partial positive) pointing toward $\\text{Cl}^-$. Molecular solutes like sugar stay as intact neutral molecules. Diagrams that show undissociated ionic “molecules” floating in water are a classic AP wrong answer.",
              "zh": "$\\text{NaCl}$ 水溶液的正确粒子图应画出彼此分离的 $\\text{Na}^+$ 和 $\\text{Cl}^-$ 离子——没有 NaCl 离子对——每个离子被一圈定向排列的水分子包围：氧（部分负电）指向 $\\text{Na}^+$，氢（部分正电）指向 $\\text{Cl}^-$。蔗糖等分子型溶质则保持完整的中性分子。画出未解离的离子「分子」漂浮在水中，是 AP 考试的经典错误选项。"
            },
            {
              "type": "p",
              "en": "Whether something dissolves comes down to the intermolecular forces you have already studied: dissolution is favorable when solute–solvent attractions are comparable to the solute–solute and solvent–solvent attractions they replace. Hence “like dissolves like”: polar and ionic solutes dissolve in polar solvents such as water; nonpolar solutes dissolve in nonpolar solvents such as hexane. Oil and water stay separate because water molecules attract each other (hydrogen bonding) far more strongly than they attract nonpolar oil molecules.",
              "zh": "能否溶解归结为你已学过的分子间作用力：当溶质-溶剂之间的吸引力与被取代的溶质-溶质、溶剂-溶剂吸引力相当时，溶解才有利。因此「相似相溶」：极性和离子型溶质溶于水等极性溶剂；非极性溶质溶于己烷等非极性溶剂。油水不相溶，是因为水分子彼此间的吸引（氢键）远强于水对非极性油分子的吸引。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Ionic or polar solute + polar solvent: dissolves (ion-dipole or dipole-dipole attractions form).",
                  "zh": "离子型或极性溶质 + 极性溶剂：可溶（形成离子-偶极或偶极-偶极吸引）。"
                },
                {
                  "en": "Nonpolar solute + nonpolar solvent: dissolves (dispersion forces on both sides are similar).",
                  "zh": "非极性溶质 + 非极性溶剂：可溶（双方的色散力相近）。"
                },
                {
                  "en": "Nonpolar solute + polar solvent: insoluble (solvent-solvent hydrogen bonds would have to break for weak replacements).",
                  "zh": "非极性溶质 + 极性溶剂：难溶（需拆开溶剂间氢键，换来的却是弱吸引）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Separations: Chromatography and Distillation",
              "zh": "分离方法：色谱与蒸馏"
            },
            {
              "type": "p",
              "en": "Chromatography separates components by their competing attractions to a stationary phase (the paper or column packing) and a mobile phase (the solvent that flows). A component strongly attracted to the mobile phase travels far; one strongly attracted to the stationary phase lags behind. In paper chromatography, the result is quantified as $R_f = (\\text{distance moved by component})/(\\text{distance moved by solvent front})$; a larger $R_f$ means weaker attraction to the paper relative to the solvent.",
              "zh": "色谱法根据各组分对固定相（滤纸或柱填料）和流动相（流动的溶剂）吸引力的竞争来分离。与流动相吸引强的组分走得远；与固定相吸引强的组分落在后面。纸色谱中用 $R_f = （\\text{组分移动距离}）/（\\text{溶剂前沿移动距离}）$ 定量表示；$R_f$ 越大，说明该组分对纸的吸引相对溶剂越弱。"
            },
            {
              "type": "p",
              "en": "Distillation separates liquids by boiling point. The liquid with weaker intermolecular forces has the higher vapor pressure and lower boiling point, so it vaporizes first, travels up the column, and condenses in the collection flask. Both techniques work only because the components of a mixture keep their own properties—and both are explained on the AP exam in terms of relative strengths of intermolecular attractions, never just “one is lighter.”",
              "zh": "蒸馏按沸点分离液体。分子间作用力较弱的液体蒸气压较高、沸点较低，因此先汽化，沿蒸馏柱上升并在接收瓶中冷凝。这两种技术之所以可行，正是因为混合物的各组分保留自身性质——在 AP 考试中，二者都必须用分子间吸引力的相对强弱来解释，绝不能只说「某组分更轻」。"
            },
            {
              "type": "note",
              "en": "AP tip: Free-response answers about separations must name the interaction. Write “dye B has stronger hydrogen bonding with the polar stationary phase, so it travels a shorter distance,” not “dye B likes the paper more.” Points come from identifying particles and forces.",
              "zh": "AP 提示：关于分离的简答必须点明相互作用。要写「染料 B 与极性固定相之间氢键更强，因此移动距离更短」，而不是「染料 B 更喜欢纸」。得分点在于指出粒子和作用力。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Interpreting a Chromatogram",
                "zh": "例题 2：解读色谱图"
              },
              "problem": {
                "en": "Two dyes are separated by paper chromatography with a polar solvent on polar paper. Dye A has $R_f = 0.85$; dye B has $R_f = 0.20$. Which dye is more strongly attracted to the paper, and what can you infer about their polarities?",
                "zh": "用极性溶剂在极性滤纸上分离两种染料。染料 A 的 $R_f = 0.85$；染料 B 的 $R_f = 0.20$。哪种染料对滤纸吸引更强？能推断出它们极性如何？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Dye B barely moved: it spends most of its time adsorbed to the stationary phase, so B is more strongly attracted to the paper.",
                  "zh": "染料 B 几乎没有移动：它大部分时间吸附在固定相上，因此 B 对滤纸的吸引更强。"
                },
                {
                  "type": "p",
                  "en": "Since the paper is polar, dye B likely has stronger dipole interactions or hydrogen bonding—it is the more polar dye. Dye A, which rode along with the solvent, interacts with the paper more weakly. Note that if the stationary phase were nonpolar, the ranking logic would flip: always argue from the specific attractions, not from a memorized rule.",
                  "zh": "滤纸是极性的，故染料 B 很可能有更强的偶极相互作用或氢键——是极性更强的染料。随溶剂前行的染料 A 与滤纸相互作用较弱。注意若固定相是非极性的，排序逻辑就会反转：一定要从具体吸引力出发论证，而不是背结论。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the molarity of a solution containing $0.50$ mol $\\text{NaCl}$ in $250$ mL of solution?",
                "zh": "$250$ mL 溶液中含 $0.50$ mol $\\text{NaCl}$，其摩尔浓度是多少？"
              },
              "choices": [
                "$0.50\\ M$",
                "$2.0\\ M$",
                "$0.125\\ M$",
                "$1.0\\ M$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$M = 0.50\\ \\text{mol} / 0.250\\ \\text{L} = 2.0\\ M$. The $0.125\\ M$ distractor comes from multiplying by $0.250$ L instead of dividing; $0.50\\ M$ comes from forgetting to convert mL to L.",
                "zh": "$M = 0.50\\ \\text{mol} / 0.250\\ \\text{L} = 2.0\\ M$。$0.125\\ M$ 是误将摩尔数乘以 $0.250$ L 所得；$0.50\\ M$ 则是忘了把 mL 换成 L。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many moles of solute are in $2.0$ L of a $0.30\\ M$ solution? Give 2 sig figs.",
                "zh": "$2.0$ L $0.30\\ M$ 溶液中含多少摩尔溶质？保留 2 位有效数字。"
              },
              "answer": "0.60",
              "accept": [
                "0.6",
                ".6",
                ".60"
              ],
              "explanation": {
                "en": "$n = MV = (0.30\\ M)(2.0\\ \\text{L}) = 0.60$ mol.",
                "zh": "$n = MV = (0.30\\ M)(2.0\\ \\text{L}) = 0.60$ mol。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which particulate diagram best represents aqueous $\\text{NaCl}$?",
                "zh": "哪种粒子图最能正确表示 $\\text{NaCl}$ 水溶液？"
              },
              "choices": [
                "intact NaCl units floating among water molecules",
                "Na and Cl atoms bonded to water molecules covalently",
                "separate $\\text{Na}^+$ and $\\text{Cl}^-$ ions, each surrounded by oriented water molecules",
                "NaCl crystals sitting at the bottom, pure water above"
              ],
              "answer": 2,
              "explanation": {
                "en": "A strong electrolyte dissociates completely: free $\\text{Na}^+$ and $\\text{Cl}^-$ ions with water oxygens facing the cation and hydrogens facing the anion (ion-dipole attractions). The “intact units” picture is the classic wrong answer—it describes a molecular solute, not an ionic one.",
                "zh": "强电解质完全解离：自由的 $\\text{Na}^+$ 与 $\\text{Cl}^-$ 离子，水的氧朝向阳离子、氢朝向阴离子（离子-偶极吸引）。「完整单元」图是经典错误答案——那描述的是分子型溶质，不是离子型。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Iodine, $\\text{I}_2$, is a nonpolar molecule. In which solvent is it most soluble?",
                "zh": "碘 $\\text{I}_2$ 是非极性分子。它在哪种溶剂中溶解度最大？"
              },
              "choices": [
                "water, $\\text{H}_2\\text{O}$",
                "ammonia, $\\text{NH}_3$",
                "methanol, $\\text{CH}_3\\text{OH}$",
                "hexane, $\\text{C}_6\\text{H}_{14}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Like dissolves like: nonpolar $\\text{I}_2$ dissolves best in nonpolar hexane, where dispersion-force attractions on both sides are comparable. In water, the hydrogen bonds among water molecules would have to break for only weak $\\text{I}_2$-water attractions in return.",
                "zh": "相似相溶：非极性的 $\\text{I}_2$ 在非极性的己烷中溶解最好，双方的色散力吸引相当。在水中则须拆开水分子间的氢键，换来的却只是微弱的 $\\text{I}_2$-水吸引。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "To what final volume, in mL, must $10.0$ mL of $2.0\\ M$ solution be diluted to make it $0.50\\ M$? Give an integer.",
                "zh": "要把 $10.0$ mL $2.0\\ M$ 溶液稀释成 $0.50\\ M$，最终体积应为多少 mL？请填一个整数。"
              },
              "answer": "40",
              "accept": [
                "40.0",
                "40."
              ],
              "explanation": {
                "en": "$V_2 = M_1V_1/M_2 = (2.0)(10.0)/(0.50) = 40$ mL. Diluting to one quarter of the concentration requires four times the volume.",
                "zh": "$V_2 = M_1V_1/M_2 = (2.0)(10.0)/(0.50) = 40$ mL。浓度降为四分之一，体积须变为四倍。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In paper chromatography, the component that travels the farthest is the one that:",
                "zh": "纸色谱中，移动最远的组分是："
              },
              "choices": [
                "is attracted most weakly to the stationary phase relative to the mobile phase",
                "has the smallest molar mass",
                "is the most volatile",
                "is the most concentrated in the mixture"
              ],
              "answer": 0,
              "explanation": {
                "en": "Chromatography is a competition of attractions: weak attraction to the stationary phase (and strong to the mobile phase) means the component rides along with the solvent. Molar mass is the tempting distractor, but separation depends on intermolecular attractions, not size alone.",
                "zh": "色谱是吸引力的竞争：对固定相吸引弱（对流动相吸引强）的组分随溶剂前行。摩尔质量是迷惑选项——分离取决于分子间吸引力，而非仅仅大小。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A mixture of ethanol (b.p. $78\\ °C$) and water (b.p. $100\\ °C$) is distilled. The vapor collected first is enriched in ethanol because ethanol:",
                "zh": "蒸馏乙醇（沸点 $78\\ °C$）与水（沸点 $100\\ °C$）的混合物时，最先收集的蒸气富含乙醇，因为乙醇："
              },
              "choices": [
                "has stronger intermolecular forces than water",
                "has weaker overall intermolecular attractions, so a higher vapor pressure",
                "has a smaller molar mass than water",
                "reacts with water during boiling"
              ],
              "answer": 1,
              "explanation": {
                "en": "A lower boiling point means the liquid’s particles escape to the vapor more easily—weaker net intermolecular attractions and higher vapor pressure. The molar-mass distractor is backwards logic: ethanol ($46$ g/mol) is heavier than water ($18$ g/mol) yet boils lower, proving forces, not mass, control boiling point.",
                "zh": "沸点较低说明液体粒子更容易逸出到气相——总的分子间吸引力较弱、蒸气压较高。摩尔质量选项逻辑不通：乙醇（$46$ g/mol）比水（$18$ g/mol）重却沸点更低，恰好证明控制沸点的是作用力而非质量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $5.0$ mL sample of $1.2\\ M$ dye solution is diluted to $60.0$ mL. What is the new molarity? Give 2 sig figs.",
                "zh": "取 $5.0$ mL $1.2\\ M$ 染料溶液稀释至 $60.0$ mL。新的摩尔浓度是多少？保留 2 位有效数字。"
              },
              "answer": "0.10",
              "accept": [
                "0.1",
                ".1",
                ".10"
              ],
              "explanation": {
                "en": "$M_2 = M_1V_1/V_2 = (1.2)(5.0)/(60.0) = 0.10\\ M$. The volume grew by a factor of 12, so the concentration fell by a factor of 12.",
                "zh": "$M_2 = M_1V_1/V_2 = (1.2)(5.0)/(60.0) = 0.10\\ M$。体积增大 12 倍，浓度就降低 12 倍。"
              }
            }
          ]
        },
        {
          "id": "spectroscopy-and-light",
          "title": "Spectroscopy and the Interaction of Light with Matter",
          "titleZh": "光谱学与光与物质的相互作用",
          "content": [
            {
              "type": "h2",
              "en": "Photons: Light as Packets of Energy",
              "zh": "光子：能量的「小包裹」"
            },
            {
              "type": "p",
              "en": "Light delivers its energy in discrete packets called photons. The energy of a single photon is proportional to the light’s frequency, and frequency and wavelength are tied together by the speed of light. High frequency (short wavelength) means high-energy photons; low frequency (long wavelength) means low-energy photons.",
              "zh": "光以称为光子的离散「能量包」传递能量。单个光子的能量与光的频率成正比，而频率与波长通过光速联系在一起。高频（短波长）意味着高能光子；低频（长波长）意味着低能光子。"
            },
            {
              "type": "math",
              "tex": "E = h\\nu \\qquad h = 6.626 \\times 10^{-34}\\ \\text{J·s}"
            },
            {
              "type": "math",
              "tex": "c = \\lambda\\nu \\qquad c = 3.00 \\times 10^{8}\\ \\text{m/s} \\quad \\Rightarrow \\quad E = \\frac{hc}{\\lambda}"
            },
            {
              "type": "h3",
              "en": "The Electromagnetic Spectrum and Molecules",
              "zh": "电磁波谱与分子"
            },
            {
              "type": "p",
              "en": "Different regions of the electromagnetic spectrum carry photons of very different energies, and each energy range matches a different kind of molecular motion. The AP exam expects you to pair each region with its effect:",
              "zh": "电磁波谱的不同区域携带能量差异极大的光子，每个能量范围对应一种不同的分子运动。AP 考试要求你把每个波段与其效应对应起来："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Microwave photons (lowest energy of the three) make molecules rotate.",
                  "zh": "微波光子（三者中能量最低）使分子转动。"
                },
                {
                  "en": "Infrared (IR) photons make bonds vibrate—stretching and bending.",
                  "zh": "红外（IR）光子使化学键振动——伸缩与弯曲。"
                },
                {
                  "en": "Ultraviolet and visible (UV-vis) photons, the most energetic, promote electrons to higher energy levels (electronic transitions); far-UV photons can even ionize atoms or break bonds.",
                  "zh": "紫外与可见（UV-vis）光子能量最高，可把电子激发到更高能级（电子跃迁）；远紫外光子甚至能使原子电离或断键。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: memorize the energy order microwave $<$ IR $<$ visible $<$ UV and the matching motions rotation $<$ vibration $<$ electronic transition. A frequent multiple-choice question gives a wavelength and asks what happens to the molecule that absorbs it.",
              "zh": "AP 提示：记住能量顺序 微波 $<$ 红外 $<$ 可见 $<$ 紫外，以及对应的运动 转动 $<$ 振动 $<$ 电子跃迁。选择题常给出一个波长，问吸收它的分子会发生什么。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Energy of a Photon",
                "zh": "例题 1：光子的能量"
              },
              "problem": {
                "en": "Calculate the energy of one photon of violet light with wavelength $400.$ nm.",
                "zh": "计算波长为 $400.$ nm 的紫光单个光子的能量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Convert the wavelength to meters ($400.\\ \\text{nm} = 4.00 \\times 10^{-7}\\ \\text{m}$), then apply $E = hc/\\lambda$.",
                  "zh": "先把波长换成米（$400.\\ \\text{nm} = 4.00 \\times 10^{-7}\\ \\text{m}$），再用 $E = hc/\\lambda$。"
                },
                {
                  "type": "math",
                  "tex": "E = \\frac{(6.626 \\times 10^{-34}\\ \\text{J·s})(3.00 \\times 10^{8}\\ \\text{m/s})}{4.00 \\times 10^{-7}\\ \\text{m}} = 4.97 \\times 10^{-19}\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "This is the energy of one photon. For a mole of photons, multiply by $N_A$: about $299$ kJ/mol—enough to break some chemical bonds, which is why UV light causes photochemical damage.",
                  "zh": "这是单个光子的能量。1 摩尔光子的能量再乘 $N_A$：约 $299$ kJ/mol——足以断开某些化学键，这正是紫外线造成光化学损伤的原因。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Photoelectric Effect",
              "zh": "光电效应"
            },
            {
              "type": "p",
              "en": "Shining light on a metal surface can eject electrons—but only if each individual photon carries enough energy. Below a threshold frequency, no electrons are ejected no matter how intense (bright) the light: many weak photons never add up to one strong hit. Above the threshold, the extra photon energy becomes kinetic energy of the ejected electron, and increasing intensity ejects more electrons (each with the same energy). This all-or-nothing behavior is the key evidence that light energy comes in quantized photons.",
              "zh": "光照射金属表面可以打出电子——但前提是每个光子单独携带足够的能量。低于阈值频率时，无论光多强（多亮）都打不出电子：许多弱光子永远凑不成一次强撞击。高于阈值时，多余的光子能量转化为逸出电子的动能，而增大光强只会打出更多电子（每个电子能量相同）。这种「全或无」的行为是光能以量子化光子形式存在的关键证据。"
            },
            {
              "type": "math",
              "tex": "KE_{\\text{electron}} = h\\nu - \\phi \\qquad (\\phi = \\text{work function, minimum energy to eject an electron})"
            },
            {
              "type": "h3",
              "en": "Beer-Lambert Law and Spectrophotometry",
              "zh": "比尔-朗伯定律与分光光度法"
            },
            {
              "type": "p",
              "en": "A spectrophotometer measures how much light a solution absorbs. The Beer-Lambert law says absorbance is directly proportional to concentration—the single most-used lab relationship in AP Chemistry.",
              "zh": "分光光度计测量溶液吸收了多少光。比尔-朗伯定律指出吸光度与浓度成正比——这是 AP 化学实验中使用最频繁的关系式。"
            },
            {
              "type": "math",
              "tex": "A = \\varepsilon b c"
            },
            {
              "type": "p",
              "en": "Here $\\varepsilon$ is the molar absorptivity (how strongly the substance absorbs, in $M^{-1}\\text{cm}^{-1}$), $b$ is the path length of the cuvette (usually $1.00$ cm), and $c$ is the molar concentration. In practice you build a calibration curve: measure $A$ for several standards of known concentration, plot $A$ versus $c$, and get a straight line through the origin. An unknown’s concentration is read off the line from its measured absorbance. Measurements are made at the wavelength of maximum absorbance ($\\lambda_{\\text{max}}$), which for a colored solution is the complement of the color you see—a red solution absorbs green light.",
              "zh": "其中 $\\varepsilon$ 是摩尔吸光系数（物质吸光能力的强弱，单位 $M^{-1}\\text{cm}^{-1}$），$b$ 是比色皿光程（通常 $1.00$ cm），$c$ 是摩尔浓度。实际操作中要绘制校准曲线：测量几个已知浓度标准液的 $A$，作 $A$ 对 $c$ 的图，得到一条过原点的直线。由未知液的吸光度即可在直线上读出其浓度。测量在最大吸收波长（$\\lambda_{\\text{max}}$）下进行——有色溶液吸收的是其呈现颜色的互补色：红色溶液吸收的是绿光。"
            },
            {
              "type": "note",
              "en": "AP tip: lab questions love Beer-Lambert error analysis. Fingerprints or bubbles on the cuvette scatter light and raise the apparent absorbance, overstating concentration. If the unknown reads above your highest standard, dilute it and re-measure—extrapolating beyond the calibration line is not valid.",
              "zh": "AP 提示：实验题酷爱比尔-朗伯误差分析。比色皿上的指纹或气泡会散射光、抬高表观吸光度，导致浓度被高估。若未知液读数超过最高标准液，应先稀释再测——把校准线外推是不合理的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Concentration from Absorbance",
                "zh": "例题 2：由吸光度求浓度"
              },
              "problem": {
                "en": "A blue dye has $\\varepsilon = 150\\ M^{-1}\\text{cm}^{-1}$ at $\\lambda_{\\text{max}}$. In a $1.00$ cm cuvette its solution reads $A = 0.30$. Find the concentration.",
                "zh": "某蓝色染料在 $\\lambda_{\\text{max}}$ 处 $\\varepsilon = 150\\ M^{-1}\\text{cm}^{-1}$。在 $1.00$ cm 比色皿中其溶液吸光度 $A = 0.30$。求浓度。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "c = \\frac{A}{\\varepsilon b} = \\frac{0.30}{(150\\ M^{-1}\\text{cm}^{-1})(1.00\\ \\text{cm})} = 2.0 \\times 10^{-3}\\ M"
                },
                {
                  "type": "p",
                  "en": "Check the logic: absorbance is unitless, so $M^{-1}\\text{cm}^{-1} \\times \\text{cm} \\times M$ must cancel—and it does. If this dye were diluted to half the concentration, $A$ would drop to exactly $0.15$, because $A \\propto c$.",
                  "zh": "检查逻辑：吸光度无量纲，所以 $M^{-1}\\text{cm}^{-1} \\times \\text{cm} \\times M$ 必须约掉——确实如此。若将该染料稀释到一半浓度，$A$ 会恰好降到 $0.15$，因为 $A \\propto c$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Absorption of which type of radiation causes molecular bonds to vibrate?",
                "zh": "吸收哪种辐射会引起化学键振动？"
              },
              "choices": [
                "ultraviolet",
                "microwave",
                "infrared",
                "X-ray"
              ],
              "answer": 2,
              "explanation": {
                "en": "IR photon energies match the spacing of vibrational energy levels. Microwaves (lower energy) cause rotation; UV-visible (higher energy) causes electronic transitions. Microwave is the tempting distractor since microwave ovens heat food—but they do so by rotating water molecules.",
                "zh": "红外光子的能量与振动能级间距相当。微波（能量更低）引起转动；紫外-可见（能量更高）引起电子跃迁。微波是迷惑选项——微波炉确实加热食物，但那是通过使水分子转动实现的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which photon carries the most energy?",
                "zh": "哪种光子携带的能量最大？"
              },
              "choices": [
                "an ultraviolet photon",
                "a visible-light photon",
                "an infrared photon",
                "a microwave photon"
              ],
              "answer": 0,
              "explanation": {
                "en": "$E = h\\nu$: energy rises with frequency, and UV has the highest frequency (shortest wavelength) of the four. This is why UV, not visible light, causes sunburn and bond breaking.",
                "zh": "$E = h\\nu$：能量随频率升高，四者中紫外频率最高（波长最短）。这正是晒伤和断键由紫外而非可见光引起的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A photon has frequency $\\nu = 6.0 \\times 10^{14}$ Hz. Using $E = h\\nu$ with $h = 6.626 \\times 10^{-34}$ J·s, its energy is $C \\times 10^{-19}$ J. Give the coefficient $C$ to 2 sig figs.",
                "zh": "某光子频率 $\\nu = 6.0 \\times 10^{14}$ Hz。用 $E = h\\nu$（$h = 6.626 \\times 10^{-34}$ J·s）计算，其能量为 $C \\times 10^{-19}$ J。给出系数 $C$，保留 2 位有效数字。"
              },
              "answer": "4.0",
              "accept": [
                "4",
                "3.98",
                "3.9"
              ],
              "explanation": {
                "en": "$E = (6.626 \\times 10^{-34})(6.0 \\times 10^{14}) = 3.98 \\times 10^{-19} \\approx 4.0 \\times 10^{-19}$ J. This is a visible-light photon, in the range that drives electronic transitions.",
                "zh": "$E = (6.626 \\times 10^{-34})(6.0 \\times 10^{14}) = 3.98 \\times 10^{-19} \\approx 4.0 \\times 10^{-19}$ J。这是可见光光子，处于引起电子跃迁的能量范围。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Light below a metal’s threshold frequency shines on its surface, and the intensity is then greatly increased. What happens?",
                "zh": "用低于金属阈值频率的光照射其表面，随后大幅增强光强。会发生什么？"
              },
              "choices": [
                "electrons are ejected with high kinetic energy",
                "still no electrons are ejected",
                "electrons are ejected once enough energy accumulates",
                "the threshold frequency decreases"
              ],
              "answer": 1,
              "explanation": {
                "en": "Each photon still lacks the energy to free an electron, and one electron absorbs one photon—intensity only adds more inadequate photons. The “energy accumulates” distractor describes the classical wave prediction that the photoelectric effect famously disproved.",
                "zh": "每个光子仍不足以打出电子，且一个电子一次只吸收一个光子——增大光强只是增加更多「不够格」的光子。「能量累积」选项描述的是经典波动理论的预测，而光电效应恰恰推翻了它。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $A = \\varepsilon bc$ with $\\varepsilon = 250\\ M^{-1}\\text{cm}^{-1}$, $b = 1.00$ cm, and $c = 0.0020\\ M$, what is the absorbance? Give 2 sig figs.",
                "zh": "用 $A = \\varepsilon bc$，其中 $\\varepsilon = 250\\ M^{-1}\\text{cm}^{-1}$，$b = 1.00$ cm，$c = 0.0020\\ M$，吸光度是多少？保留 2 位有效数字。"
              },
              "answer": "0.50",
              "accept": [
                "0.5",
                ".5",
                ".50"
              ],
              "explanation": {
                "en": "$A = (250)(1.00)(0.0020) = 0.50$. Absorbance has no units—all the units cancel.",
                "zh": "$A = (250)(1.00)(0.0020) = 0.50$。吸光度无单位——所有单位都约掉了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solution with absorbance $A = 0.80$ is diluted to exactly half its original concentration in the same cuvette. Its new absorbance is:",
                "zh": "某溶液吸光度 $A = 0.80$，在同一比色皿中稀释到原浓度的一半。新吸光度为："
              },
              "choices": [
                "$0.80$",
                "$1.60$",
                "$0.20$",
                "$0.40$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Beer-Lambert: $A \\propto c$ at fixed $\\varepsilon$ and $b$, so halving $c$ halves $A$ to $0.40$. The $0.20$ distractor assumes $A$ depends on $c^2$; it is linear, which is exactly why calibration curves are straight lines.",
                "zh": "比尔-朗伯定律：$\\varepsilon$、$b$ 固定时 $A \\propto c$，浓度减半则 $A$ 减半为 $0.40$。$0.20$ 选项误以为 $A$ 与 $c^2$ 有关；实际是线性关系，这正是校准曲线为直线的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a spectrophotometry lab, a $0.100\\ M$ standard reads $A = 0.500$. An unknown of the same substance reads $A = 0.250$ in the same cuvette. What is its concentration in $M$? Give 2 sig figs.",
                "zh": "分光光度实验中，$0.100\\ M$ 标准液的吸光度 $A = 0.500$。同一物质的未知液在同一比色皿中 $A = 0.250$。其浓度是多少 $M$？保留 2 位有效数字。"
              },
              "answer": "0.050",
              "accept": [
                "0.05",
                ".05",
                ".050"
              ],
              "explanation": {
                "en": "Since $A \\propto c$, the unknown has half the standard’s absorbance and therefore half its concentration: $0.050\\ M$. This proportional reasoning is exactly what a calibration curve automates.",
                "zh": "因为 $A \\propto c$，未知液吸光度是标准液的一半，浓度也就是一半：$0.050\\ M$。这种比例推理正是校准曲线所自动完成的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why is a spectrophotometric measurement made at the wavelength of maximum absorbance, $\\lambda_{\\text{max}}$?",
                "zh": "为什么分光光度测量要在最大吸收波长 $\\lambda_{\\text{max}}$ 处进行？"
              },
              "choices": [
                "it is the wavelength where the solution transmits the most light",
                "it is the color the solution appears to the eye",
                "absorbance changes most per unit concentration there, maximizing sensitivity and minimizing error",
                "the Beer-Lambert law only holds at that wavelength"
              ],
              "answer": 2,
              "explanation": {
                "en": "At $\\lambda_{\\text{max}}$ the slope $\\varepsilon$ is largest, so small concentration differences give the biggest, most measurable absorbance differences. The “color you see” distractor is backwards: a solution appears the color it transmits, and absorbs the complementary color.",
                "zh": "在 $\\lambda_{\\text{max}}$ 处斜率 $\\varepsilon$ 最大，微小的浓度差异产生最大、最易测量的吸光度差异。「肉眼所见颜色」选项正好说反了：溶液呈现的是它透过的颜色，吸收的是互补色。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-chemical-reactions",
      "title": "Unit 4: Chemical Reactions",
      "titleZh": "第四单元：化学反应",
      "lessons": [
        {
          "id": "reactions-and-net-ionic-equations",
          "title": "Chemical Reactions and Net Ionic Equations",
          "titleZh": "化学反应与净离子方程式",
          "content": [
            {
              "type": "h2",
              "en": "Recognizing and Representing Chemical Change",
              "zh": "识别与表示化学变化"
            },
            {
              "type": "p",
              "en": "A physical change alters form but not identity: ice melting is still $\\text{H}_2\\text{O}$, and dissolving sugar leaves sugar molecules intact. A chemical change produces new substances—bonds break and new bonds form. Evidence includes a color change, gas bubbles from a mixed solution, a precipitate (a new insoluble solid), or an unexpected temperature change. On the AP exam, the decisive question is always particulate: did the bonding arrangement of atoms change?",
              "zh": "物理变化只改变形态而不改变本质：冰融化后仍是 $\\text{H}_2\\text{O}$，糖溶解后糖分子依然完整。化学变化则生成新物质——旧键断裂、新键形成。其证据包括颜色变化、混合溶液中冒出气泡、生成沉淀（新的不溶固体）或出现意外的温度变化。在 AP 考试中，判断的关键始终在粒子层面：原子的成键方式改变了吗？"
            },
            {
              "type": "h3",
              "en": "Balancing Equations",
              "zh": "配平方程式"
            },
            {
              "type": "p",
              "en": "Atoms are conserved in every reaction, so a chemical equation must have the same number of each kind of atom on both sides. Balance by adjusting coefficients only—never subscripts, because changing a subscript changes the substance. A reliable order: balance metals first, then nonmetals, then H and O last, and clear any fractions at the end.",
              "zh": "任何反应中原子都是守恒的，因此化学方程式两边每种原子的数目必须相等。配平只能调整系数——绝不能改下标，因为改下标就改变了物质本身。可靠的顺序是：先配金属，再配非金属，最后配 H 和 O，最后消去分数。"
            },
            {
              "type": "math",
              "tex": "\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}"
            },
            {
              "type": "h3",
              "en": "Solubility Rules and Precipitation",
              "zh": "溶解性规律与沉淀反应"
            },
            {
              "type": "p",
              "en": "When two soluble ionic solutions are mixed, a precipitation reaction occurs if a pair of ions forms an insoluble compound. The current AP exam requires you to memorize only one rule: all salts of $\\text{Na}^+$, $\\text{K}^+$ (and other alkali metals), $\\text{NH}_4^+$, and $\\text{NO}_3^-$ are soluble. Other solubility information will be given, but classic insoluble products such as $\\text{AgCl}$, $\\text{BaSO}_4$, and most carbonates and hydroxides appear constantly in practice problems.",
              "zh": "两种可溶离子化合物的溶液混合时，如果某对离子能形成不溶化合物，就发生沉淀反应。现行 AP 考试只要求记住一条规律：$\\text{Na}^+$、$\\text{K}^+$（及其他碱金属）、$\\text{NH}_4^+$ 和 $\\text{NO}_3^-$ 的盐都可溶。其他溶解性信息会在题中给出，但 $\\text{AgCl}$、$\\text{BaSO}_4$ 以及大多数碳酸盐和氢氧化物等经典不溶物在练习题中反复出现。"
            },
            {
              "type": "h3",
              "en": "Molecular, Complete Ionic, and Net Ionic Equations",
              "zh": "分子方程式、完全离子方程式与净离子方程式"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Molecular equation: every substance written as a complete formula, e.g. $\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$.",
                  "zh": "分子方程式：所有物质写成完整化学式，如 $\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$。"
                },
                {
                  "en": "Complete ionic equation: split every soluble strong electrolyte $(aq)$ into its ions; keep solids, liquids, gases, and weak electrolytes intact.",
                  "zh": "完全离子方程式：把所有可溶的强电解质 $(aq)$ 拆成离子；固体、液体、气体和弱电解质保持完整。"
                },
                {
                  "en": "Net ionic equation: delete spectator ions—those appearing unchanged on both sides—leaving only the species that actually react.",
                  "zh": "净离子方程式：删去旁观离子——两边都以相同形式出现的离子——只保留真正参与反应的粒子。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Only split substances that are BOTH soluble AND strong electrolytes. Weak acids (like $\\text{CH}_3\\text{COOH}$), water, solids $(s)$, and gases $(g)$ stay whole in ionic equations. Writing a weak acid as ions is one of the most common point-losers on the net-ionic FRQ, and a net ionic equation must still balance in both atoms and charge.",
              "zh": "AP 提示：只有既可溶又是强电解质的物质才能拆成离子。弱酸（如 $\\text{CH}_3\\text{COOH}$）、水、固体 $(s)$ 和气体 $(g)$ 在离子方程式中保持完整。把弱酸拆成离子是净离子方程式简答题中最常见的失分点之一；此外，净离子方程式必须同时满足原子守恒和电荷守恒。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Writing a Net Ionic Equation",
                "zh": "例题 1：书写净离子方程式"
              },
              "problem": {
                "en": "Aqueous solutions of $\\text{AgNO}_3$ and $\\text{NaCl}$ are mixed and a white precipitate forms. Write the complete ionic and net ionic equations.",
                "zh": "混合 $\\text{AgNO}_3$ 与 $\\text{NaCl}$ 的水溶液后生成白色沉淀。写出完全离子方程式和净离子方程式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "All nitrates and all sodium salts are soluble, so the precipitate must be $\\text{AgCl}$. Split the soluble strong electrolytes into ions:",
                  "zh": "所有硝酸盐和钠盐都可溶，所以沉淀必是 $\\text{AgCl}$。把可溶的强电解质拆成离子："
                },
                {
                  "type": "math",
                  "tex": "\\text{Ag}^+ + \\text{NO}_3^- + \\text{Na}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}(s) + \\text{Na}^+ + \\text{NO}_3^-"
                },
                {
                  "type": "p",
                  "en": "$\\text{Na}^+$ and $\\text{NO}_3^-$ appear unchanged on both sides—they are spectators. Removing them gives the net ionic equation:",
                  "zh": "$\\text{Na}^+$ 和 $\\text{NO}_3^-$ 两边形式不变——它们是旁观离子。删去后得净离子方程式："
                },
                {
                  "type": "math",
                  "tex": "\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Acid–Base and Redox Reactions",
              "zh": "酸碱反应与氧化还原反应"
            },
            {
              "type": "p",
              "en": "Two definitions of acids and bases appear on the AP exam. Arrhenius: an acid produces $\\text{H}^+$ in water and a base produces $\\text{OH}^-$. Brønsted–Lowry (broader and preferred): an acid donates a proton ($\\text{H}^+$) and a base accepts one. In $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$, water donates a proton, so it acts as the Brønsted acid even though it contains no $\\text{OH}^-$ to release.",
              "zh": "AP 考试中出现两种酸碱定义。阿伦尼乌斯定义：酸在水中产生 $\\text{H}^+$，碱产生 $\\text{OH}^-$。布朗斯特–劳里定义（更广，更常用）：酸给出质子（$\\text{H}^+$），碱接受质子。在 $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$ 中，水给出质子，因此充当布朗斯特酸，尽管它并不释放 $\\text{OH}^-$。"
            },
            {
              "type": "p",
              "en": "A redox reaction transfers electrons, tracked with oxidation numbers. Key rules: a free element is 0; a monatomic ion equals its charge; O is usually $-2$ (except peroxides, $-1$); H is $+1$ with nonmetals; the oxidation numbers in a species sum to its overall charge. Oxidation is an INCREASE in oxidation number (loss of electrons); reduction is a decrease (gain of electrons). If any element’s oxidation number changes, the reaction is redox.",
              "zh": "氧化还原反应转移电子，用氧化数追踪。主要规则：游离态元素为 0；单原子离子等于其电荷；O 通常为 $-2$（过氧化物中为 $-1$）；H 与非金属结合时为 $+1$；一种粒子中所有氧化数之和等于其总电荷。氧化是氧化数升高（失电子）；还原是氧化数降低（得电子）。只要有元素的氧化数发生变化，该反应就是氧化还原反应。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Identifying a Redox Reaction",
                "zh": "例题 2：识别氧化还原反应"
              },
              "problem": {
                "en": "For $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$, assign oxidation numbers and identify what is oxidized and what is reduced.",
                "zh": "对于 $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$，标出氧化数并指出什么被氧化、什么被还原。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Zn goes from 0 (free element) to $+2$: its oxidation number increases, so zinc is oxidized (loses 2 electrons). Cu goes from $+2$ to 0: it is reduced (gains 2 electrons).",
                  "zh": "Zn 从 0（游离态）变为 $+2$：氧化数升高，锌被氧化（失去 2 个电子）。Cu 从 $+2$ 变为 0：被还原（得到 2 个电子）。"
                },
                {
                  "type": "p",
                  "en": "Electrons lost equal electrons gained—2 on each side—so charge is conserved. This equation is already a net ionic equation; any spectator anion (such as $\\text{SO}_4^{2-}$ from copper(II) sulfate) has been removed.",
                  "zh": "失电子数等于得电子数——各为 2——电荷守恒。该式本身就是净离子方程式；旁观阴离子（如硫酸铜中的 $\\text{SO}_4^{2-}$）已被删去。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which observation is the strongest evidence of a chemical change?",
                "zh": "下列哪个现象是化学变化最有力的证据？"
              },
              "choices": [
                "a liquid boils when heated",
                "a solid dissolves completely in water",
                "mixing two clear solutions produces a solid precipitate",
                "a metal block is hammered into a thin sheet"
              ],
              "answer": 2,
              "explanation": {
                "en": "A precipitate is a new substance—ions rearranged into an insoluble compound. Boiling and dissolving are tempting distractors, but both are physical: the particles themselves are unchanged.",
                "zh": "沉淀是新物质——离子重新组合成不溶化合物。沸腾和溶解是有迷惑性的干扰项，但都是物理变化：粒子本身没有改变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "When $\\text{C}_3\\text{H}_8 + \\_\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$ is balanced with whole-number coefficients, what is the coefficient of $\\text{O}_2$? Give an integer.",
                "zh": "用整数系数配平 $\\text{C}_3\\text{H}_8 + \\_\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$ 时，$\\text{O}_2$ 的系数是多少？请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "five"
              ],
              "explanation": {
                "en": "The right side has $3(2) + 4(1) = 10$ O atoms, so $10/2 = 5$ molecules of $\\text{O}_2$ are needed.",
                "zh": "右边共有 $3(2) + 4(1) = 10$ 个 O 原子，故需要 $10/2 = 5$ 个 $\\text{O}_2$ 分子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the net ionic equation for mixing $\\text{HCl}(aq)$ with $\\text{NaOH}(aq)$?",
                "zh": "$\\text{HCl}(aq)$ 与 $\\text{NaOH}(aq)$ 混合的净离子方程式是什么？"
              },
              "choices": [
                "$\\text{Na}^+ + \\text{Cl}^- \\rightarrow \\text{NaCl}(s)$",
                "$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}(l)$",
                "$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$",
                "$\\text{H}^+ + \\text{Na}^+ \\rightarrow \\text{NaH}(s)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Both reactants are soluble strong electrolytes, so split them; $\\text{Na}^+$ and $\\text{Cl}^-$ are spectators ($\\text{NaCl}$ stays dissolved, so choice (a) is wrong), leaving $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$. Choice (c) is the molecular equation, not the net ionic one.",
                "zh": "两种反应物都是可溶强电解质，应拆成离子；$\\text{Na}^+$ 和 $\\text{Cl}^-$ 是旁观离子（$\\text{NaCl}$ 仍溶解着，故选项 (a) 错误），剩下 $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$。选项 (c) 是分子方程式，不是净离子方程式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When $\\text{AgNO}_3(aq)$ and $\\text{NaCl}(aq)$ are mixed, the spectator ions are:",
                "zh": "混合 $\\text{AgNO}_3(aq)$ 与 $\\text{NaCl}(aq)$ 时，旁观离子是："
              },
              "choices": [
                "$\\text{Ag}^+$ and $\\text{Cl}^-$",
                "$\\text{Ag}^+$ and $\\text{Na}^+$",
                "$\\text{Cl}^-$ and $\\text{NO}_3^-$",
                "$\\text{Na}^+$ and $\\text{NO}_3^-$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\text{Ag}^+$ and $\\text{Cl}^-$ combine into the $\\text{AgCl}$ precipitate, so they react; $\\text{Na}^+$ and $\\text{NO}_3^-$ remain dissolved and unchanged. Choice (a) lists exactly the ions that DO react—the opposite of spectators.",
                "zh": "$\\text{Ag}^+$ 与 $\\text{Cl}^-$ 结合生成 $\\text{AgCl}$ 沉淀，是参与反应的离子；$\\text{Na}^+$ 和 $\\text{NO}_3^-$ 仍溶解且不变。选项 (a) 恰好列出了真正反应的离子——与旁观离子正相反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the oxidation number of sulfur in the sulfate ion, $\\text{SO}_4^{2-}$? Give a signed integer.",
                "zh": "硫酸根 $\\text{SO}_4^{2-}$ 中硫的氧化数是多少？请给出带符号的整数。"
              },
              "answer": "+6",
              "accept": [
                "6",
                "6.0"
              ],
              "explanation": {
                "en": "Four O at $-2$ contribute $-8$; the sum must equal $-2$, so S $= -2 - (-8) = +6$.",
                "zh": "四个 O 各为 $-2$，共 $-8$；总和必须等于 $-2$，故 S $= -2 - (-8) = +6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "According to the Brønsted–Lowry definition, an acid is a species that:",
                "zh": "根据布朗斯特–劳里定义，酸是一种："
              },
              "choices": [
                "donates a proton ($\\text{H}^+$)",
                "produces $\\text{OH}^-$ in water",
                "accepts a proton",
                "accepts an electron pair"
              ],
              "answer": 0,
              "explanation": {
                "en": "Brønsted–Lowry acids donate protons; bases accept them. Choice (b) describes an Arrhenius base, and (c) is the Brønsted definition of a base—an easy mix-up under time pressure.",
                "zh": "布朗斯特–劳里酸给出质子；碱接受质子。选项 (b) 描述的是阿伦尼乌斯碱，(c) 是布朗斯特碱的定义——考试紧张时很容易混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Based on the solubility rules, which compound is insoluble in water?",
                "zh": "根据溶解性规律，下列哪种化合物不溶于水？"
              },
              "choices": [
                "$\\text{KNO}_3$",
                "$\\text{Na}_2\\text{CO}_3$",
                "$\\text{AgCl}$",
                "$\\text{NH}_4\\text{Cl}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "All salts of $\\text{K}^+$, $\\text{Na}^+$, $\\text{NH}_4^+$, and $\\text{NO}_3^-$ are soluble, which eliminates the other three. $\\text{AgCl}$ is a classic insoluble precipitate. $\\text{Na}_2\\text{CO}_3$ tempts students who remember “carbonates are insoluble” but forget the sodium rule overrides it.",
                "zh": "$\\text{K}^+$、$\\text{Na}^+$、$\\text{NH}_4^+$、$\\text{NO}_3^-$ 的盐都可溶，排除其余三项。$\\text{AgCl}$ 是经典不溶沉淀。$\\text{Na}_2\\text{CO}_3$ 会迷惑那些只记得「碳酸盐不溶」却忘了钠盐规律优先的学生。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the oxidation number of manganese in $\\text{MnO}_4^-$? Give a signed integer.",
                "zh": "$\\text{MnO}_4^-$ 中锰的氧化数是多少？请给出带符号的整数。"
              },
              "answer": "+7",
              "accept": [
                "7",
                "7.0"
              ],
              "explanation": {
                "en": "Four O at $-2$ give $-8$; the ion’s charge is $-1$, so Mn $= -1 - (-8) = +7$—the highest common oxidation state of Mn, found in the deep purple permanganate ion.",
                "zh": "四个 O 共 $-8$；离子电荷为 $-1$，故 Mn $= -1 - (-8) = +7$——这是 Mn 最高的常见氧化态，存在于深紫色的高锰酸根中。"
              }
            }
          ]
        },
        {
          "id": "stoichiometry-and-titration",
          "title": "Stoichiometry and Titration",
          "titleZh": "化学计量与滴定",
          "content": [
            {
              "type": "h2",
              "en": "Stoichiometry: The Mole Ratio at Work",
              "zh": "化学计量：摩尔比的运用"
            },
            {
              "type": "p",
              "en": "A balanced equation is a recipe written in moles. The coefficients give the mole ratio, which converts moles of one substance into moles of any other. Every stoichiometry problem follows the same path: convert what you are given (grams, molarity and volume, particles) into moles, apply the mole ratio, then convert to whatever the question asks for. The mole ratio is the ONLY legal bridge between substances—never compare grams to grams directly.",
              "zh": "配平的方程式是一份以摩尔为单位的配方。系数给出摩尔比，可把一种物质的摩尔数换算成任何其他物质的摩尔数。所有化学计量题都走同一条路径：把已知量（克、摩尔浓度与体积、粒子数）换算成摩尔，使用摩尔比，再换算成题目要求的量。摩尔比是物质之间唯一合法的桥梁——绝不能直接用克与克相比。"
            },
            {
              "type": "math",
              "tex": "\\text{grams A} \\xrightarrow{\\div M_A} \\text{mol A} \\xrightarrow{\\text{mole ratio}} \\text{mol B} \\xrightarrow{\\times M_B} \\text{grams B}"
            },
            {
              "type": "h3",
              "en": "Limiting Reactant and Percent Yield",
              "zh": "限量反应物与产率"
            },
            {
              "type": "p",
              "en": "When reactants are not supplied in the exact stoichiometric ratio, one runs out first: the limiting reactant. It determines the maximum (theoretical) yield; the other reactant is in excess and some of it remains unreacted. To find the limiting reactant, compute the moles of product each reactant could form—the reactant giving LESS product is limiting. Comparing raw moles of reactants without using the mole ratio is the classic error.",
              "zh": "当反应物不是按化学计量比恰好投料时，总有一种先耗尽：这就是限量反应物。它决定了最大（理论）产量；另一种反应物过量，反应结束后仍有剩余。判断限量反应物的方法：分别计算每种反应物能生成的产物摩尔数——生成产物较少的那种是限量反应物。不用摩尔比而直接比较反应物摩尔数是最经典的错误。"
            },
            {
              "type": "math",
              "tex": "\\%\\ \\text{yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%"
            },
            {
              "type": "note",
              "en": "AP tip: The exam loves particulate diagrams of limiting reactants. Given a box of drawn molecules, react them according to the coefficients, then draw or choose the “after” box: it must show ALL product formed plus the leftover excess particles—and nothing of the limiting reactant. Count particles one reaction event at a time.",
              "zh": "AP 提示：考试特别喜欢限量反应物的粒子图。给出一个画有分子的方框后，按系数让它们反应，然后画出或选出「反应后」的方框：其中必须包含全部生成的产物和剩余的过量粒子——且限量反应物一个不剩。要一次反应事件一次反应事件地数粒子。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Limiting Reactant from a Particulate View",
                "zh": "例题 1：从粒子角度找限量反应物"
              },
              "problem": {
                "en": "A container holds 6 molecules of $\\text{H}_2$ and 4 molecules of $\\text{O}_2$, which react by $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$. What does the container hold after the reaction goes to completion?",
                "zh": "容器中有 6 个 $\\text{H}_2$ 分子和 4 个 $\\text{O}_2$ 分子，按 $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$ 反应。反应完全后容器中有什么？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The ratio requires 2 $\\text{H}_2$ per $\\text{O}_2$. The 6 $\\text{H}_2$ molecules need only 3 $\\text{O}_2$, but 4 are available—so $\\text{H}_2$ is limiting and $\\text{O}_2$ is in excess.",
                  "zh": "按比例每 1 个 $\\text{O}_2$ 需要 2 个 $\\text{H}_2$。6 个 $\\text{H}_2$ 只需要 3 个 $\\text{O}_2$，而现有 4 个——所以 $\\text{H}_2$ 是限量反应物，$\\text{O}_2$ 过量。"
                },
                {
                  "type": "math",
                  "tex": "6\\ \\text{H}_2 \\times \\frac{2\\ \\text{H}_2\\text{O}}{2\\ \\text{H}_2} = 6\\ \\text{H}_2\\text{O}"
                },
                {
                  "type": "p",
                  "en": "After the reaction: 6 molecules of $\\text{H}_2\\text{O}$, 1 leftover $\\text{O}_2$ ($4 - 3 = 1$), and no $\\text{H}_2$. A correct particulate diagram must show exactly these counts.",
                  "zh": "反应后：6 个 $\\text{H}_2\\text{O}$ 分子、1 个剩余的 $\\text{O}_2$（$4 - 3 = 1$），没有 $\\text{H}_2$。正确的粒子图必须恰好画出这些数目。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Solution Stoichiometry and Molarity",
              "zh": "溶液化学计量与摩尔浓度"
            },
            {
              "type": "p",
              "en": "Molarity connects volume to moles: $M = n/V$, with $V$ in liters. So $n = M \\times V$ turns any solution volume into moles, and the standard stoichiometry path continues from there. For dilution, moles of solute are unchanged when solvent is added, giving $M_1V_1 = M_2V_2$.",
              "zh": "摩尔浓度把体积和摩尔数联系起来：$M = n/V$，其中 $V$ 以升为单位。因此 $n = M \\times V$ 可以把任何溶液体积换算成摩尔数，然后继续标准的化学计量路径。稀释时加入溶剂不改变溶质的摩尔数，故有 $M_1V_1 = M_2V_2$。"
            },
            {
              "type": "math",
              "tex": "M = \\frac{n\\ (\\text{mol})}{V\\ (\\text{L})} \\qquad M_1V_1 = M_2V_2"
            },
            {
              "type": "h3",
              "en": "Titration",
              "zh": "滴定"
            },
            {
              "type": "p",
              "en": "A titration determines an unknown concentration by adding a solution of known concentration (the titrant, in a buret) to a measured volume of the unknown until the reaction is exactly complete. The equivalence point is reached when the moles of titrant added match the stoichiometric requirement of the unknown; an indicator’s color change (the end point) is chosen to signal it. At the equivalence point, use $n = MV$ and the mole ratio to solve for the unknown molarity.",
              "zh": "滴定通过向已量取的未知浓度溶液中加入已知浓度的溶液（滴定剂，装在滴定管中），直到反应恰好完全，从而测定未知浓度。当加入的滴定剂摩尔数恰好满足与未知物的化学计量关系时，达到等当点（化学计量点）；指示剂变色（终点）用来指示它。在等当点处，用 $n = MV$ 和摩尔比求未知浓度。"
            },
            {
              "type": "note",
              "en": "Common mistake: the shortcut $M_aV_a = M_bV_b$ works only for 1:1 stoichiometry. For $\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH}$, each mole of acid consumes two moles of base—always write out moles and apply the mole ratio instead of memorized shortcuts.",
              "zh": "常见错误：捷径公式 $M_aV_a = M_bV_b$ 只适用于 1:1 的化学计量关系。对于 $\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH}$，每摩尔酸消耗两摩尔碱——务必老老实实写出摩尔数并使用摩尔比，而不是套用背下来的捷径。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Titration of Sulfuric Acid",
                "zh": "例题 2：硫酸的滴定"
              },
              "problem": {
                "en": "A $25.0\\ \\text{mL}$ sample of $\\text{H}_2\\text{SO}_4$ requires $30.0\\ \\text{mL}$ of $0.200\\ M$ $\\text{NaOH}$ to reach the equivalence point: $\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$. Find the molarity of the acid.",
                "zh": "$25.0\\ \\text{mL}$ $\\text{H}_2\\text{SO}_4$ 样品需要 $30.0\\ \\text{mL}$ $0.200\\ M$ 的 $\\text{NaOH}$ 才能达到等当点：$\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$。求酸的摩尔浓度。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "n_{\\text{NaOH}} = 0.200\\ M \\times 0.0300\\ \\text{L} = 6.00 \\times 10^{-3}\\ \\text{mol}"
                },
                {
                  "type": "math",
                  "tex": "n_{\\text{H}_2\\text{SO}_4} = 6.00 \\times 10^{-3} \\times \\frac{1}{2} = 3.00 \\times 10^{-3}\\ \\text{mol}"
                },
                {
                  "type": "math",
                  "tex": "M = \\frac{3.00 \\times 10^{-3}\\ \\text{mol}}{0.0250\\ \\text{L}} = 0.120\\ M"
                },
                {
                  "type": "p",
                  "en": "Note the 1:2 mole ratio—using $M_aV_a = M_bV_b$ here would give $0.240\\ M$, exactly double the correct answer.",
                  "zh": "注意 1:2 的摩尔比——在这里套用 $M_aV_a = M_bV_b$ 会得到 $0.240\\ M$，正好是正确答案的两倍。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Given $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$, how many moles of $\\text{NH}_3$ can form from $6.0$ mol of $\\text{H}_2$ with excess $\\text{N}_2$?",
                "zh": "已知 $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$，$6.0$ mol $\\text{H}_2$ 与过量 $\\text{N}_2$ 反应能生成多少摩尔 $\\text{NH}_3$？"
              },
              "choices": [
                "$6.0\\ \\text{mol}$",
                "$4.0\\ \\text{mol}$",
                "$9.0\\ \\text{mol}$",
                "$2.0\\ \\text{mol}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$6.0\\ \\text{mol H}_2 \\times \\frac{2\\ \\text{NH}_3}{3\\ \\text{H}_2} = 4.0\\ \\text{mol}$. Choice (c) comes from flipping the ratio ($\\times 3/2$)—always check that the substance you want ends up in the numerator.",
                "zh": "$6.0\\ \\text{mol H}_2 \\times \\frac{2\\ \\text{NH}_3}{3\\ \\text{H}_2} = 4.0\\ \\text{mol}$。选项 (c) 来自把比值写反（$\\times 3/2$）——一定要检查所求物质在分子上。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$, a vessel contains $4.0$ mol $\\text{H}_2$ and $3.0$ mol $\\text{O}_2$. Which reactant is limiting? (Write like H2.)",
                "zh": "对于 $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$，容器中有 $4.0$ mol $\\text{H}_2$ 和 $3.0$ mol $\\text{O}_2$。哪种反应物是限量的？（写成 H2 形式。）"
              },
              "answer": "H2",
              "accept": [
                "h2"
              ],
              "explanation": {
                "en": "$4.0$ mol $\\text{H}_2$ needs only $2.0$ mol $\\text{O}_2$, but $3.0$ mol is present. $\\text{H}_2$ runs out first even though there is MORE of it—the mole ratio, not the raw amounts, decides.",
                "zh": "$4.0$ mol $\\text{H}_2$ 只需要 $2.0$ mol $\\text{O}_2$，而现有 $3.0$ mol。尽管 $\\text{H}_2$ 的量更多，它仍先耗尽——起决定作用的是摩尔比，不是原始数量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A reaction has a theoretical yield of $10.0\\ \\text{g}$ but produces only $8.0\\ \\text{g}$. What is the percent yield? Give a number (no % sign).",
                "zh": "某反应理论产量为 $10.0\\ \\text{g}$，实际只得到 $8.0\\ \\text{g}$。产率是百分之多少？给出数字（不带 % 号）。"
              },
              "answer": "80",
              "accept": [
                "80.0",
                "80%"
              ],
              "explanation": {
                "en": "$\\%\\ \\text{yield} = (8.0 / 10.0) \\times 100\\% = 80\\%$. Percent yield can never exceed $100\\%$ for a correctly measured product.",
                "zh": "产率 $= (8.0 / 10.0) \\times 100\\% = 80\\%$。正确称量的产物产率绝不可能超过 $100\\%$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the molarity of a solution containing $0.50$ mol of solute in $250\\ \\text{mL}$ of solution?",
                "zh": "$250\\ \\text{mL}$ 溶液中含 $0.50$ mol 溶质，其摩尔浓度是多少？"
              },
              "choices": [
                "$0.50\\ M$",
                "$0.125\\ M$",
                "$2.0\\ M$",
                "$1.0\\ M$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$M = 0.50\\ \\text{mol} / 0.250\\ \\text{L} = 2.0\\ M$. Choice (b) comes from multiplying by the volume instead of dividing—remember molarity is moles PER liter.",
                "zh": "$M = 0.50\\ \\text{mol} / 0.250\\ \\text{L} = 2.0\\ M$。选项 (b) 是误把体积乘上去而不是除——记住摩尔浓度是每升的摩尔数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In an acid–base titration, the equivalence point is the point at which:",
                "zh": "在酸碱滴定中，等当点（化学计量点）是指："
              },
              "choices": [
                "the indicator is first added",
                "the pH equals exactly 7 in every titration",
                "half of the titrant has been added",
                "the moles of titrant added exactly satisfy the stoichiometric ratio with the analyte"
              ],
              "answer": 3,
              "explanation": {
                "en": "The equivalence point is stoichiometric equality. Choice (b) is the classic trap: pH is 7 only for a strong acid–strong base titration; a weak acid titrated with strong base has an equivalence point above 7.",
                "zh": "等当点指恰好满足化学计量关系。选项 (b) 是经典陷阱：只有强酸–强碱滴定的等当点 pH 才是 7；弱酸用强碱滴定时等当点 pH 大于 7。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $25.0\\ \\text{mL}$ sample of $\\text{HCl}$ requires $20.0\\ \\text{mL}$ of $0.125\\ M$ $\\text{NaOH}$ to reach the equivalence point (1:1 ratio). What is the molarity of the $\\text{HCl}$? Give the answer in $M$ to 3 sig figs.",
                "zh": "$25.0\\ \\text{mL}$ $\\text{HCl}$ 样品需 $20.0\\ \\text{mL}$ $0.125\\ M$ 的 $\\text{NaOH}$ 达到等当点（1:1 比例）。$\\text{HCl}$ 的摩尔浓度是多少？以 $M$ 为单位，保留 3 位有效数字。"
              },
              "answer": "0.100",
              "accept": [
                "0.1",
                ".100",
                ".1"
              ],
              "explanation": {
                "en": "$n_{\\text{NaOH}} = 0.125 \\times 0.0200 = 2.50 \\times 10^{-3}$ mol $= n_{\\text{HCl}}$; then $M = 2.50 \\times 10^{-3} / 0.0250 = 0.100\\ M$.",
                "zh": "$n_{\\text{NaOH}} = 0.125 \\times 0.0200 = 2.50 \\times 10^{-3}$ mol $= n_{\\text{HCl}}$；则 $M = 2.50 \\times 10^{-3} / 0.0250 = 0.100\\ M$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particulate diagram shows 6 molecules of $\\text{H}_2$ and 4 molecules of $\\text{O}_2$ reacting by $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$. Which “after” box is correct?",
                "zh": "粒子图中有 6 个 $\\text{H}_2$ 分子和 4 个 $\\text{O}_2$ 分子按 $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$ 反应。哪个「反应后」方框是正确的？"
              },
              "choices": [
                "$6\\ \\text{H}_2\\text{O}$ only",
                "$6\\ \\text{H}_2\\text{O}$ and $1\\ \\text{O}_2$",
                "$4\\ \\text{H}_2\\text{O}$ and $2\\ \\text{H}_2$",
                "$8\\ \\text{H}_2\\text{O}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "6 $\\text{H}_2$ (limiting) makes 6 $\\text{H}_2\\text{O}$ and consumes 3 $\\text{O}_2$, leaving 1 $\\text{O}_2$. Choice (a) forgets the leftover excess reactant—the most common error on these diagram questions. Choice (d) violates atom conservation.",
                "zh": "6 个 $\\text{H}_2$（限量）生成 6 个 $\\text{H}_2\\text{O}$，消耗 3 个 $\\text{O}_2$，剩下 1 个 $\\text{O}_2$。选项 (a) 忘了画剩余的过量反应物——这是此类图像题最常见的错误。选项 (d) 违反原子守恒。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many milliliters of $1.0\\ M$ stock solution are needed to prepare $100.0\\ \\text{mL}$ of $0.10\\ M$ solution?",
                "zh": "配制 $100.0\\ \\text{mL}$ $0.10\\ M$ 溶液需要多少毫升 $1.0\\ M$ 的储备液？"
              },
              "choices": [
                "$1.0\\ \\text{mL}$",
                "$100\\ \\text{mL}$",
                "$10.\\ \\text{mL}$",
                "$0.10\\ \\text{mL}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$M_1V_1 = M_2V_2$: $(1.0)V_1 = (0.10)(100.0)$, so $V_1 = 10.\\ \\text{mL}$. Dilution by a factor of 10 requires one-tenth of the final volume as stock.",
                "zh": "$M_1V_1 = M_2V_2$：$(1.0)V_1 = (0.10)(100.0)$，故 $V_1 = 10\\ \\text{mL}$。稀释 10 倍需要储备液体积为最终体积的十分之一。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-5-kinetics",
      "title": "Unit 5: Kinetics",
      "titleZh": "第五单元：化学动力学",
      "lessons": [
        {
          "id": "reaction-rates-and-rate-laws",
          "title": "Reaction Rates and Rate Laws",
          "titleZh": "反应速率与速率定律",
          "content": [
            {
              "type": "h2",
              "en": "Measuring How Fast Reactions Go",
              "zh": "测量反应进行的快慢"
            },
            {
              "type": "p",
              "en": "The rate of a reaction tells how quickly a reactant is consumed or a product is formed, expressed as a change in concentration per unit time, usually in $M/\\text{s}$. In the lab, rates are measured by tracking something observable over time: absorbance of a colored species (Beer-Lambert law), gas pressure or volume, or conductivity. Because stoichiometry links all species, the rate of the reaction as a whole is defined by dividing each species’ rate by its coefficient.",
              "zh": "反应速率描述反应物被消耗或产物生成的快慢，用单位时间内浓度的变化表示，通常单位为 $M/\\text{s}$。在实验室中，通过随时间追踪某个可观测量来测速率：有色物质的吸光度（比尔-朗伯定律）、气体压强或体积、电导率等。由于化学计量关系将所有物质联系在一起，整个反应的速率定义为各物质速率除以其系数。"
            },
            {
              "type": "math",
              "tex": "\\text{For } a\\text{A} + b\\text{B} \\rightarrow c\\text{C}: \\quad \\text{rate} = -\\frac{1}{a}\\frac{\\Delta[\\text{A}]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[\\text{B}]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[\\text{C}]}{\\Delta t}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Higher concentration: more particles per volume, so more collisions per second and a faster rate.",
                  "zh": "浓度越高：单位体积内粒子越多，每秒碰撞次数越多，速率越快。"
                },
                {
                  "en": "Higher temperature: particles move faster and a larger fraction of collisions have enough energy to react.",
                  "zh": "温度越高：粒子运动更快，具有足够反应能量的碰撞所占比例更大。"
                },
                {
                  "en": "Greater surface area (for solids): more particles exposed where collisions can occur.",
                  "zh": "（对固体）表面积越大：暴露在外、可发生碰撞的粒子越多。"
                },
                {
                  "en": "Catalyst: provides a lower-energy pathway, speeding the reaction without being consumed.",
                  "zh": "催化剂：提供能量更低的路径，加快反应而自身不被消耗。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Rate Law and the Method of Initial Rates",
              "zh": "速率定律与初始速率法"
            },
            {
              "type": "p",
              "en": "A rate law expresses how rate depends on reactant concentrations. The exponents $m$ and $n$ are the orders with respect to each reactant, and their sum is the overall order. Orders must be found from experiment—never from the balanced equation. The classic AP problem gives a table of initial concentrations and initial rates: compare two trials in which only one concentration changes, and see how the rate responds.",
              "zh": "速率定律表达速率如何依赖反应物浓度。指数 $m$、$n$ 是对各反应物的反应级数，其和为总级数。级数必须由实验确定——绝不能从配平方程式得出。经典的 AP 题目给出一张初始浓度与初始速率表：比较仅有一种浓度变化的两组实验，观察速率如何响应。"
            },
            {
              "type": "math",
              "tex": "\\text{rate} = k[\\text{A}]^m[\\text{B}]^n"
            },
            {
              "type": "note",
              "en": "AP tip: The units of $k$ depend on the overall order—first order gives $\\text{s}^{-1}$, second order gives $M^{-1}\\text{s}^{-1}$, third order gives $M^{-2}\\text{s}^{-1}$. Checking the units of $k$ is a fast way to confirm (or double-check) the overall order on multiple choice.",
              "zh": "AP 提示：$k$ 的单位取决于总级数——一级为 $\\text{s}^{-1}$，二级为 $M^{-1}\\text{s}^{-1}$，三级为 $M^{-2}\\text{s}^{-1}$。检查 $k$ 的单位是在选择题中确认（或复核）总级数的快捷方法。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Rate Law from Initial-Rates Data",
                "zh": "例题 1：由初始速率数据求速率定律"
              },
              "problem": {
                "en": "For $\\text{A} + \\text{B} \\rightarrow \\text{products}$, three trials give: Trial 1: $[\\text{A}] = 0.10\\ M$, $[\\text{B}] = 0.10\\ M$, rate $= 2.0 \\times 10^{-3}\\ M/\\text{s}$. Trial 2: $[\\text{A}] = 0.20\\ M$, $[\\text{B}] = 0.10\\ M$, rate $= 8.0 \\times 10^{-3}\\ M/\\text{s}$. Trial 3: $[\\text{A}] = 0.10\\ M$, $[\\text{B}] = 0.20\\ M$, rate $= 4.0 \\times 10^{-3}\\ M/\\text{s}$. Find the rate law and $k$.",
                "zh": "对于 $\\text{A} + \\text{B} \\rightarrow \\text{产物}$，三组实验数据为：实验 1：$[\\text{A}] = 0.10\\ M$，$[\\text{B}] = 0.10\\ M$，速率 $= 2.0 \\times 10^{-3}\\ M/\\text{s}$。实验 2：$[\\text{A}] = 0.20\\ M$，$[\\text{B}] = 0.10\\ M$，速率 $= 8.0 \\times 10^{-3}\\ M/\\text{s}$。实验 3：$[\\text{A}] = 0.10\\ M$，$[\\text{B}] = 0.20\\ M$，速率 $= 4.0 \\times 10^{-3}\\ M/\\text{s}$。求速率定律和 $k$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Trials 1 → 2: $[\\text{A}]$ doubles while $[\\text{B}]$ is constant, and the rate goes up by a factor of 4 ($2^m = 4$), so $m = 2$. Trials 1 → 3: $[\\text{B}]$ doubles while $[\\text{A}]$ is constant, and the rate doubles ($2^n = 2$), so $n = 1$.",
                  "zh": "实验 1 → 2：$[\\text{A}]$ 加倍而 $[\\text{B}]$ 不变，速率增大 4 倍（$2^m = 4$），故 $m = 2$。实验 1 → 3：$[\\text{B}]$ 加倍而 $[\\text{A}]$ 不变，速率加倍（$2^n = 2$），故 $n = 1$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{rate} = k[\\text{A}]^2[\\text{B}]"
                },
                {
                  "type": "math",
                  "tex": "k = \\frac{2.0 \\times 10^{-3}\\ M/\\text{s}}{(0.10\\ M)^2(0.10\\ M)} = 2.0\\ M^{-2}\\text{s}^{-1}"
                },
                {
                  "type": "p",
                  "en": "The reaction is third order overall, and the units of $k$ ($M^{-2}\\text{s}^{-1}$) confirm it.",
                  "zh": "反应总级数为三级，$k$ 的单位（$M^{-2}\\text{s}^{-1}$）也印证了这一点。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Integrated Rate Laws and Linear Plots",
              "zh": "积分速率定律与线性图像"
            },
            {
              "type": "p",
              "en": "A rate law tells you the rate at an instant; an integrated rate law tells you the concentration at any time $t$. Each order has its own integrated form, and each is a straight line when the right quantity is plotted against time. On the AP exam, you determine order graphically: plot $[\\text{A}]$, $\\ln[\\text{A}]$, and $1/[\\text{A}]$ versus $t$, and whichever plot is linear reveals the order.",
              "zh": "速率定律给出某一瞬间的速率；积分速率定律给出任意时刻 $t$ 的浓度。每种级数有各自的积分形式，且当以恰当的量对时间作图时都是直线。在 AP 考试中，用图像法判断级数：分别作 $[\\text{A}]$、$\\ln[\\text{A}]$、$1/[\\text{A}]$ 对 $t$ 的图，哪条是直线就对应哪个级数。"
            },
            {
              "type": "math",
              "tex": "\\text{Zeroth order:}\\quad [\\text{A}]_t = [\\text{A}]_0 - kt"
            },
            {
              "type": "math",
              "tex": "\\text{First order:}\\quad \\ln[\\text{A}]_t = \\ln[\\text{A}]_0 - kt"
            },
            {
              "type": "math",
              "tex": "\\text{Second order:}\\quad \\frac{1}{[\\text{A}]_t} = \\frac{1}{[\\text{A}]_0} + kt"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Zeroth order: $[\\text{A}]$ vs $t$ is linear, slope $= -k$. Rate does not depend on concentration.",
                  "zh": "零级：$[\\text{A}]$ 对 $t$ 为直线，斜率 $= -k$。速率与浓度无关。"
                },
                {
                  "en": "First order: $\\ln[\\text{A}]$ vs $t$ is linear, slope $= -k$.",
                  "zh": "一级：$\\ln[\\text{A}]$ 对 $t$ 为直线，斜率 $= -k$。"
                },
                {
                  "en": "Second order: $1/[\\text{A}]$ vs $t$ is linear, slope $= +k$ (the only one with positive slope).",
                  "zh": "二级：$1/[\\text{A}]$ 对 $t$ 为直线，斜率 $= +k$（唯一斜率为正的图像）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Half-Life of First-Order Reactions",
              "zh": "一级反应的半衰期"
            },
            {
              "type": "p",
              "en": "The half-life $t_{1/2}$ is the time for the concentration to fall to half its value. Only for first-order reactions is the half-life constant—independent of how much reactant remains. This is why radioactive decay (first order) has a fixed half-life. After $n$ half-lives, the fraction remaining is $(1/2)^n$.",
              "zh": "半衰期 $t_{1/2}$ 是浓度降到原来一半所需的时间。只有一级反应的半衰期是恒定的——与剩余反应物的多少无关。这正是放射性衰变（一级）具有固定半衰期的原因。经过 $n$ 个半衰期后，剩余分数为 $(1/2)^n$。"
            },
            {
              "type": "math",
              "tex": "t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}"
            },
            {
              "type": "note",
              "en": "Common mistake: applying $t_{1/2} = 0.693/k$ to a reaction that is not first order. For zeroth- and second-order reactions the half-life changes as the reaction proceeds, so successive half-lives are not equal. If a data table shows equal successive half-lives, that is itself evidence of first-order behavior.",
              "zh": "常见错误：把 $t_{1/2} = 0.693/k$ 用于非一级反应。零级和二级反应的半衰期会随反应进行而改变，相邻的半衰期并不相等。如果数据表显示相邻半衰期相等，这本身就是一级反应的证据。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: First-Order Decay",
                "zh": "例题 2：一级衰减"
              },
              "problem": {
                "en": "The decomposition of $\\text{N}_2\\text{O}_5$ is first order with $k = 6.93 \\times 10^{-3}\\ \\text{s}^{-1}$. If $[\\text{N}_2\\text{O}_5]_0 = 0.080\\ M$, what is the concentration after $300$ s?",
                "zh": "$\\text{N}_2\\text{O}_5$ 的分解为一级反应，$k = 6.93 \\times 10^{-3}\\ \\text{s}^{-1}$。若 $[\\text{N}_2\\text{O}_5]_0 = 0.080\\ M$，$300$ s 后浓度是多少？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\ \\text{s}^{-1}} = 100\\ \\text{s}"
                },
                {
                  "type": "p",
                  "en": "In $300$ s the reaction goes through $3$ half-lives, so the fraction remaining is $(1/2)^3 = 1/8$.",
                  "zh": "$300$ s 内反应经历 $3$ 个半衰期，剩余分数为 $(1/2)^3 = 1/8$。"
                },
                {
                  "type": "math",
                  "tex": "[\\text{N}_2\\text{O}_5] = 0.080\\ M \\times \\frac{1}{8} = 0.010\\ M"
                },
                {
                  "type": "p",
                  "en": "The same answer comes from $\\ln[\\text{A}]_t = \\ln(0.080) - (6.93 \\times 10^{-3})(300)$—the half-life shortcut just saves time when $t$ is a whole number of half-lives.",
                  "zh": "用 $\\ln[\\text{A}]_t = \\ln(0.080) - (6.93 \\times 10^{-3})(300)$ 也得到相同答案——当 $t$ 恰为整数个半衰期时，半衰期捷径只是更省时间。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A reaction has the rate law $\\text{rate} = k[\\text{A}]^2[\\text{B}]$, with rate measured in $M/\\text{s}$. What are the units of $k$?",
                "zh": "某反应的速率定律为 $\\text{rate} = k[\\text{A}]^2[\\text{B}]$，速率单位为 $M/\\text{s}$。$k$ 的单位是什么？"
              },
              "choices": [
                "$M^{-1}\\text{s}^{-1}$",
                "$\\text{s}^{-1}$",
                "$M^{-2}\\text{s}^{-1}$",
                "$M\\,\\text{s}^{-1}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Overall order is $2 + 1 = 3$, so $k = \\text{rate}/M^3 = M^{-2}\\text{s}^{-1}$. The tempting $M^{-1}\\text{s}^{-1}$ is the units for a second-order (not third-order) reaction.",
                "zh": "总级数为 $2 + 1 = 3$，故 $k = \\text{速率}/M^3 = M^{-2}\\text{s}^{-1}$。诱人的 $M^{-1}\\text{s}^{-1}$ 是二级（而非三级）反应的单位。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "When $[\\text{A}]$ is doubled and $[\\text{B}]$ is held constant, the initial rate doubles. What is the order with respect to A? Give an integer.",
                "zh": "当 $[\\text{A}]$ 加倍而 $[\\text{B}]$ 保持不变时，初始速率加倍。对 A 的反应级数是多少？请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "one"
              ],
              "explanation": {
                "en": "$2^m = 2$ requires $m = 1$: the rate changes by the same factor as the concentration, the signature of first order.",
                "zh": "$2^m = 2$ 要求 $m = 1$：速率与浓度以相同倍数变化，这是一级反应的标志。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a first-order reaction, which plot versus time is a straight line?",
                "zh": "对于一级反应，下列哪种量对时间作图是直线？"
              },
              "choices": [
                "$[\\text{A}]$",
                "$\\ln[\\text{A}]$",
                "$1/[\\text{A}]$",
                "$[\\text{A}]^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The first-order integrated rate law $\\ln[\\text{A}]_t = \\ln[\\text{A}]_0 - kt$ is linear in $\\ln[\\text{A}]$ with slope $-k$. The plot $1/[\\text{A}]$ vs $t$ is tempting but corresponds to second order.",
                "zh": "一级积分速率定律 $\\ln[\\text{A}]_t = \\ln[\\text{A}]_0 - kt$ 关于 $\\ln[\\text{A}]$ 呈线性，斜率为 $-k$。$1/[\\text{A}]$ 对 $t$ 的图很诱人，但那对应二级反应。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A first-order reaction has $k = 0.0347\\ \\text{s}^{-1}$. What is its half-life in seconds? (2 sig figs)",
                "zh": "某一级反应 $k = 0.0347\\ \\text{s}^{-1}$。其半衰期是多少秒？（2 位有效数字）"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20.",
                "19.97"
              ],
              "explanation": {
                "en": "$t_{1/2} = 0.693/k = 0.693/0.0347 \\approx 20\\ \\text{s}$.",
                "zh": "$t_{1/2} = 0.693/k = 0.693/0.0347 \\approx 20\\ \\text{s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the reaction $2\\,\\text{N}_2\\text{O}_5 \\rightarrow 4\\,\\text{NO}_2 + \\text{O}_2$, $\\text{N}_2\\text{O}_5$ disappears at $4.0 \\times 10^{-3}\\ M/\\text{s}$. At what rate does $\\text{NO}_2$ appear?",
                "zh": "反应 $2\\,\\text{N}_2\\text{O}_5 \\rightarrow 4\\,\\text{NO}_2 + \\text{O}_2$ 中，$\\text{N}_2\\text{O}_5$ 以 $4.0 \\times 10^{-3}\\ M/\\text{s}$ 消耗。$\\text{NO}_2$ 以多大速率生成？"
              },
              "choices": [
                "$2.0 \\times 10^{-3}\\ M/\\text{s}$",
                "$4.0 \\times 10^{-3}\\ M/\\text{s}$",
                "$1.0 \\times 10^{-2}\\ M/\\text{s}$",
                "$8.0 \\times 10^{-3}\\ M/\\text{s}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The mole ratio is $4\\,\\text{NO}_2 : 2\\,\\text{N}_2\\text{O}_5 = 2:1$, so $\\text{NO}_2$ appears twice as fast: $8.0 \\times 10^{-3}\\ M/\\text{s}$. Choosing $2.0 \\times 10^{-3}$ means dividing by 2 instead of multiplying.",
                "zh": "摩尔比为 $4\\,\\text{NO}_2 : 2\\,\\text{N}_2\\text{O}_5 = 2:1$，故 $\\text{NO}_2$ 的生成速率是其两倍：$8.0 \\times 10^{-3}\\ M/\\text{s}$。选 $2.0 \\times 10^{-3}$ 是错把乘 2 当成了除以 2。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about the half-life of a first-order reaction is correct?",
                "zh": "关于一级反应半衰期的下列说法哪项正确？"
              },
              "choices": [
                "It is the same no matter how much reactant remains",
                "It doubles each time the concentration halves",
                "It halves each time the concentration halves",
                "It depends on the initial concentration"
              ],
              "answer": 0,
              "explanation": {
                "en": "For first order, $t_{1/2} = 0.693/k$ contains no concentration term, so successive half-lives are equal. Concentration-dependent half-lives belong to zeroth- and second-order reactions.",
                "zh": "一级反应的 $t_{1/2} = 0.693/k$ 不含浓度项，故相邻半衰期相等。半衰期依赖浓度的是零级和二级反应。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is true of a zeroth-order reaction?",
                "zh": "关于零级反应，下列说法哪项正确？"
              },
              "choices": [
                "The rate doubles when $[\\text{A}]$ doubles",
                "A plot of $\\ln[\\text{A}]$ vs $t$ is linear",
                "The rate stays constant as reactant is consumed",
                "Its half-life is independent of concentration"
              ],
              "answer": 2,
              "explanation": {
                "en": "Zeroth order means $\\text{rate} = k[\\text{A}]^0 = k$: the rate is constant regardless of concentration, and $[\\text{A}]$ falls linearly with time. The constant half-life in the last choice describes first order, not zeroth.",
                "zh": "零级意味着 $\\text{rate} = k[\\text{A}]^0 = k$：速率与浓度无关、保持恒定，$[\\text{A}]$ 随时间线性下降。最后一个选项中恒定的半衰期描述的是一级反应而非零级。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A reaction follows $\\text{rate} = k[\\text{A}]^2$. When $[\\text{A}] = 0.10\\ M$, the rate is $2.0 \\times 10^{-3}\\ M/\\text{s}$. What is $k$ in $M^{-1}\\text{s}^{-1}$? (2 sig figs)",
                "zh": "某反应满足 $\\text{rate} = k[\\text{A}]^2$。当 $[\\text{A}] = 0.10\\ M$ 时，速率为 $2.0 \\times 10^{-3}\\ M/\\text{s}$。$k$ 是多少 $M^{-1}\\text{s}^{-1}$？（2 位有效数字）"
              },
              "answer": "0.20",
              "accept": [
                ".20",
                "0.2",
                ".2"
              ],
              "explanation": {
                "en": "$k = \\text{rate}/[\\text{A}]^2 = (2.0 \\times 10^{-3})/(0.10)^2 = 0.20\\ M^{-1}\\text{s}^{-1}$.",
                "zh": "$k = \\text{速率}/[\\text{A}]^2 = (2.0 \\times 10^{-3})/(0.10)^2 = 0.20\\ M^{-1}\\text{s}^{-1}$。"
              }
            }
          ]
        },
        {
          "id": "mechanisms-and-catalysis",
          "title": "Collision Theory, Mechanisms, and Catalysis",
          "titleZh": "碰撞理论、反应机理与催化",
          "content": [
            {
              "type": "h2",
              "en": "Why Reactions Happen: Collision Theory",
              "zh": "反应为何发生：碰撞理论"
            },
            {
              "type": "p",
              "en": "At the particulate level, a reaction happens when reactant particles collide hard enough, and in the right orientation, to break old bonds and form new ones. Most collisions fail: either the particles bounce apart with too little energy, or they hit in an orientation where the reacting atoms never meet. The minimum collision energy needed to react is the activation energy, $E_a$.",
              "zh": "在粒子层面，反应发生的条件是反应物粒子以足够大的能量、且以正确的取向发生碰撞，从而断开旧键、形成新键。大多数碰撞是无效的：要么粒子能量太低而弹开，要么碰撞取向不对、参与反应的原子根本没有接触。反应所需的最低碰撞能量称为活化能 $E_a$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Particles must collide—no collision, no reaction.",
                  "zh": "粒子必须碰撞——不碰撞就没有反应。"
                },
                {
                  "en": "The collision energy must be at least $E_a$, enough to reach the transition state.",
                  "zh": "碰撞能量必须不低于 $E_a$，足以到达过渡态。"
                },
                {
                  "en": "The particles must be oriented correctly so the right atoms contact each other.",
                  "zh": "粒子取向必须正确，使恰当的原子相互接触。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Energy Profiles and the Effect of Temperature",
              "zh": "能量曲线图与温度的影响"
            },
            {
              "type": "p",
              "en": "An energy profile plots potential energy along the reaction pathway. Reactants sit at one level, products at another, and between them rises a barrier whose peak is the transition state (activated complex)—a fleeting arrangement with partially broken and partially formed bonds. The height from reactants to the peak is $E_a$ (forward); the difference between product and reactant levels is $\\Delta H$. If products lie below reactants, the reaction is exothermic; above, endothermic.",
              "zh": "能量曲线图描绘沿反应路径的势能变化。反应物处于一个能量水平，产物处于另一个水平，两者之间隆起一道能垒，峰顶是过渡态（活化络合物）——一种旧键部分断裂、新键部分形成的瞬态结构。从反应物到峰顶的高度是正向 $E_a$；产物与反应物能量之差是 $\\Delta H$。产物低于反应物为放热反应；高于则为吸热反应。"
            },
            {
              "type": "p",
              "en": "Raising the temperature broadens and shifts the Maxwell-Boltzmann distribution of particle energies, so a dramatically larger fraction of collisions carry energy $\\geq E_a$. This is why a modest temperature increase can multiply the rate. The Arrhenius equation captures the idea: $k$ grows exponentially as $E_a/RT$ shrinks—whether because $T$ rises or because a catalyst lowers $E_a$.",
              "zh": "升高温度会使粒子能量的麦克斯韦-玻尔兹曼分布变宽并右移，因而能量 $\\geq E_a$ 的碰撞所占比例显著增大。这就是温度小幅升高就能使速率成倍增长的原因。阿伦尼乌斯方程刻画了这一思想：当 $E_a/RT$ 变小时——无论是因为 $T$ 升高还是催化剂降低了 $E_a$——$k$ 都呈指数增长。"
            },
            {
              "type": "math",
              "tex": "k = Ae^{-E_a/RT}"
            },
            {
              "type": "note",
              "en": "AP tip: On free-response, never justify a faster rate at higher temperature with only “particles move faster and collide more often.” The credited reasoning is that a greater fraction of collisions have energy equal to or greater than the activation energy. Mention orientation only if the question asks about the frequency factor $A$.",
              "zh": "AP 提示：在简答题中，切勿只用「粒子运动更快、碰撞更频繁」来解释升温加快速率。得分要点是：能量不低于活化能的碰撞所占比例增大。只有当题目问到频率因子 $A$ 时才需要提及取向。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading an Energy Profile",
                "zh": "例题 1：解读能量曲线图"
              },
              "problem": {
                "en": "On an energy profile, reactants sit at $50\\ \\text{kJ/mol}$, the peak is at $200\\ \\text{kJ/mol}$, and products sit at $20\\ \\text{kJ/mol}$. Find $E_a$ (forward), $\\Delta H$, and $E_a$ (reverse).",
                "zh": "某能量曲线图中，反应物位于 $50\\ \\text{kJ/mol}$，峰顶位于 $200\\ \\text{kJ/mol}$，产物位于 $20\\ \\text{kJ/mol}$。求正向 $E_a$、$\\Delta H$ 和逆向 $E_a$。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "E_a(\\text{fwd}) = 200 - 50 = 150\\ \\text{kJ/mol}"
                },
                {
                  "type": "math",
                  "tex": "\\Delta H = 20 - 50 = -30\\ \\text{kJ/mol} \\quad (\\text{exothermic})"
                },
                {
                  "type": "math",
                  "tex": "E_a(\\text{rev}) = 200 - 20 = 180\\ \\text{kJ/mol}"
                },
                {
                  "type": "p",
                  "en": "Note that $E_a(\\text{fwd}) - E_a(\\text{rev}) = \\Delta H$: an exothermic reaction always has a larger reverse barrier.",
                  "zh": "注意 $E_a(\\text{正}) - E_a(\\text{逆}) = \\Delta H$：放热反应的逆向能垒总是更高。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Elementary Steps and Reaction Mechanisms",
              "zh": "基元步骤与反应机理"
            },
            {
              "type": "p",
              "en": "Most reactions do not happen in one collision. A mechanism is the sequence of elementary steps—single collision events—that add up to the overall equation. The molecularity of an elementary step is the number of particles that collide: unimolecular (one), bimolecular (two), or the rare termolecular (three). Uniquely for elementary steps, the rate law can be written directly from the step’s stoichiometry.",
              "zh": "大多数反应并非一次碰撞完成。反应机理是一系列基元步骤——单次碰撞事件——的序列，加和后得到总反应方程式。基元步骤的分子数是参与碰撞的粒子数：单分子（一个）、双分子（两个）或罕见的三分子（三个）。唯有基元步骤，其速率定律可直接由该步骤的化学计量写出。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Unimolecular step $\\text{A} \\rightarrow \\text{products}$: $\\text{rate} = k[\\text{A}]$.",
                  "zh": "单分子步骤 $\\text{A} \\rightarrow \\text{产物}$：$\\text{rate} = k[\\text{A}]$。"
                },
                {
                  "en": "Bimolecular step $\\text{A} + \\text{B} \\rightarrow \\text{products}$: $\\text{rate} = k[\\text{A}][\\text{B}]$; for $2\\text{A} \\rightarrow \\text{products}$, $\\text{rate} = k[\\text{A}]^2$.",
                  "zh": "双分子步骤 $\\text{A} + \\text{B} \\rightarrow \\text{产物}$：$\\text{rate} = k[\\text{A}][\\text{B}]$；对 $2\\text{A} \\rightarrow \\text{产物}$，$\\text{rate} = k[\\text{A}]^2$。"
                },
                {
                  "en": "Termolecular steps are rare because three particles almost never collide simultaneously with the right energy and orientation.",
                  "zh": "三分子步骤很罕见，因为三个粒子几乎不可能同时以恰当的能量和取向碰撞。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The slowest step is the rate-determining step: like the narrowest point of a funnel, it sets the pace for the whole reaction. A proposed mechanism is acceptable only if (1) the steps sum to the overall balanced equation and (2) the rate law predicted by the slow step matches the experimentally measured rate law. Species produced in one step and consumed in a later one are intermediates—they never appear in the overall equation.",
              "zh": "最慢的一步是决速步骤：如同漏斗最窄处，它决定整个反应的快慢。一个机理只有满足两个条件才可接受：（1）各步骤加和得到配平的总方程式；（2）由慢步骤预测的速率定律与实验测得的速率定律一致。在某一步生成、又在后续步骤被消耗的物种是中间体——它们绝不会出现在总方程式中。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Rate Law from a Mechanism",
                "zh": "例题 2：由机理推导速率定律"
              },
              "problem": {
                "en": "A proposed mechanism for $\\text{NO}_2 + \\text{CO} \\rightarrow \\text{NO} + \\text{CO}_2$ is: Step 1 (slow): $\\text{NO}_2 + \\text{NO}_2 \\rightarrow \\text{NO}_3 + \\text{NO}$. Step 2 (fast): $\\text{NO}_3 + \\text{CO} \\rightarrow \\text{NO}_2 + \\text{CO}_2$. Predict the rate law and identify any intermediate.",
                "zh": "$\\text{NO}_2 + \\text{CO} \\rightarrow \\text{NO} + \\text{CO}_2$ 的一个拟议机理为：第 1 步（慢）：$\\text{NO}_2 + \\text{NO}_2 \\rightarrow \\text{NO}_3 + \\text{NO}$。第 2 步（快）：$\\text{NO}_3 + \\text{CO} \\rightarrow \\text{NO}_2 + \\text{CO}_2$。预测速率定律并指出中间体。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The slow step controls the rate. It is a bimolecular collision of two $\\text{NO}_2$ molecules, so its rate law comes straight from its stoichiometry.",
                  "zh": "慢步骤控制速率。它是两个 $\\text{NO}_2$ 分子的双分子碰撞，其速率定律可直接由化学计量写出。"
                },
                {
                  "type": "math",
                  "tex": "\\text{rate} = k[\\text{NO}_2]^2"
                },
                {
                  "type": "p",
                  "en": "$\\text{CO}$ does not appear in the rate law because it enters only after the bottleneck—consistent with experiment, which finds the rate independent of $[\\text{CO}]$. $\\text{NO}_3$ is the intermediate: formed in Step 1, consumed in Step 2, absent from the overall equation.",
                  "zh": "$\\text{CO}$ 不出现在速率定律中，因为它在瓶颈之后才参与——这与实验一致：实验发现速率与 $[\\text{CO}]$ 无关。$\\text{NO}_3$ 是中间体：第 1 步生成，第 2 步消耗，不出现在总方程式中。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Catalysts: A Lower-Energy Pathway",
              "zh": "催化剂：一条能量更低的路径"
            },
            {
              "type": "p",
              "en": "A catalyst speeds a reaction by providing an alternative mechanism with a lower activation energy, so a larger fraction of collisions succeed at the same temperature. A catalyst is consumed in an early step and regenerated in a later step, so it does not appear in the overall equation and is not used up. Crucially, a catalyst changes neither $\\Delta H$ nor the position of equilibrium—it speeds the forward and reverse reactions equally. AP contexts include surface catalysis on metals, acid-base catalysis, and enzymes.",
              "zh": "催化剂通过提供一条活化能更低的替代机理来加快反应，使同温度下更大比例的碰撞得以成功。催化剂在较早的步骤中被消耗、在较晚的步骤中再生，因此不出现在总方程式中，也不会被耗尽。关键在于：催化剂既不改变 $\\Delta H$，也不改变平衡位置——它同等程度地加快正、逆反应。AP 常见情境包括金属表面催化、酸碱催化和酶催化。"
            },
            {
              "type": "note",
              "en": "Common mistake: confusing intermediates with catalysts when analyzing a mechanism. Both cancel out of the overall equation, but the order is opposite: an intermediate is formed first, then consumed; a catalyst is consumed first (it appears as a reactant in an early step), then regenerated. Check which side of the early step the species first appears on.",
              "zh": "常见错误：分析机理时混淆中间体与催化剂。两者都会在总方程式中消去，但顺序相反：中间体先生成、后消耗；催化剂先消耗（在较早步骤中作为反应物出现）、后再生。要看该物种最先出现在早期步骤的哪一侧。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "According to collision theory, which collisions between reactant particles lead to reaction?",
                "zh": "根据碰撞理论，反应物粒子之间哪些碰撞能导致反应？"
              },
              "choices": [
                "Every collision between reactant particles",
                "Only collisions with energy $\\geq E_a$ and the correct orientation",
                "Only collisions involving a catalyst",
                "Only head-on collisions, regardless of energy"
              ],
              "answer": 1,
              "explanation": {
                "en": "Both conditions are required: enough energy to surmount the barrier and an orientation that brings the reacting atoms together. “Every collision” fails because most collisions lack sufficient energy.",
                "zh": "两个条件缺一不可：足以翻越能垒的能量和使反应原子相互接触的取向。「每次碰撞都反应」不对，因为大多数碰撞能量不足。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A small temperature increase often doubles a reaction rate. The primary reason is that:",
                "zh": "温度小幅升高常使反应速率翻倍。主要原因是："
              },
              "choices": [
                "collisions become slightly more frequent",
                "the activation energy decreases",
                "$\\Delta H$ becomes more negative",
                "a much larger fraction of collisions have energy $\\geq E_a$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The Maxwell-Boltzmann distribution shifts so the high-energy tail beyond $E_a$ grows exponentially. Collision frequency does rise, but only by a few percent—far too little to double the rate, which is why that distractor is tempting but wrong. $E_a$ itself is a property of the pathway and does not change with temperature.",
                "zh": "麦克斯韦-玻尔兹曼分布右移，使超过 $E_a$ 的高能尾部呈指数增长。碰撞频率确实增大，但只增加百分之几——远不足以使速率翻倍，这正是该干扰项诱人却错误的原因。$E_a$ 本身是反应路径的属性，不随温度改变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the molecularity of the elementary step $\\text{NO} + \\text{O}_3 \\rightarrow \\text{NO}_2 + \\text{O}_2$? Give an integer.",
                "zh": "基元步骤 $\\text{NO} + \\text{O}_3 \\rightarrow \\text{NO}_2 + \\text{O}_2$ 的分子数是多少？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "two"
              ],
              "explanation": {
                "en": "Two particles collide ($\\text{NO}$ and $\\text{O}_3$), so the step is bimolecular: molecularity 2, and its rate law is $k[\\text{NO}][\\text{O}_3]$.",
                "zh": "两个粒子（$\\text{NO}$ 与 $\\text{O}_3$）发生碰撞，故该步骤为双分子：分子数为 2，速率定律为 $k[\\text{NO}][\\text{O}_3]$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A mechanism for $\\text{NO}_2 + \\text{CO} \\rightarrow \\text{NO} + \\text{CO}_2$ is: Step 1 (slow): $2\\,\\text{NO}_2 \\rightarrow \\text{NO}_3 + \\text{NO}$; Step 2 (fast): $\\text{NO}_3 + \\text{CO} \\rightarrow \\text{NO}_2 + \\text{CO}_2$. The predicted rate law is:",
                "zh": "$\\text{NO}_2 + \\text{CO} \\rightarrow \\text{NO} + \\text{CO}_2$ 的机理为：第 1 步（慢）：$2\\,\\text{NO}_2 \\rightarrow \\text{NO}_3 + \\text{NO}$；第 2 步（快）：$\\text{NO}_3 + \\text{CO} \\rightarrow \\text{NO}_2 + \\text{CO}_2$。预测的速率定律是："
              },
              "choices": [
                "$\\text{rate} = k[\\text{NO}_2][\\text{CO}]$",
                "$\\text{rate} = k[\\text{NO}_2]^2$",
                "$\\text{rate} = k[\\text{NO}_2]^2[\\text{CO}]$",
                "$\\text{rate} = k[\\text{NO}_3][\\text{CO}]$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The slow step involves two $\\text{NO}_2$ molecules, giving $k[\\text{NO}_2]^2$. The distractor $k[\\text{NO}_2][\\text{CO}]$ tempts students who read the overall equation instead of the slow step—orders never come from the overall stoichiometry.",
                "zh": "慢步骤涉及两个 $\\text{NO}_2$ 分子，得 $k[\\text{NO}_2]^2$。干扰项 $k[\\text{NO}_2][\\text{CO}]$ 诱惑那些看总方程式而不看慢步骤的学生——级数绝不能来自总反应的化学计量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the mechanism of the previous problem, which species is an intermediate?",
                "zh": "在上一题的机理中，哪种物质是中间体？"
              },
              "choices": [
                "$\\text{NO}_2$",
                "$\\text{CO}_2$",
                "$\\text{NO}_3$",
                "$\\text{CO}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\text{NO}_3$ is produced in Step 1 and consumed in Step 2, so it never appears in the overall equation. $\\text{NO}_2$ is tempting because it also appears in both steps, but it is a reactant of the overall reaction, not a species that cancels by being formed then consumed.",
                "zh": "$\\text{NO}_3$ 在第 1 步生成、第 2 步消耗，因此不出现在总方程式中。$\\text{NO}_2$ 具有迷惑性，因为它也在两步中出现，但它是总反应的反应物，并非「先生成后消耗」而消去的物种。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An uncatalyzed reaction has $E_a = 75\\ \\text{kJ/mol}$; with a catalyst, $E_a = 50\\ \\text{kJ/mol}$. By how many kJ/mol does the catalyst lower the activation energy? Give an integer.",
                "zh": "无催化时反应的 $E_a = 75\\ \\text{kJ/mol}$；有催化剂时 $E_a = 50\\ \\text{kJ/mol}$。催化剂使活化能降低了多少 kJ/mol？请填一个整数。"
              },
              "answer": "25",
              "accept": [
                "25.0",
                "25 kJ/mol"
              ],
              "explanation": {
                "en": "$75 - 50 = 25\\ \\text{kJ/mol}$. The lower barrier means far more collisions succeed, but $\\Delta H$ of the reaction is unchanged.",
                "zh": "$75 - 50 = 25\\ \\text{kJ/mol}$。能垒降低使成功碰撞大大增多，但反应的 $\\Delta H$ 不变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about a catalyst is correct?",
                "zh": "关于催化剂的下列说法哪项正确？"
              },
              "choices": [
                "It provides an alternative pathway with a lower activation energy",
                "It shifts the equilibrium toward products",
                "It makes $\\Delta H$ more negative",
                "It speeds only the forward reaction"
              ],
              "answer": 0,
              "explanation": {
                "en": "A catalyst lowers $E_a$ by opening a different mechanism. It accelerates forward and reverse reactions equally, so equilibrium position and $\\Delta H$ are untouched—the equilibrium-shift distractor is the classic trap.",
                "zh": "催化剂通过开辟不同的机理降低 $E_a$。它同等加快正、逆反应，故平衡位置和 $\\Delta H$ 均不受影响——「使平衡移动」是经典陷阱选项。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "On an energy profile, reactants sit at $20\\ \\text{kJ/mol}$ and the transition state at $80\\ \\text{kJ/mol}$. What is the forward activation energy in kJ/mol? Give an integer.",
                "zh": "某能量曲线图中，反应物位于 $20\\ \\text{kJ/mol}$，过渡态位于 $80\\ \\text{kJ/mol}$。正向活化能是多少 kJ/mol？请填一个整数。"
              },
              "answer": "60",
              "accept": [
                "60.0",
                "60 kJ/mol"
              ],
              "explanation": {
                "en": "$E_a$ is measured from the reactant level to the peak: $80 - 20 = 60\\ \\text{kJ/mol}$. Do not measure from zero or from the product level.",
                "zh": "$E_a$ 从反应物能级量到峰顶：$80 - 20 = 60\\ \\text{kJ/mol}$。不要从零点或产物能级量起。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-6-thermochemistry",
      "title": "Unit 6: Thermochemistry",
      "titleZh": "第六单元：热化学",
      "lessons": [
        {
          "id": "energy-and-calorimetry",
          "title": "Energy, Heat, and Calorimetry",
          "titleZh": "能量、热与量热法",
          "content": [
            {
              "type": "h2",
              "en": "Where Does the Heat Come From?",
              "zh": "热从哪里来？"
            },
            {
              "type": "p",
              "en": "Every chemical or physical change involves energy. In thermochemistry we split the universe into two parts: the system (the reaction or sample we care about) and the surroundings (everything else—the solvent, the container, the air). Energy is conserved, so any heat the system releases must be absorbed by the surroundings, and vice versa. Heat ($q$) is energy transferred because of a temperature difference, and it always flows spontaneously from the hotter object to the colder one until both reach the same temperature—thermal equilibrium.",
              "zh": "每个化学或物理变化都伴随能量。在热化学中我们把宇宙分为两部分：体系（我们关注的反应或样品）和环境（其余一切——溶剂、容器、空气）。能量守恒，因此体系放出的热必然被环境吸收，反之亦然。热（$q$）是因温度差而转移的能量，它总是自发地从高温物体流向低温物体，直到两者温度相同——即达到热平衡。"
            },
            {
              "type": "h3",
              "en": "Endothermic vs. Exothermic at the Particulate Level",
              "zh": "粒子层面的吸热与放热"
            },
            {
              "type": "p",
              "en": "In an exothermic process the system releases heat to the surroundings ($q_{\\text{sys}} < 0$), so the surroundings warm up. In an endothermic process the system absorbs heat ($q_{\\text{sys}} > 0$), so the surroundings cool down. At the particulate level, the sign of $q$ comes from bonds and attractions: breaking bonds or overcoming intermolecular attractions always requires energy, while forming bonds or new attractions always releases energy. A reaction is exothermic when the energy released forming new bonds exceeds the energy invested breaking old ones.",
              "zh": "放热过程中，体系向环境释放热量（$q_{\\text{sys}} < 0$），环境温度升高。吸热过程中，体系吸收热量（$q_{\\text{sys}} > 0$），环境温度降低。在粒子层面，$q$ 的符号来自化学键与相互作用：断开化学键或克服分子间作用力总是需要能量，而形成化学键或新的相互作用总是释放能量。当形成新键释放的能量超过断开旧键消耗的能量时，反应就是放热的。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Breaking bonds/attractions: energy in (endothermic step).",
                  "zh": "断键/克服作用力：吸收能量（吸热步骤）。"
                },
                {
                  "en": "Forming bonds/attractions: energy out (exothermic step).",
                  "zh": "成键/形成作用力：释放能量（放热步骤）。"
                },
                {
                  "en": "Temperature measures the average kinetic energy of the particles; heat flow changes that average.",
                  "zh": "温度衡量粒子的平均动能；热的流动改变这个平均值。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: On the exam, “the beaker feels cold” means the reaction is endothermic—the system pulled heat OUT of the surroundings (your hand). Students often reverse this. Always identify the system first, then assign the sign of $q$ from the system’s point of view.",
              "zh": "AP 提示：考试中「烧杯摸起来变冷」意味着反应吸热——体系从环境（你的手）中吸走了热量。学生常常把这点弄反。务必先确定体系是什么，再从体系的角度确定 $q$ 的符号。"
            },
            {
              "type": "h3",
              "en": "Specific Heat Capacity and q = mcΔT",
              "zh": "比热容与 q = mcΔT"
            },
            {
              "type": "p",
              "en": "The specific heat capacity ($c$) of a substance is the heat needed to raise the temperature of $1\\ \\text{g}$ of it by $1\\ °\\text{C}$. Water’s is unusually large, $c = 4.18\\ \\text{J/(g·°C)}$, because heating water must disrupt its extensive hydrogen bonding. When a sample of mass $m$ changes temperature by $\\Delta T = T_f - T_i$ without changing phase, the heat transferred is:",
              "zh": "物质的比热容（$c$）是使 $1\\ \\text{g}$ 该物质升高 $1\\ °\\text{C}$ 所需的热量。水的比热容特别大，$c = 4.18\\ \\text{J/(g·°C)}$，因为加热水必须扰动其大量的氢键。当质量为 $m$ 的样品温度变化 $\\Delta T = T_f - T_i$ 且不发生相变时，传递的热量为："
            },
            {
              "type": "math",
              "tex": "q = mc\\Delta T"
            },
            {
              "type": "p",
              "en": "The sign takes care of itself: if the temperature rises, $\\Delta T > 0$ and $q > 0$ (heat absorbed); if it falls, $q < 0$ (heat released). A substance with a small specific heat changes temperature dramatically for the same heat input—metals heat up fast, water heats up slowly.",
              "zh": "符号会自动处理：温度升高时 $\\Delta T > 0$，$q > 0$（吸热）；温度降低时 $q < 0$（放热）。比热容小的物质在相同热量输入下温度变化很大——金属升温快，水升温慢。"
            },
            {
              "type": "h3",
              "en": "Coffee-Cup Calorimetry",
              "zh": "咖啡杯量热法"
            },
            {
              "type": "p",
              "en": "A coffee-cup calorimeter is an insulated cup at constant (atmospheric) pressure. A reaction runs in a known mass of solution, and the solution’s temperature change reveals the heat. Because the cup is insulated, the heat released by the reaction equals the heat absorbed by the solution: $q_{\\text{rxn}} = -q_{\\text{solution}}$. Dividing by the moles of limiting reactant converts $q_{\\text{rxn}}$ into the molar enthalpy of reaction, $\\Delta H$ in $\\text{kJ/mol}$. The same balance works for a hot metal dropped into cool water: $q_{\\text{metal}} = -q_{\\text{water}}$, which lets you solve for the metal’s specific heat.",
              "zh": "咖啡杯量热计是一个在恒定（大气）压强下的绝热杯。反应在已知质量的溶液中进行，溶液的温度变化揭示了热量。由于杯子绝热，反应放出的热等于溶液吸收的热：$q_{\\text{rxn}} = -q_{\\text{solution}}$。除以限量反应物的摩尔数，就把 $q_{\\text{rxn}}$ 换算成摩尔反应焓 $\\Delta H$（$\\text{kJ/mol}$）。同样的平衡也适用于把热金属投入冷水：$q_{\\text{metal}} = -q_{\\text{water}}$，由此可求金属的比热容。"
            },
            {
              "type": "math",
              "tex": "q_{\\text{rxn}} = -q_{\\text{solution}} = -m_{\\text{soln}}\\, c_{\\text{soln}}\\, \\Delta T \\qquad \\Delta H = \\frac{q_{\\text{rxn}}}{n}"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting the negative sign. If the solution warms up ($\\Delta T > 0$), the solution gained heat, so the reaction must have released it: $q_{\\text{rxn}}$ and $\\Delta H$ are negative. Also, use the mass of the whole solution (water + dissolved solids), not just the water.",
              "zh": "常见错误：忘记负号。若溶液温度升高（$\\Delta T > 0$），说明溶液获得了热量，那么反应一定释放了热量：$q_{\\text{rxn}}$ 和 $\\Delta H$ 为负。另外，要用整个溶液的质量（水 + 溶解的固体），而不仅仅是水的质量。"
            },
            {
              "type": "h3",
              "en": "Heating Curves and Phase Changes",
              "zh": "加热曲线与相变"
            },
            {
              "type": "p",
              "en": "A heating curve plots temperature vs. heat added. Sloped segments are single phases warming up—use $q = mc\\Delta T$ with that phase’s specific heat. Flat plateaus are phase changes: the temperature stays constant while added energy goes entirely into overcoming intermolecular attractions (increasing potential energy, not kinetic energy). For the plateaus, use the molar enthalpies of fusion and vaporization:",
              "zh": "加热曲线画出温度随所加热量的变化。倾斜段是单一相在升温——用该相的比热容代入 $q = mc\\Delta T$。水平段是相变：温度保持不变，所加能量全部用于克服分子间作用力（增加势能，而非动能）。对于平台段，使用摩尔熔化焓和摩尔汽化焓："
            },
            {
              "type": "math",
              "tex": "q = n\\,\\Delta H_{\\text{fus}} \\qquad q = n\\,\\Delta H_{\\text{vap}}"
            },
            {
              "type": "p",
              "en": "For water, $\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}$ and $\\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}$. Vaporization takes far more energy than melting because it must completely separate the molecules, breaking essentially all of the hydrogen bonds rather than just loosening the rigid structure. A multi-step problem (ice at $-10\\,°\\text{C}$ to steam) is just the sum of each segment’s $q$.",
              "zh": "对于水，$\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}$，$\\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}$。汽化比熔化需要多得多的能量，因为它必须使分子完全分离，几乎断开所有氢键，而不只是松动刚性结构。多步骤问题（$-10\\,°\\text{C}$ 的冰变成水蒸气）就是把每一段的 $q$ 相加。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Finding a Metal’s Specific Heat",
                "zh": "例题 1：求金属的比热容"
              },
              "problem": {
                "en": "A $25.0\\ \\text{g}$ piece of metal at $100.0\\,°\\text{C}$ is dropped into $50.0\\ \\text{g}$ of water at $20.0\\,°\\text{C}$. The final temperature is $25.0\\,°\\text{C}$. Find the specific heat of the metal. ($c_{\\text{water}} = 4.18\\ \\text{J/(g·°C)}$)",
                "zh": "将 $25.0\\ \\text{g}$、$100.0\\,°\\text{C}$ 的金属块投入 $50.0\\ \\text{g}$、$20.0\\,°\\text{C}$ 的水中。最终温度为 $25.0\\,°\\text{C}$。求金属的比热容。（$c_{\\text{水}} = 4.18\\ \\text{J/(g·°C)}$）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Heat lost by the metal equals heat gained by the water: $q_{\\text{metal}} = -q_{\\text{water}}$. First find the water’s heat.",
                  "zh": "金属失去的热等于水获得的热：$q_{\\text{metal}} = -q_{\\text{water}}$。先求水吸收的热量。"
                },
                {
                  "type": "math",
                  "tex": "q_{\\text{water}} = (50.0\\ \\text{g})(4.18\\ \\text{J/(g·°C)})(25.0 - 20.0)\\,°\\text{C} = +1045\\ \\text{J}"
                },
                {
                  "type": "math",
                  "tex": "q_{\\text{metal}} = -1045\\ \\text{J} = (25.0\\ \\text{g})\\, c \\,(25.0 - 100.0)\\,°\\text{C}"
                },
                {
                  "type": "math",
                  "tex": "c = \\frac{-1045}{(25.0)(-75.0)} = 0.557\\ \\text{J/(g·°C)}"
                },
                {
                  "type": "p",
                  "en": "The small specific heat (much less than water’s) is typical of metals—consistent with the metal’s large temperature drop of $75.0\\,°\\text{C}$ versus the water’s rise of only $5.0\\,°\\text{C}$.",
                  "zh": "这个较小的比热容（远小于水）是金属的典型特征——与金属温度下降 $75.0\\,°\\text{C}$ 而水仅升高 $5.0\\,°\\text{C}$ 的现象一致。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Enthalpy from a Coffee-Cup Calorimeter",
                "zh": "例题 2：由咖啡杯量热计求焓变"
              },
              "problem": {
                "en": "When $0.0500$ mol of $\\text{NaOH}$ dissolves in $200.0\\ \\text{g}$ of water in a coffee-cup calorimeter, the temperature rises from $22.00\\,°\\text{C}$ to $24.64\\,°\\text{C}$. Find $\\Delta H$ of dissolution in $\\text{kJ/mol}$. (Assume $c = 4.18\\ \\text{J/(g·°C)}$ for the solution.)",
                "zh": "在咖啡杯量热计中，$0.0500$ mol $\\text{NaOH}$ 溶于 $200.0\\ \\text{g}$ 水，温度从 $22.00\\,°\\text{C}$ 升至 $24.64\\,°\\text{C}$。求溶解的 $\\Delta H$（$\\text{kJ/mol}$）。（设溶液 $c = 4.18\\ \\text{J/(g·°C)}$。）"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "q_{\\text{soln}} = (200.0\\ \\text{g})(4.18\\ \\text{J/(g·°C)})(2.64\\,°\\text{C}) = 2207\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "The solution gained heat, so the dissolution released it: $q_{\\text{rxn}} = -2207\\ \\text{J} = -2.21\\ \\text{kJ}$.",
                  "zh": "溶液获得了热量，说明溶解过程释放了热量：$q_{\\text{rxn}} = -2207\\ \\text{J} = -2.21\\ \\text{kJ}$。"
                },
                {
                  "type": "math",
                  "tex": "\\Delta H = \\frac{-2.21\\ \\text{kJ}}{0.0500\\ \\text{mol}} = -44.1\\ \\text{kJ/mol}"
                },
                {
                  "type": "p",
                  "en": "The negative sign confirms dissolving $\\text{NaOH}$ is exothermic, matching the observed temperature rise.",
                  "zh": "负号证实 $\\text{NaOH}$ 的溶解是放热过程，与观察到的温度升高一致。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A cold pack is activated and the bag feels cold to the touch. From the system’s (the reaction’s) point of view:",
                "zh": "激活冰袋后，袋子摸起来是冷的。从体系（反应）的角度看："
              },
              "choices": [
                "$q < 0$; the reaction is exothermic",
                "$q > 0$; the reaction is exothermic",
                "$q > 0$; the reaction is endothermic",
                "$q < 0$; the reaction is endothermic"
              ],
              "answer": 2,
              "explanation": {
                "en": "The pack feels cold because the reaction absorbs heat from the surroundings (your hand), so $q_{\\text{sys}} > 0$: endothermic. Choice A is tempting because “cold” sounds like heat leaving, but the heat leaves your hand, not the system.",
                "zh": "冰袋摸起来冷是因为反应从环境（你的手）吸收热量，所以 $q_{\\text{sys}} > 0$：吸热。选项 A 很有迷惑性，因为「冷」听起来像热量离开，但离开的是你手上的热量，不是体系的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How much heat, in kJ, is needed to warm $50.0\\ \\text{g}$ of water ($c = 4.18\\ \\text{J/(g·°C)}$) from $20.0\\,°\\text{C}$ to $30.0\\,°\\text{C}$? Give 3 sig figs.",
                "zh": "将 $50.0\\ \\text{g}$ 水（$c = 4.18\\ \\text{J/(g·°C)}$）从 $20.0\\,°\\text{C}$ 加热到 $30.0\\,°\\text{C}$ 需要多少 kJ 热量？保留 3 位有效数字。"
              },
              "answer": "2.09",
              "accept": [
                "2.1",
                "+2.09"
              ],
              "explanation": {
                "en": "$q = mc\\Delta T = (50.0)(4.18)(10.0) = 2090\\ \\text{J} = 2.09\\ \\text{kJ}$.",
                "zh": "$q = mc\\Delta T = (50.0)(4.18)(10.0) = 2090\\ \\text{J} = 2.09\\ \\text{kJ}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Equal masses of iron ($c = 0.449\\ \\text{J/(g·°C)}$) and water ($c = 4.18\\ \\text{J/(g·°C)}$) each absorb the same amount of heat. Which statement is correct?",
                "zh": "质量相等的铁（$c = 0.449\\ \\text{J/(g·°C)}$）和水（$c = 4.18\\ \\text{J/(g·°C)}$）各吸收相同的热量。下列哪项正确？"
              },
              "choices": [
                "The water’s temperature rises more",
                "Both temperatures rise equally",
                "The iron’s temperature rises more",
                "Neither temperature changes"
              ],
              "answer": 2,
              "explanation": {
                "en": "From $\\Delta T = q/(mc)$, the smaller specific heat gives the larger $\\Delta T$, so iron warms about 9 times more. The water answer tempts students who confuse “holds more heat” with “changes temperature more.”",
                "zh": "由 $\\Delta T = q/(mc)$，比热容越小 $\\Delta T$ 越大，铁的升温约是水的 9 倍。选水的学生把「储热多」和「温度变化大」混淆了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A hot piece of copper is placed in cool water inside an insulated container. Which statement describes the final state?",
                "zh": "将一块热铜放入绝热容器内的冷水中。哪项描述了最终状态？"
              },
              "choices": [
                "The copper and water reach the same final temperature",
                "The copper ends slightly hotter than the water",
                "Heat flows until the copper has lost all its thermal energy",
                "The water heats up while the copper stays at its initial temperature"
              ],
              "answer": 0,
              "explanation": {
                "en": "Heat flows from hot to cold until thermal equilibrium—one common final temperature. The copper does not lose “all” its thermal energy; heat flow stops when the temperatures are equal, not when the copper’s energy is zero.",
                "zh": "热量从高温流向低温，直到热平衡——达到同一个最终温度。铜不会失去「全部」热能；当温度相等时热流停止，而不是铜的能量为零时。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a coffee-cup calorimeter, a reaction of $0.0250$ mol of limiting reactant warms $100.0\\ \\text{g}$ of solution ($c = 4.18\\ \\text{J/(g·°C)}$) by $5.00\\,°\\text{C}$. What is $\\Delta H$ in kJ/mol? Give a signed number to 3 sig figs.",
                "zh": "在咖啡杯量热计中，$0.0250$ mol 限量反应物发生反应，使 $100.0\\ \\text{g}$ 溶液（$c = 4.18\\ \\text{J/(g·°C)}$）升温 $5.00\\,°\\text{C}$。$\\Delta H$ 是多少 kJ/mol？给出带符号的数，保留 3 位有效数字。"
              },
              "answer": "-83.6",
              "accept": [
                "-83.60",
                "-84"
              ],
              "explanation": {
                "en": "$q_{\\text{soln}} = (100.0)(4.18)(5.00) = 2090\\ \\text{J}$, so $q_{\\text{rxn}} = -2.09\\ \\text{kJ}$ and $\\Delta H = -2.09/0.0250 = -83.6\\ \\text{kJ/mol}$. The solution warmed, so the reaction released heat: the sign must be negative.",
                "zh": "$q_{\\text{soln}} = (100.0)(4.18)(5.00) = 2090\\ \\text{J}$，故 $q_{\\text{rxn}} = -2.09\\ \\text{kJ}$，$\\Delta H = -2.09/0.0250 = -83.6\\ \\text{kJ/mol}$。溶液升温，说明反应放热：符号必须为负。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "During the flat plateau of a heating curve while ice melts, the temperature does not rise because the added energy:",
                "zh": "在加热曲线的水平段（冰熔化时），温度不上升是因为所加的能量："
              },
              "choices": [
                "is lost to the surroundings",
                "increases the average kinetic energy of the molecules",
                "breaks covalent O–H bonds inside the molecules",
                "increases the potential energy by overcoming intermolecular attractions"
              ],
              "answer": 3,
              "explanation": {
                "en": "During a phase change, energy goes into separating molecules against their intermolecular attractions (potential energy), not into faster motion (kinetic energy, which sets temperature). The covalent-bond choice is a classic trap: melting disrupts hydrogen bonds BETWEEN molecules, never the O–H bonds within them.",
                "zh": "相变期间，能量用于克服分子间作用力使分子分离（势能增加），而不是使分子运动更快（决定温度的动能）。共价键选项是经典陷阱：熔化破坏的是分子之间的氢键，绝不是分子内部的 O–H 键。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How much heat, in kJ, is required to melt $2.00$ mol of ice at $0\\,°\\text{C}$? ($\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}$) Give 3 sig figs.",
                "zh": "在 $0\\,°\\text{C}$ 下熔化 $2.00$ mol 冰需要多少 kJ 热量？（$\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}$）保留 3 位有效数字。"
              },
              "answer": "12.0",
              "accept": [
                "12",
                "12.02"
              ],
              "explanation": {
                "en": "$q = n\\,\\Delta H_{\\text{fus}} = (2.00\\ \\text{mol})(6.01\\ \\text{kJ/mol}) = 12.0\\ \\text{kJ}$. No $\\Delta T$ appears—the temperature is constant during the phase change.",
                "zh": "$q = n\\,\\Delta H_{\\text{fus}} = (2.00\\ \\text{mol})(6.01\\ \\text{kJ/mol}) = 12.0\\ \\text{kJ}$。式中没有 $\\Delta T$——相变期间温度不变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For water, $\\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}$ is much larger than $\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}$. The best particulate-level explanation is that vaporization:",
                "zh": "对水而言，$\\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}$ 远大于 $\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}$。最好的粒子层面解释是汽化："
              },
              "choices": [
                "occurs at a higher temperature, so molecules have more energy",
                "must essentially eliminate all intermolecular attractions, while melting only loosens the ordered structure",
                "breaks stronger covalent bonds than melting does",
                "produces a gas, and gases always store more heat"
              ],
              "answer": 1,
              "explanation": {
                "en": "Vaporizing separates molecules completely, overcoming nearly all hydrogen bonding; melting merely disrupts the rigid lattice while molecules stay close. The “higher temperature” choice is tempting but doesn’t explain the energy of the transition itself.",
                "zh": "汽化使分子完全分离，几乎克服所有氢键；熔化只是破坏刚性晶格，分子仍然靠近。「温度更高」的选项有迷惑性，但它并不能解释相变本身所需的能量。"
              }
            }
          ]
        },
        {
          "id": "enthalpy-and-hess-law",
          "title": "Enthalpy of Reaction and Hess's Law",
          "titleZh": "反应焓与盖斯定律",
          "content": [
            {
              "type": "h2",
              "en": "Enthalpy: Heat at Constant Pressure",
              "zh": "焓：恒压下的热"
            },
            {
              "type": "p",
              "en": "The enthalpy change of a reaction, $\\Delta H_{\\text{rxn}}$, is the heat exchanged at constant pressure—exactly what a coffee-cup calorimeter measures. A negative $\\Delta H$ means exothermic (products lower in enthalpy than reactants); positive means endothermic. Crucially, $\\Delta H$ is an extensive property tied to the balanced equation as written: it scales with the amounts. If $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$ has $\\Delta H = -890\\ \\text{kJ/mol}_{\\text{rxn}}$, burning half a mole of $\\text{CH}_4$ releases $445\\ \\text{kJ}$, and reversing the equation flips the sign to $+890\\ \\text{kJ/mol}_{\\text{rxn}}$.",
              "zh": "反应的焓变 $\\Delta H_{\\text{rxn}}$ 是恒压下交换的热量——正是咖啡杯量热计所测的量。$\\Delta H$ 为负表示放热（生成物的焓低于反应物）；为正表示吸热。关键是，$\\Delta H$ 是广延性质，与所写的配平方程式绑定：它随物质的量成比例缩放。若 $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$ 的 $\\Delta H = -890\\ \\text{kJ/mol}_{\\text{rxn}}$，则燃烧半摩尔 $\\text{CH}_4$ 释放 $445\\ \\text{kJ}$，而将方程式反写则符号翻转为 $+890\\ \\text{kJ/mol}_{\\text{rxn}}$。"
            },
            {
              "type": "p",
              "en": "Treat $\\Delta H$ like another stoichiometric quantity: $-890\\ \\text{kJ}$ “per 1 mol $\\text{CH}_4$” or “per 2 mol $\\text{H}_2\\text{O}$ formed.” Converting grams → moles → kJ is one dimensional-analysis chain.",
              "zh": "把 $\\Delta H$ 当作另一个化学计量：「每 1 mol $\\text{CH}_4$」或「每生成 2 mol $\\text{H}_2\\text{O}$」对应 $-890\\ \\text{kJ}$。克 → 摩尔 → kJ 的换算就是一条量纲分析链。"
            },
            {
              "type": "h3",
              "en": "Standard Enthalpies of Formation",
              "zh": "标准生成焓"
            },
            {
              "type": "p",
              "en": "The standard enthalpy of formation, $\\Delta H_f^\\circ$, is the enthalpy change when one mole of a compound forms from its elements in their standard states (the most stable form at $1$ atm, usually $25\\,°\\text{C}$). By definition, $\\Delta H_f^\\circ = 0$ for an element in its standard state: $\\text{O}_2(g)$, $\\text{N}_2(g)$, C(graphite), Fe(s). Formation enthalpies let you compute any reaction enthalpy from a table:",
              "zh": "标准生成焓 $\\Delta H_f^\\circ$ 是由处于标准状态的单质（$1$ atm 下最稳定的形态，通常 $25\\,°\\text{C}$）生成 1 摩尔化合物时的焓变。根据定义，标准状态下单质的 $\\Delta H_f^\\circ = 0$：$\\text{O}_2(g)$、$\\text{N}_2(g)$、C（石墨）、Fe(s)。利用生成焓可以从数据表计算任何反应的焓变："
            },
            {
              "type": "math",
              "tex": "\\Delta H_{\\text{rxn}}^\\circ = \\sum n_p\\,\\Delta H_f^\\circ(\\text{products}) - \\sum n_r\\,\\Delta H_f^\\circ(\\text{reactants})"
            },
            {
              "type": "note",
              "en": "AP tip: The three most-lost points on this calculation are (1) forgetting to multiply each $\\Delta H_f^\\circ$ by its coefficient, (2) subtracting in the wrong order (it is products MINUS reactants), and (3) using $\\Delta H_f^\\circ$ of $\\text{H}_2\\text{O}(g)$ when the equation shows $\\text{H}_2\\text{O}(l)$—phases matter because they have different formation enthalpies.",
              "zh": "AP 提示：这一计算最常丢分的三处：（1）忘记将每个 $\\Delta H_f^\\circ$ 乘以其系数；（2）相减顺序颠倒（应为生成物减反应物）；（3）方程式写 $\\text{H}_2\\text{O}(l)$ 却用了 $\\text{H}_2\\text{O}(g)$ 的 $\\Delta H_f^\\circ$——物态很重要，因为它们的生成焓不同。"
            },
            {
              "type": "h3",
              "en": "Hess's Law",
              "zh": "盖斯定律"
            },
            {
              "type": "p",
              "en": "Enthalpy is a state function: $\\Delta H$ depends only on the initial and final states, not on the path. Hess's law follows—if a reaction can be written as the sum of steps, its $\\Delta H$ is the sum of the steps' $\\Delta H$ values. To combine given equations into a target equation:",
              "zh": "焓是状态函数：$\\Delta H$ 只取决于始态和终态，与路径无关。盖斯定律由此而来——若一个反应可以写成若干步骤之和，其 $\\Delta H$ 就是各步骤 $\\Delta H$ 之和。将已知方程式组合成目标方程式时："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Reverse an equation → flip the sign of its $\\Delta H$.",
                  "zh": "反写方程式 → 其 $\\Delta H$ 变号。"
                },
                {
                  "en": "Multiply an equation by a factor → multiply its $\\Delta H$ by the same factor.",
                  "zh": "方程式乘以某系数 → 其 $\\Delta H$ 乘以同一系数。"
                },
                {
                  "en": "Add the equations → species appearing on both sides cancel, and the $\\Delta H$ values add.",
                  "zh": "将方程式相加 → 两边都出现的物种消去，各 $\\Delta H$ 相加。"
                },
                {
                  "en": "Strategy: locate each target species in the given equations and arrange it on the correct side with the correct coefficient.",
                  "zh": "策略：在已知方程式中找到目标方程式的每个物种，将其放到正确一侧并配上正确系数。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Bond Enthalpy Estimates",
              "zh": "键焓估算"
            },
            {
              "type": "p",
              "en": "A bond enthalpy is the average energy required to break one mole of that bond in the gas phase. Since breaking bonds costs energy and forming bonds releases it:",
              "zh": "键焓是气相中断开 1 摩尔该化学键所需的平均能量。由于断键耗能、成键放能："
            },
            {
              "type": "math",
              "tex": "\\Delta H_{\\text{rxn}} \\approx \\sum \\text{BE(bonds broken)} - \\sum \\text{BE(bonds formed)}"
            },
            {
              "type": "p",
              "en": "A reaction is exothermic when the bonds formed are collectively stronger than the bonds broken. This method is only an estimate: tabulated bond enthalpies are averages over many different molecules (a C–H bond in $\\text{CH}_4$ is not identical to one in $\\text{CHCl}_3$), and the method applies strictly to gas-phase species—it ignores intermolecular attractions in liquids and solids. Expect answers within roughly $\\pm 10\\ \\text{kJ}$ of the true value.",
              "zh": "当形成的键整体上强于断开的键时，反应放热。这种方法只是估算：表中键焓是许多不同分子的平均值（$\\text{CH}_4$ 中的 C–H 键与 $\\text{CHCl}_3$ 中的并不完全相同），且严格来说仅适用于气相物种——它忽略了液体和固体中的分子间作用力。估算结果与真实值通常相差约 $\\pm 10\\ \\text{kJ}$ 以内。"
            },
            {
              "type": "note",
              "en": "Common mistake: writing “formed − broken.” Remember the physics, not just the formula: breaking bonds is the energy you PAY (positive), forming bonds is the energy you GET BACK (negative), so $\\Delta H \\approx \\text{broken} - \\text{formed}$. If your combustion estimate comes out positive, you almost certainly reversed the subtraction.",
              "zh": "常见错误：写成「成键 − 断键」。要记住物理本质而不只是公式：断键是你付出的能量（正），成键是你收回的能量（负），所以 $\\Delta H \\approx \\text{断键} - \\text{成键}$。如果你估算的燃烧反应结果为正，几乎可以肯定是减反了。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: ΔH°rxn from Formation Enthalpies",
                "zh": "例题 1：由生成焓求 ΔH°rxn"
              },
              "problem": {
                "en": "Compute $\\Delta H_{\\text{rxn}}^\\circ$ for $\\text{CH}_4(g) + 2\\,\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\,\\text{H}_2\\text{O}(l)$, given $\\Delta H_f^\\circ$ in kJ/mol: $\\text{CH}_4(g) = -74.8$, $\\text{CO}_2(g) = -393.5$, $\\text{H}_2\\text{O}(l) = -285.8$.",
                "zh": "已知 $\\Delta H_f^\\circ$（kJ/mol）：$\\text{CH}_4(g) = -74.8$，$\\text{CO}_2(g) = -393.5$，$\\text{H}_2\\text{O}(l) = -285.8$，求 $\\text{CH}_4(g) + 2\\,\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\,\\text{H}_2\\text{O}(l)$ 的 $\\Delta H_{\\text{rxn}}^\\circ$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply products minus reactants, multiplying by coefficients. $\\text{O}_2(g)$ is an element in its standard state, so its $\\Delta H_f^\\circ = 0$.",
                  "zh": "按生成物减反应物计算，并乘以系数。$\\text{O}_2(g)$ 是标准状态下的单质，$\\Delta H_f^\\circ = 0$。"
                },
                {
                  "type": "math",
                  "tex": "\\Delta H^\\circ = [(-393.5) + 2(-285.8)] - [(-74.8) + 2(0)]"
                },
                {
                  "type": "math",
                  "tex": "\\Delta H^\\circ = -965.1 + 74.8 = -890.3\\ \\text{kJ/mol}_{\\text{rxn}}"
                },
                {
                  "type": "p",
                  "en": "The large negative value is expected for a combustion reaction.",
                  "zh": "燃烧反应得到较大的负值，符合预期。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Hess's Law Combination",
                "zh": "例题 2：盖斯定律组合"
              },
              "problem": {
                "en": "Find $\\Delta H$ for $\\text{C(graphite)} + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$ using: (1) $\\text{C(graphite)} + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$, $\\Delta H_1 = -393.5\\ \\text{kJ}$; (2) $\\text{CO}(g) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$, $\\Delta H_2 = -283.0\\ \\text{kJ}$.",
                "zh": "利用：(1) $\\text{C(石墨)} + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$，$\\Delta H_1 = -393.5\\ \\text{kJ}$；(2) $\\text{CO}(g) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$，$\\Delta H_2 = -283.0\\ \\text{kJ}$，求 $\\text{C(石墨)} + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$ 的 $\\Delta H$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The target has CO as a product, but equation (2) has it as a reactant—so reverse (2) and flip its sign: $\\text{CO}_2 \\rightarrow \\text{CO} + \\tfrac{1}{2}\\text{O}_2$, $\\Delta H = +283.0\\ \\text{kJ}$. Keep (1) as written.",
                  "zh": "目标方程式中 CO 是生成物，而方程式 (2) 中它是反应物——因此将 (2) 反写并变号：$\\text{CO}_2 \\rightarrow \\text{CO} + \\tfrac{1}{2}\\text{O}_2$，$\\Delta H = +283.0\\ \\text{kJ}$。方程式 (1) 保持不变。"
                },
                {
                  "type": "p",
                  "en": "Adding them, $\\text{CO}_2$ cancels and $\\tfrac{1}{2}\\text{O}_2$ cancels from the $\\text{O}_2$ on the left, leaving the target equation.",
                  "zh": "相加后，$\\text{CO}_2$ 消去，左边的 $\\text{O}_2$ 与 $\\tfrac{1}{2}\\text{O}_2$ 部分消去，恰好得到目标方程式。"
                },
                {
                  "type": "math",
                  "tex": "\\Delta H = -393.5 + 283.0 = -110.5\\ \\text{kJ}"
                },
                {
                  "type": "p",
                  "en": "This is the standard route to a $\\Delta H$ that can’t be measured directly—burning carbon always produces some $\\text{CO}_2$, so the partial oxidation to CO can’t be isolated in a calorimeter.",
                  "zh": "这是求无法直接测量的 $\\Delta H$ 的标准方法——燃烧碳总会生成一些 $\\text{CO}_2$，因此无法在量热计中单独实现到 CO 的部分氧化。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Given $2\\,\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{H}_2\\text{O}(g)$ with $\\Delta H = -483.6\\ \\text{kJ/mol}_{\\text{rxn}}$, how much heat is released when $1.00$ mol of $\\text{H}_2\\text{O}(g)$ forms?",
                "zh": "已知 $2\\,\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{H}_2\\text{O}(g)$，$\\Delta H = -483.6\\ \\text{kJ/mol}_{\\text{rxn}}$。生成 $1.00$ mol $\\text{H}_2\\text{O}(g)$ 时释放多少热量？"
              },
              "choices": [
                "$483.6\\ \\text{kJ}$",
                "$241.8\\ \\text{kJ}$",
                "$967.2\\ \\text{kJ}$",
                "$120.9\\ \\text{kJ}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The equation as written produces 2 mol of water per $-483.6\\ \\text{kJ}$, so 1 mol corresponds to half: $241.8\\ \\text{kJ}$ released. Choosing $483.6$ ignores that $\\Delta H$ is tied to the coefficients of the balanced equation.",
                "zh": "所写方程式每释放 $-483.6\\ \\text{kJ}$ 生成 2 mol 水，故 1 mol 对应一半：释放 $241.8\\ \\text{kJ}$。选 $483.6$ 是忽略了 $\\Delta H$ 与配平方程式系数的对应关系。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $\\Delta H_f^\\circ$ (kJ/mol): $\\text{C}_2\\text{H}_5\\text{OH}(l) = -277.7$, $\\text{CO}_2(g) = -393.5$, $\\text{H}_2\\text{O}(l) = -285.8$, find $\\Delta H^\\circ$ for $\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\,\\text{O}_2(g) \\rightarrow 2\\,\\text{CO}_2(g) + 3\\,\\text{H}_2\\text{O}(l)$ in kJ. Give a signed number to the nearest tenth.",
                "zh": "利用 $\\Delta H_f^\\circ$（kJ/mol）：$\\text{C}_2\\text{H}_5\\text{OH}(l) = -277.7$，$\\text{CO}_2(g) = -393.5$，$\\text{H}_2\\text{O}(l) = -285.8$，求 $\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\,\\text{O}_2(g) \\rightarrow 2\\,\\text{CO}_2(g) + 3\\,\\text{H}_2\\text{O}(l)$ 的 $\\Delta H^\\circ$（kJ）。给出带符号的数，精确到十分位。"
              },
              "answer": "-1366.7",
              "accept": [
                "-1366.70",
                "-1367"
              ],
              "explanation": {
                "en": "$[2(-393.5) + 3(-285.8)] - [(-277.7) + 3(0)] = -1644.4 + 277.7 = -1366.7\\ \\text{kJ}$. Remember $\\text{O}_2(g)$ contributes zero and each value is multiplied by its coefficient.",
                "zh": "$[2(-393.5) + 3(-285.8)] - [(-277.7) + 3(0)] = -1644.4 + 277.7 = -1366.7\\ \\text{kJ}$。记住 $\\text{O}_2(g)$ 贡献为零，且每个值都要乘以系数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which species has $\\Delta H_f^\\circ = 0$?",
                "zh": "下列哪种物质的 $\\Delta H_f^\\circ = 0$？"
              },
              "choices": [
                "$\\text{CO}_2(g)$",
                "$\\text{H}_2\\text{O}(l)$",
                "$\\text{O}(g)$",
                "$\\text{N}_2(g)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\Delta H_f^\\circ = 0$ only for elements in their standard states, and nitrogen’s standard state is the diatomic gas $\\text{N}_2(g)$. $\\text{O}(g)$ is tempting because it’s an element, but atomic oxygen is NOT oxygen’s standard state—$\\text{O}_2(g)$ is, so forming $\\text{O}(g)$ has a large positive $\\Delta H_f^\\circ$.",
                "zh": "只有标准状态下的单质 $\\Delta H_f^\\circ = 0$，氮的标准状态是双原子气体 $\\text{N}_2(g)$。$\\text{O}(g)$ 有迷惑性，因为它也是元素，但原子氧不是氧的标准状态——$\\text{O}_2(g)$ 才是，因此生成 $\\text{O}(g)$ 的 $\\Delta H_f^\\circ$ 是较大的正值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A reaction has $\\Delta H = +92\\ \\text{kJ/mol}_{\\text{rxn}}$. If the equation is reversed and then multiplied by 2, the new $\\Delta H$ is:",
                "zh": "某反应 $\\Delta H = +92\\ \\text{kJ/mol}_{\\text{rxn}}$。若将方程式反写再乘以 2，新的 $\\Delta H$ 是："
              },
              "choices": [
                "$+184\\ \\text{kJ/mol}_{\\text{rxn}}$",
                "$-46\\ \\text{kJ/mol}_{\\text{rxn}}$",
                "$-184\\ \\text{kJ/mol}_{\\text{rxn}}$",
                "$+92\\ \\text{kJ/mol}_{\\text{rxn}}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Reversing flips the sign ($-92$), and doubling multiplies it by 2 ($-184\\ \\text{kJ/mol}_{\\text{rxn}}$). Choosing $+184$ means the sign flip was forgotten—the most common Hess’s-law slip.",
                "zh": "反写使符号翻转（$-92$），乘以 2 再翻倍（$-184\\ \\text{kJ/mol}_{\\text{rxn}}$）。选 $+184$ 说明忘了变号——这是盖斯定律最常见的失误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given: $\\text{S}(s) + \\text{O}_2(g) \\rightarrow \\text{SO}_2(g)$, $\\Delta H = -296.8\\ \\text{kJ}$; and $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{SO}_3(g)$, $\\Delta H = -197.8\\ \\text{kJ}$. Find $\\Delta H$ in kJ for $\\text{S}(s) + \\tfrac{3}{2}\\text{O}_2(g) \\rightarrow \\text{SO}_3(g)$. Give a signed number to the nearest tenth.",
                "zh": "已知：$\\text{S}(s) + \\text{O}_2(g) \\rightarrow \\text{SO}_2(g)$，$\\Delta H = -296.8\\ \\text{kJ}$；$2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{SO}_3(g)$，$\\Delta H = -197.8\\ \\text{kJ}$。求 $\\text{S}(s) + \\tfrac{3}{2}\\text{O}_2(g) \\rightarrow \\text{SO}_3(g)$ 的 $\\Delta H$（kJ）。给出带符号的数，精确到十分位。"
              },
              "answer": "-395.7",
              "accept": [
                "-395.70",
                "-396"
              ],
              "explanation": {
                "en": "Keep the first equation; halve the second ($-197.8/2 = -98.9\\ \\text{kJ}$) so it produces 1 mol $\\text{SO}_3$. Adding cancels $\\text{SO}_2$: $-296.8 + (-98.9) = -395.7\\ \\text{kJ}$.",
                "zh": "保留第一个方程式；将第二个减半（$-197.8/2 = -98.9\\ \\text{kJ}$）使其生成 1 mol $\\text{SO}_3$。相加后 $\\text{SO}_2$ 消去：$-296.8 + (-98.9) = -395.7\\ \\text{kJ}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why are bond-enthalpy calculations of $\\Delta H_{\\text{rxn}}$ only approximate?",
                "zh": "为什么用键焓计算 $\\Delta H_{\\text{rxn}}$ 只是近似值？"
              },
              "choices": [
                "Tabulated bond enthalpies are averages over many molecules, and the method assumes gas-phase species",
                "Bond enthalpies cannot be measured experimentally",
                "The method ignores the coefficients in the balanced equation",
                "Bond breaking releases slightly different amounts of energy each time"
              ],
              "answer": 0,
              "explanation": {
                "en": "A given bond’s strength varies with its molecular environment, so tables list averages; the method also neglects intermolecular forces, so it strictly applies to gases. Bond enthalpies CAN be measured—that distractor confuses “approximate” with “unmeasurable.”",
                "zh": "同种键的强度随分子环境而变化，因此表中列出的是平均值；该方法还忽略了分子间作用力，严格来说只适用于气体。键焓是可以测量的——那个干扰项把「近似」与「不可测量」混为一谈。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Estimate $\\Delta H$ in kJ for $\\text{H}_2(g) + \\text{Cl}_2(g) \\rightarrow 2\\,\\text{HCl}(g)$ using bond enthalpies: H–H $= 436$, Cl–Cl $= 243$, H–Cl $= 431\\ \\text{kJ/mol}$. Give a signed integer.",
                "zh": "用键焓估算 $\\text{H}_2(g) + \\text{Cl}_2(g) \\rightarrow 2\\,\\text{HCl}(g)$ 的 $\\Delta H$（kJ）：H–H $= 436$，Cl–Cl $= 243$，H–Cl $= 431\\ \\text{kJ/mol}$。给出带符号的整数。"
              },
              "answer": "-183",
              "accept": [
                "-183.0"
              ],
              "explanation": {
                "en": "Broken: $436 + 243 = 679\\ \\text{kJ}$. Formed: $2 \\times 431 = 862\\ \\text{kJ}$. $\\Delta H \\approx 679 - 862 = -183\\ \\text{kJ}$. Don’t forget the coefficient 2 on the H–Cl bonds formed.",
                "zh": "断键：$436 + 243 = 679\\ \\text{kJ}$。成键：$2 \\times 431 = 862\\ \\text{kJ}$。$\\Delta H \\approx 679 - 862 = -183\\ \\text{kJ}$。别忘了生成的 H–Cl 键要乘以系数 2。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In terms of bond energies, a reaction is exothermic when:",
                "zh": "从键能角度看，反应在什么情况下放热："
              },
              "choices": [
                "more bonds are broken than formed",
                "the total energy released forming product bonds exceeds the energy required to break reactant bonds",
                "the reactant bonds are stronger than the product bonds",
                "no bonds are broken at all"
              ],
              "answer": 1,
              "explanation": {
                "en": "Exothermic means net energy out: forming the new (product) bonds returns more energy than breaking the old (reactant) bonds cost. The “number of bonds” choice is tempting, but it’s total bond STRENGTH, not the count, that decides the sign.",
                "zh": "放热意味着净放出能量：形成新（生成物）键释放的能量多于断开旧（反应物）键消耗的能量。「键的数目」选项有迷惑性，但决定符号的是键的总强度，而非数目。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-7-equilibrium",
      "title": "Unit 7: Equilibrium",
      "titleZh": "第七单元：化学平衡",
      "lessons": [
        {
          "id": "equilibrium-and-k",
          "title": "Chemical Equilibrium and the Equilibrium Constant",
          "titleZh": "化学平衡与平衡常数",
          "content": [
            {
              "type": "h2",
              "en": "Dynamic Equilibrium",
              "zh": "动态平衡"
            },
            {
              "type": "p",
              "en": "Many reactions do not go to completion. In a closed system, as products build up, the reverse reaction speeds up while the forward reaction slows down. Equilibrium is reached when the forward and reverse rates become equal. At the particulate level, nothing stops: individual molecules are still colliding and reacting in both directions every instant, but because the two rates match, the concentrations of all species stay constant. This is why we call it a dynamic equilibrium, written with the double arrow $\\rightleftharpoons$.",
              "zh": "许多反应并不进行到底。在封闭体系中，随着产物积累，逆反应加快而正反应减慢。当正、逆反应速率相等时就达到了平衡。在粒子层面，一切并未停止：每时每刻仍有分子在两个方向上碰撞并反应，但由于两个速率相等，各物质的浓度保持不变。因此我们称之为动态平衡，用双箭头 $\\rightleftharpoons$ 表示。"
            },
            {
              "type": "p",
              "en": "Careful: constant concentrations do NOT mean equal concentrations. At equilibrium, $[\\text{products}]$ can be much larger or much smaller than $[\\text{reactants}]$—what is equal is the rate of the forward reaction and the rate of the reverse reaction.",
              "zh": "注意：浓度不变绝不意味着浓度相等。平衡时 $[\\text{生成物}]$ 可以远大于或远小于 $[\\text{反应物}]$——相等的是正反应速率与逆反应速率。"
            },
            {
              "type": "h3",
              "en": "Writing K Expressions",
              "zh": "书写平衡常数表达式"
            },
            {
              "type": "p",
              "en": "For a general reaction $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$, the law of mass action defines the equilibrium constant $K_c$ using equilibrium molar concentrations, each raised to its coefficient:",
              "zh": "对于一般反应 $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$，质量作用定律用平衡时的摩尔浓度（各自以化学计量数为指数）定义平衡常数 $K_c$："
            },
            {
              "type": "math",
              "tex": "K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}"
            },
            {
              "type": "p",
              "en": "Pure solids and pure liquids are omitted from the expression—their \"concentration\" (density) does not change during the reaction. For gases you may instead use partial pressures to write $K_p$. The two constants are related through the change in moles of gas, $\\Delta n = (\\text{mol gas products}) - (\\text{mol gas reactants})$:",
              "zh": "纯固体和纯液体不写入表达式——它们的「浓度」（密度）在反应中不变。对于气体，也可用分压书写 $K_p$。两个常数通过气体摩尔数变化 $\\Delta n = （\\text{气体生成物摩尔数}） - （\\text{气体反应物摩尔数}）$ 相联系："
            },
            {
              "type": "math",
              "tex": "K_p = K_c(RT)^{\\Delta n}"
            },
            {
              "type": "h3",
              "en": "Magnitude of K and the Reaction Quotient Q",
              "zh": "K 的大小与反应商 Q"
            },
            {
              "type": "p",
              "en": "The size of $K$ tells you where the equilibrium lies. The reaction quotient $Q$ has exactly the same algebraic form as $K$, but is computed with the concentrations (or pressures) at any moment, not necessarily at equilibrium. Comparing $Q$ to $K$ predicts which way the reaction must proceed to reach equilibrium.",
              "zh": "$K$ 的大小告诉你平衡偏向何方。反应商 $Q$ 的代数形式与 $K$ 完全相同，但代入的是任意时刻（不一定是平衡时）的浓度或分压。比较 $Q$ 与 $K$ 即可预测反应向哪个方向进行才能达到平衡。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$K \\gg 1$: products dominate at equilibrium; the reaction lies far to the right.",
                  "zh": "$K \\gg 1$：平衡时生成物占主导，反应强烈偏右。"
                },
                {
                  "en": "$K \\ll 1$: reactants dominate; very little product forms.",
                  "zh": "$K \\ll 1$：反应物占主导，生成的产物极少。"
                },
                {
                  "en": "$Q < K$: too little product—reaction proceeds forward (to the right).",
                  "zh": "$Q < K$：生成物太少——反应正向（向右）进行。"
                },
                {
                  "en": "$Q > K$: too much product—reaction proceeds in reverse (to the left).",
                  "zh": "$Q > K$：生成物过多——反应逆向（向左）进行。"
                },
                {
                  "en": "$Q = K$: the system is already at equilibrium; no net change.",
                  "zh": "$Q = K$：体系已处于平衡，无净变化。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: On free-response questions, \"the reaction shifts right\" earns no credit by itself. Show the comparison: compute or reason about $Q$, state $Q < K$ (or $Q > K$), and conclude the direction. Also remember: never include solids, pure liquids, or the solvent water in a $K$ expression.",
              "zh": "AP 提示：在简答题中，仅写「反应向右移动」不得分。必须展示比较过程：计算或推理 $Q$，指出 $Q < K$（或 $Q > K$），再得出方向结论。另外切记：固体、纯液体和溶剂水绝不写入 $K$ 表达式。"
            },
            {
              "type": "h3",
              "en": "ICE Tables and the Small-x Approximation",
              "zh": "ICE 表与小 x 近似"
            },
            {
              "type": "p",
              "en": "To find equilibrium concentrations, organize the work in an ICE table: Initial concentrations, Change (in terms of $x$, scaled by coefficients), and Equilibrium ($\\text{I} + \\text{C}$). Substitute the equilibrium row into the $K$ expression and solve for $x$. When $K$ is very small, almost no reactant is consumed, so you may approximate $(c_0 - x) \\approx c_0$ and avoid the quadratic formula. The approximation is valid if the resulting $x$ is less than about $5\\%$ of $c_0$—always check!",
              "zh": "求平衡浓度时，用 ICE 表整理：初始浓度（Initial）、变化量（Change，用 $x$ 表示并按计量数缩放）、平衡浓度（Equilibrium，即 $\\text{I} + \\text{C}$）。把平衡行代入 $K$ 表达式解出 $x$。当 $K$ 非常小时，反应物几乎不被消耗，可近似 $(c_0 - x) \\approx c_0$，从而避免解一元二次方程。当解出的 $x$ 小于 $c_0$ 的约 $5\\%$ 时近似有效——务必检验！"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Predicting Direction with Q",
                "zh": "例题 1：用 Q 预测反应方向"
              },
              "problem": {
                "en": "For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, $K_c = 50.0$ at $445°\\text{C}$. A flask contains $[\\text{H}_2] = 0.10\\ M$, $[\\text{I}_2] = 0.20\\ M$, and $[\\text{HI}] = 0.40\\ M$. Which way does the reaction proceed?",
                "zh": "对于 $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$，$445°\\text{C}$ 时 $K_c = 50.0$。烧瓶中 $[\\text{H}_2] = 0.10\\ M$，$[\\text{I}_2] = 0.20\\ M$，$[\\text{HI}] = 0.40\\ M$。反应向哪个方向进行？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "Q = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0.40)^2}{(0.10)(0.20)} = \\frac{0.16}{0.020} = 8.0"
                },
                {
                  "type": "p",
                  "en": "Since $Q = 8.0 < K_c = 50.0$, there is too little product relative to equilibrium. The reaction proceeds forward (to the right), consuming $\\text{H}_2$ and $\\text{I}_2$ and producing $\\text{HI}$ until $Q = K$.",
                  "zh": "因为 $Q = 8.0 < K_c = 50.0$，相对于平衡而言生成物太少。反应正向（向右）进行，消耗 $\\text{H}_2$ 和 $\\text{I}_2$、生成 $\\text{HI}$，直到 $Q = K$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: ICE Table with the Small-x Approximation",
                "zh": "例题 2：使用小 x 近似的 ICE 表"
              },
              "problem": {
                "en": "At a certain temperature, $K_c = 1.0 \\times 10^{-5}$ for $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g)$. If a container starts with $[\\text{N}_2] = [\\text{O}_2] = 0.80\\ M$ and no NO, find the equilibrium concentration of NO.",
                "zh": "某温度下，$\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g)$ 的 $K_c = 1.0 \\times 10^{-5}$。若容器初始 $[\\text{N}_2] = [\\text{O}_2] = 0.80\\ M$ 且无 NO，求平衡时 NO 的浓度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "ICE: at equilibrium $[\\text{N}_2] = [\\text{O}_2] = 0.80 - x$ and $[\\text{NO}] = 2x$. Because $K_c$ is tiny, assume $0.80 - x \\approx 0.80$.",
                  "zh": "ICE 表：平衡时 $[\\text{N}_2] = [\\text{O}_2] = 0.80 - x$，$[\\text{NO}] = 2x$。由于 $K_c$ 极小，近似 $0.80 - x \\approx 0.80$。"
                },
                {
                  "type": "math",
                  "tex": "K_c = \\frac{(2x)^2}{(0.80 - x)^2} \\approx \\frac{4x^2}{(0.80)^2} = 1.0 \\times 10^{-5}"
                },
                {
                  "type": "math",
                  "tex": "x^2 = 1.6 \\times 10^{-6} \\Rightarrow x = 1.3 \\times 10^{-3}\\ M \\Rightarrow [\\text{NO}] = 2x = 2.5 \\times 10^{-3}\\ M"
                },
                {
                  "type": "p",
                  "en": "Check the approximation: $x / 0.80 = 0.16\\% \\ll 5\\%$, so the assumption was valid.",
                  "zh": "检验近似：$x / 0.80 = 0.16\\% \\ll 5\\%$，故假设有效。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which statement is true for a system at chemical equilibrium?",
                "zh": "对于处于化学平衡的体系，下列哪项正确？"
              },
              "choices": [
                "All reactions have stopped at the molecular level",
                "The concentrations of reactants and products are equal",
                "The forward and reverse reaction rates are equal",
                "Only the forward reaction continues"
              ],
              "answer": 2,
              "explanation": {
                "en": "Equilibrium is dynamic: both reactions continue at equal rates, keeping concentrations constant. Choice B is the classic trap—constant does not mean equal.",
                "zh": "平衡是动态的：正逆反应以相等速率持续进行，使浓度保持不变。选项 B 是经典陷阱——「不变」不等于「相等」。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the correct $K_c$ expression for $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$?",
                "zh": "$\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$ 的正确 $K_c$ 表达式是什么？"
              },
              "choices": [
                "$K_c = \\dfrac{[\\text{CaO}][\\text{CO}_2]}{[\\text{CaCO}_3]}$",
                "$K_c = [\\text{CO}_2]$",
                "$K_c = \\dfrac{[\\text{CO}_2]}{[\\text{CaCO}_3]}$",
                "$K_c = \\dfrac{1}{[\\text{CO}_2]}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Pure solids are omitted from equilibrium expressions, leaving only the gas: $K_c = [\\text{CO}_2]$. Choice A is tempting because it follows the products-over-reactants pattern, but it wrongly includes the solids.",
                "zh": "纯固体不写入平衡表达式，只剩气体：$K_c = [\\text{CO}_2]$。选项 A 看似符合「生成物比反应物」的格式，但错误地包含了固体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, a mixture has $[\\text{SO}_3] = 0.40\\ M$, $[\\text{SO}_2] = 0.20\\ M$, $[\\text{O}_2] = 0.50\\ M$. Calculate $Q$. Give a number.",
                "zh": "对于 $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$，混合物中 $[\\text{SO}_3] = 0.40\\ M$，$[\\text{SO}_2] = 0.20\\ M$，$[\\text{O}_2] = 0.50\\ M$。计算 $Q$。给出数字。"
              },
              "answer": "8",
              "accept": [
                "8.0",
                "8.00"
              ],
              "explanation": {
                "en": "$Q = \\dfrac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]} = \\dfrac{(0.40)^2}{(0.20)^2(0.50)} = \\dfrac{0.16}{0.020} = 8.0$. Remember to square the concentrations with coefficient 2.",
                "zh": "$Q = \\dfrac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]} = \\dfrac{(0.40)^2}{(0.20)^2(0.50)} = \\dfrac{0.16}{0.020} = 8.0$。别忘了计量数为 2 的浓度要平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a certain reaction, $Q = 25$ and $K = 4.0$. Which is true?",
                "zh": "某反应 $Q = 25$，$K = 4.0$。下列哪项正确？"
              },
              "choices": [
                "The system is at equilibrium",
                "The reaction proceeds in reverse, toward reactants",
                "The reaction proceeds forward, toward products",
                "K will decrease until it equals Q"
              ],
              "answer": 1,
              "explanation": {
                "en": "$Q > K$ means the product-to-reactant ratio is too high, so the net reaction runs in reverse to lower $Q$ to $K$. Choice D is tempting but backwards: $K$ is fixed at a given temperature—$Q$ changes, not $K$.",
                "zh": "$Q > K$ 说明生成物与反应物之比过高，净反应逆向进行使 $Q$ 降至 $K$。选项 D 有迷惑性但方向颠倒：给定温度下 $K$ 固定不变——变的是 $Q$，不是 $K$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $\\text{A}(g) \\rightleftharpoons \\text{B}(g)$ with $K_c = 4.0$, a flask starts with $[\\text{A}] = 1.0\\ M$ and no B. What is $[\\text{B}]$ at equilibrium, in $M$? Give a decimal (2 sig figs).",
                "zh": "对于 $\\text{A}(g) \\rightleftharpoons \\text{B}(g)$，$K_c = 4.0$，初始 $[\\text{A}] = 1.0\\ M$，无 B。平衡时 $[\\text{B}]$ 是多少 $M$？给出小数（2 位有效数字）。"
              },
              "answer": "0.8",
              "accept": [
                "0.80",
                ".8",
                ".80"
              ],
              "explanation": {
                "en": "ICE: $[\\text{A}] = 1.0 - x$, $[\\text{B}] = x$. Then $\\dfrac{x}{1.0 - x} = 4.0 \\Rightarrow x = 4.0 - 4.0x \\Rightarrow x = 0.80\\ M$. Note $K$ is not small here, so the small-x approximation would be invalid—solve exactly.",
                "zh": "ICE 表：$[\\text{A}] = 1.0 - x$，$[\\text{B}] = x$。则 $\\dfrac{x}{1.0 - x} = 4.0 \\Rightarrow x = 4.0 - 4.0x \\Rightarrow x = 0.80\\ M$。注意此处 $K$ 并不小，小 x 近似不成立——必须精确求解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The small-x approximation in an ICE-table calculation is justified when:",
                "zh": "ICE 表计算中，小 x 近似成立的条件是："
              },
              "choices": [
                "K is very large compared with the initial concentrations",
                "the temperature is high",
                "K is very small, and the computed $x$ turns out to be less than about $5\\%$ of the initial concentration",
                "the reaction involves gases only"
              ],
              "answer": 2,
              "explanation": {
                "en": "A tiny $K$ means barely any reactant converts, so $c_0 - x \\approx c_0$. You must verify afterward that $x < 5\\%$ of $c_0$; if not, solve the quadratic. Choice A is the reverse situation, where the approximation fails badly.",
                "zh": "$K$ 极小意味着几乎没有反应物转化，故 $c_0 - x \\approx c_0$。事后必须检验 $x$ 小于 $c_0$ 的 $5\\%$；否则要解二次方程。选项 A 正好相反，此时近似严重失效。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which reaction does $K_p = K_c$?",
                "zh": "下列哪个反应的 $K_p = K_c$？"
              },
              "choices": [
                "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$",
                "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$",
                "$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$",
                "$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$K_p = K_c(RT)^{\\Delta n}$, so they are equal only when $\\Delta n = 0$. For $\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\text{HI}$, moles of gas are $2 \\rightarrow 2$, so $\\Delta n = 0$. The others have $\\Delta n = -2$, $-1$, and $+1$.",
                "zh": "$K_p = K_c(RT)^{\\Delta n}$，仅当 $\\Delta n = 0$ 时二者相等。$\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\text{HI}$ 的气体摩尔数为 $2 \\rightarrow 2$，故 $\\Delta n = 0$。其余反应的 $\\Delta n$ 分别为 $-2$、$-1$、$+1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A reaction has $K = 3 \\times 10^{12}$. At equilibrium, are products or reactants favored? (Answer products or reactants.)",
                "zh": "某反应 $K = 3 \\times 10^{12}$。平衡时生成物还是反应物占优势？（回答 products 或 reactants。）"
              },
              "answer": "products",
              "accept": [
                "product",
                "Products"
              ],
              "explanation": {
                "en": "$K \\gg 1$ means the numerator (products) dominates the equilibrium ratio, so the mixture is nearly all products.",
                "zh": "$K \\gg 1$ 意味着分子（生成物）在平衡比值中占主导，混合物几乎全是生成物。"
              }
            }
          ]
        },
        {
          "id": "le-chatelier-and-ksp",
          "title": "Le Châtelier's Principle and Solubility Equilibria",
          "titleZh": "勒夏特列原理与溶解平衡",
          "content": [
            {
              "type": "h2",
              "en": "Le Châtelier’s Principle",
              "zh": "勒夏特列原理"
            },
            {
              "type": "p",
              "en": "When a system at equilibrium is disturbed—by changing a concentration, the pressure/volume, or the temperature—the equilibrium shifts in the direction that partially counteracts the disturbance. This is Le Châtelier’s principle. It is a quick qualitative guide, but as we will see, the rigorous explanation always comes from comparing $Q$ with $K$.",
              "zh": "当平衡体系受到扰动——浓度、压强/体积或温度发生改变时，平衡会向部分抵消该扰动的方向移动。这就是勒夏特列原理。它是快速的定性判断工具，但正如下文所示，严格的解释始终来自 $Q$ 与 $K$ 的比较。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Add a reactant (or remove a product): shift toward products. Add a product: shift toward reactants.",
                  "zh": "加入反应物（或移走生成物）：向生成物方向移动。加入生成物：向反应物方向移动。"
                },
                {
                  "en": "Decrease the volume (increase pressure): shift toward the side with fewer moles of gas.",
                  "zh": "减小体积（增大压强）：向气体摩尔数较少的一侧移动。"
                },
                {
                  "en": "Raise the temperature: shift in the endothermic direction (treat heat as a reactant or product).",
                  "zh": "升高温度：向吸热方向移动（把热量当作反应物或生成物处理）。"
                },
                {
                  "en": "Adding an inert gas at constant volume changes no partial pressures—no shift. A catalyst speeds both directions equally—no shift, and no change in $K$.",
                  "zh": "恒容下加入惰性气体不改变任何分压——平衡不移动。催化剂同等加快正逆反应——平衡不移动，$K$ 也不变。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Only temperature changes the value of $K$ itself. For an exothermic reaction, raising $T$ decreases $K$; for an endothermic reaction, raising $T$ increases $K$. Concentration, pressure, and volume changes shift the position of equilibrium but leave $K$ untouched.",
              "zh": "只有温度能改变 $K$ 本身的数值。对放热反应，升温使 $K$ 减小；对吸热反应，升温使 $K$ 增大。浓度、压强和体积的变化只移动平衡位置，不改变 $K$。"
            },
            {
              "type": "h3",
              "en": "The Rigorous Justification: Q versus K",
              "zh": "严格论证：Q 与 K 的比较"
            },
            {
              "type": "p",
              "en": "Why does removing a product shift the equilibrium forward? Removing a product shrinks the numerator of $Q$, so instantly $Q < K$. The system responds by net forward reaction until $Q$ climbs back to $K$. Halving the volume of a gaseous equilibrium doubles every concentration; because coefficients appear as exponents, the side with more moles of gas is amplified more in $Q$, and the sign of $Q - K$ tells you the direction. This $Q$-versus-$K$ argument works for every disturbance except temperature (which changes $K$ itself).",
              "zh": "为什么移走生成物会使平衡正向移动？移走生成物使 $Q$ 的分子变小，于是立刻有 $Q < K$。体系通过净正向反应作出响应，直到 $Q$ 回升到 $K$。将气相平衡体积减半会使所有浓度加倍；由于计量数作为指数出现，气体摩尔数较多的一侧在 $Q$ 中被放大得更多，$Q - K$ 的符号即指明移动方向。这种 $Q$ 与 $K$ 的论证适用于除温度以外的一切扰动（温度会改变 $K$ 本身）。"
            },
            {
              "type": "note",
              "en": "AP tip: On the FRQ, \"the equilibrium shifts right to relieve the stress\" earns little or no credit. The rubric wants: state how the disturbance changes $Q$ (or $K$), compare $Q$ to $K$, and conclude the direction of the net reaction. Practice writing two-sentence justifications in exactly that form.",
              "zh": "AP 提示：在简答题中，「平衡向右移动以缓解压力」几乎不得分。评分标准要求：说明扰动如何改变 $Q$（或 $K$），比较 $Q$ 与 $K$，再得出净反应方向的结论。请练习按此格式写出两句话的论证。"
            },
            {
              "type": "h3",
              "en": "The Solubility Product, Ksp",
              "zh": "溶度积 Ksp"
            },
            {
              "type": "p",
              "en": "Dissolving a sparingly soluble salt is itself an equilibrium. For calcium fluoride, the dissolution and its equilibrium constant—called the solubility product $K_{sp}$—are:",
              "zh": "难溶盐的溶解本身就是一个平衡。以氟化钙为例，其溶解过程及平衡常数——称为溶度积 $K_{sp}$——为："
            },
            {
              "type": "math",
              "tex": "\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+}(aq) + 2\\text{F}^-(aq) \\qquad K_{sp} = [\\text{Ca}^{2+}][\\text{F}^-]^2"
            },
            {
              "type": "p",
              "en": "The solid does not appear in the expression. The molar solubility $s$ is the number of moles of salt that dissolve per liter. Stoichiometry links $s$ to $K_{sp}$: for a 1:1 salt like AgCl, $K_{sp} = s^2$; for a 1:2 salt like $\\text{CaF}_2$, $[\\text{Ca}^{2+}] = s$ and $[\\text{F}^-] = 2s$, so $K_{sp} = s(2s)^2 = 4s^3$. Comparing $Q$ (here often called the ion product) with $K_{sp}$ predicts precipitation: $Q > K_{sp}$ means a precipitate forms; $Q < K_{sp}$ means more solid can dissolve.",
              "zh": "固体不出现在表达式中。摩尔溶解度 $s$ 是每升溶解的盐的摩尔数。化学计量把 $s$ 与 $K_{sp}$ 联系起来：对 AgCl 这类 1:1 盐，$K_{sp} = s^2$；对 $\\text{CaF}_2$ 这类 1:2 盐，$[\\text{Ca}^{2+}] = s$，$[\\text{F}^-] = 2s$，故 $K_{sp} = s(2s)^2 = 4s^3$。比较 $Q$（此处常称离子积）与 $K_{sp}$ 可预测沉淀：$Q > K_{sp}$ 时生成沉淀；$Q < K_{sp}$ 时固体还能继续溶解。"
            },
            {
              "type": "h3",
              "en": "Common-Ion Effect and pH",
              "zh": "同离子效应与 pH 的影响"
            },
            {
              "type": "p",
              "en": "A salt is less soluble in a solution that already contains one of its ions. Dissolving AgCl in $0.10\\ M$ NaCl starts the system with a large $[\\text{Cl}^-]$; only a tiny extra $[\\text{Ag}^+]$ pushes $Q$ up to $K_{sp}$, so far less AgCl dissolves than in pure water. This common-ion effect is Le Châtelier applied to solubility. pH matters too: if the anion is basic (e.g. $\\text{F}^-$, $\\text{CO}_3^{2-}$, $\\text{OH}^-$), acid consumes it, lowering $Q$ below $K_{sp}$ and increasing solubility. Salts of anions of strong acids (like $\\text{Cl}^-$) are unaffected by pH.",
              "zh": "若溶液中已含有盐的某种离子，该盐的溶解度会降低。把 AgCl 溶入 $0.10\\ M$ NaCl 时，体系一开始就有很大的 $[\\text{Cl}^-]$；只需极少量的 $[\\text{Ag}^+]$ 就能使 $Q$ 升到 $K_{sp}$，因此溶解的 AgCl 远少于在纯水中。这就是同离子效应——勒夏特列原理在溶解平衡中的应用。pH 也有影响：若阴离子显碱性（如 $\\text{F}^-$、$\\text{CO}_3^{2-}$、$\\text{OH}^-$），酸会消耗它，使 $Q$ 降到 $K_{sp}$ 以下，溶解度增大。强酸阴离子（如 $\\text{Cl}^-$）的盐则不受 pH 影响。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Justifying a Shift the AP Way",
                "zh": "例题 1：按 AP 标准论证平衡移动"
              },
              "problem": {
                "en": "The exothermic reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ is at equilibrium. (a) The volume is halved at constant temperature. (b) The temperature is raised. Predict and justify each shift.",
                "zh": "放热反应 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ 处于平衡。(a) 恒温下体积减半。(b) 升高温度。预测并论证每种情况下的平衡移动。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Halving the volume doubles all concentrations. In $Q = \\dfrac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$, the numerator gains a factor of $2^2 = 4$ while the denominator gains $2 \\times 2^3 = 16$, so $Q$ drops to $\\tfrac{4}{16} = \\tfrac{1}{4}$ of $K$. Since $Q < K$, the net reaction proceeds forward, toward the side with fewer moles of gas ($4 \\rightarrow 2$).",
                  "zh": "(a) 体积减半使所有浓度加倍。在 $Q = \\dfrac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$ 中，分子乘以 $2^2 = 4$，分母乘以 $2 \\times 2^3 = 16$，故 $Q$ 降为 $K$ 的 $\\tfrac{4}{16} = \\tfrac{1}{4}$。因为 $Q < K$，净反应正向进行，移向气体摩尔数较少的一侧（$4 \\rightarrow 2$）。"
                },
                {
                  "type": "p",
                  "en": "(b) The reaction is exothermic, so raising $T$ decreases $K$. The unchanged $Q$ is now greater than the new, smaller $K$, so the net reaction runs in reverse—less $\\text{NH}_3$ at the new equilibrium.",
                  "zh": "(b) 该反应放热，升温使 $K$ 减小。未变的 $Q$ 此时大于变小后的 $K$，净反应逆向进行——新平衡时 $\\text{NH}_3$ 更少。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Molar Solubility and a Common Ion",
                "zh": "例题 2：摩尔溶解度与同离子"
              },
              "problem": {
                "en": "For AgCl, $K_{sp} = 1.8 \\times 10^{-10}$. Find the molar solubility of AgCl (a) in pure water and (b) in $0.10\\ M$ NaCl.",
                "zh": "AgCl 的 $K_{sp} = 1.8 \\times 10^{-10}$。求 AgCl 的摩尔溶解度：(a) 在纯水中；(b) 在 $0.10\\ M$ NaCl 中。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) In pure water, $[\\text{Ag}^+] = [\\text{Cl}^-] = s$.",
                  "zh": "(a) 在纯水中，$[\\text{Ag}^+] = [\\text{Cl}^-] = s$。"
                },
                {
                  "type": "math",
                  "tex": "K_{sp} = s^2 = 1.8 \\times 10^{-10} \\Rightarrow s = 1.3 \\times 10^{-5}\\ M"
                },
                {
                  "type": "p",
                  "en": "(b) In $0.10\\ M$ NaCl, $[\\text{Cl}^-] \\approx 0.10 + s \\approx 0.10\\ M$ (the small-x idea again).",
                  "zh": "(b) 在 $0.10\\ M$ NaCl 中，$[\\text{Cl}^-] \\approx 0.10 + s \\approx 0.10\\ M$（又是小 x 近似的思想）。"
                },
                {
                  "type": "math",
                  "tex": "K_{sp} = s(0.10) = 1.8 \\times 10^{-10} \\Rightarrow s = 1.8 \\times 10^{-9}\\ M"
                },
                {
                  "type": "p",
                  "en": "The common ion suppresses solubility by a factor of about $7000$: with $\\text{Cl}^-$ already present, only a trace of $\\text{Ag}^+$ is needed for $Q$ to reach $K_{sp}$.",
                  "zh": "同离子使溶解度降低约 $7000$ 倍：溶液中已有 $\\text{Cl}^-$ 时，只需痕量 $\\text{Ag}^+$ 就能使 $Q$ 达到 $K_{sp}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ at equilibrium, which change shifts the equilibrium toward reactants (left)?",
                "zh": "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ 处于平衡时，下列哪种改变使平衡向反应物（左）移动？"
              },
              "choices": [
                "Adding $\\text{N}_2$",
                "Removing $\\text{NH}_3$",
                "Adding $\\text{NH}_3$",
                "Decreasing the volume"
              ],
              "answer": 2,
              "explanation": {
                "en": "Adding product raises the numerator of $Q$, making $Q > K$, so the net reaction runs in reverse. Choice D shifts right (toward fewer moles of gas), and A and B both make $Q < K$, shifting right.",
                "zh": "加入生成物使 $Q$ 的分子增大，$Q > K$，净反应逆向进行。选项 D 使平衡右移（向气体摩尔数少的一侧），A 和 B 都使 $Q < K$，同样右移。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which disturbance changes the numerical value of the equilibrium constant $K$?",
                "zh": "下列哪种扰动会改变平衡常数 $K$ 的数值？"
              },
              "choices": [
                "Adding more reactant",
                "Changing the temperature",
                "Decreasing the container volume",
                "Adding a catalyst"
              ],
              "answer": 1,
              "explanation": {
                "en": "Only temperature changes $K$. Concentration and volume changes alter $Q$ and shift the position of equilibrium; a catalyst changes neither $Q$ nor $K$, only the rate of reaching equilibrium. Choice A is tempting because the position shifts, but $K$ itself is fixed.",
                "zh": "只有温度能改变 $K$。浓度和体积的变化改变 $Q$、移动平衡位置；催化剂既不改变 $Q$ 也不改变 $K$，只加快达到平衡的速率。选项 A 有迷惑性，因为平衡位置确实移动了，但 $K$ 本身不变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the exothermic reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, what happens when the temperature is increased?",
                "zh": "对于放热反应 $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$，升高温度会怎样？"
              },
              "choices": [
                "$K$ decreases and the equilibrium shifts toward reactants",
                "$K$ increases and the equilibrium shifts toward products",
                "$K$ is unchanged but the equilibrium shifts left",
                "$K$ decreases but the equilibrium shifts toward products"
              ],
              "answer": 0,
              "explanation": {
                "en": "Treat heat as a product of an exothermic reaction: raising $T$ favors the endothermic (reverse) direction, and this is one disturbance that truly changes $K$—it decreases. Choice C wrongly keeps $K$ fixed; temperature is the one stress that changes $K$.",
                "zh": "把热量视为放热反应的生成物：升温有利于吸热（逆）方向，且这是唯一真正改变 $K$ 的扰动——$K$ 减小。选项 C 错在认为 $K$ 不变；温度恰恰是会改变 $K$ 的那种扰动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For AgCl, $K_{sp} = 1.8 \\times 10^{-10}$. What is its molar solubility in pure water, in units of $10^{-5}\\ M$? Give a number to 2 sig figs.",
                "zh": "AgCl 的 $K_{sp} = 1.8 \\times 10^{-10}$。它在纯水中的摩尔溶解度是多少（以 $10^{-5}\\ M$ 为单位）？给出 2 位有效数字。"
              },
              "answer": "1.3",
              "accept": [
                "1.34"
              ],
              "explanation": {
                "en": "For a 1:1 salt, $K_{sp} = s^2$, so $s = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}\\ M$.",
                "zh": "对 1:1 盐，$K_{sp} = s^2$，故 $s = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}\\ M$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If the molar solubility of $\\text{CaF}_2$ is $s$, which expression gives $K_{sp}$?",
                "zh": "若 $\\text{CaF}_2$ 的摩尔溶解度为 $s$，哪个表达式给出 $K_{sp}$？"
              },
              "choices": [
                "$s^2$",
                "$2s^3$",
                "$s^3$",
                "$4s^3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$[\\text{Ca}^{2+}] = s$ and $[\\text{F}^-] = 2s$, so $K_{sp} = s(2s)^2 = 4s^3$. Choice A forgets the 1:2 stoichiometry; forgetting to both double AND square the fluoride concentration is the most common Ksp error.",
                "zh": "$[\\text{Ca}^{2+}] = s$，$[\\text{F}^-] = 2s$，故 $K_{sp} = s(2s)^2 = 4s^3$。选项 A 忽略了 1:2 计量关系；忘记把氟离子浓度既乘 2 又平方是最常见的 Ksp 错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the molar solubility of AgCl ($K_{sp} = 1.8 \\times 10^{-10}$) in $0.10\\ M$ NaCl, in units of $10^{-9}\\ M$? Give a number to 2 sig figs.",
                "zh": "AgCl（$K_{sp} = 1.8 \\times 10^{-10}$）在 $0.10\\ M$ NaCl 中的摩尔溶解度是多少（以 $10^{-9}\\ M$ 为单位）？给出 2 位有效数字。"
              },
              "answer": "1.8",
              "accept": [
                "1.80"
              ],
              "explanation": {
                "en": "With the common ion, $[\\text{Cl}^-] \\approx 0.10\\ M$, so $s = K_{sp}/0.10 = 1.8 \\times 10^{-9}\\ M$—thousands of times less soluble than in pure water.",
                "zh": "存在同离子时 $[\\text{Cl}^-] \\approx 0.10\\ M$，故 $s = K_{sp}/0.10 = 1.8 \\times 10^{-9}\\ M$——比纯水中低数千倍。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which salt becomes significantly MORE soluble when the solution is made acidic?",
                "zh": "下列哪种盐在溶液酸化后溶解度显著增大？"
              },
              "choices": [
                "$\\text{AgCl}$",
                "$\\text{CaCO}_3$",
                "$\\text{NaNO}_3$",
                "$\\text{KBr}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\text{CO}_3^{2-}$ is a basic anion: added $\\text{H}^+$ converts it to $\\text{HCO}_3^-/\\text{H}_2\\text{CO}_3$, lowering $[\\text{CO}_3^{2-}]$ so $Q < K_{sp}$ and more $\\text{CaCO}_3$ dissolves. $\\text{Cl}^-$, $\\text{NO}_3^-$, and $\\text{Br}^-$ come from strong acids and do not react with $\\text{H}^+$; AgCl is the tempting distractor but its solubility is pH-independent.",
                "zh": "$\\text{CO}_3^{2-}$ 是碱性阴离子：加入的 $\\text{H}^+$ 将其转化为 $\\text{HCO}_3^-/\\text{H}_2\\text{CO}_3$，使 $[\\text{CO}_3^{2-}]$ 降低，$Q < K_{sp}$，更多 $\\text{CaCO}_3$ 溶解。$\\text{Cl}^-$、$\\text{NO}_3^-$、$\\text{Br}^-$ 来自强酸，不与 $\\text{H}^+$ 反应；AgCl 是迷惑项，其溶解度与 pH 无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The volume of an equilibrium mixture of $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ is decreased at constant temperature. Does the net reaction proceed right or left? (Answer right or left.)",
                "zh": "恒温下减小 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ 平衡混合物的体积。净反应向右还是向左进行？（回答 right 或 left。）"
              },
              "answer": "right",
              "accept": [
                "Right",
                "forward"
              ],
              "explanation": {
                "en": "Compressing raises all concentrations, but the denominator of $Q$ (4 gas moles, with $[\\text{H}_2]^3$) grows faster than the numerator (2 gas moles), so $Q < K$ and the net reaction proceeds right, toward fewer moles of gas.",
                "zh": "压缩使所有浓度升高，但 $Q$ 的分母（4 摩尔气体，含 $[\\text{H}_2]^3$）比分子（2 摩尔气体）增长更快，故 $Q < K$，净反应向右进行，移向气体摩尔数较少的一侧。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-8-acids-and-bases",
      "title": "Unit 8: Acids and Bases",
      "titleZh": "第八单元：酸与碱",
      "lessons": [
        {
          "id": "ph-and-strong-acids-bases",
          "title": "pH, pOH, and Strong Acids and Bases",
          "titleZh": "pH、pOH 与强酸强碱",
          "content": [
            {
              "type": "h2",
              "en": "Brønsted–Lowry Acids and Bases",
              "zh": "布朗斯特–劳里酸碱"
            },
            {
              "type": "p",
              "en": "In the Brønsted–Lowry model, an acid is a proton ($\\text{H}^+$) donor and a base is a proton acceptor. Every acid–base reaction is a proton transfer: when $\\text{HCl}$ donates a proton to water, water acts as the base and becomes the hydronium ion $\\text{H}_3\\text{O}^+$. Removing a proton from an acid leaves its conjugate base; adding a proton to a base forms its conjugate acid. A conjugate pair always differs by exactly one $\\text{H}^+$—for example, $\\text{NH}_4^+/\\text{NH}_3$ and $\\text{HSO}_4^-/\\text{SO}_4^{2-}$.",
              "zh": "在布朗斯特–劳里模型中，酸是质子（$\\text{H}^+$）给体，碱是质子受体。每个酸碱反应都是一次质子转移：当 $\\text{HCl}$ 把质子交给水时，水充当碱并变成水合氢离子 $\\text{H}_3\\text{O}^+$。酸失去一个质子后剩下它的共轭碱；碱得到一个质子后形成它的共轭酸。共轭酸碱对总是恰好相差一个 $\\text{H}^+$——例如 $\\text{NH}_4^+/\\text{NH}_3$ 和 $\\text{HSO}_4^-/\\text{SO}_4^{2-}$。"
            },
            {
              "type": "p",
              "en": "Some species, like water and $\\text{HCO}_3^-$, are amphoteric: they can donate or accept a proton depending on what they react with.",
              "zh": "有些物质是两性的，如水和 $\\text{HCO}_3^-$：它们既能给出质子也能接受质子，取决于反应对象。"
            },
            {
              "type": "h3",
              "en": "Autoionization of Water and $K_w$",
              "zh": "水的自偶电离与 $K_w$"
            },
            {
              "type": "p",
              "en": "Even pure water conducts a tiny current because water molecules transfer protons among themselves. This autoionization is an equilibrium:",
              "zh": "即使纯水也能导过微弱电流，因为水分子之间会互相转移质子。这种自偶电离是一个平衡："
            },
            {
              "type": "math",
              "tex": "2\\,\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_3\\text{O}^+(aq) + \\text{OH}^-(aq)"
            },
            {
              "type": "math",
              "tex": "K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\ \\text{at } 25\\,^{\\circ}\\text{C}"
            },
            {
              "type": "p",
              "en": "In any aqueous solution at $25\\,^{\\circ}\\text{C}$, the product $[\\text{H}_3\\text{O}^+][\\text{OH}^-]$ must equal $1.0 \\times 10^{-14}$. If an acid raises $[\\text{H}_3\\text{O}^+]$, then $[\\text{OH}^-]$ must fall so the product stays constant.",
              "zh": "在 $25\\,^{\\circ}\\text{C}$ 的任何水溶液中，乘积 $[\\text{H}_3\\text{O}^+][\\text{OH}^-]$ 都必须等于 $1.0 \\times 10^{-14}$。若酸使 $[\\text{H}_3\\text{O}^+]$ 升高，则 $[\\text{OH}^-]$ 必然降低以保持乘积不变。"
            },
            {
              "type": "h3",
              "en": "The pH and pOH Scales",
              "zh": "pH 与 pOH 标度"
            },
            {
              "type": "p",
              "en": "Because concentrations of $\\text{H}_3\\text{O}^+$ span many powers of ten, chemists use a logarithmic scale:",
              "zh": "由于 $\\text{H}_3\\text{O}^+$ 浓度横跨许多个数量级，化学家使用对数标度："
            },
            {
              "type": "math",
              "tex": "\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] \\qquad \\text{pOH} = -\\log[\\text{OH}^-] \\qquad \\text{pH} + \\text{pOH} = 14.00 \\ (25\\,^{\\circ}\\text{C})"
            },
            {
              "type": "p",
              "en": "A change of one pH unit means a factor-of-10 change in $[\\text{H}_3\\text{O}^+]$. Sig-fig rule for logs: the number of decimal places in a pH equals the number of significant figures in the concentration. So $[\\text{H}_3\\text{O}^+] = 2.5 \\times 10^{-3}\\ M$ (2 sig figs) gives $\\text{pH} = 2.60$ (2 decimal places).",
              "zh": "pH 每变化 1 个单位，$[\\text{H}_3\\text{O}^+]$ 就变化 10 倍。对数的有效数字规则：pH 的小数位数等于浓度的有效数字位数。所以 $[\\text{H}_3\\text{O}^+] = 2.5 \\times 10^{-3}\\ M$（2 位有效数字）对应 $\\text{pH} = 2.60$（2 位小数）。"
            },
            {
              "type": "note",
              "en": "AP tip: \"Neutral\" means $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-]$, NOT pH = 7. Because autoionization is endothermic, $K_w$ increases with temperature: at $50\\,^{\\circ}\\text{C}$, $K_w \\approx 5.5 \\times 10^{-14}$, so neutral water has $\\text{pH} \\approx 6.6$—and it is still neutral. The exam loves asking why warm pure water with pH < 7 is not acidic.",
              "zh": "AP 提示：「中性」的定义是 $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-]$，而不是 pH = 7。因为自偶电离是吸热的，$K_w$ 随温度升高而增大：在 $50\\,^{\\circ}\\text{C}$ 时 $K_w \\approx 5.5 \\times 10^{-14}$，中性水的 $\\text{pH} \\approx 6.6$——但它仍然是中性的。考试很爱问为什么 pH < 7 的温热纯水并不是酸性的。"
            },
            {
              "type": "h3",
              "en": "Strong Acids and Strong Bases",
              "zh": "强酸与强碱"
            },
            {
              "type": "p",
              "en": "A strong acid ionizes essentially 100% in water, so $[\\text{H}_3\\text{O}^+]$ equals the acid concentration (for a monoprotic acid). Memorize the strong acids: $\\text{HCl}$, $\\text{HBr}$, $\\text{HI}$, $\\text{HNO}_3$, $\\text{HClO}_4$, and $\\text{H}_2\\text{SO}_4$ (first proton). Strong bases are the Group 1 hydroxides and the heavier Group 2 hydroxides like $\\text{Ba(OH)}_2$—note that each mole of $\\text{Ba(OH)}_2$ releases two moles of $\\text{OH}^-$.",
              "zh": "强酸在水中几乎 100% 电离，因此（对一元酸）$[\\text{H}_3\\text{O}^+]$ 等于酸的浓度。要记住强酸：$\\text{HCl}$、$\\text{HBr}$、$\\text{HI}$、$\\text{HNO}_3$、$\\text{HClO}_4$ 以及 $\\text{H}_2\\text{SO}_4$（第一个质子）。强碱是第 1 族氢氧化物和较重的第 2 族氢氧化物如 $\\text{Ba(OH)}_2$——注意每摩尔 $\\text{Ba(OH)}_2$ 释放两摩尔 $\\text{OH}^-$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: pH of a Strong Acid",
                "zh": "例题 1：强酸的 pH"
              },
              "problem": {
                "en": "Calculate the pH of $0.015\\ M$ $\\text{HNO}_3$ at $25\\,^{\\circ}\\text{C}$.",
                "zh": "计算 $25\\,^{\\circ}\\text{C}$ 下 $0.015\\ M$ $\\text{HNO}_3$ 的 pH。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$\\text{HNO}_3$ is a strong monoprotic acid, so it ionizes completely: $[\\text{H}_3\\text{O}^+] = 0.015\\ M$.",
                  "zh": "$\\text{HNO}_3$ 是强一元酸，完全电离：$[\\text{H}_3\\text{O}^+] = 0.015\\ M$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{pH} = -\\log(0.015) = 1.82"
                },
                {
                  "type": "p",
                  "en": "Two sig figs in the concentration give two decimal places in the pH.",
                  "zh": "浓度有 2 位有效数字，pH 保留 2 位小数。"
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
                "en": "Calculate the pH of $0.0050\\ M$ $\\text{Ba(OH)}_2$ at $25\\,^{\\circ}\\text{C}$.",
                "zh": "计算 $25\\,^{\\circ}\\text{C}$ 下 $0.0050\\ M$ $\\text{Ba(OH)}_2$ 的 pH。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Each formula unit releases 2 $\\text{OH}^-$, so $[\\text{OH}^-] = 2 \\times 0.0050 = 0.010\\ M$.",
                  "zh": "每个式量单位释放 2 个 $\\text{OH}^-$，故 $[\\text{OH}^-] = 2 \\times 0.0050 = 0.010\\ M$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{pOH} = -\\log(0.010) = 2.00"
                },
                {
                  "type": "math",
                  "tex": "\\text{pH} = 14.00 - 2.00 = 12.00"
                },
                {
                  "type": "p",
                  "en": "Forgetting the factor of 2 for $\\text{OH}^-$ is one of the most common AP errors with Group 2 hydroxides.",
                  "zh": "忘记 $\\text{OH}^-$ 的 2 倍系数是第 2 族氢氧化物题目中最常见的 AP 错误之一。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the conjugate base of $\\text{HSO}_4^-$?",
                "zh": "$\\text{HSO}_4^-$ 的共轭碱是什么？"
              },
              "choices": [
                "$\\text{H}_2\\text{SO}_4$",
                "$\\text{SO}_4^{2-}$",
                "$\\text{H}_3\\text{O}^+$",
                "$\\text{OH}^-$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Remove one $\\text{H}^+$ from $\\text{HSO}_4^-$ to get $\\text{SO}_4^{2-}$. Choice A is tempting but it is the conjugate acid (add $\\text{H}^+$), not the conjugate base.",
                "zh": "从 $\\text{HSO}_4^-$ 移去一个 $\\text{H}^+$ 得 $\\text{SO}_4^{2-}$。选项 A 很有迷惑性，但它是共轭酸（加 $\\text{H}^+$），不是共轭碱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the pH of $0.010\\ M$ $\\text{HCl}$ at $25\\,^{\\circ}\\text{C}$? Give a number to 2 decimal places.",
                "zh": "$25\\,^{\\circ}\\text{C}$ 下 $0.010\\ M$ $\\text{HCl}$ 的 pH 是多少？给出保留 2 位小数的数字。"
              },
              "answer": "2.00",
              "accept": [
                "2",
                "2.0"
              ],
              "explanation": {
                "en": "$\\text{HCl}$ is strong, so $[\\text{H}_3\\text{O}^+] = 0.010\\ M$ and $\\text{pH} = -\\log(0.010) = 2.00$.",
                "zh": "$\\text{HCl}$ 是强酸，故 $[\\text{H}_3\\text{O}^+] = 0.010\\ M$，$\\text{pH} = -\\log(0.010) = 2.00$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At $50\\,^{\\circ}\\text{C}$, $K_w = 5.5 \\times 10^{-14}$. Pure water at this temperature is:",
                "zh": "在 $50\\,^{\\circ}\\text{C}$ 时 $K_w = 5.5 \\times 10^{-14}$。此温度下的纯水是："
              },
              "choices": [
                "acidic, because pH < 7",
                "basic, because $K_w$ increased",
                "neutral, because $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-]$",
                "neutral, because pH = 7 exactly"
              ],
              "answer": 2,
              "explanation": {
                "en": "Autoionization still produces $\\text{H}_3\\text{O}^+$ and $\\text{OH}^-$ in a 1:1 ratio, so the water is neutral even though its pH is below 7. Choice A is the classic trap—pH 7 defines neutrality only at $25\\,^{\\circ}\\text{C}$.",
                "zh": "自偶电离仍以 1:1 生成 $\\text{H}_3\\text{O}^+$ 和 $\\text{OH}^-$，所以尽管 pH 低于 7，水仍是中性的。选项 A 是经典陷阱——pH = 7 只有在 $25\\,^{\\circ}\\text{C}$ 时才代表中性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solution at $25\\,^{\\circ}\\text{C}$ has $\\text{pH} = 3.50$. What is its pOH? Give a number to 2 decimal places.",
                "zh": "$25\\,^{\\circ}\\text{C}$ 下某溶液 $\\text{pH} = 3.50$。其 pOH 是多少？给出保留 2 位小数的数字。"
              },
              "answer": "10.50",
              "accept": [
                "10.5"
              ],
              "explanation": {
                "en": "At $25\\,^{\\circ}\\text{C}$, $\\text{pH} + \\text{pOH} = 14.00$, so $\\text{pOH} = 14.00 - 3.50 = 10.50$.",
                "zh": "在 $25\\,^{\\circ}\\text{C}$ 时 $\\text{pH} + \\text{pOH} = 14.00$，故 $\\text{pOH} = 14.00 - 3.50 = 10.50$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is a strong acid in water?",
                "zh": "下列哪种物质在水中是强酸？"
              },
              "choices": [
                "$\\text{HF}$",
                "$\\text{CH}_3\\text{COOH}$",
                "$\\text{H}_2\\text{CO}_3$",
                "$\\text{HClO}_4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\text{HClO}_4$ is one of the strong acids and ionizes completely. $\\text{HF}$ is the tempting distractor—despite containing a halogen, it is weak because of its very strong H–F bond.",
                "zh": "$\\text{HClO}_4$ 是强酸之一，完全电离。$\\text{HF}$ 是迷惑项——虽然含卤素，但因 H–F 键极强而是弱酸。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solution has $\\text{pH} = 5.00$ at $25\\,^{\\circ}\\text{C}$. What is $[\\text{H}_3\\text{O}^+]$?",
                "zh": "$25\\,^{\\circ}\\text{C}$ 下某溶液 $\\text{pH} = 5.00$。$[\\text{H}_3\\text{O}^+]$ 是多少？"
              },
              "choices": [
                "$1.0 \\times 10^{-9}\\ M$",
                "$5.0 \\times 10^{-1}\\ M$",
                "$1.0 \\times 10^{-5}\\ M$",
                "$1.0 \\times 10^{-7}\\ M$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}} = 10^{-5.00} = 1.0 \\times 10^{-5}\\ M$. Choice A ($10^{-9}$) is the $[\\text{OH}^-]$ of this solution, a common mix-up.",
                "zh": "$[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}} = 10^{-5.00} = 1.0 \\times 10^{-5}\\ M$。选项 A（$10^{-9}$）是该溶液的 $[\\text{OH}^-]$，容易混淆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the pH of $0.0010\\ M$ $\\text{KOH}$ at $25\\,^{\\circ}\\text{C}$? Give a number to 2 decimal places.",
                "zh": "$25\\,^{\\circ}\\text{C}$ 下 $0.0010\\ M$ $\\text{KOH}$ 的 pH 是多少？给出保留 2 位小数的数字。"
              },
              "answer": "11.00",
              "accept": [
                "11",
                "11.0"
              ],
              "explanation": {
                "en": "$\\text{KOH}$ is a strong base: $[\\text{OH}^-] = 1.0 \\times 10^{-3}\\ M$, so $\\text{pOH} = 3.00$ and $\\text{pH} = 14.00 - 3.00 = 11.00$.",
                "zh": "$\\text{KOH}$ 是强碱：$[\\text{OH}^-] = 1.0 \\times 10^{-3}\\ M$，故 $\\text{pOH} = 3.00$，$\\text{pH} = 14.00 - 3.00 = 11.00$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the reaction $\\text{HCO}_3^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 + \\text{OH}^-$, the bicarbonate ion acts as:",
                "zh": "在反应 $\\text{HCO}_3^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 + \\text{OH}^-$ 中，碳酸氢根离子的角色是："
              },
              "choices": [
                "a Brønsted–Lowry base, because it accepts a proton",
                "a Brønsted–Lowry acid, because it donates a proton",
                "a spectator ion",
                "an oxidizing agent"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\text{HCO}_3^-$ gains an $\\text{H}^+$ from water to form $\\text{H}_2\\text{CO}_3$, so it accepts a proton and acts as a base here. It is amphoteric—in other reactions it can donate its proton instead, which makes choice B tempting.",
                "zh": "$\\text{HCO}_3^-$ 从水得到一个 $\\text{H}^+$ 生成 $\\text{H}_2\\text{CO}_3$，接受质子，此处是碱。它是两性物质——在其他反应中也可给出质子，因此选项 B 有迷惑性。"
              }
            }
          ]
        },
        {
          "id": "weak-acids-and-bases",
          "title": "Weak Acids, Weak Bases, and Ka/Kb",
          "titleZh": "弱酸、弱碱与 Ka/Kb",
          "content": [
            {
              "type": "h2",
              "en": "Weak Acids: An Equilibrium Problem",
              "zh": "弱酸：一个平衡问题"
            },
            {
              "type": "p",
              "en": "A weak acid only partially ionizes in water—at the particulate level, most of the acid stays as intact $\\text{HA}$ molecules, with only a small fraction present as $\\text{H}_3\\text{O}^+$ and $\\text{A}^-$ ions. The extent of ionization is governed by the acid-dissociation constant $K_a$:",
              "zh": "弱酸在水中只部分电离——从粒子层面看，大部分酸以完整的 $\\text{HA}$ 分子存在，只有一小部分以 $\\text{H}_3\\text{O}^+$ 和 $\\text{A}^-$ 离子形式存在。电离程度由酸解离常数 $K_a$ 决定："
            },
            {
              "type": "math",
              "tex": "\\text{HA}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_3\\text{O}^+(aq) + \\text{A}^-(aq) \\qquad K_a = \\frac{[\\text{H}_3\\text{O}^+][\\text{A}^-]}{[\\text{HA}]}"
            },
            {
              "type": "p",
              "en": "The larger the $K_a$, the stronger the acid. Since $\\text{p}K_a = -\\log K_a$, a smaller $\\text{p}K_a$ means a stronger acid. Weak bases work the same way with $K_b$ and $\\text{OH}^-$: $\\text{B} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{BH}^+ + \\text{OH}^-$.",
              "zh": "$K_a$ 越大，酸越强。由于 $\\text{p}K_a = -\\log K_a$，$\\text{p}K_a$ 越小酸越强。弱碱同理，用 $K_b$ 和 $\\text{OH}^-$ 描述：$\\text{B} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{BH}^+ + \\text{OH}^-$。"
            },
            {
              "type": "h3",
              "en": "ICE Tables and Percent Ionization",
              "zh": "ICE 表与电离百分数"
            },
            {
              "type": "p",
              "en": "To find the pH of a weak acid solution, set up an ICE (Initial–Change–Equilibrium) table with $x = [\\text{H}_3\\text{O}^+]$ formed. Because $K_a$ is small, we usually assume $x \\ll [\\text{HA}]_0$ so that $[\\text{HA}]_0 - x \\approx [\\text{HA}]_0$. The approximation is valid when the percent ionization is under about 5%.",
              "zh": "求弱酸溶液的 pH 时，建立 ICE（初始–变化–平衡）表，设生成的 $x = [\\text{H}_3\\text{O}^+]$。因为 $K_a$ 很小，通常假设 $x \\ll [\\text{HA}]_0$，即 $[\\text{HA}]_0 - x \\approx [\\text{HA}]_0$。当电离百分数小于约 5% 时该近似成立。"
            },
            {
              "type": "math",
              "tex": "\\%\\ \\text{ionization} = \\frac{[\\text{H}_3\\text{O}^+]_{eq}}{[\\text{HA}]_0} \\times 100\\%"
            },
            {
              "type": "p",
              "en": "Counterintuitively, diluting a weak acid increases its percent ionization (the equilibrium shifts toward the side with more dissolved particles), even though $[\\text{H}_3\\text{O}^+]$ itself decreases.",
              "zh": "有点反直觉的是：稀释弱酸会使电离百分数增大（平衡向溶解粒子数更多的一侧移动），尽管 $[\\text{H}_3\\text{O}^+]$ 本身在减小。"
            },
            {
              "type": "note",
              "en": "AP tip: Never treat a weak acid as fully ionized. For $0.10\\ M$ acetic acid, writing $\\text{pH} = -\\log(0.10) = 1.00$ earns zero credit—the actual pH is 2.87. Always show the ICE table and the $K_a$ expression on FRQs.",
              "zh": "AP 提示：绝不能把弱酸当作完全电离。对 $0.10\\ M$ 醋酸写 $\\text{pH} = -\\log(0.10) = 1.00$ 得零分——实际 pH 是 2.87。简答题中务必写出 ICE 表和 $K_a$ 表达式。"
            },
            {
              "type": "h3",
              "en": "Conjugate Pairs: $K_a \\times K_b = K_w$, and Salt Solutions",
              "zh": "共轭对：$K_a \\times K_b = K_w$ 与盐溶液"
            },
            {
              "type": "math",
              "tex": "K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\ (25\\,^{\\circ}\\text{C})"
            },
            {
              "type": "p",
              "en": "This relation holds for any conjugate acid–base pair. It explains an inverse rule: the weaker the acid, the stronger its conjugate base. It also predicts whether a salt solution is acidic, basic, or neutral:",
              "zh": "该关系对任何共轭酸碱对都成立。它解释了一条反比规则：酸越弱，其共轭碱越强。它还能预测盐溶液的酸碱性："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Anion of a strong acid (e.g. $\\text{Cl}^-$, $\\text{NO}_3^-$): negligible base, neutral spectator.",
                  "zh": "强酸的阴离子（如 $\\text{Cl}^-$、$\\text{NO}_3^-$）：碱性可忽略，是中性旁观离子。"
                },
                {
                  "en": "Anion of a weak acid (e.g. $\\text{F}^-$, $\\text{CH}_3\\text{COO}^-$): a weak base, makes the solution basic.",
                  "zh": "弱酸的阴离子（如 $\\text{F}^-$、$\\text{CH}_3\\text{COO}^-$）：是弱碱，使溶液呈碱性。"
                },
                {
                  "en": "Cation of a weak base (e.g. $\\text{NH}_4^+$): a weak acid, makes the solution acidic. Group 1 cations are neutral spectators.",
                  "zh": "弱碱的阳离子（如 $\\text{NH}_4^+$）：是弱酸，使溶液呈酸性。第 1 族阳离子是中性旁观离子。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Molecular Structure and Acid Strength",
              "zh": "分子结构与酸强度"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Within a period, higher electronegativity of the atom bonded to H polarizes the bond and strengthens the acid.",
                  "zh": "同周期中，与 H 相连的原子电负性越大，键的极性越强，酸性越强。"
                },
                {
                  "en": "Down a group, bond strength dominates: the weak H–I bond makes $\\text{HI}$ far stronger than $\\text{HF}$, whose short strong bond holds its proton tightly.",
                  "zh": "同族从上到下，键能起主导作用：H–I 键弱使 $\\text{HI}$ 远强于 $\\text{HF}$，后者短而强的键把质子抓得很牢。"
                },
                {
                  "en": "Oxoacids: more oxygen atoms on the central atom pull electron density away, stabilizing the conjugate base—so $\\text{HClO}_4 > \\text{HClO}_3 > \\text{HClO}_2 > \\text{HClO}$.",
                  "zh": "含氧酸：中心原子上的氧越多，越能分散电子密度、稳定共轭碱——故 $\\text{HClO}_4 > \\text{HClO}_3 > \\text{HClO}_2 > \\text{HClO}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: pH of a Weak Acid",
                "zh": "例题 1：弱酸的 pH"
              },
              "problem": {
                "en": "Find the pH of $0.10\\ M$ acetic acid ($K_a = 1.8 \\times 10^{-5}$).",
                "zh": "求 $0.10\\ M$ 醋酸（$K_a = 1.8 \\times 10^{-5}$）的 pH。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "ICE table: initial $[\\text{HA}] = 0.10$, change $-x$, giving $x$ each of $\\text{H}_3\\text{O}^+$ and $\\text{A}^-$ at equilibrium.",
                  "zh": "ICE 表：初始 $[\\text{HA}] = 0.10$，变化 $-x$，平衡时各生成 $x$ 的 $\\text{H}_3\\text{O}^+$ 和 $\\text{A}^-$。"
                },
                {
                  "type": "math",
                  "tex": "K_a = \\frac{x^2}{0.10 - x} \\approx \\frac{x^2}{0.10} = 1.8 \\times 10^{-5}"
                },
                {
                  "type": "math",
                  "tex": "x = \\sqrt{1.8 \\times 10^{-6}} = 1.3 \\times 10^{-3}\\ M \\quad\\Rightarrow\\quad \\text{pH} = -\\log(1.3 \\times 10^{-3}) = 2.87"
                },
                {
                  "type": "p",
                  "en": "Check: percent ionization $= 1.3\\%$, well under 5%, so the approximation was valid.",
                  "zh": "检验：电离百分数 $= 1.3\\%$，远小于 5%，近似成立。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: $K_b$ of a Conjugate Base and Salt pH",
                "zh": "例题 2：共轭碱的 $K_b$ 与盐溶液的 pH"
              },
              "problem": {
                "en": "Sodium fluoride, $\\text{NaF}$, dissolves to give $\\text{F}^-$. Given $K_a(\\text{HF}) = 6.8 \\times 10^{-4}$, find $K_b$ of $\\text{F}^-$ and state whether a $\\text{NaF}$ solution is acidic, basic, or neutral.",
                "zh": "氟化钠 $\\text{NaF}$ 溶解产生 $\\text{F}^-$。已知 $K_a(\\text{HF}) = 6.8 \\times 10^{-4}$，求 $\\text{F}^-$ 的 $K_b$，并判断 $\\text{NaF}$ 溶液呈酸性、碱性还是中性。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "K_b = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{6.8 \\times 10^{-4}} = 1.5 \\times 10^{-11}"
                },
                {
                  "type": "p",
                  "en": "$\\text{F}^-$ is a weak base: $\\text{F}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HF} + \\text{OH}^-$. $\\text{Na}^+$ is a neutral spectator, so the solution is (slightly) basic.",
                  "zh": "$\\text{F}^-$ 是弱碱：$\\text{F}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HF} + \\text{OH}^-$。$\\text{Na}^+$ 是中性旁观离子，故溶液呈（弱）碱性。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "A $0.20\\ M$ weak acid solution has $[\\text{H}_3\\text{O}^+] = 2.0 \\times 10^{-3}\\ M$ at equilibrium. What is the percent ionization? Give a number (in %, 2 sig figs).",
                "zh": "$0.20\\ M$ 弱酸溶液平衡时 $[\\text{H}_3\\text{O}^+] = 2.0 \\times 10^{-3}\\ M$。电离百分数是多少？给出数字（单位 %，2 位有效数字）。"
              },
              "answer": "1.0",
              "accept": [
                "1",
                "1.00"
              ],
              "explanation": {
                "en": "$\\%\\ \\text{ionization} = (2.0 \\times 10^{-3} / 0.20) \\times 100\\% = 1.0\\%$.",
                "zh": "$\\%\\ \\text{电离} = (2.0 \\times 10^{-3} / 0.20) \\times 100\\% = 1.0\\%$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which salt dissolves in water to give a basic solution?",
                "zh": "下列哪种盐溶于水呈碱性？"
              },
              "choices": [
                "$\\text{NaCl}$",
                "$\\text{NH}_4\\text{Cl}$",
                "$\\text{KNO}_3$",
                "$\\text{NaF}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\text{F}^-$ is the conjugate base of the weak acid $\\text{HF}$, so it accepts protons from water, producing $\\text{OH}^-$. $\\text{NH}_4\\text{Cl}$ is the tempting wrong answer—it is acidic, since $\\text{NH}_4^+$ is the conjugate acid of a weak base.",
                "zh": "$\\text{F}^-$ 是弱酸 $\\text{HF}$ 的共轭碱，会从水中夺取质子生成 $\\text{OH}^-$。$\\text{NH}_4\\text{Cl}$ 是迷惑项——它呈酸性，因为 $\\text{NH}_4^+$ 是弱碱的共轭酸。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An acid has $K_a = 1.0 \\times 10^{-5}$. What is its $\\text{p}K_a$? Give an integer.",
                "zh": "某酸 $K_a = 1.0 \\times 10^{-5}$。其 $\\text{p}K_a$ 是多少？请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "5.00"
              ],
              "explanation": {
                "en": "$\\text{p}K_a = -\\log(1.0 \\times 10^{-5}) = 5.00$.",
                "zh": "$\\text{p}K_a = -\\log(1.0 \\times 10^{-5}) = 5.00$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The weak acid $\\text{HA}$ has $K_a = 2.0 \\times 10^{-5}$ at $25\\,^{\\circ}\\text{C}$. What is $K_b$ for $\\text{A}^-$?",
                "zh": "弱酸 $\\text{HA}$ 在 $25\\,^{\\circ}\\text{C}$ 时 $K_a = 2.0 \\times 10^{-5}$。$\\text{A}^-$ 的 $K_b$ 是多少？"
              },
              "choices": [
                "$5.0 \\times 10^{-10}$",
                "$2.0 \\times 10^{-9}$",
                "$2.0 \\times 10^{-5}$",
                "$5.0 \\times 10^{-19}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$K_b = K_w / K_a = (1.0 \\times 10^{-14}) / (2.0 \\times 10^{-5}) = 5.0 \\times 10^{-10}$. Choice C tempts students who think a conjugate pair shares the same constant.",
                "zh": "$K_b = K_w / K_a = (1.0 \\times 10^{-14}) / (2.0 \\times 10^{-5}) = 5.0 \\times 10^{-10}$。选项 C 会迷惑那些以为共轭对常数相同的同学。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why is $\\text{HI}$ a much stronger acid than $\\text{HF}$?",
                "zh": "为什么 $\\text{HI}$ 的酸性远强于 $\\text{HF}$？"
              },
              "choices": [
                "iodine is more electronegative than fluorine",
                "the H–I bond is much weaker, so the proton is lost more easily",
                "$\\text{HI}$ has more lone pairs",
                "fluoride is a weaker conjugate base"
              ],
              "answer": 1,
              "explanation": {
                "en": "Down a group, bond strength dominates acid strength: the long, weak H–I bond breaks far more easily than the short, strong H–F bond. Choice A is backwards—fluorine is MORE electronegative, which tempts students who apply the across-a-period rule to a group.",
                "zh": "同族中键能主导酸性：长而弱的 H–I 键比短而强的 H–F 键容易断得多。选项 A 说反了——氟的电负性更大，把同周期规则错用到同族的同学容易上当。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Rank by acid strength: which oxoacid is strongest?",
                "zh": "按酸性排序：下列含氧酸中哪种最强？"
              },
              "choices": [
                "$\\text{HClO}$",
                "$\\text{HClO}_2$",
                "$\\text{HClO}_4$",
                "$\\text{HClO}_3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "More oxygens on the central Cl withdraw electron density and delocalize the negative charge of the conjugate base, so $\\text{HClO}_4$ (four O atoms) is strongest.",
                "zh": "中心 Cl 上的氧越多，越能吸走电子密度并使共轭碱的负电荷离域，故含四个 O 的 $\\text{HClO}_4$ 最强。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $0.10\\ M$ solution of weak acid $\\text{HA}$ ($K_a = 1.0 \\times 10^{-7}$) is prepared. Using the small-$x$ approximation, what is the pH? Give an integer.",
                "zh": "配制 $0.10\\ M$ 弱酸 $\\text{HA}$（$K_a = 1.0 \\times 10^{-7}$）溶液。用小 $x$ 近似，pH 是多少？请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "4.00"
              ],
              "explanation": {
                "en": "$x^2 / 0.10 = 1.0 \\times 10^{-7}$ gives $x = \\sqrt{1.0 \\times 10^{-8}} = 1.0 \\times 10^{-4}\\ M$, so $\\text{pH} = 4.00$.",
                "zh": "$x^2 / 0.10 = 1.0 \\times 10^{-7}$ 得 $x = \\sqrt{1.0 \\times 10^{-8}} = 1.0 \\times 10^{-4}\\ M$，故 $\\text{pH} = 4.00$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A $0.10\\ M$ weak acid solution is diluted to $0.010\\ M$. Which statement is true?",
                "zh": "把 $0.10\\ M$ 弱酸溶液稀释到 $0.010\\ M$。下列哪个说法正确？"
              },
              "choices": [
                "percent ionization increases and pH increases",
                "percent ionization decreases and pH decreases",
                "both percent ionization and $[\\text{H}_3\\text{O}^+]$ increase",
                "nothing changes because $K_a$ is constant"
              ],
              "answer": 0,
              "explanation": {
                "en": "Dilution shifts the ionization equilibrium toward more ions (higher percent ionization), but $[\\text{H}_3\\text{O}^+]$ still decreases overall, so pH rises. Choice D tempts because $K_a$ IS constant—but the equilibrium position still shifts.",
                "zh": "稀释使电离平衡向离子更多的方向移动（电离百分数升高），但 $[\\text{H}_3\\text{O}^+]$ 总体仍减小，pH 升高。选项 D 有迷惑性，因为 $K_a$ 确实不变——但平衡位置仍会移动。"
              }
            }
          ]
        },
        {
          "id": "buffers-and-titration-curves",
          "title": "Buffers and Titration Curves",
          "titleZh": "缓冲溶液与滴定曲线",
          "content": [
            {
              "type": "h2",
              "en": "How Buffers Resist pH Change",
              "zh": "缓冲溶液如何抵抗 pH 变化"
            },
            {
              "type": "p",
              "en": "A buffer contains significant amounts of BOTH a weak acid $\\text{HA}$ and its conjugate base $\\text{A}^-$ (for example, acetic acid plus sodium acetate). At the particulate level, the two members of the pair intercept whatever is added: added strong acid is consumed by the conjugate base ($\\text{A}^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{HA} + \\text{H}_2\\text{O}$), and added strong base is consumed by the weak acid ($\\text{HA} + \\text{OH}^- \\rightarrow \\text{A}^- + \\text{H}_2\\text{O}$). The strong acid or base is converted into a weak one, so the pH changes only slightly.",
              "zh": "缓冲溶液同时含有大量弱酸 $\\text{HA}$ 及其共轭碱 $\\text{A}^-$（例如醋酸加醋酸钠）。从粒子层面看，这对共轭酸碱能拦截加入的任何物质：加入的强酸被共轭碱消耗（$\\text{A}^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{HA} + \\text{H}_2\\text{O}$），加入的强碱被弱酸消耗（$\\text{HA} + \\text{OH}^- \\rightarrow \\text{A}^- + \\text{H}_2\\text{O}$）。强酸或强碱被转化为弱的，因此 pH 只有微小变化。"
            },
            {
              "type": "math",
              "tex": "\\text{added acid:}\\ \\ \\text{A}^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{HA} + \\text{H}_2\\text{O} \\qquad \\text{added base:}\\ \\ \\text{HA} + \\text{OH}^- \\rightarrow \\text{A}^- + \\text{H}_2\\text{O}"
            },
            {
              "type": "h3",
              "en": "The Henderson–Hasselbalch Equation",
              "zh": "亨德森–哈塞尔巴尔赫方程"
            },
            {
              "type": "math",
              "tex": "\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}"
            },
            {
              "type": "p",
              "en": "When $[\\text{A}^-] = [\\text{HA}]$, the log term is zero and $\\text{pH} = \\text{p}K_a$. Each factor of 10 in the ratio shifts the pH by one unit. Because both species are in the same solution, you may use moles instead of concentrations in the ratio—the volume cancels.",
              "zh": "当 $[\\text{A}^-] = [\\text{HA}]$ 时，对数项为零，$\\text{pH} = \\text{p}K_a$。比值每变化 10 倍，pH 变化 1 个单位。由于两种物质在同一溶液中，比值可以直接用摩尔数代替浓度——体积会约掉。"
            },
            {
              "type": "h3",
              "en": "Buffer Capacity and Buffer Design",
              "zh": "缓冲容量与缓冲液设计"
            },
            {
              "type": "p",
              "en": "Buffer capacity—how much strong acid or base a buffer can absorb before its pH changes drastically—grows with the total moles of $\\text{HA}$ and $\\text{A}^-$. Two buffers can share the same pH but differ hugely in capacity: a $1.0\\ M$/$1.0\\ M$ buffer absorbs ten times more added acid than a $0.10\\ M$/$0.10\\ M$ buffer at the same pH.",
              "zh": "缓冲容量——缓冲溶液在 pH 剧烈变化前能吸收多少强酸或强碱——随 $\\text{HA}$ 和 $\\text{A}^-$ 的总摩尔数增大。两种缓冲液可以 pH 相同但容量差别巨大：$1.0\\ M$/$1.0\\ M$ 的缓冲液能吸收的酸是同 pH 下 $0.10\\ M$/$0.10\\ M$ 缓冲液的十倍。"
            },
            {
              "type": "p",
              "en": "A buffer works best when the ratio is near 1, i.e. within about one pH unit of $\\text{p}K_a$. To design a buffer for a target pH, choose an acid with $\\text{p}K_a$ close to that pH, then adjust the ratio to fine-tune.",
              "zh": "当比值接近 1（即 pH 在 $\\text{p}K_a$ 附近约 1 个单位内）时缓冲效果最好。要为目标 pH 设计缓冲液，应选 $\\text{p}K_a$ 接近该 pH 的酸，再通过调整比值微调。"
            },
            {
              "type": "note",
              "en": "AP tip: On FRQs, \"explain why the pH barely changed\" must be answered with the neutralization reaction between the added ion and the buffer component—write the net-ionic equation. Just quoting Henderson–Hasselbalch without the particulate reasoning loses the point. Also: a strong acid and its salt (e.g. $\\text{HCl}/\\text{NaCl}$) is NOT a buffer, because $\\text{Cl}^-$ cannot accept a proton.",
              "zh": "AP 提示：简答题中回答「为什么 pH 几乎不变」必须写出所加离子与缓冲组分之间的中和反应——写净离子方程式。只引用亨德森–哈塞尔巴尔赫方程而没有粒子层面的推理会丢分。另外：强酸和它的盐（如 $\\text{HCl}/\\text{NaCl}$）不是缓冲液，因为 $\\text{Cl}^-$ 不能接受质子。"
            },
            {
              "type": "h3",
              "en": "Titration Curves",
              "zh": "滴定曲线"
            },
            {
              "type": "p",
              "en": "A titration curve plots pH against volume of titrant. Its shape depends on the strengths of acid and base. Strong acid–strong base: the pH is low and flat, rockets through a steep vertical region, and the equivalence point is at pH 7. Weak acid–strong base: the initial pH is higher, a buffer region appears before equivalence, and the equivalence-point pH is above 7 because only the conjugate base $\\text{A}^-$ remains. (Weak base titrated with strong acid mirrors this: equivalence below 7.)",
              "zh": "滴定曲线描绘 pH 随滴定剂体积的变化。曲线形状取决于酸和碱的强弱。强酸–强碱：pH 起初低而平缓，随后陡然上升，当量点在 pH 7。弱酸–强碱：初始 pH 较高，当量点之前出现缓冲区，且当量点 pH 大于 7，因为此时只剩共轭碱 $\\text{A}^-$。（弱碱被强酸滴定则相反：当量点低于 7。）"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Equivalence point: moles of titrant = moles of analyte ($n_{acid} = n_{base}$).",
                  "zh": "当量点：滴定剂摩尔数 = 被测物摩尔数（$n_{acid} = n_{base}$）。"
                },
                {
                  "en": "Half-equivalence point: half the weak acid has been converted to $\\text{A}^-$, so $[\\text{HA}] = [\\text{A}^-]$ and $\\text{pH} = \\text{p}K_a$. Read $\\text{p}K_a$ straight off the curve here.",
                  "zh": "半当量点：一半弱酸已转化为 $\\text{A}^-$，故 $[\\text{HA}] = [\\text{A}^-]$，$\\text{pH} = \\text{p}K_a$。在此可直接从曲线读出 $\\text{p}K_a$。"
                },
                {
                  "en": "Indicator choice: pick an indicator whose $\\text{p}K_a$ (color-change range) lies close to the equivalence-point pH—e.g. phenolphthalein (~pH 8–10) for weak acid–strong base titrations.",
                  "zh": "指示剂选择：选 $\\text{p}K_a$（变色范围）接近当量点 pH 的指示剂——例如弱酸–强碱滴定用酚酞（约 pH 8–10）。"
                },
                {
                  "en": "Polyprotic acids (e.g. $\\text{H}_2\\text{CO}_3$) show one buffer region and one steep rise per acidic proton—two humps for a diprotic acid.",
                  "zh": "多元酸（如 $\\text{H}_2\\text{CO}_3$）的曲线中，每个酸性质子对应一个缓冲区和一次陡升——二元酸有两个台阶。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: pH of a Buffer",
                "zh": "例题 1：缓冲溶液的 pH"
              },
              "problem": {
                "en": "A buffer contains $0.20\\ M$ $\\text{HA}$ and $0.30\\ M$ $\\text{A}^-$, with $\\text{p}K_a = 4.74$. Find the pH.",
                "zh": "缓冲溶液含 $0.20\\ M$ $\\text{HA}$ 和 $0.30\\ M$ $\\text{A}^-$，$\\text{p}K_a = 4.74$。求 pH。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\text{pH} = 4.74 + \\log\\frac{0.30}{0.20} = 4.74 + \\log(1.5)"
                },
                {
                  "type": "math",
                  "tex": "\\text{pH} = 4.74 + 0.18 = 4.92"
                },
                {
                  "type": "p",
                  "en": "The pH is slightly above $\\text{p}K_a$ because the base form outnumbers the acid form—always sanity-check the direction.",
                  "zh": "pH 略高于 $\\text{p}K_a$，因为碱形式多于酸形式——一定要检查方向是否合理。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading a Weak-Acid Titration",
                "zh": "例题 2：解读弱酸滴定"
              },
              "problem": {
                "en": "$25.0\\ \\text{mL}$ of $0.100\\ M$ weak acid $\\text{HA}$ is titrated with $0.100\\ M$ $\\text{NaOH}$. After $12.5\\ \\text{mL}$ of base is added, the measured pH is $4.20$. Find $K_a$ of the acid, and predict whether the equivalence-point pH is above, at, or below 7.",
                "zh": "用 $0.100\\ M$ $\\text{NaOH}$ 滴定 $25.0\\ \\text{mL}$ $0.100\\ M$ 弱酸 $\\text{HA}$。加入 $12.5\\ \\text{mL}$ 碱后测得 pH 为 $4.20$。求该酸的 $K_a$，并预测当量点 pH 高于、等于还是低于 7。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Equivalence requires $25.0\\ \\text{mL}$ of base (equal concentrations and volumes), so $12.5\\ \\text{mL}$ is the half-equivalence point: exactly half of $\\text{HA}$ has become $\\text{A}^-$.",
                  "zh": "当量点需要 $25.0\\ \\text{mL}$ 碱（浓度体积相同），故 $12.5\\ \\text{mL}$ 是半当量点：恰好一半 $\\text{HA}$ 变成了 $\\text{A}^-$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{pH} = \\text{p}K_a = 4.20 \\quad\\Rightarrow\\quad K_a = 10^{-4.20} = 6.3 \\times 10^{-5}"
                },
                {
                  "type": "p",
                  "en": "At equivalence only $\\text{A}^-$ remains, a weak base, so the equivalence-point pH is above 7. Phenolphthalein would be a suitable indicator.",
                  "zh": "当量点时只剩弱碱 $\\text{A}^-$，故当量点 pH 高于 7。酚酞是合适的指示剂。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "At the half-equivalence point of a weak acid–strong base titration:",
                "zh": "在弱酸–强碱滴定的半当量点："
              },
              "choices": [
                "$\\text{pH} = 7$ exactly",
                "$\\text{pH} = \\text{p}K_a$ of the weak acid",
                "all of the weak acid has been neutralized",
                "the indicator changes color"
              ],
              "answer": 1,
              "explanation": {
                "en": "Half the acid has been converted to conjugate base, so $[\\text{HA}] = [\\text{A}^-]$ and Henderson–Hasselbalch gives $\\text{pH} = \\text{p}K_a$. Choice A confuses the half-equivalence point with the equivalence point of a strong–strong titration.",
                "zh": "一半的酸已转化为共轭碱，$[\\text{HA}] = [\\text{A}^-]$，由亨德森–哈塞尔巴尔赫方程得 $\\text{pH} = \\text{p}K_a$。选项 A 把半当量点与强酸强碱滴定的当量点混淆了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A buffer contains equal moles of $\\text{HA}$ and $\\text{A}^-$; the acid has $\\text{p}K_a = 4.74$. What is the pH? Give a number to 2 decimal places.",
                "zh": "缓冲溶液中 $\\text{HA}$ 与 $\\text{A}^-$ 摩尔数相等；该酸 $\\text{p}K_a = 4.74$。pH 是多少？给出保留 2 位小数的数字。"
              },
              "answer": "4.74",
              "accept": [
                "4.7"
              ],
              "explanation": {
                "en": "With a 1:1 ratio, $\\log(1) = 0$, so $\\text{pH} = \\text{p}K_a = 4.74$.",
                "zh": "比值为 1:1 时 $\\log(1) = 0$，故 $\\text{pH} = \\text{p}K_a = 4.74$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which mixture forms a buffer solution?",
                "zh": "下列哪组混合物能形成缓冲溶液？"
              },
              "choices": [
                "$\\text{HCl}$ and $\\text{NaCl}$",
                "$\\text{NaOH}$ and $\\text{NaCl}$",
                "$\\text{CH}_3\\text{COOH}$ and $\\text{CH}_3\\text{COONa}$",
                "$\\text{HNO}_3$ and $\\text{NaNO}_3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A buffer needs a weak conjugate acid–base pair, like acetic acid and acetate. $\\text{HCl}/\\text{NaCl}$ is the classic trap: $\\text{Cl}^-$ is the conjugate of a STRONG acid and cannot accept a proton, so it gives no buffering.",
                "zh": "缓冲液需要弱共轭酸碱对，如醋酸和醋酸根。$\\text{HCl}/\\text{NaCl}$ 是经典陷阱：$\\text{Cl}^-$ 是强酸的共轭碱，不能接受质子，没有缓冲作用。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When a weak acid is titrated with a strong base, the pH at the equivalence point is:",
                "zh": "用强碱滴定弱酸时，当量点的 pH："
              },
              "choices": [
                "above 7, because the conjugate base $\\text{A}^-$ reacts with water",
                "exactly 7, because moles of acid equal moles of base",
                "below 7, because some weak acid remains",
                "equal to the $\\text{p}K_a$"
              ],
              "answer": 0,
              "explanation": {
                "en": "At equivalence the solution contains only $\\text{A}^-$, a weak base that generates $\\text{OH}^-$, so pH > 7. Choice B tempts because equal moles HAVE reacted—but \"equivalence\" describes stoichiometry, not neutrality.",
                "zh": "当量点时溶液中只有弱碱 $\\text{A}^-$，它水解产生 $\\text{OH}^-$，故 pH > 7。选项 B 有迷惑性，因为酸碱摩尔数确实相等——但「当量」描述的是化学计量关系，不是中性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$25.0\\ \\text{mL}$ of $0.100\\ M$ $\\text{HA}$ is titrated with $0.100\\ M$ $\\text{NaOH}$. How many mL of base are needed to reach the equivalence point? Give a number.",
                "zh": "用 $0.100\\ M$ $\\text{NaOH}$ 滴定 $25.0\\ \\text{mL}$ $0.100\\ M$ $\\text{HA}$。到达当量点需要多少 mL 碱？给出数字。"
              },
              "answer": "25",
              "accept": [
                "25.0",
                "25.00"
              ],
              "explanation": {
                "en": "Moles acid $= 0.0250\\ \\text{L} \\times 0.100\\ M = 2.50 \\times 10^{-3}\\ \\text{mol}$; the same moles of $\\text{NaOH}$ at $0.100\\ M$ requires $25.0\\ \\text{mL}$.",
                "zh": "酸的摩尔数 $= 0.0250\\ \\text{L} \\times 0.100\\ M = 2.50 \\times 10^{-3}\\ \\text{mol}$；相同摩尔数的 $0.100\\ M$ $\\text{NaOH}$ 需 $25.0\\ \\text{mL}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A weak base is titrated with a strong acid; the equivalence point occurs at pH 5.3. Which indicator is the best choice?",
                "zh": "用强酸滴定弱碱，当量点在 pH 5.3。哪种指示剂最合适？"
              },
              "choices": [
                "phenolphthalein (changes color pH 8–10)",
                "an indicator with $\\text{p}K_a \\approx 9$",
                "methyl red (changes color pH 4.4–6.2)",
                "any indicator, since they all change at pH 7"
              ],
              "answer": 2,
              "explanation": {
                "en": "The indicator must change color near the equivalence-point pH, so methyl red (4.4–6.2) brackets 5.3. Phenolphthalein would change color long after the equivalence point had passed.",
                "zh": "指示剂必须在当量点 pH 附近变色，甲基红（4.4–6.2）正好覆盖 5.3。酚酞要到远超当量点之后才变色。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A small amount of $\\text{HCl}$ is added to an acetic acid/acetate buffer. At the particulate level, which reaction keeps the pH nearly constant?",
                "zh": "向醋酸/醋酸根缓冲液中加入少量 $\\text{HCl}$。从粒子层面看，哪个反应使 pH 几乎不变？"
              },
              "choices": [
                "$\\text{CH}_3\\text{COOH} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$",
                "$\\text{H}_3\\text{O}^+ + \\text{OH}^- \\rightarrow 2\\,\\text{H}_2\\text{O}$",
                "$\\text{Cl}^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{HCl} + \\text{H}_2\\text{O}$",
                "$\\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The added $\\text{H}_3\\text{O}^+$ is consumed by the conjugate base (acetate), converting a strong acid into the weak acid $\\text{CH}_3\\text{COOH}$. Choice A is what happens when strong BASE is added—the other half of buffer action.",
                "zh": "加入的 $\\text{H}_3\\text{O}^+$ 被共轭碱（醋酸根）消耗，把强酸转化为弱酸 $\\text{CH}_3\\text{COOH}$。选项 A 是加入强碱时发生的反应——缓冲作用的另一半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A buffer has $\\text{p}K_a = 5.00$ and the ratio $[\\text{A}^-]/[\\text{HA}] = 10$. What is the pH? Give an integer.",
                "zh": "缓冲溶液的 $\\text{p}K_a = 5.00$，且 $[\\text{A}^-]/[\\text{HA}] = 10$。pH 是多少？请填一个整数。"
              },
              "answer": "6",
              "accept": [
                "6.0",
                "6.00"
              ],
              "explanation": {
                "en": "$\\text{pH} = 5.00 + \\log(10) = 5.00 + 1.00 = 6.00$. A 10:1 base-to-acid ratio raises the pH exactly one unit above $\\text{p}K_a$.",
                "zh": "$\\text{pH} = 5.00 + \\log(10) = 5.00 + 1.00 = 6.00$。碱与酸 10:1 的比值使 pH 恰好比 $\\text{p}K_a$ 高 1 个单位。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-9-thermodynamics-electrochemistry",
      "title": "Unit 9: Thermodynamics and Electrochemistry",
      "titleZh": "第九单元：热力学与电化学",
      "lessons": [
        {
          "id": "entropy-and-gibbs",
          "title": "Entropy and Gibbs Free Energy",
          "titleZh": "熵与吉布斯自由能",
          "content": [
            {
              "type": "h2",
              "en": "Entropy: The Dispersal of Matter and Energy",
              "zh": "熵：物质与能量的分散"
            },
            {
              "type": "p",
              "en": "Entropy ($S$) measures how spread out matter and energy are among the available microstates of a system. At the particulate level, a state with more ways to arrange particles and distribute energy has higher entropy. You can usually predict the sign of $\\Delta S$ for a process just by picturing the particles before and after.",
              "zh": "熵（$S$）衡量物质与能量在体系可及微观状态中的分散程度。在粒子层面，粒子排布方式和能量分配方式越多的状态，熵越高。通过想象变化前后的粒子图像，通常就能预测过程 $\\Delta S$ 的符号。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Phase: $S_{\\text{solid}} < S_{\\text{liquid}} \\ll S_{\\text{gas}}$. Melting, vaporization, and sublimation all increase entropy; freezing and condensation decrease it.",
                  "zh": "物态：$S_{\\text{固}} < S_{\\text{液}} \\ll S_{\\text{气}}$。熔化、汽化、升华都使熵增大；凝固和液化使熵减小。"
                },
                {
                  "en": "Moles of gas: more moles of gas on the product side means $\\Delta S > 0$. Gas particles dominate the entropy change because they access so many more positions.",
                  "zh": "气体摩尔数：产物一侧气体摩尔数更多则 $\\Delta S > 0$。气体粒子可及的位置多得多，因而主导熵变。"
                },
                {
                  "en": "Temperature: heating any substance raises its entropy, because the particles spread over more energy states.",
                  "zh": "温度：加热任何物质都会使其熵升高，因为粒子分布到更多的能量状态上。"
                },
                {
                  "en": "Dissolving a solid in water usually increases entropy; dissolving a gas in water decreases it (the gas particles become confined).",
                  "zh": "固体溶于水通常熵增；气体溶于水熵减（气体粒子被限制在液体中）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Calculating $\\Delta S^\\circ$",
              "zh": "计算 $\\Delta S^\\circ$"
            },
            {
              "type": "p",
              "en": "Standard molar entropies $S^\\circ$ are absolute values (a perfect crystal at $0\\ \\text{K}$ has $S = 0$), so unlike enthalpies of formation, elements do NOT have $S^\\circ = 0$. The standard entropy change of a reaction is a products-minus-reactants sum weighted by coefficients.",
              "zh": "标准摩尔熵 $S^\\circ$ 是绝对值（$0\\ \\text{K}$ 的完美晶体 $S = 0$），因此与生成焓不同，单质的 $S^\\circ$ 不为 0。反应的标准熵变是按系数加权的「产物减反应物」求和。"
            },
            {
              "type": "math",
              "tex": "\\Delta S^\\circ = \\sum n\\,S^\\circ(\\text{products}) - \\sum n\\,S^\\circ(\\text{reactants})"
            },
            {
              "type": "note",
              "en": "Common mistake: $S^\\circ$ is tabulated in $\\text{J/(mol}\\cdot\\text{K)}$ but $\\Delta H^\\circ$ in $\\text{kJ/mol}$. Before combining them in $\\Delta G = \\Delta H - T\\Delta S$, convert one of them—forgetting the factor of 1000 is the single most common error on this FRQ.",
              "zh": "常见错误：$S^\\circ$ 的表格单位是 $\\text{J/(mol}\\cdot\\text{K)}$，而 $\\Delta H^\\circ$ 是 $\\text{kJ/mol}$。代入 $\\Delta G = \\Delta H - T\\Delta S$ 前必须统一单位——漏掉 1000 的换算是这类简答题最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Sign and Size of $\\Delta S^\\circ$",
                "zh": "例题 1：$\\Delta S^\\circ$ 的符号与大小"
              },
              "problem": {
                "en": "For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$, predict the sign of $\\Delta S^\\circ$, then calculate it. ($S^\\circ$: $\\text{N}_2$ = 191.6, $\\text{H}_2$ = 130.7, $\\text{NH}_3$ = 192.5 $\\text{J/(mol}\\cdot\\text{K)}$)",
                "zh": "对 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$，先预测 $\\Delta S^\\circ$ 的符号，再计算其值。（$S^\\circ$：$\\text{N}_2$ = 191.6，$\\text{H}_2$ = 130.7，$\\text{NH}_3$ = 192.5 $\\text{J/(mol}\\cdot\\text{K)}$）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Prediction: 4 mol of gas becomes 2 mol of gas, so fewer arrangements are available and $\\Delta S^\\circ < 0$.",
                  "zh": "预测：4 mol 气体变为 2 mol 气体，可及排布减少，故 $\\Delta S^\\circ < 0$。"
                },
                {
                  "type": "math",
                  "tex": "\\Delta S^\\circ = 2(192.5) - [191.6 + 3(130.7)] = 385.0 - 583.7"
                },
                {
                  "type": "math",
                  "tex": "\\Delta S^\\circ = -198.7\\ \\text{J/(mol}\\cdot\\text{K)}"
                },
                {
                  "type": "p",
                  "en": "The negative value confirms the particulate prediction.",
                  "zh": "负值印证了粒子层面的预测。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Gibbs Free Energy and Thermodynamic Favorability",
              "zh": "吉布斯自由能与热力学有利性"
            },
            {
              "type": "p",
              "en": "A process is thermodynamically favorable (spontaneous) when it releases free energy: $\\Delta G < 0$. Gibbs free energy combines the enthalpy drive (toward lower energy) and the entropy drive (toward more dispersal) in one quantity.",
              "zh": "当过程释放自由能（$\\Delta G < 0$）时，它在热力学上有利（自发）。吉布斯自由能把焓驱动（趋向更低能量）和熵驱动（趋向更分散）合并为一个量。"
            },
            {
              "type": "math",
              "tex": "\\Delta G = \\Delta H - T\\Delta S"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\Delta H < 0$, $\\Delta S > 0$: favorable at ALL temperatures ($\\Delta G$ always negative).",
                  "zh": "$\\Delta H < 0$、$\\Delta S > 0$：任何温度下都有利（$\\Delta G$ 恒为负）。"
                },
                {
                  "en": "$\\Delta H > 0$, $\\Delta S < 0$: favorable at NO temperature ($\\Delta G$ always positive).",
                  "zh": "$\\Delta H > 0$、$\\Delta S < 0$：任何温度下都不利（$\\Delta G$ 恒为正）。"
                },
                {
                  "en": "$\\Delta H < 0$, $\\Delta S < 0$: favorable only at LOW $T$, where the $T\\Delta S$ penalty is small (e.g. freezing water below $273\\ \\text{K}$).",
                  "zh": "$\\Delta H < 0$、$\\Delta S < 0$：仅在低温有利，此时 $T\\Delta S$ 的代价小（如低于 $273\\ \\text{K}$ 时水结冰）。"
                },
                {
                  "en": "$\\Delta H > 0$, $\\Delta S > 0$: favorable only at HIGH $T$, where entropy wins (e.g. boiling water above $373\\ \\text{K}$). The crossover temperature is $T = \\Delta H/\\Delta S$.",
                  "zh": "$\\Delta H > 0$、$\\Delta S > 0$：仅在高温有利，此时熵占上风（如高于 $373\\ \\text{K}$ 时水沸腾）。转折温度为 $T = \\Delta H/\\Delta S$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Favorable does not mean fast. $\\Delta G$ is about thermodynamic control (where the system ends up); the rate is under kinetic control (how high the activation energy barrier is). Diamond converting to graphite has $\\Delta G^\\circ < 0$, yet diamonds persist for eons because the activation energy is enormous. A thermodynamically unfavorable reaction can also be driven by coupling it to a highly favorable one—as long as the sum of the $\\Delta G$ values is negative, the combined process proceeds. Cells couple ATP hydrolysis to unfavorable biosynthesis, and smelters couple carbon oxidation to unfavorable ore decomposition.",
              "zh": "有利不等于快。$\\Delta G$ 属于热力学控制（体系最终到哪里）；速率属于动力学控制（活化能垒有多高）。金刚石转化为石墨的 $\\Delta G^\\circ < 0$，但因活化能极高，金刚石可存在亿万年。热力学不利的反应也可以通过与高度有利的反应偶联来推动——只要各步 $\\Delta G$ 之和为负，总过程就能进行。细胞用 ATP 水解偶联不利的生物合成，冶炼中用碳的氧化偶联不利的矿石分解。"
            },
            {
              "type": "note",
              "en": "AP tip: When asked why an observed reaction is slow despite $\\Delta G < 0$, answer with activation energy, not thermodynamics. When asked how to drive an unfavorable process, answer with coupling (or electrolysis)—both are standard FRQ prompts.",
              "zh": "AP 提示：若题目问「为什么 $\\Delta G < 0$ 的反应仍然很慢」，要用活化能作答，而不是热力学；若问「如何推动不利的过程」，要答偶联反应（或电解）——这两问都是简答题常客。"
            },
            {
              "type": "h3",
              "en": "$\\Delta G^\\circ$ and the Equilibrium Constant",
              "zh": "$\\Delta G^\\circ$ 与平衡常数"
            },
            {
              "type": "p",
              "en": "Free energy and equilibrium are two languages for the same idea. A reaction with $\\Delta G^\\circ < 0$ has $K > 1$ (products favored at equilibrium); $\\Delta G^\\circ > 0$ means $K < 1$ (reactants favored); $\\Delta G^\\circ = 0$ means $K = 1$. Because $\\Delta G^\\circ$ sits in an exponent, even a modestly negative $\\Delta G^\\circ$ produces a huge $K$.",
              "zh": "自由能与平衡是同一思想的两种语言。$\\Delta G^\\circ < 0$ 的反应 $K > 1$（平衡偏向产物）；$\\Delta G^\\circ > 0$ 则 $K < 1$（偏向反应物）；$\\Delta G^\\circ = 0$ 则 $K = 1$。由于 $\\Delta G^\\circ$ 位于指数上，即使 $\\Delta G^\\circ$ 只是略为负，$K$ 也会非常大。"
            },
            {
              "type": "math",
              "tex": "\\Delta G^\\circ = -RT\\ln K \\qquad (R = 8.314\\ \\text{J/(mol}\\cdot\\text{K)})"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Is Ammonia Synthesis Favorable?",
                "zh": "例题 2：合成氨在热力学上有利吗？"
              },
              "problem": {
                "en": "For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$, $\\Delta H^\\circ = -92.2\\ \\text{kJ/mol}$ and $\\Delta S^\\circ = -198.7\\ \\text{J/(mol}\\cdot\\text{K)}$. (a) Find $\\Delta G^\\circ$ at $298\\ \\text{K}$. (b) Above what temperature does the reaction become unfavorable?",
                "zh": "对 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$，$\\Delta H^\\circ = -92.2\\ \\text{kJ/mol}$，$\\Delta S^\\circ = -198.7\\ \\text{J/(mol}\\cdot\\text{K)}$。(a) 求 $298\\ \\text{K}$ 时的 $\\Delta G^\\circ$。(b) 高于什么温度反应变得不利？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Convert entropy to kJ: $\\Delta S^\\circ = -0.1987\\ \\text{kJ/(mol}\\cdot\\text{K)}$, then substitute.",
                  "zh": "(a) 先把熵换算成 kJ：$\\Delta S^\\circ = -0.1987\\ \\text{kJ/(mol}\\cdot\\text{K)}$，再代入。"
                },
                {
                  "type": "math",
                  "tex": "\\Delta G^\\circ = -92.2 - (298)(-0.1987) = -92.2 + 59.2 = -33.0\\ \\text{kJ/mol}"
                },
                {
                  "type": "p",
                  "en": "Negative, so at $298\\ \\text{K}$ the reaction is thermodynamically favorable and $K > 1$.",
                  "zh": "为负，故 $298\\ \\text{K}$ 时反应热力学有利，且 $K > 1$。"
                },
                {
                  "type": "p",
                  "en": "(b) This is the $\\Delta H < 0$, $\\Delta S < 0$ case: favorable only below the crossover temperature where $\\Delta G = 0$.",
                  "zh": "(b) 这是 $\\Delta H < 0$、$\\Delta S < 0$ 的情形：仅在 $\\Delta G = 0$ 的转折温度以下有利。"
                },
                {
                  "type": "math",
                  "tex": "T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{-92.2\\ \\text{kJ/mol}}{-0.1987\\ \\text{kJ/(mol}\\cdot\\text{K)}} \\approx 464\\ \\text{K}"
                },
                {
                  "type": "p",
                  "en": "Above about $464\\ \\text{K}$, the $-T\\Delta S$ term overwhelms the favorable enthalpy and $\\Delta G > 0$. (Industry still runs hot—for kinetics—and compensates with pressure and a catalyst.)",
                  "zh": "高于约 $464\\ \\text{K}$ 时，$-T\\Delta S$ 项压倒有利的焓变，$\\Delta G > 0$。（工业上为了动力学仍在高温下操作，并用高压和催化剂弥补。）"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which process has $\\Delta S > 0$?",
                "zh": "下列哪个过程 $\\Delta S > 0$？"
              },
              "choices": [
                "$\\text{H}_2\\text{O}(g) \\rightarrow \\text{H}_2\\text{O}(l)$",
                "$2\\text{NO}_2(g) \\rightarrow \\text{N}_2\\text{O}_4(g)$",
                "$\\text{CO}_2(s) \\rightarrow \\text{CO}_2(g)$",
                "$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Sublimation converts an ordered solid into a gas whose particles access vastly more positions and energy states, so entropy rises sharply. The $\\text{NO}_2$ dimerization is tempting because it looks like a simple gas reaction, but 2 mol of gas becoming 1 mol means $\\Delta S < 0$.",
                "zh": "升华把有序的固体变为气体，粒子可及的位置和能量状态大增，熵显著升高。$\\text{NO}_2$ 二聚看似普通气相反应而具迷惑性，但 2 mol 气体变 1 mol，$\\Delta S < 0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{SO}_3(g)$, with $S^\\circ$ = 248.2 ($\\text{SO}_2$), 205.0 ($\\text{O}_2$), 256.8 ($\\text{SO}_3$) $\\text{J/(mol}\\cdot\\text{K)}$, find $\\Delta S^\\circ$ in $\\text{J/(mol}\\cdot\\text{K)}$ to the nearest tenth.",
                "zh": "对 $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{SO}_3(g)$，已知 $S^\\circ$：$\\text{SO}_2$ = 248.2，$\\text{O}_2$ = 205.0，$\\text{SO}_3$ = 256.8 $\\text{J/(mol}\\cdot\\text{K)}$，求 $\\Delta S^\\circ$（单位 $\\text{J/(mol}\\cdot\\text{K)}$，保留一位小数）。"
              },
              "answer": "-187.8",
              "accept": [
                "-187.80",
                "-188"
              ],
              "explanation": {
                "en": "$\\Delta S^\\circ = 2(256.8) - [2(248.2) + 205.0] = 513.6 - 701.4 = -187.8\\ \\text{J/(mol}\\cdot\\text{K)}$. Negative, as expected when 3 mol of gas becomes 2 mol.",
                "zh": "$\\Delta S^\\circ = 2(256.8) - [2(248.2) + 205.0] = 513.6 - 701.4 = -187.8\\ \\text{J/(mol}\\cdot\\text{K)}$。3 mol 气体变 2 mol，熵变为负，符合预期。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A reaction has $\\Delta H < 0$ and $\\Delta S > 0$. It is thermodynamically favorable:",
                "zh": "某反应 $\\Delta H < 0$ 且 $\\Delta S > 0$。它在热力学上有利的温度范围是："
              },
              "choices": [
                "at all temperatures",
                "only at high temperatures",
                "only at low temperatures",
                "at no temperature"
              ],
              "answer": 0,
              "explanation": {
                "en": "In $\\Delta G = \\Delta H - T\\Delta S$, a negative $\\Delta H$ and a negative $-T\\Delta S$ term make $\\Delta G$ negative at every $T$. Students sometimes pick \"high temperatures\" thinking entropy needs heat to matter, but here both terms already favor the reaction.",
                "zh": "在 $\\Delta G = \\Delta H - T\\Delta S$ 中，$\\Delta H$ 为负且 $-T\\Delta S$ 项也为负，故任何温度下 $\\Delta G$ 都为负。有人误选「高温」，以为熵需要高温才起作用，但此处两项本来就都有利。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Ice melts at $298\\ \\text{K}$ even though melting is endothermic. Which statement explains this?",
                "zh": "熔化是吸热过程，但冰在 $298\\ \\text{K}$ 仍会熔化。哪种说法解释了这一点？"
              },
              "choices": [
                "$\\Delta H$ is actually negative above $273\\ \\text{K}$",
                "the $T\\Delta S$ term exceeds $\\Delta H$, making $\\Delta G < 0$",
                "melting is kinetically controlled, not thermodynamically controlled",
                "the entropy of the system decreases"
              ],
              "answer": 1,
              "explanation": {
                "en": "Melting has $\\Delta H > 0$ and $\\Delta S > 0$; above the crossover at $273\\ \\text{K}$, $T\\Delta S > \\Delta H$, so $\\Delta G = \\Delta H - T\\Delta S < 0$. Choice (a) is tempting but $\\Delta H$ for melting stays positive—it is the entropy term that wins, not a sign change in enthalpy.",
                "zh": "熔化 $\\Delta H > 0$ 且 $\\Delta S > 0$；高于 $273\\ \\text{K}$ 的转折温度后 $T\\Delta S > \\Delta H$，故 $\\Delta G = \\Delta H - T\\Delta S < 0$。选项 (a) 有迷惑性，但熔化的 $\\Delta H$ 始终为正——是熵项获胜，而非焓变变号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A reaction has $\\Delta H^\\circ = +100.\\ \\text{kJ/mol}$ and $\\Delta S^\\circ = +200.\\ \\text{J/(mol}\\cdot\\text{K)}$. At what temperature (in K) does it become thermodynamically favorable? Give an integer.",
                "zh": "某反应 $\\Delta H^\\circ = +100.\\ \\text{kJ/mol}$，$\\Delta S^\\circ = +200.\\ \\text{J/(mol}\\cdot\\text{K)}$。高于多少 K 时反应在热力学上变得有利？请填一个整数。"
              },
              "answer": "500",
              "accept": [
                "500.",
                "500 K"
              ],
              "explanation": {
                "en": "Set $\\Delta G = 0$: $T = \\Delta H/\\Delta S = 100{,}000\\ \\text{J/mol} \\div 200\\ \\text{J/(mol}\\cdot\\text{K)} = 500\\ \\text{K}$. Watch the units—both must be in J (or both in kJ) before dividing.",
                "zh": "令 $\\Delta G = 0$：$T = \\Delta H/\\Delta S = 100{,}000\\ \\text{J/mol} \\div 200\\ \\text{J/(mol}\\cdot\\text{K)} = 500\\ \\text{K}$。注意单位——相除前必须同为 J（或同为 kJ）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For a reaction with $\\Delta H^\\circ = -92.0\\ \\text{kJ/mol}$ and $\\Delta S^\\circ = -199\\ \\text{J/(mol}\\cdot\\text{K)}$, find $\\Delta G^\\circ$ at $298\\ \\text{K}$ in kJ/mol, to the nearest tenth.",
                "zh": "某反应 $\\Delta H^\\circ = -92.0\\ \\text{kJ/mol}$，$\\Delta S^\\circ = -199\\ \\text{J/(mol}\\cdot\\text{K)}$，求 $298\\ \\text{K}$ 时的 $\\Delta G^\\circ$（单位 kJ/mol，保留一位小数）。"
              },
              "answer": "-32.7",
              "accept": [
                "-32.70",
                "-32.6"
              ],
              "explanation": {
                "en": "Convert: $\\Delta S^\\circ = -0.199\\ \\text{kJ/(mol}\\cdot\\text{K)}$. Then $\\Delta G^\\circ = -92.0 - (298)(-0.199) = -92.0 + 59.3 = -32.7\\ \\text{kJ/mol}$.",
                "zh": "换算：$\\Delta S^\\circ = -0.199\\ \\text{kJ/(mol}\\cdot\\text{K)}$。则 $\\Delta G^\\circ = -92.0 - (298)(-0.199) = -92.0 + 59.3 = -32.7\\ \\text{kJ/mol}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A reaction has $\\Delta G^\\circ = -20\\ \\text{kJ/mol}$ at $298\\ \\text{K}$. Which must be true?",
                "zh": "某反应在 $298\\ \\text{K}$ 时 $\\Delta G^\\circ = -20\\ \\text{kJ/mol}$。下列哪项必然成立？"
              },
              "choices": [
                "the reaction is fast",
                "$K < 1$",
                "$\\Delta H^\\circ$ must be negative",
                "$K > 1$"
              ],
              "answer": 3,
              "explanation": {
                "en": "From $\\Delta G^\\circ = -RT\\ln K$, a negative $\\Delta G^\\circ$ requires $\\ln K > 0$, i.e. $K > 1$. \"The reaction is fast\" is the classic trap—thermodynamic favorability says nothing about rate, and $\\Delta H^\\circ$ could even be positive if $\\Delta S^\\circ$ is sufficiently positive.",
                "zh": "由 $\\Delta G^\\circ = -RT\\ln K$，$\\Delta G^\\circ$ 为负要求 $\\ln K > 0$，即 $K > 1$。「反应很快」是经典陷阱——热力学有利与速率无关；若 $\\Delta S^\\circ$ 足够正，$\\Delta H^\\circ$ 甚至可以为正。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The conversion of diamond to graphite has $\\Delta G^\\circ < 0$, yet diamonds show no observable change over centuries. The best explanation is that the reaction:",
                "zh": "金刚石转化为石墨的 $\\Delta G^\\circ < 0$，但几百年内金刚石看不出任何变化。最佳解释是该反应："
              },
              "choices": [
                "has a very large $K$",
                "has a very high activation energy, so the rate is negligible",
                "is not thermodynamically favorable at room temperature",
                "violates the second law of thermodynamics"
              ],
              "answer": 1,
              "explanation": {
                "en": "This is thermodynamic vs kinetic control: $\\Delta G^\\circ < 0$ guarantees the products are favored eventually, but rearranging the covalent network requires breaking many C–C bonds, an enormous activation barrier. Choice (a) is true but does not explain the slowness—it restates the thermodynamics.",
                "zh": "这是热力学控制与动力学控制之别：$\\Delta G^\\circ < 0$ 只保证最终偏向产物，但重排共价网络需断裂大量 C–C 键，活化能垒极高。选项 (a) 本身正确却解释不了「慢」——它只是复述热力学结论。"
              }
            }
          ]
        },
        {
          "id": "electrochemistry",
          "title": "Electrochemistry",
          "titleZh": "电化学",
          "content": [
            {
              "type": "h2",
              "en": "Redox Reactions and the Half-Reaction Method",
              "zh": "氧化还原反应与半反应法"
            },
            {
              "type": "p",
              "en": "Electrochemistry is the study of reactions that transfer electrons. Oxidation is loss of electrons (oxidation number rises); reduction is gain of electrons (oxidation number falls). Every redox reaction can be split into two half-reactions, and balancing them separately—the half-reaction method—guarantees both mass and charge balance.",
              "zh": "电化学研究电子转移的反应。氧化是失电子（氧化数升高）；还原是得电子（氧化数降低）。每个氧化还原反应都可拆成两个半反应，分别配平——即半反应法——可同时保证质量守恒与电荷守恒。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Write the two half-reactions and balance all atoms except O and H.",
                  "zh": "写出两个半反应，先配平除 O、H 外的所有原子。"
                },
                {
                  "en": "Balance O with $\\text{H}_2\\text{O}$, then H with $\\text{H}^+$ (in acidic solution).",
                  "zh": "用 $\\text{H}_2\\text{O}$ 配平 O，再用 $\\text{H}^+$ 配平 H（酸性条件）。"
                },
                {
                  "en": "Balance charge with electrons: $e^-$ on the right for oxidation, on the left for reduction.",
                  "zh": "用电子配平电荷：氧化半反应电子在右边，还原半反应电子在左边。"
                },
                {
                  "en": "Multiply so electrons lost = electrons gained, then add and cancel. No free electrons may remain in the final equation.",
                  "zh": "乘以系数使失电子数 = 得电子数，然后相加并消去。最终方程中不得残留自由电子。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Balancing in Acidic Solution",
                "zh": "例题 1：酸性条件下的配平"
              },
              "problem": {
                "en": "Balance $\\text{MnO}_4^-(aq) + \\text{Fe}^{2+}(aq) \\rightarrow \\text{Mn}^{2+}(aq) + \\text{Fe}^{3+}(aq)$ in acidic solution.",
                "zh": "在酸性条件下配平 $\\text{MnO}_4^-(aq) + \\text{Fe}^{2+}(aq) \\rightarrow \\text{Mn}^{2+}(aq) + \\text{Fe}^{3+}(aq)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Reduction: Mn goes from +7 to +2, gaining 5 electrons. Balance O with 4 waters and H with 8 protons.",
                  "zh": "还原：Mn 从 +7 降到 +2，得 5 个电子。用 4 个水配平 O，用 8 个 $\\text{H}^+$ 配平 H。"
                },
                {
                  "type": "math",
                  "tex": "\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}"
                },
                {
                  "type": "math",
                  "tex": "\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + e^- \\quad (\\times 5)"
                },
                {
                  "type": "p",
                  "en": "Multiply the oxidation by 5 so 5 electrons cancel, then add.",
                  "zh": "氧化半反应乘以 5，使 5 个电子对消，然后相加。"
                },
                {
                  "type": "math",
                  "tex": "\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}"
                },
                {
                  "type": "p",
                  "en": "Check: charge is $-1 + 10 + 8 = +17$ on the left and $+2 + 15 = +17$ on the right.",
                  "zh": "检验：左边电荷 $-1 + 10 + 8 = +17$，右边 $+2 + 15 = +17$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Galvanic Cells and Standard Cell Potential",
              "zh": "原电池与标准电池电势"
            },
            {
              "type": "p",
              "en": "A galvanic (voltaic) cell harnesses a thermodynamically favorable redox reaction by separating the half-reactions into two half-cells. Oxidation occurs at the anode; reduction occurs at the cathode (\"an ox, red cat\"). Electrons flow through the external wire from anode to cathode, while the salt bridge lets ions migrate to keep each half-cell electrically neutral—anions toward the anode, cations toward the cathode. Without the salt bridge, charge would build up and the cell would stop.",
              "zh": "原电池把热力学有利的氧化还原反应拆到两个半电池中加以利用。阳极发生氧化，阴极发生还原。电子经外电路导线从阳极流向阴极，盐桥则让离子迁移以保持每个半电池电中性——阴离子流向阳极，阳离子流向阴极。没有盐桥，电荷会积累，电池随即停止工作。"
            },
            {
              "type": "math",
              "tex": "E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}"
            },
            {
              "type": "p",
              "en": "Both $E^\\circ$ values are taken from the table of standard reduction potentials. In a galvanic cell the half-reaction with the more positive reduction potential runs as the reduction (cathode), giving $E^\\circ_{\\text{cell}} > 0$. Cell potential connects directly to free energy, where $n$ is the moles of electrons transferred and $F = 96{,}485\\ \\text{C/mol}\\ e^-$ is Faraday’s constant.",
              "zh": "两个 $E^\\circ$ 均取自标准还原电势表。原电池中还原电势更正的半反应作还原（阴极），使 $E^\\circ_{\\text{cell}} > 0$。电池电势与自由能直接相连，其中 $n$ 为转移电子的摩尔数，$F = 96{,}485\\ \\text{C/mol}\\ e^-$ 为法拉第常数。"
            },
            {
              "type": "math",
              "tex": "\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}"
            },
            {
              "type": "note",
              "en": "AP tip: When you reverse a half-reaction, flip the sign of its $E^\\circ$—but when you multiply a half-reaction by a coefficient, do NOT multiply $E^\\circ$. Potential is an intensive property (energy per charge), independent of amount. Multiplying $E^\\circ$ by stoichiometric coefficients is a heavily penalized error.",
              "zh": "AP 提示：反转半反应时 $E^\\circ$ 要变号——但把半反应乘以系数时，$E^\\circ$ 不能乘。电势是强度性质（单位电荷的能量），与物质的量无关。把 $E^\\circ$ 乘上化学计量系数是被重扣分的错误。"
            },
            {
              "type": "h3",
              "en": "Electrolytic Cells and Electrolysis Stoichiometry",
              "zh": "电解池与电解化学计量"
            },
            {
              "type": "p",
              "en": "An electrolytic cell is the reverse idea: an external power source forces a thermodynamically unfavorable reaction ($\\Delta G > 0$, $E_{\\text{cell}} < 0$) to occur, as in electroplating and the industrial production of aluminum. Oxidation still happens at the anode and reduction at the cathode—only now the applied voltage, not the reaction, drives the electrons. The amount of product is set by the charge delivered.",
              "zh": "电解池是反向思路：外接电源迫使热力学不利的反应（$\\Delta G > 0$，$E_{\\text{cell}} < 0$）发生，如电镀和工业炼铝。氧化仍在阳极、还原仍在阴极——只是驱动电子的是外加电压而非反应本身。产物的量由通过的电量决定。"
            },
            {
              "type": "math",
              "tex": "q = I \\times t \\qquad n_{e^-} = \\frac{I \\times t}{F}"
            },
            {
              "type": "p",
              "en": "Current $I$ in amperes is coulombs per second, so current times time gives total charge, and dividing by $F$ converts charge to moles of electrons. From there, the half-reaction stoichiometry (e.g. $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$) converts moles of electrons to moles of product.",
              "zh": "电流 $I$（安培）即每秒库仑数，故电流乘时间得总电量，再除以 $F$ 便把电量换算成电子的摩尔数。随后用半反应的化学计量关系（如 $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$）把电子摩尔数换算成产物摩尔数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Electroplating Copper",
                "zh": "例题 2：电镀铜"
              },
              "problem": {
                "en": "A current of $2.00\\ \\text{A}$ passes through a $\\text{Cu}^{2+}$ solution for $965$ seconds. What mass of copper ($M = 63.55\\ \\text{g/mol}$) deposits on the cathode?",
                "zh": "$2.00\\ \\text{A}$ 的电流通过 $\\text{Cu}^{2+}$ 溶液 $965$ 秒。阴极上沉积多少克铜（$M = 63.55\\ \\text{g/mol}$）？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "q = I \\times t = (2.00\\ \\text{A})(965\\ \\text{s}) = 1930\\ \\text{C}"
                },
                {
                  "type": "math",
                  "tex": "n_{e^-} = \\frac{1930\\ \\text{C}}{96{,}485\\ \\text{C/mol}} = 0.0200\\ \\text{mol}\\ e^-"
                },
                {
                  "type": "p",
                  "en": "The reduction $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ requires 2 mol of electrons per mole of copper.",
                  "zh": "还原反应 $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ 每摩尔铜需要 2 摩尔电子。"
                },
                {
                  "type": "math",
                  "tex": "0.0200\\ \\text{mol}\\ e^- \\times \\frac{1\\ \\text{mol Cu}}{2\\ \\text{mol}\\ e^-} \\times 63.55\\ \\text{g/mol} = 0.636\\ \\text{g Cu}"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Concentration and Cell Potential",
              "zh": "浓度与电池电势"
            },
            {
              "type": "p",
              "en": "Standard potentials assume all solutions are $1\\ M$. Away from standard conditions, reason qualitatively with $Q$, just as with Le Châtelier: if $Q < 1$ (reactant ions concentrated, product ions dilute), the forward drive is stronger and $E > E^\\circ$; if $Q > 1$, then $E < E^\\circ$. As any galvanic cell operates, reactants are consumed and products accumulate, so $Q$ rises and $E$ steadily falls—reaching $E = 0$ at equilibrium, when the battery is dead and $Q = K$.",
              "zh": "标准电势假定所有溶液均为 $1\\ M$。偏离标准状态时，用 $Q$ 作定性推理，与勒夏特列原理一致：若 $Q < 1$（反应物离子浓、产物离子稀），正向驱动更强，$E > E^\\circ$；若 $Q > 1$，则 $E < E^\\circ$。任何原电池工作时，反应物被消耗、产物不断积累，$Q$ 升高，$E$ 持续下降——到平衡时 $E = 0$，电池耗尽，此时 $Q = K$。"
            },
            {
              "type": "note",
              "en": "AP tip: The AP exam tests Nernst reasoning qualitatively. Be ready to justify statements like \"diluting the $\\text{Cu}^{2+}$ solution decreases the cell voltage\" by comparing $Q$ to its standard value of 1—no Nernst equation calculation required.",
              "zh": "AP 提示：AP 考试对能斯特推理只做定性考查。要能通过把 $Q$ 与标准值 1 比较来论证诸如「稀释 $\\text{Cu}^{2+}$ 溶液会降低电池电压」的说法——不需要计算能斯特方程。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In a galvanic cell, which statement is correct?",
                "zh": "关于原电池，下列哪项正确？"
              },
              "choices": [
                "electrons flow from cathode to anode through the wire",
                "oxidation occurs at the anode, and electrons flow from anode to cathode through the wire",
                "reduction occurs at the anode",
                "electrons flow through the salt bridge"
              ],
              "answer": 1,
              "explanation": {
                "en": "Oxidation at the anode releases electrons, which travel through the external wire to the cathode where reduction occurs. The last choice is the classic trap: only ions move through the salt bridge—electrons never do.",
                "zh": "阳极氧化释放电子，电子经外电路导线到达阴极发生还原。最后一个选项是经典陷阱：盐桥中只有离子迁移——电子从不通过盐桥。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$, $E^\\circ = +0.34\\ \\text{V}$ and $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$, $E^\\circ = -0.76\\ \\text{V}$, find $E^\\circ_{\\text{cell}}$ in volts for the galvanic cell (2 decimal places).",
                "zh": "已知 $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$，$E^\\circ = +0.34\\ \\text{V}$；$\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$，$E^\\circ = -0.76\\ \\text{V}$。求该原电池的 $E^\\circ_{\\text{cell}}$（单位 V，保留两位小数）。"
              },
              "answer": "1.10",
              "accept": [
                "1.1",
                "+1.10"
              ],
              "explanation": {
                "en": "Copper has the more positive reduction potential, so it is the cathode and zinc is the anode: $E^\\circ_{\\text{cell}} = 0.34 - (-0.76) = 1.10\\ \\text{V}$. Subtracting in the wrong order gives $-1.10\\ \\text{V}$, impossible for a working galvanic cell.",
                "zh": "铜的还原电势更正，故为阴极，锌为阳极：$E^\\circ_{\\text{cell}} = 0.34 - (-0.76) = 1.10\\ \\text{V}$。相减顺序颠倒会得 $-1.10\\ \\text{V}$，这对正常工作的原电池是不可能的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many electrons appear in the balanced half-reaction $\\text{MnO}_4^- + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$? Give an integer.",
                "zh": "配平后的半反应 $\\text{MnO}_4^- + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ 中需要多少个电子？请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "five",
                "5.0"
              ],
              "explanation": {
                "en": "Left charge: $-1 + 8 = +7$; right charge: $+2$. Adding $5e^-$ to the left makes both sides $+2$. Equivalently, Mn drops from oxidation state +7 to +2, a gain of 5 electrons.",
                "zh": "左边电荷 $-1 + 8 = +7$，右边 $+2$。左边加 $5e^-$ 后两边均为 $+2$。等价地，Mn 的氧化数从 +7 降到 +2，得 5 个电子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The purpose of the salt bridge in a galvanic cell is to:",
                "zh": "原电池中盐桥的作用是："
              },
              "choices": [
                "carry electrons between the half-cells",
                "increase the cell voltage",
                "allow ion migration that keeps each half-cell electrically neutral",
                "supply extra reactant ions"
              ],
              "answer": 2,
              "explanation": {
                "en": "As the cell runs, positive charge builds in the anode compartment and negative charge at the cathode; salt-bridge ions migrate (anions to anode, cations to cathode) to neutralize this and keep current flowing. \"Carry electrons\" is tempting but electrons travel only through the external wire.",
                "zh": "电池工作时，阳极区积累正电荷，阴极区积累负电荷；盐桥中的离子迁移（阴离子向阳极，阳离子向阴极）以中和电荷、维持电流。「传导电子」有迷惑性，但电子只经外电路导线传递。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A galvanic cell has $E^\\circ_{\\text{cell}} = +1.10\\ \\text{V}$. According to $\\Delta G^\\circ = -nFE^\\circ$, the reaction:",
                "zh": "某原电池 $E^\\circ_{\\text{cell}} = +1.10\\ \\text{V}$。根据 $\\Delta G^\\circ = -nFE^\\circ$，该反应："
              },
              "choices": [
                "has $\\Delta G^\\circ < 0$ and is thermodynamically favorable, with $K > 1$",
                "has $\\Delta G^\\circ > 0$ because $E^\\circ$ is positive",
                "has $\\Delta G^\\circ = 0$",
                "must be slow"
              ],
              "answer": 0,
              "explanation": {
                "en": "A positive $E^\\circ$ with the negative sign in $\\Delta G^\\circ = -nFE^\\circ$ gives $\\Delta G^\\circ < 0$: favorable, so $K > 1$. Choice (b) reverses the sign convention, a very common slip; and nothing about $E^\\circ$ determines the rate.",
                "zh": "$E^\\circ$ 为正，代入 $\\Delta G^\\circ = -nFE^\\circ$ 中的负号得 $\\Delta G^\\circ < 0$：热力学有利，故 $K > 1$。选项 (b) 弄反了符号约定，是常见失误；且 $E^\\circ$ 与速率无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A current of $5.00\\ \\text{A}$ runs for $19{,}300\\ \\text{s}$. How many moles of electrons are delivered? ($F = 96{,}500\\ \\text{C/mol}$; 3 sig figs)",
                "zh": "$5.00\\ \\text{A}$ 的电流通电 $19{,}300\\ \\text{s}$，共传递多少摩尔电子？（$F = 96{,}500\\ \\text{C/mol}$；保留 3 位有效数字）"
              },
              "answer": "1.00",
              "accept": [
                "1",
                "1.0"
              ],
              "explanation": {
                "en": "$q = It = (5.00)(19{,}300) = 96{,}500\\ \\text{C}$, and $96{,}500\\ \\text{C} \\div 96{,}500\\ \\text{C/mol} = 1.00\\ \\text{mol}\\ e^-$.",
                "zh": "$q = It = (5.00)(19{,}300) = 96{,}500\\ \\text{C}$，$96{,}500\\ \\text{C} \\div 96{,}500\\ \\text{C/mol} = 1.00\\ \\text{mol}\\ e^-$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about an electrolytic cell is correct?",
                "zh": "关于电解池，下列哪项正确？"
              },
              "choices": [
                "it converts a favorable reaction into electrical energy",
                "reduction occurs at the anode",
                "it needs no external power source",
                "an external power source drives a thermodynamically unfavorable reaction"
              ],
              "answer": 3,
              "explanation": {
                "en": "Electrolysis forces a reaction with $\\Delta G > 0$ (e.g. splitting water, refining aluminum) using applied voltage. Choice (a) describes a galvanic cell—the tempting reversal. In BOTH cell types, oxidation is at the anode and reduction at the cathode.",
                "zh": "电解利用外加电压强迫 $\\Delta G > 0$ 的反应发生（如电解水、炼铝）。选项 (a) 描述的是原电池——正好说反了。两种电池中都是阳极氧化、阴极还原。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the cell $\\text{Zn}(s)\\,|\\,\\text{Zn}^{2+}\\,\\|\\,\\text{Cu}^{2+}\\,|\\,\\text{Cu}(s)$, the $\\text{Cu}^{2+}$ solution is diluted from $1.0\\ M$ to $0.10\\ M$. The cell potential will:",
                "zh": "在电池 $\\text{Zn}(s)\\,|\\,\\text{Zn}^{2+}\\,\\|\\,\\text{Cu}^{2+}\\,|\\,\\text{Cu}(s)$ 中，将 $\\text{Cu}^{2+}$ 溶液从 $1.0\\ M$ 稀释到 $0.10\\ M$。电池电势将："
              },
              "choices": [
                "increase, because $Q$ increases",
                "stay at $E^\\circ$ because potentials are intensive",
                "decrease, because $Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}]$ increases above 1",
                "drop immediately to zero"
              ],
              "answer": 2,
              "explanation": {
                "en": "Diluting a reactant ion raises $Q$ above its standard value of 1, weakening the forward drive, so $E < E^\\circ$. Choice (b) is tempting—$E^\\circ$ is intensive—but that only means $E^\\circ$ ignores amount (coefficients), not concentration; the actual $E$ does depend on $Q$.",
                "zh": "稀释反应物离子使 $Q$ 高于标准值 1，正向驱动减弱，故 $E < E^\\circ$。选项 (b) 有迷惑性——$E^\\circ$ 确是强度性质——但那只意味着 $E^\\circ$ 与物质的量（系数）无关，并非与浓度无关；实际的 $E$ 确实取决于 $Q$。"
              }
            }
          ]
        }
      ]
    }
  ]
}
