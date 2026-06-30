import { SAFE_LEGAL_INTRO, SAFE_LEGAL_POINTS } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function SafeLegalSection() {
  return (
    <section
      id="real-or-fake"
      aria-labelledby="safe-legal-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="safe-legal-heading"
          title="Is SVIP Gems Safe and Legal?"
          subtitle="Security practices, legal status in Pakistan, and what protections exist for players."
        />
        <ArticleProse paragraphs={[SAFE_LEGAL_INTRO]} className="mb-6" />
        <ul className="max-w-3xl list-disc space-y-2 pl-5 text-slate-300 md:text-base">
          {SAFE_LEGAL_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
