'use client'

import { useEffect, useState } from 'react'

interface MediaItem {
  id: string
  name: string
  type: 'photo' | 'video'
  mimeType: string
}

export default function MediaGallery() {
  const [photos, setPhotos]     = useState<MediaItem[]>([])
  const [loading, setLoading]   = useState(true)
  const [lightbox, setLightbox] = useState<MediaItem | null>(null)
  const [error, setError]       = useState(false)

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setPhotos(data.filter((i) => i.type === 'photo'))
        else setError(true)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const proxy = (id: string) => `/api/gallery/${id}`

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  if (loading) return <LoadingSkeleton />

  if (error || photos.length === 0) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white/40">
      <p className="text-lg">No photos yet. Check back soon.</p>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-6">
        {photos.length} Photos
      </p>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {photos.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setLightbox(item)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={proxy(item.id)}
              alt={item.name}
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
      {lightbox && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-lg"
            onClick={() => setLightbox(null)}
          >✕</button>

          {photos.indexOf(lightbox) > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={(e) => { e.stopPropagation(); setLightbox(photos[photos.indexOf(lightbox) - 1]) }}
            >‹</button>
          )}
          {photos.indexOf(lightbox) < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={(e) => { e.stopPropagation(); setLightbox(photos[photos.indexOf(lightbox) + 1]) }}
            >›</button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={proxy(lightbox.id)}
            alt={lightbox.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-xl bg-white/10 animate-pulse"
            style={{ height: `${160 + (i % 3) * 60}px` }}
          />
        ))}
      </div>
    </div>
  )
}
