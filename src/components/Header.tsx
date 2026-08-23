import { useEffect, useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../lib/data';

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-white p-1 shadow-md">
            <img
              src="/asa-logo-vertical copy.png"
              alt="ASA — Hope for the Poorest"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className={`font-serif text-[1.05rem] font-semibold leading-snug transition-colors ${
              scrolled ? 'text-brand-950' : 'text-white'
            }`}>
              Hope for the Poorest
            </span>
            <span className={`text-[10.5px] font-bold uppercase tracking-[0.22em] transition-colors ${
              scrolled ? 'text-brand-600' : 'text-ocean-300'
            }`}>
              HP · Bangladesh
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                scrolled
                  ? 'text-ink-700 hover:bg-brand-50 hover:text-brand-800'
                  : 'text-white/90 hover:bg-white/15 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-ocean-900/20 transition hover:bg-ocean-600"
          >
            <Heart className="h-4 w-4" />
            Donate
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            scrolled ? 'text-brand-900' : 'text-white'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-white/97 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[520px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-800"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ocean-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-ocean-900/20 transition hover:bg-ocean-600"
          >
            <Heart className="h-4 w-4" />
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}
