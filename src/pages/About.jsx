import { Eye, Target } from 'lucide-react'
import { images, reasons, site, values } from '../data/site'
import PageBanner, { SectionHeading } from '../components/PageBanner'
import ServiceCard from '../components/ServiceCard'
import ContactCTA from '../components/ContactCTA'
import useMeta from '../useMeta'

export default function About() {
  useMeta('About Us', `Learn about ${site.name}, our vision, mission and the values that guide every home we build.`)

  return (
    <>
      <PageBanner title="About Us" subtitle="Committed to building quality homes with honesty and care." image={images.aboutBanner} />

      {/* Introduction */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Our Company" title={`Welcome to ${site.name}`} />
            <div className="-mt-6 space-y-4 leading-relaxed">
              <p>
                {site.name} is a residential construction company dedicated to creating homes that families can live in with comfort and pride.
                We believe a home should be built right the first time — on a solid foundation, with quality materials and careful workmanship.
              </p>
              <p>
                From planning and design to construction and finishing, we guide our clients through every step with clear communication
                and a commitment to doing the job well.
              </p>
            </div>
          </div>
          <img src={images.about} alt="Construction planning on site" loading="lazy" width="1000" height="750" className="aspect-[4/3] w-full rounded-sm object-cover ring-1 ring-copper/30" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-coal">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <ServiceCard icon={Eye} title="Our Vision" text="To be a trusted name in residential construction, known for homes that stand the test of time and for the relationships we build with every client." />
          <ServiceCard icon={Target} title="Our Mission" text="To deliver well-planned, well-built homes through quality materials, skilled workmanship, transparent processes and timely execution." />
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Core Values" title="What guides our work" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => <ServiceCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section bg-coal">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="Why families choose our construction group" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => <ServiceCard key={r.title} {...r} />)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
