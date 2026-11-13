import { Link } from 'react-router'

// Official 21K School logo, from the original site.
export default function Logo({ className = 'h-11' }) {
  return (
    <Link to="/" aria-label="21K School home" className="shrink-0">
      <img src="/original/logo-21k-official-h144.webp" alt="21K School — Where Every Learner Finds Their Path" width="427" height="144" className={`${className} w-auto`} />
    </Link>
  )
}
