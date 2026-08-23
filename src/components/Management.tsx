import { Users, ShieldCheck, UserCog, Briefcase } from 'lucide-react';
import {
  EXECUTIVE_BODY,
  GENERAL_BOARD,
  SENIOR_PERSONNEL,
} from '../lib/data';

function MemberCards({
  rows,
  accent,
  cols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
}: {
  rows: { name: string; designation: string }[];
  accent: string;
  cols?: string;
}) {
  return (
    <div className={`grid gap-4 ${cols}`}>
      {rows.map((r, i) => (
        <div
          key={r.name + i}
          className="flex items-start gap-4 rounded-3xl border border-sand-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-50 font-serif text-lg font-semibold text-brand-700 ${accent}`}>
            {i + 1}
          </span>
          <div className="min-w-0">
            <div className="font-medium text-ink-800 break-words">{r.name}</div>
            <div className="mt-2 flex items-center gap-2 text-sm text-ink-500 break-words">
              <Briefcase className="h-4 w-4 text-ocean-500" />
              <span>{r.designation}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Management() {
  return (
    <section className="section-pad bg-sand-50">
      <div className="container-x">
        <span className="eyebrow">
          <Users className="h-4 w-4" />
          Management
        </span>
        <h2 className="heading-2 mt-4 text-balance">
          Executive Body & General Body
        </h2>
        <p className="mt-3 max-w-3xl text-ink-600">
          HP is governed by an Executive Body and a broader General Board, supported by a
          dedicated senior management team that oversees day-to-day operations across the
          country.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-600" />
              <h3 className="font-serif text-xl font-semibold text-brand-950">
                A. Executive Body
              </h3>
            </div>
            <MemberCards rows={EXECUTIVE_BODY} accent="text-brand-600" cols="grid-cols-1 sm:grid-cols-2" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-ocean-600" />
              <h3 className="font-serif text-xl font-semibold text-brand-950">
                B. General Board (GB)
              </h3>
            </div>
            <MemberCards rows={GENERAL_BOARD} accent="text-ocean-600" cols="grid-cols-1 sm:grid-cols-2" />
          </div>
        </div>

        {/* Senior personnel */}
        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <UserCog className="h-5 w-5 text-sand-600" />
            <h3 className="font-serif text-xl font-semibold text-brand-950">
              Senior Personnel
            </h3>
          </div>
          <MemberCards
            rows={SENIOR_PERSONNEL}
            accent="text-sand-700"
            cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </div>
    </section>
  );
}
