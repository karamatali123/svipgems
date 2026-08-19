import type { Metadata } from "next";
import Link from "next/link";
import { FaqDetails } from "@/components/svipgems/FaqDetails";
import { GuidePageLayout } from "@/components/svipgems/GuidePageLayout";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
import { ArticleTable } from "@/components/svipgems/article/ArticleTable";
import { DEPOSIT_PAGE } from "@/lib/svipgems/page-content";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";

export const metadata: Metadata = createGuidePageMetadata({
  title: DEPOSIT_PAGE.title,
  description: DEPOSIT_PAGE.description,
  path: "/deposit",
  keywords: ["SVIP Gems deposit", "SVIP Gems minimum deposit", "SVIP Gems Easypaisa", "SVIP Gems JazzCash"],
});

const schema = getGuidePageSchema({
  path: "/deposit",
  title: DEPOSIT_PAGE.title,
  description: DEPOSIT_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Deposit", path: "/deposit" },
  ],
  faqs: DEPOSIT_PAGE.faqs,
  howToSteps: DEPOSIT_PAGE.depositSteps.map((row) => ({ name: row.label, text: row.value })),
  howToName: "How to deposit money on SVIP Gems",
});

export default function DepositPage() {
  return (
    <GuidePageLayout
      path="/deposit"
      title={DEPOSIT_PAGE.title}
      description={DEPOSIT_PAGE.description}
      breadcrumbLabel="Deposit"
      schema={schema}
    >
      {DEPOSIT_PAGE.intro.map((p) => (
        <p key={p.slice(0, 40)} className="mb-4 text-base leading-relaxed text-slate-300">
          {p}
        </p>
      ))}

      <SubSectionHeading id="deposit-limits" title="Deposit Limits & Timing" className="mt-8" />
      <div className="mt-4">
        <ArticleTable caption="SVIP Gems deposit limits" rows={DEPOSIT_PAGE.limitsTable} />
      </div>

      <SubSectionHeading id="deposit-steps" title="How to Deposit on SVIP Gems" className="mt-10" />
      <div className="mt-4">
        <ArticleTable caption="SVIP Gems deposit steps" rows={DEPOSIT_PAGE.depositSteps} />
      </div>

      <SubSectionHeading id="deposit-errors" title="Deposit Not Credited — Fixes" className="mt-10" />
      <ul className="mt-4 space-y-4">
        {DEPOSIT_PAGE.failureReasons.map((item) => (
          <li key={item.issue} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
            <strong className="text-white">{item.issue}</strong>
            <p className="mt-2 text-sm text-slate-400">{item.fix}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-slate-400">
        For withdrawals see our{" "}
        <Link href="/withdrawal" className="text-amber-400 hover:text-amber-300">
          withdrawal guide
        </Link>
        .
      </p>

      <section aria-labelledby="deposit-faq" className="mt-14">
        <h2 id="deposit-faq" className="text-2xl font-bold text-white">
          Deposit FAQ
        </h2>
        <div className="mt-6">
          <FaqDetails faqs={DEPOSIT_PAGE.faqs} />
        </div>
      </section>
    </GuidePageLayout>
  );
}
