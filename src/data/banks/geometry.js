export default {
  "foundations/points-lines-planes": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is an undefined term in geometry?",
        "zh": "下列哪一项是几何中的不定义术语（原始概念）？"
      },
      "choices": [
        "Point",
        "Angle",
        "Segment",
        "Triangle"
      ],
      "answer": 0,
      "explanation": {
        "en": "Point, line, and plane are the undefined (primitive) terms; everything else is built from them. A segment is defined using two points and the line between them, so it is a defined term, not a primitive one.",
        "zh": "点、线、面是不定义术语（原始概念），其余概念都由它们构建。线段是用两点及其之间的直线来定义的，属于已定义术语，而非原始概念。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Points that lie on the same line are called:",
        "zh": "位于同一条直线上的点称为："
      },
      "choices": [
        "Coplanar",
        "Collinear",
        "Congruent",
        "Concurrent"
      ],
      "answer": 1,
      "explanation": {
        "en": "Collinear means on one line. A common mix-up is coplanar, which means lying in the same plane, not the same line.",
        "zh": "共线（collinear）指在同一条直线上。常见的混淆是共面（coplanar），它指在同一平面内，而不是同一直线上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many points are needed to determine a unique line?",
        "zh": "确定唯一一条直线需要几个点？"
      },
      "choices": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answer": 2,
      "explanation": {
        "en": "Exactly two distinct points determine one line. A single point has infinitely many lines through it, so one point is not enough.",
        "zh": "两个不同的点确定唯一一条直线。经过单个点有无数条直线，所以一个点是不够的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the minimum number of non-collinear points needed to determine a unique plane?",
        "zh": "确定唯一一个平面至少需要几个不共线的点？"
      },
      "choices": [
        "Four",
        "Two",
        "One",
        "Three"
      ],
      "answer": 3,
      "explanation": {
        "en": "Three non-collinear points determine exactly one plane. Two points only determine a line, since infinitely many planes can contain that line.",
        "zh": "三个不共线的点确定唯一一个平面。两个点只能确定一条直线，因为有无数个平面都包含这条直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When two distinct planes intersect, their intersection is a:",
        "zh": "当两个不同的平面相交时，它们的交集是一个："
      },
      "choices": [
        "Line",
        "Point",
        "Plane",
        "Ray"
      ],
      "answer": 0,
      "explanation": {
        "en": "Two distinct intersecting planes meet in a line. Thinking the answer is a single point confuses plane–plane intersection with line–line intersection.",
        "zh": "两个相交的不同平面相交于一条直线。认为答案是单个点，是把面与面的相交和线与线的相交混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which notation names a ray that starts at $A$ and passes through $B$?",
        "zh": "下列哪种记号表示以 $A$ 为端点并经过 $B$ 的射线？"
      },
      "choices": [
        "$\\overline{AB}$",
        "$\\overrightarrow{AB}$",
        "$\\overleftrightarrow{AB}$",
        "$\\overleftarrow{AB}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A ray has one endpoint and extends forever the other way; $\\overrightarrow{AB}$ starts at $A$. The bar $\\overline{AB}$ denotes a segment with two endpoints, which is a different figure.",
        "zh": "射线有一个端点，向另一方向无限延伸；$\\overrightarrow{AB}$ 从 $A$ 出发。上横线 $\\overline{AB}$ 表示有两个端点的线段，是不同的图形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The symbol $\\overleftrightarrow{PQ}$ represents a:",
        "zh": "记号 $\\overleftrightarrow{PQ}$ 表示一个："
      },
      "choices": [
        "Segment",
        "Ray",
        "Line",
        "Point"
      ],
      "answer": 2,
      "explanation": {
        "en": "Arrows on both ends mean the figure extends infinitely in both directions, so it is a line. A segment would use a plain bar over the letters instead.",
        "zh": "两端都有箭头表示图形向两个方向无限延伸，因此是直线。线段则会在字母上方用一条不带箭头的横线表示。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ray $\\overrightarrow{ST}$ and ray $\\overrightarrow{TS}$ are:",
        "zh": "射线 $\\overrightarrow{ST}$ 与射线 $\\overrightarrow{TS}$ 是："
      },
      "choices": [
        "The same ray",
        "Opposite in name but identical",
        "Different rays",
        "Both segments"
      ],
      "answer": 2,
      "explanation": {
        "en": "The first letter of a ray is its endpoint, so $\\overrightarrow{ST}$ starts at $S$ while $\\overrightarrow{TS}$ starts at $T$; they point opposite ways and are different rays. Assuming the order of letters does not matter is the usual error.",
        "zh": "射线的第一个字母是端点，所以 $\\overrightarrow{ST}$ 从 $S$ 出发，而 $\\overrightarrow{TS}$ 从 $T$ 出发；它们方向相反，是不同的射线。认为字母顺序无所谓是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line and a plane that is not parallel to it will intersect in:",
        "zh": "一条直线与一个和它不平行的平面相交于："
      },
      "choices": [
        "Exactly one point",
        "A line",
        "Two points",
        "A ray"
      ],
      "answer": 0,
      "explanation": {
        "en": "A line not lying in a plane and not parallel to it pierces the plane at exactly one point. Getting a whole line would only happen if the line lay entirely within the plane.",
        "zh": "一条不在平面内且不与之平行的直线，恰好在一点穿过该平面。只有当直线完全位于平面内时，交集才会是整条直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about a segment $\\overline{XY}$ is true?",
        "zh": "关于线段 $\\overline{XY}$，下列哪种说法正确？"
      },
      "choices": [
        "It extends forever past $X$",
        "It has exactly two endpoints",
        "It has one endpoint",
        "It has no endpoints"
      ],
      "answer": 1,
      "explanation": {
        "en": "A segment is the part of a line between two endpoints, so it has exactly two. Saying it has one endpoint describes a ray, not a segment.",
        "zh": "线段是直线上位于两个端点之间的部分，因此恰有两个端点。说它只有一个端点描述的是射线，而不是线段。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Points $A$, $B$, and $C$ lie in a single flat surface. These points are best described as:",
        "zh": "点 $A$、$B$、$C$ 位于同一个平坦表面上。这些点最恰当的描述是："
      },
      "choices": [
        "Non-coplanar",
        "Collinear only",
        "Coplanar",
        "Skew"
      ],
      "answer": 2,
      "explanation": {
        "en": "Points in the same plane are coplanar. Calling them collinear would additionally require them to be on one line, which is not stated here.",
        "zh": "位于同一平面内的点是共面的。称它们共线还需要它们在同一条直线上，而题目并未说明这一点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines that intersect do so in how many points?",
        "zh": "两条相交的直线相交于几个点？"
      },
      "choices": [
        "Zero",
        "Infinitely many",
        "Exactly two",
        "Exactly one"
      ],
      "answer": 3,
      "explanation": {
        "en": "Two distinct straight lines can cross at exactly one point. Getting infinitely many points would mean the two lines are actually the same line.",
        "zh": "两条不同的直线最多相交于一个点。若得到无数个交点，则说明这两条直线其实是同一条直线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many points determine a unique line? Enter a whole number.",
        "zh": "确定唯一一条直线需要几个点？请填写整数。"
      },
      "answer": "2",
      "accept": [
        "2",
        "two",
        "2.0",
        "两个",
        "两",
        "二"
      ],
      "explanation": {
        "en": "Two distinct points determine exactly one line. One point alone allows infinitely many lines through it.",
        "zh": "两个不同的点恰好确定一条直线。仅有一个点则可以有无数条直线经过它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the minimum number of non-collinear points that determine a plane? Enter a whole number.",
        "zh": "确定一个平面至少需要几个不共线的点？请填写整数。"
      },
      "answer": "3",
      "accept": [
        "3",
        "three",
        "3.0",
        "三个",
        "三",
        "3个"
      ],
      "explanation": {
        "en": "Three non-collinear points fix exactly one plane. Two points only fix a line, which infinitely many planes can share.",
        "zh": "三个不共线的点确定唯一一个平面。两个点只能确定一条直线，而无数个平面都可以包含这条直线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank: The intersection of two distinct planes is a ____. (one word)",
        "zh": "填空：两个不同平面的交集是一条 ____。（一个词）"
      },
      "answer": "line",
      "accept": [
        "line",
        "Line",
        "straight line",
        "直线",
        "线",
        "一条直线"
      ],
      "explanation": {
        "en": "Two distinct planes that meet share a full line. A single point would be the result of a line meeting a plane, not two planes meeting.",
        "zh": "两个相交的不同平面共有一整条直线。单个点是直线与平面相交的结果，而不是两个平面相交的结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the undefined term that has no dimension (no length, width, or height). (one word)",
        "zh": "说出没有维度（没有长、宽、高）的那个不定义术语。（一个词）"
      },
      "answer": "point",
      "accept": [
        "point",
        "Point",
        "a point",
        "点",
        "一个点"
      ],
      "explanation": {
        "en": "A point marks a location and has zero dimension. A line, by contrast, has one dimension (length), so it is not the dimensionless term.",
        "zh": "点标记一个位置，维度为零。相比之下，直线有一维（长度），所以它不是那个没有维度的术语。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A figure with exactly two endpoints is called a ____. (one word)",
        "zh": "恰好有两个端点的图形称为 ____。（一个词）"
      },
      "answer": "segment",
      "accept": [
        "segment",
        "Segment",
        "line segment",
        "线段",
        "段"
      ],
      "explanation": {
        "en": "A segment is bounded by two endpoints. A ray has only one endpoint, so it does not fit a two-endpoint description.",
        "zh": "线段由两个端点界定。射线只有一个端点，所以不符合两个端点的描述。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "True or false: Through any two distinct points there is exactly one line. Answer true or false.",
        "zh": "判断对错：经过任意两个不同的点恰好有一条直线。请回答 对 或 错。"
      },
      "answer": "true",
      "accept": [
        "true",
        "True",
        "T",
        "yes",
        "对",
        "正确",
        "真"
      ],
      "explanation": {
        "en": "This is a basic postulate: two points determine exactly one line. Believing many lines fit through two fixed points ignores that the second point locks the direction.",
        "zh": "这是一条基本公设：两点确定唯一一条直线。认为经过两个固定点可以有多条直线，忽略了第二个点已经锁定了方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many endpoints does a ray have? Enter a whole number.",
        "zh": "一条射线有几个端点？请填写整数。"
      },
      "answer": "1",
      "accept": [
        "1",
        "one",
        "1.0",
        "一个",
        "一",
        "一个端点"
      ],
      "explanation": {
        "en": "A ray has one endpoint and extends without end in the other direction. A segment, having two endpoints, is the figure people confuse it with.",
        "zh": "射线有一个端点，向另一方向无限延伸。人们常把它与有两个端点的线段混淆。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank: Points all lying in the same plane are said to be ____. (one word)",
        "zh": "填空：都位于同一平面内的点称为 ____。（一个词）"
      },
      "answer": "coplanar",
      "accept": [
        "coplanar",
        "Coplanar",
        "co-planar",
        "共面",
        "共面的"
      ],
      "explanation": {
        "en": "Coplanar means sharing one plane. Collinear is the tempting wrong term, but it specifically means sharing one line.",
        "zh": "共面（coplanar）指位于同一平面。共线（collinear）是容易误选的术语，但它特指位于同一条直线上。"
      }
    }
  ],
  "foundations/segment-angle-addition": [
    {
      "type": "mc",
      "question": {
        "en": "Point $B$ is between $A$ and $C$ on a line. If $AB = 7$ and $BC = 15$, find $AC$.",
        "zh": "点 $B$ 在直线上位于 $A$ 与 $C$ 之间。若 $AB = 7$，$BC = 15$，求 $AC$。"
      },
      "choices": [
        "22",
        "15",
        "8",
        "30"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the Segment Addition Postulate, $AC = AB + BC = 7 + 15 = 22$. Subtracting the parts instead of adding them gives the wrong difference of $8$.",
        "zh": "根据线段加法公设，$AC = AB + BC = 7 + 15 = 22$。若用相减而不是相加，会得到错误的差 $8$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ray $\\overrightarrow{OB}$ lies in the interior of $\\angle AOC$. If $m\\angle AOB = 28^\\circ$ and $m\\angle BOC = 52^\\circ$, find $m\\angle AOC$.",
        "zh": "射线 $\\overrightarrow{OB}$ 在 $\\angle AOC$ 内部。若 $m\\angle AOB = 28^\\circ$，$m\\angle BOC = 52^\\circ$，求 $m\\angle AOC$。"
      },
      "choices": [
        "$24^\\circ$",
        "$80^\\circ$",
        "$1456^\\circ$",
        "$104^\\circ$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the Angle Addition Postulate, $m\\angle AOC = 28^\\circ + 52^\\circ = 80^\\circ$. Multiplying the two measures instead of adding them produces a nonsensical large value.",
        "zh": "根据角加法公设，$m\\angle AOC = 28^\\circ + 52^\\circ = 80^\\circ$。若把两个角度相乘而不是相加，会得到一个无意义的大数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $R$ is between $P$ and $Q$. If $PR = 2x$, $RQ = 3x$, and $PQ = 25$, find $x$.",
        "zh": "点 $R$ 位于 $P$ 与 $Q$ 之间。若 $PR = 2x$，$RQ = 3x$，$PQ = 25$，求 $x$。"
      },
      "choices": [
        "25",
        "10",
        "5",
        "3"
      ],
      "answer": 2,
      "explanation": {
        "en": "Add the parts: $2x + 3x = 25$, so $5x = 25$ and $x = 5$. Setting one piece equal to the whole ($2x = 25$) ignores that both pieces sum to $PQ$.",
        "zh": "把两部分相加：$2x + 3x = 25$，所以 $5x = 25$，$x = 5$。若令某一部分等于整体（$2x = 25$），就忽略了两部分之和才等于 $PQ$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two segments are congruent if and only if they have equal:",
        "zh": "两条线段全等，当且仅当它们具有相等的："
      },
      "choices": [
        "midpoints",
        "angles",
        "endpoints",
        "lengths"
      ],
      "answer": 3,
      "explanation": {
        "en": "Congruent segments are defined as having the same length. Sharing endpoints is not required; two segments in different places can still be congruent.",
        "zh": "全等线段的定义是长度相等。并不要求端点相同；位于不同位置的两条线段仍可以全等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ray $\\overrightarrow{BD}$ bisects $\\angle ABC$. If $m\\angle ABD = 37^\\circ$, find $m\\angle ABC$.",
        "zh": "射线 $\\overrightarrow{BD}$ 平分 $\\angle ABC$。若 $m\\angle ABD = 37^\\circ$，求 $m\\angle ABC$。"
      },
      "choices": [
        "$74^\\circ$",
        "$18.5^\\circ$",
        "$37^\\circ$",
        "$111^\\circ$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A bisector splits the angle into two equal halves, so the whole angle is twice one half: $2 \\times 37^\\circ = 74^\\circ$. Halving instead of doubling gives $18.5^\\circ$, which reverses the relationship.",
        "zh": "角平分线把角分成相等的两半，所以整个角是一半的两倍：$2 \\times 37^\\circ = 74^\\circ$。若做除以二而不是乘以二，会得到 $18.5^\\circ$，正好颠倒了关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$M$ is the midpoint of $\\overline{AB}$. If $AM = x + 3$ and $MB = 2x - 1$, find $x$.",
        "zh": "$M$ 是 $\\overline{AB}$ 的中点。若 $AM = x + 3$，$MB = 2x - 1$，求 $x$。"
      },
      "choices": [
        "2",
        "4",
        "8",
        "-4"
      ],
      "answer": 1,
      "explanation": {
        "en": "A midpoint makes the two halves equal: $x + 3 = 2x - 1$, so $x = 4$. Adding the two expressions and setting the sum to zero misuses the midpoint condition, which requires the halves to be equal, not opposite.",
        "zh": "中点使两半相等：$x + 3 = 2x - 1$，所以 $x = 4$。把两个表达式相加并令其等于零，误用了中点条件；中点要求两半相等，而不是互为相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A midpoint divides a segment into two segments that are:",
        "zh": "中点把一条线段分成两条："
      },
      "choices": [
        "parallel",
        "perpendicular",
        "congruent",
        "adjacent"
      ],
      "answer": 2,
      "explanation": {
        "en": "The midpoint produces two segments of equal length, which makes them congruent. Perpendicular describes a right-angle relationship, which is unrelated to a point splitting one straight segment.",
        "zh": "中点产生两条长度相等的线段，因此它们全等。垂直描述的是直角关系，与一个点把一条直线段分开无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $S$ is between $R$ and $T$. If $RS = 3x + 2$, $ST = x$, and $RT = 18$, find $x$.",
        "zh": "点 $S$ 位于 $R$ 与 $T$ 之间。若 $RS = 3x + 2$，$ST = x$，$RT = 18$，求 $x$。"
      },
      "choices": [
        "2",
        "20",
        "16",
        "4"
      ],
      "answer": 3,
      "explanation": {
        "en": "Add the two parts to the whole: $(3x + 2) + x = 18$, so $4x = 16$ and $x = 4$. Forgetting the constant $+2$ and solving $4x = 18$ gives a non-integer that does not fit.",
        "zh": "把两部分之和等于整体：$(3x + 2) + x = 18$，所以 $4x = 16$，$x = 4$。若漏掉常数 $+2$ 而去解 $4x = 18$，会得到不符合的非整数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ray $\\overrightarrow{QS}$ bisects $\\angle PQR$. If $m\\angle PQS = (4x)^\\circ$ and $m\\angle SQR = (2x + 10)^\\circ$, find $x$.",
        "zh": "射线 $\\overrightarrow{QS}$ 平分 $\\angle PQR$。若 $m\\angle PQS = (4x)^\\circ$，$m\\angle SQR = (2x + 10)^\\circ$，求 $x$。"
      },
      "choices": [
        "5",
        "2.5",
        "10",
        "15"
      ],
      "answer": 0,
      "explanation": {
        "en": "A bisector makes the two angles equal: $4x = 2x + 10$, so $2x = 10$ and $x = 5$. Adding the two expressions and setting them to a straight angle assumes the parts total $180^\\circ$, which the problem never states.",
        "zh": "角平分线使两个角相等：$4x = 2x + 10$，所以 $2x = 10$，$x = 5$。若把两个表达式相加并令其等于平角，就假设了两部分之和为 $180^\\circ$，而题目并未这样说明。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $D$ is in the interior of $\\angle ABC$, the Angle Addition Postulate states that $m\\angle ABD + m\\angle DBC$ equals:",
        "zh": "若 $D$ 在 $\\angle ABC$ 内部，角加法公设指出 $m\\angle ABD + m\\angle DBC$ 等于："
      },
      "choices": [
        "$m\\angle ABD$",
        "$m\\angle ABC$",
        "$m\\angle DBC$",
        "$90^\\circ$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The interior ray splits the whole angle into the two parts, so the parts add to $m\\angle ABC$. Assuming the sum is always $90^\\circ$ wrongly treats every such angle as a right angle.",
        "zh": "内部射线把整个角分成两部分，所以两部分之和等于 $m\\angle ABC$。若假设其和总是 $90^\\circ$，就错误地把每个这样的角都当成直角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $B$ is between $A$ and $C$. If $AC = 40$, $AB = x + 5$, and $BC = 2x - 1$, find $x$.",
        "zh": "点 $B$ 位于 $A$ 与 $C$ 之间。若 $AC = 40$，$AB = x + 5$，$BC = 2x - 1$，求 $x$。"
      },
      "choices": [
        "4",
        "36",
        "12",
        "-12"
      ],
      "answer": 2,
      "explanation": {
        "en": "By segment addition, $(x + 5) + (2x - 1) = 40$, so $3x + 4 = 40$ and $x = 12$. Setting one part equal to the whole ($x + 5 = 40$) ignores that both parts sum to $AC$.",
        "zh": "根据线段加法，$(x + 5) + (2x - 1) = 40$，所以 $3x + 4 = 40$，$x = 12$。若令一部分等于整体（$x + 5 = 40$），就忽略了两部分之和才等于 $AC$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ray $\\overrightarrow{OC}$ bisects straight angle $\\angle AOB$ (a straight angle measures $180^\\circ$). Find $m\\angle AOC$.",
        "zh": "射线 $\\overrightarrow{OC}$ 平分平角 $\\angle AOB$（平角为 $180^\\circ$）。求 $m\\angle AOC$。"
      },
      "choices": [
        "$45^\\circ$",
        "$360^\\circ$",
        "$180^\\circ$",
        "$90^\\circ$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Bisecting $180^\\circ$ gives two equal halves of $90^\\circ$ each. Leaving the answer as $180^\\circ$ forgets that a bisector cuts the angle in half.",
        "zh": "把 $180^\\circ$ 平分得到两个相等的 $90^\\circ$。若把答案留作 $180^\\circ$，就忘了平分线把角分成两半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $B$ is between $A$ and $C$. If $AB = 14$ and $BC = 9$, find $AC$.",
        "zh": "点 $B$ 位于 $A$ 与 $C$ 之间。若 $AB = 14$，$BC = 9$，求 $AC$。"
      },
      "answer": "23",
      "accept": [
        "23",
        "23.0",
        "AC=23",
        "23 units"
      ],
      "explanation": {
        "en": "By the Segment Addition Postulate, $AC = 14 + 9 = 23$. Subtracting to get $5$ misuses the postulate, which adds the two parts.",
        "zh": "根据线段加法公设，$AC = 14 + 9 = 23$。若相减得到 $5$，就误用了该公设，公设是把两部分相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Ray $\\overrightarrow{OB}$ is interior to $\\angle AOC$. If $m\\angle AOC = 120^\\circ$ and $m\\angle AOB = 75^\\circ$, find $m\\angle BOC$ in degrees.",
        "zh": "射线 $\\overrightarrow{OB}$ 在 $\\angle AOC$ 内部。若 $m\\angle AOC = 120^\\circ$，$m\\angle AOB = 75^\\circ$，求 $m\\angle BOC$（度）。"
      },
      "answer": "45",
      "accept": [
        "45",
        "45.0",
        "45 degrees",
        "45°",
        "45度"
      ],
      "explanation": {
        "en": "Subtract the known part from the whole: $120^\\circ - 75^\\circ = 45^\\circ$. Adding the two given measures would overshoot past the whole angle.",
        "zh": "用整体减去已知部分：$120^\\circ - 75^\\circ = 45^\\circ$。若把两个已知角度相加，会超过整个角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$M$ is the midpoint of $\\overline{AB}$. If $AM = 3x$ and $MB = x + 8$, find $x$.",
        "zh": "$M$ 是 $\\overline{AB}$ 的中点。若 $AM = 3x$，$MB = x + 8$，求 $x$。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "x=4"
      ],
      "explanation": {
        "en": "The midpoint makes the halves equal: $3x = x + 8$, so $2x = 8$ and $x = 4$. Adding the expressions instead of equating them misreads the midpoint condition.",
        "zh": "中点使两半相等：$3x = x + 8$，所以 $2x = 8$，$x = 4$。若把表达式相加而不是令其相等，就误解了中点条件。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Ray $\\overrightarrow{BD}$ bisects $\\angle ABC$. If $m\\angle ABC = 68^\\circ$, find $m\\angle ABD$ in degrees.",
        "zh": "射线 $\\overrightarrow{BD}$ 平分 $\\angle ABC$。若 $m\\angle ABC = 68^\\circ$，求 $m\\angle ABD$（度）。"
      },
      "answer": "34",
      "accept": [
        "34",
        "34.0",
        "34 degrees",
        "34°",
        "34度"
      ],
      "explanation": {
        "en": "A bisector halves the angle: $68^\\circ \\div 2 = 34^\\circ$. Doubling to $136^\\circ$ reverses the bisector relationship.",
        "zh": "角平分线把角分成两半：$68^\\circ \\div 2 = 34^\\circ$。若翻倍成 $136^\\circ$，就颠倒了平分关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $R$ is between $P$ and $Q$. If $PR = 5x$, $RQ = 2x$, and $PQ = 42$, find $x$.",
        "zh": "点 $R$ 位于 $P$ 与 $Q$ 之间。若 $PR = 5x$，$RQ = 2x$，$PQ = 42$，求 $x$。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "x=6"
      ],
      "explanation": {
        "en": "Add the parts: $5x + 2x = 42$, so $7x = 42$ and $x = 6$. Using only one term, such as $5x = 42$, ignores the rest of the segment.",
        "zh": "把两部分相加：$5x + 2x = 42$，所以 $7x = 42$，$x = 6$。若只用一项，例如 $5x = 42$，就忽略了线段的其余部分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Point $S$ is between $R$ and $T$. If $RS = 12$ and $RT = 30$, find $ST$.",
        "zh": "点 $S$ 位于 $R$ 与 $T$ 之间。若 $RS = 12$，$RT = 30$，求 $ST$。"
      },
      "answer": "18",
      "accept": [
        "18",
        "18.0",
        "ST=18",
        "18 units"
      ],
      "explanation": {
        "en": "Subtract the known part from the whole: $ST = 30 - 12 = 18$. Adding to get $42$ would make a part longer than the whole segment.",
        "zh": "用整体减去已知部分：$ST = 30 - 12 = 18$。若相加得到 $42$，会使一部分比整条线段还长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Ray $\\overrightarrow{QS}$ bisects $\\angle PQR$. If $m\\angle PQS = (3x + 5)^\\circ$ and $m\\angle SQR = (x + 15)^\\circ$, find $x$.",
        "zh": "射线 $\\overrightarrow{QS}$ 平分 $\\angle PQR$。若 $m\\angle PQS = (3x + 5)^\\circ$，$m\\angle SQR = (x + 15)^\\circ$，求 $x$。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "x=5"
      ],
      "explanation": {
        "en": "A bisector makes the two angles equal: $3x + 5 = x + 15$, so $2x = 10$ and $x = 5$. Adding the expressions and setting the sum to $90^\\circ$ assumes a right angle that is not given.",
        "zh": "角平分线使两个角相等：$3x + 5 = x + 15$，所以 $2x = 10$，$x = 5$。若把表达式相加并令其等于 $90^\\circ$，就假设了题中未给出的直角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$M$ is the midpoint of $\\overline{AB}$. If $AM = x + 2$ and $MB = 2x - 3$, find the total length $AB$.",
        "zh": "$M$ 是 $\\overline{AB}$ 的中点。若 $AM = x + 2$，$MB = 2x - 3$，求总长 $AB$。"
      },
      "answer": "14",
      "accept": [
        "14",
        "14.0",
        "AB=14",
        "14 units"
      ],
      "explanation": {
        "en": "First equate halves: $x + 2 = 2x - 3$, so $x = 5$ and each half is $7$; then $AB = 7 + 7 = 14$. Stopping at $x = 5$ and reporting it as the length forgets to convert $x$ back into a distance.",
        "zh": "先令两半相等：$x + 2 = 2x - 3$，所以 $x = 5$，每一半为 $7$；于是 $AB = 7 + 7 = 14$。若停在 $x = 5$ 并当作长度，就忘了把 $x$ 换算回距离。"
      }
    }
  ],
  "foundations/distance-and-midpoint": [
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(0, 0)$ and $(3, 4)$.",
        "zh": "求 $(0, 0)$ 与 $(3, 4)$ 之间的距离。"
      },
      "choices": [
        "5",
        "7",
        "25",
        "1"
      ],
      "answer": 0,
      "explanation": {
        "en": "Distance $= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Adding the coordinates to get $7$ skips the squaring and the square root.",
        "zh": "距离 $= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$。若把坐标相加得到 $7$，就跳过了平方和开方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the midpoint of the segment with endpoints $(2, 4)$ and $(6, 10)$.",
        "zh": "求以 $(2, 4)$ 和 $(6, 10)$ 为端点的线段的中点。"
      },
      "choices": [
        "$(8, 14)$",
        "$(4, 7)$",
        "$(4, 14)$",
        "$(2, 3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Midpoint $= \\left(\\frac{2+6}{2}, \\frac{4+10}{2}\\right) = (4, 7)$. Adding the coordinates without dividing by $2$ gives $(8, 14)$.",
        "zh": "中点 $= \\left(\\frac{2+6}{2}, \\frac{4+10}{2}\\right) = (4, 7)$。若把坐标相加却不除以 $2$，会得到 $(8, 14)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(1, 2)$ and $(4, 6)$.",
        "zh": "求 $(1, 2)$ 与 $(4, 6)$ 之间的距离。"
      },
      "choices": [
        "25",
        "7",
        "5",
        "3.5"
      ],
      "answer": 2,
      "explanation": {
        "en": "Distance $= \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5$. Forgetting the square root leaves $25$, which is the squared distance, not the distance.",
        "zh": "距离 $= \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5$。若忘记开方，会剩下 $25$，那是距离的平方，而不是距离本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the midpoint of the segment with endpoints $(-3, 5)$ and $(7, -1)$.",
        "zh": "求以 $(-3, 5)$ 和 $(7, -1)$ 为端点的线段的中点。"
      },
      "choices": [
        "$(4, 4)$",
        "$(-5, 3)$",
        "$(5, 2)$",
        "$(2, 2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Midpoint $= \\left(\\frac{-3+7}{2}, \\frac{5+(-1)}{2}\\right) = (2, 2)$. Subtracting the coordinates instead of averaging them gives a wrong pair like $(-5, 3)$.",
        "zh": "中点 $= \\left(\\frac{-3+7}{2}, \\frac{5+(-1)}{2}\\right) = (2, 2)$。若把坐标相减而不是取平均，会得到像 $(-5, 3)$ 这样的错误坐标。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$M(5, 7)$ is the midpoint of $\\overline{AB}$, and $A = (2, 3)$. Find endpoint $B$.",
        "zh": "$M(5, 7)$ 是 $\\overline{AB}$ 的中点，且 $A = (2, 3)$。求端点 $B$。"
      },
      "choices": [
        "$(8, 11)$",
        "$(3, 4)$",
        "$(3.5, 5)$",
        "$(7, 10)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each coordinate of $B$ is $2M - A$: $x = 2(5) - 2 = 8$, $y = 2(7) - 3 = 11$, so $B = (8, 11)$. Averaging $M$ and $A$ instead finds a point between them, not the far endpoint.",
        "zh": "$B$ 的每个坐标为 $2M - A$：$x = 2(5) - 2 = 8$，$y = 2(7) - 3 = 11$，所以 $B = (8, 11)$。若改为对 $M$ 和 $A$ 取平均，得到的是它们之间的点，而不是另一端点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(1, 1)$ and $(6, 13)$.",
        "zh": "求 $(1, 1)$ 与 $(6, 13)$ 之间的距离。"
      },
      "choices": [
        "17",
        "13",
        "5",
        "169"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distance $= \\sqrt{(6-1)^2 + (13-1)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Adding the legs $5 + 12 = 17$ ignores that the distance is the hypotenuse, not the sum of the legs.",
        "zh": "距离 $= \\sqrt{(6-1)^2 + (13-1)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$。若把两直角边相加 $5 + 12 = 17$，就忽略了距离是斜边，而非两直角边之和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$?",
        "zh": "下列哪个表达式给出从 $(x_1, y_1)$ 到 $(x_2, y_2)$ 的线段中点？"
      },
      "choices": [
        "$(x_1+x_2, y_1+y_2)$",
        "$\\left(\\frac{x_2-x_1}{2}, \\frac{y_2-y_1}{2}\\right)$",
        "$\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$",
        "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The midpoint averages each coordinate: $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$. The formula with differences and a square root is the distance formula, which returns a length, not a point.",
        "zh": "中点是对每个坐标取平均：$\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$。带有差与根号的公式是距离公式，返回的是长度而不是一个点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(-6, 2)$ and $(2, -4)$.",
        "zh": "求 $(-6, 2)$ 与 $(2, -4)$ 之间的距离。"
      },
      "choices": [
        "14",
        "2",
        "100",
        "10"
      ],
      "answer": 3,
      "explanation": {
        "en": "Distance $= \\sqrt{(2-(-6))^2 + (-4-2)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$. Leaving off the square root gives $100$, the squared distance.",
        "zh": "距离 $= \\sqrt{(2-(-6))^2 + (-4-2)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$。若不开方，会得到 $100$，即距离的平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$M(0, 0)$ is the midpoint of $\\overline{AB}$, and $A = (-4, 6)$. Find endpoint $B$.",
        "zh": "$M(0, 0)$ 是 $\\overline{AB}$ 的中点，且 $A = (-4, 6)$。求端点 $B$。"
      },
      "choices": [
        "$(4, -6)$",
        "$(-2, 3)$",
        "$(-8, 12)$",
        "$(4, 6)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$B = 2M - A = (2(0)-(-4),\\ 2(0)-6) = (4, -6)$. Keeping the same signs as $A$ misses that a midpoint at the origin sends $B$ to the opposite side.",
        "zh": "$B = 2M - A = (2(0)-(-4),\\ 2(0)-6) = (4, -6)$。若保留与 $A$ 相同的符号，就忽略了中点在原点会把 $B$ 送到相反的一侧。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the midpoint of the segment with endpoints $(-5, -8)$ and $(3, 2)$.",
        "zh": "求以 $(-5, -8)$ 和 $(3, 2)$ 为端点的线段的中点。"
      },
      "choices": [
        "$(-8, -10)$",
        "$(-1, -3)$",
        "$(4, 5)$",
        "$(-1, -5)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Midpoint $= \\left(\\frac{-5+3}{2}, \\frac{-8+2}{2}\\right) = (-1, -3)$. Averaging the $x$ values correctly but mishandling the $y$ sum is what produces $(-1, -5)$.",
        "zh": "中点 $= \\left(\\frac{-5+3}{2}, \\frac{-8+2}{2}\\right) = (-1, -3)$。若 $x$ 取平均正确却把 $y$ 之和算错，就会得到 $(-1, -5)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the distance between $(x_1, y_1)$ and $(x_2, y_2)$?",
        "zh": "下列哪个表达式给出 $(x_1, y_1)$ 与 $(x_2, y_2)$ 之间的距离？"
      },
      "choices": [
        "$(x_2-x_1)^2+(y_2-y_1)^2$",
        "$\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$",
        "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$",
        "$|x_2-x_1|+|y_2-y_1|$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Distance is the square root of the sum of squared differences: $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Dropping the square root gives the squared distance instead of the actual length.",
        "zh": "距离是各坐标差平方和的平方根：$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$。若去掉根号，得到的是距离的平方，而不是真实长度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the distance between $(3, 7)$ and $(3, 2)$.",
        "zh": "求 $(3, 7)$ 与 $(3, 2)$ 之间的距离。"
      },
      "choices": [
        "9",
        "-5",
        "25",
        "5"
      ],
      "answer": 3,
      "explanation": {
        "en": "The points share an $x$-value, so the distance is the vertical gap $|7 - 2| = 5$. A distance can never be negative, so a signed value is not a valid length.",
        "zh": "两点的 $x$ 坐标相同，所以距离就是竖直方向的差 $|7 - 2| = 5$。距离不可能为负，因此带符号的值不是有效长度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the distance between $(0, 0)$ and $(6, 8)$.",
        "zh": "求 $(0, 0)$ 与 $(6, 8)$ 之间的距离。"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "10 units"
      ],
      "explanation": {
        "en": "Distance $= \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Adding $6 + 8 = 14$ skips squaring and taking the root.",
        "zh": "距离 $= \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$。若相加 $6 + 8 = 14$，就跳过了平方和开方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the midpoint of the segment with endpoints $(2, 6)$ and $(8, 4)$. Write your answer as $(x, y)$.",
        "zh": "求以 $(2, 6)$ 和 $(8, 4)$ 为端点的线段的中点。请以 $(x, y)$ 形式作答。"
      },
      "answer": "(5, 5)",
      "accept": [
        "(5, 5)",
        "(5,5)",
        "5, 5",
        "5,5",
        "(5.0, 5.0)"
      ],
      "explanation": {
        "en": "Midpoint $= \\left(\\frac{2+8}{2}, \\frac{6+4}{2}\\right) = (5, 5)$. Adding without dividing by $2$ would give $(10, 10)$.",
        "zh": "中点 $= \\left(\\frac{2+8}{2}, \\frac{6+4}{2}\\right) = (5, 5)$。若相加却不除以 $2$，会得到 $(10, 10)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the distance between $(1, 1)$ and $(4, 5)$.",
        "zh": "求 $(1, 1)$ 与 $(4, 5)$ 之间的距离。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "5 units"
      ],
      "explanation": {
        "en": "Distance $= \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Forgetting the square root leaves $25$.",
        "zh": "距离 $= \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$。若忘记开方，会剩下 $25$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$M(4, 6)$ is the midpoint of $\\overline{AB}$, and $A = (1, 2)$. Find endpoint $B$. Write your answer as $(x, y)$.",
        "zh": "$M(4, 6)$ 是 $\\overline{AB}$ 的中点，且 $A = (1, 2)$。求端点 $B$。请以 $(x, y)$ 形式作答。"
      },
      "answer": "(7, 10)",
      "accept": [
        "(7, 10)",
        "(7,10)",
        "7, 10",
        "7,10",
        "(7.0, 10.0)"
      ],
      "explanation": {
        "en": "$B = 2M - A = (2(4)-1,\\ 2(6)-2) = (7, 10)$. Averaging $M$ with $A$ instead lands between them rather than at the far end.",
        "zh": "$B = 2M - A = (2(4)-1,\\ 2(6)-2) = (7, 10)$。若改为对 $M$ 与 $A$ 取平均，会落在它们之间，而不是另一端。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-coordinate of the midpoint of the segment with endpoints $(-3, 4)$ and $(9, 4)$.",
        "zh": "求以 $(-3, 4)$ 和 $(9, 4)$ 为端点的线段中点的 $x$ 坐标。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "x=3"
      ],
      "explanation": {
        "en": "The midpoint $x$-value averages the two $x$-coordinates: $\\frac{-3+9}{2} = 3$. Subtracting to get the run of $12$ answers a different question than the midpoint.",
        "zh": "中点的 $x$ 值是两个 $x$ 坐标的平均：$\\frac{-3+9}{2} = 3$。若相减得到水平差 $12$，回答的是与中点不同的问题。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the distance between $(-2, 3)$ and $(4, 3)$.",
        "zh": "求 $(-2, 3)$ 与 $(4, 3)$ 之间的距离。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "6 units"
      ],
      "explanation": {
        "en": "The points share a $y$-value, so the distance is the horizontal gap $|4 - (-2)| = 6$. Ignoring the negative sign and computing $4 - 2 = 2$ undercounts the span.",
        "zh": "两点的 $y$ 坐标相同，所以距离是水平方向的差 $|4 - (-2)| = 6$。若忽略负号只算 $4 - 2 = 2$，会少算跨度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$M(-1, -1)$ is the midpoint of $\\overline{AB}$, and $A = (3, 5)$. Find endpoint $B$. Write your answer as $(x, y)$.",
        "zh": "$M(-1, -1)$ 是 $\\overline{AB}$ 的中点，且 $A = (3, 5)$。求端点 $B$。请以 $(x, y)$ 形式作答。"
      },
      "answer": "(-5, -7)",
      "accept": [
        "(-5, -7)",
        "(-5,-7)",
        "-5, -7",
        "-5,-7",
        "(-5.0, -7.0)"
      ],
      "explanation": {
        "en": "$B = 2M - A = (2(-1)-3,\\ 2(-1)-5) = (-5, -7)$. Just negating $A$ to $(-3, -5)$ ignores that the midpoint is not at the origin.",
        "zh": "$B = 2M - A = (2(-1)-3,\\ 2(-1)-5) = (-5, -7)$。若只是把 $A$ 取相反数得到 $(-3, -5)$，就忽略了中点并不在原点。"
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
        "13",
        "13.0",
        "13 units"
      ],
      "explanation": {
        "en": "Distance $= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Adding $5 + 12 = 17$ treats the legs as if they lay along one straight line.",
        "zh": "距离 $= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$。若相加 $5 + 12 = 17$，就把两直角边当成在同一条直线上了。"
      }
    }
  ],
  "reasoning-and-proof/inductive-deductive-conditionals": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is an example of inductive reasoning?",
        "zh": "以下哪一项是归纳推理的例子？"
      },
      "choices": [
        "Observing that the first five terms are even and concluding every term is even",
        "Using a definition to prove a specific angle is a right angle",
        "Applying the Pythagorean Theorem to compute a missing side",
        "Substituting a value into a proven formula"
      ],
      "answer": 0,
      "explanation": {
        "en": "Inductive reasoning moves from specific observations to a general conjecture, so noticing a pattern in the first few terms and generalizing is inductive. The other options start from an accepted rule, definition, or theorem and reach a specific result, which is deductive reasoning.",
        "zh": "归纳推理是从具体观察得出一般性猜想，所以从前几项发现规律再推广就是归纳。其他选项都是从已知规则、定义或定理出发得到具体结果，那属于演绎推理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Conjecture: 'The product of two positive numbers is always greater than each of the two numbers.' Which value is a counterexample?",
        "zh": "猜想：“两个正数的乘积总是大于这两个数中的每一个。”下列哪个情形是反例？"
      },
      "choices": [
        "$3 \\times 4 = 12$",
        "$0.5 \\times 0.5 = 0.25$",
        "$10 \\times 2 = 20$",
        "$5 \\times 5 = 25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A single counterexample disproves a conjecture. With $0.5 \\times 0.5 = 0.25$, the product is smaller than each factor, so the claim fails. The tempting mistake is to only test whole numbers greater than 1, where the product does grow, and miss that fractions between 0 and 1 break the rule.",
        "zh": "只要一个反例就能推翻猜想。$0.5 \\times 0.5 = 0.25$ 的乘积比每个因数都小，猜想不成立。常见错误是只用大于1的整数去验证，结果乘积确实变大，从而忽略了0到1之间的小数会破坏这个规律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the conditional 'If a figure is a square, then it has four right angles,' what is the hypothesis?",
        "zh": "在条件命题“如果一个图形是正方形，那么它有四个直角”中，假设（前提）是什么？"
      },
      "choices": [
        "A figure has four sides",
        "It has four right angles",
        "A figure is a square",
        "The figure is a rectangle"
      ],
      "answer": 2,
      "explanation": {
        "en": "In an 'if p, then q' statement the hypothesis is the 'if' part, p. Here that is 'a figure is a square.' A common error is to grab the 'then' part, 'it has four right angles,' which is actually the conclusion, not the hypothesis.",
        "zh": "在“如果 p，那么 q”的命题中，假设是“如果”后面的 p，这里就是“一个图形是正方形”。常见错误是抓住“那么”后面的“它有四个直角”，但那其实是结论，而不是假设。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the converse of 'If an animal is a dog, then it is a mammal'?",
        "zh": "命题“如果一个动物是狗，那么它是哺乳动物”的逆命题是什么？"
      },
      "choices": [
        "If an animal is not a dog, then it is not a mammal",
        "If an animal is not a mammal, then it is not a dog",
        "If an animal is a dog, then it is not a mammal",
        "If an animal is a mammal, then it is a dog"
      ],
      "answer": 3,
      "explanation": {
        "en": "The converse swaps the hypothesis and conclusion of 'if p, then q' to get 'if q, then p,' giving 'if an animal is a mammal, then it is a dog.' Negating both parts instead produces the inverse, and negating-and-swapping produces the contrapositive, so those choices confuse converse with a different related statement.",
        "zh": "逆命题是把“如果 p，那么 q”的假设和结论互换，得到“如果 q，那么 p”，即“如果一个动物是哺乳动物，那么它是狗”。若把两部分都否定则得到否命题，若既否定又互换则得到逆否命题，那些选项把逆命题和别的相关命题混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of 'If it is raining, then the ground is wet'?",
        "zh": "命题“如果正在下雨，那么地面是湿的”的否命题是什么？"
      },
      "choices": [
        "If it is not raining, then the ground is not wet",
        "If the ground is not wet, then it is not raining",
        "If the ground is wet, then it is raining",
        "If it is raining, then the ground is not wet"
      ],
      "answer": 0,
      "explanation": {
        "en": "The inverse negates both the hypothesis and the conclusion while keeping their order: 'if not p, then not q,' giving 'if it is not raining, then the ground is not wet.' Swapping the two parts instead gives the converse, and negating after swapping gives the contrapositive.",
        "zh": "否命题是保持顺序不变，把假设和结论都否定，即“如果非 p，那么非 q”，得到“如果没有下雨，那么地面不是湿的”。若是互换两部分则得到逆命题，若互换后再否定则得到逆否命题。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the contrapositive of 'If a number is divisible by 6, then it is divisible by 3'?",
        "zh": "命题“如果一个数能被6整除，那么它能被3整除”的逆否命题是什么？"
      },
      "choices": [
        "If a number is divisible by 3, then it is divisible by 6",
        "If a number is not divisible by 3, then it is not divisible by 6",
        "If a number is not divisible by 6, then it is not divisible by 3",
        "If a number is divisible by 6, then it is not divisible by 3"
      ],
      "answer": 1,
      "explanation": {
        "en": "The contrapositive both swaps and negates: from 'if p, then q' it forms 'if not q, then not p,' giving 'if a number is not divisible by 3, then it is not divisible by 6.' Negating without swapping gives the inverse, and swapping without negating gives the converse.",
        "zh": "逆否命题既要互换又要否定：由“如果 p，那么 q”得到“如果非 q，那么非 p”，即“如果一个数不能被3整除，那么它不能被6整除”。只否定不互换得到否命题，只互换不否定得到逆命题。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given 'If a polygon is a triangle, then it has three sides' and the fact 'Figure T is a triangle,' the Law of Detachment lets you conclude:",
        "zh": "已知“如果一个多边形是三角形，那么它有三条边”以及事实“图形 T 是三角形”，由分离律（假言推理）可以得出："
      },
      "choices": [
        "Any figure with three sides is Figure T",
        "Figure T is not a triangle",
        "Figure T has three sides",
        "Figure T has three angles only if it is a triangle"
      ],
      "answer": 2,
      "explanation": {
        "en": "The Law of Detachment says if 'p implies q' is true and p is true, then q is true. Since T satisfies the hypothesis, it must satisfy the conclusion: T has three sides. Concluding anything about the reverse direction misuses the law by treating the converse as if it were given.",
        "zh": "分离律是说：若“p 推出 q”成立且 p 成立，则 q 成立。因为 T 满足假设，它就一定满足结论：T 有三条边。若对反方向下结论，就是把逆命题当作已知，误用了分离律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Law of Syllogism, which conclusion follows from 'If it snows, then school is canceled' and 'If school is canceled, then I sleep in'?",
        "zh": "根据三段论定律（假言三段论），由“如果下雪，那么停课”和“如果停课，那么我睡懒觉”可以得出哪个结论？"
      },
      "choices": [
        "If I sleep in, then it snows",
        "If school is canceled, then it snows",
        "If it does not snow, then I do not sleep in",
        "If it snows, then I sleep in"
      ],
      "answer": 3,
      "explanation": {
        "en": "The Law of Syllogism chains 'p implies q' and 'q implies r' into 'p implies r,' giving 'if it snows, then I sleep in.' Reversing the chain or negating both parts produces statements that are not guaranteed by the two given conditionals.",
        "zh": "三段论定律把“p 推出 q”和“q 推出 r”连成“p 推出 r”，得到“如果下雪，那么我睡懒觉”。把链条反过来或把两部分都否定，得到的命题并不能由给定的两个条件命题保证成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A biconditional 'p if and only if q' is true exactly when:",
        "zh": "双条件命题“p 当且仅当 q”在什么情况下为真？"
      },
      "choices": [
        "Both 'if p, then q' and 'if q, then p' are true",
        "At least one of the statement or its converse is true",
        "The conditional 'if p, then q' is true, regardless of its converse",
        "p and q are both false"
      ],
      "answer": 0,
      "explanation": {
        "en": "A biconditional is true only when a conditional and its converse are both true, so p and q always have the same truth value. Accepting it when just one direction holds treats a one-way implication as if it went both ways, which is the usual error.",
        "zh": "双条件命题只有在原命题和它的逆命题都为真时才成立，因此 p 和 q 的真假总是一致。若只要一个方向成立就承认它，就是把单向的蕴含当成双向，这是常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A student sees $1, 4, 9, 16, 25$ and predicts the next term is $36$. This prediction is an example of:",
        "zh": "一位学生看到 $1, 4, 9, 16, 25$，预测下一项是 $36$。这个预测是哪种推理的例子？"
      },
      "choices": [
        "Deductive reasoning from a definition",
        "Inductive reasoning from a pattern",
        "Using the Law of Detachment",
        "Proving a biconditional"
      ],
      "answer": 1,
      "explanation": {
        "en": "Spotting the perfect-square pattern and extending it is inductive reasoning: a general conjecture drawn from observed cases. It is not deductive, since no proven rule was applied first; treating a pattern-based guess as a logical proof is the common misconception here.",
        "zh": "发现完全平方数的规律并延伸下去属于归纳推理：从观察到的情形得出一般性猜想。它不是演绎推理，因为并没有先应用已被证明的规则；把基于规律的猜测当成逻辑证明就是这里常见的误解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement is always logically equivalent to a true conditional 'if p, then q'?",
        "zh": "对于一个为真的条件命题“如果 p，那么 q”，下列哪个命题总是与它逻辑等价？"
      },
      "choices": [
        "Its converse",
        "Its inverse",
        "Its contrapositive",
        "The negation of its hypothesis"
      ],
      "answer": 2,
      "explanation": {
        "en": "A conditional and its contrapositive always share the same truth value, so they are logically equivalent. The converse and inverse are equivalent to each other but not necessarily to the original, so assuming the converse must also be true is the classic error.",
        "zh": "条件命题和它的逆否命题总是真假一致，因此逻辑等价。逆命题和否命题彼此等价，但不一定与原命题等价，所以认为逆命题也一定为真是典型的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given 'If x is even, then x + 1 is odd' is true, but the converse is being assumed true as well. What is the flaw in assuming the converse holds automatically?",
        "zh": "已知“如果 x 是偶数，那么 x+1 是奇数”为真，但有人默认它的逆命题也为真。默认逆命题自动成立，错在哪里？"
      },
      "choices": [
        "The converse of a true statement is never true",
        "A conditional and its converse always have opposite truth values",
        "The converse is the same statement written backward, so it adds nothing",
        "A true conditional guarantees only that its contrapositive is true, not its converse"
      ],
      "answer": 3,
      "explanation": {
        "en": "A true conditional only guarantees its contrapositive; the converse must be checked separately and may be true or false. Claiming the converse is never true, or always opposite, overstates the relationship, and the converse is a genuinely different statement, not just a rewording.",
        "zh": "一个为真的条件命题只能保证它的逆否命题为真；逆命题必须单独验证，可能真也可能假。说逆命题永远不真或总是相反，都把关系说过头了，而逆命题确实是另一个命题，并非只是换种说法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using inductive reasoning, what is the next term in the sequence $2, 4, 8, 16, 32, \\ldots$?",
        "zh": "用归纳推理，数列 $2, 4, 8, 16, 32, \\ldots$ 的下一项是多少？"
      },
      "answer": "64",
      "accept": [
        "64",
        "64.0",
        "+64"
      ],
      "explanation": {
        "en": "Each term doubles the previous one, so after 32 comes $32 \\times 2 = 64$. A frequent slip is to add a constant difference instead of noticing the multiplicative pattern, which would wrongly give 48 or similar.",
        "zh": "每一项都是前一项的两倍，所以32之后是 $32 \\times 2 = 64$。常见的失误是去加一个固定差，而没有发现是成倍增长，那样会错误地得到48之类的结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using inductive reasoning, what is the next term in the sequence $1, 4, 9, 16, 25, \\ldots$?",
        "zh": "用归纳推理，数列 $1, 4, 9, 16, 25, \\ldots$ 的下一项是多少？"
      },
      "answer": "36",
      "accept": [
        "36",
        "36.0",
        "+36"
      ],
      "explanation": {
        "en": "These are the perfect squares $1^2, 2^2, 3^2, \\ldots$, so the next is $6^2 = 36$. Looking only at the differences (3, 5, 7, 9) and adding the next odd number 11 to 25 also gives 36, confirming the answer either way.",
        "zh": "这些是完全平方数 $1^2, 2^2, 3^2, \\ldots$，所以下一项是 $6^2 = 36$。只看差（3、5、7、9）再把下一个奇数11加到25上同样得到36，两种方法都能验证答案。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What one-word term names a statement of the form 'p if and only if q'?",
        "zh": "形如“p 当且仅当 q”的命题叫什么（用一个术语回答）？"
      },
      "answer": "biconditional",
      "accept": [
        "biconditional",
        "Biconditional",
        "biconditional statement",
        "双条件",
        "双条件命题",
        "双向条件"
      ],
      "explanation": {
        "en": "A statement combining a conditional and its converse with 'if and only if' is a biconditional, true only when both directions hold. Calling it merely a 'conditional' misses that it asserts both 'p implies q' and 'q implies p.'",
        "zh": "用“当且仅当”把条件命题和它的逆命题合起来的命题就是双条件命题，只有两个方向都成立时才为真。若只叫它“条件命题”，就忽略了它同时断言“p 推出 q”和“q 推出 p”。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What one-word term names the statement formed by both swapping and negating the hypothesis and conclusion of a conditional?",
        "zh": "把条件命题的假设和结论既互换又否定所得到的命题，叫什么（用一个术语回答）？"
      },
      "answer": "contrapositive",
      "accept": [
        "contrapositive",
        "Contrapositive",
        "the contrapositive",
        "逆否命题",
        "逆否"
      ],
      "explanation": {
        "en": "Swapping and negating both parts gives the contrapositive, which is always logically equivalent to the original. Negating only (without swapping) gives the inverse, and swapping only gives the converse, so mixing up these operations is the usual error.",
        "zh": "把两部分既互换又否定得到的是逆否命题，它总是与原命题逻辑等价。只否定不互换得到否命题，只互换不否定得到逆命题，所以把这些操作弄混是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the law of logic used here: 'If a shape is a rhombus, then it is a parallelogram. Shape R is a rhombus. Therefore Shape R is a parallelogram.' (one word)",
        "zh": "指出这里用到的逻辑定律：“如果一个图形是菱形，那么它是平行四边形。图形 R 是菱形。所以图形 R 是平行四边形。”（用一个词回答）"
      },
      "answer": "detachment",
      "accept": [
        "detachment",
        "Detachment",
        "law of detachment",
        "Law of Detachment",
        "分离律",
        "假言推理",
        "分离"
      ],
      "explanation": {
        "en": "A true conditional plus a true hypothesis yielding the conclusion is the Law of Detachment. It is not the Law of Syllogism, which instead chains two conditionals together rather than acting on a single confirmed hypothesis.",
        "zh": "一个为真的条件命题加上为真的假设，从而得到结论，这就是分离律。它不是三段论定律；三段论是把两个条件命题连接起来，而不是对单个已确认的假设进行推断。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Conjecture: 'Every prime number is odd.' Give the single number that is a counterexample.",
        "zh": "猜想：“每个质数都是奇数。”请给出唯一一个反例数字。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "+2",
        "two",
        "二"
      ],
      "explanation": {
        "en": "The number 2 is prime yet even, so it disproves the conjecture. The common mistake is assuming 'prime' implies 'odd' because most primes are odd, overlooking the single even prime.",
        "zh": "数字2是质数却是偶数，所以推翻了猜想。常见错误是因为大多数质数是奇数，就以为“质数”意味着“奇数”，而忽略了唯一的偶质数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By the Law of Syllogism: 'If a > b, then b < a' and 'If b < a, then a - b > 0.' If a > b, then a - b is greater than what number?",
        "zh": "根据三段论定律：“如果 a > b，那么 b < a”且“如果 b < a，那么 a - b > 0”。如果 a > b，那么 a - b 大于哪个数？"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0",
        "zero",
        "零"
      ],
      "explanation": {
        "en": "Chaining the two conditionals gives 'if a > b, then a - b > 0,' so a - b is greater than 0. The reasoning links the first hypothesis to the last conclusion; stopping at the middle statement instead of following the chain to the end is the typical slip.",
        "zh": "把两个条件命题连起来得到“如果 a > b，那么 a - b > 0”，所以 a - b 大于0。推理是把第一个假设连到最后一个结论；停在中间那句而没有把链条走到底，是常见的失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A student computes $1 + 3 + 5 + 7 = 16$ and conjectures that the sum of the first $n$ odd numbers equals $n^2$. Using this conjecture, what is the sum of the first 5 odd numbers?",
        "zh": "一位学生算出 $1 + 3 + 5 + 7 = 16$，并猜想前 $n$ 个奇数之和等于 $n^2$。用这个猜想，前5个奇数之和是多少？"
      },
      "answer": "25",
      "accept": [
        "25",
        "25.0",
        "+25"
      ],
      "explanation": {
        "en": "By the conjecture the sum of the first 5 odd numbers is $5^2 = 25$, and indeed $1 + 3 + 5 + 7 + 9 = 25$. A common error is to square the last odd number (9) instead of the count (5), which would wrongly give 81.",
        "zh": "根据猜想，前5个奇数之和是 $5^2 = 25$，实际上 $1 + 3 + 5 + 7 + 9 = 25$。常见错误是把最后一个奇数（9）平方，而不是把个数（5）平方，那样会错误地得到81。"
      }
    }
  ],
  "reasoning-and-proof/two-column-proofs": [
    {
      "type": "mc",
      "question": {
        "en": "Which property of equality justifies the step 'If $x + 5 = 12$, then $x = 7$'?",
        "zh": "哪条等式性质说明了这一步“如果 $x + 5 = 12$，那么 $x = 7$”？"
      },
      "choices": [
        "Subtraction Property of Equality",
        "Multiplication Property of Equality",
        "Addition Property of Equality",
        "Division Property of Equality"
      ],
      "answer": 0,
      "explanation": {
        "en": "You subtract 5 from both sides, so this is the Subtraction Property of Equality. The common mix-up is to name the operation you 'undo' (addition) instead of the operation you actually perform on both sides, which is subtraction.",
        "zh": "两边同时减去5，所以这是减法性质。常见的混淆是说出你要“抵消”的运算（加法），而不是你在两边实际执行的运算，也就是减法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property justifies 'If $AB = CD$, then $CD = AB$'?",
        "zh": "哪条性质说明了“如果 $AB = CD$，那么 $CD = AB$”？"
      },
      "choices": [
        "Reflexive Property of Equality",
        "Symmetric Property of Equality",
        "Transitive Property of Equality",
        "Substitution Property"
      ],
      "answer": 1,
      "explanation": {
        "en": "Reversing the sides of an equation is the Symmetric Property: if $a = b$ then $b = a$. The Reflexive Property would say a quantity equals itself, and the Transitive Property links three quantities, so those describe different situations.",
        "zh": "把等式两边互换是对称性质：若 $a = b$ 则 $b = a$。自反性质说的是某量等于它自身，传递性质连接三个量，所以那些描述的是不同的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an algebraic proof, what reason justifies rewriting $2(x + 3)$ as $2x + 6$?",
        "zh": "在代数证明中，把 $2(x + 3)$ 改写成 $2x + 6$ 的依据是什么？"
      },
      "choices": [
        "Reflexive Property",
        "Substitution Property",
        "Distributive Property",
        "Transitive Property"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying the outside factor across the sum is the Distributive Property. Substitution would replace a value with an equal one from another equation, not expand a product, so it does not justify this expansion step.",
        "zh": "把外面的因数乘进括号里的和，用的是分配律。代入性质是用另一个等式中相等的值去替换，而不是展开乘积，所以它无法作为这一展开步骤的依据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property justifies 'If $AB = CD$ and $CD = EF$, then $AB = EF$'?",
        "zh": "哪条性质说明了“如果 $AB = CD$ 且 $CD = EF$，那么 $AB = EF$”？"
      },
      "choices": [
        "Symmetric Property of Equality",
        "Addition Property of Equality",
        "Reflexive Property of Equality",
        "Transitive Property of Equality"
      ],
      "answer": 3,
      "explanation": {
        "en": "Linking two equalities through a shared middle quantity is the Transitive Property: if $a = b$ and $b = c$, then $a = c$. The Symmetric Property only reverses a single equation and does not chain three quantities together.",
        "zh": "通过一个共同的中间量把两个等式连起来，用的是传递性质：若 $a = b$ 且 $b = c$，则 $a = c$。对称性质只是把一个等式反过来，并不能把三个量串在一起。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property justifies the statement '$m\\angle A = m\\angle A$'?",
        "zh": "哪条性质说明了“$m\\angle A = m\\angle A$”？"
      },
      "choices": [
        "Reflexive Property of Equality",
        "Transitive Property of Equality",
        "Symmetric Property of Equality",
        "Substitution Property"
      ],
      "answer": 0,
      "explanation": {
        "en": "A quantity being equal to itself is the Reflexive Property. This step often appears in proofs to state a shared side or angle; confusing it with the Symmetric Property, which swaps two different sides of an equation, is the usual error.",
        "zh": "一个量等于它自身就是自反性质。这一步常出现在证明中，用来陈述公共的边或角；把它和对称性质混淆——对称性质是互换等式的两个不同边——是常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a standard two-column proof, what belongs in the left column?",
        "zh": "在标准的两栏证明中，左栏应写什么？"
      },
      "choices": [
        "Statements",
        "Reasons",
        "Diagrams",
        "Only the given information"
      ],
      "answer": 0,
      "explanation": {
        "en": "The left column lists the statements (each claim in order), while the right column lists the reason justifying each one. Putting reasons on the left reverses the standard layout, and the given is just the first statement, not the whole column.",
        "zh": "左栏列出各个陈述（按顺序的每个结论），右栏列出每一步的依据。把依据写在左边就颠倒了标准格式，而已知只是第一个陈述，并不是整栏内容。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Point $B$ is between $A$ and $C$. What reason justifies the statement '$AB + BC = AC$'?",
        "zh": "点 $B$ 在 $A$ 和 $C$ 之间。哪条依据说明了“$AB + BC = AC$”？"
      },
      "choices": [
        "Angle Addition Postulate",
        "Reflexive Property",
        "Segment Addition Postulate",
        "Substitution Property"
      ],
      "answer": 2,
      "explanation": {
        "en": "When a point lies between two others, the parts sum to the whole by the Segment Addition Postulate. The Angle Addition Postulate is the analogous rule for angle measures, not segment lengths, so it applies to a different kind of figure.",
        "zh": "当一点位于另外两点之间时，各部分之和等于整体，这就是线段加法公理。角加法公理是关于角度的类似规则，而不是线段长度，所以它适用于不同类型的图形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property justifies the step 'If $3x = 15$, then $x = 5$'?",
        "zh": "哪条性质说明了这一步“如果 $3x = 15$，那么 $x = 5$”？"
      },
      "choices": [
        "Multiplication Property of Equality",
        "Distributive Property",
        "Subtraction Property of Equality",
        "Division Property of Equality"
      ],
      "answer": 3,
      "explanation": {
        "en": "Dividing both sides by 3 is the Division Property of Equality. Naming multiplication describes the inverse operation rather than the one actually applied to both sides, which is the frequent mistake here.",
        "zh": "两边同时除以3，用的是除法性质。说成乘法是描述了逆运算，而不是在两边实际执行的运算，这是这里常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a two-column algebraic proof that starts from a given equation, what is the reason for the very first statement?",
        "zh": "在从一个给定等式开始的两栏代数证明中，第一个陈述的依据通常是什么？"
      },
      "choices": [
        "Given",
        "Substitution Property",
        "Reflexive Property",
        "Definition of congruence"
      ],
      "answer": 0,
      "explanation": {
        "en": "The first line restates the information provided, so its reason is 'Given.' Reaching for a property like Substitution on line one skips the fact that no earlier step exists yet to justify a transformation.",
        "zh": "第一行是把题目提供的信息重新写出来，所以它的依据是“已知”。在第一行就搬出代入等性质，忽略了此时还没有前一步可以用来支撑变形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property justifies 'If $m\\angle 1 = m\\angle 2$ and $m\\angle 2 = 40^\\circ$, then $m\\angle 1 = 40^\\circ$'?",
        "zh": "哪条性质说明了“如果 $m\\angle 1 = m\\angle 2$ 且 $m\\angle 2 = 40^\\circ$，那么 $m\\angle 1 = 40^\\circ$”？"
      },
      "choices": [
        "Reflexive Property",
        "Substitution Property",
        "Angle Addition Postulate",
        "Distributive Property"
      ],
      "answer": 1,
      "explanation": {
        "en": "Replacing $m\\angle 2$ with its known value $40^\\circ$ inside another equation is the Substitution Property. The Angle Addition Postulate combines adjacent angle measures into a whole and does not apply to simply substituting an equal value.",
        "zh": "把 $m\\angle 2$ 用它已知的值 $40^\\circ$ 代入另一个等式，用的是代入性质。角加法公理是把相邻角的度数合成整体，并不适用于单纯地替换一个相等的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property justifies the step 'If $\\frac{x}{4} = 3$, then $x = 12$'?",
        "zh": "哪条性质说明了这一步“如果 $\\frac{x}{4} = 3$，那么 $x = 12$”？"
      },
      "choices": [
        "Division Property of Equality",
        "Subtraction Property of Equality",
        "Multiplication Property of Equality",
        "Addition Property of Equality"
      ],
      "answer": 2,
      "explanation": {
        "en": "Both sides are multiplied by 4 to undo the division, so this is the Multiplication Property of Equality. Naming division points to the operation being undone rather than the operation performed, which is the common slip.",
        "zh": "两边同时乘以4以抵消除法，所以这是乘法性质。说成除法是指向了被抵消的运算，而不是实际执行的运算，这是常见的失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ray $BD$ lies in the interior of $\\angle ABC$. What reason justifies '$m\\angle ABD + m\\angle DBC = m\\angle ABC$'?",
        "zh": "射线 $BD$ 在 $\\angle ABC$ 的内部。哪条依据说明了“$m\\angle ABD + m\\angle DBC = m\\angle ABC$”？"
      },
      "choices": [
        "Segment Addition Postulate",
        "Symmetric Property",
        "Reflexive Property",
        "Angle Addition Postulate"
      ],
      "answer": 3,
      "explanation": {
        "en": "An interior ray splits an angle so the two parts sum to the whole by the Angle Addition Postulate. The Segment Addition Postulate is the parallel rule for lengths along a line, so it applies to segments rather than angle measures.",
        "zh": "一条内部射线把角分成两部分，两部分之和等于整体，这就是角加法公理。线段加法公理是关于直线上长度的类似规则，所以它适用于线段而不是角度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$ in a two-column proof: $2x + 3 = 11$. What is $x$?",
        "zh": "在两栏证明中解出 $x$：$2x + 3 = 11$。$x$ 等于多少？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "+4",
        "x=4"
      ],
      "explanation": {
        "en": "Subtract 3 from both sides to get $2x = 8$, then divide by 2 to get $x = 4$. Dividing before subtracting the 3 mishandles the order of the inverse operations and leads to a wrong value.",
        "zh": "两边减3得到 $2x = 8$，再除以2得到 $x = 4$。若在减去3之前就先除，会弄错逆运算的顺序，导致答案出错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$ in a two-column proof: $5x - 4 = 21$. What is $x$?",
        "zh": "在两栏证明中解出 $x$：$5x - 4 = 21$。$x$ 等于多少？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5",
        "x=5"
      ],
      "explanation": {
        "en": "Add 4 to both sides to get $5x = 25$, then divide by 5 to get $x = 5$. Forgetting to add 4 first and dividing 21 by 5 directly gives a non-integer and an incorrect result.",
        "zh": "两边加4得到 $5x = 25$，再除以5得到 $x = 5$。若忘了先加4，直接用21除以5，会得到一个非整数和错误的结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the property of equality stated by '$a = a$.' (one word)",
        "zh": "“$a = a$”体现的是哪条等式性质？（用一个词回答）"
      },
      "answer": "reflexive",
      "accept": [
        "reflexive",
        "Reflexive",
        "reflexive property",
        "Reflexive Property",
        "自反",
        "自反性质"
      ],
      "explanation": {
        "en": "A quantity equal to itself is the Reflexive Property. Confusing it with the Symmetric Property, which reverses two different sides of an equation, is the usual error since both involve equality of the same-looking terms.",
        "zh": "一个量等于它自身就是自反性质。把它和对称性质（把等式的两个不同边互换）混淆是常见错误，因为两者都涉及看似相同项的相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the postulate that justifies '$AB + BC = AC$' when $B$ is between $A$ and $C$. (give the term)",
        "zh": "当 $B$ 在 $A$ 和 $C$ 之间时，说明“$AB + BC = AC$”的公理叫什么？（写出术语）"
      },
      "answer": "Segment Addition Postulate",
      "accept": [
        "Segment Addition Postulate",
        "segment addition postulate",
        "Segment Addition",
        "segment addition",
        "线段加法公理",
        "线段加法"
      ],
      "explanation": {
        "en": "The parts of a segment adding to the whole is the Segment Addition Postulate. Naming the Angle Addition Postulate confuses lengths with angle measures, which is the analogous but distinct rule.",
        "zh": "线段的各部分之和等于整体，这就是线段加法公理。若说成角加法公理，就是把长度和角度弄混，那是类似但不同的规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In segment $AC$, point $B$ is between $A$ and $C$ with $AB = 3x$, $BC = 2x$, and $AC = 25$. Find $x$.",
        "zh": "在线段 $AC$ 上，点 $B$ 在 $A$ 和 $C$ 之间，$AB = 3x$，$BC = 2x$，$AC = 25$。求 $x$。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5",
        "x=5"
      ],
      "explanation": {
        "en": "By the Segment Addition Postulate $3x + 2x = 25$, so $5x = 25$ and $x = 5$. Setting one part equal to the whole (for example $3x = 25$) instead of adding both parts is the common mistake.",
        "zh": "由线段加法公理 $3x + 2x = 25$，所以 $5x = 25$，$x = 5$。把某一部分直接等于整体（例如 $3x = 25$），而不是把两部分相加，是常见的错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the property of equality that lets you go from '$a = b$' to '$a + c = b + c$.' (give the term)",
        "zh": "从“$a = b$”得到“$a + c = b + c$”所依据的等式性质叫什么？（写出术语）"
      },
      "answer": "Addition Property of Equality",
      "accept": [
        "Addition Property of Equality",
        "addition property of equality",
        "Addition Property",
        "addition property",
        "addition",
        "加法性质",
        "等式的加法性质",
        "加法"
      ],
      "explanation": {
        "en": "Adding the same amount to both sides is the Addition Property of Equality. Calling it the Subtraction Property reverses the operation actually being applied to both sides.",
        "zh": "在两边同时加上相同的量，用的是加法性质。若叫它减法性质，就把两边实际执行的运算说反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a two-column proof, the right column holds the justification for each statement. What single word names what goes there?",
        "zh": "在两栏证明中，右栏放的是每个陈述的依据。这一栏放的东西用一个词叫什么？"
      },
      "answer": "reasons",
      "accept": [
        "reasons",
        "Reasons",
        "reason",
        "Reason",
        "依据",
        "理由",
        "根据"
      ],
      "explanation": {
        "en": "The right column lists the reasons that justify each statement. Answering 'statements' describes the left column instead, swapping the two halves of the proof layout.",
        "zh": "右栏列出证明每个陈述的依据（理由）。若回答“陈述”，那是在描述左栏，把证明格式的两半弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$ in a two-column proof: $\\frac{1}{2}x = 9$. What is $x$?",
        "zh": "在两栏证明中解出 $x$：$\\frac{1}{2}x = 9$。$x$ 等于多少？"
      },
      "answer": "18",
      "accept": [
        "18",
        "18.0",
        "+18",
        "x=18"
      ],
      "explanation": {
        "en": "Multiply both sides by 2 to undo the one-half coefficient, giving $x = 18$. Dividing 9 by 2 instead of multiplying treats the coefficient backwards and gives 4.5, which is incorrect.",
        "zh": "两边同时乘以2以抵消二分之一的系数，得到 $x = 18$。若用9除以2而不是乘，就把系数处理反了，会得到4.5，那是错误的。"
      }
    }
  ],
  "parallel-perpendicular-lines/transversals-angle-pairs": [
    {
      "type": "mc",
      "question": {
        "en": "Two parallel lines are cut by a transversal and one angle measures $65^\\circ$. What is the measure of its corresponding angle?",
        "zh": "两条平行线被一条截线所截，其中一个角为 $65^\\circ$。它的同位角是多少度？"
      },
      "choices": [
        "$65^\\circ$",
        "$115^\\circ$",
        "$25^\\circ$",
        "$90^\\circ$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Corresponding angles formed by a transversal cutting parallel lines are congruent, so the angle is $65^\\circ$. Treating the pair as supplementary ($180-65=115$) is the common mistake — that would apply to a same-side (co-interior) pair, not corresponding angles.",
        "zh": "平行线被截线所截时，同位角相等，所以是 $65^\\circ$。把它们当作互补（$180-65=115$）是常见错误——那适用于同旁内角，而不是同位角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two parallel lines are cut by a transversal. One interior angle is $120^\\circ$. What is the measure of its alternate interior angle?",
        "zh": "两条平行线被一条截线所截。一个内角为 $120^\\circ$，它的内错角是多少度？"
      },
      "choices": [
        "$60^\\circ$",
        "$120^\\circ$",
        "$30^\\circ$",
        "$180^\\circ$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Alternate interior angles are congruent when the lines are parallel, so it is $120^\\circ$. Subtracting from $180$ to get $60$ treats the angles as supplementary, which is not the alternate-interior relationship.",
        "zh": "平行线被截时内错角相等，所以是 $120^\\circ$。用 $180$ 减去得到 $60$ 是把它们当作互补，这不是内错角关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two parallel lines are cut by a transversal. One interior angle is $80^\\circ$. What is the measure of the same-side (co-interior) angle?",
        "zh": "两条平行线被一条截线所截。一个内角为 $80^\\circ$，其同旁内角是多少度？"
      },
      "choices": [
        "$10^\\circ$",
        "$80^\\circ$",
        "$100^\\circ$",
        "$260^\\circ$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Same-side interior angles are supplementary when the lines are parallel, so $180-80=100^\\circ$. Answering $80^\\circ$ mistakenly assumes they are congruent, but only alternate and corresponding pairs are congruent.",
        "zh": "平行线被截时同旁内角互补，所以 $180-80=100^\\circ$。回答 $80^\\circ$ 是错误地认为它们相等，但只有内错角和同位角才相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Angles that lie in the same position at each intersection (same side of the transversal, one interior and one exterior) are called what?",
        "zh": "在每个交点处位于相同位置（截线同侧，一个在内一个在外）的角叫什么？"
      },
      "choices": [
        "Alternate interior angles / 内错角",
        "Alternate exterior angles / 外错角",
        "Same-side interior angles / 同旁内角",
        "Corresponding angles / 同位角"
      ],
      "answer": 3,
      "explanation": {
        "en": "Matching-position angles are corresponding angles. Alternate interior angles instead sit on opposite sides of the transversal and between the lines, which is a different location.",
        "zh": "位置相同的角是同位角。内错角则位于截线两侧且在两线之间，是不同的位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When two parallel lines are cut by a transversal, which angle pair is supplementary (not congruent)?",
        "zh": "两条平行线被截线所截时，哪一对角是互补（而非相等）的？"
      },
      "choices": [
        "Same-side interior angles / 同旁内角",
        "Corresponding angles / 同位角",
        "Alternate exterior angles / 外错角",
        "Alternate interior angles / 内错角"
      ],
      "answer": 0,
      "explanation": {
        "en": "Same-side interior angles add to $180^\\circ$. Choosing alternate interior angles is the trap — those are congruent, not supplementary, when lines are parallel.",
        "zh": "同旁内角之和为 $180^\\circ$。选内错角是陷阱——平行时它们相等而非互补。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two parallel lines are cut by a transversal. One exterior angle is $45^\\circ$. What is its alternate exterior angle?",
        "zh": "两条平行线被一条截线所截。一个外角为 $45^\\circ$，它的外错角是多少度？"
      },
      "choices": [
        "$135^\\circ$",
        "$45^\\circ$",
        "$55^\\circ$",
        "$90^\\circ$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Alternate exterior angles are congruent under parallel lines, so $45^\\circ$. Using $180-45=135$ wrongly treats the pair as supplementary.",
        "zh": "平行线下外错角相等，所以 $45^\\circ$。用 $180-45=135$ 是错误地把它们当作互补。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two parallel lines are cut by a transversal. Corresponding angles measure $(2x+10)^\\circ$ and $(3x-20)^\\circ$. Find $x$.",
        "zh": "两条平行线被一条截线所截。同位角分别为 $(2x+10)^\\circ$ 和 $(3x-20)^\\circ$。求 $x$。"
      },
      "choices": [
        "$6$",
        "$10$",
        "$30$",
        "$50$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Corresponding angles are equal: $2x+10=3x-20$, so $x=30$. Setting the sum to $180$ (as if supplementary) would give the wrong value; corresponding angles are congruent, not supplementary.",
        "zh": "同位角相等：$2x+10=3x-20$，所以 $x=30$。把和设为 $180$（当作互补）会得到错误答案；同位角相等而非互补。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two parallel lines are cut by a transversal. Same-side interior angles measure $(x+40)^\\circ$ and $(2x+20)^\\circ$. Find $x$.",
        "zh": "两条平行线被一条截线所截。同旁内角分别为 $(x+40)^\\circ$ 和 $(2x+20)^\\circ$。求 $x$。"
      },
      "choices": [
        "$20$",
        "$60$",
        "$30$",
        "$40$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Same-side interior angles are supplementary: $(x+40)+(2x+20)=180$, so $3x+60=180$ and $x=40$. Setting the two expressions equal (as if congruent) is the common error for this pair.",
        "zh": "同旁内角互补：$(x+40)+(2x+20)=180$，即 $3x+60=180$，$x=40$。把两式设为相等（当作全等）是这类角常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Where are alternate interior angles located?",
        "zh": "内错角位于什么位置？"
      },
      "choices": [
        "Opposite sides of the transversal, between the two lines / 截线两侧，两线之间",
        "Same side of the transversal, between the lines / 截线同侧，两线之间",
        "Opposite sides of the transversal, outside the two lines / 截线两侧，两线之外",
        "In matching corners / 相同位置的角"
      ],
      "answer": 0,
      "explanation": {
        "en": "Alternate interior angles are between the two lines and on opposite sides of the transversal. Angles on opposite sides but outside the lines are alternate exterior angles instead.",
        "zh": "内错角在两线之间且位于截线两侧。若在两线之外的两侧则是外错角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When the two lines cut by a transversal are NOT parallel, corresponding angles are:",
        "zh": "当被截线所截的两条线不平行时，同位角是："
      },
      "choices": [
        "Always congruent / 总是相等",
        "Not necessarily congruent / 不一定相等",
        "Always supplementary / 总是互补",
        "Always right angles / 总是直角"
      ],
      "answer": 1,
      "explanation": {
        "en": "Congruent corresponding angles are guaranteed only when the lines are parallel; without parallelism they may differ. Assuming they are always congruent ignores the parallel requirement.",
        "zh": "只有平行时同位角才一定相等；不平行时它们可能不等。认为总是相等忽视了平行这一前提。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two parallel lines are cut by a transversal and one of the eight angles is $130^\\circ$. Which measure does NOT appear among the eight angles?",
        "zh": "两条平行线被一条截线所截，八个角中有一个是 $130^\\circ$。以下哪个度数不在这八个角中出现？"
      },
      "choices": [
        "$50^\\circ$",
        "$130^\\circ$",
        "$40^\\circ$",
        "$180^\\circ - 130^\\circ$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The eight angles are all either $130^\\circ$ or its supplement $50^\\circ$, so $40^\\circ$ never appears. Picking $50^\\circ$ forgets that the supplement is indeed one of the measures present.",
        "zh": "八个角要么是 $130^\\circ$，要么是它的补角 $50^\\circ$，所以 $40^\\circ$ 不会出现。选 $50^\\circ$ 忽略了补角确实是其中之一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When a transversal crosses two parallel lines, how many distinct angle measures are generally formed?",
        "zh": "当一条截线穿过两条平行线时，通常形成多少种不同的角度数值？"
      },
      "choices": [
        "$1$",
        "$8$",
        "$4$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "There are eight angles, but they collapse into just two distinct measures: an angle and its supplement. Answering $8$ counts the angles rather than the distinct measures.",
        "zh": "共有八个角，但只有两种不同的度数：一个角及其补角。回答 $8$ 是数角的个数而非不同的度数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. One angle is $72^\\circ$. What is the measure (in degrees) of its corresponding angle?",
        "zh": "两条平行线被一条截线所截。一个角为 $72^\\circ$。它的同位角是多少度？"
      },
      "answer": "72",
      "accept": [
        "72",
        "72.0",
        "72°",
        "72 degrees",
        "72度"
      ],
      "explanation": {
        "en": "Corresponding angles are congruent under parallel lines, so the measure equals $72^\\circ$.",
        "zh": "平行线下同位角相等，所以度数等于 $72^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. One interior angle is $95^\\circ$. What is the measure (in degrees) of its alternate interior angle?",
        "zh": "两条平行线被一条截线所截。一个内角为 $95^\\circ$。它的内错角是多少度？"
      },
      "answer": "95",
      "accept": [
        "95",
        "95.0",
        "95°",
        "95 degrees",
        "95度"
      ],
      "explanation": {
        "en": "Alternate interior angles are congruent under parallel lines, so it is $95^\\circ$, not the supplement $85^\\circ$.",
        "zh": "平行线下内错角相等，所以是 $95^\\circ$，而不是补角 $85^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. One interior angle is $118^\\circ$. What is the measure (in degrees) of its same-side interior angle?",
        "zh": "两条平行线被一条截线所截。一个内角为 $118^\\circ$。它的同旁内角是多少度？"
      },
      "answer": "62",
      "accept": [
        "62",
        "62.0",
        "62°",
        "62 degrees",
        "62度"
      ],
      "explanation": {
        "en": "Same-side interior angles are supplementary: $180-118=62^\\circ$. They are not congruent, so $118^\\circ$ would be wrong.",
        "zh": "同旁内角互补：$180-118=62^\\circ$。它们不相等，所以 $118^\\circ$ 是错的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. Corresponding angles measure $4x^\\circ$ and $(3x+15)^\\circ$. Find $x$.",
        "zh": "两条平行线被一条截线所截。同位角分别为 $4x^\\circ$ 和 $(3x+15)^\\circ$。求 $x$。"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "x=15"
      ],
      "explanation": {
        "en": "Corresponding angles are equal: $4x=3x+15$, so $x=15$.",
        "zh": "同位角相等：$4x=3x+15$，所以 $x=15$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. Alternate exterior angles measure $(5x-10)^\\circ$ and $(3x+30)^\\circ$. Find $x$.",
        "zh": "两条平行线被一条截线所截。外错角分别为 $(5x-10)^\\circ$ 和 $(3x+30)^\\circ$。求 $x$。"
      },
      "answer": "20",
      "accept": [
        "20",
        "20.0",
        "x=20"
      ],
      "explanation": {
        "en": "Alternate exterior angles are congruent: $5x-10=3x+30$, so $2x=40$ and $x=20$.",
        "zh": "外错角相等：$5x-10=3x+30$，即 $2x=40$，$x=20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. Same-side interior angles measure $(2x+15)^\\circ$ and $(x+45)^\\circ$. Find $x$.",
        "zh": "两条平行线被一条截线所截。同旁内角分别为 $(2x+15)^\\circ$ 和 $(x+45)^\\circ$。求 $x$。"
      },
      "answer": "40",
      "accept": [
        "40",
        "40.0",
        "x=40"
      ],
      "explanation": {
        "en": "Same-side interior angles are supplementary: $(2x+15)+(x+45)=180$, so $3x+60=180$ and $x=40$.",
        "zh": "同旁内角互补：$(2x+15)+(x+45)=180$，即 $3x+60=180$，$x=40$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. An angle measures $(2x+30)^\\circ$ and its alternate interior angle measures $90^\\circ$. Find $x$.",
        "zh": "两条平行线被一条截线所截。一个角为 $(2x+30)^\\circ$，它的内错角为 $90^\\circ$。求 $x$。"
      },
      "answer": "30",
      "accept": [
        "30",
        "30.0",
        "x=30"
      ],
      "explanation": {
        "en": "Alternate interior angles are equal: $2x+30=90$, so $2x=60$ and $x=30$.",
        "zh": "内错角相等：$2x+30=90$，即 $2x=60$，$x=30$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two parallel lines are cut by a transversal. One angle is $x^\\circ$ and its co-interior (same-side interior) angle is $3x^\\circ$. Find $x$.",
        "zh": "两条平行线被一条截线所截。一个角为 $x^\\circ$，其同旁内角为 $3x^\\circ$。求 $x$。"
      },
      "answer": "45",
      "accept": [
        "45",
        "45.0",
        "x=45"
      ],
      "explanation": {
        "en": "Same-side interior angles are supplementary: $x+3x=180$, so $4x=180$ and $x=45$.",
        "zh": "同旁内角互补：$x+3x=180$，即 $4x=180$，$x=45$。"
      }
    }
  ],
  "parallel-perpendicular-lines/proving-lines-parallel": [
    {
      "type": "mc",
      "question": {
        "en": "Two lines are cut by a transversal. Which condition guarantees the lines are parallel?",
        "zh": "两条直线被一条截线所截。哪个条件能保证这两条线平行？"
      },
      "choices": [
        "A pair of alternate interior angles is congruent / 一对内错角相等",
        "A pair of same-side interior angles is congruent / 一对同旁内角相等",
        "The two lines are both crossed by the transversal / 两条线都被截线穿过",
        "One of the angles is acute / 其中一个角是锐角"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the Alternate Interior Angles Converse, congruent alternate interior angles force the lines parallel. Requiring same-side interior angles to be congruent is wrong — those must be supplementary, not congruent, to prove parallelism.",
        "zh": "由内错角相等的逆定理，内错角相等即可保证两线平行。要求同旁内角相等是错的——它们必须互补而非相等才能证明平行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If two same-side interior angles formed by a transversal are supplementary, then the two lines are:",
        "zh": "如果截线形成的两个同旁内角互补，那么这两条线是："
      },
      "choices": [
        "Perpendicular / 垂直",
        "Parallel / 平行",
        "Skew / 异面",
        "Intersecting at one point / 相交于一点"
      ],
      "answer": 1,
      "explanation": {
        "en": "The Same-Side Interior Angles Converse gives parallel lines when the pair sums to $180^\\circ$. Concluding perpendicular confuses a supplementary relationship with a $90^\\circ$ relationship.",
        "zh": "同旁内角互补的逆定理表明两线平行。得出垂直是把互补关系与 $90^\\circ$ 关系混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a plane, if two lines are both perpendicular to the same line, then the two lines are:",
        "zh": "在同一平面内，如果两条直线都垂直于同一条直线，那么这两条线是："
      },
      "choices": [
        "Perpendicular to each other / 互相垂直",
        "Intersecting / 相交",
        "Parallel / 平行",
        "The same line / 同一条线"
      ],
      "answer": 2,
      "explanation": {
        "en": "Both lines make $90^\\circ$ with the shared line, so their corresponding angles are congruent and the lines are parallel. Saying they are perpendicular to each other misreads the shared-perpendicular setup.",
        "zh": "两条线都与公共直线成 $90^\\circ$，所以同位角相等，两线平行。说它们互相垂直是误解了共同垂直的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines are cut by a transversal. Corresponding angles measure $(2x+30)^\\circ$ and $(4x-10)^\\circ$. For what value of $x$ are the lines parallel?",
        "zh": "两条直线被一条截线所截。同位角分别为 $(2x+30)^\\circ$ 和 $(4x-10)^\\circ$。当 $x$ 取何值时两线平行？"
      },
      "choices": [
        "$10$",
        "$40$",
        "$15$",
        "$20$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Lines are parallel when corresponding angles are equal: $2x+30=4x-10$, so $40=2x$ and $x=20$. Setting the sum to $180$ treats them as supplementary, which is not the corresponding-angle condition.",
        "zh": "同位角相等时两线平行：$2x+30=4x-10$，即 $40=2x$，$x=20$。把和设为 $180$ 是当作互补，这不是同位角的条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which angle relationship does NOT by itself prove that two lines are parallel?",
        "zh": "以下哪种角的关系本身不能证明两条线平行？"
      },
      "choices": [
        "Congruent vertical angles / 相等的对顶角",
        "Congruent corresponding angles / 相等的同位角",
        "Congruent alternate interior angles / 相等的内错角",
        "Supplementary same-side interior angles / 互补的同旁内角"
      ],
      "answer": 0,
      "explanation": {
        "en": "Vertical angles are always congruent at a single point regardless of any parallelism, so they prove nothing about two lines being parallel. The other three are valid converse conditions for parallel lines.",
        "zh": "对顶角在一个交点处总是相等，与是否平行无关，所以它们无法证明两线平行。其余三个都是判定平行的有效逆条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines are cut by a transversal. Alternate exterior angles measure $(3x+20)^\\circ$ and $(5x-10)^\\circ$. For what value of $x$ are the lines parallel?",
        "zh": "两条直线被一条截线所截。外错角分别为 $(3x+20)^\\circ$ 和 $(5x-10)^\\circ$。当 $x$ 取何值时两线平行？"
      },
      "choices": [
        "$10$",
        "$15$",
        "$30$",
        "$20$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Parallel lines require congruent alternate exterior angles: $3x+20=5x-10$, so $30=2x$ and $x=15$. Adding to $180$ would be the same-side (supplementary) approach, not the alternate-exterior one.",
        "zh": "平行要求外错角相等：$3x+20=5x-10$，即 $30=2x$，$x=15$。加起来等于 $180$ 是同旁角（互补）的做法，而非外错角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines are cut by a transversal. Same-side interior angles measure $(x+50)^\\circ$ and $(2x+10)^\\circ$. For what value of $x$ are the lines parallel?",
        "zh": "两条直线被一条截线所截。同旁内角分别为 $(x+50)^\\circ$ 和 $(2x+10)^\\circ$。当 $x$ 取何值时两线平行？"
      },
      "choices": [
        "$30$",
        "$20$",
        "$40$",
        "$60$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Same-side interior angles must be supplementary for parallel lines: $(x+50)+(2x+10)=180$, so $3x+60=180$ and $x=40$. Setting the two equal treats them as congruent, which is not the same-side condition.",
        "zh": "平行时同旁内角必须互补：$(x+50)+(2x+10)=180$，即 $3x+60=180$，$x=40$。把两式设为相等是当作全等，这不是同旁内角的条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A pair of alternate exterior angles measures $88^\\circ$ and $92^\\circ$. Are the two lines parallel?",
        "zh": "一对外错角分别为 $88^\\circ$ 和 $92^\\circ$。这两条线平行吗？"
      },
      "choices": [
        "Yes, because they are supplementary / 是，因为它们互补",
        "Yes, because they are close in value / 是，因为它们数值接近",
        "Cannot be determined / 无法确定",
        "No, because they must be congruent / 否，因为它们必须相等"
      ],
      "answer": 3,
      "explanation": {
        "en": "Alternate exterior angles must be congruent for the lines to be parallel; $88 \\neq 92$, so the lines are not parallel. Being nearly equal or summing near $180$ does not satisfy the congruence requirement.",
        "zh": "外错角必须相等两线才平行；$88 \\neq 92$，所以不平行。数值接近或和接近 $180$ 都不满足相等的要求。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines are each perpendicular to the same transversal. They are parallel because each makes what angle with the transversal, giving congruent corresponding angles?",
        "zh": "两条直线都垂直于同一条截线。它们平行是因为每条线与截线成多少度角，从而使同位角相等？"
      },
      "choices": [
        "$90^\\circ$",
        "$45^\\circ$",
        "$60^\\circ$",
        "$30^\\circ$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Perpendicular means each line meets the transversal at $90^\\circ$; equal $90^\\circ$ corresponding angles prove the lines parallel. Any other angle would not follow from perpendicularity.",
        "zh": "垂直意味着每条线与截线成 $90^\\circ$；相等的 $90^\\circ$ 同位角证明两线平行。其它角度都不符合垂直的定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines are cut by a transversal. Alternate interior angles measure $(6x-5)^\\circ$ and $(4x+15)^\\circ$. For what value of $x$ are the lines parallel?",
        "zh": "两条直线被一条截线所截。内错角分别为 $(6x-5)^\\circ$ 和 $(4x+15)^\\circ$。当 $x$ 取何值时两线平行？"
      },
      "choices": [
        "$5$",
        "$10$",
        "$20$",
        "$15$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Alternate interior angles must be congruent: $6x-5=4x+15$, so $2x=20$ and $x=10$. Summing to $180$ is the same-side approach, which does not apply to alternate interior angles.",
        "zh": "内错角必须相等：$6x-5=4x+15$，即 $2x=20$，$x=10$。求和等于 $180$ 是同旁角的做法，不适用于内错角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "\"If corresponding angles are congruent, then the lines are parallel.\" This statement is known as the:",
        "zh": "“如果同位角相等，那么两线平行。”这个命题被称为："
      },
      "choices": [
        "Linear Pair Postulate / 邻补角公理",
        "Vertical Angles Theorem / 对顶角定理",
        "Corresponding Angles Converse / 同位角逆定理",
        "Same-Side Interior Theorem / 同旁内角定理"
      ],
      "answer": 2,
      "explanation": {
        "en": "This is the converse of the corresponding angles postulate, used to prove lines parallel. The Vertical Angles Theorem is about angles at one intersection and says nothing about parallelism.",
        "zh": "这是同位角公理的逆命题，用来证明两线平行。对顶角定理讲的是同一交点处的角，与平行无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines are cut by a transversal. One same-side interior angle is $115^\\circ$. What must the other same-side interior angle equal for the lines to be parallel?",
        "zh": "两条直线被一条截线所截。一个同旁内角为 $115^\\circ$。要使两线平行，另一个同旁内角必须等于多少度？"
      },
      "choices": [
        "$115^\\circ$",
        "$75^\\circ$",
        "$25^\\circ$",
        "$65^\\circ$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Same-side interior angles must be supplementary for parallel lines: $180-115=65^\\circ$. Answering $115^\\circ$ assumes congruence, but this pair must be supplementary.",
        "zh": "平行时同旁内角必须互补：$180-115=65^\\circ$。回答 $115^\\circ$ 是假设相等，但这对角必须互补。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two lines are cut by a transversal. Corresponding angles measure $5x^\\circ$ and $(3x+40)^\\circ$. Find the value of $x$ that makes the lines parallel.",
        "zh": "两条直线被一条截线所截。同位角分别为 $5x^\\circ$ 和 $(3x+40)^\\circ$。求使两线平行的 $x$ 值。"
      },
      "answer": "20",
      "accept": [
        "20",
        "20.0",
        "x=20"
      ],
      "explanation": {
        "en": "Corresponding angles must be equal: $5x=3x+40$, so $2x=40$ and $x=20$.",
        "zh": "同位角必须相等：$5x=3x+40$，即 $2x=40$，$x=20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two lines are cut by a transversal. Alternate interior angles measure $(7x+5)^\\circ$ and $(9x-25)^\\circ$. Find the value of $x$ that makes the lines parallel.",
        "zh": "两条直线被一条截线所截。内错角分别为 $(7x+5)^\\circ$ 和 $(9x-25)^\\circ$。求使两线平行的 $x$ 值。"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "x=15"
      ],
      "explanation": {
        "en": "Alternate interior angles must be equal: $7x+5=9x-25$, so $30=2x$ and $x=15$.",
        "zh": "内错角必须相等：$7x+5=9x-25$，即 $30=2x$，$x=15$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two lines are cut by a transversal. Same-side interior angles measure $3x^\\circ$ and $(2x+30)^\\circ$. Find the value of $x$ that makes the lines parallel.",
        "zh": "两条直线被一条截线所截。同旁内角分别为 $3x^\\circ$ 和 $(2x+30)^\\circ$。求使两线平行的 $x$ 值。"
      },
      "answer": "30",
      "accept": [
        "30",
        "30.0",
        "x=30"
      ],
      "explanation": {
        "en": "Same-side interior angles must be supplementary: $3x+(2x+30)=180$, so $5x+30=180$, $5x=150$ and $x=30$.",
        "zh": "同旁内角必须互补：$3x+(2x+30)=180$，即 $5x+30=180$，$5x=150$，$x=30$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Same-side interior angles measure $x^\\circ$ and $2x^\\circ$. Find the value of $x$ that makes the two lines parallel.",
        "zh": "同旁内角分别为 $x^\\circ$ 和 $2x^\\circ$。求使两线平行的 $x$ 值。"
      },
      "answer": "60",
      "accept": [
        "60",
        "60.0",
        "x=60"
      ],
      "explanation": {
        "en": "They must be supplementary: $x+2x=180$, so $3x=180$ and $x=60$.",
        "zh": "它们必须互补：$x+2x=180$，即 $3x=180$，$x=60$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two lines are cut by a transversal. Alternate exterior angles measure $(4x-20)^\\circ$ and $(2x+40)^\\circ$. Find the value of $x$ that makes the lines parallel.",
        "zh": "两条直线被一条截线所截。外错角分别为 $(4x-20)^\\circ$ 和 $(2x+40)^\\circ$。求使两线平行的 $x$ 值。"
      },
      "answer": "30",
      "accept": [
        "30",
        "30.0",
        "x=30"
      ],
      "explanation": {
        "en": "Alternate exterior angles must be equal: $4x-20=2x+40$, so $2x=60$ and $x=30$.",
        "zh": "外错角必须相等：$4x-20=2x+40$，即 $2x=60$，$x=30$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two lines are cut by a transversal. One same-side interior angle is $73^\\circ$. What must the other same-side interior angle be (in degrees) for the lines to be parallel?",
        "zh": "两条直线被一条截线所截。一个同旁内角为 $73^\\circ$。要使两线平行，另一个同旁内角应为多少度？"
      },
      "answer": "107",
      "accept": [
        "107",
        "107.0",
        "107°",
        "107度"
      ],
      "explanation": {
        "en": "Same-side interior angles must be supplementary: $180-73=107^\\circ$.",
        "zh": "同旁内角必须互补：$180-73=107^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two lines are cut by a transversal. Corresponding angles measure $(8x-14)^\\circ$ and $(6x+10)^\\circ$. Find the value of $x$ that makes the lines parallel.",
        "zh": "两条直线被一条截线所截。同位角分别为 $(8x-14)^\\circ$ 和 $(6x+10)^\\circ$。求使两线平行的 $x$ 值。"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "x=12"
      ],
      "explanation": {
        "en": "Corresponding angles must be equal: $8x-14=6x+10$, so $2x=24$ and $x=12$.",
        "zh": "同位角必须相等：$8x-14=6x+10$，即 $2x=24$，$x=12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the two lines to be parallel, alternate interior angles $(90-x)^\\circ$ and $(60+x)^\\circ$ must be equal. Find $x$.",
        "zh": "要使两线平行，内错角 $(90-x)^\\circ$ 和 $(60+x)^\\circ$ 必须相等。求 $x$。"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "x=15"
      ],
      "explanation": {
        "en": "Set them equal: $90-x=60+x$, so $30=2x$ and $x=15$.",
        "zh": "令其相等：$90-x=60+x$，即 $30=2x$，$x=15$。"
      }
    }
  ],
  "parallel-perpendicular-lines/slopes-parallel-perpendicular": [
    {
      "type": "mc",
      "question": {
        "en": "Two distinct parallel lines have slopes that are:",
        "zh": "两条不同的平行直线的斜率是："
      },
      "choices": [
        "Equal / 相等",
        "Opposite reciprocals / 负倒数",
        "Both zero / 都为零",
        "Reciprocals / 互为倒数"
      ],
      "answer": 0,
      "explanation": {
        "en": "Parallel lines have the same steepness, so their slopes are equal. Opposite reciprocals describe perpendicular lines, not parallel ones.",
        "zh": "平行线的陡峭程度相同，所以斜率相等。负倒数描述的是垂直线，而非平行线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of a line perpendicular to a line with slope $\\frac{2}{3}$?",
        "zh": "与斜率为 $\\frac{2}{3}$ 的直线垂直的直线，其斜率是多少？"
      },
      "choices": [
        "$\\frac{2}{3}$",
        "$-\\frac{3}{2}$",
        "$\\frac{3}{2}$",
        "$-\\frac{2}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Perpendicular slopes are opposite reciprocals: flip $\\frac{2}{3}$ to $\\frac{3}{2}$ and negate to get $-\\frac{3}{2}$. Just flipping without negating (giving $\\frac{3}{2}$) forgets the sign change.",
        "zh": "垂直的斜率互为负倒数：把 $\\frac{2}{3}$ 倒过来变成 $\\frac{3}{2}$ 再取负得到 $-\\frac{3}{2}$。只倒不变号（得到 $\\frac{3}{2}$）漏掉了变号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of a line parallel to $y = 3x - 5$?",
        "zh": "与 $y = 3x - 5$ 平行的直线，其斜率是多少？"
      },
      "choices": [
        "$-3$",
        "$\\frac{1}{3}$",
        "$3$",
        "$-\\frac{1}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Parallel lines share the same slope, which is $3$. Using $-\\frac{1}{3}$ gives the perpendicular slope instead of the parallel one.",
        "zh": "平行线斜率相同，即 $3$。用 $-\\frac{1}{3}$ 得到的是垂直斜率，而不是平行斜率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of a line perpendicular to $y = -4x + 1$?",
        "zh": "与 $y = -4x + 1$ 垂直的直线，其斜率是多少？"
      },
      "choices": [
        "$4$",
        "$-4$",
        "$-\\frac{1}{4}$",
        "$\\frac{1}{4}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The opposite reciprocal of $-4$ is $\\frac{1}{4}$ (flip to $-\\frac{1}{4}$, then negate). Leaving it as $-\\frac{1}{4}$ forgets to change the sign.",
        "zh": "$-4$ 的负倒数是 $\\frac{1}{4}$（先倒成 $-\\frac{1}{4}$，再变号）。停在 $-\\frac{1}{4}$ 是忘了变号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines have slopes $5$ and $5$ but different $y$-intercepts. The lines are:",
        "zh": "两条直线的斜率都是 $5$ 但 $y$ 轴截距不同。这两条线是："
      },
      "choices": [
        "Parallel / 平行",
        "Perpendicular / 垂直",
        "The same line / 同一条线",
        "Intersecting at a non-right angle / 非直角相交"
      ],
      "answer": 0,
      "explanation": {
        "en": "Equal slopes with different intercepts means the lines never meet — they are parallel. They are not the same line because the intercepts differ.",
        "zh": "斜率相等而截距不同意味着两线永不相交——它们平行。因截距不同，所以不是同一条线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines have slopes $\\frac{1}{2}$ and $-2$. The lines are:",
        "zh": "两条直线的斜率分别为 $\\frac{1}{2}$ 和 $-2$。这两条线是："
      },
      "choices": [
        "Parallel / 平行",
        "Perpendicular / 垂直",
        "Neither / 都不是",
        "The same line / 同一条线"
      ],
      "answer": 1,
      "explanation": {
        "en": "The product of the slopes is $\\frac{1}{2} \\times (-2) = -1$, so the lines are perpendicular. Different slopes alone do not make lines parallel — parallel requires equal slopes.",
        "zh": "斜率之积为 $\\frac{1}{2} \\times (-2) = -1$，所以两线垂直。斜率不同不代表平行——平行要求斜率相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pair of slopes represents perpendicular lines?",
        "zh": "哪一对斜率表示两条垂直的直线？"
      },
      "choices": [
        "$3$ and $3$",
        "$2$ and $\\frac{1}{2}$",
        "$\\frac{3}{4}$ and $-\\frac{4}{3}$",
        "$-2$ and $2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Perpendicular slopes multiply to $-1$: $\\frac{3}{4} \\times (-\\frac{4}{3}) = -1$. The pair $2$ and $\\frac{1}{2}$ are reciprocals without the negative sign, so their product is $+1$, not perpendicular.",
        "zh": "垂直斜率之积为 $-1$：$\\frac{3}{4} \\times (-\\frac{4}{3}) = -1$。而 $2$ 与 $\\frac{1}{2}$ 是没有负号的倒数，乘积为 $+1$，并不垂直。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the equation of the line through $(0,4)$ that is parallel to $y = 2x - 7$?",
        "zh": "经过 $(0,4)$ 且与 $y = 2x - 7$ 平行的直线方程是什么？"
      },
      "choices": [
        "$y = -\\frac{1}{2}x + 4$",
        "$y = 2x - 7$",
        "$y = -2x + 4$",
        "$y = 2x + 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Parallel means the same slope $2$; the $y$-intercept is $4$, giving $y = 2x + 4$. Using slope $-\\frac{1}{2}$ mistakenly builds a perpendicular line instead.",
        "zh": "平行意味着斜率同为 $2$；截距为 $4$，得 $y = 2x + 4$。用斜率 $-\\frac{1}{2}$ 是误建了一条垂直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the equation of the line through $(0,-1)$ that is perpendicular to $y = \\frac{1}{3}x + 2$?",
        "zh": "经过 $(0,-1)$ 且与 $y = \\frac{1}{3}x + 2$ 垂直的直线方程是什么？"
      },
      "choices": [
        "$y = -3x - 1$",
        "$y = \\frac{1}{3}x - 1$",
        "$y = 3x - 1$",
        "$y = -\\frac{1}{3}x - 1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The perpendicular slope is the opposite reciprocal of $\\frac{1}{3}$, which is $-3$; with $y$-intercept $-1$ this gives $y = -3x - 1$. Keeping slope $\\frac{1}{3}$ would produce a parallel line, not a perpendicular one.",
        "zh": "垂直斜率是 $\\frac{1}{3}$ 的负倒数，即 $-3$；截距为 $-1$，得 $y = -3x - 1$。保留斜率 $\\frac{1}{3}$ 得到的是平行线，而非垂直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A horizontal line and a vertical line are:",
        "zh": "一条水平线和一条竖直线是："
      },
      "choices": [
        "Parallel / 平行",
        "Perpendicular / 垂直",
        "The same line / 同一条线",
        "Neither / 都不是"
      ],
      "answer": 1,
      "explanation": {
        "en": "A horizontal line (slope $0$) and a vertical line (undefined slope) always meet at a right angle, so they are perpendicular. They are not parallel — parallel lines never intersect, but these cross.",
        "zh": "水平线（斜率为 $0$）与竖直线（斜率不存在）总是成直角相交，所以垂直。它们不平行——平行线不相交，而这两条相交。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The line through $(1,2)$ and $(3,8)$ has what slope?",
        "zh": "经过 $(1,2)$ 和 $(3,8)$ 的直线斜率是多少？"
      },
      "choices": [
        "$2$",
        "$\\frac{1}{3}$",
        "$3$",
        "$-3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Slope is $\\frac{8-2}{3-1} = \\frac{6}{2} = 3$. Writing $\\frac{3-1}{8-2}$ inverts the rise-over-run and gives $\\frac{1}{3}$ by mistake.",
        "zh": "斜率为 $\\frac{8-2}{3-1} = \\frac{6}{2} = 3$。写成 $\\frac{3-1}{8-2}$ 把纵横比颠倒了，会错误地得到 $\\frac{1}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line perpendicular to a horizontal line (slope $0$) is:",
        "zh": "与一条水平线（斜率为 $0$）垂直的直线是："
      },
      "choices": [
        "Also horizontal / 也是水平线",
        "A line of slope $1$",
        "A line of slope $-1$",
        "Vertical, with undefined slope / 竖直线，斜率不存在"
      ],
      "answer": 3,
      "explanation": {
        "en": "A horizontal line has slope $0$; a line perpendicular to it is vertical, whose slope is undefined. Slope $-1$ comes from mistakenly taking an opposite reciprocal of $0$, which is not defined.",
        "zh": "水平线斜率为 $0$；与其垂直的是竖直线，斜率不存在。斜率 $-1$ 来自错误地对 $0$ 取负倒数，而这是没有定义的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of a line parallel to $y = -\\frac{2}{5}x + 3$? (Give a fraction or decimal.)",
        "zh": "与 $y = -\\frac{2}{5}x + 3$ 平行的直线斜率是多少？（用分数或小数表示。）"
      },
      "answer": "-2/5",
      "accept": [
        "-2/5",
        "-0.4",
        "-.4",
        "-2\\/5"
      ],
      "explanation": {
        "en": "Parallel lines have equal slopes, so the slope is $-\\frac{2}{5}$ (equivalently $-0.4$).",
        "zh": "平行线斜率相等，所以斜率为 $-\\frac{2}{5}$（即 $-0.4$）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of a line perpendicular to $y = 5x - 2$? (Give a fraction or decimal.)",
        "zh": "与 $y = 5x - 2$ 垂直的直线斜率是多少？（用分数或小数表示。）"
      },
      "answer": "-1/5",
      "accept": [
        "-1/5",
        "-0.2",
        "-.2",
        "-1\\/5"
      ],
      "explanation": {
        "en": "The opposite reciprocal of $5$ is $-\\frac{1}{5}$ (equivalently $-0.2$).",
        "zh": "$5$ 的负倒数是 $-\\frac{1}{5}$（即 $-0.2$）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of a line perpendicular to a line with slope $-\\frac{3}{7}$? (Give a fraction.)",
        "zh": "与斜率为 $-\\frac{3}{7}$ 的直线垂直的直线斜率是多少？（用分数表示。）"
      },
      "answer": "7/3",
      "accept": [
        "7/3",
        "7\\/3",
        "2.333",
        "2.33",
        "2.3333"
      ],
      "explanation": {
        "en": "Flip $-\\frac{3}{7}$ to $-\\frac{7}{3}$ and negate to get $\\frac{7}{3}$.",
        "zh": "把 $-\\frac{3}{7}$ 倒过来成 $-\\frac{7}{3}$，再变号得 $\\frac{7}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line passes through $(2,5)$ and is parallel to $y = 4x + 1$. What is its $y$-intercept $b$?",
        "zh": "一条直线经过 $(2,5)$ 且与 $y = 4x + 1$ 平行。它的 $y$ 轴截距 $b$ 是多少？"
      },
      "answer": "-3",
      "accept": [
        "-3",
        "-3.0",
        "b=-3"
      ],
      "explanation": {
        "en": "The parallel slope is $4$, so $y = 4x + b$. Substituting $(2,5)$: $5 = 8 + b$, giving $b = -3$.",
        "zh": "平行斜率为 $4$，所以 $y = 4x + b$。代入 $(2,5)$：$5 = 8 + b$，得 $b = -3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line passes through $(4,1)$ and is perpendicular to $y = 2x$. Its slope is $-\\frac{1}{2}$. What is its $y$-intercept $b$?",
        "zh": "一条直线经过 $(4,1)$ 且与 $y = 2x$ 垂直，其斜率为 $-\\frac{1}{2}$。它的 $y$ 轴截距 $b$ 是多少？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "b=3"
      ],
      "explanation": {
        "en": "With slope $-\\frac{1}{2}$: $1 = -\\frac{1}{2}(4) + b = -2 + b$, so $b = 3$.",
        "zh": "斜率为 $-\\frac{1}{2}$：$1 = -\\frac{1}{2}(4) + b = -2 + b$，所以 $b = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Are the lines $y = 3x + 1$ and $y = 3x - 4$ parallel? Answer yes or no.",
        "zh": "直线 $y = 3x + 1$ 和 $y = 3x - 4$ 平行吗？回答是或否。"
      },
      "answer": "yes",
      "accept": [
        "yes",
        "Yes",
        "YES",
        "y",
        "是",
        "是的",
        "平行"
      ],
      "explanation": {
        "en": "Both lines have slope $3$ but different $y$-intercepts, so they are parallel.",
        "zh": "两条线斜率都是 $3$ 但截距不同，所以它们平行。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The product of the slopes of two (non-vertical) perpendicular lines equals what number?",
        "zh": "两条（非竖直的）垂直直线的斜率之积等于多少？"
      },
      "answer": "-1",
      "accept": [
        "-1",
        "-1.0",
        "−1"
      ],
      "explanation": {
        "en": "Perpendicular non-vertical slopes are opposite reciprocals, and their product is always $-1$.",
        "zh": "垂直的非竖直斜率互为负倒数，其乘积总是 $-1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line passes through $(0,0)$ and $(2,6)$. What is the slope of a line perpendicular to it? (Give a fraction.)",
        "zh": "一条直线经过 $(0,0)$ 和 $(2,6)$。与它垂直的直线斜率是多少？（用分数表示。）"
      },
      "answer": "-1/3",
      "accept": [
        "-1/3",
        "-1\\/3",
        "-0.333",
        "-0.33",
        "-.333"
      ],
      "explanation": {
        "en": "The line's slope is $\\frac{6-0}{2-0} = 3$; its opposite reciprocal is $-\\frac{1}{3}$.",
        "zh": "该直线斜率为 $\\frac{6-0}{2-0} = 3$；其负倒数为 $-\\frac{1}{3}$。"
      }
    }
  ],
  "transformations/rigid-transformations": [
    {
      "type": "mc",
      "question": {
        "en": "The point $(3,-2)$ is translated by the rule $(x,y)\\rightarrow(x+4,y+5)$. What are the coordinates of the image?",
        "zh": "点 $(3,-2)$ 按规则 $(x,y)\\rightarrow(x+4,y+5)$ 平移。像的坐标是什么？"
      },
      "choices": [
        "$(7,3)$",
        "$(7,-7)$",
        "$(-1,-7)$",
        "$(-1,3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add the components: $3+4=7$ and $-2+5=3$, giving $(7,3)$. A common error is subtracting instead of adding, or moving the wrong coordinate, which flips the sign of a component.",
        "zh": "分别相加：$3+4=7$，$-2+5=3$，得到 $(7,3)$。常见错误是用减法代替加法，或平移了错误的坐标，导致某个分量符号出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the image of $(5,-8)$ after a reflection over the $x$-axis?",
        "zh": "点 $(5,-8)$ 关于 $x$ 轴反射后的像是什么？"
      },
      "choices": [
        "$(-5,-8)$",
        "$(5,8)$",
        "$(-5,8)$",
        "$(8,5)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Reflecting over the $x$-axis keeps $x$ and negates $y$: $(5,-8)\\rightarrow(5,8)$. A frequent mistake is negating $x$ instead, which is the rule for the $y$-axis.",
        "zh": "关于 $x$ 轴反射时 $x$ 不变、$y$ 取相反数：$(5,-8)\\rightarrow(5,8)$。常见错误是改变 $x$ 的符号，那其实是关于 $y$ 轴的规则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the image of $(-4,6)$ after a reflection over the $y$-axis?",
        "zh": "点 $(-4,6)$ 关于 $y$ 轴反射后的像是什么？"
      },
      "choices": [
        "$(-4,-6)$",
        "$(6,-4)$",
        "$(4,6)$",
        "$(4,-6)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Reflecting over the $y$-axis negates $x$ and keeps $y$: $(-4,6)\\rightarrow(4,6)$. Swapping the coordinates instead is the mistake made by confusing this with a reflection over $y=x$.",
        "zh": "关于 $y$ 轴反射时 $x$ 取相反数、$y$ 不变：$(-4,6)\\rightarrow(4,6)$。把坐标互换是把它误当成关于 $y=x$ 反射的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the image of $(2,7)$ after a reflection over the line $y=x$?",
        "zh": "点 $(2,7)$ 关于直线 $y=x$ 反射后的像是什么？"
      },
      "choices": [
        "$(-2,-7)$",
        "$(-7,-2)$",
        "$(2,-7)$",
        "$(7,2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Reflecting over $y=x$ swaps the coordinates: $(2,7)\\rightarrow(7,2)$. Negating both coordinates instead confuses this with a $180^\\circ$ rotation.",
        "zh": "关于 $y=x$ 反射会互换坐标：$(2,7)\\rightarrow(7,2)$。把两个坐标都取相反数是把它误当成 $180^\\circ$ 旋转的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the image of $(3,5)$ after a $90^\\circ$ counterclockwise rotation about the origin?",
        "zh": "点 $(3,5)$ 绕原点逆时针旋转 $90^\\circ$ 后的像是什么？"
      },
      "choices": [
        "$(-5,3)$",
        "$(5,-3)$",
        "$(-3,-5)$",
        "$(5,3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The rule for $90^\\circ$ counterclockwise is $(x,y)\\rightarrow(-y,x)$, so $(3,5)\\rightarrow(-5,3)$. Using $(y,-x)$ instead gives the clockwise result and is a common direction mix-up.",
        "zh": "逆时针 $90^\\circ$ 的规则是 $(x,y)\\rightarrow(-y,x)$，所以 $(3,5)\\rightarrow(-5,3)$。用 $(y,-x)$ 得到的是顺时针结果，是常见的方向混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the image of $(-6,2)$ after a $180^\\circ$ rotation about the origin?",
        "zh": "点 $(-6,2)$ 绕原点旋转 $180^\\circ$ 后的像是什么？"
      },
      "choices": [
        "$(-6,-2)$",
        "$(6,-2)$",
        "$(2,-6)$",
        "$(6,2)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A $180^\\circ$ rotation negates both coordinates: $(-6,2)\\rightarrow(6,-2)$. Negating only one coordinate is the mistake of treating it like an axis reflection.",
        "zh": "$180^\\circ$ 旋转把两个坐标都取相反数：$(-6,2)\\rightarrow(6,-2)$。只改变一个坐标的符号是把它当成关于坐标轴反射的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the image of $(4,-1)$ after a $270^\\circ$ counterclockwise rotation about the origin?",
        "zh": "点 $(4,-1)$ 绕原点逆时针旋转 $270^\\circ$ 后的像是什么？"
      },
      "choices": [
        "$(1,4)$",
        "$(-4,-1)$",
        "$(-1,-4)$",
        "$(4,1)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A $270^\\circ$ counterclockwise rotation uses $(x,y)\\rightarrow(y,-x)$, so $(4,-1)\\rightarrow(-1,-4)$. Applying the $90^\\circ$ counterclockwise rule $(-y,x)$ instead reverses the turn direction.",
        "zh": "逆时针 $270^\\circ$ 旋转用 $(x,y)\\rightarrow(y,-x)$，所以 $(4,-1)\\rightarrow(-1,-4)$。若用逆时针 $90^\\circ$ 的规则 $(-y,x)$ 就把旋转方向搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is NOT a rigid transformation (does not preserve size and shape)?",
        "zh": "以下哪一项不是刚性变换（不保持大小和形状）？"
      },
      "choices": [
        "Translation / 平移",
        "Reflection / 反射",
        "Rotation / 旋转",
        "Dilation / 位似"
      ],
      "answer": 3,
      "explanation": {
        "en": "Translations, reflections, and rotations preserve distance, so they are rigid. A dilation resizes the figure by a scale factor, so it changes side lengths and is not rigid. Assuming every mapping keeps size is the error to avoid.",
        "zh": "平移、反射和旋转都保持距离，所以是刚性变换。位似按比例因子改变图形大小，会改变边长，因此不是刚性变换。以为所有映射都保持大小是要避免的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which coordinate rule represents a $90^\\circ$ clockwise rotation about the origin?",
        "zh": "哪个坐标规则表示绕原点顺时针旋转 $90^\\circ$？"
      },
      "choices": [
        "$(x,y)\\rightarrow(y,-x)$",
        "$(x,y)\\rightarrow(-y,x)$",
        "$(x,y)\\rightarrow(-x,-y)$",
        "$(x,y)\\rightarrow(y,x)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A $90^\\circ$ clockwise rotation is the same as $270^\\circ$ counterclockwise, giving $(x,y)\\rightarrow(y,-x)$. The rule $(-y,x)$ is the counterclockwise version, so picking it confuses the two directions.",
        "zh": "顺时针 $90^\\circ$ 等同于逆时针 $270^\\circ$，规则为 $(x,y)\\rightarrow(y,-x)$。$(-y,x)$ 是逆时针的规则，选它就是混淆了两个方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The point $(1,2)$ is first reflected over the $x$-axis, then translated by $(x,y)\\rightarrow(x-3,y+1)$. What is the final image?",
        "zh": "点 $(1,2)$ 先关于 $x$ 轴反射，再按 $(x,y)\\rightarrow(x-3,y+1)$ 平移。最终的像是什么？"
      },
      "choices": [
        "$(4,-1)$",
        "$(-2,-1)$",
        "$(-2,3)$",
        "$(4,3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Reflect first: $(1,2)\\rightarrow(1,-2)$. Then translate: $(1-3,-2+1)=(-2,-1)$. Applying the translation before the reflection, or skipping the reflection, changes the sign of the final $y$.",
        "zh": "先反射：$(1,2)\\rightarrow(1,-2)$；再平移：$(1-3,-2+1)=(-2,-1)$。若先平移后反射，或漏掉反射，最终 $y$ 的符号就会出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is NOT necessarily preserved by a reflection?",
        "zh": "反射不一定保持以下哪个性质？"
      },
      "choices": [
        "Side lengths / 边长",
        "Angle measures / 角度",
        "Orientation / 方向",
        "Area / 面积"
      ],
      "answer": 2,
      "explanation": {
        "en": "Reflections preserve lengths, angles, and area because they are rigid, but they reverse orientation (clockwise vertex order becomes counterclockwise). Assuming orientation is always kept is the trap here.",
        "zh": "反射是刚性变换，保持长度、角度和面积，但会改变方向（顶点的顺时针顺序变为逆时针）。以为方向总是不变就是这里的陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the image of $(3,-5)$ after a reflection over the line $y=-x$?",
        "zh": "点 $(3,-5)$ 关于直线 $y=-x$ 反射后的像是什么？"
      },
      "choices": [
        "$(-5,3)$",
        "$(3,5)$",
        "$(-3,5)$",
        "$(5,-3)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Reflecting over $y=-x$ uses $(x,y)\\rightarrow(-y,-x)$, so $(3,-5)\\rightarrow(5,-3)$. Just swapping the coordinates without negating is the rule for $y=x$ and is the common slip.",
        "zh": "关于 $y=-x$ 反射用 $(x,y)\\rightarrow(-y,-x)$，所以 $(3,-5)\\rightarrow(5,-3)$。只互换坐标而不取相反数是 $y=x$ 的规则，是常见的失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A translation maps $(2,3)$ to $(9,-1)$. In the rule $(x,y)\\rightarrow(x+a,y+b)$, what is $a$?",
        "zh": "一个平移把 $(2,3)$ 映射到 $(9,-1)$。在规则 $(x,y)\\rightarrow(x+a,y+b)$ 中，$a$ 是多少？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "The horizontal shift is $a=9-2=7$. Computing $2-9=-7$ reverses the subtraction and gives the wrong sign.",
        "zh": "水平平移量 $a=9-2=7$。若算成 $2-9=-7$ 就把减法顺序弄反、符号出错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the same translation mapping $(2,3)$ to $(9,-1)$, what is $b$ in $(x,y)\\rightarrow(x+a,y+b)$?",
        "zh": "对于把 $(2,3)$ 映射到 $(9,-1)$ 的同一平移，规则 $(x,y)\\rightarrow(x+a,y+b)$ 中的 $b$ 是多少？"
      },
      "answer": "-4",
      "accept": [
        "-4.0"
      ],
      "explanation": {
        "en": "The vertical shift is $b=-1-3=-4$. Writing $3-(-1)=4$ subtracts in the wrong order and flips the sign.",
        "zh": "竖直平移量 $b=-1-3=-4$。若写成 $3-(-1)=4$ 就把减法顺序弄反、符号出错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(7,-2)$ is reflected over the $x$-axis. What is the $y$-coordinate of the image?",
        "zh": "点 $(7,-2)$ 关于 $x$ 轴反射。像的 $y$ 坐标是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Reflecting over the $x$-axis negates $y$: $-(-2)=2$. Leaving $y$ as $-2$ forgets to change its sign.",
        "zh": "关于 $x$ 轴反射把 $y$ 取相反数：$-(-2)=2$。若仍写 $-2$ 就是忘了改变符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(3,4)$ is rotated $180^\\circ$ about the origin. What is the $x$-coordinate of the image?",
        "zh": "点 $(3,4)$ 绕原点旋转 $180^\\circ$。像的 $x$ 坐标是多少？"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "A $180^\\circ$ rotation negates both coordinates, so $x$ becomes $-3$. Leaving $x$ as $3$ treats the rotation as if only $y$ changed.",
        "zh": "$180^\\circ$ 旋转把两个坐标都取相反数，所以 $x$ 变为 $-3$。若仍写 $3$ 就是当成只有 $y$ 改变了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rotation about the origin follows the rule $(x,y)\\rightarrow(-x,-y)$. How many degrees is the rotation?",
        "zh": "一个绕原点的旋转遵循规则 $(x,y)\\rightarrow(-x,-y)$。这个旋转是多少度？"
      },
      "answer": "180",
      "accept": [
        "180.0",
        "180°",
        "180 degrees",
        "180度"
      ],
      "explanation": {
        "en": "Negating both coordinates is exactly a half-turn, $180^\\circ$. Reading it as $90^\\circ$ ignores that both coordinates changed rather than being swapped.",
        "zh": "把两个坐标都取相反数正好是半圈，即 $180^\\circ$。若读作 $90^\\circ$ 就忽略了两个坐标都改变了符号而不是被互换。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(6,2)$ is rotated $90^\\circ$ counterclockwise about the origin. What is the $x$-coordinate of the image?",
        "zh": "点 $(6,2)$ 绕原点逆时针旋转 $90^\\circ$。像的 $x$ 坐标是多少？"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "The rule $(x,y)\\rightarrow(-y,x)$ makes the new $x$ equal to $-y=-2$. Using $y=2$ forgets the negative sign that the counterclockwise rule requires.",
        "zh": "规则 $(x,y)\\rightarrow(-y,x)$ 使新的 $x$ 等于 $-y=-2$。若写成 $2$ 就忘了逆时针规则所需的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(4,-9)$ is reflected over the line $y=x$. What is the $x$-coordinate of the image?",
        "zh": "点 $(4,-9)$ 关于直线 $y=x$ 反射。像的 $x$ 坐标是多少？"
      },
      "answer": "-9",
      "accept": [
        "-9.0"
      ],
      "explanation": {
        "en": "Reflecting over $y=x$ swaps the coordinates, so the new $x$ equals the old $y=-9$. Keeping $x=4$ forgets to swap the coordinates.",
        "zh": "关于 $y=x$ 反射会互换坐标，所以新的 $x$ 等于原来的 $y=-9$。若仍写 $4$ 就是忘了互换坐标。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(1,0)$ is rotated $270^\\circ$ counterclockwise about the origin. What is the $y$-coordinate of the image?",
        "zh": "点 $(1,0)$ 绕原点逆时针旋转 $270^\\circ$。像的 $y$ 坐标是多少？"
      },
      "answer": "-1",
      "accept": [
        "-1.0"
      ],
      "explanation": {
        "en": "The rule $(x,y)\\rightarrow(y,-x)$ makes the new $y$ equal to $-x=-1$. Using $x=1$ forgets the negative sign required for this rotation.",
        "zh": "规则 $(x,y)\\rightarrow(y,-x)$ 使新的 $y$ 等于 $-x=-1$。若写成 $1$ 就忘了此旋转所需的负号。"
      }
    }
  ],
  "transformations/dilations-and-symmetry": [
    {
      "type": "mc",
      "question": {
        "en": "A dilation centered at the origin with scale factor $3$ is applied to $(2,-4)$. What is the image?",
        "zh": "以原点为中心、比例因子为 $3$ 的位似作用于 $(2,-4)$。像是什么？"
      },
      "choices": [
        "$(6,-12)$",
        "$(5,-1)$",
        "$(6,-1)$",
        "$\\left(\\frac{2}{3},-\\frac{4}{3}\\right)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The rule is $(x,y)\\rightarrow(kx,ky)$, so multiply each coordinate by $3$: $(6,-12)$. Adding $3$ to each coordinate instead of multiplying is the common error.",
        "zh": "规则为 $(x,y)\\rightarrow(kx,ky)$，把每个坐标乘以 $3$：$(6,-12)$。把每个坐标加 $3$ 而不是乘 $3$ 是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A dilation centered at the origin with scale factor $\\frac{1}{2}$ is applied to $(8,6)$. What is the image?",
        "zh": "以原点为中心、比例因子为 $\\frac{1}{2}$ 的位似作用于 $(8,6)$。像是什么？"
      },
      "choices": [
        "$(16,12)$",
        "$(4,3)$",
        "$(4,6)$",
        "$(8.5,6.5)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply each coordinate by $\\frac{1}{2}$: $(4,3)$. Doubling the coordinates instead uses the reciprocal of the scale factor by mistake.",
        "zh": "把每个坐标乘以 $\\frac{1}{2}$：$(4,3)$。若把坐标加倍则是误用了比例因子的倒数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A dilation has a scale factor $k$ with $0<k<1$. What kind of image does it produce?",
        "zh": "一个位似的比例因子 $k$ 满足 $0<k<1$。它产生什么样的像？"
      },
      "choices": [
        "An enlargement / 放大",
        "A congruent copy / 全等图形",
        "A reduction / 缩小",
        "A reflection / 反射"
      ],
      "answer": 2,
      "explanation": {
        "en": "When the factor is between $0$ and $1$, every distance shrinks, so the image is a reduction. Expecting an enlargement whenever a dilation is applied ignores that the factor is less than $1$.",
        "zh": "当比例因子介于 $0$ 和 $1$ 之间时，所有距离都缩小，因此像是缩小图形。以为只要是位似就一定放大，是忽略了因子小于 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Under a dilation, a side of length $5$ maps to a side of length $15$. What is the scale factor?",
        "zh": "在一次位似中，长度为 $5$ 的边映射为长度为 $15$ 的边。比例因子是多少？"
      },
      "choices": [
        "$k=\\frac{1}{3}$",
        "$k=5$",
        "$k=10$",
        "$k=3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The scale factor is image over preimage: $\\frac{15}{5}=3$. Subtracting to get $15-5=10$ treats the change as additive rather than multiplicative.",
        "zh": "比例因子等于像除以原像：$\\frac{15}{5}=3$。用减法得到 $15-5=10$ 是把变化当成加法而非乘法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A dilation centered at the origin maps $(3,3)$ to $(12,12)$. What is the scale factor $k$?",
        "zh": "以原点为中心的位似把 $(3,3)$ 映射为 $(12,12)$。比例因子 $k$ 是多少？"
      },
      "choices": [
        "$k=4$",
        "$k=9$",
        "$k=\\frac{1}{4}$",
        "$k=15$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Divide a coordinate of the image by the matching preimage coordinate: $\\frac{12}{3}=4$. Subtracting $12-3=9$ again mistakes the multiplicative rule for an additive one.",
        "zh": "用像的坐标除以对应原像坐标：$\\frac{12}{3}=4$。用 $12-3=9$ 又是把乘法规则误当成加法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many lines of symmetry does a square have?",
        "zh": "正方形有多少条对称轴？"
      },
      "choices": [
        "1",
        "4",
        "8",
        "2"
      ],
      "answer": 1,
      "explanation": {
        "en": "A square has $4$ lines of symmetry: two through opposite side midpoints and two along the diagonals. Counting only the two diagonals or only the two midlines misses half of them.",
        "zh": "正方形有 $4$ 条对称轴：两条通过对边中点，两条沿对角线。只数两条对角线或只数两条中线会漏掉一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the order of rotational symmetry of an equilateral triangle?",
        "zh": "等边三角形的旋转对称阶数是多少？"
      },
      "choices": [
        "6",
        "1",
        "3",
        "2"
      ],
      "answer": 2,
      "explanation": {
        "en": "It maps onto itself $3$ times in a full turn (at $120^\\circ$, $240^\\circ$, $360^\\circ$), so the order is $3$. Confusing the order with the number of sides plus vertices, or with a $6$, over-counts.",
        "zh": "它在一整圈内有 $3$ 个位置与自身重合（$120^\\circ$、$240^\\circ$、$360^\\circ$），所以阶数为 $3$。把阶数与边数加顶点数混淆、或答 $6$，都会数多。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many lines of symmetry does a regular hexagon have?",
        "zh": "正六边形有多少条对称轴？"
      },
      "choices": [
        "3",
        "12",
        "5",
        "6"
      ],
      "answer": 3,
      "explanation": {
        "en": "A regular $n$-gon has $n$ lines of symmetry, so a regular hexagon has $6$. Counting only the three long diagonals ignores the three lines through opposite side midpoints.",
        "zh": "正 $n$ 边形有 $n$ 条对称轴，所以正六边形有 $6$ 条。只数三条长对角线会忽略通过对边中点的三条。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the smallest angle of rotational symmetry for a regular pentagon?",
        "zh": "正五边形的最小旋转对称角是多少？"
      },
      "choices": [
        "$72^\\circ$",
        "$90^\\circ$",
        "$108^\\circ$",
        "$60^\\circ$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Divide a full turn by the number of sides: $\\frac{360^\\circ}{5}=72^\\circ$. Using the interior angle $108^\\circ$ confuses the shape's angle with its rotation angle.",
        "zh": "用一整圈除以边数：$\\frac{360^\\circ}{5}=72^\\circ$。用内角 $108^\\circ$ 是把图形的内角与旋转角混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A dilation centered at the origin with scale factor $-2$ is applied to $(1,3)$. What is the image?",
        "zh": "以原点为中心、比例因子为 $-2$ 的位似作用于 $(1,3)$。像是什么？"
      },
      "choices": [
        "$(2,6)$",
        "$(-2,-6)$",
        "$(-1,-1)$",
        "$(-2,6)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply each coordinate by $-2$: $(-2,-6)$. Dropping the negative sign gives $(2,6)$ and ignores that a negative factor also sends the image to the opposite side of the center.",
        "zh": "把每个坐标乘以 $-2$：$(-2,-6)$。丢掉负号得到 $(2,6)$，忽略了负因子还会把像送到中心另一侧。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is always preserved by a dilation?",
        "zh": "位似总是保持以下哪个性质？"
      },
      "choices": [
        "Side lengths / 边长",
        "Perimeter / 周长",
        "Angle measures / 角度",
        "Area / 面积"
      ],
      "answer": 2,
      "explanation": {
        "en": "A dilation preserves shape, so all angle measures stay the same, but lengths, perimeter, and area all change with the scale factor. Assuming side lengths are unchanged forgets that a dilation resizes the figure.",
        "zh": "位似保持形状，所以所有角度不变，但边长、周长和面积都随比例因子改变。以为边长不变是忘了位似会改变图形大小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is special about the center of a dilation?",
        "zh": "位似的中心有什么特别之处？"
      },
      "choices": [
        "It doubles in size / 大小加倍",
        "It moves the farthest / 移动最远",
        "It is always the origin / 总是原点",
        "It stays fixed / 保持不动"
      ],
      "answer": 3,
      "explanation": {
        "en": "The center is the one point that maps to itself, so it stays fixed while every other point moves along a ray from it. Assuming the center must be the origin ignores that a dilation can be centered anywhere.",
        "zh": "中心是唯一映射到自身的点，因此它保持不动，而其他每个点都沿从它出发的射线移动。以为中心一定是原点，忽略了位似可以以任意点为中心。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A dilation centered at the origin with scale factor $5$ is applied to $(3,-2)$. What is the $x$-coordinate of the image?",
        "zh": "以原点为中心、比例因子为 $5$ 的位似作用于 $(3,-2)$。像的 $x$ 坐标是多少？"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "+15"
      ],
      "explanation": {
        "en": "Multiply the $x$-coordinate by $5$: $3\\times5=15$. Adding $5$ to get $8$ mistakes the multiplicative rule for an additive one.",
        "zh": "把 $x$ 坐标乘以 $5$：$3\\times5=15$。加 $5$ 得 $8$ 是把乘法规则误当成加法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the same dilation (center origin, factor $5$) applied to $(3,-2)$, what is the $y$-coordinate of the image?",
        "zh": "对于同一位似（以原点为中心、因子为 $5$）作用于 $(3,-2)$，像的 $y$ 坐标是多少？"
      },
      "answer": "-10",
      "accept": [
        "-10.0"
      ],
      "explanation": {
        "en": "Multiply the $y$-coordinate by $5$: $-2\\times5=-10$. Dropping the negative sign gives $10$ and ignores the sign of the original coordinate.",
        "zh": "把 $y$ 坐标乘以 $5$：$-2\\times5=-10$。丢掉负号得 $10$ 是忽略了原坐标的符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Under a dilation, a segment of length $7$ maps to a segment of length $21$. What is the scale factor?",
        "zh": "在一次位似中，长度为 $7$ 的线段映射为长度为 $21$ 的线段。比例因子是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The scale factor is $\\frac{21}{7}=3$. Subtracting $21-7=14$ treats the resizing as additive.",
        "zh": "比例因子为 $\\frac{21}{7}=3$。用 $21-7=14$ 是把缩放当成加法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Under a dilation, a segment of length $10$ maps to a segment of length $4$. What is the scale factor (as a decimal)?",
        "zh": "在一次位似中，长度为 $10$ 的线段映射为长度为 $4$ 的线段。比例因子是多少（用小数表示）？"
      },
      "answer": "0.4",
      "accept": [
        ".4",
        "0.40",
        "2/5"
      ],
      "explanation": {
        "en": "The scale factor is $\\frac{4}{10}=0.4$, a reduction. Writing $\\frac{10}{4}=2.5$ divides preimage by image in the wrong order.",
        "zh": "比例因子为 $\\frac{4}{10}=0.4$，是缩小。写成 $\\frac{10}{4}=2.5$ 是把原像除以像、顺序弄反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many lines of symmetry does a regular octagon have?",
        "zh": "正八边形有多少条对称轴？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "A regular $n$-gon has $n$ lines of symmetry, so a regular octagon has $8$. Counting only the four diagonals misses the four lines through opposite side midpoints.",
        "zh": "正 $n$ 边形有 $n$ 条对称轴，所以正八边形有 $8$ 条。只数四条对角线会漏掉通过对边中点的四条。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the order of rotational symmetry of a regular hexagon?",
        "zh": "正六边形的旋转对称阶数是多少？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "A regular hexagon maps onto itself $6$ times in a full turn, so the order is $6$. Answering $3$ counts only the rotations that align opposite vertices and misses half.",
        "zh": "正六边形在一整圈内有 $6$ 个位置与自身重合，所以阶数为 $6$。答 $3$ 只数了让对顶点重合的旋转，漏掉一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the smallest angle (in degrees) of rotational symmetry for a square?",
        "zh": "正方形的最小旋转对称角是多少（单位：度）？"
      },
      "answer": "90",
      "accept": [
        "90.0",
        "90°",
        "90 degrees",
        "90度"
      ],
      "explanation": {
        "en": "Divide a full turn by the number of sides: $\\frac{360^\\circ}{4}=90^\\circ$. Using $180^\\circ$ only finds one of the rotations and is not the smallest.",
        "zh": "用一整圈除以边数：$\\frac{360^\\circ}{4}=90^\\circ$。用 $180^\\circ$ 只找到其中一个旋转，并不是最小的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A dilation centered at the origin with scale factor $\\frac{1}{2}$ is applied to $(10,-6)$. What is the $y$-coordinate of the image?",
        "zh": "以原点为中心、比例因子为 $\\frac{1}{2}$ 的位似作用于 $(10,-6)$。像的 $y$ 坐标是多少？"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "Multiply the $y$-coordinate by $\\frac{1}{2}$: $-6\\times\\frac{1}{2}=-3$. Dividing by $\\frac{1}{2}$ (i.e. multiplying by $2$) gives $-12$ and inverts the scale factor.",
        "zh": "把 $y$ 坐标乘以 $\\frac{1}{2}$：$-6\\times\\frac{1}{2}=-3$。若除以 $\\frac{1}{2}$（即乘以 $2$）得 $-12$，是把比例因子取了倒数。"
      }
    }
  ],
  "triangles-congruence/triangle-angle-relationships": [
    {
      "type": "mc",
      "question": {
        "en": "Two angles of a triangle measure $50^{\\circ}$ and $60^{\\circ}$. What is the third angle?",
        "zh": "三角形的两个角分别为 $50^{\\circ}$ 和 $60^{\\circ}$。第三个角是多少？"
      },
      "choices": [
        "$60^{\\circ}$",
        "$70^{\\circ}$",
        "$80^{\\circ}$",
        "$50^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The three angles sum to $180^{\\circ}$, so the third is $180-50-60=70^{\\circ}$. Adding only the two given angles gives $110^{\\circ}$, which is not the missing angle but the amount left to reach $180^{\\circ}$.",
        "zh": "三角形三个内角之和为 $180^{\\circ}$，所以第三个角是 $180-50-60=70^{\\circ}$。若只把给出的两个角相加得到 $110^{\\circ}$，那不是所求角，而是已用去的度数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An exterior angle of a triangle equals the sum of the two remote interior angles. If those remote angles are $45^{\\circ}$ and $65^{\\circ}$, what is the exterior angle?",
        "zh": "三角形的一个外角等于两个不相邻内角之和。若这两个不相邻内角为 $45^{\\circ}$ 和 $65^{\\circ}$，外角是多少？"
      },
      "choices": [
        "$55^{\\circ}$",
        "$110^{\\circ}$",
        "$70^{\\circ}$",
        "$120^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the exterior angle theorem the exterior angle is $45+65=110^{\\circ}$. A tempting error is to use the adjacent interior angle ($180-110=70^{\\circ}$) instead of the exterior angle itself.",
        "zh": "由外角定理，外角为 $45+65=110^{\\circ}$。常见错误是误用相邻的内角（$180-110=70^{\\circ}$），而非外角本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has angles $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$. Classified by its angles, this triangle is:",
        "zh": "一个三角形的角为 $30^{\\circ}$、$60^{\\circ}$、$90^{\\circ}$。按角分类，它是："
      },
      "choices": [
        "acute / 锐角三角形",
        "obtuse / 钝角三角形",
        "right / 直角三角形",
        "equiangular / 等角三角形"
      ],
      "answer": 2,
      "explanation": {
        "en": "One angle is exactly $90^{\\circ}$, so the triangle is right. It is not obtuse, since no angle exceeds $90^{\\circ}$.",
        "zh": "有一个角恰为 $90^{\\circ}$，所以是直角三角形。它不是钝角三角形，因为没有角大于 $90^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an isosceles triangle the vertex (apex) angle is $40^{\\circ}$. What is each base angle?",
        "zh": "等腰三角形的顶角为 $40^{\\circ}$。每个底角是多少？"
      },
      "choices": [
        "$110^{\\circ}$",
        "$55^{\\circ}$",
        "$40^{\\circ}$",
        "$70^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The two base angles are equal, so each is $(180-40)/2=70^{\\circ}$. Forgetting to divide the remaining $140^{\\circ}$ between the two equal angles leads to the wrong value.",
        "zh": "两个底角相等，所以每个为 $(180-40)/2=70^{\\circ}$。若忘记把剩下的 $140^{\\circ}$ 平分给两个相等的角，就会得到错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which set can be the three interior angles of a triangle?",
        "zh": "下列哪一组可以是一个三角形的三个内角？"
      },
      "choices": [
        "$50^{\\circ}, 60^{\\circ}, 70^{\\circ}$",
        "$100^{\\circ}, 50^{\\circ}, 40^{\\circ}$",
        "$30^{\\circ}, 30^{\\circ}, 100^{\\circ}$",
        "$40^{\\circ}, 60^{\\circ}, 90^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The angles must total $180^{\\circ}$; only $50+60+70=180$ works. The others sum to $190^{\\circ}$, $190^{\\circ}$, and $160^{\\circ}$, so they cannot close into a triangle.",
        "zh": "三个角之和必须为 $180^{\\circ}$；只有 $50+60+70=180$ 成立。其余各组之和为 $190^{\\circ}$、$190^{\\circ}$、$160^{\\circ}$，无法构成三角形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has side lengths $5$, $5$, and $8$. Classified by its sides, it is:",
        "zh": "一个三角形的边长为 $5$、$5$、$8$。按边分类，它是："
      },
      "choices": [
        "scalene / 不等边三角形",
        "isosceles / 等腰三角形",
        "equilateral / 等边三角形",
        "right / 直角三角形"
      ],
      "answer": 1,
      "explanation": {
        "en": "Exactly two sides are equal ($5$ and $5$), so it is isosceles. It is not scalene, which would require all three sides to differ.",
        "zh": "恰有两条边相等（$5$ 和 $5$），所以是等腰三角形。它不是不等边三角形，因为那需要三条边都不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An exterior angle of a triangle is $120^{\\circ}$. One remote interior angle is $70^{\\circ}$. What is the other remote interior angle?",
        "zh": "三角形的一个外角为 $120^{\\circ}$，其中一个不相邻内角为 $70^{\\circ}$。另一个不相邻内角是多少？"
      },
      "choices": [
        "$70^{\\circ}$",
        "$60^{\\circ}$",
        "$50^{\\circ}$",
        "$120^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The exterior angle equals the sum of the two remote interior angles, so the other is $120-70=50^{\\circ}$. Subtracting from $180^{\\circ}$ instead treats the exterior angle as an interior angle, which is incorrect here.",
        "zh": "外角等于两个不相邻内角之和，所以另一个为 $120-70=50^{\\circ}$。若改从 $180^{\\circ}$ 中减去，就把外角误当作内角处理了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an equilateral triangle, what is the measure of each interior angle?",
        "zh": "在等边三角形中，每个内角的度数是多少？"
      },
      "choices": [
        "$30^{\\circ}$",
        "$45^{\\circ}$",
        "$90^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "All three angles are equal, so each is $180/3=60^{\\circ}$. Choosing $90^{\\circ}$ confuses an equilateral triangle with a right triangle.",
        "zh": "三个角都相等，所以每个为 $180/3=60^{\\circ}$。选 $90^{\\circ}$ 是把等边三角形与直角三角形混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an isosceles triangle each base angle measures $65^{\\circ}$. What is the vertex angle?",
        "zh": "等腰三角形的每个底角为 $65^{\\circ}$。顶角是多少？"
      },
      "choices": [
        "$50^{\\circ}$",
        "$65^{\\circ}$",
        "$80^{\\circ}$",
        "$130^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The two equal base angles total $130^{\\circ}$, so the vertex angle is $180-130=50^{\\circ}$. Stopping at $130^{\\circ}$ gives the sum of the base angles, not the vertex angle.",
        "zh": "两个相等底角共 $130^{\\circ}$，所以顶角为 $180-130=50^{\\circ}$。停在 $130^{\\circ}$ 得到的是两底角之和，而非顶角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many obtuse angles can a single triangle have?",
        "zh": "一个三角形最多能有几个钝角？"
      },
      "choices": [
        "$2$",
        "$1$",
        "$3$",
        "$0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Two obtuse angles would already exceed $180^{\\circ}$, so a triangle can have at most one. Assuming it could have none ignores that obtuse triangles do exist.",
        "zh": "两个钝角相加已超过 $180^{\\circ}$，所以三角形最多有一个钝角。认为一个都没有则忽略了钝角三角形确实存在。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An exterior angle of a triangle is always ___ either of its remote interior angles.",
        "zh": "三角形的一个外角总是 ___ 它的任一不相邻内角。"
      },
      "choices": [
        "equal to / 等于",
        "less than / 小于",
        "greater than / 大于",
        "half of / 是……的一半"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since the exterior angle equals the sum of both remote interior angles, it must be larger than either one alone. Calling it equal ignores the second remote angle being added in.",
        "zh": "因为外角等于两个不相邻内角之和，所以它必大于其中任一个。说它相等就忽略了另一个不相邻内角也被加进来了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle in which all three interior angles are equal is called:",
        "zh": "三个内角都相等的三角形称为："
      },
      "choices": [
        "scalene / 不等边三角形",
        "right / 直角三角形",
        "isosceles / 等腰三角形",
        "equiangular / 等角三角形"
      ],
      "answer": 3,
      "explanation": {
        "en": "Equal angles make the triangle equiangular (each angle $60^{\\circ}$). Isosceles requires only two equal angles, so it is too weak to describe all three being equal.",
        "zh": "三个角相等的三角形是等角三角形（每个角 $60^{\\circ}$）。等腰三角形只需两个角相等，不足以描述三个角都相等的情况。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two angles of a triangle are $37^{\\circ}$ and $88^{\\circ}$. Find the third angle (in degrees).",
        "zh": "三角形的两个角为 $37^{\\circ}$ 和 $88^{\\circ}$。求第三个角（以度为单位）。"
      },
      "answer": "55",
      "accept": [
        "55°",
        "55 degrees",
        "55.0",
        "55 度"
      ],
      "explanation": {
        "en": "The third angle is $180-37-88=55^{\\circ}$.",
        "zh": "第三个角为 $180-37-88=55^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An exterior angle of a triangle is $140^{\\circ}$. One remote interior angle is $90^{\\circ}$. Find the other remote interior angle (in degrees).",
        "zh": "三角形的一个外角为 $140^{\\circ}$，其中一个不相邻内角为 $90^{\\circ}$。求另一个不相邻内角（以度为单位）。"
      },
      "answer": "50",
      "accept": [
        "50°",
        "50 degrees",
        "50.0",
        "50 度"
      ],
      "explanation": {
        "en": "By the exterior angle theorem, $140-90=50^{\\circ}$.",
        "zh": "由外角定理，$140-90=50^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In an isosceles triangle the vertex angle is $100^{\\circ}$. Find each base angle (in degrees).",
        "zh": "等腰三角形的顶角为 $100^{\\circ}$。求每个底角（以度为单位）。"
      },
      "answer": "40",
      "accept": [
        "40°",
        "40 degrees",
        "40.0",
        "40 度"
      ],
      "explanation": {
        "en": "Each base angle is $(180-100)/2=40^{\\circ}$.",
        "zh": "每个底角为 $(180-100)/2=40^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the measure (in degrees) of each interior angle of an equilateral triangle?",
        "zh": "等边三角形每个内角的度数是多少？"
      },
      "answer": "60",
      "accept": [
        "60°",
        "60 degrees",
        "60.0",
        "60 度"
      ],
      "explanation": {
        "en": "All angles equal, so each is $180/3=60^{\\circ}$.",
        "zh": "各角相等，所以每个为 $180/3=60^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The two remote interior angles of a triangle are $33^{\\circ}$ and $47^{\\circ}$. Find the exterior angle at the third vertex (in degrees).",
        "zh": "三角形的两个不相邻内角为 $33^{\\circ}$ 和 $47^{\\circ}$。求第三个顶点处的外角（以度为单位）。"
      },
      "answer": "80",
      "accept": [
        "80°",
        "80 degrees",
        "80.0",
        "80 度"
      ],
      "explanation": {
        "en": "The exterior angle equals $33+47=80^{\\circ}$.",
        "zh": "外角等于 $33+47=80^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In an isosceles triangle each base angle is $72^{\\circ}$. Find the vertex angle (in degrees).",
        "zh": "等腰三角形的每个底角为 $72^{\\circ}$。求顶角（以度为单位）。"
      },
      "answer": "36",
      "accept": [
        "36°",
        "36 degrees",
        "36.0",
        "36 度"
      ],
      "explanation": {
        "en": "The base angles total $144^{\\circ}$, so the vertex is $180-144=36^{\\circ}$.",
        "zh": "两底角共 $144^{\\circ}$，所以顶角为 $180-144=36^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has one angle of $90^{\\circ}$ and another of $31^{\\circ}$. Find the third angle (in degrees).",
        "zh": "直角三角形有一个 $90^{\\circ}$ 的角，另一个角为 $31^{\\circ}$。求第三个角（以度为单位）。"
      },
      "answer": "59",
      "accept": [
        "59°",
        "59 degrees",
        "59.0",
        "59 度"
      ],
      "explanation": {
        "en": "The third angle is $180-90-31=59^{\\circ}$.",
        "zh": "第三个角为 $180-90-31=59^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the sum (in degrees) of the three exterior angles of a triangle, one taken at each vertex?",
        "zh": "三角形每个顶点各取一个外角，这三个外角之和是多少（以度为单位）？"
      },
      "answer": "360",
      "accept": [
        "360°",
        "360 degrees",
        "360.0",
        "360 度"
      ],
      "explanation": {
        "en": "The exterior angles of any triangle (one per vertex) always sum to $360^{\\circ}$.",
        "zh": "任何三角形每个顶点取一个外角，其和恒为 $360^{\\circ}$。"
      }
    }
  ],
  "triangles-congruence/congruence-postulates": [
    {
      "type": "mc",
      "question": {
        "en": "Three pairs of corresponding sides of two triangles are equal. Which congruence criterion proves the triangles congruent?",
        "zh": "两个三角形的三组对应边分别相等。用哪个全等判定可以证明它们全等？"
      },
      "choices": [
        "SSS",
        "SAS",
        "ASA",
        "AAS"
      ],
      "answer": 0,
      "explanation": {
        "en": "Three pairs of equal sides is exactly Side-Side-Side (SSS). SAS would instead require an angle between two of the sides, which is not what is given here.",
        "zh": "三组边分别相等正是边边边（SSS）。SAS 则需要两边之间的夹角，而题目并未给出角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles have two pairs of equal sides and the angle BETWEEN those sides equal. Which criterion applies?",
        "zh": "两个三角形有两组相等的边，且这两边之间的夹角也相等。适用哪个判定？"
      },
      "choices": [
        "ASA",
        "SAS",
        "AAS",
        "HL"
      ],
      "answer": 1,
      "explanation": {
        "en": "An included angle between two equal sides is Side-Angle-Side (SAS). If the equal angle were not between the two sides, this would be the invalid SSA arrangement instead.",
        "zh": "两边之间的夹角相等即边角边（SAS）。若相等的角不在两边之间，就变成无效的 SSA 排列了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles have two pairs of equal angles and the side BETWEEN those angles equal. Which criterion applies?",
        "zh": "两个三角形有两组相等的角，且这两角之间的边也相等。适用哪个判定？"
      },
      "choices": [
        "AAS",
        "SSS",
        "ASA",
        "HL"
      ],
      "answer": 2,
      "explanation": {
        "en": "An included side between two equal angles is Angle-Side-Angle (ASA). AAS instead uses a side that is NOT between the two angles.",
        "zh": "两角之间的夹边相等即角边角（ASA）。AAS 用的则是不在两角之间的边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles have two pairs of equal angles and a pair of equal NON-included sides. Which criterion applies?",
        "zh": "两个三角形有两组相等的角，以及一组相等的非夹边。适用哪个判定？"
      },
      "choices": [
        "SAS",
        "ASA",
        "SSS",
        "AAS"
      ],
      "answer": 3,
      "explanation": {
        "en": "A non-included side with two equal angles is Angle-Angle-Side (AAS). Calling it ASA misreads the side as lying between the two angles.",
        "zh": "非夹边配两组相等角即角角边（AAS）。若说成 ASA，就误以为该边在两角之间了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The HL congruence criterion can be used ONLY for which kind of triangles?",
        "zh": "HL（斜边—直角边）全等判定只能用于哪种三角形？"
      },
      "choices": [
        "right triangles / 直角三角形",
        "all triangles / 所有三角形",
        "obtuse triangles / 钝角三角形",
        "equilateral triangles only / 仅等边三角形"
      ],
      "answer": 0,
      "explanation": {
        "en": "HL relies on a hypotenuse, which exists only in right triangles. Assuming it works for every triangle ignores that non-right triangles have no hypotenuse.",
        "zh": "HL 依赖斜边，而斜边只存在于直角三角形中。若认为它适用于所有三角形，就忽略了非直角三角形没有斜边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does AAA (three pairs of equal angles) fail to prove two triangles congruent?",
        "zh": "为什么 AAA（三组相等的角）不能证明两个三角形全等？"
      },
      "choices": [
        "it always works / 它总是成立",
        "the triangles may differ in size while keeping the same shape / 三角形可能形状相同但大小不同",
        "the angle sum exceeds $180^{\\circ}$ / 角度和超过 $180^{\\circ}$",
        "it requires a right angle / 它需要一个直角"
      ],
      "answer": 1,
      "explanation": {
        "en": "Equal angles fix the shape but not the size, so AAA gives similar (not congruent) triangles. The angle sum is always $180^{\\circ}$, so that is not the reason it fails.",
        "zh": "相等的角确定形状但不确定大小，所以 AAA 只能得到相似（而非全等）三角形。角度和始终为 $180^{\\circ}$，因此这不是它失效的原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why is SSA generally NOT a valid congruence criterion?",
        "zh": "为什么 SSA 通常不是有效的全等判定？"
      },
      "choices": [
        "SSA is actually valid / SSA 其实有效",
        "SSA is the same as SAS / SSA 等同于 SAS",
        "two non-congruent triangles can satisfy the same SSA data / 相同的 SSA 数据可对应两个不全等的三角形",
        "SSA needs three sides / SSA 需要三条边"
      ],
      "answer": 2,
      "explanation": {
        "en": "SSA is ambiguous: the same two sides and non-included angle can form two different triangles. Treating SSA as SAS ignores that the angle is not between the two sides.",
        "zh": "SSA 具有歧义：相同的两边和非夹角可以构成两个不同的三角形。把 SSA 当作 SAS 忽略了该角并不在两边之间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the HL criterion, what do the letters H and L stand for?",
        "zh": "在 HL 判定中，字母 H 和 L 分别代表什么？"
      },
      "choices": [
        "Height-Length / 高—长",
        "Hypotenuse-Line / 斜边—线",
        "Half-Length / 半—长",
        "Hypotenuse-Leg / 斜边—直角边"
      ],
      "answer": 3,
      "explanation": {
        "en": "HL means Hypotenuse-Leg: equal hypotenuses and one equal leg in right triangles. Reading L as the whole 'length' misses that it refers specifically to a leg.",
        "zh": "HL 表示斜边—直角边：直角三角形中斜边相等且一条直角边相等。把 L 理解为一般的“长度”就忽略了它特指直角边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In triangles $ABC$ and $DEF$, $AB=DE$, $\\angle B=\\angle E$, and $BC=EF$. Which criterion proves them congruent?",
        "zh": "在三角形 $ABC$ 与 $DEF$ 中，$AB=DE$，$\\angle B=\\angle E$，$BC=EF$。用哪个判定能证明它们全等？"
      },
      "choices": [
        "SAS",
        "ASA",
        "SSS",
        "AAS"
      ],
      "answer": 0,
      "explanation": {
        "en": "Angle $B$ sits between sides $AB$ and $BC$, so this is an included angle: SAS. Because the marked angle is between the two sides, it is not the ambiguous SSA case.",
        "zh": "角 $B$ 位于边 $AB$ 与 $BC$ 之间，是夹角，所以是 SAS。由于标注的角在两边之间，它不是有歧义的 SSA 情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two right triangles have equal hypotenuses and one pair of equal legs. Which criterion proves them congruent?",
        "zh": "两个直角三角形的斜边相等，且有一组直角边相等。用哪个判定能证明它们全等？"
      },
      "choices": [
        "SSA",
        "HL",
        "AAA",
        "ASA"
      ],
      "answer": 1,
      "explanation": {
        "en": "Equal hypotenuse and one equal leg in right triangles is exactly HL. Labeling it SSA overlooks that HL is the special right-triangle case that IS valid.",
        "zh": "直角三角形中斜边相等且一条直角边相等，正是 HL。把它叫作 SSA 忽略了 HL 是直角三角形中确实有效的特例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The reflexive property lets you state that a side shared by two triangles is:",
        "zh": "反身性（自反性）允许我们指出两个三角形共有的一条边："
      },
      "choices": [
        "longer than the others / 比其他边长",
        "perpendicular / 垂直的",
        "congruent to itself / 与自身相等（全等）",
        "bisected / 被平分"
      ],
      "answer": 2,
      "explanation": {
        "en": "A shared side equals itself, giving one pair of congruent sides for free. It says nothing about the side being perpendicular or bisected.",
        "zh": "共用的边等于其自身，从而免费得到一组相等的边。它并不说明该边垂直或被平分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the ASA criterion, the equal side must be located ___ the two equal angles.",
        "zh": "在 ASA 判定中，相等的边必须位于两个相等角的 ___。"
      },
      "choices": [
        "opposite / 对面",
        "above / 上方",
        "far from / 远离",
        "between (included by) / 之间（作为夹边）"
      ],
      "answer": 3,
      "explanation": {
        "en": "ASA requires the side to be included between the two angles. If it were opposite/non-included, the correct name would be AAS instead.",
        "zh": "ASA 要求该边为两角之间的夹边。若它是对边（非夹边），正确的名称应是 AAS。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the congruence criterion (abbreviation) proved by three pairs of equal corresponding sides.",
        "zh": "三组对应边分别相等，能证明哪个全等判定（写缩写）？"
      },
      "answer": "SSS",
      "accept": [
        "sss",
        "Side-Side-Side",
        "side side side",
        "SSS congruence",
        "边边边"
      ],
      "explanation": {
        "en": "Three equal sides is Side-Side-Side, abbreviated SSS.",
        "zh": "三条边分别相等即边边边，缩写 SSS。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the congruence criterion (abbreviation) for two equal sides and the included angle equal.",
        "zh": "两组边相等且它们的夹角相等，属于哪个全等判定（写缩写）？"
      },
      "answer": "SAS",
      "accept": [
        "sas",
        "Side-Angle-Side",
        "side angle side",
        "边角边"
      ],
      "explanation": {
        "en": "Two sides with the angle between them is Side-Angle-Side, abbreviated SAS.",
        "zh": "两边及其夹角即边角边，缩写 SAS。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the congruence criterion (abbreviation) that uses equal hypotenuses and one equal leg in right triangles.",
        "zh": "直角三角形中斜边相等且一条直角边相等，属于哪个全等判定（写缩写）？"
      },
      "answer": "HL",
      "accept": [
        "hl",
        "Hypotenuse-Leg",
        "hypotenuse leg",
        "斜边直角边",
        "斜边-直角边"
      ],
      "explanation": {
        "en": "Hypotenuse and a leg in right triangles is the HL criterion.",
        "zh": "直角三角形中斜边与一条直角边即 HL 判定。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the congruence criterion (abbreviation) for two equal angles and the included side equal.",
        "zh": "两组角相等且它们的夹边相等，属于哪个全等判定（写缩写）？"
      },
      "answer": "ASA",
      "accept": [
        "asa",
        "Angle-Side-Angle",
        "angle side angle",
        "角边角"
      ],
      "explanation": {
        "en": "Two angles with the side between them is Angle-Side-Angle, abbreviated ASA.",
        "zh": "两角及其夹边即角边角，缩写 ASA。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the congruence criterion (abbreviation) for two equal angles and a pair of equal non-included sides.",
        "zh": "两组角相等且一组非夹边相等，属于哪个全等判定（写缩写）？"
      },
      "answer": "AAS",
      "accept": [
        "aas",
        "Angle-Angle-Side",
        "angle angle side",
        "角角边"
      ],
      "explanation": {
        "en": "Two angles with a non-included side is Angle-Angle-Side, abbreviated AAS.",
        "zh": "两角及一条非夹边即角角边，缩写 AAS。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A side shared by two triangles is congruent to itself by the ___ property. Fill in the blank.",
        "zh": "两个三角形共用的一条边根据 ___ 性与自身相等。填空。"
      },
      "answer": "reflexive",
      "accept": [
        "Reflexive",
        "reflexive property",
        "自反",
        "反身",
        "自反性",
        "反身性"
      ],
      "explanation": {
        "en": "A segment equals itself by the reflexive property.",
        "zh": "线段等于其自身，依据的是反身性（自反性）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The SSA arrangement fails because it is the ___ case, where two different triangles can fit the same data. Fill in the blank (one word).",
        "zh": "SSA 排列之所以失效，是因为它是 ___ 情形，相同的数据可对应两个不同的三角形。填空（一个词）。"
      },
      "answer": "ambiguous",
      "accept": [
        "Ambiguous",
        "the ambiguous case",
        "ambiguous case",
        "歧义",
        "有歧义",
        "二义"
      ],
      "explanation": {
        "en": "SSA is the ambiguous case: the given parts can determine two non-congruent triangles.",
        "zh": "SSA 是歧义情形：所给条件可确定两个不全等的三角形。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "AAA (three equal angles) proves two triangles are ___ but not necessarily congruent. Fill in the blank (one word).",
        "zh": "AAA（三组相等的角）只能证明两个三角形 ___，而不一定全等。填空（一个词）。"
      },
      "answer": "similar",
      "accept": [
        "Similar",
        "similar triangles",
        "相似"
      ],
      "explanation": {
        "en": "Equal angles guarantee the same shape, so the triangles are similar; equal size (congruence) is not guaranteed.",
        "zh": "相等的角保证形状相同，所以三角形相似；但大小相等（全等）无法保证。"
      }
    }
  ],
  "triangles-congruence/cpctc-proofs": [
    {
      "type": "mc",
      "question": {
        "en": "What does the abbreviation CPCTC stand for?",
        "zh": "缩写 CPCTC 代表什么？"
      },
      "choices": [
        "Corresponding Parts of Congruent Triangles are Congruent / 全等三角形的对应部分相等",
        "Congruent Perimeters of Congruent Triangles are Congruent / 全等三角形的周长相等",
        "Corresponding Points on Congruent Triangles Coincide / 全等三角形上的对应点重合",
        "Complete Proof of Congruent Triangles Concluded / 全等三角形证明完成"
      ],
      "answer": 0,
      "explanation": {
        "en": "CPCTC means Corresponding Parts of Congruent Triangles are Congruent. It is about matching sides and angles, not about perimeter or area being equal.",
        "zh": "CPCTC 指全等三角形的对应部分相等。它讲的是对应的边和角，而不是周长或面积相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "CPCTC may be used in a proof only AFTER you have done what?",
        "zh": "在证明中，只有在完成什么之后才能使用 CPCTC？"
      },
      "choices": [
        "drawn the triangles / 画出三角形",
        "proven the two triangles congruent / 证明两个三角形全等",
        "measured every side / 测量每条边",
        "found the area / 求出面积"
      ],
      "answer": 1,
      "explanation": {
        "en": "CPCTC follows from congruence, so the triangles must first be proven congruent. Merely drawing or measuring does not establish the congruence CPCTC depends on.",
        "zh": "CPCTC 由全等推出，所以必须先证明两个三角形全等。仅仅画图或测量并不能建立 CPCTC 所依赖的全等关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a proof, CPCTC is used to conclude that:",
        "zh": "在证明中，CPCTC 用来得出："
      },
      "choices": [
        "the triangles are similar / 三角形相似",
        "the two triangles have equal area / 两个三角形面积相等",
        "a specific pair of corresponding parts is congruent / 某一对对应部分相等",
        "the perimeters are equal / 周长相等"
      ],
      "answer": 2,
      "explanation": {
        "en": "CPCTC lets you claim an individual pair of corresponding sides or angles is congruent. Concluding only 'similar' is weaker than the congruence CPCTC actually provides.",
        "zh": "CPCTC 允许你断言某一对对应边或对应角相等。只得出“相似”比 CPCTC 实际给出的全等结论要弱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an overlapping-triangle proof, the reflexive property provides:",
        "zh": "在重叠三角形的证明中，反身性（自反性）提供了："
      },
      "choices": [
        "an extra angle from nowhere / 凭空多出的一个角",
        "a pair of parallel lines / 一组平行线",
        "a midpoint / 一个中点",
        "a shared side (or angle) congruent to itself / 一条共用边（或角）与自身相等"
      ],
      "answer": 3,
      "explanation": {
        "en": "Overlapping triangles usually share a side or angle, and the reflexive property makes that shared part congruent to itself. It does not create parallels or midpoints.",
        "zh": "重叠三角形通常共用一条边或一个角，反身性使这一共用部分与自身相等。它并不产生平行线或中点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a proof that ends with CPCTC, which step must come FIRST?",
        "zh": "在以 CPCTC 结尾的证明中，哪一步必须最先完成？"
      },
      "choices": [
        "prove the triangles congruent, then apply CPCTC / 先证三角形全等，再用 CPCTC",
        "apply CPCTC, then prove congruence / 先用 CPCTC，再证全等",
        "compute the area, then apply CPCTC / 先求面积，再用 CPCTC",
        "state CPCTC by itself / 单独写出 CPCTC"
      ],
      "answer": 0,
      "explanation": {
        "en": "You must establish congruence first; CPCTC is the justification that comes afterward. Using CPCTC before proving congruence has nothing to support it.",
        "zh": "必须先确立全等；CPCTC 是随后给出的理由。在证明全等之前使用 CPCTC 没有任何依据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A common first strategy when working with overlapping triangles is to:",
        "zh": "处理重叠三角形时，常用的第一步策略是："
      },
      "choices": [
        "ignore the overlap entirely / 完全忽略重叠部分",
        "redraw the two triangles separately / 把两个三角形分开重画",
        "use only the single largest triangle / 只使用最大的那个三角形",
        "apply CPCTC before anything else / 先于一切使用 CPCTC"
      ],
      "answer": 1,
      "explanation": {
        "en": "Redrawing the triangles apart makes the corresponding parts easy to match. Applying CPCTC first is impossible because congruence has not yet been shown.",
        "zh": "把两个三角形分开重画能让对应部分一目了然。先用 CPCTC 是不可能的，因为全等尚未证明。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles share the same angle at a common vertex. That shared angle is congruent to itself by which property?",
        "zh": "两个三角形在同一顶点处共用同一个角。这个共用角与自身相等，依据哪条性质？"
      },
      "choices": [
        "vertical angles / 对顶角",
        "transitive property / 传递性",
        "reflexive property / 反身性（自反性）",
        "substitution / 代入"
      ],
      "answer": 2,
      "explanation": {
        "en": "A part that coincides with itself is congruent to itself by the reflexive property. Vertical angles would require two DIFFERENT angles formed by intersecting lines, not one shared angle.",
        "zh": "与自身重合的部分依反身性与自身相等。对顶角需要相交直线形成的两个不同的角，而不是同一个共用角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You must prove two segments congruent, and they are corresponding sides of two triangles. The best strategy is to:",
        "zh": "你需要证明两条线段相等，而它们是两个三角形的对应边。最佳策略是："
      },
      "choices": [
        "assume they are equal / 直接假设它们相等",
        "measure both segments / 测量两条线段",
        "use the distance formula only / 只用距离公式",
        "prove the triangles congruent, then use CPCTC / 先证三角形全等，再用 CPCTC"
      ],
      "answer": 3,
      "explanation": {
        "en": "Proving the triangles congruent and then citing CPCTC transfers congruence to the sides. Measuring or assuming is not a valid deductive proof.",
        "zh": "先证三角形全等，再引用 CPCTC，就把全等传递到这两条边上。测量或假设都不是有效的演绎证明。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a two-column proof, the statement justified by CPCTC comes ___ the statement that the triangles are congruent.",
        "zh": "在两栏证明中，由 CPCTC 支持的陈述位于“两三角形全等”这一陈述的 ___。"
      },
      "choices": [
        "after / 之后",
        "instead of / 取代",
        "before / 之前",
        "without / 无需"
      ],
      "answer": 0,
      "explanation": {
        "en": "CPCTC justifies a line that appears after the congruence line, since it depends on it. Placing it before leaves the congruence unproven when CPCTC is cited.",
        "zh": "CPCTC 支持的那一行出现在全等那一行之后，因为它依赖于全等。若放在之前，引用 CPCTC 时全等尚未证明。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $\\triangle ABC \\cong \\triangle DEF$, which statement is a valid CPCTC conclusion?",
        "zh": "已知 $\\triangle ABC \\cong \\triangle DEF$，下列哪个是有效的 CPCTC 结论？"
      },
      "choices": [
        "$\\overline{AB}\\cong\\overline{EF}$",
        "$\\angle A\\cong\\angle D$",
        "$\\angle A\\cong\\angle E$",
        "$\\overline{AB}\\cong\\overline{DF}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The correspondence $A\\leftrightarrow D$ makes $\\angle A\\cong\\angle D$. Matching $A$ with $E$ instead misreads the order of the congruence statement.",
        "zh": "对应关系 $A\\leftrightarrow D$ 给出 $\\angle A\\cong\\angle D$。把 $A$ 与 $E$ 配对则读错了全等式中字母的顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Vertical angles formed where two segments cross are frequently used in proofs to establish:",
        "zh": "两条线段相交处形成的对顶角，常在证明中用来建立："
      },
      "choices": [
        "two parallel lines / 两条平行线",
        "a pair of congruent sides / 一对相等的边",
        "a pair of congruent angles / 一对相等的角",
        "the reflexive property / 反身性"
      ],
      "answer": 2,
      "explanation": {
        "en": "Vertical angles are congruent, supplying a pair of equal angles for a congruence criterion. They say nothing directly about sides being equal.",
        "zh": "对顶角相等，为全等判定提供一对相等的角。它们并不直接说明边相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After proving two triangles congruent by SAS, to conclude a pair of corresponding angles is equal you cite:",
        "zh": "用 SAS 证明两个三角形全等后，要得出一对对应角相等，应引用："
      },
      "choices": [
        "SAS again / 再次引用 SAS",
        "the reflexive property / 反身性",
        "SSS",
        "CPCTC"
      ],
      "answer": 3,
      "explanation": {
        "en": "Once congruent, corresponding angles are equal by CPCTC. Citing SAS again only re-states the congruence and does not name the angle pair as a result.",
        "zh": "一旦全等，对应角相等即由 CPCTC 得出。再次引用 SAS 只是重述全等，并未把这对角作为结论列出。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank: CPCTC lets you conclude that corresponding parts of congruent triangles are ___.",
        "zh": "填空：CPCTC 使你得出全等三角形的对应部分是 ___ 的。"
      },
      "answer": "congruent",
      "accept": [
        "Congruent",
        "equal",
        "全等",
        "相等",
        "congruent."
      ],
      "explanation": {
        "en": "The final C in CPCTC states the parts are congruent.",
        "zh": "CPCTC 中最后的 C 表示对应部分相等（全等）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank: You may cite CPCTC only after proving the two triangles ___.",
        "zh": "填空：只有在证明两个三角形 ___ 之后，才能引用 CPCTC。"
      },
      "answer": "congruent",
      "accept": [
        "Congruent",
        "全等",
        "are congruent",
        "相等"
      ],
      "explanation": {
        "en": "CPCTC depends on the triangles already being congruent.",
        "zh": "CPCTC 以两个三角形已经全等为前提。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\triangle ABC \\cong \\triangle DEF$, which side of $\\triangle DEF$ corresponds to $\\overline{BC}$?",
        "zh": "已知 $\\triangle ABC \\cong \\triangle DEF$，$\\triangle DEF$ 中与 $\\overline{BC}$ 对应的是哪条边？"
      },
      "answer": "EF",
      "accept": [
        "ef",
        "FE",
        "fe",
        "$\\overline{EF}$",
        "EF段",
        "边EF"
      ],
      "explanation": {
        "en": "With $B\\leftrightarrow E$ and $C\\leftrightarrow F$, side $BC$ corresponds to $EF$.",
        "zh": "由 $B\\leftrightarrow E$、$C\\leftrightarrow F$，边 $BC$ 对应 $EF$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\triangle ABC \\cong \\triangle DEF$, which angle of $\\triangle DEF$ corresponds to $\\angle A$? (Give the vertex letter.)",
        "zh": "已知 $\\triangle ABC \\cong \\triangle DEF$，$\\triangle DEF$ 中与 $\\angle A$ 对应的是哪个角？（写出顶点字母。）"
      },
      "answer": "D",
      "accept": [
        "d",
        "angle D",
        "∠D",
        "$\\angle D$",
        "angle d",
        "D角",
        "角D"
      ],
      "explanation": {
        "en": "The first letters correspond, so $A\\leftrightarrow D$ and $\\angle A$ matches $\\angle D$.",
        "zh": "首字母对应，所以 $A\\leftrightarrow D$，$\\angle A$ 对应 $\\angle D$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\triangle ABC \\cong \\triangle DEF$, which angle of $\\triangle DEF$ corresponds to $\\angle C$? (Give the vertex letter.)",
        "zh": "已知 $\\triangle ABC \\cong \\triangle DEF$，$\\triangle DEF$ 中与 $\\angle C$ 对应的是哪个角？（写出顶点字母。）"
      },
      "answer": "F",
      "accept": [
        "f",
        "angle F",
        "∠F",
        "$\\angle F$",
        "angle f",
        "F角",
        "角F"
      ],
      "explanation": {
        "en": "The third letters correspond, so $C\\leftrightarrow F$ and $\\angle C$ matches $\\angle F$.",
        "zh": "第三个字母对应，所以 $C\\leftrightarrow F$，$\\angle C$ 对应 $\\angle F$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank: A side shared by two overlapping triangles is congruent to itself by the ___ property.",
        "zh": "填空：两个重叠三角形共用的一条边，根据 ___ 性与自身相等。"
      },
      "answer": "reflexive",
      "accept": [
        "Reflexive",
        "reflexive property",
        "自反",
        "反身",
        "自反性",
        "反身性"
      ],
      "explanation": {
        "en": "A segment equals itself by the reflexive property.",
        "zh": "线段等于其自身，依据反身性（自反性）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the abbreviation CPCTC, what word does the letter P stand for?",
        "zh": "在缩写 CPCTC 中，字母 P 代表哪个词？"
      },
      "answer": "Parts",
      "accept": [
        "parts",
        "part",
        "Part",
        "部分",
        "对应部分"
      ],
      "explanation": {
        "en": "CPCTC = Corresponding PARTS of Congruent Triangles are Congruent.",
        "zh": "CPCTC = 全等三角形的对应“部分”（Parts）相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\triangle ABC \\cong \\triangle DEF$, which side of $\\triangle DEF$ corresponds to $\\overline{CA}$?",
        "zh": "已知 $\\triangle ABC \\cong \\triangle DEF$，$\\triangle DEF$ 中与 $\\overline{CA}$ 对应的是哪条边？"
      },
      "answer": "FD",
      "accept": [
        "fd",
        "DF",
        "df",
        "$\\overline{FD}$",
        "边FD",
        "边DF"
      ],
      "explanation": {
        "en": "With $C\\leftrightarrow F$ and $A\\leftrightarrow D$, side $CA$ corresponds to $FD$ (same as $DF$).",
        "zh": "由 $C\\leftrightarrow F$、$A\\leftrightarrow D$，边 $CA$ 对应 $FD$（即 $DF$）。"
      }
    }
  ],
  "relationships-within-triangles/bisectors-medians-altitudes": [
    {
      "type": "mc",
      "question": {
        "en": "The three perpendicular bisectors of a triangle intersect at a single point. What is this point of concurrency called?",
        "zh": "三角形的三条垂直平分线交于一点。这个交点叫什么？"
      },
      "choices": [
        "Circumcenter / 外心",
        "Centroid / 重心",
        "Incenter / 内心",
        "Orthocenter / 垂心"
      ],
      "answer": 0,
      "explanation": {
        "en": "Perpendicular bisectors are the locus of points equidistant from two vertices, so their common point is equidistant from all three vertices — the circumcenter. Confusing it with the meeting point of the angle bisectors (which is equidistant from the sides, not the vertices) is the usual mistake.",
        "zh": "垂直平分线是到两顶点等距的点的集合，所以它们的公共点到三个顶点都等距，即外心。把它与角平分线的交点（那是到各边等距，而非到顶点等距）混淆是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The circumcenter of a triangle is equidistant from which set of features?",
        "zh": "三角形的外心到下列哪一组对象的距离相等？"
      },
      "choices": [
        "The three sides / 三条边",
        "The three vertices / 三个顶点",
        "The three midsegments / 三条中位线",
        "The three altitudes / 三条高"
      ],
      "answer": 1,
      "explanation": {
        "en": "The circumcenter is the center of the circumscribed circle, which passes through all three vertices, so its distances to the vertices (the circumradius) are equal. Answering 'the three sides' describes the incenter instead, which sits at equal distance from the sides.",
        "zh": "外心是外接圆的圆心，外接圆经过三个顶点，所以它到各顶点的距离（外接圆半径）相等。回答“三条边”描述的其实是内心，内心才到各边等距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The three angle bisectors of a triangle are concurrent at which point?",
        "zh": "三角形的三条角平分线交于哪一点？"
      },
      "choices": [
        "Centroid / 重心",
        "Circumcenter / 外心",
        "Incenter / 内心",
        "Orthocenter / 垂心"
      ],
      "answer": 2,
      "explanation": {
        "en": "An angle bisector is the locus of points equidistant from the two sides of an angle, so the three bisectors meet at the incenter, equidistant from all three sides. Picking the circumcenter confuses equal distance to the sides with equal distance to the vertices.",
        "zh": "角平分线是到角两边等距的点的集合，所以三条角平分线交于内心，内心到三边等距。选外心是把“到各边等距”与“到各顶点等距”混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The incenter of a triangle is the center of which circle?",
        "zh": "三角形的内心是下列哪个圆的圆心？"
      },
      "choices": [
        "The circumscribed circle / 外接圆",
        "The nine-point circle / 九点圆",
        "A circle through the midpoints / 过各边中点的圆",
        "The inscribed circle / 内切圆"
      ],
      "answer": 3,
      "explanation": {
        "en": "Because the incenter is equidistant from all three sides, that common distance is the radius of the inscribed circle, which is tangent to each side. Choosing the circumscribed circle reverses incenter and circumcenter — the circumscribed circle is centered at the circumcenter and passes through the vertices.",
        "zh": "因为内心到三边等距，这个公共距离就是内切圆的半径，内切圆与三边都相切。选外接圆是把内心与外心弄反了——外接圆以外心为圆心并过各顶点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The three medians of a triangle intersect at which point?",
        "zh": "三角形的三条中线交于哪一点？"
      },
      "choices": [
        "Centroid / 重心",
        "Orthocenter / 垂心",
        "Incenter / 内心",
        "Circumcenter / 外心"
      ],
      "answer": 0,
      "explanation": {
        "en": "A median joins a vertex to the midpoint of the opposite side, and the three medians meet at the centroid, the triangle's balance point. Selecting the orthocenter instead confuses medians with altitudes — altitudes are perpendicular to the sides, medians hit the midpoints.",
        "zh": "中线连接顶点与对边中点，三条中线交于重心，即三角形的平衡点。选垂心是把中线与高混淆了——高与对边垂直，而中线连到中点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The centroid divides each median so that the distance from the vertex to the centroid compared to the distance from the centroid to the midpoint is in what ratio?",
        "zh": "重心分每条中线，使得从顶点到重心的距离与从重心到中点的距离之比为多少？"
      },
      "choices": [
        "$1:1$",
        "$2:1$",
        "$3:1$",
        "$3:2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The centroid sits two-thirds of the way from each vertex to the opposite midpoint, so the vertex-to-centroid piece is twice the centroid-to-midpoint piece — a $2:1$ ratio. Reading the ratio as $1:1$ wrongly assumes the centroid is the median's midpoint.",
        "zh": "重心位于从每个顶点到对边中点全程的三分之二处，所以顶点到重心的一段是重心到中点一段的两倍，即 $2:1$。把比读成 $1:1$ 是错误地以为重心是中线的中点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The three altitudes of a triangle (or their extensions) meet at which point?",
        "zh": "三角形的三条高（或其延长线）交于哪一点？"
      },
      "choices": [
        "Centroid / 重心",
        "Incenter / 内心",
        "Orthocenter / 垂心",
        "Circumcenter / 外心"
      ],
      "answer": 2,
      "explanation": {
        "en": "An altitude is perpendicular from a vertex to the line containing the opposite side; the three altitudes concur at the orthocenter. Answering centroid confuses altitudes with medians — the centroid comes from medians, which run to the midpoints, not perpendicular to the sides.",
        "zh": "高是从顶点到对边所在直线的垂线，三条高交于垂心。回答重心是把高与中线混淆了——重心来自中线，中线连到中点而非与边垂直。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly describes an altitude of a triangle?",
        "zh": "下列哪项正确描述了三角形的高？"
      },
      "choices": [
        "A segment joining the midpoints of two sides / 连接两边中点的线段",
        "A segment from a vertex to the midpoint of the opposite side / 从顶点到对边中点的线段",
        "A segment bisecting a vertex angle / 平分顶角的线段",
        "A segment from a vertex perpendicular to the line containing the opposite side / 从顶点向对边所在直线作的垂线段"
      ],
      "answer": 3,
      "explanation": {
        "en": "An altitude is drawn from a vertex perpendicular to the opposite side (or its extension). Describing a segment to the midpoint instead defines a median; the two coincide only in special triangles, not in general.",
        "zh": "高是从顶点向对边（或其延长线）所作的垂线。描述成连到中点的线段其实是中线；两者只在特殊三角形中重合，一般情况下并不相同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Midsegment Theorem, a midsegment of a triangle is parallel to the third side and its length is what fraction of that side?",
        "zh": "由中位线定理，三角形的中位线平行于第三边，其长度是该边的几分之几？"
      },
      "choices": [
        "One half / 二分之一",
        "One third / 三分之一",
        "The same length / 相等",
        "Two thirds / 三分之二"
      ],
      "answer": 0,
      "explanation": {
        "en": "A midsegment connects the midpoints of two sides; it is parallel to the third side and exactly half its length. Treating it as equal in length ignores that connecting the midpoints shrinks the segment to half the base.",
        "zh": "中位线连接两边的中点，它平行于第三边且长度恰为第三边的一半。把它看成等长忽略了：连接中点会使线段缩短为底边的一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which point of concurrency is always located inside the triangle, no matter the triangle's shape?",
        "zh": "无论三角形形状如何，下列哪个交点始终位于三角形内部？"
      },
      "choices": [
        "Circumcenter / 外心",
        "Incenter / 内心",
        "Orthocenter / 垂心",
        "None of them / 都不是"
      ],
      "answer": 1,
      "explanation": {
        "en": "The incenter (like the centroid) always lies inside the triangle because it is where the inscribed circle sits. The circumcenter and orthocenter can fall outside for an obtuse triangle, so choosing the circumcenter overlooks the obtuse case.",
        "zh": "内心（和重心一样）始终位于三角形内部，因为它是内切圆所在处。对于钝角三角形，外心与垂心可能落在外部，所以选外心忽略了钝角的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle, where is the circumcenter located?",
        "zh": "在直角三角形中，外心位于何处？"
      },
      "choices": [
        "At the centroid / 重心处",
        "At the right-angle vertex / 直角顶点处",
        "At the midpoint of the hypotenuse / 斜边的中点",
        "Outside the triangle / 三角形外部"
      ],
      "answer": 2,
      "explanation": {
        "en": "In a right triangle the hypotenuse is a diameter of the circumscribed circle, so the circumcenter is the midpoint of the hypotenuse and the circumradius equals half the hypotenuse. Placing it at the right-angle vertex confuses the circle's center with a point that lies on the circle.",
        "zh": "在直角三角形中，斜边是外接圆的直径，所以外心是斜边的中点，外接圆半径等于斜边的一半。把它放在直角顶点是把圆心与圆上的一点混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A median of a triangle measures 15. How far is the vertex from the centroid along this median?",
        "zh": "三角形的一条中线长为 15。沿这条中线，顶点到重心的距离是多少？"
      },
      "choices": [
        "$5$",
        "$7.5$",
        "$3$",
        "$10$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The centroid is two-thirds of the way from the vertex, so vertex-to-centroid $= \\frac{2}{3}\\times 15 = 10$. Getting $5$ comes from taking one-third of the median (the shorter centroid-to-midpoint piece) instead of the two-thirds vertex piece.",
        "zh": "重心位于从顶点起全程的三分之二处，所以顶点到重心 $= \\frac{2}{3}\\times 15 = 10$。得到 $5$ 是取了中线的三分之一（较短的重心到中点段），而非顶点端的三分之二。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A median of a triangle has length 18. What is the distance from the vertex to the centroid?",
        "zh": "三角形的一条中线长为 18。从顶点到重心的距离是多少？"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "Vertex-to-centroid is two-thirds of the median: $\\frac{2}{3}\\times 18 = 12$. Answering $6$ would be taking one-third (the centroid-to-midpoint part) by mistake.",
        "zh": "顶点到重心是中线的三分之二：$\\frac{2}{3}\\times 18 = 12$。回答 $6$ 是错误地取了三分之一（重心到中点的那段）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "On a median, the distance from the vertex to the centroid is 14. What is the distance from the centroid to the midpoint of the opposite side?",
        "zh": "在一条中线上，从顶点到重心的距离是 14。从重心到对边中点的距离是多少？"
      },
      "answer": "7",
      "accept": [
        "7",
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "The vertex-to-centroid piece is twice the centroid-to-midpoint piece ($2:1$), so the shorter piece is $14\\div 2 = 7$. Answering $28$ inverts the ratio and doubles instead of halving.",
        "zh": "顶点到重心一段是重心到中点一段的两倍（$2:1$），所以较短一段为 $14\\div 2 = 7$。回答 $28$ 是把比例倒置，做了乘二而非除二。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a triangle, a midsegment is drawn parallel to the third side. If the third side (the side it does not touch) is 14, how long is the midsegment?",
        "zh": "在三角形中，作一条平行于第三边的中位线。若第三边（它不接触的那条边）长为 14，则中位线有多长？"
      },
      "answer": "7",
      "accept": [
        "7",
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "A midsegment is half the length of the side it is parallel to: $14\\div 2 = 7$. Answering $28$ multiplies by two instead of taking half.",
        "zh": "中位线是它所平行的边长的一半：$14\\div 2 = 7$。回答 $28$ 是乘二而非取一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A midsegment of a triangle has length 6.5. What is the length of the side it is parallel to?",
        "zh": "三角形的一条中位线长为 6.5。它所平行的边长是多少？"
      },
      "answer": "13",
      "accept": [
        "13",
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "The parallel side is twice the midsegment: $2\\times 6.5 = 13$. Answering $3.25$ halves again instead of doubling — the midsegment is the shorter of the two.",
        "zh": "所平行的边是中位线的两倍：$2\\times 6.5 = 13$。回答 $3.25$ 是又取了一半而非乘二——中位线才是较短的那条。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has legs of length 10 and 24 and a hypotenuse of length 26. What is the radius of its circumscribed circle?",
        "zh": "一个直角三角形的两直角边长为 10 和 24，斜边长为 26。它的外接圆半径是多少？"
      },
      "answer": "13",
      "accept": [
        "13",
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "In a right triangle the hypotenuse is the diameter of the circumscribed circle, so the radius is half the hypotenuse: $26\\div 2 = 13$. Using a leg such as $10$ or $24$ ignores that only the hypotenuse serves as the diameter.",
        "zh": "在直角三角形中，斜边是外接圆的直径，所以半径为斜边的一半：$26\\div 2 = 13$。用直角边如 $10$ 或 $24$ 忽略了只有斜边才是直径。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has vertices at $(0,0)$, $(12,0)$, and $(6,9)$. What is the $y$-coordinate of its centroid?",
        "zh": "一个三角形的顶点为 $(0,0)$、$(12,0)$、$(6,9)$。它重心的 $y$ 坐标是多少？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The centroid is the average of the vertices, so its $y$-coordinate is $\\frac{0+0+9}{3}=3$. Using $9$ (the top vertex height) skips averaging over all three vertices.",
        "zh": "重心是各顶点的平均，所以其 $y$ 坐标为 $\\frac{0+0+9}{3}=3$。用 $9$（顶部顶点的高）是漏掉了对三个顶点求平均。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "On a median, the distance from the centroid to the midpoint of the opposite side is 4. What is the full length of the median?",
        "zh": "在一条中线上，从重心到对边中点的距离是 4。这条中线的全长是多少？"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "The centroid-to-midpoint piece is one-third of the median, so the whole median is $3\\times 4 = 12$. Answering $8$ finds only the vertex-to-centroid part (two-thirds) and stops short of the full length.",
        "zh": "重心到中点一段是中线的三分之一，所以整条中线为 $3\\times 4 = 12$。回答 $8$ 只求出了顶点到重心的部分（三分之二），没有得到全长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has vertices at $(2,4)$, $(8,6)$, and $(5,8)$. What is the $x$-coordinate of its centroid?",
        "zh": "一个三角形的顶点为 $(2,4)$、$(8,6)$、$(5,8)$。它重心的 $x$ 坐标是多少？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The centroid's $x$-coordinate is the average of the vertices' $x$-values: $\\frac{2+8+5}{3}=5$. Adding without dividing by three (getting $15$) forgets that the centroid averages the coordinates.",
        "zh": "重心的 $x$ 坐标是各顶点 $x$ 值的平均：$\\frac{2+8+5}{3}=5$。只相加而不除以三（得 $15$）忘记了重心要对坐标取平均。"
      }
    }
  ],
  "relationships-within-triangles/triangle-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following sets of three lengths can form a triangle?",
        "zh": "下列哪一组三条长度可以构成三角形？"
      },
      "choices": [
        "$6, 8, 13$",
        "$4, 5, 10$",
        "$2, 3, 6$",
        "$1, 2, 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A triangle is possible only when the sum of the two shorter sides exceeds the longest side. Here $6+8=14>13$ works, while $2+3=5<6$, $4+5=9<10$, and $1+2=3$ (not greater than $3$) all fail. Checking only one pair of sides instead of the two shortest is the common slip.",
        "zh": "只有当两条较短边之和大于最长边时才能构成三角形。此处 $6+8=14>13$ 成立，而 $2+3=5<6$、$4+5=9<10$、$1+2=3$（不大于 $3$）都不成立。只验证某一对边而非两条最短边是常见失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has two sides of length 5 and 8. Which inequality gives all possible lengths $x$ of the third side?",
        "zh": "一个三角形有两条边长为 5 和 8。下列哪个不等式给出第三边长度 $x$ 的所有可能取值？"
      },
      "choices": [
        "$x < 13$",
        "$3 < x < 13$",
        "$5 < x < 8$",
        "$x > 3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The third side must be greater than the difference and less than the sum of the other two: $8-5<x<8+5$, i.e. $3<x<13$. Writing $5<x<8$ mistakes the two given sides themselves for the bounds instead of their sum and difference.",
        "zh": "第三边必须大于两边之差且小于两边之和：$8-5<x<8+5$，即 $3<x<13$。写成 $5<x<8$ 是把两条已知边本身当成了边界，而不是用它们的和与差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In any triangle, the largest angle is located opposite the ___ side.",
        "zh": "在任何三角形中，最大的角位于___边的对面。"
      },
      "choices": [
        "shortest / 最短",
        "middle / 中间长度",
        "longest / 最长",
        "perpendicular / 垂直"
      ],
      "answer": 2,
      "explanation": {
        "en": "Bigger sides subtend bigger angles, so the largest angle sits opposite the longest side. Pairing the largest angle with the shortest side reverses the relationship.",
        "zh": "较长的边对应较大的角，所以最大的角位于最长边的对面。把最大的角与最短边配对是把这种关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has sides of length 6, 9, and 11. Which angle is the smallest?",
        "zh": "一个三角形的边长为 6、9 和 11。哪个角最小？"
      },
      "choices": [
        "All three angles are equal / 三个角都相等",
        "The angle opposite the side of length 9 / 长度为 9 的边所对的角",
        "The angle opposite the side of length 11 / 长度为 11 的边所对的角",
        "The angle opposite the side of length 6 / 长度为 6 的边所对的角"
      ],
      "answer": 3,
      "explanation": {
        "en": "The smallest angle lies opposite the shortest side, which is 6. Choosing the angle opposite 11 finds the largest angle instead — that side is the longest, not the shortest.",
        "zh": "最小的角位于最短边的对面，即 6。选择 11 所对的角得到的是最大角——那条边是最长的，而非最短的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles have two pairs of congruent sides. By the Hinge Theorem, the triangle with the larger included angle has the ___ third side.",
        "zh": "两个三角形有两组对应相等的边。根据铰链定理，夹角较大的三角形的第三边___。"
      },
      "choices": [
        "longer / 较长",
        "equal-length / 等长",
        "shorter / 较短",
        "undetermined / 无法确定"
      ],
      "answer": 0,
      "explanation": {
        "en": "With two pairs of sides fixed, opening the included angle wider spreads the endpoints farther apart, so a larger included angle yields a longer third side. Expecting a shorter side treats a wider angle as if it pulled the endpoints closer.",
        "zh": "在两组边固定的情况下，把夹角张得越大，端点分得越开，所以较大的夹角对应较长的第三边。以为得到较短的边是把张大的角误当成把端点拉近了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Can a triangle have sides of length 7, 7, and 15?",
        "zh": "边长为 7、7 和 15 的三角形能否存在？"
      },
      "choices": [
        "Yes, it forms a valid triangle / 能，构成有效三角形",
        "No, because $7+7 < 15$ / 不能，因为 $7+7 < 15$",
        "No, because $7+15 < 7$ / 不能，因为 $7+15 < 7$",
        "Yes, because two sides are equal / 能，因为有两条边相等"
      ],
      "answer": 1,
      "explanation": {
        "en": "The two shorter sides must add to more than the longest, but $7+7=14<15$, so no triangle exists. Deciding it works because two sides match ignores that equal sides still must satisfy the triangle inequality.",
        "zh": "两条较短边之和必须大于最长边，但 $7+7=14<15$，所以三角形不存在。因为有两条边相等就认为可以，是忽略了相等的边仍需满足三角不等式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has two sides measuring 7 and 10. What is the greatest possible integer length of the third side?",
        "zh": "一个三角形有两条边长为 7 和 10。第三边可能的最大整数长度是多少？"
      },
      "choices": [
        "$17$",
        "$3$",
        "$16$",
        "$18$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The third side must be less than $7+10=17$, so the largest integer that still fits is 16. Answering 17 uses the sum itself, but the side must be strictly less than the sum, not equal to it.",
        "zh": "第三边必须小于 $7+10=17$，所以仍然成立的最大整数是 16。回答 17 是直接用了和，但第三边必须严格小于和，不能等于它。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a triangle, side $a = 8$ is opposite angle $A$, side $b = 5$ is opposite angle $B$, and side $c = 6$ is opposite angle $C$. Which angle is the largest?",
        "zh": "在一个三角形中，边 $a = 8$ 对角 $A$，边 $b = 5$ 对角 $B$，边 $c = 6$ 对角 $C$。哪个角最大？"
      },
      "choices": [
        "Angle $B$ (opposite side 5) / 角 $B$（对边 5）",
        "Angle $C$ (opposite side 6) / 角 $C$（对边 6）",
        "All angles are equal / 各角相等",
        "Angle $A$ (opposite side 8) / 角 $A$（对边 8）"
      ],
      "answer": 3,
      "explanation": {
        "en": "The largest angle faces the longest side, which is 8, so angle $A$ is largest. Choosing the angle opposite 5 selects the smallest angle by mistake, since 5 is the shortest side.",
        "zh": "最大的角面对最长的边，即 8，所以角 $A$ 最大。选择 5 所对的角是误选了最小角，因为 5 是最短边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles share two pairs of congruent sides. If the third side of one is longer than the third side of the other, then its included angle (between the two congruent sides) is ___.",
        "zh": "两个三角形有两组对应相等的边。若其中一个的第三边比另一个的长，则其夹角（在两条相等边之间）___。"
      },
      "choices": [
        "larger / 较大",
        "smaller / 较小",
        "equal / 相等",
        "a right angle / 直角"
      ],
      "answer": 0,
      "explanation": {
        "en": "This is the converse of the Hinge Theorem: a longer third side forces a larger included angle. Concluding the angle is smaller reverses the direct relationship between the opening angle and the opposite side.",
        "zh": "这是铰链定理的逆定理：较长的第三边意味着较大的夹角。断定夹角较小是把张开的角与其对边之间的正比关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has two sides of length 4 and 9. Which of these values CANNOT be the length of the third side?",
        "zh": "一个三角形有两条边长为 4 和 9。下列哪个值不能作为第三边的长度？"
      },
      "choices": [
        "$7$",
        "$5$",
        "$10$",
        "$12$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The third side must satisfy $9-4<x<9+4$, i.e. $5<x<13$. A length of exactly 5 fails because it is not strictly greater than the difference, while 7, 10, and 12 all lie inside the range. Treating the boundary value 5 as allowed forgets the inequality is strict.",
        "zh": "第三边必须满足 $9-4<x<9+4$，即 $5<x<13$。长度恰为 5 不行，因为它不严格大于两边之差，而 7、10、12 都在范围内。把边界值 5 当作可行，是忘了不等式是严格的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Triangle Inequality Theorem states that the sum of the lengths of any two sides of a triangle is ___ the length of the third side.",
        "zh": "三角不等式定理指出，三角形任意两边长度之和___第三边的长度。"
      },
      "choices": [
        "equal to / 等于",
        "less than / 小于",
        "greater than / 大于",
        "less than or equal to / 小于或等于"
      ],
      "answer": 2,
      "explanation": {
        "en": "For any real triangle, each pair of sides must add to strictly more than the remaining side. Saying 'less than or equal to' both flips the direction and wrongly permits equality, which would collapse the triangle into a straight segment.",
        "zh": "对任何真正的三角形，每一对边之和都必须严格大于剩下的那条边。说“小于或等于”既弄反了方向，又错误地允许了相等，那会使三角形退化成一条直线段。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Triangles $ABC$ and $DEF$ have $AB = DE$ and $BC = EF$. If the included angle $B = 50^{\\circ}$ and $E = 70^{\\circ}$, which third side is longer?",
        "zh": "三角形 $ABC$ 与 $DEF$ 满足 $AB = DE$ 且 $BC = EF$。若夹角 $B = 50^{\\circ}$，$E = 70^{\\circ}$，哪条第三边更长？"
      },
      "choices": [
        "$AC$",
        "Cannot be determined / 无法确定",
        "They are equal / 相等",
        "$DF$"
      ],
      "answer": 3,
      "explanation": {
        "en": "By the Hinge Theorem the triangle with the larger included angle has the longer opposite side; since $70^{\\circ}>50^{\\circ}$, $DF>AC$. Choosing $AC$ pairs the longer side with the smaller angle, contradicting the theorem.",
        "zh": "根据铰链定理，夹角较大的三角形其对边较长；因为 $70^{\\circ}>50^{\\circ}$，所以 $DF>AC$。选择 $AC$ 是把较长边与较小角配对，与定理矛盾。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has two sides of length 5 and 8. What is the smallest possible integer length of the third side?",
        "zh": "一个三角形有两条边长为 5 和 8。第三边可能的最小整数长度是多少？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The third side must exceed $8-5=3$, so the smallest integer greater than 3 is 4. Answering 3 uses the difference itself, but the side must be strictly greater than it.",
        "zh": "第三边必须大于 $8-5=3$，所以大于 3 的最小整数是 4。回答 3 是直接用了差，但第三边必须严格大于它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has two sides of length 5 and 8. What is the largest possible integer length of the third side?",
        "zh": "一个三角形有两条边长为 5 和 8。第三边可能的最大整数长度是多少？"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "The third side must be less than $5+8=13$, so the largest integer is 12. Answering 13 uses the sum, but the side must be strictly less than the sum.",
        "zh": "第三边必须小于 $5+8=13$，所以最大整数是 12。回答 13 是用了和，但第三边必须严格小于和。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has two sides of length 6 and 11, and the third side has length $x$. The possible values satisfy $a < x < b$. What is $a$?",
        "zh": "一个三角形有两条边长为 6 和 11，第三边长为 $x$。可能的取值满足 $a < x < b$。求 $a$。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The lower bound is the difference of the two sides: $11-6=5$. Using the sum $17$ here confuses the lower bound with the upper bound.",
        "zh": "下界是两边之差：$11-6=5$。在此处用和 $17$ 是把下界与上界混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has two sides of length 6 and 11, and the third side has length $x$. The possible values satisfy $a < x < b$. What is $b$?",
        "zh": "一个三角形有两条边长为 6 和 11，第三边长为 $x$。可能的取值满足 $a < x < b$。求 $b$。"
      },
      "answer": "17",
      "accept": [
        "17",
        "17.0",
        "+17"
      ],
      "explanation": {
        "en": "The upper bound is the sum of the two sides: $6+11=17$. Using the difference $5$ here confuses the upper bound with the lower bound.",
        "zh": "上界是两边之和：$6+11=17$。在此处用差 $5$ 是把上界与下界混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has two sides of length 4 and 7. How many different integer lengths are possible for the third side?",
        "zh": "一个三角形有两条边长为 4 和 7。第三边可能有多少个不同的整数长度？"
      },
      "answer": "7",
      "accept": [
        "7",
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "The third side satisfies $3<x<11$, so the integers are $4,5,6,7,8,9,10$ — that is 7 values. Including 3 or 11 (the boundaries) would wrongly count endpoints that make a degenerate, not a real, triangle.",
        "zh": "第三边满足 $3<x<11$，所以整数为 $4,5,6,7,8,9,10$，共 7 个。把 3 或 11（边界）算进去会错误地计入使三角形退化而非真正成立的端点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An isosceles triangle has two sides of length 3. What is the largest possible integer length of the third side?",
        "zh": "一个等腰三角形有两条边长为 3。第三边可能的最大整数长度是多少？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The third side must be less than $3+3=6$, so the largest integer is 5. Answering 6 uses the sum itself, but the side must be strictly less than the sum or the triangle collapses.",
        "zh": "第三边必须小于 $3+3=6$，所以最大整数是 5。回答 6 是用了和本身，但第三边必须严格小于和，否则三角形会退化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has two sides of length 13 and 5, and a whole-number third side. What is the smallest possible length of the third side?",
        "zh": "一个三角形有两条边长为 13 和 5，第三边为整数。第三边可能的最小长度是多少？"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "The third side must be greater than $13-5=8$, so the smallest whole number is 9. Answering 8 uses the difference, but the side must be strictly greater than it.",
        "zh": "第三边必须大于 $13-5=8$，所以最小整数是 9。回答 8 是用了差，但第三边必须严格大于它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An isosceles triangle has two equal sides of length 7. What is the largest possible integer length of the base?",
        "zh": "一个等腰三角形有两条相等的边，长度为 7。底边可能的最大整数长度是多少？"
      },
      "answer": "13",
      "accept": [
        "13",
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "The base must be less than $7+7=14$, so the largest integer is 13. Answering 14 uses the sum itself, but the base must be strictly less than the sum of the two equal sides.",
        "zh": "底边必须小于 $7+7=14$，所以最大整数是 13。回答 14 是用了和本身，但底边必须严格小于两条相等边之和。"
      }
    }
  ],
  "quadrilaterals-polygons/polygon-angles-parallelograms": [
    {
      "type": "mc",
      "question": {
        "en": "What is the sum of the interior angles of a hexagon (6 sides)?",
        "zh": "六边形（6条边）的内角和是多少？"
      },
      "choices": [
        "$720^{\\circ}$",
        "$900^{\\circ}$",
        "$1080^{\\circ}$",
        "$540^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Use $(n-2)\\times 180^{\\circ}$ with $n=6$: $(6-2)\\times 180^{\\circ}=720^{\\circ}$. A common error is multiplying $n\\times 180^{\\circ}$ and getting $1080^{\\circ}$, which forgets to subtract 2.",
        "zh": "用 $(n-2)\\times 180^{\\circ}$，$n=6$：$(6-2)\\times 180^{\\circ}=720^{\\circ}$。常见错误是直接算 $n\\times 180^{\\circ}$ 得到 $1080^{\\circ}$，忘了减2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The interior angles of a polygon sum to $1440^{\\circ}$. How many sides does it have?",
        "zh": "一个多边形的内角和为 $1440^{\\circ}$。它有多少条边？"
      },
      "choices": [
        "8",
        "10",
        "9",
        "12"
      ],
      "answer": 1,
      "explanation": {
        "en": "Solve $(n-2)\\times 180^{\\circ}=1440^{\\circ}$, so $n-2=8$ and $n=10$. A common slip is forgetting to add 2 back and answering 8, which is only $n-2$.",
        "zh": "解 $(n-2)\\times 180^{\\circ}=1440^{\\circ}$，得 $n-2=8$，$n=10$。常见错误是忘记加回2而答8，那只是 $n-2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the measure of each interior angle of a regular octagon (8 sides)?",
        "zh": "正八边形（8条边）每个内角的度数是多少？"
      },
      "choices": [
        "$120^{\\circ}$",
        "$140^{\\circ}$",
        "$135^{\\circ}$",
        "$144^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Interior sum is $(8-2)\\times 180^{\\circ}=1080^{\\circ}$; divide by 8 to get $135^{\\circ}$. A frequent mistake is computing the exterior angle ($360^{\\circ}/8=45^{\\circ}$) and subtracting wrong, or dividing by the wrong count.",
        "zh": "内角和为 $(8-2)\\times 180^{\\circ}=1080^{\\circ}$；除以8得 $135^{\\circ}$。常见错误是算成外角 ($360^{\\circ}/8=45^{\\circ}$) 或除以错误的个数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the measure of each exterior angle of a regular pentagon (5 sides)?",
        "zh": "正五边形（5条边）每个外角的度数是多少？"
      },
      "choices": [
        "$60^{\\circ}$",
        "$120^{\\circ}$",
        "$108^{\\circ}$",
        "$72^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Exterior angles of any polygon sum to $360^{\\circ}$; for a regular pentagon each is $360^{\\circ}/5=72^{\\circ}$. The value $108^{\\circ}$ is the interior angle, a tempting mix-up between interior and exterior.",
        "zh": "任意多边形外角和为 $360^{\\circ}$；正五边形每个外角为 $360^{\\circ}/5=72^{\\circ}$。$108^{\\circ}$ 是内角，容易把内角和外角搞混。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The sum of the exterior angles (one per vertex) of a convex 20-gon is:",
        "zh": "凸二十边形每个顶点取一个外角，其外角和为："
      },
      "choices": [
        "$360^{\\circ}$",
        "$3240^{\\circ}$",
        "$3600^{\\circ}$",
        "$7200^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The sum of exterior angles of any convex polygon is always $360^{\\circ}$, regardless of the number of sides. The large values come from mistakenly using the interior-angle sum formula.",
        "zh": "任意凸多边形的外角和恒为 $360^{\\circ}$，与边数无关。较大的数值是误用了内角和公式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Each exterior angle of a regular polygon measures $24^{\\circ}$. How many sides does it have?",
        "zh": "一个正多边形每个外角为 $24^{\\circ}$。它有多少条边？"
      },
      "choices": [
        "12",
        "15",
        "18",
        "24"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since exterior angles sum to $360^{\\circ}$, $n=360^{\\circ}/24^{\\circ}=15$. Dividing $360$ by the wrong quantity or using $180$ instead of $360$ leads to the other values.",
        "zh": "外角和为 $360^{\\circ}$，故 $n=360^{\\circ}/24^{\\circ}=15$。用错除数或用 $180$ 代替 $360$ 会得到其他数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In parallelogram $ABCD$, $\\angle A=70^{\\circ}$. What is $\\angle B$?",
        "zh": "在平行四边形 $ABCD$ 中，$\\angle A=70^{\\circ}$。$\\angle B$ 是多少？"
      },
      "choices": [
        "$70^{\\circ}$",
        "$90^{\\circ}$",
        "$110^{\\circ}$",
        "$140^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Consecutive angles of a parallelogram are supplementary, so $\\angle B=180^{\\circ}-70^{\\circ}=110^{\\circ}$. Answering $70^{\\circ}$ treats $B$ as the opposite angle (which equals $A$) instead of a consecutive one.",
        "zh": "平行四边形相邻角互补，所以 $\\angle B=180^{\\circ}-70^{\\circ}=110^{\\circ}$。答 $70^{\\circ}$ 是把 $B$ 当成对角（等于 $A$）而非相邻角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement is ALWAYS true for a parallelogram?",
        "zh": "关于平行四边形，哪个说法总是正确的？"
      },
      "choices": [
        "All four sides are equal",
        "The diagonals are equal in length",
        "All angles are right angles",
        "Opposite sides are parallel and congruent"
      ],
      "answer": 3,
      "explanation": {
        "en": "By definition a parallelogram has opposite sides parallel, and these opposite sides are also congruent. Equal diagonals and right angles hold only for special parallelograms like rectangles, not every parallelogram.",
        "zh": "根据定义，平行四边形对边平行，且对边也全等。对角线相等和直角只在矩形等特殊平行四边形中成立，并非对每个平行四边形都成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The diagonals of a parallelogram always:",
        "zh": "平行四边形的对角线总是："
      },
      "choices": [
        "Bisect each other",
        "Are congruent",
        "Are perpendicular",
        "Bisect the interior angles"
      ],
      "answer": 0,
      "explanation": {
        "en": "In any parallelogram the diagonals bisect each other (cut each other in half). Perpendicular diagonals, congruent diagonals, and angle-bisecting diagonals are properties of special cases only.",
        "zh": "在任意平行四边形中，对角线互相平分。对角线垂直、相等或平分内角只是特殊情形的性质。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many diagonals does a regular decagon (10 sides) have?",
        "zh": "正十边形（10条边）有多少条对角线？"
      },
      "choices": [
        "25",
        "35",
        "30",
        "45"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use $\\frac{n(n-3)}{2}=\\frac{10\\times 7}{2}=35$. The value 45 comes from $\\frac{n(n-1)}{2}$, which counts all segments including the sides, not just diagonals.",
        "zh": "用 $\\frac{n(n-3)}{2}=\\frac{10\\times 7}{2}=35$。45 来自 $\\frac{n(n-1)}{2}$，那是所有连线（含边）而非只有对角线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In parallelogram $ABCD$, side $AB=2x+3$ and the opposite side $DC=x+8$. Find $x$.",
        "zh": "在平行四边形 $ABCD$ 中，$AB=2x+3$，对边 $DC=x+8$。求 $x$。"
      },
      "choices": [
        "3",
        "8",
        "5",
        "11"
      ],
      "answer": 2,
      "explanation": {
        "en": "Opposite sides are congruent, so $2x+3=x+8$, giving $x=5$. Setting the sides supplementary or adding them (as if they were angles) produces the wrong values.",
        "zh": "对边全等，所以 $2x+3=x+8$，得 $x=5$。把两边当作互补或相加（当成角）会得到错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the sum of the interior angles of a 15-gon?",
        "zh": "十五边形的内角和是多少？"
      },
      "choices": [
        "$2880^{\\circ}$",
        "$2520^{\\circ}$",
        "$2700^{\\circ}$",
        "$2340^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(15-2)\\times 180^{\\circ}=13\\times 180^{\\circ}=2340^{\\circ}$. Multiplying $15\\times 180^{\\circ}=2700^{\\circ}$ skips subtracting 2 from the side count.",
        "zh": "$(15-2)\\times 180^{\\circ}=13\\times 180^{\\circ}=2340^{\\circ}$。算成 $15\\times 180^{\\circ}=2700^{\\circ}$ 是漏减了2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the interior angle sum, in degrees, of a polygon with 12 sides? (Enter a number only.)",
        "zh": "12条边的多边形内角和是多少度？（只填数字。）"
      },
      "answer": "1800",
      "accept": [
        "1800",
        "1800.0",
        "1800 degrees",
        "1800°",
        "1800度"
      ],
      "explanation": {
        "en": "$(12-2)\\times 180^{\\circ}=10\\times 180^{\\circ}=1800^{\\circ}$. Forgetting the $-2$ would wrongly give $2160^{\\circ}$.",
        "zh": "$(12-2)\\times 180^{\\circ}=10\\times 180^{\\circ}=1800^{\\circ}$。忘记 $-2$ 会错得 $2160^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Each interior angle of a regular polygon measures $150^{\\circ}$. How many sides does it have? (Enter a number.)",
        "zh": "一个正多边形每个内角为 $150^{\\circ}$。它有多少条边？（填数字。）"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "12 sides",
        "twelve",
        "12边",
        "12条边"
      ],
      "explanation": {
        "en": "Each exterior angle is $180^{\\circ}-150^{\\circ}=30^{\\circ}$, and $n=360^{\\circ}/30^{\\circ}=12$. Trying to divide $150$ directly into $360$ or $180$ gives a non-integer, a sign the exterior angle was skipped.",
        "zh": "每个外角为 $180^{\\circ}-150^{\\circ}=30^{\\circ}$，$n=360^{\\circ}/30^{\\circ}=12$。直接用 $150$ 去除 $360$ 或 $180$ 得不到整数，说明漏了先求外角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the measure, in degrees, of each interior angle of a regular hexagon? (Number only.)",
        "zh": "正六边形每个内角的度数是多少？（只填数字。）"
      },
      "answer": "120",
      "accept": [
        "120",
        "120.0",
        "120 degrees",
        "120°",
        "120度"
      ],
      "explanation": {
        "en": "Interior sum $(6-2)\\times 180^{\\circ}=720^{\\circ}$; each angle $720^{\\circ}/6=120^{\\circ}$. The exterior angle $60^{\\circ}$ is a tempting wrong answer if interior and exterior are confused.",
        "zh": "内角和 $(6-2)\\times 180^{\\circ}=720^{\\circ}$；每个内角 $720^{\\circ}/6=120^{\\circ}$。外角 $60^{\\circ}$ 是容易混淆的错误答案。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In parallelogram $ABCD$, $\\angle A=(3x)^{\\circ}$ and its consecutive angle $\\angle B=(2x)^{\\circ}$. Find $x$. (Number only.)",
        "zh": "在平行四边形 $ABCD$ 中，$\\angle A=(3x)^{\\circ}$，相邻角 $\\angle B=(2x)^{\\circ}$。求 $x$。（只填数字。）"
      },
      "answer": "36",
      "accept": [
        "36",
        "36.0",
        "x=36",
        "x = 36"
      ],
      "explanation": {
        "en": "Consecutive angles are supplementary: $3x+2x=180$, so $5x=180$ and $x=36$. Setting the angles equal (as opposite angles) would wrongly give $3x=2x$.",
        "zh": "相邻角互补：$3x+2x=180$，故 $5x=180$，$x=36$。把它们当作对角相等会错列 $3x=2x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many sides does a regular polygon have if each exterior angle is $40^{\\circ}$? (Number only.)",
        "zh": "若一个正多边形每个外角为 $40^{\\circ}$，它有多少条边？（只填数字。）"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "9 sides",
        "nine",
        "9边",
        "9条边"
      ],
      "explanation": {
        "en": "$n=360^{\\circ}/40^{\\circ}=9$. Using $180^{\\circ}$ instead of $360^{\\circ}$ in the numerator would incorrectly give $4.5$.",
        "zh": "$n=360^{\\circ}/40^{\\circ}=9$。分子误用 $180^{\\circ}$ 会错得 $4.5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In parallelogram $ABCD$, one diagonal is bisected so that half of it is $7$ and the other half is $2y-1$. Find $y$. (Number only.)",
        "zh": "在平行四边形 $ABCD$ 中，一条对角线被平分，一半为 $7$，另一半为 $2y-1$。求 $y$。（只填数字。）"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "y=4",
        "y = 4"
      ],
      "explanation": {
        "en": "Diagonals bisect each other, so the two halves are equal: $2y-1=7$, giving $y=4$. Treating the halves as supplementary or setting the full diagonal equal to a half is the common error.",
        "zh": "对角线互相平分，两半相等：$2y-1=7$，得 $y=4$。把两半当作互补或把整条对角线等于一半是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The interior angle sum of a polygon is $3060^{\\circ}$. How many sides does it have? (Number only.)",
        "zh": "一个多边形的内角和为 $3060^{\\circ}$。它有多少条边？（只填数字。）"
      },
      "answer": "19",
      "accept": [
        "19",
        "19.0",
        "19 sides",
        "nineteen",
        "19边",
        "19条边"
      ],
      "explanation": {
        "en": "$(n-2)\\times 180^{\\circ}=3060^{\\circ}$ gives $n-2=17$, so $n=19$. Forgetting to add 2 back leaves the incorrect answer 17.",
        "zh": "$(n-2)\\times 180^{\\circ}=3060^{\\circ}$ 得 $n-2=17$，故 $n=19$。忘记加回2会错答17。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The measures of the four angles of a quadrilateral are $x$, $2x$, $3x$, and $4x$ degrees. Find the value of $x$. (Number only.)",
        "zh": "一个四边形的四个角分别为 $x$、$2x$、$3x$、$4x$ 度。求 $x$ 的值。（只填数字。）"
      },
      "answer": "36",
      "accept": [
        "36",
        "36.0",
        "x=36",
        "x = 36"
      ],
      "explanation": {
        "en": "A quadrilateral's angles sum to $360^{\\circ}$: $x+2x+3x+4x=10x=360$, so $x=36$. Using $180^{\\circ}$ (a triangle's sum) instead of $360^{\\circ}$ would wrongly give $18$.",
        "zh": "四边形内角和为 $360^{\\circ}$：$x+2x+3x+4x=10x=360$，故 $x=36$。误用 $180^{\\circ}$（三角形的和）会错得 $18$。"
      }
    }
  ],
  "quadrilaterals-polygons/special-quadrilaterals": [
    {
      "type": "mc",
      "question": {
        "en": "Which property distinguishes a rectangle from a general parallelogram?",
        "zh": "哪个性质使矩形区别于一般的平行四边形？"
      },
      "choices": [
        "Diagonals are congruent",
        "Diagonals bisect each other",
        "Opposite sides are congruent",
        "Opposite angles are congruent"
      ],
      "answer": 0,
      "explanation": {
        "en": "Every parallelogram has congruent opposite sides, bisecting diagonals, and congruent opposite angles; only a rectangle adds that the diagonals are congruent (equal in length). The other listed traits are shared by all parallelograms.",
        "zh": "每个平行四边形都有对边全等、对角线互相平分、对角相等；只有矩形额外满足对角线相等。其他列出的性质是所有平行四边形共有的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a rhombus, the diagonals are always:",
        "zh": "在菱形中，对角线总是："
      },
      "choices": [
        "Congruent to each other",
        "Perpendicular to each other",
        "Equal to the side length",
        "Parallel to a pair of sides"
      ],
      "answer": 1,
      "explanation": {
        "en": "A rhombus has perpendicular diagonals that also bisect the angles. Congruent diagonals belong to rectangles, not rhombi, so that is a tempting mix-up between the two special shapes.",
        "zh": "菱形的对角线互相垂直并平分内角。对角线相等是矩形的性质，而非菱形，这是两种特殊图形之间容易混淆之处。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which shape has ALL the properties of a rectangle AND all the properties of a rhombus?",
        "zh": "哪种图形同时具有矩形的所有性质和菱形的所有性质？"
      },
      "choices": [
        "Trapezoid",
        "Kite",
        "Square",
        "Isosceles trapezoid"
      ],
      "answer": 2,
      "explanation": {
        "en": "A square is both a rectangle and a rhombus, so it inherits congruent diagonals AND perpendicular diagonals. A kite has perpendicular diagonals but is not a rectangle, so it does not qualify.",
        "zh": "正方形既是矩形又是菱形，因此同时具有对角线相等和对角线垂直。风筝形对角线垂直但不是矩形，所以不符合。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The parallel sides of a trapezoid have lengths $12$ and $20$. What is the length of the midsegment?",
        "zh": "一个梯形的两条平行边长为 $12$ 和 $20$。它的中位线长是多少？"
      },
      "choices": [
        "8",
        "14",
        "32",
        "16"
      ],
      "answer": 3,
      "explanation": {
        "en": "The midsegment equals the average of the two bases: $\\frac{12+20}{2}=16$. Answering 32 adds the bases without halving; answering 8 takes the difference instead of the average.",
        "zh": "中位线等于两底的平均值：$\\frac{12+20}{2}=16$。答32是相加没有除以2；答8是取差而非平均。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about an isosceles trapezoid is TRUE?",
        "zh": "关于等腰梯形，哪个说法是正确的？"
      },
      "choices": [
        "Its diagonals are congruent",
        "Its diagonals bisect each other",
        "All four sides are congruent",
        "Both pairs of opposite sides are parallel"
      ],
      "answer": 0,
      "explanation": {
        "en": "An isosceles trapezoid has congruent diagonals and congruent base angles. Its diagonals do not bisect each other (that is a parallelogram property), and it has only one pair of parallel sides.",
        "zh": "等腰梯形的对角线相等，底角也相等。它的对角线不互相平分（那是平行四边形的性质），且只有一组对边平行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A kite has two pairs of consecutive congruent sides. What is true about its diagonals?",
        "zh": "风筝形有两组相邻边分别全等。关于它的对角线，下列哪项正确？"
      },
      "choices": [
        "They are congruent",
        "One diagonal perpendicularly bisects the other",
        "They bisect each other",
        "They bisect all four angles"
      ],
      "answer": 1,
      "explanation": {
        "en": "In a kite the diagonals are perpendicular, and the axis of symmetry (the main diagonal) bisects the other diagonal. They are generally not congruent and only one of them is bisected, so 'bisect each other' is a common overreach.",
        "zh": "在风筝形中，对角线互相垂直，对称轴（主对角线）平分另一条对角线。它们通常不相等，且只有一条被平分，所以'互相平分'是常见的过度推断。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In rectangle $ABCD$, diagonal $AC=5x-4$ and diagonal $BD=3x+10$. Find $x$.",
        "zh": "在矩形 $ABCD$ 中，对角线 $AC=5x-4$，对角线 $BD=3x+10$。求 $x$。"
      },
      "choices": [
        "3",
        "10",
        "7",
        "14"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rectangle diagonals are congruent: $5x-4=3x+10$, so $2x=14$ and $x=7$. Treating the diagonals as perpendicular halves (a rhombus idea) instead of equal lengths leads elsewhere.",
        "zh": "矩形对角线相等：$5x-4=3x+10$，故 $2x=14$，$x=7$。把对角线当作垂直的两半（菱形的想法）而非相等长度会导致错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quadrilateral has diagonals that bisect each other and are perpendicular, but are NOT congruent. What is it?",
        "zh": "一个四边形的对角线互相平分且垂直，但不相等。它是什么？"
      },
      "choices": [
        "Rectangle",
        "Isosceles trapezoid",
        "Square",
        "Rhombus"
      ],
      "answer": 3,
      "explanation": {
        "en": "Bisecting diagonals mean it is a parallelogram; perpendicular diagonals make it a rhombus. If they were also congruent it would be a square, so the 'not congruent' clue rules the square out.",
        "zh": "对角线互相平分说明是平行四边形；对角线垂直使它成为菱形。若还相等则是正方形，所以'不相等'排除了正方形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT necessarily true for every rectangle?",
        "zh": "下列哪项对每个矩形不一定成立？"
      },
      "choices": [
        "All four sides are congruent",
        "The diagonals are congruent",
        "All four angles are right angles",
        "Opposite sides are parallel"
      ],
      "answer": 0,
      "explanation": {
        "en": "A rectangle need not have four congruent sides; that only happens when it is also a square. Right angles, congruent diagonals, and parallel opposite sides do hold for every rectangle.",
        "zh": "矩形不一定四边全等；只有同时是正方形时才成立。直角、对角线相等、对边平行对每个矩形都成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an isosceles trapezoid, one base angle measures $65^{\\circ}$. What is the measure of an angle on the same leg (a consecutive angle between the parallel sides)?",
        "zh": "在等腰梯形中，一个底角为 $65^{\\circ}$。同一腰上的相邻角（两平行边之间）是多少度？"
      },
      "choices": [
        "$25^{\\circ}$",
        "$115^{\\circ}$",
        "$65^{\\circ}$",
        "$130^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The two angles on the same leg are co-interior between the parallel bases, so they are supplementary: $180^{\\circ}-65^{\\circ}=115^{\\circ}$. Answering $65^{\\circ}$ confuses this with the equal base-angle pair on the same base.",
        "zh": "同一腰上的两个角是两平行底之间的同旁内角，互补：$180^{\\circ}-65^{\\circ}=115^{\\circ}$。答 $65^{\\circ}$ 是把它和同一底上相等的底角混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The diagonals of a square each measure $10\\sqrt{2}$. What is the side length of the square?",
        "zh": "一个正方形的对角线各为 $10\\sqrt{2}$。这个正方形的边长是多少？"
      },
      "choices": [
        "5",
        "$10\\sqrt{2}$",
        "10",
        "20"
      ],
      "answer": 2,
      "explanation": {
        "en": "For a square, diagonal $=s\\sqrt{2}$, so $s\\sqrt{2}=10\\sqrt{2}$ gives $s=10$. Dividing by 2 instead of $\\sqrt{2}$ would wrongly give a smaller side.",
        "zh": "正方形对角线 $=s\\sqrt{2}$，所以 $s\\sqrt{2}=10\\sqrt{2}$，得 $s=10$。误除以2而非 $\\sqrt{2}$ 会得到偏小的边长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which classification is MOST specific for a quadrilateral with four congruent sides and four right angles?",
        "zh": "对于四边全等且四个角都是直角的四边形，最具体的分类是什么？"
      },
      "choices": [
        "Parallelogram",
        "Rectangle",
        "Rhombus",
        "Square"
      ],
      "answer": 3,
      "explanation": {
        "en": "Four right angles make it a rectangle and four congruent sides make it a rhombus; a shape that is both is a square, the most specific name. Stopping at rectangle or rhombus ignores one of the two conditions.",
        "zh": "四个直角使它是矩形，四边全等使它是菱形；同时满足两者的是正方形，这是最具体的名称。只答矩形或菱形忽略了其中一个条件。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The parallel bases of a trapezoid are $9$ and $17$. What is the length of its midsegment? (Number only.)",
        "zh": "一个梯形的两条平行底为 $9$ 和 $17$。它的中位线长是多少？（只填数字。）"
      },
      "answer": "13",
      "accept": [
        "13",
        "13.0",
        "13 units"
      ],
      "explanation": {
        "en": "Midsegment $=\\frac{9+17}{2}=13$. Adding the bases without dividing (26) or taking the difference (8) are the usual mistakes.",
        "zh": "中位线 $=\\frac{9+17}{2}=13$。相加不除以2（26）或取差（8）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A trapezoid has one base of length $14$ and a midsegment of length $19$. What is the length of the other base? (Number only.)",
        "zh": "一个梯形的一条底长为 $14$，中位线长为 $19$。另一条底长是多少？（只填数字。）"
      },
      "answer": "24",
      "accept": [
        "24",
        "24.0",
        "24 units"
      ],
      "explanation": {
        "en": "Since midsegment $=\\frac{b_1+b_2}{2}$, we get $19=\\frac{14+b_2}{2}$, so $14+b_2=38$ and $b_2=24$. Subtracting $14$ from $19$ (getting 5) forgets to double the midsegment first.",
        "zh": "由中位线 $=\\frac{b_1+b_2}{2}$，得 $19=\\frac{14+b_2}{2}$，故 $14+b_2=38$，$b_2=24$。用 $19-14=5$ 忘了先把中位线乘以2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In rhombus $ABCD$, the diagonals have half-lengths $6$ and $8$ meeting at right angles. What is the side length of the rhombus? (Number only.)",
        "zh": "在菱形 $ABCD$ 中，两对角线的一半分别为 $6$ 和 $8$，且互相垂直。菱形的边长是多少？（只填数字。）"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "10 units"
      ],
      "explanation": {
        "en": "The diagonals are perpendicular and bisect each other, so each side is the hypotenuse of a right triangle with legs $6$ and $8$: $\\sqrt{6^2+8^2}=\\sqrt{100}=10$. Adding $6+8=14$ ignores the Pythagorean relationship.",
        "zh": "对角线垂直且互相平分，所以每条边是直角边为 $6$ 和 $8$ 的直角三角形斜边：$\\sqrt{6^2+8^2}=\\sqrt{100}=10$。直接算 $6+8=14$ 忽略了勾股定理。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In an isosceles trapezoid, one base angle is $(4x)^{\\circ}$ and the base angle on the same leg is $(5x)^{\\circ}$. Find $x$. (Number only.)",
        "zh": "在等腰梯形中，一个底角为 $(4x)^{\\circ}$，同一腰上的角为 $(5x)^{\\circ}$。求 $x$。（只填数字。）"
      },
      "answer": "20",
      "accept": [
        "20",
        "20.0",
        "x=20",
        "x = 20"
      ],
      "explanation": {
        "en": "Angles on the same leg are supplementary: $4x+5x=180$, so $9x=180$ and $x=20$. Setting them equal (as if same-base angles) would wrongly give $4x=5x$.",
        "zh": "同一腰上的角互补：$4x+5x=180$，故 $9x=180$，$x=20$。把它们当作相等（同底角）会错列 $4x=5x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In rhombus $ABCD$, sides $AB=3x+2$ and $BC=x+10$. Since all sides of a rhombus are congruent, find $x$. (Number only.)",
        "zh": "在菱形 $ABCD$ 中，边 $AB=3x+2$，$BC=x+10$。由于菱形各边全等，求 $x$。（只填数字。）"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "x=4",
        "x = 4"
      ],
      "explanation": {
        "en": "All sides of a rhombus are equal: $3x+2=x+10$, so $2x=8$ and $x=4$. Treating adjacent sides as supplementary or unequal is the common misconception.",
        "zh": "菱形各边相等：$3x+2=x+10$，故 $2x=8$，$x=4$。把相邻边当作互补或不等是常见误解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The diagonal of a square is $8$. What is the area of the square? (Number only.)",
        "zh": "一个正方形的对角线为 $8$。这个正方形的面积是多少？（只填数字。）"
      },
      "answer": "32",
      "accept": [
        "32",
        "32.0",
        "32 square units"
      ],
      "explanation": {
        "en": "Area of a square from its diagonal is $\\frac{d^2}{2}=\\frac{8^2}{2}=\\frac{64}{2}=32$. Squaring the diagonal without halving (64) forgets the factor of one-half.",
        "zh": "用对角线求正方形面积为 $\\frac{d^2}{2}=\\frac{8^2}{2}=\\frac{64}{2}=32$。把对角线平方却不除以2（64）忘了乘二分之一。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In rectangle $ABCD$, diagonal $AC=2x+5$ and diagonal $BD=4x-13$. Find $x$. (Number only.)",
        "zh": "在矩形 $ABCD$ 中，对角线 $AC=2x+5$，对角线 $BD=4x-13$。求 $x$。（只填数字。）"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "x=9",
        "x = 9"
      ],
      "explanation": {
        "en": "Rectangle diagonals are congruent: $2x+5=4x-13$, so $18=2x$ and $x=9$. Adding the expressions or setting one equal to half the other misuses the equal-diagonal property.",
        "zh": "矩形对角线相等：$2x+5=4x-13$，故 $18=2x$，$x=9$。把两式相加或令其中一条等于另一条的一半是误用了对角线相等的性质。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Name the special quadrilateral with exactly one pair of parallel sides. (One word.)",
        "zh": "有且仅有一组对边平行的特殊四边形叫什么？（一个词。）"
      },
      "answer": "trapezoid",
      "accept": [
        "trapezoid",
        "Trapezoid",
        "TRAPEZOID",
        "trapezium",
        "梯形"
      ],
      "explanation": {
        "en": "A trapezoid has exactly one pair of parallel sides. A parallelogram has two pairs, so it does not fit the 'exactly one' condition.",
        "zh": "梯形有且仅有一组对边平行。平行四边形有两组，不符合'仅有一组'的条件。"
      }
    }
  ],
  "similarity/similar-polygons-and-triangles": [
    {
      "type": "mc",
      "question": {
        "en": "Two polygons are similar. Which statement must be true?",
        "zh": "两个多边形相似。下列哪一项一定成立？"
      },
      "choices": [
        "Corresponding angles are congruent and corresponding sides are proportional",
        "Corresponding angles are proportional and corresponding sides are congruent",
        "All sides are congruent",
        "All angles are supplementary"
      ],
      "answer": 0,
      "explanation": {
        "en": "Similar polygons have congruent corresponding angles AND proportional corresponding sides. Swapping those two conditions (proportional angles, congruent sides) describes nothing valid; angles are matched exactly, not scaled.",
        "zh": "相似多边形的对应角相等，且对应边成比例。把这两个条件互换（角成比例、边相等）并不成立；角是完全相等的，而不是按比例缩放的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Triangle $ABC \\sim$ triangle $DEF$ with scale factor $\\frac{3}{2}$ (from $DEF$ to $ABC$). If $DE = 8$, find $AB$.",
        "zh": "三角形 $ABC \\sim$ 三角形 $DEF$，从 $DEF$ 到 $ABC$ 的比例因子为 $\\frac{3}{2}$。若 $DE = 8$，求 $AB$。"
      },
      "choices": [
        "$\\frac{16}{3}$",
        "$12$",
        "$10$",
        "$5.33$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$AB = \\frac{3}{2} \\times 8 = 12$. Dividing by the scale factor instead of multiplying gives about $5.33$, which shrinks the side when it should grow.",
        "zh": "$AB = \\frac{3}{2} \\times 8 = 12$。若用边除以比例因子而不是乘，会得到约 $5.33$，那样是把边缩小了，实际应放大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two similar triangles have corresponding sides in ratio $2:5$. What is the ratio of their perimeters?",
        "zh": "两个相似三角形的对应边之比为 $2:5$。它们周长之比是多少？"
      },
      "choices": [
        "$4:25$",
        "$\\sqrt{2}:\\sqrt{5}$",
        "$2:5$",
        "$5:2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Perimeter is a length, so it scales with the same linear ratio $2:5$. Squaring to $4:25$ is the area ratio, not the perimeter ratio.",
        "zh": "周长是长度，因此与边长同比例 $2:5$。平方成 $4:25$ 是面积之比，而不是周长之比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two similar triangles have corresponding sides in ratio $3:4$. What is the ratio of their areas?",
        "zh": "两个相似三角形的对应边之比为 $3:4$。它们面积之比是多少？"
      },
      "choices": [
        "$3:4$",
        "$6:8$",
        "$\\sqrt{3}:2$",
        "$9:16$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Area scales with the square of the linear ratio: $3^2:4^2 = 9:16$. Leaving it as $3:4$ forgets that area is two-dimensional.",
        "zh": "面积按线性比的平方缩放：$3^2:4^2 = 9:16$。若仍写成 $3:4$，就忽略了面积是二维的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In triangles $ABC$ and $XYZ$, $\\angle A = \\angle X$ and $\\angle B = \\angle Y$. Which similarity criterion proves the triangles similar?",
        "zh": "在三角形 $ABC$ 与 $XYZ$ 中，$\\angle A = \\angle X$ 且 $\\angle B = \\angle Y$。用哪个相似判定可证明它们相似？"
      },
      "choices": [
        "AA similarity",
        "SAS similarity",
        "SSS similarity",
        "HL similarity"
      ],
      "answer": 0,
      "explanation": {
        "en": "Two pairs of congruent angles force the third pair equal, so AA similarity applies. SAS or SSS would require side information, which is not given here.",
        "zh": "两组对应角相等则第三组也相等，因此用 AA 相似。SAS 或 SSS 需要边的信息，而此处并未给出。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pair of conditions establishes SAS similarity for two triangles?",
        "zh": "下列哪组条件可建立两个三角形的 SAS 相似？"
      },
      "choices": [
        "Three pairs of congruent angles",
        "Two pairs of proportional sides and the included angles congruent",
        "Two pairs of congruent sides and one congruent angle",
        "All three pairs of sides congruent"
      ],
      "answer": 1,
      "explanation": {
        "en": "SAS similarity needs two proportional side pairs with the angle BETWEEN them congruent. Requiring congruent (equal) sides instead of proportional ones describes congruence, not similarity.",
        "zh": "SAS 相似需要两组对应边成比例，且它们所夹的角相等。若要求边相等而非成比例，那描述的是全等而不是相似。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\triangle PQR \\sim \\triangle STU$. Given $PQ = 6$, $QR = 9$, and the corresponding side $ST = 4$, find $TU$.",
        "zh": "$\\triangle PQR \\sim \\triangle STU$。已知 $PQ = 6$，$QR = 9$，对应边 $ST = 4$，求 $TU$。"
      },
      "choices": [
        "$7$",
        "$13.5$",
        "$6$",
        "$\\frac{8}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Set up $\\frac{PQ}{ST} = \\frac{QR}{TU}$: $\\frac{6}{4} = \\frac{9}{TU}$, so $TU = \\frac{9 \\times 4}{6} = 6$. Matching $QR$ to $ST$ across triangles (mispairing corresponding sides) leads to the wrong value.",
        "zh": "列出 $\\frac{PQ}{ST} = \\frac{QR}{TU}$：$\\frac{6}{4} = \\frac{9}{TU}$，得 $TU = \\frac{9 \\times 4}{6} = 6$。若把 $QR$ 与 $ST$ 错误配对，会得到错误的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The scale factor from a small figure to a similar larger figure is $\\frac{5}{2}$. If the small figure has area $12$, what is the area of the larger figure?",
        "zh": "从小图形到相似大图形的比例因子为 $\\frac{5}{2}$。若小图形面积为 $12$，则大图形面积是多少？"
      },
      "choices": [
        "$30$",
        "$60$",
        "$48$",
        "$75$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Area scales by the square of the factor: $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$, so $12 \\times \\frac{25}{4} = 75$. Multiplying by $\\frac{5}{2}$ once (getting $30$) applies a linear factor to an area.",
        "zh": "面积按比例因子的平方缩放：$\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$，所以 $12 \\times \\frac{25}{4} = 75$。若只乘一次 $\\frac{5}{2}$（得 $30$），就把线性因子错用到了面积上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two similar polygons have areas $16$ and $81$. What is the ratio of their corresponding sides?",
        "zh": "两个相似多边形的面积分别为 $16$ 和 $81$。它们对应边之比是多少？"
      },
      "choices": [
        "$4:9$",
        "$16:81$",
        "$8:40.5$",
        "$256:6561$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Take the square root of the area ratio: $\\sqrt{\\frac{16}{81}} = \\frac{4}{9}$. Using the area ratio $16:81$ directly as the side ratio skips the needed square root.",
        "zh": "对面积之比取平方根：$\\sqrt{\\frac{16}{81}} = \\frac{4}{9}$。若直接把面积之比 $16:81$ 当作边之比，就漏掉了取平方根这一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\triangle ABC$, altitude $CD$ is drawn to hypotenuse $AB$, creating $\\triangle ACD \\sim \\triangle CBD$. If $AD = 4$ and $BD = 9$, find the altitude $CD$.",
        "zh": "在直角三角形 $ABC$ 中，作斜边 $AB$ 上的高 $CD$，得 $\\triangle ACD \\sim \\triangle CBD$。若 $AD = 4$，$BD = 9$，求高 $CD$。"
      },
      "choices": [
        "$6.5$",
        "$6$",
        "$13$",
        "$36$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The altitude is the geometric mean: $CD = \\sqrt{AD \\times BD} = \\sqrt{4 \\times 9} = 6$. Averaging $4$ and $9$ to get $6.5$ uses the arithmetic mean instead of the geometric mean.",
        "zh": "高是几何平均：$CD = \\sqrt{AD \\times BD} = \\sqrt{4 \\times 9} = 6$。若取 $4$ 和 $9$ 的平均得 $6.5$，那是算术平均而非几何平均。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A model car is built to a scale of $1:24$. If the real car is $180$ inches long, how long is the model (in inches)?",
        "zh": "一辆模型车按 $1:24$ 的比例制作。若真车长 $180$ 英寸，则模型长多少英寸？"
      },
      "choices": [
        "$4320$",
        "$156$",
        "$7.5$",
        "$24$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide the real length by the scale: $\\frac{180}{24} = 7.5$ inches. Multiplying by $24$ (getting $4320$) makes the model larger than the real car, reversing the ratio.",
        "zh": "用真车长度除以比例：$\\frac{180}{24} = 7.5$ 英寸。若乘以 $24$（得 $4320$），会使模型比真车还大，方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To prove $\\triangle ABC \\sim \\triangle ADE$ where $DE \\parallel BC$, which fact justifies the congruent angles?",
        "zh": "要证明 $\\triangle ABC \\sim \\triangle ADE$（其中 $DE \\parallel BC$），下列哪一事实说明对应角相等？"
      },
      "choices": [
        "Vertical angles are congruent",
        "The triangles share all three side lengths",
        "Alternate exterior angles are supplementary",
        "Corresponding angles from parallel lines are congruent, plus the shared angle $A$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$DE \\parallel BC$ makes corresponding angles equal, and angle $A$ is shared, giving AA similarity. There are no vertical angles here since the triangles share vertex $A$ rather than crossing.",
        "zh": "$DE \\parallel BC$ 使对应角相等，而角 $A$ 为公共角，从而得到 AA 相似。此处并无对顶角，因为两三角形共用顶点 $A$ 而非相交。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$\\triangle ABC \\sim \\triangle DEF$. If $AB = 10$, $DE = 15$, and $BC = 8$, find $EF$.",
        "zh": "$\\triangle ABC \\sim \\triangle DEF$。若 $AB = 10$，$DE = 15$，$BC = 8$，求 $EF$。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "12.00"
      ],
      "explanation": {
        "en": "The scale factor from $ABC$ to $DEF$ is $\\frac{15}{10} = 1.5$, so $EF = 8 \\times 1.5 = 12$. Using $\\frac{10}{15}$ would shrink the side instead of enlarging it.",
        "zh": "从 $ABC$ 到 $DEF$ 的比例因子为 $\\frac{15}{10} = 1.5$，所以 $EF = 8 \\times 1.5 = 12$。若用 $\\frac{10}{15}$，则会缩小而非放大边长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two similar rectangles have a side ratio of $2:3$. The smaller has perimeter $20$. Find the perimeter of the larger.",
        "zh": "两个相似矩形的边之比为 $2:3$。较小者周长为 $20$。求较大者的周长。"
      },
      "answer": "30",
      "accept": [
        "30.0",
        "30.00"
      ],
      "explanation": {
        "en": "Perimeter scales linearly, so it is also $2:3$: $20 \\times \\frac{3}{2} = 30$. Squaring the ratio (as one would for area) would overshoot.",
        "zh": "周长按线性比缩放，同样为 $2:3$：$20 \\times \\frac{3}{2} = 30$。若像求面积那样把比例平方，则会得到过大的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two similar triangles have areas in the ratio $49:25$. Write the ratio of their corresponding sides in the form $a:b$ (lowest terms).",
        "zh": "两个相似三角形的面积之比为 $49:25$。以最简形式 $a:b$ 写出它们对应边之比。"
      },
      "answer": "7:5",
      "accept": [
        "7 : 5",
        "7/5",
        "1.4"
      ],
      "explanation": {
        "en": "Take the square root of each part of the area ratio: $\\sqrt{49}:\\sqrt{25} = 7:5$. Using $49:25$ directly forgets that area grows as the square of the side ratio.",
        "zh": "对面积比的每一部分取平方根：$\\sqrt{49}:\\sqrt{25} = 7:5$。若直接用 $49:25$，就忽略了面积按边比的平方增长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$\\triangle RST \\sim \\triangle RUV$ with $U$ on $RS$ and $V$ on $RT$. If $RU = 6$, $US = 4$, and $RV = 9$, find $RT$.",
        "zh": "$\\triangle RST \\sim \\triangle RUV$，其中 $U$ 在 $RS$ 上，$V$ 在 $RT$ 上。若 $RU = 6$，$US = 4$，$RV = 9$，求 $RT$。"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "15.00"
      ],
      "explanation": {
        "en": "$RS = RU + US = 10$, so the scale factor is $\\frac{RS}{RU} = \\frac{10}{6}$. Then $RT = 9 \\times \\frac{10}{6} = 15$. Using $RU = 6$ as the full side (ignoring $US$) gives too small a value.",
        "zh": "$RS = RU + US = 10$，故比例因子为 $\\frac{RS}{RU} = \\frac{10}{6}$。于是 $RT = 9 \\times \\frac{10}{6} = 15$。若把 $RU = 6$ 当作整条边（忽略 $US$），会得到偏小的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tree casts a shadow $24$ ft long at the same time a $6$-ft person casts a $4$-ft shadow. Using similar triangles, find the tree's height in feet.",
        "zh": "一棵树的影子长 $24$ 英尺，同一时刻一个 $6$ 英尺高的人影子长 $4$ 英尺。利用相似三角形求树的高度（英尺）。"
      },
      "answer": "36",
      "accept": [
        "36.0",
        "36 ft",
        "36 feet"
      ],
      "explanation": {
        "en": "$\\frac{height}{shadow}$ is constant: $\\frac{6}{4} = \\frac{h}{24}$, so $h = \\frac{6 \\times 24}{4} = 36$. Pairing height with the wrong shadow (e.g. $\\frac{4}{6}$) inverts the ratio.",
        "zh": "$\\frac{高}{影长}$ 为常数：$\\frac{6}{4} = \\frac{h}{24}$，所以 $h = \\frac{6 \\times 24}{4} = 36$。若把高与错误的影长配对（如 $\\frac{4}{6}$），会使比例颠倒。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$\\triangle ABC \\sim \\triangle DEF$ with scale factor (from $ABC$ to $DEF$) of $\\frac{4}{3}$. If the perimeter of $\\triangle ABC$ is $27$, find the perimeter of $\\triangle DEF$.",
        "zh": "$\\triangle ABC \\sim \\triangle DEF$，从 $ABC$ 到 $DEF$ 的比例因子为 $\\frac{4}{3}$。若 $\\triangle ABC$ 的周长为 $27$，求 $\\triangle DEF$ 的周长。"
      },
      "answer": "36",
      "accept": [
        "36.0",
        "36.00"
      ],
      "explanation": {
        "en": "Perimeter scales by the linear factor: $27 \\times \\frac{4}{3} = 36$. Squaring the factor to $\\frac{16}{9}$ would wrongly treat perimeter like area.",
        "zh": "周长按线性因子缩放：$27 \\times \\frac{4}{3} = 36$。若把因子平方成 $\\frac{16}{9}$，就错把周长当成面积处理。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a right triangle, the altitude to the hypotenuse divides it into segments of length $3$ and $12$. Find the length of that altitude.",
        "zh": "在一个直角三角形中，斜边上的高把斜边分成长 $3$ 和 $12$ 的两段。求这条高的长度。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6.00"
      ],
      "explanation": {
        "en": "The altitude is the geometric mean of the two segments: $\\sqrt{3 \\times 12} = \\sqrt{36} = 6$. Adding the segments and halving to get $7.5$ uses an average rather than the geometric mean.",
        "zh": "这条高是两段的几何平均：$\\sqrt{3 \\times 12} = \\sqrt{36} = 6$。若把两段相加再取一半得 $7.5$，那是平均数而非几何平均。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two similar polygons have a scale factor of $\\frac{2}{3}$ (smaller to larger). The larger polygon has area $45$. Find the area of the smaller polygon.",
        "zh": "两个相似多边形的比例因子为 $\\frac{2}{3}$（小到大）。较大多边形面积为 $45$。求较小多边形的面积。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20.00"
      ],
      "explanation": {
        "en": "Area ratio is $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$, so smaller area $= 45 \\times \\frac{4}{9} = 20$. Multiplying by $\\frac{2}{3}$ once (getting $30$) applies a linear factor to area.",
        "zh": "面积之比为 $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$，所以较小面积 $= 45 \\times \\frac{4}{9} = 20$。若只乘一次 $\\frac{2}{3}$（得 $30$），就把线性因子错用到面积上。"
      }
    }
  ],
  "similarity/proportionality-theorems": [
    {
      "type": "mc",
      "question": {
        "en": "In $\\triangle ABC$, point $D$ is on $AB$ and $E$ is on $AC$ with $DE \\parallel BC$. The Triangle Proportionality Theorem states which proportion is true?",
        "zh": "在 $\\triangle ABC$ 中，$D$ 在 $AB$ 上，$E$ 在 $AC$ 上，且 $DE \\parallel BC$。三角形比例（边分割）定理指出下列哪个比例成立？"
      },
      "choices": [
        "$\\frac{AD}{DB} = \\frac{AE}{EC}$",
        "$\\frac{AD}{DB} = \\frac{EC}{AE}$",
        "$AD \\cdot DB = AE \\cdot EC$",
        "$\\frac{AD}{AE} = \\frac{DB}{AC}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A line parallel to one side divides the other two sides proportionally: $\\frac{AD}{DB} = \\frac{AE}{EC}$. Flipping only one side's ratio (matching $DB$ with $AE$) breaks the correspondence of the two split sides.",
        "zh": "平行于一边的直线按比例分割另外两边：$\\frac{AD}{DB} = \\frac{AE}{EC}$。若只把一边的比颠倒（让 $DB$ 对应 $AE$），就破坏了两条被分割边的对应关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\triangle ABC$, $DE \\parallel BC$ with $D$ on $AB$, $E$ on $AC$. If $AD = 4$, $DB = 6$, and $AE = 6$, find $EC$.",
        "zh": "在 $\\triangle ABC$ 中，$DE \\parallel BC$，$D$ 在 $AB$ 上，$E$ 在 $AC$ 上。若 $AD = 4$，$DB = 6$，$AE = 6$，求 $EC$。"
      },
      "choices": [
        "$4$",
        "$9$",
        "$8$",
        "$3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{AD}{DB} = \\frac{AE}{EC}$ gives $\\frac{4}{6} = \\frac{6}{EC}$, so $EC = \\frac{6 \\times 6}{4} = 9$. Setting $EC$ equal to $AD = 4$ ignores the proportion entirely.",
        "zh": "由 $\\frac{AD}{DB} = \\frac{AE}{EC}$ 得 $\\frac{4}{6} = \\frac{6}{EC}$，所以 $EC = \\frac{6 \\times 6}{4} = 9$。若令 $EC = AD = 4$，就完全忽视了比例关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Converse of the Triangle Proportionality Theorem, segment $DE$ is parallel to $BC$ if which condition holds?",
        "zh": "根据三角形比例定理的逆定理，若下列哪个条件成立，则线段 $DE$ 平行于 $BC$？"
      },
      "choices": [
        "$DE$ bisects angle $A$",
        "$DE$ equals half of $BC$",
        "$\\frac{AD}{DB} = \\frac{AE}{EC}$",
        "$DE$ passes through the centroid"
      ],
      "answer": 2,
      "explanation": {
        "en": "The converse says that if the two sides are divided in equal ratios, the segment must be parallel to the third side. Being equal to half of $BC$ only happens for the midsegment, a special case, not the general test.",
        "zh": "逆定理指出：若两边被分成相等的比，则该线段必平行于第三边。等于 $BC$ 的一半只对中位线这一特例成立，并非一般判据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Three parallel lines cut two transversals. On the first transversal the segments are $5$ and $8$; on the second the segment corresponding to $5$ is $10$. Find the second segment corresponding to $8$.",
        "zh": "三条平行线截两条横截线。第一条横截线上的两段为 $5$ 和 $8$；第二条横截线上与 $5$ 对应的段为 $10$。求第二条上与 $8$ 对应的段。"
      },
      "choices": [
        "$13$",
        "$4$",
        "$6.25$",
        "$16$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Parallel lines cut transversals proportionally: $\\frac{5}{8} = \\frac{10}{x}$, so $x = \\frac{8 \\times 10}{5} = 16$. Adding the difference ($10 - 5 = 5$) to $8$ to get $13$ treats the relationship as additive instead of proportional.",
        "zh": "平行线按比例截横截线：$\\frac{5}{8} = \\frac{10}{x}$，所以 $x = \\frac{8 \\times 10}{5} = 16$。若把差值（$10 - 5 = 5$）加到 $8$ 上得 $13$，就把比例关系误当成了加法关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Triangle Angle Bisector Theorem says the bisector of an angle divides the opposite side into segments proportional to which sides?",
        "zh": "三角形角平分线定理指出：一个角的平分线把对边分成的两段与哪两条边成比例？"
      },
      "choices": [
        "The two sides forming the bisected angle",
        "The two segments of the bisector itself",
        "The medians of the triangle",
        "The two sides opposite the bisected angle"
      ],
      "answer": 0,
      "explanation": {
        "en": "The bisector from a vertex splits the opposite side in the ratio of the two sides that form that angle. Comparing to the bisector's own segments confuses the cevian with the triangle's sides.",
        "zh": "从顶点出发的角平分线，把对边按夹这个角的两条边之比分割。若与平分线自身的分段比较，就把这条内线与三角形的边混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\triangle ABC$, the bisector of angle $A$ meets $BC$ at $D$. If $AB = 8$, $AC = 6$, and $BD = 4$, find $DC$.",
        "zh": "在 $\\triangle ABC$ 中，角 $A$ 的平分线交 $BC$ 于 $D$。若 $AB = 8$，$AC = 6$，$BD = 4$，求 $DC$。"
      },
      "choices": [
        "$5.33$",
        "$3$",
        "$2$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{BD}{DC} = \\frac{AB}{AC}$ gives $\\frac{4}{DC} = \\frac{8}{6}$, so $DC = \\frac{4 \\times 6}{8} = 3$. Using $\\frac{AB}{AC}$ upside down (as $\\frac{6}{8}$) inflates $DC$ to about $5.33$.",
        "zh": "由 $\\frac{BD}{DC} = \\frac{AB}{AC}$ 得 $\\frac{4}{DC} = \\frac{8}{6}$，所以 $DC = \\frac{4 \\times 6}{8} = 3$。若把 $\\frac{AB}{AC}$ 倒过来用（成 $\\frac{6}{8}$），会使 $DC$ 增大到约 $5.33$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A midsegment of a triangle connects the midpoints of two sides. It is related to the third side how?",
        "zh": "三角形的中位线连接两边的中点。它与第三边的关系是？"
      },
      "choices": [
        "Equal in length to the third side",
        "Perpendicular to the third side",
        "Parallel to the third side and half its length",
        "Twice the length of the third side"
      ],
      "answer": 2,
      "explanation": {
        "en": "The Midsegment Theorem: the midsegment is parallel to the third side and exactly half its length. Calling it twice the length reverses which segment is longer.",
        "zh": "中位线定理：中位线平行于第三边，且长度恰为其一半。若说是第三边的两倍，就把哪条更长弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\triangle PQR$, $M$ and $N$ are midpoints of $PQ$ and $PR$. If $QR = 14$, find the length of midsegment $MN$.",
        "zh": "在 $\\triangle PQR$ 中，$M$、$N$ 分别是 $PQ$、$PR$ 的中点。若 $QR = 14$，求中位线 $MN$ 的长度。"
      },
      "choices": [
        "$28$",
        "$14$",
        "$10.5$",
        "$7$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The midsegment is half the third side: $MN = \\frac{14}{2} = 7$. Doubling instead (getting $28$) applies the relationship backwards.",
        "zh": "中位线是第三边的一半：$MN = \\frac{14}{2} = 7$。若改为加倍（得 $28$），就把关系用反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Lines $a \\parallel b \\parallel c$ are cut by two transversals. On one transversal a segment is $9$; the corresponding segment on the other is $12$, and the next segment on the first transversal is $6$. Find the segment on the second transversal corresponding to $6$.",
        "zh": "直线 $a \\parallel b \\parallel c$ 被两条横截线所截。一条横截线上一段为 $9$；另一条上对应段为 $12$，且第一条上的下一段为 $6$。求第二条上与 $6$ 对应的段。"
      },
      "choices": [
        "$8$",
        "$3$",
        "$4.5$",
        "$9$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{9}{12} = \\frac{6}{x}$, so $x = \\frac{6 \\times 12}{9} = 8$. Assuming the corresponding segment stays $9$ ignores that the transversals are scaled by $\\frac{12}{9}$.",
        "zh": "$\\frac{9}{12} = \\frac{6}{x}$，所以 $x = \\frac{6 \\times 12}{9} = 8$。若假定对应段仍为 $9$，就忽略了两横截线之间的缩放比 $\\frac{12}{9}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\triangle ABC$, $DE \\parallel BC$ with $D$ on $AB$ and $E$ on $AC$. If $AD = x$, $DB = 3$, $AE = 4$, and $EC = 6$, find $x$.",
        "zh": "在 $\\triangle ABC$ 中，$DE \\parallel BC$，$D$ 在 $AB$ 上，$E$ 在 $AC$ 上。若 $AD = x$，$DB = 3$，$AE = 4$，$EC = 6$，求 $x$。"
      },
      "choices": [
        "$4.5$",
        "$2$",
        "$8$",
        "$2.25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{AD}{DB} = \\frac{AE}{EC}$ gives $\\frac{x}{3} = \\frac{4}{6}$, so $x = \\frac{4 \\times 3}{6} = 2$. Cross-multiplying in the wrong direction ($\\frac{x}{3} = \\frac{6}{4}$) would give $4.5$.",
        "zh": "由 $\\frac{AD}{DB} = \\frac{AE}{EC}$ 得 $\\frac{x}{3} = \\frac{4}{6}$，所以 $x = \\frac{4 \\times 3}{6} = 2$。若方向弄反（$\\frac{x}{3} = \\frac{6}{4}$），会得到 $4.5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about the triangle angle bisector is FALSE?",
        "zh": "关于三角形角平分线，下列哪种说法是错误的？"
      },
      "choices": [
        "It divides the opposite side into two segments",
        "The two segments are proportional to the adjacent sides",
        "It always divides the opposite side into two equal halves",
        "It starts at a vertex of the triangle"
      ],
      "answer": 2,
      "explanation": {
        "en": "The bisector splits the opposite side proportionally to the adjacent sides, so the two segments are equal only when those sides are equal. The median, not the angle bisector, always cuts the opposite side in half.",
        "zh": "角平分线按相邻两边之比分割对边，只有当两边相等时两段才相等。总把对边平分的是中线，而非角平分线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\triangle ABC$ the midsegment $MN$ (joining midpoints of $AB$ and $AC$) has length $5x - 3$, and $BC = 22$. Find $x$.",
        "zh": "在 $\\triangle ABC$ 中，中位线 $MN$（连接 $AB$、$AC$ 的中点）长为 $5x - 3$，且 $BC = 22$。求 $x$。"
      },
      "choices": [
        "$5$",
        "$2.6$",
        "$4$",
        "$2.8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The midsegment equals half of $BC$: $5x - 3 = \\frac{22}{2} = 11$, so $5x = 14$ and $x = 2.8$. Setting $MN = BC = 22$ instead (forgetting the half) yields $x = 5$.",
        "zh": "中位线等于 $BC$ 的一半：$5x - 3 = \\frac{22}{2} = 11$，所以 $5x = 14$，$x = 2.8$。若误令 $MN = BC = 22$（忘了取一半），则会得到 $x = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\triangle ABC$, $DE \\parallel BC$ with $D$ on $AB$, $E$ on $AC$. If $AD = 5$, $DB = 10$, and $AE = 3$, find $EC$.",
        "zh": "在 $\\triangle ABC$ 中，$DE \\parallel BC$，$D$ 在 $AB$ 上，$E$ 在 $AC$ 上。若 $AD = 5$，$DB = 10$，$AE = 3$，求 $EC$。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6.00"
      ],
      "explanation": {
        "en": "$\\frac{AD}{DB} = \\frac{AE}{EC}$ gives $\\frac{5}{10} = \\frac{3}{EC}$, so $EC = \\frac{3 \\times 10}{5} = 6$. Setting $EC = 3$ (matching $AE$) ignores that $DB$ is twice $AD$.",
        "zh": "由 $\\frac{AD}{DB} = \\frac{AE}{EC}$ 得 $\\frac{5}{10} = \\frac{3}{EC}$，所以 $EC = \\frac{3 \\times 10}{5} = 6$。若令 $EC = 3$（等于 $AE$），就忽略了 $DB$ 是 $AD$ 的两倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The angle bisector from vertex $A$ in $\\triangle ABC$ meets $BC$ at $D$. If $AB = 12$, $AC = 9$, and $DC = 6$, find $BD$.",
        "zh": "$\\triangle ABC$ 中从顶点 $A$ 出发的角平分线交 $BC$ 于 $D$。若 $AB = 12$，$AC = 9$，$DC = 6$，求 $BD$。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "8.00"
      ],
      "explanation": {
        "en": "$\\frac{BD}{DC} = \\frac{AB}{AC}$ gives $\\frac{BD}{6} = \\frac{12}{9}$, so $BD = \\frac{12 \\times 6}{9} = 8$. Pairing $BD$ with $AC$ instead of $AB$ would flip the ratio and shrink $BD$.",
        "zh": "由 $\\frac{BD}{DC} = \\frac{AB}{AC}$ 得 $\\frac{BD}{6} = \\frac{12}{9}$，所以 $BD = \\frac{12 \\times 6}{9} = 8$。若把 $BD$ 与 $AC$ 而非 $AB$ 配对，会使比例颠倒并让 $BD$ 变小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Three parallel lines cut two transversals. On the first, consecutive segments are $6$ and $10$. On the second, the segment corresponding to $6$ is $15$. Find the second transversal's segment corresponding to $10$.",
        "zh": "三条平行线截两条横截线。第一条上相邻两段为 $6$ 和 $10$。第二条上与 $6$ 对应的段为 $15$。求第二条上与 $10$ 对应的段。"
      },
      "answer": "25",
      "accept": [
        "25.0",
        "25.00"
      ],
      "explanation": {
        "en": "$\\frac{6}{10} = \\frac{15}{x}$, so $x = \\frac{10 \\times 15}{6} = 25$. Adding the $9$-unit increase ($15 - 6$) to $10$ to get $19$ treats a proportional setup as additive.",
        "zh": "$\\frac{6}{10} = \\frac{15}{x}$，所以 $x = \\frac{10 \\times 15}{6} = 25$。若把增量 $9$（$15 - 6$）加到 $10$ 上得 $19$，就把比例关系误当成了加法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\triangle XYZ$, $P$ and $Q$ are midpoints of $XY$ and $XZ$. If midsegment $PQ = 9$, find the length of $YZ$.",
        "zh": "在 $\\triangle XYZ$ 中，$P$、$Q$ 分别是 $XY$、$XZ$ 的中点。若中位线 $PQ = 9$，求 $YZ$ 的长度。"
      },
      "answer": "18",
      "accept": [
        "18.0",
        "18.00"
      ],
      "explanation": {
        "en": "The third side is twice the midsegment: $YZ = 2 \\times 9 = 18$. Halving instead (getting $4.5$) applies the midsegment relationship in reverse.",
        "zh": "第三边是中位线的两倍：$YZ = 2 \\times 9 = 18$。若改为取一半（得 $4.5$），就把中位线关系用反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\triangle ABC$, $DE \\parallel BC$ with $D$ on $AB$, $E$ on $AC$. If $AD = 8$, $AB = 20$, and $AC = 25$, find $AE$.",
        "zh": "在 $\\triangle ABC$ 中，$DE \\parallel BC$，$D$ 在 $AB$ 上，$E$ 在 $AC$ 上。若 $AD = 8$，$AB = 20$，$AC = 25$，求 $AE$。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10.00"
      ],
      "explanation": {
        "en": "Using whole sides, $\\frac{AD}{AB} = \\frac{AE}{AC}$: $\\frac{8}{20} = \\frac{AE}{25}$, so $AE = \\frac{8 \\times 25}{20} = 10$. Using $DB = 12$ in place of $AB$ would misapply the proportion.",
        "zh": "用整条边，$\\frac{AD}{AB} = \\frac{AE}{AC}$：$\\frac{8}{20} = \\frac{AE}{25}$，所以 $AE = \\frac{8 \\times 25}{20} = 10$。若用 $DB = 12$ 代替 $AB$，就误用了比例。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The angle bisector from $A$ meets $BC$ at $D$ in $\\triangle ABC$. If $AB = 15$, $AC = 10$, and $BC = 20$, find $BD$ (the segment adjacent to $B$).",
        "zh": "$\\triangle ABC$ 中从 $A$ 出发的角平分线交 $BC$ 于 $D$。若 $AB = 15$，$AC = 10$，$BC = 20$，求 $BD$（靠近 $B$ 的一段）。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "12.00"
      ],
      "explanation": {
        "en": "$\\frac{BD}{DC} = \\frac{15}{10} = \\frac{3}{2}$, so $BD = \\frac{3}{3+2} \\times 20 = \\frac{3}{5} \\times 20 = 12$. Splitting $BC$ evenly into $10$ and $10$ would ignore that $AB > AC$.",
        "zh": "$\\frac{BD}{DC} = \\frac{15}{10} = \\frac{3}{2}$，所以 $BD = \\frac{3}{3+2} \\times 20 = \\frac{3}{5} \\times 20 = 12$。若把 $BC$ 平均分成 $10$ 和 $10$，就忽略了 $AB > AC$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\triangle ABC$, $DE \\parallel BC$. If $AD = 2x$, $DB = 3$, $AE = 4$, and $EC = 3$, find $x$.",
        "zh": "在 $\\triangle ABC$ 中，$DE \\parallel BC$。若 $AD = 2x$，$DB = 3$，$AE = 4$，$EC = 3$，求 $x$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2.00"
      ],
      "explanation": {
        "en": "$\\frac{AD}{DB} = \\frac{AE}{EC}$ gives $\\frac{2x}{3} = \\frac{4}{3}$, so $2x = 4$ and $x = 2$. Forgetting the factor of $2$ on $AD$ (solving $x = 4$) skips dividing by the coefficient.",
        "zh": "由 $\\frac{AD}{DB} = \\frac{AE}{EC}$ 得 $\\frac{2x}{3} = \\frac{4}{3}$，所以 $2x = 4$，$x = 2$。若忘了 $AD$ 前的系数 $2$（解成 $x = 4$），就漏掉了除以系数这一步。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Three parallel lines cut two transversals. The segments on the first transversal are $8$ and $12$, and the total length cut on the second transversal is $30$. Find the length of the second transversal's segment corresponding to the $8$.",
        "zh": "三条平行线截两条横截线。第一条横截线上的两段为 $8$ 和 $12$，第二条横截线被截的总长为 $30$。求第二条上与 $8$ 对应的段的长度。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "12.00"
      ],
      "explanation": {
        "en": "The second transversal is split in the same ratio $8:12 = 2:3$, so the part matching the $8$ is $\\frac{2}{5} \\times 30 = 12$. Splitting $30$ in half (getting $15$) ignores that the two segments are unequal.",
        "zh": "第二条横截线按相同比例 $8:12 = 2:3$ 被分割，所以与 $8$ 对应的部分为 $\\frac{2}{5} \\times 30 = 12$。若把 $30$ 平分（得 $15$），就忽略了两段并不相等。"
      }
    }
  ],
  "right-triangles-trigonometry/pythagorean-special-triangles": [
    {
      "type": "mc",
      "question": {
        "en": "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
        "zh": "一个直角三角形的两条直角边长为 6 和 8。斜边的长度是多少?"
      },
      "choices": [
        "$10$",
        "$14$",
        "$2\\sqrt{7}$",
        "$48$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the Pythagorean theorem, $c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$. Simply adding the legs to get 14 ignores that the theorem uses the squares of the sides, not the sides themselves.",
        "zh": "根据勾股定理,$c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$。直接把两条直角边相加得到 14 是错误的,因为定理用的是各边的平方而不是边长本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle the hypotenuse is 13 and one leg is 5. What is the other leg?",
        "zh": "一个直角三角形的斜边为 13,一条直角边为 5。另一条直角边是多少?"
      },
      "choices": [
        "$\\sqrt{194}$",
        "$12$",
        "$8$",
        "$194$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The unknown leg is a leg, so $b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12$. Adding the squares to get $\\sqrt{194}$ treats both known sides as legs, but the 13 is the hypotenuse, so you must subtract.",
        "zh": "未知边是直角边,所以 $b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12$。把两个平方相加得到 $\\sqrt{194}$ 是把两条已知边都当成直角边,但 13 是斜边,应当相减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Is a triangle with side lengths 7, 24, 25 a right triangle?",
        "zh": "边长为 7、24、25 的三角形是直角三角形吗?"
      },
      "choices": [
        "No, because $7+24>25$",
        "Yes, because it is equilateral",
        "Yes, because $7^2+24^2=25^2$",
        "It cannot be determined"
      ],
      "answer": 2,
      "explanation": {
        "en": "By the converse of the Pythagorean theorem, a triangle is right if the sum of the squares of the two shorter sides equals the square of the longest: $49+576=625=25^2$, so yes. The triangle-inequality fact $7+24>25$ only shows the triangle exists, not that it is right.",
        "zh": "根据勾股定理的逆定理,若两条较短边的平方和等于最长边的平方,则为直角三角形:$49+576=625=25^2$,所以是。$7+24>25$ 这个三角形不等式只能说明三角形存在,并不能说明它是直角三角形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a Pythagorean triple?",
        "zh": "下列哪一组是勾股数?"
      },
      "choices": [
        "$(4,5,6)$",
        "$(6,7,8)$",
        "$(5,6,7)$",
        "$(9,12,15)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(9,12,15)$ is the $(3,4,5)$ triple scaled by 3, and $9^2+12^2=81+144=225=15^2$. The consecutive-integer sets like $(4,5,6)$ fail because $16+25=41\\neq36$; being consecutive does not make a triple.",
        "zh": "$(9,12,15)$ 是 $(3,4,5)$ 放大 3 倍,且 $9^2+12^2=81+144=225=15^2$。像 $(4,5,6)$ 这样的连续整数组不成立,因为 $16+25=41\\neq36$;连续整数并不构成勾股数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 45-45-90 triangle has legs of length 5. What is the exact hypotenuse?",
        "zh": "一个 45-45-90 三角形的直角边长为 5。斜边的精确长度是多少?"
      },
      "choices": [
        "$5\\sqrt{2}$",
        "$10$",
        "$\\frac{5}{\\sqrt{2}}$",
        "$5\\sqrt{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In a 45-45-90 triangle the hypotenuse equals a leg times $\\sqrt{2}$, so $5\\sqrt{2}$. Using $\\sqrt{3}$ confuses this with the 30-60-90 ratios, where $\\sqrt{3}$ appears.",
        "zh": "在 45-45-90 三角形中,斜边等于直角边乘以 $\\sqrt{2}$,即 $5\\sqrt{2}$。用 $\\sqrt{3}$ 是把它与 30-60-90 三角形的比例混淆了,$\\sqrt{3}$ 出现在后者中。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 45-45-90 triangle has a hypotenuse of 8. What is the exact length of each leg?",
        "zh": "一个 45-45-90 三角形的斜边为 8。每条直角边的精确长度是多少?"
      },
      "choices": [
        "$8\\sqrt{2}$",
        "$4\\sqrt{2}$",
        "$4$",
        "$8\\sqrt{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The leg equals the hypotenuse divided by $\\sqrt{2}$: $\\frac{8}{\\sqrt{2}}=\\frac{8\\sqrt{2}}{2}=4\\sqrt{2}$. Multiplying by $\\sqrt{2}$ to get $8\\sqrt{2}$ reverses the operation; going from hypotenuse to leg you divide, not multiply.",
        "zh": "直角边等于斜边除以 $\\sqrt{2}$:$\\frac{8}{\\sqrt{2}}=\\frac{8\\sqrt{2}}{2}=4\\sqrt{2}$。乘以 $\\sqrt{2}$ 得到 $8\\sqrt{2}$ 弄反了运算;从斜边求直角边应当除以而不是乘以。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a 30-60-90 triangle the short leg is 6. What is the hypotenuse?",
        "zh": "在一个 30-60-90 三角形中,短直角边为 6。斜边是多少?"
      },
      "choices": [
        "$6\\sqrt{2}$",
        "$6\\sqrt{3}$",
        "$12$",
        "$3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The hypotenuse is twice the short leg (the side opposite $30^\\circ$), so $2\\times6=12$. The value $6\\sqrt{3}$ is the long leg (opposite $60^\\circ$), not the hypotenuse.",
        "zh": "斜边是短直角边(即 $30^\\circ$ 所对的边)的两倍,所以 $2\\times6=12$。$6\\sqrt{3}$ 是长直角边($60^\\circ$ 所对的边),不是斜边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a 30-60-90 triangle the short leg is 4. What is the long leg?",
        "zh": "在一个 30-60-90 三角形中,短直角边为 4。长直角边是多少?"
      },
      "choices": [
        "$8$",
        "$4\\sqrt{2}$",
        "$4$",
        "$4\\sqrt{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The long leg equals the short leg times $\\sqrt{3}$: $4\\sqrt{3}$. Doubling to get 8 gives the hypotenuse instead, because it is the hypotenuse that is twice the short leg.",
        "zh": "长直角边等于短直角边乘以 $\\sqrt{3}$,即 $4\\sqrt{3}$。翻倍得到 8 求出的是斜边,因为是斜边等于短直角边的两倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a 30-60-90 triangle the hypotenuse is 10. What is the short leg?",
        "zh": "在一个 30-60-90 三角形中,斜边为 10。短直角边是多少?"
      },
      "choices": [
        "$5$",
        "$5\\sqrt{3}$",
        "$10\\sqrt{3}$",
        "$5\\sqrt{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The short leg is half the hypotenuse: $\\frac{10}{2}=5$. The value $5\\sqrt{3}$ is the long leg; only the short leg is exactly half the hypotenuse.",
        "zh": "短直角边是斜边的一半:$\\frac{10}{2}=5$。$5\\sqrt{3}$ 是长直角边;只有短直角边恰好等于斜边的一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a 30-60-90 triangle, by what factor is the side opposite the $60^\\circ$ angle larger than the short leg?",
        "zh": "在一个 30-60-90 三角形中,$60^\\circ$ 所对的边是短直角边的多少倍?"
      },
      "choices": [
        "$2$",
        "$\\sqrt{3}$",
        "$\\sqrt{2}$",
        "$3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The side opposite $60^\\circ$ (the long leg) equals the short leg times $\\sqrt{3}$. The factor 2 belongs to the hypotenuse, which is the side opposite $90^\\circ$.",
        "zh": "$60^\\circ$ 所对的边(长直角边)等于短直角边乘以 $\\sqrt{3}$。因子 2 属于斜边,即 $90^\\circ$ 所对的边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A right triangle has two equal legs of length $a$. What is the ratio of the hypotenuse to a leg?",
        "zh": "一个直角三角形的两条直角边都等于 $a$。斜边与一条直角边的比是多少?"
      },
      "choices": [
        "$\\sqrt{3}$",
        "$2$",
        "$\\sqrt{2}$",
        "$\\frac{1}{\\sqrt{2}}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Equal legs make a 45-45-90 triangle; the hypotenuse is $a\\sqrt{2}$, so the ratio is $\\sqrt{2}$. A ratio of 2 would come from doubling, which describes the 30-60-90 hypotenuse, not this isosceles case.",
        "zh": "两条相等的直角边构成 45-45-90 三角形;斜边为 $a\\sqrt{2}$,所以比是 $\\sqrt{2}$。比为 2 来自翻倍,那描述的是 30-60-90 的斜边,而不是这个等腰情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the exact length of the diagonal of a square with side 7?",
        "zh": "边长为 7 的正方形,其对角线的精确长度是多少?"
      },
      "choices": [
        "$14$",
        "$7\\sqrt{3}$",
        "$49$",
        "$7\\sqrt{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The diagonal splits the square into two 45-45-90 triangles with legs 7, so the diagonal is $7\\sqrt{2}$. Squaring the side to get 49 gives the area, not a length.",
        "zh": "对角线把正方形分成两个直角边为 7 的 45-45-90 三角形,所以对角线为 $7\\sqrt{2}$。把边长平方得到 49 求出的是面积,而不是长度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has legs 9 and 12. Find the length of the hypotenuse.",
        "zh": "一个直角三角形的两条直角边为 9 和 12。求斜边的长度。"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "+15"
      ],
      "explanation": {
        "en": "$c=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$. This is the $(3,4,5)$ triple scaled by 3.",
        "zh": "$c=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$。这是 $(3,4,5)$ 放大 3 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has hypotenuse 17 and one leg 15. Find the other leg.",
        "zh": "一个直角三角形的斜边为 17,一条直角边为 15。求另一条直角边。"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$b=\\sqrt{17^2-15^2}=\\sqrt{289-225}=\\sqrt{64}=8$. Since 17 is the hypotenuse, subtract the squares rather than add them.",
        "zh": "$b=\\sqrt{17^2-15^2}=\\sqrt{289-225}=\\sqrt{64}=8$。因为 17 是斜边,应把平方相减而不是相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The two shorter sides of a Pythagorean triple are 8 and 15. What is the third (largest) number?",
        "zh": "一组勾股数中较短的两边为 8 和 15。第三个(最大的)数是多少?"
      },
      "answer": "17",
      "accept": [
        "17",
        "17.0",
        "+17"
      ],
      "explanation": {
        "en": "$\\sqrt{8^2+15^2}=\\sqrt{64+225}=\\sqrt{289}=17$, giving the triple $(8,15,17)$.",
        "zh": "$\\sqrt{8^2+15^2}=\\sqrt{64+225}=\\sqrt{289}=17$,得到勾股数 $(8,15,17)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a 30-60-90 triangle the short leg is 7. Find the hypotenuse.",
        "zh": "在一个 30-60-90 三角形中,短直角边为 7。求斜边。"
      },
      "answer": "14",
      "accept": [
        "14",
        "14.0",
        "+14"
      ],
      "explanation": {
        "en": "The hypotenuse is twice the short leg: $2\\times7=14$.",
        "zh": "斜边是短直角边的两倍:$2\\times7=14$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a 45-45-90 triangle the hypotenuse is $6\\sqrt{2}$. Find the length of each leg.",
        "zh": "在一个 45-45-90 三角形中,斜边为 $6\\sqrt{2}$。求每条直角边的长度。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Leg $=\\frac{6\\sqrt{2}}{\\sqrt{2}}=6$. Dividing the hypotenuse by $\\sqrt{2}$ recovers the leg.",
        "zh": "直角边 $=\\frac{6\\sqrt{2}}{\\sqrt{2}}=6$。用斜边除以 $\\sqrt{2}$ 即可求出直角边。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A square has side length $5\\sqrt{2}$. Find the exact length of its diagonal.",
        "zh": "一个正方形的边长为 $5\\sqrt{2}$。求其对角线的精确长度。"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "Diagonal $=$ side $\\times\\sqrt{2}=5\\sqrt{2}\\times\\sqrt{2}=5\\times2=10$.",
        "zh": "对角线 $=$ 边长 $\\times\\sqrt{2}=5\\sqrt{2}\\times\\sqrt{2}=5\\times2=10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a 30-60-90 triangle the hypotenuse is 20. Find the short leg.",
        "zh": "在一个 30-60-90 三角形中,斜边为 20。求短直角边。"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "The short leg is half the hypotenuse: $\\frac{20}{2}=10$.",
        "zh": "短直角边是斜边的一半:$\\frac{20}{2}=10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has both legs equal to 5. Find the hypotenuse, rounded to the nearest hundredth.",
        "zh": "一个直角三角形的两条直角边都等于 5。求斜边,精确到百分位。"
      },
      "answer": "7.07",
      "accept": [
        "7.07",
        "5√2",
        "5\\sqrt2",
        "5\\sqrt{2}",
        "7.071",
        "7.1"
      ],
      "explanation": {
        "en": "$c=5\\sqrt{2}\\approx7.07$. This is a 45-45-90 triangle, so the hypotenuse is a leg times $\\sqrt{2}$.",
        "zh": "$c=5\\sqrt{2}\\approx7.07$。这是 45-45-90 三角形,所以斜边是直角边乘以 $\\sqrt{2}$。"
      }
    }
  ],
  "right-triangles-trigonometry/trig-ratios": [
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle, which ratio defines the cosine of an acute angle?",
        "zh": "在直角三角形中,一个锐角的余弦由哪个比定义?"
      },
      "choices": [
        "adjacent / hypotenuse",
        "opposite / adjacent",
        "opposite / hypotenuse",
        "hypotenuse / adjacent"
      ],
      "answer": 0,
      "explanation": {
        "en": "By SOH-CAH-TOA, cosine is adjacent over hypotenuse. The ratio opposite over hypotenuse is sine, so choosing it swaps the two co-functions.",
        "zh": "根据 SOH-CAH-TOA,余弦是邻边比斜边。对边比斜边是正弦,选它就把这两个互余函数弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which ratio defines the tangent of an acute angle?",
        "zh": "一个锐角的正切由哪个比定义?"
      },
      "choices": [
        "adjacent / opposite",
        "opposite / adjacent",
        "opposite / hypotenuse",
        "adjacent / hypotenuse"
      ],
      "answer": 1,
      "explanation": {
        "en": "Tangent is opposite over adjacent (the TOA in SOH-CAH-TOA). Writing adjacent over opposite gives the reciprocal, which is cotangent instead.",
        "zh": "正切是对边比邻边(SOH-CAH-TOA 中的 TOA)。写成邻边比对边得到的是它的倒数,即余切。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A right triangle has an acute angle $\\theta$ with opposite side 3, adjacent side 4, and hypotenuse 5. What is $\\sin\\theta$?",
        "zh": "一个直角三角形有锐角 $\\theta$,其对边为 3、邻边为 4、斜边为 5。$\\sin\\theta$ 是多少?"
      },
      "choices": [
        "$\\frac{3}{4}$",
        "$\\frac{4}{5}$",
        "$\\frac{3}{5}$",
        "$\\frac{4}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Sine is opposite over hypotenuse: $\\frac{3}{5}$. The value $\\frac{4}{5}$ uses the adjacent side, which belongs to cosine, not sine.",
        "zh": "正弦是对边比斜边:$\\frac{3}{5}$。$\\frac{4}{5}$ 用的是邻边,那属于余弦而不是正弦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the same triangle (opposite 3, adjacent 4, hypotenuse 5), what is $\\cos\\theta$?",
        "zh": "对同一三角形(对边 3、邻边 4、斜边 5),$\\cos\\theta$ 是多少?"
      },
      "choices": [
        "$\\frac{5}{4}$",
        "$\\frac{3}{5}$",
        "$\\frac{3}{4}$",
        "$\\frac{4}{5}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Cosine is adjacent over hypotenuse: $\\frac{4}{5}$. Using $\\frac{3}{5}$ mistakenly plugs in the opposite side, which gives sine.",
        "zh": "余弦是邻边比斜边:$\\frac{4}{5}$。用 $\\frac{3}{5}$ 是误把对边代入,那得到的是正弦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the same triangle (opposite 3, adjacent 4), what is $\\tan\\theta$?",
        "zh": "对同一三角形(对边 3、邻边 4),$\\tan\\theta$ 是多少?"
      },
      "choices": [
        "$\\frac{3}{4}$",
        "$\\frac{3}{5}$",
        "$\\frac{4}{3}$",
        "$\\frac{5}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Tangent is opposite over adjacent: $\\frac{3}{4}$. The value $\\frac{4}{3}$ flips the ratio, giving cotangent instead.",
        "zh": "正切是对边比邻边:$\\frac{3}{4}$。$\\frac{4}{3}$ 把比翻转了,得到的是余切。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You know an acute angle and the hypotenuse and want the side opposite that angle. Which ratio should you use?",
        "zh": "已知一个锐角和斜边,要求该角的对边。应使用哪个比?"
      },
      "choices": [
        "cosine",
        "sine",
        "tangent",
        "cotangent"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sine links the opposite side and the hypotenuse, so $\\text{opposite}=\\text{hypotenuse}\\cdot\\sin\\theta$. Tangent would need the adjacent side, which is not given here.",
        "zh": "正弦联系对边与斜边,所以 $\\text{对边}=\\text{斜边}\\cdot\\sin\\theta$。正切需要邻边,而这里没有给出邻边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the exact value of $\\cos 60^\\circ$?",
        "zh": "$\\cos 60^\\circ$ 的精确值是多少?"
      },
      "choices": [
        "$\\frac{\\sqrt{3}}{2}$",
        "$1$",
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{2}}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\cos 60^\\circ=\\frac{1}{2}$. The value $\\frac{\\sqrt{3}}{2}$ is $\\cos 30^\\circ$; mixing up the two special angles is the common slip.",
        "zh": "$\\cos 60^\\circ=\\frac{1}{2}$。$\\frac{\\sqrt{3}}{2}$ 是 $\\cos 30^\\circ$;把这两个特殊角搞混是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the exact value of $\\sin 30^\\circ$?",
        "zh": "$\\sin 30^\\circ$ 的精确值是多少?"
      },
      "choices": [
        "$1$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$\\frac{1}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\sin 30^\\circ=\\frac{1}{2}$. The value $\\frac{\\sqrt{3}}{2}$ is $\\sin 60^\\circ$, the sine of the complementary angle.",
        "zh": "$\\sin 30^\\circ=\\frac{1}{2}$。$\\frac{\\sqrt{3}}{2}$ 是 $\\sin 60^\\circ$,即互余角的正弦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the exact value of $\\tan 45^\\circ$?",
        "zh": "$\\tan 45^\\circ$ 的精确值是多少?"
      },
      "choices": [
        "$1$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$\\sqrt{3}$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In a 45-45-90 triangle the two legs are equal, so $\\tan 45^\\circ=\\frac{\\text{opposite}}{\\text{adjacent}}=1$. The value $\\sqrt{3}$ is $\\tan 60^\\circ$, a different special angle.",
        "zh": "在 45-45-90 三角形中两条直角边相等,所以 $\\tan 45^\\circ=\\frac{\\text{对边}}{\\text{邻边}}=1$。$\\sqrt{3}$ 是 $\\tan 60^\\circ$,是另一个特殊角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the cofunction identity, $\\sin 40^\\circ$ equals which of the following?",
        "zh": "利用余函数恒等式,$\\sin 40^\\circ$ 等于下列哪一个?"
      },
      "choices": [
        "$\\cos 40^\\circ$",
        "$\\cos 50^\\circ$",
        "$\\cos 130^\\circ$",
        "$\\sin 50^\\circ$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The cofunction identity says $\\sin\\theta=\\cos(90^\\circ-\\theta)$, so $\\sin 40^\\circ=\\cos 50^\\circ$. Writing $\\cos 40^\\circ$ forgets to take the complement of the angle.",
        "zh": "余函数恒等式为 $\\sin\\theta=\\cos(90^\\circ-\\theta)$,所以 $\\sin 40^\\circ=\\cos 50^\\circ$。写成 $\\cos 40^\\circ$ 是忘了对角取余角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You know the side opposite an acute angle and the side adjacent to it, and want the angle. Which operation finds it?",
        "zh": "已知某锐角的对边和邻边,要求这个角。用哪个运算求出?"
      },
      "choices": [
        "$\\sin^{-1}$",
        "$\\cos^{-1}$",
        "$\\tan^{-1}$",
        "$\\tan$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Opposite and adjacent form the tangent, so the angle is $\\tan^{-1}\\left(\\frac{\\text{opposite}}{\\text{adjacent}}\\right)$. Applying plain $\\tan$ instead of its inverse would go the wrong direction, from angle to ratio.",
        "zh": "对边和邻边构成正切,所以角为 $\\tan^{-1}\\left(\\frac{\\text{对边}}{\\text{邻边}}\\right)$。用普通 $\\tan$ 而不是其反函数会算反方向,从角求出比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle the two acute angles are $A$ and $B$. What does $\\sin A$ equal?",
        "zh": "在直角三角形中,两个锐角为 $A$ 和 $B$。$\\sin A$ 等于什么?"
      },
      "choices": [
        "$\\sin B$",
        "$-\\cos B$",
        "$\\tan B$",
        "$\\cos B$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $A$ and $B$ are complementary, $\\sin A=\\cos B$ by the cofunction relationship. Setting $\\sin A=\\sin B$ would require the angles to be equal, which is not generally true.",
        "zh": "由于 $A$ 与 $B$ 互余,根据余函数关系 $\\sin A=\\cos B$。令 $\\sin A=\\sin B$ 要求两角相等,一般并不成立。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has an acute angle with opposite side 6 and hypotenuse 10. Find the sine of that angle as a decimal.",
        "zh": "一个直角三角形有一锐角,其对边为 6、斜边为 10。以小数形式求该角的正弦。"
      },
      "answer": "0.6",
      "accept": [
        "0.6",
        "0.60",
        ".6",
        "3/5"
      ],
      "explanation": {
        "en": "Sine is opposite over hypotenuse: $\\frac{6}{10}=0.6$.",
        "zh": "正弦是对边比斜边:$\\frac{6}{10}=0.6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has hypotenuse 20 and one acute angle of $30^\\circ$. Find the length of the side opposite the $30^\\circ$ angle.",
        "zh": "一个直角三角形的斜边为 20,一锐角为 $30^\\circ$。求 $30^\\circ$ 角所对的边长。"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "Opposite $=$ hypotenuse $\\times\\sin 30^\\circ=20\\times\\frac{1}{2}=10$.",
        "zh": "对边 $=$ 斜边 $\\times\\sin 30^\\circ=20\\times\\frac{1}{2}=10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has a side of length 8 adjacent to a $60^\\circ$ angle. Find the opposite side using tangent, rounded to the nearest hundredth.",
        "zh": "一个直角三角形中,与 $60^\\circ$ 角相邻的边长为 8。用正切求对边,精确到百分位。"
      },
      "answer": "13.86",
      "accept": [
        "13.86",
        "8√3",
        "8\\sqrt3",
        "8\\sqrt{3}",
        "13.856",
        "13.9"
      ],
      "explanation": {
        "en": "Opposite $=$ adjacent $\\times\\tan 60^\\circ=8\\sqrt{3}\\approx13.86$.",
        "zh": "对边 $=$ 邻边 $\\times\\tan 60^\\circ=8\\sqrt{3}\\approx13.86$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the acute angle $\\theta$ (in degrees) for which $\\tan\\theta=1$.",
        "zh": "求满足 $\\tan\\theta=1$ 的锐角 $\\theta$(以度为单位)。"
      },
      "answer": "45",
      "accept": [
        "45",
        "45°",
        "45 degrees",
        "45.0"
      ],
      "explanation": {
        "en": "$\\theta=\\tan^{-1}(1)=45^\\circ$, since the legs are equal there.",
        "zh": "$\\theta=\\tan^{-1}(1)=45^\\circ$,此时两条直角边相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the acute angle $\\theta$ (in degrees) for which $\\cos\\theta=0.5$.",
        "zh": "求满足 $\\cos\\theta=0.5$ 的锐角 $\\theta$(以度为单位)。"
      },
      "answer": "60",
      "accept": [
        "60",
        "60°",
        "60 degrees",
        "60.0"
      ],
      "explanation": {
        "en": "$\\theta=\\cos^{-1}(0.5)=60^\\circ$.",
        "zh": "$\\theta=\\cos^{-1}(0.5)=60^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has opposite side 7 and adjacent side 24 to an acute angle, so the hypotenuse is 25. Find the sine of the angle as a decimal.",
        "zh": "一个直角三角形中,某锐角的对边为 7、邻边为 24,故斜边为 25。以小数形式求该角的正弦。"
      },
      "answer": "0.28",
      "accept": [
        "0.28",
        ".28",
        "7/25",
        "0.280"
      ],
      "explanation": {
        "en": "Sine is opposite over hypotenuse: $\\frac{7}{25}=0.28$.",
        "zh": "正弦是对边比斜边:$\\frac{7}{25}=0.28$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the cofunction identity, $\\sin 25^\\circ=\\cos x$ for what acute angle $x$ in degrees?",
        "zh": "利用余函数恒等式,$\\sin 25^\\circ=\\cos x$,锐角 $x$ 为多少度?"
      },
      "answer": "65",
      "accept": [
        "65",
        "65°",
        "65 degrees",
        "65.0"
      ],
      "explanation": {
        "en": "$\\sin\\theta=\\cos(90^\\circ-\\theta)$, so $x=90^\\circ-25^\\circ=65^\\circ$.",
        "zh": "$\\sin\\theta=\\cos(90^\\circ-\\theta)$,所以 $x=90^\\circ-25^\\circ=65^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has a side of length 9 opposite an acute angle and hypotenuse 15. Find the angle to the nearest hundredth of a degree.",
        "zh": "一个直角三角形中,某锐角的对边为 9、斜边为 15。求该角,精确到百分之一度。"
      },
      "answer": "36.87",
      "accept": [
        "36.87",
        "36.9",
        "37",
        "36.870",
        "36.86"
      ],
      "explanation": {
        "en": "$\\theta=\\sin^{-1}\\left(\\frac{9}{15}\\right)=\\sin^{-1}(0.6)\\approx36.87^\\circ$.",
        "zh": "$\\theta=\\sin^{-1}\\left(\\frac{9}{15}\\right)=\\sin^{-1}(0.6)\\approx36.87^\\circ$。"
      }
    }
  ],
  "right-triangles-trigonometry/trig-applications": [
    {
      "type": "mc",
      "question": {
        "en": "The angle of elevation from point A up to point B equals the angle of depression from B down to A. These angles are equal because they are ___.",
        "zh": "从 A 点向上看 B 点的仰角,等于从 B 点向下看 A 点的俯角。这两个角相等,是因为它们是 ___。"
      },
      "choices": [
        "alternate interior angles",
        "vertical angles",
        "supplementary angles",
        "complementary angles"
      ],
      "answer": 0,
      "explanation": {
        "en": "The horizontal lines at A and B are parallel, and the line of sight is a transversal, so the elevation and depression angles are alternate interior angles and hence equal. Calling them complementary would wrongly make them sum to $90^\\circ$.",
        "zh": "A 和 B 处的水平线互相平行,视线是截线,所以仰角与俯角是内错角,因而相等。把它们说成互余会错误地让它们相加等于 $90^\\circ$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation is the Law of Sines?",
        "zh": "哪个方程是正弦定理?"
      },
      "choices": [
        "$a^2=b^2+c^2-2bc\\cos A$",
        "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$",
        "$\\frac{\\sin A}{a}=\\frac{b}{\\sin B}$",
        "$a\\sin A=b\\sin B$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The Law of Sines equates each side to the sine of its opposite angle: $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$. The expression with $\\cos A$ and squared sides is the Law of Cosines instead.",
        "zh": "正弦定理把每条边与其对角的正弦相对应:$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$。含 $\\cos A$ 与平方边的式子是余弦定理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Law of Cosines gives $a^2$ equal to which expression?",
        "zh": "余弦定理给出 $a^2$ 等于哪个表达式?"
      },
      "choices": [
        "$b^2+c^2$",
        "$b^2+c^2+2bc\\cos A$",
        "$b^2+c^2-2bc\\cos A$",
        "$b^2-c^2-2bc\\cos A$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$a^2=b^2+c^2-2bc\\cos A$; the correction term is subtracted. Using a plus sign in front of $2bc\\cos A$ reverses that correction and only matches an obtuse angle by accident.",
        "zh": "$a^2=b^2+c^2-2bc\\cos A$;修正项是相减的。在 $2bc\\cos A$ 前用加号会把修正弄反,只是在钝角时才偶然相符。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation calls for the Law of Cosines to find the missing side?",
        "zh": "哪种情形需要用余弦定理来求未知边?"
      },
      "choices": [
        "Two angles and a side (AAS)",
        "Two angles only",
        "A right angle only",
        "Two sides and the included angle (SAS)"
      ],
      "answer": 3,
      "explanation": {
        "en": "With two sides and the included angle (SAS) the Law of Cosines finds the third side directly. An AAS case has an angle paired with its opposite side, which is exactly what the Law of Sines needs instead.",
        "zh": "已知两边及其夹角(SAS)时,余弦定理可直接求第三边。AAS 情形有一个角与其对边配对,那正是正弦定理所需要的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation is best solved with the Law of Sines?",
        "zh": "哪种情形最适合用正弦定理求解?"
      },
      "choices": [
        "Two angles and any side (AAS or ASA)",
        "Two sides and the included angle (SAS)",
        "Three sides (SSS)",
        "A right triangle only"
      ],
      "answer": 0,
      "explanation": {
        "en": "Two angles and a side (AAS/ASA) pair an angle with a side, so the Law of Sines applies. SSS has no angle-side pair to start from, which is why the Law of Cosines is used there instead.",
        "zh": "两角及一边(AAS/ASA)把角与边配对,所以适用正弦定理。SSS 没有可作起点的角边对,因此那里要改用余弦定理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From the top of a 50 m cliff, the angle of depression to a boat is measured. The boat is 50 m horizontally from the base of the cliff. What is the angle of depression?",
        "zh": "从 50 米高的悬崖顶部测量到一艘船的俯角。船距悬崖底部水平 50 米。俯角是多少?"
      },
      "choices": [
        "$30^\\circ$",
        "$45^\\circ$",
        "$60^\\circ$",
        "$90^\\circ$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The height and horizontal distance are equal, so $\\tan\\theta=\\frac{50}{50}=1$ and $\\theta=45^\\circ$. Assuming $90^\\circ$ confuses the depression angle with the vertical drop.",
        "zh": "高度与水平距离相等,所以 $\\tan\\theta=\\frac{50}{50}=1$,$\\theta=45^\\circ$。认为是 $90^\\circ$ 是把俯角与竖直落差混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The 'ambiguous case', where a triangle may have two possible solutions, arises from which given information?",
        "zh": "可能有两个解的“模糊情形”出自哪种已知条件?"
      },
      "choices": [
        "SAS",
        "SSS",
        "SSA",
        "ASA"
      ],
      "answer": 2,
      "explanation": {
        "en": "SSA (two sides and a non-included angle) can produce zero, one, or two triangles, so it is the ambiguous case. SAS always determines a unique triangle, leaving no ambiguity.",
        "zh": "SSA(两边及非夹角)可能得到零个、一个或两个三角形,所以是模糊情形。SAS 总能确定唯一三角形,不存在多解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a triangle, $A=40^\\circ$ and $B=60^\\circ$. What is angle $C$?",
        "zh": "在一个三角形中,$A=40^\\circ$,$B=60^\\circ$。角 $C$ 是多少?"
      },
      "choices": [
        "$70^\\circ$",
        "$100^\\circ$",
        "$90^\\circ$",
        "$80^\\circ$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The angles of a triangle sum to $180^\\circ$, so $C=180^\\circ-40^\\circ-60^\\circ=80^\\circ$. Getting $100^\\circ$ subtracts only one angle from $180^\\circ$.",
        "zh": "三角形内角和为 $180^\\circ$,所以 $C=180^\\circ-40^\\circ-60^\\circ=80^\\circ$。得到 $100^\\circ$ 是只从 $180^\\circ$ 中减去了一个角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The angle of elevation to the top of a tree is found from a point 20 m away, where the tree is also 20 m tall. What is the angle of elevation?",
        "zh": "在距树 20 米处测量树顶的仰角,而树高也是 20 米。仰角是多少?"
      },
      "choices": [
        "$45^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$",
        "$20^\\circ$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\tan\\theta=\\frac{20}{20}=1$, so $\\theta=45^\\circ$. Reading off $20^\\circ$ mistakes the side length for the angle measure.",
        "zh": "$\\tan\\theta=\\frac{20}{20}=1$,所以 $\\theta=45^\\circ$。取 $20^\\circ$ 是把边长误当成角度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To find an angle of a triangle when you know all three side lengths, which tool is appropriate?",
        "zh": "已知三角形的三条边长,求某个角时,哪种方法合适?"
      },
      "choices": [
        "the sum of two angles",
        "the Law of Cosines",
        "one side and one angle",
        "a right angle assumption"
      ],
      "answer": 1,
      "explanation": {
        "en": "With SSS, rearranging the Law of Cosines solves for the cosine of any angle. The Law of Sines cannot start here because it needs a known angle paired with its opposite side.",
        "zh": "已知 SSS 时,变形余弦定理可解出任一角的余弦。正弦定理无法从此起步,因为它需要一个已知角与其对边配对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A plane climbs along a straight path at a $15^\\circ$ angle for 1000 m. Which expression gives the height gained?",
        "zh": "一架飞机沿直线路径以 $15^\\circ$ 的角度爬升 1000 米。哪个表达式给出上升的高度?"
      },
      "choices": [
        "$1000\\cos 15^\\circ$",
        "$1000\\tan 15^\\circ$",
        "$1000\\sin 15^\\circ$",
        "$\\frac{1000}{\\sin 15^\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The 1000 m path is the hypotenuse and the height is opposite the $15^\\circ$ angle, so height $=1000\\sin 15^\\circ$. Using cosine would give the horizontal distance covered, not the height.",
        "zh": "1000 米路径是斜边,高度是 $15^\\circ$ 角的对边,所以高度 $=1000\\sin 15^\\circ$。用余弦得到的是水平前进距离,而不是高度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a triangle, $a=10$, $A=30^\\circ$, and $B=45^\\circ$. Which setup correctly finds side $b$?",
        "zh": "在一个三角形中,$a=10$,$A=30^\\circ$,$B=45^\\circ$。哪个式子能正确求出边 $b$?"
      },
      "choices": [
        "$b=\\frac{10\\sin 30^\\circ}{\\sin 45^\\circ}$",
        "$b=\\frac{\\sin 45^\\circ}{10\\sin 30^\\circ}$",
        "$b=10\\sin 45^\\circ$",
        "$b=\\frac{10\\sin 45^\\circ}{\\sin 30^\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The Law of Sines gives $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$, so $b=\\frac{a\\sin B}{\\sin A}=\\frac{10\\sin 45^\\circ}{\\sin 30^\\circ}$. Swapping the angles puts $\\sin 30^\\circ$ on top, which pairs each side with the wrong angle.",
        "zh": "正弦定理给出 $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$,所以 $b=\\frac{a\\sin B}{\\sin A}=\\frac{10\\sin 45^\\circ}{\\sin 30^\\circ}$。把两个角对调会让 $\\sin 30^\\circ$ 在分子,使每条边与错误的角配对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "From a point on level ground 40 m from the base of a tower, the top is 30 m above the ground. Find the angle of elevation to the top, to the nearest hundredth of a degree.",
        "zh": "在距塔底部水平 40 米的地面一点,塔顶在地面上方 30 米处。求到塔顶的仰角,精确到百分之一度。"
      },
      "answer": "36.87",
      "accept": [
        "36.87",
        "36.9",
        "37",
        "36.870"
      ],
      "explanation": {
        "en": "$\\theta=\\tan^{-1}\\left(\\frac{30}{40}\\right)=\\tan^{-1}(0.75)\\approx36.87^\\circ$.",
        "zh": "$\\theta=\\tan^{-1}\\left(\\frac{30}{40}\\right)=\\tan^{-1}(0.75)\\approx36.87^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "From the top of an 80 m lighthouse, the angle of depression to a boat is $25^\\circ$. Find the horizontal distance from the base of the lighthouse to the boat, to the nearest hundredth of a meter.",
        "zh": "从 80 米高的灯塔顶部,到一艘船的俯角为 $25^\\circ$。求灯塔底部到船的水平距离,精确到百分之一米。"
      },
      "answer": "171.56",
      "accept": [
        "171.56",
        "171.6",
        "172",
        "171.5",
        "171.55"
      ],
      "explanation": {
        "en": "The depression angle equals the elevation angle at the boat, so $\\tan 25^\\circ=\\frac{80}{d}$, giving $d=\\frac{80}{\\tan 25^\\circ}\\approx171.56$ m.",
        "zh": "俯角等于船处的仰角,所以 $\\tan 25^\\circ=\\frac{80}{d}$,得 $d=\\frac{80}{\\tan 25^\\circ}\\approx171.56$ 米。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In triangle ABC, $A=45^\\circ$, $B=60^\\circ$, and $a=12$. Use the Law of Sines to find side $b$, to the nearest hundredth.",
        "zh": "在三角形 ABC 中,$A=45^\\circ$,$B=60^\\circ$,$a=12$。用正弦定理求边 $b$,精确到百分位。"
      },
      "answer": "14.70",
      "accept": [
        "14.70",
        "14.7",
        "14.697",
        "6√6",
        "6\\sqrt6",
        "6\\sqrt{6}",
        "14.69"
      ],
      "explanation": {
        "en": "$b=\\frac{a\\sin B}{\\sin A}=\\frac{12\\sin 60^\\circ}{\\sin 45^\\circ}=6\\sqrt{6}\\approx14.70$.",
        "zh": "$b=\\frac{a\\sin B}{\\sin A}=\\frac{12\\sin 60^\\circ}{\\sin 45^\\circ}=6\\sqrt{6}\\approx14.70$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has sides $a=5$ and $b=7$ with included angle $C=60^\\circ$. Use the Law of Cosines to find side $c$, to the nearest hundredth.",
        "zh": "一个三角形的两边 $a=5$、$b=7$,夹角 $C=60^\\circ$。用余弦定理求边 $c$,精确到百分位。"
      },
      "answer": "6.24",
      "accept": [
        "6.24",
        "√39",
        "\\sqrt39",
        "\\sqrt{39}",
        "6.245",
        "6.2",
        "6.25"
      ],
      "explanation": {
        "en": "$c^2=5^2+7^2-2(5)(7)\\cos 60^\\circ=74-70(0.5)=39$, so $c=\\sqrt{39}\\approx6.24$.",
        "zh": "$c^2=5^2+7^2-2(5)(7)\\cos 60^\\circ=74-70(0.5)=39$,所以 $c=\\sqrt{39}\\approx6.24$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has side lengths 3, 4, and 5. Find the measure (in degrees) of the largest angle.",
        "zh": "一个三角形的边长为 3、4、5。求最大角的度数(以度为单位)。"
      },
      "answer": "90",
      "accept": [
        "90",
        "90°",
        "90 degrees",
        "90.0"
      ],
      "explanation": {
        "en": "The largest angle is opposite the longest side 5, and since $3^2+4^2=5^2$, the triangle is right, so that angle is $90^\\circ$.",
        "zh": "最大角在最长边 5 的对面,由于 $3^2+4^2=5^2$,这是直角三角形,所以该角为 $90^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wheelchair ramp rises 2 m over a horizontal run of 10 m. Find the ramp's angle of elevation to the nearest hundredth of a degree.",
        "zh": "一条轮椅坡道在水平 10 米的距离上升高 2 米。求坡道的仰角,精确到百分之一度。"
      },
      "answer": "11.31",
      "accept": [
        "11.31",
        "11.3",
        "11",
        "11.310"
      ],
      "explanation": {
        "en": "$\\theta=\\tan^{-1}\\left(\\frac{2}{10}\\right)=\\tan^{-1}(0.2)\\approx11.31^\\circ$.",
        "zh": "$\\theta=\\tan^{-1}\\left(\\frac{2}{10}\\right)=\\tan^{-1}(0.2)\\approx11.31^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has sides $a=6$, $b=8$, and $c=10$. Use the Law of Cosines to find angle $C$ (opposite side 10), in degrees.",
        "zh": "一个三角形的边长 $a=6$、$b=8$、$c=10$。用余弦定理求角 $C$(边 10 的对角),以度为单位。"
      },
      "answer": "90",
      "accept": [
        "90",
        "90°",
        "90 degrees",
        "90.0"
      ],
      "explanation": {
        "en": "$\\cos C=\\frac{6^2+8^2-10^2}{2(6)(8)}=\\frac{0}{96}=0$, so $C=90^\\circ$.",
        "zh": "$\\cos C=\\frac{6^2+8^2-10^2}{2(6)(8)}=\\frac{0}{96}=0$,所以 $C=90^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tree casts a shadow 15 m long when the sun's angle of elevation is $40^\\circ$. Find the height of the tree, to the nearest hundredth of a meter.",
        "zh": "当太阳仰角为 $40^\\circ$ 时,一棵树的影子长 15 米。求树的高度,精确到百分之一米。"
      },
      "answer": "12.59",
      "accept": [
        "12.59",
        "12.6",
        "12.586",
        "12.5",
        "12.58"
      ],
      "explanation": {
        "en": "The shadow is the adjacent side and the height is opposite the $40^\\circ$ angle, so height $=15\\tan 40^\\circ\\approx12.59$ m.",
        "zh": "影子是邻边,树高是 $40^\\circ$ 角的对边,所以高度 $=15\\tan 40^\\circ\\approx12.59$ 米。"
      }
    }
  ],
  "circles/arcs-chords-central-inscribed-angles": [
    {
      "type": "mc",
      "question": {
        "en": "A central angle of a circle intercepts an arc of $110^{\\circ}$. What is the measure of the central angle?",
        "zh": "圆的一个圆心角所对的弧为 $110^{\\circ}$。这个圆心角的度数是多少？"
      },
      "choices": [
        "$110^{\\circ}$",
        "$55^{\\circ}$",
        "$220^{\\circ}$",
        "$70^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A central angle equals the measure of its intercepted arc, so the angle is $110^{\\circ}$. Halving the arc to $55^{\\circ}$ applies the inscribed-angle rule by mistake; a central angle is NOT half its arc.",
        "zh": "圆心角等于其所对弧的度数，所以该角为 $110^{\\circ}$。把弧减半得到 $55^{\\circ}$ 是误用了圆周角的规则；圆心角并不是弧的一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An inscribed angle intercepts an arc measuring $96^{\\circ}$. What is the measure of the inscribed angle?",
        "zh": "一个圆周角所对的弧为 $96^{\\circ}$。这个圆周角的度数是多少？"
      },
      "choices": [
        "$96^{\\circ}$",
        "$48^{\\circ}$",
        "$192^{\\circ}$",
        "$24^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "An inscribed angle is half its intercepted arc: $96 \\div 2 = 48^{\\circ}$. Copying the arc value $96^{\\circ}$ confuses the inscribed angle with a central angle, and doubling to $192^{\\circ}$ reverses the relationship.",
        "zh": "圆周角是其所对弧的一半：$96 \\div 2 = 48^{\\circ}$。直接照抄弧的度数 $96^{\\circ}$ 是把圆周角当成了圆心角，而乘 2 得到 $192^{\\circ}$ 则把关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An angle inscribed in a semicircle (its rays pass through the endpoints of a diameter) always measures what?",
        "zh": "内接于半圆的角（其两边经过直径的两个端点）总是多少度？"
      },
      "choices": [
        "$45^{\\circ}$",
        "$180^{\\circ}$",
        "$90^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The diameter's arc is $180^{\\circ}$, and an inscribed angle is half its arc: $180 \\div 2 = 90^{\\circ}$. Answering $180^{\\circ}$ uses the full arc instead of halving it.",
        "zh": "直径所对的弧是 $180^{\\circ}$，圆周角是弧的一半：$180 \\div 2 = 90^{\\circ}$。回答 $180^{\\circ}$ 是用了整段弧而没有取一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An inscribed angle measures $35^{\\circ}$. What is the measure of its intercepted arc?",
        "zh": "一个圆周角为 $35^{\\circ}$。它所对的弧的度数是多少？"
      },
      "choices": [
        "$140^{\\circ}$",
        "$17.5^{\\circ}$",
        "$35^{\\circ}$",
        "$70^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The arc is twice the inscribed angle: $2 \\times 35 = 70^{\\circ}$. Dividing to $17.5^{\\circ}$ applies the half-rule in the wrong direction; here you go from angle to arc, so you multiply.",
        "zh": "弧是圆周角的两倍：$2 \\times 35 = 70^{\\circ}$。除以 2 得到 $17.5^{\\circ}$ 是把减半规则用反了；从角求弧应当乘 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two different inscribed angles intercept the same arc of a circle. Which statement is true?",
        "zh": "同一段弧被两个不同的圆周角所对。下列哪种说法正确？"
      },
      "choices": [
        "They are equal",
        "They are supplementary",
        "One is twice the other",
        "They sum to the arc measure"
      ],
      "answer": 0,
      "explanation": {
        "en": "All inscribed angles that intercept the same arc are equal, because each is half of that one arc. Thinking one is twice the other confuses two inscribed angles with the central-vs-inscribed pairing.",
        "zh": "所有对同一段弧的圆周角都相等，因为每个都是这段弧的一半。认为其中一个是另一个的两倍，是把两个圆周角错当成圆心角与圆周角的配对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two chords in the same circle are congruent. What must be true about the arcs they cut off?",
        "zh": "同一个圆中的两条弦相等。它们所截的弧一定满足什么？"
      },
      "choices": [
        "The arcs are supplementary",
        "The minor arcs are congruent",
        "The arcs are complementary",
        "The chords must be diameters"
      ],
      "answer": 1,
      "explanation": {
        "en": "In one circle, congruent chords cut off congruent minor arcs (and congruent major arcs). Calling the arcs supplementary assumes the two arcs of the pair add to $180^{\\circ}$, which is not the chord-arc theorem.",
        "zh": "在同一个圆中，相等的弦所截的劣弧相等（优弧也相等）。说这些弧互补是假设它们相加为 $180^{\\circ}$，这并不是弦与弧的定理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A diameter of a circle is perpendicular to a chord. What does the diameter do to that chord?",
        "zh": "圆的一条直径垂直于一条弦。这条直径对该弦有什么作用？"
      },
      "choices": [
        "Doubles the chord's length",
        "Is parallel to the chord",
        "Bisects the chord",
        "Is congruent to the chord"
      ],
      "answer": 2,
      "explanation": {
        "en": "A diameter (a line through the center) perpendicular to a chord bisects it, splitting it into two equal segments. Saying it is parallel is impossible, since a perpendicular line cannot also be parallel to the chord.",
        "zh": "垂直于弦的直径（过圆心的线）会平分这条弦，将其分成相等的两段。说它与弦平行是不可能的，因为垂线不可能同时平行于该弦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A central angle and an inscribed angle intercept the same arc. The inscribed angle is $30^{\\circ}$. What is the central angle?",
        "zh": "一个圆心角与一个圆周角对着同一段弧。圆周角为 $30^{\\circ}$。圆心角是多少？"
      },
      "choices": [
        "$15^{\\circ}$",
        "$30^{\\circ}$",
        "$90^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The central angle is twice the inscribed angle on the same arc: $2 \\times 30 = 60^{\\circ}$. Halving to $15^{\\circ}$ reverses the relationship; the central angle is the larger of the two.",
        "zh": "对同一段弧，圆心角是圆周角的两倍：$2 \\times 30 = 60^{\\circ}$。减半得到 $15^{\\circ}$ 是把关系弄反了；圆心角应是两者中较大的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A central angle intercepts the same arc as an inscribed angle. The central angle is $140^{\\circ}$. What is the inscribed angle?",
        "zh": "一个圆心角与一个圆周角对着同一段弧。圆心角为 $140^{\\circ}$。圆周角是多少？"
      },
      "choices": [
        "$70^{\\circ}$",
        "$140^{\\circ}$",
        "$280^{\\circ}$",
        "$35^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The inscribed angle is half the central angle on the same arc: $140 \\div 2 = 70^{\\circ}$. Repeating $140^{\\circ}$ treats the inscribed angle as if it also equalled the arc.",
        "zh": "对同一段弧，圆周角是圆心角的一半：$140 \\div 2 = 70^{\\circ}$。照抄 $140^{\\circ}$ 是把圆周角也当成了等于弧的角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Where does the perpendicular bisector of any chord of a circle always pass?",
        "zh": "圆的任意一条弦的垂直平分线一定经过哪里？"
      },
      "choices": [
        "A point on the circle",
        "The center of the circle",
        "The midpoint of an arc only",
        "A point of tangency"
      ],
      "answer": 1,
      "explanation": {
        "en": "The perpendicular bisector of a chord always passes through the center, since the center is equidistant from the chord's endpoints. Choosing a point on the circle ignores that only the center is equidistant from both endpoints for every chord.",
        "zh": "弦的垂直平分线一定经过圆心，因为圆心到弦两端点的距离相等。选圆上一点忽略了：对每条弦而言，只有圆心到两端点距离相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a circle, arc $AB$ measures $120^{\\circ}$. An inscribed angle that subtends chord $AB$ measures what?",
        "zh": "在一个圆中，弧 $AB$ 为 $120^{\\circ}$。对着弦 $AB$ 的圆周角是多少？"
      },
      "choices": [
        "$120^{\\circ}$",
        "$240^{\\circ}$",
        "$60^{\\circ}$",
        "$30^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The inscribed angle is half the intercepted arc: $120 \\div 2 = 60^{\\circ}$. Using $120^{\\circ}$ directly treats the inscribed angle like a central angle equal to the arc.",
        "zh": "圆周角是所对弧的一半：$120 \\div 2 = 60^{\\circ}$。直接用 $120^{\\circ}$ 是把圆周角当成了等于弧的圆心角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a single circle, congruent arcs must correspond to congruent what?",
        "zh": "在同一个圆中，相等的弧一定对应相等的什么？"
      },
      "choices": [
        "Radii of different length",
        "Tangent lines",
        "Secant lines",
        "Central angles"
      ],
      "answer": 3,
      "explanation": {
        "en": "Congruent arcs subtend congruent central angles, since arc measure equals central-angle measure. 'Radii of different length' is self-contradictory because all radii of one circle are already equal.",
        "zh": "相等的弧对应相等的圆心角，因为弧的度数等于圆心角的度数。'不同长度的半径'本身矛盾，因为同一个圆的所有半径本就相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A central angle intercepts an arc of $85^{\\circ}$. What is the measure of the intercepted arc, in degrees? (The arc equals the central angle.)",
        "zh": "一个圆心角所对的弧为 $85^{\\circ}$。所对弧的度数是多少（单位：度）？（弧等于圆心角。）"
      },
      "answer": "85",
      "accept": [
        "85°",
        "85 degrees",
        "85.0",
        "85 deg"
      ],
      "explanation": {
        "en": "A central angle equals its intercepted arc, so the arc is $85^{\\circ}$. Halving it would wrongly apply the inscribed-angle rule.",
        "zh": "圆心角等于其所对弧，所以弧为 $85^{\\circ}$。若把它减半就误用了圆周角的规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An inscribed angle measures $27^{\\circ}$. What is the measure of its intercepted arc, in degrees?",
        "zh": "一个圆周角为 $27^{\\circ}$。它所对弧的度数是多少（单位：度）？"
      },
      "answer": "54",
      "accept": [
        "54°",
        "54 degrees",
        "54.0",
        "54 deg"
      ],
      "explanation": {
        "en": "The arc is twice the inscribed angle: $2 \\times 27 = 54^{\\circ}$. Dividing instead of multiplying would give the wrong direction of the half-relationship.",
        "zh": "弧是圆周角的两倍：$2 \\times 27 = 54^{\\circ}$。若用除法而非乘法，就把这一半的关系方向弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An inscribed angle intercepts an arc of $130^{\\circ}$. What is the measure of the inscribed angle, in degrees?",
        "zh": "一个圆周角所对的弧为 $130^{\\circ}$。这个圆周角的度数是多少（单位：度）？"
      },
      "answer": "65",
      "accept": [
        "65°",
        "65 degrees",
        "65.0",
        "65 deg"
      ],
      "explanation": {
        "en": "Inscribed angle $= 130 \\div 2 = 65^{\\circ}$. Copying the arc value $130^{\\circ}$ would treat the inscribed angle like a central angle.",
        "zh": "圆周角 $= 130 \\div 2 = 65^{\\circ}$。照抄弧值 $130^{\\circ}$ 会把圆周角当成圆心角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle is inscribed in a circle so that one side is a diameter. What is the measure, in degrees, of the angle opposite that diameter?",
        "zh": "一个三角形内接于圆，其一边为直径。与这条直径相对的角是多少度？"
      },
      "answer": "90",
      "accept": [
        "90°",
        "90 degrees",
        "90.0",
        "90 deg"
      ],
      "explanation": {
        "en": "The angle is inscribed in a semicircle, so it is half of the $180^{\\circ}$ arc: $90^{\\circ}$. Using the full $180^{\\circ}$ skips the halving step.",
        "zh": "该角内接于半圆，是 $180^{\\circ}$ 弧的一半：$90^{\\circ}$。用整个 $180^{\\circ}$ 就漏掉了取一半这一步。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A diameter is perpendicular to a chord of length $16$ and passes through its midpoint. What is the length of each half of the chord?",
        "zh": "一条直径垂直于长为 $16$ 的弦并经过其中点。这条弦每一半的长度是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "8 units",
        "8cm",
        "8 cm"
      ],
      "explanation": {
        "en": "The perpendicular diameter bisects the chord: $16 \\div 2 = 8$. Leaving it as $16$ forgets that 'bisect' means to cut into two equal halves.",
        "zh": "垂直的直径平分这条弦：$16 \\div 2 = 8$。保留 $16$ 是忘了'平分'意味着分成相等的两半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a circle, a minor arc measures $110^{\\circ}$. What is the measure, in degrees, of the corresponding major arc?",
        "zh": "在一个圆中，一段劣弧为 $110^{\\circ}$。相应的优弧是多少度？"
      },
      "answer": "250",
      "accept": [
        "250°",
        "250 degrees",
        "250.0",
        "250 deg"
      ],
      "explanation": {
        "en": "The two arcs make a full circle: $360 - 110 = 250^{\\circ}$. Subtracting from $180^{\\circ}$ mistakes the arcs for a straight-angle pair instead of a full circle.",
        "zh": "两段弧合成整圆：$360 - 110 = 250^{\\circ}$。从 $180^{\\circ}$ 中减是错把两弧当成平角配对，而非整圆。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An inscribed angle measures $50^{\\circ}$. A central angle intercepts the same arc. What is the measure, in degrees, of that central angle?",
        "zh": "一个圆周角为 $50^{\\circ}$。一个圆心角对着同一段弧。这个圆心角是多少度？"
      },
      "answer": "100",
      "accept": [
        "100°",
        "100 degrees",
        "100.0",
        "100 deg"
      ],
      "explanation": {
        "en": "The central angle equals the arc, which is twice the inscribed angle: $2 \\times 50 = 100^{\\circ}$. Repeating $50^{\\circ}$ ignores that the central angle is the larger of the two.",
        "zh": "圆心角等于弧，是圆周角的两倍：$2 \\times 50 = 100^{\\circ}$。照抄 $50^{\\circ}$ 忽略了圆心角是两者中较大的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A central angle and an inscribed angle intercept the same arc. The central angle is $96^{\\circ}$. What is the measure, in degrees, of the inscribed angle?",
        "zh": "一个圆心角与一个圆周角对着同一段弧。圆心角为 $96^{\\circ}$。圆周角是多少度？"
      },
      "answer": "48",
      "accept": [
        "48°",
        "48 degrees",
        "48.0",
        "48 deg"
      ],
      "explanation": {
        "en": "The inscribed angle is half the central angle: $96 \\div 2 = 48^{\\circ}$. Doubling to $192^{\\circ}$ reverses the half-relationship.",
        "zh": "圆周角是圆心角的一半：$96 \\div 2 = 48^{\\circ}$。乘 2 得到 $192^{\\circ}$ 是把这一半的关系弄反了。"
      }
    }
  ],
  "circles/tangents-secants-angle-relationships": [
    {
      "type": "mc",
      "question": {
        "en": "A tangent line touches a circle at a point. What is the angle between the tangent and the radius drawn to that point?",
        "zh": "一条切线与圆相切于一点。切线与画到该点的半径之间的夹角是多少？"
      },
      "choices": [
        "$90^{\\circ}$",
        "$45^{\\circ}$",
        "$60^{\\circ}$",
        "$180^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A tangent is always perpendicular to the radius at the point of tangency, so the angle is $90^{\\circ}$. Any smaller angle would let the line cross into the circle instead of just touching it.",
        "zh": "切线在切点处总是垂直于半径，所以夹角是 $90^{\\circ}$。更小的角会让直线穿入圆内，而不是只相切。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two tangent segments are drawn to a circle from the same external point. What is true about them?",
        "zh": "从同一个圆外点向圆作两条切线段。关于它们，下列哪项正确？"
      },
      "choices": [
        "They are perpendicular to each other",
        "They are congruent",
        "They are parallel",
        "They are supplementary"
      ],
      "answer": 1,
      "explanation": {
        "en": "The two tangent segments from an external point are congruent (equal in length). Assuming they are perpendicular fixes an angle that actually depends on how far the point sits from the circle.",
        "zh": "从外点引出的两条切线段相等（长度相同）。认为它们互相垂直，是固定了一个实际上取决于该点与圆距离的角度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A tangent and a chord meet at the point of tangency, intercepting an arc of $80^{\\circ}$. What is the measure of the tangent-chord angle?",
        "zh": "一条切线与一条弦相交于切点，所夹的弧为 $80^{\\circ}$。这个弦切角的度数是多少？"
      },
      "choices": [
        "$160^{\\circ}$",
        "$80^{\\circ}$",
        "$40^{\\circ}$",
        "$20^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A tangent-chord angle is half its intercepted arc: $80 \\div 2 = 40^{\\circ}$. Using the full $80^{\\circ}$ treats the tangent-chord angle like a central angle.",
        "zh": "弦切角是所夹弧的一半：$80 \\div 2 = 40^{\\circ}$。直接用 $80^{\\circ}$ 是把弦切角当成了圆心角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two secants are drawn from an external point, intercepting arcs of $100^{\\circ}$ (far) and $30^{\\circ}$ (near). What is the angle at the external point?",
        "zh": "从一个外点引出两条割线，所截的弧分别为 $100^{\\circ}$（远弧）和 $30^{\\circ}$（近弧）。外点处的角是多少？"
      },
      "choices": [
        "$65^{\\circ}$",
        "$130^{\\circ}$",
        "$70^{\\circ}$",
        "$35^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "An angle from an external point is half the difference of the arcs: $(100 - 30) \\div 2 = 35^{\\circ}$. Adding the arcs instead of subtracting uses the rule for chords that cross inside the circle.",
        "zh": "外点处的角等于两弧之差的一半：$(100 - 30) \\div 2 = 35^{\\circ}$。把两弧相加而非相减，用的是弦在圆内相交的规则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two chords intersect inside a circle, intercepting arcs of $70^{\\circ}$ and $50^{\\circ}$. What is the measure of the angle formed?",
        "zh": "两条弦在圆内相交，所截的弧分别为 $70^{\\circ}$ 和 $50^{\\circ}$。所成的角是多少？"
      },
      "choices": [
        "$60^{\\circ}$",
        "$10^{\\circ}$",
        "$120^{\\circ}$",
        "$30^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "An angle formed by chords meeting inside is half the sum of the two arcs: $(70 + 50) \\div 2 = 60^{\\circ}$. Subtracting the arcs uses the external-point rule, which does not apply inside the circle.",
        "zh": "弦在圆内相交所成的角等于两弧之和的一半：$(70 + 50) \\div 2 = 60^{\\circ}$。用两弧之差是外点的规则，圆内相交并不适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A tangent and a secant are drawn from an external point, intercepting arcs of $120^{\\circ}$ (far) and $40^{\\circ}$ (near). What is the angle at the external point?",
        "zh": "从一个外点引出一条切线和一条割线，所截的弧分别为 $120^{\\circ}$（远弧）和 $40^{\\circ}$（近弧）。外点处的角是多少？"
      },
      "choices": [
        "$80^{\\circ}$",
        "$40^{\\circ}$",
        "$160^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The external angle is half the difference of the arcs: $(120 - 40) \\div 2 = 40^{\\circ}$. Adding to get $80^{\\circ}$ mistakes this for two chords crossing inside the circle.",
        "zh": "外角等于两弧之差的一半：$(120 - 40) \\div 2 = 40^{\\circ}$。相加得到 $80^{\\circ}$ 是错把它当成圆内两弦相交。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two chords intersect inside a circle. One is split into segments of $4$ and $6$; the other into segments of $3$ and $x$. Find $x$.",
        "zh": "两条弦在圆内相交。一条被分成 $4$ 和 $6$ 两段；另一条被分成 $3$ 和 $x$ 两段。求 $x$。"
      },
      "choices": [
        "$2$",
        "$18$",
        "$8$",
        "$12$"
      ],
      "answer": 2,
      "explanation": {
        "en": "By the intersecting-chords (power of a point) rule, $4 \\times 6 = 3 \\times x$, so $24 = 3x$ and $x = 8$. Adding segments instead of multiplying ignores the equal-products relationship.",
        "zh": "由相交弦（点的幂）法则，$4 \\times 6 = 3 \\times x$，故 $24 = 3x$，$x = 8$。用相加而非相乘，忽略了乘积相等的关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From an external point, a tangent and a secant are drawn. The secant's external segment is $4$ and its whole length is $16$. What is the length of the tangent?",
        "zh": "从一个外点引出一条切线和一条割线。割线的外段为 $4$，整段长为 $16$。切线的长度是多少？"
      },
      "choices": [
        "$4$",
        "$16$",
        "$64$",
        "$8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The tangent squared equals external times whole: $t^2 = 4 \\times 16 = 64$, so $t = 8$. Stopping at $64$ forgets to take the square root.",
        "zh": "切线的平方等于外段乘整段：$t^2 = 4 \\times 16 = 64$，故 $t = 8$。停在 $64$ 是忘了开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A radius is drawn to a point of tangency. This radius is ______ to the tangent line at that point.",
        "zh": "一条半径画到切点。这条半径与该点处的切线是______的。"
      },
      "choices": [
        "perpendicular",
        "parallel",
        "equal in length",
        "identical"
      ],
      "answer": 0,
      "explanation": {
        "en": "The radius to a point of tangency is perpendicular to the tangent, forming a right angle. It cannot be parallel, because parallel lines never meet, yet the radius meets the tangent at the point of tangency.",
        "zh": "画到切点的半径与切线垂直，形成直角。它不可能平行，因为平行线永不相交，而半径与切线在切点相交。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two tangent segments are drawn to a circle from the same external point. One segment measures $12$. What is the length of the other?",
        "zh": "从同一个外点向圆作两条切线段。其中一段为 $12$。另一段的长度是多少？"
      },
      "choices": [
        "$6$",
        "$12$",
        "$24$",
        "It cannot be determined"
      ],
      "answer": 1,
      "explanation": {
        "en": "Tangent segments from a common external point are congruent, so the other is also $12$. Halving to $6$ invents a relationship that does not exist for tangents from one point.",
        "zh": "从同一外点引出的切线段相等，所以另一段也是 $12$。减半为 $6$ 是编造了一个对同一点切线并不存在的关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A tangent-chord angle is formed where the chord is a diameter (its intercepted arc is $180^{\\circ}$). What is the measure of the angle?",
        "zh": "当弦为直径（所夹弧为 $180^{\\circ}$）时形成的弦切角。这个角是多少？"
      },
      "choices": [
        "$180^{\\circ}$",
        "$45^{\\circ}$",
        "$90^{\\circ}$",
        "$360^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The tangent-chord angle is half its arc: $180 \\div 2 = 90^{\\circ}$, matching the fact that a tangent is perpendicular to the diameter at that point. Using the full $180^{\\circ}$ skips the halving.",
        "zh": "弦切角是所夹弧的一半：$180 \\div 2 = 90^{\\circ}$，这与切线在该点垂直于直径一致。用整个 $180^{\\circ}$ 就漏掉了取一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two secants are drawn from an external point. The first has whole length $12$ and external segment $4$. The second has external segment $3$. What is the whole length of the second secant?",
        "zh": "从一个外点引出两条割线。第一条整段长 $12$，外段为 $4$。第二条外段为 $3$。第二条割线的整段长是多少？"
      },
      "choices": [
        "$4$",
        "$12$",
        "$48$",
        "$16$"
      ],
      "answer": 3,
      "explanation": {
        "en": "By the two-secant rule, whole times external is equal: $12 \\times 4 = 48 = w \\times 3$, so $w = 16$. Multiplying only the near segments ignores that each product uses the whole secant.",
        "zh": "由两割线法则，整段乘外段相等：$12 \\times 4 = 48 = w \\times 3$，故 $w = 16$。只乘近段忽略了每个乘积都要用整条割线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tangent-chord angle intercepts an arc of $110^{\\circ}$. What is the measure of the angle, in degrees?",
        "zh": "一个弦切角所夹的弧为 $110^{\\circ}$。这个角是多少度？"
      },
      "answer": "55",
      "accept": [
        "55°",
        "55 degrees",
        "55.0",
        "55 deg"
      ],
      "explanation": {
        "en": "The tangent-chord angle is half the arc: $110 \\div 2 = 55^{\\circ}$. Copying $110^{\\circ}$ would treat it like a central angle.",
        "zh": "弦切角是弧的一半：$110 \\div 2 = 55^{\\circ}$。照抄 $110^{\\circ}$ 会把它当成圆心角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two secants from an external point intercept arcs of $140^{\\circ}$ (far) and $60^{\\circ}$ (near). What is the measure, in degrees, of the angle at the external point?",
        "zh": "从一个外点引出两条割线，所截弧为 $140^{\\circ}$（远弧）和 $60^{\\circ}$（近弧）。外点处的角是多少度？"
      },
      "answer": "40",
      "accept": [
        "40°",
        "40 degrees",
        "40.0",
        "40 deg"
      ],
      "explanation": {
        "en": "External angle $= (140 - 60) \\div 2 = 40^{\\circ}$. Adding the arcs would use the inside-the-circle rule by mistake.",
        "zh": "外角 $= (140 - 60) \\div 2 = 40^{\\circ}$。相加两弧会误用圆内相交的规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two chords intersect inside a circle, intercepting arcs of $88^{\\circ}$ and $32^{\\circ}$. What is the measure, in degrees, of the angle formed?",
        "zh": "两条弦在圆内相交，所截弧为 $88^{\\circ}$ 和 $32^{\\circ}$。所成的角是多少度？"
      },
      "answer": "60",
      "accept": [
        "60°",
        "60 degrees",
        "60.0",
        "60 deg"
      ],
      "explanation": {
        "en": "Inside the circle, the angle is half the sum: $(88 + 32) \\div 2 = 60^{\\circ}$. Subtracting the arcs would use the external-point rule instead.",
        "zh": "在圆内，角等于两弧之和的一半：$(88 + 32) \\div 2 = 60^{\\circ}$。相减会改用外点的规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two chords intersect inside a circle. One is divided into segments $5$ and $8$; the other into segments $4$ and $x$. Find $x$.",
        "zh": "两条弦在圆内相交。一条被分成 $5$ 和 $8$；另一条被分成 $4$ 和 $x$。求 $x$。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10 units"
      ],
      "explanation": {
        "en": "Equal products: $5 \\times 8 = 4 \\times x$, so $40 = 4x$ and $x = 10$. Adding the segments instead of multiplying breaks the power-of-a-point relationship.",
        "zh": "乘积相等：$5 \\times 8 = 4 \\times x$，故 $40 = 4x$，$x = 10$。相加而非相乘会破坏点的幂关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "From an external point, a tangent and a secant are drawn. The secant's external segment is $3$ and its whole length is $27$. What is the length of the tangent?",
        "zh": "从一个外点引出一条切线和一条割线。割线外段为 $3$，整段长为 $27$。切线的长度是多少？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "9 units"
      ],
      "explanation": {
        "en": "$t^2 = 3 \\times 27 = 81$, so $t = 9$. Stopping at $81$ forgets the square root; using $3 \\times 24$ would wrongly use the far segment alone.",
        "zh": "$t^2 = 3 \\times 27 = 81$，故 $t = 9$。停在 $81$ 是忘了开平方；用 $3 \\times 24$ 则错误地只用了远段。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two tangent segments are drawn to a circle from the same external point. One measures $15$. What is the length of the other?",
        "zh": "从同一个外点向圆作两条切线段。其中一段为 $15$。另一段的长度是多少？"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "15 units"
      ],
      "explanation": {
        "en": "Tangent segments from a common external point are congruent, so the other is $15$. Any different value ignores that equal-length property.",
        "zh": "从同一外点引出的切线段相等，所以另一段是 $15$。任何不同的值都忽略了这一等长性质。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tangent and a secant are drawn from an external point. The tangent length is $6$ and the secant's external segment is $4$. What is the whole length of the secant?",
        "zh": "从一个外点引出一条切线和一条割线。切线长为 $6$，割线外段为 $4$。割线的整段长是多少？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "9 units"
      ],
      "explanation": {
        "en": "$t^2 = \\text{external} \\times \\text{whole}$, so $36 = 4 \\times w$ and $w = 9$. Dividing $36$ by $6$ mistakenly uses the tangent length in place of its square.",
        "zh": "$t^2 = 外段 \\times 整段$，故 $36 = 4 \\times w$，$w = 9$。用 $36$ 除以 $6$ 是错把切线长本身当成了它的平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tangent line touches a circle at a point, and a radius is drawn to that point. What is the measure, in degrees, of the angle between the tangent and the radius?",
        "zh": "一条切线与圆相切于一点，并画一条半径到该点。切线与半径之间的角是多少度？"
      },
      "answer": "90",
      "accept": [
        "90°",
        "90 degrees",
        "90.0",
        "90 deg"
      ],
      "explanation": {
        "en": "A tangent is perpendicular to the radius at the point of tangency, so the angle is $90^{\\circ}$. Any other value would mean the line cuts through the circle rather than touching it once.",
        "zh": "切线在切点处垂直于半径，所以角是 $90^{\\circ}$。任何其他值都意味着直线穿过了圆，而不是只相切一次。"
      }
    }
  ],
  "circles/equations-of-circles": [
    {
      "type": "mc",
      "question": {
        "en": "What is the center of the circle $(x-3)^2+(y+2)^2=25$?",
        "zh": "圆 $(x-3)^2+(y+2)^2=25$ 的圆心是什么？"
      },
      "choices": [
        "$(3,-2)$",
        "$(3,2)$",
        "$(-3,2)$",
        "$(-3,-2)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In $(x-h)^2+(y-k)^2=r^2$ the center is $(h,k)$, read with opposite signs: $(3,-2)$. Copying the signs directly to get $(-3,2)$ is the most common slip.",
        "zh": "在 $(x-h)^2+(y-k)^2=r^2$ 中圆心是 $(h,k)$，要取相反的符号：$(3,-2)$。直接照抄式中符号得到 $(-3,2)$ 是最常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the radius of the circle $(x-3)^2+(y+2)^2=25$?",
        "zh": "圆 $(x-3)^2+(y+2)^2=25$ 的半径是多少？"
      },
      "choices": [
        "$25$",
        "$5$",
        "$\\sqrt{5}$",
        "$10$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The right side is $r^2$, so $r=\\sqrt{25}=5$. Reporting $25$ forgets that the constant is the radius squared, not the radius.",
        "zh": "右边是 $r^2$，所以 $r=\\sqrt{25}=5$。回答 $25$ 是忘了那个常数是半径的平方，而非半径本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the equation of the circle with center $(0,0)$ and radius $7$?",
        "zh": "圆心为 $(0,0)$、半径为 $7$ 的圆的方程是什么？"
      },
      "choices": [
        "$x^2+y^2=7$",
        "$(x-7)^2+(y-7)^2=49$",
        "$x^2+y^2=49$",
        "$x^2+y^2=14$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With center at the origin, the equation is $x^2+y^2=r^2=49$. Writing $=7$ uses the radius instead of its square.",
        "zh": "圆心在原点时，方程为 $x^2+y^2=r^2=49$。写成 $=7$ 是用了半径而不是它的平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the equation of the circle with center $(-4,5)$ and radius $3$?",
        "zh": "圆心为 $(-4,5)$、半径为 $3$ 的圆的方程是什么？"
      },
      "choices": [
        "$(x-4)^2+(y+5)^2=9$",
        "$(x-4)^2+(y-5)^2=9$",
        "$(x+4)^2+(y-5)^2=3$",
        "$(x+4)^2+(y-5)^2=9$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Center $(-4,5)$ gives $(x+4)$ and $(y-5)$, and $r^2=9$: $(x+4)^2+(y-5)^2=9$. Leaving the right side as $3$ forgets to square the radius.",
        "zh": "圆心 $(-4,5)$ 给出 $(x+4)$ 和 $(y-5)$，且 $r^2=9$：$(x+4)^2+(y-5)^2=9$。右边留作 $3$ 是忘了把半径平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the radius of the circle $(x-1)^2+(y-6)^2=12$?",
        "zh": "圆 $(x-1)^2+(y-6)^2=12$ 的半径是多少？"
      },
      "choices": [
        "$2\\sqrt{3}$",
        "$6$",
        "$12$",
        "$\\sqrt{6}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$r=\\sqrt{12}=\\sqrt{4\\cdot 3}=2\\sqrt{3}$. Taking $12$ as the radius skips the square root of $r^2$.",
        "zh": "$r=\\sqrt{12}=\\sqrt{4\\cdot 3}=2\\sqrt{3}$。把 $12$ 当作半径是漏了对 $r^2$ 开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has a diameter with endpoints $(2,3)$ and $(8,3)$. What is its center?",
        "zh": "一个圆的直径端点为 $(2,3)$ 和 $(8,3)$。它的圆心是什么？"
      },
      "choices": [
        "$(3,5)$",
        "$(5,3)$",
        "$(10,6)$",
        "$(6,0)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The center is the midpoint of the diameter: $\\left(\\frac{2+8}{2},\\frac{3+3}{2}\\right)=(5,3)$. Adding the coordinates without dividing gives $(10,6)$, which is not the midpoint.",
        "zh": "圆心是直径的中点：$\\left(\\frac{2+8}{2},\\frac{3+3}{2}\\right)=(5,3)$。只相加不除以 2 得到 $(10,6)$，那不是中点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has a diameter with endpoints $(2,3)$ and $(8,3)$. What is its radius?",
        "zh": "一个圆的直径端点为 $(2,3)$ 和 $(8,3)$。它的半径是多少？"
      },
      "choices": [
        "$6$",
        "$36$",
        "$3$",
        "$9$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The diameter length is $8-2=6$, so the radius is half: $3$. Using the full distance $6$ as the radius forgets that the radius is half the diameter.",
        "zh": "直径长为 $8-2=6$，所以半径是它的一半：$3$。把整段距离 $6$ 当作半径是忘了半径是直径的一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After completing the square, the circle $x^2+y^2-6x+4y-12=0$ has what center?",
        "zh": "配方后，圆 $x^2+y^2-6x+4y-12=0$ 的圆心是什么？"
      },
      "choices": [
        "$(-3,2)$",
        "$(6,-4)$",
        "$(3,2)$",
        "$(3,-2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Completing the square gives $(x-3)^2+(y+2)^2=25$, so the center is $(3,-2)$. Taking the center as $(6,-4)$ uses the raw coefficients instead of halving them.",
        "zh": "配方得到 $(x-3)^2+(y+2)^2=25$，所以圆心是 $(3,-2)$。把圆心取作 $(6,-4)$ 是用了原始系数而没有取一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After completing the square, the circle $x^2+y^2+8x-2y+8=0$ has what radius?",
        "zh": "配方后，圆 $x^2+y^2+8x-2y+8=0$ 的半径是多少？"
      },
      "choices": [
        "$3$",
        "$8$",
        "$9$",
        "$\\sqrt{8}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Completing the square gives $(x+4)^2+(y-1)^2=9$, so $r=\\sqrt{9}=3$. Stopping at $9$ reports $r^2$ instead of $r$.",
        "zh": "配方得到 $(x+4)^2+(y-1)^2=9$，所以 $r=\\sqrt{9}=3$。停在 $9$ 是报告了 $r^2$ 而不是 $r$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After completing the square, the circle $x^2+y^2+8x-2y+8=0$ has what center?",
        "zh": "配方后，圆 $x^2+y^2+8x-2y+8=0$ 的圆心是什么？"
      },
      "choices": [
        "$(4,-1)$",
        "$(-4,1)$",
        "$(-8,2)$",
        "$(4,1)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The completed form $(x+4)^2+(y-1)^2=9$ gives center $(-4,1)$. Keeping the signs of the equation to get $(4,-1)$ reverses each coordinate.",
        "zh": "配方后的 $(x+4)^2+(y-1)^2=9$ 给出圆心 $(-4,1)$。保留方程中的符号得到 $(4,-1)$ 是把每个坐标的符号都弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle centered at the origin has equation $x^2+y^2=20$. What is its radius?",
        "zh": "一个以原点为圆心的圆，方程为 $x^2+y^2=20$。它的半径是多少？"
      },
      "choices": [
        "$20$",
        "$10$",
        "$2\\sqrt{5}$",
        "$4\\sqrt{5}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$r=\\sqrt{20}=\\sqrt{4\\cdot 5}=2\\sqrt{5}$. Reading $20$ as the radius skips taking the square root of $r^2$.",
        "zh": "$r=\\sqrt{20}=\\sqrt{4\\cdot 5}=2\\sqrt{5}$。把 $20$ 读作半径是漏了对 $r^2$ 开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the center of the circle $(x+5)^2+(y-3)^2=49$?",
        "zh": "圆 $(x+5)^2+(y-3)^2=49$ 的圆心是什么？"
      },
      "choices": [
        "$(5,3)$",
        "$(-5,-3)$",
        "$(5,-3)$",
        "$(-5,3)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Standard form uses $(x-h)$, so $(x+5)$ means $h=-5$ and $(y-3)$ means $k=3$: center $(-5,3)$. Copying the visible signs to get $(5,-3)$ flips both coordinates.",
        "zh": "标准式用 $(x-h)$，所以 $(x+5)$ 表示 $h=-5$，$(y-3)$ 表示 $k=3$：圆心 $(-5,3)$。照抄可见符号得到 $(5,-3)$ 是把两个坐标都弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the radius of the circle $(x-2)^2+(y-7)^2=81$?",
        "zh": "圆 $(x-2)^2+(y-7)^2=81$ 的半径是多少？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "9 units"
      ],
      "explanation": {
        "en": "$r=\\sqrt{81}=9$. Reporting $81$ would give $r^2$ instead of $r$.",
        "zh": "$r=\\sqrt{81}=9$。回答 $81$ 会给出 $r^2$ 而非 $r$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $x$-coordinate of the center of the circle $(x-6)^2+(y+4)^2=10$?",
        "zh": "圆 $(x-6)^2+(y+4)^2=10$ 圆心的 $x$ 坐标是多少？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "$(x-6)$ gives $h=6$. Reading it as $-6$ would copy the sign inside the parentheses instead of reversing it.",
        "zh": "$(x-6)$ 给出 $h=6$。读成 $-6$ 是照抄括号内的符号而没有取相反数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-coordinate of the center of the circle $(x-6)^2+(y+4)^2=10$?",
        "zh": "圆 $(x-6)^2+(y+4)^2=10$ 圆心的 $y$ 坐标是多少？"
      },
      "answer": "-4",
      "accept": [
        "-4.0",
        "−4"
      ],
      "explanation": {
        "en": "$(y+4)$ means $k=-4$, since standard form uses $(y-k)$. Writing $+4$ ignores the sign reversal.",
        "zh": "$(y+4)$ 表示 $k=-4$，因为标准式用 $(y-k)$。写成 $+4$ 忽略了符号的反转。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has a diameter with endpoints $(1,2)$ and $(7,10)$. What is its radius?",
        "zh": "一个圆的直径端点为 $(1,2)$ 和 $(7,10)$。它的半径是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5 units"
      ],
      "explanation": {
        "en": "The diameter length is $\\sqrt{(7-1)^2+(10-2)^2}=\\sqrt{36+64}=10$, so the radius is $5$. Using the full distance $10$ forgets to halve the diameter.",
        "zh": "直径长为 $\\sqrt{(7-1)^2+(10-2)^2}=\\sqrt{36+64}=10$，所以半径是 $5$。用整段距离 $10$ 是忘了把直径减半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "After completing the square, what is the radius of the circle $x^2+y^2-10x+6y+18=0$?",
        "zh": "配方后，圆 $x^2+y^2-10x+6y+18=0$ 的半径是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 units"
      ],
      "explanation": {
        "en": "Completing the square gives $(x-5)^2+(y+3)^2=16$, so $r=\\sqrt{16}=4$. Stopping at $16$ reports $r^2$ instead of $r$.",
        "zh": "配方得到 $(x-5)^2+(y+3)^2=16$，所以 $r=\\sqrt{16}=4$。停在 $16$ 是报告了 $r^2$ 而非 $r$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has center $(2,-3)$ and radius $6$. In its standard-form equation, what number appears on the right side?",
        "zh": "一个圆的圆心为 $(2,-3)$，半径为 $6$。在它的标准方程中，右边出现的数字是多少？"
      },
      "answer": "36",
      "accept": [
        "36.0"
      ],
      "explanation": {
        "en": "The right side is $r^2=6^2=36$. Writing $6$ uses the radius itself instead of its square.",
        "zh": "右边是 $r^2=6^2=36$。写成 $6$ 是用了半径本身而不是它的平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has a diameter with endpoints $(-2,1)$ and $(4,1)$. What is the $x$-coordinate of its center?",
        "zh": "一个圆的直径端点为 $(-2,1)$ 和 $(4,1)$。它圆心的 $x$ 坐标是多少？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "The center's $x$ is the midpoint value: $\\frac{-2+4}{2}=1$. Adding without dividing would give $2$, which is not the midpoint.",
        "zh": "圆心的 $x$ 是中点值：$\\frac{-2+4}{2}=1$。只相加不除以 2 会得到 $2$，那不是中点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle centered at $(3,4)$ passes through the origin $(0,0)$. What is its radius?",
        "zh": "一个以 $(3,4)$ 为圆心的圆经过原点 $(0,0)$。它的半径是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5 units"
      ],
      "explanation": {
        "en": "The radius is the distance from the center to the origin: $\\sqrt{3^2+4^2}=\\sqrt{25}=5$. Adding $3+4$ to get $7$ skips the distance formula.",
        "zh": "半径是圆心到原点的距离：$\\sqrt{3^2+4^2}=\\sqrt{25}=5$。把 $3+4$ 相加得到 $7$ 是跳过了距离公式。"
      }
    }
  ],
  "perimeter-and-area/areas-of-polygons": [
    {
      "type": "mc",
      "question": {
        "en": "A triangle has base $10$ and height $6$. What is its area?",
        "zh": "一个三角形的底为 $10$，高为 $6$。它的面积是多少？"
      },
      "choices": [
        "$30$",
        "$60$",
        "$16$",
        "$32$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Area of a triangle is $\\frac{1}{2}bh = \\frac{1}{2}(10)(6) = 30$. A common error is computing $bh = 60$ and forgetting the factor of one-half.",
        "zh": "三角形面积为 $\\frac{1}{2}bh = \\frac{1}{2}(10)(6) = 30$。常见错误是算成 $bh = 60$，忘了乘二分之一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A parallelogram has base $12$ and height $5$. What is its area?",
        "zh": "一个平行四边形的底为 $12$，高为 $5$。它的面积是多少？"
      },
      "choices": [
        "$30$",
        "$60$",
        "$120$",
        "$17$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area of a parallelogram is $bh = (12)(5) = 60$. Halving it to $30$ is the triangle formula, which does not apply to a parallelogram.",
        "zh": "平行四边形面积为 $bh = (12)(5) = 60$。将其减半为 $30$ 是三角形公式，不适用于平行四边形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A trapezoid has parallel bases $8$ and $12$ and height $5$. What is its area?",
        "zh": "一个梯形的两条平行底边为 $8$ 和 $12$，高为 $5$。它的面积是多少？"
      },
      "choices": [
        "$100$",
        "$40$",
        "$50$",
        "$25$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Area is $\\frac{1}{2}(b_1+b_2)h = \\frac{1}{2}(8+12)(5) = 50$. Leaving off the one-half gives $100$; using only one base loses the other parallel side.",
        "zh": "面积为 $\\frac{1}{2}(b_1+b_2)h = \\frac{1}{2}(8+12)(5) = 50$。漏掉二分之一会得到 $100$；只用一条底边则漏掉了另一条平行边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rhombus has diagonals of length $6$ and $8$. What is its area?",
        "zh": "一个菱形的两条对角线长为 $6$ 和 $8$。它的面积是多少？"
      },
      "choices": [
        "$48$",
        "$14$",
        "$12$",
        "$24$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Area of a rhombus is $\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(6)(8) = 24$. Multiplying the diagonals without the one-half gives $48$.",
        "zh": "菱形面积为 $\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(6)(8) = 24$。只把对角线相乘而不乘二分之一会得到 $48$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A kite has diagonals of length $10$ and $14$. What is its area?",
        "zh": "一个鸢形（筝形）的两条对角线长为 $10$ 和 $14$。它的面积是多少？"
      },
      "choices": [
        "$70$",
        "$140$",
        "$24$",
        "$35$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A kite uses the same diagonal formula: $\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(10)(14) = 70$. The product $140$ skips the one-half.",
        "zh": "鸢形使用相同的对角线公式：$\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(10)(14) = 70$。乘积 $140$ 漏掉了二分之一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A regular polygon has apothem $5$ and perimeter $40$. What is its area?",
        "zh": "一个正多边形的边心距（apothem）为 $5$，周长为 $40$。它的面积是多少？"
      },
      "choices": [
        "$200$",
        "$100$",
        "$50$",
        "$45$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area of a regular polygon is $\\frac{1}{2}aP = \\frac{1}{2}(5)(40) = 100$. Multiplying apothem by perimeter without the one-half gives $200$.",
        "zh": "正多边形面积为 $\\frac{1}{2}aP = \\frac{1}{2}(5)(40) = 100$。将边心距与周长相乘而不乘二分之一会得到 $200$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula gives the area of a regular polygon with apothem $a$ and perimeter $P$?",
        "zh": "边心距为 $a$、周长为 $P$ 的正多边形，其面积公式是哪一个？"
      },
      "choices": [
        "$aP$",
        "$\\frac{1}{2}a^2P$",
        "$\\frac{1}{2}aP$",
        "$2aP$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The area is $\\frac{1}{2}aP$: the polygon splits into triangles whose combined base is the perimeter and whose height is the apothem. Dropping the one-half gives $aP$, which double-counts each triangle.",
        "zh": "面积为 $\\frac{1}{2}aP$：多边形可分割成若干三角形，其底之和为周长，高为边心距。漏掉二分之一得到 $aP$，会把每个三角形重复计算一次。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has area $24$ and base $8$. What is its height?",
        "zh": "一个三角形的面积为 $24$，底为 $8$。它的高是多少？"
      },
      "choices": [
        "$3$",
        "$4$",
        "$12$",
        "$6$"
      ],
      "answer": 3,
      "explanation": {
        "en": "From $24 = \\frac{1}{2}(8)h$ we get $h = \\frac{2(24)}{8} = 6$. Dividing area by base directly (skipping the doubling) gives $3$, which ignores the one-half in the area formula.",
        "zh": "由 $24 = \\frac{1}{2}(8)h$ 得 $h = \\frac{2(24)}{8} = 6$。直接用面积除以底（不乘二）得到 $3$，忽略了面积公式中的二分之一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A figure is a $10\\times 4$ rectangle with a triangle of base $10$ and height $3$ attached on top. What is the total area?",
        "zh": "一个图形由 $10\\times 4$ 的矩形与顶部相连的一个底为 $10$、高为 $3$ 的三角形组成。总面积是多少？"
      },
      "choices": [
        "$55$",
        "$60$",
        "$70$",
        "$52$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add the pieces: rectangle $10\\times 4 = 40$ plus triangle $\\frac{1}{2}(10)(3) = 15$, total $55$. Treating the top as a $10\\times 3$ rectangle gives $30$ for the top and an inflated total of $70$.",
        "zh": "把各部分相加：矩形 $10\\times 4 = 40$ 加三角形 $\\frac{1}{2}(10)(3) = 15$，共 $55$。若把顶部当作 $10\\times 3$ 的矩形，则顶部为 $30$，总数会虚高为 $70$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A parallelogram has sides $8$ and $6$ with an included angle of $30^{\\circ}$. What is its area?",
        "zh": "一个平行四边形的两邻边为 $8$ 和 $6$，夹角为 $30^{\\circ}$。它的面积是多少？"
      },
      "choices": [
        "$48$",
        "$24$",
        "$41.6$",
        "$12$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area is $ab\\sin\\theta = (8)(6)\\sin 30^{\\circ} = 48(0.5) = 24$. Multiplying the sides without the sine gives $48$, which is the area only for a right angle.",
        "zh": "面积为 $ab\\sin\\theta = (8)(6)\\sin 30^{\\circ} = 48(0.5) = 24$。只把两边相乘而不乘正弦得到 $48$，那只有在夹角为直角时才成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rhombus has side length $10$ and a height (distance between opposite sides) of $8$. What is its area?",
        "zh": "一个菱形的边长为 $10$，高（对边之间的距离）为 $8$。它的面积是多少？"
      },
      "choices": [
        "$100$",
        "$40$",
        "$80$",
        "$64$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A rhombus is a parallelogram, so area is base times height: $(10)(8) = 80$. Squaring the side to get $100$ treats it like a square, ignoring the given height.",
        "zh": "菱形是平行四边形，所以面积为底乘高：$(10)(8) = 80$。把边长平方得到 $100$ 是把它当作正方形，忽略了给定的高。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A trapezoid has parallel bases $6$ and $10$ and area $48$. What is its height?",
        "zh": "一个梯形的两平行底边为 $6$ 和 $10$，面积为 $48$。它的高是多少？"
      },
      "choices": [
        "$3$",
        "$4$",
        "$5$",
        "$6$"
      ],
      "answer": 3,
      "explanation": {
        "en": "From $48 = \\frac{1}{2}(6+10)h = 8h$ we get $h = 6$. Forgetting to add the bases first (or dropping the one-half) leads to a too-small height.",
        "zh": "由 $48 = \\frac{1}{2}(6+10)h = 8h$ 得 $h = 6$。若忘记先把两底相加（或漏掉二分之一）会得到偏小的高。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has base $14$ and height $9$. What is its area?",
        "zh": "一个三角形的底为 $14$，高为 $9$。它的面积是多少？"
      },
      "answer": "63",
      "accept": [
        "63.0",
        "63.00"
      ],
      "explanation": {
        "en": "Area is $\\frac{1}{2}bh = \\frac{1}{2}(14)(9) = 63$. Skipping the one-half would give $126$.",
        "zh": "面积为 $\\frac{1}{2}bh = \\frac{1}{2}(14)(9) = 63$。漏掉二分之一会得到 $126$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A trapezoid has parallel bases $5$ and $11$ and height $4$. What is its area?",
        "zh": "一个梯形的两平行底边为 $5$ 和 $11$，高为 $4$。它的面积是多少？"
      },
      "answer": "32",
      "accept": [
        "32.0",
        "32.00"
      ],
      "explanation": {
        "en": "Area is $\\frac{1}{2}(5+11)(4) = \\frac{1}{2}(16)(4) = 32$. Adding the bases before multiplying is the key step.",
        "zh": "面积为 $\\frac{1}{2}(5+11)(4) = \\frac{1}{2}(16)(4) = 32$。先把两底相加再相乘是关键步骤。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rhombus has diagonals of length $12$ and $16$. What is its area?",
        "zh": "一个菱形的两条对角线长为 $12$ 和 $16$。它的面积是多少？"
      },
      "answer": "96",
      "accept": [
        "96.0",
        "96.00"
      ],
      "explanation": {
        "en": "Area is $\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(12)(16) = 96$. The product $192$ omits the one-half.",
        "zh": "面积为 $\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(12)(16) = 96$。乘积 $192$ 漏掉了二分之一。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regular polygon has apothem $6$ and perimeter $60$. What is its area?",
        "zh": "一个正多边形的边心距为 $6$，周长为 $60$。它的面积是多少？"
      },
      "answer": "180",
      "accept": [
        "180.0",
        "180.00"
      ],
      "explanation": {
        "en": "Area is $\\frac{1}{2}aP = \\frac{1}{2}(6)(60) = 180$. Multiplying apothem by perimeter without the one-half gives $360$.",
        "zh": "面积为 $\\frac{1}{2}aP = \\frac{1}{2}(6)(60) = 180$。边心距乘周长而不乘二分之一会得到 $360$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A kite has diagonals of length $9$ and $12$. What is its area?",
        "zh": "一个鸢形（筝形）的两条对角线长为 $9$ 和 $12$。它的面积是多少？"
      },
      "answer": "54",
      "accept": [
        "54.0",
        "54.00"
      ],
      "explanation": {
        "en": "Area is $\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(9)(12) = 54$. The full product $108$ leaves out the one-half.",
        "zh": "面积为 $\\frac{1}{2}d_1 d_2 = \\frac{1}{2}(9)(12) = 54$。完整乘积 $108$ 漏掉了二分之一。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A parallelogram has base $7$ and height $8$. What is its area?",
        "zh": "一个平行四边形的底为 $7$，高为 $8$。它的面积是多少？"
      },
      "answer": "56",
      "accept": [
        "56.0",
        "56.00"
      ],
      "explanation": {
        "en": "Area is $bh = (7)(8) = 56$. Halving it would incorrectly apply the triangle formula.",
        "zh": "面积为 $bh = (7)(8) = 56$。将其减半会错误地套用三角形公式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An L-shaped figure is a $12\\times 8$ rectangle with a $4\\times 3$ rectangular corner removed. What is its area?",
        "zh": "一个 L 形图形是一个 $12\\times 8$ 的矩形，被挖去一个 $4\\times 3$ 的矩形角。它的面积是多少？"
      },
      "answer": "84",
      "accept": [
        "84.0",
        "84.00"
      ],
      "explanation": {
        "en": "Subtract the removed piece: $12\\times 8 - 4\\times 3 = 96 - 12 = 84$. Forgetting to remove the notch leaves the full $96$.",
        "zh": "减去被挖去的部分：$12\\times 8 - 4\\times 3 = 96 - 12 = 84$。忘记减去缺口会得到完整的 $96$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A regular hexagon has side length $10$ and apothem $8.66$. Using perimeter $60$, what is its area? Round to one decimal place.",
        "zh": "一个正六边形的边长为 $10$，边心距为 $8.66$。用周长 $60$，它的面积是多少？保留一位小数。"
      },
      "answer": "259.8",
      "accept": [
        "259.80",
        "259.8",
        "260",
        "259.81",
        "259.807"
      ],
      "explanation": {
        "en": "Area is $\\frac{1}{2}aP = \\frac{1}{2}(8.66)(60) = 259.8$. Using only one triangle instead of the whole apothem-perimeter product badly undercounts.",
        "zh": "面积为 $\\frac{1}{2}aP = \\frac{1}{2}(8.66)(60) = 259.8$。若只算一个三角形而不用完整的边心距乘周长，会严重少算。"
      }
    }
  ],
  "perimeter-and-area/circles-arc-length-sectors": [
    {
      "type": "mc",
      "question": {
        "en": "What is the circumference of a circle with radius $5$?",
        "zh": "半径为 $5$ 的圆，其周长是多少？"
      },
      "choices": [
        "$10\\pi$",
        "$25\\pi$",
        "$5\\pi$",
        "$100\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Circumference is $2\\pi r = 2\\pi(5) = 10\\pi$. The value $25\\pi$ comes from $\\pi r^2$, which is the area formula, not the circumference.",
        "zh": "周长为 $2\\pi r = 2\\pi(5) = 10\\pi$。$25\\pi$ 来自 $\\pi r^2$，那是面积公式，而不是周长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of a circle with radius $6$?",
        "zh": "半径为 $6$ 的圆，其面积是多少？"
      },
      "choices": [
        "$12\\pi$",
        "$36\\pi$",
        "$6\\pi$",
        "$18\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area is $\\pi r^2 = \\pi(6)^2 = 36\\pi$. The value $12\\pi$ is $2\\pi r$, the circumference, which uses $r$ to the first power instead of squaring it.",
        "zh": "面积为 $\\pi r^2 = \\pi(6)^2 = 36\\pi$。$12\\pi$ 是 $2\\pi r$（周长），用的是 $r$ 的一次方而非平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the circumference of a circle with diameter $14$?",
        "zh": "直径为 $14$ 的圆，其周长是多少？"
      },
      "choices": [
        "$7\\pi$",
        "$28\\pi$",
        "$14\\pi$",
        "$49\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Circumference is $\\pi d = \\pi(14) = 14\\pi$. Treating the diameter as a radius and using $2\\pi r$ gives $28\\pi$, doubling the correct value.",
        "zh": "周长为 $\\pi d = \\pi(14) = 14\\pi$。把直径当作半径用 $2\\pi r$ 会得到 $28\\pi$，是正确值的两倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $8$. What is the arc length of a $90^{\\circ}$ arc?",
        "zh": "一个圆的半径为 $8$。$90^{\\circ}$ 弧的弧长是多少？"
      },
      "choices": [
        "$16\\pi$",
        "$8\\pi$",
        "$2\\pi$",
        "$4\\pi$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Arc length is $\\frac{\\theta}{360}\\cdot 2\\pi r = \\frac{90}{360}\\cdot 16\\pi = 4\\pi$. The value $16\\pi$ is the full circumference, ignoring that only a quarter of the circle is used.",
        "zh": "弧长为 $\\frac{\\theta}{360}\\cdot 2\\pi r = \\frac{90}{360}\\cdot 16\\pi = 4\\pi$。$16\\pi$ 是整个周长，忽略了只取了圆的四分之一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $8$. What is the area of a $90^{\\circ}$ sector?",
        "zh": "一个圆的半径为 $8$。$90^{\\circ}$ 扇形的面积是多少？"
      },
      "choices": [
        "$16\\pi$",
        "$64\\pi$",
        "$4\\pi$",
        "$32\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Sector area is $\\frac{\\theta}{360}\\cdot\\pi r^2 = \\frac{90}{360}\\cdot 64\\pi = 16\\pi$. The value $64\\pi$ is the whole circle area, not just the quarter sector.",
        "zh": "扇形面积为 $\\frac{\\theta}{360}\\cdot\\pi r^2 = \\frac{90}{360}\\cdot 64\\pi = 16\\pi$。$64\\pi$ 是整个圆的面积，而不是四分之一扇形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $12$. What is the arc length of a $60^{\\circ}$ arc?",
        "zh": "一个圆的半径为 $12$。$60^{\\circ}$ 弧的弧长是多少？"
      },
      "choices": [
        "$24\\pi$",
        "$4\\pi$",
        "$2\\pi$",
        "$8\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Arc length is $\\frac{60}{360}\\cdot 2\\pi(12) = \\frac{1}{6}\\cdot 24\\pi = 4\\pi$. The value $24\\pi$ is the full circumference without the $\\frac{60}{360}$ fraction.",
        "zh": "弧长为 $\\frac{60}{360}\\cdot 2\\pi(12) = \\frac{1}{6}\\cdot 24\\pi = 4\\pi$。$24\\pi$ 是整个周长，没有乘 $\\frac{60}{360}$ 这个比例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $6$. What is the area of a $120^{\\circ}$ sector?",
        "zh": "一个圆的半径为 $6$。$120^{\\circ}$ 扇形的面积是多少？"
      },
      "choices": [
        "$36\\pi$",
        "$4\\pi$",
        "$12\\pi$",
        "$6\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Sector area is $\\frac{120}{360}\\cdot\\pi(6)^2 = \\frac{1}{3}\\cdot 36\\pi = 12\\pi$. The value $36\\pi$ is the whole circle, skipping the $\\frac{1}{3}$ fraction.",
        "zh": "扇形面积为 $\\frac{120}{360}\\cdot\\pi(6)^2 = \\frac{1}{3}\\cdot 36\\pi = 12\\pi$。$36\\pi$ 是整个圆，漏掉了 $\\frac{1}{3}$ 的比例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the arc length of a central angle $\\theta$ (in degrees) in a circle of radius $r$?",
        "zh": "在半径为 $r$ 的圆中，圆心角为 $\\theta$（度）时，其弧长由哪个表达式给出？"
      },
      "choices": [
        "$\\frac{\\theta}{360}\\cdot\\pi r^2$",
        "$\\frac{\\theta}{360}\\cdot \\pi d^2$",
        "$\\frac{\\theta}{180}\\cdot 2\\pi r$",
        "$\\frac{\\theta}{360}\\cdot 2\\pi r$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Arc length is the fraction $\\frac{\\theta}{360}$ of the circumference $2\\pi r$. Using $\\pi r^2$ instead measures area, giving a sector area, not a length.",
        "zh": "弧长是周长 $2\\pi r$ 的 $\\frac{\\theta}{360}$ 部分。若改用 $\\pi r^2$ 则度量的是面积，得到的是扇形面积而非长度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $10$. What is its circumference? Use $\\pi\\approx 3.14159$ and round to one decimal place.",
        "zh": "一个圆的半径为 $10$。它的周长是多少？取 $\\pi\\approx 3.14159$，保留一位小数。"
      },
      "choices": [
        "$62.8$",
        "$314.2$",
        "$100.0$",
        "$31.4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Circumference is $2\\pi r = 2(3.14159)(10) \\approx 62.8$. Using $\\pi r \\approx 31.4$ leaves out the factor of $2$.",
        "zh": "周长为 $2\\pi r = 2(3.14159)(10) \\approx 62.8$。用 $\\pi r \\approx 31.4$ 漏掉了因子 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $7$. What is its area? Use $\\pi\\approx 3.14159$ and round to one decimal place.",
        "zh": "一个圆的半径为 $7$。它的面积是多少？取 $\\pi\\approx 3.14159$，保留一位小数。"
      },
      "choices": [
        "$44.0$",
        "$153.9$",
        "$22.0$",
        "$307.9$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area is $\\pi r^2 = 3.14159(49) \\approx 153.9$. The value near $44.0$ is $2\\pi r$, the circumference, which uses $r$ once instead of squaring it.",
        "zh": "面积为 $\\pi r^2 = 3.14159(49) \\approx 153.9$。约 $44.0$ 的值是 $2\\pi r$（周长），只用了 $r$ 一次而非平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of a semicircle with radius $4$?",
        "zh": "半径为 $4$ 的半圆，其面积是多少？"
      },
      "choices": [
        "$16\\pi$",
        "$4\\pi$",
        "$8\\pi$",
        "$2\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A semicircle is half a circle: $\\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi(16) = 8\\pi$. The value $16\\pi$ is the full circle area without halving.",
        "zh": "半圆是整圆的一半：$\\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi(16) = 8\\pi$。$16\\pi$ 是整圆面积，没有取一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $10$. A $90^{\\circ}$ sector is bounded by two radii. What is the area of the segment (sector minus the triangle formed by the two radii)? Use $\\pi\\approx 3.14159$.",
        "zh": "一个圆的半径为 $10$。一个 $90^{\\circ}$ 扇形由两条半径围成。弓形面积（扇形减去两半径构成的三角形）是多少？取 $\\pi\\approx 3.14159$。"
      },
      "choices": [
        "$25\\pi$",
        "$78.5$",
        "$50$",
        "$28.5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Segment $=$ sector $-$ triangle $= \\frac{90}{360}\\pi(100) - \\frac{1}{2}(10)(10) = 78.5 - 50 = 28.5$. Reporting $78.5$ gives the sector alone and forgets to subtract the triangle.",
        "zh": "弓形 $=$ 扇形 $-$ 三角形 $= \\frac{90}{360}\\pi(100) - \\frac{1}{2}(10)(10) = 78.5 - 50 = 28.5$。答 $78.5$ 只是扇形，忘了减去三角形。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the circumference of a circle with radius $3$? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "半径为 $3$ 的圆，其周长是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "18.85",
      "accept": [
        "18.8",
        "18.85",
        "18.849",
        "18.8496",
        "6\\pi",
        "6pi"
      ],
      "explanation": {
        "en": "Circumference is $2\\pi r = 2(3.14159)(3) \\approx 18.85$. Using $\\pi r \\approx 9.42$ drops the factor of $2$.",
        "zh": "周长为 $2\\pi r = 2(3.14159)(3) \\approx 18.85$。用 $\\pi r \\approx 9.42$ 漏掉了因子 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the area of a circle with radius $5$? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "半径为 $5$ 的圆，其面积是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "78.54",
      "accept": [
        "78.5",
        "78.54",
        "78.539",
        "78.5398",
        "25\\pi",
        "25pi"
      ],
      "explanation": {
        "en": "Area is $\\pi r^2 = 3.14159(25) \\approx 78.54$. Using $2\\pi r \\approx 31.42$ finds the circumference instead of the area.",
        "zh": "面积为 $\\pi r^2 = 3.14159(25) \\approx 78.54$。用 $2\\pi r \\approx 31.42$ 求的是周长而不是面积。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $4$. What is the arc length of a $90^{\\circ}$ arc? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "一个圆的半径为 $4$。$90^{\\circ}$ 弧的弧长是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "6.28",
      "accept": [
        "6.3",
        "6.28",
        "6.283",
        "6.2832",
        "2\\pi",
        "2pi"
      ],
      "explanation": {
        "en": "Arc length is $\\frac{90}{360}\\cdot 2\\pi(4) = \\frac{1}{4}(8\\pi) = 2\\pi \\approx 6.28$. Using the whole circumference $8\\pi \\approx 25.13$ ignores the $\\frac{1}{4}$ fraction.",
        "zh": "弧长为 $\\frac{90}{360}\\cdot 2\\pi(4) = \\frac{1}{4}(8\\pi) = 2\\pi \\approx 6.28$。用整个周长 $8\\pi \\approx 25.13$ 忽略了 $\\frac{1}{4}$ 的比例。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $6$. What is the area of a $180^{\\circ}$ sector? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "一个圆的半径为 $6$。$180^{\\circ}$ 扇形的面积是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "56.55",
      "accept": [
        "56.5",
        "56.55",
        "56.548",
        "56.5487",
        "18\\pi",
        "18pi"
      ],
      "explanation": {
        "en": "Sector area is $\\frac{180}{360}\\cdot\\pi(36) = \\frac{1}{2}(36\\pi) = 18\\pi \\approx 56.55$. This is a half-circle; using the full $36\\pi \\approx 113.1$ forgets the one-half.",
        "zh": "扇形面积为 $\\frac{180}{360}\\cdot\\pi(36) = \\frac{1}{2}(36\\pi) = 18\\pi \\approx 56.55$。这是半圆；用整个 $36\\pi \\approx 113.1$ 忘了取一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the circumference of a circle with diameter $20$? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "直径为 $20$ 的圆，其周长是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "62.83",
      "accept": [
        "62.8",
        "62.83",
        "62.831",
        "62.8318",
        "20\\pi",
        "20pi"
      ],
      "explanation": {
        "en": "Circumference is $\\pi d = 3.14159(20) \\approx 62.83$. Squaring or using $\\pi r^2$ finds area, not circumference.",
        "zh": "周长为 $\\pi d = 3.14159(20) \\approx 62.83$。若平方或用 $\\pi r^2$ 求的是面积而非周长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $8$. What is the arc length of a $45^{\\circ}$ arc? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "一个圆的半径为 $8$。$45^{\\circ}$ 弧的弧长是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "6.28",
      "accept": [
        "6.3",
        "6.28",
        "6.283",
        "6.2832",
        "2\\pi",
        "2pi"
      ],
      "explanation": {
        "en": "Arc length is $\\frac{45}{360}\\cdot 2\\pi(8) = \\frac{1}{8}(16\\pi) = 2\\pi \\approx 6.28$. The full circumference $16\\pi \\approx 50.27$ skips the $\\frac{45}{360}$ fraction.",
        "zh": "弧长为 $\\frac{45}{360}\\cdot 2\\pi(8) = \\frac{1}{8}(16\\pi) = 2\\pi \\approx 6.28$。整个周长 $16\\pi \\approx 50.27$ 漏掉了 $\\frac{45}{360}$ 的比例。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $10$. What is the area of a $72^{\\circ}$ sector? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "一个圆的半径为 $10$。$72^{\\circ}$ 扇形的面积是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "62.83",
      "accept": [
        "62.8",
        "62.83",
        "62.831",
        "62.8318",
        "20\\pi",
        "20pi"
      ],
      "explanation": {
        "en": "Sector area is $\\frac{72}{360}\\cdot\\pi(100) = \\frac{1}{5}(100\\pi) = 20\\pi \\approx 62.83$. Using the whole $100\\pi \\approx 314.2$ ignores the $\\frac{1}{5}$ fraction.",
        "zh": "扇形面积为 $\\frac{72}{360}\\cdot\\pi(100) = \\frac{1}{5}(100\\pi) = 20\\pi \\approx 62.83$。用整个 $100\\pi \\approx 314.2$ 忽略了 $\\frac{1}{5}$ 的比例。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $6$. A $90^{\\circ}$ sector is bounded by two radii. What is the area of the segment (sector minus the triangle)? Use $\\pi\\approx 3.14159$ and round to two decimal places.",
        "zh": "一个圆的半径为 $6$。一个 $90^{\\circ}$ 扇形由两条半径围成。弓形面积（扇形减去三角形）是多少？取 $\\pi\\approx 3.14159$，保留两位小数。"
      },
      "answer": "10.27",
      "accept": [
        "10.3",
        "10.27",
        "10.274",
        "10.2743"
      ],
      "explanation": {
        "en": "Sector $= \\frac{90}{360}\\pi(36) = 9\\pi \\approx 28.27$; the right triangle of legs $6$ and $6$ has area $\\frac{1}{2}(6)(6) = 18$. Segment $= 28.27 - 18 = 10.27$. Forgetting to subtract the triangle leaves $28.27$.",
        "zh": "扇形 $= \\frac{90}{360}\\pi(36) = 9\\pi \\approx 28.27$；两直角边为 $6$ 和 $6$ 的直角三角形面积为 $\\frac{1}{2}(6)(6) = 18$。弓形 $= 28.27 - 18 = 10.27$。忘了减三角形会得到 $28.27$。"
      }
    }
  ],
  "surface-area-volume/prisms-cylinders-pyramids-cones": [
    {
      "type": "mc",
      "question": {
        "en": "A rectangular prism has length 8, width 3, and height 5. What is its volume?",
        "zh": "一个长方体的长为 8、宽为 3、高为 5。它的体积是多少？"
      },
      "choices": [
        "120",
        "158",
        "16",
        "40"
      ],
      "answer": 0,
      "explanation": {
        "en": "Volume of a prism is $V = Bh$, and here $B = 8 \\times 3 = 24$, so $V = 24 \\times 5 = 120$. The value 158 comes from computing the total surface area $2(lw + lh + wh)$ instead of the volume.",
        "zh": "棱柱体积为 $V = Bh$，这里底面积 $B = 8 \\times 3 = 24$，所以 $V = 24 \\times 5 = 120$。158 是误算了总表面积 $2(lw + lh + wh)$ 而不是体积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cylinder has radius 3 and height 10. What is its volume? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆柱的半径为 3、高为 10。它的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "94.2",
        "282.7",
        "188.5",
        "141.4"
      ],
      "answer": 1,
      "explanation": {
        "en": "Volume of a cylinder is $V = \\pi r^2 h = \\pi (3^2)(10) = 90\\pi \\approx 282.7$. The value 94.2 comes from forgetting to square the radius and using $\\pi r h$ instead.",
        "zh": "圆柱体积为 $V = \\pi r^2 h = \\pi (3^2)(10) = 90\\pi \\approx 282.7$。94.2 是忘记把半径平方、误用 $\\pi r h$ 得到的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cone has radius 6 and height 8. What is its volume? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆锥的半径为 6、高为 8。它的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "904.8",
        "150.8",
        "301.6",
        "100.5"
      ],
      "answer": 2,
      "explanation": {
        "en": "A cone is one-third of the cylinder with the same base and height: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (36)(8) = 96\\pi \\approx 301.6$. The value 904.8 comes from forgetting the $\\frac{1}{3}$ factor and computing the full cylinder.",
        "zh": "圆锥是同底同高圆柱的三分之一：$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (36)(8) = 96\\pi \\approx 301.6$。904.8 是漏掉 $\\frac{1}{3}$ 系数、算成整个圆柱得到的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A right cone has base radius 5 and slant height 13. What is its (vertical) height?",
        "zh": "一个正圆锥的底面半径为 5、斜高（母线）为 13。它的（垂直）高是多少？"
      },
      "choices": [
        "8",
        "18",
        "12.5",
        "12"
      ],
      "answer": 3,
      "explanation": {
        "en": "The radius, height, and slant height form a right triangle: $h = \\sqrt{l^2 - r^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. The value 8 comes from wrongly subtracting the lengths ($13 - 5$) instead of using the Pythagorean relationship.",
        "zh": "半径、高与斜高构成直角三角形：$h = \\sqrt{l^2 - r^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$。8 是错误地把长度直接相减（$13 - 5$）而不用勾股定理得到的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula gives the volume of a pyramid with base area $B$ and height $h$?",
        "zh": "下列哪个公式给出底面积为 $B$、高为 $h$ 的棱锥的体积？"
      },
      "choices": [
        "$V = \\frac{1}{3}Bh$",
        "$V = Bh$",
        "$V = 2Bh$",
        "$V = \\frac{1}{2}Bh$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A pyramid is one-third of the prism with the same base and height, so $V = \\frac{1}{3}Bh$. The formula $V = Bh$ is for a prism, which has three times the volume of the pyramid.",
        "zh": "棱锥是同底同高棱柱的三分之一，所以 $V = \\frac{1}{3}Bh$。$V = Bh$ 是棱柱的公式，其体积是该棱锥的三倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the total surface area of a cube with edge length 4?",
        "zh": "棱长为 4 的正方体的总表面积是多少？"
      },
      "choices": [
        "64",
        "96",
        "48",
        "24"
      ],
      "answer": 1,
      "explanation": {
        "en": "A cube has 6 square faces, so $SA = 6s^2 = 6(4^2) = 96$. The value 64 is the volume $s^3$, not the surface area.",
        "zh": "正方体有 6 个正方形面，所以 $SA = 6s^2 = 6(4^2) = 96$。64 是体积 $s^3$，而不是表面积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the lateral surface area of a cylinder with radius 4 and height 7? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 4、高为 7 的圆柱的侧面积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "87.9",
        "351.9",
        "175.9",
        "276.5"
      ],
      "answer": 2,
      "explanation": {
        "en": "The lateral (curved) surface unrolls into a rectangle: $LSA = 2\\pi r h = 2\\pi (4)(7) = 56\\pi \\approx 175.9$. The value 276.5 is the total surface area, which also adds the two circular caps.",
        "zh": "侧面（曲面）展开为一个矩形：$LSA = 2\\pi r h = 2\\pi (4)(7) = 56\\pi \\approx 175.9$。276.5 是包含上下两个圆面的总表面积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cone has radius 3 and slant height 5. What is its total surface area? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆锥的半径为 3、斜高为 5。它的总表面积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "28.3",
        "47.1",
        "141.4",
        "75.4"
      ],
      "answer": 3,
      "explanation": {
        "en": "Total surface area of a cone is base plus lateral: $SA = \\pi r^2 + \\pi r l = 9\\pi + 15\\pi = 24\\pi \\approx 75.4$. The value 47.1 is only the lateral part $\\pi r l$, leaving out the circular base.",
        "zh": "圆锥总表面积为底面加侧面：$SA = \\pi r^2 + \\pi r l = 9\\pi + 15\\pi = 24\\pi \\approx 75.4$。47.1 只是侧面部分 $\\pi r l$，漏掉了圆形底面。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To compute the lateral surface area of a right cone or regular pyramid, which length must you use?",
        "zh": "计算正圆锥或正棱锥的侧面积时，必须使用哪一个长度？"
      },
      "choices": [
        "Slant height",
        "Vertical height",
        "Base radius",
        "Diameter"
      ],
      "answer": 0,
      "explanation": {
        "en": "Lateral faces slope along the surface, so their area depends on the slant height (measured along the face). Using the vertical height is a common error because it is shorter than the slant height and measures straight down the axis, not along the face.",
        "zh": "侧面沿着表面倾斜，所以其面积取决于斜高（沿侧面测量）。用垂直高是常见错误，因为它比斜高短，是沿轴向下测量而非沿侧面测量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A pyramid and a prism have the same base and the same height. The pyramid's volume is what fraction of the prism's?",
        "zh": "一个棱锥和一个棱柱有相同的底面和相同的高。棱锥的体积是棱柱体积的几分之几？"
      },
      "choices": [
        "One-half",
        "One-third",
        "One-quarter",
        "Equal"
      ],
      "answer": 1,
      "explanation": {
        "en": "It takes exactly three such pyramids to fill the prism, so the pyramid is one-third. Answering one-half confuses this with a two-dimensional triangle-in-rectangle relationship, which does not apply to solids.",
        "zh": "正好需要三个这样的棱锥才能填满棱柱，所以棱锥是三分之一。答成二分之一是把它与二维中三角形占矩形的关系混淆了，而那不适用于立体。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangular prism has a triangular base with base 6 and height 4, and the prism is 10 long. What is its volume?",
        "zh": "一个三棱柱的三角形底面底为 6、高为 4，棱柱长为 10。它的体积是多少？"
      },
      "choices": [
        "240",
        "60",
        "120",
        "72"
      ],
      "answer": 2,
      "explanation": {
        "en": "First find the base area $B = \\frac{1}{2}(6)(4) = 12$, then $V = Bh = 12 \\times 10 = 120$. The value 240 comes from forgetting the $\\frac{1}{2}$ in the triangle's area.",
        "zh": "先求底面积 $B = \\frac{1}{2}(6)(4) = 12$，再算 $V = Bh = 12 \\times 10 = 120$。240 是忘记三角形面积中的 $\\frac{1}{2}$ 得到的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A square pyramid has base edge 6 and height 10. What is its volume?",
        "zh": "一个正四棱锥的底边为 6、高为 10。它的体积是多少？"
      },
      "choices": [
        "360",
        "180",
        "216",
        "120"
      ],
      "answer": 3,
      "explanation": {
        "en": "The base area is $B = 6^2 = 36$, so $V = \\frac{1}{3}Bh = \\frac{1}{3}(36)(10) = 120$. The value 360 comes from forgetting the $\\frac{1}{3}$ factor and computing $Bh$ like a prism.",
        "zh": "底面积为 $B = 6^2 = 36$，所以 $V = \\frac{1}{3}Bh = \\frac{1}{3}(36)(10) = 120$。360 是漏掉 $\\frac{1}{3}$ 系数、按棱柱算成 $Bh$ 得到的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangular prism has length 7, width 2, and height 5. What is its volume?",
        "zh": "一个长方体的长为 7、宽为 2、高为 5。它的体积是多少？"
      },
      "answer": "70",
      "accept": [
        "70.0",
        "70 cubic units",
        "70 units^3"
      ],
      "explanation": {
        "en": "$V = Bh = (7 \\times 2)(5) = 14 \\times 5 = 70$.",
        "zh": "$V = Bh = (7 \\times 2)(5) = 14 \\times 5 = 70$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cylinder has radius 5 and height 4. What is its volume to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆柱的半径为 5、高为 4。它的体积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "314.2",
      "accept": [
        "314.16",
        "314.159",
        "314",
        "100pi",
        "100\\pi"
      ],
      "explanation": {
        "en": "$V = \\pi r^2 h = \\pi (25)(4) = 100\\pi \\approx 314.2$.",
        "zh": "$V = \\pi r^2 h = \\pi (25)(4) = 100\\pi \\approx 314.2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cone has radius 3 and height 7. What is its volume to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆锥的半径为 3、高为 7。它的体积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "66.0",
      "accept": [
        "66",
        "65.97",
        "65.973",
        "21pi",
        "21\\pi"
      ],
      "explanation": {
        "en": "$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (9)(7) = 21\\pi \\approx 66.0$.",
        "zh": "$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (9)(7) = 21\\pi \\approx 66.0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right cone has base radius 6 and vertical height 8. What is its slant height?",
        "zh": "一个正圆锥的底面半径为 6、垂直高为 8。它的斜高（母线长）是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10 units"
      ],
      "explanation": {
        "en": "The slant height is the hypotenuse: $l = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.",
        "zh": "斜高是斜边：$l = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the total surface area of a cube with edge length 5?",
        "zh": "棱长为 5 的正方体的总表面积是多少？"
      },
      "answer": "150",
      "accept": [
        "150.0",
        "150 square units",
        "150 units^2"
      ],
      "explanation": {
        "en": "$SA = 6s^2 = 6(25) = 150$.",
        "zh": "$SA = 6s^2 = 6(25) = 150$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangular prism has a right-triangle base with legs 3 and 4, and the prism is 9 long. What is its volume?",
        "zh": "一个三棱柱的底面是直角三角形，两直角边为 3 和 4，棱柱长为 9。它的体积是多少？"
      },
      "answer": "54",
      "accept": [
        "54.0",
        "54 cubic units"
      ],
      "explanation": {
        "en": "Base area $B = \\frac{1}{2}(3)(4) = 6$, so $V = Bh = 6 \\times 9 = 54$.",
        "zh": "底面积 $B = \\frac{1}{2}(3)(4) = 6$，所以 $V = Bh = 6 \\times 9 = 54$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A square pyramid has base edge 4 and height 9. What is its volume?",
        "zh": "一个正四棱锥的底边为 4、高为 9。它的体积是多少？"
      },
      "answer": "48",
      "accept": [
        "48.0",
        "48 cubic units"
      ],
      "explanation": {
        "en": "Base area $B = 4^2 = 16$, so $V = \\frac{1}{3}Bh = \\frac{1}{3}(16)(9) = 48$.",
        "zh": "底面积 $B = 4^2 = 16$，所以 $V = \\frac{1}{3}Bh = \\frac{1}{3}(16)(9) = 48$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the lateral surface area of a cylinder with radius 2 and height 10, to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 2、高为 10 的圆柱的侧面积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "125.7",
      "accept": [
        "125.66",
        "125.664",
        "40pi",
        "40\\pi"
      ],
      "explanation": {
        "en": "$LSA = 2\\pi r h = 2\\pi (2)(10) = 40\\pi \\approx 125.7$.",
        "zh": "$LSA = 2\\pi r h = 2\\pi (2)(10) = 40\\pi \\approx 125.7$。"
      }
    }
  ],
  "surface-area-volume/spheres-and-solid-reasoning": [
    {
      "type": "mc",
      "question": {
        "en": "What is the surface area of a sphere with radius 5? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 5 的球的表面积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "314.2",
        "78.5",
        "628.3",
        "523.6"
      ],
      "answer": 0,
      "explanation": {
        "en": "Surface area of a sphere is $SA = 4\\pi r^2 = 4\\pi (25) = 100\\pi \\approx 314.2$. The value 78.5 comes from forgetting the factor of 4 and computing only $\\pi r^2$.",
        "zh": "球的表面积为 $SA = 4\\pi r^2 = 4\\pi (25) = 100\\pi \\approx 314.2$。78.5 是漏掉系数 4、只算了 $\\pi r^2$ 得到的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the volume of a sphere with radius 6? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 6 的球的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "678.6",
        "904.8",
        "452.4",
        "144"
      ],
      "answer": 1,
      "explanation": {
        "en": "Volume of a sphere is $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (216) = 288\\pi \\approx 904.8$. The value 678.6 comes from dropping the $\\frac{4}{3}$ factor and computing only $\\pi r^3$.",
        "zh": "球的体积为 $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (216) = 288\\pi \\approx 904.8$。678.6 是漏掉 $\\frac{4}{3}$ 系数、只算了 $\\pi r^3$ 得到的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two similar solids have a linear scale factor of $k = 2$. What is the ratio of their volumes (larger to smaller)?",
        "zh": "两个相似立体的线性比（缩放因子）为 $k = 2$。它们的体积比（大比小）是多少？"
      },
      "choices": [
        "2",
        "4",
        "8",
        "6"
      ],
      "answer": 2,
      "explanation": {
        "en": "Volume scales by the cube of the linear factor: $k^3 = 2^3 = 8$. Answering 4 uses $k^2$, which is the ratio for surface areas, not volumes.",
        "zh": "体积按线性比的三次方缩放：$k^3 = 2^3 = 8$。答成 4 是用了 $k^2$，那是表面积的比而不是体积的比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two similar solids have a linear scale factor of 3. What is the ratio of their surface areas?",
        "zh": "两个相似立体的线性比为 3。它们的表面积比是多少？"
      },
      "choices": [
        "3",
        "27",
        "6",
        "9"
      ],
      "answer": 3,
      "explanation": {
        "en": "Surface area scales by the square of the linear factor: $k^2 = 3^2 = 9$. Answering 27 uses $k^3$, which is the volume ratio, not the surface-area ratio.",
        "zh": "表面积按线性比的平方缩放：$k^2 = 3^2 = 9$。答成 27 是用了 $k^3$，那是体积比而不是表面积比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The cross-section formed by slicing a sphere with any flat plane is always a:",
        "zh": "用任意平面截球所得到的截面总是一个："
      },
      "choices": [
        "Circle",
        "Ellipse",
        "Square",
        "Triangle"
      ],
      "answer": 0,
      "explanation": {
        "en": "Every planar slice of a sphere is a circle (a point at the extreme tangent case). It is never an ellipse, because a sphere is perfectly round in all directions, unlike a slanted slice of an egg-shaped solid.",
        "zh": "球的任何平面截面都是圆（在相切极限情形退化为一点）。它绝不会是椭圆，因为球在各方向都完全对称，不像鸡蛋形立体的斜截面。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cube is sliced by a plane parallel to one of its faces. The cross-section is a:",
        "zh": "用一个平行于正方体某一面的平面去截它，所得截面是一个："
      },
      "choices": [
        "Triangle",
        "Square",
        "Circle",
        "Hexagon"
      ],
      "answer": 1,
      "explanation": {
        "en": "A slice parallel to a face reproduces that face's shape, so the cross-section is a square. A hexagon is possible only for a slanted slice through the cube, not a parallel one.",
        "zh": "平行于某面的截面复制该面的形状，所以截面是正方形。六边形只有在斜着截正方体时才可能出现，而不是平行截面。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A vertical cross-section taken through the central axis of a right cylinder is a:",
        "zh": "沿正圆柱中心轴所取的竖直截面是一个："
      },
      "choices": [
        "Circle",
        "Ellipse",
        "Rectangle",
        "Triangle"
      ],
      "answer": 2,
      "explanation": {
        "en": "Cutting straight down through the axis exposes the straight sides and flat top and bottom, giving a rectangle. A circle results only from a horizontal cut perpendicular to the axis.",
        "zh": "沿轴竖直切开会露出笔直的侧壁和平的上下面，得到矩形。只有垂直于轴的水平截面才会得到圆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two similar solids have volumes in the ratio 27:64. What is the ratio of their corresponding edge lengths?",
        "zh": "两个相似立体的体积比为 27:64。它们对应棱长的比是多少？"
      },
      "choices": [
        "27:64",
        "9:16",
        "4:3",
        "3:4"
      ],
      "answer": 3,
      "explanation": {
        "en": "Edges are the linear factor, so take cube roots of the volume ratio: $\\sqrt[3]{27}:\\sqrt[3]{64} = 3:4$. Answering 9:16 comes from taking square roots, which recovers the surface-area ratio instead.",
        "zh": "棱长是线性比，所以对体积比取立方根：$\\sqrt[3]{27}:\\sqrt[3]{64} = 3:4$。答成 9:16 是取了平方根，那样得到的是表面积比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For two similar solids with linear scale factor $k$, which statement is correct?",
        "zh": "对于线性比为 $k$ 的两个相似立体，下列哪个陈述是正确的？"
      },
      "choices": [
        "Volume ratio is $k^3$",
        "Volume ratio is $k^2$",
        "Surface area ratio is $k^3$",
        "Surface area ratio is $k$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Lengths scale by $k$, areas by $k^2$, and volumes by $k^3$. Saying the volume ratio is $k^2$ swaps the exponents that belong to surface area and volume.",
        "zh": "长度按 $k$ 缩放，面积按 $k^2$，体积按 $k^3$。说体积比为 $k^2$ 是把表面积与体积对应的指数弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the volume of a hemisphere with radius 3? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 3 的半球的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "113.1",
        "56.5",
        "28.3",
        "84.8"
      ],
      "answer": 1,
      "explanation": {
        "en": "A hemisphere is half a sphere: $V = \\frac{1}{2}\\cdot\\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi (27) = 18\\pi \\approx 56.5$. The value 113.1 is the full sphere's volume, forgetting to halve it.",
        "zh": "半球是球的一半：$V = \\frac{1}{2}\\cdot\\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi (27) = 18\\pi \\approx 56.5$。113.1 是整个球的体积，忘记取一半了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two spheres have radii in the ratio 1:2. What is the ratio of their volumes?",
        "zh": "两个球的半径比为 1:2。它们的体积比是多少？"
      },
      "choices": [
        "1:2",
        "1:4",
        "1:8",
        "1:6"
      ],
      "answer": 2,
      "explanation": {
        "en": "Volume ratio is the cube of the radius ratio: $1^3:2^3 = 1:8$. Answering 1:4 uses the square, which would be the surface-area ratio instead.",
        "zh": "体积比是半径比的三次方：$1^3:2^3 = 1:8$。答成 1:4 是取了平方，那是表面积比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the radius of a sphere is doubled, its surface area is multiplied by:",
        "zh": "如果一个球的半径加倍，它的表面积会变为原来的几倍？"
      },
      "choices": [
        "2",
        "8",
        "3",
        "4"
      ],
      "answer": 3,
      "explanation": {
        "en": "Surface area depends on $r^2$, so doubling the radius multiplies the area by $2^2 = 4$. Answering 8 uses $2^3$, which is how the volume (not the surface area) changes.",
        "zh": "表面积与 $r^2$ 有关，所以半径加倍使面积变为 $2^2 = 4$ 倍。答成 8 是用了 $2^3$，那是体积（而非表面积）的变化倍数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the surface area of a sphere with radius 7 to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 7 的球的表面积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "615.8",
      "accept": [
        "615.75",
        "615.752",
        "615.7",
        "196pi",
        "196\\pi"
      ],
      "explanation": {
        "en": "$SA = 4\\pi r^2 = 4\\pi (49) = 196\\pi \\approx 615.8$.",
        "zh": "$SA = 4\\pi r^2 = 4\\pi (49) = 196\\pi \\approx 615.8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the volume of a sphere with radius 3 to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 3 的球的体积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "113.1",
      "accept": [
        "113.10",
        "113.097",
        "113",
        "36pi",
        "36\\pi"
      ],
      "explanation": {
        "en": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (27) = 36\\pi \\approx 113.1$.",
        "zh": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (27) = 36\\pi \\approx 113.1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two similar solids have a linear scale factor of 5. What is the ratio of their volumes (larger to smaller), written as a number?",
        "zh": "两个相似立体的线性比为 5。它们的体积比（大比小）写成一个数是多少？"
      },
      "answer": "125",
      "accept": [
        "125.0",
        "125:1",
        "125 to 1"
      ],
      "explanation": {
        "en": "Volume ratio is $k^3 = 5^3 = 125$.",
        "zh": "体积比为 $k^3 = 5^3 = 125$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two similar solids have a linear scale factor of 4. What is the ratio of their surface areas, written as a number?",
        "zh": "两个相似立体的线性比为 4。它们的表面积比写成一个数是多少？"
      },
      "answer": "16",
      "accept": [
        "16.0",
        "16:1",
        "16 to 1"
      ],
      "explanation": {
        "en": "Surface-area ratio is $k^2 = 4^2 = 16$.",
        "zh": "表面积比为 $k^2 = 4^2 = 16$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two similar solids have volumes in the ratio 8:125. What is the ratio of the smaller edge to the larger edge, as a decimal?",
        "zh": "两个相似立体的体积比为 8:125。较小棱长与较大棱长之比写成小数是多少？"
      },
      "answer": "0.4",
      "accept": [
        "2/5",
        ".4",
        "0.40",
        "0.4:1"
      ],
      "explanation": {
        "en": "Take cube roots: $\\sqrt[3]{8}:\\sqrt[3]{125} = 2:5$, and $2 \\div 5 = 0.4$.",
        "zh": "取立方根：$\\sqrt[3]{8}:\\sqrt[3]{125} = 2:5$，而 $2 \\div 5 = 0.4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the volume of a hemisphere with radius 6 to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 6 的半球的体积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "452.4",
      "accept": [
        "452.39",
        "452.389",
        "452",
        "144pi",
        "144\\pi"
      ],
      "explanation": {
        "en": "$V = \\frac{1}{2}\\cdot\\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi (216) = 144\\pi \\approx 452.4$.",
        "zh": "$V = \\frac{1}{2}\\cdot\\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi (216) = 144\\pi \\approx 452.4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A composite solid is a cylinder of radius 2 and height 5 with a hemisphere of radius 2 on top. What is its total volume to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个组合体由半径为 2、高为 5 的圆柱与其上方半径为 2 的半球组成。它的总体积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "79.6",
      "accept": [
        "79.59",
        "79.587",
        "79.5"
      ],
      "explanation": {
        "en": "Add the parts: cylinder $\\pi (4)(5) = 20\\pi$ plus hemisphere $\\frac{2}{3}\\pi (8) = \\frac{16}{3}\\pi$, giving $\\frac{76}{3}\\pi \\approx 79.6$.",
        "zh": "把两部分相加：圆柱 $\\pi (4)(5) = 20\\pi$，加上半球 $\\frac{2}{3}\\pi (8) = \\frac{16}{3}\\pi$，共 $\\frac{76}{3}\\pi \\approx 79.6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the volume of a sphere with radius 10 to the nearest tenth? (Use $\\pi \\approx 3.14159$.)",
        "zh": "半径为 10 的球的体积精确到十分位是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "4188.8",
      "accept": [
        "4188.79",
        "4188.790",
        "4189",
        "4188.7"
      ],
      "explanation": {
        "en": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (1000) = \\frac{4000}{3}\\pi \\approx 4188.8$.",
        "zh": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (1000) = \\frac{4000}{3}\\pi \\approx 4188.8$。"
      }
    }
  ]
};
