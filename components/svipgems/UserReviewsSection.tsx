import { REVIEWS } from "@/lib/svipgems/content";
import Link from "next/link";
import { SectionHeading } from "@/components/svipgems/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-amber-400" : "text-slate-600"} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function UserReviewsSection() {
  const preview = REVIEWS.slice(0, 3);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="border-y border-white/10 bg-slate-900/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="reviews-heading"
          title="SVIP Gems User Feedback — Pakistan"
          subtitle="Mixed ratings from reported user experiences — not verified by us. Earnings are not guaranteed."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {preview.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-6"
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
        <p className="mt-8 text-center text-sm text-slate-400">
          <Link href="/review" className="font-medium text-amber-400 hover:text-amber-300">
            Read the full SVIP Gems review and real-or-fake analysis →
          </Link>
        </p>
      </div>
    </section>
  );
}
