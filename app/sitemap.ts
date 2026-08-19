import type { MetadataRoute } from "next";
import { ALL_INDEXABLE_PATHS } from "@/lib/svipgems/pages";
import { SITE_CONFIG, getPageLastModified } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_INDEXABLE_PATHS.map((path) => ({
    url: path === "/" ? SITE_CONFIG.url : `${SITE_CONFIG.url}${path}`,
    lastModified: getPageLastModified(path),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.9,
  }));
}
