export default {
  "exploring-one-variable-data/displaying-and-describing-distributions": [
    {
      "type": "mc",
      "question": {
        "en": "A researcher records four variables for each student: eye color, five-digit home ZIP code, number of siblings, and type of pet owned. Which of these variables is quantitative?",
        "zh": "一位研究者为每名学生记录四个变量：眼睛颜色、五位数的家庭邮政编码、兄弟姐妹的数量，以及所养宠物的种类。以下哪个变量是定量（数值型）变量？"
      },
      "choices": [
        "Eye color",
        "Home ZIP code",
        "Number of siblings",
        "Type of pet owned"
      ],
      "answer": 2,
      "explanation": {
        "en": "A quantitative variable takes numerical values for which arithmetic (like averaging) makes sense; number of siblings qualifies. ZIP code is the classic trap: it is written with digits but only labels a location, so it is categorical and averaging ZIP codes is meaningless.",
        "zh": "定量变量取的是可以进行算术运算（例如求平均）的数值；兄弟姐妹的数量符合此条件。邮政编码是经典陷阱：它虽由数字写成，但只是地点的标签，因此属于分类变量，对邮政编码求平均没有意义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A histogram of household incomes shows most bars piled up at the lower values with a long thin tail stretching toward the high values on the right. What is the shape of this distribution?",
        "zh": "一张家庭收入的直方图显示大多数柱子堆积在较低的数值处，而向右侧的高数值延伸出一条又长又细的尾巴。这个分布的形状是什么？"
      },
      "choices": [
        "Symmetric",
        "Skewed to the right",
        "Skewed to the left",
        "Uniform"
      ],
      "answer": 1,
      "explanation": {
        "en": "Skewness is named for the direction of the long tail, not where the peak sits. The tail stretches toward the high (right) side, so the distribution is skewed right. A common error is to name it after the bulk of the data on the left and call it left-skewed.",
        "zh": "偏斜的方向以长尾所指的方向命名，而不是以峰所在的位置命名。尾巴向高值（右侧）延伸，所以分布是右偏。常见错误是按左侧数据集中的位置命名，误称为左偏。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Consider this stemplot (stem = tens digit, leaf = ones digit):\\n1 | 2 5\\n2 | 0 3 3 8\\n3 | 1 4\\n4 | 6\\nWhat is the maximum data value?",
        "zh": "考虑以下茎叶图（茎 = 十位数，叶 = 个位数）：\\n1 | 2 5\\n2 | 0 3 3 8\\n3 | 1 4\\n4 | 6\\n数据的最大值是多少？"
      },
      "choices": [
        "$46$",
        "$4$",
        "$6$",
        "$4.6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The largest value is read from the last stem-and-leaf pair: stem 4 with leaf 6 gives 46. Answering 4 or 6 is the classic mistake of reading only the stem or only the leaf instead of combining them into a whole number.",
        "zh": "最大值由最后一组茎与叶读出：茎 4 配叶 6 得到 46。答 4 或 6 是典型错误，即只读了茎或只读了叶，而没有把它们组合成一个完整的数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation is a pie chart best suited for?",
        "zh": "饼图最适合用于以下哪种情形？"
      },
      "choices": [
        "Showing how a quantitative variable changes over time",
        "Displaying the shape of a distribution of test scores",
        "Comparing the spread of two quantitative data sets",
        "Showing how the categories of one categorical variable divide up a whole"
      ],
      "answer": 3,
      "explanation": {
        "en": "A pie chart displays the parts-of-a-whole breakdown of a single categorical variable, where all slices sum to 100%. The other options involve quantitative data or spread, which are better shown with dotplots, histograms, or boxplots, not pie charts.",
        "zh": "饼图展示单个分类变量各类别占整体的比例，所有扇形加起来为 100%。其他选项涉及定量数据或离散程度，更适合用点图、直方图或箱线图来展示，而不是饼图。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A distribution of home prices is strongly skewed to the right. How do the mean and median compare?",
        "zh": "某地房价的分布强烈右偏。均值与中位数相比如何？"
      },
      "choices": [
        "The mean is less than the median",
        "The mean equals the median",
        "The mean is greater than the median",
        "It is impossible to tell without the data"
      ],
      "answer": 2,
      "explanation": {
        "en": "The mean is not resistant, so the long right tail (a few very expensive homes) pulls it upward, making the mean greater than the median. Assuming mean = median is only valid for a symmetric distribution.",
        "zh": "均值不具抗差性，因此长长的右尾（少数非常昂贵的房子）把它向上拉，使均值大于中位数。认为均值等于中位数只在对称分布下才成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A dotplot of the number of hours students slept shows two clearly separated clusters, one peak near 5 hours and another peak near 8 hours. What is the best term for this shape?",
        "zh": "一张关于学生睡眠时长的点图显示出两个明显分开的簇，一个峰在 5 小时附近，另一个峰在 8 小时附近。用哪个术语描述这种形状最合适？"
      },
      "choices": [
        "Uniform",
        "Bimodal",
        "Symmetric",
        "Skewed left"
      ],
      "answer": 1,
      "explanation": {
        "en": "Two distinct peaks make the distribution bimodal, which often signals two different subgroups blended together. Uniform would mean the dots are roughly level across all values, which is not the case here.",
        "zh": "两个明显的峰使该分布成为双峰分布，这常常提示两个不同的子群体混合在一起。均匀分布则意味着各数值处的点大致等高，而此处并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A distribution of incomes is heavily skewed with a few extreme high outliers. Which single measure best describes its center?",
        "zh": "某收入分布严重偏斜，并有少数极端的高离群值。用哪一个量来描述其中心最合适？"
      },
      "choices": [
        "The mean",
        "The range",
        "The standard deviation",
        "The median"
      ],
      "answer": 3,
      "explanation": {
        "en": "The median is resistant to skew and outliers, so it best represents a typical value for a skewed distribution. The range and standard deviation measure spread, not center, and the mean is dragged toward the extreme values.",
        "zh": "中位数对偏斜和离群值具有抗差性，因此最能代表偏斜分布的典型值。极差和标准差衡量的是离散程度而非中心，而均值会被极端值拉偏。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two classes take the same exam. Class A has a median of 82; Class B has a median of 75. Which statement is a proper comparison of center?",
        "zh": "两个班级参加同一场考试。A 班的中位数为 82，B 班的中位数为 75。下列哪一句是对中心的恰当比较？"
      },
      "choices": [
        "Class A's median (82) is higher than Class B's median (75), so Class A's scores are centered higher.",
        "Class A has a median of 82.",
        "Class B's scores are more spread out.",
        "Both classes are skewed to the right."
      ],
      "answer": 0,
      "explanation": {
        "en": "Comparing distributions requires explicit comparative language linking the two groups. Only the first choice states both medians and says one is higher, comparing center. The others describe a single class, discuss spread, or discuss shape rather than comparing center.",
        "zh": "比较分布需要使用把两组明确联系起来的比较性语言。只有第一个选项同时给出两个中位数并指出其中一个更高，从而比较了中心。其余选项只描述单个班级，或谈论离散程度、形状，而非比较中心。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is a key difference between a bar chart and a histogram?",
        "zh": "条形图与直方图之间的一个关键区别是什么？"
      },
      "choices": [
        "A histogram can only be used for categorical data",
        "A bar chart always shows relative frequencies while a histogram shows counts",
        "In a histogram the bars touch because the variable is quantitative; in a bar chart the bars have gaps because the variable is categorical",
        "There is no real difference; the two terms are interchangeable"
      ],
      "answer": 2,
      "explanation": {
        "en": "A histogram groups a quantitative variable into adjacent intervals, so its bars touch, while a bar chart shows separate categories with gaps between the bars. Treating the two as interchangeable is a common error; the horizontal axis type (quantitative vs categorical) is what distinguishes them.",
        "zh": "直方图把定量变量分组到相邻的区间中，因此柱子相互紧挨；而条形图展示彼此独立的类别，柱子之间有间隔。把两者视为可互换是常见错误；区分它们的关键在于横轴的类型（定量还是分类）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a data set, $Q_1 = 20$ and $Q_3 = 40$. Using the $1.5 \\\\times IQR$ rule, which of the following observed values is an outlier?",
        "zh": "对某数据集，$Q_1 = 20$ 且 $Q_3 = 40$。使用 $1.5 \\\\times IQR$ 规则，以下哪个观测值是离群值？"
      },
      "choices": [
        "$65$",
        "$75$",
        "$50$",
        "$10$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Here $IQR = 40 - 20 = 20$ and $1.5 \\\\times IQR = 30$, so the fences are $20 - 30 = -10$ and $40 + 30 = 70$. Only 75 falls beyond a fence (above 70), so it is the outlier. Values like 65 and 50 sit inside the fences and are not outliers.",
        "zh": "此处 $IQR = 40 - 20 = 20$，$1.5 \\\\times IQR = 30$，故上下界为 $20 - 30 = -10$ 和 $40 + 30 = 70$。只有 75 超出了界限（大于 70），因此它是离群值。65 和 50 都落在界限之内，不是离群值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A distribution of house prices is strongly right-skewed. Which pair of summary statistics is most appropriate to report?",
        "zh": "某房价分布强烈右偏。报告下列哪一对汇总统计量最为合适？"
      },
      "choices": [
        "Mean and standard deviation",
        "Mean and range",
        "Median and mean",
        "Median and IQR"
      ],
      "answer": 3,
      "explanation": {
        "en": "For a skewed distribution, report resistant measures: the median for center and the IQR for spread. The mean and standard deviation are both non-resistant and would be distorted by the long tail, so that pair is inappropriate here.",
        "zh": "对于偏斜分布，应报告具有抗差性的量：用中位数表示中心，用四分位距表示离散程度。均值和标准差都不具抗差性，会被长尾扭曲，因此那一对在此不合适。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A student wants to graph the variable \"number of pets owned\" (0, 1, 2, 3, ...) for 40 households. Which display is appropriate for this variable?",
        "zh": "一名学生想为 40 户家庭的变量\"所养宠物数量\"（0、1、2、3……）作图。以下哪种图适合该变量？"
      },
      "choices": [
        "A dotplot or histogram, because the variable is quantitative",
        "A pie chart, because each count is a slice of the whole",
        "Only a bar chart, because the values are whole numbers",
        "A scatterplot, because there is one variable"
      ],
      "answer": 0,
      "explanation": {
        "en": "Number of pets is a quantitative (discrete) variable, so a dotplot or histogram is appropriate for showing its distribution. A pie chart is for categorical parts-of-a-whole, and a scatterplot requires two quantitative variables, so neither fits a single quantitative variable.",
        "zh": "所养宠物数量是定量（离散）变量，因此用点图或直方图来展示其分布是合适的。饼图用于分类变量的整体占比，散点图需要两个定量变量，二者都不适合单个定量变量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the median of this data set: 12, 15, 20, 23, 23, 28, 31, 34, 46. Give an integer.",
        "zh": "求以下数据集的中位数：12、15、20、23、23、28、31、34、46。请填一个整数。"
      },
      "answer": "23",
      "accept": [
        "23.0"
      ],
      "explanation": {
        "en": "The nine values are already in order, so the median is the middle (5th) value. Counting in from either end, the 5th value is 23. With an odd number of values there is no averaging of two middle numbers.",
        "zh": "这九个数已按大小排列，因此中位数是中间那个（第 5 个）值。从任一端数起，第 5 个值是 23。当数据个数为奇数时，不需要对中间两个数求平均。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the range of this data set: 4, 8, 15, 16, 23, 42. Give an integer.",
        "zh": "求以下数据集的极差：4、8、15、16、23、42。请填一个整数。"
      },
      "answer": "38",
      "accept": [],
      "explanation": {
        "en": "The range is the maximum minus the minimum: $42 - 4 = 38$. Note the range is a single number describing spread, not the interval \"4 to 42.\"",
        "zh": "极差是最大值减最小值：$42 - 4 = 38$。注意极差是描述离散程度的单个数字，而不是区间\"4 到 42\"。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the ordered data 2, 4, 6, 8, 10, 12, 14, 16, find the interquartile range (IQR). Give an integer.",
        "zh": "对于已排序的数据 2、4、6、8、10、12、14、16，求四分位距（IQR）。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "With 8 values, split into a lower half (2, 4, 6, 8) and upper half (10, 12, 14, 16). $Q_1$ is the median of the lower half, $(4+6)/2 = 5$, and $Q_3$ is $(12+14)/2 = 13$, so $IQR = 13 - 5 = 8$.",
        "zh": "共有 8 个值，分成下半部分（2、4、6、8）和上半部分（10、12、14、16）。$Q_1$ 是下半部分的中位数 $(4+6)/2 = 5$，$Q_3$ 是 $(12+14)/2 = 13$，故 $IQR = 13 - 5 = 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a survey of 200 students, 50 said soccer was their favorite sport. What percent of the students chose soccer? Answer as a percent.",
        "zh": "在一项对 200 名学生的调查中，有 50 人说足球是他们最喜欢的运动。选择足球的学生占百分之多少？请以百分数作答。"
      },
      "answer": "25%",
      "accept": [
        "25",
        "25.0%",
        "25.0"
      ],
      "explanation": {
        "en": "The relative frequency is $50/200 = 0.25$, which is 25%. This proportion of a whole is exactly what a bar chart or pie chart of the categorical variable would display.",
        "zh": "相对频率为 $50/200 = 0.25$，即 25%。这个占整体的比例正是该分类变量的条形图或饼图所要展示的内容。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A dotplot of quiz scores shows: score 6 has 2 dots, score 7 has 5 dots, score 8 has 8 dots, score 9 has 4 dots, and score 10 has 1 dot. How many students scored 8 or higher? Give an integer.",
        "zh": "一张测验分数的点图显示：得 6 分的有 2 个点，得 7 分的有 5 个点，得 8 分的有 8 个点，得 9 分的有 4 个点，得 10 分的有 1 个点。有多少名学生得了 8 分或以上？请填一个整数。"
      },
      "answer": "13",
      "accept": [],
      "explanation": {
        "en": "Each dot represents one student. Scores of 8 or higher account for $8 + 4 + 1 = 13$ dots. A common slip is to forget the dots at 10 (or to include the 5 dots at 7, which are below 8).",
        "zh": "每个点代表一名学生。得 8 分或以上的共有 $8 + 4 + 1 = 13$ 个点。常见失误是漏掉 10 分处的点（或误把 7 分处的 5 个点算进去，而 7 分低于 8 分）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the mean of the data set 3, 7, 7, 9, 15. Round to one decimal place.",
        "zh": "求数据集 3、7、7、9、15 的均值。请保留一位小数。"
      },
      "answer": "8.2",
      "accept": [
        "8.20"
      ],
      "explanation": {
        "en": "Add the values: $3 + 7 + 7 + 9 + 15 = 41$, then divide by $n = 5$ to get $41/5 = 8.2$. The mean uses every value, which is why the large value 15 pulls it above the median of 7.",
        "zh": "把各值相加：$3 + 7 + 7 + 9 + 15 = 41$，再除以 $n = 5$ 得 $41/5 = 8.2$。均值用到每一个数值，这正是较大的 15 把它拉到高于中位数 7 的原因。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A data set has $Q_1 = 30$ and $Q_3 = 50$. Using the $1.5 \\\\times IQR$ rule, what is the value of the upper fence above which points are flagged as outliers? Give an integer.",
        "zh": "某数据集有 $Q_1 = 30$ 且 $Q_3 = 50$。使用 $1.5 \\\\times IQR$ 规则，判定离群值的上界（超过它的点被标记为离群值）是多少？请填一个整数。"
      },
      "answer": "80",
      "accept": [],
      "explanation": {
        "en": "The $IQR = 50 - 30 = 20$, so $1.5 \\\\times IQR = 30$. The upper fence is $Q_3 + 1.5 \\\\times IQR = 50 + 30 = 80$. A frequent error is adding $1.5 \\\\times IQR$ to the median or to $Q_1$ instead of to $Q_3$.",
        "zh": "$IQR = 50 - 30 = 20$，故 $1.5 \\\\times IQR = 30$。上界为 $Q_3 + 1.5 \\\\times IQR = 50 + 30 = 80$。常见错误是把 $1.5 \\\\times IQR$ 加到中位数或 $Q_1$ 上，而不是加到 $Q_3$ 上。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many data values are represented in this stemplot (stem = tens, leaf = ones)?\\n0 | 3 7\\n1 | 1 1 4 8\\n2 | 2 5 5 5\\n3 | 0\\nGive an integer.",
        "zh": "以下茎叶图（茎 = 十位，叶 = 个位）表示了多少个数据值？\\n0 | 3 7\\n1 | 1 1 4 8\\n2 | 2 5 5 5\\n3 | 0\\n请填一个整数。"
      },
      "answer": "11",
      "accept": [],
      "explanation": {
        "en": "Each leaf is one data value, so count all the leaves: $2 + 4 + 4 + 1 = 11$. A common mistake is counting the 4 stems instead of the individual leaves.",
        "zh": "每一片叶子代表一个数据值，因此把所有叶子数出来：$2 + 4 + 4 + 1 = 11$。常见错误是数了 4 个茎，而不是逐一数叶子。"
      }
    }
  ],
  "exploring-one-variable-data/summary-statistics-and-normal-distribution": [
    {
      "type": "mc",
      "question": {
        "en": "A distribution of household incomes in a city is strongly skewed to the right. Which statement about the mean and median is correct?",
        "zh": "某城市家庭收入的分布呈明显右偏（正偏）。关于其均值与中位数，下列哪种说法正确？"
      },
      "choices": [
        "Mean $<$ median",
        "Mean $=$ median",
        "Mean $>$ median",
        "The relationship cannot be determined without the data"
      ],
      "answer": 2,
      "explanation": {
        "en": "In a right-skewed distribution the long right tail pulls the mean toward the large values, so the mean exceeds the median. Choosing \"mean $<$ median\" describes a left-skewed distribution, and the relationship is fully determined by the direction of skew.",
        "zh": "在右偏分布中，长长的右尾把均值拉向较大的数值，所以均值大于中位数。选“均值 $<$ 中位数”描述的是左偏分布；偏态方向已经确定了这一关系，并非无法判断。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the mean of the data set $4,\\ 8,\\ 15,\\ 16,\\ 23,\\ 42$. Give an exact value.",
        "zh": "求数据集 $4,\\ 8,\\ 15,\\ 16,\\ 23,\\ 42$ 的均值。请给出精确值。"
      },
      "answer": "18",
      "accept": [
        "18.0"
      ],
      "explanation": {
        "en": "The sum is $4+8+15+16+23+42 = 108$, and there are $6$ values, so $\\bar{x} = 108/6 = 18$.",
        "zh": "总和为 $4+8+15+16+23+42 = 108$，共 $6$ 个数值，故 $\\bar{x} = 108/6 = 18$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A data set has mean $50$ and median $50$. A single new value of $200$ is added to the set. What is the most likely effect?",
        "zh": "某数据集的均值为 $50$，中位数为 $50$。现向该数据集中加入一个新值 $200$。最可能的影响是什么？"
      },
      "choices": [
        "The mean increases substantially while the median changes only slightly",
        "The median increases substantially while the mean changes only slightly",
        "The mean and the median increase by the same amount",
        "Neither the mean nor the median changes"
      ],
      "answer": 0,
      "explanation": {
        "en": "The mean uses every value, so a large outlier of $200$ pulls it noticeably upward. The median depends only on position, so adding one high value shifts it by at most one slot. Confusing the two reverses the correct roles: it is the mean, not the median, that is sensitive to outliers.",
        "zh": "均值用到每一个数据，因此 $200$ 这个较大的离群值会把均值明显拉高。中位数只取决于位置，加入一个高值最多让它移动一个位置。把两者搞反就会误选：对离群值敏感的是均值，而不是中位数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does the interquartile range (IQR) measure?",
        "zh": "四分位距（IQR）度量的是什么？"
      },
      "choices": [
        "The range of the entire data set",
        "The range of the middle $50\\%$ of the data",
        "The average distance of each value from the mean",
        "The difference between the mean and the median"
      ],
      "answer": 1,
      "explanation": {
        "en": "The IQR is $Q_3 - Q_1$, the spread of the middle half of the ordered data. The range of the whole data set is $\\max - \\min$, and the average distance from the mean describes the standard deviation, not the IQR.",
        "zh": "IQR 等于 $Q_3 - Q_1$，即有序数据中间一半的散布程度。整个数据集的极差是 $\\max - \\min$，而各数据到均值的平均距离描述的是标准差，并非 IQR。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the sorted data $2,\\ 5,\\ 7,\\ 8,\\ 11,\\ 14,\\ 16,\\ 18$, find the interquartile range (IQR). Give an exact value.",
        "zh": "对于已排序的数据 $2,\\ 5,\\ 7,\\ 8,\\ 11,\\ 14,\\ 16,\\ 18$，求四分位距（IQR）。请给出精确值。"
      },
      "answer": "9",
      "accept": [
        "9.0"
      ],
      "explanation": {
        "en": "With $n=8$, the lower half is $2,5,7,8$ so $Q_1 = (5+7)/2 = 6$, and the upper half is $11,14,16,18$ so $Q_3 = (14+16)/2 = 15$. Thus $\\text{IQR} = 15 - 6 = 9$.",
        "zh": "当 $n=8$ 时，下半部分为 $2,5,7,8$，故 $Q_1 = (5+7)/2 = 6$；上半部分为 $11,14,16,18$，故 $Q_3 = (14+16)/2 = 15$。因此 $\\text{IQR} = 15 - 6 = 9$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a boxplot, the right whisker is much longer than the left, and the median line sits closer to $Q_1$ than to $Q_3$. What shape does this suggest?",
        "zh": "在一张箱线图中，右侧的须比左侧长得多，且中位数线更靠近 $Q_1$ 而不是 $Q_3$。这提示分布是什么形状？"
      },
      "choices": [
        "Skewed left",
        "Symmetric",
        "Uniform",
        "Skewed right"
      ],
      "answer": 3,
      "explanation": {
        "en": "A long right whisker and a median pushed toward $Q_1$ both indicate a longer upper tail, which is right (positive) skew. A long left whisker with the median near $Q_3$ would instead indicate left skew.",
        "zh": "较长的右须以及被挤向 $Q_1$ 的中位数都表明上侧尾部更长，这就是右偏（正偏）。反之，若左须长且中位数靠近 $Q_3$，则表示左偏。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A distribution has mean $\\mu = 70$ and standard deviation $\\sigma = 5$. Find the $z$-score of the value $x = 82$. Give an exact decimal.",
        "zh": "某分布的均值 $\\mu = 70$，标准差 $\\sigma = 5$。求数值 $x = 82$ 的 $z$ 分数。请给出精确的小数。"
      },
      "answer": "2.4",
      "accept": [
        "+2.4",
        "2.40"
      ],
      "explanation": {
        "en": "Standardize with $z = \\frac{x - \\mu}{\\sigma} = \\frac{82 - 70}{5} = \\frac{12}{5} = 2.4$. The value lies $2.4$ standard deviations above the mean.",
        "zh": "用 $z = \\frac{x - \\mu}{\\sigma} = \\frac{82 - 70}{5} = \\frac{12}{5} = 2.4$ 进行标准化。该数值位于均值上方 $2.4$ 个标准差处。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Student A scored $85$ on a test with mean $80$ and SD $5$. Student B scored $90$ on a different test with mean $78$ and SD $8$. Relative to their own classes, who performed better?",
        "zh": "甲同学在一次均值为 $80$、标准差为 $5$ 的考试中得了 $85$ 分。乙同学在另一次均值为 $78$、标准差为 $8$ 的考试中得了 $90$ 分。相对于各自班级，谁表现更好？"
      },
      "choices": [
        "Student B, whose score is $1.5$ standard deviations above the mean",
        "Student A, whose score is $1.5$ standard deviations above the mean",
        "They performed equally well relative to their classes",
        "Student A, because a smaller standard deviation makes any score more impressive"
      ],
      "answer": 0,
      "explanation": {
        "en": "Compare standardized scores: $z_A = (85-80)/5 = 1.0$ and $z_B = (90-78)/8 = 1.5$. Student B is farther above the class mean in standard-deviation units. Comparing raw scores or the size of the SD directly, rather than the $z$-scores, leads to the wrong choice.",
        "zh": "比较标准化分数：$z_A = (85-80)/5 = 1.0$，$z_B = (90-78)/8 = 1.5$。以标准差为单位，乙同学高于班级均值更多。若直接比较原始分数或标准差大小，而不看 $z$ 分数，就会选错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a normally distributed variable, approximately what percent of observations fall within $2$ standard deviations of the mean?",
        "zh": "对于服从正态分布的变量，大约有百分之多少的观测值落在均值上下 $2$ 个标准差之内？"
      },
      "choices": [
        "$68\\%$",
        "$99.7\\%$",
        "$95\\%$",
        "$50\\%$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The empirical (68-95-99.7) rule states about $95\\%$ of values lie within $2$ standard deviations of the mean. $68\\%$ corresponds to $1$ SD and $99.7\\%$ to $3$ SD.",
        "zh": "经验法则（68-95-99.7 法则）指出，大约 $95\\%$ 的数据落在均值上下 $2$ 个标准差之内。$68\\%$ 对应 $1$ 个标准差，$99.7\\%$ 对应 $3$ 个标准差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Adult female heights are approximately normal with mean $64$ inches and SD $2.5$ inches. Using the empirical rule, what percent of women are taller than $69$ inches? Answer as a percent.",
        "zh": "成年女性身高近似服从均值 $64$ 英寸、标准差 $2.5$ 英寸的正态分布。用经验法则估计，身高超过 $69$ 英寸的女性占百分之多少？请用百分数作答。"
      },
      "answer": "2.5%",
      "accept": [
        "2.5",
        "0.025",
        "2.5 %"
      ],
      "explanation": {
        "en": "The value $69$ is $64 + 2(2.5) = 69$, exactly $2$ SD above the mean. About $95\\%$ lie within $2$ SD, leaving $5\\%$ in the two tails, so each tail holds $5\\%/2 = 2.5\\%$.",
        "zh": "$69$ 恰好等于 $64 + 2(2.5) = 69$，即位于均值上方 $2$ 个标准差处。约 $95\\%$ 的数据落在 $2$ 个标准差之内，两尾共占 $5\\%$，故每一尾为 $5\\%/2 = 2.5\\%$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Test scores are normally distributed with mean $500$ and SD $100$. What is the proportion of scores above $650$?",
        "zh": "某考试成绩服从均值 $500$、标准差 $100$ 的正态分布。成绩高于 $650$ 的比例约为多少？"
      },
      "choices": [
        "$0.9332$",
        "$0.0668$",
        "$0.1500$",
        "$0.4332$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Standardize: $z = (650 - 500)/100 = 1.5$. Then $P(Z > 1.5) = 1 - 0.9332 = 0.0668$. The value $0.9332$ is the proportion below $650$, not above it.",
        "zh": "标准化：$z = (650 - 500)/100 = 1.5$。于是 $P(Z > 1.5) = 1 - 0.9332 = 0.0668$。$0.9332$ 是低于 $650$ 的比例，而不是高于 $650$ 的比例。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Test scores are normally distributed with mean $500$ and SD $100$. Find the $90$th percentile score (use $\\text{invNorm}(0.90) \\approx 1.2816$). Round to the nearest whole number.",
        "zh": "某考试成绩服从均值 $500$、标准差 $100$ 的正态分布。求第 $90$ 百分位对应的成绩（取 $\\text{invNorm}(0.90) \\approx 1.2816$）。请四舍五入到整数。"
      },
      "answer": "628",
      "accept": [
        "628.2",
        "628.16",
        "628.155"
      ],
      "explanation": {
        "en": "The $90$th percentile has $z = \\text{invNorm}(0.90) \\approx 1.2816$. Unstandardize: $x = \\mu + z\\sigma = 500 + 1.2816(100) \\approx 628$.",
        "zh": "第 $90$ 百分位对应 $z = \\text{invNorm}(0.90) \\approx 1.2816$。反标准化：$x = \\mu + z\\sigma = 500 + 1.2816(100) \\approx 628$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A teacher adds $10$ bonus points to every studentʼs score. How do the mean and standard deviation of the scores change?",
        "zh": "一位老师给每名学生的成绩都加上 $10$ 分奖励分。成绩的均值与标准差会如何变化？"
      },
      "choices": [
        "Both increase by $10$",
        "The mean is unchanged; the SD increases by $10$",
        "Both the mean and the SD increase by $10$",
        "The mean increases by $10$; the SD is unchanged"
      ],
      "answer": 3,
      "explanation": {
        "en": "Adding a constant shifts every value equally, so the mean rises by $10$, but the spacing between values is unchanged, so the standard deviation stays the same. Adding a constant never affects a measure of spread.",
        "zh": "加上一个常数使每个数值平移相同的量，因此均值增加 $10$；但数值之间的间距没有改变，所以标准差保持不变。加上常数永远不会影响任何度量散布的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Every measurement in a data set (originally in centimeters) is multiplied by $3$. What happens to the mean and the standard deviation?",
        "zh": "某数据集（原以厘米为单位）中的每个测量值都乘以 $3$。均值与标准差会发生什么变化？"
      },
      "choices": [
        "The mean is multiplied by $3$; the SD is unchanged",
        "The mean is unchanged; the SD is multiplied by $3$",
        "Both the mean and the SD are multiplied by $3$",
        "The mean is multiplied by $3$; the SD is multiplied by $9$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying every value by a constant $c$ multiplies both the mean and the standard deviation by $|c|$, here by $3$. The factor $9$ tempts you because the variance is multiplied by $c^2 = 9$, but the SD is the square root of the variance, so it scales by $3$.",
        "zh": "将每个数值都乘以常数 $c$，会使均值和标准差都乘以 $|c|$，此处为乘以 $3$。选 $9$ 是因为方差会乘以 $c^2 = 9$，但标准差是方差的平方根，因此只按 $3$ 倍缩放。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A data set has mean $20$ and standard deviation $4$. Each value is transformed by $y = 2x + 5$. Find the standard deviation of the new values $y$. Give an exact value.",
        "zh": "某数据集的均值为 $20$，标准差为 $4$。对每个数值作变换 $y = 2x + 5$。求新数值 $y$ 的标准差。请给出精确值。"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "The standard deviation is affected only by the multiplier: $\\sigma_y = |2|\\cdot 4 = 8$. Adding $5$ shifts the data but does not change the spread.",
        "zh": "标准差只受乘数影响：$\\sigma_y = |2|\\cdot 4 = 8$。加上 $5$ 只是平移数据，并不改变散布程度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After every value in a data set is converted to a $z$-score (standardized), what are the mean and standard deviation of the resulting $z$-scores?",
        "zh": "将某数据集中的每个数值都转换为 $z$ 分数（标准化）后，所得 $z$ 分数的均值与标准差分别是多少？"
      },
      "choices": [
        "Mean $0$, standard deviation $1$",
        "Mean $1$, standard deviation $0$",
        "Mean $0$, standard deviation $0$",
        "The same mean and standard deviation as the original data"
      ],
      "answer": 0,
      "explanation": {
        "en": "Standardizing subtracts the mean (centering the distribution at $0$) and divides by the SD (rescaling the spread to $1$). So $z$-scores always have mean $0$ and standard deviation $1$, regardless of the original units.",
        "zh": "标准化会减去均值（把分布中心移到 $0$）并除以标准差（把散布缩放为 $1$）。因此无论原始单位如何，$z$ 分数的均值总是 $0$，标准差总是 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When assessing whether a data set is approximately normal, which feature of a normal probability (quantile) plot supports normality?",
        "zh": "在评估某数据集是否近似正态时，正态概率图（分位数图）的哪一特征支持正态性？"
      },
      "choices": [
        "The points form a clear curved (bent) pattern",
        "The points fall approximately on a straight line",
        "The points cluster in the center with large gaps at both ends",
        "The corresponding histogram has exactly two peaks"
      ],
      "answer": 1,
      "explanation": {
        "en": "In a normal probability plot, roughly linear points indicate the data are consistent with a normal model. Systematic curvature signals skew or heavy tails, and a clearly bimodal histogram directly contradicts normality.",
        "zh": "在正态概率图中，若各点大致呈直线，说明数据与正态模型相符。若出现系统性弯曲，则提示偏态或厚尾；而明显双峰的直方图则直接与正态性相矛盾。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A data set has $Q_1 = 20$ and $Q_3 = 40$. Using the $1.5 \\times \\text{IQR}$ rule, find the upper fence above which a value is flagged as an outlier. Give an exact value.",
        "zh": "某数据集的 $Q_1 = 20$，$Q_3 = 40$。用 $1.5 \\times \\text{IQR}$ 法则，求判定离群值的上界（上栅栏）。请给出精确值。"
      },
      "answer": "70",
      "accept": [
        "70.0"
      ],
      "explanation": {
        "en": "The $\\text{IQR} = 40 - 20 = 20$. The upper fence is $Q_3 + 1.5\\times\\text{IQR} = 40 + 1.5(20) = 40 + 30 = 70$. Any value above $70$ is a potential outlier.",
        "zh": "$\\text{IQR} = 40 - 20 = 20$。上栅栏为 $Q_3 + 1.5\\times\\text{IQR} = 40 + 1.5(20) = 40 + 30 = 70$。超过 $70$ 的数值即为潜在离群值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pair of summary measures is resistant (robust) to outliers, making it preferable for strongly skewed data?",
        "zh": "下列哪一对汇总统计量对离群值具有抗性（稳健），因而更适合用于强偏态数据？"
      },
      "choices": [
        "Mean and standard deviation",
        "Mean and range",
        "Mean and IQR",
        "Median and IQR"
      ],
      "answer": 3,
      "explanation": {
        "en": "The median and IQR depend only on the ordered positions of values, so extreme observations barely affect them. The mean, standard deviation, and range all use the actual magnitudes and are pulled by outliers, so any pairing containing the mean is not fully resistant.",
        "zh": "中位数与 IQR 只取决于数值的排序位置，因此极端观测值几乎不影响它们。均值、标准差和极差都用到数值的实际大小，会被离群值拉动，所以任何包含均值的组合都不是完全稳健的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Test scores are normally distributed with mean $500$ and SD $100$. Using the empirical rule, what proportion of scores fall between $400$ and $600$? Give a decimal.",
        "zh": "某考试成绩服从均值 $500$、标准差 $100$ 的正态分布。用经验法则估计，成绩落在 $400$ 到 $600$ 之间的比例是多少？请用小数作答。"
      },
      "answer": "0.68",
      "accept": [
        "68%",
        "0.6826",
        "0.6827",
        ".68"
      ],
      "explanation": {
        "en": "The bounds $400$ and $600$ are exactly $1$ SD below and above the mean ($500 \\pm 100$). By the empirical rule, about $68\\%$ ($0.68$) of a normal distribution lies within $1$ standard deviation of the mean.",
        "zh": "$400$ 与 $600$ 恰好位于均值下方和上方 $1$ 个标准差处（$500 \\pm 100$）。根据经验法则，正态分布中约有 $68\\%$（即 $0.68$）的数据落在均值上下 $1$ 个标准差之内。"
      }
    }
  ],
  "exploring-two-variable-data/two-variable-associations": [
    {
      "type": "mc",
      "question": {
        "en": "A survey of 200 students records grade level (freshman/senior) and whether they own a car. The count of seniors who own a car divided by the total of 200 is an example of which kind of relative frequency?",
        "zh": "一项对 200 名学生的调查记录了年级（高一/高四）以及是否拥有汽车。拥有汽车的高四学生人数除以总数 200，属于哪种相对频率？"
      },
      "choices": [
        "A marginal relative frequency",
        "A joint relative frequency",
        "A conditional relative frequency",
        "A cumulative relative frequency"
      ],
      "answer": 1,
      "explanation": {
        "en": "Dividing a single cell count (seniors who own a car) by the grand total gives a joint relative frequency — it describes one combination of both variables. A marginal relative frequency would divide a row or column total by the grand total.",
        "zh": "将某一单元格的计数（拥有汽车的高四学生）除以总数，得到的是联合相对频率——它描述两个变量的一个组合。边际相对频率则是把某行或某列的合计除以总数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a two-way table, a row total divided by the grand total is called a:",
        "zh": "在双向表中，某一行的合计除以总数被称为："
      },
      "choices": [
        "Joint relative frequency",
        "Conditional relative frequency",
        "Marginal relative frequency",
        "Segmented relative frequency"
      ],
      "answer": 2,
      "explanation": {
        "en": "A marginal relative frequency comes from a margin (row or column total) divided by the grand total; it describes the distribution of just one variable. A joint relative frequency uses a single interior cell, not a margin total.",
        "zh": "边际相对频率来自某个边际（行或列的合计）除以总数，它只描述一个变量的分布。联合相对频率使用单个内部单元格，而非边际合计。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To decide whether there is an association between two categorical variables from a two-way table, you should mainly compare:",
        "zh": "要根据双向表判断两个分类变量之间是否存在关联，主要应比较："
      },
      "choices": [
        "Marginal relative frequencies of one variable",
        "Joint relative frequencies for every cell",
        "Conditional relative frequencies across the categories of the other variable",
        "The grand total to the row totals"
      ],
      "answer": 2,
      "explanation": {
        "en": "Association is judged by comparing conditional distributions: if the conditional relative frequencies of one variable differ across categories of the other, there is evidence of association. Marginal frequencies alone say nothing about how the variables relate.",
        "zh": "关联性通过比较条件分布来判断：如果一个变量的条件相对频率在另一个变量的各类别之间存在差异，就有关联的证据。仅看边际频率无法说明两个变量之间的关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A two-way table of 400 people cross-classifies Region (Urban/Rural) and Transit Use (Yes/No). Of 250 Urban people, 150 use transit. What proportion of Urban people use transit? Give a decimal to 2 places.",
        "zh": "一张 400 人的双向表按地区（城市/乡村）和是否使用公共交通（是/否）交叉分类。250 名城市居民中有 150 人使用公共交通。城市居民中使用公共交通的比例是多少？请填两位小数。"
      },
      "answer": "0.60",
      "accept": [
        "0.6",
        "60%",
        ".6",
        ".60"
      ],
      "explanation": {
        "en": "This is a conditional relative frequency: condition on Urban, so divide by the Urban total, $150/250 = 0.60$. Dividing by 400 would incorrectly give a joint relative frequency instead of the requested conditional proportion.",
        "zh": "这是一个条件相对频率：以城市为条件，因此除以城市的合计，$150/250 = 0.60$。若除以 400 则错误地得到联合相对频率，而非所要求的条件比例。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the same table (400 total, 250 Urban with 150 using transit; 150 Rural with 60 using transit), what percent of all 400 people are Rural transit users? Give a percent to 1 decimal place.",
        "zh": "沿用同一张表（总数 400，城市 250 人中 150 人使用公共交通；乡村 150 人中 60 人使用公共交通），乡村且使用公共交通的人占全部 400 人的百分之几？请填一位小数的百分数。"
      },
      "answer": "15.0%",
      "accept": [
        "15%",
        "0.15",
        ".15",
        "15.0"
      ],
      "explanation": {
        "en": "This is a joint relative frequency: the single cell (Rural AND transit user) over the grand total, $60/400 = 0.15 = 15.0\\%$. Conditioning on Rural instead ($60/150 = 40\\%$) answers a different question.",
        "zh": "这是一个联合相对频率：单个单元格（乡村且使用公共交通）除以总数，$60/400 = 0.15 = 15.0\\%$。若以乡村为条件（$60/150 = 40\\%$）则回答的是另一个问题。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two categorical variables in a two-way table would be described as showing NO association when:",
        "zh": "当出现以下哪种情况时，可以说双向表中的两个分类变量之间没有关联："
      },
      "choices": [
        "The joint relative frequencies are all equal",
        "The conditional distributions of one variable are the same across all categories of the other",
        "The marginal totals are equal",
        "The grand total equals the sum of the row totals"
      ],
      "answer": 1,
      "explanation": {
        "en": "No association means the conditional distributions are identical across categories — knowing one variable does not change the distribution of the other. Equal joint relative frequencies is not the criterion, since cell counts depend on the (possibly unequal) group sizes.",
        "zh": "没有关联意味着各类别的条件分布完全相同——已知一个变量不会改变另一个变量的分布。联合相对频率相等并不是判据，因为单元格计数依赖于（可能不相等的）各组规模。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A two-way table has row variable Treatment (A/B) and column variable Outcome (Success/Failure). Group A: 40 success, 60 failure. Group B: 45 success, 15 failure. Compare the conditional success rates and give the difference (A rate minus B rate) as a percent, rounded to the nearest whole percent (a negative number is fine).",
        "zh": "一张双向表的行变量为治疗方案（A/B），列变量为结果（成功/失败）。A 组：成功 40，失败 60。B 组：成功 45，失败 15。比较各组的条件成功率，并给出差值（A 的成功率减 B 的成功率），以百分数表示，四舍五入到最接近的整数百分比（负数也可以）。"
      },
      "answer": "-35%",
      "accept": [
        "-35",
        "-35.0%",
        "-0.35",
        "35% lower"
      ],
      "explanation": {
        "en": "Success rate for A is $40/100 = 40\\%$; for B it is $45/60 = 75\\%$. The difference is $40\\% - 75\\% = -35\\%$. Because the conditional rates differ substantially, there is evidence of association between treatment and outcome.",
        "zh": "A 组成功率为 $40/100 = 40\\%$；B 组为 $45/60 = 75\\%$。差值为 $40\\% - 75\\% = -35\\%$。由于条件成功率差异明显，说明治疗方案与结果之间存在关联的证据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is the best way to describe the overall pattern (form) of a scatterplot?",
        "zh": "下列哪一项是描述散点图整体模式（形状）的最佳方式？"
      },
      "choices": [
        "By its direction only: positive or negative",
        "By its center and spread",
        "By whether the points follow a linear or a curved pattern",
        "By the value of the sample mean of $y$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Form refers to the shape of the pattern — linear, curved, or clustered. Direction (positive/negative) and strength are separate features you also report, and center/spread are used for a single-variable distribution, not the form of a bivariate scatterplot.",
        "zh": "形状指的是模式的形态——线性、曲线或聚集。方向（正/负）和强度是另外要报告的特征，而中心和离散程度用于单变量分布，而非双变量散点图的形状。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A scatterplot shows that as the explanatory variable increases, the response variable tends to decrease, with points falling fairly tightly along a line. The best description is:",
        "zh": "一张散点图显示：随着解释变量增大，响应变量倾向于减小，且各点相当紧密地沿一条直线分布。最佳描述是："
      },
      "choices": [
        "Positive, linear, strong",
        "Negative, linear, strong",
        "Negative, curved, weak",
        "Positive, curved, moderate"
      ],
      "answer": 1,
      "explanation": {
        "en": "Decreasing trend means negative direction; points tightly along a line means linear form and strong association. Calling it positive reverses the direction, which is set by whether $y$ rises or falls as $x$ increases.",
        "zh": "递减趋势表示负方向；点紧密地沿直线分布表示线性形状且关联强。称其为正方向是把方向弄反了，方向由 $y$ 随 $x$ 增大是上升还是下降决定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about the correlation coefficient $r$ is TRUE?",
        "zh": "关于相关系数 $r$ 的下列陈述哪一项为真？"
      },
      "choices": [
        "The value of $r$ always lies between $-1$ and $1$, inclusive",
        "The value of $r$ can exceed $1$ for very strong relationships",
        "The value of $r$ carries the units of the response variable",
        "The value of $r$ measures how steep the regression line is"
      ],
      "answer": 0,
      "explanation": {
        "en": "By definition $-1 \\le r \\le 1$, with the extremes reached only for a perfect linear pattern. $r$ is unitless, so it cannot carry units, and it measures the strength/direction of a linear relationship, not the slope's steepness.",
        "zh": "根据定义 $-1 \\le r \\le 1$，只有在完美线性模式下才取到极值。$r$ 是无量纲的，因此不带单位，它衡量线性关系的强度与方向，而非斜率的陡峭程度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If every $x$-value in a data set is converted from meters to centimeters (multiplied by 100), the correlation $r$ between $x$ and $y$ will:",
        "zh": "如果把数据集中每个 $x$ 值从米换算成厘米（乘以 100），则 $x$ 与 $y$ 之间的相关系数 $r$ 将："
      },
      "choices": [
        "Be multiplied by 100",
        "Be divided by 100",
        "Change sign",
        "Stay exactly the same"
      ],
      "answer": 3,
      "explanation": {
        "en": "$r$ is unitless and unaffected by linear changes of scale or units on either variable, because it is computed from standardized values ($z$-scores). Thinking $r$ scales with the data confuses $r$ with the slope, which does depend on units.",
        "zh": "$r$ 是无量纲的，不受任一变量的线性尺度或单位变化的影响，因为它由标准化值（$z$ 分数）计算而来。认为 $r$ 会随数据放缩的想法把 $r$ 与斜率混淆了，斜率才依赖于单位。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A student claims that because two variables have $r = 0$, they are unrelated. What is the best critique?",
        "zh": "一名学生声称，因为两个变量的 $r = 0$，所以它们毫无关系。最恰当的批评是什么？"
      },
      "choices": [
        "$r$ only measures linear association; a strong curved relationship can still give $r \\approx 0$",
        "$r = 0$ proves the variables are independent",
        "$r = 0$ is impossible for real data",
        "A value of $r = 0$ means the correlation is perfectly negative"
      ],
      "answer": 0,
      "explanation": {
        "en": "$r$ only captures the strength of a linear relationship. Data lying on a strong parabola or other symmetric curve can have $r$ near $0$ while being tightly related. So $r = 0$ rules out a linear trend, not all relationships.",
        "zh": "$r$ 只反映线性关系的强度。位于一条强抛物线或其他对称曲线上的数据，其 $r$ 可能接近 $0$，但彼此关系紧密。因此 $r = 0$ 排除的是线性趋势，而非所有关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Four studies report correlations $r = 0.62$, $r = -0.88$, $r = 0.40$, and $r = -0.15$. Which one indicates the strongest linear relationship? Give the $r$ value, including its sign.",
        "zh": "四项研究报告的相关系数为 $r = 0.62$、$r = -0.88$、$r = 0.40$ 和 $r = -0.15$。哪一个表示最强的线性关系？请给出该 $r$ 值，并带上符号。"
      },
      "answer": "-0.88",
      "accept": [
        "-0.88",
        "-.88",
        "$r = -0.88$"
      ],
      "explanation": {
        "en": "Strength is measured by how close $|r|$ is to $1$, regardless of sign. Here $|-0.88| = 0.88$ is the largest, so $r = -0.88$ is strongest. Picking $0.62$ mistakes a positive sign for greater strength.",
        "zh": "强度由 $|r|$ 接近 $1$ 的程度衡量，与符号无关。此处 $|-0.88| = 0.88$ 最大，故 $r = -0.88$ 最强。选 $0.62$ 是误把正号当成了更强的关联。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A data set has $r = -0.7$. A single outlier far from the linear pattern is added. Compared with a resistant measure, is $r$ resistant to this outlier? Answer with one word: yes or no.",
        "zh": "某数据集的 $r = -0.7$。现加入一个远离线性模式的离群点。与稳健（抗差）度量相比，$r$ 对这个离群点稳健吗？请用一个词回答：是 或 否。"
      },
      "answer": "no",
      "accept": [
        "No",
        "not resistant",
        "no it is not"
      ],
      "explanation": {
        "en": "$r$ is NOT resistant: a single outlier can substantially change its value, sometimes even flipping the apparent direction. Like the mean and standard deviation on which it is built, $r$ is sensitive to extreme points.",
        "zh": "$r$ 不稳健：单个离群点就可能显著改变它的值，有时甚至使表观方向翻转。与其所依赖的均值和标准差一样，$r$ 对极端点很敏感。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A study finds a correlation of $r = 0.85$ between the number of firefighters sent to a fire and the amount of damage. Fill in the blank with one word: this is an example of correlation not implying ______.",
        "zh": "一项研究发现，派往火灾现场的消防员人数与损失金额之间的相关系数为 $r = 0.85$。请用一个词填空：这是相关不等于 ______ 的例子。"
      },
      "answer": "causation",
      "accept": [
        "Causation",
        "cause",
        "causality"
      ],
      "explanation": {
        "en": "A lurking variable — the size of the fire — drives both the number of firefighters and the damage, creating correlation without direct causation. Correlation, even when strong, does not by itself establish that one variable causes the other.",
        "zh": "一个潜在变量——火灾的规模——同时驱动消防员人数与损失金额，从而在没有直接因果关系的情况下产生相关。相关即使很强，本身也不能证明一个变量导致另一个变量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Correlation $r$ measured between $x$ and $y$ will always equal the correlation measured between $y$ and $x$ because:",
        "zh": "$x$ 与 $y$ 之间的相关系数 $r$ 总是等于 $y$ 与 $x$ 之间的相关系数，原因是："
      },
      "choices": [
        "$r$ is computed from a symmetric product of standardized values and does not distinguish explanatory from response",
        "The regression slope is symmetric",
        "It is only true when $r > 0$",
        "The units of $x$ and $y$ must match"
      ],
      "answer": 0,
      "explanation": {
        "en": "$r$ is the average product of the $z$-scores of $x$ and $y$, which is symmetric in the two variables, so swapping roles leaves $r$ unchanged. The regression slope, by contrast, does change when you swap explanatory and response variables.",
        "zh": "$r$ 是 $x$ 与 $y$ 的 $z$ 分数乘积的平均，对两个变量是对称的，因此交换角色不改变 $r$。相比之下，回归斜率在交换解释变量与响应变量时会发生变化。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A segmented bar chart of two categorical variables shows bars of nearly identical composition across all categories of the explanatory variable. This suggests:",
        "zh": "两个分类变量的分段条形图显示：在解释变量的所有类别中，各条形的构成几乎完全相同。这表明："
      },
      "choices": [
        "A strong positive correlation",
        "A strong negative correlation",
        "A lurking variable is present",
        "Little or no association between the variables"
      ],
      "answer": 3,
      "explanation": {
        "en": "Nearly identical segment proportions mean the conditional distributions are about the same across categories, indicating little or no association. Correlation ($r$) does not apply here — it is only defined for two quantitative variables, not categorical ones.",
        "zh": "各段比例几乎相同意味着各类别的条件分布大致一致，说明几乎没有关联。相关系数 $r$ 在此不适用——它只对两个定量变量有定义，而非分类变量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a set of bivariate data, the least-squares model reports $r^2 = 0.49$ and the scatterplot shows a decreasing trend. What is $r$? Give a decimal to 2 places, including the sign.",
        "zh": "对一组双变量数据，最小二乘模型给出 $r^2 = 0.49$，且散点图呈递减趋势。$r$ 是多少？请填带符号的两位小数。"
      },
      "answer": "-0.70",
      "accept": [
        "-0.7",
        "-.70",
        "-.7"
      ],
      "explanation": {
        "en": "Take the square root of $r^2$: $\\sqrt{0.49} = 0.70$, then attach the sign of the trend. A decreasing (negative) association means $r = -0.70$. Forgetting the sign and reporting $+0.70$ ignores the direction shown in the scatterplot.",
        "zh": "对 $r^2$ 开平方：$\\sqrt{0.49} = 0.70$，再加上趋势的符号。递减（负）关联意味着 $r = -0.70$。若忘记符号而报告 $+0.70$，就忽略了散点图所显示的方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Five paired observations have standardized values whose products $z_x z_y$ are $0.8, 1.2, 0.5, 1.0, 1.5$. Using $r = \\frac{1}{n-1}\\sum z_x z_y$, compute $r$ to 2 decimal places.",
        "zh": "五对观测的标准化值乘积 $z_x z_y$ 分别为 $0.8, 1.2, 0.5, 1.0, 1.5$。利用 $r = \\frac{1}{n-1}\\sum z_x z_y$，计算 $r$，保留两位小数。"
      },
      "answer": "1.25",
      "accept": [
        "1.25",
        "1.3"
      ],
      "explanation": {
        "en": "The sum is $0.8+1.2+0.5+1.0+1.5 = 5.0$ and $n-1 = 4$, so the formula gives $5.0/4 = 1.25$. Because a true correlation cannot exceed $1$, this result signals an arithmetic or data error — a useful check that $r$ must lie in $[-1, 1]$.",
        "zh": "乘积之和为 $0.8+1.2+0.5+1.0+1.5 = 5.0$，$n-1 = 4$，故公式给出 $5.0/4 = 1.25$。由于真实的相关系数不可能超过 $1$，这个结果提示存在算术或数据错误——这正好检验了 $r$ 必须落在 $[-1, 1]$ 之内。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a correct interpretation of a correlation of $r = 0.9$ between hours studied and exam score?",
        "zh": "学习时数与考试成绩之间相关系数 $r = 0.9$，下列哪一项是正确的解释？"
      },
      "choices": [
        "For every extra hour studied, the score rises by 0.9 points",
        "90% of students who study will pass the exam",
        "Studying more causes higher scores",
        "There is a strong positive linear association between hours studied and exam score"
      ],
      "answer": 3,
      "explanation": {
        "en": "$r = 0.9$ describes a strong positive LINEAR association — nothing more. It is not a slope (that would be a rate of change per hour), not a percentage of students, and correlation alone cannot establish that studying causes higher scores.",
        "zh": "$r = 0.9$ 描述的是强的正线性关联——仅此而已。它不是斜率（斜率才是每小时的变化率），不是学生的百分比，且仅凭相关也无法证明学习导致成绩更高。"
      }
    }
  ],
  "exploring-two-variable-data/least-squares-regression": [
    {
      "type": "mc",
      "question": {
        "en": "A least-squares regression line for predicting final exam score $\\hat{y}$ from hours studied $x$ is $\\hat{y} = 52 + 4.1x$. Which statement correctly interprets the slope?",
        "zh": "用学习小时数 $x$ 预测期末考试分数 $\\hat{y}$ 的最小二乘回归线为 $\\hat{y} = 52 + 4.1x$。下列哪项正确解释了斜率？"
      },
      "choices": [
        "For each additional hour studied, the actual exam score increases by exactly 4.1 points.",
        "A student who studies 0 hours is predicted to score 4.1 points.",
        "For each additional hour studied, the predicted exam score increases by 4.1 points on average.",
        "The predicted exam score is 4.1 points for every student."
      ],
      "answer": 2,
      "explanation": {
        "en": "The slope is the predicted change in $y$ per one-unit increase in $x$: each extra hour raises the predicted score by 4.1 points, on average. Saying the actual score increases by exactly 4.1 confuses prediction with a deterministic guarantee; regression describes averages, not individual certainty.",
        "zh": "斜率是 $x$ 每增加一个单位时 $y$ 的预测变化量：每多学习一小时，预测分数平均增加 4.1 分。说实际分数正好增加 4.1 是把预测当成了确定性保证；回归描述的是平均趋势，而非个体的必然结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using $\\hat{y} = 52 + 4.1x$ (score vs. hours studied), which statement correctly interprets the $y$-intercept?",
        "zh": "使用 $\\hat{y} = 52 + 4.1x$（分数对学习小时数），下列哪项正确解释了 $y$ 轴截距？"
      },
      "choices": [
        "A student who studies 0 hours is predicted to score 52 points.",
        "Every student is predicted to score 52 points.",
        "For each extra hour studied, the score rises by 52 points.",
        "The average number of hours studied is 52."
      ],
      "answer": 0,
      "explanation": {
        "en": "The intercept is the predicted value of $y$ when $x = 0$: a student studying 0 hours is predicted to score 52. Note this is an extrapolation if no one in the data studied near 0 hours, so it may not be meaningful, but the interpretation of the number itself is the predicted score at $x=0$.",
        "zh": "截距是 $x = 0$ 时 $y$ 的预测值：学习 0 小时的学生预测得 52 分。注意如果数据中没有人接近 0 小时，这属于外推，可能没有实际意义，但该数字本身的含义就是 $x=0$ 时的预测分数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a data point, the residual is defined as which of the following?",
        "zh": "对于一个数据点，残差的定义是下列哪一项？"
      },
      "choices": [
        "predicted value minus observed value, $\\hat{y} - y$",
        "observed value minus predicted value, $y - \\hat{y}$",
        "observed value minus the mean, $y - \\bar{y}$",
        "predicted value minus the mean, $\\hat{y} - \\bar{y}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A residual is always observed minus predicted, $y - \\hat{y}$. A positive residual means the point lies above the line (the model under-predicts). Reversing the order to $\\hat{y} - y$ flips every sign and is a common error.",
        "zh": "残差始终是观测值减预测值，$y - \\hat{y}$。正残差表示点位于回归线上方（模型预测偏低）。把顺序颠倒为 $\\hat{y} - y$ 会使所有符号反转，这是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A residual plot for a linear regression shows a clear curved (U-shaped) pattern. What does this indicate?",
        "zh": "某线性回归的残差图呈现明显的曲线（U 形）模式。这说明了什么？"
      },
      "choices": [
        "The linear model fits the data very well.",
        "The correlation $r$ must equal zero.",
        "There is a strong positive linear association.",
        "A linear model is not appropriate; the relationship is nonlinear."
      ],
      "answer": 3,
      "explanation": {
        "en": "A good linear fit produces a residual plot with no pattern (random scatter about 0). A curved pattern signals that the true relationship is nonlinear, so a line is the wrong model. Curvature in residuals does not force $r=0$; a curved relationship can still have a nonzero correlation.",
        "zh": "拟合良好的线性模型残差图应无规律（在 0 附近随机散布）。曲线模式表明真实关系是非线性的，直线是错误的模型。残差呈曲线并不意味着 $r=0$；曲线关系仍可能有非零相关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A regression of fuel cost on distance driven has $r^2 = 0.81$. Which is the correct interpretation?",
        "zh": "用行驶距离预测燃油费用的回归中 $r^2 = 0.81$。下列哪项解释正确？"
      },
      "choices": [
        "81% of the data points fall exactly on the regression line.",
        "About 81% of the variation in fuel cost is explained by the linear relationship with distance.",
        "The correlation between distance and fuel cost is 0.81.",
        "For each additional mile, fuel cost rises by 81%."
      ],
      "answer": 1,
      "explanation": {
        "en": "$r^2$ (the coefficient of determination) is the fraction of the variation in the response ($y$) explained by the least-squares regression on $x$. It is not the fraction of points on the line, and it is not $r$ itself: here $r = \\pm\\sqrt{0.81} = \\pm 0.9$, not 0.81.",
        "zh": "$r^2$（决定系数）是响应变量 $y$ 的变异中被对 $x$ 的最小二乘回归所解释的比例。它不是落在线上的点的比例，也不是 $r$ 本身：这里 $r = \\pm\\sqrt{0.81} = \\pm 0.9$，而非 0.81。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A regression has correlation $r = -0.6$. What is $r^2$, and what does its sign tell you about the slope?",
        "zh": "某回归的相关系数 $r = -0.6$。$r^2$ 是多少？它的正负能告诉你关于斜率的什么信息？"
      },
      "choices": [
        "$r^2 = -0.36$; the slope is negative.",
        "$r^2 = 0.6$; the slope is positive.",
        "$r^2 = 0.36$; $r^2$ is always nonnegative and cannot indicate the slope's sign.",
        "$r^2 = -0.6$; the slope sign matches $r^2$."
      ],
      "answer": 2,
      "explanation": {
        "en": "Squaring gives $r^2 = (-0.6)^2 = 0.36$, which is always between 0 and 1 and never negative. Because $r^2$ discards the sign, it cannot tell you the direction of the association; only $r$ (or the slope) carries the sign, which here is negative.",
        "zh": "平方得 $r^2 = (-0.6)^2 = 0.36$，其取值始终在 0 到 1 之间，绝不为负。由于 $r^2$ 丢弃了符号，它无法说明关联的方向；只有 $r$（或斜率）带符号，此处为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The LSRL predicting plant height (cm) from days of growth is $\\hat{y} = 3 + 1.5x$. What is the predicted height at $x = 20$ days?",
        "zh": "用生长天数预测植株高度（厘米）的最小二乘回归线为 $\\hat{y} = 3 + 1.5x$。当 $x = 20$ 天时预测高度是多少？"
      },
      "choices": [
        "33 cm",
        "30 cm",
        "23 cm",
        "43 cm"
      ],
      "answer": 0,
      "explanation": {
        "en": "Substitute $x = 20$: $\\hat{y} = 3 + 1.5(20) = 3 + 30 = 33$ cm. Forgetting the intercept (getting 30) or adding it incorrectly are typical slips.",
        "zh": "代入 $x = 20$：$\\hat{y} = 3 + 1.5(20) = 3 + 30 = 33$ 厘米。忘记加截距（得 30）或错误处理截距是常见失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A model built from data on students aged 6 to 12 predicts height from age. Using it to predict the height of a 40-year-old adult is problematic mainly because of:",
        "zh": "一个基于 6 至 12 岁学生数据、用年龄预测身高的模型。用它预测 40 岁成年人的身高存在问题，主要原因是："
      },
      "choices": [
        "rounding error in the slope.",
        "a residual plot that is perfectly random.",
        "the correlation being too strong.",
        "extrapolation far beyond the range of the observed $x$-values."
      ],
      "answer": 3,
      "explanation": {
        "en": "Predicting at $x = 40$ years lies far outside the observed range (6-12 years). This is extrapolation: the linear pattern that held for children need not hold for adults, so the prediction is unreliable. Extrapolation is a modeling danger, not a rounding or correlation issue.",
        "zh": "在 $x = 40$ 岁处预测远超观测范围（6–12 岁）。这属于外推：对儿童成立的线性模式未必对成人成立，故预测不可靠。外推是建模隐患，与取整或相关强弱无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a scatterplot, a single point has an $x$-value far from all the others but falls near the overall linear trend. This point is best described as:",
        "zh": "在散点图中，某个点的 $x$ 值远离其他所有点，但接近整体线性趋势。该点最恰当的描述是："
      },
      "choices": [
        "a point with high leverage.",
        "an outlier with a large residual.",
        "a point that reduces $r^2$ to zero.",
        "a point that cannot affect the regression line."
      ],
      "answer": 0,
      "explanation": {
        "en": "A point with an extreme $x$-value has high leverage: its distance in the $x$-direction gives it strong potential to pull the line. Because it lies near the trend it has a small residual, so it is not a $y$-outlier. High-leverage points can strongly influence the slope, so it certainly can affect the line.",
        "zh": "$x$ 值极端的点具有高杠杆：它在 $x$ 方向上的远离使其有很强的拉动回归线的潜力。由于它接近趋势线，残差很小，因此不是 $y$ 方向的异常点。高杠杆点可强烈影响斜率，故它当然能影响回归线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following describes an outlier in a regression setting?",
        "zh": "下列哪项描述的是回归情境中的异常点（outlier）？"
      },
      "choices": [
        "A point with an unusually large residual (far from the line in the $y$-direction).",
        "A point whose $x$-value equals $\\bar{x}$.",
        "Any point used to compute the least-squares line.",
        "A point that always lies exactly on the regression line."
      ],
      "answer": 0,
      "explanation": {
        "en": "In regression, an outlier is a point that falls far from the line in the $y$-direction, i.e. it has a large residual. A point at $x = \\bar{x}$ is unremarkable, and points on the line have zero residual by definition, so those choices are wrong.",
        "zh": "在回归中，异常点是指在 $y$ 方向上远离回归线的点，即残差很大的点。$x = \\bar{x}$ 处的点并无特殊，落在线上的点残差为零，故这些选项均不正确。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a regression, $r = 0.75$, $s_x = 4$, and $s_y = 12$. Using $b = r\\dfrac{s_y}{s_x}$, the slope is:",
        "zh": "某回归中 $r = 0.75$，$s_x = 4$，$s_y = 12$。用 $b = r\\dfrac{s_y}{s_x}$，斜率为："
      },
      "choices": [
        "$0.25$",
        "$3$",
        "$0.75$",
        "$2.25$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Apply $b = r\\frac{s_y}{s_x} = 0.75 \\times \\frac{12}{4} = 0.75 \\times 3 = 2.25$. A common error is inverting the SD ratio ($\\frac{s_x}{s_y}$), which would give $0.25$; the standard deviation of the response ($s_y$) goes on top.",
        "zh": "应用 $b = r\\frac{s_y}{s_x} = 0.75 \\times \\frac{12}{4} = 0.75 \\times 3 = 2.25$。常见错误是把标准差之比倒置（$\\frac{s_x}{s_y}$），那会得到 $0.25$；响应变量的标准差 $s_y$ 应在分子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which point does every least-squares regression line always pass through?",
        "zh": "每一条最小二乘回归线必定经过哪个点？"
      },
      "choices": [
        "The origin $(0, 0)$.",
        "The point of means $(\\bar{x}, \\bar{y})$.",
        "The point with the largest $x$-value.",
        "The point $(0, \\bar{y})$."
      ],
      "answer": 1,
      "explanation": {
        "en": "The least-squares line always passes through $(\\bar{x}, \\bar{y})$; this follows from the intercept formula $a = \\bar{y} - b\\bar{x}$, so at $x = \\bar{x}$ the line gives $\\hat{y} = \\bar{y}$. It need not pass through the origin unless the data happen to force it.",
        "zh": "最小二乘回归线必过点 $(\\bar{x}, \\bar{y})$；这源于截距公式 $a = \\bar{y} - b\\bar{x}$，故当 $x = \\bar{x}$ 时 $\\hat{y} = \\bar{y}$。除非数据恰好如此，否则它不一定过原点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regression has $r = 0.8$, $s_x = 2$, and $s_y = 5$. Compute the slope using $b = r\\dfrac{s_y}{s_x}$. Give your answer to 1 decimal place.",
        "zh": "某回归中 $r = 0.8$，$s_x = 2$，$s_y = 5$。用 $b = r\\dfrac{s_y}{s_x}$ 计算斜率。答案保留 1 位小数。"
      },
      "answer": "2.0",
      "accept": [
        "2"
      ],
      "explanation": {
        "en": "$b = r\\frac{s_y}{s_x} = 0.8 \\times \\frac{5}{2} = 0.8 \\times 2.5 = 2.0$. Keep $s_y$ in the numerator and $s_x$ in the denominator.",
        "zh": "$b = r\\frac{s_y}{s_x} = 0.8 \\times \\frac{5}{2} = 0.8 \\times 2.5 = 2.0$。$s_y$ 在分子，$s_x$ 在分母。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regression has slope $b = 1.5$, with $\\bar{x} = 10$ and $\\bar{y} = 25$. Find the $y$-intercept $a$ using $a = \\bar{y} - b\\bar{x}$. Give an exact number.",
        "zh": "某回归斜率 $b = 1.5$，$\\bar{x} = 10$，$\\bar{y} = 25$。用 $a = \\bar{y} - b\\bar{x}$ 求 $y$ 轴截距 $a$。请给出精确数值。"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "$a = \\bar{y} - b\\bar{x} = 25 - 1.5(10) = 25 - 15 = 10$. This formula guarantees the line passes through $(\\bar{x}, \\bar{y})$.",
        "zh": "$a = \\bar{y} - b\\bar{x} = 25 - 1.5(10) = 25 - 15 = 10$。此公式保证回归线经过 $(\\bar{x}, \\bar{y})$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The LSRL is $\\hat{y} = 2 + 3x$. A data point at $x = 5$ has observed value $y = 20$. Compute the residual. Give an exact number (include the sign).",
        "zh": "最小二乘回归线为 $\\hat{y} = 2 + 3x$。$x = 5$ 处的数据点观测值为 $y = 20$。计算残差。请给出精确数值（含符号）。"
      },
      "answer": "3",
      "accept": [
        "+3",
        "3.0"
      ],
      "explanation": {
        "en": "Predicted: $\\hat{y} = 2 + 3(5) = 17$. Residual $= y - \\hat{y} = 20 - 17 = 3$. The positive residual means the point lies above the line.",
        "zh": "预测值：$\\hat{y} = 2 + 3(5) = 17$。残差 $= y - \\hat{y} = 20 - 17 = 3$。正残差表示该点位于回归线上方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regression between two variables has correlation $r = -0.7$. Compute $r^2$ as a decimal to 2 decimal places.",
        "zh": "两变量之间的回归相关系数为 $r = -0.7$。请将 $r^2$ 以小数计算，保留 2 位小数。"
      },
      "answer": "0.49",
      "accept": [
        ".49"
      ],
      "explanation": {
        "en": "$r^2 = (-0.7)^2 = 0.49$. Squaring removes the negative sign, so $r^2$ is positive even when the association is negative.",
        "zh": "$r^2 = (-0.7)^2 = 0.49$。平方去掉了负号，故即便关联为负，$r^2$ 仍为正。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regression reports $r^2 = 0.64$, and the scatterplot shows a negative association. What is the correlation $r$? Give the value to 1 decimal place (include the sign).",
        "zh": "某回归报告 $r^2 = 0.64$，散点图显示负相关。相关系数 $r$ 是多少？答案保留 1 位小数（含符号）。"
      },
      "answer": "-0.8",
      "accept": [
        "-.8"
      ],
      "explanation": {
        "en": "$r = \\pm\\sqrt{0.64} = \\pm 0.8$. The sign of $r$ matches the direction of the association; since it is negative, $r = -0.8$. You must use the scatterplot (or slope sign) to recover the sign that $r^2$ discarded.",
        "zh": "$r = \\pm\\sqrt{0.64} = \\pm 0.8$。$r$ 的符号与关联方向一致；因为是负相关，故 $r = -0.8$。必须借助散点图（或斜率符号）来恢复 $r^2$ 丢弃的符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A least-squares regression line predicts test score from study hours. The mean study time is $\\bar{x} = 8$ hours and the mean score is $\\bar{y} = 74$. What score does the line predict at exactly $x = 8$ hours? Give an exact number.",
        "zh": "一条最小二乘回归线用学习小时数预测考试分数。平均学习时间 $\\bar{x} = 8$ 小时，平均分数 $\\bar{y} = 74$。当 $x = 8$ 小时时回归线预测的分数是多少？请给出精确数值。"
      },
      "answer": "74",
      "accept": [
        "74.0"
      ],
      "explanation": {
        "en": "Every least-squares line passes through $(\\bar{x}, \\bar{y})$, so at $x = \\bar{x} = 8$ the predicted value is exactly $\\bar{y} = 74$. No slope or intercept computation is needed.",
        "zh": "每条最小二乘回归线都经过 $(\\bar{x}, \\bar{y})$，所以在 $x = \\bar{x} = 8$ 处，预测值正好是 $\\bar{y} = 74$。无需计算斜率或截距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regression has slope $b = 2.5$, $s_x = 3$, and $s_y = 15$. Recover the correlation $r$ using $r = b\\dfrac{s_x}{s_y}$. Give the value to 1 decimal place.",
        "zh": "某回归斜率 $b = 2.5$，$s_x = 3$，$s_y = 15$。用 $r = b\\dfrac{s_x}{s_y}$ 反求相关系数 $r$。答案保留 1 位小数。"
      },
      "answer": "0.5",
      "accept": [
        ".5",
        "0.50"
      ],
      "explanation": {
        "en": "Rearranging $b = r\\frac{s_y}{s_x}$ gives $r = b\\frac{s_x}{s_y} = 2.5 \\times \\frac{3}{15} = 2.5 \\times 0.2 = 0.5$. Note the SD ratio flips relative to the slope formula.",
        "zh": "将 $b = r\\frac{s_y}{s_x}$ 变形得 $r = b\\frac{s_x}{s_y} = 2.5 \\times \\frac{3}{15} = 2.5 \\times 0.2 = 0.5$。注意标准差之比相对斜率公式发生了倒置。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The LSRL predicting monthly electricity cost (dollars) from average temperature is $\\hat{y} = 120 - 1.8x$. By how many dollars does the predicted cost change when temperature increases by 5 degrees? Give a signed number.",
        "zh": "用平均气温预测每月电费（美元）的最小二乘回归线为 $\\hat{y} = 120 - 1.8x$。当气温升高 5 度时，预测费用变化多少美元？请给出带符号的数值。"
      },
      "answer": "-9",
      "accept": [
        "-9.0",
        "-9 dollars"
      ],
      "explanation": {
        "en": "The change in $\\hat{y}$ equals slope times change in $x$: $-1.8 \\times 5 = -9$ dollars. The negative slope means predicted cost falls by \\$9 as temperature rises 5 degrees. Dropping the sign (answering 9) misses the direction of the effect.",
        "zh": "$\\hat{y}$ 的变化等于斜率乘以 $x$ 的变化：$-1.8 \\times 5 = -9$ 美元。负斜率表示气温升高 5 度时预测费用下降 9 美元。丢掉符号（答 9）就忽略了效应的方向。"
      }
    }
  ],
  "collecting-data/sampling-and-bias": [
    {
      "type": "mc",
      "question": {
        "en": "A high school principal wants to know the average number of hours per week all 1,800 students spend on homework. She surveys every 25th student on the alphabetized enrollment roster. Which term best describes the group of 1,800 students?",
        "zh": "一位高中校长想了解全校 1800 名学生每周平均花在家庭作业上的小时数。她按字母顺序的注册名单每隔 25 名学生调查一名。以下哪个术语最准确地描述这 1800 名学生？"
      },
      "choices": [
        "The sample",
        "The population",
        "A census",
        "The sampling frame error"
      ],
      "answer": 1,
      "explanation": {
        "en": "The population is the entire group we want to draw conclusions about — here, all 1,800 students. The students actually surveyed form the sample. Calling all 1,800 the sample confuses the group we want to describe with the subset we measure.",
        "zh": "总体是我们想要得出结论的整个群体——这里是全部 1800 名学生。真正被调查的学生构成样本。把这 1800 人称为样本，是混淆了我们想描述的群体与实际测量的子集。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Every household in a small town of 4,000 households is contacted and asked about its water usage, and all 4,000 respond. This data-collection method is best described as a:",
        "zh": "一个有 4000 户家庭的小镇联系了每一户，询问其用水量，全部 4000 户都作出了回应。这种数据收集方式最恰当的描述是："
      },
      "choices": [
        "Stratified random sample",
        "Convenience sample",
        "Systematic random sample",
        "Census"
      ],
      "answer": 3,
      "explanation": {
        "en": "A census collects data from every member of the entire population, not a subset. Because all 4,000 households are measured, no sampling occurs at all. A stratified sample would divide the population into groups and randomly select from each — but here nothing is left unselected.",
        "zh": "普查（census）是对整个总体的每一个成员都收集数据，而非子集。因为所有 4000 户都被测量，根本没有进行抽样。分层抽样会把总体分成若干组并从每组随机抽取，但这里没有任何一户被排除在外。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A researcher divides a university's students into freshmen, sophomores, juniors, and seniors, then randomly selects 30 students from within each class year. Which sampling method is this?",
        "zh": "一位研究者把某大学的学生分为大一、大二、大三、大四，然后从每个年级内随机抽取 30 名学生。这是哪种抽样方法？"
      },
      "choices": [
        "Cluster sampling",
        "Stratified random sampling",
        "Systematic sampling",
        "Simple random sampling"
      ],
      "answer": 1,
      "explanation": {
        "en": "Stratified sampling splits the population into homogeneous groups (strata) — here the class years — and takes a random sample from each stratum. In cluster sampling you would instead randomly choose whole class years and survey everyone in the chosen ones. The key difference: stratified samples FROM every group; cluster samples whole groups.",
        "zh": "分层抽样把总体分成若干同质的组（层）——这里是各年级——并从每一层随机抽取。而整群抽样则是随机选取整个年级并调查所选年级中的所有人。关键区别在于：分层抽样从每一组中抽取；整群抽样则抽取整个组。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quality inspector at a factory randomly picks one production hour, then tests every item produced during that entire hour. This is an example of:",
        "zh": "工厂的一名质检员随机选取一个生产小时，然后检测该小时内生产的每一件产品。这是以下哪种抽样的例子："
      },
      "choices": [
        "Cluster sampling",
        "Stratified random sampling",
        "Convenience sampling",
        "Voluntary response sampling"
      ],
      "answer": 0,
      "explanation": {
        "en": "The items are naturally grouped by production hour; the inspector randomly selects an entire cluster (one hour) and measures every unit in it. This is cluster sampling. It differs from stratified sampling, where the inspector would take a few items from every hour rather than all items from one hour.",
        "zh": "产品按生产小时自然分组；质检员随机选取一整个群（一个小时）并检测其中的每一件。这是整群抽样。它不同于分层抽样——若是分层抽样，质检员会从每个小时抽取少数几件，而不是从某一小时抽取全部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A radio host asks listeners to call in to vote on whether a new highway should be built. Of the 500 who call, political activists opposed to the highway are far more likely to have phoned. The primary source of bias here is:",
        "zh": "一位电台主持人请听众打电话投票，表决是否应修建一条新高速公路。在打进电话的 500 人中，反对该高速公路的政治活动人士打电话的可能性大得多。这里偏差的主要来源是："
      },
      "choices": [
        "Undercoverage",
        "Response bias from question wording",
        "Voluntary response bias",
        "Nonresponse bias"
      ],
      "answer": 2,
      "explanation": {
        "en": "When people choose themselves into the sample by responding to an open invitation, those with strong opinions are overrepresented — this is voluntary response bias. It is not nonresponse bias, which arises when selected people fail to respond; here no one was selected in advance at all.",
        "zh": "当人们通过响应公开邀请把自己选入样本时，意见强烈者会被过度代表——这就是自愿回应偏差。它不是无回应偏差；无回应偏差是被抽中的人未能作答，而这里根本没有人事先被抽中。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A telephone poll about internet habits is conducted using only landline phone numbers. Many young adults have only cell phones and cannot be reached. What type of bias does this most directly create?",
        "zh": "一项关于上网习惯的电话民意调查只使用固定电话号码。许多年轻人只有手机，无法被联系到。这最直接造成了哪种类型的偏差？"
      },
      "choices": [
        "Undercoverage",
        "Response bias",
        "Voluntary response bias",
        "Sampling variability"
      ],
      "answer": 0,
      "explanation": {
        "en": "Undercoverage occurs when the sampling frame systematically excludes part of the population — landline-only lists leave out cell-only young adults. This is different from nonresponse (they were never reachable in the frame) and from sampling variability, which is the ordinary chance-to-chance difference, not a systematic error.",
        "zh": "覆盖不足（undercoverage）是指抽样框架系统性地排除了总体的一部分——只含固定电话的名单遗漏了只用手机的年轻人。这不同于无回应（他们根本不在框架内、无法被触及），也不同于抽样波动——后者是纯粹随机的样本间差异，而非系统误差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A survey asks: \"Do you support the wasteful and irresponsible spending on unnecessary new government buildings?\" This question is likely to produce:",
        "zh": "一项调查问道：“你是否支持在不必要的新政府大楼上进行浪费且不负责任的开支？”这个问题很可能导致："
      },
      "choices": [
        "Undercoverage",
        "Nonresponse bias",
        "Voluntary response bias",
        "Response bias due to leading wording"
      ],
      "answer": 3,
      "explanation": {
        "en": "Loaded, emotionally charged wording (\"wasteful and irresponsible\") pushes respondents toward a particular answer — this is response bias from the question wording. Undercoverage and nonresponse concern WHO is or isn't in the sample, not how the question is phrased.",
        "zh": "带有倾向性、情绪化的措辞（“浪费且不负责任”）会把受访者推向某个特定答案——这是由问题措辞造成的回应偏差。覆盖不足和无回应关注的是谁在或不在样本中，而非问题的措辞方式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does selecting a sample using a random mechanism (rather than personal judgment) matter most for the conclusions of a study?",
        "zh": "在一项研究中，用随机机制（而非个人主观判断）来抽取样本，为什么对研究结论最为重要？"
      },
      "choices": [
        "It guarantees the sample statistic exactly equals the population parameter",
        "It reduces the amount of data that must be collected",
        "It allows results to be generalized to the population and avoids systematic bias in who is chosen",
        "It eliminates all variability from the estimate"
      ],
      "answer": 2,
      "explanation": {
        "en": "Random selection removes the surveyor's conscious or unconscious bias in choosing subjects and makes the sample representative in the long run, so results can be generalized to the population. It does NOT make the statistic exactly equal the parameter, nor does it eliminate sampling variability — random samples still vary from sample to sample.",
        "zh": "随机抽取消除了调查者在选取对象时有意或无意的偏差，长期来看能使样本具有代表性，从而可将结论推广到总体。它并不能使统计量恰好等于参数，也不能消除抽样波动——随机样本之间仍会有差异。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A town has three neighborhoods. An analyst obtains a numbered list of all residents and uses a random number generator to select 100 residents, giving every resident an equal chance of selection and every group of 100 an equal chance. This is:",
        "zh": "一个镇有三个社区。一位分析师拿到全部居民的编号名单，用随机数生成器选取 100 名居民，使每位居民被选中的机会相等，且每一组 100 人被选中的机会也相等。这是："
      },
      "choices": [
        "A simple random sample",
        "A stratified random sample",
        "A cluster sample",
        "A systematic sample"
      ],
      "answer": 0,
      "explanation": {
        "en": "A simple random sample (SRS) gives every individual AND every possible group of size n an equal chance of being chosen. Stratified and cluster designs impose group structure that makes certain groups of 100 impossible, so they are not SRSs even though they use randomness.",
        "zh": "简单随机抽样（SRS）使每个个体以及每一个规模为 n 的可能组合被选中的机会都相等。分层和整群设计施加了分组结构，使某些由 100 人构成的组合不可能出现，因此即便它们也用到随机性，也不是简单随机抽样。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A student stands outside the school cafeteria at lunch and surveys the first 40 students who walk by about their eating habits. The biggest concern with generalizing these results to the whole school is that the sample is:",
        "zh": "一名学生午餐时站在学校餐厅外，就饮食习惯调查最先经过的 40 名学生。将这些结果推广到全校时，最大的担忧是该样本属于："
      },
      "choices": [
        "A stratified random sample, so it is fine",
        "A census of the cafeteria",
        "A systematic random sample",
        "A convenience sample, which is likely unrepresentative"
      ],
      "answer": 3,
      "explanation": {
        "en": "Surveying whoever is easiest to reach is a convenience sample; students who go to the cafeteria at lunch may differ systematically from those who eat elsewhere or skip lunch, so the sample is likely unrepresentative. It is not systematic, which requires a fixed interval selection from an ordered list.",
        "zh": "调查最容易触及的人属于便利抽样；午餐去餐厅的学生可能与在别处吃或不吃午餐的学生存在系统性差异，故样本很可能不具代表性。它不是系统抽样——系统抽样要求从有序名单中按固定间隔抽取。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An online retailer emails a satisfaction survey to 2,000 randomly selected customers, but only 240 complete it, and dissatisfied customers are more likely to ignore the email. The bias introduced by the 1,760 who did not reply is called:",
        "zh": "一家网络零售商向随机选取的 2000 名顾客发送满意度调查邮件，但只有 240 人完成了调查，且不满意的顾客更可能忽略该邮件。由这 1760 名未作答者引入的偏差称为："
      },
      "choices": [
        "Voluntary response bias",
        "Undercoverage",
        "Nonresponse bias",
        "Response bias"
      ],
      "answer": 2,
      "explanation": {
        "en": "The customers were properly selected at random but a large fraction failed to respond, and the non-responders differ systematically from responders — this is nonresponse bias. It is not voluntary response bias, because respondents were invited by random selection, not by an open self-selecting call.",
        "zh": "顾客是被恰当地随机选取的，但很大一部分人未作答，且未作答者与作答者存在系统性差异——这是无回应偏差。它不是自愿回应偏差，因为受访者是通过随机选取被邀请的，而非通过公开的自我选择式征集。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is the single best reason a well-designed census is sometimes NOT preferred over a good random sample?",
        "zh": "以下哪一项是设计良好的普查有时并不比一个好的随机样本更受青睐的最恰当理由？"
      },
      "choices": [
        "A census always produces biased results",
        "A random sample can be less costly and time-consuming while still giving accurate, generalizable estimates",
        "A census cannot be used for large populations under any circumstances",
        "A random sample removes all uncertainty from the estimate"
      ],
      "answer": 1,
      "explanation": {
        "en": "A good random sample is often far cheaper and faster than measuring an entire population, yet still yields accurate estimates that generalize. A census is not inherently biased, and can be conducted for large populations (e.g., national censuses); a sample also does not remove all uncertainty.",
        "zh": "一个好的随机样本通常比测量整个总体便宜且快得多，却仍能给出准确、可推广的估计。普查本身并不必然有偏，且对大总体也可以进行（如全国人口普查）；样本同样不能消除全部不确定性。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A researcher has an ordered list of 1,000 people and wants a systematic sample of 50. She should select every kth person. What is k? Give an integer.",
        "zh": "一位研究者有一份 1000 人的有序名单，想做一个 50 人的系统抽样。她应每隔第 k 个人抽取一人。k 是多少？请填一个整数。"
      },
      "answer": "20",
      "accept": [
        "20.0"
      ],
      "explanation": {
        "en": "In systematic sampling the interval is the population size divided by the sample size: $k = 1000 / 50 = 20$. A random start between 1 and 20 is chosen, then every 20th person after that is selected.",
        "zh": "在系统抽样中，间隔等于总体规模除以样本规模：$k = 1000 / 50 = 20$。先在 1 到 20 之间随机选一个起点，然后每隔 20 人抽取一人。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A school has 600 boys and 400 girls. A researcher wants a stratified sample of 50 students with the same proportions as the school. How many girls should be in the sample? Give an integer.",
        "zh": "某校有 600 名男生和 400 名女生。一位研究者想做一个 50 人的分层样本，且比例与全校相同。样本中应有多少名女生？请填一个整数。"
      },
      "answer": "20",
      "accept": [
        "20.0"
      ],
      "explanation": {
        "en": "Girls make up $400/1000 = 0.40$ of the school. Proportional allocation gives $0.40 \\times 50 = 20$ girls (and $30$ boys). Splitting 50 evenly into 25 and 25 would ignore the actual 60/40 composition.",
        "zh": "女生占全校的 $400/1000 = 0.40$。按比例分配得 $0.40 \\times 50 = 20$ 名女生（以及 30 名男生）。把 50 平均分成 25 和 25 就忽略了实际的 60/40 构成。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A polling firm draws 1,200 selected voters but only 480 respond. What is the nonresponse rate, as a percent?",
        "zh": "一家民调机构抽取了 1200 名选定的选民，但只有 480 人作答。无回应率是多少（用百分数表示）？"
      },
      "answer": "60%",
      "accept": [
        "60",
        "60.0%",
        "0.60",
        "0.6"
      ],
      "explanation": {
        "en": "The number who did not respond is $1200 - 480 = 720$. The nonresponse rate is $720/1200 = 0.60 = 60\\%$. A high nonresponse rate is a warning sign for nonresponse bias if non-responders differ from responders.",
        "zh": "未作答的人数为 $1200 - 480 = 720$。无回应率为 $720/1200 = 0.60 = 60\\%$。若未作答者与作答者不同，高无回应率就是无回应偏差的警示信号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sampling design gives every individual an equal chance of selection but does NOT give every group of size n an equal chance. In one or two words, such a design fails to be what specific type of sample (the type where BOTH conditions hold)?",
        "zh": "某抽样设计使每个个体被选中的机会相等，但并不使每一个规模为 n 的组合被选中的机会相等。用一两个词回答：这种设计未能成为哪种特定类型的样本（即两个条件都满足的那种）？"
      },
      "answer": "simple random sample",
      "accept": [
        "SRS",
        "simple random",
        "a simple random sample",
        "simple random sampling"
      ],
      "explanation": {
        "en": "A simple random sample (SRS) requires that every individual AND every possible group of size n be equally likely. Stratified and systematic designs can give each individual an equal chance yet still fail the \"every group\" condition, so they are not SRSs.",
        "zh": "简单随机抽样（SRS）要求每个个体以及每一个规模为 n 的可能组合都等可能被选中。分层和系统抽样可以使每个个体机会相等，却仍不满足“每一组合”的条件，因此它们不是 SRS。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a systematic sample of 1,000 people selecting every 20th person, a random starting number is chosen from 1 to 20. If the random start is 7, what is the list position of the third person selected? Give an integer.",
        "zh": "在对 1000 人进行每隔 20 人抽取一人的系统抽样中，从 1 到 20 之间随机选一个起点。若随机起点为 7，则被抽中的第三个人在名单中的位置是多少？请填一个整数。"
      },
      "answer": "47",
      "accept": [
        "47.0"
      ],
      "explanation": {
        "en": "Selected positions are $7, 7+20 = 27, 27+20 = 47, \\ldots$. The third person is at position $7 + 2 \\times 20 = 47$. A common error is computing $7 + 3 \\times 20 = 67$, which is actually the FOURTH person.",
        "zh": "被抽中的位置为 $7, 7+20 = 27, 27+20 = 47, \\ldots$。第三个人在位置 $7 + 2 \\times 20 = 47$。常见错误是算成 $7 + 3 \\times 20 = 67$，那其实是第四个人。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "True or false: Increasing the sample size in a voluntary-response online poll will remove the bias in the results. Answer \"true\" or \"false\".",
        "zh": "判断正误：增大一个自愿回应式网络民调的样本量将消除结果中的偏差。请回答“true”或“false”。"
      },
      "answer": "false",
      "accept": [
        "False",
        "F",
        "no"
      ],
      "explanation": {
        "en": "False. Bias is a systematic error in HOW the sample is obtained; a larger voluntary-response sample just gives a more precise estimate of a still-biased quantity. Only fixing the design (e.g., random selection) removes bias — bigger samples reduce variability, not bias.",
        "zh": "错误。偏差是抽样方式中的系统误差；更大的自愿回应样本只是把一个仍然有偏的量估计得更精确。只有改进设计（如随机抽取）才能消除偏差——增大样本量减少的是波动，而非偏差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A study wants to generalize its conclusions to a stated population. What single feature of the study's design most justifies generalizing sample results to that population? Answer in a few words.",
        "zh": "一项研究想把其结论推广到某个明确的总体。研究设计中的哪一个特征最能支持将样本结果推广到该总体？请用几个词回答。"
      },
      "answer": "random selection",
      "accept": [
        "random sampling",
        "random selection from the population",
        "randomization in selecting the sample",
        "random sample"
      ],
      "explanation": {
        "en": "Random selection of the sample from the population is what licenses generalizing (inference) to that population. (Random ASSIGNMENT, by contrast, licenses cause-and-effect conclusions in experiments — a different idea.) Convenience or voluntary-response samples cannot be safely generalized.",
        "zh": "从总体中随机抽取样本，才使得把结论推广（推断）到该总体成为合理。（相比之下，随机分配支持实验中的因果结论——这是另一个概念。）便利样本或自愿回应样本无法被安全地推广。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A manager samples factory output by testing all items made in 3 randomly chosen hours out of a 24-hour day. Name the sampling method (two words).",
        "zh": "一位经理通过检测一天 24 小时中随机选出的 3 个小时内生产的所有产品来对工厂产量抽样。请写出该抽样方法的名称（两个字/词）。"
      },
      "answer": "cluster sampling",
      "accept": [
        "cluster",
        "cluster sample"
      ],
      "explanation": {
        "en": "Items are grouped naturally by hour; the manager randomly selects whole hours (clusters) and measures every item within them — this is cluster sampling. Had she instead pulled a few items from each of the 24 hours, that would be stratified sampling.",
        "zh": "产品按小时自然分组；经理随机选取整个小时（群）并检测其中的每一件——这是整群抽样。若她改为从 24 个小时的每一个中各抽取几件，那就是分层抽样。"
      }
    }
  ],
  "collecting-data/experiments-and-observational-studies": [
    {
      "type": "mc",
      "question": {
        "en": "A researcher records the daily coffee intake and blood pressure of 500 adults, without assigning anyone a treatment. What type of study is this?",
        "zh": "一位研究者记录了 500 名成年人每天的咖啡摄入量和血压，但没有给任何人分配处理。这属于哪种研究？"
      },
      "choices": [
        "A completely randomized experiment",
        "A matched-pairs experiment",
        "An observational study",
        "A randomized block experiment"
      ],
      "answer": 2,
      "explanation": {
        "en": "No treatment is imposed on the subjects; the researcher only observes and measures naturally occurring variables, so it is an observational study. It is not an experiment because nothing is deliberately assigned to the subjects.",
        "zh": "研究者没有对受试者施加任何处理，只是观察并测量自然发生的变量，因此这是一项观察性研究。它不是实验，因为没有刻意向受试者分配任何处理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the key feature that distinguishes an experiment from an observational study?",
        "zh": "区分实验与观察性研究的关键特征是什么？"
      },
      "choices": [
        "An experiment deliberately imposes a treatment on the subjects",
        "An experiment always uses a larger sample size",
        "An experiment never uses random selection",
        "An experiment can only be done in a laboratory"
      ],
      "answer": 0,
      "explanation": {
        "en": "In an experiment the researcher actively imposes a treatment to see its effect; in an observational study the researcher only observes. Sample size and laboratory setting are irrelevant to the distinction.",
        "zh": "在实验中研究者主动施加处理以观察其效应；在观察性研究中研究者只做观察。样本量大小和是否在实验室进行都与这一区别无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A study finds that people who carry lighters have higher lung cancer rates. Smoking is associated with both carrying lighters and lung cancer. Smoking is best described as a",
        "zh": "一项研究发现随身带打火机的人肺癌发病率更高。吸烟与带打火机和肺癌都相关。吸烟最恰当的描述是"
      },
      "choices": [
        "response variable",
        "confounding variable",
        "block",
        "placebo"
      ],
      "answer": 1,
      "explanation": {
        "en": "Smoking is associated with both the explanatory variable (carrying a lighter) and the response (lung cancer), so its effect cannot be separated from the explanatory variable’s effect — that is confounding. It is not the response, which here is lung cancer.",
        "zh": "吸烟与解释变量（带打火机）和响应变量（肺癌）都相关，因此它的影响无法与解释变量的影响分开，这就是混杂。它不是响应变量，此处响应变量是肺癌。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT one of the three principles of experimental design?",
        "zh": "下列哪一项不是实验设计的三大原则之一？"
      },
      "choices": [
        "Control",
        "Randomization",
        "Replication",
        "Confounding"
      ],
      "answer": 3,
      "explanation": {
        "en": "The three principles are control, randomization, and replication. Confounding is a problem that good design tries to prevent, not a principle to follow.",
        "zh": "三大原则是对照（控制）、随机化和重复。混杂是良好设计力图避免的问题，而不是应遵循的原则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an experiment comparing a new drug to a sugar pill, the sugar pill is given so that any improvement from merely believing one is treated affects both groups equally. This addresses the",
        "zh": "在比较新药与糖丸的实验中，给予糖丸是为了让\"仅因相信自己接受了治疗而产生的改善\"对两组产生同等影响。这处理的是"
      },
      "choices": [
        "replication principle",
        "blocking variable",
        "sampling frame",
        "placebo effect"
      ],
      "answer": 3,
      "explanation": {
        "en": "The placebo effect is improvement caused by a subject’s belief that they are being treated. A placebo control lets researchers separate the drug’s real effect from this psychological response. Replication refers to using many subjects, a different idea.",
        "zh": "安慰剂效应是指受试者因相信自己正在接受治疗而产生的改善。设置安慰剂对照可以让研究者把药物的真实效应与这种心理反应分开。重复指使用大量受试者，是不同的概念。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A \"double-blind\" experiment means that",
        "zh": "\"双盲\"实验的含义是"
      },
      "choices": [
        "the treatment is given twice to each subject",
        "only the subjects are unaware of their treatment assignment",
        "the experiment is repeated on two independent samples",
        "neither the subjects nor those who interact with them and measure the response know who received which treatment"
      ],
      "answer": 3,
      "explanation": {
        "en": "In a double-blind study both the subjects and the people administering treatments/recording responses are unaware of assignments, preventing bias from either side. If only the subjects are unaware, that is single-blind.",
        "zh": "在双盲研究中，受试者以及施加处理和记录响应的人都不知道分配情况，从而防止来自任何一方的偏倚。如果只有受试者不知道，那是单盲。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A gardener tests three fertilizers on tomato plants. The plants are on a slope, so soil moisture increases downhill. To keep moisture from confounding the results, the gardener divides the field into horizontal strips of similar moisture and randomly assigns all three fertilizers within each strip. This design is a",
        "zh": "一位园丁在番茄植株上测试三种肥料。植株位于斜坡上，越往下土壤湿度越大。为防止湿度混杂结果，园丁把地块划分为湿度相近的水平条带，并在每个条带内随机分配全部三种肥料。此设计是"
      },
      "choices": [
        "completely randomized design",
        "matched-pairs design",
        "randomized block design",
        "observational study"
      ],
      "answer": 2,
      "explanation": {
        "en": "Grouping experimental units into blocks that are similar on a variable (moisture) and randomizing treatments within each block is a randomized block design. A completely randomized design would ignore the moisture gradient and assign treatments across the whole field at random.",
        "zh": "把实验单元按某一变量（湿度）相近的原则分成区组，并在每个区组内随机分配处理，这就是随机区组设计。完全随机化设计会忽略湿度梯度，在整块地上随机分配处理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a completely randomized design with 60 subjects and 3 treatments assigned in equal numbers, how are subjects assigned to treatments?",
        "zh": "在一个有 60 名受试者、3 种处理且人数相等的完全随机化设计中，受试者是如何被分配到各处理的？"
      },
      "choices": [
        "All 60 subjects are randomly allocated among the 3 treatments (20 each), with no blocking",
        "Subjects are first sorted into blocks, then randomized within blocks",
        "Subjects choose which treatment they prefer",
        "Each subject receives all 3 treatments in random order"
      ],
      "answer": 0,
      "explanation": {
        "en": "A completely randomized design allocates all experimental units to the treatments purely at random, here 20 per treatment, with no prior grouping. Sorting into blocks first would be a randomized block design; receiving all treatments would be a repeated-measures/matched idea.",
        "zh": "完全随机化设计把所有实验单元纯粹随机地分配到各处理，此处每个处理 20 人，事先不做任何分组。先分组是随机区组设计；每人接受所有处理则属于重复测量/配对的思路。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A well-designed randomized comparative experiment finds a statistically significant difference between the treatment and control groups. Which conclusion is justified?",
        "zh": "一个设计良好的随机化比较实验发现处理组与对照组之间存在统计显著差异。下列哪个结论是合理的？"
      },
      "choices": [
        "The treatment caused the difference in the outcome",
        "The treatment is correlated with the outcome, but causation cannot be claimed",
        "A confounding variable must explain the difference",
        "The results automatically generalize to all people everywhere"
      ],
      "answer": 0,
      "explanation": {
        "en": "Random assignment balances lurking variables across groups, so a significant difference can be attributed to the treatment — a causal conclusion. Causation (not just correlation) is exactly what a randomized experiment supports; but generalization depends on how subjects were selected.",
        "zh": "随机分配使潜在变量在各组间趋于平衡，因此显著差异可归因于处理，即因果结论。随机化实验恰恰支持因果（而不仅是相关）；但能否推广取决于受试者是如何选取的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a study of a blood-pressure drug, researchers want to compare its effect on men and women separately, since sex may influence response. The best approach is to",
        "zh": "在一项降压药研究中，研究者想分别比较该药对男性和女性的效应，因为性别可能影响反应。最佳做法是"
      },
      "choices": [
        "ignore sex and use a completely randomized design",
        "block by sex, then randomly assign the drug and placebo within each sex",
        "give men the drug and women the placebo",
        "let subjects pick the drug or placebo based on sex"
      ],
      "answer": 1,
      "explanation": {
        "en": "Blocking by sex creates groups that are homogeneous on that variable; randomizing treatments within each block removes sex as a source of confounding and allows its effect to be examined. Giving one sex the drug and the other the placebo would completely confound sex with treatment.",
        "zh": "按性别分区组会形成在该变量上同质的组；在每个区组内随机分配处理可消除性别作为混杂来源并便于考察其影响。若让一种性别用药、另一种用安慰剂，会使性别与处理完全混杂。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A matched-pairs design differs from a completely randomized two-treatment design mainly because",
        "zh": "配对设计与两处理完全随机化设计的主要区别在于"
      },
      "choices": [
        "it never uses randomization of any kind",
        "it requires exactly four treatments",
        "subjects are paired (or each subject serves as their own pair) and randomization occurs within each pair",
        "it can only be used in observational studies"
      ],
      "answer": 2,
      "explanation": {
        "en": "A matched-pairs design pairs similar subjects (or uses each subject as their own control) and randomly decides the order/assignment within each pair, reducing variability between the two treatments. Randomization still occurs — within each pair — so the claim that it uses no randomization is false.",
        "zh": "配对设计把相似的受试者配成对（或让每个受试者作为自身对照），并在每对内部随机决定顺序/分配，从而减小两处理之间的变异。它仍然使用随机化——在每对内部——所以\"不用随机化\"的说法是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A researcher randomly selects 200 U.S. high-school students and randomly assigns each to an online or in-person tutoring program. The in-person group scores significantly higher. Which statement about the scope of conclusions is correct?",
        "zh": "一位研究者随机选取 200 名美国高中生，并将每人随机分配到线上或线下辅导项目。线下组得分显著更高。关于结论适用范围，下列哪项正确？"
      },
      "choices": [
        "Neither causal nor generalizable conclusions are possible",
        "A causal conclusion is justified and it can be generalized to U.S. high-school students",
        "A causal conclusion is justified but it should not be generalized beyond these 200 students",
        "The study only shows correlation, not causation"
      ],
      "answer": 1,
      "explanation": {
        "en": "Random assignment supports a causal conclusion, and random selection from U.S. high-school students supports generalizing to that population. Because both randomizations are present, both causation and generalization are justified. Saying it is only correlation ignores the random assignment.",
        "zh": "随机分配支持因果结论，而从美国高中生中随机抽取则支持向该总体推广。由于两种随机化都存在，因果和推广都成立。说它只是相关忽视了随机分配。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In an experiment testing 2 doses of caffeine (100 mg, 200 mg) combined with 2 amounts of sleep (6 hours, 8 hours) on reaction time, how many treatments (treatment combinations) are there? Give an integer.",
        "zh": "在一项检验 2 种咖啡因剂量（100 毫克、200 毫克）与 2 种睡眠时长（6 小时、8 小时）组合对反应时间影响的实验中，共有多少种处理（处理组合）？请填一个整数。"
      },
      "answer": "4",
      "accept": [],
      "explanation": {
        "en": "With two factors, each having 2 levels, the number of treatments is the product of the levels: $2 \\times 2 = 4$. Each treatment is one specific combination, e.g. 100 mg with 6 hours of sleep.",
        "zh": "有两个因子，每个因子 2 个水平，处理数是各水平数的乘积：$2 \\times 2 = 4$。每种处理是一个具体组合，例如 100 毫克搭配 6 小时睡眠。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A completely randomized experiment has 90 volunteers to be split equally among 3 treatment groups. How many volunteers are in each group? Give an integer.",
        "zh": "一个完全随机化实验有 90 名志愿者，将平均分入 3 个处理组。每组有多少名志愿者？请填一个整数。"
      },
      "answer": "30",
      "accept": [],
      "explanation": {
        "en": "Equal allocation divides the 90 volunteers evenly: $90 \\div 3 = 30$ per group. Random assignment then decides which specific volunteers go into each group of 30.",
        "zh": "平均分配将 90 名志愿者均分：$90 \\div 3 = 30$，每组 30 人。随机分配再决定具体哪些志愿者进入每个 30 人的组。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An experiment studies plant growth using 3 fertilizer brands and 2 watering schedules, with every combination used. How many distinct treatments are there? Give an integer.",
        "zh": "一项实验用 3 种肥料品牌和 2 种浇水计划研究植物生长，且每种组合都使用。共有多少种不同的处理？请填一个整数。"
      },
      "answer": "6",
      "accept": [],
      "explanation": {
        "en": "Two factors with 3 and 2 levels give $3 \\times 2 = 6$ treatment combinations. Each treatment pairs one fertilizer brand with one watering schedule.",
        "zh": "两个因子分别有 3 个和 2 个水平，得到 $3 \\times 2 = 6$ 种处理组合。每种处理把一种肥料品牌与一种浇水计划配对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank with one word: In an experiment, the explanatory variables whose levels are deliberately set by the researcher are called ______.",
        "zh": "用一个词填空：在实验中，由研究者刻意设定其水平的解释变量称为______。"
      },
      "answer": "factors",
      "accept": [
        "factor",
        "因子"
      ],
      "explanation": {
        "en": "The explanatory variables in an experiment are called factors; the specific values a factor can take are its levels, and a treatment is a combination of one level of each factor.",
        "zh": "实验中的解释变量称为因子；因子能取的具体取值是它的水平，而处理是每个因子各取一个水平的组合。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "One factor has 5 levels and another factor has 3 levels. If all combinations are tested, how many treatments result? Give an integer.",
        "zh": "一个因子有 5 个水平，另一个因子有 3 个水平。若测试所有组合，共产生多少种处理？请填一个整数。"
      },
      "answer": "15",
      "accept": [],
      "explanation": {
        "en": "The number of treatments equals the product of the numbers of levels: $5 \\times 3 = 15$. Every treatment is one level of the first factor crossed with one level of the second.",
        "zh": "处理数等于各因子水平数的乘积：$5 \\times 3 = 15$。每种处理是第一个因子的一个水平与第二个因子的一个水平的交叉组合。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "True or False: Because a study was observational (no treatment imposed), a statistically significant association it finds can be used to conclude that one variable causes the other. Answer \"True\" or \"False\".",
        "zh": "判断对错：由于某研究是观察性的（未施加处理），它发现的统计显著关联可用来断定一个变量导致另一个变量。请回答\"True\"或\"False\"。"
      },
      "answer": "False",
      "accept": [
        "false",
        "F",
        "错",
        "假"
      ],
      "explanation": {
        "en": "False. Observational studies cannot establish causation because confounding variables may explain the association; only a well-designed randomized experiment supports a causal conclusion.",
        "zh": "错误。观察性研究无法确立因果，因为混杂变量可能解释该关联；只有设计良好的随机化实验才支持因果结论。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank with one word: The design principle of using enough experimental units (many subjects per treatment) so that chance differences average out is called ______.",
        "zh": "用一个词填空：使用足够多的实验单元（每个处理有许多受试者）以使偶然差异相互抵消的设计原则称为______。"
      },
      "answer": "replication",
      "accept": [
        "重复"
      ],
      "explanation": {
        "en": "Replication means applying each treatment to many experimental units so that random variation is reduced and real treatment effects can be detected. It is distinct from control (comparison) and randomization (assignment).",
        "zh": "重复指把每种处理施加于许多实验单元，从而减小随机变异并能检测出真实的处理效应。它不同于对照（比较）和随机化（分配）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A clinical trial gives one group the real drug and another group an identical-looking pill with no active ingredient. In one word, what is this inactive pill called?",
        "zh": "一项临床试验给一组受试者真药，给另一组外观相同但无活性成分的药片。用一个词说，这种无活性的药片叫什么？"
      },
      "answer": "placebo",
      "accept": [
        "安慰剂"
      ],
      "explanation": {
        "en": "A dummy treatment with no active ingredient is a placebo. Using it creates a comparable control group and lets researchers measure the drug’s effect beyond the psychological placebo effect.",
        "zh": "无活性成分的假处理称为安慰剂。使用它可形成可比的对照组，让研究者测量药物在心理性安慰剂效应之外的真实效应。"
      }
    }
  ],
  "probability-random-variables/probability-rules": [
    {
      "type": "mc",
      "question": {
        "en": "A fair coin is flipped 3 times, recording the sequence of heads and tails. How many equally likely outcomes are in the sample space?",
        "zh": "将一枚均匀硬币抛掷 3 次，记录正反面的顺序。样本空间中有多少个等可能的结果？"
      },
      "choices": [
        "$6$",
        "$8$",
        "$3$",
        "$9$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Each flip has 2 outcomes and the flips are independent, so the sample space has $2 \\times 2 \\times 2 = 8$ ordered outcomes. Answering $6$ mistakenly multiplies $2 \\times 3$ instead of using $2^3$.",
        "zh": "每次抛掷有 2 种结果且相互独立，故样本空间有 $2 \\times 2 \\times 2 = 8$ 个有序结果。答 $6$ 是误将 $2 \\times 3$ 相乘，而不是用 $2^3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $P(A) = 0.35$, what is $P(A^c)$, the probability of the complement of $A$?",
        "zh": "若 $P(A) = 0.35$，则补事件的概率 $P(A^c)$ 是多少？"
      },
      "choices": [
        "$0.35$",
        "$1.35$",
        "$0.65$",
        "$0.30$"
      ],
      "answer": 2,
      "explanation": {
        "en": "By the complement rule, $P(A^c) = 1 - P(A) = 1 - 0.35 = 0.65$. Probabilities of an event and its complement must sum to 1, so a value above 1 like $1.35$ is impossible.",
        "zh": "由补事件法则，$P(A^c) = 1 - P(A) = 1 - 0.35 = 0.65$。一个事件与其补事件的概率之和必为 1，因此像 $1.35$ 这样大于 1 的值不可能。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ are mutually exclusive with $P(A) = 0.30$ and $P(B) = 0.45$. Find $P(A \\text{ or } B)$.",
        "zh": "事件 $A$ 与 $B$ 互斥，$P(A) = 0.30$，$P(B) = 0.45$。求 $P(A \\text{ 或 } B)$。"
      },
      "choices": [
        "$0.75$",
        "$0.135$",
        "$0.15$",
        "Cannot be determined"
      ],
      "answer": 0,
      "explanation": {
        "en": "For mutually exclusive events $P(A \\text{ and } B) = 0$, so the addition rule gives $P(A \\text{ or } B) = P(A) + P(B) = 0.30 + 0.45 = 0.75$. The value $0.135$ comes from wrongly multiplying, which would only apply to a joint probability of independent events.",
        "zh": "对互斥事件 $P(A \\text{ 且 } B) = 0$，故加法法则给出 $P(A \\text{ 或 } B) = P(A) + P(B) = 0.30 + 0.45 = 0.75$。$0.135$ 来自错误地相乘，那只适用于独立事件的联合概率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ satisfy $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\text{ and } B) = 0.2$. Find $P(A \\text{ or } B)$.",
        "zh": "事件 $A$ 与 $B$ 满足 $P(A) = 0.6$，$P(B) = 0.5$，$P(A \\text{ 且 } B) = 0.2$。求 $P(A \\text{ 或 } B)$。"
      },
      "choices": [
        "$1.1$",
        "$0.9$",
        "$0.3$",
        "$0.7$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The general addition rule is $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B) = 0.6 + 0.5 - 0.2 = 0.9$. Answering $1.1$ forgets to subtract the overlap and produces an impossible probability greater than 1.",
        "zh": "一般加法法则为 $P(A \\text{ 或 } B) = P(A) + P(B) - P(A \\text{ 且 } B) = 0.6 + 0.5 - 0.2 = 0.9$。答 $1.1$ 是忘记减去重叠部分，得到了大于 1 的不可能概率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.4$. Are $A$ and $B$ independent?",
        "zh": "事件 $A$ 与 $B$ 互斥，$P(A) = 0.3$，$P(B) = 0.4$。$A$ 与 $B$ 是否独立？"
      },
      "choices": [
        "Yes, mutually exclusive events are always independent",
        "Yes, because they cannot occur together",
        "Only if $P(A) = P(B)$",
        "No, they are dependent because $P(A \\text{ and } B) = 0 \\ne P(A)P(B) = 0.12$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Mutually exclusive events with positive probabilities are NOT independent: since they cannot both occur, $P(A \\text{ and } B) = 0$, but independence would require $P(A \\text{ and } B) = P(A)P(B) = 0.12$. Knowing $A$ occurred tells you $B$ did not, so the events are dependent. This is the classic confusion between mutually exclusive and independent.",
        "zh": "具有正概率的互斥事件并不独立：由于二者不能同时发生，$P(A \\text{ 且 } B) = 0$，而独立要求 $P(A \\text{ 且 } B) = P(A)P(B) = 0.12$。已知 $A$ 发生就意味着 $B$ 未发生，故两事件相依。这正是互斥与独立之间的经典混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ are independent with $P(A) = 0.4$ and $P(B) = 0.25$. Find $P(A \\text{ and } B)$.",
        "zh": "事件 $A$ 与 $B$ 独立，$P(A) = 0.4$，$P(B) = 0.25$。求 $P(A \\text{ 且 } B)$。"
      },
      "choices": [
        "$0.65$",
        "$0.15$",
        "$0.10$",
        "$0.40$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For independent events the multiplication rule gives $P(A \\text{ and } B) = P(A) \\cdot P(B) = 0.4 \\times 0.25 = 0.10$. Answering $0.65$ adds the probabilities, which applies to 'or' (union), not 'and' (joint).",
        "zh": "对独立事件，乘法法则给出 $P(A \\text{ 且 } B) = P(A) \\cdot P(B) = 0.4 \\times 0.25 = 0.10$。答 $0.65$ 是把概率相加，那适用于「或」（并集），而非「且」（联合）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A two-way table of 100 people classifies them by age and coffee preference. Adults: 40 like coffee, 20 dislike (60 total). Teens: 10 like, 30 dislike (40 total). Find $P(\\text{likes coffee} \\mid \\text{adult})$.",
        "zh": "一张 100 人的双向表按年龄和咖啡偏好分类。成人：40 人喜欢咖啡，20 人不喜欢（共 60 人）。青少年：10 人喜欢，30 人不喜欢（共 40 人）。求 $P(\\text{喜欢咖啡} \\mid \\text{成人})$。"
      },
      "choices": [
        "$0.67$",
        "$0.40$",
        "$0.80$",
        "$0.50$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Conditional probability restricts to the adult column: $P(\\text{likes} \\mid \\text{adult}) = \\frac{40}{60} \\approx 0.67$. Answering $0.40$ uses the whole sample of 100 as the denominator, ignoring that conditioning on 'adult' shrinks the relevant group to 60.",
        "zh": "条件概率只限于成人这一组：$P(\\text{喜欢} \\mid \\text{成人}) = \\frac{40}{60} \\approx 0.67$。答 $0.40$ 是用全部 100 人作分母，忽略了以「成人」为条件会把相关群体缩小到 60 人。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement best describes the law of large numbers for a fair coin?",
        "zh": "关于均匀硬币，以下哪项最准确地描述了大数定律？"
      },
      "choices": [
        "After a long run of heads, tails becomes more likely to balance things out",
        "The average of a small sample must equal the true probability",
        "In exactly 1000 flips you will get exactly 500 heads",
        "As the number of flips grows, the observed proportion of heads approaches $0.5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The law of large numbers says the observed proportion of successes converges to the true probability as the number of independent trials increases. The first option is the gambler's fallacy: past flips do not change the probability of future flips, and the coin has no memory.",
        "zh": "大数定律指出，随着独立试验次数增加，成功的观测比例会收敛于真实概率。第一个选项是赌徒谬误：过去的抛掷不会改变未来抛掷的概率，硬币没有记忆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A Venn diagram for events $A$ and $B$ shows: $A$ only $= 0.20$, $B$ only $= 0.30$, both $A$ and $B = 0.10$, neither $= 0.40$. Find $P(A)$.",
        "zh": "事件 $A$ 与 $B$ 的维恩图显示：仅 $A = 0.20$，仅 $B = 0.30$，$A$ 且 $B = 0.10$，两者都不 $= 0.40$。求 $P(A)$。"
      },
      "choices": [
        "$0.10$",
        "$0.20$",
        "$0.30$",
        "$0.60$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$P(A)$ is the entire $A$ circle: the part in $A$ only plus the overlap, $0.20 + 0.10 = 0.30$. Answering $0.20$ counts only the '$A$ only' region and forgets the overlap that still belongs to $A$.",
        "zh": "$P(A)$ 是整个 $A$ 圆：仅 $A$ 的部分加上重叠部分，$0.20 + 0.10 = 0.30$。答 $0.20$ 只算了「仅 $A$」区域，忘了仍属于 $A$ 的重叠部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Each morning a student takes the bus with probability $0.6$ or walks with probability $0.4$. If she takes the bus she is late $10\\%$ of the time; if she walks she is late $25\\%$ of the time. Using a tree diagram, find $P(\\text{late})$.",
        "zh": "每天早上，一名学生以概率 $0.6$ 乘公交，以概率 $0.4$ 步行。若乘公交，她迟到的概率为 $10\\%$；若步行，迟到概率为 $25\\%$。用树状图求 $P(\\text{迟到})$。"
      },
      "choices": [
        "$0.35$",
        "$0.16$",
        "$0.10$",
        "$0.125$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sum the two 'late' branches: $P(\\text{late}) = 0.6 \\times 0.10 + 0.4 \\times 0.25 = 0.06 + 0.10 = 0.16$. Answering $0.35$ just adds the two conditional late rates ($0.10 + 0.25$) without weighting by how often each route is taken.",
        "zh": "将两条「迟到」分支相加：$P(\\text{迟到}) = 0.6 \\times 0.10 + 0.4 \\times 0.25 = 0.06 + 0.10 = 0.16$。答 $0.35$ 只是把两个条件迟到率相加（$0.10 + 0.25$），未按每种出行方式的频率加权。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For events $A$ and $B$, $P(A) = 0.5$ and $P(B \\mid A) = 0.3$. Find $P(A \\text{ and } B)$.",
        "zh": "对事件 $A$ 与 $B$，$P(A) = 0.5$，$P(B \\mid A) = 0.3$。求 $P(A \\text{ 且 } B)$。"
      },
      "choices": [
        "$0.15$",
        "$0.60$",
        "$0.80$",
        "$0.30$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The general multiplication rule is $P(A \\text{ and } B) = P(A) \\cdot P(B \\mid A) = 0.5 \\times 0.3 = 0.15$. Answering $0.30$ mistakes the conditional probability itself for the joint probability, forgetting to weight by $P(A)$.",
        "zh": "一般乘法法则为 $P(A \\text{ 且 } B) = P(A) \\cdot P(B \\mid A) = 0.5 \\times 0.3 = 0.15$。答 $0.30$ 是把条件概率本身误当成联合概率，忘了乘以 $P(A)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For events $A$ and $B$, $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \\text{ and } B) = 0.2$. Are $A$ and $B$ independent?",
        "zh": "对事件 $A$ 与 $B$，$P(A) = 0.5$，$P(B) = 0.4$，$P(A \\text{ 且 } B) = 0.2$。$A$ 与 $B$ 是否独立？"
      },
      "choices": [
        "No, because the events overlap",
        "No, because $P(A \\text{ and } B) \\ne 0$",
        "Cannot be determined without more information",
        "Yes, because $P(A \\text{ and } B) = P(A)P(B) = 0.2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Test independence by checking $P(A)P(B) = 0.5 \\times 0.4 = 0.2$, which equals the given $P(A \\text{ and } B) = 0.2$, so the events are independent. The claim that overlapping ($P(A \\text{ and } B) \\ne 0$) rules out independence confuses independence with being mutually exclusive.",
        "zh": "通过检验 $P(A)P(B) = 0.5 \\times 0.4 = 0.2$ 来判断独立性，它等于给定的 $P(A \\text{ 且 } B) = 0.2$，故两事件独立。认为有重叠（$P(A \\text{ 且 } B) \\ne 0$）就排除独立，是把独立与互斥混为一谈。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $P(A) = 0.28$, find $P(A^c)$. Give your answer to 2 decimal places.",
        "zh": "若 $P(A) = 0.28$，求 $P(A^c)$。请保留两位小数。"
      },
      "answer": "0.72",
      "accept": [
        ".72",
        "72%"
      ],
      "explanation": {
        "en": "By the complement rule, $P(A^c) = 1 - P(A) = 1 - 0.28 = 0.72$.",
        "zh": "由补事件法则，$P(A^c) = 1 - P(A) = 1 - 0.28 = 0.72$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Events $A$ and $B$ have $P(A) = 0.55$, $P(B) = 0.40$, and $P(A \\text{ and } B) = 0.15$. Find $P(A \\text{ or } B)$ to 2 decimal places.",
        "zh": "事件 $A$ 与 $B$ 满足 $P(A) = 0.55$，$P(B) = 0.40$，$P(A \\text{ 且 } B) = 0.15$。求 $P(A \\text{ 或 } B)$，保留两位小数。"
      },
      "answer": "0.80",
      "accept": [
        "0.8",
        ".8",
        "80%"
      ],
      "explanation": {
        "en": "General addition rule: $P(A \\text{ or } B) = 0.55 + 0.40 - 0.15 = 0.80$. Subtracting the overlap once avoids double-counting the region where both occur.",
        "zh": "一般加法法则：$P(A \\text{ 或 } B) = 0.55 + 0.40 - 0.15 = 0.80$。减去一次重叠部分可避免对两事件同时发生的区域重复计数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the coffee two-way table (Adults: 40 like, 20 dislike; Teens: 10 like, 30 dislike; 100 total), find $P(\\text{adult} \\mid \\text{likes coffee})$ to 2 decimal places.",
        "zh": "利用咖啡双向表（成人：喜欢 40，不喜欢 20；青少年：喜欢 10，不喜欢 30；共 100 人），求 $P(\\text{成人} \\mid \\text{喜欢咖啡})$，保留两位小数。"
      },
      "answer": "0.80",
      "accept": [
        "0.8",
        ".8",
        "80%"
      ],
      "explanation": {
        "en": "Restrict to people who like coffee: $40 + 10 = 50$ total, of whom 40 are adults. $P(\\text{adult} \\mid \\text{likes}) = \\frac{40}{50} = 0.80$. The condition changes the denominator to the 50 coffee-likers.",
        "zh": "只限于喜欢咖啡的人：共 $40 + 10 = 50$ 人，其中 40 人是成人。$P(\\text{成人} \\mid \\text{喜欢}) = \\frac{40}{50} = 0.80$。条件把分母变成了 50 位喜欢咖啡者。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A fair coin and a fair six-sided die are tossed together. Find $P(\\text{heads and a } 6)$ to 3 decimal places.",
        "zh": "同时抛掷一枚均匀硬币和一颗均匀的六面骰子。求 $P(\\text{正面且掷出 } 6)$，保留三位小数。"
      },
      "answer": "0.083",
      "accept": [
        "1/12",
        "0.0833",
        "0.08"
      ],
      "explanation": {
        "en": "The coin and die are independent, so $P(\\text{heads and }6) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12} \\approx 0.083$.",
        "zh": "硬币与骰子相互独立，故 $P(\\text{正面且 }6) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12} \\approx 0.083$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the coffee two-way table (Adults: 40 like, 20 dislike; Teens: 10 like, 30 dislike; 100 total), find the joint probability $P(\\text{teen and dislikes coffee})$ to 2 decimal places.",
        "zh": "利用咖啡双向表（成人：喜欢 40，不喜欢 20；青少年：喜欢 10，不喜欢 30；共 100 人），求联合概率 $P(\\text{青少年且不喜欢咖啡})$，保留两位小数。"
      },
      "answer": "0.30",
      "accept": [
        "0.3",
        ".3",
        "30%"
      ],
      "explanation": {
        "en": "A joint probability uses the full sample of 100 as the denominator: 30 people are both teens and coffee-dislikers, so $P = \\frac{30}{100} = 0.30$. Unlike a conditional probability, the denominator here is the grand total.",
        "zh": "联合概率以全部 100 人为分母：既是青少年又不喜欢咖啡的有 30 人，故 $P = \\frac{30}{100} = 0.30$。与条件概率不同，这里的分母是总人数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A basketball player makes each free throw independently with probability $0.8$. She shoots 3 free throws. Find $P(\\text{at least one miss})$ to 3 decimal places.",
        "zh": "一名篮球运动员每次罚球独立命中的概率为 $0.8$。她投 3 次罚球。求 $P(\\text{至少一次未命中})$，保留三位小数。"
      },
      "answer": "0.488",
      "accept": [
        "0.49",
        "48.8%"
      ],
      "explanation": {
        "en": "Use the complement: $P(\\text{at least one miss}) = 1 - P(\\text{all made}) = 1 - 0.8^3 = 1 - 0.512 = 0.488$. Computing 'at least one' directly is much harder than subtracting the single all-made case.",
        "zh": "用补事件：$P(\\text{至少一次未命中}) = 1 - P(\\text{全部命中}) = 1 - 0.8^3 = 1 - 0.512 = 0.488$。直接计算「至少一次」比减去唯一的「全部命中」情形要复杂得多。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two cards are drawn without replacement from a standard 52-card deck. Find $P(\\text{both cards are red})$ to 3 decimal places.",
        "zh": "从一副标准的 52 张牌中不放回地抽取两张。求 $P(\\text{两张都是红色})$，保留三位小数。"
      },
      "answer": "0.245",
      "accept": [
        "0.25",
        "24.5%",
        "25/102"
      ],
      "explanation": {
        "en": "Because the draws are without replacement they are dependent, so use the general multiplication rule: $P(\\text{both red}) = \\frac{26}{52} \\times \\frac{25}{51} = \\frac{650}{2652} \\approx 0.245$. The second probability drops to $\\frac{25}{51}$ since one red card is already gone.",
        "zh": "由于是不放回抽取，两次抽取相依，故用一般乘法法则：$P(\\text{两张都红}) = \\frac{26}{52} \\times \\frac{25}{51} = \\frac{650}{2652} \\approx 0.245$。第二个概率降为 $\\frac{25}{51}$，因为已经取走了一张红牌。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A factory uses two machines. Machine A makes $70\\%$ of parts with a $2\\%$ defect rate; Machine B makes $30\\%$ with a $5\\%$ defect rate. Using a tree diagram, find $P(\\text{a randomly chosen part is defective})$ to 3 decimal places.",
        "zh": "一家工厂使用两台机器。机器 A 生产 $70\\%$ 的零件，次品率为 $2\\%$；机器 B 生产 $30\\%$，次品率为 $5\\%$。用树状图求 $P(\\text{随机抽取的零件为次品})$，保留三位小数。"
      },
      "answer": "0.029",
      "accept": [
        "2.9%",
        "0.03"
      ],
      "explanation": {
        "en": "Sum the defective branches: $P(\\text{defective}) = 0.70 \\times 0.02 + 0.30 \\times 0.05 = 0.014 + 0.015 = 0.029$. This is the law of total probability applied across the two machines.",
        "zh": "将次品分支相加：$P(\\text{次品}) = 0.70 \\times 0.02 + 0.30 \\times 0.05 = 0.014 + 0.015 = 0.029$。这是在两台机器上应用全概率公式。"
      }
    }
  ],
  "probability-random-variables/random-variables-and-distributions": [
    {
      "type": "mc",
      "question": {
        "en": "A discrete random variable $X$ takes values $0, 1, 2, 3$ with probabilities $0.1, 0.3, 0.4, 0.2$. Find the expected value $\\mu_X$.",
        "zh": "离散随机变量 $X$ 取值 $0, 1, 2, 3$，对应概率为 $0.1, 0.3, 0.4, 0.2$。求期望值 $\\mu_X$。"
      },
      "choices": [
        "$1.7$",
        "$1.5$",
        "$2.0$",
        "$1.6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\mu_X = \\sum x_i P(x_i) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0.3 + 0.8 + 0.6 = 1.7$. Answering $1.5$ comes from averaging the four outcome values without weighting by their probabilities.",
        "zh": "$\\mu_X = \\sum x_i P(x_i) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0.3 + 0.8 + 0.6 = 1.7$。答 $1.5$ 是把四个取值直接平均，而没有用各自的概率加权。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A basketball player shoots free throws, each independent with success probability $0.7$, and stops as soon as she makes one. Which distribution models the number of shots she takes?",
        "zh": "一名篮球运动员罚球，每次相互独立、命中概率为 $0.7$，一旦命中就停止。她所投次数服从哪种分布？"
      },
      "choices": [
        "Geometric",
        "Binomial",
        "Uniform",
        "Normal"
      ],
      "answer": 0,
      "explanation": {
        "en": "Counting trials until the first success (with a fixed success probability and independent trials) is the geometric setting. Binomial would apply only if the number of shots were fixed in advance and we counted successes.",
        "zh": "在成功概率固定、各次独立的情况下，数到第一次成功为止的试验次数属于几何分布。二项分布只适用于事先固定投球次数并统计成功次数的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Independent random variables $X$ and $Y$ have standard deviations $\\sigma_X = 3$ and $\\sigma_Y = 4$. Find the standard deviation of $X + Y$.",
        "zh": "独立随机变量 $X$ 与 $Y$ 的标准差分别为 $\\sigma_X = 3$、$\\sigma_Y = 4$。求 $X + Y$ 的标准差。"
      },
      "choices": [
        "$5$",
        "$7$",
        "$25$",
        "$3.5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For independent variables the variances add: $\\sigma_{X+Y}^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $\\sigma_{X+Y} = \\sqrt{25} = 5$. Answering $7$ is the classic error of adding the standard deviations directly, which is not allowed.",
        "zh": "对独立随机变量，方差相加：$\\sigma_{X+Y}^2 = 3^2 + 4^2 = 9 + 16 = 25$，故 $\\sigma_{X+Y} = \\sqrt{25} = 5$。答 $7$ 是把标准差直接相加的典型错误，这是不允许的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A random variable $X$ has mean $E(X) = 4$. Let $Y = 3X + 2$. Find $E(Y)$.",
        "zh": "随机变量 $X$ 的期望 $E(X) = 4$。令 $Y = 3X + 2$，求 $E(Y)$。"
      },
      "choices": [
        "$12$",
        "$14$",
        "$6$",
        "$2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$E(aX + b) = aE(X) + b = 3(4) + 2 = 14$. Answering $12$ forgets to add the constant $+2$ after scaling the mean.",
        "zh": "$E(aX + b) = aE(X) + b = 3(4) + 2 = 14$。答 $12$ 是在把均值放大后忘记加上常数 $+2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a binomial setting with $n = 20$ trials and success probability $p = 0.3$, what is the mean number of successes?",
        "zh": "在 $n = 20$ 次试验、成功概率 $p = 0.3$ 的二项分布中，成功次数的均值是多少？"
      },
      "choices": [
        "$3$",
        "$6$",
        "$4.2$",
        "$14$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The binomial mean is $\\mu = np = 20(0.3) = 6$. Answering $4.2$ mistakenly uses $np(1-p) = 20(0.3)(0.7)$, which is the variance, not the mean.",
        "zh": "二项分布的均值为 $\\mu = np = 20(0.3) = 6$。答 $4.2$ 是误用了 $np(1-p) = 20(0.3)(0.7)$，那是方差而不是均值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A random variable $X$ has standard deviation $\\sigma_X = 5$. Let $Y = 3X + 2$. Find $\\sigma_Y$.",
        "zh": "随机变量 $X$ 的标准差 $\\sigma_X = 5$。令 $Y = 3X + 2$，求 $\\sigma_Y$。"
      },
      "choices": [
        "$5$",
        "$15$",
        "$17$",
        "$45$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Adding a constant does not change spread, and multiplying by $3$ multiplies the SD by $|3|$: $\\sigma_Y = |3|\\sigma_X = 3(5) = 15$. Answering $17$ wrongly adds the constant $+2$ to the standard deviation.",
        "zh": "加常数不改变离散程度，而乘以 $3$ 会使标准差乘以 $|3|$：$\\sigma_Y = |3|\\sigma_X = 3(5) = 15$。答 $17$ 是错误地把常数 $+2$ 加到了标准差上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A binomial random variable has $n = 100$ trials and success probability $p = 0.2$. Find its standard deviation.",
        "zh": "一个二项随机变量有 $n = 100$ 次试验、成功概率 $p = 0.2$。求其标准差。"
      },
      "choices": [
        "$16$",
        "$20$",
        "$4$",
        "$8$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\sigma = \\sqrt{np(1-p)} = \\sqrt{100(0.2)(0.8)} = \\sqrt{16} = 4$. Answering $16$ reports the variance instead of taking the square root to get the standard deviation.",
        "zh": "$\\sigma = \\sqrt{np(1-p)} = \\sqrt{100(0.2)(0.8)} = \\sqrt{16} = 4$。答 $16$ 是给出了方差，而没有开平方得到标准差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a binomial random variable with $n = 5$ and $p = 0.4$, find $P(X = 2)$.",
        "zh": "对参数为 $n = 5$、$p = 0.4$ 的二项随机变量，求 $P(X = 2)$。"
      },
      "choices": [
        "$0.230$",
        "$0.400$",
        "$0.346$",
        "$0.160$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$P(X = 2) = \\binom{5}{2}(0.4)^2(0.6)^3 = 10(0.16)(0.216) = 0.3456 \\approx 0.346$. Answering $0.160$ uses only $(0.4)^2$ and omits both the combination $\\binom{5}{2}$ and the failures $(0.6)^3$.",
        "zh": "$P(X = 2) = \\binom{5}{2}(0.4)^2(0.6)^3 = 10(0.16)(0.216) = 0.3456 \\approx 0.346$。答 $0.160$ 只用了 $(0.4)^2$，漏掉了组合数 $\\binom{5}{2}$ 和失败项 $(0.6)^3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric random variable counts trials until the first success, with success probability $p = 0.25$. What is its mean (expected number of trials)?",
        "zh": "一个几何随机变量表示直到第一次成功为止的试验次数，成功概率 $p = 0.25$。其均值（期望试验次数）是多少？"
      },
      "choices": [
        "$0.25$",
        "$3$",
        "$4$",
        "$5$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The mean of a geometric distribution is $\\mu = \\frac{1}{p} = \\frac{1}{0.25} = 4$. Answering $3$ mistakenly uses $\\frac{1-p}{p}$, which counts failures before the first success rather than total trials.",
        "zh": "几何分布的均值为 $\\mu = \\frac{1}{p} = \\frac{1}{0.25} = 4$。答 $3$ 是误用了 $\\frac{1-p}{p}$，那计的是第一次成功前的失败次数，而不是总试验次数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation is best modeled by a binomial distribution?",
        "zh": "下列哪种情形最适合用二项分布来建模？"
      },
      "choices": [
        "Drawing cards one at a time without replacement until you get an ace",
        "Counting how many customers arrive at a store during one hour",
        "Rolling a fair die repeatedly until you roll a $6$",
        "The number of heads in $12$ independent flips of a fair coin"
      ],
      "answer": 3,
      "explanation": {
        "en": "Binomial requires a fixed number of independent trials, two outcomes, and constant success probability — exactly the $12$ coin flips. Drawing without replacement violates independence/constant $p$, and the \"until\" scenarios are geometric, not binomial.",
        "zh": "二项分布要求固定次数的独立试验、两种结果且成功概率恒定，正好符合 $12$ 次抛硬币。无放回抽取破坏了独立性/恒定的 $p$，而“直到……为止”的情形属于几何分布，而非二项分布。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Independent random variables $X$ and $Y$ have variances $\\text{Var}(X) = 4$ and $\\text{Var}(Y) = 9$. Find $\\text{Var}(2X - Y)$.",
        "zh": "独立随机变量 $X$ 与 $Y$ 的方差分别为 $\\text{Var}(X) = 4$、$\\text{Var}(Y) = 9$。求 $\\text{Var}(2X - Y)$。"
      },
      "choices": [
        "$1$",
        "$13$",
        "$5$",
        "$25$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Scaling squares the coefficient and, for independent variables, variances add even for a difference: $\\text{Var}(2X - Y) = 2^2\\text{Var}(X) + (-1)^2\\text{Var}(Y) = 16 + 9 = 25$. Answering $1$ wrongly subtracts variances because of the minus sign; variances never subtract.",
        "zh": "缩放会把系数平方，且对独立随机变量，即使是差，方差也相加：$\\text{Var}(2X - Y) = 2^2\\text{Var}(X) + (-1)^2\\text{Var}(Y) = 16 + 9 = 25$。答 $1$ 是因为减号而错误地把方差相减；方差永远不相减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A random variable $X$ has variance $\\text{Var}(X) = 2$. Let $Y = 4X$. Find $\\text{Var}(Y)$.",
        "zh": "随机变量 $X$ 的方差 $\\text{Var}(X) = 2$。令 $Y = 4X$，求 $\\text{Var}(Y)$。"
      },
      "choices": [
        "$8$",
        "$2$",
        "$6$",
        "$32$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\text{Var}(aX) = a^2\\text{Var}(X) = 4^2(2) = 16(2) = 32$. Answering $8$ scales the variance by $4$ instead of by $4^2$; the multiplier is squared for variance.",
        "zh": "$\\text{Var}(aX) = a^2\\text{Var}(X) = 4^2(2) = 16(2) = 32$。答 $8$ 是把方差乘以 $4$，而不是乘以 $4^2$；对方差而言系数要平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A discrete random variable takes four values with probabilities $0.15, 0.25, ?, 0.30$. What must the missing probability be? Give a decimal.",
        "zh": "一个离散随机变量取四个值，概率分别为 $0.15, 0.25, ?, 0.30$。缺失的概率必须是多少？请填小数。"
      },
      "answer": "0.30",
      "accept": [
        "0.3",
        ".3",
        ".30"
      ],
      "explanation": {
        "en": "Probabilities in a valid distribution sum to $1$: $1 - (0.15 + 0.25 + 0.30) = 1 - 0.70 = 0.30$.",
        "zh": "一个有效概率分布中所有概率之和为 $1$：$1 - (0.15 + 0.25 + 0.30) = 1 - 0.70 = 0.30$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A random variable $X$ takes values $1, 2, 3$ with probabilities $0.2, 0.5, 0.3$. Find the standard deviation $\\sigma_X$, rounded to 2 decimal places.",
        "zh": "随机变量 $X$ 取值 $1, 2, 3$，概率分别为 $0.2, 0.5, 0.3$。求标准差 $\\sigma_X$，保留两位小数。"
      },
      "answer": "0.70",
      "accept": [
        "0.7",
        ".7",
        ".70"
      ],
      "explanation": {
        "en": "$\\mu = 1(0.2) + 2(0.5) + 3(0.3) = 2.1$. $E(X^2) = 1(0.2) + 4(0.5) + 9(0.3) = 4.9$, so $\\text{Var} = 4.9 - 2.1^2 = 4.9 - 4.41 = 0.49$ and $\\sigma_X = \\sqrt{0.49} = 0.70$.",
        "zh": "$\\mu = 1(0.2) + 2(0.5) + 3(0.3) = 2.1$。$E(X^2) = 1(0.2) + 4(0.5) + 9(0.3) = 4.9$，故 $\\text{Var} = 4.9 - 2.1^2 = 4.9 - 4.41 = 0.49$，$\\sigma_X = \\sqrt{0.49} = 0.70$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a binomial random variable with $n = 8$ and $p = 0.5$, find $P(X = 3)$, rounded to 3 decimal places.",
        "zh": "对参数为 $n = 8$、$p = 0.5$ 的二项随机变量，求 $P(X = 3)$，保留三位小数。"
      },
      "answer": "0.219",
      "accept": [
        "0.22",
        "0.2188",
        "0.21875"
      ],
      "explanation": {
        "en": "$P(X = 3) = \\binom{8}{3}(0.5)^3(0.5)^5 = 56 \\cdot (0.5)^8 = \\frac{56}{256} = 0.21875 \\approx 0.219$.",
        "zh": "$P(X = 3) = \\binom{8}{3}(0.5)^3(0.5)^5 = 56 \\cdot (0.5)^8 = \\frac{56}{256} = 0.21875 \\approx 0.219$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A binomial random variable has $n = 50$ trials with success probability $p = 0.12$. What is its mean? Give a number.",
        "zh": "一个二项随机变量有 $n = 50$ 次试验、成功概率 $p = 0.12$。其均值是多少？请填一个数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6.00"
      ],
      "explanation": {
        "en": "The binomial mean is $\\mu = np = 50(0.12) = 6$.",
        "zh": "二项分布的均值为 $\\mu = np = 50(0.12) = 6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A binomial random variable has $n = 64$ trials with success probability $p = 0.25$. Find its standard deviation, rounded to 2 decimal places.",
        "zh": "一个二项随机变量有 $n = 64$ 次试验、成功概率 $p = 0.25$。求其标准差，保留两位小数。"
      },
      "answer": "3.46",
      "accept": [
        "3.464",
        "3.4641",
        "3.5"
      ],
      "explanation": {
        "en": "$\\sigma = \\sqrt{np(1-p)} = \\sqrt{64(0.25)(0.75)} = \\sqrt{12} \\approx 3.46$. Do not stop at the variance $12$; take the square root.",
        "zh": "$\\sigma = \\sqrt{np(1-p)} = \\sqrt{64(0.25)(0.75)} = \\sqrt{12} \\approx 3.46$。不要停在方差 $12$，要开平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A trial has success probability $p = 0.2$ and is repeated until the first success. Find $P(X = 4)$, the probability the first success occurs on the 4th trial, rounded to 3 decimal places.",
        "zh": "某试验成功概率 $p = 0.2$，重复进行直到第一次成功。求 $P(X = 4)$，即第一次成功恰好发生在第 $4$ 次试验的概率，保留三位小数。"
      },
      "answer": "0.102",
      "accept": [
        "0.10",
        "0.1024"
      ],
      "explanation": {
        "en": "For a geometric distribution, $P(X = k) = (1-p)^{k-1}p = (0.8)^3(0.2) = 0.512 \\cdot 0.2 = 0.1024 \\approx 0.102$ (three failures then a success).",
        "zh": "对几何分布，$P(X = k) = (1-p)^{k-1}p = (0.8)^3(0.2) = 0.512 \\cdot 0.2 = 0.1024 \\approx 0.102$（先三次失败再一次成功）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric random variable counts trials until the first success, with $p = 0.4$. What is the expected number of trials? Give a decimal.",
        "zh": "一个几何随机变量表示直到第一次成功为止的试验次数，$p = 0.4$。期望试验次数是多少？请填小数。"
      },
      "answer": "2.5",
      "accept": [
        "2.50",
        "5/2"
      ],
      "explanation": {
        "en": "The mean of a geometric distribution is $\\mu = \\frac{1}{p} = \\frac{1}{0.4} = 2.5$.",
        "zh": "几何分布的均值为 $\\mu = \\frac{1}{p} = \\frac{1}{0.4} = 2.5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Independent random variables $X$ and $Y$ have standard deviations $\\sigma_X = 6$ and $\\sigma_Y = 8$. Find the standard deviation of $X + Y$. Give a number.",
        "zh": "独立随机变量 $X$ 与 $Y$ 的标准差分别为 $\\sigma_X = 6$、$\\sigma_Y = 8$。求 $X + Y$ 的标准差。请填一个数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10.00"
      ],
      "explanation": {
        "en": "Variances add for independent variables: $\\sigma_{X+Y} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Adding the SDs to get $14$ is wrong — standard deviations do not add.",
        "zh": "对独立随机变量方差相加：$\\sigma_{X+Y} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$。把标准差相加得 $14$ 是错的——标准差不能相加。"
      }
    }
  ],
  "sampling-distributions/sampling-distributions": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following best describes a sampling distribution?",
        "zh": "下列哪一项最准确地描述了抽样分布？"
      },
      "choices": [
        "The distribution of the individual values in one particular sample",
        "The distribution of the values in the entire population",
        "The distribution of a statistic over all possible samples of the same size $n$",
        "The distribution of the sample sizes used in a study"
      ],
      "answer": 2,
      "explanation": {
        "en": "A sampling distribution is the distribution of a statistic (such as $\\bar{x}$ or $\\hat{p}$) computed from every possible sample of size $n$ drawn from the population. It is easy to confuse this with the distribution of data in a single sample, but a sampling distribution describes how the statistic itself varies from sample to sample.",
        "zh": "抽样分布是指对总体中所有可能的、容量为 $n$ 的样本计算某统计量（如 $\\bar{x}$ 或 $\\hat{p}$）所得到的分布。容易把它与单个样本内数据的分布混淆，但抽样分布描述的是统计量本身在不同样本间的变化情况。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A statistic is an unbiased estimator of a parameter when:",
        "zh": "当满足下列哪种情形时，某统计量是参数的无偏估计量？"
      },
      "choices": [
        "Its value equals the parameter in every single sample",
        "The mean of its sampling distribution equals the value of the parameter",
        "Its standard deviation is as small as possible",
        "It is computed from a very large sample"
      ],
      "answer": 1,
      "explanation": {
        "en": "An estimator is unbiased when the center (mean) of its sampling distribution equals the true parameter value, so it neither systematically overestimates nor underestimates. It does not require the statistic to equal the parameter in each sample, nor does it depend on having the smallest possible variability.",
        "zh": "当一个估计量的抽样分布的中心（均值）等于真实参数值时，它就是无偏的，即既不会系统性地高估也不会低估。它并不要求每个样本的统计量都等于参数，也与变异性是否最小无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a sample proportion $\\hat{p}$ from a population with true proportion $p$, the mean of the sampling distribution of $\\hat{p}$ is:",
        "zh": "设总体真实比例为 $p$，样本比例为 $\\hat{p}$，则 $\\hat{p}$ 抽样分布的均值为："
      },
      "choices": [
        "$p$",
        "$\\sqrt{\\frac{p(1-p)}{n}}$",
        "$\\hat{p}$",
        "$np$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The sample proportion is an unbiased estimator of $p$, so the mean of its sampling distribution is $\\mu_{\\hat{p}} = p$. Choice $\\sqrt{p(1-p)/n}$ is the standard deviation of $\\hat{p}$, not its mean, and $np$ is the mean number of successes, not the mean proportion.",
        "zh": "样本比例是 $p$ 的无偏估计量，因此其抽样分布的均值为 $\\mu_{\\hat{p}} = p$。选项 $\\sqrt{p(1-p)/n}$ 是 $\\hat{p}$ 的标准差而非均值，$np$ 则是成功次数的均值而非比例的均值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population has true proportion $p = 0.40$. For random samples of size $n = 100$, find the standard deviation of the sampling distribution of $\\hat{p}$. Round to 3 decimal places.",
        "zh": "某总体真实比例 $p = 0.40$。对容量 $n = 100$ 的随机样本，求 $\\hat{p}$ 抽样分布的标准差。保留 3 位小数。"
      },
      "answer": "0.049",
      "accept": [
        "0.0490",
        "0.049"
      ],
      "explanation": {
        "en": "The standard deviation is $\\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.40 \\cdot 0.60}{100}} = \\sqrt{0.0024} \\approx 0.049$. A common error is to forget the square root or to divide $p(1-p)$ by $\\sqrt{n}$ instead of $n$.",
        "zh": "标准差为 $\\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.40 \\cdot 0.60}{100}} = \\sqrt{0.0024} \\approx 0.049$。常见错误是忘记开平方，或错误地把 $p(1-p)$ 除以 $\\sqrt{n}$ 而非 $n$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which condition must be met for the sampling distribution of $\\hat{p}$ to be approximately Normal (the Large Counts condition)?",
        "zh": "要使 $\\hat{p}$ 的抽样分布近似正态（大计数条件），必须满足下列哪个条件？"
      },
      "choices": [
        "The sample size $n$ is at least 30",
        "The population is Normally distributed",
        "Both $np \\ge 10$ and $n(1-p) \\ge 10$",
        "The sample is more than 10% of the population"
      ],
      "answer": 2,
      "explanation": {
        "en": "The Large Counts condition requires the expected number of successes $np$ and failures $n(1-p)$ to each be at least 10. The \"$n \\ge 30$\" rule applies to sample means via the CLT, not proportions, and being more than 10% of the population actually violates the independence (10%) condition.",
        "zh": "大计数条件要求期望的成功次数 $np$ 和失败次数 $n(1-p)$ 都至少为 10。“$n \\ge 30$” 是通过中心极限定理用于样本均值的经验法则，不适用于比例；而样本超过总体的 10% 反而违反了独立性（10%）条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a sample mean $\\bar{x}$ from a population with mean $\\mu$ and standard deviation $\\sigma$, the mean of the sampling distribution of $\\bar{x}$ is:",
        "zh": "设总体均值为 $\\mu$、标准差为 $\\sigma$，样本均值为 $\\bar{x}$，则 $\\bar{x}$ 抽样分布的均值为："
      },
      "choices": [
        "$\\frac{\\sigma}{\\sqrt{n}}$",
        "$\\mu$",
        "$\\frac{\\mu}{n}$",
        "$\\sigma$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The sample mean is an unbiased estimator of $\\mu$, so $\\mu_{\\bar{x}} = \\mu$ regardless of sample size. The expression $\\frac{\\sigma}{\\sqrt{n}}$ is the standard deviation of $\\bar{x}$, not its mean.",
        "zh": "样本均值是 $\\mu$ 的无偏估计量，因此无论样本容量多大，$\\mu_{\\bar{x}} = \\mu$。表达式 $\\frac{\\sigma}{\\sqrt{n}}$ 是 $\\bar{x}$ 的标准差而非均值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A population has standard deviation $\\sigma = 20$. For random samples of size $n = 100$, the standard deviation of the sampling distribution of $\\bar{x}$ is:",
        "zh": "某总体标准差 $\\sigma = 20$。对容量 $n = 100$ 的随机样本，$\\bar{x}$ 抽样分布的标准差为："
      },
      "choices": [
        "$2$",
        "$0.2$",
        "$20$",
        "$200$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The standard deviation of $\\bar{x}$ is $\\frac{\\sigma}{\\sqrt{n}} = \\frac{20}{\\sqrt{100}} = \\frac{20}{10} = 2$. Dividing by $n = 100$ instead of $\\sqrt{n} = 10$ gives the wrong value $0.2$.",
        "zh": "$\\bar{x}$ 的标准差为 $\\frac{\\sigma}{\\sqrt{n}} = \\frac{20}{\\sqrt{100}} = \\frac{20}{10} = 2$。若错误地除以 $n = 100$ 而非 $\\sqrt{n} = 10$，会得到错误值 $0.2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population of adult heights has mean $\\mu = 68$ inches and standard deviation $\\sigma = 3$ inches. For random samples of size $n = 25$, give the mean (in inches) of the sampling distribution of $\\bar{x}$.",
        "zh": "某成年人身高总体的均值 $\\mu = 68$ 英寸，标准差 $\\sigma = 3$ 英寸。对容量 $n = 25$ 的随机样本，请给出 $\\bar{x}$ 抽样分布的均值（单位：英寸）。"
      },
      "answer": "68",
      "accept": [
        "68.0",
        "68 inches"
      ],
      "explanation": {
        "en": "The mean of the sampling distribution of $\\bar{x}$ equals the population mean: $\\mu_{\\bar{x}} = \\mu = 68$ inches. Sample size affects the spread ($\\sigma/\\sqrt{n}$) but never the center.",
        "zh": "$\\bar{x}$ 抽样分布的均值等于总体均值：$\\mu_{\\bar{x}} = \\mu = 68$ 英寸。样本容量影响的是离散程度（$\\sigma/\\sqrt{n}$），而非中心位置。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population has standard deviation $\\sigma = 12$. For random samples of size $n = 36$, find the standard deviation of the sampling distribution of $\\bar{x}$. Give an exact value.",
        "zh": "某总体标准差 $\\sigma = 12$。对容量 $n = 36$ 的随机样本，求 $\\bar{x}$ 抽样分布的标准差。请给出精确值。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "The standard deviation of $\\bar{x}$ is $\\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2$. Remember to use $\\sqrt{n}$, not $n$, in the denominator.",
        "zh": "$\\bar{x}$ 的标准差为 $\\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2$。注意分母是 $\\sqrt{n}$ 而不是 $n$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement best expresses the Central Limit Theorem?",
        "zh": "下列哪句话最准确地表述了中心极限定理？"
      },
      "choices": [
        "Any population becomes Normal if you collect enough data",
        "The sampling distribution of $\\hat{p}$ is always exactly Normal",
        "A large sample size makes the sample values Normally distributed",
        "For a large sample size $n$, the sampling distribution of $\\bar{x}$ is approximately Normal regardless of the population shape"
      ],
      "answer": 3,
      "explanation": {
        "en": "The CLT says that when $n$ is large, the sampling distribution of $\\bar{x}$ is approximately Normal even if the population itself is skewed or non-Normal. It does not change the shape of the population or of the individual sample values — only the distribution of the statistic $\\bar{x}$.",
        "zh": "中心极限定理指出：当 $n$ 较大时，即使总体本身是偏态或非正态的，$\\bar{x}$ 的抽样分布也近似服从正态分布。它并不改变总体或单个样本数据的形状，改变的只是统计量 $\\bar{x}$ 的分布。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "IQ scores have population mean $\\mu = 100$ and standard deviation $\\sigma = 15$. For a random sample of size $n = 25$, find the probability that $\\bar{x}$ exceeds $106$. Round to 4 decimal places.",
        "zh": "IQ 分数的总体均值 $\\mu = 100$，标准差 $\\sigma = 15$。对容量 $n = 25$ 的随机样本，求 $\\bar{x}$ 大于 $106$ 的概率。保留 4 位小数。"
      },
      "answer": "0.0228",
      "accept": [
        "0.023",
        "0.0228",
        "2.28%"
      ],
      "explanation": {
        "en": "The standard deviation of $\\bar{x}$ is $\\frac{15}{\\sqrt{25}} = 3$, so $z = \\frac{106 - 100}{3} = 2$. Then $P(\\bar{x} > 106) = P(Z > 2) \\approx 0.0228$. A frequent mistake is to use $\\sigma = 15$ (the individual SD) instead of $\\sigma/\\sqrt{n} = 3$ in the $z$-score.",
        "zh": "$\\bar{x}$ 的标准差为 $\\frac{15}{\\sqrt{25}} = 3$，故 $z = \\frac{106 - 100}{3} = 2$。于是 $P(\\bar{x} > 106) = P(Z > 2) \\approx 0.0228$。常见错误是在计算 $z$ 分数时使用个体标准差 $\\sigma = 15$，而非 $\\sigma/\\sqrt{n} = 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the sample size used to compute $\\bar{x}$ is increased from $n$ to $4n$, the standard deviation of the sampling distribution of $\\bar{x}$ is:",
        "zh": "若计算 $\\bar{x}$ 所用的样本容量从 $n$ 增加到 $4n$，则 $\\bar{x}$ 抽样分布的标准差将："
      },
      "choices": [
        "Doubled",
        "Unchanged",
        "Halved",
        "Multiplied by 4"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since the standard deviation is $\\frac{\\sigma}{\\sqrt{n}}$, replacing $n$ with $4n$ gives $\\frac{\\sigma}{\\sqrt{4n}} = \\frac{\\sigma}{2\\sqrt{n}}$, which is half the original. Because of the square root, you must quadruple $n$ to halve the variability, not merely double it.",
        "zh": "由于标准差为 $\\frac{\\sigma}{\\sqrt{n}}$，将 $n$ 换成 $4n$ 得 $\\frac{\\sigma}{\\sqrt{4n}} = \\frac{\\sigma}{2\\sqrt{n}}$，为原来的一半。因为有平方根，要把变异性减半必须把 $n$ 增大到 4 倍，而不是仅仅翻一倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The standard deviation of $\\bar{x}$ is $\\sigma/\\sqrt{n}$. By what factor must the sample size $n$ be multiplied in order to cut this standard deviation in half? Give an integer.",
        "zh": "$\\bar{x}$ 的标准差为 $\\sigma/\\sqrt{n}$。要使该标准差减半，样本容量 $n$ 必须乘以多少倍？请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "four"
      ],
      "explanation": {
        "en": "To halve $\\frac{\\sigma}{\\sqrt{n}}$ you need $\\sqrt{n}$ to double, which requires $n$ to become $4n$. So the sample size must be multiplied by 4. Doubling $n$ only reduces the standard deviation by a factor of $\\frac{1}{\\sqrt{2}} \\approx 0.707$.",
        "zh": "要把 $\\frac{\\sigma}{\\sqrt{n}}$ 减半，需要 $\\sqrt{n}$ 翻倍，即 $n$ 变为 $4n$。因此样本容量必须乘以 4。仅把 $n$ 翻倍只能使标准差缩小为原来的 $\\frac{1}{\\sqrt{2}} \\approx 0.707$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When sampling without replacement, why do we check the 10% condition ($n \\le 0.10N$)?",
        "zh": "在无放回抽样时，我们为什么要检验 10% 条件（$n \\le 0.10N$）？"
      },
      "choices": [
        "To guarantee the population is Normally distributed",
        "So the observations are close enough to independent for the standard deviation formulas to be valid",
        "To ensure the sample size is at least 30",
        "To make the estimator unbiased"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sampling without replacement makes observations slightly dependent; keeping $n$ no more than 10% of the population $N$ keeps that dependence small enough that the formulas $\\frac{\\sigma}{\\sqrt{n}}$ and $\\sqrt{\\frac{p(1-p)}{n}}$ remain accurate. The 10% condition has nothing to do with Normality or with making an estimator unbiased.",
        "zh": "无放回抽样会使观测值之间存在轻微的相关性；只要 $n$ 不超过总体 $N$ 的 10%，这种相关性就足够小，从而使公式 $\\frac{\\sigma}{\\sqrt{n}}$ 和 $\\sqrt{\\frac{p(1-p)}{n}}$ 仍然准确。10% 条件与正态性或估计量是否无偏都无关。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A random sample of size $n = 50$ is taken from a population with proportion $p = 0.10$. Compute the value of $np$ (the expected number of successes). Give an integer.",
        "zh": "从比例 $p = 0.10$ 的总体中抽取容量 $n = 50$ 的随机样本。计算 $np$（期望的成功次数）的值。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "Here $np = 50 \\cdot 0.10 = 5$. Because $np = 5$ is less than 10, the Large Counts condition fails, so the sampling distribution of $\\hat{p}$ should NOT be treated as approximately Normal in this case.",
        "zh": "此处 $np = 50 \\cdot 0.10 = 5$。由于 $np = 5$ 小于 10，大计数条件不满足，因此在这种情况下不应把 $\\hat{p}$ 的抽样分布视为近似正态。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A population has true proportion $p = 0.20$. For random samples of size $n = 400$, the standard deviation of the sampling distribution of $\\hat{p}$ is:",
        "zh": "某总体真实比例 $p = 0.20$。对容量 $n = 400$ 的随机样本，$\\hat{p}$ 抽样分布的标准差为："
      },
      "choices": [
        "$0.40$",
        "$0.16$",
        "$0.0004$",
        "$0.02$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The standard deviation is $\\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.20 \\cdot 0.80}{400}} = \\sqrt{0.0004} = 0.02$. The value $0.0004$ is the variance (before taking the square root), a common place to stop too early.",
        "zh": "标准差为 $\\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.20 \\cdot 0.80}{400}} = \\sqrt{0.0004} = 0.02$。$0.0004$ 是方差（尚未开平方），是容易过早停下的地方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A statistic is a biased estimator of a parameter. Which statement is TRUE about the effect of increasing the sample size?",
        "zh": "某统计量是参数的有偏估计量。关于增大样本容量的影响，下列哪句话是正确的？"
      },
      "choices": [
        "Increasing the sample size reduces the variability of the estimator but does not remove its bias",
        "Increasing the sample size removes the bias",
        "Increasing the sample size increases the bias",
        "Increasing the sample size makes the estimator unbiased and eliminates variability"
      ],
      "answer": 0,
      "explanation": {
        "en": "Larger samples reduce spread (variability) because the standard deviation of the statistic shrinks, but bias is a systematic error built into the estimation method and is not fixed by taking a bigger sample. Bias and variability are separate ideas: increasing $n$ addresses only variability.",
        "zh": "更大的样本会减小离散程度（变异性），因为统计量的标准差会缩小，但偏差是估计方法本身固有的系统性误差，不能靠增大样本来消除。偏差与变异性是两个不同的概念：增大 $n$ 只能改善变异性。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population has proportion $p = 0.25$. For random samples of size $n = 64$, find the standard deviation of the sampling distribution of $\\hat{p}$. Round to 3 decimal places.",
        "zh": "某总体比例 $p = 0.25$。对容量 $n = 64$ 的随机样本，求 $\\hat{p}$ 抽样分布的标准差。保留 3 位小数。"
      },
      "answer": "0.054",
      "accept": [
        "0.0541",
        "0.054"
      ],
      "explanation": {
        "en": "The standard deviation is $\\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.25 \\cdot 0.75}{64}} = \\sqrt{0.002930} \\approx 0.054$. Be sure to use $1 - p = 0.75$, not $p$ twice.",
        "zh": "标准差为 $\\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.25 \\cdot 0.75}{64}} = \\sqrt{0.002930} \\approx 0.054$。注意要使用 $1 - p = 0.75$，而不是两次都用 $p$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A population is strongly right-skewed. A random sample of size $n = 10$ is taken. Can we assume the sampling distribution of $\\bar{x}$ is approximately Normal?",
        "zh": "某总体呈明显右偏。抽取容量 $n = 10$ 的随机样本。我们能否认为 $\\bar{x}$ 的抽样分布近似正态？"
      },
      "choices": [
        "Yes, because $\\bar{x}$ is always Normally distributed",
        "Yes, because any sample size makes $\\bar{x}$ Normal",
        "Yes, because the population mean is finite",
        "No, because the population is skewed and $n = 10$ is too small for the Central Limit Theorem to apply"
      ],
      "answer": 3,
      "explanation": {
        "en": "When the population is skewed, we need a large enough $n$ (commonly $n \\ge 30$) for the CLT to make $\\bar{x}$ approximately Normal. With $n = 10$ and a strongly skewed population, the sampling distribution of $\\bar{x}$ will still be noticeably skewed. Only if the population were already Normal could we assume Normality for small $n$.",
        "zh": "当总体呈偏态时，需要足够大的 $n$（通常 $n \\ge 30$）才能通过中心极限定理使 $\\bar{x}$ 近似正态。当 $n = 10$ 且总体明显偏态时，$\\bar{x}$ 的抽样分布仍会明显偏斜。只有当总体本身就服从正态分布时，小样本才能假设正态。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population has proportion $p = 0.50$. For random samples of size $n = 100$ (so the standard deviation of $\\hat{p}$ is $0.05$), find $P(\\hat{p} \\le 0.45)$ using a Normal approximation. Round to 4 decimal places.",
        "zh": "某总体比例 $p = 0.50$。对容量 $n = 100$ 的随机样本（此时 $\\hat{p}$ 的标准差为 $0.05$），用正态近似求 $P(\\hat{p} \\le 0.45)$。保留 4 位小数。"
      },
      "answer": "0.1587",
      "accept": [
        "0.159",
        "0.1587",
        "15.87%"
      ],
      "explanation": {
        "en": "The standard deviation is $\\sqrt{\\frac{0.5 \\cdot 0.5}{100}} = 0.05$, so $z = \\frac{0.45 - 0.50}{0.05} = -1$. Then $P(\\hat{p} \\le 0.45) = P(Z \\le -1) \\approx 0.1587$. Both $np = 50$ and $n(1-p) = 50$ exceed 10, so the Normal approximation is valid here.",
        "zh": "标准差为 $\\sqrt{\\frac{0.5 \\cdot 0.5}{100}} = 0.05$，故 $z = \\frac{0.45 - 0.50}{0.05} = -1$。于是 $P(\\hat{p} \\le 0.45) = P(Z \\le -1) \\approx 0.1587$。由于 $np = 50$ 和 $n(1-p) = 50$ 均大于 10，此处正态近似是有效的。"
      }
    }
  ],
  "inference-proportions/confidence-intervals-for-proportions": [
    {
      "type": "mc",
      "question": {
        "en": "A polling firm reports a 95% confidence interval of $(0.42, 0.48)$ for the proportion of adults who support a new policy. Which is the best interpretation of this interval?",
        "zh": "一家民调机构报告某新政策支持者比例的 95% 置信区间为 $(0.42, 0.48)$。以下哪项是对该区间最恰当的解读？"
      },
      "choices": [
        "We are 95% confident that the true proportion of all adults who support the policy is between 0.42 and 0.48.",
        "95% of adults support the policy at a level between 0.42 and 0.48.",
        "95% of all possible sample proportions fall between 0.42 and 0.48.",
        "Exactly 95% of the adults sampled gave answers between 0.42 and 0.48."
      ],
      "answer": 0,
      "explanation": {
        "en": "A confidence interval is a statement about the population parameter: we are 95% confident the true proportion lies between 0.42 and 0.48. The distractor about \"95% of all possible sample proportions\" confuses the interval (about the parameter) with the sampling distribution; the interval does not describe individual people or the sample data.",
        "zh": "置信区间是关于总体参数的陈述：我们有 95% 的把握真实比例介于 0.42 与 0.48 之间。关于“95% 的所有可能样本比例”的干扰项把区间（关于参数）与抽样分布混淆了；区间并不描述个体或样本数据本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does the \"95%\" in a 95% confidence level actually describe?",
        "zh": "95% 置信水平中的“95%”究竟描述的是什么？"
      },
      "choices": [
        "The probability that the true proportion equals the sample proportion.",
        "If we repeated the sampling process many times and built an interval each time, about 95% of those intervals would capture the true proportion.",
        "The percentage of the sample that agrees with the population.",
        "The chance that a new sample gives the same interval."
      ],
      "answer": 1,
      "explanation": {
        "en": "The confidence level is a property of the method over many repetitions: about 95% of the intervals produced this way would contain the true parameter. It is NOT the probability that this one computed interval contains the parameter, nor a statement about the sample data.",
        "zh": "置信水平是方法在多次重复下的性质：用这种方法构造的区间中约有 95% 会包含真实参数。它不是这一个已算出的区间包含参数的概率，也不是关于样本数据的陈述。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which condition specifically justifies using a Normal model (and $z^*$) for a one-sample confidence interval for a proportion?",
        "zh": "在为比例构造单样本置信区间时，哪个条件专门用于说明可以使用正态模型（以及 $z^*$）？"
      },
      "choices": [
        "The sample was chosen randomly.",
        "The sample is less than 10% of the population.",
        "Both $n\\hat{p} \\ge 10$ and $n(1-\\hat{p}) \\ge 10$ (the Large Counts condition).",
        "The population is Normally distributed."
      ],
      "answer": 2,
      "explanation": {
        "en": "The Large Counts condition $n\\hat{p} \\ge 10$ and $n(1-\\hat{p}) \\ge 10$ ensures the sampling distribution of $\\hat{p}$ is approximately Normal, justifying the $z^*$ interval. Randomness supports unbiased estimation and the 10% condition supports independence, but neither one is what makes the Normal model appropriate. A proportion is categorical, so \"population Normally distributed\" is irrelevant.",
        "zh": "大计数条件 $n\\hat{p} \\ge 10$ 且 $n(1-\\hat{p}) \\ge 10$ 保证 $\\hat{p}$ 的抽样分布近似正态，从而可用 $z^*$ 区间。随机性保证无偏估计，10% 条件保证独立性，但它们都不是使正态模型成立的依据。比例是分类数据，因此“总体服从正态分布”与此无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The margin of error for a one-sample $z$-interval for a proportion is given by which expression?",
        "zh": "为比例构造单样本 $z$ 区间时，误差幅度（margin of error）由下列哪个表达式给出？"
      },
      "choices": [
        "$\\hat{p} \\pm z^*$",
        "$z^* \\cdot \\hat{p}(1-\\hat{p})$",
        "$\\dfrac{\\hat{p}(1-\\hat{p})}{n}$",
        "$z^*\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The margin of error is the critical value times the standard error: $z^*\\sqrt{\\hat{p}(1-\\hat{p})/n}$. It has two components — the critical value $z^*$ (set by the confidence level) and the standard error (set by $\\hat{p}$ and $n$). Forgetting the square root, as in $\\hat{p}(1-\\hat{p})/n$, gives the variance of $\\hat{p}$, not the margin of error.",
        "zh": "误差幅度等于临界值乘以标准误：$z^*\\sqrt{\\hat{p}(1-\\hat{p})/n}$。它有两个组成部分——临界值 $z^*$（由置信水平决定）与标准误（由 $\\hat{p}$ 和 $n$ 决定）。像 $\\hat{p}(1-\\hat{p})/n$ 那样漏掉根号，得到的是 $\\hat{p}$ 的方差，而不是误差幅度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Holding the sample fixed, a researcher recomputes the interval using a 99% confidence level instead of 90%. What happens to the interval?",
        "zh": "在样本不变的情况下，研究者把置信水平从 90% 改为 99% 重新计算区间。区间会发生什么变化？"
      },
      "choices": [
        "It becomes wider.",
        "It becomes narrower.",
        "Its width is unchanged.",
        "It shifts to the right but keeps the same width."
      ],
      "answer": 0,
      "explanation": {
        "en": "A higher confidence level requires a larger critical value $z^*$ ($1.645 \\to 2.576$), which increases the margin of error and widens the interval. Greater confidence is bought with less precision. The center $\\hat{p}$ does not move, so the interval does not merely shift.",
        "zh": "更高的置信水平需要更大的临界值 $z^*$（$1.645 \\to 2.576$），这会增大误差幅度并使区间变宽。更高的把握是以更低的精度为代价的。中心 $\\hat{p}$ 不变，因此区间不是简单地平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At a fixed confidence level, if the sample size $n$ is increased (with $\\hat{p}$ roughly unchanged), the margin of error will:",
        "zh": "在置信水平固定的情况下，若样本量 $n$ 增大（$\\hat{p}$ 大致不变），误差幅度将会："
      },
      "choices": [
        "increase in proportion to $n$.",
        "decrease, roughly in proportion to $1/\\sqrt{n}$.",
        "stay exactly the same.",
        "decrease in proportion to $1/n$."
      ],
      "answer": 1,
      "explanation": {
        "en": "The margin of error contains $\\sqrt{\\hat{p}(1-\\hat{p})/n}$, so it shrinks like $1/\\sqrt{n}$. Quadrupling $n$ only halves the margin of error, not quarters it — a common mistake is to assume the margin of error falls in proportion to $1/n$.",
        "zh": "误差幅度包含 $\\sqrt{\\hat{p}(1-\\hat{p})/n}$，因此它按 $1/\\sqrt{n}$ 的方式缩小。把 $n$ 变为四倍只能使误差幅度减半，而不是变为四分之一——常见错误是以为误差幅度按 $1/n$ 下降。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why do we check that the sample is no more than 10% of the population when building a proportion interval?",
        "zh": "在为比例构造区间时，为什么要检查样本量不超过总体的 10%？"
      },
      "choices": [
        "To guarantee the sampling distribution of $\\hat{p}$ is Normal.",
        "To make sure $\\hat{p}$ is an unbiased estimate.",
        "So that sampling without replacement keeps the observations approximately independent, validating the standard error formula.",
        "To ensure the confidence level is at least 90%."
      ],
      "answer": 2,
      "explanation": {
        "en": "When we sample without replacement, observations are not perfectly independent, but if the sample is under 10% of the population the dependence is negligible and the standard error formula $\\sqrt{\\hat{p}(1-\\hat{p})/n}$ remains valid. Normality comes from the Large Counts condition, not the 10% condition — that is the tempting mix-up.",
        "zh": "无放回抽样时观测并非完全独立，但若样本量小于总体的 10%，这种相关性可忽略不计，标准误公式 $\\sqrt{\\hat{p}(1-\\hat{p})/n}$ 仍然有效。正态性来自大计数条件，而非 10% 条件——这正是容易混淆之处。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 95% confidence interval for the proportion of students who bike to school is $(0.30, 0.40)$. Which statement is a CORRECT interpretation?",
        "zh": "骑车上学学生比例的 95% 置信区间为 $(0.30, 0.40)$。以下哪项是正确的解读？"
      },
      "choices": [
        "95% of the sample proportions from this study are between 0.30 and 0.40.",
        "There is a 95% chance that a randomly chosen student bikes at a rate between 0.30 and 0.40.",
        "95% of all possible population proportions lie inside this interval.",
        "We are 95% confident that the true proportion of all students who bike to school is between 0.30 and 0.40."
      ],
      "answer": 3,
      "explanation": {
        "en": "A confidence interval estimates the single fixed population proportion, so the correct reading is \"95% confident the true proportion is between 0.30 and 0.40.\" The other options wrongly attach the interval to individual students, to sample proportions, or treat the parameter as if it were random with many possible values.",
        "zh": "置信区间估计的是那个唯一且固定的总体比例，因此正确解读是“有 95% 的把握真实比例介于 0.30 与 0.40 之间”。其他选项错误地把区间套在个别学生、样本比例上，或把参数当作有多种可能取值的随机量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a random sample of 400 shoppers, $\\hat{p} = 0.40$ used a store coupon. What is the margin of error for a 95% confidence interval? (Use $z^* = 1.96$.)",
        "zh": "在 400 名顾客的随机样本中，$\\hat{p} = 0.40$ 使用了商店优惠券。95% 置信区间的误差幅度是多少？（取 $z^* = 1.96$。）"
      },
      "choices": [
        "$0.048$",
        "$0.024$",
        "$0.096$",
        "$0.020$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Standard error $= \\sqrt{(0.40)(0.60)/400} = \\sqrt{0.0006} = 0.02449$. Margin of error $= 1.96 \\times 0.02449 \\approx 0.048$. Answering $0.024$ reports the standard error alone and forgets to multiply by the critical value $z^*$.",
        "zh": "标准误 $= \\sqrt{(0.40)(0.60)/400} = \\sqrt{0.0006} = 0.02449$。误差幅度 $= 1.96 \\times 0.02449 \\approx 0.048$。答 $0.024$ 只报告了标准误，忘记乘以临界值 $z^*$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A student says: \"A 95% confidence interval of $(0.42, 0.48)$ means there is a 95% probability that the true proportion is between 0.42 and 0.48.\" Why is this technically incorrect in the AP framework?",
        "zh": "一名学生说：“95% 的置信区间 $(0.42, 0.48)$ 意味着真实比例有 95% 的概率介于 0.42 与 0.48 之间。”在 AP 的框架下，为什么这在严格意义上是错误的？"
      },
      "choices": [
        "The interval should have been built with a $t^*$ value instead of $z^*$.",
        "The true proportion is a fixed number, so this specific interval either contains it or does not; the 95% refers to the long-run capture rate of the method, not to this one interval.",
        "The confidence level was actually 90%, not 95%.",
        "Probability statements can never be made about proportions."
      ],
      "answer": 1,
      "explanation": {
        "en": "The parameter is a fixed (though unknown) constant, so after the interval is computed it already does or does not contain the parameter — there is no probability left for this particular interval. The 95% describes how often the method succeeds over many repeated samples. Proportions do use $z^*$, so the $t^*$ option is a distractor.",
        "zh": "参数是一个固定（尽管未知）的常数，因此区间一旦算出，它要么包含参数要么不包含——对这一个具体区间而言不再有概率可言。95% 描述的是该方法在多次重复抽样中成功的频率。比例确实使用 $z^*$，故 $t^*$ 选项为干扰项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the critical value $z^*$ used for a 90% confidence interval?",
        "zh": "构造 90% 置信区间时使用的临界值 $z^*$ 是多少？"
      },
      "choices": [
        "$1.28$",
        "$1.96$",
        "$1.645$",
        "$2.576$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For 90% confidence, 5% is left in each tail, and the $z$-value with 0.95 area to its left is $1.645$. The value $1.96$ corresponds to 95% confidence and $2.576$ to 99% — mixing these up is a frequent source of wrong margins of error.",
        "zh": "对于 90% 置信度，每侧尾部各留 5%，左侧累积面积为 0.95 对应的 $z$ 值为 $1.645$。$1.96$ 对应 95% 置信度，$2.576$ 对应 99%——混淆这些值是误差幅度算错的常见原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A survey currently has a margin of error of 0.06. To cut the margin of error in half to 0.03 (same confidence level and same $\\hat{p}$), the sample size must be:",
        "zh": "一项调查目前的误差幅度为 0.06。若要在置信水平和 $\\hat{p}$ 不变的情况下把误差幅度减半到 0.03，样本量必须："
      },
      "choices": [
        "doubled.",
        "kept the same.",
        "multiplied by $\\sqrt{2}$.",
        "multiplied by 4."
      ],
      "answer": 3,
      "explanation": {
        "en": "Because the margin of error scales like $1/\\sqrt{n}$, halving it requires $\\sqrt{n}$ to double, so $n$ must be multiplied by $2^2 = 4$. Simply doubling $n$ only reduces the margin of error by a factor of $\\sqrt{2} \\approx 1.41$, not by half.",
        "zh": "由于误差幅度按 $1/\\sqrt{n}$ 变化，要将其减半就需要 $\\sqrt{n}$ 翻倍，因此 $n$ 必须乘以 $2^2 = 4$。仅仅把 $n$ 翻倍只能使误差幅度缩小约 $\\sqrt{2} \\approx 1.41$ 倍，而非减半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a random sample of 200 registered voters, 130 said they support a bond measure. Give the sample proportion $\\hat{p}$ as a decimal to 3 decimal places.",
        "zh": "在 200 名登记选民的随机样本中，有 130 人表示支持一项债券议案。请以小数形式给出样本比例 $\\hat{p}$，保留 3 位小数。"
      },
      "answer": "0.650",
      "accept": [
        "0.65",
        ".65"
      ],
      "explanation": {
        "en": "The point estimate is $\\hat{p} = 130/200 = 0.650$. This is the center of the confidence interval; it is the single best estimate of the population proportion before adding and subtracting the margin of error.",
        "zh": "点估计为 $\\hat{p} = 130/200 = 0.650$。它是置信区间的中心，是在加减误差幅度之前对总体比例的最佳单一估计。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $\\hat{p} = 0.65$ from a sample of $n = 200$, compute the standard error of $\\hat{p}$. Round to 3 decimal places.",
        "zh": "利用来自 $n = 200$ 样本的 $\\hat{p} = 0.65$，计算 $\\hat{p}$ 的标准误。保留 3 位小数。"
      },
      "answer": "0.034",
      "accept": [
        "0.0337",
        "0.03373"
      ],
      "explanation": {
        "en": "Standard error $= \\sqrt{\\hat{p}(1-\\hat{p})/n} = \\sqrt{(0.65)(0.35)/200} = \\sqrt{0.00113750} = 0.0337$, which rounds to 0.034. This is the \"typical distance\" between $\\hat{p}$ and the true proportion; it is multiplied by $z^*$ to get the margin of error.",
        "zh": "标准误 $= \\sqrt{\\hat{p}(1-\\hat{p})/n} = \\sqrt{(0.65)(0.35)/200} = \\sqrt{0.00113750} = 0.0337$，四舍五入为 0.034。它是 $\\hat{p}$ 与真实比例之间的“典型距离”，再乘以 $z^*$ 即得误差幅度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "With $\\hat{p} = 0.65$, $n = 200$, and $z^* = 1.96$, compute the margin of error for a 95% confidence interval. Round to 3 decimal places.",
        "zh": "在 $\\hat{p} = 0.65$、$n = 200$、$z^* = 1.96$ 的情况下，计算 95% 置信区间的误差幅度。保留 3 位小数。"
      },
      "answer": "0.066",
      "accept": [
        "0.0661",
        "0.0660"
      ],
      "explanation": {
        "en": "Margin of error $= z^*\\sqrt{\\hat{p}(1-\\hat{p})/n} = 1.96 \\times 0.0337 = 0.0661 \\approx 0.066$. Note both components appear: the critical value 1.96 and the standard error 0.0337. Reporting 0.034 would mean forgetting to multiply by $z^*$.",
        "zh": "误差幅度 $= z^*\\sqrt{\\hat{p}(1-\\hat{p})/n} = 1.96 \\times 0.0337 = 0.0661 \\approx 0.066$。注意两个组成部分都出现了：临界值 1.96 与标准误 0.0337。若报告 0.034，则是忘记乘以 $z^*$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 95% confidence interval for a proportion is centered at $\\hat{p} = 0.65$ with a margin of error of 0.066. Give the UPPER endpoint of the interval, to 3 decimal places.",
        "zh": "某比例的 95% 置信区间以 $\\hat{p} = 0.65$ 为中心，误差幅度为 0.066。请给出区间的上端点，保留 3 位小数。"
      },
      "answer": "0.716",
      "accept": [
        "0.7161",
        "0.716"
      ],
      "explanation": {
        "en": "The interval is $\\hat{p} \\pm \\text{ME} = 0.65 \\pm 0.066$, giving $(0.584, 0.716)$. The upper endpoint is $0.65 + 0.066 = 0.716$. The margin of error is added to and subtracted from the point estimate, never from the endpoints of some other interval.",
        "zh": "区间为 $\\hat{p} \\pm \\text{ME} = 0.65 \\pm 0.066$，即 $(0.584, 0.716)$。上端点为 $0.65 + 0.066 = 0.716$。误差幅度是从点估计上加减得到的，而不是从别的区间端点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A researcher wants a 95% confidence interval for a proportion with margin of error no more than 0.03, and has no prior estimate of $p$. Using the conservative value $p = 0.5$ and $z^* = 1.96$, find the minimum required sample size (a whole number).",
        "zh": "一名研究者希望构造某比例的 95% 置信区间，误差幅度不超过 0.03，且对 $p$ 没有先验估计。取保守值 $p = 0.5$、$z^* = 1.96$，求所需的最小样本量（整数）。"
      },
      "answer": "1068",
      "accept": [
        "1067"
      ],
      "explanation": {
        "en": "Solve $z^*\\sqrt{p(1-p)/n} \\le 0.03$: $n \\ge (1.96/0.03)^2 (0.5)(0.5) = (65.333)^2(0.25) = 1067.1$. Always round UP to guarantee the margin of error is met, giving $n = 1068$. Using $p = 0.5$ maximizes $p(1-p)$, so it is the safe planning value when no estimate is available.",
        "zh": "解 $z^*\\sqrt{p(1-p)/n} \\le 0.03$：$n \\ge (1.96/0.03)^2 (0.5)(0.5) = (65.333)^2(0.25) = 1067.1$。为确保满足误差幅度要求，总是向上取整，得到 $n = 1068$。取 $p = 0.5$ 使 $p(1-p)$ 最大，因此在没有估计时它是最保险的规划值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A prior study suggests $p \\approx 0.3$. For a 95% confidence interval ($z^* = 1.96$) with margin of error at most 0.04, find the minimum required sample size (a whole number).",
        "zh": "一项先前研究表明 $p \\approx 0.3$。对于误差幅度不超过 0.04 的 95% 置信区间（$z^* = 1.96$），求所需的最小样本量（整数）。"
      },
      "answer": "505",
      "accept": [
        "504"
      ],
      "explanation": {
        "en": "Using the planning value $p = 0.3$: $n \\ge (1.96/0.04)^2 (0.3)(0.7) = (49)^2(0.21) = 2401 \\times 0.21 = 504.21$. Round up to $n = 505$. Because $p(1-p) = 0.21 < 0.25$, using the prior estimate requires a smaller sample than the conservative $p = 0.5$ approach.",
        "zh": "采用规划值 $p = 0.3$：$n \\ge (1.96/0.04)^2 (0.3)(0.7) = (49)^2(0.21) = 2401 \\times 0.21 = 504.21$。向上取整得 $n = 505$。由于 $p(1-p) = 0.21 < 0.25$，使用先验估计所需的样本量比保守的 $p = 0.5$ 方法更小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the critical value $z^*$ for a 99% confidence interval? Give the value to 3 decimal places.",
        "zh": "99% 置信区间的临界值 $z^*$ 是多少？请保留 3 位小数。"
      },
      "answer": "2.576",
      "accept": [
        "2.58",
        "2.575"
      ],
      "explanation": {
        "en": "For 99% confidence, 0.5% remains in each tail, so we need the $z$-value with 0.995 area to its left, which is $2.576$. Contrast with $1.96$ (95%) and $1.645$ (90%): higher confidence pushes $z^*$ further out, widening the interval.",
        "zh": "对于 99% 置信度，每侧尾部各留 0.5%，因此需要左侧累积面积为 0.995 的 $z$ 值，即 $2.576$。与 $1.96$（95%）和 $1.645$（90%）相比：置信度越高，$z^*$ 越大，区间越宽。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 95% confidence interval for a proportion is reported as $(0.58, 0.66)$. Compute the margin of error of this interval, as a decimal.",
        "zh": "某比例的 95% 置信区间报告为 $(0.58, 0.66)$。请以小数形式计算该区间的误差幅度。"
      },
      "answer": "0.04",
      "accept": [
        "0.040",
        ".04"
      ],
      "explanation": {
        "en": "The margin of error is half the width: $(0.66 - 0.58)/2 = 0.08/2 = 0.04$. Equivalently, the interval is $0.62 \\pm 0.04$, so the point estimate is the midpoint 0.62 and the margin of error is the distance from center to either endpoint.",
        "zh": "误差幅度是区间宽度的一半：$(0.66 - 0.58)/2 = 0.08/2 = 0.04$。等价地，区间为 $0.62 \\pm 0.04$，因此点估计是中点 0.62，误差幅度是中心到任一端点的距离。"
      }
    }
  ],
  "inference-proportions/significance-tests-for-proportions": [
    {
      "type": "mc",
      "question": {
        "en": "A company claims that more than half of its customers would recommend its product. Let $p$ be the true proportion of all customers who would recommend it. Which is the correct alternative hypothesis?",
        "zh": "一家公司声称超过一半的顾客会推荐其产品。设 $p$ 为所有顾客中会推荐的真实比例。下列哪个是正确的备择假设？"
      },
      "choices": [
        "$H_a: p > 0.5$",
        "$H_a: \\hat{p} > 0.5$",
        "$H_a: p \\neq 0.5$",
        "$H_a: \\mu > 0.5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Hypotheses are always statements about the population parameter $p$, not about the sample statistic $\\hat{p}$, so choices using $\\hat{p}$ or $\\mu$ are wrong. \"More than half\" means a one-sided alternative $p > 0.5$, not $\\neq$.",
        "zh": "假设永远是关于总体参数 $p$ 的陈述，而不是关于样本统计量 $\\hat{p}$，因此用 $\\hat{p}$ 或 $\\mu$ 的选项都错。\"超过一半\"对应单侧备择 $p > 0.5$，而不是 $\\neq$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a properly stated null hypothesis for a significance test about a proportion?",
        "zh": "下列哪一个是关于比例的显著性检验中正确陈述的原假设？"
      },
      "choices": [
        "$H_0: \\hat{p} = 0.3$",
        "$H_0: p = 0.3$",
        "$H_0: p < 0.3$",
        "$H_0: p \\neq 0.3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The null hypothesis states a single value of the population parameter using equality: $H_0: p = 0.3$. It cannot be about the statistic $\\hat{p}$, and it must be an equality, not an inequality (inequalities belong to the alternative).",
        "zh": "原假设用等号给出总体参数的一个具体值：$H_0: p = 0.3$。它不能针对统计量 $\\hat{p}$，而且必须是等式而非不等式（不等式属于备择假设）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A one-sample z-test for a proportion yields a p-value of $0.03$. Which is the correct interpretation of this p-value?",
        "zh": "一个关于比例的单样本 z 检验得到 P 值为 $0.03$。下列哪项是对该 P 值的正确解释？"
      },
      "choices": [
        "The probability that $H_0$ is true is $0.03$.",
        "The probability that $H_a$ is true is $0.97$.",
        "If $H_0$ were true, the probability of getting a sample result at least as extreme as the one observed is $0.03$.",
        "The probability of making a Type I error on this test is $0.03$."
      ],
      "answer": 2,
      "explanation": {
        "en": "A p-value is computed assuming $H_0$ is true: it is the probability of a sample result as or more extreme than observed, given $H_0$. It is NOT the probability that $H_0$ (or $H_a$) is true, and it is not the Type I error rate (that is $\\alpha$, chosen in advance).",
        "zh": "P 值是在假定 $H_0$ 为真的前提下计算的：即在 $H_0$ 成立时，得到与观测值一样极端或更极端结果的概率。它不是 $H_0$（或 $H_a$）为真的概率，也不是第一类错误率（那是事先选定的 $\\alpha$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A test of $H_0: p = 0.4$ versus $H_a: p \\neq 0.4$ gives a p-value of $0.08$. Using $\\alpha = 0.05$, what is the correct conclusion?",
        "zh": "对 $H_0: p = 0.4$ 与 $H_a: p \\neq 0.4$ 的检验得到 P 值为 $0.08$。取 $\\alpha = 0.05$，正确结论是什么？"
      },
      "choices": [
        "Reject $H_0$; there is strong evidence for $H_a$.",
        "Fail to reject $H_0$; there is not enough evidence for $H_a$.",
        "Accept $H_0$; we have proven $p = 0.4$.",
        "Reject $H_0$; we have proven $p = 0.4$."
      ],
      "answer": 1,
      "explanation": {
        "en": "Since the p-value $0.08 > \\alpha = 0.05$, we fail to reject $H_0$. We never \"accept\" or \"prove\" $H_0$; failing to reject only means the data do not provide convincing evidence for $H_a$.",
        "zh": "由于 P 值 $0.08 > \\alpha = 0.05$，我们未能拒绝 $H_0$。我们绝不\"接受\"或\"证明\" $H_0$；未能拒绝只意味着数据没有为 $H_a$ 提供令人信服的证据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To carry out a one-sample z-test for $H_0: p = 0.2$, which is the correct form of the Large Counts (normality) condition?",
        "zh": "为对 $H_0: p = 0.2$ 进行单样本 z 检验，下列哪项是\"大计数\"（正态性）条件的正确形式？"
      },
      "choices": [
        "$n \\geq 30$",
        "The sample size is at least 10% of the population.",
        "$n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$",
        "$np_0 \\geq 10$ and $n(1-p_0) \\geq 10$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A significance test assumes $H_0$ is true, so the Large Counts condition uses the hypothesized value $p_0$: $np_0 \\geq 10$ and $n(1-p_0) \\geq 10$. Using $\\hat{p}$ is the version for a confidence interval, not a test.",
        "zh": "显著性检验假定 $H_0$ 为真，因此大计数条件使用假设值 $p_0$：$np_0 \\geq 10$ 且 $n(1-p_0) \\geq 10$。使用 $\\hat{p}$ 的版本是针对置信区间的，而不是检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the test statistic $z = \\dfrac{\\hat{p} - p_0}{\\text{SD}}$ for a one-sample z-test for a proportion, what is the correct standard deviation (SD) in the denominator?",
        "zh": "在关于比例的单样本 z 检验的检验统计量 $z = \\dfrac{\\hat{p} - p_0}{\\text{SD}}$ 中，分母上正确的标准差（SD）是什么？"
      },
      "choices": [
        "$\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}$",
        "$\\dfrac{s}{\\sqrt{n}}$",
        "$\\sqrt{\\dfrac{p_0(1-p_0)}{n}}$",
        "$\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} + \\sqrt{\\dfrac{p_0(1-p_0)}{n}}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Under $H_0$ we assume $p = p_0$, so the standard deviation of the sampling distribution of $\\hat{p}$ uses $p_0$: $\\sqrt{p_0(1-p_0)/n}$. Using $\\hat{p}$ is the confidence-interval standard error, and $s/\\sqrt{n}$ is for means, not proportions.",
        "zh": "在 $H_0$ 下我们假定 $p = p_0$，因此 $\\hat{p}$ 抽样分布的标准差使用 $p_0$：$\\sqrt{p_0(1-p_0)/n}$。使用 $\\hat{p}$ 是置信区间的标准误，而 $s/\\sqrt{n}$ 是用于均值而非比例的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly describes a Type I error in a significance test?",
        "zh": "下列哪项正确描述了显著性检验中的第一类错误？"
      },
      "choices": [
        "Rejecting $H_0$ when $H_0$ is actually true.",
        "Failing to reject $H_0$ when $H_a$ is actually true.",
        "Rejecting $H_a$ when $H_a$ is actually true.",
        "Accepting $H_0$ when $H_0$ is actually true."
      ],
      "answer": 0,
      "explanation": {
        "en": "A Type I error is rejecting a true null hypothesis; its probability is $\\alpha$. Failing to reject $H_0$ when $H_a$ is true (choice B) is a Type II error. Making a correct decision is not an error at all.",
        "zh": "第一类错误是拒绝了一个为真的原假设，其概率为 $\\alpha$。当 $H_a$ 为真时未能拒绝 $H_0$（选项 B）是第二类错误。做出正确决策根本不是错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "All else equal, increasing the sample size $n$ in a significance test for a proportion will:",
        "zh": "在其他条件不变的情况下，增大关于比例的显著性检验中的样本量 $n$ 将会："
      },
      "choices": [
        "Decrease the power of the test.",
        "Increase the power of the test (and lower the probability of a Type II error).",
        "Have no effect on the power of the test.",
        "Increase the probability of a Type I error."
      ],
      "answer": 1,
      "explanation": {
        "en": "Larger $n$ reduces the variability of $\\hat{p}$, making it easier to detect a true difference, so power increases and the Type II error probability $\\beta$ decreases. The Type I error rate is fixed at $\\alpha$ and is not changed by sample size.",
        "zh": "更大的 $n$ 减小了 $\\hat{p}$ 的变异性，使真实差异更易被检出，因此功效（检验力）增大，第二类错误概率 $\\beta$ 减小。第一类错误率固定为 $\\alpha$，不受样本量影响。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A researcher wants to know only whether a coin's proportion of heads differs from $0.5$ in either direction. Which alternative hypothesis and p-value calculation are appropriate?",
        "zh": "一位研究者只想知道一枚硬币正面朝上的比例是否在任一方向上不同于 $0.5$。哪种备择假设和 P 值计算方式是合适的？"
      },
      "choices": [
        "$H_a: p \\neq 0.5$; the p-value is two-tailed (double the one-tail area).",
        "$H_a: p > 0.5$; the p-value is one-tailed.",
        "$H_a: p \\neq 0.5$; the p-value is one-tailed.",
        "$H_a: p < 0.5$; the p-value is two-tailed."
      ],
      "answer": 0,
      "explanation": {
        "en": "Caring about a difference in either direction calls for a two-sided alternative $H_a: p \\neq 0.5$, whose p-value is the area in both tails beyond $\\pm|z|$ (double the one-tail area). Pairing $\\neq$ with a one-tailed area, or using a one-sided $H_a$, is inconsistent.",
        "zh": "关心任一方向上的差异需要双侧备择 $H_a: p \\neq 0.5$，其 P 值是 $\\pm|z|$ 之外两侧尾部的面积（单尾面积的两倍）。把 $\\neq$ 与单尾面积搭配，或使用单侧 $H_a$，都是不一致的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 95% confidence interval for a proportion $p$ is $(0.52, 0.60)$. Consider testing $H_0: p = 0.50$ versus $H_a: p \\neq 0.50$ at $\\alpha = 0.05$. What can you conclude?",
        "zh": "比例 $p$ 的一个 95% 置信区间为 $(0.52, 0.60)$。在 $\\alpha = 0.05$ 下考虑检验 $H_0: p = 0.50$ 对 $H_a: p \\neq 0.50$。你能得出什么结论？"
      },
      "choices": [
        "Fail to reject $H_0$ because $0.50$ is inside the interval.",
        "Accept $H_0$ because the interval is above $0.50$.",
        "Reject $H_0$ because $0.50$ is not inside the interval.",
        "Nothing can be concluded from a confidence interval."
      ],
      "answer": 2,
      "explanation": {
        "en": "A 95% confidence interval corresponds to a two-sided test at $\\alpha = 0.05$: values outside the interval would be rejected. Since $0.50$ lies outside $(0.52, 0.60)$, we reject $H_0$. If $0.50$ had been inside, we would fail to reject.",
        "zh": "95% 置信区间对应于 $\\alpha = 0.05$ 的双侧检验：落在区间外的值会被拒绝。由于 $0.50$ 在 $(0.52, 0.60)$ 之外，我们拒绝 $H_0$。若 $0.50$ 落在区间内，则未能拒绝。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about the relationship between a confidence interval and a two-sided z-test for a proportion is most accurate?",
        "zh": "关于置信区间与关于比例的双侧 z 检验之间关系，下列哪项陈述最准确？"
      },
      "choices": [
        "A two-sided z-test and a confidence interval always give identical decisions because they use the same standard error.",
        "The confidence interval uses $p_0$ and the test uses $\\hat{p}$ in their standard errors.",
        "Confidence intervals cannot be related to significance tests.",
        "The confidence interval uses $\\hat{p}$ in its standard error while the test uses $p_0$, so they can occasionally disagree near the boundary."
      ],
      "answer": 3,
      "explanation": {
        "en": "The two-sided test standardizes with $\\sqrt{p_0(1-p_0)/n}$, while the confidence interval uses $\\sqrt{\\hat{p}(1-\\hat{p})/n}$. Because the standard errors differ, the two methods usually agree but can occasionally give different decisions for values right at the boundary.",
        "zh": "双侧检验用 $\\sqrt{p_0(1-p_0)/n}$ 标准化，而置信区间用 $\\sqrt{\\hat{p}(1-\\hat{p})/n}$。由于标准误不同，两种方法通常一致，但对恰好处于边界上的值偶尔会给出不同的决策。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A significance test is run at significance level $\\alpha = 0.05$. What does $\\alpha$ represent?",
        "zh": "一项显著性检验在显著性水平 $\\alpha = 0.05$ 下进行。$\\alpha$ 代表什么？"
      },
      "choices": [
        "The probability that the null hypothesis is false.",
        "The probability of observing the sample data.",
        "The power of the test.",
        "The probability of a Type I error (rejecting a true $H_0$) that we are willing to tolerate."
      ],
      "answer": 3,
      "explanation": {
        "en": "The significance level $\\alpha$ is the pre-chosen threshold for the p-value and equals the probability of a Type I error—rejecting $H_0$ when it is actually true. It is not the probability that a hypothesis is true, nor the power (which is $1 - \\beta$).",
        "zh": "显著性水平 $\\alpha$ 是事先选定的 P 值阈值，等于第一类错误的概率——即在 $H_0$ 实际为真时却拒绝它。它既不是某个假设为真的概率，也不是功效（功效为 $1 - \\beta$）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a test of $H_0: p = 0.25$ with sample size $n = 200$, compute the standard deviation of the sampling distribution of $\\hat{p}$ used in the test statistic. Use $p_0$ and round to 4 decimal places.",
        "zh": "对 $H_0: p = 0.25$、样本量 $n = 200$ 的检验，计算检验统计量中所用 $\\hat{p}$ 抽样分布的标准差。使用 $p_0$，结果保留 4 位小数。"
      },
      "answer": "0.0306",
      "accept": [
        "0.031",
        "0.0306186"
      ],
      "explanation": {
        "en": "Under $H_0$ we use $p_0 = 0.25$: $\\sqrt{\\dfrac{p_0(1-p_0)}{n}} = \\sqrt{\\dfrac{0.25 \\cdot 0.75}{200}} = \\sqrt{0.0009375} \\approx 0.0306$. Using $\\hat{p}$ instead of $p_0$ would be the confidence-interval standard error, which is incorrect for a test.",
        "zh": "在 $H_0$ 下使用 $p_0 = 0.25$：$\\sqrt{\\dfrac{p_0(1-p_0)}{n}} = \\sqrt{\\dfrac{0.25 \\cdot 0.75}{200}} = \\sqrt{0.0009375} \\approx 0.0306$。用 $\\hat{p}$ 代替 $p_0$ 得到的是置信区间的标准误，对检验而言是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample of $n = 100$ gives $\\hat{p} = 0.48$. For a test of $H_0: p = 0.40$, compute the test statistic $z$. Round to 2 decimal places.",
        "zh": "一个 $n = 100$ 的样本给出 $\\hat{p} = 0.48$。对 $H_0: p = 0.40$ 的检验，计算检验统计量 $z$。结果保留 2 位小数。"
      },
      "answer": "1.63",
      "accept": [
        "1.633",
        "1.63299"
      ],
      "explanation": {
        "en": "Standardize using $p_0 = 0.40$: $z = \\dfrac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}} = \\dfrac{0.48 - 0.40}{\\sqrt{0.40 \\cdot 0.60/100}} = \\dfrac{0.08}{0.049} \\approx 1.63$.",
        "zh": "用 $p_0 = 0.40$ 标准化：$z = \\dfrac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}} = \\dfrac{0.48 - 0.40}{\\sqrt{0.40 \\cdot 0.60/100}} = \\dfrac{0.08}{0.049} \\approx 1.63$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a two-sided test ($H_a: p \\neq p_0$), the test statistic is $z = 2.00$. Find the p-value. Round to 4 decimal places.",
        "zh": "对一个双侧检验（$H_a: p \\neq p_0$），检验统计量为 $z = 2.00$。求 P 值。结果保留 4 位小数。"
      },
      "answer": "0.0456",
      "accept": [
        "0.046",
        "0.0455",
        "0.0455002"
      ],
      "explanation": {
        "en": "For a two-sided test, the p-value is the area in both tails: $2 \\cdot P(Z > 2.00) = 2(0.0228) = 0.0456$. Reporting only the one-tail area $0.0228$ is a common mistake for two-sided alternatives.",
        "zh": "对双侧检验，P 值是两侧尾部的面积之和：$2 \\cdot P(Z > 2.00) = 2(0.0228) = 0.0456$。只报告单尾面积 $0.0228$ 是双侧备择中常见的错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For an upper-tailed one-sided test ($H_a: p > p_0$), the test statistic is $z = 2.33$. Find the p-value. Round to 4 decimal places.",
        "zh": "对一个上侧单侧检验（$H_a: p > p_0$），检验统计量为 $z = 2.33$。求 P 值。结果保留 4 位小数。"
      },
      "answer": "0.0099",
      "accept": [
        "0.01",
        "0.0099",
        "0.00990"
      ],
      "explanation": {
        "en": "For an upper-tailed alternative, the p-value is the single upper-tail area: $P(Z > 2.33) \\approx 0.0099$. There is no doubling for a one-sided test.",
        "zh": "对上侧备择，P 值是单个上尾面积：$P(Z > 2.33) \\approx 0.0099$。单侧检验不需要乘以 2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A test of $H_0: p = 0.10$ uses a sample of size $n = 80$. Compute $np_0$, the expected number of successes used to check the Large Counts condition. Give an integer.",
        "zh": "对 $H_0: p = 0.10$ 的检验使用了大小为 $n = 80$ 的样本。计算 $np_0$，即用于检查大计数条件的期望成功数。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "$np_0 = 80 \\cdot 0.10 = 8$. Since $8 < 10$, the Large Counts condition $np_0 \\geq 10$ is NOT satisfied, so the normal approximation may be unreliable here.",
        "zh": "$np_0 = 80 \\cdot 0.10 = 8$。由于 $8 < 10$，大计数条件 $np_0 \\geq 10$ 并不满足，因此这里的正态近似可能不可靠。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a significance test, the probability of a Type II error is $\\beta = 0.23$. What is the power of the test? Give a decimal.",
        "zh": "在一项显著性检验中，第二类错误的概率为 $\\beta = 0.23$。该检验的功效（检验力）是多少？请填一个小数。"
      },
      "answer": "0.77",
      "accept": [
        "0.770",
        "77%"
      ],
      "explanation": {
        "en": "Power is the probability of correctly rejecting a false $H_0$: power $= 1 - \\beta = 1 - 0.23 = 0.77$. Higher power means a better chance of detecting a true effect.",
        "zh": "功效是正确拒绝一个为假的 $H_0$ 的概率：功效 $= 1 - \\beta = 1 - 0.23 = 0.77$。功效越高，越有可能检出真实存在的效应。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a random sample of $180$ voters, $63$ support a ballot measure. Compute the sample proportion $\\hat{p}$ to be used in the test statistic. Round to 2 decimal places.",
        "zh": "在一个 $180$ 名选民的随机样本中，有 $63$ 人支持某项议案。计算用于检验统计量的样本比例 $\\hat{p}$。结果保留 2 位小数。"
      },
      "answer": "0.35",
      "accept": [
        "0.350",
        "35%"
      ],
      "explanation": {
        "en": "$\\hat{p} = \\dfrac{63}{180} = 0.35$. This sample proportion appears in the numerator $\\hat{p} - p_0$ of the test statistic; the hypothesized $p_0$ is used only in the standard deviation.",
        "zh": "$\\hat{p} = \\dfrac{63}{180} = 0.35$。这个样本比例出现在检验统计量的分子 $\\hat{p} - p_0$ 中；假设值 $p_0$ 只用于标准差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A test of $H_0: p = 0.30$ uses $n = 250$ with $90$ successes. Compute the test statistic $z$. Round to 2 decimal places.",
        "zh": "对 $H_0: p = 0.30$ 的检验使用 $n = 250$，其中有 $90$ 次成功。计算检验统计量 $z$。结果保留 2 位小数。"
      },
      "answer": "2.07",
      "accept": [
        "2.07",
        "2.070"
      ],
      "explanation": {
        "en": "First $\\hat{p} = 90/250 = 0.36$. Then $z = \\dfrac{0.36 - 0.30}{\\sqrt{0.30 \\cdot 0.70/250}} = \\dfrac{0.06}{\\sqrt{0.00084}} = \\dfrac{0.06}{0.02898} \\approx 2.07$. The standard deviation uses $p_0 = 0.30$, not $\\hat{p}$.",
        "zh": "先求 $\\hat{p} = 90/250 = 0.36$。再求 $z = \\dfrac{0.36 - 0.30}{\\sqrt{0.30 \\cdot 0.70/250}} = \\dfrac{0.06}{\\sqrt{0.00084}} = \\dfrac{0.06}{0.02898} \\approx 2.07$。标准差使用 $p_0 = 0.30$，而不是 $\\hat{p}$。"
      }
    }
  ],
  "inference-means/confidence-intervals-for-means": [
    {
      "type": "mc",
      "question": {
        "en": "When constructing a confidence interval for a population mean, why do we usually use the $t$-distribution instead of the standard normal ($z$) distribution?",
        "zh": "在为总体均值构造置信区间时，为什么我们通常使用 $t$ 分布而不是标准正态（$z$）分布？"
      },
      "choices": [
        "Because the sample size is always small",
        "Because the population is never normal",
        "Because the sample mean $\\bar{x}$ is a biased estimator",
        "Because the population standard deviation $\\sigma$ is unknown and must be estimated by the sample SD $s$"
      ],
      "answer": 3,
      "explanation": {
        "en": "We use $t$ because in practice $\\sigma$ is unknown and we substitute the sample SD $s$, which adds extra variability. The $t$-distribution accounts for that. Small sample size is a related concern but not the fundamental reason; $\\bar{x}$ is actually unbiased.",
        "zh": "使用 $t$ 是因为实际中 $\\sigma$ 未知，我们用样本标准差 $s$ 代替，这带来额外的变异性，$t$ 分布正是对此进行修正。小样本是相关问题但不是根本原因；$\\bar{x}$ 实际上是无偏的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A one-sample $t$-interval for a mean is based on a sample of size $n = 18$. What are the degrees of freedom?",
        "zh": "一个基于样本量 $n = 18$ 的单样本均值 $t$ 区间，其自由度是多少？"
      },
      "choices": [
        "$17$",
        "$18$",
        "$16$",
        "$19$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a one-sample $t$-interval the degrees of freedom are $n - 1 = 18 - 1 = 17$. Using $n$ itself is the classic error; the $-1$ comes from estimating $\\sigma$ with $s$.",
        "zh": "对于单样本 $t$ 区间，自由度为 $n - 1 = 18 - 1 = 17$。直接使用 $n$ 是典型错误；减 $1$ 来自用 $s$ 估计 $\\sigma$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the same confidence level, how does the critical value $t^*$ compare to the corresponding $z^*$?",
        "zh": "在相同的置信水平下，临界值 $t^*$ 与相应的 $z^*$ 相比如何？"
      },
      "choices": [
        "$t^*$ is always smaller than $z^*$",
        "$t^*$ exactly equals $z^*$",
        "The relationship depends on the sample mean",
        "$t^*$ is larger than $z^*$, and the gap shrinks as the degrees of freedom increase"
      ],
      "answer": 3,
      "explanation": {
        "en": "The $t$-distribution has heavier tails than the normal, so $t^* > z^*$ for a given confidence level; as df grow, $t$ approaches the normal and the gap shrinks. This is why a $t$-interval is wider than a $z$-interval with the same data.",
        "zh": "$t$ 分布的尾部比正态更厚，所以在给定置信水平下 $t^* > z^*$；随着自由度增大，$t$ 趋于正态，差距缩小。这就是为什么相同数据下 $t$ 区间比 $z$ 区间更宽。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As the degrees of freedom increase, the $t$-distribution...",
        "zh": "随着自由度增大，$t$ 分布……"
      },
      "choices": [
        "becomes more strongly skewed",
        "develops increasingly heavy tails",
        "approaches the standard normal distribution",
        "approaches a uniform distribution"
      ],
      "answer": 2,
      "explanation": {
        "en": "With more degrees of freedom, $s$ estimates $\\sigma$ more reliably, the tails thin out, and the $t$-distribution converges to the standard normal. The $t$-distribution is symmetric (not skewed) at every df.",
        "zh": "自由度越大，$s$ 对 $\\sigma$ 的估计越可靠，尾部变薄，$t$ 分布收敛于标准正态。$t$ 分布在任何自由度下都是对称的（不偏斜）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 95% confidence interval for a mean is $(12.4, 15.8)$. Which is the correct interpretation?",
        "zh": "某均值的 95% 置信区间为 $(12.4, 15.8)$。以下哪项解释是正确的？"
      },
      "choices": [
        "There is a 95% probability that the sample mean lies in $(12.4, 15.8)$",
        "95% of all individual data values fall between 12.4 and 15.8",
        "We are 95% confident that the true population mean $\\mu$ is between 12.4 and 15.8",
        "In 95% of samples the sample mean equals the population mean"
      ],
      "answer": 2,
      "explanation": {
        "en": "A confidence interval is a statement about the unknown parameter $\\mu$: we are 95% confident it lies in the interval. It is not about individual data values, and the sample mean is the center, not the object of the probability statement.",
        "zh": "置信区间是关于未知参数 $\\mu$ 的陈述：我们有 95% 的把握它落在区间内。它不是关于单个数据值的，样本均值是区间中心而不是概率陈述的对象。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does \"95% confidence\" mean in terms of the method used to build the interval?",
        "zh": "就构造区间的方法而言，\"95% 置信\"意味着什么？"
      },
      "choices": [
        "If we repeated the sampling many times, about 95% of the intervals produced would capture $\\mu$",
        "95% of the population lies inside this one interval",
        "There is a 95% chance the next sample mean falls in this interval",
        "This particular interval is correct 95% of the time"
      ],
      "answer": 0,
      "explanation": {
        "en": "Confidence refers to the long-run success rate of the procedure: across many repeated samples, about 95% of the constructed intervals contain $\\mu$. Any single interval either contains $\\mu$ or not, so \"95% of the time\" for one fixed interval is a misstatement.",
        "zh": "置信度指的是方法在长期中的成功率：在许多重复抽样中，约 95% 构造出的区间包含 $\\mu$。任何单个区间要么包含 $\\mu$ 要么不包含，所以对某个固定区间说\"95% 的时间\"是错误表述。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Holding the data and sample size fixed, increasing the confidence level from 90% to 99% will...",
        "zh": "在数据和样本量不变的情况下，将置信水平从 90% 提高到 99% 会……"
      },
      "choices": [
        "narrow the interval",
        "widen the interval",
        "have no effect on the width",
        "decrease the margin of error"
      ],
      "answer": 1,
      "explanation": {
        "en": "Higher confidence requires a larger critical value $t^*$, which increases the margin of error $t^* \\cdot s/\\sqrt{n}$ and widens the interval. Greater certainty comes at the cost of precision.",
        "zh": "更高的置信度需要更大的临界值 $t^*$，从而增大误差幅度 $t^* \\cdot s/\\sqrt{n}$ 并使区间变宽。更高的确定性以牺牲精度为代价。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Increasing the sample size (with $s$ and confidence level held fixed) will generally...",
        "zh": "增大样本量（保持 $s$ 和置信水平不变）通常会……"
      },
      "choices": [
        "widen the interval",
        "leave the margin of error unchanged",
        "increase the critical value $t^*$",
        "narrow the interval because the standard error $s/\\sqrt{n}$ decreases"
      ],
      "answer": 3,
      "explanation": {
        "en": "A larger $n$ shrinks the standard error $s/\\sqrt{n}$ (and slightly lowers $t^*$), so the margin of error and the interval width both decrease. More data yields a more precise estimate.",
        "zh": "更大的 $n$ 会缩小标准误 $s/\\sqrt{n}$（并略微降低 $t^*$），因此误差幅度和区间宽度都减小。更多数据带来更精确的估计。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A researcher measures each subject's reaction time before and after drinking coffee, using the same 30 people. Which interval is appropriate?",
        "zh": "研究者对同样的 30 个人测量喝咖啡前后的反应时间。应使用哪种区间？"
      },
      "choices": [
        "A one-sample $z$-interval",
        "A paired $t$-interval on the before$-$after differences",
        "A two-sample $t$-interval for a difference of means",
        "A one-proportion $z$-interval"
      ],
      "answer": 1,
      "explanation": {
        "en": "Each subject provides two linked measurements, so the data are paired. We compute each difference and build a one-sample $t$-interval on those differences. A two-sample interval would wrongly treat the before and after groups as independent.",
        "zh": "每个受试者提供两个相关联的测量，因此数据是配对的。我们计算每个差值并对这些差值构造单样本 $t$ 区间。两样本区间会错误地把前后两组当作相互独立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sample of size $n = 12$ will be used to build a $t$-interval for a mean. Which condition most needs to be checked?",
        "zh": "将用大小为 $n = 12$ 的样本构造均值的 $t$ 区间。最需要检验哪个条件？"
      },
      "choices": [
        "That the sample size is at least 30",
        "That $\\sigma$ is known",
        "That a graph of the data shows no strong skew or outliers (population roughly normal)",
        "That the data are categorical"
      ],
      "answer": 2,
      "explanation": {
        "en": "With a small $n$ the Central Limit Theorem does not guarantee approximate normality, so we must check that the sample shows no strong skew or outliers, supporting an approximately normal population. A $t$-interval never requires $\\sigma$ to be known, and it needs quantitative data.",
        "zh": "当 $n$ 较小时，中心极限定理不能保证近似正态，因此必须检验样本没有明显偏斜或离群值，以支持总体近似正态。$t$ 区间从不要求已知 $\\sigma$，且需要定量数据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When sampling without replacement, the 10% condition ($n \\le 0.10N$) is checked to ensure that...",
        "zh": "在无放回抽样时，检验 10% 条件（$n \\le 0.10N$）是为了确保……"
      },
      "choices": [
        "the sampling distribution of $\\bar{x}$ is exactly normal",
        "the observations are approximately independent",
        "the margin of error is small",
        "the confidence level is exactly 95%"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sampling without replacement makes observations slightly dependent; keeping the sample to at most 10% of the population makes that dependence negligible, so the standard error formula is valid. It has nothing to do with normality or the confidence level.",
        "zh": "无放回抽样使观测值略微相关；把样本控制在总体的 10% 以内可使这种相关性可忽略，从而标准误公式有效。它与正态性或置信水平无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which change would most reliably reduce the margin of error of a confidence interval for a mean?",
        "zh": "哪种改变能最可靠地减小均值置信区间的误差幅度？"
      },
      "choices": [
        "Increasing the sample size",
        "Increasing the confidence level",
        "Collecting a smaller sample",
        "Using the population size in the formula"
      ],
      "answer": 0,
      "explanation": {
        "en": "The margin of error is $t^* \\cdot s/\\sqrt{n}$; increasing $n$ shrinks $s/\\sqrt{n}$ and reduces the margin. Raising the confidence level increases $t^*$ and widens it, and a smaller sample makes it worse.",
        "zh": "误差幅度为 $t^* \\cdot s/\\sqrt{n}$；增大 $n$ 会缩小 $s/\\sqrt{n}$ 从而减小误差。提高置信水平会增大 $t^*$ 使其变宽，而更小的样本会使情况更糟。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the critical value $t^*$ for a 95% confidence interval based on a sample of size $n = 15$ (so df $= 14$). Round to 3 decimal places.",
        "zh": "求基于样本量 $n = 15$（即 df $= 14$）的 95% 置信区间的临界值 $t^*$。保留 3 位小数。"
      },
      "answer": "2.145",
      "accept": [
        "2.14",
        "2.15"
      ],
      "explanation": {
        "en": "With df $= n - 1 = 14$ and 95% confidence (0.025 in each tail), the $t$-table gives $t^* = 2.145$. Note this exceeds the corresponding $z^* = 1.960$.",
        "zh": "当 df $= n - 1 = 14$、置信度 95%（每侧尾部 0.025）时，$t$ 表给出 $t^* = 2.145$。注意它大于相应的 $z^* = 1.960$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample of $n = 16$ has sample SD $s = 8$. Using $t^* = 2.131$ for 95% confidence, compute the margin of error $t^* \\cdot s/\\sqrt{n}$. Round to 3 decimal places.",
        "zh": "样本量 $n = 16$，样本标准差 $s = 8$。使用 95% 置信度的 $t^* = 2.131$，计算误差幅度 $t^* \\cdot s/\\sqrt{n}$。保留 3 位小数。"
      },
      "answer": "4.262",
      "accept": [
        "4.26",
        "4.3"
      ],
      "explanation": {
        "en": "The standard error is $s/\\sqrt{n} = 8/\\sqrt{16} = 8/4 = 2$. Then the margin of error is $2.131 \\times 2 = 4.262$.",
        "zh": "标准误为 $s/\\sqrt{n} = 8/\\sqrt{16} = 8/4 = 2$。于是误差幅度为 $2.131 \\times 2 = 4.262$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Continuing the previous setup, the sample mean is $\\bar{x} = 50$ and the margin of error is $4.262$. Give the upper bound of the 95% confidence interval. Round to 3 decimal places.",
        "zh": "接上题，样本均值 $\\bar{x} = 50$，误差幅度为 $4.262$。给出该 95% 置信区间的上界。保留 3 位小数。"
      },
      "answer": "54.262",
      "accept": [
        "54.26",
        "54.3"
      ],
      "explanation": {
        "en": "The interval is $\\bar{x} \\pm \\text{ME} = 50 \\pm 4.262$, giving $(45.738, 54.262)$. The upper bound is $50 + 4.262 = 54.262$.",
        "zh": "区间为 $\\bar{x} \\pm \\text{ME} = 50 \\pm 4.262$，即 $(45.738, 54.262)$。上界为 $50 + 4.262 = 54.262$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A paired $t$-interval is built from 25 matched pairs. State the degrees of freedom.",
        "zh": "一个配对 $t$ 区间基于 25 对配对数据构造。请说出其自由度。"
      },
      "answer": "24",
      "accept": [],
      "explanation": {
        "en": "A paired interval treats the $n = 25$ differences as one sample, so df $= n - 1 = 24$. The number of pairs, not the total of 50 measurements, drives the degrees of freedom.",
        "zh": "配对区间把 $n = 25$ 个差值视为一个样本，所以 df $= n - 1 = 24$。决定自由度的是配对数，而不是总共 50 个测量值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute the standard error $s/\\sqrt{n}$ for a sample with $s = 12$ and $n = 36$. Give the exact decimal value.",
        "zh": "对于 $s = 12$、$n = 36$ 的样本，计算标准误 $s/\\sqrt{n}$。给出精确的小数值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2.00"
      ],
      "explanation": {
        "en": "The standard error is $s/\\sqrt{n} = 12/\\sqrt{36} = 12/6 = 2$. Dividing by $\\sqrt{n}$, not by $n$, is essential.",
        "zh": "标准误为 $s/\\sqrt{n} = 12/\\sqrt{36} = 12/6 = 2$。关键是除以 $\\sqrt{n}$ 而不是 $n$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "You want a 95% confidence interval for a mean with margin of error at most 3, using the planning value $\\sigma \\approx 10$ and $z^* = 1.96$. Find the minimum sample size $n$ (round up to a whole number).",
        "zh": "你希望得到均值的 95% 置信区间，误差幅度不超过 3，使用规划值 $\\sigma \\approx 10$ 和 $z^* = 1.96$。求最小样本量 $n$（向上取整为整数）。"
      },
      "answer": "43",
      "accept": [],
      "explanation": {
        "en": "Set $z^* \\sigma/\\sqrt{n} \\le 3$, so $n \\ge (1.96 \\times 10 / 3)^2 = (6.533)^2 = 42.68$. Always round up to guarantee the margin, giving $n = 43$.",
        "zh": "令 $z^* \\sigma/\\sqrt{n} \\le 3$，则 $n \\ge (1.96 \\times 10 / 3)^2 = (6.533)^2 = 42.68$。为保证误差幅度总是向上取整，得 $n = 43$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For 10 matched pairs, the differences have $\\bar{d} = 4.2$ and $s_d = 3$. Using $t^* = 2.262$ (df $= 9$, 95%), compute the margin of error for the mean difference $t^* \\cdot s_d/\\sqrt{n}$. Round to 3 decimal places.",
        "zh": "对于 10 对配对数据，差值有 $\\bar{d} = 4.2$，$s_d = 3$。使用 $t^* = 2.262$（df $= 9$，95%），计算均值差的误差幅度 $t^* \\cdot s_d/\\sqrt{n}$。保留 3 位小数。"
      },
      "answer": "2.146",
      "accept": [
        "2.15",
        "2.14"
      ],
      "explanation": {
        "en": "The standard error of the mean difference is $s_d/\\sqrt{n} = 3/\\sqrt{10} = 0.9487$. Then ME $= 2.262 \\times 0.9487 = 2.146$, so the interval is $4.2 \\pm 2.146$.",
        "zh": "均值差的标准误为 $s_d/\\sqrt{n} = 3/\\sqrt{10} = 0.9487$。于是 ME $= 2.262 \\times 0.9487 = 2.146$，区间为 $4.2 \\pm 2.146$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the critical value $t^*$ for a 99% confidence interval with df $= 9$. Round to 3 decimal places.",
        "zh": "求 df $= 9$ 时 99% 置信区间的临界值 $t^*$。保留 3 位小数。"
      },
      "answer": "3.250",
      "accept": [
        "3.25"
      ],
      "explanation": {
        "en": "For df $= 9$ and 99% confidence (0.005 in each tail), the $t$-table gives $t^* = 3.250$. It is much larger than the 95% value of 2.262, which is why 99% intervals are wider.",
        "zh": "当 df $= 9$、置信度 99%（每侧尾部 0.005）时，$t$ 表给出 $t^* = 3.250$。它远大于 95% 时的 2.262，这就是 99% 区间更宽的原因。"
      }
    }
  ],
  "inference-means/significance-tests-for-means": [
    {
      "type": "mc",
      "question": {
        "en": "A manufacturer claims the mean battery life of its laptops is $500$ hours. A consumer group suspects the true mean is lower and takes a random sample. Which pair of hypotheses is correct for a one-sample $t$-test?",
        "zh": "某制造商声称其笔记本电脑的平均电池续航为 $500$ 小时。一个消费者组织怀疑真实均值更低，并抽取了一个随机样本。对于单样本 $t$ 检验，哪一组假设是正确的？"
      },
      "choices": [
        "$H_0: \\mu = 500$, $H_a: \\mu < 500$",
        "$H_0: \\bar{x} = 500$, $H_a: \\bar{x} < 500$",
        "$H_0: \\mu = 500$, $H_a: \\mu \\ne 500$",
        "$H_0: \\mu < 500$, $H_a: \\mu = 500$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Hypotheses are always statements about the population parameter $\\mu$, not the statistic $\\bar{x}$, so choice 1 is wrong. Because the group suspects the mean is lower, the alternative is one-sided ($\\mu < 500$), not two-sided, ruling out the $\\ne$ choice.",
        "zh": "假设永远是关于总体参数 $\\mu$ 的陈述，而不是关于统计量 $\\bar{x}$ 的，所以第 1 项错误。由于该组织怀疑均值偏低，备择假设应是单侧的（$\\mu < 500$），而非双侧，因此排除含 $\\ne$ 的选项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT a required condition for performing a one-sample $t$-test for a mean?",
        "zh": "下列哪一项不是进行单样本均值 $t$ 检验所需要满足的条件？"
      },
      "choices": [
        "The data come from a random sample or randomized experiment",
        "The population standard deviation $\\sigma$ is known",
        "The population is approximately Normal, or the sample size is large enough",
        "Individual observations are independent (e.g. sample is under $10\\%$ of the population)"
      ],
      "answer": 1,
      "explanation": {
        "en": "The $t$-procedure exists precisely because $\\sigma$ is unknown and must be estimated by the sample SD $s$; if $\\sigma$ were known you would use a $z$-procedure. Random sampling, approximate Normality (or large $n$), and independence are all genuine conditions.",
        "zh": "之所以使用 $t$ 方法，正是因为总体标准差 $\\sigma$ 未知，需用样本标准差 $s$ 来估计；若 $\\sigma$ 已知则应使用 $z$ 方法。随机抽样、近似正态（或大样本 $n$）以及独立性才是真正需要的条件。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A random sample of $n = 25$ gives $\\bar{x} = 12.5$ and $s = 2$. Testing $H_0: \\mu = 12$, compute the one-sample $t$ statistic $t = \\dfrac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$. Round to 2 decimal places.",
        "zh": "一个容量为 $n = 25$ 的随机样本给出 $\\bar{x} = 12.5$、$s = 2$。检验 $H_0: \\mu = 12$，计算单样本 $t$ 统计量 $t = \\dfrac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$。请保留两位小数。"
      },
      "answer": "1.25",
      "accept": [
        "1.3"
      ],
      "explanation": {
        "en": "The standard error is $s/\\sqrt{n} = 2/\\sqrt{25} = 2/5 = 0.4$. Then $t = (12.5 - 12)/0.4 = 0.5/0.4 = 1.25$. A common error is dividing by $s$ instead of by the standard error.",
        "zh": "标准误为 $s/\\sqrt{n} = 2/\\sqrt{25} = 2/5 = 0.4$。于是 $t = (12.5 - 12)/0.4 = 0.5/0.4 = 1.25$。常见错误是除以 $s$ 而不是除以标准误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A one-sample $t$-test for a mean uses a random sample of size $n = 20$. How many degrees of freedom does the $t$-distribution have?",
        "zh": "一个单样本均值 $t$ 检验使用容量为 $n = 20$ 的随机样本。对应的 $t$ 分布有多少个自由度？"
      },
      "choices": [
        "$20$",
        "$21$",
        "$19$",
        "$18$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For a one-sample $t$-test the degrees of freedom are $n - 1 = 20 - 1 = 19$. Using $n$ itself ($20$) forgets that one degree of freedom is lost in estimating the mean.",
        "zh": "单样本 $t$ 检验的自由度为 $n - 1 = 20 - 1 = 19$。直接用 $n$（即 $20$）忽略了在估计均值时损失了一个自由度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A two-sample $t$-test compares two independent samples of sizes $n_1 = 10$ and $n_2 = 15$. Using the conservative method (the smaller of $n_1 - 1$ and $n_2 - 1$), what degrees of freedom should be used? Give an integer.",
        "zh": "一个双样本 $t$ 检验比较两个独立样本，容量分别为 $n_1 = 10$ 与 $n_2 = 15$。使用保守方法（取 $n_1 - 1$ 与 $n_2 - 1$ 中较小者），应使用多少自由度？请填一个整数。"
      },
      "answer": "9",
      "accept": [],
      "explanation": {
        "en": "The conservative degrees of freedom equal the smaller of $n_1 - 1 = 9$ and $n_2 - 1 = 14$, which is $9$. (Technology using the Welch formula would give a larger, non-integer value, but the conservative rule gives $9$.)",
        "zh": "保守自由度取 $n_1 - 1 = 9$ 与 $n_2 - 1 = 14$ 中较小者，即 $9$。（使用 Welch 公式的计算器会给出更大的非整数值，但保守规则给出 $9$。）"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Researchers measure the blood pressure of each of $30$ patients before taking a new drug and again after taking it, then analyze the change for each patient. Which inference procedure is appropriate?",
        "zh": "研究者测量了 $30$ 名患者服用新药前后各自的血压，然后分析每位患者的变化量。应使用哪种推断方法？"
      },
      "choices": [
        "Two-sample $t$-test for a difference of means",
        "One-sample $z$-test for a proportion",
        "Two-proportion $z$-test",
        "Paired $t$-test (a one-sample $t$-test on the differences)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Each patient provides two measurements, so the before/after values are paired, not independent. You analyze the single list of within-patient differences with a one-sample $t$-test. Treating the two lists as independent (choice 0) ignores the pairing and inflates the standard error.",
        "zh": "每位患者都提供两次测量，因此服药前后的数值是配对的，而非独立的。应对每位患者的差值这一组数据做单样本 $t$ 检验。把两组数据当作独立样本（第 0 项）会忽略配对关系并夸大标准误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a two-sided one-sample $t$-test with alternative $H_a: \\mu \\ne \\mu_0$, the observed test statistic is $t = 2.30$ (with $T$ the $t$-distribution). How is the p-value computed?",
        "zh": "对于备择假设为 $H_a: \\mu \\ne \\mu_0$ 的双侧单样本 $t$ 检验，观测到的检验统计量为 $t = 2.30$（$T$ 表示相应的 $t$ 分布）。p 值应如何计算？"
      },
      "choices": [
        "$2 \\cdot P(T > 2.30)$ — the area in both tails",
        "$P(T > 2.30)$ — the area in one tail only",
        "$P(T < 2.30)$ — the area to the left",
        "$1 - 2 \\cdot P(T > 2.30)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A two-sided alternative counts evidence in both directions, so the p-value is the area in both tails: $2 \\cdot P(T > 2.30)$. Reporting only one tail (choice 1) halves the true p-value and is the classic one-sided/two-sided mistake.",
        "zh": "双侧备择假设需要计入两个方向的证据，因此 p 值是两侧尾部面积之和：$2 \\cdot P(T > 2.30)$。只算一侧尾部（第 1 项）会把真实 p 值减半，这是典型的单侧/双侧混淆错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a paired study with $n = 9$ pairs, the differences have mean $\\bar{d} = 3$ and standard deviation $s_d = 6$. Compute the paired $t$ statistic $t = \\dfrac{\\bar{d}}{s_d/\\sqrt{n}}$ for testing $H_0: \\mu_d = 0$. Round to 2 decimal places.",
        "zh": "在一个含 $n = 9$ 对数据的配对研究中，差值的均值为 $\\bar{d} = 3$，标准差为 $s_d = 6$。检验 $H_0: \\mu_d = 0$，计算配对 $t$ 统计量 $t = \\dfrac{\\bar{d}}{s_d/\\sqrt{n}}$。请保留两位小数。"
      },
      "answer": "1.50",
      "accept": [
        "1.5"
      ],
      "explanation": {
        "en": "The standard error of the mean difference is $s_d/\\sqrt{n} = 6/\\sqrt{9} = 6/3 = 2$. Then $t = 3/2 = 1.50$. A paired test is just a one-sample $t$-test applied to the differences.",
        "zh": "差值均值的标准误为 $s_d/\\sqrt{n} = 6/\\sqrt{9} = 6/3 = 2$。于是 $t = 3/2 = 1.50$。配对检验其实就是对差值做的单样本 $t$ 检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A trial tests $H_0$: a new drug is no better than a placebo, against $H_a$: the drug is better. In this context, a Type I error means:",
        "zh": "一项试验检验 $H_0$：新药并不比安慰剂更有效，对立于 $H_a$：新药更有效。在此情境下，第一类错误指的是："
      },
      "choices": [
        "Concluding the drug works when it actually does work",
        "Concluding the drug works when it actually does not work",
        "Concluding the drug does not work when it actually does work",
        "Concluding the drug does not work when it actually does not work"
      ],
      "answer": 1,
      "explanation": {
        "en": "A Type I error is rejecting a true $H_0$ — here, concluding the drug works (rejecting $H_0$) when in reality it does not (i.e. $H_0$ is true). Choice 2 describes a Type II error (failing to detect a real effect).",
        "zh": "第一类错误是拒绝了真实的 $H_0$——在此即得出新药有效（拒绝 $H_0$），而实际上它并无效（即 $H_0$ 为真）。第 2 项描述的是第二类错误（未能检测出真实存在的效果）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the same drug trial ($H_0$: no better than placebo; $H_a$: better), which statement describes a Type II error?",
        "zh": "仍用上面的药物试验（$H_0$：不优于安慰剂；$H_a$：更有效），下列哪项描述的是第二类错误？"
      },
      "choices": [
        "Rejecting $H_0$ when $H_0$ is actually true",
        "Rejecting $H_0$ when $H_a$ is actually true",
        "Failing to reject $H_0$ when $H_a$ is actually true",
        "Failing to reject $H_0$ when $H_0$ is actually true"
      ],
      "answer": 2,
      "explanation": {
        "en": "A Type II error is failing to reject $H_0$ even though $H_a$ is true — the drug really works but the test misses it. Choice 0 is a Type I error, and choices 1 and 3 describe correct decisions.",
        "zh": "第二类错误是尽管 $H_a$ 为真却未能拒绝 $H_0$——即新药确实有效，但检验没能发现。第 0 项是第一类错误，而第 1、3 项描述的都是正确的决策。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two independent samples give $\\bar{x}_1 = 25$, $s_1 = 4$, $n_1 = 16$ and $\\bar{x}_2 = 22$, $s_2 = 3$, $n_2 = 9$. Compute the two-sample $t$ statistic $t = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}}$. Round to 2 decimal places.",
        "zh": "两个独立样本给出 $\\bar{x}_1 = 25$、$s_1 = 4$、$n_1 = 16$ 与 $\\bar{x}_2 = 22$、$s_2 = 3$、$n_2 = 9$。计算双样本 $t$ 统计量 $t = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}}$。请保留两位小数。"
      },
      "answer": "2.12",
      "accept": [
        "2.1",
        "2.121"
      ],
      "explanation": {
        "en": "The standard error is $\\sqrt{4^2/16 + 3^2/9} = \\sqrt{16/16 + 9/9} = \\sqrt{1 + 1} = \\sqrt{2} \\approx 1.414$. Then $t = (25 - 22)/1.414 \\approx 2.12$. Note the two variances are added (never subtracted) before taking the square root.",
        "zh": "标准误为 $\\sqrt{4^2/16 + 3^2/9} = \\sqrt{16/16 + 9/9} = \\sqrt{1 + 1} = \\sqrt{2} \\approx 1.414$。于是 $t = (25 - 22)/1.414 \\approx 2.12$。注意两个方差是相加（绝不相减）后再开平方根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A significance test yields a p-value of $0.03$. Which is the correct interpretation?",
        "zh": "一次显著性检验得到 p 值为 $0.03$。下列哪种解释是正确的？"
      },
      "choices": [
        "There is a $0.03$ probability that $H_0$ is true",
        "There is a $0.97$ probability that $H_a$ is true",
        "$3\\%$ of the sample data are measurement errors",
        "If $H_0$ were true, there is a $0.03$ probability of getting a result at least as extreme as the one observed"
      ],
      "answer": 3,
      "explanation": {
        "en": "The p-value is computed assuming $H_0$ is true: it is the probability of a result as or more extreme than observed under $H_0$. It is NOT the probability that $H_0$ (or $H_a$) is true — parameters are fixed, not random, so choices 0 and 1 misinterpret the p-value.",
        "zh": "p 值是在假设 $H_0$ 为真的前提下计算的：它是在 $H_0$ 成立时得到与观测值一样极端或更极端结果的概率。它并不是 $H_0$（或 $H_a$）为真的概率——参数是固定的而非随机的，所以第 0、1 项都误解了 p 值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A one-sample $t$-test gives a p-value of $0.02$ at significance level $\\alpha = 0.05$. What is the correct conclusion?",
        "zh": "一个单样本 $t$ 检验在显著性水平 $\\alpha = 0.05$ 下得到 p 值 $0.02$。正确的结论是什么？"
      },
      "choices": [
        "Reject $H_0$; there is convincing evidence for $H_a$",
        "Fail to reject $H_0$; there is not convincing evidence for $H_a$",
        "Accept $H_0$ as definitely true",
        "Accept $H_a$ as definitely true"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since the p-value $0.02 < \\alpha = 0.05$, we reject $H_0$ and conclude there is convincing evidence for $H_a$. We never \"accept\" a hypothesis as certainly true (choices 2 and 3) — a test only weighs evidence, it does not prove.",
        "zh": "由于 p 值 $0.02 < \\alpha = 0.05$，我们拒绝 $H_0$，并得出有充分证据支持 $H_a$。我们绝不能把某个假设“接受”为确定为真（第 2、3 项）——检验只是衡量证据，并不能给出证明。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A random sample of $n = 36$ gives $\\bar{x} = 48$ and $s = 6$. Testing $H_0: \\mu = 50$, compute the one-sample $t$ statistic. Round to 2 decimal places (include the sign).",
        "zh": "一个容量为 $n = 36$ 的随机样本给出 $\\bar{x} = 48$、$s = 6$。检验 $H_0: \\mu = 50$，计算单样本 $t$ 统计量。请保留两位小数（含符号）。"
      },
      "answer": "-2.00",
      "accept": [
        "-2",
        "-2.0"
      ],
      "explanation": {
        "en": "The standard error is $s/\\sqrt{n} = 6/\\sqrt{36} = 6/6 = 1$. Then $t = (48 - 50)/1 = -2.00$. The negative sign shows $\\bar{x}$ is below $\\mu_0$; keeping the sign matters for a one-sided test.",
        "zh": "标准误为 $s/\\sqrt{n} = 6/\\sqrt{36} = 6/6 = 1$。于是 $t = (48 - 50)/1 = -2.00$。负号表明 $\\bar{x}$ 低于 $\\mu_0$；对于单侧检验，保留符号很重要。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A researcher compares the mean exam score of students in Class A with the mean score of a completely different group of students in Class B. Which procedure fits?",
        "zh": "一位研究者比较 A 班学生的平均考试成绩与另一批完全不同的 B 班学生的平均成绩。应使用哪种方法？"
      },
      "choices": [
        "Paired $t$-test on the differences",
        "Two-sample $t$-test for a difference of means",
        "One-sample $t$-test for a mean",
        "One-proportion $z$-test"
      ],
      "answer": 1,
      "explanation": {
        "en": "The two classes are separate, independent groups of students with no natural pairing, so a two-sample $t$-test for $\\mu_1 - \\mu_2$ is appropriate. A paired test (choice 0) would be wrong because there is no meaningful one-to-one link between an A student and a B student.",
        "zh": "两个班是彼此独立、互不相同的学生群体，没有天然的配对关系，因此应使用关于 $\\mu_1 - \\mu_2$ 的双样本 $t$ 检验。配对检验（第 0 项）是错误的，因为 A 班某学生与 B 班某学生之间没有有意义的一一对应关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A significance test results in \"fail to reject $H_0$.\" Which interpretation is correct?",
        "zh": "一次显著性检验的结果是“不拒绝 $H_0$”。下列哪种解释是正确的？"
      },
      "choices": [
        "We have proven that $H_0$ is true",
        "We have proven that $H_a$ is false",
        "We do not have convincing evidence for $H_a$",
        "The result is statistically significant"
      ],
      "answer": 2,
      "explanation": {
        "en": "Failing to reject $H_0$ means the data did not provide convincing evidence for $H_a$ — it does NOT prove $H_0$ is true (absence of evidence is not evidence of absence). A non-significant result cannot be called statistically significant, so choice 3 is contradictory.",
        "zh": "不拒绝 $H_0$ 意味着数据没有提供支持 $H_a$ 的充分证据——但这并不能证明 $H_0$ 为真（没有证据不等于证明其不存在）。不显著的结果不能被称为统计显著，因此第 3 项自相矛盾。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A random sample of $n = 64$ gives $\\bar{x} = 7.2$ and $s = 0.8$. Testing $H_0: \\mu = 7.0$, compute the one-sample $t$ statistic. Round to 2 decimal places.",
        "zh": "一个容量为 $n = 64$ 的随机样本给出 $\\bar{x} = 7.2$、$s = 0.8$。检验 $H_0: \\mu = 7.0$，计算单样本 $t$ 统计量。请保留两位小数。"
      },
      "answer": "2.00",
      "accept": [
        "2",
        "2.0"
      ],
      "explanation": {
        "en": "The standard error is $s/\\sqrt{n} = 0.8/\\sqrt{64} = 0.8/8 = 0.1$. Then $t = (7.2 - 7.0)/0.1 = 0.2/0.1 = 2.00$.",
        "zh": "标准误为 $s/\\sqrt{n} = 0.8/\\sqrt{64} = 0.8/8 = 0.1$。于是 $t = (7.2 - 7.0)/0.1 = 0.2/0.1 = 2.00$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Holding the significance level $\\alpha$ and true effect size fixed, how does increasing the sample size affect the probability of a Type II error?",
        "zh": "在保持显著性水平 $\\alpha$ 和真实效应大小不变的情况下，增大样本容量会如何影响第二类错误的概率？"
      },
      "choices": [
        "It increases the probability of a Type II error",
        "It has no effect on the probability of a Type II error",
        "It increases the significance level $\\alpha$",
        "It decreases the probability of a Type II error (and increases power)"
      ],
      "answer": 3,
      "explanation": {
        "en": "A larger sample reduces the standard error, making a true effect easier to detect, so the probability of a Type II error falls and the power ($1 - \\beta$) rises. Sample size does not change $\\alpha$, which the researcher sets in advance, so choice 2 is wrong.",
        "zh": "更大的样本会减小标准误，使真实效应更容易被检测出来，因此第二类错误的概率下降，而检验功效（$1 - \\beta$）上升。样本容量不会改变由研究者事先设定的 $\\alpha$，所以第 2 项错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A paired $t$-test is carried out on $12$ pairs of observations. How many degrees of freedom does the $t$-distribution have? Give an integer.",
        "zh": "一个配对 $t$ 检验对 $12$ 对观测数据进行。对应的 $t$ 分布有多少个自由度？请填一个整数。"
      },
      "answer": "11",
      "accept": [],
      "explanation": {
        "en": "A paired $t$-test is a one-sample $t$-test on the $n = 12$ differences, so the degrees of freedom are $n - 1 = 12 - 1 = 11$. Using the total count of individual measurements ($24$) is a common mistake.",
        "zh": "配对 $t$ 检验是对这 $n = 12$ 个差值所做的单样本 $t$ 检验，因此自由度为 $n - 1 = 12 - 1 = 11$。用单个测量值的总数（$24$）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A two-sided one-sample $t$-test gives $t = 2.05$ with $df = 15$. The critical value at $\\alpha = 0.05$ is $t^* = 2.131$. Is the result statistically significant at $\\alpha = 0.05$? Answer \"yes\" or \"no\".",
        "zh": "一个双侧单样本 $t$ 检验得到 $t = 2.05$、$df = 15$。在 $\\alpha = 0.05$ 下的临界值为 $t^* = 2.131$。在 $\\alpha = 0.05$ 下结果是否统计显著？请回答“yes”或“no”。"
      },
      "answer": "no",
      "accept": [
        "No",
        "not significant"
      ],
      "explanation": {
        "en": "Since $|t| = 2.05 < t^* = 2.131$, the test statistic does not reach the critical value, so we fail to reject $H_0$ and the result is not significant at $\\alpha = 0.05$. Equivalently, the p-value exceeds $0.05$.",
        "zh": "由于 $|t| = 2.05 < t^* = 2.131$，检验统计量没有达到临界值，因此不拒绝 $H_0$，在 $\\alpha = 0.05$ 下结果不显著。等价地说，p 值大于 $0.05$。"
      }
    }
  ],
  "inference-chi-square/chi-square-tests": [
    {
      "type": "mc",
      "question": {
        "en": "Which expression correctly gives the chi-square test statistic, where $O$ is an observed count and $E$ is an expected count?",
        "zh": "下列哪个表达式正确给出了卡方检验统计量？其中 $O$ 为观测频数，$E$ 为期望频数。"
      },
      "choices": [
        "$\\sum \\frac{O - E}{E}$",
        "$\\sum \\frac{(O - E)^2}{O}$",
        "$\\sum \\frac{(O - E)^2}{E}$",
        "$\\frac{(O - E)^2}{E}$ for the cell with the largest difference only"
      ],
      "answer": 2,
      "explanation": {
        "en": "The chi-square statistic is $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$: square each observed-minus-expected difference, divide by the expected count, and add over all cells. Dividing by $O$ instead of $E$ is a common slip; the denominator is always the expected count.",
        "zh": "卡方统计量为 $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$：将每个“观测减期望”的差平方，除以期望频数，再对所有格子求和。误把分母写成 $O$ 是常见错误；分母始终是期望频数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A six-sided die is rolled 120 times to test whether it is fair. For the chi-square goodness-of-fit test, how many degrees of freedom are used?",
        "zh": "将一个六面骰子掷 120 次以检验其是否均匀。卡方拟合优度检验使用多少自由度？"
      },
      "choices": [
        "$6$",
        "$5$",
        "$1$",
        "$119$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For a goodness-of-fit test, $df = (\\text{number of categories}) - 1$. With 6 faces, $df = 6 - 1 = 5$. Degrees of freedom depend on the number of categories, not the sample size, so $119$ is wrong.",
        "zh": "拟合优度检验的自由度 $df = (\\text{类别数}) - 1$。六个面时 $df = 6 - 1 = 5$。自由度取决于类别数，而非样本量，因此 $119$ 是错的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a two-way table, a cell lies in a row with total $50$ and a column with total $60$; the grand total is $200$. What is the expected count for that cell?",
        "zh": "在一个双向表中，某格所在行的合计为 $50$，所在列的合计为 $60$，总计为 $200$。该格的期望频数是多少？"
      },
      "choices": [
        "$15$",
        "$30$",
        "$25$",
        "$110$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Expected count $= \\frac{(\\text{row total})(\\text{column total})}{\\text{grand total}} = \\frac{50 \\times 60}{200} = 15$. Adding the row and column totals ($50 + 60 = 110$) is a misconception; the rule multiplies then divides by the grand total.",
        "zh": "期望频数 $= \\frac{(\\text{行合计})(\\text{列合计})}{\\text{总计}} = \\frac{50 \\times 60}{200} = 15$。把行列合计相加（$50 + 60 = 110$）是错误理解；正确做法是相乘后再除以总计。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A chi-square test uses a two-way table with 2 rows and 3 columns. How many degrees of freedom does it have?",
        "zh": "某卡方检验使用一个 2 行 3 列的双向表。它的自由度是多少？"
      },
      "choices": [
        "$6$",
        "$5$",
        "$1$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "For a two-way table, $df = (r - 1)(c - 1) = (2 - 1)(3 - 1) = 1 \\times 2 = 2$. Multiplying rows by columns ($2 \\times 3 = 6$) forgets to subtract 1 from each dimension first.",
        "zh": "双向表的自由度 $df = (r - 1)(c - 1) = (2 - 1)(3 - 1) = 1 \\times 2 = 2$。直接把行数乘列数（$2 \\times 3 = 6$）忘了先各减 1。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A researcher takes one random sample of 200 shoppers and records each shopper's favorite among four store brands, then asks whether the brand preferences match a claimed distribution of 40%/30%/20%/10%. Which test is appropriate?",
        "zh": "一位研究者随机抽取 200 名顾客，记录每人最喜爱的四个商店品牌之一，并想检验品牌偏好是否符合声称的 40%/30%/20%/10% 分布。应使用哪种检验？"
      },
      "choices": [
        "Chi-square test for independence",
        "Chi-square test for homogeneity",
        "Chi-square goodness-of-fit test",
        "Two-sample z-test for proportions"
      ],
      "answer": 2,
      "explanation": {
        "en": "One sample is classified into categories of a single variable and compared to a claimed distribution, so this is a goodness-of-fit test. Independence and homogeneity both involve two variables (a two-way table), which is not the setup here.",
        "zh": "这里是把一个样本按单个变量的类别分类，并与声称的分布比较，因此是拟合优度检验。独立性检验和同质性检验都涉及两个变量（双向表），与本题情形不符。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Researchers draw separate independent random samples from three high schools and classify each student as passing or failing an exam, then ask whether the pass/fail distribution is the same across the three schools. Which test is appropriate?",
        "zh": "研究者分别从三所高中独立随机抽样，将每名学生分类为考试通过或未通过，并想检验三所学校的通过/未通过分布是否相同。应使用哪种检验？"
      },
      "choices": [
        "Chi-square test for homogeneity",
        "Chi-square goodness-of-fit test",
        "Chi-square test for independence",
        "One-sample z-test for a proportion"
      ],
      "answer": 0,
      "explanation": {
        "en": "Several separate random samples (one per school) compared on the same categorical response call for a chi-square test for homogeneity. A test for independence uses a single sample classified on two variables, which is not how these data were collected.",
        "zh": "按每所学校各取一个独立随机样本、就同一分类结果进行比较，应使用卡方同质性检验。独立性检验针对的是单一样本按两个变量分类，与本题的抽样方式不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From one random sample of 500 adults, each person is classified by both gender and handedness (left/right). To test whether gender and handedness are related, which test is appropriate?",
        "zh": "从一个包含 500 名成年人的随机样本中，把每个人同时按性别和惯用手（左/右）分类。为检验性别与惯用手是否相关，应使用哪种检验？"
      },
      "choices": [
        "Chi-square goodness-of-fit test",
        "Chi-square test for homogeneity",
        "Chi-square test for independence (association)",
        "Matched-pairs t-test"
      ],
      "answer": 2,
      "explanation": {
        "en": "A single sample classified on two categorical variables at once tests whether those variables are independent, so this is a chi-square test for independence. Homogeneity would require several separate samples, one per population.",
        "zh": "对单一样本同时按两个分类变量分类，是在检验这两个变量是否独立，因此属于卡方独立性检验。同质性检验则需要针对每个总体各取一个独立样本。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A chi-square goodness-of-fit test on whether a die is fair gives a p-value of $0.02$ at significance level $\\alpha = 0.05$. What is the correct conclusion?",
        "zh": "对某骰子是否均匀进行卡方拟合优度检验，在显著性水平 $\\alpha = 0.05$ 下得到 p 值 $0.02$。正确结论是什么？"
      },
      "choices": [
        "Fail to reject $H_0$; the die is fair",
        "Reject $H_0$; there is convincing evidence the true distribution differs from uniform",
        "Accept $H_0$ and prove the die is fair",
        "The probability that $H_0$ is true equals $0.02$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since the p-value $0.02 < \\alpha = 0.05$, we reject $H_0$ and conclude there is convincing evidence the die's outcome distribution is not uniform. A p-value is the chance of data this extreme if $H_0$ were true, not the probability that $H_0$ is true.",
        "zh": "由于 p 值 $0.02 < \\alpha = 0.05$，我们拒绝 $H_0$，得出有充分证据表明骰子的结果分布不是均匀分布。p 值是“假设 $H_0$ 成立时出现如此极端数据的概率”，而不是“$H_0$ 为真的概率”。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a required condition for a chi-square test to be valid?",
        "zh": "下列哪一项是卡方检验成立所需的条件？"
      },
      "choices": [
        "All observed counts are at least $5$",
        "The population distribution is Normal",
        "The sample size is less than $30$",
        "All expected counts are at least $5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The Large Counts condition requires all EXPECTED counts to be at least $5$ (along with random data and the 10% condition for independence). It is the expected counts, not the observed counts, that must meet the threshold; chi-square procedures do not require a Normal population.",
        "zh": "大计数条件要求所有“期望”频数都至少为 $5$（同时还需数据随机，以及满足 10% 条件以保证独立性）。需要达到该阈值的是期望频数，而非观测频数；卡方方法并不要求总体服从正态分布。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a chi-square test, the calculated statistic $\\chi^2$ turns out to be very large. What does this indicate?",
        "zh": "在某卡方检验中，计算得到的统计量 $\\chi^2$ 非常大。这说明了什么？"
      },
      "choices": [
        "The observed counts differ substantially from the expected counts, giving a small p-value and evidence against $H_0$",
        "The observed counts nearly equal the expected counts",
        "The p-value is large, so we fail to reject $H_0$",
        "A computational error must have occurred"
      ],
      "answer": 0,
      "explanation": {
        "en": "A large $\\chi^2$ means the observed counts are far from what $H_0$ predicts, which puts the statistic far in the right tail and produces a small p-value—evidence against $H_0$. A statistic near $0$ (not a large one) would indicate observed and expected counts agree.",
        "zh": "$\\chi^2$ 很大意味着观测频数与 $H_0$ 预测的期望频数相差很远，使统计量落在右尾很远处，从而得到较小的 p 值——即反对 $H_0$ 的证据。若统计量接近 $0$（而非很大），才说明观测与期望相符。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A chi-square test for independence produces the following cell contributions $\\frac{(O-E)^2}{E}$: Category A $= 0.5$, Category B $= 2.1$, Category C $= 4.8$, Category D $= 1.2$. Which category contributes most to the value of $\\chi^2$?",
        "zh": "某卡方独立性检验各格对 $\\chi^2$ 的贡献 $\\frac{(O-E)^2}{E}$ 分别为：类别 A $= 0.5$，类别 B $= 2.1$，类别 C $= 4.8$，类别 D $= 1.2$。哪个类别对 $\\chi^2$ 的贡献最大？"
      },
      "choices": [
        "Category A ($0.5$)",
        "Category B ($2.1$)",
        "Category D ($1.2$)",
        "Category C ($4.8$)"
      ],
      "answer": 3,
      "explanation": {
        "en": "The chi-square statistic is the sum of the individual cell contributions, so the largest contribution—Category C at $4.8$—drives the statistic most and shows where observed and expected counts diverge most. The smallest contribution (Category A) drives it least.",
        "zh": "卡方统计量是各格贡献之和，因此贡献最大的类别 C（$4.8$）对统计量的影响最大，也说明观测与期望在此处相差最大。贡献最小的类别 A 影响最小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A chi-square test for association between two variables gives a p-value of $0.42$ at $\\alpha = 0.05$. What is the correct conclusion?",
        "zh": "关于两个变量是否关联的卡方检验，在 $\\alpha = 0.05$ 下得到 p 值 $0.42$。正确结论是什么？"
      },
      "choices": [
        "Reject $H_0$; the variables are associated",
        "Fail to reject $H_0$; there is not convincing evidence of an association",
        "The variables are proven to be independent",
        "The data must be invalid"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because the p-value $0.42 > \\alpha = 0.05$, we fail to reject $H_0$: there is not convincing evidence of an association between the variables. Failing to reject does not prove independence—it only means the evidence is insufficient to conclude a relationship.",
        "zh": "由于 p 值 $0.42 > \\alpha = 0.05$，我们不能拒绝 $H_0$：没有充分证据表明两个变量之间存在关联。不能拒绝并不等于证明了独立——它只表示证据不足以断定存在关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A fair die is expected to land on each face $10$ times in $60$ rolls. Face 1 actually came up $16$ times. Compute this cell's contribution to $\\chi^2$, i.e. $\\frac{(O-E)^2}{E}$. Give your answer to 1 decimal place.",
        "zh": "一枚均匀骰子在 60 次掷出中，每个面期望出现 $10$ 次。面 1 实际出现了 $16$ 次。计算该格对 $\\chi^2$ 的贡献，即 $\\frac{(O-E)^2}{E}$。答案保留 1 位小数。"
      },
      "answer": "3.6",
      "accept": [
        "3.60"
      ],
      "explanation": {
        "en": "The contribution is $\\frac{(O - E)^2}{E} = \\frac{(16 - 10)^2}{10} = \\frac{36}{10} = 3.6$. Square the difference before dividing by the expected count.",
        "zh": "该格贡献为 $\\frac{(O - E)^2}{E} = \\frac{(16 - 10)^2}{10} = \\frac{36}{10} = 3.6$。先把差平方，再除以期望频数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a two-way table, a cell lies in a row with total $40$ and a column with total $75$; the grand total is $150$. Compute the expected count for that cell. Give a number.",
        "zh": "在一个双向表中，某格所在行的合计为 $40$，所在列的合计为 $75$，总计为 $150$。计算该格的期望频数。请填一个数。"
      },
      "answer": "20",
      "accept": [
        "20.0"
      ],
      "explanation": {
        "en": "Expected count $= \\frac{(\\text{row total})(\\text{column total})}{\\text{grand total}} = \\frac{40 \\times 75}{150} = \\frac{3000}{150} = 20$.",
        "zh": "期望频数 $= \\frac{(\\text{行合计})(\\text{列合计})}{\\text{总计}} = \\frac{40 \\times 75}{150} = \\frac{3000}{150} = 20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A chi-square goodness-of-fit test compares observed counts across $5$ categories to a claimed distribution. How many degrees of freedom does the test use? Give an integer.",
        "zh": "某卡方拟合优度检验将 $5$ 个类别的观测频数与声称的分布比较。该检验使用多少自由度？请填一个整数。"
      },
      "answer": "4",
      "accept": [],
      "explanation": {
        "en": "For a goodness-of-fit test, $df = (\\text{categories}) - 1 = 5 - 1 = 4$.",
        "zh": "拟合优度检验的自由度 $df = (\\text{类别数}) - 1 = 5 - 1 = 4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A chi-square test uses a two-way table with $3$ rows and $4$ columns. How many degrees of freedom does it have? Give an integer.",
        "zh": "某卡方检验使用一个 $3$ 行 $4$ 列的双向表。它的自由度是多少？请填一个整数。"
      },
      "answer": "6",
      "accept": [],
      "explanation": {
        "en": "For a two-way table, $df = (r - 1)(c - 1) = (3 - 1)(4 - 1) = 2 \\times 3 = 6$.",
        "zh": "双向表的自由度 $df = (r - 1)(c - 1) = (3 - 1)(4 - 1) = 2 \\times 3 = 6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A goodness-of-fit test uses $4$ categories, each with expected count $25$ (total $n = 100$). The observed counts are $20, 30, 25, 25$. Compute the chi-square statistic $\\chi^2$. Give your answer to 2 decimal places.",
        "zh": "某拟合优度检验有 $4$ 个类别，每个类别的期望频数均为 $25$（总数 $n = 100$）。观测频数为 $20, 30, 25, 25$。计算卡方统计量 $\\chi^2$。答案保留 2 位小数。"
      },
      "answer": "2.00",
      "accept": [
        "2",
        "2.0"
      ],
      "explanation": {
        "en": "$\\chi^2 = \\frac{(20-25)^2}{25} + \\frac{(30-25)^2}{25} + \\frac{(25-25)^2}{25} + \\frac{(25-25)^2}{25} = \\frac{25}{25} + \\frac{25}{25} + 0 + 0 = 1 + 1 = 2.00$.",
        "zh": "$\\chi^2 = \\frac{(20-25)^2}{25} + \\frac{(30-25)^2}{25} + \\frac{(25-25)^2}{25} + \\frac{(25-25)^2}{25} = \\frac{25}{25} + \\frac{25}{25} + 0 + 0 = 1 + 1 = 2.00$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A goodness-of-fit test claims a category should hold $30\\%$ of the population. For a sample of $n = 200$, what is the expected count for that category under $H_0$? Give a number.",
        "zh": "某拟合优度检验声称某个类别应占总体的 $30\\%$。当样本量 $n = 200$ 时，在 $H_0$ 下该类别的期望频数是多少？请填一个数。"
      },
      "answer": "60",
      "accept": [
        "60.0"
      ],
      "explanation": {
        "en": "Under $H_0$, the expected count is $n \\times p = 200 \\times 0.30 = 60$.",
        "zh": "在 $H_0$ 下，期望频数为 $n \\times p = 200 \\times 0.30 = 60$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a chi-square test, one cell has observed count $O = 45$ and expected count $E = 30$. Compute that cell's contribution $\\frac{(O-E)^2}{E}$ to the statistic. Give your answer to 1 decimal place.",
        "zh": "在某卡方检验中，某格的观测频数 $O = 45$，期望频数 $E = 30$。计算该格对统计量的贡献 $\\frac{(O-E)^2}{E}$。答案保留 1 位小数。"
      },
      "answer": "7.5",
      "accept": [
        "7.50"
      ],
      "explanation": {
        "en": "The contribution is $\\frac{(O - E)^2}{E} = \\frac{(45 - 30)^2}{30} = \\frac{225}{30} = 7.5$.",
        "zh": "该格贡献为 $\\frac{(O - E)^2}{E} = \\frac{(45 - 30)^2}{30} = \\frac{225}{30} = 7.5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The Large Counts condition for a chi-square test requires every expected count to be at least what whole number? Give an integer.",
        "zh": "卡方检验的大计数条件要求每个期望频数至少达到哪个整数？请填一个整数。"
      },
      "answer": "5",
      "accept": [],
      "explanation": {
        "en": "The Large Counts condition requires all expected counts to be at least $5$, which lets the chi-square distribution approximate the sampling distribution of the statistic well.",
        "zh": "大计数条件要求所有期望频数都至少为 $5$，这样卡方分布才能很好地近似该统计量的抽样分布。"
      }
    }
  ],
  "inference-slopes/inference-for-regression-slopes": [
    {
      "type": "mc",
      "question": {
        "en": "In a test for the slope of a regression line, what does the null hypothesis $H_0: \\beta = 0$ mean in context?",
        "zh": "在回归直线斜率的检验中，原假设 $H_0: \\beta = 0$ 在实际背景下意味着什么？"
      },
      "choices": [
        "There is no linear relationship between the explanatory and response variables",
        "The sample slope $b$ is exactly zero",
        "The correlation $r$ is exactly $1$",
        "The response variable is constant"
      ],
      "answer": 0,
      "explanation": {
        "en": "A population slope of $\\beta = 0$ means $x$ has no linear influence on the mean of $y$, i.e. no linear relationship. Saying the sample slope $b$ is zero confuses the sample statistic with the population parameter being tested; $b$ is almost never exactly $0$.",
        "zh": "总体斜率 $\\beta = 0$ 表示 $x$ 对 $y$ 的均值没有线性影响，即不存在线性关系。说样本斜率 $b$ 为零是把样本统计量与被检验的总体参数混淆了；$b$ 几乎不会恰好为 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Computer output gives the slope $b = 3.60$ with standard error $\\text{SE}_b = 0.90$. Compute the $t$ statistic for $H_0: \\beta = 0$. Round to 2 decimal places.",
        "zh": "计算机输出给出斜率 $b = 3.60$，标准误 $\\text{SE}_b = 0.90$。计算检验 $H_0: \\beta = 0$ 的 $t$ 统计量。保留两位小数。"
      },
      "answer": "4.00",
      "accept": [
        "4",
        "4.0"
      ],
      "explanation": {
        "en": "The test statistic is $t = \\dfrac{b - 0}{\\text{SE}_b} = \\dfrac{3.60}{0.90} = 4.00$. The standard error goes in the denominator, not the coefficient of the constant term.",
        "zh": "检验统计量为 $t = \\dfrac{b - 0}{\\text{SE}_b} = \\dfrac{3.60}{0.90} = 4.00$。分母是斜率的标准误，而不是常数项的系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A least-squares regression is fit using $n = 12$ observations. What are the degrees of freedom for the $t$ interval and $t$ test for the slope?",
        "zh": "用 $n = 12$ 个观测值拟合最小二乘回归。斜率的 $t$ 区间与 $t$ 检验的自由度是多少？"
      },
      "choices": [
        "$11$",
        "$10$",
        "$12$",
        "$9$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For inference about a regression slope, $df = n - 2 = 12 - 2 = 10$, because two parameters (slope and intercept) are estimated. Using $n - 1 = 11$ is the one-mean rule and does not apply here.",
        "zh": "对回归斜率进行推断时，$df = n - 2 = 12 - 2 = 10$，因为估计了两个参数（斜率和截距）。用 $n - 1 = 11$ 是单均值的规则，此处不适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Under the conditions for regression inference, what does the mean (center) of the sampling distribution of the sample slope $b$ equal?",
        "zh": "在回归推断条件成立时，样本斜率 $b$ 的抽样分布的均值（中心）等于什么？"
      },
      "choices": [
        "The correlation $r$",
        "Always $0$",
        "The true population slope $\\beta$",
        "The observed sample slope $b$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$b$ is an unbiased estimator, so the sampling distribution of $b$ is centered at the true slope $\\beta$. It is not centered at $0$ (that would only be true if $\\beta = 0$) nor at the correlation $r$.",
        "zh": "$b$ 是无偏估计量，因此 $b$ 的抽样分布以真实斜率 $\\beta$ 为中心。它不以 $0$ 为中心（那只有当 $\\beta = 0$ 时才成立），也不以相关系数 $r$ 为中心。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "With $df = 10$ and critical value $t^* = 2.228$, compute the margin of error for a 95% confidence interval for the slope, using $\\text{SE}_b = 0.90$. Round to 3 decimal places.",
        "zh": "当 $df = 10$、临界值 $t^* = 2.228$ 时，用 $\\text{SE}_b = 0.90$ 计算斜率 95% 置信区间的误差幅度。保留三位小数。"
      },
      "answer": "2.005",
      "accept": [
        "2.01",
        "2.0"
      ],
      "explanation": {
        "en": "Margin of error $= t^* \\cdot \\text{SE}_b = 2.228 \\times 0.90 = 2.0052 \\approx 2.005$. The interval is then $b \\pm 2.005$.",
        "zh": "误差幅度 $= t^* \\cdot \\text{SE}_b = 2.228 \\times 0.90 = 2.0052 \\approx 2.005$。区间为 $b \\pm 2.005$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT one of the conditions (LINER) required for inference about a regression slope?",
        "zh": "下列哪一项不是对回归斜率进行推断所需的条件（LINER）之一？"
      },
      "choices": [
        "The true relationship between $x$ and $y$ is linear",
        "The observations are independent",
        "For each $x$, the responses are approximately Normal",
        "The sample size must be at least $30$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The LINER conditions are Linear, Independent, Normal, Equal SD, and Random. There is no fixed \"$n \\geq 30$\" requirement; instead we check that residuals are roughly Normal with constant spread. The $n \\geq 30$ idea belongs to inference for means, not regression slope.",
        "zh": "LINER 条件为：线性、独立、正态、等标准差、随机。没有固定的 “$n \\geq 30$” 要求；而是检查残差是否近似正态且散布恒定。“$n \\geq 30$” 属于均值推断，而非回归斜率推断。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Computer output reports a slope $b = 1.76$ and a $t$ statistic of $2.20$ for $H_0: \\beta = 0$. Recover the standard error of the slope $\\text{SE}_b$. Round to 2 decimal places.",
        "zh": "计算机输出给出斜率 $b = 1.76$，检验 $H_0: \\beta = 0$ 的 $t$ 统计量为 $2.20$。反求斜率的标准误 $\\text{SE}_b$。保留两位小数。"
      },
      "answer": "0.80",
      "accept": [
        "0.8"
      ],
      "explanation": {
        "en": "Since $t = \\dfrac{b}{\\text{SE}_b}$, solving gives $\\text{SE}_b = \\dfrac{b}{t} = \\dfrac{1.76}{2.20} = 0.80$.",
        "zh": "由 $t = \\dfrac{b}{\\text{SE}_b}$ 解得 $\\text{SE}_b = \\dfrac{b}{t} = \\dfrac{1.76}{2.20} = 0.80$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a regression of exam score on hours studied, a 95% confidence interval for the slope is $(1.60, 5.61)$ points per hour. Which is the best interpretation?",
        "zh": "在考试分数对学习小时数的回归中，斜率的 95% 置信区间为每小时 $(1.60, 5.61)$ 分。下列哪种解释最恰当？"
      },
      "choices": [
        "We are 95% confident that the true mean increase in exam score is between 1.60 and 5.61 points for each additional hour studied",
        "About 95% of students score between 1.60 and 5.61 points",
        "There is a 95% probability that a student's score rises by between 1.60 and 5.61 points",
        "95% of the sample slopes fall between 1.60 and 5.61"
      ],
      "answer": 0,
      "explanation": {
        "en": "A slope CI estimates the true slope $\\beta$: we are 95% confident the mean change in $y$ per one-unit increase in $x$ lies in the interval. The interval is about the slope parameter, not about individual student scores or the proportion of students.",
        "zh": "斜率的置信区间估计真实斜率 $\\beta$：我们有 95% 的信心认为 $x$ 每增加一个单位时 $y$ 均值的变化落在该区间内。区间是关于斜率参数的，而非关于个别学生分数或学生比例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A two-sided test of $H_0: \\beta = 0$ has $t = 4.00$ and reports a two-sided $p$-value of $0.001$. If the researcher instead used the one-sided alternative $H_a: \\beta > 0$, what is the $p$-value?",
        "zh": "对 $H_0: \\beta = 0$ 的双侧检验得到 $t = 4.00$，报告的双侧 $p$ 值为 $0.001$。若研究者改用单侧备择假设 $H_a: \\beta > 0$，$p$ 值为多少？"
      },
      "choices": [
        "$0.001$",
        "$0.0005$",
        "$0.002$",
        "$0.05$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $t = 4.00$ is in the direction of $H_a$, the one-sided $p$-value is half of the two-sided value: $0.001 / 2 = 0.0005$. Doubling would be correct only when converting one-sided to two-sided.",
        "zh": "由于 $t = 4.00$ 与 $H_a$ 方向一致，单侧 $p$ 值是双侧值的一半：$0.001 / 2 = 0.0005$。只有把单侧转为双侧时才需要乘以 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Computer output gives a slope $b = 0.780$ with $\\text{SE}_b = 0.156$. Compute the $t$ statistic for testing $H_0: \\beta = 0$. Round to 2 decimal places.",
        "zh": "计算机输出给出斜率 $b = 0.780$，$\\text{SE}_b = 0.156$。计算检验 $H_0: \\beta = 0$ 的 $t$ 统计量。保留两位小数。"
      },
      "answer": "5.00",
      "accept": [
        "5",
        "5.0"
      ],
      "explanation": {
        "en": "$t = \\dfrac{b}{\\text{SE}_b} = \\dfrac{0.780}{0.156} = 5.00$. A large $|t|$ gives strong evidence against $\\beta = 0$.",
        "zh": "$t = \\dfrac{b}{\\text{SE}_b} = \\dfrac{0.780}{0.156} = 5.00$。较大的 $|t|$ 提供了反对 $\\beta = 0$ 的有力证据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A regression of $y$ on temperature ($n = 25$) gives slope $b = 0.780$, $t = 5.00$, and $p$-value $< 0.001$. At $\\alpha = 0.05$, what is the correct conclusion?",
        "zh": "$y$ 对温度的回归（$n = 25$）给出斜率 $b = 0.780$，$t = 5.00$，$p$ 值 $< 0.001$。在 $\\alpha = 0.05$ 下，正确结论是什么？"
      },
      "choices": [
        "Fail to reject $H_0$; there is no evidence of a linear relationship",
        "The true slope is exactly $0.780$",
        "Reject $H_0$; there is convincing evidence of a positive linear relationship between temperature and $y$",
        "Accept $H_0$; the variables are independent"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $p < 0.001 < 0.05$, reject $H_0: \\beta = 0$; there is convincing evidence of a (positive) linear relationship. We never \"accept\" $H_0$, and rejecting it does not pin the true slope to the sample value $0.780$.",
        "zh": "由于 $p < 0.001 < 0.05$，拒绝 $H_0: \\beta = 0$；有充分证据表明存在（正向）线性关系。我们从不 “接受” $H_0$，而且拒绝它也不能把真实斜率定为样本值 $0.780$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regression uses $n = 25$ observations. State the degrees of freedom used for the $t$ interval for the slope.",
        "zh": "某回归使用 $n = 25$ 个观测值。写出斜率 $t$ 区间所用的自由度。"
      },
      "answer": "23",
      "accept": [],
      "explanation": {
        "en": "$df = n - 2 = 25 - 2 = 23$. Two degrees of freedom are lost for estimating both the slope and the intercept.",
        "zh": "$df = n - 2 = 25 - 2 = 23$。因为同时估计斜率和截距，损失了两个自由度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Holding everything else fixed, as the sample size $n$ increases, the standard error of the slope $\\text{SE}_b$ tends to:",
        "zh": "在其他条件不变的情况下，随着样本量 $n$ 增大，斜率的标准误 $\\text{SE}_b$ 会趋于："
      },
      "choices": [
        "Increase without bound",
        "Stay exactly the same",
        "Become negative",
        "Decrease"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\text{SE}_b = \\dfrac{s}{s_x\\sqrt{n-1}}$, so larger $n$ shrinks the standard error, making $b$ a more precise estimate of $\\beta$. A standard error can never be negative.",
        "zh": "$\\text{SE}_b = \\dfrac{s}{s_x\\sqrt{n-1}}$，因此 $n$ 越大，标准误越小，使 $b$ 成为对 $\\beta$ 更精确的估计。标准误永远不会为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the temperature regression, $b = 0.780$, $\\text{SE}_b = 0.156$, $df = 23$, and $t^* = 2.069$ for 95% confidence. Compute the lower bound of the 95% confidence interval for the slope. Round to 3 decimal places.",
        "zh": "对温度回归，$b = 0.780$，$\\text{SE}_b = 0.156$，$df = 23$，95% 置信下 $t^* = 2.069$。计算斜率 95% 置信区间的下界。保留三位小数。"
      },
      "answer": "0.457",
      "accept": [
        "0.46",
        "0.4572"
      ],
      "explanation": {
        "en": "Margin $= t^* \\cdot \\text{SE}_b = 2.069 \\times 0.156 = 0.3228$. Lower bound $= 0.780 - 0.3228 = 0.4572 \\approx 0.457$.",
        "zh": "误差幅度 $= t^* \\cdot \\text{SE}_b = 2.069 \\times 0.156 = 0.3228$。下界 $= 0.780 - 0.3228 = 0.4572 \\approx 0.457$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which conditions for regression inference does a residual plot most directly help you check?",
        "zh": "残差图最直接帮助你检查回归推断的哪些条件？"
      },
      "choices": [
        "Linearity and constant standard deviation of the residuals (equal spread)",
        "That the sample was randomly selected",
        "That the observations are independent",
        "That the sample size is large enough"
      ],
      "answer": 0,
      "explanation": {
        "en": "A residual plot reveals whether a linear model fits (no leftover curved pattern) and whether the spread of residuals stays roughly constant across $x$ (equal SD). Randomness and independence come from how the data were collected, not from the plot.",
        "zh": "残差图能揭示线性模型是否合适（没有残留的弯曲模式），以及残差的散布是否在各 $x$ 值上大致恒定（等标准差）。随机性和独立性来自数据的收集方式，而非残差图。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In regression computer output, the \"SE Coef\" value listed next to the slope measures what?",
        "zh": "在回归的计算机输出中，斜率旁边列出的 “SE Coef” 值衡量的是什么？"
      },
      "choices": [
        "The spread of the residuals around the line",
        "How much the sample slope $b$ typically varies from sample to sample",
        "The correlation between $x$ and $y$",
        "The uncertainty in the $y$-intercept"
      ],
      "answer": 1,
      "explanation": {
        "en": "The standard error of the slope estimates the typical distance between a sample slope $b$ and the true slope $\\beta$ across repeated samples. The residual spread is a different quantity ($s$), and the intercept has its own separate standard error.",
        "zh": "斜率的标准误估计在重复抽样中样本斜率 $b$ 与真实斜率 $\\beta$ 之间的典型距离。残差的散布是另一个量（$s$），而截距有其自身独立的标准误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 95% confidence interval for a regression slope is $(0.12, 0.48)$. Based only on this interval, is there convincing evidence at the 5% level of a linear relationship between $x$ and $y$? Answer yes or no.",
        "zh": "某回归斜率的 95% 置信区间为 $(0.12, 0.48)$。仅根据此区间，在 5% 水平下是否有充分证据表明 $x$ 与 $y$ 之间存在线性关系？回答 yes 或 no。"
      },
      "answer": "yes",
      "accept": [
        "Yes",
        "YES"
      ],
      "explanation": {
        "en": "The interval $(0.12, 0.48)$ does not contain $0$, so $\\beta = 0$ is not a plausible value. This is equivalent to rejecting $H_0: \\beta = 0$ at the 5% level, giving convincing evidence of a linear relationship.",
        "zh": "区间 $(0.12, 0.48)$ 不包含 $0$，因此 $\\beta = 0$ 不是一个合理的取值。这等价于在 5% 水平下拒绝 $H_0: \\beta = 0$，从而有充分证据表明存在线性关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 95% confidence interval for the slope of a regression line is $(-0.3, 1.9)$. What can you conclude?",
        "zh": "某回归直线斜率的 95% 置信区间为 $(-0.3, 1.9)$。你能得出什么结论？"
      },
      "choices": [
        "There is strong evidence of a positive linear relationship",
        "The true slope is definitely $0$",
        "We do not have convincing evidence of a linear relationship, since $0$ is a plausible value for the slope",
        "The correlation between $x$ and $y$ must be $0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Because the interval contains $0$, a slope of $0$ (no linear relationship) is plausible, so we fail to reject $H_0: \\beta = 0$ at the 5% level. This does not prove the slope equals $0$ exactly; it only means $0$ cannot be ruled out.",
        "zh": "由于区间包含 $0$，斜率为 $0$（无线性关系）是合理的，因此在 5% 水平下不能拒绝 $H_0: \\beta = 0$。这并不能证明斜率恰好为 $0$，只说明不能排除 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 95% confidence interval for a slope has margin of error $0.30$, computed with $t^* = 2.00$. Find the standard error of the slope $\\text{SE}_b$. Round to 2 decimal places.",
        "zh": "某斜率的 95% 置信区间的误差幅度为 $0.30$，使用 $t^* = 2.00$ 计算。求斜率的标准误 $\\text{SE}_b$。保留两位小数。"
      },
      "answer": "0.15",
      "accept": [
        "0.150"
      ],
      "explanation": {
        "en": "Since margin of error $= t^* \\cdot \\text{SE}_b$, solve $\\text{SE}_b = \\dfrac{0.30}{2.00} = 0.15$.",
        "zh": "由于误差幅度 $= t^* \\cdot \\text{SE}_b$，解得 $\\text{SE}_b = \\dfrac{0.30}{2.00} = 0.15$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A least-squares line predicts $\\widehat{\\text{height}} = 5 + 2.3(\\text{days})$ for a growing plant. Which statement correctly interprets the slope in context?",
        "zh": "某生长植物的最小二乘直线为 $\\widehat{\\text{height}} = 5 + 2.3(\\text{days})$。下列哪句正确地在背景下解释了斜率？"
      },
      "choices": [
        "The plant is $2.3$ units tall on day $0$",
        "The correlation between height and days is $2.3$",
        "Each one-unit increase in height corresponds to $2.3$ more days",
        "For each additional day, the predicted height increases by $2.3$ units, on average"
      ],
      "answer": 3,
      "explanation": {
        "en": "The slope is the predicted change in the response ($y$, height) per one-unit increase in the explanatory variable ($x$, days): $+2.3$ units per day. The value at day $0$ is the intercept ($5$), and the slope is not a correlation nor a change in $x$ per unit $y$.",
        "zh": "斜率是解释变量（$x$，天数）每增加一个单位时响应变量（$y$，高度）的预测变化：每天 $+2.3$ 个单位。第 $0$ 天的值是截距（$5$），斜率既不是相关系数，也不是 $y$ 每单位对应的 $x$ 变化。"
      }
    }
  ]
}
