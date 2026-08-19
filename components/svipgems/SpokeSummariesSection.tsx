import Link from "next/link";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

const SPOKE_SUMMARIES = [
  {
    href: "/download",
    title: "Download & Install APK",
    summary:
      "SVIP Gems is not on Google Play. Download the official APK, enable unknown sources on Android 8.0+, and install in under five minutes. Includes device requirements and per-brand install tips.",
    isDownloadSpoke: true,
  },
  {
    href: "/login",
    title: "Registration & Login",
    summary:
      "Register with your Pakistani mobile number and OTP, set a password, and log in each session with phone + password. Covers OTP issues, password reset, and account security.",
    isDownloadSpoke: false,
  },
  {
    href: "/deposit",
    title: "Deposit Money",
    summary:
      "Fund your SVIP Gems wallet via Easypaisa or JazzCash. Minimum deposit is typically PKR 100–500. Deposits usually credit within minutes when you use the correct merchant number.",
    isDownloadSpoke: false,
  },
  {
    href: "/withdrawal",
    title: "Withdraw Winnings",
    summary:
      "Withdraw to the same Easypaisa or JazzCash wallet on your profile. Minimum withdrawal is typically PKR 200+. Processing usually takes 10–30 minutes after verification.",
    isDownloadSpoke: false,
  },
  {
    href: "/review",
    title: "Real or Fake Review",
    summary:
      "SVIP Gems is a real-money app used widely in Pakistan but not government-regulated. Payouts work for most users; delays and losses are possible. Read our evidence-based verdict.",
    isDownloadSpoke: false,
  },
] as const;

export function SpokeSummariesSection() {
  return (
    <section
      aria-labelledby="guide-summaries-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="guide-summaries-heading"
          title="SVIP Gems Step-by-Step Guides"
          subtitle="Detailed guides for download, login, deposits, withdrawals, and reviews — starting from this homepage."
        />
        <p className="mb-6 text-sm text-slate-400">
          This is the{" "}
          <Link href="/" className="font-medium text-amber-400 hover:text-amber-300">
            official SVIP Gems Pakistan guide
          </Link>
          . Use the sections below or open a dedicated page for more detail.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {SPOKE_SUMMARIES.map((item) => (
            <article
              key={item.href}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
            >
              <h3 className="text-lg font-bold text-white">
                <Link href={item.href} className="transition hover:text-amber-300">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {item.summary}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-sm font-medium text-amber-400 hover:text-amber-300"
              >
                {item.isDownloadSpoke ? "Extended APK install guide →" : "Read full guide →"}
              </Link>
              {item.isDownloadSpoke && (
                <p className="mt-3 border-t border-white/10 pt-3 text-xs text-slate-500">
                  Detailed install only —{" "}
                  <Link href="/" className="text-amber-400/90 hover:text-amber-300">
                    return to complete SVIP Gems guide
                  </Link>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
