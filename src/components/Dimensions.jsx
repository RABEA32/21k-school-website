import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Seven points on a circle; the active one is highlighted and its description shown.
export default function Dimensions({ items }) {
  const [active, setActive] = useState(0)
  const R = 42
  const points = items.map((_, i) => {
    const a = (i / items.length) * Math.PI * 2 - Math.PI / 2
    return [50 + R * Math.cos(a), 50 + R * Math.sin(a)]
  })

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-[460px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgb(255 255 255 / 0.15)" strokeWidth="0.3" />
          <polygon points={points.map((p) => p.join(',')).join(' ')} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="0.3" />
          {points.map(([x, y], i) => (
            <line key={i} x1="50" y1="50" x2={x} y2={y} stroke={i === active ? '#e8b04b' : 'rgb(255 255 255 / 0.08)'} strokeWidth="0.4" />
          ))}
        </svg>
        <div className="absolute inset-[30%] grid place-items-center rounded-full bg-white/5 text-center ring-1 ring-white/15 backdrop-blur">
          <div>
            <p className="font-display text-6xl leading-none text-gold sm:text-7xl">7</p>
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">Dimensions</p>
          </div>
        </div>
        {points.map(([x, y], i) => (
          <button
            key={items[i].title}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            aria-label={items[i].title}
            style={{ left: `${x}%`, top: `${y}%` }}
            className={`absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-display text-sm font-semibold transition-all duration-300 sm:size-14 sm:text-base ${
              i === active ? 'scale-110 bg-gold text-ink shadow-[0_0_0_8px_rgb(232_176_75/0.2)]' : 'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </button>
        ))}
      </div>

      <div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {items.map(({ title }, i) => (
            <li key={title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  i === active ? 'bg-white text-ink' : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className={`text-xs ${i === active ? 'text-coral' : 'text-white/40'}`}>{String(i + 1).padStart(2, '0')}</span>
                {title}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-8 min-h-36 rounded-3xl border border-white/15 p-7" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">In practice</p>
              <h3 className="mt-2 font-display text-2xl text-white">{items[active].title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">{items[active].body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
