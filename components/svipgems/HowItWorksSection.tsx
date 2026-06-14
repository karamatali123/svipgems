import { HOW_IT_WORKS_STEPS } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-heading" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="how-it-works-heading"
          title="How SVIP Gems Works"
          subtitle="Four simple steps from registration to withdrawal on SVIP Gems."
        />
        <ol className="grid gap-6 md:grid-cols-2">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-indigo-950/40 p-6 md:p-8"
            >
              <span
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-slate-900"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {item.content}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
