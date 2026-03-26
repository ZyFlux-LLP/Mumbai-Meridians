import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Programs: [
    { label: 'Junior Sailing', href: '/junior-sailing' },
    { label: 'Training Programs', href: '/training' },
    { label: 'Our Fleet', href: '/training#fleet' },
  ],
  'Events & Media': [
    { label: 'Meet the Team', href: '/events#team' },
    { label: 'Media Gallery', href: '/media' },
  ],
  'Connect': [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Join the Team', href: '/contact' },
  ],
}

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mumbai.meridians',
    icon: (
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 20h11a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0017.5 4h-11A2.5 2.5 0 004 6.5v11A2.5 2.5 0 006.5 20z" />
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61580698816305',
    icon: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
  },
  {
    label: 'Threads',
    href: 'https://www.threads.net/@mumbai.meridians',
    icon: (
      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
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
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/MM_Logo.png"
                alt="Mumbai Meridians Logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <li key={link.label}>
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
