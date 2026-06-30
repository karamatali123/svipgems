import { getLastUpdatedLabel, SITE_CONFIG } from "@/lib/site-config";

type LastUpdatedProps = {
  className?: string;
};

export function LastUpdated({ className = "" }: LastUpdatedProps) {
  return (
    <span className={`block text-sm text-slate-500 ${className}`.trim()}>
      Last updated:{" "}
      <time dateTime={SITE_CONFIG.dateModified}>{getLastUpdatedLabel()}</time>
    </span>
  );
}
