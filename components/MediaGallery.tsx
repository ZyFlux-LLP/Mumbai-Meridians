'use client'

import { useState } from 'react'

const photos = Array.from({ length: 33 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  const ext = i === 31 ? 'webp' : i === 32 ? 'png' : 'jpg'
  return `/gallery/img-${n}.${ext}`
})

export default function MediaGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i != null && i > 0 ? i - 1 : i))
  const next = () => setLightbox((i) => (i != null && i < photos.length - 1 ? i + 1 : i))

  return (
    <div>
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">
        {photos.length} Photos
      </p>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {photos.map((src, i) => (
          <div
            key={src}
            className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setLightbox(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Mumbai Meridians photo ${i + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-lg"
            onClick={() => setLightbox(null)}
          >✕</button>

          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >‹</button>
          )}
          {lightbox < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={(e) => { e.stopPropagation(); next() }}
            >›</button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[lightbox]}
            alt={`Mumbai Meridians photo ${lightbox + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
