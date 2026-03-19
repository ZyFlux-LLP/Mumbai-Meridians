'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PageReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start page hidden so it only reveals after the loader exits
    gsap.set(ref.current, { opacity: 0, y: 28 })

    function handleReveal() {
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
      })
    }

    window.addEventListener('loader:done', handleReveal)
    return () => window.removeEventListener('loader:done', handleReveal)
  }, [])

  return <div ref={ref}>{children}</div>
}
