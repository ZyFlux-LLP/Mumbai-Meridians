'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Loader() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const percentRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let rafId = 0

    function resize() {
      width = canvas!.width = window.innerWidth
      height = canvas!.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    const loadState = { progress: 0 }
    let time = 0

    const bubbles: { x: number; y: number; radius: number; speed: number; wobble: number }[] = []
    for (let i = 0; i < 60; i++) {
      bubbles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 1,
        wobble: Math.random() * Math.PI * 2,
      })
    }

    function drawWater() {
      ctx!.clearRect(0, 0, width, height)

      const targetY = height - (loadState.progress / 100) * height
      time += 0.05

      // Bubbles
      ctx!.fillStyle = 'rgba(255, 255, 255, 0.4)'
      bubbles.forEach((b) => {
        if (b.y > targetY) {
          ctx!.beginPath()
          ctx!.arc(b.x + Math.sin(time + b.wobble) * 5, b.y, b.radius, 0, Math.PI * 2)
          ctx!.fill()
        }
        b.y -= b.speed
        if (b.y < targetY) {
          b.y = height + 10
          b.x = Math.random() * width
        }
      })

      // 3 wave layers
      const waveLayers = [
        { color: 'rgba(0, 105, 170, 0.6)', offset: 0, amplitude: 15, frequency: 0.01 },
        { color: 'rgba(0, 140, 200, 0.8)', offset: 2, amplitude: 20, frequency: 0.008 },
        { color: 'rgba(2, 60, 110, 1)', offset: 4, amplitude: 10, frequency: 0.012 },
      ]

      waveLayers.forEach((layer) => {
        ctx!.beginPath()
        ctx!.moveTo(0, height)
        for (let x = 0; x <= width; x += 10) {
          const y = targetY + Math.sin(x * layer.frequency + time + layer.offset) * layer.amplitude
          ctx!.lineTo(x, y)
        }
        ctx!.lineTo(width, height)
        ctx!.lineTo(0, height)
        ctx!.fillStyle = layer.color
        ctx!.fill()
      })

      rafId = requestAnimationFrame(drawWater)
    }

    drawWater()

    const tl = gsap.timeline()

    tl.to(loadState, {
      progress: 100,
      duration: 4.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        const pct = Math.round(loadState.progress)
        if (percentRef.current) percentRef.current.innerText = pct + '%'
        if (statusRef.current) {
          if (pct > 40 && pct < 80) {
            statusRef.current.innerText = 'Rigging the sail...'
          } else if (pct >= 80) {
            statusRef.current.innerText = 'Ready for launch.'
          }
        }
      },
    }).to(overlayRef.current, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut',
      delay: 0.4,
      onComplete: () => {
        cancelAnimationFrame(rafId)
        window.removeEventListener('resize', resize)
        document.body.style.overflow = ''
        window.dispatchEvent(new CustomEvent('loader:done'))
        setDone(true)
      },
    })

    return () => {
      tl.kill()
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      document.body.style.overflow = ''
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: '#050a15' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/MM_Logo.svg"
          alt="Mumbai Meridians"
          width={120}
          height={120}
          className="h-20 w-auto object-contain"
          priority
        />
      </div>

      <div className="relative z-10 text-center pointer-events-none w-full px-6" style={{ maxWidth: '100vw' }}>
        <div
          ref={statusRef}
          style={{
            fontFamily: "var(--font-montserrat, 'Montserrat', sans-serif)",
            fontSize: 'clamp(0.65rem, 3.5vw, 1.1rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 400,
            marginBottom: '10px',
            color: 'rgba(255,255,255,0.8)',
            textShadow: '0 4px 10px rgba(0,0,0,0.5)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Catching the Wind
        </div>
        <div
          ref={percentRef}
          style={{
            fontFamily: "var(--font-montserrat, 'Montserrat', sans-serif)",
            fontSize: 'clamp(3rem, 18vw, 5rem)',
            fontWeight: 800,
            color: '#fff',
            textShadow: '0 4px 15px rgba(0,0,0,0.6)',
          }}
        >
          0%
        </div>
      </div>
    </div>
  )
}
