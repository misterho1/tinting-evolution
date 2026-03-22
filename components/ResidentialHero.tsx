'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function ResidentialHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[#070B14]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(147,51,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-400 text-sm transition-colors mb-8">
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-16 h-16 rounded-2xl bg-purple-600/15 border border-purple-600/25 flex items-center justify-center mx-auto mb-6"
        >
          <Home size={28} className="text-purple-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-bebas text-5xl sm:text-7xl text-white mb-4 tracking-wide"
        >
          Residential & Commercial <span className="text-purple-400">Tinting</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Transform your home or business with professional window film. Block heat, protect furniture from UV damage, increase privacy — and reduce energy bills year-round.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {['Single Family Home', 'Condo', 'Office', 'Retail', 'Storefront', 'Commercial'].map((v) => (
            <span key={v} className="bg-purple-600/10 border border-purple-600/20 text-purple-300 text-sm px-4 py-1.5 rounded-full">
              {v}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/book"
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-600/30"
          >
            Book Residential Tinting
          </Link>
          <a
            href="tel:(801) 414-4486"
            className="border border-purple-700/50 hover:border-purple-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Get a Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  )
}
