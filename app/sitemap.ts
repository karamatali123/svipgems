import type { MetadataRoute } from "next";
import { GUIDE_PAGES } from "@/lib/svipgems/pages";
import { SITE_CONFIG } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_CONFIG.dateModified);

  return [
    {
      url: SITE_CONFIG.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...GUIDE_PAGES.map((page) => ({
      url: `${SITE_CONFIG.url}${page.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
