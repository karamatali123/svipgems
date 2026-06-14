import {
  ARTICLE_FAQS,
  DOWNLOADING_TABLE,
  INSTALLATION_TABLE,
  REGISTRATION_STEPS,
} from "@/lib/svipgems/article-content";
import { CANONICAL_URL, DOWNLOAD_URL, SITE_CONFIG } from "@/lib/site-config";
import { getSchemaScreenshots, OG_IMAGE } from "@/lib/svipgems/images";
import { SITE_METADATA } from "@/lib/svipgems/metadata";

const PAGE_ID = `${CANONICAL_URL}/#webpage`;
const ORG_ID = `${SITE_CONFIG.url}/#organization`;

function getImageObject() {
  return {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}${OG_IMAGE.src}`,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    caption: OG_IMAGE.alt,
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": PAGE_ID,
    url: CANONICAL_URL,
    name: SITE_METADATA.title,
    description: SITE_METADATA.description,
    inLanguage: SITE_CONFIG.locale,
    datePublished: SITE_CONFIG.datePublished,
    dateModified: SITE_CONFIG.dateModified,
    primaryImageOfPage: getImageObject(),
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
    },
  };
}

export function getArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: SITE_METADATA.title,
    description: SITE_METADATA.description,
    image: getImageObject(),
    datePublished: SITE_CONFIG.datePublished,
    dateModified: SITE_CONFIG.dateModified,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": PAGE_ID },
    inLanguage: SITE_CONFIG.locale,
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.alternateName,
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    description:
      "SVIP Gems Game APK for Android — color prediction, slots, and casino-style games with Easypaisa and JazzCash support in Pakistan.",
    downloadUrl: DOWNLOAD_URL,
    screenshot: getSchemaScreenshots(SITE_CONFIG.url),
    image: `${SITE_CONFIG.url}${OG_IMAGE.src}`,
  };
}

export function getDownloadHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download SVIP Gems APK on Android",
    description:
      "Step-by-step guide to download and install the SVIP Gems Android APK in Pakistan.",
    image: `${SITE_CONFIG.url}${OG_IMAGE.src}`,
    totalTime: "PT5M",
    step: [...DOWNLOADING_TABLE, ...INSTALLATION_TABLE].map((row, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: row.label,
      text: row.value,
      url: DOWNLOAD_URL,
    })),
  };
}

export function getRegistrationHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Register and Login to SVIP Gems",
    description:
      "Create a SVIP Gems account with mobile OTP verification and secure password setup.",
    totalTime: "PT3M",
    step: REGISTRATION_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
      url: `${CANONICAL_URL}#registration-login-heading`,
    })),
  };
}

export function getFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ARTICLE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.alternateName,
    url: SITE_CONFIG.url,
    logo: getImageObject(),
    description: SITE_CONFIG.description,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SVIP Gems Game Download APK",
        item: CANONICAL_URL,
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.alternateName,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: SITE_CONFIG.locale,
    publisher: { "@id": ORG_ID },
  };
}

export function getAllSchemas() {
  return [
    { id: "webpage", data: getWebPageSchema() },
    { id: "article", data: getArticleSchema() },
    { id: "software", data: getSoftwareApplicationSchema() },
    { id: "howto-download", data: getDownloadHowToSchema() },
    { id: "howto-register", data: getRegistrationHowToSchema() },
    { id: "faq", data: getFaqPageSchema() },
    { id: "organization", data: getOrganizationSchema() },
    { id: "breadcrumb", data: getBreadcrumbSchema() },
    { id: "website", data: getWebSiteSchema() },
  ];
}
