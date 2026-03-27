const archiveFilters = [
  "Tous",
  "Dossiers",
  "Témoignages",
  "Audio",
  "Documents",
];

const archiveItems = [
  {
    category: "Dossier",
    title: "Dossiers thématiques",
    description:
      "TODO - Prévoir des entrées par sujet, période, pratique ou enjeu de transmission.",
    note: "TODO - Structure éditoriale à préciser.",
    meta: "TODO",
    tone: "paper",
    href: "",
  },
  {
    category: "Témoignage",
    title: "Paroles & récits",
    description:
      "TODO - Réserver un espace pour des récits, entretiens ou paroles documentées.",
    note: "TODO - Modalités de collecte à définir.",
    meta: "TODO",
    tone: "primary",
    href: "",
  },
  {
    category: "Audio",
    title: "Fonds sonores",
    description:
      "TODO - Introduire les futurs matériaux audio, captations ou traces orales lorsque disponibles.",
    note: "TODO - Formats et accès à documenter.",
    meta: "TODO",
    tone: "green",
    href: "",
  },
  {
    category: "Document",
    title: "Documents & traces",
    description:
      "TODO - Prévoir ici l'accueil de documents numérisés, repères textuels ou archives iconographiques.",
    note: "TODO - Indexation à prévoir.",
    meta: "TODO",
    tone: "secondary",
    href: "",
  },
];

const archivePaths = [
  {
    tag: "Parcours",
    eyebrow: "Consultation",
    title: "Repères historiques",
    description:
      "TODO - Une entrée pour les chronologies, contextes et jalons du projet.",
    tone: "paper",
    size: "wide",
  },
  {
    tag: "Collection",
    eyebrow: "Documents",
    title: "Sources éditoriales",
    description:
      "TODO - Une place pour les notices, extraits et pièces à documenter.",
    tone: "accent",
    size: "square",
  },
  {
    tag: "Mémoire",
    eyebrow: "Traces",
    title: "Archives visuelles",
    description:
      "TODO - Un ensemble pour les images, affiches ou fragments patrimoniaux.",
    tone: "primary",
    size: "tall",
  },
  {
    tag: "Ressource",
    eyebrow: "Écoute",
    title: "Fonds sonores",
    description:
      "TODO - Une future section dédiée aux voix, captations et transmissions orales.",
    tone: "green",
    size: "square",
  },
];

export { archiveFilters, archiveItems, archivePaths };
export default archiveItems;
