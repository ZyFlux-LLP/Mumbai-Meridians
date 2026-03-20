'use client'

import { useEffect, useRef } from 'react'

export default function HeroBgVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function startVideo() {
      video!.play().catch(() => {})
    }

    // If loader already done (revisit), play immediately
    if ((window as any).__loaderDone) {
      startVideo()
      return
    }

    window.addEventListener('loader:done', startVideo, { once: true })
    return () => window.removeEventListener('loader:done', startVideo)
  }, [])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover scale-110"
      src="/hero-bg.webm"
      muted
      loop
      playsInline
      preload="auto"
    />
  )
}
