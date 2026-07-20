export default {
  "id": "ap-human-geography",
  "title": "AP Human Geography",
  "titleZh": "AP 人文地理",
  "subject": "history",
  "level": "AP",
  "description": "The complete AP Human Geography course following the official College Board seven-unit framework: geographic thinking and data, population and migration, cultural patterns, political organization of space, agriculture and rural land use, cities and urban land use, and industrial and economic development.",
  "descriptionZh": "完整的 AP 人文地理课程，按照 College Board 官方七个单元的框架编排：地理思维与数据、人口与迁移、文化格局、空间的政治组织、农业与乡村土地利用、城市与城市土地利用，以及工业与经济发展。",
  "units": [
    {
      "id": "unit-1-thinking-geographically",
      "title": "Unit 1: Thinking Geographically",
      "titleZh": "第一单元：地理思维",
      "lessons": [
        {
          "id": "maps-and-geographic-data",
          "title": "Maps and Geographic Data",
          "titleZh": "地图与地理数据",
          "content": [
            {
              "type": "h2",
              "en": "Why Geographers Use Maps",
              "zh": "地理学家为何使用地图"
            },
            {
              "type": "p",
              "en": "Geography is the study of where things are and why they are there. A map is the geographer's most basic tool: a scaled-down, flattened representation of part of the Earth's surface. Maps let us see spatial patterns — the arrangement of features across space — that would be invisible from the ground. But every map is also an argument. The cartographer (mapmaker) chooses what to show, what to leave out, and how to color and symbolize the data, so no map is a perfectly neutral picture of reality.",
              "zh": "地理学研究事物位于何处以及为何位于那里。地图是地理学家最基本的工具：它是对地球表面某一部分按比例缩小、展平的表示。地图让我们看到空间格局（spatial pattern）——各种要素在空间中的分布排列——这是在地面上无法察觉的。但每一幅地图同时也是一种主张。制图者（cartographer）会选择展示什么、省略什么，以及如何着色和符号化数据，因此没有任何地图是对现实完全中立的呈现。"
            },
            {
              "type": "p",
              "en": "AP Human Geography divides maps into two broad families based on their purpose. Reference maps show the locations of places and features — political boundaries, roads, rivers, cities. Thematic maps show the spatial pattern of a single variable or theme, such as population density, income, or rainfall. Almost every map you analyze on the exam is a thematic map, so you must know the standard thematic types cold.",
              "zh": "AP 人文地理根据用途把地图分为两大类。参考地图（reference map）显示地点和要素的位置——政治边界、道路、河流、城市。专题地图（thematic map）显示单一变量或主题的空间格局，例如人口密度、收入或降水量。你在考试中分析的几乎每一幅地图都是专题地图，因此必须牢牢掌握标准的专题地图类型。"
            },
            {
              "type": "h2",
              "en": "Types of Thematic Maps",
              "zh": "专题地图的类型"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Choropleth map: shades predefined areas (countries, states, counties) by the value of a variable, usually as a rate or ratio (e.g., population density, percent literate). Darker or more intense colors mean higher values.",
                  "zh": "分级统计图（choropleth map）：按变量数值对预先划定的区域（国家、州、县）进行着色，通常表示比率或比例（如人口密度、识字率）。颜色越深或越浓，代表数值越高。"
                },
                {
                  "en": "Dot distribution (dot density) map: places one dot for a set quantity of something (e.g., one dot = 1,000 people). Dots cluster where the phenomenon is concentrated, showing absolute distribution and clustering.",
                  "zh": "点密度图（dot distribution / dot density map）：每个点代表某事物的固定数量（如一个点 = 1000 人）。点在现象集中的地方聚集，显示绝对分布与聚集情况。"
                },
                {
                  "en": "Graduated (proportional) symbol map: uses symbols (usually circles) whose size is proportional to the value at each location — bigger circle, bigger city or larger earthquake.",
                  "zh": "分级符号图（graduated / proportional symbol map）：用符号（通常是圆）表示各地点的数值，符号大小与数值成比例——圆越大，城市越大或地震越强。"
                },
                {
                  "en": "Isoline (isarithmic) map: connects points of equal value with lines. A topographic map (contour lines of equal elevation) and a weather map (isotherms of equal temperature, isobars of equal pressure) are isoline maps.",
                  "zh": "等值线图（isoline / isarithmic map）：用线连接数值相等的点。地形图（等高线，elevation 相等）和天气图（等温线 isotherm、等压线 isobar）都是等值线图。"
                },
                {
                  "en": "Cartogram: distorts the size of areas so that each area's size is proportional to a variable (e.g., population) rather than to land area. Countries with more people appear larger, so shape and true area are sacrificed.",
                  "zh": "变形地图（cartogram）：扭曲区域的面积，使每个区域的大小与某变量（如人口）成比例，而非与土地面积成比例。人口多的国家显得更大，因此牺牲了形状和真实面积。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Exam Tip — Match the map to the data: A common exam task is choosing the best map type for a given dataset. Use a choropleth for a rate or percentage tied to defined areas; use a dot map for total counts and clustering; use graduated symbols for values at specific points; use an isoline map for continuous data like elevation or temperature. Picking the wrong map type for the data is a classic distractor.",
              "zh": "AP 考试提示——让地图与数据相匹配：常见考题是为给定数据选择最合适的地图类型。表示与既定区域相关的比率或百分比用分级统计图；表示总量和聚集用点密度图；表示特定点位上的数值用分级符号图；表示海拔或温度等连续数据用等值线图。为数据选错地图类型是经典的干扰项。"
            },
            {
              "type": "h2",
              "en": "Map Projections and Distortion",
              "zh": "地图投影与失真"
            },
            {
              "type": "p",
              "en": "The Earth is a sphere (technically an oblate spheroid), but maps are flat. A map projection is the mathematical method of transferring the curved surface onto a flat plane. It is impossible to do this without distortion: every projection distorts at least one of four properties — shape, area, distance, and direction. Cartographers choose a projection based on which property matters most for their purpose.",
              "zh": "地球是球体（严格说是扁球体），但地图是平的。地图投影（map projection）是把弯曲表面转移到平面上的数学方法。这样做不可能不产生失真：每一种投影都至少扭曲以下四种属性之一——形状（shape）、面积（area）、距离（distance）和方向（direction）。制图者会根据用途中哪种属性最重要来选择投影。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Mercator: preserves direction and shape (good for navigation), but massively distorts area toward the poles — Greenland looks as big as Africa though Africa is about 14 times larger.",
                  "zh": "墨卡托投影（Mercator）：保留方向和形状（适合导航），但在两极附近严重扭曲面积——格陵兰看起来和非洲一样大，而实际非洲约为其 14 倍。"
                },
                {
                  "en": "Robinson: a compromise projection that distorts everything a little rather than one thing a lot, giving a visually balanced world map; no property is perfectly correct.",
                  "zh": "罗宾逊投影（Robinson）：一种折中投影，对所有属性都做少量扭曲，而不是对某一属性大幅扭曲，从而得到视觉上均衡的世界地图；没有任何一种属性完全准确。"
                },
                {
                  "en": "Gall-Peters (an equal-area projection): preserves the true relative area of landmasses, making the tropics and Global South look proportionally correct, but badly distorts shape, stretching land near the equator.",
                  "zh": "高尔-彼得斯投影（Gall-Peters，等积投影）：保留陆地真实的相对面积，使热带和全球南方的比例正确，但严重扭曲形状，把赤道附近的陆地拉长。"
                },
                {
                  "en": "Goode's homolosine (\"orange peel\"): an interrupted equal-area projection that cuts the oceans to keep continents' size and shape accurate, at the cost of a continuous, interrupted-looking world.",
                  "zh": "古德等积投影（Goode's homolosine，\"橘皮式\"）：一种间断的等积投影，把海洋切开以保持大陆的面积和形状准确，代价是世界不连续、显得被切断。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Exam Tip — Projections carry a message: The Mercator projection's enlargement of Europe and North America, and its shrinking of Africa and South America, has been criticized for reinforcing a Eurocentric worldview. When a question asks about the \"limitations\" or \"bias\" of a map, connect the distortion to how it shapes perception. There is no perfect projection — only trade-offs suited to a purpose.",
              "zh": "AP 考试提示——投影传递信息：墨卡托投影放大了欧洲和北美、缩小了非洲和南美，因而被批评强化了欧洲中心主义的世界观。当题目问及地图的\"局限\"或\"偏见\"时，要把失真与它如何塑造人们的认知联系起来。没有完美的投影——只有适合特定用途的取舍。"
            },
            {
              "type": "h2",
              "en": "Sources of Geographic Data",
              "zh": "地理数据的来源"
            },
            {
              "type": "p",
              "en": "Maps are only as good as the data behind them. Geographers gather spatial data from many sources, both high-tech and low-tech. Modern analysis increasingly relies on geospatial technologies that let us collect, store, and layer huge amounts of location-tagged information.",
              "zh": "地图的好坏取决于其背后的数据。地理学家从许多来源收集空间数据，既有高科技的，也有低技术的。现代分析越来越依赖地理空间技术，这些技术让我们能够收集、存储并叠加海量带有位置标签的信息。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "GIS (Geographic Information System): computer software that captures, stores, and displays geographic data in layers (roads, elevation, income, land use), letting analysts overlay them to reveal relationships.",
                  "zh": "地理信息系统（GIS）：一种计算机软件，以图层（道路、海拔、收入、土地利用）形式采集、存储和显示地理数据，让分析者可以叠加图层以揭示相互关系。"
                },
                {
                  "en": "GPS (Global Positioning System): a network of satellites that provides precise absolute location (latitude and longitude) to a receiver on the ground; used for navigation and field data collection.",
                  "zh": "全球定位系统（GPS）：由卫星组成的网络，为地面接收器提供精确的绝对位置（经纬度）；用于导航和野外数据采集。"
                },
                {
                  "en": "Remote sensing: collecting data about the Earth's surface from a distance, using satellites or aircraft (e.g., satellite imagery of deforestation or urban sprawl).",
                  "zh": "遥感（remote sensing）：利用卫星或飞机从远处采集有关地球表面的数据（如森林砍伐或城市蔓延的卫星影像）。"
                },
                {
                  "en": "Census: a periodic official count of a population that provides demographic data (age, race, income, housing) tied to place; the foundation of much human-geographic analysis.",
                  "zh": "人口普查（census）：对人口进行的定期官方统计，提供与地点相关的人口数据（年龄、种族、收入、住房）；是许多人文地理分析的基础。"
                },
                {
                  "en": "Field observation and interviews: qualitative data gathered in person by going to a place — the oldest method, still essential for capturing lived experience and detail that satellites miss.",
                  "zh": "野外观察与访谈（field observation and interviews）：亲自前往某地当面收集的定性数据——最古老的方法，至今对于捕捉卫星无法获取的生活体验和细节仍不可或缺。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Data are also either quantitative (numbers, such as census counts) or qualitative (descriptions, photographs, interviews). Powerful analyses often combine both — for example, using GIS to map where a disease is spreading (quantitative) and interviews to understand why residents distrust vaccines (qualitative).",
              "zh": "数据又分为定量（quantitative，数字，如普查数据）和定性（qualitative，描述、照片、访谈）两类。有力的分析往往兼用两者——例如，用 GIS 绘制某疾病的传播范围（定量），并用访谈来了解居民为何不信任疫苗（定性）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Choosing the Right Map",
                "zh": "例题 1：选择合适的地图"
              },
              "problem": {
                "en": "A researcher has data on the total number of confirmed measles cases in each U.S. county and wants to show both how many cases occurred and where they cluster. Which thematic map type is most appropriate, and why not a choropleth?",
                "zh": "一名研究者掌握了美国每个县确诊麻疹病例的总数，希望同时展示病例数量的多少以及它们在哪里聚集。哪种专题地图类型最合适？为什么不用分级统计图？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A dot distribution map is best. Because the data are raw counts (total cases) and the goal is to show clustering, dots — each representing a fixed number of cases — will visually pile up in outbreak hotspots. A choropleth is designed for rates or ratios standardized by area; shading whole counties by total count would mislead, because a large, populous county would look severe simply for being big. Standardizing to a rate (cases per 100,000) would justify a choropleth, but that is not what the raw-count, clustering goal calls for.",
                  "zh": "最好用点密度图。由于数据是原始计数（病例总数），且目标是展示聚集，用每个点代表固定病例数的方式会在疫情热点处视觉上堆积。分级统计图适用于按面积标准化的比率或比例；若按病例总数给整个县着色会造成误导，因为一个人口众多的大县仅仅因为面积大就显得严重。若换成比率（每 10 万人病例数）则可用分级统计图，但这不符合\"原始计数 + 展示聚集\"的目标。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading a Projection's Bias",
                "zh": "例题 2：解读投影的偏见"
              },
              "problem": {
                "en": "On a Mercator world map, Greenland appears roughly the same size as the continent of Africa. Explain the distortion and what property the mapmaker preserved instead.",
                "zh": "在墨卡托世界地图上，格陵兰看起来与非洲大陆大小相近。请解释其中的失真，以及制图者转而保留了哪种属性。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The Mercator projection distorts area, and the distortion increases with distance from the equator. Greenland lies near the North Pole, so it is stretched enormously; in reality Africa is about 14 times larger. The projection sacrifices accurate area in order to preserve shape and direction — straight lines of constant compass bearing, which made it valuable for sea navigation. A good AP answer names the preserved property (direction/shape) and links the area distortion to latitude.",
                  "zh": "墨卡托投影扭曲的是面积，且离赤道越远失真越大。格陵兰靠近北极，因此被极度拉大；而实际上非洲约为其 14 倍。这种投影牺牲了准确的面积，以保留形状和方向——恒定罗盘方位的直线，这使它对海上导航很有价值。优秀的 AP 答案会指出被保留的属性（方向/形状），并把面积失真与纬度联系起来。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A map that shades each U.S. state a different intensity of blue according to its percentage of residents with a college degree is a:",
                "zh": "一幅按各州拥有大学学历居民的百分比，用不同深浅的蓝色为美国各州着色的地图，属于："
              },
              "choices": [
                "Dot distribution map",
                "Cartogram",
                "Graduated symbol map",
                "Choropleth map"
              ],
              "answer": 3,
              "explanation": {
                "en": "Shading predefined areas (states) by a rate or percentage is the defining feature of a choropleth map. A dot map would use dots for counts, and a graduated symbol map would place sized symbols at points, not shade whole areas; a cartogram would resize the states rather than merely shade them.",
                "zh": "按比率或百分比对预先划定的区域（州）着色，正是分级统计图的典型特征。点密度图会用点表示计数，分级符号图会在点位放置有大小的符号而非给整个区域着色；变形地图会改变各州的大小，而不仅仅是着色。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about map projections is correct?",
                "zh": "关于地图投影，下列哪项陈述是正确的？"
              },
              "choices": [
                "A projection can preserve shape, area, distance, and direction all at once.",
                "The Robinson projection preserves true area with no distortion.",
                "Every flat map distorts at least one of shape, area, distance, or direction.",
                "The Mercator projection is the only projection with any distortion."
              ],
              "answer": 2,
              "explanation": {
                "en": "Because a sphere cannot be flattened without stretching or tearing, every projection distorts at least one property; the cartographer chooses which to preserve. No projection preserves all four (ruling out the first choice). Robinson is a compromise that distorts everything slightly, so it does not keep true area, and all projections — not just Mercator — distort something.",
                "zh": "由于球面无法在不拉伸或撕裂的情况下展平，每一种投影都至少扭曲一种属性；制图者选择保留哪一种。没有任何投影能同时保留全部四种（排除第一项）。罗宾逊投影是对所有属性都略作扭曲的折中方案，因此并不保留真实面积；而且所有投影——不只是墨卡托——都会扭曲某些东西。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A topographic map showing contour lines that connect points of equal elevation is an example of a(n):",
                "zh": "一幅用等高线连接海拔相等各点的地形图，属于哪一类地图？"
              },
              "choices": [
                "Isoline map",
                "Cartogram",
                "Choropleth map",
                "Dot distribution map"
              ],
              "answer": 0,
              "explanation": {
                "en": "Lines connecting points of equal value define an isoline (isarithmic) map; elevation contours, isotherms, and isobars are all isolines. A cartogram distorts area by a variable, a choropleth shades whole regions, and a dot map uses dots for counts — none of which represent continuous data with equal-value lines.",
                "zh": "用线连接数值相等的点，正是等值线图（isoline / isarithmic map）的定义；等高线、等温线和等压线都是等值线。变形地图按变量扭曲面积，分级统计图给整个区域着色，点密度图用点表示计数——它们都不用等值线表示连续数据。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A geographer wants to overlay layers of data — elevation, soil type, and land use — to find the best site for a new farm. Which technology is designed for this?",
                "zh": "一名地理学家想要叠加多个数据图层——海拔、土壤类型和土地利用——以寻找新农场的最佳选址。哪种技术专为此设计？"
              },
              "choices": [
                "GPS",
                "Remote sensing",
                "GIS",
                "A paper census"
              ],
              "answer": 2,
              "explanation": {
                "en": "A Geographic Information System (GIS) stores data in layers and lets analysts overlay them to reveal spatial relationships and do site selection. GPS only provides precise location coordinates; remote sensing gathers imagery from a distance but does not by itself overlay analytical layers; a census supplies demographic data but no overlay tool.",
                "zh": "地理信息系统（GIS）以图层形式存储数据，让分析者叠加图层以揭示空间关系并进行选址。GPS 只提供精确的位置坐标；遥感从远处获取影像，但本身不叠加分析图层；人口普查提供人口数据，却没有叠加分析的工具。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following best describes a limitation shared by all maps?",
                "zh": "下列哪项最能说明所有地图共有的一种局限？"
              },
              "choices": [
                "Maps can only be made from census data.",
                "Digital maps eliminate all bias.",
                "Maps never distort distance.",
                "Maps are selective and reflect the choices and purposes of their makers."
              ],
              "answer": 3,
              "explanation": {
                "en": "Every map is a selective, simplified model: the cartographer decides what to include, exclude, and emphasize, so maps reflect purpose and can carry bias. Maps can be built from many data sources, all flat maps distort at least one property (including distance on most), and going digital does not remove the human choices behind the design.",
                "zh": "每一幅地图都是选择性的、简化的模型：制图者决定纳入、排除和强调什么，因此地图反映用途并可能带有偏见。地图可由多种数据来源制作，所有平面地图都至少扭曲一种属性（多数会扭曲距离），而数字化并不能消除设计背后的人为选择。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term names a thematic map that resizes areas so each area is proportional to a variable such as population, distorting true land area? Answer with the one-word term.",
                "zh": "哪个术语指一种专题地图，它改变各区域的大小，使每个区域与人口等变量成比例，从而扭曲真实土地面积？请用一个词回答。"
              },
              "answer": "cartogram",
              "accept": [
                "cartogram",
                "a cartogram"
              ],
              "explanation": {
                "en": "A cartogram intentionally distorts the size (and often shape) of areas so that size represents a variable like population or GDP rather than land area, making it powerful for showing where people or economic activity concentrate.",
                "zh": "变形地图（cartogram）有意扭曲各区域的大小（常常还有形状），使大小表示人口或 GDP 等变量而非土地面积，因而擅长展示人口或经济活动集中在哪里。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the general term for collecting data about the Earth's surface from a distance, using satellites or aircraft? Answer with the two-word term.",
                "zh": "利用卫星或飞机从远处采集有关地球表面数据的做法，其通用术语是什么？请用一个（英文两词）术语回答。"
              },
              "answer": "remote sensing",
              "accept": [
                "remote sensing",
                "remote-sensing"
              ],
              "explanation": {
                "en": "Remote sensing captures information — such as satellite imagery of deforestation, urban growth, or crop health — without physical contact with the surface being studied. It is distinct from GPS, which provides location, and GIS, which analyzes layered data.",
                "zh": "遥感（remote sensing）在不与被研究表面直接接触的情况下获取信息——如森林砍伐、城市扩张或作物长势的卫星影像。它不同于提供位置的 GPS，也不同于分析叠加数据的 GIS。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Which map projection preserves direction and shape (useful for navigation) but greatly exaggerates area near the poles? Answer with the projection's name (one word).",
                "zh": "哪种地图投影保留方向和形状（对导航有用），却在两极附近极大地夸大面积？请用该投影的名称（一个词）回答。"
              },
              "answer": "Mercator",
              "accept": [
                "mercator",
                "mercator projection",
                "the mercator projection"
              ],
              "explanation": {
                "en": "The Mercator projection keeps compass directions as straight lines, which made it ideal for sea navigation, but its area distortion grows with latitude — making high-latitude regions like Greenland and Antarctica look far larger than they are.",
                "zh": "墨卡托投影（Mercator）把罗盘方向表示为直线，因此非常适合海上导航，但其面积失真随纬度增大——使格陵兰、南极洲等高纬度地区看起来比实际大得多。"
              }
            }
          ]
        },
        {
          "id": "scales-of-analysis-and-regions",
          "title": "Scales of Analysis and Regions",
          "titleZh": "分析尺度与区域",
          "content": [
            {
              "type": "h2",
              "en": "Locating Things on Earth",
              "zh": "在地球上定位事物"
            },
            {
              "type": "p",
              "en": "Before geographers can explain a pattern, they must describe where things are. There are two ways to give a location. Absolute location is an exact position on the globe, given by coordinates of latitude and longitude (or a precise street address). Relative location describes where a place is in relation to other places — \"Ohio is west of Pennsylvania,\" \"the store is two blocks past the school.\" Absolute location never changes; relative location can shift as connections and surroundings change.",
              "zh": "在解释某种格局之前，地理学家必须先描述事物位于何处。给出位置有两种方式。绝对位置（absolute location）是地球上的精确位置，用经纬度坐标（或精确街道地址）表示。相对位置（relative location）描述某地相对于其他地方的位置——\"俄亥俄州在宾夕法尼亚州以西\"，\"商店在学校再过两个街区处\"。绝对位置永不改变；相对位置则会随着联系和周边环境的变化而改变。"
            },
            {
              "type": "p",
              "en": "Geographers also measure distance and direction in two ways. Absolute distance is a measured length (miles, kilometers), while relative distance is measured in terms of time, cost, or effort (\"the airport is 30 minutes away\"). Likewise, absolute direction uses the cardinal points (north, south, east, west), while relative direction depends on your perspective (\"the Middle East,\" \"out West\").",
              "zh": "地理学家还用两种方式衡量距离和方向。绝对距离（absolute distance）是可测量的长度（英里、公里），而相对距离（relative distance）以时间、成本或所需努力来衡量（\"机场在 30 分钟车程外\"）。同样，绝对方向（absolute direction）用基本方位（东南西北），而相对方向（relative direction）取决于你的视角（\"中东\"、\"西部\"）。"
            },
            {
              "type": "h2",
              "en": "Map Scale vs. Scale of Analysis",
              "zh": "地图比例尺与分析尺度"
            },
            {
              "type": "p",
              "en": "The word \"scale\" has two distinct meanings in geography, and confusing them is a classic exam mistake. Map scale is the ratio between distance on the map and distance on the ground (e.g., 1:24,000). A large-scale map (like 1:1,000) shows a small area in great detail — a single neighborhood. A small-scale map (like 1:50,000,000) shows a large area with little detail — the whole world. Counterintuitively, \"large scale\" means less land, more detail.",
              "zh": "\"尺度/比例尺\"（scale）一词在地理学中有两种不同含义，混淆它们是经典的考试错误。地图比例尺（map scale）是地图上距离与地面实际距离之间的比例（如 1:24,000）。大比例尺地图（如 1:1,000）以极高的细节展示较小的区域——单个街区。小比例尺地图（如 1:50,000,000）以很少的细节展示很大的区域——整个世界。与直觉相反，\"大比例尺\"意味着更少的土地、更多的细节。"
            },
            {
              "type": "p",
              "en": "Scale of analysis is different: it is the level at which you group data and ask questions — global, regional, national, or local. The same phenomenon looks different at different scales. A national map of the United States might show high average income, but a local map of one city reveals wealthy and poor neighborhoods side by side. Choosing a scale of analysis shapes what patterns you can see and what conclusions you can draw.",
              "zh": "分析尺度（scale of analysis）则不同：它是你对数据进行分组并提出问题的层次——全球、区域、国家或地方。同一现象在不同尺度下会呈现不同面貌。一幅美国全国地图可能显示很高的平均收入，但一座城市的地方尺度地图会揭示富裕与贫穷街区并存。选择分析尺度决定了你能看到哪些格局、能得出哪些结论。"
            },
            {
              "type": "note",
              "en": "AP Exam Tip — \"Large scale\" ≠ \"large area\": On a map, large scale means a small area shown in fine detail, and small scale means a large area with little detail. But scale of analysis runs the opposite way in everyday words: a \"global scale of analysis\" covers a large area. Read the question carefully to tell which \"scale\" it means. The exam loves to test this distinction.",
              "zh": "AP 考试提示——\"大比例尺\"≠\"大面积\"：在地图上，大比例尺表示以精细细节展示的小区域，小比例尺表示细节很少的大区域。但分析尺度在日常用语中方向相反：\"全球分析尺度\"覆盖很大的区域。要仔细读题，判断它指的是哪种\"scale\"。考试特别喜欢考查这一区分。"
            },
            {
              "type": "h2",
              "en": "The Spatial Concepts Geographers Use",
              "zh": "地理学家使用的空间概念"
            },
            {
              "type": "p",
              "en": "Human geography rests on a set of core spatial concepts that let us describe and explain how things are arranged and connected across the Earth's surface.",
              "zh": "人文地理建立在一组核心空间概念之上，这些概念让我们能够描述和解释事物如何在地球表面分布排列并相互联系。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Space: the physical gap or interval between two things and how that space is used and organized.",
                  "zh": "空间（space）：两事物之间的物理间隔，以及该空间如何被使用和组织。"
                },
                {
                  "en": "Place: the unique combination of physical and human characteristics that gives a location meaning and identity; closely tied to a \"sense of place.\"",
                  "zh": "地方（place）：赋予某一位置意义和身份的自然与人文特征的独特组合；与\"地方感\"（sense of place）密切相关。"
                },
                {
                  "en": "Flows: the movement of people, goods, ideas, and information from place to place — such as migration, trade, and the spread of culture.",
                  "zh": "流（flows）：人口、货物、观念和信息在地方之间的移动——如迁移、贸易和文化的传播。"
                },
                {
                  "en": "Patterns: the general arrangement of features in space — clustered (agglomerated), dispersed (scattered), or arranged in a line — that hints at an underlying process.",
                  "zh": "格局（patterns）：要素在空间中的总体排列——聚集的（agglomerated）、分散的（dispersed）或呈线状——它暗示着背后的某种过程。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Distance Decay and Time-Space Compression",
              "zh": "距离衰减与时空压缩"
            },
            {
              "type": "p",
              "en": "Two related ideas describe how distance shapes interaction. Distance decay is the principle that the interaction between two places declines as the distance between them increases — you shop, visit, and communicate more with what is near and less with what is far. Closely linked is Tobler's First Law of Geography: \"everything is related to everything else, but near things are more related than distant things.\"",
              "zh": "有两个相关概念描述距离如何影响相互作用。距离衰减（distance decay）是指两地之间的相互作用随距离增大而减弱——你更多地与近处的事物购物、往来和交流，与远处的则更少。与之密切相关的是托布勒地理学第一定律（Tobler's First Law）：\"一切事物都彼此相关，但近处的事物比远处的更相关。\""
            },
            {
              "type": "p",
              "en": "Time-space compression is the shrinking of the \"friction of distance\" thanks to improvements in transportation and communication. Airplanes, phones, and the internet make faraway places feel closer and reduce the time and cost of connecting them. As a result, distance decay is weaker today than in the past: you can video-call the other side of the world instantly. But time-space compression is uneven — well-connected global cities feel very close to one another, while poorly connected rural areas remain relatively isolated.",
              "zh": "时空压缩（time-space compression）是指由于交通和通信的改进，\"距离摩擦\"（friction of distance）不断缩小。飞机、电话和互联网使遥远的地方感觉更近，并减少了连接它们的时间和成本。因此，如今的距离衰减比过去更弱：你可以立即与地球另一端视频通话。但时空压缩是不均衡的——联系紧密的全球城市之间感觉非常近，而联系薄弱的乡村地区仍相对孤立。"
            },
            {
              "type": "note",
              "en": "AP Exam Tip — Compression weakens, not erases, distance: Time-space compression reduces distance decay but does not eliminate it, and it affects places unequally. Do not claim distance \"no longer matters.\" A strong answer notes that improved connectivity flattens the distance-decay curve most for those with access to fast transport and technology, deepening the gap with places left off the network.",
              "zh": "AP 考试提示——压缩是削弱而非消除距离：时空压缩减弱了距离衰减，但并未将其消除，且对各地的影响并不均衡。不要断言距离\"不再重要\"。优秀的答案会指出，连通性的改善主要为拥有快速交通和技术的人群拉平距离衰减曲线，从而加深了他们与被排除在网络之外地区之间的差距。"
            },
            {
              "type": "h2",
              "en": "Types of Regions",
              "zh": "区域的类型"
            },
            {
              "type": "p",
              "en": "A region is an area of the Earth's surface defined by one or more shared characteristics. Regionalization — grouping places into regions — is how geographers make sense of a complex world. AP Human Geography recognizes three types.",
              "zh": "区域（region）是地球表面上由一种或多种共同特征所界定的地区。区域化（regionalization）——把各地归并为区域——是地理学家理解复杂世界的方式。AP 人文地理承认三种类型。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Formal (uniform) region: an area with one or more shared, measurable traits throughout — a country, a wheat belt, an area where French is the official language. Its boundaries are usually clear.",
                  "zh": "正式区/均质区（formal / uniform region）：整个区域内具有一种或多种共同的、可测量特征的地区——一个国家、一个小麦带、一个以法语为官方语言的地区。其边界通常清晰。"
                },
                {
                  "en": "Functional (nodal) region: an area organized around a central point (node) and defined by movement or connection to it — the delivery area of a pizza shop, the circulation zone of a newspaper, the region served by an airport. Influence weakens outward from the node (distance decay).",
                  "zh": "功能区/结节区（functional / nodal region）：围绕一个中心点（节点，node）组织、并由与该节点的移动或联系所界定的地区——一家披萨店的配送范围、一份报纸的发行区、一座机场服务的地区。影响力从节点向外减弱（距离衰减）。"
                },
                {
                  "en": "Perceptual (vernacular) region: an area defined by people's beliefs, feelings, and attitudes rather than objective data — \"the South,\" \"the Midwest,\" \"Dixie.\" Boundaries are fuzzy and vary by who you ask.",
                  "zh": "感知区/俗成区（perceptual / vernacular region）：由人们的信念、情感和态度而非客观数据所界定的地区——\"美国南方\"、\"中西部\"、\"迪克西\"。其边界模糊，且因询问对象不同而不同。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Identifying a Region Type",
                "zh": "例题 1：判定区域类型"
              },
              "problem": {
                "en": "A radio station broadcasts from a tower in a city; the signal is strong nearby and fades to static toward the edges of the broadcast area. What type of region is the broadcast area, and what spatial concept explains the fading?",
                "zh": "一家电台从城市中的一座塔发射信号；信号在附近很强，向广播区边缘则减弱为杂音。这个广播区属于哪种类型的区域？什么空间概念解释了信号的减弱？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The broadcast area is a functional (nodal) region: it is organized around a central node — the radio tower — and defined by connection to it. The fading signal toward the edges is a textbook illustration of distance decay: interaction with (here, reception from) the node weakens as distance increases. Contrast this with a formal region, which would share a uniform trait throughout rather than radiate from a center.",
                  "zh": "这个广播区是功能区/结节区（functional / nodal region）：它围绕一个中心节点——发射塔——组织，并由与之的联系所界定。信号向边缘减弱正是距离衰减（distance decay）的教科书式例证：与节点的相互作用（此处是接收）随距离增大而减弱。这与正式区不同，后者会在整个区域内具有一致特征，而非从中心向外辐射。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Same Data, Different Scale",
                "zh": "例题 2：同样的数据，不同的尺度"
              },
              "problem": {
                "en": "At the national scale, Brazil appears to be a rapidly growing economy with a rising average income. Yet a study focused on the northeastern state of Bahia finds widespread poverty. Explain how both statements can be true.",
                "zh": "在国家尺度上，巴西呈现为一个快速增长、平均收入上升的经济体。然而一项聚焦东北部巴伊亚州的研究却发现普遍的贫困。请解释这两种说法为何都能成立。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The two claims describe the same country at different scales of analysis. A national-scale average blends together booming regions (like the industrial southeast around São Paulo) with much poorer regions, producing a healthy overall figure that hides internal inequality. Zooming to the regional/local scale of Bahia reveals patterns the national average conceals. This is why geographers stress that conclusions depend on scale — always ask at what scale the data were aggregated before drawing a generalization.",
                  "zh": "这两种说法在不同的分析尺度上描述同一个国家。国家尺度的平均值把繁荣地区（如圣保罗周边的东南工业区）与贫穷得多的地区混在一起，得出一个良好的总体数字，却掩盖了内部的不平等。放大到巴伊亚州的区域/地方尺度，就会显现出国家平均值所隐藏的格局。这正是地理学家强调结论取决于尺度的原因——在做概括之前，务必先问数据是在什么尺度上汇总的。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Describing New York City as \"40.7° N, 74.0° W\" gives its:",
                "zh": "将纽约市描述为\"北纬 40.7°，西经 74.0°\"给出的是它的："
              },
              "choices": [
                "Relative location",
                "Site situation",
                "Perceptual location",
                "Absolute location"
              ],
              "answer": 3,
              "explanation": {
                "en": "Latitude and longitude coordinates give an exact, unchanging position — absolute location. Relative location would describe the city in relation to other places (e.g., \"at the mouth of the Hudson River\"). \"Perceptual location\" is not a term, and situation refers to a place's relationship to its surroundings, not its coordinates.",
                "zh": "经纬度坐标给出的是精确、不变的位置——绝对位置。相对位置则会用与其他地方的关系来描述该市（如\"位于哈得孙河口\"）。\"感知位置\"不是术语，而位置关系（situation）指某地与周边的关系，而非其坐标。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A map with a scale of 1:1,000 compared to a map with a scale of 1:1,000,000 will show:",
                "zh": "比例尺为 1:1,000 的地图与比例尺为 1:1,000,000 的地图相比，会显示："
              },
              "choices": [
                "A larger area with less detail",
                "A larger area with greater detail",
                "The same area with the same detail",
                "A smaller area with greater detail"
              ],
              "answer": 3,
              "explanation": {
                "en": "1:1,000 is a larger-scale map (the fraction 1/1,000 is larger than 1/1,000,000), so it shows a smaller area in greater detail — a single neighborhood rather than a whole region. The classic error is assuming \"large scale\" means a large area; it means the opposite.",
                "zh": "1:1,000 是更大比例尺的地图（分数 1/1,000 大于 1/1,000,000），因此它以更高的细节展示更小的区域——单个街区而非整个地区。经典错误是以为\"大比例尺\"意味着大面积；其含义恰恰相反。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The area served by a single subway system, organized around downtown stations and weakening at the outer stops, is best classified as a:",
                "zh": "由单一地铁系统服务、围绕市中心站点组织、在外围站点减弱的地区，最应归类为："
              },
              "choices": [
                "Formal region",
                "Perceptual region",
                "Functional region",
                "Vernacular region"
              ],
              "answer": 2,
              "explanation": {
                "en": "A functional (nodal) region is organized around a node and defined by movement or connection to it, with influence fading outward — exactly the subway system. A formal region shares a uniform measurable trait throughout, while perceptual/vernacular regions (two names for the same type) are defined by people's feelings, not by a transport node.",
                "zh": "功能区/结节区（functional / nodal region）围绕节点组织，由与之的移动或联系界定，影响力向外减弱——正是地铁系统。正式区在整个区域内具有一致的可测量特征，而感知区/俗成区（同一类型的两个名称）由人们的情感界定，而非交通节点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "\"The American South\" is a region whose boundaries people disagree about, based on culture and identity rather than measured data. It is a:",
                "zh": "\"美国南方\"是一个人们对其边界看法不一的区域，它基于文化和身份认同而非可测量的数据。它属于："
              },
              "choices": [
                "Perceptual (vernacular) region",
                "Formal region",
                "Functional region",
                "Nodal region"
              ],
              "answer": 0,
              "explanation": {
                "en": "A region defined by people's beliefs, feelings, and identity, with fuzzy contested boundaries, is a perceptual (vernacular) region. A formal region has clear, measurable shared traits; functional and nodal (the same type) regions are organized around a central node — neither fits a culturally imagined \"South.\"",
                "zh": "由人们的信念、情感和身份认同界定、边界模糊且有争议的区域，是感知区/俗成区（perceptual / vernacular region）。正式区具有清晰、可测量的共同特征；功能区与结节区（同一类型）围绕中心节点组织——都不符合文化想象中的\"南方\"。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which best describes the effect of time-space compression on distance decay?",
                "zh": "下列哪项最能描述时空压缩对距离衰减的影响？"
              },
              "choices": [
                "It has no effect on distance decay.",
                "It strengthens distance decay everywhere equally.",
                "It weakens distance decay, but unevenly across places.",
                "It permanently eliminates distance decay for everyone."
              ],
              "answer": 2,
              "explanation": {
                "en": "Faster transport and communication reduce the friction of distance, weakening distance decay — but the benefits are uneven, concentrated in well-connected places while poorly connected areas remain relatively isolated. Saying it eliminates distance decay entirely (or affects everyone equally) overstates the effect; distance still matters, just less for the connected.",
                "zh": "更快的交通和通信减小了距离摩擦，削弱了距离衰减——但收益并不均衡，集中在联系紧密的地方，而联系薄弱的地区仍相对孤立。说它完全消除距离衰减（或对所有人影响相同）夸大了效果；距离仍然重要，只是对联系紧密者影响更小。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What two-word principle states that the interaction between two places declines as the distance between them increases? Answer with the term.",
                "zh": "哪个（英文两词）原理指出，两地之间的相互作用随其距离增大而减弱？请回答该术语。"
              },
              "answer": "distance decay",
              "accept": [
                "distance decay",
                "distance-decay"
              ],
              "explanation": {
                "en": "Distance decay captures the idea that near things interact more than distant things (Tobler's First Law). It explains why functional regions weaken outward from their node and why most of your daily interactions happen close to home.",
                "zh": "距离衰减（distance decay）表达了近处事物比远处事物相互作用更多的思想（托布勒第一定律）。它解释了为何功能区从节点向外减弱，以及为何你日常大部分的互动都发生在住所附近。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What type of region has one or more measurable characteristics shared uniformly throughout, such as a country or a wheat belt? Answer with the one-word type (its main name).",
                "zh": "哪种类型的区域在整个范围内一致地具有一种或多种可测量特征，例如一个国家或一个小麦带？请用一个词回答其类型（主要名称）。"
              },
              "answer": "formal",
              "accept": [
                "formal",
                "formal region",
                "uniform",
                "uniform region"
              ],
              "explanation": {
                "en": "A formal (also called uniform) region shares a measurable trait throughout and usually has clear boundaries. It contrasts with functional regions (organized around a node) and perceptual regions (defined by feelings).",
                "zh": "正式区（formal，又称均质区 uniform）在整个范围内具有可测量的共同特征，通常边界清晰。它与围绕节点组织的功能区、以及由情感界定的感知区形成对比。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term refers to the reduction in the time it takes for something to reach a distant place, caused by improvements in transportation and communication? Answer with the three-word (hyphenated) term.",
                "zh": "哪个术语指由于交通和通信的改进，使某事物到达遥远地方所需时间的缩短？请回答该（英文含连字符）术语。"
              },
              "answer": "time-space compression",
              "accept": [
                "time-space compression",
                "time space compression",
                "time-space convergence"
              ],
              "explanation": {
                "en": "Time-space compression describes how technology shrinks the friction of distance, making distant places feel closer. It weakens distance decay but does so unevenly, benefiting well-connected places most.",
                "zh": "时空压缩（time-space compression）描述技术如何缩小距离摩擦，使遥远的地方感觉更近。它削弱距离衰减，但并不均衡，最有利于联系紧密的地方。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-population-and-migration",
      "title": "Unit 2: Population and Migration Patterns and Processes",
      "titleZh": "第二单元：人口与迁移的格局与过程",
      "lessons": [
        {
          "id": "population-distribution-and-density",
          "title": "Population Distribution and Density",
          "titleZh": "人口分布与密度",
          "content": [
            {
              "type": "h2",
              "en": "Where People Live and Why",
              "zh": "人们居住在哪里，以及为什么"
            },
            {
              "type": "p",
              "en": "Population is distributed extremely unevenly across the Earth. Roughly two-thirds of the world's people live on about one-tenth of the land, and the great majority cluster in a few dense regions: East Asia, South Asia, Europe, and eastern North America. Understanding population distribution means asking not just where people are, but what physical and human factors pull them into some places and keep them out of others.",
              "zh": "世界人口在地球上的分布极不均衡。全球约三分之二的人口居住在大约十分之一的陆地上，绝大多数人集中在少数几个稠密区域：东亚、南亚、欧洲和北美东部。理解人口分布不仅要问人在哪里，还要问哪些自然与人文因素把人们吸引到某些地方，又把他们挡在另一些地方之外。"
            },
            {
              "type": "p",
              "en": "Geographers separate two related ideas. Distribution describes the pattern — the arrangement of people across space (clustered, dispersed, linear). Density describes the amount — how many people occupy a unit of land. A region can be evenly distributed but sparse, or highly clustered yet, on average, low-density. On the AP exam you must connect the pattern to the processes that produced it.",
              "zh": "地理学家区分两个相关概念。分布（distribution）描述的是格局——人们在空间中的排列方式（集聚、分散、线状）。密度（density）描述的是数量——单位土地上居住多少人。一个区域可以分布均匀但人口稀疏，也可以高度集聚但平均密度偏低。在 AP 考试中，你必须把格局与产生它的过程联系起来。"
            },
            {
              "type": "h3",
              "en": "Physical Factors",
              "zh": "自然因素"
            },
            {
              "type": "p",
              "en": "Physical geography sets the baseline for where dense settlement is possible. Historically, people have concentrated where the environment makes farming and survival easier.",
              "zh": "自然地理为稠密聚居的可能性设定了基础。历史上，人们往往集中在环境更有利于耕作和生存的地方。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Climate: Mid-latitude temperate zones with moderate temperatures and reliable rainfall attract dense settlement. Extremely dry (Sahara), cold (Siberia, Antarctica), or wet-tropical environments repel it. These sparsely settled zones are called nonecumene.",
                  "zh": "气候：中纬度温带地区气温温和、降水稳定，吸引稠密聚居。极端干旱（撒哈拉）、寒冷（西伯利亚、南极）或湿热的热带环境则排斥人口。这些人烟稀少的地带称为非生态区（nonecumene）。"
                },
                {
                  "en": "Landforms: Flat, low-lying plains and river valleys are easy to farm, build on, and travel across, so they draw people. Steep mountains and rugged terrain deter settlement.",
                  "zh": "地形：平坦、低海拔的平原和河谷易于耕作、建设和通行，因而吸引人口。陡峭的山地和崎岖地形则阻碍聚居。"
                },
                {
                  "en": "Water and soil: Fresh water for drinking and irrigation, plus fertile soil, are essential. This is why great river valleys — the Ganges, Nile, Yangtze, Indus — became population cores thousands of years ago.",
                  "zh": "水与土壤：可供饮用和灌溉的淡水，加上肥沃的土壤，至关重要。这正是恒河、尼罗河、长江、印度河等大河谷早在数千年前就成为人口核心区的原因。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Human Factors",
              "zh": "人文因素"
            },
            {
              "type": "p",
              "en": "Physical factors no longer fully determine where people live. In wealthy, technologically advanced societies, human factors increasingly reshape the map. Air conditioning, imported food, and irrigation let cities like Dubai, Phoenix, and Las Vegas thrive in deserts.",
              "zh": "自然因素已不再完全决定人们的居住地。在富裕、技术先进的社会中，人文因素越来越多地重塑人口地图。空调、进口食品和灌溉使迪拜、凤凰城和拉斯维加斯等城市得以在沙漠中繁荣。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Economic: Jobs draw people. Industrial and service economies concentrate population in cities regardless of local farmland — people migrate toward opportunity.",
                  "zh": "经济：就业机会吸引人口。工业和服务业经济不论当地是否有农田，都会把人口集中到城市——人们迁向机遇。"
                },
                {
                  "en": "Political: Stable government and security attract settlement; conflict and persecution empty regions. Governments can also relocate populations deliberately.",
                  "zh": "政治：稳定的政府与安全感吸引聚居；冲突与迫害则使地区人口流失。政府也可能有意迁移人口。"
                },
                {
                  "en": "Historical: Where settlement began early (early cities, colonial ports, transport hubs) often remains dense today because infrastructure and investment accumulate over time — a form of path dependence.",
                  "zh": "历史：早期开始聚居的地方（早期城市、殖民港口、交通枢纽）往往至今仍然稠密，因为基础设施和投资随时间不断积累——这是一种路径依赖。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Skill — Scale: Distribution looks different at different scales. At the global scale, humans cluster in four big regions. At the national scale, most countries have one or two dense cores and a sparse interior. At the local scale, a single city has dense downtowns and thin suburbs. Always state the scale you are analyzing.",
              "zh": "AP 技能——尺度：在不同尺度上，分布呈现出不同面貌。在全球尺度上，人类集中在四大区域。在国家尺度上，多数国家有一两个稠密核心和稀疏内陆。在地方尺度上，单个城市有稠密的市中心和稀薄的郊区。分析时务必说明你所用的尺度。"
            },
            {
              "type": "h2",
              "en": "Three Ways to Measure Density",
              "zh": "衡量密度的三种方法"
            },
            {
              "type": "p",
              "en": "Population density is not a single number. Geographers use three measures, each dividing population by a different kind of land. Each reveals something the others hide, so choosing the right one is a reasoning skill the exam tests directly.",
              "zh": "人口密度不是单一数字。地理学家使用三种衡量方法，每种都用人口除以不同类型的土地。每种方法都能揭示其他方法所掩盖的信息，因此选择正确的度量是考试直接考查的一项推理技能。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Arithmetic density = total population / total land area. It measures crowding overall. Useful for a rough comparison, but it treats a mountain and a rice paddy the same, so it can mislead.",
                  "zh": "算术密度 = 总人口 / 总土地面积。它衡量整体的拥挤程度。适合粗略比较，但它把高山和稻田等同看待，因而可能产生误导。"
                },
                {
                  "en": "Physiological density = total population / area of arable (farmable) land. It measures pressure on the land that actually produces food. A high value signals that farmland is intensely used and possibly strained.",
                  "zh": "生理密度（physiological density）= 总人口 / 可耕地面积。它衡量对真正能生产粮食的土地的压力。数值高意味着农田被高强度利用，可能已承受压力。"
                },
                {
                  "en": "Agricultural density = number of farmers / area of arable land. It measures how many farmers work the farmland. A high value suggests less efficient, more labor-intensive farming; a low value suggests mechanized, efficient agriculture and a more developed economy.",
                  "zh": "农业密度（agricultural density）= 农民人数 / 可耕地面积。它衡量有多少农民在耕种农田。数值高意味着农业效率较低、更依赖劳动力；数值低则意味着机械化、高效的农业和更发达的经济。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Trap: Do not confuse physiological and agricultural density. Physiological uses TOTAL population (pressure on food supply); agricultural uses only FARMERS (efficiency of farming). A rich country like the Netherlands can have high physiological density (many people, little farmland) yet very LOW agricultural density (few, highly mechanized farmers).",
              "zh": "AP 陷阱：不要混淆生理密度与农业密度。生理密度用的是总人口（对粮食供给的压力）；农业密度只用农民（耕作效率）。像荷兰这样的富国可以有很高的生理密度（人多、耕地少），却有很低的农业密度（农民很少且高度机械化）。"
            },
            {
              "type": "h3",
              "en": "Carrying Capacity",
              "zh": "环境承载力"
            },
            {
              "type": "p",
              "en": "Carrying capacity is the maximum population an environment can sustain given its resources and the technology used to exploit them. It is not fixed: irrigation, fertilizer, and new farming techniques can raise it, while soil exhaustion, drought, or overuse can lower it. Because technology changes it, carrying capacity is best understood as a relationship between people and environment, not a hard ceiling.",
              "zh": "环境承载力（carrying capacity）是指在既有资源和开发技术条件下，某一环境所能维持的最大人口。它并非固定不变：灌溉、化肥和新的耕作技术可以提高它，而土壤耗竭、干旱或过度使用则会降低它。由于技术会改变承载力，最好把它理解为人与环境之间的关系，而非一道硬性上限。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Choosing the Right Density Measure",
                "zh": "例题 1：选择正确的密度度量"
              },
              "problem": {
                "en": "Egypt has a huge desert but nearly all its people live along the Nile. Which density measure best captures the pressure Egyptians place on their usable land, and why?",
                "zh": "埃及拥有广袤的沙漠，但几乎所有人都居住在尼罗河沿岸。哪种密度度量最能反映埃及人对其可用土地施加的压力？为什么？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use physiological density. Arithmetic density (people / total area) would look deceptively low because the enormous desert dilutes the average, hiding the real crowding. Physiological density (people / arable land) divides the population by only the thin ribbon of farmable Nile valley, revealing the intense pressure on the land that actually feeds the country. This is the classic AP example: a country with modest arithmetic density but extremely high physiological density.",
                  "zh": "应使用生理密度。算术密度（人口 / 总面积）会显得低得具有迷惑性，因为巨大的沙漠稀释了平均值，掩盖了真实的拥挤。生理密度（人口 / 可耕地）只用尼罗河谷那条狭窄的可耕带来除人口，从而揭示出对真正养活全国的土地所施加的巨大压力。这是经典的 AP 例子：一个算术密度不高、但生理密度极高的国家。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading Agricultural Density",
                "zh": "例题 2：解读农业密度"
              },
              "problem": {
                "en": "Country A has an agricultural density of 200 farmers per square kilometer of farmland; Country B has 3. What does this contrast suggest about their economies?",
                "zh": "甲国的农业密度为每平方公里农田 200 名农民；乙国为 3 名。这一对比说明了两国经济的什么特点？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Low agricultural density (Country B) means very few farmers feed the population, which implies mechanized, capital-intensive agriculture and, usually, a more developed economy with most workers in industry and services. High agricultural density (Country A) implies labor-intensive subsistence or traditional farming and a less developed economy. The reasoning move is: fewer farmers per unit of land = greater efficiency = higher development.",
                  "zh": "低农业密度（乙国）意味着极少数农民就能养活全国人口，这暗示机械化、资本密集型农业，通常还意味着更发达的经济，大多数劳动力从事工业和服务业。高农业密度（甲国）则意味着劳动密集型的自给或传统农业以及较不发达的经济。推理思路是：单位土地上的农民越少 = 效率越高 = 发展水平越高。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which combination of factors best explains why South Asia's Ganges valley has been densely populated for millennia?",
                "zh": "哪一组因素最能解释南亚恒河谷地为何数千年来人口稠密？"
              },
              "choices": [
                "Cold climate and mountainous terrain",
                "Government relocation programs and air conditioning",
                "Rich mineral deposits and a coastal location",
                "Fertile alluvial soil, fresh water, and flat land"
              ],
              "answer": 3,
              "explanation": {
                "en": "River valleys like the Ganges combine flat land, reliable fresh water, and fertile soil deposited by flooding — the physical conditions that support intensive agriculture and dense settlement. Cold or mountainous conditions repel population; minerals and modern technology are not why the valley was settled thousands of years ago.",
                "zh": "像恒河这样的河谷同时具备平坦的土地、稳定的淡水以及洪水沉积的肥沃土壤——这些自然条件支撑集约化农业和稠密聚居。寒冷或多山条件会排斥人口；矿产和现代技术并非数千年前该谷地被开发的原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A country has a low arithmetic density but a very high physiological density. What can you conclude?",
                "zh": "某国算术密度低，但生理密度很高。你能得出什么结论？"
              },
              "choices": [
                "It has abundant farmland relative to its population",
                "It is one of the least crowded countries on Earth",
                "Its farmers are highly mechanized and efficient",
                "Most of its land is unusable, concentrating people on limited arable land"
              ],
              "answer": 3,
              "explanation": {
                "en": "Low arithmetic (people / all land) with high physiological (people / arable land) means much of the land cannot be farmed — desert, mountain, ice — so the population is squeezed onto a small share of usable land. Egypt is the textbook case. Agricultural density, not physiological, would speak to mechanization.",
                "zh": "算术密度低（人口 / 全部土地）而生理密度高（人口 / 可耕地），意味着大量土地无法耕种——沙漠、山地、冰原——因此人口被挤在很小一部分可用土地上。埃及是典型例子。谈机械化的是农业密度，而非生理密度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which measure would a geographer use to compare the efficiency of farming between two countries?",
                "zh": "地理学家会用哪种度量来比较两国农业的效率？"
              },
              "choices": [
                "Arithmetic density",
                "Physiological density",
                "Agricultural density",
                "Carrying capacity"
              ],
              "answer": 2,
              "explanation": {
                "en": "Agricultural density (farmers / arable land) directly reflects how many people it takes to work the land, so a low value signals efficient, mechanized farming. Arithmetic and physiological density measure crowding, not efficiency; carrying capacity is a limit, not a per-farmer ratio.",
                "zh": "农业密度（农民 / 可耕地）直接反映耕种土地需要多少人，因此数值低意味着高效、机械化的农业。算术密度和生理密度衡量的是拥挤程度，而非效率；承载力是一个上限，而非人均农民比率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The existence of large cities in desert regions such as Phoenix and Dubai best illustrates that",
                "zh": "凤凰城、迪拜等沙漠地区出现大城市，最能说明"
              },
              "choices": [
                "physical factors are the only true limit on where people can live",
                "arithmetic density is the most useful density measure",
                "deserts have always had high carrying capacities",
                "human factors and technology can override physical constraints on settlement"
              ],
              "answer": 3,
              "explanation": {
                "en": "Air conditioning, imported food, and long-distance water transfer let dense populations thrive where climate would otherwise repel them, showing that human factors and technology can override physical constraints. It does not mean deserts were always habitable; it means technology raised their effective carrying capacity.",
                "zh": "空调、进口食品和远距离调水使稠密人口得以在原本因气候而排斥人口的地方繁荣，说明人文因素和技术可以突破自然约束。这并不意味着沙漠一向宜居，而是说明技术提高了它们的有效承载力。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about carrying capacity is most accurate?",
                "zh": "关于环境承载力，下列哪种说法最准确？"
              },
              "choices": [
                "It is a permanently fixed number for each region",
                "It depends only on the amount of arable land",
                "It can rise or fall as technology and resource use change",
                "It is the same as arithmetic density"
              ],
              "answer": 2,
              "explanation": {
                "en": "Carrying capacity is dynamic: irrigation, fertilizers, and new techniques raise it, while soil exhaustion or overuse lower it. It is not fixed, is not determined by land alone, and is a limit — not a density calculation like arithmetic density.",
                "zh": "承载力是动态的：灌溉、化肥和新技术会提高它，土壤耗竭或过度使用会降低它。它不是固定的，不由土地单独决定，而且是一个上限——不同于算术密度那样的密度计算。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes the permanently inhabited portion of the Earth's surface? Answer with the one-word term.",
                "zh": "哪个术语描述地球表面永久有人居住的部分？请用一个词回答。"
              },
              "answer": "ecumene",
              "accept": [
                "ecumene",
                "oecumene"
              ],
              "explanation": {
                "en": "The ecumene is the portion of the Earth that is permanently settled by humans. Its opposite, the sparsely settled or uninhabited zone, is the nonecumene.",
                "zh": "生态区（ecumene）是地球上被人类永久聚居的部分。其反面，即人烟稀少或无人居住的地带，称为非生态区（nonecumene）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Population divided by the area of arable land gives which density measure? Answer with the two-word term.",
                "zh": "人口除以可耕地面积得到的是哪种密度度量？请用中文术语（两个词）或英文回答。"
              },
              "answer": "physiological density",
              "accept": [
                "physiological density",
                "physiologic density",
                "生理密度"
              ],
              "explanation": {
                "en": "Physiological density = total population / arable land. It measures the pressure a population places on the land that can grow its food, unlike arithmetic density, which uses all land.",
                "zh": "生理密度 = 总人口 / 可耕地。它衡量人口对能够生产其粮食的土地所施加的压力，不同于使用全部土地的算术密度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the maximum population an environment can support with its available resources called? Answer with the two-word term.",
                "zh": "在既有资源条件下，某一环境所能维持的最大人口称为什么？请用术语回答。"
              },
              "answer": "carrying capacity",
              "accept": [
                "carrying capacity",
                "承载力",
                "环境承载力"
              ],
              "explanation": {
                "en": "Carrying capacity is the maximum number of people an environment can sustain given its resources and technology. It changes as technology and resource use change.",
                "zh": "承载力是指在既有资源和技术条件下，某一环境所能维持的最大人口数量。它随技术和资源利用方式的变化而变化。"
              }
            }
          ]
        },
        {
          "id": "population-composition-and-dynamics",
          "title": "Population Composition and Dynamics",
          "titleZh": "人口构成与动态",
          "content": [
            {
              "type": "h2",
              "en": "Reading a Population",
              "zh": "解读一个人口"
            },
            {
              "type": "p",
              "en": "A country's population is not just a total — it has a structure. Population composition describes the makeup of a population by age and sex, and demographers use it, together with rates of birth and death, to predict a country's future: whether it will grow or shrink, whether it faces a youth bulge or an aging crisis, and what social spending it will need.",
              "zh": "一个国家的人口不只是一个总数——它有结构。人口构成（population composition）描述人口按年龄和性别的组成，人口学家将它与出生率、死亡率结合起来，用以预测一个国家的未来：它会增长还是萎缩、面临青年膨胀还是老龄化危机、以及需要怎样的社会支出。"
            },
            {
              "type": "h3",
              "en": "Population Pyramids",
              "zh": "人口金字塔"
            },
            {
              "type": "p",
              "en": "A population pyramid (age-sex structure diagram) is a pair of back-to-back bar graphs showing the percentage of a population in each five-year age cohort, males on one side and females on the other. Its shape is a fingerprint of a country's demographic situation.",
              "zh": "人口金字塔（population pyramid，即年龄—性别结构图）是一对背靠背的条形图，显示每五岁年龄组占人口的百分比，男性在一侧，女性在另一侧。它的形状是一个国家人口状况的\"指纹\"。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A wide base with steep sides means high birth rates and a young, rapidly growing population (typical of less developed countries).",
                  "zh": "底部宽、两侧陡峭，意味着高出生率和年轻、快速增长的人口（较不发达国家的典型特征）。"
                },
                {
                  "en": "A pyramid with roughly vertical sides (like a column) means low birth rates and slow or stable growth (typical of developed countries).",
                  "zh": "两侧近乎竖直（像一根柱子）的金字塔，意味着低出生率、增长缓慢或稳定（发达国家的典型特征）。"
                },
                {
                  "en": "A narrow base means birth rates have fallen below replacement — the population is aging and may soon decline (Japan, Germany, Italy).",
                  "zh": "底部狭窄意味着出生率已跌破更替水平——人口正在老龄化，并可能很快开始下降（日本、德国、意大利）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The dependency ratio is the number of people too young (0-14) or too old (65+) to work, compared to the working-age population (15-64). A high dependency ratio strains workers and government budgets. A country can have a high youth dependency (many children) or a high elderly dependency (many retirees) — the policy problems differ sharply.",
              "zh": "抚养比（dependency ratio）是过于年幼（0—14 岁）或过于年老（65 岁以上）而无法工作的人口与劳动年龄人口（15—64 岁）之比。抚养比高会加重劳动者和政府预算的负担。一个国家可能是高少儿抚养比（儿童多）或高老年抚养比（退休者多）——两者带来的政策难题截然不同。"
            },
            {
              "type": "note",
              "en": "AP Skill: A bulge in the pyramid at working ages, often from labor in-migration (e.g., Gulf states like the UAE), produces a lopsided male-heavy shape. Always ask what social or economic process a pyramid's unusual shape reveals — war, migration, a baby boom, or a one-child policy each leave a distinct signature.",
              "zh": "AP 技能：金字塔在劳动年龄段出现膨胀，往往源于劳动力迁入（如阿联酋等海湾国家），会形成男性偏多的失衡形状。始终追问金字塔的异常形状揭示了什么社会或经济过程——战争、迁移、婴儿潮或独生子女政策各自留下独特的印记。"
            },
            {
              "type": "h2",
              "en": "The Four Key Rates",
              "zh": "四个关键指标"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Crude Birth Rate (CBR): live births per 1,000 people per year.",
                  "zh": "粗出生率（CBR）：每年每 1000 人的活产婴儿数。"
                },
                {
                  "en": "Crude Death Rate (CDR): deaths per 1,000 people per year.",
                  "zh": "粗死亡率（CDR）：每年每 1000 人的死亡数。"
                },
                {
                  "en": "Natural Increase Rate (NIR): the percentage a population grows in a year from births minus deaths, NOT counting migration. NIR = (CBR - CDR) / 10, expressed as a percent.",
                  "zh": "自然增长率（NIR）：一年中人口因出生减去死亡而增长的百分比，不计迁移。NIR =（CBR - CDR）/ 10，以百分比表示。"
                },
                {
                  "en": "Total Fertility Rate (TFR): the average number of children a woman will have in her lifetime. A TFR of about 2.1 is replacement level — the level that keeps a population stable without migration.",
                  "zh": "总和生育率（TFR）：一名妇女一生平均生育的子女数。约 2.1 的 TFR 是更替水平——在不计迁移的情况下使人口保持稳定的水平。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Trap: NIR ignores migration; overall population change also includes net migration. A country with negative NIR (deaths exceed births) can still grow if immigration is high enough (e.g., Germany). Do not equate NIR with total population growth.",
              "zh": "AP 陷阱：自然增长率不计迁移；整体人口变化还包括净迁移。一个自然增长率为负（死亡多于出生）的国家，若移民流入足够多，仍可增长（如德国）。切勿把自然增长率等同于总人口增长。"
            },
            {
              "type": "h2",
              "en": "The Demographic Transition Model (DTM)",
              "zh": "人口转变模型（DTM）"
            },
            {
              "type": "p",
              "en": "The DTM describes how a country's birth and death rates change as it develops and industrializes, moving through predictable stages. It is a model — a simplification based mainly on the historical experience of Western Europe — so it describes trends, not laws.",
              "zh": "DTM 描述一个国家在发展和工业化过程中，其出生率和死亡率如何经历可预测的阶段变化。它是一个模型——主要基于西欧的历史经验所做的简化——因此它描述的是趋势，而非规律。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Stage 1 (Low Growth): Both CBR and CDR are high and fluctuate, so NIR is near zero. Pre-industrial societies; no country is fully in Stage 1 today.",
                  "zh": "第一阶段（低增长）：粗出生率和粗死亡率都高且波动，因此自然增长率接近零。前工业社会；今天没有国家完全处于第一阶段。"
                },
                {
                  "en": "Stage 2 (High Growth): CDR drops sharply (better food, sanitation, medicine) while CBR stays high, so NIR soars. Populations explode (much of Sub-Saharan Africa).",
                  "zh": "第二阶段（高增长）：粗死亡率急剧下降（食物、卫生、医疗改善），而粗出生率仍高，因此自然增长率飙升。人口爆炸（撒哈拉以南非洲大部分地区）。"
                },
                {
                  "en": "Stage 3 (Moderating Growth): CBR falls (urbanization, education, women in the workforce, contraception) toward the low CDR, so NIR slows (Mexico, India).",
                  "zh": "第三阶段（增长放缓）：粗出生率下降（城市化、教育、妇女进入劳动力市场、避孕）向低死亡率靠拢，因此自然增长率放缓（墨西哥、印度）。"
                },
                {
                  "en": "Stage 4 (Low Growth): Both CBR and CDR are low, so NIR is near zero and population stabilizes (United States, China).",
                  "zh": "第四阶段（低增长）：粗出生率和粗死亡率都低，因此自然增长率接近零，人口趋于稳定（美国、中国）。"
                },
                {
                  "en": "Stage 5 (Declining, proposed): CBR falls below CDR; NIR turns negative and population shrinks and ages (Japan, Germany, Italy).",
                  "zh": "第五阶段（下降，属于提议阶段）：粗出生率跌破粗死亡率；自然增长率转为负值，人口萎缩且老龄化（日本、德国、意大利）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The pyramids match the stages: Stage 2 has the widest base, Stage 4 is column-shaped, and Stage 5 has a narrow, top-heavy base. Being able to match a pyramid to a DTM stage and name the processes behind the change is a core exam skill.",
              "zh": "金字塔与各阶段相对应：第二阶段底部最宽，第四阶段呈柱状，第五阶段底部狭窄、上部偏重。能够把金字塔与 DTM 阶段对应起来，并说出变化背后的过程，是一项核心考试技能。"
            },
            {
              "type": "h3",
              "en": "The Epidemiological Transition Model",
              "zh": "流行病学转变模型"
            },
            {
              "type": "p",
              "en": "The Epidemiological Transition Model (Abdel Omran) parallels the DTM but focuses on the causes of death at each stage. In Stage 1, infectious and parasitic diseases and famine dominate (the Black Death). In Stage 2, medicine and sanitation curb epidemics. By Stages 4 and 5, chronic and degenerative diseases of aging — heart disease, cancer — become the main killers. A proposed later phase warns of re-emerging infectious diseases (new strains, antibiotic resistance) spread by globalization.",
              "zh": "流行病学转变模型（Abdel Omran 提出）与 DTM 相对应，但聚焦于各阶段的死亡原因。在第一阶段，传染病、寄生虫病和饥荒占主导（黑死病）。在第二阶段，医学和卫生条件遏制了流行病。到了第四、五阶段，衰老引起的慢性和退行性疾病——心脏病、癌症——成为主要死因。一个提议的后期阶段警告：由全球化传播的传染病可能重新出现（新毒株、抗生素耐药性）。"
            },
            {
              "type": "h2",
              "en": "Malthus and His Critics",
              "zh": "马尔萨斯及其批评者"
            },
            {
              "type": "p",
              "en": "In 1798 Thomas Malthus argued that population grows exponentially (geometrically) while food supply grows only arithmetically (linearly), so population would inevitably outrun resources, producing famine, disease, and war — checks that would reduce the population. His prediction has so far failed because he underestimated agricultural technology (the Industrial and later Green Revolutions) and the fall in birth rates that came with development.",
              "zh": "1798 年，托马斯·马尔萨斯（Thomas Malthus）主张人口呈指数（几何级数）增长，而粮食供给只呈算术（线性）增长，因此人口必然超过资源，导致饥荒、疾病和战争——这些抑制因素会削减人口。他的预言迄今未能应验，因为他低估了农业技术（工业革命及后来的绿色革命）以及随发展而来的出生率下降。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Neo-Malthusians update his warning, arguing that rapid growth in poor countries strains not just food but water, energy, and the environment, and that resource depletion is a real limit.",
                  "zh": "新马尔萨斯主义者（neo-Malthusians）更新了他的警告，认为贫穷国家的快速增长不仅给粮食、也给水、能源和环境带来压力，资源枯竭是一个真实的极限。"
                },
                {
                  "en": "Ester Boserup countered that population growth spurs innovation: more people create the pressure and the labor to intensify agriculture and invent new techniques, so \"necessity is the mother of invention.\" Food supply responds to population, not the reverse.",
                  "zh": "埃斯特·博塞拉普（Ester Boserup）则反驳说，人口增长会激发创新：人口越多，越会形成压力和劳动力去集约化农业、发明新技术，即\"需要是发明之母\"。粮食供给回应人口，而非相反。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Population Policies",
              "zh": "人口政策"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Anti-natalist policies aim to lower birth rates, used where growth strains resources. China's One-Child Policy (1979-2015) is the classic example; it slowed growth but produced an aging population and a skewed sex ratio from son preference.",
                  "zh": "限制生育（anti-natalist）政策旨在降低出生率，用于增长给资源带来压力的地方。中国的独生子女政策（1979—2015）是典型例子；它减缓了增长，却造成人口老龄化，并因重男轻女而导致性别比失衡。"
                },
                {
                  "en": "Pro-natalist policies aim to raise birth rates, used where populations are aging and shrinking. France, Japan, and Sweden offer cash bonuses, parental leave, and childcare to encourage larger families, with mixed success.",
                  "zh": "鼓励生育（pro-natalist）政策旨在提高出生率，用于人口老龄化和萎缩的地方。法国、日本和瑞典提供现金奖励、育儿假和托育服务以鼓励生育更多子女，成效不一。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Placing a Country on the DTM",
                "zh": "例题 1：把一个国家定位到 DTM 上"
              },
              "problem": {
                "en": "A country's CDR has fallen dramatically over 30 years while its CBR remains high, giving it a very high NIR and a wide-based pyramid. Which DTM stage is it in, and what process explains the change?",
                "zh": "某国 30 年间粗死亡率大幅下降，而粗出生率仍然很高，使其自然增长率很高、金字塔底部很宽。它处于 DTM 的哪个阶段？什么过程解释了这一变化？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "It is in Stage 2. The falling CDR with a still-high CBR produces the population explosion that defines Stage 2. The process is a drop in mortality — from improved sanitation, clean water, food supply, and medicine (vaccines, antibiotics) — that death rates fall before cultural attitudes toward family size have changed. Birth rates lag behind because large families remain economically and culturally valued.",
                  "zh": "它处于第二阶段。粗死亡率下降而粗出生率仍高，产生了定义第二阶段的人口爆炸。其过程是死亡率下降——源于卫生条件、清洁水源、食物供给和医疗（疫苗、抗生素）的改善——死亡率先于家庭规模的文化观念而下降。出生率滞后，是因为大家庭在经济和文化上仍受重视。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Malthus vs. Boserup",
                "zh": "例题 2：马尔萨斯 vs. 博塞拉普"
              },
              "problem": {
                "en": "A region's population doubles, and within a generation farmers adopt irrigation and multiple-cropping, raising yields enough to feed everyone. Whose theory does this support, and why?",
                "zh": "某地区人口翻倍，一代人之内农民采用灌溉和一年多熟，产量提高到足以养活所有人。这支持谁的理论？为什么？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This supports Boserup. She argued that population pressure is the trigger for agricultural innovation: rising numbers force and enable people to work the land more intensively and adopt new methods, so food output rises to meet demand. Malthus predicted the opposite — that the fixed, slow growth of food would cap population and force a crisis. Here, food supply responded to population growth, exactly Boserup's claim.",
                  "zh": "这支持博塞拉普。她认为人口压力是农业创新的触发器：人口增加迫使并促使人们更集约地耕作土地、采用新方法，于是粮食产出上升以满足需求。马尔萨斯的预测恰恰相反——粮食固定而缓慢的增长会给人口设限并引发危机。此处粮食供给回应了人口增长，正是博塞拉普的主张。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A population pyramid with a very wide base and rapidly narrowing sides indicates a country that is",
                "zh": "一个底部很宽、两侧迅速收窄的人口金字塔，表明该国"
              },
              "choices": [
                "aging with a low birth rate",
                "in Stage 5 of the DTM",
                "experiencing heavy elderly dependency",
                "young and growing rapidly with a high birth rate"
              ],
              "answer": 3,
              "explanation": {
                "en": "A wide base means many children — a high CBR and rapid growth, typical of a Stage 2 country. An aging, low-birth-rate country (Stage 5) has a narrow base and heavy top, the opposite shape; elderly dependency also shows as a wide top, not a wide base.",
                "zh": "底部宽意味着儿童多——高粗出生率和快速增长，是第二阶段国家的典型特征。老龄化、低出生率的国家（第五阶段）底部狭窄、上部偏重，形状相反；老年抚养负担也表现为上部宽，而非底部宽。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In which DTM stage does the death rate fall sharply while the birth rate remains high, causing rapid population growth?",
                "zh": "在 DTM 的哪个阶段，死亡率急剧下降而出生率仍高，导致人口快速增长？"
              },
              "choices": [
                "Stage 1",
                "Stage 5",
                "Stage 4",
                "Stage 2"
              ],
              "answer": 3,
              "explanation": {
                "en": "Stage 2 is defined by a sharp fall in CDR (from sanitation, food, and medicine) while CBR stays high, producing the highest NIR. Stage 1 has both rates high; Stage 4 has both low; Stage 5 has births below deaths.",
                "zh": "第二阶段的定义是粗死亡率急剧下降（源于卫生、食物和医疗），而粗出生率仍高，产生最高的自然增长率。第一阶段两率都高；第四阶段两率都低；第五阶段出生低于死亡。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Ester Boserup's response to Malthus argued that",
                "zh": "埃斯特·博塞拉普对马尔萨斯的回应主张"
              },
              "choices": [
                "population will always outstrip food supply",
                "population growth stimulates agricultural innovation that increases food supply",
                "governments must impose strict anti-natalist policies",
                "food supply grows exponentially while population grows arithmetically"
              ],
              "answer": 1,
              "explanation": {
                "en": "Boserup held that rising population pressure drives people to intensify farming and invent new techniques, so food supply expands to meet the population — \"necessity is the mother of invention.\" Choice A restates Malthus; C is a policy, not Boserup's theory; D inverts Malthus's own claim.",
                "zh": "博塞拉普认为不断上升的人口压力促使人们集约化耕作、发明新技术，于是粮食供给随人口扩大——\"需要是发明之母\"。选项 A 是在复述马尔萨斯；C 是一项政策，而非博塞拉普的理论；D 把马尔萨斯本人的主张颠倒了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which policy would a country in DTM Stage 5 with a shrinking, aging population most likely adopt?",
                "zh": "一个处于 DTM 第五阶段、人口萎缩且老龄化的国家，最可能采取哪种政策？"
              },
              "choices": [
                "A one-child policy",
                "Restrictions on immigration and childbearing",
                "Forced sterilization",
                "Pro-natalist incentives such as baby bonuses and parental leave"
              ],
              "answer": 3,
              "explanation": {
                "en": "A shrinking, aging population (Stage 5) needs more births, so pro-natalist incentives — cash bonuses, parental leave, childcare — are the logical policy (France, Japan). One-child policies and sterilization are anti-natalist, appropriate only where growth is too high.",
                "zh": "萎缩、老龄化的人口（第五阶段）需要更多出生，因此鼓励生育的激励——现金奖励、育儿假、托育——是合乎逻辑的政策（法国、日本）。独生子女政策和绝育属于限制生育，只适用于增长过快的地方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The Epidemiological Transition Model differs from the DTM in that it focuses specifically on",
                "zh": "流行病学转变模型与 DTM 的不同之处在于，它专门聚焦于"
              },
              "choices": [
                "the causes of death at each stage of development",
                "the total fertility rate",
                "net migration between countries",
                "the age-sex structure of a population"
              ],
              "answer": 0,
              "explanation": {
                "en": "The Epidemiological Transition Model (Omran) tracks the distinctive causes of death at each stage — infectious disease and famine early, chronic degenerative diseases later. TFR, migration, and age-sex structure belong to other demographic tools, not this model.",
                "zh": "流行病学转变模型（Omran）追踪各阶段特有的死亡原因——早期是传染病和饥荒，后期是慢性退行性疾病。总和生育率、迁移和年龄—性别结构属于其他人口工具，而非该模型。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the average number of children a woman is expected to have in her lifetime called? Answer with the three-word term.",
                "zh": "一名妇女一生预期生育的平均子女数称为什么？请用术语回答。"
              },
              "answer": "total fertility rate",
              "accept": [
                "total fertility rate",
                "tfr",
                "总和生育率"
              ],
              "explanation": {
                "en": "Total fertility rate (TFR) is the average number of children per woman; a TFR near 2.1 is replacement level. It differs from CBR, which counts births per 1,000 total population.",
                "zh": "总和生育率（TFR）是每名妇女平均生育的子女数；约 2.1 的 TFR 为更替水平。它不同于按每 1000 总人口计算出生数的粗出生率。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the ratio of people too young or too old to work compared to the working-age population called? Answer with the two-word term.",
                "zh": "过于年幼或年老而无法工作的人口与劳动年龄人口之比称为什么？请用两个字的术语回答。"
              },
              "answer": "dependency ratio",
              "accept": [
                "dependency ratio",
                "抚养比",
                "受抚养比"
              ],
              "explanation": {
                "en": "The dependency ratio compares dependents (ages 0-14 and 65+) to the working-age population (15-64). A high ratio strains workers and public budgets.",
                "zh": "抚养比将受抚养者（0—14 岁和 65 岁以上）与劳动年龄人口（15—64 岁）相比较。比率高会加重劳动者和公共预算的负担。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Who was the 1798 thinker who predicted population would outgrow food supply? Answer with the surname.",
                "zh": "1798 年预言人口将超过粮食供给的思想家是谁？请用姓氏回答。"
              },
              "answer": "Malthus",
              "accept": [
                "malthus",
                "thomas malthus",
                "马尔萨斯"
              ],
              "explanation": {
                "en": "Thomas Malthus argued population grows exponentially while food grows arithmetically, forecasting famine. Neo-Malthusians revived the warning; Boserup rejected it.",
                "zh": "托马斯·马尔萨斯主张人口呈指数增长而粮食呈算术增长，预言饥荒。新马尔萨斯主义者复兴了这一警告；博塞拉普则予以否定。"
              }
            }
          ]
        },
        {
          "id": "migration-patterns-and-processes",
          "title": "Migration Patterns and Processes",
          "titleZh": "迁移的格局与过程",
          "content": [
            {
              "type": "h2",
              "en": "Why People Move",
              "zh": "人们为何迁移"
            },
            {
              "type": "p",
              "en": "Migration is a permanent or long-term move to a new location, a subset of the broader term mobility (which includes daily and seasonal movement). Because migration reshapes both the places people leave and the places they arrive, it is one of the most powerful processes in human geography. Every migration is driven by a combination of push factors that repel people from their origin and pull factors that attract them to a destination.",
              "zh": "迁移（migration）是永久或长期地迁往新地点，是更广义的\"流动性\"（mobility，包括每日和季节性移动）的一个子集。由于迁移同时重塑人们离开的地方和到达的地方，它是人文地理中最强大的过程之一。每一次迁移都由推力（push factors，把人从原居地驱离）和拉力（pull factors，把人吸引到目的地）共同驱动。"
            },
            {
              "type": "h3",
              "en": "Push and Pull Factors",
              "zh": "推力与拉力"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Economic: the most common driver. Lack of jobs pushes; better wages and opportunity pull. Most voluntary migration is economic.",
                  "zh": "经济：最常见的驱动因素。缺乏工作是推力；更高的工资和机会是拉力。大多数自愿迁移属于经济性迁移。"
                },
                {
                  "en": "Social/cultural: religious or ethnic persecution and discrimination push; family reunification and cultural freedom pull.",
                  "zh": "社会/文化：宗教或族群迫害与歧视是推力；家庭团聚和文化自由是拉力。"
                },
                {
                  "en": "Political: war, persecution, and lack of political freedom push; safety, stability, and rights pull. These often create refugees.",
                  "zh": "政治：战争、迫害和缺乏政治自由是推力；安全、稳定和权利是拉力。这类因素常造就难民。"
                },
                {
                  "en": "Environmental: natural hazards, drought, flooding, and (increasingly) climate change push; attractive climates and landscapes pull.",
                  "zh": "环境：自然灾害、干旱、洪水以及日益加剧的气候变化是推力；宜人的气候和景观是拉力。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Tip: A pull factor at the destination usually mirrors a push factor at the origin (no jobs at home / jobs abroad). But do not assume every migrant is fleeing the worst conditions — the very poorest often lack the resources to move at all, so migrants are frequently people with some means and information.",
              "zh": "AP 提示：目的地的拉力通常与原居地的推力相互对应（家里没工作／国外有工作）。但不要以为每个移民都在逃离最恶劣的条件——最贫困的人往往连迁移的资源都没有，因此移民常常是拥有一定财力和信息的人。"
            },
            {
              "type": "h3",
              "en": "Ravenstein's Laws of Migration",
              "zh": "雷文斯坦的迁移法则"
            },
            {
              "type": "p",
              "en": "In the 1880s E.G. Ravenstein derived empirical generalizations about migration that still hold. Key ones the exam expects:",
              "zh": "19 世纪 80 年代，E.G. 雷文斯坦（Ravenstein）总结出至今仍然成立的迁移经验性概括。考试要求掌握的关键几条："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Most migrants travel only a short distance, and long-distance migrants tend to head for major economic centers.",
                  "zh": "大多数移民只迁移较短距离，而长距离移民往往前往主要经济中心。"
                },
                {
                  "en": "Migration occurs in steps, and most is rural-to-urban.",
                  "zh": "迁移是分步进行的，且多为乡村到城市。"
                },
                {
                  "en": "Each migration stream produces a counterstream in the opposite direction.",
                  "zh": "每一股迁移流都会产生一股方向相反的回流。"
                },
                {
                  "en": "Most migrants are young adult males (a generalization revised today, as women migrate in large numbers), and migration increases with economic development and transport.",
                  "zh": "大多数移民是年轻的成年男性（这一概括如今已被修正，因为女性也大量迁移），而迁移随经济发展和交通改善而增加。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Ravenstein's idea that most migrants go short distances reflects distance decay — the tendency for interaction to weaken as distance increases. It also underlies the gravity model, which predicts that migration between two places is proportional to their populations and inversely related to the distance between them.",
              "zh": "雷文斯坦关于多数移民迁移短距离的观点体现了距离衰减（distance decay）——互动随距离增加而减弱的趋势。它也是引力模型（gravity model）的基础，该模型预测两地之间的迁移量与两地人口成正比、与两地间距离成反比。"
            },
            {
              "type": "h2",
              "en": "Types of Migration",
              "zh": "迁移的类型"
            },
            {
              "type": "p",
              "en": "The most important distinction is voluntary versus forced migration. Voluntary migrants choose to move, usually for economic or social reasons. Forced migration means people are compelled to leave, with no real choice — the transatlantic slave trade and the Trail of Tears are historical examples; refugees fleeing war are a modern one.",
              "zh": "最重要的区分是自愿迁移与强迫迁移。自愿移民（voluntary）出于自身选择而迁移，通常出于经济或社会原因。强迫迁移（forced）指人们被迫离开、别无真正选择——跨大西洋奴隶贸易和\"血泪之路\"（Trail of Tears）是历史例子；逃离战争的难民是现代例子。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "International migration crosses a national border; internal migration moves within a country (e.g., the U.S. Sun Belt shift). Internal is far more common.",
                  "zh": "国际迁移（international）跨越国界；国内迁移（internal）在一国之内移动（如美国向阳光地带的迁移）。国内迁移远为常见。"
                },
                {
                  "en": "Transnational migration: migrants maintain strong ties to both origin and destination, moving between and identifying with both.",
                  "zh": "跨国迁移（transnational）：移民与原居地和目的地都保持紧密联系，往返于两地并认同两地。"
                },
                {
                  "en": "Chain migration: migrants move to where relatives or people from their home community have already settled, building ethnic enclaves.",
                  "zh": "链式迁移（chain）：移民迁往已有亲属或同乡定居的地方，形成族裔聚居区。"
                },
                {
                  "en": "Step migration: migration in a series of stages (village to town to city to capital) rather than one leap.",
                  "zh": "分段迁移（step）：分阶段进行的迁移（乡村到城镇到城市到首都），而非一步到位。"
                },
                {
                  "en": "Guest workers: migrants admitted temporarily to fill labor shortages (e.g., Turkish workers in Germany, South Asian workers in the Gulf).",
                  "zh": "客籍工人（guest workers）：为填补劳动力短缺而临时接纳的移民（如德国的土耳其工人、海湾的南亚工人）。"
                },
                {
                  "en": "Refugees flee their country from a well-founded fear of persecution and cross a border; internally displaced persons (IDPs) are forced from their homes but remain within their own country.",
                  "zh": "难民（refugees）因有理由担心迫害而逃离本国、跨越国界；国内流离失所者（IDPs）被迫离开家园但仍留在本国境内。"
                },
                {
                  "en": "Rural-to-urban migration is the dominant internal flow worldwide, driving urbanization in developing countries.",
                  "zh": "乡村到城市迁移（rural-to-urban）是全球主导的国内迁移流，推动发展中国家的城市化。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Trap: A refugee has crossed an international border; an IDP has NOT. Both flee danger, but only the refugee is outside their home country. This legal distinction (from the UN definition) is frequently tested.",
              "zh": "AP 陷阱：难民已跨越国界；国内流离失所者没有。两者都在逃离危险，但只有难民身处本国境外。这一法律区分（源自联合国定义）经常被考查。"
            },
            {
              "type": "h3",
              "en": "Intervening Obstacles and Opportunities",
              "zh": "中介障碍与中介机遇"
            },
            {
              "type": "p",
              "en": "Between origin and destination lie intervening obstacles — barriers that hinder migration, such as mountains, oceans, border walls, visa laws, or the cost of the journey. There are also intervening opportunities — a favorable circumstance encountered along the way (a job, a welcoming community) that causes a migrant to stop short of the original destination. A good opportunity partway can redirect an entire migration stream.",
              "zh": "在原居地与目的地之间存在中介障碍（intervening obstacles）——阻碍迁移的障碍，如山脉、海洋、边境墙、签证法或旅途费用。也存在中介机遇（intervening opportunities）——途中遇到的有利情形（一份工作、一个友好的社区），使移民在到达原定目的地之前就停下。途中一个良好的机遇可以改变整股迁移流的走向。"
            },
            {
              "type": "h2",
              "en": "Effects of Migration",
              "zh": "迁移的影响"
            },
            {
              "type": "p",
              "en": "Migration transforms both ends of the journey, and the AP exam expects you to analyze origin and destination separately.",
              "zh": "迁移改变旅程的两端，AP 考试要求你分别分析原居地和目的地。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Origin: loss of working-age population and a possible \"brain drain\" of skilled workers, but relief from unemployment and an inflow of remittances (money migrants send home), which can be a major source of income for developing countries.",
                  "zh": "原居地：劳动年龄人口流失，可能出现技术工人的\"人才外流\"（brain drain），但失业压力得到缓解，并有侨汇（remittances，移民寄回家乡的钱）流入，对发展中国家而言可能是重要的收入来源。"
                },
                {
                  "en": "Destination: a larger, often younger workforce that fills labor gaps and enriches culture, but potential strain on housing and services and social or political tension over integration.",
                  "zh": "目的地：更庞大且往往更年轻的劳动力，填补劳动力缺口并丰富文化，但可能给住房和公共服务带来压力，并因融入问题引发社会或政治紧张。"
                },
                {
                  "en": "Both ends: migration reshapes the population pyramids of both places — draining young adults from the origin and bulging the working ages at the destination.",
                  "zh": "两端：迁移重塑两地的人口金字塔——使原居地流失青壮年，使目的地劳动年龄段膨胀。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Classifying a Migration",
                "zh": "例题 1：判定迁移类型"
              },
              "problem": {
                "en": "A family flees civil war in Syria, crosses into Turkey, and later settles in a German city where relatives already live. Classify this migration using the correct terms.",
                "zh": "一个家庭为逃离叙利亚内战，越境进入土耳其，后来定居在已有亲属居住的德国某城市。请用正确术语判定这一迁移。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This is forced migration (they flee war with no real choice) and international migration (crossing borders). Because they cross an international border fleeing persecution/conflict, they are refugees, not IDPs. Settling where relatives already live makes it chain migration. If they moved in stages — Syria to Turkey to Germany — that is also step migration. Naming several overlapping types precisely is exactly what the exam rewards.",
                  "zh": "这是强迫迁移（他们逃离战争、别无真正选择），也是国际迁移（跨越国界）。由于他们跨越国界逃离迫害／冲突，他们是难民，而非国内流离失所者。定居于已有亲属之处使其成为链式迁移。若他们分阶段移动——叙利亚到土耳其到德国——则也是分段迁移。精准地命名多个交叠的类型，正是考试所奖励的。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Analyzing Remittances and Brain Drain",
                "zh": "例题 2：分析侨汇与人才外流"
              },
              "problem": {
                "en": "When many nurses and engineers emigrate from a developing country to wealthier ones, identify one negative and one positive effect on the origin country.",
                "zh": "当大量护士和工程师从一个发展中国家移民到更富裕的国家时，请指出对原居国的一个负面和一个正面影响。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Negative: brain drain — the origin loses its most skilled, educated workers, weakening its healthcare, infrastructure, and ability to develop. Positive: remittances — those emigrants send money home, and these flows often exceed foreign aid, supporting families and injecting foreign currency into the origin economy. A strong answer weighs the loss of human capital against the gain of financial capital.",
                  "zh": "负面：人才外流——原居国失去最有技能、受教育程度最高的劳动者，削弱其医疗、基础设施和发展能力。正面：侨汇——这些移民把钱寄回家，其规模往往超过外国援助，供养家庭并为原居国经济注入外汇。优秀的答案会权衡人力资本的流失与金融资本的流入。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A person forced to leave home by war who remains within the borders of their own country is best described as",
                "zh": "一个因战争被迫离家、但仍留在本国境内的人，最准确的描述是"
              },
              "choices": [
                "a refugee",
                "a voluntary migrant",
                "a guest worker",
                "an internally displaced person"
              ],
              "answer": 3,
              "explanation": {
                "en": "An internally displaced person (IDP) is forced from home but has not crossed an international border. A refugee flees across a border; a guest worker is a temporary labor migrant; and someone forced out is not voluntary. The border-crossing is the deciding line between IDP and refugee.",
                "zh": "国内流离失所者（IDP）被迫离家，但未跨越国界。难民是跨越国界逃离；客籍工人是临时劳动移民；被迫离开者不属于自愿。是否跨越国界是区分 IDP 与难民的决定性界线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The tendency for the volume of migration to decline as distance from the origin increases illustrates",
                "zh": "迁移量随离原居地距离增加而下降的趋势，体现了"
              },
              "choices": [
                "chain migration",
                "the counterstream",
                "intervening opportunity",
                "distance decay"
              ],
              "answer": 3,
              "explanation": {
                "en": "Distance decay is the weakening of interaction (including migration) as distance grows — the basis of Ravenstein's \"most migrants go short distances\" and of the gravity model. Chain migration and counterstreams are separate concepts, and an intervening opportunity redirects rather than simply reduces migration.",
                "zh": "距离衰减是互动（包括迁移）随距离增加而减弱——是雷文斯坦\"多数移民迁移短距离\"及引力模型的基础。链式迁移和回流是另外的概念，而中介机遇是使迁移改道，而非单纯减少迁移。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Turkish workers admitted to Germany in the 1960s to fill labor shortages are an example of",
                "zh": "20 世纪 60 年代为填补劳动力短缺而被德国接纳的土耳其工人，属于"
              },
              "choices": [
                "refugees",
                "forced migrants",
                "internally displaced persons",
                "guest workers"
              ],
              "answer": 3,
              "explanation": {
                "en": "Guest workers are migrants admitted temporarily to fill labor shortages — the classic case being Turkish workers in Germany. They are not refugees (not fleeing persecution), not IDPs (they crossed a border), and not forced (they chose to migrate for work).",
                "zh": "客籍工人是为填补劳动力短缺而临时接纳的移民——典型案例正是德国的土耳其工人。他们不是难民（并非逃离迫害），不是国内流离失所者（他们跨越了国界），也不是被迫（他们为工作而自愿迁移）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A migrant traveling toward a distant city takes a factory job in a town along the way and settles there instead. This best illustrates",
                "zh": "一名前往远方城市的移民，在途中的一个城镇找到工厂工作并就此定居。这最能说明"
              },
              "choices": [
                "an intervening obstacle",
                "a push factor",
                "chain migration",
                "an intervening opportunity"
              ],
              "answer": 3,
              "explanation": {
                "en": "An intervening opportunity is a favorable circumstance encountered en route (here, a job) that causes a migrant to stop short of the intended destination. An intervening obstacle would block or hinder movement, not attract a stop; chain migration involves following relatives; a push factor operates at the origin.",
                "zh": "中介机遇是途中遇到的有利情形（此处为一份工作），使移民在到达原定目的地之前就停下。中介障碍会阻碍移动，而非吸引停留；链式迁移是追随亲属；推力作用于原居地。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is the most likely positive effect of emigration on the ORIGIN country?",
                "zh": "移民外流对原居国最可能产生的正面影响是"
              },
              "choices": [
                "An increase in brain drain",
                "A younger, larger workforce",
                "Strain on housing and public services",
                "Remittances sent home by migrants"
              ],
              "answer": 3,
              "explanation": {
                "en": "Remittances — money migrants send back home — are a major positive effect for the origin, often exceeding foreign aid. Brain drain is a negative for the origin; strain on housing and a younger workforce are effects felt at the DESTINATION, not the origin.",
                "zh": "侨汇——移民寄回家乡的钱——是对原居地的重要正面影响，其规模常超过外国援助。人才外流对原居地是负面影响；住房压力和更年轻的劳动力是目的地感受到的影响，而非原居地。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What two-word term describes conditions that repel people from their place of origin? Answer with the two-word term.",
                "zh": "哪个术语描述把人从原居地驱离的条件？请用术语回答。"
              },
              "answer": "push factor",
              "accept": [
                "push factor",
                "push factors",
                "推力",
                "推力因素"
              ],
              "explanation": {
                "en": "Push factors are negative conditions at the origin (no jobs, war, drought) that drive people to leave. Their counterpart, pull factors, attract migrants to a destination.",
                "zh": "推力因素是原居地的负面条件（没有工作、战争、干旱），驱使人们离开。与之对应的拉力因素则把移民吸引到目的地。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the money that migrants send back to family in their home country called? Answer with the one-word term.",
                "zh": "移民寄回本国家人的钱称为什么？请用一个词的术语回答。"
              },
              "answer": "remittances",
              "accept": [
                "remittances",
                "remittance",
                "侨汇",
                "汇款"
              ],
              "explanation": {
                "en": "Remittances are funds migrants send to their families back home. For many developing countries they are a leading source of foreign income, sometimes exceeding foreign aid.",
                "zh": "侨汇是移民寄给本国家人的资金。对许多发展中国家而言，它是重要的外来收入来源，有时超过外国援助。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Who formulated the 19th-century \"laws of migration\" describing patterns like short-distance and step migration? Answer with the surname.",
                "zh": "谁提出了 19 世纪描述短距离迁移和分段迁移等规律的\"迁移法则\"？请用姓氏回答。"
              },
              "answer": "Ravenstein",
              "accept": [
                "ravenstein",
                "e.g. ravenstein",
                "eg ravenstein",
                "雷文斯坦"
              ],
              "explanation": {
                "en": "E.G. Ravenstein derived the laws of migration in the 1880s: most migrants travel short distances, migration occurs in steps, and each stream has a counterstream. His work underlies the gravity model.",
                "zh": "E.G. 雷文斯坦在 19 世纪 80 年代总结出迁移法则：多数移民迁移短距离、迁移分步进行、每股迁移流都有回流。他的研究是引力模型的基础。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-cultural-patterns-and-processes",
      "title": "Unit 3: Cultural Patterns and Processes",
      "titleZh": "第三单元：文化的格局与过程",
      "lessons": [
        {
          "id": "concepts-of-culture-and-landscapes",
          "title": "Concepts of Culture and Cultural Landscapes",
          "titleZh": "文化概念与文化景观",
          "content": [
            {
              "type": "h2",
              "en": "What Geographers Mean by Culture",
              "zh": "地理学家所说的\"文化\""
            },
            {
              "type": "p",
              "en": "Culture is the shared set of beliefs, values, practices, behaviors, and technologies that a group of people learns and passes down from one generation to the next. In human geography, culture is not just \"the arts\" — it includes everyday habits like the language you speak, the food you eat, how you dress, and how you organize your family. Because culture is learned rather than inherited biologically, it can spread from place to place and change over time. Geographers study where cultural traits occur, how they cluster into regions, and why they diffuse.",
              "zh": "文化（culture）是一群人所习得并代代相传的一整套共同的信仰、价值观、习俗、行为方式与技术。在人文地理学中，文化不只是\"艺术\"，它还包括日常习惯，比如你说的语言、吃的食物、穿衣方式以及组织家庭的方式。由于文化是习得的而非通过生物遗传获得，因此它可以在地方之间传播并随时间改变。地理学家研究文化特征出现在哪里、如何聚集成区域，以及为何会扩散。"
            },
            {
              "type": "h3",
              "en": "Cultural Traits and Cultural Complexes",
              "zh": "文化特征与文化综合体"
            },
            {
              "type": "p",
              "en": "A cultural trait is a single element of a culture — one practice, belief, or artifact. Drinking coffee, wearing a wedding ring, or greeting with a bow are all cultural traits. When several related traits combine into a larger, recognizable bundle, geographers call it a cultural complex. The complex surrounding coffee, for example, links a beverage to café architecture, social rituals of meeting friends, and economic ties to bean-growing regions. Recognizing traits and complexes lets you break a culture into parts you can map and compare across places.",
              "zh": "文化特征（cultural trait）是文化的单一元素——某一种习俗、信仰或器物。喝咖啡、戴婚戒、以鞠躬问候都是文化特征。当若干相关特征组合成一个更大的、可辨识的整体时，地理学家称之为文化综合体（cultural complex）。例如围绕咖啡的综合体，把一种饮料与咖啡馆建筑、朋友相聚的社交仪式，以及与咖啡豆产区的经济联系连接在一起。识别特征与综合体，能让你把一种文化拆分成可以绘图并跨地方比较的部分。"
            },
            {
              "type": "h3",
              "en": "Material and Nonmaterial Culture",
              "zh": "物质文化与非物质文化"
            },
            {
              "type": "p",
              "en": "Geographers divide culture into two broad categories. Material culture consists of the tangible, physical things a group makes and uses — buildings, tools, clothing, art, food, and technology. Nonmaterial culture consists of the intangible elements — beliefs, values, language, religion, political ideas, and rules of behavior. The two are deeply connected: a mosque (material) expresses the beliefs of Islam (nonmaterial), and a national flag (material) embodies a shared identity (nonmaterial). On the AP exam, you should be able to classify examples into each category and explain how nonmaterial values shape the material objects a culture produces.",
              "zh": "地理学家把文化分为两大类。物质文化（material culture）是一个群体制造和使用的有形实物——建筑、工具、服装、艺术、食物和技术。非物质文化（nonmaterial culture）则是无形的元素——信仰、价值观、语言、宗教、政治观念和行为规范。两者紧密相连：清真寺（物质）表达伊斯兰教的信仰（非物质），国旗（物质）体现共同的身份认同（非物质）。在 AP 考试中，你应能把例子归入各自类别，并解释非物质的价值观如何塑造一种文化所生产的物质对象。"
            },
            {
              "type": "note",
              "en": "AP Skill — Classification: A common mistake is calling a religion or a language \"material\" because it has physical expressions. The belief system itself is nonmaterial; the church building or printed Bible is material. Ask whether you can physically touch the thing — if not, it belongs to nonmaterial culture.",
              "zh": "AP 技能——分类：一个常见错误是因为宗教或语言有物质表现就把它们称作\"物质文化\"。信仰体系本身是非物质的；教堂建筑或印刷的《圣经》才是物质的。问问自己能否用手触摸到这个东西——如果不能，它就属于非物质文化。"
            },
            {
              "type": "h2",
              "en": "The Cultural Landscape",
              "zh": "文化景观"
            },
            {
              "type": "p",
              "en": "The cultural landscape is the visible imprint of human activity on the land — everything people build and modify that reflects their culture. Geographer Carl Sauer argued that culture is the agent, the natural area is the medium, and the cultural landscape is the result. When you look at a place and see farms, fences, road patterns, house styles, religious buildings, and signage, you are reading a cultural landscape. It is essentially the built environment plus the ways people have shaped the natural environment, and it serves as a text you can \"read\" to infer the values, technology, and history of the people who made it.",
              "zh": "文化景观（cultural landscape）是人类活动在土地上留下的可见印记——人们建造和改造的、反映其文化的一切事物。地理学家卡尔·索尔（Carl Sauer）主张：文化是营力，自然区域是媒介，文化景观是结果。当你看着一个地方，看到农田、篱笆、道路格局、房屋样式、宗教建筑和标识时，你就是在解读文化景观。它本质上是建成环境（built environment）加上人们改造自然环境的方式，就像一份可供\"阅读\"的文本，从中可以推断出创造它的人的价值观、技术与历史。"
            },
            {
              "type": "h3",
              "en": "Sequent Occupance",
              "zh": "承继占用（层积占用）"
            },
            {
              "type": "p",
              "en": "Landscapes accumulate over time. Sequent occupance is the idea that successive groups of people leave their cultural imprint on a place, each layer contributing to the character of the landscape. Mexico City shows Aztec foundations beneath Spanish colonial churches beneath modern skyscrapers; a New England town green surrounded by a Puritan meetinghouse, Victorian storefronts, and a 20th-century highway shows the same layering. Reading sequent occupance means peeling back the layers to see which culture left which mark and in what order.",
              "zh": "景观是随时间累积的。承继占用（sequent occupance）指相继而来的人群在一个地方留下各自的文化印记，每一层都为景观的特征增添内容。墨西哥城在现代摩天大楼之下有西班牙殖民时期的教堂，再往下是阿兹特克的地基；一个新英格兰城镇的公共草坪周围环绕着清教徒的聚会所、维多利亚式店面和 20 世纪的高速公路，展现的是同样的层积。解读承继占用，就是层层揭开，看清哪种文化按什么顺序留下了哪种印记。"
            },
            {
              "type": "h2",
              "en": "Folk Culture and Popular Culture",
              "zh": "民俗文化与流行文化"
            },
            {
              "type": "p",
              "en": "Folk culture refers to traditions practiced by small, often rural, homogeneous groups living in relative isolation. Folk culture tends to be tied to a specific place (its hearth), to change slowly, and to spread mainly through relocation as people migrate. The Amish, traditional Appalachian folk music, and regional handmade quilts are classic examples. Popular culture, by contrast, is practiced by large, heterogeneous populations spread across many places, often in urban and connected areas. It changes rapidly, is spread quickly by mass media and technology, and tends to produce a uniform landscape of chain stores, franchises, and global brands.",
              "zh": "民俗文化（folk culture）指由规模较小、通常处于乡村、相对隔绝且同质的群体所实践的传统。民俗文化往往与特定地方（其发源地）紧密相连，变化缓慢，主要通过人们迁移的\"迁移扩散\"传播。阿米什人（Amish）、传统的阿巴拉契亚民谣、各地手工缝制的被子都是典型例子。相比之下，流行文化（popular culture）由分布在众多地方、规模庞大、异质的人口所实践，常见于城市和联系紧密的地区。它变化迅速，通过大众媒体和技术快速传播，往往造就由连锁店、加盟店和全球品牌构成的\"千篇一律\"的景观。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Scale of group: folk culture = small and homogeneous; popular culture = large and heterogeneous.",
                  "zh": "群体规模：民俗文化＝小而同质；流行文化＝大而异质。"
                },
                {
                  "en": "Rate of change: folk culture changes slowly; popular culture changes rapidly.",
                  "zh": "变化速度：民俗文化变化缓慢；流行文化变化迅速。"
                },
                {
                  "en": "Landscape effect: folk culture creates distinctive, place-specific landscapes; popular culture creates uniform, standardized landscapes (placelessness).",
                  "zh": "景观影响：民俗文化造就独特的、因地而异的景观；流行文化造就统一、标准化的景观（无地方性）。"
                },
                {
                  "en": "Diffusion: folk culture spreads mainly by relocation (migration); popular culture spreads by hierarchical diffusion and mass media.",
                  "zh": "扩散方式：民俗文化主要靠迁移扩散（移民）传播；流行文化靠等级扩散和大众媒体传播。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Ethnic Neighborhoods",
              "zh": "族裔社区"
            },
            {
              "type": "p",
              "en": "An ethnic neighborhood is an area within a city or region where a particular ethnic group is concentrated and maintains its cultural traits — language, religious institutions, food, and businesses. Chinatowns, Little Italys, and Somali enclaves in cities like Minneapolis are examples. Ethnic neighborhoods act as centripetal anchors for their communities, preserving folk traditions in an urban, popular-culture setting and providing newcomers with familiar networks. Their cultural landscape — bilingual signs, temples, and specialty markets — makes them highly visible and readable on the ground.",
              "zh": "族裔社区（ethnic neighborhood）是城市或地区内某一族裔群体聚集并保持其文化特征——语言、宗教机构、饮食和商铺——的区域。唐人街、小意大利，以及明尼阿波利斯等城市的索马里聚居区都是例子。族裔社区对其社群起到向心的锚定作用，在城市的流行文化环境中保存民俗传统，并为新来者提供熟悉的人际网络。它们的文化景观——双语标识、寺庙、特色市场——使其在实地高度可见、易于解读。"
            },
            {
              "type": "h2",
              "en": "Centripetal and Centrifugal Cultural Forces",
              "zh": "向心与离心的文化力量"
            },
            {
              "type": "p",
              "en": "Cultural forces can either unite or divide a society. Centripetal forces pull a group together and strengthen unity and stability — a shared language, a common religion, national holidays, and a unifying symbol like a flag. Centrifugal forces push a group apart and can lead to conflict or fragmentation — deep religious or linguistic divisions, ethnic tensions, and uneven distribution of power or wealth. The same cultural trait can act in either direction depending on context: a single national language unites, but forcing a language on a minority can fuel division.",
              "zh": "文化力量既可以团结社会，也可以分裂社会。向心力（centripetal forces）把群体拉到一起，增强团结与稳定——共同的语言、共同的宗教、国家节日，以及像国旗这样的统一象征。离心力（centrifugal forces）把群体推开，可能导致冲突或分裂——深刻的宗教或语言分歧、族裔紧张、权力或财富的分配不均。同一种文化特征在不同情境下可以朝任一方向起作用：单一的国语能团结人民，但把一种语言强加于少数群体则可能加剧分裂。"
            },
            {
              "type": "note",
              "en": "AP Skill — Application: Exam questions often ask you to label a specific force as centripetal or centrifugal in a given country. Judge by its effect: does it increase unity (centripetal) or increase division (centrifugal)? Belgium's split between Flemish (Dutch) and Walloon (French) speakers is a classic centrifugal linguistic force.",
              "zh": "AP 技能——应用：考试常要求你在某个国家的具体情境中把某种力量判定为向心或离心。以其效果判断：它是增强团结（向心）还是加剧分裂（离心）？比利时讲弗拉芒语（荷兰语）与讲瓦隆语（法语）人群的分裂，就是典型的离心性语言力量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading a Cultural Landscape",
                "zh": "例题 1：解读文化景观"
              },
              "problem": {
                "en": "A geographer walks through a neighborhood and sees storefront signs in both Vietnamese and English, a Buddhist temple, a market selling tropical produce, and older brick row houses. What can she infer about this place?",
                "zh": "一位地理学家走过一个社区，看到店面招牌同时使用越南语和英语、一座佛教寺庙、一家出售热带农产品的市场，以及较旧的砖砌联排房屋。她能对这个地方做出什么推断？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Read the landscape as a text. The bilingual signs, temple, and specialty market are material-culture clues pointing to an ethnic neighborhood settled by Vietnamese immigrants who have preserved their language, religion, and foodways (nonmaterial and material traits) in an American city. The older brick row houses reveal sequent occupance — an earlier group built the housing stock, and a later immigrant group has adapted it. A strong answer names the concept (ethnic neighborhood, cultural landscape, sequent occupance) and links each visible feature to the underlying culture.",
                  "zh": "把景观当作文本来读。双语招牌、寺庙和特色市场都是物质文化的线索，指向一个由越南移民定居的族裔社区，他们在美国城市中保留了自己的语言、宗教和饮食方式（非物质与物质特征）。较旧的砖砌联排房屋揭示了承继占用——较早的群体建造了这批住房，而后来的移民群体加以改造利用。优秀的答案会点出概念（族裔社区、文化景观、承继占用），并把每个可见特征与其背后的文化联系起来。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Folk vs. Popular Culture Landscapes",
                "zh": "例题 2：民俗文化与流行文化的景观"
              },
              "problem": {
                "en": "Why does a highway strip of fast-food chains look nearly identical in Ohio and in Arizona, while traditional Amish farmsteads in each state look distinctly local?",
                "zh": "为什么公路旁一排快餐连锁店在俄亥俄州和亚利桑那州几乎一模一样，而两州的传统阿米什农庄却各具鲜明的地方特色？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Popular culture is spread by mass media and franchising, which impose standardized designs regardless of local environment — this produces uniform landscapes and a sense of placelessness. Folk culture, like that of the Amish, develops in relative isolation and adapts to local materials, climate, and tradition, so it varies from place to place and creates distinctive, place-specific landscapes. The contrast illustrates how the scale and diffusion mechanism of a culture determine how uniform or distinctive its landscape becomes.",
                  "zh": "流行文化通过大众媒体和特许加盟传播，不论当地环境如何都强加标准化设计——由此产生统一的景观和一种\"无地方性\"（placelessness）。像阿米什人那样的民俗文化在相对隔绝中发展，因地取材、顺应当地气候与传统，因而各地不同，造就独特的、因地而异的景观。这种对比说明：一种文化的规模和扩散机制决定了其景观是趋于统一还是趋于独特。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is the best example of nonmaterial culture?",
                "zh": "下列哪一项最能代表非物质文化？"
              },
              "choices": [
                "A Hindu temple",
                "A carved wooden mask",
                "A traditional wedding dress",
                "A set of religious beliefs about reincarnation"
              ],
              "answer": 3,
              "explanation": {
                "en": "Beliefs about reincarnation are intangible ideas, so they are nonmaterial culture. A temple, a dress, and a mask are all physical objects you can touch — material culture. The trap is thinking anything connected to religion is nonmaterial; the building is material, only the belief system itself is nonmaterial.",
                "zh": "关于轮回的信仰是无形的观念，因此属于非物质文化。寺庙、婚服和面具都是可以触摸的实物——属于物质文化。陷阱在于以为凡与宗教相关的都是非物质文化；建筑是物质的，只有信仰体系本身才是非物质的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The concept that successive groups each leave a cultural imprint on a place, forming layers over time, is called:",
                "zh": "相继而来的群体各自在一个地方留下文化印记、随时间形成层积的概念，被称为："
              },
              "choices": [
                "Sequent occupance",
                "Distance decay",
                "Cultural convergence",
                "Sense of place"
              ],
              "answer": 0,
              "explanation": {
                "en": "Sequent occupance describes the layering of cultural imprints from successive occupying groups, as in Mexico City's Aztec, Spanish, and modern layers. Distance decay is about interaction declining with distance; cultural convergence is cultures becoming more alike; sense of place is the emotional meaning attached to a location.",
                "zh": "承继占用描述相继占用的群体所留下文化印记的层积，如墨西哥城的阿兹特克、西班牙和现代各层。距离衰减讲的是互动随距离减弱；文化趋同指文化变得更相似；地方感是对某地所赋予的情感意义。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Compared with folk culture, popular culture is most likely to:",
                "zh": "与民俗文化相比，流行文化最可能："
              },
              "choices": [
                "Change slowly and stay tied to one place",
                "Be practiced by small, isolated, homogeneous groups",
                "Produce uniform landscapes and spread rapidly through mass media",
                "Diffuse mainly through the relocation of migrants"
              ],
              "answer": 2,
              "explanation": {
                "en": "Popular culture spreads rapidly through mass media and hierarchical diffusion, producing standardized, uniform landscapes. The other three choices all describe folk culture, which changes slowly, is practiced by small homogeneous groups, and spreads chiefly by relocation diffusion.",
                "zh": "流行文化通过大众媒体和等级扩散快速传播，造就标准化、统一的景观。其余三项都是民俗文化的特征：变化缓慢、由小型同质群体实践、主要通过迁移扩散传播。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A national government promotes a single official language, a common flag, and shared national holidays. These are examples of:",
                "zh": "一国政府推广单一官方语言、共同国旗和统一的国家节日。这些属于："
              },
              "choices": [
                "Centrifugal forces",
                "Environmental determinism",
                "Cultural relativism",
                "Centripetal forces"
              ],
              "answer": 3,
              "explanation": {
                "en": "Shared language, flags, and holidays pull a population together and strengthen unity, making them centripetal forces. Centrifugal forces divide a society. Cultural relativism and environmental determinism are unrelated concepts (judging cultures by their own standards, and environment determining culture, respectively).",
                "zh": "共同的语言、国旗和节日把民众拉到一起、增强团结，因此是向心力。离心力是分裂社会的力量。文化相对主义和环境决定论是无关的概念（分别指以文化自身标准评价它，以及环境决定文化）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The combination of a beverage with its café architecture, social rituals, and economic ties to growing regions is best described as a:",
                "zh": "一种饮料及其咖啡馆建筑、社交仪式和与产区经济联系的组合，最恰当的描述是："
              },
              "choices": [
                "Cultural trait",
                "Cultural landscape",
                "Cultural complex",
                "Cultural hearth"
              ],
              "answer": 2,
              "explanation": {
                "en": "A cultural complex is a bundle of interrelated traits forming a larger whole, exactly like the cluster of practices surrounding coffee. A single trait would be just drinking coffee. A cultural landscape is the visible imprint on the land, and a hearth is a place of origin.",
                "zh": "文化综合体是若干相互关联的特征组成的更大整体，正如围绕咖啡的一系列习俗。单一特征只是\"喝咖啡\"。文化景观是留在土地上的可见印记，而发源地是起源之地。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The visible human imprint on the land — the built environment and modified natural setting that reflects a culture. Answer with the two-word term.",
                "zh": "人类留在土地上的可见印记——反映某种文化的建成环境与被改造的自然环境。请用这一术语作答（英文为两词）。"
              },
              "answer": "cultural landscape",
              "accept": [
                "cultural landscape",
                "cultural-landscape",
                "landscape"
              ],
              "explanation": {
                "en": "The cultural landscape is the tangible record of how a culture has shaped its territory. Geographer Carl Sauer described it as the result of culture acting on a natural area.",
                "zh": "文化景观是一种文化如何塑造其领土的有形记录。地理学家卡尔·索尔把它描述为文化作用于自然区域的结果。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The tangible, physical objects a culture makes and uses (buildings, tools, clothing). Answer with the two-word term.",
                "zh": "一种文化所制造和使用的有形实物（建筑、工具、服装）。请用这一术语作答（英文为两词）。"
              },
              "answer": "material culture",
              "accept": [
                "material culture",
                "material-culture"
              ],
              "explanation": {
                "en": "Material culture is the set of physical, touchable artifacts of a group, as opposed to nonmaterial culture, which consists of intangible beliefs, values, and ideas.",
                "zh": "物质文化是一个群体的有形、可触摸的器物集合，与由无形的信仰、价值观和观念构成的非物质文化相对。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An urban area where a particular ethnic group concentrates and preserves its language, religion, and businesses (e.g., Chinatown). Answer with the two-word term.",
                "zh": "某一族裔群体聚集并保存其语言、宗教和商铺的城市区域（如唐人街）。请用这一术语作答（英文为两词）。"
              },
              "answer": "ethnic neighborhood",
              "accept": [
                "ethnic neighborhood",
                "ethnic neighbourhood",
                "ethnic enclave",
                "ethnic-neighborhood"
              ],
              "explanation": {
                "en": "An ethnic neighborhood (or ethnic enclave) concentrates an ethnic group and acts as a centripetal anchor, preserving folk traits within a larger urban, popular-culture setting.",
                "zh": "族裔社区（或族裔聚居区）使某族裔群体聚集，起到向心锚定作用，在更大的城市流行文化环境中保存民俗特征。"
              }
            }
          ]
        },
        {
          "id": "cultural-diffusion",
          "title": "Cultural Diffusion",
          "titleZh": "文化扩散",
          "content": [
            {
              "type": "h2",
              "en": "Hearths and the Spread of Culture",
              "zh": "文化发源地与文化的传播"
            },
            {
              "type": "p",
              "en": "Every cultural trait — a religion, a language, a crop, an innovation — begins somewhere. A cultural hearth is the place of origin where a trait or set of traits is first developed before spreading outward. Ancient hearths include Mesopotamia, the Nile Valley, the Indus Valley, and Mesoamerica, where agriculture, writing, and cities first arose. Cultural diffusion is the process by which a trait spreads from its hearth across space and through populations. Understanding diffusion means asking two questions: where did it start (the hearth), and by what mechanism did it move (the type of diffusion)?",
              "zh": "每一种文化特征——一种宗教、一种语言、一种作物、一项创新——都始于某地。文化发源地（cultural hearth）是某一特征或一组特征最初被发展、随后向外传播的起源之地。古代发源地包括美索不达米亚、尼罗河谷、印度河谷和中美洲，那里最早出现了农业、文字和城市。文化扩散（cultural diffusion）是某一特征从其发源地跨越空间、在人群中传播的过程。理解扩散要问两个问题：它始于何处（发源地）？又通过何种机制移动（扩散类型）？"
            },
            {
              "type": "h2",
              "en": "The Two Main Types of Diffusion",
              "zh": "两大类扩散"
            },
            {
              "type": "p",
              "en": "Geographers divide diffusion into two families. In relocation diffusion, people physically move from one place to another and carry their culture with them, so the trait spreads through migration and often leaves the hearth behind. The spread of Islam by migrating merchants and of Christianity by European colonists are examples. In expansion diffusion, a trait spreads outward from its hearth while remaining strong at the origin — the trait grows like a snowball rather than moving as a package. Expansion diffusion has three subtypes: contagious, hierarchical, and stimulus.",
              "zh": "地理学家把扩散分为两大类。在迁移扩散（relocation diffusion）中，人们身体上从一地迁往另一地并随身携带文化，因此特征通过移民传播，往往会离开发源地。移民商人传播伊斯兰教、欧洲殖民者传播基督教都是例子。在扩张扩散（expansion diffusion）中，某一特征从发源地向外传播，同时在起源地依然强盛——特征像滚雪球一样壮大，而不是像包裹一样被搬走。扩张扩散有三种子类型：传染扩散、等级扩散和刺激扩散。"
            },
            {
              "type": "h3",
              "en": "Contagious, Hierarchical, and Stimulus Diffusion",
              "zh": "传染扩散、等级扩散与刺激扩散"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Contagious diffusion: a trait spreads widely and nearly uniformly outward from person to person through direct contact, strongly affected by distance decay — like a viral video or a disease. Nearby places adopt it before distant ones.",
                  "zh": "传染扩散（contagious diffusion）：特征通过直接接触在人与人之间广泛且几乎均匀地向外传播，深受距离衰减影响——如一段爆红视频或一种疾病。邻近地方比遥远地方更早采纳。"
                },
                {
                  "en": "Hierarchical diffusion: a trait spreads from larger or more powerful nodes to smaller ones (or vice versa), skipping over places in between. Fashion trends spread from major cities like Paris and New York to smaller cities before reaching rural towns.",
                  "zh": "等级扩散（hierarchical diffusion）：特征从较大或较有权势的节点传向较小的节点（或反之），越过中间的地方。时尚潮流从巴黎、纽约等大城市传到较小城市，再到达乡村小镇。"
                },
                {
                  "en": "Stimulus diffusion: the underlying idea of a trait spreads and is adopted, but it is modified to fit the new culture. McDonald's selling vegetarian menus in India spreads the fast-food concept while changing the specific product.",
                  "zh": "刺激扩散（stimulus diffusion）：某一特征背后的基本理念传播并被采纳，但经过改造以适应新文化。麦当劳在印度出售素食菜单，传播的是快餐理念，同时改变了具体产品。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Skill — Distinguishing diffusion types: The key test question is whether people moved. If people migrated and carried the trait, it is relocation diffusion. If the trait spread but the people stayed put, it is expansion diffusion — then decide the subtype by asking: person-to-person and distance-controlled (contagious), node-to-node skipping places (hierarchical), or idea-adopted-but-changed (stimulus)?",
              "zh": "AP 技能——区分扩散类型：关键的检验问题是人是否移动了。如果人们迁移并携带了该特征，就是迁移扩散。如果特征传播了而人们留在原地，就是扩张扩散——再通过提问确定子类型：人传人且受距离控制（传染）？节点到节点、越过中间地方（等级）？还是理念被采纳但被改造（刺激）？"
            },
            {
              "type": "h2",
              "en": "Cultural Interaction: Acculturation, Assimilation, and Syncretism",
              "zh": "文化互动：涵化、同化与文化融合"
            },
            {
              "type": "p",
              "en": "When cultures come into contact through diffusion, several outcomes are possible. Acculturation occurs when a group adopts some traits of a dominant culture while keeping much of its own — an immigrant who speaks English at work but keeps her home language, cuisine, and religion. Assimilation is more complete: a group gradually gives up most of its original traits and becomes largely indistinguishable from the dominant culture, often over generations. Syncretism (or cultural blending) happens when two cultures fuse to create something new — as in Vodou blending West African religion with Catholicism, or Tex-Mex cuisine blending Mexican and American food.",
              "zh": "当文化通过扩散相互接触时，可能出现几种结果。涵化（acculturation）指一个群体在保留自身大量文化的同时采纳主流文化的一些特征——比如一位移民在工作中说英语，却保留了母语、菜肴和宗教。同化（assimilation）更为彻底：一个群体逐渐放弃大部分原有特征，变得与主流文化几乎无法区分，往往历经数代人。文化融合（syncretism，或文化交融）发生在两种文化融合出全新事物之时——如伏都教（Vodou）把西非宗教与天主教融合，或德州墨西哥菜（Tex-Mex）融合墨西哥与美国饮食。"
            },
            {
              "type": "note",
              "en": "AP Skill — Degree matters: Think of acculturation and assimilation as points on a spectrum of change. Acculturation = partial adoption, original identity largely retained. Assimilation = near-complete adoption, original identity mostly lost. Syncretism is not on that line at all — it is a two-way fusion producing a genuinely new hybrid.",
              "zh": "AP 技能——程度很重要：把涵化和同化看作变化程度谱系上的两个点。涵化＝部分采纳，基本保留原有身份。同化＝几近完全采纳，原有身份大多丧失。文化融合根本不在这条线上——它是产生真正全新混合体的双向融合。"
            },
            {
              "type": "h2",
              "en": "Drivers of Diffusion: Colonialism, Trade, and Technology",
              "zh": "扩散的推动力：殖民主义、贸易与技术"
            },
            {
              "type": "p",
              "en": "Culture does not diffuse on its own; historical forces move it. Colonialism spread European languages, religions, legal systems, and place-names across the Americas, Africa, and Asia through conquest and settlement — a form of relocation diffusion imposed by power. Trade has long carried goods, ideas, and beliefs along routes like the Silk Road and the trans-Saharan caravans, spreading Buddhism, Islam, and countless technologies. In the modern era, technology and the media — the internet, satellite television, and social platforms — accelerate diffusion dramatically, weakening distance decay and enabling ideas to leap across the globe almost instantly, a process linked to time-space compression and globalization.",
              "zh": "文化不会自行扩散；是历史力量推动了它。殖民主义（colonialism）通过征服与定居，把欧洲的语言、宗教、法律制度和地名传遍美洲、非洲和亚洲——这是权力强加的一种迁移扩散。贸易（trade）长期以来沿着丝绸之路和跨撒哈拉商队等路线运送商品、思想和信仰，传播了佛教、伊斯兰教和无数技术。在现代，技术与媒体——互联网、卫星电视和社交平台——极大加速了扩散，削弱了距离衰减，使思想几乎瞬间跨越全球，这一过程与时空压缩（time-space compression）和全球化相联系。"
            },
            {
              "type": "h2",
              "en": "Language Contact: Lingua Franca and Creolization",
              "zh": "语言接触：通用语与克里奥尔化"
            },
            {
              "type": "p",
              "en": "Diffusion and trade also reshape language. A lingua franca is a common language adopted by speakers of different native tongues so they can communicate, often for trade or administration — English today, Swahili in East Africa, and historically Latin and Arabic. When groups in sustained contact develop a simplified mixed language for practical use, it is called a pidgin. If that pidgin becomes the native, first language of a community's children and grows into a full language, the process is creolization and the result is a creole, such as Haitian Creole (French-based) or Tok Pisin in Papua New Guinea. These outcomes are living evidence of cultural diffusion and blending in the realm of language.",
              "zh": "扩散和贸易也重塑语言。通用语（lingua franca）是不同母语的使用者为了沟通（常为贸易或行政）而共同采用的语言——如今天的英语、东非的斯瓦希里语，以及历史上的拉丁语和阿拉伯语。当持续接触的群体为实用目的发展出一种简化的混合语言时，称为洋泾浜语（pidgin）。若这种洋泾浜语成为某社群儿童的母语（第一语言）并发展为完整语言，这一过程即克里奥尔化（creolization），其结果是克里奥尔语（creole），如海地克里奥尔语（以法语为基础）或巴布亚新几内亚的托克皮辛语。这些结果是语言领域中文化扩散与融合的活生生的证据。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Identifying the Type of Diffusion",
                "zh": "例题 1：辨别扩散类型"
              },
              "problem": {
                "en": "A new slang word first appears on social media accounts of celebrities in Los Angeles and London, then is picked up by users in mid-size cities, and finally reaches small towns. What type of diffusion is this?",
                "zh": "一个新俚语先出现在洛杉矶和伦敦名人的社交媒体账号上，接着被中等城市的用户采用，最后传到小镇。这属于哪种扩散类型？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "No one migrated, so this is expansion diffusion. Because the word jumps from major global cities (large, influential nodes) down to smaller cities and then towns — skipping over nearby rural areas that are not yet reached — it is hierarchical diffusion, spreading along a hierarchy of settlement size and influence rather than simply outward by distance. If it had spread evenly outward from a single point to whoever was nearest, that would be contagious diffusion instead.",
                  "zh": "没有人迁移，所以这是扩张扩散。由于该词从全球大城市（大而有影响力的节点）跳向较小城市、再到小镇——越过尚未触及的邻近乡村地区——因此是等级扩散，沿着聚落规模与影响力的等级传播，而非单纯按距离向外扩散。若它是从一个点均匀向外、传给最近的人，那就会是传染扩散。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Acculturation vs. Assimilation vs. Syncretism",
                "zh": "例题 2：涵化 vs. 同化 vs. 文化融合"
              },
              "problem": {
                "en": "A family immigrates and, over three generations, the grandchildren speak only English, celebrate only mainstream national holidays, and no longer practice the ancestral religion. Meanwhile, in the home country, a festival has merged a pre-Christian harvest ritual with a Catholic saint's day. Classify each case.",
                "zh": "一个家庭移民后，历经三代，孙辈只说英语、只过主流国家节日，不再实践祖辈的宗教。与此同时，在原籍国，一个节日把前基督教时期的丰收仪式与一个天主教圣徒纪念日融合在一起。请分别归类这两种情况。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The immigrant grandchildren have undergone assimilation: over generations the family lost nearly all original cultural traits and became indistinguishable from the dominant culture. Had they kept their home language and religion while adopting English at work, that would be acculturation (partial change). The merged festival is syncretism: two distinct traditions — an indigenous harvest ritual and a Catholic feast — fused into a single new practice, a hallmark of religious blending produced by diffusion.",
                  "zh": "移民的孙辈经历了同化：历经数代，家庭几乎丧失了全部原有文化特征，与主流文化无法区分。若他们在工作中采用英语的同时保留了母语和宗教，那将是涵化（部分改变）。融合的节日属于文化融合：两种截然不同的传统——本土丰收仪式与天主教节庆——融为一种全新的单一习俗，这是扩散所产生的宗教交融的典型标志。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "European colonists sailing to the Americas and bringing Christianity with them best illustrates:",
                "zh": "欧洲殖民者航行到美洲并随身带去基督教，最能说明："
              },
              "choices": [
                "Contagious diffusion",
                "Hierarchical diffusion",
                "Stimulus diffusion",
                "Relocation diffusion"
              ],
              "answer": 3,
              "explanation": {
                "en": "Because people physically migrated and carried the religion with them, this is relocation diffusion. Contagious and hierarchical are subtypes of expansion diffusion, where the people stay and only the trait spreads. Stimulus diffusion involves an idea being adopted but modified, which is not the situation here.",
                "zh": "由于人们身体上迁移并携带了宗教，这是迁移扩散。传染扩散和等级扩散是扩张扩散的子类型，其中人们留在原地而只有特征传播。刺激扩散指理念被采纳但经改造，这与本情境不符。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A design idea from one culture is adopted by another but changed to fit local tastes, like a global chain offering region-specific menu items. This is:",
                "zh": "一种文化的设计理念被另一种文化采纳，但经改造以适应当地口味，如全球连锁店推出地区特色菜品。这是："
              },
              "choices": [
                "Stimulus diffusion",
                "Relocation diffusion",
                "Contagious diffusion",
                "Assimilation"
              ],
              "answer": 0,
              "explanation": {
                "en": "Stimulus diffusion spreads the underlying idea while it is modified to fit the receiving culture. Relocation requires migration; contagious diffusion spreads a trait unchanged by direct contact; assimilation describes a group losing its identity, not the adaptation of a product.",
                "zh": "刺激扩散传播的是背后的理念，同时该理念经改造以适应接受方文化。迁移扩散需要移民；传染扩散通过直接接触原样传播特征；同化描述群体丧失身份，而非产品的改造。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Contagious diffusion is most strongly influenced by which geographic concept?",
                "zh": "传染扩散最受哪一地理概念的强烈影响？"
              },
              "choices": [
                "Distance decay",
                "Sequent occupance",
                "The demographic transition",
                "Environmental determinism"
              ],
              "answer": 0,
              "explanation": {
                "en": "Contagious diffusion spreads person-to-person outward from a source, so nearer places are affected sooner and more strongly — this is distance decay. Sequent occupance is about layered occupation, the demographic transition is about population change, and environmental determinism concerns environment shaping culture.",
                "zh": "传染扩散从源头人传人地向外扩散，因此较近的地方受影响更早、更强——这就是距离衰减。承继占用讲的是层积占用，人口转变讲的是人口变化，环境决定论涉及环境塑造文化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which scenario best illustrates acculturation rather than assimilation?",
                "zh": "下列哪种情形最能说明涵化而非同化？"
              },
              "choices": [
                "An immigrant group loses its language and traditions entirely over several generations",
                "Two religions fuse into a single new faith",
                "An immigrant adopts the local language for work but keeps her native cuisine, holidays, and religion at home",
                "A pidgin becomes the first language of a community's children"
              ],
              "answer": 2,
              "explanation": {
                "en": "Acculturation is partial change: adopting some dominant-culture traits while retaining much of one's own, exactly like using English at work but keeping home cuisine and religion. Complete loss of original traits is assimilation, fusion of two faiths is syncretism, and a pidgin becoming a first language is creolization.",
                "zh": "涵化是部分改变：采纳一些主流文化特征，同时保留大量自身文化，正如工作中用英语却在家保留菜肴与宗教。原有特征完全丧失是同化，两种信仰融合是文化融合，洋泾浜语成为第一语言是克里奥尔化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Swahili in East Africa and English in international business both function as a:",
                "zh": "东非的斯瓦希里语和国际商务中的英语都发挥着什么作用？"
              },
              "choices": [
                "Creole",
                "Pidgin",
                "Lingua franca",
                "Dialect"
              ],
              "answer": 2,
              "explanation": {
                "en": "A lingua franca is a common language used by speakers of different native tongues to communicate, often for trade and administration. A creole is a fully developed language that grew from a pidgin; a pidgin is a simplified contact language; a dialect is a regional variety of one language.",
                "zh": "通用语是不同母语使用者用来沟通（常用于贸易和行政）的共同语言。克里奥尔语是由洋泾浜语发展成的完整语言；洋泾浜语是简化的接触语言；方言是一种语言的地域变体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The place of origin from which a cultural trait or innovation first spreads. Answer with the two-word term.",
                "zh": "某一文化特征或创新最初由此向外传播的起源之地。请用这一术语作答（英文为两词）。"
              },
              "answer": "cultural hearth",
              "accept": [
                "cultural hearth",
                "hearth",
                "cultural-hearth"
              ],
              "explanation": {
                "en": "A cultural hearth is where a trait originates before diffusing outward. Mesopotamia and Mesoamerica are classic examples where agriculture, writing, and cities first arose.",
                "zh": "文化发源地是某一特征在向外扩散之前的起源之地。美索不达米亚和中美洲是典型例子，那里最早出现了农业、文字和城市。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The blending of two different cultures or religions into a new hybrid, such as Vodou combining West African religion and Catholicism. Answer with the single term.",
                "zh": "把两种不同文化或宗教融合成新的混合体，如伏都教结合西非宗教与天主教。请用这一术语作答（英文单词）。"
              },
              "answer": "syncretism",
              "accept": [
                "syncretism",
                "cultural syncretism",
                "syncretic"
              ],
              "explanation": {
                "en": "Syncretism is the fusion of two cultures into something new, distinct from acculturation (partial adoption) and assimilation (near-complete adoption of another culture).",
                "zh": "文化融合是两种文化融合出全新事物，区别于涵化（部分采纳）和同化（几近完全采纳另一种文化）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Expansion diffusion in which a trait spreads from larger, more powerful nodes down to smaller ones, skipping places in between. Answer with the two-word term (___ diffusion).",
                "zh": "一种扩张扩散，特征从较大、较有权势的节点向下传到较小节点，越过中间的地方。请用这一术语作答（英文两词，___ diffusion）。"
              },
              "answer": "hierarchical diffusion",
              "accept": [
                "hierarchical diffusion",
                "hierarchical",
                "hierarchical-diffusion"
              ],
              "explanation": {
                "en": "Hierarchical diffusion moves along a hierarchy of settlement size or influence — for example, fashion spreading from world cities to smaller cities and then towns — rather than evenly outward by distance (contagious).",
                "zh": "等级扩散沿着聚落规模或影响力的等级移动——例如时尚从世界城市传到较小城市再到小镇——而非按距离均匀向外扩散（那是传染扩散）。"
              }
            }
          ]
        },
        {
          "id": "religion-and-language",
          "title": "Religion and Language",
          "titleZh": "宗教与语言",
          "content": [
            {
              "type": "h2",
              "en": "Language Families and Their Diffusion",
              "zh": "语系及其扩散"
            },
            {
              "type": "p",
              "en": "Language is one of the most powerful markers of cultural identity. Geographers organize the world's roughly 7,000 languages into a hierarchy. A language family is the largest grouping, made up of languages with a shared but distant common ancestor. Within a family, a language branch shares a more recent origin, and a language group is even more closely related. The Indo-European family is the world's largest by number of speakers, including branches such as Germanic (English, German), Romance (Spanish, French, Italian), Slavic, and Indo-Iranian (Hindi, Persian). Other major families include Sino-Tibetan (Mandarin Chinese), Afro-Asiatic (Arabic, Hebrew), Niger-Congo, and Austronesian.",
              "zh": "语言是文化身份最有力的标志之一。地理学家把世界上约 7000 种语言组织成一个等级体系。语系（language family）是最大的分组，由拥有共同但久远祖先的语言组成。语系之内，语族（language branch）拥有较近的共同起源，而语群（language group）关系则更为密切。印欧语系（Indo-European）按使用人数计是世界最大语系，包括日耳曼语族（英语、德语）、罗曼语族（西班牙语、法语、意大利语）、斯拉夫语族和印度-伊朗语族（印地语、波斯语）等分支。其他主要语系有汉藏语系（普通话）、亚非语系（阿拉伯语、希伯来语）、尼日尔-刚果语系和南岛语系。"
            },
            {
              "type": "p",
              "en": "Languages diffuse the same way other cultural traits do. Indo-European languages spread across the Americas, Africa, and Oceania largely through European colonialism (relocation diffusion by conquest and settlement), which is why Spanish dominates Latin America and English is spoken worldwide. Earlier, the branches of Indo-European itself spread from a hearth — the leading theories place it either among farmers in Anatolia or among pastoral nomads on the Central Asian steppe (the Kurgan hypothesis) — as migrating peoples carried their languages outward over thousands of years.",
              "zh": "语言的扩散方式与其他文化特征相同。印欧语言主要通过欧洲殖民主义（以征服和定居实现的迁移扩散）传遍美洲、非洲和大洋洲，这就是西班牙语主导拉丁美洲、英语通行世界的原因。更早时候，印欧语系各分支本身也从一个发源地扩散——主流理论把它定位于安纳托利亚的农民之中，或中亚草原上的游牧民之中（库尔干假说）——迁移的民族在数千年间把语言带向四方。"
            },
            {
              "type": "h3",
              "en": "Dialects and Toponyms",
              "zh": "方言与地名"
            },
            {
              "type": "p",
              "en": "Within a single language, regional variations in vocabulary, pronunciation, and grammar are called dialects. The line marking the geographic boundary where a particular word or pronunciation ends is an isogloss. A standard language is the dialect chosen as the official or prestige form, such as Received Pronunciation in Britain or Standard Mandarin in China. Language also leaves fingerprints on the map through toponyms — place-names. Toponyms record the culture, language, and history of the people who named a place: 'San Francisco' reveals Spanish Catholic settlement, while '-ham' and '-chester' endings in England reveal Anglo-Saxon and Roman roots. Reading toponyms is a way to detect past waves of migration and sequent occupance.",
              "zh": "在一种语言内部，词汇、发音和语法的地域差异称为方言（dialect）。标示某个词或某种发音在何处终止的地理边界线称为等语线（isogloss）。标准语（standard language）是被选定为官方或权威形式的方言，如英国的\"标准发音\"（RP）或中国的标准普通话。语言还通过地名（toponym）在地图上留下印记。地名记录了命名者的文化、语言与历史：\"旧金山（San Francisco）\"揭示了西班牙天主教的定居，而英格兰以\"-ham\"和\"-chester\"结尾的地名则揭示了盎格鲁-撒克逊和罗马的根源。解读地名是察觉过去移民浪潮与承继占用的一种方法。"
            },
            {
              "type": "note",
              "en": "AP Skill — Vocabulary precision: Do not confuse a language family with a language branch or a dialect. Family = broad, distant common ancestor (Indo-European). Branch = closer relationship (Romance). Dialect = a regional variety of a single language (Cockney English). Using the wrong level of the hierarchy is a common exam error.",
              "zh": "AP 技能——词汇精确：不要把语系、语族与方言混淆。语系＝宽泛的、久远的共同祖先（印欧语系）。语族＝更近的关系（罗曼语族）。方言＝单一语言的地域变体（伦敦东区英语）。用错等级层次是常见的考试失误。"
            },
            {
              "type": "h2",
              "en": "Universalizing and Ethnic Religions",
              "zh": "普世宗教与民族宗教"
            },
            {
              "type": "p",
              "en": "Geographers divide religions into two fundamental types based on whom they seek to include. A universalizing religion actively seeks new members from all peoples through missionary work and conversion; it is open to everyone regardless of ethnicity. The three largest are Christianity, Islam, and Buddhism. An ethnic religion is closely tied to a particular ethnic group and place, is generally not spread by active conversion, and is usually acquired by birth. Hinduism and Judaism are the classic examples. This distinction largely explains each religion's distribution and how it diffuses.",
              "zh": "地理学家根据宗教试图接纳哪些人，把宗教分为两大基本类型。普世宗教（universalizing religion）通过传教与皈依主动从各民族中寻求新成员，不论族裔向所有人开放。三大普世宗教是基督教、伊斯兰教和佛教。民族宗教（ethnic religion）与特定族裔群体和地方紧密相连，一般不通过主动皈依传播，通常因出生而获得。印度教和犹太教是典型例子。这一区分在很大程度上解释了各宗教的分布及其扩散方式。"
            },
            {
              "type": "h3",
              "en": "Distribution and Diffusion of Religions",
              "zh": "宗教的分布与扩散"
            },
            {
              "type": "p",
              "en": "Because universalizing religions seek converts, they diffuse widely and are scattered across the globe. Christianity spread by both relocation diffusion (colonists and missionaries) and hierarchical diffusion (the Roman Emperor Constantine's conversion spread it top-down through the empire). Islam spread through relocation and contagious diffusion outward from its hearth in Mecca and Medina on the Arabian Peninsula, and later along trade routes. Buddhism spread from its hearth in northern India, carried along trade routes into East and Southeast Asia. Ethnic religions, by contrast, stay concentrated near their hearths and spread mainly by relocation when believers migrate — Hinduism remains centered on India, and Judaism, though dispersed by the diaspora, remains an ethnic religion tied to Jewish identity.",
              "zh": "由于普世宗教寻求皈依者，它们扩散广泛、散布全球。基督教既通过迁移扩散（殖民者和传教士），也通过等级扩散传播（罗马皇帝君士坦丁皈依后自上而下传遍帝国）。伊斯兰教从阿拉伯半岛麦加和麦地那的发源地通过迁移扩散和传染扩散向外传播，后来又沿贸易路线扩散。佛教从印度北部的发源地传播，沿贸易路线传入东亚和东南亚。相比之下，民族宗教集中在其发源地附近，主要在信徒迁移时通过迁移扩散传播——印度教仍以印度为中心，而犹太教尽管因大流散（diaspora）而分散，仍是与犹太身份相连的民族宗教。"
            },
            {
              "type": "note",
              "en": "AP Skill — Diffusion mechanisms differ: The universalizing/ethnic distinction predicts diffusion. Universalizing religions use expansion diffusion (conversion) plus relocation, so they are spatially dispersed. Ethnic religions rely almost entirely on relocation diffusion, so they stay clustered. Don't say Judaism 'diffused' by conversion — its spread was migration (the diaspora), not proselytizing.",
              "zh": "AP 技能——扩散机制不同：普世/民族的区分能预测扩散方式。普世宗教使用扩张扩散（皈依）加迁移扩散，因此在空间上分散。民族宗教几乎完全依赖迁移扩散，因此保持聚集。不要说犹太教靠皈依\"扩散\"——它的传播是移民（大流散），而非传教。"
            },
            {
              "type": "h2",
              "en": "Sacred Spaces and Religious Landscapes",
              "zh": "圣地与宗教景观"
            },
            {
              "type": "p",
              "en": "Religion leaves a strong imprint on the cultural landscape. Sacred spaces are places a religion deems holy — Jerusalem (holy to Judaism, Christianity, and Islam), Mecca, the Ganges River, and Bodh Gaya. Religious landscapes include houses of worship (churches, mosques, temples, synagogues), religious place-names, and the way land is used for burial. Burial practices reveal much about a religion: Christianity and Islam bury the dead, consuming large amounts of land in cemeteries, while Hinduism and Buddhism traditionally practice cremation, using little land. Pilgrimage — travel to a sacred site, such as the hajj to Mecca — produces distinctive seasonal flows of people and shapes the landscape of holy cities.",
              "zh": "宗教在文化景观上留下强烈印记。圣地（sacred space）是某宗教视为神圣的地方——耶路撒冷（犹太教、基督教和伊斯兰教的圣地）、麦加、恒河和菩提伽耶。宗教景观包括礼拜场所（教堂、清真寺、寺庙、犹太会堂）、宗教地名，以及土地用于埋葬的方式。丧葬习俗能揭示宗教的许多方面：基督教和伊斯兰教土葬死者，墓地占用大量土地，而印度教和佛教传统上实行火葬，占地很少。朝圣（pilgrimage）——前往圣地的旅行，如前往麦加的朝觐（hajj）——产生独特的季节性人流，并塑造圣城的景观。"
            },
            {
              "type": "h2",
              "en": "Language, Religion, and Cultural Identity",
              "zh": "语言、宗教与文化身份"
            },
            {
              "type": "p",
              "en": "Language and religion are two of the strongest pillars of cultural identity, and they can act as either centripetal or centrifugal forces. A shared religion or language binds a nation together; deep divisions along these lines can tear it apart. Northern Ireland's conflict (Catholic vs. Protestant), the partition of India and Pakistan (Hindu-majority vs. Muslim-majority), and tensions between Israelis and Palestinians all show how religious identity can become a centrifugal force and a source of conflict. Language conflicts — such as Belgium's Flemish-Walloon divide or Quebec's efforts to protect French in Canada — likewise fragment states. Governments respond with policies like official languages or protected minority rights, trying to convert a centrifugal force into a manageable one.",
              "zh": "语言和宗教是文化身份最强有力的两大支柱，它们既可作为向心力，也可作为离心力。共同的宗教或语言把一个民族凝聚在一起；在这些方面的深刻分歧则可能使其分裂。北爱尔兰的冲突（天主教徒对新教徒）、印巴分治（印度教徒占多数对穆斯林占多数），以及以色列人与巴勒斯坦人之间的紧张，都表明宗教身份如何成为离心力和冲突之源。语言冲突——如比利时的弗拉芒-瓦隆分裂，或加拿大魁北克保护法语的努力——同样使国家分裂。政府以官方语言或保护少数群体权利等政策作出回应，试图把离心力转化为可控的力量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Explaining Distribution from Religion Type",
                "zh": "例题 1：从宗教类型解释分布"
              },
              "problem": {
                "en": "Islam is found across North Africa, the Middle East, South Asia, and Southeast Asia, while Hinduism is overwhelmingly concentrated in India and Nepal. Explain this difference using religious geography.",
                "zh": "伊斯兰教遍布北非、中东、南亚和东南亚，而印度教则压倒性地集中在印度和尼泊尔。请用宗教地理学解释这一差异。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The key is the universalizing/ethnic distinction. Islam is a universalizing religion that actively seeks converts, so it used expansion and relocation diffusion — spreading outward from its Arabian hearth through conquest, trade routes, and missionaries across three continents, producing a wide, dispersed distribution. Hinduism is an ethnic religion tied to Indian identity and place; it does not seek converts, so it diffuses only when Hindus migrate. That is why it stays concentrated near its South Asian hearth. A strong answer names both religion types and the matching diffusion mechanisms.",
                  "zh": "关键在于普世/民族的区分。伊斯兰教是主动寻求皈依者的普世宗教，因此使用扩张扩散和迁移扩散——从阿拉伯发源地通过征服、贸易路线和传教士向三大洲外扩散，形成宽广、分散的分布。印度教是与印度身份和地方相连的民族宗教，不寻求皈依，因此只有在印度教徒迁移时才扩散。这就是它集中在南亚发源地附近的原因。优秀的答案会点出两种宗教类型及其相应的扩散机制。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading Toponyms as Evidence",
                "zh": "例题 2：把地名作为证据来解读"
              },
              "problem": {
                "en": "A U.S. state contains towns named St. Cloud, New Ulm, and Red Lake, alongside a river called the Mississippi. What can toponyms tell you about the cultural history of this place?",
                "zh": "美国某州有名为圣克劳德（St. Cloud）、新乌尔姆（New Ulm）和红湖（Red Lake）的城镇，还有一条名为密西西比（Mississippi）的河流。地名能告诉你这个地方怎样的文化史？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Toponyms preserve layers of settlement (sequent occupance). 'Mississippi' and 'Red Lake' derive from Native American (Ojibwe/Dakota) languages, marking the original Indigenous inhabitants. 'St. Cloud' is French Catholic, revealing French exploration and missionary presence. 'New Ulm,' named after Ulm in Germany, records a later wave of German immigrant settlers. Together these place-names document successive cultural groups — Indigenous, French, and German — layered onto the same landscape, exactly the kind of evidence geographers read from the map.",
                  "zh": "地名保存着定居的层次（承继占用）。\"密西西比\"和\"红湖\"源自美洲原住民（奥吉布瓦/达科他）语言，标示着最初的原住民居民。\"圣克劳德\"是法国天主教的，揭示了法国的探险与传教存在。\"新乌尔姆\"以德国的乌尔姆命名，记录了较晚的德国移民定居浪潮。这些地名共同记载了相继的文化群体——原住民、法国人和德国人——层积在同一景观之上，正是地理学家从地图上解读的那类证据。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is the world's largest language family by number of speakers?",
                "zh": "下列哪一项是按使用人数计世界最大的语系？"
              },
              "choices": [
                "Sino-Tibetan",
                "Afro-Asiatic",
                "Indo-European",
                "Niger-Congo"
              ],
              "answer": 2,
              "explanation": {
                "en": "Indo-European is the largest language family by number of speakers, spread worldwide through migration and colonialism and including Germanic, Romance, Slavic, and Indo-Iranian branches. Sino-Tibetan has the most speakers of any single language (Mandarin) but is a smaller family overall; Afro-Asiatic and Niger-Congo are large but smaller than Indo-European.",
                "zh": "印欧语系是按使用人数计最大的语系，通过移民和殖民主义传遍世界，包括日耳曼、罗曼、斯拉夫和印度-伊朗等语族。汉藏语系拥有单一语言（普通话）使用人数最多，但整体语系较小；亚非语系和尼日尔-刚果语系虽大，但小于印欧语系。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pairing correctly matches a religion to its type?",
                "zh": "下列哪一组把宗教与其类型正确配对？"
              },
              "choices": [
                "Hinduism — universalizing",
                "Islam — ethnic",
                "Buddhism — universalizing",
                "Christianity — ethnic"
              ],
              "answer": 2,
              "explanation": {
                "en": "Buddhism is universalizing — it seeks converts from all peoples, as are Christianity and Islam. Hinduism is the classic ethnic religion tied to Indian identity. The distractors reverse these categories: Islam and Christianity are universalizing, not ethnic, and Hinduism is ethnic, not universalizing.",
                "zh": "佛教是普世宗教——它向所有民族寻求皈依者，基督教和伊斯兰教也是如此。印度教是与印度身份相连的典型民族宗教。干扰项颠倒了这些类别：伊斯兰教和基督教是普世宗教而非民族宗教，印度教是民族宗教而非普世宗教。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why do ethnic religions like Hinduism tend to remain spatially concentrated?",
                "zh": "为什么像印度教这样的民族宗教往往在空间上保持集中？"
              },
              "choices": [
                "They diffuse mainly through relocation when believers migrate, not through conversion",
                "They spread aggressively through missionary conversion",
                "They rely on hierarchical diffusion from world cities",
                "They forbid all forms of migration"
              ],
              "answer": 0,
              "explanation": {
                "en": "Ethnic religions do not actively seek converts, so they spread only when believers themselves migrate (relocation diffusion), keeping them clustered near their hearth. Missionary conversion and expansion diffusion are features of universalizing religions, not ethnic ones, and no religion literally forbids all migration.",
                "zh": "民族宗教不主动寻求皈依者，因此只有在信徒本身迁移时才传播（迁移扩散），使其集中在发源地附近。传教皈依和扩张扩散是普世宗教而非民族宗教的特征，而且没有哪种宗教真的禁止一切移民。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which scenario best shows religion acting as a centrifugal force?",
                "zh": "下列哪种情形最能表明宗教作为离心力起作用？"
              },
              "choices": [
                "The 1947 partition of British India into Hindu-majority India and Muslim-majority Pakistan",
                "A national holiday celebrated by nearly all citizens of one faith",
                "A shared pilgrimage that unites believers from across a country",
                "A single official religion adopted peacefully by an entire nation"
              ],
              "answer": 0,
              "explanation": {
                "en": "The partition of India split one colony into two states along religious lines, a textbook centrifugal (dividing) force. The other three describe shared religious practices that unify a population, which are centripetal forces. The trap is assuming religion always divides — it can strongly unite as well.",
                "zh": "印巴分治沿宗教界线把一个殖民地分裂为两个国家，是典型的离心（分裂）力量。其余三项描述的是凝聚民众的共同宗教实践，属于向心力。陷阱在于以为宗教总是分裂——它同样能强烈地凝聚。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Traditional cremation in Hinduism and Buddhism, versus burial in Christianity and Islam, most directly affects the cultural landscape by influencing:",
                "zh": "印度教和佛教传统上的火葬，相对于基督教和伊斯兰教的土葬，最直接地通过影响什么来作用于文化景观？"
              },
              "choices": [
                "The amount of land consumed by cemeteries",
                "The number of lingua francas in a region",
                "The rate of natural population increase",
                "The location of language isoglosses"
              ],
              "answer": 0,
              "explanation": {
                "en": "Burial requires cemetery land, so religions that bury the dead (Christianity, Islam) consume more land than those that cremate (Hinduism, Buddhism) — a visible effect on the religious landscape. Lingua francas and isoglosses relate to language, and burial practice does not drive natural population increase.",
                "zh": "土葬需要墓地用地，因此土葬的宗教（基督教、伊斯兰教）比火葬的宗教（印度教、佛教）占用更多土地——这是对宗教景观的可见影响。通用语和等语线与语言相关，而丧葬习俗并不推动人口自然增长。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The largest grouping of related languages sharing a distant common ancestor, such as Indo-European. Answer with the two-word term.",
                "zh": "拥有久远共同祖先的相关语言所组成的最大分组，如印欧语系。请用这一术语作答（英文为两词）。"
              },
              "answer": "language family",
              "accept": [
                "language family",
                "language-family",
                "family"
              ],
              "explanation": {
                "en": "A language family is the broadest level of the linguistic hierarchy, above branch and group. Indo-European and Sino-Tibetan are two major examples.",
                "zh": "语系是语言等级体系中最宽泛的层次，位于语族和语群之上。印欧语系和汉藏语系是两个主要例子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A religion that actively seeks converts from all peoples, such as Christianity, Islam, and Buddhism. Answer with the single term (___ religion).",
                "zh": "一种主动从所有民族中寻求皈依者的宗教，如基督教、伊斯兰教和佛教。请用这一术语作答（英文单词，___ religion）。"
              },
              "answer": "universalizing",
              "accept": [
                "universalizing",
                "universalizing religion",
                "universalising"
              ],
              "explanation": {
                "en": "A universalizing religion seeks members from everyone and diffuses widely through conversion and relocation, unlike an ethnic religion, which is tied to one group and stays concentrated.",
                "zh": "普世宗教向所有人寻求成员，通过皈依和迁移扩散广泛传播，不同于与单一群体相连、保持集中的民族宗教。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The name given to a place, which often preserves the language and history of the people who named it (e.g., San Francisco). Answer with the single term.",
                "zh": "赋予某地的名称，常保存着命名者的语言和历史（如旧金山）。请用这一术语作答（英文单词）。"
              },
              "answer": "toponym",
              "accept": [
                "toponym",
                "toponyms",
                "place name",
                "place-name"
              ],
              "explanation": {
                "en": "A toponym is a place-name. Toponyms serve as evidence of past migration and sequent occupance, recording which cultures named or settled a place.",
                "zh": "地名是地方的名称。地名可作为过去移民与承继占用的证据，记录哪些文化命名或定居过某地。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-political-patterns-and-processes",
      "title": "Unit 4: Political Patterns and Processes",
      "titleZh": "第四单元：政治的格局与过程",
      "lessons": [
        {
          "id": "states-nations-and-territory",
          "title": "States, Nations, and Territory",
          "titleZh": "国家、民族与领土",
          "content": [
            {
              "type": "h2",
              "en": "The Building Blocks of the Political Map",
              "zh": "政治地图的基本构成"
            },
            {
              "type": "p",
              "en": "Political geography studies how humans divide, organize, and govern space. The most important idea in Unit 4 is that the world map is not natural — it is the product of human decisions, conflict, and cooperation. To read that map you must separate several terms that everyday English blurs together. In AP Human Geography, a \"state\" does NOT mean a subdivision like Texas or California. A state is an independent political unit with a permanently populated territory, defined boundaries, a government, and sovereignty. Roughly 195 states cover almost all of Earth's land surface today.",
              "zh": "政治地理学研究人类如何划分、组织和治理空间。第四单元最重要的观念是：世界地图并非天然存在——它是人类决策、冲突与合作的产物。要读懂这张地图，你必须区分几个日常英语常混淆的术语。在 AP 人文地理中，\"国家（state）\"并不指德克萨斯或加利福尼亚这样的行政区。国家是一个独立的政治单位，拥有永久居住的领土、明确的边界、政府以及主权（sovereignty）。如今约有 195 个国家几乎覆盖了地球所有陆地表面。"
            },
            {
              "type": "note",
              "en": "AP Vocabulary Trap: On the exam, \"state\" = country (like France or Japan), and \"nation\" = a group of people, not a place. Confusing these two is the single most common Unit 4 mistake. \"State\" is about sovereignty and territory; \"nation\" is about shared identity.",
              "zh": "AP 词汇陷阱：在考试中，\"state（国家）\"= 主权国家（如法国或日本），而\"nation（民族）\"= 一群人，而非一个地方。混淆这两者是第四单元最常见的错误。\"国家\"关乎主权与领土；\"民族\"关乎共同认同。"
            },
            {
              "type": "h2",
              "en": "State, Nation, and Nation-State",
              "zh": "国家、民族与民族国家"
            },
            {
              "type": "p",
              "en": "A nation is a group of people who share a common cultural identity — often language, religion, ethnicity, history, or a sense of belonging — and who feel they belong together as a people. A nation is a cultural concept; a state is a political-legal one. A nation-state is a state whose territory corresponds closely to the area settled by a single nation, so that the political boundary and the cultural nation nearly coincide. Japan, Iceland, and Denmark are often cited as close approximations, because most residents share a common national identity. In reality, perfect nation-states are rare — almost every \"nation-state\" contains minority groups.",
              "zh": "民族（nation）是一群拥有共同文化认同——通常包括语言、宗教、族裔、历史或归属感——并觉得彼此同属一个民族的人。民族是文化概念，国家是政治法律概念。民族国家（nation-state）是指其领土与单一民族聚居区高度吻合的国家，因而政治边界与文化民族几乎重合。日本、冰岛和丹麦常被举为接近的例子，因为大多数居民共享同一民族认同。现实中，完美的民族国家极为罕见——几乎每个\"民族国家\"都包含少数群体。"
            },
            {
              "type": "p",
              "en": "Two important variations arise when nation and state do not line up. A multinational state contains two or more nations, but those nations generally coexist within one government; the United Kingdom (English, Scottish, Welsh, Northern Irish), Canada, and Russia are examples. A multistate nation is a single nation whose people are spread across, and form the majority in, more than one state — the Korean nation is divided between North and South Korea. Do not confuse the two: multinational = many nations in one state; multistate = one nation across many states.",
              "zh": "当民族与国家不重合时，会出现两种重要变体。多民族国家（multinational state）包含两个或更多民族，但这些民族通常在同一政府下共存；英国（英格兰、苏格兰、威尔士、北爱尔兰人）、加拿大和俄罗斯即为例子。跨国民族（multistate nation）是指单一民族分散于并在多个国家中构成多数——朝鲜民族被分割于朝鲜与韩国之间。切勿混淆：多民族=一国内多个民族；跨国民族=一个民族横跨多国。"
            },
            {
              "type": "h3",
              "en": "Stateless Nations",
              "zh": "无国家民族"
            },
            {
              "type": "p",
              "en": "A stateless nation is a nation of people who do not have a state of their own — no sovereign territory they control. The classic example is the Kurds, roughly 30 million people spread across Turkey, Iraq, Iran, and Syria who form a majority in none of them. The Palestinians and, historically before 1948, the Jewish people are also cited. Stateless nations are a major source of conflict because a people's desire for self-rule collides with existing state boundaries.",
              "zh": "无国家民族（stateless nation）是指没有属于自己国家的民族——没有他们所控制的主权领土。经典例子是库尔德人（Kurds），约 3000 万人分布于土耳其、伊拉克、伊朗和叙利亚，在任何一国都不构成多数。巴勒斯坦人，以及历史上 1948 年之前的犹太人，也常被引用。无国家民族是冲突的主要来源，因为一个民族对自治的渴望与既有国家边界相冲突。"
            },
            {
              "type": "h3",
              "en": "Autonomous and Semi-Autonomous Regions",
              "zh": "自治与半自治地区"
            },
            {
              "type": "p",
              "en": "An autonomous region is a defined area within a state that is granted a high degree of self-government while still belonging to that state — the central government retains ultimate sovereignty. Examples include Hong Kong and Macau (Special Administrative Regions of China), Catalonia and the Basque Country in Spain, and Greenland within Denmark. A semi-autonomous region has some, but more limited, self-governing power, such as reservations of Indigenous nations within the United States. Autonomy is often granted to satisfy a minority nation's demands for self-determination without full independence.",
              "zh": "自治区（autonomous region）是国家内部一块被赋予高度自治权、但仍属于该国的界定区域——中央政府保留最终主权。例子包括香港和澳门（中国的特别行政区）、西班牙的加泰罗尼亚和巴斯克地区，以及丹麦治下的格陵兰。半自治区（semi-autonomous region）拥有一定但更有限的自治权，如美国境内原住民民族的保留地。自治权往往用于在不完全独立的情况下满足少数民族对自决的诉求。"
            },
            {
              "type": "h2",
              "en": "Sovereignty",
              "zh": "主权"
            },
            {
              "type": "p",
              "en": "Sovereignty is the right of a state to govern itself, control its own territory, and be free from outside interference. It is the defining feature that separates a true state from a colony or a subordinate region. Sovereignty is recognized by other states — a place is effectively a state when the international community treats it as one. This is why some entities are contested: Taiwan functions as an independent state but is not recognized by most governments, while Kosovo and Palestine have partial recognition. Sovereignty is not just a legal fact; it must be exercised and acknowledged.",
              "zh": "主权（sovereignty）是国家自我治理、控制自身领土并免受外部干涉的权利。它是区分真正国家与殖民地或从属地区的决定性特征。主权由其他国家承认——当国际社会将某地当作国家对待时，它才实际成为国家。这就是为何某些实体存在争议：台湾作为独立实体运作，但不被大多数政府承认；科索沃和巴勒斯坦则获得部分承认。主权不仅是法律事实，还必须被行使和被认可。"
            },
            {
              "type": "h2",
              "en": "Colonialism, Imperialism, and Decolonization",
              "zh": "殖民主义、帝国主义与非殖民化"
            },
            {
              "type": "p",
              "en": "The modern political map was shaped overwhelmingly by European expansion. Imperialism is the broad policy of extending a country's power and influence over other territories through diplomacy, economic pressure, or military force. Colonialism is a specific form of imperialism in which a state establishes settlements and takes direct political control of a distant territory and its people. Between the 1500s and early 1900s, European powers colonized nearly all of Africa, the Americas, South and Southeast Asia, and Oceania. The 1884–85 Berlin Conference, at which Europeans divided Africa among themselves with no African representation, is the textbook example of boundaries imposed by outsiders.",
              "zh": "现代政治地图在很大程度上由欧洲扩张塑造。帝国主义（imperialism）是通过外交、经济压力或军事力量将一国权力与影响扩展至其他领土的广义政策。殖民主义（colonialism）是帝国主义的一种具体形式，即一国建立定居点并对遥远领土及其人民进行直接政治控制。在 16 世纪至 20 世纪初，欧洲列强殖民了几乎整个非洲、美洲、南亚和东南亚以及大洋洲。1884–85 年柏林会议（Berlin Conference）上，欧洲人在没有非洲代表的情况下瓜分了非洲，是外来者强加边界的典型案例。"
            },
            {
              "type": "p",
              "en": "Decolonization is the process by which colonies gained independence and became sovereign states, concentrated mainly in the decades after World War II (1945–1975). Decolonization more than tripled the number of independent states. However, because colonial boundaries were drawn for European convenience, many new states inherited borders that split nations apart or forced rival groups together — a lasting cause of instability, especially in Africa and the Middle East.",
              "zh": "非殖民化（decolonization）是殖民地取得独立并成为主权国家的过程，主要集中在二战后的几十年（1945–1975）。非殖民化使独立国家数量增加了两倍以上。然而，由于殖民边界是为欧洲人的便利而划定的，许多新国家继承了将民族分割或将敌对群体强行捏合的边界——这成为长期不稳定的根源，尤其在非洲和中东。"
            },
            {
              "type": "h3",
              "en": "Self-Determination",
              "zh": "自决"
            },
            {
              "type": "p",
              "en": "Self-determination is the right of a people — especially a nation or ethnic group — to govern themselves and choose their own political status, up to and including forming their own independent state. It was a driving ideal of decolonization and remains the moral engine behind independence movements and demands for autonomy today. Self-determination frequently conflicts with the existing territorial integrity of states, which is why it fuels so many separatist and stateless-nation struggles.",
              "zh": "自决（self-determination）是一个民族——尤其是民族或族群——自我治理并选择自身政治地位，直至组建独立国家的权利。它是非殖民化的推动理想，至今仍是独立运动和自治诉求背后的道德引擎。自决常与国家既有的领土完整相冲突，因此引发了众多分离主义和无国家民族的抗争。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Classifying State–Nation Relationships",
                "zh": "例题 1：区分国家与民族的关系"
              },
              "problem": {
                "en": "The Kurds number roughly 30 million and live across Turkey, Iraq, Iran, and Syria, forming a majority in none. Iceland's population is overwhelmingly of shared Icelandic identity within one country. Classify each situation with the correct term and explain your reasoning.",
                "zh": "库尔德人约 3000 万，分布于土耳其、伊拉克、伊朗和叙利亚，在任何一国都不占多数。冰岛的人口绝大多数在同一国家内共享冰岛认同。请用正确术语归类每种情况并解释理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The Kurds are a stateless nation: they share a national identity but control no sovereign state of their own, and they are also spread across four states. Iceland is a nation-state (a close approximation), because its political boundary coincides with the territory of a single nation sharing common identity. The reasoning test: ask \"Do these people have their own sovereign state?\" (Kurds: no) and \"Does the state's territory match one nation?\" (Iceland: yes). Precise vocabulary earns the point — do not just say \"ethnic group.\"",
                  "zh": "库尔德人是无国家民族：他们共享民族认同，却不控制属于自己的主权国家，并且分散于四个国家。冰岛是（接近的）民族国家，因为其政治边界与共享共同认同的单一民族的领土相吻合。判断方法：问\"这些人有自己的主权国家吗？\"（库尔德人：没有）以及\"该国领土是否与一个民族吻合？\"（冰岛：是）。精确的术语才能得分——不要只说\"族群\"。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Explaining a Colonial Legacy",
                "zh": "例题 2：解释殖民遗产"
              },
              "problem": {
                "en": "Explain how the boundaries drawn at the Berlin Conference contributed to political instability in post-independence Africa.",
                "zh": "解释柏林会议所划定的边界如何导致非洲独立后的政治不稳定。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Chain the process: (1) At Berlin (1884–85), Europeans drew boundaries to suit their own claims, using straight lines and rivers rather than cultural patterns. (2) These superimposed borders cut through the territories of existing ethnic nations and lumped rival groups into single colonies. (3) When decolonization arrived, new states inherited these mismatched borders, so a single state often contained multiple nations with no shared identity — a multinational state by force, not choice. (4) The result was weak national cohesion, competition among ethnic groups for control of the state, and recurring civil conflict. A strong answer names the mechanism (imposed borders ignoring cultural geography), not just \"colonialism was bad.\"",
                  "zh": "把过程串起来：(1) 在柏林会议（1884–85），欧洲人按自身主张划界，使用直线和河流而非文化格局。(2) 这些叠加边界（superimposed borders）切割了既有族群民族的territory，并将敌对群体拼入同一殖民地。(3) 非殖民化到来时，新国家继承了这些错配边界，因此一个国家常包含多个毫无共同认同的民族——被迫而非自愿的多民族国家。(4) 结果是民族凝聚力薄弱、各族群争夺国家控制权，以及反复的内战。优秀答案会指出机制（无视文化地理的强加边界），而不只是说\"殖民主义不好\"。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In AP Human Geography, which of the following best defines a \"nation\"?",
                "zh": "在 AP 人文地理中，下列哪项最能定义\"民族（nation）\"？"
              },
              "choices": [
                "A group of people with a shared cultural identity who feel they belong together",
                "An independent political unit with defined borders and sovereignty",
                "A subdivision of a country, such as a province or state",
                "A supranational organization that pools sovereignty"
              ],
              "answer": 0,
              "explanation": {
                "en": "A nation is a cultural concept — a group sharing identity (language, religion, ethnicity, history). The option describing an independent political unit with sovereignty actually defines a state, the most tempting distractor because everyday English uses \"nation\" and \"country\" interchangeably. On the AP exam they are distinct: state = political-legal, nation = cultural.",
                "zh": "民族是文化概念——共享认同（语言、宗教、族裔、历史）的群体。那个描述拥有主权的独立政治单位的选项其实定义的是国家（state），这是最诱人的干扰项，因为日常英语把\"nation\"和\"country\"混用。在 AP 考试中二者不同：国家=政治法律，民族=文化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The Korean people form the majority in both North Korea and South Korea. This situation is best described as a:",
                "zh": "朝鲜民族在朝鲜和韩国都构成多数。这种情况最恰当的描述是："
              },
              "choices": [
                "Multinational state",
                "Stateless nation",
                "Multistate nation",
                "Autonomous region"
              ],
              "answer": 2,
              "explanation": {
                "en": "A multistate nation is one nation spread across, and forming the majority in, more than one state — exactly the Korean case. The tempting distractor is \"multinational state\" (A), but that is the reverse: many nations inside one state. Watch the word order: multiNATIONAL = many nations, one state; multiSTATE = one nation, many states.",
                "zh": "跨国民族（multistate nation）是指一个民族分散于并在多个国家中构成多数——正是朝鲜的情况。诱人的干扰项是\"多民族国家\"（A），但那正好相反：一国内多个民族。注意词序：multiNATIONAL=多个民族、一个国家；multiSTATE=一个民族、多个国家。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is the clearest example of a stateless nation?",
                "zh": "下列哪项是无国家民族最清晰的例子？"
              },
              "choices": [
                "The Kurds",
                "The Japanese",
                "The Canadians",
                "The Russians"
              ],
              "answer": 0,
              "explanation": {
                "en": "The Kurds are roughly 30 million people sharing a national identity but possessing no sovereign state of their own, spread across Turkey, Iraq, Iran, and Syria. The Japanese have Japan (a nation-state), and Canadians and Russians have their own states, so none of those are stateless.",
                "zh": "库尔德人约 3000 万，共享民族认同却没有属于自己的主权国家，分布于土耳其、伊拉克、伊朗和叙利亚。日本人有日本（民族国家），加拿大人和俄罗斯人都有自己的国家，因此都不是无国家民族。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Hong Kong is governed as a Special Administrative Region with a high degree of self-rule, while China retains ultimate sovereignty over it. Hong Kong is best classified as a(n):",
                "zh": "香港作为特别行政区被治理，拥有高度自治，而中国保留对其最终主权。香港最恰当的归类是："
              },
              "choices": [
                "Sovereign nation-state",
                "Stateless nation",
                "Exclave",
                "Autonomous region"
              ],
              "answer": 3,
              "explanation": {
                "en": "An autonomous region has substantial self-government while remaining part of a larger sovereign state — the central government keeps ultimate sovereignty. Hong Kong is not sovereign (rules out \"nation-state\"), it is a place not a people (rules out \"stateless nation\"), and \"exclave\" describes a fragment of territory separated from the main state, which is not the point here.",
                "zh": "自治区拥有大量自治权，同时仍属于更大的主权国家——中央政府保留最终主权。香港没有主权（排除\"民族国家\"），它是一个地方而非一群人（排除\"无国家民族\"），而\"飞地（exclave）\"指与主体分离的territory碎片，非此处要点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which concept most directly motivated the wave of decolonization after World War II and continues to drive separatist movements today?",
                "zh": "哪一概念最直接推动了二战后的非殖民化浪潮，并至今仍驱动着分离主义运动？"
              },
              "choices": [
                "Territorial integrity",
                "Imperialism",
                "Self-determination",
                "Sovereignty pooling"
              ],
              "answer": 2,
              "explanation": {
                "en": "Self-determination — the right of a people to govern themselves and choose their political status — drove independence movements during decolonization and still fuels separatism. \"Territorial integrity\" (A) is the opposing principle that states use to resist breakup, and imperialism (B) is what colonized peoples were resisting, not their motivating ideal.",
                "zh": "自决——一个民族自我治理并选择自身政治地位的权利——推动了非殖民化时期的独立运动，至今仍助长分离主义。\"领土完整\"（A）是国家用来抵制分裂的相反原则；帝国主义（B）是被殖民民族所反抗的对象，而非其激励理想。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What one-word term names the right of a state to govern itself and control its territory free from outside interference? (one word)",
                "zh": "哪个词表示国家自我治理并控制其领土、免受外部干涉的权利？（一个词）"
              },
              "answer": "sovereignty",
              "accept": [
                "sovereignty",
                "sovereign"
              ],
              "explanation": {
                "en": "Sovereignty is the defining feature of a true state and must be recognized by the international community. Without it, a territory is a colony or subordinate region rather than an independent state.",
                "zh": "主权（sovereignty）是真正国家的决定性特征，且必须获得国际社会承认。没有主权，一块领土便是殖民地或从属地区，而非独立国家。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What hyphenated term describes a state whose territory corresponds closely to the area settled by a single nation, so boundary and cultural identity nearly coincide? (hyphenated two-word term)",
                "zh": "哪个带连字符的术语描述其领土与单一民族聚居区高度吻合、边界与文化认同几乎重合的国家？（带连字符的双词术语）"
              },
              "answer": "nation-state",
              "accept": [
                "nation-state",
                "nation state",
                "nation-states"
              ],
              "explanation": {
                "en": "A nation-state pairs one nation with one state (e.g., Iceland, Japan, Denmark as close approximations). True nation-states are rare because almost every state contains minority populations.",
                "zh": "民族国家（nation-state）将一个民族与一个国家配对（如冰岛、日本、丹麦为接近的例子）。真正的民族国家很少，因为几乎每个国家都包含少数群体。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term refers specifically to the process by which colonies gained independence and became sovereign states, especially after 1945? (one word)",
                "zh": "哪个术语专指殖民地取得独立并成为主权国家的过程，尤其在 1945 年之后？（一个词）"
              },
              "answer": "decolonization",
              "accept": [
                "decolonization",
                "decolonisation"
              ],
              "explanation": {
                "en": "Decolonization more than tripled the number of independent states, mostly between 1945 and 1975. Because colonial borders were drawn for European convenience, many new states inherited boundaries that split or combined nations, causing lasting instability.",
                "zh": "非殖民化使独立国家数量增加两倍以上，主要发生在 1945 至 1975 年间。由于殖民边界是为欧洲人便利而划定，许多新国家继承了分割或拼合民族的边界，造成长期不稳定。"
              }
            }
          ]
        },
        {
          "id": "political-boundaries-and-governance",
          "title": "Political Boundaries and Forms of Governance",
          "titleZh": "政治边界与治理形式",
          "content": [
            {
              "type": "h2",
              "en": "Boundaries: The Lines That Define States",
              "zh": "边界：定义国家的界线"
            },
            {
              "type": "p",
              "en": "A boundary is an invisible vertical plane that marks the limit of a state's sovereignty, extending both above the ground (airspace) and below it (minerals, resources). Boundaries are among the most consequential features on the political map because they determine where one government's power ends and another's begins. Geographers classify boundaries in two ways: by how they relate to the cultural landscape (their origin over time) and by what physical or human feature they follow (their type).",
              "zh": "边界（boundary）是一个看不见的垂直平面，标记着国家主权的界限，向上延伸至空域、向下延伸至地下（矿产、资源）。边界是政治地图上最重要的特征之一，因为它们决定了一国政府权力的终点与另一国的起点。地理学家从两方面对边界分类：按其与文化景观的关系（随时间形成的起源）以及按其所遵循的自然或人文特征（类型）。"
            },
            {
              "type": "h3",
              "en": "Boundaries by Origin (relationship to cultural landscape)",
              "zh": "按起源分类（与文化景观的关系）"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Antecedent boundary — drawn before an area is heavily settled or a cultural landscape develops. Example: the U.S.–Canada border along the 49th parallel, established before dense settlement.",
                  "zh": "先成边界（antecedent）——在一地被大量定居或文化景观形成之前划定。例：沿北纬 49 度线的美加边界，在密集定居之前确立。"
                },
                {
                  "en": "Subsequent boundary — drawn after settlement, evolving alongside and reflecting the cultural landscape, especially ethnic and linguistic patterns. Example: the border between Northern Ireland and the Republic of Ireland.",
                  "zh": "后成边界（subsequent）——在定居之后划定，随文化景观（尤其是族裔与语言格局）一同演变并反映之。例：北爱尔兰与爱尔兰共和国之间的边界。"
                },
                {
                  "en": "Superimposed boundary — forced onto an existing cultural landscape by an outside power, ignoring local groups. Example: African borders drawn by Europeans at the Berlin Conference.",
                  "zh": "叠加边界（superimposed）——由外部势力强加于既有文化景观之上，无视当地群体。例：柏林会议上欧洲人划定的非洲边界。"
                },
                {
                  "en": "Relic boundary — a former boundary that no longer functions politically but still leaves marks on the landscape. Example: the line of the former Berlin Wall.",
                  "zh": "残余边界（relic）——已不再具备政治功能、但仍在景观上留下痕迹的旧边界。例：前柏林墙的界线。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Boundaries by Type (what feature they follow)",
              "zh": "按类型分类（所遵循的特征）"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Geometric boundary — a straight line or arc following lines of latitude/longitude, ignoring physical or cultural features. Example: much of the U.S.–Canada border; the straight-line borders of Egypt and Libya.",
                  "zh": "几何边界（geometric）——沿经纬线的直线或弧线，无视自然或文化特征。例：美加边界的大部分；埃及与利比亚的直线边界。"
                },
                {
                  "en": "Physical (natural) boundary — follows a natural feature such as a river, mountain range, or desert. Example: the Rio Grande between the U.S. and Mexico; the Pyrenees between France and Spain.",
                  "zh": "自然边界（physical）——沿河流、山脉或沙漠等自然特征。例：美墨之间的格兰德河；法西之间的比利牛斯山。"
                },
                {
                  "en": "Cultural boundary — follows differences in culture such as language, religion, or ethnicity. Example: the partition of British India into Hindu-majority India and Muslim-majority Pakistan (1947).",
                  "zh": "文化边界（cultural）——沿语言、宗教或族裔等文化差异划分。例：1947 年英属印度分割为印度教为主的印度和穆斯林为主的巴基斯坦。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Exam Tip: A single boundary can carry two labels at once — one for origin, one for type. The U.S.–Canada 49th-parallel border is both antecedent (drawn before settlement) AND geometric (follows a line of latitude). Read the question to see which classification it is asking for.",
              "zh": "AP 考试提示：同一条边界可同时有两个标签——一个按起源，一个按类型。美加北纬 49 度线边界既是先成边界（定居前划定）又是几何边界（沿纬线）。看清题目问的是哪种分类。"
            },
            {
              "type": "h2",
              "en": "How Boundaries Are Made: The Four-Step Process",
              "zh": "边界如何形成：四步过程"
            },
            {
              "type": "p",
              "en": "Creating a working boundary follows an ordered sequence. Learn the order — the AP exam often tests whether you can place these steps correctly.",
              "zh": "建立一条有效边界遵循有序步骤。记住顺序——AP 考试常检验你能否正确排列这些步骤。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Definition — a legal document (usually a treaty) states exactly where the boundary lies, using descriptions or coordinates.",
                  "zh": "定义（definition）——一份法律文件（通常是条约）用描述或坐标准确说明边界的位置。"
                },
                {
                  "en": "Delimitation — the boundary is drawn on an official map.",
                  "zh": "标定（delimitation）——将边界绘制在官方地图上。"
                },
                {
                  "en": "Demarcation — the boundary is physically marked on the ground with fences, signs, pillars, or walls (not all boundaries are demarcated).",
                  "zh": "划界立标（demarcation）——用围栏、标志、界桩或墙在地面上实地标记边界（并非所有边界都会立标）。"
                },
                {
                  "en": "Administration / management — the state maintains and enforces the boundary, deciding how open or closed it is (border patrols, customs, checkpoints).",
                  "zh": "管理（administration）——国家维护和执行边界，决定其开放或封闭程度（边境巡逻、海关、检查站）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Boundary Disputes",
              "zh": "边界争端"
            },
            {
              "type": "p",
              "en": "When states disagree about a boundary, geographers classify the dispute by its cause:",
              "zh": "当国家在边界问题上产生分歧时，地理学家按争端起因分类："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Definitional dispute — disagreement over the legal wording/interpretation of the boundary treaty.",
                  "zh": "定义型争端（definitional）——对边界条约的法律措辞或解释存在分歧。"
                },
                {
                  "en": "Locational (positional) dispute — the definition is agreed upon, but the parties disagree about where the line actually lies on the ground.",
                  "zh": "位置型争端（locational/positional）——定义一致，但各方对界线在地面上的实际位置有分歧。"
                },
                {
                  "en": "Operational (functional) dispute — states agree on the location but disagree over how the border should be managed or operated (e.g., migration, smuggling control).",
                  "zh": "运作型争端（operational/functional）——各国对位置一致，但对边界应如何管理或运作存在分歧（如移民、走私管控）。"
                },
                {
                  "en": "Allocational (resource) dispute — a dispute over resources that cross a boundary, such as oil, water, or minerals underground.",
                  "zh": "资源型争端（allocational）——对跨越边界的资源（如石油、水或地下矿产）产生的争端。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Territoriality and the Shapes of States",
              "zh": "领域性与国家形态"
            },
            {
              "type": "p",
              "en": "Territoriality is the attempt by an individual or group to control and defend a bounded space and to influence what happens within it. At the state scale, the physical shape (morphology) of a state's territory affects how easily it can be governed, defended, and connected. Learn the five shapes and their governance implications.",
              "zh": "领域性（territoriality）是个人或群体控制并捍卫一块有界空间、并影响其中所发生之事的行为。在国家尺度上，国家territory的形态（morphology）影响其治理、防御和连通的难易。记住五种形态及其治理含义。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Compact — roughly circular, distance from center to edge is similar in all directions; easiest to govern and connect. Example: Poland, Uruguay.",
                  "zh": "紧凑型（compact）——大致呈圆形，从中心到边缘各方向距离相近；最易治理和连通。例：波兰、乌拉圭。"
                },
                {
                  "en": "Elongated — long and narrow; communication and transport between ends are difficult. Example: Chile, Vietnam.",
                  "zh": "狭长型（elongated）——细长；两端之间的通讯与交通困难。例：智利、越南。"
                },
                {
                  "en": "Fragmented — separated into several pieces, often by water or another state; hard to unify and govern. Example: Indonesia, Philippines.",
                  "zh": "破碎型（fragmented）——被水域或他国分隔成若干块；难以统一和治理。例：印度尼西亚、菲律宾。"
                },
                {
                  "en": "Perforated — completely surrounds another state (a hole in it). Example: South Africa perforated by Lesotho.",
                  "zh": "穿孔型（perforated）——完全包围另一个国家（形成一个\"洞\"）。例：被莱索托穿孔的南非。"
                },
                {
                  "en": "Prorupted — mostly compact but with a long extension (proruption), often to reach a resource or coast, or to separate two neighbors. Example: Thailand, Namibia (the Caprivi Strip), Democratic Republic of the Congo.",
                  "zh": "带柄型/突出型（prorupted）——大体紧凑但带有一条长延伸（突出部），常为触及资源或海岸，或隔开两个邻国。例：泰国、纳米比亚（卡普里维走廊）、刚果民主共和国。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Enclaves and Exclaves",
              "zh": "内飞地与外飞地"
            },
            {
              "type": "p",
              "en": "An enclave is a territory (or a small state) entirely surrounded by another state — from the point of view of the surrounding state, it is a \"hole.\" Lesotho, entirely surrounded by South Africa, is both an enclave and the reason South Africa is perforated. An exclave is a fragment of a state that is separated from the main body and surrounded by other states — from the point of view of the state it belongs to, it is a detached piece. Kaliningrad (part of Russia but cut off from it by Lithuania and Poland) and Alaska (separated from the rest of the U.S. by Canada) are exclaves.",
              "zh": "内飞地（enclave）是完全被另一国包围的领土（或小国）——从包围国的角度看，它是一个\"洞\"。完全被南非包围的莱索托既是内飞地，也是南非成为穿孔型的原因。外飞地（exclave）是与主体分离、被他国包围的国家碎片——从其所属国角度看，它是一块分离的领土。加里宁格勒（属俄罗斯但被立陶宛和波兰隔断）和阿拉斯加（被加拿大与美国其余部分分开）都是外飞地。"
            },
            {
              "type": "h2",
              "en": "Forms of Governance: Unitary vs. Federal",
              "zh": "治理形式：单一制与联邦制"
            },
            {
              "type": "p",
              "en": "States organize internal power in one of two broad ways. In a unitary state, most power is concentrated in a strong central government, and any regional/local units carry out central decisions; this works best where the population is fairly homogeneous or the state is small (e.g., France, Japan). In a federal state, power is constitutionally divided between a central government and regional governments (states, provinces, or regions) that retain significant authority; this suits large states or multinational states with diverse regions (e.g., the United States, Germany, India, Brazil). Federalism can accommodate cultural diversity and is often used to reduce internal tension by giving regions self-rule.",
              "zh": "国家以两种大方式组织内部权力。在单一制国家（unitary state）中，大部分权力集中于强有力的中央政府，任何地区/地方单位都执行中央决策；这在人口较同质或国家较小时最有效（如法国、日本）。在联邦制国家（federal state）中，权力在宪法上分配给中央政府和保留重大权力的地区政府（州、省或地区）；这适合大国或有多样地区的多民族国家（如美国、德国、印度、巴西）。联邦制能容纳文化多样性，常通过赋予地区自治来缓解内部紧张。"
            },
            {
              "type": "h2",
              "en": "Electoral Geography and Gerrymandering",
              "zh": "选举地理与选区划分操纵"
            },
            {
              "type": "p",
              "en": "Electoral geography studies how the drawing of voting districts shapes political outcomes. Redistricting is the periodic redrawing of electoral district boundaries (in the U.S., after each census) to keep districts roughly equal in population. Gerrymandering is the drawing of district boundaries to give one party, group, or incumbent an unfair advantage. Two common techniques are \"packing\" (concentrating opposing voters into a few districts so their influence is wasted) and \"cracking\" (splitting opposing voters across many districts so they cannot form a majority anywhere). Gerrymandered districts often have bizarre, contorted shapes because the goal is manipulating outcomes, not compact representation.",
              "zh": "选举地理（electoral geography）研究选区划分如何影响政治结果。重新划区（redistricting）是定期重划选区边界（在美国是每次人口普查后），以保持各区人口大致相等。选区划分操纵（gerrymandering）是划定选区边界以给某党、某群体或在任者不公平优势。两种常见手法是\"packing\"（把对方选民集中于少数几个选区，使其影响被浪费）和\"cracking\"（把对方选民分散到许多选区，使其无法在任何地方形成多数）。被操纵的选区常呈怪异扭曲的形状，因为目的在于操纵结果，而非紧凑的代表性。"
            },
            {
              "type": "note",
              "en": "AP Exam Tip: If a map shows a district with a strange, sprawling, contorted shape, the exam is almost always pointing you toward gerrymandering. Be ready to explain the goal — diluting or concentrating a group's votes to change who wins.",
              "zh": "AP 考试提示：如果地图显示某选区形状怪异、蔓延、扭曲，考题几乎总是在指向选区划分操纵。要能解释其目的——稀释或集中某群体的选票以改变胜负。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Double-Classifying a Boundary",
                "zh": "例题 1：为边界做双重分类"
              },
              "problem": {
                "en": "The border between the United States and Canada largely follows the 49th parallel and was fixed by treaty in the early 1800s, before the region was densely settled. Give both its origin classification and its type classification, and justify each.",
                "zh": "美国与加拿大之间的边界大体沿北纬 49 度线，并在 19 世纪初通过条约确定，早于该地区密集定居。请给出其起源分类和类型分类，并分别说明理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Origin: antecedent, because the boundary was established before the cultural landscape (dense settlement) developed. Type: geometric, because it follows a line of latitude (the 49th parallel) rather than any physical or cultural feature. This is the classic case showing that origin and type are independent axes — always check which one the question wants. Saying only \"geometric\" when asked about origin would miss the point.",
                  "zh": "起源：先成边界（antecedent），因为该边界在文化景观（密集定居）形成之前确立。类型：几何边界（geometric），因为它沿一条纬线（北纬 49 度）而非任何自然或文化特征。这是说明起源与类型是两个独立维度的经典案例——务必看清题目要哪一个。若被问起源却只答\"几何边界\"，就答偏了。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Shape and Governance",
                "zh": "例题 2：形态与治理"
              },
              "problem": {
                "en": "Indonesia consists of over 17,000 islands spread across thousands of kilometers of ocean. Identify Indonesia's state shape and explain two governance challenges this shape creates.",
                "zh": "印度尼西亚由 17000 多个岛屿组成，散布于数千公里的海域。指出印尼的国家形态，并解释这种形态造成的两项治理挑战。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Indonesia is a fragmented state (its territory is broken into many separate pieces by water). Governance challenges: (1) Communication and transportation are difficult and costly, so the central government struggles to project authority, deliver services, and defend distant islands. (2) Fragmentation reinforces cultural and ethnic diversity across islands, which can strengthen centrifugal forces and separatist movements (as with East Timor's independence). A strong answer links the physical shape to a concrete governance consequence, not just \"it is hard.\"",
                  "zh": "印尼是破碎型国家（其territory被水域分隔成许多独立部分）。治理挑战：(1) 通讯和交通困难且成本高，中央政府难以投射权威、提供服务并防御遥远岛屿。(2) 破碎强化了各岛之间的文化与族裔多样性，可能增强离心力和分离主义运动（如东帝汶的独立）。优秀答案会把物理形态与具体治理后果联系起来，而不只是说\"很难\"。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "European powers drew borders across Africa at the Berlin Conference, ignoring the existing ethnic and linguistic patterns of the people living there. These borders are best classified as:",
                "zh": "欧洲列强在柏林会议上划定了跨越非洲的边界，无视当地居民既有的族裔与语言格局。这些边界最恰当的归类是："
              },
              "choices": [
                "Superimposed boundaries",
                "Antecedent boundaries",
                "Subsequent boundaries",
                "Relic boundaries"
              ],
              "answer": 0,
              "explanation": {
                "en": "Superimposed boundaries are forced onto an existing cultural landscape by an outside power, ignoring local groups — exactly the African case. Antecedent boundaries are drawn before settlement; subsequent boundaries evolve with the cultural landscape and reflect it; relic boundaries no longer function. The key detail is that the landscape already existed and outsiders overrode it.",
                "zh": "叠加边界由外部势力强加于既有文化景观之上、无视当地群体——正是非洲的情况。先成边界在定居之前划定；后成边界随文化景观演变并反映之；残余边界已不再发挥功能。关键在于景观早已存在，而外来者将其覆盖。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following lists the boundary-creation process in the correct order?",
                "zh": "下列哪项以正确顺序列出了边界创建过程？"
              },
              "choices": [
                "Definition → Delimitation → Demarcation → Administration",
                "Delimitation → Definition → Administration → Demarcation",
                "Demarcation → Definition → Delimitation → Administration",
                "Definition → Demarcation → Delimitation → Administration"
              ],
              "answer": 0,
              "explanation": {
                "en": "The correct order is Definition (a treaty states where the line is) → Delimitation (drawn on a map) → Demarcation (marked on the ground) → Administration (managed and enforced). A useful memory hook: you must legally DEFINE it before you can draw it, mark it, or manage it. The other options scramble this logical sequence.",
                "zh": "正确顺序是：定义（条约说明界线位置）→ 标定（绘于地图）→ 划界立标（地面标记）→ 管理（维护和执行）。记忆法：必须先合法\"定义\"，才能绘制、标记或管理。其他选项都打乱了这一逻辑顺序。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two states agree exactly where their border lies but disagree over how to control the flow of migrants and goods across it. This is best described as a(n):",
                "zh": "两个国家对边界的确切位置一致，却对如何管控人员和货物的跨境流动存在分歧。这最恰当的描述是："
              },
              "choices": [
                "Locational dispute",
                "Definitional dispute",
                "Operational dispute",
                "Allocational dispute"
              ],
              "answer": 2,
              "explanation": {
                "en": "An operational (functional) dispute involves disagreement over how a border is managed or operated, even when its location is agreed. A locational dispute (A) would be about where the line lies; a definitional dispute (B) about the treaty's wording; an allocational dispute (D) about shared resources like oil or water. Here the issue is management, so it is operational.",
                "zh": "运作型（功能型）争端指对边界如何管理或运作的分歧，即使位置已达成一致。位置型争端（A）关乎界线在哪；定义型争端（B）关乎条约措辞；资源型争端（D）关乎石油或水等共享资源。此处问题在于管理，故为运作型。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The nation of Lesotho lies entirely within the borders of South Africa. From the perspective of South Africa, this arrangement makes South Africa which shape, and makes Lesotho which type of territory?",
                "zh": "莱索托完全位于南非境内。从南非的角度看，这使南非成为哪种形态，又使莱索托成为哪种territory？"
              },
              "choices": [
                "Perforated state; enclave",
                "Prorupted state; exclave",
                "Fragmented state; exclave",
                "Elongated state; enclave"
              ],
              "answer": 0,
              "explanation": {
                "en": "A state that completely surrounds another is perforated (there is a \"hole\" in it), and the surrounded territory is an enclave. An exclave (in the other options) is a detached fragment of a state separated from its main body — that describes Kaliningrad or Alaska, not Lesotho. Keep enclave (surrounded) and exclave (detached) straight.",
                "zh": "完全包围另一国的国家是穿孔型（内有一个\"洞\"），被包围的territory是内飞地（enclave）。外飞地（exclave，其他选项）是与主体分离的国家碎片——那描述的是加里宁格勒或阿拉斯加，而非莱索托。要分清内飞地（被包围）与外飞地（被分离）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A political party redraws district boundaries so that most voters of the opposing party are packed into just two oddly shaped districts, wasting their votes elsewhere. This practice is called:",
                "zh": "某政党重划选区边界，使对方党的多数选民被集中塞入两个形状怪异的选区，从而浪费其在其他地方的选票。这种做法称为："
              },
              "choices": [
                "Redistricting",
                "Reapportionment",
                "Devolution",
                "Gerrymandering"
              ],
              "answer": 3,
              "explanation": {
                "en": "Gerrymandering is drawing district lines to give one party an unfair advantage; \"packing\" opponents into a few districts is a classic technique. Redistricting is the neutral, legally required act of redrawing districts — gerrymandering is its abuse. Reapportionment reallocates the number of seats among regions, and devolution is unrelated (transfer of power to sub-regions).",
                "zh": "选区划分操纵（gerrymandering）是划定选区界线以给某党不公平优势；将对手\"packing\"进少数选区是经典手法。重新划区是中性、法律要求的重划行为——操纵是对它的滥用。席位重新分配（reapportionment）是在各地区间重新分配席位数，而权力下放（devolution）无关（把权力移交给次级地区）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes a state in which power is concentrated in a strong central government, with local units mainly carrying out central decisions? (one word, the form is \"____ state\")",
                "zh": "哪个术语描述权力集中于强有力中央政府、地方单位主要执行中央决策的国家？（一个词，格式为\"____ 制国家\"）"
              },
              "answer": "unitary",
              "accept": [
                "unitary",
                "unitary state"
              ],
              "explanation": {
                "en": "A unitary state concentrates power centrally (e.g., France, Japan) and works best where the population is fairly homogeneous or the state is small. It contrasts with a federal state, which divides power between central and regional governments.",
                "zh": "单一制国家（unitary state）将权力集中于中央（如法国、日本），在人口较同质或国家较小时最有效。它与在中央和地区政府间分配权力的联邦制国家相对。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name for a state shape that is mostly compact but has a long, narrow extension of territory, often to reach a resource or the coast? (one word)",
                "zh": "哪个词表示大体紧凑但有一条狭长territory延伸、常为触及资源或海岸的国家形态？（一个词）"
              },
              "answer": "prorupted",
              "accept": [
                "prorupted",
                "proruption",
                "protruded"
              ],
              "explanation": {
                "en": "A prorupted state has a proruption — a long extension from an otherwise compact body (e.g., Thailand, Namibia's Caprivi Strip). The extension often reaches a resource, provides coastal access, or separates two neighbors.",
                "zh": "带柄型/突出型国家（prorupted）拥有一条从原本紧凑主体伸出的长延伸（突出部），如泰国、纳米比亚的卡普里维走廊。该延伸常用于触及资源、提供海岸通道，或隔开两个邻国。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name for a fragment of a state that is separated from the main body of that state and surrounded by other states, such as Alaska or Kaliningrad? (one word)",
                "zh": "哪个词表示与国家主体分离、被他国包围的国家碎片，如阿拉斯加或加里宁格勒？（一个词）"
              },
              "answer": "exclave",
              "accept": [
                "exclave",
                "exclaves"
              ],
              "explanation": {
                "en": "An exclave is a detached part of a state cut off from its main territory by other states. Do not confuse it with an enclave, which is a territory completely surrounded by a single other state (from that surrounding state's point of view).",
                "zh": "外飞地（exclave）是被他国隔断、与主体territory分离的国家部分。切勿与内飞地（enclave）混淆，后者是（从包围国角度看）被单一他国完全包围的territory。"
              }
            }
          ]
        },
        {
          "id": "devolution-and-supranationalism",
          "title": "Devolution and Supranationalism",
          "titleZh": "权力下放与超国家主义",
          "content": [
            {
              "type": "h2",
              "en": "Forces That Hold States Together or Pull Them Apart",
              "zh": "维系或撕裂国家的力量"
            },
            {
              "type": "p",
              "en": "Every state is subject to two opposing sets of pressures. Centripetal forces unify a state — they pull people together, build shared identity, and strengthen support for the government. Centrifugal forces divide a state — they push groups apart and can weaken or even break up the state. Whether a state remains stable depends on the balance between these forces. Recognizing which force a given factor represents, at a given scale, is a core Unit 4 skill.",
              "zh": "每个国家都受到两组相反压力的作用。向心力（centripetal forces）凝聚国家——把人们团结起来、建立共同认同、增强对政府的支持。离心力（centrifugal forces）分裂国家——把群体推开，可能削弱甚至瓦解国家。国家能否保持稳定取决于这两种力量的平衡。识别某因素在特定尺度上代表哪种力量，是第四单元的核心技能。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Centripetal examples: a shared national language, a unifying religion, strong nationalism, a charismatic leader, an external threat that rallies the population, and a well-connected transportation/communication network.",
                  "zh": "向心力例子：共同的国家语言、凝聚性的宗教、强烈的民族主义、有魅力的领袖、能团结民众的外部威胁，以及连通良好的交通/通讯网络。"
                },
                {
                  "en": "Centrifugal examples: deep ethnic, linguistic, or religious divisions; severe economic inequality between regions; physical barriers or great distance; and weak or corrupt government.",
                  "zh": "离心力例子：深刻的族裔、语言或宗教分裂；地区间严重的经济不平等；自然障碍或遥远距离；以及软弱或腐败的政府。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Exam Tip: The same factor can be centripetal OR centrifugal depending on context. Religion unifies Poland (nearly all Catholic) but divides Nigeria (Muslim north, Christian south). Never label a factor without considering how it operates in that specific place.",
              "zh": "AP 考试提示：同一因素依情境可以是向心力或离心力。宗教凝聚波兰（几乎全为天主教徒），却分裂尼日利亚（北部穆斯林、南部基督徒）。切勿在不考虑其在具体地方如何运作的情况下就给某因素贴标签。"
            },
            {
              "type": "h2",
              "en": "Devolution",
              "zh": "权力下放"
            },
            {
              "type": "p",
              "en": "Devolution is the transfer of political power from a central government to regional or subnational governments. It is what happens when centrifugal forces grow strong enough that the central government hands authority \"downward\" to regions — sometimes to satisfy demands for self-rule and prevent full breakup, sometimes as a step toward independence. Devolution can be peaceful (the United Kingdom granting a parliament to Scotland and an assembly to Wales) or it can escalate toward fragmentation (the breakup of the former Yugoslavia and the Soviet Union into many independent states). Devolution operates at a smaller scale than the state and reflects regional identity.",
              "zh": "权力下放（devolution）是政治权力从中央政府向地区或次国家政府的转移。当离心力强大到中央政府将权力\"向下\"移交给地区时便会发生——有时是为满足自治诉求、防止彻底解体，有时则是走向独立的一步。权力下放可以是和平的（英国给予苏格兰议会、给予威尔士议会），也可能升级为破碎（前南斯拉夫和苏联解体为多个独立国家）。权力下放在比国家更小的尺度上运作，反映地区认同。"
            },
            {
              "type": "h3",
              "en": "Factors That Drive Devolution",
              "zh": "推动权力下放的因素"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Ethnic and cultural factors — a region with a distinct ethnic, linguistic, or religious identity may demand self-rule or independence. Examples: Catalonia and the Basque Country in Spain; Québec in Canada; the breakup of Yugoslavia along ethnic lines.",
                  "zh": "族裔与文化因素——拥有独特族裔、语言或宗教认同的地区可能要求自治或独立。例：西班牙的加泰罗尼亚和巴斯克地区；加拿大的魁北克；南斯拉夫沿族裔界线的解体。"
                },
                {
                  "en": "Economic factors — a wealthier region may resent subsidizing poorer regions (as in Catalonia or northern Italy), or a poorer region may feel neglected; economic disparity fuels demands for autonomy.",
                  "zh": "经济因素——较富裕的地区可能不满补贴较贫穷地区（如加泰罗尼亚或意大利北部），或较贫穷地区感到被忽视；经济差距助长自治诉求。"
                },
                {
                  "en": "Physical/spatial factors — distance, physical barriers, and fragmentation (e.g., islands far from the capital) weaken central control and encourage devolution or separatism. Example: distant islands seeking autonomy.",
                  "zh": "自然/空间因素——距离、自然障碍和破碎（如远离首都的岛屿）削弱中央控制，助长权力下放或分离主义。例：遥远的岛屿寻求自治。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Effects of Democratization",
              "zh": "民主化的影响"
            },
            {
              "type": "p",
              "en": "Democratization — the transition toward more representative, participatory government — reshapes political power geographically. As citizens gain voice, long-suppressed regional and ethnic identities can express themselves openly, sometimes producing new demands for autonomy or independence. Democratization can be centripetal (giving groups a legitimate stake in the state reduces the pull toward separation) or centrifugal (openness allows separatist movements to organize freely). The collapse of authoritarian control in the Soviet Union and Yugoslavia, for instance, unleashed both democratization and violent fragmentation.",
              "zh": "民主化（democratization）——向更具代表性、参与性的政府转型——在地理上重塑政治权力。随着公民获得话语权，长期被压制的地区和族裔认同得以公开表达，有时催生新的自治或独立诉求。民主化既可以是向心的（让群体在国家中拥有合法利益，减少分离倾向），也可以是离心的（开放使分离主义运动得以自由组织）。例如，苏联和南斯拉夫威权控制的崩溃同时释放了民主化和暴力破碎。"
            },
            {
              "type": "h2",
              "en": "Supranationalism",
              "zh": "超国家主义"
            },
            {
              "type": "p",
              "en": "A supranational organization is an alliance of three or more states that cooperate for shared political, economic, cultural, or military goals, giving up a measure of sovereignty in exchange for collective benefits. Supranationalism works at a scale ABOVE the individual state — the opposite direction from devolution, which works below it. States join because cooperation offers advantages (larger markets, collective security, a stronger voice) that outweigh the sovereignty they pool.",
              "zh": "超国家组织（supranational organization）是三个或更多国家为共同的政治、经济、文化或军事目标而合作的联盟，以让渡一部分主权换取集体利益。超国家主义在高于单个国家的尺度上运作——与在其之下运作的权力下放方向相反。国家加入是因为合作带来的好处（更大的市场、集体安全、更强的话语权）超过其所让渡的主权。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "United Nations (UN) — a nearly global organization (about 193 members) promoting international cooperation, peacekeeping, human rights, and development.",
                  "zh": "联合国（UN）——几乎全球性的组织（约 193 个成员），促进国际合作、维和、人权与发展。"
                },
                {
                  "en": "European Union (EU) — the deepest example of economic and political integration: a common market with free movement of goods, capital, services, and people, a shared currency (the euro) for many members, and shared laws and institutions.",
                  "zh": "欧洲联盟（EU）——经济与政治一体化最深入的例子：商品、资本、服务和人员自由流动的共同市场，许多成员共用货币（欧元），以及共享的法律与机构。"
                },
                {
                  "en": "North Atlantic Treaty Organization (NATO) — a military alliance for collective defense: an attack on one member is treated as an attack on all.",
                  "zh": "北大西洋公约组织（NATO）——用于集体防御的军事联盟：对一个成员的攻击被视为对全体的攻击。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Effects on Sovereignty",
              "zh": "对主权的影响"
            },
            {
              "type": "p",
              "en": "Supranationalism creates tension with sovereignty. By joining, a state agrees that some decisions will be made collectively, above the national level. EU members, for example, accept EU laws, trade rules, and — for eurozone members — a shared monetary policy they cannot set alone. Many citizens support this for the benefits, but others resist the loss of national control. The United Kingdom's 2016 vote to leave the EU (\"Brexit\") is the landmark example of a state reasserting sovereignty against a supranational body. Supranationalism can be a centripetal force among members (binding them together) while triggering a centrifugal backlash of nationalism within them.",
              "zh": "超国家主义与主权产生张力。加入即意味着国家同意某些决策将在国家层级之上集体作出。例如欧盟成员接受欧盟法律、贸易规则，以及（对欧元区成员而言）无法单独制定的共同货币政策。许多公民因其好处而支持，但也有人抵制国家控制权的丧失。英国 2016 年投票脱离欧盟（\"脱欧/Brexit\"）是国家对抗超国家机构、重申主权的标志性例子。超国家主义在成员之间可以是向心力（把它们绑在一起），同时在其内部引发民族主义的离心反弹。"
            },
            {
              "type": "h2",
              "en": "Challenges to Sovereignty: Globalization",
              "zh": "对主权的挑战：全球化"
            },
            {
              "type": "p",
              "en": "Globalization — the increasing interconnection of the world's economies, cultures, and populations — challenges the traditional sovereignty of states from several directions at once. Multinational corporations can operate across borders and shift production to wherever costs are lowest, limiting a government's control over its own economy. Global financial markets, the internet, migration flows, and transnational problems like climate change and pandemics all cross boundaries that no single state can fully control. Supranational organizations, international law, and non-state actors further dilute the idea that the sovereign state is the only meaningful actor. At the same time, globalization can provoke a centrifugal nationalist reaction, as some groups push back to protect local identity and national control.",
              "zh": "全球化（globalization）——世界经济、文化和人口日益相互联系——从多个方向同时挑战国家的传统主权。跨国公司可跨境运营，将生产转移到成本最低之处，限制政府对自身经济的控制。全球金融市场、互联网、移民流动，以及气候变化和流行病等跨国问题，都跨越了任何单一国家都无法完全控制的边界。超国家组织、国际法和非国家行为体进一步削弱了\"主权国家是唯一重要行为体\"的观念。与此同时，全球化也可能激起离心的民族主义反应，一些群体反弹以保护本地认同和国家控制权。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Devolution vs. Supranationalism (scale)",
                "zh": "例题 1：权力下放与超国家主义（尺度）"
              },
              "problem": {
                "en": "The United Kingdom granted its own parliament to Scotland while simultaneously being (until 2020) a member of the European Union. Explain how these two processes move sovereignty in opposite directions, using the concept of scale.",
                "zh": "英国给予苏格兰自己的议会，同时（直到 2020 年）又是欧洲联盟成员。请用尺度概念解释这两个过程如何将主权推向相反方向。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Devolution moves power downward, to a smaller scale: Westminster transferred authority to a regional Scottish Parliament, responding to Scottish national identity (a centrifugal pressure). Supranationalism moves power upward, to a larger scale: by joining the EU, the UK pooled sovereignty with other states, accepting EU-level laws and trade rules. So the same state was simultaneously giving power to a sub-state region AND to an above-state organization. A strong AP answer explicitly names the direction of scale for each — down for devolution, up for supranationalism — rather than just describing the two events.",
                  "zh": "权力下放把权力向下移，移向更小尺度：威斯敏斯特将权力移交给地区性的苏格兰议会，回应苏格兰民族认同（一种离心压力）。超国家主义把权力向上移，移向更大尺度：通过加入欧盟，英国与其他国家共享主权，接受欧盟层级的法律和贸易规则。因此同一个国家同时把权力交给一个次国家地区，又交给一个高于国家的组织。优秀的 AP 答案会明确指出各自的尺度方向——下放向下、超国家向上——而不只是描述这两件事。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Classifying a Force",
                "zh": "例题 2：判断一种力量"
              },
              "problem": {
                "en": "Nigeria has a predominantly Muslim north and a predominantly Christian south, and these religious regions have repeatedly clashed over political power and law. Is religion here a centripetal or centrifugal force? Contrast this with the role of religion in Poland.",
                "zh": "尼日利亚北部主要为穆斯林、南部主要为基督徒，这些宗教地区在政治权力和法律上反复冲突。此处宗教是向心力还是离心力？请与波兰宗教的作用作对比。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "In Nigeria, religion is a centrifugal force: the sharp Muslim–Christian divide pulls the country apart, fueling conflict and weakening national unity. In Poland, where nearly everyone is Roman Catholic, religion is a centripetal force: a shared faith reinforces a common national identity and binds the population together. The lesson is that a factor is not inherently centripetal or centrifugal — its effect depends on whether it is shared across the state (unifying) or divides regions against each other (fragmenting). Always analyze the factor in context.",
                  "zh": "在尼日利亚，宗教是离心力：尖锐的穆斯林—基督徒分裂把国家撕开，助长冲突、削弱民族团结。在波兰，几乎人人都是罗马天主教徒，宗教是向心力：共同信仰强化共同民族认同、把民众凝聚在一起。启示在于：某因素本身并非天然向心或离心——其作用取决于它是被全国共享（凝聚），还是使各地区相互对立（分裂）。务必结合情境分析。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A shared national language, strong nationalism, and an external threat that rallies the population are all examples of what kind of force acting on a state?",
                "zh": "共同的国家语言、强烈的民族主义，以及能团结民众的外部威胁，都是作用于国家的哪类力量的例子？"
              },
              "choices": [
                "Centripetal forces",
                "Centrifugal forces",
                "Supranational forces",
                "Devolutionary forces"
              ],
              "answer": 0,
              "explanation": {
                "en": "Centripetal forces unify a state by building shared identity and support for the government — exactly what a common language and rallying threat do. Centrifugal forces, by contrast, divide a state. The word root helps: centriPETAL pulls toward the center (together); centriFUGAL flees the center (apart).",
                "zh": "向心力通过建立共同认同和对政府的支持来凝聚国家——正是共同语言和团结性威胁的作用。相比之下，离心力分裂国家。词根有助记忆：centriPETAL 拉向中心（团结）；centriFUGAL 逃离中心（分裂）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The United Kingdom transferring political power to a newly created Scottish Parliament is the clearest example of:",
                "zh": "英国将政治权力移交给新设立的苏格兰议会，是下列哪项最清晰的例子？"
              },
              "choices": [
                "Supranationalism",
                "Imperialism",
                "Devolution",
                "Gerrymandering"
              ],
              "answer": 2,
              "explanation": {
                "en": "Devolution is the transfer of power from a central government down to a regional government — exactly this case. Supranationalism (A) moves power upward to an organization above the state, the opposite direction. Imperialism and gerrymandering are unrelated concepts. Watch the direction of power: devolution goes downward to sub-state regions.",
                "zh": "权力下放是权力从中央政府向下移交给地区政府——正是此例。超国家主义（A）把权力向上移交给高于国家的组织，方向相反。帝国主义和选区操纵是无关概念。注意权力方向：权力下放是向下移交给次国家地区。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Wealthier Catalonia has pushed for greater autonomy from Spain, partly because it resents subsidizing poorer Spanish regions. Which type of devolutionary factor is most directly illustrated here?",
                "zh": "较富裕的加泰罗尼亚推动从西班牙获得更大自治，部分原因是不满补贴较贫穷的西班牙地区。这里最直接体现了哪类权力下放因素？"
              },
              "choices": [
                "Physical/spatial factor",
                "Economic factor",
                "Supranational factor",
                "Electoral factor"
              ],
              "answer": 1,
              "explanation": {
                "en": "The resentment over subsidizing poorer regions is an economic factor driving devolution. Catalonia also has a distinct cultural identity (an ethnic factor), but the specific detail here — wealth disparity and subsidies — is economic. Physical/spatial factors (A) involve distance or barriers, which are not the point in this prompt.",
                "zh": "对补贴较穷地区的不满是推动权力下放的经济因素。加泰罗尼亚也有独特的文化认同（族裔因素），但此处的具体细节——财富差距与补贴——属经济因素。自然/空间因素（A）涉及距离或障碍，非本题要点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement best describes the effect of joining the European Union on a member state's sovereignty?",
                "zh": "下列哪项最能描述加入欧洲联盟对成员国主权的影响？"
              },
              "choices": [
                "It fully eliminates the member state's sovereignty",
                "It has no effect on sovereignty because the EU is only economic",
                "It increases the member state's sovereignty over its neighbors",
                "The member state pools some sovereignty, accepting collective decisions in exchange for benefits"
              ],
              "answer": 3,
              "explanation": {
                "en": "Supranational membership means a state gives up a measure of sovereignty — accepting EU laws, trade rules, and (for the eurozone) shared monetary policy — in exchange for collective benefits like a common market. It does not eliminate sovereignty entirely (that claim is too extreme; states can even leave, as with Brexit), and the EU is political as well as economic (so \"only economic\" is false).",
                "zh": "超国家成员身份意味着国家让渡一部分主权——接受欧盟法律、贸易规则以及（对欧元区）共同货币政策——以换取共同市场等集体利益。它并未完全消灭主权（那种说法过于极端；国家甚至可以退出，如脱欧），而欧盟不仅是经济性的、也是政治性的（因此\"仅是经济性\"错误）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A multinational corporation shifts its factories to whichever country offers the lowest costs, limiting any single government's control over its economy. This is an example of how which process challenges state sovereignty?",
                "zh": "一家跨国公司把工厂迁往成本最低的国家，从而限制了任何单一政府对其经济的控制。这体现了哪一过程如何挑战国家主权？"
              },
              "choices": [
                "Devolution",
                "Globalization",
                "Demarcation",
                "Self-determination"
              ],
              "answer": 1,
              "explanation": {
                "en": "Globalization — the growing interconnection of economies and the cross-border reach of multinational corporations — erodes a state's control over its own economy, a key challenge to sovereignty. Devolution (A) is an internal transfer of power, not a global economic force; demarcation is a boundary step; self-determination concerns a people's right to govern themselves.",
                "zh": "全球化——经济日益相互联系以及跨国公司的跨境影响力——侵蚀国家对自身经济的控制，是对主权的关键挑战。权力下放（A）是内部的权力转移，而非全球经济力量；划界立标是边界步骤；自决关乎一个民族自我治理的权利。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term names forces that tend to divide a state and pull its people or regions apart? (one word, the adjective)",
                "zh": "哪个术语指倾向于分裂国家、把其人民或地区推开的力量？（一个词，形容词）"
              },
              "answer": "centrifugal",
              "accept": [
                "centrifugal",
                "centrifugal force",
                "centrifugal forces"
              ],
              "explanation": {
                "en": "Centrifugal forces (ethnic division, economic inequality, distance, weak government) push a state toward fragmentation. Their opposite, centripetal forces, unify a state. The same factor can act as either one depending on whether it is shared or divisive in that place.",
                "zh": "离心力（族裔分裂、经济不平等、距离、软弱政府）把国家推向破碎。其反面向心力则凝聚国家。同一因素依其在该地是共享还是分裂而可以充当其中任一种。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What one-word term names the transfer of political power from a central government to regional or subnational governments? (one word)",
                "zh": "哪个词表示政治权力从中央政府转移到地区或次国家政府？（一个词）"
              },
              "answer": "devolution",
              "accept": [
                "devolution",
                "devolve"
              ],
              "explanation": {
                "en": "Devolution moves power downward to a smaller scale, often in response to centrifugal pressures like regional ethnic or economic identity. It can be peaceful (Scotland's parliament) or escalate toward the breakup of a state (Yugoslavia).",
                "zh": "权力下放（devolution）把权力向下移至更小尺度，常为回应地区族裔或经济认同等离心压力。它可以是和平的（苏格兰议会），也可能升级为国家的解体（南斯拉夫）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes an alliance of three or more states that pool some sovereignty to cooperate on shared goals, such as the EU, UN, or NATO? (one word, an adjective describing the organization)",
                "zh": "哪个术语描述三个或更多国家让渡部分主权、为共同目标合作的联盟，如欧盟、联合国或北约？（一个词，描述该组织的形容词）"
              },
              "answer": "supranational",
              "accept": [
                "supranational",
                "supranationalism",
                "supra-national"
              ],
              "explanation": {
                "en": "A supranational organization operates at a scale above the individual state, the opposite direction from devolution. Members accept collective decisions in exchange for benefits like larger markets or collective security, which creates tension with national sovereignty.",
                "zh": "超国家组织（supranational）在高于单个国家的尺度上运作，与权力下放方向相反。成员接受集体决策以换取更大市场或集体安全等好处，这与国家主权产生张力。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-5-agriculture-and-rural-land-use",
      "title": "Unit 5: Agriculture and Rural Land-Use Patterns and Processes",
      "titleZh": "第五单元：农业与乡村土地利用的格局与过程",
      "lessons": [
        {
          "id": "origins-and-agricultural-regions",
          "title": "Agricultural Origins and Regions",
          "titleZh": "农业起源与区域",
          "content": [
            {
              "type": "h2",
              "en": "Where Farming Began: Agricultural Hearths",
              "zh": "农业的起源：农业源地"
            },
            {
              "type": "p",
              "en": "Agriculture is the deliberate raising of crops and livestock for food and other products. It did not begin in one place. Instead, plants and animals were domesticated independently in several agricultural hearths — source regions where farming was invented. Carl Sauer, a cultural geographer, argued that vegetative planting (reproducing plants by cutting and dividing existing ones, like taro or bananas) came first in Southeast Asia, and that seed agriculture (planting seeds) developed later in regions such as the Fertile Crescent of Southwest Asia, the Indus Valley, East Asia, Mesoamerica, and the Andes.",
              "zh": "农业是有意识地种植作物、饲养牲畜以获取食物及其他产品的活动。它并非只在一个地方产生，而是在若干个农业源地（agricultural hearth）中独立驯化了植物和动物——这些源地是农业被\"发明\"出来的地区。文化地理学家卡尔·索尔（Carl Sauer）认为，无性繁殖种植（vegetative planting，通过切分现有植株来繁殖，如芋头或香蕉）最早出现在东南亚，而种子农业（seed agriculture，播种繁殖）稍晚发展于西南亚的新月沃地、印度河流域、东亚、中美洲和安第斯等地区。"
            },
            {
              "type": "p",
              "en": "Different hearths domesticated different staples: wheat and barley in the Fertile Crescent, rice in East and Southeast Asia, maize (corn) and beans in Mesoamerica, and potatoes in the Andes. From these hearths, crops and techniques spread outward through diffusion — for example, wheat farming diffused from Southwest Asia into Europe and North Africa. The AP exam wants you to connect specific crops and animals to their hearths and to trace how they later spread.",
              "zh": "不同源地驯化了不同的主粮：新月沃地的小麦和大麦、东亚与东南亚的水稻、中美洲的玉米（maize）和豆类、安第斯的马铃薯。作物与技术从这些源地通过扩散（diffusion）向外传播——例如小麦种植从西南亚扩散到欧洲和北非。AP 考试要求你把具体作物和动物与其源地对应起来，并追溯它们后来的传播路径。"
            },
            {
              "type": "note",
              "en": "AP Tip — Hearth vs. diffusion: A \"hearth\" is where something originates; \"diffusion\" is how it spreads. Domestication of a crop happened at a hearth; the later spread of that crop to new regions is diffusion (usually relocation or expansion diffusion). Don't confuse the place of origin with the process of spread.",
              "zh": "AP 提示——源地与扩散：源地（hearth）是事物起源之处；扩散（diffusion）是它传播的方式。作物的驯化发生在源地；该作物后来传播到新地区则属于扩散（通常是迁移扩散或扩展扩散）。不要把起源地点与传播过程混为一谈。"
            },
            {
              "type": "h2",
              "en": "Physical Geography and Climate",
              "zh": "自然地理与气候"
            },
            {
              "type": "p",
              "en": "What farmers can grow is shaped by the physical environment: climate, soil, topography (slope and elevation), and access to water. Climate regions map closely onto agricultural regions. Tropical wet climates support shifting cultivation and plantation crops such as coffee, cacao, and rubber; dry climates favor pastoral nomadism and irrigated grain; temperate climates support mixed crop and livestock farming and dairying. Cash grains like wheat dominate semi-arid interiors where rainfall is too low for many other crops.",
              "zh": "农民能种什么，取决于自然环境：气候、土壤、地形（坡度与海拔）以及水源。气候区与农业区高度重叠。热带湿润气候适宜迁移农业和咖啡、可可、橡胶等种植园作物；干旱气候适合游牧和灌溉谷物；温带气候适宜作物—牲畜混合农业和乳畜业。像小麦这样的商品谷物则主导降水太少、不适宜多数其他作物的半干旱内陆地区。"
            },
            {
              "type": "p",
              "en": "The environment sets limits, but it does not fully determine choices. This is the idea of possibilism: the physical setting offers a range of possible land uses, and people select among them based on culture, technology, and economics. Terracing hillsides, draining wetlands, irrigating deserts, and building greenhouses all let farmers push past environmental limits. On the AP exam, avoid environmental determinism (the discredited claim that climate dictates human behavior) and argue with possibilism instead.",
              "zh": "环境设定了限制，却不完全决定选择。这就是可能论（possibilism）：自然条件提供了一系列可能的土地利用方式，人们再根据文化、技术和经济加以选择。修筑梯田、排干湿地、灌溉沙漠、建造温室，都能让农民突破环境的限制。在 AP 考试中，要避免环境决定论（environmental determinism，即气候决定人类行为这一已被否定的观点），而应以可能论进行论证。"
            },
            {
              "type": "h2",
              "en": "Subsistence vs. Commercial Agriculture",
              "zh": "自给农业与商品农业"
            },
            {
              "type": "p",
              "en": "A key distinction is purpose. Subsistence agriculture is farming to feed the farmer's own family, with little surplus for sale; it dominates in less-developed countries and involves a large share of the labor force. Commercial agriculture is farming to sell products for profit, often on the market; it dominates in more-developed countries, uses more machinery and capital, and employs a small share of the workforce. As countries develop, the percentage of workers in agriculture falls sharply even as output per worker rises.",
              "zh": "一个关键区分是目的。自给农业（subsistence agriculture）是为养活农民自己家庭而耕作，几乎没有剩余出售；它主导着较不发达国家，投入了大量劳动力。商品农业（commercial agriculture）是为在市场上出售产品获利而耕作，主导着较发达国家，使用更多机械和资本，只雇用很小比例的劳动力。随着国家发展，务农人口比例急剧下降，而每个工人的产出却上升。"
            },
            {
              "type": "p",
              "en": "Intensity is a second axis. Intensive agriculture applies large inputs of labor or capital to a small area of land to maximize yield per unit of land (for example, market gardening, rice paddies, or feedlots). Extensive agriculture uses fewer inputs over a large area, so yield per acre is low but total output can be large (for example, ranching, shifting cultivation, and pastoral nomadism). Land near cities, where land is expensive, tends to be farmed intensively; land far from cities tends to be extensive.",
              "zh": "集约程度是第二条轴线。集约农业（intensive agriculture）在小块土地上投入大量劳动或资本以最大化单位土地产量（如商品菜园、水稻田或育肥场）；粗放农业（extensive agriculture）在大片土地上投入较少，单位面积产量低，但总产量可以很大（如放牧、迁移农业和游牧）。城市附近土地昂贵，往往集约经营；远离城市的土地则往往粗放经营。"
            },
            {
              "type": "h3",
              "en": "Major Agricultural Practices",
              "zh": "主要农业类型"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Shifting cultivation (slash-and-burn / swidden): an extensive subsistence system in tropical rainforests; farmers clear and burn a patch, farm it for a few years until soil fertility drops, then move on and let it regrow. Uses swidden fields and features low population density.",
                  "zh": "迁移农业（shifting cultivation，即刀耕火种/游耕）：热带雨林中的粗放自给系统；农民砍烧一片林地，耕种数年直到地力下降，再迁往别处让原地恢复。使用轮歇地（swidden），人口密度低。"
                },
                {
                  "en": "Pastoral nomadism: an extensive subsistence system in dry climates (deserts and steppes); herders move livestock (camels, goats, sheep, cattle) seasonally to find pasture, sometimes following fixed routes called transhumance.",
                  "zh": "游牧（pastoral nomadism）：干旱气候（沙漠与草原）中的粗放自给系统；牧民随季节赶着牲畜（骆驼、山羊、绵羊、牛）迁移寻找牧草，有时沿固定路线迁徙，称为季节性迁牧（transhumance）。"
                },
                {
                  "en": "Intensive subsistence (wet rice / non-wet rice): dense-population systems in East, South, and Southeast Asia where farmers apply heavy labor to small plots; wet rice in paddies is the classic example, often double-cropped.",
                  "zh": "集约自给农业（水稻/非水稻）：东亚、南亚、东南亚人口密集地区的系统，农民在小块土地上投入大量劳动；水田种稻是典型代表，常一年多熟。"
                },
                {
                  "en": "Plantation agriculture: large commercial farms in the tropics (often in developing countries) growing one or two cash crops (coffee, sugar, bananas, rubber, cotton) for export to wealthy markets; a legacy of colonialism.",
                  "zh": "种植园农业（plantation agriculture）：热带地区（常在发展中国家）种植一两种经济作物（咖啡、糖、香蕉、橡胶、棉花）供出口到富裕市场的大型商品农场；是殖民主义的遗产。"
                },
                {
                  "en": "Mixed crop and livestock farming: a commercial system common in the U.S. Midwest and Europe where crops (like corn and soy) are grown mainly to feed animals raised for meat and dairy; integrates fields and herds.",
                  "zh": "作物—牲畜混合农业（mixed crop and livestock farming）：美国中西部和欧洲常见的商品系统，主要种植作物（如玉米、大豆）用来饲喂供肉、乳的牲畜；把耕地与畜群结合起来。"
                },
                {
                  "en": "Market gardening (truck farming): intensive commercial production of fruits, vegetables, and flowers near urban markets or in mild climates, sold fresh; highly perishable output.",
                  "zh": "商品菜园/近郊蔬果种植（market gardening / truck farming）：在城市市场附近或温和气候中集约化商品生产水果、蔬菜、花卉，就近鲜销；产品高度易腐。"
                },
                {
                  "en": "Commercial gardening, dairy farming, livestock ranching, and Mediterranean agriculture (olives, grapes, citrus in dry-summer climates) round out the major commercial types.",
                  "zh": "商品园艺、乳畜业、大牧场放牧业，以及地中海农业（Mediterranean agriculture，即在夏干气候中种植橄榄、葡萄、柑橘）构成了其余主要的商品农业类型。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Tip — Development connection: Subsistence and extensive systems (shifting cultivation, nomadism, intensive subsistence rice) cluster in the periphery / less-developed world; capital-intensive commercial systems (mechanized grain, feedlots, dairying) cluster in the core / more-developed world. Plantation agriculture is the exception — it is commercial and export-oriented but located in developing tropical regions, a colonial legacy.",
              "zh": "AP 提示——与发展水平的联系：自给与粗放系统（迁移农业、游牧、集约自给稻作）集中于边缘/欠发达世界；资本密集的商品系统（机械化谷物、育肥场、乳畜业）集中于核心/发达世界。种植园农业是例外——它是商品化、面向出口的，却位于发展中的热带地区，属殖民遗产。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Classifying a Farming System",
                "zh": "例题 1：判定一种农业类型"
              },
              "problem": {
                "en": "A farmer in the Sahel moves a herd of goats and camels along seasonal routes between wet-season and dry-season pastures, keeping no permanent fields. Classify this system by purpose and intensity, and name it.",
                "zh": "萨赫勒地区的一位牧民赶着山羊和骆驼，沿季节性路线在雨季牧场与旱季牧场之间迁移，不保留固定耕地。请按目的和集约程度对该系统分类并命名。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Purpose: subsistence — the herd feeds the family, not a distant market. Intensity: extensive — large land area, low inputs per acre, and low population density suited to a dry climate. The specific name is pastoral nomadism, and the seasonal movement between pastures is transhumance. The dry climate is the key environmental clue: too arid for reliable crops, so people specialize in mobile herding.",
                  "zh": "目的：自给——畜群供养家庭，而非遥远的市场。集约程度：粗放——土地面积大、单位面积投入少、人口密度低，适应干旱气候。具体名称是游牧（pastoral nomadism），在牧场间的季节性移动是季节性迁牧（transhumance）。干旱气候是关键的环境线索：过于干旱难以稳定种植作物，故人们专事流动放牧。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Intensity and Land Cost",
                "zh": "例题 2：集约程度与地价"
              },
              "problem": {
                "en": "Why is market gardening (fruits and vegetables) usually intensive and located near cities, while cattle ranching is extensive and located far from cities?",
                "zh": "为什么商品菜园（水果和蔬菜）通常是集约化的且靠近城市，而肉牛放牧却是粗放的且远离城市？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Land near cities is expensive, so farmers must earn a lot of revenue per acre to afford it — they do this by applying heavy labor and capital to small plots (intensive) and growing high-value, perishable crops that must reach market quickly. Ranching earns little revenue per acre, so it can only be profitable where land is cheap, which is far from the city (extensive). This is the same logic that underlies the Von Thünen model, where land use intensity declines with distance from the market.",
                  "zh": "城市附近土地昂贵，农民必须靠单位面积获取高收入才能负担——办法是在小块土地上投入大量劳动和资本（集约），并种植高价值、易腐、须迅速上市的作物。放牧每英亩收入很低，只有在地价便宜、也就是远离城市的地方才有利可图（粗放）。这与冯·杜能模型（Von Thünen model）背后的逻辑相同：土地利用集约度随离市场距离增加而下降。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which pairing of an agricultural hearth with a domesticated crop is correct?",
                "zh": "下列农业源地与驯化作物的搭配，哪一项正确？"
              },
              "choices": [
                "Mesoamerica — maize",
                "The Andes — wheat",
                "The Fertile Crescent — potatoes",
                "East Asia — cacao"
              ],
              "answer": 0,
              "explanation": {
                "en": "Maize (corn) and beans were domesticated in Mesoamerica. The distractors reverse real hearths: wheat came from the Fertile Crescent (not the Andes), potatoes from the Andes (not the Fertile Crescent), and cacao from Mesoamerica (not East Asia, where rice was domesticated).",
                "zh": "玉米（maize）和豆类在中美洲被驯化。干扰项都把真实源地弄反了：小麦源自新月沃地（而非安第斯），马铃薯源自安第斯（而非新月沃地），可可源自中美洲（而非东亚，东亚驯化的是水稻）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A geographer argues that a desert climate offers herding, irrigated farming, or oil extraction as options, and that culture and economics decide which is chosen. This reasoning best reflects:",
                "zh": "一位地理学家认为，沙漠气候提供了放牧、灌溉农业或石油开采等选项，而由文化和经济来决定选择哪一种。这一推理最能体现："
              },
              "choices": [
                "Possibilism",
                "Environmental determinism",
                "Distance decay",
                "The demographic transition"
              ],
              "answer": 0,
              "explanation": {
                "en": "Possibilism holds that the environment sets a range of possibilities and humans choose among them using culture and technology. Environmental determinism (the tempting wrong answer) would claim the desert climate dictates a single outcome — a view geographers reject. Distance decay and the DTM are unrelated concepts.",
                "zh": "可能论认为环境提供一系列可能性，人类借助文化和技术从中选择。环境决定论（诱人的错误选项）会断言沙漠气候只能导致单一结果——这是地理学家所否定的观点。距离衰减和人口转变模型与此无关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which characteristic best distinguishes commercial agriculture from subsistence agriculture?",
                "zh": "下列哪一特征最能区分商品农业与自给农业？"
              },
              "choices": [
                "Commercial agriculture is always intensive, while subsistence is always extensive",
                "Subsistence agriculture uses more machinery per worker",
                "Commercial agriculture occurs only in the tropics",
                "Commercial agriculture produces primarily for sale and profit, while subsistence produces primarily to feed the farm household"
              ],
              "answer": 3,
              "explanation": {
                "en": "The defining difference is purpose: commercial farming is for sale/profit; subsistence farming is to feed the household. Intensity is a separate axis — commercial systems can be intensive (dairying) or extensive (ranching), so the first choice is wrong. Subsistence farming actually uses far less machinery per worker.",
                "zh": "决定性差异在于目的：商品农业是为出售获利，自给农业是为养活家庭。集约程度是另一条轴线——商品系统既可集约（乳畜业）也可粗放（放牧），故第一项错误。自给农业每个工人使用的机械其实少得多。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Shifting cultivation (slash-and-burn) is best described as:",
                "zh": "迁移农业（刀耕火种）最恰当的描述是："
              },
              "choices": [
                "An intensive commercial system in temperate grasslands",
                "A capital-intensive system in arid climates",
                "An extensive subsistence system in tropical rainforests",
                "A market-oriented dairy system near cities"
              ],
              "answer": 2,
              "explanation": {
                "en": "Shifting cultivation is extensive (large area, low inputs, low population density) and subsistence (feeds the family), practiced in tropical rainforests where farmers burn a plot, use it briefly, then move on as fertility declines. It is neither commercial, arid-climate, nor capital-intensive.",
                "zh": "迁移农业是粗放的（面积大、投入少、人口密度低）且自给的（养活家庭），在热带雨林中进行：农民烧出一块地，短期使用后随地力下降而迁移。它既非商品化、非干旱气候，也非资本密集型。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Plantation agriculture is unusual because it is:",
                "zh": "种植园农业之所以特殊，是因为它："
              },
              "choices": [
                "A commercial, export-oriented system located mainly in developing tropical regions",
                "A subsistence system located in the developed world",
                "An extensive system found only in cold climates",
                "A form of pastoral nomadism"
              ],
              "answer": 0,
              "explanation": {
                "en": "Plantations are commercial and export-oriented (coffee, sugar, rubber) yet located in developing tropical regions — a legacy of colonialism. This breaks the usual pattern in which commercial agriculture concentrates in the developed core. It is not subsistence, not cold-climate, and not nomadic herding.",
                "zh": "种植园是商品化、面向出口的（咖啡、糖、橡胶），却位于发展中的热带地区——这是殖民主义的遗产，打破了商品农业集中于发达核心的常规格局。它既非自给、非寒冷气候，也非游牧。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes a source region where a crop or agricultural practice was first domesticated or invented? Answer with a two-word term.",
                "zh": "用什么术语描述作物或农业方式最初被驯化或发明的源头地区？请用一个两词术语作答（英文）。"
              },
              "answer": "agricultural hearth",
              "accept": [
                "agricultural hearth",
                "agricultural hearths",
                "hearth"
              ],
              "explanation": {
                "en": "An agricultural hearth is a region where domestication and farming techniques originated (e.g., the Fertile Crescent, Mesoamerica). Crops then spread from hearths by diffusion.",
                "zh": "农业源地（agricultural hearth）是驯化和农业技术起源的地区（如新月沃地、中美洲）。作物随后从源地经扩散传播开来。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What one-word type of agriculture applies large inputs of labor or capital to a small area of land to maximize yield per acre? Answer with the adjective (one word).",
                "zh": "哪种（一词形容词）农业在小块土地上投入大量劳动或资本以最大化单位面积产量？请用该形容词作答（英文）。"
              },
              "answer": "intensive",
              "accept": [
                "intensive",
                "intensive agriculture"
              ],
              "explanation": {
                "en": "Intensive agriculture concentrates inputs on small plots to get high yield per unit of land (market gardening, wet-rice paddies). Its opposite is extensive agriculture, which spreads few inputs over a large area (ranching, nomadism).",
                "zh": "集约农业（intensive agriculture）把投入集中在小块土地上以获得高单位面积产量（商品菜园、水稻田）。其反义是粗放农业（extensive agriculture），即在大片土地上分散投入少量资源（放牧、游牧）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term names the seasonal movement of herders and livestock between highland and lowland (or wet-season and dry-season) pastures? Answer with the single term.",
                "zh": "牧民与牲畜在高地与低地（或雨季与旱季）牧场之间随季节移动，这一现象叫什么？请用该术语作答（英文）。"
              },
              "answer": "transhumance",
              "accept": [
                "transhumance"
              ],
              "explanation": {
                "en": "Transhumance is the seasonal migration of livestock between pastures, common within pastoral nomadism. It is distinct from the broader term nomadism, which need not follow fixed seasonal routes.",
                "zh": "季节性迁牧（transhumance）是牲畜在牧场之间的季节性迁移，常见于游牧之中。它有别于更宽泛的游牧（nomadism）概念，后者不一定遵循固定的季节路线。"
              }
            }
          ]
        },
        {
          "id": "settlement-patterns-and-von-thunen",
          "title": "Rural Settlement Patterns and the Von Thünen Model",
          "titleZh": "乡村聚落格局与冯·杜能模型",
          "content": [
            {
              "type": "h2",
              "en": "How Rural Settlements Are Arranged",
              "zh": "乡村聚落的排列方式"
            },
            {
              "type": "p",
              "en": "Rural settlement patterns describe how homes and farm buildings are distributed across the countryside. Geographers recognize three basic patterns. Clustered (nucleated) settlements group houses closely together in a village, with farm fields surrounding the settlement; this fosters community, shared defense, and shared services. Dispersed settlements scatter farmsteads across the landscape, each family living on its own land, as across much of the U.S. rural Midwest. Linear settlements stretch homes in a line along a feature such as a road, river, or coastline.",
              "zh": "乡村聚落格局（rural settlement patterns）描述住宅和农业建筑在乡村中的分布方式。地理学家归纳出三种基本格局。集聚型（clustered，又称团聚型 nucleated）聚落把房屋紧密聚集在村庄中，农田环绕聚落，有利于形成社区、共同防御和共享服务。分散型（dispersed）聚落把农庄散布在大地上，各家住在自己的土地上，如美国中西部乡村大部分地区。线状型（linear）聚落把房屋沿道路、河流或海岸线等某一要素排成一线。"
            },
            {
              "type": "p",
              "en": "Settlement patterns also vary by function and cohesion. A dispersed pattern often reflects commercial farming with large individual holdings and mechanization; a clustered pattern often reflects communal traditions, cooperative labor, or the need for defense. The same land can be organized very differently depending on culture, history, and the method used to divide it.",
              "zh": "聚落格局也因功能和凝聚程度而异。分散格局往往反映大面积个体经营、机械化的商品农业；集聚格局往往反映共同耕作的传统、合作劳动或防御需求。同一片土地，因文化、历史和分地方法不同，可以被组织得截然不同。"
            },
            {
              "type": "h3",
              "en": "Survey Methods: Dividing the Land",
              "zh": "测量分地方法：如何划分土地"
            },
            {
              "type": "p",
              "en": "How land is surveyed and divided leaves a lasting imprint on rural landscapes. Three systems appear repeatedly on the AP exam:",
              "zh": "土地如何测量与划分，会在乡村景观上留下持久的印记。以下三种制度在 AP 考试中反复出现："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Metes and bounds: an irregular system using natural features (streams, trees, rocks) and directions/distances to describe property boundaries. Common in the original eastern colonies, it produces winding, irregular parcels.",
                  "zh": "界标测量法（metes and bounds）：一种不规则制度，用自然特征（溪流、树木、岩石）和方向/距离来描述地界。盛行于最初的东部殖民地，形成蜿蜒不规则的地块。"
                },
                {
                  "en": "Township and range (the rectangular survey): a grid system created by the U.S. Land Ordinance of 1785 that divided land west of the Appalachians into 6-mile-square townships subdivided into 1-square-mile sections. It produces the checkerboard field pattern and dispersed farmsteads seen across the Midwest.",
                  "zh": "镇区—区块制（township and range，即矩形测量制）：由美国 1785 年《土地条例》确立的方格网制度，把阿巴拉契亚山脉以西的土地划分为 6 英里见方的镇区（township），再细分为 1 平方英里的区段（section）。它形成中西部随处可见的棋盘状农田和分散的农庄。"
                },
                {
                  "en": "Long lot (long-lot system): narrow parcels running back from a river or road, giving many owners water access. Brought by French settlers, it is visible along the St. Lawrence River in Quebec and in Louisiana.",
                  "zh": "长条地制（long lot）：从河流或道路向后延伸的狭长地块，使许多所有者都能临水。由法国移民带来，可见于魁北克的圣劳伦斯河沿岸和路易斯安那州。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Tip — Read the landscape backward: A checkerboard grid of square fields signals township-and-range; irregular, winding boundaries signal metes and bounds; thin ribbons of land reaching back from a river signal long lots. The exam often shows an aerial photo or map and asks you to identify the survey method — match the visual pattern to the system.",
              "zh": "AP 提示——反推景观：方形农田组成的棋盘网格指向镇区—区块制；不规则、蜿蜒的地界指向界标测量法；从河流向后延伸的细长条地指向长条地制。考试常给出航拍图或地图，要求你判断测量方法——把视觉格局与对应制度匹配起来。"
            },
            {
              "type": "h2",
              "en": "The Von Thünen Model of Agricultural Land Use",
              "zh": "冯·杜能的农业土地利用模型"
            },
            {
              "type": "p",
              "en": "In 1826 the German landowner Johann Heinrich von Thünen proposed the first serious model of agricultural location. It explains why different farm products are grown at different distances from a market. The core idea is that a farmer's land-use decision depends on two costs: the cost of transporting the product to market and the value or perishability of the product. Farmers choose whatever land use earns the greatest profit (rent) at their distance from the market.",
              "zh": "1826 年，德国地主约翰·海因里希·冯·杜能（Johann Heinrich von Thünen）提出了第一个严谨的农业区位模型，用以解释为何不同农产品在距市场不同距离处种植。核心思想是：农民的土地利用决策取决于两项成本——把产品运往市场的运输成本，以及产品的价值或易腐性。农民会选择在其所处距离上能获得最大利润（地租）的土地利用方式。"
            },
            {
              "type": "h3",
              "en": "The Rings",
              "zh": "同心环"
            },
            {
              "type": "p",
              "en": "The model produces concentric rings of land use around a central market city, from most to least intensive:",
              "zh": "该模型在中心市场城市周围形成同心环状的土地利用，由最集约到最粗放依次为："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Ring 1 — Market gardening and dairying: perishable, high-value products (fresh vegetables, milk) that spoil quickly and must be sold fast; located closest to the city despite high land cost.",
                  "zh": "第一环——商品菜园与乳畜业：易腐、高价值产品（新鲜蔬菜、牛奶），极易变质、须迅速售出；尽管地价高，仍紧邻城市。"
                },
                {
                  "en": "Ring 2 — Forest / firewood: in the original 1826 model, wood was heavy and costly to move and was needed daily for fuel and building, so it was placed near the city.",
                  "zh": "第二环——森林/薪柴：在 1826 年的原始模型中，木材笨重、运输成本高，且日常取暖与建筑都需要，故置于城市附近。"
                },
                {
                  "en": "Ring 3 — Grains and field crops: less perishable, cheaper to transport, and grown extensively over a larger area farther out.",
                  "zh": "第三环——谷物与大田作物：不易腐、运输更便宜，在更外围以粗放方式在更大面积上种植。"
                },
                {
                  "en": "Ring 4 — Ranching / livestock: the most extensive use, on the cheapest, most distant land; animals can be raised far away and even walked to market.",
                  "zh": "第四环——放牧/畜牧：最粗放的利用，位于最便宜、最远的土地上；牲畜可在远处饲养，甚至可赶到市场。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The logic is intensity gradient: land use is most intensive near the market (where land is expensive and transport is cheap) and most extensive far away (where land is cheap and transport is expensive). This is why perishable, high-transport-cost goods locate close in, while durable, low-value-per-weight goods locate far out.",
              "zh": "其逻辑是集约度梯度：土地利用在市场附近最集约（地价高、运费低），在远处最粗放（地价低、运费高）。因此，易腐、运输成本高的产品靠近中心，而耐储、单位重量价值低的产品位于外围。"
            },
            {
              "type": "h3",
              "en": "Assumptions and Critiques",
              "zh": "假设与批评"
            },
            {
              "type": "p",
              "en": "Like all models, Von Thünen simplifies reality with assumptions: a single central market (isolated state), a flat, featureless plain, uniform soil and climate, equal transport cost in all directions (one mode, moving in straight lines), and rational farmers maximizing profit. Because these rarely hold, the real world distorts the rings. A navigable river or a highway lowers transport cost along a line, stretching rings outward in that direction. Variations in soil, terrain, and climate break the neat circles. Refrigeration, fast transport, and global trade let perishables travel far, weakening the innermost ring.",
              "zh": "与所有模型一样，冯·杜能用假设简化现实：单一中心市场（孤立国 isolated state）、平坦无地物的平原、均质的土壤与气候、各方向运费相等（单一运输方式、直线运动）、以及追求利润最大化的理性农民。由于这些条件很少成立，现实世界会扭曲同心环。可通航的河流或公路会沿线降低运费，使该方向的环向外拉伸；土壤、地形和气候的差异会打破整齐的圆环；冷藏、快速运输和全球贸易使易腐品得以远运，削弱了最内环。"
            },
            {
              "type": "note",
              "en": "AP Tip — The model still works at new scales: Even though refrigeration undercut the original rings, the Von Thünen logic remains valid — it just operates globally now. Dairies still cluster near cities, while a single \"world city\" market (like Europe) can be ringed by distant zones supplying grain and beef from other continents. Praise the model for its logic (intensity declines with distance) even as you critique its unrealistic assumptions.",
              "zh": "AP 提示——模型在新的尺度上依然有效：尽管冷藏削弱了原始的同心环，冯·杜能的逻辑仍然成立——只是如今在全球尺度上运作。乳畜业仍聚集在城市附近，而单一的\"世界城市\"市场（如欧洲）周围可以环绕着从其他大洲供应谷物和牛肉的遥远地带。在批评其不切实际假设的同时，也要肯定其逻辑（集约度随距离下降）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Placing Crops in the Rings",
                "zh": "例题 1：把作物安排到同心环中"
              },
              "problem": {
                "en": "Using Von Thünen's reasoning, explain why a dairy farm producing fresh milk locates near the city while a wheat farm locates far away.",
                "zh": "运用冯·杜能的推理，解释为什么生产鲜奶的乳牛场靠近城市，而小麦农场却位于远处。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Milk is highly perishable and costly to transport (it spoils and is heavy with water), so it must be produced close to the market where it can reach consumers quickly, even though land there is expensive. Wheat is durable, stores well, and is cheap to transport per unit of value, so it can be grown far out on cheaper land and shipped in. The deciding factors are perishability and transport cost relative to value — exactly the two variables at the heart of the model.",
                  "zh": "牛奶极易腐坏且运输成本高（易变质、含水量大而沉重），必须在靠近市场、能迅速送达消费者的地方生产，即便那里地价昂贵。小麦耐储、易保存，且按单位价值计运费低廉，因此可在更远的廉价土地上种植再运入城市。决定因素是易腐性与相对于价值的运输成本——正是模型核心的两个变量。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Distorting the Rings",
                "zh": "例题 2：同心环的扭曲"
              },
              "problem": {
                "en": "A navigable river runs from the central market out to the edge of the region. How would this change the concentric rings, and which assumption does it violate?",
                "zh": "一条可通航的河流从中心市场一直流到该区域边缘。这会如何改变同心环？又违反了哪一条假设？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The river provides cheap water transport, lowering the cost of moving goods along its course. Land near the river effectively becomes \"closer\" to market in cost terms, so the rings stretch outward along the river, forming elongated bands rather than perfect circles. This violates the assumption of uniform transport cost in all directions (an isotropic plain with one transport mode). It shows how real transport routes reshape the idealized pattern.",
                  "zh": "河流提供廉价的水运，降低了沿河运货的成本。就成本而言，河边土地实际上变得离市场\"更近\"，因此同心环沿河向外拉伸，形成拉长的带状而非完美的圆环。这违反了各方向运费相等的假设（即单一运输方式的各向同性平原）。它说明现实中的运输线路如何重塑理想化的格局。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A rural landscape shows houses grouped tightly together in a village, surrounded by the farmland the residents work. This is best described as a:",
                "zh": "某乡村景观中房屋紧密聚集在村庄里，四周环绕着居民耕作的农田。这最恰当地称为："
              },
              "choices": [
                "Clustered (nucleated) settlement pattern",
                "Dispersed settlement pattern",
                "Long-lot survey system",
                "Metes and bounds system"
              ],
              "answer": 0,
              "explanation": {
                "en": "Grouping homes together in a village with surrounding fields is the clustered (nucleated) pattern, often reflecting community and shared services. A dispersed pattern would scatter farmsteads across their own plots. Long lot and metes and bounds are survey (land-division) methods, not settlement patterns.",
                "zh": "房屋聚集成村、四周环田是集聚（团聚）格局，常反映社区与共享服务。分散格局会把农庄散布在各自地块上。长条地制和界标测量法是测量（分地）方法，而非聚落格局。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The checkerboard pattern of square fields and dispersed farms across the U.S. Midwest is a direct result of which survey system?",
                "zh": "美国中西部方形农田的棋盘格局和分散农庄，直接源于哪种测量制度？"
              },
              "choices": [
                "Metes and bounds",
                "Long lot",
                "Township and range",
                "Primogeniture"
              ],
              "answer": 2,
              "explanation": {
                "en": "The township-and-range (rectangular survey) system from the Land Ordinance of 1785 divided land into square townships and sections, producing the Midwestern grid. Metes and bounds gives irregular parcels; long lots give narrow riverfront strips; primogeniture is an inheritance rule, not a survey method.",
                "zh": "源自 1785 年《土地条例》的镇区—区块制（矩形测量制）把土地分成方形镇区和区段，形成中西部的网格。界标测量法产生不规则地块；长条地制产生临河狭长条地；长子继承制（primogeniture）是继承规则，而非测量方法。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In the Von Thünen model, why is market gardening and dairying located in the ring closest to the central market?",
                "zh": "在冯·杜能模型中，为什么商品菜园和乳畜业位于最靠近中心市场的一环？"
              },
              "choices": [
                "Because these products are highly perishable and must reach market quickly",
                "Because vegetables and milk are cheap to transport and non-perishable",
                "Because the land far from the city is too fertile for vegetables",
                "Because ranching requires more water than dairying"
              ],
              "answer": 0,
              "explanation": {
                "en": "Perishable, high-value products like fresh vegetables and milk spoil quickly and are costly to transport, so they locate close to the market despite expensive land. The first choice reverses the truth (they are perishable and costly to move). Fertility and water needs are not the model's driving variables — perishability and transport cost are.",
                "zh": "像新鲜蔬菜和牛奶这样易腐、高价值的产品极易变质、运输成本高，故尽管地价昂贵仍靠近市场。第一项把事实弄反了（它们其实易腐且难运）。肥力和用水量并非模型的驱动变量——易腐性与运输成本才是。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is NOT one of Von Thünen's original assumptions?",
                "zh": "下列哪一项不是冯·杜能模型的原始假设？"
              },
              "choices": [
                "A single, isolated central market",
                "A flat plain with uniform soil and climate",
                "Refrigerated trucks and global trade networks",
                "Farmers who act rationally to maximize profit"
              ],
              "answer": 2,
              "explanation": {
                "en": "The 1826 model assumes an isolated state: one central market, a flat uniform plain, equal transport cost in all directions, and profit-maximizing farmers. Refrigeration and global trade are modern developments that actually distort the model's rings — they are critiques of the model, not assumptions within it.",
                "zh": "1826 年的模型假设一个\"孤立国\"：单一中心市场、平坦均质的平原、各方向运费相等、以及追求利润最大化的理性农民。冷藏和全球贸易是后来的现代发展，恰恰扭曲了模型的同心环——它们是对模型的批评，而非模型的假设。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A highway is built radiating out from the central city. According to Von Thünen logic, what happens to the land-use rings along that highway?",
                "zh": "一条公路从中心城市向外辐射修建。按照冯·杜能的逻辑，沿该公路的土地利用环会发生什么？"
              },
              "choices": [
                "The rings disappear entirely",
                "The rings stretch outward along the highway because transport cost drops there",
                "The rings shrink inward because land becomes more valuable",
                "Ranching moves to the innermost ring"
              ],
              "answer": 1,
              "explanation": {
                "en": "Cheaper transport along the highway effectively brings distant land \"closer\" in cost terms, so each ring extends outward along the route, elongating the pattern. The rings do not vanish (the logic still holds) and do not shrink inward; and ranching remains the outermost, most extensive use.",
                "zh": "沿公路运费更低，就成本而言把远处土地拉\"近\"，因此每一环沿路线向外延伸，使格局被拉长。同心环不会消失（逻辑仍然成立），也不会向内收缩；放牧仍是最外围、最粗放的利用方式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What survey system uses natural features and directions/distances to create irregular, winding property boundaries, common in the original eastern colonies? Answer with the three-word term.",
                "zh": "哪种测量制度利用自然特征和方向/距离来划出不规则、蜿蜒的地界，常见于最初的东部殖民地？请用一个三词术语作答（英文）。"
              },
              "answer": "metes and bounds",
              "accept": [
                "metes and bounds",
                "metes-and-bounds"
              ],
              "explanation": {
                "en": "Metes and bounds describes boundaries by natural landmarks (streams, trees) and compass directions/distances, yielding irregular parcels. It contrasts with the geometric township-and-range grid.",
                "zh": "界标测量法（metes and bounds）用自然地标（溪流、树木）和罗盘方向/距离来描述地界，形成不规则地块。它与几何式的镇区—区块网格形成对比。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What survey system, brought by French settlers, divides land into narrow strips running back from a river to give many owners water access? Answer with the two-word term.",
                "zh": "哪种由法国移民带来的测量制度，把土地划分为从河流向后延伸的狭长条，使许多所有者都能临水？请用一个两词术语作答（英文）。"
              },
              "answer": "long lot",
              "accept": [
                "long lot",
                "long-lot",
                "long lots",
                "longlot"
              ],
              "explanation": {
                "en": "The long-lot system creates thin ribbons of land perpendicular to a river or road, ensuring each parcel touches the water. It appears along the St. Lawrence in Quebec and in Louisiana.",
                "zh": "长条地制（long lot）划出与河流或道路垂直的细长条地，确保每块地都能临水。可见于魁北克的圣劳伦斯河沿岸和路易斯安那州。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term names the idealized single-market region that Von Thünen assumed, cut off from outside influence? Answer with the two-word term.",
                "zh": "冯·杜能假设的那个与外界隔绝、只有单一市场的理想化区域，叫什么？请用一个两词术语作答（英文）。"
              },
              "answer": "isolated state",
              "accept": [
                "isolated state",
                "the isolated state",
                "isolated-state"
              ],
              "explanation": {
                "en": "Von Thünen framed his model within an \"isolated state\" — a self-contained region with one central market, a uniform plain, and no outside trade. This assumption is what makes the neat concentric rings possible in theory.",
                "zh": "冯·杜能把模型置于一个\"孤立国\"（isolated state）之中——一个自成一体、只有一个中心市场、平原均质、无对外贸易的区域。正是这一假设使理论上整齐的同心环成为可能。"
              }
            }
          ]
        },
        {
          "id": "agricultural-revolutions-and-contemporary-issues",
          "title": "Agricultural Revolutions and Contemporary Issues",
          "titleZh": "农业革命与当代议题",
          "content": [
            {
              "type": "h2",
              "en": "Three Agricultural Revolutions",
              "zh": "三次农业革命"
            },
            {
              "type": "p",
              "en": "Agriculture has been transformed by three great revolutions, each raising output and reshaping society. The First Agricultural Revolution (the Neolithic Revolution), beginning around 10,000–12,000 years ago, was the shift from hunting and gathering to the domestication of plants and animals. It allowed permanent settlement, food surpluses, population growth, and the rise of the first cities and social hierarchies. The AP exam treats it as the foundational break that made civilization possible.",
              "zh": "农业经历了三次伟大革命，每一次都提高了产出并重塑社会。第一次农业革命（新石器革命，Neolithic Revolution）始于约一万至一万两千年前，是从狩猎采集转向驯化动植物的转变。它使定居、粮食剩余、人口增长以及最早的城市和社会等级成为可能。AP 考试将其视为使文明成为可能的奠基性突破。"
            },
            {
              "type": "p",
              "en": "The Second Agricultural Revolution accompanied the Industrial Revolution (roughly 1700s–1900s) in Europe and North America. New tools (the seed drill, mechanical reaper, steel plow), crop rotation, improved breeding, and later fossil-fueled machinery and railroads dramatically increased yields and efficiency. Fewer farmers could feed more people, freeing labor to move to cities — a direct driver of urbanization and the demographic transition.",
              "zh": "第二次农业革命伴随欧洲和北美的工业革命（约 18—20 世纪）发生。新工具（条播机、机械收割机、钢犁）、轮作、改良育种，以及后来以化石燃料驱动的机械和铁路，大幅提高了产量和效率。更少的农民就能养活更多人，把劳动力解放出来涌向城市——这是城市化和人口转变的直接推动力。"
            },
            {
              "type": "p",
              "en": "The Green Revolution (mid-to-late 20th century) spread high-yield seed varieties, chemical fertilizers, pesticides, irrigation, and mechanization to the developing world, especially Asia and Latin America. Scientist Norman Borlaug's high-yield wheat and new \"miracle\" rice sharply boosted food production and are credited with preventing famine for millions, notably in India and Mexico. But its benefits were uneven, and it carried significant costs.",
              "zh": "绿色革命（Green Revolution，20 世纪中后期）把高产种子品种、化肥、农药、灌溉和机械化推广到发展中世界，尤其是亚洲和拉丁美洲。科学家诺曼·博劳格（Norman Borlaug）培育的高产小麦和新的\"奇迹\"稻种大幅提高了粮食产量，被认为使数以百万计的人免于饥荒，尤以印度和墨西哥为著。但其收益并不均衡，且伴随着不小的代价。"
            },
            {
              "type": "note",
              "en": "AP Tip — Weigh the Green Revolution both ways: Benefits — higher yields, cheaper food, famine averted. Costs — dependence on expensive seeds, fertilizers, and fuel that poor farmers could not afford (widening inequality); heavy water use and irrigation salinization; soil depletion, pesticide pollution, and loss of crop biodiversity. Strong AP answers evaluate, presenting both sides rather than praising or condemning.",
              "zh": "AP 提示——对绿色革命两面看待：收益——产量更高、食物更廉价、避免了饥荒。代价——对昂贵种子、化肥和燃料的依赖（贫困农民负担不起，加剧了不平等）；耗水量大、灌溉导致土壤盐碱化；地力耗竭、农药污染以及作物生物多样性丧失。优秀的 AP 答案会做评价，同时呈现两面，而非一味褒或贬。"
            },
            {
              "type": "h2",
              "en": "The Columbian Exchange and Global Crops",
              "zh": "哥伦布大交换与全球作物"
            },
            {
              "type": "p",
              "en": "The Columbian Exchange (after 1492) was the transfer of crops, animals, people, and diseases between the Eastern and Western Hemispheres. Agriculturally, it globalized food systems: maize, potatoes, tomatoes, cassava, and cacao spread from the Americas to Africa, Europe, and Asia, while wheat, rice, sugarcane, coffee, bananas, horses, cattle, and pigs moved into the Americas. American staples like the potato and maize fueled population growth in the Old World, while Old World livestock and plantation crops reshaped American landscapes and economies — including the plantation systems built on enslaved labor.",
              "zh": "哥伦布大交换（Columbian Exchange，1492 年之后）是东西半球之间作物、动物、人口和疾病的转移。就农业而言，它使食物系统全球化：玉米、马铃薯、番茄、木薯和可可从美洲传向非洲、欧洲和亚洲，而小麦、水稻、甘蔗、咖啡、香蕉、马、牛和猪则进入美洲。马铃薯、玉米等美洲主粮推动了旧大陆的人口增长，而旧大陆的牲畜和种植园作物则重塑了美洲的景观与经济——包括建立在奴隶劳动之上的种植园制度。"
            },
            {
              "type": "h2",
              "en": "Modern Commercial Agriculture",
              "zh": "现代商品农业"
            },
            {
              "type": "p",
              "en": "Today, commercial agriculture in developed countries is dominated by agribusiness — the integrated network of businesses that provide inputs (seeds, chemicals, machinery), grow crops, and process, package, transport, and sell food. Farming is one link in a long commodity chain (or supply chain) stretching from the farm to processors, distributors, retailers, and consumers across the globe. Value and profit often concentrate not with farmers but with the corporations that process and market the food.",
              "zh": "如今，发达国家的商品农业由农业综合企业（agribusiness）主导——这是一个由提供投入品（种子、化学品、机械）、种植作物、以及加工、包装、运输和销售食品的企业组成的整合网络。农业只是漫长的商品链（commodity chain，或供应链 supply chain）中的一环，这条链从农场延伸到遍布全球的加工商、分销商、零售商和消费者。价值和利润往往不集中于农民，而集中于加工和营销食品的企业。"
            },
            {
              "type": "p",
              "en": "Two hallmarks define this system. Monoculture is the planting of a single crop over a large area year after year; it enables mechanization and high efficiency but reduces biodiversity, depletes soil, and makes crops vulnerable to a single pest or disease. A global supply chain means your food may be grown, processed, and packaged on different continents — a tomato picked in Mexico, canned in the U.S., and sold in Canada. This globalization lowers costs but increases food miles and dependence on fossil-fueled transport.",
              "zh": "两个标志定义了这一系统。单一栽培（monoculture）是年复一年在大片土地上种植单一作物；它便于机械化、效率高，却降低生物多样性、耗竭土壤，并使作物易受单一病虫害侵袭。全球供应链（global supply chain）意味着你的食物可能在不同大洲种植、加工和包装——番茄在墨西哥采摘、在美国装罐、在加拿大出售。这种全球化降低了成本，却增加了食物里程（food miles）和对化石燃料运输的依赖。"
            },
            {
              "type": "h2",
              "en": "Contemporary Agricultural Issues",
              "zh": "当代农业议题"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "GMOs (genetically modified organisms): crops engineered for higher yield, pest resistance, or drought tolerance. Supporters cite food security and reduced pesticide use; critics raise concerns about corporate control of seeds, biodiversity, and unknown long-term effects.",
                  "zh": "转基因生物（GMOs）：为提高产量、抗虫或耐旱而改造的作物。支持者强调粮食安全和减少农药使用；批评者则担忧企业对种子的控制、生物多样性以及未知的长期影响。"
                },
                {
                  "en": "Environmental effects: soil erosion and depletion, aquifer depletion from irrigation, fertilizer runoff causing dead zones (eutrophication), deforestation for farmland, pesticide pollution, and greenhouse-gas emissions from livestock and machinery.",
                  "zh": "环境影响：水土流失与地力耗竭、灌溉造成的地下水位下降、化肥径流导致的死水区（富营养化 eutrophication）、为开垦农田而砍伐森林、农药污染，以及牲畜和机械排放的温室气体。"
                },
                {
                  "en": "Food deserts: areas — often low-income urban or remote rural neighborhoods — with limited access to affordable, fresh, nutritious food, contributing to diet-related health problems.",
                  "zh": "食物荒漠（food deserts）：难以获得可负担、新鲜、有营养食物的地区——往往是低收入城市或偏远乡村社区——加剧了与饮食有关的健康问题。"
                },
                {
                  "en": "Food security and insecurity: reliable access by all people to enough safe, nutritious food. Insecurity persists due to poverty, conflict, climate change, and unequal distribution — the world produces enough calories, yet hunger remains a distribution and access problem.",
                  "zh": "粮食安全与不安全（food security / insecurity）：所有人都能可靠地获得足量、安全、有营养的食物。因贫困、冲突、气候变化和分配不均，粮食不安全依然存在——世界生产的热量足够，饥饿仍是分配和获取问题。"
                },
                {
                  "en": "Sustainability: sustainable agriculture aims to meet present food needs without degrading resources for the future — through organic farming, crop rotation, reduced tillage, integrated pest management, and local food and community-supported agriculture (CSA) movements.",
                  "zh": "可持续性（sustainability）：可持续农业力求在不损害未来资源的前提下满足当前粮食需求——通过有机农业、轮作、少耕、综合虫害管理，以及本地食物和社区支持农业（CSA）运动等方式。"
                },
                {
                  "en": "Women in agriculture: in much of the developing world, women perform a large share of farm labor and food production, yet often lack equal access to land ownership, credit, and technology — a gender gap that constrains both output and development.",
                  "zh": "农业中的女性：在发展中世界的许多地区，女性承担了大部分农活和粮食生产，却往往在土地所有权、信贷和技术方面缺乏平等机会——这一性别差距同时制约着产量和发展。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Tip — Distinguish availability from access: The world grows more than enough food, so modern hunger is usually a problem of distribution and access (poverty, conflict, infrastructure, food deserts), not total supply. On free-response questions, explain food insecurity through unequal access and distribution rather than simply \"not enough food is produced.\"",
              "zh": "AP 提示——区分\"是否有\"与\"能否获得\"：世界生产的食物绰绰有余，故现代饥饿通常是分配和获取问题（贫困、冲突、基础设施、食物荒漠），而非总供给不足。在自由回答题中，应通过不平等的获取与分配来解释粮食不安全，而非简单地说\"生产的食物不够\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating the Green Revolution",
                "zh": "例题 1：评价绿色革命"
              },
              "problem": {
                "en": "A critic says the Green Revolution \"made hunger worse for small farmers.\" Using specific evidence, explain how the Green Revolution could both reduce famine and harm small farmers at the same time.",
                "zh": "一位批评者说绿色革命\"让小农户的饥饿问题更严重了\"。请用具体证据解释，绿色革命为何可以同时既减少饥荒又损害小农户。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Both can be true at different scales. Nationally, high-yield seeds and fertilizers vastly increased grain output in places like India, averting mass famine and lowering food prices. But the new inputs — seeds, chemical fertilizer, pesticides, irrigation, and machinery — were expensive. Wealthier farmers could afford the full package and prospered, while poorer smallholders who could not fell behind, sometimes going into debt or losing land. So the revolution boosted aggregate food supply (reducing famine) while widening inequality (harming many small farmers) — a classic uneven-development outcome.",
                  "zh": "两者可以在不同尺度上同时成立。在国家层面，高产种子和化肥使印度等地的谷物产量剧增，避免了大规模饥荒并压低了粮价。但新的投入品——种子、化肥、农药、灌溉和机械——十分昂贵。较富裕的农民能负担整套方案而致富，无力承担的贫困小农则被甩在后面，有时因此负债或失地。于是这场革命提高了粮食总供给（减少饥荒），同时又扩大了不平等（损害许多小农）——这是典型的不平衡发展结果。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Tracing a Commodity Chain",
                "zh": "例题 2：追踪一条商品链"
              },
              "problem": {
                "en": "Explain how a cup of coffee illustrates agribusiness, a global commodity chain, and the uneven distribution of value.",
                "zh": "请解释一杯咖啡如何体现农业综合企业、全球商品链以及价值分配的不均衡。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Trace the chain: coffee is grown on plantations or small farms in tropical developing countries (e.g., Ethiopia, Colombia), sold to exporters, shipped to processors and roasters in wealthy countries, then branded, retailed, and served by cafés. This is agribusiness — a network of firms linking farm to cup — and a global commodity chain crossing many borders. Crucially, most of the final price is captured by roasters, brands, and retailers in the core, while the farmers in the periphery receive a small fraction. This uneven distribution of value along the chain is why fair-trade movements target the farmer's share.",
                  "zh": "追踪这条链：咖啡在热带发展中国家（如埃塞俄比亚、哥伦比亚）的种植园或小农场种植，售给出口商，运往富裕国家的加工商和烘焙商，再由咖啡馆打上品牌、零售并端上桌。这就是农业综合企业——把农场连到咖啡杯的企业网络——也是一条跨越众多国界的全球商品链。关键在于，最终价格的大部分被核心地区的烘焙商、品牌和零售商攫取，而边缘地区的农民只得到很小一部分。正是这种沿链条的价值分配不均，使公平贸易运动着眼于提高农民所得份额。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The First Agricultural Revolution (Neolithic Revolution) is best defined as:",
                "zh": "第一次农业革命（新石器革命）最恰当的定义是："
              },
              "choices": [
                "The mechanization of farming during the Industrial Revolution",
                "The domestication of plants and animals that replaced hunting and gathering",
                "The spread of high-yield seeds to the developing world",
                "The globalization of food supply chains"
              ],
              "answer": 1,
              "explanation": {
                "en": "The Neolithic Revolution was the original shift from foraging to domesticating plants and animals, enabling permanent settlement and cities. Mechanization describes the Second Agricultural Revolution; high-yield seeds describe the Green Revolution; globalized supply chains are a modern development.",
                "zh": "新石器革命是从采集狩猎转向驯化动植物的最初转变，使定居和城市成为可能。机械化描述的是第二次农业革命；高产种子描述的是绿色革命；全球化供应链是现代的发展。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which was a major consequence of the Second Agricultural Revolution?",
                "zh": "下列哪一项是第二次农业革命的重大后果？"
              },
              "choices": [
                "The domestication of the first crops",
                "Increased farm productivity that freed labor to move to cities, fueling urbanization",
                "The introduction of maize to Europe",
                "The end of all commercial agriculture"
              ],
              "answer": 1,
              "explanation": {
                "en": "By raising yields and efficiency with new tools and machinery, the Second Agricultural Revolution let fewer farmers feed more people, releasing labor for urban industry and driving urbanization. Domestication was the First Revolution; maize reaching Europe was the Columbian Exchange; commercial agriculture expanded, not ended.",
                "zh": "第二次农业革命凭借新工具和机械提高了产量与效率，使更少的农民养活更多人，把劳动力释放给城市工业，推动了城市化。驯化属于第一次革命；玉米传入欧洲属于哥伦布大交换；商品农业是扩张而非终结。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Norman Borlaug is most closely associated with which development?",
                "zh": "诺曼·博劳格与下列哪项发展关系最密切？"
              },
              "choices": [
                "The Columbian Exchange",
                "The Von Thünen model",
                "High-yield wheat varieties of the Green Revolution",
                "The township-and-range survey"
              ],
              "answer": 2,
              "explanation": {
                "en": "Borlaug developed high-yield, disease-resistant wheat central to the Green Revolution, credited with averting famine in countries like India and Mexico. The Columbian Exchange predates him; Von Thünen and township-and-range concern land use and survey, not seed breeding.",
                "zh": "博劳格培育了绿色革命核心的高产、抗病小麦，被认为使印度、墨西哥等国免于饥荒。哥伦布大交换早于他；冯·杜能模型和镇区—区块制涉及土地利用与测量，与育种无关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A low-income urban neighborhood has convenience stores selling packaged snacks but no supermarket selling fresh produce within miles. This is an example of a:",
                "zh": "某低收入城市社区有出售包装零食的便利店，但方圆数英里内没有出售新鲜农产品的超市。这属于："
              },
              "choices": [
                "Food desert",
                "Monoculture",
                "Commodity chain",
                "Green Revolution"
              ],
              "answer": 0,
              "explanation": {
                "en": "A food desert is an area with limited access to affordable, fresh, nutritious food, contributing to poor diet and health. Monoculture is single-crop farming; a commodity chain is the farm-to-consumer supply network; the Green Revolution is a mid-20th-century yield boom — none describes limited local food access.",
                "zh": "食物荒漠（food desert）是难以获得可负担、新鲜、有营养食物的地区，导致饮食和健康不佳。单一栽培是种单一作物；商品链是从农场到消费者的供应网络；绿色革命是 20 世纪中叶的产量激增——都不是指本地食物获取受限。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement best explains persistent global food insecurity?",
                "zh": "下列哪项最能解释全球持续存在的粮食不安全？"
              },
              "choices": [
                "The world does not produce enough total calories to feed its population",
                "Hunger largely results from unequal distribution and access, even though enough food is produced",
                "Food insecurity exists only in countries without any agriculture",
                "The Green Revolution eliminated all hunger"
              ],
              "answer": 1,
              "explanation": {
                "en": "The world produces more than enough calories; hunger persists mainly because of unequal distribution and access — poverty, conflict, infrastructure, and food deserts. The first choice is the common misconception (it is not a total-supply problem). Food insecurity affects even food-producing regions, and the Green Revolution reduced but did not end hunger.",
                "zh": "世界生产的热量绰绰有余；饥饿持续主要因为分配和获取不平等——贫困、冲突、基础设施和食物荒漠。第一项是常见误区（并非总供给不足）。粮食不安全甚至影响产粮地区，绿色革命减少了但并未终结饥饿。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term names the practice of planting a single crop over a large area, common in modern commercial agriculture? Answer with the single word.",
                "zh": "在大片土地上种植单一作物、现代商品农业中常见的做法，叫什么？请用一个单词作答（英文）。"
              },
              "answer": "monoculture",
              "accept": [
                "monoculture",
                "mono-culture",
                "monocropping"
              ],
              "explanation": {
                "en": "Monoculture (single-cropping) maximizes mechanized efficiency but reduces biodiversity, depletes soil, and heightens vulnerability to a single pest or disease. Its counterpart is polyculture or crop rotation.",
                "zh": "单一栽培（monoculture）能最大化机械化效率，却降低生物多样性、耗竭土壤，并加剧对单一病虫害的脆弱性。其对应做法是多样化种植（polyculture）或轮作。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the integrated system of businesses that supply inputs, produce, process, and distribute food called? Answer with the single term.",
                "zh": "供应投入品、生产、加工和分销食品的一整套整合企业系统，叫什么？请用一个术语作答（英文）。"
              },
              "answer": "agribusiness",
              "accept": [
                "agribusiness",
                "agri-business",
                "agri business"
              ],
              "explanation": {
                "en": "Agribusiness is the network of firms linking the farm to the consumer — inputs, production, processing, packaging, transport, and retail. Farming is just one link in this larger commercial system.",
                "zh": "农业综合企业（agribusiness）是把农场连接到消费者的企业网络——投入品、生产、加工、包装、运输和零售。农业只是这个更大商业系统中的一环。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the post-1492 transfer of crops, animals, people, and diseases between the Eastern and Western Hemispheres called? Answer with the two-word term.",
                "zh": "1492 年之后东西半球之间作物、动物、人口和疾病的转移，叫什么？请用一个两词术语作答（英文）。"
              },
              "answer": "columbian exchange",
              "accept": [
                "columbian exchange",
                "the columbian exchange",
                "columbian-exchange"
              ],
              "explanation": {
                "en": "The Columbian Exchange globalized agriculture: American crops like maize and potatoes spread to the Old World (fueling population growth), while Old World livestock and plantation crops transformed the Americas.",
                "zh": "哥伦布大交换（Columbian Exchange）使农业全球化：玉米、马铃薯等美洲作物传向旧大陆（推动人口增长），而旧大陆的牲畜和种植园作物则改变了美洲。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-6-cities-and-urban-land-use",
      "title": "Unit 6: Cities and Urban Land-Use Patterns and Processes",
      "titleZh": "第六单元：城市与城市土地利用的格局与过程",
      "lessons": [
        {
          "id": "urbanization-and-city-systems",
          "title": "Urbanization and City Systems",
          "titleZh": "城市化与城市体系",
          "content": [
            {
              "type": "h2",
              "en": "What Urbanization Means",
              "zh": "城市化的含义"
            },
            {
              "type": "p",
              "en": "Urbanization is the process by which an increasing share of a population comes to live in cities, and by which the land, economy, and culture of a region become more urban in character. Geographers measure it two ways: as the percentage of people living in urban areas (the urbanization rate), and as the rate of growth of that percentage. A country can be highly urbanized (like Japan, over 90%) yet growing slowly, while a less urbanized country (like Ethiopia) may be urbanizing very rapidly. Distinguishing the level from the pace is a common AP requirement.",
              "zh": "城市化（urbanization）是指人口中居住在城市的比例不断上升，同时一个地区的土地、经济和文化在性质上日益城市化的过程。地理学家用两种方式来衡量它：居住在城市地区的人口百分比（城市化率），以及该百分比的增长速度。一个国家可能城市化程度很高（如日本，超过 90%）却增长缓慢，而城市化程度较低的国家（如埃塞俄比亚）可能正在极快地城市化。区分\"水平\"与\"速度\"是 AP 常见的要求。"
            },
            {
              "type": "p",
              "en": "The two great waves of urbanization both had clear drivers. The first, in Europe and North America during the 1800s, was powered by the Industrial Revolution: factories concentrated jobs in cities, pulling rural people toward wage labor. The second wave, ongoing today across Africa, Asia, and Latin America, is driven less by industrial jobs and more by rural population growth, mechanization of farming that reduces the need for farm labor, and the perception of opportunity. In both waves, people move because of push factors in the countryside and pull factors in the city.",
              "zh": "两次大规模城市化浪潮都有明确的推动力。第一次发生在 1800 年代的欧洲和北美，由工业革命（Industrial Revolution）推动：工厂把工作岗位集中在城市，把农村人口拉向工资劳动。第二次浪潮如今仍在非洲、亚洲和拉丁美洲持续进行，其动力较少来自工业岗位，更多来自农村人口增长、使农业劳动力需求下降的机械化，以及对机会的向往。在这两次浪潮中，人们迁移都是因为乡村的推力因素（push factors）与城市的拉力因素（pull factors）。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Industrialization — factories concentrate jobs and capital in cities, the classic driver of the first urban wave.",
                  "zh": "工业化——工厂把工作和资本集中在城市，是第一次城市浪潮的经典动力。"
                },
                {
                  "en": "Rural-to-urban migration — people move seeking wages, services, and opportunity (an internal migration).",
                  "zh": "乡城迁移——人们为工资、服务和机会而迁移（一种国内迁移）。"
                },
                {
                  "en": "Agricultural mechanization — fewer farm workers are needed, pushing labor off the land.",
                  "zh": "农业机械化——所需的农业劳动力减少，把劳动力从土地上挤出。"
                },
                {
                  "en": "Natural increase — high birth rates within cities themselves add urban population directly.",
                  "zh": "自然增长——城市自身较高的出生率直接增加城市人口。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Why Cities Grow Where They Do: Site and Situation",
              "zh": "城市为何在特定位置发展：地方与位置"
            },
            {
              "type": "p",
              "en": "Two ideas explain a city's location and success. Site is the absolute physical character of the place a city occupies — its terrain, soil, water supply, climate, and elevation. Situation (also called relative location) is the city's position relative to other places — its connectivity to trade routes, resources, and markets. Site helps a city get started; situation usually explains long-term growth. New York's deep, sheltered harbor (site) mattered, but its situation at the mouth of the Hudson–Erie Canal corridor linking the Atlantic to the interior is what made it dominant.",
              "zh": "两个概念解释城市的区位与成功。地方（site）是城市所占位置的绝对自然特征——地形、土壤、水源、气候和海拔。位置（situation，又称相对位置）是城市相对于其他地方的位置——它与贸易路线、资源和市场的连通性。地方帮助城市起步；位置通常解释长期增长。纽约深而避风的港口（地方）很重要，但真正使它占据主导地位的是它坐落于连接大西洋与内陆的哈德逊—伊利运河走廊出海口的位置（位置）。"
            },
            {
              "type": "note",
              "en": "AP tip — Site vs. situation: Site = the place itself (physical features you could photograph). Situation = the place in relation to everything else (its links and accessibility). If a question emphasizes rivers, harbors, or defensible hills, that is SITE. If it emphasizes trade routes, being between two markets, or transport hubs, that is SITUATION.",
              "zh": "AP 提示——地方与位置：地方 = 该地本身（可以拍照的自然特征）。位置 = 该地相对于其他一切的关系（它的联系与可达性）。若题目强调河流、港口或易守的山丘，那是\"地方\"；若强调贸易路线、位于两个市场之间或交通枢纽，那是\"位置\"。"
            },
            {
              "type": "h2",
              "en": "The Expanding City: Suburbs, Sprawl, and Edge Cities",
              "zh": "扩张中的城市：郊区、蔓延与边缘城市"
            },
            {
              "type": "p",
              "en": "In wealthier countries, especially the United States after 1945, cities spread outward through suburbanization — the movement of people and businesses to residential areas on the urban fringe. It was enabled by automobiles, highways, federally backed mortgages, and cheap peripheral land. When this outward growth is low-density, unplanned, and consumes farmland and open space, geographers call it urban sprawl. Sprawl increases car dependence and infrastructure costs and is the target of the sustainability reforms you will study later.",
              "zh": "在较富裕的国家，尤其是 1945 年后的美国，城市通过郊区化（suburbanization）向外扩张——人口和企业迁往城市边缘的居住区。这得益于汽车、高速公路、有联邦担保的抵押贷款和廉价的边缘土地。当这种向外扩张是低密度、无规划并吞噬农田和开放空间时，地理学家称之为城市蔓延（urban sprawl）。蔓延加剧了对汽车的依赖和基础设施成本，是你稍后将学习的可持续性改革的对象。"
            },
            {
              "type": "p",
              "en": "As jobs and services followed people outward, nodes of offices, malls, and hotels grew at suburban highway interchanges. These are edge cities — concentrations of business and consumer activity outside the traditional downtown, often lacking a historic core or clear political boundaries. At the top of the global hierarchy sit world cities (or global cities) such as New York, London, and Tokyo. Their importance comes not from raw population but from command functions: they host corporate headquarters, financial markets, and international institutions that direct the world economy.",
              "zh": "随着工作和服务追随人口向外扩散，办公楼、商场和酒店的节点在郊区高速公路交汇处生长。这些就是边缘城市（edge cities）——位于传统市中心之外的商业和消费活动集中区，往往没有历史核心或明确的行政边界。位居全球等级顶端的是世界城市（world cities，或称全球城市 global cities），如纽约、伦敦和东京。它们的重要性并非来自人口规模，而来自其\"指挥\"职能：它们汇聚企业总部、金融市场和引导世界经济的国际机构。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Megacity — a metropolitan area with more than 10 million people (e.g., Delhi, Lagos, São Paulo).",
                  "zh": "巨型城市（megacity）——人口超过 1000 万的都市区（如德里、拉各斯、圣保罗）。"
                },
                {
                  "en": "Metacity (meta/hypercity) — an even larger continuous urban area exceeding 20 million people (e.g., Tokyo, Jakarta).",
                  "zh": "超巨型城市（metacity）——超过 2000 万人的更大连续城市区域（如东京、雅加达）。"
                },
                {
                  "en": "World/global city — a command-and-control center for the global economy, defined by function, not size.",
                  "zh": "世界/全球城市——全球经济的指挥控制中心，由职能而非规模定义。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "City Systems: How Cities Rank and Relate",
              "zh": "城市体系：城市如何排序与联系"
            },
            {
              "type": "p",
              "en": "Cities in a country form a system whose sizes often follow a pattern. The rank-size rule says that the nth-largest city is 1/n the size of the largest: the second city is about half the largest, the third about one-third, and so on. This produces a balanced hierarchy typical of large, economically integrated countries like the United States. When instead a single city is disproportionately large — more than twice the second city and dominating national life — it is a primate city, such as Paris in France or Bangkok in Thailand. A primate distribution often reflects a colonial past or a highly centralized economy.",
              "zh": "一个国家的城市构成一个体系，其规模往往遵循某种模式。等级—规模法则（rank-size rule）指出，第 n 大的城市是最大城市规模的 1/n：第二大城市约为最大城市的一半，第三大约为三分之一，依此类推。这产生了像美国这样大而经济一体化国家典型的均衡等级体系。当某一座城市规模异常地大——超过第二大城市的两倍并主导全国生活时——它就是首位城市（primate city），如法国的巴黎或泰国的曼谷。首位分布常反映殖民历史或高度中央集权的经济。"
            },
            {
              "type": "p",
              "en": "To predict interaction between cities, geographers use the gravity model. Borrowed from physics, it states that the interaction between two places is directly proportional to the product of their populations and inversely proportional to the square of the distance between them. Bigger places attract more; farther places interact less — an expression of distance decay. The model helps forecast migration, commuting, phone traffic, and retail flows.",
              "zh": "为预测城市间的相互作用，地理学家使用引力模型（gravity model）。它借自物理学，指出两地之间的相互作用与它们人口的乘积成正比，与它们之间距离的平方成反比。较大的地方吸引更多，较远的地方相互作用更少——这正是距离衰减（distance decay）的体现。该模型有助于预测迁移、通勤、电话流量和零售流量。"
            },
            {
              "type": "h2",
              "en": "Central Place Theory",
              "zh": "中心地理论"
            },
            {
              "type": "p",
              "en": "In 1933 Walter Christaller developed Central Place Theory to explain the size and spacing of settlements. A central place is a settlement that provides goods and services to a surrounding market area, or hinterland. Two concepts govern the system. The threshold is the minimum number of customers (or minimum market size) needed to keep a business profitable. The range is the maximum distance people will travel to obtain a good or service. Low-order goods (bread, milk) have small thresholds and short ranges, so there are many places offering them; high-order goods (specialist surgery, luxury cars) have large thresholds and long ranges, so only a few large cities offer them.",
              "zh": "1933 年，瓦尔特·克里斯塔勒（Walter Christaller）提出中心地理论（Central Place Theory）来解释聚落的规模与间距。中心地（central place）是向周围市场区或腹地（hinterland）提供商品和服务的聚落。两个概念支配着这一体系。门槛（threshold）是维持一项业务盈利所需的最少顾客数（或最小市场规模）。范围（range）是人们为获得某种商品或服务愿意前往的最大距离。低级商品（面包、牛奶）门槛小、范围短，因此提供它们的地方很多；高级商品（专科手术、豪华汽车）门槛大、范围长，因此只有少数大城市提供。"
            },
            {
              "type": "p",
              "en": "Christaller argued that if the land were a flat, uniform plain, market areas would settle into interlocking hexagons — the shape that covers all territory with no gaps or overlaps while keeping travel distances minimal. The result is a nested hierarchy: a few large cities offering high-order goods, more medium towns, and many small villages, each with a hexagonal hinterland fitting inside the larger ones.",
              "zh": "克里斯塔勒认为，如果土地是平坦、均质的平原，市场区就会形成相互嵌套的六边形（hexagon）——这种形状能无缝隙、无重叠地覆盖全部区域，同时使出行距离最短。结果是一个嵌套的等级体系：少数提供高级商品的大城市、较多的中等城镇，以及许多小村庄，每一层的六边形腹地都套嵌在更大的腹地之内。"
            },
            {
              "type": "note",
              "en": "AP tip — Threshold vs. range: Threshold is about PEOPLE (how many customers you need to survive). Range is about DISTANCE (how far they will travel to reach you). A big-city cancer hospital has a large threshold and a large range; a corner convenience store has a small threshold and a small range. Confusing the two is the most common Central Place error.",
              "zh": "AP 提示——门槛与范围：门槛关乎\"人\"（你生存所需的顾客数量）。范围关乎\"距离\"（他们愿意走多远来找你）。大城市的癌症医院门槛大、范围大；街角便利店门槛小、范围小。混淆二者是中心地理论最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying Central Place Theory",
                "zh": "例题 1：应用中心地理论"
              },
              "problem": {
                "en": "A rural region has one large city with a symphony orchestra and a university hospital, several towns each with a supermarket and a high school, and dozens of villages with only a gas station and a small grocery. Explain this pattern using threshold and range.",
                "zh": "某乡村地区有一座拥有交响乐团和大学附属医院的大城市、若干各有一家超市和一所高中的城镇，以及数十个仅有加油站和小杂货店的村庄。用门槛与范围解释这一格局。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "High-order services (orchestra, specialized hospital) need a very large threshold of customers and people will travel a long range to reach them, so only ONE big city can support them. Everyday low-order goods (gas, groceries) have small thresholds and short ranges, so they appear in many closely spaced villages. Supermarkets and high schools are middle-order, so they cluster in a moderate number of towns. The nested result — few large, more medium, many small — is exactly Christaller's hierarchy of central places.",
                  "zh": "高级服务（交响乐团、专科医院）需要极大的顾客门槛，且人们愿意跨越很长的范围前往，因此只有\"一座\"大城市能支撑它们。日常低级商品（汽油、杂货）门槛小、范围短，所以出现在许多间距很近的村庄。超市和高中属中级，因此集中在数量适中的城镇。这种\"少数大、较多中、许多小\"的嵌套结果，正是克里斯塔勒的中心地等级体系。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading a City-Size Distribution",
                "zh": "例题 2：解读城市规模分布"
              },
              "problem": {
                "en": "Country A's largest city has 8 million people; its second city has 3.9 million and its third has 2.6 million. Country B's largest city has 9 million; its second city has 1.2 million. Classify each distribution and suggest what Country B's pattern implies.",
                "zh": "甲国最大城市有 800 万人，第二大城市 390 万，第三大城市 260 万；乙国最大城市 900 万，第二大城市 120 万。分别判断两种分布类型，并说明乙国格局可能意味着什么。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Country A fits the rank-size rule: the second city is roughly 1/2 (3.9 ≈ 8/2) and the third roughly 1/3 (2.6 ≈ 8/3) of the largest, indicating a balanced, integrated urban system. Country B is a primate distribution: the largest city is more than seven times the second and dominates the nation. Primacy often signals a centralized political economy or a colonial legacy in which one gateway city concentrated administration, trade, and investment while the rest of the country was left underdeveloped.",
                  "zh": "甲国符合等级—规模法则：第二大城市约为最大城市的 1/2（390≈800/2），第三大约为 1/3（260≈800/3），表明城市体系均衡而一体化。乙国是首位分布：最大城市是第二大城市的七倍以上，主导全国。首位性往往标志着中央集权的政治经济，或殖民遗产——某一门户城市集中了行政、贸易和投资，而国家其余部分则发展不足。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A city grew because it sits at the junction of two major trade routes linking distant markets. This advantage is best described as its —",
                "zh": "某城市因坐落于连接遥远市场的两条主要贸易路线交汇处而发展。这一优势最恰当地被称为它的——"
              },
              "choices": [
                "Site",
                "Situation",
                "Threshold",
                "Range"
              ],
              "answer": 1,
              "explanation": {
                "en": "Situation is a place's position relative to other places — its connectivity and accessibility, exactly what trade-route junctions describe. Site (A) is the tempting distractor, but site refers to the absolute physical features of the spot itself (harbor, hills, water), not its links to other markets.",
                "zh": "位置（situation）是一地相对于其他地方的位置——其连通性和可达性，正是贸易路线交汇所描述的。地方（A）是有诱惑力的干扰项，但地方指该地点本身的绝对自然特征（港口、山丘、水源），而非它与其他市场的联系。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "According to the rank-size rule, if a country's largest city has 12 million people, the fourth-largest city should have approximately —",
                "zh": "根据等级—规模法则，若一国最大城市有 1200 万人，第四大城市大约应有——"
              },
              "choices": [
                "6 million",
                "4 million",
                "3 million",
                "1 million"
              ],
              "answer": 2,
              "explanation": {
                "en": "The rule states the nth city is 1/n the largest, so the 4th city ≈ 12/4 = 3 million. Choice A (6 million) is 1/2 and would be the second city; choice B (4 million) is 1/3, the third city. Applying the wrong rank fraction is the classic mistake.",
                "zh": "该法则指出第 n 大城市为最大城市的 1/n，故第四大城市 ≈ 12/4 = 300 万。选项 A（600 万）是 1/2，应为第二大城市；选项 B（400 万）是 1/3，为第三大城市。套错等级分数是典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement best captures why a specialty heart-surgery center is found only in large cities, while convenience stores are found in nearly every neighborhood?",
                "zh": "下列哪项最好地解释了为何专科心脏外科中心只出现在大城市，而便利店几乎遍布每个社区？"
              },
              "choices": [
                "Heart surgery has a small threshold and short range; convenience stores have a large threshold and long range.",
                "Heart surgery has a large threshold and long range; convenience stores have a small threshold and short range.",
                "Both have identical thresholds but different ranges.",
                "Threshold and range apply only to manufacturing, not services."
              ],
              "answer": 1,
              "explanation": {
                "en": "High-order services like heart surgery need a huge customer base (large threshold) and draw patients from far away (long range), so few centers exist. Convenience stores need few customers (small threshold) who will not travel far (short range), so many exist. Choice A reverses the two, the most common Central Place error.",
                "zh": "心脏外科这类高级服务需要庞大的顾客基础（大门槛），并从远方吸引病人（长范围），因此中心很少。便利店只需少量顾客（小门槛），且顾客不愿远行（短范围），因此数量众多。选项 A 把二者颠倒，是中心地理论最常见的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The gravity model predicts that interaction between two cities will be greatest when the cities are —",
                "zh": "引力模型预测，两座城市之间的相互作用在何种情况下最大——"
              },
              "choices": [
                "small and far apart",
                "small and close together",
                "large and far apart",
                "large and close together"
              ],
              "answer": 3,
              "explanation": {
                "en": "Interaction rises with the product of populations and falls with the square of distance, so it peaks when cities are large (bigger populations) AND close (small distance). Choice C is tempting because large cities interact a lot, but great distance sharply reduces interaction through distance decay.",
                "zh": "相互作用随人口乘积增大、随距离平方减小，因此在城市既大（人口更多）又近（距离小）时达到峰值。选项 C 有诱惑力，因为大城市相互作用多，但远距离通过距离衰减急剧削弱相互作用。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An office-and-retail node clustered at a suburban highway interchange, lacking a historic downtown, is best classified as a —",
                "zh": "聚集在郊区高速公路交汇处、没有历史市中心的办公与零售节点，最恰当地被归类为——"
              },
              "choices": [
                "primate city",
                "edge city",
                "metacity",
                "central place of the highest order"
              ],
              "answer": 1,
              "explanation": {
                "en": "An edge city is a concentration of business and consumer activity on the urban periphery, typically at highway interchanges and without a traditional core. A primate city (A) is a nation-dominating central city; a metacity (C) is a 20-million-plus urban area — both describe scale, not this suburban node.",
                "zh": "边缘城市是位于城市外围（通常在高速公路交汇处）、没有传统核心的商业与消费活动集中区。首位城市（A）是主导全国的中心城市；超巨型城市（C）是 2000 万人以上的城市区域——二者都描述规模，而非这种郊区节点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term names a single city that is more than twice the size of the second-largest and dominates its country economically and culturally? Answer with the two-word term.",
                "zh": "哪个术语指规模超过第二大城市两倍、在经济和文化上主导全国的单一城市？请用该两词术语作答。"
              },
              "answer": "primate city",
              "accept": [
                "primate city",
                "the primate city",
                "primate"
              ],
              "explanation": {
                "en": "A primate city (e.g., Paris, Bangkok) dominates its national urban system, often reflecting a colonial past or centralized economy. It is the opposite of the balanced hierarchy described by the rank-size rule.",
                "zh": "首位城市（如巴黎、曼谷）主导本国城市体系，常反映殖民历史或中央集权经济。它与等级—规模法则所描述的均衡等级体系相反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In Central Place Theory, what is the maximum distance people are willing to travel to obtain a particular good or service called? Answer with one word.",
                "zh": "在中心地理论中，人们为获得某种特定商品或服务愿意前往的最大距离叫什么？请用一个词作答。"
              },
              "answer": "range",
              "accept": [
                "range",
                "the range"
              ],
              "explanation": {
                "en": "The range is the maximum travel distance for a good; the threshold is the minimum market size needed to sustain it. High-order goods have long ranges (people travel far); low-order goods have short ranges.",
                "zh": "范围是获取某商品的最大出行距离；门槛是维持它所需的最小市场规模。高级商品范围长（人们远行前往）；低级商品范围短。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the surrounding market area served by a central place called? Answer with one word.",
                "zh": "一个中心地所服务的周围市场区叫什么？请用一个词作答。"
              },
              "answer": "hinterland",
              "accept": [
                "hinterland",
                "the hinterland",
                "market area"
              ],
              "explanation": {
                "en": "The hinterland (or market area) is the region a central place supplies with goods and services. In Christaller's ideal plain these areas take the form of nested hexagons that cover space without gaps or overlaps.",
                "zh": "腹地（hinterland，或市场区）是中心地供应商品和服务的区域。在克里斯塔勒理想的平原上，这些区域呈嵌套的六边形，无缝隙、无重叠地覆盖空间。"
              }
            }
          ]
        },
        {
          "id": "internal-structure-of-cities",
          "title": "The Internal Structure of Cities",
          "titleZh": "城市内部结构",
          "content": [
            {
              "type": "h2",
              "en": "Modeling the Inside of a City",
              "zh": "为城市内部建模"
            },
            {
              "type": "p",
              "en": "Cities are not random jumbles of land use. Geographers build urban models — simplified diagrams — to reveal the patterns of where people live, work, shop, and manufacture, and to expose the social geography of wealth, poverty, and ethnicity. No real city matches a model exactly; the point is to compare the model to reality to see what forces (transport, land value, class, history, colonialism) shaped a particular place. The models fall into two families: those built to describe North American cities, and those built for cities of the developing world shaped by colonial and post-colonial forces.",
              "zh": "城市并非土地利用的随机堆砌。地理学家建立城市模型（urban models）——简化的图示——以揭示人们居住、工作、购物和制造的空间格局，并展现财富、贫困和族裔的社会地理。没有一座真实城市与模型完全吻合；关键在于把模型与现实对照，看出是哪些力量（交通、地价、阶级、历史、殖民主义）塑造了某个具体的地方。这些模型分为两大家族：为描述北美城市而建的，以及为受殖民和后殖民力量塑造的发展中世界城市而建的。"
            },
            {
              "type": "h2",
              "en": "Bid-Rent Theory: The Logic Behind the Models",
              "zh": "竞租理论：模型背后的逻辑"
            },
            {
              "type": "p",
              "en": "Underlying nearly every North American model is bid-rent theory: the price and demand for land change with distance from the central business district (CBD). Because the CBD is the most accessible point, competition for it is fierce and land there is most expensive. Different users can pay different amounts: commercial and retail activities, which profit most from central accessibility, outbid everyone for the core; industry and then residential uses locate farther out where land is cheaper. This creates a gradient — high-value, high-density land at the center falling to lower-value, lower-density land at the edge.",
              "zh": "几乎每个北美模型的底层都是竞租理论（bid-rent theory）：土地的价格和需求随与中央商务区（CBD）的距离而变化。由于 CBD 是最易到达的地点，对它的竞争最激烈，那里的地价最高。不同用户能承受的价格不同：从中心可达性中获利最多的商业和零售活动出价最高，抢占核心；工业、其次是居住用途则位于地价较便宜的更外围。这形成了一种梯度——中心是高价值、高密度的土地，向边缘递减为低价值、低密度的土地。"
            },
            {
              "type": "note",
              "en": "AP tip — Bid-rent is the \"why\" beneath the maps: When a question asks why retail dominates the center while single-family homes spread at the fringe, answer with bid-rent — those who profit most from accessibility (retail) can pay the highest rent for central land, while land-hungry, lower-paying uses (housing) locate where land is cheap.",
              "zh": "AP 提示——竞租是地图之下的\"为什么\"：当题目问为何零售主导中心而独栋住宅铺展在边缘时，用竞租理论作答——从可达性获利最多的用途（零售）能为中心土地支付最高租金，而占地多、支付能力低的用途（住宅）则位于地价便宜之处。"
            },
            {
              "type": "h2",
              "en": "The Classic North American Models",
              "zh": "经典北美模型"
            },
            {
              "type": "h3",
              "en": "Burgess Concentric Zone Model (1925)",
              "zh": "伯吉斯同心圆模型（1925）"
            },
            {
              "type": "p",
              "en": "Ernest Burgess, working in Chicago, pictured the city as a series of rings growing outward from the CBD. Ring 2, the zone in transition, holds older housing and industry being invaded by business and is home to recent, poorer migrants. Beyond it lie the zone of working-class housing, then better residential zones, and finally a commuter zone at the edge. The model captures the idea that as cities grow, each ring pushes outward and social status generally rises with distance from the center.",
              "zh": "在芝加哥工作的欧内斯特·伯吉斯（Ernest Burgess）把城市想象为从 CBD 向外扩展的一系列同心环。第二环——过渡带（zone in transition）——是被商业侵入的老旧住房和工业，也是新来的较贫困移民的居所。其外是工人阶级住宅带，再往外是较好的居住带，最外是边缘的通勤带（commuter zone）。该模型表达了这样的思想：城市增长时每一环都向外推进，社会地位通常随与中心的距离而上升。"
            },
            {
              "type": "h3",
              "en": "Hoyt Sector Model (1939)",
              "zh": "霍伊特扇形模型（1939）"
            },
            {
              "type": "p",
              "en": "Homer Hoyt argued that a city grows in wedges or sectors along transportation corridors (railroads, roads, rivers) rather than in neat rings. Once a land use — say high-rent housing or industry — takes root along a corridor, it extends outward in that same wedge as the city expands. This explains why an affluent neighborhood or an industrial-and-rail belt can run from near the center all the way to the suburbs in a single direction.",
              "zh": "霍默·霍伊特（Homer Hoyt）主张城市沿交通走廊（铁路、道路、河流）以楔形或扇形（sectors）生长，而非整齐的同心环。一旦某种土地利用——比如高租金住宅或工业——沿某走廊扎根，它便随城市扩张在同一楔形内向外延伸。这解释了为何一个富裕社区或一条工业—铁路带能沿单一方向从近中心一路延伸到郊区。"
            },
            {
              "type": "h3",
              "en": "Harris & Ullman Multiple Nuclei Model (1945)",
              "zh": "哈里斯与厄尔曼多核心模型（1945）"
            },
            {
              "type": "p",
              "en": "Chauncy Harris and Edward Ullman noticed that as cars freed cities from a single center, activity clustered around several independent nodes, or nuclei — an airport district, a university, an industrial park, an outlying business center. Similar activities cluster together (agglomeration) and incompatible ones repel each other (heavy industry and expensive housing avoid one another). The result is a patchwork of specialized districts rather than one dominant core.",
              "zh": "昌西·哈里斯（Chauncy Harris）和爱德华·厄尔曼（Edward Ullman）注意到，随着汽车使城市摆脱单一中心，活动围绕若干独立的节点或核心（nuclei）聚集——机场区、大学、工业园、外围商业中心。相似活动聚在一起（集聚 agglomeration），互不相容的活动相互排斥（重工业与高价住宅彼此回避）。结果是一片专门化区域的拼图，而非单一主导核心。"
            },
            {
              "type": "h3",
              "en": "Galactic City / Peripheral (Edge City) Model",
              "zh": "星系城市／外围（边缘城市）模型"
            },
            {
              "type": "p",
              "en": "The most recent North American model, the galactic (or peripheral) city, updates the others for the automobile-and-freeway era. The original CBD becomes just one node among many; edge cities of offices, malls, and services orbit the old core along a ring highway, like planets around a star. It captures decentralization, sprawl, and the rise of suburban business centers in late-20th-century America.",
              "zh": "最新的北美模型——星系城市（galactic city，或外围城市 peripheral model）——为汽车与高速公路时代更新了前几个模型。原有的 CBD 只是众多节点之一；由办公楼、商场和服务构成的边缘城市沿环形高速公路环绕旧核心运转，宛如行星围绕恒星。它刻画了 20 世纪晚期美国的去中心化、蔓延和郊区商业中心的兴起。"
            },
            {
              "type": "h2",
              "en": "Models of Cities in the Developing World",
              "zh": "发展中世界城市模型"
            },
            {
              "type": "h3",
              "en": "Latin American City Model (Griffin-Ford)",
              "zh": "拉丁美洲城市模型（格里芬—福特）"
            },
            {
              "type": "p",
              "en": "The Griffin-Ford model blends a traditional CBD with a commercial spine — an elite corridor of the best shops, offices, and amenities — extending out to a protected upper-class residential sector called the mall. Surrounding this are rings of housing whose quality DECREASES with distance from the center (the reverse of Burgess): the outermost ring is the zone of peripheral squatter settlements, the disamenity zone of the poorest, informally built housing, often lacking services. A separate zone of maturity holds established middle-class neighborhoods.",
              "zh": "格里芬—福特（Griffin-Ford）模型把传统 CBD 与一条商业主轴（commercial spine）结合起来——那是一条汇集最好商店、办公楼和设施的精英走廊——延伸至一个受保护的上层住宅区，称为\"林荫\"区（the mall）。围绕它的是若干住宅环，其品质随与中心的距离\"下降\"（与伯吉斯相反）：最外环是外围棚户区带（zone of peripheral squatter settlements），是最贫困、非正规搭建、常缺乏服务的\"劣质区\"（disamenity zone）。另有一个成熟带（zone of maturity）容纳已确立的中产社区。"
            },
            {
              "type": "h3",
              "en": "Sub-Saharan African City Model",
              "zh": "撒哈拉以南非洲城市模型"
            },
            {
              "type": "p",
              "en": "The Sub-Saharan African city often has not one but three CBDs, a legacy of colonialism: a colonial CBD of formal, Western-style commerce with vertical buildings; a traditional CBD of one-story, older shops; and a bustling market zone of open-air, informal trade. Ethnic and mixed neighborhoods surround these cores, and rapidly growing squatter settlements form on the outskirts where migrants build informal housing faster than services can reach them.",
              "zh": "撒哈拉以南非洲城市往往不是一个而是三个 CBD，这是殖民主义的遗产：一个殖民 CBD（正规、西式、高楼的商业）；一个传统 CBD（低矮、老旧的商铺）；以及一个繁忙的市场区（露天的非正规贸易）。族裔和混合社区环绕这些核心，快速增长的棚户区（squatter settlements）形成于城郊，那里移民搭建非正规住房的速度快于服务所能覆盖的速度。"
            },
            {
              "type": "h3",
              "en": "Southeast Asian City Model (McGee)",
              "zh": "东南亚城市模型（麦吉）"
            },
            {
              "type": "p",
              "en": "T. G. McGee found that Southeast Asian port cities have NO single CBD. Instead the focus is the old colonial port zone, around which functions spread outward in a pattern resembling sectors and zones: an export-oriented industrial area, a mixed commercial zone often dominated by ethnic Chinese merchants (the alien commercial zone), a government zone, and belts of high-class, middle, and squatter housing, with market gardening on the fringe. The port, not a downtown, organizes the whole city.",
              "zh": "T·G·麦吉（T. G. McGee）发现东南亚港口城市\"没有\"单一 CBD。相反，焦点是旧殖民港区，各种功能围绕它以类似扇形与环带的格局向外扩散：出口导向的工业区、常由华商主导的混合商业区（外来商业区 alien commercial zone）、政府区，以及高级、中等和棚户住宅带，边缘是商品菜园（market gardening）。组织整座城市的是港口，而非某个市中心。"
            },
            {
              "type": "note",
              "en": "AP tip — Read the models as history and power, not just shapes. The reversed wealth gradient in Latin American, African, and Southeast Asian models (rich near the center, poor at the edge in squatter settlements) reflects rapid rural-to-urban migration and colonial legacies — the opposite of the North American pattern where the wealthy fled to the suburbs. On the exam, connect the map to the PROCESS that made it.",
              "zh": "AP 提示——把模型读作历史与权力，而不仅是形状。拉美、非洲和东南亚模型中财富梯度的反转（富人靠近中心，穷人在边缘的棚户区）反映了快速的乡城迁移与殖民遗产——与北美富人逃往郊区的格局相反。在考试中，要把地图与造就它的\"过程\"联系起来。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Choosing the Right Model",
                "zh": "例题 1：选择正确的模型"
              },
              "problem": {
                "en": "A city has a wealthy commercial spine of luxury shops running from the center out to a gated elite neighborhood, while the poorest residents live in self-built housing without piped water on the far outskirts. Which model fits, and what process explains the poverty at the edge?",
                "zh": "某城市有一条从中心延伸到封闭精英社区的富裕商业主轴，汇集奢侈商店，而最贫困的居民住在远郊没有自来水的自建房屋中。哪个模型最契合？什么过程解释了边缘的贫困？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This is the Latin American (Griffin-Ford) model: the commercial spine leading to an elite residential sector, and a reversed wealth gradient in which the disamenity zone of peripheral squatter settlements lies at the edge. The process is rapid rural-to-urban migration outpacing housing and infrastructure — newcomers cannot afford central land, so they build informal housing on unserviced peripheral land, the reverse of the North American suburb.",
                  "zh": "这是拉丁美洲（格里芬—福特）模型：商业主轴通向精英住宅区，且财富梯度反转——外围棚户区的\"劣质区\"位于边缘。其过程是快速的乡城迁移超过了住房和基础设施的供给——新来者无力负担中心土地，于是在没有服务的外围土地上搭建非正规住房，与北美郊区正好相反。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Using Bid-Rent to Read Density",
                "zh": "例题 2：用竞租理论解读密度"
              },
              "problem": {
                "en": "Explain, using bid-rent theory, why land near the CBD is typically covered by tall office towers while land at the urban fringe holds low, spread-out single-family homes.",
                "zh": "用竞租理论解释，为何 CBD 附近的土地通常被高层办公楼覆盖，而城市边缘的土地是低矮、分散的独栋住宅。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Central land is the most accessible and therefore the most expensive. To justify that high rent, users build UP — tall towers pack many rentable floors onto a small, costly footprint, maximizing return per unit of land. At the fringe, land is cheap, so users spread OUT — low-density homes on large lots make sense because there is no need to economize on land. Bid-rent thus links land value directly to building height and density.",
                  "zh": "中心土地最易到达，因而最昂贵。为对得起这高租金，用户向\"上\"建——高塔在昂贵的小占地面积上叠加许多可出租楼层，使单位土地回报最大化。在边缘，土地便宜，用户便向\"外\"铺展——大地块上的低密度住宅是合理的，因为无需节省土地。竞租理论由此把地价直接与建筑高度和密度联系起来。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which model depicts a city growing outward in wedges along transportation routes, so that a single land use extends from near the center to the suburbs in one direction?",
                "zh": "哪个模型描绘城市沿交通线以楔形向外生长，使某一土地利用在单一方向上从近中心延伸到郊区？"
              },
              "choices": [
                "Burgess concentric zone model",
                "Hoyt sector model",
                "Harris & Ullman multiple nuclei model",
                "Griffin-Ford Latin American model"
              ],
              "answer": 1,
              "explanation": {
                "en": "The Hoyt sector model explains growth in wedges (sectors) along transport corridors. Burgess (A) uses concentric rings, not wedges; Harris & Ullman (C) uses multiple independent nodes. Confusing rings (Burgess) with wedges (Hoyt) is the most common mix-up.",
                "zh": "霍伊特扇形模型用沿交通走廊的楔形（扇形）解释城市生长。伯吉斯（A）用同心环而非楔形；哈里斯与厄尔曼（C）用多个独立节点。把同心环（伯吉斯）与楔形（霍伊特）混淆是最常见的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Bid-rent theory predicts that as distance from the CBD increases, land value and land-use intensity will —",
                "zh": "竞租理论预测，随着与 CBD 距离的增加，地价和土地利用强度将——"
              },
              "choices": [
                "both increase",
                "both decrease",
                "value increases while intensity decreases",
                "stay constant across the city"
              ],
              "answer": 1,
              "explanation": {
                "en": "Because the CBD is most accessible, both land value and intensity (density, building height) are highest at the center and decline outward — both decrease with distance. Choice C is tempting but incorrect: value and intensity fall TOGETHER, since cheap fringe land supports only low-density use.",
                "zh": "由于 CBD 最易到达，地价和利用强度（密度、建筑高度）在中心最高并向外递减——二者都随距离下降。选项 C 有诱惑力但错误：价值与强度\"一同\"下降，因为便宜的边缘土地只能支撑低密度利用。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A key difference between the Latin American (Griffin-Ford) model and the Burgess model is that in the Latin American model —",
                "zh": "拉丁美洲（格里芬—福特）模型与伯吉斯模型的一个关键区别在于，拉美模型中——"
              },
              "choices": [
                "the wealthiest residents live farthest from the center",
                "the poorest residents, in squatter settlements, live farthest from the center",
                "there is no central business district at all",
                "land use is organized entirely around a colonial port"
              ],
              "answer": 1,
              "explanation": {
                "en": "In Griffin-Ford the wealth gradient is reversed from Burgess: elites cluster near the center along the commercial spine, while the poorest occupy peripheral squatter settlements at the edge. Choice A describes the North American/Burgess pattern; choice D describes the Southeast Asian (McGee) model.",
                "zh": "在格里芬—福特模型中，财富梯度与伯吉斯相反：精英沿商业主轴聚集在中心附近，而最贫困者占据边缘的外围棚户区。选项 A 描述的是北美／伯吉斯格局；选项 D 描述的是东南亚（麦吉）模型。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The Southeast Asian city model developed by T. G. McGee is distinctive because it —",
                "zh": "T·G·麦吉提出的东南亚城市模型之所以独特，是因为它——"
              },
              "choices": [
                "has three separate CBDs from the colonial era",
                "is organized around a former colonial port rather than a single CBD",
                "grows only in concentric rings of equal social status",
                "has no residential zoning of any kind"
              ],
              "answer": 1,
              "explanation": {
                "en": "McGee's model lacks a single CBD; functions radiate from an old colonial port zone. Choice A describes the Sub-Saharan African model (colonial + traditional + market CBDs). Choice C is essentially Burgess, a North American model.",
                "zh": "麦吉的模型没有单一 CBD；各功能从旧殖民港区向外辐射。选项 A 描述的是撒哈拉以南非洲模型（殖民＋传统＋市场三个 CBD）。选项 C 本质上是伯吉斯模型，属北美模型。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The galactic (peripheral) city model differs from the earlier North American models primarily by emphasizing —",
                "zh": "星系（外围）城市模型与早先的北美模型的主要区别在于强调——"
              },
              "choices": [
                "the dominance of a single powerful CBD",
                "edge cities and decentralized nodes connected by freeways",
                "growth in concentric rings around a rail hub",
                "the absence of any suburbs"
              ],
              "answer": 1,
              "explanation": {
                "en": "The galactic model shows the old CBD reduced to one node among many, with edge cities orbiting along ring freeways — capturing automobile-era decentralization and sprawl. Choice A is the opposite of what the model shows; choice C describes Burgess.",
                "zh": "星系模型显示旧 CBD 降为众多节点之一，边缘城市沿环形高速公路运转——刻画了汽车时代的去中心化与蔓延。选项 A 与模型所示恰好相反；选项 C 描述的是伯吉斯模型。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What theory holds that the price and demand for urban land depend on distance from the central business district, so those who profit most from accessibility outbid others for central land? Answer with the two-word term (hyphen optional).",
                "zh": "哪一理论认为城市土地的价格和需求取决于与中央商务区的距离，因而从可达性获利最多者出价高于他人争夺中心土地？请用该两词术语作答（连字符可选）。"
              },
              "answer": "bid-rent",
              "accept": [
                "bid-rent",
                "bid rent",
                "bid-rent theory",
                "bid rent theory"
              ],
              "explanation": {
                "en": "Bid-rent theory explains the land-value gradient: retail and offices, profiting most from central accessibility, pay the highest rents for core land, while housing spreads to the cheaper fringe.",
                "zh": "竞租理论解释地价梯度：从中心可达性获利最多的零售和办公楼为核心土地支付最高租金，而住宅铺展到较便宜的边缘。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Which North American model, developed by Harris and Ullman, argues that a city grows around several independent nodes rather than one center? Answer with the model's three-word name.",
                "zh": "哈里斯与厄尔曼提出的哪个北美模型主张城市围绕若干独立节点而非单一中心生长？请用该模型的三词名称作答。"
              },
              "answer": "multiple nuclei",
              "accept": [
                "multiple nuclei",
                "multiple nuclei model",
                "multiple-nuclei"
              ],
              "explanation": {
                "en": "The multiple nuclei model (Harris & Ullman, 1945) holds that similar activities agglomerate around several nuclei (airport, university, industrial park) while incompatible uses repel one another, producing a patchwork of specialized districts.",
                "zh": "多核心模型（哈里斯与厄尔曼，1945）认为相似活动围绕若干核心（机场、大学、工业园）集聚，而不相容的用途相互排斥，形成专门化区域的拼图。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the Latin American and African city models, what term describes the areas of self-built, often unserviced informal housing on the urban periphery? Answer with the two-word term.",
                "zh": "在拉美和非洲城市模型中，哪个术语指城市外围自建、常无基础设施的非正规住房区？请用该两词术语作答。"
              },
              "answer": "squatter settlements",
              "accept": [
                "squatter settlements",
                "squatter settlement",
                "squatter",
                "shantytown",
                "shantytowns"
              ],
              "explanation": {
                "en": "Squatter settlements (also called shantytowns or informal settlements) house the poorest residents at the edge in these models, a product of rural-to-urban migration outpacing formal housing. Their peripheral poverty reverses the North American pattern.",
                "zh": "棚户区（squatter settlements，也称贫民窟或非正规聚落）在这些模型中容纳边缘最贫困的居民，是乡城迁移超过正规住房供给的产物。其边缘的贫困与北美格局相反。"
              }
            }
          ]
        },
        {
          "id": "urban-challenges-and-sustainability",
          "title": "Urban Challenges and Sustainability",
          "titleZh": "城市挑战与可持续性",
          "content": [
            {
              "type": "h2",
              "en": "The Strain of Urban Growth",
              "zh": "城市增长的压力"
            },
            {
              "type": "p",
              "en": "Rapid urban growth outruns the systems that make cities livable. Urban infrastructure — the roads, water and sewer lines, power grids, public transit, schools, and communications networks a city depends on — is expensive to build and maintain and often lags behind population. In wealthy cities, aging infrastructure decays; in rapidly growing cities of the developing world, it may never have reached the fast-expanding periphery at all. Where formal systems fail, residents improvise, and the informal economy — unregulated, untaxed work like street vending and self-built housing — fills the gap.",
              "zh": "快速的城市增长超过了使城市宜居的各种系统。城市基础设施（urban infrastructure）——城市所依赖的道路、供排水管线、电网、公共交通、学校和通信网络——建设和维护昂贵，且常滞后于人口。在富裕城市，老化的基础设施衰败；在发展中世界快速增长的城市，它可能从未到达迅速扩张的外围。当正规系统失灵时，居民便自行应对，非正规经济（informal economy）——如街头小贩和自建住房这类不受监管、不纳税的活动——填补了空缺。"
            },
            {
              "type": "h2",
              "en": "Housing, Wealth, and Segregation",
              "zh": "住房、财富与隔离"
            },
            {
              "type": "p",
              "en": "Where people can live has long been shaped by wealth and by discrimination. Residential segregation — the spatial separation of groups by race, ethnicity, or income — was in the United States actively produced by specific practices. Redlining was the refusal of banks and insurers to lend in neighborhoods marked (often literally in red on maps) as risky because minorities lived there, starving those areas of investment. Blockbusting was a scare tactic in which agents, after one minority family moved in, frightened white owners into selling cheaply, then resold at a markup — deliberately flipping neighborhoods for profit. Both entrenched patterns of segregation that persist today.",
              "zh": "人们能住在哪里长期以来受财富和歧视的塑造。居住隔离（residential segregation）——按种族、族裔或收入对群体的空间分离——在美国是由若干具体做法主动造成的。红线划分（redlining）是银行和保险公司拒绝向被标记为\"高风险\"（常在地图上用红色标出，因为有少数族裔居住）的社区放贷，使这些地区失去投资。逼迁牟利（blockbusting）是一种恐吓手段：中介在一个少数族裔家庭迁入后，吓唬白人业主低价抛售，再加价转售——为牟利而蓄意\"翻转\"社区。二者都固化了延续至今的隔离格局。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Redlining — denying loans/insurance to neighborhoods deemed risky because of their racial makeup.",
                  "zh": "红线划分——因社区的种族构成而认定其\"高风险\"，拒绝向其提供贷款／保险。"
                },
                {
                  "en": "Blockbusting — inducing panic selling by white owners for profit after minority move-in.",
                  "zh": "逼迁牟利——少数族裔迁入后诱使白人业主恐慌抛售以牟利。"
                },
                {
                  "en": "Gentrification — reinvestment that renovates a poor inner-city area, raising rents and displacing longtime residents.",
                  "zh": "绅士化——对贫困内城区再投资翻新，抬高租金并使长期居民被迫迁离。"
                },
                {
                  "en": "Affordable housing — housing whose cost does not exceed roughly 30% of a household's income; chronically scarce in growing cities.",
                  "zh": "可负担住房——成本不超过家庭收入约 30% 的住房；在增长中的城市长期短缺。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Gentrification is a different but equally contentious process: middle- and upper-income newcomers move into a disinvested inner-city neighborhood, renovate housing, and attract new businesses. It can revive tax bases and reduce crime, but by driving up rents and property values it often displaces the poorer, longtime (frequently minority) residents who cannot afford to stay — a core equity dilemma in cities today. Alongside it, a persistent shortage of affordable housing pushes lower-income households toward long commutes, overcrowding, or, in the developing world, squatter settlements.",
              "zh": "绅士化（gentrification）是另一种同样有争议的过程：中高收入的新来者迁入被撤资的内城社区，翻新住房并吸引新商铺。它能重振税基、降低犯罪，但通过抬高租金和房产价值，往往使无力留下的较贫困、长期（常为少数族裔）居民被迫迁离——这是当今城市核心的公平困境。与此并存的是可负担住房（affordable housing）的持续短缺，把低收入家庭推向长途通勤、过度拥挤，或在发展中世界推向棚户区。"
            },
            {
              "type": "note",
              "en": "AP tip — Don't confuse redlining and blockbusting. Redlining WITHHOLDS money from a neighborhood (banks refuse to lend there). Blockbusting MOVES money by manipulating fear (agents profit by flipping who lives there). Both cause segregation, but one starves investment while the other engineers turnover. Gentrification, by contrast, is reinvestment that displaces through rising costs, not overt discrimination.",
              "zh": "AP 提示——别混淆红线划分与逼迁牟利。红线划分是\"扣留\"资金（银行拒绝在此放贷）。逼迁牟利是通过操纵恐惧来\"转移\"资金（中介靠翻转居民牟利）。二者都造成隔离，但前者使投资枯竭，后者制造人口更替。相比之下，绅士化是再投资，通过成本上升而非公开歧视造成迁离。"
            },
            {
              "type": "h2",
              "en": "Building Sustainable Cities",
              "zh": "建设可持续城市"
            },
            {
              "type": "p",
              "en": "To counter sprawl and its costs, planners promote urban sustainability — meeting present needs without degrading the environment or exhausting resources for the future. A central strategy is smart growth: policies that direct growth inward and upward rather than outward, increasing density, mixing land uses, and preserving open space. Related to it is new urbanism, a design movement that builds walkable, mixed-use neighborhoods with a range of housing types, front porches, and street grids meant to recreate the community feel of pre-automobile towns.",
              "zh": "为对抗蔓延及其代价，规划者推广城市可持续性（urban sustainability）——在不破坏环境、不耗尽未来资源的前提下满足当前需求。核心策略之一是精明增长（smart growth）：引导增长向内、向上而非向外的政策，提高密度、混合土地利用并保护开放空间。与之相关的是新城市主义（new urbanism），一种设计运动，营造可步行、混合用途的社区，提供多样的住房类型、门廊和街道网格，意在重现汽车时代之前城镇的社区氛围。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Mixed-use zoning — allowing homes, shops, and offices in the same area so people can walk between them.",
                  "zh": "混合用途分区——允许住宅、商店和办公楼位于同一区域，使人们可步行往来。"
                },
                {
                  "en": "Greenbelt — a ring of protected open land around a city that limits outward sprawl (e.g., London).",
                  "zh": "绿带（greenbelt）——环绕城市、限制向外蔓延的受保护开放土地环（如伦敦）。"
                },
                {
                  "en": "Transit-oriented development — dense, walkable building clustered around public-transport stations.",
                  "zh": "公交导向开发——围绕公共交通站点集聚的高密度、可步行建筑。"
                },
                {
                  "en": "Infill development — building on vacant or underused land within the city rather than on the fringe.",
                  "zh": "填充式开发——在城市内部的空置或利用不足的土地上建设，而非在边缘建设。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Transportation is where sustainability succeeds or fails. Car-dependent sprawl generates congestion, air pollution, and greenhouse gases; investment in public transit, cycling, and walkable density reduces all three. Greenbelts and urban growth boundaries force cities to grow up rather than out, protecting farmland and habitat. But these reforms carry trade-offs: constraining land supply can raise housing prices, so sustainability policy must be paired with affordable-housing measures to avoid pushing out the very residents it aims to serve.",
              "zh": "交通是可持续性成败的关键。依赖汽车的蔓延产生拥堵、空气污染和温室气体；对公共交通、骑行和可步行密度的投资能同时减少三者。绿带和城市增长边界迫使城市向上而非向外发展，保护农田和栖息地。但这些改革也有权衡：限制土地供给可能抬高房价，因此可持续性政策必须与可负担住房措施配套，以免把它本欲服务的居民挤走。"
            },
            {
              "type": "h2",
              "en": "Environmental and Social Problems",
              "zh": "环境与社会问题"
            },
            {
              "type": "p",
              "en": "Cities concentrate people and therefore concentrate environmental stress. The urban heat island effect makes cities several degrees warmer than surrounding countryside because pavement and buildings absorb and re-radiate heat. Dense traffic and industry degrade air and water; impervious surfaces increase flooding; and waste disposal strains land and rivers. Socially, cities magnify inequality: wealthy and poor neighborhoods sit side by side, and the burdens of pollution and poor services often fall heaviest on low-income and minority communities — a pattern studied as environmental injustice.",
              "zh": "城市集中了人口，因而也集中了环境压力。城市热岛效应（urban heat island effect）使城市比周围乡村高出数度，因为路面和建筑吸收并再辐射热量。密集的交通和工业污染空气和水；不透水地面加剧洪涝；废物处理给土地和河流带来压力。在社会方面，城市放大了不平等：富裕和贫困社区比邻而居，而污染和服务不足的负担往往最沉重地落在低收入和少数族裔社区——这一格局被作为环境不公（environmental injustice）来研究。"
            },
            {
              "type": "note",
              "en": "AP tip — Every sustainability solution has a trade-off; name it. Greenbelts protect nature but can raise housing costs. Gentrification revives neighborhoods but displaces residents. Smart growth cuts driving but requires density many suburbanites resist. Top AP responses evaluate BOTH the benefit and the cost of a policy rather than praising it uncritically.",
              "zh": "AP 提示——每个可持续性方案都有权衡，要指出来。绿带保护自然，但可能抬高住房成本。绅士化复兴社区，却使居民迁离。精明增长减少驾车，却需要许多郊区居民抵触的高密度。优秀的 AP 答案会\"同时\"评估一项政策的收益与代价，而非不加批判地赞美它。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Analyzing Gentrification",
                "zh": "例题 1：分析绅士化"
              },
              "problem": {
                "en": "A formerly poor inner-city district sees its old warehouses converted to lofts, new cafés open, and rents double in five years. Identify the process and evaluate one benefit and one cost.",
                "zh": "一个曾经贫困的内城区，其旧仓库被改造成阁楼公寓，新咖啡馆开张，租金在五年内翻倍。指出这一过程，并评估其一项收益和一项代价。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The process is gentrification: reinvestment by higher-income newcomers that renovates a disinvested area. Benefit — the tax base grows, services and safety often improve, and derelict buildings are restored. Cost — rising rents and property values displace longtime, often lower-income and minority residents who can no longer afford to stay, eroding the community and pushing them toward areas with fewer services. A strong answer names the process AND weighs both sides.",
                  "zh": "这一过程是绅士化：高收入新来者的再投资翻新了被撤资的地区。收益——税基增长，服务和治安常改善，废弃建筑得到修复。代价——上升的租金和房价使长期的、常为低收入和少数族裔的居民被迫迁离，他们无力留下，社区被侵蚀，并被推向服务更少的地区。优秀的答案会点明过程\"并\"权衡两面。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Comparing Two Growth Strategies",
                "zh": "例题 2：比较两种增长策略"
              },
              "problem": {
                "en": "City X responds to population growth by approving large single-family subdivisions on former farmland at its edge. City Y responds with infill apartments near transit stops and a protected greenbelt. Compare the sustainability of the two approaches.",
                "zh": "甲城应对人口增长的方式是在边缘的原农田上批准大型独栋住宅小区。乙城的方式是在公交站附近建填充式公寓并设立受保护的绿带。比较两种方式的可持续性。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "City X exemplifies sprawl: low-density fringe growth that consumes farmland, locks in car dependence, and raises the cost of extending roads, water, and sewers. City Y follows smart growth and new urbanism: infill and transit-oriented density reduce driving, emissions, and land consumption, while the greenbelt halts sprawl. City Y is far more sustainable, though it must add affordable-housing measures because constraining land can push prices up. Evaluating that trade-off earns full credit.",
                  "zh": "甲城体现了蔓延：低密度的边缘增长吞噬农田、锁定对汽车的依赖，并抬高延伸道路、供水和排污的成本。乙城遵循精明增长和新城市主义：填充式和公交导向的密度减少驾车、排放和土地消耗，绿带则遏制蔓延。乙城可持续性远高，但它必须加入可负担住房措施，因为限制土地会推高房价。评估这一权衡才能拿满分。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Banks refused to approve mortgages in a neighborhood because its residents were mostly Black, marking it hazardous on a map. This discriminatory practice is called —",
                "zh": "银行因某社区居民多为黑人而拒绝批准该社区的抵押贷款，在地图上将其标为\"危险\"。这种歧视性做法称为——"
              },
              "choices": [
                "blockbusting",
                "gentrification",
                "redlining",
                "smart growth"
              ],
              "answer": 2,
              "explanation": {
                "en": "Redlining is the denial of loans and insurance to neighborhoods deemed risky because of their racial makeup, starving them of investment. Blockbusting (A) is different: it uses fear to induce white owners to sell cheaply so agents can profit — a manipulation of turnover, not a withholding of credit.",
                "zh": "红线划分是因社区的种族构成而认定其\"高风险\"，拒绝向其提供贷款和保险，使其失去投资。逼迁牟利（A）不同：它用恐惧诱使白人业主低价抛售，供中介牟利——是操纵人口更替，而非扣留信贷。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which outcome is the most commonly cited social cost of gentrification?",
                "zh": "下列哪项是绅士化最常被提及的社会代价？"
              },
              "choices": [
                "a shrinking local tax base",
                "displacement of longtime lower-income residents",
                "rising crime and abandoned buildings",
                "a decline in nearby property values"
              ],
              "answer": 1,
              "explanation": {
                "en": "Gentrification raises rents and property values, displacing longtime, often lower-income and minority residents who can no longer afford to stay. Choices A, C, and D are the opposite of what gentrification does — it typically grows the tax base, reduces abandonment, and raises property values.",
                "zh": "绅士化抬高租金和房产价值，使无力留下的长期、常为低收入和少数族裔的居民被迫迁离。选项 A、C、D 与绅士化的作用相反——它通常扩大税基、减少空置并抬高房产价值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ring of protected open land maintained around a city specifically to stop outward sprawl is known as a —",
                "zh": "为阻止向外蔓延而在城市周围维护的受保护开放土地环被称为——"
              },
              "choices": [
                "greenbelt",
                "edge city",
                "commercial spine",
                "urban heat island"
              ],
              "answer": 0,
              "explanation": {
                "en": "A greenbelt is protected open land encircling a city to limit sprawl and preserve farmland and habitat, as around London. An edge city (B) is the opposite — a node of suburban development; the urban heat island (D) is a temperature effect, not a land-use policy.",
                "zh": "绿带是环绕城市、用以限制蔓延并保护农田和栖息地的受保护开放土地，如伦敦周围。边缘城市（B）恰恰相反——是郊区开发的节点；城市热岛（D）是一种温度效应，而非土地利用政策。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of features best characterizes new urbanism?",
                "zh": "下列哪一组特征最能刻画新城市主义？"
              },
              "choices": [
                "large lots and car-only access",
                "walkable, mixed-use neighborhoods with varied housing",
                "single-use zoning separating homes from shops",
                "low-density subdivisions on the urban fringe"
              ],
              "answer": 1,
              "explanation": {
                "en": "New urbanism designs walkable, mixed-use neighborhoods with diverse housing and street grids to rebuild community. Choices A, C, and D describe the car-dependent, single-use sprawl that new urbanism was created to reverse.",
                "zh": "新城市主义设计可步行、混合用途、住房多样并有街道网格的社区以重建社区感。选项 A、C、D 描述的是依赖汽车、单一用途的蔓延，而新城市主义正是为扭转它而生。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Cities are typically several degrees warmer than surrounding rural areas because pavement and buildings absorb and re-radiate heat. This phenomenon is the —",
                "zh": "由于路面和建筑吸收并再辐射热量，城市通常比周围乡村高出数度。这一现象是——"
              },
              "choices": [
                "greenbelt effect",
                "urban heat island effect",
                "distance-decay effect",
                "bid-rent effect"
              ],
              "answer": 1,
              "explanation": {
                "en": "The urban heat island effect results from dark impervious surfaces and buildings storing and re-emitting heat, plus reduced vegetation. Distance decay (C) describes declining interaction with distance, and bid-rent (D) concerns land value — neither is a temperature phenomenon.",
                "zh": "城市热岛效应源于深色不透水地面和建筑储存并再释放热量，以及植被减少。距离衰减（C）描述相互作用随距离下降，竞租（D）关乎地价——二者都不是温度现象。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What umbrella term describes planning policies that direct growth inward and upward — raising density, mixing uses, and preserving open space — instead of outward sprawl? Answer with the two-word term.",
                "zh": "哪个总括性术语指引导增长向内、向上——提高密度、混合用途并保护开放空间——而非向外蔓延的规划政策？请用该两词术语作答。"
              },
              "answer": "smart growth",
              "accept": [
                "smart growth",
                "smart-growth"
              ],
              "explanation": {
                "en": "Smart growth concentrates development to curb sprawl through higher density, mixed-use zoning, and transit investment. It is closely linked to new urbanism, which applies similar principles at the neighborhood-design scale.",
                "zh": "精明增长通过更高密度、混合用途分区和公交投资来集中开发以遏制蔓延。它与新城市主义密切相关，后者在社区设计尺度上应用类似原则。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term names the unregulated, untaxed sector of economic activity — such as street vending and self-built housing — that expands where formal systems fail? Answer with the two-word term.",
                "zh": "哪个术语指不受监管、不纳税的经济活动部门——如街头小贩和自建住房——在正规系统失灵处扩张？请用该两词术语作答。"
              },
              "answer": "informal economy",
              "accept": [
                "informal economy",
                "informal sector",
                "the informal economy"
              ],
              "explanation": {
                "en": "The informal economy (or informal sector) is work outside government regulation and taxation, common in rapidly urbanizing cities where formal jobs and services cannot keep pace with population growth.",
                "zh": "非正规经济（或非正规部门）是政府监管和税收之外的活动，常见于快速城市化的城市，那里正规就业和服务跟不上人口增长。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What discriminatory practice involved real-estate agents provoking panic selling by white homeowners after a minority family moved in, then reselling the homes at a profit? Answer with one word.",
                "zh": "哪种歧视性做法是房地产中介在少数族裔家庭迁入后引发白人业主恐慌抛售，再将房屋加价转售牟利？请用一个词作答。"
              },
              "answer": "blockbusting",
              "accept": [
                "blockbusting",
                "block-busting",
                "block busting"
              ],
              "explanation": {
                "en": "Blockbusting manipulated racial fear to flip neighborhoods for profit, driving rapid turnover and segregation. It differs from redlining, which withheld loans from minority neighborhoods rather than engineering their turnover.",
                "zh": "逼迁牟利利用种族恐惧来\"翻转\"社区牟利，造成快速的人口更替和隔离。它不同于红线划分——后者是扣留对少数族裔社区的贷款，而非制造其人口更替。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-7-industrial-and-economic-development",
      "title": "Unit 7: Industrial and Economic Development Patterns and Processes",
      "titleZh": "第七单元：工业与经济发展的格局与过程",
      "lessons": [
        {
          "id": "industrialization-and-location-theory",
          "title": "Industrialization and Location Theory",
          "titleZh": "工业化与区位理论",
          "content": [
            {
              "type": "h2",
              "en": "The Industrial Revolution and Its Diffusion",
              "zh": "工业革命及其扩散"
            },
            {
              "type": "p",
              "en": "The Industrial Revolution began in Great Britain in the late 1700s and marked a shift from making goods by hand in homes and small shops to manufacturing them with machines in factories. Several conditions came together in Britain: a supply of coal and iron ore for energy and machinery, capital from overseas trade, a large labor force freed from farms by an earlier agricultural revolution, and access to colonial markets and raw materials such as cotton. The steam engine, powered by coal, freed factories from having to locate beside fast-moving rivers and allowed industry to concentrate near coalfields and ports.",
              "zh": "工业革命于 18 世纪末在大不列颠开始，标志着从在家庭和小作坊中手工制造商品，转向在工厂里用机器进行生产。英国当时汇集了若干条件：作为能源和机械原料的煤炭与铁矿、来自海外贸易的资本、因早期农业革命而从农田中解放出来的大量劳动力，以及通往殖民地市场和棉花等原材料的通道。以煤炭为动力的蒸汽机使工厂不再必须选址于水流湍急的河边，从而使工业能够集中在煤田和港口附近。"
            },
            {
              "type": "p",
              "en": "From Britain, industrialization diffused outward through relocation and hierarchical diffusion. It spread first across the English Channel to Belgium, France, and Germany, then to the northeastern United States, and later to Russia and Japan. This uneven spread is central to AP Human Geography: the places that industrialized early gained a lasting economic head start, while regions that industrialized late or served mainly as suppliers of raw materials often remained economically dependent. Industrialization reshaped population geography too, driving rapid urbanization as workers migrated from countryside to factory towns.",
              "zh": "工业化从英国向外通过迁移扩散和等级扩散传播。它先越过英吉利海峡传到比利时、法国和德国，再传到美国东北部，随后传到俄国和日本。这种不均衡的扩散是 AP 人文地理的核心：较早工业化的地方获得了持久的经济领先优势，而工业化较晚、或主要充当原材料供应地的地区则往往在经济上处于依附地位。工业化也重塑了人口地理，随着工人从乡村迁往工厂城镇而推动了快速的城市化。"
            },
            {
              "type": "h2",
              "en": "The Sectors of the Economy",
              "zh": "经济的各个部门"
            },
            {
              "type": "p",
              "en": "Geographers divide economic activity into sectors that describe how far a job is from the physical land and raw materials. As countries develop, the share of workers shifts from the primary sector toward the tertiary and beyond. Tracking this shift is one of the clearest ways to measure a country's level of development.",
              "zh": "地理学家把经济活动划分为若干部门，用以描述一份工作距离土地和原材料有多远。随着国家的发展，劳动力的比重会从第一产业向第三产业乃至更高层次转移。追踪这种转移是衡量一个国家发展水平最清晰的方法之一。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Primary sector — extracting raw materials directly from the earth: farming, fishing, mining, forestry. Dominant in less developed economies.",
                  "zh": "第一产业——直接从大地中获取原材料：农业、渔业、采矿、林业。在欠发达经济体中占主导地位。"
                },
                {
                  "en": "Secondary sector — manufacturing: turning raw materials into finished goods, such as making steel or assembling cars.",
                  "zh": "第二产业——制造业：把原材料加工成成品，例如炼钢或组装汽车。"
                },
                {
                  "en": "Tertiary sector — services: retail, transport, banking, health care, education — jobs that provide services rather than goods.",
                  "zh": "第三产业——服务业：零售、运输、银行、医疗、教育——提供服务而非产品的工作。"
                },
                {
                  "en": "Quaternary sector — knowledge and information: research, data processing, software, finance analysis, management of information.",
                  "zh": "第四产业——知识与信息：研究、数据处理、软件、金融分析、信息管理。"
                },
                {
                  "en": "Quinary sector — the highest-level decision-making: top executives, government leaders, university researchers, and scientists who shape policy and strategy.",
                  "zh": "第五产业——最高层次的决策：高层管理者、政府领导人、大学研究人员以及塑造政策与战略的科学家。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP Tip: A rising quaternary and quinary sector signals a postindustrial economy. When you see a country where most workers are in services and few in agriculture, do not just say it is \"rich\" — connect it to the process: mechanization cut primary-sector jobs, and manufacturing was outsourced abroad, so high-value information and decision-making work remains. Reason from process to pattern.",
              "zh": "AP 提示：第四、第五产业的上升标志着后工业经济。当你看到一个国家大多数工人从事服务业、极少人从事农业时，不要只说它\"富裕\"——要把它与过程联系起来：机械化削减了第一产业的岗位，制造业被外包到海外，于是留下的是高附加值的信息与决策工作。要从过程推导到格局。"
            },
            {
              "type": "h2",
              "en": "Weber's Least-Cost Theory",
              "zh": "韦伯的最低成本理论"
            },
            {
              "type": "p",
              "en": "In 1909 Alfred Weber developed the least-cost theory (also called industrial location theory) to explain where manufacturers choose to locate a factory. Weber assumed that a firm will pick the site that minimizes total costs, and he identified three cost factors. The most important is transportation: a factory locates to minimize the combined cost of shipping raw materials in and finished products out.",
              "zh": "1909 年，阿尔弗雷德·韦伯（Alfred Weber）提出了最低成本理论（也称工业区位理论），用以解释制造商如何选择建厂地点。韦伯假设企业会选择使总成本最小化的地点，并归纳出三个成本因素。其中最重要的是运输：工厂会选址以使运入原材料和运出成品的合计成本最小化。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Transportation costs — the central factor. Firms weigh the cost of moving inputs versus moving outputs.",
                  "zh": "运输成本——核心因素。企业权衡运入原料与运出产品的成本。"
                },
                {
                  "en": "Labor costs — a factory may locate away from the transport-optimal site if cheaper labor elsewhere saves more than the added transport cost.",
                  "zh": "劳动力成本——如果别处更廉价的劳动力所节省的费用超过增加的运输成本，工厂就可能偏离运输最优地点选址。"
                },
                {
                  "en": "Agglomeration — the cost savings firms gain by clustering near related businesses, shared suppliers, infrastructure, and a skilled labor pool. Too much clustering, however, can raise land and wage costs (deglomeration).",
                  "zh": "集聚——企业通过聚集在相关企业、共享供应商、基础设施和熟练劳动力池附近所获得的成本节约。但过度聚集会抬高地价和工资（分散/去集聚）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Weber distinguished two kinds of industries by how weight changes during production. A bulk-reducing (weight-losing) industry uses raw materials that are much heavier than the finished product — copper smelting or steelmaking — so it locates near the raw material to avoid shipping heavy inputs far. A bulk-gaining (weight-gaining) industry makes a product heavier or bulkier than its inputs — bottling soft drinks or assembling cars and furniture — so it locates near the market to avoid shipping the heavy finished good far.",
              "zh": "韦伯按生产过程中重量的变化区分了两类工业。失重工业（原料减重型）所用原材料远重于成品——如炼铜或炼钢——因此选址靠近原料地，以避免长途运输沉重的原料。增重工业（成品增重型）所制成品比投入原料更重或更占体积——如瓶装软饮、组装汽车和家具——因此选址靠近市场，以避免长途运输沉重的成品。"
            },
            {
              "type": "p",
              "en": "A break-of-bulk point is a location where goods are transferred from one mode of transport to another — for example, a port where cargo moves from ship to truck or rail. Because loading and unloading are expensive, factories often cluster at these points to process goods before or after transfer, minimizing the number of times heavy freight must be handled.",
              "zh": "转运点（break-of-bulk point）是货物从一种运输方式换到另一种运输方式的地点——例如货物从船只转到卡车或铁路的港口。由于装卸费用高昂，工厂往往聚集在这些地点，在转运前后就地加工货物，以尽量减少沉重货物被搬运的次数。"
            },
            {
              "type": "h2",
              "en": "The Geography of Manufacturing: Fordism to Post-Fordism",
              "zh": "制造业地理：从福特主义到后福特主义"
            },
            {
              "type": "p",
              "en": "For much of the twentieth century, manufacturing followed Fordism — mass production of standardized goods on assembly lines using semi-skilled labor, named for Henry Ford's auto plants. Fordism concentrated large workforces in single large factories. Since the 1970s, many firms have shifted to post-Fordism, also called flexible production: smaller batches, more specialized products, and production spread across many sites and subcontractors that can be reorganized quickly as demand changes.",
              "zh": "在 20 世纪的大部分时间里，制造业遵循福特主义（Fordism）——在流水线上用半熟练劳动力大规模生产标准化商品，得名于亨利·福特（Henry Ford）的汽车厂。福特主义把庞大的劳动力集中在单个大型工厂中。自 1970 年代以来，许多企业转向后福特主义（post-Fordism），也称柔性生产：批量更小、产品更专门化，生产分散在许多可随需求变化迅速重组的厂址和分包商之间。"
            },
            {
              "type": "p",
              "en": "Flexible production relies on just-in-time (JIT) delivery, in which parts arrive from suppliers exactly when needed rather than being stockpiled. JIT cuts warehouse costs but makes supply chains vulnerable to disruption. To lower costs further, firms practice outsourcing — contracting work to outside companies — and offshore outsourcing, moving production to lower-wage countries. Governments encourage this by creating special economic zones (SEZs), export processing zones, and free-trade zones that offer tax breaks and looser regulation to attract factories. Countries that industrialized rapidly this way — such as South Korea, Taiwan, Singapore, Mexico, and Brazil — are called newly industrialized countries (NICs).",
              "zh": "柔性生产依赖准时制（JIT）交付，即零部件在正好需要时才由供应商送到，而不是囤积。JIT 降低了仓储成本，却使供应链在中断面前更加脆弱。为进一步降低成本，企业采用外包（outsourcing）——把工作发包给外部公司——以及离岸外包，把生产转移到工资更低的国家。政府通过设立经济特区（SEZ）、出口加工区和自由贸易区来鼓励这种做法，这些区提供税收优惠和更宽松的监管以吸引工厂。以这种方式迅速工业化的国家——如韩国、台湾、新加坡、墨西哥和巴西——被称为新兴工业化国家（NICs）。"
            },
            {
              "type": "note",
              "en": "AP Tip: Weber's theory (1909) assumes transport cost is king, but modern shifts complicate it. Containerization and cheap shipping have made transport a smaller share of cost, so labor and agglomeration now dominate many location decisions — that is why so much manufacturing moved to low-wage Asia. On the exam, use Weber as a baseline, then explain how globalization and technology bend the model.",
              "zh": "AP 提示：韦伯的理论（1909 年）假定运输成本至上，但现代变化使之复杂化。集装箱化和廉价航运使运输在成本中所占比重下降，因此劳动力和集聚如今主导着许多区位决策——这正是大量制造业转移到低工资亚洲的原因。在考试中，把韦伯作为基准，再解释全球化和技术如何使模型发生偏移。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying Weber to a Bottling Plant",
                "zh": "例题 1：将韦伯理论应用于瓶装厂"
              },
              "problem": {
                "en": "A soft-drink company must decide where to build a bottling plant. Using Weber's least-cost theory, should it locate near the source of its main inputs (water and sugar) or near its consumers? Explain.",
                "zh": "一家软饮公司必须决定在哪里建瓶装厂。运用韦伯的最低成本理论，它应把厂建在主要原料（水和糖）产地附近，还是消费者附近？请解释。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Identify whether the industry is bulk-reducing or bulk-gaining. Bottling adds water and packaging, so the finished bottles are far heavier and bulkier than the concentrate and sugar shipped in — this is a bulk-gaining industry. Weber predicts a bulk-gaining industry locates near the market to minimize the cost of transporting the heavy finished product. So the plant should be built close to consumers, and indeed bottling plants are spread out near population centers rather than clustered at sugar farms.",
                  "zh": "先判断该工业是失重型还是增重型。瓶装过程加入了水和包装，因此成品瓶远比运入的浓缩液和糖更重、更占体积——这是增重工业。韦伯预测增重工业会选址靠近市场，以使运输沉重成品的成本最小化。因此该厂应建在消费者附近；实际上瓶装厂正是分散在人口中心附近，而不是集中在产糖的农场旁。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Why Firms Cluster",
                "zh": "例题 2：企业为何聚集"
              },
              "problem": {
                "en": "Silicon Valley hosts thousands of technology firms packed into one region, even though land and wages there are extremely expensive. Which of Weber's factors best explains this, and why do firms tolerate the high costs?",
                "zh": "硅谷聚集了数千家科技企业于一个地区，尽管那里的地价和工资极其昂贵。韦伯的哪个因素最能解释这一现象，企业又为何能容忍如此高的成本？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The key factor is agglomeration. Firms cluster to share a specialized labor pool of engineers, tap venture-capital networks, learn quickly from nearby competitors (knowledge spillover), and use shared suppliers and infrastructure. These benefits can outweigh high land and labor costs. The example also shows agglomeration's limit: at some point costs rise so high (deglomeration) that firms move routine work elsewhere — which is why manufacturing left the Valley while design and R&D stayed.",
                  "zh": "关键因素是集聚。企业聚集以共享工程师这一专门劳动力池、接入风险资本网络、迅速从附近竞争对手处学习（知识溢出），并使用共享的供应商和基础设施。这些好处可以抵消高昂的地价和工资。这个例子也显示了集聚的极限：到某个程度成本高到（去集聚）使企业把常规工作迁往别处——这正是制造业离开硅谷、而设计与研发留下的原因。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A steel mill, which uses iron ore and coal that are much heavier than the steel it produces, is best described as which type of industry?",
                "zh": "一家炼钢厂使用的铁矿石和煤炭远重于它所生产的钢材，最恰当地属于哪类工业？"
              },
              "choices": [
                "Bulk-gaining, locating near the market",
                "Bulk-reducing, locating near the raw materials",
                "Footloose, locating anywhere",
                "Bulk-gaining, locating near a port"
              ],
              "answer": 1,
              "explanation": {
                "en": "Because the raw materials weigh far more than the finished steel, this is a bulk-reducing (weight-losing) industry, which Weber predicts locates near the raw materials to avoid shipping heavy inputs. Choosing \"bulk-gaining near the market\" reverses the weight relationship — that applies to industries like bottling where the product gets heavier.",
                "zh": "由于原材料的重量远超成品钢，这是失重（减重）工业，韦伯预测它会选址靠近原料地，以避免运输沉重的投入品。选\"增重、靠近市场\"颠倒了重量关系——那适用于瓶装等成品变重的工业。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A university researcher who advises the national government on science policy works primarily in which economic sector?",
                "zh": "一位就科学政策向国家政府提供建议的大学研究人员，主要从事哪个经济部门的工作？"
              },
              "choices": [
                "Secondary",
                "Tertiary",
                "Quaternary",
                "Quinary"
              ],
              "answer": 3,
              "explanation": {
                "en": "The quinary sector covers the highest level of decision-making and policy-shaping — top executives, government leaders, and senior researchers. The quaternary sector (a tempting choice) covers knowledge and information work like data processing and R&D, but the emphasis here on shaping national policy at the highest level marks it as quinary.",
                "zh": "第五产业涵盖最高层次的决策与政策塑造——高层管理者、政府领导人和资深研究人员。第四产业（一个诱人的选项）涵盖数据处理、研发等知识与信息工作，但此处强调在最高层次塑造国家政策，故应归为第五产业。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A port where cargo is transferred from ocean ships onto trucks and trains, often attracting factories nearby, is called a:",
                "zh": "货物从远洋船只转到卡车和火车、并常吸引工厂聚集于附近的港口，被称为："
              },
              "choices": [
                "Special economic zone",
                "Agglomeration center",
                "Break-of-bulk point",
                "Growth pole"
              ],
              "answer": 2,
              "explanation": {
                "en": "A break-of-bulk point is where goods change transport mode; because loading and unloading are costly, firms locate there to process goods and avoid extra handling. A special economic zone is a government-designated area with tax incentives — a different concept, not defined by a change in transport mode.",
                "zh": "转运点是货物更换运输方式的地点；由于装卸费用高，企业选址于此加工货物以避免额外搬运。经济特区是政府划定、提供税收优惠的区域——是不同的概念，并非由运输方式的改变来定义。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which set of conditions best explains why the Industrial Revolution began in Great Britain rather than elsewhere?",
                "zh": "哪一组条件最能解释工业革命为何始于大不列颠而非他处？"
              },
              "choices": [
                "Abundant coal and iron, capital from trade, available labor, and colonial markets",
                "A tropical climate, large rivers, and dense rainforest resources",
                "Government ownership of all factories and banned foreign trade",
                "A shrinking population and a return to subsistence farming"
              ],
              "answer": 0,
              "explanation": {
                "en": "Britain combined coal and iron for energy and machinery, capital accumulated from overseas trade, a labor force released from farms, and access to colonial markets and raw materials. The other options describe conditions that would hinder, not spark, industrialization — for example, banning trade would cut off the markets and capital that fueled British industry.",
                "zh": "英国汇集了作为能源与机械原料的煤铁、由海外贸易积累的资本、从农田中释放出的劳动力，以及通往殖民地市场和原材料的通道。其他选项描述的是会阻碍而非引发工业化的条件——例如禁止贸易会切断为英国工业提供动力的市场和资本。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A manufacturer arranges for parts to arrive from suppliers exactly when they are needed on the assembly line, keeping almost no inventory. This practice is called:",
                "zh": "一家制造商安排零部件在流水线正好需要时才由供应商送到，几乎不保留库存。这种做法称为："
              },
              "choices": [
                "Fordism",
                "Just-in-time delivery",
                "Agglomeration",
                "Import substitution"
              ],
              "answer": 1,
              "explanation": {
                "en": "Just-in-time (JIT) delivery is a hallmark of post-Fordist flexible production; it cuts warehousing costs but leaves supply chains vulnerable to disruption. Fordism, by contrast, was the earlier system of mass-producing standardized goods and stockpiling parts, so it is the opposite approach.",
                "zh": "准时制（JIT）交付是后福特主义柔性生产的标志；它削减仓储成本，却使供应链在中断面前脆弱。相反，福特主义是较早的、大规模生产标准化商品并囤积零件的体系，因此是相反的做法。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name of the 1909 model, developed by Alfred Weber, that explains factory location by minimizing transport, labor, and agglomeration costs? Answer with the model's common name (two-word or three-word term).",
                "zh": "阿尔弗雷德·韦伯于 1909 年提出、通过使运输、劳动力和集聚成本最小化来解释工厂选址的模型叫什么？请用该模型的常用名称作答（二至三词术语）。"
              },
              "answer": "least-cost theory",
              "accept": [
                "least-cost theory",
                "least cost theory",
                "least-cost location theory",
                "weber's least-cost theory",
                "industrial location theory"
              ],
              "explanation": {
                "en": "Weber's least-cost theory (also called industrial location theory) holds that manufacturers choose the site minimizing total cost, weighing transportation, labor, and agglomeration. Transportation is the primary factor.",
                "zh": "韦伯的最低成本理论（也称工业区位理论）认为制造商会选择使总成本最小化的地点，权衡运输、劳动力和集聚。运输是首要因素。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes the cost savings a firm gains by locating near related businesses, shared suppliers, infrastructure, and a skilled labor pool? Answer with the single term.",
                "zh": "哪个术语描述企业因选址于相关企业、共享供应商、基础设施和熟练劳动力池附近而获得的成本节约？请用单个术语作答。"
              },
              "answer": "agglomeration",
              "accept": [
                "agglomeration",
                "agglomeration economies"
              ],
              "explanation": {
                "en": "Agglomeration is the clustering of firms to share suppliers, infrastructure, labor, and knowledge. When clustering becomes too costly and firms disperse, the process is called deglomeration.",
                "zh": "集聚是指企业聚集以共享供应商、基础设施、劳动力和知识。当聚集变得过于昂贵、企业分散时，这一过程称为去集聚（deglomeration）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What four-word term (often abbreviated NIC) describes countries such as South Korea, Taiwan, and Mexico that industrialized rapidly in the late twentieth century? Answer with the full term.",
                "zh": "哪个术语（常缩写为 NIC）用来描述韩国、台湾、墨西哥等在 20 世纪后期迅速工业化的国家？请用完整术语作答。"
              },
              "answer": "newly industrialized country",
              "accept": [
                "newly industrialized country",
                "newly industrialized countries",
                "newly industrializing country",
                "newly industrializing countries",
                "nic"
              ],
              "explanation": {
                "en": "Newly industrialized countries (NICs) moved rapidly from agrarian or raw-material economies into manufacturing, often by attracting foreign factories with special economic zones and low-cost labor.",
                "zh": "新兴工业化国家（NICs）迅速从农业或原材料经济转向制造业，常通过经济特区和低成本劳动力吸引外国工厂。"
              }
            }
          ]
        },
        {
          "id": "measures-of-development",
          "title": "Measures of Economic Development",
          "titleZh": "经济发展的衡量指标",
          "content": [
            {
              "type": "h2",
              "en": "What Does \"Development\" Mean?",
              "zh": "\"发展\"意味着什么？"
            },
            {
              "type": "p",
              "en": "In geography, economic development refers to the process of improving the material well-being and quality of life of a population. It is more than being \"rich\": it includes health, education, and the range of economic activities a society can support. Geographers compare countries by dividing them into more developed countries (MDCs) and less developed countries (LDCs), or into the wealthier Global North and the poorer Global South. Because \"development\" has many dimensions, no single number captures it perfectly — so geographers use several indicators, each with strengths and blind spots.",
              "zh": "在地理学中，经济发展指的是改善一国人口物质福祉和生活质量的过程。它不只是\"富有\"：还包括健康、教育以及一个社会能够支撑的经济活动范围。地理学家把国家分为较发达国家（MDCs）和欠发达国家（LDCs），或分为较富裕的全球北方和较贫穷的全球南方来进行比较。由于\"发展\"有许多维度，没有任何单一数字能完美刻画它——因此地理学家使用多个指标，每个都有其长处和盲点。"
            },
            {
              "type": "h2",
              "en": "Economic Indicators: GDP, GNP, and GNI",
              "zh": "经济指标：GDP、GNP 与 GNI"
            },
            {
              "type": "p",
              "en": "The most common economic measures count the value of what an economy produces. They sound similar but differ in exactly what they include, so knowing the distinction matters on the exam.",
              "zh": "最常见的经济指标计算一个经济体所生产之物的价值。它们听起来相似，但在究竟包含什么上有所不同，因此了解其区别在考试中很重要。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Gross Domestic Product (GDP) — the total value of all goods and services produced within a country's borders in a year, regardless of who owns the firms.",
                  "zh": "国内生产总值（GDP）——一年内在一国境内生产的所有商品和服务的总价值，无论企业归谁所有。"
                },
                {
                  "en": "Gross National Product (GNP) — the value produced by a country's residents and firms, including income earned abroad, but excluding output by foreign-owned firms inside the country.",
                  "zh": "国民生产总值（GNP）——一国居民和企业所生产的价值，包括在海外赚取的收入，但不包括外资企业在国内的产出。"
                },
                {
                  "en": "Gross National Income (GNI) — GNP plus income received from abroad such as remittances and foreign investment returns; increasingly the preferred economic measure.",
                  "zh": "国民总收入（GNI）——GNP 加上来自海外的收入，如侨汇和外国投资回报；越来越成为首选的经济指标。"
                }
              ]
            },
            {
              "type": "p",
              "en": "To compare countries fairly, these totals are divided by population to give a per capita figure, and are often adjusted for purchasing power parity (PPP), which accounts for differences in the cost of living. A GDP per capita of $2,000 stretches much further in a country where food and housing are cheap, so PPP gives a more accurate picture of real living standards than raw exchange-rate figures.",
              "zh": "为了公平比较各国，这些总量会除以人口，得出人均数字，并常按购买力平价（PPP）进行调整，以考虑生活成本的差异。人均 GDP 为 2000 美元在食物和住房便宜的国家能买到多得多的东西，因此 PPP 比按汇率折算的原始数字更能准确反映真实生活水平。"
            },
            {
              "type": "note",
              "en": "AP Tip: GDP per capita is an average, and averages hide inequality. Two countries can share the same GDP per capita while one has a broad middle class and the other has a tiny wealthy elite alongside widespread poverty. On free-response questions, note that economic totals say nothing about how income is distributed — that is exactly why composite indices like the HDI exist.",
              "zh": "AP 提示：人均 GDP 是平均数，而平均数会掩盖不平等。两个国家可以有相同的人均 GDP，但其中一个拥有庞大的中产阶级，另一个则是极少数富裕精英与普遍的贫困并存。在自由作答题中，要指出经济总量完全没有反映收入如何分配——这正是 HDI 等综合指数存在的原因。"
            },
            {
              "type": "h2",
              "en": "The Human Development Index (HDI)",
              "zh": "人类发展指数（HDI）"
            },
            {
              "type": "p",
              "en": "Because money alone is a narrow measure, the United Nations created the Human Development Index (HDI), a composite index between 0 and 1 that combines economic and social measures. A higher HDI indicates a higher level of development. The HDI blends three dimensions.",
              "zh": "由于金钱本身是一个狭窄的指标，联合国创建了人类发展指数（HDI），这是一个介于 0 和 1 之间的综合指数，综合了经济和社会指标。HDI 越高表示发展水平越高。HDI 融合了三个维度。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A long and healthy life — measured by life expectancy at birth.",
                  "zh": "长寿而健康的生活——以出生时预期寿命来衡量。"
                },
                {
                  "en": "Access to knowledge — measured by mean years of schooling (for adults) and expected years of schooling (for children).",
                  "zh": "获取知识——以（成人的）平均受教育年限和（儿童的）预期受教育年限来衡量。"
                },
                {
                  "en": "A decent standard of living — measured by GNI per capita adjusted for purchasing power parity.",
                  "zh": "体面的生活水平——以按购买力平价调整的人均 GNI 来衡量。"
                }
              ]
            },
            {
              "type": "p",
              "en": "By combining health, education, and income, the HDI captures development more fully than any single economic number. A country could have moderate income but, through strong public health and schooling, achieve a high HDI — or the reverse, where oil wealth boosts income while health and education lag. This is why the HDI often reorders how countries rank compared with GDP per capita alone.",
              "zh": "通过结合健康、教育和收入，HDI 比任何单一经济数字都更全面地刻画发展。一个国家可能收入中等，但凭借良好的公共卫生和教育实现较高的 HDI——或者相反，石油财富抬高了收入而健康和教育却落后。正是因此，与仅看人均 GDP 相比，HDI 常常会改变各国的排名次序。"
            },
            {
              "type": "h2",
              "en": "Measuring Gender Inequality: GII and GDI",
              "zh": "衡量性别不平等：GII 与 GDI"
            },
            {
              "type": "p",
              "en": "Development is uneven not only between countries but between men and women within a country. The UN publishes two gender measures. The Gender Inequality Index (GII) measures the loss in human development due to inequality between men and women; a higher GII means greater inequality. The GII combines three dimensions: reproductive health (maternal mortality and adolescent birth rates), empowerment (share of parliamentary seats held by women and educational attainment), and labor-market participation.",
              "zh": "发展的不均衡不仅存在于国家之间，也存在于一国内部的男女之间。联合国发布两种性别指标。性别不平等指数（GII）衡量因男女不平等而导致的人类发展损失；GII 越高表示不平等越严重。GII 结合三个维度：生殖健康（孕产妇死亡率和青少年生育率）、赋权（女性所占议会席位比例和受教育程度）以及劳动力市场参与。"
            },
            {
              "type": "p",
              "en": "The related Gender Development Index (GDI) compares the HDI calculated separately for women and for men, showing gender gaps in health, education, and income. Together these indices reveal that raising a country's overall wealth does not automatically close gender gaps — empowering women often requires targeted policy in schooling, health, and political representation.",
              "zh": "与之相关的性别发展指数（GDI）比较分别为女性和男性计算的 HDI，显示健康、教育和收入方面的性别差距。这些指数共同揭示：提高一个国家的整体财富并不会自动缩小性别差距——赋权女性往往需要在教育、健康和政治代表性方面采取有针对性的政策。"
            },
            {
              "type": "h2",
              "en": "Formal vs. Informal Economy and Sectoral Structure",
              "zh": "正规与非正规经济及部门结构"
            },
            {
              "type": "p",
              "en": "Official statistics like GDP mostly count the formal economy — legal, registered, taxed activity. But in many less developed countries a huge share of work happens in the informal economy (informal sector): unregistered, untaxed activity such as street vending, day labor, or home-based craft work. Because it is not recorded, the informal sector makes official GDP understate true economic activity and complicates comparisons between countries.",
              "zh": "像 GDP 这样的官方统计主要计入正规经济——合法、注册、纳税的活动。但在许多欠发达国家，很大一部分工作发生在非正规经济（非正规部门）：如街头摆摊、打零工或家庭手工业等未注册、未纳税的活动。由于未被记录，非正规部门使官方 GDP 低估了真实经济活动，并使国家间的比较变得复杂。"
            },
            {
              "type": "p",
              "en": "The sectoral structure of an economy — the share of workers in the primary, secondary, and tertiary sectors — is itself a development indicator. Less developed countries have most workers in the primary sector (agriculture). Industrializing countries shift workers into the secondary sector. The most developed, postindustrial countries have most workers in the tertiary, quaternary, and quinary sectors. Watching workers move up the sectors traces a country's development path.",
              "zh": "经济的部门结构——第一、第二、第三产业中工人的比重——本身就是一个发展指标。欠发达国家大多数工人从事第一产业（农业）。正在工业化的国家把工人转向第二产业。最发达的后工业国家大多数工人从事第三、第四、第五产业。观察工人在各产业间向上移动可勾勒出一个国家的发展路径。"
            },
            {
              "type": "note",
              "en": "AP Tip: When asked to critique a development indicator, name a specific limitation. GDP ignores inequality, informal work, environmental damage, and unpaid household labor (often done by women). The HDI improves on GDP by adding health and education but still misses inequality and sustainability. Strong answers do not just define an index — they explain what it fails to capture.",
              "zh": "AP 提示：当被要求评判一个发展指标时，要指出具体的局限。GDP 忽略了不平等、非正规工作、环境破坏以及无偿的家务劳动（常由女性承担）。HDI 通过加入健康和教育改进了 GDP，但仍然遗漏了不平等和可持续性。优秀的答案不只是定义一个指数——而是解释它未能刻画什么。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Two Countries, Same GDP",
                "zh": "例题 1：两个国家，相同的 GDP"
              },
              "problem": {
                "en": "Country A and Country B have identical GDP per capita. Country A has a life expectancy of 80 and near-universal schooling; Country B has a life expectancy of 60 and low literacy. Which will rank higher on the HDI, and what does this reveal about GDP as a measure?",
                "zh": "A 国和 B 国的人均 GDP 完全相同。A 国的预期寿命为 80 岁、几乎普及教育；B 国的预期寿命为 60 岁、识字率低。哪个国家在 HDI 上排名更高，这揭示了 GDP 作为指标的什么问题？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Country A will rank higher on the HDI. The HDI combines income with life expectancy and education, so A's advantages in health and schooling raise its score even though income is equal. This reveals that GDP per capita captures only the economic dimension of development. Country B might be pouring wealth into a narrow sector without investing in public health and schools, so a purely economic measure would misleadingly call the two countries equally \"developed.\"",
                  "zh": "A 国在 HDI 上排名更高。HDI 把收入与预期寿命和教育结合起来，因此尽管收入相等，A 国在健康和教育上的优势仍会提高其得分。这揭示出人均 GDP 只刻画了发展的经济维度。B 国可能把财富投入某个狭窄部门而不投资公共卫生和学校，因此纯经济指标会误导地把两国称为同样\"发达\"。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading a Gender Inequality Index",
                "zh": "例题 2：解读性别不平等指数"
              },
              "problem": {
                "en": "A country has a high GNI per capita but also a high GII. What does this combination tell you, and what policies might lower the GII?",
                "zh": "某国人均 GNI 很高，但 GII 也很高。这一组合说明了什么，哪些政策可能降低 GII？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A high GII means large inequality between men and women, so despite the country's wealth, women face poor reproductive health, little political power, or low labor-force participation. The lesson is that national wealth does not automatically translate into gender equality. Policies that lower the GII target its components directly: improving maternal health care, expanding girls' education, and increasing women's representation in parliament and the paid workforce.",
                  "zh": "GII 高意味着男女之间存在很大不平等，因此尽管国家富裕，女性仍面临糟糕的生殖健康、极少的政治权力或低劳动参与率。其教训是：国家财富不会自动转化为性别平等。降低 GII 的政策直接针对其组成部分：改善孕产妇医疗、扩大女童教育、提高女性在议会和有偿劳动力中的代表性。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which measure adds together life expectancy, years of schooling, and GNI per capita into a single number between 0 and 1?",
                "zh": "哪个指标把预期寿命、受教育年限和人均 GNI 合并为一个介于 0 和 1 之间的数字？"
              },
              "choices": [
                "Gross Domestic Product",
                "Human Development Index",
                "Gender Inequality Index",
                "Purchasing Power Parity"
              ],
              "answer": 1,
              "explanation": {
                "en": "The Human Development Index (HDI) combines a long and healthy life (life expectancy), knowledge (schooling), and standard of living (GNI per capita) into one 0-to-1 score. GDP measures only economic output, and the Gender Inequality Index measures gaps between men and women, not overall development.",
                "zh": "人类发展指数（HDI）把长寿而健康的生活（预期寿命）、知识（教育）和生活水平（人均 GNI）合并为一个 0 至 1 的分数。GDP 只衡量经济产出，而性别不平等指数衡量的是男女差距，而非整体发展。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A street vendor sells food without a business license and pays no taxes on the income. This activity is part of the:",
                "zh": "一位街头小贩无营业执照售卖食物，且其收入不缴税。这一活动属于："
              },
              "choices": [
                "Formal economy",
                "Informal economy",
                "Quaternary sector",
                "Purchasing power parity"
              ],
              "answer": 1,
              "explanation": {
                "en": "Unregistered, untaxed work belongs to the informal economy, which official GDP fails to record — causing GDP to understate real economic activity in many less developed countries. The formal economy, by contrast, is legal, registered, and taxed.",
                "zh": "未注册、未纳税的工作属于非正规经济，官方 GDP 无法记录它——从而导致 GDP 在许多欠发达国家低估真实经济活动。相反，正规经济是合法、注册且纳税的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why do economists often adjust GDP per capita for purchasing power parity (PPP) when comparing countries?",
                "zh": "经济学家在比较各国时为何常按购买力平价（PPP）调整人均 GDP？"
              },
              "choices": [
                "To count only the informal economy",
                "To account for differences in the cost of living between countries",
                "To measure gender inequality more accurately",
                "To exclude income earned abroad"
              ],
              "answer": 1,
              "explanation": {
                "en": "PPP adjusts for how far money goes in different places, since the same income buys much more where food and housing are cheap. This gives a truer picture of living standards than raw exchange-rate figures. PPP has nothing to do with isolating the informal economy or measuring gender gaps.",
                "zh": "PPP 针对货币在不同地方的购买力进行调整，因为在食物和住房便宜的地方，同样的收入能买到多得多的东西。这比按汇率折算的原始数字更真实地反映生活水平。PPP 与单独衡量非正规经济或性别差距无关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A country where most workers are employed in the tertiary, quaternary, and quinary sectors, with very few in agriculture, is best described as:",
                "zh": "一个大多数工人从事第三、第四、第五产业、极少人从事农业的国家，最恰当地被描述为："
              },
              "choices": [
                "A less developed, agrarian economy",
                "A newly industrializing economy",
                "A postindustrial, more developed economy",
                "An economy dominated by the primary sector"
              ],
              "answer": 2,
              "explanation": {
                "en": "A workforce concentrated in services and knowledge work, with little agriculture, is the signature of a postindustrial, more developed economy. A less developed economy has most workers in the primary sector, and a newly industrializing economy is shifting workers into the secondary (manufacturing) sector.",
                "zh": "劳动力集中于服务业和知识型工作、农业极少，是后工业、较发达经济体的标志。欠发达经济体大多数工人从事第一产业，而新兴工业化经济体正把工人转向第二产业（制造业）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which dimension is NOT one of the three components of the Gender Inequality Index (GII)?",
                "zh": "下列哪个维度不是性别不平等指数（GII）的三个组成部分之一？"
              },
              "choices": [
                "Reproductive health",
                "Empowerment (parliamentary seats and education)",
                "Labor-market participation",
                "Life expectancy of the total population"
              ],
              "answer": 3,
              "explanation": {
                "en": "The GII combines reproductive health, empowerment, and labor-market participation to measure inequality between men and women. Total-population life expectancy is a component of the HDI, not the GII, so it is the item that does not belong.",
                "zh": "GII 结合生殖健康、赋权和劳动力市场参与来衡量男女之间的不平等。全体人口的预期寿命是 HDI 的组成部分，而非 GII，因此它是不属于其中的选项。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What three-word index, published by the UN, combines life expectancy, education, and income into a score from 0 to 1? Answer with the full name (or its abbreviation).",
                "zh": "联合国发布的、把预期寿命、教育和收入合并为 0 到 1 分数的三词指数叫什么？请用全称（或其缩写）作答。"
              },
              "answer": "human development index",
              "accept": [
                "human development index",
                "hdi",
                "the human development index"
              ],
              "explanation": {
                "en": "The Human Development Index (HDI) is the UN's composite measure blending a long and healthy life, access to knowledge, and a decent standard of living into a single 0-to-1 figure.",
                "zh": "人类发展指数（HDI）是联合国的综合指标，把长寿健康的生活、获取知识和体面的生活水平融合为单一的 0 至 1 数值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What two-word term describes unregistered, untaxed economic activity like street vending that official GDP fails to record? Answer with the two-word term.",
                "zh": "哪个术语描述像街头摆摊这样未注册、未纳税、官方 GDP 无法记录的经济活动？请用二词术语作答。"
              },
              "answer": "informal economy",
              "accept": [
                "informal economy",
                "informal sector",
                "the informal economy"
              ],
              "explanation": {
                "en": "The informal economy (informal sector) includes legal but unregistered and untaxed work. Because it goes unrecorded, GDP understates real economic activity in countries where it is large.",
                "zh": "非正规经济（非正规部门）包括合法但未注册、未纳税的工作。由于它未被记录，在其规模较大的国家里 GDP 会低估真实经济活动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What does the abbreviation GNI stand for — the economic measure equal to GNP plus income received from abroad? Answer with the full three-word term.",
                "zh": "缩写 GNI 代表什么——即等于 GNP 加上来自海外收入的经济指标？请用完整的三词术语作答。"
              },
              "answer": "gross national income",
              "accept": [
                "gross national income",
                "gni"
              ],
              "explanation": {
                "en": "Gross National Income (GNI) equals GNP plus income received from abroad, such as remittances and returns on foreign investment. It is increasingly the preferred economic measure and is used inside the HDI.",
                "zh": "国民总收入（GNI）等于 GNP 加上来自海外的收入，如侨汇和外国投资回报。它日益成为首选的经济指标，并被用于 HDI 之中。"
              }
            }
          ]
        },
        {
          "id": "development-theories-and-trade",
          "title": "Development Theories, Trade, and Global Economy",
          "titleZh": "发展理论、贸易与全球经济",
          "content": [
            {
              "type": "h2",
              "en": "Explaining Why Countries Develop Differently",
              "zh": "解释各国为何发展不同"
            },
            {
              "type": "p",
              "en": "Why are some countries wealthy while others remain poor? Geographers use several competing theories to answer this. Some are optimistic, arguing that every country can climb the same ladder of growth; others are critical, arguing that the global economy is structured to keep some regions rich and others poor. On the AP exam you should be able to name each model's author, summarize its claims, and evaluate its strengths and weaknesses.",
              "zh": "为什么有些国家富裕而另一些国家仍然贫穷？地理学家用几种相互竞争的理论来回答。有些是乐观的，认为每个国家都能沿着同一条增长阶梯攀登；另一些是批判性的，认为全球经济的结构就是要让一些地区保持富裕、另一些保持贫穷。在 AP 考试中，你应能说出每个模型的作者、概括其主张，并评价其优缺点。"
            },
            {
              "type": "h2",
              "en": "Rostow's Stages of Economic Growth",
              "zh": "罗斯托的经济增长阶段"
            },
            {
              "type": "p",
              "en": "In 1960 economist Walt Rostow proposed a modernization model: every country passes through five stages of economic growth on the way to development. Rostow argued that with investment and the right conditions, poor countries can follow the path already taken by wealthy ones.",
              "zh": "1960 年，经济学家沃尔特·罗斯托（Walt Rostow）提出了一个现代化模型：每个国家在走向发展的道路上都会经历五个经济增长阶段。罗斯托认为，只要有投资和适当条件，贫穷国家就能沿着富裕国家已走过的道路前进。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Stage 1 — Traditional society: subsistence farming, little technology, economy based on the primary sector.",
                  "zh": "第一阶段——传统社会：自给农业、技术匮乏，经济以第一产业为基础。"
                },
                {
                  "en": "Stage 2 — Preconditions for takeoff: investment in infrastructure, new leadership, and commercial agriculture begin.",
                  "zh": "第二阶段——起飞的前提条件：开始投资基础设施、出现新领导层，商业化农业起步。"
                },
                {
                  "en": "Stage 3 — Takeoff: rapid industrialization and growth concentrated in a few industries and regions.",
                  "zh": "第三阶段——起飞：迅速工业化，增长集中于少数产业和地区。"
                },
                {
                  "en": "Stage 4 — Drive to maturity: technology spreads across the whole economy and diversifies it.",
                  "zh": "第四阶段——走向成熟：技术扩散到整个经济并使其多样化。"
                },
                {
                  "en": "Stage 5 — High mass consumption: a service-based economy where most people enjoy abundant goods.",
                  "zh": "第五阶段——高额群众消费：以服务业为基础的经济，大多数人享有丰富的商品。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The main critique of Rostow is that it assumes every country starts fresh and can follow the same path, ignoring that today's poor countries were often colonized and stripped of resources, and must compete in a world already dominated by industrial powers. It also assumes development means Western-style consumption and downplays environmental limits.",
              "zh": "对罗斯托的主要批评是，它假定每个国家都从零开始、都能走同一条路，却忽视了当今贫穷国家往往曾被殖民、资源被掠夺，且必须在一个已被工业强国主导的世界中竞争。它还假定发展意味着西方式消费，并淡化了环境的限制。"
            },
            {
              "type": "h2",
              "en": "Wallerstein's World-Systems Theory",
              "zh": "沃勒斯坦的世界体系理论"
            },
            {
              "type": "p",
              "en": "Immanuel Wallerstein's world-systems theory takes the opposite view: it treats the whole world as a single interconnected economic system and argues that this system is structured to concentrate wealth in some regions at the expense of others. Wallerstein divided the world into three tiers.",
              "zh": "伊曼纽尔·沃勒斯坦（Immanuel Wallerstein）的世界体系理论持相反观点：它把整个世界视为单一相互关联的经济体系，并主张这一体系的结构就是要以牺牲某些地区为代价、把财富集中于另一些地区。沃勒斯坦把世界划分为三个层级。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Core — wealthy, industrialized regions with advanced technology, high-value production, and concentrated capital (e.g., the U.S., Western Europe, Japan). The core dominates the global economy.",
                  "zh": "核心——富裕、工业化、拥有先进技术、高附加值生产和资本集中的地区（如美国、西欧、日本）。核心主导全球经济。"
                },
                {
                  "en": "Periphery — poorer regions that supply raw materials and cheap labor to the core and depend on it economically (e.g., much of sub-Saharan Africa).",
                  "zh": "边缘——较贫穷的地区，向核心供应原材料和廉价劳动力，并在经济上依附于核心（如撒哈拉以南非洲的大部分）。"
                },
                {
                  "en": "Semi-periphery — in-between regions that are industrializing and share features of both core and periphery, acting as a buffer (e.g., Brazil, India, China).",
                  "zh": "半边缘——处于中间、正在工业化、兼具核心和边缘特征、充当缓冲的地区（如巴西、印度、中国）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Closely related is dependency theory, which argues that poor (peripheral) countries are poor precisely because their economies were shaped by colonialism to serve richer ones, leaving them dependent on exporting cheap raw materials and importing expensive manufactured goods. Where Rostow sees a ladder every country can climb, dependency and world-systems theorists see a trap built into global trade.",
              "zh": "与之密切相关的是依附理论（dependency theory），它主张贫穷（边缘）国家之所以贫穷，正是因为其经济被殖民主义塑造成为更富国家服务，使它们依赖于出口廉价原材料、进口昂贵制成品。罗斯托看到的是每个国家都能攀登的阶梯，而依附理论和世界体系理论家看到的则是嵌入全球贸易之中的陷阱。"
            },
            {
              "type": "note",
              "en": "AP Tip: Do not confuse the theorists. Rostow (1960) = optimistic five-stage modernization ladder. Wallerstein = critical core/periphery/semi-periphery world-systems. Dependency theory = periphery is kept poor by its relationship to the core. The exam loves to swap these authors in the wrong definition — anchor each name to one key phrase.",
              "zh": "AP 提示：不要混淆这些理论家。罗斯托（1960 年）＝ 乐观的五阶段现代化阶梯。沃勒斯坦 ＝ 批判性的核心/边缘/半边缘世界体系。依附理论 ＝ 边缘因其与核心的关系而被保持贫穷。考试很喜欢把这些作者张冠李戴——把每个名字锚定到一个关键短语上。"
            },
            {
              "type": "h2",
              "en": "Complementarity, Trade, and Globalization",
              "zh": "互补性、贸易与全球化"
            },
            {
              "type": "p",
              "en": "Trade happens between two places when there is complementarity — one place produces a surplus of something the other place demands. Places also trade based on comparative advantage, specializing in what they produce most efficiently. Globalization is the growing interconnection of the world's economies, cultures, and populations, driven by trade, technology, and multinational corporations that operate across many countries.",
              "zh": "当两地之间存在互补性（complementarity）——一地生产的某种剩余正是另一地所需求的——贸易就会发生。各地也基于比较优势进行贸易，专门生产自己最有效率的产品。全球化（globalization）是世界经济、文化和人口日益相互关联的过程，由贸易、技术以及跨越众多国家经营的跨国公司所推动。"
            },
            {
              "type": "p",
              "en": "To reduce barriers, countries sign free-trade agreements and form trade blocs — groups of countries that lower or remove tariffs among themselves. Examples include the European Union (EU), the USMCA (formerly NAFTA), Mercosur in South America, and ASEAN in Southeast Asia. Global organizations like the World Trade Organization (WTO) promote free trade worldwide. These arrangements enable the international division of labor, in which different stages of making a product happen in different countries — design in one, parts in another, assembly in a third — chosen to minimize cost.",
              "zh": "为减少壁垒，各国签订自由贸易协定并组成贸易集团（trade blocs）——即彼此降低或取消关税的国家集团。例子包括欧盟（EU）、美墨加协定（USMCA，前身为北美自由贸易协定 NAFTA）、南美的南方共同市场（Mercosur）和东南亚的东盟（ASEAN）。世界贸易组织（WTO）等全球机构在全世界推动自由贸易。这些安排使国际劳动分工成为可能，即制造一件产品的不同阶段发生在不同国家——设计在一国、零件在另一国、组装在第三国——按成本最小化来选择。"
            },
            {
              "type": "h2",
              "en": "Microloans, Women, and Sustainable Development",
              "zh": "小额贷款、女性与可持续发展"
            },
            {
              "type": "p",
              "en": "Not all development strategies are large-scale. Microloans (microfinance) are very small loans, often to poor entrepreneurs — frequently women — who lack access to regular banks. Pioneered by the Grameen Bank in Bangladesh, microloans let recipients start small businesses and are credited with empowering women and reducing poverty at the community scale. Investing in women's education, health, and economic participation tends to lower birth rates and raise a family's well-being, making gender equality a powerful engine of development.",
              "zh": "并非所有发展战略都是大规模的。小额贷款（微型金融）是发放给贫困创业者——常常是女性——的非常小额的贷款，这些人无法从常规银行获得贷款。孟加拉国的格莱珉银行（Grameen Bank）开创了这一做法，小额贷款使受助者能创办小生意，被认为赋权女性并在社区层面减少贫困。投资于女性的教育、健康和经济参与往往会降低出生率、提高家庭福祉，使性别平等成为发展的强大引擎。"
            },
            {
              "type": "p",
              "en": "Finally, sustainable development means meeting present needs without compromising the ability of future generations to meet their own. It balances economic growth with environmental protection and social equity — the \"three pillars.\" As countries industrialize, the challenge is to raise living standards without exhausting resources or driving climate change, which is why development debates increasingly weigh growth against the health of the planet.",
              "zh": "最后，可持续发展（sustainable development）意味着满足当代需求而不损害后代满足其自身需求的能力。它在经济增长与环境保护和社会公平之间取得平衡——即\"三大支柱\"。随着国家工业化，挑战在于提高生活水平而不耗尽资源或加剧气候变化，这正是为何发展辩论越来越要在增长与地球健康之间加以权衡。"
            },
            {
              "type": "note",
              "en": "AP Tip: When a question ties development to gender, remember the causal chain: educating and employing women lowers fertility, improves child health, and raises household income. Microloans are the classic example the exam expects — connect them to women's empowerment and community-scale poverty reduction, not to giant infrastructure projects.",
              "zh": "AP 提示：当题目把发展与性别联系起来时，记住这条因果链：教育并雇用女性会降低生育率、改善儿童健康、提高家庭收入。小额贷款是考试所期待的经典例子——把它与女性赋权和社区层面的减贫联系起来，而不是与庞大的基础设施项目联系起来。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Matching a Country to a Model",
                "zh": "例题 1：把一个国家匹配到某个模型"
              },
              "problem": {
                "en": "A country exports mostly coffee and copper ore to wealthy nations and imports manufactured machinery and electronics, remaining economically dependent on those wealthier partners. Which theory best explains this relationship, and what tier does the country occupy?",
                "zh": "某国主要向富裕国家出口咖啡和铜矿石，进口机械和电子等制成品，并在经济上依附于那些较富裕的伙伴。哪个理论最能解释这种关系，该国处于哪个层级？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This fits world-systems theory and dependency theory. Exporting cheap raw materials (coffee, copper) while importing expensive manufactured goods is the classic role of the periphery, which supplies resources to and depends on the core. Dependency theory adds that this pattern is not accidental — it was shaped by a colonial past that built the economy around raw-material exports. Rostow would instead frame the country as simply at an early stage waiting to \"take off,\" which is the weaker explanation here because it ignores the structural relationship keeping it dependent.",
                  "zh": "这符合世界体系理论和依附理论。出口廉价原材料（咖啡、铜）而进口昂贵制成品，是边缘的典型角色，它向核心供应资源并依附于核心。依附理论进一步指出这种格局并非偶然——它是由把经济建立在原材料出口之上的殖民历史所塑造的。而罗斯托则会把该国框定为只是处于早期、等待\"起飞\"，这在此处是较弱的解释，因为它忽视了使该国保持依附的结构性关系。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Evaluating a Trade Bloc",
                "zh": "例题 2：评价一个贸易集团"
              },
              "problem": {
                "en": "When neighboring countries form a trade bloc that removes tariffs among members, what are one likely benefit and one likely drawback?",
                "zh": "当相邻国家组成一个取消成员间关税的贸易集团时，一个可能的好处和一个可能的坏处各是什么？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A benefit: removing tariffs lets goods flow more cheaply, so members can specialize by comparative advantage, expand markets, and lower prices for consumers — supported by complementarity between members. A drawback: freer trade can hurt domestic industries that cannot compete, causing factory closures and job losses in some member regions, and it can deepen the international division of labor in ways that leave weaker members stuck supplying cheap labor. A strong AP answer names a specific mechanism, not just \"more trade is good or bad.\"",
                  "zh": "一个好处：取消关税使货物更廉价地流动，因此成员可按比较优势进行专门化、扩大市场、降低消费者价格——这以成员间的互补性为支撑。一个坏处：更自由的贸易会损害无法竞争的国内产业，导致某些成员地区工厂关闭、就业流失，并可能以使较弱成员困于供应廉价劳动力的方式加深国际劳动分工。优秀的 AP 答案会指出具体机制，而不只是说\"贸易越多越好或越坏\"。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In Rostow's model, the stage marked by rapid industrialization concentrated in a few key industries is called:",
                "zh": "在罗斯托的模型中，以集中于少数关键产业的迅速工业化为标志的阶段被称为："
              },
              "choices": [
                "Traditional society",
                "Takeoff",
                "Drive to maturity",
                "High mass consumption"
              ],
              "answer": 1,
              "explanation": {
                "en": "Takeoff (Stage 3) is when rapid industrialization begins, concentrated in a few leading industries and regions. Traditional society (Stage 1) is subsistence-based, while high mass consumption (Stage 5) is the final service-based stage — so those bookend the model rather than describing early industrialization.",
                "zh": "起飞（第三阶段）是迅速工业化开始、集中于少数领先产业和地区的阶段。传统社会（第一阶段）以自给为基础，而高额群众消费（第五阶段）是最终的服务型阶段——因此它们是模型的两端，而非描述早期工业化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In Wallerstein's world-systems theory, which tier supplies raw materials and cheap labor to wealthier regions and depends on them economically?",
                "zh": "在沃勒斯坦的世界体系理论中，哪个层级向较富裕地区供应原材料和廉价劳动力并在经济上依附于它们？"
              },
              "choices": [
                "Core",
                "Semi-periphery",
                "Periphery",
                "Trade bloc"
              ],
              "answer": 2,
              "explanation": {
                "en": "The periphery supplies raw materials and cheap labor and depends on the core. The semi-periphery (a tempting choice) is an industrializing middle tier that shares features of both, and the core is the dominant wealthy tier — so neither fits the dependent, resource-supplying role described.",
                "zh": "边缘供应原材料和廉价劳动力并依附于核心。半边缘（一个诱人的选项）是兼具两者特征、正在工业化的中间层级，而核心是占主导的富裕层级——因此二者都不符合题中所述依附、供应资源的角色。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two regions trade because one produces a surplus of a good the other needs. This precondition for trade is called:",
                "zh": "两个地区进行贸易，是因为一地生产的某种商品剩余正是另一地所需。这一贸易的前提条件被称为："
              },
              "choices": [
                "Complementarity",
                "Agglomeration",
                "Dependency",
                "Deglomeration"
              ],
              "answer": 0,
              "explanation": {
                "en": "Complementarity exists when one place has a surplus of something another place demands, enabling trade between them. Agglomeration is the clustering of firms for cost savings — a manufacturing-location concept, not a condition for trade between regions.",
                "zh": "互补性是指一地拥有另一地所需求之物的剩余，从而使两地间的贸易成为可能。集聚是企业为节约成本而聚集——是制造业区位概念，而非地区间贸易的条件。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is the best example of a strategy that promotes development by empowering women at the community scale?",
                "zh": "下列哪项是通过在社区层面赋权女性来促进发展的最佳策略范例？"
              },
              "choices": [
                "Building a national highway network",
                "Microloans to small entrepreneurs",
                "Raising tariffs on imported goods",
                "Nationalizing the oil industry"
              ],
              "answer": 1,
              "explanation": {
                "en": "Microloans give small amounts of credit to poor entrepreneurs, often women, letting them start businesses and reduce poverty locally — pioneered by the Grameen Bank. A national highway is large-scale infrastructure, and raising tariffs or nationalizing oil are macroeconomic policies, none of which specifically empower women at the community scale.",
                "zh": "小额贷款向贫困创业者（常为女性）提供少量信贷，使她们能创业并在当地减贫——由格莱珉银行开创。国家公路是大规模基础设施，而提高关税或将石油国有化是宏观经济政策，均未特别在社区层面赋权女性。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A common criticism of Rostow's stages of growth model is that it:",
                "zh": "对罗斯托增长阶段模型的一个常见批评是，它："
              },
              "choices": [
                "Assumes every country can follow the same path and ignores the effects of colonialism",
                "Divides the world into core and periphery",
                "Focuses only on gender inequality",
                "Argues that poor countries can never develop"
              ],
              "answer": 0,
              "explanation": {
                "en": "Critics argue Rostow assumes all countries start equal and can climb the same ladder, ignoring how colonialism stripped resources and left poor countries competing against established industrial powers. Dividing the world into core and periphery describes Wallerstein, not Rostow, and Rostow is optimistic that countries can develop — the opposite of the last choice.",
                "zh": "批评者认为罗斯托假定所有国家起点平等、都能攀登同一阶梯，忽视了殖民主义如何掠夺资源、使贫穷国家不得不与已确立的工业强国竞争。把世界分为核心和边缘描述的是沃勒斯坦而非罗斯托，且罗斯托对国家能够发展持乐观态度——与最后一个选项相反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the name of Wallerstein's theory that treats the world as a single economy divided into core, periphery, and semi-periphery? Answer with the two-word (hyphenated) term.",
                "zh": "沃勒斯坦把世界视为单一经济、分为核心、边缘和半边缘的理论叫什么？请用（带连字符的）二词术语作答。"
              },
              "answer": "world-systems theory",
              "accept": [
                "world-systems theory",
                "world systems theory",
                "world-systems",
                "world systems"
              ],
              "explanation": {
                "en": "World-systems theory, developed by Immanuel Wallerstein, argues the global economy is one interconnected system structured to concentrate wealth in the core at the expense of the periphery.",
                "zh": "世界体系理论由伊曼纽尔·沃勒斯坦提出，主张全球经济是一个相互关联的体系，其结构是以牺牲边缘为代价把财富集中于核心。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What term describes a group of countries that reduce or eliminate tariffs among themselves, such as the EU or USMCA? Answer with the two-word term.",
                "zh": "哪个术语描述彼此降低或取消关税的国家集团，如欧盟或美墨加协定？请用二词术语作答。"
              },
              "answer": "trade bloc",
              "accept": [
                "trade bloc",
                "trade block",
                "trading bloc",
                "trade blocs"
              ],
              "explanation": {
                "en": "A trade bloc is a group of countries that lower or remove tariffs among members to encourage trade — examples include the EU, USMCA, Mercosur, and ASEAN.",
                "zh": "贸易集团是彼此降低或取消关税以鼓励贸易的国家集团——例子包括欧盟、美墨加协定、南方共同市场和东盟。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What two-word term names development that meets present needs without compromising future generations' ability to meet their own? Answer with the two-word term.",
                "zh": "哪个术语指满足当代需求而不损害后代满足其自身需求能力的发展？请用二词术语作答。"
              },
              "answer": "sustainable development",
              "accept": [
                "sustainable development",
                "sustainability"
              ],
              "explanation": {
                "en": "Sustainable development balances economic growth, environmental protection, and social equity so that present needs are met without exhausting resources for future generations.",
                "zh": "可持续发展在经济增长、环境保护和社会公平之间取得平衡，从而在满足当代需求的同时不为后代耗尽资源。"
              }
            }
          ]
        }
      ]
    }
  ]
}
