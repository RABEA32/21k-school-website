import { NavLink, Outlet, useLocation } from 'react-router'
import { motion } from 'motion/react'
import { navLinks } from '../data/navLinks.js'

// Placeholder shell: shared nav + footer get designed in a later step.
export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex flex-wrap gap-4 p-4">
        {navLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? 'font-bold underline' : '')}>
            {label}
          </NavLink>
        ))}
      </nav>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 p-4"
      >
        <Outlet />
      </motion.main>
      <footer className="p-4 text-sm">Footer</footer>
    </div>
  )
}
