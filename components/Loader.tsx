'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Loader() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const mumbaiRef = useRef<HTMLDivElement>(null)
  const meridiansRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const progressTrackRef = useRef<HTMLDivElement>(null)
  const ripple1Ref = useRef<HTMLDivElement>(null)
  const ripple2Ref = useRef<HTMLDivElement>(null)
  const ripple3Ref = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // prevent body scroll during load
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        // Exit: split curtain — overlay slides up
        gsap.to(overlayRef.current, {
          yPercent: -105,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.style.overflow = ''
            setDone(true)
          },
        })
      },
    })

    // Ripple rings expand behind logo
    tl.fromTo(
      [ripple1Ref.current, ripple2Ref.current, ripple3Ref.current],
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, stagger: 0.18, ease: 'power2.out' },
      0
    )
    tl.to(
      [ripple1Ref.current, ripple2Ref.current, ripple3Ref.current],
      { scale: 1.5, opacity: 0, duration: 1.6, stagger: 0.18, ease: 'sine.out' },
      0.4
    )

    // Logo spins + scales in
    tl.fromTo(
      logoRef.current,
      { scale: 0.4, opacity: 0, rotation: -25, filter: 'blur(12px)' },
      { scale: 1, opacity: 1, rotation: 0, filter: 'blur(0px)', duration: 0.9 },
      0
    )

    // "MUMBAI" — letters fall in with stagger
    const mumbaiLetters = mumbaiRef.current?.querySelectorAll('span')
    if (mumbaiLetters) {
      tl.fromTo(
        mumbaiLetters,
        { opacity: 0, y: 40, skewX: -8 },
        { opacity: 1, y: 0, skewX: 0, duration: 0.5, stagger: 0.045 },
        0.55
      )
    }

    // "MERIDIANS" — letters rise in red
    const meridiansLetters = meridiansRef.current?.querySelectorAll('span')
    if (meridiansLetters) {
      tl.fromTo(
        meridiansLetters,
        { opacity: 0, y: -36, skewX: 8 },
        { opacity: 1, y: 0, skewX: 0, duration: 0.5, stagger: 0.045 },
        0.75
      )
    }

    // Tagline fades in
    tl.fromTo(taglineRef.current, { opacity: 0, letterSpacing: '0.5em' }, { opacity: 1, letterSpacing: '0.3em', duration: 0.6 }, 1.15)

    // Progress track expands
    tl.fromTo(progressTrackRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, 1.2)

    // Progress bar fills
    tl.fromTo(progressBarRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power1.inOut' }, 1.3)

    // Hold briefly
    tl.to({}, { duration: 0.25 })

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #000d1f 0%, #001f3d 60%, #00122e 100%)' }}
    >
      {/* Animated wave lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          {[0, 60, 120, 180, 240, 300].map((offset, i) => (
            <path
              key={i}
              d={`M0 ${450 + offset} Q360 ${400 + offset} 720 ${450 + offset} T1440 ${450 + offset}`}
              fill="none"
              stroke="#0074e4"
              strokeWidth="1"
              opacity={0.6 - i * 0.08}
            />
          ))}
        </svg>
      </div>

      {/* Compass ripple rings */}
      {[ripple1Ref, ripple2Ref, ripple3Ref].map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className="absolute rounded-full border border-meridian-accent/30"
          style={{ width: `${180 + i * 70}px`, height: `${180 + i * 70}px`, opacity: 0 }}
        />
      ))}

      {/* Logo */}
      <div ref={logoRef} className="relative mb-7" style={{ opacity: 0 }}>
        <Image
          src="/logo3.jpeg"
          alt="Mumbai Meridians"
          width={110}
          height={144}
          className="h-36 w-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* MUMBAI */}
      <div
        ref={mumbaiRef}
        className="flex font-athletic font-black italic uppercase text-white tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1 }}
      >
        {'MUMBAI'.split('').map((ch, i) => (
          <span key={i} style={{ opacity: 0, display: 'inline-block' }}>{ch}</span>
        ))}
      </div>

      {/* MERIDIANS in red */}
      <div
        ref={meridiansRef}
        className="flex font-athletic font-black italic uppercase text-red-500 tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.05 }}
      >
        {'MERIDIANS'.split('').map((ch, i) => (
          <span key={i} style={{ opacity: 0, display: 'inline-block' }}>{ch}</span>
        ))}
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="mt-5 uppercase text-white/40 text-xs font-body tracking-[0.3em]"
        style={{ opacity: 0 }}
      >
        Riding the Winds of Umiam
      </p>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5">
        <div
          ref={progressTrackRef}
          className="absolute inset-0 bg-white/10 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
        <div
          ref={progressBarRef}
          className="absolute inset-0 origin-left"
          style={{
            transform: 'scaleX(0)',
            background: 'linear-gradient(90deg, #0074e4, #ef4444)',
          }}
        />
      </div>
    </div>
  )
}
