import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { site, services } from '../data/site'
import { Logo, links } from './Navbar'

export default function Footer() {
  return (
    <footer className="border-t border-copper/30 bg-coal text-muted">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed">
            Building quality homes through thoughtful design and reliable execution.
          </p>
          <p className="font-serif text-lg italic text-gold">
            “{site.motto}”
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} className="transition-colors hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-white">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.map((s) => <li key={s.title}><Link to="/services" className="transition-colors hover:text-gold">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-white">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex gap-3 hover:text-gold"><Phone size={18} className="shrink-0 text-gold" />{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-gold"><Mail size={18} className="shrink-0 text-gold" />{site.email}</a></li>
            <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-gold" />{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-copper/20">
        <p className="container-x py-6 text-center text-xs">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
