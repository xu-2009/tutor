import { useLang } from '../i18n.jsx'
import { MathText, TeX } from './MathText.jsx'

// Renders one bilingual text object {en, zh} according to language mode.
function BiText({ obj, as: Tag = 'p' }) {
  const { lang } = useLang()
  if (!obj) return null
  if (lang === 'en') return <Tag><MathText text={obj.en} /></Tag>
  if (lang === 'zh') return <Tag><MathText text={obj.zh || obj.en} /></Tag>
  return (
    <>
      <Tag><MathText text={obj.en} /></Tag>
      {obj.zh && obj.zh !== obj.en && (
        <div className="zh-sub"><MathText text={obj.zh} /></div>
      )}
    </>
  )
}

function Block({ block }) {
  const { lang } = useLang()
  switch (block.type) {
    case 'h2':
      return <BiText obj={block} as="h2" />
    case 'h3':
      return <BiText obj={block} as="h3" />
    case 'p':
      return <BiText obj={block} />
    case 'math':
      return <div className="block-math"><TeX tex={block.tex} display /></div>
    case 'note':
      return <div className="block-note"><BiText obj={block} as="div" /></div>
    case 'list':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              <MathText text={lang === 'zh' ? (item.zh || item.en) : item.en} />
              {lang === 'both' && item.zh && item.zh !== item.en && (
                <div className="zh-sub"><MathText text={item.zh} /></div>
              )}
            </li>
          ))}
        </ul>
      )
    case 'example':
      return (
        <div className="block-example">
          <div className="ex-head"><MathText text={lang === 'zh' ? (block.title?.zh || block.title?.en || '例题') : (block.title?.en || 'Example')} /></div>
          <div className="ex-body">
            <BiText obj={block.problem} />
            <div className="ex-sol-label">{lang === 'zh' ? '解答' : lang === 'en' ? 'Solution' : 'Solution · 解答'}</div>
            <Blocks blocks={block.solution || []} bare />
          </div>
        </div>
      )
    default:
      return null
  }
}

export default function Blocks({ blocks, bare }) {
  const inner = (blocks || []).map((b, i) => <Block key={i} block={b} />)
  return bare ? <>{inner}</> : <div className="blocks">{inner}</div>
}
