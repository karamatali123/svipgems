import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ScreenshotSlider } from "@/components/svipgems/ScreenshotSlider";
import { CLUB_SCREENSHOTS } from "@/lib/svipclub/images";

export function SvipClubScreenshotsSection() {
  return (
    <section
      id="screenshots"
      aria-labelledby="club-screenshots-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="club-screenshots-heading"
          title="SVIP Club App Screenshots"
          subtitle="Real app screens from Pakistan — games lobby, slots, EasyPaisa/JazzCash deposits, and promotions."
        />
        <ScreenshotSlider images={CLUB_SCREENSHOTS} label="SVIP Club app screenshots" />
      </div>
    </section>
  );
}
