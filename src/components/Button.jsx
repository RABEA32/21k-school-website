import { Link } from 'react-router'
import Icon from './Icon.jsx'

const styles = {
  gold: 'bg-gold text-navy-dark hover:bg-gold-dark',
  navy: 'bg-navy text-white hover:bg-navy-dark',
  outline: 'border border-white/70 text-white hover:bg-white hover:text-navy',
  outlineDark: 'border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white',
}

export default function Button({ to, variant = 'gold', className = '', children, ...props }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export function Arrow({ className = 'size-4' }) {
  return (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      <Icon name="arrow" className={className} />
    </span>
  )
}
