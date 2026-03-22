'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Star, Clock, ChevronDown } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Cars Tinted' },
  { value: '5★', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction' },
  { value: 'Lifetime', label: 'Guarantee' },
]

function AnimatedCar() {
  const [phase, setPhase] = useState<'hidden' | 'enter' | 'drive'>('hidden')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('enter'), 400)
    const t2 = setTimeout(() => setPhase('drive'), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="relative w-full overflow-hidden pointer-events-none" style={{ height: '140px' }}>
      {/* Road line */}
      <div className="absolute bottom-4 left-0 right-0 h-px bg-purple-900/30" />

      {/* Moving road dashes */}
      {phase !== 'hidden' && (
        <motion.div
          className="absolute bottom-8 left-0 h-px"
          style={{ width: '300%' }}
          animate={phase === 'drive' ? { x: [0, '-66%'] } : { x: [0, '-20%'] }}
          transition={{ duration: phase === 'drive' ? 0.3 : 2.5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="h-full" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(147,51,234,0.2) 0px, rgba(147,51,234,0.2) 40px, transparent 40px, transparent 80px)',
          }} />
        </motion.div>
      )}

      {/* Car */}
      <motion.div
        className="absolute"
        style={{ bottom: 12, left: 0 }}
        animate={
          phase === 'hidden' ? { x: '-400px', opacity: 0 } :
          phase === 'enter'  ? { x: '8vw',    opacity: 1 } :
                               { x: '110vw',  opacity: 1 }
        }
        transition={
          phase === 'enter'
            ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
            : phase === 'drive'
            ? { duration: 0.8, ease: [0.6, 0, 1, 0.8] }
            : { duration: 0 }
        }
      >
        {/* Glow under car */}
        <div className="absolute bottom-0 left-4 right-4 h-3 rounded-full blur-md" style={{ background: 'rgba(147,51,234,0.4)' }} />
        {/* Speed lines */}
        {phase === 'drive' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 0.12, repeat: Infinity }}
            className="absolute top-1/2 -left-20 -translate-y-1/2 flex flex-col gap-1.5"
          >
            {[35, 55, 30, 45, 25].map((w, i) => (
              <div key={i} className="h-px rounded-full bg-purple-400/70" style={{ width: w }} />
            ))}
          </motion.div>
        )}
        <img
          src="/car.png"
          alt="Purple Evo"
          style={{
            height: '120px',
            width: 'auto',
            filter: 'drop-shadow(0 0 20px rgba(147,51,234,0.7))',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background — simplified for mobile perf */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070B14]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
        {/* Grid — hidden on mobile for perf */}
        <div
          className="absolute inset-0 opacity-[0.02] hidden sm:block"
          style={{
            backgroundImage: `linear-gradient(rgba(147,51,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Fewer particles — desktop only */}
        <div className="hidden sm:block">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-500/20"
              style={{ left: `${10 + (i * 80) % 85}%`, top: `${15 + (i * 45) % 60}%` }}
              animate={{ y: [0, -15, 0], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 4 + (i % 3), delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full pt-24 pb-8 text-center my-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
        >
          <Star size={13} className="text-purple-400 fill-purple-400" />
          <span className="text-purple-300 text-sm font-medium">5-Star Rated · Lifetime Guarantee</span>
          <Star size={13} className="text-purple-400 fill-purple-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bebas text-6xl sm:text-8xl lg:text-[100px] leading-none tracking-wide mb-4"
        >
          <span className="text-white">TINTING </span>
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #C084FC, #9333EA, #D8B4FE)' }}>
            EVOLUTION
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-xl max-w-2xl mb-2 leading-relaxed"
        >
          Premium window tinting for your <strong className="text-white">car</strong>, <strong className="text-white">home</strong> & <strong className="text-white">business</strong>. Backed by a <strong className="text-purple-400">lifetime guarantee</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-4"
        >
          <Clock size={13} />
          By appointment only — book your free quote online
        </motion.p>

        </div>

        {/* ── CAR ANIMATION — above CTAs so visible on mobile ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatedCar />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 mb-8 justify-center"
        >
          <Link
            href="/book"
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-600/30 text-center"
          >
            Book Free Quote
          </Link>
          <Link
            href="/services/auto"
            className="border border-purple-700/50 hover:border-purple-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all text-center"
          >
            Auto Tinting →
          </Link>
          <Link
            href="/services/residential"
            className="border border-purple-700/50 hover:border-purple-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all text-center"
          >
            Home Tinting →
          </Link>
        </motion.div>

        {/* Stats — 2 on mobile, 4 on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="glass-card rounded-xl p-3 text-center">
              <div className="font-bebas text-2xl text-purple-400">{s.value}</div>
              <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-purple-600/50 z-10"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  )
}
