function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return "https://svipgems.com.pk";
}

export const SITE_CONFIG = {
  name: "SVIP Gems",
  alternateName: "SVIPGEMS",
  url: getSiteUrl(),
  description:
    "Complete Pakistan guide for SVIP Gems download APK, login, Easypaisa & JazzCash withdrawal, bonuses, and honest reviews for 2026.",
  locale: "en-PK",
  datePublished: "2026-01-15",
  dateModified: "2026-06-23",
} as const;

export const CANONICAL_URL = `${SITE_CONFIG.url}/`;

export const DOWNLOAD_URL =
  "https://share1SvipGems.net?pid=457517832&channel=2028066&pkg=com.svipgems066.app";

export function getLastUpdatedLabel() {
  return new Intl.DateTimeFormat("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Karachi",
  }).format(new Date(SITE_CONFIG.dateModified));
}

export function getRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.url}/sitemap.xml
`;
}

export function getSitemapXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_CONFIG.url}/</loc>
    <lastmod>${SITE_CONFIG.dateModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
}
