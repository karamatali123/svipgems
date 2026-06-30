import Image from "next/image";
import { CTAButtons } from "@/components/svipgems/CTAButtons";
import { TRUST_BADGES } from "@/lib/svipgems/content";
import { HERO_INTRO } from "@/lib/svipgems/article-content";
import { HERO_IMAGE } from "@/lib/svipgems/images";
import { LastUpdated } from "@/components/svipgems/LastUpdated";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:px-6 md:py-20">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300">
            Updated for 2026 · Pakistan Guide
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            SVIP Gems Game Download APK (2026) – Login, Withdrawal & Review Pakistan
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            {HERO_INTRO}
          </p>
          <LastUpdated className="mt-4" />
          <CTAButtons className="mt-8" size="large" />
          <ul
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
            aria-label="Trust badges"
          >
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300 md:text-sm"
              >
                <span aria-hidden="true" className="text-emerald-400">
                  ✓
                </span>
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <figure className="relative mx-auto w-full max-w-xl md:max-w-2xl">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            width={HERO_IMAGE.width}
            height={HERO_IMAGE.height}
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="mx-auto w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-indigo-900/50"
          />
          <figcaption className="mt-3 text-center text-xs text-slate-500">
            {HERO_IMAGE.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
