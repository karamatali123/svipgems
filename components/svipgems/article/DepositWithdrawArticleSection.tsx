import {
  DEPOSIT_INTRO,
  DEPOSIT_TABLE,
  DEPOSIT_WITHDRAW_INTRO,
  WITHDRAW_INTRO,
  WITHDRAW_TABLE,
} from "@/lib/svipgems/article-content";
import { GuideReadMoreLink } from "@/components/svipgems/GuideReadMoreLink";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { SubSectionHeading } from "@/components/svipgems/SubSectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";
import { ArticleTable } from "@/components/svipgems/article/ArticleTable";

export function DepositWithdrawArticleSection() {
  return (
    <section
      id="withdrawal"
      aria-labelledby="deposit-withdraw-heading"
      className="py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="deposit-withdraw-heading"
          title="SVIP Gems Deposit and Withdrawal Guide"
          subtitle="How to add funds and cash out winnings using Easypaisa or JazzCash in Pakistan."
        />
        <ArticleProse paragraphs={[DEPOSIT_WITHDRAW_INTRO]} className="mb-10" />

        <SubSectionHeading id="deposit-steps-heading" title="How to Deposit Money" />
        <ArticleProse paragraphs={[DEPOSIT_INTRO]} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems deposit process" rows={DEPOSIT_TABLE} />

        <SubSectionHeading id="withdrawal-steps-heading" title="How to Withdraw Winnings" className="mt-10" />
        <ArticleProse paragraphs={[WITHDRAW_INTRO]} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems withdrawal process" rows={WITHDRAW_TABLE} />
        <GuideReadMoreLink href="/withdrawal" label="SVIP Gems Deposit & Withdrawal Guide" />
      </div>
    </section>
  );
}
