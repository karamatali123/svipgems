import { REFERRAL_INTRO, REFERRAL_STEPS } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function ReferralProgramSection() {
  return (
    <section id="bonuses" aria-labelledby="referral-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="referral-heading"
          title="SVIP Gems Referral Program"
          subtitle="How to earn commission by inviting friends to register and play."
        />
        <ArticleProse paragraphs={REFERRAL_INTRO} className="mb-6" />
        <ul className="max-w-3xl space-y-5 text-slate-300 md:text-base">
          {REFERRAL_STEPS.map((step) => (
            <li key={step.title}>
              <strong className="font-semibold text-white">{step.title}:</strong> {step.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
