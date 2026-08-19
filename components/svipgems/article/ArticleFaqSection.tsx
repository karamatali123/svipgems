import { ARTICLE_FAQS } from "@/lib/svipgems/article-content";
import { FaqDetails } from "@/components/svipgems/FaqDetails";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

/** Top 10 FAQs on homepage */
export const HOMEPAGE_FAQS = ARTICLE_FAQS.slice(0, 10);

export function ArticleFaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="faq-heading"
          title="SVIP Gems Frequently Asked Questions"
          subtitle="Answers to the most common questions about download, login, payments, bonuses, and support."
        />
        <FaqDetails faqs={HOMEPAGE_FAQS} />
      </div>
    </section>
  );
}
