import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Events & Team | Mumbai Meridians',
  description: 'Race calendar, upcoming events, and meet the Mumbai Meridians sailing team.',
}

const teamMembers = [
  {
    name: 'Sandeep Mhatre',
    role: 'Captain',
    img: null as string | null,
    borderColor: 'border-meridian-gold',
  },
  {
    name: 'Vikas Kapila',
    role: 'Coach',
    img: '/media/vikas-kapila.webp',
    borderColor: 'border-meridian-gold',
  },
  {
    name: 'Shilpa Oberoi',
    role: 'Manager',
    img: null as string | null,
    borderColor: 'border-meridian-accent',
  },
  {
    name: 'Prashant Jadhav',
    role: 'Manager',
    img: null as string | null,
    borderColor: 'border-meridian-accent',
  },
  {
    name: 'Sagar ShivajiRao Jondhale',
    role: 'Manager',
    img: null as string | null,
    borderColor: 'border-meridian-accent',
  },
]

const sailors = [
  { name: 'Progya Das', img: '/media/progya.webp' },
  { name: 'Jhunusree Das', img: null as string | null },
  { name: 'Arjun Marathe', img: null as string | null },
  { name: 'Sofiia Magkaeva', img: '/media/sofia.webp' },
  { name: 'Vivek Singh Shekhawat', img: '/media/vivek-singh.webp' },
  { name: 'Vritika Sandeep Mhatre', img: '/media/vritika-san.webp' },
  { name: 'Muhammad Asnawi Iqbal Bin Adam', img: null as string | null },
  { name: 'Pallara Govardhan', img: null as string | null },
  { name: 'Samanyu Konda', img: '/media/samanyu-konda.webp' },
  { name: 'Miron Klimov', img: null as string | null },
  { name: 'Aleksandra Deputova', img: null as string | null },
  { name: 'Daniyar Nabiev', img: null as string | null },
  { name: 'Aryan Karwar', img: null as string | null },
  { name: 'Subbotina Alexandrian', img: null as string | null },
  { name: 'Mohit Mhatre', img: '/media/mohit-mhatre.webp' },
  { name: 'Naavya Kaku', img: '/media/naavya-kaku.webp' },
]

const upcomingEvents = [
  {
    date: 'NOV 12-14, 2025',
    title: 'Autumn Training Camp',
    desc: 'Elite level preparation focus for junior squads at Mandwa Beach.',
  },
  {
    date: 'DEC 05, 2025',
    title: 'Beginners Sailing Clinic',
    desc: 'A community-focused introduction to laser and optimist sailing.',
  },
  {
    date: 'JAN 20-22, 2026',
    title: 'Meridian Invitational',
    desc: 'Our annual signature cup featuring the best yachting teams in Mumbai.',
  },
]

const galleryImages = [
  {
    src: '/media/gallery-2.webp',
    alt: 'Mumbai Meridians at Umiam, Shillong',
    caption: 'ISL 2026 — Umiam Lake, Shillong',
    span: true,
  },
  {
    src: '/media/gallery-3.webp',
    alt: 'Team together — ISL 2026',
  },
  {
    src: '/media/india-sailing-medals.webp',
    alt: 'India wins 8 medals — Singapore National Sailing',
  },
  {
    src: '/media/event-1.webp',
    alt: 'Mumbai Meridians ISL 2026',
  },
  {
    src: '/media/event-2.webp',
    alt: 'Mumbai Meridians at Shillong',
  },
]

export default function EventsPage() {
  return (
    <div className="bg-meridian-navy text-gray-100 font-sans">
      <Navigation />

      <main className="pt-20">
        {/* Race Calendar */}
        <section className="py-16 md:py-24 bg-white text-gray-900" id="calendar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-gsap="fade-up">
              <h2 className="text-4xl font-extrabold text-meridian-navy mb-4">Race Calendar</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Track our journey across the waves. Join us for upcoming regattas, intensive training
                camps, and community clinics.
              </p>
            </div>

            {/* Featured Event */}
            <div className="mb-12" data-gsap="scale-in">
              <div className="relative overflow-hidden rounded-theme bg-meridian-navy text-white p-8 md:p-12 shadow-2xl border-l-8 border-meridian-gold">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-meridian-gold text-meridian-navy text-xs font-bold uppercase tracking-widest rounded mb-4">
                      Featured Event
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black mb-4">Indian Sailing League 2026</h3>
                    <p className="text-meridian-accent text-xl font-semibold mb-4">
                      March 27–31, 2026 | Umiam Lake, Shillong
                    </p>
                    <p className="text-gray-300 max-w-xl">
                      The pinnacle of competitive sailing in India. Mumbai Meridians returns to defend the
                      championship title in home waters. Don't miss the roar of the ocean.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bg-white text-meridian-navy hover:bg-meridian-accent hover:text-white px-8 py-4 rounded-theme font-bold transition-all shadow-lg">
                      Get Tickets &amp; Info
                    </button>
                  </div>
                </div>
                {/* Decorative wave */}
                <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                  <svg height="300" viewBox="0 0 200 200" width="300" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M44.7,-76.4C58.2,-69.2,70.1,-58,78.8,-44.6C87.4,-31.2,92.8,-15.6,91.3,-0.9C89.7,13.8,81.2,27.5,71.4,39.2C61.6,50.8,50.6,60.3,38.2,67.6C25.8,74.9,12.9,80,0.4,79.2C-12.1,78.5,-24.1,71.9,-35.3,64.1C-46.5,56.3,-56.9,47.3,-65.4,36.4C-73.9,25.5,-80.4,12.7,-81.4,-0.6C-82.3,-13.9,-77.7,-27.7,-69.8,-39.5C-61.8,-51.2,-50.4,-61,-37.8,-68.8C-25.2,-76.6,-12.6,-82.5,1.1,-84.4C14.8,-86.3,29.5,-84.1,44.7,-76.4Z"
                      fill="#FFFFFF"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Upcoming Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-gsap="stagger">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="bg-gray-50 border border-gray-200 rounded-theme p-6 hover-lift"
                >
                  <div className="text-meridian-teal font-bold text-sm mb-2">{event.date}</div>
                  <h4 className="text-xl font-bold text-meridian-navy mb-3">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{event.desc}</p>
                  <a href="#" className="text-meridian-teal font-semibold hover:underline flex items-center gap-1">
                    View Details →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-24 bg-meridian-navy text-white" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-gsap="fade-up">
              <h2 className="text-4xl font-extrabold mb-4">Meet the Team</h2>
              <p className="text-meridian-accent text-lg max-w-2xl mx-auto">
                The official Mumbai Meridians squad for ISL 2026 — March 27–31, Umiam Lake, Shillong.
              </p>
            </div>

            {/* Leadership */}
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-meridian-accent mb-8">Leadership</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-16" data-gsap="stagger">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="mb-4 relative mx-auto w-28 h-28">
                    {member.img ? (
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className={`rounded-full object-cover object-center border-4 ${member.borderColor} group-hover:scale-105 transition-transform`}
                      />
                    ) : (
                      <div className={`w-full h-full rounded-full border-4 ${member.borderColor} bg-white/5 flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-white/40">{member.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-sm font-bold">{member.name}</h4>
                  <p className="text-meridian-gold font-medium text-xs mt-1">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Sailors Roster */}
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-meridian-accent mb-8">Sailors — ISL 2026 Roster</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6" data-gsap="stagger">
              {sailors.map((sailor) => (
                <div key={sailor.name} className="text-center group">
                  <div className="mb-3 relative mx-auto w-20 h-20">
                    {sailor.img ? (
                      <Image
                        src={sailor.img}
                        alt={sailor.name}
                        fill
                        className="rounded-full object-cover object-center border-2 border-meridian-accent/40 group-hover:border-meridian-accent group-hover:scale-105 transition-all"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center">
                        <span className="text-lg font-bold text-white/30">{sailor.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white/80 leading-tight">{sailor.name}</p>
                  <p className="text-[10px] text-meridian-accent/60 uppercase tracking-wider mt-0.5">Sailor</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="py-16 md:py-24 bg-white" id="gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-extrabold text-meridian-navy">Media Gallery</h2>
                <p className="text-gray-600 mt-2">Catch a glimpse of the action from our latest training blocks.</p>
              </div>
              <a href="#" className="inline-flex items-center text-meridian-teal font-bold hover:gap-2 transition-all">
                View All Media <span className="ml-1">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-gsap="stagger">
              {/* Large featured image */}
              <div className="row-span-2 col-span-2 relative group overflow-hidden rounded-theme">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold">{galleryImages[0].caption}</p>
                </div>
              </div>

              {/* Gallery image with play icon */}
              <div className="relative group overflow-hidden rounded-theme">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-meridian-accent/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white p-3 rounded-theme shadow-lg">
                    <svg className="w-6 h-6 text-meridian-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Plain gallery images */}
              {galleryImages.slice(2).map((img) => (
                <div key={img.alt} className="relative group overflow-hidden rounded-theme">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#00152a] text-gray-400 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-2">Mumbai Meridians</h4>
            <p className="text-sm">Navigating Excellence, Building Community.</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-meridian-gold transition">Instagram</a>
            <a href="#" className="hover:text-meridian-gold transition">YouTube</a>
            <Link href="/" className="hover:text-meridian-gold transition">Home</Link>
          </div>
          <p className="text-xs text-gray-600">© 2025 Mumbai Meridians Sailing Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
