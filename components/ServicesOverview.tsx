'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Car, Shield, Star, ArrowRight } from 'lucide-react'

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
    icon: Shield,
    title: 'Ceramic Film',
    desc: 'Our top-tier film blocks up to 80% of solar heat and 99%+ UV rays. Crystal clear, signal-friendly, and built to last a lifetime.',
    features: ['Max Heat Rejection', 'Signal-Friendly', 'Lifetime Guarantee'],
    href: '/services/auto',
    cta: 'Learn About Ceramic',
  },
  {
    icon: Star,
    title: 'Carbon Film',
    desc: 'Superior heat rejection with a sleek matte finish. Won\'t fade or turn purple over time — the best value for performance.',
    features: ['Great Value', 'No Fading', 'Lifetime Guarantee'],
    href: '/services/auto',
    cta: 'Learn About Carbon',
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
          <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From daily drivers to dream rides — we tint it all with precision, speed, and a lifetime guarantee on every job.
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
              <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-600/20 flex items-center justify-center mb-5 group-hover:bg-purple-600/25 transition-colors">
                <s.icon size={22} className="text-purple-400" />
              </div>
              <h3 className="font-bebas text-2xl text-white mb-3 tracking-wide">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="flex items-center justify-between text-purple-400 hover:text-purple-300 text-sm font-medium group-hover:gap-3 transition-all mt-auto border-t border-purple-900/30 pt-5"
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
