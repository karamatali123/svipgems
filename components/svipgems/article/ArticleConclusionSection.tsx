import { CONCLUSION } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function ArticleConclusionSection() {
  return (
    <section
      id="conclusion"
      aria-labelledby="conclusion-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="conclusion-heading" title="Conclusion" />
        <ArticleProse paragraphs={CONCLUSION} />
      </div>
    </section>
  );
}
