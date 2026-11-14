export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <div className="card p-8 transition duration-300 hover:-translate-y-1 hover:border-copper/60 hover:shadow-lg hover:shadow-black/40">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-sm border border-copper/30 bg-copper/10 text-gold">
        <Icon size={26} strokeWidth={1.6} />
      </span>
      <h3 className="mt-6 text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
