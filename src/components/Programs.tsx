import { useState } from 'react';
import {
  Droplets,
  HeartPulse,
  Waves,
  HandHeart,
  Building2,
  Globe2,
  CalendarRange,
  Landmark,
  Users,
  MapPin,
  ArrowUpRight,
  Activity,
  X,
} from 'lucide-react';
import { ONGOING_PROJECTS, IMPLEMENTED_PROJECTS, type Project } from '../lib/data';

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Menstrual Hygiene Management (MHM)': HandHeart,
  'WASH (Water & Sanitation)': Waves,
  'WASH (Water Credit)': Droplets,
  'WASH (Sanitation)': Building2,
  'WASH (Water), Climate Justice': Droplets,
  'Water, Sanitation and Hygiene (WASH)': Droplets,
  'Humanitarian Action': HeartPulse,
  Health: HeartPulse,
};

function iconFor(p: Project) {
  return CATEGORY_ICONS[p.category] ?? Globe2;
}

const ALL_PROJECTS = [
  ...ONGOING_PROJECTS.map((p) => ({ ...p, status: 'ongoing' as const })),
  ...IMPLEMENTED_PROJECTS.map((p) => ({ ...p, status: 'implemented' as const })),
];

const CATEGORIES = Array.from(new Set(ALL_PROJECTS.map((p) => p.category))).sort();

const SUMMARY = [
  { label: 'Total Projects', value: ALL_PROJECTS.length, icon: Activity },
  { label: 'Ongoing', value: ONGOING_PROJECTS.length, icon: Globe2 },
  { label: 'Districts Reached', value: '64', icon: MapPin },
  { label: 'Global Donors', value: new Set(ALL_PROJECTS.map((p) => p.donor)).size, icon: Landmark },
];

type ProjectWithStatus = Project & { status: 'ongoing' | 'implemented' };

function ProjectCard({ p, onOpen }: { p: ProjectWithStatus; onOpen: (project: ProjectWithStatus) => void }) {
  const Icon = iconFor(p);
  const isOngoing = p.status === 'ongoing';

  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition hover:shadow-lg hover:shadow-brand-900/8 text-left"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-brand-700 backdrop-blur">
            <Icon className="h-4 w-4" />
          </span>
        </div>
        <span
          className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold backdrop-blur ${
            isOngoing
              ? 'bg-brand-600/90 text-white'
              : 'bg-white/85 text-ink-600'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isOngoing ? 'bg-white animate-pulse' : 'bg-ink-400'
            }`}
          />
          {isOngoing ? 'Ongoing' : 'Completed'}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
          {p.category}
        </span>
        <h3 className="mt-1.5 font-serif text-base font-semibold leading-snug text-ink-900">
          {p.name}
        </h3>

        {/* Key facts — compact */}
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2.5">
            <Landmark className="h-3.5 w-3.5 flex-none text-ink-400" />
            <dt className="sr-only">Donor</dt>
            <dd className="truncate text-ink-700">{p.donor}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <CalendarRange className="h-3.5 w-3.5 flex-none text-ink-400" />
            <dt className="sr-only">Duration</dt>
            <dd className="text-ink-700">{p.duration}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="h-3.5 w-3.5 flex-none text-ink-400" />
            <dt className="sr-only">Areas</dt>
            <dd className="truncate text-ink-700">{p.areas}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <Users className="h-3.5 w-3.5 flex-none text-ink-400" />
            <dt className="sr-only">Beneficiary</dt>
            <dd className="truncate text-ink-700">{p.beneficiary}</dd>
          </div>
        </dl>

        {/* Activities — short */}
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-600">
          {p.activities}
        </p>

        {/* Footer row */}
        <div className="mt-5 flex items-center justify-between border-t border-sand-100 pt-4">
          <span className="text-xs font-medium text-ink-500">
            Budget: <span className="font-semibold text-ink-800">{p.budget}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition group-hover:gap-2">
            View details <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

export default function Programs() {
  const [tab, setTab] = useState<'all' | 'ongoing' | 'implemented'>('all');
  const [category, setCategory] = useState<string>('All');
  const [selected, setSelected] = useState<ProjectWithStatus | null>(null);

  const filtered = ALL_PROJECTS.filter((p) => {
    if (tab === 'ongoing' && p.status !== 'ongoing') return false;
    if (tab === 'implemented' && p.status !== 'implemented') return false;
    if (category !== 'All' && p.category !== category) return false;
    return true;
  });

  const tabs: { key: typeof tab; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: ALL_PROJECTS.length },
    { key: 'ongoing', label: 'Ongoing', count: ONGOING_PROJECTS.length },
    { key: 'implemented', label: 'Completed', count: IMPLEMENTED_PROJECTS.length },
  ];

  return (
    <section id="programs" className="section-pad bg-sand-50">
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-2xl">
          <span className="eyebrow">
            <Globe2 className="h-4 w-4" />
            Programs / Projects
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Delivering lasting impact across Bangladesh.
          </h2>
          <p className="mt-4 text-ink-600">
            HP partners with leading global donors to deliver WASH, healthcare and
            menstrual hygiene programs for the poorest communities.
          </p>
        </div>

        {/* Summary stats bar */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand-200 bg-sand-200 lg:grid-cols-4">
          {SUMMARY.map((s) => (
            <div key={s.label} className="flex items-center gap-4 bg-white px-5 py-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-serif text-2xl font-bold text-ink-900">{s.value}</div>
                <div className="text-xs font-medium text-ink-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="inline-flex rounded-full border border-sand-200 bg-white p-1 shadow-sm">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  tab === t.key
                    ? 'bg-brand-700 text-white shadow'
                    : 'text-ink-600 hover:text-brand-700'
                }`}
              >
                {t.label} ({t.count})
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', ...CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                  category === c
                    ? 'bg-ink-900 text-white shadow-sm'
                    : 'border border-sand-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                {c === 'All' ? 'All Categories' : c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-6 text-sm text-ink-500">
          Showing <span className="font-bold text-ink-800">{filtered.length}</span> project
          {filtered.length !== 1 ? 's' : ''}
        </div>

        {/* Grid */}
        <div key={`${tab}-${category}`} className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.name} p={p} onOpen={setSelected} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-sand-300 bg-white py-16 text-center">
            <p className="text-ink-500">No projects match this filter.</p>
            <button
              onClick={() => { setTab('all'); setCategory('All'); }}
              className="mt-4 text-sm font-semibold text-brand-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm">
            <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-sand-200 bg-white shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-sand-200 bg-sand-50 px-6 py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-700">
                    {selected.status === 'ongoing' ? 'Ongoing Project' : 'Completed Project'}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-ink-900">
                    {selected.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{selected.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-white text-ink-700 transition hover:bg-sand-100"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-6 px-6 py-6 lg:grid-cols-[1.35fr_0.85fr] lg:px-8">
                <div className="space-y-6">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="h-72 w-full rounded-[1.5rem] object-cover"
                  />
                  <div className="space-y-4 text-ink-700">
                    <p className="leading-relaxed">{selected.activities}</p>
                    {selected.objectives && (
                      <div className="rounded-3xl border border-sand-200 bg-sand-50 p-5">
                        <p className="font-semibold text-ink-900">Objectives</p>
                        <p className="mt-3 text-sm leading-relaxed text-ink-700">
                          {selected.objectives}
                        </p>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed text-ink-700">
                      For more details about this project, please contact HP or visit the Programs section.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 rounded-[1.5rem] border border-sand-200 bg-sand-50 p-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-ink-500">Donor</p>
                      <p className="mt-2 font-semibold text-ink-900">{selected.donor}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-ink-500">Duration</p>
                      <p className="mt-2 font-semibold text-ink-900">{selected.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-ink-500">Coverage</p>
                      <p className="mt-2 font-semibold text-ink-900">{selected.areas}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-ink-500">Beneficiaries</p>
                      <p className="mt-2 font-semibold text-ink-900">{selected.beneficiary}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-ink-500">Budget</p>
                      <p className="mt-2 font-semibold text-ink-900">{selected.budget}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
