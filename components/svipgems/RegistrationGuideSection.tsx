import { REGISTRATION_STEPS } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

export function RegistrationGuideSection() {
  return (
    <section
      id="login"
      aria-labelledby="login-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="login-heading"
          title="SVIP Gems Login & Registration Guide"
          subtitle="Create your SVIP Gems account with phone verification and secure password setup."
        />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REGISTRATION_STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                Step {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
