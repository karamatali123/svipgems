"use client";

import { useId, useState } from "react";
import { TABLE_OF_CONTENTS } from "@/lib/svipgems/toc";

export function TableOfContentsAccordion() {
  const baseId = useId();
  const [isOpen, setIsOpen] = useState(true);
  const buttonId = `${baseId}-toc-button`;
  const panelId = `${baseId}-toc-panel`;

  return (
    <section
      aria-labelledby={`${baseId}-toc-title`}
      className="border-b border-white/10 bg-slate-900/50 py-6 md:py-8"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id={`${baseId}-toc-title`} className="sr-only">
          Table of contents
        </h2>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
          <button
            id={buttonId}
            type="button"
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-400 md:px-6 md:text-lg"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span>Table of Contents</span>
            <span
              className={`shrink-0 text-amber-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          <nav
            id={panelId}
            aria-labelledby={buttonId}
            hidden={!isOpen}
            className="border-t border-white/10"
          >
            <ol className="divide-y divide-white/10">
              {TABLE_OF_CONTENTS.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-5 py-3.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-400 md:px-6 md:py-4 md:text-base"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-amber-400/30 bg-amber-400/10 text-xs font-bold text-amber-300">
                      {index + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
