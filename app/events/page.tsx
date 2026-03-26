import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import DriveGallery from '@/components/DriveGallery'

export const metadata: Metadata = {
  title: 'Events & Team | Mumbai Meridians',
  description: 'Race calendar, upcoming events, and meet the Mumbai Meridians sailing team.',
}

const teamMembers = [
  {
    name: 'Anita',
    role: 'Captain',
    img: '/media/anita-mhatre.jpg' as string | null,
    borderColor: 'border-meridian-gold',
  },
  {
    name: 'Mohit Mhatre',
    role: 'Lead Captain',
    img: '/media/mohit-mhatre.jpg' as string | null,
    borderColor: 'border-meridian-gold',
  },
  {
    name: 'Vritika Sandeep Mhatre',
    role: 'Junior Captain',
    img: '/media/vritika-san.webp' as string | null,
    borderColor: 'border-meridian-gold',
  },
  {
    name: 'Vikas Kapila',
    role: 'Coach',
    img: '/media/vikas-kapila.jpg' as string | null,
    borderColor: 'border-meridian-gold',
  },
  {
    name: 'Shilpa Oberoi',
    role: 'Media Manager & Coach',
    img: '/media/shilpa-oberoi.png' as string | null,
    borderColor: 'border-meridian-accent',
  },
]

const sailors = [
  { name: 'Progya Das', img: '/media/progya-das.png' },
  { name: 'Jhunusree Das', img: null as string | null },
  { name: 'Arjun Marathe', img: '/media/arjun-marathe.png' },
  { name: 'Sofiia Magkaeva', img: '/media/sofia.jpg' },
  { name: 'Vivek Singh Shekhawat', img: '/media/vivek-singh.png' },
  { name: 'Muhammad Asnawi Iqbal Bin Adam', img: null as string | null },
  { name: 'Pallara Govardhan', img: null as string | null },
  { name: 'Samanyu Konda', img: '/media/samanyu-konda.webp' },
  { name: 'Miron Klimov', img: null as string | null },
  { name: 'Aleksandra Deputova', img: null as string | null },
  { name: 'Daniyar Nabiev', img: null as string | null },
  { name: 'Aryan Karwar', img: null as string | null },
  { name: 'Subbotina Alexandrian', img: null as string | null },
  { name: 'Naavya Kaku', img: '/media/naavya-kaku.webp' },
]



export default function EventsPage() {
  return (
    <div className="bg-meridian-navy text-gray-100 font-sans">
      <Navigation />

      <main className="pt-20">
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

            <DriveGallery />
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
