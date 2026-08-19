import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/svipgems/SiteFooter";
import { SiteHeader } from "@/components/svipgems/SiteHeader";
import { LastUpdated } from "@/components/svipgems/LastUpdated";
import { Breadcrumbs } from "@/components/svipgems/Breadcrumbs";
import { createGuidePageMetadata } from "@/lib/svipgems/page-metadata";

type TrustPageLayoutProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

export function TrustPageLayout({ title, description, path, children }: TrustPageLayoutProps) {
  const label = title.replace(" | SVIP Gems Guide", "");

  return (
    <div className="min-h-full bg-slate-950 text-slate-100">
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label, href: path }]} />
        <header className="mb-8 border-b border-white/10 pb-8">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
          <LastUpdated className="mt-4" />
        </header>
        <div className="prose prose-invert max-w-none space-y-4 text-slate-300 [&_a]:text-amber-400 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_li]:text-slate-300 [&_p]:leading-relaxed">
          {children}
        </div>
        <p className="mt-10 text-sm text-slate-500">
          <Link href="/" className="text-amber-400 hover:text-amber-300">
            ← Back to SVIP Gems guide
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

export function createTrustMetadata(title: string, description: string, path: string): Metadata {
  return createGuidePageMetadata({ title, description, path });
}
