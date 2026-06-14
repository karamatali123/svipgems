import Link from "next/link";
import { DISCLAIMER } from "@/lib/svipgems/article-content";
import { LastUpdated } from "@/components/svipgems/LastUpdated";
import { DOWNLOAD_URL } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-amber-400">SVIP Gems</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Independent Pakistan guide for SVIP Gems download, login, payments, and reviews.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="transition hover:text-amber-400">
                  Homepage
                </Link>
              </li>
              <li>
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-amber-400"
                >
                  Download APK
                </a>
              </li>
              <li>
                <a href="#safe-legal-heading" className="transition hover:text-amber-400">
                  Safe and Legal
                </a>
              </li>
              <li>
                <a href="#pros-cons-heading" className="transition hover:text-amber-400">
                  Pros and Cons
                </a>
              </li>
              <li>
                <a href="#faq-heading" className="transition hover:text-amber-400">
                  FAQ
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
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SVIP Gems Guide — Informational content for Pakistan users.
          <span className="mt-2 block">
            <LastUpdated />
          </span>
        </p>
      </div>
    </footer>
  );
}
