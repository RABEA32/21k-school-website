import { useState } from 'react'
import usePageMeta from '../usePageMeta.js'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import Button, { Arrow, SmartLink } from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import Accordion from '../components/Accordion.jsx'
import { ENQUIRE_ID, PROGRAMMES_ID, ask, faq, hero, how, isNot, join, taster, ways, what } from '../data/floww.js'

const wrap = 'mx-auto max-w-7xl px-5 sm:px-8'
const ease = [0.22, 1, 0.36, 1]
// In-page jump links pass replace={false}: Router otherwise REPLACEs a same-URL click, which Layout deliberately doesn't scroll for.

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

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <div aria-hidden="true" className="absolute top-1/2 right-[-10%] -z-10 size-[44rem] -translate-y-1/2 rounded-full bg-navy max-lg:hidden" />
      <div aria-hidden="true" className="absolute top-[22%] right-[9%] -z-10 size-[24rem] rounded-full bg-gold/90 max-lg:hidden" />
      <div className={`${wrap} grid grid-cols-1 items-end gap-6 pt-8 lg:grid-cols-[1.15fr_0.85fr]`}>
        <div className="pb-28 lg:pb-32">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li aria-hidden="true"><Icon name="right" className="size-3.5" /></li>
              <li aria-current="page" className="text-white">FLOWW</li>
            </ol>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mt-6 font-display text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.15 }} className="mt-5 max-w-xl text-lg text-white/85">
            {hero.intro}
          </motion.p>
          <ul className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
            {hero.programmes.map((p) => (
              <li key={p.label}>
                <a href={p.to} className="group flex items-center gap-3 rounded-xl bg-white p-3 transition hover:-translate-y-0.5">
                  <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${p.tone}`}><Icon name={p.icon} className="size-4.5" /></span>
                  <span className="font-display text-sm font-semibold text-navy">{p.label}</span>
                  <Icon name="arrow" className="ml-auto size-4 text-navy transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button to={`#${ENQUIRE_ID}`} replace={false}>{hero.enrol} <Arrow /></Button>
            <Button to={`#${PROGRAMMES_ID}`} replace={false} variant="outline">{hero.explore}</Button>
          </motion.div>
          <p className="mt-6 flex items-start gap-3 rounded-xl bg-white/5 p-4 text-sm text-white/85 ring-1 ring-white/10">
            <Icon name="globe" className="mt-0.5 size-5 shrink-0 text-gold" />
            <span><strong className="block font-display text-white">{hero.welcome}</strong>{hero.welcomeBody}</span>
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {hero.figures.map((f) => (
              <div key={f.label} className="flex flex-col-reverse gap-1 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="text-xs text-white/75">{f.label}</dt>
                <dd className="font-display text-2xl font-bold text-gold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          src={hero.image}
          alt={hero.imageAlt}
          width="727"
          height="999"
          fetchPriority="high"
          className="mx-auto hidden max-h-[36rem] w-auto self-end lg:block"
        />
      </div>
    </section>
  )
}

function What() {
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 items-center gap-10 lg:grid-cols-2`}>
        <div>
          <Heading id="what-is-floww" title={what.title} />
          <Reveal className="space-y-4 leading-relaxed text-ink">
            {what.paragraphs.map((p, i) => <p key={p} className={i === 0 ? 'font-display text-lg font-semibold text-navy' : ''}>{p}</p>)}
          </Reveal>
        </div>
        <Reveal as="ol" delay={0.1} className="grid grid-cols-5 gap-2 rounded-2xl bg-white p-4 shadow-card ring-1 ring-line sm:gap-3 sm:p-6" aria-label="FLOWW: Fundamental Learning of Working Ways">
          {what.acronym.map(([letter, word], i) => (
            <li key={word} className="text-center">
              <span aria-hidden="true" className={`grid aspect-square place-items-center rounded-xl font-display text-3xl font-bold transition hover:-translate-y-1 sm:text-5xl ${i % 2 ? 'bg-gold text-navy-dark' : 'bg-navy text-gold'}`}>{letter}</span>
              <span className="mt-2 block text-[0.65rem] font-semibold text-navy sm:text-sm">{word}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Ways() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading id={PROGRAMMES_ID} center title={ways.title} intro={ways.intro} />
      <div className="grid gap-5 md:grid-cols-3">
        {ways.items.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08}>
            <SmartLink to={w.link.to} className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-line transition hover:-translate-y-1">
              <span className={`grid size-12 place-items-center rounded-lg ${w.tone}`}><Icon name={w.icon} /></span>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{w.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{w.body}</p>
              <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                {w.link.label} <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </SmartLink>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function How() {
  return (
    <>
      <section className="bg-mist py-16">
        <div className={wrap}>
          <Heading id="how-floww-learning-works" center title={how.title} intro={how.intro} />
          <ul className="flex flex-wrap justify-center gap-2">
            {how.verbs.map((v, i) => (
              <li key={v} className={`rounded-full px-4 py-1.5 font-display text-sm font-semibold ${['bg-navy text-white', 'bg-gold text-navy-dark', 'bg-rose-600 text-white', 'bg-sky-100 text-navy', 'bg-navy text-gold'][i]}`}>{v}</li>
            ))}
          </ul>
          <Reveal className="mx-auto mt-8 grid max-w-5xl gap-6 text-sm leading-relaxed text-ink md:grid-cols-2">
            {how.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <div className="mt-10 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <Reveal className="rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{how.modelLabel}</p>
              <ul className="mt-4 space-y-3">
                {how.model.map((m) => (
                  <li key={m.label} className="flex items-center gap-3 font-display font-semibold text-navy">
                    <span className="grid size-10 place-items-center rounded-lg bg-navy text-gold"><Icon name={m.icon} className="size-5" /></span>{m.label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <span aria-hidden="true" className="mx-auto grid size-12 place-items-center rounded-full bg-navy text-white max-lg:rotate-90"><Icon name="arrow" /></span>
            <ul className="space-y-3">
              {how.outcomes.map((x, i) => (
                <Reveal as="li" key={x.label} delay={i * 0.08} className={`flex items-center justify-between rounded-xl px-6 py-4 font-display text-lg font-semibold ${x.tone}`}>
                  {x.label} <Icon name="star" className="size-4 opacity-80" />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section aria-label="Learners enrolled" className="bg-navy-dark py-12">
        <div className={`${wrap} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
          <div className="flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-white/10 text-gold"><Icon name="users" className="size-7" /></span>
            <div>
              <p className="font-display text-5xl font-bold text-gold">{how.band.value}</p>
              <p className="mt-2 max-w-xl font-display text-xl font-semibold text-white">{how.band.title}</p>
              <p className="mt-2 text-sm text-white/70">{how.band.body}</p>
            </div>
          </div>
          <Button to={`#${ENQUIRE_ID}`} replace={false} className="self-start md:self-center">{hero.enrol} <Arrow /></Button>
        </div>
      </section>
    </>
  )
}

const pos = (g) => `${((g - 1) / 11) * 100}%` // grade 1..12 → 0..100% along the axis

function Join() {
  return (
    <section className={`${wrap} py-16`}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Reveal className="relative mx-auto h-80 w-full max-w-md sm:h-96">
          <img src={join.photos[0].src} alt={join.photos[0].alt} loading="lazy" className="absolute top-0 left-0 h-[78%] w-[62%] rounded-3xl object-cover shadow-card" />
          <img src={join.photos[1].src} alt={join.photos[1].alt} loading="lazy" className="absolute right-0 bottom-0 h-[62%] w-[48%] rounded-3xl object-cover shadow-card ring-4 ring-white" />
        </Reveal>
        <div>
          <Heading id="who-can-join" title={join.title} intro={join.intro} />
          <Reveal className="space-y-4 text-sm leading-relaxed text-ink">{join.paragraphs.map((p) => <p key={p}>{p}</p>)}</Reveal>
        </div>
      </div>

      <Reveal className="mt-10 rounded-xl bg-white p-5 shadow-card ring-1 ring-line sm:p-8">
        <p className="flex items-center gap-3">
          <span className="rounded-full bg-navy px-3 py-1 font-display text-sm font-semibold text-white">{join.mastery.label}</span>
          <span className="font-display font-semibold text-navy">{join.mastery.value}</span>
        </p>
        <ul className="mt-5 space-y-3 lg:space-y-2">
          {join.bars.map((b) => (
            <li key={b.label} className="grid grid-cols-1 gap-1 lg:grid-cols-[13rem_1fr] lg:items-center">
              <span className="font-display text-sm font-semibold text-navy">{b.label}</span>
              <div className="relative h-8 rounded-full bg-mist" role="img" aria-label={`${b.label}: Grades ${b.range}`}>
                <div className="absolute inset-y-1 right-3 left-3">
                  <span
                    className={`absolute inset-y-0 flex items-center justify-end rounded-full bg-gradient-to-r px-2.5 text-xs font-bold text-white ${b.tone}`}
                    style={{ left: pos(b.from), width: `calc(${pos(b.to)} - ${pos(b.from)})` }}
                  >
                    {b.range}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className="mt-2 grid grid-cols-1 gap-1 lg:grid-cols-[13rem_1fr]">
          <span className="hidden text-xs font-semibold text-muted lg:block">{join.axisLabel}</span>
          <div className="relative mx-3 h-4 text-[0.65rem] font-semibold text-muted sm:text-xs">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className="absolute -translate-x-1/2" style={{ left: pos(i + 1) }}>{i + 1}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Taster() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <Heading id="a-free-coding-and-ai-taster" center title={taster.title} intro={taster.intro} />
        <Reveal as="p" className="mx-auto max-w-3xl text-center leading-relaxed text-ink">{taster.body}</Reveal>
        <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
          {taster.tiles.map((t, i) => (
            <Reveal as="li" key={t.label} delay={i * 0.08} className={`rounded-xl p-5 transition hover:-translate-y-1 ${['bg-navy text-white', 'bg-gold text-navy-dark', 'bg-white text-navy ring-1 ring-line'][i]}`}>
              <p className="font-display text-2xl font-bold">{t.value}</p>
              <p className="mt-1 text-sm font-medium opacity-85">{t.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function IsNot() {
  const card = (c, good) => (
    <Reveal delay={good ? 0 : 0.1} className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line">
      <div className={`h-1.5 ${good ? 'bg-gold' : 'bg-rose-600'}`} />
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold text-navy">{c.title}</h3>
        <ul className="mt-4 space-y-3">
          {c.items.map((x) => (
            <li key={x} className="flex items-center gap-3 text-ink">
              <span className={`grid size-6 shrink-0 place-items-center rounded-md ${good ? 'bg-gold text-navy-dark' : 'bg-rose-600 text-white'}`}>
                <Icon name={good ? 'check' : 'close'} className="size-3.5" />
              </span>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
  return (
    <section className={`${wrap} py-16`}>
      <Heading id="what-floww-is-and-is-not" center title={isNot.title} intro={isNot.lead} />
      <Reveal as="p" className="mx-auto max-w-3xl text-center leading-relaxed text-ink">{isNot.body}</Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {card(isNot.is, true)}
        {card(isNot.not, false)}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading id="questions-parents-ask" title={faq.title} intro={faq.intro} />
        </div>
        <Reveal><Accordion items={faq.items} /></Reveal>
      </div>
    </section>
  )
}

const field =
  'w-full rounded-lg border border-line bg-mist px-4 py-3 text-ink placeholder:text-ink/40 transition focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10 focus:outline-none'

// Local copy of the shared ContactForm's look, carrying the original FLOWW wording (approved: shared form untouched).
// Frontend only: it validates and confirms, but sends nothing. Consent starts unticked by decision.
function FlowwForm() {
  const f = ask.form
  const [sent, setSent] = useState(false)
  return (
    <div className="rounded-2xl bg-white p-7 text-ink sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center" role="status">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-gold/20 text-navy"><Icon name="check" className="size-8" /></span>
            <h3 className="mt-6 font-display text-2xl font-bold text-navy">Thank you.</h3>
            <p className="mx-auto mt-3 max-w-sm text-muted">This redesign preview doesn’t send enquiries yet. Your details have not been stored.</p>
            <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-navy underline-offset-4 hover:underline">
              Back to the form
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id={ENQUIRE_ID}
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="grid scroll-mt-28 gap-4"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-navy">{f.heading}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted"><Icon name="shield" className="size-3.5 text-gold-dark" />{f.note}</p>
            </div>
            <div className="border-t border-line pt-4">
              <p className="font-display text-lg font-semibold text-navy">{f.title}</p>
              <p className="mt-1 text-sm text-muted">{f.body}</p>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold">
              <span>Email <span className="text-rose-600" aria-hidden="true">*</span></span>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="flex items-start gap-3 text-sm text-muted">
              <input name="consent" type="checkbox" required className="mt-1 size-4 accent-navy" />
              <span>
                I agree to the <a href={f.privacy} className="font-semibold text-navy underline">Privacy Policy</a> {f.consent}
              </span>
            </label>
            <button
              type="submit"
              className="mt-1 rounded-md bg-gold px-6 py-3.5 font-semibold text-navy-dark transition hover:-translate-y-0.5 hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {f.submit}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Ask() {
  return (
    <section id="your-next-step" className="bg-navy-dark py-16">
      <div className={`${wrap} grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_minmax(20rem,28rem)]`}>
        <Heading light title={ask.title} />
        <Reveal delay={0.1} className="rounded-2xl shadow-2xl"><FlowwForm /></Reveal>
      </div>
    </section>
  )
}

export default function Floww() {
  usePageMeta(
    'FLOWW: Strong Foundations for What Comes Next | 21K School',
    'Live online FLOWW programmes in Mastery, Languages and Capstones that help learners strengthen essential skills and build real-world capability. Open to learners from all schools.',
  )
  return (
    <>
      <Hero />
      <What />
      <Ways />
      <How />
      <Join />
      <Taster />
      <IsNot />
      <Faq />
      <Ask />
    </>
  )
}
