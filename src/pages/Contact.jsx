import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { images, site } from '../data/site'
import PageBanner from '../components/PageBanner'
import useMeta from '../useMeta'

const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello ${site.name}, I would like to discuss a construction project.`)}`

const details = [
  { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Office Address', value: site.address },
]

export default function Contact() {
  useMeta('Contact Us', `Get in touch with ${site.name} to discuss your new home or renovation project.`)
  const [sent, setSent] = useState(false)

  // Frontend-only: opens the visitor's email app with the message pre-filled.
  function handleSubmit(e) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\n\n${f.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${f.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Tell us about your project. We would be glad to hear from you." image={images.contactBanner} />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Let's talk about your home</h2>
            <p className="mt-4 leading-relaxed">Call, email or message us on WhatsApp, or fill in the form and we will get back to you.</p>

            <ul className="mt-8 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-sand text-gold"><Icon size={22} /></span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-wider text-charcoal">{label}</p>
                    {href ? <a href={href} className="break-all hover:text-gold">{value}</a> : <p>{value}</p>}
                  </div>
                </li>
              ))}
            </ul>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn mt-8 w-full bg-[#25D366] text-white hover:bg-[#1ebe5a] sm:w-auto">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-sm bg-sand p-6 sm:p-10">
            <h2 className="text-3xl">Send us a message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-charcoal">
                Full Name *
                <input name="name" required minLength={2} autoComplete="name" className="input mt-2 font-normal" />
              </label>
              <label className="block text-sm font-semibold text-charcoal">
                Phone Number *
                <input name="phone" type="tel" required pattern="[0-9+\-\s]{10,15}" title="Enter a valid phone number (10–15 digits)" autoComplete="tel" className="input mt-2 font-normal" />
              </label>
              <label className="block text-sm font-semibold text-charcoal sm:col-span-2">
                Email Address
                <input name="email" type="email" autoComplete="email" className="input mt-2 font-normal" />
              </label>
              <label className="block text-sm font-semibold text-charcoal sm:col-span-2">
                Message *
                <textarea name="message" required minLength={10} rows={5} className="input mt-2 resize-y font-normal" placeholder="Tell us about your plot, location and requirements" />
              </label>
            </div>
            <button type="submit" className="btn-gold mt-6 w-full sm:w-auto"><Send size={18} /> Send Message</button>
            {sent && (
              <p role="status" className="mt-4 text-sm text-charcoal">
                Your email app should open with your message. If it didn't, email us at <a href={`mailto:${site.email}`} className="font-semibold text-gold">{site.email}</a>.
              </p>
            )}
          </form>
        </div>
      </section>

      {site.mapEmbedUrl && (
        <section aria-label="Office location">
          <iframe src={site.mapEmbedUrl} title={`${site.name} office location`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-96 w-full border-0" />
        </section>
      )}
    </>
  )
}
