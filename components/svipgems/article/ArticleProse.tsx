type ArticleProseProps = {
  paragraphs: readonly string[];
  className?: string;
};

export function ArticleProse({ paragraphs, className = "" }: ArticleProseProps) {
  return (
    <div className={`max-w-3xl space-y-4 text-base leading-relaxed text-slate-300 md:text-lg ${className}`}>
      {paragraphs.map((text) => (
        <p key={text.slice(0, 40)}>{text}</p>
      ))}
    </div>
  );
}
