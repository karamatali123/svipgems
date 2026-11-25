import { CUSTOMER_SUPPORT } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function CustomerSupportSection() {
  return (
    <section
      aria-labelledby="customer-support-heading"
      className="py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="customer-support-heading"
          title="Friendly Customer Support Available 24/7 to Help You with Any Questions or Problems"
          subtitle="In-app chat, Telegram, and WhatsApp help for login, payments, and bonus issues in Pakistan."
        />
        <ArticleProse paragraphs={CUSTOMER_SUPPORT} />
      </div>
    </section>
  );
}
