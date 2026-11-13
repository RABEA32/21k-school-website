import { Link } from 'react-router'
import usePageMeta from '../usePageMeta.js'
import { motion } from 'motion/react'
import Button, { Arrow, SmartLink } from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Accordion from '../components/Accordion.jsx'
import {
  REGISTER_ID, STAGES_ID, admissions, beginWithChild, beyond, care, disclaimer, ecosystem, educators, facilities, faq,
  founding, globalReach, hero, included, laLumiere, pfa, progress, register, schoolDay, schoolYear, stages, support,
  transport, trips, whyFamilies,
} from '../data/onCampus.js'

const wrap = 'mx-auto max-w-7xl px-5 sm:px-8'
// In-page jump links pass replace={false}: Router otherwise REPLACEs a same-URL click, which Layout deliberately doesn't scroll for.
const ease = [0.22, 1, 0.36, 1]

// Copied from OnlineSchool.jsx (approved: keep that page untouched rather than share a file).
function Heading({ id, title, intro, link, light = false, center = false }) {
  return (
    <Reveal className={`mb-8 ${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <span aria-hidden="true" className={`mb-4 block h-1 w-12 rounded bg-gold ${center ? 'mx-auto' : ''}`} />
      <h2 id={id} className={`scroll-mt-28 font-display text-3xl leading-tight font-bold sm:text-[2.25rem] ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/80' : 'text-muted'}`}>{intro}</p>}
      {link && (
        <SmartLink to={link.to} className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark">
          {link.label} <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
        </SmartLink>
      )}
    </Reveal>
  )
}

function Checks({ items, className = '' }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((x) => (
        <li key={x} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
          <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-gold text-navy-dark"><Icon name="check" className="size-3" /></span>
          {x}
        </li>
      ))}
    </ul>
  )
}

function More({ link, variant = 'outlineDark', className = 'mt-6' }) {
  return <Button to={link.to} variant={variant} className={className}>{link.label} <Arrow /></Button>
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <div aria-hidden="true" className="absolute top-1/3 right-[-12%] -z-10 size-[44rem] -translate-y-1/2 rounded-full bg-navy max-lg:hidden" />
      <div className={`${wrap} pt-8 pb-28 lg:pb-32`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/70">
              <ol className="flex items-center gap-2">
                <li><Link to="/" className="hover:text-gold">Home</Link></li>
                <li aria-hidden="true"><Icon name="right" className="size-3.5" /></li>
                <li aria-current="page" className="text-white">On Campus</li>
              </ol>
            </nav>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy-dark">
              <Icon name="pin" className="size-3.5" /> {hero.place}
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="mt-5 font-display text-4xl leading-[1.08] font-bold text-white min-[360px]:text-5xl lg:text-6xl"
            >
              {hero.title}
              <span className="block text-gold">{hero.accent}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.15 }} className="mt-5 max-w-xl text-lg text-white/85">
              {hero.intro}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={`#${REGISTER_ID}`} replace={false}>{hero.register} <Arrow /></Button>
              <Button to={`#${STAGES_ID}`} replace={false} variant="outline">{hero.stages}</Button>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease, delay: 0.1 }} className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gold/20 max-sm:hidden" />
            <img src={hero.image} alt={hero.imageAlt} width="1600" height="900" fetchPriority="high" className="relative aspect-video w-full rounded-3xl object-cover shadow-2xl ring-4 ring-white/90" />
          </motion.div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {hero.figures.map((f) => (
            <div key={f.label} className="flex flex-col-reverse gap-1 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <dt className="text-sm text-white/75">{f.label}</dt>
              <dd className="font-display text-3xl font-bold text-gold">{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 flex items-center gap-3 text-sm text-white/85">
          <Icon name="calendar" className="size-4 shrink-0 text-gold" /> {hero.note}
        </p>
      </div>
    </section>
  )
}

function Ecosystem() {
  return (
    <section aria-label="21K School in figures" className={`${wrap} relative z-10 -mt-16`}>
      <Reveal as="dl" className="grid grid-cols-1 divide-y divide-line overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {ecosystem.map((f) => (
          <div key={f.label} className="flex flex-row-reverse items-center justify-end gap-4 p-5">
            <dt className="text-sm text-ink">{f.label}{f.sub && <span className="block text-xs text-muted">{f.sub}</span>}</dt>
            <dd className="font-display text-3xl font-bold text-navy">{f.value}</dd>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function BeginWithChild() {
  return (
    <section className={`${wrap} grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr]`}>
      <div>
        <Heading id="begin-with-the-child" title={beginWithChild.title} />
        <Reveal as="p" className="font-display text-xl leading-snug font-semibold text-navy sm:text-2xl">{beginWithChild.lead}</Reveal>
        <ul className="mt-6 flex flex-wrap gap-2">
          {beginWithChild.qualities.map((q) => (
            <li key={q} className="flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-semibold text-navy ring-1 ring-line">
              <span className="grid size-4.5 place-items-center rounded-full bg-gold text-navy-dark"><Icon name="check" className="size-3" /></span>{q}
            </li>
          ))}
        </ul>
      </div>
      <Reveal delay={0.1} className="relative mx-auto flex h-[26rem] w-full max-w-sm items-end justify-center overflow-hidden rounded-3xl bg-mist">
        <div aria-hidden="true" className="absolute bottom-[-15%] left-1/2 size-[85%] -translate-x-1/2 rounded-full bg-gold/30" />
        <img src={beginWithChild.image} alt={beginWithChild.imageAlt} loading="lazy" width="834" height="1100" className="relative h-[95%] w-auto" />
      </Reveal>
    </section>
  )
}

function WhyFamilies() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <Heading id="why-families-choose" title={whyFamilies.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyFamilies.items.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.06} className="rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
              <span className="grid size-11 place-items-center rounded-lg bg-navy text-gold"><Icon name={x.icon} /></span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{x.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-navy p-6 sm:flex-row sm:items-center sm:p-8">
          <p className="font-display text-xl font-semibold text-white">{whyFamilies.banner}</p>
          <Button to={`#${REGISTER_ID}`} replace={false}>{hero.register} <Arrow /></Button>
        </Reveal>
      </div>
    </section>
  )
}

function Stages() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading id={STAGES_ID} title={stages.title} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stages.items.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <SmartLink to={s.link.to} className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-line transition hover:-translate-y-1">
              <span className={`grid size-11 place-items-center rounded-lg ${s.tone}`}><Icon name={s.icon} /></span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-gold-dark uppercase">{s.grades}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              {s.extra && <p className="mt-3 rounded-lg bg-mist p-3 text-xs text-ink">{s.extra}</p>}
              <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                {s.link.label} <Icon name="arrow" className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </span>
            </SmartLink>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function SchoolDay() {
  return (
    <section className="bg-navy-dark py-16">
      <div className={`${wrap} grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]`}>
        <div>
          <Heading id="school-day" light title={schoolDay.title} />
          <Reveal className="rounded-xl bg-white/5 p-5 text-sm leading-relaxed text-white/85 ring-1 ring-white/10">
            <Icon name="clock" className="mb-2 size-5 text-gold" />
            {schoolDay.note}
          </Reveal>
          <More link={schoolDay.link} variant="gold" />
        </div>
        <ol className="relative space-y-3 before:absolute before:top-4 before:bottom-4 before:left-6 before:w-px before:bg-white/15">
          {schoolDay.steps.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 0.05} className="relative flex items-center gap-4 rounded-xl bg-white p-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold font-display text-sm font-bold text-navy-dark">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm text-ink">{s}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Pfa() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading id="personalised-flexible-accelerated" title={pfa.title} />
      <div className="grid gap-5 md:grid-cols-3">
        {pfa.items.map((x, i) => (
          <Reveal key={x.title} delay={i * 0.08} className="rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
            <span className="grid size-11 place-items-center rounded-lg bg-gold text-navy-dark"><Icon name={x.icon} /></span>
            <h3 className="mt-4 font-display text-xl font-semibold text-navy">{x.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{x.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function GlobalReach() {
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]`}>
        <div>
          <Heading id="global-reach" title={globalReach.title} intro={globalReach.intro} />
          <Reveal><Checks items={globalReach.points} /></Reveal>
        </div>
        <Reveal className="self-end rounded-xl border-l-4 border-gold bg-white p-6 shadow-card">
          <Icon name="search" className="size-6 text-gold-dark" />
          <p className="mt-3 text-sm leading-relaxed text-ink">{globalReach.devices}</p>
          <More link={globalReach.link} className="mt-5" />
        </Reveal>
      </div>
    </section>
  )
}

function LaLumiere() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading id="la-lumiere" center title={laLumiere.title} intro={laLumiere.intro} />
      <Reveal as="blockquote" className="mx-auto max-w-3xl text-center font-display text-xl font-semibold text-navy italic sm:text-2xl">
        “{laLumiere.quote}”
      </Reveal>
      <ol className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-navy">
        {laLumiere.chain.map((c, i) => (
          <li key={c} className="flex items-center gap-2">
            {i > 0 && <Icon name="arrow" className="size-4 text-muted" />}
            <span className="rounded-full bg-mist px-4 py-1.5 ring-1 ring-line">{c}</span>
          </li>
        ))}
      </ol>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {laLumiere.wings.map((w, i) => (
          <Reveal key={w.name} delay={i * 0.1} className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line">
            <div className={`h-1.5 bg-gradient-to-r ${w.tone}`} />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-lg bg-navy text-gold"><Icon name={w.icon} /></span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">{w.name}</h3>
                  <p className="text-sm font-semibold text-muted">{w.meaning}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink">{w.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="text-center"><More link={laLumiere.link} className="mt-8" /></div>
    </section>
  )
}

function Facilities() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <Heading id="facilities" title={facilities.title} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="overflow-hidden rounded-3xl shadow-card">
            <img src={facilities.image} alt={facilities.imageAlt} loading="lazy" width="1440" height="810" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {facilities.items.map((f, i) => (
                <Reveal as="li" key={f.label} delay={(i % 2) * 0.05} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-line">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy text-gold"><Icon name={f.icon} className="size-5" /></span>
                  <span className="text-sm font-medium text-navy">{f.label}</span>
                </Reveal>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold text-navy">{facilities.note}</p>
            <More link={facilities.link} className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Beyond() {
  return (
    <section className={`${wrap} grid grid-cols-1 gap-10 py-16 lg:grid-cols-2`}>
      <div>
        <Heading id="beyond-the-classroom" title={beyond.title} />
        <Reveal><Checks items={beyond.points} /></Reveal>
        <More link={beyond.link} />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3">
          {beyond.photos.map((p, i) => (
            <Reveal as="figure" key={p.src} delay={i * 0.06} className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line">
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-3 text-xs leading-snug text-muted">{p.alt}</figcaption>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 flex items-start gap-2 rounded-lg bg-mist p-3 text-xs font-medium text-navy">
          <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {beyond.photoNote}
        </p>
      </div>
    </section>
  )
}

function Trips() {
  return (
    <section className={`${wrap} pb-16`}>
      <Reveal className="relative overflow-hidden rounded-xl bg-navy p-8 sm:p-10">
        <div aria-hidden="true" className="absolute -right-16 -bottom-24 size-72 rounded-full bg-gold/15" />
        <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <h2 id="trips" className="scroll-mt-28 font-display text-3xl leading-tight font-bold text-white">{trips.title}</h2>
            <p className="mt-4 text-white/80">{trips.body}</p>
          </div>
          <div className="lg:text-right"><More link={trips.link} variant="gold" className="" /></div>
        </div>
      </Reveal>
    </section>
  )
}

function Progress() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <Heading id="progress" title={progress.title} intro={progress.intro} />
        <ol className="grid gap-3 md:grid-cols-2">
          {progress.items.map((x, i) => (
            <Reveal as="li" key={x} delay={(i % 2) * 0.05} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-line">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold font-display text-sm font-bold text-navy-dark">{i + 1}</span>
              <span className="pt-1.5 text-sm text-ink">{x}</span>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 font-display text-lg font-semibold text-navy">{progress.outro}</p>
      </div>
    </section>
  )
}

function Support() {
  return (
    <section className={`${wrap} grid grid-cols-1 gap-10 py-16 lg:grid-cols-2`}>
      <div>
        <Heading id="support" title={support.title} intro={support.intro} />
        <Reveal as="p" className="rounded-xl border-l-4 border-gold bg-mist p-5 text-sm leading-relaxed text-ink">{support.note}</Reveal>
        <More link={support.link} />
      </div>
      <Reveal className="self-center rounded-xl bg-white p-6 shadow-card ring-1 ring-line sm:p-8"><Checks items={support.points} /></Reveal>
    </section>
  )
}

// Approved pairing: neighbouring short sections sit side by side from lg up, stacked in original order below.
function Pair({ children, tone = '' }) {
  return (
    <section className={`${tone} py-16`}>
      <div className={`${wrap} grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-8`}>{children}</div>
    </section>
  )
}
const panel = 'rounded-xl bg-white p-6 shadow-card ring-1 ring-line sm:p-8'

function EducatorsAndCare() {
  return (
    <Pair tone="bg-mist">
      <div className={panel}>
        <Heading id="educators" title={educators.title} />
        <Reveal className="space-y-4 text-sm leading-relaxed text-ink">{educators.paragraphs.map((p) => <p key={p}>{p}</p>)}</Reveal>
      </div>
      <div className={panel}>
        <Heading id="care" title={care.title} link={care.link} />
        <Reveal><Checks items={care.points} /></Reveal>
      </div>
    </Pair>
  )
}

function TransportAndYear() {
  return (
    <Pair>
      <div>
        <Heading id="transport" title={transport.title} />
        <Reveal className="space-y-3 text-sm leading-relaxed text-ink">{transport.paragraphs.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <Reveal className="mt-6 flex gap-4 rounded-xl bg-mist p-5 ring-1 ring-line">
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-gold text-navy-dark"><Icon name="pin" /></span>
          <address className="text-sm text-ink not-italic">
            <strong className="block font-display text-navy">{transport.addressName}</strong>
            {transport.address}
          </address>
        </Reveal>
        <More link={transport.link} />
      </div>
      <div>
        <Heading id="school-year" title={schoolYear.title} intro={schoolYear.intro} />
        <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {schoolYear.tiles.map((t, i) => (
            <Reveal as="li" key={t.value} delay={i * 0.06} className={`rounded-xl p-5 ${['bg-navy text-white', 'bg-gold text-navy-dark', 'bg-mist text-navy ring-1 ring-line'][i]}`}>
              <p className="font-display text-xl font-bold">{t.value}</p>
              <p className="mt-1 text-xs leading-snug font-medium opacity-85">{t.label}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-relaxed text-muted">{schoolYear.note}</p>
      </div>
    </Pair>
  )
}

function IncludedAndFounding() {
  return (
    <Pair tone="bg-mist">
      <div className={panel}>
        <Heading id="whats-included" title={included.title} />
        <Reveal><Checks items={included.points} /></Reveal>
        <p className="mt-5 rounded-lg bg-mist p-4 text-sm leading-relaxed text-ink">{included.note}</p>
        <More link={included.link} className="mt-5" />
      </div>
      <div className={panel}>
        <Heading id="founding-families" title={founding.title} />
        <Reveal><Checks items={founding.points} /></Reveal>
        <p className="mt-5 rounded-lg border-l-4 border-gold bg-mist p-4 text-sm font-medium text-navy">{founding.note}</p>
      </div>
    </Pair>
  )
}

function Admissions() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading id="admissions" title={admissions.title} />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {admissions.steps.map((s, i) => (
          <Reveal as="li" key={s} delay={(i % 3) * 0.06} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-card ring-1 ring-line">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold font-display font-bold text-navy-dark">{i + 1}</span>
            <h3 className="pt-2 font-display text-base font-semibold text-navy">{s}</h3>
          </Reveal>
        ))}
      </ol>
      <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">{admissions.criteria}</p>
    </section>
  )
}

function Register() {
  return (
    <section className="bg-navy-dark py-16">
      <div className={`${wrap} grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_minmax(20rem,26rem)]`}>
        <div>
          <Heading id={REGISTER_ID} light title={register.title} />
          <Reveal className="space-y-3 text-white/85">
            {register.lines.map((l) => (
              <p key={l} className="flex items-start gap-3"><Icon name="calendar" className="mt-1 size-4 shrink-0 text-gold" />{l}</p>
            ))}
          </Reveal>
        </div>
        <Reveal delay={0.1} className="rounded-2xl shadow-2xl"><ContactForm /></Reveal>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading id="faq" title={faq.title} />
          <p className="text-sm text-ink">
            {faq.still}{' '}
            <Link to={`#${REGISTER_ID}`} replace={false} className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark">{faq.stillLink}</Link>
          </p>
        </div>
        <Reveal><Accordion items={faq.items} /></Reveal>
      </div>
      <aside aria-label="Regulatory status" className={`${wrap} mt-12`}>
        <div className="space-y-2 rounded-xl border border-line bg-white p-5 text-xs leading-relaxed text-muted">
          {disclaimer.map((d) => <p key={d}>{d}</p>)}
        </div>
      </aside>
    </section>
  )
}

export default function OnCampus() {
  usePageMeta(
    '21K School, Puducherry: Now On Campus | 21K School',
    '21K School’s new campus in Puducherry: an inaugural intake for Nursery to Grade 8, classes planned from June 2027, and a maximum of 24 learners per section.',
  )
  return (
    <>
      <Hero />
      <Ecosystem />
      <BeginWithChild />
      <WhyFamilies />
      <Stages />
      <SchoolDay />
      <Pfa />
      <GlobalReach />
      <LaLumiere />
      <Facilities />
      <Beyond />
      <Trips />
      <Progress />
      <Support />
      <EducatorsAndCare />
      <TransportAndYear />
      <IncludedAndFounding />
      <Admissions />
      <Register />
      <Faq />
    </>
  )
}
