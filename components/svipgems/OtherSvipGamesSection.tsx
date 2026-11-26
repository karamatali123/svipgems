import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { getOtherSvipGames } from "@/lib/svipgems/game-cards";

type OtherSvipGamesSectionProps = {
  currentPath: string;
};

export function OtherSvipGamesSection({ currentPath }: OtherSvipGamesSectionProps) {
  const games = getOtherSvipGames(currentPath);

  if (games.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="other-svip-games-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="other-svip-games-heading"
          title="Other SVIP Games"
          subtitle="More titles in the same SVIP family — open a guide to compare download, wallets, and bonuses."
        />
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {games.map((game) => (
            <li key={game.path}>
              <Link
                href={game.path}
                className="group flex h-full items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-3 transition hover:border-amber-400/40 hover:bg-slate-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-slate-900">
                  <Image
                    src={game.image.src}
                    alt={game.image.alt}
                    width={game.image.width}
                    height={game.image.height}
                    className="h-full w-full object-contain p-1.5"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-white group-hover:text-amber-300">
                    {game.name}
                  </h3>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-slate-400">
                    {game.blurb}
                  </p>
                  <span className="mt-1 inline-block text-xs font-medium text-amber-400 group-hover:text-amber-300">
                    Open guide →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
