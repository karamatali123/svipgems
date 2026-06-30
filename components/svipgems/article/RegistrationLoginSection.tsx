import {
  LOGIN_STEPS,
  LOGIN_STEPS_INTRO,
  REGISTRATION_GUIDE_INTRO,
  REGISTRATION_LOGIN_INTRO,
  REGISTRATION_STEPS,
} from "@/lib/svipgems/article-content";
import { GuideReadMoreLink } from "@/components/svipgems/GuideReadMoreLink";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
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
          title="SVIP Gems Registration and Login"
          subtitle="Create your account with OTP verification and access the app securely each time."
        />
        <ArticleProse paragraphs={[REGISTRATION_LOGIN_INTRO]} className="mb-10" />

        <SubSectionHeading id="registration-guide-heading" title="How to Register" />
        <ArticleProse paragraphs={REGISTRATION_GUIDE_INTRO} className="mb-4 mt-4" />
        <ol className="mb-10 max-w-3xl list-decimal space-y-2 pl-5 text-slate-300 md:text-base">
          {REGISTRATION_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <SubSectionHeading id="login-steps-heading" title="How to Login" />
        <ArticleProse paragraphs={LOGIN_STEPS_INTRO} className="mb-4 mt-4" />
        <ol className="max-w-3xl list-decimal space-y-2 pl-5 text-slate-300 md:text-base">
          {LOGIN_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <GuideReadMoreLink href="/login" label="SVIP Gems Login & Registration Guide" />
      </div>
    </section>
  );
}
