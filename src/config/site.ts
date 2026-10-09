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
  role: 'Art direction & interface design',
  title: 'SWP Freelancer Portfolio — Art direction & interface design',
  description:
    'Portfolio of Robin Vale, an independent art director and interface designer working with small product teams on identity, interface and design systems.',
  url: import.meta.env.SITE ?? 'https://swp-freelancer-portfolio.vercel.app',
  ogImage: '/og-default.png',
  locale: 'fr',
  themeColor: '#818cf8',

  contact: {
    email: 'contact@stephane-perfetti.fr',
    phone: '+1 (000) 555-0100',
    phoneHref: '+10005550100',
    location: 'Montpellier et à distance',
    availability: 'Two project slots open from September',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/st%c3%a9phane-perfetti/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://www.github.com/phenates', icon: 'github' },
  ],

  about:
    'An independent art direction and design practice for teams of under twenty. Fewer clients, harder questions early, and a handover that does not quietly depend on me.',

  copyrightHolder: 'Stéphane Perfetti EI',
};

export default siteConfig;
