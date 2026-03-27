import { partnerShowcaseItems } from "@/data/partners";
import socials from "@/data/socials";
import site from "@/data/site";

const homeData = {
  hero: {
    eyebrow: site.name,
    title: "Faire place à la mémoire, à la culture et à la transmission kréyoles.",
    description:
      "TODO - Cette introduction affinera plus tard la voix du site, son ancrage culturel et la manière dont l'association souhaite accueillir les publics.",
    primaryCta: {
      label: "Découvrir l’association",
      href: "/association",
    },
    secondaryCta: {
      label: "Voir nos actions",
      href: "#axes",
    },
    visual: {
      label: "En construction",
      title: "Une présence éditoriale pensée comme un lieu de mémoire vivante.",
      description:
        "TODO - Ce bloc visuel donnera plus tard un aperçu du ton, des rendez-vous et des matières culturelles portés par l'association.",
    },
    highlights: [
      {
        title: "Mémoire",
        description:
          "TODO - Archives, récits, repères et hommages à valoriser avec soin.",
      },
      {
        title: "Culture",
        description:
          "TODO - Expressions artistiques, temps partagés et formes vivantes à faire circuler.",
      },
      {
        title: "Transmission",
        description:
          "TODO - Langue, pratiques et ressources à rendre accessibles progressivement.",
      },
    ],
  },
  intro: {
    eyebrow: "Qui sommes-nous ?",
    title: "Une association culturelle qui se présente d’abord par ses intentions.",
    paragraphs: [
      "TODO - Cette section présentera plus précisément l'association, son horizon culturel et sa manière d'habiter le territoire et les échanges.",
      "TODO - Elle expliquera aussi comment le site articule mémoire, valorisation des pratiques et transmission auprès de différents publics.",
    ],
    pillars: [
      {
        title: "Mémoire",
        description:
          "TODO - Conserver, contextualiser et partager des repères, récits et traces.",
      },
      {
        title: "Culture",
        description:
          "TODO - Mettre en lumière des formes artistiques, des rendez-vous et des expressions vivantes.",
      },
      {
        title: "Transmission",
        description:
          "TODO - Ouvrir des espaces pour apprendre, pratiquer et faire circuler les savoirs.",
      },
    ],
    cta: {
      label: "En savoir plus",
      href: "/association",
    },
  },
  axes: {
    eyebrow: "Nos grands axes",
    title: "Quatre entrées structurantes pour lire le projet et ses prolongements.",
    description:
      "TODO - Chaque axe accueillera plus tard des contenus éditoriaux, des archives, des ressources ou des actions mieux détaillées.",
    items: [
      {
        label: "01",
        title: "Mémoires & Histoire",
        description:
          "TODO - Un espace pour les récits, les traces, les repères historiques et les hommages.",
        href: "/memoires-histoire",
      },
      {
        label: "02",
        title: "Arts & Folklore",
        description:
          "TODO - Une rubrique pour les formes artistiques, les pratiques et les expressions culturelles.",
        href: "/arts-folklore",
      },
      {
        label: "03",
        title: "Langue & Transmission",
        description:
          "TODO - Des contenus dédiés à la langue, à la pédagogie et à la circulation des savoirs.",
        href: "/langue-transmission",
      },
      {
        label: "04",
        title: "Engagements",
        description:
          "TODO - Les principes, responsabilités et choix culturels qui orientent la démarche.",
        href: "/engagements",
      },
    ],
  },
  memory: {
    eyebrow: "Mois des mémoires",
    title: "Une section forte pour donner de la place aux récits, aux repères et aux hommages.",
    description:
      "TODO - Cette partie mettra plus tard en avant des temps forts, des archives contextualisées et des propositions mémorielles à enrichir.",
    items: [
      {
        label: "Repère",
        title: "Omaj Ba Yo · TODO",
        description:
          "TODO - Placeholder de contenu mémoriel à confirmer et à documenter plus précisément.",
      },
      {
        label: "Focus",
        title: "Hommage · TODO",
        description:
          "TODO - Espace réservé à une mise en lumière, un récit ou une évocation contextualisée.",
      },
      {
        label: "Transmission",
        title: "Stage Gwo Ka · TODO",
        description:
          "TODO - Placeholder de temps fort ou d'atelier lié à la mémoire des pratiques.",
      },
      {
        label: "Exposition",
        title: "Exposition · TODO",
        description:
          "TODO - Prévoir ici une entrée vers une proposition visuelle, documentaire ou éditoriale.",
      },
    ],
    cta: {
      label: "Découvrir la mémoire",
      href: "/memoires-histoire",
    },
  },
  kreyolodays: {
    eyebrow: "Kréyolodays / Arts & Folklore",
    title: "Une programmation vivante entre pratiques, rencontres et découvertes.",
    description:
      "TODO - Cette section présentera plus tard une sélection d'activités, de formats publics et d'expériences culturelles à mettre en valeur.",
    items: [
      {
        title: "Spectacle",
        description:
          "TODO - Placeholder pour une proposition scénique, musicale ou performative.",
      },
      {
        title: "Kafé Pawòl",
        description:
          "TODO - Placeholder pour un temps d'échange, de discussion ou de parole partagée.",
      },
      {
        title: "Dictée en Kréyòl",
        description:
          "TODO - Placeholder pour un moment de langue, de jeu ou de transmission.",
      },
      {
        title: "Découverte",
        description:
          "TODO - Placeholder pour une initiation, une présentation ou un parcours d'introduction.",
      },
      {
        title: "Marché Kréyòl",
        description:
          "TODO - Placeholder pour un temps convivial, artisanal ou associatif à préciser.",
      },
      {
        title: "Cours de Kréyòl",
        description:
          "TODO - Placeholder pour un format d'apprentissage ou de pratique accompagné.",
      },
    ],
    cta: {
      label: "Explorer les arts & folklore",
      href: "/arts-folklore",
    },
  },
  gallery: {
    eyebrow: "Galerie / Temps forts",
    title: "Une matière visuelle à faire grandir au fil des actions et des rencontres.",
    description:
      "TODO - Cette galerie accueillera plus tard des images, détails, ambiances et fragments des temps forts du site.",
    note:
      "TODO - Les images définitives et leurs légendes viendront enrichir cette composition dans une prochaine étape.",
    items: [
      {
        title: "Scène",
        description: "TODO - Placeholder visuel pour un moment public.",
        tone: "primary",
        size: "feature",
      },
      {
        title: "Transmission",
        description: "TODO - Placeholder visuel pour un atelier ou un échange.",
        tone: "accent",
        size: "square",
      },
      {
        title: "Rencontre",
        description: "TODO - Placeholder visuel pour une parole partagée.",
        tone: "green",
        size: "tall",
      },
      {
        title: "Archives",
        description: "TODO - Placeholder visuel pour un document ou une trace.",
        tone: "paper",
        size: "square",
      },
      {
        title: "Rythmes",
        description: "TODO - Placeholder visuel pour une pratique vivante.",
        tone: "secondary",
        size: "wide",
      },
    ],
  },
  partners: {
    eyebrow: "Ils nous soutiennent",
    title: "Des appuis et relais à rendre visibles avec clarté lorsqu’ils seront confirmés.",
    description:
      "TODO - Cette section présentera plus tard les structures, collectifs ou partenaires associés au projet.",
    items: partnerShowcaseItems,
    cta: {
      label: "Voir les partenaires",
      href: "/partenaires",
    },
  },
  social: {
    eyebrow: "Réseaux sociaux",
    title: "Retrouver bientôt les prises de parole, annonces et extraits de vie du projet.",
    description:
      "TODO - Cette section orientera plus tard vers des publications, des annonces et des traces des temps forts partagés en ligne.",
    items: socials.map((item) => ({
      platform: item.label,
      href: item.href,
      description: item.description,
    })),
  },
  contact: {
    eyebrow: "Contact rapide",
    title: "Une question, une envie de collaborer ou de suivre la suite du projet ?",
    description:
      "TODO - Cette invitation deviendra plus précise avec les bonnes modalités de contact, les usages attendus et les informations pratiques.",
    primaryCta: {
      label: "Nous contacter",
      href: "/contact",
    },
    secondaryCta: {
      label: "Écrire par email",
      href: site.contact.emailHref,
    },
    note: `WhatsApp · ${site.contact.whatsapp}`,
  },
};

export default homeData;
