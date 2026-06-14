type ArticleTableProps = {
  caption: string;
  rows: readonly { readonly label: string; readonly value: string }[];
};

export function ArticleTable({ caption, rows }: ArticleTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm md:text-base">
        <caption className="sr-only">{caption}</caption>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className={index % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"}
            >
              <th
                scope="row"
                className="w-1/3 border-b border-white/5 px-4 py-3.5 font-semibold text-amber-300 md:px-6 md:py-4"
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
  );
}
