'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Shield, Phone } from 'lucide-react'

const CALENDLY_URL = 'CALENDLY_URL_PLACEHOLDER'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement | null; prefill?: object; utm?: object }) => void
    }
  }
}

export default function BookingSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      if (window.Calendly && CALENDLY_URL !== 'CALENDLY_URL_PLACEHOLDER') {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: document.getElementById('calendly-embed'),
        })
      }
    }

    return () => {
      document.head.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  const isPlaceholder = CALENDLY_URL === 'CALENDLY_URL_PLACEHOLDER'

  return (
    <section className="min-h-screen bg-[#070B14] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 rounded-2xl bg-purple-600/15 border border-purple-600/25 flex items-center justify-center mx-auto mb-6">
            <Calendar size={24} className="text-purple-400" />
          </div>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white mb-4 tracking-wide">
            Book Your <span className="text-purple-400">Appointment</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            By appointment only. Select a time that works for you and we&apos;ll confirm within the hour.
          </p>
        </motion.div>

        {/* Info chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <div className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl text-sm text-gray-300">
            <Clock size={14} className="text-purple-500" />
            By Appointment Only
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl text-sm text-gray-300">
            <Shield size={14} className="text-purple-500" />
            Lifetime Guarantee
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl text-sm text-gray-300">
            <Calendar size={14} className="text-purple-500" />
            Same-Day Available
          </div>
        </motion.div>

        {/* Calendly embed or placeholder */}
        {isPlaceholder ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-12 text-center"
          >
            <Calendar size={48} className="text-purple-500/40 mx-auto mb-6" />
            <h3 className="font-bebas text-3xl text-white mb-4">Online Booking Coming Soon</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Our online calendar is being set up. In the meantime, call or text us directly — we respond fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(801) 414-4486"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                <Phone size={18} />
                Call to Book
              </a>
              <a
                href="sms:(801) 414-4486"
                className="flex items-center justify-center gap-2 border border-purple-700/50 hover:border-purple-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Text Us
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div
              id="calendly-embed"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>
        )}

        {/* What to expect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {[
            { step: '01', title: 'Book Online', desc: 'Choose your date and service. We confirm within 1 hour.' },
            { step: '02', title: 'We Install', desc: 'Your vehicle or home gets precision-tinted by our pros.' },
            { step: '03', title: 'Drive & Enjoy', desc: 'Leave with a lifetime guarantee on every window.' },
          ].map((s) => (
            <div key={s.step} className="glass-card rounded-xl p-5 text-center">
              <div className="font-bebas text-3xl text-purple-600/40 mb-2">{s.step}</div>
              <div className="font-semibold text-white mb-1">{s.title}</div>
              <div className="text-gray-400 text-sm">{s.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
