import Link from 'next/link'
import { Mail, Phone, MapPin, Heart, Share2, Video, MessageSquare } from 'lucide-react'
import { contact, social } from '@/lib/config'

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="section-heading">Get in Touch</h2>
          <div className="w-20 h-1 bg-brand-gold mb-8" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-2xl text-brand-navy mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-brand-navy mb-1">Phone</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-gray-600 hover:text-brand-navy transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-brand-navy mb-1">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-600 hover:text-brand-navy transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-brand-navy mb-1">Location</p>
                  <p className="text-gray-600">{contact.location}</p>
                  {contact.mapUrl && (
                    <a
                      href={contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-navy hover:text-brand-gold font-semibold transition-colors mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif font-bold text-2xl text-brand-navy mb-6">Follow Us</h3>
            <p className="text-gray-600 mb-8">
              Stay connected with us on social media for the latest updates, event announcements, and community highlights.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-brand-gray hover:border-brand-gold hover:shadow-lg transition-all group"
                >
                  <Heart size={24} className="text-brand-navy group-hover:text-brand-gold" />
                  <span className="font-semibold text-brand-navy">Instagram</span>
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-brand-gray hover:border-brand-gold hover:shadow-lg transition-all group"
                >
                  <Share2 size={24} className="text-brand-navy group-hover:text-brand-gold" />
                  <span className="font-semibold text-brand-navy">Facebook</span>
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-brand-gray hover:border-brand-gold hover:shadow-lg transition-all group"
                >
                  <MessageSquare size={24} className="text-brand-navy group-hover:text-brand-gold" />
                  <span className="font-semibold text-brand-navy">Twitter</span>
                </a>
              )}
              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-brand-gray hover:border-brand-gold hover:shadow-lg transition-all group"
                >
                  <Video size={24} className="text-brand-navy group-hover:text-brand-gold" />
                  <span className="font-semibold text-brand-navy">YouTube</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
