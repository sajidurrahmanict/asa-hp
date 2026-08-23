import { Users, ShieldCheck, UserCog } from 'lucide-react';
import {
  EXECUTIVE_BODY,
  GENERAL_BOARD,
  SENIOR_PERSONNEL,
} from '../lib/data';

function MemberTable({
  rows,
  accent,
}: {
  rows: { name: string; designation: string }[];
  accent: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sand-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-sand-50 text-xs uppercase tracking-wider text-ink-500">
            <th className="w-12 px-4 py-3 font-bold">#</th>
            <th className="px-4 py-3 font-bold">Name</th>
            <th className="px-4 py-3 font-bold">Designation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sand-100">
          {rows.map((r, i) => (
            <tr key={r.name + i} className="transition hover:bg-brand-50/40">
              <td className={`px-4 py-3 font-bold ${accent}`}>{i + 1}</td>
              <td className="px-4 py-3 font-medium text-ink-800">{r.name}</td>
              <td className="px-4 py-3 text-ink-600">{r.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
            <MemberTable rows={EXECUTIVE_BODY} accent="text-brand-600" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-ocean-600" />
              <h3 className="font-serif text-xl font-semibold text-brand-950">
                B. General Board (GB)
              </h3>
            </div>
            <MemberTable rows={GENERAL_BOARD} accent="text-ocean-600" />
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SENIOR_PERSONNEL.map((p, i) => (
              <div
                key={p.name + i}
                className="card flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 font-serif text-lg font-semibold text-brand-700">
                  {p.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                </span>
                <div>
                  <div className="font-medium text-ink-800">{p.name}</div>
                  <div className="text-sm text-ink-500">{p.designation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
