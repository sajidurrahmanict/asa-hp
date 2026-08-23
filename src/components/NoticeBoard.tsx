import { Bell, ArrowUpRight } from 'lucide-react';
import { NOTICES } from '../lib/data';

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function NoticeBoard() {
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
            {NOTICES.map((n, i) => (
              <li
                key={i}
                className="group relative rounded-2xl border border-sand-200 bg-sand-50/60 p-5 transition hover:border-ocean-200 hover:bg-white hover:shadow-sm"
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
                <a
                  href="#news"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean-700 opacity-0 transition group-hover:opacity-100"
                >
                  Read more <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
