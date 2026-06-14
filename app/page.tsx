import { AdditionalFeaturesSection } from "@/components/svipgems/article/AdditionalFeaturesSection";
import { ArticleConclusionSection } from "@/components/svipgems/article/ArticleConclusionSection";
import { ArticleFaqSection } from "@/components/svipgems/article/ArticleFaqSection";
import { DepositWithdrawArticleSection } from "@/components/svipgems/article/DepositWithdrawArticleSection";
import { DownloadInstallSection } from "@/components/svipgems/article/DownloadInstallSection";
import { KeyFeaturesSection } from "@/components/svipgems/article/KeyFeaturesSection";
import { OverviewIntroductionSection } from "@/components/svipgems/article/OverviewIntroductionSection";
import { PopularGamesArticleSection } from "@/components/svipgems/article/PopularGamesArticleSection";
import { ProsConsSection } from "@/components/svipgems/article/ProsConsSection";
import { ReferralProgramSection } from "@/components/svipgems/article/ReferralProgramSection";
import { RegistrationLoginSection } from "@/components/svipgems/article/RegistrationLoginSection";
import { SafeLegalSection } from "@/components/svipgems/article/SafeLegalSection";
import { WhatIsGameSection } from "@/components/svipgems/article/WhatIsGameSection";
import { WhyChooseSection } from "@/components/svipgems/article/WhyChooseSection";
import { CTAButtons } from "@/components/svipgems/CTAButtons";
import { DisclaimerSection } from "@/components/svipgems/DisclaimerSection";
import { HeroSection } from "@/components/svipgems/HeroSection";
import { JsonLd } from "@/components/svipgems/JsonLd";
import { ScreenshotsSection } from "@/components/svipgems/ScreenshotsSection";
import { SiteFooter } from "@/components/svipgems/SiteFooter";
import { SiteHeader } from "@/components/svipgems/SiteHeader";
import { TableOfContentsAccordion } from "@/components/svipgems/TableOfContentsAccordion";
import { homePageMetadata } from "@/lib/svipgems/metadata";

export const metadata = homePageMetadata;

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <div className="min-h-full bg-slate-950 text-slate-100">
        <SiteHeader />
        <main id="main-content">
          <HeroSection />
          <TableOfContentsAccordion />
          <OverviewIntroductionSection />
          <WhatIsGameSection />
          <RegistrationLoginSection />
          <KeyFeaturesSection />
          <AdditionalFeaturesSection />
          <PopularGamesArticleSection />
          <ScreenshotsSection />
          <DownloadInstallSection />
          <DepositWithdrawArticleSection />
          <WhyChooseSection />
          <ReferralProgramSection />
          <SafeLegalSection />
          <ProsConsSection />
          <ArticleConclusionSection />
          <ArticleFaqSection />
          <section
            aria-label="Call to action"
            className="border-y border-amber-400/20 bg-gradient-to-r from-indigo-950/80 to-slate-950 py-12"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Ready to Download SVIP Gems?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
                If you are ready to try this earning app, grab the official APK, register with
                your mobile number, and start with a small Easypaisa or JazzCash deposit.
              </p>
              <CTAButtons className="mt-6 justify-center" size="large" />
            </div>
          </section>
          <DisclaimerSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
