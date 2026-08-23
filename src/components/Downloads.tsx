import { useState } from 'react';
import { Download, FileText, FileBadge, Filter } from 'lucide-react';
import { DOWNLOADS, type DownloadItem } from '../lib/data';

const TYPE_ICON: Record<DownloadItem['type'], React.ComponentType<{ className?: string }>> = {
  'Annual Report': FileText,
  Circular: FileBadge,
  'ICBC / BCC Document': FileText,
};

const TYPES: (DownloadItem['type'] | 'All')[] = [
  'All',
  'Annual Report',
  'Circular',
  'ICBC / BCC Document',
];

export default function Downloads() {
  const [filter, setFilter] = useState<(typeof TYPES)[number]>('All');
  const list =
    filter === 'All' ? DOWNLOADS : DOWNLOADS.filter((d) => d.type === filter);

  return (
    <section id="downloads" className="section-pad bg-white">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <Download className="h-4 w-4" />
              Download Section
            </span>
            <h2 className="heading-2 mt-4 text-balance">Documents &amp; publications</h2>
            <p className="mt-4 text-ink-600">
              Annual reports, circulars and ICBC / BCC documents — available for public
              reference and download.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="hidden items-center gap-1.5 text-sm text-ink-500 sm:flex">
              <Filter className="h-4 w-4" /> Filter:
            </span>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  filter === t
                    ? 'bg-brand-800 text-white shadow'
                    : 'border border-sand-200 bg-white text-ink-600 hover:border-ocean-300 hover:text-ocean-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => {
            const Icon = TYPE_ICON[d.type];
            return (
              <div
                key={d.title + i}
                className="group flex items-center gap-4 rounded-2xl border border-sand-200 bg-sand-50/50 p-5 transition hover:border-ocean-200 hover:bg-white hover:shadow-sm"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-ocean-50 text-ocean-600 transition group-hover:bg-ocean-100">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium text-ink-800">{d.title}</div>
                  <div className="mt-0.5 text-xs text-ink-500">
                    {d.type} · {d.year}
                  </div>
                </div>
                <a
                  href="#downloads"
                  aria-label={`Download ${d.title}`}
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-ocean-600 shadow-sm transition hover:bg-ocean-500 hover:text-white"
                >
                  <Download className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-ink-500">
            No documents in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
