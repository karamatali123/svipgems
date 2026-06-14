import { WHAT_IS_CONTENT } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function WhatIsSection() {
  return (
    <section aria-labelledby="what-is-heading" className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="what-is-heading"
          title="What Is SVIP Gems Game?"
          subtitle="An informational overview of SVIP Gems for new users in Pakistan."
        />
        <div className="prose prose-invert max-w-none space-y-5 text-base leading-relaxed text-slate-300 md:text-lg md:leading-8">
          {WHAT_IS_CONTENT.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
