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

// Mitsubishi Lancer Evo-style SVG car facing RIGHT, purple body, gold wheels
function EvoCarSVG() {
  return (
    <svg viewBox="0 0 420 160" width="420" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0f0a1e" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <radialGradient id="tireGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Shadow under car */}
      <ellipse cx="210" cy="148" rx="170" ry="8" fill="rgba(0,0,0,0.4)" />

      {/* === BODY === */}
      {/* Main lower body */}
      <path d="M55 105 Q60 88 80 85 L340 85 Q365 85 375 100 L385 118 Q385 128 375 130 L55 130 Q45 130 45 120 Z"
        fill="url(#bodyGrad)" />

      {/* Roof / cabin */}
      <path d="M130 85 Q145 55 175 48 L285 48 Q315 50 330 65 L345 85 Z"
        fill="url(#roofGrad)" />

      {/* Rear spoiler */}
      <rect x="60" y="79" width="55" height="4" rx="2" fill="#d8b4fe" opacity="0.8" />
      <rect x="72" y="73" width="4" height="10" rx="1" fill="#a855f7" />
      <rect x="95" y="73" width="4" height="10" rx="1" fill="#a855f7" />

      {/* Front bumper / splitter */}
      <path d="M370 105 L390 108 L392 118 L370 118 Z" fill="#4c1d95" />
      <rect x="372" y="120" width="20" height="4" rx="1" fill="#7e22ce" opacity="0.8" />

      {/* === WINDOWS === */}
      {/* Rear window */}
      <path d="M134 84 Q148 58 175 52 L200 52 L195 84 Z"
        fill="url(#windowGrad)" opacity="0.85" />
      {/* Front window */}
      <path d="M200 52 L285 50 Q310 52 325 65 L335 84 L200 84 Z"
        fill="url(#windowGrad)" opacity="0.85" />
      {/* Window frame lines */}
      <path d="M134 84 Q148 58 175 52 L200 52 L195 84 Z"
        fill="none" stroke="#c084fc" strokeWidth="1" opacity="0.4" />
      <path d="M200 52 L285 50 Q310 52 325 65 L335 84 L200 84 Z"
        fill="none" stroke="#c084fc" strokeWidth="1" opacity="0.4" />
      {/* B-pillar */}
      <line x1="197" y1="52" x2="197" y2="85" stroke="#3b0764" strokeWidth="5" />

      {/* === HEADLIGHT (right/front) === */}
      <path d="M358 95 L380 97 L382 110 L358 112 Z" fill="#e9d5ff" opacity="0.15" />
      <path d="M360 97 L378 99 L379 108 L360 110 Z" fill="white" opacity="0.9" />
      <line x1="363" y1="100" x2="377" y2="100" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
      <line x1="363" y1="104" x2="377" y2="104" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />

      {/* === TAIL LIGHT (left/rear) === */}
      <path d="M58 96 L75 95 L75 112 L58 113 Z" fill="#dc2626" opacity="0.7" />
      <path d="M60 98 L73 97 L73 111 L60 111 Z" fill="#ef4444" opacity="0.5" />
      <line x1="63" y1="100" x2="71" y2="100" stroke="#fca5a5" strokeWidth="1.5" opacity="0.8" />

      {/* Body side line / crease */}
      <path d="M75 108 Q200 102 370 106" fill="none" stroke="#c084fc" strokeWidth="1" opacity="0.3" />

      {/* Door handles */}
      <rect x="220" y="100" width="18" height="3" rx="1.5" fill="#d8b4fe" opacity="0.5" />
      <rect x="290" y="100" width="18" height="3" rx="1.5" fill="#d8b4fe" opacity="0.5" />

      {/* Side skirt */}
      <path d="M80 128 L370 128 L375 134 L75 134 Z" fill="#3b0764" opacity="0.8" />

      {/* === FRONT WHEEL === */}
      {/* Tire */}
      <circle cx="320" cy="135" r="22" fill="url(#tireGrad)" />
      <circle cx="320" cy="135" r="22" fill="none" stroke="#1c1c1c" strokeWidth="2" />
      {/* Rim */}
      <circle cx="320" cy="135" r="15" fill="url(#wheelGrad)" />
      <circle cx="320" cy="135" r="7" fill="#1c1c1c" />
      {/* Spokes */}
      {[0,60,120,180,240,300].map((deg, i) => (
        <line key={i}
          x1={320 + 7 * Math.cos(deg * Math.PI / 180)}
          y1={135 + 7 * Math.sin(deg * Math.PI / 180)}
          x2={320 + 14 * Math.cos(deg * Math.PI / 180)}
          y2={135 + 14 * Math.sin(deg * Math.PI / 180)}
          stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"
        />
      ))}
      <circle cx="320" cy="135" r="3" fill="#fbbf24" />
      {/* Brake caliper */}
      <path d="M310 122 Q318 120 326 122 L326 128 Q318 126 310 128 Z" fill="#dc2626" opacity="0.8" />

      {/* === REAR WHEEL === */}
      {/* Tire */}
      <circle cx="110" cy="135" r="22" fill="url(#tireGrad)" />
      <circle cx="110" cy="135" r="22" fill="none" stroke="#1c1c1c" strokeWidth="2" />
      {/* Rim */}
      <circle cx="110" cy="135" r="15" fill="url(#wheelGrad)" />
      <circle cx="110" cy="135" r="7" fill="#1c1c1c" />
      {/* Spokes */}
      {[0,60,120,180,240,300].map((deg, i) => (
        <line key={i}
          x1={110 + 7 * Math.cos(deg * Math.PI / 180)}
          y1={135 + 7 * Math.sin(deg * Math.PI / 180)}
          x2={110 + 14 * Math.cos(deg * Math.PI / 180)}
          y2={135 + 14 * Math.sin(deg * Math.PI / 180)}
          stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"
        />
      ))}
      <circle cx="110" cy="135" r="3" fill="#fbbf24" />

      {/* Wheel arches */}
      <path d="M88 130 Q90 108 110 107 Q130 108 132 130" fill="#4c1d95" stroke="#7e22ce" strokeWidth="1" />
      <path d="M298 130 Q300 108 320 107 Q340 108 342 130" fill="#4c1d95" stroke="#7e22ce" strokeWidth="1" />

      {/* Headlight beam glow */}
      <path d="M382 100 L420 94 L420 115 L382 108 Z" fill="#fde68a" opacity="0.06" />
    </svg>
  )
}

function AnimatedCar() {
  const [phase, setPhase] = useState<'hidden' | 'enter' | 'drive'>('hidden')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('enter'), 300)
    const t2 = setTimeout(() => setPhase('drive'), 3500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '200px', overflow: 'visible' }}>
      {/* Road surface */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#070B14] to-transparent" />
      <div className="absolute bottom-10 left-0 right-0 h-px bg-purple-900/30" />

      {/* Moving road dashes */}
      {phase !== 'hidden' && (
        <motion.div
          className="absolute bottom-16 left-0 h-px"
          style={{ width: '300%' }}
          animate={phase === 'drive' ? { x: [0, '-66%'] } : { x: [0, '-20%'] }}
          transition={{
            duration: phase === 'drive' ? 0.4 : 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="h-full" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(147,51,234,0.25) 0px, rgba(147,51,234,0.25) 50px, transparent 50px, transparent 100px)',
          }} />
        </motion.div>
      )}

      {/* The car */}
      <motion.div
        className="absolute"
        style={{ bottom: 28, left: 0 }}
        animate={
          phase === 'hidden' ? { x: '-460px', opacity: 0 } :
          phase === 'enter'  ? { x: '12vw',   opacity: 1 } :
                               { x: '110vw',  opacity: 1 }
        }
        transition={
          phase === 'enter'
            ? { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
            : phase === 'drive'
            ? { duration: 1.0, ease: [0.6, 0, 1, 0.8] }
            : { duration: 0 }
        }
      >
        {/* Headlight beam */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [1, 1.4, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute right-0 top-8 w-32 h-6 rounded-full blur-lg"
          style={{ background: 'radial-gradient(ellipse at right, rgba(253,230,138,0.3), transparent)', transformOrigin: 'right center' }}
        />
        {/* Ground shadow */}
        <motion.div
          animate={{ scaleX: [1, 1.05, 1], opacity: [0.4, 0.5, 0.4] }}
          transition={{ duration: 0.4, repeat: Infinity }}
          className="absolute bottom-[-4px] left-8 right-8 h-3 rounded-full blur-md"
          style={{ background: 'rgba(88,28,135,0.5)' }}
        />
        {/* Speed lines (shown while driving) */}
        {phase === 'drive' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.15, repeat: Infinity }}
            className="absolute top-1/2 -left-28 -translate-y-1/2 flex flex-col gap-2"
          >
            {[40, 60, 35, 50, 30].map((w, i) => (
              <div key={i} className="h-px rounded-full bg-purple-400/60" style={{ width: w, marginLeft: i % 2 === 0 ? 0 : 8 }} />
            ))}
          </motion.div>
        )}
        <EvoCarSVG />
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070B14]" />

        {/* City skyline silhouette at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 200'%3E%3Cpath fill='%239333EA' d='M0 200V120l40-10 20-40 20 40 60-20 30-60 30 60 80-30 40-80 40 80 100-40 50-100 50 100 120-50 60-120 60 120 140-60 70-140 70 140 160-70V200z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
            backgroundSize: '1440px 200px',
          }}
        />

        {/* Blue radial glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-purple-600/8 blur-[140px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-800/6 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[80px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(147,51,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/30"
            style={{
              left: `${5 + (i * 47) % 90}%`,
              top: `${10 + (i * 31) % 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-40 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8"
        >
          <Star size={14} className="text-purple-400 fill-purple-400" />
          <span className="text-purple-300 text-sm font-medium">5-Star Rated · Lifetime Guarantee</span>
          <Star size={14} className="text-purple-400 fill-purple-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas text-6xl sm:text-8xl lg:text-[110px] leading-none tracking-wide mb-6"
        >
          <span className="text-white">TINTING </span>
          <motion.span
            className="text-transparent bg-clip-text inline-block"
            style={{ backgroundImage: 'linear-gradient(135deg, #C084FC, #9333EA, #D8B4FE)' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            EVOLUTION
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Premium window tinting for your <strong className="text-white">car</strong>, <strong className="text-white">home</strong> & <strong className="text-white">business</strong>. Ceramic, carbon, and dyed film options — backed by a <strong className="text-purple-400">lifetime guarantee</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-10"
        >
          <Clock size={14} />
          By appointment only — book your free quote online
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/book"
            className="group relative overflow-hidden bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-1"
          >
            <span className="relative z-10">Book Free Quote</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            href="/services/auto"
            className="border border-purple-700/50 hover:border-purple-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            Auto Tinting →
          </Link>
          <Link
            href="/services/residential"
            className="border border-purple-700/50 hover:border-purple-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            Home Tinting →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="font-bebas text-3xl text-purple-400">{s.value}</div>
              <div className="text-gray-400 text-xs mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Car driving across screen */}
      <AnimatedCar />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-purple-600/50 z-10"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
