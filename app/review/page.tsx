import type { Metadata } from "next";
import { FaqAccordion } from "@/components/svipgems/FaqAccordion";
import { GuidePageLayout } from "@/components/svipgems/GuidePageLayout";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
import { REVIEW_PAGE } from "@/lib/svipgems/page-content";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";

export const metadata: Metadata = createGuidePageMetadata({
  title: REVIEW_PAGE.title,
  description: REVIEW_PAGE.description,
  path: "/review",
  keywords: [
    "SVIP Gems Review",
    "SVIP Gems Real or Fake",
    "SVIP Gems Pakistan review",
    "SVIP Gems user reviews",
    "SVIPGEMS review",
  ],
});

const schema = getGuidePageSchema({
  path: "/review",
  title: REVIEW_PAGE.title,
  description: REVIEW_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Review", path: "/review" },
  ],
  faqs: REVIEW_PAGE.faqs,
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-amber-400" : "text-slate-600"} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewPage() {
  return (
    <GuidePageLayout
      path="/review"
      title={REVIEW_PAGE.title}
      description={REVIEW_PAGE.description}
      breadcrumbLabel="Review"
      schema={schema}
    >
      {REVIEW_PAGE.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-slate-300">
          {paragraph}
        </p>
      ))}

      <SubSectionHeading id="real-or-fake" title="Is SVIP Gems Real or Fake?" className="mt-8" />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <h3 className="text-lg font-bold text-emerald-300">Pros</h3>
          <ul className="mt-4 space-y-3">
            {REVIEW_PAGE.realOrFake.pros.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-base">
                <span className="text-emerald-400" aria-hidden="true">+</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-bold text-red-300">Cons</h3>
          <ul className="mt-4 space-y-3">
            {REVIEW_PAGE.realOrFake.cons.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-base">
                <span className="text-red-400" aria-hidden="true">−</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <SubSectionHeading id="user-reviews" title="SVIP Gems User Reviews by Region" className="mt-10" />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {REVIEW_PAGE.reviews.map((review) => (
          <blockquote
            key={review.name}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
          >
            <StarRating rating={review.rating} />
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              &ldquo;{review.text}&rdquo;
            </p>
            <footer className="mt-4 border-t border-white/10 pt-4 text-sm">
              <cite className="not-italic">
                <span className="font-semibold text-white">{review.name}</span>
                <span className="block text-xs text-slate-500">{review.region}</span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>

      <SubSectionHeading id="pros-cons-summary" title="Pros and Cons Summary" className="mt-10" />
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-bold text-emerald-300">Advantages</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            {REVIEW_PAGE.pros.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-red-300">Disadvantages</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            {REVIEW_PAGE.cons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <SubSectionHeading id="verdict" title="Our Verdict" className="mt-10" />
      {REVIEW_PAGE.verdict.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 mt-4 text-base leading-relaxed text-slate-300">
          {paragraph}
        </p>
      ))}

      <section aria-labelledby="review-faq-heading" className="mt-14">
        <h2 id="review-faq-heading" className="text-2xl font-bold text-white">
          Review FAQ
        </h2>
        <div className="mt-6">
          <FaqAccordion faqs={REVIEW_PAGE.faqs} />
        </div>
      </section>
    </GuidePageLayout>
  );
}
