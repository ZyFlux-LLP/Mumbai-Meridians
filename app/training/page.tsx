import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Sailing Training Programs & Fleet | Mumbai Meridians',
  description: 'Advanced sailing training methodologies and a world-class fleet for competitive sailors. Mumbai Meridians ISL 2026.',
  alternates: {
    canonical: 'https://www.mumbaimeridians.com/training',
  },
  openGraph: {
    title: 'Sailing Training Programs & Fleet | Mumbai Meridians',
    description: 'Advanced sailing training methodologies and a world-class fleet for competitive sailors.',
    url: 'https://www.mumbaimeridians.com/training',
    images: [
      {
        url: 'https://www.mumbaimeridians.com/cover.webp',
        width: 1200,
        height: 630,
        alt: 'Mumbai Meridians Sailing Training Programs',
      },
    ],
  },
}

const trainingPrograms = [
  {
    num: '01',
    title: 'Learn to Sail',
    desc: 'Foundational courses focusing on aerodynamics, hydrodynamics, and basic maneuvers. Perfect for high-potential athletes starting their journey.',
    items: ['BASIC RIGGING', 'WIND AWARENESS', 'BOAT HANDLING'],
    featured: false,
  },
  {
    num: '02',
    title: 'Racing Squad',
    desc: 'Elite tactical training, data analysis, and regatta simulation. Focused on podium finishes at national and international levels.',
    items: ['RACE STRATEGY', 'VIDEO ANALYSIS', 'FITNESS & NUTRITION'],
    featured: true,
  },
  {
    num: '03',
    title: 'Coach Dev',
    desc: 'Advanced pedagogy for experienced sailors looking to mentor. Certification programs recognized by global sailing bodies.',
    items: ['MENTORSHIP SKILLS', 'SAFETY MANAGEMENT', 'CLASS CURRICULUM'],
    featured: false,
  },
]

const fleet = [
  {
    name: 'ILCA 7',
    subtitle: 'Open Single-Handed Olympic Class',
    desc: 'The full-rig ILCA — physically demanding and the pinnacle of single-handed dinghy racing. Used in ISL mixed-team competition for senior open sailors.',
    specs: [
      { label: 'LENGTH', value: '4.23 M' },
      { label: 'SAIL AREA', value: '7.06 SQ M' },
      { label: 'CREW', value: '1 PERSON' },
    ],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB17r5wzNkhgNE43ZncvY7OuKwnSRUAWnNSKhY9S3mfY1EZ6TpGoZ6dSd0HFlqBuyShO8pnKy4FEWxpue73rDuxQDGu-L3OUQtHAMM1v3BHkvYAGJhuwKypUgB9racCVqMEW56Txpc-HVaFvuTe7EgwCEWEFJD03hh4TolkLndMRp0hEszEYwpEPotoRlXe45Jgb7aNYlWYuaZryk46j1g8mnaVCDWYpguMO_C2dnv9e3CuE7sO0EtU-3iaajiF-L8UZkx5lTCEIsl1',
  },
  {
    name: 'ILCA 6',
    subtitle: 'Radial Single-Handed Olympic Class',
    desc: 'The radial-rig ILCA — ideal for lighter athletes and female sailors. A core ISL mixed-team class combining speed with tactical finesse.',
    specs: [
      { label: 'LENGTH', value: '4.23 M' },
      { label: 'SAIL AREA', value: '5.76 SQ M' },
      { label: 'CREW', value: '1 PERSON' },
    ],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB17r5wzNkhgNE43ZncvY7OuKwnSRUAWnNSKhY9S3mfY1EZ6TpGoZ6dSd0HFlqBuyShO8pnKy4FEWxpue73rDuxQDGu-L3OUQtHAMM1v3BHkvYAGJhuwKypUgB9racCVqMEW56Txpc-HVaFvuTe7EgwCEWEFJD03hh4TolkLndMRp0hEszEYwpEPotoRlXe45Jgb7aNYlWYuaZryk46j1g8mnaVCDWYpguMO_C2dnv9e3CuE7sO0EtU-3iaajiF-L8UZkx5lTCEIsl1',
  },
  {
    name: 'ILCA 4',
    subtitle: 'Junior Single-Handed Class',
    desc: 'The 4.7-rig ILCA — the perfect step up for junior sailors developing race-level skills. Bridges the gap between Optimist and full Olympic racing.',
    specs: [
      { label: 'LENGTH', value: '4.23 M' },
      { label: 'SAIL AREA', value: '4.70 SQ M' },
      { label: 'CREW', value: '1 PERSON' },
    ],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB17r5wzNkhgNE43ZncvY7OuKwnSRUAWnNSKhY9S3mfY1EZ6TpGoZ6dSd0HFlqBuyShO8pnKy4FEWxpue73rDuxQDGu-L3OUQtHAMM1v3BHkvYAGJhuwKypUgB9racCVqMEW56Txpc-HVaFvuTe7EgwCEWEFJD03hh4TolkLndMRp0hEszEYwpEPotoRlXe45Jgb7aNYlWYuaZryk46j1g8mnaVCDWYpguMO_C2dnv9e3CuE7sO0EtU-3iaajiF-L8UZkx5lTCEIsl1',
  },
  {
    name: 'Optimist',
    subtitle: 'Junior Development Class',
    desc: 'The global standard for young sailors under 15. The entry point into ISL competition — known for safety, tactical depth, and worldwide adoption.',
    specs: [
      { label: 'LENGTH', value: '2.31 M' },
      { label: 'SAIL AREA', value: '3.3 SQ M' },
      { label: 'OPTIMAL WEIGHT', value: '35–55 KG' },
    ],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNKO4ZXiqo1GSF-jAMYD37-L0qfjWvxahqzaYkXBMFLlhqPUvQjooLaLZZ63EfRG84PAND2EXUyR3HiaiAFNQj0_05q-SnL1l7wLAEkAxY_WK1KHW6Ues6ZF8k4rzSD8V7XZojDrk3WEr4mHWciem7tSnPncSG6zeQB3VVoP--Q-wwLrUjIDdrt4bMOIzTTHKS-Nx5UZMw72SO0ltqua2TjhGLkTOQ-YIylcNftBppKWnVFB7OArLEXSMDw2uAiFTQXzs1CPd-rVgX',
  },
  {
    name: '420 Mixed',
    subtitle: 'Double-Handed Mixed Team Class',
    desc: 'The ISL\'s mixed double-handed class. Spinnaker, trapeze, and two-person coordination — designed to showcase teamwork across genders in franchise competition.',
    specs: [
      { label: 'LENGTH', value: '4.20 M' },
      { label: 'SAILS', value: 'MAIN, JIB, SPINNAKER' },
      { label: 'CREW', value: '2 PERSONS (MIXED)' },
    ],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2GBXeftw_C8fnOjdpu93satdQdsr9EtbD0mjCeFPonhBR8ool3mMCazGUj6BGZffhydcS7mheHmhQCn1u7G5BJa3E7wYPyJcD2XEvE8nrDQmvbFpJExdneZb3HTutPtjnG_NaXM3L9L0I8UefV3vR3ptMDDBx1ywFU_NFZgdHJr5MNLAu3WFJKVum-nTV24NcGMPF6lcIU-278E3MjWvjYDOUHICoEWxMQox5uNcJCkYikUsqL3VFSKf9AkYAkJwNvivb7Qu2Vqyj',
  },
]

const facilities = [
  { stat: '24/7', label: 'Tech Support' },
  { stat: 'HD', label: 'Drone Analysis' },
  { stat: 'GPS', label: 'Tracking Kits' },
  { stat: 'PRO', label: 'Coach Boats' },
]

export default function TrainingPage() {
  return (
    <div className="bg-meridian-navy text-white font-sans antialiased">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-sea-blue/30">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQYMzKo37AZnT9AS9i49OrAcKUMkMIic-jjsX1A3iS_BImgjjsJLE6bo7cFfjaP7xAqp27zDdKcn2a5s7OD12zpRnGIf2H-sJowMOK1-d-rnO3Zh0tX6mKrLhYB2wI-qIl9RzXGq_ad_L7vbNH5OgHFr8qZTqPBmJvkuTlJdnAx99mk7bezjDuFmGU1U9eRngrQH-r6wN-0MuGeLYodE5tK3W1Vjfp82kBbkoLQwVKQLJ-lXNJJdZrVPbB2hGo_5vETWb0Q5xv6Wk1"
              alt="Sailing Training Hero"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy via-meridian-navy/20 to-meridian-navy" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 animate-fade-in-up font-athletic">
              Precision <span className="text-sea-blue">Performance</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Advanced training methodologies and a world-class fleet designed to forge the next generation
              of competitive sailors.
            </p>
          </div>
        </section>

        {/* Professional Training */}
        <section className="py-24 bg-white text-meridian-navy" id="training">
          <div className="container mx-auto px-6">
            <div className="mb-16" data-gsap="fade-up">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-sea-blue mb-2">Programs</h2>
              <h3 className="text-4xl font-black uppercase italic font-athletic">Professional Training</h3>
              <div className="w-20 h-1.5 bg-meridian-navy mt-4 rounded-full" data-gsap="line-draw" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-gsap="stagger">
              {trainingPrograms.map((prog) =>
                prog.featured ? (
                  <div key={prog.title} className="p-8 bg-meridian-navy text-white shadow-2xl transform md:-translate-y-4 rounded-custom">
                    <div className="mb-6">
                      <span className="text-4xl font-black text-sea-blue italic">{prog.num}</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 uppercase">{prog.title}</h4>
                    <p className="text-sea-blue/80 mb-6 leading-relaxed">{prog.desc}</p>
                    <ul className="space-y-2 text-sm font-bold text-white">
                      {prog.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="w-2 h-2 bg-sea-blue mr-2 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div key={prog.title} className="p-8 border-2 border-meridian-navy/10 hover:border-sea-blue transition-all group rounded-custom">
                    <div className="mb-6">
                      <span className="text-4xl font-black text-meridian-navy/10 group-hover:text-sea-blue/20 transition-colors italic">
                        {prog.num}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 uppercase">{prog.title}</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{prog.desc}</p>
                    <ul className="space-y-2 text-sm font-bold text-meridian-navy/80">
                      {prog.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="w-2 h-2 bg-sea-blue mr-2 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* The Fleet */}
        <section className="py-24 bg-deep-blue overflow-hidden" id="fleet">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-right" data-gsap="fade-up">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-sea-blue mb-2">Technical Specs</h2>
              <h3 className="text-4xl font-black uppercase italic font-athletic">The Fleet</h3>
              <div className="w-20 h-1.5 bg-sea-blue mt-4 ml-auto rounded-full" data-gsap="line-draw" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-gsap="stagger">
              {fleet.map((boat) => (
                <div key={boat.name} className="glass-effect p-8 flex flex-col md:flex-row gap-8 rounded-custom">
                  <div className="w-full md:w-1/2 overflow-hidden rounded-custom">
                    <Image
                      src={boat.img}
                      alt={boat.name}
                      width={400}
                      height={300}
                      className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="text-2xl font-black italic uppercase text-sea-blue mb-2">{boat.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-blue-200/60 mb-4">{boat.subtitle}</p>
                    <p className="text-sm text-blue-100 mb-6">{boat.desc}</p>
                    <div className="space-y-2 border-t border-sea-blue/30 pt-4">
                      {boat.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between text-[10px] tracking-tighter text-blue-200">
                          <span>{spec.label}</span>
                          <span>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-meridian-navy border-y border-sea-blue/20">
          <div className="container mx-auto px-6 text-center">
            <h4 className="text-3xl font-black italic uppercase mb-8 font-athletic">
              Ready to calibrate your performance?
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="bg-sea-blue text-meridian-navy px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-white transition-all rounded-custom"
              >
                Download Fleet Guide
              </a>
              <a
                href="/contact"
                className="border-2 border-sea-blue text-sea-blue px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-sea-blue hover:text-meridian-navy transition-all rounded-custom"
              >
                Book Trial Session
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-meridian-navy py-12 border-t border-sea-blue/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-70">
          <div className="text-sm uppercase tracking-widest mb-4 md:mb-0">
            © 2024 Mumbai Meridians. All Vectors Aligned.
          </div>
          <div className="flex space-x-6 text-xs uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-sea-blue transition-colors">Privacy</a>
            <a href="#" className="hover:text-sea-blue transition-colors">Safety</a>
            <a href="https://www.instagram.com/mumbai.meridians" target="_blank" rel="noopener noreferrer" className="hover:text-sea-blue transition-colors">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61580698816305" target="_blank" rel="noopener noreferrer" className="hover:text-sea-blue transition-colors">Facebook</a>
            <a href="https://www.threads.net/@mumbai.meridians" target="_blank" rel="noopener noreferrer" className="hover:text-sea-blue transition-colors">Threads</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
