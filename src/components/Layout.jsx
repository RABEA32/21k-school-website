import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router'
import { MotionConfig } from 'motion/react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Modals from './Modals.jsx'
import { modalHashes } from '../data/navLinks.js'

export default function Layout() {
  const { pathname, hash, key } = useLocation()
  const navType = useNavigationType()
  const prevHash = useRef(hash)

  // Router doesn't scroll on navigation: go to the #section if given, else to the top.
  // Opening a modal, or the REPLACE that clears its hash on close, keeps the scroll position.
  // Other REPLACEs (Router uses one when a link points at the current URL) scroll as normal.
  useEffect(() => {
    const closingModal = navType === 'REPLACE' && modalHashes.includes(prevHash.current)
    prevHash.current = hash
    if (modalHashes.includes(hash) || closingModal) return
    const el = hash && document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key, navType])

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Modals />
    </MotionConfig>
  )
}
