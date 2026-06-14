import { DownloadButton } from "@/components/svipgems/DownloadButton";
import { DOWNLOAD_URL } from "@/lib/site-config";

type CTAButtonsProps = {
  className?: string;
  size?: "default" | "large";
};

export function CTAButtons({ className = "", size = "default" }: CTAButtonsProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-base md:text-lg"
      : "px-6 py-3 text-sm md:text-base";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <DownloadButton size={size} />
      <a
        href={DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/10 font-semibold text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 ${sizeClasses}`}
        aria-label="SVIP Gems login and registration"
      >
        Login / Register
      </a>
    </div>
  );
}
