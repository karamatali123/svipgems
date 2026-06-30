import { SITE_CONFIG } from "@/lib/site-config";
import { OG_IMAGE } from "@/lib/svipgems/images";

type FaqItem = { question: string; answer: string };

type BreadcrumbItem = { name: string; path: string };

type PageSchemaInput = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: readonly FaqItem[];
  howToSteps?: readonly { name: string; text: string }[];
  howToName?: string;
};

function getImageObject() {
  return {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}${OG_IMAGE.src}`,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    caption: OG_IMAGE.alt,
  };
}

export function getGuidePageSchema({
  path,
  title,
  description,
  breadcrumbs,
  faqs,
  howToSteps,
  howToName,
}: PageSchemaInput) {
  const url = `${SITE_CONFIG.url}${path}`;
  const pageId = `${url}#webpage`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: title,
      description,
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_CONFIG.url}${crumb.path}`,
      })),
    },
    {
      "@type": "Article",
      headline: title,
      description,
      image: getImageObject(),
      datePublished: SITE_CONFIG.datePublished,
      dateModified: SITE_CONFIG.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      mainEntityOfPage: { "@id": pageId },
      inLanguage: SITE_CONFIG.locale,
    },
  ];

  if (howToSteps && howToSteps.length > 0) {
    graph.push({
      "@type": "HowTo",
      name: howToName ?? title,
      description,
      image: `${SITE_CONFIG.url}${OG_IMAGE.src}`,
      step: howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
        url,
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
