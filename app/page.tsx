import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import HeroReveal from '@/components/HeroReveal'
import HeroBgVideo from '@/components/HeroBgVideo'
import Footer from '@/components/Footer'
import CountdownTimer from '@/components/CountdownTimer'

export const metadata: Metadata = {
  title: 'Mumbai Meridians | Indian Sailing Franchise | ISL 2026',
  description:
    "Mumbai Meridians — India's premier sailing franchise dedicated to elevating Indian sailing to the global stage. Competing in ISL 2026 at Umiam Lake, Shillong.",
  alternates: {
    canonical: 'https://www.mumbaimeridians.com/',
  },
  openGraph: {
    title: 'Mumbai Meridians | Indian Sailing Franchise',
    description: "India's premier sailing franchise competing in ISL 2026 at Umiam Lake, Shillong.",
    url: 'https://www.mumbaimeridians.com/',
    images: [
      {
        url: 'https://www.mumbaimeridians.com/cover.webp',
        width: 1200,
        height: 630,
        alt: 'Mumbai Meridians — Indian Sailing Franchise ISL 2026',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="bg-meridian-navy text-white min-h-screen">
      <Navigation />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden w-full pb-32">
        <div className="absolute inset-0 z-0" data-gsap="parallax">
          <HeroBgVideo />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <HeroReveal>
          <h1 className="font-athletic text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase italic leading-none mb-6">
            Mumbai{' '}
            <span className="text-meridian-accent [text-shadow:0_0_60px_rgba(0,116,228,0.5)]">
              Meridians
            </span>
          </h1>
          {/* Countdown */}
          <div className="bg-meridian-navy/50 backdrop-blur-xl border border-meridian-accent/25 px-6 py-8 inline-block rounded-2xl shadow-2xl shadow-black/40 w-full max-w-xl">
            <p className="font-athletic uppercase tracking-[0.25em] text-meridian-accent text-xs mb-6">
              Indian Sailing League 2026
            </p>
            <CountdownTimer />
            <div className="mt-6 flex items-center justify-center gap-2 text-white/50 text-xs uppercase tracking-widest">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              March 27–31, 2026 · Umiam Lake, Shillong
            </div>
            <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              {[
                { value: '14', label: 'Elite Teams' },
                { value: '182', label: 'Participants' },
                { value: '08', label: 'Countries' },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-athletic text-2xl font-bold text-meridian-accent"
                    data-gsap="counter-reveal"
                    data-value={s.value}
                  >
                    0
                  </p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/live/XmGteoHLPm8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-meridian-accent text-white px-8 py-3.5 rounded-theme font-athletic font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-meridian-navy transition-all shadow-lg shadow-meridian-accent/30"
            >
              View Live
            </a>
            <Link
              href="/junior-sailing"
              className="border-2 border-white/30 text-white px-8 py-3.5 rounded-theme font-athletic font-bold uppercase tracking-widest text-sm hover:border-white hover:bg-white/10 transition-all"
            >
              Join the Academy
            </Link>
          </div>
        </HeroReveal>

        {/* ── Sponsors & Associations Marquee Bar ───────────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white shadow-lg overflow-hidden" data-gsap="stats-reveal">
          <p className="text-center text-[9px] uppercase tracking-[0.3em] text-gray-400 font-athletic pt-3 pb-1">
            Official Associations &amp; Sponsors
          </p>
          <div className="relative overflow-hidden py-3">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            {/* Scrolling track — logos duplicated for seamless loop */}
            <div className="flex animate-marquee w-max">
              {[
                { src: '/logos/World_Sailing_logo_local.svg', alt: 'World Sailing Logo' },
                { src: '/logos/YAILOGO-removebg-preview.webp', alt: 'Yachting Association of India Logo' },
                { src: '/logos/isl.webp', alt: 'Indian Sailing League Logo' },
                { src: '/logos/yam-removebg-preview.webp', alt: 'YAM Logo' },
                { src: '/logos/RLSS_Sponsor.webp', alt: 'RLSS Sponsor Logo' },
                { src: '/logos/Sponsor_SPGP-removebg-preview.webp', alt: 'SPGP Sponsor Logo' },
                { src: '/logos/Sponsor_Institute-removebg-preview.webp', alt: 'Institute Sponsor Logo' },
                // Duplicates for seamless marquee loop — decorative, empty alt intentional
                { src: '/logos/World_Sailing_logo_local.svg', alt: '' },
                { src: '/logos/YAILOGO-removebg-preview.webp', alt: '' },
                { src: '/logos/isl.webp', alt: '' },
                { src: '/logos/yam-removebg-preview.webp', alt: '' },
                { src: '/logos/RLSS_Sponsor.webp', alt: '' },
                { src: '/logos/Sponsor_SPGP-removebg-preview.webp', alt: '' },
                { src: '/logos/Sponsor_Institute-removebg-preview.webp', alt: '' },
              ].map(({ src, alt }, i) => (
                <div key={i} className="flex items-center justify-center w-32 h-14 mx-6 shrink-0">
                  <Image
                    src={src}
                    alt={alt}
                    width={120}
                    height={56}
                    className="max-h-14 max-w-[120px] w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────── */}
      <section className="py-28 bg-white text-meridian-navy" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
            <div className="lg:w-1/2" data-gsap="fade-left">
              <p className="section-label text-meridian-accent" data-gsap="label">Our Story</p>
              <h2 className="font-athletic text-4xl md:text-6xl font-bold uppercase leading-tight mb-6">
                About the{' '}
                <span className="text-white bg-meridian-navy px-3 py-1 inline-block">Meridians</span>
              </h2>
              <div className="w-16 h-1.5 bg-meridian-accent mb-8 rounded-full" data-gsap="line-draw" />
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                The Mumbai Meridians are more than just a sailing franchise — we are a movement dedicated
                to elevating Indian sailing to the global stage. Born from the bustling energy of Mumbai
                and tempered by the pristine waters of our nation's lakes and coasts, we represent the
                pinnacle of nautical athleticism.
              </p>
              <p className="text-lg leading-relaxed font-semibold italic text-meridian-sea-blue border-l-4 border-meridian-accent pl-5">
                Our mission is to foster a culture of high-performance sailing in India, nurturing talent
                that can dominate the international circuits and inspire a new generation of sailors.
              </p>
              <Link
                href="/junior-sailing"
                className="inline-flex items-center gap-2 mt-8 font-athletic uppercase tracking-widest text-sm text-meridian-accent border-b-2 border-meridian-accent/40 pb-1 hover:border-meridian-accent transition-colors"
              >
                Explore Junior Sailing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Link>
            </div>

            <div className="lg:w-1/2 relative mt-8 lg:mt-0" data-gsap="fade-right">
              <div className="relative z-10" data-gsap="scale-in">
                <Image
                  src="/cover.webp"
                  alt="High performance sailing action"
                  width={640}
                  height={480}
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-full h-full border-4 border-meridian-accent/20 rounded-2xl z-0" />
              <div className="absolute -bottom-4 -left-4 bg-meridian-navy text-white px-6 py-4 rounded-xl shadow-xl z-20 hidden lg:block">
                <p className="font-athletic text-3xl font-bold text-meridian-accent">2026</p>
                <p className="text-xs uppercase tracking-widest text-white/60 mt-0.5">ISL Season</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Athletes ────────────────────────────────────────── */}
      <section className="py-28 bg-[#000d1f]" id="athletes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-gsap="fade-up">
            <p className="section-label">The Squad</p>
            <h2 className="font-athletic text-4xl md:text-5xl font-bold uppercase">
              Meet the <span className="text-meridian-accent">Athletes</span>
            </h2>
            <p className="text-white/40 tracking-widest uppercase mt-3 text-sm font-semibold">
              Mumbai Meridians 2026 Roster
            </p>
          </div>

          {/* Leadership */}
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-meridian-accent mb-8" data-gsap="fade-up">Leadership</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-16" data-gsap="stagger">
            {[
              { src: '/media/anita-mhatre.webp', name: 'Anita Sandeep Mhatre', role: 'Captain' },
              { src: '/media/mohit-mhatre.webp', name: 'Mohit Mhatre', role: 'Lead Captain' },
              { src: '/media/vritika-san.webp', name: 'Vritika Sandeep Mhatre', role: 'Junior Captain' },
              { src: '/media/vikas-kapila.webp', name: 'Vikas Kapila', role: 'Coach' },
              { src: '/media/shilpa-oberoi.webp', name: 'Shilpa Oberoi', role: 'Media Manager & Coach' },
            ].map((member) => (
              <div key={member.name} className="group text-center" data-gsap="scale-in">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-white/5 ring-2 ring-meridian-gold/40">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="font-athletic font-bold text-white uppercase tracking-wide text-sm">{member.name}</p>
                <p className="text-meridian-gold text-xs uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Sailors */}
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-meridian-accent mb-8" data-gsap="fade-up">Sailors</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8" data-gsap="stagger">
            {[
              { src: '/media/progya-das.webp', name: 'Progya Das', role: 'Sailor' },
              { src: '/media/arjun-marathe.webp', name: 'Arjun Marathe', role: 'Sailor' },
              { src: '/media/sofia.webp', name: 'Sofiia Magkaeva', role: 'Sailor' },
              { src: '/media/vivek-singh.webp', name: 'Vivek Singh Shekhawat', role: 'Sailor' },
              { src: '/media/samanyu-konda.webp', name: 'Samanyu Konda', role: 'Sailor' },
              { src: '/media/naavya-kaku.webp', name: 'Naavya Kaku', role: 'Sailor' },
            ].map((athlete) => (
              <div key={athlete.name} className="group text-center" data-gsap="scale-in">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-white/5">
                  <Image
                    src={athlete.src}
                    alt={athlete.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="font-athletic font-bold text-white uppercase tracking-wide text-sm">{athlete.name}</p>
                <p className="text-meridian-accent text-xs uppercase tracking-widest mt-1">{athlete.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Event ──────────────────────────────────────── */}
      <section className="py-28 bg-meridian-navy" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-gsap="fade-up">
            <p className="section-label">Season Highlight</p>
            <h2 className="font-athletic text-4xl md:text-5xl font-bold uppercase">Upcoming Events</h2>
            <p className="text-white/40 tracking-widest uppercase mt-3 text-sm font-semibold">
              Witness the Spectacle of Speed
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-[#001f3d] to-[#000d1f] border border-meridian-accent/15 rounded-2xl overflow-hidden shadow-2xl"
            data-gsap="scale-in"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[38%] relative aspect-[3/4] md:aspect-auto md:min-h-[380px] flex items-center justify-center bg-[#001020]">
                <Image
                  src="/MM_Logo_1.webp"
                  alt="Indian Sailing League 2026"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#000d1f]/60" />
              </div>

              <div className="md:w-[62%] p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-meridian-accent text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest">
                    Featured
                  </span>
                  <span className="text-white/50 font-athletic uppercase text-sm tracking-wider">
                    March 27–31, 2026
                  </span>
                </div>
                <h3 className="font-athletic text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  Indian Sailing League 2026
                </h3>
                <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                  The flagship event of the season arrives at the Umiam Sailing Club, Shillong — the
                  'Jewel of the Northeast'. Umiam Lake provides a challenging and breathtaking arena for
                  the country's best sailors.
                </p>
                <div className="flex flex-wrap gap-8">
                  {[
                    { stat: '14', label: 'Elite Teams' },
                    { stat: '182', label: 'Participants' },
                    { stat: '08', label: 'Countries' },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-3xl font-athletic font-bold text-meridian-accent">{s.stat}</p>
                      <p className="uppercase text-xs tracking-widest text-white/40 mt-1">{s.label}</p>
                    </div>
                  ))}
                  <div className="flex items-end ml-auto">
                    <Link
                      href="/events"
                      className="font-athletic uppercase tracking-widest text-xs text-meridian-accent border border-meridian-accent/40 px-5 py-2.5 rounded-theme hover:bg-meridian-accent hover:text-white transition-all"
                    >
                      Full Calendar →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Grid ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#000d1f] relative overflow-hidden" id="join">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="60" id="grid" patternUnits="userSpaceOnUse" width="60">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-meridian-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-gsap="fade-up">
            <p className="section-label">Get Involved</p>
            <h2 className="font-athletic text-4xl md:text-5xl font-bold uppercase mb-5">
              Be Part of the <span className="text-meridian-accent">Legacy</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-base">
              Whether you're a budding talent, a seasoned professional, or a passionate supporter — there
              is a place for you in the Mumbai Meridians family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-gsap="stagger">
            {/* Junior Sailing */}
            <div className="relative group bg-white/[0.03] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-meridian-accent/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer cta-button">
              <div className="w-14 h-14 bg-meridian-accent/15 border border-meridian-accent/25 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-meridian-accent/25 transition-colors">
                <svg className="w-7 h-7 text-meridian-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="font-athletic text-xl font-bold mb-3 uppercase tracking-wide">Junior Sailing</h4>
              <p className="text-gray-500 mb-8 flex-grow text-sm leading-relaxed">
                Nurturing the champions of tomorrow. Structured programs for ages 6–18.
              </p>
              <Link
                href="/contact"
                className="w-full py-3 border border-meridian-accent/60 text-meridian-accent font-athletic font-bold hover:bg-meridian-accent hover:text-white hover:border-meridian-accent transition-all uppercase tracking-widest text-xs rounded-theme"
              >
                Enroll Now
              </Link>
            </div>

            {/* Training Programs */}
            <div className="relative group bg-meridian-accent p-8 rounded-2xl flex flex-col items-center text-center shadow-2xl shadow-meridian-accent/20 cta-button md:scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-meridian-navy text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Popular
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="font-athletic text-xl font-bold mb-3 uppercase tracking-wide text-white">Training Programs</h4>
              <p className="text-white/75 mb-8 flex-grow text-sm leading-relaxed">
                Professional coaching for competitive sailors across all boat classes.
              </p>
              <Link
                href="/junior-sailing"
                className="w-full py-3 bg-meridian-navy text-white font-athletic font-bold hover:bg-white hover:text-meridian-navy transition-all uppercase tracking-widest text-xs rounded-theme"
              >
                View Courses
              </Link>
            </div>

            {/* Join the Crew */}
            <div className="relative group bg-white/[0.03] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-meridian-accent/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer cta-button">
              <div className="w-14 h-14 bg-meridian-accent/15 border border-meridian-accent/25 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-meridian-accent/25 transition-colors">
                <svg className="w-7 h-7 text-meridian-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h4 className="font-athletic text-xl font-bold mb-3 uppercase tracking-wide">Join the Crew</h4>
              <p className="text-gray-500 mb-8 flex-grow text-sm leading-relaxed">
                Operations, media, or technical support — join our shore team.
              </p>
              <Link
                href="/contact"
                className="w-full py-3 border border-meridian-accent/60 text-meridian-accent font-athletic font-bold hover:bg-meridian-accent hover:text-white hover:border-meridian-accent transition-all uppercase tracking-widest text-xs rounded-theme"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
