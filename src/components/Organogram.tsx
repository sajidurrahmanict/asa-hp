import { Network, ArrowDown } from 'lucide-react';

// Simple static organogram hierarchy derived from the brief.
const LAYERS = [
  {
    title: 'General Body (GB)',
    sub: '11 Members · Chairperson: Mrs. Rabeya Akhter',
    tone: 'from-brand-700 to-brand-900',
  },
  {
    title: 'Executive Body',
    sub: '8 Members · Chaired by Mrs. Rabeya Akhter',
    tone: 'from-brand-600 to-brand-800',
  },
  {
    title: 'Executive Director — HP',
    sub: 'Eftekher Ahmed Khan',
    tone: 'from-ocean-500 to-ocean-700',
  },
  {
    title: 'Finance & Admin · Project Coordinators · Training Officers',
    sub: 'Md. Nahidul Islam · Md. Mahfusul Alam · H.M. Solaiman Kabir · Md. Wahidur Rahman',
    tone: 'from-brand-600 to-brand-800',
  },
  {
    title: 'Field Operations — 64 Districts',
    sub: 'Community people · WaSH entrepreneurs · Microfinance partners',
    tone: 'from-ocean-500 to-ocean-700',
  },
];

export default function Organogram() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <span className="eyebrow">
          <Network className="h-4 w-4" />
          Organogram
        </span>
        <h2 className="heading-2 mt-4 text-balance">Organizational structure</h2>
        <p className="mt-3 max-w-3xl text-ink-600">
          A clear governance and operational hierarchy connects HP&rsquo;s community to its
          nationwide field operations.
        </p>

        <div className="mt-12 flex flex-col items-center gap-3">
          {LAYERS.map((layer, i) => (
            <div key={layer.title} className="flex w-full max-w-3xl flex-col items-center">
              <div
                className={`w-full rounded-2xl bg-gradient-to-br ${layer.tone} p-5 text-center text-white shadow-lg transition hover:-translate-y-0.5`}
              >
                <div className="font-serif text-lg font-semibold">{layer.title}</div>
                <div className="mt-1 text-sm text-white/85">{layer.sub}</div>
              </div>
              {i < LAYERS.length - 1 && (
                <ArrowDown className="my-1 h-5 w-5 text-sand-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
