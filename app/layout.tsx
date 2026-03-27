import type { Metadata } from 'next'
import { Inter, Oswald, Montserrat } from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'
import GSAPAnimations from '@/components/GSAPAnimations'

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
  title: 'Mumbai Meridians | Riding the Winds of Umiam',
  description:
    "Mumbai Meridians — India's premier sailing franchise dedicated to elevating Indian sailing to the global stage.",
  icons: {
    icon: '/MM_Logo.png',
    apple: '/MM_Logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WNNLMNKW');` }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} ${oswald.variable} ${montserrat.variable} font-body antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNNLMNKW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Loader />
        <GSAPAnimations />
        {children}
      </body>
    </html>
  )
}
