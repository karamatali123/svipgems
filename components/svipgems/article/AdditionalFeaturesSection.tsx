import { ADDITIONAL_FEATURES } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function AdditionalFeaturesSection() {
  return (
    <section
      aria-labelledby="additional-features-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="additional-features-heading"
          title="Additional SVIP Gems Features"
          subtitle="Extra tools and perks available inside the app beyond the core game lobby."
        />
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ADDITIONAL_FEATURES.map((feature) => (
            <li
              key={feature}
              className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-300 md:text-base"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
