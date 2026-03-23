'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const subjects = [
  'General Inquiry',
  'Join the Team',
  'Sponsorship & Partnerships',
  'Media & Press',
  'Junior Sailing Programs',
  'Other',
]

const contactInfo = [
  {
    label: 'Email',
    value: 'info@mumbaimericidians.com',
    icon: (
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
    ),
  },
  {
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
    icon: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    ),
  },
  {
    label: 'ISL Season',
    value: 'March 27–31, 2026 · Umiam Lake, Shillong',
    icon: (
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
    ),
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: subjects[0], message: '' })
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="bg-meridian-navy text-gray-100 min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,140,200,0.12)_0%,_transparent_70%)] pointer-events-none" />
        <p className="font-athletic uppercase tracking-[0.3em] text-meridian-accent text-sm mb-3" data-gsap="label">
          Get in Touch
        </p>
        <h1 className="font-athletic text-5xl md:text-7xl font-bold text-white mb-4 leading-tight" data-gsap="fade-up">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg" data-gsap="fade-up">
          Whether you want to join the team, partner with us, or just say hello — we'd love to hear from you.
        </p>
      </section>

      {/* Main content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — info cards */}
          <div className="lg:col-span-2 flex flex-col gap-6" data-gsap="stagger">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-meridian-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-meridian-accent/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-meridian-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-athletic uppercase tracking-widest text-xs text-meridian-accent mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Decorative quote */}
            <div className="border-l-4 border-meridian-accent/40 pl-5 mt-2">
              <p className="text-gray-400 italic text-sm leading-relaxed">
                "The wind and the waves are always on the side of the ablest navigator."
              </p>
              <p className="text-meridian-accent text-xs font-athletic uppercase tracking-widest mt-2">
                — Edward Gibbon
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3" data-gsap="fade-right">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-white/5 border border-meridian-accent/20 rounded-3xl px-8">
                <div className="w-16 h-16 rounded-full bg-meridian-accent/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-meridian-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-athletic text-3xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  Thanks for reaching out. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-athletic uppercase tracking-widest text-sm bg-meridian-accent text-white px-8 py-3 rounded-full hover:bg-white hover:text-meridian-navy transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
              >
                <h2 className="font-athletic text-2xl font-bold text-white mb-2">Send a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-athletic uppercase tracking-widest text-xs text-gray-400 mb-2">
                      Full Name <span className="text-meridian-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-meridian-accent/60 focus:bg-meridian-accent/5 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-athletic uppercase tracking-widest text-xs text-gray-400 mb-2">
                      Email <span className="text-meridian-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-meridian-accent/60 focus:bg-meridian-accent/5 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-athletic uppercase tracking-widest text-xs text-gray-400 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-meridian-accent/60 focus:bg-meridian-accent/5 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-athletic uppercase tracking-widest text-xs text-gray-400 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-[#001229] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-meridian-accent/60 transition-all text-sm appearance-none cursor-pointer"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-athletic uppercase tracking-widest text-xs text-gray-400 mb-2">
                    Message <span className="text-meridian-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-meridian-accent/60 focus:bg-meridian-accent/5 transition-all text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-meridian-accent text-white font-athletic uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-white hover:text-meridian-navy transition-all shadow-lg shadow-meridian-accent/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
