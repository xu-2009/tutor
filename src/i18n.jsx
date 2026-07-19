import { createContext, useContext, useState, useEffect } from 'react'

// UI strings. lang = 'en' | 'zh' | 'both'
// For 'both', pages show EN as primary and ZH as secondary where it makes sense;
// simple UI chrome falls back to ZH.
const STRINGS = {
  appName: { en: 'ScholarPath', zh: '学径 ScholarPath' },
  navHome: { en: 'Home', zh: '首页' },
  navCourses: { en: 'Courses', zh: '课程' },
  login: { en: 'Log in', zh: '登录' },
  logout: { en: 'Log out', zh: '退出' },
  signup: { en: 'Create account', zh: '注册账号' },
  heroTitle1: { en: 'Master High School,', zh: '高中课程，' },
  heroTitle2: { en: 'One Lesson at a Time', zh: '一课一进步' },
  heroSub: {
    en: 'Free high school courses in Math, Science, English, History and World Languages — plus a full lineup of AP courses. Learn a lesson, practice right away, and your progress is always saved.',
    zh: '免费的高中课程：数学、科学、英语、历史与世界语言，外加完整的 AP 课程。学完一课立刻练习，学习进度自动保存。',
  },
  ctaBrowse: { en: 'Browse Courses', zh: '浏览课程' },
  ctaStart: { en: 'Get Started — It’s Free', zh: '立即开始 · 完全免费' },
  featLearnT: { en: 'Learn by Lessons', zh: '按课时学习' },
  featLearnP: { en: 'Every course is organized into units and short lessons with clear explanations and worked examples.', zh: '每门课程都分成单元和短课时，讲解清晰，配有例题。' },
  featPracticeT: { en: 'Practice Instantly', zh: '即学即练' },
  featPracticeP: { en: 'Each lesson ends with a problem set — multiple choice and free response — graded instantly with explanations.', zh: '每课配练习题（选择题+填空题），即时判分并给出解析。' },
  featProgressT: { en: 'Progress Saved', zh: '进度保存' },
  featProgressP: { en: 'Log in with just your name and a password. Completed lessons and quiz scores are remembered.', zh: '只需姓名和密码登录，完成的课时和测验分数都会被记住。' },
  featBilingualT: { en: 'Bilingual Support', zh: '中英双语' },
  featBilingualP: { en: 'Switch between English, 中文, or side-by-side bilingual mode anytime.', zh: '随时切换英文、中文或双语对照模式。' },
  coursesTitle: { en: 'Course Catalog', zh: '课程列表' },
  coursesSub: { en: 'Pick a course to start learning. Your progress in each course is tracked.', zh: '选择一门想上的课开始学习，每门课的进度都会记录。' },
  subjMath: { en: 'Mathematics', zh: '数学' },
  subjScience: { en: 'Science', zh: '科学' },
  subjEnglish: { en: 'English', zh: '英语' },
  subjHistory: { en: 'History & Social Science', zh: '历史与社会科学' },
  subjLanguage: { en: 'World Languages', zh: '世界语言' },
  units: { en: 'units', zh: '个单元' },
  lessons: { en: 'lessons', zh: '节课' },
  complete: { en: 'complete', zh: '已完成' },
  continueLearning: { en: 'Continue', zh: '继续学习' },
  startCourse: { en: 'Start', zh: '开始学习' },
  unit: { en: 'Unit', zh: '单元' },
  practice: { en: 'Practice Problems', zh: '练习题' },
  practiceSub: { en: 'Answer every question, then submit to see your score. You need all questions answered to finish the lesson.', zh: '回答所有问题后提交查看分数，答完所有题才能完成本课。' },
  check: { en: 'Check', zh: '检查' },
  submitQuiz: { en: 'Submit Answers', zh: '提交答案' },
  yourScore: { en: 'Your score', zh: '你的得分' },
  retry: { en: 'Try Again', zh: '再试一次' },
  markDone: { en: 'Lesson complete! Progress saved.', zh: '本课完成！进度已保存。' },
  correct: { en: 'Correct!', zh: '答对了！' },
  incorrect: { en: 'Not quite.', zh: '再想想。' },
  answer: { en: 'Answer', zh: '答案' },
  yourAnswer: { en: 'Your answer', zh: '你的答案' },
  prevLesson: { en: '← Previous', zh: '← 上一课' },
  nextLesson: { en: 'Next →', zh: '下一课 →' },
  backToCourse: { en: 'Back to course', zh: '返回课程' },
  loginTitle: { en: 'Welcome back', zh: '欢迎回来' },
  loginHint: { en: 'Log in with your name and password to continue where you left off.', zh: '用你的姓名和密码登录，继续上次的学习进度。' },
  signupTitle: { en: 'Create your account', zh: '创建你的账号' },
  signupHint: { en: 'No email needed — just your name and a password you create.', zh: '不需要邮箱，只需姓名和自己创建的密码。' },
  studentName: { en: 'Student name', zh: '学生姓名' },
  password: { en: 'Password', zh: '密码' },
  confirmPassword: { en: 'Confirm password', zh: '确认密码' },
  noAccount: { en: 'New here?', zh: '第一次来？' },
  haveAccount: { en: 'Already have an account?', zh: '已经有账号了？' },
  errNameTaken: { en: 'That name is already registered. Try logging in.', zh: '这个姓名已被注册，请直接登录。' },
  errBadLogin: { en: 'Name or password is incorrect.', zh: '姓名或密码不正确。' },
  errNoMatch: { en: 'Passwords do not match.', zh: '两次输入的密码不一致。' },
  errEmpty: { en: 'Please fill in every field.', zh: '请填写所有字段。' },
  errShortPw: { en: 'Password must be at least 6 characters.', zh: '密码至少 6 个字符。' },
  errNeedsConfirm: { en: 'Account created, but email confirmation is on in Supabase — turn it off in the dashboard to log in.', zh: '账号已创建，但 Supabase 开启了邮箱验证——请在后台关闭后再登录。' },
  errSaveFailed: { en: 'Could not save your account. Please check your connection and try again.', zh: '账号保存失败，请检查网络后重试。' },
  savingProgress: { en: 'Saving…', zh: '正在保存…' },
  saveFailed: { en: 'Couldn’t save your progress — check your connection.', zh: '进度保存失败——请检查网络。' },
  loadFailed: { en: 'Couldn’t load this course. Please refresh the page.', zh: '课程加载失败，请刷新页面。' },
  refresh: { en: 'Refresh', zh: '刷新' },
  diagnostic: { en: 'Find My Gaps', zh: '查缺补漏' },
  diagnosticIntro: { en: 'A quick diagnostic covering the whole course — two questions per lesson. Your results show which lessons you’ve mastered and which to review.', zh: '一场覆盖整门课的快速诊断——每节课两道题。结果会告诉你哪些课已掌握、哪些需要复习。' },
  diagnosticSubmit: { en: 'Submit and see my gaps', zh: '提交，查看结果' },
  diagnosticScore: { en: 'Diagnostic score', zh: '诊断得分' },
  diagnosticWeak: { en: 'Review these lessons', zh: '建议复习这些课' },
  diagnosticStrong: { en: 'You can skip these', zh: '这些课可以跳过' },
  diagnosticWeakEmpty: { en: 'Nothing to review — great job!', zh: '没有需要复习的——太棒了！' },
  diagnosticStrongEmpty: { en: 'No lesson fully mastered yet — start with the list above.', zh: '还没有完全掌握的课——先从上面的列表学起。' },
  diagnosticStudy: { en: 'Study', zh: '去学习' },
  diagnosticCanSkip: { en: 'mastered', zh: '已掌握' },
  diagnosticRetake: { en: 'Retake', zh: '重新测' },
  focusStudy: { en: 'Focus', zh: '重点' },
  diagnosticHistory: { en: 'Score history', zh: '历史成绩' },
  diagnosticAttempts: { en: 'attempts', zh: '测验次数' },
  diagnosticBest: { en: 'best', zh: '最好' },
  diagnosticScopeIntro: { en: 'Choose what to test: the whole course, or a single unit.', zh: '选择测验范围：整个科目，或某一个单元。' },
  diagnosticScopeAll: { en: 'Whole course', zh: '整个科目' },
  diagnosticQuestions: { en: 'questions', zh: '题' },
  diagnosticLast: { en: 'last', zh: '上次' },
  retrySave: { en: 'Retry save', zh: '重试保存' },
  errNotConfigured: { en: 'Accounts are unavailable right now (server not configured). Please try again later.', zh: '暂时无法登录（服务器未配置），请稍后再试。' },
  loginRequired: { en: 'Please log in to view courses and save your progress.', zh: '请先登录，以查看课程并保存学习进度。' },
  score: { en: 'Score', zh: '得分' },
  notebook: { en: 'Notebook', zh: '笔记本' },
  notebookEmpty: { en: 'No notes yet. Open a lesson and select text you want to keep, or write your first note above.', zh: '还没有笔记。打开一节课并选中想保留的文字，或在上方写下第一条笔记。' },
  newNotePlaceholder: { en: 'Copy a key point here, or write your own understanding…', zh: '把重要的知识点拷贝到这里，或写下你自己的理解……' },
  saveNote: { en: 'Save note', zh: '保存笔记' },
  addToNotebook: { en: 'Add to Notebook', zh: '摘录到笔记本' },
  fromLesson: { en: 'From', zh: '来自' },
  edit: { en: 'Edit', zh: '编辑' },
  delete: { en: 'Delete', zh: '删除' },
  save: { en: 'Save', zh: '保存' },
  cancel: { en: 'Cancel', zh: '取消' },
  confirmDeleteNote: { en: 'Delete this note?', zh: '确定删除这条笔记吗？' },
  footer: { en: 'ScholarPath — free high school & AP courses.', zh: 'ScholarPath 学径 — 为高中生提供免费课程与 AP 课程。' },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('sp_lang') || 'both')
  useEffect(() => { localStorage.setItem('sp_lang', lang) }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

// Some choice strings were authored bilingually in one string ("area 面积").
// In English mode, show only the English part; keep the whole string otherwise.
export function choiceText(choice, lang) {
  if (lang !== 'en') return choice
  const s = String(choice)
  const m = s.match(/[一-鿿]/)
  if (!m) return s
  const en = s.slice(0, m.index).trim()
  return en || s
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  // t(key) → UI string in current lang ('both' shows "EN · 中文" for short strings)
  const t = (key) => {
    const s = STRINGS[key]
    if (!s) return key
    if (lang === 'en') return s.en
    if (lang === 'zh') return s.zh
    return s.en === s.zh ? s.en : `${s.en} · ${s.zh}`
  }
  // pick({en, zh}) for content objects
  const pick = (obj) => {
    if (!obj) return null
    if (lang === 'zh' && obj.zh) return obj.zh
    return obj.en
  }
  return { lang, setLang, t, pick }
}
