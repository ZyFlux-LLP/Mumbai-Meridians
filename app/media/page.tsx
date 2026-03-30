import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MediaGallery from '@/components/MediaGallery'

export const metadata: Metadata = {
  title: 'Media Gallery | Mumbai Meridians',
  description: 'Photos and videos from Mumbai Meridians sailing at ISL 2026, Umiam Lake, Shillong. Racing, training, and team moments.',
  alternates: {
    canonical: 'https://www.mumbaimeridians.com/media',
  },
  openGraph: {
    title: 'Media Gallery | Mumbai Meridians',
    description: 'Photos and videos from Mumbai Meridians sailing at ISL 2026, Umiam Lake, Shillong.',
    url: 'https://www.mumbaimeridians.com/media',
    images: [
      {
        url: 'https://www.mumbaimeridians.com/cover.webp',
        width: 1200,
        height: 630,
        alt: 'Mumbai Meridians Media Gallery ISL 2026',
      },
    ],
  },
}

export default function MediaPage() {
  return (
    <div className="bg-meridian-navy text-white min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="section-label">Behind the Scenes</p>
          <h1 className="font-athletic text-5xl md:text-7xl font-extrabold uppercase leading-none">
            Media <span className="text-meridian-accent">Gallery</span>
          </h1>
          <p className="text-white/50 mt-4 text-lg max-w-xl">
            Photos and videos from ISL 2026 — Umiam Lake, Shillong.
          </p>
        </div>

        {/* Dynamic gallery */}
        <MediaGallery />
      </main>
      <Footer />
    </div>
  )
}
