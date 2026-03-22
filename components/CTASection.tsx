'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-[#080D1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border-blue rounded-3xl p-10 sm:p-16"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-blue-600/5 pointer-events-none" />

          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">Ready to Upgrade?</p>
          <h2 className="font-bebas text-5xl sm:text-7xl text-white mb-4 glow-blue">
            Book Your <span className="text-blue-400">Free Quote</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            By appointment only. Same-day slots available. Every job backed by our lifetime guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              Schedule Online
            </Link>
            <a
              href="tel:PHONE_PLACEHOLDER"
              className="flex items-center justify-center gap-2 border border-blue-700/50 hover:border-blue-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
