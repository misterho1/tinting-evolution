import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Star, Phone, Calendar, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Window Tinting Near Me | Tinting Evolution',
  description: 'Professional auto and residential window tinting. Ceramic, carbon & dyed film. Lifetime guarantee. Book your free quote today.',
  robots: 'noindex',
}

const faqs = [
  { q: 'How long does auto tinting take?', a: 'Most vehicles take 2–4 hours depending on size and number of windows.' },
  { q: 'Do you offer a guarantee?', a: 'Yes — lifetime guarantee on every job. Any imperfections and we fix it immediately, no questions asked.' },
  { q: 'What\'s the difference between ceramic and carbon film?', a: 'Ceramic film rejects more heat (60–80%) and is signal-friendly. Carbon is great value with 45–55% heat rejection. Both are backed by our lifetime warranty.' },
  { q: 'Do you tint residential windows?', a: 'Absolutely. We tint homes, condos, offices, and commercial properties.' },
]

export default function TintNearMePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-blue-400 fill-blue-400" />)}
            <span className="text-gray-400 text-sm ml-2">5-Star Rated</span>
          </div>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white mb-4">
            Professional Window <span className="text-blue-400">Tinting</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Auto, residential & commercial tinting. Ceramic, carbon, and dyed film. Lifetime guarantee on every job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30">
              <Calendar size={18} /> Book Free Quote
            </Link>
            <a href="tel:PHONE_PLACEHOLDER" className="flex items-center justify-center gap-2 border border-blue-700/50 hover:border-blue-500 text-gray-200 font-semibold px-8 py-4 rounded-xl transition-all">
              <Phone size={18} /> PHONE_PLACEHOLDER
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-[#080D1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-bebas text-4xl text-center text-white mb-8">Auto Tinting Prices</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Sedan', price: '$250', features: ['All windows', 'Dyed or Carbon', 'Lifetime guarantee'] },
              { name: 'Truck / SUV', price: '$300', features: ['All windows', 'Dyed or Carbon', 'Lifetime guarantee'], featured: true },
              { name: 'Ceramic Add-On', price: '+$200', features: ['Any vehicle', 'Max heat block', 'Signal-friendly'] },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-6 text-center ${p.featured ? 'bg-blue-600/10 border border-blue-500/30' : 'bg-[#0D1526] border border-blue-900/20'}`}>
                <div className="font-bebas text-lg text-gray-300 mb-1">{p.name}</div>
                <div className="font-bebas text-4xl text-blue-400 mb-4">{p.price}</div>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Check size={13} className="text-blue-500" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-bebas text-4xl text-center text-white mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-[#0D1526] border border-blue-900/20 rounded-xl p-5">
                <div className="font-semibold text-white mb-2">{f.q}</div>
                <div className="text-gray-400 text-sm">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-navy-950/95 backdrop-blur-xl border-t border-blue-900/30 px-4 py-3 flex gap-3 z-50">
        <a href="tel:PHONE_PLACEHOLDER" className="flex-1 text-center py-3 rounded-xl border border-blue-700/50 text-blue-400 font-medium">
          Call Now
        </a>
        <Link href="/book" className="flex-1 text-center py-3 rounded-xl bg-blue-600 text-white font-medium">
          Book Free Quote
        </Link>
      </div>
    </main>
  )
}
