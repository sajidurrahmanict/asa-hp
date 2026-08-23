import { Quote, Calendar, Building2, Award, Briefcase, Sparkles } from 'lucide-react';
import { FOUNDER } from '../lib/data';

const MILESTONES = [
  { year: '1949', label: 'Born in Naropati, Habiganj', icon: Calendar },
  { year: '1978', label: 'Founded ASA', icon: Building2 },
  { year: '2004', label: 'Founded Hope for the Poorest', icon: Sparkles },
  { year: '2006–07', label: 'Advisor, Caretaker Government', icon: Briefcase },
];

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-white">
      {/* Subtle backdrop */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-ocean-50 blur-3xl" />

      <div className="container-x relative section-pad">

        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <Award className="h-4 w-4" />
            About the Founder of HP
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            Md. Shafiqual Haque Choudhury
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-ocean-300" />
            <span className="text-sm font-medium tracking-wide text-ink-600">
              1st January 1949 — 12th February 2021
            </span>
            <span className="h-px w-10 bg-ocean-300" />
          </div>
          <p className="mt-4 text-base text-ink-700">
            Founder &amp; First Chairperson, Hope for the Poorest (HP)
          </p>
        </div>

        {/* Main content grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Gold frame accent */}
              <div className="absolute -inset-2 rounded-[2rem] border border-ocean-200" />
              <div className="absolute -inset-4 rounded-[2.25rem] border border-ocean-100" />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-brand-900/20">
                <img
                  src="/images/1706844111_1.jpg"
                  alt="Md. Shafiqual Haque Choudhury, Founder of Hope for the Poorest"
                  className="aspect-[4/5] w-full object-cover"
                />
                {/* Subtle gradient at bottom for caption legibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900/85 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-serif text-lg font-semibold text-white">
                    Md. Shafiqual Haque Choudhury
                  </div>
                  <div className="mt-1 text-sm text-ocean-200">
                    Founder · Hope for the Poorest
                  </div>
                </div>
              </div>

              {/* Floating gold badge */}
              <div className="absolute -right-4 top-8 flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 text-white shadow-xl shadow-ocean-600/30">
                <span className="font-serif text-xl font-bold leading-none">1949</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider">2021</span>
              </div>
            </div>

            {/* Quote below photo */}
            <div className="relative mt-10 rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
              <Quote className="h-7 w-7 text-brand-300" />
              <p className="mt-3 font-serif text-lg italic leading-relaxed text-ink-800">
                &ldquo;To provide a lasting contribution to poverty alleviation and inclusive
                development — addressing the needs of the most marginalized who are often left
                out of mainstream development efforts.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-700">
                — Vision of the Founder
              </p>
            </div>
          </div>

          {/* Biography + milestones */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-[1.05rem] leading-[1.75] text-ink-700">
              {FOUNDER.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? 'text-lg font-medium text-ink-900' : ''}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Milestones */}
            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="gold-bar" />
                <h3 className="font-serif text-lg font-semibold text-ink-900">
                  A Life of Service
                </h3>
              </div>

              <div className="mt-6 space-y-px overflow-hidden rounded-2xl border border-sand-200 bg-sand-200">
                {MILESTONES.map((m) => (
                  <div
                    key={m.year}
                    className="group flex items-center gap-5 bg-white p-5 transition hover:bg-brand-50/40"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                      <m.icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-1 items-center justify-between gap-4">
                      <span className="font-medium text-ink-800">{m.label}</span>
                      <span className="font-serif text-xl font-bold text-ocean-600">
                        {m.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legacy note */}
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-ocean-200 bg-gradient-to-br from-ocean-50 to-white p-6">
              <Award className="mt-0.5 h-6 w-6 flex-none text-ocean-600" />
              <div>
                <h4 className="font-serif text-base font-semibold text-ink-900">
                  A Pioneering Legacy in Microfinance &amp; Development
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  His simple, cost-effective and sustainable model for microfinance empowered
                  millions of poor families across Bangladesh. ASA grew into one of the largest
                  and most efficient microfinance institutions in the world — and HP continues
                  that mission through WASH, healthcare and community development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
