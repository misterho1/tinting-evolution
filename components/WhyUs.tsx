'use client'
import { motion } from 'framer-motion'
import { Shield, Zap, Award, Users } from 'lucide-react'

const perks = [
  {
    icon: Shield,
    title: 'Lifetime Guarantee',
    desc: 'Every tint job is backed by a lifetime guarantee. Any imperfections? We repair or replace immediately — no questions asked.',
  },
  {
    icon: Award,
    title: 'Premium Film Only',
    desc: 'We use only top-tier ceramic and carbon films from trusted brands. No cheap materials — ever.',
  },
  {
    icon: Zap,
    title: 'Fast & Clean Install',
    desc: 'Most vehicles are done in 2–4 hours. We treat your property with respect and leave zero mess behind.',
  },
  {
    icon: Users,
    title: 'Experienced Techs',
    desc: 'Our certified installers have tinted hundreds of vehicles and homes. Precision is our standard, not our promise.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">The Evolution Difference</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We don&apos;t cut corners. Every job gets our full attention — because your vehicle deserves nothing less.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-purple-600/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/20 transition-colors">
                <p.icon size={24} className="text-purple-400" />
              </div>
              <h3 className="font-bebas text-xl text-white mb-2 tracking-wide">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
