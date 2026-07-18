export default {
  "id": "geometry",
  "title": "Geometry",
  "titleZh": "几何",
  "subject": "math",
  "level": "Honors",
  "description": "A complete high school Geometry course: foundations and proof, parallel lines, transformations, congruence, triangle relationships, quadrilaterals, similarity, right-triangle trigonometry, circles, area, and solid geometry.",
  "descriptionZh": "完整的高中几何课程：几何基础与证明、平行线、图形变换、全等、三角形中的关系、四边形、相似、直角三角形与三角比、圆、面积以及立体几何。",
  "units": [
    {
      "id": "foundations",
      "title": "Unit 1: Foundations of Geometry",
      "titleZh": "第一单元：几何基础",
      "lessons": [
        {
          "id": "points-lines-planes",
          "title": "Points, Lines, and Planes",
          "titleZh": "点、线、面",
          "content": [
            {
              "type": "h2",
              "en": "The Building Blocks of Geometry",
              "zh": "几何的基本构件"
            },
            {
              "type": "p",
              "en": "Every figure you will study this year is built from three undefined terms: the point, the line, and the plane. They are called \"undefined\" because we describe them intuitively instead of defining them with earlier terms. A point has no size and marks only a location; we label it with a capital letter such as $A$. A line extends without end in two directions and is named by any two of its points, such as $\\overleftrightarrow{AB}$. A plane is a flat surface that extends without end in every direction, named by a script letter or by three noncollinear points.",
              "zh": "本学年你将学习的每一个图形都由三个不加定义的基本术语构成：点、线、面。之所以称为\"不加定义\"，是因为我们只凭直觉描述它们，而不是用更早的术语来定义。点没有大小，只表示位置，用大写字母如 $A$ 标记。直线向两个方向无限延伸，用它上面的任意两点命名，例如 $\\overleftrightarrow{AB}$。平面是向四面八方无限延伸的平坦表面，用花体字母或三个不共线的点命名。"
            },
            {
              "type": "h3",
              "en": "Segments, Rays, and Collinearity",
              "zh": "线段、射线与共线"
            },
            {
              "type": "p",
              "en": "From lines we build two more objects. A segment $\\overline{AB}$ consists of endpoints $A$ and $B$ and all points between them; it has a definite length $AB$. A ray $\\overrightarrow{AB}$ starts at endpoint $A$ and passes through $B$ forever. Points that lie on the same line are collinear, and points that lie in the same plane are coplanar.",
              "zh": "由直线我们又构造出两种对象。线段 $\\overline{AB}$ 由端点 $A$、$B$ 及它们之间的所有点组成，具有确定的长度 $AB$。射线 $\\overrightarrow{AB}$ 从端点 $A$ 出发，经过 $B$ 无限延伸。位于同一条直线上的点叫做共线点，位于同一平面内的点叫做共面点。"
            },
            {
              "type": "h3",
              "en": "How Points, Lines, and Planes Interact",
              "zh": "点、线、面之间的关系"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Through any two points there is exactly one line.",
                  "zh": "过任意两点有且只有一条直线。"
                },
                {
                  "en": "Through any three noncollinear points there is exactly one plane.",
                  "zh": "过任意三个不共线的点有且只有一个平面。"
                },
                {
                  "en": "If two distinct lines intersect, they intersect in exactly one point.",
                  "zh": "两条不同的直线若相交，则恰好交于一点。"
                },
                {
                  "en": "If two distinct planes intersect, their intersection is a line.",
                  "zh": "两个不同的平面若相交，其交集是一条直线。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Order matters for rays but not for segments or lines: $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ are different rays because they have different endpoints, but $\\overline{AB} = \\overline{BA}$.",
              "zh": "对射线来说顺序很重要，但对线段和直线则不然：$\\overrightarrow{AB}$ 与 $\\overrightarrow{BA}$ 是不同的射线，因为端点不同；而 $\\overline{AB} = \\overline{BA}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Naming figures",
                "zh": "例题 1：图形的命名"
              },
              "problem": {
                "en": "Points $P$, $Q$, and $R$ lie on one line, with $Q$ between $P$ and $R$. Name the two rays with endpoint $Q$, and decide whether they are the same ray.",
                "zh": "点 $P$、$Q$、$R$ 在同一条直线上，且 $Q$ 在 $P$ 与 $R$ 之间。写出以 $Q$ 为端点的两条射线，并判断它们是否为同一条射线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The rays with endpoint $Q$ are $\\overrightarrow{QP}$ and $\\overrightarrow{QR}$. They share an endpoint but travel in opposite directions along the line, so they are not the same ray. A pair like this is called opposite rays, and together they form the whole line.",
                  "zh": "以 $Q$ 为端点的射线是 $\\overrightarrow{QP}$ 和 $\\overrightarrow{QR}$。它们共用一个端点，但沿直线朝相反方向延伸，因此不是同一条射线。这样的一对射线叫做互为反向射线，合起来构成整条直线。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Counting lines",
                "zh": "例题 2：数直线的条数"
              },
              "problem": {
                "en": "Four points $A$, $B$, $C$, $D$ are drawn so that no three are collinear. How many distinct lines pass through pairs of these points?",
                "zh": "平面上有四个点 $A$、$B$、$C$、$D$，其中任意三点不共线。经过这些点对的不同直线共有多少条？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Each pair of points determines exactly one line, and since no three points are collinear, no two pairs give the same line. The number of pairs from 4 points is",
                  "zh": "每一对点确定恰好一条直线；由于任意三点不共线，不同的点对不会给出同一条直线。4 个点的点对个数为"
                },
                {
                  "type": "math",
                  "tex": "\\binom{4}{2} = \\frac{4 \\cdot 3}{2} = 6"
                },
                {
                  "type": "p",
                  "en": "So there are 6 distinct lines.",
                  "zh": "所以共有 6 条不同的直线。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is an undefined term in geometry?",
                "zh": "下列哪一项是几何中的不加定义的基本术语？"
              },
              "choices": [
                "Plane",
                "Segment",
                "Ray",
                "Angle"
              ],
              "answer": 0,
              "explanation": {
                "en": "Point, line, and plane are the three undefined terms. Segments, rays, and angles are all defined using them.",
                "zh": "点、线、面是三个不加定义的术语。线段、射线和角都是用它们来定义的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many endpoints does a ray have?",
                "zh": "一条射线有几个端点？"
              },
              "choices": [
                "0",
                "1",
                "2",
                "Infinitely many"
              ],
              "answer": 1,
              "explanation": {
                "en": "A ray starts at one endpoint and extends forever in one direction, so it has exactly 1 endpoint. A segment has 2 and a line has none.",
                "zh": "射线从一个端点出发，沿一个方向无限延伸，所以恰有 1 个端点。线段有 2 个端点，直线没有端点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two distinct planes intersect. What is their intersection?",
                "zh": "两个不同的平面相交，其交集是什么？"
              },
              "choices": [
                "A point",
                "A line",
                "A plane",
                "A segment"
              ],
              "answer": 1,
              "explanation": {
                "en": "By the plane intersection postulate, when two distinct planes meet they share a whole line, like the crease where two walls meet.",
                "zh": "由平面相交公理，两个不同平面相交时共享一整条直线，就像两面墙相交处的棱线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the minimum number of noncollinear points needed to determine a plane? Give a whole number.",
                "zh": "确定一个平面至少需要几个不共线的点？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "three"
              ],
              "explanation": {
                "en": "Two points only determine a line; the plane can still rotate around that line. A third point not on the line pins the plane down, so 3 noncollinear points determine exactly one plane.",
                "zh": "两点只能确定一条直线，平面仍可绕这条直线旋转。再加一个不在该直线上的点就能固定平面，所以三个不共线的点确定唯一的平面。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$M$ is between $A$ and $B$ on a line. Which pair of rays are opposite rays?",
                "zh": "在一条直线上，$M$ 位于 $A$ 与 $B$ 之间。下列哪一对射线互为反向射线？"
              },
              "choices": [
                "$\\overrightarrow{MA}$ and $\\overrightarrow{MB}$",
                "$\\overrightarrow{AM}$ and $\\overrightarrow{MB}$",
                "$\\overrightarrow{AB}$ and $\\overrightarrow{BA}$",
                "$\\overrightarrow{AM}$ and $\\overrightarrow{AB}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Opposite rays must share the same endpoint and point in opposite directions. Only $\\overrightarrow{MA}$ and $\\overrightarrow{MB}$ share endpoint $M$; the pairs in the other choices have different endpoints or the same direction.",
                "zh": "反向射线必须共用同一端点且方向相反。只有 $\\overrightarrow{MA}$ 与 $\\overrightarrow{MB}$ 共用端点 $M$；其他选项中的射线端点不同或方向相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Five points are drawn so that no three are collinear. How many distinct lines pass through pairs of these points? Give a whole number.",
                "zh": "平面上有五个点，任意三点不共线。经过这些点对的不同直线共有多少条？请填一个整数。"
              },
              "answer": "10",
              "explanation": {
                "en": "Each of the $\\binom{5}{2} = \\frac{5\\cdot 4}{2} = 10$ pairs of points gives a different line, since no three points share a line.",
                "zh": "共有 $\\binom{5}{2} = \\frac{5\\cdot 4}{2} = 10$ 对点，由于任意三点不共线，每一对点给出一条不同的直线。"
              }
            }
          ]
        },
        {
          "id": "segment-angle-addition",
          "title": "Segment and Angle Addition",
          "titleZh": "线段与角的加法",
          "content": [
            {
              "type": "h2",
              "en": "Measuring Segments",
              "zh": "线段的度量"
            },
            {
              "type": "p",
              "en": "The Ruler Postulate says every point on a line can be matched with a real number, its coordinate. The distance between two points is the absolute value of the difference of their coordinates: if $A$ has coordinate $a$ and $B$ has coordinate $b$, then $AB = |a - b|$. Two segments with equal lengths are called congruent, written $\\overline{AB} \\cong \\overline{CD}$.",
              "zh": "直尺公理指出，直线上的每个点都可以与一个实数（它的坐标）对应。两点之间的距离等于坐标之差的绝对值：若 $A$ 的坐标为 $a$，$B$ 的坐标为 $b$，则 $AB = |a - b|$。长度相等的两条线段叫做全等线段，记作 $\\overline{AB} \\cong \\overline{CD}$。"
            },
            {
              "type": "h3",
              "en": "The Segment Addition Postulate",
              "zh": "线段加法公理"
            },
            {
              "type": "p",
              "en": "If $B$ is between $A$ and $C$, the two small pieces add to the whole:",
              "zh": "若 $B$ 在 $A$ 与 $C$ 之间，则两小段之和等于整段："
            },
            {
              "type": "math",
              "tex": "AB + BC = AC"
            },
            {
              "type": "p",
              "en": "The midpoint of a segment is the point that divides it into two congruent pieces. A segment bisector is any line, ray, or segment that passes through the midpoint.",
              "zh": "线段的中点是把线段分成两条全等线段的点。经过中点的直线、射线或线段都叫做该线段的平分线。"
            },
            {
              "type": "h3",
              "en": "Measuring Angles",
              "zh": "角的度量"
            },
            {
              "type": "p",
              "en": "An angle is formed by two rays with a common endpoint, the vertex. Angles are measured in degrees from $0^\\circ$ to $180^\\circ$ and classified as acute (less than $90^\\circ$), right (exactly $90^\\circ$), obtuse (between $90^\\circ$ and $180^\\circ$), or straight ($180^\\circ$). The Angle Addition Postulate mirrors segment addition: if $D$ is in the interior of $\\angle ABC$, then $m\\angle ABD + m\\angle DBC = m\\angle ABC$. An angle bisector is a ray that divides an angle into two congruent angles.",
              "zh": "角由两条有公共端点（顶点）的射线组成。角用度来度量，范围从 $0^\\circ$ 到 $180^\\circ$，分类为：锐角（小于 $90^\\circ$）、直角（恰好 $90^\\circ$）、钝角（$90^\\circ$ 与 $180^\\circ$ 之间）、平角（$180^\\circ$）。角加法公理与线段加法类似：若 $D$ 在 $\\angle ABC$ 的内部，则 $m\\angle ABD + m\\angle DBC = m\\angle ABC$。角平分线是把一个角分成两个全等角的射线。"
            },
            {
              "type": "note",
              "en": "Notation matters: $AB$ (no bar) is a number, the length; $\\overline{AB}$ is the segment itself. Likewise $m\\angle A$ is a number of degrees, while $\\angle A$ is the angle. We write $=$ between numbers and $\\cong$ between figures.",
              "zh": "记号很重要：$AB$（不带横线）是一个数，即长度；$\\overline{AB}$ 是线段本身。同样，$m\\angle A$ 是度数，而 $\\angle A$ 是角本身。数与数之间用 $=$，图形与图形之间用 $\\cong$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Segment addition with algebra",
                "zh": "例题 1：结合代数的线段加法"
              },
              "problem": {
                "en": "$B$ is between $A$ and $C$, with $AB = 2x + 3$, $BC = 4x - 1$, and $AC = 26$. Find $x$ and $AB$.",
                "zh": "$B$ 在 $A$ 与 $C$ 之间，$AB = 2x + 3$，$BC = 4x - 1$，$AC = 26$。求 $x$ 和 $AB$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By the Segment Addition Postulate, $AB + BC = AC$:",
                  "zh": "由线段加法公理，$AB + BC = AC$："
                },
                {
                  "type": "math",
                  "tex": "(2x + 3) + (4x - 1) = 26 \\;\\Rightarrow\\; 6x + 2 = 26 \\;\\Rightarrow\\; x = 4"
                },
                {
                  "type": "p",
                  "en": "Then $AB = 2(4) + 3 = 11$. Check: $BC = 4(4) - 1 = 15$ and $11 + 15 = 26$. ✓",
                  "zh": "于是 $AB = 2(4) + 3 = 11$。检验：$BC = 4(4) - 1 = 15$，且 $11 + 15 = 26$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Angle bisector",
                "zh": "例题 2：角平分线"
              },
              "problem": {
                "en": "Ray $\\overrightarrow{BD}$ bisects $\\angle ABC$. If $m\\angle ABD = 3x + 6$ and $m\\angle DBC = 5x - 12$, find $m\\angle ABC$.",
                "zh": "射线 $\\overrightarrow{BD}$ 平分 $\\angle ABC$。若 $m\\angle ABD = 3x + 6$，$m\\angle DBC = 5x - 12$，求 $m\\angle ABC$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A bisector creates two congruent angles, so set the measures equal:",
                  "zh": "平分线产生两个全等的角，因此令度数相等："
                },
                {
                  "type": "math",
                  "tex": "3x + 6 = 5x - 12 \\;\\Rightarrow\\; 18 = 2x \\;\\Rightarrow\\; x = 9"
                },
                {
                  "type": "p",
                  "en": "Each half measures $3(9) + 6 = 33^\\circ$, so $m\\angle ABC = 2(33^\\circ) = 66^\\circ$.",
                  "zh": "每一半的度数为 $3(9) + 6 = 33^\\circ$，所以 $m\\angle ABC = 2(33^\\circ) = 66^\\circ$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "On a number line, $A$ has coordinate $-3$ and $B$ has coordinate $5$. Find $AB$. Give a whole number.",
                "zh": "在数轴上，$A$ 的坐标为 $-3$，$B$ 的坐标为 $5$。求 $AB$。请填一个整数。"
              },
              "answer": "8",
              "explanation": {
                "en": "Distance is the absolute value of the difference: $AB = |5 - (-3)| = |8| = 8$.",
                "zh": "距离等于坐标之差的绝对值：$AB = |5 - (-3)| = |8| = 8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An angle measuring $117^\\circ$ is classified as:",
                "zh": "一个 $117^\\circ$ 的角属于哪一类？"
              },
              "choices": [
                "Acute",
                "Right",
                "Obtuse",
                "Straight"
              ],
              "answer": 2,
              "explanation": {
                "en": "Obtuse angles measure between $90^\\circ$ and $180^\\circ$; since $90 < 117 < 180$, the angle is obtuse.",
                "zh": "钝角的度数介于 $90^\\circ$ 与 $180^\\circ$ 之间；因为 $90 < 117 < 180$，所以该角是钝角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$B$ is between $A$ and $C$, $AB = 14$, and $AC = 31$. Find $BC$. Give a whole number.",
                "zh": "$B$ 在 $A$ 与 $C$ 之间，$AB = 14$，$AC = 31$。求 $BC$。请填一个整数。"
              },
              "answer": "17",
              "explanation": {
                "en": "Segment addition gives $AB + BC = AC$, so $BC = 31 - 14 = 17$.",
                "zh": "由线段加法公理 $AB + BC = AC$，得 $BC = 31 - 14 = 17$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$M$ is the midpoint of $\\overline{PQ}$, and $PM = 3x - 4$, $MQ = 2x + 5$. What is $x$?",
                "zh": "$M$ 是 $\\overline{PQ}$ 的中点，$PM = 3x - 4$，$MQ = 2x + 5$。$x$ 等于多少？"
              },
              "choices": [
                "$9$",
                "$1$",
                "$\\frac{1}{5}$",
                "$23$"
              ],
              "answer": 0,
              "explanation": {
                "en": "A midpoint makes the two halves equal: $3x - 4 = 2x + 5$, so $x = 9$. (Each half is then $23$, but the question asks for $x$.)",
                "zh": "中点使两半相等：$3x - 4 = 2x + 5$，解得 $x = 9$。（此时每半长 $23$，但题目问的是 $x$。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$D$ is in the interior of $\\angle ABC$. If $m\\angle ABD = 28^\\circ$ and $m\\angle ABC = 75^\\circ$, find $m\\angle DBC$ in degrees. Give a whole number.",
                "zh": "$D$ 在 $\\angle ABC$ 内部。若 $m\\angle ABD = 28^\\circ$，$m\\angle ABC = 75^\\circ$，求 $m\\angle DBC$ 的度数。请填一个整数。"
              },
              "answer": "47",
              "explanation": {
                "en": "Angle addition: $m\\angle ABD + m\\angle DBC = m\\angle ABC$, so $m\\angle DBC = 75^\\circ - 28^\\circ = 47^\\circ$.",
                "zh": "由角加法公理：$m\\angle ABD + m\\angle DBC = m\\angle ABC$，故 $m\\angle DBC = 75^\\circ - 28^\\circ = 47^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\overrightarrow{QS}$ bisects $\\angle PQR$, $m\\angle PQS = 4x + 2$, and $m\\angle PQR = 10x - 8$. Find $m\\angle PQR$.",
                "zh": "$\\overrightarrow{QS}$ 平分 $\\angle PQR$，$m\\angle PQS = 4x + 2$，$m\\angle PQR = 10x - 8$。求 $m\\angle PQR$。"
              },
              "choices": [
                "$52^\\circ$",
                "$26^\\circ$",
                "$6^\\circ$",
                "$42^\\circ$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The half is half of the whole: $4x + 2 = \\frac{1}{2}(10x - 8) = 5x - 4$, so $x = 6$ and $m\\angle PQR = 10(6) - 8 = 52^\\circ$.",
                "zh": "半角等于整角的一半：$4x + 2 = \\frac{1}{2}(10x - 8) = 5x - 4$，解得 $x = 6$，故 $m\\angle PQR = 10(6) - 8 = 52^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$B$ is between $A$ and $C$ with $AB = x + 4$, $BC = 2x - 7$, and $AC = 24$. Find $BC$. Give a whole number.",
                "zh": "$B$ 在 $A$ 与 $C$ 之间，$AB = x + 4$，$BC = 2x - 7$，$AC = 24$。求 $BC$。请填一个整数。"
              },
              "answer": "11",
              "explanation": {
                "en": "$(x + 4) + (2x - 7) = 24$ gives $3x - 3 = 24$, so $x = 9$ and $BC = 2(9) - 7 = 11$. Check: $AB = 13$ and $13 + 11 = 24$.",
                "zh": "由 $(x + 4) + (2x - 7) = 24$ 得 $3x - 3 = 24$，所以 $x = 9$，$BC = 2(9) - 7 = 11$。检验：$AB = 13$，$13 + 11 = 24$。"
              }
            }
          ]
        },
        {
          "id": "distance-and-midpoint",
          "title": "The Distance and Midpoint Formulas",
          "titleZh": "距离公式与中点公式",
          "content": [
            {
              "type": "h2",
              "en": "From the Pythagorean Theorem to a Distance Formula",
              "zh": "从勾股定理到距离公式"
            },
            {
              "type": "p",
              "en": "Suppose you want the distance between two points in the coordinate plane, say $A(x_1, y_1)$ and $B(x_2, y_2)$. Drop a vertical line from the higher point and a horizontal line from the other point; they meet at a third point $C(x_2, y_1)$, forming a right triangle with the segment $\\overline{AB}$ as its hypotenuse. The horizontal leg has length $|x_2 - x_1|$ and the vertical leg has length $|y_2 - y_1|$, because distance along a horizontal or vertical line is just the absolute difference of coordinates.",
              "zh": "假设你想求坐标平面内两点之间的距离，比如 $A(x_1, y_1)$ 与 $B(x_2, y_2)$。从其中一点作竖直线，从另一点作水平线，两线相交于第三个点 $C(x_2, y_1)$，这样线段 $\\overline{AB}$ 就成为一个直角三角形的斜边。水平直角边的长度是 $|x_2 - x_1|$，竖直直角边的长度是 $|y_2 - y_1|$，因为沿水平线或竖直线的距离就是坐标之差的绝对值。"
            },
            {
              "type": "p",
              "en": "Now apply the Pythagorean theorem to this right triangle. The hypotenuse $AB$ satisfies",
              "zh": "现在对这个直角三角形应用勾股定理。斜边 $AB$ 满足"
            },
            {
              "type": "math",
              "tex": "AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2"
            },
            {
              "type": "p",
              "en": "Squaring removes the need for absolute values, since $(x_2-x_1)^2 = |x_2-x_1|^2$. Taking the positive square root gives the Distance Formula:",
              "zh": "平方运算使我们不再需要绝对值，因为 $(x_2-x_1)^2 = |x_2-x_1|^2$。取正的平方根即得距离公式："
            },
            {
              "type": "math",
              "tex": "AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"
            },
            {
              "type": "p",
              "en": "So the distance formula is not a new fact to memorize — it is the Pythagorean theorem wearing coordinates. Whenever you use it, you are silently building that right triangle.",
              "zh": "所以距离公式并不是一个需要死记的新知识——它就是穿上坐标外衣的勾股定理。每次使用它时，你实际上都在悄悄地构造那个直角三角形。"
            },
            {
              "type": "h3",
              "en": "The Midpoint Formula",
              "zh": "中点公式"
            },
            {
              "type": "p",
              "en": "The midpoint of $\\overline{AB}$ is the point exactly halfway between the endpoints, so each of its coordinates is the average of the corresponding endpoint coordinates:",
              "zh": "线段 $\\overline{AB}$ 的中点是恰好位于两端点正中间的点，因此它的每个坐标都是两端点相应坐标的平均值："
            },
            {
              "type": "math",
              "tex": "M = \\left( \\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2} \\right)"
            },
            {
              "type": "p",
              "en": "You can also run this formula in reverse. If you know the midpoint $M(m_x, m_y)$ and one endpoint $A(x_1, y_1)$, solve $\\frac{x_1 + x_2}{2} = m_x$ to get $x_2 = 2m_x - x_1$, and likewise $y_2 = 2m_y - y_1$. In words: double the midpoint, then subtract the known endpoint.",
              "zh": "这个公式也可以反过来用。若已知中点 $M(m_x, m_y)$ 和一个端点 $A(x_1, y_1)$，解方程 $\\frac{x_1 + x_2}{2} = m_x$ 得 $x_2 = 2m_x - x_1$，同理 $y_2 = 2m_y - y_1$。用一句话说：把中点坐标翻倍，再减去已知端点的坐标。"
            },
            {
              "type": "h3",
              "en": "Classifying Triangles and Finding Perimeters",
              "zh": "三角形的分类与多边形的周长"
            },
            {
              "type": "p",
              "en": "Given the coordinates of a triangle's vertices, compute all three side lengths with the distance formula, then compare. If no two sides are equal the triangle is scalene; if at least two sides are equal it is isosceles; if all three are equal it is equilateral. To find the perimeter of any polygon drawn on the coordinate plane, apply the distance formula to each side in turn and add the lengths.",
              "zh": "已知三角形三个顶点的坐标时，用距离公式算出三条边的长度，再进行比较。若任何两边都不相等，则为不等边三角形；若至少有两边相等，则为等腰三角形；若三边都相等，则为等边三角形。要求坐标平面上任意多边形的周长，就对每条边依次使用距离公式，再把各边长相加。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Keep side lengths exact: write $\\sqrt{50} = 5\\sqrt{2}$, not a rounded decimal, until the problem asks you to round.",
                  "zh": "保持边长为精确值：写成 $\\sqrt{50} = 5\\sqrt{2}$，而不是四舍五入的小数，除非题目要求取近似值。"
                },
                {
                  "en": "To compare lengths, it is often enough to compare the squared lengths $AB^2$, $BC^2$, $CA^2$ — no square roots needed.",
                  "zh": "比较长度时，往往只需比较长度的平方 $AB^2$、$BC^2$、$CA^2$——完全不需要开方。"
                },
                {
                  "en": "For a polygon, list the vertices in order around the figure so you measure the actual sides, not the diagonals.",
                  "zh": "对于多边形，要按图形周界的顺序列出顶点，这样量到的才是真正的边而不是对角线。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: subtracting coordinates in mismatched pairs, such as $(x_2 - y_1)^2$. Keep the $x$-values together and the $y$-values together, and remember that the order of subtraction does not matter because the differences are squared: $(3-7)^2 = (7-3)^2$.",
              "zh": "常见错误：把坐标配错对来相减，例如写成 $(x_2 - y_1)^2$。$x$ 坐标要与 $x$ 坐标相减，$y$ 坐标要与 $y$ 坐标相减；同时记住，因为差被平方了，相减的顺序无关紧要：$(3-7)^2 = (7-3)^2$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Classifying a triangle from coordinates",
                "zh": "例题 1：由坐标判断三角形的类型"
              },
              "problem": {
                "en": "Triangle $PQR$ has vertices $P(-2, 1)$, $Q(2, 4)$, and $R(5, 0)$. Classify the triangle as scalene, isosceles, or equilateral, and justify your answer with exact side lengths.",
                "zh": "三角形 $PQR$ 的顶点为 $P(-2, 1)$、$Q(2, 4)$、$R(5, 0)$。判断该三角形是不等边、等腰还是等边三角形，并用精确的边长说明理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute each side with the distance formula:",
                  "zh": "用距离公式计算每条边："
                },
                {
                  "type": "math",
                  "tex": "PQ = \\sqrt{(2-(-2))^2 + (4-1)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5"
                },
                {
                  "type": "math",
                  "tex": "QR = \\sqrt{(5-2)^2 + (0-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5"
                },
                {
                  "type": "math",
                  "tex": "PR = \\sqrt{(5-(-2))^2 + (0-1)^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}"
                },
                {
                  "type": "p",
                  "en": "Since $PQ = QR = 5$ but $PR = 5\\sqrt{2} \\neq 5$, exactly two sides are congruent, so triangle $PQR$ is isosceles (but not equilateral).",
                  "zh": "因为 $PQ = QR = 5$，而 $PR = 5\\sqrt{2} \\neq 5$，恰有两条边相等，所以三角形 $PQR$ 是等腰三角形（但不是等边三角形）。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Finding an endpoint from the midpoint",
                "zh": "例题 2：由中点求端点"
              },
              "problem": {
                "en": "The midpoint of $\\overline{AB}$ is $M(1, -2)$, and one endpoint is $A(5, 3)$. Find the coordinates of $B$, then verify your answer with the midpoint formula.",
                "zh": "线段 $\\overline{AB}$ 的中点是 $M(1, -2)$，其中一个端点是 $A(5, 3)$。求 $B$ 的坐标，并用中点公式验证你的答案。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use \"double the midpoint, subtract the known endpoint\" one coordinate at a time:",
                  "zh": "对每个坐标分别使用\"中点翻倍，减去已知端点\"："
                },
                {
                  "type": "math",
                  "tex": "x_B = 2(1) - 5 = -3, \\qquad y_B = 2(-2) - 3 = -7"
                },
                {
                  "type": "p",
                  "en": "So $B(-3, -7)$. Check: the midpoint of $A(5,3)$ and $B(-3,-7)$ is $\\left(\\frac{5+(-3)}{2}, \\frac{3+(-7)}{2}\\right) = (1, -2) = M$. ✓",
                  "zh": "所以 $B(-3, -7)$。验证：$A(5,3)$ 与 $B(-3,-7)$ 的中点是 $\\left(\\frac{5+(-3)}{2}, \\frac{3+(-7)}{2}\\right) = (1, -2) = M$。✓"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the distance between $A(1, 2)$ and $B(4, 6)$?",
                "zh": "点 $A(1, 2)$ 与 $B(4, 6)$ 之间的距离是多少？"
              },
              "choices": [
                "$\\sqrt{7}$",
                "$5$",
                "$7$",
                "$25$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. The answer $25$ is tempting if you forget to take the square root at the end, and $7$ comes from adding $3 + 4$ instead of squaring.",
                "zh": "$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$。若忘记最后开方就会得到 $25$；若直接把 $3 + 4$ 相加而不平方，就会错得 $7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the midpoint of the segment with endpoints $(-3, 5)$ and $(7, -1)$?",
                "zh": "端点为 $(-3, 5)$ 与 $(7, -1)$ 的线段的中点是什么？"
              },
              "choices": [
                "$(5, 3)$",
                "$(4, 2)$",
                "$(2, 2)$",
                "$(2, 3)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Average each coordinate: $\\left(\\frac{-3+7}{2}, \\frac{5+(-1)}{2}\\right) = (2, 2)$. The choice $(5, 3)$ comes from subtracting instead of adding before dividing — that gives half the differences, not the midpoint.",
                "zh": "对每个坐标取平均：$\\left(\\frac{-3+7}{2}, \\frac{5+(-1)}{2}\\right) = (2, 2)$。选项 $(5, 3)$ 来自先相减再除以 2 的错误做法——那算出的是坐标差的一半，不是中点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the distance between $(-2, -3)$ and $(4, 5)$. Give a whole number.",
                "zh": "求点 $(-2, -3)$ 与 $(4, 5)$ 之间的距离。请填一个整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "The legs of the hidden right triangle are $|4-(-2)| = 6$ and $|5-(-3)| = 8$, so the distance is $\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$.",
                "zh": "隐藏的直角三角形两条直角边分别为 $|4-(-2)| = 6$ 和 $|5-(-3)| = 8$，所以距离是 $\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Triangle $ABC$ has vertices $A(0, 0)$, $B(4, 0)$, and $C(2, 5)$. How should the triangle be classified?",
                "zh": "三角形 $ABC$ 的顶点为 $A(0, 0)$、$B(4, 0)$、$C(2, 5)$。该三角形应归为哪一类？"
              },
              "choices": [
                "Equilateral",
                "Scalene",
                "Isosceles but not equilateral",
                "Cannot be determined"
              ],
              "answer": 2,
              "explanation": {
                "en": "Compare squared lengths: $AB^2 = 16$, $AC^2 = 2^2 + 5^2 = 29$, and $BC^2 = (4-2)^2 + (0-5)^2 = 29$. Since $AC = BC = \\sqrt{29}$ but $AB = 4 \\neq \\sqrt{29}$, exactly two sides are congruent: isosceles. It is not equilateral because the third side differs — do not stop after finding one pair of equal sides without checking the third.",
                "zh": "比较边长的平方：$AB^2 = 16$，$AC^2 = 2^2 + 5^2 = 29$，$BC^2 = (4-2)^2 + (0-5)^2 = 29$。因为 $AC = BC = \\sqrt{29}$ 而 $AB = 4 \\neq \\sqrt{29}$，恰有两边相等，是等腰三角形。它不是等边三角形，因为第三边不同——找到一对相等的边后，一定要再检查第三边。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$M(2, -1)$ is the midpoint of $\\overline{PQ}$, and $P(-4, 3)$. Find the coordinates of $Q$. Give your answer in the form (x,y), for example (3,-2).",
                "zh": "$M(2, -1)$ 是线段 $\\overline{PQ}$ 的中点，且 $P(-4, 3)$。求 $Q$ 的坐标。请按 (x,y) 的形式作答，例如 (3,-2)。"
              },
              "answer": "(8,-5)",
              "accept": [
                "(8, -5)",
                "8,-5"
              ],
              "explanation": {
                "en": "Double the midpoint and subtract the known endpoint: $x_Q = 2(2) - (-4) = 8$ and $y_Q = 2(-1) - 3 = -5$, so $Q(8, -5)$. Check: the midpoint of $(-4,3)$ and $(8,-5)$ is $(2,-1)$. ✓",
                "zh": "把中点坐标翻倍再减去已知端点：$x_Q = 2(2) - (-4) = 8$，$y_Q = 2(-1) - 3 = -5$，所以 $Q(8, -5)$。验证：$(-4,3)$ 与 $(8,-5)$ 的中点是 $(2,-1)$。✓"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the exact distance between $(1, 1)$ and $(4, 7)$, in simplest radical form?",
                "zh": "点 $(1, 1)$ 与 $(4, 7)$ 之间的精确距离是多少（化为最简根式）？"
              },
              "choices": [
                "$\\sqrt{41}$",
                "$9$",
                "$5\\sqrt{3}$",
                "$3\\sqrt{5}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$d = \\sqrt{(4-1)^2 + (7-1)^2} = \\sqrt{9 + 36} = \\sqrt{45} = \\sqrt{9}\\cdot\\sqrt{5} = 3\\sqrt{5}$. The distractor $5\\sqrt{3}$ swaps which factor comes out of the radical — always pull out the perfect-square factor, here $9$.",
                "zh": "$d = \\sqrt{(4-1)^2 + (7-1)^2} = \\sqrt{9 + 36} = \\sqrt{45} = \\sqrt{9}\\cdot\\sqrt{5} = 3\\sqrt{5}$。干扰项 $5\\sqrt{3}$ 把根号内外的因数弄反了——一定要提出完全平方因数，这里是 $9$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Triangle $DEF$ has vertices $D(0, 0)$, $E(6, 0)$, and $F(6, 8)$. Find its perimeter in units. Give a whole number.",
                "zh": "三角形 $DEF$ 的顶点为 $D(0, 0)$、$E(6, 0)$、$F(6, 8)$。求它的周长（单位长度）。请填一个整数。"
              },
              "answer": "24",
              "accept": [
                "24.0"
              ],
              "explanation": {
                "en": "$DE$ is horizontal with length $6$, $EF$ is vertical with length $8$, and $DF = \\sqrt{6^2 + 8^2} = 10$. Perimeter $= 6 + 8 + 10 = 24$ units.",
                "zh": "$DE$ 是水平边，长为 $6$；$EF$ 是竖直边，长为 $8$；$DF = \\sqrt{6^2 + 8^2} = 10$。周长 $= 6 + 8 + 10 = 24$ 个单位长度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Quadrilateral $WXYZ$ has vertices in order $W(0, 0)$, $X(3, 4)$, $Y(8, 4)$, and $Z(5, 0)$. What is its perimeter, in units?",
                "zh": "四边形 $WXYZ$ 的顶点依次为 $W(0, 0)$、$X(3, 4)$、$Y(8, 4)$、$Z(5, 0)$。它的周长是多少个单位长度？"
              },
              "choices": [
                "$18$",
                "$20$",
                "$16 + 2\\sqrt{5}$",
                "$10 + 2\\sqrt{41}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Go around the quadrilateral in order: $WX = \\sqrt{3^2 + 4^2} = 5$, $XY = |8-3| = 5$, $YZ = \\sqrt{(5-8)^2 + (0-4)^2} = 5$, and $ZW = |5-0| = 5$. Perimeter $= 5+5+5+5 = 20$ units — all four sides are congruent, so $WXYZ$ is a rhombus. The distractor $10 + 2\\sqrt{41}$ comes from mistakenly using the diagonals $\\overline{WY}$ and $\\overline{XZ}$ instead of two of the sides.",
                "zh": "按顺序绕四边形一周：$WX = \\sqrt{3^2 + 4^2} = 5$，$XY = |8-3| = 5$，$YZ = \\sqrt{(5-8)^2 + (0-4)^2} = 5$，$ZW = |5-0| = 5$。周长 $= 5+5+5+5 = 20$ 个单位长度——四条边全等，所以 $WXYZ$ 是菱形。干扰项 $10 + 2\\sqrt{41}$ 来自误把对角线 $\\overline{WY}$、$\\overline{XZ}$ 当成边来计算。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "reasoning-and-proof",
      "title": "Unit 2: Reasoning and Proof",
      "titleZh": "第二单元：推理与证明",
      "lessons": [
        {
          "id": "inductive-deductive-conditionals",
          "title": "Inductive Reasoning, Deduction, and Conditionals",
          "titleZh": "归纳推理、演绎推理与条件语句",
          "content": [
            {
              "type": "h2",
              "en": "Two Ways of Reasoning",
              "zh": "两种推理方式"
            },
            {
              "type": "p",
              "en": "Inductive reasoning looks at specific examples and makes a conjecture, a general statement that seems true. If you notice $3 + 5 = 8$, $7 + 9 = 16$, and $11 + 1 = 12$, you might conjecture that the sum of two odd numbers is always even. Inductive reasoning suggests ideas but never proves them; a single counterexample, one case where the hypothesis is true but the conclusion is false, is enough to disprove a conjecture.",
              "zh": "归纳推理是通过观察具体例子提出猜想，即一个看似成立的一般性结论。如果你注意到 $3 + 5 = 8$、$7 + 9 = 16$、$11 + 1 = 12$，你可能会猜想两个奇数之和总是偶数。归纳推理只能提出想法，不能证明它们；只要有一个反例——条件成立而结论不成立的情形——就足以推翻一个猜想。"
            },
            {
              "type": "p",
              "en": "Deductive reasoning starts from accepted facts, definitions, postulates, and proven theorems, and uses logic to reach conclusions that must be true. All proofs in geometry are deductive.",
              "zh": "演绎推理从公认的事实、定义、公理和已证明的定理出发，通过逻辑推出必然成立的结论。几何中的一切证明都是演绎的。"
            },
            {
              "type": "h3",
              "en": "Conditional Statements",
              "zh": "条件语句"
            },
            {
              "type": "p",
              "en": "A conditional statement has the form \"If $p$, then $q$,\" written $p \\to q$. Here $p$ is the hypothesis and $q$ is the conclusion. From one conditional we can build three related statements:",
              "zh": "条件语句的形式是\"如果 $p$，那么 $q$\"，记作 $p \\to q$。其中 $p$ 是条件（假设），$q$ 是结论。由一个条件语句可以构造三个相关语句："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Converse: $q \\to p$ — swap hypothesis and conclusion.",
                  "zh": "逆命题：$q \\to p$ —— 交换条件与结论。"
                },
                {
                  "en": "Inverse: $\\sim p \\to \\sim q$ — negate both parts.",
                  "zh": "否命题：$\\sim p \\to \\sim q$ —— 将两部分都否定。"
                },
                {
                  "en": "Contrapositive: $\\sim q \\to \\sim p$ — swap and negate.",
                  "zh": "逆否命题：$\\sim q \\to \\sim p$ —— 既交换又否定。"
                }
              ]
            },
            {
              "type": "note",
              "en": "A conditional and its contrapositive are logically equivalent: they are always both true or both false. The converse and inverse are equivalent to each other, but NOT to the original statement. When a conditional and its converse are both true, we can combine them into a biconditional, \"$p$ if and only if $q$.\"",
              "zh": "条件语句与其逆否命题在逻辑上等价：它们总是同真同假。逆命题与否命题彼此等价，但与原命题不等价。当一个条件语句及其逆命题都成立时，可以合并为双条件语句：\"$p$ 当且仅当 $q$\"。"
            },
            {
              "type": "h3",
              "en": "Laws of Deduction",
              "zh": "演绎法则"
            },
            {
              "type": "p",
              "en": "The Law of Detachment says: if $p \\to q$ is true and $p$ is true, then $q$ is true. The Law of Syllogism chains conditionals: if $p \\to q$ and $q \\to r$ are true, then $p \\to r$ is true.",
              "zh": "分离律：若 $p \\to q$ 为真且 $p$ 为真，则 $q$ 为真。三段论法则把条件语句串联起来：若 $p \\to q$ 与 $q \\to r$ 都为真，则 $p \\to r$ 为真。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Finding a counterexample",
                "zh": "例题 1：寻找反例"
              },
              "problem": {
                "en": "Find a counterexample to the conjecture: \"If a number is divisible by 4, then it is divisible by 8.\"",
                "zh": "为下列猜想找一个反例：\"如果一个数能被 4 整除，那么它能被 8 整除。\""
              },
              "solution": [
                {
                  "type": "p",
                  "en": "We need a number where the hypothesis holds but the conclusion fails: divisible by 4 but not by 8. Take $12$: $12 \\div 4 = 3$, but $12 \\div 8 = 1.5$. So $12$ is a counterexample, and the conjecture is false.",
                  "zh": "我们需要一个使条件成立而结论不成立的数：能被 4 整除但不能被 8 整除。取 $12$：$12 \\div 4 = 3$，但 $12 \\div 8 = 1.5$。所以 $12$ 是反例，猜想不成立。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Writing related conditionals",
                "zh": "例题 2：写出相关命题"
              },
              "problem": {
                "en": "Write the converse and contrapositive of: \"If an angle is a right angle, then it measures $90^\\circ$.\" Decide whether each is true.",
                "zh": "写出命题\"如果一个角是直角，那么它的度数是 $90^\\circ$\"的逆命题和逆否命题，并判断真假。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Converse: \"If an angle measures $90^\\circ$, then it is a right angle.\" True, because that is exactly the definition of a right angle.",
                  "zh": "逆命题：\"如果一个角的度数是 $90^\\circ$，那么它是直角。\"为真，因为这正是直角的定义。"
                },
                {
                  "type": "p",
                  "en": "Contrapositive: \"If an angle does not measure $90^\\circ$, then it is not a right angle.\" True, since it is equivalent to the original true statement. Because the conditional and its converse are both true, we may write the biconditional: an angle is a right angle if and only if it measures $90^\\circ$.",
                  "zh": "逆否命题：\"如果一个角的度数不是 $90^\\circ$，那么它不是直角。\"为真，因为它与原命题等价。由于原命题与逆命题都为真，可写成双条件语句：一个角是直角当且仅当它的度数是 $90^\\circ$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Making a conjecture after observing a pattern in several examples is an instance of:",
                "zh": "通过观察若干例子中的规律提出猜想，属于哪种推理？"
              },
              "choices": [
                "Inductive reasoning",
                "Deductive reasoning",
                "The Law of Detachment",
                "A biconditional"
              ],
              "answer": 0,
              "explanation": {
                "en": "Reasoning from specific cases to a general statement is inductive. Deductive reasoning goes the other way, from general accepted facts to specific conclusions.",
                "zh": "从具体例子推出一般结论是归纳推理。演绎推理方向相反，是从公认的一般事实推出具体结论。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In \"If two angles are vertical, then they are congruent,\" the hypothesis is:",
                "zh": "在\"如果两个角是对顶角，那么它们全等\"中，条件（假设）是什么？"
              },
              "choices": [
                "Two angles are vertical",
                "They are congruent",
                "Two angles exist",
                "Angles are equal"
              ],
              "answer": 0,
              "explanation": {
                "en": "The hypothesis is the \"if\" part of a conditional. Here the \"if\" clause is \"two angles are vertical\"; \"they are congruent\" is the conclusion.",
                "zh": "条件是条件语句中\"如果\"后面的部分。这里\"如果\"引出的是\"两个角是对顶角\"；\"它们全等\"是结论。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the converse of \"If it is raining, then the ground is wet\"?",
                "zh": "\"如果正在下雨，那么地面是湿的\"的逆命题是什么？"
              },
              "choices": [
                "If the ground is wet, then it is raining",
                "If it is not raining, then the ground is not wet",
                "If the ground is not wet, then it is not raining",
                "The ground is wet if it is raining"
              ],
              "answer": 0,
              "explanation": {
                "en": "The converse swaps the hypothesis and conclusion: $q \\to p$. Negating both parts gives the inverse; swapping and negating gives the contrapositive.",
                "zh": "逆命题交换条件与结论：$q \\to p$。将两部分都否定得到否命题；既交换又否定得到逆否命题。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement is always logically equivalent to $p \\to q$?",
                "zh": "下列哪个命题与 $p \\to q$ 永远逻辑等价？"
              },
              "choices": [
                "$\\sim q \\to \\sim p$",
                "$q \\to p$",
                "$\\sim p \\to \\sim q$",
                "$p \\to \\sim q$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The contrapositive $\\sim q \\to \\sim p$ is equivalent to the original conditional. The converse and inverse are only equivalent to each other.",
                "zh": "逆否命题 $\\sim q \\to \\sim p$ 与原条件语句等价。逆命题与否命题只彼此等价，不与原命题等价。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Give a counterexample to: \"If $x^2 = 25$, then $x = 5$.\" Enter a number.",
                "zh": "为命题\"若 $x^2 = 25$，则 $x = 5$\"给出一个反例。请填一个数。"
              },
              "answer": "-5",
              "accept": [
                "−5",
                "x=-5"
              ],
              "explanation": {
                "en": "A counterexample needs $x^2 = 25$ true but $x = 5$ false. $x = -5$ works because $(-5)^2 = 25$ yet $-5 \\ne 5$.",
                "zh": "反例需使 $x^2 = 25$ 成立而 $x = 5$ 不成立。$x = -5$ 满足：$(-5)^2 = 25$，但 $-5 \\ne 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Given: \"If a figure is a square, then it is a rectangle\" and \"If a figure is a rectangle, then it has four right angles.\" By the Law of Syllogism, which conclusion follows?",
                "zh": "已知：\"如果一个图形是正方形，那么它是矩形\"和\"如果一个图形是矩形，那么它有四个直角\"。根据三段论法则可得出什么结论？"
              },
              "choices": [
                "If a figure is a square, then it has four right angles",
                "If a figure has four right angles, then it is a square",
                "If a figure is a rectangle, then it is a square",
                "All rectangles are squares"
              ],
              "answer": 0,
              "explanation": {
                "en": "Syllogism chains $p \\to q$ ($\\text{square} \\to \\text{rectangle}$) with $q \\to r$ ($\\text{rectangle} \\to \\text{four right angles}$) to get $p \\to r$. The other options reverse an implication, which is not valid.",
                "zh": "三段论把 $p \\to q$（正方形 $\\to$ 矩形）与 $q \\to r$（矩形 $\\to$ 四个直角）串联得到 $p \\to r$。其他选项颠倒了推理方向，不成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "\"If $M$ is the midpoint of $\\overline{AB}$, then $AM = MB$\" is true, and we know $M$ is the midpoint of $\\overline{AB}$. Concluding $AM = MB$ uses which law?",
                "zh": "\"若 $M$ 是 $\\overline{AB}$ 的中点，则 $AM = MB$\"为真，且已知 $M$ 是 $\\overline{AB}$ 的中点。由此得出 $AM = MB$ 用的是哪条法则？"
              },
              "choices": [
                "Law of Detachment",
                "Law of Syllogism",
                "Inductive reasoning",
                "Counterexample"
              ],
              "answer": 0,
              "explanation": {
                "en": "The Law of Detachment applies when a true conditional has a true hypothesis: from $p \\to q$ and $p$, conclude $q$. No chaining of two conditionals occurred, so it is not syllogism.",
                "zh": "当一个真条件语句的条件成立时用分离律：由 $p \\to q$ 和 $p$ 推出 $q$。这里没有把两个条件语句串联，所以不是三段论。"
              }
            }
          ]
        },
        {
          "id": "two-column-proofs",
          "title": "Algebraic and Two-Column Proofs",
          "titleZh": "代数证明与两栏证明",
          "content": [
            {
              "type": "h2",
              "en": "From Solving to Proving",
              "zh": "从解题到证明"
            },
            {
              "type": "p",
              "en": "A proof is a logical argument in which every statement is justified by a definition, postulate, property, or previously proven theorem. You have been using the properties of equality for years; in a proof we simply name them. The key algebraic properties are Addition, Subtraction, Multiplication, and Division Properties of Equality, the Distributive Property, and Substitution. Three special ones describe equality itself: the Reflexive Property ($a = a$), the Symmetric Property (if $a = b$ then $b = a$), and the Transitive Property (if $a = b$ and $b = c$ then $a = c$).",
              "zh": "证明是一种逻辑论证，其中每一步陈述都要由定义、公理、性质或已证明的定理来支持。你多年来一直在使用等式的性质；在证明中我们只是把它们的名字写出来。主要的代数性质有：等式的加法、减法、乘法、除法性质，分配律，以及代入法。还有三条描述相等关系本身的性质：自反性（$a = a$）、对称性（若 $a = b$ 则 $b = a$）、传递性（若 $a = b$ 且 $b = c$ 则 $a = c$）。"
            },
            {
              "type": "h3",
              "en": "The Two-Column Format",
              "zh": "两栏格式"
            },
            {
              "type": "p",
              "en": "A two-column proof lists numbered statements on the left and a reason for each statement on the right. The first statement is usually the given information (reason: \"Given\"), and the last statement is exactly what you were asked to prove. Congruence of segments and angles is also reflexive, symmetric, and transitive, which lets us move between congruence statements the same way we move between equations.",
              "zh": "两栏证明在左栏按编号列出陈述，在右栏给出每条陈述的理由。第一条陈述通常是已知条件（理由写\"已知\"），最后一条陈述正是要证明的结论。线段和角的全等关系同样具有自反性、对称性和传递性，这使我们能像处理等式一样处理全等式。"
            },
            {
              "type": "note",
              "en": "Every statement in a proof must have a reason, and the reason must justify that exact statement. \"It looks true in the diagram\" is never a valid reason: diagrams show betweenness and general position, but never measurements you were not given.",
              "zh": "证明中的每一条陈述都必须有理由，且理由必须恰好支持这条陈述。\"从图上看是对的\"从来都不是有效的理由：图形只能表明点的位置关系，不能提供未给出的度量信息。"
            },
            {
              "type": "h3",
              "en": "Two Theorems Worth Memorizing",
              "zh": "值得记住的两个定理"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Vertical Angles Theorem: vertical angles (opposite angles formed by two intersecting lines) are congruent.",
                  "zh": "对顶角定理：两条直线相交所成的对顶角全等。"
                },
                {
                  "en": "Congruent Supplements Theorem: angles supplementary to the same angle are congruent. (Supplementary means the measures add to $180^\\circ$; complementary means they add to $90^\\circ$.)",
                  "zh": "同角的补角相等定理：与同一个角互补的角彼此全等。（互补指度数之和为 $180^\\circ$；互余指度数之和为 $90^\\circ$。）"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: An algebraic proof",
                "zh": "例题 1：代数证明"
              },
              "problem": {
                "en": "Prove: if $3(x - 2) = 15$, then $x = 7$. Justify each step.",
                "zh": "证明：若 $3(x - 2) = 15$，则 $x = 7$。写出每一步的理由。"
              },
              "solution": [
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "1. $3(x - 2) = 15$ — Given.",
                      "zh": "1. $3(x - 2) = 15$ —— 已知。"
                    },
                    {
                      "en": "2. $3x - 6 = 15$ — Distributive Property.",
                      "zh": "2. $3x - 6 = 15$ —— 分配律。"
                    },
                    {
                      "en": "3. $3x = 21$ — Addition Property of Equality (add 6 to both sides).",
                      "zh": "3. $3x = 21$ —— 等式的加法性质（两边同加 6）。"
                    },
                    {
                      "en": "4. $x = 7$ — Division Property of Equality (divide both sides by 3).",
                      "zh": "4. $x = 7$ —— 等式的除法性质（两边同除以 3）。"
                    }
                  ]
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A two-column geometric proof",
                "zh": "例题 2：几何两栏证明"
              },
              "problem": {
                "en": "Given: $\\angle 1$ and $\\angle 2$ are vertical angles, and $m\\angle 1 = 40^\\circ$. Prove: $m\\angle 2 = 40^\\circ$.",
                "zh": "已知：$\\angle 1$ 与 $\\angle 2$ 是对顶角，且 $m\\angle 1 = 40^\\circ$。求证：$m\\angle 2 = 40^\\circ$。"
              },
              "solution": [
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "1. $\\angle 1$ and $\\angle 2$ are vertical angles; $m\\angle 1 = 40^\\circ$ — Given.",
                      "zh": "1. $\\angle 1$ 与 $\\angle 2$ 是对顶角；$m\\angle 1 = 40^\\circ$ —— 已知。"
                    },
                    {
                      "en": "2. $\\angle 1 \\cong \\angle 2$ — Vertical Angles Theorem.",
                      "zh": "2. $\\angle 1 \\cong \\angle 2$ —— 对顶角定理。"
                    },
                    {
                      "en": "3. $m\\angle 1 = m\\angle 2$ — Definition of congruent angles.",
                      "zh": "3. $m\\angle 1 = m\\angle 2$ —— 全等角的定义。"
                    },
                    {
                      "en": "4. $m\\angle 2 = 40^\\circ$ — Substitution Property of Equality.",
                      "zh": "4. $m\\angle 2 = 40^\\circ$ —— 等式的代入性质。"
                    }
                  ]
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which property justifies the statement $\\overline{AB} \\cong \\overline{AB}$?",
                "zh": "哪条性质可以说明 $\\overline{AB} \\cong \\overline{AB}$？"
              },
              "choices": [
                "Reflexive Property",
                "Symmetric Property",
                "Transitive Property",
                "Substitution Property"
              ],
              "answer": 0,
              "explanation": {
                "en": "The Reflexive Property says any quantity or figure equals (or is congruent to) itself. It appears constantly in proofs with shared sides.",
                "zh": "自反性指任何量或图形与自身相等（或全等）。在含公共边的证明中经常用到。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $m\\angle A = m\\angle B$ and $m\\angle B = m\\angle C$, then $m\\angle A = m\\angle C$ by the:",
                "zh": "若 $m\\angle A = m\\angle B$ 且 $m\\angle B = m\\angle C$，则 $m\\angle A = m\\angle C$，依据是："
              },
              "choices": [
                "Transitive Property",
                "Reflexive Property",
                "Distributive Property",
                "Symmetric Property"
              ],
              "answer": 0,
              "explanation": {
                "en": "Transitivity chains two equalities through a common middle quantity ($m\\angle B$) to link the outer two.",
                "zh": "传递性通过共同的中间量（$m\\angle B$）把两个等式串联起来，得到两端量相等。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which reason justifies going from $2x + 10 = 30$ to $2x = 20$?",
                "zh": "从 $2x + 10 = 30$ 推出 $2x = 20$ 的理由是什么？"
              },
              "choices": [
                "Subtraction Property of Equality",
                "Division Property of Equality",
                "Distributive Property",
                "Reflexive Property"
              ],
              "answer": 0,
              "explanation": {
                "en": "Subtracting 10 from both sides preserves equality; that is the Subtraction Property of Equality. Division would be used next, going from $2x = 20$ to $x = 10$.",
                "zh": "两边同减 10 保持等式成立，这是等式的减法性质。下一步从 $2x = 20$ 到 $x = 10$ 才用除法性质。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two vertical angles have measures $5x - 10$ and $3x + 20$ (in degrees). Find $x$. Give a whole number.",
                "zh": "两个对顶角的度数分别为 $5x - 10$ 和 $3x + 20$（单位：度）。求 $x$。请填一个整数。"
              },
              "answer": "15",
              "explanation": {
                "en": "Vertical angles are congruent, so $5x - 10 = 3x + 20$, giving $2x = 30$ and $x = 15$. Each angle then measures $65^\\circ$.",
                "zh": "对顶角全等，故 $5x - 10 = 3x + 20$，得 $2x = 30$，$x = 15$。此时每个角为 $65^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An angle measures $54^\\circ$. What is the measure of its supplement, in degrees? Give a whole number.",
                "zh": "一个角为 $54^\\circ$，它的补角是多少度？请填一个整数。"
              },
              "answer": "126",
              "explanation": {
                "en": "Supplementary angles sum to $180^\\circ$, so the supplement is $180 - 54 = 126^\\circ$. (Its complement would be $90 - 54 = 36^\\circ$.)",
                "zh": "互补的两角之和为 $180^\\circ$，所以补角为 $180 - 54 = 126^\\circ$。（它的余角则是 $90 - 54 = 36^\\circ$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a two-column proof, the reason for the very first statement is usually:",
                "zh": "在两栏证明中，第一条陈述的理由通常是什么？"
              },
              "choices": [
                "Given",
                "Definition of congruence",
                "Substitution",
                "The Prove statement"
              ],
              "answer": 0,
              "explanation": {
                "en": "Proofs begin with the hypothesis, the information supplied in the problem, justified by the reason \"Given.\" The statement to prove appears last, never as a reason.",
                "zh": "证明从题目提供的已知条件开始，理由写\"已知\"。要证的结论出现在最后，绝不能作为理由。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\angle 1$ and $\\angle 2$ are supplementary, and $\\angle 3$ and $\\angle 2$ are supplementary. Which conclusion follows, and why?",
                "zh": "$\\angle 1$ 与 $\\angle 2$ 互补，$\\angle 3$ 与 $\\angle 2$ 也互补。可以得出什么结论？依据是什么？"
              },
              "choices": [
                "$\\angle 1 \\cong \\angle 3$ by the Congruent Supplements Theorem",
                "$\\angle 1 \\cong \\angle 2$ by the Vertical Angles Theorem",
                "$m\\angle 1 + m\\angle 3 = 180^\\circ$ by definition",
                "$\\angle 2 \\cong \\angle 3$ by the Reflexive Property"
              ],
              "answer": 0,
              "explanation": {
                "en": "Both $\\angle 1$ and $\\angle 3$ are supplementary to the same angle $\\angle 2$: $m\\angle 1 = 180^\\circ - m\\angle 2 = m\\angle 3$. That is exactly the Congruent Supplements Theorem.",
                "zh": "$\\angle 1$ 与 $\\angle 3$ 都与同一个角 $\\angle 2$ 互补：$m\\angle 1 = 180^\\circ - m\\angle 2 = m\\angle 3$。这正是\"同角的补角相等\"定理。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "parallel-perpendicular-lines",
      "title": "Unit 3: Parallel and Perpendicular Lines",
      "titleZh": "第三单元：平行线与垂线",
      "lessons": [
        {
          "id": "transversals-angle-pairs",
          "title": "Transversals and Angle Pairs",
          "titleZh": "截线与角的关系",
          "content": [
            {
              "type": "h2",
              "en": "Lines Cut by a Transversal",
              "zh": "被截线所截的直线"
            },
            {
              "type": "p",
              "en": "Parallel lines are coplanar lines that never intersect; we write $\\ell \\parallel m$. A transversal is a line that intersects two or more lines at distinct points. When a transversal crosses two lines it creates eight angles, and the important angle pairs get names based on position: corresponding angles occupy the same corner at each intersection; alternate interior angles lie between the lines on opposite sides of the transversal; alternate exterior angles lie outside the lines on opposite sides; consecutive (same-side) interior angles lie between the lines on the same side of the transversal.",
              "zh": "平行线是同一平面内永不相交的直线，记作 $\\ell \\parallel m$。截线是与两条或多条直线交于不同点的直线。截线与两条直线相交会产生八个角，重要的角对按位置命名：同位角在两个交点处占据相同的位置；内错角位于两直线之间、截线两侧；外错角位于两直线之外、截线两侧；同旁内角位于两直线之间、截线同侧。"
            },
            {
              "type": "h3",
              "en": "What Parallel Lines Guarantee",
              "zh": "平行线带来的结论"
            },
            {
              "type": "p",
              "en": "The Corresponding Angles Postulate states: if two parallel lines are cut by a transversal, then corresponding angles are congruent. From it we prove three theorems:",
              "zh": "同位角公理：如果两条平行线被截线所截，那么同位角全等。由它可以证明三个定理："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Alternate interior angles are congruent.",
                  "zh": "内错角全等。"
                },
                {
                  "en": "Alternate exterior angles are congruent.",
                  "zh": "外错角全等。"
                },
                {
                  "en": "Consecutive interior angles are supplementary (sum to $180^\\circ$).",
                  "zh": "同旁内角互补（和为 $180^\\circ$）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "These angle relationships hold ONLY when the two lines are parallel. If the lines are not parallel, a transversal still forms the same named pairs, but nothing forces them to be congruent or supplementary.",
              "zh": "这些角的关系只有在两条直线平行时才成立。如果直线不平行，截线仍会形成这些同名的角对，但它们既不一定全等也不一定互补。"
            },
            {
              "type": "h3",
              "en": "A Strategy for Angle Chasing",
              "zh": "追角的策略"
            },
            {
              "type": "p",
              "en": "Once one angle at an intersection is known, every angle at that intersection follows from vertical angles and linear pairs, and every angle at the other intersection follows from the parallel-line theorems. Work one relationship at a time and label each angle as you find it.",
              "zh": "一旦知道某个交点处的一个角，该交点处的其余角就可由对顶角和邻补角求出，另一个交点处的角则可由平行线定理求出。每次只用一个关系，求出一个角就标注一个角。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Finding all eight angles",
                "zh": "例题 1：求出全部八个角"
              },
              "problem": {
                "en": "Lines $\\ell \\parallel m$ are cut by transversal $t$. One of the angles formed at line $\\ell$ measures $65^\\circ$. What are the measures of the other seven angles?",
                "zh": "直线 $\\ell \\parallel m$ 被截线 $t$ 所截。在直线 $\\ell$ 处形成的一个角为 $65^\\circ$。其余七个角各是多少度？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At line $\\ell$: the vertical angle of the $65^\\circ$ angle is also $65^\\circ$, and the two angles forming linear pairs with it are $180^\\circ - 65^\\circ = 115^\\circ$ each.",
                  "zh": "在直线 $\\ell$ 处：$65^\\circ$ 角的对顶角也是 $65^\\circ$，与它构成邻补角的两个角各为 $180^\\circ - 65^\\circ = 115^\\circ$。"
                },
                {
                  "type": "p",
                  "en": "At line $m$: corresponding angles are congruent, so the pattern repeats exactly, two $65^\\circ$ angles and two $115^\\circ$ angles. Every angle in the figure is either $65^\\circ$ or $115^\\circ$.",
                  "zh": "在直线 $m$ 处：同位角全等，所以角的分布完全重复——两个 $65^\\circ$ 角和两个 $115^\\circ$ 角。图中每个角不是 $65^\\circ$ 就是 $115^\\circ$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Solving with consecutive interior angles",
                "zh": "例题 2：利用同旁内角求解"
              },
              "problem": {
                "en": "$\\ell \\parallel m$ with transversal $t$. Two consecutive interior angles measure $(3x + 15)^\\circ$ and $(2x + 5)^\\circ$. Find $x$ and both angle measures.",
                "zh": "$\\ell \\parallel m$，截线为 $t$。一对同旁内角的度数为 $(3x + 15)^\\circ$ 和 $(2x + 5)^\\circ$。求 $x$ 及两个角的度数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Consecutive interior angles between parallel lines are supplementary:",
                  "zh": "平行线间的同旁内角互补："
                },
                {
                  "type": "math",
                  "tex": "(3x + 15) + (2x + 5) = 180 \\;\\Rightarrow\\; 5x + 20 = 180 \\;\\Rightarrow\\; x = 32"
                },
                {
                  "type": "p",
                  "en": "The angles are $3(32) + 15 = 111^\\circ$ and $2(32) + 5 = 69^\\circ$. Check: $111 + 69 = 180$. ✓",
                  "zh": "两角分别为 $3(32) + 15 = 111^\\circ$ 和 $2(32) + 5 = 69^\\circ$。检验：$111 + 69 = 180$。✓"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Angles that lie between two lines on opposite sides of the transversal are called:",
                "zh": "位于两条直线之间、截线两侧的角叫做："
              },
              "choices": [
                "Alternate interior angles",
                "Corresponding angles",
                "Alternate exterior angles",
                "Consecutive interior angles"
              ],
              "answer": 0,
              "explanation": {
                "en": "\"Interior\" means between the two lines; \"alternate\" means opposite sides of the transversal. Same-side interior angles would be consecutive interior angles.",
                "zh": "\"内\"指在两直线之间，\"错\"指在截线的两侧。若在截线同侧则是同旁内角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If two parallel lines are cut by a transversal, corresponding angles are:",
                "zh": "两条平行线被截线所截，同位角之间的关系是："
              },
              "choices": [
                "Congruent",
                "Supplementary",
                "Complementary",
                "Not related"
              ],
              "answer": 0,
              "explanation": {
                "en": "This is the Corresponding Angles Postulate, the starting point from which the other parallel-line angle theorems are proved.",
                "zh": "这就是同位角公理，其他平行线角定理都是由它证明的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$\\ell \\parallel m$. A pair of alternate interior angles measures $72^\\circ$ and $x^\\circ$. Find $x$. Give a whole number.",
                "zh": "$\\ell \\parallel m$。一对内错角分别为 $72^\\circ$ 和 $x^\\circ$。求 $x$。请填一个整数。"
              },
              "answer": "72",
              "explanation": {
                "en": "Alternate interior angles between parallel lines are congruent, so $x = 72$.",
                "zh": "平行线间的内错角全等，所以 $x = 72$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$\\ell \\parallel m$. A pair of consecutive interior angles measures $114^\\circ$ and $x^\\circ$. Find $x$. Give a whole number.",
                "zh": "$\\ell \\parallel m$。一对同旁内角分别为 $114^\\circ$ 和 $x^\\circ$。求 $x$。请填一个整数。"
              },
              "answer": "66",
              "explanation": {
                "en": "Consecutive interior angles between parallel lines are supplementary, so $x = 180 - 114 = 66$.",
                "zh": "平行线间的同旁内角互补，所以 $x = 180 - 114 = 66$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\ell \\parallel m$ with a transversal. Corresponding angles measure $(4x - 8)^\\circ$ and $(3x + 12)^\\circ$. What is $x$?",
                "zh": "$\\ell \\parallel m$，有一条截线。同位角分别为 $(4x - 8)^\\circ$ 和 $(3x + 12)^\\circ$。$x$ 等于多少？"
              },
              "choices": [
                "$20$",
                "$4$",
                "$28$",
                "$16$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Corresponding angles are congruent: $4x - 8 = 3x + 12$, so $x = 20$. Each angle measures $72^\\circ$.",
                "zh": "同位角全等：$4x - 8 = 3x + 12$，解得 $x = 20$。每个角为 $72^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two non-parallel lines are cut by a transversal. Which statement is true about the alternate interior angles formed?",
                "zh": "两条不平行的直线被一条截线所截，关于所形成的内错角，下列哪种说法正确？"
              },
              "choices": [
                "They are not necessarily congruent",
                "They are always congruent",
                "They are always supplementary",
                "They are always complementary"
              ],
              "answer": 0,
              "explanation": {
                "en": "Congruence of alternate interior angles is a consequence of parallelism. Without parallel lines the angles still exist and have names, but no relationship is guaranteed.",
                "zh": "内错角全等是平行的结果。直线不平行时这些角依然存在并有名称，但不保证任何数量关系。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$\\ell \\parallel m$. One consecutive interior angle is twice the other. Find the measure of the smaller angle in degrees. Give a whole number.",
                "zh": "$\\ell \\parallel m$。一对同旁内角中，一个角是另一个角的两倍。求较小角的度数。请填一个整数。"
              },
              "answer": "60",
              "explanation": {
                "en": "Let the smaller angle be $x$; the larger is $2x$. Supplementary: $x + 2x = 180$, so $3x = 180$ and $x = 60$. The angles are $60^\\circ$ and $120^\\circ$.",
                "zh": "设较小角为 $x$，较大角为 $2x$。由互补得 $x + 2x = 180$，即 $3x = 180$，$x = 60$。两角为 $60^\\circ$ 和 $120^\\circ$。"
              }
            }
          ]
        },
        {
          "id": "proving-lines-parallel",
          "title": "Proving Lines Parallel and Perpendicularity",
          "titleZh": "证明直线平行与垂直关系",
          "content": [
            {
              "type": "h2",
              "en": "Using Converses to Prove Parallelism",
              "zh": "用逆定理证明平行"
            },
            {
              "type": "p",
              "en": "Last lesson we started with parallel lines and concluded facts about angles. To prove lines are parallel, we run the logic in reverse using the converses: if two lines are cut by a transversal so that corresponding angles are congruent, then the lines are parallel. The same converse pattern works for alternate interior angles (congruent $\\Rightarrow$ parallel), alternate exterior angles (congruent $\\Rightarrow$ parallel), and consecutive interior angles (supplementary $\\Rightarrow$ parallel).",
              "zh": "上一课我们由平行推出角的结论。要证明直线平行，则要用逆定理反向推理：如果两条直线被截线所截，使得同位角全等，那么这两条直线平行。同样的逆定理模式也适用于内错角（全等 $\\Rightarrow$ 平行）、外错角（全等 $\\Rightarrow$ 平行）和同旁内角（互补 $\\Rightarrow$ 平行）。"
            },
            {
              "type": "note",
              "en": "Direction matters. \"Lines parallel $\\Rightarrow$ angles congruent\" and \"angles congruent $\\Rightarrow$ lines parallel\" are converses of each other, and in this case both happen to be true, which is why we may use whichever direction the problem requires. Always check which information you are given and which you must conclude.",
              "zh": "方向很重要。\"直线平行 $\\Rightarrow$ 角全等\"与\"角全等 $\\Rightarrow$ 直线平行\"互为逆命题，本例中恰好都成立，因此可按题目需要选用方向。一定要弄清已知的是什么、要推出的是什么。"
            },
            {
              "type": "h3",
              "en": "Perpendicular Lines and Useful Theorems",
              "zh": "垂线与常用定理"
            },
            {
              "type": "p",
              "en": "Perpendicular lines intersect to form right angles, written $\\ell \\perp m$. Two theorems connect the ideas of this unit: (1) if two lines are parallel to the same line, they are parallel to each other; (2) in a plane, if two lines are both perpendicular to the same line, they are parallel to each other. Also, in a plane, if a line is perpendicular to one of two parallel lines, it is perpendicular to the other.",
              "zh": "垂直的两条直线相交成直角，记作 $\\ell \\perp m$。本单元有两个联结性的定理：（1）平行于同一条直线的两条直线互相平行；（2）在同一平面内，垂直于同一条直线的两条直线互相平行。此外，在同一平面内，若一条直线垂直于两条平行线之一，则它也垂直于另一条。"
            },
            {
              "type": "h3",
              "en": "Slopes of Parallel and Perpendicular Lines",
              "zh": "平行线与垂线的斜率"
            },
            {
              "type": "p",
              "en": "In the coordinate plane, slope makes these ideas computational. Nonvertical lines are parallel if and only if they have the same slope, and perpendicular if and only if their slopes are negative reciprocals, i.e. the product of the slopes is $-1$.",
              "zh": "在坐标平面中，斜率把这些概念变成了计算。两条非竖直的直线平行当且仅当斜率相等；垂直当且仅当斜率互为负倒数，即两斜率之积为 $-1$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Choosing the value that makes lines parallel",
                "zh": "例题 1：求使直线平行的值"
              },
              "problem": {
                "en": "Lines $a$ and $b$ are cut by a transversal. A pair of alternate interior angles measures $(5x - 20)^\\circ$ and $(3x + 16)^\\circ$. For what value of $x$ is $a \\parallel b$?",
                "zh": "直线 $a$、$b$ 被一条截线所截。一对内错角为 $(5x - 20)^\\circ$ 和 $(3x + 16)^\\circ$。当 $x$ 取何值时 $a \\parallel b$？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By the Converse of the Alternate Interior Angles Theorem, the lines are parallel exactly when these angles are congruent:",
                  "zh": "由内错角定理的逆定理，恰当这对角全等时两直线平行："
                },
                {
                  "type": "math",
                  "tex": "5x - 20 = 3x + 16 \\;\\Rightarrow\\; 2x = 36 \\;\\Rightarrow\\; x = 18"
                },
                {
                  "type": "p",
                  "en": "Each angle then measures $70^\\circ$, and $a \\parallel b$.",
                  "zh": "此时每个角为 $70^\\circ$，且 $a \\parallel b$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Slopes and perpendicularity",
                "zh": "例题 2：斜率与垂直"
              },
              "problem": {
                "en": "Line $p$ passes through $(1, 2)$ and $(4, 8)$. Line $q$ has slope $-\\frac{1}{2}$. Are $p$ and $q$ parallel, perpendicular, or neither?",
                "zh": "直线 $p$ 经过 $(1, 2)$ 和 $(4, 8)$。直线 $q$ 的斜率为 $-\\frac{1}{2}$。$p$ 与 $q$ 平行、垂直还是都不是？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute the slope of $p$:",
                  "zh": "先计算 $p$ 的斜率："
                },
                {
                  "type": "math",
                  "tex": "m_p = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2"
                },
                {
                  "type": "p",
                  "en": "The slopes are $2$ and $-\\frac{1}{2}$. They are not equal, so the lines are not parallel. Their product is $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$, so the lines are perpendicular.",
                  "zh": "两条直线的斜率分别为 $2$ 和 $-\\frac{1}{2}$。斜率不相等，所以不平行。斜率之积为 $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$，所以两直线垂直。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A transversal cuts lines $a$ and $b$ so that a pair of corresponding angles both measure $81^\\circ$. What can you conclude?",
                "zh": "一条截线截直线 $a$、$b$，使一对同位角都等于 $81^\\circ$。可以得出什么结论？"
              },
              "choices": [
                "$a \\parallel b$",
                "$a \\perp b$",
                "$a$ and $b$ intersect at $81^\\circ$",
                "Nothing can be concluded"
              ],
              "answer": 0,
              "explanation": {
                "en": "Congruent corresponding angles is exactly the hypothesis of the Converse of the Corresponding Angles Postulate, which concludes the lines are parallel.",
                "zh": "同位角全等正是同位角公理逆命题的条件，由此得出两直线平行。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A pair of consecutive interior angles measures $95^\\circ$ and $85^\\circ$. Are the two lines parallel?",
                "zh": "一对同旁内角分别为 $95^\\circ$ 和 $85^\\circ$。这两条直线平行吗？"
              },
              "choices": [
                "Yes, because the angles are supplementary",
                "Yes, because the angles are congruent",
                "No, because the angles are not congruent",
                "No, because the angles are not complementary"
              ],
              "answer": 0,
              "explanation": {
                "en": "For consecutive (same-side) interior angles, the parallel condition is supplementary, not congruent: $95 + 85 = 180$, so the lines are parallel.",
                "zh": "对同旁内角来说，平行的条件是互补而不是全等：$95 + 85 = 180$，所以两直线平行。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A line has slope $\\frac{3}{4}$. What is the slope of a line parallel to it? Give your answer as a fraction a/b.",
                "zh": "一条直线的斜率为 $\\frac{3}{4}$。与它平行的直线斜率是多少？请以分数 a/b 的形式作答。"
              },
              "answer": "3/4",
              "accept": [
                "0.75"
              ],
              "explanation": {
                "en": "Parallel lines have equal slopes, so the answer is $\\frac{3}{4}$. A perpendicular line would instead have slope $-\\frac{4}{3}$.",
                "zh": "平行线斜率相等，所以答案是 $\\frac{3}{4}$。若是垂直，斜率则为 $-\\frac{4}{3}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A line has slope $-2$. What is the slope of a line perpendicular to it? Give your answer as a fraction or decimal.",
                "zh": "一条直线的斜率为 $-2$。与它垂直的直线斜率是多少？请以分数或小数作答。"
              },
              "answer": "1/2",
              "accept": [
                "0.5",
                ".5"
              ],
              "explanation": {
                "en": "Perpendicular slopes are negative reciprocals: flip $-2 = -\\frac{2}{1}$ to $-\\frac{1}{2}$ and change the sign, giving $\\frac{1}{2}$. Check: $-2 \\cdot \\frac{1}{2} = -1$.",
                "zh": "垂直直线的斜率互为负倒数：把 $-2 = -\\frac{2}{1}$ 取倒数并变号得 $\\frac{1}{2}$。检验：$-2 \\cdot \\frac{1}{2} = -1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Lines $a$ and $b$ are cut by a transversal. Alternate exterior angles measure $(6x + 4)^\\circ$ and $(7x - 11)^\\circ$. For what value of $x$ is $a \\parallel b$? Give a whole number.",
                "zh": "直线 $a$、$b$ 被截线所截，一对外错角为 $(6x + 4)^\\circ$ 和 $(7x - 11)^\\circ$。当 $x$ 为何值时 $a \\parallel b$？请填一个整数。"
              },
              "answer": "15",
              "explanation": {
                "en": "Parallel requires congruent alternate exterior angles: $6x + 4 = 7x - 11$, so $x = 15$. Each angle is then $94^\\circ$.",
                "zh": "平行要求外错角全等：$6x + 4 = 7x - 11$，解得 $x = 15$。此时每个角为 $94^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a plane, line $j \\perp \\ell$ and line $k \\perp \\ell$. What is the relationship between $j$ and $k$?",
                "zh": "在同一平面内，直线 $j \\perp \\ell$ 且 $k \\perp \\ell$。$j$ 与 $k$ 是什么关系？"
              },
              "choices": [
                "$j \\parallel k$",
                "$j \\perp k$",
                "$j$ and $k$ intersect at $45^\\circ$",
                "Cannot be determined"
              ],
              "answer": 0,
              "explanation": {
                "en": "Two lines in a plane perpendicular to the same line are parallel: each forms a $90^\\circ$ corresponding angle with $\\ell$, and congruent corresponding angles give parallel lines.",
                "zh": "同一平面内垂直于同一条直线的两条直线互相平行：它们与 $\\ell$ 都成 $90^\\circ$ 的同位角，同位角全等则两直线平行。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Line $r$ passes through $(0, 1)$ and $(2, 7)$; line $s$ passes through $(-1, 4)$ and $(1, 10)$. The lines are:",
                "zh": "直线 $r$ 经过 $(0, 1)$ 和 $(2, 7)$；直线 $s$ 经过 $(-1, 4)$ 和 $(1, 10)$。这两条直线："
              },
              "choices": [
                "Parallel",
                "Perpendicular",
                "The same line",
                "Intersecting but not perpendicular"
              ],
              "answer": 0,
              "explanation": {
                "en": "Slope of $r$: $\\frac{7-1}{2-0} = 3$. Slope of $s$: $\\frac{10-4}{1-(-1)} = 3$. Equal slopes mean parallel. They are not the same line: $(0,1)$ is on $r$, but $s$ contains $(0, 7)$ (from $y = 3x + 7$).",
                "zh": "$r$ 的斜率：$\\frac{7-1}{2-0} = 3$；$s$ 的斜率：$\\frac{10-4}{1-(-1)} = 3$。斜率相等即平行。它们不是同一条直线：$(0,1)$ 在 $r$ 上，而 $s$ 过 $(0, 7)$（由 $y = 3x + 7$）。"
              }
            }
          ]
        },
        {
          "id": "slopes-parallel-perpendicular",
          "title": "Slopes of Parallel and Perpendicular Lines",
          "titleZh": "平行线与垂线的斜率",
          "content": [
            {
              "type": "h2",
              "en": "Slope as a Geometric Tool",
              "zh": "斜率：一件几何工具"
            },
            {
              "type": "p",
              "en": "In algebra, slope measured how fast a line rises. In geometry, slope becomes a tool for proving relationships between lines. The slope of the line through $(x_1, y_1)$ and $(x_2, y_2)$ is the ratio of vertical change to horizontal change:",
              "zh": "在代数中，斜率衡量直线上升的快慢。在几何中，斜率则成为证明直线之间关系的工具。经过 $(x_1, y_1)$ 与 $(x_2, y_2)$ 的直线的斜率是纵向变化与横向变化之比："
            },
            {
              "type": "math",
              "tex": "m = \\frac{y_2 - y_1}{x_2 - x_1}, \\qquad x_1 \\neq x_2"
            },
            {
              "type": "p",
              "en": "A horizontal line has slope $0$; a vertical line has undefined slope, because the denominator $x_2 - x_1$ would be $0$. Every nonvertical line can be written in slope-intercept form $y = mx + b$, and a line through a known point with known slope is fastest to write in point-slope form $y - y_1 = m(x - x_1)$.",
              "zh": "水平线的斜率为 $0$；竖直线的斜率不存在，因为分母 $x_2 - x_1$ 将为 $0$。每条非竖直的直线都可以写成斜截式 $y = mx + b$；而已知一点和斜率时，用点斜式 $y - y_1 = m(x - x_1)$ 写出直线方程最快。"
            },
            {
              "type": "h3",
              "en": "Parallel Lines: Equal Slopes",
              "zh": "平行线：斜率相等"
            },
            {
              "type": "p",
              "en": "Two distinct nonvertical lines are parallel if and only if they have the same slope. This works in both directions: if you know two lines are parallel you may conclude their slopes are equal, and if you compute equal slopes for two distinct lines you may conclude they are parallel. Any two distinct vertical lines are also parallel, even though their slopes are undefined.",
              "zh": "两条不同的非竖直直线平行，当且仅当它们的斜率相等。这个结论双向都成立：若已知两条直线平行，可以断定它们斜率相等；若算出两条不同直线的斜率相等，也可以断定它们平行。任意两条不同的竖直线也互相平行，尽管它们的斜率不存在。"
            },
            {
              "type": "h3",
              "en": "Perpendicular Lines: Slopes That Multiply to −1",
              "zh": "垂线：斜率之积为 −1"
            },
            {
              "type": "p",
              "en": "Two nonvertical lines are perpendicular if and only if the product of their slopes is $-1$:",
              "zh": "两条非竖直的直线互相垂直，当且仅当它们的斜率之积为 $-1$："
            },
            {
              "type": "math",
              "tex": "m_1 \\cdot m_2 = -1 \\quad\\Longleftrightarrow\\quad m_2 = -\\frac{1}{m_1}"
            },
            {
              "type": "p",
              "en": "In other words, perpendicular slopes are opposite reciprocals: flip the fraction and change the sign. A line of slope $\\frac{3}{4}$ is perpendicular to any line of slope $-\\frac{4}{3}$. The one exception to the product rule is the horizontal–vertical pair: a horizontal line (slope $0$) is perpendicular to a vertical line (undefined slope), even though their slopes cannot be multiplied.",
              "zh": "换句话说，互相垂直的斜率互为负倒数：把分数颠倒并变号。斜率为 $\\frac{3}{4}$ 的直线与任何斜率为 $-\\frac{4}{3}$ 的直线垂直。乘积法则唯一的例外是水平线与竖直线这一对：水平线（斜率为 $0$）与竖直线（斜率不存在）互相垂直，尽管它们的斜率无法相乘。"
            },
            {
              "type": "h3",
              "en": "Perpendiculars and Distance",
              "zh": "垂线与距离"
            },
            {
              "type": "p",
              "en": "The distance from a point to a line means the shortest distance, and the shortest path is always along the perpendicular from the point to the line. To compute it: write the equation of the perpendicular line through the point, find where it intersects the given line (the foot of the perpendicular), then use the distance formula. For example, to find the distance from $P(3, 1)$ to the line $y = x$: the perpendicular through $P$ has slope $-1$, so its equation is $y = -x + 4$. Setting $x = -x + 4$ gives the foot $F(2, 2)$, and",
              "zh": "点到直线的距离指的是最短距离，而最短路径总是沿着从该点向直线所作的垂线。计算方法：写出经过该点且与已知直线垂直的直线方程，求出它与已知直线的交点（垂足），再用距离公式。例如，求 $P(3, 1)$ 到直线 $y = x$ 的距离：过 $P$ 的垂线斜率为 $-1$，方程为 $y = -x + 4$。令 $x = -x + 4$ 解得垂足 $F(2, 2)$，于是"
            },
            {
              "type": "math",
              "tex": "PF = \\sqrt{(3-2)^2 + (1-2)^2} = \\sqrt{2}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "To write a line through a point parallel to a given line: copy the slope, then use point-slope form.",
                  "zh": "写出过一点且与已知直线平行的直线：照抄斜率，再用点斜式。"
                },
                {
                  "en": "To write a line through a point perpendicular to a given line: take the opposite reciprocal of the slope, then use point-slope form.",
                  "zh": "写出过一点且与已知直线垂直的直线：取斜率的负倒数，再用点斜式。"
                },
                {
                  "en": "In a coordinate proof, computing slopes is the standard way to prove two segments are parallel (equal slopes) or perpendicular (slopes multiply to $-1$).",
                  "zh": "在坐标证明中，计算斜率是证明两条线段平行（斜率相等）或垂直（斜率之积为 $-1$）的标准方法。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: taking only the reciprocal, or only the opposite. The perpendicular slope to $m = \\frac{2}{5}$ is $-\\frac{5}{2}$ — not $\\frac{5}{2}$ (forgot the sign change) and not $-\\frac{2}{5}$ (forgot to flip). Quick self-check: multiply your two slopes; the product must be exactly $-1$.",
              "zh": "常见错误：只取倒数，或只变号。与 $m = \\frac{2}{5}$ 垂直的斜率是 $-\\frac{5}{2}$——不是 $\\frac{5}{2}$（忘了变号），也不是 $-\\frac{2}{5}$（忘了颠倒）。快速自查：把两个斜率相乘，乘积必须恰好等于 $-1$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Writing parallel and perpendicular lines through a point",
                "zh": "例题 1：写出过一点的平行线与垂线"
              },
              "problem": {
                "en": "Write the equation of the line through $(4, -1)$ that is (a) parallel to $y = 2x + 3$, and (b) perpendicular to $y = 2x + 3$. Give both answers in slope-intercept form.",
                "zh": "写出经过点 $(4, -1)$ 且满足下列条件的直线方程：(a) 与 $y = 2x + 3$ 平行；(b) 与 $y = 2x + 3$ 垂直。两问都用斜截式作答。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) A parallel line keeps the slope $m = 2$. Point-slope form through $(4, -1)$:",
                  "zh": "(a) 平行线保持斜率 $m = 2$。过 $(4, -1)$ 的点斜式为："
                },
                {
                  "type": "math",
                  "tex": "y - (-1) = 2(x - 4) \\;\\Rightarrow\\; y = 2x - 9"
                },
                {
                  "type": "p",
                  "en": "(b) A perpendicular line takes the opposite reciprocal slope $m = -\\frac{1}{2}$:",
                  "zh": "(b) 垂线取负倒数斜率 $m = -\\frac{1}{2}$："
                },
                {
                  "type": "math",
                  "tex": "y + 1 = -\\frac{1}{2}(x - 4) \\;\\Rightarrow\\; y = -\\frac{1}{2}x + 1"
                },
                {
                  "type": "p",
                  "en": "Check part (b): the slopes satisfy $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$, and the point $(4, -1)$ satisfies $-\\frac{1}{2}(4) + 1 = -1$. ✓",
                  "zh": "检验 (b)：两斜率满足 $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$，且点 $(4, -1)$ 满足 $-\\frac{1}{2}(4) + 1 = -1$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A coordinate proof that a triangle is right",
                "zh": "例题 2：用坐标证明三角形是直角三角形"
              },
              "problem": {
                "en": "Triangle $ABC$ has vertices $A(1, 2)$, $B(4, 8)$, and $C(10, 5)$. Prove that $\\angle B$ is a right angle.",
                "zh": "三角形 $ABC$ 的顶点为 $A(1, 2)$、$B(4, 8)$、$C(10, 5)$。证明 $\\angle B$ 是直角。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "We argue in statement–reason style. Statement 1: the slope of $\\overline{AB}$ is $\\frac{8-2}{4-1} = \\frac{6}{3} = 2$. Reason: slope formula. Statement 2: the slope of $\\overline{BC}$ is $\\frac{5-8}{10-4} = \\frac{-3}{6} = -\\frac{1}{2}$. Reason: slope formula.",
                  "zh": "我们用\"陈述—理由\"的格式论证。陈述 1：$\\overline{AB}$ 的斜率为 $\\frac{8-2}{4-1} = \\frac{6}{3} = 2$。理由：斜率公式。陈述 2：$\\overline{BC}$ 的斜率为 $\\frac{5-8}{10-4} = \\frac{-3}{6} = -\\frac{1}{2}$。理由：斜率公式。"
                },
                {
                  "type": "math",
                  "tex": "m_{AB} \\cdot m_{BC} = 2 \\cdot \\left(-\\frac{1}{2}\\right) = -1"
                },
                {
                  "type": "p",
                  "en": "Statement 3: $\\overline{AB} \\perp \\overline{BC}$. Reason: two segments whose slopes multiply to $-1$ are perpendicular. Statement 4: $\\angle B$ is a right angle. Reason: perpendicular segments meeting at $B$ form a right angle. Therefore triangle $ABC$ is a right triangle with the right angle at $B$. $\\blacksquare$",
                  "zh": "陈述 3：$\\overline{AB} \\perp \\overline{BC}$。理由：斜率之积为 $-1$ 的两条线段互相垂直。陈述 4：$\\angle B$ 是直角。理由：相交于 $B$ 的互相垂直的线段构成直角。因此三角形 $ABC$ 是直角三角形，直角在顶点 $B$。$\\blacksquare$"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the slope of the line through $(-2, 3)$ and $(4, -1)$?",
                "zh": "经过点 $(-2, 3)$ 与 $(4, -1)$ 的直线的斜率是多少？"
              },
              "choices": [
                "$-\\frac{2}{3}$",
                "$-\\frac{3}{2}$",
                "$\\frac{2}{3}$",
                "$-2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$m = \\frac{-1 - 3}{4 - (-2)} = \\frac{-4}{6} = -\\frac{2}{3}$. The distractor $-\\frac{3}{2}$ comes from putting the run over the rise — remember the change in $y$ goes on top.",
                "zh": "$m = \\frac{-1 - 3}{4 - (-2)} = \\frac{-4}{6} = -\\frac{2}{3}$。干扰项 $-\\frac{3}{2}$ 来自把横向变化写在分子上——记住 $y$ 的变化量在分子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which line is parallel to $y = 3x - 5$?",
                "zh": "下列哪条直线与 $y = 3x - 5$ 平行？"
              },
              "choices": [
                "$y = -3x - 5$",
                "$y = \\frac{1}{3}x + 2$",
                "$y = -\\frac{1}{3}x + 4$",
                "$y = 3x + 7$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Parallel lines have equal slopes, so we need slope $3$: only $y = 3x + 7$ qualifies. The distractor $y = -\\frac{1}{3}x + 4$ is the perpendicular slope, and $y = -3x - 5$ tempts because it shares the constant $-5$ — but the $y$-intercept has nothing to do with being parallel.",
                "zh": "平行线斜率相等，所以需要斜率为 $3$：只有 $y = 3x + 7$ 符合。干扰项 $y = -\\frac{1}{3}x + 4$ 是垂直方向的斜率；而 $y = -3x - 5$ 因为与原式同有常数 $-5$ 而具有迷惑性——但 $y$ 截距与是否平行毫无关系。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the slope of any line perpendicular to $y = \\frac{2}{5}x + 1$? Give a simple fraction such as -3/4.",
                "zh": "与直线 $y = \\frac{2}{5}x + 1$ 垂直的直线的斜率是多少？请填一个简单分数，例如 -3/4。"
              },
              "answer": "-5/2",
              "accept": [
                "-2.5",
                "-5/2"
              ],
              "explanation": {
                "en": "Take the opposite reciprocal of $\\frac{2}{5}$: flip to $\\frac{5}{2}$ and change the sign, giving $-\\frac{5}{2}$. Check: $\\frac{2}{5} \\cdot \\left(-\\frac{5}{2}\\right) = -1$. ✓",
                "zh": "取 $\\frac{2}{5}$ 的负倒数：颠倒得 $\\frac{5}{2}$，再变号，得 $-\\frac{5}{2}$。检验：$\\frac{2}{5} \\cdot \\left(-\\frac{5}{2}\\right) = -1$。✓"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is the equation of the line through $(2, -3)$ that is parallel to $y = -2x + 7$?",
                "zh": "经过点 $(2, -3)$ 且与 $y = -2x + 7$ 平行的直线方程是哪一个？"
              },
              "choices": [
                "$y = -2x + 1$",
                "$y = \\frac{1}{2}x - 4$",
                "$y = -2x + 7$",
                "$y = -2x - 3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Keep slope $-2$ and use point-slope form: $y + 3 = -2(x - 2)$, so $y = -2x + 1$. The distractor $y = -2x - 3$ wrongly reuses the point's $y$-coordinate as the $y$-intercept — that only works when the given point is on the $y$-axis.",
                "zh": "保持斜率 $-2$，用点斜式：$y + 3 = -2(x - 2)$，即 $y = -2x + 1$。干扰项 $y = -2x - 3$ 错误地把已知点的 $y$ 坐标当作 $y$ 截距——只有当已知点在 $y$ 轴上时才能这样做。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The line through $(6, 1)$ perpendicular to $y = 3x - 4$ crosses the $y$-axis at $(0, b)$. Find $b$. Give a whole number.",
                "zh": "经过点 $(6, 1)$ 且与 $y = 3x - 4$ 垂直的直线交 $y$ 轴于点 $(0, b)$。求 $b$。请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "The perpendicular slope is $-\\frac{1}{3}$. Point-slope form: $y - 1 = -\\frac{1}{3}(x - 6)$, which simplifies to $y = -\\frac{1}{3}x + 3$. So the $y$-intercept is $b = 3$.",
                "zh": "垂线的斜率为 $-\\frac{1}{3}$。点斜式：$y - 1 = -\\frac{1}{3}(x - 6)$，化简得 $y = -\\frac{1}{3}x + 3$。所以 $y$ 截距为 $b = 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a coordinate proof, a student computes the slopes of $\\overline{AB}$ and $\\overline{BC}$ and wants to conclude that $\\overline{AB} \\perp \\overline{BC}$. Which reason justifies that step?",
                "zh": "在一个坐标证明中，学生算出了 $\\overline{AB}$ 与 $\\overline{BC}$ 的斜率，想由此得出 $\\overline{AB} \\perp \\overline{BC}$。下列哪个理由能支持这一步？"
              },
              "choices": [
                "The two slopes are equal",
                "The two segments have equal lengths",
                "The product of the two slopes is $-1$",
                "The two segments share the midpoint $B$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Perpendicularity of nonvertical segments is proved by showing the slopes multiply to $-1$ (opposite reciprocals). Equal slopes would prove the segments parallel — the opposite situation — and equal lengths or a shared point say nothing about the angle between them.",
                "zh": "要证明两条非竖直线段垂直，就要说明它们的斜率之积为 $-1$（互为负倒数）。斜率相等证明的是平行——恰恰相反；而长度相等或共享一个点都不能说明它们之间的夹角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Triangle $ABC$ has vertices $A(0, 0)$, $B(2, 6)$, and $C(8, 4)$. At which vertex is there a right angle?",
                "zh": "三角形 $ABC$ 的顶点为 $A(0, 0)$、$B(2, 6)$、$C(8, 4)$。哪个顶点处是直角？"
              },
              "choices": [
                "$A$",
                "$B$",
                "$C$",
                "The triangle has no right angle"
              ],
              "answer": 1,
              "explanation": {
                "en": "Slope of $\\overline{AB} = \\frac{6-0}{2-0} = 3$ and slope of $\\overline{BC} = \\frac{4-6}{8-2} = -\\frac{1}{3}$. Since $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$, the sides meeting at $B$ are perpendicular, so the right angle is at $B$. Checking the pair at $A$: slope of $\\overline{AC} = \\frac{1}{2}$ and $3 \\cdot \\frac{1}{2} \\neq -1$, so $A$ is not a right angle.",
                "zh": "$\\overline{AB}$ 的斜率为 $\\frac{6-0}{2-0} = 3$，$\\overline{BC}$ 的斜率为 $\\frac{4-6}{8-2} = -\\frac{1}{3}$。因为 $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$，交于 $B$ 的两边互相垂直，所以直角在 $B$ 处。检查 $A$ 处的一对边：$\\overline{AC}$ 的斜率为 $\\frac{1}{2}$，而 $3 \\cdot \\frac{1}{2} \\neq -1$，故 $A$ 处不是直角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the point on the line $y = x$ that is closest to $P(7, 1)$. Give your answer in the form (x,y), for example (3,3).",
                "zh": "求直线 $y = x$ 上离点 $P(7, 1)$ 最近的点。请按 (x,y) 的形式作答，例如 (3,3)。"
              },
              "answer": "(4,4)",
              "accept": [
                "(4, 4)",
                "4,4"
              ],
              "explanation": {
                "en": "The closest point is the foot of the perpendicular from $P$. The line $y = x$ has slope $1$, so the perpendicular through $P(7,1)$ has slope $-1$: $y - 1 = -(x - 7)$, i.e. $y = -x + 8$. Setting $x = -x + 8$ gives $x = 4$, so the foot is $(4, 4)$.",
                "zh": "最近的点就是从 $P$ 向直线所作垂线的垂足。直线 $y = x$ 的斜率为 $1$，所以过 $P(7,1)$ 的垂线斜率为 $-1$：$y - 1 = -(x - 7)$，即 $y = -x + 8$。令 $x = -x + 8$ 得 $x = 4$，所以垂足是 $(4, 4)$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "transformations",
      "title": "Unit 4: Transformations",
      "titleZh": "第四单元：图形变换",
      "lessons": [
        {
          "id": "rigid-transformations",
          "title": "Translations, Reflections, and Rotations",
          "titleZh": "平移、反射与旋转",
          "content": [
            {
              "type": "h2",
              "en": "Moving Figures Without Changing Them",
              "zh": "移动图形而不改变图形"
            },
            {
              "type": "p",
              "en": "A transformation is a rule that moves every point of a figure to a new position. The original figure is the preimage, and the result is the image. We mark image points with prime notation: point $A$ maps to $A'$ (read \"A prime\"), and if we transform again, to $A''$. A rigid transformation (also called a rigid motion or isometry) is one that preserves all distances and all angle measures — the image is an exact, congruent copy of the preimage, just in a new position. The three basic rigid motions are translations, reflections, and rotations.",
              "zh": "变换是把图形上每个点移到新位置的规则。原来的图形叫做原像，得到的结果叫做像。像上的点用撇号记号标记：点 $A$ 映射到 $A'$（读作\"A 撇\"），若再变换一次，则记为 $A''$。刚体变换（又称刚体运动或等距变换）保持所有距离和所有角度不变——像是原像的一个完全全等的复制品，只是位置不同。三种基本的刚体运动是平移、反射和旋转。"
            },
            {
              "type": "h3",
              "en": "Translations: Sliding a Figure",
              "zh": "平移：滑动图形"
            },
            {
              "type": "p",
              "en": "A translation slides every point the same distance in the same direction. On the coordinate plane, a translation is described by how far it moves points horizontally ($a$) and vertically ($b$):",
              "zh": "平移使每个点沿相同方向移动相同的距离。在坐标平面上，平移由水平移动量（$a$）和竖直移动量（$b$）描述："
            },
            {
              "type": "math",
              "tex": "(x, y) \\to (x + a,\\; y + b)"
            },
            {
              "type": "p",
              "en": "If $a > 0$ the figure moves right; if $a < 0$ it moves left. If $b > 0$ it moves up; if $b < 0$ it moves down. For example, the rule $(x, y) \\to (x - 3, y + 5)$ moves every point 3 units left and 5 units up, so $A(2, 1)$ maps to $A'(-1, 6)$.",
              "zh": "当 $a > 0$ 时图形向右移动；当 $a < 0$ 时向左移动。当 $b > 0$ 时向上移动；当 $b < 0$ 时向下移动。例如，规则 $(x, y) \\to (x - 3, y + 5)$ 把每个点向左移 3 个单位、向上移 5 个单位，因此 $A(2, 1)$ 映射到 $A'(-1, 6)$。"
            },
            {
              "type": "h3",
              "en": "Reflections: Flipping Over a Line",
              "zh": "反射：沿直线翻折"
            },
            {
              "type": "p",
              "en": "A reflection flips a figure over a line of reflection, like folding the paper along that line. Each image point is the same distance from the line as its preimage, on the opposite side. Memorize the three coordinate rules used most often:",
              "zh": "反射把图形沿一条对称轴（反射轴）翻折，就像沿这条线对折纸张一样。每个像点与反射轴的距离等于其原像到该轴的距离，且位于轴的另一侧。请记住最常用的三条坐标规则："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Reflection over the $x$-axis: $(x, y) \\to (x, -y)$ — the $x$-coordinate stays, the $y$-coordinate changes sign.",
                  "zh": "关于 $x$ 轴的反射：$(x, y) \\to (x, -y)$——横坐标不变，纵坐标变号。"
                },
                {
                  "en": "Reflection over the $y$-axis: $(x, y) \\to (-x, y)$ — the $y$-coordinate stays, the $x$-coordinate changes sign.",
                  "zh": "关于 $y$ 轴的反射：$(x, y) \\to (-x, y)$——纵坐标不变，横坐标变号。"
                },
                {
                  "en": "Reflection over the line $y = x$: $(x, y) \\to (y, x)$ — the coordinates swap places.",
                  "zh": "关于直线 $y = x$ 的反射：$(x, y) \\to (y, x)$——两个坐标互换位置。"
                }
              ]
            },
            {
              "type": "p",
              "en": "A reflection reverses orientation: if the vertices of a triangle read counterclockwise in the preimage, they read clockwise in the image. Translations and rotations keep orientation the same.",
              "zh": "反射会改变图形的定向：若原像三角形的顶点按逆时针顺序排列，则像的顶点按顺时针顺序排列。平移和旋转则保持定向不变。"
            },
            {
              "type": "h3",
              "en": "Rotations About the Origin",
              "zh": "绕原点的旋转"
            },
            {
              "type": "p",
              "en": "A rotation turns a figure through a given angle about a fixed center. Unless stated otherwise, rotations are counterclockwise about the origin. The three standard rules are:",
              "zh": "旋转使图形绕一个固定的中心转过给定的角度。若无特别说明，旋转指绕原点逆时针方向。三条标准规则是："
            },
            {
              "type": "math",
              "tex": "90^\\circ:\\; (x, y) \\to (-y, x) \\qquad 180^\\circ:\\; (x, y) \\to (-x, -y) \\qquad 270^\\circ:\\; (x, y) \\to (y, -x)"
            },
            {
              "type": "p",
              "en": "A helpful check: a $270^\\circ$ counterclockwise rotation is the same as a $90^\\circ$ clockwise rotation, and a $180^\\circ$ rotation is its own reverse — applying it twice returns every point to where it started.",
              "zh": "一个有用的检验：逆时针旋转 $270^\\circ$ 与顺时针旋转 $90^\\circ$ 相同；而 $180^\\circ$ 旋转是自身的逆变换——连续做两次会把每个点转回原处。"
            },
            {
              "type": "note",
              "en": "Test tip: students most often mix up the $90^\\circ$ and $270^\\circ$ rotation rules. Instead of guessing, test the rule on one easy point. Under a $90^\\circ$ counterclockwise rotation, the point $(1, 0)$ on the positive $x$-axis must land on the positive $y$-axis at $(0, 1)$. Only the rule $(x, y) \\to (-y, x)$ does that, so it is the $90^\\circ$ rule.",
              "zh": "考试提示：学生最容易混淆 $90^\\circ$ 与 $270^\\circ$ 的旋转规则。与其死记硬背，不如用一个简单的点检验规则。逆时针旋转 $90^\\circ$ 时，正 $x$ 轴上的点 $(1, 0)$ 必须落在正 $y$ 轴上的 $(0, 1)$。只有规则 $(x, y) \\to (-y, x)$ 能做到这一点，所以它就是 $90^\\circ$ 的规则。"
            },
            {
              "type": "h3",
              "en": "Why Rigid Motions Give Congruence",
              "zh": "为什么刚体运动给出全等"
            },
            {
              "type": "p",
              "en": "Each rigid motion preserves distance: in a translation every point moves along a path of the same length $\\sqrt{a^2 + b^2}$, so the gap between any two points is unchanged; a reflection keeps each pair of points mirror-symmetric about the line, and a rotation keeps every point the same distance from the center while turning all of them through the same angle. Since every side length and every angle of the image equals the corresponding part of the preimage, the two figures are congruent. That is why rigid motions are called congruence transformations — two figures are congruent exactly when some sequence of rigid motions maps one onto the other.",
              "zh": "每种刚体运动都保持距离：平移中每个点沿长度相同（$\\sqrt{a^2 + b^2}$）的路径移动，所以任意两点之间的距离不变；反射使每对对应点关于反射轴镜像对称；旋转使每个点到中心的距离不变，且所有点转过相同的角度。由于像的每条边长和每个角都与原像的对应部分相等，两个图形全等。因此刚体运动又叫全等变换——两个图形全等，当且仅当存在一列刚体运动把其中一个映射到另一个上。"
            },
            {
              "type": "h3",
              "en": "Composing Transformations",
              "zh": "变换的复合"
            },
            {
              "type": "p",
              "en": "A composition applies one transformation, then applies another to the result. Order matters: reflecting over the $y$-axis and then translating right 4 is generally not the same as translating first. To compose, push a point through the first rule, then push the output through the second rule. A composition of rigid motions is still a rigid motion, so the final image is still congruent to the original preimage.",
              "zh": "复合变换是先做一个变换，再对结果做另一个变换。顺序很重要：先关于 $y$ 轴反射再向右平移 4 个单位，通常不同于先平移再反射。复合时，先把点代入第一条规则，再把输出代入第二条规则。刚体运动的复合仍是刚体运动，所以最终的像仍与最初的原像全等。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Rotating a triangle",
                "zh": "例题 1：旋转三角形"
              },
              "problem": {
                "en": "Triangle $ABC$ has vertices $A(1, 2)$, $B(4, 2)$, and $C(4, 6)$. Find the vertices of the image after a $90^\\circ$ counterclockwise rotation about the origin, and verify that one side length is preserved.",
                "zh": "三角形 $ABC$ 的顶点为 $A(1, 2)$、$B(4, 2)$、$C(4, 6)$。求绕原点逆时针旋转 $90^\\circ$ 后像的各顶点，并验证其中一条边的长度不变。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the rule $(x, y) \\to (-y, x)$ to each vertex:",
                  "zh": "对每个顶点应用规则 $(x, y) \\to (-y, x)$："
                },
                {
                  "type": "math",
                  "tex": "A(1, 2) \\to A'(-2, 1), \\quad B(4, 2) \\to B'(-2, 4), \\quad C(4, 6) \\to C'(-6, 4)"
                },
                {
                  "type": "p",
                  "en": "Check a side: $AB = |4 - 1| = 3$ units since $A$ and $B$ share $y = 2$. In the image, $A'(-2, 1)$ and $B'(-2, 4)$ share $x = -2$, so $A'B' = |4 - 1| = 3$ units. The distance is preserved, as a rigid motion requires.",
                  "zh": "检验一条边：因为 $A$ 与 $B$ 的纵坐标都是 $2$，所以 $AB = |4 - 1| = 3$ 个单位。在像中，$A'(-2, 1)$ 与 $B'(-2, 4)$ 的横坐标都是 $-2$，所以 $A'B' = |4 - 1| = 3$ 个单位。距离保持不变，正符合刚体运动的要求。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A composition, with reasons",
                "zh": "例题 2：复合变换及其理由"
              },
              "problem": {
                "en": "Point $P(3, -1)$ is reflected over the $y$-axis, and the image is then translated by $(x, y) \\to (x + 2, y - 4)$. Find the final image $P''$, and justify each step.",
                "zh": "点 $P(3, -1)$ 先关于 $y$ 轴反射，所得的像再按 $(x, y) \\to (x + 2, y - 4)$ 平移。求最终的像 $P''$，并说明每一步的理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1: $P(3, -1) \\to P'(-3, -1)$. Reason: a reflection over the $y$-axis maps $(x, y)$ to $(-x, y)$, changing only the sign of the $x$-coordinate.",
                  "zh": "第一步：$P(3, -1) \\to P'(-3, -1)$。理由：关于 $y$ 轴的反射把 $(x, y)$ 映射到 $(-x, y)$，只改变横坐标的符号。"
                },
                {
                  "type": "p",
                  "en": "Step 2: $P'(-3, -1) \\to P''(-3 + 2, -1 - 4) = P''(-1, -5)$. Reason: the translation adds $2$ to $x$ and $-4$ to $y$.",
                  "zh": "第二步：$P'(-3, -1) \\to P''(-3 + 2, -1 - 4) = P''(-1, -5)$。理由：该平移使 $x$ 加 $2$，$y$ 加 $-4$。"
                },
                {
                  "type": "p",
                  "en": "Note that reversing the order gives a different result: translating first sends $P$ to $(5, -5)$, and reflecting then gives $(-5, -5) \\ne (-1, -5)$. Order matters in a composition.",
                  "zh": "注意交换顺序会得到不同的结果：先平移把 $P$ 送到 $(5, -5)$，再反射得到 $(-5, -5) \\ne (-1, -5)$。复合变换中顺序是有影响的。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The translation $(x, y) \\to (x - 5, y + 2)$ is applied to $A(7, -3)$. What is $A'$?",
                "zh": "对点 $A(7, -3)$ 应用平移 $(x, y) \\to (x - 5, y + 2)$。$A'$ 是什么？"
              },
              "choices": [
                "$(12, -5)$",
                "$(2, -1)$",
                "$(2, -5)$",
                "$(-2, 1)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Subtract 5 from the $x$-coordinate and add 2 to the $y$-coordinate: $(7 - 5, -3 + 2) = (2, -1)$. Choice $(12, -5)$ comes from reversing both signs of the rule, a common slip.",
                "zh": "横坐标减 5，纵坐标加 2：$(7 - 5, -3 + 2) = (2, -1)$。选项 $(12, -5)$ 是把规则中的两个符号都弄反的结果，这是常见的失误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which rule describes a reflection over the $x$-axis?",
                "zh": "下列哪条规则描述关于 $x$ 轴的反射？"
              },
              "choices": [
                "$(x, y) \\to (-x, y)$",
                "$(x, y) \\to (y, x)$",
                "$(x, y) \\to (-x, -y)$",
                "$(x, y) \\to (x, -y)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Reflecting over the $x$-axis flips points vertically, so only the $y$-coordinate changes sign: $(x, y) \\to (x, -y)$. Choice $(-x, y)$ is tempting but that is the $y$-axis reflection — the axis you reflect over is the coordinate that stays the same.",
                "zh": "关于 $x$ 轴反射时，点在竖直方向翻转，只有纵坐标变号：$(x, y) \\to (x, -y)$。选项 $(-x, y)$ 很有迷惑性，但那是关于 $y$ 轴的反射——你所反射的那条轴对应的坐标保持不变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Point $Q(-2, 7)$ is rotated $180^\\circ$ about the origin. Give the $y$-coordinate of $Q'$ as an integer.",
                "zh": "点 $Q(-2, 7)$ 绕原点旋转 $180^\\circ$。请以整数形式给出 $Q'$ 的纵坐标。"
              },
              "answer": "-7",
              "accept": [
                "-7.0"
              ],
              "explanation": {
                "en": "A $180^\\circ$ rotation uses $(x, y) \\to (-x, -y)$, so $Q'(2, -7)$. The $y$-coordinate is $-7$.",
                "zh": "$180^\\circ$ 旋转的规则是 $(x, y) \\to (-x, -y)$，所以 $Q'(2, -7)$，纵坐标为 $-7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Point $R(5, 1)$ is rotated $90^\\circ$ counterclockwise about the origin. What is $R'$?",
                "zh": "点 $R(5, 1)$ 绕原点逆时针旋转 $90^\\circ$。$R'$ 是什么？"
              },
              "choices": [
                "$(1, -5)$",
                "$(-5, -1)$",
                "$(-1, 5)$",
                "$(1, 5)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The $90^\\circ$ counterclockwise rule is $(x, y) \\to (-y, x)$, giving $(-1, 5)$. Choice $(1, -5)$ is the $270^\\circ$ rule $(y, -x)$ — checking the rule on $(1, 0) \\to (0, 1)$ prevents that mix-up.",
                "zh": "逆时针 $90^\\circ$ 的规则是 $(x, y) \\to (-y, x)$，得 $(-1, 5)$。选项 $(1, -5)$ 是 $270^\\circ$ 的规则 $(y, -x)$——用 $(1, 0) \\to (0, 1)$ 检验规则可以避免这种混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which transformation reverses the orientation of a figure (counterclockwise vertex order becomes clockwise)?",
                "zh": "下列哪种变换会改变图形的定向（顶点顺序由逆时针变为顺时针）？"
              },
              "choices": [
                "A reflection over $y = x$",
                "A translation 6 units left",
                "A $180^\\circ$ rotation about the origin",
                "A $90^\\circ$ rotation about the origin"
              ],
              "answer": 0,
              "explanation": {
                "en": "Every reflection reverses orientation, including reflection over $y = x$. Translations and rotations of any angle preserve orientation — a $180^\\circ$ rotation may look like a flip, but it is still a turn, so vertex order is unchanged.",
                "zh": "任何反射都会改变定向，包括关于 $y = x$ 的反射。平移和任意角度的旋转都保持定向——$180^\\circ$ 旋转看起来像翻折，但它仍是转动，顶点顺序不变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Segment $\\overline{AB}$ with $A(0, 0)$ and $B(6, 8)$ is reflected over the $y$-axis. What is the length of the image $\\overline{A'B'}$ in units? Give a whole number.",
                "zh": "线段 $\\overline{AB}$ 的端点为 $A(0, 0)$、$B(6, 8)$，将它关于 $y$ 轴反射。像 $\\overline{A'B'}$ 的长度是多少个单位？请填一个整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "A reflection is a rigid motion, so lengths are preserved: $A'B' = AB = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ units. No new distance computation on the image is needed.",
                "zh": "反射是刚体运动，长度保持不变：$A'B' = AB = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ 个单位。无需对像重新计算距离。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Point $P(2, 5)$ is reflected over the line $y = x$, and the image is then translated by $(x, y) \\to (x + 1, y - 3)$. What is the final image?",
                "zh": "点 $P(2, 5)$ 先关于直线 $y = x$ 反射，所得的像再按 $(x, y) \\to (x + 1, y - 3)$ 平移。最终的像是什么？"
              },
              "choices": [
                "$(3, 2)$",
                "$(6, -1)$",
                "$(5, 2)$",
                "$(6, 2)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Reflecting over $y = x$ swaps the coordinates: $(2, 5) \\to (5, 2)$. Then apply the translation to that result: $(5 + 1, 2 - 3) = (6, -1)$. Choice $(5, 2)$ is tempting because it stops after the reflection and forgets the second transformation; choice $(3, 2)$ comes from translating first.",
                "zh": "关于 $y = x$ 反射时交换坐标：$(2, 5) \\to (5, 2)$。再对该结果应用平移：$(5 + 1, 2 - 3) = (6, -1)$。选项 $(5, 2)$ 有迷惑性，因为它只做了反射而忘记了第二个变换；选项 $(3, 2)$ 则是先平移造成的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A translation maps $A(3, -2)$ to $A'(-1, 4)$. The same translation maps $B(0, 5)$ to $B'$. Give the $x$-coordinate of $B'$ as an integer.",
                "zh": "某平移把 $A(3, -2)$ 映射到 $A'(-1, 4)$。同一平移把 $B(0, 5)$ 映射到 $B'$。请以整数形式给出 $B'$ 的横坐标。"
              },
              "answer": "-4",
              "accept": [
                "-4.0"
              ],
              "explanation": {
                "en": "Find the rule from $A$: the $x$-change is $-1 - 3 = -4$ and the $y$-change is $4 - (-2) = 6$, so the rule is $(x, y) \\to (x - 4, y + 6)$. Then $B'(0 - 4, 5 + 6) = (-4, 11)$, so the $x$-coordinate is $-4$.",
                "zh": "由 $A$ 求出规则：横坐标变化为 $-1 - 3 = -4$，纵坐标变化为 $4 - (-2) = 6$，所以规则是 $(x, y) \\to (x - 4, y + 6)$。于是 $B'(0 - 4, 5 + 6) = (-4, 11)$，横坐标为 $-4$。"
              }
            }
          ]
        },
        {
          "id": "dilations-and-symmetry",
          "title": "Dilations and Symmetry",
          "titleZh": "位似与对称",
          "content": [
            {
              "type": "h2",
              "en": "Resizing Figures and Recognizing Symmetry",
              "zh": "缩放图形与识别对称"
            },
            {
              "type": "p",
              "en": "Not every transformation is rigid. A dilation resizes a figure — it stretches or shrinks it away from or toward a fixed point called the center of dilation, multiplying every distance from the center by a positive number $k$ called the scale factor. With the center at the origin, the coordinate rule is simple:",
              "zh": "并非所有变换都是刚体变换。位似（又称缩放）会改变图形的大小——它以一个固定点（位似中心）为基准把图形放大或缩小，把每个点到中心的距离都乘以一个正数 $k$，称为位似比（比例因子）。当中心在原点时，坐标规则非常简单："
            },
            {
              "type": "math",
              "tex": "(x, y) \\to (kx,\\; ky)"
            },
            {
              "type": "h3",
              "en": "Enlargement or Reduction?",
              "zh": "放大还是缩小？"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $k > 1$, the dilation is an enlargement: the image is larger than the preimage and farther from the center.",
                  "zh": "若 $k > 1$，位似是放大：像比原像大，且离中心更远。"
                },
                {
                  "en": "If $0 < k < 1$, the dilation is a reduction: the image is smaller and closer to the center.",
                  "zh": "若 $0 < k < 1$，位似是缩小：像更小，且离中心更近。"
                },
                {
                  "en": "If $k = 1$, every point stays put — the dilation is the identity.",
                  "zh": "若 $k = 1$，每个点都不动——位似是恒等变换。"
                }
              ]
            },
            {
              "type": "p",
              "en": "You can recover the scale factor from any matching pair of lengths: $k = \\dfrac{\\text{image length}}{\\text{preimage length}}$. The center of dilation is the only point that never moves (when $k \\neq 1$), and a point, its image, and the center are always collinear.",
              "zh": "由任何一对对应长度都可以求出位似比：$k = \\dfrac{\\text{像的长度}}{\\text{原像的长度}}$。位似中心是唯一不动的点（当 $k \\neq 1$ 时），并且任一点、它的像与中心三点总是共线的。"
            },
            {
              "type": "h3",
              "en": "What a Dilation Preserves — and What It Changes",
              "zh": "位似保持什么——又改变什么"
            },
            {
              "type": "p",
              "en": "A dilation preserves angle measures and maps every line to a parallel line (or to itself, if the line passes through the center). So the image has exactly the same shape as the preimage. But it multiplies every length by $k$: each side of the image is $k$ times the corresponding side of the preimage, and the perimeter is also multiplied by $k$. (The area is multiplied by $k^2$, since both dimensions scale.) Because lengths change when $k \\neq 1$, a dilation is not a rigid motion — it is a similarity transformation: the image is similar to the preimage, written with the symbol $\\sim$.",
              "zh": "位似保持角的度数不变，并把每条直线映射为与它平行的直线（若直线过中心，则映射为其自身）。因此像与原像的形状完全相同。但位似把每条长度都乘以 $k$：像的每条边是原像对应边的 $k$ 倍，周长也乘以 $k$。（面积乘以 $k^2$，因为两个方向的尺寸都被缩放。）由于当 $k \\neq 1$ 时长度改变，位似不是刚体运动——它是相似变换：像与原像相似，用符号 $\\sim$ 表示。"
            },
            {
              "type": "note",
              "en": "Common mistake: on tests, students often apply the scale factor to only one coordinate, writing $(kx, y)$. That is not a dilation — it distorts the shape and changes angles. A true dilation centered at the origin multiplies both coordinates by the same $k$. Also remember $k$ compares image to preimage, in that order: an image side of 6 from a preimage side of 8 gives $k = \\frac{6}{8} = \\frac{3}{4}$, not $\\frac{4}{3}$.",
              "zh": "常见错误：考试中学生常常只把一个坐标乘以比例因子，写成 $(kx, y)$。那不是位似——它会使图形变形并改变角度。以原点为中心的真正位似必须把两个坐标乘以同一个 $k$。还要记住 $k$ 是像与原像之比（按此顺序）：原像边长为 8、像的边长为 6 时，$k = \\frac{6}{8} = \\frac{3}{4}$，而不是 $\\frac{4}{3}$。"
            },
            {
              "type": "h3",
              "en": "Line Symmetry and Rotational Symmetry",
              "zh": "轴对称与旋转对称"
            },
            {
              "type": "p",
              "en": "A figure has line symmetry (reflection symmetry) if a reflection over some line — a line of symmetry — maps the figure onto itself. A figure has rotational symmetry if a rotation of less than $360^\\circ$ about its center maps it onto itself; the smallest such angle is the angle of rotational symmetry, and the number of positions in a full turn is the order. Useful facts:",
              "zh": "如果存在一条直线（对称轴），使图形关于它反射后与自身重合，则该图形具有轴对称（反射对称）。如果绕中心旋转小于 $360^\\circ$ 的某个角度后图形与自身重合，则它具有旋转对称；最小的这种角度叫做旋转对称角，一整圈中重合的位置个数叫做旋转对称的阶。常用结论："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A rectangle (not a square) has 2 lines of symmetry and rotational symmetry of order 2 ($180^\\circ$). Its diagonals are NOT lines of symmetry.",
                  "zh": "矩形（非正方形）有 2 条对称轴，旋转对称的阶为 2（$180^\\circ$）。它的对角线不是对称轴。"
                },
                {
                  "en": "An equilateral triangle has 3 lines of symmetry and rotational symmetry of order 3 (smallest angle $120^\\circ$).",
                  "zh": "等边三角形有 3 条对称轴，旋转对称的阶为 3（最小角 $120^\\circ$）。"
                },
                {
                  "en": "A regular $n$-gon has $n$ lines of symmetry and rotational symmetry of order $n$, with smallest angle $\\frac{360^\\circ}{n}$.",
                  "zh": "正 $n$ 边形有 $n$ 条对称轴，旋转对称的阶为 $n$，最小旋转角为 $\\frac{360^\\circ}{n}$。"
                },
                {
                  "en": "A circle has infinitely many lines of symmetry and rotational symmetry for every angle.",
                  "zh": "圆有无数条对称轴，并对任何角度都具有旋转对称。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Deciding Congruent vs. Similar with Transformations",
              "zh": "用变换判断全等与相似"
            },
            {
              "type": "p",
              "en": "Transformations give precise meanings to congruent and similar. Two figures are congruent if a sequence of rigid motions (translations, reflections, rotations) maps one onto the other — all lengths match. Two figures are similar if a sequence of rigid motions and dilations maps one onto the other — angles match, and lengths are all in the same ratio $k$. Every congruence is a similarity with $k = 1$, but a similarity with $k \\neq 1$ is not a congruence.",
              "zh": "变换为全等和相似给出了精确的含义。若一列刚体运动（平移、反射、旋转）能把一个图形映射到另一个上，则两图形全等——所有长度都相等。若一列刚体运动与位似能把一个图形映射到另一个上，则两图形相似——各角相等，各长度成同一比值 $k$。每个全等都是 $k = 1$ 的相似，但 $k \\neq 1$ 的相似不是全等。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Dilating a triangle from the origin",
                "zh": "例题 1：以原点为中心位似三角形"
              },
              "problem": {
                "en": "Triangle $DEF$ has vertices $D(2, 4)$, $E(6, 4)$, and $F(6, 12)$. It is dilated with center at the origin and scale factor $k = \\frac{1}{2}$. Find the image vertices, and compare the perimeters of the two triangles.",
                "zh": "三角形 $DEF$ 的顶点为 $D(2, 4)$、$E(6, 4)$、$F(6, 12)$。以原点为中心、位似比 $k = \\frac{1}{2}$ 作位似。求像的各顶点，并比较两个三角形的周长。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply both coordinates of each vertex by $\\frac{1}{2}$:",
                  "zh": "把每个顶点的两个坐标都乘以 $\\frac{1}{2}$："
                },
                {
                  "type": "math",
                  "tex": "D'(1, 2), \\quad E'(3, 2), \\quad F'(3, 6)"
                },
                {
                  "type": "p",
                  "en": "The preimage is a right triangle with legs $DE = 4$ and $EF = 8$, so its hypotenuse is $DF = \\sqrt{4^2 + 8^2} = \\sqrt{80} = 4\\sqrt{5}$, and its perimeter is $12 + 4\\sqrt{5}$ units. The image has legs $2$ and $4$ and hypotenuse $2\\sqrt{5}$, for a perimeter of $6 + 2\\sqrt{5}$ units — exactly $\\frac{1}{2}$ of the original, as expected, since every length is multiplied by $k = \\frac{1}{2}$. The right angle at $E$ maps to a right angle at $E'$: angles are unchanged.",
                  "zh": "原像是直角三角形，两条直角边 $DE = 4$、$EF = 8$，斜边 $DF = \\sqrt{4^2 + 8^2} = \\sqrt{80} = 4\\sqrt{5}$，周长为 $12 + 4\\sqrt{5}$ 个单位。像的直角边为 $2$ 和 $4$，斜边为 $2\\sqrt{5}$，周长为 $6 + 2\\sqrt{5}$ 个单位——恰好是原来的 $\\frac{1}{2}$，符合每条长度都乘以 $k = \\frac{1}{2}$ 的预期。$E$ 处的直角映射为 $E'$ 处的直角：角度不变。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Congruent or similar?",
                "zh": "例题 2：全等还是相似？"
              },
              "problem": {
                "en": "Triangle $ABC$ has vertices $A(1, 1)$, $B(3, 1)$, $C(1, 5)$. Triangle $PQR$ has vertices $P(-3, -3)$, $Q(-9, -3)$, $R(-3, -15)$. Use transformations to decide whether the triangles are congruent, similar but not congruent, or neither.",
                "zh": "三角形 $ABC$ 的顶点为 $A(1, 1)$、$B(3, 1)$、$C(1, 5)$；三角形 $PQR$ 的顶点为 $P(-3, -3)$、$Q(-9, -3)$、$R(-3, -15)$。请用变换判断这两个三角形是全等、相似但不全等，还是两者都不是。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Try building $PQR$ from $ABC$. First rotate $ABC$ by $180^\\circ$ about the origin: $(x, y) \\to (-x, -y)$ gives $A_1(-1, -1)$, $B_1(-3, -1)$, $C_1(-1, -5)$. Now compare with $PQR$: each coordinate of $P(-3, -3)$, $Q(-9, -3)$, $R(-3, -15)$ is exactly $3$ times the corresponding coordinate of $A_1$, $B_1$, $C_1$. So a dilation centered at the origin with $k = 3$ completes the map.",
                  "zh": "尝试由 $ABC$ 构造出 $PQR$。先把 $ABC$ 绕原点旋转 $180^\\circ$：$(x, y) \\to (-x, -y)$ 得 $A_1(-1, -1)$、$B_1(-3, -1)$、$C_1(-1, -5)$。再与 $PQR$ 比较：$P(-3, -3)$、$Q(-9, -3)$、$R(-3, -15)$ 的每个坐标恰好是 $A_1$、$B_1$、$C_1$ 对应坐标的 $3$ 倍。因此以原点为中心、$k = 3$ 的位似即可完成映射。"
                },
                {
                  "type": "p",
                  "en": "Since the sequence uses a rotation (rigid) followed by a dilation with $k = 3 \\neq 1$, the triangles are similar but not congruent. Check with lengths: $AB = 2$ while $PQ = |-9 - (-3)| = 6$, so the ratio is $3$, matching $k$.",
                  "zh": "因为这列变换由一个旋转（刚体运动）和一个 $k = 3 \\neq 1$ 的位似组成，所以两个三角形相似但不全等。用长度检验：$AB = 2$ 而 $PQ = |-9 - (-3)| = 6$，比值为 $3$，与 $k$ 一致。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A dilation centered at the origin with scale factor $k = 3$ is applied to $A(-2, 5)$. What is $A'$?",
                "zh": "对点 $A(-2, 5)$ 作以原点为中心、位似比 $k = 3$ 的位似。$A'$ 是什么？"
              },
              "choices": [
                "$(1, 8)$",
                "$(-6, 15)$",
                "$(-6, 5)$",
                "$(-2, 15)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Multiply both coordinates by 3: $(-2 \\cdot 3, 5 \\cdot 3) = (-6, 15)$. Choices $(-6, 5)$ and $(-2, 15)$ scale only one coordinate — that distorts the figure and is not a dilation.",
                "zh": "把两个坐标都乘以 3：$(-2 \\cdot 3, 5 \\cdot 3) = (-6, 15)$。选项 $(-6, 5)$ 和 $(-2, 15)$ 只缩放了一个坐标——那会使图形变形，不是位似。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A dilation maps a segment of length 12 to a segment of length 9. Which describes the dilation?",
                "zh": "某位似把长度为 12 的线段映射为长度为 9 的线段。下列哪项描述了这个位似？"
              },
              "choices": [
                "Enlargement with $k = \\frac{4}{3}$",
                "Reduction with $k = \\frac{4}{3}$",
                "Reduction with $k = \\frac{3}{4}$",
                "Enlargement with $k = \\frac{3}{4}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$k = \\frac{\\text{image}}{\\text{preimage}} = \\frac{9}{12} = \\frac{3}{4}$. Since $0 < k < 1$, it is a reduction. The answer $\\frac{4}{3}$ comes from dividing in the wrong order (preimage over image).",
                "zh": "$k = \\frac{\\text{像}}{\\text{原像}} = \\frac{9}{12} = \\frac{3}{4}$。因为 $0 < k < 1$，所以是缩小。$\\frac{4}{3}$ 是把除法顺序弄反（原像除以像）得到的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which quantity is preserved (unchanged) by a dilation with scale factor $k = 2$?",
                "zh": "位似比 $k = 2$ 的位似保持下列哪个量不变？"
              },
              "choices": [
                "Side lengths",
                "Perimeter",
                "Area",
                "Angle measures"
              ],
              "answer": 3,
              "explanation": {
                "en": "Dilations preserve angle measures (and parallelism), which is why the image has the same shape. Side lengths and perimeter are multiplied by $k = 2$, and area is multiplied by $k^2 = 4$.",
                "zh": "位似保持角的度数（以及平行关系）不变，这正是像与原像形状相同的原因。边长和周长都乘以 $k = 2$，面积乘以 $k^2 = 4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A triangle with perimeter 18 cm is dilated with scale factor $k = \\frac{2}{3}$. What is the perimeter of the image in cm? Give a whole number.",
                "zh": "周长为 18 厘米的三角形经过位似比 $k = \\frac{2}{3}$ 的位似。像的周长是多少厘米？请填一个整数。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "Every side is multiplied by $\\frac{2}{3}$, so the perimeter is too: $18 \\cdot \\frac{2}{3} = 12$ cm. (The area, by contrast, would be multiplied by $k^2 = \\frac{4}{9}$.)",
                "zh": "每条边都乘以 $\\frac{2}{3}$，所以周长也一样：$18 \\cdot \\frac{2}{3} = 12$ 厘米。（相比之下，面积会乘以 $k^2 = \\frac{4}{9}$。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the smallest positive angle of rotational symmetry of a regular hexagon, in degrees? Give a whole number.",
                "zh": "正六边形旋转对称的最小正角是多少度？请填一个整数。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "A regular $n$-gon has smallest rotation angle $\\frac{360^\\circ}{n}$; for $n = 6$ that is $\\frac{360^\\circ}{6} = 60^\\circ$.",
                "zh": "正 $n$ 边形的最小旋转角为 $\\frac{360^\\circ}{n}$；当 $n = 6$ 时为 $\\frac{360^\\circ}{6} = 60^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many lines of symmetry does a rectangle that is not a square have?",
                "zh": "一个非正方形的矩形有多少条对称轴？"
              },
              "choices": [
                "4",
                "1",
                "2",
                "0"
              ],
              "answer": 2,
              "explanation": {
                "en": "A non-square rectangle has exactly 2 lines of symmetry: the vertical and horizontal lines through the midpoints of opposite sides. The answer 4 is tempting because a square has 4, but a rectangle's diagonals are not lines of symmetry — folding along a diagonal does not match the halves.",
                "zh": "非正方形的矩形恰有 2 条对称轴：分别过两组对边中点的水平线和竖直线。选 4 很有诱惑性，因为正方形有 4 条，但矩形的对角线不是对称轴——沿对角线对折时两半并不重合。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Triangle $ABC$ is mapped onto triangle $XYZ$ by a reflection over the $y$-axis followed by a dilation centered at the origin with $k = \\frac{5}{2}$. Which statement must be true?",
                "zh": "三角形 $ABC$ 先关于 $y$ 轴反射，再经过以原点为中心、$k = \\frac{5}{2}$ 的位似，映射到三角形 $XYZ$。下列哪个说法一定正确？"
              },
              "choices": [
                "$\\triangle ABC \\cong \\triangle XYZ$",
                "$\\triangle ABC \\sim \\triangle XYZ$ but the triangles are not congruent",
                "The triangles have equal perimeters",
                "Corresponding angles differ by a factor of $\\frac{5}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A rigid motion followed by a dilation with $k \\neq 1$ is a similarity transformation, so the triangles are similar with side ratio $\\frac{5}{2}$ — not congruent, and the perimeters differ by that factor. Angles are preserved exactly, never scaled; that is why the last choice is wrong.",
                "zh": "刚体运动接上 $k \\neq 1$ 的位似是相似变换，所以两三角形相似，边长之比为 $\\frac{5}{2}$——不全等，周长也相差这个倍数。角度被完全保持，绝不会被缩放，所以最后一个选项是错的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A dilation centered at the origin maps $B(4, -6)$ to $B'(10, -15)$. What is the scale factor $k$? Give a fraction in lowest terms or a decimal.",
                "zh": "以原点为中心的位似把 $B(4, -6)$ 映射到 $B'(10, -15)$。位似比 $k$ 是多少？请填最简分数或小数。"
              },
              "answer": "5/2",
              "accept": [
                "2.5",
                "2.50",
                "5 / 2"
              ],
              "explanation": {
                "en": "Divide an image coordinate by the matching preimage coordinate: $k = \\frac{10}{4} = \\frac{5}{2}$, and the check $\\frac{-15}{-6} = \\frac{5}{2}$ agrees. Since $k > 1$, this dilation is an enlargement.",
                "zh": "用像的坐标除以对应的原像坐标：$k = \\frac{10}{4} = \\frac{5}{2}$，检验 $\\frac{-15}{-6} = \\frac{5}{2}$ 一致。因为 $k > 1$，这个位似是放大。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "triangles-congruence",
      "title": "Unit 5: Triangles and Congruence",
      "titleZh": "第五单元：三角形与全等",
      "lessons": [
        {
          "id": "triangle-angle-relationships",
          "title": "Triangle Angle Relationships",
          "titleZh": "三角形的角度关系",
          "content": [
            {
              "type": "h2",
              "en": "The Triangle Angle-Sum Theorem",
              "zh": "三角形内角和定理"
            },
            {
              "type": "p",
              "en": "The most used fact in this course: the three interior angles of any triangle sum to $180^\\circ$. The classic proof draws a line through one vertex parallel to the opposite side; the two alternate interior angle pairs copy the other two angles of the triangle onto a straight line at that vertex, and a straight angle measures $180^\\circ$.",
              "zh": "本课程中最常用的事实：任意三角形的三个内角之和为 $180^\\circ$。经典证明是过一个顶点作对边的平行线；两对内错角把三角形的另外两个角\"搬\"到该顶点处的一条直线上，而平角为 $180^\\circ$。"
            },
            {
              "type": "math",
              "tex": "m\\angle A + m\\angle B + m\\angle C = 180^\\circ"
            },
            {
              "type": "h3",
              "en": "Classifying Triangles",
              "zh": "三角形的分类"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "By sides: scalene (no congruent sides), isosceles (at least two congruent sides), equilateral (three congruent sides).",
                  "zh": "按边分：不等边三角形（无相等的边）、等腰三角形（至少两边相等）、等边三角形（三边相等）。"
                },
                {
                  "en": "By angles: acute (all angles acute), right (one $90^\\circ$ angle), obtuse (one obtuse angle), equiangular (all angles $60^\\circ$).",
                  "zh": "按角分：锐角三角形（三个角都是锐角）、直角三角形（有一个 $90^\\circ$ 角）、钝角三角形（有一个钝角）、等角三角形（三个角都是 $60^\\circ$）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Exterior Angle Theorem",
              "zh": "外角定理"
            },
            {
              "type": "p",
              "en": "An exterior angle of a triangle is formed by extending one side; it forms a linear pair with the interior angle at that vertex. The Exterior Angle Theorem says an exterior angle equals the sum of the two remote (non-adjacent) interior angles. This follows directly from the angle-sum theorem, and it often saves a step in problems.",
              "zh": "把三角形的一条边延长便形成一个外角；它与该顶点处的内角构成邻补角。外角定理：三角形的一个外角等于与它不相邻的两个内角之和。它是内角和定理的直接推论，做题时常能省一步。"
            },
            {
              "type": "note",
              "en": "The Isosceles Triangle Theorem: the base angles opposite the congruent sides of an isosceles triangle are congruent, and conversely, sides opposite congruent angles are congruent. An equilateral triangle is therefore automatically equiangular, with each angle $60^\\circ$.",
              "zh": "等腰三角形定理：等腰三角形中与相等两边相对的底角全等；反之，与相等两角相对的边也相等。因此等边三角形必然是等角三角形，每个角都是 $60^\\circ$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Angle sum with algebra",
                "zh": "例题 1：结合代数的内角和"
              },
              "problem": {
                "en": "The angles of a triangle measure $x^\\circ$, $(2x + 10)^\\circ$, and $(3x - 40)^\\circ$. Find all three angles.",
                "zh": "一个三角形的三个内角分别为 $x^\\circ$、$(2x + 10)^\\circ$ 和 $(3x - 40)^\\circ$。求三个角。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "x + (2x + 10) + (3x - 40) = 180 \\;\\Rightarrow\\; 6x - 30 = 180 \\;\\Rightarrow\\; x = 35"
                },
                {
                  "type": "p",
                  "en": "The angles are $35^\\circ$, $2(35) + 10 = 80^\\circ$, and $3(35) - 40 = 65^\\circ$. Check: $35 + 80 + 65 = 180$. ✓ Since all angles are acute, the triangle is acute.",
                  "zh": "三个角为 $35^\\circ$、$2(35) + 10 = 80^\\circ$ 和 $3(35) - 40 = 65^\\circ$。检验：$35 + 80 + 65 = 180$。✓ 三个角都是锐角，所以是锐角三角形。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Exterior angle plus isosceles",
                "zh": "例题 2：外角与等腰三角形"
              },
              "problem": {
                "en": "In isosceles $\\triangle ABC$, $AB = AC$ and the exterior angle at $C$ measures $110^\\circ$. Find $m\\angle A$.",
                "zh": "等腰三角形 $\\triangle ABC$ 中，$AB = AC$，$C$ 处的外角为 $110^\\circ$。求 $m\\angle A$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The interior angle at $C$ is $180^\\circ - 110^\\circ = 70^\\circ$. Since $AB = AC$, the base angles at $B$ and $C$ are congruent, so $m\\angle B = 70^\\circ$ as well.",
                  "zh": "$C$ 处的内角为 $180^\\circ - 110^\\circ = 70^\\circ$。因为 $AB = AC$，$B$ 与 $C$ 处的底角全等，所以 $m\\angle B = 70^\\circ$。"
                },
                {
                  "type": "math",
                  "tex": "m\\angle A = 180^\\circ - 70^\\circ - 70^\\circ = 40^\\circ"
                },
                {
                  "type": "p",
                  "en": "Alternatively, by the Exterior Angle Theorem, $110^\\circ = m\\angle A + m\\angle B = m\\angle A + 70^\\circ$, giving the same $40^\\circ$.",
                  "zh": "也可用外角定理：$110^\\circ = m\\angle A + m\\angle B = m\\angle A + 70^\\circ$，同样得 $40^\\circ$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Two angles of a triangle measure $48^\\circ$ and $67^\\circ$. Find the third angle in degrees. Give a whole number.",
                "zh": "三角形的两个角为 $48^\\circ$ 和 $67^\\circ$。求第三个角的度数。请填一个整数。"
              },
              "answer": "65",
              "explanation": {
                "en": "The angles sum to $180^\\circ$: $180 - 48 - 67 = 65^\\circ$.",
                "zh": "内角和为 $180^\\circ$：$180 - 48 - 67 = 65^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A triangle has angles $90^\\circ$, $35^\\circ$, and $55^\\circ$, with exactly two congruent sides... actually, with no congruent sides. How is it classified?",
                "zh": "一个三角形的角为 $90^\\circ$、$35^\\circ$、$55^\\circ$，且没有相等的边。它属于哪一类？"
              },
              "choices": [
                "Right scalene",
                "Right isosceles",
                "Acute scalene",
                "Obtuse scalene"
              ],
              "answer": 0,
              "explanation": {
                "en": "One $90^\\circ$ angle makes it right; no congruent sides makes it scalene. Angle classification and side classification are independent labels.",
                "zh": "有一个 $90^\\circ$ 角所以是直角三角形；没有相等的边所以是不等边三角形。按角分类和按边分类是相互独立的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Each base angle of an isosceles triangle measures $71^\\circ$. Find the vertex angle in degrees. Give a whole number.",
                "zh": "等腰三角形的每个底角为 $71^\\circ$。求顶角的度数。请填一个整数。"
              },
              "answer": "38",
              "explanation": {
                "en": "The two base angles are congruent, so the vertex angle is $180 - 2(71) = 180 - 142 = 38^\\circ$.",
                "zh": "两个底角相等，所以顶角为 $180 - 2(71) = 180 - 142 = 38^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An exterior angle of a triangle measures $125^\\circ$. One remote interior angle measures $50^\\circ$. What is the other remote interior angle?",
                "zh": "三角形的一个外角为 $125^\\circ$，一个与它不相邻的内角为 $50^\\circ$。另一个不相邻的内角是多少？"
              },
              "choices": [
                "$75^\\circ$",
                "$55^\\circ$",
                "$65^\\circ$",
                "$105^\\circ$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The Exterior Angle Theorem gives $125 = 50 + x$, so $x = 75^\\circ$. No need to find the adjacent interior angle first.",
                "zh": "由外角定理 $125 = 50 + x$，得 $x = 75^\\circ$。无需先求相邻的内角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In an equiangular triangle, what is the measure of each angle in degrees? Give a whole number.",
                "zh": "等角三角形中每个角是多少度？请填一个整数。"
              },
              "answer": "60",
              "explanation": {
                "en": "Three equal angles summing to $180^\\circ$ must each be $180 \\div 3 = 60^\\circ$.",
                "zh": "三个相等的角之和为 $180^\\circ$，所以每个角为 $180 \\div 3 = 60^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The acute angles of a right triangle are $(2x)^\\circ$ and $(3x)^\\circ$. What is $x$?",
                "zh": "直角三角形的两个锐角为 $(2x)^\\circ$ 和 $(3x)^\\circ$。$x$ 等于多少？"
              },
              "choices": [
                "$18$",
                "$30$",
                "$36$",
                "$15$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The acute angles of a right triangle are complementary: $2x + 3x = 90$, so $5x = 90$ and $x = 18$. The angles are $36^\\circ$ and $54^\\circ$.",
                "zh": "直角三角形的两个锐角互余：$2x + 3x = 90$，即 $5x = 90$，$x = 18$。两角为 $36^\\circ$ 和 $54^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In $\\triangle PQR$, $m\\angle P = (x + 20)^\\circ$, $m\\angle Q = (2x)^\\circ$, and $m\\angle R = (2x - 15)^\\circ$. Find $m\\angle Q$ in degrees. Give a whole number.",
                "zh": "在 $\\triangle PQR$ 中，$m\\angle P = (x + 20)^\\circ$，$m\\angle Q = (2x)^\\circ$，$m\\angle R = (2x - 15)^\\circ$。求 $m\\angle Q$ 的度数。请填一个整数。"
              },
              "answer": "70",
              "explanation": {
                "en": "$(x + 20) + 2x + (2x - 15) = 180$ gives $5x + 5 = 180$, so $x = 35$ and $m\\angle Q = 2(35) = 70^\\circ$. The other angles are $55^\\circ$ and $55^\\circ$: the triangle is isosceles.",
                "zh": "$(x + 20) + 2x + (2x - 15) = 180$ 得 $5x + 5 = 180$，所以 $x = 35$，$m\\angle Q = 2(35) = 70^\\circ$。另两个角都是 $55^\\circ$，所以是等腰三角形。"
              }
            }
          ]
        },
        {
          "id": "congruence-postulates",
          "title": "Congruent Triangles: SSS, SAS, ASA, AAS, HL",
          "titleZh": "全等三角形：SSS、SAS、ASA、AAS、HL",
          "content": [
            {
              "type": "h2",
              "en": "What Congruent Triangles Mean",
              "zh": "全等三角形的含义"
            },
            {
              "type": "p",
              "en": "Two triangles are congruent when all three pairs of corresponding sides and all three pairs of corresponding angles are congruent, i.e. one triangle can be mapped exactly onto the other. Writing $\\triangle ABC \\cong \\triangle DEF$ is a promise about order: $A$ corresponds to $D$, $B$ to $E$, $C$ to $F$, so $\\overline{AB} \\cong \\overline{DE}$, $\\angle B \\cong \\angle E$, and so on.",
              "zh": "当两个三角形的三对对应边和三对对应角都全等时，这两个三角形全等，即一个三角形可以与另一个完全重合。写 $\\triangle ABC \\cong \\triangle DEF$ 时字母顺序是一种约定：$A$ 对应 $D$，$B$ 对应 $E$，$C$ 对应 $F$，因此 $\\overline{AB} \\cong \\overline{DE}$，$\\angle B \\cong \\angle E$，依此类推。"
            },
            {
              "type": "h3",
              "en": "Shortcut Criteria",
              "zh": "判定方法"
            },
            {
              "type": "p",
              "en": "Fortunately we never need to check all six pairs. Three matched pieces in the right pattern suffice:",
              "zh": "幸运的是我们不必检验全部六对元素。三对位置合适的对应元素就足够了："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "SSS: three pairs of congruent sides.",
                  "zh": "SSS（边边边）：三对对应边全等。"
                },
                {
                  "en": "SAS: two sides and the INCLUDED angle (the angle between those sides).",
                  "zh": "SAS（边角边）：两边及其夹角（两边之间的角）全等。"
                },
                {
                  "en": "ASA: two angles and the INCLUDED side.",
                  "zh": "ASA（角边角）：两角及其夹边全等。"
                },
                {
                  "en": "AAS: two angles and a NON-included side.",
                  "zh": "AAS（角角边）：两角及其中一角的对边（非夹边）全等。"
                },
                {
                  "en": "HL (right triangles only): the hypotenuse and one leg.",
                  "zh": "HL（仅限直角三角形）：斜边和一条直角边全等。"
                }
              ]
            },
            {
              "type": "note",
              "en": "SSA (two sides and a non-included angle) and AAA are NOT valid congruence criteria. AAA forces the same shape but not the same size, and SSA can often be satisfied by two different triangles. HL is the one right-triangle exception where an SSA-type pattern works, because the right angle removes the ambiguity.",
              "zh": "SSA（两边及非夹角）和 AAA 都不是有效的全等判定。AAA 只能保证形状相同而大小不一定相同；SSA 常常可以由两个不同的三角形同时满足。HL 是直角三角形中唯一可行的 SSA 型判定，因为直角消除了不确定性。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Choosing the right criterion",
                "zh": "例题 1：选择正确的判定"
              },
              "problem": {
                "en": "In $\\triangle ABC$ and $\\triangle DEF$: $\\overline{AB} \\cong \\overline{DE}$, $\\angle A \\cong \\angle D$, and $\\overline{AC} \\cong \\overline{DF}$. Which congruence criterion applies?",
                "zh": "在 $\\triangle ABC$ 与 $\\triangle DEF$ 中：$\\overline{AB} \\cong \\overline{DE}$，$\\angle A \\cong \\angle D$，$\\overline{AC} \\cong \\overline{DF}$。应使用哪种全等判定？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The congruent angle $\\angle A$ sits between sides $\\overline{AB}$ and $\\overline{AC}$ (both contain vertex $A$), and likewise $\\angle D$ is between $\\overline{DE}$ and $\\overline{DF}$. Two sides and the included angle: this is SAS, so $\\triangle ABC \\cong \\triangle DEF$.",
                  "zh": "全等角 $\\angle A$ 位于边 $\\overline{AB}$ 与 $\\overline{AC}$ 之间（两边都含顶点 $A$），同样 $\\angle D$ 位于 $\\overline{DE}$ 与 $\\overline{DF}$ 之间。两边及其夹角：这是 SAS，所以 $\\triangle ABC \\cong \\triangle DEF$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A shared side",
                "zh": "例题 2：公共边"
              },
              "problem": {
                "en": "Given: $\\overline{AB} \\cong \\overline{CB}$ and $\\overline{AD} \\cong \\overline{CD}$. Prove $\\triangle ABD \\cong \\triangle CBD$.",
                "zh": "已知：$\\overline{AB} \\cong \\overline{CB}$，$\\overline{AD} \\cong \\overline{CD}$。求证：$\\triangle ABD \\cong \\triangle CBD$。"
              },
              "solution": [
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "1. $\\overline{AB} \\cong \\overline{CB}$; $\\overline{AD} \\cong \\overline{CD}$ — Given.",
                      "zh": "1. $\\overline{AB} \\cong \\overline{CB}$；$\\overline{AD} \\cong \\overline{CD}$ —— 已知。"
                    },
                    {
                      "en": "2. $\\overline{BD} \\cong \\overline{BD}$ — Reflexive Property of Congruence.",
                      "zh": "2. $\\overline{BD} \\cong \\overline{BD}$ —— 全等的自反性。"
                    },
                    {
                      "en": "3. $\\triangle ABD \\cong \\triangle CBD$ — SSS.",
                      "zh": "3. $\\triangle ABD \\cong \\triangle CBD$ —— SSS。"
                    }
                  ]
                },
                {
                  "type": "p",
                  "en": "Shared sides (and vertical angles) are the most common \"hidden\" congruent pieces in proofs; always look for them first.",
                  "zh": "公共边（以及对顶角）是证明中最常见的\"隐藏\"全等元素，做题时应首先寻找它们。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is NOT a valid triangle congruence criterion?",
                "zh": "下列哪一项不是有效的三角形全等判定？"
              },
              "choices": [
                "SSA",
                "SAS",
                "ASA",
                "AAS"
              ],
              "answer": 0,
              "explanation": {
                "en": "SSA fails because two different triangles can share two sides and a non-included angle (the \"swinging door\" ambiguity). SAS, ASA, and AAS are all valid.",
                "zh": "SSA 不成立，因为两个不同的三角形可以有相同的两边和非夹角（\"摆门\"型的不确定性）。SAS、ASA、AAS 都有效。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $\\triangle ABC \\cong \\triangle XYZ$, which angle corresponds to $\\angle B$?",
                "zh": "若 $\\triangle ABC \\cong \\triangle XYZ$，与 $\\angle B$ 对应的角是哪一个？"
              },
              "choices": [
                "$\\angle Y$",
                "$\\angle X$",
                "$\\angle Z$",
                "Cannot tell"
              ],
              "answer": 0,
              "explanation": {
                "en": "Congruence statements list corresponding vertices in order: $A \\leftrightarrow X$, $B \\leftrightarrow Y$, $C \\leftrightarrow Z$. So $\\angle B \\cong \\angle Y$.",
                "zh": "全等式按顺序列出对应顶点：$A \\leftrightarrow X$，$B \\leftrightarrow Y$，$C \\leftrightarrow Z$。所以 $\\angle B \\cong \\angle Y$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two right triangles have congruent hypotenuses and one pair of congruent legs. Which criterion proves them congruent?",
                "zh": "两个直角三角形的斜边全等，且有一对直角边全等。用哪种判定可证它们全等？"
              },
              "choices": [
                "HL",
                "SSS",
                "ASA",
                "AAS"
              ],
              "answer": 0,
              "explanation": {
                "en": "Hypotenuse-Leg (HL) is exactly this situation, valid only for right triangles. (You could also get the third side by the Pythagorean theorem and use SSS, which is why HL works.)",
                "zh": "斜边-直角边（HL）正是这种情形，只对直角三角形有效。（也可以用勾股定理求出第三边再用 SSS，这正是 HL 成立的原因。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In $\\triangle ABC$ and $\\triangle DEF$: $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and $\\overline{BC} \\cong \\overline{EF}$. Which criterion applies?",
                "zh": "在 $\\triangle ABC$ 与 $\\triangle DEF$ 中：$\\angle A \\cong \\angle D$，$\\angle B \\cong \\angle E$，$\\overline{BC} \\cong \\overline{EF}$。应使用哪种判定？"
              },
              "choices": [
                "AAS",
                "ASA",
                "SAS",
                "SSS"
              ],
              "answer": 0,
              "explanation": {
                "en": "Side $\\overline{BC}$ is not between $\\angle A$ and $\\angle B$ (the included side would be $\\overline{AB}$), so this is two angles and a non-included side: AAS.",
                "zh": "边 $\\overline{BC}$ 不在 $\\angle A$ 与 $\\angle B$ 之间（夹边应是 $\\overline{AB}$），所以是两角及非夹边：AAS。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Segments $\\overline{AC}$ and $\\overline{BD}$ bisect each other at $M$. Which pieces prove $\\triangle AMB \\cong \\triangle CMD$?",
                "zh": "线段 $\\overline{AC}$ 与 $\\overline{BD}$ 在 $M$ 处互相平分。用哪些条件可证 $\\triangle AMB \\cong \\triangle CMD$？"
              },
              "choices": [
                "$AM \\cong CM$, $BM \\cong DM$, and vertical angles $\\angle AMB \\cong \\angle CMD$ — SAS",
                "$AM \\cong CM$, $BM \\cong DM$, $AB \\cong CD$ — SSS is the only way",
                "Two pairs of angles — AA",
                "They cannot be proven congruent"
              ],
              "answer": 0,
              "explanation": {
                "en": "Bisecting gives the two pairs of congruent segments, and the angles at $M$ are vertical angles, which are congruent and included between those sides. That is SAS. (We are not given $AB \\cong CD$, so SSS is not available directly.)",
                "zh": "互相平分给出两对全等线段，$M$ 处的角是对顶角，全等且恰为这两边的夹角，这就是 SAS。（$AB \\cong CD$ 并非已知，不能直接用 SSS。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$\\triangle ABC \\cong \\triangle DEF$, $AB = 3x - 5$, and $DE = 19$. Find $x$. Give a whole number.",
                "zh": "$\\triangle ABC \\cong \\triangle DEF$，$AB = 3x - 5$，$DE = 19$。求 $x$。请填一个整数。"
              },
              "answer": "8",
              "explanation": {
                "en": "Corresponding sides of congruent triangles are equal: $3x - 5 = 19$, so $3x = 24$ and $x = 8$.",
                "zh": "全等三角形的对应边相等：$3x - 5 = 19$，所以 $3x = 24$，$x = 8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two triangles have all three pairs of corresponding angles congruent (AAA). What can you conclude?",
                "zh": "两个三角形的三对对应角都全等（AAA）。可以得出什么结论？"
              },
              "choices": [
                "They have the same shape but not necessarily the same size",
                "They are congruent",
                "They are congruent only if they are right triangles",
                "Nothing at all"
              ],
              "answer": 0,
              "explanation": {
                "en": "AAA guarantees similarity, not congruence: a triangle and a scaled-up copy have identical angles but different side lengths. This is why AAA is missing from the congruence list.",
                "zh": "AAA 只能保证相似而非全等：一个三角形与它的放大版角完全相同，但边长不同。这就是全等判定中没有 AAA 的原因。"
              }
            }
          ]
        },
        {
          "id": "cpctc-proofs",
          "title": "CPCTC and Proof Strategies",
          "titleZh": "CPCTC 与证明策略",
          "content": [
            {
              "type": "h2",
              "en": "After Congruence: CPCTC",
              "zh": "全等之后：CPCTC"
            },
            {
              "type": "p",
              "en": "CPCTC stands for \"Corresponding Parts of Congruent Triangles are Congruent.\" It is the payoff step: once two triangles are proven congruent by SSS, SAS, ASA, AAS, or HL, every remaining pair of corresponding sides and angles is automatically congruent. Many proofs about segments or angles are really triangle proofs in disguise: to show two segments are congruent, find (or create) two triangles that contain them as corresponding parts, prove the triangles congruent, then finish with CPCTC.",
              "zh": "CPCTC 的意思是\"全等三角形的对应部分全等\"。它是收获成果的一步：一旦用 SSS、SAS、ASA、AAS 或 HL 证明了两个三角形全等，其余每一对对应边和对应角就自动全等。许多关于线段或角的证明实际上是伪装的三角形证明：要证两条线段全等，先找到（或构造）包含它们作为对应部分的两个三角形，证明三角形全等，再用 CPCTC 收尾。"
            },
            {
              "type": "note",
              "en": "CPCTC can only be used AFTER a triangle congruence has been established. Using CPCTC as a reason before stating that the triangles are congruent is the single most common proof error in this unit.",
              "zh": "CPCTC 只能在三角形全等已被证明之后使用。在写出三角形全等之前就用 CPCTC 作理由，是本单元最常见的证明错误。"
            },
            {
              "type": "h3",
              "en": "A Four-Step Game Plan",
              "zh": "四步作战计划"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "1. Mark the diagram with every given congruence.",
                  "zh": "1. 把每个已知的全等关系标注在图上。"
                },
                {
                  "en": "2. Hunt for hidden pieces: shared sides (Reflexive), vertical angles, midpoints, bisectors, parallel-line angles.",
                  "zh": "2. 寻找隐藏元素：公共边（自反性）、对顶角、中点、平分线、平行线产生的角。"
                },
                {
                  "en": "3. Match the marked pieces to SSS / SAS / ASA / AAS / HL and state the congruence with vertices in corresponding order.",
                  "zh": "3. 将标注的元素与 SSS / SAS / ASA / AAS / HL 对应，并按对应顶点顺序写出全等式。"
                },
                {
                  "en": "4. Use CPCTC to extract the side or angle you actually need.",
                  "zh": "4. 用 CPCTC 得到真正需要的边或角。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A full CPCTC proof",
                "zh": "例题 1：完整的 CPCTC 证明"
              },
              "problem": {
                "en": "Given: $\\overline{AB} \\parallel \\overline{DC}$ and $\\overline{AB} \\cong \\overline{DC}$, with diagonal $\\overline{AC}$ drawn. Prove: $\\angle B \\cong \\angle D$.",
                "zh": "已知：$\\overline{AB} \\parallel \\overline{DC}$，$\\overline{AB} \\cong \\overline{DC}$，并作对角线 $\\overline{AC}$。求证：$\\angle B \\cong \\angle D$。"
              },
              "solution": [
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "1. $\\overline{AB} \\parallel \\overline{DC}$; $\\overline{AB} \\cong \\overline{DC}$ — Given.",
                      "zh": "1. $\\overline{AB} \\parallel \\overline{DC}$；$\\overline{AB} \\cong \\overline{DC}$ —— 已知。"
                    },
                    {
                      "en": "2. $\\angle BAC \\cong \\angle DCA$ — Alternate interior angles ($\\overline{AC}$ is a transversal).",
                      "zh": "2. $\\angle BAC \\cong \\angle DCA$ —— 内错角（$\\overline{AC}$ 是截线）。"
                    },
                    {
                      "en": "3. $\\overline{AC} \\cong \\overline{CA}$ — Reflexive Property.",
                      "zh": "3. $\\overline{AC} \\cong \\overline{CA}$ —— 自反性。"
                    },
                    {
                      "en": "4. $\\triangle BAC \\cong \\triangle DCA$ — SAS (steps 1, 2, 3).",
                      "zh": "4. $\\triangle BAC \\cong \\triangle DCA$ —— SAS（步骤 1、2、3）。"
                    },
                    {
                      "en": "5. $\\angle B \\cong \\angle D$ — CPCTC.",
                      "zh": "5. $\\angle B \\cong \\angle D$ —— CPCTC。"
                    }
                  ]
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Planning backward",
                "zh": "例题 2：逆向规划"
              },
              "problem": {
                "en": "You must prove $\\overline{PS} \\cong \\overline{RS}$, given that $\\overline{QS}$ bisects $\\angle PQR$ and $\\overline{QP} \\cong \\overline{QR}$. Outline the plan.",
                "zh": "已知 $\\overline{QS}$ 平分 $\\angle PQR$ 且 $\\overline{QP} \\cong \\overline{QR}$，要证明 $\\overline{PS} \\cong \\overline{RS}$。请列出证明思路。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Work backward: $\\overline{PS}$ and $\\overline{RS}$ would follow from CPCTC if $\\triangle PQS \\cong \\triangle RQS$. What do we have for those triangles? $\\overline{QP} \\cong \\overline{QR}$ (given), $\\angle PQS \\cong \\angle RQS$ (definition of angle bisector), and $\\overline{QS} \\cong \\overline{QS}$ (Reflexive). That is two sides and the included angle: SAS. Then CPCTC delivers $\\overline{PS} \\cong \\overline{RS}$.",
                  "zh": "逆向思考：若 $\\triangle PQS \\cong \\triangle RQS$，则由 CPCTC 可得 $\\overline{PS} \\cong \\overline{RS}$。这两个三角形有哪些条件？$\\overline{QP} \\cong \\overline{QR}$（已知），$\\angle PQS \\cong \\angle RQS$（角平分线的定义），$\\overline{QS} \\cong \\overline{QS}$（自反性）。两边及夹角：SAS。随后用 CPCTC 得 $\\overline{PS} \\cong \\overline{RS}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "CPCTC may be used in a proof:",
                "zh": "在证明中，CPCTC 可以在什么时候使用？"
              },
              "choices": [
                "Only after two triangles have been proven congruent",
                "As the first step, to establish congruence",
                "Only in right triangles",
                "Whenever two triangles look congruent"
              ],
              "answer": 0,
              "explanation": {
                "en": "CPCTC extracts corresponding parts FROM an established triangle congruence; it cannot create the congruence itself.",
                "zh": "CPCTC 是从已确立的三角形全等中提取对应部分，它本身不能建立全等。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which hidden congruence is justified by the Reflexive Property in a proof about $\\triangle ABD$ and $\\triangle CBD$?",
                "zh": "在关于 $\\triangle ABD$ 与 $\\triangle CBD$ 的证明中，哪个隐藏的全等关系由自反性给出？"
              },
              "choices": [
                "$\\overline{BD} \\cong \\overline{BD}$",
                "$\\overline{AB} \\cong \\overline{CB}$",
                "$\\angle A \\cong \\angle C$",
                "$\\overline{AD} \\cong \\overline{CD}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\overline{BD}$ belongs to both triangles, so it is congruent to itself by the Reflexive Property. The other pairs would need to be given or proven.",
                "zh": "$\\overline{BD}$ 同属两个三角形，由自反性与自身全等。其余各对需要已知或另行证明。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\triangle PQS \\cong \\triangle RQS$ has been proven. Which statement follows by CPCTC?",
                "zh": "已证 $\\triangle PQS \\cong \\triangle RQS$。由 CPCTC 可得下列哪个结论？"
              },
              "choices": [
                "$\\angle P \\cong \\angle R$",
                "$\\angle P \\cong \\angle Q$",
                "$\\overline{PQ} \\cong \\overline{QS}$",
                "$\\triangle PQS$ is isosceles"
              ],
              "answer": 0,
              "explanation": {
                "en": "Matching the vertex order $P \\leftrightarrow R$, $Q \\leftrightarrow Q$, $S \\leftrightarrow S$ shows $\\angle P$ corresponds to $\\angle R$. The other options pair non-corresponding parts.",
                "zh": "按顶点对应 $P \\leftrightarrow R$、$Q \\leftrightarrow Q$、$S \\leftrightarrow S$，$\\angle P$ 对应 $\\angle R$。其他选项配对的不是对应部分。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To prove two segments congruent using CPCTC, the best first move is to:",
                "zh": "要用 CPCTC 证明两条线段全等，最好的第一步是："
              },
              "choices": [
                "Find two triangles that contain the segments as corresponding parts",
                "Measure the segments in the diagram",
                "State CPCTC immediately",
                "Assume the segments are congruent"
              ],
              "answer": 0,
              "explanation": {
                "en": "The CPCTC strategy is: locate triangles containing the target parts, prove those triangles congruent, then conclude with CPCTC. Diagrams are never a measurement source.",
                "zh": "CPCTC 策略是：找到包含目标元素的三角形，证明它们全等，再用 CPCTC 得出结论。图形从来不能作为度量依据。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$\\triangle ABD \\cong \\triangle CBD$, $m\\angle A = (2x + 10)^\\circ$, and $m\\angle C = 58^\\circ$. Find $x$. Give a whole number.",
                "zh": "$\\triangle ABD \\cong \\triangle CBD$，$m\\angle A = (2x + 10)^\\circ$，$m\\angle C = 58^\\circ$。求 $x$。请填一个整数。"
              },
              "answer": "24",
              "explanation": {
                "en": "By CPCTC, $\\angle A \\cong \\angle C$, so $2x + 10 = 58$, giving $2x = 48$ and $x = 24$.",
                "zh": "由 CPCTC，$\\angle A \\cong \\angle C$，所以 $2x + 10 = 58$，得 $2x = 48$，$x = 24$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Given $\\overline{QS} \\perp \\overline{PR}$ at $S$, where $S$ is the midpoint of $\\overline{PR}$. Which criterion proves $\\triangle PQS \\cong \\triangle RQS$?",
                "zh": "已知 $\\overline{QS} \\perp \\overline{PR}$ 于 $S$，且 $S$ 是 $\\overline{PR}$ 的中点。用哪种判定可证 $\\triangle PQS \\cong \\triangle RQS$？"
              },
              "choices": [
                "SAS, using $PS \\cong RS$, right angles at $S$, and shared side $\\overline{QS}$",
                "AAA, using three pairs of angles",
                "SSA, using two sides and a non-included angle",
                "It cannot be proven"
              ],
              "answer": 0,
              "explanation": {
                "en": "The midpoint gives $\\overline{PS} \\cong \\overline{RS}$, perpendicularity gives congruent right angles at $S$ (which are included between the sides), and $\\overline{QS}$ is shared. Side-angle-side. CPCTC would then give $\\overline{QP} \\cong \\overline{QR}$: this is why points on a perpendicular bisector are equidistant from the endpoints.",
                "zh": "中点给出 $\\overline{PS} \\cong \\overline{RS}$，垂直给出 $S$ 处的全等直角（且是两边的夹角），$\\overline{QS}$ 为公共边，即 SAS。再由 CPCTC 得 $\\overline{QP} \\cong \\overline{QR}$：这正是垂直平分线上的点到两端点距离相等的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A proof shows $\\triangle ABC \\cong \\triangle DEF$, then uses CPCTC to conclude $BC = EF$. If $BC = 4x - 3$ and $EF = 2x + 9$, find $BC$. Give a whole number.",
                "zh": "某证明先证 $\\triangle ABC \\cong \\triangle DEF$，再由 CPCTC 得 $BC = EF$。若 $BC = 4x - 3$，$EF = 2x + 9$，求 $BC$。请填一个整数。"
              },
              "answer": "21",
              "explanation": {
                "en": "$4x - 3 = 2x + 9$ gives $2x = 12$, so $x = 6$ and $BC = 4(6) - 3 = 21$. Check: $EF = 2(6) + 9 = 21$ as well.",
                "zh": "$4x - 3 = 2x + 9$ 得 $2x = 12$，所以 $x = 6$，$BC = 4(6) - 3 = 21$。检验：$EF = 2(6) + 9 = 21$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "relationships-within-triangles",
      "title": "Unit 6: Relationships Within Triangles",
      "titleZh": "第六单元：三角形中的关系",
      "lessons": [
        {
          "id": "bisectors-medians-altitudes",
          "title": "Bisectors, Medians, and Altitudes",
          "titleZh": "垂直平分线、角平分线、中线与高",
          "content": [
            {
              "type": "h2",
              "en": "Special Segments in a Triangle",
              "zh": "三角形中的特殊线段"
            },
            {
              "type": "p",
              "en": "Every triangle contains four families of special segments: perpendicular bisectors of the sides, angle bisectors, medians, and altitudes. Each family has three members — one for each side or vertex — and in every case the three segments meet at a single point, called a point of concurrency. Each point of concurrency has its own name and its own special property, and keeping them straight is the main goal of this lesson.",
              "zh": "每个三角形都包含四类特殊线段：各边的垂直平分线、角平分线、中线和高。每一类都有三条——对应三条边或三个顶点——并且每一类的三条线段都交于同一点，这个点叫做共点（交点）。每个交点都有自己的名称和特殊性质，弄清它们正是本课的核心目标。"
            },
            {
              "type": "h3",
              "en": "Perpendicular Bisectors and the Circumcenter",
              "zh": "垂直平分线与外心"
            },
            {
              "type": "p",
              "en": "The perpendicular bisector of a segment is the line that is perpendicular to the segment at its midpoint. The Perpendicular Bisector Theorem says: if a point is on the perpendicular bisector of a segment, then it is equidistant from the two endpoints. The converse is also true: any point equidistant from the endpoints lies on the perpendicular bisector.",
              "zh": "线段的垂直平分线是在中点处与线段垂直的直线。垂直平分线定理指出：若一点在线段的垂直平分线上，则它到线段两个端点的距离相等。其逆定理也成立：到两端点距离相等的点必在垂直平分线上。"
            },
            {
              "type": "p",
              "en": "Here is a quick paragraph proof of the theorem. Suppose line $\\ell$ is the perpendicular bisector of $\\overline{XY}$, meeting it at midpoint $M$, and let $P$ be any point on $\\ell$. Statements and reasons: $XM = YM$ (definition of midpoint); $\\angle PMX \\cong \\angle PMY$ (both are right angles, since $\\ell \\perp \\overline{XY}$); $PM = PM$ (Reflexive Property). Therefore $\\triangle PMX \\cong \\triangle PMY$ by SAS, and $PX = PY$ because corresponding parts of congruent triangles are congruent (CPCTC).",
              "zh": "下面给出该定理的一个简短的段落式证明。设直线 $\\ell$ 是 $\\overline{XY}$ 的垂直平分线，交于中点 $M$，并设 $P$ 是 $\\ell$ 上任意一点。命题与理由：$XM = YM$（中点的定义）；$\\angle PMX \\cong \\angle PMY$（因为 $\\ell \\perp \\overline{XY}$，两者都是直角）；$PM = PM$（自反性质）。因此由 SAS 得 $\\triangle PMX \\cong \\triangle PMY$，再由全等三角形对应部分相等（CPCTC）得 $PX = PY$。"
            },
            {
              "type": "p",
              "en": "The three perpendicular bisectors of the sides of a triangle meet at the circumcenter, a point equidistant from all three vertices. That common distance is the radius of the circumscribed circle, the circle through all three vertices. The circumcenter lies inside an acute triangle, on the hypotenuse (at its midpoint) for a right triangle, and outside an obtuse triangle.",
              "zh": "三角形三边的垂直平分线交于外心，外心到三个顶点的距离相等。这个公共距离就是外接圆（经过三个顶点的圆）的半径。锐角三角形的外心在三角形内部，直角三角形的外心在斜边上（即斜边中点），钝角三角形的外心在三角形外部。"
            },
            {
              "type": "h3",
              "en": "Angle Bisectors and the Incenter",
              "zh": "角平分线与内心"
            },
            {
              "type": "p",
              "en": "The Angle Bisector Theorem is the mirror image of the perpendicular bisector theorem: if a point is on the bisector of an angle, then it is equidistant from the two sides of the angle, where distance to a side means the length of the perpendicular segment to that side. The three angle bisectors of a triangle meet at the incenter, which is equidistant from all three sides. The incenter is the center of the inscribed circle, the circle inside the triangle tangent to all three sides, and it always lies inside the triangle.",
              "zh": "角平分线定理与垂直平分线定理互为镜像：若一点在角的平分线上，则它到角两边的距离相等，这里\"到边的距离\"指到该边的垂线段的长度。三角形的三条角平分线交于内心，内心到三条边的距离相等。内心是内切圆（在三角形内部且与三边都相切的圆）的圆心，它总是位于三角形内部。"
            },
            {
              "type": "h3",
              "en": "Medians and the Centroid",
              "zh": "中线与重心"
            },
            {
              "type": "p",
              "en": "A median joins a vertex to the midpoint of the opposite side. The three medians meet at the centroid, the balance point of the triangle. The Centroid Theorem says the centroid sits two-thirds of the way from each vertex to the midpoint of the opposite side, so it divides every median in a $2:1$ ratio, with the longer piece next to the vertex. In coordinates the centroid is simply the average of the three vertices:",
              "zh": "中线连接一个顶点与对边的中点。三条中线交于重心，即三角形的平衡点。重心定理指出：重心位于从每个顶点到对边中点的三分之二处，因此它把每条中线分成 $2:1$ 的两段，靠近顶点的一段较长。在坐标系中，重心就是三个顶点坐标的平均值："
            },
            {
              "type": "math",
              "tex": "G = \\left( \\frac{x_1 + x_2 + x_3}{3},\\; \\frac{y_1 + y_2 + y_3}{3} \\right)"
            },
            {
              "type": "h3",
              "en": "Altitudes, the Orthocenter, and Midsegments",
              "zh": "高、垂心与中位线"
            },
            {
              "type": "p",
              "en": "An altitude is the perpendicular segment from a vertex to the line containing the opposite side. The three altitudes (or their extensions) meet at the orthocenter. Like the circumcenter, its location depends on the triangle: inside an acute triangle, at the right-angle vertex of a right triangle, and outside an obtuse triangle. Note that in an obtuse triangle, two of the altitudes fall outside the triangle, which is why we may need to extend the sides.",
              "zh": "高是从顶点向对边所在直线所作的垂线段。三条高（或其延长线）交于垂心。与外心类似，垂心的位置取决于三角形的类型：锐角三角形的垂心在内部，直角三角形的垂心在直角顶点处，钝角三角形的垂心在外部。注意在钝角三角形中，有两条高落在三角形外部，因此可能需要延长边。"
            },
            {
              "type": "p",
              "en": "A midsegment joins the midpoints of two sides. The Triangle Midsegment Theorem says a midsegment is parallel to the third side and exactly half its length. The three midsegments split the triangle into four congruent triangles, each similar to the original.",
              "zh": "中位线连接三角形两边的中点。三角形中位线定理指出：中位线平行于第三边，且长度恰为第三边的一半。三条中位线把三角形分成四个全等的小三角形，每个都与原三角形相似。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Circumcenter — perpendicular bisectors — equidistant from the vertices.",
                  "zh": "外心——垂直平分线的交点——到三个顶点距离相等。"
                },
                {
                  "en": "Incenter — angle bisectors — equidistant from the sides.",
                  "zh": "内心——角平分线的交点——到三条边距离相等。"
                },
                {
                  "en": "Centroid — medians — divides each median $2:1$ from the vertex.",
                  "zh": "重心——中线的交点——从顶点起把每条中线按 $2:1$ 分割。"
                },
                {
                  "en": "Orthocenter — altitudes — no equidistance property.",
                  "zh": "垂心——高的交点——没有等距性质。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: problems love to swap the \"equidistant\" facts. Remember the rhyme of first letters: the Circumcenter is equidistant from the Corners (vertices), and the Incenter is equidistant from the Insides of the walls (sides). Also, in the $2:1$ centroid ratio, the vertex-to-centroid piece is the long one: vertex-to-centroid is $\\frac{2}{3}$ of the median, centroid-to-midpoint is $\\frac{1}{3}$.",
              "zh": "考试提示：题目最爱把两个\"等距\"性质互换来设坑。记住：外心到顶点等距，内心到边等距。另外，在重心的 $2:1$ 比例中，顶点到重心的一段是较长的一段：顶点到重心占中线的 $\\frac{2}{3}$，重心到中点占 $\\frac{1}{3}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Centroid from coordinates",
                "zh": "例题 1：用坐标求重心"
              },
              "problem": {
                "en": "Triangle $ABC$ has vertices $A(2, 8)$, $B(6, 2)$, and $C(-2, -1)$. Find the centroid $G$, then find the length of the segment from $A$ to $G$ given that the median from $A$ meets $\\overline{BC}$ at its midpoint $M$.",
                "zh": "三角形 $ABC$ 的顶点为 $A(2, 8)$、$B(6, 2)$、$C(-2, -1)$。求重心 $G$；已知从 $A$ 出发的中线交 $\\overline{BC}$ 于中点 $M$，再求 $A$ 到 $G$ 的长度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The centroid is the average of the vertices:",
                  "zh": "重心是三个顶点坐标的平均值："
                },
                {
                  "type": "math",
                  "tex": "G = \\left( \\frac{2 + 6 + (-2)}{3},\\; \\frac{8 + 2 + (-1)}{3} \\right) = (2, 3)"
                },
                {
                  "type": "p",
                  "en": "The midpoint of $\\overline{BC}$ is $M = \\left( \\frac{6 + (-2)}{2}, \\frac{2 + (-1)}{2} \\right) = \\left(2, \\frac{1}{2}\\right)$. The full median has length $AM = \\left| 8 - \\frac{1}{2} \\right| = \\frac{15}{2}$ since $A$ and $M$ share $x$-coordinate $2$. By the Centroid Theorem, $AG = \\frac{2}{3} AM = \\frac{2}{3} \\cdot \\frac{15}{2} = 5$ units. Check: $G = (2, 3)$ really does lie on the vertical segment from $A(2,8)$ to $M(2, \\frac{1}{2})$, and $AG = 8 - 3 = 5$. ✓",
                  "zh": "$\\overline{BC}$ 的中点为 $M = \\left( \\frac{6 + (-2)}{2}, \\frac{2 + (-1)}{2} \\right) = \\left(2, \\frac{1}{2}\\right)$。因为 $A$ 与 $M$ 的横坐标都是 $2$，整条中线的长度为 $AM = \\left| 8 - \\frac{1}{2} \\right| = \\frac{15}{2}$。由重心定理，$AG = \\frac{2}{3} AM = \\frac{2}{3} \\cdot \\frac{15}{2} = 5$ 个单位。检验：$G = (2, 3)$ 确实在从 $A(2,8)$ 到 $M(2, \\frac{1}{2})$ 的竖直线段上，且 $AG = 8 - 3 = 5$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Midsegment with algebra",
                "zh": "例题 2：结合代数的中位线"
              },
              "problem": {
                "en": "In triangle $ABC$, points $D$ and $E$ are the midpoints of $\\overline{AB}$ and $\\overline{AC}$, so $\\overline{DE}$ is a midsegment. If $DE = 3x + 2$ and $BC = 5x + 10$, find $x$, $DE$, and $BC$.",
                "zh": "在三角形 $ABC$ 中，$D$、$E$ 分别是 $\\overline{AB}$ 和 $\\overline{AC}$ 的中点，因此 $\\overline{DE}$ 是一条中位线。若 $DE = 3x + 2$，$BC = 5x + 10$，求 $x$、$DE$ 和 $BC$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By the Midsegment Theorem, $DE = \\frac{1}{2} BC$, so $2 \\cdot DE = BC$:",
                  "zh": "由中位线定理，$DE = \\frac{1}{2} BC$，即 $2 \\cdot DE = BC$："
                },
                {
                  "type": "math",
                  "tex": "2(3x + 2) = 5x + 10 \\;\\Rightarrow\\; 6x + 4 = 5x + 10 \\;\\Rightarrow\\; x = 6"
                },
                {
                  "type": "p",
                  "en": "Then $DE = 3(6) + 2 = 20$ units and $BC = 5(6) + 10 = 40$ units. Check: $20$ is half of $40$. ✓ The midsegment is also parallel to $\\overline{BC}$, a fact often needed to justify angle relationships.",
                  "zh": "于是 $DE = 3(6) + 2 = 20$ 个单位，$BC = 5(6) + 10 = 40$ 个单位。检验：$20$ 恰是 $40$ 的一半。✓ 中位线还平行于 $\\overline{BC}$，这一事实常用来说明角的关系。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which point of concurrency is equidistant from the three vertices of a triangle?",
                "zh": "哪个交点到三角形三个顶点的距离相等？"
              },
              "choices": [
                "Incenter",
                "Centroid",
                "Circumcenter",
                "Orthocenter"
              ],
              "answer": 2,
              "explanation": {
                "en": "The circumcenter, where the perpendicular bisectors meet, is equidistant from the vertices — that is why a circle centered there passes through all three vertices. The incenter is tempting, but it is equidistant from the sides, not the vertices.",
                "zh": "外心是三条垂直平分线的交点，到三个顶点距离相等——正因如此，以它为圆心的圆能经过三个顶点。内心很有迷惑性，但它是到三条边（而非顶点）距离相等。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Triangle $PQR$ has vertices $P(0, 0)$, $Q(9, 0)$, and $R(0, 6)$. Find the centroid. Give your answer as coordinates like (2,5).",
                "zh": "三角形 $PQR$ 的顶点为 $P(0, 0)$、$Q(9, 0)$、$R(0, 6)$。求重心。请以坐标形式作答，例如 (2,5)。"
              },
              "answer": "(3,2)",
              "accept": [
                "(3, 2)",
                "3,2"
              ],
              "explanation": {
                "en": "The centroid is the average of the vertices: $\\left( \\frac{0+9+0}{3}, \\frac{0+0+6}{3} \\right) = (3, 2)$.",
                "zh": "重心是三个顶点坐标的平均值：$\\left( \\frac{0+9+0}{3}, \\frac{0+0+6}{3} \\right) = (3, 2)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In triangle $ABC$, the median from $A$ meets $\\overline{BC}$ at $M$, and the centroid is $G$. If $AG = 12$, what is $GM$?",
                "zh": "在三角形 $ABC$ 中，从 $A$ 出发的中线交 $\\overline{BC}$ 于 $M$，重心为 $G$。若 $AG = 12$，求 $GM$。"
              },
              "choices": [
                "$4$",
                "$6$",
                "$8$",
                "$24$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The centroid divides each median in a $2:1$ ratio with the longer piece at the vertex, so $GM = \\frac{1}{2} AG = 6$. Choosing $24$ reverses the ratio, treating the vertex piece as the short one.",
                "zh": "重心把每条中线按 $2:1$ 分割，靠近顶点的一段较长，所以 $GM = \\frac{1}{2} AG = 6$。选 $24$ 是把比例弄反了，误以为顶点一侧是短的一段。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A midsegment of a triangle is parallel to a side of length $17$. Find the length of the midsegment. Give a decimal or a fraction.",
                "zh": "三角形的一条中位线平行于长为 $17$ 的边。求这条中位线的长度。请填一个小数或分数。"
              },
              "answer": "8.5",
              "accept": [
                "17/2",
                "8.50"
              ],
              "explanation": {
                "en": "By the Midsegment Theorem, the midsegment is half the parallel side: $\\frac{17}{2} = 8.5$ units.",
                "zh": "由中位线定理，中位线等于所平行边的一半：$\\frac{17}{2} = 8.5$ 个单位。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Point $P$ lies on the perpendicular bisector of $\\overline{AB}$, with $PA = 3x - 5$ and $PB = 2x + 7$. Find $x$.",
                "zh": "点 $P$ 在 $\\overline{AB}$ 的垂直平分线上，$PA = 3x - 5$，$PB = 2x + 7$。求 $x$。"
              },
              "choices": [
                "$2$",
                "$6$",
                "$12$",
                "$24$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the Perpendicular Bisector Theorem, $PA = PB$: $3x - 5 = 2x + 7$, so $x = 12$. The distractor $2$ comes from the sign error $3x + 5 = 2x + 7$.",
                "zh": "由垂直平分线定理，$PA = PB$：$3x - 5 = 2x + 7$，解得 $x = 12$。选 $2$ 的同学通常是把符号弄错，解了 $3x + 5 = 2x + 7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a proof, $D$ lies on the bisector of $\\angle ABC$, with $\\overline{DE} \\perp \\overrightarrow{BA}$ and $\\overline{DF} \\perp \\overrightarrow{BC}$. Which theorem justifies the statement $DE = DF$?",
                "zh": "在一个证明中，$D$ 在 $\\angle ABC$ 的平分线上，$\\overline{DE} \\perp \\overrightarrow{BA}$，$\\overline{DF} \\perp \\overrightarrow{BC}$。哪条定理可以作为 $DE = DF$ 这一步的理由？"
              },
              "choices": [
                "Perpendicular Bisector Theorem",
                "Midsegment Theorem",
                "Converse of the Angle Bisector Theorem",
                "Angle Bisector Theorem"
              ],
              "answer": 3,
              "explanation": {
                "en": "A point on an angle bisector is equidistant from the sides of the angle — that is the Angle Bisector Theorem. The converse runs the other way: it starts from $DE = DF$ and concludes $D$ is on the bisector, so it does not justify this step.",
                "zh": "角平分线上的点到角两边的距离相等——这正是角平分线定理。逆定理方向相反：它从 $DE = DF$ 出发推出 $D$ 在平分线上，因此不能作为这一步的理由。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a right triangle, where is the orthocenter located?",
                "zh": "直角三角形的垂心位于何处？"
              },
              "choices": [
                "Inside the triangle",
                "At the vertex of the right angle",
                "Outside the triangle",
                "At the midpoint of the hypotenuse"
              ],
              "answer": 1,
              "explanation": {
                "en": "The two legs are themselves altitudes, and they meet at the right-angle vertex, so the orthocenter sits exactly there. The midpoint of the hypotenuse is tempting because that is where the circumcenter of a right triangle lies.",
                "zh": "两条直角边本身就是两条高，它们相交于直角顶点，所以垂心就在那里。斜边中点很有迷惑性，因为那是直角三角形外心的位置。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Triangle $ABC$ has vertices $A(1, 2)$, $B(5, 4)$, and $C(3, 8)$. Find the length of the median from $A$ to the midpoint of $\\overline{BC}$. Give a whole number.",
                "zh": "三角形 $ABC$ 的顶点为 $A(1, 2)$、$B(5, 4)$、$C(3, 8)$。求从 $A$ 到 $\\overline{BC}$ 中点的中线长度。请填一个整数。"
              },
              "answer": "5",
              "explanation": {
                "en": "The midpoint of $\\overline{BC}$ is $M = \\left( \\frac{5+3}{2}, \\frac{4+8}{2} \\right) = (4, 6)$. Then $AM = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ units.",
                "zh": "$\\overline{BC}$ 的中点为 $M = \\left( \\frac{5+3}{2}, \\frac{4+8}{2} \\right) = (4, 6)$。于是 $AM = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ 个单位。"
              }
            }
          ]
        },
        {
          "id": "triangle-inequalities",
          "title": "Inequalities in Triangles",
          "titleZh": "三角形中的不等关系",
          "content": [
            {
              "type": "h2",
              "en": "When Equality Is Not Enough",
              "zh": "当等式不够用的时候"
            },
            {
              "type": "p",
              "en": "So far most of your geometric reasoning has ended with an equation: two segments are congruent, two angles have equal measure. But many powerful conclusions are inequalities. Can three given lengths even form a triangle? Which angle of a triangle is largest? If a gate swings open wider, how much farther apart are its ends? Inequality theorems answer all of these, and they show up constantly on tests as \"which is possible?\" and \"put these in order\" questions.",
              "zh": "到目前为止，你的几何推理大多以等式收尾：两条线段全等，两个角度数相等。但许多有力的结论其实是不等式。给定的三条长度能否构成三角形？三角形中哪个角最大？大门开得更大时，门端之间的距离会增加多少？不等式定理回答了所有这些问题，而且它们在考试中频频以\"哪种情况可能？\"和\"按大小排序\"的形式出现。"
            },
            {
              "type": "h3",
              "en": "The Triangle Inequality Theorem",
              "zh": "三角形不等式定理"
            },
            {
              "type": "p",
              "en": "The Triangle Inequality Theorem says the sum of the lengths of any two sides of a triangle is greater than the length of the third side. Intuitively, the straight path from one vertex to another is shorter than the detour through the third vertex. To check whether three lengths can form a triangle, you only need to check the two smallest against the largest: if $a \\le b \\le c$, the lengths work exactly when $a + b > c$.",
              "zh": "三角形不等式定理指出：三角形任意两边之和大于第三边。直观地说，从一个顶点直接走到另一个顶点，比绕道第三个顶点更短。要判断三条长度能否构成三角形，只需用两条较短边之和与最长边比较：若 $a \\le b \\le c$，则当且仅当 $a + b > c$ 时能构成三角形。"
            },
            {
              "type": "p",
              "en": "The theorem also pins down the possible lengths of a third side. If two sides have lengths $a$ and $b$, the third side $x$ must satisfy",
              "zh": "该定理还确定了第三边的取值范围。若两边长为 $a$ 和 $b$，则第三边 $x$ 必须满足"
            },
            {
              "type": "math",
              "tex": "|a - b| < x < a + b"
            },
            {
              "type": "h3",
              "en": "Ordering Sides and Angles; the Exterior Angle Inequality",
              "zh": "边角的大小排序与外角不等式"
            },
            {
              "type": "p",
              "en": "Within one triangle, sides and angles come in matched pairs: the longest side is opposite the largest angle, and the shortest side is opposite the smallest angle. Both directions are theorems. If $BC > AB$ in triangle $ABC$, then $m\\angle A > m\\angle C$ (the angle opposite the longer side is larger), and conversely. So once you know all three angles, you can rank the sides without measuring, and vice versa — always match each side with its opposite angle, the angle at the vertex the side does not touch.",
              "zh": "在同一个三角形中，边与角成对匹配：最长的边对着最大的角，最短的边对着最小的角。两个方向都是定理。在三角形 $ABC$ 中，若 $BC > AB$，则 $m\\angle A > m\\angle C$（较长边所对的角较大），反之亦然。因此只要知道三个角，就能不量长度而排出三边大小，反之亦可——一定要把每条边与它的对角（即这条边不经过的那个顶点处的角）配对。"
            },
            {
              "type": "p",
              "en": "The Exterior Angle Inequality Theorem says an exterior angle of a triangle is greater than either remote interior angle. For example, if side $\\overline{BC}$ of triangle $ABC$ is extended through $C$ to a point $D$, then $m\\angle ACD > m\\angle A$ and $m\\angle ACD > m\\angle B$. This is weaker than the Exterior Angle Theorem (which gives the exact sum $m\\angle ACD = m\\angle A + m\\angle B$), but the inequality version is the tool named in proofs about inequalities.",
              "zh": "外角不等式定理指出：三角形的外角大于任何一个不相邻的内角。例如，把三角形 $ABC$ 的边 $\\overline{BC}$ 沿 $C$ 方向延长到点 $D$，则 $m\\angle ACD > m\\angle A$ 且 $m\\angle ACD > m\\angle B$。它比外角定理（给出精确的和 $m\\angle ACD = m\\angle A + m\\angle B$）弱，但在关于不等式的证明中，引用的正是这个不等式版本。"
            },
            {
              "type": "h3",
              "en": "The Hinge Theorem and Its Converse",
              "zh": "铰链定理及其逆定理"
            },
            {
              "type": "p",
              "en": "Picture a door hinge, or a compass: two arms of fixed length with an adjustable angle between them. Opening the angle wider pushes the endpoints farther apart. The Hinge Theorem (also called the SAS Inequality) makes this precise: if two sides of one triangle are congruent to two sides of another triangle, but the included angle of the first is larger, then the third side of the first triangle is longer. The Converse of the Hinge Theorem (SSS Inequality) reverses it: with two pairs of congruent sides, if the third side of the first triangle is longer, then its included angle is larger.",
              "zh": "想象门的铰链或一副圆规：两条长度固定的臂，中间的夹角可以调节。夹角开得越大，两个端点相距越远。铰链定理（又称 SAS 不等式）把这一直觉严格化：若一个三角形的两边与另一个三角形的两边对应相等，但第一个三角形的夹角较大，则第一个三角形的第三边较长。铰链定理的逆定理（SSS 不等式）方向相反：在两组对应边相等的前提下，若第一个三角形的第三边较长，则它的夹角较大。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Triangle Inequality: any two sides sum to more than the third; third side lies strictly between $|a-b|$ and $a+b$.",
                  "zh": "三角形不等式：任意两边之和大于第三边；第三边严格介于 $|a-b|$ 与 $a+b$ 之间。"
                },
                {
                  "en": "Side–angle order: longer side ↔ larger opposite angle, within the same triangle.",
                  "zh": "边角排序：在同一三角形内，较长的边对应较大的对角。"
                },
                {
                  "en": "Exterior angle inequality: an exterior angle beats each remote interior angle.",
                  "zh": "外角不等式：外角大于每一个不相邻的内角。"
                },
                {
                  "en": "Hinge Theorem: same two sides, bigger included angle ↔ longer third side.",
                  "zh": "铰链定理：两边相同，夹角越大，第三边越长。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: the inequalities in the third-side range are strict. With sides $4$ and $9$, the third side satisfies $5 < x < 13$; the values $5$ and $13$ themselves are impossible, because the three points would collapse onto one line (a \"degenerate triangle\"). Also, when ordering angles from sides, students often pair a side with the angle it touches — always use the opposite angle instead.",
              "zh": "常见错误：第三边范围中的不等号是严格的。若两边为 $4$ 和 $9$，第三边满足 $5 < x < 13$；$5$ 和 $13$ 本身不可能取到，因为那时三点会退化到一条直线上（\"退化三角形\"）。另外，由边排角时，很多同学把边和它相邻的角配对——一定要用它所对的角。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Range for the third side, then ordering angles",
                "zh": "例题 1：第三边的范围与角的排序"
              },
              "problem": {
                "en": "Two sides of a triangle measure $8$ and $13$. (a) Find all possible lengths of the third side. (b) If the third side actually measures $7$, list the angles of the triangle from smallest to largest.",
                "zh": "三角形的两边长为 $8$ 和 $13$。(a) 求第三边所有可能的长度。(b) 若第三边实际长为 $7$，把三角形的三个角从小到大排序。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) The third side $x$ must satisfy the strict double inequality:",
                  "zh": "(a) 第三边 $x$ 必须满足严格的双向不等式："
                },
                {
                  "type": "math",
                  "tex": "13 - 8 < x < 13 + 8 \\;\\Rightarrow\\; 5 < x < 21"
                },
                {
                  "type": "p",
                  "en": "(b) Label the triangle $ABC$ with $BC = 13$, $CA = 8$, $AB = 7$. Smaller sides face smaller angles. The side order $AB < CA < BC$, that is $7 < 8 < 13$, forces the same order on the opposite angles: $\\angle C$ (opposite $AB = 7$) is smallest, then $\\angle B$ (opposite $CA = 8$), then $\\angle A$ (opposite $BC = 13$) is largest. So $m\\angle C < m\\angle B < m\\angle A$.",
                  "zh": "(b) 设三角形为 $ABC$，其中 $BC = 13$，$CA = 8$，$AB = 7$。较短的边对较小的角。由边的大小顺序 $AB < CA < BC$（即 $7 < 8 < 13$），对角也按同样顺序排列：$\\angle C$（对边 $AB = 7$）最小，其次是 $\\angle B$（对边 $CA = 8$），$\\angle A$（对边 $BC = 13$）最大。所以 $m\\angle C < m\\angle B < m\\angle A$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Applying the Hinge Theorem",
                "zh": "例题 2：铰链定理的应用"
              },
              "problem": {
                "en": "In triangles $ABC$ and $DEF$, $AB = DE = 5$, $AC = DF = 8$, $m\\angle A = 62^\\circ$, and $m\\angle D = 48^\\circ$. Compare $BC$ and $EF$, and justify each step with a reason.",
                "zh": "在三角形 $ABC$ 与 $DEF$ 中，$AB = DE = 5$，$AC = DF = 8$，$m\\angle A = 62^\\circ$，$m\\angle D = 48^\\circ$。比较 $BC$ 与 $EF$ 的大小，并为每一步给出理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Statements and reasons. (1) $\\overline{AB} \\cong \\overline{DE}$ and $\\overline{AC} \\cong \\overline{DF}$ — given, since both pairs have equal lengths. (2) $m\\angle A > m\\angle D$ — given, since $62^\\circ > 48^\\circ$. (3) $\\angle A$ is included between $\\overline{AB}$ and $\\overline{AC}$, and $\\angle D$ is included between $\\overline{DE}$ and $\\overline{DF}$ — definition of included angle. (4) Therefore $BC > EF$ — Hinge Theorem (SAS Inequality).",
                  "zh": "命题与理由。(1) $\\overline{AB} \\cong \\overline{DE}$，$\\overline{AC} \\cong \\overline{DF}$——已知，两组边长度相等。(2) $m\\angle A > m\\angle D$——已知，因为 $62^\\circ > 48^\\circ$。(3) $\\angle A$ 是 $\\overline{AB}$ 与 $\\overline{AC}$ 的夹角，$\\angle D$ 是 $\\overline{DE}$ 与 $\\overline{DF}$ 的夹角——夹角的定义。(4) 所以 $BC > EF$——铰链定理（SAS 不等式）。"
                },
                {
                  "type": "p",
                  "en": "The key check before citing the Hinge Theorem: the unequal angles must be the included angles between the two pairs of congruent sides. If the $62^\\circ$ angle were at vertex $B$ instead, the theorem would not apply.",
                  "zh": "引用铰链定理前的关键检查：不相等的角必须是两组对应相等边之间的夹角。如果 $62^\\circ$ 的角位于顶点 $B$ 处，该定理就不能使用。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which set of lengths can be the sides of a triangle?",
                "zh": "下列哪一组长度可以构成三角形的三边？"
              },
              "choices": [
                "$3, 4, 8$",
                "$5, 5, 10$",
                "$6, 8, 13$",
                "$2, 3, 6$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Check the two smallest against the largest: $6 + 8 = 14 > 13$ works. In $5, 5, 10$ the sum $5 + 5 = 10$ only equals the third side, which gives a degenerate (flat) figure, not a triangle — the inequality must be strict.",
                "zh": "用两条较短边之和与最长边比较：$6 + 8 = 14 > 13$，成立。而在 $5, 5, 10$ 中，$5 + 5 = 10$ 只是等于第三边，得到的是退化（压扁）的图形而不是三角形——不等号必须是严格的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two sides of a triangle measure $9$ and $14$. How many different whole-number lengths are possible for the third side? Give a whole number.",
                "zh": "三角形的两边长为 $9$ 和 $14$。第三边可以取多少个不同的整数长度？请填一个整数。"
              },
              "answer": "17",
              "explanation": {
                "en": "The third side satisfies $14 - 9 < x < 14 + 9$, so $5 < x < 23$. The whole numbers from $6$ through $22$ inclusive give $22 - 6 + 1 = 17$ possibilities. Remember that $5$ and $23$ are excluded because the inequality is strict.",
                "zh": "第三边满足 $14 - 9 < x < 14 + 9$，即 $5 < x < 23$。整数 $6$ 到 $22$（含两端）共 $22 - 6 + 1 = 17$ 个。注意 $5$ 和 $23$ 被排除，因为不等号是严格的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In triangle $DEF$, $m\\angle D = 52^\\circ$, $m\\angle E = 71^\\circ$, and $m\\angle F = 57^\\circ$. Which side is longest?",
                "zh": "在三角形 $DEF$ 中，$m\\angle D = 52^\\circ$，$m\\angle E = 71^\\circ$，$m\\angle F = 57^\\circ$。哪条边最长？"
              },
              "choices": [
                "$\\overline{DE}$",
                "$\\overline{EF}$",
                "$\\overline{DF}$",
                "It cannot be determined"
              ],
              "answer": 2,
              "explanation": {
                "en": "The longest side is opposite the largest angle. The largest angle is $\\angle E = 71^\\circ$, and the side opposite $\\angle E$ is $\\overline{DF}$, the side that does not touch vertex $E$. Choosing $\\overline{EF}$ is the classic error of pairing the angle with a side it touches.",
                "zh": "最长的边对着最大的角。最大角是 $\\angle E = 71^\\circ$，它的对边是 $\\overline{DF}$，即不经过顶点 $E$ 的那条边。选 $\\overline{EF}$ 是把角与它相邻的边配对的典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Side $\\overline{BC}$ of triangle $ABC$ is extended through $C$ to point $D$. In a proof, which theorem justifies the statement $m\\angle ACD > m\\angle A$?",
                "zh": "把三角形 $ABC$ 的边 $\\overline{BC}$ 沿 $C$ 方向延长到点 $D$。在证明中，哪条定理可以作为 $m\\angle ACD > m\\angle A$ 这一步的理由？"
              },
              "choices": [
                "Triangle Inequality Theorem",
                "Exterior Angle Inequality Theorem",
                "Hinge Theorem",
                "Vertical Angles Theorem"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\angle ACD$ is an exterior angle of the triangle, and $\\angle A$ is a remote interior angle; the Exterior Angle Inequality Theorem says the exterior angle is greater. The Triangle Inequality is tempting because of the word \"inequality,\" but it compares side lengths, not angles.",
                "zh": "$\\angle ACD$ 是三角形的外角，$\\angle A$ 是与它不相邻的内角；外角不等式定理指出外角更大。三角形不等式定理因带有\"不等式\"字样而具有迷惑性，但它比较的是边长而不是角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In triangles $PQR$ and $XYZ$, $PQ = XY$, $PR = XZ$, $m\\angle P = 74^\\circ$, and $m\\angle X = 58^\\circ$. Which statement must be true?",
                "zh": "在三角形 $PQR$ 与 $XYZ$ 中，$PQ = XY$，$PR = XZ$，$m\\angle P = 74^\\circ$，$m\\angle X = 58^\\circ$。下列哪个结论一定成立？"
              },
              "choices": [
                "$QR > YZ$",
                "$QR < YZ$",
                "$QR = YZ$",
                "$PQ > XZ$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Two pairs of sides are congruent and the included angle at $P$ ($74^\\circ$) is larger than the included angle at $X$ ($58^\\circ$), so by the Hinge Theorem the opposite side $QR$ is longer than $YZ$. The equality choice would require the included angles to be equal.",
                "zh": "两组对应边相等，且 $P$ 处的夹角（$74^\\circ$）大于 $X$ 处的夹角（$58^\\circ$），由铰链定理，所对的边 $QR$ 比 $YZ$ 长。若要相等，则需要两个夹角相等。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An isosceles triangle has sides of length $4$ and $9$. Find its perimeter. Give a whole number (no units).",
                "zh": "一个等腰三角形的两条边长为 $4$ 和 $9$。求它的周长。请填一个整数（不写单位）。"
              },
              "answer": "22",
              "explanation": {
                "en": "The repeated side must be $9$: if the sides were $4, 4, 9$, then $4 + 4 = 8 < 9$ violates the Triangle Inequality. So the sides are $4, 9, 9$ and the perimeter is $4 + 9 + 9 = 22$ units.",
                "zh": "相等的两边必须是 $9$：若三边为 $4, 4, 9$，则 $4 + 4 = 8 < 9$，违反三角形不等式。所以三边为 $4, 9, 9$，周长为 $4 + 9 + 9 = 22$ 个单位。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In triangles $ABC$ and $DEF$, $AB = DE$, $AC = DF$, $BC = 10$, and $EF = 7$. Which theorem lets you conclude $m\\angle A > m\\angle D$?",
                "zh": "在三角形 $ABC$ 与 $DEF$ 中，$AB = DE$，$AC = DF$，$BC = 10$，$EF = 7$。哪条定理可以推出 $m\\angle A > m\\angle D$？"
              },
              "choices": [
                "Hinge Theorem (SAS Inequality)",
                "Converse of the Hinge Theorem (SSS Inequality)",
                "Triangle Inequality Theorem",
                "Exterior Angle Inequality Theorem"
              ],
              "answer": 1,
              "explanation": {
                "en": "We are given two pairs of congruent sides and unequal third sides, and we conclude an angle inequality — that is the converse direction (SSS Inequality). The Hinge Theorem itself goes the other way: from a larger included angle to a longer third side.",
                "zh": "已知两组对应边相等和第三边不相等，要推出角的不等关系——这是逆定理的方向（SSS 不等式）。铰链定理本身方向相反：由较大的夹角推出较长的第三边。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two sides of a triangle measure $8$ and $15$. What is the smallest possible whole-number length of the third side? Give a whole number.",
                "zh": "三角形的两边长为 $8$ 和 $15$。第三边最小可能的整数长度是多少？请填一个整数。"
              },
              "answer": "8",
              "explanation": {
                "en": "The third side must satisfy $15 - 8 < x < 15 + 8$, so $7 < x < 23$. The smallest whole number greater than $7$ is $8$. Answering $7$ forgets that the inequality is strict — a third side of exactly $7$ would flatten the triangle onto a line.",
                "zh": "第三边必须满足 $15 - 8 < x < 15 + 8$，即 $7 < x < 23$。大于 $7$ 的最小整数是 $8$。答 $7$ 是忘了不等号是严格的——第三边恰为 $7$ 时，三角形会压扁成一条直线。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "quadrilaterals-polygons",
      "title": "Unit 7: Quadrilaterals and Polygons",
      "titleZh": "第七单元：四边形与多边形",
      "lessons": [
        {
          "id": "polygon-angles-parallelograms",
          "title": "Polygon Angle Sums and Parallelograms",
          "titleZh": "多边形内角和与平行四边形",
          "content": [
            {
              "type": "h2",
              "en": "Angles of Polygons",
              "zh": "多边形的角"
            },
            {
              "type": "p",
              "en": "A polygon with $n$ sides can be split into triangles by drawing all the diagonals from one vertex. From any vertex you can draw $n - 3$ diagonals, cutting the polygon into $n - 2$ triangles. Since each triangle contributes $180^\\circ$, the sum of the interior angles of a convex $n$-gon is",
              "zh": "一个 $n$ 边形可以通过从一个顶点出发画出所有对角线而被分割成若干三角形。从任一顶点可以画 $n - 3$ 条对角线，把多边形分成 $n - 2$ 个三角形。每个三角形贡献 $180^\\circ$，所以凸 $n$ 边形的内角和为"
            },
            {
              "type": "math",
              "tex": "S = (n - 2) \\cdot 180^\\circ"
            },
            {
              "type": "p",
              "en": "For example, a pentagon ($n = 5$) has interior angle sum $(5-2) \\cdot 180^\\circ = 540^\\circ$, and a decagon ($n = 10$) has $(10-2) \\cdot 180^\\circ = 1440^\\circ$.",
              "zh": "例如，五边形（$n = 5$）的内角和为 $(5-2) \\cdot 180^\\circ = 540^\\circ$，十边形（$n = 10$）的内角和为 $(10-2) \\cdot 180^\\circ = 1440^\\circ$。"
            },
            {
              "type": "h3",
              "en": "Exterior Angles and Regular Polygons",
              "zh": "外角与正多边形"
            },
            {
              "type": "p",
              "en": "At each vertex, an exterior angle is formed by one side and the extension of the adjacent side; the interior and exterior angles at a vertex are supplementary. No matter how many sides the polygon has, if you take one exterior angle at each vertex of a convex polygon, they always add to $360^\\circ$ — imagine walking around the polygon: you make one full turn.",
              "zh": "在每个顶点处，一条边与相邻边的延长线构成一个外角；同一顶点处的内角与外角互补。无论多边形有多少条边，凸多边形每个顶点各取一个外角，其和总是 $360^\\circ$——想象沿多边形走一圈：你恰好转了一整圈。"
            },
            {
              "type": "math",
              "tex": "\\text{Exterior angle sum} = 360^\\circ \\qquad \\text{(any convex polygon)}"
            },
            {
              "type": "p",
              "en": "A regular polygon has all sides congruent and all angles congruent. Its angles are easy to compute:",
              "zh": "正多边形的所有边全等、所有角全等。它的角很容易计算："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Each interior angle of a regular $n$-gon: $\\dfrac{(n-2) \\cdot 180^\\circ}{n}$.",
                  "zh": "正 $n$ 边形的每个内角：$\\dfrac{(n-2) \\cdot 180^\\circ}{n}$。"
                },
                {
                  "en": "Each exterior angle of a regular $n$-gon: $\\dfrac{360^\\circ}{n}$.",
                  "zh": "正 $n$ 边形的每个外角：$\\dfrac{360^\\circ}{n}$。"
                },
                {
                  "en": "Interior + exterior $= 180^\\circ$ at every vertex, so you can always find one from the other.",
                  "zh": "每个顶点处内角 $+$ 外角 $= 180^\\circ$，因此二者可以互相求出。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: to find $n$ from an angle, the exterior angle is almost always the faster route. If each interior angle of a regular polygon is $156^\\circ$, do not set up $\\frac{(n-2)180}{n} = 156$ first — instead compute the exterior angle $180^\\circ - 156^\\circ = 24^\\circ$ and solve $n = 360/24 = 15$ in one step.",
              "zh": "考试提示：由角度反求 $n$ 时，用外角几乎总是更快。若正多边形每个内角为 $156^\\circ$，不要先列 $\\frac{(n-2)180}{n} = 156$——先算外角 $180^\\circ - 156^\\circ = 24^\\circ$，一步得到 $n = 360/24 = 15$。"
            },
            {
              "type": "h3",
              "en": "Properties of Parallelograms",
              "zh": "平行四边形的性质"
            },
            {
              "type": "p",
              "en": "A parallelogram is a quadrilateral with both pairs of opposite sides parallel, written $\\square ABCD$ with $\\overline{AB} \\parallel \\overline{DC}$ and $\\overline{AD} \\parallel \\overline{BC}$. Everything else follows from that definition by proof. Drawing diagonal $\\overline{AC}$ creates two triangles: because the diagonal is a transversal to both pairs of parallel sides, alternate interior angles give $\\angle BAC \\cong \\angle DCA$ and $\\angle BCA \\cong \\angle DAC$, and with the shared side $\\overline{AC}$, ASA proves $\\triangle ABC \\cong \\triangle CDA$. Corresponding parts then hand us the key properties:",
              "zh": "平行四边形是两组对边分别平行的四边形，记作 $\\square ABCD$，其中 $\\overline{AB} \\parallel \\overline{DC}$，$\\overline{AD} \\parallel \\overline{BC}$。其余性质都可由这个定义证明得到。画出对角线 $\\overline{AC}$ 得到两个三角形：对角线是两组平行边的截线，由内错角相等得 $\\angle BAC \\cong \\angle DCA$、$\\angle BCA \\cong \\angle DAC$，再加公共边 $\\overline{AC}$，由 ASA 证得 $\\triangle ABC \\cong \\triangle CDA$。由全等三角形的对应部分即得关键性质："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Opposite sides are congruent: $AB = DC$ and $AD = BC$.",
                  "zh": "对边相等：$AB = DC$，$AD = BC$。"
                },
                {
                  "en": "Opposite angles are congruent: $\\angle A \\cong \\angle C$ and $\\angle B \\cong \\angle D$.",
                  "zh": "对角相等：$\\angle A \\cong \\angle C$，$\\angle B \\cong \\angle D$。"
                },
                {
                  "en": "Consecutive angles are supplementary: $m\\angle A + m\\angle B = 180^\\circ$ (co-interior angles between parallel lines).",
                  "zh": "邻角互补：$m\\angle A + m\\angle B = 180^\\circ$（平行线的同旁内角）。"
                },
                {
                  "en": "The diagonals bisect each other: if they meet at $E$, then $AE = EC$ and $BE = ED$.",
                  "zh": "对角线互相平分：若交于 $E$，则 $AE = EC$，$BE = ED$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Five Ways to Prove a Quadrilateral Is a Parallelogram",
              "zh": "判定平行四边形的五种方法"
            },
            {
              "type": "p",
              "en": "Each property above has a converse that works as a test. A quadrilateral is a parallelogram if any ONE of the following holds:",
              "zh": "上述每条性质的逆命题都可作为判定。只要下列任一条件成立，四边形就是平行四边形："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "1. Both pairs of opposite sides are parallel (the definition).",
                  "zh": "1. 两组对边分别平行（定义）。"
                },
                {
                  "en": "2. Both pairs of opposite sides are congruent.",
                  "zh": "2. 两组对边分别相等。"
                },
                {
                  "en": "3. Both pairs of opposite angles are congruent.",
                  "zh": "3. 两组对角分别相等。"
                },
                {
                  "en": "4. The diagonals bisect each other.",
                  "zh": "4. 对角线互相平分。"
                },
                {
                  "en": "5. One pair of opposite sides is BOTH parallel and congruent.",
                  "zh": "5. 一组对边既平行又相等。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: one pair of parallel sides plus a DIFFERENT pair of congruent sides does not prove a parallelogram — an isosceles trapezoid satisfies exactly that. Test 5 requires the same pair of sides to be both parallel and congruent. On coordinate problems, verify \"parallel\" with slopes and \"congruent\" with the distance formula.",
              "zh": "常见错误：一组对边平行加上另一组对边相等并不能判定平行四边形——等腰梯形恰好满足这种条件。判定 5 要求同一组对边既平行又相等。在坐标题中，用斜率验证\"平行\"，用两点间距离公式验证\"相等\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Solving a parallelogram with algebra",
                "zh": "例题 1：用代数解平行四边形"
              },
              "problem": {
                "en": "In parallelogram $PQRS$, $m\\angle P = (4x + 12)^\\circ$ and $m\\angle Q = (6x - 22)^\\circ$. Find $x$ and the measure of each angle of the parallelogram.",
                "zh": "在平行四边形 $PQRS$ 中，$m\\angle P = (4x + 12)^\\circ$，$m\\angle Q = (6x - 22)^\\circ$。求 $x$ 及平行四边形每个角的度数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$\\angle P$ and $\\angle Q$ are consecutive angles, so they are supplementary:",
                  "zh": "$\\angle P$ 与 $\\angle Q$ 是邻角，因此互补："
                },
                {
                  "type": "math",
                  "tex": "(4x + 12) + (6x - 22) = 180 \\;\\Rightarrow\\; 10x - 10 = 180 \\;\\Rightarrow\\; x = 19"
                },
                {
                  "type": "p",
                  "en": "So $m\\angle P = 4(19) + 12 = 88^\\circ$ and $m\\angle Q = 6(19) - 22 = 92^\\circ$. Opposite angles are congruent, so $m\\angle R = 88^\\circ$ and $m\\angle S = 92^\\circ$. Check: $88 + 92 + 88 + 92 = 360$. ✓",
                  "zh": "所以 $m\\angle P = 4(19) + 12 = 88^\\circ$，$m\\angle Q = 6(19) - 22 = 92^\\circ$。由对角相等，$m\\angle R = 88^\\circ$，$m\\angle S = 92^\\circ$。检验：$88 + 92 + 88 + 92 = 360$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A coordinate proof",
                "zh": "例题 2：坐标证明"
              },
              "problem": {
                "en": "Show that quadrilateral $ABCD$ with $A(-1, 2)$, $B(3, 4)$, $C(6, 1)$, $D(2, -1)$ is a parallelogram.",
                "zh": "证明顶点为 $A(-1, 2)$、$B(3, 4)$、$C(6, 1)$、$D(2, -1)$ 的四边形 $ABCD$ 是平行四边形。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The fastest test in coordinates is Test 4: show the diagonals bisect each other, which happens exactly when they share the same midpoint.",
                  "zh": "在坐标中最快的判定是方法 4：证明两条对角线互相平分，这等价于它们有相同的中点。"
                },
                {
                  "type": "math",
                  "tex": "\\text{Midpoint of } \\overline{AC} = \\left( \\frac{-1 + 6}{2}, \\frac{2 + 1}{2} \\right) = \\left( \\frac{5}{2}, \\frac{3}{2} \\right)"
                },
                {
                  "type": "math",
                  "tex": "\\text{Midpoint of } \\overline{BD} = \\left( \\frac{3 + 2}{2}, \\frac{4 + (-1)}{2} \\right) = \\left( \\frac{5}{2}, \\frac{3}{2} \\right)"
                },
                {
                  "type": "p",
                  "en": "The diagonals share midpoint $\\left( \\frac{5}{2}, \\frac{3}{2} \\right)$, so they bisect each other, and $ABCD$ is a parallelogram. (Alternatively: slope of $\\overline{AB}$ = slope of $\\overline{DC}$ = $\\frac{1}{2}$, and slope of $\\overline{BC}$ = slope of $\\overline{AD}$ = $-1$, so both pairs of opposite sides are parallel.)",
                  "zh": "两条对角线有相同的中点 $\\left( \\frac{5}{2}, \\frac{3}{2} \\right)$，因此互相平分，$ABCD$ 是平行四边形。（另法：$\\overline{AB}$ 与 $\\overline{DC}$ 的斜率都是 $\\frac{1}{2}$，$\\overline{BC}$ 与 $\\overline{AD}$ 的斜率都是 $-1$，两组对边分别平行。）"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Find the sum of the interior angles of a convex heptagon (7 sides), in degrees. Give a whole number.",
                "zh": "求凸七边形（7 条边）的内角和，单位为度。请填一个整数。"
              },
              "answer": "900",
              "explanation": {
                "en": "Use $S = (n-2) \\cdot 180^\\circ$ with $n = 7$: $(7-2) \\cdot 180^\\circ = 5 \\cdot 180^\\circ = 900^\\circ$.",
                "zh": "用公式 $S = (n-2) \\cdot 180^\\circ$，取 $n = 7$：$(7-2) \\cdot 180^\\circ = 5 \\cdot 180^\\circ = 900^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Each interior angle of a regular polygon measures $144^\\circ$. How many sides does the polygon have?",
                "zh": "某正多边形的每个内角为 $144^\\circ$。这个多边形有多少条边？"
              },
              "choices": [
                "$8$",
                "$9$",
                "$10$",
                "$12$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Each exterior angle is $180^\\circ - 144^\\circ = 36^\\circ$, so $n = 360/36 = 10$. Choice $12$ tempts students who compute $360/(180-150)$ after misreading, and $9$ comes from the polygon whose interior angle is $140^\\circ$, not $144^\\circ$.",
                "zh": "每个外角为 $180^\\circ - 144^\\circ = 36^\\circ$，所以 $n = 360/36 = 10$。误选 $9$ 的同学往往把内角 $140^\\circ$ 的多边形（九边形）与本题混淆了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The exterior angles of a convex polygon, one at each vertex, always sum to:",
                "zh": "凸多边形每个顶点各取一个外角，这些外角的和总是："
              },
              "choices": [
                "$180^\\circ$",
                "$(n-2) \\cdot 180^\\circ$",
                "$360^\\circ$",
                "$n \\cdot 90^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Walking once around any convex polygon turns you through one full revolution, $360^\\circ$, regardless of $n$. The formula $(n-2) \\cdot 180^\\circ$ is tempting but it is the INTERIOR angle sum.",
                "zh": "沿任何凸多边形走一圈恰好转过一整圈，即 $360^\\circ$，与 $n$ 无关。$(n-2) \\cdot 180^\\circ$ 很有迷惑性，但那是内角和。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In parallelogram $ABCD$, $m\\angle A = 68^\\circ$. Find $m\\angle B$ in degrees. Give a whole number.",
                "zh": "在平行四边形 $ABCD$ 中，$m\\angle A = 68^\\circ$。求 $m\\angle B$ 的度数。请填一个整数。"
              },
              "answer": "112",
              "explanation": {
                "en": "$\\angle A$ and $\\angle B$ are consecutive angles of a parallelogram, so they are supplementary: $m\\angle B = 180^\\circ - 68^\\circ = 112^\\circ$.",
                "zh": "$\\angle A$ 与 $\\angle B$ 是平行四边形的邻角，互补：$m\\angle B = 180^\\circ - 68^\\circ = 112^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In parallelogram $WXYZ$ the diagonals intersect at $P$. If $WP = 3a - 2$ and $PY = a + 10$, what is $a$?",
                "zh": "平行四边形 $WXYZ$ 的对角线交于点 $P$。若 $WP = 3a - 2$，$PY = a + 10$，求 $a$。"
              },
              "choices": [
                "$3$",
                "$4$",
                "$6$",
                "$8$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The diagonals of a parallelogram bisect each other, so $WP = PY$: $3a - 2 = a + 10$ gives $2a = 12$, so $a = 6$. Choosing $4$ usually comes from the sign error $3a + 2 = a + 10$.",
                "zh": "平行四边形的对角线互相平分，所以 $WP = PY$：由 $3a - 2 = a + 10$ 得 $2a = 12$，$a = 6$。误选 $4$ 通常是把方程写成了 $3a + 2 = a + 10$ 的符号错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A proof begins: \"In quadrilateral $ABCD$, diagonals $\\overline{AC}$ and $\\overline{BD}$ intersect at $E$ with $AE = EC$ and $BE = ED$. Therefore $ABCD$ is a parallelogram.\" Which reason justifies the conclusion?",
                "zh": "一个证明写道：\"四边形 $ABCD$ 的对角线 $\\overline{AC}$、$\\overline{BD}$ 交于 $E$，且 $AE = EC$，$BE = ED$，所以 $ABCD$ 是平行四边形。\" 结论的依据是哪一条？"
              },
              "choices": [
                "If both pairs of opposite sides are congruent, the quadrilateral is a parallelogram",
                "If the diagonals of a quadrilateral bisect each other, it is a parallelogram",
                "The diagonals of a parallelogram bisect each other",
                "If one pair of opposite sides is parallel and congruent, the quadrilateral is a parallelogram"
              ],
              "answer": 1,
              "explanation": {
                "en": "The given facts say each diagonal is cut in half at $E$, i.e. the diagonals bisect each other — that converse is the test being used. The third choice states the property of a parallelogram (the converse direction), which assumes what we are trying to prove.",
                "zh": "已知条件说明每条对角线都在 $E$ 处被平分，即对角线互相平分——用的正是这条判定定理。第三个选项叙述的是平行四边形的性质（方向相反），它把要证的结论当成了已知。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Quadrilateral $JKLM$ has exactly one pair of opposite sides parallel and the other pair of opposite sides congruent. Which statement is true?",
                "zh": "四边形 $JKLM$ 中恰有一组对边平行，另一组对边相等。下列哪个说法正确？"
              },
              "choices": [
                "$JKLM$ must be a parallelogram",
                "$JKLM$ cannot be a parallelogram",
                "$JKLM$ is not necessarily a parallelogram",
                "$JKLM$ must be a rectangle"
              ],
              "answer": 2,
              "explanation": {
                "en": "This is the classic trap: an isosceles trapezoid has one pair of parallel sides and the other pair congruent without being a parallelogram, so the conditions do not force a parallelogram. But they do not rule one out either, so \"cannot\" is also wrong — \"not necessarily\" is correct.",
                "zh": "这是经典陷阱：等腰梯形一组对边平行、另一组对边相等，却不是平行四边形，所以这些条件不能保证是平行四边形。但它们也不排除是平行四边形的可能，所以\"一定不是\"也错——正确答案是\"不一定是\"。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Parallelogram $ABCD$ has vertices $A(0, 0)$, $B(5, 1)$, and $C(7, 6)$. The diagonals bisect each other; find vertex $D$. Give your answer as coordinates, e.g. (2,5).",
                "zh": "平行四边形 $ABCD$ 的顶点为 $A(0, 0)$、$B(5, 1)$、$C(7, 6)$。利用对角线互相平分求顶点 $D$。请用坐标形式作答，例如 (2,5)。"
              },
              "answer": "(2,5)",
              "accept": [
                "(2, 5)",
                "2,5"
              ],
              "explanation": {
                "en": "The midpoint of $\\overline{AC}$ is $\\left( \\frac{7}{2}, 3 \\right)$, and it must also be the midpoint of $\\overline{BD}$. Solving $\\frac{5 + x}{2} = \\frac{7}{2}$ and $\\frac{1 + y}{2} = 3$ gives $D(2, 5)$. Equivalently, $D = A + C - B = (0+7-5,\\; 0+6-1)$.",
                "zh": "$\\overline{AC}$ 的中点是 $\\left( \\frac{7}{2}, 3 \\right)$，它也必须是 $\\overline{BD}$ 的中点。解 $\\frac{5 + x}{2} = \\frac{7}{2}$ 与 $\\frac{1 + y}{2} = 3$ 得 $D(2, 5)$。等价地，$D = A + C - B = (0+7-5,\\; 0+6-1)$。"
              }
            }
          ]
        },
        {
          "id": "special-quadrilaterals",
          "title": "Rectangles, Rhombi, Squares, Trapezoids, and Kites",
          "titleZh": "特殊四边形",
          "content": [
            {
              "type": "h2",
              "en": "The Family of Special Parallelograms",
              "zh": "特殊平行四边形家族"
            },
            {
              "type": "p",
              "en": "Rectangles, rhombi, and squares are all parallelograms, so they inherit every parallelogram property: opposite sides congruent, opposite angles congruent, diagonals bisecting each other. What makes each one special is an EXTRA condition, and each extra condition shows up most clearly in the diagonals.",
              "zh": "矩形、菱形和正方形都是平行四边形，因此继承平行四边形的全部性质：对边相等、对角相等、对角线互相平分。它们各自的特殊之处在于一个附加条件，而这个附加条件在对角线上体现得最清楚。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Rectangle: a parallelogram with four right angles. Extra diagonal property: the diagonals are congruent ($AC = BD$).",
                  "zh": "矩形：有四个直角的平行四边形。对角线的附加性质：对角线相等（$AC = BD$）。"
                },
                {
                  "en": "Rhombus: a parallelogram with four congruent sides. Extra diagonal properties: the diagonals are perpendicular, and each diagonal bisects a pair of opposite angles.",
                  "zh": "菱形：四条边都相等的平行四边形。对角线的附加性质：对角线互相垂直，且每条对角线平分一组对角。"
                },
                {
                  "en": "Square: a parallelogram that is both a rectangle and a rhombus — four right angles AND four congruent sides. Its diagonals are congruent, perpendicular, bisect each other, and bisect the corner angles into $45^\\circ$ halves.",
                  "zh": "正方形：既是矩形又是菱形的平行四边形——四个直角且四条边相等。它的对角线相等、互相垂直、互相平分，并把每个直角平分成两个 $45^\\circ$ 的角。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Why are a rhombus's diagonals perpendicular? In rhombus $ABCD$ with diagonals meeting at $E$: $AB = AD$ (definition of rhombus), $BE = ED$ (diagonals of a parallelogram bisect each other), and $AE = AE$. So $\\triangle ABE \\cong \\triangle ADE$ by SSS, which makes $\\angle AEB \\cong \\angle AED$. These two angles form a linear pair, so each must be $90^\\circ$ — the diagonals are perpendicular.",
              "zh": "为什么菱形的对角线互相垂直？在菱形 $ABCD$ 中，设对角线交于 $E$：$AB = AD$（菱形的定义），$BE = ED$（平行四边形的对角线互相平分），$AE = AE$。由 SSS 得 $\\triangle ABE \\cong \\triangle ADE$，于是 $\\angle AEB \\cong \\angle AED$。这两个角构成邻补角，所以每个都是 $90^\\circ$——对角线互相垂直。"
            },
            {
              "type": "note",
              "en": "Common mistake: congruent diagonals alone do NOT make a quadrilateral a rectangle (an isosceles trapezoid also has congruent diagonals), and perpendicular diagonals alone do NOT make it a rhombus (a kite also has perpendicular diagonals). The diagonal tests only upgrade a quadrilateral you have ALREADY shown to be a parallelogram.",
              "zh": "常见错误：仅凭对角线相等不能判定矩形（等腰梯形的对角线也相等），仅凭对角线垂直也不能判定菱形（筝形的对角线也垂直）。对角线判定只能\"升级\"一个已经证明是平行四边形的四边形。"
            },
            {
              "type": "h3",
              "en": "Classifying with Coordinates",
              "zh": "用坐标判定"
            },
            {
              "type": "p",
              "en": "On the coordinate plane, two tools settle everything: slope and distance. Parallel sides have equal slopes; perpendicular sides have slopes whose product is $-1$; congruent sides have equal lengths by the distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. A reliable routine: first prove parallelogram (opposite slopes equal, or diagonal midpoints equal), then test rectangle (adjacent sides perpendicular, or diagonals congruent) and rhombus (all four sides congruent, or diagonals perpendicular). Both upgrades together mean square.",
              "zh": "在坐标平面上，两件工具就能解决一切：斜率和距离。平行的边斜率相等；垂直的边斜率之积为 $-1$；由距离公式 $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ 判断边是否相等。可靠的流程是：先证平行四边形（对边斜率相等，或对角线中点重合），再检验矩形（邻边垂直，或对角线相等）和菱形（四边相等，或对角线垂直）。两个升级条件都满足就是正方形。"
            },
            {
              "type": "h3",
              "en": "Trapezoids and the Midsegment",
              "zh": "梯形与中位线"
            },
            {
              "type": "p",
              "en": "A trapezoid is a quadrilateral with exactly one pair of parallel sides, called the bases; the nonparallel sides are the legs. The midsegment of a trapezoid connects the midpoints of the two legs. It is parallel to both bases, and its length is the average of the base lengths:",
              "zh": "梯形是恰有一组对边平行的四边形，平行的两边叫做底，不平行的两边叫做腰。梯形的中位线连接两腰的中点，它与两底平行，长度等于两底长的平均值："
            },
            {
              "type": "math",
              "tex": "m = \\frac{b_1 + b_2}{2}"
            },
            {
              "type": "p",
              "en": "An isosceles trapezoid has congruent legs. It comes with three useful properties: each pair of base angles is congruent, the diagonals are congruent, and opposite angles are supplementary. Conversely, if a trapezoid has congruent base angles (or congruent diagonals), it is isosceles.",
              "zh": "等腰梯形的两腰相等。它有三条有用的性质：每组同底的底角相等，对角线相等，对角互补。反过来，若梯形的一组底角相等（或对角线相等），则它是等腰梯形。"
            },
            {
              "type": "h3",
              "en": "Kites and a Decision Tree",
              "zh": "筝形与判定流程图"
            },
            {
              "type": "p",
              "en": "A kite has two pairs of consecutive congruent sides, but opposite sides are NOT congruent. Its diagonals are perpendicular; exactly one diagonal (the axis of symmetry, joining the vertices between the congruent pairs) bisects the other and bisects its own pair of vertex angles; and the other pair of angles (between a long side and a short side) are congruent to each other.",
              "zh": "筝形有两组相邻的边相等，但对边不相等。它的对角线互相垂直；恰有一条对角线（对称轴，连接两组等边的公共顶点）平分另一条对角线并平分它两端的顶角；另一组角（介于长边与短边之间）彼此相等。"
            },
            {
              "type": "p",
              "en": "To classify any quadrilateral, walk this decision tree. Step 1: Are both pairs of opposite sides parallel? If NO, check for exactly one parallel pair (trapezoid — then congruent legs or congruent diagonals make it isosceles) or two pairs of consecutive congruent sides (kite). If YES, it is a parallelogram; go to Step 2. Step 2: Does it have a right angle (or congruent diagonals)? If so, it is a rectangle. Step 3: Are two adjacent sides congruent (or the diagonals perpendicular)? If so, it is a rhombus. Passing both Step 2 and Step 3 makes it a square.",
              "zh": "判定任意四边形时可按此流程。第一步：两组对边是否都平行？若否，检查是否恰有一组对边平行（梯形——若两腰相等或对角线相等则为等腰梯形），或有两组相邻的边相等（筝形）。若是，则为平行四边形，进入第二步。第二步：是否有一个直角（或对角线相等）？若有，则为矩形。第三步：是否有两条邻边相等（或对角线垂直）？若有，则为菱形。第二、三步都通过则为正方形。"
            },
            {
              "type": "note",
              "en": "Test tip: \"always / sometimes / never\" questions live on this family tree. Read downward: every square IS a rectangle and a rhombus (always). Read upward with caution: a rectangle is only SOMETIMES a square. And under the exclusive definition used here, a trapezoid has exactly one parallel pair, so a parallelogram is NEVER a trapezoid.",
              "zh": "考试提示：\"总是/有时/绝不\"类判断题都围绕这棵家族树。向下读：每个正方形都是矩形、也是菱形（总是）。向上读要小心：矩形只是有时是正方形。按本课采用的\"恰有一组对边平行\"的定义，平行四边形绝不是梯形。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Angles in a rhombus",
                "zh": "例题 1：菱形中的角"
              },
              "problem": {
                "en": "In rhombus $ABCD$, the diagonals intersect at $E$ and $m\\angle BAC = 32^\\circ$. Find $m\\angle ABE$ and $m\\angle ADC$.",
                "zh": "在菱形 $ABCD$ 中，对角线交于 $E$，且 $m\\angle BAC = 32^\\circ$。求 $m\\angle ABE$ 和 $m\\angle ADC$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The diagonals of a rhombus are perpendicular, so in $\\triangle ABE$, $m\\angle AEB = 90^\\circ$. The angles of this triangle sum to $180^\\circ$:",
                  "zh": "菱形的对角线互相垂直，所以在 $\\triangle ABE$ 中 $m\\angle AEB = 90^\\circ$。三角形内角和为 $180^\\circ$："
                },
                {
                  "type": "math",
                  "tex": "m\\angle ABE = 180^\\circ - 90^\\circ - 32^\\circ = 58^\\circ"
                },
                {
                  "type": "p",
                  "en": "Diagonal $\\overline{AC}$ bisects $\\angle DAB$, so $m\\angle DAB = 2(32^\\circ) = 64^\\circ$. Consecutive angles of a parallelogram are supplementary, so $m\\angle ADC = 180^\\circ - 64^\\circ = 116^\\circ$.",
                  "zh": "对角线 $\\overline{AC}$ 平分 $\\angle DAB$，所以 $m\\angle DAB = 2(32^\\circ) = 64^\\circ$。平行四边形的邻角互补，故 $m\\angle ADC = 180^\\circ - 64^\\circ = 116^\\circ$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Classifying a quadrilateral by coordinates",
                "zh": "例题 2：用坐标判定四边形"
              },
              "problem": {
                "en": "Classify quadrilateral $ABCD$ with $A(0, 0)$, $B(4, 2)$, $C(2, 6)$, $D(-2, 4)$ as precisely as possible.",
                "zh": "尽可能精确地判定顶点为 $A(0, 0)$、$B(4, 2)$、$C(2, 6)$、$D(-2, 4)$ 的四边形 $ABCD$ 的类型。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Slopes: $\\overline{AB}$ has slope $\\frac{2-0}{4-0} = \\frac{1}{2}$ and $\\overline{DC}$ has slope $\\frac{6-4}{2-(-2)} = \\frac{1}{2}$; $\\overline{BC}$ has slope $\\frac{6-2}{2-4} = -2$ and $\\overline{AD}$ has slope $\\frac{4-0}{-2-0} = -2$. Both pairs of opposite sides are parallel, so $ABCD$ is a parallelogram. Moreover $\\frac{1}{2} \\cdot (-2) = -1$, so adjacent sides are perpendicular: $ABCD$ is a rectangle.",
                  "zh": "斜率：$\\overline{AB}$ 的斜率为 $\\frac{2-0}{4-0} = \\frac{1}{2}$，$\\overline{DC}$ 的斜率为 $\\frac{6-4}{2-(-2)} = \\frac{1}{2}$；$\\overline{BC}$ 的斜率为 $\\frac{6-2}{2-4} = -2$，$\\overline{AD}$ 的斜率为 $\\frac{4-0}{-2-0} = -2$。两组对边分别平行，所以 $ABCD$ 是平行四边形。又 $\\frac{1}{2} \\cdot (-2) = -1$，邻边垂直：$ABCD$ 是矩形。"
                },
                {
                  "type": "p",
                  "en": "Is it a square? Compare side lengths:",
                  "zh": "它是正方形吗？比较边长："
                },
                {
                  "type": "math",
                  "tex": "AB = \\sqrt{4^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}, \\qquad BC = \\sqrt{(-2)^2 + 4^2} = \\sqrt{20} = 2\\sqrt{5}"
                },
                {
                  "type": "p",
                  "en": "Adjacent sides are also congruent, so $ABCD$ is a rhombus as well — a rectangle that is a rhombus is a square. Most precise classification: square, with side length $2\\sqrt{5}$.",
                  "zh": "邻边也相等，所以 $ABCD$ 同时是菱形——既是矩形又是菱形的四边形是正方形。最精确的结论：正方形，边长 $2\\sqrt{5}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which quadrilateral must have congruent diagonals but does NOT need to have perpendicular diagonals?",
                "zh": "下列哪种四边形的对角线一定相等，但不一定互相垂直？"
              },
              "choices": [
                "Rhombus",
                "Rectangle",
                "Kite",
                "Parallelogram"
              ],
              "answer": 1,
              "explanation": {
                "en": "A rectangle's diagonals are always congruent, and they are perpendicular only in the special case of a square. A rhombus is the reverse (perpendicular, not necessarily congruent), a kite has perpendicular diagonals, and a general parallelogram guarantees neither.",
                "zh": "矩形的对角线总是相等，只有在正方形这一特例中才互相垂直。菱形恰好相反（垂直但不一定相等），筝形的对角线垂直，而一般平行四边形两者都不能保证。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A trapezoid has bases of length $11$ and $19$. Find the length of its midsegment. Give a whole number.",
                "zh": "某梯形的两底长为 $11$ 和 $19$。求其中位线的长度。请填一个整数。"
              },
              "answer": "15",
              "explanation": {
                "en": "The midsegment is the average of the bases: $m = \\frac{11 + 19}{2} = 15$.",
                "zh": "中位线等于两底的平均值：$m = \\frac{11 + 19}{2} = 15$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In rhombus $PQRS$ the diagonals intersect at $T$. Which statement is NOT necessarily true?",
                "zh": "菱形 $PQRS$ 的对角线交于 $T$。下列哪个说法不一定成立？"
              },
              "choices": [
                "$\\overline{PR} \\perp \\overline{QS}$",
                "$PT = TR$",
                "$PR = QS$",
                "$\\overline{PR}$ bisects $\\angle QPS$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A rhombus's diagonals are perpendicular, bisect each other, and bisect the vertex angles — but they are congruent only when the rhombus is a square. Students often transfer the congruent-diagonals property from rectangles to rhombi; the two special parallelograms have different diagonal upgrades.",
                "zh": "菱形的对角线互相垂直、互相平分并平分顶角——但只有当菱形是正方形时对角线才相等。同学们常把矩形的\"对角线相等\"性质误搬到菱形上；这两种特殊平行四边形的对角线附加性质并不相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A proof about kite $ABCD$ (with $AB = AD$ and $CB = CD$) states: \"$\\triangle ABC \\cong \\triangle ADC$.\" Which reason justifies this step?",
                "zh": "关于筝形 $ABCD$（$AB = AD$，$CB = CD$）的证明写道：\"$\\triangle ABC \\cong \\triangle ADC$\"。这一步的依据是什么？"
              },
              "choices": [
                "SSS, using $AB = AD$, $CB = CD$, and $AC = AC$",
                "SAS, using the perpendicular diagonals",
                "ASA, using the bisected vertex angles",
                "HL, since the diagonals are perpendicular"
              ],
              "answer": 0,
              "explanation": {
                "en": "The two pairs of congruent sides are given by the kite definition, and diagonal $\\overline{AC}$ is shared (Reflexive Property), so SSS applies immediately. The other choices use facts (perpendicular diagonals, bisected angles) that are consequences proved AFTER this congruence, so citing them here would be circular reasoning.",
                "zh": "两组相等的边由筝形的定义给出，对角线 $\\overline{AC}$ 是公共边（反身性质），因此可直接用 SSS。其他选项用到的事实（对角线垂直、顶角被平分）都是在这个全等之后才能证明的结论，在此引用会构成循环论证。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement is true?",
                "zh": "下列哪个说法正确？"
              },
              "choices": [
                "Every rhombus is a square",
                "Every square is a rhombus",
                "Every parallelogram is a rectangle",
                "Every trapezoid is a parallelogram"
              ],
              "answer": 1,
              "explanation": {
                "en": "A square has four congruent sides, so it satisfies the definition of a rhombus — always. The first choice reverses the family tree: a rhombus is only sometimes a square (it needs right angles). Trapezoids have exactly one pair of parallel sides, so they are never parallelograms.",
                "zh": "正方形四条边都相等，满足菱形的定义——所以\"每个正方形都是菱形\"总成立。第一个选项把家族树读反了：菱形只有具备直角时才是正方形。梯形恰有一组对边平行，因此绝不是平行四边形。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Isosceles trapezoid $ABCD$ has bases $\\overline{AB} \\parallel \\overline{DC}$ and $m\\angle A = 71^\\circ$. Find $m\\angle D$ in degrees. Give a whole number.",
                "zh": "等腰梯形 $ABCD$ 中，底边 $\\overline{AB} \\parallel \\overline{DC}$，$m\\angle A = 71^\\circ$。求 $m\\angle D$ 的度数。请填一个整数。"
              },
              "answer": "109",
              "explanation": {
                "en": "$\\angle A$ and $\\angle D$ are co-interior (same-side interior) angles between the parallel bases, so they are supplementary: $m\\angle D = 180^\\circ - 71^\\circ = 109^\\circ$. (The angle congruent to $\\angle A$ is the other base angle $\\angle B$, which also measures $71^\\circ$.)",
                "zh": "$\\angle A$ 与 $\\angle D$ 是两条平行底边之间的同旁内角，互补：$m\\angle D = 180^\\circ - 71^\\circ = 109^\\circ$。（与 $\\angle A$ 相等的是同一底上的另一个底角 $\\angle B$，也是 $71^\\circ$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Quadrilateral $ABCD$ has vertices $A(0, 0)$, $B(6, 0)$, $C(8, 3)$, $D(2, 3)$. What is its most precise classification?",
                "zh": "四边形 $ABCD$ 的顶点为 $A(0, 0)$、$B(6, 0)$、$C(8, 3)$、$D(2, 3)$。它最精确的分类是什么？"
              },
              "choices": [
                "Rectangle",
                "Rhombus",
                "Parallelogram",
                "Isosceles trapezoid"
              ],
              "answer": 2,
              "explanation": {
                "en": "Slope of $\\overline{AB}$ = slope of $\\overline{DC}$ = $0$, and slope of $\\overline{BC}$ = slope of $\\overline{AD}$ = $\\frac{3}{2}$, so it is a parallelogram. It is not a rectangle since $0 \\cdot \\frac{3}{2} \\ne -1$, and not a rhombus since $AB = 6$ while $BC = \\sqrt{2^2 + 3^2} = \\sqrt{13}$. \"Isosceles trapezoid\" tempts because the horizontal sides look like bases, but a trapezoid has only ONE parallel pair.",
                "zh": "$\\overline{AB}$ 与 $\\overline{DC}$ 的斜率都是 $0$，$\\overline{BC}$ 与 $\\overline{AD}$ 的斜率都是 $\\frac{3}{2}$，所以是平行四边形。因为 $0 \\cdot \\frac{3}{2} \\ne -1$，不是矩形；又 $AB = 6$ 而 $BC = \\sqrt{2^2 + 3^2} = \\sqrt{13}$，不是菱形。\"等腰梯形\"具有迷惑性，因为两条水平边看起来像底，但梯形只能有一组平行的对边。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In kite $ABCD$, $AB = AD$ and $CB = CD$. The diagonals intersect at $E$ with $BE = 6$ and $AE = 8$. Find $AB$. Give a whole number.",
                "zh": "筝形 $ABCD$ 中，$AB = AD$，$CB = CD$。对角线交于 $E$，$BE = 6$，$AE = 8$。求 $AB$。请填一个整数。"
              },
              "answer": "10",
              "explanation": {
                "en": "The diagonals of a kite are perpendicular, so $\\triangle ABE$ is a right triangle with legs $6$ and $8$. By the Pythagorean Theorem, $AB = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ (a 6–8–10 right triangle).",
                "zh": "筝形的对角线互相垂直，所以 $\\triangle ABE$ 是直角边为 $6$ 和 $8$ 的直角三角形。由勾股定理，$AB = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$（6–8–10 直角三角形）。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "similarity",
      "title": "Unit 8: Similarity",
      "titleZh": "第八单元：相似",
      "lessons": [
        {
          "id": "similar-polygons-and-triangles",
          "title": "Similar Polygons and Triangle Similarity",
          "titleZh": "相似多边形与三角形相似判定",
          "content": [
            {
              "type": "h2",
              "en": "Same Shape, Different Size",
              "zh": "形状相同，大小不同"
            },
            {
              "type": "p",
              "en": "Two figures are similar if one is an enlargement or reduction of the other: they have exactly the same shape but not necessarily the same size. For polygons, this means two things must both be true: corresponding angles are congruent, and corresponding sides are proportional. We write $\\triangle ABC \\sim \\triangle DEF$, and the order of the letters tells you the correspondence: $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$.",
              "zh": "如果一个图形是另一个图形的放大或缩小，这两个图形就叫做相似图形：它们形状完全相同，但大小不一定相同。对于多边形，这意味着两个条件必须同时成立：对应角相等，对应边成比例。我们记作 $\\triangle ABC \\sim \\triangle DEF$，字母的顺序告诉你对应关系：$A \\leftrightarrow D$，$B \\leftrightarrow E$，$C \\leftrightarrow F$。"
            },
            {
              "type": "math",
              "tex": "\\triangle ABC \\sim \\triangle DEF \\;\\Longleftrightarrow\\; \\angle A \\cong \\angle D,\\ \\angle B \\cong \\angle E,\\ \\angle C \\cong \\angle F \\ \\text{and}\\ \\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}"
            },
            {
              "type": "h3",
              "en": "Scale Factor, Perimeter, and Area",
              "zh": "相似比、周长与面积"
            },
            {
              "type": "p",
              "en": "The common ratio of corresponding sides is the scale factor $k$. If $\\triangle ABC \\sim \\triangle DEF$ with $\\frac{AB}{DE} = k$, then every length in the first triangle is $k$ times the matching length in the second — sides, perimeters, altitudes, medians, all of them. Area behaves differently: since area involves two lengths multiplied together (a base and a height, each scaled by $k$), areas are related by $k^2$.",
              "zh": "对应边的公共比值叫做相似比 $k$。若 $\\triangle ABC \\sim \\triangle DEF$ 且 $\\frac{AB}{DE} = k$，则第一个三角形中的每一个长度都是第二个三角形中对应长度的 $k$ 倍——边长、周长、高、中线，全都如此。面积则不同：因为面积是两个长度相乘（底和高各被放大 $k$ 倍），所以面积之比是 $k^2$。"
            },
            {
              "type": "math",
              "tex": "\\frac{\\text{perimeter of } \\triangle ABC}{\\text{perimeter of } \\triangle DEF} = k, \\qquad \\frac{\\text{area of } \\triangle ABC}{\\text{area of } \\triangle DEF} = k^2"
            },
            {
              "type": "note",
              "en": "Common mistake: if the scale factor is $3$, the areas are in the ratio $9 : 1$, not $3 : 1$. On a test, ask yourself \"one dimension or two?\" — lengths use $k$, areas use $k^2$. Also read similarity statements carefully: in $\\triangle ABC \\sim \\triangle DEF$, side $\\overline{BC}$ corresponds to $\\overline{EF}$, not to $\\overline{DE}$.",
              "zh": "常见错误：若相似比为 $3$，则面积之比为 $9 : 1$，而不是 $3 : 1$。考试时先问自己\"是一维还是二维？\"——长度用 $k$，面积用 $k^2$。此外要仔细读相似记号：在 $\\triangle ABC \\sim \\triangle DEF$ 中，边 $\\overline{BC}$ 对应 $\\overline{EF}$，而不是 $\\overline{DE}$。"
            },
            {
              "type": "h3",
              "en": "Three Shortcuts: AA, SAS, and SSS Similarity",
              "zh": "三个判定捷径：AA、SAS 与 SSS 相似"
            },
            {
              "type": "p",
              "en": "For general polygons you must check all the angles and all the sides, but triangles are rigid enough that a short list of conditions is guaranteed to force similarity:",
              "zh": "对一般多边形必须逐一检查所有角和所有边，但三角形足够\"刚性\"，只需验证少量条件就能保证相似："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "AA Similarity: if two angles of one triangle are congruent to two angles of another, the triangles are similar. (The third pair is automatic, since angles sum to $180^\\circ$.)",
                  "zh": "AA 相似：若一个三角形的两个角分别与另一个三角形的两个角相等，则两三角形相似。（由内角和为 $180^\\circ$，第三对角自动相等。）"
                },
                {
                  "en": "SAS Similarity: if two pairs of corresponding sides are proportional and the included angles are congruent, the triangles are similar.",
                  "zh": "SAS 相似：若两组对应边成比例，且夹角相等，则两三角形相似。"
                },
                {
                  "en": "SSS Similarity: if all three pairs of corresponding sides are proportional, the triangles are similar.",
                  "zh": "SSS 相似：若三组对应边都成比例，则两三角形相似。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Do not confuse SAS Similarity with SAS Congruence. Congruence requires the sides to be equal; similarity only requires them to be proportional. And the angle really must be the included angle — two proportional sides with a congruent non-included angle is not a valid similarity criterion.",
              "zh": "不要把 SAS 相似与 SAS 全等混淆。全等要求对应边相等；相似只要求对应边成比例。而且这个角必须是夹角——两组对应边成比例加上一个相等的非夹角，并不能判定相似。"
            },
            {
              "type": "h3",
              "en": "Proportions and Indirect Measurement",
              "zh": "比例与间接测量"
            },
            {
              "type": "p",
              "en": "Once two triangles are known to be similar, any missing side can be found by writing a proportion between corresponding sides and cross-multiplying. This is the idea behind indirect measurement. On a sunny day, the sun's rays are parallel, so a vertical object and its shadow form a right triangle whose acute angle at the ground is the same for every object at that moment. By AA, your triangle and a flagpole's triangle are similar, so $\\frac{\\text{your height}}{\\text{your shadow}} = \\frac{\\text{pole height}}{\\text{pole shadow}}$. A mirror on the ground works the same way: the angle of incidence equals the angle of reflection, giving congruent angles at the mirror and two right angles at your feet and the object's base — AA again.",
              "zh": "一旦确定两个三角形相似，就可以对对应边列比例式并交叉相乘求出未知边。这正是间接测量的原理。晴天时太阳光线互相平行，因此竖直物体和它的影子构成直角三角形，且同一时刻每个物体在地面处的锐角都相同。由 AA 判定，你的三角形与旗杆的三角形相似，故 $\\frac{\\text{你的身高}}{\\text{你的影长}} = \\frac{\\text{旗杆高}}{\\text{旗杆影长}}$。放在地面上的镜子原理相同：入射角等于反射角，使镜子处的两个角相等，加上你脚下和物体底部的两个直角——又是 AA。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Identifying the criterion and finding a side",
                "zh": "例题 1：识别判定方法并求边长"
              },
              "problem": {
                "en": "In $\\triangle ABC$, $AB = 6$, $AC = 9$, and $m\\angle A = 52^\\circ$. In $\\triangle DEF$, $DE = 10$, $DF = 15$, and $m\\angle D = 52^\\circ$. Show that the triangles are similar, state the scale factor from $\\triangle ABC$ to $\\triangle DEF$, and find $EF$ given that $BC = 8$.",
                "zh": "在 $\\triangle ABC$ 中，$AB = 6$，$AC = 9$，$m\\angle A = 52^\\circ$。在 $\\triangle DEF$ 中，$DE = 10$，$DF = 15$，$m\\angle D = 52^\\circ$。证明两三角形相似，写出从 $\\triangle ABC$ 到 $\\triangle DEF$ 的相似比，并在 $BC = 8$ 的条件下求 $EF$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Reason like a two-column proof. Statement: $\\frac{AB}{DE} = \\frac{6}{10} = \\frac{3}{5}$ and $\\frac{AC}{DF} = \\frac{9}{15} = \\frac{3}{5}$. Reason: arithmetic — two pairs of sides are proportional. Statement: $\\angle A \\cong \\angle D$. Reason: both measure $52^\\circ$, and these are the included angles between the proportional sides. Conclusion: $\\triangle ABC \\sim \\triangle DEF$ by SAS Similarity, with scale factor $k = \\frac{3}{5}$ from $\\triangle ABC$ to $\\triangle DEF$.",
                  "zh": "按两栏证明的方式推理。命题：$\\frac{AB}{DE} = \\frac{6}{10} = \\frac{3}{5}$，$\\frac{AC}{DF} = \\frac{9}{15} = \\frac{3}{5}$。理由：计算可得——两组对应边成比例。命题：$\\angle A \\cong \\angle D$。理由：两角都是 $52^\\circ$，且它们是这两组成比例边的夹角。结论：由 SAS 相似判定，$\\triangle ABC \\sim \\triangle DEF$，从 $\\triangle ABC$ 到 $\\triangle DEF$ 的相似比 $k = \\frac{3}{5}$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{BC}{EF} = \\frac{3}{5} \\;\\Rightarrow\\; \\frac{8}{EF} = \\frac{3}{5} \\;\\Rightarrow\\; 3 \\cdot EF = 40 \\;\\Rightarrow\\; EF = \\frac{40}{3}"
                },
                {
                  "type": "p",
                  "en": "So $EF = \\frac{40}{3} \\approx 13.3$. Leave the exact value $\\frac{40}{3}$ unless the problem asks you to round.",
                  "zh": "所以 $EF = \\frac{40}{3} \\approx 13.3$。除非题目要求四舍五入，否则保留精确值 $\\frac{40}{3}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Indirect measurement with shadows",
                "zh": "例题 2：利用影子的间接测量"
              },
              "problem": {
                "en": "At 4 p.m., a student who is $1.6$ m tall casts a shadow $2.4$ m long. At the same moment, a nearby tree casts a shadow $13.2$ m long. Both the student and the tree stand vertically on level ground. How tall is the tree?",
                "zh": "下午 4 点，一名身高 $1.6$ m 的学生投下 $2.4$ m 长的影子。同一时刻，附近一棵树投下 $13.2$ m 长的影子。学生和树都竖直立在水平地面上。这棵树有多高？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Each object forms a right triangle: a vertical leg (the height), a horizontal leg (the shadow), and the sun's ray as hypotenuse. The right angles are congruent, and the sun's rays are parallel, so the angles of elevation at the shadow tips are congruent. By AA, the triangles are similar, so heights and shadows are proportional:",
                  "zh": "每个物体都构成一个直角三角形：竖直的直角边（高度）、水平的直角边（影长），太阳光线为斜边。两个直角相等，且太阳光线互相平行，所以影子末端处的仰角相等。由 AA 判定两三角形相似，故高度与影长成比例："
                },
                {
                  "type": "math",
                  "tex": "\\frac{h}{13.2} = \\frac{1.6}{2.4} = \\frac{2}{3} \\;\\Rightarrow\\; h = \\frac{2}{3}(13.2) = 8.8"
                },
                {
                  "type": "p",
                  "en": "The tree is $8.8$ m tall. Sanity check: the tree's shadow is $5.5$ times the student's shadow, and $1.6 \\times 5.5 = 8.8$. ✓",
                  "zh": "树高 $8.8$ m。检验：树影是学生影长的 $5.5$ 倍，而 $1.6 \\times 5.5 = 8.8$。✓"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In $\\triangle ABC$, $m\\angle A = 50^\\circ$ and $m\\angle B = 60^\\circ$. In $\\triangle DEF$, $m\\angle D = 60^\\circ$ and $m\\angle E = 70^\\circ$. Which is true?",
                "zh": "在 $\\triangle ABC$ 中，$m\\angle A = 50^\\circ$，$m\\angle B = 60^\\circ$。在 $\\triangle DEF$ 中，$m\\angle D = 60^\\circ$，$m\\angle E = 70^\\circ$。下列哪项正确？"
              },
              "choices": [
                "The triangles are similar by AA",
                "The triangles are similar by SAS",
                "The triangles are not similar",
                "More information is needed"
              ],
              "answer": 0,
              "explanation": {
                "en": "In $\\triangle ABC$ the third angle is $180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ$, so its angles are $50^\\circ, 60^\\circ, 70^\\circ$. In $\\triangle DEF$ the third angle is $50^\\circ$, so the angle sets match and AA applies. \"Not similar\" is tempting because the named pairs $\\angle A, \\angle D$ don't match — but the correspondence is $A \\leftrightarrow F$-type, not letter-by-letter as listed.",
                "zh": "在 $\\triangle ABC$ 中第三个角为 $180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ$，三个角是 $50^\\circ, 60^\\circ, 70^\\circ$。在 $\\triangle DEF$ 中第三个角为 $50^\\circ$，两组角完全相同，可用 AA 判定。\"不相似\"很有迷惑性，因为题中列出的 $\\angle A$ 与 $\\angle D$ 度数不同——但对应关系并不是按题中字母顺序，而要按相等的角来配对。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\triangle ABC \\sim \\triangle DEF$ with scale factor $\\frac{3}{2}$ from $\\triangle ABC$ to $\\triangle DEF$. If the perimeter of $\\triangle ABC$ is $36$ cm, what is the perimeter of $\\triangle DEF$?",
                "zh": "$\\triangle ABC \\sim \\triangle DEF$，从 $\\triangle ABC$ 到 $\\triangle DEF$ 的相似比为 $\\frac{3}{2}$。若 $\\triangle ABC$ 的周长为 $36$ cm，则 $\\triangle DEF$ 的周长是多少？"
              },
              "choices": [
                "$54$ cm",
                "$16$ cm",
                "$24$ cm",
                "$81$ cm"
              ],
              "answer": 2,
              "explanation": {
                "en": "Perimeters are in the same ratio as sides: $\\frac{36}{P} = \\frac{3}{2}$, so $P = 24$ cm. Choosing $54$ means multiplying by $\\frac{3}{2}$ instead of dividing — but $\\triangle ABC$ is the larger triangle here, so $\\triangle DEF$ must be smaller. $81$ comes from wrongly using $k^2$, which applies to areas, not perimeters.",
                "zh": "周长之比等于边长之比：$\\frac{36}{P} = \\frac{3}{2}$，所以 $P = 24$ cm。选 $54$ 是错把除法当成乘法——这里 $\\triangle ABC$ 是较大的三角形，$\\triangle DEF$ 应更小。$81$ 则是错误地使用了 $k^2$，那只适用于面积，不适用于周长。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two similar pentagons have scale factor $3$ (large to small). The area of the smaller pentagon is $8$ cm$^2$. Find the area of the larger pentagon in cm$^2$. Give a whole number.",
                "zh": "两个相似五边形的相似比为 $3$（大比小）。较小五边形的面积为 $8$ cm$^2$。求较大五边形的面积（单位 cm$^2$）。请填一个整数。"
              },
              "answer": "72",
              "explanation": {
                "en": "Areas scale by the square of the scale factor: the ratio of areas is $3^2 = 9$, so the larger area is $9 \\times 8 = 72$ cm$^2$. A common error is $3 \\times 8 = 24$, which uses $k$ instead of $k^2$.",
                "zh": "面积按相似比的平方缩放：面积之比为 $3^2 = 9$，所以较大的面积是 $9 \\times 8 = 72$ cm$^2$。常见错误是算成 $3 \\times 8 = 24$，即用了 $k$ 而不是 $k^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In $\\triangle PQR$, $PQ = 6$, $PR = 9$, and $m\\angle P = 40^\\circ$. In $\\triangle XYZ$, $XY = 8$, $XZ = 12$, and $m\\angle X = 40^\\circ$. Which criterion proves $\\triangle PQR \\sim \\triangle XYZ$?",
                "zh": "在 $\\triangle PQR$ 中，$PQ = 6$，$PR = 9$，$m\\angle P = 40^\\circ$。在 $\\triangle XYZ$ 中，$XY = 8$，$XZ = 12$，$m\\angle X = 40^\\circ$。哪一个判定可以证明 $\\triangle PQR \\sim \\triangle XYZ$？"
              },
              "choices": [
                "AA Similarity",
                "SAS Similarity",
                "SSS Similarity",
                "They cannot be proven similar"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\frac{PQ}{XY} = \\frac{6}{8} = \\frac{3}{4}$ and $\\frac{PR}{XZ} = \\frac{9}{12} = \\frac{3}{4}$, and the congruent $40^\\circ$ angles are included between those sides, so SAS Similarity applies. AA fails because only one pair of angles is known; SSS fails because the third sides are not given.",
                "zh": "$\\frac{PQ}{XY} = \\frac{6}{8} = \\frac{3}{4}$，$\\frac{PR}{XZ} = \\frac{9}{12} = \\frac{3}{4}$，且相等的 $40^\\circ$ 角是这两组边的夹角，因此可用 SAS 相似判定。AA 不成立，因为只知道一对角相等；SSS 不成立，因为第三条边未知。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$\\triangle ABC \\sim \\triangle DEF$, $AB = 8$, $DE = 12$, and $BC = 10$. Find $EF$. Give a whole number.",
                "zh": "$\\triangle ABC \\sim \\triangle DEF$，$AB = 8$，$DE = 12$，$BC = 10$。求 $EF$。请填一个整数。"
              },
              "answer": "15",
              "explanation": {
                "en": "Corresponding sides are proportional: $\\frac{AB}{DE} = \\frac{BC}{EF}$, so $\\frac{8}{12} = \\frac{10}{EF}$. Cross-multiplying gives $8 \\cdot EF = 120$, so $EF = 15$.",
                "zh": "对应边成比例：$\\frac{AB}{DE} = \\frac{BC}{EF}$，即 $\\frac{8}{12} = \\frac{10}{EF}$。交叉相乘得 $8 \\cdot EF = 120$，故 $EF = 15$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A $5$-ft-tall student casts an $8$-ft shadow. At the same moment a flagpole casts a $32$-ft shadow. How tall is the flagpole?",
                "zh": "一名身高 $5$ ft 的学生投下 $8$ ft 长的影子。同一时刻一根旗杆投下 $32$ ft 长的影子。旗杆有多高？"
              },
              "choices": [
                "$51.2$ ft",
                "$35$ ft",
                "$12.5$ ft",
                "$20$ ft"
              ],
              "answer": 3,
              "explanation": {
                "en": "The sun's parallel rays give similar right triangles (AA), so $\\frac{h}{32} = \\frac{5}{8}$ and $h = 20$ ft. $51.2$ comes from flipping the ratio ($\\frac{8}{5}$), and $12.5$ comes from pairing the student's height with the pole's shadow incorrectly.",
                "zh": "平行的太阳光线产生相似的直角三角形（AA 判定），所以 $\\frac{h}{32} = \\frac{5}{8}$，$h = 20$ ft。$51.2$ 是把比例写反（用了 $\\frac{8}{5}$）；$12.5$ 则是把学生身高与旗杆影长错误配对的结果。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "One triangle has sides $4$, $6$, $8$; another has sides $8$, $10$, $12$. Are the triangles similar?",
                "zh": "一个三角形的三边为 $4$、$6$、$8$；另一个三角形的三边为 $8$、$10$、$12$。这两个三角形相似吗？"
              },
              "choices": [
                "Yes, by SSS Similarity",
                "Yes, by SAS Similarity",
                "No, because the sides are not all proportional",
                "No, because no angles are given"
              ],
              "answer": 2,
              "explanation": {
                "en": "Check the ratios of corresponding sides (shortest to shortest, etc.): $\\frac{4}{8} = \\frac{1}{2}$, $\\frac{6}{10} = \\frac{3}{5}$, $\\frac{8}{12} = \\frac{2}{3}$. The ratios are not all equal, so SSS Similarity fails. \"Yes, by SSS\" is tempting because each side of the second triangle is $4$ more than the first — but similarity needs a common multiplier, not a common addend. The last choice is wrong because SSS needs no angle information.",
                "zh": "按对应关系（最短对最短等）检查边长比：$\\frac{4}{8} = \\frac{1}{2}$，$\\frac{6}{10} = \\frac{3}{5}$，$\\frac{8}{12} = \\frac{2}{3}$。比值不全相等，SSS 相似不成立。\"是，由 SSS\"很有迷惑性，因为第二个三角形每边都比第一个多 $4$——但相似需要的是共同的倍数，而不是共同的加数。最后一个选项也不对，因为 SSS 判定根本不需要角的信息。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A mirror lies flat on level ground $3$ m from a student's feet and $12$ m from the base of a building. The student's eyes are $1.5$ m above the ground, and looking into the mirror she sees the top of the building. How tall is the building in meters? Give a whole number.",
                "zh": "一面镜子平放在水平地面上，距一名学生的脚 $3$ m，距一栋建筑物底部 $12$ m。该学生的眼睛离地 $1.5$ m，她从镜中恰好看到建筑物顶端。这栋建筑物高多少米？请填一个整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "The angle of incidence equals the angle of reflection, so the two right triangles (eye–feet–mirror and top–base–mirror) are similar by AA. Then $\\frac{h}{12} = \\frac{1.5}{3}$, so $h = 12 \\cdot \\frac{1.5}{3} = 6$ m.",
                "zh": "入射角等于反射角，所以两个直角三角形（眼—脚—镜与楼顶—楼底—镜）由 AA 判定相似。于是 $\\frac{h}{12} = \\frac{1.5}{3}$，得 $h = 12 \\cdot \\frac{1.5}{3} = 6$ m。"
              }
            }
          ]
        },
        {
          "id": "proportionality-theorems",
          "title": "Proportionality Theorems",
          "titleZh": "比例线段定理",
          "content": [
            {
              "type": "h2",
              "en": "When Parallel Lines Split Sides",
              "zh": "平行线分割边时会发生什么"
            },
            {
              "type": "p",
              "en": "Similarity does more than compare whole triangles — it explains what happens inside a triangle when a line parallel to one side cuts across the other two. This lesson collects four tools built on that idea: the Triangle Proportionality Theorem and its converse, the parallel-transversal proportion, the Triangle Angle Bisector Theorem, and the geometric mean relationships created when an altitude is drawn to the hypotenuse of a right triangle.",
              "zh": "相似不仅用于比较两个完整的三角形——它还能解释当一条平行于三角形一边的直线穿过另外两边时发生的事情。本课汇集了建立在这一思想上的四个工具：三角形比例定理及其逆定理、平行线截线段成比例、三角形内角平分线定理，以及直角三角形斜边上的高所产生的比例中项关系。"
            },
            {
              "type": "h3",
              "en": "The Triangle Proportionality Theorem and Its Converse",
              "zh": "三角形比例定理及其逆定理"
            },
            {
              "type": "p",
              "en": "Triangle Proportionality Theorem (the \"side splitter\"): if a line is parallel to one side of a triangle and intersects the other two sides, it divides those sides proportionally. In $\\triangle ABC$, let $D$ lie on $\\overline{AB}$ and $E$ lie on $\\overline{AC}$ with $\\overline{DE} \\parallel \\overline{BC}$. Then:",
              "zh": "三角形比例定理（\"分边定理\"）：如果一条直线平行于三角形的一边并与另外两边相交，那么它把这两边按相同比例分割。在 $\\triangle ABC$ 中，设 $D$ 在 $\\overline{AB}$ 上，$E$ 在 $\\overline{AC}$ 上，且 $\\overline{DE} \\parallel \\overline{BC}$。则："
            },
            {
              "type": "math",
              "tex": "\\overline{DE} \\parallel \\overline{BC} \\;\\Rightarrow\\; \\frac{AD}{DB} = \\frac{AE}{EC} \\quad\\text{and equivalently}\\quad \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}"
            },
            {
              "type": "p",
              "en": "The converse is just as useful: if $\\frac{AD}{DB} = \\frac{AE}{EC}$, then $\\overline{DE} \\parallel \\overline{BC}$. This is a standard way to prove two segments are parallel without ever measuring an angle. The theorem itself is proved with similarity: $\\overline{DE} \\parallel \\overline{BC}$ gives congruent corresponding angles, so $\\triangle ADE \\sim \\triangle ABC$ by AA, and the proportions follow.",
              "zh": "逆定理同样有用：若 $\\frac{AD}{DB} = \\frac{AE}{EC}$，则 $\\overline{DE} \\parallel \\overline{BC}$。这是不用测量任何角就能证明两条线段平行的标准方法。定理本身用相似来证明：$\\overline{DE} \\parallel \\overline{BC}$ 产生相等的同位角，因此由 AA 得 $\\triangle ADE \\sim \\triangle ABC$，比例式随之成立。"
            },
            {
              "type": "note",
              "en": "Common mistake: mixing \"part-to-part\" and \"part-to-whole\" ratios in one proportion. $\\frac{AD}{DB} = \\frac{AE}{EC}$ compares parts to parts; $\\frac{AD}{AB} = \\frac{DE}{BC}$ compares parts to wholes. Writing $\\frac{AD}{DB} = \\frac{DE}{BC}$ is wrong — the parallel segment $DE$ can only be compared using whole sides.",
              "zh": "常见错误：在同一个比例式中混用\"部分比部分\"和\"部分比整体\"。$\\frac{AD}{DB} = \\frac{AE}{EC}$ 是部分比部分；$\\frac{AD}{AB} = \\frac{DE}{BC}$ 是部分比整体。写成 $\\frac{AD}{DB} = \\frac{DE}{BC}$ 是错误的——平行线段 $DE$ 只能与整条边作比较。"
            },
            {
              "type": "h3",
              "en": "Parallel Transversals and the Angle Bisector Theorem",
              "zh": "平行截线与内角平分线定理"
            },
            {
              "type": "p",
              "en": "If three (or more) parallel lines intersect two transversals, they divide the transversals proportionally. Suppose parallel lines $\\ell_1, \\ell_2, \\ell_3$ cut one transversal at $A$, $B$, $C$ and another at $D$, $E$, $F$, in that order. Then:",
              "zh": "如果三条（或更多）平行线与两条截线相交，它们把两条截线按相同比例分割。设平行线 $\\ell_1, \\ell_2, \\ell_3$ 依次交第一条截线于 $A$、$B$、$C$，交第二条截线于 $D$、$E$、$F$。则："
            },
            {
              "type": "math",
              "tex": "\\frac{AB}{BC} = \\frac{DE}{EF}"
            },
            {
              "type": "p",
              "en": "A different kind of splitting happens with an angle bisector. Triangle Angle Bisector Theorem: if $\\overrightarrow{AD}$ bisects $\\angle A$ of $\\triangle ABC$ with $D$ on $\\overline{BC}$, then $D$ divides the opposite side in the same ratio as the adjacent sides:",
              "zh": "角平分线带来另一种分割。三角形内角平分线定理：若 $\\overrightarrow{AD}$ 平分 $\\triangle ABC$ 的 $\\angle A$，$D$ 在 $\\overline{BC}$ 上，则 $D$ 按两条邻边的比例分割对边："
            },
            {
              "type": "math",
              "tex": "\\frac{BD}{DC} = \\frac{AB}{AC}"
            },
            {
              "type": "h3",
              "en": "Geometric Means in Right Triangles",
              "zh": "直角三角形中的比例中项"
            },
            {
              "type": "p",
              "en": "The geometric mean of positive numbers $a$ and $b$ is $x = \\sqrt{ab}$, the number satisfying $\\frac{a}{x} = \\frac{x}{b}$. Now take right triangle $ABC$ with the right angle at $C$, and draw the altitude $\\overline{CD}$ to the hypotenuse, so $D$ is on $\\overline{AB}$. This one segment creates three similar triangles: $\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC$ (each pair shares an acute angle with the original and has a right angle, so AA applies). Matching sides in these triangles yields three famous relationships. Write $AD = p$, $DB = q$, $AB = c$, altitude $CD = h$, and legs $AC = b$, $BC = a$:",
              "zh": "正数 $a$、$b$ 的比例中项是 $x = \\sqrt{ab}$，即满足 $\\frac{a}{x} = \\frac{x}{b}$ 的数。现在取直角三角形 $ABC$，直角在 $C$，作斜边上的高 $\\overline{CD}$，$D$ 在 $\\overline{AB}$ 上。这一条线段产生了三个相似三角形：$\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC$（每一对都与原三角形共用一个锐角且各有一个直角，故由 AA 判定相似）。对应边成比例给出三个著名的关系。记 $AD = p$，$DB = q$，$AB = c$，高 $CD = h$，两条直角边 $AC = b$，$BC = a$："
            },
            {
              "type": "math",
              "tex": "h^2 = pq, \\qquad a^2 = qc, \\qquad b^2 = pc"
            },
            {
              "type": "note",
              "en": "Test tip: the altitude is the geometric mean of the two hypotenuse segments, while each leg is the geometric mean of the whole hypotenuse and the segment touching that leg. Students most often pair a leg with the wrong segment — the leg from $B$ goes with the piece at $B$. Also, keep answers exact: $h = \\sqrt{pq}$ may simplify, like $\\sqrt{4 \\cdot 9} = 6$ or $\\sqrt{50} = 5\\sqrt{2}$.",
              "zh": "考试提示：高是斜边两段的比例中项，而每条直角边是整条斜边与\"靠近该边的那一段\"的比例中项。学生最常犯的错误是把直角边与错误的一段配对——从 $B$ 出发的直角边应与 $B$ 处的那一段搭配。另外答案要保留精确值：$h = \\sqrt{pq}$ 可能可以化简，如 $\\sqrt{4 \\cdot 9} = 6$ 或 $\\sqrt{50} = 5\\sqrt{2}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Side splitter with algebra",
                "zh": "例题 1：结合代数的分边定理"
              },
              "problem": {
                "en": "In $\\triangle ABC$, point $D$ is on $\\overline{AB}$ and point $E$ is on $\\overline{AC}$ with $\\overline{DE} \\parallel \\overline{BC}$. Given $AD = x + 2$, $DB = 6$, $AE = x + 5$, and $EC = 8$, find $x$ and $AD$.",
                "zh": "在 $\\triangle ABC$ 中，点 $D$ 在 $\\overline{AB}$ 上，点 $E$ 在 $\\overline{AC}$ 上，且 $\\overline{DE} \\parallel \\overline{BC}$。已知 $AD = x + 2$，$DB = 6$，$AE = x + 5$，$EC = 8$。求 $x$ 和 $AD$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Statement: $\\frac{AD}{DB} = \\frac{AE}{EC}$. Reason: Triangle Proportionality Theorem, since $\\overline{DE} \\parallel \\overline{BC}$. Substitute and solve:",
                  "zh": "命题：$\\frac{AD}{DB} = \\frac{AE}{EC}$。理由：三角形比例定理（因为 $\\overline{DE} \\parallel \\overline{BC}$）。代入并求解："
                },
                {
                  "type": "math",
                  "tex": "\\frac{x + 2}{6} = \\frac{x + 5}{8} \\;\\Rightarrow\\; 8(x + 2) = 6(x + 5) \\;\\Rightarrow\\; 8x + 16 = 6x + 30 \\;\\Rightarrow\\; x = 7"
                },
                {
                  "type": "p",
                  "en": "So $AD = 7 + 2 = 9$. Check the ratios: $\\frac{9}{6} = \\frac{3}{2}$ and $\\frac{12}{8} = \\frac{3}{2}$. ✓ Equal part-to-part ratios are exactly what the parallel line guarantees.",
                  "zh": "所以 $AD = 7 + 2 = 9$。检验比值：$\\frac{9}{6} = \\frac{3}{2}$，$\\frac{12}{8} = \\frac{3}{2}$。✓ 部分比部分的比值相等，正是平行线所保证的。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Altitude to the hypotenuse, multi-step",
                "zh": "例题 2：斜边上的高的多步问题"
              },
              "problem": {
                "en": "In right triangle $ABC$, the right angle is at $C$, and the altitude from $C$ meets hypotenuse $\\overline{AB}$ at $D$. If $AD = 4$ and $DB = 16$, find the altitude $CD$, the leg $BC$, and the area of $\\triangle ABC$.",
                "zh": "在直角三角形 $ABC$ 中，直角在 $C$，从 $C$ 出发的高交斜边 $\\overline{AB}$ 于 $D$。若 $AD = 4$，$DB = 16$，求高 $CD$、直角边 $BC$ 以及 $\\triangle ABC$ 的面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The altitude is the geometric mean of the hypotenuse segments:",
                  "zh": "高是斜边两段的比例中项："
                },
                {
                  "type": "math",
                  "tex": "CD^2 = AD \\cdot DB = 4 \\cdot 16 = 64 \\;\\Rightarrow\\; CD = 8"
                },
                {
                  "type": "p",
                  "en": "The leg $\\overline{BC}$ touches the hypotenuse at $B$, so it pairs with segment $DB$ and the whole hypotenuse $AB = 4 + 16 = 20$:",
                  "zh": "直角边 $\\overline{BC}$ 在 $B$ 处与斜边相接，因此它与线段 $DB$ 和整条斜边 $AB = 4 + 16 = 20$ 搭配："
                },
                {
                  "type": "math",
                  "tex": "BC^2 = DB \\cdot AB = 16 \\cdot 20 = 320 \\;\\Rightarrow\\; BC = \\sqrt{320} = 8\\sqrt{5}"
                },
                {
                  "type": "p",
                  "en": "For the area, use the hypotenuse as base and the altitude as height: $\\text{Area} = \\frac{1}{2}(20)(8) = 80$ square units. Notice we never needed the Pythagorean Theorem — the geometric mean relations carried the whole problem.",
                  "zh": "求面积时以斜边为底、高为高：$\\text{面积} = \\frac{1}{2}(20)(8) = 80$ 平方单位。注意我们全程没有用到勾股定理——比例中项关系就解决了整个问题。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In $\\triangle ABC$, $D$ is on $\\overline{AB}$, $E$ is on $\\overline{AC}$, and $\\overline{DE} \\parallel \\overline{BC}$. Which theorem justifies the statement $\\frac{AD}{DB} = \\frac{AE}{EC}$?",
                "zh": "在 $\\triangle ABC$ 中，$D$ 在 $\\overline{AB}$ 上，$E$ 在 $\\overline{AC}$ 上，且 $\\overline{DE} \\parallel \\overline{BC}$。哪个定理可以作为 $\\frac{AD}{DB} = \\frac{AE}{EC}$ 的理由？"
              },
              "choices": [
                "Triangle Angle Bisector Theorem",
                "Triangle Proportionality Theorem",
                "Pythagorean Theorem",
                "Converse of the Triangle Proportionality Theorem"
              ],
              "answer": 1,
              "explanation": {
                "en": "A line parallel to one side that intersects the other two sides divides them proportionally — that is the Triangle Proportionality Theorem. The converse (last choice) is tempting, but it runs in the other direction: it uses the equal ratios to conclude the lines are parallel.",
                "zh": "平行于一边且与另两边相交的直线按比例分割这两边——这正是三角形比例定理。逆定理（最后一个选项）很有迷惑性，但它的方向相反：是由比值相等推出两线平行。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In $\\triangle ABC$, $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$ with $\\overline{DE} \\parallel \\overline{BC}$. If $AD = 5$, $DB = 10$, and $AE = 4$, find $EC$. Give a whole number.",
                "zh": "在 $\\triangle ABC$ 中，$D$ 在 $\\overline{AB}$ 上，$E$ 在 $\\overline{AC}$ 上，$\\overline{DE} \\parallel \\overline{BC}$。若 $AD = 5$，$DB = 10$，$AE = 4$，求 $EC$。请填一个整数。"
              },
              "answer": "8",
              "explanation": {
                "en": "By the Triangle Proportionality Theorem, $\\frac{AD}{DB} = \\frac{AE}{EC}$, so $\\frac{5}{10} = \\frac{4}{EC}$ and $EC = 8$.",
                "zh": "由三角形比例定理，$\\frac{AD}{DB} = \\frac{AE}{EC}$，即 $\\frac{5}{10} = \\frac{4}{EC}$，故 $EC = 8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In $\\triangle ABC$, $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$, with $AD = 6$, $DB = 9$, $AE = 8$, $EC = 12$. Is $\\overline{DE} \\parallel \\overline{BC}$?",
                "zh": "在 $\\triangle ABC$ 中，$D$ 在 $\\overline{AB}$ 上，$E$ 在 $\\overline{AC}$ 上，$AD = 6$，$DB = 9$，$AE = 8$，$EC = 12$。$\\overline{DE}$ 与 $\\overline{BC}$ 平行吗？"
              },
              "choices": [
                "Yes, by the Converse of the Triangle Proportionality Theorem",
                "Yes, because $DB - AD = EC - AE$ is impossible to satisfy otherwise",
                "No, because $AD \\ne AE$",
                "It cannot be determined without angle measures"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\frac{AD}{DB} = \\frac{6}{9} = \\frac{2}{3}$ and $\\frac{AE}{EC} = \\frac{8}{12} = \\frac{2}{3}$. Since the two sides are divided proportionally, the converse of the Triangle Proportionality Theorem gives $\\overline{DE} \\parallel \\overline{BC}$. The last choice is tempting, but no angles are needed — equal ratios alone force the parallel.",
                "zh": "$\\frac{AD}{DB} = \\frac{6}{9} = \\frac{2}{3}$，$\\frac{AE}{EC} = \\frac{8}{12} = \\frac{2}{3}$。两边被按相同比例分割，由三角形比例定理的逆定理得 $\\overline{DE} \\parallel \\overline{BC}$。最后一个选项有迷惑性，但这里不需要任何角度——比值相等本身就足以推出平行。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Three parallel lines cut two transversals. On the first transversal the consecutive segments are $6$ and $9$; on the second, the first consecutive segment is $10$. Find the second segment on the second transversal.",
                "zh": "三条平行线截两条截线。第一条截线上相邻两段的长为 $6$ 和 $9$；第二条截线上第一段长为 $10$。求第二条截线上的第二段长。"
              },
              "choices": [
                "$13$",
                "$6\\frac{2}{3}$",
                "$15$",
                "$13.5$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Parallel lines divide transversals proportionally: $\\frac{6}{9} = \\frac{10}{x}$, so $6x = 90$ and $x = 15$. The answer $13$ comes from adding $3$ (the difference $9 - 6$) instead of scaling; parallel lines preserve ratios, not differences. $6\\frac{2}{3}$ comes from flipping the proportion.",
                "zh": "平行线按比例分割截线：$\\frac{6}{9} = \\frac{10}{x}$，得 $6x = 90$，$x = 15$。答案 $13$ 是把差值 $3$（即 $9 - 6$）加上去而不是按比例缩放——平行线保持的是比值，不是差值。$6\\frac{2}{3}$ 则是把比例写反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In $\\triangle ABC$, $\\overrightarrow{AD}$ bisects $\\angle A$, with $D$ on $\\overline{BC}$. If $AB = 12$, $AC = 8$, and $BD = 9$, find $DC$. Give a whole number.",
                "zh": "在 $\\triangle ABC$ 中，$\\overrightarrow{AD}$ 平分 $\\angle A$，$D$ 在 $\\overline{BC}$ 上。若 $AB = 12$，$AC = 8$，$BD = 9$，求 $DC$。请填一个整数。"
              },
              "answer": "6",
              "explanation": {
                "en": "By the Triangle Angle Bisector Theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{12}{8} = \\frac{3}{2}$. So $\\frac{9}{DC} = \\frac{3}{2}$, giving $DC = 6$.",
                "zh": "由三角形内角平分线定理，$\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{12}{8} = \\frac{3}{2}$。所以 $\\frac{9}{DC} = \\frac{3}{2}$，得 $DC = 6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In right triangle $ABC$ with the right angle at $C$, the altitude from $C$ meets hypotenuse $\\overline{AB}$ at $D$, with $AD = 4$ and $DB = 9$. Find the altitude $CD$.",
                "zh": "在直角三角形 $ABC$ 中，直角在 $C$，从 $C$ 出发的高交斜边 $\\overline{AB}$ 于 $D$，$AD = 4$，$DB = 9$。求高 $CD$。"
              },
              "choices": [
                "$6.5$",
                "$6$",
                "$36$",
                "$\\sqrt{13}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The altitude to the hypotenuse is the geometric mean of the two segments: $CD = \\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$. The distractor $6.5$ is the arithmetic mean $\\frac{4+9}{2}$, a very common mix-up; $36$ is $CD^2$, forgetting the square root; $\\sqrt{13}$ comes from $\\sqrt{4 + 9}$.",
                "zh": "斜边上的高是斜边两段的比例中项：$CD = \\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$。干扰项 $6.5$ 是算术平均 $\\frac{4+9}{2}$，这是非常常见的混淆；$36$ 是 $CD^2$，忘了开方；$\\sqrt{13}$ 来自 $\\sqrt{4 + 9}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In right triangle $PQR$ with the right angle at $Q$, the altitude from $Q$ meets hypotenuse $\\overline{PR}$ at $S$. The hypotenuse $PR = 25$ and $PS = 9$ (the segment adjacent to leg $\\overline{PQ}$). Find the leg $PQ$. Give a whole number.",
                "zh": "在直角三角形 $PQR$ 中，直角在 $Q$，从 $Q$ 出发的高交斜边 $\\overline{PR}$ 于 $S$。斜边 $PR = 25$，且 $PS = 9$（与直角边 $\\overline{PQ}$ 相邻的一段）。求直角边 $PQ$。请填一个整数。"
              },
              "answer": "15",
              "explanation": {
                "en": "Each leg is the geometric mean of the whole hypotenuse and the adjacent segment: $PQ^2 = PS \\cdot PR = 9 \\cdot 25 = 225$, so $PQ = 15$. Pairing the leg with the far segment $SR = 16$ would wrongly give $\\sqrt{16 \\cdot 25} = 20$, which is actually the other leg $QR$.",
                "zh": "每条直角边是整条斜边与相邻一段的比例中项：$PQ^2 = PS \\cdot PR = 9 \\cdot 25 = 225$，所以 $PQ = 15$。若错误地与较远的一段 $SR = 16$ 配对，会得到 $\\sqrt{16 \\cdot 25} = 20$——那其实是另一条直角边 $QR$ 的长。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In right triangle $ABC$ with the right angle at $C$, altitude $\\overline{CD}$ is drawn to hypotenuse $\\overline{AB}$. Which statement about $\\triangle ACD$, $\\triangle CBD$, and $\\triangle ABC$ is true?",
                "zh": "在直角三角形 $ABC$ 中，直角在 $C$，作斜边 $\\overline{AB}$ 上的高 $\\overline{CD}$。关于 $\\triangle ACD$、$\\triangle CBD$ 和 $\\triangle ABC$，下列哪个说法正确？"
              },
              "choices": [
                "Only the two small triangles are similar to each other",
                "Each small triangle is similar to $\\triangle ABC$, but not to the other small triangle",
                "The three triangles are congruent",
                "All three triangles are similar to one another"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\triangle ACD$ shares $\\angle A$ with $\\triangle ABC$ and both have a right angle, so they are similar by AA; likewise $\\triangle CBD \\sim \\triangle ABC$ through shared $\\angle B$. Since both small triangles are similar to $\\triangle ABC$, they are also similar to each other. They are generally not congruent — the second choice is tempting, but similarity is transitive, so the small triangles cannot fail to be similar to each other.",
                "zh": "$\\triangle ACD$ 与 $\\triangle ABC$ 共用 $\\angle A$ 且各有一个直角，由 AA 相似；同理 $\\triangle CBD$ 通过共用的 $\\angle B$ 与 $\\triangle ABC$ 相似。既然两个小三角形都与 $\\triangle ABC$ 相似，它们彼此也相似。它们一般并不全等——第二个选项有迷惑性，但相似具有传递性，两个小三角形不可能彼此不相似。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "right-triangles-trigonometry",
      "title": "Unit 9: Right Triangles and Trigonometry",
      "titleZh": "第九单元：直角三角形与三角比",
      "lessons": [
        {
          "id": "pythagorean-special-triangles",
          "title": "The Pythagorean Theorem and Special Right Triangles",
          "titleZh": "勾股定理与特殊直角三角形",
          "content": [
            {
              "type": "h2",
              "en": "Right Triangles and the Most Famous Theorem in Geometry",
              "zh": "直角三角形与几何中最著名的定理"
            },
            {
              "type": "p",
              "en": "In a right triangle, the two sides that form the right angle are the legs, and the side across from the right angle is the hypotenuse — always the longest side. The Pythagorean Theorem says that if a right triangle has legs of lengths $a$ and $b$ and hypotenuse of length $c$, then",
              "zh": "在直角三角形中，构成直角的两条边叫做直角边，直角所对的边叫做斜边——它总是最长的边。勾股定理指出：若直角三角形的两条直角边长为 $a$ 和 $b$，斜边长为 $c$，则"
            },
            {
              "type": "math",
              "tex": "a^2 + b^2 = c^2"
            },
            {
              "type": "p",
              "en": "Here is a proof sketch you can reconstruct on paper. Draw a large square with side length $a + b$. Inside it, place four copies of the right triangle, each rotated $90^\\circ$ from the last, so their hypotenuses form a tilted square of side $c$ in the middle. The big square's area can be counted two ways: as $(a+b)^2$, or as the four triangles plus the tilted square, $4 \\cdot \\tfrac{1}{2}ab + c^2$. Setting these equal gives $a^2 + 2ab + b^2 = 2ab + c^2$, and subtracting $2ab$ from both sides leaves $a^2 + b^2 = c^2$.",
              "zh": "下面是一个你可以在纸上重现的证明思路。画一个边长为 $a + b$ 的大正方形，在其内部放入四个全等的直角三角形，每个比前一个旋转 $90^\\circ$，使它们的斜边在中间围成一个边长为 $c$ 的斜置正方形。大正方形的面积可以用两种方式计算：一是 $(a+b)^2$，二是四个三角形加上中间的正方形，即 $4 \\cdot \\tfrac{1}{2}ab + c^2$。令两者相等得 $a^2 + 2ab + b^2 = 2ab + c^2$，两边同减 $2ab$，即得 $a^2 + b^2 = c^2$。"
            },
            {
              "type": "h3",
              "en": "The Converse: Classifying Triangles by Their Sides",
              "zh": "逆定理：用三边长判断三角形的形状"
            },
            {
              "type": "p",
              "en": "The converse of the Pythagorean Theorem lets you work backward: if the side lengths of a triangle satisfy $a^2 + b^2 = c^2$ (with $c$ the longest side), the triangle must be a right triangle. Comparing $c^2$ to $a^2 + b^2$ also detects the other cases:",
              "zh": "勾股定理的逆定理让你反向推理：若三角形的三边满足 $a^2 + b^2 = c^2$（其中 $c$ 是最长边），则该三角形一定是直角三角形。把 $c^2$ 与 $a^2 + b^2$ 比较还能判断其他情形："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $c^2 = a^2 + b^2$, the triangle is right.",
                  "zh": "若 $c^2 = a^2 + b^2$，则三角形是直角三角形。"
                },
                {
                  "en": "If $c^2 < a^2 + b^2$, the longest side is \"too short\" to open a right angle, so the triangle is acute.",
                  "zh": "若 $c^2 < a^2 + b^2$，最长边\"不够长\"，撑不开直角，三角形是锐角三角形。"
                },
                {
                  "en": "If $c^2 > a^2 + b^2$, the longest side forces the opposite angle past $90^\\circ$, so the triangle is obtuse.",
                  "zh": "若 $c^2 > a^2 + b^2$，最长边迫使它所对的角超过 $90^\\circ$，三角形是钝角三角形。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Certain whole-number side lengths satisfy $a^2 + b^2 = c^2$ exactly; these are Pythagorean triples. The most common are $3$–$4$–$5$, $5$–$12$–$13$, $8$–$15$–$17$, and $7$–$24$–$25$, along with any multiple of them, such as $6$–$8$–$10$ or $10$–$24$–$26$. Recognizing a triple saves time on tests.",
              "zh": "某些整数边长恰好满足 $a^2 + b^2 = c^2$，它们叫做勾股数。最常见的有 $3$–$4$–$5$、$5$–$12$–$13$、$8$–$15$–$17$ 和 $7$–$24$–$25$，以及它们的任意倍数，如 $6$–$8$–$10$、$10$–$24$–$26$。考试中认出勾股数能节省大量时间。"
            },
            {
              "type": "h3",
              "en": "The 45°–45°–90° Triangle",
              "zh": "45°–45°–90° 三角形"
            },
            {
              "type": "p",
              "en": "You do not need to memorize the special-triangle patterns — you can derive them. A $45^\\circ$–$45^\\circ$–$90^\\circ$ triangle is an isosceles right triangle: its base angles are equal, so its legs are congruent. Call each leg $x$. The Pythagorean Theorem gives the hypotenuse:",
              "zh": "特殊直角三角形的规律不需要死记硬背——你可以推导出来。$45^\\circ$–$45^\\circ$–$90^\\circ$ 三角形是等腰直角三角形：两个底角相等，所以两条直角边全等。设每条直角边为 $x$，由勾股定理可求斜边："
            },
            {
              "type": "math",
              "tex": "x^2 + x^2 = c^2 \\;\\Rightarrow\\; c^2 = 2x^2 \\;\\Rightarrow\\; c = x\\sqrt{2}"
            },
            {
              "type": "p",
              "en": "So in every $45^\\circ$–$45^\\circ$–$90^\\circ$ triangle, the hypotenuse is the leg times $\\sqrt{2}$. Going the other way, each leg is the hypotenuse divided by $\\sqrt{2}$, which simplifies to $\\frac{c\\sqrt{2}}{2}$.",
              "zh": "因此在任何 $45^\\circ$–$45^\\circ$–$90^\\circ$ 三角形中，斜边等于直角边乘以 $\\sqrt{2}$。反过来，每条直角边等于斜边除以 $\\sqrt{2}$，化简后为 $\\frac{c\\sqrt{2}}{2}$。"
            },
            {
              "type": "h3",
              "en": "The 30°–60°–90° Triangle",
              "zh": "30°–60°–90° 三角形"
            },
            {
              "type": "p",
              "en": "Start with an equilateral triangle of side $2x$ and drop an altitude from one vertex. The altitude bisects the base, producing two congruent right triangles with angles $30^\\circ$, $60^\\circ$, $90^\\circ$. Each has hypotenuse $2x$ (an original side) and short leg $x$ (half the base). The Pythagorean Theorem gives the long leg:",
              "zh": "从一个边长为 $2x$ 的等边三角形出发，作一条从顶点出发的高。这条高平分底边，把三角形分成两个全等的直角三角形，其内角为 $30^\\circ$、$60^\\circ$、$90^\\circ$。每个小三角形的斜边为 $2x$（原来的边），短直角边为 $x$（底边的一半）。由勾股定理可求长直角边："
            },
            {
              "type": "math",
              "tex": "(2x)^2 - x^2 = 3x^2 \\;\\Rightarrow\\; \\text{long leg} = x\\sqrt{3}"
            },
            {
              "type": "p",
              "en": "So the sides of a $30^\\circ$–$60^\\circ$–$90^\\circ$ triangle are: short leg $x$ (opposite $30^\\circ$), long leg $x\\sqrt{3}$ (opposite $60^\\circ$), and hypotenuse $2x$ (opposite $90^\\circ$). The strategy for any problem: find the short leg first, then multiply.",
              "zh": "所以 $30^\\circ$–$60^\\circ$–$90^\\circ$ 三角形的三边为：短直角边 $x$（对着 $30^\\circ$ 角）、长直角边 $x\\sqrt{3}$（对着 $60^\\circ$ 角）、斜边 $2x$（对着 $90^\\circ$ 角）。解题策略：先求出短直角边，再乘以相应倍数。"
            },
            {
              "type": "note",
              "en": "Common mistake: mixing up the two patterns. In a $45^\\circ$–$45^\\circ$–$90^\\circ$ triangle the $\\sqrt{2}$ attaches to the hypotenuse; in a $30^\\circ$–$60^\\circ$–$90^\\circ$ triangle the $\\sqrt{3}$ attaches to the longer leg, not the hypotenuse. If you blank on a test, re-derive the pattern in the margin — it takes 20 seconds with the Pythagorean Theorem.",
              "zh": "常见错误：把两种规律混淆。在 $45^\\circ$–$45^\\circ$–$90^\\circ$ 三角形中，$\\sqrt{2}$ 出现在斜边上；而在 $30^\\circ$–$60^\\circ$–$90^\\circ$ 三角形中，$\\sqrt{3}$ 出现在长直角边上，不是斜边。考试时如果忘了，就在草稿上用勾股定理重新推导——只需 20 秒。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Classifying a triangle",
                "zh": "例题 1：判断三角形的形状"
              },
              "problem": {
                "en": "A triangle has sides $7$, $9$, and $12$. Is it acute, right, or obtuse? Justify with the converse of the Pythagorean Theorem.",
                "zh": "一个三角形的三边为 $7$、$9$、$12$。它是锐角、直角还是钝角三角形？用勾股定理的逆定理说明理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The longest side is $12$, so compare $12^2$ with $7^2 + 9^2$:",
                  "zh": "最长边是 $12$，比较 $12^2$ 与 $7^2 + 9^2$："
                },
                {
                  "type": "math",
                  "tex": "12^2 = 144 \\qquad 7^2 + 9^2 = 49 + 81 = 130"
                },
                {
                  "type": "p",
                  "en": "Since $144 > 130$, we have $c^2 > a^2 + b^2$, so the angle opposite the side of length $12$ is larger than $90^\\circ$. The triangle is obtuse.",
                  "zh": "因为 $144 > 130$，即 $c^2 > a^2 + b^2$，所以边长 $12$ 所对的角大于 $90^\\circ$。该三角形是钝角三角形。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A 30°–60°–90° triangle from its hypotenuse",
                "zh": "例题 2：由斜边求 30°–60°–90° 三角形的边"
              },
              "problem": {
                "en": "In right triangle $DEF$, $m\\angle D = 30^\\circ$, $m\\angle E = 60^\\circ$, and the hypotenuse $DE = 10$. Find the exact lengths of both legs.",
                "zh": "在直角三角形 $DEF$ 中，$m\\angle D = 30^\\circ$，$m\\angle E = 60^\\circ$，斜边 $DE = 10$。求两条直角边的准确长度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The hypotenuse is twice the short leg, so the short leg is $EF = 10 \\div 2 = 5$. This leg is opposite the $30^\\circ$ angle at $D$.",
                  "zh": "斜边是短直角边的 2 倍，所以短直角边 $EF = 10 \\div 2 = 5$。这条边对着 $D$ 处的 $30^\\circ$ 角。"
                },
                {
                  "type": "math",
                  "tex": "DF = 5\\sqrt{3}"
                },
                {
                  "type": "p",
                  "en": "The long leg is the short leg times $\\sqrt{3}$, so $DF = 5\\sqrt{3}$, which is opposite the $60^\\circ$ angle. Leave the answer exact — $5\\sqrt{3} \\approx 8.66$ only if the problem asks you to round.",
                  "zh": "长直角边等于短直角边乘以 $\\sqrt{3}$，所以 $DF = 5\\sqrt{3}$，它对着 $60^\\circ$ 角。答案保留准确值——只有题目要求时才化为近似值 $5\\sqrt{3} \\approx 8.66$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A right triangle has legs of lengths $9$ and $12$. What is the length of the hypotenuse?",
                "zh": "一个直角三角形的两条直角边长为 $9$ 和 $12$。斜边长是多少？"
              },
              "choices": [
                "$\\sqrt{63}$",
                "$21$",
                "$15$",
                "$12\\sqrt{2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$9^2 + 12^2 = 81 + 144 = 225 = 15^2$, so the hypotenuse is $15$. (This is $3\\times$ the $3$–$4$–$5$ triple.) Choosing $21$ comes from adding the legs instead of using the theorem, and $\\sqrt{63}$ comes from subtracting the squares as if $12$ were the hypotenuse.",
                "zh": "$9^2 + 12^2 = 81 + 144 = 225 = 15^2$，所以斜边为 $15$（这是 $3$–$4$–$5$ 勾股数的 $3$ 倍）。选 $21$ 是把两条直角边直接相加；选 $\\sqrt{63}$ 是误把 $12$ 当成斜边做了减法。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A right triangle has hypotenuse $25$ and one leg of length $7$. Find the length of the other leg. Give a whole number.",
                "zh": "一个直角三角形的斜边为 $25$，一条直角边为 $7$。求另一条直角边的长度。请填一个整数。"
              },
              "answer": "24",
              "explanation": {
                "en": "Subtract squares: $25^2 - 7^2 = 625 - 49 = 576$, and $\\sqrt{576} = 24$. This is the $7$–$24$–$25$ Pythagorean triple.",
                "zh": "用平方相减：$25^2 - 7^2 = 625 - 49 = 576$，$\\sqrt{576} = 24$。这正是 $7$–$24$–$25$ 勾股数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A triangle has sides $8$, $15$, and $16$. Which classification is correct?",
                "zh": "一个三角形的三边为 $8$、$15$、$16$。下列哪个判断正确？"
              },
              "choices": [
                "Right, because $8$–$15$–$17$ is a triple",
                "Acute, because $16^2 < 8^2 + 15^2$",
                "Obtuse, because $16 > 15$",
                "Impossible: the sides violate the triangle inequality"
              ],
              "answer": 1,
              "explanation": {
                "en": "Compare the square of the longest side with the sum of the other squares: $16^2 = 256$ and $8^2 + 15^2 = 64 + 225 = 289$. Since $256 < 289$, the triangle is acute. The first choice is tempting because $8$–$15$–$17$ is a real triple, but the hypotenuse here would need to be $17$, not $16$.",
                "zh": "比较最长边的平方与另两边平方和：$16^2 = 256$，$8^2 + 15^2 = 64 + 225 = 289$。因为 $256 < 289$，三角形是锐角三角形。第一个选项有迷惑性：$8$–$15$–$17$ 确实是勾股数，但那要求斜边是 $17$ 而不是 $16$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A triangle has sides $5$, $12$, and $13$, and a student concludes it is a right triangle. Which theorem justifies this conclusion?",
                "zh": "一个三角形的三边为 $5$、$12$、$13$，一名学生由此断定它是直角三角形。哪条定理能证明这个结论？"
              },
              "choices": [
                "The Pythagorean Theorem",
                "The Converse of the Pythagorean Theorem",
                "The Triangle Inequality Theorem",
                "The Hypotenuse–Leg (HL) Theorem"
              ],
              "answer": 1,
              "explanation": {
                "en": "The Pythagorean Theorem starts with a right triangle and concludes $a^2+b^2=c^2$; here we go the other direction — from the equation $5^2 + 12^2 = 13^2$ to the conclusion \"right triangle\" — which is exactly the converse. HL compares two triangles, and the triangle inequality only tests whether a triangle exists.",
                "zh": "勾股定理是从\"直角三角形\"出发推出 $a^2+b^2=c^2$；而这里方向相反——由等式 $5^2 + 12^2 = 13^2$ 推出\"是直角三角形\"——这正是逆定理。HL 定理用于比较两个三角形，三角形不等式只判断三角形是否存在。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Each leg of a $45^\\circ$–$45^\\circ$–$90^\\circ$ triangle measures $6$ cm. What is the exact length of the hypotenuse?",
                "zh": "一个 $45^\\circ$–$45^\\circ$–$90^\\circ$ 三角形的每条直角边长 $6$ 厘米。斜边的准确长度是多少？"
              },
              "choices": [
                "$3\\sqrt{2}$ cm",
                "$6\\sqrt{3}$ cm",
                "$12$ cm",
                "$6\\sqrt{2}$ cm"
              ],
              "answer": 3,
              "explanation": {
                "en": "Hypotenuse $=$ leg $\\times \\sqrt{2} = 6\\sqrt{2}$ cm. The distractor $3\\sqrt{2}$ comes from dividing by $\\sqrt{2}$ (the correct move only when you are given the hypotenuse), and $6\\sqrt{3}$ mixes in the $30^\\circ$–$60^\\circ$–$90^\\circ$ pattern.",
                "zh": "斜边 $=$ 直角边 $\\times \\sqrt{2} = 6\\sqrt{2}$ 厘米。干扰项 $3\\sqrt{2}$ 是误除以 $\\sqrt{2}$（只有已知斜边求直角边时才这样做）；$6\\sqrt{3}$ 则混入了 $30^\\circ$–$60^\\circ$–$90^\\circ$ 的规律。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a $30^\\circ$–$60^\\circ$–$90^\\circ$ triangle, the hypotenuse is $14$ in. Find the length of the shorter leg. Give a whole number.",
                "zh": "在一个 $30^\\circ$–$60^\\circ$–$90^\\circ$ 三角形中，斜边为 $14$ 英寸。求短直角边的长度。请填一个整数。"
              },
              "answer": "7",
              "explanation": {
                "en": "The hypotenuse is twice the short leg, so the short leg is $14 \\div 2 = 7$ in. (The longer leg would then be $7\\sqrt{3}$ in.)",
                "zh": "斜边是短直角边的 2 倍，所以短直角边为 $14 \\div 2 = 7$ 英寸。（长直角边则为 $7\\sqrt{3}$ 英寸。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a $30^\\circ$–$60^\\circ$–$90^\\circ$ triangle, the longer leg measures $9$. What is the exact length of the hypotenuse?",
                "zh": "在一个 $30^\\circ$–$60^\\circ$–$90^\\circ$ 三角形中，长直角边为 $9$。斜边的准确长度是多少？"
              },
              "choices": [
                "$18$",
                "$9\\sqrt{2}$",
                "$6\\sqrt{3}$",
                "$3\\sqrt{3}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "First find the short leg: it is the longer leg divided by $\\sqrt{3}$, so $9/\\sqrt{3} = 3\\sqrt{3}$. The hypotenuse is twice the short leg: $2 \\cdot 3\\sqrt{3} = 6\\sqrt{3}$. The distractor $18$ comes from doubling the long leg — but only the short leg doubles to give the hypotenuse.",
                "zh": "先求短直角边：长直角边除以 $\\sqrt{3}$，即 $9/\\sqrt{3} = 3\\sqrt{3}$。斜边是短直角边的 2 倍：$2 \\cdot 3\\sqrt{3} = 6\\sqrt{3}$。干扰项 $18$ 是把长直角边直接翻倍——但只有短直角边翻倍才得到斜边。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 13-foot ladder leans against a vertical wall with its base 5 feet from the wall on level ground. How many feet up the wall does the ladder reach? Give a whole number.",
                "zh": "一架 13 英尺长的梯子斜靠在竖直的墙上，梯脚在水平地面上距墙 5 英尺。梯子顶端距地面多少英尺？请填一个整数。"
              },
              "answer": "12",
              "explanation": {
                "en": "The ladder, wall, and ground form a right triangle with hypotenuse $13$ and one leg $5$. The height is $\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ feet — the $5$–$12$–$13$ triple.",
                "zh": "梯子、墙和地面构成直角三角形，斜边为 $13$，一条直角边为 $5$。高度为 $\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ 英尺——正是 $5$–$12$–$13$ 勾股数。"
              }
            }
          ]
        },
        {
          "id": "trig-ratios",
          "title": "Sine, Cosine, and Tangent",
          "titleZh": "正弦、余弦与正切",
          "content": [
            {
              "type": "h2",
              "en": "Why Right-Triangle Ratios Work",
              "zh": "直角三角形的边长比为何有意义"
            },
            {
              "type": "p",
              "en": "All right triangles that share an acute angle measure are similar by AA, so the ratios of their corresponding sides are equal. That means a ratio like $\\frac{\\text{opposite leg}}{\\text{hypotenuse}}$ depends only on the acute angle, not on the size of the triangle. These angle-determined ratios are the trigonometric ratios: sine, cosine, and tangent. They let us find missing sides and angles of right triangles without any drawing or measuring.",
              "zh": "所有含有相同锐角的直角三角形都由 AA 判定相似，因此对应边的比相等。这意味着像 $\\frac{\\text{对边}}{\\text{斜边}}$ 这样的比值只取决于这个锐角本身，而与三角形的大小无关。这些由角决定的比值就是三角比：正弦、余弦和正切。它们让我们不必作图或测量就能求出直角三角形中未知的边和角。"
            },
            {
              "type": "h3",
              "en": "Naming the Sides: Opposite, Adjacent, Hypotenuse",
              "zh": "给边命名：对边、邻边、斜边"
            },
            {
              "type": "p",
              "en": "The names of the legs depend on which acute angle you stand at. In right triangle $ABC$ with the right angle at $C$: the hypotenuse is always $\\overline{AB}$, across from the right angle. Relative to angle $A$, the opposite side is $\\overline{BC}$ (the leg that does not touch $A$) and the adjacent side is $\\overline{AC}$ (the leg that does touch $A$). Switch to angle $B$, and the two legs trade names.",
              "zh": "两条直角边的名称取决于你站在哪个锐角的角度看。在直角三角形 $ABC$ 中，直角在 $C$：斜边永远是 $\\overline{AB}$，即直角所对的边。相对于角 $A$，对边是 $\\overline{BC}$（不经过 $A$ 的直角边），邻边是 $\\overline{AC}$（经过 $A$ 的直角边）。换到角 $B$ 的视角，两条直角边的名称就互换了。"
            },
            {
              "type": "h3",
              "en": "SOH-CAH-TOA",
              "zh": "SOH-CAH-TOA 记忆口诀"
            },
            {
              "type": "p",
              "en": "For an acute angle $A$ in a right triangle, the three ratios are:",
              "zh": "对于直角三角形中的锐角 $A$，三个三角比定义如下："
            },
            {
              "type": "math",
              "tex": "\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\qquad \\cos A = \\frac{\\text{adjacent}}{\\text{hypotenuse}} \\qquad \\tan A = \\frac{\\text{opposite}}{\\text{adjacent}}"
            },
            {
              "type": "p",
              "en": "The mnemonic SOH-CAH-TOA records the three definitions: Sine–Opposite–Hypotenuse, Cosine–Adjacent–Hypotenuse, Tangent–Opposite–Adjacent. To evaluate a ratio from side lengths, identify the two sides the ratio uses and divide. Because the hypotenuse is the longest side, $\\sin A$ and $\\cos A$ are always between $0$ and $1$ for an acute angle, while $\\tan A$ can be any positive number.",
              "zh": "口诀 SOH-CAH-TOA 概括了三个定义：正弦–对边–斜边（SOH）、余弦–邻边–斜边（CAH）、正切–对边–邻边（TOA）。要由边长求三角比，先找出该比值用到的两条边，再相除即可。由于斜边是最长边，锐角的 $\\sin A$ 和 $\\cos A$ 总在 $0$ 与 $1$ 之间，而 $\\tan A$ 可以是任意正数。"
            },
            {
              "type": "h3",
              "en": "Solving for Sides and Angles",
              "zh": "求未知的边与角"
            },
            {
              "type": "p",
              "en": "To find a missing side: pick the ratio that connects your known angle, your known side, and the side you want; write the equation; solve. For example, if the angle is $34^\\circ$, the hypotenuse is $20$, and you want the opposite side $x$, use sine: $\\sin 34^\\circ = \\frac{x}{20}$, so $x = 20\\sin 34^\\circ$.",
              "zh": "求未知边：选择能把已知角、已知边和所求边联系起来的比值，列方程求解。例如已知角为 $34^\\circ$、斜边为 $20$，求对边 $x$，就用正弦：$\\sin 34^\\circ = \\frac{x}{20}$，所以 $x = 20\\sin 34^\\circ$。"
            },
            {
              "type": "p",
              "en": "To find a missing angle when two sides are known, use an inverse trig function. If $\\tan A = \\frac{5}{9}$, then $A = \\tan^{-1}\\!\\left(\\frac{5}{9}\\right) \\approx 29.1^\\circ$. Read $\\tan^{-1}$ as \"the angle whose tangent is\" — it is not a reciprocal.",
              "zh": "已知两条边求角时，用反三角函数。若 $\\tan A = \\frac{5}{9}$，则 $A = \\tan^{-1}\\!\\left(\\frac{5}{9}\\right) \\approx 29.1^\\circ$。$\\tan^{-1}$ 读作\"正切值为……的角\"——它不是倒数。"
            },
            {
              "type": "h3",
              "en": "The Cofunction Relationship",
              "zh": "余角关系"
            },
            {
              "type": "p",
              "en": "The two acute angles of a right triangle are complementary, and the side opposite one is adjacent to the other. Therefore the sine of one acute angle equals the cosine of its complement:",
              "zh": "直角三角形的两个锐角互余，一个锐角的对边正是另一个锐角的邻边。因此一个锐角的正弦等于它的余角的余弦："
            },
            {
              "type": "math",
              "tex": "\\sin A = \\cos(90^\\circ - A)"
            },
            {
              "type": "p",
              "en": "For instance, $\\sin 20^\\circ = \\cos 70^\\circ$. This is where the name \"cosine\" comes from: the sine of the complement.",
              "zh": "例如 $\\sin 20^\\circ = \\cos 70^\\circ$。\"余弦\"这个名字正来源于此：余角的正弦。"
            },
            {
              "type": "note",
              "en": "Test tip: before any calculation, check that your calculator is in degree mode — an answer like $\\sin 30^\\circ = -0.988$ means it is in radians. Common mistake: labeling opposite and adjacent from the wrong angle. Always re-identify the sides relative to the specific angle in the problem before writing your ratio.",
              "zh": "考试提示：计算前务必确认计算器处于角度（degree）模式——如果算出 $\\sin 30^\\circ = -0.988$，说明它在弧度模式。常见错误：站错角度去标对边和邻边。写比值之前，一定要相对于题目中的那个角重新确认哪条边是对边、哪条是邻边。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating trig ratios from side lengths",
                "zh": "例题 1：由边长求三角比"
              },
              "problem": {
                "en": "In right triangle $ABC$, the right angle is at $C$, $BC = 8$, $AC = 15$, and $AB = 17$. Find $\\sin A$, $\\cos A$, and $\\tan A$ as fractions.",
                "zh": "在直角三角形 $ABC$ 中，直角在 $C$，$BC = 8$，$AC = 15$，$AB = 17$。用分数表示 $\\sin A$、$\\cos A$、$\\tan A$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Relative to angle $A$: the opposite side is $BC = 8$, the adjacent side is $AC = 15$, and the hypotenuse is $AB = 17$. Apply the definitions:",
                  "zh": "相对于角 $A$：对边为 $BC = 8$，邻边为 $AC = 15$，斜边为 $AB = 17$。代入定义："
                },
                {
                  "type": "math",
                  "tex": "\\sin A = \\frac{8}{17} \\qquad \\cos A = \\frac{15}{17} \\qquad \\tan A = \\frac{8}{15}"
                },
                {
                  "type": "p",
                  "en": "Sanity checks: both $\\sin A$ and $\\cos A$ are less than $1$, and $\\tan A = \\frac{\\sin A}{\\cos A}$. Note that $\\sin B = \\frac{15}{17} = \\cos A$, illustrating the cofunction relationship.",
                  "zh": "检验：$\\sin A$ 与 $\\cos A$ 都小于 $1$，且 $\\tan A = \\frac{\\sin A}{\\cos A}$。注意 $\\sin B = \\frac{15}{17} = \\cos A$，这正体现了余角关系。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Finding a side and an angle",
                "zh": "例题 2：求边和角"
              },
              "problem": {
                "en": "In right triangle $PQR$, the right angle is at $Q$. (a) If $m\\angle P = 34^\\circ$ and hypotenuse $PR = 20$, find $QR$ to the nearest tenth. (b) Separately, if $PQ = 9$ and $QR = 5$, find $m\\angle P$ to the nearest tenth of a degree.",
                "zh": "在直角三角形 $PQR$ 中，直角在 $Q$。(a) 若 $m\\angle P = 34^\\circ$，斜边 $PR = 20$，求 $QR$，精确到十分位。(b) 另一种情形：若 $PQ = 9$，$QR = 5$，求 $m\\angle P$，精确到 $0.1^\\circ$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) $QR$ is opposite angle $P$ and $PR$ is the hypotenuse, so use sine:",
                  "zh": "(a) $QR$ 是角 $P$ 的对边，$PR$ 是斜边，所以用正弦："
                },
                {
                  "type": "math",
                  "tex": "\\sin 34^\\circ = \\frac{QR}{20} \\;\\Rightarrow\\; QR = 20\\sin 34^\\circ \\approx 11.2"
                },
                {
                  "type": "p",
                  "en": "(b) Now $QR = 5$ is opposite angle $P$ and $PQ = 9$ is adjacent, so tangent connects them. Use inverse tangent:",
                  "zh": "(b) 此时 $QR = 5$ 是角 $P$ 的对边，$PQ = 9$ 是邻边，用正切联系两者，再取反正切："
                },
                {
                  "type": "math",
                  "tex": "\\tan P = \\frac{5}{9} \\;\\Rightarrow\\; m\\angle P = \\tan^{-1}\\!\\left(\\frac{5}{9}\\right) \\approx 29.1^\\circ"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In right triangle $ABC$ with the right angle at $C$, which side is the hypotenuse?",
                "zh": "在直角三角形 $ABC$ 中，直角在 $C$。哪条边是斜边？"
              },
              "choices": [
                "$\\overline{AC}$",
                "$\\overline{BC}$",
                "$\\overline{AB}$",
                "It depends on which acute angle you use"
              ],
              "answer": 2,
              "explanation": {
                "en": "The hypotenuse is always the side opposite the right angle, so with the right angle at $C$ it is $\\overline{AB}$. Unlike \"opposite\" and \"adjacent,\" the hypotenuse never changes when you switch acute angles — that is why the last choice is wrong.",
                "zh": "斜边永远是直角所对的边，直角在 $C$，所以斜边是 $\\overline{AB}$。与\"对边\"\"邻边\"不同，斜边不会因为换一个锐角视角而改变——所以最后一个选项是错的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In right triangle $ABC$, the right angle is at $C$, $BC = 7$, $AC = 24$, and $AB = 25$. What is $\\sin A$?",
                "zh": "在直角三角形 $ABC$ 中，直角在 $C$，$BC = 7$，$AC = 24$，$AB = 25$。$\\sin A$ 等于多少？"
              },
              "choices": [
                "$\\dfrac{7}{25}$",
                "$\\dfrac{24}{25}$",
                "$\\dfrac{7}{24}$",
                "$\\dfrac{24}{7}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The side opposite angle $A$ is $BC = 7$ and the hypotenuse is $AB = 25$, so $\\sin A = \\frac{7}{25}$. Choosing $\\frac{24}{25}$ gives $\\cos A$ (that would be $\\sin B$), and $\\frac{7}{24}$ is $\\tan A$.",
                "zh": "角 $A$ 的对边是 $BC = 7$，斜边是 $AB = 25$，所以 $\\sin A = \\frac{7}{25}$。选 $\\frac{24}{25}$ 得到的是 $\\cos A$（即 $\\sin B$），而 $\\frac{7}{24}$ 是 $\\tan A$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a right triangle, the leg opposite angle $A$ measures $9$ and the leg adjacent to angle $A$ measures $12$. Find $\\tan A$ as a fraction in lowest terms (e.g. 2/5).",
                "zh": "在一个直角三角形中，角 $A$ 的对边为 $9$，邻边为 $12$。求 $\\tan A$，用最简分数表示（例如 2/5）。"
              },
              "answer": "3/4",
              "accept": [
                "9/12",
                "0.75"
              ],
              "explanation": {
                "en": "$\\tan A = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{9}{12} = \\frac{3}{4}$. Reducing the fraction does not change the ratio — this triangle is similar to a $3$–$4$–$5$ triangle.",
                "zh": "$\\tan A = \\frac{\\text{对边}}{\\text{邻边}} = \\frac{9}{12} = \\frac{3}{4}$。约分不改变比值——这个三角形与 $3$–$4$–$5$ 三角形相似。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a right triangle, one acute angle measures $28^\\circ$ and the leg adjacent to it measures $40$ m. To the nearest tenth, how long is the leg opposite the $28^\\circ$ angle?",
                "zh": "在一个直角三角形中，一个锐角为 $28^\\circ$，它的邻边长 $40$ 米。$28^\\circ$ 角的对边长是多少？精确到十分位。"
              },
              "choices": [
                "$18.8$ m",
                "$21.3$ m",
                "$35.3$ m",
                "$75.2$ m"
              ],
              "answer": 1,
              "explanation": {
                "en": "Opposite and adjacent call for tangent: $\\tan 28^\\circ = \\frac{x}{40}$, so $x = 40\\tan 28^\\circ \\approx 21.3$ m. The distractor $18.8$ m is $40\\sin 28^\\circ$ (treating $40$ as the hypotenuse), and $75.2$ m comes from dividing by $\\tan 28^\\circ$ instead of multiplying.",
                "zh": "涉及对边和邻边，用正切：$\\tan 28^\\circ = \\frac{x}{40}$，所以 $x = 40\\tan 28^\\circ \\approx 21.3$ 米。干扰项 $18.8$ 米是 $40\\sin 28^\\circ$（误把 $40$ 当斜边）；$75.2$ 米是误用除法 $40 \\div \\tan 28^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a right triangle, the leg opposite angle $\\theta$ measures $6$ and the hypotenuse measures $12$. Find $m\\angle\\theta$ in degrees. Give a whole number.",
                "zh": "在一个直角三角形中，角 $\\theta$ 的对边为 $6$，斜边为 $12$。求 $\\theta$ 的度数。请填一个整数。"
              },
              "answer": "30",
              "explanation": {
                "en": "$\\sin\\theta = \\frac{6}{12} = \\frac{1}{2}$, so $\\theta = \\sin^{-1}\\!\\left(\\frac{1}{2}\\right) = 30^\\circ$. You could also recognize the $30^\\circ$–$60^\\circ$–$90^\\circ$ pattern: the hypotenuse is twice the short leg.",
                "zh": "$\\sin\\theta = \\frac{6}{12} = \\frac{1}{2}$，所以 $\\theta = \\sin^{-1}\\!\\left(\\frac{1}{2}\\right) = 30^\\circ$。也可以直接认出 $30^\\circ$–$60^\\circ$–$90^\\circ$ 的规律：斜边是短直角边的 2 倍。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression is equal to $\\sin 25^\\circ$?",
                "zh": "下列哪个表达式等于 $\\sin 25^\\circ$？"
              },
              "choices": [
                "$\\cos 25^\\circ$",
                "$\\cos 155^\\circ$",
                "$\\cos 65^\\circ$",
                "$\\tan 65^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the cofunction relationship, $\\sin A = \\cos(90^\\circ - A)$, so $\\sin 25^\\circ = \\cos 65^\\circ$. The distractor $\\cos 155^\\circ$ uses $180^\\circ$ instead of $90^\\circ$ — supplements work for pairs like $\\sin\\theta = \\sin(180^\\circ - \\theta)$, not for the sine–cosine swap.",
                "zh": "由余角关系 $\\sin A = \\cos(90^\\circ - A)$，得 $\\sin 25^\\circ = \\cos 65^\\circ$。干扰项 $\\cos 155^\\circ$ 错用了 $180^\\circ$——补角关系适用于 $\\sin\\theta = \\sin(180^\\circ - \\theta)$ 这类等式，而不适用于正弦与余弦的互换。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a right triangle, one acute angle measures $52^\\circ$ and the leg opposite it measures $18$ cm. Find the length of the hypotenuse in cm, rounded to the nearest tenth.",
                "zh": "在一个直角三角形中，一个锐角为 $52^\\circ$，它的对边长 $18$ 厘米。求斜边的长度（单位：厘米），精确到十分位。"
              },
              "answer": "22.8",
              "accept": [
                "22.84"
              ],
              "explanation": {
                "en": "Sine relates the opposite side and the hypotenuse: $\\sin 52^\\circ = \\frac{18}{h}$, so $h = \\frac{18}{\\sin 52^\\circ} \\approx 22.8$ cm. A common mistake is computing $18\\sin 52^\\circ \\approx 14.2$ — but the hypotenuse must be longer than either leg, so $14.2$ fails the sanity check.",
                "zh": "正弦联系对边与斜边：$\\sin 52^\\circ = \\frac{18}{h}$，所以 $h = \\frac{18}{\\sin 52^\\circ} \\approx 22.8$ 厘米。常见错误是算成 $18\\sin 52^\\circ \\approx 14.2$——但斜边必须比任何直角边都长，$14.2$ 通不过合理性检验。"
              }
            }
          ]
        },
        {
          "id": "trig-applications",
          "title": "Applications: Elevation, Depression, and the Laws of Sines and Cosines",
          "titleZh": "三角比的应用与正弦余弦定理",
          "content": [
            {
              "type": "h2",
              "en": "Trigonometry Out in the World",
              "zh": "走进现实世界的三角学"
            },
            {
              "type": "p",
              "en": "Surveyors, pilots, and engineers rarely get a neatly labeled triangle. They get a situation — a cliff, a flight path, a lake they cannot walk across — and they must build the triangle themselves. This lesson covers the two main tools: right-triangle trig for angle-of-elevation and angle-of-depression problems, and the Laws of Sines and Cosines for triangles with no right angle at all.",
              "zh": "测量员、飞行员和工程师很少能拿到一个标注整齐的三角形。他们面对的是真实情境——一座悬崖、一条航线、一个无法徒步穿越的湖——必须自己把三角形构造出来。本课讲两大工具：处理仰角、俯角问题的直角三角形三角比，以及处理没有直角的三角形的正弦定理与余弦定理。"
            },
            {
              "type": "h3",
              "en": "Angles of Elevation and Depression",
              "zh": "仰角与俯角"
            },
            {
              "type": "p",
              "en": "An angle of elevation is measured upward from a horizontal line to your line of sight; an angle of depression is measured downward from the horizontal. Because the two horizontal lines (at the observer and at the target) are parallel, the angle of depression from the top equals the angle of elevation from the bottom — they are alternate interior angles.",
              "zh": "仰角是从水平线向上量到视线的角；俯角是从水平线向下量到视线的角。由于观察者处和目标处的两条水平线互相平行，从高处看的俯角等于从低处看的仰角——它们是内错角。"
            },
            {
              "type": "p",
              "en": "Use a draw-the-right-triangle workflow every time:",
              "zh": "每道题都按\"画出直角三角形\"的流程来做："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Sketch the situation and draw the horizontal line at the observer's eye.",
                  "zh": "第 1 步：画出情境示意图，并在观察者眼睛的高度画出水平线。"
                },
                {
                  "en": "Step 2: Mark the angle between the horizontal and the line of sight — that is the elevation or depression angle.",
                  "zh": "第 2 步：标出水平线与视线之间的夹角——这就是仰角或俯角。"
                },
                {
                  "en": "Step 3: Complete the right triangle with a vertical height and a horizontal distance.",
                  "zh": "第 3 步：用一条竖直的高和一条水平距离补全直角三角形。"
                },
                {
                  "en": "Step 4: Label the known side, decide which side you want, and choose the one trig ratio that connects them.",
                  "zh": "第 4 步：标出已知边，确定所求边，选择能把它们联系起来的那个三角比。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Law of Sines and the Law of Cosines",
              "zh": "正弦定理与余弦定理"
            },
            {
              "type": "p",
              "en": "When a triangle has no right angle, label the angles $A$, $B$, $C$ and the sides opposite them $a$, $b$, $c$. Two laws hold in every triangle:",
              "zh": "当三角形没有直角时，把三个角记为 $A$、$B$、$C$，它们的对边分别记为 $a$、$b$、$c$。任何三角形中都成立两条定理："
            },
            {
              "type": "math",
              "tex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}"
            },
            {
              "type": "math",
              "tex": "c^2 = a^2 + b^2 - 2ab\\cos C"
            },
            {
              "type": "p",
              "en": "Choosing between them comes down to what you know. Use the Law of Sines when you have a matched angle–opposite-side pair plus one more piece (AAS, ASA, or SSA). Use the Law of Cosines when you have no matched pair: two sides with the included angle (SAS, to find the third side) or all three sides (SSS, to find an angle). Notice that the Law of Cosines is the Pythagorean Theorem with a correction term: when $C = 90^\\circ$, $\\cos C = 0$ and it collapses to $c^2 = a^2 + b^2$.",
              "zh": "选用哪条定理取决于已知条件。当你有一对\"角及其对边\"再加一个条件（AAS、ASA 或 SSA）时，用正弦定理。当你没有这样的配对时，用余弦定理：已知两边及夹角（SAS，求第三边），或已知三边（SSS，求角）。注意余弦定理就是带修正项的勾股定理：当 $C = 90^\\circ$ 时 $\\cos C = 0$，公式退化为 $c^2 = a^2 + b^2$。"
            },
            {
              "type": "h3",
              "en": "Area from Two Sides and the Included Angle",
              "zh": "由两边及夹角求面积"
            },
            {
              "type": "p",
              "en": "If you know two sides and the angle between them, you do not need the height. In a triangle with sides $a$ and $b$ enclosing angle $C$, the height from the end of side $a$ is $a\\sin C$, so:",
              "zh": "若已知两边及其夹角，就不需要再求高。在夹角为 $C$、两边为 $a$、$b$ 的三角形中，从边 $a$ 端点作出的高等于 $a\\sin C$，因此："
            },
            {
              "type": "math",
              "tex": "\\text{Area} = \\frac{1}{2}ab\\sin C"
            },
            {
              "type": "note",
              "en": "Common mistakes: (1) An angle of depression is measured down from the horizontal, never up from the vertical — if a problem says the angle of depression is $15^\\circ$, do not place $15^\\circ$ at the base of your triangle's vertical side. (2) In the SSA case the Law of Sines can have two valid triangles (the ambiguous case); if the given angle is acute and the side opposite it is shorter than the other given side, check whether the supplement of your calculator's answer also works.",
              "zh": "常见错误：(1) 俯角是从水平线向下量的，绝不是从竖直线量起——若题目说俯角为 $15^\\circ$，不要把 $15^\\circ$ 标在三角形竖直边的底部。(2) 在 SSA 情形下，正弦定理可能对应两个合法三角形（模糊情形）；若已知角是锐角且它的对边比另一条已知边短，要检查计算器结果的补角是否也成立。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Height of a building from an angle of elevation",
                "zh": "例题 1：由仰角求楼高"
              },
              "problem": {
                "en": "From a point on level ground $50$ m from the base of a building, a surveyor measures the angle of elevation to the top of the building as $32^\\circ$. Her instrument sits $1.5$ m above the ground. How tall is the building, to the nearest tenth of a meter?",
                "zh": "在水平地面上距一栋楼底部 $50$ 米处，测量员测得楼顶的仰角为 $32^\\circ$。她的仪器高出地面 $1.5$ 米。这栋楼有多高？精确到 $0.1$ 米。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Draw the horizontal line at instrument height. The right triangle has a horizontal leg of $50$ m (adjacent to the $32^\\circ$ angle) and a vertical leg $x$ reaching from instrument height up to the roof (opposite the angle). Tangent connects them:",
                  "zh": "在仪器高度处画水平线。直角三角形的水平直角边为 $50$ 米（$32^\\circ$ 角的邻边），竖直直角边 $x$ 从仪器高度一直到楼顶（角的对边）。用正切联系两者："
                },
                {
                  "type": "math",
                  "tex": "\\tan 32^\\circ = \\frac{x}{50} \\;\\Rightarrow\\; x = 50\\tan 32^\\circ \\approx 31.2 \\text{ m}"
                },
                {
                  "type": "p",
                  "en": "The triangle starts at instrument height, so add it back: total height $\\approx 31.2 + 1.5 = 32.7$ m. Forgetting the instrument height is the most common error in surveying problems.",
                  "zh": "三角形是从仪器高度算起的，所以要加回去：总高度 $\\approx 31.2 + 1.5 = 32.7$ 米。忘记加仪器高度是测量类题目中最常见的错误。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Law of Cosines in navigation",
                "zh": "例题 2：余弦定理在航海中的应用"
              },
              "problem": {
                "en": "Two ships leave the same port. Ship 1 sails $8$ km on one course; Ship 2 sails $11$ km on a course that makes a $60^\\circ$ angle with the first. How far apart are the ships, to the nearest tenth of a kilometer?",
                "zh": "两艘船从同一港口出发。第一艘沿某航向行驶 $8$ 千米；第二艘的航向与第一艘成 $60^\\circ$ 角，行驶 $11$ 千米。两船相距多远？精确到 $0.1$ 千米。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The port and the two ships form a triangle with sides $8$ and $11$ enclosing the $60^\\circ$ angle — an SAS setup, so use the Law of Cosines to find the third side $d$:",
                  "zh": "港口与两艘船构成一个三角形，两边为 $8$ 和 $11$，夹角为 $60^\\circ$——这是 SAS 条件，用余弦定理求第三边 $d$："
                },
                {
                  "type": "math",
                  "tex": "d^2 = 8^2 + 11^2 - 2(8)(11)\\cos 60^\\circ = 64 + 121 - 176 \\cdot \\tfrac{1}{2} = 97"
                },
                {
                  "type": "p",
                  "en": "So $d = \\sqrt{97} \\approx 9.8$ km. Reasoning check (statements and reasons): the distance is less than $8 + 11 = 19$ by the Triangle Inequality, and since $60^\\circ < 90^\\circ$, the correction term shrinks $d$ below the Pythagorean value $\\sqrt{185} \\approx 13.6$ — both consistent with $9.8$ km.",
                  "zh": "所以 $d = \\sqrt{97} \\approx 9.8$ 千米。推理检验（论断与理由）：由三角形不等式，距离小于 $8 + 11 = 19$；又因 $60^\\circ < 90^\\circ$，修正项使 $d$ 小于勾股值 $\\sqrt{185} \\approx 13.6$——两条都与 $9.8$ 千米相符。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A hiker at the top of a cliff looks down at a boat on the water. The angle of depression is the angle between:",
                "zh": "悬崖顶上的登山者向下望向水面上的小船。俯角是指哪两条线之间的夹角？"
              },
              "choices": [
                "The vertical cliff face and the line of sight",
                "The horizontal line at the hiker's eye and the line of sight",
                "The water surface and the cliff face",
                "The line of sight and the boat's deck"
              ],
              "answer": 1,
              "explanation": {
                "en": "Angles of depression are always measured downward from the horizontal at the observer's eye. Measuring from the vertical cliff face is the classic error — that angle is the complement of the true angle of depression.",
                "zh": "俯角总是从观察者眼睛处的水平线向下量。从竖直的崖壁量起是典型错误——那样量出的角是真正俯角的余角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "From a point on level ground $60$ ft from the base of a flagpole, the angle of elevation to the top is $40^\\circ$. Find the height of the flagpole in feet, rounded to the nearest tenth.",
                "zh": "在水平地面上距旗杆底部 $60$ 英尺处，测得杆顶的仰角为 $40^\\circ$。求旗杆的高度（单位：英尺），精确到十分位。"
              },
              "answer": "50.3",
              "accept": [
                "50.35",
                "50.4"
              ],
              "explanation": {
                "en": "The height is opposite the $40^\\circ$ angle and the $60$ ft distance is adjacent, so $h = 60\\tan 40^\\circ \\approx 50.3$ ft.",
                "zh": "旗杆高是 $40^\\circ$ 角的对边，$60$ 英尺的距离是邻边，所以 $h = 60\\tan 40^\\circ \\approx 50.3$ 英尺。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A pilot flying at an altitude of $2000$ m sees the start of the runway at an angle of depression of $15^\\circ$. Which expression gives the horizontal ground distance, in meters, from the point directly below the plane to the runway?",
                "zh": "一名飞行员在 $2000$ 米高度飞行，看到跑道起点的俯角为 $15^\\circ$。下列哪个表达式表示飞机正下方地面点到跑道的水平距离（单位：米）？"
              },
              "choices": [
                "$2000\\tan 15^\\circ$",
                "$2000\\sin 15^\\circ$",
                "$\\dfrac{2000}{\\tan 15^\\circ}$",
                "$\\dfrac{2000}{\\cos 15^\\circ}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The angle of depression equals the angle of elevation from the runway, so in the right triangle the $15^\\circ$ angle has the $2000$ m altitude as its opposite side and the ground distance $x$ as its adjacent side: $\\tan 15^\\circ = \\frac{2000}{x}$, giving $x = \\frac{2000}{\\tan 15^\\circ} \\approx 7464$ m. The distractor $2000\\tan 15^\\circ$ mixes up which side is opposite.",
                "zh": "俯角等于从跑道看飞机的仰角，因此在直角三角形中，$15^\\circ$ 角的对边是 $2000$ 米的高度，邻边是水平距离 $x$：$\\tan 15^\\circ = \\frac{2000}{x}$，即 $x = \\frac{2000}{\\tan 15^\\circ} \\approx 7464$ 米。干扰项 $2000\\tan 15^\\circ$ 弄反了对边与邻边。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In triangle $ABC$ you are given $AB = 14$, $AC = 9$, and $m\\angle A = 71^\\circ$, and you want $BC$. Which tool applies directly?",
                "zh": "在三角形 $ABC$ 中，已知 $AB = 14$，$AC = 9$，$m\\angle A = 71^\\circ$，要求 $BC$。应直接使用哪个工具？"
              },
              "choices": [
                "The Law of Cosines, because this is SAS",
                "The Law of Sines, because you have an angle",
                "The Pythagorean Theorem, because $BC$ is a side",
                "The area formula $\\frac{1}{2}ab\\sin C$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Two sides and the included angle (SAS) is exactly the Law of Cosines setup: $BC^2 = 14^2 + 9^2 - 2(14)(9)\\cos 71^\\circ$. The Law of Sines is tempting because an angle is given, but it needs an angle paired with its opposite side, and the side opposite $\\angle A$ is $BC$ — the very side we do not know. The Pythagorean Theorem requires a right angle.",
                "zh": "两边及夹角（SAS）正是余弦定理的适用条件：$BC^2 = 14^2 + 9^2 - 2(14)(9)\\cos 71^\\circ$。正弦定理看似可行（因为已知一个角），但它需要\"角与其对边\"配对，而 $\\angle A$ 的对边恰是未知的 $BC$。勾股定理则要求有直角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In triangle $ABC$, $m\\angle A = 42^\\circ$, $m\\angle B = 75^\\circ$, and side $a = 10$ cm (opposite angle $A$). Find side $b$ in cm, rounded to the nearest tenth.",
                "zh": "在三角形 $ABC$ 中，$m\\angle A = 42^\\circ$，$m\\angle B = 75^\\circ$，角 $A$ 的对边 $a = 10$ 厘米。求边 $b$（单位：厘米），精确到十分位。"
              },
              "answer": "14.4",
              "accept": [
                "14.43",
                "14.44"
              ],
              "explanation": {
                "en": "This is ASA/AAS with a matched pair ($A$ and $a$), so use the Law of Sines: $\\frac{b}{\\sin 75^\\circ} = \\frac{10}{\\sin 42^\\circ}$, giving $b = \\frac{10\\sin 75^\\circ}{\\sin 42^\\circ} \\approx 14.4$ cm.",
                "zh": "这是 ASA/AAS 条件，且已有配对的角与对边（$A$ 与 $a$），用正弦定理：$\\frac{b}{\\sin 75^\\circ} = \\frac{10}{\\sin 42^\\circ}$，得 $b = \\frac{10\\sin 75^\\circ}{\\sin 42^\\circ} \\approx 14.4$ 厘米。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A triangle has sides $5$, $7$, and $10$. To the nearest tenth of a degree, what is the measure of its largest angle?",
                "zh": "一个三角形的三边为 $5$、$7$、$10$。它的最大角是多少度？精确到 $0.1^\\circ$。"
              },
              "choices": [
                "$40.5^\\circ$",
                "$68.2^\\circ$",
                "$111.8^\\circ$",
                "$27.7^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The largest angle is opposite the longest side, $10$. Law of Cosines (SSS): $\\cos C = \\frac{5^2 + 7^2 - 10^2}{2(5)(7)} = \\frac{-26}{70} \\approx -0.371$, so $C \\approx 111.8^\\circ$. The negative cosine signals an obtuse angle — consistent with $10^2 > 5^2 + 7^2$. The distractor $68.2^\\circ$ is the supplement, the result of dropping the negative sign.",
                "zh": "最大角对着最长边 $10$。由余弦定理（SSS）：$\\cos C = \\frac{5^2 + 7^2 - 10^2}{2(5)(7)} = \\frac{-26}{70} \\approx -0.371$，所以 $C \\approx 111.8^\\circ$。余弦为负说明是钝角——与 $10^2 > 5^2 + 7^2$ 一致。干扰项 $68.2^\\circ$ 是它的补角，来自漏掉负号的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A triangular garden plot has sides of $9$ m and $14$ m that meet at a $30^\\circ$ angle. Find its area in square meters. Give a decimal (exact).",
                "zh": "一块三角形花园地块的两边长 $9$ 米和 $14$ 米，夹角为 $30^\\circ$。求它的面积（单位：平方米）。请填一个（精确的）小数。"
              },
              "answer": "31.5",
              "accept": [
                "31.50",
                "63/2"
              ],
              "explanation": {
                "en": "Area $= \\frac{1}{2}(9)(14)\\sin 30^\\circ = \\frac{1}{2}(126)\\left(\\frac{1}{2}\\right) = 31.5$ m$^2$. Since $\\sin 30^\\circ = \\frac{1}{2}$ exactly, no rounding is needed.",
                "zh": "面积 $= \\frac{1}{2}(9)(14)\\sin 30^\\circ = \\frac{1}{2}(126)\\left(\\frac{1}{2}\\right) = 31.5$ 平方米。因为 $\\sin 30^\\circ = \\frac{1}{2}$ 是精确值，所以无需取近似。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A surveyor stands at point $P$ on one shore of a lake. She measures $PA = 120$ m and $PB = 150$ m to the two ends of the lake, with $m\\angle APB = 95^\\circ$. To the nearest meter, how long is the lake $AB$?",
                "zh": "测量员站在湖边的点 $P$ 处，测得到湖两端的距离 $PA = 120$ 米、$PB = 150$ 米，且 $m\\angle APB = 95^\\circ$。湖的长度 $AB$ 约为多少米？精确到整数。"
              },
              "choices": [
                "$192$ m",
                "$200$ m",
                "$270$ m",
                "$135$ m"
              ],
              "answer": 1,
              "explanation": {
                "en": "SAS calls for the Law of Cosines: $AB^2 = 120^2 + 150^2 - 2(120)(150)\\cos 95^\\circ \\approx 36900 + 3138 \\approx 40038$, so $AB \\approx 200$ m. Because $95^\\circ > 90^\\circ$, $\\cos 95^\\circ$ is negative and the correction term adds length — the distractor $192$ m $= \\sqrt{36900}$ comes from dropping the cosine term entirely (treating the angle as $90^\\circ$).",
                "zh": "SAS 条件用余弦定理：$AB^2 = 120^2 + 150^2 - 2(120)(150)\\cos 95^\\circ \\approx 36900 + 3138 \\approx 40038$，所以 $AB \\approx 200$ 米。因为 $95^\\circ > 90^\\circ$，$\\cos 95^\\circ$ 为负，修正项使边变长——干扰项 $192$ 米 $= \\sqrt{36900}$ 是完全丢掉余弦项（把角当成 $90^\\circ$）的结果。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "circles",
      "title": "Unit 10: Circles",
      "titleZh": "第十单元：圆",
      "lessons": [
        {
          "id": "arcs-chords-central-inscribed-angles",
          "title": "Arcs, Chords, and Inscribed Angles",
          "titleZh": "弧、弦、圆心角与圆周角",
          "content": [
            {
              "type": "h2",
              "en": "The Vocabulary of Circles",
              "zh": "圆的基本术语"
            },
            {
              "type": "p",
              "en": "A circle is the set of all points in a plane at a fixed distance, the radius, from a fixed point, the center. We name a circle by its center: circle $O$. A chord is a segment whose endpoints both lie on the circle, and a diameter is a chord that passes through the center — its length is twice the radius. Any two points on a circle also cut the circle itself into two arcs. A central angle is an angle whose vertex is the center of the circle; its sides cross the circle at the endpoints of an arc.",
              "zh": "圆是平面内到定点（圆心）的距离等于定长（半径）的所有点的集合。我们用圆心为圆命名：圆 $O$。弦是两个端点都在圆上的线段；直径是经过圆心的弦，其长度是半径的两倍。圆上任意两点也把圆本身分成两条弧。圆心角是顶点在圆心的角，它的两边与圆相交于一条弧的两个端点。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Minor arc $\\overset{\\frown}{AB}$: the shorter arc, measuring less than $180^\\circ$; named with two letters.",
                  "zh": "劣弧 $\\overset{\\frown}{AB}$：较短的弧，度数小于 $180^\\circ$，用两个字母命名。"
                },
                {
                  "en": "Major arc $\\overset{\\frown}{ACB}$: the longer arc, measuring more than $180^\\circ$; named with three letters.",
                  "zh": "优弧 $\\overset{\\frown}{ACB}$：较长的弧，度数大于 $180^\\circ$，用三个字母命名。"
                },
                {
                  "en": "Semicircle: an arc cut off by a diameter, measuring exactly $180^\\circ$.",
                  "zh": "半圆：由直径截出的弧，恰好为 $180^\\circ$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Arc Measure and Arc Addition",
              "zh": "弧的度数与弧的加法"
            },
            {
              "type": "p",
              "en": "The measure of a minor arc equals the measure of its central angle, and the measures of all the arcs around a circle add to $360^\\circ$. The Arc Addition Postulate works just like segment addition: if $B$ lies on arc $\\overset{\\frown}{AC}$, then",
              "zh": "劣弧的度数等于它所对圆心角的度数，且圆上所有弧的度数之和为 $360^\\circ$。弧的加法公理与线段加法完全类似：若点 $B$ 在弧 $\\overset{\\frown}{AC}$ 上，则"
            },
            {
              "type": "math",
              "tex": "m\\overset{\\frown}{AB} + m\\overset{\\frown}{BC} = m\\overset{\\frown}{ABC}"
            },
            {
              "type": "h3",
              "en": "Chords and Their Arcs",
              "zh": "弦与弧的关系"
            },
            {
              "type": "p",
              "en": "In the same circle (or in congruent circles), chords and arcs control each other. These three theorems come up constantly in computations and proofs:",
              "zh": "在同圆（或等圆）中，弦与弧相互决定。下面三条定理在计算和证明中反复出现："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Two chords are congruent if and only if their arcs are congruent: $\\overline{AB} \\cong \\overline{CD} \\iff \\overset{\\frown}{AB} \\cong \\overset{\\frown}{CD}$.",
                  "zh": "两条弦全等当且仅当它们所对的弧全等：$\\overline{AB} \\cong \\overline{CD} \\iff \\overset{\\frown}{AB} \\cong \\overset{\\frown}{CD}$。"
                },
                {
                  "en": "If a radius (or diameter) is perpendicular to a chord, it bisects the chord and its arc.",
                  "zh": "若半径（或直径）垂直于一条弦，则它平分这条弦及其所对的弧（垂径定理）。"
                },
                {
                  "en": "Two chords are congruent if and only if they are equidistant from the center.",
                  "zh": "两条弦全等当且仅当它们到圆心的距离相等。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Inscribed Angle Theorem",
              "zh": "圆周角定理"
            },
            {
              "type": "p",
              "en": "An inscribed angle has its vertex on the circle and sides that are chords. The Inscribed Angle Theorem says an inscribed angle measures half of its intercepted arc — equivalently, half of the central angle that intercepts the same arc:",
              "zh": "圆周角的顶点在圆上，两边都是弦。圆周角定理指出：圆周角等于它所对弧的度数的一半——等价地，等于同弧所对圆心角的一半："
            },
            {
              "type": "math",
              "tex": "m\\angle ACB = \\tfrac{1}{2}\\, m\\overset{\\frown}{AB}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Corollary 1: Two inscribed angles that intercept the same arc are congruent.",
                  "zh": "推论 1：同弧所对的两个圆周角相等。"
                },
                {
                  "en": "Corollary 2: An angle inscribed in a semicircle is a right angle — if $\\overline{AB}$ is a diameter and $C$ is any other point on the circle, then $m\\angle ACB = 90^\\circ$.",
                  "zh": "推论 2：半圆所对的圆周角是直角——若 $\\overline{AB}$ 是直径，$C$ 是圆上另一点，则 $m\\angle ACB = 90^\\circ$。"
                },
                {
                  "en": "Corollary 3: In an inscribed (cyclic) quadrilateral, opposite angles are supplementary: $m\\angle A + m\\angle C = 180^\\circ$ and $m\\angle B + m\\angle D = 180^\\circ$.",
                  "zh": "推论 3：圆内接四边形的对角互补：$m\\angle A + m\\angle C = 180^\\circ$，$m\\angle B + m\\angle D = 180^\\circ$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: mixing up central and inscribed angles. A central angle equals its arc; an inscribed angle equals half its arc. Before halving anything, check where the vertex is — at the center, or on the circle?",
              "zh": "常见错误：混淆圆心角与圆周角。圆心角等于所对的弧，圆周角等于所对弧的一半。在取一半之前，先看清顶点的位置——是在圆心，还是在圆上？"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: From central angle to inscribed angle",
                "zh": "例题 1：从圆心角到圆周角"
              },
              "problem": {
                "en": "Points $A$, $B$, and $C$ lie on circle $O$, with $C$ on the major arc $\\overset{\\frown}{AB}$. The central angle $\\angle AOB$ measures $100^\\circ$. Find $m\\overset{\\frown}{AB}$ (the minor arc), the major arc $m\\overset{\\frown}{ACB}$, and $m\\angle ACB$.",
                "zh": "点 $A$、$B$、$C$ 在圆 $O$ 上，$C$ 在优弧 $\\overset{\\frown}{AB}$ 上。圆心角 $\\angle AOB = 100^\\circ$。求劣弧 $m\\overset{\\frown}{AB}$、优弧 $m\\overset{\\frown}{ACB}$ 以及 $m\\angle ACB$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The minor arc equals its central angle: $m\\overset{\\frown}{AB} = 100^\\circ$. The two arcs together make the whole circle, so the major arc is $360^\\circ - 100^\\circ = 260^\\circ$.",
                  "zh": "劣弧等于它的圆心角：$m\\overset{\\frown}{AB} = 100^\\circ$。两条弧合起来是整个圆，所以优弧为 $360^\\circ - 100^\\circ = 260^\\circ$。"
                },
                {
                  "type": "p",
                  "en": "The inscribed angle $\\angle ACB$ intercepts the minor arc $\\overset{\\frown}{AB}$ (the arc that does not contain its vertex), so",
                  "zh": "圆周角 $\\angle ACB$ 所对的是劣弧 $\\overset{\\frown}{AB}$（即不含顶点的那条弧），因此"
                },
                {
                  "type": "math",
                  "tex": "m\\angle ACB = \\tfrac{1}{2}(100^\\circ) = 50^\\circ"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Proof that a perpendicular radius bisects a chord",
                "zh": "例题 2：证明垂直于弦的半径平分弦"
              },
              "problem": {
                "en": "In circle $O$, radius $\\overline{OM}$ is extended to meet chord $\\overline{AB}$ perpendicularly at point $P$. Prove that $AP = PB$.",
                "zh": "在圆 $O$ 中，过圆心的线段与弦 $\\overline{AB}$ 垂直相交于点 $P$。证明 $AP = PB$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Draw radii $\\overline{OA}$ and $\\overline{OB}$. Here is the reasoning, statement by statement. (1) $OA = OB$ — all radii of a circle are congruent. (2) $\\angle OPA$ and $\\angle OPB$ are right angles — given that $\\overline{OP} \\perp \\overline{AB}$. (3) $OP = OP$ — Reflexive Property. (4) $\\triangle OPA \\cong \\triangle OPB$ — Hypotenuse-Leg (HL), since both triangles are right triangles with congruent hypotenuses (radii) and a shared leg. (5) $AP = PB$ — corresponding parts of congruent triangles (CPCTC). $\\blacksquare$",
                  "zh": "连接半径 $\\overline{OA}$ 与 $\\overline{OB}$。逐条陈述推理如下。(1) $OA = OB$——同圆的半径都相等。(2) $\\angle OPA$ 与 $\\angle OPB$ 是直角——已知 $\\overline{OP} \\perp \\overline{AB}$。(3) $OP = OP$——自反性质。(4) $\\triangle OPA \\cong \\triangle OPB$——斜边直角边定理（HL）：两个直角三角形的斜边（半径）相等，且共用一条直角边。(5) $AP = PB$——全等三角形的对应部分相等（CPCTC）。$\\blacksquare$"
                },
                {
                  "type": "p",
                  "en": "The same congruent triangles also give $\\angle AOP \\cong \\angle BOP$, so the perpendicular bisects arc $\\overset{\\frown}{AB}$ as well.",
                  "zh": "由同一对全等三角形还可得 $\\angle AOP \\cong \\angle BOP$，因此这条垂线也平分弧 $\\overset{\\frown}{AB}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In circle $O$, central angle $\\angle AOB$ measures $74^\\circ$. What is the measure of minor arc $\\overset{\\frown}{AB}$?",
                "zh": "在圆 $O$ 中，圆心角 $\\angle AOB = 74^\\circ$。劣弧 $\\overset{\\frown}{AB}$ 的度数是多少？"
              },
              "choices": [
                "$37^\\circ$",
                "$74^\\circ$",
                "$106^\\circ$",
                "$148^\\circ$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A minor arc has the same measure as its central angle, so the arc is $74^\\circ$. Choosing $37^\\circ$ means you halved it — halving is only for inscribed angles, whose vertex is on the circle.",
                "zh": "劣弧的度数等于它所对的圆心角，所以是 $74^\\circ$。选 $37^\\circ$ 是错误地取了一半——只有顶点在圆上的圆周角才取一半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Points $A$, $B$, and $C$ divide circle $O$ into three arcs with $m\\overset{\\frown}{AB} = 85^\\circ$ and $m\\overset{\\frown}{BC} = 130^\\circ$. Find $m\\overset{\\frown}{CA}$ in degrees. Give a whole number.",
                "zh": "点 $A$、$B$、$C$ 把圆 $O$ 分成三条弧，其中 $m\\overset{\\frown}{AB} = 85^\\circ$，$m\\overset{\\frown}{BC} = 130^\\circ$。求 $m\\overset{\\frown}{CA}$ 的度数。请填一个整数。"
              },
              "answer": "145",
              "accept": [
                "145.0"
              ],
              "explanation": {
                "en": "The arcs of a circle add to $360^\\circ$, so $m\\overset{\\frown}{CA} = 360 - 85 - 130 = 145^\\circ$.",
                "zh": "圆上各弧的度数之和为 $360^\\circ$，所以 $m\\overset{\\frown}{CA} = 360 - 85 - 130 = 145^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Inscribed angle $\\angle ACB$ intercepts arc $\\overset{\\frown}{AB}$, and $m\\overset{\\frown}{AB} = 96^\\circ$. Find $m\\angle ACB$.",
                "zh": "圆周角 $\\angle ACB$ 所对的弧 $\\overset{\\frown}{AB}$ 的度数为 $96^\\circ$。求 $m\\angle ACB$。"
              },
              "choices": [
                "$192^\\circ$",
                "$96^\\circ$",
                "$48^\\circ$",
                "$42^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "An inscribed angle is half its intercepted arc: $\\frac{1}{2}(96^\\circ) = 48^\\circ$. Choosing $96^\\circ$ treats it like a central angle; $192^\\circ$ doubles instead of halving.",
                "zh": "圆周角等于所对弧的一半：$\\frac{1}{2}(96^\\circ) = 48^\\circ$。选 $96^\\circ$ 是把它当成了圆心角；$192^\\circ$ 则是错误地加倍而不是取半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Triangle $ABC$ is inscribed in a circle with $\\overline{AB}$ a diameter. If $AC = 6$ and $BC = 8$, find the length of the diameter $AB$. Give a whole number (units).",
                "zh": "三角形 $ABC$ 内接于圆，$\\overline{AB}$ 是直径。若 $AC = 6$，$BC = 8$，求直径 $AB$ 的长度。请填一个整数（单位）。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "An angle inscribed in a semicircle is a right angle, so $\\angle C = 90^\\circ$ and $\\triangle ABC$ is right with hypotenuse $AB$. By the Pythagorean Theorem, $AB = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ units.",
                "zh": "半圆所对的圆周角是直角，所以 $\\angle C = 90^\\circ$，$\\triangle ABC$ 是以 $AB$ 为斜边的直角三角形。由勾股定理，$AB = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$（单位）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In circle $O$, segment $\\overline{OM}$ is drawn from the center perpendicular to chord $\\overline{AB}$, meeting it at $M$. A student concludes that $AM = MB$. Which theorem justifies this step?",
                "zh": "在圆 $O$ 中，从圆心作 $\\overline{OM}$ 垂直于弦 $\\overline{AB}$，垂足为 $M$。某学生由此得出 $AM = MB$。哪条定理可以作为这一步的依据？"
              },
              "choices": [
                "A radius or diameter perpendicular to a chord bisects the chord",
                "Congruent chords are equidistant from the center",
                "An inscribed angle is half its intercepted arc",
                "The measures of the arcs of a circle add to $360^\\circ$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The perpendicular-to-a-chord theorem states exactly this: the perpendicular from the center bisects the chord (and its arc). The equidistant-chords theorem compares two different chords, which is not the situation here.",
                "zh": "垂径定理说的正是这一点：过圆心且垂直于弦的线段平分这条弦（及其所对的弧）。“全等弦到圆心距离相等”比较的是两条不同的弦，与本题情形不符。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Quadrilateral $ABCD$ is inscribed in a circle and $m\\angle A = 88^\\circ$. Find $m\\angle C$.",
                "zh": "四边形 $ABCD$ 内接于圆，且 $m\\angle A = 88^\\circ$。求 $m\\angle C$。"
              },
              "choices": [
                "$88^\\circ$",
                "$92^\\circ$",
                "$176^\\circ$",
                "$46^\\circ$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Opposite angles of an inscribed quadrilateral are supplementary: $m\\angle C = 180^\\circ - 88^\\circ = 92^\\circ$. Choosing $88^\\circ$ assumes opposite angles are congruent — that is true for parallelograms, not for cyclic quadrilaterals in general.",
                "zh": "圆内接四边形的对角互补：$m\\angle C = 180^\\circ - 88^\\circ = 92^\\circ$。选 $88^\\circ$ 是误以为对角相等——那是平行四边形的性质，一般的圆内接四边形并不满足。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A circle has radius $13$. A chord $\\overline{AB}$ lies at distance $5$ from the center. Find the length of $\\overline{AB}$. Give a whole number (units).",
                "zh": "一个圆的半径为 $13$，弦 $\\overline{AB}$ 到圆心的距离为 $5$。求 $\\overline{AB}$ 的长度。请填一个整数（单位）。"
              },
              "answer": "24",
              "accept": [
                "24.0"
              ],
              "explanation": {
                "en": "Drop the perpendicular from the center to the chord; it bisects the chord. Half the chord is a leg of a right triangle with hypotenuse $13$ (a radius) and other leg $5$: half-chord $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$, so $AB = 2(12) = 24$ units.",
                "zh": "从圆心向弦作垂线，它平分这条弦。半弦是直角三角形的一条直角边，斜边为半径 $13$，另一条直角边为 $5$：半弦 $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$，所以 $AB = 2(12) = 24$（单位）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Points $A$, $B$, $C$, $D$ lie on a circle, with $C$ and $D$ on the same side of chord $\\overline{AB}$. If $m\\angle ACB = 31^\\circ$, what is $m\\angle ADB$?",
                "zh": "点 $A$、$B$、$C$、$D$ 在同一个圆上，且 $C$、$D$ 在弦 $\\overline{AB}$ 的同侧。若 $m\\angle ACB = 31^\\circ$，则 $m\\angle ADB$ 是多少？"
              },
              "choices": [
                "$62^\\circ$",
                "$149^\\circ$",
                "$31^\\circ$",
                "$59^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Both $\\angle ACB$ and $\\angle ADB$ are inscribed angles intercepting the same arc $\\overset{\\frown}{AB}$, so they are congruent: $31^\\circ$. The distractor $62^\\circ$ doubles the angle — that would be the central angle for that arc, not another inscribed angle.",
                "zh": "$\\angle ACB$ 与 $\\angle ADB$ 都是同弧 $\\overset{\\frown}{AB}$ 所对的圆周角，因此相等，为 $31^\\circ$。干扰项 $62^\\circ$ 把角加倍了——那是该弧所对的圆心角，而不是另一个圆周角。"
              }
            }
          ]
        },
        {
          "id": "tangents-secants-angle-relationships",
          "title": "Tangents, Secants, and Angle Relationships",
          "titleZh": "切线、割线与角的关系",
          "content": [
            {
              "type": "h2",
              "en": "Lines That Meet a Circle",
              "zh": "与圆相交的直线"
            },
            {
              "type": "p",
              "en": "A tangent is a line that touches a circle at exactly one point, the point of tangency. A secant is a line that crosses the circle at two points, so every chord lies along a secant. Two facts about tangents drive nearly every tangent problem: a tangent is perpendicular to the radius drawn to the point of tangency, and the two tangent segments drawn to a circle from the same external point are congruent.",
              "zh": "切线是与圆恰好只有一个公共点的直线，这个公共点叫切点。割线与圆有两个交点，因此每条弦都在某条割线上。关于切线的两个事实几乎主导所有切线问题：切线垂直于过切点的半径；从圆外同一点引出的两条切线段相等。"
            },
            {
              "type": "h3",
              "en": "Angles Formed by Chords, Secants, and Tangents",
              "zh": "弦、割线与切线所成的角"
            },
            {
              "type": "p",
              "en": "Where the vertex of an angle sits relative to the circle tells you exactly which formula to use. On the circle, an angle formed by a tangent and a chord measures half its intercepted arc, just like an inscribed angle. Inside the circle, two chords crossing at a point form an angle equal to half the sum of the two arcs they intercept (the arc facing the angle and the arc facing its vertical angle):",
              "zh": "角的顶点相对于圆的位置决定了该用哪个公式。顶点在圆上时，切线与弦所成的角等于所夹弧的一半，与圆周角一样。顶点在圆内时，两条弦相交所成的角等于它和它的对顶角所对的两条弧之和的一半："
            },
            {
              "type": "math",
              "tex": "m\\angle 1 = \\tfrac{1}{2}\\left( m\\overset{\\frown}{AB} + m\\overset{\\frown}{CD} \\right) \\quad \\text{(vertex inside)}"
            },
            {
              "type": "p",
              "en": "Outside the circle, an angle formed by two secants, two tangents, or a secant and a tangent measures half the difference of the far arc and the near arc:",
              "zh": "顶点在圆外时，两条割线、两条切线或一条割线与一条切线所成的角等于远弧与近弧之差的一半："
            },
            {
              "type": "math",
              "tex": "m\\angle P = \\tfrac{1}{2}\\left( m\\overset{\\frown}{\\text{far}} - m\\overset{\\frown}{\\text{near}} \\right) \\quad \\text{(vertex outside)}"
            },
            {
              "type": "note",
              "en": "Test tip: memorize the pattern by vertex location — on the circle: half the arc; inside: half the SUM; outside: half the DIFFERENCE. The most common exam error is using the sum formula for an external vertex.",
              "zh": "考试提示：按顶点位置记忆公式——顶点在圆上：弧的一半；在圆内：两弧之和的一半；在圆外：两弧之差的一半。考试中最常见的错误就是对圆外的顶点误用求和公式。"
            },
            {
              "type": "h3",
              "en": "Segment Lengths: The Power of a Point",
              "zh": "线段长度：点的幂"
            },
            {
              "type": "p",
              "en": "When two lines through a point $P$ meet a circle, the products of the distances from $P$ to the circle are equal. This single idea, called the power of a point, takes three forms:",
              "zh": "当过一点 $P$ 的两条直线与圆相交时，从 $P$ 到圆上交点的距离之积相等。这个统一的思想叫做点的幂，共有三种形式："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Chord–chord: chords $\\overline{AB}$ and $\\overline{CD}$ intersect at $P$ inside the circle, so $PA \\cdot PB = PC \\cdot PD$.",
                  "zh": "相交弦定理：弦 $\\overline{AB}$ 与 $\\overline{CD}$ 相交于圆内一点 $P$，则 $PA \\cdot PB = PC \\cdot PD$。"
                },
                {
                  "en": "Secant–secant: from external point $P$, secants meet the circle at $A$ then $B$, and at $C$ then $D$, so $PA \\cdot PB = PC \\cdot PD$ (each product is outside part times whole secant).",
                  "zh": "割线定理：从圆外一点 $P$ 引两条割线，分别交圆于 $A$、$B$ 与 $C$、$D$，则 $PA \\cdot PB = PC \\cdot PD$（每个乘积都是圆外段乘整条割线段）。"
                },
                {
                  "en": "Secant–tangent: tangent $\\overline{PT}$ and a secant through $A$ then $B$ give $PT^2 = PA \\cdot PB$.",
                  "zh": "切割线定理：切线段 $\\overline{PT}$ 与交圆于 $A$、$B$ 的割线满足 $PT^2 = PA \\cdot PB$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: in the secant–secant and secant–tangent formulas, the product is (external segment) $\\times$ (whole secant), NOT (external segment) $\\times$ (chord part). Always measure both distances starting from $P$.",
              "zh": "常见错误：在割线定理和切割线定理中，乘积是（圆外段）$\\times$（整条割线段），而不是（圆外段）$\\times$（圆内弦段）。两个距离都必须从 $P$ 量起。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Two tangents from an external point",
                "zh": "例题 1：从圆外一点引两条切线"
              },
              "problem": {
                "en": "From external point $P$, tangents $\\overline{PA}$ and $\\overline{PB}$ touch circle $O$ at $A$ and $B$, and $m\\angle APB = 40^\\circ$. Find the measure of minor arc $\\overset{\\frown}{AB}$.",
                "zh": "从圆外一点 $P$ 引切线 $\\overline{PA}$、$\\overline{PB}$，分别切圆 $O$ 于 $A$、$B$，且 $m\\angle APB = 40^\\circ$。求劣弧 $\\overset{\\frown}{AB}$ 的度数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Draw radii $\\overline{OA}$ and $\\overline{OB}$. Each radius is perpendicular to its tangent, so $m\\angle OAP = m\\angle OBP = 90^\\circ$. The angles of quadrilateral $OAPB$ sum to $360^\\circ$:",
                  "zh": "连接半径 $\\overline{OA}$ 与 $\\overline{OB}$。半径垂直于过切点的切线，所以 $m\\angle OAP = m\\angle OBP = 90^\\circ$。四边形 $OAPB$ 的内角和为 $360^\\circ$："
                },
                {
                  "type": "math",
                  "tex": "m\\angle AOB = 360^\\circ - 90^\\circ - 90^\\circ - 40^\\circ = 140^\\circ"
                },
                {
                  "type": "p",
                  "en": "The central angle equals its minor arc, so $m\\overset{\\frown}{AB} = 140^\\circ$. Quick check with the external-angle formula: the far arc is $360^\\circ - 140^\\circ = 220^\\circ$, and $\\frac{1}{2}(220^\\circ - 140^\\circ) = 40^\\circ$. ✓",
                  "zh": "圆心角等于其劣弧，所以 $m\\overset{\\frown}{AB} = 140^\\circ$。用圆外角公式检验：远弧为 $360^\\circ - 140^\\circ = 220^\\circ$，且 $\\frac{1}{2}(220^\\circ - 140^\\circ) = 40^\\circ$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Secant–secant segment lengths",
                "zh": "例题 2：两条割线的线段长度"
              },
              "problem": {
                "en": "From external point $P$, one secant meets the circle first at $A$ and then at $B$, with $PA = 5$ and $AB = 7$. A second secant meets the circle first at $C$ and then at $D$, with $PC = 4$. Find $PD$ and the chord length $CD$.",
                "zh": "从圆外一点 $P$ 引一条割线，先交圆于 $A$，再交于 $B$，其中 $PA = 5$，$AB = 7$。另一条割线先交圆于 $C$，再交于 $D$，其中 $PC = 4$。求 $PD$ 与弦长 $CD$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The whole first secant is $PB = PA + AB = 5 + 7 = 12$. By the power of the point, (external)(whole) is the same for both secants:",
                  "zh": "第一条割线的全长为 $PB = PA + AB = 5 + 7 = 12$。由点的幂，两条割线的（圆外段）$\\times$（全长）相等："
                },
                {
                  "type": "math",
                  "tex": "PA \\cdot PB = PC \\cdot PD \\;\\Rightarrow\\; 5 \\cdot 12 = 4 \\cdot PD \\;\\Rightarrow\\; PD = 15"
                },
                {
                  "type": "p",
                  "en": "Then $CD = PD - PC = 15 - 4 = 11$ units. Note that we multiplied $5 \\cdot 12$, not $5 \\cdot 7$ — both factors start at $P$.",
                  "zh": "于是 $CD = PD - PC = 15 - 4 = 11$（单位）。注意我们相乘的是 $5 \\cdot 12$ 而不是 $5 \\cdot 7$——两个因子都从 $P$ 量起。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Line $\\overline{PA}$ is tangent to circle $O$ at $A$. The radius of the circle is $9$ and $PO = 15$. Find the tangent length $PA$. Give a whole number (units).",
                "zh": "$\\overline{PA}$ 与圆 $O$ 相切于点 $A$，圆的半径为 $9$，$PO = 15$。求切线段 $PA$ 的长度。请填一个整数（单位）。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "The radius to the point of tangency is perpendicular to the tangent, so $\\triangle OAP$ is right-angled at $A$ with hypotenuse $PO$. Then $PA = \\sqrt{15^2 - 9^2} = \\sqrt{144} = 12$ units.",
                "zh": "过切点的半径垂直于切线，所以 $\\triangle OAP$ 在 $A$ 处为直角，斜边是 $PO$。于是 $PA = \\sqrt{15^2 - 9^2} = \\sqrt{144} = 12$（单位）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Tangent segments $\\overline{PA}$ and $\\overline{PB}$ are drawn to a circle from external point $P$, with $PA = 5x - 4$ and $PB = 3x + 10$. Find $x$.",
                "zh": "从圆外一点 $P$ 引切线段 $\\overline{PA}$ 与 $\\overline{PB}$，其中 $PA = 5x - 4$，$PB = 3x + 10$。求 $x$。"
              },
              "choices": [
                "$3$",
                "$7$",
                "$14$",
                "$31$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Tangent segments from the same external point are congruent, so $5x - 4 = 3x + 10$, giving $2x = 14$ and $x = 7$. The distractor $31$ is the tangent length $PA = 5(7) - 4$, not the value of $x$.",
                "zh": "从同一圆外点引出的切线段相等，所以 $5x - 4 = 3x + 10$，得 $2x = 14$，$x = 7$。干扰项 $31$ 是切线段长 $PA = 5(7) - 4$，而不是 $x$ 的值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Chords $\\overline{AC}$ and $\\overline{BD}$ intersect at point $E$ inside a circle. If $m\\overset{\\frown}{AB} = 42^\\circ$ and $m\\overset{\\frown}{CD} = 98^\\circ$, find $m\\angle AEB$.",
                "zh": "弦 $\\overline{AC}$ 与 $\\overline{BD}$ 相交于圆内一点 $E$。若 $m\\overset{\\frown}{AB} = 42^\\circ$，$m\\overset{\\frown}{CD} = 98^\\circ$，求 $m\\angle AEB$。"
              },
              "choices": [
                "$28^\\circ$",
                "$70^\\circ$",
                "$140^\\circ$",
                "$56^\\circ$"
              ],
              "answer": 1,
              "explanation": {
                "en": "For a vertex inside the circle, the angle is half the sum of the intercepted arcs: $\\frac{1}{2}(42^\\circ + 98^\\circ) = 70^\\circ$. The distractor $28^\\circ$ is half the difference — that formula is only for a vertex outside the circle.",
                "zh": "顶点在圆内时，角等于所对两弧之和的一半：$\\frac{1}{2}(42^\\circ + 98^\\circ) = 70^\\circ$。干扰项 $28^\\circ$ 是两弧之差的一半——那个公式只适用于顶点在圆外的情形。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two secants are drawn to a circle from external point $P$. They intercept a far arc of $118^\\circ$ and a near arc of $44^\\circ$. Find $m\\angle P$ in degrees. Give a whole number.",
                "zh": "从圆外一点 $P$ 引两条割线，所夹的远弧为 $118^\\circ$，近弧为 $44^\\circ$。求 $m\\angle P$ 的度数。请填一个整数。"
              },
              "answer": "37",
              "accept": [
                "37.0"
              ],
              "explanation": {
                "en": "For a vertex outside the circle, the angle is half the difference of the arcs: $\\frac{1}{2}(118^\\circ - 44^\\circ) = \\frac{1}{2}(74^\\circ) = 37^\\circ$.",
                "zh": "顶点在圆外时，角等于两弧之差的一半：$\\frac{1}{2}(118^\\circ - 44^\\circ) = \\frac{1}{2}(74^\\circ) = 37^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Chords $\\overline{AB}$ and $\\overline{CD}$ intersect at $E$ inside a circle, with $AE = 8$, $EB = 3$, and $CE = 4$. Find $ED$. Give a whole number (units).",
                "zh": "弦 $\\overline{AB}$ 与 $\\overline{CD}$ 相交于圆内一点 $E$，其中 $AE = 8$，$EB = 3$，$CE = 4$。求 $ED$。请填一个整数（单位）。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "By the chord–chord power of a point, $AE \\cdot EB = CE \\cdot ED$, so $8 \\cdot 3 = 4 \\cdot ED$ and $ED = \\frac{24}{4} = 6$ units.",
                "zh": "由相交弦定理，$AE \\cdot EB = CE \\cdot ED$，所以 $8 \\cdot 3 = 4 \\cdot ED$，得 $ED = \\frac{24}{4} = 6$（单位）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "From external point $P$, tangent $\\overline{PT}$ has length $6$, and a secant from $P$ meets the circle first at $A$ and then at $B$ with $PA = 4$. Find the whole secant length $PB$.",
                "zh": "从圆外一点 $P$ 引切线段 $\\overline{PT}$，长为 $6$；再引一条割线，先交圆于 $A$，再交于 $B$，其中 $PA = 4$。求整条割线段 $PB$ 的长度。"
              },
              "choices": [
                "$5$",
                "$12$",
                "$24$",
                "$9$"
              ],
              "answer": 3,
              "explanation": {
                "en": "By the secant–tangent relationship, $PT^2 = PA \\cdot PB$, so $36 = 4 \\cdot PB$ and $PB = 9$ units. The distractor $5$ comes from treating $PB$ as the chord part: the chord is $AB = 9 - 4 = 5$, but the formula needs the whole secant from $P$.",
                "zh": "由切割线定理，$PT^2 = PA \\cdot PB$，所以 $36 = 4 \\cdot PB$，得 $PB = 9$（单位）。干扰项 $5$ 是把 $PB$ 当成了弦段：弦 $AB = 9 - 4 = 5$，但公式要求的是从 $P$ 起的整条割线段。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Line $\\ell$ is tangent to a circle at $A$, and chord $\\overline{AB}$ intercepts an arc of $150^\\circ$. What is the measure of the acute angle between $\\ell$ and $\\overline{AB}$?",
                "zh": "直线 $\\ell$ 切圆于点 $A$，弦 $\\overline{AB}$ 所夹的弧为 $150^\\circ$。求 $\\ell$ 与 $\\overline{AB}$ 所成的锐角的度数。"
              },
              "choices": [
                "$75^\\circ$",
                "$150^\\circ$",
                "$105^\\circ$",
                "$30^\\circ$"
              ],
              "answer": 0,
              "explanation": {
                "en": "A tangent–chord angle, with its vertex on the circle, is half its intercepted arc: $\\frac{1}{2}(150^\\circ) = 75^\\circ$. The distractor $105^\\circ$ is half of the other arc ($210^\\circ$), which is the obtuse angle on the other side of the chord.",
                "zh": "弦切角的顶点在圆上，等于所夹弧的一半：$\\frac{1}{2}(150^\\circ) = 75^\\circ$。干扰项 $105^\\circ$ 是另一条弧（$210^\\circ$）的一半，即弦另一侧的钝角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a proof, $\\overline{PA}$ is tangent to circle $O$ at $A$, and a student writes the statement \"$\\overline{OA} \\perp \\overline{PA}$.\" Which reason justifies this statement?",
                "zh": "在一个证明中，$\\overline{PA}$ 切圆 $O$ 于点 $A$，某学生写下命题 “$\\overline{OA} \\perp \\overline{PA}$”。下列哪条理由可以作为依据？"
              },
              "choices": [
                "Tangent segments from an external point are congruent",
                "An angle inscribed in a semicircle is a right angle",
                "A tangent line is perpendicular to the radius drawn to the point of tangency",
                "The perpendicular from the center of a circle bisects a chord"
              ],
              "answer": 2,
              "explanation": {
                "en": "The tangent–radius theorem is exactly this statement. The inscribed-angle corollary also produces right angles, but it applies to an angle whose vertex is on the circle subtending a diameter, not to a tangent line.",
                "zh": "切线与半径垂直的定理正是这一命题。半圆所对圆周角为直角的推论虽然也产生直角，但它适用于顶点在圆上、所对为直径的角，而不是切线。"
              }
            }
          ]
        },
        {
          "id": "equations-of-circles",
          "title": "Equations of Circles",
          "titleZh": "圆的方程",
          "content": [
            {
              "type": "h2",
              "en": "From the Distance Formula to the Equation of a Circle",
              "zh": "从距离公式到圆的方程"
            },
            {
              "type": "p",
              "en": "A circle is defined by one condition: every point on it is the same distance $r$ from the center $(h, k)$. Take any point $(x, y)$ on the circle and write that condition with the distance formula: $\\sqrt{(x - h)^2 + (y - k)^2} = r$. Squaring both sides gives the standard form of the equation of a circle:",
              "zh": "圆由一个条件定义：圆上每个点到圆心 $(h, k)$ 的距离都等于 $r$。取圆上任意一点 $(x, y)$，用距离公式写出这个条件：$\\sqrt{(x - h)^2 + (y - k)^2} = r$。两边平方即得圆的标准方程："
            },
            {
              "type": "math",
              "tex": "(x - h)^2 + (y - k)^2 = r^2"
            },
            {
              "type": "p",
              "en": "Reading the equation is a matter of careful signs: the equation $(x + 4)^2 + (y - 1)^2 = 36$ has center $(-4, 1)$ — the coordinates are the values that make each squared term zero — and radius $r = \\sqrt{36} = 6$, not $36$.",
              "zh": "读方程时要小心符号：方程 $(x + 4)^2 + (y - 1)^2 = 36$ 的圆心是 $(-4, 1)$——圆心坐标是使每个平方项等于零的值——半径是 $r = \\sqrt{36} = 6$，而不是 $36$。"
            },
            {
              "type": "h3",
              "en": "Writing an Equation from Given Conditions",
              "zh": "由已知条件写出圆的方程"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Given center and radius: substitute $h$, $k$, and $r^2$ directly into standard form.",
                  "zh": "已知圆心和半径：把 $h$、$k$ 与 $r^2$ 直接代入标准方程。"
                },
                {
                  "en": "Given center and a point on the circle: compute $r^2 = (x - h)^2 + (y - k)^2$ using the point — no square root needed, since the equation uses $r^2$.",
                  "zh": "已知圆心和圆上一点：用该点计算 $r^2 = (x - h)^2 + (y - k)^2$——不必开方，因为方程中用的是 $r^2$。"
                },
                {
                  "en": "Given the endpoints of a diameter: the center is the midpoint of the diameter, and $r$ is the distance from the center to either endpoint.",
                  "zh": "已知直径的两个端点：圆心是直径的中点，半径是圆心到任一端点的距离。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Completing the Square to Find Center and Radius",
              "zh": "用配方法求圆心与半径"
            },
            {
              "type": "p",
              "en": "A circle equation often arrives in expanded general form, such as $x^2 + y^2 + Dx + Ey + F = 0$. To recover the center and radius, complete the square in $x$ and in $y$: group the $x$-terms and $y$-terms, add $\\left(\\frac{D}{2}\\right)^2$ and $\\left(\\frac{E}{2}\\right)^2$ to both sides, and rewrite each group as a perfect square. The result is standard form.",
              "zh": "圆的方程常以展开的一般形式出现，如 $x^2 + y^2 + Dx + Ey + F = 0$。要还原圆心和半径，需分别对 $x$ 和 $y$ 配方：把 $x$ 项和 $y$ 项分组，在等式两边同时加上 $\\left(\\frac{D}{2}\\right)^2$ 与 $\\left(\\frac{E}{2}\\right)^2$，再把每组写成完全平方。结果就是标准方程。"
            },
            {
              "type": "h3",
              "en": "Inside, On, or Outside?",
              "zh": "在圆内、圆上还是圆外？"
            },
            {
              "type": "p",
              "en": "To locate a point $P$ relative to a circle, compare its distance from the center with the radius — or, to avoid square roots, compare the squared distance with $r^2$. If $(x - h)^2 + (y - k)^2 < r^2$ the point is inside; if it equals $r^2$ the point is on the circle; if it is greater, the point is outside.",
              "zh": "要判断点 $P$ 与圆的位置关系，比较它到圆心的距离与半径——或者为了避免开方，比较距离的平方与 $r^2$。若 $(x - h)^2 + (y - k)^2 < r^2$，点在圆内；等于 $r^2$，点在圆上；大于 $r^2$，点在圆外。"
            },
            {
              "type": "note",
              "en": "Common mistake: the number on the right side of standard form is $r^2$, not $r$. If an answer choice shows $(x-2)^2 + (y+5)^2 = 3\\sqrt{2}$ for a circle of radius $3\\sqrt{2}$, it is wrong — the right side should be $(3\\sqrt{2})^2 = 18$. Also watch signs: $(y + 5)^2$ means $k = -5$.",
              "zh": "常见错误：标准方程右边的数是 $r^2$ 而不是 $r$。若某选项把半径为 $3\\sqrt{2}$ 的圆写成 $(x-2)^2 + (y+5)^2 = 3\\sqrt{2}$，那就是错的——右边应为 $(3\\sqrt{2})^2 = 18$。还要注意符号：$(y + 5)^2$ 意味着 $k = -5$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Writing an equation from a center and a point",
                "zh": "例题 1：由圆心和圆上一点写方程"
              },
              "problem": {
                "en": "Write the equation of the circle with center $(3, -2)$ that passes through the point $(7, 1)$.",
                "zh": "求以 $(3, -2)$ 为圆心且经过点 $(7, 1)$ 的圆的方程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The radius squared is the squared distance from the center to the given point:",
                  "zh": "半径的平方等于圆心到已知点距离的平方："
                },
                {
                  "type": "math",
                  "tex": "r^2 = (7 - 3)^2 + (1 - (-2))^2 = 4^2 + 3^2 = 25"
                },
                {
                  "type": "p",
                  "en": "Substituting $h = 3$, $k = -2$, and $r^2 = 25$ into standard form gives",
                  "zh": "把 $h = 3$、$k = -2$、$r^2 = 25$ 代入标准方程，得"
                },
                {
                  "type": "math",
                  "tex": "(x - 3)^2 + (y + 2)^2 = 25"
                },
                {
                  "type": "p",
                  "en": "Note the sign flip: center coordinate $k = -2$ produces $(y - (-2))^2 = (y + 2)^2$.",
                  "zh": "注意符号的变化：圆心坐标 $k = -2$ 产生 $(y - (-2))^2 = (y + 2)^2$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Completing the square and testing a point",
                "zh": "例题 2：配方并判断点的位置"
              },
              "problem": {
                "en": "Find the center and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$, then determine whether the origin lies inside, on, or outside the circle.",
                "zh": "求圆 $x^2 + y^2 - 6x + 4y - 12 = 0$ 的圆心和半径，并判断原点在圆内、圆上还是圆外。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Group the variables and move the constant: $(x^2 - 6x) + (y^2 + 4y) = 12$. Half of $-6$ is $-3$ and $(-3)^2 = 9$; half of $4$ is $2$ and $2^2 = 4$. Add both to each side:",
                  "zh": "将同类项分组并移走常数：$(x^2 - 6x) + (y^2 + 4y) = 12$。$-6$ 的一半是 $-3$，$(-3)^2 = 9$；$4$ 的一半是 $2$，$2^2 = 4$。两边同时加上这两个数："
                },
                {
                  "type": "math",
                  "tex": "(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4 \\;\\Rightarrow\\; (x - 3)^2 + (y + 2)^2 = 25"
                },
                {
                  "type": "p",
                  "en": "The center is $(3, -2)$ and the radius is $r = \\sqrt{25} = 5$. For the origin, the squared distance to the center is $(0 - 3)^2 + (0 - (-2))^2 = 9 + 4 = 13$. Since $13 < 25 = r^2$, the origin lies inside the circle.",
                  "zh": "圆心为 $(3, -2)$，半径 $r = \\sqrt{25} = 5$。对于原点，到圆心距离的平方为 $(0 - 3)^2 + (0 - (-2))^2 = 9 + 4 = 13$。因为 $13 < 25 = r^2$，所以原点在圆内。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What are the center and radius of the circle $(x + 4)^2 + (y - 1)^2 = 36$?",
                "zh": "圆 $(x + 4)^2 + (y - 1)^2 = 36$ 的圆心和半径分别是多少？"
              },
              "choices": [
                "Center $(-4, 1)$, radius $6$",
                "Center $(4, -1)$, radius $6$",
                "Center $(-4, 1)$, radius $36$",
                "Center $(4, -1)$, radius $36$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Standard form is $(x - h)^2 + (y - k)^2 = r^2$, so $(x + 4)^2 = (x - (-4))^2$ gives $h = -4$, and $(y - 1)^2$ gives $k = 1$. The radius is $\\sqrt{36} = 6$, not $36$ — the right side of the equation is $r^2$. The signs of the center flip from what appears in the parentheses.",
                "zh": "标准方程为 $(x - h)^2 + (y - k)^2 = r^2$，由 $(x + 4)^2 = (x - (-4))^2$ 得 $h = -4$，由 $(y - 1)^2$ 得 $k = 1$。半径是 $\\sqrt{36} = 6$ 而不是 $36$——方程右边是 $r^2$。圆心坐标的符号与括号内出现的符号相反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the radius of the circle $x^2 + y^2 = 49$? Give a whole number (units).",
                "zh": "圆 $x^2 + y^2 = 49$ 的半径是多少？请填一个整数（单位）。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "This is standard form with center $(0, 0)$ and $r^2 = 49$, so $r = \\sqrt{49} = 7$ units.",
                "zh": "这是圆心为 $(0, 0)$、$r^2 = 49$ 的标准方程，所以 $r = \\sqrt{49} = 7$（单位）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation represents the circle with center $(2, -5)$ and radius $3\\sqrt{2}$?",
                "zh": "下列哪个方程表示以 $(2, -5)$ 为圆心、半径为 $3\\sqrt{2}$ 的圆？"
              },
              "choices": [
                "$(x - 2)^2 + (y - 5)^2 = 18$",
                "$(x + 2)^2 + (y - 5)^2 = 18$",
                "$(x - 2)^2 + (y + 5)^2 = 18$",
                "$(x - 2)^2 + (y + 5)^2 = 3\\sqrt{2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "With $h = 2$ and $k = -5$, the factors are $(x - 2)^2$ and $(y - (-5))^2 = (y + 5)^2$, and $r^2 = (3\\sqrt{2})^2 = 9 \\cdot 2 = 18$. The last choice is tempting because it copies the radius directly, but the right side must be $r^2$, not $r$.",
                "zh": "由 $h = 2$、$k = -5$ 得 $(x - 2)^2$ 与 $(y - (-5))^2 = (y + 5)^2$，且 $r^2 = (3\\sqrt{2})^2 = 9 \\cdot 2 = 18$。最后一个选项之所以有迷惑性，是因为它直接照抄了半径，但方程右边必须是 $r^2$ 而不是 $r$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Complete the square to find the radius of the circle $x^2 + y^2 + 8x - 2y + 8 = 0$. Give a whole number (units).",
                "zh": "用配方法求圆 $x^2 + y^2 + 8x - 2y + 8 = 0$ 的半径。请填一个整数（单位）。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Group and complete the square: $(x^2 + 8x + 16) + (y^2 - 2y + 1) = -8 + 16 + 1$, so $(x + 4)^2 + (y - 1)^2 = 9$. The radius is $\\sqrt{9} = 3$ units, with center $(-4, 1)$.",
                "zh": "分组并配方：$(x^2 + 8x + 16) + (y^2 - 2y + 1) = -8 + 16 + 1$，即 $(x + 4)^2 + (y - 1)^2 = 9$。半径为 $\\sqrt{9} = 3$（单位），圆心为 $(-4, 1)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A circle has center $(1, 2)$ and radius $5$. Where does the point $(4, 6)$ lie relative to the circle?",
                "zh": "一个圆的圆心为 $(1, 2)$，半径为 $5$。点 $(4, 6)$ 相对于这个圆的位置是？"
              },
              "choices": [
                "Inside the circle",
                "On the circle",
                "Outside the circle",
                "It cannot be determined"
              ],
              "answer": 1,
              "explanation": {
                "en": "Compare squared distances: $(4 - 1)^2 + (6 - 2)^2 = 9 + 16 = 25$, and $r^2 = 25$. Since the squared distance equals $r^2$, the point is on the circle. Estimating the distance instead of computing it is what leads to guessing \"inside.\"",
                "zh": "比较距离的平方：$(4 - 1)^2 + (6 - 2)^2 = 9 + 16 = 25$，而 $r^2 = 25$。距离的平方等于 $r^2$，所以点在圆上。凭感觉估计距离而不计算，往往会误猜“在圆内”。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the center of the circle $x^2 + y^2 - 10x + 6y + 18 = 0$. Give your answer as coordinates in the form (h,k), e.g. (2,-3).",
                "zh": "求圆 $x^2 + y^2 - 10x + 6y + 18 = 0$ 的圆心。请以坐标形式 (h,k) 作答，例如 (2,-3)。"
              },
              "answer": "(5,-3)",
              "accept": [
                "(5, -3)",
                "5,-3",
                "5, -3"
              ],
              "explanation": {
                "en": "Complete the square: $(x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$, so $(x - 5)^2 + (y + 3)^2 = 16$. The center is $(5, -3)$ and the radius is $4$.",
                "zh": "配方：$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$，即 $(x - 5)^2 + (y + 3)^2 = 16$。圆心为 $(5, -3)$，半径为 $4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A circle has center $(3, 4)$ and passes through the origin. Which equation represents the circle?",
                "zh": "一个圆以 $(3, 4)$ 为圆心且经过原点。下列哪个方程表示这个圆？"
              },
              "choices": [
                "$(x - 3)^2 + (y - 4)^2 = 5$",
                "$(x + 3)^2 + (y + 4)^2 = 25$",
                "$x^2 + y^2 = 25$",
                "$(x - 3)^2 + (y - 4)^2 = 25$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The radius is the distance from $(3, 4)$ to $(0, 0)$: $r^2 = 3^2 + 4^2 = 25$. Standard form gives $(x - 3)^2 + (y - 4)^2 = 25$. The choice with right side $5$ uses $r$ instead of $r^2$, and $x^2 + y^2 = 25$ is a circle centered at the origin, not passing through it.",
                "zh": "半径是 $(3, 4)$ 到 $(0, 0)$ 的距离：$r^2 = 3^2 + 4^2 = 25$。标准方程为 $(x - 3)^2 + (y - 4)^2 = 25$。右边为 $5$ 的选项误用了 $r$ 而不是 $r^2$；$x^2 + y^2 = 25$ 是以原点为圆心的圆，而不是经过原点的圆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The endpoints of a diameter of a circle are $(-2, 3)$ and $(6, 3)$. Which equation represents the circle?",
                "zh": "一个圆的直径的两个端点是 $(-2, 3)$ 和 $(6, 3)$。下列哪个方程表示这个圆？"
              },
              "choices": [
                "$(x - 2)^2 + (y - 3)^2 = 64$",
                "$(x - 2)^2 + (y - 3)^2 = 16$",
                "$(x + 2)^2 + (y + 3)^2 = 16$",
                "$(x - 4)^2 + (y - 3)^2 = 16$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The center is the midpoint of the diameter: $\\left(\\frac{-2 + 6}{2}, \\frac{3 + 3}{2}\\right) = (2, 3)$. The diameter has length $|6 - (-2)| = 8$, so $r = 4$ and $r^2 = 16$. The equation is $(x - 2)^2 + (y - 3)^2 = 16$. The distractor with $64$ used the diameter squared instead of the radius squared.",
                "zh": "圆心是直径的中点：$\\left(\\frac{-2 + 6}{2}, \\frac{3 + 3}{2}\\right) = (2, 3)$。直径长为 $|6 - (-2)| = 8$，所以 $r = 4$，$r^2 = 16$。方程为 $(x - 2)^2 + (y - 3)^2 = 16$。右边为 $64$ 的干扰项误用了直径的平方而不是半径的平方。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "perimeter-and-area",
      "title": "Unit 11: Perimeter and Area",
      "titleZh": "第十一单元：周长与面积",
      "lessons": [
        {
          "id": "areas-of-polygons",
          "title": "Areas of Triangles, Quadrilaterals, and Regular Polygons",
          "titleZh": "多边形的面积",
          "content": [
            {
              "type": "h2",
              "en": "One Formula Family, Built by Cutting and Rearranging",
              "zh": "一族公式：由分割与重组而来"
            },
            {
              "type": "p",
              "en": "Area measures how many unit squares fit inside a region, so every area answer carries square units such as $\\text{cm}^2$ or $\\text{ft}^2$. The only formula we take as a starting point is the rectangle: a rectangle with base $b$ and height $h$ holds $b \\cdot h$ unit squares, so $A = bh$. Every other polygon formula in this lesson is earned by decomposition: we cut a figure into pieces and rearrange them, which never changes the total area. If you remember how each cut works, you can rebuild any formula you forget on a test.",
              "zh": "面积度量的是一个区域内能容纳多少个单位正方形，所以每个面积答案都带有平方单位，如 $\\text{cm}^2$ 或 $\\text{ft}^2$。我们唯一作为出发点的公式是矩形：底为 $b$、高为 $h$ 的矩形恰好容纳 $b \\cdot h$ 个单位正方形，即 $A = bh$。本课中其他所有多边形公式都由分割法推出：把图形剪开再重新拼合，总面积不会改变。只要记住每一步是怎么剪的，考试时忘了公式也能自己重新推出来。"
            },
            {
              "type": "h3",
              "en": "Parallelograms and Triangles",
              "zh": "平行四边形与三角形"
            },
            {
              "type": "p",
              "en": "Take a parallelogram with base $b$ and height $h$, where the height is the perpendicular distance between the base and the opposite side — not the slanted side length. Cut off the right triangle hanging past one end of the base and slide it to the other end: the pieces reassemble into a $b \\times h$ rectangle. Since nothing was gained or lost,",
              "zh": "取底为 $b$、高为 $h$ 的平行四边形，这里的高是底边与对边之间的垂直距离——不是斜着的边长。把伸出底边一端的直角三角形剪下来，平移到另一端：这些碎片恰好拼成一个 $b \\times h$ 的矩形。由于面积既没有增加也没有减少，"
            },
            {
              "type": "math",
              "tex": "A_{\\text{parallelogram}} = bh"
            },
            {
              "type": "p",
              "en": "Now take any triangle with base $b$ and height $h$. Make a copy, rotate the copy $180^\\circ$, and fit the two triangles together along a matching side: they form a parallelogram with the same base $b$ and the same height $h$. The original triangle is exactly half of that parallelogram:",
              "zh": "再取任意底为 $b$、高为 $h$ 的三角形。复制一份，把副本旋转 $180^\\circ$，沿对应边拼接：两个三角形合成一个底仍为 $b$、高仍为 $h$ 的平行四边形。原三角形恰好是这个平行四边形的一半："
            },
            {
              "type": "math",
              "tex": "A_{\\text{triangle}} = \\tfrac{1}{2}bh"
            },
            {
              "type": "h3",
              "en": "Trapezoids, Rhombi, and Kites",
              "zh": "梯形、菱形与筝形"
            },
            {
              "type": "p",
              "en": "A trapezoid has parallel bases $b_1$ and $b_2$ a distance $h$ apart. The same doubling trick works: a rotated copy fits against the original to form a parallelogram whose base is $b_1 + b_2$ and whose height is still $h$. The trapezoid is half of it:",
              "zh": "梯形有两条平行的底 $b_1$ 与 $b_2$，两底相距 $h$。同样的\"复制拼接\"技巧仍然适用：旋转后的副本与原图形拼成一个底为 $b_1 + b_2$、高仍为 $h$ 的平行四边形。梯形是它的一半："
            },
            {
              "type": "math",
              "tex": "A_{\\text{trapezoid}} = \\tfrac{1}{2}(b_1 + b_2)h"
            },
            {
              "type": "p",
              "en": "A rhombus and a kite share a key property: their diagonals are perpendicular. Draw a rhombus or kite with diagonals $d_1$ and $d_2$, then enclose it in the smallest rectangle whose sides are parallel to the diagonals. That rectangle measures $d_1 \\times d_2$, and the four corner triangles outside the figure exactly match the four triangles inside it — so the figure fills exactly half the rectangle:",
              "zh": "菱形与筝形有一个共同的关键性质：对角线互相垂直。画出对角线为 $d_1$ 与 $d_2$ 的菱形或筝形，再用边与对角线平行的最小矩形把它框起来。这个矩形的尺寸是 $d_1 \\times d_2$，而图形外的四个角上的三角形与图形内部的四个三角形一一对应全等——所以图形恰好占矩形的一半："
            },
            {
              "type": "math",
              "tex": "A_{\\text{rhombus or kite}} = \\tfrac{1}{2}d_1 d_2"
            },
            {
              "type": "h3",
              "en": "Regular Polygons and the Apothem",
              "zh": "正多边形与边心距"
            },
            {
              "type": "p",
              "en": "In a regular polygon, the apothem $a$ is the perpendicular distance from the center to a side. Connect the center to every vertex: a regular $n$-gon with side length $s$ splits into $n$ congruent triangles, each with base $s$ and height $a$. Adding them up gives $n \\cdot \\tfrac{1}{2}sa = \\tfrac{1}{2}a(ns)$, and since $ns$ is the perimeter $P$,",
              "zh": "在正多边形中，边心距 $a$ 是中心到一条边的垂直距离。把中心与每个顶点相连：边长为 $s$ 的正 $n$ 边形被分成 $n$ 个全等的三角形，每个三角形底为 $s$、高为 $a$。把它们加起来得 $n \\cdot \\tfrac{1}{2}sa = \\tfrac{1}{2}a(ns)$，而 $ns$ 正是周长 $P$，所以"
            },
            {
              "type": "math",
              "tex": "A_{\\text{regular polygon}} = \\tfrac{1}{2}aP"
            },
            {
              "type": "h3",
              "en": "Areas on the Coordinate Plane",
              "zh": "坐标平面上的面积"
            },
            {
              "type": "p",
              "en": "When a polygon's vertices are given as coordinates, first look for a horizontal or vertical side to use as the base — its length is just a difference of coordinates. If every side is slanted, use the box method: enclose the polygon in the smallest rectangle with horizontal and vertical sides, then subtract the right triangles (and rectangles) in the corners. Each corner triangle has horizontal and vertical legs you can read straight from the coordinates.",
              "zh": "当多边形的顶点以坐标给出时，先寻找水平或竖直的边作为底——它的长度就是坐标之差。如果每条边都是斜的，就用\"框盒法\"：用边为水平和竖直方向的最小矩形把多边形框起来，再减去四角的直角三角形（和矩形）。每个角上直角三角形的两条直角边都是水平和竖直的，长度可直接从坐标读出。"
            },
            {
              "type": "h3",
              "en": "How Scaling Changes Perimeter and Area",
              "zh": "缩放如何改变周长与面积"
            },
            {
              "type": "p",
              "en": "If a figure is enlarged by scale factor $k$, every length — sides, heights, diagonals, apothems — is multiplied by $k$, so the perimeter is multiplied by $k$. But area involves two lengths multiplied together (a base and a height), so the area is multiplied by $k^2$. For example, tripling every side ($k = 3$) triples the perimeter but multiplies the area by $9$. Ratios work the same way: if the ratio of corresponding sides of similar figures is $3:5$, the ratio of perimeters is $3:5$ and the ratio of areas is $9:25$.",
              "zh": "若图形按比例因子 $k$ 放大，则每一条长度——边、高、对角线、边心距——都乘以 $k$，因此周长乘以 $k$。但面积是两条长度的乘积（底乘高），所以面积乘以 $k^2$。例如把每条边放大到三倍（$k = 3$），周长变为三倍，而面积变为 $9$ 倍。比值同理：若相似图形对应边之比为 $3:5$，则周长之比为 $3:5$，面积之比为 $9:25$。"
            },
            {
              "type": "note",
              "en": "Common mistake: using a slanted side as the height. In $A = bh$ and $A = \\tfrac{1}{2}bh$, the height must be perpendicular to the base. Also, $A = \\tfrac{1}{2}d_1 d_2$ is only valid when the diagonals are perpendicular (rhombus, kite, square) — it fails for a general parallelogram.",
              "zh": "常见错误：把斜边当成高。在 $A = bh$ 和 $A = \\tfrac{1}{2}bh$ 中，高必须与底垂直。另外，$A = \\tfrac{1}{2}d_1 d_2$ 只在对角线互相垂直时成立（菱形、筝形、正方形）——对一般的平行四边形并不适用。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Box method on the coordinate plane",
                "zh": "例题 1：坐标平面上的框盒法"
              },
              "problem": {
                "en": "Find the area of the triangle with vertices $A(1, 1)$, $B(6, 3)$, and $C(2, 5)$.",
                "zh": "求顶点为 $A(1, 1)$、$B(6, 3)$、$C(2, 5)$ 的三角形的面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "No side is horizontal or vertical, so enclose the triangle in the rectangle with corners $(1,1)$, $(6,1)$, $(6,5)$, $(1,5)$. Its area is $5 \\times 4 = 20$. Now subtract the three right triangles between the box and $\\triangle ABC$: the one under $\\overline{AB}$ has legs $5$ and $2$ (area $5$); the one right of $\\overline{BC}$ has legs $2$ and $4$ (area $4$); the one left of $\\overline{CA}$ has legs $1$ and $4$ (area $2$).",
                  "zh": "没有一条边是水平或竖直的，所以用顶点为 $(1,1)$、$(6,1)$、$(6,5)$、$(1,5)$ 的矩形把三角形框起来，矩形面积为 $5 \\times 4 = 20$。再减去矩形与 $\\triangle ABC$ 之间的三个直角三角形：$\\overline{AB}$ 下方的直角边为 $5$ 和 $2$（面积 $5$）；$\\overline{BC}$ 右侧的直角边为 $2$ 和 $4$（面积 $4$）；$\\overline{CA}$ 左侧的直角边为 $1$ 和 $4$（面积 $2$）。"
                },
                {
                  "type": "math",
                  "tex": "A = 20 - 5 - 4 - 2 = 9 \\text{ square units}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Regular hexagon via the apothem",
                "zh": "例题 2：用边心距求正六边形面积"
              },
              "problem": {
                "en": "Find the exact area of a regular hexagon with side length $10$ cm, then round to the nearest tenth.",
                "zh": "求边长为 $10$ cm 的正六边形的面积，先给出精确值，再四舍五入到十分位。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Connecting the center to the vertices splits the hexagon into $6$ equilateral triangles of side $10$. The apothem is the height of one of these triangles. Dropping that height creates a $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$ triangle with shorter leg $5$, so the apothem is $a = 5\\sqrt{3}$ cm. The perimeter is $P = 6(10) = 60$ cm.",
                  "zh": "把中心与各顶点相连，正六边形被分成 $6$ 个边长为 $10$ 的等边三角形。边心距就是其中一个三角形的高。作这条高得到一个 $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$ 三角形，短直角边为 $5$，所以边心距 $a = 5\\sqrt{3}$ cm。周长为 $P = 6(10) = 60$ cm。"
                },
                {
                  "type": "math",
                  "tex": "A = \\tfrac{1}{2}aP = \\tfrac{1}{2}(5\\sqrt{3})(60) = 150\\sqrt{3} \\approx 259.8 \\text{ cm}^2"
                },
                {
                  "type": "p",
                  "en": "Keep $150\\sqrt{3}$ as the exact answer; round only at the final step.",
                  "zh": "精确答案保留为 $150\\sqrt{3}$；只在最后一步才四舍五入。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A parallelogram has base $12$ cm, slant side $7$ cm, and height $5$ cm drawn to the base. What is its area?",
                "zh": "一个平行四边形的底为 $12$ cm，斜边为 $7$ cm，作到底边的高为 $5$ cm。它的面积是多少？"
              },
              "choices": [
                "$84 \\text{ cm}^2$",
                "$60 \\text{ cm}^2$",
                "$35 \\text{ cm}^2$",
                "$34 \\text{ cm}^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Area uses the perpendicular height, not the slant side: $A = bh = 12 \\cdot 5 = 60 \\text{ cm}^2$. Choosing $84$ comes from the tempting mistake of multiplying the two given side lengths $12 \\cdot 7$.",
                "zh": "面积用的是垂直的高而不是斜边：$A = bh = 12 \\cdot 5 = 60 \\text{ cm}^2$。选 $84$ 是因为误把两条边长相乘 $12 \\cdot 7$，这是最常见的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the area of the triangle with vertices $(1, 2)$, $(7, 2)$, and $(4, 8)$. Give a whole number of square units.",
                "zh": "求顶点为 $(1, 2)$、$(7, 2)$、$(4, 8)$ 的三角形的面积。请填一个整数（平方单位）。"
              },
              "answer": "18",
              "accept": [
                "18.0"
              ],
              "explanation": {
                "en": "The side from $(1,2)$ to $(7,2)$ is horizontal with length $6$, so use it as the base. The height is the vertical distance from $y = 2$ up to the vertex $(4, 8)$, which is $6$. Then $A = \\tfrac{1}{2}(6)(6) = 18$.",
                "zh": "从 $(1,2)$ 到 $(7,2)$ 的边是水平的，长为 $6$，取它作底。高是从 $y = 2$ 到顶点 $(4, 8)$ 的竖直距离，即 $6$。于是 $A = \\tfrac{1}{2}(6)(6) = 18$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rhombus has diagonals of length $10$ in and $24$ in. What is its area?",
                "zh": "一个菱形的两条对角线长分别为 $10$ 英寸和 $24$ 英寸。它的面积是多少？"
              },
              "choices": [
                "$240 \\text{ in}^2$",
                "$130 \\text{ in}^2$",
                "$120 \\text{ in}^2$",
                "$60 \\text{ in}^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The diagonals of a rhombus are perpendicular, so $A = \\tfrac{1}{2}d_1 d_2 = \\tfrac{1}{2}(10)(24) = 120 \\text{ in}^2$. The distractor $240$ is the area of the enclosing rectangle $d_1 \\times d_2$ — forgetting the factor of $\\tfrac{1}{2}$.",
                "zh": "菱形的对角线互相垂直，所以 $A = \\tfrac{1}{2}d_1 d_2 = \\tfrac{1}{2}(10)(24) = 120 \\text{ in}^2$。干扰项 $240$ 是外接矩形 $d_1 \\times d_2$ 的面积——漏掉了系数 $\\tfrac{1}{2}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A trapezoid has parallel bases of $8$ m and $14$ m, and the distance between the bases is $6$ m. Find its area. Give a whole number of square meters.",
                "zh": "一个梯形的两条平行底边长为 $8$ m 和 $14$ m，两底之间的距离为 $6$ m。求它的面积。请填一个整数（平方米）。"
              },
              "answer": "66",
              "accept": [
                "66.0"
              ],
              "explanation": {
                "en": "Average the bases, then multiply by the height: $A = \\tfrac{1}{2}(8 + 14)(6) = \\tfrac{1}{2}(22)(6) = 66 \\text{ m}^2$. A common slip is forgetting to add the bases before halving.",
                "zh": "先取两底的平均值，再乘以高：$A = \\tfrac{1}{2}(8 + 14)(6) = \\tfrac{1}{2}(22)(6) = 66 \\text{ m}^2$。常见失误是没有先把两底相加就取一半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A regular pentagon has perimeter $40$ cm and apothem $5.5$ cm. What is its area?",
                "zh": "一个正五边形的周长为 $40$ cm，边心距为 $5.5$ cm。它的面积是多少？"
              },
              "choices": [
                "$110 \\text{ cm}^2$",
                "$220 \\text{ cm}^2$",
                "$44 \\text{ cm}^2$",
                "$100 \\text{ cm}^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$A = \\tfrac{1}{2}aP = \\tfrac{1}{2}(5.5)(40) = 110 \\text{ cm}^2$. The distractor $220$ comes from computing $aP$ without the $\\tfrac{1}{2}$ — remember the formula comes from adding up triangles, each contributing $\\tfrac{1}{2}sa$.",
                "zh": "$A = \\tfrac{1}{2}aP = \\tfrac{1}{2}(5.5)(40) = 110 \\text{ cm}^2$。干扰项 $220$ 是只算了 $aP$ 而漏掉 $\\tfrac{1}{2}$——记住这个公式来自把若干三角形相加，每个三角形贡献 $\\tfrac{1}{2}sa$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A polygon is enlarged by scale factor $3$. Its area is multiplied by:",
                "zh": "把一个多边形按比例因子 $3$ 放大，它的面积变为原来的多少倍？"
              },
              "choices": [
                "$27$",
                "$3$",
                "$6$",
                "$9$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Area is a product of two lengths (base times height), and each length triples, so the area is multiplied by $3^2 = 9$. Answering $3$ confuses area with perimeter, which does scale by $k$; $27 = 3^3$ would be the volume factor for a solid.",
                "zh": "面积是两条长度的乘积（底乘高），每条长度都变为三倍，所以面积变为 $3^2 = 9$ 倍。答 $3$ 是把面积和周长混淆了——周长才按 $k$ 倍缩放；$27 = 3^3$ 则是立体图形体积的倍数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two similar triangles have perimeters $15$ ft and $25$ ft. What is the ratio of their areas (smaller to larger)?",
                "zh": "两个相似三角形的周长分别为 $15$ ft 和 $25$ ft。它们面积之比（小比大）是多少？"
              },
              "choices": [
                "$3:5$",
                "$9:25$",
                "$6:10$",
                "$9:15$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The perimeter ratio equals the side ratio: $15:25 = 3:5$, so $k = \\tfrac{3}{5}$. Areas scale by $k^2$, giving $9:25$. The distractor $3:5$ is the perimeter ratio itself — perimeters scale by $k$, but areas scale by $k^2$.",
                "zh": "周长之比等于对应边之比：$15:25 = 3:5$，即 $k = \\tfrac{3}{5}$。面积按 $k^2$ 缩放，得 $9:25$。干扰项 $3:5$ 是周长之比——周长按 $k$ 缩放，而面积按 $k^2$ 缩放。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A kite-shaped sail has perpendicular diagonals measuring $3$ m and $4.5$ m. How many square meters of fabric does the sail use? Give a decimal.",
                "zh": "一面筝形的帆，其互相垂直的对角线长为 $3$ m 和 $4.5$ m。这面帆需要多少平方米的布料？请填一个小数。"
              },
              "answer": "6.75",
              "accept": [
                "6.750",
                "27/4"
              ],
              "explanation": {
                "en": "A kite's area is half the product of its diagonals: $A = \\tfrac{1}{2}(3)(4.5) = 6.75 \\text{ m}^2$. This works because the diagonals are perpendicular, so the kite fills exactly half of its $3 \\times 4.5$ enclosing rectangle.",
                "zh": "筝形的面积是对角线乘积的一半：$A = \\tfrac{1}{2}(3)(4.5) = 6.75 \\text{ m}^2$。这个公式成立是因为对角线互相垂直，筝形恰好占其 $3 \\times 4.5$ 外接矩形的一半。"
              }
            }
          ]
        },
        {
          "id": "circles-arc-length-sectors",
          "title": "Circumference, Arc Length, and Sector Area",
          "titleZh": "圆的周长、弧长与扇形面积",
          "content": [
            {
              "type": "h2",
              "en": "From Circumference to Slices of a Circle",
              "zh": "从圆的周长到圆的\"切片\""
            },
            {
              "type": "p",
              "en": "All circles are similar — any circle is a scaled copy of any other. Because scaling multiplies every length by the same factor, the ratio of a circle's circumference $C$ to its diameter $d$ is the same number for every circle. That constant ratio is what we call $\\pi$, an irrational number approximately equal to $3.14159$. This single fact gives us the circumference formula:",
              "zh": "所有的圆都是相似的——任何一个圆都是另一个圆按比例缩放的复制品。由于缩放会把每条长度乘以同一个因子，圆的周长 $C$ 与直径 $d$ 之比对每个圆都是同一个数。这个常数比值就是 $\\pi$，一个约等于 $3.14159$ 的无理数。仅凭这一个事实就得到周长公式："
            },
            {
              "type": "math",
              "tex": "C = \\pi d = 2\\pi r"
            },
            {
              "type": "p",
              "en": "An answer left in terms of $\\pi$, such as $12\\pi$ cm, is exact. A decimal such as $37.70$ cm is an approximation. Keep $\\pi$ in your work until the final step, and round only when the problem asks you to.",
              "zh": "保留 $\\pi$ 的答案（如 $12\\pi$ cm）是精确值；小数（如 $37.70$ cm）只是近似值。计算过程中一直保留 $\\pi$，只有当题目要求时才在最后一步四舍五入。"
            },
            {
              "type": "h3",
              "en": "Arc Length",
              "zh": "弧长"
            },
            {
              "type": "p",
              "en": "A central angle of $\\theta$ degrees cuts off an arc. Be careful to distinguish two different measurements: the arc measure is $\\theta$ itself, in degrees, while the arc length is a distance in linear units. Since the arc is the fraction $\\frac{\\theta}{360^\\circ}$ of the whole circle, its length is that same fraction of the circumference:",
              "zh": "度数为 $\\theta$ 的圆心角截出一段弧。注意区分两个不同的量：弧的度数就是 $\\theta$（以度为单位），而弧长是以长度单位度量的距离。由于这段弧占整个圆的 $\\frac{\\theta}{360^\\circ}$，它的长度就是周长的同样比例："
            },
            {
              "type": "math",
              "tex": "\\ell = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r"
            },
            {
              "type": "h3",
              "en": "Sector Area",
              "zh": "扇形面积"
            },
            {
              "type": "p",
              "en": "A sector is the pizza-slice region bounded by two radii and the arc between them. The same fraction idea applies: a sector with central angle $\\theta$ takes up $\\frac{\\theta}{360^\\circ}$ of the circle's area $\\pi r^2$:",
              "zh": "扇形是由两条半径及其间的弧围成的\"比萨饼切片\"区域。同样的比例思想仍然适用：圆心角为 $\\theta$ 的扇形占整个圆面积 $\\pi r^2$ 的 $\\frac{\\theta}{360^\\circ}$："
            },
            {
              "type": "math",
              "tex": "A_{\\text{sector}} = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2"
            },
            {
              "type": "h3",
              "en": "Segments of a Circle (Honors)",
              "zh": "弓形（荣誉级）"
            },
            {
              "type": "p",
              "en": "A chord cuts a circle into two regions called segments. To find the area of the smaller segment, start with the sector whose two radii go to the chord's endpoints, then subtract the isosceles triangle formed by those radii and the chord:",
              "zh": "一条弦把圆分成两个区域，称为弓形。要求较小弓形的面积，先取以弦的两个端点为半径端点的扇形，再减去由这两条半径与弦围成的等腰三角形："
            },
            {
              "type": "math",
              "tex": "A_{\\text{segment}} = A_{\\text{sector}} - A_{\\text{triangle}}"
            },
            {
              "type": "h3",
              "en": "Composite Figures and Exact Answers",
              "zh": "组合图形与精确答案"
            },
            {
              "type": "p",
              "en": "Many real shapes combine polygons with parts of circles — a rectangle with a semicircular end, a square with a quarter-circle removed. The strategy is always the same: split the figure into pieces whose areas you know, then add or subtract.",
              "zh": "许多实际图形是多边形与圆的一部分的组合——一端为半圆的矩形、被挖去四分之一圆的正方形。策略始终相同：把图形拆成你会求面积的几部分，然后相加或相减。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A semicircle is $\\frac{1}{2}\\pi r^2$; a quarter circle is $\\frac{1}{4}\\pi r^2$.",
                  "zh": "半圆的面积是 $\\frac{1}{2}\\pi r^2$；四分之一圆是 $\\frac{1}{4}\\pi r^2$。"
                },
                {
                  "en": "Keep every piece in terms of $\\pi$ and combine at the end, e.g. $40 + 2\\pi$.",
                  "zh": "每一部分都保留 $\\pi$，最后再合并，例如 $40 + 2\\pi$。"
                },
                {
                  "en": "Check whether the circle part is added to the polygon or cut out of it.",
                  "zh": "判断清楚圆的部分是加在多边形上，还是从多边形中挖去。"
                },
                {
                  "en": "State units: linear units for arc length and perimeter, square units for area.",
                  "zh": "写明单位：弧长与周长用长度单位，面积用平方单位。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: confusing arc measure with arc length. A $90^\\circ$ arc in a tiny circle and a $90^\\circ$ arc in a huge circle have the same measure but very different lengths. Also double-check whether a problem gives the radius or the diameter — using $d$ where $r$ belongs quadruples a sector area.",
              "zh": "常见错误：把弧的度数和弧长混为一谈。小圆中的 $90^\\circ$ 弧与大圆中的 $90^\\circ$ 弧度数相同，长度却大不相同。另外要看清题目给的是半径还是直径——把 $d$ 当作 $r$ 代入会使扇形面积变成原来的四倍。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Arc length and sector area",
                "zh": "例题 1：弧长与扇形面积"
              },
              "problem": {
                "en": "A circle has radius $9$ cm. A central angle of $120^\\circ$ cuts off an arc and a sector. Find the arc length and the sector area, exactly and rounded to the nearest hundredth.",
                "zh": "一个圆的半径为 $9$ cm，一个 $120^\\circ$ 的圆心角截出一段弧和一个扇形。求弧长与扇形面积，先给出精确值，再四舍五入到百分位。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The fraction of the circle is $\\frac{120}{360} = \\frac{1}{3}$. Apply it to the circumference and to the area:",
                  "zh": "该弧占整个圆的 $\\frac{120}{360} = \\frac{1}{3}$。把这个比例分别用于周长和面积："
                },
                {
                  "type": "math",
                  "tex": "\\ell = \\tfrac{1}{3} \\cdot 2\\pi(9) = 6\\pi \\approx 18.85 \\text{ cm}"
                },
                {
                  "type": "math",
                  "tex": "A = \\tfrac{1}{3} \\cdot \\pi (9)^2 = 27\\pi \\approx 84.82 \\text{ cm}^2"
                },
                {
                  "type": "p",
                  "en": "Note the units: the arc length is in cm, but the sector area is in $\\text{cm}^2$.",
                  "zh": "注意单位：弧长的单位是 cm，而扇形面积的单位是 $\\text{cm}^2$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Area of a segment",
                "zh": "例题 2：弓形的面积"
              },
              "problem": {
                "en": "In a circle of radius $6$ in, chord $\\overline{AB}$ subtends a central angle of $60^\\circ$. Find the exact area of the smaller segment cut off by $\\overline{AB}$, then round to the nearest hundredth.",
                "zh": "在半径为 $6$ 英寸的圆中，弦 $\\overline{AB}$ 所对的圆心角为 $60^\\circ$。求弦 $\\overline{AB}$ 截出的较小弓形的面积，先给出精确值，再四舍五入到百分位。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1 — the sector: $A_{\\text{sector}} = \\frac{60}{360}\\pi(6)^2 = \\frac{1}{6}(36\\pi) = 6\\pi$. Step 2 — the triangle: the two radii $OA$ and $OB$ each have length $6$ and the angle between them is $60^\\circ$, so $\\triangle OAB$ is equilateral with side $6$. Its height is $3\\sqrt{3}$, so its area is $\\tfrac{1}{2}(6)(3\\sqrt{3}) = 9\\sqrt{3}$.",
                  "zh": "第一步——扇形：$A_{\\text{sector}} = \\frac{60}{360}\\pi(6)^2 = \\frac{1}{6}(36\\pi) = 6\\pi$。第二步——三角形：两条半径 $OA$、$OB$ 的长都是 $6$，夹角为 $60^\\circ$，所以 $\\triangle OAB$ 是边长为 $6$ 的等边三角形，高为 $3\\sqrt{3}$，面积为 $\\tfrac{1}{2}(6)(3\\sqrt{3}) = 9\\sqrt{3}$。"
                },
                {
                  "type": "math",
                  "tex": "A_{\\text{segment}} = 6\\pi - 9\\sqrt{3} \\approx 18.85 - 15.59 = 3.26 \\text{ in}^2"
                },
                {
                  "type": "p",
                  "en": "The subtraction structure — sector minus triangle — is the whole idea; the only work is finding the triangle's area.",
                  "zh": "\"扇形减三角形\"这个结构就是全部思路；真正要动手算的只有三角形的面积。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the exact circumference of a circle with radius $7$ m?",
                "zh": "半径为 $7$ m 的圆的周长的精确值是多少？"
              },
              "choices": [
                "$7\\pi \\text{ m}$",
                "$14\\pi \\text{ m}$",
                "$49\\pi \\text{ m}$",
                "$28\\pi \\text{ m}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$C = 2\\pi r = 2\\pi(7) = 14\\pi$ m. The distractor $49\\pi$ is $\\pi r^2$, the area — a very common mix-up. Circumference is a length, so its units are meters, not square meters.",
                "zh": "$C = 2\\pi r = 2\\pi(7) = 14\\pi$ m。干扰项 $49\\pi$ 是 $\\pi r^2$，即面积——这是非常常见的混淆。周长是长度，单位是米而不是平方米。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A circle has radius $8$ cm. The arc cut off by a $45^\\circ$ central angle has length $k\\pi$ cm. Find $k$. Give a whole number.",
                "zh": "一个圆的半径为 $8$ cm，$45^\\circ$ 圆心角所截的弧长为 $k\\pi$ cm。求 $k$。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "The arc is $\\frac{45}{360} = \\frac{1}{8}$ of the circle, so $\\ell = \\frac{1}{8} \\cdot 2\\pi(8) = 2\\pi$ cm, giving $k = 2$. Working with the fraction first keeps the arithmetic clean.",
                "zh": "这段弧占整个圆的 $\\frac{45}{360} = \\frac{1}{8}$，所以 $\\ell = \\frac{1}{8} \\cdot 2\\pi(8) = 2\\pi$ cm，即 $k = 2$。先化简比例再计算能让运算更简洁。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the exact area of a sector with central angle $120^\\circ$ in a circle of radius $6$ ft?",
                "zh": "半径为 $6$ ft 的圆中，圆心角为 $120^\\circ$ 的扇形面积的精确值是多少？"
              },
              "choices": [
                "$6\\pi \\text{ ft}^2$",
                "$24\\pi \\text{ ft}^2$",
                "$12\\pi \\text{ ft}^2$",
                "$36\\pi \\text{ ft}^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The sector is $\\frac{120}{360} = \\frac{1}{3}$ of the circle: $A = \\frac{1}{3}\\pi(6)^2 = 12\\pi \\text{ ft}^2$. The distractor $36\\pi$ is the whole circle's area — forgetting to take the fraction; $6\\pi$ mixes up arc length ($\\frac{1}{3} \\cdot 12\\pi$ wait, that is $4\\pi$) — it comes from using $\\frac{1}{2}r^2$ style shortcuts incorrectly.",
                "zh": "扇形占整个圆的 $\\frac{120}{360} = \\frac{1}{3}$：$A = \\frac{1}{3}\\pi(6)^2 = 12\\pi \\text{ ft}^2$。干扰项 $36\\pi$ 是整个圆的面积——忘了乘比例；$6\\pi$ 则是把公式记错所致。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a circle of radius $10$ in, a sector has area $30\\pi \\text{ in}^2$. Find the measure of its central angle in degrees. Give a whole number.",
                "zh": "半径为 $10$ 英寸的圆中，一个扇形的面积为 $30\\pi \\text{ in}^2$。求它的圆心角的度数。请填一个整数。"
              },
              "answer": "108",
              "explanation": {
                "en": "The whole circle has area $\\pi(10)^2 = 100\\pi$, so the sector is $\\frac{30\\pi}{100\\pi} = \\frac{3}{10}$ of the circle. The central angle is $\\frac{3}{10} \\cdot 360^\\circ = 108^\\circ$.",
                "zh": "整个圆的面积为 $\\pi(10)^2 = 100\\pi$，所以扇形占整个圆的 $\\frac{30\\pi}{100\\pi} = \\frac{3}{10}$。圆心角为 $\\frac{3}{10} \\cdot 360^\\circ = 108^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a circle of radius $4$ cm, a chord subtends a central angle of $90^\\circ$. What is the exact area of the smaller segment cut off by the chord?",
                "zh": "在半径为 $4$ cm 的圆中，一条弦所对的圆心角为 $90^\\circ$。这条弦截出的较小弓形的面积的精确值是多少？"
              },
              "choices": [
                "$(4\\pi - 8) \\text{ cm}^2$",
                "$4\\pi \\text{ cm}^2$",
                "$(16\\pi - 8) \\text{ cm}^2$",
                "$(2\\pi - 4) \\text{ cm}^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Sector: $\\frac{90}{360}\\pi(4)^2 = 4\\pi$. Triangle: the two radii are perpendicular legs of length $4$, so its area is $\\tfrac{1}{2}(4)(4) = 8$. Segment $= 4\\pi - 8$. The distractor $4\\pi$ is the sector alone — forgetting to subtract the triangle.",
                "zh": "扇形：$\\frac{90}{360}\\pi(4)^2 = 4\\pi$。三角形：两条半径是互相垂直、长为 $4$ 的直角边，面积为 $\\tfrac{1}{2}(4)(4) = 8$。弓形 $= 4\\pi - 8$。干扰项 $4\\pi$ 只是扇形——忘了减去三角形。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A figure consists of a $10$ ft by $4$ ft rectangle with a semicircle attached to one $4$ ft end (the semicircle's diameter is that end). What is the exact total area?",
                "zh": "一个图形由 $10$ ft $\\times$ $4$ ft 的矩形和贴在一条 $4$ ft 短边上的半圆组成（半圆的直径就是这条短边）。总面积的精确值是多少？"
              },
              "choices": [
                "$(40 + 4\\pi) \\text{ ft}^2$",
                "$44\\pi \\text{ ft}^2$",
                "$(40 + 8\\pi) \\text{ ft}^2$",
                "$(40 + 2\\pi) \\text{ ft}^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Rectangle: $10 \\cdot 4 = 40$. The semicircle's diameter is $4$, so its radius is $2$ and its area is $\\tfrac{1}{2}\\pi(2)^2 = 2\\pi$. Total: $40 + 2\\pi \\text{ ft}^2$. The distractor $40 + 8\\pi$ comes from using $r = 4$ (the diameter) instead of $r = 2$.",
                "zh": "矩形：$10 \\cdot 4 = 40$。半圆的直径是 $4$，所以半径是 $2$，面积为 $\\tfrac{1}{2}\\pi(2)^2 = 2\\pi$。总面积：$40 + 2\\pi \\text{ ft}^2$。干扰项 $40 + 8\\pi$ 是把直径 $4$ 当成半径代入所致。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A lawn sprinkler waters a sector of radius $15$ ft as it sweeps through $240^\\circ$. The watered area is $k\\pi \\text{ ft}^2$. Find $k$. Give a whole number.",
                "zh": "一个草坪喷灌器旋转 $240^\\circ$，浇灌出一个半径为 $15$ ft 的扇形区域。被浇灌的面积为 $k\\pi \\text{ ft}^2$。求 $k$。请填一个整数。"
              },
              "answer": "150",
              "explanation": {
                "en": "The sector is $\\frac{240}{360} = \\frac{2}{3}$ of the circle, so the area is $\\frac{2}{3}\\pi(15)^2 = \\frac{2}{3}(225\\pi) = 150\\pi \\text{ ft}^2$, giving $k = 150$.",
                "zh": "该扇形占整个圆的 $\\frac{240}{360} = \\frac{2}{3}$，所以面积为 $\\frac{2}{3}\\pi(15)^2 = \\frac{2}{3}(225\\pi) = 150\\pi \\text{ ft}^2$，即 $k = 150$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "surface-area-volume",
      "title": "Unit 12: Surface Area and Volume",
      "titleZh": "第十二单元：表面积与体积",
      "lessons": [
        {
          "id": "prisms-cylinders-pyramids-cones",
          "title": "Surface Area and Volume of Prisms, Cylinders, Pyramids, and Cones",
          "titleZh": "棱柱、圆柱、棱锥与圆锥的表面积和体积",
          "content": [
            {
              "type": "h2",
              "en": "Measuring Solid Figures",
              "zh": "立体图形的度量"
            },
            {
              "type": "p",
              "en": "A solid figure has two basic measurements: surface area, the total area of all the surfaces that wrap around it (measured in square units), and volume, the amount of space it fills (measured in cubic units). This lesson covers the four most common families of solids. A prism has two congruent parallel bases joined by rectangles; a cylinder is its round cousin with two circular bases. A pyramid has one polygonal base and triangular faces that meet at an apex; a cone is its round cousin with one circular base. In every formula below, $B$ stands for the area of a base, $h$ for the height (the perpendicular distance between the bases, or from the apex straight down to the base), and $P$ for the perimeter of a base.",
              "zh": "一个立体图形有两个基本度量：表面积，即包裹它的所有表面的总面积（用平方单位度量）；体积，即它占据的空间大小（用立方单位度量）。本课讲解四类最常见的立体。棱柱有两个全等且平行的底面，由矩形侧面连接；圆柱是它的\"圆形亲戚\"，有两个圆形底面。棱锥只有一个多边形底面，三角形侧面汇聚于一个顶点；圆锥是它的\"圆形亲戚\"，底面是一个圆。在下面所有公式中，$B$ 表示底面积，$h$ 表示高（两底面之间的垂直距离，或从顶点垂直落到底面的距离），$P$ 表示底面周长。"
            },
            {
              "type": "h3",
              "en": "Nets and Surface Area",
              "zh": "展开图与表面积"
            },
            {
              "type": "p",
              "en": "A net is the pattern you get by unfolding a solid flat, and it is the safest way to compute surface area: the surface area is just the total area of the net. It helps to split the surface into the lateral area $L$ (the sides that wrap around) and the base areas. When a cylinder is unrolled, its lateral surface becomes a rectangle whose width is the height $h$ and whose length is the circumference $2\\pi r$. When a cone or pyramid is unfolded, the lateral faces are measured with the slant height $\\ell$ — the distance along the surface from the apex to the edge of the base.",
              "zh": "展开图是把立体沿棱剪开摊平后得到的平面图形，它是计算表面积最稳妥的方法：表面积就是展开图的总面积。把表面拆成侧面积 $L$（环绕四周的侧面）与底面积之和会很方便。把圆柱的侧面展开，得到一个矩形，宽是高 $h$，长是底面周长 $2\\pi r$。把圆锥或棱锥展开时，侧面要用斜高 $\\ell$ 来度量——即沿表面从顶点到底面边缘的距离。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Prism: $L = Ph$, so $S = Ph + 2B$.",
                  "zh": "棱柱：$L = Ph$，所以 $S = Ph + 2B$。"
                },
                {
                  "en": "Cylinder: $L = 2\\pi r h$, so $S = 2\\pi r h + 2\\pi r^2$.",
                  "zh": "圆柱：$L = 2\\pi r h$，所以 $S = 2\\pi r h + 2\\pi r^2$。"
                },
                {
                  "en": "Regular pyramid: $L = \\frac{1}{2} P \\ell$, so $S = \\frac{1}{2} P \\ell + B$.",
                  "zh": "正棱锥：$L = \\frac{1}{2} P \\ell$，所以 $S = \\frac{1}{2} P \\ell + B$。"
                },
                {
                  "en": "Cone: $L = \\pi r \\ell$, so $S = \\pi r \\ell + \\pi r^2$.",
                  "zh": "圆锥：$L = \\pi r \\ell$，所以 $S = \\pi r \\ell + \\pi r^2$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Slant Height vs. Height",
              "zh": "斜高与高的区别"
            },
            {
              "type": "p",
              "en": "The height $h$ rises straight up from the center of the base to the apex; the slant height $\\ell$ runs along the outside surface. Inside a cone, the height, the radius, and the slant height form a right triangle, so the Pythagorean Theorem connects them:",
              "zh": "高 $h$ 从底面中心垂直上升到顶点；斜高 $\\ell$ 沿着外表面延伸。在圆锥内部，高、半径和斜高构成一个直角三角形，因此可以用勾股定理把它们联系起来："
            },
            {
              "type": "math",
              "tex": "\\ell^2 = r^2 + h^2"
            },
            {
              "type": "p",
              "en": "For a regular square pyramid the same idea works: the right triangle has legs $h$ and $\\frac{s}{2}$ (half the base edge), and hypotenuse $\\ell$, so $\\ell^2 = h^2 + \\left(\\frac{s}{2}\\right)^2$. Volume formulas always use $h$; lateral-area formulas always use $\\ell$.",
              "zh": "对正四棱锥同样适用：直角三角形的两条直角边是 $h$ 和 $\\frac{s}{2}$（底边长的一半），斜边是 $\\ell$，所以 $\\ell^2 = h^2 + \\left(\\frac{s}{2}\\right)^2$。体积公式永远用 $h$；侧面积公式永远用 $\\ell$。"
            },
            {
              "type": "h3",
              "en": "Volume: $Bh$ and the One-Third Rule",
              "zh": "体积：$Bh$ 与三分之一法则"
            },
            {
              "type": "p",
              "en": "A prism or cylinder is like a stack of identical copies of its base, so its volume is base area times height:",
              "zh": "棱柱或圆柱就像把底面一层层完全相同地摞起来，所以体积等于底面积乘以高："
            },
            {
              "type": "math",
              "tex": "V_{\\text{prism/cylinder}} = Bh \\qquad V_{\\text{cylinder}} = \\pi r^2 h"
            },
            {
              "type": "p",
              "en": "A pyramid or cone with the same base and height tapers to a point, so it holds less — exactly one third as much. You can see this two ways: three congruent pyramids can be assembled into a cube-like prism, and if you fill a cone with water and pour it into a cylinder with the same base and height, it takes exactly three pours to fill the cylinder.",
              "zh": "与之同底等高的棱锥或圆锥向一点收缩，所以容积更小——恰好是三分之一。可以从两个角度理解：三个全等的棱锥可以拼成一个棱柱；如果把圆锥装满水倒进同底等高的圆柱里，恰好倒三次才能装满圆柱。"
            },
            {
              "type": "math",
              "tex": "V_{\\text{pyramid/cone}} = \\frac{1}{3}Bh \\qquad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h"
            },
            {
              "type": "p",
              "en": "For a composite solid — a shape built from two or more basic solids — add the volumes of the pieces (or subtract, if one piece is hollowed out). For surface area, only count the surfaces actually exposed on the outside: where two pieces are glued together, neither glued face is part of the surface.",
              "zh": "对于组合体——由两个或多个基本立体拼成的图形——把各部分的体积相加（若某部分被挖空则相减）。计算表面积时，只统计真正暴露在外的表面：两部分粘合处的面不属于表面积。"
            },
            {
              "type": "note",
              "en": "Common mistake: plugging the slant height into a volume formula, or the height into a lateral-area formula. Before computing, ask: does this length go straight up through the inside ($h$, for volume) or along the outside surface ($\\ell$, for lateral area)? If a problem gives you only one of them, expect to use $\\ell^2 = r^2 + h^2$ to find the other.",
              "zh": "常见错误：把斜高代入体积公式，或把高代入侧面积公式。计算前先问：这个长度是从内部垂直向上（$h$，用于体积）还是沿外表面延伸（$\\ell$，用于侧面积）？若题目只给出其中一个，通常需要用 $\\ell^2 = r^2 + h^2$ 求出另一个。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Painting a cylindrical tank",
                "zh": "例题 1：给圆柱形储罐刷漆"
              },
              "problem": {
                "en": "A closed cylindrical water tank has radius $4$ ft and height $10$ ft. (a) Find the exact volume of water it holds. (b) The entire outside — top, bottom, and side — will be painted. Find the exact surface area, then round to the nearest square foot using $\\pi \\approx 3.14159$.",
                "zh": "一个封闭的圆柱形水罐，半径为 $4$ 英尺，高为 $10$ 英尺。(a) 求它能装水的准确体积。(b) 整个外表面——顶面、底面和侧面——都要刷漆。求表面积的准确值，再用 $\\pi \\approx 3.14159$ 四舍五入到最接近的平方英尺。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) The base is a circle with $B = \\pi r^2 = 16\\pi$ ft$^2$, so",
                  "zh": "(a) 底面是圆，$B = \\pi r^2 = 16\\pi$ 平方英尺，所以"
                },
                {
                  "type": "math",
                  "tex": "V = Bh = 16\\pi \\cdot 10 = 160\\pi \\text{ ft}^3 \\approx 502.7 \\text{ ft}^3"
                },
                {
                  "type": "p",
                  "en": "(b) Surface area is the lateral rectangle plus the two circular bases:",
                  "zh": "(b) 表面积等于侧面展开的矩形加上两个圆形底面："
                },
                {
                  "type": "math",
                  "tex": "S = 2\\pi r h + 2\\pi r^2 = 2\\pi(4)(10) + 2\\pi(4)^2 = 80\\pi + 32\\pi = 112\\pi \\text{ ft}^2"
                },
                {
                  "type": "p",
                  "en": "Numerically, $112\\pi \\approx 351.86$, so about $352$ square feet of paint coverage is needed.",
                  "zh": "代入数值得 $112\\pi \\approx 351.86$，所以大约需要覆盖 $352$ 平方英尺。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A composite grain silo (cylinder + cone)",
                "zh": "例题 2：组合粮仓（圆柱 + 圆锥）"
              },
              "problem": {
                "en": "A grain silo is a cylinder of radius $6$ m and height $8$ m, topped by a cone with the same radius and a height of $4$ m. (a) Find the exact total volume. (b) Find the slant height of the cone, and the exact area of the outside surface (cylinder side plus cone side — the flat bottom sits on the ground and the joined circle is internal).",
                "zh": "一座粮仓由半径 $6$ 米、高 $8$ 米的圆柱体和顶部同半径、高 $4$ 米的圆锥组成。(a) 求总体积的准确值。(b) 求圆锥的斜高，并求外表面（圆柱侧面加圆锥侧面——底面贴地，接合处的圆在内部）面积的准确值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Add the two volumes. Both solids share base area $B = \\pi(6)^2 = 36\\pi$ m$^2$:",
                  "zh": "(a) 把两部分体积相加。两个立体的底面积都是 $B = \\pi(6)^2 = 36\\pi$ 平方米："
                },
                {
                  "type": "math",
                  "tex": "V = 36\\pi \\cdot 8 + \\frac{1}{3} \\cdot 36\\pi \\cdot 4 = 288\\pi + 48\\pi = 336\\pi \\text{ m}^3"
                },
                {
                  "type": "p",
                  "en": "(b) The cone's height, radius, and slant height form a right triangle, so $\\ell = \\sqrt{r^2 + h^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$ m. The exposed surface is the cylinder's lateral area plus the cone's lateral area:",
                  "zh": "(b) 圆锥的高、半径和斜高构成直角三角形，所以 $\\ell = \\sqrt{r^2 + h^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$ 米。暴露在外的表面是圆柱侧面积加圆锥侧面积："
                },
                {
                  "type": "math",
                  "tex": "S = 2\\pi r h + \\pi r \\ell = 2\\pi(6)(8) + \\pi(6)(2\\sqrt{13}) = 96\\pi + 12\\sqrt{13}\\,\\pi \\text{ m}^2"
                },
                {
                  "type": "p",
                  "en": "Notice that neither the ground circle nor the internal joining circle is counted — a classic composite-solid trap.",
                  "zh": "注意贴地的圆和接合处的内部圆都没有计入——这是组合体问题的经典陷阱。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A rectangular prism measures $5$ cm by $4$ cm by $3$ cm. What is its volume?",
                "zh": "一个长方体的三条棱长分别为 $5$ 厘米、$4$ 厘米、$3$ 厘米。它的体积是多少？"
              },
              "choices": [
                "$94 \\text{ cm}^3$",
                "$47 \\text{ cm}^3$",
                "$60 \\text{ cm}^3$",
                "$12 \\text{ cm}^3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$V = Bh = (5 \\cdot 4) \\cdot 3 = 60$ cm$^3$. The tempting distractor $94$ is the surface area $2(20 + 15 + 12)$, not the volume.",
                "zh": "$V = Bh = (5 \\cdot 4) \\cdot 3 = 60$ 立方厘米。诱人的干扰项 $94$ 是表面积 $2(20 + 15 + 12)$，不是体积。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A closed cylinder has radius $3$ in and height $5$ in. What is its exact surface area?",
                "zh": "一个封闭圆柱的半径为 $3$ 英寸，高为 $5$ 英寸。它的表面积的准确值是多少？"
              },
              "choices": [
                "$48\\pi \\text{ in}^2$",
                "$45\\pi \\text{ in}^2$",
                "$30\\pi \\text{ in}^2$",
                "$39\\pi \\text{ in}^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$S = 2\\pi rh + 2\\pi r^2 = 30\\pi + 18\\pi = 48\\pi$ in$^2$. Choosing $30\\pi$ means you found only the lateral area and forgot the two circular bases; $45\\pi$ is the volume $\\pi r^2 h$, a different measurement entirely.",
                "zh": "$S = 2\\pi rh + 2\\pi r^2 = 30\\pi + 18\\pi = 48\\pi$ 平方英寸。选 $30\\pi$ 说明只算了侧面积而忘了两个圆形底面；$45\\pi$ 是体积 $\\pi r^2 h$，是完全不同的度量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cone has radius $6$ cm and height $10$ cm. Its exact volume is $k\\pi$ cubic centimeters. Find $k$. Give a whole number.",
                "zh": "一个圆锥的半径为 $6$ 厘米，高为 $10$ 厘米。它的体积的准确值为 $k\\pi$ 立方厘米。求 $k$。请填一个整数。"
              },
              "answer": "120",
              "accept": [
                "120.0"
              ],
              "explanation": {
                "en": "$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(36)(10) = 120\\pi$ cm$^3$, so $k = 120$. Forgetting the $\\frac{1}{3}$ gives $360$ — that would be the cylinder with the same base and height.",
                "zh": "$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(36)(10) = 120\\pi$ 立方厘米，所以 $k = 120$。忘记乘 $\\frac{1}{3}$ 会得到 $360$——那是同底等高的圆柱的体积。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A regular square pyramid has base edge $10$ m and height $12$ m. What is its slant height?",
                "zh": "一个正四棱锥的底边长为 $10$ 米，高为 $12$ 米。它的斜高是多少？"
              },
              "choices": [
                "$12 \\text{ m}$",
                "$\\sqrt{244} \\text{ m}$",
                "$11 \\text{ m}$",
                "$13 \\text{ m}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The right triangle inside the pyramid has legs $h = 12$ and half the base edge, $\\frac{10}{2} = 5$, so $\\ell = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ m. Choosing $\\sqrt{244}$ means you used the full edge $10$ instead of half of it.",
                "zh": "棱锥内部的直角三角形两直角边为 $h = 12$ 和底边长的一半 $\\frac{10}{2} = 5$，所以 $\\ell = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ 米。选 $\\sqrt{244}$ 说明用了整条底边 $10$ 而不是它的一半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A pyramid has a square base with edge $6$ ft and height $7$ ft. Find its volume in cubic feet. Give a whole number.",
                "zh": "一个棱锥的底面是边长 $6$ 英尺的正方形，高为 $7$ 英尺。求它的体积（立方英尺）。请填一个整数。"
              },
              "answer": "84",
              "accept": [
                "84.0"
              ],
              "explanation": {
                "en": "$V = \\frac{1}{3}Bh = \\frac{1}{3}(6^2)(7) = \\frac{1}{3}(36)(7) = 84$ ft$^3$.",
                "zh": "$V = \\frac{1}{3}Bh = \\frac{1}{3}(6^2)(7) = \\frac{1}{3}(36)(7) = 84$ 立方英尺。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A cone and a cylinder have congruent bases and equal heights. The cylinder's volume is $81\\pi$ cm$^3$. What is the cone's volume?",
                "zh": "一个圆锥与一个圆柱同底等高。圆柱的体积为 $81\\pi$ 立方厘米。圆锥的体积是多少？"
              },
              "choices": [
                "$81\\pi \\text{ cm}^3$",
                "$27\\pi \\text{ cm}^3$",
                "$40.5\\pi \\text{ cm}^3$",
                "$243\\pi \\text{ cm}^3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A cone with the same base and height holds exactly $\\frac{1}{3}$ of the cylinder: $\\frac{1}{3}(81\\pi) = 27\\pi$ cm$^3$. The distractor $40.5\\pi$ comes from halving instead of taking a third — remember it takes three cone-fulls of water to fill the cylinder.",
                "zh": "同底等高的圆锥的体积恰好是圆柱的 $\\frac{1}{3}$：$\\frac{1}{3}(81\\pi) = 27\\pi$ 立方厘米。干扰项 $40.5\\pi$ 来自取一半而不是三分之一——记住要倒三满锥的水才能装满圆柱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A soup can (a cylinder) has radius $4$ cm and height $11$ cm. A paper label wraps exactly once around the side of the can, with no overlap. What is the exact area of the label?",
                "zh": "一个汤罐头（圆柱形）的半径为 $4$ 厘米，高为 $11$ 厘米。一张纸标签恰好环绕罐身一周，无重叠。标签面积的准确值是多少？"
              },
              "choices": [
                "$44\\pi \\text{ cm}^2$",
                "$176\\pi \\text{ cm}^2$",
                "$88\\pi \\text{ cm}^2$",
                "$120\\pi \\text{ cm}^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The label is the lateral surface only: $L = 2\\pi rh = 2\\pi(4)(11) = 88\\pi$ cm$^2$. Choosing $120\\pi$ means you added the two circular ends, but a label does not cover the top and bottom of a can; $176\\pi$ is the volume $\\pi r^2 h$.",
                "zh": "标签只覆盖侧面：$L = 2\\pi rh = 2\\pi(4)(11) = 88\\pi$ 平方厘米。选 $120\\pi$ 说明加上了两个圆形底面，但标签不覆盖罐头的顶面和底面；$176\\pi$ 是体积 $\\pi r^2 h$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A monument is a rectangular prism $8$ m long, $5$ m wide, and $4$ m tall, topped by a pyramid with the same $8 \\times 5$ base and height $3$ m. Find the total volume in cubic meters. Give a whole number.",
                "zh": "一座纪念碑由长 $8$ 米、宽 $5$ 米、高 $4$ 米的长方体和顶部同底（$8 \\times 5$）、高 $3$ 米的棱锥组成。求总体积（立方米）。请填一个整数。"
              },
              "answer": "200",
              "accept": [
                "200.0"
              ],
              "explanation": {
                "en": "Prism: $V = 8 \\cdot 5 \\cdot 4 = 160$ m$^3$. Pyramid: $V = \\frac{1}{3}(8 \\cdot 5)(3) = 40$ m$^3$. Composite volume adds the pieces: $160 + 40 = 200$ m$^3$.",
                "zh": "长方体：$V = 8 \\cdot 5 \\cdot 4 = 160$ 立方米。棱锥：$V = \\frac{1}{3}(8 \\cdot 5)(3) = 40$ 立方米。组合体体积为两部分之和：$160 + 40 = 200$ 立方米。"
              }
            }
          ]
        },
        {
          "id": "spheres-and-solid-reasoning",
          "title": "Spheres, Cross-Sections, and Solid Reasoning",
          "titleZh": "球、截面与立体推理",
          "content": [
            {
              "type": "h2",
              "en": "The Sphere and Ways of Reasoning About Solids",
              "zh": "球以及关于立体的推理方法"
            },
            {
              "type": "p",
              "en": "A sphere is the set of all points in space at a fixed distance $r$ (the radius) from a center point. Unlike prisms and cylinders, a sphere has no flat base and no edges, yet its volume and surface area have beautifully simple formulas. This lesson also builds three reasoning tools that let you handle solids you have never seen before: slicing (cross-sections), spinning (solids of revolution), and comparing (Cavalieri's principle and scale factors), plus density problems that connect solids to the real world.",
              "zh": "球面是空间中到一个中心点的距离等于定长 $r$（半径）的所有点的集合。与棱柱和圆柱不同，球没有平的底面也没有棱，但它的体积和表面积公式却异常简洁。本课还将建立三种推理工具，让你能处理从未见过的立体：切（截面）、转（旋转体）、比（卡瓦列里原理与相似比），以及把立体与现实世界联系起来的密度问题。"
            },
            {
              "type": "h3",
              "en": "Volume and Surface Area of a Sphere",
              "zh": "球的体积与表面积"
            },
            {
              "type": "math",
              "tex": "V = \\frac{4}{3}\\pi r^3 \\qquad S = 4\\pi r^2"
            },
            {
              "type": "p",
              "en": "Both formulas depend only on the radius. A memorable fact: a sphere's surface area $4\\pi r^2$ is exactly four times the area of its largest cross-section, the great circle of area $\\pi r^2$. A hemisphere (half a sphere) has half the volume, $\\frac{2}{3}\\pi r^3$, but its surface area depends on whether the flat circular face counts: the curved part alone is $2\\pi r^2$, and a solid hemisphere's total surface is $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$.",
              "zh": "两个公式都只依赖于半径。一个便于记忆的事实：球的表面积 $4\\pi r^2$ 恰好是它最大截面——大圆（面积 $\\pi r^2$）——面积的四倍。半球的体积是球的一半，即 $\\frac{2}{3}\\pi r^3$，但它的表面积取决于是否包含平的圆形底面：仅曲面部分为 $2\\pi r^2$，而实心半球的总表面积为 $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$。"
            },
            {
              "type": "h3",
              "en": "Cross-Sections and Solids of Revolution",
              "zh": "截面与旋转体"
            },
            {
              "type": "p",
              "en": "A cross-section is the two-dimensional shape you get when a plane slices through a solid. Predicting cross-sections is a skill of visualizing, and a few cases cover most problems:",
              "zh": "截面是平面切过立体时得到的二维图形。预判截面形状是一种空间想象能力，掌握几种典型情形就能应对大多数问题："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Every plane that cuts a sphere produces a circle; cutting through the center gives the largest one, a great circle.",
                  "zh": "任何平面切球得到的截面都是圆；过球心的截面是最大的圆，叫做大圆。"
                },
                {
                  "en": "Slicing a cylinder parallel to its bases gives a circle congruent to the bases; slicing perpendicular to the bases through the axis gives a rectangle.",
                  "zh": "平行于底面切圆柱得到与底面全等的圆；沿轴线垂直于底面切得到矩形。"
                },
                {
                  "en": "Slicing a right cone parallel to its base gives a smaller circle; slicing vertically through the apex gives a triangle.",
                  "zh": "平行于底面切直圆锥得到较小的圆；过顶点竖直切得到三角形。"
                },
                {
                  "en": "Slicing a square pyramid parallel to its base gives a smaller square; a vertical slice through the apex gives a triangle.",
                  "zh": "平行于底面切正四棱锥得到较小的正方形；过顶点竖直切得到三角形。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Rotation runs the idea in reverse: spinning a flat region around a line generates a solid of revolution. Rotating a rectangle about one of its sides produces a cylinder (the side on the axis becomes the height, the other dimension becomes the radius). Rotating a right triangle about one of its legs produces a cone: the leg on the axis is the height and the other leg is the radius. Rotating a semicircle about its diameter produces a sphere.",
              "zh": "旋转则是反向运用这一思想：让平面区域绕一条直线旋转，生成旋转体。矩形绕它的一条边旋转得到圆柱（在轴上的边成为高，另一边长成为半径）。直角三角形绕一条直角边旋转得到圆锥：在轴上的直角边是高，另一条直角边是半径。半圆绕它的直径旋转得到球。"
            },
            {
              "type": "h3",
              "en": "Cavalieri's Principle",
              "zh": "卡瓦列里原理"
            },
            {
              "type": "p",
              "en": "Cavalieri's principle: if two solids have the same height, and every plane parallel to their bases cuts cross-sections of equal area in both solids, then the two solids have equal volumes. Picture a straight stack of coins next to a leaning stack of the same coins — same circles at every level, so same volume. This is why an oblique (slanted) cylinder or prism still satisfies $V = Bh$, as long as $h$ is the perpendicular height between the base planes.",
              "zh": "卡瓦列里原理（祖暅原理）：若两个立体等高，且每个平行于底面的平面在两个立体中截出的截面面积都相等，则这两个立体体积相等。想象一摞叠得笔直的硬币和旁边一摞歪斜的同样硬币——每一层都是相同的圆，所以体积相同。这就是为什么斜圆柱或斜棱柱仍满足 $V = Bh$，只要 $h$ 取两底面所在平面之间的垂直距离。"
            },
            {
              "type": "h3",
              "en": "Density, Modeling, and Scale Factors",
              "zh": "密度、建模与相似比"
            },
            {
              "type": "p",
              "en": "Density spreads a total quantity over a region or a volume: population density is people per square mile, and material density is mass per unit volume, so mass $=$ density $\\times$ volume. Always check that units match before multiplying. Scaling is the other modeling essential: if every length of a solid is multiplied by a scale factor $k$, then",
              "zh": "密度是把一个总量摊到一块区域或一个体积上：人口密度是每平方英里的人数，材料密度是单位体积的质量，因此质量 $=$ 密度 $\\times$ 体积。相乘之前务必核对单位是否一致。缩放是建模的另一项核心：若立体的每个长度都乘以相似比 $k$，则"
            },
            {
              "type": "math",
              "tex": "\\text{lengths} \\times k \\qquad \\text{surface area} \\times k^2 \\qquad \\text{volume} \\times k^3"
            },
            {
              "type": "p",
              "en": "This is because area comes from multiplying two lengths and volume from multiplying three. Doubling every dimension ($k = 2$) quadruples the surface area and multiplies the volume by $8$ — a big reason large animals, tanks, and buildings behave differently from small ones.",
              "zh": "原因在于面积由两个长度相乘而来，体积由三个长度相乘而来。把每个尺寸都加倍（$k = 2$）会使表面积变为 $4$ 倍、体积变为 $8$ 倍——这正是大型动物、储罐和建筑与小型的表现大不相同的重要原因。"
            },
            {
              "type": "note",
              "en": "Common mistake: applying the scale factor $k$ directly to area or volume. If a model car is built at scale $1:20$, the real car's surface area is $20^2 = 400$ times the model's, and its volume is $20^3 = 8000$ times — never just $20$ times. On test questions, first identify whether the quantity is a length, an area, or a volume, then choose $k$, $k^2$, or $k^3$.",
              "zh": "常见错误：把相似比 $k$ 直接用在面积或体积上。若模型车按 $1:20$ 制作，真车的表面积是模型的 $20^2 = 400$ 倍，体积是 $20^3 = 8000$ 倍——绝不是只有 $20$ 倍。考试时先判断所求量是长度、面积还是体积，再相应选用 $k$、$k^2$ 或 $k^3$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A solid of revolution",
                "zh": "例题 1：旋转体"
              },
              "problem": {
                "en": "Right triangle $PQR$ has legs $PQ = 5$ cm and $QR = 12$ cm, with the right angle at $Q$. The triangle is rotated about leg $QR$. Describe the resulting solid and find its exact volume and total surface area.",
                "zh": "直角三角形 $PQR$ 的两条直角边为 $PQ = 5$ 厘米和 $QR = 12$ 厘米，直角在 $Q$ 处。将三角形绕直角边 $QR$ 旋转一周。描述所得立体，并求其体积和总表面积的准确值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rotating about $QR$ sweeps out a cone: the axis leg $QR = 12$ becomes the height, and the other leg $PQ = 5$ becomes the radius. The hypotenuse becomes the slant surface, with $\\ell = \\sqrt{5^2 + 12^2} = 13$ cm.",
                  "zh": "绕 $QR$ 旋转扫出一个圆锥：在轴上的直角边 $QR = 12$ 成为高，另一条直角边 $PQ = 5$ 成为半径。斜边扫出侧面，斜高 $\\ell = \\sqrt{5^2 + 12^2} = 13$ 厘米。"
                },
                {
                  "type": "math",
                  "tex": "V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (5)^2 (12) = 100\\pi \\text{ cm}^3"
                },
                {
                  "type": "math",
                  "tex": "S = \\pi r \\ell + \\pi r^2 = \\pi(5)(13) + \\pi(5)^2 = 65\\pi + 25\\pi = 90\\pi \\text{ cm}^2"
                },
                {
                  "type": "p",
                  "en": "Note the roles: the height $12$ is used for volume, while the slant height $13$ is used for the lateral surface.",
                  "zh": "注意各量的角色：体积用高 $12$，侧面积用斜高 $13$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Density of a steel sphere",
                "zh": "例题 2：钢球的密度问题"
              },
              "problem": {
                "en": "A solid steel ball bearing has diameter $6$ cm. Steel has a density of about $7.8$ grams per cubic centimeter. Find the exact volume of the bearing, then estimate its mass to the nearest gram using $\\pi \\approx 3.14159$.",
                "zh": "一个实心钢制轴承球的直径为 $6$ 厘米。钢的密度约为每立方厘米 $7.8$ 克。求轴承球体积的准确值，并用 $\\pi \\approx 3.14159$ 估算其质量，四舍五入到最接近的克。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Careful: the diameter is $6$ cm, so the radius is $r = 3$ cm. The volume is",
                  "zh": "注意：直径是 $6$ 厘米，所以半径是 $r = 3$ 厘米。体积为"
                },
                {
                  "type": "math",
                  "tex": "V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3)^3 = 36\\pi \\text{ cm}^3 \\approx 113.10 \\text{ cm}^3"
                },
                {
                  "type": "p",
                  "en": "Mass is density times volume, and the units line up (g/cm$^3$ times cm$^3$ gives grams):",
                  "zh": "质量等于密度乘以体积，单位恰好匹配（克/立方厘米 乘 立方厘米 得 克）："
                },
                {
                  "type": "math",
                  "tex": "m = 7.8 \\times 36\\pi \\approx 7.8 \\times 113.097 \\approx 882 \\text{ g}"
                },
                {
                  "type": "p",
                  "en": "The bearing weighs about $882$ grams. Using $r = 6$ by mistake would multiply the volume — and the answer — by $2^3 = 8$.",
                  "zh": "轴承球约重 $882$ 克。若误用 $r = 6$，体积和答案都会被放大 $2^3 = 8$ 倍。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the exact volume of a sphere with radius $3$ in?",
                "zh": "半径为 $3$ 英寸的球的体积的准确值是多少？"
              },
              "choices": [
                "$12\\pi \\text{ in}^3$",
                "$27\\pi \\text{ in}^3$",
                "$108\\pi \\text{ in}^3$",
                "$36\\pi \\text{ in}^3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(27) = 36\\pi$ in$^3$. The distractor $12\\pi$ comes from computing $\\frac{4}{3}\\pi r^2$ — remember the radius is cubed, not squared, for volume.",
                "zh": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(27) = 36\\pi$ 立方英寸。干扰项 $12\\pi$ 来自误算 $\\frac{4}{3}\\pi r^2$——记住体积公式中半径是三次方，不是平方。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A sphere has radius $5$ m. Its exact surface area is $k\\pi$ square meters. Find $k$. Give a whole number.",
                "zh": "一个球的半径为 $5$ 米。它的表面积的准确值为 $k\\pi$ 平方米。求 $k$。请填一个整数。"
              },
              "answer": "100",
              "accept": [
                "100.0"
              ],
              "explanation": {
                "en": "$S = 4\\pi r^2 = 4\\pi(25) = 100\\pi$ m$^2$, so $k = 100$. A common slip is using the diameter: $4\\pi(10)^2$ would give $400\\pi$, four times too big.",
                "zh": "$S = 4\\pi r^2 = 4\\pi(25) = 100\\pi$ 平方米，所以 $k = 100$。常见失误是误用直径：$4\\pi(10)^2$ 会得到 $400\\pi$，是正确值的四倍。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A plane slices a right cylinder parallel to its bases, halfway up. What is the cross-section?",
                "zh": "一个平面在直圆柱的一半高度处平行于底面切过。截面是什么图形？"
              },
              "choices": [
                "A circle congruent to the bases",
                "A rectangle",
                "An ellipse",
                "A smaller circle than the bases"
              ],
              "answer": 0,
              "explanation": {
                "en": "A cylinder has the same circular cross-section at every level, so a slice parallel to the bases is a circle congruent to them. A smaller circle would come from a cone, and a rectangle comes from slicing the cylinder vertically through its axis.",
                "zh": "圆柱在每个高度上的水平截面都相同，所以平行于底面的截面是与底面全等的圆。较小的圆是圆锥的情形，矩形则来自沿轴线竖直切开圆柱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A right triangle with legs $3$ cm and $4$ cm is rotated about its leg of length $4$ cm. What is the exact volume of the resulting solid?",
                "zh": "两直角边为 $3$ 厘米和 $4$ 厘米的直角三角形绕长为 $4$ 厘米的直角边旋转一周。所得立体的体积的准确值是多少？"
              },
              "choices": [
                "$16\\pi \\text{ cm}^3$",
                "$12\\pi \\text{ cm}^3$",
                "$36\\pi \\text{ cm}^3$",
                "$48\\pi \\text{ cm}^3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The rotation produces a cone with height $4$ (the axis leg) and radius $3$ (the swinging leg): $V = \\frac{1}{3}\\pi(3)^2(4) = 12\\pi$ cm$^3$. Choosing $16\\pi$ means you swapped the radius and height — the leg on the axis is always the height.",
                "zh": "旋转得到一个高为 $4$（在轴上的直角边）、半径为 $3$（扫动的直角边）的圆锥：$V = \\frac{1}{3}\\pi(3)^2(4) = 12\\pi$ 立方厘米。选 $16\\pi$ 说明把半径和高弄反了——在轴上的直角边永远是高。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An oblique cylinder leans to one side, but its circular base has radius $4$ cm and the perpendicular distance between its base planes is $9$ cm. Which statement justifies that its volume equals that of a right cylinder with the same radius and height?",
                "zh": "一个斜圆柱向一侧倾斜，但其圆形底面半径为 $4$ 厘米，两底面所在平面之间的垂直距离为 $9$ 厘米。哪一条原理能说明它的体积等于同半径同高的直圆柱的体积？"
              },
              "choices": [
                "The Pythagorean Theorem",
                "The triangle inequality",
                "Cavalieri's principle",
                "The one-third rule for cones"
              ],
              "answer": 2,
              "explanation": {
                "en": "Cavalieri's principle: the two cylinders have the same height, and every plane parallel to the bases cuts congruent circles of area $16\\pi$ in both, so the volumes are equal — both are $16\\pi \\cdot 9 = 144\\pi$ cm$^3$. The Pythagorean Theorem relates lengths in right triangles, not volumes.",
                "zh": "卡瓦列里原理：两个圆柱等高，且每个平行于底面的平面在两者中都截出面积为 $16\\pi$ 的全等圆，所以体积相等——都是 $16\\pi \\cdot 9 = 144\\pi$ 立方厘米。勾股定理处理的是直角三角形中的长度关系，与体积无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A town covers $24$ square miles and has a population of $18{,}000$. Find its population density in people per square mile. Give a whole number.",
                "zh": "一座小镇的面积为 $24$ 平方英里，人口为 $18{,}000$。求它的人口密度（人/平方英里）。请填一个整数。"
              },
              "answer": "750",
              "accept": [
                "750.0"
              ],
              "explanation": {
                "en": "Density is total divided by area: $\\frac{18000}{24} = 750$ people per square mile.",
                "zh": "密度等于总量除以面积：$\\frac{18000}{24} = 750$ 人/平方英里。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Every dimension of a storage shed is doubled ($k = 2$). The original shed needed $60$ ft$^2$ of paint for its outside surface. How much paint area does the new shed need?",
                "zh": "一个储物棚的每个尺寸都加倍（$k = 2$）。原来的棚子外表面需要 $60$ 平方英尺的油漆覆盖。新棚子需要多少油漆面积？"
              },
              "choices": [
                "$480 \\text{ ft}^2$",
                "$120 \\text{ ft}^2$",
                "$180 \\text{ ft}^2$",
                "$240 \\text{ ft}^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Surface area scales by $k^2 = 4$, so the new area is $4 \\times 60 = 240$ ft$^2$. The distractor $120$ applies $k$ itself (that is for lengths), and $480$ applies $k^3 = 8$ (that is for volume).",
                "zh": "表面积按 $k^2 = 4$ 缩放，所以新面积为 $4 \\times 60 = 240$ 平方英尺。干扰项 $120$ 是直接乘 $k$（那适用于长度），$480$ 是乘 $k^3 = 8$（那适用于体积）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two similar water tanks have a scale factor of $3$ from small to large. The small tank holds $40$ gallons. How many gallons does the large tank hold? Give a whole number.",
                "zh": "两个相似的水箱从小到大的相似比为 $3$。小水箱能装 $40$ 加仑。大水箱能装多少加仑？请填一个整数。"
              },
              "answer": "1080",
              "accept": [
                "1080.0"
              ],
              "explanation": {
                "en": "Capacity is a volume, so it scales by $k^3 = 27$: the large tank holds $27 \\times 40 = 1080$ gallons. Multiplying by $3$ or by $9$ would be the length or surface-area scaling — a very common exam trap.",
                "zh": "容积是体积，按 $k^3 = 27$ 缩放：大水箱能装 $27 \\times 40 = 1080$ 加仑。只乘 $3$ 或乘 $9$ 分别是长度或表面积的缩放——这是非常常见的考试陷阱。"
              }
            }
          ]
        }
      ]
    }
  ]
}
