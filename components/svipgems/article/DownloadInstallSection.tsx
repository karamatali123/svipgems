import {
  DEVICE_REQUIREMENTS_INTRO,
  DEVICE_REQUIREMENTS_TABLE,
  DOWNLOADING_INTRO,
  DOWNLOADING_TABLE,
  DOWNLOAD_INTRO,
  INSTALLATION_INTRO,
  INSTALLATION_TABLE,
} from "@/lib/svipgems/article-content";
import { DownloadButton } from "@/components/svipgems/DownloadButton";
import { GuideReadMoreLink } from "@/components/svipgems/GuideReadMoreLink";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";
import { ArticleTable } from "@/components/svipgems/article/ArticleTable";

export function DownloadInstallSection() {
  return (
    <section
      id="download"
      aria-labelledby="download-install-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="download-install-heading"
          title="How to Download and Install SVIP Gems APK"
          subtitle="Step-by-step APK download and installation guide for Android phones in Pakistan."
        />
        <ArticleProse paragraphs={[DOWNLOAD_INTRO]} className="mb-10" />

        <SubSectionHeading id="device-requirements-heading" title="Device Requirements" />
        <ArticleProse paragraphs={DEVICE_REQUIREMENTS_INTRO} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems device requirements" rows={DEVICE_REQUIREMENTS_TABLE} />

        <SubSectionHeading id="downloading-process-heading" title="Downloading the APK" className="mt-10" />
        <ArticleProse paragraphs={DOWNLOADING_INTRO} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems APK downloading steps" rows={DOWNLOADING_TABLE} />

        <SubSectionHeading id="installation-guide-heading" title="Installing the APK" className="mt-10" />
        <ArticleProse paragraphs={INSTALLATION_INTRO} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems installation steps" rows={INSTALLATION_TABLE} />

        <div className="mt-10">
          <DownloadButton size="large" label="Download SVIP Gems APK" />
        </div>
        <GuideReadMoreLink href="/download" label="SVIP Gems APK Download Guide" />
      </div>
    </section>
  );
}
