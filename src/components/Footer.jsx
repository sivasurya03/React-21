import { Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { ICONS } from './icons.js'
import { FOOTER_COLUMNS, SOCIALS } from '../data/content.js'

const linkClass = 'rounded-md text-roast-mute transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer data-theme="dark" className="bg-roast text-white">
      <div className="container-x pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-roast-mute">
              Roast logging, green coffee inventory and wholesale orders for independent roasters.
            </p>
            <ul className="mt-6 flex gap-2">
              {SOCIALS.map((social) => {
                const Icon = ICONS[social.icon]
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (opens in a new tab)`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-roast-line text-roast-mute transition-colors hover:border-ember hover:text-ember"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 content-start gap-x-8 gap-y-10 sm:grid-cols-[7.5rem_7.5rem_minmax(0,1fr)] lg:col-span-7">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-base font-semibold">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-base font-semibold">Contact</h2>
              <ul className="mt-4 space-y-3 text-roast-mute">
                <li>
                  <a href="mailto:hello@firstcrack.example" className={`${linkClass} inline-flex items-center gap-2`}>
                    <Mail size={18} aria-hidden="true" />
                    hello@firstcrack.example
                  </a>
                </li>
                <li className="text-sm">Sample contact details for this demo.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-roast-line pt-6 text-sm text-roast-mute">
          <p>© {new Date().getFullYear()} Firstcrack. A demo landing page, not a real product.</p>
          <p className="mt-1">Social links open each platform&rsquo;s home page until real profiles are added.</p>
        </div>
      </div>
    </footer>
  )
}
