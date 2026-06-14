import Link from "next/link";
import { CTAButtons } from "@/components/svipgems/CTAButtons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-amber-400 transition hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          aria-label="SVIP Gems homepage"
        >
          SVIP <span className="text-white">Gems</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          <a href="#download-install-heading" className="text-sm text-slate-300 transition hover:text-white">
            Download
          </a>
          <a href="#deposit-withdraw-heading" className="text-sm text-slate-300 transition hover:text-white">
            Withdrawal
          </a>
          <a href="#referral-heading" className="text-sm text-slate-300 transition hover:text-white">
            Referral
          </a>
          <a href="#faq-heading" className="text-sm text-slate-300 transition hover:text-white">
            FAQ
          </a>
        </nav>
        <div className="hidden sm:block">
          <CTAButtons size="default" />
        </div>
      </div>
    </header>
  );
}
