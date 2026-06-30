import Link from "next/link";

type GuideReadMoreLinkProps = {
  href: string;
  label: string;
};

export function GuideReadMoreLink({ href, label }: GuideReadMoreLinkProps) {
  return (
    <p className="mt-8 text-sm text-slate-400">
      For a full dedicated guide, see{" "}
      <Link href={href} className="font-medium text-amber-400 transition hover:text-amber-300">
        {label}
      </Link>
      .
    </p>
  );
}
