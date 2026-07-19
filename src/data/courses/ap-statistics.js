export default {
  "id": "ap-statistics",
  "title": "AP Statistics",
  "titleZh": "AP 统计学",
  "subject": "math",
  "level": "AP",
  "description": "The complete AP Statistics course following the official College Board nine-unit framework: exploring one- and two-variable data, collecting data, probability and random variables, sampling distributions, and inference for proportions, means, chi-square, and regression slopes.",
  "descriptionZh": "完整的 AP 统计学课程，按照 College Board 官方九个单元的框架编排：单变量与双变量数据探索、数据收集、概率与随机变量、抽样分布，以及关于比例、均值、卡方与回归斜率的统计推断。",
  "units": [
    {
      "id": "exploring-one-variable-data",
      "title": "Unit 1: Exploring One-Variable Data",
      "titleZh": "第一单元：单变量数据探索",
      "lessons": [
        {
          "id": "displaying-and-describing-distributions",
          "title": "Displaying and Describing Distributions",
          "titleZh": "展示与描述分布",
          "content": [
            {
              "type": "h2",
              "en": "Variables and Distributions",
              "zh": "变量与分布"
            },
            {
              "type": "p",
              "en": "Statistics begins with data collected on individuals (people, animals, objects). A variable is a characteristic that can take different values from one individual to the next. The distribution of a variable describes what values it takes and how often it takes each value. Almost everything in this unit is about seeing a distribution clearly and then describing it in words and numbers.",
              "zh": "统计学始于对个体（人、动物、物体）收集的数据。变量是一种在不同个体之间可以取不同取值的特征。变量的分布描述了它取哪些值以及每个值出现的频率。本单元几乎所有内容都是关于把一个分布看清楚，然后用文字和数字去描述它。"
            },
            {
              "type": "h3",
              "en": "Categorical vs. Quantitative Variables",
              "zh": "分类变量与数量变量"
            },
            {
              "type": "p",
              "en": "The very first question to ask about any variable is what type it is, because the type decides which graphs and which summaries are allowed.",
              "zh": "对任何变量首先要问的是它属于哪种类型，因为类型决定了可以使用哪些图形和哪些概括量。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A categorical variable places each individual into a group or category, such as eye color, favorite subject, or country of origin.",
                  "zh": "分类变量把每个个体归入某个组别或类别，例如眼睛颜色、最喜欢的科目或原籍国。"
                },
                {
                  "en": "A quantitative variable takes numerical values for which arithmetic (adding, averaging) makes sense, such as height in cm, number of siblings, or test score.",
                  "zh": "数量变量取具有数值意义的取值，对其做加法、求平均等运算是有意义的，例如以厘米为单位的身高、兄弟姐妹的数量或考试成绩。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: a variable stored as a number is not automatically quantitative. Zip codes, jersey numbers, and area codes are numbers used as labels, so they are categorical. Ask yourself whether an average would mean anything; the average zip code is nonsense.",
              "zh": "常见错误：以数字形式记录的变量并不自动就是数量变量。邮政编码、球衣号码和区号都是被当作标签使用的数字，因此它们是分类变量。问问自己求平均是否有意义；平均邮政编码毫无意义。"
            },
            {
              "type": "h3",
              "en": "Displaying Categorical Data",
              "zh": "展示分类数据"
            },
            {
              "type": "p",
              "en": "For a categorical variable we count how many individuals fall in each category (a frequency table) or what fraction fall in each category (a relative-frequency table). Two common displays are bar charts and pie charts.",
              "zh": "对分类变量，我们统计有多少个体落入每个类别（频数表），或有多大比例落入每个类别（相对频数表）。两种常见的展示方式是条形图和饼图。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A bar chart draws a separate bar for each category with height equal to its frequency or relative frequency. Bars have gaps between them because the categories are distinct groups, not a number line.",
                  "zh": "条形图为每个类别画一根独立的条形，高度等于其频数或相对频数。条形之间有间隙，因为类别是彼此分离的组，而不是一条数轴。"
                },
                {
                  "en": "A pie chart shows each category as a slice of a whole circle; the slices must together account for 100% of the individuals, so pie charts only work when the categories do not overlap and cover everyone.",
                  "zh": "饼图把每个类别表示为整圆的一块扇形；各扇形加起来必须占全部个体的 100%，因此饼图只有在类别互不重叠且覆盖所有人时才适用。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading a frequency table",
                "zh": "例题 1：读频数表"
              },
              "problem": {
                "en": "A class of 40 students was asked their favorite lunch: pizza 18, tacos 10, salad 8, sushi 4. Describe how a bar chart of these data would look and give the relative frequency of tacos.",
                "zh": "一个 40 人的班级被问及最喜欢的午餐：披萨 18 人、玉米卷 10 人、沙拉 8 人、寿司 4 人。描述这些数据的条形图会是什么样子，并给出玉米卷的相对频数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The bar chart has four separated bars. Pizza is tallest at 18, then tacos at 10, salad at 8, and sushi shortest at 4. Because the variable is categorical there is no meaningful order along the horizontal axis; we may sort the bars from tallest to shortest for readability.",
                  "zh": "该条形图有四根分开的条形。披萨最高为 18，其次玉米卷 10，沙拉 8，寿司最矮为 4。由于变量是分类变量，水平轴上没有有意义的顺序；为便于阅读，我们可以把条形从高到矮排列。"
                },
                {
                  "type": "p",
                  "en": "The relative frequency of tacos is $10/40 = 0.25$, that is 25% of the class.",
                  "zh": "玉米卷的相对频数为 $10/40 = 0.25$，即全班的 25%。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Displaying Quantitative Data",
              "zh": "展示数量数据"
            },
            {
              "type": "p",
              "en": "For a quantitative variable the values live on a number line, so the displays keep that number line and show where the values pile up.",
              "zh": "对数量变量，取值分布在一条数轴上，因此这些展示方式保留数轴并显示取值在何处聚集。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A dotplot places one dot above the number line for each value; stacks of dots show repeated values. Best for small data sets.",
                  "zh": "点图在数轴上方为每个取值放一个点；点的堆叠显示重复出现的取值。适用于较小的数据集。"
                },
                {
                  "en": "A stemplot (stem-and-leaf) splits each number into a stem (leading digits) and a leaf (final digit). For example the value 47 has stem 4 and leaf 7. It shows every original value while revealing the shape.",
                  "zh": "茎叶图把每个数拆成茎（前面的数字）和叶（最后一位数字）。例如取值 47 的茎为 4、叶为 7。它在显示分布形状的同时保留了每个原始取值。"
                },
                {
                  "en": "A histogram groups values into equal-width intervals (bins) and draws a bar for each bin whose height is the count in that bin. Bars touch because the horizontal axis is a continuous number line.",
                  "zh": "直方图把取值分组到等宽的区间（组距）中，为每个区间画一根高度等于该区间计数的条形。条形彼此相接，因为水平轴是连续的数轴。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: never call a display of quantitative data a bar chart, and never call a display of categorical data a histogram. On the exam, a histogram must have touching bars on a numeric axis, while a bar chart has gaps between category bars. Mixing up the names costs points.",
              "zh": "AP 提示：绝不要把数量数据的图叫作条形图，也绝不要把分类数据的图叫作直方图。在考试中，直方图的条形必须在数值轴上彼此相接，而条形图的类别条形之间有间隙。混淆名称会失分。"
            },
            {
              "type": "h3",
              "en": "Describing a Distribution: Shape, Center, Variability, Outliers",
              "zh": "描述分布：形状、中心、变异性、离群值"
            },
            {
              "type": "p",
              "en": "Whenever you describe the distribution of a quantitative variable, address four things (often remembered as SOCS: Shape, Outliers, Center, Spread), and always do it in the context of the data with units.",
              "zh": "每当描述一个数量变量的分布时，都要说明四件事（常记作 SOCS：形状、离群值、中心、离散程度），并且始终结合数据的实际背景和单位来说明。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Shape: symmetric (a roughly mirror-image mound), skewed right (a long tail toward the large values), skewed left (a long tail toward the small values), uniform (all values about equally frequent), or bimodal (two distinct peaks).",
                  "zh": "形状：对称（大致左右镜像的丘状）、右偏（长尾伸向较大取值）、左偏（长尾伸向较小取值）、均匀（各取值频率大致相等）或双峰（两个明显的峰）。"
                },
                {
                  "en": "Center: a single value that is typical, described later by the mean or the median.",
                  "zh": "中心：一个代表典型水平的单一取值，稍后用均值或中位数来描述。"
                },
                {
                  "en": "Variability (spread): how spread out the values are, described by range, IQR, or standard deviation.",
                  "zh": "变异性（离散程度）：取值分散的程度，用极差、四分位距或标准差来描述。"
                },
                {
                  "en": "Outliers: individual values that fall far from the overall pattern and deserve a comment.",
                  "zh": "离群值：远离整体规律、需要特别说明的个别取值。"
                }
              ]
            },
            {
              "type": "note",
              "en": "The direction of skew is named for the tail, not the hump. A distribution with most values low and a few very large ones is skewed RIGHT (right tail), even though the tall part sits on the left. Students very often reverse this.",
              "zh": "偏斜的方向以尾巴命名，而不是以隆起部分命名。大多数取值偏低、少数取值很大的分布是右偏（右尾），尽管高的部分在左边。学生常常把方向弄反。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Describing one distribution",
                "zh": "例题 2：描述一个分布"
              },
              "problem": {
                "en": "The number of text messages 30 students sent in one hour produced this histogram: 14 students in the interval 0 to 5, 8 students in 5 to 10, 4 in 10 to 15, 2 in 15 to 20, 1 in 20 to 25, and 1 in 45 to 50. Describe the distribution.",
                "zh": "30 名学生一小时内发送的短信数量得到如下直方图：14 名学生在 0 到 5 区间，8 名在 5 到 10，4 名在 10 到 15，2 名在 15 到 20，1 名在 20 到 25，1 名在 45 到 50。请描述该分布。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Shape: skewed right, since most students sent few texts (the tallest bar is 0 to 5) and the counts trail off toward the large values. Center: a typical student sent roughly 5 to 10 texts, so the center is near 6 or 7 texts. Variability: most values fall between 0 and 25 texts. Outliers: the single student in the 45 to 50 interval sits far from the rest and is a likely outlier.",
                  "zh": "形状：右偏，因为大多数学生发的短信很少（最高的条形是 0 到 5），计数向大取值方向逐渐减少。中心：典型学生大约发 5 到 10 条短信，因此中心在 6 或 7 条附近。变异性：大多数取值落在 0 到 25 条之间。离群值：位于 45 到 50 区间的那名学生远离其余数据，很可能是离群值。"
                },
                {
                  "type": "p",
                  "en": "Notice every sentence mentions texts and students. A description without context earns no credit on the AP exam.",
                  "zh": "注意每句话都提到了短信和学生。缺乏背景的描述在 AP 考试中不得分。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Comparing two groups with a back-to-back stemplot",
                "zh": "例题 3：用背靠背茎叶图比较两组"
              },
              "problem": {
                "en": "Quiz scores (out of 20) for two classes: Class A is 12, 14, 15, 15, 16, 18, 19; Class B is 8, 11, 13, 14, 16, 16, 20. Compare their centers and spreads.",
                "zh": "两个班的测验成绩（满分 20）：A 班为 12、14、15、15、16、18、19；B 班为 8、11、13、14、16、16、20。比较它们的中心和离散程度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The median of Class A is the 4th of 7 values, 15. The median of Class B is 14. So Class A has a slightly higher center (median 15 vs. 14 points).",
                  "zh": "A 班的中位数是 7 个值中的第 4 个，即 15。B 班的中位数是 14。所以 A 班的中心略高（中位数 15 对 14 分）。"
                },
                {
                  "type": "p",
                  "en": "Class A ranges from 12 to 19 (range 7 points); Class B ranges from 8 to 20 (range 12 points). Class B is more variable. When you compare distributions, always use explicit comparison words like higher, lower, or more variable, not two separate descriptions.",
                  "zh": "A 班从 12 到 19（极差 7 分）；B 班从 8 到 20（极差 12 分）。B 班的变异性更大。比较分布时，务必使用明确的比较用词，如更高、更低或变异性更大，而不是给出两段互不关联的描述。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of these variables is quantitative?",
                "zh": "下列哪个变量是数量变量？"
              },
              "choices": [
                "Jersey number of a soccer player / 足球运动员的球衣号码",
                "Number of goals a player scored this season / 球员本赛季进球数",
                "Favorite team color / 最喜欢的球队颜色",
                "Home country of a player / 球员的祖国"
              ],
              "answer": 1,
              "explanation": {
                "en": "A variable is quantitative when arithmetic on it is meaningful. The count of goals can be averaged and added, so it is quantitative. A jersey number is a numeric label with no meaningful average, so it is categorical, as are team color and home country.",
                "zh": "当对一个变量做运算有意义时，它才是数量变量。进球数可以求平均、可以相加，因此是数量变量。球衣号码是数字标签，平均它没有意义，因此是分类变量；球队颜色和祖国也是分类变量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A display of the number of hours students slept has bars that touch along a numeric axis. This display is a…",
                "zh": "展示学生睡眠小时数的图，其条形在数值轴上彼此相接。这幅图是……"
              },
              "choices": [
                "pie chart / 饼图",
                "bar chart / 条形图",
                "histogram / 直方图",
                "frequency table / 频数表"
              ],
              "answer": 2,
              "explanation": {
                "en": "Touching bars over a continuous number line signal a histogram of a quantitative variable. A bar chart is for categorical data and its bars have gaps; a pie chart shows parts of a whole for categories.",
                "zh": "连续数轴上彼此相接的条形表明这是数量变量的直方图。条形图用于分类数据且条形之间有间隙；饼图展示各类别占整体的份额。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A distribution of house prices has most homes between 200 and 400 thousand dollars, with a few mansions near 3 million. The shape is best described as…",
                "zh": "某房价分布中，大多数房子在 20 万到 40 万美元之间，少数豪宅接近 300 万美元。其形状最好描述为……"
              },
              "choices": [
                "skewed left / 左偏",
                "symmetric / 对称",
                "uniform / 均匀",
                "skewed right / 右偏"
              ],
              "answer": 3,
              "explanation": {
                "en": "A few very large values stretch a long tail toward the high end, and skew is named for the tail, so the distribution is skewed right. Calling it skewed left reverses the tail direction, a frequent error.",
                "zh": "少数很大的取值把长尾拉向高端，而偏斜以尾巴命名，因此分布是右偏。把它叫作左偏就把尾巴方向弄反了，这是常见错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is the single best reason to describe a distribution using shape, center, variability, AND outliers rather than just the center?",
                "zh": "为什么描述分布时要用形状、中心、变异性和离群值，而不是只用中心？下列哪个是最好的理由？"
              },
              "choices": [
                "The center alone can hide skewness, spread, and unusual values that change the story of the data. / 只用中心会掩盖偏斜、离散程度和异常取值，而这些会改变数据所讲的故事。",
                "The center is always wrong for skewed data. / 对偏斜数据中心总是错误的。",
                "Outliers must be deleted before finding a center. / 找中心之前必须删除离群值。",
                "Shape and center are the same thing. / 形状和中心是同一回事。"
              ],
              "answer": 0,
              "explanation": {
                "en": "Two data sets can share the same center yet differ wildly in spread, shape, or the presence of outliers, so a full description is needed. Centers are not always wrong for skewed data, outliers are not automatically deleted, and shape and center are different features.",
                "zh": "两个数据集可能有相同的中心，却在离散程度、形状或是否存在离群值上大不相同，因此需要完整的描述。对偏斜数据中心并非总是错误，离群值不会被自动删除，形状与中心也是不同的特征。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a class of 50, favorite pets are dog 25, cat 15, fish 6, bird 4. What is the relative frequency of cat, as a percent?",
                "zh": "在一个 50 人的班级中，最喜欢的宠物为狗 25、猫 15、鱼 6、鸟 4。猫的相对频数是多少（用百分数表示）？"
              },
              "choices": [
                "15% ",
                "25% ",
                "30% ",
                "50% "
              ],
              "answer": 2,
              "explanation": {
                "en": "Relative frequency is the count in the category divided by the total: $15/50 = 0.30 = 30\\%$. The value 15 is the raw count, not the percent, and 25% and 50% belong to other categories or totals.",
                "zh": "相对频数是该类别的计数除以总数：$15/50 = 0.30 = 30\\%$。15 是原始计数而非百分数，25% 和 50% 属于其他类别或总体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a stemplot, the value 63 is split into a stem and a leaf. Enter the leaf.",
                "zh": "在茎叶图中，取值 63 被拆成茎和叶。请输入叶。"
              },
              "answer": "3",
              "accept": [
                "3",
                "leaf 3",
                "3 (the units digit)"
              ],
              "explanation": {
                "en": "The leaf is the final digit; for 63 the stem is 6 (the tens) and the leaf is 3 (the units).",
                "zh": "叶是最后一位数字；对 63 来说茎是 6（十位），叶是 3（个位）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A dotplot of family sizes shows: 2 dots at 1, 5 dots at 2, 8 dots at 3, 3 dots at 4, 2 dots at 5. How many families are in the data set? (Enter a whole number.)",
                "zh": "一幅家庭人数的点图显示：1 处有 2 个点，2 处有 5 个点，3 处有 8 个点，4 处有 3 个点，5 处有 2 个点。数据集中共有多少个家庭？（输入整数。）"
              },
              "answer": "20",
              "accept": [
                "20",
                "20 families"
              ],
              "explanation": {
                "en": "Each dot is one family, so add the dots: $2+5+8+3+2 = 20$ families. Do not add the family-size values themselves; the dots are the counts.",
                "zh": "每个点代表一个家庭，因此把点数相加：$2+5+8+3+2 = 20$ 个家庭。不要去加家庭人数本身；点数才是计数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Fill in the blank: A distribution with two clearly separated peaks is called ____ (one word).",
                "zh": "填空：具有两个明显分开的峰的分布称为____（一个词）。"
              },
              "answer": "bimodal",
              "accept": [
                "bimodal",
                "bi-modal",
                "双峰",
                "双峰的"
              ],
              "explanation": {
                "en": "Two distinct peaks make a distribution bimodal, which often hints that two different groups are mixed together in the data.",
                "zh": "两个明显的峰使分布成为双峰，这常常暗示数据中混合了两个不同的群体。"
              }
            }
          ]
        },
        {
          "id": "summary-statistics-and-normal-distribution",
          "title": "Summary Statistics and the Normal Distribution",
          "titleZh": "概括统计量与正态分布",
          "content": [
            {
              "type": "h2",
              "en": "Summarizing a Distribution with Numbers",
              "zh": "用数字概括分布"
            },
            {
              "type": "p",
              "en": "A picture shows the shape of a distribution, but we also want single numbers that summarize its center and its spread. Choosing the right summary depends on the shape, especially whether the distribution is roughly symmetric or is skewed and has outliers.",
              "zh": "图形显示分布的形状，但我们还想用单个数字来概括它的中心和离散程度。选择合适的概括量取决于形状，尤其取决于分布是大致对称，还是偏斜且有离群值。"
            },
            {
              "type": "h3",
              "en": "Measures of Center: Mean vs. Median",
              "zh": "中心的度量：均值与中位数"
            },
            {
              "type": "p",
              "en": "The mean $\\bar{x}$ is the arithmetic average, the balancing point of the distribution. The median is the middle value when the data are ordered (it splits the data into a lower half and an upper half).",
              "zh": "均值 $\\bar{x}$ 是算术平均数，是分布的平衡点。中位数是数据排序后位于中间的值（它把数据分成较小的一半和较大的一半）。"
            },
            {
              "type": "math",
              "tex": "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i"
            },
            {
              "type": "note",
              "en": "Resistance: the median is resistant, meaning it barely changes when an extreme value is added; the mean is non-resistant and gets pulled toward a long tail. So for a skewed distribution or one with outliers, report the median. For a roughly symmetric distribution, the mean and median are close and the mean is fine.",
              "zh": "抗性：中位数具有抗性，意思是加入一个极端值时它几乎不变；均值不具抗性，会被长尾拉过去。因此对于偏斜分布或含离群值的分布，应报告中位数。对于大致对称的分布，均值与中位数接近，用均值即可。"
            },
            {
              "type": "p",
              "en": "This gives a quick shape check: if the mean is noticeably greater than the median, the distribution is likely skewed right; if the mean is noticeably less, it is likely skewed left; if they are about equal, it is roughly symmetric.",
              "zh": "这提供了一个快速判断形状的方法：若均值明显大于中位数，分布很可能右偏；若均值明显小于中位数，很可能左偏；若两者大致相等，则大致对称。"
            },
            {
              "type": "h3",
              "en": "Measures of Spread: Range, IQR, Standard Deviation",
              "zh": "离散程度的度量：极差、四分位距、标准差"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Range = maximum minus minimum. It uses only two values and is very sensitive to outliers.",
                  "zh": "极差 = 最大值减最小值。它只用到两个值，对离群值非常敏感。"
                },
                {
                  "en": "Interquartile range $\\text{IQR} = Q_3 - Q_1$, the range of the middle 50% of the data. It is resistant to outliers.",
                  "zh": "四分位距 $\\text{IQR} = Q_3 - Q_1$，是中间 50% 数据的跨度。它对离群值有抗性。"
                },
                {
                  "en": "Standard deviation $s_x$ measures the typical distance of a value from the mean. It is non-resistant and pairs with the mean.",
                  "zh": "标准差 $s_x$ 度量取值到均值的典型距离。它不具抗性，与均值配套使用。"
                }
              ]
            },
            {
              "type": "math",
              "tex": "s_x = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2}"
            },
            {
              "type": "note",
              "en": "AP tip: match your center and spread. Report the mean WITH the standard deviation for symmetric data, and report the median WITH the IQR for skewed data or data with outliers. Mixing a resistant measure with a non-resistant one (median with standard deviation) loses credit.",
              "zh": "AP 提示：中心与离散程度要配套。对称数据报告均值搭配标准差，偏斜数据或含离群值的数据报告中位数搭配四分位距。把抗性度量与非抗性度量混用（中位数配标准差）会失分。"
            },
            {
              "type": "h3",
              "en": "The Five-Number Summary and Boxplots",
              "zh": "五数概括与箱线图"
            },
            {
              "type": "p",
              "en": "The five-number summary is the minimum, $Q_1$, median, $Q_3$, and maximum. A boxplot draws a box from $Q_1$ to $Q_3$ with a line at the median, and whiskers extending to the smallest and largest non-outlier values. Outliers are plotted as separate dots.",
              "zh": "五数概括是最小值、$Q_1$、中位数、$Q_3$ 和最大值。箱线图从 $Q_1$ 到 $Q_3$ 画一个箱子，在中位数处画一条线，须线延伸到最小和最大的非离群值。离群值单独用点标出。"
            },
            {
              "type": "note",
              "en": "The 1.5 times IQR rule: a value is an outlier if it lies below $Q_1 - 1.5(\\text{IQR})$ or above $Q_3 + 1.5(\\text{IQR})$. Compute both fences before deciding.",
              "zh": "1.5 倍 IQR 规则：若一个值低于 $Q_1 - 1.5(\\text{IQR})$ 或高于 $Q_3 + 1.5(\\text{IQR})$，则为离群值。判断前要先算出两条界限。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Five-number summary and outliers",
                "zh": "例题 1：五数概括与离群值"
              },
              "problem": {
                "en": "Daily customers at a small shop for 11 days: 20, 22, 25, 27, 28, 30, 31, 33, 35, 38, 62. The five-number summary is min 20, $Q_1 = 25$, median 30, $Q_3 = 35$, max 62. Use the 1.5 IQR rule to check for outliers.",
                "zh": "一家小店 11 天的每日顾客数：20、22、25、27、28、30、31、33、35、38、62。五数概括为最小值 20、$Q_1 = 25$、中位数 30、$Q_3 = 35$、最大值 62。用 1.5 倍 IQR 规则检验离群值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First the IQR: $Q_3 - Q_1 = 35 - 25 = 10$ customers. Then $1.5 \\times 10 = 15$.",
                  "zh": "先求 IQR：$Q_3 - Q_1 = 35 - 25 = 10$ 位顾客。再算 $1.5 \\times 10 = 15$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{Lower fence} = 25 - 15 = 10, \\qquad \\text{Upper fence} = 35 + 15 = 50"
                },
                {
                  "type": "p",
                  "en": "Any value below 10 or above 50 is an outlier. The value 62 exceeds 50, so the 62-customer day is a high outlier. No value is below 10, so there are no low outliers. On a boxplot, 62 would appear as a separate dot and the right whisker would stop at 38.",
                  "zh": "任何低于 10 或高于 50 的值都是离群值。62 超过 50，因此那天 62 位顾客是一个高端离群值。没有值低于 10，所以没有低端离群值。在箱线图上，62 会显示为一个单独的点，右须线止于 38。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Standardized z-Scores and Percentiles",
              "zh": "标准化 z 分数与百分位数"
            },
            {
              "type": "p",
              "en": "A z-score tells how many standard deviations a value is above or below the mean. A positive z-score is above the mean, a negative one below. Standardizing lets us compare values measured on different scales.",
              "zh": "z 分数表示一个值在均值之上或之下多少个标准差。z 分数为正表示高于均值，为负表示低于均值。标准化使我们能够比较用不同尺度测量的值。"
            },
            {
              "type": "math",
              "tex": "z = \\frac{x - \\bar{x}}{s_x}"
            },
            {
              "type": "p",
              "en": "A percentile is the percent of values at or below a given value. If your test score is at the 90th percentile, then 90% of scores are at or below yours.",
              "zh": "百分位数是小于或等于某个值的取值所占的百分比。如果你的考试成绩在第 90 百分位，那么 90% 的成绩小于或等于你的成绩。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Comparing with z-scores",
                "zh": "例题 2：用 z 分数比较"
              },
              "problem": {
                "en": "On the SAT math ($\\bar{x} = 520$, $s = 100$) Ana scored 640. On the ACT math ($\\bar{x} = 21$, $s = 5$) Ben scored 29. Who performed better relative to their peers?",
                "zh": "在 SAT 数学（$\\bar{x} = 520$，$s = 100$）中安娜得了 640 分。在 ACT 数学（$\\bar{x} = 21$，$s = 5$）中本得了 29 分。相对于各自的同龄人，谁表现更好？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Standardize each: Ana has $z = (640 - 520)/100 = 1.2$; Ben has $z = (29 - 21)/5 = 1.6$.",
                  "zh": "分别标准化：安娜 $z = (640 - 520)/100 = 1.2$；本 $z = (29 - 21)/5 = 1.6$。"
                },
                {
                  "type": "p",
                  "en": "Ben is 1.6 standard deviations above his mean while Ana is 1.2 above hers, so Ben performed better relative to his own test group, even though the raw scores are on totally different scales.",
                  "zh": "本在其均值之上 1.6 个标准差，而安娜在其均值之上 1.2 个标准差，因此尽管原始分数处于完全不同的尺度，本相对于自己所在的考试群体表现更好。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Normal Distribution and the Empirical Rule",
              "zh": "正态分布与经验法则"
            },
            {
              "type": "p",
              "en": "Many quantitative variables have a distribution that is symmetric, single-peaked, and bell-shaped, called approximately Normal. A Normal distribution is described completely by its mean $\\mu$ and standard deviation $\\sigma$.",
              "zh": "许多数量变量的分布是对称、单峰、钟形的，称为近似正态。正态分布完全由其均值 $\\mu$ 和标准差 $\\sigma$ 决定。"
            },
            {
              "type": "note",
              "en": "The empirical (68-95-99.7) rule for a Normal distribution: about 68% of values lie within $1\\sigma$ of the mean, about 95% within $2\\sigma$, and about 99.7% within $3\\sigma$. Because the curve is symmetric, half of each central band lies on each side of $\\mu$.",
              "zh": "正态分布的经验法则（68-95-99.7）：约 68% 的值落在均值 $1\\sigma$ 以内，约 95% 落在 $2\\sigma$ 以内，约 99.7% 落在 $3\\sigma$ 以内。由于曲线对称，每个中心区间的一半落在 $\\mu$ 的每一侧。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Using the empirical rule",
                "zh": "例题 3：使用经验法则"
              },
              "problem": {
                "en": "Adult resting heart rates are approximately Normal with mean $\\mu = 72$ beats per minute and $\\sigma = 8$ beats per minute. What percent of adults have a resting heart rate above 88 bpm?",
                "zh": "成人静息心率近似正态，均值 $\\mu = 72$ 次每分钟，$\\sigma = 8$ 次每分钟。静息心率高于 88 次每分钟的成人占多大比例？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find how many standard deviations 88 is from the mean: $z = (88 - 72)/8 = 2$. So 88 bpm is exactly $2\\sigma$ above the mean.",
                  "zh": "先求 88 距均值多少个标准差：$z = (88 - 72)/8 = 2$。所以 88 次每分钟恰好在均值之上 $2\\sigma$。"
                },
                {
                  "type": "p",
                  "en": "By the empirical rule 95% of values lie within $2\\sigma$, leaving 5% outside, split evenly into the two tails. The upper tail above $+2\\sigma$ holds half of that, so about 2.5% of adults have a resting heart rate above 88 bpm.",
                  "zh": "根据经验法则，95% 的值落在 $2\\sigma$ 以内，剩下 5% 在外侧，平均分到两条尾巴。$+2\\sigma$ 以上的上尾占其中一半，因此约 2.5% 的成人静息心率高于 88 次每分钟。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A distribution of incomes is strongly skewed right with a few very high earners. Which single number best describes its center?",
                "zh": "某收入分布强烈右偏，有少数收入极高者。哪个数值最能描述它的中心？"
              },
              "choices": [
                "The median, because it resists the pull of the high outliers. / 中位数，因为它不受高端离群值的拉动。",
                "The mean, because it uses every value. / 均值，因为它用到了每个值。",
                "The range, because it captures the spread. / 极差，因为它反映了离散程度。",
                "The maximum, because it is the largest income. / 最大值，因为它是最高收入。"
              ],
              "answer": 0,
              "explanation": {
                "en": "The median is resistant, so it is not dragged upward by a few extreme incomes, making it the better center for skewed data. The mean gets pulled toward the tail, and the range and maximum describe spread or extremes, not center.",
                "zh": "中位数具有抗性，不会被少数极端收入向上拉，因此对偏斜数据是更好的中心。均值会被拉向尾巴，而极差和最大值描述的是离散程度或极端值，不是中心。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a data set, $Q_1 = 40$ and $Q_3 = 70$. By the 1.5 IQR rule, the upper fence for outliers is…",
                "zh": "某数据集 $Q_1 = 40$，$Q_3 = 70$。按 1.5 倍 IQR 规则，离群值的上界是……"
              },
              "choices": [
                "100 ",
                "115 ",
                "130 ",
                "85 "
              ],
              "answer": 1,
              "explanation": {
                "en": "IQR is $70 - 40 = 30$, and $1.5 \\times 30 = 45$; the upper fence is $Q_3 + 45 = 70 + 45 = 115$. Using $Q_3 + \\text{IQR}$ instead of $Q_3 + 1.5\\,\\text{IQR}$ gives the wrong 100.",
                "zh": "IQR 为 $70 - 40 = 30$，$1.5 \\times 30 = 45$；上界为 $Q_3 + 45 = 70 + 45 = 115$。若用 $Q_3 + \\text{IQR}$ 而非 $Q_3 + 1.5\\,\\text{IQR}$ 则错得 100。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Scores are approximately Normal with $\\mu = 500$ and $\\sigma = 100$. Using the empirical rule, about what percent of scores fall between 400 and 600?",
                "zh": "成绩近似正态，$\\mu = 500$，$\\sigma = 100$。用经验法则，大约多少比例的成绩落在 400 到 600 之间？"
              },
              "choices": [
                "34% ",
                "50% ",
                "68% ",
                "95% "
              ],
              "answer": 2,
              "explanation": {
                "en": "400 and 600 are each one standard deviation from the mean ($z = \\pm 1$), and the empirical rule puts about 68% of values within $1\\sigma$. The value 95% would correspond to $2\\sigma$ (300 to 700).",
                "zh": "400 和 600 各距均值一个标准差（$z = \\pm 1$），经验法则指出约 68% 的值落在 $1\\sigma$ 以内。95% 对应的是 $2\\sigma$（300 到 700）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of summaries is the appropriate match for a roughly symmetric distribution with no outliers?",
                "zh": "对一个大致对称、无离群值的分布，哪一对概括量是合适的搭配？"
              },
              "choices": [
                "Median and standard deviation / 中位数与标准差",
                "Mean and IQR / 均值与四分位距",
                "Median and range / 中位数与极差",
                "Mean and standard deviation / 均值与标准差"
              ],
              "answer": 3,
              "explanation": {
                "en": "For symmetric data with no outliers the mean is a good center and pairs with the standard deviation as its matching spread. Combining a resistant measure with a non-resistant one, such as median with standard deviation or mean with IQR, is a mismatch.",
                "zh": "对无离群值的对称数据，均值是好的中心，并与标准差作为配套的离散度量。把抗性度量与非抗性度量组合，例如中位数配标准差或均值配四分位距，都是不匹配的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A value has a z-score of $-1.5$. This means the value is…",
                "zh": "某个值的 z 分数为 $-1.5$。这表示该值……"
              },
              "choices": [
                "1.5 standard deviations below the mean / 在均值之下 1.5 个标准差",
                "1.5 units below the mean / 在均值之下 1.5 个单位",
                "1.5 standard deviations above the mean / 在均值之上 1.5 个标准差",
                "at the 15th percentile / 在第 15 百分位"
              ],
              "answer": 0,
              "explanation": {
                "en": "A z-score counts standard deviations, and a negative sign means below the mean, so the value is 1.5 standard deviations below the mean. It is not 1.5 raw units, and a negative z-score is not above the mean.",
                "zh": "z 分数计的是标准差的个数，负号表示低于均值，因此该值在均值之下 1.5 个标准差。它不是 1.5 个原始单位，负的 z 分数也不表示高于均值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A student scored 82 on a test with mean 70 and standard deviation 6. Compute the z-score (round to 2 decimals).",
                "zh": "某学生在一次均值 70、标准差 6 的考试中得了 82 分。计算 z 分数（保留两位小数）。"
              },
              "answer": "2.00",
              "accept": [
                "2",
                "2.0",
                "2.00",
                "+2",
                "z=2"
              ],
              "explanation": {
                "en": "$z = (82 - 70)/6 = 12/6 = 2.00$, so the score is 2 standard deviations above the mean.",
                "zh": "$z = (82 - 70)/6 = 12/6 = 2.00$，因此该成绩在均值之上 2 个标准差。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Heights are approximately Normal with mean 170 cm and standard deviation 7 cm. Using the empirical rule, about what percent of people are TALLER than 177 cm? (Enter a percent.)",
                "zh": "身高近似正态，均值 170 厘米，标准差 7 厘米。用经验法则，约多少比例的人身高高于 177 厘米？（输入百分数。）"
              },
              "answer": "16",
              "accept": [
                "16",
                "16%",
                "16 percent",
                "约16%"
              ],
              "explanation": {
                "en": "177 cm is $1\\sigma$ above the mean. About 68% lie within $1\\sigma$, leaving 32% in the two tails, so 16% lie above $+1\\sigma$. (Equivalently, 50% are above the mean and 34% are between the mean and $+1\\sigma$, leaving $50 - 34 = 16\\%$.)",
                "zh": "177 厘米在均值之上 $1\\sigma$。约 68% 落在 $1\\sigma$ 以内，剩下 32% 在两条尾巴，因此 16% 在 $+1\\sigma$ 以上。（等价地，50% 高于均值，34% 在均值与 $+1\\sigma$ 之间，剩下 $50 - 34 = 16\\%$。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Data set: 4, 6, 6, 8, 11, 13, 15. Find the IQR. (Enter a number.)",
                "zh": "数据集：4、6、6、8、11、13、15。求四分位距。（输入一个数字。）"
              },
              "answer": "7",
              "accept": [
                "7",
                "IQR=7",
                "7 (Q3-Q1)"
              ],
              "explanation": {
                "en": "The median is 8 (the 4th of 7 values). The lower half is 4, 6, 6 with median $Q_1 = 6$; the upper half is 11, 13, 15 with median $Q_3 = 13$. So $\\text{IQR} = 13 - 6 = 7$.",
                "zh": "中位数是 8（7 个值中的第 4 个）。较小一半为 4、6、6，其中位数 $Q_1 = 6$；较大一半为 11、13、15，其中位数 $Q_3 = 13$。因此 $\\text{IQR} = 13 - 6 = 7$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "exploring-two-variable-data",
      "title": "Unit 2: Exploring Two-Variable Data",
      "titleZh": "第二单元：双变量数据探索",
      "lessons": [
        {
          "id": "two-variable-associations",
          "title": "Two-Way Tables, Scatterplots, and Correlation",
          "titleZh": "双向表、散点图与相关系数",
          "content": [
            {
              "type": "h2",
              "en": "Studying Relationships Between Two Variables",
              "zh": "研究两个变量之间的关系"
            },
            {
              "type": "p",
              "en": "Unit 1 explored one variable at a time. Now we ask whether two variables are ASSOCIATED: does knowing one help us predict the other? The tools depend on the variable types. Two categorical variables are summarized with a two-way table; two quantitative variables are displayed with a scatterplot and measured with the correlation coefficient $r$.",
              "zh": "第一单元每次只研究一个变量。现在我们要问两个变量是否存在关联：知道其中一个是否有助于预测另一个？所用工具取决于变量类型。两个分类变量用双向表汇总；两个数量变量用散点图展示，并用相关系数 $r$ 来度量。"
            },
            {
              "type": "h3",
              "en": "Two-Way Tables for Two Categorical Variables",
              "zh": "两个分类变量的双向表"
            },
            {
              "type": "p",
              "en": "A two-way table (contingency table) counts how many individuals fall into each combination of two categorical variables. Suppose 300 high-school students are classified by grade (Junior/Senior) and whether they hold a part-time job. The counts are: Juniors with a job 48, Juniors with no job 102 (150 juniors); Seniors with a job 90, Seniors with no job 60 (150 seniors). The column totals are 138 with a job and 162 with no job.",
              "zh": "双向表（列联表）统计有多少个体落入两个分类变量的每一种组合。假设把 300 名高中生按年级（高二/高三）以及是否有兼职进行分类。计数如下：高二有兼职 48 人、高二无兼职 102 人（共 150 名高二生）；高三有兼职 90 人、高三无兼职 60 人（共 150 名高三生）。列合计为有兼职 138 人、无兼职 162 人。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A MARGINAL relative frequency uses a row or column total over the grand total. Proportion of all students with a job $= 138/300 = 0.46$.",
                  "zh": "边际相对频数用某一行或某一列的合计除以总计。所有学生中有兼职的比例 $= 138/300 = 0.46$。"
                },
                {
                  "en": "A JOINT relative frequency uses one cell over the grand total. Proportion who are Juniors AND have a job $= 48/300 = 0.16$.",
                  "zh": "联合相对频数用某一个单元格除以总计。既是高二又有兼职的比例 $= 48/300 = 0.16$。"
                },
                {
                  "en": "A CONDITIONAL relative frequency uses one cell over a row OR column total, restricting to one group. Among Juniors, proportion with a job $= 48/150 = 0.32$; among Seniors, $= 90/150 = 0.60$.",
                  "zh": "条件相对频数用某一个单元格除以某一行或某一列的合计，即限定在某一组之内。高二生中有兼职的比例 $= 48/150 = 0.32$；高三生中为 $= 90/150 = 0.60$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "We judge association by comparing CONDITIONAL distributions. Here 32% of Juniors versus 60% of Seniors hold a job, so grade and employment are associated: seniors are much more likely to work. A segmented bar chart would show the \"job\" segment filling 32% of the Junior bar and 60% of the Senior bar.",
              "zh": "我们通过比较条件分布来判断关联。这里高二生有 32%、高三生有 60% 有兼职，所以年级与就业存在关联：高三生更可能有工作。分段条形图会显示\"兼职\"段占高二条形的 32%、占高三条形的 60%。"
            },
            {
              "type": "note",
              "en": "Common mistake: confusing a joint proportion with a conditional one. \"The proportion of Juniors who have a job\" ($48/150$) divides by the row total, but \"the proportion of job-holders who are Juniors\" ($48/138$) divides by the column total, and \"the proportion who are Juniors with a job\" ($48/300$) is joint. Read the \"of\" phrase carefully to find the correct denominator.",
              "zh": "常见错误：把联合比例与条件比例搞混。\"高二生中有兼职的比例\"（$48/150$）用行合计做分母，而\"兼职者中是高二生的比例\"（$48/138$）用列合计做分母，\"既是高二又有兼职的比例\"（$48/300$）则是联合比例。仔细读\"……中……的\"这一措辞来确定正确的分母。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Using the table above, do the data suggest an association between grade and holding a job? Support your answer with conditional relative frequencies.",
                "zh": "利用上表，数据是否显示年级与是否有兼职之间存在关联？用条件相对频数支持你的结论。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compare the conditional distribution of employment for each grade. Among Juniors: $48/150 = 0.32$ have a job. Among Seniors: $90/150 = 0.60$ have a job.",
                  "zh": "比较每个年级的就业条件分布。高二生中：$48/150 = 0.32$ 有兼职。高三生中：$90/150 = 0.60$ 有兼职。"
                },
                {
                  "type": "p",
                  "en": "Because these conditional proportions differ substantially ($0.32$ vs $0.60$), there is an association: seniors are considerably more likely to hold a part-time job than juniors.",
                  "zh": "由于这两个条件比例差别很大（$0.32$ 对 $0.60$），所以存在关联：高三生比高二生明显更可能有兼职。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Scatterplots for Two Quantitative Variables",
              "zh": "两个数量变量的散点图"
            },
            {
              "type": "p",
              "en": "For two quantitative variables we plot the explanatory variable on the $x$-axis and the response variable on the $y$-axis. Consider six students with (study hours, test score): $(1,55)$, $(2,62)$, $(3,68)$, $(4,74)$, $(5,79)$, $(6,85)$. As hours increase, scores rise steadily by about 6 points each hour, and the points lie almost exactly on a line.",
              "zh": "对两个数量变量，我们把解释变量画在 $x$ 轴、把响应变量画在 $y$ 轴。考虑六名学生的（学习小时数，考试分数）：$(1,55)$、$(2,62)$、$(3,68)$、$(4,74)$、$(5,79)$、$(6,85)$。随着小时数增加，分数每小时稳定上升约 6 分，各点几乎正好落在一条直线上。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "DIRECTION: positive (both increase together) or negative (one increases as the other decreases). The scores above show a positive direction.",
                  "zh": "方向：正相关（两者同增）或负相关（一个增大时另一个减小）。上面的分数呈正方向。"
                },
                {
                  "en": "FORM: linear (a straight-line pattern) or nonlinear (a curve). The points above are essentially linear.",
                  "zh": "形态：线性（呈直线趋势）或非线性（呈曲线）。上面的点基本是线性的。"
                },
                {
                  "en": "STRENGTH: how closely the points follow the form. Tightly clustered points are strong; a loose cloud is weak. These points are very strong.",
                  "zh": "强度：各点贴合该趋势的紧密程度。点越集中越强；散成松散的云则越弱。这些点非常强。"
                },
                {
                  "en": "UNUSUAL FEATURES: outliers (points far from the pattern) or distinct clusters. There are none here.",
                  "zh": "异常特征：离群点（远离整体趋势的点）或明显的分组。这里没有。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: a complete scatterplot description must name ALL of direction, form, strength, and unusual features, and every statement must be in context (mention the actual variables, not just \"x and y\"). Missing one of the four elements loses credit on the exam.",
              "zh": "AP 提示：完整的散点图描述必须说全方向、形态、强度、异常特征四点，而且每句话都要结合背景（提到真实变量，而非只说\"x 和 y\"）。漏掉四要素之一会在考试中失分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "A scatterplot of car age (years) versus resale value (thousands of dollars) shows points $(1,26)$, $(2,22)$, $(3,19)$, $(4,17)$, $(5,16)$, with one point at $(2,10)$ well below the others. Describe this relationship.",
                "zh": "汽车车龄（年）与转售价值（千美元）的散点图显示各点 $(1,26)$、$(2,22)$、$(3,19)$、$(4,17)$、$(5,16)$，另有一点 $(2,10)$ 明显低于其他点。请描述这种关系。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Direction: negative, since resale value falls as age increases. Form: the main points curve slightly (the drop from year 1 to 2 is $4$ but from year 4 to 5 is only $1$), so it is mildly nonlinear. Strength: fairly strong for the main pattern.",
                  "zh": "方向：负相关，因为转售价值随车龄增加而下降。形态：主要各点略呈曲线（第 1 到第 2 年下降 $4$，但第 4 到第 5 年只降 $1$），所以是轻微非线性。强度：就主趋势而言相当强。"
                },
                {
                  "type": "p",
                  "en": "Unusual feature: the point $(2,10)$ is an outlier, a 2-year-old car worth far less than others of the same age, perhaps due to damage.",
                  "zh": "异常特征：点 $(2,10)$ 是离群点，这辆 2 年车的价值远低于同车龄的其他车，可能因为受损。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Correlation Coefficient r",
              "zh": "相关系数 r"
            },
            {
              "type": "p",
              "en": "The correlation coefficient $r$ measures the direction and strength of a LINEAR relationship between two quantitative variables. It is the average product of the standardized values of $x$ and $y$.",
              "zh": "相关系数 $r$ 度量两个数量变量之间线性关系的方向与强度。它等于 $x$ 与 $y$ 的标准化值之乘积的平均。"
            },
            {
              "type": "math",
              "tex": "r = \\frac{1}{n-1}\\sum \\left(\\frac{x_i-\\bar{x}}{s_x}\\right)\\left(\\frac{y_i-\\bar{y}}{s_y}\\right)"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$r$ is always between $-1$ and $1$. Values near $\\pm 1$ mean a strong linear pattern; values near $0$ mean a weak linear pattern.",
                  "zh": "$r$ 始终介于 $-1$ 与 $1$ 之间。接近 $\\pm 1$ 表示线性趋势很强；接近 $0$ 表示线性趋势很弱。"
                },
                {
                  "en": "The sign of $r$ matches the direction: positive $r$ for a positive association, negative $r$ for a negative one.",
                  "zh": "$r$ 的符号与方向一致：正关联对应正 $r$，负关联对应负 $r$。"
                },
                {
                  "en": "$r$ has no units and does not change if you swap $x$ and $y$ or change units (e.g. inches to centimeters).",
                  "zh": "$r$ 没有单位，交换 $x$ 与 $y$ 或改变单位（如英寸换成厘米）都不会改变它。"
                },
                {
                  "en": "$r$ only measures LINEAR strength. A strong curved relationship can still have an $r$ near $0$, and $r$ is not resistant to outliers.",
                  "zh": "$r$ 只度量线性强度。很强的曲线关系其 $r$ 仍可能接近 $0$，而且 $r$ 对离群点不稳健。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Correlation is not causation. A high $r$ between ice-cream sales and drownings does not mean ice cream causes drowning; a lurking variable (hot weather) drives both. Only a well-designed randomized experiment can establish causation, never a value of $r$ alone.",
              "zh": "相关不等于因果。冰淇淋销量与溺水人数之间的高 $r$ 并不意味着冰淇淋导致溺水；潜在变量（炎热天气）同时推动了两者。只有设计良好的随机实验才能确立因果，单凭 $r$ 的数值永远不能。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "For the study-hours data $(1,55),(2,62),(3,68),(4,74),(5,79),(6,85)$, a calculator reports $r = 0.998$. Interpret this value, and state what it does and does not tell us.",
                "zh": "对于学习小时数数据 $(1,55),(2,62),(3,68),(4,74),(5,79),(6,85)$，计算器给出 $r = 0.998$。请解释这个数值，并说明它告诉了我们什么、没有告诉我们什么。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Because $r = 0.998$ is positive and extremely close to $1$, there is a very strong positive LINEAR association between study hours and test score: students who study more tend to score higher, and the points fall almost exactly on a line.",
                  "zh": "由于 $r = 0.998$ 为正且极接近 $1$，学习小时数与考试分数之间存在很强的正线性关联：学习越多的学生分数越高，各点几乎正好落在一条直线上。"
                },
                {
                  "type": "p",
                  "en": "It does NOT prove that studying causes higher scores. This is observational data, so a lurking variable (such as overall motivation) could influence both. Correlation alone cannot establish cause and effect.",
                  "zh": "它并不能证明学习会导致更高的分数。这是观察性数据，所以潜在变量（如整体积极性）可能同时影响两者。仅凭相关无法确立因果。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In the grade/job table (48, 102, 90, 60 for Junior-job, Junior-no, Senior-job, Senior-no), what is the proportion of Seniors who have a job?",
                "zh": "在年级/兼职表中（高二有兼职、高二无、高三有兼职、高三无分别为 48、102、90、60），高三生中有兼职的比例是多少？"
              },
              "choices": [
                "$90/300 = 0.30$",
                "$90/138 = 0.65$",
                "$90/150 = 0.60$",
                "$138/300 = 0.46$"
              ],
              "answer": 2,
              "explanation": {
                "en": "\"Of Seniors\" restricts to the Senior row, whose total is 150, so the conditional proportion is $90/150 = 0.60$. Dividing by 300 would give a joint proportion, and dividing by 138 would answer a different question (of job-holders, which are Seniors).",
                "zh": "\"高三生中\"把范围限定在高三这一行，其合计为 150，所以条件比例为 $90/150 = 0.60$。除以 300 得到的是联合比例，除以 138 回答的是另一个问题（兼职者中是高三生的比例）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which value of $r$ indicates the strongest linear relationship?",
                "zh": "哪个 $r$ 值表示最强的线性关系？"
              },
              "choices": [
                "$r = -0.91$",
                "$r = 0.55$",
                "$r = 0.30$",
                "$r = 0$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Strength depends on how close $|r|$ is to 1, not on the sign. $|-0.91| = 0.91$ is closest to 1, so it is the strongest, even though it is negative. A negative sign only tells the direction, not that the relationship is weaker.",
                "zh": "强度取决于 $|r|$ 离 1 有多近，与符号无关。$|-0.91| = 0.91$ 最接近 1，所以最强，尽管它是负的。负号只说明方向，并不代表关系更弱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A scatterplot of temperature and ice-cream sales gives $r = 0.87$. What is the best conclusion?",
                "zh": "温度与冰淇淋销量的散点图给出 $r = 0.87$。最恰当的结论是什么？"
              },
              "choices": [
                "Higher temperature causes higher sales. / 温度升高导致销量升高。",
                "There is a strong positive linear association, but causation is not established. / 存在强正线性关联，但因果关系未确立。",
                "Sales cause the temperature to rise. / 销量升高导致温度升高。",
                "There is no relationship because $r$ is not exactly 1. / 因为 $r$ 不是恰好 1，所以没有关系。"
              ],
              "answer": 1,
              "explanation": {
                "en": "A correlation, even a strong one, describes association only. Observational data with a lurking variable cannot prove that one variable causes the other, and $r = 0.87$ certainly does not mean \"no relationship.\"",
                "zh": "相关（即使很强）只描述关联。带有潜在变量的观察性数据无法证明一个变量导致另一个，而 $r = 0.87$ 当然也不代表\"没有关系\"。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the grade/job table, what is the marginal relative frequency of students with NO job? Give the total-based proportion rounded to 2 decimals.",
                "zh": "在年级/兼职表中，无兼职学生的边际相对频数是多少？给出基于总计的比例，保留 2 位小数。"
              },
              "answer": "0.54",
              "accept": [
                "0.54",
                ".54",
                "162/300"
              ],
              "explanation": {
                "en": "The column total for \"no job\" is $102 + 60 = 162$ out of 300 students, so the marginal relative frequency is $162/300 = 0.54$. It uses the grand total as the denominator.",
                "zh": "\"无兼职\"这一列的合计为 $102 + 60 = 162$，共 300 名学生，所以边际相对频数为 $162/300 = 0.54$。它以总计作分母。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A data set of heights (in inches) and weights has $r = 0.74$. If the heights are converted to centimeters, what is the new value of $r$? Give it to 2 decimals.",
                "zh": "一组身高（英寸）与体重的数据有 $r = 0.74$。若把身高换算成厘米，新的 $r$ 值是多少？保留 2 位小数。"
              },
              "answer": "0.74",
              "accept": [
                "0.74",
                ".74"
              ],
              "explanation": {
                "en": "Correlation has no units and is unaffected by linear changes of scale, so converting inches to centimeters leaves $r$ exactly $0.74$. Only reshaping the actual pattern of points could change $r$.",
                "zh": "相关系数没有单位，也不受线性尺度变化的影响，所以把英寸换成厘米后 $r$ 仍恰好是 $0.74$。只有改变各点的实际分布形态才会改变 $r$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Points $(1,2),(2,4),(3,8),(4,16),(5,32)$ form a clearly increasing curve. Its correlation is $r = 0.90$. What is the best interpretation?",
                "zh": "各点 $(1,2),(2,4),(3,8),(4,16),(5,32)$ 构成一条明显递增的曲线。其相关系数为 $r = 0.90$。最恰当的解释是什么？"
              },
              "choices": [
                "The relationship is perfectly linear. / 该关系是完全线性的。",
                "There is no association at all. / 完全没有关联。",
                "The association is strong and increasing, but $r$ understates it because the form is curved, not linear. / 关联强且递增，但因形态是曲线而非线性，$r$ 低估了它。",
                "$r$ must be exactly 1 for any increasing pattern. / 只要是递增趋势 $r$ 就必定恰好是 1。"
              ],
              "answer": 2,
              "explanation": {
                "en": "These points rise sharply as a curve (an exponential shape), so the association is strong, but $r$ measures LINEAR strength only. A curved pattern gives an $r$ below 1 even when the points follow a very clear trend.",
                "zh": "这些点像曲线一样急剧上升（呈指数形态），所以关联很强，但 $r$ 只度量线性强度。即使各点遵循非常清晰的趋势，曲线形态也会使 $r$ 小于 1。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of variables would you expect to have a NEGATIVE correlation?",
                "zh": "你预计下列哪一对变量具有负相关？"
              },
              "choices": [
                "Hours studied and test score / 学习小时数与考试分数",
                "Height and shoe size / 身高与鞋码",
                "Number of rooms in a house and its price / 房屋的房间数与其价格",
                "A car's age and its resale value / 汽车的车龄与其转售价值"
              ],
              "answer": 3,
              "explanation": {
                "en": "A negative correlation means one variable tends to fall as the other rises. As a car gets older its resale value drops, giving a negative association. The other pairs both tend to increase together, which is positive.",
                "zh": "负相关意味着一个变量随另一个上升而下降。汽车越旧转售价值越低，构成负关联。其他几对都是同增，属于正相关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a survey, 80 of 200 people who exercise regularly report low stress, and 40 of 100 people who do not exercise report low stress. Among the exercisers, what proportion report low stress? Give 2 decimals.",
                "zh": "一项调查中，经常锻炼的 200 人里有 80 人报告低压力，不锻炼的 100 人里有 40 人报告低压力。锻炼者中报告低压力的比例是多少？保留 2 位小数。"
              },
              "answer": "0.40",
              "accept": [
                "0.40",
                "0.4",
                ".4",
                "80/200"
              ],
              "explanation": {
                "en": "Conditioning on exercisers restricts to their group of 200, so the proportion is $80/200 = 0.40$. Here the non-exercisers also have $40/100 = 0.40$, so these equal conditional proportions suggest NO association in this table.",
                "zh": "以锻炼者为条件即限定在这 200 人之内，所以比例为 $80/200 = 0.40$。这里不锻炼者同样是 $40/100 = 0.40$，两个条件比例相等，说明此表中没有关联。"
              }
            }
          ]
        },
        {
          "id": "least-squares-regression",
          "title": "Least-Squares Regression",
          "titleZh": "最小二乘回归",
          "content": [
            {
              "type": "h2",
              "en": "Modeling a Linear Relationship",
              "zh": "为线性关系建立模型"
            },
            {
              "type": "p",
              "en": "When a scatterplot of two quantitative variables looks linear, we summarize it with a regression line that lets us make predictions. The least-squares regression line (LSRL) is the one specific line that makes the sum of the squared residuals as small as possible.",
              "zh": "当两个数量变量的散点图看起来呈线性时，我们用一条回归线来概括它，从而进行预测。最小二乘回归线（LSRL）是使残差平方和尽可能小的那一条特定直线。"
            },
            {
              "type": "h3",
              "en": "The Least-Squares Regression Line",
              "zh": "最小二乘回归线"
            },
            {
              "type": "p",
              "en": "We write the predicted response as $\\hat{y} = a + bx$, where $b$ is the slope and $a$ is the $y$-intercept. The hat on $\\hat{y}$ signals a PREDICTED value, not an observed one. The formulas connect the line to the means, standard deviations, and correlation of the data.",
              "zh": "我们把预测响应写作 $\\hat{y} = a + bx$，其中 $b$ 是斜率，$a$ 是 $y$ 截距。$\\hat{y}$ 上的帽子表示这是预测值，而非观测值。下面的公式把这条直线与数据的均值、标准差和相关系数联系起来。"
            },
            {
              "type": "math",
              "tex": "b = r\\,\\frac{s_y}{s_x} \\qquad a = \\bar{y} - b\\,\\bar{x}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "SLOPE $b$: the predicted CHANGE in $y$ for each one-unit increase in $x$. Always interpret it with units and the word \"predicted.\"",
                  "zh": "斜率 $b$：$x$ 每增加一个单位时 $y$ 的预测变化量。解释时务必带上单位以及\"预测\"一词。"
                },
                {
                  "en": "Y-INTERCEPT $a$: the predicted value of $y$ when $x = 0$. It is only meaningful if $x = 0$ is within or near the observed data.",
                  "zh": "Y 截距 $a$：当 $x = 0$ 时 $y$ 的预测值。只有当 $x = 0$ 落在观测数据范围之内或附近时它才有意义。"
                },
                {
                  "en": "The LSRL always passes through the point of averages $(\\bar{x}, \\bar{y})$.",
                  "zh": "最小二乘回归线始终经过平均点 $(\\bar{x}, \\bar{y})$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: a slope interpretation must be in context AND include the word \"predicted\" (or \"on average\"). Saying \"the score increases by 8 points\" is wrong because not every student gains exactly 8; say \"the PREDICTED score increases by 8 points for each additional hour studied.\"",
              "zh": "AP 提示：斜率的解释必须结合背景，并且包含\"预测\"（或\"平均而言\"）一词。说\"分数增加 8 分\"是错的，因为并非每个学生都正好增加 8 分；应说\"每多学习一小时，预测分数增加 8 分\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "For predicting test score from hours studied, the LSRL is $\\hat{y} = 40 + 8x$. Interpret the slope and intercept, then predict the score for a student who studies 5 hours.",
                "zh": "用学习小时数预测考试分数，最小二乘回归线为 $\\hat{y} = 40 + 8x$。解释斜率与截距，然后预测一名学习 5 小时的学生的分数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Slope: for each additional hour studied, the predicted test score increases by 8 points. Intercept: a student who studies 0 hours has a predicted score of 40 points.",
                  "zh": "斜率：每多学习一小时，预测考试分数增加 8 分。截距：学习 0 小时的学生预测分数为 40 分。"
                },
                {
                  "type": "math",
                  "tex": "\\hat{y} = 40 + 8(5) = 80"
                },
                {
                  "type": "p",
                  "en": "The predicted score for 5 hours of study is 80 points.",
                  "zh": "学习 5 小时的预测分数为 80 分。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Residuals, Predictions, and Extrapolation",
              "zh": "残差、预测与外推"
            },
            {
              "type": "p",
              "en": "A residual is the leftover error at an observed point: how far the actual value sits above or below the line.",
              "zh": "残差是某个观测点上剩余的误差：实际值高于或低于回归线的距离。"
            },
            {
              "type": "math",
              "tex": "\\text{residual} = y - \\hat{y} = \\text{observed} - \\text{predicted}"
            },
            {
              "type": "p",
              "en": "A positive residual means the model UNDER-predicted (the point is above the line); a negative residual means it OVER-predicted. For the student above, if 5 hours produced an actual score of 88, the residual is $88 - 80 = +8$: the model under-predicted by 8 points.",
              "zh": "正残差表示模型预测偏低（点在直线上方）；负残差表示预测偏高。对上面那名学生，若学习 5 小时的实际分数为 88，则残差为 $88 - 80 = +8$：模型预测偏低了 8 分。"
            },
            {
              "type": "note",
              "en": "Beware extrapolation: using the model far outside the range of the observed $x$-values. If study hours ranged from 1 to 6, predicting the score for 20 hours ($\\hat{y} = 40 + 8(20) = 200$, an impossible score above 100) is meaningless. A line that fits the data need not hold beyond it.",
              "zh": "警惕外推：在观测 $x$ 值范围之外很远的地方使用模型。若学习小时数在 1 到 6 之间，预测 20 小时的分数（$\\hat{y} = 40 + 8(20) = 200$，一个高于 100 的不可能分数）毫无意义。在数据范围内拟合良好的直线，未必在范围之外仍然成立。"
            },
            {
              "type": "h3",
              "en": "Residual Plots and the Coefficient of Determination",
              "zh": "残差图与决定系数"
            },
            {
              "type": "p",
              "en": "A residual plot graphs the residuals against $x$ (or against $\\hat{y}$). If a linear model fits well, the residuals should scatter RANDOMLY around 0 with no pattern. Suppose five residuals are $-3, +2, -1, +4, -2$: they bounce above and below 0 with no trend, so a line is appropriate. But if the residuals went $-5, -1, +3, +1, -4$ forming a clear U-shape (curved down, then up), that leftover curvature signals the true relationship is nonlinear and a line is a poor fit.",
              "zh": "残差图把残差对 $x$（或对 $\\hat{y}$）作图。若线性模型拟合良好，残差应在 0 附近随机散布、没有规律。假设五个残差为 $-3, +2, -1, +4, -2$：它们在 0 上下跳动、没有趋势，所以用直线是恰当的。但若残差呈 $-5, -1, +3, +1, -4$ 形成明显的 U 形（先向下再向上），这种剩余的弯曲说明真实关系是非线性的，直线拟合很差。"
            },
            {
              "type": "p",
              "en": "The coefficient of determination $r^2$ (the square of the correlation) measures how much of the variation in $y$ the model accounts for.",
              "zh": "决定系数 $r^2$（相关系数的平方）度量模型解释了 $y$ 变异的多大比例。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$r^2$ is between 0 and 1 and is usually stated as a percent. It is the fraction of the variation in $y$ that is explained by the linear relationship with $x$.",
                  "zh": "$r^2$ 介于 0 与 1 之间，通常用百分数表示。它是 $y$ 的变异中由与 $x$ 的线性关系所解释的比例。"
                },
                {
                  "en": "If $r = 0.9$, then $r^2 = 0.81$: about 81% of the variation in test scores is explained by the linear relationship with hours studied. The remaining 19% is due to other factors.",
                  "zh": "若 $r = 0.9$，则 $r^2 = 0.81$：考试分数变异中约 81% 由与学习小时数的线性关系所解释。其余 19% 归因于其他因素。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: confusing $r$ and $r^2$. If $r^2 = 0.64$, then $r = \\pm 0.8$ (take the square root, with the sign matching the slope), NOT $0.64$. Also, $r^2$ does not equal \"the percent of points on the line\"; it is the percent of the VARIATION in $y$ explained by the model.",
              "zh": "常见错误：把 $r$ 与 $r^2$ 搞混。若 $r^2 = 0.64$，则 $r = \\pm 0.8$（取平方根，符号与斜率一致），而不是 $0.64$。此外，$r^2$ 不等于\"落在直线上的点的百分比\"；它是模型所解释的 $y$ 变异的百分比。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Using $\\hat{y} = 40 + 8x$, a student who studied 3 hours actually scored 60. Compute the residual and state what it means.",
                "zh": "用 $\\hat{y} = 40 + 8x$，一名学习 3 小时的学生实际得了 60 分。计算残差并说明其含义。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\hat{y} = 40 + 8(3) = 64, \\quad \\text{residual} = 60 - 64 = -4"
                },
                {
                  "type": "p",
                  "en": "The residual is $-4$. Because it is negative, the model OVER-predicted this student's score: the actual score was 4 points below what the line predicted, so this point lies below the line.",
                  "zh": "残差为 $-4$。因为它是负的，模型对这名学生的分数预测偏高：实际分数比直线预测的低 4 分，所以这个点位于直线下方。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Outliers versus Influential Points",
              "zh": "离群点与影响点"
            },
            {
              "type": "p",
              "en": "An OUTLIER in regression is a point with a large residual (far from the line in the $y$-direction). An INFLUENTIAL point is one whose removal noticeably changes the slope or intercept; these often have extreme $x$-values. A point can be both, one, or neither. For example, add the point $(15, 50)$ to study data that otherwise runs from $x = 1$ to $6$: its extreme $x$ can pull the line toward itself, sharply changing the slope, making it influential even if its residual is not enormous.",
              "zh": "回归中的离群点是残差很大的点（在 $y$ 方向上远离直线）。影响点则是删去后会明显改变斜率或截距的点；它们往往有极端的 $x$ 值。一个点可以两者皆是、只是其一或都不是。例如，向原本 $x$ 从 1 到 6 的学习数据中加入点 $(15, 50)$：其极端的 $x$ 会把直线拉向自己，大幅改变斜率，即使残差不算很大也会成为影响点。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The LSRL for predicting weekly sales ($) from advertising ($ spent) is $\\hat{y} = 500 + 12x$. What is the correct interpretation of the slope?",
                "zh": "用广告支出（美元）预测每周销售额（美元）的最小二乘回归线为 $\\hat{y} = 500 + 12x$。斜率的正确解释是什么？"
              },
              "choices": [
                "Sales are always $12 more than advertising. / 销售额总是比广告支出多 12 美元。",
                "For each additional dollar spent on advertising, predicted weekly sales increase by $12. / 广告每多花 1 美元，预测每周销售额增加 12 美元。",
                "When advertising is $0, sales are $12. / 广告为 0 时销售额为 12 美元。",
                "Predicted sales increase by $500 per advertising dollar. / 每 1 美元广告使预测销售额增加 500 美元。"
              ],
              "answer": 1,
              "explanation": {
                "en": "The slope is the predicted change in $y$ per one-unit increase in $x$: each extra advertising dollar adds a predicted $12 in sales. The $500 is the intercept (predicted sales at $0 advertising), not the slope.",
                "zh": "斜率是 $x$ 每增加一个单位时 $y$ 的预测变化：每多花 1 美元广告，预测销售额增加 12 美元。500 是截距（广告为 0 时的预测销售额），不是斜率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A residual plot shows residuals forming a clear curved (U-shaped) pattern. What does this indicate?",
                "zh": "残差图显示残差呈明显的弯曲（U 形）趋势。这说明什么？"
              },
              "choices": [
                "A linear model is a good fit. / 线性模型拟合良好。",
                "The correlation must be exactly 0. / 相关系数必定恰好为 0。",
                "A linear model is not appropriate; the true relationship is nonlinear. / 线性模型不合适；真实关系是非线性的。",
                "There are no outliers in the data. / 数据中没有离群点。"
              ],
              "answer": 2,
              "explanation": {
                "en": "A good linear fit leaves residuals scattered randomly around 0. A leftover curved pattern means the line missed a systematic bend, so the relationship is nonlinear and a line is the wrong model.",
                "zh": "拟合良好的直线会使残差在 0 附近随机散布。残留的弯曲趋势说明直线漏掉了一个系统性的弯曲，所以关系是非线性的，用直线是错误的模型。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A regression gives $r^2 = 0.49$. Which statement is correct?",
                "zh": "一个回归给出 $r^2 = 0.49$。哪个说法正确？"
              },
              "choices": [
                "49% of the variation in $y$ is explained by the linear model, and $r = \\pm 0.7$. / $y$ 变异的 49% 由线性模型解释，且 $r = \\pm 0.7$。",
                "49% of the data points lie exactly on the line. / 49% 的数据点正好落在直线上。",
                "The correlation is $r = 0.49$. / 相关系数为 $r = 0.49$。",
                "The slope of the line is 0.49. / 直线的斜率是 0.49。"
              ],
              "answer": 0,
              "explanation": {
                "en": "$r^2$ is the fraction of the variation in $y$ explained by the model, here 49%, and $r$ is its square root $\\pm 0.7$. $r^2$ is not the percent of points on the line, and $r$ is not 0.49 (that is $r^2$).",
                "zh": "$r^2$ 是模型所解释的 $y$ 变异的比例，这里是 49%，而 $r$ 是它的平方根 $\\pm 0.7$。$r^2$ 不是落在直线上的点的百分比，$r$ 也不是 0.49（那是 $r^2$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $\\hat{y} = 40 + 8x$, a student who studied 4 hours scored 78. Find the residual (observed minus predicted).",
                "zh": "用 $\\hat{y} = 40 + 8x$，一名学习 4 小时的学生得了 78 分。求残差（观测值减预测值）。"
              },
              "answer": "6",
              "accept": [
                "6",
                "+6",
                "78-72"
              ],
              "explanation": {
                "en": "Predicted score is $40 + 8(4) = 72$. Residual $= 78 - 72 = +6$. The positive residual means the model under-predicted, so this point lies 6 points above the line.",
                "zh": "预测分数为 $40 + 8(4) = 72$。残差 $= 78 - 72 = +6$。正残差表示模型预测偏低，所以这个点在直线上方 6 分处。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A regression has correlation $r = 0.6$. What is $r^2$? Give it as a decimal.",
                "zh": "一个回归的相关系数为 $r = 0.6$。$r^2$ 是多少？用小数表示。"
              },
              "answer": "0.36",
              "accept": [
                "0.36",
                ".36"
              ],
              "explanation": {
                "en": "The coefficient of determination is the square of the correlation: $r^2 = 0.6^2 = 0.36$, meaning 36% of the variation in $y$ is explained by the linear model.",
                "zh": "决定系数是相关系数的平方：$r^2 = 0.6^2 = 0.36$，表示 $y$ 变异的 36% 由线性模型解释。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A data set has $x$-values from 2 to 10. Using the LSRL to predict $y$ when $x = 40$ is an example of what error?",
                "zh": "某数据集的 $x$ 值从 2 到 10。用最小二乘回归线预测 $x = 40$ 时的 $y$ 属于哪种错误？"
              },
              "choices": [
                "Rounding error / 舍入误差",
                "Confusing $r$ and $r^2$ / 混淆 $r$ 与 $r^2$",
                "Extrapolation / 外推",
                "Reversing $x$ and $y$ / 颠倒 $x$ 与 $y$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Predicting at $x = 40$ when the data only reach $x = 10$ uses the model far outside the observed range, which is extrapolation. The linear pattern is not guaranteed to continue there, so the prediction is unreliable.",
                "zh": "在数据仅到 $x = 10$ 时预测 $x = 40$，是在观测范围之外很远处使用模型，即外推。线性趋势在那里不保证继续成立，所以预测不可靠。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a scatterplot running from $x = 1$ to $6$, a new point is added at $(20, 15)$. Removing it changes the slope dramatically. This point is best described as:",
                "zh": "在 $x$ 从 1 到 6 的散点图中，加入了一个新点 $(20, 15)$。删去它会大幅改变斜率。这个点最好被描述为："
              },
              "choices": [
                "A point with zero residual / 残差为零的点",
                "A point that has no effect on the line / 对直线没有影响的点",
                "The mean point $(\\bar{x}, \\bar{y})$ / 平均点 $(\\bar{x}, \\bar{y})$",
                "An influential point / 影响点"
              ],
              "answer": 3,
              "explanation": {
                "en": "A point whose removal noticeably changes the slope or intercept is influential, and its extreme $x$-value (20, far from the others) is exactly what gives it that leverage over the line.",
                "zh": "删去后会明显改变斜率或截距的点就是影响点，而它极端的 $x$ 值（20，远离其他点）正是它对直线产生这种杠杆作用的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A regression line passes through the point of averages. If $\\bar{x} = 5$, $\\bar{y} = 30$, and the slope is $b = 4$, find the $y$-intercept $a$.",
                "zh": "回归线经过平均点。若 $\\bar{x} = 5$，$\\bar{y} = 30$，斜率 $b = 4$，求 $y$ 截距 $a$。"
              },
              "answer": "10",
              "accept": [
                "10",
                "a=10"
              ],
              "explanation": {
                "en": "Use $a = \\bar{y} - b\\bar{x} = 30 - 4(5) = 30 - 20 = 10$. This works because the LSRL always passes through $(\\bar{x}, \\bar{y})$, so plugging in the means must satisfy the equation.",
                "zh": "用 $a = \\bar{y} - b\\bar{x} = 30 - 4(5) = 30 - 20 = 10$。这成立是因为最小二乘回归线始终经过 $(\\bar{x}, \\bar{y})$，所以代入均值必须满足方程。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "collecting-data",
      "title": "Unit 3: Collecting Data",
      "titleZh": "第三单元：数据收集",
      "lessons": [
        {
          "id": "sampling-and-bias",
          "title": "Sampling Methods and Bias",
          "titleZh": "抽样方法与偏差",
          "content": [
            {
              "type": "h2",
              "en": "Populations, Samples, and Census",
              "zh": "总体、样本与普查"
            },
            {
              "type": "p",
              "en": "The population is the entire group of individuals we want to know about. A sample is the subset of the population from which we actually collect data. Because studying every individual is usually too expensive, slow, or impossible, we use a sample to draw conclusions about the population. A census attempts to collect data from every individual in the population.",
              "zh": "总体是我们想了解的全部个体所构成的集合。样本是我们实际收集数据的那部分个体，是总体的一个子集。由于研究每一个个体通常太昂贵、太慢或根本不可能，我们用样本来推断总体。普查则试图对总体中的每一个个体都收集数据。"
            },
            {
              "type": "p",
              "en": "A number that describes the population is a parameter; a number computed from a sample is a statistic. We use statistics (like the sample mean $\\bar{x}$ or sample proportion $\\hat{p}$) to estimate parameters (like the population mean $\\mu$ or population proportion $p$) that we cannot observe directly.",
              "zh": "描述总体的数值叫做参数；由样本计算出来的数值叫做统计量。我们用统计量（如样本均值 $\\bar{x}$ 或样本比例 $\\hat{p}$）去估计无法直接观测的参数（如总体均值 $\\mu$ 或总体比例 $p$）。"
            },
            {
              "type": "note",
              "en": "Memory hook: Parameter and Population both start with P; Statistic and Sample both start with S. Mixing up \"parameter\" and \"statistic\" is one of the most common vocabulary errors on the AP exam.",
              "zh": "记忆技巧：Parameter（参数）与 Population（总体）都以 P 开头；Statistic（统计量）与 Sample（样本）都以 S 开头。混淆\"参数\"和\"统计量\"是 AP 考试中最常见的术语错误之一。"
            },
            {
              "type": "h3",
              "en": "Why Random Sampling Matters",
              "zh": "为什么随机抽样很重要"
            },
            {
              "type": "p",
              "en": "The goal of good sampling is to obtain a sample that represents the population, so a statistic is a trustworthy estimate of the parameter. The only reliable way to avoid favoring some outcomes over others is to let chance choose the sample. Random selection eliminates the personal choices of the researcher, which is the single biggest source of bias.",
              "zh": "良好抽样的目标是获得能代表总体的样本，使统计量成为参数的可靠估计。避免偏向某些结果的唯一可靠方法，就是让随机性来选取样本。随机选取排除了研究者的个人主观选择，而后者正是产生偏差的最大来源。"
            },
            {
              "type": "p",
              "en": "Bias means a study is systematically off in the same direction, tending to give estimates that are consistently too high or too low no matter how large the sample. Increasing the sample size does NOT fix bias; a large biased sample is still biased. Only good sampling design removes bias.",
              "zh": "偏差是指研究系统性地朝同一方向偏离，无论样本多大，估计值都倾向于始终偏高或偏低。增大样本量并不能消除偏差；一个大的有偏样本仍然是有偏的。只有良好的抽样设计才能消除偏差。"
            },
            {
              "type": "h3",
              "en": "Probability Sampling Methods",
              "zh": "概率抽样方法"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Simple Random Sample (SRS): every possible group of $n$ individuals has an equal chance of being chosen. Method: number every individual and use a random number generator or a table of random digits to pick $n$ of them.",
                  "zh": "简单随机抽样（SRS）：每个由 $n$ 个个体组成的可能组合被选中的机会都相等。方法：给每个个体编号，再用随机数生成器或随机数字表选出 $n$ 个。"
                },
                {
                  "en": "Stratified random sample: divide the population into groups (strata) of SIMILAR individuals, then take an SRS from each stratum. Use it when individuals within each group are alike but the groups differ from one another (e.g. stratify by grade level).",
                  "zh": "分层随机抽样：先把总体分成由相似个体组成的若干组（层），再从每一层中各取一个 SRS。当组内个体相似、而组与组之间不同（例如按年级分层）时使用。"
                },
                {
                  "en": "Cluster sample: divide the population into groups (clusters), often by location, then randomly select ENTIRE clusters and use everyone in the chosen clusters. Ideal clusters each resemble the whole population (e.g. randomly pick 5 classrooms and survey every student in them).",
                  "zh": "整群抽样：把总体分成若干群（常按地理位置），再随机选出整群，并调查被选中群里的所有个体。理想的每个群都像总体的缩影（例如随机抽 5 个教室，调查其中的每一个学生）。"
                },
                {
                  "en": "Systematic sample: choose a random starting point, then select every $k$-th individual from a list (e.g. start at the 3rd name and take every 10th name thereafter).",
                  "zh": "系统抽样：随机选定一个起点，然后从名单上每隔 $k$ 个抽一个（例如从第 3 个名字开始，之后每隔 10 个抽一个）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Stratified vs. cluster is a classic exam trap. In STRATIFIED sampling you sample from EVERY group and want groups to be internally similar; in CLUSTER sampling you sample only SOME groups (whole clusters) and want each cluster to look like the whole population.",
              "zh": "分层与整群是经典的考试陷阱。分层抽样要从每一组中都抽样，且希望组内个体相似；整群抽样只抽取某些整群，且希望每个群都像总体的缩影。"
            },
            {
              "type": "h3",
              "en": "Flawed Sampling Methods",
              "zh": "有缺陷的抽样方法"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Convenience sample: selecting individuals who are easiest to reach (e.g. asking people at the mall entrance). It systematically favors whoever is available and almost always produces bias.",
                  "zh": "便利抽样：选取最容易接触到的个体（例如在商场门口随便问人）。它系统性地偏向恰好在场的人，几乎总会产生偏差。"
                },
                {
                  "en": "Voluntary response sample: people choose themselves to participate (e.g. an online poll). People with strong opinions respond more often, so these samples are biased toward the loudest voices.",
                  "zh": "自愿应答抽样：由人们自己决定是否参与（例如网络投票）。持强烈观点的人更愿意应答，因此这类样本偏向声音最大的人群。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Sources of Bias",
              "zh": "偏差的来源"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Undercoverage: some groups in the population are left out of the sampling process (e.g. a phone survey that only calls landlines misses cell-only households).",
                  "zh": "覆盖不足：总体中的某些群体被排除在抽样过程之外（例如只拨打固定电话的调查会漏掉只用手机的家庭）。"
                },
                {
                  "en": "Nonresponse bias: individuals chosen for the sample cannot be contacted or refuse to answer, and the non-responders differ from the responders.",
                  "zh": "无应答偏差：被选入样本的个体无法联系上或拒绝回答，而这些不应答者与应答者存在差异。"
                },
                {
                  "en": "Response bias: respondents answer inaccurately, often because of a sensitive topic, a desire to please the interviewer, or lying (e.g. under-reporting how much they drink).",
                  "zh": "应答偏差：受访者作出不准确的回答，常因话题敏感、想迎合访问者或说谎（例如少报自己的饮酒量）。"
                },
                {
                  "en": "Question wording bias: the phrasing of a question pushes respondents toward a particular answer (leading or confusing wording).",
                  "zh": "问题措辞偏差：问题的措辞把受访者引向某个特定答案（诱导性或令人困惑的措辞）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: Undercoverage happens when you DESIGN the sampling frame (some people can never be chosen). Nonresponse happens AFTER selection (the person was chosen but did not answer). Keep the two separate in your explanations.",
              "zh": "AP 提示：覆盖不足发生在设计抽样框时（某些人根本没机会被选中）。无应答发生在选取之后（人被选中了却没有回答）。在解释时要把两者分清。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Identifying the Method",
                "zh": "例题 1：识别抽样方法"
              },
              "problem": {
                "en": "A high school has 400 freshmen, 350 sophomores, 300 juniors, and 250 seniors. The principal randomly selects 20 students from each grade to survey about lunch options. Name the sampling method and explain why it was a sensible choice.",
                "zh": "某高中有 400 名九年级、350 名十年级、300 名十一年级、250 名十二年级学生。校长从每个年级随机抽取 20 名学生调查午餐选项。指出这属于哪种抽样方法，并说明为什么这样选是合理的。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The four grades are strata, and an SRS of 20 is taken from each grade, so this is a stratified random sample.",
                  "zh": "四个年级就是层，每个年级各取一个 20 人的 SRS，因此这是分层随机抽样。"
                },
                {
                  "type": "p",
                  "en": "Students in the same grade tend to have similar schedules and lunch experiences, while different grades may differ. Stratifying guarantees every grade is represented, giving a more precise picture of the whole school than an SRS might.",
                  "zh": "同一年级的学生往往作息和午餐体验相似，而不同年级之间可能有差异。分层保证每个年级都有代表，比单纯的 SRS 更精确地反映全校情况。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Naming the Bias",
                "zh": "例题 2：指出偏差类型"
              },
              "problem": {
                "en": "A city mails a survey asking \"Do you support the mayor's wasteful spending on a new stadium?\" Only 8% of the mailed surveys are returned. Identify two distinct problems with this survey.",
                "zh": "某市邮寄一份调查问卷，问题是\"您是否支持市长在新体育场上的浪费性开支？\"寄出的问卷只有 8% 被寄回。指出这份调查存在的两个不同问题。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First, question wording bias: the word \"wasteful\" is loaded and pushes respondents toward answering \"no,\" so the results tilt against the stadium regardless of true opinion.",
                  "zh": "第一，问题措辞偏差：\"浪费性\"一词带有倾向性，把受访者引向回答\"否\"，因此结果无论真实意见如何都会偏向反对体育场。"
                },
                {
                  "type": "p",
                  "en": "Second, nonresponse bias: with only 8% returning the survey, the 92% who did not respond may hold systematically different views, and there is no reason to think the 8% represent the city.",
                  "zh": "第二，无应答偏差：只有 8% 的人寄回问卷，其余 92% 未应答者可能持系统性不同的看法，没有理由认为这 8% 能代表全市。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A researcher reports that the average height of the 1,200 students at a school is 65 inches, based on measuring all 1,200 students. The value 65 inches is a…",
                "zh": "一位研究者测量了学校全部 1200 名学生后报告平均身高为 65 英寸。这个 65 英寸是一个……"
              },
              "choices": [
                "parameter / 参数",
                "statistic / 统计量",
                "sample / 样本",
                "stratum / 层"
              ],
              "answer": 0,
              "explanation": {
                "en": "Because every student in the population was measured, the mean describes the whole population, which makes it a parameter. It would only be a statistic if it came from a subset of the students.",
                "zh": "由于测量了总体中的每一名学生，这个均值描述的是整个总体，因此是参数。只有当它来自学生的一个子集时才是统计量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To study a lake, a biologist divides it into 50 equal square regions, randomly picks 6 of those regions, and tests the water at every point within those 6 regions. This is an example of…",
                "zh": "为研究一个湖泊，生物学家把它分成 50 个相等的方形区域，随机选出其中 6 个区域，并检测这 6 个区域内所有点的水质。这是……"
              },
              "choices": [
                "a stratified random sample / 分层随机抽样",
                "a systematic sample / 系统抽样",
                "a cluster sample / 整群抽样",
                "a convenience sample / 便利抽样"
              ],
              "answer": 2,
              "explanation": {
                "en": "Whole regions (clusters) are selected at random and everything inside the chosen clusters is measured. That is cluster sampling. It would be stratified only if a random subset were taken from within every one of the 50 regions.",
                "zh": "随机选取了整个区域（群），并测量被选中群里的所有内容，这就是整群抽样。只有当从全部 50 个区域每一个中都抽取随机子集时才是分层抽样。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A news website posts an online poll and reports \"78% of readers oppose the new law.\" Why is this result likely biased?",
                "zh": "某新闻网站发布网络投票并报告\"78% 的读者反对新法律\"。为什么这个结果很可能有偏差？"
              },
              "choices": [
                "The sample size was too small to be reliable. / 样本量太小，不可靠。",
                "Readers chose whether to respond, so those with strong opinions are overrepresented. / 读者自行决定是否参与，观点强烈者被过度代表。",
                "The poll used a random number generator. / 投票使用了随机数生成器。",
                "Online polls always overestimate proportions. / 网络投票总是高估比例。"
              ],
              "answer": 1,
              "explanation": {
                "en": "This is a voluntary response sample: people opt in themselves, so those who feel strongly answer more often and the sample does not represent all readers. A larger voluntary-response sample would still be biased, so size is not the issue.",
                "zh": "这是自愿应答抽样：人们自行加入，观点强烈者应答更多，样本不能代表全体读者。更大的自愿应答样本仍然有偏，所以问题不在于样本量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A telephone survey about internet use dials only landline phone numbers. Which type of bias is most directly created?",
                "zh": "一项关于上网情况的电话调查只拨打固定电话号码。这最直接地造成了哪种偏差？"
              },
              "choices": [
                "Response bias / 应答偏差",
                "Question wording bias / 问题措辞偏差",
                "Nonresponse bias / 无应答偏差",
                "Undercoverage / 覆盖不足"
              ],
              "answer": 3,
              "explanation": {
                "en": "People without a landline can never be selected, so a whole segment of the population is left out of the sampling frame. That is undercoverage. Nonresponse would mean selected people declined, which is a different failure.",
                "zh": "没有固定电话的人永远不可能被选中，整个人群被排除在抽样框之外，这就是覆盖不足。无应答指的是被选中的人拒绝回答，属于另一种问题。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about bias and sample size is correct?",
                "zh": "关于偏差与样本量，下列哪种说法是正确的？"
              },
              "choices": [
                "Taking a much larger sample removes bias from a flawed method. / 抽取大得多的样本能消除有缺陷方法的偏差。",
                "Bias only occurs in small samples. / 偏差只发生在小样本中。",
                "A large sample collected with a biased method is still biased. / 用有偏方法收集的大样本仍然有偏。",
                "Random sampling guarantees the statistic equals the parameter exactly. / 随机抽样保证统计量恰好等于参数。"
              ],
              "answer": 2,
              "explanation": {
                "en": "Bias is a systematic error in the sampling process, so it persists no matter how large the sample gets. Only good design removes it. Random sampling reduces bias but still leaves ordinary sampling variability, so the statistic will not exactly equal the parameter.",
                "zh": "偏差是抽样过程中的系统性误差，无论样本多大都会存在，只有良好设计才能消除它。随机抽样能减少偏差，但仍会有正常的抽样波动，因此统计量不会恰好等于参数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A manager takes a list of 900 employees, picks a random start among the first 15, and then selects every 15th person on the list. What one- or two-word name describes this sampling method?",
                "zh": "一位经理拿到 900 名员工的名单，在前 15 人中随机选一个起点，然后每隔 15 人选一个。这种抽样方法叫什么（用一两个词）？"
              },
              "answer": "systematic",
              "accept": [
                "systematic",
                "systematic sample",
                "systematic random sample",
                "systematic sampling",
                "系统抽样",
                "系统"
              ],
              "explanation": {
                "en": "Choosing a random starting point and then taking every $k$-th individual from an ordered list is systematic sampling. Here $k=15$.",
                "zh": "随机选定起点后从有序名单上每隔 $k$ 个抽一个，就是系统抽样。这里 $k=15$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In an anonymous survey, students are asked \"Have you ever cheated on a test?\" Many who did cheat answer \"no\" because the topic is embarrassing. Name the specific type of bias (two words).",
                "zh": "在一项匿名调查中，学生被问\"你曾经在考试中作弊吗？\"许多真的作弊过的人因为话题令人尴尬而回答\"没有\"。指出这种偏差的具体名称（两个字/词）。"
              },
              "answer": "response bias",
              "accept": [
                "response bias",
                "response",
                "responsebias",
                "应答偏差",
                "回答偏差"
              ],
              "explanation": {
                "en": "The respondents were reached and answered, but they answered inaccurately because of the sensitive topic. Systematically inaccurate answers are response bias, not nonresponse (they did respond).",
                "zh": "受访者被联系到且作了回答，但因话题敏感而回答不准确。系统性不准确的回答属于应答偏差，而非无应答（他们确实回答了）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population of 2,000 voters is split into three age groups. A pollster takes a separate simple random sample from within each age group. In one or two words, what are these three age groups called in stratified sampling?",
                "zh": "2000 名选民被分成三个年龄组。民调员从每个年龄组内各取一个独立的简单随机样本。在分层抽样中，这三个年龄组称为什么（一两个词）？"
              },
              "answer": "strata",
              "accept": [
                "strata",
                "stratum",
                "stratums",
                "a stratum",
                "层",
                "各层"
              ],
              "explanation": {
                "en": "In stratified random sampling the groups of similar individuals are called strata (singular: stratum). An SRS is taken from each stratum.",
                "zh": "在分层随机抽样中，由相似个体组成的组称为层（英文单数 stratum，复数 strata）。从每一层中各取一个 SRS。"
              }
            }
          ]
        },
        {
          "id": "experiments-and-observational-studies",
          "title": "Experiments and Observational Studies",
          "titleZh": "实验与观察性研究",
          "content": [
            {
              "type": "h2",
              "en": "Two Ways to Collect Data",
              "zh": "收集数据的两种方式"
            },
            {
              "type": "p",
              "en": "In an observational study, researchers measure or record individuals without trying to influence the responses. In an experiment, researchers deliberately impose a treatment on individuals and then observe how they respond. The explanatory variable in an experiment is called a factor, and the specific values a factor takes are its levels; a treatment is a specific combination of factor levels applied to a group.",
              "zh": "在观察性研究中，研究者只是测量或记录个体，并不试图影响其反应。在实验中，研究者有意地对个体施加某种处理，然后观察其反应。实验中的解释变量称为因子，因子所取的具体取值称为水平；处理则是施加于某组的因子水平的具体组合。"
            },
            {
              "type": "h3",
              "en": "Why Only Experiments Show Causation",
              "zh": "为什么只有实验能证明因果"
            },
            {
              "type": "p",
              "en": "An observational study can show that two variables are associated, but it cannot establish that one causes the other, because of confounding. A confounding variable is a variable associated with both the explanatory and the response variable, so its effect on the response cannot be separated from the effect of the explanatory variable.",
              "zh": "观察性研究能表明两个变量之间存在关联，但由于混杂因素的存在，它无法确立一个变量导致另一个变量。混杂变量是同时与解释变量和响应变量都相关的变量，因而它对响应的影响无法与解释变量的影响区分开来。"
            },
            {
              "type": "p",
              "en": "Example of confounding: a study finds that people who drink coffee have higher rates of lung cancer. But coffee drinkers may also smoke more, and smoking causes lung cancer. Here smoking is confounded with coffee drinking, so we cannot tell whether coffee, smoking, or both explain the higher cancer rate. A well-designed experiment breaks this tangle by using randomization to make the treatment groups similar in every other respect.",
              "zh": "混杂的例子：一项研究发现喝咖啡的人肺癌发病率更高。但喝咖啡的人也可能吸烟更多，而吸烟会导致肺癌。这里吸烟与喝咖啡发生了混杂，我们无法判断是咖啡、吸烟还是两者共同解释了更高的癌症率。设计良好的实验通过随机化使各处理组在其他所有方面都相似，从而解开这一纠缠。"
            },
            {
              "type": "note",
              "en": "AP tip: You may claim a cause-and-effect conclusion ONLY from a well-designed, randomized, comparative experiment. From an observational study, use association language (\"is associated with,\" \"tends to\"), never \"causes.\" Writing \"causes\" on a rubric that expected association loses points.",
              "zh": "AP 提示：只有依据设计良好的随机化对照实验才能得出因果结论。对于观察性研究，要使用关联性表述（\"与……相关\"\"往往\"），绝不能用\"导致\"。在应写关联的地方写成\"导致\"会在评分中失分。"
            },
            {
              "type": "h3",
              "en": "The Three Principles of Experimental Design",
              "zh": "实验设计的三大原则"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Control: keep other variables the same for all groups (for example, same room, same schedule) and use a comparison group so treatment effects are not confounded with outside variables.",
                  "zh": "控制：让所有组的其他变量保持一致（例如相同的房间、相同的时间安排），并设立对照组，使处理效应不与外部变量发生混杂。"
                },
                {
                  "en": "Randomization: use chance to assign subjects to treatment groups. This balances out both known and unknown lurking variables across groups, so the groups are roughly equivalent before treatment.",
                  "zh": "随机化：用随机方式把受试者分配到各处理组。这能使已知和未知的潜在变量在各组间大致均衡，使各组在施加处理之前大致等价。"
                },
                {
                  "en": "Replication: use enough experimental units in each group so that real differences can be distinguished from chance variation. (Replication also means the experiment can be repeated by others.)",
                  "zh": "重复：每组使用足够多的实验单位，以便把真实差异与随机波动区分开来。（重复也意味着实验能被他人重现。）"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: students say \"replication\" means repeating the whole experiment. In AP experimental design, replication mainly means using MANY experimental units per treatment group, not just a few. A study on 4 people, even if randomized, has too little replication to trust.",
              "zh": "常见错误：学生以为\"重复\"就是把整个实验再做一遍。在 AP 实验设计中，重复主要指每个处理组使用许多实验单位，而不是只有几个。一项只用 4 个人的研究，即使做了随机化，重复也太少而不可信。"
            },
            {
              "type": "h3",
              "en": "The Completely Randomized Design",
              "zh": "完全随机化设计"
            },
            {
              "type": "p",
              "en": "In a completely randomized design, all experimental units are assigned to the treatments purely by chance, with no restrictions. For two treatments you might randomly split the subjects into two groups, give each group one treatment, and compare the responses. This is the baseline design that uses control, randomization, and replication together.",
              "zh": "在完全随机化设计中，所有实验单位完全凭随机分配到各处理，不加任何限制。对于两种处理，可以把受试者随机分成两组，每组施加一种处理，然后比较响应。这是同时运用控制、随机化和重复的基础设计。"
            },
            {
              "type": "h3",
              "en": "Blocking and Matched Pairs",
              "zh": "区组与配对设计"
            },
            {
              "type": "p",
              "en": "A block is a group of experimental units that are known to be similar in a way expected to affect the response. In a randomized block design, we form blocks first, then randomly assign treatments separately within each block. Blocking removes the variation due to that known variable, making it easier to detect the treatment effect. The slogan is \"block what you can, randomize what you cannot.\"",
              "zh": "区组是一组已知在某个可能影响响应的方面相似的实验单位。在随机化区组设计中，先分成区组，再在每个区组内部分别随机分配处理。区组化消除了该已知变量带来的变异，使处理效应更容易被检测到。口诀是\"能区组的就区组，不能区组的就随机化\"。"
            },
            {
              "type": "p",
              "en": "A matched pairs design is a special case of blocking with block size two. Either two similar subjects are paired and one of each pair is randomly assigned to each treatment, or a single subject receives BOTH treatments in a random order and serves as their own control. Comparing within pairs removes person-to-person variation.",
              "zh": "配对设计是区组大小为 2 的特例。要么把两个相似的受试者配成一对，随机把每对中的一个分到某处理；要么让同一个受试者以随机顺序接受两种处理，充当自己的对照。在对内进行比较可消除个体之间的差异。"
            },
            {
              "type": "h3",
              "en": "Blinding and the Placebo Effect",
              "zh": "盲法与安慰剂效应"
            },
            {
              "type": "p",
              "en": "The placebo effect is a response to the mere fact of receiving a treatment, even a fake one (a placebo). To account for it, one group often receives a placebo. In a blind experiment the subjects do not know which treatment they received; in a double-blind experiment neither the subjects nor the people who interact with them and measure the response know who got which treatment. Double-blinding prevents expectations from biasing the results on either side.",
              "zh": "安慰剂效应是指仅仅因为接受了某种处理（即使是假的，即安慰剂）而产生的反应。为处理这一点，常让一组接受安慰剂。在单盲实验中，受试者不知道自己接受的是哪种处理；在双盲实验中，受试者以及与他们接触并测量响应的人都不知道谁接受了哪种处理。双盲能防止双方的预期使结果产生偏差。"
            },
            {
              "type": "note",
              "en": "AP tip: A placebo controls for the psychological effect of being treated; blinding controls for the effect of expectations on how subjects respond or how researchers measure and record. They solve different problems, so name the right one for the situation described.",
              "zh": "AP 提示：安慰剂控制的是\"被处理\"带来的心理效应；盲法控制的是预期对受试者反应或研究者测量记录的影响。两者解决不同的问题，要针对题目情境点出正确的那一个。"
            },
            {
              "type": "h3",
              "en": "Scope of Inference",
              "zh": "推断的适用范围"
            },
            {
              "type": "p",
              "en": "Two separate questions decide what conclusions are allowed. (1) Can you generalize to a larger population? Only if the individuals were selected by random sampling from that population. (2) Can you claim causation? Only if treatments were assigned by random assignment (a randomized experiment).",
              "zh": "有两个独立的问题决定了允许得出什么结论。(1) 能否推广到更大的总体？只有当个体是从该总体中随机抽样选取时才可以。(2) 能否声称因果？只有当处理是通过随机分配施加的（即随机化实验）时才可以。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Random sampling + random assignment: you can generalize to the population AND claim causation. (Strongest conclusions.)",
                  "zh": "随机抽样 + 随机分配：既能推广到总体，又能声称因果。（结论最强。）"
                },
                {
                  "en": "Random assignment only (subjects not randomly sampled): you can claim causation, but only for units like those studied — do not generalize widely.",
                  "zh": "仅随机分配（受试者非随机抽样）：能声称因果，但只对与所研究对象相似的单位成立——不可广泛推广。"
                },
                {
                  "en": "Random sampling only (no random assignment, i.e. observational): you can generalize an association to the population, but cannot claim causation.",
                  "zh": "仅随机抽样（无随机分配，即观察性研究）：能把某种关联推广到总体，但不能声称因果。"
                },
                {
                  "en": "Neither: you can only describe the individuals studied — no generalization and no causation.",
                  "zh": "两者都没有：只能描述所研究的个体——既不能推广也不能声称因果。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Study or Experiment?",
                "zh": "例题 1：观察性研究还是实验？"
              },
              "problem": {
                "en": "Researchers track 500 volunteers, recording who chooses to exercise regularly and later comparing their blood pressure. They find regular exercisers have lower blood pressure. Is this an experiment or an observational study, and can they conclude exercise lowers blood pressure? Explain.",
                "zh": "研究者追踪 500 名志愿者，记录谁选择规律锻炼，随后比较他们的血压。结果发现规律锻炼者血压更低。这是实验还是观察性研究？他们能否断定锻炼会降低血压？请解释。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "It is an observational study: the subjects chose whether to exercise; the researchers did not impose exercise as a treatment.",
                  "zh": "这是观察性研究：受试者自行选择是否锻炼，研究者并未把锻炼作为处理施加给他们。"
                },
                {
                  "type": "p",
                  "en": "Because there was no random assignment, no causal conclusion is allowed. People who choose to exercise may also eat better or weigh less, and those variables are confounded with exercise. We can only say exercise is associated with lower blood pressure.",
                  "zh": "由于没有随机分配，不能得出因果结论。选择锻炼的人可能也吃得更健康或体重更轻，这些变量与锻炼发生了混杂。我们只能说锻炼与更低的血压相关。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Designing the Experiment",
                "zh": "例题 2：设计实验"
              },
              "problem": {
                "en": "A researcher has 100 patients with frequent headaches and wants to test whether a new drug reduces headache frequency more than the current drug. Outline a completely randomized, double-blind design and state why a placebo-style control and double-blinding are used.",
                "zh": "一位研究者有 100 名经常头痛的患者，想检验一种新药是否比现有药物更能减少头痛次数。请概述一个完全随机化的双盲设计，并说明为什么要采用类似安慰剂的对照和双盲。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Randomly assign the 100 patients to two groups of 50 (for example, number them 1-100 and use a random number generator to pick 50 for group A; the rest are group B). Group A takes the new drug, group B takes the current drug; the pills look identical.",
                  "zh": "把 100 名患者随机分成两组，每组 50 人（例如编号 1-100，用随机数生成器选出 50 人为 A 组，其余为 B 组）。A 组服用新药，B 组服用现有药物；两种药片外观完全相同。"
                },
                {
                  "type": "p",
                  "en": "After a fixed period, compare the mean number of headaches per group. Random assignment balances lurking variables so any difference can be attributed to the drug (control, randomization, and replication with 50 per group are all satisfied).",
                  "zh": "经过固定的一段时间后，比较两组每人的平均头痛次数。随机分配使潜在变量均衡，因此任何差异都可归因于药物（每组 50 人满足了控制、随机化与重复三项原则）。"
                },
                {
                  "type": "p",
                  "en": "Double-blinding (neither patients nor the doctors recording headaches know who got which drug) prevents expectations from influencing how patients feel or how symptoms are recorded, so the comparison reflects the drugs themselves.",
                  "zh": "双盲（患者和记录头痛的医生都不知道谁服用了哪种药）能防止预期影响患者的感受或症状的记录方式，使比较反映的是药物本身。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which feature of a study is REQUIRED before you may draw a cause-and-effect conclusion?",
                "zh": "在得出因果结论之前，研究必须具备下列哪一项特征？"
              },
              "choices": [
                "A very large sample size / 很大的样本量",
                "Random selection of subjects from a population / 从总体中随机选取受试者",
                "Random assignment of subjects to treatments / 把受试者随机分配到各处理",
                "A voluntary response sample / 自愿应答样本"
              ],
              "answer": 2,
              "explanation": {
                "en": "Causation requires random assignment to treatments, which balances confounding variables across groups. Random selection lets you generalize but does not by itself justify causation, and a large sample cannot fix confounding.",
                "zh": "因果结论需要把受试者随机分配到各处理，从而使混杂变量在各组间均衡。随机选取只能让你推广，本身并不能证明因果，而大样本也无法消除混杂。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A study reports that towns with more fire trucks at a fire tend to have more fire damage. The most likely explanation is that…",
                "zh": "一项研究报告，火灾现场出动的消防车越多的城镇，火灾损失往往越大。最可能的解释是……"
              },
              "choices": [
                "fire trucks cause additional damage / 消防车造成了额外损失",
                "the size of the fire is a confounding variable / 火灾规模是一个混杂变量",
                "this proves reducing fire trucks reduces damage / 这证明减少消防车能减少损失",
                "the study used random assignment / 该研究使用了随机分配"
              ],
              "answer": 1,
              "explanation": {
                "en": "Bigger fires bring both more trucks and more damage, so fire size is associated with both variables and confounds them. The observed association is not evidence that trucks cause damage.",
                "zh": "更大的火灾既招来更多消防车，也造成更大损失，因此火灾规模同时与两个变量相关，构成混杂。观察到的关联并不能说明消防车导致了损失。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a drug trial, neither the patients nor the nurses recording symptoms know who received the real drug versus the placebo. This describes…",
                "zh": "在一次药物试验中，患者和记录症状的护士都不知道谁接受了真药、谁接受了安慰剂。这属于……"
              },
              "choices": [
                "blocking / 区组化",
                "a matched pairs design / 配对设计",
                "replication / 重复",
                "a double-blind experiment / 双盲实验"
              ],
              "answer": 3,
              "explanation": {
                "en": "When both the subjects AND the people who interact with them and measure the response are kept unaware of the assignments, the experiment is double-blind. If only the patients were unaware, it would be single-blind.",
                "zh": "当受试者以及与他们接触并测量响应的人都不知道分组时，实验就是双盲的。如果只有患者不知道，则是单盲。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An experiment randomly assigns treatments, but its subjects are 60 volunteers who answered a campus flyer. What is the correct scope of inference?",
                "zh": "一项实验随机分配了处理，但受试者是 60 名应征校园传单的志愿者。正确的推断范围是什么？"
              },
              "choices": [
                "Can claim causation, but should not generalize broadly beyond similar volunteers. / 可以声称因果，但不应广泛推广到相似志愿者之外。",
                "Can generalize to all students but cannot claim causation. / 可以推广到全体学生但不能声称因果。",
                "Can both generalize to all students and claim causation. / 既能推广到全体学生又能声称因果。",
                "Can neither generalize nor claim causation. / 既不能推广也不能声称因果。"
              ],
              "answer": 0,
              "explanation": {
                "en": "Random assignment justifies a causal claim, so causation is allowed. But the subjects were volunteers, not a random sample, so results should not be generalized beyond people like these volunteers.",
                "zh": "随机分配支持因果结论，所以可以声称因果。但受试者是志愿者而非随机样本，因此结果不应推广到这些志愿者之外的人群。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A farmer suspects that soil moisture, which differs between a hillside and a valley field, will affect crop yield. To keep this from obscuring the effect of two fertilizers, she should…",
                "zh": "一位农民怀疑山坡地和谷地之间不同的土壤湿度会影响作物产量。为了不让它掩盖两种肥料的效应，她应该……"
              },
              "choices": [
                "use a larger sample of plants / 使用更多的作物样本",
                "block by field location and randomize fertilizers within each field / 按地块位置分区组，并在每个地块内随机分配肥料",
                "give the hillside one fertilizer and the valley the other / 给山坡用一种肥料、谷地用另一种",
                "use a voluntary response sample of plots / 对地块采用自愿应答抽样"
              ],
              "answer": 1,
              "explanation": {
                "en": "Soil moisture is a known source of variation tied to location, so making location a blocking variable and randomizing fertilizers within each block removes that variation. Assigning one fertilizer per field would confound fertilizer with location.",
                "zh": "土壤湿度是与位置相关的已知变异来源，因此把位置作为区组变量并在每个区组内随机分配肥料可消除该变异。给每块地固定一种肥料会使肥料与位置发生混杂。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Fill in the blank: A variable that is associated with both the explanatory and the response variable, so that its effect cannot be separated, is called a ________ variable. (one word)",
                "zh": "填空：一个同时与解释变量和响应变量都相关、以致其影响无法被分离出来的变量，称为________变量。（一个词）"
              },
              "answer": "confounding",
              "accept": [
                "confounding",
                "confounder",
                "a confounding",
                "lurking/confounding",
                "混杂",
                "混杂变量"
              ],
              "explanation": {
                "en": "This is a confounding variable. Its presence is exactly why observational studies cannot establish causation.",
                "zh": "这就是混杂变量。它的存在正是观察性研究无法确立因果的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An experiment gives one group a pill with no active ingredient so that the psychological effect of being treated is accounted for. What is this inactive pill called? (one word)",
                "zh": "一项实验给一组服用不含有效成分的药片，以便控制\"被处理\"带来的心理效应。这种无效药片叫什么？（一个词）"
              },
              "answer": "placebo",
              "accept": [
                "placebo",
                "a placebo",
                "placebos",
                "安慰剂"
              ],
              "explanation": {
                "en": "It is a placebo. Any improvement in the placebo group reflects the placebo effect, giving a fair baseline to compare the real treatment against.",
                "zh": "这是安慰剂。安慰剂组出现的任何改善都反映了安慰剂效应，为与真正处理的比较提供了公平的基线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Name the principle of experimental design that is satisfied by using many experimental units in each treatment group so real effects can be told apart from chance. (one word)",
                "zh": "在每个处理组中使用许多实验单位、从而把真实效应与随机波动区分开来，满足的是实验设计的哪一条原则？（一个词）"
              },
              "answer": "replication",
              "accept": [
                "replication",
                "replicate",
                "replication.",
                "重复",
                "重复原则"
              ],
              "explanation": {
                "en": "This is replication: enough units per group to distinguish a true treatment effect from ordinary chance variation. Control and randomization are the other two principles.",
                "zh": "这是重复原则：每组有足够的单位，以便把真实的处理效应与普通的随机波动区分开来。控制和随机化是另外两条原则。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "probability-random-variables",
      "title": "Unit 4: Probability, Random Variables, and Probability Distributions",
      "titleZh": "第四单元：概率、随机变量与概率分布",
      "lessons": [
        {
          "id": "probability-rules",
          "title": "Probability Rules",
          "titleZh": "概率法则",
          "content": [
            {
              "type": "h2",
              "en": "Probability and the Law of Large Numbers",
              "zh": "概率与大数定律"
            },
            {
              "type": "p",
              "en": "The probability of an event is a number between 0 and 1 that measures how likely the event is to occur. An impossible event has probability 0, a certain event has probability 1, and the probabilities of all outcomes in a sample space add to exactly 1. We interpret probability as a long-run relative frequency: if you could repeat a random process many, many times, the proportion of times an event happens settles down toward its probability.",
              "zh": "一个事件的概率是介于 0 和 1 之间的数，用来衡量该事件发生的可能性。不可能事件的概率为 0，必然事件的概率为 1，样本空间中所有结果的概率之和恰好为 1。我们把概率理解为长期相对频率：如果能把一个随机过程重复很多很多次，某事件发生的比例会逐渐趋近于它的概率。"
            },
            {
              "type": "p",
              "en": "This idea is the Law of Large Numbers: as the number of trials increases, the observed proportion of successes approaches the true probability. Flip a fair coin 10 times and you might see 7 heads (70%); flip it 10,000 times and the proportion of heads will be very close to 0.5.",
              "zh": "这个思想就是大数定律：随着试验次数增加，观测到的成功比例会趋近于真实概率。抛一枚均匀硬币 10 次，你可能得到 7 次正面（70%）；抛 10,000 次，正面的比例会非常接近 0.5。"
            },
            {
              "type": "note",
              "en": "Common mistake (the gambler's fallacy): the Law of Large Numbers does NOT say the counts even out or that a coin is 'due' for heads after a streak of tails. Each flip is independent — past results never change the next probability. Only the long-run PROPORTION converges, not the difference in counts.",
              "zh": "常见错误（赌徒谬误）：大数定律并不是说次数会'扯平'，也不是说连续多次反面后就'该'出正面了。每次抛掷都是独立的——过去的结果永远不会改变下一次的概率。收敛的是长期的比例，而不是正反面次数之差。"
            },
            {
              "type": "h3",
              "en": "The Complement Rule",
              "zh": "补集法则"
            },
            {
              "type": "p",
              "en": "The complement of an event $A$, written $A^c$, is the event that $A$ does NOT happen. Because $A$ and $A^c$ together cover the whole sample space, their probabilities add to 1.",
              "zh": "事件 $A$ 的补集记作 $A^c$，表示 $A$ 不发生这一事件。由于 $A$ 与 $A^c$ 合在一起覆盖整个样本空间，它们的概率之和为 1。"
            },
            {
              "type": "math",
              "tex": "P(A^c) = 1 - P(A)"
            },
            {
              "type": "p",
              "en": "The complement rule is powerful for 'at least one' problems, where computing the complement ('none') is far easier than adding up every case directly.",
              "zh": "补集法则在处理'至少一个'的问题时非常有用，因为计算它的补集（'一个都没有'）通常比直接把每种情况相加要简单得多。"
            },
            {
              "type": "h3",
              "en": "The General Addition Rule",
              "zh": "一般加法法则"
            },
            {
              "type": "p",
              "en": "To find the probability that event $A$ OR event $B$ occurs (meaning at least one of them), we add their probabilities but subtract the overlap so it is not counted twice.",
              "zh": "要求事件 $A$ 或事件 $B$ 发生（即至少发生其中一个）的概率，我们把两者的概率相加，再减去它们的重叠部分，以免重复计算。"
            },
            {
              "type": "math",
              "tex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
            },
            {
              "type": "p",
              "en": "Two events are mutually exclusive (disjoint) if they cannot both happen at the same time, so $P(A \\cap B) = 0$. For mutually exclusive events the rule simplifies to $P(A \\cup B) = P(A) + P(B)$.",
              "zh": "如果两个事件不能同时发生，则称它们互斥（不相交），此时 $P(A \\cap B) = 0$。对于互斥事件，法则简化为 $P(A \\cup B) = P(A) + P(B)$。"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting to subtract $P(A \\cap B)$. Only skip that step when the events are truly mutually exclusive. If someone can be both, say, a senior AND a band member, those events overlap and you must subtract the intersection.",
              "zh": "常见错误：忘记减去 $P(A \\cap B)$。只有当事件真正互斥时才能省略这一步。如果一个人既可以是高年级学生又可以是乐队成员，这两个事件就有重叠，你必须减去交集。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Two-Way Table",
                "zh": "例题 1：双向表"
              },
              "problem": {
                "en": "A survey of 100 households records pet ownership. Dog and cat: 15; dog but no cat: 25; cat but no dog: 20; neither: 40. Find $P(\\text{dog})$, $P(\\text{dog or cat})$, and $P(\\text{dog}^c)$.",
                "zh": "对 100 户家庭的养宠调查记录如下：既养狗又养猫：15；养狗不养猫：25；养猫不养狗：20；两者都不养：40。求 $P(\\text{狗})$、$P(\\text{狗或猫})$ 和 $P(\\text{狗}^c)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The dog total is $15 + 25 = 40$, so $P(\\text{dog}) = 40/100 = 0.40$. The cat total is $15 + 20 = 35$, so $P(\\text{cat}) = 0.35$, and $P(\\text{dog and cat}) = 15/100 = 0.15$.",
                  "zh": "养狗总数为 $15 + 25 = 40$，所以 $P(\\text{狗}) = 40/100 = 0.40$。养猫总数为 $15 + 20 = 35$，所以 $P(\\text{猫}) = 0.35$，且 $P(\\text{狗且猫}) = 15/100 = 0.15$。"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{dog or cat}) = 0.40 + 0.35 - 0.15 = 0.60"
                },
                {
                  "type": "p",
                  "en": "By the complement rule, $P(\\text{dog}^c) = 1 - 0.40 = 0.60$. Note this also equals cat-only plus neither: $0.20 + 0.40 = 0.60$.",
                  "zh": "由补集法则，$P(\\text{狗}^c) = 1 - 0.40 = 0.60$。注意这也等于'只养猫'加'都不养'：$0.20 + 0.40 = 0.60$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Conditional Probability",
              "zh": "条件概率"
            },
            {
              "type": "p",
              "en": "Conditional probability $P(A \\mid B)$ is the probability of $A$ GIVEN that $B$ has already occurred. Knowing $B$ happened restricts us to the part of the sample space where $B$ is true, so we divide by $P(B)$.",
              "zh": "条件概率 $P(A \\mid B)$ 是在 $B$ 已经发生的条件下 $A$ 发生的概率。已知 $B$ 发生后，我们只在 $B$ 成立的那部分样本空间里考虑，因此要除以 $P(B)$。"
            },
            {
              "type": "math",
              "tex": "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}"
            },
            {
              "type": "note",
              "en": "AP tip: read the wording carefully. 'The probability a student takes AP Stats given they are a senior' is $P(\\text{stats} \\mid \\text{senior})$, whose denominator is only the seniors. This is usually NOT the same as $P(\\text{senior} \\mid \\text{stats})$ — order matters in conditional probability.",
              "zh": "AP 提示：仔细读题。'已知某学生是高年级生，他选修 AP 统计的概率'是 $P(\\text{统计} \\mid \\text{高年级})$，其分母只包含高年级学生。这通常与 $P(\\text{高年级} \\mid \\text{统计})$ 不同——条件概率中顺序很重要。"
            },
            {
              "type": "h3",
              "en": "The Multiplication Rule and Independence",
              "zh": "乘法法则与独立性"
            },
            {
              "type": "p",
              "en": "Rearranging the conditional formula gives the general multiplication rule for the probability that both events occur.",
              "zh": "把条件概率公式变形，就得到求两个事件同时发生的一般乘法法则。"
            },
            {
              "type": "math",
              "tex": "P(A \\cap B) = P(A) \\cdot P(B \\mid A)"
            },
            {
              "type": "p",
              "en": "Two events are independent if knowing one occurred does not change the probability of the other. When $A$ and $B$ are independent, $P(B \\mid A) = P(B)$, and the multiplication rule simplifies.",
              "zh": "如果知道一个事件是否发生并不改变另一个事件的概率，则称这两个事件独立。当 $A$ 与 $B$ 独立时，$P(B \\mid A) = P(B)$，乘法法则得以简化。"
            },
            {
              "type": "math",
              "tex": "\\text{Independent} \\iff P(A \\cap B) = P(A)\\cdot P(B)"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "To TEST independence, check whether $P(A \\mid B) = P(A)$, or equivalently whether $P(A \\cap B) = P(A)\\cdot P(B)$. If the two sides are equal, the events are independent; if not, they are dependent (associated).",
                  "zh": "要检验独立性，看是否 $P(A \\mid B) = P(A)$，或等价地看是否 $P(A \\cap B) = P(A)\\cdot P(B)$。若两边相等则独立；若不相等则不独立（相关）。"
                },
                {
                  "en": "Mutually exclusive is NOT the same as independent. Disjoint events with positive probability are always dependent: if $A$ happens, then $B$ definitely did not, so $P(B \\mid A) = 0 \\ne P(B)$.",
                  "zh": "互斥不等于独立。两个概率为正的互斥事件一定是相关的：若 $A$ 发生，则 $B$ 一定没发生，所以 $P(B \\mid A) = 0 \\ne P(B)$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: treating 'mutually exclusive' and 'independent' as synonyms. They are almost opposites. Mutually exclusive means the events overlap in NO outcomes; independent means one event carries NO information about the other. Two events with positive probability cannot be both.",
              "zh": "常见错误：把'互斥'和'独立'当作同义词。它们几乎是相反的。互斥指两事件没有任何共同结果；独立指一个事件不提供关于另一个的任何信息。两个概率为正的事件不可能既互斥又独立。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Conditional Probability and Independence",
                "zh": "例题 2：条件概率与独立性"
              },
              "problem": {
                "en": "Using the pet data from Example 1 ($P(\\text{dog})=0.40$, $P(\\text{cat})=0.35$, $P(\\text{dog}\\cap\\text{cat})=0.15$), find $P(\\text{dog} \\mid \\text{cat})$ and decide whether owning a dog and owning a cat are independent.",
                "zh": "利用例题 1 的养宠数据（$P(\\text{狗})=0.40$，$P(\\text{猫})=0.35$，$P(\\text{狗}\\cap\\text{猫})=0.15$），求 $P(\\text{狗} \\mid \\text{猫})$ 并判断养狗和养猫是否独立。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "P(\\text{dog} \\mid \\text{cat}) = \\frac{P(\\text{dog}\\cap\\text{cat})}{P(\\text{cat})} = \\frac{0.15}{0.35} \\approx 0.429"
                },
                {
                  "type": "p",
                  "en": "Compare to the unconditional $P(\\text{dog}) = 0.40$. Since $0.429 \\ne 0.40$, knowing a household owns a cat changes the probability it owns a dog, so the two events are NOT independent — they are associated.",
                  "zh": "与无条件概率 $P(\\text{狗}) = 0.40$ 比较。因为 $0.429 \\ne 0.40$，已知一户养猫会改变它养狗的概率，所以这两个事件不独立——它们是相关的。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Tree Diagram",
                "zh": "例题 3：树状图"
              },
              "problem": {
                "en": "A factory uses two machines. Machine A makes 60% of parts and 3% of its parts are defective; Machine B makes 40% and 5% are defective. A part is chosen at random. Find the probability it is defective.",
                "zh": "某工厂使用两台机器。机器 A 生产 60% 的零件，其中 3% 有缺陷；机器 B 生产 40%，其中 5% 有缺陷。随机取一个零件，求它有缺陷的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A tree diagram has a first stage (which machine) and a second stage (defective or not). Multiply along each branch, then add the two paths that end in 'defective'.",
                  "zh": "树状图第一层是（哪台机器），第二层是（是否有缺陷）。沿每条分支相乘，再把两条以'有缺陷'结尾的路径相加。"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{def}) = (0.60)(0.03) + (0.40)(0.05) = 0.018 + 0.020 = 0.038"
                },
                {
                  "type": "p",
                  "en": "So about 3.8% of all parts are defective. This 'multiply along branches, add across paths' method is the multiplication and addition rules working together.",
                  "zh": "因此所有零件中约 3.8% 有缺陷。这种'沿分支相乘、跨路径相加'的方法正是乘法法则与加法法则的联合运用。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $P(A) = 0.7$, what is $P(A^c)$?",
                "zh": "若 $P(A) = 0.7$，则 $P(A^c)$ 等于多少？"
              },
              "choices": [
                "0.7",
                "0.3",
                "1.7",
                "0"
              ],
              "answer": 1,
              "explanation": {
                "en": "The complement rule gives $P(A^c) = 1 - P(A) = 1 - 0.7 = 0.3$. Leaving the answer at 0.7 ignores that the complement is what remains after removing $A$ from probability 1.",
                "zh": "补集法则给出 $P(A^c) = 1 - P(A) = 1 - 0.7 = 0.3$。若答成 0.7，则忽略了补集是从总概率 1 中去掉 $A$ 后剩下的部分。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Events $A$ and $B$ are mutually exclusive with $P(A)>0$ and $P(B)>0$. Which statement must be true?",
                "zh": "事件 $A$ 与 $B$ 互斥，且 $P(A)>0$、$P(B)>0$。下列哪项一定成立？"
              },
              "choices": [
                "They are also independent.",
                "$P(A \\cap B) = P(A)P(B)$",
                "$P(A \\cap B) = 0$, and they are dependent.",
                "$P(A \\cup B) = P(A)P(B)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Mutually exclusive means the events cannot both occur, so their intersection has probability 0. Because one occurring forces the other not to occur, they are dependent, not independent. Independence would require $P(A \\cap B) = P(A)P(B)$, which is positive here.",
                "zh": "互斥表示两事件不能同时发生，故交集概率为 0。由于一个发生就迫使另一个不发生，它们是相关的而非独立的。独立需要 $P(A \\cap B) = P(A)P(B)$，而这里该值为正。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$P(A) = 0.5$, $P(B) = 0.4$, and $P(A \\cap B) = 0.2$. Find $P(A \\cup B)$. (Enter a decimal.)",
                "zh": "$P(A) = 0.5$，$P(B) = 0.4$，$P(A \\cap B) = 0.2$。求 $P(A \\cup B)$。（输入小数。）"
              },
              "answer": "0.7",
              "accept": [
                "0.7",
                ".7",
                "0.70",
                "7/10"
              ],
              "explanation": {
                "en": "Use the general addition rule: $P(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.7$. Adding without subtracting the overlap would double-count the $0.2$ and wrongly give 0.9.",
                "zh": "用一般加法法则：$P(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.7$。若相加时不减去重叠部分，会把 $0.2$ 重复计算，错得 0.9。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a class, $P(\\text{plays sport}) = 0.5$ and $P(\\text{plays sport and has a job}) = 0.2$. What is $P(\\text{has a job} \\mid \\text{plays sport})$?",
                "zh": "某班中 $P(\\text{参加运动}) = 0.5$，$P(\\text{参加运动且有工作}) = 0.2$。求 $P(\\text{有工作} \\mid \\text{参加运动})$。"
              },
              "choices": [
                "0.4",
                "0.1",
                "0.2",
                "0.7"
              ],
              "answer": 0,
              "explanation": {
                "en": "Condition on 'plays sport', so divide the joint probability by $P(\\text{plays sport})$: $0.2 / 0.5 = 0.4$. Using the joint 0.2 directly ignores that we are restricting to sport-players only.",
                "zh": "以'参加运动'为条件，就用联合概率除以 $P(\\text{参加运动})$：$0.2 / 0.5 = 0.4$。直接用联合概率 0.2 忽略了我们只在参加运动的人中考虑这一点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A machine works correctly on each independent cycle with probability 0.9. Find the probability it works correctly on 3 cycles in a row. (Round to 3 decimals.)",
                "zh": "某机器每个循环独立正常运行的概率为 0.9。求它连续 3 个循环都正常运行的概率。（保留 3 位小数。）"
              },
              "answer": "0.729",
              "accept": [
                "0.729",
                ".729"
              ],
              "explanation": {
                "en": "For independent events, multiply: $0.9 \\times 0.9 \\times 0.9 = 0.9^3 = 0.729$. Adding the probabilities instead would exceed 1 and misuse the multiplication rule.",
                "zh": "对独立事件相乘：$0.9 \\times 0.9 \\times 0.9 = 0.9^3 = 0.729$。若改为相加会超过 1，是对乘法法则的误用。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A fair coin has landed heads 5 times in a row. What is the probability the next flip is heads?",
                "zh": "一枚均匀硬币已经连续出现 5 次正面。下一次抛出正面的概率是多少？"
              },
              "choices": [
                "Less than 0.5, because tails is 'due'.",
                "More than 0.5, because heads is on a streak.",
                "0.5, because flips are independent.",
                "It cannot be determined."
              ],
              "answer": 2,
              "explanation": {
                "en": "Coin flips are independent, so past outcomes do not affect the next flip; the probability stays 0.5. Believing tails is 'due' after a streak is the gambler's fallacy — the Law of Large Numbers governs long-run proportions, not short-run corrections.",
                "zh": "抛硬币是独立的，过去的结果不影响下一次，概率仍为 0.5。认为连续多次后就'该'出反面属于赌徒谬误——大数定律管的是长期比例，而不是短期的'纠正'。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "From a two-way table: 30 students take band, and of those 12 also take chorus. Find $P(\\text{chorus} \\mid \\text{band})$. (Round to 2 decimals.)",
                "zh": "由一张双向表：30 名学生参加乐队，其中 12 名也参加合唱。求 $P(\\text{合唱} \\mid \\text{乐队})$。（保留 2 位小数。）"
              },
              "answer": "0.40",
              "accept": [
                "0.40",
                "0.4",
                ".4",
                ".40",
                "2/5"
              ],
              "explanation": {
                "en": "Given band membership, the denominator is only the 30 band students: $12/30 = 0.40$. Dividing by the whole school total instead would answer a different question.",
                "zh": "以参加乐队为条件，分母只取 30 名乐队学生：$12/30 = 0.40$。若改用全校人数作分母，回答的就是另一个问题了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$P(A) = 0.4$, $P(B) = 0.5$, $P(A \\cap B) = 0.2$. Are $A$ and $B$ independent?",
                "zh": "$P(A) = 0.4$，$P(B) = 0.5$，$P(A \\cap B) = 0.2$。$A$ 与 $B$ 独立吗？"
              },
              "choices": [
                "No, because $P(A \\cap B) \\ne 0$.",
                "No, because $P(A) \\ne P(B)$.",
                "Cannot tell without more data.",
                "Yes, because $P(A)P(B) = 0.2 = P(A \\cap B)$."
              ],
              "answer": 3,
              "explanation": {
                "en": "Test independence by comparing $P(A)P(B) = 0.4 \\times 0.5 = 0.2$ to $P(A \\cap B) = 0.2$. They match, so the events are independent. A nonzero intersection does not rule out independence — that would confuse independence with being mutually exclusive.",
                "zh": "检验独立性时比较 $P(A)P(B) = 0.4 \\times 0.5 = 0.2$ 与 $P(A \\cap B) = 0.2$。两者相等，故事件独立。交集不为零并不排斥独立——那是把独立与互斥混淆了。"
              }
            }
          ]
        },
        {
          "id": "random-variables-and-distributions",
          "title": "Random Variables and Probability Distributions",
          "titleZh": "随机变量与概率分布",
          "content": [
            {
              "type": "h2",
              "en": "Discrete Random Variables",
              "zh": "离散型随机变量"
            },
            {
              "type": "p",
              "en": "A random variable assigns a number to each outcome of a random process. A discrete random variable $X$ takes a countable list of possible values (like $0, 1, 2, 3, \\dots$). Its probability distribution lists each value together with its probability.",
              "zh": "随机变量给随机过程的每个结果赋一个数值。离散型随机变量 $X$ 取一列可数的可能取值（如 $0, 1, 2, 3, \\dots$）。它的概率分布把每个取值和对应的概率一一列出。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Every probability must satisfy $0 \\le P(x) \\le 1$.",
                  "zh": "每个概率必须满足 $0 \\le P(x) \\le 1$。"
                },
                {
                  "en": "The probabilities of all possible values must sum to exactly 1: $\\sum P(x) = 1$.",
                  "zh": "所有可能取值的概率之和必须恰好等于 1：$\\sum P(x) = 1$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Mean (Expected Value)",
              "zh": "均值（期望值）"
            },
            {
              "type": "p",
              "en": "The mean of a discrete random variable, also called its expected value $\\mu_X = E(X)$, is the long-run average value over many repetitions. Compute it as a weighted average: multiply each value by its probability and add.",
              "zh": "离散型随机变量的均值，也称为期望值 $\\mu_X = E(X)$，是多次重复后的长期平均值。它是一个加权平均：把每个取值乘以其概率再相加。"
            },
            {
              "type": "math",
              "tex": "\\mu_X = E(X) = \\sum x_i \\, P(x_i)"
            },
            {
              "type": "note",
              "en": "Common mistake: the expected value is NOT necessarily a value $X$ can take. A die's expected value is 3.5, which never appears on a face. Expected value is a long-run average, not a prediction of any single outcome.",
              "zh": "常见错误：期望值不一定是 $X$ 能取到的值。一颗骰子的期望值是 3.5，而骰子上根本没有 3.5 这一面。期望值是长期平均，而不是对任何单次结果的预测。"
            },
            {
              "type": "h3",
              "en": "Standard Deviation",
              "zh": "标准差"
            },
            {
              "type": "p",
              "en": "The variance $\\sigma_X^2$ measures spread: the average squared distance from the mean, weighted by probability. The standard deviation $\\sigma_X$ is its square root and is in the original units.",
              "zh": "方差 $\\sigma_X^2$ 衡量离散程度：按概率加权的、到均值的平方距离的平均值。标准差 $\\sigma_X$ 是方差的算术平方根，与原始数据同单位。"
            },
            {
              "type": "math",
              "tex": "\\sigma_X^2 = \\sum (x_i - \\mu_X)^2 \\, P(x_i), \\qquad \\sigma_X = \\sqrt{\\sigma_X^2}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Mean and SD of a Discrete Variable",
                "zh": "例题 1：离散变量的均值与标准差"
              },
              "problem": {
                "en": "Let $X$ = number of cars owned by a household, with $P(0)=0.1$, $P(1)=0.3$, $P(2)=0.4$, $P(3)=0.2$. Find $\\mu_X$ and $\\sigma_X$.",
                "zh": "设 $X$ = 一户拥有的汽车数量，$P(0)=0.1$、$P(1)=0.3$、$P(2)=0.4$、$P(3)=0.2$。求 $\\mu_X$ 与 $\\sigma_X$。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\mu_X = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7"
                },
                {
                  "type": "p",
                  "en": "For the variance, square each deviation from 1.7 and weight by probability:",
                  "zh": "求方差时，把每个取值到 1.7 的偏差平方，再按概率加权："
                },
                {
                  "type": "math",
                  "tex": "\\sigma_X^2 = (0-1.7)^2(0.1) + (1-1.7)^2(0.3) + (2-1.7)^2(0.4) + (3-1.7)^2(0.2) = 0.81"
                },
                {
                  "type": "p",
                  "en": "So $\\sigma_X = \\sqrt{0.81} = 0.9$ cars. On average a household owns 1.7 cars, typically varying by about 0.9 car from that mean.",
                  "zh": "所以 $\\sigma_X = \\sqrt{0.81} = 0.9$ 辆。平均每户拥有 1.7 辆车，通常与该均值相差约 0.9 辆。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Transforming and Combining Random Variables",
              "zh": "随机变量的变换与组合"
            },
            {
              "type": "p",
              "en": "If you multiply a random variable by a constant $b$ and add a constant $a$ (a linear transformation $Y = a + bX$), the mean shifts and scales, but the standard deviation only scales — adding a constant never changes spread.",
              "zh": "若把随机变量乘以常数 $b$ 再加上常数 $a$（线性变换 $Y = a + bX$），均值会平移并伸缩，但标准差只伸缩——加一个常数永远不改变离散程度。"
            },
            {
              "type": "math",
              "tex": "\\mu_{a+bX} = a + b\\,\\mu_X, \\qquad \\sigma_{a+bX} = |b|\\,\\sigma_X"
            },
            {
              "type": "p",
              "en": "When you combine two random variables, means always add or subtract as expected. For the spread, you work with VARIANCES: if $X$ and $Y$ are independent, variances ADD for both the sum and the difference.",
              "zh": "组合两个随机变量时，均值总是按预期相加或相减。而对于离散程度，要用方差运算：若 $X$ 与 $Y$ 独立，则无论求和还是求差，方差都相加。"
            },
            {
              "type": "math",
              "tex": "\\mu_{X \\pm Y} = \\mu_X \\pm \\mu_Y, \\qquad \\sigma_{X \\pm Y}^2 = \\sigma_X^2 + \\sigma_Y^2 \\;\\;(\\text{if independent})"
            },
            {
              "type": "note",
              "en": "Common mistake: never add standard deviations directly, and never subtract variances. For $X - Y$ the variances still ADD ($\\sigma_X^2 + \\sigma_Y^2$). Add the variances, then take the square root at the end to get the standard deviation.",
              "zh": "常见错误：绝不要直接把标准差相加，也绝不要把方差相减。对于 $X - Y$，方差仍然相加（$\\sigma_X^2 + \\sigma_Y^2$）。先把方差相加，最后再开平方得到标准差。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Combining Independent Variables",
                "zh": "例题 2：组合独立变量"
              },
              "problem": {
                "en": "Independent variables $X$ and $Y$ have $\\mu_X = 10$, $\\sigma_X = 3$, $\\mu_Y = 5$, $\\sigma_Y = 4$. Find the mean and standard deviation of $X - Y$.",
                "zh": "独立变量 $X$ 与 $Y$ 满足 $\\mu_X = 10$、$\\sigma_X = 3$、$\\mu_Y = 5$、$\\sigma_Y = 4$。求 $X - Y$ 的均值与标准差。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The mean subtracts: $\\mu_{X-Y} = 10 - 5 = 5$. The variances add even for a difference:",
                  "zh": "均值相减：$\\mu_{X-Y} = 10 - 5 = 5$。即使是求差，方差也相加："
                },
                {
                  "type": "math",
                  "tex": "\\sigma_{X-Y}^2 = 3^2 + 4^2 = 9 + 16 = 25 \\;\\Rightarrow\\; \\sigma_{X-Y} = \\sqrt{25} = 5"
                },
                {
                  "type": "p",
                  "en": "If you had wrongly subtracted variances you would get $9 - 16 = -7$, an impossible negative variance — a clear signal that variances add.",
                  "zh": "如果错误地把方差相减，会得到 $9 - 16 = -7$，即不可能存在的负方差——这清楚地提示方差应当相加。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Binomial Distribution",
              "zh": "二项分布"
            },
            {
              "type": "p",
              "en": "A binomial setting counts the number of successes in a fixed number of trials. Check the BINS conditions:",
              "zh": "二项情形统计固定次数试验中的成功次数。检验 BINS 四个条件："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Binary: each trial is a success or a failure.",
                  "zh": "二元（Binary）：每次试验只有成功或失败。"
                },
                {
                  "en": "Independent: trials do not affect one another.",
                  "zh": "独立（Independent）：各次试验互不影响。"
                },
                {
                  "en": "Number: the number of trials $n$ is fixed in advance.",
                  "zh": "次数（Number）：试验次数 $n$ 事先固定。"
                },
                {
                  "en": "Same probability: the success probability $p$ is the same on every trial.",
                  "zh": "同概率（Same）：每次试验成功概率 $p$ 相同。"
                }
              ]
            },
            {
              "type": "math",
              "tex": "P(X=k) = \\binom{n}{k} p^k (1-p)^{\\,n-k}, \\quad \\mu_X = np, \\quad \\sigma_X = \\sqrt{np(1-p)}"
            },
            {
              "type": "h3",
              "en": "The Geometric Distribution",
              "zh": "几何分布"
            },
            {
              "type": "p",
              "en": "A geometric setting has the same conditions as binomial EXCEPT the number of trials is not fixed. Instead $X$ counts the number of trials needed to get the FIRST success. To have the first success on trial $k$, the first $k-1$ trials must be failures.",
              "zh": "几何情形的条件与二项情形相同，唯一不同是试验次数不固定。这里 $X$ 统计得到第一次成功所需的试验次数。要在第 $k$ 次首次成功，前 $k-1$ 次必须都失败。"
            },
            {
              "type": "math",
              "tex": "P(X=k) = (1-p)^{\\,k-1}\\,p, \\qquad \\mu_X = \\frac{1}{p}"
            },
            {
              "type": "note",
              "en": "AP tip: choose the model by what is FIXED. If the number of trials is fixed and you count successes, it is binomial. If you keep going until the first success (so the count of trials is the variable), it is geometric.",
              "zh": "AP 提示：根据什么是固定的来选模型。若试验次数固定而统计成功次数，就是二项分布；若一直进行直到第一次成功（此时试验次数才是变量），就是几何分布。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Binomial Mean and SD",
                "zh": "例题 3：二项分布的均值与标准差"
              },
              "problem": {
                "en": "A free-throw shooter makes each shot independently with probability $p = 0.3$ and takes $n = 10$ shots. Let $X$ = number made. Find $\\mu_X$, $\\sigma_X$, and $P(X = 2)$.",
                "zh": "一名罚球手每次投篮独立命中的概率为 $p = 0.3$，共投 $n = 10$ 次。设 $X$ = 命中次数。求 $\\mu_X$、$\\sigma_X$ 和 $P(X = 2)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The four BINS conditions hold, so $X$ is binomial with $n=10$, $p=0.3$.",
                  "zh": "BINS 四个条件都满足，所以 $X$ 服从 $n=10$、$p=0.3$ 的二项分布。"
                },
                {
                  "type": "math",
                  "tex": "\\mu_X = np = 10(0.3) = 3, \\qquad \\sigma_X = \\sqrt{10(0.3)(0.7)} = \\sqrt{2.1} \\approx 1.449"
                },
                {
                  "type": "math",
                  "tex": "P(X=2) = \\binom{10}{2}(0.3)^2(0.7)^8 = 45(0.09)(0.05765) \\approx 0.233"
                },
                {
                  "type": "p",
                  "en": "So on average the shooter makes 3 baskets, and the chance of making exactly 2 is about 0.233.",
                  "zh": "所以平均命中 3 次，恰好命中 2 次的概率约为 0.233。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of these is a valid probability distribution for $X$?",
                "zh": "下列哪个是 $X$ 的有效概率分布？"
              },
              "choices": [
                "$P(1)=0.5,\\ P(2)=0.3,\\ P(3)=0.1$",
                "$P(1)=0.4,\\ P(2)=0.4,\\ P(3)=0.2$",
                "$P(1)=0.5,\\ P(2)=0.6,\\ P(3)=-0.1$",
                "$P(1)=0.3,\\ P(2)=0.3,\\ P(3)=0.3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A valid distribution needs every probability between 0 and 1 AND a total of exactly 1. Only $0.4+0.4+0.2 = 1$ works. One option sums to less than 1, one includes a negative probability, and another sums to 0.9.",
                "zh": "有效分布要求每个概率都在 0 到 1 之间，且总和恰好为 1。只有 $0.4+0.4+0.2 = 1$ 满足。其余选项分别是总和小于 1、含有负概率、或总和为 0.9。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A game pays $X$ with $P(\\$0)=0.5$, $P(\\$2)=0.3$, $P(\\$10)=0.2$. Find the expected payout $E(X)$ in dollars.",
                "zh": "某游戏的奖金 $X$ 满足 $P(\\$0)=0.5$、$P(\\$2)=0.3$、$P(\\$10)=0.2$。求期望奖金 $E(X)$（美元）。"
              },
              "answer": "2.6",
              "accept": [
                "2.6",
                "2.60",
                "$2.6",
                "$2.60"
              ],
              "explanation": {
                "en": "Multiply each payout by its probability and add: $0(0.5) + 2(0.3) + 10(0.2) = 0 + 0.6 + 2 = 2.6$ dollars. Averaging the payouts without weighting by probability would give the wrong value.",
                "zh": "把每笔奖金乘以其概率再相加：$0(0.5) + 2(0.3) + 10(0.2) = 0 + 0.6 + 2 = 2.6$ 美元。若不按概率加权而直接平均，会得到错误的结果。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The expected value of a fair six-sided die is 3.5. What does this mean?",
                "zh": "一颗均匀六面骰子的期望值是 3.5。这意味着什么？"
              },
              "choices": [
                "You are most likely to roll a 3.5.",
                "Half of all rolls land above 3.5.",
                "Over many rolls, the average result approaches 3.5.",
                "3.5 is the most common outcome."
              ],
              "answer": 2,
              "explanation": {
                "en": "Expected value is the long-run average over many repetitions, so the mean of many rolls approaches 3.5. It is not an outcome you can roll and it is not the most likely or median value in that sense — a die cannot even show 3.5.",
                "zh": "期望值是多次重复后的长期平均，所以大量投掷的平均值趋近 3.5。它并不是某一次能掷出的结果，也不是最可能或中位意义上的值——骰子根本掷不出 3.5。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Independent variables have $\\sigma_X = 6$ and $\\sigma_Y = 8$. Find the standard deviation of $X + Y$.",
                "zh": "独立变量满足 $\\sigma_X = 6$、$\\sigma_Y = 8$。求 $X + Y$ 的标准差。"
              },
              "answer": "10",
              "accept": [
                "10",
                "10.0"
              ],
              "explanation": {
                "en": "Add the variances first: $6^2 + 8^2 = 36 + 64 = 100$, then take the square root: $\\sqrt{100} = 10$. Adding the standard deviations directly ($6+8=14$) is wrong — only variances add.",
                "zh": "先把方差相加：$6^2 + 8^2 = 36 + 64 = 100$，再开平方：$\\sqrt{100} = 10$。直接把标准差相加（$6+8=14$）是错的——只有方差才相加。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which scenario is a binomial setting?",
                "zh": "下列哪个情形是二项分布情形？"
              },
              "choices": [
                "Rolling a die until you get the first 6.",
                "The exact time until a bus arrives.",
                "Counting how many of 20 randomly chosen voters support a candidate.",
                "Drawing cards without replacement until you get an ace."
              ],
              "answer": 2,
              "explanation": {
                "en": "A binomial setting has a fixed number of independent trials, each a success/failure with the same probability — counting supporters among 20 fixed voters fits. 'Until the first 6' and 'until an ace' have no fixed number of trials (geometric-like), and a continuous time is not a count of successes.",
                "zh": "二项情形需要固定次数的独立试验，每次是同概率的成功或失败——在固定的 20 名选民中统计支持者符合此设定。'直到第一次出现 6'和'直到抽到 A'没有固定试验次数（类似几何分布），而连续的时间也不是成功次数的计数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a binomial setting with $n = 50$ and $p = 0.2$, find the mean number of successes $\\mu = np$.",
                "zh": "在 $n = 50$、$p = 0.2$ 的二项情形中，求成功次数的均值 $\\mu = np$。"
              },
              "answer": "10",
              "accept": [
                "10",
                "10.0"
              ],
              "explanation": {
                "en": "The binomial mean is $\\mu = np = 50 \\times 0.2 = 10$. Using $np(1-p)$ would instead give the variance, and $\\sqrt{np(1-p)}$ the standard deviation — different quantities.",
                "zh": "二项分布均值为 $\\mu = np = 50 \\times 0.2 = 10$。若用 $np(1-p)$ 得到的是方差，用 $\\sqrt{np(1-p)}$ 得到的是标准差——都是不同的量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For independent $X$ and $Y$, which is the correct variance of $X - Y$?",
                "zh": "对于独立的 $X$ 与 $Y$，$X - Y$ 的方差正确的是哪一项？"
              },
              "choices": [
                "$\\sigma_X^2 + \\sigma_Y^2$",
                "$\\sigma_X^2 - \\sigma_Y^2$",
                "$\\sigma_X - \\sigma_Y$",
                "$(\\sigma_X - \\sigma_Y)^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "For independent variables, variances add for both sums and differences: $\\sigma_{X-Y}^2 = \\sigma_X^2 + \\sigma_Y^2$. Subtracting variances could give a negative (impossible) result, and you never combine standard deviations by subtraction.",
                "zh": "对独立变量，无论求和还是求差，方差都相加：$\\sigma_{X-Y}^2 = \\sigma_X^2 + \\sigma_Y^2$。相减可能得到负值（不可能），而且标准差也绝不能相减来组合。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A spinner lands on red with probability $p = 0.2$ on each independent spin. Find the probability the first red appears on the 3rd spin. (Round to 3 decimals.)",
                "zh": "一个转盘每次独立转动停在红色的概率为 $p = 0.2$。求第一次出现红色恰在第 3 次转动的概率。（保留 3 位小数。）"
              },
              "answer": "0.128",
              "accept": [
                "0.128",
                ".128"
              ],
              "explanation": {
                "en": "This is geometric: the first two spins are non-red and the third is red, so $P(X=3) = (0.8)^2(0.2) = 0.64 \\times 0.2 = 0.128$. Forgetting that the first two must be failures would misuse the formula.",
                "zh": "这是几何分布：前两次非红、第三次为红，所以 $P(X=3) = (0.8)^2(0.2) = 0.64 \\times 0.2 = 0.128$。若忘记前两次必须都失败，就会误用公式。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "sampling-distributions",
      "title": "Unit 5: Sampling Distributions",
      "titleZh": "第五单元：抽样分布",
      "lessons": [
        {
          "id": "sampling-distributions",
          "title": "Sampling Distributions",
          "titleZh": "抽样分布",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Sampling Distribution?",
              "zh": "什么是抽样分布？"
            },
            {
              "type": "p",
              "en": "A parameter is a number that describes a population (for example the true proportion $p$ of all voters who support a candidate, or the population mean $\\mu$). A statistic is a number computed from a sample (for example the sample proportion $\\hat{p}$ or the sample mean $\\bar{x}$). We use a statistic to estimate a parameter, but here is the key idea: if you take a different random sample you get a different value of the statistic. The statistic varies from sample to sample.",
              "zh": "参数（parameter）是描述总体的数（例如所有选民中支持某候选人的真实比例 $p$，或总体均值 $\\mu$）。统计量（statistic）是由样本算出的数（例如样本比例 $\\hat{p}$ 或样本均值 $\\bar{x}$）。我们用统计量去估计参数，但关键在于：换一个随机样本就会得到不同的统计量值。统计量会随样本不同而变化。"
            },
            {
              "type": "p",
              "en": "The sampling distribution of a statistic is the distribution of values taken by the statistic in all possible samples of the same size $n$ from the same population. It tells us how the statistic behaves: where it centers, how spread out it is, and what shape it has. Imagine taking thousands of samples of size $n$, computing the statistic each time, and making a histogram of those values — that histogram approximates the sampling distribution.",
              "zh": "一个统计量的抽样分布（sampling distribution）是指：从同一总体中抽取所有可能的、大小同为 $n$ 的样本时，该统计量取值的分布。它告诉我们统计量的行为：中心在哪里、离散程度多大、形状如何。设想抽取成千上万个大小为 $n$ 的样本，每次都算出统计量，再把这些值画成直方图——这个直方图就近似于抽样分布。"
            },
            {
              "type": "note",
              "en": "Do not confuse three different distributions: the POPULATION distribution (all individuals), the distribution of ONE sample (the data you collected), and the SAMPLING distribution of a statistic (values of the statistic over many samples). On the AP exam, mixing these up is a classic error.",
              "zh": "不要混淆三种分布：总体分布（所有个体）、一个样本的分布（你收集到的数据）、以及某统计量的抽样分布（该统计量在许多样本上的取值）。在 AP 考试中，把它们弄混是常见错误。"
            },
            {
              "type": "h3",
              "en": "Bias and Variability",
              "zh": "偏倚与变异性"
            },
            {
              "type": "p",
              "en": "Two features of a sampling distribution describe how good a statistic is as an estimator. Bias concerns the center; variability concerns the spread. We want an estimator that is both accurate (unbiased) and precise (low variability).",
              "zh": "抽样分布的两个特征刻画了一个统计量作为估计量的好坏。偏倚（bias）关乎中心；变异性（variability）关乎离散程度。我们希望估计量既准确（无偏）又精确（变异性小）。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A statistic is unbiased if the mean of its sampling distribution equals the parameter it estimates. Both $\\hat{p}$ and $\\bar{x}$ are unbiased estimators, so on average they hit the true value. If the center is off from the parameter, the statistic is biased.",
                  "zh": "若一个统计量抽样分布的均值等于它所估计的参数，则称该统计量无偏（unbiased）。$\\hat{p}$ 和 $\\bar{x}$ 都是无偏估计量，所以平均而言它们命中真实值。若中心偏离参数，则该统计量有偏。"
                },
                {
                  "en": "Variability is the spread of the sampling distribution. Lower variability means the statistic lands close to the same value each time. Larger sample sizes produce lower variability — a big sample gives a more precise estimate.",
                  "zh": "变异性是抽样分布的离散程度。变异性越小，统计量每次落在越接近的值上。样本量越大，变异性越小——大样本给出更精确的估计。"
                },
                {
                  "en": "A useful analogy is a dartboard: unbiased means the darts center on the bullseye, low variability means the darts cluster tightly. The ideal estimator is unbiased AND has low variability.",
                  "zh": "一个有用的比喻是靶盘：无偏意味着飞镖以靶心为中心，低变异性意味着飞镖聚集得很紧。理想的估计量既无偏又具有低变异性。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Variability depends on the sample size $n$, NOT on the population size (as long as the population is much larger than the sample). A sample of 1000 is just as precise for a city of 100,000 as for a country of 300 million. This surprises many students.",
              "zh": "变异性取决于样本量 $n$，而不取决于总体大小（只要总体远大于样本）。1000 个样本对一个 10 万人的城市和一个 3 亿人的国家同样精确。这让许多学生感到意外。"
            },
            {
              "type": "h3",
              "en": "The Sampling Distribution of a Sample Proportion $\\hat{p}$",
              "zh": "样本比例 $\\hat{p}$ 的抽样分布"
            },
            {
              "type": "p",
              "en": "Suppose the true population proportion is $p$. Take an SRS of size $n$ and record $\\hat{p}$, the proportion of successes in the sample. Over all such samples, the sampling distribution of $\\hat{p}$ has these features:",
              "zh": "设真实总体比例为 $p$。抽取一个大小为 $n$ 的简单随机样本（SRS），记录样本中成功的比例 $\\hat{p}$。在所有这样的样本上，$\\hat{p}$ 的抽样分布具有如下特征："
            },
            {
              "type": "math",
              "tex": "\\mu_{\\hat{p}} = p \\qquad \\sigma_{\\hat{p}} = \\sqrt{\\dfrac{p(1-p)}{n}}"
            },
            {
              "type": "p",
              "en": "The mean equals $p$ (so $\\hat{p}$ is unbiased), and the standard deviation shrinks as $n$ grows (because of the $n$ in the denominator). The formula for $\\sigma_{\\hat{p}}$ requires the sample to be a small fraction of the population; this is guaranteed by the 10% condition below.",
              "zh": "均值等于 $p$（所以 $\\hat{p}$ 无偏），标准差随 $n$ 增大而减小（因为分母中有 $n$）。$\\sigma_{\\hat{p}}$ 的公式要求样本只占总体的一小部分；这由下面的 10% 条件保证。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Random: the data come from a random sample or randomized experiment. This makes $\\hat{p}$ an unbiased estimator.",
                  "zh": "随机（Random）：数据来自随机样本或随机化实验。这使 $\\hat{p}$ 成为无偏估计量。"
                },
                {
                  "en": "10% condition: the sample size is at most 10% of the population, $n \\le 0.10 N$. This justifies using $\\sqrt{p(1-p)/n}$ for the standard deviation.",
                  "zh": "10% 条件：样本量不超过总体的 10%，即 $n \\le 0.10 N$。这使得用 $\\sqrt{p(1-p)/n}$ 作为标准差是合理的。"
                },
                {
                  "en": "Large Counts: both $np \\ge 10$ and $n(1-p) \\ge 10$. When this holds, the sampling distribution of $\\hat{p}$ is approximately Normal.",
                  "zh": "大计数（Large Counts）：$np \\ge 10$ 且 $n(1-p) \\ge 10$ 同时成立。此时 $\\hat{p}$ 的抽样分布近似服从正态分布。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: check Large Counts using the actual expected number of successes and failures ($np$ and $n(1-p)$), not the observed counts, when you know $p$. If either is below 10, the sampling distribution is skewed and the Normal approximation fails.",
              "zh": "AP 提示：当已知 $p$ 时，用期望的成功数与失败数（$np$ 和 $n(1-p)$）来检验大计数条件，而不是观测计数。若其中任何一个小于 10，抽样分布会偏斜，正态近似失效。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Sampling distribution of $\\hat{p}$",
                "zh": "例题 1：$\\hat{p}$ 的抽样分布"
              },
              "problem": {
                "en": "Nationally, 40% of adults have visited a national park. A pollster takes an SRS of $n = 150$ adults. Describe the sampling distribution of $\\hat{p}$, and find the probability that $\\hat{p}$ exceeds 0.47.",
                "zh": "设全国有 40% 的成年人到访过国家公园。一位民调员抽取了 $n = 150$ 名成年人的简单随机样本。描述 $\\hat{p}$ 的抽样分布，并求 $\\hat{p}$ 超过 0.47 的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $p = 0.40$ and $n = 150$. Check conditions: the sample is random; assume there are more than $10 \\times 150 = 1500$ adults nationally (10% met); Large Counts gives $np = 150(0.40) = 60 \\ge 10$ and $n(1-p) = 150(0.60) = 90 \\ge 10$. So the distribution is approximately Normal.",
                  "zh": "这里 $p = 0.40$，$n = 150$。检查条件：样本随机；假设全国成年人多于 $10 \\times 150 = 1500$ 人（满足 10%）；大计数：$np = 150(0.40) = 60 \\ge 10$ 且 $n(1-p) = 150(0.60) = 90 \\ge 10$。所以分布近似正态。"
                },
                {
                  "type": "math",
                  "tex": "\\mu_{\\hat{p}} = 0.40, \\qquad \\sigma_{\\hat{p}} = \\sqrt{\\dfrac{0.40(0.60)}{150}} = \\sqrt{0.0016} = 0.0400"
                },
                {
                  "type": "p",
                  "en": "Standardize $\\hat{p} = 0.47$: $z = \\dfrac{0.47 - 0.40}{0.0400} = 1.75$. Then $P(\\hat{p} > 0.47) = P(Z > 1.75) = 1 - 0.9599 = 0.0401$.",
                  "zh": "将 $\\hat{p} = 0.47$ 标准化：$z = \\dfrac{0.47 - 0.40}{0.0400} = 1.75$。则 $P(\\hat{p} > 0.47) = P(Z > 1.75) = 1 - 0.9599 = 0.0401$。"
                },
                {
                  "type": "p",
                  "en": "About 4% of samples of size 150 would give a sample proportion above 0.47.",
                  "zh": "在大小为 150 的样本中，约有 4% 会给出高于 0.47 的样本比例。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Sampling Distribution of a Sample Mean $\\bar{x}$ and the Central Limit Theorem",
              "zh": "样本均值 $\\bar{x}$ 的抽样分布与中心极限定理"
            },
            {
              "type": "p",
              "en": "Now suppose the population has mean $\\mu$ and standard deviation $\\sigma$. Take an SRS of size $n$ and compute the sample mean $\\bar{x}$. Over all such samples, the sampling distribution of $\\bar{x}$ has:",
              "zh": "现在设总体均值为 $\\mu$、标准差为 $\\sigma$。抽取大小为 $n$ 的简单随机样本并计算样本均值 $\\bar{x}$。在所有这样的样本上，$\\bar{x}$ 的抽样分布满足："
            },
            {
              "type": "math",
              "tex": "\\mu_{\\bar{x}} = \\mu \\qquad \\sigma_{\\bar{x}} = \\dfrac{\\sigma}{\\sqrt{n}}"
            },
            {
              "type": "p",
              "en": "So $\\bar{x}$ is unbiased, and its standard deviation (the standard error) shrinks like $1/\\sqrt{n}$. To cut the variability in half you must quadruple the sample size. The 10% condition ($n \\le 0.10N$) is needed for the standard deviation formula when sampling without replacement.",
              "zh": "所以 $\\bar{x}$ 无偏，其标准差（标准误）按 $1/\\sqrt{n}$ 的速度减小。要把变异性减半，必须把样本量扩大到 4 倍。无放回抽样时，标准差公式需要 10% 条件（$n \\le 0.10N$）。"
            },
            {
              "type": "p",
              "en": "What about the shape? If the population itself is Normal, then $\\bar{x}$ is exactly Normal for any $n$. If the population is not Normal, the Central Limit Theorem (CLT) rescues us: for a large sample size $n$, the sampling distribution of $\\bar{x}$ is approximately Normal regardless of the shape of the population distribution. A common rule of thumb is $n \\ge 30$.",
              "zh": "那形状呢？若总体本身是正态的，则对任意 $n$，$\\bar{x}$ 都精确服从正态分布。若总体不是正态的，中心极限定理（CLT）就派上用场：当样本量 $n$ 较大时，无论总体分布形状如何，$\\bar{x}$ 的抽样分布都近似正态。常用的经验法则是 $n \\ge 30$。"
            },
            {
              "type": "note",
              "en": "The CLT is about the distribution of $\\bar{x}$, NOT the distribution of the individual data. Making the sample bigger does not make the raw data more Normal — the population keeps its shape. It is the sampling distribution of the mean that becomes Normal as $n$ grows.",
              "zh": "中心极限定理讲的是 $\\bar{x}$ 的分布，而不是单个数据的分布。增大样本并不会使原始数据更接近正态——总体保持其形状。是均值的抽样分布随 $n$ 增大而变为正态。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Using the Central Limit Theorem",
                "zh": "例题 2：使用中心极限定理"
              },
              "problem": {
                "en": "The number of accidents per week at a factory has a strongly right-skewed distribution with mean $\\mu = 2.2$ and standard deviation $\\sigma = 1.4$. A safety analyst records the mean number of accidents over a random sample of $n = 52$ weeks. Find the probability that this sample mean $\\bar{x}$ is less than 2.0.",
                "zh": "某工厂每周事故数服从一个严重右偏的分布，均值 $\\mu = 2.2$、标准差 $\\sigma = 1.4$。一位安全分析师记录随机抽取的 $n = 52$ 周的平均事故数。求该样本均值 $\\bar{x}$ 小于 2.0 的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The population is skewed, so $\\bar{x}$ is not automatically Normal — but $n = 52 \\ge 30$, so by the CLT the sampling distribution of $\\bar{x}$ is approximately Normal. Its mean and standard deviation:",
                  "zh": "总体是偏斜的，所以 $\\bar{x}$ 不会自动服从正态——但 $n = 52 \\ge 30$，故由中心极限定理，$\\bar{x}$ 的抽样分布近似正态。其均值与标准差为："
                },
                {
                  "type": "math",
                  "tex": "\\mu_{\\bar{x}} = 2.2, \\qquad \\sigma_{\\bar{x}} = \\dfrac{1.4}{\\sqrt{52}} = 0.1941"
                },
                {
                  "type": "p",
                  "en": "Standardize: $z = \\dfrac{2.0 - 2.2}{0.1941} = -1.03$. Then $P(\\bar{x} < 2.0) = P(Z < -1.03) = 0.1515$.",
                  "zh": "标准化：$z = \\dfrac{2.0 - 2.2}{0.1941} = -1.03$。则 $P(\\bar{x} < 2.0) = P(Z < -1.03) = 0.1515$。"
                },
                {
                  "type": "p",
                  "en": "There is about a 15% chance the mean over 52 weeks is below 2.0 accidents. Note we could NOT find the probability for a single week this way, because one week is not Normal.",
                  "zh": "52 周的平均事故数低于 2.0 的概率约为 15%。注意我们不能用这种方法求单独一周的概率，因为单周不服从正态。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: When is Normality guaranteed?",
                "zh": "例题 3：何时保证正态性？"
              },
              "problem": {
                "en": "For each scenario, state whether the sampling distribution of $\\bar{x}$ can be treated as approximately Normal. (a) Population is Normal, $n = 6$. (b) Population is strongly skewed, $n = 12$. (c) Population is slightly skewed, $n = 80$.",
                "zh": "对下列每种情形，判断 $\\bar{x}$ 的抽样分布是否可视为近似正态。(a) 总体正态，$n = 6$。(b) 总体严重偏斜，$n = 12$。(c) 总体轻微偏斜，$n = 80$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Yes. When the population is Normal, $\\bar{x}$ is exactly Normal for any sample size, even $n = 6$.",
                  "zh": "(a) 可以。当总体正态时，对任意样本量（哪怕 $n = 6$），$\\bar{x}$ 都精确服从正态。"
                },
                {
                  "type": "p",
                  "en": "(b) No. The population is strongly skewed and $n = 12$ is too small; the CLT has not \"kicked in\" yet, so $\\bar{x}$ inherits some skew.",
                  "zh": "(b) 不可以。总体严重偏斜且 $n = 12$ 太小；中心极限定理尚未生效，所以 $\\bar{x}$ 仍带有一些偏斜。"
                },
                {
                  "type": "p",
                  "en": "(c) Yes. Although the population is not Normal, $n = 80 \\ge 30$, so by the CLT the sampling distribution of $\\bar{x}$ is approximately Normal.",
                  "zh": "(c) 可以。虽然总体不正态，但 $n = 80 \\ge 30$，故由中心极限定理，$\\bar{x}$ 的抽样分布近似正态。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A researcher computes the mean height $\\bar{x}$ of a random sample of 40 students. In this context, $\\bar{x}$ is best described as a…",
                "zh": "一位研究者计算了 40 名学生随机样本的平均身高 $\\bar{x}$。在此情境中，$\\bar{x}$ 最恰当地被描述为……"
              },
              "choices": [
                "statistic, because it is computed from a sample / 统计量，因为它由样本算出",
                "parameter, because it describes the population / 参数，因为它描述总体",
                "parameter, because heights are fixed / 参数，因为身高是固定的",
                "sampling distribution / 抽样分布"
              ],
              "answer": 0,
              "explanation": {
                "en": "A number computed from sample data is a statistic. A parameter describes the whole population and would be written $\\mu$. The sample mean $\\bar{x}$ estimates the parameter but is itself a statistic.",
                "zh": "由样本数据算出的数是统计量。参数描述整个总体，会写作 $\\mu$。样本均值 $\\bar{x}$ 估计参数，但它本身是统计量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly describes an unbiased estimator?",
                "zh": "哪个说法正确描述了无偏估计量？"
              },
              "choices": [
                "It always equals the parameter in every sample / 它在每个样本中都等于参数",
                "Its sampling distribution has zero variability / 其抽样分布变异性为零",
                "It is guaranteed to be close to the parameter / 它一定接近参数",
                "The mean of its sampling distribution equals the parameter / 其抽样分布的均值等于参数"
              ],
              "answer": 3,
              "explanation": {
                "en": "Unbiased means the center (mean) of the sampling distribution lands on the parameter. A single sample can still miss, and an unbiased estimator can still have large variability — unbiasedness is only about the center, not the spread.",
                "zh": "无偏指抽样分布的中心（均值）落在参数上。单个样本仍可能偏离，无偏估计量仍可能有很大的变异性——无偏只关乎中心，不关乎离散程度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A population is strongly right-skewed. To make the sampling distribution of $\\bar{x}$ approximately Normal, you should…",
                "zh": "某总体严重右偏。为使 $\\bar{x}$ 的抽样分布近似正态，你应当……"
              },
              "choices": [
                "transform the raw data to remove the skew / 变换原始数据以消除偏斜",
                "use a small sample so the mean is stable / 使用小样本使均值稳定",
                "take a large sample size, at least about 30 / 取较大的样本量，至少约 30",
                "nothing works; $\\bar{x}$ can never be Normal here / 无计可施；此处 $\\bar{x}$ 永远无法正态"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the Central Limit Theorem, a large $n$ (rule of thumb $n \\ge 30$) makes the sampling distribution of $\\bar{x}$ approximately Normal regardless of population shape. Small samples keep the skew, and no data transformation is required.",
                "zh": "根据中心极限定理，较大的 $n$（经验法则 $n \\ge 30$）使 $\\bar{x}$ 的抽样分布无论总体形状如何都近似正态。小样本保留偏斜，且无需变换数据。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The population standard deviation is $\\sigma = 20$. If the sample size increases from $n = 25$ to $n = 100$, the standard deviation of $\\bar{x}$…",
                "zh": "总体标准差为 $\\sigma = 20$。若样本量从 $n = 25$ 增加到 $n = 100$，则 $\\bar{x}$ 的标准差……"
              },
              "choices": [
                "stays the same / 保持不变",
                "is cut in half / 减半",
                "is cut to one fourth / 变为四分之一",
                "doubles / 翻倍"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$, going from $n=25$ to $n=100$ multiplies $\\sqrt{n}$ by 2 ($\\sqrt{25}=5$ to $\\sqrt{100}=10$), so the standard deviation is halved: from $20/5 = 4$ to $20/10 = 2$. Quadrupling $n$ halves the spread, it does not quarter it.",
                "zh": "因为 $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$，从 $n=25$ 到 $n=100$ 使 $\\sqrt{n}$ 变为 2 倍（$\\sqrt{25}=5$ 到 $\\sqrt{100}=10$），所以标准差减半：从 $20/5 = 4$ 变为 $20/10 = 2$。样本量变 4 倍使离散度减半，而非变为四分之一。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A true proportion is $p = 0.05$ and the sample size is $n = 120$. Why might the Normal approximation for $\\hat{p}$ fail?",
                "zh": "真实比例为 $p = 0.05$，样本量为 $n = 120$。为什么 $\\hat{p}$ 的正态近似可能失效？"
              },
              "choices": [
                "The 10% condition is violated / 违反了 10% 条件",
                "The sample is not random / 样本不随机",
                "$np = 6 < 10$, so Large Counts fails / $np = 6 < 10$，大计数条件不满足",
                "$n$ is too large / $n$ 太大"
              ],
              "answer": 2,
              "explanation": {
                "en": "Large Counts requires $np \\ge 10$ and $n(1-p) \\ge 10$. Here $np = 120(0.05) = 6 < 10$, so the sampling distribution of $\\hat{p}$ is right-skewed and not approximately Normal, even though $n(1-p) = 114$ is fine.",
                "zh": "大计数条件要求 $np \\ge 10$ 且 $n(1-p) \\ge 10$。这里 $np = 120(0.05) = 6 < 10$，所以 $\\hat{p}$ 的抽样分布右偏、不近似正态，尽管 $n(1-p) = 114$ 没问题。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population has proportion $p = 0.60$. For samples of size $n = 100$, find the standard deviation of the sampling distribution of $\\hat{p}$. Round to 3 decimals.",
                "zh": "某总体比例 $p = 0.60$。对大小 $n = 100$ 的样本，求 $\\hat{p}$ 抽样分布的标准差。保留 3 位小数。"
              },
              "answer": "0.049",
              "accept": [
                "0.049",
                ".049",
                "0.0490"
              ],
              "explanation": {
                "en": "Use $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n} = \\sqrt{0.60(0.40)/100} = \\sqrt{0.0024} = 0.04899 \\approx 0.049$.",
                "zh": "用 $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n} = \\sqrt{0.60(0.40)/100} = \\sqrt{0.0024} = 0.04899 \\approx 0.049$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population has mean $\\mu = 500$ and standard deviation $\\sigma = 90$. For a random sample of $n = 36$, what is the standard deviation of $\\bar{x}$ (the standard error)? Enter a number.",
                "zh": "某总体均值 $\\mu = 500$、标准差 $\\sigma = 90$。对随机样本 $n = 36$，$\\bar{x}$ 的标准差（标准误）是多少？输入一个数。"
              },
              "answer": "15",
              "accept": [
                "15",
                "15.0",
                "15.00"
              ],
              "explanation": {
                "en": "The standard error is $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n} = 90/\\sqrt{36} = 90/6 = 15$.",
                "zh": "标准误为 $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n} = 90/\\sqrt{36} = 90/6 = 15$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The true proportion of defective chips is $p = 0.10$. In an SRS of $n = 200$ chips, find the probability that $\\hat{p}$ exceeds 0.13. Round to 3 decimals.",
                "zh": "次品芯片的真实比例为 $p = 0.10$。在 $n = 200$ 个芯片的简单随机样本中，求 $\\hat{p}$ 超过 0.13 的概率。保留 3 位小数。"
              },
              "answer": "0.079",
              "accept": [
                "0.079",
                ".079",
                "0.078",
                "0.08"
              ],
              "explanation": {
                "en": "Large Counts: $np = 20$, $n(1-p) = 180$, both $\\ge 10$, so $\\hat{p}$ is approximately Normal with $\\mu_{\\hat{p}} = 0.10$ and $\\sigma_{\\hat{p}} = \\sqrt{0.10(0.90)/200} = 0.02121$. Then $z = (0.13 - 0.10)/0.02121 = 1.41$ and $P(Z > 1.41) = 1 - 0.9207 = 0.0793 \\approx 0.079$.",
                "zh": "大计数：$np = 20$、$n(1-p) = 180$，均 $\\ge 10$，故 $\\hat{p}$ 近似正态，$\\mu_{\\hat{p}} = 0.10$、$\\sigma_{\\hat{p}} = \\sqrt{0.10(0.90)/200} = 0.02121$。则 $z = (0.13 - 0.10)/0.02121 = 1.41$，$P(Z > 1.41) = 1 - 0.9207 = 0.0793 \\approx 0.079$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "inference-proportions",
      "title": "Unit 6: Inference for Categorical Data: Proportions",
      "titleZh": "第六单元：分类数据的推断——比例",
      "lessons": [
        {
          "id": "confidence-intervals-for-proportions",
          "title": "Confidence Intervals for Proportions",
          "titleZh": "比例的置信区间",
          "content": [
            {
              "type": "h2",
              "en": "The Logic of a Confidence Interval",
              "zh": "置信区间的逻辑"
            },
            {
              "type": "p",
              "en": "We rarely know a population parameter such as the true proportion $p$. A single sample proportion $\\hat{p}$ is a point estimate, but it almost never hits $p$ exactly. A confidence interval reports a range of plausible values for the parameter, together with a confidence level (like 95%) that tells us how successful our method is in the long run.",
              "zh": "我们很少知道像真实比例 $p$ 这样的总体参数。单个样本比例 $\\hat{p}$ 是一个点估计，但它几乎从不精确命中 $p$。置信区间给出参数的一段合理取值范围，并附上一个置信水平（如 95%），说明我们的方法在长期中有多成功。"
            },
            {
              "type": "p",
              "en": "Every confidence interval has the same structure: point estimate $\\pm$ margin of error. The margin of error extends a certain distance on each side of the estimate to catch the parameter. The interpretation of the confidence LEVEL is about the method, not any one interval.",
              "zh": "每个置信区间都有相同结构：点估计 $\\pm$ 误差幅度。误差幅度在估计值两侧各延伸一定距离以\"捕捉\"参数。置信水平的解释针对方法本身，而非任何单个区间。"
            },
            {
              "type": "math",
              "tex": "\\text{point estimate} \\pm \\text{margin of error} = \\hat{p} \\pm z^{*}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}"
            },
            {
              "type": "note",
              "en": "Classic misinterpretations to avoid: (1) A 95% interval does NOT mean \"there is a 95% probability that $p$ is in this interval\" — $p$ is a fixed number, either in or out. (2) It does NOT mean \"95% of sample data fall in the interval.\" The correct idea: if we repeated the sampling many times, about 95% of the intervals produced would capture $p$. Confidence is in the METHOD.",
              "zh": "需避免的经典误解：(1) 95% 区间并不意味着\"$p$ 落在这个区间的概率为 95%\"——$p$ 是固定的数，要么在内要么在外。(2) 它也不意味着\"95% 的样本数据落在区间内\"。正确理解：若多次重复抽样，所产生的区间中约有 95% 会捕捉到 $p$。置信是对方法而言。"
            },
            {
              "type": "h3",
              "en": "The One-Sample $z$-Interval for a Proportion",
              "zh": "比例的单样本 $z$ 区间"
            },
            {
              "type": "p",
              "en": "To estimate a single population proportion $p$ we use the one-sample $z$-interval. Because we do not know $p$, we estimate the standard deviation using $\\hat{p}$ in place of $p$; this estimated standard deviation is called the standard error. Before computing, we must check three conditions.",
              "zh": "要估计单个总体比例 $p$，我们使用单样本 $z$ 区间。由于不知道 $p$，我们用 $\\hat{p}$ 代替 $p$ 来估计标准差；这个估计出的标准差称为标准误（standard error）。计算前必须检查三个条件。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Random: the data come from a random sample or a randomized experiment.",
                  "zh": "随机（Random）：数据来自随机样本或随机化实验。"
                },
                {
                  "en": "10% condition: the sample is at most 10% of the population, $n \\le 0.10N$, so we may use the standard error formula.",
                  "zh": "10% 条件：样本至多占总体的 10%，即 $n \\le 0.10N$，这样才能使用标准误公式。"
                },
                {
                  "en": "Large Counts: the number of successes and failures IN THE SAMPLE are both at least 10, i.e. $n\\hat{p} \\ge 10$ and $n(1-\\hat{p}) \\ge 10$, so the sampling distribution of $\\hat{p}$ is approximately Normal.",
                  "zh": "大计数（Large Counts）：样本中成功数与失败数都至少为 10，即 $n\\hat{p} \\ge 10$ 且 $n(1-\\hat{p}) \\ge 10$，从而 $\\hat{p}$ 的抽样分布近似正态。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: for a CONFIDENCE INTERVAL, check Large Counts with the observed counts $n\\hat{p}$ and $n(1-\\hat{p})$ (you do not know $p$). Contrast this with a significance test, where you use the hypothesized $p_0$. The common $z^{*}$ critical values are 1.645 (90%), 1.960 (95%), and 2.576 (99%).",
              "zh": "AP 提示：对于置信区间，用观测计数 $n\\hat{p}$ 和 $n(1-\\hat{p})$ 检验大计数条件（因为不知道 $p$）。这与显著性检验不同，后者使用假设值 $p_0$。常用临界值 $z^{*}$ 为 1.645（90%）、1.960（95%）、2.576（99%）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Building and interpreting a $z$-interval",
                "zh": "例题 1：构建并解释 $z$ 区间"
              },
              "problem": {
                "en": "In a random sample of 400 registered voters, 220 say they plan to vote in an upcoming election. Construct and interpret a 95% confidence interval for the true proportion of registered voters who plan to vote.",
                "zh": "在 400 名登记选民的随机样本中，有 220 人表示计划参加即将到来的选举。构建并解释登记选民中计划投票的真实比例的 95% 置信区间。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Point estimate: $\\hat{p} = 220/400 = 0.55$. Check conditions: random sample (given); assume more than $10(400) = 4000$ registered voters (10% met); Large Counts $n\\hat{p} = 220 \\ge 10$ and $n(1-\\hat{p}) = 180 \\ge 10$. Use $z^{*} = 1.960$.",
                  "zh": "点估计：$\\hat{p} = 220/400 = 0.55$。检查条件：随机样本（已知）；假设登记选民多于 $10(400) = 4000$ 人（满足 10%）；大计数 $n\\hat{p} = 220 \\ge 10$ 且 $n(1-\\hat{p}) = 180 \\ge 10$。取 $z^{*} = 1.960$。"
                },
                {
                  "type": "math",
                  "tex": "0.55 \\pm 1.960\\sqrt{\\dfrac{0.55(0.45)}{400}} = 0.55 \\pm 1.960(0.02487) = 0.55 \\pm 0.0487"
                },
                {
                  "type": "p",
                  "en": "The interval is $(0.501,\\ 0.599)$. Interpretation in context: we are 95% confident that the interval from 0.501 to 0.599 captures the true proportion of all registered voters who plan to vote.",
                  "zh": "区间为 $(0.501,\\ 0.599)$。结合情境的解释：我们有 95% 的把握，认为从 0.501 到 0.599 的区间捕捉到了所有登记选民中计划投票的真实比例。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Margin of Error and Choosing a Sample Size",
              "zh": "误差幅度与样本量的选择"
            },
            {
              "type": "p",
              "en": "The margin of error is $ME = z^{*}\\sqrt{\\hat{p}(1-\\hat{p})/n}$. Three things make it larger or smaller: a higher confidence level raises $z^{*}$ and widens the interval; a larger sample size $n$ shrinks the interval (as $1/\\sqrt{n}$); and $\\hat{p}$ near 0.5 gives the widest interval.",
              "zh": "误差幅度为 $ME = z^{*}\\sqrt{\\hat{p}(1-\\hat{p})/n}$。三样东西使其变大或变小：置信水平越高，$z^{*}$ 越大、区间越宽；样本量 $n$ 越大，区间越窄（按 $1/\\sqrt{n}$）；$\\hat{p}$ 越接近 0.5，区间越宽。"
            },
            {
              "type": "p",
              "en": "To design a study we often fix a desired margin of error $ME$ and solve for $n$. Using a conservative guess $\\hat{p} = 0.5$ (which maximizes the product) gives the largest sample size that guarantees the target:",
              "zh": "设计研究时，我们常固定一个期望的误差幅度 $ME$ 并解出 $n$。采用保守猜测 $\\hat{p} = 0.5$（使乘积最大）会给出保证达标的最大样本量："
            },
            {
              "type": "math",
              "tex": "n \\ge \\left(\\dfrac{z^{*}}{ME}\\right)^{2} \\hat{p}(1-\\hat{p})"
            },
            {
              "type": "note",
              "en": "Common mistake: to HALVE the margin of error you must QUADRUPLE the sample size, because $ME$ depends on $1/\\sqrt{n}$. Also, always round the required $n$ UP to the next whole number — rounding down would leave the margin of error slightly too large.",
              "zh": "常见错误：要把误差幅度减半，必须把样本量扩大到 4 倍，因为 $ME$ 依赖于 $1/\\sqrt{n}$。此外，所需 $n$ 必须向上取整到下一个整数——向下取整会使误差幅度略微偏大。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Choosing a sample size",
                "zh": "例题 2：选择样本量"
              },
              "problem": {
                "en": "A polling firm wants to estimate the proportion of adults who support a new policy to within a margin of error of 0.03 at 95% confidence. Using the conservative guess $\\hat{p} = 0.5$, how many adults must they sample?",
                "zh": "一家民调公司希望以 95% 置信水平、误差幅度不超过 0.03 来估计支持某新政策的成年人比例。采用保守猜测 $\\hat{p} = 0.5$，他们需抽取多少名成年人？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set $z^{*} = 1.960$, $ME = 0.03$, $\\hat{p}(1-\\hat{p}) = 0.5(0.5) = 0.25$:",
                  "zh": "取 $z^{*} = 1.960$、$ME = 0.03$、$\\hat{p}(1-\\hat{p}) = 0.5(0.5) = 0.25$："
                },
                {
                  "type": "math",
                  "tex": "n \\ge \\left(\\dfrac{1.960}{0.03}\\right)^{2}(0.25) = (65.33)^{2}(0.25) = 1067.1"
                },
                {
                  "type": "p",
                  "en": "Round UP: they must sample at least 1068 adults. Rounding down to 1067 would fail to guarantee the target margin of error.",
                  "zh": "向上取整：他们必须抽取至少 1068 名成年人。向下取整为 1067 将无法保证达到目标误差幅度。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Two-Sample $z$-Interval for a Difference in Proportions",
              "zh": "两比例之差的双样本 $z$ 区间"
            },
            {
              "type": "p",
              "en": "To compare two populations we estimate $p_1 - p_2$ with $\\hat{p}_1 - \\hat{p}_2$. The conditions apply to BOTH samples: each must be random, each must satisfy the 10% condition, and Large Counts must hold in each group ($n_1\\hat{p}_1$, $n_1(1-\\hat{p}_1)$, $n_2\\hat{p}_2$, $n_2(1-\\hat{p}_2)$ all $\\ge 10$). The two samples must be independent of each other.",
              "zh": "要比较两个总体，我们用 $\\hat{p}_1 - \\hat{p}_2$ 估计 $p_1 - p_2$。条件适用于两个样本：每个都必须随机、都满足 10% 条件，且每组都满足大计数（$n_1\\hat{p}_1$、$n_1(1-\\hat{p}_1)$、$n_2\\hat{p}_2$、$n_2(1-\\hat{p}_2)$ 都 $\\ge 10$）。两个样本必须相互独立。"
            },
            {
              "type": "math",
              "tex": "(\\hat{p}_1 - \\hat{p}_2) \\pm z^{*}\\sqrt{\\dfrac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\dfrac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}"
            },
            {
              "type": "note",
              "en": "Interpreting a difference interval: if the interval contains 0, then 0 is a plausible value for $p_1 - p_2$, so we do not have convincing evidence that the two proportions differ. If the whole interval is above 0, we have evidence that $p_1 > p_2$; if entirely below 0, that $p_1 < p_2$.",
              "zh": "解释差值区间：若区间包含 0，则 0 是 $p_1 - p_2$ 的合理取值，故没有足够证据表明两比例不同。若整个区间都大于 0，则有证据表明 $p_1 > p_2$；若整个区间都小于 0，则 $p_1 < p_2$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Difference in proportions",
                "zh": "例题 3：两比例之差"
              },
              "problem": {
                "en": "In a random sample of 250 city residents, 90 recycle regularly. In an independent random sample of 300 suburban residents, 141 recycle regularly. Construct a 90% confidence interval for the difference (city minus suburb) in the proportions who recycle.",
                "zh": "在 250 名城市居民的随机样本中，有 90 人经常回收。在 300 名郊区居民的独立随机样本中，有 141 人经常回收。为经常回收的比例之差（城市减郊区）构建 90% 置信区间。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$\\hat{p}_1 = 90/250 = 0.36$, $\\hat{p}_2 = 141/300 = 0.47$. Conditions: both samples random and independent; each under 10% of its population; Large Counts: successes/failures are 90, 160, 141, 159, all $\\ge 10$. Use $z^{*} = 1.645$.",
                  "zh": "$\\hat{p}_1 = 90/250 = 0.36$，$\\hat{p}_2 = 141/300 = 0.47$。条件：两样本随机且独立；各占其总体不足 10%；大计数：成功/失败数为 90、160、141、159，均 $\\ge 10$。取 $z^{*} = 1.645$。"
                },
                {
                  "type": "math",
                  "tex": "(0.36 - 0.47) \\pm 1.645\\sqrt{\\dfrac{0.36(0.64)}{250} + \\dfrac{0.47(0.53)}{300}} = -0.11 \\pm 1.645(0.0421)"
                },
                {
                  "type": "p",
                  "en": "This gives $-0.11 \\pm 0.069$, or $(-0.179,\\ -0.041)$. Because the entire interval is below 0, we are 90% confident that city residents recycle at a lower rate than suburban residents.",
                  "zh": "得 $-0.11 \\pm 0.069$，即 $(-0.179,\\ -0.041)$。因为整个区间都小于 0，我们有 90% 的把握认为城市居民的回收比例低于郊区居民。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A 95% confidence interval for a proportion is $(0.42, 0.50)$. Which interpretation is correct?",
                "zh": "某比例的 95% 置信区间为 $(0.42, 0.50)$。哪个解释正确？"
              },
              "choices": [
                "We are 95% confident the interval from 0.42 to 0.50 captures the true proportion / 我们有 95% 把握该区间 0.42 到 0.50 捕捉了真实比例",
                "There is a 95% probability that $p$ is between 0.42 and 0.50 / $p$ 落在 0.42 与 0.50 之间的概率为 95%",
                "95% of the sample values fall between 0.42 and 0.50 / 95% 的样本值落在 0.42 与 0.50 之间",
                "95% of all samples will give $\\hat{p}$ between 0.42 and 0.50 / 95% 的样本会给出介于 0.42 与 0.50 的 $\\hat{p}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Confidence is about the method: 95% of intervals built this way capture $p$. Saying there is a 95% probability $p$ lies in THIS interval is wrong because $p$ is fixed; the interval is not about where sample data fall or where future $\\hat{p}$ values land.",
                "zh": "置信是关于方法的：用此法构建的区间中有 95% 捕捉到 $p$。说\"$p$ 落在这个区间的概率为 95%\"是错的，因为 $p$ 是固定的；区间也不是关于样本数据落在何处或未来 $\\hat{p}$ 落在何处。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When checking the Large Counts condition for a confidence interval for $p$, which quantities do you use?",
                "zh": "为 $p$ 的置信区间检查大计数条件时，你应使用哪些量？"
              },
              "choices": [
                "A hypothesized $p_0$: $np_0$ and $n(1-p_0)$ / 假设值 $p_0$：$np_0$ 与 $n(1-p_0)$",
                "The observed counts $n\\hat{p}$ and $n(1-\\hat{p})$ / 观测计数 $n\\hat{p}$ 与 $n(1-\\hat{p})$",
                "Only the sample size $n \\ge 30$ / 仅样本量 $n \\ge 30$",
                "The population size $N$ / 总体大小 $N$"
              ],
              "answer": 1,
              "explanation": {
                "en": "For a confidence interval we have no hypothesized value, so we use the observed successes and failures $n\\hat{p}$ and $n(1-\\hat{p})$, each at least 10. A hypothesized $p_0$ is used only for a significance test, and $n \\ge 30$ is the rule for means, not proportions.",
                "zh": "置信区间没有假设值，故用观测的成功与失败数 $n\\hat{p}$ 与 $n(1-\\hat{p})$，各至少 10。假设值 $p_0$ 只用于显著性检验，而 $n \\ge 30$ 是均值的法则，不是比例的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Holding everything else fixed, which change makes a confidence interval for $p$ WIDER?",
                "zh": "在其他条件不变时，哪种改变会使 $p$ 的置信区间变宽？"
              },
              "choices": [
                "Increasing the sample size / 增大样本量",
                "Decreasing the confidence level from 99% to 90% / 将置信水平从 99% 降到 90%",
                "Increasing the confidence level from 90% to 99% / 将置信水平从 90% 提高到 99%",
                "Collecting a more representative sample / 收集更有代表性的样本"
              ],
              "answer": 2,
              "explanation": {
                "en": "A higher confidence level uses a larger $z^{*}$, which lengthens the margin of error and widens the interval. Increasing $n$ or lowering the confidence level makes the interval narrower; representativeness affects bias, not width.",
                "zh": "更高的置信水平使用更大的 $z^{*}$，从而增大误差幅度、加宽区间。增大 $n$ 或降低置信水平会使区间变窄；代表性影响偏倚，不影响宽度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A 95% confidence interval for $p_1 - p_2$ is $(-0.02, 0.15)$. What can we conclude?",
                "zh": "$p_1 - p_2$ 的 95% 置信区间为 $(-0.02, 0.15)$。我们能得出什么结论？"
              },
              "choices": [
                "Since the interval contains 0, there is not convincing evidence the proportions differ / 区间包含 0，故没有足够证据表明两比例不同",
                "Since $\\hat{p}_1 > \\hat{p}_2$, group 1 is definitely higher / 因 $\\hat{p}_1 > \\hat{p}_2$，第 1 组一定更高",
                "The interval is wrong because it includes a negative number / 区间有误，因为包含负数",
                "There is a 95% chance the difference is 0 / 差为 0 的概率是 95%"
              ],
              "answer": 0,
              "explanation": {
                "en": "Because 0 lies inside the interval, 0 is a plausible difference, so we lack convincing evidence that $p_1$ and $p_2$ differ. A difference interval can legitimately include negatives, and it does not assign a probability to any single value like 0.",
                "zh": "因为 0 落在区间内，0 是一个合理的差值，故缺乏足够证据表明 $p_1$ 与 $p_2$ 不同。差值区间可以合理地包含负数，且它不会给 0 这样的单一值赋予概率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A researcher wants to cut the margin of error of a 95% interval in half without changing confidence. The sample size must be multiplied by…",
                "zh": "一位研究者希望在不改变置信水平的情况下把 95% 区间的误差幅度减半。样本量必须乘以……"
              },
              "choices": [
                "2",
                "1/2",
                "$\\sqrt{2}$",
                "4"
              ],
              "answer": 3,
              "explanation": {
                "en": "The margin of error is proportional to $1/\\sqrt{n}$, so halving it requires $\\sqrt{n}$ to double, meaning $n$ must be multiplied by 4. Doubling $n$ only reduces the margin by a factor of $1/\\sqrt{2}$.",
                "zh": "误差幅度与 $1/\\sqrt{n}$ 成正比，故要将其减半需要 $\\sqrt{n}$ 翻倍，即 $n$ 必须乘以 4。仅把 $n$ 翻倍只能把误差幅度缩小到 $1/\\sqrt{2}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a random sample of 500 households, 160 own a pet. Find the margin of error for a 95% confidence interval for $p$ ($z^{*} = 1.960$). Round to 3 decimals.",
                "zh": "在 500 户家庭的随机样本中，有 160 户养宠物。求 $p$ 的 95% 置信区间的误差幅度（$z^{*} = 1.960$）。保留 3 位小数。"
              },
              "answer": "0.041",
              "accept": [
                "0.041",
                ".041",
                "0.0409",
                "0.040"
              ],
              "explanation": {
                "en": "$\\hat{p} = 160/500 = 0.32$. $ME = 1.960\\sqrt{0.32(0.68)/500} = 1.960(0.02086) = 0.0409 \\approx 0.041$.",
                "zh": "$\\hat{p} = 160/500 = 0.32$。$ME = 1.960\\sqrt{0.32(0.68)/500} = 1.960(0.02086) = 0.0409 \\approx 0.041$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "You want to estimate a proportion with margin of error 0.04 at 95% confidence, using the conservative $\\hat{p} = 0.5$. What is the minimum required sample size? Enter a whole number.",
                "zh": "你想以 95% 置信水平、误差幅度 0.04 估计一个比例，采用保守值 $\\hat{p} = 0.5$。所需最小样本量是多少？输入一个整数。"
              },
              "answer": "601",
              "accept": [
                "601",
                "600.25 rounded up",
                "601 people"
              ],
              "explanation": {
                "en": "$n \\ge (1.960/0.04)^2(0.25) = (49)^2(0.25) = 2401(0.25) = 600.25$. Round UP to 601.",
                "zh": "$n \\ge (1.960/0.04)^2(0.25) = (49)^2(0.25) = 2401(0.25) = 600.25$。向上取整得 601。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the critical value $z^{*}$ used for a 99% confidence interval? Enter the standard value to 3 decimals.",
                "zh": "99% 置信区间使用的临界值 $z^{*}$ 是多少？输入标准值，保留 3 位小数。"
              },
              "answer": "2.576",
              "accept": [
                "2.576",
                "2.58",
                "2.575",
                "2.5758"
              ],
              "explanation": {
                "en": "For 99% confidence, 0.5% is in each tail, so $z^{*} = 2.576$. (Compare 1.645 for 90% and 1.960 for 95%.)",
                "zh": "99% 置信水平下，每侧尾部有 0.5%，故 $z^{*} = 2.576$。（对比 90% 的 1.645 与 95% 的 1.960。）"
              }
            }
          ]
        },
        {
          "id": "significance-tests-for-proportions",
          "title": "Significance Tests for Proportions",
          "titleZh": "比例的显著性检验",
          "content": [
            {
              "type": "h2",
              "en": "The Logic of Hypothesis Testing",
              "zh": "假设检验的逻辑"
            },
            {
              "type": "p",
              "en": "A significance test weighs evidence against a claim about a parameter. We start with a null hypothesis $H_0$ (a statement of \"no effect\" or \"no difference,\" usually $p = p_0$) and an alternative hypothesis $H_a$ (what we suspect is true, such as $p > p_0$, $p < p_0$, or $p \\ne p_0$). We then ask: if $H_0$ were true, how surprising is our observed data?",
              "zh": "显著性检验衡量反对某个参数论断的证据。我们从原假设 $H_0$（表示\"无效应\"或\"无差异\"，通常为 $p = p_0$）与备择假设 $H_a$（我们怀疑为真的情况，如 $p > p_0$、$p < p_0$ 或 $p \\ne p_0$）出发。然后问：若 $H_0$ 为真，我们观测到的数据有多令人意外？"
            },
            {
              "type": "p",
              "en": "The P-value answers exactly that question. It is the probability, assuming $H_0$ is true, of getting a sample result at least as extreme as the one observed. A small P-value means the data would be very unlikely if $H_0$ were true, giving evidence against $H_0$.",
              "zh": "P值正好回答这个问题。它是在假设 $H_0$ 为真的前提下，得到至少与观测结果一样极端的样本结果的概率。P值小意味着若 $H_0$ 为真则数据极不可能出现，从而构成反对 $H_0$ 的证据。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Choose a significance level $\\alpha$ (often 0.05) before looking at the data. It is the threshold for how much evidence we demand.",
                  "zh": "在查看数据前选定显著性水平 $\\alpha$（常为 0.05）。它是我们要求的证据强度的门槛。"
                },
                {
                  "en": "If P-value $\\le \\alpha$: reject $H_0$. There is convincing evidence for $H_a$.",
                  "zh": "若 P值 $\\le \\alpha$：拒绝 $H_0$。有足够证据支持 $H_a$。"
                },
                {
                  "en": "If P-value $> \\alpha$: fail to reject $H_0$. There is NOT convincing evidence for $H_a$ (we never \"accept\" $H_0$).",
                  "zh": "若 P值 $> \\alpha$：不拒绝 $H_0$。没有足够证据支持 $H_a$（我们从不\"接受\" $H_0$）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Correct P-value interpretation: a P-value is the probability of getting data this extreme OR MORE extreme ASSUMING $H_0$ is true. It is NOT the probability that $H_0$ is true, and NOT the probability the result happened \"by chance.\" On the AP exam, always state the P-value as a conditional probability given $H_0$.",
              "zh": "P值的正确解释：P值是在假设 $H_0$ 为真的前提下，得到如此极端或更极端数据的概率。它不是 $H_0$ 为真的概率，也不是结果\"纯属偶然\"的概率。AP 考试中务必把 P值表述为在 $H_0$ 下的条件概率。"
            },
            {
              "type": "h3",
              "en": "The One-Sample $z$-Test for a Proportion",
              "zh": "比例的单样本 $z$ 检验"
            },
            {
              "type": "p",
              "en": "To test $H_0: p = p_0$, first check the conditions, then compute a standardized test statistic. Crucially, the standard deviation uses the HYPOTHESIZED value $p_0$ (not $\\hat{p}$), because we compute everything assuming $H_0$ is true.",
              "zh": "要检验 $H_0: p = p_0$，先检查条件，再计算一个标准化的检验统计量。关键在于，标准差使用假设值 $p_0$（而非 $\\hat{p}$），因为我们的一切计算都假定 $H_0$ 为真。"
            },
            {
              "type": "math",
              "tex": "z = \\dfrac{\\hat{p} - p_0}{\\sqrt{\\dfrac{p_0(1-p_0)}{n}}}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Random: data from a random sample or randomized experiment.",
                  "zh": "随机（Random）：数据来自随机样本或随机化实验。"
                },
                {
                  "en": "10% condition: $n \\le 0.10N$ when sampling without replacement.",
                  "zh": "10% 条件：无放回抽样时 $n \\le 0.10N$。"
                },
                {
                  "en": "Large Counts: use the HYPOTHESIZED value here — $np_0 \\ge 10$ and $n(1-p_0) \\ge 10$.",
                  "zh": "大计数（Large Counts）：此处使用假设值——$np_0 \\ge 10$ 且 $n(1-p_0) \\ge 10$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: using $\\hat{p}$ instead of $p_0$ in the standard deviation of the test statistic. In a TEST you assume $H_0$ is true, so the standard deviation is $\\sqrt{p_0(1-p_0)/n}$. (An interval, by contrast, uses $\\hat{p}$ because there is no hypothesized value.)",
              "zh": "常见错误：在检验统计量的标准差中用 $\\hat{p}$ 代替 $p_0$。检验中假定 $H_0$ 为真，故标准差为 $\\sqrt{p_0(1-p_0)/n}$。（相比之下，置信区间用 $\\hat{p}$，因为没有假设值。）"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: One-sample $z$-test",
                "zh": "例题 1：单样本 $z$ 检验"
              },
              "problem": {
                "en": "A company claims 80% of its deliveries arrive on time. A consumer group suspects the true rate is lower and inspects a random sample of 200 deliveries, finding 148 on time. Test at $\\alpha = 0.05$ whether the on-time rate is below 80%.",
                "zh": "某公司声称其 80% 的配送准时到达。一个消费者组织怀疑真实比率更低，检查了 200 次配送的随机样本，发现 148 次准时。在 $\\alpha = 0.05$ 下检验准时率是否低于 80%。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Hypotheses: $H_0: p = 0.80$ versus $H_a: p < 0.80$, where $p$ is the true proportion of on-time deliveries. Conditions: random sample; assume more than 2000 deliveries (10%); Large Counts $np_0 = 200(0.80) = 160 \\ge 10$ and $n(1-p_0) = 40 \\ge 10$.",
                  "zh": "假设：$H_0: p = 0.80$ 对 $H_a: p < 0.80$，其中 $p$ 为准时配送的真实比例。条件：随机样本；假设配送多于 2000 次（10%）；大计数 $np_0 = 200(0.80) = 160 \\ge 10$ 且 $n(1-p_0) = 40 \\ge 10$。"
                },
                {
                  "type": "math",
                  "tex": "\\hat{p} = \\dfrac{148}{200} = 0.74, \\quad z = \\dfrac{0.74 - 0.80}{\\sqrt{\\dfrac{0.80(0.20)}{200}}} = \\dfrac{-0.06}{0.02828} = -2.12"
                },
                {
                  "type": "p",
                  "en": "Because $H_a$ is one-sided ($<$), the P-value is $P(Z < -2.12) = 0.017$. Since $0.017 \\le 0.05$, we reject $H_0$. There is convincing evidence that the true on-time delivery rate is below 80%.",
                  "zh": "由于 $H_a$ 是单侧（$<$），P值为 $P(Z < -2.12) = 0.017$。因为 $0.017 \\le 0.05$，我们拒绝 $H_0$。有足够证据表明真实准时配送率低于 80%。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Type I and Type II Errors and Power",
              "zh": "第一类与第二类错误及检验功效"
            },
            {
              "type": "p",
              "en": "Because we decide based on a sample, we can be wrong in two ways. A Type I error is rejecting $H_0$ when $H_0$ is actually true (a \"false alarm\"). A Type II error is failing to reject $H_0$ when $H_a$ is actually true (a \"missed detection\"). These errors trade off against each other.",
              "zh": "由于我们依据样本作决定，可能有两种错误。第一类错误（Type I）是当 $H_0$ 实际为真时却拒绝了它（\"假警报\"）。第二类错误（Type II）是当 $H_a$ 实际为真时却未能拒绝 $H_0$（\"漏检\"）。这两类错误彼此权衡。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "The probability of a Type I error equals the significance level $\\alpha$. Lowering $\\alpha$ reduces false alarms but makes it harder to detect a real effect.",
                  "zh": "第一类错误的概率等于显著性水平 $\\alpha$。降低 $\\alpha$ 减少假警报，但更难探测到真实效应。"
                },
                {
                  "en": "The probability of a Type II error is denoted $\\beta$. The power of a test is $1 - \\beta$: the probability of correctly rejecting $H_0$ when $H_a$ is true.",
                  "zh": "第二类错误的概率记为 $\\beta$。检验的功效（power）为 $1 - \\beta$：当 $H_a$ 为真时正确拒绝 $H_0$ 的概率。"
                },
                {
                  "en": "Power increases when: the sample size $n$ is larger, $\\alpha$ is larger, or the true parameter is farther from $p_0$ (a bigger effect is easier to detect).",
                  "zh": "功效增大的情形：样本量 $n$ 更大、$\\alpha$ 更大，或真实参数离 $p_0$ 更远（更大的效应更易探测）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: describe errors IN CONTEXT and name their consequence. For the delivery example, a Type I error means concluding the on-time rate is below 80% when it truly is 80% (unfairly accusing the company); a Type II error means failing to detect a genuinely low rate (letting poor service slide).",
              "zh": "AP 提示：结合情境描述错误并说明其后果。对配送例子，第一类错误是当真实准时率确为 80% 时却断定其低于 80%（冤枉了公司）；第二类错误是未能探测到确实偏低的比率（放任了糟糕的服务）。"
            },
            {
              "type": "h3",
              "en": "The Two-Sample $z$-Test for a Difference in Proportions",
              "zh": "两比例之差的双样本 $z$ 检验"
            },
            {
              "type": "p",
              "en": "To compare two proportions we usually test $H_0: p_1 = p_2$ (equivalently $p_1 - p_2 = 0$). Since $H_0$ says the proportions are equal, we combine both samples into a pooled (combined) proportion $\\hat{p}_C$ to estimate that common value, and use it in the standard error.",
              "zh": "要比较两个比例，我们通常检验 $H_0: p_1 = p_2$（等价于 $p_1 - p_2 = 0$）。由于 $H_0$ 认为两比例相等，我们把两个样本合并成一个合并比例 $\\hat{p}_C$ 来估计这个共同值，并用于标准误。"
            },
            {
              "type": "math",
              "tex": "\\hat{p}_C = \\dfrac{X_1 + X_2}{n_1 + n_2}, \\quad z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}_C(1-\\hat{p}_C)\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)}}"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting to pool. The two-sample $z$-TEST for a difference uses the combined proportion $\\hat{p}_C$ in the standard error (because $H_0$ assumes the proportions are equal). The two-sample INTERVAL does NOT pool — it uses each $\\hat{p}$ separately. Match the formula to the procedure.",
              "zh": "常见错误：忘记合并。双样本差值 $z$ 检验在标准误中使用合并比例 $\\hat{p}_C$（因为 $H_0$ 假定两比例相等）。双样本区间不合并——它分别使用各自的 $\\hat{p}$。请让公式与所用程序匹配。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Two-sample $z$-test",
                "zh": "例题 2：双样本 $z$ 检验"
              },
              "problem": {
                "en": "A new teaching method is tested. In a random sample of 120 students taught the new way, 78 passed; in an independent random sample of 100 students taught the old way, 55 passed. Is there evidence at $\\alpha = 0.05$ that the pass proportions differ?",
                "zh": "测试一种新教学法。在用新法教学的 120 名学生随机样本中，78 人通过；在用旧法教学的 100 名学生独立随机样本中，55 人通过。在 $\\alpha = 0.05$ 下是否有证据表明通过比例不同？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Hypotheses: $H_0: p_1 = p_2$ versus $H_a: p_1 \\ne p_2$. $\\hat{p}_1 = 78/120 = 0.65$, $\\hat{p}_2 = 55/100 = 0.55$. Conditions: both random and independent; each under 10%; all counts (78, 42, 55, 45) $\\ge 10$. Pooled proportion:",
                  "zh": "假设：$H_0: p_1 = p_2$ 对 $H_a: p_1 \\ne p_2$。$\\hat{p}_1 = 78/120 = 0.65$，$\\hat{p}_2 = 55/100 = 0.55$。条件：两样本随机且独立；各不足 10%；所有计数（78、42、55、45）均 $\\ge 10$。合并比例："
                },
                {
                  "type": "math",
                  "tex": "\\hat{p}_C = \\dfrac{78 + 55}{120 + 100} = \\dfrac{133}{220} = 0.6045"
                },
                {
                  "type": "math",
                  "tex": "z = \\dfrac{0.65 - 0.55}{\\sqrt{0.6045(0.3955)\\left(\\dfrac{1}{120} + \\dfrac{1}{100}\\right)}} = \\dfrac{0.10}{0.0662} = 1.51"
                },
                {
                  "type": "p",
                  "en": "Because $H_a$ is two-sided, the P-value is $2 \\times P(Z > 1.51) = 2(0.0655) = 0.131$. Since $0.131 > 0.05$, we fail to reject $H_0$. There is not convincing evidence that the pass proportions differ between the two methods.",
                  "zh": "由于 $H_a$ 是双侧的，P值为 $2 \\times P(Z > 1.51) = 2(0.0655) = 0.131$。因为 $0.131 > 0.05$，我们不拒绝 $H_0$。没有足够证据表明两种方法的通过比例不同。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A test gives a P-value of 0.03. Which is the correct interpretation?",
                "zh": "某检验给出 P值 0.03。哪个解释正确？"
              },
              "choices": [
                "There is a 3% probability that $H_0$ is true / $H_0$ 为真的概率是 3%",
                "There is a 3% chance the result is due to chance / 结果出于偶然的概率是 3%",
                "The alternative hypothesis is true with probability 0.97 / 备择假设为真的概率是 0.97",
                "Assuming $H_0$ is true, there is a 3% chance of getting a result at least this extreme / 假设 $H_0$ 为真，得到至少这么极端结果的概率是 3%"
              ],
              "answer": 3,
              "explanation": {
                "en": "A P-value is computed ASSUMING $H_0$ is true; it is the probability of data at least as extreme as observed. It is not the probability that $H_0$ (or $H_a$) is true, and \"due to chance\" is a vague misstatement of this conditional probability.",
                "zh": "P值是在假设 $H_0$ 为真的前提下计算的；它是得到至少与观测同样极端数据的概率。它不是 $H_0$（或 $H_a$）为真的概率，\"出于偶然\"是对这一条件概率的含糊误述。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the standard deviation of the one-sample $z$-test statistic for a proportion, which value is used?",
                "zh": "在比例的单样本 $z$ 检验统计量的标准差中，使用哪个值？"
              },
              "choices": [
                "The sample proportion $\\hat{p}$ / 样本比例 $\\hat{p}$",
                "The average of $\\hat{p}$ and $p_0$ / $\\hat{p}$ 与 $p_0$ 的平均",
                "The hypothesized proportion $p_0$ / 假设比例 $p_0$",
                "The margin of error / 误差幅度"
              ],
              "answer": 2,
              "explanation": {
                "en": "A significance test assumes $H_0$ is true, so the standard deviation uses the hypothesized $p_0$: $\\sqrt{p_0(1-p_0)/n}$. Using $\\hat{p}$ is the rule for a confidence interval, not a test.",
                "zh": "显著性检验假定 $H_0$ 为真，故标准差使用假设值 $p_0$：$\\sqrt{p_0(1-p_0)/n}$。用 $\\hat{p}$ 是置信区间的规则，而非检验。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A researcher fails to reject $H_0$ when in fact $H_a$ is true. This is…",
                "zh": "一位研究者在 $H_a$ 实际为真时未能拒绝 $H_0$。这是……"
              },
              "choices": [
                "a Type I error / 第一类错误",
                "a correct decision / 正确决定",
                "a Type II error / 第二类错误",
                "an increase in power / 功效提高"
              ],
              "answer": 2,
              "explanation": {
                "en": "Failing to reject a false $H_0$ (missing a real effect) is a Type II error, with probability $\\beta$. A Type I error is the opposite: rejecting a true $H_0$. Power is $1 - \\beta$, the chance of correctly rejecting.",
                "zh": "当 $H_0$ 为假时未能拒绝它（漏掉真实效应）是第二类错误，概率为 $\\beta$。第一类错误正相反：拒绝了为真的 $H_0$。功效为 $1 - \\beta$，即正确拒绝的概率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which change would INCREASE the power of a significance test?",
                "zh": "哪种改变会提高显著性检验的功效？"
              },
              "choices": [
                "Increasing the sample size $n$ / 增大样本量 $n$",
                "Decreasing $\\alpha$ from 0.05 to 0.01 / 将 $\\alpha$ 从 0.05 降到 0.01",
                "Taking the true parameter closer to $p_0$ / 使真实参数更接近 $p_0$",
                "Reducing the sample size $n$ / 减小样本量 $n$"
              ],
              "answer": 0,
              "explanation": {
                "en": "A larger sample size gives more information, raising power. Lowering $\\alpha$ makes rejection harder (lower power); an effect closer to $p_0$ is harder to detect (lower power); a smaller sample also lowers power.",
                "zh": "更大的样本量提供更多信息，从而提高功效。降低 $\\alpha$ 使拒绝更难（功效更低）；效应离 $p_0$ 更近更难探测（功效更低）；样本更小也降低功效。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a two-sample $z$-test of $H_0: p_1 = p_2$, why do we compute a pooled proportion $\\hat{p}_C$?",
                "zh": "对 $H_0: p_1 = p_2$ 的双样本 $z$ 检验，为什么要计算合并比例 $\\hat{p}_C$？"
              },
              "choices": [
                "To make the two sample sizes equal / 使两个样本量相等",
                "Because $H_0$ assumes the proportions are equal, so we estimate one common value / 因为 $H_0$ 假定两比例相等，故估计一个共同值",
                "To widen the confidence interval / 加宽置信区间",
                "Because pooling is required for every two-sample procedure / 因为每个双样本程序都要求合并"
              ],
              "answer": 1,
              "explanation": {
                "en": "Under $H_0$ the two proportions are equal, so the best estimate of that shared value combines all successes over all trials into $\\hat{p}_C$. The two-sample interval, which makes no such assumption, does not pool.",
                "zh": "在 $H_0$ 下两比例相等，故对该共同值的最佳估计是把所有试验的成功数合并为 $\\hat{p}_C$。不作此假定的双样本区间则不合并。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "To test $H_0: p = 0.30$ against $H_a: p \\ne 0.30$, a random sample of $n = 150$ gives $\\hat{p} = 0.36$. Compute the test statistic $z$. Round to 2 decimals.",
                "zh": "为检验 $H_0: p = 0.30$ 对 $H_a: p \\ne 0.30$，$n = 150$ 的随机样本给出 $\\hat{p} = 0.36$。计算检验统计量 $z$。保留 2 位小数。"
              },
              "answer": "1.60",
              "accept": [
                "1.60",
                "1.6",
                "1.59",
                "1.604"
              ],
              "explanation": {
                "en": "Use $p_0 = 0.30$: $z = (0.36 - 0.30)/\\sqrt{0.30(0.70)/150} = 0.06/\\sqrt{0.0014} = 0.06/0.03742 = 1.60$.",
                "zh": "用 $p_0 = 0.30$：$z = (0.36 - 0.30)/\\sqrt{0.30(0.70)/150} = 0.06/\\sqrt{0.0014} = 0.06/0.03742 = 1.60$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A one-sided test ($H_a: p > p_0$) produces $z = 1.88$. Find the P-value. Round to 3 decimals.",
                "zh": "一个单侧检验（$H_a: p > p_0$）得到 $z = 1.88$。求 P值。保留 3 位小数。"
              },
              "answer": "0.030",
              "accept": [
                "0.030",
                ".030",
                "0.03",
                "0.0301"
              ],
              "explanation": {
                "en": "For $H_a: p > p_0$ the P-value is the right-tail area $P(Z > 1.88) = 1 - 0.9699 = 0.0301 \\approx 0.030$.",
                "zh": "对 $H_a: p > p_0$，P值是右尾面积 $P(Z > 1.88) = 1 - 0.9699 = 0.0301 \\approx 0.030$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name for the probability of committing a Type I error in a significance test? (Give the symbol or the term.)",
                "zh": "显著性检验中犯第一类错误的概率叫什么？（给出符号或术语。）"
              },
              "answer": "alpha",
              "accept": [
                "alpha",
                "α",
                "significance level",
                "the significance level",
                "alpha (significance level)",
                "显著性水平"
              ],
              "explanation": {
                "en": "The probability of a Type I error (rejecting a true $H_0$) equals the significance level $\\alpha$ chosen in advance. The probability of a Type II error is $\\beta$.",
                "zh": "第一类错误（拒绝为真的 $H_0$）的概率等于事先选定的显著性水平 $\\alpha$。第二类错误的概率为 $\\beta$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "inference-means",
      "title": "Unit 7: Inference for Quantitative Data: Means",
      "titleZh": "第七单元：定量数据的推断——均值",
      "lessons": [
        {
          "id": "confidence-intervals-for-means",
          "title": "Confidence Intervals for Means",
          "titleZh": "均值的置信区间",
          "content": [
            {
              "type": "h2",
              "en": "From Proportions to Means",
              "zh": "从比例到均值"
            },
            {
              "type": "p",
              "en": "In Unit 6 you estimated a population proportion $p$. Now the parameter of interest is a population mean $\\mu$ — the true average of a quantitative variable, such as the mean commute time for all workers in a city or the mean sodium content of all bags of a chip brand. The natural estimate is the sample mean $\\bar{x}$, and around it we build a confidence interval: an interval of plausible values for $\\mu$ produced by a method that captures the true parameter in a stated percentage of samples.",
              "zh": "在第六单元中你估计的是总体比例 $p$。现在关心的参数是总体均值 $\\mu$——某个数量变量的真实平均值，例如一座城市所有工人的平均通勤时间，或某品牌薯片所有袋装的平均钠含量。自然的估计量是样本均值 $\\bar{x}$，我们围绕它构造置信区间：由一种方法给出的一段包含参数的合理取值范围，该方法在一定比例的样本中能够覆盖真实参数。"
            },
            {
              "type": "p",
              "en": "Every confidence interval in this unit has the same shape: statistic plus-or-minus a margin of error, where the margin of error is a critical value times the standard error of the statistic.",
              "zh": "本单元中每一个置信区间都具有相同的结构：统计量加减误差范围，其中误差范围等于临界值乘以统计量的标准误差。"
            },
            {
              "type": "math",
              "tex": "\\text{statistic} \\pm (\\text{critical value}) \\times (\\text{standard error})"
            },
            {
              "type": "h2",
              "en": "Why the t-Distribution?",
              "zh": "为什么使用 t 分布？"
            },
            {
              "type": "p",
              "en": "The sampling distribution of $\\bar{x}$ has standard deviation $\\sigma/\\sqrt{n}$. But in real problems we almost never know the population standard deviation $\\sigma$. We replace it with the sample standard deviation $s$, giving the standard error $s/\\sqrt{n}$. Because $s$ varies from sample to sample, this extra uncertainty makes the standardized statistic follow a t-distribution instead of the standard Normal.",
              "zh": "$\\bar{x}$ 的抽样分布标准差为 $\\sigma/\\sqrt{n}$。但在实际问题中我们几乎从不知道总体标准差 $\\sigma$。于是用样本标准差 $s$ 代替它，得到标准误差 $s/\\sqrt{n}$。由于 $s$ 会随样本变化，这额外的不确定性使标准化统计量服从 t 分布，而不是标准正态分布。"
            },
            {
              "type": "math",
              "tex": "t = \\frac{\\bar{x} - \\mu}{s/\\sqrt{n}}"
            },
            {
              "type": "p",
              "en": "A t-distribution is bell-shaped and centered at 0 like the Normal, but it has more probability in the tails, so it is shorter in the middle and fatter in the tails. Its exact shape depends on the degrees of freedom (df). For a one-sample procedure, $df = n - 1$. As df grows, the t-distribution looks more and more like the standard Normal; with df above roughly 30 they are nearly identical, and with df around 100 they are almost indistinguishable.",
              "zh": "t 分布像正态分布一样呈钟形且以 0 为中心，但尾部概率更多，因此中间更矮、尾部更胖。它的确切形状取决于自由度（df）。对于单样本程序，$df = n - 1$。随着自由度增大，t 分布越来越接近标准正态分布；当 df 超过约 30 时二者已很接近，当 df 约为 100 时几乎无法区分。"
            },
            {
              "type": "note",
              "en": "AP tip: because the t-distribution has fatter tails, the critical value $t^*$ is always larger than the corresponding Normal $z^*$ for the same confidence level. That makes the t-interval a bit wider — the price we pay for not knowing $\\sigma$. Never use $z^*$ for a mean when $\\sigma$ is unknown.",
              "zh": "AP 提示：由于 t 分布尾部更胖，对于同一置信水平，临界值 $t^*$ 总是大于相应的正态临界值 $z^*$。这使得 t 区间略宽一些——这是我们不知道 $\\sigma$ 所付出的代价。当 $\\sigma$ 未知时，对均值绝不要使用 $z^*$。"
            },
            {
              "type": "h3",
              "en": "The One-Sample t-Interval",
              "zh": "单样本 t 区间"
            },
            {
              "type": "p",
              "en": "To estimate a single population mean $\\mu$, the confidence interval is:",
              "zh": "要估计单个总体均值 $\\mu$，置信区间为："
            },
            {
              "type": "math",
              "tex": "\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}, \\qquad df = n - 1"
            },
            {
              "type": "p",
              "en": "Before computing, always check three conditions and name them in your work:",
              "zh": "在计算之前，务必检查三个条件并在解答中写明它们："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Random: the data come from a random sample (or a randomized experiment). This lets us generalize to the population.",
                  "zh": "随机（Random）：数据来自随机样本（或随机化实验）。这使我们能够推广到总体。"
                },
                {
                  "en": "10% condition: when sampling without replacement, the sample size is at most 10% of the population, $n \\le 0.10 N$. This keeps the observations approximately independent.",
                  "zh": "10% 条件：当无放回抽样时，样本量至多为总体的 10%，即 $n \\le 0.10 N$。这使观测值近似独立。"
                },
                {
                  "en": "Normal / Large Sample: the population is Normal, OR $n \\ge 30$ (Central Limit Theorem), OR for smaller $n$ a dotplot/boxplot of the data shows no strong skew and no outliers.",
                  "zh": "正态 / 大样本：总体服从正态分布，或 $n \\ge 30$（中心极限定理），或当 $n$ 较小时数据的点图/箱线图无明显偏斜且无离群值。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: One-Sample t-Interval",
                "zh": "例题 1：单样本 t 区间"
              },
              "problem": {
                "en": "A random sample of 20 batteries of one brand is tested. The lifetimes (in hours) have mean $\\bar{x} = 18.4$ and standard deviation $s = 2.5$. A dotplot of the 20 values is roughly symmetric with no outliers. Construct a 95% confidence interval for the mean lifetime $\\mu$ of all batteries of this brand.",
                "zh": "对某品牌的 20 节电池进行随机抽样测试。寿命（小时）的均值为 $\\bar{x} = 18.4$，标准差为 $s = 2.5$。这 20 个值的点图大致对称且无离群值。为该品牌所有电池的平均寿命 $\\mu$ 构造 95% 置信区间。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Conditions: Random (stated random sample); 10% (20 batteries is well under 10% of all batteries produced); Normal/Large Sample ($n=20<30$, but the dotplot is symmetric with no outliers, so the t-procedure is safe).",
                  "zh": "条件：随机（题目说明是随机样本）；10%（20 节电池远小于全部产量的 10%）；正态/大样本（$n=20<30$，但点图对称且无离群值，因此 t 程序适用）。"
                },
                {
                  "type": "p",
                  "en": "Use a one-sample t-interval with $df = 20 - 1 = 19$. For 95% confidence, $t^* = 2.093$.",
                  "zh": "使用单样本 t 区间，$df = 20 - 1 = 19$。对于 95% 置信水平，$t^* = 2.093$。"
                },
                {
                  "type": "math",
                  "tex": "18.4 \\pm 2.093 \\cdot \\frac{2.5}{\\sqrt{20}} = 18.4 \\pm 1.17"
                },
                {
                  "type": "p",
                  "en": "The interval is about $(17.23,\\ 19.57)$ hours. Interpretation: we are 95% confident that the interval from 17.23 to 19.57 hours captures the true mean lifetime of all batteries of this brand.",
                  "zh": "区间约为 $(17.23,\\ 19.57)$ 小时。解释：我们有 95% 的把握，认为从 17.23 到 19.57 小时的这个区间包含了该品牌所有电池的真实平均寿命。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: interpreting the interval as \"95% of batteries last between 17.23 and 19.57 hours,\" or \"there is a 95% probability that $\\mu$ is in this interval.\" The interval is about the MEAN, not individual batteries, and once computed the interval either does or does not contain $\\mu$. The 95% describes the long-run success rate of the METHOD across many samples.",
              "zh": "常见错误：把区间解释为“95% 的电池寿命在 17.23 到 19.57 小时之间”，或“$\\mu$ 落在此区间的概率为 95%”。区间描述的是均值，而非单个电池；一旦算出，区间要么包含 $\\mu$ 要么不包含。95% 描述的是该方法在多次抽样中长期的成功率。"
            },
            {
              "type": "h3",
              "en": "The Paired t-Interval",
              "zh": "配对 t 区间"
            },
            {
              "type": "p",
              "en": "Sometimes the data come in matched pairs: two measurements on the same subject (before/after), or on naturally linked pairs (twins, left/right hands). For paired data we do NOT treat the two lists as independent samples. Instead we compute the difference within each pair, then build a one-sample t-interval on those differences.",
              "zh": "有时数据以配对形式出现：对同一对象的两次测量（前/后），或对天然关联的成对个体（双胞胎、左右手）的测量。对于配对数据，我们不把两列数据当作独立样本，而是先算出每一对内部的差值，再对这些差值构造单样本 t 区间。"
            },
            {
              "type": "math",
              "tex": "\\bar{x}_d \\pm t^* \\frac{s_d}{\\sqrt{n}}, \\qquad df = n - 1"
            },
            {
              "type": "p",
              "en": "Here $n$ is the number of PAIRS, $\\bar{x}_d$ is the mean of the differences, and $s_d$ is the standard deviation of the differences. The conditions are the same three as before, checked on the list of differences.",
              "zh": "这里 $n$ 是对数，$\\bar{x}_d$ 是差值的均值，$s_d$ 是差值的标准差。条件仍是前面那三条，只是针对差值列表来检查。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Paired t-Interval",
                "zh": "例题 2：配对 t 区间"
              },
              "problem": {
                "en": "Ten volunteers each take a typing test before and after a training course. For each person the improvement (after minus before, in words per minute) is recorded. The 10 improvements have mean $\\bar{x}_d = 6.3$ wpm and standard deviation $s_d = 4.1$ wpm, with a roughly symmetric distribution. Construct a 90% confidence interval for the mean improvement.",
                "zh": "十名志愿者在培训课程前后各做一次打字测试。记录每人的进步量（后减前，单位为每分钟字数 wpm）。这 10 个进步量的均值为 $\\bar{x}_d = 6.3$ wpm，标准差为 $s_d = 4.1$ wpm，分布大致对称。为平均进步量构造 90% 置信区间。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This is paired data (two measurements per person), so use a paired t-interval on the differences. Conditions: the volunteers are treated as a random sample of improvements; 10% is reasonable; the distribution of differences is symmetric with no outliers. Use $df = 10 - 1 = 9$, and for 90% confidence $t^* = 1.833$.",
                  "zh": "这是配对数据（每人两次测量），因此对差值使用配对 t 区间。条件：将志愿者视为进步量的随机样本；10% 条件合理；差值分布对称且无离群值。取 $df = 10 - 1 = 9$，对于 90% 置信水平 $t^* = 1.833$。"
                },
                {
                  "type": "math",
                  "tex": "6.3 \\pm 1.833 \\cdot \\frac{4.1}{\\sqrt{10}} = 6.3 \\pm 2.38"
                },
                {
                  "type": "p",
                  "en": "The interval is about $(3.92,\\ 8.68)$ wpm. We are 90% confident that this interval captures the true mean improvement in typing speed for people like these after the course. Because the entire interval is positive, there is convincing evidence the course helps on average.",
                  "zh": "区间约为 $(3.92,\\ 8.68)$ wpm。我们有 90% 的把握，认为此区间包含了此类人群参加课程后打字速度的真实平均进步量。由于整个区间都为正，因此有充分证据表明课程平均而言是有帮助的。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Two-Sample t-Interval",
              "zh": "双样本 t 区间"
            },
            {
              "type": "p",
              "en": "To compare two INDEPENDENT groups — for example men versus women, or a treatment group versus a control group — we estimate the difference in population means $\\mu_1 - \\mu_2$. The interval combines the two standard errors:",
              "zh": "要比较两个独立组——例如男性与女性，或处理组与对照组——我们估计总体均值之差 $\\mu_1 - \\mu_2$。区间将两个标准误差合并："
            },
            {
              "type": "math",
              "tex": "(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}"
            },
            {
              "type": "p",
              "en": "The conditions must hold for BOTH samples: each is random, each satisfies the 10% condition, and each satisfies the Normal/Large Sample condition. The degrees of freedom come from a messy formula that technology computes; on the AP exam you may instead use the conservative df = the smaller of $n_1 - 1$ and $n_2 - 1$. Note that the two groups need not have the same sample size.",
              "zh": "两个样本都必须满足条件：各自随机、各自满足 10% 条件、各自满足正态/大样本条件。自由度来自一个复杂公式，由计算器算出；在 AP 考试中你也可以使用保守取法 df = $n_1 - 1$ 与 $n_2 - 1$ 中较小者。注意两组的样本量不必相等。"
            },
            {
              "type": "note",
              "en": "AP tip: decide paired vs. two-sample by asking whether each value in one group is naturally linked to one specific value in the other. Same subjects measured twice, or matched pairs = paired (one list of differences). Two separate independent groups = two-sample. Choosing the wrong procedure is one of the most common errors on the exam.",
              "zh": "AP 提示：判断配对还是双样本，要问一组中的每个值是否与另一组中某个特定值天然关联。同一对象测量两次，或成对匹配 = 配对（一列差值）。两个独立分开的组 = 双样本。选错程序是考试中最常见的错误之一。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Two-Sample t-Interval",
                "zh": "例题 3：双样本 t 区间"
              },
              "problem": {
                "en": "A researcher compares battery life of two laptop brands. A random sample of 12 Brand A laptops gives $\\bar{x}_1 = 9.8$ hours with $s_1 = 1.2$; an independent random sample of 15 Brand B laptops gives $\\bar{x}_2 = 8.9$ hours with $s_2 = 1.5$. Both samples look roughly symmetric. Construct a 95% confidence interval for $\\mu_1 - \\mu_2$ using the conservative df.",
                "zh": "一名研究者比较两个笔记本品牌的电池续航。随机抽取 12 台 A 品牌笔记本得 $\\bar{x}_1 = 9.8$ 小时、$s_1 = 1.2$；独立随机抽取 15 台 B 品牌笔记本得 $\\bar{x}_2 = 8.9$ 小时、$s_2 = 1.5$。两个样本看起来都大致对称。使用保守自由度为 $\\mu_1 - \\mu_2$ 构造 95% 置信区间。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Two independent random samples, so use a two-sample t-interval. Conservative $df = \\min(12-1,\\ 15-1) = 11$, giving $t^* = 2.201$ for 95% confidence.",
                  "zh": "两个独立随机样本，因此使用双样本 t 区间。保守自由度 $df = \\min(12-1,\\ 15-1) = 11$，对于 95% 置信水平 $t^* = 2.201$。"
                },
                {
                  "type": "math",
                  "tex": "(9.8 - 8.9) \\pm 2.201 \\sqrt{\\frac{1.2^2}{12} + \\frac{1.5^2}{15}} = 0.9 \\pm 1.14"
                },
                {
                  "type": "p",
                  "en": "The interval is about $(-0.24,\\ 2.04)$ hours. We are 95% confident this interval captures the true difference in mean battery life (Brand A minus Brand B). Because 0 is inside the interval, we do not have convincing evidence that the two brands differ in mean battery life.",
                  "zh": "区间约为 $(-0.24,\\ 2.04)$ 小时。我们有 95% 的把握，认为此区间包含了平均续航的真实差值（A 减 B）。由于 0 落在区间内，我们没有充分证据表明两个品牌的平均续航存在差异。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Why do we use a t-distribution rather than the standard Normal when constructing a confidence interval for a mean?",
                "zh": "为均值构造置信区间时，为什么使用 t 分布而不是标准正态分布？"
              },
              "choices": [
                "Because we do not know the population standard deviation $\\sigma$ and must estimate it with $s$.",
                "Because the sample mean $\\bar{x}$ is biased.",
                "Because the population is never Normal.",
                "Because t-intervals are always narrower than z-intervals."
              ],
              "answer": 0,
              "explanation": {
                "en": "Replacing the unknown $\\sigma$ with the sample $s$ adds extra variability, and the t-distribution accounts for it with its fatter tails. The sample mean is unbiased; the population may well be Normal; and t-intervals are actually wider, not narrower, than the corresponding z-interval.",
                "zh": "用样本 $s$ 代替未知的 $\\sigma$ 会引入额外变异，t 分布通过更胖的尾部来体现这一点。样本均值是无偏的；总体也可能服从正态分布；而且 t 区间实际上比相应的 z 区间更宽而非更窄。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A one-sample t-interval is based on a sample of size $n = 16$. How many degrees of freedom should be used?",
                "zh": "一个单样本 t 区间基于样本量 $n = 16$。应使用多少自由度？"
              },
              "choices": [
                "16",
                "15",
                "17",
                "8"
              ],
              "answer": 1,
              "explanation": {
                "en": "For a one-sample t-procedure the degrees of freedom equal $n - 1 = 16 - 1 = 15$. Using $n$ itself, or half of $n$, is a misreading of the df rule.",
                "zh": "对于单样本 t 程序，自由度等于 $n - 1 = 16 - 1 = 15$。直接使用 $n$ 或 $n$ 的一半都是对自由度规则的误解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A 95% confidence interval for the mean amount of soda in bottles is $(19.8, 20.2)$ ounces. Which interpretation is correct?",
                "zh": "瓶装汽水平均容量的 95% 置信区间为 $(19.8, 20.2)$ 盎司。以下哪种解释正确？"
              },
              "choices": [
                "95% of all bottles contain between 19.8 and 20.2 ounces.",
                "There is a 95% probability that the next bottle contains between 19.8 and 20.2 ounces.",
                "We are 95% confident the interval from 19.8 to 20.2 ounces captures the true mean amount of soda per bottle.",
                "95% of samples will have a mean of exactly 20.0 ounces."
              ],
              "answer": 2,
              "explanation": {
                "en": "A confidence interval is a statement about the population MEAN, produced by a method that succeeds 95% of the time. It says nothing about the percentage of individual bottles, nor about a single future bottle, and sample means vary rather than landing on one exact value.",
                "zh": "置信区间是关于总体均值的陈述，由一种在 95% 的情况下成功的方法给出。它既不说明单个瓶子的百分比，也不说明某一个未来的瓶子，而且样本均值会波动而非恰好落在某一个值上。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A study measures each subject's blood pressure before and after taking a drug, then analyzes the change for each subject. Which procedure is appropriate?",
                "zh": "一项研究测量每名受试者服药前后的血压，然后分析每人的变化量。应使用哪种程序？"
              },
              "choices": [
                "A two-sample t-interval treating before and after as independent groups.",
                "A one-proportion z-interval.",
                "A paired t-interval on the differences.",
                "A two-sample t-interval with pooled variance."
              ],
              "answer": 2,
              "explanation": {
                "en": "The two measurements come from the same subjects, so they are matched pairs; analyze the within-subject differences with a paired t-interval. Treating them as independent groups ignores the pairing, and a proportion procedure does not apply to a quantitative mean.",
                "zh": "两次测量来自同一批受试者，因此是配对数据；应对个体内部的差值使用配对 t 区间。把它们当作独立组会忽略配对结构，而比例程序不适用于数量型均值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a fixed confidence level and sample data, how does the critical value $t^*$ compare to the Normal critical value $z^*$?",
                "zh": "在固定置信水平和样本数据下，临界值 $t^*$ 与正态临界值 $z^*$ 相比如何？"
              },
              "choices": [
                "$t^*$ is always smaller than $z^*$.",
                "$t^*$ equals $z^*$ for every sample size.",
                "$t^*$ can be negative while $z^*$ is positive.",
                "$t^*$ is always larger than $z^*$, approaching it as df increases."
              ],
              "answer": 3,
              "explanation": {
                "en": "Because the t-distribution has fatter tails, $t^*$ exceeds $z^*$ at the same confidence level, and the two converge only as the degrees of freedom grow large. Critical values used for symmetric two-sided intervals are reported as positive numbers.",
                "zh": "由于 t 分布尾部更胖，在相同置信水平下 $t^*$ 大于 $z^*$，两者仅在自由度变得很大时才趋于一致。用于对称双侧区间的临界值均以正数报告。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A random sample of $n = 25$ observations gives $\\bar{x} = 50$ and $s = 10$. Using $t^* = 2.064$ for a 95% interval, what is the margin of error? Round to 3 decimals.",
                "zh": "一个 $n = 25$ 的随机样本得 $\\bar{x} = 50$，$s = 10$。95% 区间使用 $t^* = 2.064$，误差范围是多少？保留三位小数。"
              },
              "answer": "4.128",
              "accept": [
                "4.128",
                "4.13",
                "4.1",
                "±4.128",
                "+/-4.128"
              ],
              "explanation": {
                "en": "The margin of error is $t^* \\cdot s/\\sqrt{n} = 2.064 \\times 10/\\sqrt{25} = 2.064 \\times 2 = 4.128$. A common slip is to divide by $n$ instead of $\\sqrt{n}$, which would wrongly give 0.826.",
                "zh": "误差范围为 $t^* \\cdot s/\\sqrt{n} = 2.064 \\times 10/\\sqrt{25} = 2.064 \\times 2 = 4.128$。常见失误是除以 $n$ 而非 $\\sqrt{n}$，那会错误地得到 0.826。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a two-sample t-interval with sample sizes $n_1 = 10$ and $n_2 = 14$, what is the conservative degrees of freedom (the smaller of $n_1 - 1$ and $n_2 - 1$)?",
                "zh": "在样本量为 $n_1 = 10$ 和 $n_2 = 14$ 的双样本 t 区间中，保守自由度（$n_1 - 1$ 与 $n_2 - 1$ 中较小者）是多少？"
              },
              "answer": "9",
              "accept": [
                "9",
                "df=9",
                "nine"
              ],
              "explanation": {
                "en": "The conservative df is the smaller of $10 - 1 = 9$ and $14 - 1 = 13$, which is 9. Using $n_1 + n_2 - 2 = 22$ would be the pooled df, not the conservative rule.",
                "zh": "保守自由度取 $10 - 1 = 9$ 与 $14 - 1 = 13$ 中较小者，即 9。使用 $n_1 + n_2 - 2 = 22$ 是合并自由度，而非保守规则。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Name the condition, checked when sampling without replacement, that keeps observations approximately independent by requiring the sample to be no more than 10% of the population.",
                "zh": "说出在无放回抽样时检查的那个条件的名称，它要求样本不超过总体的 10%，从而使观测值近似独立。"
              },
              "answer": "10% condition",
              "accept": [
                "10% condition",
                "ten percent condition",
                "10 percent condition",
                "the 10% condition",
                "10%",
                "10% rule"
              ],
              "explanation": {
                "en": "The 10% condition ($n \\le 0.10 N$) allows us to treat observations from sampling without replacement as approximately independent, which the standard error formula requires.",
                "zh": "10% 条件（$n \\le 0.10 N$）使我们能把无放回抽样得到的观测值视为近似独立，这正是标准误差公式所要求的。"
              }
            }
          ]
        },
        {
          "id": "significance-tests-for-means",
          "title": "Significance Tests for Means",
          "titleZh": "均值的显著性检验",
          "content": [
            {
              "type": "h2",
              "en": "Testing Claims About a Mean",
              "zh": "检验关于均值的断言"
            },
            {
              "type": "p",
              "en": "A confidence interval estimates a mean; a significance test weighs evidence for a specific claim about a mean. As with proportions, we state a null hypothesis $H_0$ (the status-quo value) and an alternative hypothesis $H_a$ (what we suspect), check conditions, compute a test statistic, find a P-value from the t-distribution, and write a conclusion in context comparing the P-value to the significance level $\\alpha$.",
              "zh": "置信区间用来估计均值；显著性检验则衡量支持关于均值某个具体断言的证据。与比例一样，我们先陈述原假设 $H_0$（现状值）和备择假设 $H_a$（我们怀疑的情况），检查条件，计算检验统计量，从 t 分布求出 P 值，再结合背景写出结论，将 P 值与显著性水平 $\\alpha$ 比较。"
            },
            {
              "type": "h3",
              "en": "The One-Sample t-Test",
              "zh": "单样本 t 检验"
            },
            {
              "type": "p",
              "en": "The hypotheses concern a single population mean $\\mu$, with a claimed value $\\mu_0$:",
              "zh": "假设针对单个总体均值 $\\mu$，其断言值为 $\\mu_0$："
            },
            {
              "type": "math",
              "tex": "H_0: \\mu = \\mu_0 \\qquad H_a: \\mu \\ne \\mu_0 \\;\\text{ or }\\; \\mu > \\mu_0 \\;\\text{ or }\\; \\mu < \\mu_0"
            },
            {
              "type": "p",
              "en": "The conditions are the same three as for the interval: Random, 10%, and Normal/Large Sample. The test statistic measures how many estimated standard errors the sample mean falls from the claimed mean:",
              "zh": "条件与区间的相同三条一致：随机、10%、正态/大样本。检验统计量衡量样本均值距离断言均值有多少个估计的标准误差："
            },
            {
              "type": "math",
              "tex": "t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}, \\qquad df = n - 1"
            },
            {
              "type": "p",
              "en": "The P-value is the probability, assuming $H_0$ is true, of getting a t-statistic at least as extreme as the one observed, in the direction of $H_a$. For a two-sided $H_a$, double the one-tail area. A small P-value (typically $\\le \\alpha$, often $\\alpha = 0.05$) is convincing evidence against $H_0$.",
              "zh": "P 值是在假设 $H_0$ 成立的前提下，得到一个至少与观测值同样极端、且方向与 $H_a$ 一致的 t 统计量的概率。对于双侧 $H_a$，把单尾面积加倍。较小的 P 值（通常 $\\le \\alpha$，常取 $\\alpha = 0.05$）是反对 $H_0$ 的有力证据。"
            },
            {
              "type": "note",
              "en": "Common mistake: the P-value is NOT the probability that $H_0$ is true. It is a conditional probability computed ASSUMING $H_0$ is true — the probability of data at least this extreme. Also, failing to reject $H_0$ never proves $H_0$; it only means the evidence was not strong enough.",
              "zh": "常见错误：P 值不是 $H_0$ 为真的概率。它是在假设 $H_0$ 成立的前提下计算的条件概率——即得到至少这么极端的数据的概率。此外，未能拒绝 $H_0$ 绝不证明 $H_0$ 成立，只说明证据不够强。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: One-Sample t-Test",
                "zh": "例题 1：单样本 t 检验"
              },
              "problem": {
                "en": "A machine is supposed to fill bags to a mean of 500 grams. A quality inspector takes a random sample of 36 bags and finds $\\bar{x} = 496$ grams with $s = 12$ grams. Is there convincing evidence at $\\alpha = 0.05$ that the mean fill differs from 500 grams?",
                "zh": "一台机器应把袋子平均装填到 500 克。质检员随机抽取 36 袋，得 $\\bar{x} = 496$ 克，$s = 12$ 克。在 $\\alpha = 0.05$ 下是否有充分证据表明平均装填量不等于 500 克？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Hypotheses: $H_0: \\mu = 500$ versus $H_a: \\mu \\ne 500$, where $\\mu$ is the true mean fill weight. Conditions: Random (stated); 10% (36 bags is under 10% of all bags); Normal/Large Sample ($n = 36 \\ge 30$, so the CLT applies). Use a one-sample t-test with $df = 35$.",
                  "zh": "假设：$H_0: \\mu = 500$ 对 $H_a: \\mu \\ne 500$，其中 $\\mu$ 是真实平均装填重量。条件：随机（题目说明）；10%（36 袋小于全部袋数的 10%）；正态/大样本（$n = 36 \\ge 30$，中心极限定理适用）。使用单样本 t 检验，$df = 35$。"
                },
                {
                  "type": "math",
                  "tex": "t = \\frac{496 - 500}{12/\\sqrt{36}} = \\frac{-4}{2} = -2.00"
                },
                {
                  "type": "p",
                  "en": "With $df = 35$, the two-sided P-value for $t = -2.00$ is about $2(0.0267) = 0.053$. Since $0.053 > 0.05$, we fail to reject $H_0$.",
                  "zh": "在 $df = 35$ 下，$t = -2.00$ 的双侧 P 值约为 $2(0.0267) = 0.053$。由于 $0.053 > 0.05$，我们未能拒绝 $H_0$。"
                },
                {
                  "type": "p",
                  "en": "Conclusion in context: because the P-value 0.053 exceeds $\\alpha = 0.05$, we do not have convincing evidence that the machine's mean fill weight differs from 500 grams.",
                  "zh": "结合背景的结论：由于 P 值 0.053 大于 $\\alpha = 0.05$，我们没有充分证据表明机器的平均装填重量不等于 500 克。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Paired t-Test",
              "zh": "配对 t 检验"
            },
            {
              "type": "p",
              "en": "The paired t-test is one of the most common setups on the AP exam. When data are matched pairs, reduce each pair to a single difference and run a one-sample t-test on the differences. The null hypothesis is almost always that the mean difference is zero:",
              "zh": "配对 t 检验是 AP 考试中最常见的题型之一。当数据为配对形式时，把每一对化为一个差值，再对这些差值做单样本 t 检验。原假设几乎总是平均差值为零："
            },
            {
              "type": "math",
              "tex": "H_0: \\mu_d = 0 \\qquad H_a: \\mu_d \\ne 0 \\;\\text{ (or } > 0,\\ < 0)"
            },
            {
              "type": "math",
              "tex": "t = \\frac{\\bar{x}_d - 0}{s_d/\\sqrt{n}}, \\qquad df = n - 1"
            },
            {
              "type": "p",
              "en": "Here $\\mu_d$ is the true mean difference, $n$ is the number of pairs, and $\\bar{x}_d$ and $s_d$ are the mean and standard deviation of the observed differences. Watch the direction of subtraction and make sure your $H_a$ matches the question.",
              "zh": "这里 $\\mu_d$ 是真实平均差值，$n$ 是对数，$\\bar{x}_d$ 和 $s_d$ 是观测差值的均值和标准差。注意相减的方向，并确保 $H_a$ 与题意一致。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Paired t-Test",
                "zh": "例题 2：配对 t 检验"
              },
              "problem": {
                "en": "A tutor claims a memory technique improves recall. Eight students each take a memory test twice: once with the technique and once without. For each student the difference (with minus without, in items recalled) is found. The 8 differences have $\\bar{x}_d = 2.5$ and $s_d = 2.8$, and a dotplot shows no strong skew or outliers. Test at $\\alpha = 0.05$ whether the technique increases mean recall.",
                "zh": "一位辅导老师声称某记忆技巧能提高回忆量。八名学生各做两次记忆测试：一次使用技巧、一次不用。对每名学生记录差值（用减不用，单位为回忆项数）。这 8 个差值有 $\\bar{x}_d = 2.5$、$s_d = 2.8$，点图显示无明显偏斜或离群值。在 $\\alpha = 0.05$ 下检验该技巧是否提高平均回忆量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This is matched-pairs data (each student measured twice), so use a paired t-test on the differences. Hypotheses: $H_0: \\mu_d = 0$ versus $H_a: \\mu_d > 0$, where $\\mu_d$ is the true mean difference (with minus without). Conditions: the differences behave like a random sample; 10% is met; the dotplot is roughly symmetric with no outliers. Use $df = 8 - 1 = 7$.",
                  "zh": "这是配对数据（每名学生测量两次），因此对差值使用配对 t 检验。假设：$H_0: \\mu_d = 0$ 对 $H_a: \\mu_d > 0$，其中 $\\mu_d$ 是真实平均差值（用减不用）。条件：差值可视为随机样本；满足 10% 条件；点图大致对称且无离群值。取 $df = 8 - 1 = 7$。"
                },
                {
                  "type": "math",
                  "tex": "t = \\frac{2.5 - 0}{2.8/\\sqrt{8}} = \\frac{2.5}{0.9899} \\approx 2.53"
                },
                {
                  "type": "p",
                  "en": "With $df = 7$, the one-sided P-value for $t \\approx 2.53$ is about 0.0197. Since $0.0197 < 0.05$, we reject $H_0$.",
                  "zh": "在 $df = 7$ 下，$t \\approx 2.53$ 的单侧 P 值约为 0.0197。由于 $0.0197 < 0.05$，我们拒绝 $H_0$。"
                },
                {
                  "type": "p",
                  "en": "Conclusion in context: there is convincing evidence at the 5% level that the memory technique increases students' mean recall.",
                  "zh": "结合背景的结论：在 5% 水平上有充分证据表明该记忆技巧提高了学生的平均回忆量。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Two-Sample t-Test",
              "zh": "双样本 t 检验"
            },
            {
              "type": "p",
              "en": "To compare the means of two INDEPENDENT groups, the null hypothesis says the means are equal, i.e. their difference is zero:",
              "zh": "要比较两个独立组的均值，原假设表示两均值相等，即它们的差为零："
            },
            {
              "type": "math",
              "tex": "H_0: \\mu_1 = \\mu_2 \\qquad H_a: \\mu_1 \\ne \\mu_2 \\;\\text{ (or } >,\\ <)"
            },
            {
              "type": "math",
              "tex": "t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{\\sqrt{\\dfrac{s_1^2}{n_1} + \\dfrac{s_2^2}{n_2}}}"
            },
            {
              "type": "p",
              "en": "Check the three conditions for each of the two samples. Use technology for the degrees of freedom, or the conservative df = the smaller of $n_1 - 1$ and $n_2 - 1$. Remember these must be two independent groups — if the data are paired, this test is wrong.",
              "zh": "对两个样本各自检查三个条件。自由度用计算器求得，或使用保守取法 df = $n_1 - 1$ 与 $n_2 - 1$ 中较小者。切记这必须是两个独立的组——如果数据是配对的，则此检验是错误的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Two-Sample t-Test",
                "zh": "例题 3：双样本 t 检验"
              },
              "problem": {
                "en": "Do students who study with music score differently on a test than those who study in silence? An independent random sample of 20 music-studiers has $\\bar{x}_1 = 78$ with $s_1 = 8$; an independent random sample of 22 silent-studiers has $\\bar{x}_2 = 82$ with $s_2 = 7$. Both distributions are roughly symmetric. Test at $\\alpha = 0.05$ using conservative df.",
                "zh": "边听音乐边学习的学生与在安静环境学习的学生在测验上的得分是否不同？独立随机抽取 20 名听音乐者得 $\\bar{x}_1 = 78$、$s_1 = 8$；独立随机抽取 22 名安静学习者得 $\\bar{x}_2 = 82$、$s_2 = 7$。两个分布都大致对称。在 $\\alpha = 0.05$ 下使用保守自由度进行检验。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Two independent groups, so use a two-sample t-test. Hypotheses: $H_0: \\mu_1 = \\mu_2$ versus $H_a: \\mu_1 \\ne \\mu_2$. Conditions: both samples random and independent; both under 10%; both roughly symmetric. Conservative $df = \\min(19, 21) = 19$.",
                  "zh": "两个独立组，因此使用双样本 t 检验。假设：$H_0: \\mu_1 = \\mu_2$ 对 $H_a: \\mu_1 \\ne \\mu_2$。条件：两个样本随机且独立；均小于 10%；均大致对称。保守自由度 $df = \\min(19, 21) = 19$。"
                },
                {
                  "type": "math",
                  "tex": "t = \\frac{78 - 82}{\\sqrt{\\dfrac{8^2}{20} + \\dfrac{7^2}{22}}} = \\frac{-4}{\\sqrt{3.2 + 2.227}} \\approx \\frac{-4}{2.33} \\approx -1.72"
                },
                {
                  "type": "p",
                  "en": "With $df = 19$, the two-sided P-value for $t \\approx -1.72$ is about $2(0.0508) \\approx 0.102$. Since $0.102 > 0.05$, we fail to reject $H_0$. There is not convincing evidence that mean test scores differ between the two study conditions.",
                  "zh": "在 $df = 19$ 下，$t \\approx -1.72$ 的双侧 P 值约为 $2(0.0508) \\approx 0.102$。由于 $0.102 > 0.05$，我们未能拒绝 $H_0$。没有充分证据表明两种学习条件下的平均测验分数存在差异。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Connecting Intervals and Two-Sided Tests",
              "zh": "置信区间与双侧检验的联系"
            },
            {
              "type": "p",
              "en": "A two-sided significance test at level $\\alpha$ and a confidence interval at level $C = 1 - \\alpha$ give consistent answers. If the null value (for example $\\mu_0$, or 0 for a difference) lies OUTSIDE the confidence interval, the two-sided test rejects $H_0$ at level $\\alpha$. If the null value lies INSIDE the interval, the test fails to reject.",
              "zh": "水平为 $\\alpha$ 的双侧显著性检验与置信水平 $C = 1 - \\alpha$ 的置信区间给出一致的结论。如果原假设值（例如 $\\mu_0$，或差值检验中的 0）落在置信区间之外，则双侧检验在水平 $\\alpha$ 下拒绝 $H_0$。如果原假设值落在区间之内，则检验未能拒绝。"
            },
            {
              "type": "p",
              "en": "For instance, a 95% two-sample t-interval for $\\mu_1 - \\mu_2$ that contains 0 corresponds to a two-sided test at $\\alpha = 0.05$ that fails to reject $H_0: \\mu_1 = \\mu_2$ — exactly what we saw when 0 fell inside the laptop-battery interval.",
              "zh": "例如，$\\mu_1 - \\mu_2$ 的 95% 双样本 t 区间若包含 0，就对应于 $\\alpha = 0.05$ 的双侧检验未能拒绝 $H_0: \\mu_1 = \\mu_2$——这正是当 0 落入笔记本电池区间时我们所看到的情形。"
            },
            {
              "type": "note",
              "en": "AP tip: this correspondence holds only for TWO-SIDED tests matched with the appropriate confidence level ($C = 1 - \\alpha$). A one-sided test does not line up with a standard two-sided interval in the same way, so do not use an interval to justify a one-sided conclusion on the exam.",
              "zh": "AP 提示：这种对应关系仅在双侧检验与相应置信水平（$C = 1 - \\alpha$）匹配时成立。单侧检验与标准双侧区间并非以同样方式对应，因此在考试中不要用区间去论证单侧结论。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A one-sample t-test gives a P-value of 0.03 at $\\alpha = 0.05$. What is the correct decision and interpretation?",
                "zh": "一个单样本 t 检验在 $\\alpha = 0.05$ 下给出 P 值 0.03。正确的决定和解释是什么？"
              },
              "choices": [
                "Reject $H_0$; there is convincing evidence for $H_a$ at the 5% level.",
                "Fail to reject $H_0$; the P-value is too small.",
                "Reject $H_0$; there is a 3% probability that $H_0$ is true.",
                "Accept $H_0$; the evidence proves $H_0$."
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $0.03 \\le 0.05$, we reject $H_0$ and conclude there is convincing evidence for $H_a$. The P-value is not the probability that $H_0$ is true, and we never 'accept' or 'prove' $H_0$.",
                "zh": "由于 $0.03 \\le 0.05$，我们拒绝 $H_0$，得出有充分证据支持 $H_a$ 的结论。P 值不是 $H_0$ 为真的概率，而且我们从不“接受”或“证明” $H_0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement correctly describes a P-value?",
                "zh": "以下哪种说法正确描述了 P 值？"
              },
              "choices": [
                "The probability that the null hypothesis is true.",
                "The probability that the alternative hypothesis is true.",
                "Assuming $H_0$ is true, the probability of getting a result at least as extreme as the one observed.",
                "The probability of making a Type I error in this specific test."
              ],
              "answer": 2,
              "explanation": {
                "en": "The P-value is a conditional probability computed assuming $H_0$ is true: how likely a result at least this extreme would be. It is not the probability that either hypothesis is true, nor the fixed error rate $\\alpha$.",
                "zh": "P 值是在假设 $H_0$ 成立的前提下计算的条件概率：得到至少这么极端结果的可能性。它既不是任一假设为真的概率，也不是固定的错误率 $\\alpha$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Researchers weigh 15 people before and after a 30-day diet and analyze each person's weight change. Which test is appropriate?",
                "zh": "研究者对 15 人在 30 天饮食计划前后称重，并分析每人的体重变化。应使用哪种检验？"
              },
              "choices": [
                "Two-sample t-test comparing the before group and the after group.",
                "Paired t-test on the differences, with $df = 14$.",
                "One-proportion z-test.",
                "Paired t-test with $df = 15$."
              ],
              "answer": 1,
              "explanation": {
                "en": "The same 15 people are measured twice, so the data are matched pairs; use a paired t-test on the 15 differences with $df = 15 - 1 = 14$. A two-sample test would wrongly treat the linked measurements as independent, and df is $n - 1$, not $n$.",
                "zh": "同样的 15 人被测量两次，因此数据是配对的；对 15 个差值使用配对 t 检验，$df = 15 - 1 = 14$。双样本检验会错误地把关联的测量当作独立，而自由度是 $n - 1$ 而非 $n$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A 95% confidence interval for $\\mu_1 - \\mu_2$ is $(1.2, 5.8)$. What does the corresponding two-sided test at $\\alpha = 0.05$ conclude about $H_0: \\mu_1 = \\mu_2$?",
                "zh": "$\\mu_1 - \\mu_2$ 的 95% 置信区间为 $(1.2, 5.8)$。相应的 $\\alpha = 0.05$ 双侧检验对 $H_0: \\mu_1 = \\mu_2$ 得出什么结论？"
              },
              "choices": [
                "Fail to reject $H_0$, because the interval is entirely positive.",
                "There is not enough information to decide.",
                "Reject $H_0$, because 0 is not in the interval.",
                "Accept $H_0$, because the interval is narrow."
              ],
              "answer": 2,
              "explanation": {
                "en": "Because 0 lies outside the 95% interval, the matched two-sided test rejects $H_0: \\mu_1 = \\mu_2$ at $\\alpha = 0.05$. An entirely positive interval means the difference is plausibly nonzero, which supports rejecting rather than failing to reject.",
                "zh": "由于 0 落在 95% 区间之外，匹配的双侧检验在 $\\alpha = 0.05$ 下拒绝 $H_0: \\mu_1 = \\mu_2$。整个区间为正说明差值很可能非零，这支持拒绝而非未能拒绝。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a one-sample t-test, the alternative is $H_a: \\mu > 100$ and the sample gives $t = 1.9$ with $df = 24$. The one-sided P-value is about 0.035. At $\\alpha = 0.01$, what is the decision?",
                "zh": "在单样本 t 检验中，备择假设为 $H_a: \\mu > 100$，样本给出 $t = 1.9$、$df = 24$，单侧 P 值约为 0.035。在 $\\alpha = 0.01$ 下如何决策？"
              },
              "choices": [
                "Reject $H_0$, since $t > 0$.",
                "Reject $H_0$, since the P-value is small.",
                "Double the P-value first, then reject.",
                "Fail to reject $H_0$, since $0.035 > 0.01$."
              ],
              "answer": 3,
              "explanation": {
                "en": "The decision compares the P-value to $\\alpha$: since $0.035 > 0.01$, we fail to reject $H_0$. A positive $t$ alone is not a decision rule, and for a one-sided $H_a$ the P-value is a single tail — it is not doubled.",
                "zh": "决策是把 P 值与 $\\alpha$ 比较：由于 $0.035 > 0.01$，我们未能拒绝 $H_0$。仅仅 $t$ 为正并不是决策规则，而对于单侧 $H_a$，P 值是单尾面积，不需加倍。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A random sample of $n = 49$ gives $\\bar{x} = 12.6$ and $s = 2.1$, testing $H_0: \\mu = 12$. Compute the one-sample t-statistic. Round to 2 decimals.",
                "zh": "一个 $n = 49$ 的随机样本得 $\\bar{x} = 12.6$、$s = 2.1$，检验 $H_0: \\mu = 12$。计算单样本 t 统计量，保留两位小数。"
              },
              "answer": "2.00",
              "accept": [
                "2.00",
                "2.0",
                "2",
                "+2.00",
                "2.0000"
              ],
              "explanation": {
                "en": "The test statistic is $t = (\\bar{x} - \\mu_0)/(s/\\sqrt{n}) = (12.6 - 12)/(2.1/\\sqrt{49}) = 0.6/0.3 = 2.00$. A frequent error is dividing by $n$ or by $s$ alone instead of by $s/\\sqrt{n}$.",
                "zh": "检验统计量为 $t = (\\bar{x} - \\mu_0)/(s/\\sqrt{n}) = (12.6 - 12)/(2.1/\\sqrt{49}) = 0.6/0.3 = 2.00$。常见错误是除以 $n$ 或只除以 $s$，而不是除以 $s/\\sqrt{n}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For a paired t-test on 12 matched pairs, what are the degrees of freedom?",
                "zh": "对 12 对配对数据做配对 t 检验，自由度是多少？"
              },
              "answer": "11",
              "accept": [
                "11",
                "df=11",
                "eleven",
                "n-1=11"
              ],
              "explanation": {
                "en": "A paired t-test is a one-sample t-test on the differences, so $df = n - 1 = 12 - 1 = 11$, where $n$ is the number of pairs. Using 24 would wrongly count each measurement instead of each pair.",
                "zh": "配对 t 检验是对差值做的单样本 t 检验，因此 $df = n - 1 = 12 - 1 = 11$，其中 $n$ 是对数。用 24 会错误地按每次测量而非每一对来计数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For a two-sided one-sample t-test, technology reports a one-tail area of 0.018 beyond the observed t. What is the two-sided P-value? Give a decimal.",
                "zh": "在双侧单样本 t 检验中，计算器给出观测 t 值之外的单尾面积为 0.018。双侧 P 值是多少？给出一个小数。"
              },
              "answer": "0.036",
              "accept": [
                "0.036",
                ".036",
                "0.0360",
                "3.6%"
              ],
              "explanation": {
                "en": "A two-sided alternative counts both tails, so the P-value is $2 \\times 0.018 = 0.036$. Reporting 0.018 would ignore the second tail required by a two-sided $H_a$.",
                "zh": "双侧备择假设要计入两条尾部，因此 P 值为 $2 \\times 0.018 = 0.036$。只报告 0.018 会漏掉双侧 $H_a$ 所需的第二条尾部。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "inference-chi-square",
      "title": "Unit 8: Inference for Categorical Data: Chi-Square",
      "titleZh": "第八单元：分类数据的推断——卡方",
      "lessons": [
        {
          "id": "chi-square-tests",
          "title": "Chi-Square Tests",
          "titleZh": "卡方检验",
          "content": [
            {
              "type": "h2",
              "en": "The Chi-Square Family of Tests",
              "zh": "卡方检验家族"
            },
            {
              "type": "p",
              "en": "So far, inference has compared one or two proportions. When a categorical variable has three or more categories, or when we want to study the relationship between two categorical variables, we use a chi-square ($\\chi^2$) test. All chi-square tests compare the counts we actually observed with the counts we would expect if some null hypothesis were true. There are three procedures, and the AP exam expects you to tell them apart:",
              "zh": "到目前为止，推断都是比较一两个比例。当一个分类变量有三个或更多类别，或者当我们想研究两个分类变量之间的关系时，就使用卡方（$\\chi^2$）检验。所有卡方检验都是把我们实际观测到的计数与在某个原假设为真时预期出现的计数进行比较。共有三种方法，AP 考试要求你能把它们区分开来："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Goodness-of-fit (GOF): one sample, one categorical variable. Does the distribution match a claimed model?",
                  "zh": "拟合优度检验（GOF）：一个样本、一个分类变量。分布是否符合某个声称的模型？"
                },
                {
                  "en": "Homogeneity: several independent samples (or several groups), one categorical variable. Are the distributions the same across the populations/groups?",
                  "zh": "同质性检验：多个独立样本（或多个组）、一个分类变量。各总体/组之间的分布是否相同？"
                },
                {
                  "en": "Independence (association): one sample, two categorical variables recorded on each individual. Are the two variables associated?",
                  "zh": "独立性（关联性）检验：一个样本，对每个个体记录两个分类变量。这两个变量是否相关联？"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Chi-Square Statistic",
              "zh": "卡方统计量"
            },
            {
              "type": "p",
              "en": "Every chi-square test uses the same statistic. For each cell, take the observed count $O$ and the expected count $E$, find $(O-E)^2/E$, and add these up over all cells. The bigger the gap between what we saw and what the model predicts, the larger $\\chi^2$ becomes.",
              "zh": "每种卡方检验都使用同一个统计量。对每个单元格，取观测计数 $O$ 和期望计数 $E$，计算 $(O-E)^2/E$，再把所有单元格加起来。观测值与模型预测值之间的差距越大，$\\chi^2$ 就越大。"
            },
            {
              "type": "math",
              "tex": "\\chi^2 = \\sum \\frac{(O - E)^2}{E}"
            },
            {
              "type": "p",
              "en": "The key difference between the three tests is how you compute the expected counts. For a goodness-of-fit test, multiply the sample size $n$ by each claimed proportion: $E = n \\cdot p_i$. For a two-way table (homogeneity or independence), use the marginal totals:",
              "zh": "三种检验的关键区别在于如何计算期望计数。对于拟合优度检验，用样本量 $n$ 乘以每个声称的比例：$E = n \\cdot p_i$。对于双向表（同质性或独立性检验），使用边缘总计："
            },
            {
              "type": "math",
              "tex": "E = \\frac{(\\text{row total}) \\times (\\text{column total})}{\\text{grand total}}"
            },
            {
              "type": "h3",
              "en": "The Chi-Square Distribution, Conditions, and Degrees of Freedom",
              "zh": "卡方分布、条件与自由度"
            },
            {
              "type": "p",
              "en": "When the conditions below are met, the statistic follows a chi-square distribution. This is a right-skewed family of curves (never negative) whose exact shape is set by the degrees of freedom (df). A chi-square test is always one-sided on the right: only large values of $\\chi^2$ give evidence against $H_0$, so the P-value is the area to the RIGHT of the computed statistic.",
              "zh": "当满足下面的条件时，该统计量服从卡方分布。这是一族右偏的曲线（永不为负），其确切形状由自由度（df）决定。卡方检验始终是右侧单尾检验：只有较大的 $\\chi^2$ 值才构成反对 $H_0$ 的证据，所以 P 值是计算出的统计量右侧的面积。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Random: the data come from a random sample or randomized experiment.",
                  "zh": "随机：数据来自随机样本或随机化实验。"
                },
                {
                  "en": "Large Counts: EVERY expected count is at least 5 (check the expected counts, not the observed counts).",
                  "zh": "大计数：每个期望计数都至少为 5（检查期望计数，而不是观测计数）。"
                },
                {
                  "en": "10%: when sampling without replacement, each sample is less than 10% of its population, so observations are approximately independent.",
                  "zh": "10% 条件：无放回抽样时，每个样本都少于其总体的 10%，从而观测近似独立。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The degrees of freedom depend on the test. For goodness-of-fit, $df = (\\text{number of categories}) - 1$. For a two-way table with $r$ rows and $c$ columns, $df = (r-1)(c-1)$.",
              "zh": "自由度取决于检验类型。对于拟合优度检验，$df = (\\text{类别数}) - 1$。对于有 $r$ 行、$c$ 列的双向表，$df = (r-1)(c-1)$。"
            },
            {
              "type": "note",
              "en": "Common mistake: chi-square tests are always run on COUNTS, never on percentages or proportions. If a problem gives you percentages, convert them back to counts (percent times sample size) before doing anything. Also check the Large Counts condition on the EXPECTED counts, not the observed ones.",
              "zh": "常见错误：卡方检验永远针对计数进行，绝不能用百分比或比例。如果题目给的是百分比，先把它们换算回计数（百分比乘以样本量）再做任何计算。此外，大计数条件要检查期望计数，而不是观测计数。"
            },
            {
              "type": "h3",
              "en": "Goodness-of-Fit: Does a Distribution Match a Model?",
              "zh": "拟合优度检验：分布是否符合某个模型？"
            },
            {
              "type": "p",
              "en": "The hypotheses for a goodness-of-fit test are stated in words or as a set of proportions. $H_0$ says the claimed model is correct (for example, the die is fair, so each face has probability $1/6$); $H_a$ says at least one proportion differs from the claim. You do NOT write $H_a$ as \"all proportions are different\" — only that the model as a whole fails.",
              "zh": "拟合优度检验的假设用文字或一组比例来表述。$H_0$ 表示声称的模型正确（例如，骰子是均匀的，每一面概率为 $1/6$）；$H_a$ 表示至少有一个比例与声称的不同。$H_a$ 不能写成“所有比例都不同”，只能表示该模型整体上不成立。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Goodness-of-Fit",
                "zh": "例题 1：拟合优度检验"
              },
              "problem": {
                "en": "A student rolls a die 60 times to test whether it is fair. The observed counts for faces 1 through 6 are 8, 12, 9, 11, 7, 13. Carry out a goodness-of-fit test at $\\alpha = 0.05$.",
                "zh": "一名学生把一个骰子掷 60 次，检验它是否均匀。1 到 6 各面的观测计数为 8、12、9、11、7、13。在 $\\alpha = 0.05$ 下进行拟合优度检验。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$H_0$: the die is fair, each face has probability $1/6$. $H_a$: at least one face has a probability different from $1/6$. If fair, each expected count is $E = 60 \\cdot \\frac{1}{6} = 10$, so Large Counts is met (all expecteds = 10 ≥ 5); assume the rolls are random and independent.",
                  "zh": "$H_0$：骰子均匀，每面概率为 $1/6$。$H_a$：至少有一面的概率不等于 $1/6$。若均匀，每个期望计数为 $E = 60 \\cdot \\frac{1}{6} = 10$，故满足大计数条件（所有期望值 = 10 ≥ 5）；并假设各次投掷随机且独立。"
                },
                {
                  "type": "math",
                  "tex": "\\chi^2 = \\frac{(8-10)^2}{10} + \\frac{(12-10)^2}{10} + \\frac{(9-10)^2}{10} + \\frac{(11-10)^2}{10} + \\frac{(7-10)^2}{10} + \\frac{(13-10)^2}{10}"
                },
                {
                  "type": "math",
                  "tex": "\\chi^2 = 0.4 + 0.4 + 0.1 + 0.1 + 0.9 + 0.9 = 2.8"
                },
                {
                  "type": "p",
                  "en": "With $df = 6 - 1 = 5$, the P-value is the area to the right of 2.8, which is about 0.73 — very large. Since $0.73 > 0.05$, we fail to reject $H_0$. There is not convincing evidence that the die is unfair.",
                  "zh": "自由度 $df = 6 - 1 = 5$ 时，P 值为 2.8 右侧的面积，约为 0.73，非常大。由于 $0.73 > 0.05$，我们不能拒绝 $H_0$。没有令人信服的证据表明骰子不均匀。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Homogeneity vs. Independence: Two-Way Tables",
              "zh": "同质性与独立性检验：双向表"
            },
            {
              "type": "p",
              "en": "Both of these tests use a two-way table, the same $\\chi^2$ statistic, and the same $df = (r-1)(c-1)$. The arithmetic is identical — what differs is the STUDY DESIGN and therefore the wording of the conclusion. Look at how the data were collected:",
              "zh": "这两种检验都使用双向表、同一个 $\\chi^2$ 统计量以及相同的 $df = (r-1)(c-1)$。计算完全一样，不同的是研究设计，因而结论的措辞也不同。要看数据是如何收集的："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Independence: ONE sample is taken and TWO categorical variables are recorded on each individual (e.g., 100 randomly chosen adults classified by sex AND by handedness). Conclusion talks about whether the two variables are associated.",
                  "zh": "独立性检验：抽取一个样本，对每个个体记录两个分类变量（例如，随机选取 100 名成年人，按性别“和”惯用手同时分类）。结论讨论这两个变量是否相关联。"
                },
                {
                  "en": "Homogeneity: SEVERAL separate samples/groups are compared on ONE categorical variable (e.g., 100 men and 100 women are two separate samples, each asked yes/no). Conclusion talks about whether the distributions are the same across the groups.",
                  "zh": "同质性检验：比较几个独立的样本/组在“一个”分类变量上的分布（例如，100 名男性与 100 名女性是两个独立样本，各自回答是/否）。结论讨论各组之间的分布是否相同。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: decide between homogeneity and independence by counting your samples. One sample split two ways → independence. Two or more samples (or preset group sizes) compared on one variable → homogeneity. Since the calculation is the same, you earn the point by naming the right procedure and matching the conclusion to the design.",
              "zh": "AP 提示：通过数样本个数来区分同质性与独立性检验。一个样本按两个变量划分 → 独立性检验。两个或更多样本（或事先设定的组容量）在一个变量上比较 → 同质性检验。由于计算相同，得分点在于说出正确的方法名称，并使结论与研究设计相匹配。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Test for Independence",
                "zh": "例题 2：独立性检验"
              },
              "problem": {
                "en": "A random sample of 100 adults is classified by sex and handedness. The table shows: Male — 40 right-handed, 10 left-handed; Female — 30 right-handed, 20 left-handed. Is there an association between sex and handedness? Use $\\alpha = 0.05$.",
                "zh": "随机抽取 100 名成年人，按性别与惯用手分类。表格为：男性——40 名右利手，10 名左利手；女性——30 名右利手，20 名左利手。性别与惯用手之间是否存在关联？取 $\\alpha = 0.05$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This is one sample classified by two variables, so use a chi-square test for independence. $H_0$: sex and handedness are independent. $H_a$: sex and handedness are associated. Row totals are 50 and 50; column totals are 70 (right) and 30 (left); grand total 100. Each expected count is $\\frac{\\text{row} \\times \\text{col}}{100}$: right-handed cells $\\frac{50 \\cdot 70}{100} = 35$, left-handed cells $\\frac{50 \\cdot 30}{100} = 15$. All expecteds ≥ 5, and the sample is random.",
                  "zh": "这是一个样本按两个变量分类，故使用卡方独立性检验。$H_0$：性别与惯用手相互独立。$H_a$：性别与惯用手相关联。行总计为 50 与 50；列总计为 70（右）与 30（左）；总计 100。每个期望计数为 $\\frac{\\text{行} \\times \\text{列}}{100}$：右利手单元格 $\\frac{50 \\cdot 70}{100} = 35$，左利手单元格 $\\frac{50 \\cdot 30}{100} = 15$。所有期望值 ≥ 5，且样本随机。"
                },
                {
                  "type": "math",
                  "tex": "\\chi^2 = \\frac{(40-35)^2}{35} + \\frac{(10-15)^2}{15} + \\frac{(30-35)^2}{35} + \\frac{(20-15)^2}{15} \\approx 0.714 + 1.667 + 0.714 + 1.667 = 4.76"
                },
                {
                  "type": "p",
                  "en": "With $df = (2-1)(2-1) = 1$, the P-value (area right of 4.76) is about 0.029. Since $0.029 < 0.05$, we reject $H_0$. There is convincing evidence of an association between sex and handedness in this population.",
                  "zh": "自由度 $df = (2-1)(2-1) = 1$ 时，P 值（4.76 右侧的面积）约为 0.029。由于 $0.029 < 0.05$，我们拒绝 $H_0$。有令人信服的证据表明该总体中性别与惯用手之间存在关联。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Which Test Is It?",
                "zh": "例题 3：这是哪种检验？"
              },
              "problem": {
                "en": "Name the correct chi-square procedure for each scenario: (a) A company samples 200 customers and records both their age group (3 levels) and which of 4 products they prefer. (b) A nutritionist takes separate random samples of 50 vegetarians and 50 non-vegetarians and asks each whether they take vitamins (yes/no). (c) A geneticist expects offspring in a 9:3:3:1 ratio and checks 320 observed offspring against that ratio.",
                "zh": "为每个情境说出正确的卡方方法：(a) 某公司抽取 200 名顾客，同时记录他们的年龄段（3 个水平）和在 4 种产品中偏好哪一种。(b) 一位营养师分别随机抽取 50 名素食者和 50 名非素食者，询问每人是否服用维生素（是/否）。(c) 一位遗传学家预期后代呈 9:3:3:1 的比例，用 320 个观测后代与该比例进行核对。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) One sample, two categorical variables (age and product) → chi-square test for independence. (b) Two separate samples compared on one variable (vitamin use) → chi-square test for homogeneity. (c) One sample compared against a claimed model of proportions → chi-square goodness-of-fit test.",
                  "zh": "(a) 一个样本、两个分类变量（年龄与产品）→ 卡方独立性检验。(b) 两个独立样本在一个变量（是否服用维生素）上比较 → 卡方同质性检验。(c) 一个样本与声称的比例模型进行比较 → 卡方拟合优度检验。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Interpreting the P-value: a P-value of 0.029 means that IF $H_0$ were true, there is only about a 2.9% chance of getting a $\\chi^2$ statistic at least as large as the one observed, by random chance alone. It is NOT the probability that $H_0$ is true. Rejecting $H_0$ shows an association exists but never proves that one variable causes the other, unless the data came from a randomized experiment.",
              "zh": "解释 P 值：P 值为 0.029 意味着，如果 $H_0$ 为真，仅凭随机机会得到一个至少与观测值一样大的 $\\chi^2$ 统计量的概率只有约 2.9%。它“不是” $H_0$ 为真的概率。拒绝 $H_0$ 表明存在关联，但绝不能证明一个变量导致另一个变量，除非数据来自随机化实验。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In a two-way table, the expected count for a cell is computed as:",
                "zh": "在双向表中，一个单元格的期望计数如何计算？"
              },
              "choices": [
                "observed count minus the row total / 观测计数减去行总计",
                "(row total + column total) / grand total / （行总计 + 列总计）/ 总计",
                "(row total × column total) / grand total / （行总计 × 列总计）/ 总计",
                "grand total / number of cells / 总计 / 单元格数"
              ],
              "answer": 2,
              "explanation": {
                "en": "The expected count assumes the row and column variables are unrelated, so you multiply the two marginal totals and divide by the grand total. Adding the totals or dividing evenly ignores how the margins actually distribute the counts.",
                "zh": "期望计数假设行、列变量无关，因此把两个边缘总计相乘再除以总计。把总计相加或平均分配都忽略了边缘总计实际分配计数的方式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A researcher takes a single random sample of 150 people and records each person's political party AND whether they own a pet. Which test is appropriate?",
                "zh": "一位研究者抽取 150 人的单个随机样本，记录每人的政党“和”是否养宠物。应使用哪种检验？"
              },
              "choices": [
                "Chi-square goodness-of-fit / 卡方拟合优度检验",
                "Chi-square test for independence / 卡方独立性检验",
                "Chi-square test for homogeneity / 卡方同质性检验",
                "Two-sample z-test for proportions / 两样本比例 z 检验"
              ],
              "answer": 1,
              "explanation": {
                "en": "One sample with two categorical variables recorded on each individual signals a test for independence. Homogeneity would require several separate samples; goodness-of-fit involves only one categorical variable compared to a model.",
                "zh": "一个样本、对每个个体记录两个分类变量，指向独立性检验。同质性检验需要多个独立样本；拟合优度检验只涉及一个分类变量与模型比较。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A goodness-of-fit test checks whether a die is fair (6 faces). How many degrees of freedom does the test have?",
                "zh": "一个拟合优度检验用来核对骰子是否均匀（6 个面）。该检验的自由度是多少？"
              },
              "answer": "5",
              "accept": [
                "5",
                "df=5",
                "5 degrees of freedom"
              ],
              "explanation": {
                "en": "For goodness-of-fit, $df = (\\text{number of categories}) - 1 = 6 - 1 = 5$. Do not use $n-1$ with the sample size; the categories, not the individuals, set the degrees of freedom.",
                "zh": "对拟合优度检验，$df = (\\text{类别数}) - 1 = 6 - 1 = 5$。不要用样本量的 $n-1$；决定自由度的是类别数，而非个体数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The Large Counts condition for a chi-square test requires that:",
                "zh": "卡方检验的大计数条件要求："
              },
              "choices": [
                "every EXPECTED count is at least 5 / 每个“期望”计数至少为 5",
                "every OBSERVED count is at least 5 / 每个“观测”计数至少为 5",
                "the sample size is at least 30 / 样本量至少为 30",
                "every expected count is at least 10 / 每个期望计数至少为 10"
              ],
              "answer": 0,
              "explanation": {
                "en": "The condition applies to the expected counts, each of which must be at least 5, so the chi-square distribution is a good approximation. Observed counts may be small; it is the expecteds that matter, and the threshold is 5, not 10 or 30.",
                "zh": "该条件针对期望计数，每个期望计数都必须至少为 5，卡方分布才是好的近似。观测计数可以较小；关键是期望计数，且阈值是 5，而非 10 或 30。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a two-way table, a cell has row total 60, column total 80, and the grand total is 240. What is the expected count for that cell? (Round to the nearest whole number.)",
                "zh": "在一个双向表中，某单元格所在行总计为 60，列总计为 80，总计为 240。该单元格的期望计数是多少？（四舍五入到整数。）"
              },
              "answer": "20",
              "accept": [
                "20",
                "20.0"
              ],
              "explanation": {
                "en": "Expected count $= \\frac{(\\text{row})(\\text{col})}{\\text{grand}} = \\frac{60 \\times 80}{240} = \\frac{4800}{240} = 20$.",
                "zh": "期望计数 $= \\frac{(\\text{行})(\\text{列})}{\\text{总计}} = \\frac{60 \\times 80}{240} = \\frac{4800}{240} = 20$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A test for independence uses a two-way table with 3 rows and 4 columns. What are the degrees of freedom?",
                "zh": "一个独立性检验使用有 3 行、4 列的双向表。自由度是多少？"
              },
              "choices": [
                "12",
                "7",
                "11",
                "6"
              ],
              "answer": 3,
              "explanation": {
                "en": "For a two-way table, $df = (r-1)(c-1) = (3-1)(4-1) = 2 \\times 3 = 6$. Multiplying $r \\times c$ (12) or adding them forgets to subtract 1 from each dimension.",
                "zh": "对双向表，$df = (r-1)(c-1) = (3-1)(4-1) = 2 \\times 3 = 6$。直接算 $r \\times c$（12）或相加都忘了每个维度要减 1。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cell has observed count 40 and expected count 35. What is that cell's contribution $(O-E)^2/E$ to the chi-square statistic? (Round to 3 decimals.)",
                "zh": "某单元格的观测计数为 40，期望计数为 35。该单元格对卡方统计量的贡献 $(O-E)^2/E$ 是多少？（保留 3 位小数。）"
              },
              "answer": "0.714",
              "accept": [
                "0.714",
                "0.71",
                ".714"
              ],
              "explanation": {
                "en": "$(O-E)^2/E = (40-35)^2/35 = 25/35 \\approx 0.714$. Each cell contributes a non-negative amount, and these are summed over all cells to get $\\chi^2$.",
                "zh": "$(O-E)^2/E = (40-35)^2/35 = 25/35 \\approx 0.714$。每个单元格贡献一个非负量，把所有单元格相加即得 $\\chi^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A chi-square test for homogeneity gives $\\chi^2 = 9.5$ with a P-value of 0.009 at $\\alpha = 0.05$. What is the correct conclusion?",
                "zh": "一个卡方同质性检验得到 $\\chi^2 = 9.5$，在 $\\alpha = 0.05$ 下 P 值为 0.009。正确的结论是什么？"
              },
              "choices": [
                "Fail to reject $H_0$; the distributions are the same. / 不拒绝 $H_0$；各分布相同。",
                "Accept $H_0$; there is a 0.9% chance it is true. / 接受 $H_0$；它为真的概率为 0.9%。",
                "Reject $H_0$; there is convincing evidence the distributions differ across the groups. / 拒绝 $H_0$；有令人信服的证据表明各组分布不同。",
                "Reject $H_0$; this proves the group causes the difference. / 拒绝 $H_0$；这证明组别导致了差异。"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $0.009 < 0.05$, reject $H_0$ and conclude there is convincing evidence the distributions differ. We never \"accept\" $H_0$, the P-value is not the probability $H_0$ is true, and an observational homogeneity test cannot establish causation.",
                "zh": "由于 $0.009 < 0.05$，拒绝 $H_0$，得出有令人信服的证据表明各分布不同。我们绝不“接受” $H_0$，P 值不是 $H_0$ 为真的概率，且观察性的同质性检验不能确立因果关系。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "inference-slopes",
      "title": "Unit 9: Inference for Quantitative Data: Slopes",
      "titleZh": "第九单元：定量数据的推断——回归斜率",
      "lessons": [
        {
          "id": "inference-for-regression-slopes",
          "title": "Inference for the Slope of a Regression Line",
          "titleZh": "回归斜率的推断",
          "content": [
            {
              "type": "h2",
              "en": "From a Sample Line to the Population Line",
              "zh": "从样本回归线到总体回归线"
            },
            {
              "type": "p",
              "en": "When two quantitative variables are linearly related, the whole population has a true regression line $\\mu_y = \\alpha + \\beta x$, where $\\beta$ is the population slope — a parameter we never see. From a sample we compute a least-squares line $\\hat{y} = a + bx$, and its slope $b$ is a statistic that estimates $\\beta$. Because a different random sample would give a different value of $b$, the slope has a sampling distribution, and we can build a confidence interval or run a significance test for $\\beta$ just as we did for means and proportions.",
              "zh": "当两个数量变量呈线性关系时，整个总体有一条真实的回归线 $\\mu_y = \\alpha + \\beta x$，其中 $\\beta$ 是总体斜率——一个我们永远看不到的参数。从样本中我们计算出最小二乘回归线 $\\hat{y} = a + bx$，其斜率 $b$ 是估计 $\\beta$ 的统计量。由于不同的随机样本会给出不同的 $b$ 值，斜率具有抽样分布，我们可以像对均值和比例那样，为 $\\beta$ 构造置信区间或进行显著性检验。"
            },
            {
              "type": "h3",
              "en": "The Sampling Distribution of the Slope",
              "zh": "斜率的抽样分布"
            },
            {
              "type": "p",
              "en": "If the conditions below hold, the sample slope $b$ is an unbiased estimator of $\\beta$, and its standardized value follows a $t$ distribution with $n - 2$ degrees of freedom (we lose two because both a slope and an intercept are estimated). The standard error of the slope, $SE_b$, measures how much $b$ typically varies from sample to sample; on the AP exam it is almost always read straight from computer output rather than computed by hand.",
              "zh": "如果满足下面的条件，样本斜率 $b$ 是 $\\beta$ 的无偏估计量，其标准化值服从自由度为 $n - 2$ 的 $t$ 分布（因为同时估计了斜率和截距，所以损失两个自由度）。斜率的标准误 $SE_b$ 衡量 $b$ 在各样本之间通常的变化程度；在 AP 考试中它几乎总是直接从计算机输出中读取，而不是手算。"
            },
            {
              "type": "math",
              "tex": "t = \\frac{b - \\beta_0}{SE_b}, \\qquad df = n - 2"
            },
            {
              "type": "h3",
              "en": "Conditions for Inference: LINER",
              "zh": "推断的条件：LINER"
            },
            {
              "type": "p",
              "en": "Before doing inference on a slope, check the five LINER conditions. Three of them (Linear, Normal, Equal SD) are verified by looking at a residual plot and, when needed, a histogram or dotplot of the residuals.",
              "zh": "对斜率做推断之前，要检查五个 LINER 条件。其中三个（线性、正态、等标准差）通过查看残差图，以及在需要时查看残差的直方图或点图来验证。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Linear: the true relationship between $x$ and $y$ is linear — the residual plot shows no leftover curved pattern.",
                  "zh": "线性（Linear）：$x$ 与 $y$ 之间的真实关系是线性的——残差图中没有残留的弯曲模式。"
                },
                {
                  "en": "Independent: individual observations are independent; when sampling without replacement, the sample is less than 10% of the population.",
                  "zh": "独立（Independent）：各观测相互独立；无放回抽样时，样本少于总体的 10%。"
                },
                {
                  "en": "Normal: for each value of $x$, the responses $y$ vary Normally about the line — the residuals are roughly Normal with no strong skew or outliers.",
                  "zh": "正态（Normal）：对每个 $x$ 值，响应 $y$ 围绕回归线呈正态分布——残差大致正态，没有明显偏斜或离群值。"
                },
                {
                  "en": "Equal SD: the standard deviation of $y$ is the same for all $x$ — the residual plot shows roughly constant vertical scatter (no fanning out).",
                  "zh": "等标准差（Equal SD）：对所有 $x$，$y$ 的标准差都相同——残差图中竖直方向的散布大致恒定（不呈喇叭状扩散）。"
                },
                {
                  "en": "Random: the data come from a random sample or a randomized experiment.",
                  "zh": "随机（Random）：数据来自随机样本或随机化实验。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: students check Linear and Equal SD by staring at the original scatterplot. Use the RESIDUAL plot instead — a residual plot with no pattern and constant spread confirms both Linear and Equal SD far more clearly than the scatterplot does.",
              "zh": "常见错误：学生盯着原始散点图来检查线性和等标准差条件。应改用“残差图”——一张没有模式且散布恒定的残差图，比散点图更清楚地同时确认线性和等标准差两个条件。"
            },
            {
              "type": "h3",
              "en": "Confidence Interval for the Slope",
              "zh": "斜率的置信区间"
            },
            {
              "type": "p",
              "en": "A $t$ confidence interval for the population slope has the usual estimate-plus-or-minus-margin form, using $df = n - 2$ to find the critical value $t^*$.",
              "zh": "总体斜率的 $t$ 置信区间采用通常的“估计值加减误差范围”形式，用 $df = n - 2$ 查出临界值 $t^*$。"
            },
            {
              "type": "math",
              "tex": "b \\pm t^{*} \\cdot SE_b"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Confidence Interval from Output",
                "zh": "例题 1：从输出构造置信区间"
              },
              "problem": {
                "en": "A random sample of 20 students gives a least-squares line predicting test score from hours studied. Software reports the \"Hours\" row as Coef = 5.40, SE Coef = 1.20. All LINER conditions are met. Construct a 95% confidence interval for the slope and interpret it.",
                "zh": "随机抽取 20 名学生，得到用学习小时数预测考试分数的最小二乘回归线。软件在“Hours”一行报告 Coef = 5.40，SE Coef = 1.20。所有 LINER 条件均已满足。请为斜率构造 95% 置信区间并解释。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use a $t$ interval for the slope with $df = 20 - 2 = 18$. The critical value for 95% confidence is $t^{*} = 2.101$.",
                  "zh": "使用斜率的 $t$ 区间，$df = 20 - 2 = 18$。95% 置信度对应的临界值为 $t^{*} = 2.101$。"
                },
                {
                  "type": "math",
                  "tex": "5.40 \\pm 2.101 \\times 1.20 = 5.40 \\pm 2.52 = (2.88,\\ 7.92)"
                },
                {
                  "type": "p",
                  "en": "We are 95% confident that the true slope is between 2.88 and 7.92. In context: for each additional hour studied, the mean test score increases by somewhere between 2.88 and 7.92 points. Because 0 is not in the interval, there is convincing evidence of a positive linear relationship.",
                  "zh": "我们有 95% 的把握真实斜率在 2.88 与 7.92 之间。在具体情境中：每多学习一小时，平均考试分数增加约 2.88 到 7.92 分。由于 0 不在区间内，有令人信服的证据表明存在正的线性关系。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Significance Test for the Slope",
              "zh": "斜率的显著性检验"
            },
            {
              "type": "p",
              "en": "The most common test asks whether a linear relationship exists at all. The null hypothesis says the slope is 0 (no linear relationship), and the alternative says it is not (or is positive/negative). The test statistic is $t = b / SE_b$ with $df = n - 2$. Software prints this $t$ and its two-sided P-value automatically.",
              "zh": "最常见的检验是问是否根本存在线性关系。原假设表示斜率为 0（无线性关系），备择假设表示斜率不为 0（或为正/为负）。检验统计量为 $t = b / SE_b$，$df = n - 2$。软件会自动打印这个 $t$ 值及其双侧 P 值。"
            },
            {
              "type": "math",
              "tex": "H_0: \\beta = 0 \\qquad H_a: \\beta \\ne 0 \\qquad t = \\frac{b}{SE_b}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Test for a Linear Relationship",
                "zh": "例题 2：检验线性关系"
              },
              "problem": {
                "en": "Using the same study of 20 students, the output row for Hours reads: Coef = 5.40, SE Coef = 1.20, T = 4.50, P = 0.000. Test whether there is a linear relationship between hours studied and test score at $\\alpha = 0.05$.",
                "zh": "仍用这项 20 名学生的研究，Hours 一行的输出为：Coef = 5.40，SE Coef = 1.20，T = 4.50，P = 0.000。在 $\\alpha = 0.05$ 下检验学习小时数与考试分数之间是否存在线性关系。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$H_0: \\beta = 0$ (no linear relationship) versus $H_a: \\beta \\ne 0$. The conditions are met, so use a $t$-test for the slope with $df = 18$. The statistic is $t = b/SE_b = 5.40/1.20 = 4.50$, matching the printout.",
                  "zh": "$H_0: \\beta = 0$（无线性关系）对 $H_a: \\beta \\ne 0$。条件满足，故使用斜率的 $t$ 检验，$df = 18$。统计量为 $t = b/SE_b = 5.40/1.20 = 4.50$，与打印结果一致。"
                },
                {
                  "type": "p",
                  "en": "The software P-value is reported as 0.000, meaning it is less than 0.0005. Since P $< \\alpha = 0.05$, we reject $H_0$. There is convincing evidence of a (positive) linear relationship between hours studied and test score.",
                  "zh": "软件报告的 P 值为 0.000，即小于 0.0005。由于 P $< \\alpha = 0.05$，我们拒绝 $H_0$。有令人信服的证据表明学习小时数与考试分数之间存在（正的）线性关系。"
                },
                {
                  "type": "note",
                  "en": "The P-value printed by software is TWO-sided. If your $H_a$ is one-sided (e.g., $\\beta > 0$) and the slope is in the predicted direction, halve the reported P-value.",
                  "zh": "软件打印的 P 值是“双侧”的。如果你的 $H_a$ 是单侧（例如 $\\beta > 0$）且斜率方向与预测一致，就把报告的 P 值减半。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Reading Regression Output",
              "zh": "读懂回归输出"
            },
            {
              "type": "p",
              "en": "A typical printout has a row for the constant (intercept) and a row for the explanatory variable (slope). The columns are Coef (the estimate), SE Coef (its standard error), T (the test statistic $= $ Coef / SE Coef), and P (the two-sided P-value). The slope information is ALWAYS in the row named after the $x$-variable, not the \"Constant\" row. Two extra numbers usually appear below the table: \"S\" is the standard deviation of the residuals, and \"R-Sq\" is $r^2$.",
              "zh": "典型的输出有一行对应常数项（截距），一行对应解释变量（斜率）。各列为 Coef（估计值）、SE Coef（其标准误）、T（检验统计量 $= $ Coef / SE Coef）以及 P（双侧 P 值）。斜率信息“总是”在以 $x$ 变量命名的那一行，而不是“Constant”一行。表格下方通常还有两个数：“S”是残差的标准差，“R-Sq”是 $r^2$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Identifying Values in Output",
                "zh": "例题 3：在输出中辨认各个数值"
              },
              "problem": {
                "en": "A regression of house price on square footage (n = 15) prints: Predictor Constant Coef 92.0 SE Coef 20.5 T 4.49 P 0.001; Predictor Sqft Coef 0.115 SE Coef 0.028 T 4.11 P 0.001. Identify the slope, its standard error, the test statistic, and the P-value, and give the degrees of freedom.",
                "zh": "用面积（平方英尺）回归房价（n = 15）的输出为：Predictor Constant，Coef 92.0，SE Coef 20.5，T 4.49，P 0.001；Predictor Sqft，Coef 0.115，SE Coef 0.028，T 4.11，P 0.001。指出斜率、其标准误、检验统计量和 P 值，并给出自由度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The slope is the Coef in the Sqft row: $b = 0.115$. Its standard error is $SE_b = 0.028$. The test statistic is $t = 4.11$ (check: $0.115/0.028 \\approx 4.11$), and the two-sided P-value is 0.001. Degrees of freedom $= n - 2 = 15 - 2 = 13$. Interpretation: each additional square foot is associated with a predicted price increase of about \\$0.115 thousand, and since P $= 0.001$ is small, there is strong evidence of a linear relationship.",
                  "zh": "斜率是 Sqft 行的 Coef：$b = 0.115$。其标准误为 $SE_b = 0.028$。检验统计量为 $t = 4.11$（验证：$0.115/0.028 \\approx 4.11$），双侧 P 值为 0.001。自由度 $= n - 2 = 15 - 2 = 13$。解释：面积每增加 1 平方英尺，预测房价约增加 0.115 千美元，且由于 P $= 0.001$ 很小，有强有力的证据表明存在线性关系。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP tip: always interpret the slope in context with units — \"for each one-unit increase in $x$, the PREDICTED mean $y$ changes by $b$ units.\" Avoid causal language (\"causes\") unless the data came from a randomized experiment, and never say the slope tells you the value of $y$, only how the predicted mean of $y$ changes.",
              "zh": "AP 提示：始终结合情境和单位解释斜率——“$x$ 每增加一个单位，$y$ 的‘预测’均值改变 $b$ 个单位。”除非数据来自随机化实验，否则避免因果性措辞（“导致”），并且绝不能说斜率告诉你 $y$ 的值，它只说明 $y$ 的预测均值如何变化。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In inference for regression, the sample slope $b$ is used to estimate which quantity?",
                "zh": "在回归推断中，样本斜率 $b$ 用来估计哪个量？"
              },
              "choices": [
                "The correlation $r$ / 相关系数 $r$",
                "The population (true) slope $\\beta$ / 总体（真实）斜率 $\\beta$",
                "The sample intercept $a$ / 样本截距 $a$",
                "The standard error $SE_b$ / 标准误 $SE_b$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The statistic $b$ is an estimate of the parameter $\\beta$, the slope of the population regression line. The correlation and the intercept are different quantities, and $SE_b$ describes the variability of $b$, not what $b$ estimates.",
                "zh": "统计量 $b$ 是参数 $\\beta$（总体回归线斜率）的估计。相关系数和截距是不同的量，而 $SE_b$ 描述的是 $b$ 的变异性，并非 $b$ 所估计的对象。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A regression uses a random sample of $n = 25$ observations. How many degrees of freedom does the $t$ procedure for the slope use?",
                "zh": "一项回归使用 $n = 25$ 个观测的随机样本。斜率的 $t$ 方法使用多少自由度？"
              },
              "answer": "23",
              "accept": [
                "23",
                "df=23",
                "23 degrees of freedom"
              ],
              "explanation": {
                "en": "For inference on a slope, $df = n - 2 = 25 - 2 = 23$. Two degrees of freedom are lost because both the slope and intercept are estimated; using $n - 1$ is the mistake made with a single mean.",
                "zh": "对斜率的推断，$df = n - 2 = 25 - 2 = 23$。因为同时估计了斜率和截距，损失两个自由度；用 $n - 1$ 是单个均值时才犯的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A residual plot shows random scatter but the vertical spread of residuals grows steadily as $x$ increases (a fan shape). Which LINER condition is violated?",
                "zh": "一张残差图显示散布随机，但残差的竖直散布随 $x$ 增大而稳步增加（呈喇叭形）。违反了哪个 LINER 条件？"
              },
              "choices": [
                "Linear / 线性",
                "Independent / 独立",
                "Random / 随机",
                "Equal SD / 等标准差"
              ],
              "answer": 3,
              "explanation": {
                "en": "A fanning residual plot means the standard deviation of $y$ changes with $x$, violating the Equal SD condition. Linearity would fail only if the residuals showed a curved pattern; independence and randomness are about how the data were collected.",
                "zh": "呈喇叭形的残差图意味着 $y$ 的标准差随 $x$ 变化，违反了等标准差条件。只有当残差呈现弯曲模式时才违反线性；独立与随机则关乎数据的收集方式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Software reports a slope of $b = 3.2$ with $SE_b = 0.8$. What is the value of the test statistic $t = b/SE_b$ for testing $H_0: \\beta = 0$?",
                "zh": "软件报告斜率 $b = 3.2$，$SE_b = 0.8$。检验 $H_0: \\beta = 0$ 的统计量 $t = b/SE_b$ 是多少？"
              },
              "answer": "4",
              "accept": [
                "4",
                "4.0",
                "4.00"
              ],
              "explanation": {
                "en": "$t = b/SE_b = 3.2/0.8 = 4$. This matches the T column that software prints in the slope's row.",
                "zh": "$t = b/SE_b = 3.2/0.8 = 4$。这与软件在斜率所在行打印的 T 列一致。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A 95% confidence interval for a regression slope is $(1.4, 6.6)$. What can you conclude about a test of $H_0: \\beta = 0$ at $\\alpha = 0.05$?",
                "zh": "某回归斜率的 95% 置信区间为 $(1.4, 6.6)$。关于在 $\\alpha = 0.05$ 下检验 $H_0: \\beta = 0$，你能得出什么结论？"
              },
              "choices": [
                "Fail to reject $H_0$; 0 is a plausible slope. / 不拒绝 $H_0$；0 是合理的斜率。",
                "Cannot tell without the P-value. / 没有 P 值就无法判断。",
                "Reject $H_0$; 0 is not in the interval, so there is evidence of a linear relationship. / 拒绝 $H_0$；0 不在区间内，故有线性关系的证据。",
                "Accept $H_0$; the interval proves the slope is positive. / 接受 $H_0$；区间证明斜率为正。"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since 0 lies outside the 95% interval, a two-sided test at $\\alpha = 0.05$ rejects $H_0$, giving evidence of a linear relationship. We never \"accept\" $H_0$, and the interval alone is enough to reach this conclusion.",
                "zh": "由于 0 落在 95% 区间之外，$\\alpha = 0.05$ 的双侧检验拒绝 $H_0$，从而有线性关系的证据。我们绝不“接受” $H_0$，且仅凭该区间就足以得出此结论。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For a slope with $b = 4.0$ and $SE_b = 1.5$, use $t^{*} = 2.10$ to find the UPPER endpoint of the 95% confidence interval $b \\pm t^{*} \\cdot SE_b$. (Round to 2 decimals.)",
                "zh": "某斜率 $b = 4.0$，$SE_b = 1.5$，用 $t^{*} = 2.10$ 求 95% 置信区间 $b \\pm t^{*} \\cdot SE_b$ 的“上”端点。（保留 2 位小数。）"
              },
              "answer": "7.15",
              "accept": [
                "7.15",
                "7.2",
                "7.150"
              ],
              "explanation": {
                "en": "The margin of error is $t^{*} \\cdot SE_b = 2.10 \\times 1.5 = 3.15$, so the upper endpoint is $4.0 + 3.15 = 7.15$ (the lower endpoint would be $4.0 - 3.15 = 0.85$).",
                "zh": "误差范围为 $t^{*} \\cdot SE_b = 2.10 \\times 1.5 = 3.15$，故上端点为 $4.0 + 3.15 = 7.15$（下端点为 $4.0 - 3.15 = 0.85$）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the null hypothesis for the standard test of whether a linear relationship exists between $x$ and $y$?",
                "zh": "检验 $x$ 与 $y$ 之间是否存在线性关系的标准检验，其原假设是什么？"
              },
              "choices": [
                "$H_0: \\beta = 0$ (the true slope is zero) / $H_0: \\beta = 0$（真实斜率为零）",
                "$H_0: \\beta \\ne 0$ / $H_0: \\beta \\ne 0$",
                "$H_0: b = 0$ (the sample slope is zero) / $H_0: b = 0$（样本斜率为零）",
                "$H_0: r = 1$ / $H_0: r = 1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The null says the population slope is zero, $H_0: \\beta = 0$, meaning no linear relationship. Hypotheses are always about the parameter $\\beta$, never the sample statistic $b$, and $\\beta \\ne 0$ is the alternative, not the null.",
                "zh": "原假设表示总体斜率为零，即 $H_0: \\beta = 0$，意味着没有线性关系。假设总是针对参数 $\\beta$，而不是样本统计量 $b$；$\\beta \\ne 0$ 是备择假设，而非原假设。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A regression of weekly sales (in \\$1000s) on advertising spend (in \\$1000s) gives slope $b = 2.3$. Which is the best interpretation?",
                "zh": "用广告支出（千美元）回归每周销售额（千美元），得到斜率 $b = 2.3$。哪种解释最恰当？"
              },
              "choices": [
                "Weekly sales are always \\$2300. / 每周销售额总是 2300 美元。",
                "Advertising causes sales to rise by \\$2300. / 广告导致销售额上升 2300 美元。",
                "For every \\$1000 spent on advertising, sales are \\$2.3 thousand. / 每花 1000 美元广告，销售额为 2.3 千美元。",
                "For each additional \\$1000 spent on advertising, predicted mean weekly sales increase by \\$2300. / 广告支出每增加 1000 美元，预测的每周平均销售额增加 2300 美元。"
              ],
              "answer": 3,
              "explanation": {
                "en": "The slope describes how the PREDICTED mean response changes per one-unit increase in $x$: each extra \\$1000 of advertising raises predicted mean sales by 2.3 thousand dollars. It is not a fixed value of $y$, and causal wording is unjustified for observational data.",
                "zh": "斜率描述的是 $x$ 每增加一个单位时“预测”均值响应的变化：每多花 1000 美元广告，预测的平均销售额增加 2.3 千美元。它不是 $y$ 的固定值，且观察性数据不能使用因果性措辞。"
              }
            }
          ]
        }
      ]
    }
  ]
}
