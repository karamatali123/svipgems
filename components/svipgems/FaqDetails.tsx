type FaqItem = {
  readonly question: string;
  readonly answer: string;
};

type FaqDetailsProps = {
  faqs: readonly FaqItem[];
};

export function FaqDetails({ faqs }: FaqDetailsProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900/60"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-400 md:text-lg [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <span
              className="shrink-0 text-amber-400 transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              ▼
            </span>
          </summary>
          <div className="border-t border-white/5 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-400 md:text-base">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
