import { getLastUpdatedLabel, SITE_CONFIG } from "@/lib/site-config";

type LastUpdatedProps = {
  className?: string;
};

export function LastUpdated({ className = "" }: LastUpdatedProps) {
  return (
    <p className={`text-sm text-slate-500 ${className}`}>
      Last updated:{" "}
      <time dateTime={SITE_CONFIG.dateModified}>{getLastUpdatedLabel()}</time>
    </p>
  );
}
