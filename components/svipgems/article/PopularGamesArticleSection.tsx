import { POPULAR_GAMES, POPULAR_GAMES_INTRO } from "@/lib/svipgems/article-content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";
import { ArticleProse } from "@/components/svipgems/article/ArticleProse";

export function PopularGamesArticleSection() {
  return (
    <section id="games" aria-labelledby="popular-games-heading" className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="popular-games-heading"
          title="Popular Games to Play on svip gems"
        />
        <ArticleProse paragraphs={[POPULAR_GAMES_INTRO]} className="mb-10" />
        <div className="space-y-8">
          {POPULAR_GAMES.map((game) => (
            <article key={game.title}>
              <h3 className="text-lg font-bold text-white md:text-xl">{game.title}</h3>
              <ArticleProse paragraphs={game.paragraphs} className="mt-3" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
