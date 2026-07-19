// Dependency-free inline-SVG line chart for diagnostic score history.
// data: [{ label: string, pct: number(0-100) }] in chronological order.
export function TrendChart({ data }) {
  const W = 340, H = 170, padL = 30, padR = 12, padT = 12, padB = 26
  const iw = W - padL - padR, ih = H - padT - padB
  const n = data.length
  const x = (i) => (n <= 1 ? padL + iw / 2 : padL + (iw * i) / (n - 1))
  const y = (pct) => padT + ih * (1 - Math.max(0, Math.min(100, pct)) / 100)
  const line = data.map((d, i) => `${x(i).toFixed(1)},${y(d.pct).toFixed(1)}`).join(' ')

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="trend-chart" preserveAspectRatio="xMidYMid meet" role="img">
      {[0, 25, 50, 75, 100].map(g => (
        <g key={g}>
          <line x1={padL} y1={y(g)} x2={W - padR} y2={y(g)} className="trend-grid" />
          <text x={padL - 6} y={y(g) + 3.5} className="trend-axis" textAnchor="end">{g}</text>
        </g>
      ))}
      {n > 1 && <polyline points={line} className="trend-line" fill="none" />}
      {data.map((d, i) => (
        <g key={i}>
          <circle cx={x(i)} cy={y(d.pct)} r="3.5" className="trend-dot" />
          <text x={x(i)} y={y(d.pct) - 8} className="trend-value" textAnchor="middle">{Math.round(d.pct)}</text>
          <text x={x(i)} y={H - 9} className="trend-axis" textAnchor="middle">{d.label}</text>
        </g>
      ))}
    </svg>
  )
}
