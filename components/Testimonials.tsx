'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Marcus T.',
    rating: 5,
    text: 'Best tint job I\'ve ever had. The ceramic film made a huge difference in heat rejection. My car stays noticeably cooler. Lifetime guarantee gives me total peace of mind.',
    vehicle: 'Mitsubishi Lancer Evo',
  },
  {
    name: 'Ashley R.',
    rating: 5,
    text: 'Had my home windows tinted and couldn\'t be happier. The glare in my living room is completely gone and my energy bill actually dropped. Professional, fast, and clean.',
    vehicle: 'Residential Client',
  },
  {
    name: 'Jordan M.',
    rating: 5,
    text: 'Came in with my truck and they did an amazing job. Super clean lines, no bubbles, and they walked me through all the film options. Highly recommend.',
    vehicle: 'Ford F-150',
  },
  {
    name: 'Brianna K.',
    rating: 5,
    text: 'These guys are the real deal. Showed up on time, finished faster than expected, and the tint looks incredible. Already sent three friends their way.',
    vehicle: 'Honda Civic',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#070B14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-3">Reviews</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">What Clients Say</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-purple-400 fill-purple-400" />
            ))}
            <span className="text-gray-300 text-sm ml-2">5.0 · Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-purple-400 fill-purple-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">&ldquo;{r.text}&rdquo;</p>
              <div className="border-t border-purple-900/30 pt-4">
                <div className="font-medium text-white text-sm">{r.name}</div>
                <div className="text-purple-500 text-xs mt-0.5">{r.vehicle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
