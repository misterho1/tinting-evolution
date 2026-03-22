'use client'
import Link from 'next/link'
import { Instagram, Phone, Clock, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-purple-900/20 pt-16 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Tinting Evolution" className="h-12 w-auto" />
              <div>
                <div className="font-bebas text-xl text-white tracking-wider">Tinting Evolution</div>
                <div className="text-purple-500 text-xs">Premium Window Tinting</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Professional auto and residential window tinting backed by a lifetime guarantee. We take pride in every install.
            </p>
            <a
              href="https://www.instagram.com/tintingevolution/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              <Instagram size={16} />
              @tintingevolution
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services/auto" className="hover:text-purple-400 transition-colors">Auto Window Tinting</Link></li>
              <li><Link href="/services/residential" className="hover:text-purple-400 transition-colors">Residential Tinting</Link></li>
              <li><Link href="/services/residential" className="hover:text-purple-400 transition-colors">Commercial Tinting</Link></li>
              <li><Link href="/services/auto" className="hover:text-purple-400 transition-colors">Ceramic Film</Link></li>
              <li><Link href="/services/auto" className="hover:text-purple-400 transition-colors">Carbon Film</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-purple-500 flex-shrink-0" />
                <a href="tel:(801) 414-4486" className="hover:text-purple-400 transition-colors">(801) 414-4486</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={13} className="text-purple-500 flex-shrink-0" />
                <span>By Appointment Only</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-purple-500 flex-shrink-0" />
                <span>Location by appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Tinting Evolution. All rights reserved.</p>
          <p>Professional Window Tinting · Lifetime Guarantee</p>
        </div>
      </div>
    </footer>
  )
}
