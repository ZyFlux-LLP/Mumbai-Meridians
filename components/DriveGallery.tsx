'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface MediaItem {
  id: string
  name: string
  type: 'photo' | 'video'
  mimeType: string
}

// Static fallback shown while Drive loads
const FALLBACK_SRCS = [
  '/media/gallery-2.webp',
  '/media/gallery-3.webp',
  '/media/india-sailing-medals.webp',
  '/media/event-1.webp',
  '/media/event-2.webp',
]

export default function DriveGallery() {
  const [items, setItems]     = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setItems(data) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const photos = items.filter((i) => i.type === 'photo')
  const proxy  = (id: string) => `/api/gallery/${id}`

  // Use Drive photos if loaded, otherwise fall back to static
  const displaySrcs: string[] = loading || photos.length === 0
    ? FALLBACK_SRCS
    : photos.slice(0, 5).map((p) => proxy(p.id))

  const [featured, ...rest] = displaySrcs

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-gsap="stagger">
      {/* Large featured image */}
      <div className="row-span-2 col-span-2 relative group overflow-hidden rounded-theme bg-white/5">
        {loading && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-theme" />}
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

      {/* Rest of photos */}
      {rest.map((src, i) => (
        <div key={i} className="relative group overflow-hidden rounded-theme bg-white/5">
          {loading && <div className="absolute inset-0 bg-white/10 animate-pulse" />}
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
          View all {items.length > 0 ? `(${items.length})` : ''} →
        </Link>
      </div>
    </div>
  )
}
