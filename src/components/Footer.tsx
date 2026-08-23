import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '../lib/data';

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-brand-100/80">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-4">
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-white p-1.5 shadow-lg">
                <img
                  src="/asa-logo-vertical copy.png"
                  alt="ASA — Hope for the Poorest"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <div className="font-serif text-lg font-semibold text-white">
                  Hope for the Poorest
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-ocean-300">
                  HP · Bangladesh
                </div>
              </div>
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-100/70">
              A nationwide NGO assisting the poor, ultra-poor and disadvantaged across all
              64 districts of Bangladesh — through WASH, healthcare, menstrual hygiene and
              sustainable community development.
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-300">
              Explore
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-300">
              Reach us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-ocean-400" />
                {CONTACT.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-none text-ocean-400" />
                {CONTACT.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-none text-ocean-400" />
                {CONTACT.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Hope for the Poorest (HP). All rights reserved.</p>
          <p className="text-brand-200/50">
            Founded by Md. Shafiqual Haque Choudhury, 2004.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 transition hover:bg-white/10"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
