import { HeartHandshake, Target, Globe2, CheckCircle2 } from 'lucide-react';
import { FOCUS_AREAS } from '../lib/data';

export default function AboutBrief() {
  return (
    <section id="about" className="section-pad bg-sand-50">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <HeartHandshake className="h-4 w-4" />
            About Us · HP in Brief
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            A nationwide NGO assisting the poor, ultra-poor and disadvantaged.
          </h2>
          <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-ink-700">
            <p>
              Hope for the Poorest (HP) is a nationwide known NGO assisting the poor,
              ultra-poor and the disadvantaged-tagged persons in the society. It has taken a
              new initiative and, with that in view, set up to render facilities that are
              considered imperative needs of the ultra-poor segment of the society.
            </p>
            <p>
              HP considers offering primary healthcare service, water supply, sanitation and
              hygiene facilities as the most crucial need for ensuring development of the
              poor. Long experience of ASA reveals that no positive development is possible
              without improvement of public health. So HP has been implementing WASH services
              in 64 districts of Bangladesh.
            </p>
            <p>
              HP is planning to intervene in more areas such as advocacy, human rights, good
              governance, gender equity, waste management, hygiene promotion, food security,
              livelihood, awareness and so on in future. Although a good number of
              organizations are working in these fields, still a large number of poor people
              are suffering from natural as well as human-made disasters.
            </p>
          </div>

          {/* Focus areas */}
          <div className="mt-10">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
              <Target className="h-4 w-4" />
              Our Focus Areas
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {FOCUS_AREAS.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-800 transition hover:border-ocean-300 hover:bg-ocean-50"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-ocean-500" />
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — side card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-xl shadow-brand-900/10">
            <div className="relative h-44 bg-gradient-to-br from-brand-800 to-brand-950 p-6">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <Globe2 className="h-10 w-10 text-white/90" />
              <div className="relative mt-3">
                <div className="font-serif text-3xl font-semibold text-white">64</div>
                <div className="text-sm text-brand-50">Districts of Bangladesh</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-brand-950">
                Working Areas
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                HP is now working in all 64 districts of Bangladesh — from coastal
                Satkhira and Barguna to the haor basins of Sunamganj, the hills of the
                Chittagong Hill Tracts and the northern charlands of Kurigram.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ['WASH', 'Core'],
                  ['Health', 'Care'],
                  ['Climate', 'Resilient'],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-xl bg-sand-50 p-3">
                    <div className="text-sm font-semibold text-brand-800">{a}</div>
                    <div className="text-xs text-ink-500">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
