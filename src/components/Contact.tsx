import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { CONTACT } from '../lib/data';

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad bg-brand-950 text-white">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ocean-300/25 bg-ocean-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ocean-300">
            Contact Information
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
            Let&rsquo;s build a fairer Bangladesh, together.
          </h2>
          <p className="mt-4 text-brand-100/80">
            Reach out to partner, volunteer or learn more about HP&rsquo;s work across 64
            districts.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Info cards */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Address', value: CONTACT.address },
                { icon: Phone, label: 'Phone', value: CONTACT.phone },
                { icon: Mail, label: 'Email', value: CONTACT.email },
                { icon: Clock, label: 'Office Hours', value: CONTACT.hours },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-ocean-500/20 text-ocean-300">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ocean-300">
                      {c.label}
                    </div>
                    <div className="mt-1 font-medium text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {CONTACT.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-brand-100 transition hover:bg-ocean-500 hover:text-white"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : s.label[0]}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                <Field label="Organization" name="org" placeholder="Optional" />
                <Field label="Subject" name="subject" placeholder="How can we help?" />
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-brand-100">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us a bit about your inquiry…"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-brand-100/40 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                />
              </div>
              <button
                type="submit"
                className="btn-primary mt-6 w-full bg-ocean-500 text-white hover:bg-ocean-600"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent — thank you!
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-brand-200/50">
                This is a static demo form — no data is stored or transmitted.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-brand-100">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-brand-100/40 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
      />
    </div>
  );
}
