import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingSection from '@/components/BookingSection'

export const metadata: Metadata = {
  title: 'Book Window Tinting | Tinting Evolution',
  description: 'Schedule your auto or residential window tinting appointment online. By appointment only. Lifetime guarantee on every job.',
}

export default function BookPage() {
  return (
    <main>
      <Navbar />
      <BookingSection />
      <Footer />
    </main>
  )
}
