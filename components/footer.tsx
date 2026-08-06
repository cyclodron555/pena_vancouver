import Link from 'next/link'
import { Mail, Phone, MapPin, Heart, Share2 } from 'lucide-react'
import { site, contact, social, disclaimer } from '@/lib/config'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uQ8u4UCjndErmkHrjf0Q69dkGOl29N.png" 
              alt="Peña Madridista Vancouver" 
              className="h-12 w-12 object-contain mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Vancouver&apos;s official Real Madrid supporters&apos; club and Canada&apos;s first officially registered fan club.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#events" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-2"
                >
                  <Phone size={18} />
                  <span>{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-gold transition-colors p-2 hover:bg-white hover:bg-opacity-10 rounded-lg"
                  aria-label="Instagram"
                >
                  <Heart size={20} />
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-gold transition-colors p-2 hover:bg-white hover:bg-opacity-10 rounded-lg"
                  aria-label="Facebook"
                >
                  <Share2 size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs text-center">{disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
