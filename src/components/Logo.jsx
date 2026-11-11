import { Link } from 'react-router'
import Icon from './Icon.jsx'

// Logo placeholder: swap the icon tile for the approved logo file when available.
export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="21K School home" title="Logo placeholder">
      <span className="grid size-11 place-items-center rounded-lg border-2 border-gold bg-navy text-gold">
        <Icon name="cap" className="size-6" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-bold tracking-tight text-navy">21K School</span>
        <span className="mt-1 block text-[0.6rem] whitespace-nowrap font-semibold tracking-[0.18em] text-muted uppercase">Global K-12 Learning</span>
      </span>
    </Link>
  )
}
