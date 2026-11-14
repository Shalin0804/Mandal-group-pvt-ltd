import { gallery, images, projects, site } from '../data/site'
import PageBanner, { SectionHeading } from '../components/PageBanner'
import ProjectCard from '../components/ProjectCard'
import ContactCTA from '../components/ContactCTA'
import useMeta from '../useMeta'

export default function Projects() {
  useMeta('Our Projects', `Explore residential projects by ${site.name} — villas, family homes and modern residences.`)

  return (
    <>
      <PageBanner
        title="Our Projects"
        subtitle="A look at the homes we design and build — each one planned around the family who lives in it."
        image={images.projectsBanner}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title="From site to finished home" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-sm">
                <img src={g.src} alt={g.alt} loading="lazy" width="800" height="800" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-coal">
        <div className="container-x">
          <SectionHeading eyebrow="Residential Projects" title="Homes built with care" text="Every project reflects our focus on quality, practical design and dependable execution." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
