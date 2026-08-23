import { Newspaper, ArrowUpRight } from 'lucide-react';
import { NEWS } from '../lib/data';

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
          <a href="#contact" className="btn-ghost">
            All updates
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {NEWS.map((item, i) => (
            <article
              key={i}
              className="group flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
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
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ocean-700 link-underline"
                >
                  Read story <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
