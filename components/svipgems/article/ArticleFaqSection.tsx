import { ARTICLE_FAQS } from "@/lib/svipgems/article-content";
import { FaqAccordion } from "@/components/svipgems/FaqAccordion";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function ArticleFaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="faq-heading"
          title="SVIP Gems Frequently Asked Questions"
          subtitle="Answers to the most common questions about download, login, payments, bonuses, and support."
        />
        <FaqAccordion faqs={ARTICLE_FAQS} />
      </div>
    </section>
  );
}
