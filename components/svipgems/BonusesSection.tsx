import { BONUSES } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function BonusesSection() {
  return (
    <section
      id="bonuses"
      aria-labelledby="bonuses-heading"
      className="py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="bonuses-heading"
          title="SVIP Gems Bonus System 2026"
          subtitle="Welcome offers, referral commissions, daily rewards, and VIP tiers."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {BONUSES.map((bonus) => (
            <article
              key={bonus.title}
              className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/5 to-slate-900/60 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-white">{bonus.title}</h3>
                <span className="shrink-0 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300">
                  {bonus.range}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {bonus.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
