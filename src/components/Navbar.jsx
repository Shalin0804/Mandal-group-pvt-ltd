import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'

export const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Our Projects' },
  { to: '/contact', label: 'Contact Us' },
]

export function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <img src="/favicon.svg" alt="" width="40" height="40" className="h-10 w-10" />
      <span className="leading-tight">
        <span className={`block font-serif text-xl font-bold ${light ? 'text-white' : 'text-charcoal'}`}>{site.name}</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{site.tagline}</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-colors ${isActive ? 'text-gold' : 'text-charcoal hover:text-gold'}`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}><NavLink to={l.to} end className={linkClass}>{l.label}</NavLink></li>
          ))}
          <li><Link to="/contact" className="btn-gold">Get a Quote</Link></li>
        </ul>
        <button
          className="-mr-2 p-3 text-charcoal md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="container-x border-t border-gray-100 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end onClick={() => setOpen(false)} className={(s) => `block py-3 ${linkClass(s)}`}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
