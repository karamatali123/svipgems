import { QUICK_INFO } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function QuickInfoTable() {
  return (
    <section aria-labelledby="quick-info-heading" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="quick-info-heading"
          title="SVIP Gems Quick Info"
          subtitle="Key details about the SVIP Gems app version, deposits, withdrawals, and payment support in Pakistan."
        />
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[540px] border-collapse text-left text-sm md:text-base">
            <caption className="sr-only">
              SVIP Gems Game quick information table for Pakistan users
            </caption>
            <tbody>
              {QUICK_INFO.map((row, index) => (
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
  );
}
