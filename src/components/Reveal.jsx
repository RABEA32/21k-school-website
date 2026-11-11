import { motion } from 'motion/react'

// Fades and lifts its children in once they scroll into view.
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}
