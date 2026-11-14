import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { site } from '../data/site'

export default function ContactCTA() {
  return (
    <section className="border-t border-copper/20 bg-umber">
      <div className="container-x flex flex-col items-center gap-8 py-16 text-center md:py-20 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <p className="eyebrow">Start Your Project</p>
          <h2 className="mt-3 text-3xl text-white md:text-5xl">Ready to build your dream home?</h2>
          <p className="mt-4 text-soft">Share your plans with us and we will help you take the next step.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link to="/contact" className="btn-gold">Contact Us</Link>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline"><Phone size={18} />Call Now</a>
        </div>
      </div>
    </section>
  )
}
