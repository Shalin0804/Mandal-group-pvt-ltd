export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="relative flex min-h-72 items-center bg-night md:min-h-96">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="container-x relative py-16 text-center">
        <h1 className="text-4xl text-white md:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base text-soft md:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl">{title}</h2>
      {text && <p className="mt-4 leading-relaxed">{text}</p>}
    </div>
  )
}
