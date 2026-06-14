import { DISCLAIMER } from "@/lib/svipgems/article-content";

export function DisclaimerSection() {
  return (
    <section aria-labelledby="disclaimer-heading" className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="disclaimer-heading" className="sr-only">
          Disclaimer
        </h2>
        <p className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-sm leading-relaxed text-slate-400 md:text-base">
          {DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
