import Link from "next/link";
import { GUIDE_PAGES } from "@/lib/svipgems/pages";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function GuideHubSection() {
  return (
    <section
      aria-labelledby="guide-hub-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="guide-hub-heading"
          title="SVIP Gems Guide Pages"
          subtitle="Dedicated guides for download, login, withdrawal, and honest reviews — built for Pakistan users."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {GUIDE_PAGES.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="group rounded-2xl border border-white/10 bg-slate-950/50 p-6 transition hover:border-amber-400/30 hover:bg-slate-900"
            >
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300">
                {page.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{page.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-amber-400">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
