import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  const id = useId()

  return (
    <div className="divide-y divide-ink/10 rounded-xl bg-white px-6 shadow-card ring-1 ring-line sm:px-10">
      {items.map(({ q, a }, i) => {
        const isOpen = open === i
        return (
          <div key={q}>
            <h3>
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-base font-semibold text-navy sm:text-lg"
              >
                {q}
                <span
                  aria-hidden="true"
                  className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 bg-gold text-navy-dark' : 'bg-mist text-navy'}`}
                >
                  <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-a${i}`}
                  role="region"
                  aria-labelledby={`${id}-q${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 leading-relaxed text-muted">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
