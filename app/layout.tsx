import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { GoogleTagManagerHead, GoogleTagManagerBody } from '@/components/GoogleTagManager'

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
  title: 'Tinting Evolution | Professional Auto Window Tinting',
  description: 'Tinting Evolution offers premium auto window tinting. Ceramic and carbon film with lifetime guarantee, by appointment. Book your free quote today.',
  keywords: 'window tinting, auto tinting, car tinting, ceramic tint, carbon tint, professional tinting, lifetime guarantee',
  openGraph: {
    title: 'Tinting Evolution | Professional Auto Window Tinting',
    description: 'Premium auto window tinting with ceramic and carbon film. Lifetime guarantee. Book online today.',
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
        description: 'Professional auto window tinting with lifetime guarantee.',
        telephone: '(801) 414-4486',
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
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Window Film' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carbon Window Film' } },
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
        <GoogleTagManagerBody />
        <GoogleAnalytics />
        <GoogleTagManagerHead />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
