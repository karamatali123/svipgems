import { GUIDE_OVERVIEW } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function OverviewIntroductionSection() {
  return (
    <section aria-labelledby="guide-overview-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="guide-overview-heading"
          title="SVIP Gems Guide Overview"
          subtitle="Everything you need to know about downloading, using, and withdrawing from SVIP Gems in Pakistan."
        />
        <ArticleProse paragraphs={GUIDE_OVERVIEW} />
      </div>
    </section>
  );
}
