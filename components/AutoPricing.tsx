'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Shield } from 'lucide-react'

const packages = [
  {
    name: 'Sedan',
    price: '$250',
    desc: 'Perfect for cars, coupes & hatchbacks',
    features: ['Full car coverage', 'All windows included', 'Dyed or Carbon film', 'Lifetime guarantee', 'Same-day service available'],
    cta: 'Book Sedan Tint',
    featured: false,
  },
  {
    name: 'Truck / SUV',
    price: '$300',
    desc: 'Trucks, SUVs & larger vehicles',
    features: ['Full vehicle coverage', 'All windows included', 'Dyed or Carbon film', 'Lifetime guarantee', 'Same-day service available'],
    cta: 'Book Truck/SUV Tint',
    featured: true,
  },
  {
    name: 'Ceramic Upgrade',
    price: '+$200',
    desc: 'Add to any package above',
    features: ['Upgrade any vehicle', 'Maximum heat rejection', '60–80% heat block', 'Signal-friendly', 'Lifetime guarantee'],
    cta: 'Upgrade to Ceramic',
    featured: false,
  },
]

export default function AutoPricing() {
  return (
    <section className="section-padding bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">Transparent Pricing</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">Auto Tinting Prices</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No hidden fees, no surprises. Every job comes with our lifetime guarantee — we&apos;ll fix any imperfection immediately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                pkg.featured
                  ? 'gradient-border-blue bg-blue-600/5'
                  : 'glass-card'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-bebas text-2xl text-white tracking-wide mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm">{pkg.desc}</p>
              </div>
              <div className="mb-6">
                <span className="font-bebas text-5xl text-blue-400">{pkg.price}</span>
                {pkg.name !== 'Ceramic Upgrade' && (
                  <span className="text-gray-500 text-sm ml-2">starting at</span>
                )}
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={15} className="text-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className={`text-center font-semibold py-3 px-6 rounded-xl transition-all ${
                  pkg.featured
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                    : 'border border-blue-700/50 hover:border-blue-500 text-gray-200 hover:text-white'
                }`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Guarantee note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mt-10 text-sm text-gray-400"
        >
          <Shield size={16} className="text-blue-500" />
          All prices include installation · Lifetime guarantee on every job · Book online for fastest scheduling
        </motion.div>
      </div>
    </section>
  )
}
