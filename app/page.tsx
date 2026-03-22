import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesOverview from '@/components/ServicesOverview'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
