import type { FaqItem } from '~/types';
import siteConfig from '~/config/site';

export const faq: FaqItem[] = [
  {
    question: "Intervenez-vous chez les petites structures ?",
    answer:
      `Oui. Je travaille surtout avec les TPE, PME, artisans et professions libérales sans service informatique, à ${siteConfig.area.city} et dans l'${siteConfig.area.department}, sur site ou à distance.`,
  },
  {
    question: "Mission ponctuelle ou suivi régulier ?",
    answer:
      "Les deux. Une mission est cadrée avec un périmètre écrit. Un suivi régulier peut ensuite prendre le relais : mises à jour, supervision, assistance.",
  },
  {
    question: "Comment se passe la première prise de contact ?",
    answer:
      "Vous m'écrivez votre besoin et nous en discutons. Je vous propose ensuite un périmètre et un devis. Rien ne démarre sans votre accord écrit.",
  },
  {
    question: "Que recevrai-je à la fin d'une mission ?",
    answer:
      "Une installation qui fonctionne et une documentation claire : procédures, accès, schéma. Vous ne dépendez pas de moi pour la suite.",
  },
  {
    question: "Qui garde la main sur mes données ?",
    answer:
      "Vous. Les accès, les comptes et les sauvegardes restent à votre nom. Je privilégie des outils ouverts et documentés, pour éviter l'enfermement chez un éditeur.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui. Chaque mission est chiffrée selon son périmètre, après un échange sur votre besoin. Le devis ne vous engage à rien.",
  },
];

export const faqHeading = {
  eyebrow: 'FAQ',
  title: 'Questions fréquentes.',
  asideTitle: 'Une autre question ?',
  asideBody: 'Écrivez-moi en quelques lignes, je vous répondrai avec plaisir.',
};
