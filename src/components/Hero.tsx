import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Users, Droplets, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, STATS } from '../lib/data';

const AUTOPLAY_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);
  const count = HERO_SLIDES.length;

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => { if (timer.current) window.clearTimeout(timer.current); };
  }, [index, paused, count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-brand-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={!active}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                active ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/75 to-ink-900/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-transparent to-brand-950/50" />
            <div className="absolute inset-0 bg-grid-light opacity-30" />
          </div>
        );
      })}

      {/* Gold glow */}
      <div className="pointer-events-none absolute -right-24 -top-16 h-[480px] w-[480px] rounded-full bg-ocean-500/15 blur-3xl" />

      {/* Content */}
      <div className="container-x relative flex h-full items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ease-out ${
                  i === index ? 'block translate-y-0 opacity-100' : 'hidden translate-y-6 opacity-0'
                }`}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-ocean-300/30 bg-ocean-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ocean-300 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-ocean-400 animate-pulse" />
                  {slide.eyebrow}
                </span>

                <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl lg:text-[3.4rem]">
                  {slide.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-50/85">
                  {slide.description}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  {slide.cta.map((c, ci) =>
                    ci === 0 ? (
                      <a key={c.label} href={c.href}
                        className="inline-flex items-center gap-2 rounded-full bg-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-ocean-700/30 transition hover:bg-ocean-600">
                        {c.label} <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <a key={c.label} href={c.href}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                        {c.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {[
                { icon: Droplets, label: 'WASH Services' },
                { icon: Activity, label: 'Primary Healthcare' },
                { icon: Users,    label: 'Menstrual Hygiene' },
                { icon: MapPin,   label: '64 Districts' },
              ].map((c) => (
                <span key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3.5 py-1.5 text-brand-50 backdrop-blur">
                  <c.icon className="h-4 w-4 text-ocean-300" />
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Stat card */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative rounded-3xl border border-white/10 bg-white/8 p-8 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ocean-300">
                HP at a glance
              </p>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-ink-900/60 p-6">
                    <div className="font-serif text-3xl font-semibold text-white">
                      {s.value}<span className="text-ocean-400">{s.suffix}</span>
                    </div>
                    <div className="mt-1 text-sm text-brand-100/70">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-ocean-500/8 p-4 text-sm text-brand-50">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ocean-500/20">
                  <MapPin className="h-3.5 w-3.5 text-ocean-300" />
                </span>
                <p>
                  From the Sundarbans to the haors of Sylhet — HP is now working in all
                  64 districts of Bangladesh, with future plans in advocacy, human rights,
                  gender equity, food security and livelihood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 p-3 text-white backdrop-blur transition hover:bg-ocean-500 hover:border-ocean-400 sm:flex">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 p-3 text-white backdrop-blur transition hover:bg-ocean-500 hover:border-ocean-400 sm:flex">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Progress + counter */}
      <div className="absolute bottom-0 left-0 z-20 w-full">
        <div className="container-x flex items-center justify-between gap-6 pb-6">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}
                className="relative h-1.5 w-12 overflow-hidden rounded-full bg-white/20">
                <span
                  className={`absolute left-0 top-0 h-full rounded-full bg-ocean-400 transition-all ${
                    i === index ? 'w-full' : i < index ? 'w-full opacity-40' : 'w-0'
                  }`}
                  style={i === index && !paused
                    ? { transition: `width ${AUTOPLAY_MS}ms linear` }
                    : { transition: 'width 300ms ease' }}
                />
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-2 text-xs font-medium text-white/60 sm:flex">
            <span className="font-serif text-base font-semibold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-px w-8 bg-white/25" />
            <span>{String(count).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="h-0.5 w-full bg-white/10">
          <div key={index + (paused ? 'p' : 'r')} className="h-full bg-ocean-400"
            style={paused
              ? { width: `${((index + 1) / count) * 100}%` }
              : { animation: `hero-progress ${AUTOPLAY_MS}ms linear forwards` }} />
        </div>
      </div>

      <style>{`
        @keyframes hero-progress {
          from { width: ${(index / count) * 100}%; }
          to   { width: ${((index + 1) / count) * 100}%; }
        }
      `}</style>
    </section>
  );
}
