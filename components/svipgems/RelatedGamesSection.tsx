import Link from "next/link";
import { RELATED_LINKS } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function RelatedGamesSection() {
  return (
    <section
      aria-labelledby="related-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="related-heading"
          title="Related SVIP Gems Guides"
          subtitle="Jump to download, login, withdrawal, bonus, and FAQ sections on this page."
        />
        <nav aria-label="Related SVIP Gems guides">
          <ul className="grid gap-4 sm:grid-cols-2">
            {RELATED_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block rounded-xl border border-white/10 bg-slate-950/50 p-5 transition hover:border-amber-400/40 hover:bg-slate-900/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  <span className="font-semibold text-amber-300 group-hover:text-amber-200">
                    {link.label}
                  </span>
                  <p className="mt-1 text-sm text-slate-400">{link.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
