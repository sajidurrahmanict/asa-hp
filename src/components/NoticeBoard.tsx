import { useState } from 'react';
import { Bell, ArrowUpRight, X } from 'lucide-react';
import { NOTICES, type Notice } from '../lib/data';

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function NoticeBoard() {
  const [selected, setSelected] = useState<Notice | null>(null);

  return (
    <section id="notice" className="section-pad bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">
            <Bell className="h-4 w-4" />
            Notice Board
          </span>
          <h2 className="heading-2 mt-4 text-balance">Latest notices</h2>
          <p className="mt-4 text-ink-600">
            Official announcements, governance updates and program notices from Hope for the
            Poorest.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-4 py-2 text-sm font-medium text-ocean-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ocean-500" />
            {NOTICES.length} recent notices
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol className="relative space-y-3 border-l-2 border-brand-100 pl-6">
            {NOTICES.map((n) => (
              <li
                key={n.title}
                className="group relative rounded-2xl border border-sand-200 bg-sand-50/60 transition hover:border-ocean-200 hover:bg-white hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setSelected(n)}
                  className="w-full rounded-2xl p-5 text-left"
                >
                  <span className="absolute -left-[31px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-ocean-500 shadow" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-ocean-100 px-2.5 py-0.5 text-xs font-bold text-ocean-700">
                      {n.tag}
                    </span>
                    <time className="text-xs font-medium text-ink-500">
                      {formatDate(n.date)}
                    </time>
                  </div>
                  <h3 className="mt-2 font-medium text-ink-800 group-hover:text-brand-800">
                    {n.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean-700 opacity-0 transition group-hover:opacity-100">
                    Read more <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-dialog-title"
            className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-sand-200 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-sand-200 bg-sand-50 px-6 py-5">
              <div>
                <span className="inline-flex rounded-full bg-ocean-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-700">
                  {selected.tag}
                </span>
                <p className="mt-3 text-sm text-ink-500">{formatDate(selected.date)}</p>
                <h3 id="notice-dialog-title" className="mt-4 text-3xl font-semibold text-ink-900">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-white text-ink-700 transition hover:bg-sand-100"
                aria-label="Close notice details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-5 px-6 py-6 sm:px-8">
              <p className="text-sm leading-relaxed text-ink-700">
                This notice is part of HP's official announcements. For full details and any related governance documents, please contact the HP office or visit the official website.
              </p>
              <div className="rounded-3xl border border-sand-200 bg-sand-50 p-6">
                <p className="text-sm font-semibold text-ink-900">Notice summary</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {selected.title} — this notice is currently available to stakeholders and interested visitors. Reach out to HP for follow-up information.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
