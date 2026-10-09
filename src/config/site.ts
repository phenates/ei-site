import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Everything here is demo content. Replace it with your own and the
 * header, footer, hero, contact page, metadata, structured data, RSS
 * feed and sitemap all follow.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
export const siteConfig: SiteConfig = {
  name: 'Stéphane Perfetti',

  logo: {
    header: { src: '/images/header-logo.webp', width: 164, height: 58 },
    footer: { src: '/images/footer-logo.webp', width: 164, height: 58 },
  },

  author: 'Stéphane Perfetti',
  role: 'Administrateur systèmes et réseaux indépendant',
  title: 'Stéphane Perfetti — Administrateur systèmes et réseaux à Montpellier',
  description:
    "Administrateur systèmes et réseaux indépendant à Montpellier. Systèmes d'information et automatisation pour TPE, PME et artisans.",
  /** Longer description, used in structured data (JSON-LD). */
  descriptionLong:
    "Administrateur systèmes et réseaux indépendant à Montpellier. J'interviens auprès des TPE, PME et artisans dans la gestion de leurs systèmes d'information et l'automatisation des processus.",
  url: import.meta.env.SITE ?? 'https://stephane-perfetti.fr',
  ogImage: '/og-default.png',
  locale: 'fr',
  themeColor: '#818cf8',

  contact: {
    email: 'contact@stephane-perfetti.fr',
    phone: '+1 (000) 555-0100',
    phoneHref: '+10005550100',
    location: 'Montpellier (Hérault) et à distance',
    availability: 'Disponible pour de nouvelles missions',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  /** Where the business operates. Used by hero, legal page, footer and JSON-LD. */
  area: {
    city: 'Montpellier',
    department: 'Hérault',
  },

  /** Legal identity of the sole proprietorship (EI). */
  legal: {
    siren: '429 994 338',
    siret: '429 994 338 00029',
    ape: '6203Z',
    activity: "gestion d'installations informatiques",
    vat: 'TVA non applicable, art. 293 B du CGI (franchise en base)',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/st%c3%a9phane-perfetti/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://www.github.com/phenates', icon: 'github' },
  ],

  about:
    "Administrateur systèmes et réseaux indépendant à Montpellier. J'aide les TPE et PME à garder une infrastructure fiable, sauvegardée et documentée.",

  copyrightHolder: 'Stéphane Perfetti EI',
};

export default siteConfig;
