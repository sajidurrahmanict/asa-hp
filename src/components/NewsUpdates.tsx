import { useState } from 'react';
import { Newspaper, ArrowUpRight, X } from 'lucide-react';
import { NEWS, type NewsItem } from '../lib/data';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

const TAG_TONES: Record<string, string> = {
  Partnership: 'bg-ocean-100 text-ocean-700',
  Milestone: 'bg-brand-100 text-brand-700',
  MHM: 'bg-sand-100 text-sand-700',
  Event: 'bg-ink-900/10 text-ink-700',
};

export default function NewsUpdates() {
  const [selected, setSelected] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="section-pad bg-sand-50">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <Newspaper className="h-4 w-4" />
              News &amp; Updates
            </span>
            <h2 className="heading-2 mt-4 text-balance">Stories from the field</h2>
            <p className="mt-4 text-ink-600">
              Updates on partnerships, milestones and community programs across HP&rsquo;s
              64-district footprint.
            </p>
          </div>
          <a href="#notice" className="btn-ghost">
            All updates
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {NEWS.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(item)}
              className="group flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
                <span
                  className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${
                    TAG_TONES[item.tag] ?? 'bg-white/15 text-white'
                  }`}
                >
                  {item.tag}
                </span>
                <div className="absolute bottom-4 left-5 flex items-center gap-2 text-xs font-medium text-white/90">
                  <time>{formatDate(item.date)}</time>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold leading-snug text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                  {item.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ocean-700">
                  Read story <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-sand-200 bg-white shadow-2xl">
            <div className="relative overflow-hidden rounded-t-[2rem]">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-72 w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-sm transition hover:bg-white"
                aria-label="Close story details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-6 px-6 py-6 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sand-700">
                    {selected.tag}
                  </span>
                  <p className="mt-3 text-sm text-ink-500">{formatDate(selected.date)}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                  News & Updates
                </span>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-semibold text-ink-900">
                  {selected.title}
                </h3>
              </div>
              <div className="space-y-4 text-ink-700">
                <p className="text-sm leading-relaxed">{selected.excerpt}</p>
                <p className="text-sm leading-relaxed text-ink-600">
                  For more information, contact our team or explore HP&rsquo;s ongoing programs and partnership stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
