import { Users, Tv, Calendar, Heart, Bell, Star } from 'lucide-react'
import { about, benefits } from '@/lib/config'

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  Users,
  Tv,
  Calendar,
  Heart,
  Bell,
  Star,
}

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="section-heading">{about.title}</h2>
          <div className="w-20 h-1 bg-brand-gold mb-8" />
        </div>

        {/* Description */}
        <div className="max-w-3xl mb-16">
          {about.description.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Benefits Grid */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-brand-navy mb-8">Membership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon]
              return (
                <div
                  key={benefit.id}
                  className="p-6 bg-white rounded-lg border border-brand-gray border-l-4 border-l-brand-gold hover:shadow-lg hover:border-brand-gold transition-all"
                >
                  <div className="flex items-start gap-4">
                    {IconComponent && <IconComponent size={24} className="text-brand-gold flex-shrink-0 mt-1" />}
                    <div>
                      <h4 className="font-serif font-bold text-brand-navy mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
