import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ScreenshotSlider } from "@/components/svipgems/ScreenshotSlider";

export function ScreenshotsSection() {
  return (
    <section
      id="screenshots"
      aria-labelledby="screenshots-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="screenshots-heading"
          title="SVIP Gems App Screenshots"
          subtitle="Real Android app screens — home, games, wallet, deposits, and APK download."
        />
        <ScreenshotSlider />
      </div>
    </section>
  );
}
