import Link from "next/link";
import { getOtherGuidePages, type GuidePagePath } from "@/lib/svipgems/pages";

type RelatedGuidesProps = {
  currentPath: GuidePagePath;
};

export function RelatedGuides({ currentPath }: RelatedGuidesProps) {
  const pages = getOtherGuidePages(currentPath);

  return (
    <aside
      aria-labelledby="related-guides-heading"
      className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 md:p-8"
    >
      <h2 id="related-guides-heading" className="text-lg font-bold text-white md:text-xl">
        More SVIP Gems Guides
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Explore our other Pakistan guides for download, login, payments, and reviews.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {pages.map((page) => (
          <li key={page.path}>
            <Link
              href={page.path}
              className="block rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 transition hover:border-amber-400/30 hover:bg-slate-900"
            >
              <span className="font-semibold text-amber-300">{page.label}</span>
              <span className="mt-1 block text-sm text-slate-400">{page.description}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/"
            className="block rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 transition hover:border-amber-400/30 hover:bg-slate-900"
          >
            <span className="font-semibold text-amber-300">Complete Homepage Guide</span>
            <span className="mt-1 block text-sm text-slate-400">
              Full SVIP Gems guide with all sections, screenshots, and 18 FAQs.
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
