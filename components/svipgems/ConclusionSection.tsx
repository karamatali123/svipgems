import { CONCLUSION } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function ConclusionSection() {
  return (
    <section
      id="conclusion"
      aria-labelledby="conclusion-heading"
      className="py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="conclusion-heading"
          title="Final Thoughts on SVIP Gems"
          subtitle="A quick summary before you download, register, or make your first deposit."
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
          {CONCLUSION.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
