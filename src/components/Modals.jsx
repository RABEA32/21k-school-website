import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { motion } from 'motion/react'
import ContactForm from './ContactForm.jsx'
import Icon from './Icon.jsx'
import { modalHashes } from '../data/navLinks.js'

// The enquiry form pop-up, opened by any link to "#enquiry"; closing clears the hash.
export default function Modals() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const ref = useRef(null)
  const active = modalHashes.includes(hash)

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
      aria-label="Quick enquiry"
      className="m-auto w-[min(34rem,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-auto rounded-2xl bg-transparent p-0"
    >
      {active && (
        <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3 }} className="relative">
          <button type="button" onClick={close} aria-label="Close" className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full bg-mist text-navy hover:bg-gold">
            <Icon name="close" className="size-4" />
          </button>
          <ContactForm />
        </motion.div>
      )}
    </dialog>
  )
}
