import { AFFILIATE_LINK_REL, SVIP_SLOT_PLAY_URL } from "@/lib/site-config";

type SvipSlotCtaButtonsProps = {
  className?: string;
  size?: "default" | "large";
};

export function SvipSlotCtaButtons({
  className = "",
  size = "default",
}: SvipSlotCtaButtonsProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-base md:text-lg"
      : "px-6 py-3 text-sm md:text-base";
  const isExternal = SVIP_SLOT_PLAY_URL.startsWith("http");

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <a
        href={SVIP_SLOT_PLAY_URL}
        {...(isExternal
          ? { target: "_blank", rel: AFFILIATE_LINK_REL }
          : {})}
        className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 font-semibold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${sizeClasses}`}
        aria-label="Download SVIP Slot Game APK"
      >
        Download SVIP Slot APK
      </a>
      <a
        href={SVIP_SLOT_PLAY_URL}
        {...(isExternal
          ? { target: "_blank", rel: AFFILIATE_LINK_REL }
          : {})}
        className={`inline-flex items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/10 font-semibold text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 ${sizeClasses}`}
        aria-label="SVIP Slot login and registration"
      >
        Login / Register
      </a>
    </div>
  );
}
