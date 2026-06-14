import { PAYMENT_COMPARISON } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function DepositWithdrawalSection() {
  return (
    <section
      id="withdrawal"
      aria-labelledby="withdrawal-heading"
      className="py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="withdrawal-heading"
          title="SVIP Gems Deposit & Withdrawal System"
          subtitle="Easypaisa, JazzCash, and bank options — processing times, verification, and common delays."
        />
        <p className="mb-8 text-base text-slate-300 md:text-lg">
          Deposit and withdraw via <strong className="text-white">Easypaisa</strong> or{" "}
          <strong className="text-white">JazzCash</strong>. Min withdrawal PKR 200+. Typical time:{" "}
          <strong className="text-white">10–30 minutes</strong>.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
            <caption className="sr-only">
              SVIP Gems payment methods comparison for Pakistan
            </caption>
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
              {PAYMENT_COMPARISON.map((row, index) => (
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
  );
}
