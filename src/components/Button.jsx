import { Link } from 'react-router'

const styles = {
  primary: 'bg-coral text-white hover:bg-coral-dark shadow-[0_10px_24px_-10px_rgb(224_96_63/0.8)]',
  dark: 'bg-ink text-white hover:bg-ink/90',
  outline: 'border border-ink/15 bg-white/60 text-ink hover:border-ink/40 hover:bg-white',
  light: 'bg-white text-ink hover:bg-cream',
}

export default function Button({ to, variant = 'primary', className = '', children, ...props }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export function Arrow({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
