'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    // Hide all direct children initially
    const els = Array.from(ref.current.children) as HTMLElement[]
    gsap.set(els, { opacity: 0, y: 36 })

    function handleReveal() {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }

    window.addEventListener('loader:done', handleReveal)
    return () => window.removeEventListener('loader:done', handleReveal)
  }, [])

  return (
    <div ref={ref} className="relative z-10 w-full text-center px-4 max-w-5xl mx-auto pt-20">
      {children}
    </div>
  )
}
