export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-sm border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-sand text-gold">
        <Icon size={26} strokeWidth={1.6} />
      </span>
      <h3 className="mt-6 text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
