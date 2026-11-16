import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { images, projects, reasons, services, site } from '../data/site'
import { SectionHeading } from '../components/PageBanner'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import ContactCTA from '../components/ContactCTA'
import useMeta from '../useMeta'

export default function Home() {
  useMeta('Residential Construction Company', `${site.name} builds quality residential homes through thoughtful design and reliable execution.`)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center bg-night">
        <img src={images.hero} alt="Modern residential home exterior" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/50 to-transparent" />
        <div className="container-x relative py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">{site.name} — {site.tagline}</p>
            <h1 className="mt-4 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Building Dreams, Creating Better Living Spaces.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
              We turn your vision of a perfect home into reality through quality construction, thoughtful design and reliable execution.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="btn-gold">Explore Our Projects <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <img src={images.about} alt="Architectural plans and construction tools" loading="lazy" width="1000" height="750" className="aspect-[4/3] w-full rounded-sm object-cover ring-1 ring-copper/30" />
          <div>
            <SectionHeading center={false} eyebrow="Who We Are" title="Your partner in building a better home" />
            <p className="-mt-6 leading-relaxed">
              {site.name} is a residential construction company focused on building homes that are strong, functional and beautiful.
              We work closely with every family to understand their needs, plan carefully and deliver with quality at every stage.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-gold hover:text-white">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-coal">
        <div className="container-x">
          <SectionHeading eyebrow="Our Services" title="What we do" text={site.motto} />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-dark">View All Services <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Featured Projects" title="Homes we have built" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => <ProjectCard key={p.name} {...p} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-dark">View All Projects <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-coal">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <SectionHeading center={false} eyebrow="Why Choose Us" title="Built on trust, delivered with care" />
            <ul className="-mt-4 space-y-3">
              {['Clear and honest estimates', 'Regular site updates', 'Quality checks at every stage'].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 size={20} className="text-gold" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => <ServiceCard key={r.title} {...r} />)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
