'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PayPalForm } from '@/components/paypal-form'
import { membership, benefits, faqItems, contact } from '@/lib/config'
import { ChevronDown, Check } from 'lucide-react'

export default function JoinUs() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-brand-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Become a Member</h1>
            <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">
              Join Vancouver&apos;s official Real Madrid supporters&apos; club and become part of our passionate community.
            </p>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Why Join Peña Madridista Vancouver?</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Peña Madridista Vancouver is Canada&apos;s first officially registered Real Madrid fan club. We bring together supporters who are passionate about football, community, and the beautiful game.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you&apos;re a lifelong Madridista or just discovering Real Madrid, our Peña welcomes everyone who shares our love for the club.
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start gap-4 p-4 bg-brand-light rounded-lg">
                    <div className="p-2 bg-brand-gold bg-opacity-20 rounded-full flex-shrink-0 mt-1">
                      <Check size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Membership Details */}
        <section className="py-16 md:py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4 text-center">Membership Details</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Pricing Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 md:col-span-2 max-w-2xl mx-auto w-full text-center">
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-2">Monthly Membership</h3>
                <p className="text-brand-gold text-5xl font-bold mb-4">{membership.price}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {membership.description}
                </p>
              </div>

              {/* Payment Info */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-l-brand-gold">
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-6">Secure Payment</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <Check size={20} className="text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-brand-navy">PayPal Processing</p>
                      <p className="text-sm text-gray-600">All payments are processed securely through PayPal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check size={20} className="text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-brand-navy">Auto-Renewal</p>
                      <p className="text-sm text-gray-600">Your subscription renews automatically each month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check size={20} className="text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-brand-navy">Cancel Anytime</p>
                      <p className="text-sm text-gray-600">No hidden fees, cancel from your PayPal account</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-6">After Payment</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-brand-navy mb-2">1. Confirmation</p>
                    <p className="text-gray-600 text-sm">You&apos;ll receive a confirmation email with your membership details</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy mb-2">2. Community Access</p>
                    <p className="text-gray-600 text-sm">Get added to our WhatsApp group and email list for event updates</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy mb-2">3. Join Events</p>
                    <p className="text-gray-600 text-sm">Start attending match-day gatherings and special events immediately</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PayPal Subscription Form */}
            <div className="text-center mb-12">
              <PayPalForm />
              <p className="text-gray-600 text-sm mt-4">Secure payment processed by PayPal</p>
            </div>

            {/* Contact for Questions */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto">
              <h3 className="font-serif font-bold text-xl text-brand-navy mb-4">Questions About Membership?</h3>
              <p className="text-gray-600 mb-6">
                We&apos;re here to help. Get in touch if you have any questions about membership or need more information.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="btn-primary inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4 text-center">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-12" />

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-brand-gray rounded-lg overflow-hidden hover:border-brand-gold transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(openFaqId === index ? null : index)}
                    className="w-full px-6 py-4 bg-brand-light hover:bg-opacity-70 transition-colors flex items-center justify-between"
                  >
                    <span className="font-semibold text-brand-navy text-left">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-brand-gold transition-transform ${
                        openFaqId === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqId === index && (
                    <div className="px-6 py-4 bg-white border-t border-brand-gray">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
