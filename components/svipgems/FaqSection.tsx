import { FaqAccordion } from "@/components/svipgems/FaqAccordion";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="faq-heading"
          title="SVIP Gems FAQ"
          subtitle="Common questions about SVIP Gems download, login, Easypaisa withdrawal, JazzCash, and bonuses."
        />
        <FaqAccordion />
      </div>
    </section>
  );
}
