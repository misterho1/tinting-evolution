import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AutoHero from '@/components/AutoHero'
import FilmOptions from '@/components/FilmOptions'
import AutoPricing from '@/components/AutoPricing'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Auto Window Tinting | Tinting Evolution',
  description: 'Professional auto window tinting for sedans, trucks, and SUVs. Ceramic, carbon & dyed film. Lifetime guarantee. Book your appointment today.',
}

export default function AutoTintingPage() {
  return (
    <main>
      <Navbar />
      <AutoHero />
      <FilmOptions />
      <AutoPricing />
      <CTASection />
      <Footer />
    </main>
  )
}
