import Link from "next/link";
import { DOWNLOAD_URL } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-slate-950 px-4 py-20 text-center text-slate-100">
      <p className="text-sm font-medium uppercase tracking-wider text-amber-400">404</p>
      <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-slate-400">
        This page does not exist. Return to the SVIP Gems guide for download, login, and
        withdrawal help.
      </p>
      <nav aria-label="Helpful links" className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          SVIP Gems Home
        </Link>
        <Link
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-amber-400/50"
        >
          Download APK
        </Link>
        <Link
          href="/#faq-heading"
          className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-amber-400/50"
        >
          FAQ
        </Link>
      </nav>
    </div>
  );
}
