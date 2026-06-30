import type { Metadata } from "next";
import { FaqAccordion } from "@/components/svipgems/FaqAccordion";
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
    "SVIP Gems Withdrawal",
    "SVIP Gems Easypaisa",
    "SVIP Gems JazzCash",
    "SVIP Gems minimum withdrawal",
    "SVIP Gems deposit",
  ],
});

const schema = getGuidePageSchema({
  path: "/withdrawal",
  title: WITHDRAWAL_PAGE.title,
  description: WITHDRAWAL_PAGE.description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Deposit & Withdrawal", path: "/withdrawal" },
  ],
  faqs: WITHDRAWAL_PAGE.faqs,
  howToSteps: WITHDRAWAL_PAGE.withdrawSteps.map((row) => ({
    name: row.label,
    text: row.value,
  })),
  howToName: "How to Withdraw from SVIP Gems",
});

export default function WithdrawalPage() {
  return (
    <GuidePageLayout
      path="/withdrawal"
      title={WITHDRAWAL_PAGE.title}
      description={WITHDRAWAL_PAGE.description}
      breadcrumbLabel="Deposit & Withdrawal"
      schema={schema}
    >
      {WITHDRAWAL_PAGE.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-slate-300">
          {paragraph}
        </p>
      ))}

      <SubSectionHeading id="payment-methods" title="Supported Payment Methods" className="mt-8" />
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[540px] border-collapse text-left text-sm md:text-base">
          <caption className="sr-only">SVIP Gems payment methods comparison</caption>
          <thead>
            <tr className="bg-indigo-950/60">
              <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6">
                Method
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6">
                Deposit
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6">
                Withdrawal
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {WITHDRAWAL_PAGE.paymentComparison.map((row, index) => (
              <tr
                key={row.method}
                className={index % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"}
              >
                <th scope="row" className="border-t border-white/5 px-4 py-3.5 font-semibold text-white md:px-6">
                  {row.method}
                </th>
                <td className="border-t border-white/5 px-4 py-3.5 text-slate-300 md:px-6">
                  {row.deposit}
                </td>
                <td className="border-t border-white/5 px-4 py-3.5 text-slate-300 md:px-6">
                  {row.withdrawal}
                </td>
                <td className="border-t border-white/5 px-4 py-3.5 text-slate-300 md:px-6">
                  {row.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SubSectionHeading id="deposit-steps" title="How to Deposit" className="mt-10" />
      <div className="mt-4">
        <ArticleTable caption="SVIP Gems deposit steps" rows={WITHDRAWAL_PAGE.depositSteps} />
      </div>

      <SubSectionHeading id="withdraw-steps" title="How to Withdraw" className="mt-10" />
      <p className="mb-4 mt-4 text-base text-slate-300">{WITHDRAWAL_PAGE.withdrawIntro}</p>
      <ArticleTable caption="SVIP Gems withdrawal steps" rows={WITHDRAWAL_PAGE.withdrawSteps} />

      <section aria-labelledby="withdrawal-faq-heading" className="mt-14">
        <h2 id="withdrawal-faq-heading" className="text-2xl font-bold text-white">
          Deposit & Withdrawal FAQ
        </h2>
        <div className="mt-6">
          <FaqAccordion faqs={WITHDRAWAL_PAGE.faqs} />
        </div>
      </section>
    </GuidePageLayout>
  );
}
