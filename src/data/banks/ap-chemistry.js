export default {
  "unit-1-atomic-structure/moles-molar-mass": [
    {
      "type": "mc",
      "question": {
        "en": "How many representative particles are in exactly one mole of any substance?",
        "zh": "任何物质恰好一摩尔中含有多少个基本微粒？"
      },
      "choices": [
        "$6.022 \\times 10^{23}$",
        "$1.204 \\times 10^{24}$",
        "$3.011 \\times 10^{23}$",
        "$6.022 \\times 10^{22}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "One mole always contains Avogadro's number, $6.022 \\times 10^{23}$, of particles. A value like $3.011 \\times 10^{23}$ is half a mole, and getting the exponent wrong (writing $10^{22}$) reflects a place-value slip, not the defined constant.",
        "zh": "一摩尔总是包含阿伏伽德罗常数 $6.022 \\times 10^{23}$ 个微粒。像 $3.011 \\times 10^{23}$ 这样的值是半摩尔；把指数写成 $10^{22}$ 则是数位错误，而非这个定义常数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the molar mass of water, $H_2O$? (H = 1.008, O = 16.00)",
        "zh": "水 $H_2O$ 的摩尔质量是多少？（H = 1.008，O = 16.00）"
      },
      "choices": [
        "16.00 g/mol",
        "18.02 g/mol",
        "20.02 g/mol",
        "17.01 g/mol"
      ],
      "answer": 1,
      "explanation": {
        "en": "Add $2(1.008) + 16.00 = 18.02$ g/mol. Using only the oxygen mass (16.00) forgets the two hydrogens, and counting hydrogen only once (17.01) ignores the subscript 2.",
        "zh": "相加 $2(1.008) + 16.00 = 18.02$ g/mol。只用氧的质量（16.00）忽略了两个氢；只算一个氢（17.01）则忽略了下标 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many moles are in 36 g of water, $H_2O$? (molar mass = 18.02 g/mol)",
        "zh": "36 g 水 $H_2O$ 中有多少摩尔？（摩尔质量 = 18.02 g/mol）"
      },
      "choices": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "36 mol"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide mass by molar mass: $36 / 18.02 \\approx 2$ mol. Multiplying instead of dividing (or leaving the mass as-is at 36) mixes up which quantity goes on top.",
        "zh": "用质量除以摩尔质量：$36 / 18.02 \\approx 2$ mol。若相乘而非相除（或直接把质量当作 36 mol）就是搞错了哪个量在分子上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the molar mass of carbon dioxide, $CO_2$? (C = 12.01, O = 16.00)",
        "zh": "二氧化碳 $CO_2$ 的摩尔质量是多少？（C = 12.01，O = 16.00）"
      },
      "choices": [
        "44.01 g/mol",
        "28.01 g/mol",
        "12.01 g/mol",
        "60.01 g/mol"
      ],
      "answer": 0,
      "explanation": {
        "en": "Sum $12.01 + 2(16.00) = 44.01$ g/mol. Counting oxygen only once gives 28.01, and adding a third oxygen by mistake gives 60.01.",
        "zh": "求和 $12.01 + 2(16.00) = 44.01$ g/mol。只算一个氧得 28.01；误加第三个氧则得 60.01。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many atoms are in 2 mol of helium gas (He)?",
        "zh": "2 mol 氦气（He）中有多少个原子？"
      },
      "choices": [
        "$1.204 \\times 10^{24}$",
        "$3.011 \\times 10^{23}$",
        "$6.022 \\times 10^{23}$",
        "$2.408 \\times 10^{24}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Helium is monatomic, so atoms $= 2 \\times 6.022 \\times 10^{23} = 1.204 \\times 10^{24}$. Reporting one mole's worth ($6.022 \\times 10^{23}$) forgets to multiply by the 2 mol given.",
        "zh": "氦是单原子的，所以原子数 $= 2 \\times 6.022 \\times 10^{23} = 1.204 \\times 10^{24}$。若报出一摩尔的数量（$6.022 \\times 10^{23}$）就是忘了乘以题给的 2 mol。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What mass of sodium chloride (NaCl, 58.44 g/mol) is present in 0.500 mol?",
        "zh": "0.500 mol 氯化钠（NaCl，58.44 g/mol）的质量是多少？"
      },
      "choices": [
        "58.44 g",
        "29.22 g",
        "0.500 g",
        "116.88 g"
      ],
      "answer": 1,
      "explanation": {
        "en": "Mass $= 0.500 \\times 58.44 = 29.22$ g. Reporting the full molar mass (58.44) forgets the amount is only half a mole, and doubling instead of halving gives 116.88.",
        "zh": "质量 $= 0.500 \\times 58.44 = 29.22$ g。报出整个摩尔质量（58.44）忽略了只有半摩尔；若加倍而非取半则得 116.88。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the molar mass of glucose, $C_6H_{12}O_6$? (C = 12.01, H = 1.008, O = 16.00)",
        "zh": "葡萄糖 $C_6H_{12}O_6$ 的摩尔质量是多少？（C = 12.01，H = 1.008，O = 16.00）"
      },
      "choices": [
        "96.00 g/mol",
        "72.06 g/mol",
        "180.16 g/mol",
        "150.00 g/mol"
      ],
      "answer": 2,
      "explanation": {
        "en": "Add $6(12.01) + 12(1.008) + 6(16.00) = 72.06 + 12.10 + 96.00 = 180.16$ g/mol. Using only the carbon contribution (72.06) or only the oxygen contribution (96.00) leaves out the rest of the formula.",
        "zh": "相加 $6(12.01) + 12(1.008) + 6(16.00) = 72.06 + 12.10 + 96.00 = 180.16$ g/mol。只用碳的贡献（72.06）或只用氧的贡献（96.00）都漏掉了式中其余部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many moles of carbon atoms are in 1 mol of glucose, $C_6H_{12}O_6$?",
        "zh": "1 mol 葡萄糖 $C_6H_{12}O_6$ 中含有多少摩尔碳原子？"
      },
      "choices": [
        "180 mol",
        "12 mol",
        "1 mol",
        "6 mol"
      ],
      "answer": 3,
      "explanation": {
        "en": "The subscript 6 on carbon means 6 mol of C atoms per mole of glucose. Using the hydrogen subscript (12) reads the wrong element, and 1 mol ignores the subscript entirely.",
        "zh": "碳的下标 6 表示每摩尔葡萄糖含 6 mol 碳原子。用氢的下标（12）看错了元素；答 1 mol 则完全忽略了下标。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which sample contains the greatest number of atoms?",
        "zh": "下列哪个样品含有的原子数最多？"
      },
      "choices": [
        "1 mol $C_6H_{12}O_6$ (24 atoms per formula)",
        "1 mol $O_2$ (2 atoms per formula)",
        "1 mol Ne (1 atom per formula)",
        "1 mol $H_2O$ (3 atoms per formula)"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each sample is 1 mol of molecules, so the one with the most atoms per formula unit wins: glucose has 24 atoms per molecule. Comparing by mole of molecules alone (treating them as equal) ignores how many atoms each formula holds.",
        "zh": "每个样品都是 1 mol 分子，因此每个式单位含原子最多的样品原子数最多：葡萄糖每分子有 24 个原子。若只按分子摩尔数比较（把它们当作相等）就忽略了每个化学式含多少原子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the molar mass of calcium carbonate, $CaCO_3$? (Ca = 40.08, C = 12.01, O = 16.00)",
        "zh": "碳酸钙 $CaCO_3$ 的摩尔质量是多少？（Ca = 40.08，C = 12.01，O = 16.00）"
      },
      "choices": [
        "60.01 g/mol",
        "100.09 g/mol",
        "84.01 g/mol",
        "116.09 g/mol"
      ],
      "answer": 1,
      "explanation": {
        "en": "Add $40.08 + 12.01 + 3(16.00) = 100.09$ g/mol. Counting only two oxygens gives 84.01, and adding a fourth oxygen gives 116.09.",
        "zh": "相加 $40.08 + 12.01 + 3(16.00) = 100.09$ g/mol。只算两个氧得 84.01；多加一个氧则得 116.09。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the mass of $3.011 \\times 10^{23}$ molecules of oxygen gas, $O_2$? (molar mass = 32.00 g/mol)",
        "zh": "$3.011 \\times 10^{23}$ 个氧气分子 $O_2$ 的质量是多少？（摩尔质量 = 32.00 g/mol）"
      },
      "choices": [
        "32 g",
        "8 g",
        "16 g",
        "0.5 g"
      ],
      "answer": 2,
      "explanation": {
        "en": "That count is $3.011 \\times 10^{23} / 6.022 \\times 10^{23} = 0.500$ mol, so mass $= 0.500 \\times 32.00 = 16$ g. Using the count as if it were a full mole gives 32 g.",
        "zh": "该数目为 $3.011 \\times 10^{23} / 6.022 \\times 10^{23} = 0.500$ mol，所以质量 $= 0.500 \\times 32.00 = 16$ g。若把该数目当作整整一摩尔就会得到 32 g。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement best defines the molar mass of a substance?",
        "zh": "下列哪项最准确地定义了物质的摩尔质量？"
      },
      "choices": [
        "the volume occupied by one mole of a gas",
        "the number of atoms contained in one gram",
        "the mass of a single molecule in grams",
        "the mass in grams of one mole of the substance"
      ],
      "answer": 3,
      "explanation": {
        "en": "Molar mass is the mass in grams of one mole ($6.022 \\times 10^{23}$ units), numerically equal to the formula mass in amu. Confusing it with the mass of a single molecule ignores that a mole is Avogadro's number of them.",
        "zh": "摩尔质量是一摩尔（$6.022 \\times 10^{23}$ 个单位）物质的质量，以克计，数值上等于以 amu 计的式量。把它与单个分子的质量混淆，是忽略了一摩尔为阿伏伽德罗常数个微粒。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many moles are in 88.0 g of carbon dioxide, $CO_2$? (molar mass = 44.01 g/mol) Give your answer in mol.",
        "zh": "88.0 g 二氧化碳 $CO_2$ 中有多少摩尔？（摩尔质量 = 44.01 g/mol）请以 mol 为单位作答。"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.00",
        "1.9995",
        "2.0 mol",
        "2 mol"
      ],
      "explanation": {
        "en": "Divide mass by molar mass: $88.0 / 44.01 \\approx 2.0$ mol. Multiplying the two quantities instead would give an unreasonably large number.",
        "zh": "用质量除以摩尔质量：$88.0 / 44.01 \\approx 2.0$ mol。若把两个量相乘会得到一个不合理的大数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the molar mass of sulfuric acid, $H_2SO_4$? (H = 1.008, S = 32.06, O = 16.00) Give g/mol to two decimals.",
        "zh": "硫酸 $H_2SO_4$ 的摩尔质量是多少？（H = 1.008，S = 32.06，O = 16.00）请以 g/mol 保留两位小数作答。"
      },
      "answer": "98.08",
      "accept": [
        "98.076",
        "98.09",
        "98.1",
        "98",
        "98.08 g/mol",
        "98.1 g/mol"
      ],
      "explanation": {
        "en": "Add $2(1.008) + 32.06 + 4(16.00) = 2.016 + 32.06 + 64.00 = 98.08$ g/mol. Forgetting one of the four oxygens undercounts by 16.",
        "zh": "相加 $2(1.008) + 32.06 + 4(16.00) = 2.016 + 32.06 + 64.00 = 98.08$ g/mol。漏掉四个氧中的一个会少算 16。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many molecules are in 0.250 mol of a substance? Give your answer in scientific notation.",
        "zh": "0.250 mol 某物质中有多少个分子？请用科学计数法作答。"
      },
      "answer": "1.51e23",
      "accept": [
        "1.5055e23",
        "1.51e23",
        "1.5e23",
        "1.506e23",
        "1.51 x 10^23",
        "1.51*10^23",
        "1.5055 x 10^23"
      ],
      "explanation": {
        "en": "Multiply moles by Avogadro's number: $0.250 \\times 6.022 \\times 10^{23} = 1.51 \\times 10^{23}$. Dividing by Avogadro's number instead would give an impossibly tiny result.",
        "zh": "用摩尔数乘以阿伏伽德罗常数：$0.250 \\times 6.022 \\times 10^{23} = 1.51 \\times 10^{23}$。若改为除以阿伏伽德罗常数会得到一个极小的不合理结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the mass, in grams, of 3.00 mol of water, $H_2O$? (molar mass = 18.02 g/mol)",
        "zh": "3.00 mol 水 $H_2O$ 的质量是多少克？（摩尔质量 = 18.02 g/mol）"
      },
      "answer": "54.06",
      "accept": [
        "54.06",
        "54.0",
        "54",
        "54.05",
        "54.06 g",
        "54 g"
      ],
      "explanation": {
        "en": "Mass $= 3.00 \\times 18.02 = 54.06$ g. Dividing instead of multiplying would give a value less than one mole's mass, which is unreasonable here.",
        "zh": "质量 $= 3.00 \\times 18.02 = 54.06$ g。若相除而非相乘会得到小于一摩尔质量的值，在此不合理。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many moles of sodium (Na) atoms are in 2.00 mol of sodium sulfate, $Na_2SO_4$?",
        "zh": "2.00 mol 硫酸钠 $Na_2SO_4$ 中含有多少摩尔钠（Na）原子？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4.00",
        "4 mol",
        "4.0 mol"
      ],
      "explanation": {
        "en": "Each formula unit has 2 Na, so $2.00 \\times 2 = 4$ mol Na. Using the subscript as-is (2) forgets to scale by the 2.00 mol of compound.",
        "zh": "每个式单位含 2 个 Na，所以 $2.00 \\times 2 = 4$ mol Na。直接用下标（2）就是忘了按 2.00 mol 化合物放大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the percent by mass of oxygen in water, $H_2O$? (O = 16.00, molar mass = 18.02 g/mol) Give a percentage.",
        "zh": "水 $H_2O$ 中氧的质量百分数是多少？（O = 16.00，摩尔质量 = 18.02 g/mol）请给出百分数。"
      },
      "answer": "88.79",
      "accept": [
        "88.8",
        "88.79",
        "88.79%",
        "88.8%",
        "89",
        "0.8879"
      ],
      "explanation": {
        "en": "Percent O $= (16.00 / 18.02) \\times 100 = 88.79\\%$. Dividing the hydrogen mass instead would give the hydrogen percentage, not oxygen's.",
        "zh": "氧的百分数 $= (16.00 / 18.02) \\times 100 = 88.79\\%$。若改用氢的质量相除得到的是氢的百分数，而非氧的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the mass, in grams, of $1.204 \\times 10^{24}$ carbon atoms? (C = 12.01 g/mol)",
        "zh": "$1.204 \\times 10^{24}$ 个碳原子的质量是多少克？（C = 12.01 g/mol）"
      },
      "answer": "24.02",
      "accept": [
        "24.02",
        "24",
        "24.0",
        "24.01",
        "24.02 g",
        "24 g"
      ],
      "explanation": {
        "en": "That count is $1.204 \\times 10^{24} / 6.022 \\times 10^{23} = 2.00$ mol, so mass $= 2.00 \\times 12.01 = 24.02$ g. Treating the count as one mole would halve the answer to about 12 g.",
        "zh": "该数目为 $1.204 \\times 10^{24} / 6.022 \\times 10^{23} = 2.00$ mol，所以质量 $= 2.00 \\times 12.01 = 24.02$ g。若把该数目当作一摩尔，答案会减半到约 12 g。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many atoms total are in 2.00 mol of water, $H_2O$? Give your answer in scientific notation.",
        "zh": "2.00 mol 水 $H_2O$ 中总共含有多少个原子？请用科学计数法作答。"
      },
      "answer": "3.61e24",
      "accept": [
        "3.6132e24",
        "3.61e24",
        "3.6e24",
        "3.613e24",
        "3.61 x 10^24",
        "3.61*10^24"
      ],
      "explanation": {
        "en": "Each $H_2O$ has 3 atoms, so total $= 2.00 \\times 3 \\times 6.022 \\times 10^{23} = 3.61 \\times 10^{24}$. Counting molecules instead of atoms (skipping the factor of 3) undercounts threefold.",
        "zh": "每个 $H_2O$ 有 3 个原子，所以总数 $= 2.00 \\times 3 \\times 6.022 \\times 10^{23} = 3.61 \\times 10^{24}$。若只数分子而非原子（漏掉因子 3）会少算三倍。"
      }
    }
  ],
  "unit-1-atomic-structure/mass-spectroscopy": [
    {
      "type": "mc",
      "question": {
        "en": "Which statement best describes isotopes of a given element?",
        "zh": "下列哪项最准确地描述了某元素的同位素？"
      },
      "choices": [
        "atoms with the same number of protons but different numbers of neutrons",
        "atoms with the same number of neutrons but different numbers of protons",
        "atoms with the same mass number but different charges",
        "atoms with different numbers of protons and electrons"
      ],
      "answer": 0,
      "explanation": {
        "en": "Isotopes share the proton count (same element) but differ in neutrons, so they have different mass numbers. Changing the proton count instead would change the element entirely.",
        "zh": "同位素的质子数相同（同一元素），但中子数不同，因此质量数不同。若改变质子数则会变成另一种元素。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many neutrons are in an atom of chlorine-37, $^{37}_{17}Cl$?",
        "zh": "氯-37 原子 $^{37}_{17}Cl$ 中有多少个中子？"
      },
      "choices": [
        "17",
        "20",
        "37",
        "54"
      ],
      "answer": 1,
      "explanation": {
        "en": "Neutrons $=$ mass number $-$ atomic number $= 37 - 17 = 20$. Using the mass number alone (37) counts protons and neutrons together, and using 17 gives the proton count instead.",
        "zh": "中子数 $=$ 质量数 $-$ 原子序数 $= 37 - 17 = 20$。只用质量数（37）是把质子和中子一起数了；用 17 得到的是质子数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An element has two isotopes: 63.00 amu at 60.0% abundance and 65.00 amu at 40.0% abundance. What is its average atomic mass?",
        "zh": "某元素有两种同位素：63.00 amu（丰度 60.0%）和 65.00 amu（丰度 40.0%）。其平均原子质量是多少？"
      },
      "choices": [
        "63.0 amu",
        "64.0 amu",
        "63.8 amu",
        "65.0 amu"
      ],
      "answer": 2,
      "explanation": {
        "en": "Weighted average $= 0.600(63.00) + 0.400(65.00) = 37.8 + 26.0 = 63.8$ amu. Taking a simple average of 63 and 65 (64.0) ignores that the lighter isotope is more abundant.",
        "zh": "加权平均 $= 0.600(63.00) + 0.400(65.00) = 37.8 + 26.0 = 63.8$ amu。若取 63 与 65 的简单平均（64.0），就忽略了较轻同位素丰度更高。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A mass spectrometer separates ions according to which property?",
        "zh": "质谱仪根据哪种性质来分离离子？"
      },
      "choices": [
        "their color",
        "their boiling point",
        "their number of electrons",
        "their mass-to-charge ratio"
      ],
      "answer": 3,
      "explanation": {
        "en": "Ions are deflected by electric and magnetic fields based on their mass-to-charge ratio ($m/z$); heavier ions deflect less. Properties like boiling point are irrelevant to gas-phase ions in the instrument.",
        "zh": "离子在电场和磁场中依据质荷比（$m/z$）发生偏转，较重的离子偏转较小。像沸点这类性质与仪器中的气相离子无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A mass spectrum shows peaks at 24 amu (79%), 25 amu (10%), and 26 amu (11%). Which isotope is most abundant?",
        "zh": "某质谱在 24 amu（79%）、25 amu（10%）和 26 amu（11%）处有峰。哪种同位素最丰富？"
      },
      "choices": [
        "the mass-24 isotope",
        "the mass-26 isotope",
        "the mass-25 isotope",
        "they are all equally abundant"
      ],
      "answer": 0,
      "explanation": {
        "en": "The tallest peak corresponds to the largest abundance, here 79% at mass 24. Assuming the heaviest peak is the most abundant confuses mass with abundance.",
        "zh": "最高的峰对应最大的丰度，此处为质量 24 处的 79%。若假设最重的峰最丰富，就是把质量与丰度混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a neutral atom, the number of protons is equal to its ___.",
        "zh": "对于中性原子，其质子数等于它的 ___。"
      },
      "choices": [
        "mass number",
        "atomic number",
        "neutron count",
        "average atomic mass"
      ],
      "answer": 1,
      "explanation": {
        "en": "The atomic number $Z$ is defined as the number of protons. The mass number counts protons plus neutrons, so it is generally larger.",
        "zh": "原子序数 $Z$ 被定义为质子数。质量数是质子加中子之和，因此通常更大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Carbon-12 ($^{12}C$) and carbon-14 ($^{14}C$) differ only in their number of ___.",
        "zh": "碳-12（$^{12}C$）与碳-14（$^{14}C$）仅在 ___ 的数目上不同。"
      },
      "choices": [
        "electrons",
        "protons",
        "neutrons",
        "charge"
      ],
      "answer": 2,
      "explanation": {
        "en": "Both are carbon ($Z = 6$, 6 protons), so the difference in mass number (12 vs 14) comes entirely from neutrons (6 vs 8). Differing in protons would make them different elements.",
        "zh": "两者都是碳（$Z = 6$，6 个质子），因此质量数的差异（12 与 14）完全来自中子（6 与 8）。若质子数不同，它们就会是不同的元素。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The average atomic mass shown on the periodic table lies closest to the mass of which isotope?",
        "zh": "周期表上给出的平均原子质量最接近哪种同位素的质量？"
      },
      "choices": [
        "the lightest isotope",
        "the heaviest isotope",
        "the least abundant isotope",
        "the most abundant isotope"
      ],
      "answer": 3,
      "explanation": {
        "en": "A weighted average is pulled toward whichever isotope contributes the most, i.e. the most abundant one. It is not simply the lightest or heaviest unless that isotope also happens to dominate.",
        "zh": "加权平均会偏向贡献最大的同位素，即丰度最高的那一种。它不一定是最轻或最重的，除非那种同位素恰好也占主导。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An element consists of a 10.00 amu isotope (20.0%) and an 11.00 amu isotope (80.0%). What is its average atomic mass?",
        "zh": "某元素由 10.00 amu 同位素（20.0%）和 11.00 amu 同位素（80.0%）组成。其平均原子质量是多少？"
      },
      "choices": [
        "10.8 amu",
        "10.5 amu",
        "10.2 amu",
        "11.0 amu"
      ],
      "answer": 0,
      "explanation": {
        "en": "Weighted average $= 0.200(10.00) + 0.800(11.00) = 2.00 + 8.80 = 10.8$ amu. A plain midpoint of 10 and 11 (10.5) ignores that the heavier isotope dominates.",
        "zh": "加权平均 $= 0.200(10.00) + 0.800(11.00) = 2.00 + 8.80 = 10.8$ amu。若取 10 与 11 的中点（10.5），就忽略了较重同位素占主导。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The mass number of an atom is equal to the number of ___.",
        "zh": "原子的质量数等于 ___ 的数目。"
      },
      "choices": [
        "protons only",
        "protons plus neutrons",
        "neutrons only",
        "protons plus electrons"
      ],
      "answer": 1,
      "explanation": {
        "en": "Mass number counts the nucleons: protons plus neutrons. Electrons are far too light to contribute and are not counted.",
        "zh": "质量数计的是核子：质子加中子。电子质量太小，不作贡献，也不计入。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Chlorine has an average atomic mass of 35.45 amu, with isotopes at 35 amu and 37 amu. What does this indicate?",
        "zh": "氯的平均原子质量为 35.45 amu，其同位素分别为 35 amu 和 37 amu。这说明了什么？"
      },
      "choices": [
        "the two isotopes are equally abundant",
        "chlorine-37 is more abundant than chlorine-35",
        "chlorine-35 is more abundant than chlorine-37",
        "chlorine atoms actually have a mass of 35.45 amu each"
      ],
      "answer": 2,
      "explanation": {
        "en": "Because the average (35.45) sits much closer to 35 than to 37, the mass-35 isotope must contribute more, so it is more abundant. No single chlorine atom actually weighs 35.45 amu; that is only the weighted mean.",
        "zh": "由于平均值（35.45）离 35 比离 37 近得多，质量 35 的同位素贡献更大，因而更丰富。没有单个氯原子真的重 35.45 amu，那只是加权平均值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does the relative abundance of an isotope represent?",
        "zh": "同位素的相对丰度代表什么？"
      },
      "choices": [
        "the mass of one atom of that isotope",
        "the number of neutrons in that isotope",
        "the electric charge of the ion in the spectrometer",
        "the fraction of an element's atoms that are that particular isotope"
      ],
      "answer": 3,
      "explanation": {
        "en": "Relative abundance is the percentage (or fraction) of a sample's atoms that are a given isotope, and these must sum to 100% across all isotopes. It is not the isotope's mass or neutron count.",
        "zh": "相对丰度是样品中属于某一同位素的原子所占的百分数（或分数），所有同位素相加须为 100%。它不是同位素的质量或中子数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many neutrons are in an atom of iron-56, $^{56}_{26}Fe$?",
        "zh": "铁-56 原子 $^{56}_{26}Fe$ 中有多少个中子？"
      },
      "answer": "30",
      "accept": [
        "30.0",
        "30 neutrons"
      ],
      "explanation": {
        "en": "Neutrons $= 56 - 26 = 30$. Subtracting in the wrong direction or using the mass number directly would misidentify the neutron count.",
        "zh": "中子数 $= 56 - 26 = 30$。方向相减错误或直接用质量数都会算错中子数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Copper has two isotopes: $^{63}Cu$ (62.93 amu, 69.15%) and $^{65}Cu$ (64.93 amu, 30.85%). What is copper's average atomic mass in amu? (two decimals)",
        "zh": "铜有两种同位素：$^{63}Cu$（62.93 amu，69.15%）和 $^{65}Cu$（64.93 amu，30.85%）。铜的平均原子质量是多少 amu？（保留两位小数）"
      },
      "answer": "63.55",
      "accept": [
        "63.5",
        "63.55",
        "63.54",
        "63.6",
        "63.55 amu"
      ],
      "explanation": {
        "en": "$0.6915(62.93) + 0.3085(64.93) = 43.52 + 20.03 = 63.55$ amu. A simple average of 62.93 and 64.93 (63.93) ignores the greater abundance of the lighter isotope.",
        "zh": "$0.6915(62.93) + 0.3085(64.93) = 43.52 + 20.03 = 63.55$ amu。若取 62.93 与 64.93 的简单平均（63.93），就忽略了较轻同位素丰度更高。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An element has isotopes at 20.00 amu (90.0%) and 22.00 amu (10.0%). Calculate its average atomic mass in amu.",
        "zh": "某元素的同位素分别为 20.00 amu（90.0%）和 22.00 amu（10.0%）。计算其平均原子质量（amu）。"
      },
      "answer": "20.2",
      "accept": [
        "20.20",
        "20.2",
        "20.2 amu",
        "20.20 amu"
      ],
      "explanation": {
        "en": "$0.900(20.00) + 0.100(22.00) = 18.0 + 2.2 = 20.2$ amu. Forgetting to weight by abundance and averaging to 21.0 overstates the heavier isotope's role.",
        "zh": "$0.900(20.00) + 0.100(22.00) = 18.0 + 2.2 = 20.2$ amu。若忘记按丰度加权而取平均得 21.0，就夸大了较重同位素的作用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An atom has 17 protons and 18 neutrons. What is its mass number?",
        "zh": "某原子有 17 个质子和 18 个中子。它的质量数是多少？"
      },
      "answer": "35",
      "accept": [
        "35.0",
        "35 amu"
      ],
      "explanation": {
        "en": "Mass number $= 17 + 18 = 35$. Using only the neutron count (18) or only protons (17) leaves out half the nucleons.",
        "zh": "质量数 $= 17 + 18 = 35$。只用中子数（18）或只用质子数（17）都漏掉了一半核子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many protons are in an atom of calcium-40, $^{40}Ca$? (Ca has atomic number 20)",
        "zh": "钙-40 原子 $^{40}Ca$ 中有多少个质子？（钙的原子序数为 20）"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20 protons"
      ],
      "explanation": {
        "en": "The number of protons equals the atomic number, 20, regardless of which isotope it is. The mass number (40) counts protons plus neutrons together.",
        "zh": "质子数等于原子序数 20，与是哪种同位素无关。质量数（40）是把质子和中子一起数了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An element has exactly two isotopes. If one isotope has a relative abundance of 25.0%, what percent is the other? Give a percentage.",
        "zh": "某元素恰有两种同位素。若其中一种的相对丰度为 25.0%，另一种是多少百分比？请给出百分数。"
      },
      "answer": "75",
      "accept": [
        "75.0",
        "75%",
        "75.0%",
        "0.75"
      ],
      "explanation": {
        "en": "Abundances must total 100%, so the other is $100 - 25.0 = 75.0\\%$. Assuming both isotopes are automatically 50% ignores the stated 25%.",
        "zh": "各丰度须合计 100%，所以另一种为 $100 - 25.0 = 75.0\\%$。若假设两种同位素自动各占 50%，就忽略了题给的 25%。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Chlorine consists of $^{35}Cl$ (34.969 amu, 75.77%) and $^{37}Cl$ (36.966 amu, 24.23%). What is chlorine's average atomic mass in amu? (two decimals)",
        "zh": "氯由 $^{35}Cl$（34.969 amu，75.77%）和 $^{37}Cl$（36.966 amu，24.23%）组成。氯的平均原子质量是多少 amu？（保留两位小数）"
      },
      "answer": "35.45",
      "accept": [
        "35.45",
        "35.5",
        "35.45 amu",
        "35.453"
      ],
      "explanation": {
        "en": "$0.7577(34.969) + 0.2423(36.966) = 26.50 + 8.96 = 35.45$ amu. A midpoint of 34.969 and 36.966 (about 35.97) would ignore that the lighter isotope is three times as common.",
        "zh": "$0.7577(34.969) + 0.2423(36.966) = 26.50 + 8.96 = 35.45$ amu。若取 34.969 与 36.966 的中点（约 35.97），就忽略了较轻同位素常见程度约为三倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Boron has isotopes $^{10}B$ (10.013 amu, 19.9%) and $^{11}B$ (11.009 amu, 80.1%). What is boron's average atomic mass in amu? (two decimals)",
        "zh": "硼有同位素 $^{10}B$（10.013 amu，19.9%）和 $^{11}B$（11.009 amu，80.1%）。硼的平均原子质量是多少 amu？（保留两位小数）"
      },
      "answer": "10.81",
      "accept": [
        "10.81",
        "10.8",
        "10.81 amu",
        "10.811"
      ],
      "explanation": {
        "en": "$0.199(10.013) + 0.801(11.009) = 1.99 + 8.82 = 10.81$ amu. Because the heavier isotope is far more abundant, the average sits close to 11, not near the midpoint 10.5.",
        "zh": "$0.199(10.013) + 0.801(11.009) = 1.99 + 8.82 = 10.81$ amu。由于较重同位素丰度高得多，平均值接近 11，而非中点 10.5。"
      }
    }
  ],
  "unit-1-atomic-structure/electron-config-trends": [
    {
      "type": "mc",
      "question": {
        "en": "What is the ground-state electron configuration of nitrogen (Z = 7)?",
        "zh": "氮（Z = 7）的基态电子排布是什么？"
      },
      "choices": [
        "$1s^2\\,2s^2\\,2p^3$",
        "$1s^2\\,2s^2\\,2p^6$",
        "$1s^2\\,2s^2\\,2p^2$",
        "$1s^2\\,2s^3\\,2p^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Seven electrons fill as $1s^2\\,2s^2\\,2p^3$. Writing $2p^2$ accounts for only six electrons, and $2s^3$ violates the two-electron limit of an s subshell.",
        "zh": "七个电子按 $1s^2\\,2s^2\\,2p^3$ 填充。写成 $2p^2$ 只有六个电子；而 $2s^3$ 违反了 s 亚层最多容纳两个电子的限制。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many valence electrons does a neutral oxygen atom (group 16) have?",
        "zh": "中性氧原子（第 16 族）有多少个价电子？"
      },
      "choices": [
        "2",
        "6",
        "4",
        "8"
      ],
      "answer": 1,
      "explanation": {
        "en": "Group 16 elements have 6 valence electrons ($2s^2\\,2p^4$). Answering 8 counts all electrons in the n = 2 shell as if the total were the valence count, and mistakes the octet target for the actual number present.",
        "zh": "第 16 族元素有 6 个价电子（$2s^2\\,2p^4$）。答 8 是把 n = 2 层的总数当作价电子数，也把八隅体目标误当成实际拥有的数目。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does atomic radius generally change moving left to right across a period?",
        "zh": "在同一周期内从左到右，原子半径通常如何变化？"
      },
      "choices": [
        "it increases",
        "it stays the same",
        "it decreases",
        "it first increases, then decreases"
      ],
      "answer": 2,
      "explanation": {
        "en": "Across a period the nuclear charge rises while electrons enter the same shell, so the stronger pull shrinks the radius. Expecting it to grow confuses this with the trend down a group, where new shells are added.",
        "zh": "在同一周期内，核电荷增大而电子进入同一电子层，因此更强的吸引使半径缩小。若以为半径增大，是把它与同族向下（新增电子层）的趋势混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does first ionization energy generally change moving down a group?",
        "zh": "在同一族内从上到下，第一电离能通常如何变化？"
      },
      "choices": [
        "it doubles each period",
        "it increases",
        "it stays constant",
        "it decreases"
      ],
      "answer": 3,
      "explanation": {
        "en": "Down a group the valence electron sits in a higher shell, farther from the nucleus and more shielded, so it is easier to remove and ionization energy decreases. Expecting an increase reverses the actual radius effect.",
        "zh": "沿一族向下，价电子处于更高的电子层，离核更远且屏蔽更强，因而更易被移除，电离能下降。若以为电离能增大，就把半径的实际影响弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the ground-state electron configuration of sodium (Z = 11)?",
        "zh": "钠（Z = 11）的基态电子排布是什么？"
      },
      "choices": [
        "$[Ne]3s^1$",
        "$[Ne]2s^1$",
        "$[Ne]3s^2$",
        "$[Ar]3s^1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "After the neon core (10 electrons), the 11th electron goes into 3s, giving $[Ne]3s^1$. Writing $3s^2$ adds one electron too many, and an argon core would require 18 electrons.",
        "zh": "在氖芯（10 个电子）之后，第 11 个电子进入 3s，得到 $[Ne]3s^1$。写成 $3s^2$ 多加了一个电子；而氩芯需要 18 个电子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which atom has the larger atomic radius, Na or Cl?",
        "zh": "钠（Na）与氯（Cl）中，哪个原子半径更大？"
      },
      "choices": [
        "Cl",
        "Na",
        "they are equal",
        "it cannot be determined"
      ],
      "answer": 1,
      "explanation": {
        "en": "Na and Cl are in the same period, and radius decreases toward the right, so Na (farther left) is larger. Picking Cl assumes more protons means a bigger atom, but the stronger pull actually contracts it.",
        "zh": "Na 与 Cl 同处一个周期，半径向右递减，因此更靠左的 Na 更大。选 Cl 是以为质子越多原子越大，但更强的吸引实际上使原子收缩。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these elements has the highest electronegativity?",
        "zh": "下列元素中，哪个电负性最高？"
      },
      "choices": [
        "Li",
        "C",
        "F",
        "O"
      ],
      "answer": 2,
      "explanation": {
        "en": "Fluorine is the most electronegative element on the Pauling scale. Oxygen is close but slightly lower; electronegativity rises toward the upper right of the periodic table.",
        "zh": "氟是鲍林标度上电负性最高的元素。氧接近但略低；电负性向周期表右上方递增。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Among the period-2 elements, which neutral atom has the highest first ionization energy?",
        "zh": "在第 2 周期元素中，哪个中性原子的第一电离能最高？"
      },
      "choices": [
        "Li",
        "F",
        "B",
        "Ne"
      ],
      "answer": 3,
      "explanation": {
        "en": "Ionization energy generally rises across a period, peaking at the noble gas neon with its stable full shell. Choosing fluorine forgets that neon, one step further right, holds its electrons even more tightly.",
        "zh": "电离能沿周期总体上升，在具有稳定满壳层的稀有气体氖处达到峰值。选氟是忘了再右一格的氖对电子束缚得更牢。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best explains why atomic radius decreases across a period?",
        "zh": "下列哪项最能解释为何原子半径在同一周期内递减？"
      },
      "choices": [
        "the effective nuclear charge increases, pulling the electrons closer",
        "a new electron shell is added at each step",
        "the number of neutrons in the nucleus decreases",
        "electron shielding increases faster than the nuclear charge"
      ],
      "answer": 0,
      "explanation": {
        "en": "Across a period protons are added to the same shell, so effective nuclear charge grows and pulls electrons in tighter. New shells are added down a group, not across a period, so that reasoning applies to the wrong direction.",
        "zh": "在同一周期内，质子被加入同一电子层，因此有效核电荷增大并把电子拉得更紧。新增电子层发生在沿一族向下，而非在周期内，所以那种理由用错了方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many electrons can a completely filled p subshell hold?",
        "zh": "一个完全填满的 p 亚层最多可容纳多少个电子？"
      },
      "choices": [
        "2",
        "6",
        "10",
        "8"
      ],
      "answer": 1,
      "explanation": {
        "en": "A p subshell has 3 orbitals, each holding 2 electrons, for a total of 6. The value 10 belongs to a d subshell, and 2 is a single s subshell.",
        "zh": "p 亚层有 3 个轨道，每个容纳 2 个电子，共 6 个。数值 10 属于 d 亚层，而 2 是单个 s 亚层。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "According to the aufbau principle, which subshell is filled first?",
        "zh": "根据构造原理（aufbau），哪个亚层先被填充？"
      },
      "choices": [
        "3d is filled before 4s",
        "3d and 4s are filled at the same time",
        "4s is filled before 3d",
        "4p is filled before 4s"
      ],
      "answer": 2,
      "explanation": {
        "en": "4s is lower in energy than 3d for neutral atoms, so it fills first. Assuming 3d comes first ignores the energy ordering that places 4s below 3d during filling.",
        "zh": "对中性原子而言，4s 的能量低于 3d，所以先填 4s。若以为先填 3d，就忽略了填充时 4s 能量低于 3d 的能级顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which ion is isoelectronic with argon (Ar, 18 electrons)?",
        "zh": "下列哪种离子与氩（Ar，18 个电子）等电子？"
      },
      "choices": [
        "$Na^+$",
        "$Li^+$",
        "$F^-$",
        "$Cl^-$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Chlorine (17 electrons) gains one to become $Cl^-$ with 18 electrons, matching argon. $Na^+$ and $F^-$ each have 10 electrons (like neon), so they match a different noble gas.",
        "zh": "氯（17 个电子）得到一个电子变成含 18 个电子的 $Cl^-$，与氩相同。$Na^+$ 和 $F^-$ 各有 10 个电子（如氖），因此对应的是另一种稀有气体。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A neutral atom has the ground-state configuration $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$. What is its atomic number?",
        "zh": "某中性原子的基态排布为 $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$。它的原子序数是多少？"
      },
      "answer": "16",
      "accept": [
        "16.0",
        "sulfur",
        "S",
        "硫"
      ],
      "explanation": {
        "en": "Add the electrons: $2 + 2 + 6 + 2 + 4 = 16$, so Z = 16 (sulfur). Miscounting the $3p^4$ as a filled $3p^6$ would wrongly give 18.",
        "zh": "把电子相加：$2 + 2 + 6 + 2 + 4 = 16$，所以 Z = 16（硫）。若把 $3p^4$ 误数为填满的 $3p^6$，会错误地得到 18。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many unpaired electrons are in a ground-state oxygen atom ($2p^4$)?",
        "zh": "基态氧原子（$2p^4$）中有多少个未成对电子？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "two"
      ],
      "explanation": {
        "en": "By Hund's rule the three 2p orbitals get one electron each first, then the fourth pairs up, leaving 2 unpaired. Assuming all four pair immediately would give 0 and ignores Hund's rule.",
        "zh": "根据洪特规则，三个 2p 轨道先各得一个电子，第四个再配对，剩下 2 个未成对。若以为四个电子立即成对得 0，就忽略了洪特规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the maximum number of electrons that the n = 3 shell can hold?",
        "zh": "n = 3 电子层最多可容纳多少个电子？"
      },
      "answer": "18",
      "accept": [
        "18.0"
      ],
      "explanation": {
        "en": "Use $2n^2 = 2(3)^2 = 18$. Using $2n$ instead of $2n^2$ would give only 6 and misses the squaring.",
        "zh": "用 $2n^2 = 2(3)^2 = 18$。若用 $2n$ 而非 $2n^2$ 只得 6，漏掉了平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many valence electrons does a neutral phosphorus atom (group 15) have?",
        "zh": "中性磷原子（第 15 族）有多少个价电子？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "five"
      ],
      "explanation": {
        "en": "Group 15 elements have 5 valence electrons ($3s^2\\,3p^3$). Counting only the p electrons (3) forgets the two s electrons in the same shell.",
        "zh": "第 15 族元素有 5 个价电子（$3s^2\\,3p^3$）。只数 p 电子（3）就忘了同一层里的两个 s 电子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A neutral atom has the configuration $[Ar]4s^2\\,3d^{10}\\,4p^5$. What is its atomic number?",
        "zh": "某中性原子的排布为 $[Ar]4s^2\\,3d^{10}\\,4p^5$。它的原子序数是多少？"
      },
      "answer": "35",
      "accept": [
        "35.0",
        "bromine",
        "Br",
        "溴"
      ],
      "explanation": {
        "en": "Argon contributes 18, then $2 + 10 + 5 = 17$ more, so Z = 35 (bromine). Forgetting the 10 electrons in the filled 3d subshell would undercount badly.",
        "zh": "氩贡献 18，再加 $2 + 10 + 5 = 17$，所以 Z = 35（溴）。若忘掉填满的 3d 亚层中的 10 个电子，会严重少算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many orbitals are in an f subshell?",
        "zh": "一个 f 亚层有多少个轨道？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "seven"
      ],
      "explanation": {
        "en": "An f subshell has 7 orbitals (holding up to 14 electrons). Confusing it with a d subshell (5 orbitals) or a p subshell (3 orbitals) gives the wrong count.",
        "zh": "f 亚层有 7 个轨道（最多容纳 14 个电子）。若与 d 亚层（5 个轨道）或 p 亚层（3 个轨道）混淆就会数错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many electrons does a completely filled d subshell hold?",
        "zh": "一个完全填满的 d 亚层含有多少个电子？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "ten"
      ],
      "explanation": {
        "en": "A d subshell has 5 orbitals times 2 electrons each = 10. Using 6 confuses it with a p subshell, which has only 3 orbitals.",
        "zh": "d 亚层有 5 个轨道，每个 2 个电子，共 10 个。用 6 是与只有 3 个轨道的 p 亚层混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many electrons are in a chloride ion, $Cl^-$? (Cl has atomic number 17)",
        "zh": "氯离子 $Cl^-$ 中有多少个电子？（氯的原子序数为 17）"
      },
      "answer": "18",
      "accept": [
        "18.0"
      ],
      "explanation": {
        "en": "A neutral Cl atom has 17 electrons; the $1-$ charge means it gained one, giving 18. Treating the anion as if it lost an electron (16) reverses the sign of the charge.",
        "zh": "中性 Cl 原子有 17 个电子；$1-$ 电荷表示它得到一个电子，共 18 个。若把阴离子当作失去一个电子（16），就把电荷符号弄反了。"
      }
    }
  ],
  "unit-2-compound-structure/lewis-structures": [
    {
      "type": "mc",
      "question": {
        "en": "How many valence electrons must be accounted for when drawing the Lewis structure of $CO_2$?",
        "zh": "绘制 $CO_2$ 的路易斯结构时，必须计入多少个价电子？"
      },
      "choices": [
        "16",
        "12",
        "18",
        "22"
      ],
      "answer": 0,
      "explanation": {
        "en": "Carbon contributes 4 and each oxygen contributes 6, so $4 + 2(6) = 16$. A common error is counting only carbon's electrons or forgetting one oxygen.",
        "zh": "碳提供 4 个，每个氧提供 6 个，因此 $4 + 2(6) = 16$。常见错误是只算碳的电子或漏算一个氧。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which molecule contains a central atom that violates the octet rule by having fewer than 8 electrons?",
        "zh": "下列哪个分子的中心原子因电子少于 8 个而违反八隅体规则？"
      },
      "choices": [
        "$CH_4$",
        "$BF_3$",
        "$H_2O$",
        "$NH_3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Boron in $BF_3$ has only 6 electrons around it (an electron-deficient atom). The tempting error is assuming every central atom must reach 8; boron is a well-known exception.",
        "zh": "$BF_3$ 中的硼周围只有 6 个电子（缺电子原子）。诱人的错误是认为每个中心原子都必须达到 8 个；硼是著名的例外。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the bond order of each nitrogen-oxygen bond in the nitrate ion $NO_3^-$?",
        "zh": "硝酸根离子 $NO_3^-$ 中每个氮氧键的键级是多少？"
      },
      "choices": [
        "1",
        "1.5",
        "$\\frac{4}{3}$",
        "2"
      ],
      "answer": 2,
      "explanation": {
        "en": "Nitrate has one double bond and two single bonds spread over three equivalent bonds by resonance: $\\frac{1+1+2}{3} = \\frac{4}{3}$. Ignoring resonance and picking a single localized value is the common mistake.",
        "zh": "硝酸根由共振将一个双键和两个单键均摊到三个等价键上：$\\frac{1+1+2}{3} = \\frac{4}{3}$。忽略共振而选取单一定域值是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the formal charge on sulfur in the Lewis structure of $SO_4^{2-}$ drawn with two S=O double bonds and two S-O single bonds?",
        "zh": "在含两个 S=O 双键和两个 S-O 单键的 $SO_4^{2-}$ 路易斯结构中，硫的形式电荷是多少？"
      },
      "choices": [
        "$-2$",
        "$-1$",
        "$+2$",
        "$0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Sulfur has 6 valence electrons, 0 lone-pair electrons, and 6 bonds: $6 - 0 - \\frac{12}{2} = 0$. Forgetting to halve the bonding electrons gives a wrong nonzero value.",
        "zh": "硫有 6 个价电子、0 个孤对电子、6 个成键：$6 - 0 - \\frac{12}{2} = 0$。忘记将成键电子减半会得到错误的非零值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which species requires resonance structures to properly describe its bonding?",
        "zh": "下列哪个物种需要用共振结构来正确描述其成键？"
      },
      "choices": [
        "$O_3$",
        "$CCl_4$",
        "$CH_4$",
        "$H_2O$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Ozone $O_3$ has two equivalent bonds that cannot be shown by a single structure, requiring resonance. Molecules with only single bonds to terminal atoms need no resonance.",
        "zh": "臭氧 $O_3$ 有两个等价键，无法用单一结构表示，因此需要共振。仅含端原子单键的分子无需共振。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many lone pairs are on the central atom in the Lewis structure of water, $H_2O$?",
        "zh": "在水 $H_2O$ 的路易斯结构中，中心原子上有多少个孤对电子？"
      },
      "choices": [
        "0",
        "2",
        "1",
        "3"
      ],
      "answer": 1,
      "explanation": {
        "en": "Oxygen has 6 valence electrons; two are used in O-H bonds, leaving 4 electrons as 2 lone pairs. Confusing bonding pairs with lone pairs leads to an undercount.",
        "zh": "氧有 6 个价电子；两个用于 O-H 键，剩下 4 个电子构成 2 个孤对。把成键对与孤对混淆会导致少算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In which molecule does the central atom have an expanded octet (more than 8 electrons)?",
        "zh": "下列哪个分子的中心原子具有扩展八隅体（超过 8 个电子）？"
      },
      "choices": [
        "$PCl_3$",
        "$NH_3$",
        "$SF_6$",
        "$CO_2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Sulfur in $SF_6$ is surrounded by 6 bonding pairs = 12 electrons, an expanded octet possible for period-3 and lower elements. Second-period central atoms cannot expand their octet.",
        "zh": "$SF_6$ 中的硫被 6 个成键对包围，共 12 个电子，即第三周期及以下元素可能的扩展八隅体。第二周期中心原子无法扩展八隅体。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is the correct total number of bonding electron pairs (single + parts of multiples counted as pairs) in $N_2$?",
        "zh": "下列哪个是 $N_2$ 中成键电子对（把三键计为 3 对）的正确总数？"
      },
      "choices": [
        "1",
        "2",
        "4",
        "3"
      ],
      "answer": 3,
      "explanation": {
        "en": "$N_2$ has a triple bond, which is 3 shared pairs. Treating it as a single bond and counting only 1 pair is the typical mistake.",
        "zh": "$N_2$ 含一个三键，即 3 对共享电子。把它当作单键而只算 1 对是典型错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the Lewis structure of $HCN$, how many total lone pairs appear on all atoms combined?",
        "zh": "对于 $HCN$ 的路易斯结构，所有原子上的孤对电子总共有多少对？"
      },
      "choices": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 0,
      "explanation": {
        "en": "H-C is a single bond, C to N is a triple bond, and nitrogen carries exactly one lone pair; carbon and hydrogen have none. Forgetting the triple bond and adding lone pairs to carbon overcounts.",
        "zh": "H-C 为单键，C 与 N 之间为三键，氮恰好带 1 个孤对；碳和氢没有孤对。忘记三键并给碳加孤对会多算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Between two valid resonance structures, the more favorable one generally has:",
        "zh": "在两个有效的共振结构之间，更有利的那个通常具有："
      },
      "choices": [
        "The largest formal charges possible",
        "Formal charges closest to zero and any negative charge on the more electronegative atom",
        "All positive charges on oxygen",
        "The most double bonds regardless of formal charge"
      ],
      "answer": 1,
      "explanation": {
        "en": "The best structure minimizes formal charges and places negative formal charge on the most electronegative atom. Maximizing formal charge magnitude is exactly the wrong preference.",
        "zh": "最佳结构使形式电荷最小，并把负形式电荷放在电负性最强的原子上。使形式电荷绝对值最大恰恰是错误的偏好。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many total valence electrons are in the ammonium ion $NH_4^+$?",
        "zh": "铵根离子 $NH_4^+$ 中共有多少个价电子？"
      },
      "choices": [
        "6",
        "9",
        "8",
        "10"
      ],
      "answer": 2,
      "explanation": {
        "en": "Nitrogen gives 5, four hydrogens give 4, and the $+1$ charge removes 1: $5 + 4 - 1 = 8$. Forgetting to subtract for the positive charge overcounts by one.",
        "zh": "氮提供 5 个，四个氢提供 4 个，$+1$ 电荷减去 1 个：$5 + 4 - 1 = 8$。忘记为正电荷减去 1 个会多算一个。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about a coordinate (dative) covalent bond is correct?",
        "zh": "关于配位（授受）共价键，下列哪种说法正确？"
      },
      "choices": [
        "Both bonded atoms each contribute one electron",
        "It is always weaker than an ionic bond",
        "No electrons are shared",
        "One atom contributes both shared electrons"
      ],
      "answer": 3,
      "explanation": {
        "en": "In a dative bond one atom supplies both electrons of the shared pair, as when $NH_3$ bonds to $H^+$. Assuming each atom must donate one electron describes an ordinary covalent bond, not a dative one.",
        "zh": "在配位键中，共享电子对的两个电子由同一个原子提供，如 $NH_3$ 与 $H^+$ 成键。认为每个原子必须各提供一个电子描述的是普通共价键，而非配位键。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many total valence electrons must be placed in the Lewis structure of the carbonate ion $CO_3^{2-}$?",
        "zh": "碳酸根离子 $CO_3^{2-}$ 的路易斯结构中必须放置多少个价电子？"
      },
      "answer": "24",
      "accept": [
        "24",
        "24.0",
        "twenty-four",
        "二十四"
      ],
      "explanation": {
        "en": "Carbon gives 4, three oxygens give $3 \\times 6 = 18$, and the $2-$ charge adds 2: $4 + 18 + 2 = 24$. Forgetting to add electrons for the negative charge undercounts.",
        "zh": "碳提供 4 个，三个氧提供 $3 \\times 6 = 18$ 个，$2-$ 电荷再加 2 个：$4 + 18 + 2 = 24$。忘记为负电荷加电子会少算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the formal charge on the singly-bonded oxygen atoms (each) in a typical resonance structure of nitrate $NO_3^-$ where nitrogen has one double bond?",
        "zh": "在氮带一个双键的硝酸根 $NO_3^-$ 典型共振结构中，每个单键氧原子的形式电荷是多少？"
      },
      "answer": "-1",
      "accept": [
        "-1",
        "−1",
        "-1.0",
        "negative 1",
        "minus one",
        "负1",
        "负一"
      ],
      "explanation": {
        "en": "A single-bonded oxygen has 6 nonbonding electrons and 1 bond: $6 - 6 - \\frac{2}{2} = -1$. Miscounting the lone pairs as two pairs instead of three gives a wrong value.",
        "zh": "单键氧有 6 个非键电子和 1 个键：$6 - 6 - \\frac{2}{2} = -1$。把孤对数成两对而非三对会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many equivalent resonance structures can be drawn for the nitrate ion $NO_3^-$ by moving the position of the double bond?",
        "zh": "通过移动双键位置，可为硝酸根离子 $NO_3^-$ 画出多少个等价共振结构？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "three",
        "三"
      ],
      "explanation": {
        "en": "The double bond can be placed to any of the three oxygens, giving 3 equivalent resonance structures. Counting only one structure ignores the delocalization the ion actually has.",
        "zh": "双键可放在三个氧中的任意一个上，给出 3 个等价共振结构。只算一个结构会忽略该离子实际具有的离域。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the Lewis structure of $CO_2$, how many total bonding electrons (electrons shared in bonds) are there?",
        "zh": "在 $CO_2$ 的路易斯结构中，共有多少个成键电子（键中共享的电子）？"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "eight",
        "八"
      ],
      "explanation": {
        "en": "$CO_2$ has two C=O double bonds, each with 4 bonding electrons: $2 \\times 4 = 8$. Treating each C=O as a single bond and counting only 4 undercounts.",
        "zh": "$CO_2$ 有两个 C=O 双键，每个含 4 个成键电子：$2 \\times 4 = 8$。把每个 C=O 当作单键而只算 4 个会少算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the formal charge on the central atom in the ammonium ion $NH_4^+$?",
        "zh": "铵根离子 $NH_4^+$ 中心原子的形式电荷是多少？"
      },
      "answer": "+1",
      "accept": [
        "+1",
        "1",
        "1.0",
        "+1.0",
        "plus one",
        "正1",
        "正一"
      ],
      "explanation": {
        "en": "Nitrogen has 5 valence electrons, 0 lone-pair electrons, and 4 bonds: $5 - 0 - \\frac{8}{2} = +1$. Forgetting that nitrogen normally 'owns' more electrons in neutral molecules leads to a zero answer.",
        "zh": "氮有 5 个价电子、0 个孤对电子、4 个键：$5 - 0 - \\frac{8}{2} = +1$。忘记氮在中性分子中通常拥有更多电子会得到零的答案。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many total lone pairs are on the terminal fluorine atoms combined in the Lewis structure of $BF_3$?",
        "zh": "在 $BF_3$ 的路易斯结构中，端氟原子上的孤对电子总共有多少对？"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "nine",
        "九"
      ],
      "explanation": {
        "en": "Each fluorine forms one single bond and keeps 3 lone pairs; three fluorines give $3 \\times 3 = 9$. Counting only one lone pair per fluorine (like oxygen) undercounts.",
        "zh": "每个氟形成一个单键并保留 3 个孤对；三个氟给出 $3 \\times 3 = 9$。像氧那样每个氟只算一个孤对会少算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many valence electrons are in the Lewis structure of methane, $CH_4$?",
        "zh": "甲烷 $CH_4$ 的路易斯结构中有多少个价电子？"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "eight",
        "八"
      ],
      "explanation": {
        "en": "Carbon gives 4 and four hydrogens give 4: $4 + 4 = 8$. Counting hydrogen as contributing more than one electron each overcounts.",
        "zh": "碳提供 4 个，四个氢提供 4 个：$4 + 4 = 8$。把每个氢算作提供超过一个电子会多算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the Lewis structure of $N_2$, how many lone pairs are on each nitrogen atom?",
        "zh": "在 $N_2$ 的路易斯结构中，每个氮原子上有多少个孤对电子？"
      },
      "answer": "1",
      "accept": [
        "1",
        "1.0",
        "one",
        "一"
      ],
      "explanation": {
        "en": "Each nitrogen shares 3 pairs in the triple bond, using 3 of its 5 valence electrons in bonding-equivalents, leaving one lone pair. Forgetting the triple bond leaves too many nonbonding electrons.",
        "zh": "每个氮在三键中共享 3 对电子，剩下一个孤对。忘记三键会留下过多的非键电子。"
      }
    }
  ],
  "unit-2-compound-structure/vsepr-hybridization": [
    {
      "type": "mc",
      "question": {
        "en": "According to VSEPR theory, what is the molecular geometry of $CH_4$?",
        "zh": "根据 VSEPR 理论，$CH_4$ 的分子几何构型是什么？"
      },
      "choices": [
        "Tetrahedral",
        "Trigonal planar",
        "Square planar",
        "Trigonal pyramidal"
      ],
      "answer": 0,
      "explanation": {
        "en": "Carbon has 4 bonding pairs and no lone pairs, giving tetrahedral geometry. Confusing 4 electron domains with a flat arrangement leads to picking a planar shape.",
        "zh": "碳有 4 个成键对且无孤对，构成四面体几何。把 4 个电子域误认为平面排布会选到平面构型。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the molecular geometry of $NH_3$?",
        "zh": "$NH_3$ 的分子几何构型是什么？"
      },
      "choices": [
        "Tetrahedral",
        "Trigonal pyramidal",
        "Trigonal planar",
        "Bent"
      ],
      "answer": 1,
      "explanation": {
        "en": "Nitrogen has 3 bonding pairs and 1 lone pair; the lone pair makes the molecular shape trigonal pyramidal even though the electron geometry is tetrahedral. Reporting the electron geometry instead of molecular shape is the common error.",
        "zh": "氮有 3 个成键对和 1 个孤对；孤对使分子形状为三角锥形，尽管电子几何为四面体。把电子几何当作分子形状回答是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the approximate H-O-H bond angle in a water molecule?",
        "zh": "水分子中 H-O-H 键角约为多少？"
      },
      "choices": [
        "$90^{\\circ}$",
        "$120^{\\circ}$",
        "$104.5^{\\circ}$",
        "$180^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Water's two lone pairs compress the ideal $109.5^{\\circ}$ tetrahedral angle to about $104.5^{\\circ}$. Assuming a perfect tetrahedral angle ignores extra lone-pair repulsion.",
        "zh": "水的两个孤对将理想的四面体角 $109.5^{\\circ}$ 压缩到约 $104.5^{\\circ}$。假设为完美四面体角会忽略额外的孤对排斥。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the hybridization of the carbon atom in $CO_2$?",
        "zh": "$CO_2$ 中碳原子的杂化方式是什么？"
      },
      "choices": [
        "$sp^3 d$",
        "$sp^2$",
        "$sp^3$",
        "$sp$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Carbon in $CO_2$ has 2 electron domains (two double bonds), giving $sp$ hybridization. Counting the pi bonds as extra domains would wrongly raise the hybridization.",
        "zh": "$CO_2$ 中碳有 2 个电子域（两个双键），为 $sp$ 杂化。把 π 键当作额外的域会错误地提高杂化数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many electron domains surround the central atom in $SF_6$, and what is its molecular geometry?",
        "zh": "$SF_6$ 中心原子周围有多少个电子域，其分子几何构型是什么？"
      },
      "choices": [
        "6 domains, octahedral",
        "5 domains, trigonal bipyramidal",
        "4 domains, tetrahedral",
        "6 domains, trigonal prismatic"
      ],
      "answer": 0,
      "explanation": {
        "en": "Sulfur bonds to 6 fluorines with no lone pairs, giving 6 domains and octahedral geometry. Miscounting the domains gives the wrong parent shape.",
        "zh": "硫与 6 个氟成键且无孤对，构成 6 个域和八面体几何。数错域数会得到错误的母体形状。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the molecular geometry of $BF_3$?",
        "zh": "$BF_3$ 的分子几何构型是什么？"
      },
      "choices": [
        "Trigonal pyramidal",
        "Trigonal planar",
        "Bent",
        "Tetrahedral"
      ],
      "answer": 1,
      "explanation": {
        "en": "Boron has 3 bonding pairs and no lone pairs, giving trigonal planar geometry with $120^{\\circ}$ angles. Assuming boron has a lone pair like nitrogen would wrongly make it pyramidal.",
        "zh": "硼有 3 个成键对且无孤对，构成键角 $120^{\\circ}$ 的三角平面几何。假设硼像氮一样有孤对会错误地得到锥形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the hybridization of the central atom in $PCl_5$?",
        "zh": "$PCl_5$ 中心原子的杂化方式是什么？"
      },
      "choices": [
        "$sp^2$",
        "$sp^3$",
        "$sp^3 d$",
        "$sp^3 d^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Phosphorus has 5 electron domains, requiring $sp^3 d$ hybridization. Stopping at $sp^3$ ignores that a fifth domain needs a d orbital.",
        "zh": "磷有 5 个电子域，需要 $sp^3 d$ 杂化。止步于 $sp^3$ 会忽略第五个域需要一个 d 轨道。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which molecule is nonpolar despite containing polar bonds?",
        "zh": "下列哪个分子尽管含有极性键却是非极性的？"
      },
      "choices": [
        "$H_2O$",
        "$NH_3$",
        "$SO_2$",
        "$CCl_4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$CCl_4$ is tetrahedral and symmetric, so its bond dipoles cancel, making it nonpolar. Judging polarity only by bond type, without considering symmetry, misclassifies it.",
        "zh": "$CCl_4$ 为四面体且对称，因此键偶极相互抵消，使其非极性。仅凭键的类型而不考虑对称性来判断极性会误判。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The central sulfur in $SO_2$ has one lone pair and two bonding regions. What is its molecular geometry?",
        "zh": "$SO_2$ 中的中心硫有一个孤对和两个成键区域。其分子几何构型是什么？"
      },
      "choices": [
        "Bent",
        "Linear",
        "Trigonal planar",
        "Trigonal pyramidal"
      ],
      "answer": 0,
      "explanation": {
        "en": "With 3 electron domains (2 bonding + 1 lone pair) the shape is bent, not linear. Ignoring the lone pair and expecting a straight line is the trap.",
        "zh": "有 3 个电子域（2 个成键 + 1 个孤对），形状为弯曲形而非直线。忽略孤对而期望直线是陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A carbon atom that is $sp^2$ hybridized forms how many sigma bonds and how many pi bonds when part of a C=C double bond to another carbon and single bonds to two other atoms?",
        "zh": "一个 $sp^2$ 杂化的碳，与另一个碳形成 C=C 双键并与另外两个原子形成单键时，形成多少个 σ 键和多少个 π 键？"
      },
      "choices": [
        "4 sigma, 0 pi",
        "3 sigma, 1 pi",
        "2 sigma, 2 pi",
        "3 sigma, 2 pi"
      ],
      "answer": 1,
      "explanation": {
        "en": "An $sp^2$ carbon forms 3 sigma bonds from its three hybrid orbitals and 1 pi bond from the leftover unhybridized p orbital. Counting the double bond as two sigma bonds overcounts sigma and undercounts pi.",
        "zh": "$sp^2$ 碳由三个杂化轨道形成 3 个 σ 键，由剩余未杂化的 p 轨道形成 1 个 π 键。把双键算作两个 σ 键会多算 σ 而少算 π。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the ideal bond angle in a trigonal bipyramidal electron geometry between two equatorial positions?",
        "zh": "在三角双锥电子几何中，两个赤道位置之间的理想键角是多少？"
      },
      "choices": [
        "$90^{\\circ}$",
        "$109.5^{\\circ}$",
        "$120^{\\circ}$",
        "$180^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Equatorial positions in a trigonal bipyramid are $120^{\\circ}$ apart, while axial-to-equatorial angles are $90^{\\circ}$. Confusing the axial angle with the equatorial one gives the wrong value.",
        "zh": "三角双锥中赤道位置相隔 $120^{\\circ}$，而轴向与赤道间的角为 $90^{\\circ}$。把轴向角与赤道角混淆会得到错误值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the hybridization of the central atom in $XeF_4$, which is square planar with two lone pairs?",
        "zh": "$XeF_4$ 为平面正方形且有两个孤对，其中心原子的杂化方式是什么？"
      },
      "choices": [
        "$sp^3$",
        "$sp^3 d$",
        "$sp^2$",
        "$sp^3 d^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Xenon has 6 electron domains (4 bonds + 2 lone pairs), requiring $sp^3 d^2$ hybridization. Counting only the 4 bonds and ignoring the lone pairs underestimates the domain count.",
        "zh": "氙有 6 个电子域（4 个键 + 2 个孤对），需要 $sp^3 d^2$ 杂化。只算 4 个键而忽略孤对会低估域数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many electron domains (regions of electron density) surround the central atom in $NH_3$?",
        "zh": "$NH_3$ 中心原子周围有多少个电子域（电子密度区域）？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "Nitrogen has 3 bonding pairs and 1 lone pair, totaling 4 domains. Counting only the bonds and forgetting the lone pair undercounts.",
        "zh": "氮有 3 个成键对和 1 个孤对，共 4 个域。只算键而忘记孤对会少算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the ideal bond angle (in degrees) for a molecule with tetrahedral electron geometry and no lone pairs? Give the number only.",
        "zh": "对于四面体电子几何且无孤对的分子，理想键角（度）是多少？只写数字。"
      },
      "answer": "109.5",
      "accept": [
        "109.5",
        "109.5°",
        "109.5 degrees",
        "109.47",
        "109",
        "109.5度"
      ],
      "explanation": {
        "en": "Four equally spaced domains give $109.5^{\\circ}$. Using the $90^{\\circ}$ angle of a cube's face or the $120^{\\circ}$ trigonal angle would be wrong.",
        "zh": "四个等距分布的域给出 $109.5^{\\circ}$。使用立方体面的 $90^{\\circ}$ 或三角形的 $120^{\\circ}$ 都是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many sigma bonds does an $sp^3$ hybridized carbon atom in methane form? Give the number.",
        "zh": "甲烷中 $sp^3$ 杂化的碳原子形成多少个 σ 键？写出数字。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "The four $sp^3$ hybrid orbitals each form one sigma bond, for 4 total, with no pi bonds. Expecting a pi bond from a single-bonded carbon is a mistake.",
        "zh": "四个 $sp^3$ 杂化轨道各形成一个 σ 键，共 4 个，无 π 键。期望单键碳形成 π 键是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the molecule $C_2H_2$ (acetylene), how many pi bonds are between the two carbon atoms?",
        "zh": "在分子 $C_2H_2$（乙炔）中，两个碳原子之间有多少个 π 键？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "二",
        "两个"
      ],
      "explanation": {
        "en": "The carbon-carbon triple bond consists of 1 sigma bond and 2 pi bonds. Counting the triple bond as one pi plus two sigma reverses the correct breakdown.",
        "zh": "碳碳三键由 1 个 σ 键和 2 个 π 键组成。把三键算作一个 π 加两个 σ 会颠倒正确的分解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many lone pairs are on the central atom in $XeF_4$ (square planar geometry)?",
        "zh": "$XeF_4$（平面正方形几何）中心原子上有多少个孤对电子？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "二",
        "两个"
      ],
      "explanation": {
        "en": "Xenon has 6 domains total; 4 are bonds to fluorine, so 2 are lone pairs positioned trans to each other. Forgetting that square planar arises from 6 domains undercounts the lone pairs.",
        "zh": "氙共有 6 个域；4 个是与氟的键，因此有 2 个互为反式的孤对。忘记平面正方形来自 6 个域会少算孤对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the value of $n$ in the hybridization label $sp^n$ for a trigonal planar central atom like boron in $BF_3$? Give the number.",
        "zh": "对于像 $BF_3$ 中硼这样的三角平面中心原子，杂化标记 $sp^n$ 中的 $n$ 是多少？写出数字。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "二"
      ],
      "explanation": {
        "en": "Three electron domains require $sp^2$ hybridization, so $n = 2$. Counting the number of atoms instead of electron domains would give a wrong exponent.",
        "zh": "三个电子域需要 $sp^2$ 杂化，因此 $n = 2$。数原子数而非电子域数会得到错误的指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many total sigma bonds are in a molecule of ethene, $C_2H_4$?",
        "zh": "乙烯分子 $C_2H_4$ 中共有多少个 σ 键？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "five",
        "五"
      ],
      "explanation": {
        "en": "There are 4 C-H sigma bonds plus 1 C-C sigma bond (the double bond contributes one sigma and one pi), giving 5 sigma bonds. Counting the C=C as two sigma bonds overcounts.",
        "zh": "有 4 个 C-H σ 键加 1 个 C-C σ 键（双键贡献一个 σ 和一个 π），共 5 个 σ 键。把 C=C 算作两个 σ 键会多算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many electron domains does a central atom have if it is $sp^3 d^2$ hybridized?",
        "zh": "如果中心原子为 $sp^3 d^2$ 杂化，它有多少个电子域？"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "six",
        "六"
      ],
      "explanation": {
        "en": "$sp^3 d^2$ combines 1 s + 3 p + 2 d orbitals = 6 hybrid orbitals = 6 domains. Adding the superscripts incorrectly or forgetting the single s orbital gives the wrong count.",
        "zh": "$sp^3 d^2$ 结合 1 个 s + 3 个 p + 2 个 d 轨道 = 6 个杂化轨道 = 6 个域。错误地相加上标或忘记单个 s 轨道会得到错误计数。"
      }
    }
  ],
  "unit-2-compound-structure/ionic-metallic-bonding": [
    {
      "type": "mc",
      "question": {
        "en": "Which model best explains the electrical conductivity and malleability of metals?",
        "zh": "哪种模型最好地解释了金属的导电性和延展性？"
      },
      "choices": [
        "A sea of delocalized electrons surrounding metal cations",
        "A rigid lattice of neutral atoms",
        "Alternating positive and negative ions",
        "Shared localized electron pairs between two atoms"
      ],
      "answer": 0,
      "explanation": {
        "en": "The electron-sea model describes mobile delocalized electrons around fixed cations, explaining both conduction and malleability. Describing localized shared pairs is the covalent model, not the metallic one.",
        "zh": "电子海模型描述固定阳离子周围可移动的离域电子，能同时解释导电性和延展性。描述定域共享电子对的是共价模型，而非金属模型。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "According to Coulomb's law, which ionic compound is expected to have the highest lattice energy?",
        "zh": "根据库仑定律，下列哪种离子化合物预期具有最高的晶格能？"
      },
      "choices": [
        "$NaCl$",
        "$MgO$",
        "$KCl$",
        "$KBr$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$MgO$ has $2+$ and $2-$ ions and small radii, so its charge product is largest and its lattice energy highest. Compounds of only singly-charged ions have much weaker attractions.",
        "zh": "$MgO$ 含 $2+$ 和 $2-$ 离子且半径小，因此电荷乘积最大、晶格能最高。仅含单电荷离子的化合物吸引力弱得多。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why are ionic solids generally brittle?",
        "zh": "为什么离子固体通常是脆的？"
      },
      "choices": [
        "Delocalized electrons let layers slide freely",
        "They contain weak London dispersion forces only",
        "Shifting a layer aligns like charges, causing repulsion and fracture",
        "They melt before they can bend"
      ],
      "answer": 2,
      "explanation": {
        "en": "Displacing a layer brings ions of the same charge next to each other; the repulsion splits the crystal. Attributing brittleness to weak dispersion forces ignores the strong ionic lattice.",
        "zh": "错开一层会使相同电荷的离子相邻；排斥使晶体裂开。把脆性归因于弱色散力会忽略强离子晶格。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An interstitial alloy such as steel forms when:",
        "zh": "像钢这样的间隙合金在什么情况下形成？"
      },
      "choices": [
        "Two metals of very similar atomic radius replace each other",
        "Electrons become fully localized",
        "A metal reacts with a nonmetal to form ions",
        "Small atoms fit into the holes between larger metal atoms"
      ],
      "answer": 3,
      "explanation": {
        "en": "In an interstitial alloy, small atoms like carbon occupy gaps in the metal lattice. Two metals of similar size swapping positions describes a substitutional alloy instead.",
        "zh": "在间隙合金中，像碳这样的小原子占据金属晶格的空隙。两种尺寸相近的金属互换位置描述的是置换合金。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is characteristic of most ionic compounds?",
        "zh": "下列哪种性质是大多数离子化合物的特征？"
      },
      "choices": [
        "Conduct electricity when molten or dissolved",
        "Low melting points",
        "Conduct electricity as solids due to free electrons",
        "Soft and easily bent"
      ],
      "answer": 0,
      "explanation": {
        "en": "Ionic compounds conduct only when their ions are free to move—molten or in solution—not as rigid solids. Expecting solid ionic conduction confuses them with metals.",
        "zh": "离子化合物只有在离子可自由移动时（熔融或溶解）才导电，固态时不导电。期望固态离子导电会把它们与金属混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As you go across a series comparing $NaF$, $NaCl$, and $NaBr$, the lattice energy:",
        "zh": "在比较 $NaF$、$NaCl$ 和 $NaBr$ 的序列中，晶格能："
      },
      "choices": [
        "Increases as the halide gets larger",
        "Decreases as the halide gets larger",
        "Stays constant because charges are equal",
        "Depends only on sodium"
      ],
      "answer": 1,
      "explanation": {
        "en": "Larger halide ions increase the interionic distance, weakening attraction and lowering lattice energy. Assuming equal charges keep lattice energy constant ignores the distance term in Coulomb's law.",
        "zh": "较大的卤离子增大离子间距，削弱吸引力并降低晶格能。假设电荷相等就使晶格能不变会忽略库仑定律中的距离项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly compares a substitutional alloy to a pure metal?",
        "zh": "下列哪种说法正确地比较了置换合金与纯金属？"
      },
      "choices": [
        "The alloy always has a perfectly regular lattice",
        "Alloys cannot conduct electricity",
        "Different-sized atoms disrupt orderly layers, often making the alloy harder",
        "Alloys are always weaker than the pure metal"
      ],
      "answer": 2,
      "explanation": {
        "en": "Substituting atoms of a different size disrupts the smooth sliding of layers, so many alloys are harder and stronger than the pure metal. Claiming alloys can't conduct ignores their retained metallic bonding.",
        "zh": "用不同尺寸的原子置换会扰乱层的平滑滑动，因此许多合金比纯金属更硬更强。声称合金不能导电会忽略其保留的金属键。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pair of factors determines the magnitude of lattice energy according to Coulomb's law?",
        "zh": "根据库仑定律，哪对因素决定晶格能的大小？"
      },
      "choices": [
        "Number of neutrons and temperature",
        "Molar mass and color",
        "Electronegativity and boiling point only",
        "Ionic charges and the distance between ion centers"
      ],
      "answer": 3,
      "explanation": {
        "en": "Lattice energy scales with the product of the charges divided by the distance between ion centers. Molar mass and color have no direct role in the Coulombic attraction.",
        "zh": "晶格能与电荷乘积成正比、与离子中心间距成反比。摩尔质量和颜色在库仑吸引中没有直接作用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why can metals be drawn into wires (ductility)?",
        "zh": "为什么金属可以被拉成丝（延展性/韧性）？"
      },
      "choices": [
        "Layers of cations slide while the electron sea maintains bonding",
        "Ionic bonds break and reform as ions slide",
        "Covalent bonds rotate freely",
        "The metal melts slightly during drawing"
      ],
      "answer": 0,
      "explanation": {
        "en": "When cation layers shift, the mobile electron sea keeps holding them together, so the metal deforms without shattering. Explaining ductility with breaking ionic bonds applies the wrong bonding model.",
        "zh": "当阳离子层移动时，可移动的电子海仍将它们保持在一起，因此金属变形而不碎裂。用断裂的离子键解释韧性用错了成键模型。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which compound would you predict to have a higher melting point, and why?",
        "zh": "你会预测哪种化合物熔点更高，为什么？"
      },
      "choices": [
        "$NaCl$, because $Na^+$ is larger than $Mg^{2+}$",
        "$MgO$, because its ions carry higher charges and are small",
        "$NaCl$, because chlorine is heavier than oxygen",
        "Both are equal because both are ionic"
      ],
      "answer": 1,
      "explanation": {
        "en": "$MgO$ has $2+/2-$ ions with small radii, giving a much larger lattice energy and higher melting point. Judging by atomic mass rather than charge and radius leads to the wrong prediction.",
        "zh": "$MgO$ 含半径小的 $2+/2-$ 离子，晶格能大得多、熔点更高。按原子质量而非电荷和半径判断会导致错误预测。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a metallic solid, the 'delocalized electrons' originate from:",
        "zh": "在金属固体中，“离域电子”来源于："
      },
      "choices": [
        "The nuclei of the metal atoms",
        "Electrons gained from nonmetals",
        "The valence electrons released by the metal atoms",
        "The core (inner-shell) electrons"
      ],
      "answer": 2,
      "explanation": {
        "en": "Metal atoms release their loosely held valence electrons into a shared sea, leaving cations behind. Core electrons stay bound to their nuclei and are not part of the delocalized sea.",
        "zh": "金属原子将其松散结合的价电子释放到共享的电子海中，留下阳离子。核心电子仍束缚于原子核，不属于离域海。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best describes what happens to metallic properties when a nonmetal like carbon is added interstitially to iron to make steel?",
        "zh": "当把像碳这样的非金属间隙式加入铁制成钢时，金属性质会发生什么？下列哪项描述最佳？"
      },
      "choices": [
        "The steel loses all conductivity",
        "The steel becomes a molecular substance",
        "The iron becomes an ionic compound",
        "The carbon atoms restrict layer sliding, increasing hardness while conduction remains"
      ],
      "answer": 3,
      "explanation": {
        "en": "Interstitial carbon pins the iron layers so they cannot slide easily, raising hardness while the electron sea still conducts. Believing the metal turns ionic misreads the interstitial mechanism.",
        "zh": "间隙碳钉住铁层使其不易滑动，提高硬度，而电子海仍导电。认为金属变成离子化合物是对间隙机制的误读。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the charge (with sign) of the magnesium ion in the ionic compound $MgO$?",
        "zh": "离子化合物 $MgO$ 中镁离子的电荷（带符号）是多少？"
      },
      "answer": "+2",
      "accept": [
        "+2",
        "2",
        "2+",
        "+2.0",
        "positive 2",
        "正2",
        "正二"
      ],
      "explanation": {
        "en": "Magnesium loses its two valence electrons to form $Mg^{2+}$. Assuming it forms $+1$ like a group-1 metal ignores that magnesium is in group 2.",
        "zh": "镁失去两个价电子形成 $Mg^{2+}$。假设它像第一族金属那样形成 $+1$ 会忽略镁在第二族。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the formula of aluminum oxide, what is the whole-number subscript on aluminum? (Formula: $Al_xO_y$.)",
        "zh": "在氧化铝的化学式中，铝的整数下标是多少？（化学式：$Al_xO_y$。）"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "二"
      ],
      "explanation": {
        "en": "$Al^{3+}$ and $O^{2-}$ balance charges as $Al_2O_3$, so the subscript on aluminum is 2. Using a one-to-one ratio ignores the unequal charges that must cross over.",
        "zh": "$Al^{3+}$ 与 $O^{2-}$ 以 $Al_2O_3$ 平衡电荷，因此铝的下标是 2。使用一比一比例会忽略必须交叉的不等电荷。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two ionic solids have the same interionic distance. Solid A has ions of charge $+1$ and $-1$; Solid B has ions of charge $+2$ and $-2$. By what factor is B's lattice energy larger than A's (based on charge product)?",
        "zh": "两种离子固体有相同的离子间距。固体 A 的离子电荷为 $+1$ 和 $-1$；固体 B 的离子电荷为 $+2$ 和 $-2$。根据电荷乘积，B 的晶格能是 A 的多少倍？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "four",
        "四",
        "x4",
        "4x",
        "4倍"
      ],
      "explanation": {
        "en": "Lattice energy scales with the charge product: $A = 1 \\times 1 = 1$, $B = 2 \\times 2 = 4$, so B is $4\\times$ larger. Adding the charges to get 4 instead of multiplying happens to match here but is the wrong method and fails in general.",
        "zh": "晶格能与电荷乘积成正比：$A = 1 \\times 1 = 1$，$B = 2 \\times 2 = 4$，因此 B 大 $4$ 倍。用相加得 4 而非相乘在此恰好一致，但方法错误，通常会失败。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many valence electrons does a sodium atom release into the electron sea when forming $Na^+$?",
        "zh": "钠原子形成 $Na^+$ 时向电子海释放多少个价电子？"
      },
      "answer": "1",
      "accept": [
        "1",
        "1.0",
        "one",
        "一"
      ],
      "explanation": {
        "en": "Sodium (group 1) has one valence electron, which it delocalizes to become $Na^+$. Thinking it releases electrons from its filled inner shells overcounts.",
        "zh": "钠（第一族）有一个价电子，将其离域后变成 $Na^+$。认为它从填满的内层释放电子会多算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In one word, what type of alloy is formed when zinc atoms replace some copper atoms in brass (atoms of similar size occupying the same lattice sites)?",
        "zh": "用一个词说明：当锌原子取代黄铜中部分铜原子（尺寸相近的原子占据相同晶格位置）时形成哪种类型的合金？"
      },
      "answer": "substitutional",
      "accept": [
        "substitutional",
        "Substitutional",
        "substitution",
        "置换",
        "置换型",
        "取代型"
      ],
      "explanation": {
        "en": "Similar-sized atoms swapping lattice positions define a substitutional alloy. Calling it interstitial would require much smaller atoms squeezing into gaps.",
        "zh": "尺寸相近的原子交换晶格位置定义了置换合金。称其为间隙合金则需要小得多的原子挤入空隙。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the charge (with sign) on the oxide ion?",
        "zh": "氧离子（氧化物离子）的电荷（带符号）是多少？"
      },
      "answer": "-2",
      "accept": [
        "-2",
        "−2",
        "2-",
        "-2.0",
        "negative 2",
        "负2",
        "负二"
      ],
      "explanation": {
        "en": "Oxygen gains two electrons to complete its octet, forming $O^{2-}$. Assuming a $-1$ charge like a halide ignores that oxygen needs two more electrons.",
        "zh": "氧获得两个电子以完成八隅体，形成 $O^{2-}$。假设为 $-1$ 像卤离子那样会忽略氧还需要两个电子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the compound calcium chloride, how many chloride ions are needed per calcium ion for a neutral formula unit?",
        "zh": "在氯化钙化合物中，每个钙离子需要多少个氯离子才能构成中性的化学式单元？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "二",
        "两个"
      ],
      "explanation": {
        "en": "$Ca^{2+}$ needs two $Cl^{-}$ ions to balance charge, giving $CaCl_2$. Using one chloride would leave the formula with a net positive charge.",
        "zh": "$Ca^{2+}$ 需要两个 $Cl^{-}$ 离子来平衡电荷，得到 $CaCl_2$。只用一个氯离子会使化学式带净正电荷。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many valence electrons does an aluminum atom release into the electron sea when forming $Al^{3+}$?",
        "zh": "铝原子形成 $Al^{3+}$ 时向电子海释放多少个价电子？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "three",
        "三"
      ],
      "explanation": {
        "en": "Aluminum (group 13) has three valence electrons, all of which it delocalizes to become $Al^{3+}$. Assuming it releases only one electron like a group-1 metal undercounts.",
        "zh": "铝（第 13 族）有三个价电子，全部离域后变成 $Al^{3+}$。假设它像第一族金属那样只释放一个电子会少算。"
      }
    }
  ],
  "unit-3-properties-of-substances/polarity-imf": [
    {
      "type": "mc",
      "question": {
        "en": "Which intermolecular force is the strongest, given molecules of comparable molar mass?",
        "zh": "在摩尔质量相近的分子之间，下列哪种分子间作用力最强？"
      },
      "choices": [
        "Hydrogen bonding",
        "Dipole-dipole forces",
        "London dispersion forces",
        "Ion-induced dipole forces"
      ],
      "answer": 0,
      "explanation": {
        "en": "For molecules of similar mass, hydrogen bonding (an especially strong dipole-dipole interaction involving H bonded to N, O, or F) is strongest. A common error is assuming ordinary dipole-dipole always dominates; hydrogen bonding is a stronger special case, and dispersion forces are the weakest here.",
        "zh": "在质量相近时，氢键（H 与 N、O、F 相连时的特强偶极-偶极作用）最强。常见错误是认为普通偶极-偶极总是占主导；氢键是更强的特例，而色散力在此最弱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which molecule is nonpolar overall despite containing polar bonds?",
        "zh": "下列哪种分子虽含有极性键，但整体为非极性？"
      },
      "choices": [
        "$H_2O$",
        "$CO_2$",
        "$NH_3$",
        "$HF$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$CO_2$ is linear, so its two bond dipoles point in opposite directions and cancel, giving zero net dipole. The tempting mistake is judging polarity only from polar bonds; molecular geometry can make the dipoles cancel even when individual bonds are polar.",
        "zh": "$CO_2$ 为直线型，两个键偶极方向相反而相互抵消，净偶极为零。常见错误是仅凭极性键判断分子极性；即使单个键有极性，分子几何也可能使偶极相互抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As molar mass increases within a series of nonpolar molecules, the boiling point generally:",
        "zh": "在一系列非极性分子中，随着摩尔质量增大，沸点通常："
      },
      "choices": [
        "Stays constant",
        "Decreases",
        "Increases",
        "Drops to zero"
      ],
      "answer": 2,
      "explanation": {
        "en": "Larger molecules have more electrons and greater polarizability, strengthening London dispersion forces, so boiling point rises. A common misconception is that nonpolar means no attractions; dispersion forces always exist and grow with size.",
        "zh": "较大分子含更多电子、极化率更高，色散力更强，故沸点升高。常见误区是认为非极性就没有作用力；色散力始终存在并随分子增大而增强。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pair of substances can form hydrogen bonds with EACH OTHER?",
        "zh": "下列哪一对物质彼此之间能形成氢键？"
      },
      "choices": [
        "$CH_4$ and $CH_4$",
        "$Cl_2$ and $Cl_2$",
        "$CO_2$ and $CO_2$",
        "$CH_3OH$ and $H_2O$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Hydrogen bonding needs an H attached to N, O, or F on one molecule and a lone pair on N, O, or F on the other; methanol and water both qualify. The trap is thinking any molecule containing hydrogen can hydrogen bond, but methane’s C-H bonds do not.",
        "zh": "氢键需要一个分子上的 H 与 N、O、F 相连，另一分子上 N、O、F 带孤对电子；甲醇和水都符合。陷阱在于以为凡含氢的分子都能形成氢键，但甲烷的 C-H 键不能。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The property that measures an atom’s tendency to attract bonding electrons is called:",
        "zh": "衡量原子吸引成键电子倾向的性质称为："
      },
      "choices": [
        "Electronegativity",
        "Electron affinity",
        "Ionization energy",
        "Polarizability"
      ],
      "answer": 0,
      "explanation": {
        "en": "Electronegativity is the ability of a bonded atom to attract shared electrons; differences in it determine bond polarity. Ionization energy and electron affinity describe electron loss/gain for isolated atoms, not the pull within a bond.",
        "zh": "电负性是成键原子吸引共用电子的能力，其差值决定键的极性。电离能和电子亲和能描述孤立原子失去/获得电子，而非键内的吸引。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which bond is the MOST polar?",
        "zh": "下列哪个键的极性最强？"
      },
      "choices": [
        "$C-H$",
        "$H-F$",
        "$C-Cl$",
        "$C-C$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$H-F$ has the largest electronegativity difference of the choices, so it is most polar. A frequent slip is picking a bond just because it contains a halogen; the size of the electronegativity difference, not the mere presence of a halogen, sets polarity.",
        "zh": "$H-F$ 的电负性差最大，因此极性最强。常见错误是仅因含卤素就选某键；决定极性的是电负性差的大小，而非是否含卤素。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does $H_2O$ have a much higher boiling point than $H_2S$, even though sulfur is heavier than oxygen?",
        "zh": "为什么 $H_2O$ 的沸点远高于 $H_2S$，尽管硫比氧更重？"
      },
      "choices": [
        "$H_2S$ has more electrons",
        "Water is nonpolar",
        "Water has stronger hydrogen bonding",
        "$H_2S$ forms ionic bonds"
      ],
      "answer": 2,
      "explanation": {
        "en": "Oxygen is electronegative enough to give water strong hydrogen bonds, which sulfur is too weakly electronegative to provide, so water boils higher despite lower mass. The trap is assuming heavier always means higher boiling point; here hydrogen bonding outweighs the mass trend.",
        "zh": "氧的电负性足够强，使水形成强氢键，而硫电负性太弱无法形成，因此水虽质量较小却沸点更高。陷阱在于以为质量越大沸点越高；此处氢键的影响超过质量趋势。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which molecule has a permanent dipole moment?",
        "zh": "下列哪种分子具有永久偶极矩？"
      },
      "choices": [
        "$CCl_4$",
        "$BF_3$",
        "$SF_6$",
        "$CH_2Cl_2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$CH_2Cl_2$ has an asymmetric arrangement of C-Cl and C-H bonds, so the dipoles do not cancel and a net dipole remains. The symmetric molecules listed have bond dipoles that cancel to zero, a distinction easy to miss if you only count polar bonds.",
        "zh": "$CH_2Cl_2$ 中 C-Cl 与 C-H 键排列不对称，偶极不能抵消，留有净偶极。其余对称分子的键偶极相互抵消为零；若只数极性键就容易忽略这一区别。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Larger, more easily distorted electron clouds produce stronger dispersion forces because they have higher:",
        "zh": "更大、更易变形的电子云会产生更强的色散力，因为它们具有更高的："
      },
      "choices": [
        "Polarizability",
        "Electronegativity",
        "Ionization energy",
        "Lattice energy"
      ],
      "answer": 0,
      "explanation": {
        "en": "Polarizability measures how readily an electron cloud distorts to form a temporary dipole; higher polarizability means stronger dispersion forces. Electronegativity relates to bond polarity, not the momentary induced dipoles behind dispersion.",
        "zh": "极化率衡量电子云形成瞬时偶极的难易程度；极化率越高，色散力越强。电负性关乎键的极性，而非色散力背后的瞬时诱导偶极。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A bond is generally classified as nonpolar covalent when the electronegativity difference is approximately:",
        "zh": "当电负性差大约为多少时，键一般归类为非极性共价键？"
      },
      "choices": [
        "Greater than 1.7",
        "Less than 0.4",
        "Between 0.5 and 1.7",
        "Exactly 2.0"
      ],
      "answer": 1,
      "explanation": {
        "en": "A very small electronegativity difference (roughly under 0.4) means electrons are shared nearly equally, giving a nonpolar covalent bond. Larger differences give polar covalent or, when very large, ionic character—confusing these ranges is the usual error.",
        "zh": "电负性差很小（约小于 0.4）时电子几乎均等共用，为非极性共价键。差值较大时为极性共价键，差值很大时呈离子性；混淆这些范围是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best explains why noble gases like argon can be liquefied at low temperature?",
        "zh": "下列哪项最能解释为什么像氩这样的稀有气体能在低温下液化？"
      },
      "choices": [
        "They form hydrogen bonds",
        "They are polar molecules",
        "London dispersion forces act between atoms",
        "They have ionic attractions"
      ],
      "answer": 2,
      "explanation": {
        "en": "Even single noble-gas atoms experience London dispersion forces from instantaneous dipoles, which allow liquefaction when thermal energy is low enough. It is wrong to say noble gases have no intermolecular forces; dispersion forces are always present.",
        "zh": "即使是单个稀有气体原子也因瞬时偶极而存在色散力，当热能足够低时即可液化。认为稀有气体没有分子间作用力是错误的；色散力始终存在。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Between a polar molecule and a nonpolar molecule, the attraction that arises is called:",
        "zh": "极性分子与非极性分子之间产生的作用力称为："
      },
      "choices": [
        "Metallic bond",
        "Hydrogen bond",
        "Ionic bond",
        "Dipole-induced dipole force"
      ],
      "answer": 3,
      "explanation": {
        "en": "A polar molecule’s dipole distorts the electron cloud of a nearby nonpolar molecule, inducing a temporary dipole—a dipole-induced dipole interaction. Calling it a hydrogen bond is wrong because no H bonded to N, O, or F bridges the two.",
        "zh": "极性分子的偶极使邻近非极性分子的电子云变形，诱导出瞬时偶极，即偶极-诱导偶极作用。称其为氢键是错误的，因为没有与 N、O、F 相连的 H 连接两者。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many lone pairs are on the central oxygen atom in a water molecule ($H_2O$)?",
        "zh": "水分子（$H_2O$）中中心氧原子上有几对孤对电子？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "two",
        "两",
        "二",
        "两对",
        "two pairs"
      ],
      "explanation": {
        "en": "Oxygen has 6 valence electrons; two are used in the two O-H bonds, leaving 4 electrons = 2 lone pairs. Forgetting these lone pairs is why some predict a linear instead of bent shape for water.",
        "zh": "氧有 6 个价电子，其中两个用于两条 O-H 键，剩下 4 个电子即 2 对孤对电子。忽略这些孤对电子会导致把水错判为直线型而非弯曲型。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Give the approximate electronegativity difference for the bond in HCl. Use H = 2.1 and Cl = 3.0.",
        "zh": "求 HCl 中该键的电负性差（近似值）。取 H = 2.1，Cl = 3.0。"
      },
      "answer": "0.9",
      "accept": [
        "0.9",
        "0.90",
        ".9",
        "0.9 "
      ],
      "explanation": {
        "en": "The difference is $3.0 - 2.1 = 0.9$, indicating a polar covalent bond. Reversing the subtraction to get a negative number is a common slip; electronegativity difference is taken as the positive magnitude.",
        "zh": "差值为 $3.0 - 2.1 = 0.9$，表明为极性共价键。把减法方向弄反得到负数是常见错误；电负性差取正的大小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Rank these three forces from strongest (1) to weakest (3): hydrogen bonding, London dispersion, dipole-dipole. Enter the number you would assign to London dispersion.",
        "zh": "将下列三种作用力从最强(1)到最弱(3)排序：氢键、色散力、偶极-偶极。请输入你给色散力的编号。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "three",
        "三"
      ],
      "explanation": {
        "en": "For comparable molecules the order is hydrogen bonding (1) > dipole-dipole (2) > London dispersion (3), so dispersion is weakest and ranks 3. Treating all three as equal ignores that hydrogen bonding is a much stronger special dipole interaction.",
        "zh": "在分子相近时，强弱顺序为氢键(1) > 偶极-偶极(2) > 色散力(3)，故色散力最弱，编号为 3。把三者视为相等忽略了氢键是强得多的特殊偶极作用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the molecular geometry (shape) of $CO_2$? One word.",
        "zh": "$CO_2$ 的分子几何形状（形状）是什么？一个词。"
      },
      "answer": "linear",
      "accept": [
        "linear",
        "Linear",
        "直线",
        "直线形",
        "直线型"
      ],
      "explanation": {
        "en": "With two double bonds and no lone pairs on carbon, $CO_2$ is linear (180°), which lets its bond dipoles cancel. Predicting a bent shape wrongly assumes lone pairs on the central atom that carbon does not have here.",
        "zh": "碳上有两个双键且无孤对电子，$CO_2$ 为直线型（180°），使其键偶极相互抵消。错误地预测弯曲型是假设中心碳原子有其实并不存在的孤对电子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $NH_3$, how many hydrogen atoms are bonded to the central nitrogen?",
        "zh": "在 $NH_3$ 中，有几个氢原子与中心氮原子相连？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "three",
        "三"
      ],
      "explanation": {
        "en": "Ammonia has three N-H bonds plus one lone pair on nitrogen, giving a trigonal pyramidal, polar molecule. Counting four bonds confuses ammonia with the ammonium ion, which is a different species.",
        "zh": "氨有三条 N-H 键，氮上还有一对孤对电子，构成三角锥形的极性分子。数成四条键是把氨与铵离子混淆，二者是不同物种。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two molecules have equal masses; one is polar and one is nonpolar. Which one (enter the word polar or nonpolar) is expected to have the higher boiling point?",
        "zh": "两种分子质量相等，一个极性、一个非极性。预计哪一个（输入极性或非极性）沸点更高？"
      },
      "answer": "polar",
      "accept": [
        "polar",
        "Polar",
        "极性",
        "极性分子",
        "the polar one"
      ],
      "explanation": {
        "en": "At equal mass the polar molecule adds dipole-dipole attraction on top of dispersion, so it needs more energy to boil. Choosing the nonpolar one overlooks that the extra dipole-dipole force raises the boiling point.",
        "zh": "在质量相等时，极性分子在色散力之外还有偶极-偶极作用，因此沸腾需要更多能量。选非极性忽略了额外的偶极-偶极作用会提高沸点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For hydrogen bonding to occur, hydrogen must be directly bonded to nitrogen, oxygen, or which other element? Give the element symbol.",
        "zh": "要形成氢键，氢必须直接与氮、氧或哪种元素相连？给出元素符号。"
      },
      "answer": "F",
      "accept": [
        "F",
        "f",
        "fluorine",
        "Fluorine",
        "氟"
      ],
      "explanation": {
        "en": "Hydrogen bonding requires H bonded to the three most electronegative small atoms: N, O, or F. Naming chlorine is a common error—though electronegative, Cl is too large and diffuse to form true hydrogen bonds of the same strength.",
        "zh": "氢键要求 H 与三种电负性最强的小原子相连：N、O 或 F。答氯是常见错误——氯虽电负性较强，但原子太大、电子云太弥散，不能形成同等强度的真正氢键。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $C-O$ bond has electronegativities C = 2.5 and O = 3.5. What is the electronegativity difference?",
        "zh": "$C-O$ 键中碳的电负性为 2.5，氧为 3.5。电负性差是多少？"
      },
      "answer": "1.0",
      "accept": [
        "1.0",
        "1",
        "1.00",
        "1.0 "
      ],
      "explanation": {
        "en": "The difference is $3.5 - 2.5 = 1.0$, placing the bond in the polar covalent range. Writing the answer as a negative value reverses the subtraction; the difference is reported as a positive magnitude.",
        "zh": "差值为 $3.5 - 2.5 = 1.0$，属于极性共价键范围。写成负值是把减法方向弄反；电负性差以正的大小表示。"
      }
    }
  ],
  "unit-3-properties-of-substances/gases-and-kinetic-molecular-theory": [
    {
      "type": "mc",
      "question": {
        "en": "According to the ideal gas law $PV = nRT$, if temperature (in kelvin) doubles at constant volume and moles, the pressure will:",
        "zh": "根据理想气体定律 $PV = nRT$，在体积和物质的量不变时，若开尔文温度加倍，压强将："
      },
      "choices": [
        "Double",
        "Halve",
        "Stay the same",
        "Quadruple"
      ],
      "answer": 0,
      "explanation": {
        "en": "At constant V and n, pressure is directly proportional to absolute temperature, so doubling T doubles P. A common error is using Celsius; the proportionality only holds for kelvin, and quadrupling would require T to increase fourfold.",
        "zh": "在体积和物质的量不变时，压强与绝对温度成正比，故温度加倍则压强加倍。常见错误是使用摄氏度；该正比关系只对开尔文成立，压强变四倍需温度增至四倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement is a postulate of the kinetic molecular theory of ideal gases?",
        "zh": "下列哪项是理想气体分子运动论的基本假设？"
      },
      "choices": [
        "Gas particles strongly attract one another",
        "Collisions between gas particles are perfectly elastic",
        "Gas particles have large individual volumes",
        "Average kinetic energy is independent of temperature"
      ],
      "answer": 1,
      "explanation": {
        "en": "Ideal gas theory assumes collisions are perfectly elastic (no net kinetic energy is lost). The other statements are opposite to the postulates: particle volume and attractions are assumed negligible, and average kinetic energy is proportional to absolute temperature.",
        "zh": "理想气体理论假设碰撞完全弹性（不损失净动能）。其余说法与假设相反：粒子体积和相互吸引被视为可忽略，而平均动能与绝对温度成正比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At the same temperature, which gas has the highest average molecular speed?",
        "zh": "在相同温度下，下列哪种气体的平均分子速率最高？"
      },
      "choices": [
        "$O_2$",
        "$CO_2$",
        "$He$",
        "$N_2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At a given temperature all gases share the same average kinetic energy, so the lightest molecule (helium) moves fastest. Assuming a heavier gas moves faster reverses the relationship between mass and speed at fixed kinetic energy.",
        "zh": "在给定温度下所有气体平均动能相同，故最轻的分子（氦）运动最快。认为较重气体更快，是把在动能固定时质量与速率的关系搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Boyle’s law describes the relationship between which two variables at constant temperature and moles?",
        "zh": "波义耳定律描述在温度和物质的量不变时哪两个变量之间的关系？"
      },
      "choices": [
        "Volume and temperature",
        "Pressure and temperature",
        "Volume and moles",
        "Pressure and volume"
      ],
      "answer": 3,
      "explanation": {
        "en": "Boyle’s law states pressure and volume are inversely proportional at constant T and n. Pairing volume with temperature describes Charles’s law instead, a frequent mix-up of the named gas laws.",
        "zh": "波义耳定律指出在温度和物质的量不变时压强与体积成反比。把体积与温度配对描述的是查理定律，这是命名气体定律常见的混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Real gases deviate most from ideal behavior under which conditions?",
        "zh": "真实气体在下列哪种条件下与理想行为偏差最大？"
      },
      "choices": [
        "Low temperature and high pressure",
        "High temperature and high volume",
        "High temperature and low pressure",
        "Standard temperature and pressure"
      ],
      "answer": 0,
      "explanation": {
        "en": "At low temperature and high pressure, particles are close together, so their finite volume and intermolecular attractions matter, causing deviation. High temperature and low pressure keep particles far apart and fast, making behavior most nearly ideal.",
        "zh": "在低温高压下，粒子彼此靠近，其有限体积和分子间吸引变得显著，导致偏差。高温低压使粒子相距远且运动快，行为最接近理想。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a mixture of gases, the total pressure equals the sum of the partial pressures. This is:",
        "zh": "在混合气体中，总压等于各分压之和。这是："
      },
      "choices": [
        "Graham’s law",
        "Dalton’s law of partial pressures",
        "Avogadro’s law",
        "Boyle’s law"
      ],
      "answer": 1,
      "explanation": {
        "en": "Dalton’s law says each gas contributes a partial pressure and the total is their sum. Graham’s law instead concerns effusion rates versus molar mass, a different relationship entirely.",
        "zh": "道尔顿定律指出每种气体贡献一个分压，总压为它们之和。格拉罕定律则关乎有效扩散速率与摩尔质量的关系，是完全不同的规律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a sample of gas is cooled at constant pressure, its volume will:",
        "zh": "若在恒压下冷却一份气体，其体积将："
      },
      "choices": [
        "Increase",
        "Remain unchanged",
        "Decrease",
        "Become negative"
      ],
      "answer": 2,
      "explanation": {
        "en": "By Charles’s law, at constant pressure volume is directly proportional to absolute temperature, so cooling shrinks the volume. Expecting expansion on cooling reverses the direct proportionality between volume and kelvin temperature.",
        "zh": "根据查理定律，在恒压下体积与绝对温度成正比，故冷却使体积缩小。以为冷却会膨胀是把体积与开尔文温度的正比关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which curve best describes the distribution of molecular speeds in a gas as temperature increases?",
        "zh": "随着温度升高，气体分子速率分布曲线如何变化？"
      },
      "choices": [
        "It shifts toward lower speeds and gets taller",
        "It stays exactly the same",
        "It becomes a single vertical line",
        "It shifts toward higher speeds and broadens"
      ],
      "answer": 3,
      "explanation": {
        "en": "Higher temperature raises average kinetic energy, so the Maxwell-Boltzmann distribution shifts to higher speeds and flattens/broadens. Thinking the peak grows taller and moves left ignores that heating speeds molecules up, not down.",
        "zh": "温度升高使平均动能增大，麦克斯韦-玻尔兹曼分布向更高速率移动并变宽变平。以为峰值升高并左移，忽略了加热使分子加速而非减速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At STP (0°C, 1 atm), what volume does 1 mole of an ideal gas occupy?",
        "zh": "在标准状况（0°C，1 atm）下，1 摩尔理想气体占据多大体积？"
      },
      "choices": [
        "22.4 L",
        "11.2 L",
        "24.5 L",
        "44.8 L"
      ],
      "answer": 0,
      "explanation": {
        "en": "One mole of ideal gas occupies 22.4 L at STP (0°C, 1 atm). The value 24.5 L applies at 25°C, not STP, so using it here mixes up the two standard reference conditions.",
        "zh": "1 摩尔理想气体在标准状况（0°C，1 atm）下占 22.4 L。24.5 L 对应 25°C 而非标准状况，用在此处是混淆了两个标准参考条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Graham’s law states that the rate of effusion of a gas is inversely proportional to the square root of its:",
        "zh": "格拉罕定律指出气体有效扩散速率与其什么的平方根成反比？"
      },
      "choices": [
        "Temperature",
        "Molar mass",
        "Volume",
        "Pressure"
      ],
      "answer": 1,
      "explanation": {
        "en": "Lighter gases effuse faster because effusion rate is inversely proportional to the square root of molar mass. Attributing the rate to volume or pressure misidentifies the variable Graham’s law actually relates to mass.",
        "zh": "较轻气体有效扩散更快，因为有效扩散速率与摩尔质量的平方根成反比。将速率归因于体积或压强，是错认了格拉罕定律实际关联到质量的变量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a fixed amount of gas at constant temperature, if the volume is reduced to one-third, the pressure becomes:",
        "zh": "对于恒温下定量气体，若体积减为原来的三分之一，压强变为："
      },
      "choices": [
        "One-third of the original",
        "The same",
        "Three times the original",
        "Nine times the original"
      ],
      "answer": 2,
      "explanation": {
        "en": "Boyle’s law gives $P_1V_1 = P_2V_2$; cutting volume to one-third triples the pressure. Answering one-third treats pressure and volume as directly proportional, but they are inversely related.",
        "zh": "波义耳定律给出 $P_1V_1 = P_2V_2$；体积减为三分之一则压强变为三倍。答三分之一是把压强与体积当成正比，但它们实际成反比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The average kinetic energy of gas molecules depends only on:",
        "zh": "气体分子的平均动能仅取决于："
      },
      "choices": [
        "The identity of the gas",
        "The molar mass",
        "The pressure",
        "The absolute temperature"
      ],
      "answer": 3,
      "explanation": {
        "en": "Average kinetic energy is determined solely by absolute (kelvin) temperature, the same for all gases at a given T. Tying it to molar mass confuses kinetic energy (equal at equal T) with speed, which does depend on mass.",
        "zh": "平均动能仅由绝对（开尔文）温度决定，在给定温度下对所有气体相同。把它与摩尔质量挂钩，是将动能（同温相等）与确实依赖质量的速率混为一谈。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A gas occupies 4.0 L at 2.0 atm. At constant temperature, what is its volume (in L) when the pressure is changed to 1.0 atm?",
        "zh": "一份气体在 2.0 atm 下占 4.0 L。恒温下当压强变为 1.0 atm 时体积（升）是多少？"
      },
      "answer": "8.0",
      "accept": [
        "8.0",
        "8",
        "8.00",
        "8 L",
        "8.0 L"
      ],
      "explanation": {
        "en": "By Boyle’s law $P_1V_1 = P_2V_2$: $(2.0)(4.0) = (1.0)V_2$, so $V_2 = 8.0$ L. Dividing pressures the wrong way gives 2.0 L, which incorrectly shrinks the gas when pressure drops.",
        "zh": "由波义耳定律 $P_1V_1 = P_2V_2$：$(2.0)(4.0) = (1.0)V_2$，故 $V_2 = 8.0$ L。压强相除方向弄反会得到 2.0 L，即在压强下降时错误地使气体收缩。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert 27°C to kelvin. Give the value in K.",
        "zh": "将 27°C 换算为开尔文，给出以 K 为单位的数值。"
      },
      "answer": "300",
      "accept": [
        "300",
        "300.0",
        "300 K",
        "300K",
        "300.15"
      ],
      "explanation": {
        "en": "Kelvin = Celsius + 273, so $27 + 273 = 300$ K. Forgetting to convert and using 27 directly in gas-law calculations is a very common source of error.",
        "zh": "开尔文 = 摄氏度 + 273，故 $27 + 273 = 300$ K。忘记换算而在气体定律计算中直接用 27，是极常见的错误来源。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $PV = nRT$ with $R = 0.0821$ L·atm/(mol·K), find the pressure (in atm) of 1.0 mol of gas in a 2.0 L container at 300 K.",
        "zh": "用 $PV = nRT$（$R = 0.0821$ L·atm/(mol·K)），求 1.0 mol 气体在 2.0 L 容器中 300 K 时的压强（atm）。"
      },
      "answer": "12.3",
      "accept": [
        "12.3",
        "12.32",
        "12.315",
        "12",
        "12.3 atm"
      ],
      "explanation": {
        "en": "$P = nRT/V = (1.0)(0.0821)(300)/2.0 = 12.3$ atm. Leaving temperature in Celsius or forgetting to divide by volume are the typical mistakes that throw off the answer.",
        "zh": "$P = nRT/V = (1.0)(0.0821)(300)/2.0 = 12.3$ atm。温度未换算成开尔文或忘记除以体积，是导致结果出错的典型错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A mixture contains oxygen at 0.6 atm and nitrogen at 0.3 atm. What is the total pressure (in atm)?",
        "zh": "一混合气体中氧的分压为 0.6 atm，氮为 0.3 atm。总压（atm）是多少？"
      },
      "answer": "0.9",
      "accept": [
        "0.9",
        "0.90",
        ".9",
        "0.9 atm"
      ],
      "explanation": {
        "en": "Dalton’s law adds partial pressures: $0.6 + 0.3 = 0.9$ atm. Multiplying or averaging the partial pressures misapplies the law, which requires a simple sum.",
        "zh": "道尔顿定律将分压相加：$0.6 + 0.3 = 0.9$ atm。将分压相乘或取平均是误用了该定律，它要求的是简单求和。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A gas has a volume of 3.0 L at 200 K. At constant pressure, what volume (in L) will it occupy at 400 K?",
        "zh": "一份气体在 200 K 时体积为 3.0 L。恒压下在 400 K 时占多大体积（升）？"
      },
      "answer": "6.0",
      "accept": [
        "6.0",
        "6",
        "6.00",
        "6 L",
        "6.0 L"
      ],
      "explanation": {
        "en": "Charles’s law $V_1/T_1 = V_2/T_2$ gives $V_2 = 3.0 \\times (400/200) = 6.0$ L. Inverting the temperature ratio would wrongly shrink the gas as it is heated.",
        "zh": "查理定律 $V_1/T_1 = V_2/T_2$ 给出 $V_2 = 3.0 \\times (400/200) = 6.0$ L。把温度比取倒数会在加热时错误地使气体收缩。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many moles of gas are present in 44.8 L at STP (where 1 mol occupies 22.4 L)?",
        "zh": "在标准状况下（1 mol 占 22.4 L），44.8 L 气体含多少摩尔？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "2.00",
        "2 mol",
        "two"
      ],
      "explanation": {
        "en": "$44.8 / 22.4 = 2$ mol. Multiplying by 22.4 instead of dividing inflates the result and misuses the molar volume relationship.",
        "zh": "$44.8 / 22.4 = 2$ mol。乘以 22.4 而非相除会放大结果，误用了摩尔体积关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "According to Graham’s law, gas A is 4 times as heavy as gas B. Gas B effuses how many times faster than gas A? Give the number.",
        "zh": "根据格拉罕定律，气体 A 的质量是气体 B 的 4 倍。气体 B 的有效扩散速率是气体 A 的几倍？给出数字。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "2x",
        "2 times",
        "two"
      ],
      "explanation": {
        "en": "Rate ratio equals $\\sqrt{M_A/M_B} = \\sqrt{4} = 2$, so the lighter gas B effuses twice as fast. Using the mass ratio 4 directly forgets the required square root in Graham’s law.",
        "zh": "速率之比等于 $\\sqrt{M_A/M_B} = \\sqrt{4} = 2$，故较轻的气体 B 有效扩散快两倍。直接用质量比 4 是忘了格拉罕定律中所需的平方根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A gas at 1.0 atm and 300 K is heated to 600 K at constant volume. What is the new pressure (in atm)?",
        "zh": "一份气体在 1.0 atm、300 K 下于恒容中加热到 600 K。新压强（atm）是多少？"
      },
      "answer": "2.0",
      "accept": [
        "2.0",
        "2",
        "2.00",
        "2 atm",
        "2.0 atm"
      ],
      "explanation": {
        "en": "At constant volume $P_1/T_1 = P_2/T_2$, so $P_2 = 1.0 \\times (600/300) = 2.0$ atm. Adding the temperature change to the pressure instead of scaling by the kelvin ratio is a common misstep.",
        "zh": "在恒容下 $P_1/T_1 = P_2/T_2$，故 $P_2 = 1.0 \\times (600/300) = 2.0$ atm。把温度变化直接加到压强上，而非按开尔文比例缩放，是常见错误。"
      }
    }
  ],
  "unit-3-properties-of-substances/solutions-and-mixtures": [
    {
      "type": "mc",
      "question": {
        "en": "In a solution of salt water, the water is best described as the:",
        "zh": "在盐水溶液中，水最恰当地被描述为："
      },
      "choices": [
        "Solvent",
        "Solute",
        "Precipitate",
        "Colloid"
      ],
      "answer": 0,
      "explanation": {
        "en": "The solvent is the component present in the greater amount that does the dissolving; here water dissolves the salt. Calling water the solute reverses the roles—the solute is the dissolved substance present in lesser amount.",
        "zh": "溶剂是量较多、起溶解作用的组分；此处水溶解盐。把水称为溶质是把角色弄反了——溶质是被溶解、量较少的物质。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Molarity is defined as:",
        "zh": "摩尔浓度的定义是："
      },
      "choices": [
        "Moles of solute per kilogram of solvent",
        "Moles of solute per liter of solution",
        "Grams of solute per liter of solution",
        "Moles of solute per mole of solution"
      ],
      "answer": 1,
      "explanation": {
        "en": "Molarity is moles of solute divided by liters of solution. Using kilograms of solvent instead defines molality, a different concentration unit that is easy to confuse with molarity.",
        "zh": "摩尔浓度是溶质的摩尔数除以溶液的升数。改用溶剂的千克数定义的是质量摩尔浓度，这是另一种易与摩尔浓度混淆的浓度单位。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which separation technique best separates two liquids with different boiling points?",
        "zh": "分离两种沸点不同的液体，最适合用哪种分离技术？"
      },
      "choices": [
        "Filtration",
        "Chromatography",
        "Distillation",
        "Decanting"
      ],
      "answer": 2,
      "explanation": {
        "en": "Distillation exploits boiling-point differences: the lower-boiling liquid vaporizes first and is condensed separately. Filtration only separates solids from liquids, so it cannot distinguish two miscible liquids.",
        "zh": "蒸馏利用沸点差异：沸点较低的液体先汽化并被单独冷凝收集。过滤只能将固体与液体分开，无法区分两种互溶液体。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The general rule that predicts solubility is best summarized as:",
        "zh": "预测溶解性的一般规律最好概括为："
      },
      "choices": [
        "Opposites dissolve",
        "Acids dissolve bases",
        "Heavy dissolves light",
        "Like dissolves like"
      ],
      "answer": 3,
      "explanation": {
        "en": "\"Like dissolves like\" means polar solvents dissolve polar/ionic solutes and nonpolar solvents dissolve nonpolar solutes. Expecting opposites to dissolve each other reverses the rule and would wrongly predict oil mixing with water.",
        "zh": "\"相似相溶\"指极性溶剂溶解极性/离子溶质，非极性溶剂溶解非极性溶质。以为相反者相溶是把规律弄反，会错误地预测油与水互溶。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which mixture is homogeneous?",
        "zh": "下列哪种混合物是均相的？"
      },
      "choices": [
        "Salt dissolved in water",
        "Oil and vinegar",
        "Sand and water",
        "Iron filings and sulfur"
      ],
      "answer": 0,
      "explanation": {
        "en": "A salt-water solution has uniform composition throughout, making it homogeneous. Sand in water is heterogeneous because you can see distinct phases, a distinction based on uniformity rather than on whether mixing occurred.",
        "zh": "盐水溶液各处组成一致，故为均相。沙与水是非均相，因为能看到不同的相；判断依据是组成是否均一，而非是否发生了混合。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To make a solution more dilute, you can:",
        "zh": "要使溶液更稀，可以："
      },
      "choices": [
        "Add more solute",
        "Add more solvent",
        "Evaporate the solvent",
        "Cool the solution"
      ],
      "answer": 1,
      "explanation": {
        "en": "Adding solvent increases the volume while keeping moles of solute fixed, lowering the concentration. Adding more solute does the opposite, raising concentration, which is a common confusion of dilution with concentration.",
        "zh": "加入溶剂使体积增大而溶质摩尔数不变，从而降低浓度。加入更多溶质则相反地提高浓度，这是把稀释与浓缩混淆的常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Paper chromatography separates the components of a mixture based mainly on differences in their:",
        "zh": "纸色谱主要根据混合物各组分在下列哪方面的差异进行分离？"
      },
      "choices": [
        "Boiling points",
        "Densities",
        "Affinity for the stationary vs. mobile phase",
        "Electric charge only"
      ],
      "answer": 2,
      "explanation": {
        "en": "Components separate by how strongly they interact with the stationary paper versus the moving solvent; stronger mobile-phase affinity travels farther. Attributing the separation to boiling points confuses chromatography with distillation.",
        "zh": "各组分依据其与固定相（纸）和流动相（溶剂）相互作用的强弱而分离；对流动相亲和力更强者移动更远。将分离归因于沸点是把色谱与蒸馏混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solution that contains the maximum amount of dissolved solute at a given temperature is called:",
        "zh": "在给定温度下含有最大溶解量溶质的溶液称为："
      },
      "choices": [
        "Unsaturated",
        "Dilute",
        "Colloidal",
        "Saturated"
      ],
      "answer": 3,
      "explanation": {
        "en": "A saturated solution holds the maximum solute that can dissolve at that temperature, with any excess remaining undissolved. Calling it unsaturated is the opposite—an unsaturated solution could still dissolve more solute.",
        "zh": "饱和溶液在该温度下溶解了能溶解的最大量溶质，多余部分不再溶解。称其为不饱和恰好相反——不饱和溶液还能继续溶解更多溶质。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which technique would best separate a soluble salt from an insoluble sand?",
        "zh": "分离可溶性盐与不溶性沙，最适合用哪种技术？"
      },
      "choices": [
        "Dissolve in water, then filter and evaporate",
        "Distill the mixture directly",
        "Use chromatography paper",
        "Cool the dry mixture"
      ],
      "answer": 0,
      "explanation": {
        "en": "Dissolving lets salt pass into solution while sand stays solid; filtering removes the sand and evaporating recovers the salt. Distilling the dry mixture directly ignores that the salt must first be dissolved to separate it from sand.",
        "zh": "溶解使盐进入溶液而沙保持固体；过滤除去沙，蒸发回收盐。直接蒸馏干混合物忽略了必须先把盐溶解才能与沙分离。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When solid $NaCl$ dissolves in water, the ions become surrounded by water molecules in a process called:",
        "zh": "固体 $NaCl$ 溶于水时，离子被水分子包围，这一过程称为："
      },
      "choices": [
        "Sublimation",
        "Hydration (solvation)",
        "Combustion",
        "Filtration"
      ],
      "answer": 1,
      "explanation": {
        "en": "Water molecules orient around each ion, stabilizing it in solution—this is hydration (solvation). Sublimation is a solid-to-gas phase change and has nothing to do with ions dispersing in a solvent.",
        "zh": "水分子围绕每个离子定向排列，使其在溶液中稳定，这就是水合（溶剂化）。升华是固态直接变气态的相变，与离子在溶剂中分散无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Increasing temperature usually has what effect on the solubility of a solid solute in water?",
        "zh": "升高温度通常对固体溶质在水中的溶解度有什么影响？"
      },
      "choices": [
        "Always decreases it",
        "Has no effect",
        "Usually increases it",
        "Turns it into a gas"
      ],
      "answer": 2,
      "explanation": {
        "en": "For most solids, higher temperature increases solubility, allowing more solute to dissolve. Assuming it always decreases confuses solids with gases, whose solubility does drop as temperature rises.",
        "zh": "对大多数固体，温度升高会增大溶解度，使更多溶质溶解。以为总是减小是把固体与气体混淆，气体溶解度确实随温度升高而下降。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the dilution equation $M_1V_1 = M_2V_2$, this relationship holds because:",
        "zh": "稀释公式 $M_1V_1 = M_2V_2$ 成立的原因是："
      },
      "choices": [
        "The volume stays constant",
        "The solute evaporates",
        "The temperature must double",
        "The moles of solute stay constant"
      ],
      "answer": 3,
      "explanation": {
        "en": "Dilution adds solvent without changing the amount of solute, so moles ($M \\times V$) before equal moles after. Thinking volume is unchanged contradicts the very idea of dilution, which increases volume.",
        "zh": "稀释只加溶剂而不改变溶质的量，故稀释前后摩尔数（$M \\times V$）相等。以为体积不变与稀释本身矛盾，稀释会增大体积。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the molarity of a solution made by dissolving 2.0 mol of $NaCl$ in enough water to make 4.0 L of solution? Give M.",
        "zh": "将 2.0 mol $NaCl$ 溶于水配成 4.0 L 溶液，其摩尔浓度是多少？给出 M。"
      },
      "answer": "0.5",
      "accept": [
        "0.5",
        "0.50",
        ".5",
        "0.5 M",
        "0.5M"
      ],
      "explanation": {
        "en": "Molarity = moles/liters = $2.0/4.0 = 0.5$ M. Multiplying moles by volume instead of dividing gives 8 and misuses the definition of molarity.",
        "zh": "摩尔浓度 = 摩尔数/升数 = $2.0/4.0 = 0.5$ M。用摩尔数乘以体积而非相除会得到 8，误用了摩尔浓度的定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many moles of solute are in 2.0 L of a 3.0 M solution?",
        "zh": "2.0 L 的 3.0 M 溶液中含多少摩尔溶质？"
      },
      "answer": "6.0",
      "accept": [
        "6.0",
        "6",
        "6.00",
        "6 mol",
        "six"
      ],
      "explanation": {
        "en": "moles = M × V = $3.0 \\times 2.0 = 6.0$ mol. Dividing molarity by volume instead of multiplying reverses the relationship and gives the wrong amount.",
        "zh": "摩尔数 = M × V = $3.0 \\times 2.0 = 6.0$ mol。用摩尔浓度除以体积而非相乘会颠倒关系，得到错误的量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "You dilute 100 mL of 6.0 M HCl to a final volume of 600 mL. What is the new molarity (in M)?",
        "zh": "将 100 mL 的 6.0 M HCl 稀释到最终体积 600 mL。新摩尔浓度（M）是多少？"
      },
      "answer": "1.0",
      "accept": [
        "1.0",
        "1",
        "1.00",
        "1 M",
        "1.0 M"
      ],
      "explanation": {
        "en": "$M_2 = M_1V_1/V_2 = (6.0)(100)/600 = 1.0$ M. Forgetting that dilution lowers concentration, or dividing the wrong volumes, leads to an incorrectly high value.",
        "zh": "$M_2 = M_1V_1/V_2 = (6.0)(100)/600 = 1.0$ M。忘记稀释会降低浓度，或体积相除方向弄反，会得到偏高的错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solution has a mass of solute of 10 g dissolved in 90 g of water. What is the mass percent of the solute? Give the number (in %).",
        "zh": "某溶液中 10 g 溶质溶于 90 g 水中。溶质的质量百分数是多少？给出数值（%）。"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "10%",
        "10 percent",
        "10.0%"
      ],
      "explanation": {
        "en": "Mass percent = mass solute / total mass × 100 = $10/(10+90) \\times 100 = 10\\%$. Dividing by the solvent mass alone (90 g) instead of the total mass gives about 11%, a common denominator mistake.",
        "zh": "质量百分数 = 溶质质量/总质量 × 100 = $10/(10+90) \\times 100 = 10\\%$。仅除以溶剂质量（90 g）而非总质量会得到约 11%，是常见的分母错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What volume (in L) of a 0.25 M solution contains 0.50 mol of solute?",
        "zh": "0.25 M 溶液中含 0.50 mol 溶质需多大体积（升）？"
      },
      "answer": "2.0",
      "accept": [
        "2.0",
        "2",
        "2.00",
        "2 L",
        "2.0 L"
      ],
      "explanation": {
        "en": "V = moles/M = $0.50/0.25 = 2.0$ L. Multiplying moles by molarity instead of dividing gives 0.125 L and misapplies the molarity definition.",
        "zh": "V = 摩尔数/M = $0.50/0.25 = 2.0$ L。用摩尔数乘以摩尔浓度而非相除会得到 0.125 L，误用了摩尔浓度定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the separation technique that uses a filter to separate an insoluble solid from a liquid. One word.",
        "zh": "说出用滤纸将不溶固体从液体中分离的分离技术。一个词。"
      },
      "answer": "filtration",
      "accept": [
        "filtration",
        "Filtration",
        "filter",
        "过滤",
        "过滤法"
      ],
      "explanation": {
        "en": "Filtration passes the mixture through a filter that traps the insoluble solid while the liquid flows through. Naming distillation is wrong because distillation separates by boiling point, not by trapping a solid.",
        "zh": "过滤让混合物通过滤纸，滤纸截留不溶固体而液体流过。答蒸馏是错误的，因为蒸馏是按沸点分离，而非截留固体。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many grams of $NaCl$ (molar mass 58.5 g/mol) are needed to make 1.0 L of a 1.0 M solution? Give the number in grams.",
        "zh": "配制 1.0 L 的 1.0 M 溶液需要多少克 $NaCl$（摩尔质量 58.5 g/mol）？给出以克为单位的数值。"
      },
      "answer": "58.5",
      "accept": [
        "58.5",
        "58.5 g",
        "58.50",
        "58",
        "58.5g"
      ],
      "explanation": {
        "en": "moles needed = M × V = $1.0 \\times 1.0 = 1.0$ mol, then mass = $1.0 \\times 58.5 = 58.5$ g. Forgetting to multiply moles by molar mass leaves the answer as 1.0, mistaking moles for grams.",
        "zh": "所需摩尔数 = M × V = $1.0 \\times 1.0 = 1.0$ mol，再质量 = $1.0 \\times 58.5 = 58.5$ g。忘记用摩尔数乘以摩尔质量会把答案留作 1.0，误把摩尔当成克。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the term \"aqueous solution,\" what is the solvent? Give the substance name.",
        "zh": "在\"水溶液\"这一术语中，溶剂是什么？给出该物质名称。"
      },
      "answer": "water",
      "accept": [
        "water",
        "Water",
        "水",
        "H2O",
        "$H_2O$",
        "h2o"
      ],
      "explanation": {
        "en": "Aqueous means the solvent is water, in which the solute is dissolved. Assuming the solute is water confuses the dissolved substance with the dissolving medium.",
        "zh": "水溶液意味着溶剂是水，溶质溶解其中。以为溶质是水是把被溶解的物质与作溶解介质的物质混淆。"
      }
    }
  ],
  "unit-3-properties-of-substances/spectroscopy-and-light": [
    {
      "type": "mc",
      "question": {
        "en": "The energy of a photon is related to its frequency by which equation?",
        "zh": "光子的能量与其频率之间由哪个方程联系？"
      },
      "choices": [
        "$E = h\\nu$",
        "$E = mc^2$",
        "$E = \\frac{1}{2}mv^2$",
        "$E = kT$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Planck’s relation $E = h\\nu$ ties photon energy directly to frequency through Planck’s constant. Using $E = mc^2$ describes mass-energy equivalence, not the energy carried by a single photon of light.",
        "zh": "普朗克关系式 $E = h\\nu$ 通过普朗克常数将光子能量与频率直接联系。$E = mc^2$ 描述的是质能等价，而非单个光子所携带的能量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which type of electromagnetic radiation has the highest energy per photon?",
        "zh": "下列哪种电磁辐射的每个光子能量最高？"
      },
      "choices": [
        "Radio waves",
        "Ultraviolet",
        "Visible light",
        "Infrared"
      ],
      "answer": 1,
      "explanation": {
        "en": "Higher frequency (shorter wavelength) means higher photon energy, and ultraviolet has the highest frequency of these choices. Ranking radio waves as highest confuses long wavelength with high energy—they are inversely related.",
        "zh": "频率越高（波长越短）光子能量越高，紫外线在这些选项中频率最高。把无线电波排为最高是把长波长误当成高能量，二者实际成反比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In UV-Vis spectroscopy, the Beer-Lambert law states that absorbance is:",
        "zh": "在紫外-可见光谱中，比尔-朗伯定律指出吸光度与什么成正比？"
      },
      "choices": [
        "Independent of concentration",
        "Inversely proportional to concentration",
        "Directly proportional to concentration",
        "Proportional to the square of concentration"
      ],
      "answer": 2,
      "explanation": {
        "en": "Beer’s law $A = \\varepsilon b c$ makes absorbance directly proportional to concentration and path length. Treating it as inverse would wrongly predict that more concentrated samples absorb less light.",
        "zh": "比尔定律 $A = \\varepsilon b c$ 使吸光度与浓度和光程长度成正比。把它当成反比会错误地预测浓度越高吸光越少。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Infrared (IR) spectroscopy primarily probes which type of molecular motion?",
        "zh": "红外(IR)光谱主要探测哪种分子运动？"
      },
      "choices": [
        "Nuclear spin flips",
        "Electron transitions between orbitals",
        "Ionization of atoms",
        "Bond vibrations"
      ],
      "answer": 3,
      "explanation": {
        "en": "IR photons have the right energy to excite bond stretching and bending vibrations, which is why IR identifies functional groups. Assigning IR to electronic transitions confuses it with UV-Vis, which uses higher-energy photons.",
        "zh": "红外光子的能量恰好能激发键的伸缩和弯曲振动，这也是红外用于鉴别官能团的原因。把红外归于电子跃迁是与紫外-可见混淆，后者使用更高能量的光子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When an electron in an atom drops from a higher to a lower energy level, the atom:",
        "zh": "当原子中的电子从较高能级跃迁到较低能级时，原子会："
      },
      "choices": [
        "Emits a photon",
        "Absorbs a photon",
        "Gains mass",
        "Loses a proton"
      ],
      "answer": 0,
      "explanation": {
        "en": "Falling to a lower level releases the energy difference as an emitted photon, producing an emission line. Saying it absorbs a photon describes the reverse process, which raises an electron to a higher level.",
        "zh": "跃迁到较低能级会以发射光子的形式释放能量差，产生发射谱线。说它吸收光子描述的是相反过程，那会使电子跃迁到较高能级。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which relationship correctly connects the speed of light $c$, wavelength $\\lambda$, and frequency $\\nu$?",
        "zh": "下列哪个关系正确联系光速 $c$、波长 $\\lambda$ 和频率 $\\nu$？"
      },
      "choices": [
        "$c = \\lambda + \\nu$",
        "$c = \\lambda \\nu$",
        "$c = \\lambda / \\nu$",
        "$c = \\nu / \\lambda$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The speed of light equals wavelength times frequency, $c = \\lambda\\nu$, so the two are inversely related for fixed $c$. Adding wavelength and frequency has no physical meaning and mismatches units.",
        "zh": "光速等于波长乘频率，$c = \\lambda\\nu$，故在 $c$ 固定时二者成反比。把波长与频率相加没有物理意义且单位不匹配。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A colored solution appears red because it primarily:",
        "zh": "一种有色溶液呈红色，主要是因为它："
      },
      "choices": [
        "Emits red light from heat",
        "Absorbs red light strongly",
        "Absorbs green light and transmits red",
        "Reflects all wavelengths equally"
      ],
      "answer": 2,
      "explanation": {
        "en": "The observed color is the complement of the absorbed color; a red solution absorbs green light and transmits red. Assuming it absorbs the color you see reverses the relationship between absorbed and transmitted light.",
        "zh": "观察到的颜色是被吸收颜色的互补色；红色溶液吸收绿光而透过红光。以为它吸收你看到的颜色，是把被吸收光与透过光的关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A calibration curve in a Beer’s law experiment plots absorbance against:",
        "zh": "在比尔定律实验中，标准曲线以吸光度对什么作图？"
      },
      "choices": [
        "Wavelength of the lamp",
        "Time",
        "Temperature",
        "Concentration of known standards"
      ],
      "answer": 3,
      "explanation": {
        "en": "A calibration curve plots absorbance versus known concentrations, giving a line used to find an unknown’s concentration. Plotting against time or temperature ignores that Beer’s law relates absorbance to concentration.",
        "zh": "标准曲线以吸光度对已知浓度作图，得到用于求未知样浓度的直线。以时间或温度作图忽略了比尔定律联系的是吸光度与浓度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Photoelectron spectroscopy (PES) is used to measure:",
        "zh": "光电子能谱(PES)用于测量："
      },
      "choices": [
        "Binding energies of electrons in atoms",
        "Bond vibration frequencies",
        "Boiling points",
        "Solution concentrations"
      ],
      "answer": 0,
      "explanation": {
        "en": "PES measures the energy needed to remove electrons from different subshells, revealing their binding energies and electron configuration. Assigning it to bond vibrations confuses PES with IR spectroscopy.",
        "zh": "光电子能谱测量从不同亚层移除电子所需的能量，揭示其结合能和电子构型。把它归于键振动是与红外光谱混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As wavelength increases, the frequency of electromagnetic radiation:",
        "zh": "随着波长增大，电磁辐射的频率会："
      },
      "choices": [
        "Increases",
        "Decreases",
        "Stays constant",
        "Becomes zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $c = \\lambda\\nu$ is fixed, a longer wavelength means a lower frequency. Expecting frequency to rise with wavelength ignores their inverse relationship at constant speed of light.",
        "zh": "由于 $c = \\lambda\\nu$ 固定，波长越长频率越低。以为频率随波长增大而升高，忽略了在光速恒定时二者的反比关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a PES spectrum, a peak at higher binding energy corresponds to electrons that are:",
        "zh": "在光电子能谱中，结合能较高的峰对应于哪类电子？"
      },
      "choices": [
        "Farther from the nucleus",
        "In the outermost shell only",
        "Held more tightly, closer to the nucleus",
        "Not attracted to the nucleus"
      ],
      "answer": 2,
      "explanation": {
        "en": "Higher binding energy means the electron is held more tightly, typically in a subshell closer to the nucleus. Associating high binding energy with distant electrons reverses the trend—inner electrons are bound most strongly.",
        "zh": "结合能越高表示电子被束缚得越紧，通常处于更靠近原子核的亚层。把高结合能与远处电子联系起来是把趋势弄反——内层电子结合最紧。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The unique set of wavelengths a gaseous element emits when excited is called its:",
        "zh": "受激气态元素发射的一组特定波长称为其："
      },
      "choices": [
        "Continuous spectrum",
        "Absorption band",
        "Blackbody curve",
        "Line emission spectrum"
      ],
      "answer": 3,
      "explanation": {
        "en": "Excited atoms emit only discrete wavelengths corresponding to specific energy-level drops, producing a line emission spectrum that acts as a fingerprint. A continuous spectrum contains all wavelengths and does not identify an element.",
        "zh": "受激原子只发射与特定能级跃迁对应的离散波长，产生像指纹一样的线状发射光谱。连续光谱包含所有波长，无法用于鉴别元素。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the Beer-Lambert law $A = \\varepsilon b c$, if a solution with concentration 0.20 M gives an absorbance of 0.40, what absorbance is expected at 0.40 M (same path length)?",
        "zh": "在比尔-朗伯定律 $A = \\varepsilon b c$ 中，若浓度 0.20 M 的溶液吸光度为 0.40，则在 0.40 M（相同光程）时预期吸光度为多少？"
      },
      "answer": "0.80",
      "accept": [
        "0.80",
        "0.8",
        ".8",
        "0.8 ",
        "0.80 "
      ],
      "explanation": {
        "en": "Absorbance is proportional to concentration, so doubling concentration doubles absorbance: $0.40 \\times 2 = 0.80$. Keeping absorbance at 0.40 ignores the direct proportionality in Beer’s law.",
        "zh": "吸光度与浓度成正比，故浓度加倍则吸光度加倍：$0.40 \\times 2 = 0.80$。把吸光度保持为 0.40 忽略了比尔定律中的正比关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A photon has a frequency of $5.0 \\times 10^{14}$ Hz. Using $E = h\\nu$ with $h = 6.63 \\times 10^{-34}$ J·s, find its energy in joules. Give in scientific notation.",
        "zh": "一光子频率为 $5.0 \\times 10^{14}$ Hz。用 $E = h\\nu$（$h = 6.63 \\times 10^{-34}$ J·s），求其能量（焦耳）。用科学计数法表示。"
      },
      "answer": "3.3e-19",
      "accept": [
        "3.3e-19",
        "3.3 x 10^-19",
        "3.315e-19",
        "3.32e-19",
        "3.3E-19",
        "3.3*10^-19"
      ],
      "explanation": {
        "en": "$E = h\\nu = (6.63 \\times 10^{-34})(5.0 \\times 10^{14}) = 3.3 \\times 10^{-19}$ J. A common error is mishandling the exponents; adding $-34$ and $14$ gives $-20$ only if you forget the coefficient pushes it to $-19$.",
        "zh": "$E = h\\nu = (6.63 \\times 10^{-34})(5.0 \\times 10^{14}) = 3.3 \\times 10^{-19}$ J。常见错误是指数处理不当；将 $-34$ 与 $14$ 相加得 $-20$，忽略了系数使其进位到 $-19$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Light travels at $c = 3.0 \\times 10^8$ m/s. Find the frequency (in Hz) of light with wavelength $6.0 \\times 10^{-7}$ m. Give in scientific notation.",
        "zh": "光速 $c = 3.0 \\times 10^8$ m/s。求波长 $6.0 \\times 10^{-7}$ m 光的频率（Hz）。用科学计数法表示。"
      },
      "answer": "5.0e14",
      "accept": [
        "5.0e14",
        "5e14",
        "5.0 x 10^14",
        "5e+14",
        "5.0E14",
        "5*10^14"
      ],
      "explanation": {
        "en": "$\\nu = c/\\lambda = (3.0 \\times 10^8)/(6.0 \\times 10^{-7}) = 5.0 \\times 10^{14}$ Hz. Multiplying instead of dividing $c$ by $\\lambda$ gives a wrong exponent and misapplies $c = \\lambda\\nu$.",
        "zh": "$\\nu = c/\\lambda = (3.0 \\times 10^8)/(6.0 \\times 10^{-7}) = 5.0 \\times 10^{14}$ Hz。把 $c$ 与 $\\lambda$ 相乘而非相除会得到错误指数，误用了 $c = \\lambda\\nu$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample transmits 10% of incident light. Using $A = -\\log(T)$ with $T = 0.10$, what is the absorbance?",
        "zh": "某样品透过入射光的 10%。用 $A = -\\log(T)$（$T = 0.10$），吸光度是多少？"
      },
      "answer": "1.0",
      "accept": [
        "1.0",
        "1",
        "1.00",
        "1.0 ",
        "1 "
      ],
      "explanation": {
        "en": "$A = -\\log(0.10) = 1.0$. Forgetting the negative sign or the logarithm and simply using 0.10 as the absorbance misapplies the definition relating absorbance to transmittance.",
        "zh": "$A = -\\log(0.10) = 1.0$。忘记负号或对数，直接用 0.10 作吸光度，是误用了吸光度与透光率的定义关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Rank these by increasing photon energy: infrared, visible, ultraviolet. Which one has the lowest energy? Give the word.",
        "zh": "按光子能量递增排列：红外、可见、紫外。哪一个能量最低？给出该词。"
      },
      "answer": "infrared",
      "accept": [
        "infrared",
        "Infrared",
        "IR",
        "红外",
        "红外线"
      ],
      "explanation": {
        "en": "Infrared has the longest wavelength and lowest frequency of the three, so it carries the lowest photon energy. Choosing ultraviolet reverses the order, since UV is highest, not lowest, in energy.",
        "zh": "红外在三者中波长最长、频率最低，因此光子能量最低。选紫外把顺序弄反了，因为紫外能量最高而非最低。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In Beer’s law, a solution reads absorbance 0.60 at concentration 0.30 M. What is the molar absorptivity times path length $(\\varepsilon b)$? Give the value in $M^{-1}$.",
        "zh": "在比尔定律中，浓度 0.30 M 的溶液吸光度为 0.60。摩尔吸光系数与光程之积 $(\\varepsilon b)$ 是多少？给出以 $M^{-1}$ 为单位的值。"
      },
      "answer": "2.0",
      "accept": [
        "2.0",
        "2",
        "2.00",
        "2.0 ",
        "2 "
      ],
      "explanation": {
        "en": "From $A = \\varepsilon b c$, $\\varepsilon b = A/c = 0.60/0.30 = 2.0\\ M^{-1}$. Multiplying $A$ by $c$ instead of dividing reverses the rearrangement of Beer’s law.",
        "zh": "由 $A = \\varepsilon b c$，$\\varepsilon b = A/c = 0.60/0.30 = 2.0\\ M^{-1}$。把 $A$ 与 $c$ 相乘而非相除会颠倒比尔定律的变形。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Which spectroscopy technique (name it) is used to identify functional groups from bond vibrations? Give the common abbreviation.",
        "zh": "哪种光谱技术（命名）通过键振动来鉴别官能团？给出常用缩写。"
      },
      "answer": "IR",
      "accept": [
        "IR",
        "ir",
        "infrared",
        "Infrared",
        "infrared spectroscopy",
        "红外",
        "红外光谱"
      ],
      "explanation": {
        "en": "Infrared (IR) spectroscopy detects the vibrational energies of bonds, which are characteristic of specific functional groups. Naming UV-Vis is wrong because that technique probes electronic transitions, not vibrations.",
        "zh": "红外(IR)光谱检测键的振动能量，这些能量是特定官能团的特征。答紫外-可见是错误的，因为该技术探测的是电子跃迁而非振动。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If the concentration in a Beer’s law sample is tripled and path length is unchanged, by what factor does the absorbance change? Give the number.",
        "zh": "若比尔定律样品的浓度增至三倍而光程不变，吸光度变为原来的几倍？给出数字。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "3x",
        "three",
        "3 times"
      ],
      "explanation": {
        "en": "Since $A = \\varepsilon b c$ is linear in concentration, tripling $c$ triples $A$. Answering 9 wrongly treats absorbance as proportional to the square of concentration.",
        "zh": "由于 $A = \\varepsilon b c$ 对浓度成线性关系，浓度增至三倍则吸光度增至三倍。答 9 是错误地把吸光度当成与浓度平方成正比。"
      }
    }
  ],
  "unit-4-chemical-reactions/reactions-and-net-ionic-equations": [
    {
      "type": "mc",
      "question": {
        "en": "What is the net ionic equation for the reaction between aqueous $AgNO_3$ and aqueous $NaCl$?",
        "zh": "水溶液 $AgNO_3$ 与水溶液 $NaCl$ 反应的净离子方程式是什么？"
      },
      "choices": [
        "$Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$",
        "$Na^+(aq) + Cl^-(aq) \\rightarrow NaCl(s)$",
        "$Ag^+(aq) + NO_3^-(aq) \\rightarrow AgNO_3(s)$",
        "$Ag^+(aq) + Na^+(aq) \\rightarrow AgNa(s)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$AgCl$ is the insoluble product, so the spectator ions $Na^+$ and $NO_3^-$ are dropped, leaving $Ag^+ + Cl^- \\rightarrow AgCl(s)$. A common error is pairing ions into a soluble compound like $NaCl$ or writing $NaNO_3$; only the species that actually forms a precipitate belongs in the net ionic equation.",
        "zh": "$AgCl$ 是不溶产物，因此旁观离子 $Na^+$ 和 $NO_3^-$ 被去掉，得到 $Ag^+ + Cl^- \\rightarrow AgCl(s)$。常见错误是把离子配成可溶化合物（如 $NaCl$）或写成 $NaNO_3$；只有真正生成沉淀的物种才出现在净离子方程式中。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a complete ionic equation, which species are called 'spectator ions'?",
        "zh": "在完全离子方程式中，哪些物种被称为“旁观离子”？"
      },
      "choices": [
        "Ions that form the precipitate",
        "Ions that appear unchanged on both sides of the equation",
        "Ions that are oxidized",
        "Ions that gain a proton"
      ],
      "answer": 1,
      "explanation": {
        "en": "Spectator ions appear identically (same charge, same state) on both the reactant and product sides and are cancelled to give the net ionic equation. Confusing them with the ions that combine into the precipitate is the usual mistake—those precipitate-forming ions are exactly what remains after spectators are removed.",
        "zh": "旁观离子在反应物侧和产物侧以完全相同的形式（相同电荷、相同状态）出现，被消去后得到净离子方程式。把它们与结合成沉淀的离子混淆是常见错误——那些成沉淀的离子正是消去旁观离子后剩下的部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following compounds is INSOLUBLE in water (forms a precipitate)?",
        "zh": "下列哪种化合物在水中不溶（形成沉淀）？"
      },
      "choices": [
        "$NaNO_3$",
        "$KCl$",
        "$BaSO_4$",
        "$(NH_4)_2SO_4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Most sulfates are soluble, but $BaSO_4$ (along with $PbSO_4$, $CaSO_4$) is a notable exception and precipitates. All nitrates, all Group 1 salts, and all ammonium salts are soluble, so the temptation to pick a nitrate or potassium salt fails the solubility rules.",
        "zh": "大多数硫酸盐可溶，但 $BaSO_4$（以及 $PbSO_4$、$CaSO_4$）是显著例外并会沉淀。所有硝酸盐、所有第一族盐和所有铵盐都可溶，因此想选硝酸盐或钾盐是不符合溶解度规则的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When aqueous $HCl$ reacts with aqueous $NaOH$, what is the net ionic equation?",
        "zh": "水溶液 $HCl$ 与水溶液 $NaOH$ 反应时，净离子方程式是什么？"
      },
      "choices": [
        "$H^+(aq) + Cl^-(aq) \\rightarrow HCl(g)$",
        "$Na^+(aq) + Cl^-(aq) \\rightarrow NaCl(s)$",
        "$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$",
        "$H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "This is a strong acid–strong base neutralization; the only chemical change is $H^+ + OH^- \\rightarrow H_2O$. $Na^+$ and $Cl^-$ are spectators. Writing the full molecular equation is not a net ionic equation, and $NaCl$ stays dissolved (aqueous), so it does not form a solid.",
        "zh": "这是强酸—强碱中和反应；唯一的化学变化是 $H^+ + OH^- \\rightarrow H_2O$。$Na^+$ 和 $Cl^-$ 是旁观离子。写出完整的分子方程式不是净离子方程式，而 $NaCl$ 保持溶解（水溶液态），不会形成固体。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which type of reaction is $2H_2(g) + O_2(g) \\rightarrow 2H_2O(g)$?",
        "zh": "反应 $2H_2(g) + O_2(g) \\rightarrow 2H_2O(g)$ 属于哪种类型？"
      },
      "choices": [
        "Synthesis (combination) / combustion",
        "Acid–base neutralization",
        "Double replacement (metathesis)",
        "Precipitation"
      ],
      "answer": 0,
      "explanation": {
        "en": "Two elements combine into one compound, making it a synthesis reaction (also a combustion since it consumes $O_2$ and releases energy). It is not a double replacement, because there are no ion pairs swapping partners, and no precipitate or acid–base pair is involved.",
        "zh": "两种单质结合成一种化合物，属于化合（合成）反应（同时也是燃烧，因为消耗 $O_2$ 并放能）。它不是复分解反应，因为没有离子对交换配偶，也没有沉淀或酸碱对参与。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the reaction $Zn(s) + CuSO_4(aq) \\rightarrow ZnSO_4(aq) + Cu(s)$, which element is oxidized?",
        "zh": "在反应 $Zn(s) + CuSO_4(aq) \\rightarrow ZnSO_4(aq) + Cu(s)$ 中，哪种元素被氧化？"
      },
      "choices": [
        "Copper ($Cu$)",
        "Zinc ($Zn$)",
        "Sulfur ($S$)",
        "Oxygen ($O$)"
      ],
      "answer": 1,
      "explanation": {
        "en": "$Zn$ goes from oxidation state 0 to +2, losing electrons, so it is oxidized. $Cu^{2+}$ gains electrons and is reduced (a common mix-up: reduction is gain of electrons, not oxidation). Sulfur and oxygen in sulfate are unchanged spectators.",
        "zh": "$Zn$ 从氧化态 0 变为 +2，失去电子，因此被氧化。$Cu^{2+}$ 得到电子而被还原（常见混淆：还原是得电子，不是氧化）。硫酸根中的硫和氧不变，是旁观物种。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the net ionic equation when solid $CaCO_3$ reacts with aqueous $HCl$?",
        "zh": "固体 $CaCO_3$ 与水溶液 $HCl$ 反应时，净离子方程式是什么？"
      },
      "choices": [
        "$Ca^{2+}(aq) + 2Cl^-(aq) \\rightarrow CaCl_2(s)$",
        "$CO_3^{2-}(aq) + 2H^+(aq) \\rightarrow H_2O(l) + CO_2(g)$",
        "$CaCO_3(s) + 2H^+(aq) \\rightarrow Ca^{2+}(aq) + H_2O(l) + CO_2(g)$",
        "$CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + H_2CO_3(aq)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$CaCO_3$ is an insoluble solid, so it is written as a whole formula unit, not split into ions. $Cl^-$ is the spectator. Splitting the solid $CaCO_3$ into $CO_3^{2-}$ is wrong because only dissolved strong electrolytes are separated into ions.",
        "zh": "$CaCO_3$ 是不溶固体，因此写成整体化学式，不拆成离子。$Cl^-$ 是旁观离子。把固体 $CaCO_3$ 拆成 $CO_3^{2-}$ 是错误的，因为只有溶解的强电解质才拆成离子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pairing correctly identifies a strong electrolyte that should be written as separate ions in an ionic equation?",
        "zh": "下列哪一项正确指出应在离子方程式中拆成分离离子的强电解质？"
      },
      "choices": [
        "$H_2O(l)$",
        "$CH_3COOH(aq)$, acetic acid",
        "$AgCl(s)$",
        "$KNO_3(aq)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$KNO_3$ is a soluble ionic salt (strong electrolyte) and is written as $K^+ + NO_3^-$. Water is a molecular liquid, acetic acid is a weak acid that stays mostly molecular, and $AgCl$ is an insoluble solid—none of these are split into ions.",
        "zh": "$KNO_3$ 是可溶离子盐（强电解质），写成 $K^+ + NO_3^-$。水是分子液体，乙酸是弱酸大部分保持分子形式，$AgCl$ 是不溶固体——这些都不拆成离子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Mixing aqueous $Pb(NO_3)_2$ and aqueous $KI$ produces a bright yellow precipitate. What is it?",
        "zh": "混合水溶液 $Pb(NO_3)_2$ 和水溶液 $KI$ 生成亮黄色沉淀。它是什么？"
      },
      "choices": [
        "$PbI_2$",
        "$KNO_3$",
        "$K_2Pb$",
        "$I_2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$Pb^{2+}$ and $I^-$ combine to form insoluble $PbI_2$; $K^+$ and $NO_3^-$ stay dissolved as spectators. $KNO_3$ is soluble (not a precipitate), and no elemental iodine is formed—this is a precipitation, not a redox reaction.",
        "zh": "$Pb^{2+}$ 与 $I^-$ 结合生成不溶的 $PbI_2$；$K^+$ 和 $NO_3^-$ 保持溶解，是旁观离子。$KNO_3$ 可溶（不是沉淀），也没有生成单质碘——这是沉淀反应，不是氧化还原反应。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about a weak acid such as $HF$ in an ionic equation is correct?",
        "zh": "关于离子方程式中弱酸（如 $HF$）的说法，哪一项正确？"
      },
      "choices": [
        "It is written fully dissociated as $H^+ + F^-$",
        "It is written as the intact molecule $HF(aq)$",
        "It is treated as an insoluble solid",
        "It is always a spectator"
      ],
      "answer": 1,
      "explanation": {
        "en": "Weak acids ionize only slightly, so they are written as intact molecules, e.g. $HF(aq)$, not as separate ions. Treating a weak acid like a strong acid and splitting it into $H^+ + F^-$ is the classic error; only strong acids/bases and soluble salts are separated.",
        "zh": "弱酸只轻微电离，因此写成完整分子，如 $HF(aq)$，而不拆成分离离子。把弱酸当强酸拆成 $H^+ + F^-$ 是典型错误；只有强酸/强碱和可溶盐才拆分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the products of the double-replacement reaction between $BaCl_2(aq)$ and $Na_2SO_4(aq)$?",
        "zh": "$BaCl_2(aq)$ 与 $Na_2SO_4(aq)$ 之间的复分解反应产物是什么？"
      },
      "choices": [
        "$Ba(s) + Na_2Cl_2(aq)$",
        "$BaNa_2(s) + Cl_2SO_4(aq)$",
        "$BaSO_4(s) + 2NaCl(aq)$",
        "$BaSO_4(aq) + 2NaCl(s)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The cations swap anions: $Ba^{2+}$ pairs with $SO_4^{2-}$ to form insoluble $BaSO_4(s)$, while $Na^+$ and $Cl^-$ form soluble $NaCl(aq)$. Keeping the correct charges and recognizing which product is the solid (the sulfate, not $NaCl$) is essential.",
        "zh": "阳离子交换阴离子：$Ba^{2+}$ 与 $SO_4^{2-}$ 配对生成不溶的 $BaSO_4(s)$，而 $Na^+$ 与 $Cl^-$ 生成可溶的 $NaCl(aq)$。保持正确电荷并识别哪个产物是固体（是硫酸盐，不是 $NaCl$）很关键。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is a redox (oxidation–reduction) reaction rather than a simple metathesis reaction?",
        "zh": "下列哪一个是氧化还原反应，而不是简单的复分解反应？"
      },
      "choices": [
        "$AgNO_3(aq) + NaCl(aq) \\rightarrow AgCl(s) + NaNO_3(aq)$",
        "$HCl(aq) + KOH(aq) \\rightarrow KCl(aq) + H_2O(l)$",
        "$Na_2CO_3(aq) + CaCl_2(aq) \\rightarrow CaCO_3(s) + 2NaCl(aq)$",
        "$Mg(s) + 2HCl(aq) \\rightarrow MgCl_2(aq) + H_2(g)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$Mg$ goes from 0 to +2 and $H^+$ goes from +1 to 0 in $H_2$, so electrons are transferred—this is redox. The precipitation and neutralization reactions involve no change in oxidation numbers, so they are metathesis, not redox.",
        "zh": "$Mg$ 从 0 变为 +2，$H^+$ 从 +1 变为 $H_2$ 中的 0，发生电子转移——这是氧化还原反应。沉淀反应和中和反应中氧化数不变，因此是复分解反应，不是氧化还原。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the net ionic equation $Ag^+ + Cl^- \\rightarrow AgCl(s)$, what is the charge (as a signed integer) on the silver ion? (e.g. +2 or -1)",
        "zh": "在净离子方程式 $Ag^+ + Cl^- \\rightarrow AgCl(s)$ 中，银离子的电荷是多少（写为带符号整数，如 +2 或 -1）？"
      },
      "answer": "+1",
      "accept": [
        "1",
        "+1",
        "1+",
        "+1.0",
        "plus 1",
        "one",
        "positive 1"
      ],
      "explanation": {
        "en": "Silver forms $Ag^+$, a +1 cation. Chloride is $Cl^-$ (-1), and their charges cancel to give a neutral solid $AgCl$. A common slip is assuming silver is +2 like many transition metals; silver is characteristically +1.",
        "zh": "银形成 $Ag^+$，是 +1 阳离子。氯离子是 $Cl^-$（-1），两者电荷抵消生成中性固体 $AgCl$。常见失误是假设银像许多过渡金属一样是 +2；银的特征电荷是 +1。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many spectator ions are cancelled when writing the net ionic equation for $AgNO_3(aq) + NaCl(aq) \\rightarrow AgCl(s) + NaNO_3(aq)$? (Count each ion type once: $Na^+$ and $NO_3^-$.)",
        "zh": "在写出 $AgNO_3(aq) + NaCl(aq) \\rightarrow AgCl(s) + NaNO_3(aq)$ 的净离子方程式时，消去了多少个旁观离子（每种离子算一次：$Na^+$ 和 $NO_3^-$）？"
      },
      "answer": "2",
      "accept": [
        "2",
        "two",
        "2.0",
        "2 ions"
      ],
      "explanation": {
        "en": "$Na^+$ and $NO_3^-$ each appear unchanged on both sides, so 2 spectator ion types are removed, leaving $Ag^+ + Cl^- \\rightarrow AgCl(s)$. Forgetting that both the sodium and nitrate ions are spectators (counting only one) is the usual error.",
        "zh": "$Na^+$ 和 $NO_3^-$ 各自在两侧不变，因此去掉 2 种旁观离子，剩下 $Ag^+ + Cl^- \\rightarrow AgCl(s)$。忘记钠离子和硝酸根离子都是旁观离子（只数一个）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Balance the equation and give the coefficient in front of $HCl$: $Mg(s) + \\underline{\\ \\ }\\,HCl(aq) \\rightarrow MgCl_2(aq) + H_2(g)$",
        "zh": "配平方程式并给出 $HCl$ 前的系数：$Mg(s) + \\underline{\\ \\ }\\,HCl(aq) \\rightarrow MgCl_2(aq) + H_2(g)$"
      },
      "answer": "2",
      "accept": [
        "2",
        "two",
        "2.0"
      ],
      "explanation": {
        "en": "$MgCl_2$ needs 2 chlorine atoms, so 2 $HCl$ are required, which also supplies the 2 H atoms for $H_2$. Leaving the coefficient as 1 fails to balance both chlorine and hydrogen.",
        "zh": "$MgCl_2$ 需要 2 个氯原子，因此需要 2 个 $HCl$，这也同时提供 $H_2$ 所需的 2 个氢原子。把系数留作 1 会使氯和氢都不平衡。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the oxidation number of chromium in the dichromate ion $Cr_2O_7^{2-}$? (Signed integer.)",
        "zh": "重铬酸根离子 $Cr_2O_7^{2-}$ 中铬的氧化数是多少？（带符号整数。）"
      },
      "answer": "+6",
      "accept": [
        "6",
        "+6",
        "6+",
        "+6.0",
        "plus 6",
        "positive 6"
      ],
      "explanation": {
        "en": "Oxygen is -2, so 7 O contribute -14. For an overall -2 ion: $2x + (-14) = -2$, giving $2x = +12$, so $x = +6$. Forgetting the ion's own -2 charge (and using -14 = 0) would wrongly give +7.",
        "zh": "氧为 -2，7 个氧共 -14。对于整体 -2 的离子：$2x + (-14) = -2$，得 $2x = +12$，故 $x = +6$。忘记离子本身的 -2 电荷（用 -14 = 0）会错误得到 +7。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the missing product (formula) in this neutralization: $H_2SO_4(aq) + 2NaOH(aq) \\rightarrow Na_2SO_4(aq) + \\underline{\\ \\ }$",
        "zh": "填出该中和反应缺失的产物（化学式）：$H_2SO_4(aq) + 2NaOH(aq) \\rightarrow Na_2SO_4(aq) + \\underline{\\ \\ }$"
      },
      "answer": "2H2O",
      "accept": [
        "2H2O",
        "2 H2O",
        "2H_2O",
        "2H2O(l)",
        "2 water",
        "H2O",
        "water"
      ],
      "explanation": {
        "en": "Acid + base gives salt + water; the H from the acid and OH from the base form water, and balancing sulfuric acid's 2 H with 2 OH yields $2H_2O$. Writing just one water molecule leaves hydrogen and oxygen unbalanced.",
        "zh": "酸 + 碱生成盐 + 水；酸提供的 H 与碱提供的 OH 结合成水，硫酸的 2 个 H 与 2 个 OH 配平得到 $2H_2O$。只写一个水分子会使氢和氧不平衡。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the net ionic equation for a strong acid neutralizing a strong base, what single molecular product forms? (Give the formula.)",
        "zh": "强酸中和强碱的净离子方程式中，生成的唯一分子产物是什么？（写出化学式。）"
      },
      "answer": "H2O",
      "accept": [
        "H2O",
        "h2o",
        "H_2O",
        "H2O(l)",
        "water",
        "水",
        "liquid water"
      ],
      "explanation": {
        "en": "The net ionic equation is $H^+ + OH^- \\rightarrow H_2O$, so water is the only product; the salt ions are all spectators. Expecting the salt (like $NaCl$) as a product of the net ionic equation is the common misconception—it remains dissolved as spectator ions.",
        "zh": "净离子方程式为 $H^+ + OH^- \\rightarrow H_2O$，因此水是唯一产物；盐的离子都是旁观离子。以为盐（如 $NaCl$）是净离子方程式的产物是常见误解——它保持溶解为旁观离子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Give the balanced coefficient for $O_2$ in the complete combustion: $CH_4(g) + \\underline{\\ \\ }\\,O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$",
        "zh": "给出完全燃烧中 $O_2$ 的配平系数：$CH_4(g) + \\underline{\\ \\ }\\,O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$"
      },
      "answer": "2",
      "accept": [
        "2",
        "two",
        "2.0"
      ],
      "explanation": {
        "en": "The products contain 2 O (in $CO_2$) plus 2 O (in $2H_2O$) = 4 oxygen atoms, requiring 2 $O_2$. Balancing only the carbon and hydrogen but forgetting the water's oxygen leads to an incorrect coefficient of 1.",
        "zh": "产物含 2 个 O（在 $CO_2$ 中）加 2 个 O（在 $2H_2O$ 中）= 4 个氧原子，需要 2 个 $O_2$。只配平碳和氢却忘记水中的氧会得到错误系数 1。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using solubility rules, is $CaCO_3$ soluble or insoluble in water? Answer 'soluble' or 'insoluble'.",
        "zh": "根据溶解度规则，$CaCO_3$ 在水中可溶还是不溶？回答“可溶”或“不溶”。"
      },
      "answer": "insoluble",
      "accept": [
        "insoluble",
        "Insoluble",
        "INSOLUBLE",
        "不溶",
        "不可溶",
        "not soluble",
        "precipitate",
        "insol"
      ],
      "explanation": {
        "en": "Most carbonates are insoluble (exceptions are Group 1 and ammonium carbonates), so $CaCO_3$ precipitates. Assuming all calcium salts dissolve is the error—calcium carbonate (limestone) is famously insoluble.",
        "zh": "大多数碳酸盐不溶（例外是第一族和铵的碳酸盐），因此 $CaCO_3$ 沉淀。以为所有钙盐都溶解是错误的——碳酸钙（石灰石）以不溶而著称。"
      }
    }
  ],
  "unit-4-chemical-reactions/stoichiometry-and-titration": [
    {
      "type": "mc",
      "question": {
        "en": "How many moles are in 36.0 g of water ($H_2O$, molar mass 18.0 g/mol)?",
        "zh": "36.0 g 水（$H_2O$，摩尔质量 18.0 g/mol）中有多少摩尔？"
      },
      "choices": [
        "2.00 mol",
        "648 mol",
        "0.500 mol",
        "18.0 mol"
      ],
      "answer": 0,
      "explanation": {
        "en": "$n = \\frac{m}{M} = \\frac{36.0}{18.0} = 2.00$ mol. Dividing mass by molar mass is correct; multiplying them (giving 648) is the common reversal error, and 0.500 comes from dividing molar mass by mass.",
        "zh": "$n = \\frac{m}{M} = \\frac{36.0}{18.0} = 2.00$ mol。用质量除以摩尔质量是正确的；把两者相乘（得到 648）是常见的颠倒错误，而 0.500 来自用摩尔质量除以质量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $N_2 + 3H_2 \\rightarrow 2NH_3$, how many moles of $NH_3$ form from 6.0 mol of $H_2$ (with excess $N_2$)?",
        "zh": "对于 $N_2 + 3H_2 \\rightarrow 2NH_3$，6.0 mol $H_2$（$N_2$ 过量）能生成多少摩尔 $NH_3$？"
      },
      "choices": [
        "9.0 mol",
        "4.0 mol",
        "6.0 mol",
        "2.0 mol"
      ],
      "answer": 1,
      "explanation": {
        "en": "The mole ratio is $3\\,H_2 : 2\\,NH_3$, so $6.0 \\times \\frac{2}{3} = 4.0$ mol $NH_3$. Using the ratio upside down ($\\frac{3}{2}$) gives the incorrect 9.0; you must multiply by moles of product over moles of the given reactant.",
        "zh": "摩尔比为 $3\\,H_2 : 2\\,NH_3$，因此 $6.0 \\times \\frac{2}{3} = 4.0$ mol $NH_3$。把比例倒过来用（$\\frac{3}{2}$）会得到错误的 9.0；必须乘以产物摩尔数与所给反应物摩尔数之比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the molarity of a solution containing 0.50 mol of $NaCl$ dissolved in enough water to make 250 mL of solution?",
        "zh": "将 0.50 mol $NaCl$ 溶于水配成 250 mL 溶液，其摩尔浓度是多少？"
      },
      "choices": [
        "0.125 M",
        "125 M",
        "2.0 M",
        "0.50 M"
      ],
      "answer": 2,
      "explanation": {
        "en": "$M = \\frac{n}{V} = \\frac{0.50\\ \\text{mol}}{0.250\\ \\text{L}} = 2.0$ M. The key step is converting 250 mL to 0.250 L; using 250 (mL) directly in the denominator gives the wrong 0.002 M, and multiplying instead of dividing gives absurd values.",
        "zh": "$M = \\frac{n}{V} = \\frac{0.50\\ \\text{mol}}{0.250\\ \\text{L}} = 2.0$ M。关键步骤是把 250 mL 换算为 0.250 L；直接用 250（mL）作分母会得到错误的 0.002 M，而用乘法代替除法会得到荒谬的数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a titration, 25.0 mL of $HCl$ is neutralized by 30.0 mL of 0.100 M $NaOH$. What is the concentration of the $HCl$?",
        "zh": "在滴定中，25.0 mL $HCl$ 被 30.0 mL 0.100 M $NaOH$ 中和。$HCl$ 的浓度是多少？"
      },
      "choices": [
        "0.750 M",
        "0.0833 M",
        "0.100 M",
        "0.120 M"
      ],
      "answer": 3,
      "explanation": {
        "en": "Moles $NaOH = 0.0300\\ \\text{L} \\times 0.100 = 3.00\\times10^{-3}$ mol; 1:1 ratio means equal moles $HCl$, so $M = \\frac{3.00\\times10^{-3}}{0.0250} = 0.120$ M. Dividing by the base volume instead of the acid volume gives the incorrect 0.0833 M.",
        "zh": "$NaOH$ 摩尔数 $= 0.0300\\ \\text{L} \\times 0.100 = 3.00\\times10^{-3}$ mol；1:1 比例意味着 $HCl$ 摩尔数相等，故 $M = \\frac{3.00\\times10^{-3}}{0.0250} = 0.120$ M。用碱的体积而非酸的体积作分母会得到错误的 0.0833 M。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an acid–base titration, the equivalence point is the moment when:",
        "zh": "在酸碱滴定中，等当点（化学计量点）是指以下哪个时刻？"
      },
      "choices": [
        "Moles of added titrant exactly react with moles of analyte (stoichiometric amounts)",
        "The indicator is first added",
        "The solution first turns cloudy",
        "The pH equals exactly 7 in every titration"
      ],
      "answer": 0,
      "explanation": {
        "en": "The equivalence point is where the titrant has been added in the exact stoichiometric ratio to react completely with the analyte. It is not always at pH 7—only strong acid/strong base titrations give pH 7; weak acid or weak base titrations have equivalence points above or below 7.",
        "zh": "等当点是滴定剂加入量恰好按化学计量比与被测物完全反应的点。它并不总是在 pH 7——只有强酸/强碱滴定的等当点为 pH 7；弱酸或弱碱滴定的等当点在 7 之上或之下。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$2Al + 3Cl_2 \\rightarrow 2AlCl_3$. If 4.0 mol $Al$ reacts with 3.0 mol $Cl_2$, which is the limiting reactant?",
        "zh": "$2Al + 3Cl_2 \\rightarrow 2AlCl_3$。若 4.0 mol $Al$ 与 3.0 mol $Cl_2$ 反应，哪个是限制反应物？"
      },
      "choices": [
        "$Al$",
        "$Cl_2$",
        "$AlCl_3$",
        "Neither; they are exactly stoichiometric"
      ],
      "answer": 1,
      "explanation": {
        "en": "To react 4.0 mol $Al$ needs $4.0 \\times \\frac{3}{2} = 6.0$ mol $Cl_2$, but only 3.0 mol is present, so $Cl_2$ runs out first and limits the reaction. Simply comparing raw moles (4.0 vs 3.0) without the mole ratio is the classic trap.",
        "zh": "要与 4.0 mol $Al$ 反应需要 $4.0 \\times \\frac{3}{2} = 6.0$ mol $Cl_2$，但只有 3.0 mol，因此 $Cl_2$ 先耗尽并限制反应。仅比较原始摩尔数（4.0 与 3.0）而不用摩尔比是典型陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A reaction has a theoretical yield of 8.00 g but only 6.00 g is obtained. What is the percent yield?",
        "zh": "某反应理论产量为 8.00 g，但实际只得到 6.00 g。产率是多少？"
      },
      "choices": [
        "133%",
        "48.0%",
        "75.0%",
        "2.00%"
      ],
      "answer": 2,
      "explanation": {
        "en": "Percent yield $= \\frac{\\text{actual}}{\\text{theoretical}} \\times 100 = \\frac{6.00}{8.00} \\times 100 = 75.0\\%$. Flipping the ratio (theoretical over actual) gives 133%, which is impossible for a real yield since actual cannot exceed theoretical.",
        "zh": "产率 $= \\frac{\\text{实际}}{\\text{理论}} \\times 100 = \\frac{6.00}{8.00} \\times 100 = 75.0\\%$。把比例倒过来（理论除以实际）会得到 133%，这对真实产率是不可能的，因为实际不能超过理论。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many atoms of oxygen are in one formula unit of aluminum sulfate, $Al_2(SO_4)_3$?",
        "zh": "一个硫酸铝 $Al_2(SO_4)_3$ 化学式单元中含有多少个氧原子？"
      },
      "choices": [
        "4",
        "7",
        "3",
        "12"
      ],
      "answer": 3,
      "explanation": {
        "en": "The subscript 3 multiplies everything inside the parentheses: $4 \\times 3 = 12$ oxygen atoms. Counting only the 4 oxygens in a single sulfate (ignoring the multiplier 3) is the common mistake.",
        "zh": "括号外的下标 3 乘以括号内的全部：$4 \\times 3 = 12$ 个氧原子。只数单个硫酸根中的 4 个氧（忽略乘数 3）是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What volume of 0.200 M $HCl$ contains 0.0100 mol of $HCl$?",
        "zh": "0.200 M $HCl$ 中含有 0.0100 mol $HCl$ 的体积是多少？"
      },
      "choices": [
        "50.0 mL",
        "2.00 mL",
        "0.500 mL",
        "20.0 mL"
      ],
      "answer": 0,
      "explanation": {
        "en": "$V = \\frac{n}{M} = \\frac{0.0100}{0.200} = 0.0500$ L $= 50.0$ mL. Multiplying moles by molarity instead of dividing gives 0.00200 L, and forgetting to convert L to mL misses the final answer.",
        "zh": "$V = \\frac{n}{M} = \\frac{0.0100}{0.200} = 0.0500$ L $= 50.0$ mL。用摩尔数乘以摩尔浓度而不是相除会得到 0.00200 L，而忘记把 L 换算成 mL 则得不到最终答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a titration curve of a strong acid with a strong base, the pH at the equivalence point is approximately:",
        "zh": "在强酸用强碱滴定的滴定曲线中，等当点处的 pH 约为："
      },
      "choices": [
        "2",
        "7",
        "4",
        "11"
      ],
      "answer": 1,
      "explanation": {
        "en": "A strong acid and strong base form a neutral salt and water, so the equivalence-point pH is about 7. Assuming the equivalence point is always acidic (low pH) ignores that the neutralization is complete and the resulting salt does not hydrolyze.",
        "zh": "强酸与强碱生成中性盐和水，因此等当点 pH 约为 7。以为等当点总是酸性（低 pH）忽略了中和已完全、生成的盐不水解这一事实。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$. How many grams of $CO_2$ (44.0 g/mol) form from 1.00 mol of $C_3H_8$?",
        "zh": "$C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$。1.00 mol $C_3H_8$ 生成多少克 $CO_2$（44.0 g/mol）？"
      },
      "choices": [
        "44.0 g",
        "88.0 g",
        "132 g",
        "12.0 g"
      ],
      "answer": 2,
      "explanation": {
        "en": "1.00 mol $C_3H_8$ gives $3$ mol $CO_2$; mass $= 3 \\times 44.0 = 132$ g. Forgetting the 3:1 mole ratio and using only 1 mol of $CO_2$ (44.0 g) is the common error.",
        "zh": "1.00 mol $C_3H_8$ 生成 3 mol $CO_2$；质量 $= 3 \\times 44.0 = 132$ g。忘记 3:1 的摩尔比而只用 1 mol $CO_2$（44.0 g）是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which piece of glassware delivers a precisely measured, variable volume of titrant during a titration?",
        "zh": "滴定过程中，哪种玻璃器皿能精确测量并可变地放出滴定剂体积？"
      },
      "choices": [
        "Beaker",
        "Graduated cylinder",
        "Erlenmeyer flask",
        "Burette (buret)"
      ],
      "answer": 3,
      "explanation": {
        "en": "A burette has fine graduations and a stopcock to dispense and precisely read the volume of titrant added. A beaker and Erlenmeyer flask only hold liquid (the flask holds the analyte), and a graduated cylinder is far less precise than a burette.",
        "zh": "滴定管（buret）有精细刻度和活塞，可放出并精确读取所加滴定剂的体积。烧杯和锥形瓶只用于盛放液体（锥形瓶盛被测物），量筒的精度远低于滴定管。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many moles are in 88.0 g of $CO_2$ (molar mass 44.0 g/mol)? Give the number of moles.",
        "zh": "88.0 g $CO_2$（摩尔质量 44.0 g/mol）中有多少摩尔？给出摩尔数。"
      },
      "answer": "2.00",
      "accept": [
        "2",
        "2.0",
        "2.00",
        "2 mol",
        "2.0 mol",
        "2.00 mol"
      ],
      "explanation": {
        "en": "$n = \\frac{m}{M} = \\frac{88.0}{44.0} = 2.00$ mol. Multiplying instead of dividing (giving 3872) is the common reversal; always divide mass by molar mass.",
        "zh": "$n = \\frac{m}{M} = \\frac{88.0}{44.0} = 2.00$ mol。用乘法代替除法（得到 3872）是常见的颠倒错误；始终用质量除以摩尔质量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A titration requires 20.0 mL of 0.150 M $NaOH$ to neutralize an $HCl$ sample. How many moles of $HCl$ were present? (1:1 reaction.)",
        "zh": "滴定需要 20.0 mL 0.150 M $NaOH$ 来中和一份 $HCl$ 样品。存在多少摩尔 $HCl$？（1:1 反应。）"
      },
      "answer": "0.00300",
      "accept": [
        "0.003",
        "0.00300",
        "3.0e-3",
        "3e-3",
        "3.00e-3",
        "0.0030",
        "3.0 x 10^-3",
        "0.003 mol"
      ],
      "explanation": {
        "en": "Moles $NaOH = 0.0200\\ \\text{L} \\times 0.150\\ \\text{M} = 0.00300$ mol, and the 1:1 ratio means moles $HCl = 0.00300$. Using 20.0 mL as 20.0 L (forgetting the mL to L conversion) inflates the answer 1000-fold.",
        "zh": "$NaOH$ 摩尔数 $= 0.0200\\ \\text{L} \\times 0.150\\ \\text{M} = 0.00300$ mol，1:1 比例意味着 $HCl$ 摩尔数 $= 0.00300$。把 20.0 mL 当作 20.0 L（忘记 mL 到 L 换算）会使答案放大 1000 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the molar mass of $CaCO_3$ in g/mol? (Ca = 40.1, C = 12.0, O = 16.0.)",
        "zh": "$CaCO_3$ 的摩尔质量是多少 g/mol？（Ca = 40.1，C = 12.0，O = 16.0。）"
      },
      "answer": "100.1",
      "accept": [
        "100.1",
        "100",
        "100.0",
        "100.1 g/mol",
        "100 g/mol",
        "100.09"
      ],
      "explanation": {
        "en": "$40.1 + 12.0 + 3(16.0) = 40.1 + 12.0 + 48.0 = 100.1$ g/mol. Using only one oxygen (16.0 instead of 48.0) instead of the three in the formula is the frequent slip.",
        "zh": "$40.1 + 12.0 + 3(16.0) = 40.1 + 12.0 + 48.0 = 100.1$ g/mol。只用一个氧（16.0 而不是 48.0）而忽略化学式中的三个氧是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $2H_2 + O_2 \\rightarrow 2H_2O$, how many moles of $H_2O$ are produced from 5.0 mol of $O_2$ (excess $H_2$)?",
        "zh": "对于 $2H_2 + O_2 \\rightarrow 2H_2O$，5.0 mol $O_2$（$H_2$ 过量）生成多少摩尔 $H_2O$？"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "10 mol",
        "1.0e1",
        "1.0 x 10^1"
      ],
      "explanation": {
        "en": "The ratio is $1\\,O_2 : 2\\,H_2O$, so $5.0 \\times 2 = 10$ mol $H_2O$. Using a 1:1 ratio (giving 5.0) ignores that each $O_2$ produces two water molecules.",
        "zh": "比例为 $1\\,O_2 : 2\\,H_2O$，因此 $5.0 \\times 2 = 10$ mol $H_2O$。用 1:1 比例（得到 5.0）忽略了每个 $O_2$ 生成两个水分子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many atoms (or entities) are in 2.00 mol of a substance? Use Avogadro's number $6.02\\times10^{23}$ /mol. Give your answer in scientific notation.",
        "zh": "2.00 mol 某物质中含有多少个原子（或粒子）？使用阿伏伽德罗常数 $6.02\\times10^{23}$ /mol。用科学计数法给出答案。"
      },
      "answer": "1.20e24",
      "accept": [
        "1.20e24",
        "1.2e24",
        "1.204e24",
        "1.2 x 10^24",
        "1.20 x 10^24",
        "1.20E24",
        "12.04e23",
        "1.204e24"
      ],
      "explanation": {
        "en": "$2.00 \\times 6.02\\times10^{23} = 1.204\\times10^{24} \\approx 1.20\\times10^{24}$ entities. Forgetting to multiply by the number of moles and just reporting $6.02\\times10^{23}$ is the common oversight.",
        "zh": "$2.00 \\times 6.02\\times10^{23} = 1.204\\times10^{24} \\approx 1.20\\times10^{24}$ 个粒子。忘记乘以摩尔数而只报告 $6.02\\times10^{23}$ 是常见疏忽。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a titration, 0.00500 mol of a diprotic acid $H_2A$ reacts completely with $NaOH$. How many moles of $NaOH$ are required? ($H_2A + 2NaOH \\rightarrow Na_2A + 2H_2O$.)",
        "zh": "在滴定中，0.00500 mol 二元酸 $H_2A$ 与 $NaOH$ 完全反应。需要多少摩尔 $NaOH$？（$H_2A + 2NaOH \\rightarrow Na_2A + 2H_2O$。）"
      },
      "answer": "0.0100",
      "accept": [
        "0.01",
        "0.010",
        "0.0100",
        "1.0e-2",
        "1e-2",
        "0.01 mol",
        "1.00e-2"
      ],
      "explanation": {
        "en": "A diprotic acid needs 2 mol $NaOH$ per mol acid: $0.00500 \\times 2 = 0.0100$ mol. Treating it as a 1:1 (monoprotic) reaction and giving 0.00500 ignores the second acidic proton.",
        "zh": "二元酸每摩尔需要 2 mol $NaOH$：$0.00500 \\times 2 = 0.0100$ mol。把它当作 1:1（一元酸）反应而给出 0.00500 忽略了第二个酸性质子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the mass (in grams) of 0.250 mol of $NaOH$ (molar mass 40.0 g/mol)?",
        "zh": "0.250 mol $NaOH$（摩尔质量 40.0 g/mol）的质量是多少克？"
      },
      "answer": "10.0",
      "accept": [
        "10",
        "10.0",
        "10.00",
        "10 g",
        "10.0 g"
      ],
      "explanation": {
        "en": "$m = n \\times M = 0.250 \\times 40.0 = 10.0$ g. Dividing instead of multiplying (giving 0.00625) is the reversal error; to get mass from moles you multiply by molar mass.",
        "zh": "$m = n \\times M = 0.250 \\times 40.0 = 10.0$ g。用除法代替乘法（得到 0.00625）是颠倒错误；由摩尔数求质量应乘以摩尔质量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 500. mL solution contains 1.50 mol of $KCl$. What is its molarity (M)?",
        "zh": "500. mL 溶液含 1.50 mol $KCl$。其摩尔浓度是多少（M）？"
      },
      "answer": "3.00",
      "accept": [
        "3",
        "3.0",
        "3.00",
        "3 M",
        "3.0 M",
        "3.00 M"
      ],
      "explanation": {
        "en": "$M = \\frac{n}{V} = \\frac{1.50\\ \\text{mol}}{0.500\\ \\text{L}} = 3.00$ M. Using 500 mL directly (instead of 0.500 L) in the denominator gives an incorrect 0.00300 M.",
        "zh": "$M = \\frac{n}{V} = \\frac{1.50\\ \\text{mol}}{0.500\\ \\text{L}} = 3.00$ M。直接用 500 mL（而不是 0.500 L）作分母会得到错误的 0.00300 M。"
      }
    }
  ],
  "unit-5-kinetics/reaction-rates-and-rate-laws": [
    {
      "type": "mc",
      "question": {
        "en": "For the reaction $2\\,N_2O_5 \\rightarrow 4\\,NO_2 + O_2$, how does the rate of disappearance of $N_2O_5$ compare to the rate of appearance of $O_2$?",
        "zh": "对于反应 $2\\,N_2O_5 \\rightarrow 4\\,NO_2 + O_2$，$N_2O_5$ 的消失速率与 $O_2$ 的生成速率相比如何？"
      },
      "choices": [
        "$N_2O_5$ disappears twice as fast as $O_2$ appears",
        "They are equal",
        "$N_2O_5$ disappears four times as fast as $O_2$ appears",
        "$N_2O_5$ disappears half as fast as $O_2$ appears"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rate $= -\\frac{1}{2}\\frac{\\Delta[N_2O_5]}{\\Delta t} = \\frac{\\Delta[O_2]}{\\Delta t}$, so $N_2O_5$ is consumed at twice the rate $O_2$ forms (ratio 2:1). The tempting error is using the 4 for $NO_2$ instead of the coefficients relating $N_2O_5$ and $O_2$.",
        "zh": "速率 $= -\\frac{1}{2}\\frac{\\Delta[N_2O_5]}{\\Delta t} = \\frac{\\Delta[O_2]}{\\Delta t}$，因此 $N_2O_5$ 的消耗速率是 $O_2$ 生成速率的两倍（比例 2:1）。常见错误是用 $NO_2$ 的系数 4 而不是把 $N_2O_5$ 与 $O_2$ 联系起来的系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rate law is $\\text{rate} = k[A][B]^2$. What is the overall order of the reaction?",
        "zh": "某速率定律为 $\\text{rate} = k[A][B]^2$。该反应的总级数是多少？"
      },
      "choices": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answer": 1,
      "explanation": {
        "en": "Overall order is the sum of the exponents: $1 + 2 = 3$. A common mistake is to report only the highest single exponent (2) instead of adding all exponents.",
        "zh": "总级数是各指数之和：$1 + 2 = 3$。常见错误是只报告最高的单个指数（2），而不是把所有指数相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When the concentration of a reactant is doubled and the rate quadruples, the reaction is what order in that reactant?",
        "zh": "当某反应物浓度加倍而速率变为原来的四倍时，该反应对该反应物是几级？"
      },
      "choices": [
        "Zero order",
        "First order",
        "Second order",
        "Third order"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rate $\\propto [A]^n$; doubling gives a factor $2^n = 4$, so $n = 2$ (second order). The tempting error is thinking a 4x change means order 4; the factor is $2^n$, not $n$.",
        "zh": "速率 $\\propto [A]^n$；加倍得到因子 $2^n = 4$，故 $n = 2$（二级）。常见错误是认为速率变为四倍就意味着四级；变化因子是 $2^n$ 而不是 $n$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a first-order reaction, which plot gives a straight line?",
        "zh": "对于一级反应，下列哪种作图会得到直线？"
      },
      "choices": [
        "$[A]$ versus time",
        "$[A]^2$ versus time",
        "$1/[A]$ versus time",
        "$\\ln[A]$ versus time"
      ],
      "answer": 3,
      "explanation": {
        "en": "The integrated first-order law $\\ln[A]_t = -kt + \\ln[A]_0$ is linear in $\\ln[A]$ vs $t$. Plotting $[A]$ directly is linear for zero order, and $1/[A]$ is linear for second order.",
        "zh": "一级积分速率方程 $\\ln[A]_t = -kt + \\ln[A]_0$ 对 $\\ln[A]$ 与 $t$ 是线性的。直接画 $[A]$ 对零级是线性的，而 $1/[A]$ 对二级是线性的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the units of the rate constant $k$ for a first-order reaction?",
        "zh": "一级反应速率常数 $k$ 的单位是什么？"
      },
      "choices": [
        "$s^{-1}$",
        "$M \\cdot s^{-1}$",
        "$M^{-1} s^{-1}$",
        "$M^{-2} s^{-1}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For overall order $n$, units of $k$ are $M^{1-n} s^{-1}$; with $n=1$ this is $M^{0}s^{-1} = s^{-1}$. Confusing this with $M\\cdot s^{-1}$ is the zero-order result.",
        "zh": "对于总级数 $n$，$k$ 的单位为 $M^{1-n} s^{-1}$；当 $n=1$ 时为 $M^{0}s^{-1} = s^{-1}$。把它误认为 $M\\cdot s^{-1}$ 是零级的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The half-life of a first-order reaction is $t_{1/2} = \\frac{0.693}{k}$. Which statement about this half-life is true?",
        "zh": "一级反应的半衰期为 $t_{1/2} = \\frac{0.693}{k}$。关于该半衰期，哪项陈述正确？"
      },
      "choices": [
        "It depends on the initial concentration",
        "It is constant, independent of concentration",
        "It increases as the reaction proceeds",
        "It equals $k$ divided by 0.693"
      ],
      "answer": 1,
      "explanation": {
        "en": "For first order, $t_{1/2}$ has no concentration term, so it stays constant throughout. The tempting idea is that lower concentration should slow things and lengthen the half-life, but that concentration dependence appears only in zero- and second-order half-lives.",
        "zh": "对一级反应，$t_{1/2}$ 中没有浓度项，因此始终保持不变。常见的想法是浓度更低会减慢反应并延长半衰期，但这种浓度依赖只出现在零级和二级的半衰期中。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is the best definition of the instantaneous rate of a reaction?",
        "zh": "下列哪项最能定义反应的瞬时速率？"
      },
      "choices": [
        "The average rate over the entire reaction",
        "The rate at $t = 0$ only",
        "The slope of the tangent to the concentration-time curve at a specific instant",
        "The change in concentration divided by total time"
      ],
      "answer": 2,
      "explanation": {
        "en": "Instantaneous rate is the slope of the tangent line to the concentration-vs-time curve at one moment. The average rate (total change over total time) uses a secant line, not the tangent, and only matches at very short intervals.",
        "zh": "瞬时速率是浓度-时间曲线在某一时刻切线的斜率。平均速率（总变化除以总时间）用的是割线而不是切线，只有在极短的时间间隔内才与之接近。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the method of initial rates, why are rates measured at the very start of the reaction?",
        "zh": "在初速率法中，为什么要在反应最开始时测量速率？"
      },
      "choices": [
        "Because the temperature is highest then",
        "Because concentrations are always zero at the start",
        "Because $k$ is largest at the start",
        "Because reverse reactions and product buildup are negligible then"
      ],
      "answer": 3,
      "explanation": {
        "en": "At the very beginning, products have not accumulated and the reverse reaction is negligible, so the measured rate reflects only the forward rate law. The rate constant $k$ does not change during the run, so a changing-$k$ idea is a misconception.",
        "zh": "在最开始时，产物尚未积累，逆反应可忽略，因此测得的速率只反映正向速率定律。速率常数 $k$ 在反应过程中不变，因此认为 $k$ 会改变是一种误解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a zero-order reaction, how does the rate depend on reactant concentration?",
        "zh": "对于零级反应，速率如何依赖于反应物浓度？"
      },
      "choices": [
        "Rate is independent of concentration",
        "Rate is proportional to concentration",
        "Rate is proportional to concentration squared",
        "Rate is inversely proportional to concentration"
      ],
      "answer": 0,
      "explanation": {
        "en": "Zero order means $\\text{rate} = k[A]^0 = k$, a constant independent of $[A]$. Thinking the rate must rise with concentration is the first-order intuition, which does not apply when the exponent is zero.",
        "zh": "零级意味着 $\\text{rate} = k[A]^0 = k$，是与 $[A]$ 无关的常数。认为速率必然随浓度升高是一级的直觉，当指数为零时并不适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Doubling $[A]$ leaves the rate unchanged, while doubling $[B]$ doubles the rate. What is the rate law?",
        "zh": "把 $[A]$ 加倍时速率不变，而把 $[B]$ 加倍时速率加倍。速率定律是什么？"
      },
      "choices": [
        "$\\text{rate} = k[A][B]$",
        "$\\text{rate} = k[B]$",
        "$\\text{rate} = k[A]^2[B]$",
        "$\\text{rate} = k[A][B]^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "No change when $[A]$ doubles means order 0 in $A$; a doubling when $[B]$ doubles means order 1 in $B$. So rate $= k[B]$. Including $[A]$ with an exponent ignores that $A$ has zero order.",
        "zh": "$[A]$ 加倍时速率不变意味着对 $A$ 是零级；$[B]$ 加倍时速率加倍意味着对 $B$ 是一级。所以速率 $= k[B]$。把带指数的 $[A]$ 写入忽略了 $A$ 是零级。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly distinguishes the rate constant $k$ from the reaction rate?",
        "zh": "下列哪项正确区分了速率常数 $k$ 与反应速率？"
      },
      "choices": [
        "$k$ changes as concentrations change, but the rate does not",
        "$k$ and the rate are the same quantity",
        "The rate depends on concentrations, but $k$ depends only on temperature (and catalyst)",
        "The rate is always equal to $k$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The rate varies with reactant concentrations, whereas $k$ is fixed at a given temperature (changed only by temperature or a catalyst). Treating them as equal ignores the concentration terms in the rate law.",
        "zh": "速率随反应物浓度变化，而 $k$ 在给定温度下固定（只因温度或催化剂而改变）。把二者等同起来忽略了速率定律中的浓度项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The rate law for a reaction cannot be predicted from the balanced equation because:",
        "zh": "无法从配平方程式预测反应的速率定律，因为："
      },
      "choices": [
        "The coefficients are always wrong",
        "All reactions are first order",
        "Rate laws never contain concentrations",
        "The rate law must be determined experimentally, reflecting the mechanism"
      ],
      "answer": 3,
      "explanation": {
        "en": "Exponents in a rate law come from experiment and reflect the reaction mechanism, not the stoichiometric coefficients. Assuming exponents equal coefficients only works for a single elementary step, not overall reactions.",
        "zh": "速率定律中的指数来自实验，反映反应机理，而不是化学计量系数。假设指数等于系数只对单一基元步骤成立，对总反应并不成立。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A reaction is first order in $A$ and second order in $B$. What is the overall reaction order? (Give a whole number.)",
        "zh": "某反应对 $A$ 是一级、对 $B$ 是二级。总反应级数是多少？（给出整数。）"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "three",
        "3rd",
        "third"
      ],
      "explanation": {
        "en": "Overall order is the sum of individual orders: $1 + 2 = 3$. Reporting only 2 forgets to add the first-order term in $A$.",
        "zh": "总级数是各分级数之和：$1 + 2 = 3$。只报告 2 忘记加上对 $A$ 的一级项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A first-order reaction has $k = 0.0231\\ s^{-1}$. What is its half-life in seconds? (Use $t_{1/2} = 0.693/k$; round to nearest whole second.)",
        "zh": "某一级反应 $k = 0.0231\\ s^{-1}$。其半衰期为多少秒？（用 $t_{1/2} = 0.693/k$；四舍五入到整数秒。）"
      },
      "answer": "30",
      "accept": [
        "30.0",
        "30 s",
        "30s",
        "30 seconds",
        "~30"
      ],
      "explanation": {
        "en": "$t_{1/2} = 0.693/0.0231 = 30\\ s$. Multiplying $0.693 \\times k$ instead of dividing gives a tiny wrong number; half-life is inversely related to $k$.",
        "zh": "$t_{1/2} = 0.693/0.0231 = 30\\ s$。用 $0.693 \\times k$ 相乘而不是相除会得到一个极小的错误数值；半衰期与 $k$ 成反比。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\text{rate} = k[A]^2$ with $k = 0.50\\ M^{-1}s^{-1}$ and $[A] = 2.0\\ M$, what is the rate in $M/s$?",
        "zh": "对于 $\\text{rate} = k[A]^2$，$k = 0.50\\ M^{-1}s^{-1}$ 且 $[A] = 2.0\\ M$，速率是多少 $M/s$？"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.00",
        "2 M/s",
        "2.0 M/s",
        "2.0M/s"
      ],
      "explanation": {
        "en": "$\\text{rate} = 0.50 \\times (2.0)^2 = 0.50 \\times 4.0 = 2.0\\ M/s$. Forgetting to square the concentration gives $1.0$ instead of $2.0$.",
        "zh": "$\\text{rate} = 0.50 \\times (2.0)^2 = 0.50 \\times 4.0 = 2.0\\ M/s$。忘记把浓度平方会得到 $1.0$ 而不是 $2.0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the reaction $N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3$, if $H_2$ is consumed at $0.030\\ M/s$, at what rate (in $M/s$) is $NH_3$ produced?",
        "zh": "在反应 $N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3$ 中，若 $H_2$ 以 $0.030\\ M/s$ 被消耗，$NH_3$ 以多少 $M/s$ 生成？"
      },
      "answer": "0.020",
      "accept": [
        "0.02",
        "0.0200",
        "2.0e-2",
        "2e-2",
        "0.020 M/s"
      ],
      "explanation": {
        "en": "$-\\frac{1}{3}\\frac{\\Delta[H_2]}{\\Delta t} = \\frac{1}{2}\\frac{\\Delta[NH_3]}{\\Delta t}$, so $\\frac{\\Delta[NH_3]}{\\Delta t} = \\frac{2}{3}(0.030) = 0.020\\ M/s$. Using a 1:1 ratio ignores the coefficients 3 and 2.",
        "zh": "$-\\frac{1}{3}\\frac{\\Delta[H_2]}{\\Delta t} = \\frac{1}{2}\\frac{\\Delta[NH_3]}{\\Delta t}$，所以 $\\frac{\\Delta[NH_3]}{\\Delta t} = \\frac{2}{3}(0.030) = 0.020\\ M/s$。使用 1:1 比例会忽略系数 3 和 2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "When $[A]$ is tripled the rate increases by a factor of 9. What is the order of the reaction with respect to $A$? (Whole number.)",
        "zh": "当 $[A]$ 变为三倍时速率增大到 9 倍。反应对 $A$ 是几级？（整数。）"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "two",
        "second",
        "2nd",
        "second order"
      ],
      "explanation": {
        "en": "$3^n = 9$ gives $n = 2$. Reading the factor 9 directly as the order forgets that the factor equals $3^n$, not $n$.",
        "zh": "$3^n = 9$ 得 $n = 2$。把因子 9 直接当作级数忘记了因子等于 $3^n$ 而不是 $n$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A zero-order reaction has $\\text{rate} = k = 0.015\\ M/s$. How many seconds to consume $0.30\\ M$ of reactant? (rate is constant.)",
        "zh": "某零级反应 $\\text{rate} = k = 0.015\\ M/s$。消耗 $0.30\\ M$ 反应物需多少秒？（速率恒定。）"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20 s",
        "20s",
        "20 seconds"
      ],
      "explanation": {
        "en": "For zero order the rate is constant, so time $= 0.30 / 0.015 = 20\\ s$. Trying to use a half-life formula fails because zero-order rate does not depend on concentration.",
        "zh": "对零级反应速率恒定，所以时间 $= 0.30 / 0.015 = 20\\ s$。试图用半衰期公式会失败，因为零级速率不依赖于浓度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a second-order reaction, doubling the initial concentration multiplies the initial rate by what factor?",
        "zh": "对于二级反应，把初始浓度加倍会使初速率变为原来的几倍？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "four",
        "x4",
        "4x",
        "4 times"
      ],
      "explanation": {
        "en": "Rate $\\propto [A]^2$, so doubling gives $2^2 = 4$. Answering 2 treats the reaction as first order rather than second.",
        "zh": "速率 $\\propto [A]^2$，所以加倍得到 $2^2 = 4$。回答 2 把反应当成一级而不是二级。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A reaction has rate law $\\text{rate} = k[A]$. What is the numerical value of the exponent (order) on $[A]$?",
        "zh": "某反应速率定律为 $\\text{rate} = k[A]$。$[A]$ 上的指数（级数）的数值是多少？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "one",
        "first",
        "1st",
        "first order"
      ],
      "explanation": {
        "en": "A concentration written with no visible exponent carries an implied exponent of 1, so the order in $A$ is 1. Reading it as 0 confuses 'no written number' with 'zero.'",
        "zh": "浓度未写指数时隐含指数为 1，因此对 $A$ 是一级。把它读作 0 是把\"没有写数字\"与\"零\"混淆了。"
      }
    }
  ],
  "unit-5-kinetics/mechanisms-and-catalysis": [
    {
      "type": "mc",
      "question": {
        "en": "According to collision theory, which two conditions must be met for a collision to lead to a reaction?",
        "zh": "根据碰撞理论，碰撞要引发反应必须满足哪两个条件？"
      },
      "choices": [
        "Sufficient energy and proper orientation",
        "High pressure and low temperature",
        "Equal masses and opposite charges",
        "A catalyst and a solvent"
      ],
      "answer": 0,
      "explanation": {
        "en": "A reactive collision needs energy at least equal to the activation energy AND a proper relative orientation of the molecules. Focusing only on energy ignores that badly-oriented high-energy collisions still bounce apart.",
        "zh": "有效碰撞需要能量至少等于活化能，并且分子有正确的相对取向。只关注能量会忽略取向不当的高能碰撞仍会弹开。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the activation energy $E_a$ of a reaction?",
        "zh": "反应的活化能 $E_a$ 是什么？"
      },
      "choices": [
        "The energy released when products form",
        "The minimum energy needed to reach the transition state",
        "The difference in energy between reactants and products",
        "The total kinetic energy of all molecules"
      ],
      "answer": 1,
      "explanation": {
        "en": "$E_a$ is the minimum energy required to reach the high-energy transition state (activated complex). Confusing it with the reactant-product energy difference describes $\\Delta E$ of reaction, not the barrier height.",
        "zh": "$E_a$ 是达到高能过渡态（活化络合物）所需的最小能量。把它与反应物-产物的能量差混淆描述的是反应的 $\\Delta E$，而不是能垒高度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does a catalyst increase the rate of a reaction?",
        "zh": "催化剂如何提高反应速率？"
      },
      "choices": [
        "By raising the temperature of the system",
        "By increasing the concentration of reactants",
        "By providing an alternative pathway with lower activation energy",
        "By shifting the equilibrium toward products"
      ],
      "answer": 2,
      "explanation": {
        "en": "A catalyst offers a new pathway with a lower $E_a$, so more collisions succeed. It does not change the equilibrium position or the thermodynamics ($\\Delta H$); assuming it shifts equilibrium confuses kinetics with thermodynamics.",
        "zh": "催化剂提供一条 $E_a$ 更低的新途径，使更多碰撞有效。它不改变平衡位置或热力学（$\\Delta H$）；认为它使平衡移动是把动力学与热力学混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a multistep mechanism, the rate-determining step is:",
        "zh": "在多步机理中，决速步骤是："
      },
      "choices": [
        "The fastest step",
        "The step with the most reactants",
        "The last step",
        "The slowest step"
      ],
      "answer": 3,
      "explanation": {
        "en": "The overall rate is limited by the slowest (highest-barrier) step, just as the narrowest point limits flow. Picking the fastest step reverses the bottleneck logic.",
        "zh": "总速率受最慢（能垒最高）步骤限制，正如最窄处限制了流量。选最快的步骤颠倒了瓶颈的逻辑。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is a reaction intermediate?",
        "zh": "什么是反应中间体？"
      },
      "choices": [
        "A species produced in one step and consumed in a later step",
        "A species present at the start and end of the reaction",
        "The transition state at the peak of the energy diagram",
        "A catalyst that is regenerated"
      ],
      "answer": 0,
      "explanation": {
        "en": "An intermediate is formed in an earlier elementary step and used up in a later one, so it does not appear in the overall equation. A transition state is not an intermediate; it is a fleeting maximum, not an isolable species.",
        "zh": "中间体在较早的基元步骤中生成，并在较晚的步骤中被消耗，因此不出现在总方程中。过渡态不是中间体；它是瞬间的能量极大点，而非可分离的物种。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an elementary step $2\\,A + B \\rightarrow C$, what is the rate law?",
        "zh": "对于基元步骤 $2\\,A + B \\rightarrow C$，速率定律是什么？"
      },
      "choices": [
        "$\\text{rate} = k[A][B]$",
        "$\\text{rate} = k[A]^2[B]$",
        "$\\text{rate} = k[C]$",
        "$\\text{rate} = k[A][B]^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For an elementary step the exponents equal the molecularity (the coefficients): $[A]^2[B]$. This shortcut is valid ONLY for elementary steps; using the products or wrong coefficients breaks the molecularity rule.",
        "zh": "对于基元步骤，指数等于分子数（即系数）：$[A]^2[B]$。这个捷径仅对基元步骤有效；使用产物或错误系数违反了分子数规则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What term describes the number of molecules that collide in a single elementary step?",
        "zh": "描述单个基元步骤中碰撞分子数的术语是什么？"
      },
      "choices": [
        "Order",
        "Stoichiometry",
        "Molecularity",
        "Valence"
      ],
      "answer": 2,
      "explanation": {
        "en": "Molecularity counts the molecules colliding in one elementary step (uni-, bi-, termolecular). Order is an experimental quantity for the overall reaction and need not equal molecularity except for a single elementary step.",
        "zh": "分子数指一个基元步骤中碰撞的分子数目（单、双、三分子）。级数是对总反应的实验量，除单一基元步骤外不一定等于分子数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does raising the temperature increase reaction rate according to collision theory?",
        "zh": "根据碰撞理论，升高温度如何提高反应速率？"
      },
      "choices": [
        "It lowers the activation energy of the reaction",
        "It decreases the number of collisions",
        "It changes the reaction into a different reaction",
        "It increases the fraction of molecules with energy $\\geq E_a$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Higher temperature broadens the Maxwell-Boltzmann distribution so a larger fraction of collisions exceed $E_a$ (and collisions are more frequent). Temperature does not lower $E_a$ itself; only a catalyst provides a lower-barrier path.",
        "zh": "更高温度使麦克斯韦-玻尔兹曼分布变宽，使更大比例的碰撞超过 $E_a$（碰撞也更频繁）。温度本身不降低 $E_a$；只有催化剂才提供更低能垒的途径。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A catalyst appears in an early step of a mechanism and is regenerated in a later step. Compared with an intermediate, a catalyst:",
        "zh": "催化剂在机理的早期步骤中出现，并在后期步骤中被再生。与中间体相比，催化剂："
      },
      "choices": [
        "Is consumed first and regenerated later, so it is present at the start",
        "Is produced first and consumed later, so it is absent at the start",
        "Is the same thing as a transition state",
        "Never appears in any elementary step"
      ],
      "answer": 0,
      "explanation": {
        "en": "A catalyst is present before the reaction, consumed in one step, then regenerated, ending unchanged. An intermediate is the opposite: made first, then used up. Swapping these two reverses the order of formation and consumption.",
        "zh": "催化剂在反应前就存在，在某一步被消耗，随后再生，最终不变。中间体正相反：先生成后消耗。把两者互换会颠倒生成与消耗的顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a valid mechanism, the sum of the elementary steps must:",
        "zh": "对于一个有效的机理，各基元步骤之和必须："
      },
      "choices": [
        "Include all intermediates in the final equation",
        "Add up to the overall balanced equation",
        "Contain only one step",
        "Have the catalyst appear as a product"
      ],
      "answer": 1,
      "explanation": {
        "en": "A proposed mechanism must sum to the overall balanced reaction, with intermediates and catalysts canceling out. Expecting intermediates to remain in the overall equation contradicts their definition as canceled species.",
        "zh": "所提出的机理各步之和必须等于总的配平反应，中间体和催化剂相互抵消。期望中间体保留在总方程中与它们作为被抵消物种的定义相矛盾。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A homogeneous catalyst is one that:",
        "zh": "均相催化剂是指："
      },
      "choices": [
        "Is in a different phase from the reactants",
        "Is always a solid metal surface",
        "Is in the same phase as the reactants",
        "Is consumed permanently in the reaction"
      ],
      "answer": 2,
      "explanation": {
        "en": "A homogeneous catalyst shares the same phase as the reactants (e.g., all in aqueous solution). A catalyst in a different phase, such as a solid surface with gaseous reactants, is heterogeneous.",
        "zh": "均相催化剂与反应物处于同一相（例如都在水溶液中）。处于不同相的催化剂，如固体表面与气态反应物，是多相（非均相）催化剂。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On a reaction energy diagram, the transition state is located at:",
        "zh": "在反应能量图上，过渡态位于："
      },
      "choices": [
        "The energy of the reactants",
        "The energy of the products",
        "A local valley (minimum) between two peaks",
        "The peak (maximum) of the energy barrier"
      ],
      "answer": 3,
      "explanation": {
        "en": "The transition state sits at the top of the energy barrier, the point of maximum energy along the path. A local valley between peaks would instead represent a relatively stable intermediate, not the transition state.",
        "zh": "过渡态位于能垒顶端，是沿反应路径能量最高的点。两峰之间的谷底反而代表一个相对稳定的中间体，而不是过渡态。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A mechanism has two elementary steps. If the FIRST step is slow (rate-determining) and is $A + B \\rightarrow X$, write the rate law. Give it in the form k[A][B].",
        "zh": "某机理有两个基元步骤。若第一步是慢步（决速步）且为 $A + B \\rightarrow X$，写出速率定律。以 k[A][B] 的形式给出。"
      },
      "answer": "k[A][B]",
      "accept": [
        "rate=k[A][B]",
        "rate = k[A][B]",
        "k[B][A]",
        "k[A]^1[B]^1",
        "k[A][B]^1"
      ],
      "explanation": {
        "en": "The rate-determining step is elementary, so its rate law uses its own reactants with exponents equal to their coefficients: $k[A][B]$. Including species from the fast second step is unnecessary when the first step is slow.",
        "zh": "决速步是基元步骤，因此其速率定律使用它自身的反应物，指数等于系数：$k[A][B]$。当第一步为慢步时，无需包含快速第二步中的物种。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A forward reaction has $E_a = 50\\ kJ/mol$ and the reaction releases $\\Delta H = -30\\ kJ/mol$. What is the activation energy of the REVERSE reaction in $kJ/mol$?",
        "zh": "某正反应 $E_a = 50\\ kJ/mol$，反应放热 $\\Delta H = -30\\ kJ/mol$。逆反应的活化能是多少 $kJ/mol$？"
      },
      "answer": "80",
      "accept": [
        "80.0",
        "80 kJ/mol",
        "80 kJ",
        "80kJ/mol"
      ],
      "explanation": {
        "en": "$E_{a,\\text{reverse}} = E_{a,\\text{forward}} - \\Delta H = 50 - (-30) = 80\\ kJ/mol$. Subtracting 30 instead of adding it ignores that the exothermic products sit lower, making the reverse barrier larger.",
        "zh": "$E_{a,\\text{逆}} = E_{a,\\text{正}} - \\Delta H = 50 - (-30) = 80\\ kJ/mol$。减去 30 而不是加上它忽略了放热产物能量更低，使逆向能垒更大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many molecules collide in a bimolecular elementary step? (Give a whole number.)",
        "zh": "在双分子基元步骤中有多少个分子碰撞？（给出整数。）"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "two",
        "two molecules"
      ],
      "explanation": {
        "en": "'Bimolecular' means two species collide in that step. Answering 1 describes a unimolecular step (a single molecule decomposing or rearranging).",
        "zh": "\"双分子\"意味着该步骤中有两个物种碰撞。回答 1 描述的是单分子步骤（单个分子分解或重排）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Does a catalyst change the value of $\\Delta H$ for a reaction? Answer yes or no.",
        "zh": "催化剂会改变反应的 $\\Delta H$ 吗？回答 yes 或 no。"
      },
      "answer": "no",
      "accept": [
        "No",
        "NO",
        "n",
        "不会",
        "否",
        "no it does not",
        "does not"
      ],
      "explanation": {
        "en": "A catalyst lowers $E_a$ but leaves the reactant and product energies unchanged, so $\\Delta H$ stays the same. Thinking it changes $\\Delta H$ confuses the barrier height with the overall energy change.",
        "zh": "催化剂降低 $E_a$，但不改变反应物和产物的能量，因此 $\\Delta H$ 保持不变。认为它改变 $\\Delta H$ 是把能垒高度与总能量变化混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A mechanism's overall reaction is found by adding its steps. If step 1 is $A \\rightarrow B$ and step 2 is $B \\rightarrow C$, what is the overall reaction? Write it as A -> C.",
        "zh": "机理的总反应由各步相加得到。若第一步是 $A \\rightarrow B$、第二步是 $B \\rightarrow C$，总反应是什么？写作 A -> C。"
      },
      "answer": "A -> C",
      "accept": [
        "A->C",
        "A → C",
        "A→C",
        "A -> C",
        "A to C",
        "A yields C"
      ],
      "explanation": {
        "en": "Adding the steps cancels the intermediate $B$ (made in step 1, consumed in step 2), leaving $A \\rightarrow C$. Keeping $B$ in the overall equation forgets that intermediates cancel.",
        "zh": "各步相加使中间体 $B$（第一步生成、第二步消耗）抵消，剩下 $A \\rightarrow C$。在总方程中保留 $B$ 忘记了中间体会抵消。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At a higher temperature, does the fraction of molecules with energy greater than $E_a$ increase or decrease? Answer 'increase' or 'decrease'.",
        "zh": "在更高温度下，能量大于 $E_a$ 的分子所占比例是增大还是减小？回答 increase 或 decrease。"
      },
      "answer": "increase",
      "accept": [
        "increases",
        "Increase",
        "increased",
        "增大",
        "增加",
        "up",
        "rises"
      ],
      "explanation": {
        "en": "Heating shifts the Maxwell-Boltzmann distribution so more molecules exceed $E_a$, increasing the reactive fraction. Expecting a decrease reverses how temperature spreads the energy distribution.",
        "zh": "加热使麦克斯韦-玻尔兹曼分布移动，使更多分子超过 $E_a$，从而增大有效比例。预期减小颠倒了温度如何展宽能量分布。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A reaction has $E_{a}$ for the forward step of $75\\ kJ/mol$ and a reverse $E_a$ of $45\\ kJ/mol$. What is $\\Delta H$ (forward) in $kJ/mol$? Include the sign.",
        "zh": "某反应正向 $E_a$ 为 $75\\ kJ/mol$，逆向 $E_a$ 为 $45\\ kJ/mol$。正向 $\\Delta H$ 是多少 $kJ/mol$？包含符号。"
      },
      "answer": "30",
      "accept": [
        "+30",
        "30.0",
        "+30 kJ/mol",
        "30 kJ/mol",
        "+30.0"
      ],
      "explanation": {
        "en": "$\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{reverse}} = 75 - 45 = +30\\ kJ/mol$ (endothermic). Getting $-30$ reverses the subtraction; the higher forward barrier means products lie above reactants.",
        "zh": "$\\Delta H = E_{a,\\text{正}} - E_{a,\\text{逆}} = 75 - 45 = +30\\ kJ/mol$（吸热）。得到 $-30$ 颠倒了减法顺序；正向能垒更高意味着产物能量高于反应物。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the name of the short-lived, highest-energy arrangement of atoms at the top of the energy barrier? (Two-word English term.)",
        "zh": "位于能垒顶端、寿命极短、能量最高的原子排列叫什么？（英文两词术语。）"
      },
      "answer": "transition state",
      "accept": [
        "Transition state",
        "Transition State",
        "activated complex",
        "过渡态",
        "activated-complex",
        "transitionstate"
      ],
      "explanation": {
        "en": "The transition state (activated complex) is the highest-energy configuration along the reaction path. Calling it an intermediate is wrong; an intermediate sits in an energy valley and can, in principle, be isolated.",
        "zh": "过渡态（活化络合物）是反应路径上能量最高的构型。称其为中间体是错误的；中间体位于能量谷底，原则上可以被分离。"
      }
    }
  ],
  "unit-6-thermochemistry/energy-and-calorimetry": [
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly describes an endothermic process?",
        "zh": "下列哪项正确描述了吸热过程？"
      },
      "choices": [
        "The system absorbs heat from the surroundings and $q > 0$.",
        "The system releases heat to the surroundings and $q < 0$.",
        "No heat is exchanged and $q = 0$.",
        "The temperature of the surroundings increases."
      ],
      "answer": 0,
      "explanation": {
        "en": "In an endothermic process the system absorbs heat, so $q$ for the system is positive and the surroundings cool. Saying the system releases heat with $q<0$ describes an exothermic process, which is the common mix-up.",
        "zh": "在吸热过程中系统从周围吸收热量，因此系统的 $q$ 为正，周围温度下降。若说系统放热且 $q<0$，那描述的是放热过程，这是常见的混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the SI unit of energy used for heat $q$?",
        "zh": "热量 $q$ 使用的国际单位制能量单位是什么？"
      },
      "choices": [
        "Newton (N)",
        "Joule (J)",
        "Pascal (Pa)",
        "Watt (W)"
      ],
      "answer": 1,
      "explanation": {
        "en": "Energy and heat are measured in joules (J). The watt is a unit of power (energy per second), which is the tempting confusion; pascal is pressure and newton is force.",
        "zh": "能量和热量以焦耳（J）为单位。瓦特是功率单位（每秒能量），这是常见的诱导性混淆；帕斯卡是压强，牛顿是力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The specific heat capacity of water is about $4.18\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$. What does this value represent?",
        "zh": "水的比热容约为 $4.18\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$。这个数值代表什么？"
      },
      "choices": [
        "The energy to melt 1 g of ice.",
        "The energy to raise 1 mol of water by $1\\ ^{\\circ}\\mathrm{C}$.",
        "The energy to raise 1 g of water by $1\\ ^{\\circ}\\mathrm{C}$.",
        "The energy to boil 1 g of water."
      ],
      "answer": 2,
      "explanation": {
        "en": "Specific heat is per gram per degree, so it is the energy to raise 1 g by $1\\ ^{\\circ}\\mathrm{C}$. Using 'per mole' instead of 'per gram' confuses specific heat with molar heat capacity; melting and boiling involve latent heats, not specific heat.",
        "zh": "比热容是每克每度，因此是使 1 g 升高 $1\\ ^{\\circ}\\mathrm{C}$ 所需的能量。用'每摩尔'代替'每克'会把比热容与摩尔热容混淆；熔化和沸腾涉及潜热，而非比热容。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A metal sample and water reach the same final temperature in a calorimeter. This illustrates which principle?",
        "zh": "在量热计中金属样品与水达到相同的最终温度。这体现了什么原理？"
      },
      "choices": [
        "Heat flows from the colder to the hotter object.",
        "Mass is conserved during heat transfer.",
        "The metal always has the higher final temperature.",
        "Thermal equilibrium: heat flows until temperatures are equal."
      ],
      "answer": 3,
      "explanation": {
        "en": "At thermal equilibrium net heat flow stops and both objects share one temperature. Claiming heat flows from cold to hot reverses the direction of spontaneous heat flow, the common error.",
        "zh": "在热平衡时净热流停止，两个物体温度相同。若说热量从冷流向热，则颠倒了自发热流的方向，这是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the equation $q = mc\\Delta T$, what does $\\Delta T$ equal?",
        "zh": "在方程 $q = mc\\Delta T$ 中，$\\Delta T$ 等于什么？"
      },
      "choices": [
        "$T_{final} - T_{initial}$",
        "$T_{final} \\times T_{initial}$",
        "$T_{initial} - T_{final}$",
        "$T_{final} + T_{initial}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\Delta T$ is final minus initial temperature. Writing initial minus final flips the sign of $q$ and is a frequent slip.",
        "zh": "$\\Delta T$ 是最终温度减去初始温度。写成初始减最终会使 $q$ 的符号反转，这是常见的失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two samples of equal mass, iron ($c = 0.45\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$) and water ($c = 4.18$), absorb the same amount of heat. Which warms up more?",
        "zh": "质量相等的两个样品，铁（$c = 0.45\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$）和水（$c = 4.18$），吸收相同的热量。哪个升温更多？"
      },
      "choices": [
        "Water, because it has the larger specific heat.",
        "Iron, because it has the smaller specific heat.",
        "Both warm the same amount.",
        "Neither warms because heat is equal."
      ],
      "answer": 1,
      "explanation": {
        "en": "For the same $q$ and mass, $\\Delta T = q/(mc)$, so the smaller specific heat gives the larger temperature change; iron warms more. Thinking a larger specific heat means a bigger rise inverts the relationship.",
        "zh": "对于相同的 $q$ 和质量，$\\Delta T = q/(mc)$，因此比热容越小，温度变化越大；铁升温更多。认为比热容越大升温越多则颠倒了这一关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a coffee-cup calorimeter measuring a reaction, the heat released by the reaction is assumed to equal what?",
        "zh": "在测量反应的咖啡杯量热计中，反应释放的热量被假定等于什么？"
      },
      "choices": [
        "The heat lost to the room air.",
        "The work done on the piston.",
        "The heat absorbed by the solution (with opposite sign).",
        "Zero, because the cup is sealed."
      ],
      "answer": 2,
      "explanation": {
        "en": "A coffee-cup calorimeter is at constant pressure and insulated, so $q_{rxn} = -q_{solution}$. Assuming the heat simply escapes to the room ignores the whole point of insulation.",
        "zh": "咖啡杯量热计处于恒压且隔热状态，因此 $q_{rxn} = -q_{solution}$。若假定热量直接散失到房间，就忽略了隔热的意义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which sign convention applies to $q$ when a system loses heat to its surroundings?",
        "zh": "当系统向周围放出热量时，$q$ 采用哪种符号约定？"
      },
      "choices": [
        "$q$ is positive.",
        "$q$ is zero.",
        "$q$ depends on volume only.",
        "$q$ is negative."
      ],
      "answer": 3,
      "explanation": {
        "en": "Heat leaving the system is defined as negative $q$ (exothermic). Calling it positive uses the sign convention for heat absorbed, the classic reversal.",
        "zh": "热量离开系统时 $q$ 定义为负（放热）。称其为正则用了吸热的符号约定，这是典型的颠倒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A calorimeter has a heat capacity (calorimeter constant) of $C_{cal}$. Its units are typically:",
        "zh": "量热计的热容（量热计常数）为 $C_{cal}$。其单位通常为："
      },
      "choices": [
        "$\\mathrm{J/^{\\circ}C}$",
        "$\\mathrm{J/(g\\cdot ^{\\circ}C)}$",
        "$\\mathrm{J/mol}$",
        "$\\mathrm{g/^{\\circ}C}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A calorimeter constant is the heat needed to change the whole apparatus by one degree, so units are $\\mathrm{J/^{\\circ}C}$ (mass is already built in). Using $\\mathrm{J/(g\\cdot ^{\\circ}C)}$ is the per-gram specific heat, a different quantity.",
        "zh": "量热计常数是使整个装置改变一度所需的热量，因此单位是 $\\mathrm{J/^{\\circ}C}$（已包含质量）。用 $\\mathrm{J/(g\\cdot ^{\\circ}C)}$ 是每克的比热容，是不同的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why is a bomb calorimeter said to measure $\\Delta E$ (internal energy change) rather than $\\Delta H$?",
        "zh": "为什么说弹式量热计测量的是 $\\Delta E$（内能变化）而不是 $\\Delta H$？"
      },
      "choices": [
        "It operates at constant pressure.",
        "It operates at constant volume, so no PV work is done.",
        "It operates at constant temperature.",
        "It operates in a vacuum."
      ],
      "answer": 1,
      "explanation": {
        "en": "A rigid bomb keeps volume constant, so $q_v = \\Delta E$ (no expansion work). Assuming constant pressure would instead give $\\Delta H$, which is what a coffee-cup calorimeter measures.",
        "zh": "刚性弹体保持体积恒定，因此 $q_v = \\Delta E$（无膨胀功）。若假定恒压则得到 $\\Delta H$，那是咖啡杯量热计所测量的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "50.0 g of water is heated from $20.0\\ ^{\\circ}\\mathrm{C}$ to $30.0\\ ^{\\circ}\\mathrm{C}$. Using $c = 4.18\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$, how much heat is absorbed?",
        "zh": "50.0 g 水从 $20.0\\ ^{\\circ}\\mathrm{C}$ 加热到 $30.0\\ ^{\\circ}\\mathrm{C}$。用 $c = 4.18\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$，吸收了多少热量？"
      },
      "choices": [
        "209 J",
        "418 J",
        "2090 J",
        "4180 J"
      ],
      "answer": 2,
      "explanation": {
        "en": "$q = mc\\Delta T = 50.0 \\times 4.18 \\times 10.0 = 2090\\ \\mathrm{J}$. Getting 209 J drops a factor of ten by using $\\Delta T = 1$ instead of $10$.",
        "zh": "$q = mc\\Delta T = 50.0 \\times 4.18 \\times 10.0 = 2090\\ \\mathrm{J}$。得到 209 J 是因为用了 $\\Delta T = 1$ 而不是 $10$，少乘了十倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a state function, meaning its change depends only on initial and final states?",
        "zh": "下列哪项是状态函数，即其变化只取决于初始和最终状态？"
      },
      "choices": [
        "Heat, $q$",
        "Work, $w$",
        "The path taken",
        "Internal energy, $E$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Internal energy (like enthalpy) is a state function; its change depends only on start and end points. Heat and work are path-dependent, so labeling $q$ a state function is the common misconception.",
        "zh": "内能（与焓一样）是状态函数，其变化只取决于起点和终点。热和功依赖于路径，因此把 $q$ 称为状态函数是常见的误解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How much heat (in J) is required to raise the temperature of 100.0 g of water by $25.0\\ ^{\\circ}\\mathrm{C}$? Use $c = 4.18\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$.",
        "zh": "使 100.0 g 水温度升高 $25.0\\ ^{\\circ}\\mathrm{C}$ 需要多少热量（J）？用 $c = 4.18\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$。"
      },
      "answer": "10450",
      "accept": [
        "10450 J",
        "10450.0",
        "1.045e4",
        "1.045 x 10^4",
        "10450J",
        "10.45 kJ"
      ],
      "explanation": {
        "en": "$q = mc\\Delta T = 100.0 \\times 4.18 \\times 25.0 = 10450\\ \\mathrm{J}$ (10.45 kJ). Forgetting to multiply by the 25 degrees gives only 418 J.",
        "zh": "$q = mc\\Delta T = 100.0 \\times 4.18 \\times 25.0 = 10450\\ \\mathrm{J}$（10.45 kJ）。忘记乘以 25 度只会得到 418 J。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 25.0 g piece of metal absorbs 235 J and its temperature rises by $20.0\\ ^{\\circ}\\mathrm{C}$. What is its specific heat in $\\mathrm{J/(g\\cdot ^{\\circ}C)}$? Round to 3 significant figures.",
        "zh": "一块 25.0 g 的金属吸收 235 J，温度升高 $20.0\\ ^{\\circ}\\mathrm{C}$。它的比热容是多少 $\\mathrm{J/(g\\cdot ^{\\circ}C)}$？保留 3 位有效数字。"
      },
      "answer": "0.470",
      "accept": [
        "0.47",
        "0.470 J/(g·°C)",
        ".470",
        "0.4700"
      ],
      "explanation": {
        "en": "$c = q/(m\\Delta T) = 235/(25.0 \\times 20.0) = 235/500 = 0.470\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$. Dividing by mass alone (forgetting $\\Delta T$) gives the wrong 9.4.",
        "zh": "$c = q/(m\\Delta T) = 235/(25.0 \\times 20.0) = 235/500 = 0.470\\ \\mathrm{J/(g\\cdot ^{\\circ}C)}$。只除以质量（忘记 $\\Delta T$）会得到错误的 9.4。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "When 500. g of water cools from $60.0\\ ^{\\circ}\\mathrm{C}$ to $25.0\\ ^{\\circ}\\mathrm{C}$, how much heat (in J) does it release? Give the magnitude. Use $c = 4.18$.",
        "zh": "当 500. g 水从 $60.0\\ ^{\\circ}\\mathrm{C}$ 冷却到 $25.0\\ ^{\\circ}\\mathrm{C}$ 时，它释放多少热量（J）？给出数值大小。用 $c = 4.18$。"
      },
      "answer": "73150",
      "accept": [
        "73150 J",
        "7.315e4",
        "73150.0",
        "73.15 kJ",
        "-73150"
      ],
      "explanation": {
        "en": "$q = mc\\Delta T = 500. \\times 4.18 \\times (25.0-60.0) = 500 \\times 4.18 \\times (-35.0) = -73150\\ \\mathrm{J}$; magnitude 73150 J. Using $\\Delta T = 35$ but the wrong mass or dropping a factor is the usual error.",
        "zh": "$q = mc\\Delta T = 500. \\times 4.18 \\times (25.0-60.0) = 500 \\times 4.18 \\times (-35.0) = -73150\\ \\mathrm{J}$；数值大小为 73150 J。用 $\\Delta T = 35$ 但质量错误或漏乘因子是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A hot 80.0 g iron block ($c = 0.450$) is placed in water and loses 900. J. By how many degrees Celsius does the iron cool? Round to 1 decimal place.",
        "zh": "一块 80.0 g 的热铁块（$c = 0.450$）放入水中并失去 900. J。铁块降温多少摄氏度？保留 1 位小数。"
      },
      "answer": "25.0",
      "accept": [
        "25",
        "25.0 °C",
        "25.0°C",
        "-25.0",
        "25.00"
      ],
      "explanation": {
        "en": "$\\Delta T = q/(mc) = 900/(80.0 \\times 0.450) = 900/36.0 = 25.0\\ ^{\\circ}\\mathrm{C}$. Multiplying $m$ and $c$ wrong, or using water's specific heat by mistake, gives a very different value.",
        "zh": "$\\Delta T = q/(mc) = 900/(80.0 \\times 0.450) = 900/36.0 = 25.0\\ ^{\\circ}\\mathrm{C}$。把 $m$ 和 $c$ 相乘算错，或误用水的比热容，会得到差别很大的结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a coffee-cup calorimeter, a reaction raises 200.0 g of solution by $4.50\\ ^{\\circ}\\mathrm{C}$. Assuming $c = 4.18$, how much heat (in J) did the reaction release? Give the magnitude.",
        "zh": "在咖啡杯量热计中，一个反应使 200.0 g 溶液升温 $4.50\\ ^{\\circ}\\mathrm{C}$。假设 $c = 4.18$，反应释放了多少热量（J）？给出数值大小。"
      },
      "answer": "3762",
      "accept": [
        "3762 J",
        "3762.0",
        "3.762e3",
        "-3762",
        "3.762 kJ",
        "3760"
      ],
      "explanation": {
        "en": "$q_{solution} = mc\\Delta T = 200.0 \\times 4.18 \\times 4.50 = 3762\\ \\mathrm{J}$; the reaction released this heat, so $q_{rxn} = -3762\\ \\mathrm{J}$. Forgetting the sign relation $q_{rxn} = -q_{soln}$ is the common conceptual slip.",
        "zh": "$q_{solution} = mc\\Delta T = 200.0 \\times 4.18 \\times 4.50 = 3762\\ \\mathrm{J}$；反应释放了该热量，因此 $q_{rxn} = -3762\\ \\mathrm{J}$。忘记符号关系 $q_{rxn} = -q_{soln}$ 是常见的概念性失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert a temperature change of $\\Delta T = 15\\ ^{\\circ}\\mathrm{C}$ into kelvin. What is $\\Delta T$ in K?",
        "zh": "将温度变化 $\\Delta T = 15\\ ^{\\circ}\\mathrm{C}$ 转换为开尔文。$\\Delta T$ 是多少 K？"
      },
      "answer": "15",
      "accept": [
        "15 K",
        "15.0",
        "15K",
        "15.0 K"
      ],
      "explanation": {
        "en": "A temperature difference is the same number in Celsius and kelvin because the two scales have equal-sized degrees; only the zero point differs. Adding 273 here (getting 288) wrongly treats a difference as an absolute temperature.",
        "zh": "温度差在摄氏和开尔文中数值相同，因为两个温标的每一度大小相等，只是零点不同。在此处加 273（得到 288）错误地把温差当作绝对温度处理。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A calorimeter with heat capacity $C_{cal} = 45.0\\ \\mathrm{J/^{\\circ}C}$ warms by $3.00\\ ^{\\circ}\\mathrm{C}$. How much heat (in J) did the calorimeter absorb?",
        "zh": "一个热容为 $C_{cal} = 45.0\\ \\mathrm{J/^{\\circ}C}$ 的量热计升温 $3.00\\ ^{\\circ}\\mathrm{C}$。量热计吸收了多少热量（J）？"
      },
      "answer": "135",
      "accept": [
        "135 J",
        "135.0",
        "1.35e2",
        "135J"
      ],
      "explanation": {
        "en": "With a calorimeter constant, $q = C_{cal}\\Delta T = 45.0 \\times 3.00 = 135\\ \\mathrm{J}$; no separate mass is needed because it is already included. Trying to also multiply by a mass double-counts and is the usual mistake.",
        "zh": "使用量热计常数时，$q = C_{cal}\\Delta T = 45.0 \\times 3.00 = 135\\ \\mathrm{J}$；不需要另外的质量，因为已包含在内。再乘一个质量会重复计算，这是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How much heat (in J) is needed to raise 2.00 mol of water by $10.0\\ ^{\\circ}\\mathrm{C}$? (Molar mass of water = 18.0 g/mol, $c = 4.18$.) Round to the nearest whole joule.",
        "zh": "使 2.00 mol 水升温 $10.0\\ ^{\\circ}\\mathrm{C}$ 需要多少热量（J）？（水的摩尔质量 = 18.0 g/mol，$c = 4.18$。）四舍五入到最接近的整数焦耳。"
      },
      "answer": "1504.8",
      "accept": [
        "1504.8 J",
        "1505",
        "1504.8",
        "1.5e3",
        "1504.80",
        "1.505 kJ"
      ],
      "explanation": {
        "en": "First find mass: $2.00 \\times 18.0 = 36.0\\ \\mathrm{g}$; then $q = 36.0 \\times 4.18 \\times 10.0 = 1504.8\\ \\mathrm{J}$. Plugging moles directly into $mc\\Delta T$ without converting to grams is the key error.",
        "zh": "先求质量：$2.00 \\times 18.0 = 36.0\\ \\mathrm{g}$；然后 $q = 36.0 \\times 4.18 \\times 10.0 = 1504.8\\ \\mathrm{J}$。直接把摩尔数代入 $mc\\Delta T$ 而不换算成克是关键错误。"
      }
    }
  ],
  "unit-6-thermochemistry/enthalpy-and-hess-law": [
    {
      "type": "mc",
      "question": {
        "en": "For an exothermic reaction, what is the sign of $\\Delta H$?",
        "zh": "对于放热反应，$\\Delta H$ 的符号是什么？"
      },
      "choices": [
        "Negative",
        "Positive",
        "Zero",
        "Undefined"
      ],
      "answer": 0,
      "explanation": {
        "en": "Exothermic reactions release heat, so enthalpy of the system decreases and $\\Delta H < 0$. Assigning a positive value describes an endothermic reaction, the usual reversal.",
        "zh": "放热反应释放热量，因此系统焓减小，$\\Delta H < 0$。赋予正值描述的是吸热反应，这是常见的颠倒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Enthalpy $H$ is defined so that at constant pressure $\\Delta H$ equals what?",
        "zh": "焓 $H$ 的定义使得在恒压下 $\\Delta H$ 等于什么？"
      },
      "choices": [
        "The work done by the system",
        "The heat exchanged, $q_p$",
        "The change in temperature",
        "The change in volume"
      ],
      "answer": 1,
      "explanation": {
        "en": "At constant pressure the heat flow equals the enthalpy change, $\\Delta H = q_p$. Equating $\\Delta H$ to work rather than heat confuses the two energy transfer modes.",
        "zh": "在恒压下热流等于焓变，$\\Delta H = q_p$。把 $\\Delta H$ 等同于功而非热量会混淆这两种能量传递方式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Hess's Law states that the enthalpy change of a reaction is:",
        "zh": "赫斯定律指出反应的焓变："
      },
      "choices": [
        "Dependent on the specific path taken.",
        "Always equal to the activation energy.",
        "The same regardless of the number of steps or pathway.",
        "Zero for any multi-step process."
      ],
      "answer": 2,
      "explanation": {
        "en": "Because enthalpy is a state function, $\\Delta H$ depends only on initial and final states, not the pathway. Saying it depends on the path contradicts the state-function nature that makes Hess's Law work.",
        "zh": "因为焓是状态函数，$\\Delta H$ 只取决于初始和最终状态，而不取决于路径。说它取决于路径与使赫斯定律成立的状态函数性质相矛盾。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a reaction has $\\Delta H = -200\\ \\mathrm{kJ}$, what is $\\Delta H$ for the reverse reaction?",
        "zh": "如果一个反应的 $\\Delta H = -200\\ \\mathrm{kJ}$，那么逆反应的 $\\Delta H$ 是多少？"
      },
      "choices": [
        "$-200\\ \\mathrm{kJ}$",
        "$-400\\ \\mathrm{kJ}$",
        "$0\\ \\mathrm{kJ}$",
        "$+200\\ \\mathrm{kJ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Reversing a reaction flips the sign of $\\Delta H$, giving $+200\\ \\mathrm{kJ}$. Keeping the same sign ignores that the reverse process absorbs the heat the forward one released.",
        "zh": "逆转反应会使 $\\Delta H$ 的符号反转，得到 $+200\\ \\mathrm{kJ}$。保持相同符号忽略了逆过程吸收正反应所释放的热量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If you multiply a thermochemical equation by 3, what happens to its $\\Delta H$?",
        "zh": "如果将一个热化学方程式乘以 3，其 $\\Delta H$ 会怎样？"
      },
      "choices": [
        "It is multiplied by 3.",
        "It is divided by 3.",
        "Its sign flips.",
        "It is unchanged."
      ],
      "answer": 0,
      "explanation": {
        "en": "Enthalpy is extensive, so scaling the amounts by 3 scales $\\Delta H$ by 3. Leaving it unchanged treats enthalpy like an intensive property, which it is not.",
        "zh": "焓是广度量，因此将物质量放大 3 倍会使 $\\Delta H$ 放大 3 倍。保持不变则把焓当作强度量处理，而它并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the standard enthalpy of formation, $\\Delta H_f^{\\circ}$, of an element in its standard state (e.g. $O_2(g)$)?",
        "zh": "元素在标准状态下（例如 $O_2(g)$）的标准生成焓 $\\Delta H_f^{\\circ}$ 是多少？"
      },
      "choices": [
        "$+286\\ \\mathrm{kJ/mol}$",
        "$0\\ \\mathrm{kJ/mol}$",
        "It varies by element",
        "$-286\\ \\mathrm{kJ/mol}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By definition an element in its most stable standard-state form has $\\Delta H_f^{\\circ} = 0$. Assigning a nonzero value forgets that formation enthalpy is measured relative to the elements themselves.",
        "zh": "根据定义，元素以其最稳定的标准状态形式存在时 $\\Delta H_f^{\\circ} = 0$。赋予非零值忘记了生成焓是相对于元素本身来测量的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The formula $\\Delta H_{rxn}^{\\circ} = \\sum \\Delta H_f^{\\circ}(\\text{products}) - \\sum \\Delta H_f^{\\circ}(\\text{reactants})$ requires each term to be:",
        "zh": "公式 $\\Delta H_{rxn}^{\\circ} = \\sum \\Delta H_f^{\\circ}(\\text{产物}) - \\sum \\Delta H_f^{\\circ}(\\text{反应物})$ 要求每一项："
      },
      "choices": [
        "Divided by the number of atoms.",
        "Ignored if it is a gas.",
        "Multiplied by its stoichiometric coefficient.",
        "Squared."
      ],
      "answer": 2,
      "explanation": {
        "en": "Each formation enthalpy must be multiplied by the species' coefficient from the balanced equation. Forgetting the coefficients undercounts the total enthalpy, a very common error.",
        "zh": "每个生成焓都必须乘以配平方程式中该物种的系数。忘记系数会少算总焓，这是非常常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using bond enthalpies, $\\Delta H_{rxn} \\approx$ (bonds broken) $-$ (bonds formed). Why does breaking bonds contribute a positive term?",
        "zh": "使用键焓时，$\\Delta H_{rxn} \\approx$（断裂的键）$-$（形成的键）。为什么断裂键贡献一个正项？"
      },
      "choices": [
        "Breaking bonds releases energy.",
        "Breaking bonds does no work.",
        "Breaking bonds changes the temperature only.",
        "Breaking bonds requires energy (endothermic)."
      ],
      "answer": 3,
      "explanation": {
        "en": "Breaking bonds always costs energy (endothermic, positive), while forming bonds releases energy (negative). Believing bond-breaking releases energy reverses the fundamental energetics.",
        "zh": "断裂键总是需要能量（吸热，正值），而形成键释放能量（负值）。认为断键释放能量则颠倒了基本能量关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given: $A \\rightarrow B$, $\\Delta H_1 = +50\\ \\mathrm{kJ}$; $B \\rightarrow C$, $\\Delta H_2 = -30\\ \\mathrm{kJ}$. What is $\\Delta H$ for $A \\rightarrow C$?",
        "zh": "已知：$A \\rightarrow B$，$\\Delta H_1 = +50\\ \\mathrm{kJ}$；$B \\rightarrow C$，$\\Delta H_2 = -30\\ \\mathrm{kJ}$。$A \\rightarrow C$ 的 $\\Delta H$ 是多少？"
      },
      "choices": [
        "$+20\\ \\mathrm{kJ}$",
        "$-80\\ \\mathrm{kJ}$",
        "$+80\\ \\mathrm{kJ}$",
        "$-20\\ \\mathrm{kJ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By Hess's Law, add the steps: $+50 + (-30) = +20\\ \\mathrm{kJ}$. Adding the magnitudes to get 80 ignores that the second step is exothermic and subtracts.",
        "zh": "根据赫斯定律，将各步相加：$+50 + (-30) = +20\\ \\mathrm{kJ}$。将绝对值相加得到 80 忽略了第二步是放热的，应相减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An enthalpy (energy) diagram shows products lower in energy than reactants. This reaction is:",
        "zh": "一张焓（能量）图显示产物的能量低于反应物。该反应是："
      },
      "choices": [
        "Endothermic, $\\Delta H > 0$",
        "Exothermic, $\\Delta H < 0$",
        "Impossible",
        "At equilibrium"
      ],
      "answer": 1,
      "explanation": {
        "en": "Products lower than reactants means energy was released, so the reaction is exothermic with $\\Delta H < 0$. Reading it as endothermic mistakes the downhill direction for an uphill one.",
        "zh": "产物低于反应物意味着释放了能量，因此反应是放热的，$\\Delta H < 0$。将其读作吸热则把下坡方向误认为上坡方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which quantity is NOT needed to calculate $\\Delta H_{rxn}^{\\circ}$ from standard enthalpies of formation?",
        "zh": "从标准生成焓计算 $\\Delta H_{rxn}^{\\circ}$ 时，不需要下列哪个量？"
      },
      "choices": [
        "The balanced equation's coefficients",
        "$\\Delta H_f^{\\circ}$ of each reactant",
        "The activation energy of the reaction",
        "$\\Delta H_f^{\\circ}$ of each product"
      ],
      "answer": 2,
      "explanation": {
        "en": "Activation energy affects rate, not the overall enthalpy change, so it is not used in the formation-enthalpy calculation. Including it confuses kinetics with thermodynamics.",
        "zh": "活化能影响速率而非总焓变，因此不用于生成焓计算。将其纳入会把动力学与热力学混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $C(s) + O_2(g) \\rightarrow CO_2(g)$, the measured $\\Delta H = -393.5\\ \\mathrm{kJ/mol}$. This value is also the:",
        "zh": "对于 $C(s) + O_2(g) \\rightarrow CO_2(g)$，测得 $\\Delta H = -393.5\\ \\mathrm{kJ/mol}$。这个值也是："
      },
      "choices": [
        "Bond enthalpy of $O_2$",
        "Activation energy of combustion",
        "Standard enthalpy of formation of $C(s)$",
        "Standard enthalpy of formation of $CO_2(g)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "This reaction forms one mole of $CO_2$ from elements in their standard states, so $\\Delta H$ is exactly $\\Delta H_f^{\\circ}(CO_2)$. It is not the formation enthalpy of the element carbon, which is defined as zero.",
        "zh": "该反应由标准状态下的元素生成一摩尔 $CO_2$，因此 $\\Delta H$ 正是 $\\Delta H_f^{\\circ}(CO_2)$。它不是元素碳的生成焓，后者定义为零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\Delta H_1 = -100\\ \\mathrm{kJ}$ and $\\Delta H_2 = +250\\ \\mathrm{kJ}$ for two steps that add to give the target reaction, what is the overall $\\Delta H$ in kJ?",
        "zh": "已知两步反应 $\\Delta H_1 = -100\\ \\mathrm{kJ}$ 和 $\\Delta H_2 = +250\\ \\mathrm{kJ}$ 相加得到目标反应，总的 $\\Delta H$ 是多少 kJ？"
      },
      "answer": "150",
      "accept": [
        "150 kJ",
        "+150",
        "150.0",
        "150kJ",
        "1.5e2"
      ],
      "explanation": {
        "en": "Hess's Law adds the step enthalpies: $-100 + 250 = +150\\ \\mathrm{kJ}$. Subtracting them to get 350 or $-350$ misapplies the rule for combining steps.",
        "zh": "赫斯定律将各步焓相加：$-100 + 250 = +150\\ \\mathrm{kJ}$。相减得到 350 或 $-350$ 错误地应用了组合步骤的规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Reaction: $2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)$. Given $\\Delta H_f^{\\circ}(H_2O, l) = -286\\ \\mathrm{kJ/mol}$, what is $\\Delta H_{rxn}^{\\circ}$ in kJ?",
        "zh": "反应：$2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)$。已知 $\\Delta H_f^{\\circ}(H_2O, l) = -286\\ \\mathrm{kJ/mol}$，$\\Delta H_{rxn}^{\\circ}$ 是多少 kJ？"
      },
      "answer": "-572",
      "accept": [
        "-572 kJ",
        "-572.0",
        "-572kJ",
        "-5.72e2"
      ],
      "explanation": {
        "en": "Products: $2 \\times (-286) = -572$; reactants are elements at zero. $\\Delta H_{rxn}^{\\circ} = -572 - 0 = -572\\ \\mathrm{kJ}$. Forgetting the coefficient of 2 gives only $-286$.",
        "zh": "产物：$2 \\times (-286) = -572$；反应物是元素，为零。$\\Delta H_{rxn}^{\\circ} = -572 - 0 = -572\\ \\mathrm{kJ}$。忘记系数 2 只会得到 $-286$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$: $\\Delta H_f^{\\circ}$ values are $CH_4 = -75$, $CO_2 = -394$, $H_2O(g) = -242$ (kJ/mol); $O_2 = 0$. Compute $\\Delta H_{rxn}^{\\circ}$ in kJ.",
        "zh": "对于 $CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$：$\\Delta H_f^{\\circ}$ 值为 $CH_4 = -75$，$CO_2 = -394$，$H_2O(g) = -242$（kJ/mol）；$O_2 = 0$。计算 $\\Delta H_{rxn}^{\\circ}$（kJ）。"
      },
      "answer": "-803",
      "accept": [
        "-803 kJ",
        "-803.0",
        "-803kJ",
        "-8.03e2"
      ],
      "explanation": {
        "en": "Products: $(-394) + 2(-242) = -878$; reactants: $(-75) + 0 = -75$. $\\Delta H = -878 - (-75) = -803\\ \\mathrm{kJ}$. Forgetting to subtract the reactant term or the coefficient on water changes the result.",
        "zh": "产物：$(-394) + 2(-242) = -878$；反应物：$(-75) + 0 = -75$。$\\Delta H = -878 - (-75) = -803\\ \\mathrm{kJ}$。忘记减去反应物项或水的系数会改变结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A reaction has $\\Delta H = -180\\ \\mathrm{kJ}$ as written for 1 mole. What is $\\Delta H$ (in kJ) when 2.5 moles react?",
        "zh": "某反应按 1 摩尔书写时 $\\Delta H = -180\\ \\mathrm{kJ}$。当 2.5 摩尔反应时 $\\Delta H$（kJ）是多少？"
      },
      "answer": "-450",
      "accept": [
        "-450 kJ",
        "-450.0",
        "-450kJ",
        "-4.5e2"
      ],
      "explanation": {
        "en": "Enthalpy scales with amount: $-180 \\times 2.5 = -450\\ \\mathrm{kJ}$. Leaving it at $-180$ treats enthalpy as independent of amount, which it is not.",
        "zh": "焓随物质量按比例变化：$-180 \\times 2.5 = -450\\ \\mathrm{kJ}$。保持 $-180$ 则把焓当作与物质量无关，而它并非如此。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Estimate $\\Delta H$ (in kJ) for $H_2 + Cl_2 \\rightarrow 2HCl$ using bond enthalpies: $H-H = 436$, $Cl-Cl = 243$, $H-Cl = 431$ (kJ/mol).",
        "zh": "用键焓估算 $H_2 + Cl_2 \\rightarrow 2HCl$ 的 $\\Delta H$（kJ）：$H-H = 436$，$Cl-Cl = 243$，$H-Cl = 431$（kJ/mol）。"
      },
      "answer": "-183",
      "accept": [
        "-183 kJ",
        "-183.0",
        "-183kJ",
        "-1.83e2"
      ],
      "explanation": {
        "en": "Bonds broken: $436 + 243 = 679$; bonds formed: $2 \\times 431 = 862$. $\\Delta H = 679 - 862 = -183\\ \\mathrm{kJ}$. Forgetting to double the $H-Cl$ bond (two moles formed) is the common slip.",
        "zh": "断裂的键：$436 + 243 = 679$；形成的键：$2 \\times 431 = 862$。$\\Delta H = 679 - 862 = -183\\ \\mathrm{kJ}$。忘记将 $H-Cl$ 键加倍（生成两摩尔）是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $C + O_2 \\rightarrow CO_2$, $\\Delta H = -393\\ \\mathrm{kJ}$ and $CO + \\tfrac{1}{2}O_2 \\rightarrow CO_2$, $\\Delta H = -283\\ \\mathrm{kJ}$, find $\\Delta H$ (in kJ) for $C + \\tfrac{1}{2}O_2 \\rightarrow CO$.",
        "zh": "已知 $C + O_2 \\rightarrow CO_2$，$\\Delta H = -393\\ \\mathrm{kJ}$，以及 $CO + \\tfrac{1}{2}O_2 \\rightarrow CO_2$，$\\Delta H = -283\\ \\mathrm{kJ}$，求 $C + \\tfrac{1}{2}O_2 \\rightarrow CO$ 的 $\\Delta H$（kJ）。"
      },
      "answer": "-110",
      "accept": [
        "-110 kJ",
        "-110.0",
        "-110kJ",
        "-1.1e2"
      ],
      "explanation": {
        "en": "Keep reaction 1 and reverse reaction 2 (flip its sign to $+283$): $-393 + 283 = -110\\ \\mathrm{kJ}$. Forgetting to flip the sign of the reversed step gives $-676$ instead.",
        "zh": "保留反应 1 并逆转反应 2（符号翻转为 $+283$）：$-393 + 283 = -110\\ \\mathrm{kJ}$。忘记翻转被逆转步骤的符号会得到 $-676$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A combustion releases $890\\ \\mathrm{kJ}$ per mole. How much heat (in kJ) is released when 0.500 mol burns? Give the magnitude.",
        "zh": "一次燃烧每摩尔释放 $890\\ \\mathrm{kJ}$。当 0.500 mol 燃烧时释放多少热量（kJ）？给出数值大小。"
      },
      "answer": "445",
      "accept": [
        "445 kJ",
        "445.0",
        "-445",
        "445kJ",
        "4.45e2"
      ],
      "explanation": {
        "en": "$890 \\times 0.500 = 445\\ \\mathrm{kJ}$ released (so $\\Delta H = -445\\ \\mathrm{kJ}$). Using the full 890 ignores that only half a mole reacts.",
        "zh": "$890 \\times 0.500 = 445\\ \\mathrm{kJ}$ 被释放（即 $\\Delta H = -445\\ \\mathrm{kJ}$）。使用完整的 890 忽略了只有半摩尔发生反应。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A reaction with $\\Delta H = +90\\ \\mathrm{kJ}$ is reversed. What is $\\Delta H$ (in kJ) for the reversed reaction?",
        "zh": "一个 $\\Delta H = +90\\ \\mathrm{kJ}$ 的反应被逆转。逆反应的 $\\Delta H$（kJ）是多少？"
      },
      "answer": "-90",
      "accept": [
        "-90 kJ",
        "-90.0",
        "-90kJ",
        "-9.0e1",
        "-9e1"
      ],
      "explanation": {
        "en": "Reversing a reaction changes the sign of $\\Delta H$, so $+90$ becomes $-90\\ \\mathrm{kJ}$. Keeping it at $+90$ forgets that the reverse process reverses the heat flow.",
        "zh": "逆转反应会改变 $\\Delta H$ 的符号，因此 $+90$ 变为 $-90\\ \\mathrm{kJ}$。保持 $+90$ 忘记了逆过程会使热流方向相反。"
      }
    }
  ],
  "unit-7-equilibrium/equilibrium-and-k": [
    {
      "type": "mc",
      "question": {
        "en": "A reaction has reached chemical equilibrium. What is true at this point?",
        "zh": "某反应已达到化学平衡。此时下列哪项正确？"
      },
      "choices": [
        "The rate of the forward reaction equals the rate of the reverse reaction",
        "The concentrations of all species are equal",
        "The forward reaction has stopped completely",
        "No more reactant or product molecules exist"
      ],
      "answer": 0,
      "explanation": {
        "en": "Equilibrium is dynamic: forward and reverse reactions continue but at equal rates, so concentrations stay constant. A tempting error is to think the reactions stop — they do not; only the net change is zero. Equal rates do not mean equal concentrations.",
        "zh": "平衡是动态的：正逆反应仍在进行，但速率相等，所以浓度保持不变。常见错误是认为反应停止了——其实没有，只是净变化为零。速率相等并不代表浓度相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which species are omitted from an equilibrium constant expression?",
        "zh": "书写平衡常数表达式时，哪些物质要省略？"
      },
      "choices": [
        "Any gas at low pressure",
        "Pure solids and pure liquids",
        "The species with the smallest coefficient",
        "Aqueous ions"
      ],
      "answer": 1,
      "explanation": {
        "en": "Pure solids and pure liquids have essentially constant activity (≈1), so they are left out of K. A common mistake is to include a solid because it appears in the balanced equation; only gases and aqueous species enter the expression.",
        "zh": "纯固体和纯液体的活度基本恒定（≈1），因此不写入 K。常见错误是因为固体出现在方程式中就把它写进去；只有气体和水溶液物质才进入表达式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How are $K_p$ and $K_c$ related for a gas-phase reaction?",
        "zh": "对于气相反应，$K_p$ 与 $K_c$ 之间的关系是什么？"
      },
      "choices": [
        "$K_p = K_c / (RT)$",
        "$K_p = K_c + \\Delta n$",
        "$K_p = K_c(RT)^{\\Delta n}$",
        "$K_p = (K_c)^{RT}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The conversion uses the ideal-gas relation, giving $K_p = K_c(RT)^{\\Delta n}$, where $\\Delta n$ is moles of gaseous product minus gaseous reactant. A frequent error is to add $\\Delta n$ instead of using it as an exponent on $RT$.",
        "zh": "该换算来自理想气体关系，得到 $K_p = K_c(RT)^{\\Delta n}$，其中 $\\Delta n$ 为气态产物摩尔数减去气态反应物摩尔数。常见错误是把 $\\Delta n$ 相加，而不是作为 $RT$ 的指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the reaction quotient $Q$ is less than $K$, in which direction does the reaction proceed?",
        "zh": "如果反应商 $Q$ 小于 $K$，反应向哪个方向进行？"
      },
      "choices": [
        "It is already at equilibrium",
        "It proceeds toward reactants (reverse)",
        "It cannot be determined without temperature",
        "It proceeds toward products (forward)"
      ],
      "answer": 3,
      "explanation": {
        "en": "When $Q < K$ there is too much reactant relative to equilibrium, so the reaction runs forward to make more product until $Q = K$. The tempting mistake is to reverse the logic and shift toward reactants, which is what happens when $Q > K$.",
        "zh": "当 $Q < K$ 时，反应物相对于平衡状态偏多，因此反应正向进行生成更多产物，直到 $Q = K$。常见错误是把逻辑弄反，向反应物方向移动——那是 $Q > K$ 时的情况。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a reaction with equilibrium constant $K$, what is the equilibrium constant of the reverse reaction?",
        "zh": "某反应的平衡常数为 $K$，其逆反应的平衡常数是多少？"
      },
      "choices": [
        "$1/K$",
        "$-K$",
        "$K$",
        "$K^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Reversing a reaction swaps products and reactants in the expression, so the new constant is the reciprocal $1/K$. A common error is to negate $K$; equilibrium constants are never negative, and reversing inverts rather than negates.",
        "zh": "把反应逆转会在表达式中交换产物与反应物，因此新常数是倒数 $1/K$。常见错误是把 $K$ 取负；平衡常数永不为负，逆转是取倒数而非取负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If every coefficient in a balanced reaction is multiplied by 2, how does its equilibrium constant change from $K$?",
        "zh": "如果把一个已配平反应的所有系数都乘以 2，其平衡常数相对于 $K$ 如何变化？"
      },
      "choices": [
        "It becomes $2K$",
        "It becomes $K^2$",
        "It stays $K$",
        "It becomes $\\sqrt{K}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiplying all coefficients by $n$ raises $K$ to the $n$th power, so doubling gives $K^2$. The tempting error is to multiply $K$ by 2, but coefficients become exponents in the expression, not multipliers.",
        "zh": "将所有系数乘以 $n$，会把 $K$ 变为其 $n$ 次方，因此乘以 2 得到 $K^2$。常见错误是把 $K$ 乘以 2，但系数在表达式中是指数，不是乘数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two reactions are added together to give an overall reaction. How is the overall $K$ obtained from $K_1$ and $K_2$?",
        "zh": "两个反应相加得到总反应。总的 $K$ 如何由 $K_1$ 和 $K_2$ 求得？"
      },
      "choices": [
        "Subtract them: $K_1 - K_2$",
        "Add them: $K_1 + K_2$",
        "Multiply them: $K_1 \\times K_2$",
        "Average them"
      ],
      "answer": 2,
      "explanation": {
        "en": "When reactions are added, their equilibrium constants multiply, giving $K_1 \\times K_2$. A common mistake is to add the constants because the reactions are added, but the math on K is multiplicative, mirroring how adding logs multiplies the values.",
        "zh": "当反应相加时，平衡常数相乘，得到 $K_1 \\times K_2$。常见错误是因为反应相加就把常数相加，但 K 的运算是相乘的，正如对数相加对应数值相乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A reaction has $K = 1 \\times 10^{6}$ at a given temperature. What does this tell you?",
        "zh": "某反应在给定温度下 $K = 1 \\times 10^{6}$。这说明什么？"
      },
      "choices": [
        "The reaction is very slow",
        "Reactants are strongly favored at equilibrium",
        "The reaction is exactly balanced",
        "Products are strongly favored at equilibrium"
      ],
      "answer": 3,
      "explanation": {
        "en": "A large $K$ means the numerator (products) dominates, so at equilibrium products are strongly favored. A frequent misconception is to link $K$ to speed; $K$ describes the position of equilibrium, not the rate of reaching it.",
        "zh": "$K$ 很大意味着分子（产物）占主导，因此平衡时强烈偏向产物。常见误解是把 $K$ 与反应快慢联系起来；$K$ 描述的是平衡的位置，而非到达平衡的速率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Adding a catalyst to a system at equilibrium has what effect on the value of $K$?",
        "zh": "向已达平衡的体系加入催化剂，对 $K$ 的数值有什么影响？"
      },
      "choices": [
        "It has no effect on $K$",
        "It increases $K$",
        "It decreases $K$",
        "It squares $K$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A catalyst speeds up forward and reverse reactions equally, so equilibrium is reached faster but $K$ is unchanged. The tempting error is to assume anything that speeds a reaction must favor products; a catalyst shifts nothing.",
        "zh": "催化剂同等地加快正逆反应，因此更快达到平衡，但 $K$ 不变。常见错误是认为任何加快反应的因素都会有利于产物；催化剂不会使平衡移动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the correct $K_c$ expression for $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$?",
        "zh": "反应 $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$ 的 $K_c$ 表达式是什么？"
      },
      "choices": [
        "$\\frac{[SO_3]}{[SO_2][O_2]}$",
        "$\\frac{[SO_3]^2}{[SO_2]^2[O_2]}$",
        "$\\frac{[SO_2]^2[O_2]}{[SO_3]^2}$",
        "$\\frac{[SO_3]^2}{[SO_2]^2[O_2]^2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Products over reactants with coefficients as exponents gives $[SO_3]^2/([SO_2]^2[O_2])$. Common errors are dropping the exponents entirely or giving $O_2$ an exponent of 2, but its coefficient is 1.",
        "zh": "产物在上、反应物在下，系数作为指数，得到 $[SO_3]^2/([SO_2]^2[O_2])$。常见错误是完全漏掉指数，或给 $O_2$ 加上指数 2，但它的系数是 1。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, equilibrium concentrations are $[N_2]=0.50$, $[H_2]=0.50$, $[NH_3]=0.50$ M. What is $K_c$?",
        "zh": "对于 $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$，平衡浓度为 $[N_2]=0.50$、$[H_2]=0.50$、$[NH_3]=0.50$ M。$K_c$ 是多少？"
      },
      "choices": [
        "1.0",
        "2.0",
        "4.0",
        "0.50"
      ],
      "answer": 2,
      "explanation": {
        "en": "$K_c = [NH_3]^2/([N_2][H_2]^3) = 0.25/(0.50 \\times 0.125) = 0.25/0.0625 = 4.0$. The tempting error is to forget the exponent 3 on $[H_2]$, which would wrongly give 1.0.",
        "zh": "$K_c = [NH_3]^2/([N_2][H_2]^3) = 0.25/(0.50 \\times 0.125) = 0.25/0.0625 = 4.0$。常见错误是忘记 $[H_2]$ 的指数 3，会错误地得到 1.0。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a gas reaction where the moles of gas are the same on both sides ($\\Delta n = 0$), how do $K_p$ and $K_c$ compare?",
        "zh": "对于两侧气体摩尔数相同（$\\Delta n = 0$）的气相反应，$K_p$ 与 $K_c$ 的关系如何？"
      },
      "choices": [
        "$K_p = 0$",
        "$K_p = K_c \\times RT$",
        "$K_p = K_c / RT$",
        "$K_p = K_c$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $K_p = K_c(RT)^{\\Delta n}$ and $(RT)^0 = 1$, the two are equal when $\\Delta n = 0$. A common slip is to still multiply by $RT$, forgetting that a zero exponent makes the factor 1.",
        "zh": "由于 $K_p = K_c(RT)^{\\Delta n}$ 且 $(RT)^0 = 1$，当 $\\Delta n = 0$ 时两者相等。常见失误是仍然乘以 $RT$，忘了零次幂使该因子等于 1。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$, equilibrium concentrations are $[H_2]=0.20$, $[I_2]=0.20$, $[HI]=1.6$ M. Calculate $K_c$.",
        "zh": "对于 $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$，平衡浓度为 $[H_2]=0.20$、$[I_2]=0.20$、$[HI]=1.6$ M。计算 $K_c$。"
      },
      "answer": "64",
      "accept": [
        "64.0",
        "64",
        "6.4e1"
      ],
      "explanation": {
        "en": "$K_c = [HI]^2/([H_2][I_2]) = (1.6)^2/(0.20 \\times 0.20) = 2.56/0.04 = 64$. Forgetting to square $[HI]$ would give 8, the common error.",
        "zh": "$K_c = [HI]^2/([H_2][I_2]) = (1.6)^2/(0.20 \\times 0.20) = 2.56/0.04 = 64$。忘记把 $[HI]$ 平方会得到 8，这是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, a mixture has $[SO_2]=0.10$, $[O_2]=0.10$, $[SO_3]=0.10$ M. Calculate the reaction quotient $Q$.",
        "zh": "对于 $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$，某混合物中 $[SO_2]=0.10$、$[O_2]=0.10$、$[SO_3]=0.10$ M。计算反应商 $Q$。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10",
        "1.0e1",
        "1e1"
      ],
      "explanation": {
        "en": "$Q = [SO_3]^2/([SO_2]^2[O_2]) = (0.10)^2/((0.10)^2 \\times 0.10) = 0.01/0.001 = 10$. Dropping the exponent on $[SO_2]$ would wrongly give 1, the tempting error.",
        "zh": "$Q = [SO_3]^2/([SO_2]^2[O_2]) = (0.10)^2/((0.10)^2 \\times 0.10) = 0.01/0.001 = 10$。漏掉 $[SO_2]$ 的指数会错误地得到 1，这是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, what is $\\Delta n$ (moles gas products minus moles gas reactants) used in the $K_p$–$K_c$ conversion?",
        "zh": "对于 $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$，在 $K_p$–$K_c$ 换算中使用的 $\\Delta n$（气态产物摩尔数减气态反应物摩尔数）是多少？"
      },
      "answer": "-2",
      "accept": [
        "-2",
        "-2.0",
        "−2"
      ],
      "explanation": {
        "en": "$\\Delta n = (\\text{2 mol product}) - (\\text{1 + 3 = 4 mol reactant}) = 2 - 4 = -2$. Counting only one reactant species (forgetting the coefficient 3 on $H_2$) would wrongly give 0, the common slip.",
        "zh": "$\\Delta n = (\\text{产物 2 mol}) - (\\text{反应物 1 + 3 = 4 mol}) = 2 - 4 = -2$。只数一种反应物（忘记 $H_2$ 的系数 3）会错误地得到 0，这是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A forward reaction has $K = 4.0$. What is the equilibrium constant for the reverse reaction?",
        "zh": "某正反应的 $K = 4.0$。其逆反应的平衡常数是多少？"
      },
      "answer": "0.25",
      "accept": [
        "0.25",
        "1/4",
        ".25",
        "0.250"
      ],
      "explanation": {
        "en": "The reverse reaction has $1/K = 1/4.0 = 0.25$. A tempting error is to negate to get $-4.0$, but equilibrium constants are reciprocated on reversal, never made negative.",
        "zh": "逆反应的常数为 $1/K = 1/4.0 = 0.25$。常见错误是取负得到 $-4.0$，但逆转时平衡常数是取倒数，永不为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A reaction has $K = 4.0$. If every coefficient in the balanced equation is multiplied by 2, what is the new equilibrium constant?",
        "zh": "某反应的 $K = 4.0$。若把配平方程中所有系数乘以 2，新的平衡常数是多少？"
      },
      "answer": "16",
      "accept": [
        "16",
        "16.0",
        "1.6e1"
      ],
      "explanation": {
        "en": "Multiplying coefficients by 2 raises $K$ to the second power: $K^2 = (4.0)^2 = 16$. The tempting error is to multiply $K$ by 2 and get 8, but coefficients act as exponents.",
        "zh": "系数乘以 2 会把 $K$ 变为二次方：$K^2 = (4.0)^2 = 16$。常见错误是把 $K$ 乘以 2 得到 8，但系数起指数作用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the reaction $A(g) \\rightleftharpoons B(g)$ with $K_c = 4.0$, if the initial concentration of $A$ is 1.00 M and no $B$ is present, what is $[B]$ at equilibrium (in M)?",
        "zh": "对于反应 $A(g) \\rightleftharpoons B(g)$，$K_c = 4.0$。若 $A$ 的初始浓度为 1.00 M 且没有 $B$，平衡时 $[B]$ 是多少（单位 M）？"
      },
      "answer": "0.80",
      "accept": [
        "0.80",
        "0.8",
        ".8",
        "0.800"
      ],
      "explanation": {
        "en": "Let $x = [B]$ formed; then $[A] = 1.00 - x$. Setting $x/(1.00 - x) = 4.0$ gives $x = 4.0 - 4.0x$, so $5.0x = 4.0$ and $x = 0.80$ M. A common error is to stop at $x = 4.0$ without solving the algebra.",
        "zh": "设 $x = [B]$ 的生成量，则 $[A] = 1.00 - x$。由 $x/(1.00 - x) = 4.0$ 得 $x = 4.0 - 4.0x$，即 $5.0x = 4.0$，$x = 0.80$ M。常见错误是在 $x = 4.0$ 处停下而没有解方程。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A gas reaction has $K_c = 2.0$ and $\\Delta n = +1$. Using $R = 0.0821$ and $T = 500$ K, calculate $K_p$. (Round to one decimal place.)",
        "zh": "某气相反应 $K_c = 2.0$，$\\Delta n = +1$。取 $R = 0.0821$，$T = 500$ K，计算 $K_p$。（保留一位小数。）"
      },
      "answer": "82.1",
      "accept": [
        "82.1",
        "82",
        "82.06",
        "82.0"
      ],
      "explanation": {
        "en": "$K_p = K_c(RT)^{\\Delta n} = 2.0 \\times (0.0821 \\times 500)^1 = 2.0 \\times 41.05 = 82.1$. Forgetting to multiply by $K_c$ and reporting just $RT = 41.05$ is the tempting error.",
        "zh": "$K_p = K_c(RT)^{\\Delta n} = 2.0 \\times (0.0821 \\times 500)^1 = 2.0 \\times 41.05 = 82.1$。忘记乘以 $K_c$ 而只报告 $RT = 41.05$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Reaction 1 has $K_1 = 2.0$ and reaction 2 has $K_2 = 3.0$. If they are added to give an overall reaction, what is the overall $K$?",
        "zh": "反应 1 的 $K_1 = 2.0$，反应 2 的 $K_2 = 3.0$。若两者相加得到总反应，总的 $K$ 是多少？"
      },
      "answer": "6.0",
      "accept": [
        "6.0",
        "6",
        "6.00"
      ],
      "explanation": {
        "en": "Adding reactions multiplies their constants: $K = K_1 \\times K_2 = 2.0 \\times 3.0 = 6.0$. The tempting error is to add them and get 5.0, but the operation on K is multiplication.",
        "zh": "反应相加时常数相乘：$K = K_1 \\times K_2 = 2.0 \\times 3.0 = 6.0$。常见错误是相加得到 5.0，但对 K 的运算是相乘。"
      }
    }
  ],
  "unit-7-equilibrium/le-chatelier-and-ksp": [
    {
      "type": "mc",
      "question": {
        "en": "Le Châtelier's principle states that when a stress is applied to a system at equilibrium, the system responds how?",
        "zh": "勒夏特列原理指出，当对平衡体系施加一个改变（应力）时，体系将如何响应？"
      },
      "choices": [
        "By shifting in the direction that partially counteracts the stress",
        "By stopping the reaction entirely",
        "By shifting to increase the stress",
        "By changing the value of $K$ to compensate"
      ],
      "answer": 0,
      "explanation": {
        "en": "The system shifts to partially relieve the imposed stress, moving toward whichever side reduces the change. A common misconception is that the shift changes $K$; only temperature changes $K$, while concentration or pressure changes shift position at constant $K$.",
        "zh": "体系会移动以部分抵消所施加的改变，向能减小该变化的一侧移动。常见误解是这种移动会改变 $K$；只有温度改变 $K$，浓度或压强变化只是在 $K$ 不变下移动平衡位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $N_2 + 3H_2 \\rightleftharpoons 2NH_3$, adding more $N_2$ causes the equilibrium to shift in which direction?",
        "zh": "对于 $N_2 + 3H_2 \\rightleftharpoons 2NH_3$，加入更多 $N_2$ 会使平衡向哪个方向移动？"
      },
      "choices": [
        "Toward reactants (left)",
        "Toward products (right)",
        "No shift occurs",
        "The reaction stops"
      ],
      "answer": 1,
      "explanation": {
        "en": "Adding a reactant makes $Q < K$, so the system shifts right to consume the added $N_2$ and restore equilibrium. The tempting error is to think adding something on the left pushes left; the system moves away from the added species.",
        "zh": "加入反应物使 $Q < K$，因此体系向右移动以消耗加入的 $N_2$ 并恢复平衡。常见错误是认为在左边加东西会把平衡推向左；体系其实是远离所加入的物质。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, decreasing the volume (increasing pressure) shifts the equilibrium which way?",
        "zh": "对于 $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$，减小体积（增大压强）会使平衡向哪移动？"
      },
      "choices": [
        "Toward the reactants (left)",
        "No shift, since pressure never matters",
        "Toward the side with fewer moles of gas (right)",
        "The reaction reverses direction permanently"
      ],
      "answer": 2,
      "explanation": {
        "en": "Higher pressure favors the side with fewer gas moles; here 4 mol reactant gas versus 2 mol product gas, so it shifts right. A common error is to ignore the mole counts and assume pressure has no effect.",
        "zh": "压强增大有利于气体摩尔数较少的一侧；此处反应物 4 mol 气体、产物 2 mol 气体，所以向右移动。常见错误是忽略摩尔数而认为压强没有影响。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an exothermic reaction (heat is a product), increasing the temperature shifts the equilibrium which way?",
        "zh": "对于放热反应（热量视为产物），升高温度会使平衡向哪移动？"
      },
      "choices": [
        "Toward products (right)",
        "No shift occurs",
        "It always shifts to more moles of gas",
        "Toward reactants (left)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Treat heat as a product; adding heat pushes the equilibrium toward reactants, decreasing $K$. The tempting error is to assume higher temperature always favors products; direction depends on whether the reaction is exo- or endothermic.",
        "zh": "把热量当作产物；加入热量会把平衡推向反应物，$K$ 减小。常见错误是认为升温总是有利于产物；方向取决于反应是放热还是吸热。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Adding an inert (non-reacting) gas to a gas-phase equilibrium at constant volume does what?",
        "zh": "在恒定体积下向气相平衡中加入惰性（不参与反应的）气体会怎样？"
      },
      "choices": [
        "Causes no shift in the equilibrium",
        "Shifts toward products",
        "Shifts toward reactants",
        "Doubles the value of $K$"
      ],
      "answer": 0,
      "explanation": {
        "en": "At constant volume the partial pressures and concentrations of the reacting gases are unchanged, so there is no shift. The tempting error is to think total pressure rising must cause a shift, but only the reacting species' partial pressures matter.",
        "zh": "在恒定体积下，参与反应气体的分压和浓度都不变，因此不发生移动。常见错误是认为总压升高一定会引起移动，但只有反应物种的分压才重要。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the correct solubility-product expression $K_{sp}$ for $CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$?",
        "zh": "反应 $CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$ 的溶度积表达式 $K_{sp}$ 是什么？"
      },
      "choices": [
        "$[Ca^{2+}][F^-]$",
        "$[Ca^{2+}][F^-]^2$",
        "$[Ca^{2+}][2F^-]$",
        "$[CaF_2][Ca^{2+}][F^-]^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The solid is omitted and each ion's coefficient becomes an exponent: $K_{sp} = [Ca^{2+}][F^-]^2$. Common errors are including the solid $CaF_2$ or writing the 2 inside the bracket instead of as an exponent.",
        "zh": "省略固体，每种离子的系数作为指数：$K_{sp} = [Ca^{2+}][F^-]^2$。常见错误是把固体 $CaF_2$ 写进去，或把 2 写在方括号内而不是作为指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The common-ion effect describes what happens to the solubility of a slightly soluble salt when a soluble salt sharing one of its ions is added?",
        "zh": "同离子效应描述的是：当加入一种与微溶盐共有某离子的可溶盐时，该微溶盐的溶解度会怎样？"
      },
      "choices": [
        "Its solubility increases",
        "Its $K_{sp}$ increases",
        "Its solubility decreases",
        "Its solubility is unchanged"
      ],
      "answer": 2,
      "explanation": {
        "en": "Adding a common ion pushes the dissolution equilibrium back toward the solid (Le Châtelier), lowering solubility while $K_{sp}$ stays constant. A frequent mistake is to think $K_{sp}$ changes; only the solubility does.",
        "zh": "加入同离子会把溶解平衡推回固体一侧（勒夏特列），使溶解度降低，而 $K_{sp}$ 保持不变。常见错误是认为 $K_{sp}$ 改变；改变的只是溶解度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When ions are mixed, a precipitate forms when the ion product $Q$ compares to $K_{sp}$ in what way?",
        "zh": "当离子混合时，在离子积 $Q$ 与 $K_{sp}$ 满足什么关系时会生成沉淀？"
      },
      "choices": [
        "$Q < K_{sp}$",
        "$Q = K_{sp}$",
        "$Q$ has no relation to precipitation",
        "$Q > K_{sp}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "When $Q > K_{sp}$ the solution is supersaturated, so a precipitate forms until $Q = K_{sp}$. The tempting error is to reverse the inequality; $Q < K_{sp}$ means the solution is unsaturated and no solid forms.",
        "zh": "当 $Q > K_{sp}$ 时溶液过饱和，会生成沉淀直到 $Q = K_{sp}$。常见错误是把不等号弄反；$Q < K_{sp}$ 表示溶液未饱和，不会生成固体。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $2NO_2(g) \\rightleftharpoons N_2O_4(g)$, removing $N_2O_4$ as it forms will shift the equilibrium which way?",
        "zh": "对于 $2NO_2(g) \\rightleftharpoons N_2O_4(g)$，边生成边移走 $N_2O_4$ 会使平衡向哪移动？"
      },
      "choices": [
        "Toward products (right)",
        "Toward reactants (left)",
        "No shift occurs",
        "It stops the reaction"
      ],
      "answer": 0,
      "explanation": {
        "en": "Removing a product makes $Q < K$, so the system shifts right to replace it. The tempting error is to think removing something from the right pulls the reaction left; the system moves to make more of what was removed.",
        "zh": "移走产物使 $Q < K$，因此体系向右移动以补充它。常见错误是认为从右边移走东西会把反应拉向左；体系其实会生成更多被移走的物质。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which change actually changes the numerical value of the equilibrium constant $K$?",
        "zh": "下列哪种改变才会真正改变平衡常数 $K$ 的数值？"
      },
      "choices": [
        "Adding or removing a reactant",
        "Changing the temperature",
        "Changing the volume or pressure",
        "Adding a catalyst"
      ],
      "answer": 1,
      "explanation": {
        "en": "Only temperature changes $K$; concentration, pressure, and catalysts shift position or speed but leave $K$ fixed. A common misconception is that any large disturbance changes $K$, but the constant is temperature-dependent alone.",
        "zh": "只有温度会改变 $K$；浓度、压强和催化剂只改变平衡位置或速率，$K$ 保持不变。常见误解是任何大的扰动都会改变 $K$，但该常数只与温度有关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Comparing salts of similar formula type, a larger $K_{sp}$ generally indicates what about molar solubility?",
        "zh": "对于化学式类型相似的盐，$K_{sp}$ 越大，通常说明摩尔溶解度如何？"
      },
      "choices": [
        "Zero solubility",
        "Lower molar solubility",
        "Higher molar solubility",
        "Solubility unrelated to $K_{sp}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For salts of the same ion ratio, a larger $K_{sp}$ means more dissolved ions, i.e. higher molar solubility. The caution is that this only works within the same formula type; comparing a 1:1 salt to a 1:2 salt by $K_{sp}$ alone can mislead.",
        "zh": "对于离子比相同的盐，$K_{sp}$ 越大表示溶解的离子越多，即摩尔溶解度越高。需注意这只在化学式类型相同时成立；仅凭 $K_{sp}$ 比较 1:1 盐与 1:2 盐会产生误导。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the endothermic dissolving of a salt, increasing the temperature has what effect on its solubility?",
        "zh": "对于吸热溶解的盐，升高温度对其溶解度有什么影响？"
      },
      "choices": [
        "Solubility decreases",
        "Solubility is unchanged",
        "The salt stops dissolving",
        "Solubility increases"
      ],
      "answer": 3,
      "explanation": {
        "en": "If dissolving absorbs heat (endothermic), heat is a reactant, so adding heat shifts toward dissolved ions, increasing solubility. The tempting error is to assume heating always drives precipitation; direction depends on the sign of the dissolution enthalpy.",
        "zh": "若溶解吸热（吸热过程），热量是反应物，加热会向溶解离子方向移动，使溶解度增大。常见错误是认为加热总是促进沉淀；方向取决于溶解焓的符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The $K_{sp}$ of $AgCl$ is $1.8 \\times 10^{-10}$. Calculate its molar solubility (mol/L). Give your answer to two significant figures in scientific notation.",
        "zh": "$AgCl$ 的 $K_{sp} = 1.8 \\times 10^{-10}$。计算其摩尔溶解度（mol/L）。用科学计数法保留两位有效数字。"
      },
      "answer": "1.3e-5",
      "accept": [
        "1.3e-5",
        "1.34e-5",
        "1.3x10^-5",
        "1.3*10^-5",
        "1.34e-5 M",
        "1.3e-5 M",
        "0.000013"
      ],
      "explanation": {
        "en": "For $AgCl \\rightleftharpoons Ag^+ + Cl^-$, $K_{sp} = s^2$, so $s = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}$ M. A common error is to report $K_{sp}$ itself without taking the square root.",
        "zh": "对于 $AgCl \\rightleftharpoons Ag^+ + Cl^-$，$K_{sp} = s^2$，所以 $s = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}$ M。常见错误是直接报告 $K_{sp}$ 而没有开平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 1:1 salt $MX$ has a molar solubility of $1.0 \\times 10^{-5}$ mol/L. Calculate its $K_{sp}$.",
        "zh": "某 1:1 型盐 $MX$ 的摩尔溶解度为 $1.0 \\times 10^{-5}$ mol/L。计算其 $K_{sp}$。"
      },
      "answer": "1.0e-10",
      "accept": [
        "1.0e-10",
        "1e-10",
        "1.0x10^-10",
        "1.0*10^-10",
        "1e-10 M^2",
        "0.0000000001"
      ],
      "explanation": {
        "en": "$K_{sp} = [M^+][X^-] = s \\times s = s^2 = (1.0 \\times 10^{-5})^2 = 1.0 \\times 10^{-10}$. Forgetting to square and reporting $1.0 \\times 10^{-5}$ is the tempting error.",
        "zh": "$K_{sp} = [M^+][X^-] = s \\times s = s^2 = (1.0 \\times 10^{-5})^2 = 1.0 \\times 10^{-10}$。忘记平方而报告 $1.0 \\times 10^{-5}$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The $K_{sp}$ of $CaF_2$ is $3.2 \\times 10^{-11}$. Calculate its molar solubility (mol/L). Give two significant figures in scientific notation.",
        "zh": "$CaF_2$ 的 $K_{sp} = 3.2 \\times 10^{-11}$。计算其摩尔溶解度（mol/L）。用科学计数法保留两位有效数字。"
      },
      "answer": "2.0e-4",
      "accept": [
        "2.0e-4",
        "2e-4",
        "2.0x10^-4",
        "2.0*10^-4",
        "2.0e-4 M",
        "0.0002"
      ],
      "explanation": {
        "en": "For $CaF_2 \\rightleftharpoons Ca^{2+} + 2F^-$, $K_{sp} = (s)(2s)^2 = 4s^3$. So $s^3 = 3.2 \\times 10^{-11}/4 = 8.0 \\times 10^{-12}$ and $s = 2.0 \\times 10^{-4}$ M. Forgetting the factor of 4 from the $2F^-$ coefficient is the common error.",
        "zh": "对于 $CaF_2 \\rightleftharpoons Ca^{2+} + 2F^-$，$K_{sp} = (s)(2s)^2 = 4s^3$。因此 $s^3 = 3.2 \\times 10^{-11}/4 = 8.0 \\times 10^{-12}$，$s = 2.0 \\times 10^{-4}$ M。忘记 $2F^-$ 系数带来的因子 4 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The $K_{sp}$ of $Ag_2CrO_4$ is $4.0 \\times 10^{-12}$. Calculate its molar solubility (mol/L) in scientific notation.",
        "zh": "$Ag_2CrO_4$ 的 $K_{sp} = 4.0 \\times 10^{-12}$。用科学计数法计算其摩尔溶解度（mol/L）。"
      },
      "answer": "1.0e-4",
      "accept": [
        "1.0e-4",
        "1e-4",
        "1.0x10^-4",
        "1.0*10^-4",
        "1.0e-4 M",
        "0.0001"
      ],
      "explanation": {
        "en": "For $Ag_2CrO_4 \\rightleftharpoons 2Ag^+ + CrO_4^{2-}$, $K_{sp} = (2s)^2(s) = 4s^3$. So $s^3 = 4.0 \\times 10^{-12}/4 = 1.0 \\times 10^{-12}$ and $s = 1.0 \\times 10^{-4}$ M. The tempting error is treating $[Ag^+]$ as $s$ instead of $2s$.",
        "zh": "对于 $Ag_2CrO_4 \\rightleftharpoons 2Ag^+ + CrO_4^{2-}$，$K_{sp} = (2s)^2(s) = 4s^3$。因此 $s^3 = 4.0 \\times 10^{-12}/4 = 1.0 \\times 10^{-12}$，$s = 1.0 \\times 10^{-4}$ M。常见错误是把 $[Ag^+]$ 当作 $s$ 而非 $2s$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A metal hydroxide $M(OH)_2$ has a molar solubility of $1.0 \\times 10^{-4}$ mol/L. Calculate its $K_{sp}$ in scientific notation.",
        "zh": "某金属氢氧化物 $M(OH)_2$ 的摩尔溶解度为 $1.0 \\times 10^{-4}$ mol/L。用科学计数法计算其 $K_{sp}$。"
      },
      "answer": "4.0e-12",
      "accept": [
        "4.0e-12",
        "4e-12",
        "4.0x10^-12",
        "4.0*10^-12",
        "4.0e-12 M^3"
      ],
      "explanation": {
        "en": "For $M(OH)_2 \\rightleftharpoons M^{2+} + 2OH^-$, $K_{sp} = (s)(2s)^2 = 4s^3 = 4(1.0 \\times 10^{-4})^3 = 4.0 \\times 10^{-12}$. Omitting the factor 4 (from $[OH^-] = 2s$) and reporting $1.0 \\times 10^{-12}$ is the common error.",
        "zh": "对于 $M(OH)_2 \\rightleftharpoons M^{2+} + 2OH^-$，$K_{sp} = (s)(2s)^2 = 4s^3 = 4(1.0 \\times 10^{-4})^3 = 4.0 \\times 10^{-12}$。漏掉因子 4（来自 $[OH^-] = 2s$）而报告 $1.0 \\times 10^{-12}$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Equal volumes are mixed to give $[Ca^{2+}] = 1.0 \\times 10^{-3}$ M and $[F^-] = 1.0 \\times 10^{-3}$ M. Calculate the ion product $Q$ for $CaF_2$ in scientific notation.",
        "zh": "等体积混合后 $[Ca^{2+}] = 1.0 \\times 10^{-3}$ M、$[F^-] = 1.0 \\times 10^{-3}$ M。用科学计数法计算 $CaF_2$ 的离子积 $Q$。"
      },
      "answer": "1.0e-9",
      "accept": [
        "1.0e-9",
        "1e-9",
        "1.0x10^-9",
        "1.0*10^-9",
        "0.000000001"
      ],
      "explanation": {
        "en": "$Q = [Ca^{2+}][F^-]^2 = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3})^2 = 1.0 \\times 10^{-9}$. Forgetting to square $[F^-]$ would wrongly give $1.0 \\times 10^{-6}$, the tempting error.",
        "zh": "$Q = [Ca^{2+}][F^-]^2 = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3})^2 = 1.0 \\times 10^{-9}$。忘记把 $[F^-]$ 平方会错误地得到 $1.0 \\times 10^{-6}$，这是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The $K_{sp}$ of $AgCl$ is $1.8 \\times 10^{-10}$. Calculate its molar solubility in a $0.10$ M $NaCl$ solution (mol/L), in scientific notation.",
        "zh": "$AgCl$ 的 $K_{sp} = 1.8 \\times 10^{-10}$。用科学计数法计算它在 $0.10$ M $NaCl$ 溶液中的摩尔溶解度（mol/L）。"
      },
      "answer": "1.8e-9",
      "accept": [
        "1.8e-9",
        "1.8x10^-9",
        "1.8*10^-9",
        "1.8e-9 M",
        "0.0000000018"
      ],
      "explanation": {
        "en": "With the common ion, $[Cl^-] \\approx 0.10$ M, so $s = K_{sp}/[Cl^-] = 1.8 \\times 10^{-10}/0.10 = 1.8 \\times 10^{-9}$ M — far below the pure-water value, illustrating the common-ion effect. The error is to ignore the added $Cl^-$ and take the square root of $K_{sp}$ instead.",
        "zh": "由于同离子存在，$[Cl^-] \\approx 0.10$ M，所以 $s = K_{sp}/[Cl^-] = 1.8 \\times 10^{-10}/0.10 = 1.8 \\times 10^{-9}$ M——远低于纯水中的值，体现同离子效应。错误在于忽略加入的 $Cl^-$ 而去开 $K_{sp}$ 的平方根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The $K_{sp}$ of $PbI_2$ is $3.2 \\times 10^{-8}$. Calculate its molar solubility (mol/L) in scientific notation.",
        "zh": "$PbI_2$ 的 $K_{sp} = 3.2 \\times 10^{-8}$。用科学计数法计算其摩尔溶解度（mol/L）。"
      },
      "answer": "2.0e-3",
      "accept": [
        "2.0e-3",
        "2e-3",
        "2.0x10^-3",
        "2.0*10^-3",
        "2.0e-3 M",
        "0.002"
      ],
      "explanation": {
        "en": "For $PbI_2 \\rightleftharpoons Pb^{2+} + 2I^-$, $K_{sp} = (s)(2s)^2 = 4s^3$. So $s^3 = 3.2 \\times 10^{-8}/4 = 8.0 \\times 10^{-9}$ and $s = 2.0 \\times 10^{-3}$ M. Forgetting the factor of 4 from the $2I^-$ coefficient is the common error.",
        "zh": "对于 $PbI_2 \\rightleftharpoons Pb^{2+} + 2I^-$，$K_{sp} = (s)(2s)^2 = 4s^3$。因此 $s^3 = 3.2 \\times 10^{-8}/4 = 8.0 \\times 10^{-9}$，$s = 2.0 \\times 10^{-3}$ M。忘记 $2I^-$ 系数带来的因子 4 是常见错误。"
      }
    }
  ],
  "unit-8-acids-and-bases/ph-and-strong-acids-bases": [
    {
      "type": "mc",
      "question": {
        "en": "A solution has $[H^+] = 1.0\\times10^{-4}$ M. What is its pH?",
        "zh": "某溶液的 $[H^+] = 1.0\\times10^{-4}$ M。它的 pH 是多少？"
      },
      "choices": [
        "4",
        "10",
        "-4",
        "3"
      ],
      "answer": 0,
      "explanation": {
        "en": "pH $= -\\log[H^+] = -\\log(1.0\\times10^{-4}) = 4$. A common error is dropping the negative sign or reading the exponent as pOH, which would give 10.",
        "zh": "pH $= -\\log[H^+] = -\\log(1.0\\times10^{-4}) = 4$。常见错误是漏掉负号，或把指数当成 pOH 而得到 10。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solution has pH $= 3.0$. What is $[H^+]$?",
        "zh": "某溶液 pH $= 3.0$。$[H^+]$ 是多少？"
      },
      "choices": [
        "$3.0$ M",
        "$1.0\\times10^{-3}$ M",
        "$1.0\\times10^{-11}$ M",
        "$1.0\\times10^{3}$ M"
      ],
      "answer": 1,
      "explanation": {
        "en": "$[H^+] = 10^{-pH} = 10^{-3.0} = 1.0\\times10^{-3}$ M. The value $10^{-11}$ is $[OH^-]$, not $[H^+]$; mixing up the two is the usual trap.",
        "zh": "$[H^+] = 10^{-pH} = 10^{-3.0} = 1.0\\times10^{-3}$ M。$10^{-11}$ 是 $[OH^-]$ 而不是 $[H^+]$，混淆两者是常见陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the pH of $0.0050$ M $HNO_3$ (a strong acid)?",
        "zh": "$0.0050$ M $HNO_3$（强酸）的 pH 是多少？"
      },
      "choices": [
        "2.70",
        "5.0",
        "2.30",
        "0.0050"
      ],
      "answer": 2,
      "explanation": {
        "en": "$HNO_3$ fully dissociates, so $[H^+] = 0.0050$ M and pH $= -\\log(5.0\\times10^{-3}) = 2.30$. Answering 2.70 comes from computing pOH instead of pH.",
        "zh": "$HNO_3$ 完全电离，所以 $[H^+] = 0.0050$ M，pH $= -\\log(5.0\\times10^{-3}) = 2.30$。得到 2.70 是算成了 pOH 而不是 pH。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the pH of $0.020$ M KOH (a strong base) at 25 °C?",
        "zh": "25 °C 时 $0.020$ M KOH（强碱）的 pH 是多少？"
      },
      "choices": [
        "1.70",
        "11.70",
        "2.0",
        "12.30"
      ],
      "answer": 3,
      "explanation": {
        "en": "$[OH^-] = 0.020$ M, so pOH $= -\\log(0.020) = 1.70$ and pH $= 14 - 1.70 = 12.30$. Reporting 1.70 forgets to convert pOH to pH for a basic solution.",
        "zh": "$[OH^-] = 0.020$ M，所以 pOH $= -\\log(0.020) = 1.70$，pH $= 14 - 1.70 = 12.30$。写成 1.70 是忘了把 pOH 转换成 pH。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solution has pOH $= 4.0$. What is $[OH^-]$?",
        "zh": "某溶液 pOH $= 4.0$。$[OH^-]$ 是多少？"
      },
      "choices": [
        "$1.0\\times10^{-4}$ M",
        "$1.0\\times10^{-10}$ M",
        "$4.0$ M",
        "$1.0\\times10^{4}$ M"
      ],
      "answer": 0,
      "explanation": {
        "en": "$[OH^-] = 10^{-pOH} = 10^{-4.0} = 1.0\\times10^{-4}$ M. The value $10^{-10}$ is $[H^+]$; using pH instead of pOH here is the common mistake.",
        "zh": "$[OH^-] = 10^{-pOH} = 10^{-4.0} = 1.0\\times10^{-4}$ M。$10^{-10}$ 是 $[H^+]$；这里误用 pH 代替 pOH 是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a strong acid?",
        "zh": "下列哪个是强酸？"
      },
      "choices": [
        "$HF$",
        "$HClO_4$",
        "$CH_3COOH$",
        "$H_2CO_3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$HClO_4$ (perchloric acid) is one of the common strong acids and ionizes completely. $HF$, acetic acid, and carbonic acid are all weak acids that only partially ionize.",
        "zh": "$HClO_4$（高氯酸）是常见强酸之一，完全电离。$HF$、醋酸和碳酸都是只部分电离的弱酸。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As $[H^+]$ increases, what happens to the pH of a solution?",
        "zh": "当 $[H^+]$ 增大时，溶液的 pH 如何变化？"
      },
      "choices": [
        "It increases",
        "It stays constant",
        "It decreases",
        "It always becomes negative"
      ],
      "answer": 2,
      "explanation": {
        "en": "Because pH $= -\\log[H^+]$, a larger $[H^+]$ gives a smaller pH. Thinking pH rises with $[H^+]$ ignores the negative sign in the logarithm.",
        "zh": "因为 pH $= -\\log[H^+]$，$[H^+]$ 越大 pH 越小。认为 pH 随 $[H^+]$ 增大是忽略了对数前的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At 25 °C, what is the value of $pH + pOH$?",
        "zh": "在 25 °C，$pH + pOH$ 的值是多少？"
      },
      "choices": [
        "7",
        "0",
        "1",
        "14"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $K_w = [H^+][OH^-] = 1.0\\times10^{-14}$, taking negative logs gives $pH + pOH = 14$ at 25 °C. The value 7 is the neutral pH, not the sum.",
        "zh": "由于 $K_w = [H^+][OH^-] = 1.0\\times10^{-14}$，取负对数得 25 °C 时 $pH + pOH = 14$。数值 7 是中性 pH，不是它们的和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solution at 25 °C has pH $= 7.0$. This solution is:",
        "zh": "25 °C 时某溶液 pH $= 7.0$。该溶液是："
      },
      "choices": [
        "neutral",
        "basic",
        "acidic",
        "amphoteric"
      ],
      "answer": 0,
      "explanation": {
        "en": "At 25 °C, pH 7 means $[H^+] = [OH^-] = 1.0\\times10^{-7}$ M, which is neutral. Calling it acidic assumes any measurable $[H^+]$ means acidic, but neutrality requires equal $[H^+]$ and $[OH^-]$.",
        "zh": "25 °C 时 pH 7 意味着 $[H^+] = [OH^-] = 1.0\\times10^{-7}$ M，是中性。称它为酸性是误以为有 $[H^+]$ 就是酸性，但中性要求 $[H^+]$ 与 $[OH^-]$ 相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $[OH^-]$ in a $0.10$ M HCl solution at 25 °C?",
        "zh": "25 °C 时 $0.10$ M HCl 溶液中的 $[OH^-]$ 是多少？"
      },
      "choices": [
        "$1.0\\times10^{-1}$ M",
        "$1.0\\times10^{-13}$ M",
        "$1.0\\times10^{-14}$ M",
        "$1.0\\times10^{-7}$ M"
      ],
      "answer": 1,
      "explanation": {
        "en": "$[H^+] = 0.10$ M, so $[OH^-] = K_w/[H^+] = (1.0\\times10^{-14})/(0.10) = 1.0\\times10^{-13}$ M. Answering $10^{-7}$ ignores that the strong acid suppresses $[OH^-]$ below the neutral value.",
        "zh": "$[H^+] = 0.10$ M，所以 $[OH^-] = K_w/[H^+] = (1.0\\times10^{-14})/(0.10) = 1.0\\times10^{-13}$ M。答 $10^{-7}$ 是忽略了强酸把 $[OH^-]$ 压到中性值以下。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the pH of $0.10$ M NaOH at 25 °C?",
        "zh": "25 °C 时 $0.10$ M NaOH 的 pH 是多少？"
      },
      "choices": [
        "1",
        "11",
        "13",
        "14"
      ],
      "answer": 2,
      "explanation": {
        "en": "$[OH^-] = 0.10$ M gives pOH $= 1$, so pH $= 14 - 1 = 13$. Answering 1 reports pOH instead of pH for a basic solution.",
        "zh": "$[OH^-] = 0.10$ M 得 pOH $= 1$，所以 pH $= 14 - 1 = 13$。答 1 是把碱性溶液的 pOH 当成了 pH。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a strong base?",
        "zh": "下列哪个是强碱？"
      },
      "choices": [
        "$NH_3$",
        "$H_2O$",
        "$CH_3NH_2$",
        "$Ba(OH)_2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$Ba(OH)_2$ is a soluble Group 2 hydroxide that dissociates completely, making it a strong base. $NH_3$ and $CH_3NH_2$ are weak bases, and water is neutral.",
        "zh": "$Ba(OH)_2$ 是可溶的第 2 族氢氧化物，完全解离，是强碱。$NH_3$ 和 $CH_3NH_2$ 是弱碱，水是中性的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the pH of $0.0010$ M HCl (strong acid) at 25 °C?",
        "zh": "25 °C 时 $0.0010$ M HCl（强酸）的 pH 是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00"
      ],
      "explanation": {
        "en": "HCl fully dissociates, so $[H^+] = 1.0\\times10^{-3}$ M and pH $= -\\log(1.0\\times10^{-3}) = 3$. Do not use pOH here; the acid concentration directly gives $[H^+]$.",
        "zh": "HCl 完全电离，所以 $[H^+] = 1.0\\times10^{-3}$ M，pH $= -\\log(1.0\\times10^{-3}) = 3$。这里不要用 pOH；酸的浓度直接给出 $[H^+]$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solution has pH $= 4.5$ at 25 °C. What is its pOH?",
        "zh": "25 °C 时某溶液 pH $= 4.5$。它的 pOH 是多少？"
      },
      "answer": "9.5",
      "accept": [
        "9.50"
      ],
      "explanation": {
        "en": "pOH $= 14 - pH = 14 - 4.5 = 9.5$. Forgetting the $pH + pOH = 14$ relationship at 25 °C is the common slip.",
        "zh": "pOH $= 14 - pH = 14 - 4.5 = 9.5$。忘记 25 °C 时 $pH + pOH = 14$ 是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solution has pH $= 2.0$. What is $[H^+]$ in mol/L (give the numeric value)?",
        "zh": "某溶液 pH $= 2.0$。$[H^+]$ 是多少 mol/L（给出数值）？"
      },
      "answer": "0.010",
      "accept": [
        "0.01",
        "1.0e-2",
        "1e-2",
        "1.0×10^-2",
        "0.0100"
      ],
      "explanation": {
        "en": "$[H^+] = 10^{-pH} = 10^{-2.0} = 0.010$ M. Writing $10^{-12}$ would confuse this with $[OH^-]$.",
        "zh": "$[H^+] = 10^{-pH} = 10^{-2.0} = 0.010$ M。写成 $10^{-12}$ 是把它和 $[OH^-]$ 混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the pH of $0.040$ M $HNO_3$? Report to two decimal places.",
        "zh": "$0.040$ M $HNO_3$ 的 pH 是多少？保留两位小数。"
      },
      "answer": "1.40",
      "accept": [
        "1.4",
        "1.398",
        "1.39"
      ],
      "explanation": {
        "en": "$HNO_3$ is strong, so $[H^+] = 0.040$ M and pH $= -\\log(0.040) = 1.40$. Using $-\\log(0.040)$ as a pOH would wrongly give 12.60.",
        "zh": "$HNO_3$ 是强酸，所以 $[H^+] = 0.040$ M，pH $= -\\log(0.040) = 1.40$。把 $-\\log(0.040)$ 当成 pOH 会错误地得到 12.60。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the pH of $0.025$ M NaOH at 25 °C? Report to two decimal places.",
        "zh": "25 °C 时 $0.025$ M NaOH 的 pH 是多少？保留两位小数。"
      },
      "answer": "12.40",
      "accept": [
        "12.4",
        "12.398",
        "12.39"
      ],
      "explanation": {
        "en": "pOH $= -\\log(0.025) = 1.60$, so pH $= 14 - 1.60 = 12.40$. Stopping at 1.60 gives the pOH, not the pH.",
        "zh": "pOH $= -\\log(0.025) = 1.60$，所以 pH $= 14 - 1.60 = 12.40$。停在 1.60 得到的是 pOH，不是 pH。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the pH of $0.0050$ M $Ba(OH)_2$ at 25 °C?",
        "zh": "25 °C 时 $0.0050$ M $Ba(OH)_2$ 的 pH 是多少？"
      },
      "answer": "12.0",
      "accept": [
        "12",
        "12.00"
      ],
      "explanation": {
        "en": "Each $Ba(OH)_2$ gives 2 $OH^-$, so $[OH^-] = 2(0.0050) = 0.010$ M, pOH $= 2.0$, and pH $= 12.0$. Forgetting to double $[OH^-]$ would give pH 11.7.",
        "zh": "每个 $Ba(OH)_2$ 提供 2 个 $OH^-$，所以 $[OH^-] = 2(0.0050) = 0.010$ M，pOH $= 2.0$，pH $= 12.0$。忘记把 $[OH^-]$ 乘以 2 会得到 pH 11.7。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solution has pOH $= 3.0$. What is $[OH^-]$ in mol/L?",
        "zh": "某溶液 pOH $= 3.0$。$[OH^-]$ 是多少 mol/L？"
      },
      "answer": "1.0e-3",
      "accept": [
        "0.001",
        "1e-3",
        "1.0×10^-3",
        "0.0010",
        "0.00100"
      ],
      "explanation": {
        "en": "$[OH^-] = 10^{-pOH} = 10^{-3.0} = 1.0\\times10^{-3}$ M. Using $10^{-pH}$ here would give $[H^+]$ by mistake.",
        "zh": "$[OH^-] = 10^{-pOH} = 10^{-3.0} = 1.0\\times10^{-3}$ M。在这里用 $10^{-pH}$ 会错误地得到 $[H^+]$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solution has $[H^+] = 2.5\\times10^{-4}$ M. What is its pH? Report to two decimal places.",
        "zh": "某溶液 $[H^+] = 2.5\\times10^{-4}$ M。它的 pH 是多少？保留两位小数。"
      },
      "answer": "3.60",
      "accept": [
        "3.6",
        "3.602",
        "3.60"
      ],
      "explanation": {
        "en": "pH $= -\\log(2.5\\times10^{-4}) = 3.60$. Rounding the exponent to just 4 (ignoring the 2.5 factor) would wrongly give pH 4.",
        "zh": "pH $= -\\log(2.5\\times10^{-4}) = 3.60$。只把指数取成 4（忽略 2.5 这个系数）会错误地得到 pH 4。"
      }
    }
  ],
  "unit-8-acids-and-bases/weak-acids-and-bases": [
    {
      "type": "mc",
      "question": {
        "en": "For the weak acid equilibrium $HA \\rightleftharpoons H^+ + A^-$, which is the correct expression for $K_a$?",
        "zh": "对于弱酸平衡 $HA \\rightleftharpoons H^+ + A^-$，$K_a$ 的正确表达式是哪个？"
      },
      "choices": [
        "$\\frac{[H^+][A^-]}{[HA]}$",
        "$[H^+][A^-]$",
        "$\\frac{[HA]}{[A^-]}$",
        "$\\frac{[HA]}{[H^+][A^-]}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$K_a = \\frac{[H^+][A^-]}{[HA]}$: products over reactants. Flipping it to reactants over products is the classic error, and leaving out $[HA]$ ignores the undissociated acid.",
        "zh": "$K_a = \\frac{[H^+][A^-]}{[HA]}$：生成物在上、反应物在下。把它倒过来写成反应物在上是典型错误，漏掉 $[HA]$ 则忽略了未电离的酸。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A larger value of $K_a$ indicates:",
        "zh": "$K_a$ 值越大表示："
      },
      "choices": [
        "a weaker acid",
        "a stronger acid",
        "a higher pH",
        "no dissociation"
      ],
      "answer": 1,
      "explanation": {
        "en": "A larger $K_a$ means the equilibrium lies farther toward products, so more $H^+$ is released and the acid is stronger. Associating a large $K_a$ with high pH reverses the trend.",
        "zh": "$K_a$ 越大表示平衡更偏向生成物，释放更多 $H^+$，酸更强。把大 $K_a$ 与高 pH 联系起来是把趋势弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Acetic acid has $pK_a = 4.74$. What is its $K_a$?",
        "zh": "醋酸的 $pK_a = 4.74$。它的 $K_a$ 是多少？"
      },
      "choices": [
        "$4.74\\times10^{-5}$",
        "$1.8\\times10^{-4}$",
        "$1.8\\times10^{-5}$",
        "$5.5\\times10^{4}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$K_a = 10^{-pK_a} = 10^{-4.74} = 1.8\\times10^{-5}$. Reading the digits 4.74 directly into the coefficient, or forgetting the negative exponent, gives the wrong forms.",
        "zh": "$K_a = 10^{-pK_a} = 10^{-4.74} = 1.8\\times10^{-5}$。直接把 4.74 当作系数，或忘记负指数，都会得到错误形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a solution of a weak acid, how does the equilibrium $[H^+]$ compare to the initial acid concentration?",
        "zh": "在弱酸溶液中，平衡时的 $[H^+]$ 与酸的初始浓度相比如何？"
      },
      "choices": [
        "$[H^+]$ is greater than the initial concentration",
        "$[H^+]$ equals the initial concentration (full dissociation)",
        "$[H^+]$ equals $K_a$",
        "$[H^+]$ is much less than the initial acid concentration"
      ],
      "answer": 3,
      "explanation": {
        "en": "A weak acid only partially ionizes, so $[H^+]$ is much smaller than the starting concentration. Assuming full dissociation (setting them equal) is the strong-acid mistake.",
        "zh": "弱酸只部分电离，所以 $[H^+]$ 远小于起始浓度。假设完全电离（令两者相等）是把它当强酸的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a conjugate acid-base pair at 25 °C, $K_a \\times K_b = $ ?",
        "zh": "对于 25 °C 的共轭酸碱对，$K_a \\times K_b = $ ？"
      },
      "choices": [
        "$K_w$",
        "$K_a/K_b$",
        "$14$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a conjugate pair, $K_a \\times K_b = K_w = 1.0\\times10^{-14}$. Answering 14 confuses this product with the $pK_a + pK_b$ sum.",
        "zh": "对于共轭对，$K_a \\times K_b = K_w = 1.0\\times10^{-14}$。答 14 是把这个乘积和 $pK_a + pK_b$ 的和混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a conjugate acid-base pair at 25 °C, $pK_a + pK_b = $ ?",
        "zh": "对于 25 °C 的共轭酸碱对，$pK_a + pK_b = $ ？"
      },
      "choices": [
        "7",
        "14",
        "1",
        "0"
      ],
      "answer": 1,
      "explanation": {
        "en": "Taking $-\\log$ of $K_a K_b = K_w = 10^{-14}$ gives $pK_a + pK_b = 14$. The value 7 is the neutral pH, not this sum.",
        "zh": "对 $K_a K_b = K_w = 10^{-14}$ 取 $-\\log$ 得 $pK_a + pK_b = 14$。数值 7 是中性 pH，不是这个和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a $0.10$ M weak acid with $K_a = 1.0\\times10^{-5}$, the approximate $[H^+]$ is:",
        "zh": "对于 $0.10$ M、$K_a = 1.0\\times10^{-5}$ 的弱酸，近似的 $[H^+]$ 是："
      },
      "choices": [
        "$1.0\\times10^{-5}$ M",
        "$0.10$ M",
        "$1.0\\times10^{-3}$ M",
        "$1.0\\times10^{-6}$ M"
      ],
      "answer": 2,
      "explanation": {
        "en": "$[H^+] \\approx \\sqrt{K_a \\cdot C} = \\sqrt{(1.0\\times10^{-5})(0.10)} = \\sqrt{1.0\\times10^{-6}} = 1.0\\times10^{-3}$ M. Using $K_a$ itself as $[H^+]$ skips the square-root step.",
        "zh": "$[H^+] \\approx \\sqrt{K_a \\cdot C} = \\sqrt{(1.0\\times10^{-5})(0.10)} = \\sqrt{1.0\\times10^{-6}} = 1.0\\times10^{-3}$ M。直接把 $K_a$ 当成 $[H^+]$ 是跳过了开方步骤。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the pH of the solution in the previous problem ($[H^+] = 1.0\\times10^{-3}$ M)?",
        "zh": "上一题溶液（$[H^+] = 1.0\\times10^{-3}$ M）的 pH 是多少？"
      },
      "choices": [
        "11.0",
        "5.0",
        "1.0",
        "3.0"
      ],
      "answer": 3,
      "explanation": {
        "en": "pH $= -\\log(1.0\\times10^{-3}) = 3.0$. Answering 5.0 comes from taking $-\\log K_a$ instead of $-\\log[H^+]$.",
        "zh": "pH $= -\\log(1.0\\times10^{-3}) = 3.0$。答 5.0 是取了 $-\\log K_a$ 而不是 $-\\log[H^+]$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the weak base equilibrium $B + H_2O \\rightleftharpoons BH^+ + OH^-$, which is the correct $K_b$ expression?",
        "zh": "对于弱碱平衡 $B + H_2O \\rightleftharpoons BH^+ + OH^-$，$K_b$ 的正确表达式是哪个？"
      },
      "choices": [
        "$\\frac{[BH^+][OH^-]}{[B]}$",
        "$[BH^+][OH^-]$",
        "$\\frac{[B]}{[OH^-]}$",
        "$\\frac{[B]}{[BH^+][OH^-]}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$K_b = \\frac{[BH^+][OH^-]}{[B]}$; liquid water is omitted. Inverting the ratio (reactant over products) is the usual slip.",
        "zh": "$K_b = \\frac{[BH^+][OH^-]}{[B]}$；液态水不写入。把比值倒过来（反应物在上）是常见失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The percent ionization of a weak acid increases when the solution is:",
        "zh": "弱酸的电离百分率在下列哪种情况下增大："
      },
      "choices": [
        "more concentrated",
        "diluted",
        "given a smaller $K_a$",
        "cooled"
      ],
      "answer": 1,
      "explanation": {
        "en": "Diluting a weak acid increases its percent ionization even though $[H^+]$ decreases. Expecting higher concentration to raise percent ionization reverses this relationship.",
        "zh": "稀释弱酸会增大其电离百分率，尽管 $[H^+]$ 减小。以为浓度越高电离百分率越大是把这个关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The conjugate base of a very weak acid is:",
        "zh": "很弱的酸的共轭碱是："
      },
      "choices": [
        "a very weak base",
        "neutral",
        "a relatively strong base",
        "a strong acid"
      ],
      "answer": 2,
      "explanation": {
        "en": "The weaker the acid, the stronger its conjugate base (since $K_a K_b = K_w$). Assuming a weak acid must have a weak conjugate base ignores this inverse relationship.",
        "zh": "酸越弱，其共轭碱越强（因为 $K_a K_b = K_w$）。以为弱酸必然有弱的共轭碱是忽略了这个反比关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which acid is the strongest?",
        "zh": "哪种酸最强？"
      },
      "choices": [
        "$K_a = 1.0\\times10^{-9}$",
        "$K_a = 1.0\\times10^{-5}$",
        "$K_a = 1.0\\times10^{-7}$",
        "$K_a = 1.0\\times10^{-2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The largest $K_a$ ($1.0\\times10^{-2}$) belongs to the strongest acid. Picking the smallest $K_a$ treats a smaller number as more acidic, which is backwards.",
        "zh": "$K_a$ 最大的（$1.0\\times10^{-2}$）对应最强的酸。选 $K_a$ 最小的是误以为数值越小酸性越强，方向反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A weak acid has $K_a = 1.0\\times10^{-5}$. What is its $pK_a$?",
        "zh": "某弱酸 $K_a = 1.0\\times10^{-5}$。它的 $pK_a$ 是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5.00"
      ],
      "explanation": {
        "en": "$pK_a = -\\log K_a = -\\log(1.0\\times10^{-5}) = 5$. Dropping the negative sign of the exponent is the common error.",
        "zh": "$pK_a = -\\log K_a = -\\log(1.0\\times10^{-5}) = 5$。漏掉指数的负号是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.10$ M weak acid has $K_a = 4.0\\times10^{-6}$. What is the pH? Report to two decimal places.",
        "zh": "某 $0.10$ M 弱酸 $K_a = 4.0\\times10^{-6}$。pH 是多少？保留两位小数。"
      },
      "answer": "3.20",
      "accept": [
        "3.2",
        "3.199",
        "3.19"
      ],
      "explanation": {
        "en": "$[H^+] \\approx \\sqrt{(4.0\\times10^{-6})(0.10)} = \\sqrt{4.0\\times10^{-7}} = 6.3\\times10^{-4}$ M, so pH $= -\\log(6.3\\times10^{-4}) = 3.20$. Forgetting the square root and using $K_a$ directly gives a wrong pH near 5.4.",
        "zh": "$[H^+] \\approx \\sqrt{(4.0\\times10^{-6})(0.10)} = \\sqrt{4.0\\times10^{-7}} = 6.3\\times10^{-4}$ M，所以 pH $= -\\log(6.3\\times10^{-4}) = 3.20$。忘记开方、直接用 $K_a$ 会得到约 5.4 的错误 pH。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.20$ M weak acid solution has $[H^+] = 2.0\\times10^{-3}$ M at equilibrium. Calculate $K_a$.",
        "zh": "某 $0.20$ M 弱酸溶液平衡时 $[H^+] = 2.0\\times10^{-3}$ M。计算 $K_a$。"
      },
      "answer": "2.0e-5",
      "accept": [
        "2e-5",
        "0.00002",
        "2.0×10^-5",
        "2.0e-5",
        "2.0E-5"
      ],
      "explanation": {
        "en": "$K_a = \\frac{[H^+][A^-]}{[HA]} = \\frac{(2.0\\times10^{-3})^2}{0.20} = \\frac{4.0\\times10^{-6}}{0.20} = 2.0\\times10^{-5}$. Forgetting to square $[H^+]$ (since $[A^-]=[H^+]$) is the common mistake.",
        "zh": "$K_a = \\frac{[H^+][A^-]}{[HA]} = \\frac{(2.0\\times10^{-3})^2}{0.20} = \\frac{4.0\\times10^{-6}}{0.20} = 2.0\\times10^{-5}$。忘记把 $[H^+]$ 平方（因为 $[A^-]=[H^+]$）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An acid has $K_a = 1.0\\times10^{-5}$. What is $K_b$ for its conjugate base at 25 °C?",
        "zh": "某酸 $K_a = 1.0\\times10^{-5}$。25 °C 时其共轭碱的 $K_b$ 是多少？"
      },
      "answer": "1.0e-9",
      "accept": [
        "1e-9",
        "0.000000001",
        "1.0×10^-9",
        "1.0e-9",
        "1.0E-9"
      ],
      "explanation": {
        "en": "$K_b = K_w/K_a = (1.0\\times10^{-14})/(1.0\\times10^{-5}) = 1.0\\times10^{-9}$. Subtracting exponents wrong or using 7 instead of 14 gives incorrect answers.",
        "zh": "$K_b = K_w/K_a = (1.0\\times10^{-14})/(1.0\\times10^{-5}) = 1.0\\times10^{-9}$。指数相减出错或用 7 代替 14 都会得到错误答案。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.50$ M weak acid has $[H^+] = 1.0\\times10^{-3}$ M. What is the percent ionization (as a percentage)?",
        "zh": "某 $0.50$ M 弱酸的 $[H^+] = 1.0\\times10^{-3}$ M。电离百分率是多少（以百分数表示）？"
      },
      "answer": "0.20",
      "accept": [
        "0.2",
        "0.20%",
        "0.2%",
        "0.20 percent"
      ],
      "explanation": {
        "en": "Percent ionization $= \\frac{[H^+]}{C}\\times100 = \\frac{1.0\\times10^{-3}}{0.50}\\times100 = 0.20\\%$. Forgetting to multiply by 100 (leaving 0.0020) is the usual slip.",
        "zh": "电离百分率 $= \\frac{[H^+]}{C}\\times100 = \\frac{1.0\\times10^{-3}}{0.50}\\times100 = 0.20\\%$。忘记乘以 100（停在 0.0020）是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A weak base has $K_b = 1.0\\times10^{-4}$. What is its $pK_b$?",
        "zh": "某弱碱 $K_b = 1.0\\times10^{-4}$。它的 $pK_b$ 是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4.00"
      ],
      "explanation": {
        "en": "$pK_b = -\\log K_b = -\\log(1.0\\times10^{-4}) = 4$. Dropping the negative sign of the exponent gives the wrong value.",
        "zh": "$pK_b = -\\log K_b = -\\log(1.0\\times10^{-4}) = 4$。漏掉指数负号会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.10$ M weak base has $K_b = 1.0\\times10^{-5}$. What is the pOH?",
        "zh": "某 $0.10$ M 弱碱 $K_b = 1.0\\times10^{-5}$。pOH 是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00"
      ],
      "explanation": {
        "en": "$[OH^-] \\approx \\sqrt{K_b \\cdot C} = \\sqrt{(1.0\\times10^{-5})(0.10)} = 1.0\\times10^{-3}$ M, so pOH $= 3$. Skipping the square root and using $K_b$ as $[OH^-]$ gives a wrong pOH of 5.",
        "zh": "$[OH^-] \\approx \\sqrt{K_b \\cdot C} = \\sqrt{(1.0\\times10^{-5})(0.10)} = 1.0\\times10^{-3}$ M，所以 pOH $= 3$。跳过开方、把 $K_b$ 当成 $[OH^-]$ 会得到错误的 pOH 5。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the weak base in the previous problem (pOH $= 3$), what is the pH at 25 °C?",
        "zh": "对于上一题的弱碱（pOH $= 3$），25 °C 时 pH 是多少？"
      },
      "answer": "11",
      "accept": [
        "11.0",
        "11.00"
      ],
      "explanation": {
        "en": "pH $= 14 - pOH = 14 - 3 = 11$. Reporting 3 forgets to convert pOH to pH for a basic solution.",
        "zh": "pH $= 14 - pOH = 14 - 3 = 11$。答 3 是忘记把碱性溶液的 pOH 换算成 pH。"
      }
    }
  ],
  "unit-8-acids-and-bases/buffers-and-titration-curves": [
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct Henderson-Hasselbalch equation?",
        "zh": "亨德森-哈塞尔巴赫方程的正确形式是哪个？"
      },
      "choices": [
        "$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$",
        "$pH = pK_a + \\log\\frac{[HA]}{[A^-]}$",
        "$pH = pK_a - \\log\\frac{[A^-]}{[HA]}$",
        "$pH = pK_a \\times \\log\\frac{[A^-]}{[HA]}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$: conjugate base over acid, added to $pK_a$. Flipping the ratio to acid over base, or subtracting instead of adding, are the common errors.",
        "zh": "$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$：共轭碱在上、酸在下，与 $pK_a$ 相加。把比值倒成酸在上、或用减法代替加法，是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A buffer solution resists changes in pH when:",
        "zh": "缓冲溶液在下列哪种情况下能抵抗 pH 变化："
      },
      "choices": [
        "large amounts of strong acid overwhelm it",
        "small amounts of acid or base are added",
        "the water is boiled off",
        "it is actually a strong acid"
      ],
      "answer": 1,
      "explanation": {
        "en": "A buffer neutralizes small added amounts of acid or base, keeping pH nearly constant. It fails once large amounts exceed its capacity, so 'large amounts' is not when a buffer works.",
        "zh": "缓冲液能中和少量加入的酸或碱，使 pH 几乎不变。当加入量超过其容量时就失效，所以“大量”不是缓冲起作用的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At the half-equivalence point of a weak acid titration, the pH equals:",
        "zh": "在弱酸滴定的半当量点，pH 等于："
      },
      "choices": [
        "7",
        "$pK_b$",
        "$pK_a$",
        "14"
      ],
      "answer": 2,
      "explanation": {
        "en": "At half-equivalence, $[HA] = [A^-]$, so the log term is zero and pH $= pK_a$. Assuming it is always 7 confuses this with a strong-acid/strong-base equivalence point.",
        "zh": "在半当量点，$[HA] = [A^-]$，对数项为零，pH $= pK_a$。以为它总是 7 是把它和强酸强碱的当量点混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A buffer contains equal concentrations of $HA$ and $A^-$. Its pH equals:",
        "zh": "某缓冲液含有等浓度的 $HA$ 和 $A^-$。它的 pH 等于："
      },
      "choices": [
        "7",
        "$pK_a + 1$",
        "0",
        "$pK_a$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $[A^-]=[HA]$, $\\log(1) = 0$, so pH $= pK_a$. Assuming pH must be 7 ignores that the buffer pH is set by the acid's $pK_a$.",
        "zh": "当 $[A^-]=[HA]$ 时，$\\log(1) = 0$，所以 pH $= pK_a$。以为 pH 必然是 7 是忽略了缓冲液 pH 由酸的 $pK_a$ 决定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A buffer has its greatest buffering capacity when the pH is:",
        "zh": "缓冲液在 pH 处于下列哪种情况时缓冲能力最强："
      },
      "choices": [
        "close to $pK_a$",
        "equal to 7",
        "far from $pK_a$",
        "equal to 14"
      ],
      "answer": 0,
      "explanation": {
        "en": "Buffering capacity is greatest near $pK_a$, where $[HA]$ and $[A^-]$ are comparable. Choosing pH 7 assumes neutrality matters, but what matters is proximity to $pK_a$.",
        "zh": "缓冲能力在接近 $pK_a$ 时最强，此时 $[HA]$ 与 $[A^-]$ 相当。选 pH 7 是以为中性重要，但关键是是否接近 $pK_a$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the titration of a strong acid with a strong base, the pH at the equivalence point is:",
        "zh": "用强碱滴定强酸时，当量点的 pH 是："
      },
      "choices": [
        "less than 7",
        "7",
        "greater than 7",
        "0"
      ],
      "answer": 1,
      "explanation": {
        "en": "The product is a neutral salt and water, so the equivalence-point pH is 7 at 25 °C. Expecting it below 7 assumes leftover acid, but at equivalence the acid is exactly consumed.",
        "zh": "产物是中性盐和水，所以 25 °C 时当量点 pH 为 7。以为它小于 7 是假设有剩余的酸，但在当量点酸恰好被消耗完。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the titration of a weak acid with a strong base, the pH at the equivalence point is:",
        "zh": "用强碱滴定弱酸时，当量点的 pH 是："
      },
      "choices": [
        "exactly 7",
        "less than 7",
        "greater than 7",
        "0"
      ],
      "answer": 2,
      "explanation": {
        "en": "At equivalence the solution contains the conjugate base $A^-$, which hydrolyzes to make the solution basic (pH > 7). Assuming pH 7 ignores the basicity of the conjugate base.",
        "zh": "在当量点溶液含有共轭碱 $A^-$，它水解使溶液呈碱性（pH > 7）。以为 pH 为 7 是忽略了共轭碱的碱性。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pair of substances can form a buffer solution?",
        "zh": "下列哪一对物质能构成缓冲溶液？"
      },
      "choices": [
        "HCl and NaCl",
        "NaCl and NaOH",
        "HCl and NaOH",
        "$CH_3COOH$ and $CH_3COONa$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Acetic acid and its salt (its conjugate base) form a weak-acid/conjugate-base buffer. HCl with NaCl fails because HCl is strong and has no meaningful conjugate base to resist pH change.",
        "zh": "醋酸与其盐（共轭碱）构成弱酸/共轭碱缓冲对。HCl 与 NaCl 不行，因为 HCl 是强酸，其共轭碱无法有效抵抗 pH 变化。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When a small amount of strong acid is added to a $HA$/$A^-$ buffer, what happens?",
        "zh": "向 $HA$/$A^-$ 缓冲液中加入少量强酸时会发生什么？"
      },
      "choices": [
        "the conjugate base $A^-$ neutralizes the added acid",
        "the buffer is destroyed immediately",
        "the pH rises sharply",
        "nothing reacts at all"
      ],
      "answer": 0,
      "explanation": {
        "en": "The conjugate base $A^-$ reacts with the added $H^+$ to form $HA$, keeping pH nearly constant. Expecting a sharp pH rise from adding acid reverses the direction of the change.",
        "zh": "共轭碱 $A^-$ 与加入的 $H^+$ 反应生成 $HA$，使 pH 几乎不变。以为加酸会使 pH 急升是把变化方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A buffer has $[A^-] = [HA] = 0.10$ M and $pK_a = 4.74$. What is the pH?",
        "zh": "某缓冲液 $[A^-] = [HA] = 0.10$ M，$pK_a = 4.74$。pH 是多少？"
      },
      "choices": [
        "5.74",
        "4.74",
        "3.74",
        "7.00"
      ],
      "answer": 1,
      "explanation": {
        "en": "$pH = pK_a + \\log\\frac{[A^-]}{[HA]} = 4.74 + \\log(1) = 4.74$. Assuming pH 7 for any buffer ignores that equal concentrations give pH $= pK_a$.",
        "zh": "$pH = pK_a + \\log\\frac{[A^-]}{[HA]} = 4.74 + \\log(1) = 4.74$。以为任何缓冲液 pH 都是 7 是忽略了等浓度时 pH $= pK_a$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The equivalence point of a titration is the point where:",
        "zh": "滴定的当量点是指："
      },
      "choices": [
        "pH equals $pK_a$",
        "half the acid is neutralized",
        "moles of added base equal moles of acid",
        "the buffer region begins"
      ],
      "answer": 2,
      "explanation": {
        "en": "At the equivalence point the moles of added titrant exactly equal the moles of the substance being titrated. Setting pH $= pK_a$ instead describes the half-equivalence point.",
        "zh": "在当量点，加入滴定剂的摩尔数恰好等于被滴定物质的摩尔数。令 pH $= pK_a$ 描述的是半当量点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a titration, an indicator should be chosen so that its color change occurs near:",
        "zh": "在滴定中，指示剂的选择应使其颜色变化发生在接近："
      },
      "choices": [
        "pH 7 in every case",
        "the $pK_a$ of the acid in every case",
        "pH 0",
        "the pH of the equivalence point"
      ],
      "answer": 3,
      "explanation": {
        "en": "The indicator's transition should match the equivalence-point pH so the color change signals the endpoint. Always choosing pH 7 fails for weak-acid titrations whose equivalence point is above 7.",
        "zh": "指示剂的变色范围应与当量点 pH 匹配，使变色标志终点。总是选 pH 7 对当量点高于 7 的弱酸滴定就会失败。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A buffer has $[A^-] = [HA]$ and $pK_a = 4.74$. What is the pH?",
        "zh": "某缓冲液 $[A^-] = [HA]$，$pK_a = 4.74$。pH 是多少？"
      },
      "answer": "4.74",
      "accept": [
        "4.7",
        "4.74"
      ],
      "explanation": {
        "en": "$pH = pK_a + \\log(1) = pK_a = 4.74$. The log of a 1:1 ratio is zero, so pH equals $pK_a$ exactly.",
        "zh": "$pH = pK_a + \\log(1) = pK_a = 4.74$。1:1 比值的对数为零，所以 pH 恰好等于 $pK_a$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A buffer has $pK_a = 4.74$, $[A^-] = 0.20$ M, and $[HA] = 0.10$ M. What is the pH? Report to two decimal places.",
        "zh": "某缓冲液 $pK_a = 4.74$，$[A^-] = 0.20$ M，$[HA] = 0.10$ M。pH 是多少？保留两位小数。"
      },
      "answer": "5.04",
      "accept": [
        "5.0",
        "5.04",
        "5.041"
      ],
      "explanation": {
        "en": "$pH = 4.74 + \\log\\frac{0.20}{0.10} = 4.74 + \\log(2) = 4.74 + 0.30 = 5.04$. Inverting the ratio to $\\log(0.5)$ would wrongly lower the pH.",
        "zh": "$pH = 4.74 + \\log\\frac{0.20}{0.10} = 4.74 + \\log(2) = 4.74 + 0.30 = 5.04$。把比值倒成 $\\log(0.5)$ 会错误地降低 pH。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A buffer has $pK_a = 4.74$, $[A^-] = 0.10$ M, and $[HA] = 0.20$ M. What is the pH? Report to two decimal places.",
        "zh": "某缓冲液 $pK_a = 4.74$，$[A^-] = 0.10$ M，$[HA] = 0.20$ M。pH 是多少？保留两位小数。"
      },
      "answer": "4.44",
      "accept": [
        "4.4",
        "4.44",
        "4.439"
      ],
      "explanation": {
        "en": "$pH = 4.74 + \\log\\frac{0.10}{0.20} = 4.74 + \\log(0.5) = 4.74 - 0.30 = 4.44$. With more acid than base, the pH is below $pK_a$; flipping the ratio would wrongly raise it.",
        "zh": "$pH = 4.74 + \\log\\frac{0.10}{0.20} = 4.74 + \\log(0.5) = 4.74 - 0.30 = 4.44$。酸多于碱时 pH 低于 $pK_a$；把比值倒过来会错误地升高它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At the half-equivalence point of a weak acid titration, the measured pH is 3.5. What is the $pK_a$ of the acid?",
        "zh": "在弱酸滴定的半当量点测得 pH 为 3.5。该酸的 $pK_a$ 是多少？"
      },
      "answer": "3.5",
      "accept": [
        "3.50",
        "3.5"
      ],
      "explanation": {
        "en": "At half-equivalence $[HA]=[A^-]$, so pH $= pK_a = 3.5$. This point is a direct way to read $pK_a$ off a titration curve.",
        "zh": "在半当量点 $[HA]=[A^-]$，所以 pH $= pK_a = 3.5$。这一点是从滴定曲线直接读出 $pK_a$ 的方法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What volume (in mL) of $0.100$ M NaOH is needed to reach the equivalence point when titrating $25.0$ mL of $0.100$ M HCl?",
        "zh": "滴定 $25.0$ mL 的 $0.100$ M HCl 时，达到当量点需要多少 mL 的 $0.100$ M NaOH？"
      },
      "answer": "25.0",
      "accept": [
        "25",
        "25.00",
        "25.0 mL"
      ],
      "explanation": {
        "en": "Equal concentrations and a 1:1 reaction mean equal volumes: $25.0$ mL of NaOH neutralizes $25.0$ mL of HCl. Using half the volume confuses equivalence with half-equivalence.",
        "zh": "浓度相等且 1:1 反应意味着体积相等：$25.0$ mL NaOH 中和 $25.0$ mL HCl。用一半体积是把当量点和半当量点混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many moles of acid are present in $20.0$ mL of $0.100$ M acid?",
        "zh": "$20.0$ mL 的 $0.100$ M 酸中含有多少摩尔酸？"
      },
      "answer": "2.0e-3",
      "accept": [
        "0.002",
        "2e-3",
        "0.00200",
        "2.00e-3",
        "2.0×10^-3"
      ],
      "explanation": {
        "en": "moles $= M \\times V = 0.100 \\times 0.0200\\,L = 2.0\\times10^{-3}$ mol. Forgetting to convert mL to L (using 20.0 instead of 0.0200) inflates the answer 1000-fold.",
        "zh": "摩尔数 $= M \\times V = 0.100 \\times 0.0200\\,L = 2.0\\times10^{-3}$ mol。忘记把 mL 换成 L（用 20.0 而不是 0.0200）会使结果放大 1000 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a $HA$/$A^-$ buffer, the pH equals $pK_a$ when the ratio $[A^-]/[HA]$ equals what value?",
        "zh": "在 $HA$/$A^-$ 缓冲液中，当 $[A^-]/[HA]$ 的比值等于多少时 pH 等于 $pK_a$？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00",
        "1:1"
      ],
      "explanation": {
        "en": "pH $= pK_a$ requires $\\log\\frac{[A^-]}{[HA]} = 0$, which means the ratio is 1. Any ratio other than 1 shifts the pH away from $pK_a$.",
        "zh": "pH $= pK_a$ 要求 $\\log\\frac{[A^-]}{[HA]} = 0$，即比值为 1。任何不等于 1 的比值都会使 pH 偏离 $pK_a$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A buffer at pH $5.00$ uses an acid with $pK_a = 4.74$. What is the ratio $[A^-]/[HA]$? Report to two decimal places.",
        "zh": "某 pH $5.00$ 的缓冲液使用 $pK_a = 4.74$ 的酸。$[A^-]/[HA]$ 的比值是多少？保留两位小数。"
      },
      "answer": "1.82",
      "accept": [
        "1.8",
        "1.82",
        "1.820"
      ],
      "explanation": {
        "en": "$\\frac{[A^-]}{[HA]} = 10^{(pH - pK_a)} = 10^{(5.00-4.74)} = 10^{0.26} = 1.82$. Subtracting in the wrong order ($pK_a - pH$) would give the reciprocal, about 0.55.",
        "zh": "$\\frac{[A^-]}{[HA]} = 10^{(pH - pK_a)} = 10^{(5.00-4.74)} = 10^{0.26} = 1.82$。相减顺序反了（$pK_a - pH$）会得到倒数，约 0.55。"
      }
    }
  ],
  "unit-9-thermodynamics-electrochemistry/entropy-and-gibbs": [
    {
      "type": "mc",
      "question": {
        "en": "Which process is expected to have a positive change in entropy ($\\Delta S > 0$)?",
        "zh": "下列哪个过程预期熵变为正值（$\\Delta S > 0$）？"
      },
      "choices": [
        "Sublimation of dry ice, $\\text{CO}_2(s) \\rightarrow \\text{CO}_2(g)$",
        "$2\\,\\text{NO}_2(g) \\rightarrow \\text{N}_2\\text{O}_4(g)$",
        "Water freezing into ice",
        "A gas being compressed into a smaller volume"
      ],
      "answer": 0,
      "explanation": {
        "en": "Sublimation converts an ordered solid into a highly disordered gas, so entropy increases. A tempting error is to focus only on temperature; entropy is governed by the number of accessible microstates, and going solid to gas greatly increases them. Freezing, combining two gas molecules into one, and compressing a gas all decrease disorder.",
        "zh": "升华把有序的固体变成高度无序的气体，因此熵增加。一个常见错误是只关注温度；熵取决于可达微观状态数，固体变气体极大地增加了微观状态。结冰、两个气体分子合并成一个、以及压缩气体都会减少无序度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$, what is the sign of $\\Delta S^{\\circ}_{rxn}$?",
        "zh": "对于反应 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$，$\\Delta S^{\\circ}_{rxn}$ 的符号是什么？"
      },
      "choices": [
        "Positive, because a bond is formed",
        "Negative, because moles of gas decrease from 4 to 2",
        "Zero, because atoms are conserved",
        "Positive, because gas molecules move faster"
      ],
      "answer": 1,
      "explanation": {
        "en": "Count moles of gas: 4 mol of reactant gas become 2 mol of product gas, so fewer gas particles means lower entropy and $\\Delta S < 0$. A common trap is thinking atom conservation (mass balance) implies no entropy change; entropy tracks disorder and microstates, not atom count.",
        "zh": "数气体摩尔数：4 摩尔反应物气体变成 2 摩尔产物气体，气体粒子减少意味着熵降低，$\\Delta S < 0$。常见陷阱是认为原子守恒（质量平衡）意味着熵不变；熵衡量的是无序度和微观状态，而不是原子数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Gibbs free energy relationship is given by which equation?",
        "zh": "吉布斯自由能关系由下列哪个方程给出？"
      },
      "choices": [
        "$\\Delta G = \\Delta H + T\\Delta S$",
        "$\\Delta G = T\\Delta H - \\Delta S$",
        "$\\Delta G = \\Delta H - T\\Delta S$",
        "$\\Delta G = \\Delta S - T\\Delta H$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The defining equation is $\\Delta G = \\Delta H - T\\Delta S$, where $T$ is absolute temperature in kelvin. The frequent mistake is adding the $T\\Delta S$ term instead of subtracting it, which would give the wrong sign for the entropy contribution to spontaneity.",
        "zh": "定义方程为 $\\Delta G = \\Delta H - T\\Delta S$，其中 $T$ 是以开尔文为单位的绝对温度。常见错误是把 $T\\Delta S$ 项相加而不是相减，这会使熵对自发性的贡献符号错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A reaction is spontaneous at all temperatures. What must be true of $\\Delta H$ and $\\Delta S$?",
        "zh": "某反应在所有温度下都自发。$\\Delta H$ 和 $\\Delta S$ 必然是什么？"
      },
      "choices": [
        "$\\Delta H > 0$ and $\\Delta S > 0$",
        "$\\Delta H > 0$ and $\\Delta S < 0$",
        "$\\Delta H < 0$ and $\\Delta S < 0$",
        "$\\Delta H < 0$ and $\\Delta S > 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "In $\\Delta G = \\Delta H - T\\Delta S$, to guarantee $\\Delta G < 0$ at every temperature you need a negative $\\Delta H$ and a positive $\\Delta S$, so both terms push $\\Delta G$ negative. A tempting wrong idea is that positive $\\Delta H$ with positive $\\Delta S$ works everywhere, but that combination is only spontaneous at high $T$.",
        "zh": "在 $\\Delta G = \\Delta H - T\\Delta S$ 中，要保证任意温度下 $\\Delta G < 0$，需要负的 $\\Delta H$ 和正的 $\\Delta S$，使两项都把 $\\Delta G$ 推向负值。一个诱人的错误想法是正 $\\Delta H$ 加正 $\\Delta S$ 处处成立，但该组合仅在高温下自发。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A reaction has $\\Delta H = +50\\ \\text{kJ}$ and $\\Delta S = +100\\ \\text{J/K}$. This reaction is spontaneous when temperature is:",
        "zh": "某反应 $\\Delta H = +50\\ \\text{kJ}$，$\\Delta S = +100\\ \\text{J/K}$。该反应在温度满足什么条件时自发？"
      },
      "choices": [
        "Above 500 K",
        "Below 500 K",
        "At all temperatures",
        "At no temperature"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set $\\Delta G = \\Delta H - T\\Delta S = 0$ to find the crossover: $T = \\Delta H/\\Delta S = 50000\\ \\text{J} / 100\\ \\text{J/K} = 500\\ \\text{K}$. Above this temperature the $T\\Delta S$ term dominates and $\\Delta G < 0$. A classic error is forgetting to convert 50 kJ into 50000 J, which throws the crossover temperature off by a factor of 1000.",
        "zh": "令 $\\Delta G = \\Delta H - T\\Delta S = 0$ 求转折点：$T = \\Delta H/\\Delta S = 50000\\ \\text{J} / 100\\ \\text{J/K} = 500\\ \\text{K}$。高于此温度时 $T\\Delta S$ 项占主导，$\\Delta G < 0$。一个典型错误是忘记把 50 kJ 换算成 50000 J，这会使转折温度相差 1000 倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At equilibrium, what is the value of $\\Delta G$ for a reaction?",
        "zh": "在平衡时，反应的 $\\Delta G$ 值是多少？"
      },
      "choices": [
        "Equal to $\\Delta G^{\\circ}$",
        "Zero",
        "Positive",
        "Negative"
      ],
      "answer": 1,
      "explanation": {
        "en": "At equilibrium there is no net driving force, so $\\Delta G = 0$. Note this is $\\Delta G$, not $\\Delta G^{\\circ}$; a common confusion is that $\\Delta G^{\\circ}$ is zero at equilibrium, but $\\Delta G^{\\circ}$ is fixed by standard states and generally is not zero (it relates to $K$ by $\\Delta G^{\\circ} = -RT\\ln K$).",
        "zh": "在平衡时没有净推动力，因此 $\\Delta G = 0$。注意这里是 $\\Delta G$ 而不是 $\\Delta G^{\\circ}$；常见混淆是认为平衡时 $\\Delta G^{\\circ}$ 为零，但 $\\Delta G^{\\circ}$ 由标准状态确定，通常不为零（它通过 $\\Delta G^{\\circ} = -RT\\ln K$ 与 $K$ 相关）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\Delta G^{\\circ}$ for a reaction is negative, what does that imply about the equilibrium constant $K$?",
        "zh": "若某反应的 $\\Delta G^{\\circ}$ 为负，这对平衡常数 $K$ 意味着什么？"
      },
      "choices": [
        "$K = 1$",
        "$K < 1$, reactants are favored",
        "$K > 1$, products are favored",
        "$K = 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "From $\\Delta G^{\\circ} = -RT\\ln K$, a negative $\\Delta G^{\\circ}$ requires $\\ln K > 0$, so $K > 1$ and products are favored. The tempting error is mixing up the sign: a negative $\\Delta G^{\\circ}$ does NOT give $K < 1$; that would correspond to a positive $\\Delta G^{\\circ}$.",
        "zh": "由 $\\Delta G^{\\circ} = -RT\\ln K$，负的 $\\Delta G^{\\circ}$ 要求 $\\ln K > 0$，因此 $K > 1$，产物占优。诱人的错误是弄反符号：负的 $\\Delta G^{\\circ}$ 不会给出 $K < 1$；那对应的是正的 $\\Delta G^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about the second law of thermodynamics is correct?",
        "zh": "关于热力学第二定律，下列哪种说法正确？"
      },
      "choices": [
        "The entropy of the system always increases",
        "Energy of the universe always increases",
        "The entropy of the surroundings always increases",
        "The entropy of the universe increases for a spontaneous process"
      ],
      "answer": 3,
      "explanation": {
        "en": "The second law states that for any spontaneous process $\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$. A frequent mistake is claiming the system's entropy must increase; the system can lose entropy (e.g., freezing) as long as the surroundings gain more, keeping the universe's total positive.",
        "zh": "第二定律指出，任何自发过程 $\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$。常见错误是声称系统的熵必须增加；只要环境增加得更多、使宇宙总熵为正，系统可以失去熵（如结冰）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which substance has the highest standard molar entropy $S^{\\circ}$?",
        "zh": "下列哪种物质的标准摩尔熵 $S^{\\circ}$ 最高？"
      },
      "choices": [
        "$\\text{H}_2\\text{O}(g)$",
        "$\\text{H}_2\\text{O}(l)$",
        "$\\text{C}(\\text{diamond})$",
        "$\\text{H}_2\\text{O}(s)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For the same substance, entropy increases solid < liquid < gas, so water vapor has the highest molar entropy of these options. A tempting error is choosing a hard, rigid solid like diamond thinking mass or bonding raises entropy, but a rigid crystalline solid has very low entropy because its atoms are highly ordered.",
        "zh": "对同一物质，熵按固体 < 液体 < 气体递增，因此水蒸气的摩尔熵在这些选项中最高。诱人的错误是选择像金刚石这样坚硬刚性的固体，以为质量或键合会提高熵，但刚性晶体固体因原子高度有序而熵极低。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A reaction has $\\Delta H < 0$ and $\\Delta S < 0$. Under what conditions is it spontaneous?",
        "zh": "某反应 $\\Delta H < 0$ 且 $\\Delta S < 0$。在什么条件下自发？"
      },
      "choices": [
        "At high temperatures only",
        "At low temperatures only",
        "At all temperatures",
        "Never spontaneous"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $\\Delta H < 0$ favoring spontaneity and $-T\\Delta S > 0$ opposing it, low temperature keeps the unfavorable $-T\\Delta S$ term small so $\\Delta G < 0$. A common error is assuming exothermic reactions are always spontaneous; the negative entropy term makes it non-spontaneous once $T$ is high enough.",
        "zh": "$\\Delta H < 0$ 有利于自发，而 $-T\\Delta S > 0$ 不利，低温使不利的 $-T\\Delta S$ 项很小，因此 $\\Delta G < 0$。常见错误是认为放热反应总是自发；负熵项会在温度足够高时使其变为非自发。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best explains why $\\Delta S^{\\circ}$ is positive when a solid ionic compound dissolves to form separated aqueous ions?",
        "zh": "为什么固态离子化合物溶解生成分散的水合离子时 $\\Delta S^{\\circ}$ 为正？下列哪个解释最好？"
      },
      "choices": [
        "The ions gain potential energy",
        "Water molecules become more ordered",
        "The ordered crystal lattice breaks apart, increasing disorder",
        "The temperature of the solution rises"
      ],
      "answer": 2,
      "explanation": {
        "en": "Dissolving generally increases entropy because the highly ordered crystal lattice is broken apart and the ions spread through the solution, greatly increasing the number of microstates. A tempting but incorrect reason is a temperature change; entropy here is about positional disorder of particles, not the thermal effect of dissolving.",
        "zh": "溶解通常增加熵，因为高度有序的晶格被破坏，离子分散到溶液中，极大地增加了微观状态数。一个诱人但错误的理由是温度变化；这里的熵关乎粒子的位置无序度，而非溶解的热效应。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A reaction is non-spontaneous under standard conditions ($\\Delta G^{\\circ} > 0$). How can it still be made to proceed?",
        "zh": "某反应在标准条件下非自发（$\\Delta G^{\\circ} > 0$）。如何仍能使其进行？"
      },
      "choices": [
        "By adding a catalyst",
        "It can never proceed",
        "By making $\\Delta G^{\\circ}$ larger",
        "By coupling it to a reaction with a large negative $\\Delta G$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Coupling a non-spontaneous reaction to a strongly spontaneous one (large negative $\\Delta G$) can make the overall $\\Delta G$ negative, as in ATP-driven biological reactions. A common misconception is that a catalyst makes a reaction spontaneous; a catalyst only speeds up the rate and never changes $\\Delta G$ or the position of equilibrium.",
        "zh": "把非自发反应与强自发反应（大负 $\\Delta G$）耦合，可使总 $\\Delta G$ 为负，如 ATP 驱动的生物反应。常见误解是催化剂使反应自发；催化剂只加快速率，绝不改变 $\\Delta G$ 或平衡位置。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Calculate $\\Delta G$ (in kJ) at 298 K for a reaction with $\\Delta H = -92.2\\ \\text{kJ}$ and $\\Delta S = -198.7\\ \\text{J/K}$. Round to one decimal place.",
        "zh": "计算 298 K 时某反应的 $\\Delta G$（单位 kJ），其中 $\\Delta H = -92.2\\ \\text{kJ}$，$\\Delta S = -198.7\\ \\text{J/K}$。保留一位小数。"
      },
      "answer": "-33.0",
      "accept": [
        "-33.0",
        "-33",
        "-32.99",
        "-33.01",
        "-33.0 kJ",
        "-33 kJ",
        "-33.0kJ"
      ],
      "explanation": {
        "en": "Convert entropy to kJ: $\\Delta S = -0.1987\\ \\text{kJ/K}$. Then $\\Delta G = \\Delta H - T\\Delta S = -92.2 - (298)(-0.1987) = -92.2 + 59.2 = -33.0\\ \\text{kJ}$. The most common error is failing to convert $\\Delta S$ from J/K to kJ/K, which makes the $T\\Delta S$ term 1000 times too large.",
        "zh": "把熵换算成 kJ：$\\Delta S = -0.1987\\ \\text{kJ/K}$。则 $\\Delta G = \\Delta H - T\\Delta S = -92.2 - (298)(-0.1987) = -92.2 + 59.2 = -33.0\\ \\text{kJ}$。最常见错误是没有把 $\\Delta S$ 从 J/K 换成 kJ/K，使 $T\\Delta S$ 项大了 1000 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A reaction has $\\Delta H = +30.0\\ \\text{kJ}$ and $\\Delta S = +60.0\\ \\text{J/K}$. At what temperature (in K) does $\\Delta G = 0$?",
        "zh": "某反应 $\\Delta H = +30.0\\ \\text{kJ}$，$\\Delta S = +60.0\\ \\text{J/K}$。在什么温度（单位 K）下 $\\Delta G = 0$？"
      },
      "answer": "500",
      "accept": [
        "500",
        "500.0",
        "500 K",
        "500K",
        "500 k"
      ],
      "explanation": {
        "en": "Set $\\Delta G = 0$: $T = \\Delta H/\\Delta S = 30000\\ \\text{J} / 60.0\\ \\text{J/K} = 500\\ \\text{K}$. Be sure to convert $\\Delta H$ to joules (30000 J) so the units of $\\Delta H$ and $\\Delta S$ match; using 30 kJ directly with J/K gives the wrong answer by a factor of 1000.",
        "zh": "令 $\\Delta G = 0$：$T = \\Delta H/\\Delta S = 30000\\ \\text{J} / 60.0\\ \\text{J/K} = 500\\ \\text{K}$。务必把 $\\Delta H$ 换成焦耳（30000 J），使 $\\Delta H$ 与 $\\Delta S$ 单位一致；直接用 30 kJ 配 J/K 会相差 1000 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\Delta G^{\\circ} = -RT\\ln K$ with $R = 8.314\\ \\text{J/(mol·K)}$ and $T = 298\\ \\text{K}$, calculate $\\Delta G^{\\circ}$ (in kJ/mol) when $K = 1.0$. Give the numeric value.",
        "zh": "已知 $\\Delta G^{\\circ} = -RT\\ln K$，$R = 8.314\\ \\text{J/(mol·K)}$，$T = 298\\ \\text{K}$，当 $K = 1.0$ 时计算 $\\Delta G^{\\circ}$（单位 kJ/mol）。给出数值。"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0",
        "0 kJ/mol",
        "0.00",
        "zero"
      ],
      "explanation": {
        "en": "When $K = 1$, $\\ln K = \\ln 1 = 0$, so $\\Delta G^{\\circ} = -RT(0) = 0$. A tempting mistake is to plug $K = 1$ and compute $-RT \\times 1$; the logarithm of 1, not $K$ itself, appears in the formula, and $\\ln 1 = 0$.",
        "zh": "当 $K = 1$ 时，$\\ln K = \\ln 1 = 0$，所以 $\\Delta G^{\\circ} = -RT(0) = 0$。诱人的错误是代入 $K = 1$ 并算 $-RT \\times 1$；公式中出现的是 1 的对数而非 $K$ 本身，且 $\\ln 1 = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Calculate $\\Delta S^{\\circ}_{rxn}$ (in J/K) for a reaction where $\\sum S^{\\circ}(\\text{products}) = 320.5\\ \\text{J/K}$ and $\\sum S^{\\circ}(\\text{reactants}) = 405.0\\ \\text{J/K}$.",
        "zh": "某反应 $\\sum S^{\\circ}(\\text{产物}) = 320.5\\ \\text{J/K}$，$\\sum S^{\\circ}(\\text{反应物}) = 405.0\\ \\text{J/K}$，计算 $\\Delta S^{\\circ}_{rxn}$（单位 J/K）。"
      },
      "answer": "-84.5",
      "accept": [
        "-84.5",
        "-84.50",
        "-84.5 J/K",
        "-84.5J/K"
      ],
      "explanation": {
        "en": "$\\Delta S^{\\circ}_{rxn} = \\sum S^{\\circ}(\\text{products}) - \\sum S^{\\circ}(\\text{reactants}) = 320.5 - 405.0 = -84.5\\ \\text{J/K}$. The common error is reversing the order (reactants minus products), which gives the wrong sign; always subtract reactants from products.",
        "zh": "$\\Delta S^{\\circ}_{rxn} = \\sum S^{\\circ}(\\text{产物}) - \\sum S^{\\circ}(\\text{反应物}) = 320.5 - 405.0 = -84.5\\ \\text{J/K}$。常见错误是顺序颠倒（反应物减产物），会得到错误符号；始终用产物减反应物。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a reaction at 350 K, $\\Delta H = +45.0\\ \\text{kJ}$ and $\\Delta S = +90.0\\ \\text{J/K}$. Calculate $\\Delta G$ in kJ. Round to one decimal place.",
        "zh": "某反应在 350 K，$\\Delta H = +45.0\\ \\text{kJ}$，$\\Delta S = +90.0\\ \\text{J/K}$。计算 $\\Delta G$（单位 kJ），保留一位小数。"
      },
      "answer": "13.5",
      "accept": [
        "13.5",
        "+13.5",
        "13.50",
        "13.5 kJ",
        "13.5kJ"
      ],
      "explanation": {
        "en": "Convert $\\Delta S = 0.0900\\ \\text{kJ/K}$. Then $\\Delta G = 45.0 - (350)(0.0900) = 45.0 - 31.5 = 13.5\\ \\text{kJ}$. Since $\\Delta G > 0$, the reaction is non-spontaneous at 350 K. Forgetting the J-to-kJ conversion of $\\Delta S$ is the usual pitfall.",
        "zh": "换算 $\\Delta S = 0.0900\\ \\text{kJ/K}$。则 $\\Delta G = 45.0 - (350)(0.0900) = 45.0 - 31.5 = 13.5\\ \\text{kJ}$。由于 $\\Delta G > 0$，该反应在 350 K 非自发。忘记把 $\\Delta S$ 从 J 换成 kJ 是常见陷阱。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $\\Delta G^{\\circ} = -RT\\ln K$ with $R = 8.314\\ \\text{J/(mol·K)}$, $T = 298\\ \\text{K}$, and $K = 1.0\\times 10^{5}$, calculate $\\Delta G^{\\circ}$ in kJ/mol. Round to one decimal place.",
        "zh": "用 $\\Delta G^{\\circ} = -RT\\ln K$，$R = 8.314\\ \\text{J/(mol·K)}$，$T = 298\\ \\text{K}$，$K = 1.0\\times 10^{5}$，计算 $\\Delta G^{\\circ}$（单位 kJ/mol），保留一位小数。"
      },
      "answer": "-28.5",
      "accept": [
        "-28.5",
        "-28.5 kJ/mol",
        "-28.5kJ/mol",
        "-28.53",
        "-28.5 kJ",
        "-28.6"
      ],
      "explanation": {
        "en": "$\\ln(1.0\\times10^{5}) = 11.513$. Then $\\Delta G^{\\circ} = -(8.314)(298)(11.513) = -28521\\ \\text{J/mol} = -28.5\\ \\text{kJ/mol}$. A common error is using $\\log_{10} K = 5$ instead of the natural log $\\ln K = 11.513$; the formula requires $\\ln$, not $\\log$.",
        "zh": "$\\ln(1.0\\times10^{5}) = 11.513$。则 $\\Delta G^{\\circ} = -(8.314)(298)(11.513) = -28521\\ \\text{J/mol} = -28.5\\ \\text{kJ/mol}$。常见错误是用 $\\log_{10} K = 5$ 而非自然对数 $\\ln K = 11.513$；公式要求 $\\ln$ 而非 $\\log$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A phase transition (melting) occurs at equilibrium at 273 K with $\\Delta H_{fus} = 6.01\\ \\text{kJ/mol}$. Calculate $\\Delta S_{fus}$ in J/(mol·K). Round to one decimal place.",
        "zh": "在 273 K 平衡时发生相变（熔化），$\\Delta H_{fus} = 6.01\\ \\text{kJ/mol}$。计算 $\\Delta S_{fus}$（单位 J/(mol·K)），保留一位小数。"
      },
      "answer": "22.0",
      "accept": [
        "22.0",
        "22",
        "22.01",
        "22.0 J/(mol·K)",
        "22.0 J/mol/K",
        "21.98",
        "22.0 J/molK"
      ],
      "explanation": {
        "en": "At equilibrium $\\Delta G = 0$, so $\\Delta S = \\Delta H / T = 6010\\ \\text{J/mol} / 273\\ \\text{K} = 22.0\\ \\text{J/(mol·K)}$. Remember to convert 6.01 kJ to 6010 J; leaving it in kJ gives a value 1000 times too small.",
        "zh": "平衡时 $\\Delta G = 0$，所以 $\\Delta S = \\Delta H / T = 6010\\ \\text{J/mol} / 273\\ \\text{K} = 22.0\\ \\text{J/(mol·K)}$。记得把 6.01 kJ 换成 6010 J；留在 kJ 会使结果小 1000 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The surroundings absorb 40.0 kJ of heat at 400 K from an exothermic reaction. Calculate $\\Delta S_{surroundings}$ in J/K (positive value). Round to one decimal place.",
        "zh": "在 400 K 时，环境从放热反应吸收 40.0 kJ 热量。计算 $\\Delta S_{surroundings}$（单位 J/K，正值），保留一位小数。"
      },
      "answer": "100.0",
      "accept": [
        "100.0",
        "100",
        "+100",
        "100 J/K",
        "100.0 J/K",
        "100.0J/K"
      ],
      "explanation": {
        "en": "$\\Delta S_{surr} = q_{surr}/T = 40000\\ \\text{J} / 400\\ \\text{K} = 100.0\\ \\text{J/K}$, positive because the surroundings gain heat. A common error is using $q$ in kJ or using the wrong sign; for an exothermic reaction the surroundings gain heat, so their entropy increases.",
        "zh": "$\\Delta S_{surr} = q_{surr}/T = 40000\\ \\text{J} / 400\\ \\text{K} = 100.0\\ \\text{J/K}$，为正因为环境吸热。常见错误是把 $q$ 用 kJ 或用错符号；放热反应中环境吸热，因此其熵增加。"
      }
    }
  ],
  "unit-9-thermodynamics-electrochemistry/electrochemistry": [
    {
      "type": "mc",
      "question": {
        "en": "In an electrochemical cell, oxidation always occurs at which electrode?",
        "zh": "在电化学电池中，氧化总是发生在哪个电极？"
      },
      "choices": [
        "The anode",
        "The cathode",
        "The salt bridge",
        "The electrode with the lower mass"
      ],
      "answer": 0,
      "explanation": {
        "en": "By definition, oxidation (loss of electrons) occurs at the anode and reduction at the cathode, in both galvanic and electrolytic cells. A common mix-up is to associate oxidation with the cathode; the mnemonic 'An Ox, Red Cat' (Anode = Oxidation, Reduction = Cathode) keeps them straight.",
        "zh": "根据定义，氧化（失电子）发生在阳极，还原发生在阴极，无论原电池还是电解池皆如此。常见混淆是把氧化与阴极联系起来；口诀记忆有助于区分（阳极氧化、阴极还原）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a galvanic (voltaic) cell to be spontaneous, the standard cell potential $E^{\\circ}_{cell}$ must be:",
        "zh": "对于自发的原电池（伏打电池），标准电池电位 $E^{\\circ}_{cell}$ 必须是："
      },
      "choices": [
        "Negative",
        "Positive",
        "Zero",
        "Equal to 1.0 V"
      ],
      "answer": 1,
      "explanation": {
        "en": "A galvanic cell runs spontaneously only when $E^{\\circ}_{cell} > 0$, which corresponds to $\\Delta G^{\\circ} < 0$ through $\\Delta G^{\\circ} = -nFE^{\\circ}$. A tempting error is thinking a negative potential is spontaneous; a negative $E^{\\circ}_{cell}$ describes an electrolytic cell that requires an external power source.",
        "zh": "只有当 $E^{\\circ}_{cell} > 0$ 时原电池才自发运行，这通过 $\\Delta G^{\\circ} = -nFE^{\\circ}$ 对应 $\\Delta G^{\\circ} < 0$。诱人的错误是认为负电位自发；负的 $E^{\\circ}_{cell}$ 描述需要外接电源的电解池。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $E^{\\circ}(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\ \\text{V}$ and $E^{\\circ}(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\ \\text{V}$, what is $E^{\\circ}_{cell}$ for the Zn-Cu cell?",
        "zh": "已知 $E^{\\circ}(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\ \\text{V}$，$E^{\\circ}(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\ \\text{V}$，锌铜电池的 $E^{\\circ}_{cell}$ 是多少？"
      },
      "choices": [
        "$+0.42\\ \\text{V}$",
        "$-1.10\\ \\text{V}$",
        "$+1.10\\ \\text{V}$",
        "$-0.42\\ \\text{V}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$E^{\\circ}_{cell} = E^{\\circ}_{cathode} - E^{\\circ}_{anode}$. Cu is reduced (cathode) and Zn is oxidized (anode): $0.34 - (-0.76) = +1.10\\ \\text{V}$. A common error is adding the magnitudes without watching signs, or reversing which half-reaction is the cathode, which flips the sign of the result.",
        "zh": "$E^{\\circ}_{cell} = E^{\\circ}_{阴极} - E^{\\circ}_{阳极}$。铜被还原（阴极），锌被氧化（阳极）：$0.34 - (-0.76) = +1.10\\ \\text{V}$。常见错误是忽略符号直接加绝对值，或搞反哪个半反应是阴极，都会使结果符号颠倒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the role of the salt bridge in a galvanic cell?",
        "zh": "盐桥在原电池中的作用是什么？"
      },
      "choices": [
        "To provide electrons to the circuit",
        "To store the products of the reaction",
        "To speed up the reaction like a catalyst",
        "To maintain electrical neutrality by allowing ion flow"
      ],
      "answer": 3,
      "explanation": {
        "en": "The salt bridge lets ions migrate between half-cells to balance charge buildup as electrons flow through the wire, keeping each half-cell electrically neutral. A tempting misconception is that the salt bridge carries the electrons; electrons travel through the external wire, while ions move through the salt bridge.",
        "zh": "盐桥让离子在两个半电池间迁移，以平衡电子流经导线时积累的电荷，保持各半电池电中性。诱人的误解是盐桥传输电子；电子经外部导线传输，离子则通过盐桥移动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the cell notation $\\text{Zn}(s)\\,|\\,\\text{Zn}^{2+}(aq)\\,||\\,\\text{Cu}^{2+}(aq)\\,|\\,\\text{Cu}(s)$, which species is oxidized?",
        "zh": "在电池符号 $\\text{Zn}(s)\\,|\\,\\text{Zn}^{2+}(aq)\\,||\\,\\text{Cu}^{2+}(aq)\\,|\\,\\text{Cu}(s)$ 中，哪种物质被氧化？"
      },
      "choices": [
        "$\\text{Zn}$",
        "$\\text{Cu}$",
        "$\\text{Cu}^{2+}$",
        "$\\text{Zn}^{2+}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By convention the anode (oxidation) is written on the left, so $\\text{Zn}(s)$ is oxidized to $\\text{Zn}^{2+}$. A frequent error is reading the notation backward; the double bar marks the salt bridge, with the left side always the anode and the right side always the cathode.",
        "zh": "按惯例阳极（氧化）写在左边，因此 $\\text{Zn}(s)$ 被氧化为 $\\text{Zn}^{2+}$。常见错误是把符号读反；双竖线表示盐桥，左侧始终是阳极，右侧始终是阴极。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "According to $\\Delta G^{\\circ} = -nFE^{\\circ}_{cell}$, a cell with a large positive $E^{\\circ}_{cell}$ has a $\\Delta G^{\\circ}$ that is:",
        "zh": "根据 $\\Delta G^{\\circ} = -nFE^{\\circ}_{cell}$，具有大正 $E^{\\circ}_{cell}$ 的电池，其 $\\Delta G^{\\circ}$ 是："
      },
      "choices": [
        "Large and positive",
        "Large and negative",
        "Zero",
        "Slightly positive"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because of the negative sign in $\\Delta G^{\\circ} = -nFE^{\\circ}$, a large positive $E^{\\circ}_{cell}$ produces a large negative $\\Delta G^{\\circ}$, meaning a strongly spontaneous reaction. The tempting error is ignoring that negative sign and matching a positive potential with a positive free energy.",
        "zh": "由于 $\\Delta G^{\\circ} = -nFE^{\\circ}$ 中的负号，大正 $E^{\\circ}_{cell}$ 产生大负 $\\Delta G^{\\circ}$，意味着强自发反应。诱人的错误是忽略负号，把正电位与正自由能相匹配。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "During the electrolysis of molten $\\text{NaCl}$, what is produced at the cathode?",
        "zh": "在电解熔融 $\\text{NaCl}$ 时，阴极产生什么？"
      },
      "choices": [
        "$\\text{Cl}_2$ gas",
        "$\\text{O}_2$ gas",
        "$\\text{Na}$ metal",
        "$\\text{H}_2$ gas"
      ],
      "answer": 2,
      "explanation": {
        "en": "Reduction occurs at the cathode, so $\\text{Na}^{+}$ gains an electron to form $\\text{Na}$ metal, while $\\text{Cl}^{-}$ is oxidized to $\\text{Cl}_2$ at the anode. A common error is expecting hydrogen or oxygen, but molten NaCl contains no water, so only sodium and chlorine can form.",
        "zh": "还原发生在阴极，因此 $\\text{Na}^{+}$ 得电子生成 $\\text{Na}$ 金属，而 $\\text{Cl}^{-}$ 在阳极被氧化为 $\\text{Cl}_2$。常见错误是期望生成氢气或氧气，但熔融 NaCl 不含水，因此只能生成钠和氯。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As a galvanic cell operates, in which direction do electrons flow in the external wire?",
        "zh": "原电池工作时，电子在外部导线中向哪个方向流动？"
      },
      "choices": [
        "From cathode to anode",
        "In both directions equally",
        "They do not flow; only ions move",
        "From anode to cathode"
      ],
      "answer": 3,
      "explanation": {
        "en": "Electrons are released by oxidation at the anode and travel through the external wire to the cathode where reduction consumes them, so the flow is anode to cathode. A frequent mistake is reversing this; conventional current flows the opposite way, but electron flow itself goes from anode to cathode.",
        "zh": "电子在阳极由氧化释放，经外部导线流向阴极，在阴极被还原消耗，因此流向是阳极到阴极。常见错误是把方向搞反；传统电流方向相反，但电子本身从阳极流向阴极。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Nernst equation shows that increasing the concentration of reactants (relative to products) will cause the cell potential $E_{cell}$ to:",
        "zh": "能斯特方程表明，增大反应物浓度（相对于产物）将使电池电位 $E_{cell}$："
      },
      "choices": [
        "Increase",
        "Decrease",
        "Remain unchanged",
        "Become zero immediately"
      ],
      "answer": 0,
      "explanation": {
        "en": "In $E = E^{\\circ} - \\frac{RT}{nF}\\ln Q$, raising reactant concentrations lowers $Q$, and a smaller $\\ln Q$ makes the subtracted term smaller, so $E_{cell}$ increases. A tempting error is assuming concentration has no effect; only at standard conditions ($Q = 1$) does $E$ equal $E^{\\circ}$.",
        "zh": "在 $E = E^{\\circ} - \\frac{RT}{nF}\\ln Q$ 中，增大反应物浓度降低 $Q$，较小的 $\\ln Q$ 使被减项变小，因此 $E_{cell}$ 增大。诱人的错误是认为浓度无影响；只有在标准条件（$Q = 1$）下 $E$ 才等于 $E^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In electroplating, the object to be plated with metal is connected as the:",
        "zh": "在电镀中，要镀上金属的物件被连接为："
      },
      "choices": [
        "Anode, where oxidation occurs",
        "Cathode, where reduction occurs",
        "Salt bridge",
        "Both electrodes at once"
      ],
      "answer": 1,
      "explanation": {
        "en": "The object to be plated is the cathode, where metal cations from solution are reduced and deposit onto its surface. A tempting error is choosing the anode; the anode is instead the source metal that dissolves (oxidizes) to replenish the ions in solution.",
        "zh": "要镀的物件是阴极，溶液中的金属阳离子在此被还原并沉积到其表面。诱人的错误是选阳极；阳极反而是源金属，它溶解（氧化）以补充溶液中的离子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A concentration cell uses the same electrode material in both half-cells. Its standard cell potential $E^{\\circ}_{cell}$ equals:",
        "zh": "浓差电池两个半电池使用相同的电极材料。其标准电池电位 $E^{\\circ}_{cell}$ 等于："
      },
      "choices": [
        "Exactly 1.10 V",
        "A large negative value",
        "0 V",
        "It cannot be defined"
      ],
      "answer": 2,
      "explanation": {
        "en": "Because both half-cells have identical electrode chemistry, $E^{\\circ}_{cathode} = E^{\\circ}_{anode}$, so $E^{\\circ}_{cell} = 0\\ \\text{V}$. Any nonzero voltage comes entirely from the concentration difference through the Nernst equation. The tempting error is assuming a concentration cell can produce no voltage at all, but a difference in concentration still drives a measurable $E_{cell}$.",
        "zh": "由于两个半电池的电极化学完全相同，$E^{\\circ}_{阴极} = E^{\\circ}_{阳极}$，所以 $E^{\\circ}_{cell} = 0\\ \\text{V}$。任何非零电压都完全来自浓度差，通过能斯特方程体现。诱人的错误是认为浓差电池根本不能产生电压，但浓度差仍能驱动可测量的 $E_{cell}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly distinguishes an electrolytic cell from a galvanic cell?",
        "zh": "下列哪种说法正确区分了电解池与原电池？"
      },
      "choices": [
        "An electrolytic cell has no anode or cathode",
        "An electrolytic cell is spontaneous and has $E^{\\circ}_{cell} > 0$",
        "Both cells produce electrical energy spontaneously",
        "An electrolytic cell requires an external power source and has $E^{\\circ}_{cell} < 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "An electrolytic cell drives a non-spontaneous reaction ($E^{\\circ}_{cell} < 0$, $\\Delta G^{\\circ} > 0$) using an external power supply, whereas a galvanic cell releases energy spontaneously ($E^{\\circ}_{cell} > 0$). A common confusion is thinking both types generate electricity; only the galvanic cell does, while the electrolytic cell consumes it.",
        "zh": "电解池用外接电源驱动非自发反应（$E^{\\circ}_{cell} < 0$，$\\Delta G^{\\circ} > 0$），而原电池自发释放能量（$E^{\\circ}_{cell} > 0$）。常见混淆是认为两类都产生电能；只有原电池产生，电解池则消耗电能。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Calculate $E^{\\circ}_{cell}$ (in V) given $E^{\\circ}_{cathode} = +0.80\\ \\text{V}$ and $E^{\\circ}_{anode} = -0.44\\ \\text{V}$. Give the value in volts.",
        "zh": "已知 $E^{\\circ}_{阴极} = +0.80\\ \\text{V}$，$E^{\\circ}_{阳极} = -0.44\\ \\text{V}$，计算 $E^{\\circ}_{cell}$（单位 V）。给出电压值。"
      },
      "answer": "1.24",
      "accept": [
        "1.24",
        "+1.24",
        "1.24 V",
        "1.24V",
        "1.240"
      ],
      "explanation": {
        "en": "$E^{\\circ}_{cell} = E^{\\circ}_{cathode} - E^{\\circ}_{anode} = 0.80 - (-0.44) = +1.24\\ \\text{V}$. Watch the double negative: subtracting $-0.44$ adds it. A common error is computing $0.80 - 0.44 = 0.36$ by dropping the anode's negative sign.",
        "zh": "$E^{\\circ}_{cell} = E^{\\circ}_{阴极} - E^{\\circ}_{阳极} = 0.80 - (-0.44) = +1.24\\ \\text{V}$。注意双重负号：减去 $-0.44$ 即加上它。常见错误是丢掉阳极负号算成 $0.80 - 0.44 = 0.36$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $\\Delta G^{\\circ} = -nFE^{\\circ}_{cell}$ with $n = 2$, $F = 96485\\ \\text{C/mol}$, and $E^{\\circ}_{cell} = 1.10\\ \\text{V}$, calculate $\\Delta G^{\\circ}$ in kJ/mol. Round to the nearest whole number.",
        "zh": "用 $\\Delta G^{\\circ} = -nFE^{\\circ}_{cell}$，$n = 2$，$F = 96485\\ \\text{C/mol}$，$E^{\\circ}_{cell} = 1.10\\ \\text{V}$，计算 $\\Delta G^{\\circ}$（单位 kJ/mol），四舍五入到整数。"
      },
      "answer": "-212",
      "accept": [
        "-212",
        "-212 kJ/mol",
        "-212kJ/mol",
        "-212.3",
        "-213",
        "-211"
      ],
      "explanation": {
        "en": "$\\Delta G^{\\circ} = -(2)(96485)(1.10) = -212267\\ \\text{J/mol} = -212\\ \\text{kJ/mol}$. Remember to divide by 1000 to convert joules to kilojoules. A common error is omitting the negative sign or forgetting the factor $n = 2$.",
        "zh": "$\\Delta G^{\\circ} = -(2)(96485)(1.10) = -212267\\ \\text{J/mol} = -212\\ \\text{kJ/mol}$。记得除以 1000 把焦耳换成千焦。常见错误是漏掉负号或忘记因子 $n = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many moles of electrons are required to deposit 1 mole of $\\text{Al}$ from $\\text{Al}^{3+}$ in electrolysis?",
        "zh": "在电解中，从 $\\text{Al}^{3+}$ 沉积 1 摩尔 $\\text{Al}$ 需要多少摩尔电子？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "3 mol",
        "three",
        "3 moles"
      ],
      "explanation": {
        "en": "The half-reaction is $\\text{Al}^{3+} + 3e^{-} \\rightarrow \\text{Al}$, so 3 moles of electrons per mole of aluminum. A tempting error is using 1 electron for any metal ion; the number of electrons equals the magnitude of the ion's charge, which is 3 for $\\text{Al}^{3+}$.",
        "zh": "半反应为 $\\text{Al}^{3+} + 3e^{-} \\rightarrow \\text{Al}$，因此每摩尔铝需 3 摩尔电子。诱人的错误是对任何金属离子都用 1 个电子；电子数等于离子电荷的大小，$\\text{Al}^{3+}$ 为 3。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A current of 2.00 A flows for 965 seconds. How many moles of electrons pass through the cell? ($F = 96485\\ \\text{C/mol}$). Round to three decimal places.",
        "zh": "电流 2.00 A 流过 965 秒。有多少摩尔电子通过电池？（$F = 96485\\ \\text{C/mol}$）保留三位小数。"
      },
      "answer": "0.020",
      "accept": [
        "0.020",
        "0.02",
        "0.0200",
        "2.0e-2",
        "2e-2",
        "0.020 mol"
      ],
      "explanation": {
        "en": "Charge $Q = It = (2.00)(965) = 1930\\ \\text{C}$. Moles of electrons $= Q/F = 1930/96485 = 0.020\\ \\text{mol}$. A common error is forgetting to multiply current by time first, or dividing by Avogadro's number instead of the Faraday constant.",
        "zh": "电荷 $Q = It = (2.00)(965) = 1930\\ \\text{C}$。电子摩尔数 $= Q/F = 1930/96485 = 0.020\\ \\text{mol}$。常见错误是忘记先把电流乘以时间，或除以阿伏伽德罗常数而非法拉第常数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the Zn-Cu cell, how many electrons ($n$) are transferred in the balanced reaction $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$?",
        "zh": "对于锌铜电池，在配平反应 $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$ 中转移多少电子（$n$）？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "2 electrons",
        "two",
        "n=2"
      ],
      "explanation": {
        "en": "Zinc loses 2 electrons to become $\\text{Zn}^{2+}$, and $\\text{Cu}^{2+}$ gains those same 2 electrons, so $n = 2$. A common error is adding the electrons from both half-reactions to get 4; the electrons lost by one species are the same electrons gained by the other, so they are counted once.",
        "zh": "锌失去 2 个电子变成 $\\text{Zn}^{2+}$，$\\text{Cu}^{2+}$ 得到同样的 2 个电子，因此 $n = 2$。常见错误是把两个半反应的电子相加得 4；一种物质失去的电子就是另一种得到的电子，只算一次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At 298 K the Nernst equation is $E = E^{\\circ} - \\frac{0.0592}{n}\\log Q$. Calculate $E$ (in V) for a cell with $E^{\\circ} = 1.10\\ \\text{V}$, $n = 2$, and $Q = 100$. Round to three decimal places.",
        "zh": "在 298 K 时能斯特方程为 $E = E^{\\circ} - \\frac{0.0592}{n}\\log Q$。计算 $E^{\\circ} = 1.10\\ \\text{V}$、$n = 2$、$Q = 100$ 的电池的 $E$（单位 V），保留三位小数。"
      },
      "answer": "1.041",
      "accept": [
        "1.041",
        "1.041 V",
        "1.041V",
        "1.04",
        "1.0408",
        "1.042"
      ],
      "explanation": {
        "en": "$\\log 100 = 2$, so $E = 1.10 - \\frac{0.0592}{2}(2) = 1.10 - 0.0592 = 1.041\\ \\text{V}$. A tempting error is using $\\ln Q$ with this form of the equation; the 0.0592 constant already assumes base-10 log, so use $\\log$, not $\\ln$.",
        "zh": "$\\log 100 = 2$，所以 $E = 1.10 - \\frac{0.0592}{2}(2) = 1.10 - 0.0592 = 1.041\\ \\text{V}$。诱人的错误是对这种形式的方程用 $\\ln Q$；常数 0.0592 已假设以 10 为底的对数，故用 $\\log$ 而非 $\\ln$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many grams of copper are deposited when 0.500 mol of electrons pass through a solution of $\\text{Cu}^{2+}$? (Molar mass of Cu = 63.5 g/mol). Round to one decimal place.",
        "zh": "当 0.500 摩尔电子通过 $\\text{Cu}^{2+}$ 溶液时，沉积多少克铜？（铜的摩尔质量 = 63.5 g/mol）保留一位小数。"
      },
      "answer": "15.9",
      "accept": [
        "15.9",
        "15.9 g",
        "15.9g",
        "15.88",
        "15.875",
        "15.9 grams"
      ],
      "explanation": {
        "en": "The half-reaction $\\text{Cu}^{2+} + 2e^{-} \\rightarrow \\text{Cu}$ needs 2 electrons per Cu, so moles Cu $= 0.500/2 = 0.250\\ \\text{mol}$, and mass $= 0.250 \\times 63.5 = 15.9\\ \\text{g}$. A common error is forgetting the 2-electron stoichiometry and using 0.500 mol of Cu directly, which doubles the answer.",
        "zh": "半反应 $\\text{Cu}^{2+} + 2e^{-} \\rightarrow \\text{Cu}$ 每个铜需 2 个电子，所以铜摩尔数 $= 0.500/2 = 0.250\\ \\text{mol}$，质量 $= 0.250 \\times 63.5 = 15.9\\ \\text{g}$。常见错误是忘记 2 电子化学计量、直接用 0.500 摩尔铜，会使答案翻倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $\\Delta G^{\\circ} = -nFE^{\\circ}_{cell}$, if a cell has $E^{\\circ}_{cell} = -0.50\\ \\text{V}$ and $n = 1$, is $\\Delta G^{\\circ}$ positive or negative? Answer with the word 'positive' or 'negative'.",
        "zh": "用 $\\Delta G^{\\circ} = -nFE^{\\circ}_{cell}$，若某电池 $E^{\\circ}_{cell} = -0.50\\ \\text{V}$，$n = 1$，$\\Delta G^{\\circ}$ 是正还是负？用词语 '正' 或 '负' 回答。"
      },
      "answer": "positive",
      "accept": [
        "positive",
        "Positive",
        "POSITIVE",
        "正",
        "正值",
        "positive value",
        "+"
      ],
      "explanation": {
        "en": "With $\\Delta G^{\\circ} = -nFE^{\\circ}$ and a negative $E^{\\circ}_{cell}$, the two negatives cancel to give a positive $\\Delta G^{\\circ}$, so the reaction is non-spontaneous (an electrolytic cell). A tempting error is assuming a negative potential gives a negative free energy; the sign in the formula flips it.",
        "zh": "由 $\\Delta G^{\\circ} = -nFE^{\\circ}$ 和负的 $E^{\\circ}_{cell}$，两个负号相消得到正的 $\\Delta G^{\\circ}$，因此反应非自发（电解池）。诱人的错误是认为负电位给出负自由能；公式中的符号使其翻转。"
      }
    }
  ]
};
