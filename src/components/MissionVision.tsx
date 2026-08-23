import { Target, Eye, Sparkles } from 'lucide-react';
import { MISSION, VISION } from '../lib/data';

export default function MissionVision() {
  return (
    <section id="mission" className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-grid-light opacity-25" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-ocean-500/10 blur-3xl" />

      <div className="container-x relative section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ocean-300/25 bg-ocean-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ocean-300">
            <Sparkles className="h-4 w-4" />
            Mission &amp; Vision
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Guided by community, rooted in justice.
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-ocean-400/50" />
            <span className="text-sm text-brand-200/70">Our purpose &amp; direction</span>
            <span className="h-px w-10 bg-ocean-400/50" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-300">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 text-lg leading-relaxed text-brand-50/85">{MISSION}</p>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-brand-400/8 blur-2xl transition group-hover:bg-brand-400/15" />
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl border border-ocean-300/15 bg-ocean-500/5 p-8 backdrop-blur transition hover:bg-ocean-500/8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-500/20 text-ocean-300">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-lg leading-relaxed text-brand-50/85">{VISION}</p>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-ocean-400/8 blur-2xl transition group-hover:bg-ocean-400/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
