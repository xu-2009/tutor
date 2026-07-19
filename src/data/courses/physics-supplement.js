// Algebra-based extensions for the general U.S. high-school Physics course.
// Kept separate from physics.js so the core mechanics text remains readable.

const mc = (en, zh, choices, answer, explainEn, explainZh) => ({
  type: 'mc', question: { en, zh }, choices, answer,
  explanation: { en: explainEn, zh: explainZh },
})

const input = (en, zh, answer, explainEn, explainZh, accept = []) => ({
  type: 'input', question: { en, zh }, answer, ...(accept.length ? { accept } : {}),
  explanation: { en: explainEn, zh: explainZh },
})

const worked = (titleEn, titleZh, problemEn, problemZh, steps) => ({
  type: 'example', title: { en: titleEn, zh: titleZh },
  problem: { en: problemEn, zh: problemZh },
  solution: steps,
})

const lesson = ({ id, title, titleZh, intro, introZh, ideas, ideasZh, equations, lab, labZh, note, noteZh, examples, problems }) => ({
  id, title, titleZh,
  content: [
    { type: 'h2', en: title, zh: titleZh },
    { type: 'p', en: intro, zh: introZh },
    { type: 'h3', en: 'Core ideas and models', zh: '核心概念与模型' },
    { type: 'p', en: ideas, zh: ideasZh },
    ...(equations || []).map(tex => ({ type: 'math', tex })),
    { type: 'h3', en: 'Evidence, measurement, and problem solving', zh: '证据、测量与解题' },
    { type: 'p', en: lab, zh: labZh },
    { type: 'note', en: note, zh: noteZh },
    ...examples,
  ],
  problems,
})

export const foundationsUnit = {
  id: 'physics-foundations', title: 'Physics Foundations and Laboratory Skills', titleZh: '物理基础与实验技能',
  lessons: [lesson({
    id: 'measurement-modeling-uncertainty', title: 'Measurement, Models, and Uncertainty', titleZh: '测量、模型与不确定度',
    intro: 'Physics turns observations into testable models. A model identifies a system, chooses measurable variables, and states a mathematical relationship that can be checked against evidence. Measurements are never exact: an instrument has limited resolution, repeated trials vary, and a procedure may introduce systematic bias. Scientists therefore report a value with units, sensible significant figures, and an uncertainty. The SI base units used most often in this course are meter, kilogram, second, ampere, and kelvin. Derived units such as the newton and joule are combinations of base units.',
    introZh: '物理学把观察转化为可检验的模型。模型要确定研究系统、选择可测变量，并提出能用证据检验的数学关系。测量永远不是绝对精确的：仪器分辨率有限，重复实验会波动，实验步骤也可能产生系统偏差。因此科学家会同时报告数值、单位、合理的有效数字和不确定度。本课程常用的 SI 基本单位是米、千克、秒、安培和开尔文；牛顿、焦耳等导出单位由基本单位组合而成。',
    ideas: 'Dimensional analysis is a fast test of an equation: quantities added together must have the same dimensions, and the dimensions on both sides must match. Conversions multiply by ratios equal to one, so the physical amount does not change. Graphs reveal relationships that raw tables can hide. A straight-line model has the form $y=mx+b$; the slope carries units and usually has physical meaning. If a graph curves, transforming a variable—for example plotting distance against $t^2$ for constant acceleration—may produce a line. Accuracy describes closeness to an accepted value; precision describes the spread of repeated measurements. Random error mainly reduces precision, while systematic error shifts every trial in one direction.',
    ideasZh: '量纲分析可以快速检验方程：相加的量必须具有相同量纲，方程两边的量纲也必须一致。单位换算相当于乘以等于 1 的换算因子，所以物理量本身不变。图像能揭示原始表格中不明显的关系。直线模型写作 $y=mx+b$；斜率有单位，而且通常具有明确的物理意义。如果图像弯曲，可以变换变量——例如匀加速运动中画位移对 $t^2$ 的图——使其线性化。准确度表示接近公认值的程度，精密度表示重复测量的离散程度。随机误差主要降低精密度，系统误差则使所有结果向同一方向偏移。',
    equations: ['\\text{percent error}=\\left|\\frac{\\text{measured}-\\text{accepted}}{\\text{accepted}}\\right|\\times100\\%', 'y=mx+b'],
    lab: 'A strong investigation changes one independent variable, measures a dependent variable, and controls other relevant conditions. Repeat trials, average when appropriate, plot every data point, and describe whether the evidence supports the proposed model. A best-fit line represents the overall trend; it should not be forced through every point or through the origin unless the physics requires that intercept. Residuals—the vertical differences between data and model—help reveal curvature or bias. When communicating a result, include a claim, quantitative evidence, reasoning that connects the evidence to a physics principle, and at least one realistic limitation or improvement.',
    labZh: '好的探究实验只改变一个自变量，测量一个因变量，并控制其他相关条件。应进行重复试验，在适当时求平均值，画出所有数据点，并说明证据是否支持所提出的模型。最佳拟合线表示总体趋势，不应强行穿过每个点；除非物理规律要求，也不应强行过原点。残差是数据点与模型之间的竖直差，可用来发现弯曲趋势或系统偏差。报告结果时应包含结论、定量证据、把证据与物理原理联系起来的推理，以及至少一项现实的局限或改进。',
    note: 'A calculator display is not the final answer. Keep extra digits during calculations, then round once at the end to match the least precise measured data. Always attach units and check whether the magnitude is physically reasonable.',
    noteZh: '计算器显示的数字不是最终答案。计算过程中保留额外位数，最后再按最不精确的测量值统一舍入。答案必须带单位，并检查数量级是否符合实际。',
    examples: [
      worked('Example 1: Unit conversion', '例题 1：单位换算', 'Convert $72.0\\ \\text{km/h}$ to m/s.', '把 $72.0\\ \\text{km/h}$ 换算为 m/s。', [
        { type: 'math', tex: '72.0\\ \\frac{\\text{km}}{\\text{h}}\\left(\\frac{1000\\ \\text{m}}{1\\ \\text{km}}\\right)\\left(\\frac{1\\ \\text{h}}{3600\\ \\text{s}}\\right)=20.0\\ \\text{m/s}' },
        { type: 'p', en: 'Units cancel like algebraic factors. Three significant figures are retained.', zh: '单位像代数因子一样约去，并保留三位有效数字。' },
      ]),
      worked('Example 2: Interpreting a slope', '例题 2：解释斜率', 'A best-fit line on a position–time graph is $x=(3.2\\ \\text{m/s})t+0.5\\ \\text{m}$. Interpret its slope and intercept.', '位置-时间图的最佳拟合线为 $x=(3.2\\ \\text{m/s})t+0.5\\ \\text{m}$。解释斜率与截距。', [
        { type: 'p', en: 'The slope is velocity, so the object moves in the positive direction at 3.2 m/s. The intercept is position at $t=0$, so it began 0.5 m on the positive side of the origin.', zh: '斜率表示速度，因此物体以 3.2 m/s 沿正方向运动。截距表示 $t=0$ 时的位置，因此初始位置在原点正方向 0.5 m 处。' },
      ]),
    ],
    problems: [
      mc('Which SI unit is equivalent to a newton?', '哪个 SI 单位等价于牛顿？', ['$\\text{kg}\\cdot\\text{m/s}^2$', '$\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$', '$\\text{kg/s}$', '$\\text{m/s}^2$'], 0, 'From $F=ma$, one newton equals one kilogram meter per second squared.', '由 $F=ma$，1 牛顿等于 1 千克·米每二次方秒。'),
      input('Convert 2.50 km to meters. Give a whole number.', '把 2.50 km 换算为米，答案写整数。', '2500', '$2.50\\times1000=2500$ m.', '$2.50\\times1000=2500$ m。'),
      mc('Repeated values are tightly grouped but far from the accepted value. They are:', '重复测量值彼此很接近，但远离公认值。它们是：', ['precise but not accurate | 精密但不准确', 'accurate but not precise | 准确但不精密', 'both | 两者都是', 'neither | 两者都不是'], 0, 'A tight cluster means high precision; being far from the accepted value means low accuracy.', '聚得紧表示精密度高，远离公认值表示准确度低。'),
      input('A measured value is 9.6 and the accepted value is 10.0. Find the percent error.', '测量值为 9.6，公认值为 10.0。求百分误差。', '4', '$|9.6-10.0|/10.0\\times100\\%=4\\%$.', '$|9.6-10.0|/10.0\\times100\\%=4\\%$。', ['4%','4.0']),
      mc('The slope of a velocity–time graph has units of:', '速度-时间图斜率的单位是：', ['$\\text{m/s}^2$', '$\\text{m/s}$', '$\\text{m}$', '$\\text{s/m}$'], 0, 'Slope units are $(\\text{m/s})/\\text{s}=\\text{m/s}^2$, the unit of acceleration.', '斜率单位为 $(\\text{m/s})/\\text{s}=\\text{m/s}^2$，即加速度单位。'),
      mc('Which change best reduces random error?', '哪项改变最能减小随机误差？', ['repeat and average trials | 重复并取平均', 'round every intermediate step | 每一步都舍入', 'remove units | 去掉单位', 'force the line through the origin | 强迫拟合线过原点'], 0, 'Repeated independent trials reveal the spread and averaging reduces the influence of random fluctuations.', '重复独立试验能显示离散程度，取平均可减小随机波动的影响。'),
    ],
  })],
}

export const thermalUnit = {
  id: 'thermal-physics', title: 'Thermal Physics', titleZh: '热学',
  lessons: [lesson({
    id: 'temperature-heat-phase-change', title: 'Temperature, Heat, and Phase Change', titleZh: '温度、热量与相变',
    intro: 'The particle model explains thermal behavior by connecting microscopic motion to macroscopic measurements. Temperature measures the average translational kinetic energy of particles, while internal energy includes the kinetic and potential energies of all particles in a system. Heat is not a substance stored inside an object; it is energy transferred because of a temperature difference. Transfer occurs by conduction through collisions, convection through moving fluids, and radiation through electromagnetic waves. Thermal equilibrium is reached when objects in contact have the same temperature and no net heat flows between them.',
    introZh: '粒子模型把微观运动与宏观测量联系起来，从而解释热现象。温度反映粒子的平均平动动能，而内能包括系统中所有粒子的动能与势能。热量不是储存在物体内部的物质，而是因温差发生传递的能量。传热方式包括粒子碰撞造成的传导、流体运动造成的对流，以及电磁波造成的辐射。接触物体温度相同且不再有净热流时，就达到热平衡。',
    ideas: 'For a substance that remains in one phase, heat transfer is $Q=mc\\Delta T$, where $c$ is specific heat capacity. A large $c$ means much energy is required for each degree of temperature change. During melting or boiling, temperature remains constant while energy changes molecular arrangement; then $Q=mL$, where $L$ is latent heat. In an insulated calorimeter, energy lost by warmer objects equals energy gained by cooler objects. Signs matter: $Q>0$ for a system gaining thermal energy and $Q<0$ for one losing it. The first law of thermodynamics expresses energy conservation: a system’s internal-energy change equals heat added plus work done on the system.',
    ideasZh: '物质不发生相变时，热传递满足 $Q=mc\\Delta T$，其中 $c$ 是比热容。$c$ 越大，温度每升高一度所需能量越多。熔化或沸腾过程中，能量用于改变分子排列而温度保持不变，此时 $Q=mL$，$L$ 为潜热。在隔热量热器中，较热物体放出的能量等于较冷物体吸收的能量。符号很重要：系统吸热时 $Q>0$，放热时 $Q<0$。热力学第一定律体现能量守恒：系统内能的变化等于加入的热量与外界对系统所做功之和。',
    equations: ['Q=mc\\Delta T', 'Q=mL', '\\Delta U=Q+W_{\\text{on}}'],
    lab: 'A heating curve plots temperature against energy or time at nearly constant heater power. Sloped sections show warming within one phase; flat sections show phase change. The slope depends on mass and specific heat. In calorimetry, insulate the cup, measure masses and initial temperatures, mix quickly, and use the common final temperature in an energy balance. Heat lost to the cup and air is a systematic limitation, so a measured specific heat is often biased unless the apparatus heat capacity is included.',
    labZh: '加热曲线把温度画成能量或时间的函数（加热器功率近似恒定）。倾斜段表示同一物态内升温，平台段表示相变；斜率取决于质量和比热容。量热实验中要给量热杯保温，测量质量和初温，快速混合，并用共同终温建立能量平衡。量热杯和空气吸热会造成系统误差，因此若不计装置热容，测得的比热容往往有偏差。',
    note: 'Temperature does not increase during an ideal phase change even though energy is entering. That energy increases particle potential energy by separating or rearranging particles, rather than increasing average kinetic energy.',
    noteZh: '理想相变过程中即使不断输入能量，温度也不升高。能量用于分离或重新排列粒子，从而增加粒子势能，而不是增加平均动能。',
    examples: [
      worked('Example 1: Heating water', '例题 1：加热水', 'How much energy heats 0.50 kg of water from 20°C to 30°C? Use $c=4186\\ \\text{J/(kg·°C)}$.', '把 0.50 kg 水从 20°C 加热到 30°C 需要多少能量？取 $c=4186\\ \\text{J/(kg·°C)}$。', [{ type:'math', tex:'Q=mc\\Delta T=(0.50)(4186)(10)=2.09\\times10^4\\ \\text{J}' }, { type:'p', en:'Only the temperature difference matters, so Celsius and kelvin give the same $\\Delta T$.', zh:'这里只取温差，因此用摄氏度或开尔文得到相同的 $\\Delta T$。' }]),
      worked('Example 2: Melting ice', '例题 2：融化冰', 'Find the energy needed to melt 0.20 kg of ice already at 0°C. Use $L_f=3.34\\times10^5\\ \\text{J/kg}$.', '求使 0°C 的 0.20 kg 冰完全熔化所需的能量。取 $L_f=3.34\\times10^5\\ \\text{J/kg}$。', [{ type:'math', tex:'Q=mL_f=(0.20)(3.34\\times10^5)=6.68\\times10^4\\ \\text{J}' }, { type:'p', en:'No $mc\\Delta T$ term is needed because the temperature does not change during melting.', zh:'熔化时温度不变，因此不需要 $mc\\Delta T$ 项。' }]),
    ],
    problems: [
      mc('Heat is best defined as:', '热量最恰当的定义是：', ['energy transferred because of a temperature difference | 因温差传递的能量', 'temperature stored in matter | 储存在物质中的温度', 'total molecular motion only | 仅为分子总运动', 'a kind of fluid | 一种流体'], 0, 'Heat names an energy-transfer process, not a material contained in an object.', '热量表示能量传递过程，不是物体内含有的物质。'),
      input('How much heat raises 2.0 kg of a material with $c=500$ J/(kg·°C) by 3.0°C? Answer in J.', '2.0 kg 物质的比热容为 500 J/(kg·°C)，升温 3.0°C 需多少热量？单位 J。', '3000', '$Q=mc\\Delta T=2.0(500)(3.0)=3000$ J.', '$Q=mc\\Delta T=2.0(500)(3.0)=3000$ J。'),
      mc('During boiling at constant pressure, added energy mainly:', '恒压沸腾时，加入的能量主要：', ['separates particles | 分离粒子', 'raises temperature | 升高温度', 'reduces internal energy | 降低内能', 'destroys energy | 消灭能量'], 0, 'The energy increases molecular potential energy while temperature stays at the boiling point.', '能量增加分子势能，而温度保持在沸点。'),
      input('A 0.10 kg sample absorbs 800 J and warms by 20°C. Find its specific heat in J/(kg·°C).', '0.10 kg 样品吸收 800 J，升温 20°C。求比热容，单位 J/(kg·°C)。', '400', '$c=Q/(m\\Delta T)=800/(0.10\\times20)=400$.', '$c=Q/(m\\Delta T)=800/(0.10\\times20)=400$。'),
      mc('Warm air rising is primarily:', '暖空气上升主要属于：', ['convection | 对流', 'conduction | 传导', 'radiation | 辐射', 'fusion | 熔化'], 0, 'Bulk motion of a fluid transports energy by convection.', '流体整体运动传递能量称为对流。'),
      mc('In an ideally insulated mixture, the sum of all $Q$ values is:', '在理想隔热混合系统中，所有 $Q$ 的总和为：', ['$0$', '$1$', '$mc$', '$mL$'], 0, 'Energy conservation requires heat lost plus heat gained to equal zero.', '能量守恒要求放热量与吸热量的代数和为零。'),
    ],
  })],
}

export const wavesUnit = {
  id: 'waves-and-sound', title: 'Mechanical Waves and Sound', titleZh: '机械波与声',
  lessons: [lesson({
    id: 'wave-properties-sound', title: 'Wave Properties, Interference, and Sound', titleZh: '波的性质、干涉与声',
    intro: 'A mechanical wave transfers energy through oscillations of matter without carrying the matter along over long distances. In a transverse wave, particle motion is perpendicular to wave travel; in a longitudinal wave, it is parallel. Amplitude measures the maximum disturbance and is related to energy. Wavelength $\\lambda$ is the distance between repeating points, frequency $f$ is cycles per second, and period $T$ is time per cycle. Wave speed depends on the medium, not on the source frequency. When frequency changes in the same medium, wavelength changes so that $v=f\\lambda$ remains true.',
    introZh: '机械波通过物质振动传递能量，但不会把物质整体长距离运走。横波中粒子运动方向与波传播方向垂直；纵波中二者平行。振幅表示最大扰动，并与能量有关。波长 $\\lambda$ 是相邻同相位点之间的距离，频率 $f$ 是每秒周期数，周期 $T$ 是每周期时间。波速由介质决定，而不是由波源频率决定。在同一介质中改变频率时，波长相应改变，使 $v=f\\lambda$ 始终成立。',
    ideas: 'Superposition says overlapping displacements add. In-phase waves interfere constructively; out-of-phase waves interfere destructively. Reflection can create standing waves with nodes that never move and antinodes of maximum motion. A string fixed at both ends supports wavelengths $\\lambda_n=2L/n$ and frequencies $f_n=nv/(2L)$. Sound is a longitudinal pressure wave. Pitch follows frequency, loudness relates to intensity, and timbre depends on harmonic content. Resonance occurs when periodic driving matches a natural frequency. The Doppler effect is an observed frequency shift caused by relative motion: approaching source and observer produce a higher observed frequency, separation a lower one.',
    ideasZh: '叠加原理指出，波重叠时各自位移相加。同相波产生相长干涉，反相波产生相消干涉。反射波可形成驻波，其中节点始终不动，腹点振幅最大。两端固定的弦允许波长 $\\lambda_n=2L/n$，对应频率 $f_n=nv/(2L)$。声波是纵向压力波。音调由频率决定，响度与声强有关，音色取决于谐波组成。周期驱动频率等于固有频率时发生共振。多普勒效应是相对运动造成的观测频率变化：相互接近时观测频率升高，相互远离时降低。',
    equations: ['v=f\\lambda', 'T=\\frac{1}{f}', 'f_n=\\frac{nv}{2L}\\quad(n=1,2,3,\\ldots)'],
    lab: 'A slinky or ripple tank makes reflection, refraction, diffraction, and interference visible. Measure the time for many cycles rather than one cycle to reduce timing uncertainty. For a string, vary tension or length one variable at a time and identify resonances by large stable standing-wave patterns. A plot of frequency against harmonic number should be linear. The slope gives the fundamental frequency, while deviations may indicate nonuniform string density or imperfect end conditions.',
    labZh: '弹簧或水波槽能直观看到反射、折射、衍射与干涉。应测量多个周期的总时间，而不是只测一个周期，以减小计时不确定度。研究弦时，每次只改变张力或长度一个变量，并通过大而稳定的驻波图样识别共振。频率对谐波序号的图应为直线，其斜率给出基频；偏离直线可能来自弦线密度不均或端点条件不理想。',
    note: 'A louder sound is not necessarily higher pitched. Loudness mainly follows amplitude or intensity; pitch follows frequency. Changing one does not require changing the other.',
    noteZh: '更响的声音不一定音调更高。响度主要取决于振幅或声强，音调取决于频率；改变其中一个不必改变另一个。',
    examples: [
      worked('Example 1: Wave speed', '例题 1：波速', 'A 6.0 Hz wave has wavelength 2.5 m. Find its speed.', '频率为 6.0 Hz 的波，波长为 2.5 m。求波速。', [{ type:'math', tex:'v=f\\lambda=(6.0)(2.5)=15\\ \\text{m/s}' }]),
      worked('Example 2: Fundamental on a string', '例题 2：弦的基频', 'A 1.20 m string carries waves at 240 m/s. Find its fundamental frequency.', '一根长 1.20 m 的弦上波速为 240 m/s。求基频。', [{ type:'math', tex:'f_1=\\frac{v}{2L}=\\frac{240}{2(1.20)}=100\\ \\text{Hz}' }, { type:'p', en:'The second harmonic is 200 Hz and the third is 300 Hz.', zh:'第二谐波为 200 Hz，第三谐波为 300 Hz。' }]),
    ],
    problems: [
      input('A wave travels at 12 m/s with frequency 3 Hz. Find wavelength in m.', '波速 12 m/s、频率 3 Hz。求波长，单位 m。', '4', '$\\lambda=v/f=12/3=4$ m.', '$\\lambda=v/f=12/3=4$ m。', ['4.0']),
      input('Find the period of a 5 Hz wave in seconds.', '求 5 Hz 波的周期，单位 s。', '0.2', '$T=1/f=1/5=0.2$ s.', '$T=1/f=1/5=0.2$ s。', ['0.20']),
      mc('Two equal pulses overlap with opposite displacements. The result is:', '两个等大、位移相反的脉冲重叠，结果是：', ['destructive interference | 相消干涉', 'constructive interference | 相长干涉', 'refraction | 折射', 'polarization | 偏振'], 0, 'Opposite displacements add to a smaller or zero resultant displacement.', '相反位移相加会得到更小或为零的合位移。'),
      mc('The points that remain at rest in a standing wave are:', '驻波中始终静止的点叫：', ['nodes | 节点', 'antinodes | 腹点', 'crests | 波峰', 'rays | 光线'], 0, 'Destructive interference fixes nodes at zero displacement.', '相消干涉使节点保持零位移。'),
      mc('A sound source moving toward you is heard at:', '声源向你靠近时，你听到的频率：', ['higher frequency | 更高', 'lower frequency | 更低', 'zero frequency | 为零', 'unchanged frequency always | 始终不变'], 0, 'Successive wavefronts arrive closer together, increasing observed frequency.', '相邻波前到达间隔缩短，使观测频率升高。'),
      mc('Resonance occurs most strongly when the driving frequency:', '当驱动频率满足什么条件时共振最强？', ['matches a natural frequency | 等于固有频率', 'is zero | 为零', 'is always ultrasonic | 总是超声', 'changes randomly | 随机变化'], 0, 'At a natural frequency, energy is transferred coherently cycle after cycle.', '驱动频率等于固有频率时，能量逐周期同相积累。'),
    ],
  })],
}

export const opticsUnit = {
  id: 'light-and-optics', title: 'Light and Geometric Optics', titleZh: '光与几何光学',
  lessons: [lesson({
    id: 'reflection-refraction-lenses', title: 'Reflection, Refraction, Mirrors, and Lenses', titleZh: '反射、折射、镜与透镜',
    intro: 'Light is an electromagnetic wave, but geometric optics models it as straight rays whenever objects and openings are much larger than the wavelength. At a boundary, some light may reflect, some may transmit, and some may be absorbed. The law of reflection states that the incident and reflected angles are equal when both are measured from the normal. A plane mirror forms an upright, virtual image the same size and the same distance behind the mirror as the object is in front.',
    introZh: '光是电磁波，但当物体与孔径远大于波长时，几何光学把光近似为沿直线传播的光线。在介质边界处，光可能部分反射、部分透射、部分吸收。反射定律指出，入射角等于反射角，两者都从法线量起。平面镜形成正立虚像，像与物体等大，像到镜后的距离等于物体到镜前的距离。',
    ideas: 'Refraction occurs because light speed changes between media. The refractive index is $n=c/v$, and Snell’s law is $n_1\\sin\\theta_1=n_2\\sin\\theta_2$. Entering a higher-index medium bends a ray toward the normal. Converging lenses and concave mirrors can form real images where rays actually meet, or virtual images from which rays only appear to diverge. The thin-lens and mirror equation is $1/f=1/d_o+1/d_i$; magnification is $m=h_i/h_o=-d_i/d_o$. A positive image distance indicates a real image in the standard sign convention. Ray diagrams and equations should agree on orientation, size, and image type.',
    ideasZh: '光速在不同介质中改变，从而发生折射。折射率为 $n=c/v$，斯涅尔定律为 $n_1\\sin\\theta_1=n_2\\sin\\theta_2$。光进入折射率更高的介质时向法线偏折。会聚透镜和凹面镜既能形成光线真实会聚的实像，也能形成光线看似发散自某点的虚像。薄透镜和球面镜方程为 $1/f=1/d_o+1/d_i$，放大率为 $m=h_i/h_o=-d_i/d_o$。在常用符号约定中，正的像距表示实像。光线图与方程对像的正倒、大小和类型应一致。',
    equations: ['n=\\frac{c}{v}', 'n_1\\sin\\theta_1=n_2\\sin\\theta_2', '\\frac{1}{f}=\\frac{1}{d_o}+\\frac{1}{d_i}', 'm=-\\frac{d_i}{d_o}'],
    lab: 'Trace at least two principal rays to locate an image: a ray parallel to the axis refracts through the far focal point, and a ray through the optical center continues nearly straight. In a refraction lab, draw the boundary and normal before measuring angles. Plot $\\sin\\theta_1$ against $\\sin\\theta_2$; Snell’s law predicts a straight line whose slope is a ratio of refractive indices. Repeated angles provide stronger evidence than a single trial.',
    labZh: '至少画两条主光线来确定像的位置：平行主轴的光线折射后通过远焦点，通过光心的光线近似直线传播。折射实验中，应先画边界和法线再量角。把 $\\sin\\theta_1$ 对 $\\sin\\theta_2$ 作图，斯涅尔定律预言其为直线，斜率等于折射率之比。多个角度的重复数据比单次测量更有说服力。',
    note: 'Angles in reflection and refraction are measured from the normal, not from the surface. Confusing these complementary angles is the most common source of wrong ray diagrams.',
    noteZh: '反射角和折射角都从法线量起，而不是从界面量起。混淆这两个互余角是光线图出错最常见的原因。',
    examples: [
      worked('Example 1: Refraction', '例题 1：折射', 'Light enters glass $(n=1.50)$ from air at $30^\\circ$. Find the refracted angle.', '光从空气以 $30^\\circ$ 入射玻璃（$n=1.50$）。求折射角。', [{ type:'math', tex:'\\sin\\theta_2=\\frac{1.00\\sin30^\\circ}{1.50}=0.333' }, { type:'math', tex:'\\theta_2\\approx19.5^\\circ' }, { type:'p', en:'The ray bends toward the normal because glass has the larger index.', zh:'玻璃折射率更大，因此光线向法线偏折。' }]),
      worked('Example 2: Converging lens', '例题 2：会聚透镜', 'An object is 30 cm from a converging lens of focal length 10 cm. Find image distance and magnification.', '物体位于焦距 10 cm 的会聚透镜前 30 cm。求像距与放大率。', [{ type:'math', tex:'\\frac1{d_i}=\\frac1{10}-\\frac1{30}=\\frac1{15}\\Rightarrow d_i=15\\ \\text{cm}' }, { type:'math', tex:'m=-\\frac{15}{30}=-0.50' }, { type:'p', en:'The positive image distance and negative magnification describe a real, inverted, half-size image.', zh:'像距为正、放大率为负，表示实像、倒立且为原物一半大小。' }]),
    ],
    problems: [
      input('A ray strikes a mirror at 35° from the normal. Find its reflection angle in degrees.', '光线与法线成 35° 入射镜面。求反射角。', '35', 'The law of reflection gives $\\theta_r=\\theta_i=35^\\circ$.', '由反射定律，$\\theta_r=\\theta_i=35^\\circ$。'),
      mc('A ray entering a higher-index medium bends:', '光进入折射率更高的介质时：', ['toward the normal | 向法线偏折', 'away from the normal | 远离法线', 'into a circle | 变成圆', 'without changing speed | 速度不变'], 0, 'Lower speed in the higher-index medium produces bending toward the normal.', '光在高折射率介质中速度更低，因此向法线偏折。'),
      input('Light travels at $2.0\\times10^8$ m/s in a material. Using $c=3.0\\times10^8$ m/s, find $n$.', '光在某材料中速度为 $2.0\\times10^8$ m/s。取 $c=3.0\\times10^8$ m/s，求 $n$。', '1.5', '$n=c/v=3.0/2.0=1.5$.', '$n=c/v=3.0/2.0=1.5$。', ['1.50']),
      mc('A real image is formed where:', '实像形成在：', ['light rays actually converge | 光线真实会聚处', 'rays only appear to originate | 光线看似发出处', 'no light travels | 没有光处', 'the object must be located | 物体所在处'], 0, 'A screen can capture a real image because actual light reaches and converges there.', '实像处有真实光线会聚，因此可以投射到屏幕上。'),
      input('A lens has focal length 20 cm and object distance 40 cm. Find image distance in cm.', '透镜焦距 20 cm，物距 40 cm。求像距，单位 cm。', '40', '$1/d_i=1/20-1/40=1/40$, so $d_i=40$ cm.', '$1/d_i=1/20-1/40=1/40$，故 $d_i=40$ cm。'),
      mc('A plane mirror image is:', '平面镜所成的像是：', ['virtual and upright | 虚像且正立', 'real and inverted | 实像且倒立', 'real and enlarged | 实像且放大', 'always smaller | 总是缩小'], 0, 'Reflected rays diverge but appear to originate behind the mirror, producing an upright virtual image.', '反射光线发散，但看似来自镜后，形成正立虚像。'),
    ],
  })],
}

export const electricityUnit = {
  id: 'electricity', title: 'Electricity and Circuits', titleZh: '电学与电路',
  lessons: [lesson({
    id: 'charge-field-potential', title: 'Electric Charge, Field, and Potential', titleZh: '电荷、电场与电势',
    intro: 'Electric charge is a conserved property of matter. Protons carry positive elementary charge, electrons carry negative elementary charge, and like charges repel while unlike charges attract. Charging transfers electrons; it does not create net charge from nothing. Conductors allow charge to move freely, whereas insulators hold charge locally. Coulomb’s law gives the force between point charges and follows an inverse-square pattern. The electric field is force per unit positive test charge, so it describes the influence of source charges without requiring a test charge to be present.',
    introZh: '电荷是物质的一种守恒属性。质子带正元电荷，电子带负元电荷；同号相斥，异号相吸。带电过程转移的是电子，并不会凭空产生净电荷。导体允许电荷自由移动，绝缘体则使电荷局限在局部。库仑定律给出点电荷之间的作用力，并遵循平方反比规律。电场定义为单位正试探电荷所受的力，因此无需真的放置试探电荷，也能描述源电荷的影响。',
    ideas: 'For point charges, $F=k|q_1q_2|/r^2$ and $E=k|Q|/r^2$. Fields point away from positive charges and toward negative charges. Multiple forces or fields add as vectors. Electric potential $V$ is potential energy per charge and is a scalar, so potentials add algebraically. A charge changing potential has $\\Delta U=q\\Delta V$. A positive charge naturally moves toward lower potential energy; an electron’s negative charge reverses the relationship between $U$ and $V$. Uniform fields between large parallel plates satisfy approximately $E=|\\Delta V|/d$. Equipotential lines are perpendicular to field lines, and no work is required to move along one.',
    ideasZh: '点电荷间有 $F=k|q_1q_2|/r^2$，点电荷产生的场强为 $E=k|Q|/r^2$。电场线从正电荷指出、指向负电荷。多个力或电场要按矢量相加。电势 $V$ 是单位电荷的势能，是标量，因此可代数相加。电荷经历电势变化时有 $\\Delta U=q\\Delta V$。正电荷自然向势能较低处运动；电子带负电，因此 $U$ 与 $V$ 的关系方向相反。大平行板间近似匀强电场满足 $E=|\\Delta V|/d$。等势线与电场线垂直，沿等势线移动无需做功。',
    equations: ['F=k\\frac{|q_1q_2|}{r^2}', 'E=\\frac{F}{q}=k\\frac{|Q|}{r^2}', '\\Delta U=q\\Delta V', 'E=\\frac{|\\Delta V|}{d}'],
    lab: 'Use small charged objects or field-mapping software to distinguish force, field, and potential. A test charge should be imagined small enough not to rearrange the source charges. When mapping conductive paper, measure voltage on a grid, connect equal-voltage points to form equipotentials, then draw field lines perpendicular from high to low potential. Closely spaced equipotentials indicate a stronger field. Uncertainty comes from probe size, grid spacing, and voltage-meter resolution.',
    labZh: '可用小带电物体或电场模拟软件区分电力、电场和电势。设想的试探电荷应足够小，不会重新分布源电荷。在导电纸实验中，在网格上测量电压，把等电压点连接成等势线，再从高电势向低电势画出与等势线垂直的电场线。等势线越密，电场越强。不确定度来自探针大小、网格间距和电压表分辨率。',
    note: 'Electric field and electric potential are not the same. Field is a vector measured in N/C or V/m; potential is a scalar measured in volts. A point can have zero potential but nonzero field.',
    noteZh: '电场与电势不是同一个量。电场是矢量，单位 N/C 或 V/m；电势是标量，单位伏特。某点可以电势为零但电场不为零。',
    examples: [
      worked('Example 1: Coulomb force', '例题 1：库仑力', 'Two charges $+2.0\\ \\mu\\text{C}$ and $-3.0\\ \\mu\\text{C}$ are 0.30 m apart. Find the force magnitude. Use $k=9.0\\times10^9$.', '电荷 $+2.0\\ \\mu\\text{C}$ 与 $-3.0\\ \\mu\\text{C}$ 相距 0.30 m。求力的大小。取 $k=9.0\\times10^9$。', [{ type:'math', tex:'F=\\frac{(9.0\\times10^9)(2.0\\times10^{-6})(3.0\\times10^{-6})}{(0.30)^2}=0.60\\ \\text{N}' }, { type:'p', en:'The force is attractive because the charges have opposite signs.', zh:'两电荷异号，因此作用力为吸引力。' }]),
      worked('Example 2: Energy through voltage', '例题 2：电压与能量', 'How much potential energy does a $+4.0\\ \\mu$C charge gain across a 12 V increase?', '一个 $+4.0\\ \\mu$C 电荷跨越 12 V 的电势升高，势能增加多少？', [{ type:'math', tex:'\\Delta U=q\\Delta V=(4.0\\times10^{-6})(12)=4.8\\times10^{-5}\\ \\text{J}' }]),
    ],
    problems: [
      mc('If distance between two point charges doubles, force becomes:', '两点电荷距离加倍，力变为：', ['one fourth | 四分之一', 'one half | 二分之一', 'double | 两倍', 'four times | 四倍'], 0, 'The inverse-square law gives $F\\propto1/r^2$, so doubling $r$ divides force by four.', '平方反比律 $F\\propto1/r^2$，距离加倍使力除以四。'),
      input('A 2 C charge in a 5 N/C field experiences what force in N?', '2 C 电荷处于 5 N/C 电场中，受力多少 N？', '10', '$F=qE=(2)(5)=10$ N.', '$F=qE=(2)(5)=10$ N。'),
      mc('Electric field lines point:', '电场线方向为：', ['away from positive and toward negative | 从正电荷指向负电荷', 'toward positive only | 只指向正电荷', 'along equipotentials | 沿等势线', 'in closed circles around charge | 绕电荷成闭合圆'], 0, 'Direction is defined by the force on a positive test charge.', '电场方向定义为正试探电荷的受力方向。'),
      input('Find the energy change when a 3 C charge moves through a 4 V increase. Answer in J.', '3 C 电荷经历 4 V 的电势升高，势能变化多少 J？', '12', '$\\Delta U=q\\Delta V=3\\times4=12$ J.', '$\\Delta U=q\\Delta V=3\\times4=12$ J。'),
      mc('Equipotential lines cross electric field lines at:', '等势线与电场线相交角度为：', ['$90^\\circ$', '$0^\\circ$', '$45^\\circ$', 'any angle | 任意'], 0, 'The field points in the direction of greatest potential decrease, perpendicular to equipotentials.', '电场沿电势下降最快方向，因此与等势线垂直。'),
      input('Parallel plates differ by 120 V and are 0.040 m apart. Find field magnitude in V/m.', '平行板电势差 120 V、间距 0.040 m。求场强，单位 V/m。', '3000', '$E=\\Delta V/d=120/0.040=3000$ V/m.', '$E=\\Delta V/d=120/0.040=3000$ V/m。'),
    ],
  }), lesson({
    id: 'dc-circuits', title: 'Current, Resistance, and DC Circuits', titleZh: '电流、电阻与直流电路',
    intro: 'Electric current is the rate at which charge passes a cross section: $I=\\Delta Q/\\Delta t$. Conventional current points in the direction positive charge would move, opposite the electron drift in a metal. A battery maintains a potential difference that transfers energy to charges. Resistance describes how strongly a component opposes current. For an ohmic resistor at constant temperature, voltage and current obey $V=IR$. Electric power is the rate of electrical-energy transfer: $P=IV=I^2R=V^2/R$. Energy billed by utilities is often in kilowatt-hours, a unit of energy rather than power.',
    introZh: '电流是单位时间通过某横截面的电荷量：$I=\\Delta Q/\\Delta t$。传统电流方向定义为正电荷运动方向，在金属中与电子漂移方向相反。电池维持电势差，使电荷获得并传递能量。电阻表示元件阻碍电流的程度。温度恒定时，欧姆元件满足 $V=IR$。电功率是电能传递速率：$P=IV=I^2R=V^2/R$。电力公司常用千瓦时计费，它是能量单位而不是功率单位。',
    ideas: 'Series components carry the same current and have equivalent resistance $R_s=R_1+R_2+\\cdots$; source voltage divides among them. Parallel branches share the same voltage and satisfy $1/R_p=1/R_1+1/R_2+\\cdots$; current divides among branches. Adding a series resistor increases total resistance, while adding a parallel path decreases it. Kirchhoff’s junction rule is charge conservation: current entering a node equals current leaving. The loop rule is energy conservation: signed voltage changes around a closed loop sum to zero. An ammeter is placed in series and ideally has negligible resistance; a voltmeter is placed in parallel and ideally has very large resistance.',
    ideasZh: '串联元件通过相同电流，等效电阻为 $R_s=R_1+R_2+\\cdots$，电源电压在各元件间分配。并联支路两端电压相同，满足 $1/R_p=1/R_1+1/R_2+\\cdots$，总电流在支路间分配。增加串联电阻会增大总电阻，增加并联通路会减小总电阻。基尔霍夫节点定律体现电荷守恒：流入节点的电流等于流出电流。回路定律体现能量守恒：闭合回路中带符号的电势变化之和为零。电流表串联接入且理想电阻近零；电压表并联接入且理想电阻极大。',
    equations: ['I=\\frac{\\Delta Q}{\\Delta t}', 'V=IR', 'P=IV', 'R_s=\\sum R_i', '\\frac1{R_p}=\\sum\\frac1{R_i}'],
    lab: 'Build circuits only with the power disconnected, then check connections before energizing. Measure current at several series points to test charge conservation and voltage across each resistor to test the loop rule. A graph of $V$ versus $I$ for an ohmic resistor is linear with slope $R$. A filament lamp may curve because its temperature and resistance rise. Real meters alter a circuit slightly, so meter resistance is an experimental limitation rather than an invisible detail.',
    labZh: '搭建电路时先断开电源，检查连接后再通电。在串联电路多个位置测电流以检验电荷守恒，测各电阻电压以检验回路定律。欧姆电阻的 $V$-$I$ 图为直线，斜率等于 $R$。灯丝灯的图线可能弯曲，因为灯丝温度与电阻会升高。真实电表会轻微改变电路，因此电表内阻是实验局限，而不是可以忽略的细节。',
    note: 'Current is not used up by a resistor. Charge flows continuously; the resistor transfers electrical potential energy into thermal energy. In a series loop, the current after a resistor equals the current before it.',
    noteZh: '电流不会被电阻“用掉”。电荷持续流动，电阻把电势能转化为热能。在串联回路中，流出电阻的电流等于流入电阻的电流。',
    examples: [
      worked('Example 1: Series circuit', '例题 1：串联电路', 'A 12 V battery powers 2 Ω and 4 Ω resistors in series. Find total current.', '12 V 电池连接 2 Ω 与 4 Ω 串联电阻。求总电流。', [{ type:'math', tex:'R_{eq}=2+4=6\\ \\Omega,\\qquad I=\\frac{V}{R}=\\frac{12}{6}=2\\ \\text{A}' }]),
      worked('Example 2: Parallel circuit', '例题 2：并联电路', 'A 6 Ω resistor and a 3 Ω resistor are in parallel across 12 V. Find equivalent resistance and total current.', '6 Ω 与 3 Ω 电阻并联在 12 V 电源两端。求等效电阻和总电流。', [{ type:'math', tex:'\\frac1{R_{eq}}=\\frac16+\\frac13=\\frac12\\Rightarrow R_{eq}=2\\ \\Omega' }, { type:'math', tex:'I_{total}=\\frac{12}{2}=6\\ \\text{A}' }]),
    ],
    problems: [
      input('12 C passes a point in 3 s. Find current in A.', '3 s 内有 12 C 电荷通过某点。求电流，单位 A。', '4', '$I=Q/t=12/3=4$ A.', '$I=Q/t=12/3=4$ A。'),
      input('A 5 Ω resistor carries 2 A. Find voltage in V.', '5 Ω 电阻中电流为 2 A。求电压，单位 V。', '10', '$V=IR=2\\times5=10$ V.', '$V=IR=2\\times5=10$ V。'),
      mc('In a series circuit, every component has the same:', '串联电路中，每个元件相同的是：', ['current | 电流', 'voltage | 电压', 'resistance | 电阻', 'power | 功率'], 0, 'There is only one path, so the charge-flow rate is the same everywhere.', '只有一条通路，因此各处电荷流率相同。'),
      mc('Adding another parallel branch makes total resistance:', '增加一条并联支路会使总电阻：', ['decrease | 减小', 'increase | 增大', 'stay fixed | 不变', 'become infinite | 变无穷大'], 0, 'An additional path increases total conductance and lowers equivalent resistance.', '增加通路会提高总电导，从而降低等效电阻。'),
      input('A device uses 24 W at 12 V. Find current in A.', '设备在 12 V 下功率为 24 W。求电流，单位 A。', '2', '$I=P/V=24/12=2$ A.', '$I=P/V=24/12=2$ A。'),
      mc('A voltmeter should be connected:', '电压表应当：', ['in parallel | 并联', 'in series | 串联', 'without a circuit | 脱离电路', 'across the battery only | 只能跨电池'], 0, 'A voltmeter compares potential at two points and is therefore placed across a component.', '电压表比较两点电势，因此跨接在元件两端。'),
    ],
  })],
}

export const magnetismUnit = {
  id: 'magnetism-induction', title: 'Magnetism and Electromagnetic Induction', titleZh: '磁与电磁感应',
  lessons: [lesson({
    id: 'magnetic-fields-induction', title: 'Magnetic Fields, Motors, and Induction', titleZh: '磁场、电动机与电磁感应',
    intro: 'Magnetic fields are produced by moving charges and magnetic materials. Outside a bar magnet, field lines run from north to south and form closed loops. A magnetic field exerts a force on a moving charge perpendicular to both velocity and field: $F=qvB\\sin\\theta$. Because the force is perpendicular to motion, it changes direction but does no work and cannot change the particle’s speed. A current-carrying wire experiences $F=ILB\\sin\\theta$, the basis of electric motors and loudspeakers.',
    introZh: '运动电荷和磁性材料会产生磁场。条形磁铁外部的磁场线从北极指向南极，并形成闭合回路。磁场对运动电荷的作用力垂直于速度和磁场：$F=qvB\\sin\\theta$。由于力与运动垂直，它改变运动方向但不做功，因此不能改变粒子速率。载流导线受到 $F=ILB\\sin\\theta$ 的力，这是电动机和扬声器的基础。',
    ideas: 'A changing magnetic flux through a loop induces an emf. Magnetic flux is $\\Phi_B=BA\\cos\\theta$ for a uniform field and flat loop, where $\\theta$ is measured from the loop’s normal. Faraday’s law states $|\\mathcal E|=N|\\Delta\\Phi_B/\\Delta t|$. Lenz’s law gives direction: induced current creates a field that opposes the change in flux, a direct consequence of energy conservation. Generators move conductors through magnetic fields to convert mechanical energy to electrical energy; motors reverse the process. Transformers use changing flux to step AC voltage up or down, with $V_s/V_p=N_s/N_p$ ideally.',
    ideasZh: '穿过线圈的磁通量发生变化时会产生感应电动势。匀强磁场穿过平面线圈的磁通量为 $\\Phi_B=BA\\cos\\theta$，其中 $\\theta$ 从线圈法线量起。法拉第定律为 $|\\mathcal E|=N|\\Delta\\Phi_B/\\Delta t|$。楞次定律决定方向：感应电流产生的磁场总是阻碍磁通量的变化，这是能量守恒的直接结果。发电机让导体在磁场中运动，把机械能转化为电能；电动机执行相反转换。变压器利用变化磁通升高或降低交流电压，理想情况下 $V_s/V_p=N_s/N_p$。',
    equations: ['F=qvB\\sin\\theta', 'F=ILB\\sin\\theta', '\\Phi_B=BA\\cos\\theta', '|\\mathcal E|=N\\left|\\frac{\\Delta\\Phi_B}{\\Delta t}\\right|', '\\frac{V_s}{V_p}=\\frac{N_s}{N_p}'],
    lab: 'Map a magnet with a compass, remembering the needle itself aligns tangent to the local field. Around a straight current-carrying wire, reverse the current and observe the compass deflection reverse. For induction, change one factor at a time: magnet speed, field strength, coil area, or number of turns. A stationary magnet and coil produce no sustained emf because flux is not changing. Record both magnitude and sign so the data test Faraday’s and Lenz’s laws.',
    labZh: '用小磁针绘制磁场时，要记住磁针方向与当地磁场相切。研究直导线周围磁场时，反转电流并观察磁针偏转也反向。研究电磁感应时，每次只改变一个因素：磁铁速度、磁场强度、线圈面积或匝数。静止的磁铁和线圈不会产生持续电动势，因为磁通量没有变化。应同时记录大小和正负方向，使数据能检验法拉第定律和楞次定律。',
    note: 'A magnetic field does not push a stationary point charge. Magnetic force requires motion relative to the field, and it is zero when velocity is parallel or antiparallel to the field.',
    noteZh: '磁场不会推动静止的点电荷。磁力要求电荷相对磁场运动；当速度与磁场平行或反平行时，磁力为零。',
    examples: [
      worked('Example 1: Force on a wire', '例题 1：导线受力', 'A 0.20 m wire carries 3.0 A perpendicular to a 0.50 T field. Find the force.', '0.20 m 长导线中电流为 3.0 A，且与 0.50 T 磁场垂直。求受力。', [{ type:'math', tex:'F=ILB=(3.0)(0.20)(0.50)=0.30\\ \\text{N}' }]),
      worked('Example 2: Induced emf', '例题 2：感应电动势', 'Flux through a 50-turn coil changes by 0.020 Wb in 0.10 s. Find average emf magnitude.', '50 匝线圈中的磁通量在 0.10 s 内变化 0.020 Wb。求平均感应电动势大小。', [{ type:'math', tex:'|\\mathcal E|=N\\frac{|\\Delta\\Phi|}{\\Delta t}=50\\frac{0.020}{0.10}=10\\ \\text{V}' }]),
    ],
    problems: [
      mc('Magnetic force on a moving charge is greatest when velocity is:', '运动电荷所受磁力最大时，速度与磁场：', ['perpendicular to the field | 垂直', 'parallel to the field | 平行', 'zero | 为零', 'at any angle equally | 任意角都相同'], 0, '$\\sin90^\\circ=1$ gives the maximum force.', '$\\sin90^\\circ=1$，磁力最大。'),
      input('A 2 A current flows through 0.50 m of wire perpendicular to a 3 T field. Find force in N.', '2 A 电流流过磁场中 0.50 m 长导线，导线与 3 T 磁场垂直。求力，单位 N。', '3', '$F=ILB=2(0.50)(3)=3$ N.', '$F=ILB=2(0.50)(3)=3$ N。'),
      mc('A magnetic force on a charged particle can directly change its:', '磁力可以直接改变带电粒子的：', ['direction but not speed | 方向但不改变速率', 'speed only | 仅速率', 'mass | 质量', 'charge | 电荷量'], 0, 'The perpendicular force does no work, so kinetic energy and speed stay constant.', '垂直力不做功，因此动能和速率不变。'),
      mc('An emf is induced in a loop when:', '线圈中产生感应电动势的条件是：', ['magnetic flux changes | 磁通量变化', 'flux is merely nonzero | 磁通量只要不为零', 'the loop is stationary forever | 线圈永久静止', 'resistance is infinite | 电阻无穷大'], 0, 'Faraday’s law depends on the rate of flux change.', '法拉第定律取决于磁通量的变化率。'),
      input('A 20-turn coil has flux change 0.50 Wb in 2.0 s. Find emf magnitude in V.', '20 匝线圈的磁通量在 2.0 s 内变化 0.50 Wb。求电动势大小，单位 V。', '5', '$|\\mathcal E|=20(0.50/2.0)=5$ V.', '$|\\mathcal E|=20(0.50/2.0)=5$ V。'),
      mc('Lenz’s law is most directly connected to conservation of:', '楞次定律最直接体现：', ['energy | 能量守恒', 'charge sign | 电荷符号', 'mass only | 仅质量守恒', 'temperature | 温度'], 0, 'If induced current reinforced the change without input, energy would appear from nothing.', '若感应电流无条件强化原变化，就会凭空产生能量。'),
    ],
  })],
}

export const modernUnit = {
  id: 'modern-nuclear-physics', title: 'Modern and Nuclear Physics', titleZh: '近代物理与核物理',
  lessons: [lesson({
    id: 'quantum-atomic-nuclear', title: 'Quantum, Atomic, and Nuclear Physics', titleZh: '量子、原子与核物理',
    intro: 'Modern physics begins where classical models become incomplete. Light behaves as both a wave and a stream of photons whose energy is $E=hf$. The photoelectric effect shows that one photon transfers energy to one electron: below a threshold frequency no electrons are emitted, regardless of intensity. Increasing intensity above threshold increases the number of emitted electrons, while increasing frequency raises their maximum kinetic energy. Matter also has wave properties, summarized by de Broglie wavelength $\\lambda=h/p$. These ideas do not mean an object is secretly switching identities; wave and particle models predict different aspects of the same quantum system.',
    introZh: '当经典模型不再完整时，就进入近代物理。光既表现出波动性，也可看作能量为 $E=hf$ 的光子流。光电效应说明一个光子把能量传给一个电子：频率低于阈值时，无论强度多大都不会逸出电子。频率高于阈值后，提高强度会增加逸出电子数，提高频率则会增加电子最大动能。物质也具有波动性质，其德布罗意波长为 $\\lambda=h/p$。这并不表示物体在两种身份间暗中切换，而是波模型与粒子模型分别预测同一量子系统的不同方面。',
    ideas: 'Atoms have quantized energy levels. An electron moving to a lower level emits a photon with $hf=|\\Delta E|$; absorption requires the matching photon energy. The nucleus contains protons and neutrons bound by the strong interaction. Mass-energy equivalence $E=mc^2$ means a bound nucleus has less mass than its separated particles; the mass defect corresponds to binding energy. Unstable nuclei decay randomly with a characteristic half-life. Alpha decay emits a helium nucleus, beta decay changes a neutron and proton while emitting a beta particle, and gamma decay emits a high-energy photon. Fission splits heavy nuclei and can sustain a controlled chain reaction; fusion joins light nuclei and powers stars. In every nuclear equation, charge number and nucleon number balance.',
    ideasZh: '原子具有量子化能级。电子跃迁到较低能级时发射满足 $hf=|\\Delta E|$ 的光子；吸收则要求光子能量恰好匹配。原子核由质子和中子组成，并由强相互作用束缚。质能关系 $E=mc^2$ 表明，束缚核的质量小于各粒子分离时的总质量；质量亏损对应结合能。不稳定原子核以随机方式衰变，但具有特征半衰期。α 衰变发射氦核，β 衰变在中子和质子间转化并发射 β 粒子，γ 衰变发射高能光子。裂变把重核分开，可形成受控链式反应；聚变把轻核结合，是恒星能量来源。所有核反应方程中，电荷数和核子数都必须守恒。',
    equations: ['E=hf=\\frac{hc}{\\lambda}', '\\lambda=\\frac{h}{p}', 'E=mc^2', 'N=N_0\\left(\\frac12\\right)^{t/t_{1/2}}'],
    lab: 'Spectroscopy provides direct evidence for quantized atomic levels. View discharge tubes only with approved equipment, record line wavelengths, and compare patterns rather than expecting a continuous rainbow. Radioactive-decay simulations illustrate that individual events are unpredictable while large samples follow a stable exponential trend. Plot remaining nuclei against time, identify successive halving intervals, and distinguish activity (decays per second) from the number of undecayed nuclei. Radiation work requires trained supervision, shielding, distance, and minimized exposure time.',
    labZh: '光谱学为原子能级量子化提供直接证据。只能使用合规设备观察放电管，记录谱线波长，并比较离散图样，而不是期待连续彩虹。放射性衰变模拟说明，单个事件不可预测，但大量原子核呈稳定指数趋势。把剩余核数对时间作图，找出连续减半区间，并区分活度（每秒衰变数）与未衰变核数。涉及辐射的实验必须由受训人员监督，并采用屏蔽、增大距离和缩短暴露时间等措施。',
    note: 'Half-life is not the time when every original nucleus has decayed, and it is not changed by sample size. After each half-life, half of whatever radioactive nuclei remain are expected to survive.',
    noteZh: '半衰期不是所有原始原子核都衰变完的时间，也不随样品大小改变。每经过一个半衰期，预计当时剩余的放射性原子核中有一半继续存在。',
    examples: [
      worked('Example 1: Photon energy', '例题 1：光子能量', 'Find the energy of a $6.0\\times10^{14}$ Hz photon using $h=6.63\\times10^{-34}$ J·s.', '取 $h=6.63\\times10^{-34}$ J·s，求频率 $6.0\\times10^{14}$ Hz 光子的能量。', [{ type:'math', tex:'E=hf=(6.63\\times10^{-34})(6.0\\times10^{14})=3.98\\times10^{-19}\\ \\text{J}' }]),
      worked('Example 2: Half-life', '例题 2：半衰期', 'A 160 mg sample has a 6 h half-life. How much remains after 18 h?', '160 mg 样品半衰期为 6 h。18 h 后剩多少？', [{ type:'p', en:'Eighteen hours is three half-lives.', zh:'18 小时等于三个半衰期。' }, { type:'math', tex:'N=160\\left(\\frac12\\right)^3=20\\ \\text{mg}' }]),
    ],
    problems: [
      mc('Photon energy increases when light frequency:', '当光频率怎样变化时，光子能量增加？', ['increases | 增大', 'decreases | 减小', 'stays unrelated | 与其无关', 'becomes zero only | 只有变零'], 0, '$E=hf$, so energy is directly proportional to frequency.', '$E=hf$，能量与频率成正比。'),
      mc('Below the photoelectric threshold frequency, increasing intensity will:', '光频率低于光电效应阈值时，增加光强会：', ['still emit no electrons | 仍不发射电子', 'emit faster electrons | 发射更快电子', 'lower the work function | 降低逸出功', 'change Planck’s constant | 改变普朗克常量'], 0, 'Each photon still lacks the minimum energy needed to release one electron.', '每个光子的能量仍不足以释放一个电子。'),
      input('A sample has 80 g initially. How much remains after two half-lives? Answer in g.', '样品初始 80 g。两个半衰期后剩多少 g？', '20', 'Two halvings give $80\\to40\\to20$ g.', '两次减半：$80\\to40\\to20$ g。'),
      mc('Gamma radiation is:', 'γ 辐射是：', ['a high-energy photon | 高能光子', 'a helium nucleus | 氦核', 'an electron only | 仅电子', 'a proton pair | 质子对'], 0, 'Gamma decay emits electromagnetic radiation from the nucleus.', 'γ 衰变从原子核发射电磁辐射。'),
      mc('In a balanced nuclear equation, which must be conserved?', '配平核反应方程时必须守恒的是：', ['charge number and nucleon number | 电荷数与核子数', 'half-life | 半衰期', 'volume | 体积', 'temperature only | 仅温度'], 0, 'Totals of atomic number and mass number match on both sides.', '方程两边原子序数与质量数总和分别相等。'),
      mc('The Sun’s energy is produced mainly by:', '太阳能量主要来自：', ['fusion | 聚变', 'fission | 裂变', 'chemical burning | 化学燃烧', 'friction | 摩擦'], 0, 'Light nuclei fuse into more tightly bound nuclei, releasing binding energy.', '轻核聚变成结合更紧密的核，并释放结合能。'),
    ],
  })],
}

export default [foundationsUnit, thermalUnit, wavesUnit, opticsUnit, electricityUnit, magnetismUnit, modernUnit]
