export default {
  "id": "ap-biology",
  "title": "AP Biology",
  "titleZh": "AP 生物",
  "subject": "science",
  "level": "AP",
  "description": "The complete AP Biology course following the official College Board eight-unit framework: the chemistry of life, cell structure and function, cellular energetics, cell communication and the cell cycle, heredity, gene expression and regulation, natural selection, and ecology — emphasizing the science practices and quantitative reasoning tested on the AP Biology exam.",
  "descriptionZh": "完整的 AP 生物课程，按照 College Board 官方八个单元的框架编排：生命的化学、细胞的结构与功能、细胞能量学、细胞通讯与细胞周期、遗传、基因表达与调控、自然选择以及生态学——重点训练 AP 生物考试所考查的科学探究方法与定量推理能力。",
  "units": [
    {
      "id": "unit-1-chemistry-of-life",
      "title": "Unit 1: Chemistry of Life",
      "titleZh": "第一单元：生命的化学",
      "lessons": [
        {
          "id": "water-and-properties-of-life",
          "title": "Water and the Properties of Life",
          "titleZh": "水与生命的特性",
          "content": [
            {
              "type": "h2",
              "en": "Why Water Matters for Life",
              "zh": "为什么水对生命至关重要"
            },
            {
              "type": "p",
              "en": "Life on Earth is fundamentally aqueous—cells are roughly 70–95% water, and every biochemical reaction takes place in a watery environment. Water is not a passive background; its unusual properties directly enable life. Almost all of those properties trace back to one structural feature: the water molecule is polar and forms hydrogen bonds with its neighbors.",
              "zh": "地球上的生命本质上是水性的——细胞约含 70–95% 的水，而每一个生化反应都发生在水环境中。水并非被动的背景；它异常的性质直接使生命成为可能。几乎所有这些性质都可追溯到一个结构特征：水分子是极性的，并与相邻分子形成氢键（hydrogen bond）。"
            },
            {
              "type": "h3",
              "en": "Structure and Polarity",
              "zh": "结构与极性"
            },
            {
              "type": "p",
              "en": "A water molecule ($\\text{H}_2\\text{O}$) has two hydrogen atoms covalently bonded to one oxygen atom in a bent shape. Oxygen is far more electronegative than hydrogen, so it pulls the shared electrons closer to itself. This gives the oxygen end a partial negative charge ($\\delta^-$) and each hydrogen end a partial positive charge ($\\delta^+$). A molecule with such separated charges is called polar.",
              "zh": "一个水分子（$\\text{H}_2\\text{O}$）中，两个氢原子以共价键（covalent bond）与一个氧原子相连，呈弯曲形。氧的电负性（electronegativity）远大于氢，因此它把共用电子拉向自己。这使氧一端带部分负电荷（$\\delta^-$），每个氢一端带部分正电荷（$\\delta^+$）。这种电荷分离的分子称为极性（polar）分子。"
            },
            {
              "type": "p",
              "en": "Because of this polarity, the $\\delta^+$ hydrogen of one water molecule is attracted to the $\\delta^-$ oxygen of a neighboring water molecule. This attraction is a hydrogen bond. Each water molecule can hydrogen-bond with up to four neighbors. Individually these bonds are weak (about 1/20 the strength of a covalent bond), but collectively—and because they constantly break and re-form—they hold water together and give it its remarkable behavior.",
              "zh": "由于这种极性，一个水分子带 $\\delta^+$ 的氢会被相邻水分子带 $\\delta^-$ 的氧吸引。这种吸引就是氢键。每个水分子最多可与四个相邻分子形成氢键。单个氢键很弱（约为共价键强度的 1/20），但它们的集体作用——以及不断断裂与重组——把水维系在一起，赋予水非凡的性质。"
            },
            {
              "type": "note",
              "en": "AP tip: Hydrogen bonds form between a hydrogen already covalently bonded to a highly electronegative atom (N, O, or F) and another electronegative atom. Do not confuse the hydrogen bonds between water molecules with the covalent O–H bonds inside a single water molecule—this is a classic exam trap.",
              "zh": "AP 提示：氢键形成于「已与高电负性原子（N、O 或 F）以共价键相连的氢」与「另一个电负性原子」之间。不要把水分子之间的氢键与单个水分子内部的 O–H 共价键混淆——这是经典的考试陷阱。"
            },
            {
              "type": "h3",
              "en": "Emergent Properties of Water",
              "zh": "水的涌现性质"
            },
            {
              "type": "p",
              "en": "The properties below are emergent—they arise from the collective hydrogen bonding of many water molecules, not from any single molecule. Each one has direct biological consequences.",
              "zh": "下面这些性质是「涌现的」（emergent）——它们来自许多水分子集体形成的氢键，而非任何单个分子。每一项都有直接的生物学意义。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Cohesion: water molecules stick to one another via hydrogen bonds. This lets water form a continuous column that can be pulled upward through a plant's xylem from roots to leaves (transpiration).",
                  "zh": "内聚力（cohesion）：水分子通过氢键相互黏附。这使水能形成连续的水柱，在植物木质部（xylem）中被从根拉升到叶（蒸腾作用，transpiration）。"
                },
                {
                  "en": "Adhesion: water molecules stick to other polar or charged surfaces. Adhesion to xylem walls helps counteract gravity and, with cohesion, drives capillary action.",
                  "zh": "附着力（adhesion）：水分子黏附于其他极性或带电表面。水对木质部管壁的附着有助于对抗重力，并与内聚力共同驱动毛细作用（capillary action）。"
                },
                {
                  "en": "Surface tension: because surface water molecules hydrogen-bond to those beside and below them, the surface resists being broken. Small insects can walk on water.",
                  "zh": "表面张力（surface tension）：由于表面水分子与旁边及下方的分子形成氢键，水面抵抗被撕开。小昆虫可以在水面行走。"
                },
                {
                  "en": "High specific heat: it takes a great deal of heat to raise water's temperature because much of the added energy first breaks hydrogen bonds rather than speeding up molecules. Water resists temperature swings, stabilizing organisms, oceans, and climate.",
                  "zh": "高比热容（high specific heat）：升高水温需要大量热量，因为加入的能量大部分先用于打断氢键而非加快分子运动。水抵抗温度剧烈波动，从而稳定生物体、海洋和气候。"
                },
                {
                  "en": "Evaporative cooling: the molecules with the most kinetic energy leave as vapor, so the liquid left behind is cooler. Sweating cools the body; transpiration cools leaves.",
                  "zh": "蒸发冷却（evaporative cooling）：动能最大的分子以蒸气形式逸出，留下的液体因此变凉。出汗使身体降温；蒸腾使叶片降温。"
                },
                {
                  "en": "Ice floats (lower density as a solid): in ice, hydrogen bonds lock molecules into a spacious crystal lattice, so solid water is less dense than liquid water. Floating ice insulates the water below, letting aquatic life survive winter.",
                  "zh": "冰会浮起（固态密度更低）：在冰中，氢键把分子锁定成一个空间较大的晶格，因此固态水的密度小于液态水。浮冰为下方的水保温，使水生生物得以越冬。"
                },
                {
                  "en": "Versatile solvent: water dissolves any polar or ionic (hydrophilic) substance by surrounding each solute particle with a hydration shell. This makes water the medium in which the chemistry of life happens.",
                  "zh": "万能溶剂（versatile solvent）：水通过在每个溶质粒子周围形成水化层（hydration shell）来溶解任何极性或离子性（亲水）物质。这使水成为生命化学反应发生的介质。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Hydrophilic and Hydrophobic",
              "zh": "亲水与疏水"
            },
            {
              "type": "p",
              "en": "Substances that are polar or charged interact readily with water and are called hydrophilic (\"water-loving\"). Substances that are nonpolar—such as oils and fats—cannot form hydrogen bonds with water and are called hydrophobic (\"water-fearing\"). Hydrophobic molecules cluster together in water not because they attract each other strongly, but because water molecules hydrogen-bond among themselves and exclude them. This behavior is the basis for how phospholipids self-assemble into cell membranes, as you will see in the next lesson.",
              "zh": "极性或带电的物质容易与水相互作用，称为亲水（hydrophilic，「喜水」）。非极性物质——如油和脂肪——无法与水形成氢键，称为疏水（hydrophobic，「怕水」）。疏水分子在水中聚集，并非因为彼此强烈吸引，而是因为水分子彼此形成氢键并把它们排斥出去。这一行为正是磷脂（phospholipid）自组装成细胞膜的基础，你将在下一节看到。"
            },
            {
              "type": "h3",
              "en": "Acids, Bases, and pH",
              "zh": "酸、碱与 pH"
            },
            {
              "type": "p",
              "en": "Water self-ionizes slightly into hydrogen ions ($\\text{H}^+$) and hydroxide ions ($\\text{OH}^-$). An acid is a substance that adds $\\text{H}^+$ to a solution; a base removes $\\text{H}^+$ (or adds $\\text{OH}^-$). The pH scale measures the concentration of $\\text{H}^+$: it runs from 0 to 14, where 7 is neutral, below 7 is acidic, and above 7 is basic.",
              "zh": "水会轻微自电离为氢离子（$\\text{H}^+$）和氢氧根离子（$\\text{OH}^-$）。酸（acid）是向溶液中加入 $\\text{H}^+$ 的物质；碱（base）则移除 $\\text{H}^+$（或加入 $\\text{OH}^-$）。pH 标度衡量 $\\text{H}^+$ 的浓度：范围从 0 到 14，其中 7 为中性，低于 7 为酸性，高于 7 为碱性。"
            },
            {
              "type": "math",
              "tex": "\\text{pH} = -\\log_{10}[\\text{H}^+]"
            },
            {
              "type": "p",
              "en": "The scale is logarithmic, so each pH unit represents a tenfold change in $\\text{H}^+$ concentration: a solution at pH 4 has ten times more $\\text{H}^+$ than one at pH 5, and one hundred times more than pH 6. Living cells function within a narrow pH range, so organisms use buffers—substances that resist pH change by accepting or donating $\\text{H}^+$—to keep internal pH stable (for example, the bicarbonate buffer in human blood holds pH near 7.4).",
              "zh": "该标度是对数标度，因此每变化一个 pH 单位，$\\text{H}^+$ 浓度相差十倍：pH 4 的溶液比 pH 5 的 $\\text{H}^+$ 多十倍，比 pH 6 的多一百倍。活细胞只能在狭窄的 pH 范围内运作，因此生物体使用缓冲物质（buffer）——通过接受或释放 $\\text{H}^+$ 来抵抗 pH 变化的物质——维持内部 pH 稳定（例如人体血液中的碳酸氢盐缓冲系统把 pH 维持在约 7.4）。"
            },
            {
              "type": "note",
              "en": "AP tip: Because pH is logarithmic, a drop from pH 8 to pH 6 is not \"a little\" more acidic—it is a 100-fold increase in $\\text{H}^+$. This is why ocean acidification of even a few tenths of a pH unit is biologically serious.",
              "zh": "AP 提示：因为 pH 是对数的，从 pH 8 降到 pH 6 并非「稍微」变酸——而是 $\\text{H}^+$ 增加 100 倍。这正是海洋酸化即使只变化零点几个 pH 单位在生物学上也很严重的原因。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading a pH Change",
                "zh": "例题 1：解读 pH 变化"
              },
              "problem": {
                "en": "A pond has a pH of 7. Acid rain lowers it to pH 5. By what factor has the hydrogen ion concentration $[\\text{H}^+]$ changed?",
                "zh": "一个池塘的 pH 为 7。酸雨使其降到 pH 5。氢离子浓度 $[\\text{H}^+]$ 变化了多少倍？"
              },
              "solution": [
                {
                  "en": "Each pH unit is a factor of 10 in $[\\text{H}^+]$, and a decrease in pH means more $\\text{H}^+$. The change is 2 pH units.",
                  "zh": "每个 pH 单位对应 $[\\text{H}^+]$ 相差 10 倍，而 pH 降低意味着 $\\text{H}^+$ 增多。变化为 2 个 pH 单位。",
                  "type": "p"
                },
                {
                  "type": "math",
                  "tex": "10^{(7-5)} = 10^{2} = 100"
                },
                {
                  "en": "The hydrogen ion concentration has increased 100-fold, making the pond 100 times more acidic—enough to harm many organisms.",
                  "zh": "氢离子浓度增加了 100 倍，使池塘酸度提高 100 倍——足以危害许多生物。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Explaining a Coastal Climate",
                "zh": "例题 2：解释海岸气候"
              },
              "problem": {
                "en": "Coastal cities have milder day-to-night and summer-to-winter temperature swings than inland cities at the same latitude. Which property of water best explains this, and why?",
                "zh": "同纬度下，海岸城市昼夜和冬夏的温差比内陆城市更小。哪种水的性质最能解释这一点，为什么？"
              },
              "solution": [
                {
                  "en": "The key property is water's high specific heat. Because breaking the many hydrogen bonds between water molecules absorbs a large amount of energy, a body of water must gain or lose a great deal of heat to change temperature.",
                  "zh": "关键性质是水的高比热容。由于打断水分子间大量氢键要吸收大量能量，一片水体必须吸收或释放大量热量才能改变温度。",
                  "type": "p"
                },
                {
                  "en": "The ocean therefore absorbs heat during the day and summer and releases it at night and in winter, buffering the temperature of nearby land. Inland areas lack this large heat reservoir, so their temperatures swing more.",
                  "zh": "因此海洋在白天和夏季吸热、在夜间和冬季放热，缓冲了附近陆地的温度。内陆缺乏这一巨大的热库，所以温度波动更大。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What type of bond forms between neighboring water molecules and is responsible for most of water's special properties?",
                "zh": "相邻水分子之间形成的、对水的大多数特殊性质负责的是哪种键？"
              },
              "choices": [
                "Hydrogen bond",
                "Nonpolar covalent bond",
                "Ionic bond",
                "Peptide bond"
              ],
              "answer": 0,
              "explanation": {
                "en": "The partial positive hydrogen of one water molecule is attracted to the partial negative oxygen of another, forming a hydrogen bond. The O–H bonds within a molecule are polar covalent, but between molecules the interaction is a hydrogen bond.",
                "zh": "一个水分子带部分正电的氢被另一个水分子带部分负电的氧吸引，形成氢键。分子内部的 O–H 键是极性共价键，而分子之间的相互作用是氢键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Water is described as a polar molecule because:",
                "zh": "水被描述为极性分子，是因为："
              },
              "choices": [
                "Oxygen is more electronegative than hydrogen, creating partial charges across the bent molecule.",
                "It carries a full negative charge overall.",
                "Its hydrogen and oxygen atoms are held together by ionic bonds.",
                "It contains an equal number of protons and electrons."
              ],
              "answer": 0,
              "explanation": {
                "en": "Polarity arises from unequal sharing of electrons: the more electronegative oxygen pulls electron density toward itself, giving oxygen a $\\delta^-$ and the hydrogens a $\\delta^+$. The molecule is neutral overall (not fully charged), and its bonds are covalent, not ionic.",
                "zh": "极性源于电子分享不均：电负性更大的氧把电子密度拉向自己，使氧带 $\\delta^-$、氢带 $\\delta^+$。整个分子是电中性的（并非带全电荷），且其键是共价键而非离子键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The upward transport of a continuous column of water in a plant's xylem depends most directly on which property?",
                "zh": "植物木质部中连续水柱的向上运输最直接依赖于哪种性质？"
              },
              "choices": [
                "Cohesion among water molecules",
                "Low specific heat",
                "Evaporative cooling",
                "Water's ability to act as an acid"
              ],
              "answer": 0,
              "explanation": {
                "en": "Cohesion—hydrogen bonding of water molecules to one another—lets water form an unbroken column that can be pulled up from roots to leaves during transpiration. Adhesion to the xylem walls assists, but cohesion is what keeps the column continuous.",
                "zh": "内聚力——水分子之间的氢键——使水形成不间断的水柱，在蒸腾过程中被从根拉升到叶。对木质部管壁的附着力起辅助作用，但保持水柱连续的是内聚力。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly explains why ice floats on liquid water?",
                "zh": "下列哪项正确解释了冰为什么浮在液态水上？"
              },
              "choices": [
                "Hydrogen bonds hold molecules in a spacious crystal lattice, making ice less dense than liquid water.",
                "Ice molecules move faster, so they spread apart.",
                "Ice contains trapped air bubbles that reduce its mass.",
                "Freezing breaks the covalent bonds, lightening the molecules."
              ],
              "answer": 0,
              "explanation": {
                "en": "In ice, each water molecule hydrogen-bonds to four others in a fixed, open lattice that spaces molecules farther apart than in liquid water. Lower density means ice floats, which insulates water below and lets aquatic organisms survive winter. Covalent bonds are not broken by freezing.",
                "zh": "在冰中，每个水分子与另外四个形成固定、开放晶格中的氢键，使分子间距比液态水更大。密度更低故冰会浮起，从而为下方的水保温，使水生生物越冬。冻结并不会打断共价键。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A nonpolar oil molecule placed in water will:",
                "zh": "把一个非极性油分子放入水中会："
              },
              "choices": [
                "Be excluded and cluster with other nonpolar molecules because it cannot hydrogen-bond with water.",
                "Form hydrogen bonds with surrounding water molecules.",
                "Dissolve readily because water is a universal solvent for all substances.",
                "Ionize into $\\text{H}^+$ and $\\text{OH}^-$."
              ],
              "answer": 0,
              "explanation": {
                "en": "Oil is hydrophobic and nonpolar, so it cannot form hydrogen bonds with water. Water molecules bond among themselves and exclude the oil, driving nonpolar molecules to cluster together. Water dissolves polar and ionic solutes, not nonpolar ones.",
                "zh": "油是疏水且非极性的，无法与水形成氢键。水分子彼此结合并把油排斥出去，从而促使非极性分子聚集。水溶解的是极性和离子性溶质，而非非极性溶质。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solution changes from pH 6 to pH 3. By what factor did the hydrogen ion concentration increase? Give a number.",
                "zh": "一种溶液的 pH 从 6 变到 3。氢离子浓度增加了多少倍？给出数字。"
              },
              "answer": "1000",
              "accept": [
                "1000",
                "1,000",
                "10^3"
              ],
              "explanation": {
                "en": "The change is 3 pH units, and lower pH means more $\\text{H}^+$. Each unit is a factor of 10, so $10^3 = 1000$. The solution became 1000 times more acidic.",
                "zh": "变化为 3 个 pH 单位，pH 越低 $\\text{H}^+$ 越多。每单位相差 10 倍，故 $10^3 = 1000$。溶液的酸度增加了 1000 倍。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes a substance that resists changes in pH by accepting or donating hydrogen ions? Give the single word (lowercase).",
                "zh": "通过接受或释放氢离子来抵抗 pH 变化的物质叫什么？给出单个英文单词（小写）。"
              },
              "answer": "buffer",
              "accept": [
                "buffer",
                "buffers"
              ],
              "explanation": {
                "en": "A buffer stabilizes pH by absorbing excess $\\text{H}^+$ or releasing $\\text{H}^+$ when needed. The bicarbonate buffer keeps human blood near pH 7.4.",
                "zh": "缓冲物质（buffer）通过吸收多余的 $\\text{H}^+$ 或在需要时释放 $\\text{H}^+$ 来稳定 pH。碳酸氢盐缓冲系统把人血维持在约 pH 7.4。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes molecules that are nonpolar and do not interact well with water? Give the single word (lowercase).",
                "zh": "用什么词形容非极性、不易与水相互作用的分子？给出单个英文单词（小写）。"
              },
              "answer": "hydrophobic",
              "accept": [
                "hydrophobic",
                "hydrophobic molecules"
              ],
              "explanation": {
                "en": "Hydrophobic (\"water-fearing\") molecules are nonpolar and cannot form hydrogen bonds with water, so water excludes them. Polar or charged substances are the opposite: hydrophilic.",
                "zh": "疏水（hydrophobic，「怕水」）分子是非极性的，无法与水形成氢键，因此被水排斥。极性或带电的物质则相反，是亲水（hydrophilic）的。"
              }
            }
          ]
        },
        {
          "id": "biological-macromolecules",
          "title": "Biological Macromolecules",
          "titleZh": "生物大分子",
          "content": [
            {
              "type": "h2",
              "en": "The Molecules of Life",
              "zh": "生命的分子"
            },
            {
              "type": "p",
              "en": "Nearly every large molecule in a living cell belongs to one of four classes: carbohydrates, lipids, proteins, and nucleic acids. Three of these classes are polymers—long chains built from repeating subunits called monomers. Cells assemble an enormous diversity of these molecules from a surprisingly small toolkit of monomers, and the central theme of this unit is that a molecule's structure determines its function.",
              "zh": "活细胞中几乎每一个大分子都属于四大类之一：碳水化合物（carbohydrate）、脂质（lipid）、蛋白质（protein）和核酸（nucleic acid）。其中三类是聚合物（polymer）——由重复亚基（称为单体，monomer）连成的长链。细胞用出人意料地小的一套单体，组装出极其多样的分子。本单元的核心主题是：分子的结构决定其功能。"
            },
            {
              "type": "h3",
              "en": "Carbon: The Backbone of Life",
              "zh": "碳：生命的骨架"
            },
            {
              "type": "p",
              "en": "All four classes are built on carbon. A carbon atom has four valence electrons, so it forms four covalent bonds—to other carbons and to hydrogen, oxygen, nitrogen, and more. This lets carbon build long chains, branches, and rings, creating the vast structural variety life requires. Attached to these carbon skeletons are functional groups: specific clusters of atoms that give a molecule characteristic chemical behavior regardless of the rest of the molecule.",
              "zh": "这四大类都以碳为基础。碳原子有四个价电子，因此能形成四个共价键——与其他碳以及氢、氧、氮等相连。这使碳能构建长链、分支和环，创造出生命所需的巨大结构多样性。连在这些碳骨架上的是官能团（functional group）：赋予分子特有化学行为的特定原子团，与分子其余部分无关。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Hydroxyl (–OH): polar, makes molecules soluble in water; found in alcohols and sugars.",
                  "zh": "羟基（hydroxyl，–OH）：极性，使分子可溶于水；见于醇类和糖类。"
                },
                {
                  "en": "Carboxyl (–COOH): acidic, can donate an $\\text{H}^+$; found in amino acids and fatty acids.",
                  "zh": "羧基（carboxyl，–COOH）：酸性，可释放 $\\text{H}^+$；见于氨基酸和脂肪酸。"
                },
                {
                  "en": "Amino (–NH$_2$): basic, can accept an $\\text{H}^+$; found in amino acids.",
                  "zh": "氨基（amino，–NH$_2$）：碱性，可接受 $\\text{H}^+$；见于氨基酸。"
                },
                {
                  "en": "Phosphate (–OPO$_3^{2-}$): negatively charged, carries and transfers energy; found in ATP, DNA, and phospholipids.",
                  "zh": "磷酸基（phosphate，–OPO$_3^{2-}$）：带负电，携带并传递能量；见于 ATP、DNA 和磷脂。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Building and Breaking Polymers",
              "zh": "聚合物的构建与分解"
            },
            {
              "type": "p",
              "en": "Cells link monomers into polymers by dehydration synthesis (also called a condensation reaction): the reaction forms a covalent bond between two monomers and removes one water molecule (an –OH from one monomer and an –H from the other). To break a polymer apart, cells run the reverse reaction, hydrolysis: a water molecule is added across the bond (\"hydro\" = water, \"lysis\" = to split), breaking the two monomers apart. Digestion of your food is large-scale hydrolysis.",
              "zh": "细胞通过脱水缩合（dehydration synthesis，又称缩合反应）把单体连成聚合物：该反应在两个单体之间形成共价键，并移除一个水分子（一个单体的 –OH 与另一个单体的 –H）。要分解聚合物，细胞则进行逆反应，即水解（hydrolysis）：向键上加入一个水分子（「hydro」=水，「lysis」=裂开），把两个单体拆开。你消化食物就是大规模的水解。"
            },
            {
              "type": "note",
              "en": "AP tip: Dehydration synthesis and hydrolysis are exact opposites. Building a polymer of $n$ monomers releases $n-1$ water molecules; breaking it back down consumes $n-1$ water molecules. Watch for questions that ask how many waters are involved.",
              "zh": "AP 提示：脱水缩合与水解正好相反。构建含 $n$ 个单体的聚合物会释放 $n-1$ 个水分子；将其分解则消耗 $n-1$ 个水分子。留意询问涉及多少个水分子的题目。"
            },
            {
              "type": "h3",
              "en": "Carbohydrates",
              "zh": "碳水化合物"
            },
            {
              "type": "p",
              "en": "Carbohydrates are sugars and their polymers, generally with the ratio $\\text{CH}_2\\text{O}$. Their monomers are monosaccharides such as glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$), the cell's primary fuel. Two monosaccharides joined form a disaccharide (for example, glucose + fructose = sucrose). Long chains of monosaccharides form polysaccharides, whose function depends on how the monomers are bonded.",
              "zh": "碳水化合物是糖及其聚合物，通常具有 $\\text{CH}_2\\text{O}$ 的比例。它们的单体是单糖（monosaccharide），如葡萄糖（glucose，$\\text{C}_6\\text{H}_{12}\\text{O}_6$）——细胞的主要燃料。两个单糖相连形成二糖（disaccharide，例如葡萄糖 + 果糖 = 蔗糖）。单糖的长链构成多糖（polysaccharide），其功能取决于单体的连接方式。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Starch and glycogen: storage polysaccharides of glucose (in plants and animals, respectively); their bonds are easily hydrolyzed to release glucose for energy.",
                  "zh": "淀粉（starch）与糖原（glycogen）：分别是植物和动物的葡萄糖储能多糖；它们的键容易被水解，释放葡萄糖供能。"
                },
                {
                  "en": "Cellulose: a structural polysaccharide of glucose in plant cell walls; a different bond geometry makes it rigid and indigestible to most animals (it is dietary fiber).",
                  "zh": "纤维素（cellulose）：植物细胞壁中的葡萄糖结构性多糖；不同的键几何使其坚硬且大多数动物无法消化（即膳食纤维）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Lipids",
              "zh": "脂质"
            },
            {
              "type": "p",
              "en": "Lipids are grouped together because they are hydrophobic (nonpolar), not because they share a common monomer—lipids are not true polymers. Three biologically important types are fats, phospholipids, and steroids.",
              "zh": "脂质被归为一类是因为它们都疏水（非极性），而非因为共享同一种单体——脂质不是真正的聚合物。三种重要的生物脂质是脂肪（fat）、磷脂（phospholipid）和固醇（steroid）。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Fats (triglycerides): a glycerol joined to three fatty acid tails; they store energy densely. Saturated fats have no C=C double bonds in their tails, so the tails pack tightly and the fat is solid at room temperature (e.g., butter). Unsaturated fats have one or more C=C double bonds that create kinks, so they cannot pack tightly and are liquid oils at room temperature.",
                  "zh": "脂肪（三酰甘油，triglyceride）：一个甘油（glycerol）连接三条脂肪酸（fatty acid）尾链；它们高密度储能。饱和脂肪（saturated fat）尾链中无 C=C 双键，尾链紧密堆叠，室温下为固体（如黄油）。不饱和脂肪（unsaturated fat）尾链有一个或多个 C=C 双键，产生弯折，无法紧密堆叠，室温下为液态油。"
                },
                {
                  "en": "Phospholipids: like a fat but with one fatty acid replaced by a charged phosphate group. This makes the molecule amphipathic—a hydrophilic \"head\" and two hydrophobic \"tails\"—so in water they self-assemble into the bilayer that forms every cell membrane.",
                  "zh": "磷脂（phospholipid）：类似脂肪，但一条脂肪酸被带电的磷酸基取代。这使分子成为两亲性（amphipathic）——一个亲水「头」和两条疏水「尾」——因此在水中它们自组装成构成每一层细胞膜的双分子层（磷脂双分子层，phospholipid bilayer）。"
                },
                {
                  "en": "Steroids: four fused carbon rings. Cholesterol is a component of animal membranes and the precursor of steroid hormones such as estrogen and testosterone.",
                  "zh": "固醇（steroid）：四个稠合的碳环。胆固醇（cholesterol）是动物细胞膜的组成成分，也是雌激素、睾酮等固醇类激素的前体。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Proteins",
              "zh": "蛋白质"
            },
            {
              "type": "p",
              "en": "Proteins are the cell's workhorses: they act as enzymes, structural fibers, transporters, receptors, antibodies, and more. Their monomers are the 20 amino acids, each with a central carbon bonded to an amino group, a carboxyl group, a hydrogen, and a variable R group (side chain) that gives the amino acid its unique chemical character. Amino acids are joined by peptide bonds (formed by dehydration synthesis) into a polypeptide, which folds into a functional protein.",
              "zh": "蛋白质是细胞的主力：它们充当酶（enzyme）、结构纤维、转运蛋白、受体、抗体等。它们的单体是 20 种氨基酸（amino acid），每种氨基酸的中心碳连接一个氨基、一个羧基、一个氢，以及一个可变的 R 基团（侧链），后者赋予氨基酸独特的化学性质。氨基酸通过肽键（peptide bond，由脱水缩合形成）连成多肽（polypeptide），再折叠成有功能的蛋白质。"
            },
            {
              "type": "p",
              "en": "Protein structure has four levels:",
              "zh": "蛋白质结构分为四个层次："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Primary structure: the specific linear sequence of amino acids, determined by the gene. Even one wrong amino acid can change the whole protein (as in sickle-cell hemoglobin).",
                  "zh": "一级结构（primary structure）：氨基酸的特定线性序列，由基因决定。即使一个氨基酸错误也能改变整个蛋白质（如镰状细胞血红蛋白）。"
                },
                {
                  "en": "Secondary structure: local folding into alpha helices and beta pleated sheets, held by hydrogen bonds along the polypeptide backbone.",
                  "zh": "二级结构（secondary structure）：局部折叠成 α 螺旋（alpha helix）和 β 折叠（beta pleated sheet），由多肽主链上的氢键维持。"
                },
                {
                  "en": "Tertiary structure: the overall three-dimensional shape of one polypeptide, driven mainly by interactions among R groups (hydrophobic clustering, hydrogen bonds, ionic bonds, and disulfide bridges).",
                  "zh": "三级结构（tertiary structure）：单条多肽的整体三维形状，主要由 R 基团之间的相互作用驱动（疏水聚集、氢键、离子键和二硫键）。"
                },
                {
                  "en": "Quaternary structure: the assembly of two or more polypeptide chains into one functional protein (for example, hemoglobin has four chains).",
                  "zh": "四级结构（quaternary structure）：两条或更多条多肽链组装成一个有功能的蛋白质（例如血红蛋白由四条链组成）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Because a protein's function depends on its precise shape, conditions that disrupt the bonds holding that shape—high temperature, extreme pH, or certain chemicals—cause the protein to unravel and lose function. This is called denaturation. The primary sequence is unchanged, but the folded structure is lost, which is why a cooked egg white cannot return to liquid.",
              "zh": "由于蛋白质的功能取决于其精确形状，凡是破坏维持该形状之键的条件——高温、极端 pH 或某些化学物质——都会使蛋白质解开并丧失功能。这称为变性（denaturation）。一级序列未变，但折叠结构丢失，这正是煮熟的蛋清无法恢复为液态的原因。"
            },
            {
              "type": "note",
              "en": "AP tip: Denaturation changes shape, not sequence. The primary structure (peptide bonds) stays intact; it is the weaker interactions holding secondary, tertiary, and quaternary structure that break. Only if a protein is fully hydrolyzed is the primary structure destroyed.",
              "zh": "AP 提示：变性改变的是形状，而非序列。一级结构（肽键）保持完好；断裂的是维持二级、三级和四级结构的较弱相互作用。只有蛋白质被完全水解时，一级结构才会被破坏。"
            },
            {
              "type": "h3",
              "en": "Nucleic Acids",
              "zh": "核酸"
            },
            {
              "type": "p",
              "en": "Nucleic acids store and transmit genetic information. Their monomers are nucleotides, each made of three parts: a five-carbon sugar, a phosphate group, and a nitrogenous base. DNA (deoxyribonucleic acid) is the hereditary molecule; it is a double helix of two antiparallel strands whose bases pair specifically (A with T, C with G) through hydrogen bonds. RNA (ribonucleic acid) is usually single-stranded, uses the sugar ribose, and substitutes the base uracil (U) for thymine; it carries out the instructions of DNA during protein synthesis.",
              "zh": "核酸储存并传递遗传信息。它们的单体是核苷酸（nucleotide），每个核苷酸由三部分组成：一个五碳糖、一个磷酸基和一个含氮碱基。DNA（脱氧核糖核酸）是遗传分子；它是由两条反平行链构成的双螺旋，碱基通过氢键特异配对（A 与 T、C 与 G）。RNA（核糖核酸）通常为单链，使用核糖（ribose），并以尿嘧啶（uracil，U）代替胸腺嘧啶（thymine）；它在蛋白质合成中执行 DNA 的指令。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Counting Water Molecules",
                "zh": "例题 1：计算水分子数"
              },
              "problem": {
                "en": "A cell links 8 amino acids into a single polypeptide by dehydration synthesis. How many water molecules are released, and how many peptide bonds form?",
                "zh": "一个细胞通过脱水缩合把 8 个氨基酸连成一条多肽。释放多少个水分子，形成多少个肽键？"
              },
              "solution": [
                {
                  "en": "Each peptide bond forms by removing one water molecule. Joining $n$ monomers into one chain requires $n-1$ bonds.",
                  "zh": "每形成一个肽键就移除一个水分子。把 $n$ 个单体连成一条链需要 $n-1$ 个键。",
                  "type": "p"
                },
                {
                  "type": "math",
                  "tex": "n - 1 = 8 - 1 = 7"
                },
                {
                  "en": "So 7 peptide bonds form and 7 water molecules are released. If the polypeptide were later fully hydrolyzed back to free amino acids, 7 water molecules would be consumed.",
                  "zh": "因此形成 7 个肽键，释放 7 个水分子。若该多肽日后被完全水解回游离氨基酸，则会消耗 7 个水分子。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Structure Determines Function",
                "zh": "例题 2：结构决定功能"
              },
              "problem": {
                "en": "Starch and cellulose are both polymers of glucose, yet humans can digest starch for energy but cannot digest cellulose. Explain how this is possible.",
                "zh": "淀粉和纤维素都是葡萄糖的聚合物，但人类能消化淀粉获取能量，却不能消化纤维素。请解释这是如何可能的。"
              },
              "solution": [
                {
                  "en": "Although both are made of the same glucose monomer, the monomers are joined by different bond arrangements (different glycosidic linkage orientations). This changes the three-dimensional shape of the polymer.",
                  "zh": "虽然二者由相同的葡萄糖单体构成，但单体以不同的键排列相连（不同的糖苷键取向）。这改变了聚合物的三维形状。",
                  "type": "p"
                },
                {
                  "en": "Human digestive enzymes are shaped to fit and hydrolyze the bonds in starch but not the differently oriented bonds in cellulose. Because enzyme function depends on matching a specific shape, the change in bonding makes cellulose indigestible—a direct illustration that structure determines function.",
                  "zh": "人类消化酶的形状适配并能水解淀粉中的键，却不适配纤维素中取向不同的键。由于酶的功能依赖于匹配特定形状，键的改变使纤维素无法被消化——这正是结构决定功能的直接体现。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which reaction joins two monomers together by removing a molecule of water?",
                "zh": "哪种反应通过移除一个水分子把两个单体连接起来？"
              },
              "choices": [
                "Dehydration synthesis",
                "Hydrolysis",
                "Denaturation",
                "Ionization"
              ],
              "answer": 0,
              "explanation": {
                "en": "Dehydration synthesis (condensation) forms a covalent bond between monomers and releases one water molecule. Hydrolysis is the reverse—it adds water to break the bond. Denaturation is the loss of a protein's folded shape.",
                "zh": "脱水缩合（缩合反应）在单体之间形成共价键并释放一个水分子。水解是其逆反应——加入水以断裂键。变性是蛋白质折叠形状的丧失。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A saturated fat is solid at room temperature while an unsaturated fat is liquid. The best structural explanation is that saturated fatty acid tails:",
                "zh": "饱和脂肪在室温下为固体，而不饱和脂肪为液体。最佳的结构解释是饱和脂肪酸尾链："
              },
              "choices": [
                "Have no C=C double bonds, so the straight tails pack tightly together.",
                "Contain C=C double bonds that create kinks and prevent tight packing.",
                "Are hydrophilic and dissolve in water.",
                "Are polymers of glucose."
              ],
              "answer": 0,
              "explanation": {
                "en": "Saturated tails have no double bonds, so they are straight and pack tightly, making the fat solid. Unsaturated tails have C=C double bonds that kink the chain, preventing tight packing and keeping the fat liquid. Fats are hydrophobic, not sugar polymers.",
                "zh": "饱和尾链无双键，因而笔直、紧密堆叠，使脂肪呈固态。不饱和尾链有 C=C 双键使链弯折，阻止紧密堆叠，使脂肪保持液态。脂肪是疏水的，并非糖的聚合物。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What property of phospholipids allows them to spontaneously form the bilayer of a cell membrane in water?",
                "zh": "磷脂的什么性质使它们能在水中自发形成细胞膜的双分子层？"
              },
              "choices": [
                "They are amphipathic, with a hydrophilic head and hydrophobic tails.",
                "They are entirely hydrophilic.",
                "They are entirely hydrophobic.",
                "They carry no charge anywhere on the molecule."
              ],
              "answer": 0,
              "explanation": {
                "en": "A phospholipid is amphipathic: its charged phosphate head is hydrophilic while its two fatty acid tails are hydrophobic. In water the heads face outward toward water and the tails cluster inward away from water, producing a bilayer. A wholly hydrophobic or hydrophilic molecule would not form this arrangement.",
                "zh": "磷脂是两亲性的：带电的磷酸头亲水，而两条脂肪酸尾疏水。在水中，头朝外面向水、尾向内远离水，从而形成双分子层。完全疏水或完全亲水的分子不会形成这种排列。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "High temperature causes an enzyme to lose its three-dimensional shape and stop working, though its amino acid sequence is unchanged. This is best described as:",
                "zh": "高温使一种酶失去其三维形状并停止工作，但其氨基酸序列未变。这最好地描述为："
              },
              "choices": [
                "Denaturation",
                "Hydrolysis of the primary structure",
                "Dehydration synthesis",
                "A change in the primary structure"
              ],
              "answer": 0,
              "explanation": {
                "en": "Denaturation is the loss of secondary, tertiary, and quaternary structure while the primary sequence (peptide bonds) remains intact. Because function depends on shape, the denatured enzyme stops working. The primary structure is unchanged, and no hydrolysis of peptide bonds has occurred.",
                "zh": "变性是二级、三级和四级结构的丧失，而一级序列（肽键）保持完好。由于功能取决于形状，变性的酶停止工作。一级结构未变，也没有发生肽键的水解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which set correctly matches a macromolecule with its monomer?",
                "zh": "下列哪组正确匹配了大分子与其单体？"
              },
              "choices": [
                "Carbohydrate → monosaccharide; protein → amino acid; nucleic acid → nucleotide",
                "Nucleic acid → amino acid",
                "Protein → nucleotide",
                "Lipid → glucose"
              ],
              "answer": 0,
              "explanation": {
                "en": "Carbohydrates are polymers of monosaccharides, proteins of amino acids, and nucleic acids of nucleotides. Lipids are not true polymers and have no single repeating monomer. The other options swap monomers between classes.",
                "zh": "碳水化合物是单糖的聚合物，蛋白质是氨基酸的聚合物，核酸是核苷酸的聚合物。脂质不是真正的聚合物，没有单一的重复单体。其他选项把不同类别的单体张冠李戴。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A polysaccharide is built from 100 glucose monomers by dehydration synthesis. How many water molecules are released? Give a number.",
                "zh": "一个多糖由 100 个葡萄糖单体通过脱水缩合构建而成。释放多少个水分子？给出数字。"
              },
              "answer": "99",
              "accept": [
                "99"
              ],
              "explanation": {
                "en": "Joining $n$ monomers forms $n-1$ bonds, each releasing one water molecule: $100 - 1 = 99$.",
                "zh": "连接 $n$ 个单体形成 $n-1$ 个键，每个键释放一个水分子：$100 - 1 = 99$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name of the covalent bond that links two amino acids together in a protein? Give the two-word term (lowercase).",
                "zh": "在蛋白质中连接两个氨基酸的共价键叫什么？给出英文术语（两个词，小写）。"
              },
              "answer": "peptide bond",
              "accept": [
                "peptide bond",
                "peptide",
                "peptide bonds"
              ],
              "explanation": {
                "en": "A peptide bond forms by dehydration synthesis between the carboxyl group of one amino acid and the amino group of the next, building a polypeptide.",
                "zh": "肽键由脱水缩合形成，连接一个氨基酸的羧基与下一个氨基酸的氨基，从而构建多肽。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In DNA, adenine (A) always pairs with which nitrogenous base? Give the single word (lowercase).",
                "zh": "在 DNA 中，腺嘌呤（A）总是与哪种含氮碱基配对？给出单个英文单词（小写）。"
              },
              "answer": "thymine",
              "accept": [
                "thymine",
                "t"
              ],
              "explanation": {
                "en": "In DNA the complementary base pairing rule is A with T and C with G, held together by hydrogen bonds. (In RNA, adenine pairs with uracil instead of thymine.)",
                "zh": "在 DNA 中，互补配对规则是 A 与 T、C 与 G，由氢键维系。（在 RNA 中，腺嘌呤与尿嘧啶配对，而非胸腺嘧啶。）"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-cells",
      "title": "Unit 2: Cell Structure and Function",
      "titleZh": "第二单元：细胞的结构与功能",
      "lessons": [
        {
          "id": "cell-structure-and-organelles",
          "title": "Cell Structure and Organelles",
          "titleZh": "细胞结构与细胞器",
          "content": [
            {
              "type": "h2",
              "en": "The Cell as the Unit of Life",
              "zh": "细胞：生命的基本单位"
            },
            {
              "type": "p",
              "en": "Every living thing is built from cells. The cell theory states that all organisms are composed of one or more cells, the cell is the basic unit of structure and function, and all cells arise from pre-existing cells. Cells fall into two broad categories: prokaryotic cells (bacteria and archaea), which lack a membrane-bound nucleus, and eukaryotic cells (protists, fungi, plants, and animals), which package their DNA inside a true nucleus and contain membrane-bound organelles.",
              "zh": "所有生物都由细胞构成。细胞学说（cell theory）指出：所有生物都由一个或多个细胞组成，细胞是结构和功能的基本单位，且所有细胞都来自已存在的细胞。细胞可分为两大类：原核细胞（prokaryotic cell，即细菌和古菌），没有膜包被的细胞核；真核细胞（eukaryotic cell，即原生生物、真菌、植物和动物），将 DNA 包裹在真正的细胞核内，并含有膜包被的细胞器。"
            },
            {
              "type": "h3",
              "en": "Prokaryotic vs. Eukaryotic Cells",
              "zh": "原核细胞与真核细胞"
            },
            {
              "type": "p",
              "en": "Prokaryotic cells are generally small (1-10 µm) and simple: their circular DNA sits in a region called the nucleoid, with no membrane around it, and they carry out all functions in a single cytoplasmic compartment. Eukaryotic cells are larger (10-100 µm) and highly compartmentalized, dividing labor among specialized organelles. Both cell types share four features: a plasma membrane, cytoplasm, ribosomes, and DNA.",
              "zh": "原核细胞通常较小（1-10 µm）且结构简单：其环状 DNA 位于称为拟核（nucleoid）的区域，外面没有膜包被，所有功能都在单一的细胞质区室中完成。真核细胞较大（10-100 µm），高度区室化，将工作分配给各种特化的细胞器。两类细胞都具有四个共同特征：质膜、细胞质、核糖体和 DNA。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Prokaryotes: no nucleus (DNA in nucleoid), no membrane-bound organelles, circular chromosome, smaller 70S ribosomes, often have a cell wall (peptidoglycan in bacteria).",
                  "zh": "原核生物：无细胞核（DNA 在拟核中），无膜包被细胞器，环状染色体，较小的 70S 核糖体，通常有细胞壁（细菌为肽聚糖）。"
                },
                {
                  "en": "Eukaryotes: true nucleus with nuclear envelope, membrane-bound organelles, linear chromosomes wrapped around histones, larger 80S ribosomes, cytoskeleton for shape and transport.",
                  "zh": "真核生物：有核膜包被的真正细胞核，有膜包被细胞器，缠绕在组蛋白上的线状染色体，较大的 80S 核糖体，具有维持形状和运输的细胞骨架。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Organelles and Their Functions",
              "zh": "细胞器及其功能"
            },
            {
              "type": "p",
              "en": "In a eukaryotic cell, each organelle is a specialized workspace. Think of the cell as a factory in which raw materials are imported, processed along an assembly line, packaged, and shipped, while power is generated and waste is broken down—all in separate rooms so incompatible reactions do not interfere.",
              "zh": "在真核细胞中，每个细胞器都是一个特化的工作区。可以把细胞想象成一座工厂：原料被输入、在流水线上加工、包装、运出，同时产生能量并分解废物——所有这些都在不同的「房间」中进行，使互不相容的反应不会相互干扰。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Nucleus: stores DNA and controls gene expression; the nucleolus inside it builds ribosomal subunits. The nuclear envelope (a double membrane with pores) separates transcription from translation.",
                  "zh": "细胞核：储存 DNA 并控制基因表达；其中的核仁负责组装核糖体亚基。核膜（带有核孔的双层膜）将转录与翻译分隔开。"
                },
                {
                  "en": "Ribosomes: sites of protein synthesis (translation). Free ribosomes make proteins for the cytosol; bound ribosomes on the rough ER make proteins for secretion or membranes.",
                  "zh": "核糖体：蛋白质合成（翻译）的场所。游离核糖体合成用于细胞质的蛋白质；附着在粗面内质网上的核糖体合成用于分泌或膜的蛋白质。"
                },
                {
                  "en": "Rough endoplasmic reticulum (ER): studded with ribosomes; folds and modifies proteins destined for export or for membranes.",
                  "zh": "粗面内质网（rough ER）：表面布满核糖体；折叠并修饰用于分泌或膜的蛋白质。"
                },
                {
                  "en": "Smooth ER: lacks ribosomes; synthesizes lipids, stores calcium ions, and detoxifies drugs and poisons (abundant in liver cells).",
                  "zh": "光面内质网（smooth ER）：无核糖体；合成脂质、储存钙离子，并对药物和毒物进行解毒（在肝细胞中含量丰富）。"
                },
                {
                  "en": "Golgi apparatus: modifies, sorts, tags, and packages proteins and lipids into vesicles for shipment—the cell’s post office.",
                  "zh": "高尔基体（Golgi apparatus）：修饰、分选、加标签并将蛋白质和脂质包装入囊泡以便运送——细胞的「邮局」。"
                },
                {
                  "en": "Mitochondria: site of cellular respiration; use oxygen to make ATP. Have a double membrane, the inner one folded into cristae to increase surface area.",
                  "zh": "线粒体（mitochondria）：细胞呼吸的场所；利用氧气产生 ATP。具有双层膜，内膜折叠成嵴（cristae）以增大表面积。"
                },
                {
                  "en": "Chloroplasts (plants and algae): site of photosynthesis; convert light energy into sugars. Contain stacks of thylakoids (grana) and a double membrane.",
                  "zh": "叶绿体（chloroplast，植物和藻类）：光合作用的场所；将光能转化为糖。含有类囊体堆叠（基粒 grana）和双层膜。"
                },
                {
                  "en": "Lysosomes: contain hydrolytic enzymes that digest macromolecules, damaged organelles, and engulfed particles (mainly in animal cells).",
                  "zh": "溶酶体（lysosome）：含有水解酶，消化大分子、受损细胞器和吞入的颗粒（主要存在于动物细胞中）。"
                },
                {
                  "en": "Vacuoles: storage sacs; the large central vacuole of plant cells stores water and maintains turgor pressure that supports the cell.",
                  "zh": "液泡（vacuole）：储存囊；植物细胞的大型中央液泡储存水分并维持支撑细胞的膨压。"
                },
                {
                  "en": "Cytoskeleton: a network of microtubules, microfilaments, and intermediate filaments that gives shape, enables movement, and moves organelles and vesicles.",
                  "zh": "细胞骨架（cytoskeleton）：由微管、微丝和中间纤维构成的网络，赋予形状、实现运动，并移动细胞器和囊泡。"
                },
                {
                  "en": "Cell wall: a rigid outer layer providing structure and protection—cellulose in plants, chitin in fungi, peptidoglycan in bacteria. Animal cells lack a cell wall.",
                  "zh": "细胞壁（cell wall）：提供结构和保护的坚硬外层——植物为纤维素、真菌为几丁质、细菌为肽聚糖。动物细胞没有细胞壁。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: The rough ER, Golgi, and secretory vesicles form the endomembrane system—a continuous pathway that makes and ships proteins. A classic free-response asks you to trace a secreted protein: ribosome on rough ER → ER lumen → vesicle → Golgi → vesicle → plasma membrane → exocytosis. Know this route.",
              "zh": "AP 提示：粗面内质网、高尔基体和分泌囊泡构成内膜系统（endomembrane system）——一条制造并运输蛋白质的连续通路。经典简答题会让你追踪一个分泌蛋白的路线：粗面内质网上的核糖体 → 内质网腔 → 囊泡 → 高尔基体 → 囊泡 → 质膜 → 胞吐。请牢记这条路线。"
            },
            {
              "type": "h3",
              "en": "Endosymbiotic Theory",
              "zh": "内共生学说"
            },
            {
              "type": "p",
              "en": "Mitochondria and chloroplasts are unusual: they resemble free-living prokaryotes trapped inside a larger cell. The endosymbiotic theory proposes that these organelles originated when an ancestral eukaryotic cell engulfed aerobic bacteria (which became mitochondria) and, later, photosynthetic cyanobacteria (which became chloroplasts). The engulfed cells were not digested; instead, host and guest became mutually dependent.",
              "zh": "线粒体和叶绿体很特殊：它们像是被困在较大细胞内部的自由生活的原核生物。内共生学说（endosymbiotic theory）认为，这些细胞器起源于祖先真核细胞吞入需氧细菌（后成为线粒体），以及后来吞入光合蓝细菌（后成为叶绿体）。被吞入的细胞没有被消化，反而与宿主形成了相互依赖的关系。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Both organelles have their own small, circular DNA—like a bacterial chromosome.",
                  "zh": "两种细胞器都有自己的小型环状 DNA——类似细菌染色体。"
                },
                {
                  "en": "Both contain their own ribosomes, which are the 70S prokaryotic type, not the 80S eukaryotic type.",
                  "zh": "两者都含有自己的核糖体，是 70S 原核型，而非 80S 真核型。"
                },
                {
                  "en": "Both are surrounded by a double membrane—consistent with one cell being engulfed by another.",
                  "zh": "两者都被双层膜包围——与一个细胞被另一个细胞吞入相吻合。"
                },
                {
                  "en": "Both reproduce by binary fission, independently of the cell’s own division—just as bacteria divide.",
                  "zh": "两者都通过二分裂繁殖，独立于细胞自身的分裂——正如细菌分裂那样。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Surface-Area-to-Volume Ratio",
              "zh": "表面积与体积之比"
            },
            {
              "type": "p",
              "en": "A cell exchanges nutrients, gases, and wastes across its surface, but its metabolic demand depends on its volume. As a cell grows, volume increases with the cube of length while surface area increases only with the square, so the surface-area-to-volume ratio (SA:V) falls. Below a certain size, the membrane can no longer supply the interior fast enough.",
              "zh": "细胞通过其表面交换养分、气体和废物，但其代谢需求取决于体积。当细胞长大时，体积按边长的立方增加，而表面积只按平方增加，因此表面积与体积之比（SA:V）下降。超过一定大小后，膜就无法足够快地供应细胞内部。"
            },
            {
              "type": "math",
              "tex": "\\text{SA:V} = \\frac{\\text{surface area}}{\\text{volume}} = \\frac{6s^2}{s^3} = \\frac{6}{s}\\quad(\\text{cube of side }s)"
            },
            {
              "type": "p",
              "en": "Because SA:V is inversely related to size, small cells have a high ratio and exchange materials efficiently. This is why cells stay small, why they divide rather than simply growing larger, and why cells specialized for exchange (such as intestinal cells) develop microvilli that add surface area without adding volume.",
              "zh": "由于 SA:V 与大小成反比，小细胞具有高比值，能高效地交换物质。这就是为什么细胞保持较小、为什么它们分裂而不是单纯变大，以及为什么专门用于交换的细胞（如肠道细胞）会长出微绒毛，在不增加体积的情况下增加表面积。"
            },
            {
              "type": "note",
              "en": "AP misconception: A larger cell does not have “more” surface area to help it—what matters is surface area relative to volume. On the exam, always compare the ratio, not the raw surface area. Folded inner membranes (cristae, thylakoids, microvilli) are the biological answer to a shrinking SA:V.",
              "zh": "AP 常见误区：较大的细胞并非因为「拥有更多」表面积而得益——关键在于表面积相对于体积的比值。考试中要始终比较比值，而非表面积的绝对值。折叠的内膜（嵴、类囊体、微绒毛）正是生物学对 SA:V 下降的应对方案。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Comparing SA:V",
                "zh": "例题 1：比较 SA:V"
              },
              "problem": {
                "en": "A cube-shaped cell has a side length of $2\\ \\mu m$. What is its surface-area-to-volume ratio, and how does it compare to a cell with side length $4\\ \\mu m$?",
                "zh": "一个立方体形细胞的边长为 $2\\ \\mu m$。它的表面积与体积之比是多少？与边长 $4\\ \\mu m$ 的细胞相比如何？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\text{SA:V}_{2} = \\frac{6(2)^2}{(2)^3} = \\frac{24}{8} = 3 : 1"
                },
                {
                  "type": "math",
                  "tex": "\\text{SA:V}_{4} = \\frac{6(4)^2}{(4)^3} = \\frac{96}{64} = 1.5 : 1"
                },
                {
                  "type": "p",
                  "en": "The smaller cell has a ratio of $3:1$, twice that of the larger cell ($1.5:1$). Doubling the side length halves the SA:V, so the smaller cell exchanges materials with its environment far more efficiently per unit of volume.",
                  "zh": "较小的细胞比值为 $3:1$，是较大细胞（$1.5:1$）的两倍。边长加倍会使 SA:V 减半，因此较小的细胞在单位体积上与环境交换物质的效率高得多。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reasoning About Organelle Abundance",
                "zh": "例题 2：推理细胞器的丰度"
              },
              "problem": {
                "en": "A researcher finds that a certain human cell is packed with mitochondria and has an unusually large amount of smooth ER. What is the likely function of this cell?",
                "zh": "研究者发现某种人类细胞中充满了线粒体，并且含有异常大量的光面内质网。这种细胞可能的功能是什么？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Abundant mitochondria indicate a high demand for ATP, so the cell does a lot of energy-requiring work (like muscle contraction or active transport). Abundant smooth ER points to lipid synthesis or detoxification. A liver cell fits both clues: it performs extensive metabolism and detoxifies drugs and toxins, which the smooth ER handles.",
                  "zh": "大量线粒体表明对 ATP 需求高，因此该细胞进行大量需能工作（如肌肉收缩或主动运输）。大量光面内质网则指向脂质合成或解毒。肝细胞符合这两条线索：它进行广泛的代谢，并对药物和毒素解毒，而这正是光面内质网的职责。"
                },
                {
                  "type": "p",
                  "en": "This kind of structure-function reasoning—inferring a cell’s job from which organelles are enriched—is a common AP task.",
                  "zh": "这种结构—功能推理——从哪些细胞器富集来推断细胞的功能——是常见的 AP 考点。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which feature is found in eukaryotic cells but NOT in prokaryotic cells?",
                "zh": "下列哪个特征存在于真核细胞而非原核细胞中？"
              },
              "choices": [
                "A membrane-bound nucleus",
                "Plasma membrane",
                "Ribosomes",
                "DNA"
              ],
              "answer": 0,
              "explanation": {
                "en": "All cells have ribosomes, a plasma membrane, and DNA. Only eukaryotes enclose their DNA in a membrane-bound nucleus; prokaryotes keep DNA in an unbounded nucleoid region.",
                "zh": "所有细胞都有核糖体、质膜和 DNA。只有真核生物将 DNA 包裹在膜包被的细胞核中；原核生物的 DNA 位于无膜包被的拟核区域。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A protein is destined to be secreted from the cell. Which sequence correctly traces its path?",
                "zh": "某蛋白质将被分泌到细胞外。下列哪个顺序正确地追踪了它的路径？"
              },
              "choices": [
                "Free ribosome → mitochondrion → lysosome → out of cell",
                "Rough ER → Golgi → vesicle → plasma membrane → exocytosis",
                "Smooth ER → nucleus → Golgi → out of cell",
                "Golgi → rough ER → vesicle → exocytosis"
              ],
              "answer": 1,
              "explanation": {
                "en": "Secreted proteins are made on ribosomes of the rough ER, modified in the ER and Golgi, packaged into vesicles, and released by exocytosis at the plasma membrane. Choice D reverses the ER and Golgi.",
                "zh": "分泌蛋白在粗面内质网的核糖体上合成，在内质网和高尔基体中修饰，包装入囊泡，并在质膜处通过胞吐释放。选项 D 颠倒了内质网与高尔基体的顺序。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which observation provides the STRONGEST support for the endosymbiotic theory?",
                "zh": "下列哪项观察为内共生学说提供了最有力的支持？"
              },
              "choices": [
                "Mitochondria and chloroplasts have their own circular DNA and 70S ribosomes",
                "Mitochondria are found in almost all eukaryotic cells",
                "Chloroplasts are green because they contain chlorophyll",
                "Both organelles help the cell make ATP or sugars"
              ],
              "answer": 0,
              "explanation": {
                "en": "Their own bacteria-like circular DNA and 70S ribosomes are direct molecular evidence that these organelles descended from once-free-living prokaryotes. The other statements are true but do not point to a prokaryotic ancestry.",
                "zh": "它们自身类似细菌的环状 DNA 和 70S 核糖体是这些细胞器起源于曾经自由生活的原核生物的直接分子证据。其他陈述虽属实，但并不指向原核起源。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "As a spherical cell increases its radius, what happens to its surface-area-to-volume ratio?",
                "zh": "当球形细胞的半径增大时，其表面积与体积之比会怎样变化？"
              },
              "choices": [
                "It decreases because volume grows faster than surface area",
                "It stays the same because both grow together",
                "It increases because surface area grows faster than volume",
                "It first increases, then decreases"
              ],
              "answer": 0,
              "explanation": {
                "en": "Volume scales with $r^3$ while surface area scales with $r^2$, so volume outpaces surface area and SA:V falls as the cell enlarges. This limits maximum cell size.",
                "zh": "体积按 $r^3$ 变化，而表面积按 $r^2$ 变化，因此体积增长快于表面积，细胞增大时 SA:V 下降。这限制了细胞的最大尺寸。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which organelle would be most abundant in a cell that specializes in breaking down worn-out organelles and engulfed bacteria?",
                "zh": "在专门分解衰老细胞器和吞入细菌的细胞中，下列哪种细胞器含量最多？"
              },
              "choices": [
                "Lysosomes",
                "Chloroplasts",
                "Ribosomes",
                "Central vacuole"
              ],
              "answer": 0,
              "explanation": {
                "en": "Lysosomes contain hydrolytic enzymes that digest macromolecules, damaged organelles, and engulfed particles. A cell doing extensive digestion (like a white blood cell) is rich in lysosomes.",
                "zh": "溶酶体含有水解酶，能消化大分子、受损细胞器和吞入的颗粒。进行大量消化的细胞（如白细胞）富含溶酶体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cube-shaped cell has a side length of $3\\ \\mu m$. What is its surface-area-to-volume ratio? Give the number of the ratio to 1 (e.g., a ratio of $4:1$ is “4”).",
                "zh": "一个立方体形细胞的边长为 $3\\ \\mu m$。它的表面积与体积之比是多少？给出比值中比 1 的数字（例如 $4:1$ 写作「4」）。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "2:1"
              ],
              "explanation": {
                "en": "$\\text{SA:V} = \\frac{6(3)^2}{(3)^3} = \\frac{54}{27} = 2$, i.e. a ratio of $2:1$.",
                "zh": "$\\text{SA:V} = \\frac{6(3)^2}{(3)^3} = \\frac{54}{27} = 2$，即比值为 $2:1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name of the organelle that modifies, sorts, and packages proteins into vesicles for shipment? Give the term.",
                "zh": "修饰、分选并将蛋白质包装入囊泡以便运送的细胞器叫什么？给出术语。"
              },
              "answer": "golgi apparatus",
              "accept": [
                "golgi",
                "golgi body",
                "golgi complex",
                "高尔基体"
              ],
              "explanation": {
                "en": "The Golgi apparatus receives proteins from the ER, further modifies and tags them, and packages them into vesicles—the cell’s shipping and processing center.",
                "zh": "高尔基体接收来自内质网的蛋白质，进一步修饰并加标签，再包装入囊泡——是细胞的运输和加工中心。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many separate membranes surround a mitochondrion? Give a number.",
                "zh": "线粒体被几层独立的膜包围？给出数字。"
              },
              "answer": "2",
              "accept": [
                "two",
                "double"
              ],
              "explanation": {
                "en": "Mitochondria have a double membrane: a smooth outer membrane and an inner membrane folded into cristae. The double membrane is also evidence for endosymbiosis.",
                "zh": "线粒体有双层膜：光滑的外膜和折叠成嵴的内膜。双层膜也是内共生的证据之一。"
              }
            }
          ]
        },
        {
          "id": "membranes-and-transport",
          "title": "Membranes and Transport",
          "titleZh": "膜与物质运输",
          "content": [
            {
              "type": "h2",
              "en": "The Plasma Membrane: A Selective Barrier",
              "zh": "质膜：选择性屏障"
            },
            {
              "type": "p",
              "en": "Every cell is enclosed by a plasma membrane that separates the internal environment from the outside. Far from being a passive wall, the membrane controls what enters and leaves. Its structure is described by the fluid mosaic model: a fluid phospholipid bilayer studded with a mosaic of proteins, cholesterol, and carbohydrates that drift laterally within the plane of the membrane.",
              "zh": "每个细胞都被质膜（plasma membrane）包围，将内部环境与外界分隔开。膜绝非被动的墙壁，而是控制物质进出的关口。其结构由流动镶嵌模型（fluid mosaic model）描述：一层流动的磷脂双分子层，其中镶嵌着蛋白质、胆固醇和碳水化合物的「镶嵌」结构，它们在膜平面内侧向移动。"
            },
            {
              "type": "h3",
              "en": "The Phospholipid Bilayer",
              "zh": "磷脂双分子层"
            },
            {
              "type": "p",
              "en": "Each phospholipid has a hydrophilic (water-loving) phosphate head and two hydrophobic (water-fearing) fatty-acid tails. In water, phospholipids self-assemble into a bilayer: heads face the watery interior and exterior, while tails hide inside, away from water. This arrangement makes the membrane selectively permeable—small nonpolar molecules ($\\text{O}_2$, $\\text{CO}_2$) slip through the hydrophobic core easily, but ions and large polar molecules (glucose) cannot cross without help.",
              "zh": "每个磷脂分子有一个亲水（喜水）的磷酸头和两条疏水（避水）的脂肪酸尾。在水中，磷脂自发组装成双分子层：头部朝向内外的水环境，尾部则隐藏在内部、远离水。这种排列使膜具有选择透过性（selective permeability）——小的非极性分子（$\\text{O}_2$、$\\text{CO}_2$）容易穿过疏水核心，但离子和大的极性分子（如葡萄糖）没有帮助就无法通过。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Membrane proteins: transport proteins (channels and carriers), receptors, enzymes, and cell-recognition markers.",
                  "zh": "膜蛋白：运输蛋白（通道和载体）、受体、酶以及细胞识别标志。"
                },
                {
                  "en": "Cholesterol (in animal cells): buffers membrane fluidity—keeping it from becoming too fluid when warm or too rigid when cold.",
                  "zh": "胆固醇（动物细胞中）：调节膜的流动性——防止温暖时过于流动、寒冷时过于僵硬。"
                },
                {
                  "en": "Carbohydrates: attached to proteins (glycoproteins) or lipids (glycolipids) on the outer surface for cell-to-cell recognition.",
                  "zh": "碳水化合物：附着在外表面的蛋白质（糖蛋白）或脂质（糖脂）上，用于细胞间识别。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Passive Transport",
              "zh": "被动运输"
            },
            {
              "type": "p",
              "en": "Passive transport moves substances down their concentration gradient (from high to low) and requires no cellular energy. Diffusion is the net movement of particles from where they are more concentrated to where they are less concentrated. Facilitated diffusion uses transport proteins to move ions and polar molecules that cannot cross the hydrophobic core on their own—still down the gradient, still without ATP. Osmosis is the diffusion of water across a selectively permeable membrane.",
              "zh": "被动运输（passive transport）使物质顺浓度梯度（从高到低）移动，不需要细胞能量。扩散（diffusion）是粒子从浓度较高处向浓度较低处的净移动。协助扩散（facilitated diffusion）利用运输蛋白移动无法自行穿过疏水核心的离子和极性分子——仍是顺梯度，仍不消耗 ATP。渗透（osmosis）是水通过选择透过性膜的扩散。"
            },
            {
              "type": "h3",
              "en": "Tonicity and Water Potential",
              "zh": "张力与水势"
            },
            {
              "type": "p",
              "en": "Tonicity describes how a solution affects the movement of water into or out of a cell. In a hypertonic solution (more solute outside), water leaves the cell and it shrivels. In a hypotonic solution (less solute outside), water enters and the cell swells—and may burst if it has no wall. In an isotonic solution, water moves in and out at equal rates with no net change. Water always moves toward the higher solute (lower water) concentration.",
              "zh": "张力（tonicity）描述溶液如何影响水进出细胞。在高渗溶液（hypertonic，外部溶质较多）中，水流出细胞，细胞皱缩。在低渗溶液（hypotonic，外部溶质较少）中，水流入，细胞膨胀——若无细胞壁可能胀破。在等渗溶液（isotonic）中，水以相等速率进出，无净变化。水总是流向溶质浓度较高（水浓度较低）的一侧。"
            },
            {
              "type": "p",
              "en": "Biologists quantify the tendency of water to move using water potential ($\\Psi$), measured in bars or megapascals. Water always flows from higher (less negative) water potential to lower (more negative) water potential. Water potential has two components: pressure potential ($\\Psi_p$) and solute potential ($\\Psi_s$).",
              "zh": "生物学家用水势（water potential，$\\Psi$）来量化水移动的趋势，单位为巴或兆帕。水总是从高（较不负）水势流向低（较负）水势。水势有两个组成部分：压力势（$\\Psi_p$）和溶质势（$\\Psi_s$）。"
            },
            {
              "type": "math",
              "tex": "\\Psi = \\Psi_p + \\Psi_s \\qquad \\Psi_s = -iCRT"
            },
            {
              "type": "p",
              "en": "Here $i$ is the ionization constant (number of particles a solute dissociates into), $C$ is molar concentration, $R = 0.0831\\ \\text{L bar mol}^{-1}\\text{K}^{-1}$, and $T$ is temperature in kelvin. Adding solute makes $\\Psi_s$ more negative (lowering water potential), so water moves toward the more concentrated solution. Positive pressure (as in a turgid plant cell) raises water potential.",
              "zh": "其中 $i$ 是电离常数（溶质解离出的粒子数），$C$ 是摩尔浓度，$R = 0.0831\\ \\text{L bar mol}^{-1}\\text{K}^{-1}$，$T$ 是开尔文温度。加入溶质会使 $\\Psi_s$ 更负（降低水势），因此水流向浓度更高的溶液。正压（如膨胀的植物细胞）会升高水势。"
            },
            {
              "type": "note",
              "en": "AP tip: For an open container or a cell in an open beaker, pressure potential $\\Psi_p = 0$, so $\\Psi = \\Psi_s$. A frequent error is forgetting the negative sign in $\\Psi_s = -iCRT$—water potential of a solution is negative, and pure water at atmospheric pressure has $\\Psi = 0$.",
              "zh": "AP 提示：对于开放容器或置于开放烧杯中的细胞，压力势 $\\Psi_p = 0$，所以 $\\Psi = \\Psi_s$。常见错误是漏掉 $\\Psi_s = -iCRT$ 中的负号——溶液的水势为负，而大气压下的纯水 $\\Psi = 0$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Calculating Solute Potential",
                "zh": "例题 1：计算溶质势"
              },
              "problem": {
                "en": "Calculate the solute potential of a $0.1\\ M$ solution of sucrose (which does not ionize, $i = 1$) at $25\\,^\\circ\\text{C}$. Use $R = 0.0831$.",
                "zh": "计算 $25\\,^\\circ\\text{C}$ 下 $0.1\\ M$ 蔗糖溶液（不电离，$i = 1$）的溶质势。取 $R = 0.0831$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First convert temperature to kelvin: $25 + 273 = 298\\ \\text{K}$. Then substitute into $\\Psi_s = -iCRT$.",
                  "zh": "先把温度换算为开尔文：$25 + 273 = 298\\ \\text{K}$。然后代入 $\\Psi_s = -iCRT$。"
                },
                {
                  "type": "math",
                  "tex": "\\Psi_s = -(1)(0.1)(0.0831)(298) = -2.48\\ \\text{bars}"
                },
                {
                  "type": "p",
                  "en": "The solute potential is $-2.48\\ \\text{bars}$. In an open container $\\Psi_p = 0$, so the water potential of this solution is also $-2.48\\ \\text{bars}$. A cell placed in it would gain water only if its own $\\Psi$ were even lower.",
                  "zh": "溶质势为 $-2.48\\ \\text{bars}$。在开放容器中 $\\Psi_p = 0$，因此该溶液的水势也是 $-2.48\\ \\text{bars}$。放入其中的细胞只有在自身 $\\Psi$ 更低时才会吸水。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Active Transport and the Sodium-Potassium Pump",
              "zh": "主动运输与钠钾泵"
            },
            {
              "type": "p",
              "en": "Active transport moves substances against their concentration gradient (from low to high) and therefore requires energy, usually from ATP. The sodium-potassium pump ($\\text{Na}^+/\\text{K}^+$ pump) is the classic example: for each ATP hydrolyzed, it exports 3 $\\text{Na}^+$ out of the cell and imports 2 $\\text{K}^+$ in. This builds the electrochemical gradient essential for nerve signaling and for driving secondary active transport.",
              "zh": "主动运输（active transport）使物质逆浓度梯度（从低到高）移动，因此需要能量，通常来自 ATP。钠钾泵（$\\text{Na}^+/\\text{K}^+$ 泵）是经典例子：每水解一个 ATP，就将 3 个 $\\text{Na}^+$ 泵出细胞、将 2 个 $\\text{K}^+$ 泵入。这建立了对神经信号传导和驱动次级主动运输至关重要的电化学梯度。"
            },
            {
              "type": "h3",
              "en": "Bulk Transport: Endocytosis and Exocytosis",
              "zh": "大量运输：胞吞与胞吐"
            },
            {
              "type": "p",
              "en": "Molecules too large to cross by pumps or channels move in bulk using vesicles. In endocytosis the membrane folds inward to engulf material, forming a vesicle (phagocytosis engulfs solids, pinocytosis takes in fluids). In exocytosis a vesicle fuses with the plasma membrane to release its contents—how cells secrete hormones, neurotransmitters, and digestive enzymes. Both require ATP.",
              "zh": "太大而无法通过泵或通道的分子借助囊泡进行大量运输。在胞吞（endocytosis）中，膜向内折叠吞入物质，形成囊泡（吞噬作用吞入固体，胞饮作用摄入液体）。在胞吐（exocytosis）中，囊泡与质膜融合以释放内容物——这是细胞分泌激素、神经递质和消化酶的方式。两者都需要 ATP。"
            },
            {
              "type": "note",
              "en": "AP misconception: “Facilitated diffusion uses a protein, so it must need energy.” False—using a transport protein does not mean using ATP. Facilitated diffusion is passive because the substance still moves down its gradient; only movement against the gradient (active transport, endocytosis, exocytosis) costs energy.",
              "zh": "AP 常见误区：「协助扩散用了蛋白质，所以一定需要能量。」错——用运输蛋白并不等于消耗 ATP。协助扩散是被动的，因为物质仍顺梯度移动；只有逆梯度移动（主动运输、胞吞、胞吐）才消耗能量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Predicting Water Movement",
                "zh": "例题 2：预测水的移动"
              },
              "problem": {
                "en": "A plant cell with an internal water potential of $-4.0\\ \\text{bars}$ is placed in a beaker of solution with a water potential of $-2.0\\ \\text{bars}$. Which way does water move, and what happens to the cell?",
                "zh": "一个内部水势为 $-4.0\\ \\text{bars}$ 的植物细胞被放入水势为 $-2.0\\ \\text{bars}$ 的溶液烧杯中。水向哪个方向移动，细胞会怎样？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Water moves from higher (less negative) to lower (more negative) water potential. The solution is at $-2.0$ and the cell is at $-4.0$, so the cell is lower. Water therefore moves from the beaker into the cell.",
                  "zh": "水从高（较不负）水势流向低（较负）水势。溶液为 $-2.0$，细胞为 $-4.0$，故细胞更低。因此水从烧杯流入细胞。"
                },
                {
                  "type": "p",
                  "en": "The cell takes up water and becomes more turgid; its central vacuole swells and pushes the membrane against the cell wall, raising pressure potential. The solution is hypotonic relative to the cell.",
                  "zh": "细胞吸水并变得更膨胀；中央液泡胀大，将膜压向细胞壁，升高压力势。相对于细胞，该溶液是低渗的。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "According to the fluid mosaic model, the membrane is best described as",
                "zh": "根据流动镶嵌模型，膜最恰当的描述是"
              },
              "choices": [
                "A fluid phospholipid bilayer with proteins that can move laterally",
                "A rigid double layer of protein with fixed lipids",
                "A single layer of phospholipids with tails facing outward",
                "A solid crystal of cholesterol and carbohydrate"
              ],
              "answer": 0,
              "explanation": {
                "en": "The model describes a fluid phospholipid bilayer in which proteins and other components form a mosaic and drift laterally. The membrane is dynamic, not rigid, and it is a bilayer, not a single layer.",
                "zh": "该模型描述的是流动的磷脂双分子层，其中蛋白质及其他成分构成镶嵌结构并侧向移动。膜是动态的而非僵硬的，且是双分子层而非单层。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which molecule can diffuse most readily and directly through the hydrophobic core of the membrane, without a transport protein?",
                "zh": "下列哪种分子无需运输蛋白就能最容易、最直接地扩散穿过膜的疏水核心？"
              },
              "choices": [
                "$\\text{Na}^+$ ions",
                "Glucose",
                "A protein",
                "$\\text{O}_2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Small nonpolar molecules like $\\text{O}_2$ dissolve in and slip through the hydrophobic tails. Ions and polar molecules like glucose need transport proteins; proteins are far too large.",
                "zh": "像 $\\text{O}_2$ 这样的小非极性分子能溶于并穿过疏水尾部。离子和像葡萄糖这样的极性分子需要运输蛋白；蛋白质则太大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A red blood cell is placed in distilled (pure) water. What will happen and why?",
                "zh": "将红细胞放入蒸馏（纯）水中。会发生什么，为什么？"
              },
              "choices": [
                "It shrivels because the water is hypertonic",
                "It stays the same because the water is isotonic",
                "Nothing, because water cannot cross the membrane",
                "It swells and may burst because the water is hypotonic"
              ],
              "answer": 3,
              "explanation": {
                "en": "Pure water has more water (less solute) than the cell’s cytoplasm, so it is hypotonic to the cell. Water enters by osmosis and, lacking a cell wall, the red blood cell swells and can lyse (burst).",
                "zh": "纯水的水分（溶质更少）多于细胞质，故对细胞是低渗的。水通过渗透进入，由于缺乏细胞壁，红细胞膨胀并可能裂解（胀破）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The sodium-potassium pump is considered active transport because it",
                "zh": "钠钾泵被视为主动运输，因为它"
              },
              "choices": [
                "Moves ions down their concentration gradients",
                "Only moves water across the membrane",
                "Uses a channel protein that requires no energy",
                "Uses ATP to move ions against their concentration gradients"
              ],
              "answer": 3,
              "explanation": {
                "en": "The pump moves $\\text{Na}^+$ and $\\text{K}^+$ against their gradients, which requires energy from ATP. Moving down a gradient would be passive; the pump moves ions, not water.",
                "zh": "该泵逆梯度移动 $\\text{Na}^+$ 和 $\\text{K}^+$，需要 ATP 提供能量。顺梯度移动则是被动的；该泵移动的是离子而非水。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A white blood cell engulfs a bacterium by wrapping its membrane around it to form a vesicle. This process is",
                "zh": "白细胞用膜将细菌包裹起来形成囊泡从而吞入它。这一过程是"
              },
              "choices": [
                "Exocytosis",
                "Facilitated diffusion",
                "Osmosis",
                "Phagocytosis (a type of endocytosis)"
              ],
              "answer": 3,
              "explanation": {
                "en": "Engulfing a large solid particle by folding the membrane inward to form a vesicle is phagocytosis, a form of endocytosis. Exocytosis releases material; the other two move only small molecules or water.",
                "zh": "通过膜向内折叠形成囊泡来吞入较大固体颗粒的过程是吞噬作用，属于胞吞的一种。胞吐是释放物质；另外两者只移动小分子或水。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Calculate the solute potential of a $0.5\\ M$ solution of a non-ionizing solute ($i = 1$) at $27\\,^\\circ\\text{C}$ (300 K), using $R = 0.0831$. Give the answer in bars, rounded to one decimal place (include the sign).",
                "zh": "用 $R = 0.0831$ 计算 $27\\,^\\circ\\text{C}$（300 K）下 $0.5\\ M$ 非电离溶质（$i = 1$）溶液的溶质势。以巴为单位，保留一位小数（含符号）。"
              },
              "answer": "-12.5",
              "accept": [
                "-12.5 bars",
                "-12.47",
                "-12.46"
              ],
              "explanation": {
                "en": "$\\Psi_s = -iCRT = -(1)(0.5)(0.0831)(300) = -12.5\\ \\text{bars}$. Remember the negative sign.",
                "zh": "$\\Psi_s = -iCRT = -(1)(0.5)(0.0831)(300) = -12.5\\ \\text{bars}$。别忘了负号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For each ATP it hydrolyzes, how many sodium ions does the $\\text{Na}^+/\\text{K}^+$ pump export from the cell? Give a number.",
                "zh": "钠钾泵每水解一个 ATP，将多少个钠离子泵出细胞？给出数字。"
              },
              "answer": "3",
              "accept": [
                "three"
              ],
              "explanation": {
                "en": "The pump exports 3 $\\text{Na}^+$ out and imports 2 $\\text{K}^+$ in per ATP, creating a net movement of positive charge out of the cell.",
                "zh": "该泵每个 ATP 泵出 3 个 $\\text{Na}^+$、泵入 2 个 $\\text{K}^+$，造成正电荷净流出细胞。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes a solution that has a lower solute concentration than the cell inside it, causing water to enter the cell? Give the term.",
                "zh": "溶质浓度低于其内部细胞、导致水流入细胞的溶液用什么术语描述？给出术语。"
              },
              "answer": "hypotonic",
              "accept": [
                "低渗",
                "hypotonic solution"
              ],
              "explanation": {
                "en": "A hypotonic solution has less solute (more water) than the cell, so water moves in by osmosis and the cell swells. “Hypo” means below.",
                "zh": "低渗溶液的溶质（水更多）少于细胞，故水通过渗透流入，细胞膨胀。「hypo」意为「低于」。"
              }
            }
          ]
        },
        {
          "id": "cell-compartmentalization",
          "title": "Cell Compartmentalization and Origins",
          "titleZh": "细胞区室化与起源",
          "content": [
            {
              "type": "h2",
              "en": "Why Compartmentalization Matters",
              "zh": "区室化为何重要"
            },
            {
              "type": "p",
              "en": "The defining advantage of eukaryotic cells is compartmentalization: dividing the cell’s interior into membrane-bound organelles, each a distinct microenvironment. By walling off separate compartments, a cell can run many different—even incompatible—chemical reactions at the same time, each under conditions tuned for its enzymes. This raises efficiency and lets eukaryotes grow larger and more complex than prokaryotes.",
              "zh": "真核细胞的决定性优势在于区室化（compartmentalization）：将细胞内部分隔成膜包被的细胞器，每个都是独立的微环境。通过将不同区室隔开，细胞可以同时进行许多不同——甚至互不相容——的化学反应，每个反应都处于为其酶调节好的条件下。这提高了效率，使真核生物能够比原核生物长得更大、更复杂。"
            },
            {
              "type": "h3",
              "en": "Specialized Environments and Efficiency",
              "zh": "特化的环境与效率"
            },
            {
              "type": "p",
              "en": "Each compartment maintains local conditions—pH, ion concentration, and enzyme sets—that would harm the rest of the cell if released. Membranes concentrate reactants and enzymes together, speeding reactions, while keeping destructive processes safely contained.",
              "zh": "每个区室都维持局部条件——pH、离子浓度和酶的组合——这些条件若释放到细胞其余部分会造成损害。膜将反应物和酶集中在一起，加快反应速度，同时将破坏性过程安全地隔离起来。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Lysosomes hold acidic hydrolytic enzymes (optimal near pH 5) that would digest the cytosol if not contained.",
                  "zh": "溶酶体容纳酸性水解酶（最适 pH 约为 5），若不加以隔离会消化细胞质。"
                },
                {
                  "en": "The nucleus separates transcription (DNA → mRNA) from translation, allowing mRNA to be processed and edited before it reaches ribosomes.",
                  "zh": "细胞核将转录（DNA → mRNA）与翻译分开，使 mRNA 在到达核糖体前得以加工和编辑。"
                },
                {
                  "en": "Mitochondria concentrate the enzymes and proton gradient of respiration; chloroplasts concentrate those of photosynthesis.",
                  "zh": "线粒体集中了呼吸作用的酶和质子梯度；叶绿体集中了光合作用的相应组分。"
                },
                {
                  "en": "The ER and Golgi form an isolated assembly line so proteins are folded, modified, and sorted without interference from the cytosol.",
                  "zh": "内质网和高尔基体构成一条隔离的流水线，使蛋白质在不受细胞质干扰的情况下被折叠、修饰和分选。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: When a question asks about the “advantage” of membrane-bound organelles, the expected answer is usually some version of: they create separate internal environments that allow specialized, simultaneous, and otherwise incompatible reactions, increasing the cell’s efficiency. Tie your answer to reaction conditions (pH, enzymes, concentration).",
              "zh": "AP 提示：当题目问及膜包被细胞器的「优势」时，期望的答案通常是某种形式的：它们创造出独立的内部环境，使特化的、同时进行的、否则互不相容的反应得以进行，从而提高细胞效率。请把答案与反应条件（pH、酶、浓度）联系起来。"
            },
            {
              "type": "h3",
              "en": "The Origin of Eukaryotic Cells",
              "zh": "真核细胞的起源"
            },
            {
              "type": "p",
              "en": "How did the complex eukaryotic cell arise from simpler prokaryotes? Two processes are thought to be involved. First, infoldings of the plasma membrane of an ancestral prokaryote could have pinched off to form internal membranes—the nuclear envelope and endomembrane system. Second, endosymbiosis explains the origin of mitochondria and chloroplasts: a host cell engulfed free-living prokaryotes that survived inside it and evolved into organelles.",
              "zh": "复杂的真核细胞是如何从较简单的原核生物演化而来的？一般认为涉及两个过程。第一，祖先原核生物质膜的内陷可能脱离形成内膜——即核膜和内膜系统。第二，内共生（endosymbiosis）解释了线粒体和叶绿体的起源：一个宿主细胞吞入了自由生活的原核生物，这些原核生物在其体内存活并演化成细胞器。"
            },
            {
              "type": "h3",
              "en": "Detailed Evidence for Endosymbiosis",
              "zh": "内共生的详细证据"
            },
            {
              "type": "p",
              "en": "The endosymbiotic theory, championed by Lynn Margulis, is supported by multiple independent lines of evidence showing that mitochondria and chloroplasts retain the hallmarks of their bacterial ancestors.",
              "zh": "由林恩·马古利斯（Lynn Margulis）大力倡导的内共生学说，得到多条相互独立的证据支持，表明线粒体和叶绿体保留了其细菌祖先的特征。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Own DNA: both organelles contain their own circular DNA, separate from the nuclear DNA and resembling a bacterial chromosome.",
                  "zh": "自身 DNA：两种细胞器都含有自己的环状 DNA，独立于核 DNA，类似细菌染色体。"
                },
                {
                  "en": "Double membranes: each is bounded by two membranes—the inner one derived from the original prokaryote, the outer from the host cell’s membrane during engulfment.",
                  "zh": "双层膜：每种细胞器都被两层膜包围——内膜源自原来的原核生物，外膜源自吞入过程中宿主细胞的膜。"
                },
                {
                  "en": "Own ribosomes: they make some of their own proteins using 70S ribosomes, the prokaryotic type, not the 80S ribosomes of the eukaryotic cytosol.",
                  "zh": "自身核糖体：它们用 70S 核糖体（原核型）合成自己的一部分蛋白质，而非真核细胞质的 80S 核糖体。"
                },
                {
                  "en": "Binary fission: they replicate on their own by binary fission, the same division mechanism used by bacteria, independent of the host cell cycle.",
                  "zh": "二分裂：它们通过二分裂自行复制，与细菌相同的分裂机制，独立于宿主细胞周期。"
                },
                {
                  "en": "Similar size and antibiotic sensitivity: they are about the size of bacteria, and their protein synthesis is inhibited by some of the same antibiotics that affect bacteria.",
                  "zh": "相似的大小和抗生素敏感性：它们的大小与细菌相仿，其蛋白质合成会被一些影响细菌的相同抗生素抑制。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP misconception: Endosymbiosis does not claim that the nucleus was an engulfed bacterium. The nuclear envelope and ER are thought to have formed by membrane infolding, whereas only mitochondria and chloroplasts—the organelles with their own DNA and double membranes—are explained by endosymbiosis.",
              "zh": "AP 常见误区：内共生并不主张细胞核是被吞入的细菌。核膜和内质网一般认为是由膜内陷形成的，而只有线粒体和叶绿体——即拥有自身 DNA 和双层膜的细胞器——才用内共生来解释。"
            },
            {
              "type": "h3",
              "en": "Internal Membranes Increase Surface Area",
              "zh": "内膜增大表面积"
            },
            {
              "type": "p",
              "en": "Compartmentalization also solves a geometry problem. Many vital reactions happen on membranes, so a cell needs abundant membrane surface. Because surface area grows more slowly than volume, cells evolved extensively folded internal membranes to pack enormous surface area into a small volume, maximizing the space available for membrane-bound reactions.",
              "zh": "区室化还解决了一个几何问题。许多重要反应发生在膜上，因此细胞需要丰富的膜表面。由于表面积的增长慢于体积，细胞演化出广泛折叠的内膜，将巨大的表面积压缩进很小的体积中，最大化可用于膜上反应的空间。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Cristae: the inner mitochondrial membrane is folded into cristae, greatly expanding the surface for the electron transport chain and ATP synthase.",
                  "zh": "嵴：线粒体内膜折叠成嵴，大大扩展了电子传递链和 ATP 合酶的表面。"
                },
                {
                  "en": "Thylakoids: stacked thylakoid membranes in chloroplasts provide vast surface area for the light-dependent reactions of photosynthesis.",
                  "zh": "类囊体：叶绿体中堆叠的类囊体膜为光合作用的光反应提供了巨大的表面积。"
                },
                {
                  "en": "ER network: the folded, sheet-and-tubule structure of the ER gives a huge surface for protein and lipid synthesis.",
                  "zh": "内质网网络：内质网折叠的片层与小管结构为蛋白质和脂质合成提供了巨大表面。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Interpreting an Antibiotic Result",
                "zh": "例题 1：解读抗生素实验结果"
              },
              "problem": {
                "en": "An antibiotic that blocks 70S ribosomes but not 80S ribosomes is added to human cells. Researchers observe that protein synthesis inside mitochondria stops, but protein synthesis in the cytosol continues. How does this support the endosymbiotic theory?",
                "zh": "向人类细胞中加入一种能阻断 70S 核糖体但不阻断 80S 核糖体的抗生素。研究者观察到线粒体内的蛋白质合成停止，而细胞质中的蛋白质合成继续。这如何支持内共生学说？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The cytosol uses eukaryotic 80S ribosomes, which the antibiotic does not affect, so cytosolic synthesis continues. Mitochondrial synthesis stops because mitochondria use 70S ribosomes—the prokaryotic type targeted by the drug.",
                  "zh": "细胞质使用真核 80S 核糖体，不受该抗生素影响，故细胞质合成继续。线粒体合成停止，是因为线粒体使用 70S 核糖体——即该药物所针对的原核型。"
                },
                {
                  "type": "p",
                  "en": "That mitochondria contain bacteria-like 70S ribosomes is exactly what we would expect if they descended from an engulfed prokaryote, supporting endosymbiosis.",
                  "zh": "线粒体含有类似细菌的 70S 核糖体，正是我们在它们起源于被吞入原核生物的假设下所预期的，从而支持内共生学说。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reasoning About Membrane Folding",
                "zh": "例题 2：推理膜的折叠"
              },
              "problem": {
                "en": "Two mitochondria are the same overall size, but one comes from a highly active muscle cell and has far more tightly packed cristae than the other. Which mitochondrion can produce more ATP, and why?",
                "zh": "两个线粒体总体大小相同，但一个来自高度活跃的肌肉细胞，其嵴的排列比另一个紧密得多。哪个线粒体能产生更多 ATP，为什么？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The mitochondrion with more tightly packed cristae can produce more ATP. Cristae are folds of the inner membrane, where the electron transport chain and ATP synthase reside. More cristae means more inner-membrane surface area in the same volume.",
                  "zh": "嵴排列更紧密的线粒体能产生更多 ATP。嵴是内膜的折叠，电子传递链和 ATP 合酶都位于此处。嵴更多意味着在相同体积内内膜表面积更大。"
                },
                {
                  "type": "p",
                  "en": "More surface area allows more of these ATP-producing complexes to operate simultaneously, so a muscle cell—with high energy demand—benefits from densely folded cristae. This shows how internal membrane folding overcomes the low surface-area-to-volume ratio of a compact organelle.",
                  "zh": "更大的表面积使更多这类产 ATP 的复合体能同时工作，因此能量需求高的肌肉细胞受益于密集折叠的嵴。这说明内膜折叠如何克服紧凑细胞器较低的表面积与体积之比。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the primary advantage of dividing a eukaryotic cell into membrane-bound compartments?",
                "zh": "将真核细胞分隔成膜包被区室的主要优势是什么？"
              },
              "choices": [
                "It allows incompatible reactions to occur simultaneously in separate, specialized environments",
                "It prevents the cell from ever needing energy",
                "It makes the cell smaller than a prokaryote",
                "It removes the need for a plasma membrane"
              ],
              "answer": 0,
              "explanation": {
                "en": "Compartments create distinct microenvironments (pH, enzymes, ion concentrations) so many different—even incompatible—reactions run at once, boosting efficiency. It does not eliminate energy needs or the plasma membrane.",
                "zh": "区室创造出各异的微环境（pH、酶、离子浓度），使许多不同——甚至互不相容——的反应同时进行，提高效率。它并不消除能量需求或质膜。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why is it advantageous for lysosomal hydrolytic enzymes to be enclosed in a membrane?",
                "zh": "为什么将溶酶体的水解酶包裹在膜内是有利的？"
              },
              "choices": [
                "The enzymes work faster in the cytosol",
                "It allows the enzymes to diffuse freely through the cell",
                "The membrane provides the enzymes with ATP",
                "The acidic, digestive enzymes are contained so they do not destroy the rest of the cell"
              ],
              "answer": 3,
              "explanation": {
                "en": "Lysosomes keep destructive, acid-optimal hydrolases contained; releasing them into the neutral cytosol would digest the cell. Containment is the whole point of the compartment.",
                "zh": "溶酶体将破坏性的、在酸性下最适的水解酶隔离起来；将其释放到中性的细胞质中会消化细胞。隔离正是该区室的意义所在。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The nuclear envelope and endomembrane system are thought to have originated by",
                "zh": "核膜和内膜系统一般认为起源于"
              },
              "choices": [
                "Engulfment of a photosynthetic bacterium",
                "Engulfment of an aerobic bacterium",
                "Fusion of two mitochondria",
                "Infolding of the plasma membrane of an ancestral prokaryote"
              ],
              "answer": 3,
              "explanation": {
                "en": "Internal membranes like the nuclear envelope and ER are explained by infolding of the ancestral plasma membrane. Only mitochondria and chloroplasts—with their own DNA—are attributed to endosymbiotic engulfment.",
                "zh": "像核膜和内质网这样的内膜由祖先质膜的内陷来解释。只有拥有自身 DNA 的线粒体和叶绿体才归因于内共生吞入。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which piece of evidence would NOT be used to support the endosymbiotic origin of mitochondria?",
                "zh": "下列哪项证据不会用来支持线粒体的内共生起源？"
              },
              "choices": [
                "Mitochondria have their own circular DNA",
                "Mitochondria divide by binary fission",
                "Mitochondria are surrounded by a double membrane",
                "Mitochondria are found only in animal cells"
              ],
              "answer": 3,
              "explanation": {
                "en": "Mitochondria occur in nearly all eukaryotes (including plants and fungi), so that statement is false and not evidence. Own DNA, binary fission, and a double membrane are all classic endosymbiotic evidence.",
                "zh": "线粒体存在于几乎所有真核生物（包括植物和真菌）中，故该陈述是错误的，也不是证据。自身 DNA、二分裂和双层膜都是经典的内共生证据。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The cristae of mitochondria and the thylakoids of chloroplasts are similar in that both",
                "zh": "线粒体的嵴与叶绿体的类囊体的相似之处在于两者都"
              },
              "choices": [
                "Are folded internal membranes that increase surface area for reactions",
                "Contain the cell’s main supply of DNA",
                "Are found in prokaryotic cells",
                "Perform protein digestion"
              ],
              "answer": 0,
              "explanation": {
                "en": "Both are highly folded internal membranes that pack large surface area into a small volume, providing room for the membrane-bound reactions of respiration and photosynthesis respectively.",
                "zh": "两者都是高度折叠的内膜，将大表面积压缩进小体积中，分别为呼吸作用和光合作用的膜上反应提供空间。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Mitochondria and chloroplasts contain ribosomes of the prokaryotic type. What is the S-value (number) of these ribosomes? Give the number.",
                "zh": "线粒体和叶绿体含有原核型核糖体。这些核糖体的 S 值（数字）是多少？给出数字。"
              },
              "answer": "70",
              "accept": [
                "70s"
              ],
              "explanation": {
                "en": "They use 70S ribosomes—the same size found in bacteria—rather than the 80S ribosomes of the eukaryotic cytosol, evidence of their prokaryotic ancestry.",
                "zh": "它们使用 70S 核糖体——与细菌中相同的大小——而非真核细胞质的 80S 核糖体，这是其原核起源的证据。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What process, involving one cell engulfing a free-living prokaryote that becomes an organelle, explains the origin of mitochondria? Give the term.",
                "zh": "一个细胞吞入自由生活的原核生物并使其成为细胞器，从而解释线粒体起源的过程叫什么？给出术语。"
              },
              "answer": "endosymbiosis",
              "accept": [
                "endosymbiotic theory",
                "endosymbiotic",
                "内共生"
              ],
              "explanation": {
                "en": "Endosymbiosis (the endosymbiotic theory) proposes that mitochondria and chloroplasts descended from prokaryotes engulfed by an ancestral host cell.",
                "zh": "内共生（内共生学说）认为线粒体和叶绿体起源于被祖先宿主细胞吞入的原核生物。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many membranes surround a chloroplast, consistent with its endosymbiotic origin? Give a number.",
                "zh": "叶绿体被几层膜包围（与其内共生起源相符）？给出数字。"
              },
              "answer": "2",
              "accept": [
                "two",
                "double"
              ],
              "explanation": {
                "en": "A chloroplast has a double membrane: the inner from the original photosynthetic prokaryote and the outer from the host membrane during engulfment.",
                "zh": "叶绿体有双层膜：内膜源自原来的光合原核生物，外膜源自吞入时宿主的膜。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-cellular-energetics",
      "title": "Unit 3: Cellular Energetics",
      "titleZh": "第三单元：细胞能量学",
      "lessons": [
        {
          "id": "enzymes-and-energy",
          "title": "Enzymes and Energy",
          "titleZh": "酶与能量",
          "content": [
            {
              "type": "h2",
              "en": "Energy Flow in Living Systems",
              "zh": "生命系统中的能量流动"
            },
            {
              "type": "p",
              "en": "Every process a cell carries out—building macromolecules, pumping ions, contracting muscle—requires energy. The laws of thermodynamics govern this energy just as they govern a car engine or a star. The first law says energy is conserved; the second law says every energy transfer increases the entropy (disorder) of the universe. Living things do not violate the second law: they stay ordered only by continuously taking in usable energy and releasing heat and disorder to their surroundings.",
              "zh": "细胞进行的每一个过程——合成大分子、泵运离子、肌肉收缩——都需要能量。热力学定律支配着这些能量，就像它支配汽车发动机或恒星一样。热力学第一定律指出能量守恒；第二定律指出每一次能量转移都会增加宇宙的熵（无序度）。生物并不违反第二定律：它们只是通过不断摄取可利用的能量、并向周围环境释放热量和无序度来维持有序。"
            },
            {
              "type": "h3",
              "en": "Gibbs Free Energy: Exergonic vs. Endergonic",
              "zh": "吉布斯自由能：放能反应与吸能反应"
            },
            {
              "type": "p",
              "en": "Gibbs free energy ($G$) measures the energy in a system available to do work. The sign of the change in free energy, $\\Delta G$, tells us whether a reaction happens spontaneously. An exergonic reaction releases free energy ($\\Delta G < 0$) and proceeds spontaneously (like a ball rolling downhill). An endergonic reaction absorbs free energy ($\\Delta G > 0$) and is not spontaneous—it requires an input of energy to proceed (like pushing a ball uphill).",
              "zh": "吉布斯自由能（$G$，Gibbs free energy）衡量系统中可用于做功的能量。自由能变化 $\\Delta G$ 的符号告诉我们反应是否自发进行。放能反应（exergonic）释放自由能（$\\Delta G < 0$），会自发进行（如球滚下坡）。吸能反应（endergonic）吸收自由能（$\\Delta G > 0$），不会自发进行——需要输入能量才能推进（如把球推上坡）。"
            },
            {
              "type": "math",
              "tex": "\\Delta G < 0 \\;\\Rightarrow\\; \\text{spontaneous (exergonic)} \\qquad \\Delta G > 0 \\;\\Rightarrow\\; \\text{nonspontaneous (endergonic)}"
            },
            {
              "type": "note",
              "en": "AP tip: A negative $\\Delta G$ means spontaneous, NOT fast. Spontaneity is about direction, not rate. The combustion of glucose has a large negative $\\Delta G$, yet a sugar cube sits unchanged on the table for years because the reaction is slow. Enzymes change the rate, never the $\\Delta G$.",
              "zh": "AP 提示：$\\Delta G$ 为负表示自发，而不是快速。自发性关乎方向，而非速率。葡萄糖燃烧的 $\\Delta G$ 是很大的负值，但方糖能在桌上多年不变，因为反应很慢。酶改变的是速率，绝不改变 $\\Delta G$。"
            },
            {
              "type": "h3",
              "en": "ATP: The Cell’s Energy Currency",
              "zh": "ATP：细胞的能量货币"
            },
            {
              "type": "p",
              "en": "Cells power endergonic reactions using ATP (adenosine triphosphate). ATP stores energy in the bonds linking its three phosphate groups. Hydrolysis of the terminal phosphate bond—converting ATP to ADP (adenosine diphosphate) plus inorganic phosphate ($\\text{P}_i$)—is exergonic and releases usable energy. The cell then regenerates ATP from ADP using energy harvested from food, cycling ATP tens of thousands of times per day.",
              "zh": "细胞利用 ATP（三磷酸腺苷，adenosine triphosphate）为吸能反应供能。ATP 将能量储存在连接其三个磷酸基团的化学键中。末端磷酸键的水解——将 ATP 转变为 ADP（二磷酸腺苷）加无机磷酸（$\\text{P}_i$）——是放能过程，会释放可利用的能量。随后细胞利用从食物中获取的能量将 ADP 重新合成为 ATP，每天循环利用 ATP 数万次。"
            },
            {
              "type": "p",
              "en": "The key idea is energy coupling: the cell links an exergonic reaction (ATP hydrolysis) to an endergonic one so that the two together have a net negative $\\Delta G$ and proceed spontaneously. For example, the endergonic synthesis of glutamine from glutamate is driven by coupling it to ATP hydrolysis.",
              "zh": "关键概念是能量偶联（energy coupling）：细胞将放能反应（ATP 水解）与吸能反应联系起来，使两者合起来的净 $\\Delta G$ 为负，从而自发进行。例如，由谷氨酸合成谷氨酰胺是吸能的，通过与 ATP 水解偶联来驱动。"
            },
            {
              "type": "h2",
              "en": "Enzymes: Biological Catalysts",
              "zh": "酶：生物催化剂"
            },
            {
              "type": "p",
              "en": "A catalyst speeds up a reaction without being consumed by it. Enzymes are biological catalysts, almost always proteins (a few are RNA, called ribozymes). Every reaction must first pass through a high-energy transition state; the energy needed to reach it is the activation energy ($E_A$). Enzymes work by lowering the activation energy, so that far more reactant molecules have enough energy to react at body temperature. Crucially, enzymes do not change $\\Delta G$—they change only how fast equilibrium is reached.",
              "zh": "催化剂能加快反应而自身不被消耗。酶是生物催化剂，几乎都是蛋白质（少数是 RNA，称为核酶 ribozyme）。每个反应都必须先经过高能的过渡态；到达过渡态所需的能量就是活化能（$E_A$，activation energy）。酶通过降低活化能起作用，使在体温下有远多得多的反应物分子具备足够能量去反应。关键在于：酶不改变 $\\Delta G$——只改变达到平衡的快慢。"
            },
            {
              "type": "h3",
              "en": "Active Site, Substrate, and Induced Fit",
              "zh": "活性位点、底物与诱导契合"
            },
            {
              "type": "p",
              "en": "The reactant an enzyme acts on is its substrate. Each enzyme has an active site—a pocket whose shape and chemistry are complementary to a specific substrate, giving enzymes their specificity. The older “lock-and-key” picture is refined by the induced-fit model: when the substrate binds, the enzyme changes shape slightly to grip the substrate more snugly, straining bonds and positioning reactive groups to help the reaction along.",
              "zh": "酶所作用的反应物是它的底物（substrate）。每种酶都有一个活性位点（active site）——一个形状和化学性质与特定底物互补的凹槽，这赋予了酶专一性（specificity）。较早的「锁钥模型」被诱导契合模型（induced fit）所完善：底物结合时，酶会略微改变形状以更紧密地贴合底物，使化学键产生张力并将活性基团摆到有利位置，从而促进反应。"
            },
            {
              "type": "h3",
              "en": "Factors Affecting Enzyme Activity",
              "zh": "影响酶活性的因素"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Temperature: Reaction rate rises with temperature up to an optimum, as molecules collide more often. Above the optimum, the enzyme denatures—its 3-D shape unravels and activity crashes.",
                  "zh": "温度：在最适温度以下，随温度升高分子碰撞更频繁，反应速率上升。超过最适温度后，酶会变性（denature）——其三维结构解体，活性骤降。"
                },
                {
                  "en": "pH: Each enzyme has an optimal pH (pepsin in the stomach works best near pH 2; trypsin in the intestine near pH 8). Extreme pH disrupts hydrogen and ionic bonds and denatures the enzyme.",
                  "zh": "pH：每种酶都有最适 pH（胃中的胃蛋白酶在 pH 2 附近最活跃；肠中的胰蛋白酶在 pH 8 附近）。极端 pH 会破坏氢键和离子键，使酶变性。"
                },
                {
                  "en": "Substrate and enzyme concentration: More substrate raises rate until all active sites are occupied (saturation); adding more enzyme raises the maximum rate.",
                  "zh": "底物与酶的浓度：增加底物会提高速率，直到所有活性位点都被占满（饱和）；增加酶则提高最大速率。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Inhibition and Allosteric Regulation",
              "zh": "抑制作用与变构调节"
            },
            {
              "type": "p",
              "en": "A competitive inhibitor resembles the substrate and blocks the active site directly; because it competes, adding excess substrate can outcompete it and restore activity. A noncompetitive inhibitor binds a different site (an allosteric site), changing the enzyme’s shape so the active site no longer works; adding substrate cannot overcome it. Allosteric regulation more broadly lets a molecule bind away from the active site to switch an enzyme on or off. A common example is feedback inhibition, where the final product of a pathway inhibits an early enzyme, preventing the cell from overproducing.",
              "zh": "竞争性抑制剂（competitive inhibitor）与底物相似，直接堵住活性位点；由于它是在竞争，加入过量底物可以把它比下去、恢复活性。非竞争性抑制剂（noncompetitive inhibitor）结合在别处（变构位点 allosteric site），改变酶的形状使活性位点失效；加底物无法克服。更广义的变构调节（allosteric regulation）指某分子结合在活性位点之外，从而开启或关闭酶。常见例子是反馈抑制（feedback inhibition）：通路的终产物抑制前面的某个酶，防止细胞过量生产。"
            },
            {
              "type": "note",
              "en": "AP tip: To tell competitive from noncompetitive inhibition on a graph, ask whether adding excess substrate restores the normal maximum rate. If high substrate overcomes the inhibitor, it is competitive; if the maximum rate stays depressed no matter how much substrate you add, it is noncompetitive.",
              "zh": "AP 提示：要在图上区分竞争性与非竞争性抑制，就问：加入过量底物能否恢复正常的最大速率。如果高底物浓度能克服抑制剂，就是竞争性；如果无论加多少底物最大速率都被压低，就是非竞争性。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Interpreting an Inhibition Experiment",
                "zh": "例题：解读抑制实验"
              },
              "problem": {
                "en": "An enzyme is assayed alone and then with substance X added. With X present, the reaction rate is lower at every substrate concentration, but at very high substrate the rate climbs back to the same maximum reached without X. Is X a competitive or noncompetitive inhibitor?",
                "zh": "先单独测定某酶的活性，再加入物质 X 测定。加入 X 后，在每一个底物浓度下反应速率都更低，但在极高底物浓度下速率又回升到没有 X 时的同一最大值。X 是竞争性还是非竞争性抑制剂？"
              },
              "solution": [
                {
                  "en": "Because a large excess of substrate restores the original maximum rate, the substrate is out-competing X for the active site. Only competitive inhibitors can be overwhelmed this way—they bind the same site as the substrate.",
                  "zh": "因为大量过量底物恢复了原来的最大速率，说明底物在活性位点上把 X 竞争了下去。只有竞争性抑制剂才能被这样压制——它们与底物结合在同一位点。",
                  "type": "p"
                },
                {
                  "en": "Therefore X is a competitive inhibitor. A noncompetitive inhibitor would depress the maximum rate no matter how much substrate is added, because it distorts the active site from a separate allosteric site.",
                  "zh": "因此 X 是竞争性抑制剂。非竞争性抑制剂无论加多少底物都会压低最大速率，因为它从另一个变构位点扭曲了活性位点。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A reaction has $\\Delta G = -30\\ \\text{kJ/mol}$. Which statement is correct?",
                "zh": "某反应的 $\\Delta G = -30\\ \\text{kJ/mol}$。哪项说法正确？"
              },
              "choices": [
                "It is endergonic and requires energy input",
                "It absorbs free energy from the surroundings",
                "It cannot occur without an enzyme lowering $\\Delta G$",
                "It is exergonic and can proceed spontaneously"
              ],
              "answer": 3,
              "explanation": {
                "en": "A negative $\\Delta G$ means the reaction releases free energy (exergonic) and is spontaneous in the direction written. Enzymes speed such reactions but never change $\\Delta G$.",
                "zh": "$\\Delta G$ 为负表示反应释放自由能（放能）并沿所写方向自发进行。酶能加快这类反应，但绝不改变 $\\Delta G$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How does an enzyme increase the rate of a reaction?",
                "zh": "酶如何提高反应速率？"
              },
              "choices": [
                "By making the reaction more exergonic (more negative $\\Delta G$)",
                "By raising the temperature of the cell",
                "By being consumed as a reactant in the reaction",
                "By lowering the activation energy of the reaction"
              ],
              "answer": 3,
              "explanation": {
                "en": "Enzymes lower the activation energy ($E_A$), so more molecules can reach the transition state at body temperature. They do not change $\\Delta G$ and are not consumed.",
                "zh": "酶降低活化能（$E_A$），使更多分子能在体温下到达过渡态。它们不改变 $\\Delta G$，也不被消耗。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The final product of a metabolic pathway binds an allosteric site on the first enzyme of the pathway, shutting it down. This is an example of:",
                "zh": "某代谢通路的终产物结合到该通路第一个酶的变构位点上，将其关闭。这是哪种现象的例子？"
              },
              "choices": [
                "Feedback inhibition",
                "Competitive inhibition by the substrate",
                "Denaturation",
                "Energy coupling"
              ],
              "answer": 0,
              "explanation": {
                "en": "When a pathway’s end product inhibits an upstream enzyme, that is feedback (end-product) inhibition, a form of allosteric regulation that prevents overproduction.",
                "zh": "当通路的终产物抑制上游的某个酶时，这就是反馈（终产物）抑制，是一种变构调节，可防止过量生产。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An enzyme from the human stomach loses all activity when placed at pH 8. The most likely reason is that at pH 8 the enzyme:",
                "zh": "一种来自人胃的酶在 pH 8 时完全失去活性。最可能的原因是在 pH 8 时该酶："
              },
              "choices": [
                "Has a more negative $\\Delta G$",
                "Binds substrate too tightly to release product",
                "Runs out of ATP",
                "Is denatured, disrupting the shape of its active site"
              ],
              "answer": 3,
              "explanation": {
                "en": "A stomach enzyme is adapted to low pH (near 2). Far from its optimum, extreme pH disrupts hydrogen and ionic bonds, denaturing the protein so the active site loses its functional shape.",
                "zh": "胃酶适应低 pH（约 2）。远离其最适值时，极端 pH 会破坏氢键和离子键，使蛋白质变性，活性位点失去功能性形状。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which best describes the induced-fit model of enzyme action?",
                "zh": "下列哪项最能描述酶作用的诱导契合模型？"
              },
              "choices": [
                "The active site is a rigid shape that exactly matches only one substrate",
                "The substrate changes its own shape to fit any enzyme",
                "The enzyme is permanently altered and cannot be reused",
                "The enzyme changes shape slightly upon substrate binding to grip it and strain its bonds"
              ],
              "answer": 3,
              "explanation": {
                "en": "Induced fit refines the rigid lock-and-key idea: substrate binding causes the enzyme to adjust its shape, clamping the substrate and straining bonds to promote the reaction. The enzyme returns to its original form afterward.",
                "zh": "诱导契合完善了刚性的锁钥模型：底物结合使酶调整形状，夹紧底物并使化学键产生张力以促进反应。反应后酶恢复原状。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "When ATP is hydrolyzed to power a reaction, the terminal phosphate is removed, leaving a molecule abbreviated with three letters. What is that molecule’s abbreviation? (Give the abbreviation.)",
                "zh": "ATP 水解为反应供能时，末端磷酸被移除，剩下一个用三个字母缩写的分子。该分子的缩写是什么？（给出缩写。）"
              },
              "answer": "adp",
              "accept": [
                "adp",
                "ADP"
              ],
              "explanation": {
                "en": "Removing one phosphate from ATP (adenosine triphosphate) yields ADP (adenosine diphosphate) plus inorganic phosphate; this hydrolysis is exergonic.",
                "zh": "从 ATP（三磷酸腺苷）移除一个磷酸得到 ADP（二磷酸腺苷）加无机磷酸；此水解是放能的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cell couples an endergonic reaction ($\\Delta G = +12\\ \\text{kJ/mol}$) to ATP hydrolysis ($\\Delta G = -30\\ \\text{kJ/mol}$). What is the net $\\Delta G$ of the coupled process, in kJ/mol? (Give a signed number.)",
                "zh": "某细胞将一个吸能反应（$\\Delta G = +12\\ \\text{kJ/mol}$）与 ATP 水解（$\\Delta G = -30\\ \\text{kJ/mol}$）偶联。偶联过程的净 $\\Delta G$ 是多少 kJ/mol？（给出带符号的数字。）"
              },
              "answer": "-18",
              "accept": [
                "-18",
                "−18",
                "-18.0"
              ],
              "explanation": {
                "en": "Add the free-energy changes: $+12 + (-30) = -18\\ \\text{kJ/mol}$. The net negative value means the coupled process is now spontaneous.",
                "zh": "将自由能变化相加：$+12 + (-30) = -18\\ \\text{kJ/mol}$。净值为负，说明偶联过程现在是自发的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An inhibitor binds the same active site as the substrate and can be overcome by adding excess substrate. What one-word term (an adjective) names this type of inhibitor?",
                "zh": "某抑制剂结合在与底物相同的活性位点上，并可通过加入过量底物来克服。用一个词（形容词）说出这种抑制剂的类型。"
              },
              "answer": "competitive",
              "accept": [
                "competitive",
                "竞争性",
                "竞争"
              ],
              "explanation": {
                "en": "A competitive inhibitor competes with the substrate for the active site, so raising substrate concentration restores the maximum rate.",
                "zh": "竞争性抑制剂与底物争夺活性位点，因此提高底物浓度可恢复最大速率。"
              }
            }
          ]
        },
        {
          "id": "cellular-respiration",
          "title": "Cellular Respiration",
          "titleZh": "细胞呼吸",
          "content": [
            {
              "type": "h2",
              "en": "Harvesting Energy from Glucose",
              "zh": "从葡萄糖中获取能量"
            },
            {
              "type": "p",
              "en": "Cellular respiration is the controlled, stepwise oxidation of glucose that transfers its stored energy into ATP. Rather than burning glucose in one explosive step, the cell releases the energy gradually through many enzyme-catalyzed reactions, capturing much of it as ATP and the rest as heat. Overall, glucose and oxygen are consumed while carbon dioxide, water, and energy are produced.",
              "zh": "细胞呼吸（cellular respiration）是对葡萄糖进行受控、分步的氧化，将其储存的能量转移到 ATP 中。细胞不是一步爆炸式地燃烧葡萄糖，而是通过许多酶催化的反应逐步释放能量，把大部分能量捕获为 ATP，其余成为热量。总体上，消耗葡萄糖和氧气，生成二氧化碳、水和能量。"
            },
            {
              "type": "math",
              "tex": "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2 \\rightarrow 6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + \\text{energy (ATP + heat)}"
            },
            {
              "type": "p",
              "en": "This is a redox process. Glucose is oxidized (loses electrons and hydrogens) and oxygen is reduced (gains them, becoming water). The electrons are not moved directly; they are carried by the coenzymes NAD⁺ and FAD, which are reduced to NADH and FADH₂ and later deliver their high-energy electrons to the electron transport chain.",
              "zh": "这是一个氧化还原过程。葡萄糖被氧化（失去电子和氢），氧气被还原（获得电子和氢，变成水）。电子并不直接转移，而是由辅酶 NAD⁺ 和 FAD 携带，它们被还原为 NADH 和 FADH₂，随后把高能电子送到电子传递链。"
            },
            {
              "type": "note",
              "en": "AP tip: Remember redox with “OIL RIG”—Oxidation Is Loss of electrons, Reduction Is Gain. NADH and FADH₂ are the reduced, electron-rich carriers; NAD⁺ and FAD are their oxidized forms. The energy is in the electrons they carry, not in ATP being made directly at this stage.",
              "zh": "AP 提示：用「OIL RIG」记氧化还原——Oxidation Is Loss（氧化即失电子），Reduction Is Gain（还原即得电子）。NADH 和 FADH₂ 是被还原的、富含电子的载体；NAD⁺ 和 FAD 是它们的氧化形式。能量在它们携带的电子中，而不是在此阶段直接生成的 ATP 中。"
            },
            {
              "type": "h2",
              "en": "Stage 1: Glycolysis",
              "zh": "第一阶段：糖酵解"
            },
            {
              "type": "p",
              "en": "Glycolysis occurs in the cytoplasm and does not require oxygen. One six-carbon glucose molecule is split into two three-carbon pyruvate molecules. The cell first invests 2 ATP to energize glucose, then harvests 4 ATP and 2 NADH, for a net gain of 2 ATP and 2 NADH per glucose. Because it needs no oxygen or mitochondria, glycolysis is thought to be evolutionarily ancient and is universal across life.",
              "zh": "糖酵解（glycolysis）发生在细胞质中，不需要氧气。一个六碳的葡萄糖分子被裂解为两个三碳的丙酮酸（pyruvate）分子。细胞先投入 2 个 ATP 来活化葡萄糖，再收获 4 个 ATP 和 2 个 NADH，每个葡萄糖净得 2 个 ATP 和 2 个 NADH。由于不需要氧气或线粒体，糖酵解被认为在进化上非常古老，且普遍存在于所有生命中。"
            },
            {
              "type": "h2",
              "en": "Stage 2: Pyruvate Oxidation",
              "zh": "第二阶段：丙酮酸氧化"
            },
            {
              "type": "p",
              "en": "If oxygen is present, each pyruvate moves into the mitochondrial matrix and is oxidized. One carbon is removed as $\\text{CO}_2$, NAD⁺ is reduced to NADH, and the remaining two-carbon fragment attaches to coenzyme A to form acetyl-CoA. This is the bridge between glycolysis and the Krebs cycle. Per glucose (two pyruvates) it yields 2 $\\text{CO}_2$ and 2 NADH.",
              "zh": "若有氧气，每个丙酮酸进入线粒体基质并被氧化。一个碳以 $\\text{CO}_2$ 形式被移除，NAD⁺ 被还原为 NADH，剩下的两碳片段与辅酶 A 结合形成乙酰辅酶 A（acetyl-CoA）。这是糖酵解与克雷布斯循环之间的桥梁。每个葡萄糖（两个丙酮酸）产生 2 个 $\\text{CO}_2$ 和 2 个 NADH。"
            },
            {
              "type": "h2",
              "en": "Stage 3: The Krebs (Citric Acid) Cycle",
              "zh": "第三阶段：克雷布斯（柠檬酸）循环"
            },
            {
              "type": "p",
              "en": "The Krebs cycle also runs in the mitochondrial matrix. Acetyl-CoA (2 carbons) combines with oxaloacetate (4 carbons) to form citrate (6 carbons). As the cycle turns, the two carbons are released as $\\text{CO}_2$, and electrons are captured in NADH and FADH₂ while a small amount of ATP is made directly. Per acetyl-CoA the cycle yields 2 $\\text{CO}_2$, 3 NADH, 1 FADH₂, and 1 ATP; since each glucose provides two acetyl-CoA, double these numbers per glucose.",
              "zh": "克雷布斯循环也在线粒体基质中进行。乙酰辅酶 A（2 个碳）与草酰乙酸（4 个碳）结合形成柠檬酸（6 个碳）。随着循环转动，这两个碳以 $\\text{CO}_2$ 形式释放，电子被捕获到 NADH 和 FADH₂ 中，同时直接生成少量 ATP。每个乙酰辅酶 A 循环产生 2 个 $\\text{CO}_2$、3 个 NADH、1 个 FADH₂ 和 1 个 ATP；由于每个葡萄糖提供两个乙酰辅酶 A，每个葡萄糖将这些数字翻倍。"
            },
            {
              "type": "note",
              "en": "AP tip: All six carbons of glucose leave as $\\text{CO}_2$ before the electron transport chain even begins—2 in pyruvate oxidation and 4 in the two turns of the Krebs cycle. By the end of the Krebs cycle, glucose is fully oxidized; the ATP payoff still lies ahead in oxidative phosphorylation.",
              "zh": "AP 提示：葡萄糖的全部六个碳在电子传递链开始之前就已经以 $\\text{CO}_2$ 形式离开——丙酮酸氧化中 2 个，克雷布斯循环两次转动中 4 个。到克雷布斯循环结束时，葡萄糖已被完全氧化；ATP 的丰厚回报还在后面的氧化磷酸化中。"
            },
            {
              "type": "h2",
              "en": "Stage 4: Oxidative Phosphorylation",
              "zh": "第四阶段：氧化磷酸化"
            },
            {
              "type": "p",
              "en": "This final stage produces the vast majority of ATP and has two parts, both at the inner mitochondrial membrane. In the electron transport chain (ETC), NADH and FADH₂ drop off their high-energy electrons, which pass down a series of protein complexes. The energy released is used to pump protons ($\\text{H}^+$) from the matrix into the intermembrane space, building a concentration gradient.",
              "zh": "这一最后阶段生成绝大部分 ATP，包含两个部分，都发生在线粒体内膜上。在电子传递链（electron transport chain, ETC）中，NADH 和 FADH₂ 交出它们的高能电子，电子沿一系列蛋白复合物依次传递。释放的能量被用来把质子（$\\text{H}^+$）从基质泵入膜间隙，建立浓度梯度。"
            },
            {
              "type": "p",
              "en": "In chemiosmosis, protons flow back down their gradient through the enzyme ATP synthase, which spins like a turbine and phosphorylates ADP into ATP. Oxygen serves as the final electron acceptor at the end of the chain, combining with electrons and protons to form water. Without oxygen the chain backs up, the whole aerobic pathway stalls, and NAD⁺ cannot be regenerated.",
              "zh": "在化学渗透（chemiosmosis）中，质子沿梯度经酶 ATP 合酶（ATP synthase）流回，ATP 合酶像涡轮一样旋转，将 ADP 磷酸化为 ATP。氧气作为链末端的最终电子受体，与电子和质子结合生成水。没有氧气，电子链就会堵塞，整个有氧途径停滞，NAD⁺ 也无法再生。"
            },
            {
              "type": "h3",
              "en": "Total ATP Yield",
              "zh": "总 ATP 产量"
            },
            {
              "type": "p",
              "en": "The complete aerobic oxidation of one glucose yields a theoretical maximum of about 30–32 ATP: roughly 2 (net) from glycolysis, 2 from the Krebs cycle (as GTP/ATP), and the large remainder from oxidative phosphorylation. Older textbooks quote 36–38; the modern estimate is lower because moving electrons and ATP across membranes has costs.",
              "zh": "一个葡萄糖完全有氧氧化的理论最大产量约为 30–32 个 ATP：糖酵解约 2 个（净），克雷布斯循环 2 个（以 GTP/ATP 形式），其余大部分来自氧化磷酸化。旧教材给出 36–38 个；现代估计更低，因为跨膜转运电子和 ATP 有能量代价。"
            },
            {
              "type": "h2",
              "en": "Anaerobic Respiration and Fermentation",
              "zh": "无氧呼吸与发酵"
            },
            {
              "type": "p",
              "en": "When oxygen is absent, the ETC cannot run and NADH piles up. Fermentation solves this by regenerating NAD⁺ so glycolysis can keep producing its small net 2 ATP. In lactic acid fermentation (in human muscle and many bacteria), pyruvate accepts electrons from NADH and becomes lactate. In alcoholic fermentation (in yeast), pyruvate releases $\\text{CO}_2$ and is converted to ethanol. Neither pathway makes additional ATP beyond glycolysis; their sole payoff is recycling NAD⁺.",
              "zh": "缺氧时，电子传递链无法运行，NADH 堆积。发酵（fermentation）通过再生 NAD⁺ 来解决这一问题，使糖酵解能继续产生其少量净 2 个 ATP。在乳酸发酵（lactic acid fermentation，见于人体肌肉和许多细菌）中，丙酮酸接受来自 NADH 的电子变成乳酸。在酒精发酵（alcoholic fermentation，见于酵母）中，丙酮酸释放 $\\text{CO}_2$ 并转化为乙醇。这两条途径除糖酵解外都不产生额外 ATP；其唯一作用是循环再生 NAD⁺。"
            },
            {
              "type": "note",
              "en": "AP tip: The purpose of fermentation is NOT to make ATP—it makes none beyond glycolysis. Its purpose is to oxidize NADH back to NAD⁺ so glycolysis can continue producing ATP when oxygen is unavailable. This is a classic distractor on the exam.",
              "zh": "AP 提示：发酵的目的不是产生 ATP——除糖酵解外它不产生任何 ATP。其目的是把 NADH 氧化回 NAD⁺，使糖酵解在缺氧时能继续产生 ATP。这是考试中经典的干扰项。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Tracking Carbon and Location",
                "zh": "例题：追踪碳与场所"
              },
              "problem": {
                "en": "A researcher feeds a cell glucose labeled with radioactive carbon. In which stages of aerobic respiration will the labeled carbon be released as $\\text{CO}_2$, and where in the cell do those stages occur?",
                "zh": "研究者给细胞投喂用放射性碳标记的葡萄糖。在有氧呼吸的哪些阶段被标记的碳会以 $\\text{CO}_2$ 形式释放，这些阶段发生在细胞何处？"
              },
              "solution": [
                {
                  "en": "Glycolysis (in the cytoplasm) splits glucose but releases no $\\text{CO}_2$. The first $\\text{CO}_2$ appears during pyruvate oxidation, and the rest during the Krebs cycle—both in the mitochondrial matrix.",
                  "zh": "糖酵解（在细胞质中）裂解葡萄糖但不释放 $\\text{CO}_2$。第一批 $\\text{CO}_2$ 出现在丙酮酸氧化阶段，其余出现在克雷布斯循环——两者都在线粒体基质中。",
                  "type": "p"
                },
                {
                  "en": "All six carbons of glucose exit as $\\text{CO}_2$: 2 during pyruvate oxidation and 4 during the two turns of the Krebs cycle. The electron transport chain releases no $\\text{CO}_2$; its product is water.",
                  "zh": "葡萄糖的全部六个碳都以 $\\text{CO}_2$ 形式排出：丙酮酸氧化中 2 个，克雷布斯循环两次转动中 4 个。电子传递链不释放 $\\text{CO}_2$；其产物是水。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In eukaryotic cells, where does glycolysis take place?",
                "zh": "在真核细胞中，糖酵解发生在何处？"
              },
              "choices": [
                "The mitochondrial matrix",
                "The inner mitochondrial membrane",
                "The nucleus",
                "The cytoplasm (cytosol)"
              ],
              "answer": 3,
              "explanation": {
                "en": "Glycolysis occurs in the cytoplasm and requires no oxygen or mitochondria, which is why even organisms without mitochondria can perform it.",
                "zh": "糖酵解发生在细胞质中，不需要氧气或线粒体，这也是为什么没有线粒体的生物也能进行糖酵解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the direct role of oxygen in cellular respiration?",
                "zh": "氧气在细胞呼吸中的直接作用是什么？"
              },
              "choices": [
                "It is split to provide electrons for the Krebs cycle",
                "It is a reactant in glycolysis",
                "It phosphorylates ADP into ATP",
                "It is the final electron acceptor at the end of the electron transport chain"
              ],
              "answer": 3,
              "explanation": {
                "en": "Oxygen accepts electrons at the end of the ETC and combines with protons to form water. Without it, the chain backs up and aerobic ATP production halts.",
                "zh": "氧气在电子传递链末端接受电子，并与质子结合生成水。没有氧气，电子链就会堵塞，有氧 ATP 生成停止。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The enzyme ATP synthase makes ATP by using the energy of:",
                "zh": "ATP 合酶利用什么的能量来制造 ATP？"
              },
              "choices": [
                "Protons flowing down their concentration gradient across the membrane",
                "Direct oxidation of glucose in the cytoplasm",
                "$\\text{CO}_2$ diffusing out of the matrix",
                "Sunlight absorbed by pigments"
              ],
              "answer": 0,
              "explanation": {
                "en": "In chemiosmosis, the ETC pumps $\\text{H}^+$ into the intermembrane space; those protons flow back through ATP synthase, whose rotation drives ATP formation.",
                "zh": "在化学渗透中，电子传递链把 $\\text{H}^+$ 泵入膜间隙；这些质子经 ATP 合酶流回，其旋转驱动 ATP 的生成。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the main purpose of lactic acid fermentation in a working muscle cell deprived of oxygen?",
                "zh": "缺氧的工作肌细胞中，乳酸发酵的主要目的是什么？"
              },
              "choices": [
                "To produce large amounts of ATP directly",
                "To pump protons across the mitochondrial membrane",
                "To synthesize glucose from lactate",
                "To regenerate NAD⁺ so glycolysis can continue"
              ],
              "answer": 3,
              "explanation": {
                "en": "Fermentation makes no ATP beyond glycolysis. Its role is to oxidize NADH back to NAD⁺ so that glycolysis can keep producing its net 2 ATP without oxygen.",
                "zh": "发酵除糖酵解外不产生 ATP。它的作用是把 NADH 氧化回 NAD⁺，使糖酵解在缺氧时仍能继续产生其净 2 个 ATP。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "During the Krebs cycle and pyruvate oxidation, the carbon atoms of glucose are ultimately released as:",
                "zh": "在克雷布斯循环和丙酮酸氧化过程中，葡萄糖的碳原子最终以什么形式释放？"
              },
              "choices": [
                "Lactate",
                "Ethanol",
                "Carbon dioxide ($\\text{CO}_2$)",
                "Water ($\\text{H}_2\\text{O}$)"
              ],
              "answer": 2,
              "explanation": {
                "en": "Decarboxylation reactions in pyruvate oxidation (2 C) and the Krebs cycle (4 C) release all six glucose carbons as $\\text{CO}_2$. Water is produced later, in the ETC.",
                "zh": "丙酮酸氧化（2 个碳）和克雷布斯循环（4 个碳）中的脱羧反应把葡萄糖的全部六个碳以 $\\text{CO}_2$ 形式释放。水在稍后的电子传递链中生成。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the NET number of ATP molecules produced directly by glycolysis per glucose? (Give a number.)",
                "zh": "每个葡萄糖经糖酵解直接产生的 ATP 净数是多少？（给出数字。）"
              },
              "answer": "2",
              "accept": [
                "2",
                "two",
                "两个"
              ],
              "explanation": {
                "en": "Glycolysis invests 2 ATP and produces 4 ATP, for a net gain of $4 - 2 = 2$ ATP (plus 2 NADH) per glucose.",
                "zh": "糖酵解投入 2 个 ATP，产生 4 个 ATP，每个葡萄糖净得 $4 - 2 = 2$ 个 ATP（外加 2 个 NADH）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many molecules of pyruvate are produced from the complete glycolysis of one glucose molecule? (Give a number.)",
                "zh": "一个葡萄糖分子完全糖酵解产生多少个丙酮酸分子？（给出数字。）"
              },
              "answer": "2",
              "accept": [
                "2",
                "two",
                "两个"
              ],
              "explanation": {
                "en": "Glycolysis splits the six-carbon glucose into two three-carbon pyruvate molecules.",
                "zh": "糖酵解将六碳的葡萄糖裂解为两个三碳的丙酮酸分子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Name the two-carbon molecule (attached to coenzyme A) that enters the Krebs cycle by combining with oxaloacetate. (Give the name, e.g. “acetyl-CoA”.)",
                "zh": "说出那个与草酰乙酸结合、进入克雷布斯循环的二碳分子（与辅酶 A 相连）的名称。（给出名称，例如「乙酰辅酶 A」。）"
              },
              "answer": "acetyl-coa",
              "accept": [
                "acetyl-coa",
                "acetyl coa",
                "acetyl coenzyme a",
                "acetylcoa",
                "乙酰辅酶a",
                "乙酰辅酶A",
                "乙酰coa"
              ],
              "explanation": {
                "en": "Pyruvate oxidation produces acetyl-CoA, which combines with oxaloacetate to form citrate, starting the Krebs cycle.",
                "zh": "丙酮酸氧化产生乙酰辅酶 A，它与草酰乙酸结合形成柠檬酸，开启克雷布斯循环。"
              }
            }
          ]
        },
        {
          "id": "photosynthesis",
          "title": "Photosynthesis",
          "titleZh": "光合作用",
          "content": [
            {
              "type": "h2",
              "en": "Capturing Light to Build Sugar",
              "zh": "捕获光能以合成糖"
            },
            {
              "type": "p",
              "en": "Photosynthesis is how plants, algae, and some bacteria convert light energy into the chemical energy of sugars. It is the entry point of energy into most food webs and the source of atmospheric oxygen. Overall, carbon dioxide and water are converted, using light energy, into glucose and oxygen—essentially the reverse of the summary equation for cellular respiration.",
              "zh": "光合作用（photosynthesis）是植物、藻类和某些细菌把光能转化为糖类化学能的方式。它是能量进入大多数食物网的入口，也是大气氧气的来源。总体上，二氧化碳和水在光能作用下被转化为葡萄糖和氧气——本质上是细胞呼吸总方程式的逆过程。"
            },
            {
              "type": "math",
              "tex": "6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + \\text{light} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2"
            },
            {
              "type": "p",
              "en": "Photosynthesis and respiration are complementary halves of a cycle. Respiration oxidizes glucose and releases $\\text{CO}_2$; photosynthesis reduces $\\text{CO}_2$ back into glucose. The oxygen released in photosynthesis comes from splitting water, and that oxygen is later used by respiration—linking the two processes across ecosystems.",
              "zh": "光合作用与呼吸作用是一个循环互补的两半。呼吸作用氧化葡萄糖并释放 $\\text{CO}_2$；光合作用把 $\\text{CO}_2$ 还原回葡萄糖。光合作用释放的氧气来自水的裂解，这些氧气随后被呼吸作用利用——从而在生态系统尺度上把两个过程联系起来。"
            },
            {
              "type": "note",
              "en": "AP tip: The oxygen released by photosynthesis comes from water ($\\text{H}_2\\text{O}$), NOT from carbon dioxide. Classic isotope experiments labeling the oxygen in water proved this. A frequent exam trap is choosing $\\text{CO}_2$ as the source of $\\text{O}_2$.",
              "zh": "AP 提示：光合作用释放的氧气来自水（$\\text{H}_2\\text{O}$），而不是二氧化碳。用同位素标记水中氧的经典实验证明了这一点。考试常见陷阱是选 $\\text{CO}_2$ 作为 $\\text{O}_2$ 的来源。"
            },
            {
              "type": "h2",
              "en": "The Light-Dependent Reactions",
              "zh": "光反应（光依赖反应）"
            },
            {
              "type": "p",
              "en": "The light reactions take place in the thylakoid membranes inside the chloroplast. Their job is to convert light energy into chemical energy stored as ATP and NADPH, which will power the Calvin cycle. Pigments such as chlorophyll are organized into two complexes: photosystem II (PS II) and photosystem I (PS I). Confusingly, electrons flow from PS II to PS I—the systems are numbered in the order they were discovered, not the order used.",
              "zh": "光反应发生在叶绿体内的类囊体（thylakoid）膜上。其任务是把光能转化为储存在 ATP 和 NADPH 中的化学能，用来驱动卡尔文循环。叶绿素等色素被组织成两个复合物：光系统 II（photosystem II, PS II）和光系统 I（photosystem I, PS I）。令人困惑的是，电子从 PS II 流向 PS I——光系统的编号是按发现顺序，而非使用顺序。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Light strikes PS II and excites electrons. To replace them, PS II splits water ($\\text{H}_2\\text{O}$), releasing $\\text{O}_2$ as a by-product and protons into the thylakoid space.",
                  "zh": "光照射 PS II 并激发电子。为了补充这些电子，PS II 裂解水（$\\text{H}_2\\text{O}$），释放 $\\text{O}_2$ 作为副产物，并向类囊体腔释放质子。"
                },
                {
                  "en": "Excited electrons pass down an electron transport chain, pumping $\\text{H}^+$ into the thylakoid space and building a proton gradient.",
                  "zh": "被激发的电子沿电子传递链传递，把 $\\text{H}^+$ 泵入类囊体腔，建立质子梯度。"
                },
                {
                  "en": "Protons flow back through ATP synthase, making ATP by chemiosmosis—this is called photophosphorylation.",
                  "zh": "质子经 ATP 合酶流回，通过化学渗透生成 ATP——这个过程称为光合磷酸化（photophosphorylation）。"
                },
                {
                  "en": "At PS I, light re-energizes the electrons, which are finally used to reduce NADP⁺ to NADPH.",
                  "zh": "在 PS I 处，光重新激发电子，这些电子最终被用来把 NADP⁺ 还原为 NADPH。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Calvin Cycle (Light-Independent Reactions)",
              "zh": "卡尔文循环（暗反应/光非依赖反应）"
            },
            {
              "type": "p",
              "en": "The Calvin cycle takes place in the stroma, the fluid surrounding the thylakoids. It uses the ATP and NADPH made in the light reactions to build sugar from $\\text{CO}_2$. It is called “light-independent” because it does not use light directly, but it still depends on the light reactions to supply ATP and NADPH, so in most plants it runs during the day.",
              "zh": "卡尔文循环（Calvin cycle）发生在基质（stroma）中，即类囊体周围的液体。它利用光反应制造的 ATP 和 NADPH，由 $\\text{CO}_2$ 合成糖。它被称为「光非依赖」是因为不直接利用光，但仍依赖光反应提供 ATP 和 NADPH，因此在大多数植物中它在白天进行。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Carbon fixation: The enzyme RuBisCO attaches $\\text{CO}_2$ to the five-carbon molecule RuBP, creating an unstable six-carbon compound that immediately splits.",
                  "zh": "碳固定（carbon fixation）：酶 RuBisCO 把 $\\text{CO}_2$ 连接到五碳分子 RuBP 上，形成不稳定的六碳化合物，随即裂解。"
                },
                {
                  "en": "Reduction: ATP and NADPH from the light reactions convert the resulting molecules into G3P, a three-carbon sugar. Some G3P leaves to build glucose and other organic molecules.",
                  "zh": "还原（reduction）：来自光反应的 ATP 和 NADPH 把生成的分子转化为三碳糖 G3P。部分 G3P 离开循环，用于合成葡萄糖和其他有机分子。"
                },
                {
                  "en": "Regeneration: The rest of the G3P is rearranged, using more ATP, to regenerate RuBP so the cycle can continue.",
                  "zh": "再生（regeneration）：其余的 G3P 利用更多 ATP 重排，重新生成 RuBP，使循环得以继续。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: RuBisCO fixes carbon by adding $\\text{CO}_2$ to RuBP; it is thought to be the most abundant protein on Earth. It takes three turns of the Calvin cycle (three $\\text{CO}_2$ fixed) to net one G3P, and two G3P to build one glucose—so six turns per glucose. Don’t confuse where each stage happens: light reactions in the thylakoid membrane, Calvin cycle in the stroma.",
              "zh": "AP 提示：RuBisCO 通过把 $\\text{CO}_2$ 加到 RuBP 上来固定碳；它被认为是地球上含量最丰富的蛋白质。卡尔文循环需转动三次（固定三个 $\\text{CO}_2$）才净得一个 G3P，需两个 G3P 才能合成一个葡萄糖——所以每个葡萄糖需六次转动。别搞混各阶段的场所：光反应在类囊体膜，卡尔文循环在基质。"
            },
            {
              "type": "h2",
              "en": "C3, C4, and CAM Plants",
              "zh": "C3、C4 与 CAM 植物"
            },
            {
              "type": "p",
              "en": "RuBisCO has a costly flaw: in hot, dry conditions plants close their stomata to save water, which lets $\\text{O}_2$ build up and $\\text{CO}_2$ drop. RuBisCO then binds $\\text{O}_2$ instead of $\\text{CO}_2$ (photorespiration), wasting energy. C4 and CAM plants evolved to minimize this problem in different ways.",
              "zh": "RuBisCO 有一个代价高昂的缺陷：在炎热干燥条件下，植物关闭气孔以保水，这使 $\\text{O}_2$ 积累而 $\\text{CO}_2$ 下降。此时 RuBisCO 会结合 $\\text{O}_2$ 而非 $\\text{CO}_2$（光呼吸 photorespiration），浪费能量。C4 和 CAM 植物以不同方式演化出办法来减小这个问题。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "C3 plants (e.g. wheat, rice): fix $\\text{CO}_2$ directly with RuBisCO into a three-carbon compound. Efficient in cool, moist climates but prone to photorespiration when hot and dry.",
                  "zh": "C3 植物（如小麦、水稻）：由 RuBisCO 直接把 $\\text{CO}_2$ 固定为三碳化合物。在凉爽湿润气候中高效，但炎热干燥时易发生光呼吸。"
                },
                {
                  "en": "C4 plants (e.g. corn, sugarcane): first fix $\\text{CO}_2$ into a four-carbon compound in mesophyll cells, then shuttle it to bundle-sheath cells where RuBisCO works with high $\\text{CO}_2$—separating the steps in SPACE.",
                  "zh": "C4 植物（如玉米、甘蔗）：先在叶肉细胞中把 $\\text{CO}_2$ 固定为四碳化合物，再运送到维管束鞘细胞，那里 $\\text{CO}_2$ 浓度高、供 RuBisCO 工作——在空间上分开这两步。"
                },
                {
                  "en": "CAM plants (e.g. cacti, succulents): open stomata only at night to take in $\\text{CO}_2$ and store it as acid, then run the Calvin cycle by day with stomata closed—separating the steps in TIME.",
                  "zh": "CAM 植物（如仙人掌、多肉）：只在夜间打开气孔吸收 $\\text{CO}_2$ 并以酸的形式储存，白天关闭气孔进行卡尔文循环——在时间上分开这两步。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Reasoning About a Blocked Step",
                "zh": "例题：推理某一步被阻断的后果"
              },
              "problem": {
                "en": "A drug blocks the electron transport chain in the thylakoid membrane so no NADPH is made. Predict the immediate effect on the Calvin cycle, and explain why.",
                "zh": "某药物阻断了类囊体膜上的电子传递链，使 NADPH 无法生成。预测这对卡尔文循环的直接影响，并解释原因。"
              },
              "solution": [
                {
                  "en": "The Calvin cycle depends on NADPH (and ATP) from the light reactions to reduce fixed carbon into G3P. If NADPH is not supplied, the reduction step stalls and G3P—and therefore sugar—can no longer be produced.",
                  "zh": "卡尔文循环依赖光反应提供的 NADPH（和 ATP）把固定下来的碳还原为 G3P。如果没有 NADPH 供应，还原步骤停滞，G3P——因而糖——就无法再生成。",
                  "type": "p"
                },
                {
                  "en": "This shows why the light reactions and Calvin cycle are interdependent: although the Calvin cycle is “light-independent,” it cannot run without the ATP and NADPH that the light reactions produce.",
                  "zh": "这说明了为什么光反应与卡尔文循环相互依赖：尽管卡尔文循环是「光非依赖」的，但没有光反应产生的 ATP 和 NADPH 它就无法运行。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In which part of the chloroplast do the light-dependent reactions occur?",
                "zh": "光反应发生在叶绿体的哪个部分？"
              },
              "choices": [
                "The stroma",
                "The intermembrane space",
                "The outer membrane",
                "The thylakoid membrane"
              ],
              "answer": 3,
              "explanation": {
                "en": "The light reactions occur in the thylakoid membranes, where the photosystems and ATP synthase are embedded. The Calvin cycle occurs in the surrounding stroma.",
                "zh": "光反应发生在类囊体膜上，光系统和 ATP 合酶嵌在其中。卡尔文循环发生在周围的基质中。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The oxygen gas released during photosynthesis comes from the splitting of which molecule?",
                "zh": "光合作用释放的氧气来自哪种分子的裂解？"
              },
              "choices": [
                "Carbon dioxide ($\\text{CO}_2$)",
                "Glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$)",
                "Water ($\\text{H}_2\\text{O}$)",
                "RuBP"
              ],
              "answer": 2,
              "explanation": {
                "en": "Photosystem II splits water to replace its excited electrons, releasing $\\text{O}_2$. Isotope-labeling experiments confirmed the oxygen comes from water, not $\\text{CO}_2$.",
                "zh": "光系统 II 裂解水以补充被激发的电子，释放 $\\text{O}_2$。同位素标记实验证实氧气来自水，而非 $\\text{CO}_2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which products of the light reactions are used to power the Calvin cycle?",
                "zh": "光反应的哪些产物被用来驱动卡尔文循环？"
              },
              "choices": [
                "ATP and NADPH",
                "$\\text{O}_2$ and $\\text{CO}_2$",
                "Glucose and water",
                "NADH and FADH₂"
              ],
              "answer": 0,
              "explanation": {
                "en": "The light reactions make ATP and NADPH, which the Calvin cycle uses to fix and reduce $\\text{CO}_2$ into sugar. NADH/FADH₂ belong to respiration, not photosynthesis.",
                "zh": "光反应制造 ATP 和 NADPH，卡尔文循环用它们把 $\\text{CO}_2$ 固定并还原为糖。NADH/FADH₂ 属于呼吸作用，而非光合作用。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly compares C4 and CAM plants?",
                "zh": "下列哪项正确比较了 C4 与 CAM 植物？"
              },
              "choices": [
                "Both fix carbon only at night using RuBisCO",
                "Neither uses RuBisCO at any point",
                "CAM plants keep stomata open all day; C4 plants keep them closed",
                "C4 plants separate initial carbon fixation and the Calvin cycle in space; CAM plants separate them in time"
              ],
              "answer": 3,
              "explanation": {
                "en": "C4 plants separate the steps spatially (mesophyll vs. bundle-sheath cells); CAM plants separate them temporally (fix $\\text{CO}_2$ at night, run the Calvin cycle by day). Both still ultimately use RuBisCO.",
                "zh": "C4 植物在空间上分开这些步骤（叶肉细胞与维管束鞘细胞）；CAM 植物在时间上分开（夜间固定 $\\text{CO}_2$，白天进行卡尔文循环）。两者最终都仍使用 RuBisCO。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student claims the Calvin cycle is called “light-independent” because it can run indefinitely in total darkness. Why is this reasoning flawed?",
                "zh": "一名学生声称卡尔文循环被称为「光非依赖」是因为它能在完全黑暗中无限进行。这个推理为何有误？"
              },
              "choices": [
                "The Calvin cycle actually requires light to activate RuBisCO directly",
                "The Calvin cycle releases oxygen, which needs light",
                "The Calvin cycle occurs in the thylakoid, which needs light",
                "It depends on ATP and NADPH supplied by the light reactions, which soon run out in darkness"
              ],
              "answer": 3,
              "explanation": {
                "en": "Light-independent means it does not use light directly, but it consumes the ATP and NADPH made by the light reactions. In prolonged darkness those run out and the cycle stops.",
                "zh": "光非依赖是指它不直接利用光，但它消耗光反应制造的 ATP 和 NADPH。长时间黑暗中这些耗尽，循环就会停止。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Name the enzyme that catalyzes carbon fixation by attaching $\\text{CO}_2$ to RuBP in the Calvin cycle. (Give the name.)",
                "zh": "说出在卡尔文循环中通过把 $\\text{CO}_2$ 连接到 RuBP 上来催化碳固定的酶的名称。（给出名称。）"
              },
              "answer": "rubisco",
              "accept": [
                "rubisco",
                "ribulose bisphosphate carboxylase",
                "ribulose-1,5-bisphosphate carboxylase/oxygenase",
                "rubp carboxylase"
              ],
              "explanation": {
                "en": "RuBisCO (ribulose bisphosphate carboxylase/oxygenase) fixes $\\text{CO}_2$ onto RuBP. It is often cited as the most abundant protein on Earth.",
                "zh": "RuBisCO（核酮糖二磷酸羧化酶/加氧酶）把 $\\text{CO}_2$ 固定到 RuBP 上。它常被称为地球上含量最丰富的蛋白质。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many turns of the Calvin cycle (i.e. how many $\\text{CO}_2$ molecules fixed) are required to produce one molecule of glucose? (Give a number.)",
                "zh": "产生一个葡萄糖分子需要卡尔文循环转动多少次（即固定多少个 $\\text{CO}_2$ 分子）？（给出数字。）"
              },
              "answer": "6",
              "accept": [
                "6",
                "six",
                "六"
              ],
              "explanation": {
                "en": "Each turn fixes one $\\text{CO}_2$; three turns net one G3P, and two G3P build one six-carbon glucose, so six turns (six $\\text{CO}_2$) are needed per glucose.",
                "zh": "每次转动固定一个 $\\text{CO}_2$；三次转动净得一个 G3P，两个 G3P 合成一个六碳葡萄糖，因此每个葡萄糖需六次转动（六个 $\\text{CO}_2$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the light reactions, the electron carrier NADP⁺ is reduced to what molecule (which then delivers electrons to the Calvin cycle)? (Give the abbreviation.)",
                "zh": "在光反应中，电子载体 NADP⁺ 被还原为什么分子（随后把电子送往卡尔文循环）？（给出缩写。）"
              },
              "answer": "nadph",
              "accept": [
                "nadph",
                "NADPH"
              ],
              "explanation": {
                "en": "At photosystem I, electrons reduce NADP⁺ to NADPH, the reduced carrier that supplies electrons for the reduction step of the Calvin cycle.",
                "zh": "在光系统 I 处，电子把 NADP⁺ 还原为 NADPH，这一被还原的载体为卡尔文循环的还原步骤提供电子。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-cell-communication-and-cell-cycle",
      "title": "Unit 4: Cell Communication and Cell Cycle",
      "titleZh": "第四单元：细胞通讯与细胞周期",
      "lessons": [
        {
          "id": "cell-communication-and-signaling",
          "title": "Cell Communication and Signal Transduction",
          "titleZh": "细胞通讯与信号转导",
          "content": [
            {
              "type": "h2",
              "en": "Why Cells Talk to Each Other",
              "zh": "细胞为何要相互通讯"
            },
            {
              "type": "p",
              "en": "No cell is an island. From the bacteria in a biofilm to the trillions of cells in your body, cells constantly send and receive chemical messages that coordinate growth, metabolism, development, and defense. Cell communication (cell signaling) is how a multicellular organism behaves as an integrated whole rather than a bag of independent cells. The molecule carrying the message is a ligand (signal); the cell that responds is the target cell.",
              "zh": "没有细胞是孤岛。从生物膜中的细菌到你体内数以万亿计的细胞，细胞不断地发送和接收化学信息，以协调生长、代谢、发育和防御。细胞通讯（细胞信号传导，cell signaling）是多细胞生物作为一个整体协调运作、而非一袋各自为政细胞的方式。携带信息的分子称为配体（信号，ligand）；作出反应的细胞称为靶细胞（target cell）。"
            },
            {
              "type": "p",
              "en": "A remarkable insight from AP Biology is that the same signaling machinery is conserved across all domains of life. Yeast use signal transduction to mate; bacteria use it to count their neighbors; your neurons use it to fire. This shared toolkit is strong evidence for common ancestry.",
              "zh": "AP 生物中一个引人注目的观点是：相同的信号传导机制在生命的各个域中都是保守的。酵母利用信号转导进行交配；细菌利用它来「数」邻居的数量；你的神经元利用它来放电。这套共享的工具箱是共同祖先（common ancestry）的有力证据。"
            },
            {
              "type": "h3",
              "en": "Four Types of Signaling by Distance",
              "zh": "按距离划分的四种信号传递方式"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Direct contact (juxtacrine): adjacent cells communicate through gap junctions (in animals) or plasmodesmata (in plants), or through membrane-bound surface molecules that touch a neighboring cell. This is how immune cells inspect one another.",
                  "zh": "直接接触（并列分泌，juxtacrine）：相邻细胞通过间隙连接（动物中，gap junctions）或胞间连丝（植物中，plasmodesmata）通讯，或通过膜结合的表面分子接触邻近细胞。免疫细胞就是这样互相识别的。"
                },
                {
                  "en": "Paracrine (local): a cell secretes a local regulator that diffuses a short distance to nearby target cells. Growth factors stimulating nearby cells to divide during wound healing are paracrine signals.",
                  "zh": "旁分泌（局部，paracrine）：细胞分泌一种局部调节因子，扩散很短距离到达附近的靶细胞。伤口愈合时刺激邻近细胞分裂的生长因子就是旁分泌信号。"
                },
                {
                  "en": "Synaptic (local): a specialized form of paracrine signaling in which a neuron releases a neurotransmitter across a tiny synapse to the next cell. The distance is minute but the message is fast and precise.",
                  "zh": "突触分泌（局部，synaptic）：一种特化的旁分泌形式，神经元将神经递质（neurotransmitter）释放到极小的突触间隙，传给下一个细胞。距离极小，但信息快速而精确。"
                },
                {
                  "en": "Endocrine (long-distance): endocrine cells secrete hormones into the bloodstream, which carries them throughout the body to distant target cells that possess the matching receptor. Insulin and adrenaline are hormones.",
                  "zh": "内分泌（长距离，endocrine）：内分泌细胞将激素（hormones）分泌到血液中，血液把激素运送到全身，到达具有相应受体的远处靶细胞。胰岛素和肾上腺素都是激素。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Specificity does not come from the signal reaching only one cell — hormones bathe the whole body. Specificity comes from which cells display the matching receptor. A cell without the receptor is deaf to the message even though the ligand touches it.",
              "zh": "AP 提示：特异性不是因为信号只到达某一个细胞——激素遍布全身。特异性来自哪些细胞展示了相匹配的受体。没有该受体的细胞即使被配体接触，也「听不见」这条信息。"
            },
            {
              "type": "h3",
              "en": "The Three Stages: Reception, Transduction, Response",
              "zh": "三个阶段：接收、转导、反应"
            },
            {
              "type": "p",
              "en": "Earl Sutherland worked out that signaling proceeds in three sequential stages, a framework the AP exam expects you to know cold.",
              "zh": "厄尔·萨瑟兰（Earl Sutherland）阐明了信号传导按三个连续阶段进行，这个框架是 AP 考试要求你烂熟于心的。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Reception: the ligand binds to a specific receptor protein, usually on the cell surface. Binding is like a key fitting a lock — it changes the shape (conformation) of the receptor.",
                  "zh": "接收（reception）：配体与特定的受体蛋白结合，通常位于细胞表面。结合就像钥匙插入锁——它改变受体的形状（构象，conformation）。"
                },
                {
                  "en": "Transduction: the shape change activates a signal transduction pathway, a chain (cascade) of molecules that relay and convert the signal from one form to another, often through phosphorylation or second messengers.",
                  "zh": "转导（transduction）：形状改变激活一条信号转导通路，即一连串（级联，cascade）分子，它们将信号从一种形式接力传递并转换为另一种形式，通常通过磷酸化或第二信使实现。"
                },
                {
                  "en": "Response: the transduced signal triggers a specific cellular response — activating an enzyme, opening a channel, rearranging the cytoskeleton, or switching a gene on or off in the nucleus.",
                  "zh": "反应（response）：转导后的信号触发特定的细胞反应——激活某个酶、打开某个通道、重排细胞骨架，或在细胞核中开启或关闭某个基因。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Membrane Receptors: GPCRs and Receptor Tyrosine Kinases",
              "zh": "膜受体：G 蛋白偶联受体与受体酪氨酸激酶"
            },
            {
              "type": "p",
              "en": "Water-soluble (hydrophilic) ligands cannot cross the phospholipid bilayer, so they bind receptors on the cell surface. Two major families dominate the AP curriculum. A G-protein-coupled receptor (GPCR) is a receptor that, when bound by a ligand, activates an associated G protein by causing it to swap GDP for GTP; the active G protein then switches on an enzyme such as adenylyl cyclase. GPCRs handle senses like smell, taste, and vision, and respond to many hormones.",
              "zh": "水溶性（亲水，hydrophilic）配体无法穿过磷脂双分子层（phospholipid bilayer），因此它们与细胞表面的受体结合。有两大受体家族主导 AP 课程。G 蛋白偶联受体（GPCR）在配体结合后，通过使相连的 G 蛋白将 GDP 换成 GTP 而将其激活；被激活的 G 蛋白随即开启诸如腺苷酸环化酶（adenylyl cyclase）之类的酶。GPCR 负责嗅觉、味觉和视觉等感觉，并响应许多激素。"
            },
            {
              "type": "p",
              "en": "A receptor tyrosine kinase (RTK) is a receptor that, after two receptor molecules pair up (dimerize) upon ligand binding, adds phosphate groups to its own tyrosine amino acids. Each phosphorylated tyrosine becomes a docking site, so one activated RTK can trigger many pathways at once — which is why RTKs often drive cell growth and division and why their mutation is common in cancer.",
              "zh": "受体酪氨酸激酶（RTK）是这样一种受体：配体结合后两个受体分子配对（二聚化，dimerize），随即给自身的酪氨酸氨基酸添加磷酸基团。每个被磷酸化的酪氨酸都成为一个对接位点，因此一个被激活的 RTK 能同时触发多条通路——这正是 RTK 常常驱动细胞生长与分裂、其突变在癌症中常见的原因。"
            },
            {
              "type": "p",
              "en": "By contrast, lipid-soluble (hydrophobic) signals such as steroid hormones (estrogen, testosterone) pass directly through the membrane and bind intracellular receptors in the cytoplasm or nucleus. The hormone-receptor complex often acts as a transcription factor, turning specific genes on or off.",
              "zh": "相比之下，脂溶性（疏水，hydrophobic）信号如类固醇激素（雌激素、睾酮）可直接穿过膜，与细胞质或细胞核内的胞内受体结合。激素-受体复合物常作为转录因子（transcription factor），开启或关闭特定的基因。"
            },
            {
              "type": "h3",
              "en": "Second Messengers and Signal Amplification",
              "zh": "第二信使与信号放大"
            },
            {
              "type": "p",
              "en": "Inside the cell, small, rapidly diffusing molecules called second messengers spread the signal. The classic example is cyclic AMP (cAMP), made from ATP by adenylyl cyclase; calcium ions (Ca²⁺) are another. Because each activated enzyme in the cascade can produce many product molecules, the signal is amplified at every step: one hormone molecule can lead to millions of product molecules. This is why a tiny amount of adrenaline can flood your blood with glucose within seconds.",
              "zh": "在细胞内部，被称为第二信使（second messengers）的小型、快速扩散的分子将信号扩散开来。经典例子是环腺苷酸（cAMP），由腺苷酸环化酶以 ATP 为原料生成；钙离子（Ca²⁺）是另一个。由于级联中每个被激活的酶都能生成许多产物分子，信号在每一步都被放大：一个激素分子可导致数百万个产物分子。这正是为什么微量的肾上腺素能在几秒内让血液充满葡萄糖。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Calculating Signal Amplification",
                "zh": "例题 1：计算信号放大"
              },
              "problem": {
                "en": "One adrenaline molecule activates one GPCR. That receptor activates 100 molecules of the enzyme adenylyl cyclase, each of which makes 100 cAMP. Each cAMP activates 1 protein kinase A, and each kinase then activates 100 downstream enzyme molecules. How many final enzyme molecules are activated by the single adrenaline molecule?",
                "zh": "一个肾上腺素分子激活一个 GPCR。该受体激活 100 个腺苷酸环化酶分子，每个酶生成 100 个 cAMP。每个 cAMP 激活 1 个蛋白激酶 A，每个激酶再激活 100 个下游酶分子。这一个肾上腺素分子最终激活了多少个终末酶分子？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply the amplification factor at each step: 100 adenylyl cyclase, times 100 cAMP each, times 1 kinase each, times 100 enzymes each.",
                  "zh": "将每一步的放大倍数相乘：100 个腺苷酸环化酶，每个生成 100 个 cAMP，每个激活 1 个激酶，每个再激活 100 个酶。"
                },
                {
                  "type": "math",
                  "tex": "100 \\times 100 \\times 1 \\times 100 = 1{,}000{,}000"
                },
                {
                  "type": "p",
                  "en": "One molecule of signal yields one million activated enzymes — a millionfold amplification. This cascade design is why cells respond to vanishingly small hormone concentrations.",
                  "zh": "一个信号分子产生一百万个被激活的酶——放大了一百万倍。这种级联设计正是细胞能对极低激素浓度作出反应的原因。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Feedback, Homeostasis, and Quorum Sensing",
              "zh": "反馈、稳态与群体感应"
            },
            {
              "type": "p",
              "en": "Signaling pathways rarely run open-loop; their output feeds back to control them. In negative feedback, the response reduces the original stimulus, pushing the system back toward a set point — this is the workhorse of homeostasis. When blood glucose rises, insulin is released; cells take up glucose; blood glucose falls, which shuts off insulin. In positive feedback, the response amplifies the stimulus, driving a process to completion — as in the oxytocin surge that intensifies labor contractions, or the rapid depolarization of a nerve impulse.",
              "zh": "信号通路很少是开环运行的；它们的输出会反馈来控制自身。在负反馈（negative feedback）中，反应减弱原始刺激，把系统推回设定点——这是稳态（homeostasis）的主力机制。血糖升高时，胰岛素被释放；细胞摄取葡萄糖；血糖下降，从而关闭胰岛素。在正反馈（positive feedback）中，反应放大刺激，推动某过程走向完成——如催产素激增加强分娩宫缩，或神经冲动的快速去极化。"
            },
            {
              "type": "p",
              "en": "Even bacteria signal. In quorum sensing, each bacterium secretes a small autoinducer molecule; as the population grows, the autoinducer accumulates. Once its concentration crosses a threshold, the whole population switches on genes together — forming a biofilm, glowing (bioluminescence in Vibrio fischeri), or launching an infection. Quorum sensing lets single-celled organisms coordinate behavior as though they were multicellular, and shows that cell communication predates multicellularity.",
              "zh": "连细菌也会传递信号。在群体感应（quorum sensing）中，每个细菌分泌一种小型自诱导物（autoinducer）分子；随着种群增长，自诱导物不断累积。一旦其浓度越过阈值，整个种群便一起开启基因——形成生物膜、发光（费氏弧菌 Vibrio fischeri 的生物发光）或发动感染。群体感应让单细胞生物能像多细胞生物那样协调行为，也表明细胞通讯早于多细胞性的出现。"
            },
            {
              "type": "note",
              "en": "AP tip: Do not confuse positive feedback with \"good\" and negative feedback with \"bad.\" The signs describe direction, not value. Negative feedback stabilizes (maintains homeostasis); positive feedback destabilizes to push an event to completion. Both are essential.",
              "zh": "AP 提示：不要把正反馈等同于「好」、负反馈等同于「坏」。正负号描述的是方向而非好坏。负反馈起稳定作用（维持稳态）；正反馈打破稳定以推动某事件完成。两者都不可或缺。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Interpreting a Signaling Experiment",
                "zh": "例题 2：解读信号传导实验"
              },
              "problem": {
                "en": "A drug blocks the enzyme that breaks down cAMP inside cells. When cells are then exposed to a hormone that acts through a GPCR–cAMP pathway, the response is much stronger and lasts far longer than normal. Explain why.",
                "zh": "某药物阻断了细胞内分解 cAMP 的酶。随后当细胞暴露于一种通过 GPCR–cAMP 通路起作用的激素时，其反应远比正常更强、持续更久。请解释原因。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Normally cAMP is continuously degraded, so its level — and the response — drops as soon as the signal weakens. Blocking the degrading enzyme means cAMP accumulates and persists.",
                  "zh": "正常情况下 cAMP 持续被降解，因此一旦信号减弱，其水平与反应就随之下降。阻断降解酶意味着 cAMP 累积并持续存在。"
                },
                {
                  "type": "p",
                  "en": "With more cAMP lingering longer, more protein kinase A stays active, so the downstream response is both amplified and prolonged. This illustrates that a signal's strength and duration depend not only on how much second messenger is made but on how fast it is removed. (Caffeine works partly this way.)",
                  "zh": "更多 cAMP 留存更久，更多蛋白激酶 A 保持激活状态，因此下游反应既被放大又被延长。这说明信号的强度与持续时间不仅取决于生成多少第二信使，还取决于它被清除的速度。（咖啡因部分就是通过这种方式起作用的。）"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A steroid hormone such as estrogen is lipid-soluble. Where is its receptor most likely located, and why?",
                "zh": "雌激素等类固醇激素是脂溶性的。其受体最可能位于何处，为什么？"
              },
              "choices": [
                "On the cell surface, because the hormone cannot enter the cell",
                "In the mitochondrial membrane, because steroids are made there",
                "In the extracellular matrix, because the hormone binds outside cells",
                "Inside the cell (cytoplasm or nucleus), because the hormone can cross the membrane"
              ],
              "answer": 3,
              "explanation": {
                "en": "Lipid-soluble (hydrophobic) signals pass directly through the phospholipid bilayer, so their receptors are intracellular, often acting as transcription factors. The surface-receptor choice describes hydrophilic ligands like peptide hormones, which cannot cross the membrane.",
                "zh": "脂溶性（疏水）信号可直接穿过磷脂双分子层，因此其受体在胞内，常作为转录因子。选择表面受体的选项描述的是肽类激素等亲水配体，它们无法穿膜。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Insulin travels through the bloodstream to reach cells throughout the body. Yet only certain cells respond strongly to it. What best explains this specificity?",
                "zh": "胰岛素通过血液到达全身细胞，但只有某些细胞对它反应强烈。什么最能解释这种特异性？"
              },
              "choices": [
                "Only certain cells are physically close enough to the pancreas",
                "Insulin is destroyed before it reaches most cells",
                "Only cells that express the matching insulin receptor can detect and respond to it",
                "Insulin can only travel in one direction through the blood"
              ],
              "answer": 2,
              "explanation": {
                "en": "In endocrine signaling the hormone reaches nearly all cells, so specificity is set by which cells display the correct receptor. Cells lacking the receptor cannot respond. Distance and one-way travel are not how endocrine specificity works.",
                "zh": "在内分泌信号中激素几乎能到达所有细胞，因此特异性由哪些细胞展示正确的受体决定。缺乏该受体的细胞无法反应。距离和单向运输都不是内分泌特异性的机制。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Yeast, bacteria, plants, and animals all use strikingly similar signal transduction molecules. This conservation is best interpreted as evidence for:",
                "zh": "酵母、细菌、植物和动物都使用惊人相似的信号转导分子。这种保守性最好被解读为以下哪一项的证据？"
              },
              "choices": [
                "Independent origins of signaling in each lineage",
                "Hormones being identical in all organisms",
                "Signaling being unnecessary in single-celled life",
                "A shared evolutionary ancestry among these organisms"
              ],
              "answer": 3,
              "explanation": {
                "en": "Conserved molecular machinery across distantly related groups points to a common ancestor from which the pathway was inherited. Independent origins would not predict such detailed similarity, and the other options are simply false.",
                "zh": "在亲缘关系遥远的类群间保守的分子机制指向一个共同祖先，通路由此遗传而来。独立起源无法预测如此细致的相似性，其余选项则纯属错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "During childbirth, the hormone oxytocin causes uterine contractions, and stretching of the uterus causes even more oxytocin to be released. This loop is an example of:",
                "zh": "分娩过程中，激素催产素引起子宫收缩，而子宫的牵张又导致更多催产素被释放。这个循环是以下哪种的例子？"
              },
              "choices": [
                "Negative feedback maintaining a set point",
                "Signal amplification within one cell",
                "Paracrine signaling between neurons",
                "Positive feedback amplifying a process to completion"
              ],
              "answer": 3,
              "explanation": {
                "en": "The response (contraction and stretch) increases the stimulus (oxytocin), intensifying the process until birth — the hallmark of positive feedback. Negative feedback would instead dampen oxytocin to hold a steady state.",
                "zh": "反应（收缩与牵张）增强了刺激（催产素），使过程不断加强直至分娩完成——这是正反馈的标志。负反馈则会抑制催产素以维持稳态。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A mutation locks a receptor tyrosine kinase in its active, phosphorylated state even without any ligand bound. What is the most likely consequence for the cell?",
                "zh": "一个突变使受体酪氨酸激酶即使没有任何配体结合也锁定在其激活的磷酸化状态。对该细胞最可能的后果是什么？"
              },
              "choices": [
                "The cell stops responding to all signals",
                "The receptor is destroyed immediately",
                "The cell can no longer make ATP",
                "Growth-and-division pathways fire continuously, potentially leading to cancer"
              ],
              "answer": 3,
              "explanation": {
                "en": "RTKs typically switch on growth and division pathways. A constitutively active RTK signals \"divide\" nonstop regardless of external cues, a classic route to uncontrolled proliferation (cancer). It does not shut off signaling or block ATP synthesis.",
                "zh": "RTK 通常开启生长与分裂通路。持续激活的 RTK 不管外界信号如何都不停地发出「分裂」指令，这是失控增殖（癌症）的经典途径。它不会关闭信号传导，也不会阻断 ATP 合成。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the general term for the three-stage process by which a signal at the cell surface is relayed and converted into a cellular response? (two words, lowercase)",
                "zh": "细胞表面的信号被接力传递并转换为细胞反应的这一三阶段过程，其总称是什么？（英文两个词，小写）"
              },
              "answer": "signal transduction",
              "accept": [
                "signal transduction",
                "signal transduction pathway",
                "transduction"
              ],
              "explanation": {
                "en": "Signal transduction is the multistep relay (reception → transduction → response) that carries and often amplifies a signal from the receptor to the final cellular effect.",
                "zh": "信号转导是把信号从受体接力传递（并常常放大）到最终细胞效应的多步过程（接收 → 转导 → 反应）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "One signal molecule activates a receptor that activates 50 enzymes, each producing 200 second-messenger molecules. How many second-messenger molecules result from that single signal? (a number)",
                "zh": "一个信号分子激活一个受体，该受体激活 50 个酶，每个酶生成 200 个第二信使分子。这一个信号分子共产生多少个第二信使分子？（一个数字）"
              },
              "answer": "10000",
              "accept": [
                "10000",
                "10,000"
              ],
              "explanation": {
                "en": "Multiply the amplification at each step: 50 × 200 = 10,000. Because each enzyme acts many times, cascades multiply the signal, letting tiny hormone amounts trigger large responses.",
                "zh": "将每一步的放大倍数相乘：50 × 200 = 10,000。由于每个酶多次起作用，级联把信号相乘放大，使微量激素能触发巨大反应。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the term for the cell-density-dependent signaling by which bacteria detect their population size and switch on genes together (for example, to form a biofilm)? (two words, lowercase)",
                "zh": "细菌借以感知自身种群大小、并共同开启基因（例如形成生物膜）的这种依赖细胞密度的信号传递，称为什么？（英文两个词，小写）"
              },
              "answer": "quorum sensing",
              "accept": [
                "quorum sensing",
                "quorum-sensing"
              ],
              "explanation": {
                "en": "In quorum sensing, each cell secretes an autoinducer that accumulates with population size; crossing a threshold triggers coordinated gene expression, letting bacteria act collectively.",
                "zh": "在群体感应中，每个细胞分泌一种自诱导物，其浓度随种群大小累积；越过阈值即触发协调的基因表达，使细菌能集体行动。"
              }
            }
          ]
        },
        {
          "id": "cell-cycle-and-mitosis",
          "title": "The Cell Cycle and Mitosis",
          "titleZh": "细胞周期与有丝分裂",
          "content": [
            {
              "type": "h2",
              "en": "The Life of a Dividing Cell",
              "zh": "分裂细胞的一生"
            },
            {
              "type": "p",
              "en": "Every cell in your body traces back to a single fertilized egg through countless rounds of division. The cell cycle is the ordered sequence of events by which a cell grows, copies its DNA, and divides into two genetically identical daughter cells. Getting this right matters enormously: each daughter must receive one — and only one — complete copy of the genome. Errors produce cells with the wrong number of chromosomes, a hallmark of cancer and of genetic disorders.",
              "zh": "你体内的每个细胞都经过无数轮分裂，追溯到一个受精卵。细胞周期（cell cycle）是细胞生长、复制其 DNA 并分裂成两个基因完全相同的子细胞的有序事件序列。把这件事做对至关重要：每个子细胞必须获得一份——且仅一份——完整的基因组拷贝。差错会产生染色体数目错误的细胞，这是癌症和遗传病的标志。"
            },
            {
              "type": "h3",
              "en": "Interphase: Preparing to Divide (G1, S, G2)",
              "zh": "间期：为分裂做准备（G1、S、G2）"
            },
            {
              "type": "p",
              "en": "For most of its life a cell is in interphase, the long \"in-between\" period that occupies about 90% of the cycle. Interphase is not a resting phase — the cell is busy growing and preparing. It is divided into three parts:",
              "zh": "细胞一生的大部分时间处于间期（interphase），这个漫长的「中间」阶段约占整个周期的 90%。间期并非休息期——细胞正忙于生长和准备。它分为三部分："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "G1 (first gap): the cell grows, makes proteins and organelles, and carries out its normal functions. Each chromosome is a single unreplicated DNA molecule (one chromatid). Cells that permanently stop dividing (like neurons) exit here into a resting state called G0.",
                  "zh": "G1（第一间隙期）：细胞生长，合成蛋白质和细胞器，并执行正常功能。此时每条染色体是单个未复制的 DNA 分子（一条染色单体，chromatid）。永久停止分裂的细胞（如神经元）在此退出，进入称为 G0 的静止状态。"
                },
                {
                  "en": "S (synthesis): the cell replicates all of its DNA. Each chromosome is copied, so it now consists of two identical sister chromatids joined at a centromere. The amount of DNA doubles, but the chromosome number does not.",
                  "zh": "S（合成期，synthesis）：细胞复制全部 DNA。每条染色体被复制，因此现在由两条相同的姐妹染色单体（sister chromatids）在着丝粒（centromere）处连接组成。DNA 的量加倍，但染色体数目不变。"
                },
                {
                  "en": "G2 (second gap): the cell keeps growing and makes the proteins and organelles needed for division, such as the components of the mitotic spindle. It double-checks that DNA replication finished correctly.",
                  "zh": "G2（第二间隙期）：细胞继续生长，并合成分裂所需的蛋白质和细胞器，如有丝分裂纺锤体（mitotic spindle）的组分。它复查 DNA 复制是否正确完成。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: A common trap is thinking S phase doubles the chromosome NUMBER. It does not. A human cell has 46 chromosomes before AND after S phase. What doubles is the DNA content — each chromosome now has two sister chromatids. Chromosome number only changes at anaphase, when sisters separate.",
              "zh": "AP 提示：一个常见陷阱是以为 S 期让染色体「数目」加倍。并非如此。人类细胞在 S 期前后都是 46 条染色体。加倍的是 DNA 含量——每条染色体现在有两条姐妹染色单体。染色体数目只在后期（姐妹分开时）改变。"
            },
            {
              "type": "h3",
              "en": "Mitosis: Sorting the Chromosomes (PMAT)",
              "zh": "有丝分裂：分配染色体（前中后末）"
            },
            {
              "type": "p",
              "en": "Mitosis is the division of the nucleus, ensuring each daughter nucleus gets an identical set of chromosomes. Remember it as PMAT:",
              "zh": "有丝分裂（mitosis）是细胞核的分裂，确保每个子核获得一套相同的染色体。用「前中后末」（PMAT）来记忆："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Prophase: chromatin condenses into visible chromosomes (each two sister chromatids); the nuclear envelope begins to break down; the mitotic spindle forms from centrosomes moving to opposite poles.",
                  "zh": "前期（prophase）：染色质凝聚成可见的染色体（每条含两条姐妹染色单体）；核膜开始解体；纺锤体由移向两极的中心体（centrosomes）形成。"
                },
                {
                  "en": "Metaphase: chromosomes line up single-file along the cell's equator (the metaphase plate); spindle fibers attach to each centromere from opposite poles.",
                  "zh": "中期（metaphase）：染色体沿细胞赤道（中期板，metaphase plate）排成单列；纺锤丝从两极分别附着到每个着丝粒上。"
                },
                {
                  "en": "Anaphase: sister chromatids are pulled apart to opposite poles. The instant they separate, each becomes its own chromosome, so the chromosome number transiently doubles at the poles.",
                  "zh": "后期（anaphase）：姐妹染色单体被拉向相反的两极。它们一分开的瞬间，每条即成为独立的染色体，因此两极的染色体数目短暂加倍。"
                },
                {
                  "en": "Telophase: two new nuclear envelopes form around the two sets of chromosomes, which decondense back into chromatin; the spindle breaks down.",
                  "zh": "末期（telophase）：两套染色体周围各形成一个新核膜，染色体解凝回染色质；纺锤体解体。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Cytokinesis, the division of the cytoplasm, usually overlaps telophase and physically splits the cell into two. In animal cells a contractile ring of actin pinches the membrane inward, forming a cleavage furrow. In plant cells, whose rigid cell wall cannot pinch, vesicles fuse down the middle to build a new cell plate.",
              "zh": "胞质分裂（cytokinesis）是细胞质的分裂，通常与末期重叠，把细胞实际分成两个。在动物细胞中，肌动蛋白（actin）收缩环使膜向内收缩，形成分裂沟（cleavage furrow）。在具有坚硬细胞壁、无法收缩的植物细胞中，囊泡在中央融合，构建新的细胞板（cell plate）。"
            },
            {
              "type": "h3",
              "en": "Checkpoints and the Cyclin–Cdk Control System",
              "zh": "检查点与细胞周期蛋白–Cdk 控制系统"
            },
            {
              "type": "p",
              "en": "The cell cycle is not a runaway conveyor belt; it is tightly regulated at checkpoints — surveillance points where the cell verifies conditions are right before proceeding. Three are essential for the AP exam:",
              "zh": "细胞周期不是失控的传送带；它在检查点（checkpoints）受到严格调控——这些是监控点，细胞在此确认条件适宜后才继续前进。三个检查点对 AP 考试至关重要："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "G1 checkpoint (the \"restriction point\"): the most important. The cell asks: Is it big enough? Are nutrients and growth signals present? Is the DNA undamaged? If yes, it commits to dividing; if not, it may enter G0.",
                  "zh": "G1 检查点（「限制点」，restriction point）：最重要的一个。细胞在此询问：细胞够大吗？有养分和生长信号吗？DNA 无损伤吗？若答案为是，则承诺进行分裂；若否，可能进入 G0。"
                },
                {
                  "en": "G2 checkpoint: verifies that DNA replication is complete and that the copied DNA is not damaged before the cell enters mitosis.",
                  "zh": "G2 检查点：在细胞进入有丝分裂之前，核实 DNA 复制已完成且复制出的 DNA 未受损。"
                },
                {
                  "en": "M (spindle) checkpoint: during metaphase, it confirms every chromosome is properly attached to spindle fibers from both poles before allowing sister chromatids to separate — preventing daughter cells with the wrong chromosome number.",
                  "zh": "M（纺锤体）检查点：在中期，它确认每条染色体都正确地与来自两极的纺锤丝相连，然后才允许姐妹染色单体分开——防止子细胞染色体数目出错。"
                }
              ]
            },
            {
              "type": "p",
              "en": "What drives the cell past these checkpoints? A pair of molecules working together: cyclins, regulatory proteins whose concentration rises and falls (cycles) through the cell cycle, and cyclin-dependent kinases (Cdks), enzymes that are inactive on their own. A Cdk becomes active only when bound to its cyclin, forming a cyclin–Cdk complex (also called MPF at the G2 checkpoint) that phosphorylates target proteins to trigger the next phase. Because cyclin levels oscillate, the checkpoints open and close on schedule.",
              "zh": "是什么驱动细胞越过这些检查点？一对协同工作的分子：细胞周期蛋白（cyclins），其浓度在整个细胞周期中起伏（循环）的调节蛋白；以及细胞周期蛋白依赖性激酶（Cdks），单独存在时无活性的酶。Cdk 只有与其细胞周期蛋白结合、形成细胞周期蛋白–Cdk 复合物（在 G2 检查点也称 MPF）时才有活性，该复合物磷酸化靶蛋白以触发下一阶段。由于细胞周期蛋白水平呈周期性波动，检查点便按时开启和关闭。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: The Classic Cell-Fusion Experiment",
                "zh": "例题 1：经典的细胞融合实验"
              },
              "problem": {
                "en": "In a famous experiment, a cell in M phase is fused with a cell in G1 phase. The G1 nucleus is immediately forced to condense its chromosomes and enter mitosis — even though its DNA has never been replicated in S phase. What does this reveal about how the cell cycle is controlled?",
                "zh": "在一个著名实验中，一个处于 M 期的细胞与一个处于 G1 期的细胞融合。G1 核立即被迫使其染色体凝聚并进入有丝分裂——尽管它的 DNA 从未在 S 期复制过。这揭示了细胞周期是如何被调控的？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The M-phase cell must contain a diffusible signal — an active cyclin–Cdk complex (MPF) — that can enter the fused cytoplasm and drive any nucleus into mitosis.",
                  "zh": "M 期细胞必定含有一种可扩散的信号——活性的细胞周期蛋白–Cdk 复合物（MPF）——它能进入融合后的细胞质，驱使任何一个核进入有丝分裂。"
                },
                {
                  "type": "p",
                  "en": "This shows the cycle is governed by internal chemical regulators (cytoplasmic molecules), not by an internal clock counting time, and that the presence of the right cyclin–Cdk activity, not the completion of prior steps, dictates progression. It is a key piece of evidence for the cyclin–Cdk model.",
                  "zh": "这表明细胞周期由内部化学调节因子（胞质分子）掌控，而非由计时的内部时钟掌控；决定进程的是正确的细胞周期蛋白–Cdk 活性是否存在，而非前序步骤是否完成。这是细胞周期蛋白–Cdk 模型的关键证据。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "External Controls: Growth Factors and Density",
              "zh": "外部控制：生长因子与密度"
            },
            {
              "type": "p",
              "en": "Cells also listen to their surroundings. A growth factor is a protein released by one cell that stimulates another to pass the G1 checkpoint and divide — this ties the cell cycle back to Unit 4 signaling, since growth factors bind receptors (often RTKs) to launch the transduction pathway. Two further controls appear in culture: density-dependent inhibition (cells stop dividing when they crowd and touch neighbors) and anchorage dependence (most cells divide only when attached to a surface). Cancer cells ignore both.",
              "zh": "细胞也会倾听周围环境。生长因子（growth factor）是由一个细胞释放、刺激另一个细胞越过 G1 检查点并分裂的蛋白质——这把细胞周期与本单元的信号传导联系起来，因为生长因子结合受体（常为 RTK）以启动转导通路。培养中还出现两种控制：密度依赖性抑制（细胞拥挤、彼此接触时停止分裂）和贴壁依赖性（多数细胞只有附着于表面时才分裂）。癌细胞对两者都置之不理。"
            },
            {
              "type": "h3",
              "en": "When Control Is Lost: Cancer",
              "zh": "控制丧失时：癌症"
            },
            {
              "type": "p",
              "en": "Cancer is fundamentally a disease of the cell cycle — cells that divide when they should not. Two categories of genes normally keep division in check, and cancer arises when they are mutated:",
              "zh": "癌症本质上是一种细胞周期疾病——细胞在不该分裂时分裂。正常情况下有两类基因约束着细胞分裂，当它们发生突变时便产生癌症："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Proto-oncogenes normally code for proteins that promote cell division (like growth-factor receptors and cyclins). A gain-of-function mutation turns one into an oncogene — a stuck-on accelerator that drives division constantly. Only one of the two copies needs to mutate, so oncogenes act dominantly.",
                  "zh": "原癌基因（proto-oncogenes）正常编码促进细胞分裂的蛋白质（如生长因子受体和细胞周期蛋白）。功能获得型突变使其变成癌基因（oncogene）——一个卡住的油门，不停地驱动分裂。两个拷贝中只需一个突变即可，因此癌基因呈显性作用。"
                },
                {
                  "en": "Tumor suppressor genes normally code for proteins that inhibit division or trigger repair — the brakes. A loss-of-function mutation disables the brake. Usually both copies must be knocked out for the effect to show.",
                  "zh": "抑癌基因（tumor suppressor genes）正常编码抑制分裂或触发修复的蛋白质——即刹车。功能丧失型突变使刹车失灵。通常两个拷贝都必须失活，效应才会显现。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The most famous tumor suppressor is p53, \"the guardian of the genome.\" When DNA is damaged, p53 halts the cycle at the G1 checkpoint to allow repair, and if the damage is too severe it triggers apoptosis (programmed cell death). A cell with mutated, nonfunctional p53 can replicate damaged DNA and accumulate further mutations unchecked — which is why p53 is mutated in over half of all human cancers. Cancer typically requires multiple mutations (several accelerators stuck on and several brakes broken) accumulating in one cell lineage over time.",
              "zh": "最著名的抑癌基因是 p53，被称为「基因组卫士」。当 DNA 受损时，p53 在 G1 检查点使周期停滞以便修复；若损伤过重，则触发细胞凋亡（apoptosis，程序性细胞死亡）。p53 突变、失去功能的细胞会复制受损的 DNA 并不受约束地累积更多突变——这正是超过一半的人类癌症中 p53 发生突变的原因。癌症通常需要多个突变（若干油门卡住、若干刹车损坏）随时间在同一细胞谱系中累积。"
            },
            {
              "type": "note",
              "en": "AP tip: Distinguish the mutation logic. Oncogenes result from a GAIN of function (one hyperactive copy is enough — dominant, \"gas pedal stuck down\"). Tumor suppressors result from a LOSS of function (usually need both copies broken — recessive, \"brakes cut\"). Mixing these up is the most common cancer-question error.",
              "zh": "AP 提示：区分突变逻辑。癌基因源于功能「获得」（一个过度活跃的拷贝就够了——显性，「油门卡住」）。抑癌基因源于功能「丧失」（通常需两个拷贝都损坏——隐性，「刹车被剪断」）。混淆两者是癌症题最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reasoning About a Checkpoint Failure",
                "zh": "例题 2：推理检查点失效"
              },
              "problem": {
                "en": "A cell has a mutation that inactivates the M (spindle) checkpoint, so cells proceed through anaphase even when some chromosomes are not attached to spindle fibers from both poles. Predict the consequence for the daughter cells and explain why this contributes to cancer.",
                "zh": "某细胞的突变使 M（纺锤体）检查点失活，因此即使有些染色体未与来自两极的纺锤丝相连，细胞也照样通过后期。预测其对子细胞的后果，并解释这为何促进癌症。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The M checkpoint normally waits until every chromosome is correctly attached to both poles. Without it, chromosomes may be pulled unevenly, so daughter cells receive too many or too few chromosomes (aneuploidy).",
                  "zh": "M 检查点正常情况下会等到每条染色体都正确连到两极为止。没有它，染色体可能被不均匀地拉扯，因此子细胞获得过多或过少的染色体（非整倍体，aneuploidy）。"
                },
                {
                  "type": "p",
                  "en": "Incorrect chromosome numbers alter gene dosage — extra copies of proto-oncogenes or loss of tumor suppressors — and cause genomic instability, so still more harmful mutations accumulate with each division. This instability is a driving force in cancer progression.",
                  "zh": "错误的染色体数目改变基因剂量——原癌基因的额外拷贝或抑癌基因的丢失——并造成基因组不稳定，因此每次分裂都会累积更多有害突变。这种不稳定性是癌症进展的驱动力。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A human somatic cell has 46 chromosomes during G1. How many chromosomes and how many DNA molecules (chromatids) does it have at the end of G2, just before mitosis?",
                "zh": "一个人类体细胞在 G1 期有 46 条染色体。在 G2 期末、有丝分裂之前，它有多少条染色体和多少个 DNA 分子（染色单体）？"
              },
              "choices": [
                "92 chromosomes and 92 chromatids",
                "46 chromosomes and 46 chromatids",
                "46 chromosomes and 92 chromatids",
                "23 chromosomes and 46 chromatids"
              ],
              "answer": 2,
              "explanation": {
                "en": "S phase replicates the DNA but does not change chromosome number, so there are still 46 chromosomes — each now made of 2 sister chromatids, giving 92 chromatids (DNA molecules). Choosing 92 chromosomes confuses DNA doubling with chromosome-number doubling.",
                "zh": "S 期复制 DNA 但不改变染色体数目，所以仍是 46 条染色体——每条现在由 2 条姐妹染色单体组成，共 92 条染色单体（DNA 分子）。选 92 条染色体是把 DNA 加倍与染色体数目加倍混为一谈。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "During which stage of mitosis do sister chromatids separate and move toward opposite poles of the cell?",
                "zh": "在有丝分裂的哪个阶段，姐妹染色单体分开并移向细胞的两极？"
              },
              "choices": [
                "Prophase",
                "Metaphase",
                "Anaphase",
                "Telophase"
              ],
              "answer": 2,
              "explanation": {
                "en": "Anaphase is defined by the separation of sister chromatids to opposite poles. Metaphase is only the lineup at the equator; telophase is the reforming of nuclei after separation.",
                "zh": "后期（anaphase）的定义就是姐妹染色单体分向两极。中期只是在赤道排列；末期是分开后核的重新形成。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Cyclin-dependent kinases (Cdks) are present at fairly constant levels throughout the cell cycle, yet they drive the cycle forward only at specific times. What best explains this pattern?",
                "zh": "细胞周期蛋白依赖性激酶（Cdks）在整个细胞周期中含量相当稳定，但它们只在特定时刻推动周期前进。什么最能解释这一现象？"
              },
              "choices": [
                "Cdks are only made during mitosis",
                "Cdks work only in the absence of growth factors",
                "Cdks destroy chromosomes at each checkpoint",
                "Cdks are active only when bound to cyclins, whose levels rise and fall"
              ],
              "answer": 3,
              "explanation": {
                "en": "A Cdk is inactive alone; it becomes active only when bound to a cyclin. Because cyclin concentrations oscillate, Cdk activity — and thus cell-cycle progression — peaks at scheduled points. Cdk levels themselves stay roughly constant.",
                "zh": "Cdk 单独时无活性；只有与细胞周期蛋白结合时才被激活。由于细胞周期蛋白浓度呈周期性波动，Cdk 活性——从而细胞周期的推进——在既定时刻达到峰值。Cdk 本身的含量大致恒定。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The tumor suppressor gene p53 halts the cell cycle when DNA is damaged and can trigger apoptosis. What is the most likely consequence if both copies of p53 are mutated and nonfunctional?",
                "zh": "抑癌基因 p53 在 DNA 受损时使细胞周期停滞，并能触发细胞凋亡。如果 p53 的两个拷贝都突变失效，最可能的后果是什么？"
              },
              "choices": [
                "Cells stop dividing entirely",
                "Cells divide more slowly but with perfect DNA repair",
                "Cells become unable to replicate their DNA",
                "Cells with damaged DNA continue dividing and accumulate further mutations"
              ],
              "answer": 3,
              "explanation": {
                "en": "p53 is a brake that pauses the cycle for repair or triggers cell death. Without it, damaged cells sail through checkpoints, replicate faulty DNA, and pile up mutations — which is why p53 is mutated in over half of human cancers.",
                "zh": "p53 是刹车，可暂停周期以修复或触发细胞死亡。没有它，受损细胞畅通无阻地越过检查点，复制有缺陷的 DNA，累积突变——这正是超过一半人类癌症中 p53 突变的原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Normal cells in a culture dish stop dividing once they form a single crowded layer that covers the surface. Cancer cells keep piling up on top of one another. Which two normal controls are the cancer cells ignoring?",
                "zh": "培养皿中的正常细胞一旦形成覆盖表面的单层拥挤细胞就停止分裂。癌细胞却不断相互堆叠。癌细胞无视了哪两种正常控制？"
              },
              "choices": [
                "Growth factors and cyclins",
                "Apoptosis and DNA replication",
                "The G1 and G2 checkpoints only",
                "Density-dependent inhibition and anchorage dependence"
              ],
              "answer": 3,
              "explanation": {
                "en": "Normal cells stop when crowded (density-dependent inhibition) and divide only when attached (anchorage dependence). Cancer cells override both, piling up and growing without a surface. The other options name unrelated or internal factors.",
                "zh": "正常细胞在拥挤时停止（密度依赖性抑制），并只在附着时分裂（贴壁依赖性）。癌细胞无视两者，堆叠生长且不需表面。其余选项列的是无关或内部因素。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name of the longest phase of interphase in which DNA is replicated? (single letter)",
                "zh": "间期中最关键、进行 DNA 复制的那个时期叫什么？（用一个字母表示）"
              },
              "answer": "S",
              "accept": [
                "s",
                "S",
                "s phase",
                "synthesis"
              ],
              "explanation": {
                "en": "DNA replication occurs in S (synthesis) phase, between G1 and G2. After S phase each chromosome consists of two sister chromatids.",
                "zh": "DNA 复制发生在 S（合成）期，位于 G1 和 G2 之间。S 期后每条染色体由两条姐妹染色单体组成。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A mutated proto-oncogene that becomes permanently active and drives excessive cell division is called a(n) ___. (one word, lowercase)",
                "zh": "一个突变后永久激活、驱动细胞过度分裂的原癌基因被称为___。（英文一个词，小写）"
              },
              "answer": "oncogene",
              "accept": [
                "oncogene",
                "oncogenes"
              ],
              "explanation": {
                "en": "A gain-of-function mutation converts a proto-oncogene (normal promoter of division) into an oncogene, a stuck-on accelerator. Because one active copy suffices, oncogenes act dominantly.",
                "zh": "功能获得型突变把原癌基因（正常的分裂促进者）转变为癌基因，一个卡住的油门。由于一个活性拷贝就足够，癌基因呈显性作用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If interphase takes about 18 hours and mitosis takes about 2 hours in a 20-hour cell cycle, what fraction of the cycle is spent in mitosis? Give your answer as a decimal.",
                "zh": "若在一个 20 小时的细胞周期中，间期约需 18 小时、有丝分裂约需 2 小时，那么细胞周期中处于有丝分裂的比例是多少？用小数作答。"
              },
              "answer": "0.1",
              "accept": [
                "0.1",
                "0.10",
                ".1",
                "10%"
              ],
              "explanation": {
                "en": "2 hours of mitosis divided by the 20-hour cycle equals 0.1 (10%). This matches the general rule that a cell spends roughly 90% of its cycle in interphase and only about 10% dividing.",
                "zh": "2 小时有丝分裂除以 20 小时周期等于 0.1（10%）。这符合一般规律：细胞约 90% 的周期处于间期，仅约 10% 在分裂。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-5-heredity",
      "title": "Unit 5: Heredity",
      "titleZh": "第五单元：遗传",
      "lessons": [
        {
          "id": "meiosis-and-genetic-variation",
          "title": "Meiosis and Genetic Variation",
          "titleZh": "减数分裂与遗传变异",
          "content": [
            {
              "type": "h2",
              "en": "Why Sexual Reproduction Needs Meiosis",
              "zh": "为什么有性生殖需要减数分裂"
            },
            {
              "type": "p",
              "en": "Sexually reproducing organisms make gametes (sperm and eggs) that fuse at fertilization. If gametes had the full chromosome number, the number would double every generation. Meiosis (减数分裂) solves this by halving the chromosome number, producing haploid gametes from a diploid cell. Fertilization then restores the diploid number. Along the way, meiosis is also the engine of genetic variation.",
              "zh": "进行有性生殖的生物产生配子（精子和卵子），它们在受精时融合。如果配子具有完整的染色体数目，那么每一代染色体数目都会加倍。减数分裂（meiosis）通过将染色体数目减半来解决这个问题，由一个二倍体细胞产生单倍体配子。随后受精又恢复了二倍体数目。在此过程中，减数分裂也是遗传变异的引擎。"
            },
            {
              "type": "h3",
              "en": "Key Vocabulary: Ploidy and Chromosome Structure",
              "zh": "关键词汇：倍性与染色体结构"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Homologous chromosomes (同源染色体): a matched pair, one from each parent, carrying the same genes at the same loci but possibly different alleles.",
                  "zh": "同源染色体（homologous chromosomes）：一对配对的染色体，分别来自父母双方，在相同基因座上携带相同的基因，但等位基因可能不同。"
                },
                {
                  "en": "Sister chromatids (姐妹染色单体): two identical copies of one chromosome, produced by DNA replication and joined at the centromere.",
                  "zh": "姐妹染色单体（sister chromatids）：一条染色体的两份相同拷贝，由 DNA 复制产生并在着丝粒处连接。"
                },
                {
                  "en": "Diploid (2n, 二倍体): cells with two sets of chromosomes (e.g. human somatic cells, 2n = 46). Haploid (n, 单倍体): one set (human gametes, n = 23).",
                  "zh": "二倍体（2n，diploid）：含两套染色体的细胞（如人的体细胞，2n = 46）。单倍体（n，haploid）：含一套染色体（人的配子，n = 23）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Do not confuse homologous chromosomes with sister chromatids. Homologs carry the SAME genes but may have DIFFERENT alleles and come from different parents; sister chromatids are IDENTICAL copies of one chromosome. This distinction is the key to understanding what separates in meiosis I versus meiosis II.",
              "zh": "AP 提示：不要混淆同源染色体与姐妹染色单体。同源染色体携带相同的基因，但等位基因可能不同，且来自不同的亲本；姐妹染色单体则是同一条染色体的相同拷贝。这一区别是理解减数第一次分裂与第二次分裂中分开的对象的关键。"
            },
            {
              "type": "h3",
              "en": "Meiosis I: The Reductional Division",
              "zh": "减数第一次分裂：减数分裂"
            },
            {
              "type": "p",
              "en": "DNA replicates once before meiosis (during S phase), so each chromosome enters as two sister chromatids. In prophase I, homologous chromosomes pair up (synapsis) forming tetrads, and crossing over occurs. In metaphase I, tetrads line up at the metaphase plate. In anaphase I, homologous chromosomes are pulled apart, but sister chromatids stay together. The result: two haploid cells, each chromosome still made of two chromatids. Because homologs (not chromatids) separate, meiosis I reduces the chromosome number from 2n to n.",
              "zh": "减数分裂前 DNA 复制一次（在 S 期），因此每条染色体进入时都由两条姐妹染色单体组成。前期 I 中，同源染色体配对（联会）形成四分体，并发生交叉互换。中期 I 中，四分体排列在赤道板上。后期 I 中，同源染色体被拉开，但姐妹染色单体仍连在一起。结果是两个单倍体细胞，每条染色体仍由两条染色单体组成。由于分开的是同源染色体（而非染色单体），减数第一次分裂将染色体数目从 2n 减为 n。"
            },
            {
              "type": "h3",
              "en": "Meiosis II: The Equational Division",
              "zh": "减数第二次分裂：等数分裂"
            },
            {
              "type": "p",
              "en": "Meiosis II resembles mitosis but starts with haploid cells and has no DNA replication beforehand. In anaphase II, sister chromatids finally separate. The two haploid cells become four haploid cells, each with single (unreplicated) chromosomes. One diploid cell has yielded four genetically distinct haploid gametes.",
              "zh": "减数第二次分裂类似于有丝分裂，但起始于单倍体细胞，且之前没有 DNA 复制。后期 II 中，姐妹染色单体最终分开。两个单倍体细胞变为四个单倍体细胞，每个含单条（未复制的）染色体。一个二倍体细胞最终产生了四个遗传上各不相同的单倍体配子。"
            },
            {
              "type": "h3",
              "en": "How Meiosis Differs From Mitosis",
              "zh": "减数分裂与有丝分裂的区别"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Mitosis: one division, produces two diploid cells genetically identical to the parent (for growth and repair). Meiosis: two divisions, produces four haploid, genetically varied gametes.",
                  "zh": "有丝分裂：一次分裂，产生两个与亲代遗传上相同的二倍体细胞（用于生长和修复）。减数分裂：两次分裂，产生四个遗传上有变异的单倍体配子。"
                },
                {
                  "en": "Only in meiosis do homologs synapse and cross over (prophase I) and line up as pairs (metaphase I). In mitosis, homologs behave independently and never pair.",
                  "zh": "只有在减数分裂中，同源染色体才会联会并交叉互换（前期 I），并成对排列（中期 I）。有丝分裂中，同源染色体独立行动，从不配对。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Three Sources of Genetic Variation",
              "zh": "遗传变异的三个来源"
            },
            {
              "type": "p",
              "en": "Sexual reproduction shuffles genes in three ways, making offspring genetically unique (except identical twins). This variation is the raw material for natural selection.",
              "zh": "有性生殖以三种方式重组基因，使后代在遗传上独一无二（同卵双胞胎除外）。这种变异是自然选择的原料。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Crossing over / recombination (交叉互换/重组): in prophase I, homologous chromosomes exchange segments at chiasmata, producing chromosomes with new combinations of alleles.",
                  "zh": "交叉互换/重组（crossing over / recombination）：前期 I 中，同源染色体在交叉点交换片段，产生具有新等位基因组合的染色体。"
                },
                {
                  "en": "Independent assortment (自由组合): in metaphase I, each homologous pair orients randomly, so maternal and paternal chromosomes are distributed independently. With n pairs, there are $2^n$ possible gamete combinations (over 8 million in humans).",
                  "zh": "自由组合（independent assortment）：中期 I 中，每对同源染色体随机取向，因此母源和父源染色体独立分配。有 n 对染色体时，配子组合可能有 $2^n$ 种（人类超过 800 万种）。"
                },
                {
                  "en": "Random fertilization (随机受精): any of millions of genetically distinct sperm can fertilize any of millions of distinct eggs.",
                  "zh": "随机受精（random fertilization）：数百万个遗传上不同的精子中的任何一个都可以使数百万个不同卵子中的任何一个受精。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Crossing over happens in PROPHASE I; independent assortment happens in METAPHASE I. A common trap answer places crossing over in meiosis II—but by then homologs are already separated, so they cannot exchange segments.",
              "zh": "AP 提示：交叉互换发生在前期 I；自由组合发生在中期 I。一个常见的陷阱选项把交叉互换放在减数第二次分裂——但那时同源染色体已经分开，无法交换片段。"
            },
            {
              "type": "h2",
              "en": "Nondisjunction and Its Consequences",
              "zh": "不分离及其后果"
            },
            {
              "type": "p",
              "en": "Nondisjunction (不分离) occurs when chromosomes fail to separate properly: homologs fail to separate in anaphase I, or sister chromatids fail to separate in anaphase II. The result is aneuploidy—gametes with an extra chromosome (n+1) or a missing chromosome (n-1). After fertilization this gives a trisomy (2n+1) or monosomy (2n-1). Trisomy 21 causes Down syndrome; sex-chromosome examples include XXY (Klinefelter) and X0 (Turner).",
              "zh": "不分离（nondisjunction）发生在染色体未能正确分开时：同源染色体在后期 I 未分开，或姐妹染色单体在后期 II 未分开。结果是非整倍体——配子多出一条染色体（n+1）或缺失一条染色体（n-1）。受精后形成三体（2n+1）或单体（2n-1）。21 三体导致唐氏综合征；性染色体的例子包括 XXY（克兰费尔特综合征）和 X0（特纳综合征）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Counting Chromosomes Through Meiosis",
                "zh": "例题 1：追踪减数分裂中的染色体"
              },
              "problem": {
                "en": "A cell from an organism with 2n = 8 enters meiosis. How many chromosomes and how many chromatids are in each cell (a) at the start of meiosis I after replication, and (b) at the end of meiosis II?",
                "zh": "某生物（2n = 8）的一个细胞进入减数分裂。请问在（a）复制后减数第一次分裂开始时，和（b）减数第二次分裂结束时，每个细胞含多少条染色体和多少条染色单体？"
              },
              "solution": [
                {
                  "en": "After S phase, the cell still has 8 chromosomes, but each is duplicated into 2 sister chromatids, so 16 chromatids total.",
                  "zh": "S 期后，细胞仍有 8 条染色体，但每条都复制为 2 条姐妹染色单体，故共 16 条染色单体。",
                  "type": "p"
                },
                {
                  "en": "Meiosis I separates homologs → each of 2 cells has 4 chromosomes (8 chromatids). Meiosis II separates sister chromatids → each of 4 cells has 4 single chromosomes (4 chromatids). The haploid number is n = 4.",
                  "zh": "减数第一次分裂分开同源染色体 → 2 个细胞每个含 4 条染色体（8 条染色单体）。减数第二次分裂分开姐妹染色单体 → 4 个细胞每个含 4 条单一染色体（4 条染色单体）。单倍体数为 n = 4。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Counting Gamete Combinations",
                "zh": "例题 2：计算配子组合数"
              },
              "problem": {
                "en": "An organism has 2n = 6 (three homologous pairs). Ignoring crossing over, how many genetically distinct gametes can independent assortment alone produce?",
                "zh": "某生物 2n = 6（三对同源染色体）。忽略交叉互换，仅自由组合能产生多少种遗传上不同的配子？"
              },
              "solution": [
                {
                  "en": "Each pair can orient two ways, independently of the others, so the number of combinations is $2^n$ where n is the number of pairs.",
                  "zh": "每对染色体可有两种取向，且彼此独立，故组合数为 $2^n$，其中 n 为染色体对数。",
                  "type": "p"
                },
                {
                  "type": "math",
                  "tex": "2^{n} = 2^{3} = 8"
                },
                {
                  "en": "Crossing over would increase this variety even further, effectively making the number of possible gametes nearly limitless.",
                  "zh": "交叉互换会进一步增加多样性，实际上使可能的配子数量几乎无穷。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "During which phase of meiosis do homologous chromosomes separate from each other?",
                "zh": "同源染色体在减数分裂的哪个时期彼此分开？"
              },
              "choices": [
                "Anaphase I",
                "Anaphase II",
                "Metaphase I",
                "Prophase II"
              ],
              "answer": 0,
              "explanation": {
                "en": "Homologs separate in anaphase I (the reductional division), which lowers the chromosome number from 2n to n. Sister chromatids separate later, in anaphase II.",
                "zh": "同源染色体在后期 I（减数分裂）分开，使染色体数目从 2n 降为 n。姐妹染色单体则在稍后的后期 II 分开。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Crossing over, a major source of genetic variation, occurs during which stage?",
                "zh": "作为遗传变异主要来源的交叉互换发生在哪个阶段？"
              },
              "choices": [
                "Metaphase II",
                "Prophase I",
                "Anaphase I",
                "Telophase II"
              ],
              "answer": 1,
              "explanation": {
                "en": "Crossing over occurs in prophase I, when homologous chromosomes synapse into tetrads and exchange segments at chiasmata. By meiosis II homologs are already separated and cannot exchange segments.",
                "zh": "交叉互换发生在前期 I，此时同源染色体联会成四分体并在交叉点交换片段。到减数第二次分裂时同源染色体已分开，无法交换片段。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly distinguishes homologous chromosomes from sister chromatids?",
                "zh": "下列哪项正确区分了同源染色体与姐妹染色单体？"
              },
              "choices": [
                "Sister chromatids come from different parents, while homologs are identical copies",
                "Homologs carry the same genes but possibly different alleles; sister chromatids are identical copies",
                "Homologs are always genetically identical; sister chromatids always differ",
                "Both are produced only by crossing over"
              ],
              "answer": 1,
              "explanation": {
                "en": "Homologous chromosomes carry the same genes at the same loci but may have different alleles (one from each parent). Sister chromatids are identical copies made by DNA replication. The other options reverse or confuse these facts.",
                "zh": "同源染色体在相同基因座携带相同的基因，但等位基因可能不同（分别来自父母）。姐妹染色单体是由 DNA 复制产生的相同拷贝。其余选项颠倒或混淆了这些事实。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How does meiosis differ from mitosis?",
                "zh": "减数分裂与有丝分裂有何不同？"
              },
              "choices": [
                "Meiosis produces two diploid cells identical to the parent",
                "Mitosis involves synapsis and crossing over of homologs",
                "Meiosis involves two divisions and produces four haploid cells",
                "Both produce genetically identical daughter cells"
              ],
              "answer": 2,
              "explanation": {
                "en": "Meiosis has two divisions yielding four haploid, genetically varied gametes. Mitosis has one division producing two identical diploid cells and never involves synapsis or crossing over of homologs.",
                "zh": "减数分裂有两次分裂，产生四个单倍体、遗传上有变异的配子。有丝分裂只有一次分裂，产生两个相同的二倍体细胞，且从不涉及同源染色体的联会或交叉互换。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A gamete with an extra chromosome (n+1) most likely resulted from:",
                "zh": "一个多出一条染色体的配子（n+1）最可能由什么造成？"
              },
              "choices": [
                "Normal independent assortment",
                "Crossing over between homologs",
                "Random fertilization",
                "Nondisjunction"
              ],
              "answer": 3,
              "explanation": {
                "en": "Nondisjunction—failure of chromosomes or chromatids to separate—produces gametes with an extra (n+1) or missing (n-1) chromosome. The other processes shuffle alleles but keep the correct chromosome number.",
                "zh": "不分离——染色体或染色单体未能分开——产生多一条（n+1）或少一条（n-1）染色体的配子。其余过程重组等位基因，但保持正确的染色体数目。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An organism has 2n = 10. Ignoring crossing over, how many genetically distinct gametes can independent assortment produce? Give a number.",
                "zh": "某生物 2n = 10。忽略交叉互换，自由组合能产生多少种遗传上不同的配子？给出数字。"
              },
              "answer": "32",
              "accept": [
                "2^5",
                "32 gametes"
              ],
              "explanation": {
                "en": "With n = 5 pairs, combinations = $2^n = 2^5 = 32$.",
                "zh": "n = 5 对时，组合数为 $2^n = 2^5 = 32$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A diploid cell has 2n = 12. How many chromosomes are in each haploid cell at the end of meiosis? Give a number.",
                "zh": "一个二倍体细胞 2n = 12。减数分裂结束时每个单倍体细胞含多少条染色体？给出数字。"
              },
              "answer": "6",
              "accept": [
                "six",
                "n=6"
              ],
              "explanation": {
                "en": "Meiosis halves the chromosome number: n = 12 / 2 = 6 chromosomes per haploid gamete.",
                "zh": "减数分裂使染色体数目减半：n = 12 / 2 = 6，即每个单倍体配子含 6 条染色体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the term for gametes or cells that have an abnormal number of chromosomes due to nondisjunction? Give the term.",
                "zh": "因不分离而导致染色体数目异常的配子或细胞叫什么？给出术语。"
              },
              "answer": "aneuploidy",
              "accept": [
                "aneuploid",
                "非整倍体",
                "aneuploidy"
              ],
              "explanation": {
                "en": "Aneuploidy is having an abnormal chromosome number, such as trisomy (2n+1) or monosomy (2n-1), caused by nondisjunction during meiosis.",
                "zh": "非整倍体指染色体数目异常，如三体（2n+1）或单体（2n-1），由减数分裂中的不分离引起。"
              }
            }
          ]
        },
        {
          "id": "mendelian-genetics",
          "title": "Mendelian Genetics",
          "titleZh": "孟德尔遗传学",
          "content": [
            {
              "type": "h2",
              "en": "Mendel's Experiments and Laws",
              "zh": "孟德尔的实验与定律"
            },
            {
              "type": "p",
              "en": "Gregor Mendel studied pea plants and, without knowing about DNA, deduced that inheritance works through discrete \"factors\" (now called genes). By carefully counting offspring across generations, he uncovered predictable ratios that became the foundation of genetics. His work depended on tracking traits from a true-breeding parental (P) generation, through the first filial (F1) generation, to the F2 generation.",
              "zh": "格里高尔·孟德尔研究豌豆，在不了解 DNA 的情况下推断出遗传是通过离散的「因子」（现称基因）进行的。通过在各世代仔细计数后代，他发现了可预测的比例，成为遗传学的基础。他的工作依赖于追踪性状：从纯合的亲本（P）代，经第一子代（F1），到第二子代（F2）。"
            },
            {
              "type": "h3",
              "en": "Key Terms",
              "zh": "关键术语"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Gene (基因): a unit of heredity. Allele (等位基因): an alternative version of a gene (e.g. purple vs. white flower).",
                  "zh": "基因（gene）：遗传的单位。等位基因（allele）：基因的不同版本（如紫花与白花）。"
                },
                {
                  "en": "Genotype (基因型): the allele combination (e.g. Pp). Phenotype (表现型): the observable trait (e.g. purple flowers).",
                  "zh": "基因型（genotype）：等位基因组合（如 Pp）。表现型（phenotype）：可观察的性状（如紫花）。"
                },
                {
                  "en": "Homozygous (纯合): two identical alleles (PP or pp). Heterozygous (杂合): two different alleles (Pp).",
                  "zh": "纯合（homozygous）：两个相同的等位基因（PP 或 pp）。杂合（heterozygous）：两个不同的等位基因（Pp）。"
                },
                {
                  "en": "Dominant (显性): the allele expressed in a heterozygote (uppercase, P). Recessive (隐性): masked in a heterozygote, expressed only when homozygous (lowercase, p).",
                  "zh": "显性（dominant）：杂合子中表现的等位基因（大写，P）。隐性（recessive）：杂合子中被掩盖，仅在纯合时表现（小写，p）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Law of Segregation",
              "zh": "分离定律"
            },
            {
              "type": "p",
              "en": "The Law of Segregation (分离定律) states that the two alleles for a trait separate during gamete formation, so each gamete carries only one allele. This is the physical consequence of homologs separating in anaphase I of meiosis. A heterozygous Pp parent therefore makes 1/2 P gametes and 1/2 p gametes.",
              "zh": "分离定律（Law of Segregation）指出，一个性状的两个等位基因在配子形成时分开，因此每个配子只携带一个等位基因。这是减数分裂后期 I 中同源染色体分开的物理结果。因此杂合的 Pp 亲本产生 1/2 携 P 的配子和 1/2 携 p 的配子。"
            },
            {
              "type": "h3",
              "en": "Law of Independent Assortment",
              "zh": "自由组合定律"
            },
            {
              "type": "p",
              "en": "The Law of Independent Assortment (自由组合定律) states that alleles of different genes assort independently of one another during gamete formation—provided the genes are on different chromosomes (or far apart on the same chromosome). This is why a dihybrid cross of two traits gives the 9:3:3:1 phenotype ratio. It reflects the random orientation of homologous pairs in metaphase I.",
              "zh": "自由组合定律（Law of Independent Assortment）指出，不同基因的等位基因在配子形成时彼此独立组合——前提是这些基因位于不同的染色体上（或在同一染色体上相距很远）。这就是两性状双因子杂交产生 9:3:3:1 表现型比的原因。它反映了中期 I 中同源染色体对的随机取向。"
            },
            {
              "type": "note",
              "en": "AP tip: Independent assortment applies to genes on DIFFERENT chromosomes. Genes located close together on the SAME chromosome are 'linked' and tend to be inherited together, violating the 9:3:3:1 expectation. You will see this in the next lesson.",
              "zh": "AP 提示：自由组合适用于位于不同染色体上的基因。位于同一条染色体上且靠得很近的基因是「连锁的」，倾向于一起遗传，从而违反 9:3:3:1 的预期。下一课会讲到这一点。"
            },
            {
              "type": "h2",
              "en": "Punnett Squares and Crosses",
              "zh": "庞纳特方格与杂交"
            },
            {
              "type": "p",
              "en": "A Punnett square (庞纳特方格) predicts offspring genotypes by placing each parent's possible gametes along the two edges and filling in combinations. A monohybrid cross tracks one gene; a dihybrid cross tracks two.",
              "zh": "庞纳特方格（Punnett square）通过将每个亲本可能的配子放在两条边上并填入组合来预测后代基因型。单因子杂交追踪一个基因；双因子杂交追踪两个基因。"
            },
            {
              "type": "h3",
              "en": "Test Crosses",
              "zh": "测交"
            },
            {
              "type": "p",
              "en": "An organism showing the dominant phenotype could be homozygous (PP) or heterozygous (Pp). A test cross (测交) crosses it with a homozygous recessive (pp). If any recessive offspring appear, the unknown parent must be heterozygous (Pp); if all offspring show the dominant trait, it is likely homozygous (PP).",
              "zh": "表现显性性状的个体可能是纯合（PP）或杂合（Pp）。测交（test cross）将其与隐性纯合子（pp）杂交。若出现任何隐性后代，则未知亲本必为杂合（Pp）；若所有后代都表现显性性状，则很可能为纯合（PP）。"
            },
            {
              "type": "h3",
              "en": "Probability Rules",
              "zh": "概率法则"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Multiplication rule (乘法法则): the probability of two independent events BOTH happening is the product of their probabilities (use for \"and\").",
                  "zh": "乘法法则（multiplication rule）：两个独立事件都发生的概率等于它们概率的乘积（用于「且」）。"
                },
                {
                  "en": "Addition rule (加法法则): the probability of EITHER of two mutually exclusive events is the sum of their probabilities (use for \"or\").",
                  "zh": "加法法则（addition rule）：两个互斥事件中任一个发生的概率等于它们概率之和（用于「或」）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: For a dihybrid cross, you do not have to draw a 16-box square. Use the multiplication rule: solve each gene separately as a monohybrid cross (each gives 3/4 dominant : 1/4 recessive), then multiply the probabilities. This is faster and less error-prone.",
              "zh": "AP 提示：做双因子杂交时不必画 16 格方格。用乘法法则：把每个基因当作单因子杂交分别求解（每个给出 3/4 显性 : 1/4 隐性），再将概率相乘。这样更快且不易出错。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A Dihybrid Cross",
                "zh": "例题 1：双因子杂交"
              },
              "problem": {
                "en": "In pea plants, round (R) is dominant to wrinkled (r), and yellow (Y) is dominant to green (y). Two dihybrid plants (RrYy) are crossed. What fraction of offspring are round AND yellow?",
                "zh": "豌豆中，圆粒（R）对皱粒（r）显性，黄色（Y）对绿色（y）显性。两株双因子杂合植株（RrYy）杂交。多少比例的后代既圆粒又黄色？"
              },
              "solution": [
                {
                  "en": "Solve each gene as a monohybrid cross. Rr × Rr gives 3/4 round; Yy × Yy gives 3/4 yellow. Because the genes assort independently, multiply the probabilities.",
                  "zh": "将每个基因当作单因子杂交求解。Rr × Rr 得 3/4 圆粒；Yy × Yy 得 3/4 黄色。因基因自由组合，将概率相乘。",
                  "type": "p"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{round and yellow}) = \\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}"
                },
                {
                  "en": "This is the \"9\" in the classic 9:3:3:1 dihybrid ratio (9 round-yellow : 3 round-green : 3 wrinkled-yellow : 1 wrinkled-green).",
                  "zh": "这正是经典 9:3:3:1 双因子比例中的「9」（9 圆粒黄色 : 3 圆粒绿色 : 3 皱粒黄色 : 1 皱粒绿色）。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Probability of a Specific Genotype",
                "zh": "例题 2：特定基因型的概率"
              },
              "problem": {
                "en": "A cross is AaBb × AaBb, where the genes assort independently. What is the probability that an offspring is homozygous recessive at both genes (aabb)?",
                "zh": "杂交 AaBb × AaBb，两基因自由组合。后代在两个基因上都是隐性纯合（aabb）的概率是多少？"
              },
              "solution": [
                {
                  "en": "For gene A: Aa × Aa gives 1/4 aa. For gene B: Bb × Bb gives 1/4 bb. Multiply because we need aa AND bb.",
                  "zh": "基因 A：Aa × Aa 得 1/4 aa。基因 B：Bb × Bb 得 1/4 bb。因需要 aa 且 bb，故相乘。",
                  "type": "p"
                },
                {
                  "type": "math",
                  "tex": "P(aabb) = \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}"
                },
                {
                  "en": "This matches the \"1\" in the 9:3:3:1 ratio—the double-recessive class.",
                  "zh": "这与 9:3:3:1 比例中的「1」相符——即双隐性类别。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A pea plant with genotype Pp is best described as:",
                "zh": "基因型为 Pp 的豌豆植株最恰当的描述是："
              },
              "choices": [
                "Homozygous dominant",
                "Homozygous recessive",
                "Heterozygous",
                "Having two recessive alleles"
              ],
              "answer": 2,
              "explanation": {
                "en": "Pp has two different alleles, so it is heterozygous. It shows the dominant phenotype because P masks p. Homozygous would be PP or pp.",
                "zh": "Pp 有两个不同的等位基因，故为杂合。因为 P 掩盖 p，它表现显性表现型。纯合则为 PP 或 pp。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Mendel's Law of Segregation is physically explained by which event in meiosis?",
                "zh": "孟德尔的分离定律在物理上由减数分裂中的哪一事件解释？"
              },
              "choices": [
                "Sister chromatids separating in anaphase II",
                "Homologous chromosomes separating in anaphase I",
                "Crossing over in prophase I",
                "DNA replication in S phase"
              ],
              "answer": 1,
              "explanation": {
                "en": "Segregation of the two alleles reflects homologous chromosomes (each carrying one allele) separating in anaphase I, so each gamete receives just one allele.",
                "zh": "两个等位基因的分离反映了同源染色体（各携带一个等位基因）在后期 I 分开，因此每个配子只接受一个等位基因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A monohybrid cross Aa × Aa produces offspring in what phenotypic ratio (A dominant to a)?",
                "zh": "单因子杂交 Aa × Aa 产生的后代表现型比例是多少（A 对 a 显性）？"
              },
              "choices": [
                "1:1",
                "3:1",
                "9:3:3:1",
                "1:2:1"
              ],
              "answer": 1,
              "explanation": {
                "en": "Aa × Aa gives genotypes 1 AA : 2 Aa : 1 aa. Because AA and Aa both show the dominant phenotype, the phenotype ratio is 3 dominant : 1 recessive. (1:2:1 is the genotype ratio.)",
                "zh": "Aa × Aa 得基因型 1 AA : 2 Aa : 1 aa。因 AA 和 Aa 都表现显性，故表现型比为 3 显性 : 1 隐性。（1:2:1 是基因型比。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A plant shows the dominant phenotype but its genotype is unknown. Which cross best determines whether it is homozygous or heterozygous?",
                "zh": "某植株表现显性性状但基因型未知。哪种杂交最能确定它是纯合还是杂合？"
              },
              "choices": [
                "Cross it with a homozygous dominant plant",
                "Cross it with an identical dominant plant",
                "Cross it with a homozygous recessive plant",
                "Self-pollinate only once"
              ],
              "answer": 2,
              "explanation": {
                "en": "A test cross uses a homozygous recessive (aa) partner. Any recessive offspring reveal the unknown parent carries a recessive allele (Aa). Crossing with a dominant plant would mask the recessive allele.",
                "zh": "测交使用隐性纯合（aa）配偶。任何隐性后代都表明未知亲本携带隐性等位基因（Aa）。与显性植株杂交则会掩盖隐性等位基因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a dihybrid cross AaBb × AaBb (independent assortment), what fraction of offspring show both dominant traits?",
                "zh": "双因子杂交 AaBb × AaBb（自由组合）中，多少比例的后代同时表现两个显性性状？"
              },
              "choices": [
                "1/16",
                "3/16",
                "9/16",
                "1/4"
              ],
              "answer": 2,
              "explanation": {
                "en": "Each gene gives 3/4 dominant. By the multiplication rule, 3/4 × 3/4 = 9/16 show both dominant traits—the \"9\" of the 9:3:3:1 ratio.",
                "zh": "每个基因给出 3/4 显性。由乘法法则，3/4 × 3/4 = 9/16 同时表现两个显性性状——即 9:3:3:1 中的「9」。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the cross Aa × aa, what fraction of offspring are expected to show the recessive phenotype? Give a fraction or decimal.",
                "zh": "杂交 Aa × aa 中，预期多少比例的后代表现隐性性状？给出分数或小数。"
              },
              "answer": "1/2",
              "accept": [
                "0.5",
                "50%",
                "½"
              ],
              "explanation": {
                "en": "Aa × aa gives 1/2 Aa (dominant) and 1/2 aa (recessive). So half the offspring are recessive.",
                "zh": "Aa × aa 得 1/2 Aa（显性）和 1/2 aa（隐性）。故一半后代为隐性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the cross AaBb × AaBb (independent assortment), what is the probability an offspring is aabb? Give a fraction.",
                "zh": "杂交 AaBb × AaBb（自由组合）中，后代为 aabb 的概率是多少？给出分数。"
              },
              "answer": "1/16",
              "accept": [
                "0.0625",
                "6.25%"
              ],
              "explanation": {
                "en": "P(aa) = 1/4 and P(bb) = 1/4. By the multiplication rule, 1/4 × 1/4 = 1/16.",
                "zh": "P(aa) = 1/4，P(bb) = 1/4。由乘法法则，1/4 × 1/4 = 1/16。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A heterozygous plant (Rr) is self-crossed. Out of 400 offspring, how many are expected to be homozygous recessive (rr)? Give a number.",
                "zh": "一株杂合植株（Rr）自交。400 个后代中预期有多少是隐性纯合（rr）？给出数字。"
              },
              "answer": "100",
              "accept": [
                "100 offspring"
              ],
              "explanation": {
                "en": "Rr × Rr gives 1/4 rr. 1/4 × 400 = 100 homozygous recessive offspring.",
                "zh": "Rr × Rr 得 1/4 rr。1/4 × 400 = 100 个隐性纯合后代。"
              }
            }
          ]
        },
        {
          "id": "non-mendelian-inheritance",
          "title": "Non-Mendelian Inheritance and Chromosomal Basis",
          "titleZh": "非孟德尔遗传与染色体基础",
          "content": [
            {
              "type": "h2",
              "en": "Beyond Simple Dominance",
              "zh": "超越简单显性"
            },
            {
              "type": "p",
              "en": "Mendel's simple dominant/recessive model explains many traits, but real inheritance is often richer. Several patterns extend or modify Mendel's rules without contradicting the underlying behavior of chromosomes in meiosis.",
              "zh": "孟德尔的简单显性/隐性模型解释了许多性状，但真实的遗传往往更为丰富。若干遗传模式在不违背减数分裂中染色体基本行为的前提下，扩展或修正了孟德尔的规则。"
            },
            {
              "type": "h3",
              "en": "Incomplete Dominance and Codominance",
              "zh": "不完全显性与共显性"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Incomplete dominance (不完全显性): the heterozygote shows a blended, intermediate phenotype. A red (RR) × white (WW) snapdragon gives pink (RW) offspring.",
                  "zh": "不完全显性（incomplete dominance）：杂合子表现出混合的中间表现型。红花（RR）× 白花（WW）金鱼草产生粉花（RW）后代。"
                },
                {
                  "en": "Codominance (共显性): both alleles are fully and separately expressed in the heterozygote. In AB blood type, both A and B antigens appear; roan cattle show both red and white hairs.",
                  "zh": "共显性（codominance）：两个等位基因在杂合子中都完全且各自表达。AB 血型中同时出现 A 和 B 抗原；沙毛牛同时显示红毛和白毛。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Incomplete dominance BLENDS (pink); codominance shows BOTH phenotypes at once, side by side (AB blood, roan coat). Do not call a blend codominant. In both cases the F2 phenotype ratio becomes 1:2:1, matching the genotype ratio.",
              "zh": "AP 提示：不完全显性是混合（粉色）；共显性是同时并列表现两种表现型（AB 血型、沙毛）。不要把混合叫作共显性。两种情况下 F2 表现型比都变为 1:2:1，与基因型比一致。"
            },
            {
              "type": "h3",
              "en": "Multiple Alleles and the ABO Blood Type",
              "zh": "复等位基因与 ABO 血型"
            },
            {
              "type": "p",
              "en": "A gene can have more than two alleles in a population (though any individual still has only two). The ABO blood group has three alleles: $I^A$ and $I^B$ are codominant to each other and both dominant to the recessive $i$. So genotype $I^A i$ is type A, $I^A I^B$ is type AB, and $ii$ is type O. This single example combines multiple alleles, codominance, and recessiveness.",
              "zh": "一个基因在群体中可以有两个以上的等位基因（尽管任一个体仍只有两个）。ABO 血型有三个等位基因：$I^A$ 与 $I^B$ 彼此共显性，且都对隐性的 $i$ 显性。因此基因型 $I^A i$ 为 A 型，$I^A I^B$ 为 AB 型，$ii$ 为 O 型。这个例子同时体现了复等位基因、共显性和隐性。"
            },
            {
              "type": "h3",
              "en": "Pleiotropy, Polygenic Traits, and Epistasis",
              "zh": "多效性、多基因性状与上位效应"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Pleiotropy (多效性): one gene affects many traits. The sickle-cell allele changes hemoglobin, affecting blood cell shape, oxygen delivery, pain, and organ function.",
                  "zh": "多效性（pleiotropy）：一个基因影响多个性状。镰状细胞等位基因改变血红蛋白，影响红细胞形状、氧气输送、疼痛和器官功能。"
                },
                {
                  "en": "Polygenic traits (多基因性状): many genes contribute to one trait, giving continuous variation (e.g. human height, skin color). These produce bell-curve distributions.",
                  "zh": "多基因性状（polygenic traits）：多个基因共同决定一个性状，产生连续变异（如人的身高、肤色）。它们呈钟形分布。"
                },
                {
                  "en": "Epistasis (上位效应): one gene masks or modifies the expression of another gene. In Labrador coat color, one gene (e/e) can block pigment deposition regardless of the black/brown gene.",
                  "zh": "上位效应（epistasis）：一个基因掩盖或修饰另一个基因的表达。拉布拉多犬毛色中，一个基因（e/e）无论黑/棕基因如何都能阻止色素沉积。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Distinguish pleiotropy (ONE gene → MANY traits) from polygenic inheritance (MANY genes → ONE trait). The direction of the \"one/many\" relationship is exactly reversed—a favorite exam trap.",
              "zh": "AP 提示：区分多效性（一个基因 → 多个性状）与多基因遗传（多个基因 → 一个性状）。「一/多」关系的方向正好相反——这是常见的考试陷阱。"
            },
            {
              "type": "h2",
              "en": "The Chromosomal Basis of Inheritance",
              "zh": "遗传的染色体基础"
            },
            {
              "type": "h3",
              "en": "Sex-Linked Inheritance",
              "zh": "伴性遗传"
            },
            {
              "type": "p",
              "en": "In humans, females are XX and males are XY. Genes on the X chromosome show sex-linked (伴性) inheritance. For an X-linked recessive trait (e.g. color blindness, hemophilia), a male needs only one recessive allele to show the trait (he is hemizygous, $X^a Y$), while a female needs two ($X^a X^a$). This is why X-linked recessive disorders are far more common in males. An affected father passes his X (with the allele) to all daughters, who become carriers.",
              "zh": "人类中，女性为 XX，男性为 XY。X 染色体上的基因表现伴性（sex-linked）遗传。对于 X 连锁隐性性状（如色盲、血友病），男性只需一个隐性等位基因即可表现该性状（他是半合子，$X^a Y$），而女性需要两个（$X^a X^a$）。这就是 X 连锁隐性疾病在男性中更常见的原因。患病父亲将带有该等位基因的 X 传给所有女儿，使她们成为携带者。"
            },
            {
              "type": "p",
              "en": "Pedigrees (系谱图) chart traits across generations. In an X-linked recessive pedigree, affected individuals are mostly male, the trait can skip generations through carrier females, and there is no father-to-son transmission (a father gives his Y, not his X, to sons).",
              "zh": "系谱图（pedigree）记录性状在各世代的传递。在 X 连锁隐性系谱中，患者多为男性，性状可通过携带者女性隔代遗传，且没有父传子（父亲把 Y 而非 X 传给儿子）。"
            },
            {
              "type": "h3",
              "en": "Linked Genes and Recombination Frequency",
              "zh": "连锁基因与重组频率"
            },
            {
              "type": "p",
              "en": "Genes on the same chromosome are linked (连锁) and tend to be inherited together, violating independent assortment. Crossing over separates them at a frequency related to their distance apart. The recombination frequency—the percentage of offspring that are recombinant—estimates map distance in map units (centimorgans): 1% recombination = 1 map unit. Genes far apart cross over more often and approach 50% recombination (behaving as if unlinked).",
              "zh": "同一条染色体上的基因是连锁（linked）的，倾向于一起遗传，违反自由组合。交叉互换以与它们之间距离相关的频率将它们分开。重组频率——即重组型后代的百分比——用图距单位（厘摩）估计遗传距离：1% 重组 = 1 个图距单位。相距很远的基因交叉互换更频繁，接近 50% 重组（表现得如同不连锁）。"
            },
            {
              "type": "math",
              "tex": "\\text{Recombination frequency} = \\frac{\\text{number of recombinant offspring}}{\\text{total offspring}} \\times 100\\%"
            },
            {
              "type": "h3",
              "en": "Environmental Effects on Phenotype",
              "zh": "环境对表现型的影响"
            },
            {
              "type": "p",
              "en": "Genotype does not rigidly determine phenotype; the environment can modify how genes are expressed. Hydrangea flower color shifts between blue and pink with soil pH; the Himalayan rabbit and Siamese cat have dark fur only on cooler body extremities because the pigment enzyme is temperature-sensitive. Phenotype is the product of both genes and environment.",
              "zh": "基因型并不僵硬地决定表现型；环境可以改变基因的表达方式。绣球花颜色随土壤 pH 在蓝色和粉色间变化；喜马拉雅兔和暹罗猫只在较冷的身体末端有深色毛，因为色素酶对温度敏感。表现型是基因与环境共同作用的产物。"
            },
            {
              "type": "h2",
              "en": "Testing a Genetic Hypothesis: Chi-Square",
              "zh": "检验遗传假设：卡方检验"
            },
            {
              "type": "p",
              "en": "How do we know whether observed offspring counts match a predicted ratio (say 3:1), or whether the difference is too large to be chance? The chi-square ($\\chi^2$) goodness-of-fit test compares observed (o) and expected (e) counts. A large $\\chi^2$ means observations deviate from the prediction more than random chance would explain.",
              "zh": "我们如何判断观察到的后代计数是否符合预测比例（比如 3:1），还是差异过大而不能归于偶然？卡方（$\\chi^2$）拟合优度检验比较观察值（o）与期望值（e）。较大的 $\\chi^2$ 意味着观察值偏离预测超过了随机偶然所能解释的程度。"
            },
            {
              "type": "math",
              "tex": "\\chi^2 = \\sum \\frac{(o - e)^2}{e}"
            },
            {
              "type": "note",
              "en": "AP tip: Compare your calculated $\\chi^2$ to the critical value at the correct degrees of freedom (df = number of categories − 1) and p = 0.05. If $\\chi^2$ is GREATER than the critical value, you REJECT the null hypothesis (the data do not fit the expected ratio). If it is less, you fail to reject—the deviation is consistent with chance.",
              "zh": "AP 提示：将计算得的 $\\chi^2$ 与正确自由度（df = 类别数 − 1）和 p = 0.05 下的临界值比较。若 $\\chi^2$ 大于临界值，则拒绝零假设（数据不符合期望比例）。若小于，则不拒绝——偏差与偶然一致。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Predicting ABO Blood Types",
                "zh": "例题 1：预测 ABO 血型"
              },
              "problem": {
                "en": "A mother with genotype $I^A i$ and a father with genotype $I^B i$ have children. What blood types are possible, and in what ratio?",
                "zh": "基因型为 $I^A i$ 的母亲与基因型为 $I^B i$ 的父亲生育子女。可能出现哪些血型，比例如何？"
              },
              "solution": [
                {
                  "en": "The four equally likely combinations are $I^A I^B$ (AB), $I^A i$ (A), $I^B i$ (B), and $ii$ (O). Because $I^A$ and $I^B$ are codominant and both dominant to i, each genotype gives a distinct type.",
                  "zh": "四种等可能的组合是 $I^A I^B$（AB）、$I^A i$（A）、$I^B i$（B）和 $ii$（O）。由于 $I^A$ 与 $I^B$ 共显性且都对 i 显性，每种基因型给出不同的血型。",
                  "type": "p"
                },
                {
                  "en": "So the four blood types A, B, AB, and O each appear with probability 1/4—a 1:1:1:1 ratio. This cross can produce a child whose blood type matches neither parent.",
                  "zh": "因此 A、B、AB、O 四种血型各以 1/4 的概率出现——即 1:1:1:1 比例。这种杂交可能生出血型与父母都不相同的孩子。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Chi-Square Calculation",
                "zh": "例题 2：卡方计算"
              },
              "problem": {
                "en": "A monohybrid cross is expected to give a 3:1 ratio. Among 160 offspring, 108 show the dominant trait and 52 show the recessive trait. Calculate $\\chi^2$.",
                "zh": "一次单因子杂交预期为 3:1 比例。160 个后代中，108 个表现显性性状，52 个表现隐性性状。计算 $\\chi^2$。"
              },
              "solution": [
                {
                  "en": "Expected: 3/4 × 160 = 120 dominant, 1/4 × 160 = 40 recessive.",
                  "zh": "期望值：3/4 × 160 = 120 显性，1/4 × 160 = 40 隐性。",
                  "type": "p"
                },
                {
                  "type": "math",
                  "tex": "\\chi^2 = \\frac{(108-120)^2}{120} + \\frac{(52-40)^2}{40} = \\frac{144}{120} + \\frac{144}{40} = 1.2 + 3.6 = 4.8"
                },
                {
                  "en": "With df = 1, the critical value at p = 0.05 is 3.84. Since 4.8 > 3.84, we reject the null hypothesis: the data deviate significantly from 3:1.",
                  "zh": "自由度 df = 1 时，p = 0.05 的临界值为 3.84。由于 4.8 > 3.84，我们拒绝零假设：数据显著偏离 3:1。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A red-flowered (RR) plant is crossed with a white-flowered (WW) plant, and all offspring are pink. This is an example of:",
                "zh": "红花（RR）植株与白花（WW）植株杂交，所有后代都是粉花。这是哪种现象的例子？"
              },
              "choices": [
                "Codominance",
                "Incomplete dominance",
                "Epistasis",
                "Complete dominance"
              ],
              "answer": 1,
              "explanation": {
                "en": "A blended, intermediate phenotype (pink) is incomplete dominance. Codominance would show both red and white simultaneously, not a blend.",
                "zh": "混合的中间表现型（粉色）是不完全显性。共显性会同时表现红色和白色，而非混合。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Human blood type AB, where both A and B antigens are fully expressed, illustrates:",
                "zh": "人的 AB 血型中 A 和 B 抗原都完全表达，这说明了："
              },
              "choices": [
                "Incomplete dominance",
                "Pleiotropy",
                "Codominance",
                "Polygenic inheritance"
              ],
              "answer": 2,
              "explanation": {
                "en": "Both alleles ($I^A$ and $I^B$) are fully and separately expressed, which is codominance. It is not a blend (that would be incomplete dominance).",
                "zh": "两个等位基因（$I^A$ 和 $I^B$）都完全且各自表达，这就是共显性。它不是混合（那将是不完全显性）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which situation best describes pleiotropy?",
                "zh": "哪种情形最符合多效性？"
              },
              "choices": [
                "Many genes together determine human height",
                "One sickle-cell allele affects blood cells, oxygen delivery, and organ function",
                "One gene masks the expression of another gene",
                "An allele is expressed only at low temperatures"
              ],
              "answer": 1,
              "explanation": {
                "en": "Pleiotropy is one gene affecting many traits, exactly like the sickle-cell allele. Many genes → one trait is polygenic inheritance; one gene masking another is epistasis.",
                "zh": "多效性是一个基因影响多个性状，正如镰状细胞等位基因。多个基因 → 一个性状是多基因遗传；一个基因掩盖另一个是上位效应。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why are X-linked recessive disorders such as color blindness more common in males than females?",
                "zh": "为什么色盲等 X 连锁隐性疾病在男性中比女性中更常见？"
              },
              "choices": [
                "Males inherit two X chromosomes",
                "Males need only one recessive allele on their single X to show the trait",
                "The Y chromosome carries a duplicate of the allele",
                "Females cannot carry recessive alleles"
              ],
              "answer": 1,
              "explanation": {
                "en": "A male (XY) is hemizygous: one recessive allele on his single X ($X^a Y$) is enough to show the trait. A female needs two copies ($X^a X^a$), which is far less likely.",
                "zh": "男性（XY）是半合子：其单条 X 上的一个隐性等位基因（$X^a Y$）就足以表现该性状。女性需要两个拷贝（$X^a X^a$），可能性小得多。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two genes on the same chromosome are found together in offspring more often than independent assortment predicts. These genes are:",
                "zh": "同一条染色体上的两个基因在后代中一起出现的频率高于自由组合的预测。这两个基因是："
              },
              "choices": [
                "Codominant",
                "Epistatic",
                "Linked",
                "Pleiotropic"
              ],
              "answer": 2,
              "explanation": {
                "en": "Genes close together on the same chromosome are linked and tend to be inherited together. Only crossing over separates them, at a frequency proportional to their distance apart.",
                "zh": "同一条染色体上靠得近的基因是连锁的，倾向于一起遗传。只有交叉互换才能将它们分开，其频率与它们之间的距离成正比。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a testcross of 1000 offspring, 80 are recombinant and 920 are parental. What is the recombination frequency (as a percent)? Give a number.",
                "zh": "在 1000 个后代的测交中，80 个为重组型，920 个为亲本型。重组频率（百分数）是多少？给出数字。"
              },
              "answer": "8",
              "accept": [
                "8%",
                "8.0"
              ],
              "explanation": {
                "en": "Recombination frequency = 80 / 1000 × 100% = 8%. This corresponds to a map distance of 8 map units (centimorgans).",
                "zh": "重组频率 = 80 / 1000 × 100% = 8%。这对应 8 个图距单位（厘摩）的遗传距离。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cross expects a 1:1 ratio. Observed: 60 and 40 (total 100). Using $\\chi^2 = \\sum (o-e)^2/e$, what is $\\chi^2$? Give a number.",
                "zh": "一次杂交预期 1:1 比例。观察值为 60 和 40（共 100）。用 $\\chi^2 = \\sum (o-e)^2/e$，求 $\\chi^2$。给出数字。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "4.00"
              ],
              "explanation": {
                "en": "Expected = 50 each. $\\chi^2 = (60-50)^2/50 + (40-50)^2/50 = 100/50 + 100/50 = 2 + 2 = 4$. With df = 1, this exceeds the critical value 3.84, so reject the 1:1 hypothesis.",
                "zh": "期望值各 50。$\\chi^2 = (60-50)^2/50 + (40-50)^2/50 = 100/50 + 100/50 = 2 + 2 = 4$。df = 1 时，这超过临界值 3.84，故拒绝 1:1 假设。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For a chi-square test with 4 phenotype categories, what is the number of degrees of freedom? Give a number.",
                "zh": "对于有 4 个表现型类别的卡方检验，自由度是多少？给出数字。"
              },
              "answer": "3",
              "accept": [
                "three",
                "df=3"
              ],
              "explanation": {
                "en": "Degrees of freedom = number of categories − 1 = 4 − 1 = 3.",
                "zh": "自由度 = 类别数 − 1 = 4 − 1 = 3。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-6-gene-expression-and-regulation",
      "title": "Unit 6: Gene Expression and Regulation",
      "titleZh": "第六单元：基因表达与调控",
      "lessons": [
        {
          "id": "dna-structure-and-replication",
          "title": "DNA Structure and Replication",
          "titleZh": "DNA 结构与复制",
          "content": [
            {
              "type": "h2",
              "en": "DNA: The Molecule of Heredity",
              "zh": "DNA：遗传的分子"
            },
            {
              "type": "p",
              "en": "Deoxyribonucleic acid (DNA, 脱氧核糖核酸) stores the genetic instructions that direct the development and function of every organism. Its power comes from a deceptively simple structure: a long polymer built from just four kinds of building blocks, arranged in a sequence that acts as a chemical code. Understanding that structure explains both how DNA carries information and how it can be copied faithfully before every cell division.",
              "zh": "脱氧核糖核酸（DNA）储存着指导每一种生物发育与功能的遗传指令。它的强大源于一个看似简单的结构：由仅四种「积木」构成的长链聚合物，其排列顺序充当一套化学密码。理解这一结构既能解释 DNA 如何携带信息，也能说明它为何能在每次细胞分裂前被忠实地复制。"
            },
            {
              "type": "h3",
              "en": "The Building Blocks: Nucleotides",
              "zh": "基本单位：核苷酸"
            },
            {
              "type": "p",
              "en": "DNA is a polymer of nucleotides (核苷酸). Each nucleotide has three parts: a deoxyribose sugar (脱氧核糖), a phosphate group (磷酸基团), and one of four nitrogenous bases (含氮碱基)—adenine (A, 腺嘌呤), thymine (T, 胸腺嘧啶), guanine (G, 鸟嘌呤), and cytosine (C, 胞嘧啶). A and G are double-ringed purines (嘌呤); C and T are single-ringed pyrimidines (嘧啶). The sugar and phosphate form the backbone; the base is the information-carrying part.",
              "zh": "DNA 是核苷酸的聚合物。每个核苷酸由三部分组成：一个脱氧核糖、一个磷酸基团，以及四种含氮碱基之一——腺嘌呤（A）、胸腺嘧啶（T）、鸟嘌呤（G）和胞嘧啶（C）。A 和 G 是双环的嘌呤；C 和 T 是单环的嘧啶。糖和磷酸构成骨架；碱基则是携带信息的部分。"
            },
            {
              "type": "h3",
              "en": "The Double Helix",
              "zh": "双螺旋结构"
            },
            {
              "type": "p",
              "en": "DNA is a double helix (双螺旋): two strands wound around each other like a twisted ladder. The sugar-phosphate backbones (糖-磷酸骨架) form the outer rails, connected by covalent phosphodiester bonds, while paired bases form the rungs, held together by hydrogen bonds (氢键). The two strands are antiparallel (反向平行): one runs in the 5'→3' direction while its partner runs 3'→5'. Each strand has a 5' end (with a free phosphate) and a 3' end (with a free hydroxyl).",
              "zh": "DNA 是双螺旋：两条链像扭曲的梯子一样相互缠绕。糖-磷酸骨架构成外侧的「扶手」，由共价的磷酸二酯键连接，而配对的碱基则通过氢键连接形成「梯级」。两条链是反向平行的：一条沿 5'→3' 方向，其配对链则沿 3'→5' 方向。每条链都有一个 5' 端（带游离磷酸）和一个 3' 端（带游离羟基）。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Complementary base pairing (互补碱基配对): A always pairs with T (two hydrogen bonds); G always pairs with C (three hydrogen bonds).",
                  "zh": "互补碱基配对：A 总与 T 配对（两个氢键）；G 总与 C 配对（三个氢键）。"
                },
                {
                  "en": "A purine always pairs with a pyrimidine, keeping the width of the helix constant.",
                  "zh": "嘌呤总与嘧啶配对，使螺旋的宽度保持恒定。"
                },
                {
                  "en": "Because pairing is fixed, one strand's sequence dictates the other's—the basis for accurate copying.",
                  "zh": "由于配对是固定的，一条链的序列决定了另一条链——这是精确复制的基础。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: G-C pairs have three hydrogen bonds versus two for A-T, so DNA rich in G-C is more thermally stable and requires more energy to separate the strands. A DNA sample that denatures at a higher temperature has a higher G-C content.",
              "zh": "AP 提示：G-C 配对有三个氢键，而 A-T 只有两个，因此富含 G-C 的 DNA 热稳定性更高，分开两条链需要更多能量。一份在更高温度下才变性的 DNA 样品，其 G-C 含量更高。"
            },
            {
              "type": "h3",
              "en": "The Evidence Behind the Model",
              "zh": "模型背后的证据"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Griffith (1928): showed a \"transforming principle\" could pass heritable traits between bacteria—harmless bacteria became lethal after mixing with heat-killed lethal strains.",
                  "zh": "格里菲斯（Griffith，1928）：证明存在可在细菌间传递可遗传性状的「转化因子」——无害细菌与经热杀死的致病株混合后变得致命。"
                },
                {
                  "en": "Hershey-Chase (1952): using radioactively labeled bacteriophages, showed that DNA (not protein) enters bacteria and directs the making of new viruses—confirming DNA is the genetic material.",
                  "zh": "赫尔希-蔡斯（Hershey-Chase，1952）：用放射性标记的噬菌体，证明进入细菌并指导合成新病毒的是 DNA（而非蛋白质）——确认 DNA 是遗传物质。"
                },
                {
                  "en": "Chargaff's rules: in any DNA sample, %A = %T and %G = %C, hinting at base pairing.",
                  "zh": "查戈夫法则：任何 DNA 样品中 %A = %T 且 %G = %C，暗示了碱基配对。"
                },
                {
                  "en": "Franklin's X-ray diffraction, interpreted by Watson and Crick (1953), revealed the helical, antiparallel double-stranded structure.",
                  "zh": "富兰克林（Franklin）的 X 射线衍射照片，经沃森（Watson）与克里克（Crick）于 1953 年解读，揭示了螺旋、反向平行的双链结构。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Semiconservative Replication",
              "zh": "半保留复制"
            },
            {
              "type": "p",
              "en": "Before a cell divides, its DNA must be copied. Replication is semiconservative (半保留复制): the two parental strands separate, and each serves as a template for a new complementary strand. Every daughter double helix therefore contains one old (parental) strand and one newly made strand. The Meselson-Stahl experiment (1958), using heavy nitrogen ($^{15}\\text{N}$) labeling, confirmed this model over the competing conservative and dispersive models.",
              "zh": "细胞分裂前，DNA 必须被复制。复制是半保留式的：两条亲代链分开，各自作为模板合成一条新的互补链。因此每个子代双螺旋都含有一条旧（亲代）链和一条新合成的链。梅塞尔森-斯塔尔实验（Meselson-Stahl，1958）用重氮（$^{15}\\text{N}$）标记，证实了这一模型胜过与之竞争的全保留和分散模型。"
            },
            {
              "type": "h3",
              "en": "The Replication Machinery",
              "zh": "复制机器"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Helicase (解旋酶): unwinds and separates the two strands at the replication fork, breaking hydrogen bonds.",
                  "zh": "解旋酶：在复制叉处解开并分离两条链，打断氢键。"
                },
                {
                  "en": "Primase (引物酶): lays down a short RNA primer that gives DNA polymerase a starting 3' end.",
                  "zh": "引物酶：合成一小段 RNA 引物，为 DNA 聚合酶提供起始的 3' 端。"
                },
                {
                  "en": "DNA polymerase (DNA 聚合酶): adds new nucleotides only to the 3' end, so it synthesizes strictly in the 5'→3' direction and also proofreads.",
                  "zh": "DNA 聚合酶：只能向 3' 端添加新核苷酸，因此严格沿 5'→3' 方向合成，并具有校对功能。"
                },
                {
                  "en": "Ligase (连接酶): seals the gaps between fragments, joining sugar-phosphate backbones.",
                  "zh": "连接酶：封合片段之间的缺口，连接糖-磷酸骨架。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Because polymerase works only 5'→3' but the two template strands are antiparallel, the two new strands are made differently. The leading strand (前导链) is synthesized continuously toward the moving fork. The lagging strand (后随链) is synthesized away from the fork in short pieces called Okazaki fragments (冈崎片段), each needing its own primer; ligase then joins them into one continuous strand.",
              "zh": "由于聚合酶只能沿 5'→3' 方向工作，而两条模板链是反向平行的，两条新链的合成方式并不相同。前导链朝着移动的复制叉方向连续合成。后随链则背离复制叉方向、以称为冈崎片段的短片段合成，每段都需要各自的引物；随后由连接酶将它们连成一条连续的链。"
            },
            {
              "type": "note",
              "en": "AP tip: The reason for leading vs. lagging strands is a direct consequence of two facts you must state together: DNA polymerase only builds 5'→3', and the two template strands are antiparallel. Answers that omit antiparallel orientation miss the point.",
              "zh": "AP 提示：前导链与后随链之别，是你必须同时陈述的两个事实的直接结果：DNA 聚合酶只能沿 5'→3' 合成，且两条模板链反向平行。忽略「反向平行」的答案没有抓住要点。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying Chargaff's Rules",
                "zh": "例题 1：应用查戈夫法则"
              },
              "problem": {
                "en": "A double-stranded DNA sample is found to be 30% adenine. What percentage of the sample is guanine?",
                "zh": "一份双链 DNA 样品测得腺嘌呤（A）占 30%。该样品中鸟嘌呤（G）占多少百分比？"
              },
              "solution": [
                {
                  "en": "By complementary pairing, %A = %T, so thymine is also 30%. Together A and T account for 60% of the bases.",
                  "zh": "由互补配对，%A = %T，所以胸腺嘧啶（T）也是 30%。A 与 T 合计占碱基的 60%。",
                  "type": "p"
                },
                {
                  "en": "The remaining 40% must be G and C. Since %G = %C, split 40% equally: guanine is 20%.",
                  "zh": "剩下的 40% 必为 G 和 C。因为 %G = %C，将 40% 平分：鸟嘌呤为 20%。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Writing the Complementary Strand",
                "zh": "例题 2：写出互补链"
              },
              "problem": {
                "en": "A template strand reads 5'-ATGCGT-3'. What is the sequence and orientation of the newly synthesized complementary strand?",
                "zh": "一条模板链为 5'-ATGCGT-3'。新合成的互补链的序列与方向是什么？"
              },
              "solution": [
                {
                  "en": "Pair each base (A-T, G-C) and remember the new strand is antiparallel. Reading against the template gives 3'-TACGCA-5', which written conventionally 5'→3' is 5'-ACGCAT-3'.",
                  "zh": "对每个碱基配对（A-T、G-C），并记住新链是反向平行的。与模板相对读取得到 3'-TACGCA-5'，按惯例以 5'→3' 书写即为 5'-ACGCAT-3'。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which pair of bases is held together by three hydrogen bonds?",
                "zh": "下列哪对碱基由三个氢键连接？"
              },
              "choices": [
                "Adenine and thymine",
                "Guanine and cytosine",
                "Adenine and guanine",
                "Cytosine and thymine"
              ],
              "answer": 1,
              "explanation": {
                "en": "G-C pairs form three hydrogen bonds; A-T pairs form only two. Options 3 and 4 are impossible—a purine must pair with a pyrimidine.",
                "zh": "G-C 配对形成三个氢键；A-T 配对只有两个。选项 3 和 4 不可能——嘌呤必须与嘧啶配对。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The Hershey-Chase experiment used labeled bacteriophages primarily to demonstrate that:",
                "zh": "赫尔希-蔡斯实验使用标记的噬菌体，主要是为了证明："
              },
              "choices": [
                "Proteins are the genetic material",
                "DNA replication is semiconservative",
                "DNA, not protein, is the genetic material that enters the host cell",
                "RNA is copied from a DNA template"
              ],
              "answer": 2,
              "explanation": {
                "en": "Radioactively labeled DNA (not protein) entered the bacteria and directed new virus production, showing DNA is the genetic material. Semiconservative replication was shown later by Meselson-Stahl.",
                "zh": "放射性标记的 DNA（而非蛋白质）进入细菌并指导产生新病毒，说明 DNA 是遗传物质。半保留复制是后来由梅塞尔森-斯塔尔证明的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which enzyme is responsible for adding new nucleotides to a growing DNA strand?",
                "zh": "下列哪种酶负责向正在延长的 DNA 链上添加新核苷酸？"
              },
              "choices": [
                "Helicase",
                "Primase",
                "DNA polymerase",
                "Ligase"
              ],
              "answer": 2,
              "explanation": {
                "en": "DNA polymerase adds nucleotides in the 5'→3' direction. Helicase unwinds, primase makes RNA primers, and ligase seals gaps—none of these add the bulk of new nucleotides.",
                "zh": "DNA 聚合酶沿 5'→3' 方向添加核苷酸。解旋酶负责解旋，引物酶合成 RNA 引物，连接酶封合缺口——它们都不负责添加大量新核苷酸。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Okazaki fragments are a feature of the lagging strand because:",
                "zh": "冈崎片段是后随链的特征，原因是："
              },
              "choices": [
                "DNA polymerase can only synthesize in the 5'→3' direction while the strands are antiparallel",
                "The lagging strand has more G-C base pairs",
                "Ligase works only on the leading strand",
                "Helicase moves in the opposite direction on the lagging strand"
              ],
              "answer": 0,
              "explanation": {
                "en": "Because polymerase builds only 5'→3' and the template strands are antiparallel, the strand oriented away from the fork must be made discontinuously in short Okazaki fragments. G-C content and ligase are not the cause.",
                "zh": "由于聚合酶只能沿 5'→3' 合成，而模板链反向平行，背离复制叉方向的那条链必须以短的冈崎片段不连续地合成。G-C 含量与连接酶都不是原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The Meselson-Stahl experiment supported the semiconservative model by showing that after one round of replication, all DNA had:",
                "zh": "梅塞尔森-斯塔尔实验支持半保留模型，是因为它显示一轮复制后，所有 DNA 都具有："
              },
              "choices": [
                "The heavy ($^{15}\\text{N}$) density only",
                "An intermediate density between heavy and light",
                "The light ($^{14}\\text{N}$) density only",
                "A mix of purely heavy and purely light molecules"
              ],
              "answer": 1,
              "explanation": {
                "en": "One old ($^{15}\\text{N}$) strand paired with one new ($^{14}\\text{N}$) strand gives every molecule an intermediate density. A mix of purely heavy and purely light (option 4) would support the conservative model, which was ruled out.",
                "zh": "一条旧（$^{15}\\text{N}$）链与一条新（$^{14}\\text{N}$）链配对，使每个分子呈中间密度。纯重与纯轻的混合（选项 4）会支持全保留模型，而该模型已被排除。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A double-stranded DNA molecule is 22% cytosine. What percentage of its bases is adenine? Give a number (percent).",
                "zh": "一个双链 DNA 分子中胞嘧啶（C）占 22%。其碱基中腺嘌呤（A）占多少百分比？给出数字（百分比）。"
              },
              "answer": "28",
              "accept": [
                "28%",
                "28.0"
              ],
              "explanation": {
                "en": "%C = %G = 22%, so G+C = 44%. The remaining 56% is A+T, split equally, so A = 28%.",
                "zh": "%C = %G = 22%，所以 G+C = 44%。剩下的 56% 是 A+T，平分后 A = 28%。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the 5'→3' direction, DNA polymerase adds new nucleotides to which end (3-prime or 5-prime) of the growing strand? Give the end (e.g., \"3' end\").",
                "zh": "沿 5'→3' 方向，DNA 聚合酶将新核苷酸添加到延长链的哪一端（3' 端还是 5' 端）？给出该端（例如「3' 端」）。"
              },
              "answer": "3' end",
              "accept": [
                "3'",
                "3 prime",
                "3'端",
                "3′ end",
                "three prime"
              ],
              "explanation": {
                "en": "New nucleotides are added to the free 3'-hydroxyl (3' end), which is why synthesis is always 5'→3'.",
                "zh": "新核苷酸被添加到游离的 3'-羟基（3' 端），这正是合成总是沿 5'→3' 方向的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name of the enzyme that seals the sugar-phosphate backbone gaps between Okazaki fragments? Give the term.",
                "zh": "封合冈崎片段之间糖-磷酸骨架缺口的酶叫什么？给出术语。"
              },
              "answer": "ligase",
              "accept": [
                "dna ligase",
                "连接酶",
                "DNA 连接酶"
              ],
              "explanation": {
                "en": "DNA ligase catalyzes the phosphodiester bonds that join adjacent fragments into a continuous strand.",
                "zh": "DNA 连接酶催化形成磷酸二酯键，将相邻片段连接成连续的链。"
              }
            }
          ]
        },
        {
          "id": "transcription-and-translation",
          "title": "Transcription and Translation",
          "titleZh": "转录与翻译",
          "content": [
            {
              "type": "h2",
              "en": "From Gene to Protein: The Central Dogma",
              "zh": "从基因到蛋白质：中心法则"
            },
            {
              "type": "p",
              "en": "A gene is a stretch of DNA that codes for a functional product, usually a protein. The central dogma (中心法则) describes the flow of genetic information: DNA is transcribed into RNA, and RNA is translated into protein (DNA → RNA → protein). Transcription happens first, converting a gene's DNA sequence into messenger RNA (mRNA); translation then reads that mRNA to build a specific chain of amino acids.",
              "zh": "基因是编码某种功能产物（通常是蛋白质）的一段 DNA。中心法则描述遗传信息的流动：DNA 转录为 RNA，RNA 翻译为蛋白质（DNA → RNA → 蛋白质）。转录先发生，将基因的 DNA 序列转换为信使 RNA（mRNA）；随后翻译读取该 mRNA，构建出特定的氨基酸链。"
            },
            {
              "type": "note",
              "en": "AP tip: RNA differs from DNA in three ways—it uses ribose instead of deoxyribose, uracil (U) instead of thymine (T), and is usually single-stranded. In base pairing during transcription, DNA's A pairs with RNA's U.",
              "zh": "AP 提示：RNA 与 DNA 有三点不同——它用核糖代替脱氧核糖，用尿嘧啶（U）代替胸腺嘧啶（T），且通常是单链的。转录中的碱基配对时，DNA 的 A 与 RNA 的 U 配对。"
            },
            {
              "type": "h3",
              "en": "Transcription",
              "zh": "转录"
            },
            {
              "type": "p",
              "en": "Transcription (转录) is the synthesis of RNA from a DNA template. The enzyme RNA polymerase (RNA 聚合酶) binds to a specific DNA sequence called the promoter (启动子), which marks where a gene begins and which strand to read. RNA polymerase unwinds the DNA and moves along the template strand in the 3'→5' direction, adding RNA nucleotides 5'→3' to build a complementary mRNA. It stops at a terminator sequence, releasing the finished RNA.",
              "zh": "转录是以 DNA 为模板合成 RNA。RNA 聚合酶结合到一段称为启动子的特定 DNA 序列上，启动子标示基因起始的位置以及应读取哪条链。RNA 聚合酶解开 DNA，沿模板链以 3'→5' 方向移动，同时以 5'→3' 方向添加 RNA 核苷酸，构建出互补的 mRNA。它在终止子序列处停止，释放出完成的 RNA。"
            },
            {
              "type": "h3",
              "en": "RNA Processing in Eukaryotes",
              "zh": "真核生物中的 RNA 加工"
            },
            {
              "type": "p",
              "en": "In eukaryotes, the initial transcript (pre-mRNA) is modified in the nucleus before it can leave and be translated. This processing is a key difference from prokaryotes, which translate mRNA immediately.",
              "zh": "在真核生物中，最初的转录本（前体 mRNA）在离开细胞核并被翻译之前，要在核内进行修饰。这一加工过程是与原核生物的关键区别，原核生物会立即翻译 mRNA。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "5' cap (5' 帽): a modified guanine added to the 5' end that protects the mRNA and helps ribosomes bind.",
                  "zh": "5' 帽：加在 5' 端的一个修饰鸟嘌呤，保护 mRNA 并帮助核糖体结合。"
                },
                {
                  "en": "Poly-A tail (多聚腺苷酸尾): a string of adenines added to the 3' end that protects the mRNA and aids export from the nucleus.",
                  "zh": "多聚腺苷酸尾（poly-A 尾）：加在 3' 端的一串腺嘌呤，保护 mRNA 并协助其运出细胞核。"
                },
                {
                  "en": "Splicing (剪接): introns (内含子, non-coding regions) are removed and exons (外显子, coding regions) are joined together by the spliceosome.",
                  "zh": "剪接：由剪接体去除内含子（非编码区），并将外显子（编码区）连接在一起。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Alternative splicing lets one gene produce several different proteins by joining exons in different combinations. This is one reason humans have far more proteins than genes.",
              "zh": "AP 提示：选择性剪接使一个基因通过不同组合连接外显子，产生多种不同的蛋白质。这也是人类蛋白质数量远多于基因数量的原因之一。"
            },
            {
              "type": "h3",
              "en": "The Genetic Code",
              "zh": "遗传密码"
            },
            {
              "type": "p",
              "en": "The genetic code (遗传密码) is read in codons (密码子)—groups of three mRNA bases, each specifying one amino acid. With four bases in groups of three, there are $4^3 = 64$ possible codons for only 20 amino acids, so the code is redundant (degenerate, 简并的): most amino acids are specified by more than one codon. The start codon AUG (methionine) begins translation; three stop codons (UAA, UAG, UGA) end it. The code is nearly universal across all life.",
              "zh": "遗传密码以密码子为单位读取——每个密码子是 mRNA 上的三个碱基，指定一种氨基酸。四种碱基三个一组，共有 $4^3 = 64$ 个可能的密码子，却只对应 20 种氨基酸，因此密码是冗余（简并）的：大多数氨基酸由不止一个密码子指定。起始密码子 AUG（甲硫氨酸）启动翻译；三个终止密码子（UAA、UAG、UGA）终止翻译。该密码在所有生命中几乎是通用的。"
            },
            {
              "type": "h3",
              "en": "Translation",
              "zh": "翻译"
            },
            {
              "type": "p",
              "en": "Translation (翻译) builds a polypeptide from an mRNA sequence. It takes place on ribosomes (核糖体), made of rRNA and protein. Transfer RNA (tRNA, 转运 RNA) molecules act as adaptors: each carries a specific amino acid and has an anticodon (反密码子) that base-pairs with a complementary mRNA codon. Translation has three stages:",
              "zh": "翻译以 mRNA 序列为模板构建多肽。它发生在由 rRNA 和蛋白质组成的核糖体上。转运 RNA（tRNA）分子充当接头：每个 tRNA 携带一种特定氨基酸，并带有一个反密码子，与互补的 mRNA 密码子配对。翻译分三个阶段："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Initiation (起始): the ribosome assembles at the start codon (AUG) with the first tRNA.",
                  "zh": "起始：核糖体在起始密码子（AUG）处与第一个 tRNA 组装。"
                },
                {
                  "en": "Elongation (延伸): tRNAs deliver amino acids one at a time; peptide bonds link them into a growing chain as the ribosome moves codon by codon.",
                  "zh": "延伸：tRNA 逐个递送氨基酸；随着核糖体逐个密码子移动，肽键将它们连成不断增长的链。"
                },
                {
                  "en": "Termination (终止): a stop codon is reached; no tRNA matches it, so a release factor frees the completed polypeptide.",
                  "zh": "终止：到达终止密码子；没有 tRNA 与之匹配，于是释放因子释放出完成的多肽。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Mutations",
              "zh": "突变"
            },
            {
              "type": "p",
              "en": "A mutation (突变) is a change in the DNA sequence. Point mutations (点突变) change a single base and fall into three types. Frameshift mutations (移码突变) insert or delete bases, shifting the reading frame.",
              "zh": "突变是 DNA 序列的改变。点突变改变单个碱基，分为三种类型。移码突变则插入或缺失碱基，使阅读框发生移位。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Silent mutation (沉默突变): the base change still codes for the same amino acid (thanks to redundancy)—no effect on the protein.",
                  "zh": "沉默突变：碱基改变仍编码相同的氨基酸（得益于简并性）——对蛋白质无影响。"
                },
                {
                  "en": "Missense mutation (错义突变): the change codes for a different amino acid, which may or may not alter protein function.",
                  "zh": "错义突变：改变后编码不同的氨基酸，可能改变也可能不改变蛋白质功能。"
                },
                {
                  "en": "Nonsense mutation (无义突变): the change creates a premature stop codon, truncating the protein—usually severe.",
                  "zh": "无义突变：改变产生了提前的终止密码子，使蛋白质被截短——通常后果严重。"
                },
                {
                  "en": "Frameshift (insertion/deletion, 插入/缺失): adding or removing a number of bases not divisible by three shifts every codon downstream, usually ruining the protein.",
                  "zh": "移码（插入/缺失）：增加或删除数目不能被 3 整除的碱基，会使下游每个密码子移位，通常会毁掉蛋白质。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: A frameshift is typically far more damaging than a single missense change, because it garbles every codon after the mutation site rather than altering just one amino acid. Judge severity by how much of the downstream sequence is affected.",
              "zh": "AP 提示：移码突变通常比单个错义改变的破坏性大得多，因为它会打乱突变位点之后的每一个密码子，而不只是改变一个氨基酸。判断严重性要看下游序列受到多大影响。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Transcribing and Translating a Gene",
                "zh": "例题 1：转录并翻译一段基因"
              },
              "problem": {
                "en": "A DNA template strand reads 3'-TAC GGA ATT-5'. What is the mRNA sequence, and what does the first codon code for?",
                "zh": "一条 DNA 模板链为 3'-TAC GGA ATT-5'。其 mRNA 序列是什么？第一个密码子编码什么？"
              },
              "solution": [
                {
                  "en": "Transcribe by complementary pairing, using U in place of T. Template 3'-TAC GGA ATT-5' gives mRNA 5'-AUG CCU UAA-3'.",
                  "zh": "按互补配对转录，用 U 代替 T。模板 3'-TAC GGA ATT-5' 得到 mRNA 5'-AUG CCU UAA-3'。",
                  "type": "p"
                },
                {
                  "en": "The first codon AUG is the start codon, coding for methionine (Met) and beginning translation. (Note UAA at the end is a stop codon.)",
                  "zh": "第一个密码子 AUG 是起始密码子，编码甲硫氨酸（Met）并启动翻译。（注意末尾的 UAA 是终止密码子。）",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Classifying a Mutation",
                "zh": "例题 2：判断突变类型"
              },
              "problem": {
                "en": "The mRNA codon UGG (tryptophan) is changed to UGA. What type of mutation is this and what is its likely effect?",
                "zh": "mRNA 密码子 UGG（色氨酸）变为 UGA。这是哪种突变？其可能的影响是什么？"
              },
              "solution": [
                {
                  "en": "A single base changed (G→A), so it is a point mutation. UGA is a stop codon, so translation ends early.",
                  "zh": "单个碱基发生改变（G→A），因此是点突变。UGA 是终止密码子，因此翻译提前结束。",
                  "type": "p"
                },
                {
                  "en": "This is a nonsense mutation. The protein is truncated and likely nonfunctional—usually a severe effect.",
                  "zh": "这是无义突变。蛋白质被截短，可能失去功能——通常影响严重。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "During transcription, which enzyme synthesizes RNA from the DNA template?",
                "zh": "转录过程中，哪种酶以 DNA 为模板合成 RNA？"
              },
              "choices": [
                "DNA polymerase",
                "RNA polymerase",
                "Helicase",
                "Ligase"
              ],
              "answer": 1,
              "explanation": {
                "en": "RNA polymerase binds the promoter and builds mRNA 5'→3' using a DNA template. DNA polymerase copies DNA, not RNA.",
                "zh": "RNA 聚合酶结合启动子，以 DNA 为模板沿 5'→3' 合成 mRNA。DNA 聚合酶复制的是 DNA，而非 RNA。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is NOT part of eukaryotic mRNA processing?",
                "zh": "下列哪一项不属于真核生物 mRNA 的加工过程？"
              },
              "choices": [
                "Adding a 5' cap",
                "Adding a poly-A tail",
                "Removing introns and joining exons",
                "Joining amino acids with peptide bonds"
              ],
              "answer": 3,
              "explanation": {
                "en": "Peptide bonds form during translation, not RNA processing. Capping, poly-A tailing, and splicing all modify the pre-mRNA in the nucleus.",
                "zh": "肽键在翻译过程中形成，不属于 RNA 加工。加帽、加 poly-A 尾和剪接都是在核内对前体 mRNA 的修饰。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The genetic code is described as \"redundant\" (degenerate) because:",
                "zh": "遗传密码被称为「冗余」（简并）是因为："
              },
              "choices": [
                "One codon can code for several different amino acids",
                "Most amino acids are specified by more than one codon",
                "Every codon codes for the same amino acid",
                "Codons are read two bases at a time"
              ],
              "answer": 1,
              "explanation": {
                "en": "With 64 codons for 20 amino acids, most amino acids have multiple codons. A single codon never specifies more than one amino acid—that would make the code ambiguous, not redundant.",
                "zh": "64 个密码子对应 20 种氨基酸，大多数氨基酸有多个密码子。单个密码子绝不会指定多于一种氨基酸——那会使密码变得含糊而非冗余。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A tRNA molecule with the anticodon 3'-UAC-5' will base-pair with which mRNA codon?",
                "zh": "反密码子为 3'-UAC-5' 的 tRNA 会与下列哪个 mRNA 密码子配对？"
              },
              "choices": [
                "5'-AUG-3'",
                "5'-TAC-3'",
                "5'-GUA-3'",
                "5'-UAC-3'"
              ],
              "answer": 0,
              "explanation": {
                "en": "Anticodon and codon are antiparallel complements: 3'-UAC-5' pairs with 5'-AUG-3' (A-U, U-A, C-G). AUG is the start codon for methionine.",
                "zh": "反密码子与密码子是反向平行的互补关系：3'-UAC-5' 与 5'-AUG-3' 配对（A-U、U-A、C-G）。AUG 是甲硫氨酸的起始密码子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A single base is deleted near the start of a gene's coding sequence. This mutation is most likely to:",
                "zh": "在某基因编码序列起始附近缺失了一个碱基。这种突变最可能："
              },
              "choices": [
                "Have no effect because the code is redundant",
                "Change only one amino acid",
                "Cause a frameshift that alters most downstream codons",
                "Add an extra amino acid without other changes"
              ],
              "answer": 2,
              "explanation": {
                "en": "Deleting one base (not a multiple of three) shifts the reading frame, so every codon after the deletion is misread. This is far more damaging than a single missense change.",
                "zh": "缺失一个碱基（不是 3 的倍数）会使阅读框移位，因此缺失之后的每个密码子都会被错误读取。这比单个错义改变的破坏性大得多。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many nucleotides make up a single codon? Give a number.",
                "zh": "一个密码子由多少个核苷酸组成？给出数字。"
              },
              "answer": "3",
              "accept": [
                "three",
                "3个",
                "三"
              ],
              "explanation": {
                "en": "A codon is three mRNA bases specifying one amino acid; the triplet code gives 64 codons.",
                "zh": "一个密码子是指定一种氨基酸的三个 mRNA 碱基；三联体密码共有 64 个密码子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The DNA template strand 3'-TAC-5' is transcribed. Write the resulting mRNA codon in the 5'→3' direction.",
                "zh": "DNA 模板链 3'-TAC-5' 被转录。写出所得 mRNA 密码子（按 5'→3' 方向）。"
              },
              "answer": "AUG",
              "accept": [
                "5'-AUG-3'",
                "aug",
                "5'AUG3'"
              ],
              "explanation": {
                "en": "Complementary pairing with U for T: T→A, A→U, C→G gives 5'-AUG-3', the start codon.",
                "zh": "以 U 代 T 进行互补配对：T→A、A→U、C→G，得到 5'-AUG-3'，即起始密码子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A mutation changes a codon but the amino acid stays the same, so the protein is unaffected. What type of point mutation is this? Give the term.",
                "zh": "某突变改变了密码子，但氨基酸不变，蛋白质不受影响。这是哪种点突变？给出术语。"
              },
              "answer": "silent",
              "accept": [
                "silent mutation",
                "沉默突变",
                "沉默"
              ],
              "explanation": {
                "en": "A silent mutation changes the codon to a synonymous one coding the same amino acid—possible because the code is redundant.",
                "zh": "沉默突变将密码子改变为编码相同氨基酸的同义密码子——这得益于密码的简并性。"
              }
            }
          ]
        },
        {
          "id": "gene-regulation-and-biotechnology",
          "title": "Gene Regulation and Biotechnology",
          "titleZh": "基因调控与生物技术",
          "content": [
            {
              "type": "h2",
              "en": "Turning Genes On and Off",
              "zh": "开启与关闭基因"
            },
            {
              "type": "p",
              "en": "Every cell in your body carries the same genome, yet a neuron and a skin cell look and act completely differently. The explanation is gene regulation (基因调控): cells control which genes are expressed, when, and how much. Regulation lets cells respond to their environment and, in multicellular organisms, lets identical genomes build many specialized cell types.",
              "zh": "你体内的每个细胞都携带相同的基因组，然而神经元和皮肤细胞的外观与功能却完全不同。原因在于基因调控：细胞控制哪些基因被表达、何时表达以及表达多少。调控使细胞能响应环境，并在多细胞生物中使相同的基因组构建出多种特化的细胞类型。"
            },
            {
              "type": "h3",
              "en": "Prokaryotic Regulation: Operons",
              "zh": "原核生物的调控：操纵子"
            },
            {
              "type": "p",
              "en": "In bacteria, related genes are often grouped into an operon (操纵子): a cluster of genes controlled by a single promoter and operator. A regulatory protein called a repressor (阻遏蛋白) can bind the operator (操纵基因) to block RNA polymerase. Operons let bacteria switch whole pathways on or off in response to nutrients, saving energy.",
              "zh": "在细菌中，相关基因常成组构成一个操纵子：由单一启动子和操纵基因控制的一簇基因。一种称为阻遏蛋白的调节蛋白可结合到操纵基因上，阻断 RNA 聚合酶。操纵子使细菌能根据营养状况整条通路地开启或关闭，从而节省能量。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "lac operon (乳糖操纵子): inducible (可诱导)—normally OFF. When lactose is present, it binds the repressor and removes it, turning the genes ON so the cell can digest lactose. The system is switched on by the substrate it processes.",
                  "zh": "乳糖操纵子（lac）：可诱导型——通常关闭。当乳糖存在时，乳糖结合阻遏蛋白并将其移除，使基因开启，细胞得以消化乳糖。该系统被它所处理的底物开启。"
                },
                {
                  "en": "trp operon (色氨酸操纵子): repressible (可阻遏)—normally ON. When tryptophan is abundant, it activates the repressor, turning the genes OFF because the cell no longer needs to make tryptophan. The system is switched off by its own end product.",
                  "zh": "色氨酸操纵子（trp）：可阻遏型——通常开启。当色氨酸充足时，它激活阻遏蛋白，使基因关闭，因为细胞不再需要合成色氨酸。该系统被自身的终产物关闭。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Don't confuse inducible and repressible. Inducible operons (lac) are usually off and get switched on; repressible operons (trp) are usually on and get switched off. A common trap: lactose does not activate a repressor—it inactivates one.",
              "zh": "AP 提示：不要混淆可诱导型与可阻遏型。可诱导型操纵子（lac）通常关闭、需被开启；可阻遏型操纵子（trp）通常开启、会被关闭。常见陷阱：乳糖不会激活阻遏蛋白——它使阻遏蛋白失活。"
            },
            {
              "type": "h3",
              "en": "Eukaryotic Regulation",
              "zh": "真核生物的调控"
            },
            {
              "type": "p",
              "en": "Eukaryotes regulate genes at many levels, especially at transcription. Transcription factors (转录因子) are proteins that bind DNA to help or block RNA polymerase. Enhancers (增强子) are DNA regions, sometimes far from a gene, where activator proteins bind to boost transcription. Chromatin structure also matters: DNA wrapped tightly around histones is inaccessible and silenced, while loosely packed DNA can be transcribed.",
              "zh": "真核生物在多个层面调控基因，尤其在转录层面。转录因子是结合 DNA 以帮助或阻断 RNA 聚合酶的蛋白质。增强子是 DNA 区域，有时远离基因，激活蛋白结合于此以增强转录。染色质结构也很重要：紧紧缠绕在组蛋白上的 DNA 难以接近而被沉默，松散包装的 DNA 则可被转录。"
            },
            {
              "type": "h3",
              "en": "Epigenetics",
              "zh": "表观遗传"
            },
            {
              "type": "p",
              "en": "Epigenetic (表观遗传) changes alter gene expression without changing the DNA sequence itself, and can be passed to daughter cells. Two key mechanisms are DNA methylation (DNA 甲基化)—adding methyl groups that typically silence genes—and histone modification, which loosens or tightens chromatin. These marks help explain how cells \"remember\" their identity through divisions.",
              "zh": "表观遗传改变在不改变 DNA 序列本身的情况下改变基因表达，并可传给子细胞。两种关键机制是 DNA 甲基化——添加甲基通常使基因沉默——以及组蛋白修饰，可使染色质松开或收紧。这些标记有助于解释细胞如何在多次分裂中「记住」自己的身份。"
            },
            {
              "type": "h3",
              "en": "Differential Gene Expression and Cell Specialization",
              "zh": "差异基因表达与细胞特化"
            },
            {
              "type": "p",
              "en": "Because cells express different subsets of their shared genome, they become specialized—a process called differentiation (分化). A liver cell and a muscle cell differ not in which genes they have, but in which genes are turned on. During development, signals and transcription factors trigger cascades that commit cells to particular fates, producing the many tissue types of a complex organism.",
              "zh": "由于细胞表达其共有基因组的不同子集，它们变得特化——这一过程称为分化。肝细胞与肌细胞的区别不在于它们拥有哪些基因，而在于哪些基因被开启。在发育过程中，信号和转录因子触发级联反应，使细胞定向于特定命运，从而产生复杂生物体的众多组织类型。"
            },
            {
              "type": "h3",
              "en": "Biotechnology",
              "zh": "生物技术"
            },
            {
              "type": "p",
              "en": "Modern biotechnology gives us tools to copy, cut, analyze, and edit DNA. These techniques underlie medicine, forensics, agriculture, and research.",
              "zh": "现代生物技术为我们提供了复制、切割、分析和编辑 DNA 的工具。这些技术是医学、法医、农业和科研的基础。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "PCR (聚合酶链式反应): rapidly amplifies (copies) a target DNA segment through repeated heating and cooling cycles, making billions of copies from a tiny sample.",
                  "zh": "PCR（聚合酶链式反应）：通过反复的加热与冷却循环快速扩增（复制）目标 DNA 片段，从极少的样品制造出数十亿份拷贝。"
                },
                {
                  "en": "Gel electrophoresis (凝胶电泳): separates DNA fragments by size in an electric field—smaller fragments move farther toward the positive electrode because DNA is negatively charged.",
                  "zh": "凝胶电泳：在电场中按大小分离 DNA 片段——因为 DNA 带负电，较小的片段向正极移动得更远。"
                },
                {
                  "en": "Restriction enzymes (限制性内切酶): cut DNA at specific recognition sequences, often leaving \"sticky ends\" that let fragments from different sources be joined.",
                  "zh": "限制性内切酶：在特定识别序列处切割 DNA，常留下「黏性末端」，使不同来源的片段可以连接。"
                },
                {
                  "en": "Plasmids and recombinant DNA (质粒与重组 DNA): a plasmid (small circular bacterial DNA) can be cut and spliced with a foreign gene to make recombinant DNA, then inserted into bacteria that express the gene (e.g., to produce human insulin).",
                  "zh": "质粒与重组 DNA：质粒（细菌的小型环状 DNA）可被切开并与外源基因拼接形成重组 DNA，再导入细菌使其表达该基因（例如生产人胰岛素）。"
                },
                {
                  "en": "CRISPR (CRISPR 基因编辑): a precise gene-editing system that uses a guide RNA to target a specific DNA sequence and an enzyme (Cas9) to cut it, allowing genes to be added, removed, or corrected.",
                  "zh": "CRISPR（基因编辑）：一种精确的基因编辑系统，利用向导 RNA 定位特定 DNA 序列，并用酶（Cas9）将其切割，从而添加、删除或修正基因。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: In gel electrophoresis, remember DNA is negatively charged (from its phosphate groups), so it migrates toward the positive (+) electrode. Smaller fragments travel faster and farther. Never say larger fragments move farther.",
              "zh": "AP 提示：在凝胶电泳中，记住 DNA 带负电（源于其磷酸基团），因此向正极（+）迁移。较小的片段移动得更快更远。切勿说较大的片段移动得更远。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Predicting the lac Operon's Behavior",
                "zh": "例题 1：预测乳糖操纵子的行为"
              },
              "problem": {
                "en": "A bacterium is placed in a medium containing plenty of lactose but no glucose. Will the genes of the lac operon be transcribed? Explain.",
                "zh": "将一个细菌放入含大量乳糖但无葡萄糖的培养基中。乳糖操纵子的基因会被转录吗？请解释。"
              },
              "solution": [
                {
                  "en": "The lac operon is inducible, normally kept off by a repressor bound to the operator. Lactose (as its isomer) binds the repressor and changes its shape, so it releases the operator.",
                  "zh": "乳糖操纵子是可诱导型的，通常由结合在操纵基因上的阻遏蛋白使其关闭。乳糖（以其异构体形式）结合阻遏蛋白并改变其形状，使其从操纵基因上脱离。",
                  "type": "p"
                },
                {
                  "en": "With the operator free, RNA polymerase can transcribe the genes, so the cell makes the enzymes to digest lactose. Yes—the genes are transcribed.",
                  "zh": "操纵基因空出后，RNA 聚合酶即可转录这些基因，于是细胞合成消化乳糖的酶。是的——这些基因会被转录。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading a Gel",
                "zh": "例题 2：读取电泳凝胶"
              },
              "problem": {
                "en": "After cutting a DNA sample with a restriction enzyme and running gel electrophoresis, one band sits near the well (top) and another sits far from the well (bottom). Which band contains the larger fragments?",
                "zh": "用限制性内切酶切割一份 DNA 样品并进行凝胶电泳后，一条带靠近加样孔（上方），另一条带远离加样孔（下方）。哪条带含有较大的片段？"
              },
              "solution": [
                {
                  "en": "DNA moves from the well toward the positive electrode; smaller fragments move faster and travel farther.",
                  "zh": "DNA 从加样孔向正极移动；较小的片段移动得更快、走得更远。",
                  "type": "p"
                },
                {
                  "en": "So the band near the well (that moved least) contains the larger fragments; the band far from the well contains the smaller fragments.",
                  "zh": "因此靠近加样孔（移动最少）的带含有较大的片段；远离加样孔的带含有较小的片段。",
                  "type": "p"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The lac operon is described as inducible. This means it is normally:",
                "zh": "乳糖操纵子被描述为可诱导型。这意味着它通常："
              },
              "choices": [
                "On, and gets switched off by its product",
                "Off, and gets switched on when its substrate (lactose) is present",
                "On at all times regardless of conditions",
                "Off at all times regardless of conditions"
              ],
              "answer": 1,
              "explanation": {
                "en": "An inducible operon is normally off; lactose inactivates the repressor and induces (turns on) transcription. Being switched off by a product describes a repressible operon like trp.",
                "zh": "可诱导型操纵子通常关闭；乳糖使阻遏蛋白失活并诱导（开启）转录。被产物关闭描述的是 trp 那样的可阻遏型操纵子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When tryptophan levels are high in a cell, the trp operon is turned off. This is because tryptophan:",
                "zh": "当细胞内色氨酸水平高时，trp 操纵子被关闭。这是因为色氨酸："
              },
              "choices": [
                "Activates the repressor so it binds the operator",
                "Inactivates the repressor so it leaves the operator",
                "Binds RNA polymerase directly",
                "Removes the promoter"
              ],
              "answer": 0,
              "explanation": {
                "en": "In the repressible trp operon, tryptophan acts as a corepressor, activating the repressor to bind the operator and block transcription—no need to keep making tryptophan.",
                "zh": "在可阻遏型 trp 操纵子中，色氨酸充当辅阻遏物，激活阻遏蛋白使其结合操纵基因、阻断转录——无需继续合成色氨酸。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two cells in your body have identical DNA but very different structures and functions. This is best explained by:",
                "zh": "你体内两个细胞的 DNA 完全相同，但结构和功能却大不相同。这最好地由下列哪项解释？"
              },
              "choices": [
                "Each cell has a different set of genes",
                "Mutations gave each cell a unique genome",
                "Differential gene expression—different genes are turned on in each cell",
                "One cell lost half of its chromosomes"
              ],
              "answer": 2,
              "explanation": {
                "en": "Specialized cells share the same genome but express different subsets of genes (differentiation). They do not have different genes or different genomes.",
                "zh": "特化细胞共享相同的基因组，但表达不同的基因子集（分化）。它们并非拥有不同的基因或不同的基因组。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "DNA methylation typically affects a gene by:",
                "zh": "DNA 甲基化通常通过下列哪种方式影响基因？"
              },
              "choices": [
                "Changing the gene's nucleotide sequence permanently",
                "Silencing (reducing expression of) the gene without changing its sequence",
                "Adding new exons to the gene",
                "Increasing the gene's transcription rate"
              ],
              "answer": 1,
              "explanation": {
                "en": "Methylation is an epigenetic mark that usually silences genes without altering the DNA sequence, and can be inherited by daughter cells.",
                "zh": "甲基化是一种表观遗传标记，通常在不改变 DNA 序列的情况下使基因沉默，并可被子细胞继承。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In gel electrophoresis, which DNA fragments travel the farthest from the wells?",
                "zh": "在凝胶电泳中，哪些 DNA 片段离加样孔移动得最远？"
              },
              "choices": [
                "The largest fragments",
                "The smallest fragments",
                "Positively charged fragments",
                "Fragments closest to the negative electrode"
              ],
              "answer": 1,
              "explanation": {
                "en": "The gel acts as a sieve: smaller fragments move faster and farther toward the positive electrode. DNA is negatively charged, so it always migrates away from the negative electrode.",
                "zh": "凝胶起筛子的作用：较小的片段向正极移动得更快更远。DNA 带负电，因此总是远离负极迁移。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What laboratory technique is used to make billions of copies of a specific DNA segment through repeated heating and cooling cycles? Give the abbreviation.",
                "zh": "通过反复加热与冷却循环制造出某特定 DNA 片段数十亿份拷贝的实验技术是什么？给出缩写。"
              },
              "answer": "PCR",
              "accept": [
                "pcr",
                "polymerase chain reaction",
                "聚合酶链式反应"
              ],
              "explanation": {
                "en": "PCR (polymerase chain reaction) amplifies target DNA exponentially using a heat-stable DNA polymerase and temperature cycling.",
                "zh": "PCR（聚合酶链式反应）利用耐热 DNA 聚合酶和温度循环，指数级地扩增目标 DNA。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the general name for enzymes that cut DNA at specific recognition sequences, used to make recombinant DNA? Give the term.",
                "zh": "在特定识别序列处切割 DNA、用于制造重组 DNA 的酶统称为什么？给出术语。"
              },
              "answer": "restriction enzymes",
              "accept": [
                "restriction enzyme",
                "restriction endonuclease",
                "限制性内切酶",
                "限制酶"
              ],
              "explanation": {
                "en": "Restriction enzymes (restriction endonucleases) cut DNA at specific sequences, often producing sticky ends used in cloning.",
                "zh": "限制性内切酶（限制性核酸内切酶）在特定序列处切割 DNA，常产生用于克隆的黏性末端。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What small circular piece of bacterial DNA is commonly used as a vector to carry a foreign gene into a host cell? Give the term.",
                "zh": "常被用作载体、将外源基因带入宿主细胞的细菌小型环状 DNA 叫什么？给出术语。"
              },
              "answer": "plasmid",
              "accept": [
                "plasmids",
                "质粒"
              ],
              "explanation": {
                "en": "A plasmid is a small circular DNA molecule that can be cut, spliced with a foreign gene, and taken up by bacteria to make recombinant DNA.",
                "zh": "质粒是一种小型环状 DNA 分子，可被切开、与外源基因拼接，并被细菌摄取以制造重组 DNA。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-7-natural-selection",
      "title": "Unit 7: Natural Selection",
      "titleZh": "第七单元：自然选择",
      "lessons": [
        {
          "id": "natural-selection-and-evidence",
          "title": "Natural Selection and Evidence for Evolution",
          "titleZh": "自然选择与进化的证据",
          "content": [
            {
              "type": "h2",
              "en": "Darwin and the Theory of Evolution",
              "zh": "达尔文与进化论"
            },
            {
              "type": "p",
              "en": "Evolution is the change in the heritable characteristics of a population over successive generations. In 1859 Charles Darwin proposed two central ideas in *On the Origin of Species*: all living things share common ancestry (descent with modification), and the main mechanism driving adaptation is natural selection (自然选择). Modern evolutionary theory unites Darwin’s ideas with genetics, and its central claim is that populations—not individuals—evolve.",
              "zh": "进化（evolution）是种群的可遗传性状在世代间的变化。1859 年查尔斯·达尔文在《物种起源》中提出两个核心观点：所有生物拥有共同祖先（带有修饰的传承），而驱动适应的主要机制是自然选择（natural selection）。现代进化论将达尔文的思想与遗传学结合，其核心论断是：进化的是种群（population），而不是个体。"
            },
            {
              "type": "h3",
              "en": "The Mechanism of Natural Selection",
              "zh": "自然选择的机制"
            },
            {
              "type": "p",
              "en": "Natural selection follows logically from a few observable facts. Because more offspring are produced than the environment can support, and because individuals vary in traits that affect survival and reproduction, individuals whose inherited traits give them an advantage will, on average, leave more offspring. Over generations the favorable heritable traits become more common in the population.",
              "zh": "自然选择由几个可观察的事实合乎逻辑地推导出来。由于产生的后代多于环境所能承载的数量，且个体在影响生存与繁殖的性状上存在差异，那些其可遗传性状带来优势的个体平均会留下更多后代。经过世代积累，有利的可遗传性状在种群中变得更常见。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**Variation:** Individuals in a population differ in their heritable traits (much of it arising from mutation and sexual recombination).",
                  "zh": "**变异：**种群中的个体在可遗传性状上存在差异（大多源于突变和有性生殖的重组）。"
                },
                {
                  "en": "**Overproduction:** Populations produce more offspring than can survive, creating a struggle for limited resources.",
                  "zh": "**过度繁殖：**种群产生的后代多于能够存活的数量，导致对有限资源的竞争。"
                },
                {
                  "en": "**Differential survival and reproduction:** Some heritable variants survive and reproduce better than others in a given environment.",
                  "zh": "**差异化的生存与繁殖：**在特定环境中，某些可遗传变异比其他变异更容易存活和繁殖。"
                },
                {
                  "en": "**Heritability:** Because the favored traits are heritable, offspring tend to resemble their successful parents, so allele frequencies shift over time.",
                  "zh": "**可遗传性：**由于受青睐的性状可遗传，后代倾向于像成功的亲代，因此等位基因频率随时间发生变化。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Fitness (适合度) is a quantitative measure: an individual’s fitness is its relative contribution of offspring to the next generation’s gene pool. High fitness does not mean the strongest or fastest—it means the best reproductive success in a particular environment. An adaptation (适应) is a heritable trait that increases fitness in that environment, produced by the accumulation of selected variants.",
              "zh": "适合度（fitness）是一个定量指标：个体的适合度是它对下一代基因库贡献后代的相对数量。高适合度并不意味着最强壮或最快，而是指在特定环境中最好的繁殖成功率。适应（adaptation）是一种在该环境中提高适合度的可遗传性状，由被选择的变异累积而成。"
            },
            {
              "type": "note",
              "en": "AP tip: Selection acts on phenotypes, but evolution is measured as a change in allele frequencies in the gene pool. Individuals do NOT evolve—a single organism cannot change its own alleles in response to the environment. A common misconception is that organisms evolve traits “because they need them”; selection has no goal and no foresight, it simply screens existing variation.",
              "zh": "AP 提示：选择作用于表型（phenotype），但进化是以基因库中等位基因频率的变化来衡量的。个体不会进化——单个生物不能为响应环境而改变自己的等位基因。一个常见误区是认为生物「因为需要而进化出某性状」；选择没有目标也没有预见性，它只是对已存在的变异进行筛选。"
            },
            {
              "type": "h3",
              "en": "Patterns of Selection",
              "zh": "选择的模式"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**Directional selection (定向选择):** Favors one extreme phenotype, shifting the population mean toward it (e.g., larger beak depth during a drought).",
                  "zh": "**定向选择：**偏好一个极端表型，使种群均值朝该方向移动（例如干旱期间更大的喙深）。"
                },
                {
                  "en": "**Stabilizing selection (稳定选择):** Favors intermediate phenotypes and selects against both extremes, reducing variation (e.g., human birth weight).",
                  "zh": "**稳定选择：**偏好中间表型，同时淘汰两个极端，从而减少变异（例如人类出生体重）。"
                },
                {
                  "en": "**Disruptive selection (分裂选择):** Favors both extremes over the intermediate, which can increase variation and even promote speciation.",
                  "zh": "**分裂选择：**偏好两个极端而淘汰中间表型，可增加变异，甚至促进物种形成。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Sexual selection (性选择) is selection based on success at obtaining mates. It often produces sexual dimorphism—differences between males and females—such as a peacock’s tail. Traits favored by mate choice (intersexual selection) or by competition between the same sex (intrasexual selection) can spread even if they slightly reduce survival, because reproductive success is what fitness measures.",
              "zh": "性选择（sexual selection）是基于获得配偶成功率的选择。它常产生性二型现象——雌雄之间的差异——例如孔雀的尾羽。被配偶选择（异性间选择）或同性竞争（同性间选择）所青睐的性状即使略微降低存活率也可能扩散，因为适合度衡量的是繁殖成功率。"
            },
            {
              "type": "p",
              "en": "Artificial selection (人工选择) is Darwin’s key analogy: humans breed plants and animals by choosing which individuals reproduce, rapidly changing traits (all dog breeds descend from wolves; teosinte was bred into corn). This shows how powerfully heritable variation can be reshaped by differential reproduction—the same logic as natural selection, but with a human doing the selecting.",
              "zh": "人工选择（artificial selection）是达尔文的关键类比：人类通过选择哪些个体繁殖来培育动植物，快速改变性状（所有狗的品种都源自狼；大刍草被培育成玉米）。这说明差异化繁殖能强有力地重塑可遗传变异——与自然选择逻辑相同，只是由人来做选择。"
            },
            {
              "type": "h3",
              "en": "Lines of Evidence for Evolution",
              "zh": "进化的证据"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**Fossil record:** Layered sedimentary rock shows transitional forms and the sequence in which groups appeared (e.g., tetrapods from lobe-finned fish).",
                  "zh": "**化石记录：**分层的沉积岩显示过渡型和各类群出现的顺序（例如四足类源自肉鳍鱼）。"
                },
                {
                  "en": "**Homologous structures (同源结构):** Similar underlying anatomy from a common ancestor despite different functions (the pentadactyl limb of humans, whales, bats, cats).",
                  "zh": "**同源结构：**源自共同祖先、功能不同但底层解剖结构相似（人、鲸、蝙蝠、猫的五指肢）。"
                },
                {
                  "en": "**Analogous structures / convergent evolution (同功结构／趋同进化):** Similar functions evolved independently in unrelated lineages (wings of birds and insects); these do NOT indicate close relatedness.",
                  "zh": "**同功结构／趋同进化：**在无亲缘关系的谱系中独立进化出的相似功能（鸟翼与昆虫翼）；它们并不表示亲缘关系近。"
                },
                {
                  "en": "**Vestigial structures (痕迹器官):** Reduced remnants of features that were functional in ancestors (the human tailbone, whale pelvic bones).",
                  "zh": "**痕迹器官：**祖先中曾有功能、现已退化的残余结构（人的尾骨、鲸的骨盆骨）。"
                },
                {
                  "en": "**Molecular / DNA evidence:** All life shares DNA, the genetic code, and core proteins; more closely related species have more similar DNA and amino acid sequences.",
                  "zh": "**分子／DNA 证据：**所有生命共享 DNA、遗传密码和核心蛋白质；亲缘关系越近的物种，其 DNA 和氨基酸序列越相似。"
                },
                {
                  "en": "**Biogeography (生物地理学):** The geographic distribution of species reflects evolutionary history (unique species on isolated islands, marsupials of Australia).",
                  "zh": "**生物地理学：**物种的地理分布反映进化历史（孤立岛屿上的独特物种、澳大利亚的有袋类）。"
                },
                {
                  "en": "**Direct observation:** Evolution measured in real time, such as antibiotic resistance in bacteria and pesticide resistance in insects.",
                  "zh": "**直接观察：**实时测得的进化，例如细菌的抗生素抗性和昆虫的杀虫剂抗性。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Homologous structures reveal common ancestry; analogous (convergent) structures do NOT. When building or reading a phylogeny, you must distinguish traits shared because of descent from traits that merely look similar because of similar selective pressures. Molecular data (DNA/protein sequences) are especially powerful because they let you quantify relatedness even between very different-looking organisms.",
              "zh": "AP 提示：同源结构揭示共同祖先，而同功（趋同）结构不能。构建或解读系统发生树时，必须区分因传承而共享的性状和仅因相似选择压力而看起来相似的性状。分子数据（DNA／蛋白质序列）尤其有力，因为它能量化即使外形迥异的生物之间的亲缘程度。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Antibiotic Resistance as Selection in Action",
                "zh": "例题 1：抗生素抗性——正在发生的选择"
              },
              "problem": {
                "en": "A patient takes antibiotics, and after several days the infection returns, now resistant to the drug. Explain, using natural selection, why the bacterial population became resistant. Did the antibiotic cause the resistance mutations?",
                "zh": "一位患者服用抗生素，几天后感染复发，且对该药物产生了抗性。用自然选择解释这个细菌种群为何变得有抗性。抗生素是否导致了抗性突变？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Before treatment, random mutation had already produced a small number of bacteria with resistance alleles—variation existed independently of the drug.",
                  "zh": "在治疗之前，随机突变已经产生了少数带有抗性等位基因的细菌——变异独立于药物而存在。"
                },
                {
                  "type": "p",
                  "en": "The antibiotic acts as a selective agent: it kills the susceptible majority but the resistant cells survive (differential survival) and reproduce, passing resistance alleles to offspring.",
                  "zh": "抗生素充当选择因素：它杀死易感的大多数，但抗性细胞存活（差异化生存）并繁殖，将抗性等位基因传给后代。"
                },
                {
                  "type": "p",
                  "en": "Over generations the frequency of the resistance allele rises, so the population evolves. The antibiotic did NOT create the mutation—it only selected among pre-existing variants. This is why finishing prescriptions and limiting antibiotic use slow resistance.",
                  "zh": "经过世代积累，抗性等位基因频率上升，种群因此进化。抗生素并未制造突变——它只是在已存在的变异中进行选择。这就是为什么完成疗程和限制抗生素使用能减缓抗性的产生。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Interpreting Homology vs. Convergence",
                "zh": "例题 2：区分同源与趋同"
              },
              "problem": {
                "en": "A dolphin (a mammal) and a shark (a fish) both have streamlined bodies and dorsal fins, yet DNA shows the dolphin is far more closely related to a cow than to a shark. How is this possible?",
                "zh": "海豚（哺乳动物）和鲨鱼（鱼类）都有流线型身体和背鳍，但 DNA 显示海豚与牛的亲缘关系远比与鲨鱼近。这怎么可能？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The streamlined shape and fins are analogous structures produced by convergent evolution: living fast in open water imposes similar selective pressures, so unrelated lineages evolved similar solutions independently.",
                  "zh": "流线型和鳍是趋同进化产生的同功结构：在开阔水域快速游动施加了相似的选择压力，因此无亲缘关系的谱系独立进化出相似的解决方案。"
                },
                {
                  "type": "p",
                  "en": "Molecular (DNA) evidence traces true ancestry and outweighs superficial similarity. Because the dolphin’s DNA, mammary glands, lungs, and limb bones match other mammals, it groups with cows, not sharks.",
                  "zh": "分子（DNA）证据追踪真正的祖先，胜过表面相似性。由于海豚的 DNA、乳腺、肺和肢骨与其他哺乳动物一致，它与牛归为一类，而非鲨鱼。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which statement best describes how natural selection produces adaptation?",
                "zh": "下列哪项最能描述自然选择如何产生适应？"
              },
              "choices": [
                "Individuals develop new traits during their lifetime and pass them on",
                "Differential reproduction of pre-existing heritable variants shifts allele frequencies over generations",
                "Organisms consciously evolve traits they need to survive",
                "Mutations occur in response to environmental demands"
              ],
              "answer": 1,
              "explanation": {
                "en": "Selection screens variation that already exists; individuals with advantageous heritable traits reproduce more, so allele frequencies change over generations. Choices A, C, and D describe the discredited idea that organisms acquire or direct traits by need (Lamarckism).",
                "zh": "选择筛选已经存在的变异；具有有利可遗传性状的个体繁殖更多，因此等位基因频率经世代发生变化。A、C、D 描述的是已被否定的「生物按需获得或指导性状」的观点（拉马克主义）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "During a prolonged drought, only finches with the deepest beaks can crack the remaining large, hard seeds, and the average beak depth in the population increases. This is an example of:",
                "zh": "在持续干旱中，只有喙最深的雀能咬开剩下的又大又硬的种子，种群平均喙深因此增大。这是哪种选择的例子？"
              },
              "choices": [
                "Stabilizing selection",
                "Disruptive selection",
                "Directional selection",
                "Sexual selection"
              ],
              "answer": 2,
              "explanation": {
                "en": "One extreme (deep beaks) is favored, shifting the population mean toward it—directional selection. Stabilizing favors the intermediate; disruptive favors both extremes; sexual selection is about mating success.",
                "zh": "一个极端（深喙）被青睐，使种群均值朝该方向移动——这是定向选择。稳定选择偏好中间型；分裂选择偏好两个极端；性选择关乎交配成功率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The wing of a bird and the wing of an insect perform the same function but have completely different underlying structures and evolved independently. These are:",
                "zh": "鸟的翅膀和昆虫的翅膀功能相同，但底层结构完全不同且独立进化。它们是："
              },
              "choices": [
                "Homologous structures indicating close common ancestry",
                "Vestigial structures",
                "Analogous structures produced by convergent evolution",
                "Evidence that birds evolved from insects"
              ],
              "answer": 2,
              "explanation": {
                "en": "Similar function with different structure arising independently is analogy (convergent evolution). Analogous structures do NOT indicate close relatedness—a frequent trap. Homologous structures share underlying anatomy from a common ancestor.",
                "zh": "功能相似但结构不同、独立产生，属于同功（趋同进化）。同功结构不表示亲缘关系近——这是常见陷阱。同源结构则源自共同祖先、底层解剖结构相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is the best measure of an organism’s evolutionary fitness?",
                "zh": "下列哪项是衡量生物进化适合度的最佳指标？"
              },
              "choices": [
                "Its size and physical strength",
                "Its lifespan",
                "The number of fertile offspring it contributes to the next generation",
                "How well it can outrun predators"
              ],
              "answer": 2,
              "explanation": {
                "en": "Fitness is relative reproductive success—the contribution of viable, fertile offspring to the next generation’s gene pool. Strength, lifespan, or speed matter only insofar as they translate into reproduction.",
                "zh": "适合度是相对繁殖成功率——即为下一代基因库贡献可存活、可育后代的数量。力量、寿命或速度只有在能转化为繁殖时才有意义。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The human tailbone (coccyx) and the reduced pelvic bones of whales are examples of what kind of evidence for evolution?",
                "zh": "人的尾骨和鲸退化的骨盆骨是哪种进化证据的例子？"
              },
              "choices": [
                "Vestigial structures",
                "Analogous structures",
                "Biogeography",
                "Molecular evidence"
              ],
              "answer": 0,
              "explanation": {
                "en": "These are vestigial structures—reduced remnants of features that were functional in ancestors (tails, hind limbs), evidence of descent with modification.",
                "zh": "它们是痕迹器官——祖先中曾有功能（尾、后肢）而现已退化的残余，是带有修饰的传承的证据。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What one-word term describes selection that favors intermediate phenotypes and selects against both extremes (like human birth weight)? Answer in lowercase.",
                "zh": "用一个词描述偏好中间表型、淘汰两个极端（如人类出生体重）的选择。用小写英文回答。"
              },
              "answer": "stabilizing",
              "accept": [
                "stabilizing selection",
                "stabilising",
                "稳定选择"
              ],
              "explanation": {
                "en": "Stabilizing selection reduces variation by favoring the intermediate and removing both extremes.",
                "zh": "稳定选择通过偏好中间型、淘汰两个极端来减少变异。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes structures with similar underlying anatomy inherited from a common ancestor, such as the forelimbs of humans, whales, and bats? Answer in lowercase.",
                "zh": "用一个词描述源自共同祖先、底层解剖结构相似的结构，如人、鲸、蝙蝠的前肢。用小写英文回答。"
              },
              "answer": "homologous",
              "accept": [
                "homologous structures",
                "homology",
                "同源结构"
              ],
              "explanation": {
                "en": "Homologous structures share ancestral anatomy despite different functions and are key evidence of common descent.",
                "zh": "同源结构尽管功能不同却共享祖先解剖结构，是共同起源的关键证据。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "When two unrelated lineages independently evolve similar traits because of similar environments (like the streamlined bodies of dolphins and sharks), the process is called ______ evolution. Answer in lowercase.",
                "zh": "当两个无亲缘关系的谱系因相似环境独立进化出相似性状（如海豚和鲨鱼的流线型身体）时，这个过程称为 ______ 进化。用小写英文回答。"
              },
              "answer": "convergent",
              "accept": [
                "convergence",
                "趋同",
                "趋同进化"
              ],
              "explanation": {
                "en": "Convergent evolution produces analogous structures—similar solutions to similar selective pressures in distantly related groups.",
                "zh": "趋同进化产生同功结构——在亲缘关系远的类群中，对相似选择压力的相似解决方案。"
              }
            }
          ]
        },
        {
          "id": "population-genetics-and-hardy-weinberg",
          "title": "Population Genetics and Hardy-Weinberg",
          "titleZh": "群体遗传学与哈迪-温伯格平衡",
          "content": [
            {
              "type": "h2",
              "en": "Populations, Gene Pools, and Allele Frequencies",
              "zh": "种群、基因库与等位基因频率"
            },
            {
              "type": "p",
              "en": "A population is a group of interbreeding individuals of the same species in the same area. All the alleles of all their genes make up the gene pool (基因库). Because individuals do not evolve, we track evolution by measuring how frequencies of alleles and genotypes in the gene pool change over generations. Microevolution (微进化) is exactly this: a change in allele frequencies in a population.",
              "zh": "种群（population）是同一区域内同种、可相互交配的个体群体。它们所有基因的全部等位基因构成基因库（gene pool）。由于个体不进化，我们通过测量基因库中等位基因和基因型频率随世代的变化来追踪进化。微进化（microevolution）正是如此：种群中等位基因频率的改变。"
            },
            {
              "type": "p",
              "en": "For a gene with two alleles, we let $p$ be the frequency of the dominant allele and $q$ the frequency of the recessive allele. Since these are the only two alleles, their frequencies must add to 1.",
              "zh": "对于有两个等位基因的基因，设 $p$ 为显性等位基因频率，$q$ 为隐性等位基因频率。由于只有这两个等位基因，其频率之和必为 1。"
            },
            {
              "type": "math",
              "tex": "p + q = 1"
            },
            {
              "type": "h3",
              "en": "The Hardy-Weinberg Principle",
              "zh": "哈迪-温伯格原理"
            },
            {
              "type": "p",
              "en": "The Hardy-Weinberg (哈迪-温伯格) principle states that in a non-evolving population, allele and genotype frequencies stay constant from generation to generation. It provides a null model—a baseline of what frequencies look like when NO evolutionary forces are acting. If we randomly pair alleles, the genotype frequencies follow the expansion of $(p + q)^2$:",
              "zh": "哈迪-温伯格（Hardy-Weinberg）原理指出：在不进化的种群中，等位基因和基因型频率世代保持恒定。它提供了一个零模型（null model）——即当没有任何进化力量作用时频率应有的基准。若随机配对等位基因，基因型频率遵循 $(p + q)^2$ 的展开式："
            },
            {
              "type": "math",
              "tex": "p^2 + 2pq + q^2 = 1"
            },
            {
              "type": "p",
              "en": "Here $p^2$ is the frequency of homozygous dominant individuals, $2pq$ is the frequency of heterozygotes (carriers), and $q^2$ is the frequency of homozygous recessive individuals. Because the recessive phenotype only appears in homozygotes, $q^2$ is usually the easiest value to measure in the field, and from it you can find everything else.",
              "zh": "其中 $p^2$ 是纯合显性个体的频率，$2pq$ 是杂合子（携带者）的频率，$q^2$ 是纯合隐性个体的频率。由于隐性表型只在纯合子中出现，$q^2$ 通常是野外最容易测得的数值，从它就能求出其余所有量。"
            },
            {
              "type": "h3",
              "en": "The Five Conditions",
              "zh": "五个条件"
            },
            {
              "type": "p",
              "en": "A population stays in Hardy-Weinberg equilibrium only if all five conditions are met. Each condition corresponds to an evolutionary force that is absent:",
              "zh": "只有当五个条件全部满足时，种群才处于哈迪-温伯格平衡。每个条件都对应着一种「不存在」的进化力量："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**No mutation:** Alleles are not converted from one form to another.",
                  "zh": "**没有突变：**等位基因不会从一种形式转变为另一种。"
                },
                {
                  "en": "**No gene flow (no migration):** No alleles enter or leave via immigrants or emigrants.",
                  "zh": "**没有基因流（无迁移）：**没有等位基因通过迁入或迁出而进出。"
                },
                {
                  "en": "**Large population size:** The population is (effectively) infinite, so there is no genetic drift from random sampling.",
                  "zh": "**种群足够大：**种群（实际上）无限大，因此不会因随机抽样产生遗传漂变。"
                },
                {
                  "en": "**Random mating:** Individuals mate without regard to genotype (no mate choice, no inbreeding).",
                  "zh": "**随机交配：**个体交配不考虑基因型（无配偶选择、无近亲繁殖）。"
                },
                {
                  "en": "**No natural selection:** All genotypes have equal fitness (equal survival and reproduction).",
                  "zh": "**没有自然选择：**所有基因型的适合度相等（生存和繁殖机会相同）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Hardy-Weinberg is a NULL hypothesis, not a description of real populations. Real populations almost always violate at least one condition, which is exactly why they evolve. On the exam, if observed genotype frequencies differ significantly from the $p^2 : 2pq : q^2$ predicted values, you conclude the population is evolving (one or more conditions is violated). Also: $p$ and $q$ are ALLELE frequencies; $p^2$, $2pq$, $q^2$ are GENOTYPE frequencies—do not mix them up.",
              "zh": "AP 提示：哈迪-温伯格是零假设，而非对真实种群的描述。真实种群几乎总会违反至少一个条件，这正是它们进化的原因。考试中，若观测到的基因型频率与 $p^2 : 2pq : q^2$ 预测值显著不同，就可判断该种群正在进化（违反了一个或多个条件）。此外：$p$ 和 $q$ 是等位基因频率；$p^2$、$2pq$、$q^2$ 是基因型频率——不要混淆。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A Full Worked Calculation",
                "zh": "例题 1：完整计算示例"
              },
              "problem": {
                "en": "In a population of 1000 people, 160 have a recessive condition (genotype aa). Assuming Hardy-Weinberg equilibrium, find $q$, $p$, the frequency of carriers ($Aa$), and the number of homozygous dominant ($AA$) individuals.",
                "zh": "在 1000 人的种群中，有 160 人患有某隐性疾病（基因型 aa）。假设处于哈迪-温伯格平衡，求 $q$、$p$、携带者（$Aa$）的频率，以及纯合显性（$AA$）个体的数量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The recessive phenotype equals $q^2$. Its frequency is $160/1000 = 0.16$, so $q^2 = 0.16$.",
                  "zh": "隐性表型等于 $q^2$。其频率为 $160/1000 = 0.16$，故 $q^2 = 0.16$。"
                },
                {
                  "type": "math",
                  "tex": "q = \\sqrt{0.16} = 0.4 \\qquad p = 1 - q = 0.6"
                },
                {
                  "type": "p",
                  "en": "Now find the genotype frequencies:",
                  "zh": "现在求各基因型频率："
                },
                {
                  "type": "math",
                  "tex": "2pq = 2(0.6)(0.4) = 0.48 \\qquad p^2 = (0.6)^2 = 0.36"
                },
                {
                  "type": "p",
                  "en": "So carriers ($Aa$) make up $0.48$ of the population = 480 people, and homozygous dominant ($AA$) make up $0.36$ = 360 people. Check: $360 + 480 + 160 = 1000$. ✓",
                  "zh": "因此携带者（$Aa$）占种群 $0.48$，即 480 人；纯合显性（$AA$）占 $0.36$，即 360 人。验证：$360 + 480 + 160 = 1000$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Testing Whether Evolution Is Occurring",
                "zh": "例题 2：检验是否正在发生进化"
              },
              "problem": {
                "en": "A population has allele frequencies $p = 0.7$ and $q = 0.3$. Hardy-Weinberg predicts what heterozygote frequency? A biologist observes only 20% heterozygotes. What can you conclude?",
                "zh": "某种群等位基因频率为 $p = 0.7$、$q = 0.3$。哈迪-温伯格预测的杂合子频率是多少？生物学家观测到杂合子只有 20%。你能得出什么结论？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "2pq = 2(0.7)(0.3) = 0.42"
                },
                {
                  "type": "p",
                  "en": "H-W predicts 42% heterozygotes, but only 20% are observed—far fewer than expected.",
                  "zh": "哈迪-温伯格预测 42% 的杂合子，但只观测到 20%——远少于预期。"
                },
                {
                  "type": "p",
                  "en": "A large deficit of heterozygotes means the population is NOT in equilibrium: at least one condition is violated. A common cause is non-random mating such as inbreeding, which increases homozygotes at the expense of heterozygotes. The population is evolving (or at least not in H-W equilibrium).",
                  "zh": "杂合子的大量缺失意味着该种群未处于平衡：至少违反了一个条件。常见原因是非随机交配，如近亲繁殖，它以牺牲杂合子为代价增加纯合子。该种群正在进化（或至少不处于哈迪-温伯格平衡）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Causes of Microevolution",
              "zh": "微进化的成因"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**Mutation (突变):** The ultimate source of new alleles; slow on its own but supplies the raw variation selection acts on.",
                  "zh": "**突变：**新等位基因的最终来源；单独作用很慢，但为选择提供原始变异。"
                },
                {
                  "en": "**Gene flow (基因流):** Movement of alleles between populations via migration; tends to make populations more genetically similar.",
                  "zh": "**基因流：**通过迁移在种群间转移等位基因；倾向于使种群在遗传上更相似。"
                },
                {
                  "en": "**Genetic drift (遗传漂变):** Random change in allele frequencies due to chance, strongest in small populations. The bottleneck effect (a population crash) and the founder effect (a few individuals starting a new population) are two examples.",
                  "zh": "**遗传漂变：**因偶然导致的等位基因频率随机变化，在小种群中最显著。瓶颈效应（种群骤减）和奠基者效应（少数个体建立新种群）是两个例子。"
                },
                {
                  "en": "**Non-random mating (非随机交配):** Mate choice or inbreeding changes genotype frequencies (though not allele frequencies by itself).",
                  "zh": "**非随机交配：**配偶选择或近亲繁殖改变基因型频率（尽管其本身不改变等位基因频率）。"
                },
                {
                  "en": "**Natural selection (自然选择):** The only mechanism that consistently produces adaptation, because it is non-random with respect to fitness.",
                  "zh": "**自然选择：**唯一能持续产生适应的机制，因为它相对于适合度是非随机的。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Genetic drift deserves special attention: in a small population, chance events (who happens to survive a storm, whose gametes happen to fuse) can cause allele frequencies to swing dramatically and can eliminate alleles entirely, reducing genetic diversity. Selection and drift both cause evolution, but only selection is adaptive—drift is random.",
              "zh": "遗传漂变值得特别注意：在小种群中，偶然事件（谁碰巧在风暴中存活、谁的配子碰巧结合）会使等位基因频率剧烈波动，甚至完全消除某等位基因，从而降低遗传多样性。选择和漂变都能引起进化，但只有选择是适应性的——漂变是随机的。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In the equation $p^2 + 2pq + q^2 = 1$, which term represents the frequency of heterozygous (carrier) individuals?",
                "zh": "在方程 $p^2 + 2pq + q^2 = 1$ 中，哪一项表示杂合（携带者）个体的频率？"
              },
              "choices": [
                "$p^2$",
                "$2pq$",
                "$q^2$",
                "$p + q$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$2pq$ is the heterozygote (carrier) frequency. $p^2$ is homozygous dominant, $q^2$ is homozygous recessive, and $p + q = 1$ describes allele (not genotype) frequencies.",
                "zh": "$2pq$ 是杂合子（携带者）频率。$p^2$ 是纯合显性，$q^2$ 是纯合隐性，$p + q = 1$ 描述的是等位基因（而非基因型）频率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is NOT one of the five conditions required for Hardy-Weinberg equilibrium?",
                "zh": "下列哪项不是哈迪-温伯格平衡所需的五个条件之一？"
              },
              "choices": [
                "A very large population size",
                "Random mating",
                "A high rate of beneficial mutation",
                "No natural selection"
              ],
              "answer": 2,
              "explanation": {
                "en": "Equilibrium requires NO mutation, not a high mutation rate. The five conditions are: no mutation, no gene flow, large population, random mating, and no selection. Any violation drives evolution.",
                "zh": "平衡要求没有突变，而非高突变率。五个条件是：无突变、无基因流、种群大、随机交配、无选择。任何违反都会驱动进化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A few birds are blown to a distant, uninhabited island and start a new population whose allele frequencies differ from the mainland by chance. This is best described as:",
                "zh": "几只鸟被吹到一个遥远无人的岛屿，建立了新种群，其等位基因频率因偶然而与大陆不同。这最好被描述为："
              },
              "choices": [
                "Gene flow",
                "The founder effect (genetic drift)",
                "Directional selection",
                "Stabilizing selection"
              ],
              "answer": 1,
              "explanation": {
                "en": "A small group starting a new population with unrepresentative allele frequencies is the founder effect, a form of genetic drift. Gene flow requires ongoing movement between existing populations; selection is non-random with respect to fitness.",
                "zh": "一小群个体以不具代表性的等位基因频率建立新种群，这是奠基者效应，属于遗传漂变。基因流需要现有种群间的持续移动；选择相对于适合度是非随机的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele is $q = 0.2$. What fraction of the population is homozygous dominant?",
                "zh": "在一个处于哈迪-温伯格平衡的种群中，隐性等位基因频率为 $q = 0.2$。种群中纯合显性的比例是多少？"
              },
              "choices": [
                "$0.04$",
                "$0.32$",
                "$0.64$",
                "$0.80$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$p = 1 - 0.2 = 0.8$, so homozygous dominant $= p^2 = 0.8^2 = 0.64$. (Choice A is $q^2$, choice B is $2pq$.)",
                "zh": "$p = 1 - 0.2 = 0.8$，故纯合显性 $= p^2 = 0.8^2 = 0.64$。（选项 A 是 $q^2$，选项 B 是 $2pq$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which process is the ONLY consistent mechanism that produces adaptation (a good “fit” between organism and environment)?",
                "zh": "哪个过程是唯一能持续产生适应（生物与环境的良好「契合」）的机制？"
              },
              "choices": [
                "Genetic drift",
                "Natural selection",
                "Mutation",
                "Gene flow"
              ],
              "answer": 1,
              "explanation": {
                "en": "Only natural selection is non-random with respect to fitness, so only it consistently produces adaptation. Drift is random; mutation supplies raw variation but is undirected; gene flow moves alleles without regard to fitness.",
                "zh": "只有自然选择相对于适合度是非随机的，因此只有它能持续产生适应。漂变是随机的；突变提供原始变异但无方向；基因流转移等位基因而不考虑适合度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a Hardy-Weinberg population, 36% of individuals show the recessive phenotype ($q^2 = 0.36$). What is the frequency of the recessive allele, $q$? Give a decimal.",
                "zh": "在一个哈迪-温伯格种群中，36% 的个体表现隐性表型（$q^2 = 0.36$）。隐性等位基因频率 $q$ 是多少？给出小数。"
              },
              "answer": "0.6",
              "accept": [
                "0.60",
                ".6"
              ],
              "explanation": {
                "en": "$q = \\sqrt{0.36} = 0.6$. Take the square root of the recessive-phenotype frequency to get the recessive allele frequency.",
                "zh": "$q = \\sqrt{0.36} = 0.6$。对隐性表型频率开平方即得隐性等位基因频率。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using the previous population ($q = 0.6$, $p = 0.4$), what fraction of individuals are heterozygous carriers ($2pq$)? Give a decimal.",
                "zh": "沿用上题种群（$q = 0.6$、$p = 0.4$），杂合携带者（$2pq$）的比例是多少？给出小数。"
              },
              "answer": "0.48",
              "accept": [
                ".48",
                "48%"
              ],
              "explanation": {
                "en": "$2pq = 2(0.4)(0.6) = 0.48$, so 48% of the population are carriers.",
                "zh": "$2pq = 2(0.4)(0.6) = 0.48$，故种群中 48% 是携带者。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population at Hardy-Weinberg equilibrium has $p = 0.9$ for the dominant allele. What is the frequency of the recessive allele $q$? Give a decimal.",
                "zh": "一个处于哈迪-温伯格平衡的种群显性等位基因频率 $p = 0.9$。隐性等位基因频率 $q$ 是多少？给出小数。"
              },
              "answer": "0.1",
              "accept": [
                "0.10",
                ".1"
              ],
              "explanation": {
                "en": "Since $p + q = 1$, $q = 1 - 0.9 = 0.1$.",
                "zh": "由于 $p + q = 1$，$q = 1 - 0.9 = 0.1$。"
              }
            }
          ]
        },
        {
          "id": "speciation-and-phylogeny",
          "title": "Speciation, Phylogeny, and the Origin of Life",
          "titleZh": "物种形成、系统发生与生命起源",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Species?",
              "zh": "什么是物种？"
            },
            {
              "type": "p",
              "en": "The biological species concept (生物学物种概念) defines a species as a group of populations whose members can interbreed in nature and produce fertile, viable offspring, and who are reproductively isolated from other such groups. Speciation (物种形成) is the process by which one species splits into two, and it happens when gene flow between populations is interrupted long enough for them to diverge into reproductively isolated groups.",
              "zh": "生物学物种概念（biological species concept）将物种定义为：其成员能在自然界相互交配并产生可育、可存活后代，且与其他此类群体生殖隔离的一组种群。物种形成（speciation）是一个物种分裂为两个的过程，当种群间的基因流中断足够久、使它们分化为生殖隔离的群体时便会发生。"
            },
            {
              "type": "h3",
              "en": "Reproductive Isolation",
              "zh": "生殖隔离"
            },
            {
              "type": "p",
              "en": "Reproductive isolating mechanisms are barriers that prevent members of different species from producing fertile offspring. They are grouped by whether they act before or after a zygote forms.",
              "zh": "生殖隔离机制是阻止不同物种成员产生可育后代的屏障。按其作用于合子（zygote）形成之前还是之后来分类。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**Prezygotic barriers (合子前屏障)** prevent mating or fertilization: habitat, temporal (different breeding times), behavioral (different courtship signals), mechanical (incompatible anatomy), and gametic (sperm and egg cannot fuse) isolation.",
                  "zh": "**合子前屏障**阻止交配或受精：生境隔离、时间隔离（繁殖季节不同）、行为隔离（求偶信号不同）、机械隔离（解剖结构不匹配）和配子隔离（精卵无法结合）。"
                },
                {
                  "en": "**Postzygotic barriers (合子后屏障)** act after fertilization: reduced hybrid viability (hybrids die young), reduced hybrid fertility (hybrids are sterile, like the mule), and hybrid breakdown (later generations are weak or sterile).",
                  "zh": "**合子后屏障**在受精后起作用：杂种活力降低（杂种早夭）、杂种可育性降低（杂种不育，如骡）和杂种衰败（后代虚弱或不育）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Modes of Speciation",
              "zh": "物种形成的模式"
            },
            {
              "type": "p",
              "en": "Allopatric speciation (异域物种形成) occurs when a physical barrier—a river, mountain range, or ocean—geographically separates a population. With gene flow cut off, mutation, drift, and selection push the two groups apart until they can no longer interbreed even if reunited. This is the most common mode.",
              "zh": "异域物种形成（allopatric speciation）发生在物理屏障——河流、山脉或海洋——将种群地理隔开时。基因流被切断后，突变、漂变和选择使两个群体分化，直到即使重新相遇也无法再交配。这是最常见的模式。"
            },
            {
              "type": "p",
              "en": "Sympatric speciation (同域物种形成) occurs without geographic separation—species arise within the same area. In plants it commonly happens through polyploidy (多倍体), where an error in cell division doubles the chromosome number, instantly creating individuals that cannot breed with the parent species. Habitat differentiation and sexual selection can also drive sympatric speciation.",
              "zh": "同域物种形成（sympatric speciation）在没有地理隔离的情况下发生——新物种在同一区域内产生。在植物中常通过多倍体（polyploidy）发生：细胞分裂错误使染色体数目加倍，瞬间产生无法与亲本物种交配的个体。生境分化和性选择也能驱动同域物种形成。"
            },
            {
              "type": "note",
              "en": "AP tip: The single distinguishing feature is geography. Allopatric = a geographic barrier separates populations (“allo” = other place). Sympatric = no geographic barrier, divergence happens in the same location (“sym” = together). Also remember polyploidy is a fast route to sympatric speciation, especially in plants.",
              "zh": "AP 提示：唯一的区别在于地理。异域 = 地理屏障将种群分隔（「allo」= 其他地方）。同域 = 没有地理屏障，分化在同一地点发生（「sym」= 一起）。还要记住多倍体是同域物种形成的快速途径，尤其在植物中。"
            },
            {
              "type": "h3",
              "en": "The Tempo of Evolution",
              "zh": "进化的节奏"
            },
            {
              "type": "p",
              "en": "Gradualism (渐变论) pictures evolution as slow, steady, continuous change accumulating over long spans, producing a smooth series of transitional forms. Punctuated equilibrium (间断平衡) proposes that species remain largely unchanged (in stasis) for long periods, interrupted by rapid bursts of change around speciation events. Both patterns appear in the fossil record; they describe rate and timing, not different mechanisms.",
              "zh": "渐变论（gradualism）将进化视为缓慢、稳定、连续的变化，在漫长的时间里累积，产生平滑的过渡型系列。间断平衡（punctuated equilibrium）认为物种在长时间内基本保持不变（停滞），间以在物种形成事件前后的快速变化爆发。两种模式在化石记录中都存在；它们描述的是速率和时机，而非不同的机制。"
            },
            {
              "type": "h3",
              "en": "Phylogeny and Cladistics",
              "zh": "系统发生与支序学"
            },
            {
              "type": "p",
              "en": "A phylogenetic tree (系统发生树) or cladogram represents hypotheses about the evolutionary relationships and common ancestry among groups. Each branch point (node) represents a common ancestor from which two lineages diverged; the closer two tips share a recent node, the more closely related they are. Trees are built from shared characters, ideally molecular data.",
              "zh": "系统发生树（phylogenetic tree）或支序图表示关于类群之间进化关系和共同祖先的假说。每个分支点（节点，node）代表两个谱系分化所自的共同祖先；两个末端共享的节点越近，它们的亲缘关系越近。树基于共享性状构建，理想情况下使用分子数据。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**Shared derived characters (共有衍征 / synapomorphies):** Novel traits shared by a group and its common ancestor; these define clades (e.g., hair defines mammals).",
                  "zh": "**共有衍征（synapomorphy）：**由某类群及其共同祖先共享的新性状；它们定义支系（例如毛发定义哺乳类）。"
                },
                {
                  "en": "**Out-group (外类群):** A distantly related lineage used as a reference to root the tree and identify which traits are ancestral versus derived.",
                  "zh": "**外类群（out-group）：**一个亲缘关系较远的谱系，用作参照以确定树的根，并判断哪些性状是祖先性状、哪些是衍生性状。"
                },
                {
                  "en": "**Common ancestry:** Every node is a shared ancestor; a clade includes an ancestor and ALL of its descendants.",
                  "zh": "**共同祖先：**每个节点都是一个共同祖先；一个支系包含一个祖先及其所有后代。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Read a phylogenetic tree by nodes, not by tip position. Relatedness is measured by how recently two branches share a common ancestor (node), NOT by how close together the tips are drawn or by reading left-to-right. Rotating branches at a node does not change the relationships. More shared derived characters = more recent common ancestry.",
              "zh": "AP 提示：读系统发生树要看节点，而不是末端位置。亲缘关系由两分支共享共同祖先（节点）的近远来衡量，而不是由末端画得多近或从左到右阅读。在节点处旋转分支不改变关系。共有衍征越多 = 共同祖先越近。"
            },
            {
              "type": "h3",
              "en": "The Origin of Life and Extinction",
              "zh": "生命起源与灭绝"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "**Early Earth:** ~4.6 billion years old; the early atmosphere lacked free oxygen. Small organic molecules (amino acids, nucleotides) could form abiotically.",
                  "zh": "**早期地球：**约 46 亿年前；早期大气缺乏游离氧。小的有机分子（氨基酸、核苷酸）能非生物地形成。"
                },
                {
                  "en": "**Miller-Urey experiment (米勒-尤里实验):** Showed that simulating early-Earth conditions (gases + energy from sparks) can produce amino acids, supporting abiotic synthesis of organic monomers.",
                  "zh": "**米勒-尤里实验（Miller-Urey）：**表明模拟早期地球条件（气体 + 火花能量）能生成氨基酸，支持有机单体的非生物合成。"
                },
                {
                  "en": "**RNA world (RNA 世界):** RNA likely came before DNA and proteins because RNA can both store information and catalyze reactions (ribozymes), so it could self-replicate.",
                  "zh": "**RNA 世界：**RNA 很可能先于 DNA 和蛋白质出现，因为 RNA 既能储存信息又能催化反应（核酶），故可自我复制。"
                },
                {
                  "en": "**Protobionts:** Membrane-bound droplets that maintained an internal chemistry—a step toward the first cells.",
                  "zh": "**原始细胞（protobionts）：**具膜的液滴，维持内部化学环境——迈向最初细胞的一步。"
                },
                {
                  "en": "**Endosymbiosis (内共生学说):** Mitochondria and chloroplasts arose when larger cells engulfed free-living prokaryotes; evidence includes their own circular DNA, double membranes, and independent (binary-fission-like) division.",
                  "zh": "**内共生学说（endosymbiosis）：**线粒体和叶绿体源于较大细胞吞入自由生活的原核生物；证据包括它们自身的环状 DNA、双层膜以及独立的（类似二分裂的）分裂。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Extinction is the permanent loss of a species and is the ultimate fate of most species. Background extinction happens continuously at a low rate; mass extinctions (like the end-Cretaceous event that removed non-avian dinosaurs) eliminate many groups quickly and open ecological niches, often triggering adaptive radiations in the survivors.",
              "zh": "灭绝（extinction）是物种的永久消失，也是大多数物种的最终命运。背景灭绝以低速率持续发生；大规模灭绝（如白垩纪末清除非鸟类恐龙的事件）迅速消灭许多类群并腾出生态位，常在幸存者中引发适应辐射。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading a Cladogram",
                "zh": "例题 1：解读支序图"
              },
              "problem": {
                "en": "A cladogram shows lizards, crocodiles, and birds. Crocodiles and birds share a more recent common ancestor with each other than either does with lizards. Which two groups are most closely related, and why can’t you say birds are more related to lizards just because both look scaly?",
                "zh": "一张支序图显示蜥蜴、鳄鱼和鸟。鳄鱼和鸟彼此共享的共同祖先比它们各自与蜥蜴共享的更近。哪两个类群亲缘关系最近？为什么不能仅因鸟和蜥蜴都看似有鳞就说它们更相近？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Crocodiles and birds are most closely related because they share the most recent common ancestor (node)—they form a clade (archosaurs). Relatedness is read from node depth, not overall appearance.",
                  "zh": "鳄鱼和鸟亲缘关系最近，因为它们共享最近的共同祖先（节点）——它们构成一个支系（初龙类）。亲缘关系由节点的深浅决定，而非整体外貌。"
                },
                {
                  "type": "p",
                  "en": "Superficial similarity (scaly skin) can be an ancestral trait retained by many groups or a convergence; it is not a shared derived character uniting birds with lizards. The molecular and skeletal synapomorphies place birds with crocodiles.",
                  "zh": "表面相似（有鳞的皮肤）可能是许多类群保留的祖先性状或趋同结果；它不是把鸟和蜥蜴联系起来的共有衍征。分子和骨骼上的共有衍征把鸟与鳄鱼归为一类。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Identifying an Isolation Barrier",
                "zh": "例题 2：判断隔离屏障"
              },
              "problem": {
                "en": "Two closely related frog species live in the same pond, but one breeds in early spring and the other in mid-summer, so they never mate. Is this a prezygotic or postzygotic barrier, and which specific type?",
                "zh": "两个亲缘关系很近的蛙类生活在同一池塘，但一种在早春繁殖，另一种在仲夏繁殖，因此从不交配。这是合子前还是合子后屏障？具体是哪一种？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The barrier acts before any zygote forms—mating never even occurs—so it is prezygotic.",
                  "zh": "该屏障在任何合子形成之前起作用——交配根本不发生——因此是合子前屏障。"
                },
                {
                  "type": "p",
                  "en": "Because the two species reproduce at different times, it is specifically temporal isolation. (If they mated but hybrids were sterile, that would be postzygotic reduced hybrid fertility.)",
                  "zh": "由于两个物种在不同时间繁殖，这具体是时间隔离。（若它们交配但杂种不育，那才是合子后的杂种可育性降低。）"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "According to the biological species concept, two organisms belong to the same species if they:",
                "zh": "根据生物学物种概念，两个生物属于同一物种，如果它们："
              },
              "choices": [
                "Look very similar to each other",
                "Live in the same geographic area",
                "Can interbreed in nature to produce fertile, viable offspring",
                "Have the same number of chromosomes"
              ],
              "answer": 2,
              "explanation": {
                "en": "The biological species concept is based on reproductive compatibility—the ability to interbreed and produce fertile, viable offspring. Appearance, location, and chromosome number can differ within a species or be similar between species.",
                "zh": "生物学物种概念基于生殖相容性——能相互交配并产生可育、可存活的后代。外貌、地点和染色体数目在同一物种内可不同，在不同物种间也可能相似。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A mule (offspring of a horse and a donkey) is healthy but sterile. This is an example of which reproductive barrier?",
                "zh": "骡（马与驴的后代）健康但不育。这是哪种生殖屏障的例子？"
              },
              "choices": [
                "Prezygotic – temporal isolation",
                "Prezygotic – behavioral isolation",
                "Postzygotic – reduced hybrid fertility",
                "Prezygotic – gametic isolation"
              ],
              "answer": 2,
              "explanation": {
                "en": "A zygote formed and grew into a viable adult, so the barrier acts AFTER fertilization—postzygotic. The hybrid is sterile, so it is reduced hybrid fertility. Prezygotic barriers would have prevented mating or fertilization in the first place.",
                "zh": "合子已形成并发育为可存活的成体，故屏障在受精之后起作用——合子后。杂种不育，因此是杂种可育性降低。合子前屏障会在一开始就阻止交配或受精。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A mountain range rises and divides one squirrel population into two, which slowly diverge until they can no longer interbreed. This is:",
                "zh": "一座山脉隆起，把一个松鼠种群分为两部分，它们缓慢分化直到不能再交配。这是："
              },
              "choices": [
                "Sympatric speciation",
                "Allopatric speciation",
                "Punctuated equilibrium",
                "Convergent evolution"
              ],
              "answer": 1,
              "explanation": {
                "en": "A geographic barrier (the mountains) separated the populations, cutting off gene flow—this is allopatric speciation. Sympatric speciation would occur without geographic separation; punctuated equilibrium describes tempo, not mode.",
                "zh": "地理屏障（山脉）分隔了种群，切断了基因流——这是异域物种形成。同域物种形成不需地理隔离；间断平衡描述的是节奏而非模式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On a phylogenetic tree, the relatedness of two species is determined by:",
                "zh": "在系统发生树上，两个物种的亲缘关系由什么决定？"
              },
              "choices": [
                "How physically close their branch tips are drawn",
                "How recently they share a common ancestor (node)",
                "Reading the tips from left to right",
                "How similar they look overall"
              ],
              "answer": 1,
              "explanation": {
                "en": "Relatedness is measured by how recently two lineages share a common ancestor (node). Tip proximity, left-to-right order, and overall appearance are misleading—branches can be rotated at any node without changing relationships.",
                "zh": "亲缘关系由两谱系共享共同祖先（节点）的近远衡量。末端的远近、从左到右的顺序和整体外貌都具误导性——在任一节点旋转分支都不改变关系。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which observation is the strongest evidence supporting the endosymbiotic origin of mitochondria?",
                "zh": "哪项观察是支持线粒体内共生起源的最有力证据？"
              },
              "choices": [
                "Mitochondria have their own circular DNA and double membranes and divide independently",
                "Mitochondria produce ATP for the cell",
                "Mitochondria are found in nearly all eukaryotes",
                "Mitochondria are located in the cytoplasm"
              ],
              "answer": 0,
              "explanation": {
                "en": "Their own circular DNA (like bacteria), double membranes (from being engulfed), and independent binary-fission-like division are the hallmark evidence that mitochondria descend from free-living prokaryotes. Making ATP, being widespread, or sitting in the cytoplasm do not by themselves indicate endosymbiosis.",
                "zh": "自身的环状 DNA（像细菌）、双层膜（源于被吞入）以及独立的类二分裂分裂，是线粒体源自自由生活原核生物的标志性证据。产生 ATP、分布广泛或位于细胞质本身都不能表明内共生。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What one-word term (starting with “allo-”) describes speciation that requires a geographic barrier to separate populations? Answer in lowercase.",
                "zh": "用一个词（以「allo-」开头）描述需要地理屏障分隔种群的物种形成。用小写英文回答。"
              },
              "answer": "allopatric",
              "accept": [
                "allopatric speciation",
                "异域物种形成"
              ],
              "explanation": {
                "en": "Allopatric speciation (\"other place\") requires geographic isolation that cuts off gene flow.",
                "zh": "异域物种形成（「其他地方」）需要切断基因流的地理隔离。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Barriers such as different breeding seasons or incompatible courtship behaviors that prevent mating BEFORE a zygote forms are called ______ barriers. Answer in lowercase.",
                "zh": "诸如繁殖季节不同或求偶行为不兼容、在合子形成之前阻止交配的屏障称为 ______ 屏障。用小写英文回答。"
              },
              "answer": "prezygotic",
              "accept": [
                "pre-zygotic",
                "prezygotic barriers",
                "合子前"
              ],
              "explanation": {
                "en": "Prezygotic barriers act before fertilization (habitat, temporal, behavioral, mechanical, gametic isolation). Postzygotic barriers act after a zygote forms.",
                "zh": "合子前屏障在受精之前起作用（生境、时间、行为、机械、配子隔离）。合子后屏障在合子形成之后起作用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "On a cladogram, a distantly related reference lineage used to root the tree and identify ancestral traits is called the ______. Answer in lowercase.",
                "zh": "在支序图上，用来确定树的根并识别祖先性状的一个亲缘关系较远的参照谱系称为 ______。用小写英文回答。"
              },
              "answer": "outgroup",
              "accept": [
                "out-group",
                "out group",
                "外类群"
              ],
              "explanation": {
                "en": "The out-group is a lineage that diverged before the groups of interest; comparing to it reveals which character states are ancestral versus derived, and it roots the tree.",
                "zh": "外类群是在所关注类群之前就分化的谱系；与它比较可揭示哪些性状状态是祖先性状、哪些是衍生性状，并为树定根。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-8-ecology",
      "title": "Unit 8: Ecology",
      "titleZh": "第八单元：生态学",
      "lessons": [
        {
          "id": "population-and-community-ecology",
          "title": "Population and Community Ecology",
          "titleZh": "种群与群落生态学",
          "content": [
            {
              "type": "h2",
              "en": "Populations: How Groups of Organisms Change",
              "zh": "种群：生物群体如何变化"
            },
            {
              "type": "p",
              "en": "A population is a group of individuals of the same species living in the same area and interbreeding. Population ecology studies the factors that make a population grow, shrink, or hold steady. Three properties describe a population: its density (how many individuals per unit area or volume), its dispersion (how those individuals are spaced), and its growth rate (how the number changes over time).",
              "zh": "种群（population）是指生活在同一区域、彼此可交配的同种个体组成的群体。种群生态学研究使种群增长、缩小或保持稳定的因素。描述种群有三个属性：密度（单位面积或体积内的个体数）、分布格局（个体的空间排布方式）以及增长率（数量随时间的变化）。"
            },
            {
              "type": "h3",
              "en": "Density and Dispersion",
              "zh": "密度与分布格局"
            },
            {
              "type": "p",
              "en": "Dispersion patterns reveal how individuals interact with each other and their environment. Clumped dispersion (the most common) occurs where resources are patchy or where social groups form. Uniform dispersion results from competition or territoriality that spaces individuals evenly. Random dispersion, in which position is independent of others, is rare and appears where resources are abundant and interactions are weak.",
              "zh": "分布格局揭示个体之间以及个体与环境如何相互作用。集群分布（最常见）出现在资源呈斑块状分布或形成社会群体的地方。均匀分布源于竞争或领域行为使个体等距分布。随机分布指个体位置彼此独立，较为罕见，出现在资源丰富且相互作用微弱之处。"
            },
            {
              "type": "h3",
              "en": "Exponential Growth",
              "zh": "指数增长"
            },
            {
              "type": "p",
              "en": "When resources are unlimited, a population grows at its maximum rate. Each individual reproduces at the per-capita rate $r$ (births minus deaths per individual per unit time), so the more individuals present, the faster the total grows. This produces a J-shaped curve. The rate of change of population size $N$ over time is:",
              "zh": "当资源无限时，种群以最大速率增长。每个个体按人均增长率 $r$ 繁殖（单位时间内每个个体的出生减死亡），因此个体越多，总量增长越快。这产生一条 J 形曲线。种群数量 $N$ 随时间的变化率为："
            },
            {
              "type": "math",
              "tex": "\\frac{dN}{dt} = rN"
            },
            {
              "type": "h3",
              "en": "Logistic Growth and Carrying Capacity",
              "zh": "逻辑斯谛增长与环境容纳量"
            },
            {
              "type": "p",
              "en": "Real environments have limits. Carrying capacity ($K$) is the maximum population size an environment can sustain given its resources. As $N$ approaches $K$, competition for food, space, and other resources slows growth until births equal deaths. This gives an S-shaped (sigmoidal) curve described by the logistic model, where the term $\\frac{K-N}{K}$ shrinks toward zero as $N$ nears $K$:",
              "zh": "真实环境是有限的。环境容纳量（carrying capacity，$K$）是环境依其资源所能维持的最大种群规模。当 $N$ 接近 $K$ 时，对食物、空间等资源的竞争使增长放缓，直到出生等于死亡。这产生一条 S 形（逻辑斯谛）曲线，其中 $\\frac{K-N}{K}$ 项随 $N$ 接近 $K$ 而趋于零："
            },
            {
              "type": "math",
              "tex": "\\frac{dN}{dt} = rN\\left(\\frac{K - N}{K}\\right)"
            },
            {
              "type": "note",
              "en": "AP tip: On the logistic curve, the growth RATE (dN/dt) is fastest at intermediate density (near K/2), not at the top. At K the population is largest but its growth rate is zero. Students often confuse \"largest population\" with \"fastest growth\"—read the axis carefully.",
              "zh": "AP 提示：在逻辑斯谛曲线上，增长速率（dN/dt）在中等密度（约 K/2 处）最快，而不是在顶端。在 $K$ 处种群数量最大，但增长速率为零。学生常把「种群最大」与「增长最快」混淆——务必看清坐标轴。"
            },
            {
              "type": "h3",
              "en": "r-selected and K-selected Species",
              "zh": "r 对策与 K 对策物种"
            },
            {
              "type": "p",
              "en": "Life-history strategies fall along a continuum. r-selected (r-strategist) species maximize reproductive rate: many small offspring, little parental care, early reproduction, and small body size. They thrive in unstable, unpredictable environments (e.g., insects, weeds). K-selected (K-strategist) species live near carrying capacity: few large offspring, heavy parental investment, long lifespans, and large body size. They dominate stable environments (e.g., elephants, humans, oak trees).",
              "zh": "生活史对策沿一个连续谱分布。r 对策物种（r-strategist）使繁殖速率最大化：后代多而小、亲代照料少、繁殖早、体型小。它们在不稳定、不可预测的环境中兴盛（如昆虫、杂草）。K 对策物种（K-strategist）生活在接近环境容纳量处：后代少而大、亲代投入多、寿命长、体型大。它们主导稳定环境（如大象、人类、橡树）。"
            },
            {
              "type": "h3",
              "en": "Survivorship Curves",
              "zh": "存活曲线"
            },
            {
              "type": "p",
              "en": "Plotting the number of survivors against age reveals three patterns. Type I curves (many large mammals, humans) show high survival through youth and midlife, with most deaths at old age. Type II curves (many birds, rodents) show a roughly constant death rate at all ages, giving a straight line on a log scale. Type III curves (many fish, invertebrates, plants) show very high early mortality, but the few survivors live long—typical of r-selected species producing enormous numbers of offspring.",
              "zh": "将存活个体数对年龄作图揭示三种模式。I 型曲线（许多大型哺乳动物、人类）表现为幼年和中年存活率高，多数死亡发生在老年。II 型曲线（许多鸟类、啮齿类）各年龄段死亡率大致恒定，在对数坐标上呈直线。III 型曲线（许多鱼类、无脊椎动物、植物）早期死亡率极高，但少数存活者能活得很久——是产生大量后代的 r 对策物种的典型特征。"
            },
            {
              "type": "h2",
              "en": "Communities: Species Living Together",
              "zh": "群落：共同生活的物种"
            },
            {
              "type": "p",
              "en": "A community is all the populations of different species that live and interact in an area. These interactions—competition, predation, and the several forms of symbiosis—shape which species can coexist and how abundant each becomes.",
              "zh": "群落（community）是指在某一区域内共同生活并相互作用的所有不同物种的种群。这些相互作用——竞争、捕食以及几种形式的共生——决定了哪些物种能共存以及各自的丰度。"
            },
            {
              "type": "h3",
              "en": "Competition and the Competitive Exclusion Principle",
              "zh": "竞争与竞争排斥原理"
            },
            {
              "type": "p",
              "en": "When two species require the same limiting resource, they compete. The competitive exclusion principle states that two species cannot coexist indefinitely on exactly the same limiting resource in the same place—one will out-reproduce and eliminate the other. Coexistence becomes possible only if the species differ enough in resource use (resource partitioning).",
              "zh": "当两个物种需要同一种有限资源时，它们发生竞争。竞争排斥原理（competitive exclusion principle）指出：两个物种无法在同一地点长期依赖完全相同的有限资源共存——其中一个会繁殖更快并排挤另一个。只有当物种在资源利用上差异足够大（资源分割）时，共存才成为可能。"
            },
            {
              "type": "h3",
              "en": "The Niche: Fundamental vs. Realized",
              "zh": "生态位：基础生态位与实际生态位"
            },
            {
              "type": "p",
              "en": "A niche is the full range of biotic and abiotic conditions and resources a species uses—its \"ecological role,\" not just where it lives. The fundamental niche is the entire niche a species could occupy in the absence of competitors. The realized niche is the portion it actually occupies once competition and other interactions restrict it. Competition therefore does not change the fundamental niche; it shrinks the realized niche.",
              "zh": "生态位（niche）是一个物种所利用的全部生物与非生物条件及资源——即它的「生态角色」，而不仅是它居住的地方。基础生态位（fundamental niche）是物种在没有竞争者时可占据的全部生态位。实际生态位（realized niche）是竞争及其他相互作用限制之后它实际占据的部分。因此竞争不改变基础生态位，而是缩小实际生态位。"
            },
            {
              "type": "h3",
              "en": "Predation and Symbiosis",
              "zh": "捕食与共生"
            },
            {
              "type": "p",
              "en": "Predation (one organism eats another) drives adaptations such as camouflage, warning coloration, and mimicry. Symbiosis refers to close, long-term interactions between two species:",
              "zh": "捕食（predation，一种生物取食另一种）驱动伪装、警戒色和拟态等适应。共生（symbiosis）指两个物种之间密切、长期的相互作用："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Mutualism (+/+): both species benefit, such as bees pollinating flowers or nitrogen-fixing bacteria in legume roots.",
                  "zh": "互利共生（mutualism，+/+）：双方都获益，如蜜蜂为花授粉，或豆科植物根部的固氮细菌。"
                },
                {
                  "en": "Commensalism (+/0): one benefits while the other is unaffected, such as barnacles riding on a whale.",
                  "zh": "偏利共生（commensalism，+/0）：一方获益而另一方不受影响，如藤壶附着在鲸身上。"
                },
                {
                  "en": "Parasitism (+/−): the parasite benefits at the host’s expense, such as a tapeworm in an intestine or ticks on a mammal.",
                  "zh": "寄生（parasitism，+/−）：寄生者获益而以宿主为代价，如肠道内的绦虫或哺乳动物身上的蜱。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Keystone Species",
              "zh": "关键种"
            },
            {
              "type": "p",
              "en": "A keystone species has an effect on community structure far larger than its abundance would suggest. Removing it causes disproportionate changes. The classic example is the sea star Pisaster: when it was removed from tide pools, the mussels it preyed upon exploded in number and crowded out other species, collapsing diversity. Keystone species often maintain diversity by controlling a dominant competitor.",
              "zh": "关键种（keystone species）对群落结构的影响远大于其数量所暗示的程度。移除它会引起不成比例的变化。经典例子是海星 Pisaster：将其从潮池中移除后，它所捕食的贻贝数量激增，挤占其他物种，使多样性崩溃。关键种常通过控制一个优势竞争者来维持多样性。"
            },
            {
              "type": "note",
              "en": "AP tip: Do not confuse a keystone species with a dominant species. A dominant species is abundant and has large effects because of its high biomass; a keystone species is often not abundant, yet its removal collapses the community. \"Impact out of proportion to abundance\" is the keystone signature.",
              "zh": "AP 提示：不要把关键种与优势种混淆。优势种数量多，因生物量大而影响大；关键种往往数量不多，但移除它会使群落崩溃。「影响与丰度不成比例」是关键种的标志。"
            },
            {
              "type": "h3",
              "en": "Ecological Succession",
              "zh": "生态演替"
            },
            {
              "type": "p",
              "en": "Succession is the predictable change in community composition over time after a disturbance. Primary succession begins on lifeless substrate with no soil—bare rock from a retreating glacier or new volcanic lava. Pioneer species such as lichens and mosses slowly build soil. Secondary succession follows a disturbance that leaves soil intact—after a fire, flood, or abandoned farm field—so it proceeds much faster because soil, seeds, and roots remain.",
              "zh": "演替（succession）是干扰之后群落组成随时间发生的可预测变化。初生演替（primary succession）始于没有土壤的无生命基质——冰川退去后的裸岩或新的火山熔岩。地衣和苔藓等先锋物种缓慢地形成土壤。次生演替（secondary succession）发生在保留了土壤的干扰之后——火灾、洪水或撂荒农田之后——因而进行得快得多，因为土壤、种子和根系仍然存在。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Reading a Logistic Growth Curve",
                "zh": "例题：解读逻辑斯谛增长曲线"
              },
              "problem": {
                "en": "A population of deer grows logistically toward a carrying capacity of $K = 1000$. Using $r = 0.5$ per year, at what population size is the population growing fastest, and what is that maximum growth rate?",
                "zh": "一个鹿种群按逻辑斯谛方式增长，趋向环境容纳量 $K = 1000$。设 $r = 0.5$ 每年，种群在多大规模时增长最快，该最大增长速率是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For logistic growth, dN/dt is maximized at $N = K/2$. Here that is $1000/2 = 500$ deer.",
                  "zh": "对于逻辑斯谛增长，dN/dt 在 $N = K/2$ 处最大。此处为 $1000/2 = 500$ 头鹿。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dN}{dt} = rN\\left(\\frac{K-N}{K}\\right) = 0.5 \\times 500 \\times \\frac{1000-500}{1000}"
                },
                {
                  "type": "math",
                  "tex": "= 0.5 \\times 500 \\times 0.5 = 125\\ \\text{deer per year}"
                },
                {
                  "type": "p",
                  "en": "The population adds the most individuals per year (125) when it is at half of carrying capacity, then growth slows as it approaches $K = 1000$.",
                  "zh": "当种群处于环境容纳量的一半时，每年增加的个体最多（125 头），随后随着接近 $K = 1000$ 增长放缓。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Interpreting a Competition Experiment",
                "zh": "例题：解读竞争实验"
              },
              "problem": {
                "en": "Grown separately, two Paramecium species each reach a stable population. Grown together in one tube, species A stabilizes while species B declines to extinction. What principle does this demonstrate, and what would allow the two to coexist?",
                "zh": "单独培养时，两种草履虫各自达到稳定种群。放在同一试管中共同培养时，物种 A 稳定而物种 B 减少至灭绝。这说明了什么原理，怎样才能使两者共存？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This is the competitive exclusion principle: because both species depend on the same limiting resource in the same space, the superior competitor (A) drives the other (B) extinct.",
                  "zh": "这是竞争排斥原理：由于两个物种在同一空间依赖同一有限资源，较强的竞争者（A）使另一个（B）灭绝。"
                },
                {
                  "type": "p",
                  "en": "Coexistence would require resource partitioning—the species using different foods, feeding at different depths, or otherwise dividing the resource so their realized niches no longer fully overlap.",
                  "zh": "共存需要资源分割——两物种利用不同食物、在不同深度取食，或以其他方式分割资源，使它们的实际生态位不再完全重叠。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "On a logistic growth curve, at what population size is the number of new individuals added per unit time greatest?",
                "zh": "在逻辑斯谛增长曲线上，单位时间内新增个体数在多大种群规模时最大？"
              },
              "choices": [
                "When $N$ is very small (near zero)",
                "When $N$ is about half of $K$",
                "When $N$ equals $K$",
                "When $N$ exceeds $K$"
              ],
              "answer": 1,
              "explanation": {
                "en": "dN/dt for the logistic model peaks at $N = K/2$. Near zero there are too few reproducers; at $K$ the resource-limitation term drives growth to zero. Confusing largest population (at $K$) with fastest growth (at K/2) is the classic error.",
                "zh": "逻辑斯谛模型的 dN/dt 在 $N = K/2$ 处达到峰值。接近零时繁殖者太少；在 $K$ 处资源限制项使增长为零。把最大种群（在 $K$）与最快增长（在 K/2）混淆是典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which set of traits best describes an r-selected species?",
                "zh": "下列哪组特征最能描述 r 对策物种？"
              },
              "choices": [
                "Few offspring, high parental care, long lifespan",
                "Large body size, late reproduction, stable habitat",
                "Many small offspring, little parental care, early reproduction",
                "Population held near carrying capacity year-round"
              ],
              "answer": 2,
              "explanation": {
                "en": "r-selected species maximize reproductive rate: many small offspring, minimal parental investment, and early reproduction, thriving in unstable environments. The other options describe K-selected species.",
                "zh": "r 对策物种使繁殖速率最大化：后代多而小、亲代投入极少、繁殖早，在不稳定环境中兴盛。其他选项描述的是 K 对策物种。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A barnacle attaches to a whale and is carried to feeding grounds; the whale is neither helped nor harmed. This relationship is an example of:",
                "zh": "藤壶附着在鲸身上并被带到觅食地；鲸既未获益也未受害。这种关系是以下哪种的例子？"
              },
              "choices": [
                "Mutualism",
                "Parasitism",
                "Commensalism",
                "Competition"
              ],
              "answer": 2,
              "explanation": {
                "en": "Commensalism is a +/0 interaction: the barnacle benefits (transport and access to food) while the whale is unaffected. Mutualism would benefit both; parasitism would harm the whale.",
                "zh": "偏利共生是 +/0 相互作用：藤壶获益（运输与获取食物），而鲸不受影响。互利共生会使双方获益；寄生则会伤害鲸。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The removal of a sea star from a tide pool causes mussels to overgrow the area and eliminate many other species. The sea star is best described as a:",
                "zh": "将海星从潮池中移除导致贻贝过度繁殖并消灭许多其他物种。海星最恰当地被描述为："
              },
              "choices": [
                "Dominant species",
                "Keystone species",
                "Pioneer species",
                "Invasive species"
              ],
              "answer": 1,
              "explanation": {
                "en": "A keystone species exerts effects out of proportion to its abundance; removing it collapses community diversity. It differs from a dominant species, whose large effect comes from high biomass or abundance.",
                "zh": "关键种的影响与其丰度不成比例；移除它会使群落多样性崩溃。它不同于优势种——后者的巨大影响来自高生物量或高丰度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How does competition affect a species’ realized niche compared with its fundamental niche?",
                "zh": "与基础生态位相比，竞争如何影响一个物种的实际生态位？"
              },
              "choices": [
                "It expands the realized niche beyond the fundamental niche",
                "It restricts the realized niche to a portion of the fundamental niche",
                "It has no effect on either niche",
                "It permanently changes the fundamental niche"
              ],
              "answer": 1,
              "explanation": {
                "en": "The fundamental niche is what a species could occupy without competitors; competition and other interactions shrink it to the realized niche the species actually occupies. Competition does not alter the fundamental niche itself.",
                "zh": "基础生态位是物种在没有竞争者时可占据的范围；竞争及其他相互作用将其缩小为物种实际占据的实际生态位。竞争本身不改变基础生态位。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population has $r = 0.2$ per year and currently $N = 300$ individuals with unlimited resources. Using $dN/dt = rN$, how many individuals are added in the first year? Give a number.",
                "zh": "一个种群 $r = 0.2$ 每年，资源无限，当前 $N = 300$ 个个体。用 $dN/dt = rN$，第一年增加多少个体？给出数字。"
              },
              "answer": "60",
              "accept": [
                "60",
                "60.0"
              ],
              "explanation": {
                "en": "$dN/dt = rN = 0.2 \\times 300 = 60$ individuals per year.",
                "zh": "$dN/dt = rN = 0.2 \\times 300 = 60$ 个体每年。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population grows logistically with $r = 0.4$, $K = 2000$, and current $N = 2000$. What is dN/dt at this moment? Give a number.",
                "zh": "一个种群按逻辑斯谛方式增长，$r = 0.4$，$K = 2000$，当前 $N = 2000$。此刻 dN/dt 是多少？给出数字。"
              },
              "answer": "0",
              "accept": [
                "0",
                "0.0"
              ],
              "explanation": {
                "en": "When $N = K$, the term $(K-N)/K = 0$, so $dN/dt = rN \\times 0 = 0$. Growth stops at carrying capacity.",
                "zh": "当 $N = K$ 时，$(K-N)/K = 0$，故 $dN/dt = rN \\times 0 = 0$。在环境容纳量处增长停止。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes succession that begins on bare rock or lava with no pre-existing soil? Give the two-word term (lowercase).",
                "zh": "哪个术语描述始于裸岩或熔岩、没有既存土壤的演替？给出该术语（小写）。"
              },
              "answer": "primary succession",
              "accept": [
                "primary succession",
                "primary",
                "初生演替"
              ],
              "explanation": {
                "en": "Primary succession starts on lifeless substrate lacking soil, so pioneer species like lichens must first build soil; it is much slower than secondary succession, which retains soil after a disturbance.",
                "zh": "初生演替始于缺乏土壤的无生命基质，因此地衣等先锋物种必须先形成土壤；它比保留土壤的次生演替慢得多。"
              }
            }
          ]
        },
        {
          "id": "ecosystems-and-energy-flow",
          "title": "Ecosystems and Energy Flow",
          "titleZh": "生态系统与能量流动",
          "content": [
            {
              "type": "h2",
              "en": "Ecosystems: Energy and Matter",
              "zh": "生态系统：能量与物质"
            },
            {
              "type": "p",
              "en": "An ecosystem includes all the organisms in an area plus the physical (abiotic) environment they interact with. Two fundamental principles govern every ecosystem: energy flows through it in one direction (entering as sunlight, leaving as heat) and never recycles, whereas matter cycles repeatedly between organisms and the environment. Keeping these two ideas separate—energy flows, matter cycles—is the key to this unit.",
              "zh": "生态系统（ecosystem）包括某一区域内的所有生物以及它们与之相互作用的物理（非生物）环境。两条基本原理支配着每个生态系统：能量单向流过生态系统（以阳光进入、以热能离开）且从不循环，而物质则在生物与环境之间反复循环。分清这两点——能量流动、物质循环——是本单元的关键。"
            },
            {
              "type": "h3",
              "en": "Trophic Levels and Food Webs",
              "zh": "营养级与食物网"
            },
            {
              "type": "p",
              "en": "A trophic level is a feeding position in an ecosystem. Energy enters at the bottom and moves upward as one organism eats another:",
              "zh": "营养级（trophic level）是生物在生态系统中的取食位置。能量从底层进入，并随着一种生物取食另一种而向上传递："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Producers (autotrophs) capture energy from sunlight (or chemicals) to build organic molecules—plants, algae, and cyanobacteria. They form the base of every food web.",
                  "zh": "生产者（producers，自养生物）从阳光（或化学物质）中获取能量以合成有机分子——植物、藻类和蓝细菌。它们构成每个食物网的基础。"
                },
                {
                  "en": "Primary consumers are herbivores that eat producers.",
                  "zh": "初级消费者（primary consumers）是取食生产者的食草动物。"
                },
                {
                  "en": "Secondary consumers eat primary consumers; tertiary consumers eat secondary consumers. These are carnivores (or omnivores).",
                  "zh": "次级消费者（secondary consumers）取食初级消费者；三级消费者（tertiary consumers）取食次级消费者。它们是食肉动物（或杂食动物）。"
                },
                {
                  "en": "Decomposers (detritivores, bacteria, and fungi) break down dead organisms and waste, returning nutrients to the soil and completing matter cycles.",
                  "zh": "分解者（decomposers，包括腐食动物、细菌和真菌）分解死亡生物和废物，将养分归还土壤，使物质循环得以完成。"
                }
              ]
            },
            {
              "type": "p",
              "en": "A food chain is a single linear path of energy; a food web is the realistic network of many interconnected chains, since most consumers eat more than one kind of food and are eaten by more than one predator.",
              "zh": "食物链（food chain）是单一的线性能量路径；食物网（food web）是由许多相互连接的食物链构成的更真实的网络，因为多数消费者不止取食一种食物，也被不止一种捕食者取食。"
            },
            {
              "type": "h3",
              "en": "Energy Flow and the 10% Rule",
              "zh": "能量流动与十分之一定律"
            },
            {
              "type": "p",
              "en": "When energy passes from one trophic level to the next, most of it is lost. On average only about 10% of the energy stored in one trophic level is converted into biomass at the next level; the other ~90% is lost as heat during cellular respiration, spent on movement and other life processes, or never consumed. This is the 10% rule.",
              "zh": "能量从一个营养级传递到下一个营养级时，大部分会损失。平均而言，某营养级储存的能量只有约 10% 转化为下一营养级的生物量；其余约 90% 在细胞呼吸中以热能形式散失、消耗于运动等生命过程，或根本未被取食。这就是十分之一定律。"
            },
            {
              "type": "p",
              "en": "Because energy shrinks roughly tenfold at each step, an energy pyramid is always widest at the producer base and narrows toward the top. This is why food chains rarely exceed four or five levels—there is not enough energy left to support higher levels—and why top predators are rare and require large ranges.",
              "zh": "由于每一步能量约缩小十倍，能量金字塔总是在生产者底部最宽，向顶端变窄。这就是为什么食物链很少超过四五个营养级——剩余能量不足以支撑更高营养级——也是为什么顶级捕食者稀少且需要广阔的活动范围。"
            },
            {
              "type": "math",
              "tex": "\\text{Energy at next level} \\approx 0.10 \\times \\text{Energy at current level}"
            },
            {
              "type": "note",
              "en": "AP tip: The 10% rule explains why eating lower on the food chain (plants) feeds more people than eating higher (meat): energy is lost at each transfer. It also explains why toxins that are not excreted—like mercury or DDT—become more concentrated up the chain (biomagnification), since biomass shrinks but toxin quantity does not.",
              "zh": "AP 提示：十分之一定律解释了为什么在食物链下层取食（植物）能养活比上层取食（肉类）更多的人：每次传递都损失能量。它也解释了为什么不被排出的毒素——如汞或 DDT——沿食物链向上浓度升高（生物放大），因为生物量缩小而毒素总量不变。"
            },
            {
              "type": "h3",
              "en": "Primary Productivity: Gross vs. Net",
              "zh": "初级生产力：总初级生产力与净初级生产力"
            },
            {
              "type": "p",
              "en": "Primary productivity is the rate at which producers convert solar (or chemical) energy into organic compounds. Gross primary productivity (GPP) is the total energy captured by photosynthesis. But producers use some of that energy for their own cellular respiration ($R$). Net primary productivity (NPP) is what remains and is available to consumers:",
              "zh": "初级生产力（primary productivity）是生产者将太阳能（或化学能）转化为有机物的速率。总初级生产力（gross primary productivity，GPP）是光合作用捕获的全部能量。但生产者会将其中一部分能量用于自身的细胞呼吸（$R$）。净初级生产力（net primary productivity，NPP）是剩余的、可供消费者利用的部分："
            },
            {
              "type": "math",
              "tex": "\\text{NPP} = \\text{GPP} - R"
            },
            {
              "type": "p",
              "en": "NPP, not GPP, sets the amount of energy actually available to the rest of the ecosystem. The most productive ecosystems per unit area are tropical rainforests and estuaries; the open ocean has low productivity per area but, because of its vast size, contributes a large share of Earth’s total NPP.",
              "zh": "决定生态系统其余部分实际可用能量的是 NPP，而非 GPP。单位面积生产力最高的生态系统是热带雨林和河口；开阔大洋单位面积生产力低，但由于面积极大，贡献了地球总 NPP 的很大一部分。"
            },
            {
              "type": "h3",
              "en": "Biogeochemical Cycles",
              "zh": "生物地球化学循环"
            },
            {
              "type": "p",
              "en": "Unlike energy, matter is finite and must be recycled. Biogeochemical cycles move essential elements between living organisms and reservoirs in the atmosphere, water, and rock.",
              "zh": "与能量不同，物质是有限的，必须循环利用。生物地球化学循环（biogeochemical cycles）使必需元素在生物与大气、水体、岩石等储库之间移动。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Carbon cycle: photosynthesis removes CO₂ from the atmosphere and fixes it into sugars; cellular respiration, decomposition, and combustion of fossil fuels return it. The major reservoirs are the atmosphere, oceans, and fossil fuels.",
                  "zh": "碳循环：光合作用从大气中吸收 CO₂ 并将其固定为糖类；细胞呼吸、分解以及化石燃料燃烧则将其归还。主要储库是大气、海洋和化石燃料。"
                },
                {
                  "en": "Nitrogen cycle: the atmosphere is ~78% N₂, but organisms cannot use N₂ directly. Nitrogen fixation by bacteria (many in legume root nodules) converts N₂ to ammonia; nitrification then produces nitrate that plants absorb; denitrification returns N₂ to the air. Nitrogen is often the limiting nutrient for plant growth.",
                  "zh": "氮循环：大气约 78% 为 N₂，但生物无法直接利用 N₂。细菌进行的固氮作用（许多在豆科植物根瘤中）将 N₂ 转化为氨；随后硝化作用产生植物可吸收的硝酸盐；反硝化作用则将 N₂ 归还大气。氮常是植物生长的限制性养分。"
                },
                {
                  "en": "Phosphorus cycle: has NO significant atmospheric (gas) phase. Phosphorus is released from weathering rock, taken up by plants, and cycled through organisms; it is often the limiting nutrient in freshwater and soil.",
                  "zh": "磷循环：没有显著的大气（气态）阶段。磷由岩石风化释放，被植物吸收，并在生物间循环；它常是淡水和土壤中的限制性养分。"
                },
                {
                  "en": "Water cycle: driven by solar energy through evaporation and transpiration (from plants) into the atmosphere, then condensation and precipitation back to land and oceans.",
                  "zh": "水循环：由太阳能驱动，通过蒸发和蒸腾（来自植物）进入大气，再经凝结和降水返回陆地与海洋。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: A frequently tested distinction is that the carbon, nitrogen, and water cycles all have a major atmospheric reservoir, but the phosphorus cycle does not—it is sedimentary and moves through rock, soil, and water only. This is why phosphorus so often limits productivity.",
              "zh": "AP 提示：常考的一个区别是：碳循环、氮循环和水循环都有主要的大气储库，而磷循环没有——它是沉积型的，只在岩石、土壤和水中移动。这就是磷如此经常限制生产力的原因。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Applying the 10% Rule",
                "zh": "例题：应用十分之一定律"
              },
              "problem": {
                "en": "Producers in a grassland store $50{,}000$ kcal of energy. Approximately how much energy is available to secondary consumers (two levels up)?",
                "zh": "某草原的生产者储存了 $50{,}000$ kcal 的能量。传递到次级消费者（向上两级）的能量大约是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the 10% rule once to reach primary consumers, then again to reach secondary consumers.",
                  "zh": "应用一次十分之一定律到达初级消费者，再应用一次到达次级消费者。"
                },
                {
                  "type": "math",
                  "tex": "50{,}000 \\times 0.10 = 5{,}000\\ \\text{kcal (primary consumers)}"
                },
                {
                  "type": "math",
                  "tex": "5{,}000 \\times 0.10 = 500\\ \\text{kcal (secondary consumers)}"
                },
                {
                  "type": "p",
                  "en": "Only about $500$ kcal—1% of the original producer energy—reaches the secondary consumers. This steep loss is why higher trophic levels support so few individuals.",
                  "zh": "只有约 $500$ kcal——原始生产者能量的 1%——到达次级消费者。这种急剧损失正是高营养级能支撑的个体如此之少的原因。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Calculating Net Primary Productivity",
                "zh": "例题：计算净初级生产力"
              },
              "problem": {
                "en": "A forest fixes $12{,}000$ kcal/m²/yr through photosynthesis (GPP) and the plants use $8{,}000$ kcal/m²/yr in respiration. What is the NPP, and what does it represent?",
                "zh": "某森林通过光合作用固定 $12{,}000$ kcal/m²/年（GPP），植物在呼吸中使用 $8{,}000$ kcal/m²/年。NPP 是多少，它代表什么？"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\text{NPP} = \\text{GPP} - R = 12{,}000 - 8{,}000 = 4{,}000\\ \\text{kcal/m}^2\\text{/yr}"
                },
                {
                  "type": "p",
                  "en": "The NPP of $4{,}000$ kcal/m²/yr is the energy stored as new plant biomass after respiration—the amount actually available to herbivores and the rest of the food web.",
                  "zh": "NPP 为 $4{,}000$ kcal/m²/年，是呼吸之后储存为新植物生物量的能量——即实际可供食草动物及食物网其余部分利用的量。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly contrasts how energy and matter move through an ecosystem?",
                "zh": "下列哪项正确对比了能量与物质在生态系统中的移动方式？"
              },
              "choices": [
                "Both energy and matter are recycled endlessly",
                "Energy cycles while matter flows through and is lost",
                "Energy flows through one way and is lost as heat, while matter cycles",
                "Neither energy nor matter enters or leaves an ecosystem"
              ],
              "answer": 2,
              "explanation": {
                "en": "Energy enters as sunlight and exits as heat—a one-way flow—while matter (carbon, nitrogen, etc.) is repeatedly recycled between organisms and the environment. Reversing these two is the most common error.",
                "zh": "能量以阳光进入、以热能离开——单向流动——而物质（碳、氮等）在生物与环境之间反复循环。把这两者颠倒是最常见的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Approximately what percentage of the energy at one trophic level is incorporated into biomass at the next higher level?",
                "zh": "某营养级的能量大约有百分之几被并入下一个更高营养级的生物量？"
              },
              "choices": [
                "90%",
                "50%",
                "10%",
                "1%"
              ],
              "answer": 2,
              "explanation": {
                "en": "The 10% rule: about 10% of energy is transferred to the next level, while ~90% is lost mainly as heat from cellular respiration and to uneaten or unassimilated material.",
                "zh": "十分之一定律：约 10% 的能量传递到下一营养级，而约 90% 主要以细胞呼吸的热能形式，以及未被取食或未被同化的物质损失掉。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which biogeochemical cycle does NOT have a significant atmospheric (gaseous) reservoir?",
                "zh": "下列哪个生物地球化学循环没有显著的大气（气态）储库？"
              },
              "choices": [
                "Carbon cycle",
                "Nitrogen cycle",
                "Water cycle",
                "Phosphorus cycle"
              ],
              "answer": 3,
              "explanation": {
                "en": "The phosphorus cycle is sedimentary, moving through rock, soil, and water with no major gas phase. Carbon, nitrogen, and water all have large atmospheric reservoirs.",
                "zh": "磷循环是沉积型的，在岩石、土壤和水中移动，没有主要气态阶段。碳、氮和水都有大的大气储库。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Nitrogen-fixing bacteria are essential to ecosystems because they:",
                "zh": "固氮细菌对生态系统至关重要，因为它们："
              },
              "choices": [
                "Convert atmospheric N₂ into a form organisms can use, such as ammonia",
                "Break down glucose to release energy",
                "Convert CO₂ into sugars during photosynthesis",
                "Release phosphorus from weathering rock"
              ],
              "answer": 0,
              "explanation": {
                "en": "Although the air is ~78% N₂, organisms cannot use N₂ directly. Nitrogen fixation by bacteria converts N₂ to ammonia, making nitrogen biologically available. The other choices describe respiration, photosynthesis, and weathering.",
                "zh": "尽管空气约 78% 为 N₂，生物却无法直接利用 N₂。细菌的固氮作用将 N₂ 转化为氨，使氮在生物学上可利用。其他选项描述的是呼吸、光合作用和风化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why do most food chains contain only four or five trophic levels?",
                "zh": "为什么多数食物链只有四五个营养级？"
              },
              "choices": [
                "Predators at high levels reproduce too quickly",
                "So little energy remains at high levels that it cannot support additional levels",
                "Decomposers destroy the top predators",
                "Matter runs out before energy does"
              ],
              "answer": 1,
              "explanation": {
                "en": "Because roughly 90% of energy is lost at each transfer, the energy remaining after several steps is too small to support another trophic level. This is a direct consequence of the 10% rule, not a matter shortage.",
                "zh": "由于每次传递约损失 90% 的能量，经过几步之后剩余能量太少，无法支撑另一个营养级。这是十分之一定律的直接结果，而非物质短缺。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Producers store $80{,}000$ kcal. Using the 10% rule, how many kcal are available to the primary consumers? Give a number.",
                "zh": "生产者储存了 $80{,}000$ kcal。用十分之一定律，初级消费者可获得多少 kcal？给出数字。"
              },
              "answer": "8000",
              "accept": [
                "8000",
                "8,000",
                "8000.0"
              ],
              "explanation": {
                "en": "$80{,}000 \\times 0.10 = 8{,}000$ kcal transferred to the primary consumers.",
                "zh": "$80{,}000 \\times 0.10 = 8{,}000$ kcal 传递给初级消费者。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An ecosystem has a gross primary productivity of $15{,}000$ kcal/m²/yr and producer respiration of $9{,}000$ kcal/m²/yr. What is the net primary productivity in kcal/m²/yr? Give a number.",
                "zh": "某生态系统总初级生产力为 $15{,}000$ kcal/m²/年，生产者呼吸为 $9{,}000$ kcal/m²/年。净初级生产力是多少 kcal/m²/年？给出数字。"
              },
              "answer": "6000",
              "accept": [
                "6000",
                "6,000",
                "6000.0"
              ],
              "explanation": {
                "en": "NPP = GPP − R = $15{,}000 - 9{,}000 = 6{,}000$ kcal/m²/yr, the energy stored as new biomass and available to consumers.",
                "zh": "NPP = GPP − R = $15{,}000 - 9{,}000 = 6{,}000$ kcal/m²/年，即储存为新生物量、可供消费者利用的能量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the general term for organisms such as bacteria and fungi that break down dead organisms and return nutrients to the environment? Give the term (lowercase).",
                "zh": "像细菌和真菌这样分解死亡生物并将养分归还环境的生物，其统称是什么？给出该术语（小写）。"
              },
              "answer": "decomposers",
              "accept": [
                "decomposers",
                "decomposer",
                "分解者"
              ],
              "explanation": {
                "en": "Decomposers (including detritivores, bacteria, and fungi) recycle nutrients from dead matter back into the soil, completing biogeochemical cycles.",
                "zh": "分解者（包括腐食动物、细菌和真菌）将死亡物质中的养分循环回土壤，使生物地球化学循环得以完成。"
              }
            }
          ]
        },
        {
          "id": "behavior-and-human-impact",
          "title": "Animal Behavior and Human Impact",
          "titleZh": "动物行为与人类影响",
          "content": [
            {
              "type": "h2",
              "en": "Animal Behavior",
              "zh": "动物行为"
            },
            {
              "type": "p",
              "en": "Behavior is what an animal does and how it does it—its response to stimuli from the environment or from other organisms. Natural selection shapes behavior just as it shapes anatomy: behaviors that improve survival and reproduction become more common over generations. Behaviors range from rigidly programmed to highly flexible.",
              "zh": "行为（behavior）是动物做什么以及如何做——它对来自环境或其他生物的刺激的反应。自然选择塑造行为，正如塑造解剖结构一样：提高生存和繁殖的行为在世代中变得更普遍。行为从严格程序化到高度灵活不等。"
            },
            {
              "type": "h3",
              "en": "Innate vs. Learned Behavior",
              "zh": "先天行为与后天习得行为"
            },
            {
              "type": "p",
              "en": "Innate (instinctive) behavior is genetically programmed and performed correctly the first time, without prior experience; it is the same across all members of a species. Learned behavior is modified by experience and can differ among individuals. Most behavior lies on a spectrum, combining an innate foundation with learned refinement.",
              "zh": "先天（本能）行为受基因程序控制，无需事先经验，第一次就能正确完成；在一个物种的所有成员中都相同。后天习得行为则因经验而改变，个体之间可能不同。多数行为处于一个连续谱上，将先天基础与后天习得的精细化结合在一起。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Fixed action pattern (FAP): an innate, stereotyped sequence of movements triggered by a specific sign stimulus and, once started, carried to completion. Example: a greylag goose rolling any egg-shaped object back to its nest.",
                  "zh": "固定动作模式（fixed action pattern，FAP）：一种先天的、刻板的动作序列，由特定的信号刺激触发，一旦开始就会执行到底。例：灰雁会将任何蛋形物体滚回巢中。"
                },
                {
                  "en": "Taxis: a directed movement toward or away from a stimulus (e.g., a fish orienting upstream against a current). Kinesis: a change in the speed or rate of random movement in response to a stimulus, without a set direction (e.g., pill bugs moving faster in dry areas).",
                  "zh": "趋性（taxis）：朝向或远离刺激的定向运动（如鱼逆流定向游动）。动性（kinesis）：对刺激作出反应而改变随机运动的速度或频率，但无固定方向（如鼠妇在干燥处移动更快）。"
                },
                {
                  "en": "Imprinting: a form of learning limited to a critical period early in life, in which a young animal forms an attachment (e.g., goslings following the first moving object they see).",
                  "zh": "印记（imprinting）：一种局限于生命早期关键期的学习形式，幼年动物在此期形成依恋（如雏鹅跟随它们看到的第一个移动物体）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Communication and Responses to the Environment",
              "zh": "通讯与对环境的反应"
            },
            {
              "type": "p",
              "en": "Animals communicate using signals—visual, chemical (pheromones), auditory, or tactile—to coordinate mating, warn of predators, and mark territory. The honeybee waggle dance, which conveys the direction and distance of food, is a classic example. Organisms also adjust behavior in response to environmental cues: many respond to changing day length (photoperiod) with seasonal migration, hibernation, or reproduction, timing costly activities to favorable conditions.",
              "zh": "动物利用信号——视觉、化学（信息素）、听觉或触觉——进行通讯，以协调交配、警告捕食者的到来并标记领域。传达食物方向与距离的蜜蜂摇摆舞是经典例子。生物也会根据环境线索调整行为：许多生物对日照长度（光周期）的变化作出反应，进行季节性迁徙、冬眠或繁殖，将代价高昂的活动安排在有利条件下。"
            },
            {
              "type": "h3",
              "en": "Altruism and Kin Selection",
              "zh": "利他行为与亲缘选择"
            },
            {
              "type": "p",
              "en": "Altruism is behavior that lowers an individual’s own fitness while raising the fitness of another—for example, a ground squirrel giving an alarm call that draws a predator’s attention. This seems to contradict natural selection until we consider kin selection: helping close relatives, who share many of the same genes, can pass on copies of the altruist’s genes indirectly. The closer the relative and the greater the benefit relative to the cost, the more favored such behavior is (this is the logic behind inclusive fitness).",
              "zh": "利他行为（altruism）是降低个体自身适合度而提高他者适合度的行为——例如，地松鼠发出报警叫声吸引捕食者的注意。这看似与自然选择矛盾，直到我们考虑亲缘选择（kin selection）：帮助共享许多相同基因的近亲，可以间接传递利他者基因的拷贝。亲缘关系越近、收益相对代价越大，此类行为就越受青睐（这就是广义适合度背后的逻辑）。"
            },
            {
              "type": "note",
              "en": "AP tip: The key test of innate vs. learned is whether experience is required. A fixed action pattern runs to completion even when it no longer makes sense (the goose keeps \"rolling\" even after the egg is removed), showing it is innate and stimulus-triggered, not thoughtfully adjusted. Do not call imprinting \"innate\"—it is learning, but only during a narrow critical period.",
              "zh": "AP 提示：区分先天与习得的关键判据是是否需要经验。固定动作模式即使已不再有意义也会执行到底（即使蛋被移走，鹅仍继续做「滚蛋」动作），表明它是先天的、由刺激触发的，而非经过思考的调整。不要把印记称为「先天」——它是学习，但只发生在狭窄的关键期内。"
            },
            {
              "type": "h2",
              "en": "Human Impact on Ecosystems",
              "zh": "人类对生态系统的影响"
            },
            {
              "type": "p",
              "en": "Human activity now alters ecosystems worldwide, reducing their stability and the biodiversity that supports it. Diverse ecosystems tend to be more resilient—better able to resist and recover from disturbance—so biodiversity loss makes ecosystems more fragile.",
              "zh": "人类活动如今在全球范围改变着生态系统，降低了生态系统的稳定性以及支撑稳定性的生物多样性。多样化的生态系统往往更有韧性——更能抵抗干扰并从中恢复——因此生物多样性丧失使生态系统更加脆弱。"
            },
            {
              "type": "h3",
              "en": "Habitat Loss and Invasive Species",
              "zh": "栖息地丧失与入侵物种"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Habitat destruction and fragmentation: breaking a large habitat into small, isolated patches reduces population sizes, cuts off gene flow, and increases edge effects—the leading cause of biodiversity loss.",
                  "zh": "栖息地破坏与破碎化：将大片栖息地分割为孤立的小斑块，会减小种群规模、切断基因流并增加边缘效应——是生物多样性丧失的首要原因。"
                },
                {
                  "en": "Invasive species: organisms introduced (often by humans) to a new region where they lack natural predators can outcompete or prey upon native species and disrupt the community—for example, zebra mussels or the brown tree snake.",
                  "zh": "入侵物种：被引入（常由人类引入）到缺乏天敌的新区域的生物，能在竞争中胜过本地物种或捕食它们，扰乱群落——例如斑马贻贝或棕树蛇。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Eutrophication",
              "zh": "富营养化"
            },
            {
              "type": "p",
              "en": "When runoff carries excess nutrients—especially nitrogen and phosphorus from fertilizer and sewage—into a body of water, it triggers eutrophication. The nutrients cause explosive algal growth (an algal bloom). When the algae die, decomposers consume so much oxygen that the water becomes hypoxic (a \"dead zone\"), suffocating fish and other aerobic organisms. This is a direct human disruption of nutrient cycles.",
              "zh": "当径流将过量养分——尤其是来自化肥和污水的氮和磷——带入水体时，会引发富营养化（eutrophication）。养分导致藻类爆发式生长（水华）。藻类死亡后，分解者消耗大量氧气，使水体缺氧（形成「死亡区」），令鱼类和其他需氧生物窒息。这是人类对养分循环的直接扰乱。"
            },
            {
              "type": "h3",
              "en": "Climate Change and the Greenhouse Effect",
              "zh": "气候变化与温室效应"
            },
            {
              "type": "p",
              "en": "Greenhouse gases such as carbon dioxide (CO₂) and methane (CH₄) trap outgoing infrared (heat) radiation in the atmosphere—the natural greenhouse effect that keeps Earth habitable. By burning fossil fuels and clearing forests, humans have raised atmospheric CO₂ sharply, intensifying this effect and driving global warming. Consequences include rising sea levels, ocean acidification, shifting species ranges, and altered timing of migration and flowering—all stresses on ecosystem stability.",
              "zh": "二氧化碳（CO₂）和甲烷（CH₄）等温室气体在大气中截留向外散发的红外（热）辐射——这种天然的温室效应（greenhouse effect）使地球宜居。通过燃烧化石燃料和砍伐森林，人类使大气 CO₂ 急剧上升，加剧了这一效应并驱动全球变暖。后果包括海平面上升、海洋酸化、物种分布区迁移，以及迁徙和开花时间的改变——这些都对生态系统稳定性造成压力。"
            },
            {
              "type": "note",
              "en": "AP tip: Be precise about eutrophication. The algal bloom itself is not what kills the fish—it is the oxygen depletion when decomposers break down the dead algae afterward. The cause is excess nutrients (N and P); the killer is the resulting hypoxia.",
              "zh": "AP 提示：对富营养化要表述准确。杀死鱼类的不是水华本身——而是随后分解者分解死藻时造成的氧气耗竭。起因是过量养分（氮和磷）；致死的是由此产生的缺氧。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Innate or Learned?",
                "zh": "例题：先天还是习得？"
              },
              "problem": {
                "en": "A cuckoo chick, hatched and raised entirely by foster parents of a different species and never having seen another cuckoo, performs its species’ courtship song perfectly as an adult. Is this behavior innate or learned, and how do you know?",
                "zh": "一只杜鹃雏鸟完全由另一物种的养父母孵化抚养，从未见过其他杜鹃，成年后却能完美地表演本物种的求偶鸣唱。这种行为是先天的还是习得的，你如何判断？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "It is innate. The defining test is whether relevant experience was required. This chick was raised in complete isolation from its own species, so it had no opportunity to learn the song by imitation—yet it performs it correctly.",
                  "zh": "它是先天的。判定的关键判据是是否需要相关经验。这只雏鸟在与本物种完全隔离的环境中长大，没有机会通过模仿学习鸣唱——却仍能正确表演。"
                },
                {
                  "type": "p",
                  "en": "Because the correct behavior appears without any chance to learn it, it must be genetically programmed—an innate behavior shaped by natural selection.",
                  "zh": "由于正确行为在没有任何学习机会的情况下出现，它必定是受基因程序控制的——一种由自然选择塑造的先天行为。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example: Tracing a Dead Zone",
                "zh": "例题：追踪死亡区"
              },
              "problem": {
                "en": "Every summer a large \"dead zone\" with almost no fish forms where a fertilizer-heavy river empties into the sea. Explain the chain of events that produces the low-oxygen water.",
                "zh": "每年夏天，一条富含化肥的河流入海处都会形成几乎没有鱼的大片「死亡区」。请解释产生低氧水域的一连串事件。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Fertilizer runoff delivers excess nitrogen and phosphorus to the water. These nutrients fuel a rapid algal bloom at the surface (eutrophication).",
                  "zh": "化肥径流将过量的氮和磷输入水中。这些养分促成表层藻类的快速爆发（富营养化）。"
                },
                {
                  "type": "p",
                  "en": "The algae soon die and sink. Decomposers (bacteria) break them down through aerobic respiration, consuming dissolved oxygen faster than it is replaced. The resulting hypoxia suffocates fish and other aerobic animals, creating the dead zone.",
                  "zh": "藻类很快死亡下沉。分解者（细菌）通过需氧呼吸分解它们，消耗溶解氧的速度超过其补充速度。由此产生的缺氧使鱼类和其他需氧动物窒息，形成死亡区。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A greylag goose will use its beak to roll any nearby egg-shaped object back into its nest and completes the motion even if the egg is removed midway. This is an example of:",
                "zh": "灰雁会用喙将附近任何蛋形物体滚回巢中，即使蛋在中途被移走也会完成这一动作。这是以下哪种的例子？"
              },
              "choices": [
                "A learned behavior",
                "A fixed action pattern",
                "Imprinting",
                "Kinesis"
              ],
              "answer": 1,
              "explanation": {
                "en": "A fixed action pattern is an innate, stereotyped sequence triggered by a sign stimulus and carried to completion regardless of feedback—shown by the goose continuing even after the egg is gone. It is innate, not learned.",
                "zh": "固定动作模式是一种先天的、刻板的序列，由信号刺激触发并执行到底而不管反馈——鹅在蛋消失后仍继续动作正说明这一点。它是先天的，不是习得的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which behavior is best classified as taxis rather than kinesis?",
                "zh": "下列哪种行为最应归为趋性而非动性？"
              },
              "choices": [
                "Pill bugs randomly moving faster when the air is dry",
                "A moth flying directly toward a light source",
                "An animal sleeping more in cold weather",
                "Bacteria increasing random tumbling in poor conditions"
              ],
              "answer": 1,
              "explanation": {
                "en": "Taxis is directed movement toward or away from a stimulus (the moth orienting toward light). Kinesis is a non-directional change in movement speed or rate, as with the pill bugs and tumbling bacteria.",
                "zh": "趋性是朝向或远离刺激的定向运动（飞蛾朝光定向）。动性是非定向的运动速度或频率的改变，如鼠妇和翻滚的细菌。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ground squirrel gives a loud alarm call when it sees a hawk, drawing attention to itself but warning its relatives. This altruistic behavior is best explained by:",
                "zh": "一只地松鼠看到鹰时发出响亮的报警叫声，虽引起对自己的注意却警告了它的亲属。这种利他行为最好用以下哪项解释？"
              },
              "choices": [
                "Imprinting",
                "Competitive exclusion",
                "Kin selection",
                "A fixed action pattern"
              ],
              "answer": 2,
              "explanation": {
                "en": "Kin selection explains altruism: by helping close relatives who share many of its genes survive, the caller indirectly promotes copies of its own genes, even at personal risk. This is the logic of inclusive fitness.",
                "zh": "亲缘选择解释利他行为：通过帮助共享其许多基因的近亲存活，报警者即便冒着个人风险也间接促进了自身基因的拷贝。这就是广义适合度的逻辑。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In eutrophication, what most directly causes fish to die in the affected water?",
                "zh": "在富营养化中，什么最直接导致受影响水域的鱼类死亡？"
              },
              "choices": [
                "The algae are toxic and poison the fish directly",
                "Decomposers deplete dissolved oxygen while breaking down dead algae",
                "The excess phosphorus is toxic to fish gills",
                "The water becomes too acidic for fish"
              ],
              "answer": 1,
              "explanation": {
                "en": "Excess nutrients trigger an algal bloom; when the algae die, decomposers consume dissolved oxygen through respiration, causing hypoxia that suffocates fish. The nutrients start the process, but oxygen depletion is the direct killer.",
                "zh": "过量养分引发水华；藻类死亡后，分解者通过呼吸消耗溶解氧，造成使鱼类窒息的缺氧。养分启动了这一过程，但直接的致死原因是氧气耗竭。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which human activity most directly intensifies the greenhouse effect and drives global warming?",
                "zh": "下列哪项人类活动最直接地加剧温室效应并驱动全球变暖？"
              },
              "choices": [
                "Burning fossil fuels, which releases CO₂ into the atmosphere",
                "Planting new forests on former farmland",
                "Building fish ladders on rivers",
                "Reducing phosphorus in detergents"
              ],
              "answer": 0,
              "explanation": {
                "en": "Burning fossil fuels releases large amounts of CO₂, a greenhouse gas that traps outgoing infrared radiation and intensifies warming. The other activities reduce impacts or address different problems (like eutrophication).",
                "zh": "燃烧化石燃料释放大量温室气体 CO₂，它截留向外散发的红外辐射并加剧变暖。其他活动减轻影响或应对不同的问题（如富营养化）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the term for a form of learning that occurs only during a limited critical period early in life, such as goslings following the first moving object they see? Give the term (lowercase).",
                "zh": "哪个术语指仅在生命早期有限的关键期内发生的学习形式，例如雏鹅跟随它们看到的第一个移动物体？给出该术语（小写）。"
              },
              "answer": "imprinting",
              "accept": [
                "imprinting",
                "imprint",
                "印记",
                "铭印"
              ],
              "explanation": {
                "en": "Imprinting is learning restricted to a sensitive critical period; a young animal forms an attachment (such as to a parent) that is then difficult to reverse.",
                "zh": "印记是局限于敏感关键期的学习；幼年动物形成一种依恋（如对亲代的依恋），此后难以逆转。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes the breaking of a large continuous habitat into small, isolated patches, a leading cause of biodiversity loss? Give the two-word term (lowercase).",
                "zh": "哪个术语描述将大片连续栖息地分割为孤立小斑块，是生物多样性丧失的首要原因？给出该术语（小写）。"
              },
              "answer": "habitat fragmentation",
              "accept": [
                "habitat fragmentation",
                "fragmentation",
                "栖息地破碎化",
                "生境碎裂"
              ],
              "explanation": {
                "en": "Habitat fragmentation isolates populations, reduces their sizes, blocks gene flow, and increases edge effects, all of which erode biodiversity.",
                "zh": "栖息地破碎化使种群孤立、规模减小、基因流受阻并增加边缘效应，这些都侵蚀生物多样性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A behavior that decreases an individual’s own reproductive success while increasing that of another individual is called what? Give the term (lowercase).",
                "zh": "一种降低个体自身繁殖成功率而提高另一个体繁殖成功率的行为叫什么？给出该术语（小写）。"
              },
              "answer": "altruism",
              "accept": [
                "altruism",
                "altruistic behavior",
                "利他行为",
                "利他主义"
              ],
              "explanation": {
                "en": "Altruism reduces the actor’s own fitness while raising another’s; it is often favored when the beneficiaries are close relatives, through kin selection.",
                "zh": "利他行为降低行为者自身的适合度而提高他者的适合度；当受益者是近亲时，它常通过亲缘选择而受青睐。"
              }
            }
          ]
        }
      ]
    }
  ]
}
