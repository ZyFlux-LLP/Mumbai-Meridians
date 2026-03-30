import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Mumbai Meridians | Sailing Inquiries & Partnerships',
  description:
    'Get in touch with Mumbai Meridians for junior sailing programs, sponsorship, or general inquiries. Based in Mumbai, Maharashtra.',
  alternates: {
    canonical: 'https://www.mumbaimeridians.com/contact',
  },
  openGraph: {
    title: 'Contact Mumbai Meridians | Sailing Inquiries & Partnerships',
    description:
      'Get in touch with Mumbai Meridians for junior sailing programs, sponsorship, or general inquiries. Based in Mumbai, Maharashtra.',
    url: 'https://www.mumbaimeridians.com/contact',
    images: [
      {
        url: 'https://www.mumbaimeridians.com/cover.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Mumbai Meridians',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <div className="bg-meridian-navy text-gray-100 min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,140,200,0.12)_0%,_transparent_70%)] pointer-events-none" />
        <p className="font-athletic uppercase tracking-[0.3em] text-meridian-accent text-sm mb-3" data-gsap="label">
          Get in Touch
        </p>
        <h1 className="font-athletic text-5xl md:text-7xl font-bold text-white mb-4 leading-tight" data-gsap="fade-up">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg" data-gsap="fade-up">
          Whether you want to join the team, partner with us, or just say hello — we'd love to hear from you.
        </p>
      </section>

      {/* Main content */}
      <section className="py-16 px-4">
        <ContactForm />
      </section>

      <Footer />
    </div>
  )
}
