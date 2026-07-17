# Course data file schema

Each file in `src/data/courses/` default-exports ONE course object. Plain JavaScript (ESM), no imports needed.

```js
export default {
  id: 'ap-calculus-ab',            // must match filename
  title: 'AP Calculus AB',         // English title
  titleZh: 'AP 微积分 AB',          // Chinese title
  subject: 'math',                 // 'math' | 'science' | 'english'
  level: 'AP',                     // 'AP' | 'Honors'
  description: 'One-sentence English description.',
  descriptionZh: '一句话中文描述。',
  units: [
    {
      id: 'limits',                        // kebab-case, unique within course
      title: 'Limits and Continuity',
      titleZh: '极限与连续',
      lessons: [
        {
          id: 'intro-to-limits',           // kebab-case, unique within unit
          title: 'Introduction to Limits',
          titleZh: '极限入门',
          content: [ /* content blocks, see below */ ],
          problems: [ /* practice problems, see below */ ],
        },
      ],
    },
  ],
}
```

## Content blocks (the lesson "textbook")

Text strings may contain inline LaTeX between single dollar signs: `'The slope is $m = \\frac{y_2-y_1}{x_2-x_1}$.'`
IMPORTANT: in JS strings every LaTeX backslash must be escaped: `\\frac`, `\\lim`, `\\to`.
Every `en` field MUST have a matching `zh` translation (real translation, not pinyin).

```js
{ type: 'h2', en: 'Section heading', zh: '章节标题' }
{ type: 'h3', en: 'Sub heading', zh: '小标题' }
{ type: 'p',  en: 'Paragraph with $x^2$ math.', zh: '含 $x^2$ 公式的段落。' }
{ type: 'math', tex: '\\lim_{x \\to a} f(x) = L' }        // display equation (no $ signs, no en/zh)
{ type: 'note', en: 'Key idea / warning.', zh: '要点/注意。' }
{ type: 'list', items: [ { en: 'Item 1', zh: '第一条' }, { en: 'Item 2 with $\\pi$', zh: '第二条 $\\pi$' } ] }
{
  type: 'example',
  title: { en: 'Example 1', zh: '例题 1' },
  problem: { en: 'Evaluate $\\lim_{x\\to 2}(3x+1)$.', zh: '求 $\\lim_{x\\to 2}(3x+1)$。' },
  solution: [ /* array of p / math / list blocks */ ],
}
```

## Practice problems

Two types. `explanation` is REQUIRED on every problem (shown after grading).

```js
// Multiple choice — `answer` is the 0-based index of the correct choice.
{
  type: 'mc',
  question: { en: 'What is $\\frac{d}{dx} x^3$?', zh: '$\\frac{d}{dx} x^3$ 是多少？' },
  choices: ['$3x^2$', '$x^2$', '$3x$', '$\\frac{x^4}{4}$'],   // strings, may contain $math$
  answer: 0,
  explanation: { en: 'Power rule: bring down the exponent.', zh: '幂法则：指数下移作系数，指数减一。' },
}

// Free response — answer checked case-insensitively after trimming.
// `answer` must be short and unambiguous (a number like '12' or '3/4', or one word).
// Put alternate correct forms in `accept`. Tell the student the expected format
// in the question itself (e.g. 'Give your answer as a fraction a/b.').
{
  type: 'input',
  question: { en: 'If $f(x)=2x+5$, find $f(4)$.', zh: '若 $f(x)=2x+5$，求 $f(4)$。' },
  answer: '13',
  accept: ['13.0'],
  explanation: { en: '$f(4) = 2(4)+5 = 13$.', zh: '$f(4)=2(4)+5=13$。' },
}
```

## Quality bar

- Per lesson: 350–700 words of teaching content (h2/h3 sections, at least one `note`,
  at least 2 worked `example` blocks for math/science) + 6–8 practice problems
  (mix of `mc` and `input`, ordered easy → hard).
- Explanations must actually teach, not just restate the answer.
- All math in LaTeX. Chemistry formulas can use LaTeX (`$\\text{H}_2\\text{O}$` or `$2H_2 + O_2 \\to 2H_2O$`).
- English course: no math needed; focus on grammar, vocabulary, rhetoric, literature analysis, essay writing.
