'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

let navHasAnimated = false

const programsLinks = [
  { href: '/junior-sailing', label: 'Junior Sailing', desc: 'Ages 6–18 sailing academy' },
  { href: '/training', label: 'Training Programs', desc: 'Elite coaching for all levels' },
  { href: '/training#fleet', label: 'Our Fleet', desc: 'Optimist, ILCA, 420, Keelboats' },
]

const eventsLinks = [
  { href: '/events#team', label: 'Meet the Team', desc: 'Coaches & champion sailors' },
  { href: '/media', label: 'Media Gallery', desc: 'Photos & videos from the water' },
]

function DropdownMenu({
  label,
  items,
  isActive,
}: {
  label: string
  items: { href: string; label: string; desc: string }[]
  isActive: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 font-athletic uppercase tracking-wider text-sm px-3 py-2 rounded-full transition-colors ${
          isActive
            ? 'text-meridian-accent bg-meridian-accent/15'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 transition-all duration-200 origin-top ${
          open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        {/* Arrow tip */}
        <div className="flex justify-center">
          <div className="w-2.5 h-2.5 bg-[#001229]/90 border-l border-t border-white/10 rotate-45 -mb-1.5 z-10" />
        </div>
        <div className="bg-[#001229]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex flex-col px-5 py-4 hover:bg-meridian-accent/10 transition-colors group ${
                i < items.length - 1 ? 'border-b border-white/5' : ''
              }`}
            >
              <span className="font-athletic uppercase tracking-wide text-sm text-white group-hover:text-meridian-accent transition-colors">
                {item.label}
              </span>
              <span className="text-xs text-gray-500 mt-0.5 font-body">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobilePrograms, setMobilePrograms] = useState(false)
  const [mobileEvents, setMobileEvents] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const programsMenuRef = useRef<HTMLDivElement>(null)
  const eventsMenuRef = useRef<HTMLDivElement>(null)
  const isActiveSection = (paths: string[]) =>
    paths.some((p) => (p === '/' ? pathname === '/' : pathname.startsWith(p)))

  useEffect(() => {
    if (!navRef.current) return

    // Already animated in this JS session, or loader was skipped — show immediately
    if (navHasAnimated || (window as any).__loaderDone) {
      gsap.set(navRef.current, { opacity: 1, y: 0 })
      navHasAnimated = true
      return
    }

    gsap.set(navRef.current, { opacity: 0, y: -24 })

    function handleReveal() {
      navHasAnimated = true
      gsap.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1,
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

  useEffect(() => {
    if (!mobileMenuRef.current) return
    if (!mobileOpen) {
      setMobilePrograms(false)
      setMobileEvents(false)
    }
    gsap.to(mobileMenuRef.current, {
      opacity: mobileOpen ? 1 : 0,
      y: mobileOpen ? 0 : -8,
      pointerEvents: mobileOpen ? 'auto' : 'none',
      duration: mobileOpen ? 0.3 : 0.2,
      ease: mobileOpen ? 'power2.out' : 'power2.in',
    })
  }, [mobileOpen])

  useEffect(() => {
    if (!programsMenuRef.current) return
    if (mobilePrograms) {
      gsap.to(programsMenuRef.current, { height: 'auto', opacity: 1, duration: 0.25, ease: 'power2.out' })
    } else {
      gsap.to(programsMenuRef.current, { height: 0, opacity: 0, duration: 0.2, ease: 'power2.in' })
    }
  }, [mobilePrograms])

  useEffect(() => {
    if (!eventsMenuRef.current) return
    if (mobileEvents) {
      gsap.to(eventsMenuRef.current, { height: 'auto', opacity: 1, duration: 0.25, ease: 'power2.out' })
    } else {
      gsap.to(eventsMenuRef.current, { height: 0, opacity: 0, duration: 0.2, ease: 'power2.in' })
    }
  }, [mobileEvents])

  return (
    <div ref={navRef} className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating pill nav */}
      <nav className="w-full max-w-4xl">
        <div
          className="flex items-center justify-between h-14 px-3 rounded-full
            bg-meridian-navy/50 backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)]"
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center pl-1">
            <Image
              src="/MM_Logo.webp"
              alt="Mumbai Meridians Logo"
              width={48}
              height={48}
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              style={{ mixBlendMode: 'screen' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`font-athletic uppercase tracking-wider text-sm px-3 py-2 rounded-full transition-colors ${
                pathname === '/'
                  ? 'text-meridian-accent bg-meridian-accent/15'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>

            <DropdownMenu
              label="Programs"
              items={programsLinks}
              isActive={isActiveSection(['/junior-sailing', '/training'])}
            />

            <DropdownMenu
              label="Team & Media"
              items={eventsLinks}
              isActive={isActiveSection(['/events'])}
            />

            <Link
              href="/contact"
              className={`font-athletic uppercase tracking-wider text-sm px-3 py-2 rounded-full transition-colors ${
                pathname === '/contact'
                  ? 'text-meridian-accent bg-meridian-accent/15'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Join CTA + mobile burger */}
          <div className="flex items-center gap-2 pr-1">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-meridian-accent text-white px-5 py-2 rounded-full font-athletic font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-meridian-navy transition-all shadow-md shadow-meridian-accent/30"
            >
              Join Us
            </Link>

            <button
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown — floats below the pill */}
        <div
          ref={mobileMenuRef}
          style={{ opacity: 0, pointerEvents: 'none' }}
          className="mt-2 rounded-2xl bg-meridian-navy/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
        >
            <div className="px-3 py-3 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block font-athletic uppercase tracking-wider text-sm px-4 py-2.5 rounded-full transition-colors ${
                  pathname === '/' ? 'text-meridian-accent bg-meridian-accent/15' : 'text-white hover:text-meridian-accent hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              {/* Programs accordion */}
              <div>
                <button
                  onClick={() => setMobilePrograms(!mobilePrograms)}
                  className={`w-full flex items-center justify-between font-athletic uppercase tracking-wider text-sm px-4 py-2.5 rounded-full transition-colors ${
                    isActiveSection(['/junior-sailing', '/training'])
                      ? 'text-meridian-accent bg-meridian-accent/15'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  Programs
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${mobilePrograms ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                </button>
                <div ref={programsMenuRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }} className="mt-1 ml-4 border-l-2 border-meridian-accent/30 pl-3 space-y-1">
                  {programsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-300 hover:text-meridian-accent text-sm py-2 px-2 rounded-full transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Events accordion */}
              <div>
                <button
                  onClick={() => setMobileEvents(!mobileEvents)}
                  className={`w-full flex items-center justify-between font-athletic uppercase tracking-wider text-sm px-4 py-2.5 rounded-full transition-colors ${
                    isActiveSection(['/events'])
                      ? 'text-meridian-accent bg-meridian-accent/15'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  Team & Media
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${mobileEvents ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                </button>
                <div ref={eventsMenuRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }} className="mt-1 ml-4 border-l-2 border-meridian-accent/30 pl-3 space-y-1">
                  {eventsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-300 hover:text-meridian-accent text-sm py-2 px-2 rounded-full transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`block font-athletic uppercase tracking-wider text-sm px-4 py-2.5 rounded-full transition-colors ${
                  pathname === '/contact' ? 'text-meridian-accent bg-meridian-accent/15' : 'text-white hover:text-meridian-accent hover:bg-white/5'
                }`}
              >
                Contact
              </Link>

              <div className="pt-1 pb-1">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-meridian-accent text-white px-4 py-3 rounded-full font-athletic font-bold text-center uppercase tracking-wider text-sm hover:bg-white hover:text-meridian-navy transition-all"
                >
                  Join Us
                </Link>
              </div>
            </div>
        </div>
      </nav>
    </div>
  )
}
