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
  robots?: string;
}

const SITE_NAME = 'Cliniqeo Hair';
const PUBLIC_ORIGIN = 'https://cliniqeo.com';
const FR_MOUNT = '/greffe-cheveux-turquie';
const EN_MOUNT = '/en/hair-transplant-turkey';

function normalisePath(pathname: string) {
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, '') : withLeadingSlash;
}

function publicPath(pathname: string, lang: string) {
  const path = normalisePath(pathname);

  if (lang === 'fr') {
    if (path === '/') return FR_MOUNT;
    if (path === FR_MOUNT || path.startsWith(`${FR_MOUNT}/`)) return path;
    return `${FR_MOUNT}${path}`;
  }

  if (path === '/' || path === '/en' || path === '/hair-transplant-turkey') return EN_MOUNT;
  if (path === EN_MOUNT || path.startsWith(`${EN_MOUNT}/`)) return path;
  if (path.startsWith('/en/')) return `${EN_MOUNT}${path.slice(3)}`;
  return `${EN_MOUNT}${path}`;
}

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
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
}: SEOHeadProps) {
  useEffect(() => {
    const canonical = `${PUBLIC_ORIGIN}${publicPath(path, lang)}`;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.documentElement.lang = lang;
    document.title = fullTitle;

    setMeta('meta[name="description"]', { name: 'description', content: description });
    if (keywords.length) {
      setMeta('meta[name="keywords"]', { name: 'keywords', content: keywords.join(', ') });
    }
    setMeta('meta[name="robots"]', { name: 'robots', content: robots });
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
      link.href = `${PUBLIC_ORIGIN}${publicPath(alternatePath, alternateLang)}`;
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
  }, [title, description, path, lang, keywords, alternates, image, schema, robots]);

  return null;
}
