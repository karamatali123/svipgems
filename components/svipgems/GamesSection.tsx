import { GAMES } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

const riskColors: Record<string, string> = {
  Low: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "Low–Medium": "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
  Medium: "text-amber-300 bg-amber-400/10 border-amber-400/30",
  "Medium–High": "text-orange-300 bg-orange-400/10 border-orange-400/30",
  High: "text-red-300 bg-red-400/10 border-red-400/30",
};

export function GamesSection() {
  return (
    <section
      id="games"
      aria-labelledby="games-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="games-heading"
          title="Available Games on SVIP Gems"
          subtitle="Popular titles inside SVIP Gems with gameplay style, risk level, and session length."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game) => (
            <article
              key={game.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 p-5"
            >
              <h3 className="text-lg font-bold text-white">{game.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {game.gameplay}
              </p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-slate-500">Risk</dt>
                  <dd>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${riskColors[game.risk] ?? riskColors.Medium}`}
                    >
                      {game.risk}
                    </span>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-slate-500">Round Duration</dt>
                  <dd className="font-medium text-slate-300">{game.duration}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Suitable For</dt>
                  <dd className="mt-1 text-slate-300">{game.suitable}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
