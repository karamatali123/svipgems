import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/svipgems/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/svipgems/Breadcrumbs";
import { DisclaimerSection } from "@/components/svipgems/DisclaimerSection";
import { FaqDetails } from "@/components/svipgems/FaqDetails";
import { LastUpdated } from "@/components/svipgems/LastUpdated";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { SiteFooter } from "@/components/svipgems/SiteFooter";
import { SiteHeader } from "@/components/svipgems/SiteHeader";
import { TableOfContentsAccordion } from "@/components/svipgems/TableOfContentsAccordion";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";
import { SvipSlotCtaButtons } from "@/components/svipslot/SvipSlotCtaButtons";
import { OtherSvipGamesSection } from "@/components/svipgems/OtherSvipGamesSection";
import { SvipSlotScreenshotsSection } from "@/components/svipslot/SvipSlotScreenshotsSection";
import { SLOT_HERO_IMAGE } from "@/lib/svipslot/images";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";
import {
  SLOT_BONUSES,
  SLOT_CONCLUSION,
  SLOT_CONS,
  SLOT_DEVICES,
  SLOT_FAQS,
  SLOT_GAMES,
  SLOT_GAMES_INTRO,
  SLOT_HOW_IT_WORKS,
  SLOT_OVERVIEW,
  SLOT_PAYMENT_ROWS,
  SLOT_PAYMENTS_INTRO,
  SLOT_PROS,
  SLOT_QUICK_INFO,
  SLOT_SAFE_INTRO,
  SLOT_SAFE_POINTS,
  SLOT_SUPPORT,
  SLOT_TOC,
  SLOT_WHAT_IS,
  SLOT_WHY_CHOOSE,
  SVIP_SLOT_PAGE,
} from "@/lib/svipslot/content";

export const metadata: Metadata = createGuidePageMetadata({
  title: SVIP_SLOT_PAGE.title,
  description: SVIP_SLOT_PAGE.description,
  path: "/svip-slot",
  keywords: [
    "SVIP Slot",
    "SVIP Slot Game",
    "SVipSlot APK",
    "SVIP Slot Pakistan",
    "SVIP Slot JazzCash",
    "SVIP Slot Easypaisa",
    "SVIP Slot download",
    "SVIP Slot withdrawal",
  ],
});

const schema = getGuidePageSchema({
  path: "/svip-slot",
  title: SVIP_SLOT_PAGE.title,
  description: SVIP_SLOT_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "SVIP Slot Game", path: "/svip-slot" },
  ],
  faqs: SLOT_FAQS,
});

export default function SvipSlotPage() {
  return (
    <div className="min-h-full bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <main id="main-content">
        <article itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={SVIP_SLOT_PAGE.title} />
          <section
            aria-labelledby="slot-hero-heading"
            className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_50%)]" />
            <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:px-6 md:py-20">
              <div>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "SVIP Slot Game", href: "/svip-slot" },
                  ]}
                />
                <p className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300">
                  SVIP game family · Android APK · Pakistan 2026
                </p>
                <h1
                  id="slot-hero-heading"
                  className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
                >
                  {SVIP_SLOT_PAGE.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  {SVIP_SLOT_PAGE.heroIntro}
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  Also see{" "}
                  <Link href="/" className="font-medium text-amber-400 hover:text-amber-300">
                    SVIP Gems
                  </Link>{" "}
                  and{" "}
                  <Link href="/svip-club" className="font-medium text-amber-400 hover:text-amber-300">
                    SVIP Club
                  </Link>{" "}
                  — same platform family, separate apps.
                </p>
                <div className="mt-4">
                  <AffiliateDisclosure />
                </div>
                <LastUpdated className="mt-4" />
                <SvipSlotCtaButtons className="mt-6" size="large" />
              </div>
              <figure className="relative mx-auto w-full max-w-sm md:max-w-md">
                <Image
                  src={SLOT_HERO_IMAGE.src}
                  alt={SLOT_HERO_IMAGE.alt}
                  width={SLOT_HERO_IMAGE.width}
                  height={SLOT_HERO_IMAGE.height}
                  priority
                  sizes="(max-width: 768px) 80vw, 448px"
                  className="mx-auto w-full rounded-[2rem] border border-white/10 object-contain shadow-2xl shadow-red-950/40"
                />
                <figcaption className="mt-3 text-center text-xs text-slate-500">
                  {SLOT_HERO_IMAGE.caption}
                </figcaption>
              </figure>
            </div>
          </section>

          <TableOfContentsAccordion items={SLOT_TOC} />

          <section
            aria-labelledby="slot-overview-heading"
            className="border-b border-white/10 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-overview-heading"
                title="SVIP Slot Pakistan Guide Snapshot"
                subtitle="How this APK fits next to SVIP Gems and SVIP Club for JazzCash and Easypaisa players."
              />
              <ArticleProse paragraphs={SLOT_OVERVIEW} />
            </div>
          </section>

          <section aria-labelledby="slot-quick-info-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-quick-info-heading"
                title="SVIP Slot Facts Table for First-Time Users"
                subtitle="Reported APK size, wallet limits, and payout windows — always re-check inside the app."
              />
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[540px] border-collapse text-left text-sm md:text-base">
                  <caption className="sr-only">SVIP Slot Game quick information for Pakistan</caption>
                  <tbody>
                    {SLOT_QUICK_INFO.map((row, index) => (
                      <tr
                        key={row.label}
                        className={index % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"}
                      >
                        <th
                          scope="row"
                          className="w-2/5 border-b border-white/5 px-4 py-3.5 font-semibold text-amber-300 md:px-6 md:py-4"
                        >
                          {row.label}
                        </th>
                        <td className="border-b border-white/5 px-4 py-3.5 text-slate-300 md:px-6 md:py-4">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="what-is-slot-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="what-is-slot-heading"
                title="Understanding the SVIP Slot Android Earning App"
                subtitle="A sideloaded APK with slots, casino, and multiplayer — not a Play Store listing."
              />
              <ArticleProse paragraphs={SLOT_WHAT_IS} />
            </div>
          </section>

          <section aria-labelledby="slot-how-it-works-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-how-it-works-heading"
                title="From APK Install to First Cash-Out on SVIP Slot"
                subtitle="Four practical steps: install, OTP login, JazzCash or Easypaisa top-up, then withdraw."
              />
              <ol className="grid gap-6 md:grid-cols-2">
                {SLOT_HOW_IT_WORKS.map((item) => (
                  <li
                    key={item.step}
                    className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-indigo-950/40 p-6 md:p-8"
                  >
                    <span
                      className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-slate-900"
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="games" aria-labelledby="slot-games-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-games-heading"
                title="Casino Rooms, Slot Reels, and Live Multiplayer in SVIP Slot"
                subtitle="Three lanes in one APK: reels, tables, and head-to-head rooms for Pakistan users."
              />
              <ArticleProse paragraphs={[SLOT_GAMES_INTRO]} className="mb-10" />
              <div className="space-y-8">
                {SLOT_GAMES.map((game) => (
                  <article key={game.title}>
                    <h3 className="text-lg font-bold text-white md:text-xl">{game.title}</h3>
                    <ArticleProse paragraphs={game.paragraphs} className="mt-3" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="bonuses"
            aria-labelledby="slot-bonuses-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-bonuses-heading"
                title="Welcome Credit, First-Deposit Match, Daily Logins, and VIP on SVIP Slot"
                subtitle="Reported PKR 40 signup extras plus streaks — wagering and expiry still apply."
              />
              <div className="grid gap-5 sm:grid-cols-2">
                {SLOT_BONUSES.map((bonus) => (
                  <article
                    key={bonus.title}
                    className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/5 to-slate-900/60 p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-white">{bonus.title}</h3>
                      <span className="shrink-0 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300">
                        {bonus.range}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                      {bonus.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="slot-payments-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-payments-heading"
                title="JazzCash vs Easypaisa on SVIP Slot: Wallet Transfer and QR Scan"
                subtitle="Direct pay when it is open; one-time Scan-to-Pay QR when it is not. Reported cash-out PKR 100–50,000."
              />
              <p className="mb-8 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                {SLOT_PAYMENTS_INTRO}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
                  <caption className="sr-only">SVIP Slot payment methods for Pakistan</caption>
                  <thead>
                    <tr className="bg-indigo-950/60">
                      <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6 md:py-4">
                        Method
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6 md:py-4">
                        Deposit
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6 md:py-4">
                        Withdrawal
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6 md:py-4">
                        Time
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6 md:py-4">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SLOT_PAYMENT_ROWS.map((row, index) => (
                      <tr
                        key={row.method}
                        className={index % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"}
                      >
                        <th
                          scope="row"
                          className="border-t border-white/5 px-4 py-3.5 font-semibold text-white md:px-6 md:py-4"
                        >
                          {row.method}
                        </th>
                        <td className="border-t border-white/5 px-4 py-3.5 text-slate-300 md:px-6 md:py-4">
                          {row.deposit}
                        </td>
                        <td className="border-t border-white/5 px-4 py-3.5 text-slate-300 md:px-6 md:py-4">
                          {row.withdrawal}
                        </td>
                        <td className="border-t border-white/5 px-4 py-3.5 text-slate-300 md:px-6 md:py-4">
                          {row.time}
                        </td>
                        <td className="border-t border-white/5 px-4 py-3.5 text-slate-400 md:px-6 md:py-4">
                          {row.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="slot-devices-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-devices-heading"
                title="Android Requirements for a Smooth SVIP Slot Session"
                subtitle="Everyday phones from Android 5.1 up, plus unknown-sources permission for the APK."
              />
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {SLOT_DEVICES.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-300 md:text-base"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <SvipSlotScreenshotsSection />
          <OtherSvipGamesSection currentPath="/svip-slot" />

          <section aria-labelledby="slot-why-choose-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-why-choose-heading"
                title="When SVIP Slot Fits Better Than Other SVIP Apps"
                subtitle="Pick Slot for a smaller APK and reel-first lobby; use Gems or Club if you need a different cashier mix."
              />
              <ArticleProse paragraphs={SLOT_WHY_CHOOSE} />
            </div>
          </section>

          <section
            aria-labelledby="slot-support-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-support-heading"
                title="SVIP Slot Help Desk: In-App Chat and Email Support"
                subtitle="Start in the app. Keep TID screenshots. Never share an OTP with anyone claiming to be staff."
              />
              <ArticleProse paragraphs={SLOT_SUPPORT} />
            </div>
          </section>

          <section aria-labelledby="slot-safe-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-safe-heading"
                title="Real-Money Risks and Safer Habits on SVIP Slot"
                subtitle="Unregulated APK play — sister branding with Gems and Club does not add legal cover."
              />
              <ArticleProse paragraphs={[SLOT_SAFE_INTRO]} className="mb-6" />
              <ul className="max-w-3xl list-disc space-y-2 pl-5 text-slate-300 md:text-base">
                {SLOT_SAFE_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>

          <section
            aria-labelledby="slot-pros-cons-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-pros-cons-heading"
                title="SVIP Slot Upsides and Drawbacks in One View"
                subtitle="A short list before you sideload the APK or send a first wallet payment."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                  <h3 className="text-lg font-bold text-emerald-300 md:text-xl">Pros</h3>
                  <ul className="mt-4 space-y-3">
                    {SLOT_PROS.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-base">
                        <span className="text-emerald-400" aria-hidden="true">
                          +
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
                  <h3 className="text-lg font-bold text-red-300 md:text-xl">Cons</h3>
                  <ul className="mt-4 space-y-3">
                    {SLOT_CONS.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-base">
                        <span className="text-red-400" aria-hidden="true">
                          −
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section aria-labelledby="slot-conclusion-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-conclusion-heading"
                title="Final Call: Is SVIP Slot Worth a Test Deposit?"
                subtitle="Try a tiny JazzCash or Easypaisa top-up only after one verified APK install."
              />
              <ArticleProse paragraphs={SLOT_CONCLUSION} />
            </div>
          </section>

          <section
            id="faq"
            aria-labelledby="slot-faq-heading"
            className="border-t border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="slot-faq-heading"
                title="SVIP Slot Questions Pakistani Players Ask Most"
                subtitle="APK install, QR deposits, PKR 100 cash-outs, and how Slot differs from Gems and Club."
              />
              <FaqDetails faqs={SLOT_FAQS} />
            </div>
          </section>
        </article>

        <section
          aria-label="Call to action"
          className="border-y border-amber-400/20 bg-gradient-to-r from-indigo-950/80 to-slate-950 py-12"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ready to try the SVIP Slot APK?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
              Install from a verified file, register with OTP, and test a small JazzCash or Easypaisa
              deposit before you raise the stake.
            </p>
            <SvipSlotCtaButtons className="mt-6 justify-center" size="large" />
          </div>
        </section>
        <DisclaimerSection />
      </main>
      <SiteFooter />
    </div>
  );
}
