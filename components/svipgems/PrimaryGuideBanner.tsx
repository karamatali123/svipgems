import Link from "next/link";

type PrimaryGuideBannerProps = {
  /** Keyword-rich anchor for SEO — points equity to the homepage */
  homeAnchor?: string;
};

export function PrimaryGuideBanner({
  homeAnchor = "SVIP Gems Game Download APK – Complete Pakistan Guide",
}: PrimaryGuideBannerProps) {
  return (
    <aside
      aria-label="Primary guide link"
      className="border-b border-amber-400/25 bg-gradient-to-r from-amber-400/10 to-slate-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          This page covers APK install steps only. For the full resource — login, withdrawal,
          review, and FAQ — visit our main guide:
        </p>
        <Link
          href="/"
          className="shrink-0 rounded-lg border border-amber-400/40 bg-amber-400/15 px-4 py-2.5 text-sm font-semibold text-amber-300 transition hover:border-amber-400/60 hover:bg-amber-400/25 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          {homeAnchor} →
        </Link>
      </div>
    </aside>
  );
}
