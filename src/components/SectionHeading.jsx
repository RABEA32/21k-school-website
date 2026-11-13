import { SmartLink } from './Button.jsx'
import Icon from './Icon.jsx'

// Small caps label with a gold rule, plus an optional "View all →" link on the right.
export default function SectionHeading({ label, title, link, id, light = false }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
      <div>
        <h2 id={id} className={`flex items-center gap-3 font-display text-sm font-semibold tracking-[0.18em] uppercase ${light ? 'text-white' : 'text-navy'}`}>
          {label}
          <span aria-hidden="true" className="h-0.5 w-8 rounded bg-gold" />
        </h2>
        {title && <p className={`mt-3 font-display text-3xl leading-tight font-bold sm:text-[2.1rem] ${light ? 'text-white' : 'text-navy'}`}>{title}</p>}
      </div>
      {link && (
        <SmartLink to={link.to} onClick={link.onClick} className="group flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark">
          {link.label}
          <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
        </SmartLink>
      )}
    </div>
  )
}
