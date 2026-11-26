import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ScreenshotSlider } from "@/components/svipgems/ScreenshotSlider";
import { SLOT_SCREENSHOTS } from "@/lib/svipslot/images";

export function SvipSlotScreenshotsSection() {
  return (
    <section
      id="screenshots"
      aria-labelledby="slot-screenshots-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="slot-screenshots-heading"
          title="SVIP Slot App Screens from Pakistan"
          subtitle="Lobby titles, WhatsApp/SMS signup, Super Offer extras, invite ranking, and the splash screen."
        />
        <ScreenshotSlider images={SLOT_SCREENSHOTS} label="SVIP Slot app screenshots" />
      </div>
    </section>
  );
}
