export const SITE_CONFIG = {
  name: "SVIP Gems",
  alternateName: "SVIPGEMS",
  url: "https://www.svipgems.com",
  description:
    "Complete Pakistan guide for SVIP Gems download APK, login, Easypaisa & JazzCash withdrawal, bonuses, and honest reviews for 2026.",
  locale: "en-PK",
  datePublished: "2026-01-15",
  dateModified: "2026-06-14",
} as const;

export const CANONICAL_URL = SITE_CONFIG.url;

export const DOWNLOAD_URL =
  "https://share1svipgems.top/?pid=413237249&channel=2028066&pkg=com.svipgems066.app";

export function getLastUpdatedLabel() {
  return new Intl.DateTimeFormat("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Karachi",
  }).format(new Date(SITE_CONFIG.dateModified));
}
