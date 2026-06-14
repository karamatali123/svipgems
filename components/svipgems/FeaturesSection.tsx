import { FEATURES } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-heading" className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="features-heading"
          title="SVIP Gems Features"
          subtitle="What SVIP Gems offers Pakistan players — from payments to promotions."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
            >
              <h3 className="text-lg font-bold text-amber-300">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {feature.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
