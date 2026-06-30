type SubSectionHeadingProps = {
  id?: string;
  title: string;
  className?: string;
};

export function SubSectionHeading({ id, title, className = "" }: SubSectionHeadingProps) {
  return (
    <h3
      id={id}
      className={`text-xl font-bold text-amber-300 md:text-2xl ${className}`.trim()}
    >
      {title}
    </h3>
  );
}
