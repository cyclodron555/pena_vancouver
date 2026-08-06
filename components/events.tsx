'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Clock, MessageCircle } from 'lucide-react'
import { events, Event } from '@/lib/events'

export function Events() {
  const hasEvents = events.length > 0

  if (!hasEvents) {
    return (
      <section id="events" className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Upcoming Events</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-lg text-gray-600">New events will be announced soon. Follow us on social media for updates!</p>
        </div>
      </section>
    )
  }

  return (
    <section id="events" className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="section-heading">Upcoming Events</h2>
          <div className="w-20 h-1 bg-brand-gold mb-8" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events scheduled at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}

function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-brand-gray overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback for missing image
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
        {!event.image && (
          <div className="w-full h-full bg-gradient-to-br from-brand-navy to-brand-dark flex items-center justify-center text-white text-center">
            <span className="text-2xl">📅</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif font-bold text-lg text-brand-navy mb-3">{event.title}</h3>

        {/* Date & Time */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-start gap-2 text-gray-600">
            <MapPin size={18} className="mt-1" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.description}</p>

        {/* RSVP Button */}
        {event.rsvpLink ? (
          <a
            href={event.rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block text-center"
          >
            RSVP on WhatsApp
          </a>
        ) : (
          <button
            onClick={() => {
              // Open contact email
              window.location.href = 'mailto:contact@penamadridista.ca?subject=Event%20Inquiry'
            }}
            className="btn-secondary block text-center w-full"
          >
            Get More Info
          </button>
        )}
      </div>
    </div>
  )
}
