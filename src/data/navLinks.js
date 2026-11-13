import { ORIGIN } from './home.js'

// The four redesigned pages.
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/online-school', label: 'Online School' },
  { to: '/on-campus', label: 'On Campus' },
  { to: '/floww', label: 'FLOWW' },
]

// The rest of the original main menu; these pages are not part of the redesign, so they link to the live site.
export const externalNav = [
  { to: `${ORIGIN}/garage/`, label: 'The Garage' },
  { to: `${ORIGIN}/online-school/how-to-apply/`, label: 'Admissions' },
  { to: `${ORIGIN}/another-way/`, label: 'Inside 21K' },
  { to: `${ORIGIN}/blog/`, label: 'Blog' },
]

// What the header search can jump to.
export const searchIndex = [
  ...navLinks,
  ...externalNav,
  { to: '/#about', label: 'Built for a global citizen' },
  { to: '/#programs', label: 'Programs' },
  { to: '/#achievers', label: 'Our achievers' },
  { to: '/#events', label: 'Upcoming events & webinars' },
  { to: '/#testimonials', label: 'What our community says' },
  { to: '#enquiry', label: 'Book a Live Class Demo' },
]

export const socials = [
  { name: 'Facebook', icon: 'facebook', to: 'https://www.facebook.com/21Kschool/' },
  { name: 'Instagram', icon: 'instagram', to: 'https://www.instagram.com/21kschool/' },
  { name: 'YouTube', icon: 'youtube', to: 'https://www.youtube.com/@21KSchool' },
  { name: 'LinkedIn', icon: 'linkedin', to: 'https://www.linkedin.com/company/21kschool/' },
  { name: 'X', icon: 'x', to: 'https://x.com/21kschool' },
]

// Hashes that open a pop-up instead of scrolling (see components/Modals.jsx).
export const modalHashes = ['#enquiry']
