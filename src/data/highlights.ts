import siteConfig from "~/config/site";

/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
  greeting: "Bonjour, je suis",
  /** Rendered on two lines. */
  nameLines: ["Stéphane", "Perfetti"],
  intro: `${siteConfig.descriptionLong}`,
  ctaLabel: "Demander un devis gratuit",
  ctaHref: `mailto:${siteConfig.contact.email}`,
  photo: {
    src: "/images/hero-portrait.webp",
    alt: "Stéphane Perfetti, administrateur systèmes et réseaux",
    width: 457,
    height: 457,
  },
  aside: {
    roleLine: [
      "Administration systèmes & réseaux",
      `${siteConfig.area.city} · ${siteConfig.area.department}`,
    ],
    title: ["Systèmes", "& Réseaux"],
    /** Small avatar stack — decorative, so the images carry empty alt text. */
    stack: [] as string[],
    stackBadge: "",
    kpi: "RNCP 6",
    kpiLabel: "Administrateur systèmes, réseaux et cybersécurité",
    note: `Sur site dans l'${siteConfig.area.department} ou à distance`,
    /** Lines typed effect */
    typed: [
      "Administrateur Systèmes • Réseaux • Sécurité",
      "Self-hosting • Automatisation • Open source",
      "Sysadmin • Architecture réseau • DevOps",
      "Disponible pour de nouvelles missions",
    ],
  },
};

export const collaborate = {
  eyebrow: "Working together",
  title:
    "Most of my work arrives as a half-finished thing somebody is quietly worried about.",
  body: "Send me yours and I will tell you what I would do with it — honestly, and before there is any question of an invoice. If it is not a fit, I will name someone who is.",
  badge: "Independent since 2011",
  ctaLabel: "Send me the brief",
  ctaHref: "/contact/",
  /**
   * The staggered pair beside the copy. Swap these for the bundled SVG
   * mockups (`BookletMock`, `TabletMock` in src/components/art/) if you would
   * rather show artwork than photography — see the README.
   */
  images: [
    {
      src: "/images/collab-team.webp",
      alt: "Two colleagues standing in a bright office, reviewing work together on a tablet",
      width: 760,
      height: 760,
    },
    {
      src: "/images/collab-meeting.webp",
      alt: "Two colleagues talking over an open laptop at a meeting table",
      width: 760,
      height: 760,
    },
  ],
};

export const about = {
  eyebrow: "À propos",
  title: "Une infrastructure qui tourne, sans que vous ayez à y penser.",
  body: "Administrateur systèmes et réseaux indépendant à Montpellier, j'interviens auprès des TPE et PME sans DSI : sauvegardes testées, messagerie sécurisée, serveurs documentés. Chaque mission se termine par une documentation claire, pour que vous ne dépendiez pas de moi.",
  points: [
    "Un seul interlocuteur, de l'audit à la documentation remise.",
    "Mission ponctuelle ou suivi régulier, selon votre besoin.",
    "Open source et auto-hébergement : plus de contrôle, des coûts prévisibles.",
  ],
  image: {
    src: "/images/about-studio.webp",
    alt: "Illustration provisoire",
    width: 900,
    height: 954,
  },
  badge: {
    value: "10+",
    label: "services en production sur mon homelab.",
  },
  ctaLabel: "Voir les missions",
  ctaHref: "#services",
};

export const servicesHeading = {
  eyebrow: "Missions",
  title: "Six missions concrètes.",
  ctaLabel: "Décrire mon besoin",
  ctaHref: `mailto:${siteConfig.contact.email}`,
};

export const workHeading = {
  eyebrow: "Réalisations",
  title: "Quelques réalisations.",
};

export const journalHeading = {
  eyebrow: "Notebook",
  title: "Things I keep having to explain.",
  ctaLabel: "Every article",
  ctaHref: "/journal/",
};

export const cta = {
  title: "Un besoin, une question ?",
  body: "Décrivez-moi votre situation en quelques lignes. Je reviens vers vous avec les options possibles. Le devis est gratuit.",
  primaryLabel: "Décrire mon besoin",
};
