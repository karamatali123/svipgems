import { WHAT_IS } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function WhatIsGameSection() {
  return (
    <section aria-labelledby="what-is-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="what-is-heading" title="What Is SVIP Gems?" subtitle="A clear explanation of the app, how it works, and who it is designed for in Pakistan." />
        <ArticleProse paragraphs={WHAT_IS} />
      </div>
    </section>
  );
}
