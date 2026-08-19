import type { Metadata } from "next";
import Link from "next/link";
import { FaqDetails } from "@/components/svipgems/FaqDetails";
import { GuidePageLayout } from "@/components/svipgems/GuidePageLayout";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
import { ArticleTable } from "@/components/svipgems/article/ArticleTable";
import { WITHDRAWAL_PAGE } from "@/lib/svipgems/page-content";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";

export const metadata: Metadata = createGuidePageMetadata({
  title: WITHDRAWAL_PAGE.title,
  description: WITHDRAWAL_PAGE.description,
  path: "/withdrawal",
  keywords: [
    "SVIP Gems withdrawal",
    "SVIP Gems Easypaisa withdrawal",
    "SVIP Gems JazzCash withdrawal",
    "SVIP Gems minimum withdrawal",
  ],
});

const schema = getGuidePageSchema({
  path: "/withdrawal",
  title: WITHDRAWAL_PAGE.title,
  description: WITHDRAWAL_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Withdrawal", path: "/withdrawal" },
  ],
  faqs: WITHDRAWAL_PAGE.faqs,
  howToSteps: WITHDRAWAL_PAGE.withdrawSteps.map((row) => ({
    name: row.label,
    text: row.value,
  })),
  howToName: "How to withdraw from SVIP Gems to Easypaisa or JazzCash",
});

export default function WithdrawalPage() {
  return (
    <GuidePageLayout
      path="/withdrawal"
      title={WITHDRAWAL_PAGE.title}
      description={WITHDRAWAL_PAGE.description}
      breadcrumbLabel="Withdrawal"
      schema={schema}
    >
      {WITHDRAWAL_PAGE.intro.map((p) => (
        <p key={p.slice(0, 40)} className="mb-4 text-base leading-relaxed text-slate-300">
          {p}
        </p>
      ))}

      <SubSectionHeading id="withdrawal-limits" title="Withdrawal Limits & Timing" className="mt-8" />
      <div className="mt-4">
        <ArticleTable caption="SVIP Gems withdrawal limits" rows={WITHDRAWAL_PAGE.limitsTable} />
      </div>

      <SubSectionHeading id="withdrawal-steps" title="How to Withdraw from SVIP Gems" className="mt-10" />
      <p className="mb-4 mt-4 text-base text-slate-300">{WITHDRAWAL_PAGE.withdrawIntro}</p>
      <ArticleTable caption="SVIP Gems withdrawal steps" rows={WITHDRAWAL_PAGE.withdrawSteps} />

      <SubSectionHeading id="withdrawal-errors" title="Withdrawal Delayed — Common Causes" className="mt-10" />
      <ul className="mt-4 space-y-4">
        {WITHDRAWAL_PAGE.failureReasons.map((item) => (
          <li key={item.issue} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
            <strong className="text-white">{item.issue}</strong>
            <p className="mt-2 text-sm text-slate-400">{item.fix}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-slate-400">
        Need to add funds first? See our{" "}
        <Link href="/deposit" className="text-amber-400 hover:text-amber-300">
          deposit guide
        </Link>
        .
      </p>

      <section aria-labelledby="withdrawal-faq" className="mt-14">
        <h2 id="withdrawal-faq" className="text-2xl font-bold text-white">
          Withdrawal FAQ
        </h2>
        <div className="mt-6">
          <FaqDetails faqs={WITHDRAWAL_PAGE.faqs} />
        </div>
      </section>
    </GuidePageLayout>
  );
}
