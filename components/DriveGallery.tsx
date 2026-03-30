'use client'

import Link from 'next/link'

const PREVIEW_SRCS = [
  '/gallery/img-01.webp',
  '/gallery/img-05.webp',
  '/gallery/img-10.webp',
  '/gallery/img-19.webp',
  '/gallery/img-22.webp',
  '/gallery/img-29.webp',
]

const TOTAL = 33

export default function DriveGallery() {
  return (
    <div data-gsap="stagger">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {PREVIEW_SRCS.map((src, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`ISL 2026 photo ${i + 1}`}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <Link
          href="/media"
          className="inline-flex items-center gap-2 text-meridian-accent font-bold text-sm hover:gap-3 transition-all"
        >
          View all ({TOTAL} photos) →
        </Link>
      </div>
    </div>
  )
}
