import type { Metadata } from "next";
import { FaqAccordion } from "@/components/svipgems/FaqAccordion";
import { GuidePageLayout } from "@/components/svipgems/GuidePageLayout";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
import { LOGIN_PAGE } from "@/lib/svipgems/page-content";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";

export const metadata: Metadata = createGuidePageMetadata({
  title: LOGIN_PAGE.title,
  description: LOGIN_PAGE.description,
  path: "/login",
  keywords: [
    "SVIP Gems Login",
    "SVIP Gems Registration",
    "SVIP Gems OTP",
    "SVIP Gems signup Pakistan",
    "SVIPGEMS login",
  ],
});

const schema = getGuidePageSchema({
  path: "/login",
  title: LOGIN_PAGE.title,
  description: LOGIN_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Login & Registration", path: "/login" },
  ],
  faqs: LOGIN_PAGE.faqs,
  howToSteps: LOGIN_PAGE.registrationSteps.map((text, i) => ({
    name: `Step ${i + 1}`,
    text,
  })),
  howToName: "How to Register on SVIP Gems",
});

export default function LoginPage() {
  return (
    <GuidePageLayout
      path="/login"
      title={LOGIN_PAGE.title}
      description={LOGIN_PAGE.description}
      breadcrumbLabel="Login & Registration"
      schema={schema}
    >
      {LOGIN_PAGE.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-slate-300">
          {paragraph}
        </p>
      ))}

      <SubSectionHeading id="registration-steps" title="How to Register" className="mt-8" />
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-5 text-slate-300">
        {LOGIN_PAGE.registrationSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <SubSectionHeading id="login-steps" title="How to Login" className="mt-10" />
      {LOGIN_PAGE.loginIntro.map((paragraph) => (
        <p key={paragraph} className="mb-3 mt-4 text-base leading-relaxed text-slate-300">
          {paragraph}
        </p>
      ))}
      <ol className="mt-2 max-w-3xl list-decimal space-y-3 pl-5 text-slate-300">
        {LOGIN_PAGE.loginSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <section aria-labelledby="login-faq-heading" className="mt-14">
        <h2 id="login-faq-heading" className="text-2xl font-bold text-white">
          Login & Registration FAQ
        </h2>
        <div className="mt-6">
          <FaqAccordion faqs={LOGIN_PAGE.faqs} />
        </div>
      </section>
    </GuidePageLayout>
  );
}
