import { images, services, site } from '../data/site'
import PageBanner, { SectionHeading } from '../components/PageBanner'
import ContactCTA from '../components/ContactCTA'
import useMeta from '../useMeta'

export default function Services() {
  useMeta('Our Services', `${site.name} offers skills development, skilled labour placements, rural and urban development, and water purification and supply.`)

  return (
    <>
      <PageBanner title="Our Services" subtitle={site.motto} image={images.servicesBanner} />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow={site.legalName} title="What we offer" text="From building people's skills to building communities, here is how we work." />
          <div className="space-y-16 md:space-y-24">
            {services.map(({ icon: Icon, title, details, image, alt }, i) => (
              <article key={title} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  width="900"
                  height="675"
                  className={`aspect-[4/3] w-full rounded-sm object-cover ring-1 ring-copper/30 ${i % 2 ? 'md:order-2' : ''}`}
                />
                <div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-sm border border-copper/30 bg-copper/10 text-gold">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <p className="eyebrow mt-6">Service {String(i + 1).padStart(2, '0')}</p>
                  <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
                  <p className="mt-4 leading-relaxed">{details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
