"use client";

import { useId, useState } from "react";
import { ARTICLE_FAQS } from "@/lib/svipgems/article-content";

type FaqItem = {
  readonly question: string;
  readonly answer: string;
};

type FaqAccordionProps = {
  faqs?: readonly FaqItem[];
};

export function FaqAccordion({ faqs = ARTICLE_FAQS }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <article
            key={faq.question}
            className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-400 md:text-lg"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`shrink-0 text-amber-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-slate-400 md:text-base"
            >
              {faq.answer}
            </div>
          </article>
        );
      })}
    </div>
  );
}
