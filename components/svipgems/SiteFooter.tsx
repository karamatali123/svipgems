import Link from "next/link";
import { DISCLAIMER } from "@/lib/svipgems/article-content";
import { LastUpdated } from "@/components/svipgems/LastUpdated";
import { GUIDE_PAGES, SVIP_GAME_PAGES, TRUST_PAGES } from "@/lib/svipgems/pages";
import { AFFILIATE_LINK_REL, DOWNLOAD_URL } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="text-lg font-bold text-amber-400">SVIP Gems Guide</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Independent Pakistan guide for SVIP Gems download, login, payments, and reviews.
            </p>
          </div>
          <nav aria-label="SVIP games">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              SVIP Games
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {SVIP_GAME_PAGES.map((page) => (
                <li key={page.path}>
                  <Link href={page.path} className="transition hover:text-amber-400">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Guide pages">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Guides
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="transition hover:text-amber-400">
                  Homepage
                </Link>
              </li>
              {GUIDE_PAGES.map((page) => (
                <li key={page.path}>
                  <Link href={page.path} className="transition hover:text-amber-400">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal pages">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {TRUST_PAGES.map((page) => (
                <li key={page.path}>
                  <Link href={page.path} className="transition hover:text-amber-400">
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel={AFFILIATE_LINK_REL}
                  className="transition hover:text-amber-400"
                >
                  Download APK
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Disclaimer
            </p>
            <p className="text-xs leading-relaxed text-slate-500">{DISCLAIMER}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SVIP Gems Guide — Informational content for Pakistan users. 18+
          <LastUpdated className="mt-2" />
        </div>
      </div>
    </footer>
  );
}
