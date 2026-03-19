'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Kill all previous triggers on route change
    ScrollTrigger.getAll().forEach((st) => st.kill())

    const ctx = gsap.context(() => {

      // ─── Fade Up ────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="fade-up"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      })

      // ─── Fade Left ──────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="fade-left"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -70 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      })

      // ─── Fade Right ─────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="fade-right"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 70 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      })

      // ─── Stagger children ───────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="stagger"]').forEach((container) => {
        const children = container.children
        gsap.fromTo(
          children,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, stagger: 0.13, ease: 'power3.out',
            scrollTrigger: { trigger: container, start: 'top 82%', toggleActions: 'play none none none' },
          }
        )
      })

      // ─── Scale in (images / cards) ──────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="scale-in"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.88, filter: 'blur(6px)' },
          {
            opacity: 1, scale: 1, filter: 'blur(0px)',
            duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' },
          }
        )
      })

      // ─── Line draw ──────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="line-draw"]').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1, duration: 0.7, ease: 'power2.inOut',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        )
      })

      // ─── Section label ──────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="label"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -20, letterSpacing: '0.5em' },
          {
            opacity: 1, x: 0, letterSpacing: '0.3em',
            duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        )
      })

      // ─── Stat counter animation ─────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="counter"]').forEach((el) => {
        const raw = el.getAttribute('data-value') ?? '0'
        const isPlus = raw.endsWith('+')
        const target = parseInt(raw.replace('+', ''), 10)
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(obj.val) + (isPlus ? '+' : '')
          },
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        })
      })

      // ─── Parallax hero image ────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap="parallax"]').forEach((el) => {
        gsap.to(el, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      // ─── Horizontal marquee / scroll scrub for nav ──────────────
      ScrollTrigger.refresh()
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [pathname])

  return null
}
