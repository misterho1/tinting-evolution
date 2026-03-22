'use client'
import { motion } from 'framer-motion'
import { Sun, Shield, Eye, Zap, Thermometer, DollarSign } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Sun,
    title: 'Block Up to 99% UV',
    desc: 'Protect your family, furniture, and flooring from harmful UV rays that cause fading and skin damage.',
  },
  {
    icon: Thermometer,
    title: 'Heat Rejection',
    desc: 'Keep your home cooler in summer. Our films reject up to 80% of solar heat, reducing AC load significantly.',
  },
  {
    icon: Eye,
    title: 'Privacy Films',
    desc: 'One-way vision and frosted films provide daytime privacy while keeping natural light flowing in.',
  },
  {
    icon: DollarSign,
    title: 'Lower Energy Bills',
    desc: 'Customers report 10–30% savings on energy costs after installation. The film pays for itself.',
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    desc: 'Safety film holds shattered glass in place during accidents or break-in attempts.',
  },
  {
    icon: Zap,
    title: 'Glare Reduction',
    desc: 'Work from home, watch TV, or relax without annoying sun glare at any time of day.',
  },
]

export default function ResidentialBenefits() {
  return (
    <section className="section-padding bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-3">Why Tint Your Home</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">Benefits of Residential Film</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Window tinting isn&apos;t just for cars. Home and commercial film is one of the smartest investments you can make.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-purple-600/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-600/20 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition-colors">
                <b.icon size={20} className="text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <h3 className="font-bebas text-3xl text-white mb-3">Custom Quotes for Every Project</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Residential pricing varies by square footage, window type, and film selection. Contact us for a free on-site estimate — no obligation, no pressure.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-xl transition-all"
          >
            Schedule Free Estimate
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
