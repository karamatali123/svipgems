import Image from "next/image";
import { DOWNLOAD_STEPS } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { CTAButtons } from "@/components/svipgems/CTAButtons";
import { SCREENSHOTS } from "@/lib/svipgems/images";

const downloadScreenshot = SCREENSHOTS.find((s) => s.caption === "APK download")!;

export function DownloadGuideSection() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="download-heading"
          title="SVIP Gems APK Download Guide"
          subtitle="Install the latest SVIP Gems Android APK safely in five steps."
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <ol className="space-y-4">
            {DOWNLOAD_STEPS.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl border border-white/10 bg-slate-900/40 p-4 md:p-5"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">{step}</p>
              </li>
            ))}
          </ol>
          <figure className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
            <Image
              src={downloadScreenshot.src}
              alt={downloadScreenshot.alt}
              width={downloadScreenshot.width}
              height={downloadScreenshot.height}
              className="mx-auto w-full max-w-md rounded-xl object-contain"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-400">
              {downloadScreenshot.caption}
            </figcaption>
          </figure>
        </div>
        <aside
          role="note"
          className="mt-8 rounded-xl border border-amber-400/30 bg-amber-400/10 p-5 text-sm leading-relaxed text-amber-100 md:text-base"
        >
          <strong className="font-semibold text-amber-300">Safety:</strong> Download only from
          official links. Avoid APKs from WhatsApp groups.
        </aside>
        <CTAButtons className="mt-8" />
      </div>
    </section>
  );
}
