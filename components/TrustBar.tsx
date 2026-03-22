'use client'
import { motion } from 'framer-motion'
import { Shield, Star, Award, Clock, ThumbsUp, Zap } from 'lucide-react'

const items = [
  { icon: Shield, text: 'Lifetime Guarantee' },
  { icon: Star, text: '5-Star Google Rated' },
  { icon: Award, text: 'Certified Installers' },
  { icon: Clock, text: 'Same-Day Availability' },
  { icon: ThumbsUp, text: '100% Satisfaction' },
  { icon: Zap, text: 'Fast Turnaround' },
  { icon: Shield, text: 'Premium Film Brands' },
  { icon: Star, text: 'Auto & Residential' },
]

const doubled = [...items, ...items]

export default function TrustBar() {
  return (
    <section className="py-6 bg-navy-900/30 border-y border-blue-900/20 overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <item.icon size={16} className="text-blue-500" />
              <span className="text-gray-300 text-sm font-medium">{item.text}</span>
              <span className="text-blue-800 ml-6">◆</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
