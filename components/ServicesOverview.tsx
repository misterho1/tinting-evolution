'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Car, Home, Building2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Auto Window Tinting',
    desc: 'Precision tinting for sedans, trucks, SUVs, and sports cars. Block heat, UV rays, and glare while enhancing your vehicle\'s look.',
    features: ['Sedan, Truck & SUV', 'Ceramic & Carbon Film', 'Lifetime Guarantee'],
    href: '/services/auto',
    cta: 'View Auto Services',
  },
  {
    icon: Home,
    title: 'Residential Tinting',
    desc: 'Keep your home cooler, protect your furniture, and increase privacy. Professional installation on all window types.',
    features: ['Single & Double Pane', 'UV & Heat Rejection', 'Privacy Films'],
    href: '/services/residential',
    cta: 'View Home Services',
  },
  {
    icon: Building2,
    title: 'Commercial Tinting',
    desc: 'Reduce energy costs and protect your workspace. We service offices, storefronts, and commercial properties.',
    features: ['Office & Retail', 'Safety & Security Film', 'Energy Savings'],
    href: '/services/residential',
    cta: 'View Commercial',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-[#070B14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From daily drivers to dream homes — we tint it all with precision, speed, and a lifetime guarantee on every job.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-7 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-600/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/25 transition-colors">
                <s.icon size={22} className="text-blue-400" />
              </div>
              <h3 className="font-bebas text-2xl text-white mb-3 tracking-wide">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="flex items-center justify-between text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:gap-3 transition-all mt-auto border-t border-blue-900/30 pt-5"
              >
                {s.cta}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
