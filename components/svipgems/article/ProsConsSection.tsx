import { CONS, PROS } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function ProsConsSection() {
  return (
    <section aria-labelledby="pros-cons-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="pros-cons-heading" title="Pros and Cons" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-emerald-300 md:text-xl">Pros</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 md:text-base">
              {PROS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-300 md:text-xl">Cons</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 md:text-base">
              {CONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
