import type { SiteConfig } from '~/types';

/**
 * Structured data builders.
 *
 * Everything here is derived from `src/config/site.ts` and the page's own
 * content — nothing is invented. Drop a builder if you do not want the
 * corresponding schema.org type emitted.
 */

type Json = Record<string, unknown>;

export function personSchema(site: SiteConfig): Json {
  return {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.author,
    jobTitle: site.role,
    url: `${site.url}/`,
    email: `mailto:${site.contact.email}`,
    sameAs: site.social.map((s) => s.href),
  };
}

/** Local business entry used by search engines for the legal entity. */
export function professionalServiceSchema(site: SiteConfig): Json {
  return {
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#business`,
    name: `${site.author} EI`,
    description: site.descriptionLong,
    url: `${site.url}/`,
    email: site.contact.email,
    image: `${site.url}${site.ogImage}`,
    founder: { '@id': `${site.url}/#person` },
    identifier: { '@type': 'PropertyValue', propertyID: 'SIREN', value: site.legal.siren.replace(/\s/g, '') },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.area.city,
      addressRegion: site.area.department,
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: site.area.city },
      { '@type': 'AdministrativeArea', name: site.area.department },
    ],
    sameAs: site.social.map((s) => s.href),
  };
}

export function websiteSchema(site: SiteConfig): Json {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: site.locale,
    publisher: { '@id': `${site.url}/#person` },
  };
}

export function blogPostingSchema(
  site: SiteConfig,
  post: {
    title: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    keywords?: string[];
  }
): Json {
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { '@type': 'Person', name: post.author, url: `${site.url}/` },
    publisher: { '@id': `${site.url}/#person` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
    inLanguage: site.locale,
    ...(post.keywords?.length ? { keywords: post.keywords.join(', ') } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Wraps one or more schema objects in a single `@graph` document. */
export function graph(nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
