import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/#services', anchor: '#services' },
  // Section Process disabled (re-enable with the Process component in index.astro)
  // { label: 'Méthode', href: '/#process', anchor: '#process' },
  { label: 'FAQ', href: '/#faq', anchor: '#faq' },
  { label: 'Contact', href: '/#contact', anchor: '#contact' },
];

/** Extra links shown only in the mobile drawer. */
export const mobileExtraNav: NavItem[] = [];

export const footerNav = {
  explore: [
    { label: 'Services', href: '/#services' },
    // { label: 'Méthode', href: '/#process' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ] satisfies NavItem[],
  legal: [{ label: 'Mentions légales', href: '/mentions-legales/' }] satisfies NavItem[],
};
