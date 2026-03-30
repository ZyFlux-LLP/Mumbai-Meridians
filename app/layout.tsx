import type { Metadata } from 'next'
import { Inter, Oswald, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import dynamic from 'next/dynamic'

const Loader = dynamic(() => import('@/components/Loader'))
const GSAPAnimations = dynamic(() => import('@/components/GSAPAnimations'))

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '700'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mumbai Meridians | Indian Sailing Franchise | ISL 2026',
  description:
    "Mumbai Meridians — India's premier sailing franchise dedicated to elevating Indian sailing to the global stage. Competing in ISL 2026 at Umiam Lake, Shillong.",
  icons: {
    icon: '/MM_Logo.webp',
    apple: '/MM_Logo.webp',
  },
  openGraph: {
    title: 'Mumbai Meridians | Indian Sailing Franchise',
    description: "India's premier sailing franchise competing in ISL 2026 at Umiam Lake, Shillong.",
    url: 'https://www.mumbaimeridians.com/',
    siteName: 'Mumbai Meridians',
    images: [
      {
        url: 'https://www.mumbaimeridians.com/cover.webp',
        width: 1200,
        height: 630,
        alt: 'Mumbai Meridians — Indian Sailing Franchise ISL 2026',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mumbai Meridians | Indian Sailing Franchise',
    description: "India's premier sailing franchise competing in ISL 2026 at Umiam Lake, Shillong.",
    images: ['https://www.mumbaimeridians.com/cover.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data — SportsOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsOrganization',
              name: 'Mumbai Meridians',
              url: 'https://www.mumbaimeridians.com',
              logo: 'https://www.mumbaimeridians.com/MM_Logo.webp',
              image: 'https://www.mumbaimeridians.com/cover.webp',
              description:
                "India's premier sailing franchise competing in the Indian Sailing League 2026 at Umiam Lake, Shillong.",
              sport: 'Sailing',
              location: {
                '@type': 'Place',
                name: 'Umiam Lake',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Shillong',
                  addressRegion: 'Meghalaya',
                  addressCountry: 'IN',
                },
              },
              sameAs: ['https://www.youtube.com/@mumbaimeridians'],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} ${montserrat.variable} font-body antialiased`}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNNLMNKW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Loader />
        <GSAPAnimations />
        {children}
        {/* Google Tag Manager — deferred until after page is interactive */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WNNLMNKW');`,
          }}
        />
      </body>
    </html>
  )
}
