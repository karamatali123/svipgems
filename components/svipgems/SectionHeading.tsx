type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-8 md:mb-10">
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-white md:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}
