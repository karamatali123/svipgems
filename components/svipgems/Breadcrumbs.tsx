import Link from "next/link";
import type { GuidePagePath } from "@/lib/svipgems/pages";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-slate-600">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="font-medium text-amber-300">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function getGuideBreadcrumbs(currentPath: GuidePagePath, currentLabel: string) {
  return [
    { label: "Home", href: "/" },
    { label: currentLabel, href: currentPath },
  ];
}
