import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/config'

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 to-transparent" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/284963962_170516385336259_3362864343088587641_n-ahklnqVDacJTDUxBCYOHAOSXCjVlNE.jpg"
          alt="Real Madrid supporters celebrating at gathering"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            {site.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-xl leading-relaxed">
            Bringing Real Madrid supporters together in Vancouver
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/join-us" className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Join the Peña
            </Link>
            <Link href="#about" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-navy font-semibold rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Discover Our Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
