const primaryNavigation = [
  { label: "Accueil", href: "/" },
  { label: "L’association", href: "/association" },
  { label: "Mémoires & Histoire", href: "/memoires-histoire" },
  { label: "Arts & Folklore", href: "/arts-folklore" },
  { label: "Langue & Transmission", href: "/langue-transmission" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Contact", href: "/contact" },
];

const mobileNavigationNote =
  "TODO - Le contenu détaillé de chaque rubrique sera ajouté dans les prochaines étapes.";

function getNavigationItem(href) {
  return primaryNavigation.find((item) => item.href === href);
}

function getNavigationItems(hrefs) {
  return hrefs
    .map((href) => getNavigationItem(href))
    .filter(Boolean);
}

const contactLink = getNavigationItem("/contact");

const footerGroups = [
  {
    title: "Explorer",
    items: getNavigationItems([
      "/association",
      "/memoires-histoire",
      "/arts-folklore",
      "/langue-transmission",
    ]),
  },
  {
    title: "Ressources",
    items: getNavigationItems(["/partenaires", "/contact"]),
  },
];

export {
  contactLink,
  footerGroups,
  getNavigationItem,
  getNavigationItems,
  mobileNavigationNote,
  primaryNavigation,
};
