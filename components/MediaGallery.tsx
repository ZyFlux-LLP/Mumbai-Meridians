'use client'

import { useState } from 'react'

const photoAltTexts = [
  'Mumbai Meridians sailors racing at Umiam Lake ISL 2026 Shillong',
  'Mumbai Meridians team on the water during ISL 2026 regatta',
  'Mumbai Meridians sailing competition at Umiam Lake Meghalaya',
  'Mumbai Meridians crew preparing boats before ISL 2026 race',
  'Mumbai Meridians athlete in action during ISL 2026 sailing event',
  'Mumbai Meridians racing at the Indian Sailing League 2026',
  'Mumbai Meridians sailors competing at Umiam Lake Shillong',
  'Mumbai Meridians team at ISL 2026 race day Umiam Lake',
  'Mumbai Meridians sailing franchise ISL 2026 team photo',
  'Mumbai Meridians crew rigging sails at Umiam Lake',
  'Mumbai Meridians racing action shot ISL 2026 Shillong',
  'Mumbai Meridians sailors on the water Indian Sailing League',
  'Mumbai Meridians ISL 2026 event coverage Umiam Lake',
  'Mumbai Meridians team briefing before ISL 2026 race',
  'Mumbai Meridians sailing at speed during ISL 2026 regatta',
  'Mumbai Meridians athletes competing in Indian Sailing League 2026',
  'Mumbai Meridians boat racing on Umiam Lake Meghalaya',
  'Mumbai Meridians ISL 2026 race start line Shillong',
  'Mumbai Meridians sailors in training session Umiam Lake',
  'Mumbai Meridians racing team ISL 2026 sailing event',
  'Mumbai Meridians competitive sailing Indian Sailing League',
  'Mumbai Meridians team on the race course ISL 2026',
  'Mumbai Meridians sailors at ISL 2026 championship Shillong',
  'Mumbai Meridians racing moment Umiam Lake ISL 2026',
  'Mumbai Meridians sailing crew at Indian Sailing League',
  'Mumbai Meridians race day coverage ISL 2026 Meghalaya',
  'Mumbai Meridians athletes sailing at Umiam Lake',
  'Mumbai Meridians team competing in ISL 2026 regatta',
  'Mumbai Meridians boat on water Indian Sailing League 2026',
  'Mumbai Meridians ISL 2026 sailing event highlights',
  'Mumbai Meridians racing squad at Umiam Lake Shillong',
  'Mumbai Meridians ISL 2026 sailing action Umiam Lake',
  'Mumbai Meridians team ISL 2026 Indian Sailing League',
  'Mumbai Meridians Day 3 sailing action at Umiam Lake ISL 2026',
  'Mumbai Meridians race day excitement ISL 2026 Shillong',
  'Mumbai Meridians sailors competing on Day 3 Umiam Lake',
  'Mumbai Meridians evening race session ISL 2026',
  'Mumbai Meridians early morning practice Day 4 Umiam Lake',
  'Mumbai Meridians team strategy session ISL 2026 Shillong',
  'Mumbai Meridians sailing Day 4 race heat ISL 2026',
  'Mumbai Meridians crew on the water Day 4 Umiam Lake',
  'Mumbai Meridians race Day 4 action shot ISL 2026',
  'Mumbai Meridians sailors racing at sunset Umiam Lake',
  'Mumbai Meridians team at the dock ISL 2026 Day 4',
  'Mumbai Meridians boat rigging Day 4 ISL 2026',
  'Mumbai Meridians sailing franchise race highlights Day 4',
  'Mumbai Meridians ISL 2026 team on the water Shillong',
  'Mumbai Meridians race start Day 4 Umiam Lake',
  'Mumbai Meridians sailing crew competing ISL 2026',
  'Mumbai Meridians race finish line Day 4 ISL 2026',
  'Mumbai Meridians Day 4 morning race ISL 2026 Umiam Lake',
  'Mumbai Meridians afternoon race session Day 4 ISL 2026',
  'Mumbai Meridians team photo Day 4 race ISL 2026',
  'Mumbai Meridians sailors Day 4 ISL 2026 Meghalaya',
  'Mumbai Meridians racing moments Day 4 Umiam Lake',
  'Mumbai Meridians ISL 2026 Day 4 race coverage',
  'Mumbai Meridians race highlights afternoon ISL 2026',
  'Mumbai Meridians sailing action Day 4 ISL 2026',
  'Mumbai Meridians crew on water Day 4 ISL 2026 Shillong',
  'Mumbai Meridians race day highlights ISL 2026 Umiam Lake',
  'Mumbai Meridians Day 5 race morning session ISL 2026',
  'Mumbai Meridians Day 5 sailing competition Umiam Lake',
  'Mumbai Meridians ISL 2026 Day 5 race action',
  'Mumbai Meridians sailors competing Day 5 Shillong',
  'Mumbai Meridians race Day 5 ISL 2026 highlights',
  'Mumbai Meridians Day 5 race morning heat ISL 2026',
  'Mumbai Meridians sailing franchise Day 5 Umiam Lake',
  'Mumbai Meridians team competing Day 5 ISL 2026',
  'Mumbai Meridians race coverage Day 5 ISL 2026',
  'Mumbai Meridians Day 5 afternoon race session ISL 2026',
  'Mumbai Meridians ISL 2026 Day 5 race day live',
]

const photos = Array.from({ length: 71 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return `/gallery/img-${n}.webp`
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
              alt={photoAltTexts[i]}
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
