import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { motion } from 'motion/react'
import ContactForm from './ContactForm.jsx'
import Icon from './Icon.jsx'
import { about } from '../data/home.js'
import { modalHashes } from '../data/navLinks.js'

// Opened by any link to "#apply" or "#tour"; closing clears the hash.
export default function Modals() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const ref = useRef(null)
  const active = modalHashes.includes(hash) ? hash : null

  useEffect(() => {
    const d = ref.current
    if (active && !d.open) d.showModal()
    if (!active && d.open) d.close()
  }, [active])

  const close = () => {
    if (active) navigate({ pathname, search, hash: '' }, { replace: true })
  }

  return (
    <dialog
      ref={ref}
      onClose={close}
      onClick={(e) => e.target === ref.current && close()}
      aria-label={active === '#tour' ? 'Virtual tour' : 'Apply for admission'}
      className="m-auto w-[min(40rem,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-auto rounded-2xl bg-transparent p-0"
    >
      {active && (
        <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3 }} className="relative">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full bg-mist text-navy hover:bg-gold"
          >
            <Icon name="close" className="size-4" />
          </button>
          {active === '#apply' ? (
            <ContactForm />
          ) : (
            <div className="overflow-hidden rounded-2xl bg-white">
              <div className="relative">
                <img src={about.image} alt="" className="aspect-video w-full object-cover" />
                <div className="absolute inset-0 grid place-items-center bg-navy-dark/60">
                  <span className="grid size-16 place-items-center rounded-full bg-white/90 text-navy"><Icon name="play" className="size-7" /></span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-bold text-navy">Virtual tour — video placeholder</h2>
                <p className="mt-2 text-sm text-muted">The school’s tour video will play here once it is supplied. In the meantime, book a call and a counsellor will walk you through everything.</p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </dialog>
  )
}
