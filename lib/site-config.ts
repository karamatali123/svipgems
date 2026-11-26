function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return "https://svipgems.com.pk";
}

export const SITE_CONFIG = {
  name: "SVIP Gems Guide",
  alternateName: "SVIPGEMS",
  url: getSiteUrl(),
  description:
    "Complete Pakistan guide for SVIP Gems download APK, login, Easypaisa & JazzCash withdrawal, bonuses, and honest reviews for 2026.",
  locale: "en-PK",
  datePublished: "2026-01-15",
  dateModified: "2026-11-25",
  contactEmail: "support@svipgems.com.pk",
  author: {
    name: "Ali Hassan",
    slug: "ali-hassan",
    role: "Mobile Apps Editor — Pakistan",
    bio: "Ali covers Android earning apps, APK safety, and mobile wallet payments for Pakistan users. He tests deposit and withdrawal flows before publishing guides.",
  },
} as const;

export const AFFILIATE_LINK_REL = "noopener noreferrer sponsored nofollow";

export const CANONICAL_URL = `${SITE_CONFIG.url}/`;

export const DOWNLOAD_URL =
  "https://share1svipgems.net/?pid=457517832&channel=2028046&pkg=com.svipgems046.app";

/** Per-page lastmod for sitemap — update when a page is edited */
export const PAGE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-11-25",
  "/download": "2026-08-19",
  "/login": "2026-08-19",
  "/deposit": "2026-08-19",
  "/withdrawal": "2026-08-19",
  "/review": "2026-08-19",
  "/about": "2026-08-19",
  "/contact": "2026-08-19",
  "/privacy-policy": "2026-08-19",
  "/terms": "2026-08-19",
};

export function getLastUpdatedLabel() {
  return new Intl.DateTimeFormat("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Karachi",
  }).format(new Date(SITE_CONFIG.dateModified));
}

export function getPageLastModified(path: string) {
  return new Date(PAGE_LAST_MODIFIED[path] ?? SITE_CONFIG.dateModified);
}
