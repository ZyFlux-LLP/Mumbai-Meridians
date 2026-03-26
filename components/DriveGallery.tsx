'use client'

import Link from 'next/link'

// First 5 local gallery photos shown as preview on the events page
const PREVIEW_SRCS = [
  '/gallery/img-01.jpg',
  '/gallery/img-05.jpg',
  '/gallery/img-10.jpg',
  '/gallery/img-19.jpg',
  '/gallery/img-29.jpg',
]

const TOTAL = 33

export default function DriveGallery() {
  const [featured, ...rest] = PREVIEW_SRCS

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-gsap="stagger">
      {/* Large featured image */}
      <div className="row-span-2 col-span-2 relative group overflow-hidden rounded-theme bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featured}
          alt="ISL 2026"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <p className="text-white font-bold">ISL 2026 — Umiam Lake, Shillong</p>
        </div>
      </div>

      {/* Rest of preview photos */}
      {rest.map((src, i) => (
        <div key={i} className="relative group overflow-hidden rounded-theme bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
      ))}

      {/* View all link */}
      <div className="col-span-2 md:col-span-4 mt-2 text-right">
        <Link
          href="/media"
          className="inline-flex items-center gap-2 text-meridian-accent font-bold text-sm hover:gap-3 transition-all"
        >
          View all ({TOTAL}) →
        </Link>
      </div>
    </div>
  )
}
