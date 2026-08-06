import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Madridistas belong together
        </h2>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          Join Vancouver&apos;s official Real Madrid supporters&apos; club today. Become part of a passionate community that celebrates football, friendship, and the greatest club in the world.
        </p>
        <Link href="/join-us" className="btn-accent">
          Become a Member Today
        </Link>
      </div>
    </section>
  )
}
