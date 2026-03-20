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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} ${montserrat.variable} font-body antialiased`}>
        <Loader />
        <GSAPAnimations />
        {children}
      </body>
    </html>
  )
}
