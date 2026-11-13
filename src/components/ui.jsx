import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import './ui.css'

export const SITE = 'https://www.21kschool.com/us'
export const ext = (p) => SITE + p

/* Shows a labelled placeholder if the image is missing or fails to load */
export function Img({ src, alt, className = '' }) {
  const [bad, setBad] = useState(false)
  if (!src || bad)
    return <div className={`ph ${className}`} role="img" aria-label={alt}><span>{alt}</span></div>
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setBad(true)} />
}

export function Btn({ to, href, variant = 'primary', children }) {
  const cls = `btn btn-${variant}`
  const inner = <>{children}<ArrowRight size={16} /></>
  return to
    ? <Link className={cls} to={to}>{inner}</Link>
    : <a className={cls} href={href} target="_blank" rel="noreferrer">{inner}</a>
}

export function PageHero({ eyebrow, title, accent, text, actions, img, imgAlt, note }) {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title} {accent && <span className="accent">{accent}</span>}</h1>
          <p className="lead">{text}</p>
          <div className="row">{actions}</div>
          {note && <p className="hero-note">{note}</p>}
        </div>
        <Img className="hero-img" src={img} alt={imgAlt} />
      </div>
    </header>
  )
}

export function Strip({ items }) {
  return (
    <div className="container strip-wrap">
      <div className="strip">
        {items.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}
      </div>
    </div>
  )
}

export function Section({ id, eyebrow, title, intro, tint, children }) {
  return (
    <section id={id} className={`section ${tint ? 'tint' : ''}`}>
      <div className="container">
        {eyebrow && <div className="eyebrow dark">{eyebrow}</div>}
        {title && <h2>{title}</h2>}
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

export function Split({ title, eyebrow, children, img, alt, flip, tint }) {
  return (
    <section className={`section ${tint ? 'tint' : ''}`}>
      <div className={`container split ${flip ? 'flip' : ''}`}>
        <div>
          {eyebrow && <div className="eyebrow dark">{eyebrow}</div>}
          <h2>{title}</h2>
          {children}
        </div>
        {img !== undefined && <Img className="rounded" src={img} alt={alt} />}
      </div>
    </section>
  )
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}><summary>{q}</summary><p>{a}</p></details>
      ))}
    </div>
  )
}

export function CTA({ title, text, children }) {
  return (
    <section className="section">
      <div className="container cta">
        <div><h2>{title}</h2><p>{text}</p></div>
        <div className="row">{children}</div>
      </div>
    </section>
  )
}

/* Front-end only: connect onSubmit to your backend or form service */
export function Enquiry({ title, sub, label }) {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')
  const submit = (e) => {
    e.preventDefault()
    // TODO: send `email` to your API here
    setSent(true)
  }
  return (
    <div className="card enquiry">
      <h3>{title}</h3>
      <p className="muted">{sub}</p>
      <p className="tiny">No spam · Advisor calls within 2 hours · Your details are safe with us</p>
      {sent ? <p className="ok" role="status">Thank you. This redesign preview doesn’t send enquiries yet. Your details have not been stored.</p> : (
        <form onSubmit={submit}>
          <label>Email *
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="check">
            <input type="checkbox" required />
            <span>I agree to the <a href={ext('/privacy-policy/')} target="_blank" rel="noreferrer">Privacy Policy</a> and to 21K School contacting me by phone, WhatsApp, SMS and email about admissions and programmes.</span>
          </label>
          <button className="btn btn-primary" type="submit">{label}</button>
        </form>
      )}
    </div>
  )
}