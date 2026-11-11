import Button, { Arrow } from '../components/Button.jsx'

export default function OnCampus() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-navy uppercase">
          Coming soon <span aria-hidden="true" className="h-0.5 w-8 rounded bg-gold" />
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold text-navy sm:text-6xl">On Campus</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">This page is being designed next.</p>
        <Button to="/#programs" variant="navy" className="mt-8">See all programs <Arrow /></Button>
      </div>
    </section>
  )
}
