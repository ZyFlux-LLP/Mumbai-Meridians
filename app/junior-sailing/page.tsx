import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Junior Sailing | Mumbai Meridians',
  description: 'Nurturing the next generation of Indian mariners through structured junior sailing programs.',
}

export default function JuniorSailingPage() {
  return (
    <div className="bg-slate-900 text-white antialiased">
      <Navigation />

      {/* Hero Section */}
      <header className="relative h-[45vh] bg-navy-gradient flex items-center justify-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="20" id="waves" patternUnits="userSpaceOnUse" width="100" x="0" y="0">
                <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="#00D4FF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect fill="url(#waves)" height="100%" width="100%" />
          </svg>
        </div>
        <div className="max-w-3xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase italic tracking-tighter font-athletic">
            Junior Sailing
          </h1>
          <p className="text-sea-blue text-lg font-semibold tracking-wide uppercase">
            Nurturing the next generation of Indian Mariners
          </p>
        </div>
      </header>

      <main>
        {/* What is Sailing */}
        <section className="py-24 px-4 bg-slate-900" id="what-is-sailing">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div data-gsap="fade-left">
                <h2 className="text-3xl font-black mb-6 uppercase border-l-4 border-sea-blue pl-4">
                  What is Sailing?
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Sailing is more than just a sport; it's a profound engagement with the elements. At Mumbai
                  Meridians, we believe the ocean is the ultimate classroom. It demands physical fitness,
                  mental agility, and a deep respect for nature.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      ),
                      title: 'Fitness & Agility',
                      desc: 'Developing core strength, balance, and fine motor skills through boat handling.',
                    },
                    {
                      icon: (
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      ),
                      title: 'Leadership & Responsibility',
                      desc: 'Empowering young sailors to make split-second decisions and manage their own craft.',
                    },
                    {
                      icon: (
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      ),
                      title: 'Strategy & Tactics',
                      desc: "Learning to read the wind and tide, turning every race into a high-speed game of chess.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start">
                      <div className="bg-meridian-navy p-2 rounded-custom mr-4 mt-1 border border-sea-blue/20">
                        <svg className="w-5 h-5 text-sea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold uppercase tracking-tight text-white">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative" data-gsap="fade-right">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVRywbmLPJ9FwrxUYdeaxEn2GVsb3N7LH3PtCDI2YJVuaBGFJXvxGXo_xdQRuvCIJ5tSJX8LKCP2sllP2TAty0AoyX9vYYzZUd8ZW2LVskQWYE38cqPZDDl716JZMvcdfamK1ZE77mrNhpFonwhmymU9BeqB_u48AfWzPeNFTCpLZ4sHYgKwDkxR9csb3nMeBiRzl2MwIVaa1RRaFyW3nJ1wnTNaZsivzmK_FLY4tEkZQs-apGJVbyb__lPTpLAs5b8O26sIaI1ABU"
                  alt="Youth sailing in Mumbai harbor"
                  width={600}
                  height={450}
                  className="rounded-custom shadow-2xl border border-white/10 w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-sea-blue p-6 hidden lg:block rounded-custom shadow-xl">
                  <span className="text-meridian-navy font-black text-4xl">100+</span>
                  <p className="text-meridian-navy font-bold uppercase text-xs">Certified Juniors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="bg-deep-ocean py-24 px-4" id="programs">
          <div className="container mx-auto">
            <div className="text-center mb-16" data-gsap="fade-up">
              <h2 className="text-4xl font-black uppercase mb-2">Our Programs</h2>
              <div className="w-24 h-1 bg-sea-blue mx-auto mb-4" data-gsap="line-draw" />
              <p className="text-slate-400">Tailored coaching for every stage of development.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-gsap="stagger">
              {/* Beginner */}
              <div className="bg-meridian-navy p-8 rounded-custom shadow-lg border-t-4 border-slate-700 hover:border-sea-blue transition-all group">
                <div className="mb-6 flex justify-center">
                  <div className="bg-slate-800 p-4 rounded-full group-hover:bg-sea-blue transition-colors duration-300">
                    <svg className="w-12 h-12 text-white group-hover:text-meridian-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center uppercase mb-2">Beginner Sailors</h3>
                <p className="text-sea-blue font-bold text-center mb-4">Ages 6 – 9</p>
                <p className="text-slate-400 text-sm mb-6 text-center leading-relaxed">
                  Introduction to water safety, boat parts, and basic steering in Optimist class boats.
                  Focus is on fun and confidence.
                </p>
                <ul className="text-xs space-y-3 text-slate-500 font-medium">
                  {['Saturday Morning Sessions', 'Life-jacket Provided', 'Pool & Harbor Training'].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-sea-blue rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intermediate */}
              <div className="bg-meridian-navy p-8 rounded-custom shadow-2xl border-t-4 border-sea-blue hover:shadow-sea-blue/10 transition-all group md:scale-105 z-10">
                <div className="mb-6 flex justify-center">
                  <div className="bg-sea-blue/10 p-4 rounded-full group-hover:bg-sea-blue transition-colors duration-300">
                    <svg className="w-12 h-12 text-sea-blue group-hover:text-meridian-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center uppercase mb-2 text-white">Intermediate</h3>
                <p className="text-sea-blue font-bold text-center mb-4">Ages 10 – 14</p>
                <p className="text-slate-300 text-sm mb-6 text-center leading-relaxed">
                  Transitioning to independent sailing. Learning sail trim, point of sail, and introductory
                  race rules.
                </p>
                <ul className="text-xs space-y-3 text-slate-400 font-medium">
                  {['Twice-weekly Training', 'Intro to Regattas', 'Advanced Maneuvers'].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-sea-blue rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Racing Squad */}
              <div className="bg-meridian-navy p-8 rounded-custom shadow-lg border-t-4 border-slate-700 hover:border-sea-blue transition-all group">
                <div className="mb-6 flex justify-center">
                  <div className="bg-slate-800 p-4 rounded-full group-hover:bg-sea-blue transition-colors duration-300">
                    <svg className="w-12 h-12 text-white group-hover:text-meridian-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center uppercase mb-2">Racing Squad</h3>
                <p className="text-sea-blue font-bold text-center mb-4">Ages 15 – 18</p>
                <p className="text-slate-400 text-sm mb-6 text-center leading-relaxed">
                  High-performance training for national level competition. Focus on speed, team tactics,
                  and fitness.
                </p>
                <ul className="text-xs space-y-3 text-slate-500 font-medium">
                  {['Daily Elite Coaching', 'National Travel Circuit', 'Sponsorship Guidance'].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-sea-blue rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pathway Timeline */}
        <section className="py-24 px-4 bg-slate-900" id="pathway">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-black text-center uppercase mb-16" data-gsap="fade-up">A Pathway to Performance</h2>
            <div className="relative" data-gsap="stagger">
              {/* Central line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line hidden md:block opacity-30" />

              {/* Step 1 */}
              <div className="relative flex items-center justify-between mb-20 md:mb-28 group">
                <div className="hidden md:block w-5/12 text-right pr-12">
                  <span className="text-sm font-bold text-sea-blue uppercase">Year 1</span>
                  <h4 className="text-xl font-black uppercase text-white">The First Splash</h4>
                </div>
                <div className="z-10 bg-deep-ocean border-4 border-sea-blue w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-full md:w-5/12 pl-8 md:pl-12">
                  <div className="md:hidden mb-1"><span className="text-xs font-bold text-sea-blue uppercase">Year 1</span></div>
                  <p className="text-slate-400">Students learn to steer their first boat and gain water confidence in protected bays.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between mb-20 md:mb-28 flex-row-reverse">
                <div className="hidden md:block w-5/12 text-left pl-12">
                  <span className="text-sm font-bold text-sea-blue uppercase">Year 2-3</span>
                  <h4 className="text-xl font-black uppercase text-white">Skill Mastery</h4>
                </div>
                <div className="z-10 bg-deep-ocean border-4 border-sea-blue w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-full md:w-5/12 text-right pr-8 md:pr-12">
                  <div className="md:hidden mb-1"><span className="text-xs font-bold text-sea-blue uppercase">Year 2-3</span></div>
                  <p className="text-slate-400">Mastering sail trim and beginning to compete in local club races across Mumbai.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between">
                <div className="hidden md:block w-5/12 text-right pr-12">
                  <span className="text-sm font-bold text-sea-blue uppercase">Year 4+</span>
                  <h4 className="text-xl font-black uppercase text-white">Elite Racing</h4>
                </div>
                <div className="z-10 bg-deep-ocean border-4 border-sea-blue w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-full md:w-5/12 pl-8 md:pl-12">
                  <div className="md:hidden mb-1"><span className="text-xs font-bold text-sea-blue uppercase">Year 4+</span></div>
                  <p className="text-slate-400">Joining the Racing Squad for national selections and international exposure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer CTA */}
      <footer className="bg-deep-ocean text-white pt-24 pb-12 px-4">
        <div className="container mx-auto text-center border-b border-slate-800 pb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 italic tracking-tighter font-athletic">
            Ready to Set Sail?
          </h2>
          <p className="text-lg mb-12 text-slate-400 max-w-xl mx-auto leading-relaxed">
            Registration for the Monsoon &amp; Winter seasons is now open. Secure your spot in the squad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-sea-blue text-meridian-navy px-12 py-5 font-black uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-custom shadow-lg shadow-sea-blue/20"
            >
              Register Now
            </Link>
            <a
              href="#"
              className="border-2 border-slate-700 px-12 py-5 font-black uppercase tracking-widest hover:border-white hover:text-white transition-all duration-300 rounded-custom"
            >
              Download Prospectus
            </a>
          </div>
        </div>
        <div className="container mx-auto pt-12 flex flex-col md:flex-row justify-between items-center opacity-60 text-[10px] tracking-widest uppercase">
          <p>© 2025 Mumbai Meridians Sailing Club. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 font-bold">
            <Link href="#" className="hover:text-sea-blue transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-sea-blue transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-sea-blue transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
