'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { site } from '@/lib/config'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Events', href: '/#events' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-gray">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uQ8u4UCjndErmkHrjf0Q69dkGOl29N.png" 
            alt="Peña Madridista Vancouver" 
            className="h-12 w-12 object-contain group-hover:opacity-90 transition-opacity"
          />
          <span className="hidden sm:inline font-serif font-bold text-brand-navy text-lg">Peña Vancouver</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-brand-navy font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/join-us"
            className="btn-primary"
          >
            Become a Member
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-brand-gray rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-gray">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-brand-navy font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join-us"
              className="btn-primary block text-center"
              onClick={() => setIsOpen(false)}
            >
              Become a Member
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
