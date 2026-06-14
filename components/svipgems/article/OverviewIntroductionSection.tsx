import {
  INTRODUCTION,
  OVERVIEW,
} from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function OverviewIntroductionSection() {
  return (
    <>
      <section aria-labelledby="overview-heading" className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading id="overview-heading" title="Overview" />
          <ArticleProse paragraphs={[OVERVIEW]} />
        </div>
      </section>
      <section
        aria-labelledby="introduction-heading"
        className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading id="introduction-heading" title="Introduction" />
          <ArticleProse paragraphs={INTRODUCTION} />
        </div>
      </section>
    </>
  );
}
