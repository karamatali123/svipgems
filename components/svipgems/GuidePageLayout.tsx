import Script from "next/script";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/svipgems/Breadcrumbs";
import { CTAButtons } from "@/components/svipgems/CTAButtons";
import { DisclaimerSection } from "@/components/svipgems/DisclaimerSection";
import { LastUpdated } from "@/components/svipgems/LastUpdated";
import { RelatedGuides } from "@/components/svipgems/RelatedGuides";
import { SiteFooter } from "@/components/svipgems/SiteFooter";
import { SiteHeader } from "@/components/svipgems/SiteHeader";
import type { GuidePagePath } from "@/lib/svipgems/pages";
import { getGuidePageSchema } from "@/lib/svipgems/page-schema";

type GuidePageLayoutProps = {
  path: GuidePagePath;
  title: string;
  description: string;
  breadcrumbLabel: string;
  schema: ReturnType<typeof getGuidePageSchema>;
  children: ReactNode;
};

export function GuidePageLayout({
  path,
  title,
  description,
  breadcrumbLabel,
  schema,
  children,
}: GuidePageLayoutProps) {
  return (
    <div className="min-h-full bg-slate-950 text-slate-100">
      <Script
        id={`schema-${path.replace(/\//g, "")}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <main id="main-content">
        <article
          itemScope
          itemType="https://schema.org/Article"
          className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14"
        >
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: breadcrumbLabel, href: path },
            ]}
          />
          <header className="mb-10 border-b border-white/10 pb-8">
            <p className="mb-3 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300">
              Pakistan Guide · 2026
            </p>
            <h1
              itemProp="headline"
              className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl"
            >
              {title}
            </h1>
            <p
              itemProp="description"
              className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {description}
            </p>
            <LastUpdated className="mt-4" />
            <CTAButtons className="mt-6" size="large" />
          </header>
          {children}
          <div className="mt-12">
            <RelatedGuides currentPath={path} />
          </div>
        </article>
        <DisclaimerSection />
      </main>
      <SiteFooter />
    </div>
  );
}
