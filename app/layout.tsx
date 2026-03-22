import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Tinting Evolution | Professional Window Tinting — Auto & Residential',
  description: 'Tinting Evolution offers premium auto, residential & commercial window tinting. Lifetime guarantee, multiple film options, by appointment. Book your free quote today.',
  keywords: 'window tinting, auto tinting, residential tinting, home window tint, ceramic tint, carbon tint, professional tinting, lifetime guarantee',
  openGraph: {
    title: 'Tinting Evolution | Professional Window Tinting',
    description: 'Premium auto & residential window tinting with a lifetime guarantee. Book online today.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'AutoRepair'],
        name: 'Tinting Evolution',
        description: 'Professional auto and residential window tinting with lifetime guarantee.',
        telephone: 'PHONE_PLACEHOLDER',
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            description: 'By appointment only',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Window Tinting Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Window Tinting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Window Tinting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Window Tinting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Window Film' } },
          ],
        },
      },
    ],
  }

  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-navy-950 text-white antialiased">
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
