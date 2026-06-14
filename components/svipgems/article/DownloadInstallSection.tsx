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
import { SectionHeading } from "@/components/svipgems/SectionHeading";
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
          title="Guide for Download and Install svip gems APK"
        />
        <ArticleProse paragraphs={[DOWNLOAD_INTRO]} className="mb-10" />

        <h3 className="text-xl font-bold text-amber-300 md:text-2xl">Device Requirements</h3>
        <ArticleProse paragraphs={DEVICE_REQUIREMENTS_INTRO} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems device requirements" rows={DEVICE_REQUIREMENTS_TABLE} />

        <h3 className="mt-10 text-xl font-bold text-amber-300 md:text-2xl">Downloading Process</h3>
        <ArticleProse paragraphs={DOWNLOADING_INTRO} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems APK downloading steps" rows={DOWNLOADING_TABLE} />

        <h3 className="mt-10 text-xl font-bold text-amber-300 md:text-2xl">Installation Guide</h3>
        <ArticleProse paragraphs={INSTALLATION_INTRO} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems installation steps" rows={INSTALLATION_TABLE} />

        <div className="mt-10">
          <DownloadButton size="large" label="Download SVIP Gems APK" />
        </div>
      </div>
    </section>
  );
}
