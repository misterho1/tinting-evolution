'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Shield, Star } from 'lucide-react'

const films = [
  {
    id: 'dyed',
    icon: Zap,
    name: 'Dyed Film',
    badge: 'Entry Level',
    badgeColor: 'bg-gray-700/60 text-gray-300',
    color: '#1a1a2e',
    opacity: 0.65,
    desc: 'Our entry-level film provides solid privacy, glare reduction, and a clean dark look. Great for daily drivers on a budget without sacrificing quality.',
    specs: [
      { label: 'UV Rejection', value: '99%' },
      { label: 'Heat Rejection', value: '30–45%' },
      { label: 'Glare Reduction', value: 'High' },
      { label: 'Infrared Block', value: 'Basic' },
    ],
    best: 'Budget-conscious drivers who want clean looks',
  },
  {
    id: 'carbon',
    icon: Shield,
    name: 'Carbon Film',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-700/40 text-blue-300',
    color: '#0f172a',
    opacity: 0.75,
    desc: 'Carbon film delivers superior heat rejection, a matte finish, and won\'t fade or turn purple over time. The best value for performance and longevity.',
    specs: [
      { label: 'UV Rejection', value: '99%' },
      { label: 'Heat Rejection', value: '45–55%' },
      { label: 'Glare Reduction', value: 'Excellent' },
      { label: 'Infrared Block', value: 'Moderate' },
    ],
    best: 'Drivers who want lasting performance and great looks',
  },
  {
    id: 'ceramic',
    icon: Star,
    name: 'Ceramic Film',
    badge: 'Premium',
    badgeColor: 'bg-blue-500/20 text-blue-200',
    color: '#0c1a3a',
    opacity: 0.85,
    desc: 'Our top-tier ceramic film blocks the most heat and infrared rays without darkening your windows. Crystal clear, signal-friendly, and built to last a lifetime.',
    specs: [
      { label: 'UV Rejection', value: '99%+' },
      { label: 'Heat Rejection', value: '60–80%' },
      { label: 'Glare Reduction', value: 'Maximum' },
      { label: 'Infrared Block', value: 'Superior' },
    ],
    best: 'Those who want the absolute best in comfort and clarity',
  },
]

export default function FilmOptions() {
  const [active, setActive] = useState('carbon')
  const film = films.find((f) => f.id === active)!

  return (
    <section className="section-padding bg-[#070B14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">Film Selection</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">Choose Your Film</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Three tiers of window film — every one backed by our lifetime guarantee. We&apos;ll help you pick the right fit.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {films.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === f.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              <f.icon size={14} />
              {f.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Window preview */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-900/30" style={{ aspectRatio: '4/3' }}>
              {/* Car interior mockup */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-navy-950" />
              {/* Window frame */}
              <div className="absolute inset-6 rounded-xl border-2 border-blue-800/40">
                {/* Tint overlay */}
                <motion.div
                  key={`tint-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: film.opacity }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 rounded-xl"
                  style={{ backgroundColor: film.color }}
                />
                {/* Reflection */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
                {/* Label */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${film.badgeColor}`}>
                    {film.badge}
                  </span>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <div className="font-bebas text-lg text-white/60 tracking-widest">{film.name}</div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full mb-4 ${film.badgeColor}`}>
                <film.icon size={12} />
                {film.badge}
              </div>
              <h3 className="font-bebas text-4xl text-white mb-3 tracking-wide">{film.name}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{film.desc}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {film.specs.map((s) => (
                  <div key={s.label} className="glass-card rounded-xl p-3">
                    <div className="text-gray-500 text-xs mb-1">{s.label}</div>
                    <div className="text-blue-300 font-semibold text-sm">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-xl p-4 mb-6">
                <div className="text-gray-500 text-xs mb-1">Best For</div>
                <div className="text-gray-200 text-sm">{film.best}</div>
              </div>

              <a
                href="/book"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Book with {film.name}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
