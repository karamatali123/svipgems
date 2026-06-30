import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { OG_IMAGE } from "@/lib/svipgems/images";

const OPEN_GRAPH_IMAGE = {
  url: OG_IMAGE.src,
  width: OG_IMAGE.width,
  height: OG_IMAGE.height,
  alt: OG_IMAGE.alt,
  type: "image/jpeg",
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createGuidePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: SITE_CONFIG.locale,
      url: canonical,
      siteName: SITE_CONFIG.name,
      title,
      description,
      publishedTime: SITE_CONFIG.datePublished,
      modifiedTime: SITE_CONFIG.dateModified,
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OPEN_GRAPH_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
