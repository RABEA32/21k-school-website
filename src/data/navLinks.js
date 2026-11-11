// The four pages.
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/online-school', label: 'Online School' },
  { to: '/on-campus', label: 'On Campus' },
  { to: '/floww', label: 'FLOWW' },
]

// Homepage sections, shown in the header after the pages.
export const sectionLinks = [
  { to: '/#programs', label: 'Academics' },
  { to: '/#news', label: 'News & Events' },
  { to: '/#contact', label: 'Contact' },
]

// What the header search can jump to.
export const searchIndex = [
  ...navLinks,
  ...sectionLinks,
  { to: '/#about', label: 'About Our School' },
  { to: '/#student-life', label: 'Student Life' },
  { to: '/#testimonials', label: 'What Parents Say' },
  { to: '#apply', label: 'Apply for Admission' },
  { to: '#tour', label: 'Virtual Tour' },
]


// Social profiles (links not supplied yet).
export const socials = [
  { name: 'Facebook', icon: 'facebook' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'YouTube', icon: 'youtube' },
  { name: 'LinkedIn', icon: 'linkedin' },
]

// Hashes that open a pop-up instead of scrolling (see components/Modals.jsx).
export const modalHashes = ['#apply', '#tour']
