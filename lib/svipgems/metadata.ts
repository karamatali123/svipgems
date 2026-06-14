import type { Metadata, Viewport } from "next";
import { CANONICAL_URL, SITE_CONFIG } from "@/lib/site-config";
import { OG_IMAGE } from "@/lib/svipgems/images";

const OPEN_GRAPH_IMAGE = {
  url: OG_IMAGE.src,
  width: OG_IMAGE.width,
  height: OG_IMAGE.height,
  alt: OG_IMAGE.alt,
  type: "image/jpeg",
} as const;

const SHARED_OPEN_GRAPH = {
  type: "website" as const,
  locale: SITE_CONFIG.locale,
  url: CANONICAL_URL,
  siteName: SITE_CONFIG.name,
  publishedTime: SITE_CONFIG.datePublished,
  modifiedTime: SITE_CONFIG.dateModified,
  images: [OPEN_GRAPH_IMAGE],
};

export const SITE_METADATA = {
  title:
    "SVIP Gems Game Download APK (2026) – Login, Withdrawal & Review Pakistan",
  description:
    "Download SVIP Gems APK for Android. Pakistan guide for login, Easypaisa & JazzCash withdrawal, bonus 2026, user reviews, real or fake analysis, and FAQ.",
  keywords: [
    "SVIP Gems",
    "SVIP Gems Game Download APK",
    "SVIP Gems Login",
    "SVIP Gems Review Pakistan",
    "SVIP Gems Real or Fake",
    "SVIP Gems Easypaisa Withdrawal",
    "SVIP Gems JazzCash Withdrawal",
    "SVIP Gems Bonus 2026",
    "SVIPGEMS",
    "SVIP Gems APK",
    "SVIP Gems Pakistan",
    "SVIP Gems customer care",
    "SVIP Gems minimum withdrawal",
  ],
  ogTitle: "SVIP Gems Game Download APK (2026) – Official Pakistan Guide",
  ogDescription:
    "SVIP Gems APK download, login, Easypaisa & JazzCash withdrawal, bonuses, and honest Pakistan reviews for Android users.",
  twitterTitle: "SVIP Gems Download APK 2026 – Pakistan Guide",
  twitterDescription:
    "Complete SVIP Gems guide: APK download, login, Easypaisa withdrawal, JazzCash, bonuses & user reviews.",
} as const;

export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_METADATA.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Games",
  keywords: [...SITE_METADATA.keywords],
  alternates: {
    canonical: CANONICAL_URL,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml", sizes: "180x180" }],
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: SITE_METADATA.ogTitle,
    description: SITE_METADATA.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.twitterTitle,
    description: SITE_METADATA.twitterDescription,
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const homePageMetadata: Metadata = {
  title: {
    absolute: SITE_METADATA.title,
  },
  description: SITE_METADATA.description,
  keywords: [...SITE_METADATA.keywords],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: SITE_METADATA.ogTitle,
    description: SITE_METADATA.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.twitterTitle,
    description: SITE_METADATA.twitterDescription,
    images: [OPEN_GRAPH_IMAGE.url],
  },
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};
