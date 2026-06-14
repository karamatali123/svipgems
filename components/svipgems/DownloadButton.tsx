import { DOWNLOAD_URL } from "@/lib/site-config";

type DownloadButtonProps = {
  className?: string;
  size?: "default" | "large";
  label?: string;
};

export function DownloadButton({
  className = "",
  size = "default",
  label = "Download APK",
}: DownloadButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-base md:text-lg"
      : "px-6 py-3 text-sm md:text-base";

  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 font-semibold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${sizeClasses} ${className}`}
      aria-label="Download SVIP Gems Game APK"
    >
      {label}
    </a>
  );
}
