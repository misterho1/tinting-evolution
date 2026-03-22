'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useAnimate, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { Shield, Star, Clock, ChevronDown, Car } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Cars Tinted' },
  { value: '5★', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction' },
  { value: 'Lifetime', label: 'Guarantee' },
]

function AnimatedCar() {
  const [scope, animate] = useAnimate()
  const [driven, setDriven] = useState(false)

  useEffect(() => {
    // After 2.5 seconds, the car drives off screen to the right
    const timer = setTimeout(async () => {
      setDriven(true)
      await animate(scope.current, {
        x: ['0vw', '120vw'],
        opacity: [1, 1, 0],
      }, {
        duration: 1.8,
        ease: [0.4, 0, 1, 1],
      })
    }, 2500)
    return () => clearTimeout(timer)
  }, [animate, scope])

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: '220px' }}>
      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
      <div className="absolute bottom-6 left-0 right-0 h-px bg-blue-900/40" />
      {/* Dashed center line animated */}
      <motion.div
        className="absolute bottom-14 left-0 h-px"
        style={{ width: '200%' }}
        animate={!driven ? { x: [0, -200] } : {}}
        transition={{ duration: 1.5, repeat: driven ? 0 : Infinity, ease: 'linear' }}
      >
        <div
          className="h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(37,99,235,0.3) 0px, rgba(37,99,235,0.3) 40px, transparent 40px, transparent 80px)',
          }}
        />
      </motion.div>

      {/* Car (logo image) */}
      <motion.div
        ref={scope}
        initial={{ x: '-30vw', opacity: 0 }}
        animate={{ x: '15vw', opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-6"
        style={{ left: 0 }}
      >
        {/* Headlight glow effect */}
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [1, 1.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="absolute right-0 bottom-4 w-24 h-8 bg-blue-400/20 blur-xl rounded-full"
          style={{ transformOrigin: 'right center' }}
        />
        {/* Wheel spin blur under car */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="absolute bottom-0 left-8 right-8 h-2 bg-blue-900/40 blur-md rounded-full"
        />
        <img
          src="/logo.png"
          alt="Tinting Evolution car"
          className="h-36 w-auto relative z-10 drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 0 20px rgba(37,99,235,0.5))' }}
        />
        {/* Speed lines */}
        {!driven && (
          <motion.div
            className="absolute top-1/2 -left-20 -translate-y-1/2 flex flex-col gap-2"
            animate={{ opacity: [0, 0.6, 0], x: [-10, 0] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-px bg-blue-500/50 rounded-full"
                style={{ width: `${30 + i * 15}px`, marginLeft: `${i * -5}px` }}
              />
            ))}
          </motion.div>
        )}
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 200'%3E%3Cpath fill='%232563EB' d='M0 200V120l40-10 20-40 20 40 60-20 30-60 30 60 80-30 40-80 40 80 100-40 50-100 50 100 120-50 60-120 60 120 140-60 70-140 70 140 160-70V200z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
            backgroundSize: '1440px 200px',
          }}
        />

        {/* Blue radial glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-blue-600/8 blur-[140px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-800/6 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500/30"
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
          className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
        >
          <Star size={14} className="text-blue-400 fill-blue-400" />
          <span className="text-blue-300 text-sm font-medium">5-Star Rated · Lifetime Guarantee</span>
          <Star size={14} className="text-blue-400 fill-blue-400" />
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
            style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB, #93C5FD)' }}
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
          Premium window tinting for your <strong className="text-white">car</strong>, <strong className="text-white">home</strong> & <strong className="text-white">business</strong>. Ceramic, carbon, and dyed film options — backed by a <strong className="text-blue-400">lifetime guarantee</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-blue-400 text-sm mb-10"
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
            className="group relative overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <span className="relative z-10">Book Free Quote</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            href="/services/auto"
            className="border border-blue-700/50 hover:border-blue-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            Auto Tinting →
          </Link>
          <Link
            href="/services/residential"
            className="border border-blue-700/50 hover:border-blue-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
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
              <div className="font-bebas text-3xl text-blue-400">{s.value}</div>
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
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-blue-600/50 z-10"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
