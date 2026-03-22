'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Auto Tinting', href: '/services/auto' },
  { label: 'Residential', href: '/services/residential' },
  { label: 'Book Now', href: '/book' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-300 ${
          scrolled ? 'bg-navy-950/95 backdrop-blur-xl border-b border-blue-900/30 shadow-lg shadow-blue-950/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Tinting Evolution" className="h-10 w-auto" />
            <span className="font-bebas text-xl text-white tracking-wider hidden sm:block">
              Tinting <span className="text-blue-500">Evolution</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:PHONE_PLACEHOLDER"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-blue-500" />
              PHONE_PLACEHOLDER
            </a>
            <Link
              href="/book"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Book Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-[9989] bg-navy-950/98 backdrop-blur-xl border-b border-blue-900/30"
          >
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-200 hover:text-blue-400 py-2 border-b border-blue-900/20"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:PHONE_PLACEHOLDER"
                className="flex items-center gap-2 text-lg text-gray-200 hover:text-blue-400 py-2"
              >
                <Phone size={16} className="text-blue-500" />
                PHONE_PLACEHOLDER
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9988] bg-navy-950/95 backdrop-blur-xl border-t border-blue-900/30 px-4 py-3 flex gap-3">
        <a
          href="tel:PHONE_PLACEHOLDER"
          className="flex-1 text-center py-3 rounded-xl border border-blue-700/50 text-blue-400 text-sm font-medium"
        >
          Call Now
        </a>
        <Link
          href="/book"
          className="flex-1 text-center py-3 rounded-xl bg-blue-600 text-white text-sm font-medium"
        >
          Book Free Quote
        </Link>
      </div>
    </>
  )
}
