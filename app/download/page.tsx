import type { Metadata } from "next";
import { DownloadButton } from "@/components/svipgems/DownloadButton";
import { FaqAccordion } from "@/components/svipgems/FaqAccordion";
import { GuidePageLayout } from "@/components/svipgems/GuidePageLayout";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
import { ArticleTable } from "@/components/svipgems/article/ArticleTable";
import { DOWNLOAD_PAGE } from "@/lib/svipgems/page-content";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";

export const metadata: Metadata = createGuidePageMetadata({
  title: DOWNLOAD_PAGE.title,
  description: DOWNLOAD_PAGE.description,
  path: "/download",
  keywords: [
    "SVIP Gems APK Download",
    "SVIP Gems Download Pakistan",
    "SVIP Gems install",
    "SVIP Gems Android APK",
    "SVIPGEMS download",
  ],
});

const howToSteps = [
  ...DOWNLOAD_PAGE.downloadSteps,
  ...DOWNLOAD_PAGE.installSteps,
].map((row) => ({ name: row.label, text: row.value }));

const schema = getGuidePageSchema({
  path: "/download",
  title: DOWNLOAD_PAGE.title,
  description: DOWNLOAD_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Download APK", path: "/download" },
  ],
  faqs: DOWNLOAD_PAGE.faqs,
  howToSteps,
  howToName: "How to Download and Install SVIP Gems APK",
});

export default function DownloadPage() {
  return (
    <GuidePageLayout
      path="/download"
      title={DOWNLOAD_PAGE.title}
      description={DOWNLOAD_PAGE.description}
      breadcrumbLabel="Download APK"
      schema={schema}
    >
      {DOWNLOAD_PAGE.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-slate-300">
          {paragraph}
        </p>
      ))}

      <SubSectionHeading id="device-requirements" title="Device Requirements" className="mt-8" />
      <div className="mt-4">
        <ArticleTable caption="SVIP Gems APK device requirements" rows={DOWNLOAD_PAGE.deviceRequirements} />
      </div>

      <SubSectionHeading id="download-steps" title="How to Download the APK" className="mt-10" />
      <div className="mt-4">
        <ArticleTable caption="SVIP Gems download steps" rows={DOWNLOAD_PAGE.downloadSteps} />
      </div>

      <SubSectionHeading id="install-steps" title="How to Install on Android" className="mt-10" />
      <div className="mt-4">
        <ArticleTable caption="SVIP Gems installation steps" rows={DOWNLOAD_PAGE.installSteps} />
      </div>

      <div className="mt-10">
        <DownloadButton size="large" label="Download SVIP Gems APK" />
      </div>

      <section aria-labelledby="download-faq-heading" className="mt-14">
        <h2 id="download-faq-heading" className="text-2xl font-bold text-white">
          Download FAQ
        </h2>
        <div className="mt-6">
          <FaqAccordion faqs={DOWNLOAD_PAGE.faqs} />
        </div>
      </section>
    </GuidePageLayout>
  );
}
