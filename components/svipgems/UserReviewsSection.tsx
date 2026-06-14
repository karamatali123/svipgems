import { REVIEWS } from "@/lib/svipgems/content";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-amber-400" : "text-slate-600"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function UserReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="reviews-heading"
          title="SVIP Gems User Reviews — Pakistan"
          subtitle="Mixed feedback from Punjab, Sindh, KPK, Gilgit-Baltistan, and Balochistan."
        />
        <div className="mb-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[540px] border-collapse text-left text-sm md:text-base">
            <caption className="sr-only">SVIP Gems user review summary by region</caption>
            <thead>
              <tr className="bg-indigo-950/60">
                <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6">
                  Region
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6">
                  Rating
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-amber-300 md:px-6">
                  Summary
                </th>
              </tr>
            </thead>
            <tbody>
              {REVIEWS.map((review, index) => (
                <tr
                  key={review.name}
                  className={index % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"}
                >
                  <th
                    scope="row"
                    className="border-t border-white/5 px-4 py-3.5 font-semibold text-white md:px-6"
                  >
                    {review.region}
                  </th>
                  <td className="border-t border-white/5 px-4 py-3.5 md:px-6">
                    <StarRating rating={review.rating} />
                  </td>
                  <td className="border-t border-white/5 px-4 py-3.5 text-slate-300 md:px-6">
                    {review.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              cite={`#review-${review.name}`}
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300 md:text-base">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 border-t border-white/10 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-white">{review.name}</span>
                  <span className="block text-xs text-slate-500">{review.region}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
