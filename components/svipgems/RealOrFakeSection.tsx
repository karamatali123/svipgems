import { REAL_OR_FAKE } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function RealOrFakeSection() {
  return (
    <section
      id="real-or-fake"
      aria-labelledby="real-or-fake-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="real-or-fake-heading"
          title="SVIP Gems Real or Fake? — Pakistan Review"
          subtitle="Balanced analysis of SVIP Gems based on typical user experiences in 2026."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <h3 className="text-lg font-bold text-emerald-300">Pros</h3>
            <ul className="mt-4 space-y-3">
              {REAL_OR_FAKE.pros.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-base">
                  <span className="text-emerald-400" aria-hidden="true">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <h3 className="text-lg font-bold text-red-300">Cons</h3>
            <ul className="mt-4 space-y-3">
              {REAL_OR_FAKE.cons.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-base">
                  <span className="text-red-400" aria-hidden="true">
                    −
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <aside
          role="note"
          className="mt-8 rounded-xl border border-white/10 bg-slate-950/60 p-6 text-sm leading-relaxed text-slate-400 md:text-base"
        >
          <strong className="font-semibold text-white">Note:</strong> Real-money app, not
          regulated. No guaranteed income. Only use money you can afford to lose.
        </aside>
      </div>
    </section>
  );
}
