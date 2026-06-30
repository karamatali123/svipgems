import { KEY_FEATURES } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function KeyFeaturesSection() {
  return (
    <section id="features" aria-labelledby="key-features-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="key-features-heading"
          title="Key Features of SVIP Gems"
          subtitle="Payments, games, bonuses, referrals, security, and app requirements at a glance."
        />
        <div className="space-y-8">
          {KEY_FEATURES.map((feature) => (
            <article key={feature.title}>
              <h3 className="text-lg font-bold text-white md:text-xl">{feature.title}</h3>
              <ArticleProse paragraphs={feature.paragraphs} className="mt-3" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
