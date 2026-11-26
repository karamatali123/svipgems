import type { MetadataRoute } from "next";
import { SITE_CONFIG, getPageLastModified } from "@/lib/site-config";
import {
  ALL_INDEXABLE_PATHS,
  GUIDE_PAGES,
  RELATED_GAME_PAGES,
} from "@/lib/svipgems/pages";

const RELATED_GAME_PATHS = new Set<string>(RELATED_GAME_PAGES.map((page) => page.path));
const GUIDE_PATHS = new Set<string>(GUIDE_PAGES.map((page) => page.path));

function getSitemapPriority(path: string): number {
  if (path === "/") {
    return 1;
  }
  if (RELATED_GAME_PATHS.has(path)) {
    return 0.9;
  }
  if (GUIDE_PATHS.has(path)) {
    return 0.8;
  }
  return 0.4;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_INDEXABLE_PATHS.map((path) => ({
    url: path === "/" ? SITE_CONFIG.url : `${SITE_CONFIG.url}${path}`,
    lastModified: getPageLastModified(path),
    changeFrequency: "weekly" as const,
    priority: getSitemapPriority(path),
  }));
}
