import { useEffect } from "react";
import type { SEOProps } from "../../../types";
import { SEO_CONFIG } from "../../../constants";

interface SEOComponentProps extends SEOProps {
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  structuredData,
}: SEOComponentProps) {
  useEffect(() => {
    // Update document title
    const fullTitle = title
      ? `${title} | ${SEO_CONFIG.siteName}`
      : SEO_CONFIG.defaultTitle;
    document.title = fullTitle;

    // Update meta tags
    const metaTags = [
      {
        name: "description",
        content: description || SEO_CONFIG.defaultDescription,
      },
      { name: "keywords", content: keywords || SEO_CONFIG.keywords },
      { property: "og:title", content: fullTitle },
      {
        property: "og:description",
        content: description || SEO_CONFIG.defaultDescription,
      },
      { property: "og:image", content: ogImage || SEO_CONFIG.ogImage },
      { name: "twitter:title", content: fullTitle },
      {
        name: "twitter:description",
        content: description || SEO_CONFIG.defaultDescription,
      },
      { name: "twitter:image", content: ogImage || SEO_CONFIG.ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        if (name) element.name = name;
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.content = content;
    });

    // Update canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (!canonicalElement) {
        canonicalElement = document.createElement("link");
        canonicalElement.rel = "canonical";
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.href = canonical;
    }

    // Update structured data
    if (structuredData) {
      let structuredDataElement = document.querySelector(
        'script[type="application/ld+json"]#page-structured-data'
      ) as HTMLScriptElement;
      if (!structuredDataElement) {
        structuredDataElement = document.createElement("script");
        structuredDataElement.type = "application/ld+json";
        structuredDataElement.id = "page-structured-data";
        document.head.appendChild(structuredDataElement);
      }
      structuredDataElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, canonical, structuredData]);

  return null;
}
