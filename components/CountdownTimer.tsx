'use client'

import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('March 27, 2026 09:00:00').getTime()

function pad(n: string) {
  return n === '--' ? n : n.padStart(2, '0')
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' })
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const tick = () => {
      const distance = TARGET_DATE - Date.now()
      if (distance < 0) { setFinished(true); return }
      setTimeLeft({
        days: String(Math.floor(distance / 86400000)),
        hours: String(Math.floor((distance % 86400000) / 3600000)),
        minutes: String(Math.floor((distance % 3600000) / 60000)),
        seconds: String(Math.floor((distance % 60000) / 1000)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (finished) {
    return (
      <p className="text-2xl font-athletic font-bold text-meridian-accent uppercase tracking-widest">
        Day 3 — Race Day Live
      </p>
    )
  }

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ]

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-6">
          <div className="text-center min-w-[3rem] md:min-w-[4.5rem]">
            <span className="block text-4xl md:text-6xl font-bold font-athletic tabular-nums leading-none">
              {pad(unit.value)}
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-white/60 mt-1">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-3xl md:text-5xl font-bold text-meridian-accent leading-none pb-3">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
