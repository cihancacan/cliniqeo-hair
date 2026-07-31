import { useEffect } from 'react';

interface Alternate {
  lang: string;
  path: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  lang: 'fr' | 'en';
  keywords?: string[];
  alternates?: Alternate[];
  image?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = 'Cliniqeo Hair';
const DEFAULT_ORIGIN = 'https://cliniqeo-hair.vercel.app';

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

export default function SEOHead({
  title,
  description,
  path,
  lang,
  keywords = [],
  alternates = [],
  image,
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    const origin = window.location.origin || DEFAULT_ORIGIN;
    const canonical = `${origin}${path}`;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.documentElement.lang = lang;
    document.title = fullTitle;

    setMeta('meta[name="description"]', { name: 'description', content: description });
    if (keywords.length) {
      setMeta('meta[name="keywords"]', { name: 'keywords', content: keywords.join(', ') });
    }
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'fr' ? 'fr_FR' : 'en_GB' });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

    if (image) {
      setMeta('meta[property="og:image"]', { property: 'og:image', content: image });
      setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    }

    document.head.querySelectorAll('link[data-seo="dynamic"]').forEach((node) => node.remove());
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonical;
    canonicalLink.dataset.seo = 'dynamic';
    document.head.appendChild(canonicalLink);

    alternates.forEach(({ lang: alternateLang, path: alternatePath }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = alternateLang;
      link.href = `${origin}${alternatePath}`;
      link.dataset.seo = 'dynamic';
      document.head.appendChild(link);
    });

    document.head.querySelectorAll('script[data-seo-schema="dynamic"]').forEach((node) => node.remove());
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'dynamic';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, path, lang, keywords, alternates, image, schema]);

  return null;
}
