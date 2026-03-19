import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Programs: [
    { label: 'Junior Sailing', href: '/junior-sailing' },
    { label: 'Training Programs', href: '/training' },
    { label: 'Our Fleet', href: '/training#fleet' },
  ],
  'Events & Media': [
    { label: 'Race Calendar', href: '/events#calendar' },
    { label: 'Meet the Team', href: '/events#team' },
    { label: 'Media Gallery', href: '/events#gallery' },
  ],
}

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 20h11a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0017.5 4h-11A2.5 2.5 0 004 6.5v11A2.5 2.5 0 006.5 20z" />
    ),
  },
  {
    label: 'Twitter/X',
    href: '#',
    icon: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z" />
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#00060f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <Image
                src="/logo3.jpeg"
                alt="Mumbai Meridians Logo"
                width={40}
                height={52}
                className="h-12 w-auto object-contain rounded-sm"
              />
              <span className="font-athletic text-xl font-bold tracking-tighter italic text-white">
                MUMBAI<span className="text-red-500">MERIDIANS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              India's premier sailing franchise — elevating nautical athleticism from Mumbai's shores to
              the global stage.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-meridian-accent hover:border-meridian-accent/40 hover:bg-meridian-accent/10 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h5 className="font-athletic uppercase tracking-widest text-xs text-meridian-accent mb-5">
                {group}
              </h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 Mumbai Meridians Sailing Franchise. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Safety'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
