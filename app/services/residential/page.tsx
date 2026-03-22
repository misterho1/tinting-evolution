import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ResidentialHero from '@/components/ResidentialHero'
import ResidentialBenefits from '@/components/ResidentialBenefits'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Residential & Commercial Window Tinting | Tinting Evolution',
  description: 'Professional home and commercial window tinting. Reduce heat, block UV rays, increase privacy. Lifetime guarantee on all residential installs.',
}

export default function ResidentialPage() {
  return (
    <main>
      <Navbar />
      <ResidentialHero />
      <ResidentialBenefits />
      <CTASection />
      <Footer />
    </main>
  )
}
