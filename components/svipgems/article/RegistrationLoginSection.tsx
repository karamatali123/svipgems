import {
  LOGIN_STEPS,
  LOGIN_STEPS_INTRO,
  REGISTRATION_GUIDE_INTRO,
  REGISTRATION_LOGIN_INTRO,
  REGISTRATION_STEPS,
} from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function RegistrationLoginSection() {
  return (
    <section
      id="login"
      aria-labelledby="registration-login-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="registration-login-heading"
          title="svip gems Registration and Login Process"
        />
        <ArticleProse paragraphs={[REGISTRATION_LOGIN_INTRO]} className="mb-10" />

        <h3 className="text-xl font-bold text-amber-300 md:text-2xl">Registration Guide</h3>
        <ArticleProse paragraphs={REGISTRATION_GUIDE_INTRO} className="mb-4 mt-4" />
        <ul className="mb-10 max-w-3xl list-disc space-y-2 pl-5 text-slate-300 md:text-base">
          {REGISTRATION_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-amber-300 md:text-2xl">svip gems Login Steps</h3>
        <ArticleProse paragraphs={LOGIN_STEPS_INTRO} className="mb-4 mt-4" />
        <ul className="max-w-3xl list-disc space-y-2 pl-5 text-slate-300 md:text-base">
          {LOGIN_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
