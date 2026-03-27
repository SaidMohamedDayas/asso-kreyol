const socials = [
  {
    key: "instagram",
    label: "Instagram",
    href: "TODO",
    handle: "@TODO",
    tone: "primary",
    description:
      "TODO - Aperçus visuels, extraits de programmation et fragments d'ambiance.",
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "TODO",
    handle: "@TODO",
    tone: "secondary",
    description:
      "TODO - Annonces, relais d'événements et informations publiques à venir.",
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "TODO",
    handle: "@TODO",
    tone: "accent",
    description:
      "TODO - Captations, formats vidéo et ressources de transmission à enrichir.",
  },
];

const socialLinks = socials.reduce((accumulator, item) => {
  accumulator[item.key] = item.href;
  return accumulator;
}, {});

function getSocial(key) {
  return socials.find((item) => item.key === key);
}

export { getSocial, socialLinks, socials };
export default socials;
