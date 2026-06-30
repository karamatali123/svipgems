import { WHY_CHOOSE } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function WhyChooseSection() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="why-choose-heading"
          title="Why Choose SVIP Gems in Pakistan?"
          subtitle="Reasons the app is popular among Pakistan Android users — and what to watch out for."
        />
        <ArticleProse paragraphs={WHY_CHOOSE} />
      </div>
    </section>
  );
}
