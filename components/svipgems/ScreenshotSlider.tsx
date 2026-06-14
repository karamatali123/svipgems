"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { SCREENSHOTS } from "@/lib/svipgems/images";

export function ScreenshotSlider() {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const total = SCREENSHOTS.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  const active = SCREENSHOTS[activeIndex];
  const displayWidth = Math.max(active.width * 3, 720);
  const displayHeight = Math.round(active.height * (displayWidth / active.width));

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80"
        aria-roledescription="carousel"
        aria-label="SVIP Gems app screenshots"
      >
        <figure className="relative flex min-h-[360px] flex-col items-center justify-center px-4 py-8 md:min-h-[520px] md:px-8 md:py-12">
          <div
            id={`${baseId}-slider-panel`}
            className="flex h-[300px] w-full max-w-5xl items-center justify-center md:h-[440px]"
          >
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={displayWidth}
              height={displayHeight}
              className="h-full w-full rounded-xl object-contain shadow-lg"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority={activeIndex === 0}
              quality={90}
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-slate-400">
            <span className="font-medium text-amber-300">{active.caption}</span>
            <span className="mx-2 text-slate-600" aria-hidden="true">
              ·
            </span>
            <span>
              {activeIndex + 1} of {total}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:border-amber-400/40 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          aria-controls={`${baseId}-slider-panel`}
          aria-label="Previous screenshot"
        >
          ← Prev
        </button>

        <div
          className="flex flex-1 flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Screenshot slides"
        >
          {SCREENSHOTS.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${shot.caption}`}
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex
                  ? "w-8 bg-amber-400"
                  : "w-2.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:border-amber-400/40 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          aria-controls={`${baseId}-slider-panel`}
          aria-label="Next screenshot"
        >
          Next →
        </button>
      </div>

      <ul className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-7" aria-label="Screenshot thumbnails">
        {SCREENSHOTS.map((shot, index) => (
          <li key={shot.src}>
            <button
              type="button"
              onClick={() => goTo(index)}
              className={`block w-full overflow-hidden rounded-lg border-2 transition ${
                index === activeIndex
                  ? "border-amber-400"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`View ${shot.caption}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <Image
                src={shot.src}
                alt=""
                width={shot.width}
                height={shot.height}
                loading="lazy"
                className="h-20 w-full object-cover object-center md:h-24"
                sizes="120px"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
