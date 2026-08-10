'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    title: 'Victory Moment',
    description: 'Celebrating under neon lights',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/284076799_170516225336275_6809880188978974147_n-dAQpWWPi52cMQBQ9U4wFCCKOfNlfY2.jpg',
  },
  {
    id: 2,
    title: 'Brotherhood',
    description: 'Supporters bonding in Real Madrid jerseys',
    image: '/images/brotherhood-replacement.jpeg',
  },
  {
    id: 3,
    title: 'Community Pride',
    description: 'Large group gathering with Peña banner',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/284711885_170516788669552_665063094820491488_n-ZSl1mmrT9HExpI5Rv45uf7mrHoU59c.jpg',
  },
  {
    id: 4,
    title: 'Match Day Together',
    description: 'Supporters with Real Madrid banners at sports bar',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FB.png-vE69sQ7PlE7UuFhFPk6HT3Rn8Z9lKj.jpeg',
  },
  {
    id: 5,
    title: 'Champions Celebration',
    description: 'Celebration with champagne spray',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/284963962_170516385336259_3362864343088587641_n-Jzomntj3pz2pvrr4DkLKBOncY3cCGe.jpg',
  },
  {
    id: 6,
    title: 'United in Passion',
    description: 'The entire Peña community united together',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-NwYGQsw0SkqUPyWIpQRFOYyRppPDrM.jpg',
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const currentImage = galleryImages[currentIndex]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="section-heading">Gallery</h2>
          <div className="w-20 h-1 bg-brand-gold mb-8" />
        </div>

        {/* Slider */}
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Image Container */}
          <div className="relative w-full aspect-video bg-brand-navy flex items-center justify-center">
            {currentImage.image ? (
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="text-6xl mb-4 opacity-20">📸</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{currentImage.title}</h3>
                <p className="text-white opacity-75">{currentImage.description}</p>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">{currentImage.title}</h3>
                <p className="text-gray-600">{currentImage.description}</p>
              </div>
              <div className="text-sm font-semibold text-brand-gold">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 items-center">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-navy text-white hover:bg-brand-dark transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex-1 flex gap-2 justify-center flex-wrap">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-brand-gold w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-navy text-white hover:bg-brand-dark transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
