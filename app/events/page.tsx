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
    name: 'Vikram Singh',
    role: 'Head Coach / Tactical Lead',
    bio: 'Former Olympian with 20+ years of racing experience across the Mediterranean and Asian circuits.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyrVIUzEbGCNgumAj2IMXZ0SewS95cF_YFsnHN3I1WiGFcjGUetdZ2QnXVWxdR-AscKd8DNHI6GTc_AM2tbBFdlY02VATO6wAefzrL31X1YM_V7ZCeGTAJgYbT233Yw6qAZ2XhLI6QliQuUDmS1ACxGN-keOl-mPOnn7U-RopRPly-9cl8dGG_KnivnzGRDXySHG9MJwmL_lh5XNCr-4BhgqSHix7rtQnZKAelP-dJxSIwWxmW0uyd1nxgeL-qPe3503lhFR_e_s7s',
    borderColor: 'border-meridian-gold',
  },
  {
    name: 'Ananya Rao',
    role: 'Lead Helmsman',
    bio: 'Two-time national champion known for her fearless starts and exceptional boat handling.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcTUhi16l1l5iPcsR55zmmWzlF1xTyh-SgA2NQ4SMi6J8hvZXwXFzrnCH66v_hV8QIosXOuYpa2nr2TP1Mshmz4ObQDdgeDL1R2WgMWcf2xoMa3Zzoi91cJrj7yyJG9U98YvzfH9va0S8ftAVp6FjM3qZvbFPzfPckAqVEjVxDJikRMLOsvxoypb2z7gwVXtkZ1tucR8La2qB2lsBBsAXyiEYevIQ1GdWGHhVwiT2zKDWvXy-Uf9Do99YnRLGF_6MhFBclhE9kY3z4',
    borderColor: 'border-meridian-accent',
  },
  {
    name: 'Rohan Mehta',
    role: 'Main Trimmer',
    bio: 'An engineering prodigy who brings data-driven precision to the sail trim of our J/70 squad.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5E4A49Jhb3W9eg3bieqkh_YpMlSumZBTqCRyC_7C0Wh_365bOauSg_MwYyf_UYO4BAKfvulUv1W6MiLu9ozRWUO3XoWhLA47h0wRxCxY5kX5-Cvhi29lyVqRJ97JqqaL783gjq5X9xEw7UNQkjWj3Zv9qposvxgNkfqlzomZrM3iUmC5zt08yIFuPxXnHD14GrHhhrLMlJJTFYSYUDRXctLSBEbtqXjJgByNqw62QCJpaUEYLaL5QqBSka8ucsyO6-fCdPwVJGfdH',
    borderColor: 'border-meridian-accent',
  },
  {
    name: 'Sarah Fernandes',
    role: 'Fitness & Mental Coach',
    bio: 'Ensuring our sailors are in peak physical and mental condition for grueling endurance regattas.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW-AJLxAAwFaHKn_Kk_cl0VX6SI8S9B2lme7Fa9jpmhEXFS-W3O-SfyAH7w9R66yfuImKQSfY7Dk8iyytDpvYtBdTM_OOGVXAfkj-MRPoCbAzE1dRaLYzSlZXQSlH05oWcNQ6HABDUVTSht9gqtGOZYp8vEjvSRwnrN8kXcAzpGjuAOHeTOQwoI3zZpMs9mg4xBVNLaOyXgAIBf0nxizF8i8lC1S5BYnnvTTgYq2Fl1pSZNOw11npx-p18n0bW-fRSjLRzoJD14xnc',
    borderColor: 'border-meridian-gold',
  },
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
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSAmDbYpBJpjaCVPxkNzFclpeTmau1NhpoDZdXqWA4DMZXl3e5vhAfJE36a5tinAux88UxTsM-9uFv1YmJa_qe3Bdb9xY1YRp1JH4ypjtlTU8Wl2_yJjvaqnsMXZm_vhf0Uwo0YBHa-FGBMruBR3jtDyFINMq-JFj4Bjp6DJD58J3lZ-hWGEYRe41jjfUifzE6F9K4rDyJ5XKDv8vq2ivo79C26VszhG51F1DZmD9BHmjE34gO1DEBVJmN8y5gSCZrVTUu-b27bP4f',
    alt: 'Sailing action',
    caption: 'Sunset Sessions, Marine Drive',
    span: true,
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTXhFnBd_m6bjJsKXBipThBPpK_ZFBGGzOrPJVJa2xmAvDbvD2R0l-PxHt7Gd64YFlOGaJNNCdCgKZjcOJX2TApEUmKmpbT5W6m8zgGu2ZX872yBJnAAUSrTywQzM4QnEBiX0EF3MZY0TNLCoWqZ1rJ_Ehlu5W52V29c1USo-YD3Ho_CCHTvyIu2yQAsuF0yXIoOFHwsQjaV5ZcJZn88C3Bfq-_yDPKM85gjw8qmkb7uTeRlstmpW5v61kfJO2Xyfk-mv3pUq1787X',
    alt: 'Team strategy',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCco7HEX-nZB6QZlZb2WtV-XGQFU3dDcCd1bayF7E6DkqmJSaUjeXOv4WNxKGc7F28Ngrwc4-B5klAsxwGygSNKHnhXXNJkbr0MA8HLUi8A0gFcaKZD8je4RJPFQQv2sY5mAbBoLQb650jJd_duCL6pzgPr9kTOuH9upX6NsE_-XnMSgM5pFmFfdvwnM-4toN5W-GKGSgwG-HPKt-3J7a4gXofxGPISocuWRuMyvZ4bzYrd96F6mvdocYKQZpPFNMrNNPWLy9cv7o30',
    alt: 'Boat maintenance',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv8zgCMiFCieV53O5-xBasCvZBK5ZFkaV2vuWEGT4ZiIFCrkyhmI4tCBcRbLsngL--zPGew0rXqbXS389iIPjxvoAuro22SJW-YBIfCdFxCGRkd-TBeF-SJMS5XyeEmU_EHuDjS33NZ6-ig7pTO1CLyz5YZ89WGtqSe4g81Wief9bPeYpMX799WZHexASDMZL-MYyyu7xKnzX-vTm86Q2asyGJIP8TGAnztCoJlwzKdbF2Km7ozo3E_e2KaNBc_Jl0-qAHfximGu_1',
    alt: 'Award ceremony',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuwpPgw04hzgURpt1YZE9AOCcQQIDjEdeNPGQQuQGtDV3byIEVgnwtxQYIi02ZHHTMX95sz6pz2uzoELg_3W93q7LDYiDIh08IA9e8diIqjuEEgRKHJmLxTgSa8mZph-ChZpvuA7veWPfZ5x6OnAhDh0tiQDImEqYfhGwT7KVaiAnEO6M_UHV6_b3V5R-Qmg-2OfrNr6G4Qy0RmodM5t83yWatgXW817X_cyhIJFXzCo7TM8XDOk4-QVCJjOjgcvupubXT3Y9nhSwQ',
    alt: 'Junior clinic',
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-meridian-navy mb-4">Race Calendar</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Track our journey across the waves. Join us for upcoming regattas, intensive training
                camps, and community clinics.
              </p>
            </div>

            {/* Featured Event */}
            <div className="mb-12">
              <div className="relative overflow-hidden rounded-theme bg-meridian-navy text-white p-8 md:p-12 shadow-2xl border-l-8 border-meridian-gold">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-meridian-gold text-meridian-navy text-xs font-bold uppercase tracking-widest rounded mb-4">
                      Featured Event
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black mb-4">Indian Sailing League 2026</h3>
                    <p className="text-meridian-accent text-xl font-semibold mb-4">
                      Feb 15 – Mar 10, 2026 | Marine Drive, Mumbai
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4">Meet the Team</h2>
              <p className="text-meridian-accent text-lg max-w-2xl mx-auto">
                The strength of the meridian lies in our people. From world-class tactical coaches to our
                champion sailors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="mb-6 relative mx-auto w-48 h-48">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className={`rounded-theme object-cover border-4 ${member.borderColor} group-hover:scale-105 transition-transform`}
                    />
                    <div className="absolute inset-0 rounded-theme bg-meridian-navy opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-meridian-gold font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm px-4">{member.bio}</p>
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
