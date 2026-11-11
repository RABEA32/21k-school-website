import { motion } from 'motion/react'
import Button, { Arrow } from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CountUp from '../components/CountUp.jsx'
import Dimensions from '../components/Dimensions.jsx'
import Accordion from '../components/Accordion.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import ContactForm from '../components/ContactForm.jsx'
import {
  hero, accreditations, stats, achieversIntro, achievers, pedagogy, dimensions,
  ecosystem, pathways, culture, testimonials, faqs, img,
} from '../data/home.js'

const wrap = 'mx-auto max-w-7xl px-5 sm:px-8'
const ease = [0.22, 1, 0.36, 1]

function Hero() {
  const pillars = pedagogy.map((p) => p.title)
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute -top-40 -right-40 size-[36rem] rounded-full bg-gold/25 blur-3xl" />
      <div aria-hidden="true" className="absolute top-1/2 -left-48 size-[28rem] rounded-full bg-sky blur-3xl" />

      <div className={`${wrap} relative grid items-center gap-14 pt-8 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-14 lg:pb-28`}>
        <div>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-wrap gap-2"
          >
            {hero.badges.map((b) => (
              <motion.li
                key={b}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-ink/75"
              >
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mt-8 font-display text-[3.4rem] leading-[0.95] font-medium tracking-tight text-ink sm:text-7xl xl:text-[5.75rem]"
          >
            <span className="text-coral italic">{hero.tag}</span>
            <br />
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            {hero.intro} Live online classes, physical campuses and after-school programmes — Indian and international
            curricula, for learners in 78+ countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/#contact">
              Get Started <Arrow />
            </Button>
            <Button to="/#programs" variant="outline">
              Explore Programs
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-ink/60"
          >
            {pillars.map((p, i) => (
              <span key={p} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-coral" />}
                {p}
              </span>
            ))}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="relative"
        >
          <div aria-hidden="true" className="absolute -inset-3 translate-x-5 translate-y-5 rounded-[3rem] border-2 border-dashed border-coral/30" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-card">
            <img
              src={hero.image}
              alt="A smiling student studying at her desk"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
              fetchPriority="high"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease }}
            className="absolute -bottom-8 -left-2 w-48 overflow-hidden rounded-3xl border-4 border-cream shadow-card sm:-left-10 sm:w-60"
          >
            <img src={hero.inset} alt="A learner joining a live online class" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1, duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute top-8 -right-2 rounded-2xl bg-white px-5 py-4 shadow-card sm:-right-6"
          >
            <p className="font-display text-3xl text-ink">78+</p>
            <p className="text-xs font-semibold text-ink-soft">countries, one school</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Accreditation() {
  return (
    <section aria-labelledby="accreditation" className={`${wrap} pb-10`}>
      <Reveal className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 sm:p-8">
        <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr]">
          <h2 id="accreditation" className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50 lg:max-w-[9rem]">
            Accredited & recognised by
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {accreditations.map((a) => (
              <li key={a.name} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgb(19_32_59/0.05)]">
                <span
                  title="Logo placeholder"
                  className="grid size-14 shrink-0 place-items-center rounded-xl border border-dashed border-ink/25 bg-cream text-[0.6rem] font-bold uppercase tracking-wider text-ink/40"
                >
                  Logo
                </span>
                <span>
                  <span className="block font-semibold text-ink">{a.name}</span>
                  <span className="block text-sm text-ink-soft">{a.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

function Stats() {
  return (
    <section aria-label="21K School in numbers" className={`${wrap} py-10`}>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-ink/10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse bg-cream px-5 py-8 sm:px-10 sm:py-10">
            <dt className="mt-2 text-sm font-semibold text-ink-soft">{s.label}</dt>
            <dd className="font-display text-[2.6rem] leading-none font-medium text-ink sm:text-6xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}

function Achievers() {
  return (
    <section className={`${wrap} py-24 sm:py-32`}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <SectionHeading eyebrow="Our achievers" title="Where every child carries a star" intro={achieversIntro.lead} />
        <Reveal className="lg:pb-2">
          <p className="text-ink-soft lg:max-w-md lg:justify-self-end">{achieversIntro.body}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {achievers.map((a, i) => (
          <Reveal
            key={a.name}
            delay={(i % 4) * 0.08}
            className={`group relative overflow-hidden rounded-[2rem] bg-ink ${i === 0 ? 'md:col-span-2 lg:row-span-2' : ''}`}
          >
            <img
              src={a.image}
              alt=""
              loading="lazy"
              className={`w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-90 ${i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-full' : 'aspect-[4/3] lg:aspect-[4/5]'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{a.domain}</span>
              <h3 className={`mt-3 font-display text-white ${i === 0 ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>{a.name}</h3>
              <p className={`mt-1 text-white/80 ${i === 0 ? 'max-w-md text-base' : 'text-sm'}`}>{a.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-xs text-ink/50">Achievements as published by 21K School. Photographs are illustrative and do not show the learners named.</p>
    </section>
  )
}

function Pedagogy() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className={wrap}>
        <SectionHeading
          eyebrow="Our learning pedagogy"
          title={
            <>
              At the centre of every choice we make: <span className="text-coral italic">learner success.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pedagogy.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="group flex flex-col overflow-hidden rounded-[2rem] bg-cream shadow-card">
              <div className="overflow-hidden">
                <img src={p.image} alt="" loading="lazy" className="aspect-[16/11] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="font-display text-sm text-coral">0{i + 1}</p>
                <h3 className="mt-1 font-display text-3xl text-ink">{p.title}</h3>
                <p className="mt-3 font-semibold text-ink">{p.lead}</p>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.body}</p>
                <p className="mt-6 border-t border-ink/10 pt-4 text-xs font-bold uppercase tracking-[0.15em] text-teal">{p.pillar}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SevenDimensions() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -top-32 left-1/3 size-[30rem] rounded-full bg-teal/30 blur-3xl" />
      <div className={`${wrap} relative`}>
        <SectionHeading
          light
          eyebrow="How do we define success?"
          title="The 7 Dimensions of Success"
          intro="Somewhere along the way, curiosity was traded for compliance. We help learners discover their strengths and build the foundations for a fulfilling life — not just titles and milestones."
        />
        <Reveal className="mt-14">
          <Dimensions items={dimensions} />
        </Reveal>
      </div>
    </section>
  )
}

function Ecosystem() {
  return (
    <section id="programs" className={`${wrap} scroll-mt-24 py-24 sm:py-32`}>
      <SectionHeading
        eyebrow="Our learning ecosystem"
        title="One strong community. Many ways to belong."
        intro="Each one built differently. Each one built for a different kind of child. All built with the same heart."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {ecosystem.map((e, i) => (
          <Reveal key={e.name} delay={(i % 2) * 0.12} className={`group flex flex-col overflow-hidden rounded-[2rem] ${e.tone} p-3 shadow-card`}>
            <div className="overflow-hidden rounded-[1.6rem]">
              <img src={e.image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{e.kicker}</p>
              <h3 className="mt-2 font-display text-3xl text-ink">{e.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{e.body}</p>
              <Button to={e.to} variant="dark" className="mt-6 self-start">
                {e.cta} <Arrow />
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Pathways() {
  const { indian, british, stages } = pathways
  return (
    <section className="bg-sand/60 py-24 sm:py-32">
      <div className={wrap}>
        <SectionHeading
          align="center"
          eyebrow="Curriculum pathways"
          title="Not just a certificate. A passport."
          intro="Recognised by Cambridge and Pearson Edexcel and following India’s National Curriculum Framework, our pathways open doors to universities around the world."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[indian, british].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} className={`rounded-[2rem] p-8 sm:p-10 ${i === 0 ? 'bg-teal text-white' : 'bg-ink text-white'}`}>
              <h3 className="font-display text-3xl">{p.name}</h3>
              <p className="mt-4 leading-relaxed text-white/80">{p.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.facts.map((f) => (
                  <li key={f} className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold">{f}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-card">
          <div className="hidden grid-cols-[0.8fr_1fr_1fr_1fr] gap-6 border-b border-ink/10 bg-cream px-8 py-5 text-xs font-bold uppercase tracking-[0.15em] text-ink/50 md:grid">
            <span>School stage</span>
            <span className="text-teal">Indian pathway</span>
            <span>British pathway</span>
            <span className="text-coral">What matters most</span>
          </div>
          <ul className="divide-y divide-ink/10">
            {stages.map((s) => (
              <li key={s.stage} className="grid gap-3 px-6 py-6 transition-colors hover:bg-cream/60 md:grid-cols-[0.8fr_1fr_1fr_1fr] md:gap-6 md:px-8">
                <span className="font-display text-xl text-ink">{s.stage}</span>
                <span className="text-sm text-ink-soft">
                  <span className="mb-0.5 block text-xs font-bold text-teal md:hidden">Indian</span>
                  {s.indian}
                </span>
                <span className="text-sm text-ink-soft">
                  <span className="mb-0.5 block text-xs font-bold text-ink md:hidden">British</span>
                  {s.british}
                </span>
                <span className="text-sm text-ink-soft">
                  <span className="mb-0.5 block text-xs font-bold text-coral md:hidden">What matters most</span>
                  {s.matters}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="text-ink-soft">Not sure which path is right for your child? Let’s find it together.</p>
          <Button to="/#contact" className="mt-5">
            Talk to an advisor <Arrow />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

function Culture() {
  return (
    <section className={`${wrap} py-24 sm:py-32`}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Learning culture"
            title="Nurturing the people our learners are becoming"
            intro="Habits of Mind run through every day at 21K — helping learners grow in confidence, resourcefulness and independence."
          />
          <Reveal className="mt-10 overflow-hidden rounded-[2rem]">
            <img src={img('1529156069898-49953e39b3ac', 1000)} alt="Friends standing together with arms around each other" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
        </div>
        <ul className="grid gap-3 self-end sm:grid-cols-2 sm:gap-4">
          {culture.map((c, i) => (
            <Reveal
              as="li"
              key={c.trait}
              delay={(i % 4) * 0.06}
              className={`group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${i % 3 === 0 ? 'bg-coral/10' : i % 3 === 1 ? 'bg-sky' : 'bg-sand'}`}
            >
              <span className="font-display text-sm text-ink/40">0{i + 1}</span>
              <h3 className="mt-2 font-display text-2xl text-ink sm:mt-6 sm:text-[1.7rem]">{c.trait}</h3>
              <p className="mt-1 text-sm text-ink-soft">{c.line}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-sky/60 py-24 sm:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center`}>
        <SectionHeading
          eyebrow="Parent voices"
          title="What our community says"
          intro="These are sample quotes for layout only. They will be replaced with verified parent testimonials, shared with consent."
        />
        <Reveal>
          <TestimonialCarousel items={testimonials} />
        </Reveal>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className={`${wrap} py-24 sm:py-32`}>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" intro="Straight answers on recognition, documents and how online school works." />
        </div>
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-20 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink">
        <img src={img('1541339907198-e08756dedf3f', 1800)} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-coral/60" />
        <div className={`${wrap} relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center`}>
          <div>
            <SectionHeading
              light
              eyebrow="Talk to an admissions counsellor"
              title="Find the right path for your child"
              intro="Tell us a little about your family and an advisor will reach out — no obligation."
            />
            <Reveal as="ul" className="mt-8 space-y-3 text-white/85">
              {['Both curricula explained side by side', 'Fees and start dates in one call', 'Next cohorts: January 2027 · June 2027'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-gold text-ink">
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Accreditation />
      <Stats />
      <Achievers />
      <Pedagogy />
      <SevenDimensions />
      <Ecosystem />
      <Pathways />
      <Culture />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
