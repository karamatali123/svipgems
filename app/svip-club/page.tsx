import type { Metadata } from "next";
import Image from "next/image";
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
import { SvipClubCtaButtons } from "@/components/svipclub/SvipClubCtaButtons";
import { OtherSvipGamesSection } from "@/components/svipgems/OtherSvipGamesSection";
import { SvipClubScreenshotsSection } from "@/components/svipclub/SvipClubScreenshotsSection";
import { CLUB_HERO_IMAGE } from "@/lib/svipclub/images";
import { AFFILIATE_LINK_REL, SVIP_CLUB_OFFICIAL_URL } from "@/lib/site-config";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";
import {
  CLUB_BONUSES,
  CLUB_CONCLUSION,
  CLUB_CONS,
  CLUB_DEVICES,
  CLUB_FAQS,
  CLUB_GAMES,
  CLUB_GAMES_INTRO,
  CLUB_HOW_IT_WORKS,
  CLUB_OVERVIEW,
  CLUB_PAYMENT_ROWS,
  CLUB_PAYMENTS_INTRO,
  CLUB_PROS,
  CLUB_QUICK_INFO,
  CLUB_SAFE_INTRO,
  CLUB_SAFE_POINTS,
  CLUB_SUPPORT,
  CLUB_TOC,
  CLUB_WHAT_IS,
  CLUB_WHY_CHOOSE,
  SVIP_CLUB_PAGE,
} from "@/lib/svipclub/content";

export const metadata: Metadata = createGuidePageMetadata({
  title: SVIP_CLUB_PAGE.title,
  description: SVIP_CLUB_PAGE.description,
  path: "/svip-club",
  keywords: [
    "SVIP Club",
    "SVIP Club Casino",
    "SVIP Club Pakistan",
    "SVIP Club app download",
    "SVIP Club login",
    "SVIP Club EasyPaisa",
    "SVIP Club JazzCash",
    "SVIP Club bonus",
    "svip-club.com",
  ],
});

const schema = getGuidePageSchema({
  path: "/svip-club",
  title: SVIP_CLUB_PAGE.title,
  description: SVIP_CLUB_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "SVIP Club Casino", path: "/svip-club" },
  ],
  faqs: CLUB_FAQS,
});

export default function SvipClubPage() {
  return (
    <div className="min-h-full bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <main id="main-content">
        <article itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={SVIP_CLUB_PAGE.title} />
          <section
            aria-labelledby="club-hero-heading"
            className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_50%)]" />
            <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:px-6 md:py-20">
              <div>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "SVIP Club Casino", href: "/svip-club" },
                  ]}
                />
                <p className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300">
                  Official site · svip-club.com · Pakistan 2026
                </p>
                <h1
                  id="club-hero-heading"
                  className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
                >
                  {SVIP_CLUB_PAGE.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  {SVIP_CLUB_PAGE.heroIntro}
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  Official website:{" "}
                  <a
                    href={SVIP_CLUB_OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-amber-400 hover:text-amber-300"
                  >
                    https://svip-club.com/
                  </a>
                </p>
                <div className="mt-4">
                  <AffiliateDisclosure />
                </div>
                <LastUpdated className="mt-4" />
                <SvipClubCtaButtons className="mt-6" size="large" />
              </div>
              <figure className="relative mx-auto w-full max-w-sm md:max-w-md">
                <Image
                  src={CLUB_HERO_IMAGE.src}
                  alt={CLUB_HERO_IMAGE.alt}
                  width={CLUB_HERO_IMAGE.width}
                  height={CLUB_HERO_IMAGE.height}
                  priority
                  sizes="(max-width: 768px) 80vw, 448px"
                  className="mx-auto w-full rounded-[2rem] border border-white/10 object-contain shadow-2xl shadow-red-950/40"
                />
                <figcaption className="mt-3 text-center text-xs text-slate-500">
                  {CLUB_HERO_IMAGE.caption}
                </figcaption>
              </figure>
            </div>
          </section>

          <TableOfContentsAccordion items={CLUB_TOC} />

          <section
            aria-labelledby="club-overview-heading"
            className="border-b border-white/10 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-overview-heading"
                title="SVIP Club Casino Guide Overview"
                subtitle="What the official SVIP Club site publishes for Pakistani players — games, wallets, bonuses, and the app."
              />
              <ArticleProse paragraphs={CLUB_OVERVIEW} />
            </div>
          </section>

          <section aria-labelledby="club-quick-info-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-quick-info-heading"
                title="SVIP Club Quick Info"
                subtitle="Key facts taken from svip-club.com. Limits and bonuses can change — confirm in your account."
              />
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[540px] border-collapse text-left text-sm md:text-base">
                  <caption className="sr-only">SVIP Club Casino quick information for Pakistan</caption>
                  <tbody>
                    {CLUB_QUICK_INFO.map((row, index) => (
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
            aria-labelledby="what-is-club-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="what-is-club-heading"
                title="What Is SVIP Club Casino?"
                subtitle="A Pakistan online casino with app, browser play, local wallets, and live dealer tables."
              />
              <ArticleProse paragraphs={CLUB_WHAT_IS} />
            </div>
          </section>

          <section aria-labelledby="club-how-it-works-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-how-it-works-heading"
                title="How SVIP Club Works"
                subtitle="Four steps from the official site: register, deposit, play, and withdraw."
              />
              <ol className="grid gap-6 md:grid-cols-2">
                {CLUB_HOW_IT_WORKS.map((item) => (
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

          <section id="games" aria-labelledby="club-games-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-games-heading"
                title="A Wide Choice of Casino Games in Pakistan – Slots, Table Games, Live Casino, and Poker Tournaments"
                subtitle="Official categories: slots, table games, live casino, fishing games, and crash games."
              />
              <ArticleProse paragraphs={[CLUB_GAMES_INTRO]} className="mb-10" />
              <div className="space-y-8">
                {CLUB_GAMES.map((game) => (
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
            aria-labelledby="club-bonuses-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-bonuses-heading"
                title="Big Welcome Bonuses and Special Promotions to Make Your Gaming Experience More Fun and Rewarding"
                subtitle="Welcome match, reloads, cashback, VIP points, JazzCash/EasyPaisa extras, and Eid offers — always check current terms."
              />
              <div className="grid gap-5 sm:grid-cols-2">
                {CLUB_BONUSES.map((bonus) => (
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

          <section aria-labelledby="club-payments-heading" className="py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-payments-heading"
                title="Fast and Secure Payments with Multiple Options for Pakistani Players – Deposits and Withdrawals Made Easy"
                subtitle="EasyPaisa, JazzCash, HBL, UBL, MCB, cards, and crypto as listed on the official cashier."
              />
              <p className="mb-8 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                {CLUB_PAYMENTS_INTRO}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
                  <caption className="sr-only">SVIP Club payment methods for Pakistan</caption>
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
                    {CLUB_PAYMENT_ROWS.map((row, index) => (
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
            aria-labelledby="club-devices-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-devices-heading"
                title="Play Easily on Any Device – PC, Mobile, or Tablet with a Simple and Fast Website in Pakistan"
                subtitle="Official app for Android and iOS, plus instant browser play with no download."
              />
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {CLUB_DEVICES.map((feature) => (
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

          <SvipClubScreenshotsSection />
          <OtherSvipGamesSection currentPath="/svip-club" />

          <section
            aria-labelledby="club-why-choose-heading"
            className="py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-why-choose-heading"
                title="Why More Players in Pakistan Choose SVIP Club – Safe, Fair, and Full of Rewards"
                subtitle="Local wallets, live casino, and 24/7 Urdu support as described on the official site."
              />
              <ArticleProse paragraphs={CLUB_WHY_CHOOSE} />
            </div>
          </section>

          <section
            aria-labelledby="club-support-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-support-heading"
                title="Friendly Customer Support Available 24/7 to Help You with Any Questions or Problems"
                subtitle="Live chat, email, phone, and tickets in Urdu and English from the official Customer Services page."
              />
              <ArticleProse paragraphs={CLUB_SUPPORT} />
            </div>
          </section>

          <section
            aria-labelledby="club-safe-heading"
            className="py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-safe-heading"
                title="Why SVIP Club Casino Is the Most Trusted Online Casino in Pakistan for Safe Gaming, Fast Withdrawals, and Fair Play"
                subtitle="Operator claims on RNG, SSL, and 2FA — plus practical safety steps for Pakistan users."
              />
              <ArticleProse paragraphs={[CLUB_SAFE_INTRO]} className="mb-6" />
              <ul className="max-w-3xl list-disc space-y-2 pl-5 text-slate-300 md:text-base">
                {CLUB_SAFE_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>

          <section
            aria-labelledby="club-pros-cons-heading"
            className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-pros-cons-heading"
                title="SVIP Club Pros and Cons Summary"
                subtitle="A quick comparison before you register on the official site."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                  <h3 className="text-lg font-bold text-emerald-300 md:text-xl">Pros</h3>
                  <ul className="mt-4 space-y-3">
                    {CLUB_PROS.map((item) => (
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
                    {CLUB_CONS.map((item) => (
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

          <section
            aria-labelledby="club-conclusion-heading"
            className="py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-conclusion-heading"
                title="Why SVIP Club Is the Best Online Casino for Pakistani Players"
                subtitle="Final notes before you join via the official SVIP Club website."
              />
              <ArticleProse paragraphs={CLUB_CONCLUSION} />
            </div>
          </section>

          <section
            id="faq"
            aria-labelledby="club-faq-heading"
            className="border-t border-white/10 bg-slate-900/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <SectionHeading
                id="club-faq-heading"
                title="SVIP Club Frequently Asked Questions"
                subtitle="Official site, app download, EasyPaisa, JazzCash, bonuses, and support."
              />
              <FaqDetails faqs={CLUB_FAQS} />
            </div>
          </section>
        </article>

        <section
          aria-label="Call to action"
          className="border-y border-amber-400/20 bg-gradient-to-r from-indigo-950/80 to-slate-950 py-12"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ready to join SVIP Club Casino?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
              Use the official website, register with your mobile number or email, and start with a
              small EasyPaisa or JazzCash test deposit.
            </p>
            <SvipClubCtaButtons className="mt-6 justify-center" size="large" />
            <a
              href={SVIP_CLUB_OFFICIAL_URL}
              target="_blank"
              rel={AFFILIATE_LINK_REL}
              className="mt-4 text-sm text-amber-400 hover:text-amber-300"
            >
              Visit https://svip-club.com/
            </a>
          </div>
        </section>
        <DisclaimerSection />
      </main>
      <SiteFooter />
    </div>
  );
}
