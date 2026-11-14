import { MapPin } from 'lucide-react'

export default function ProjectCard({ name, location, image, description, status }) {
  return (
    <article className="group overflow-hidden card transition duration-300 hover:border-copper/60 hover:shadow-xl hover:shadow-black/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name} — residential project`}
          loading="lazy"
          width="900"
          height="675"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {status && (
          <span className="absolute left-4 top-4 rounded-sm border border-copper/50 bg-night/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            {status}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl">{name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-gold"><MapPin size={16} />{location}</p>
        <p className="mt-3 text-sm leading-relaxed">{description}</p>
      </div>
    </article>
  )
}
