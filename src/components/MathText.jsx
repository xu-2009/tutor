import katex from 'katex'
import 'katex/dist/katex.min.css'

// Renders a string that may contain $...$ inline math segments.
export function MathText({ text }) {
  if (!text) return null
  const parts = String(text).split(/(\$[^$]+\$)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          return <TeX key={i} tex={part.slice(1, -1)} />
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

export function TeX({ tex, display = false }) {
  let html
  try {
    html = katex.renderToString(tex, { displayMode: display, throwOnError: false })
  } catch {
    return <code>{tex}</code>
  }
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}
