import { Link } from 'react-router'

// Placeholder mark: swap for the approved logo file when available.
export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="21K School home">
      <span className="grid size-10 place-items-center rounded-2xl bg-coral font-display text-lg font-semibold text-white">21K</span>
      <span className={`font-display text-xl font-medium tracking-tight ${light ? 'text-white' : 'text-ink'}`}>School</span>
    </Link>
  )
}
