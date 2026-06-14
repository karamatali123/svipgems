import {
  DEPOSIT_INTRO,
  DEPOSIT_TABLE,
  DEPOSIT_WITHDRAW_INTRO,
  WITHDRAW_INTRO,
  WITHDRAW_TABLE,
} from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
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
        <SectionHeading id="deposit-withdraw-heading" title="Deposit and Withdraw Steps" />
        <ArticleProse paragraphs={[DEPOSIT_WITHDRAW_INTRO]} className="mb-10" />

        <h3 className="text-xl font-bold text-amber-300 md:text-2xl">How to Deposit</h3>
        <ArticleProse paragraphs={[DEPOSIT_INTRO]} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems deposit process" rows={DEPOSIT_TABLE} />

        <h3 className="mt-10 text-xl font-bold text-amber-300 md:text-2xl">Withdrawal Process</h3>
        <ArticleProse paragraphs={[WITHDRAW_INTRO]} className="mb-4 mt-4" />
        <ArticleTable caption="SVIP Gems withdrawal process" rows={WITHDRAW_TABLE} />
      </div>
    </section>
  );
}
