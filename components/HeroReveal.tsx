'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Persists across route changes — true once the loader has played
let loaderHasPlayed = false

export default function HeroReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = Array.from(ref.current.children) as HTMLElement[]

    // Loader already played on a previous visit — show immediately
    if (loaderHasPlayed) {
      gsap.set(els, { opacity: 1, y: 0 })
      return
    }

    // First load — hide and wait for loader:done
    gsap.set(els, { opacity: 0, y: 36 })

    function handleReveal() {
      loaderHasPlayed = true
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }

    // If loader:done already fired before this effect ran, trigger immediately
    if ((window as any).__loaderDone) {
      handleReveal()
      return
    }

    window.addEventListener('loader:done', handleReveal)
    return () => window.removeEventListener('loader:done', handleReveal)
  }, [])

  return (
    <div ref={ref} className="relative z-10 w-full text-center px-4 max-w-5xl mx-auto pt-20 md:pt-36">
      {children}
    </div>
  )
}
