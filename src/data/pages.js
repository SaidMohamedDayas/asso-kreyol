import { archiveItems } from "@/data/archives";
import { getNavigationItem } from "@/data/navigation";
import { partnerCollaborationCards } from "@/data/partners";
import site from "@/data/site";

function buildPublicPage(href, content) {
  const navigationItem = getNavigationItem(href);
  const title = navigationItem?.label || content.hero?.title || "TODO";

  return {
    href,
    title,
    ...content,
    hero: {
      eyebrow: site.name,
      title,
      description: "TODO - Description à compléter.",
      ...content.hero,
      title: content.hero?.title || title,
    },
  };
}

const publicPages = {
  association: buildPublicPage("/association", {
    hero: {
      eyebrow: "Repères institutionnels",
      description:
        "TODO - Cette page présentera plus précisément l'histoire, le cadre et le positionnement culturel de l'association.",
    },
    sections: {
      presentation: {
        title: "Présentation",
        paragraphs: [
          "TODO - Présenter ici l'association, son histoire de départ et la manière dont elle s'inscrit dans un paysage culturel plus large.",
          "TODO - Décrire ensuite son rythme, sa présence et les publics qu'elle souhaite rejoindre à travers ses actions et ses prises de parole.",
        ],
      },
      mission: {
        title: "Mission",
        paragraphs: [
          "TODO - Expliquer ici la mission culturelle, mémorielle et pédagogique portée par l'association.",
          "TODO - Préciser comment cette mission s'incarne entre transmission, valorisation, rencontres et construction d'espaces de dialogue.",
        ],
      },
      values: {
        eyebrow: "Repères essentiels",
        title: "Quelques valeurs qui orienteront la lecture du site.",
        description:
          "TODO - Cette section précisera plus tard la manière dont l'association traduit ses intentions dans ses actions et sa présence publique.",
        items: [
          {
            title: "Transmission",
            description:
              "TODO - Dire ici ce que l'association choisit de transmettre, à quels publics et dans quel esprit.",
          },
          {
            title: "Mémoire",
            description:
              "TODO - Définir la place accordée aux récits, aux traces et aux héritages culturels.",
          },
          {
            title: "Partage",
            description:
              "TODO - Décrire la manière dont les savoirs, les pratiques et les expériences seront mis en commun.",
          },
          {
            title: "Ouverture",
            description:
              "TODO - Préciser la volonté d'accueillir des échanges, des rencontres et des regards complémentaires.",
          },
        ],
      },
    },
    cta: {
      eyebrow: "À suivre",
      title: "Poursuivre l'échange.",
      description:
        "TODO - Inviter ici les visiteurs à prendre contact pour en savoir plus sur l'association et ses prochaines actions.",
      href: "/contact",
      label: "Nous contacter",
    },
  }),
  memoiresHistoire: buildPublicPage("/memoires-histoire", {
    hero: {
      eyebrow: "Patrimoine vivant",
      description:
        "TODO - Cette rubrique détaillera la manière dont les récits, les archives et les repères historiques seront mis en valeur.",
    },
    sections: {
      intro: {
        title: "Approche éditoriale",
        paragraphs: [
          "TODO - Présenter ici l'approche retenue pour collecter, contextualiser et partager des éléments de mémoire et d'histoire.",
          "TODO - Expliquer comment cette matière pourra nourrir des récits éditoriaux, des hommages et des ressources à consulter plus tard.",
        ],
      },
      cards: {
        eyebrow: "Pistes de contenu",
        title: "Une structure déjà prête à accueillir récits, traces et hommages.",
        description:
          "TODO - Ces cartes deviendront plus tard des entrées éditoriales vers des ressources, des dossiers et des archives contextualisées.",
        labelPrefix: "Axe",
        items: [
          {
            title: "Archives vivantes",
            description:
              "TODO - Exposer ici les formats de collecte et de valorisation de documents, de récits ou de traces.",
          },
          {
            title: "Repères historiques",
            description:
              "TODO - Introduire les contextes, chronologies et jalons qui structureront cette partie du site.",
          },
          {
            title: "Témoignages",
            description:
              "TODO - Préciser comment les voix, les souvenirs et les transmissions orales seront accueillis.",
          },
          {
            title: "Hommages",
            description:
              "TODO - Réserver ici un espace pour les figures, lieux ou événements à mettre en lumière.",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Prolonger la visite",
      title: "Préparer les futures ressources.",
      description:
        "TODO - Cette section orientera plus tard vers des archives éditorialisées et des prises de contact autour des fonds.",
      href: "/archives",
      label: "Explorer les archives",
      secondaryAction: {
        href: "/contact",
        label: "Nous contacter",
      },
    },
  }),
  artsFolklore: buildPublicPage("/arts-folklore", {
    hero: {
      eyebrow: "Expressions culturelles",
      description:
        "TODO - Cette page rassemblera les formes artistiques, les pratiques et les imaginaires culturels mis en avant par le site.",
    },
    sections: {
      intro: {
        title: "Un espace pour les pratiques et les formes sensibles.",
        paragraphs: [
          "TODO - Décrire ici les grands territoires artistiques et folkloriques que l'association souhaite mettre en lumière.",
          "TODO - Introduire les formats de programmation, de transmission ou de médiation qui viendront enrichir cette rubrique.",
        ],
      },
      asideNote:
        "TODO - Un encadré pourra ici rappeler un fil rouge éditorial, une prochaine action ou une mise en avant artistique.",
      cards: {
        label: "Activité",
        items: [
          {
            title: "Musiques & rythmes",
            description:
              "TODO - Présenter les pratiques musicales, les répertoires et les formes d'écoute qui trouveront place ici.",
          },
          {
            title: "Danses & gestes",
            description:
              "TODO - Décrire les approches corporelles, les danses et les gestes culturels qui seront documentés.",
          },
          {
            title: "Scènes & rencontres",
            description:
              "TODO - Expliquer comment les moments publics, restitutions ou rencontres artistiques seront évoqués.",
          },
          {
            title: "Répertoires à transmettre",
            description:
              "TODO - Réserver un espace pour les formes à préserver, à expliquer et à transmettre avec précision.",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Ouverture",
      title: "Imaginer la suite.",
      description:
        "TODO - Ce bloc accueillera plus tard un appel à suivre les actions, les rendez-vous ou les partenariats artistiques.",
      href: "/contact",
      label: "Nous écrire",
    },
  }),
  langueTransmission: buildPublicPage("/langue-transmission", {
    hero: {
      eyebrow: "Langue & pédagogie",
      description:
        "TODO - Cette page expliquera comment la langue et la transmission trouvent leur place dans les activités et les ressources du site.",
    },
    sections: {
      intro: {
        title: "Une rubrique pensée pour apprendre, pratiquer et transmettre.",
        paragraphs: [
          "TODO - Présenter ici l'approche retenue pour accompagner la découverte, la pratique et la circulation de la langue.",
          "TODO - Expliquer comment cette transmission pourra s'adresser à des profils différents à travers des formats simples et progressifs.",
        ],
      },
      cards: {
        label: "Transmission",
        items: [
          {
            title: "Cours & initiations",
            description:
              "TODO - Décrire ici les formats d'apprentissage, d'introduction ou d'accompagnement qui seront proposés.",
          },
          {
            title: "Ateliers de pratique",
            description:
              "TODO - Présenter les temps d'échange, de conversation ou d'expérimentation liés à la langue.",
          },
          {
            title: "Ressources à consulter",
            description:
              "TODO - Prévoir ici des contenus, outils ou supports qui aideront à poursuivre la transmission.",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Lien utile",
      title: "Ouvrir le dialogue.",
      description:
        "TODO - Cette invitation renverra plus tard vers des informations pratiques sur les ressources ou les prises de contact.",
      href: "/contact",
      label: "Prendre contact",
    },
  }),
  engagements: buildPublicPage("/engagements", {
    hero: {
      eyebrow: "Positionnement",
      description:
        "TODO - Cette page exprimera la ligne de conduite, les responsabilités et les principes qui orientent les actions de l'association.",
    },
    sections: {
      intro: {
        title: "Un texte de positionnement appelé à devenir plus explicite.",
        paragraphs: [
          "TODO - Formuler ici un texte manifeste sur les choix culturels, relationnels et éditoriaux qui guident l'association.",
          "TODO - Expliquer ensuite comment ces engagements se traduisent dans la manière de transmettre, de collaborer et d'accueillir les publics.",
        ],
      },
      cards: {
        label: "Engagement",
        items: [
          {
            title: "Préserver",
            description:
              "TODO - Détailler la volonté de préserver des récits, des pratiques et des repères avec exigence et soin.",
          },
          {
            title: "Relier",
            description:
              "TODO - Préciser comment l'association souhaite créer des liens entre générations, territoires et interlocuteurs.",
          },
          {
            title: "Transmettre",
            description:
              "TODO - Décrire la manière dont les savoirs et les expressions culturelles pourront circuler et rester vivants.",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Échange",
      title: "Partager ces intentions.",
      description:
        "TODO - Cette invitation pourra plus tard orienter vers un échange, un partenariat ou une prise de parole liée aux engagements.",
      href: "/contact",
      label: "Échanger avec nous",
    },
  }),
  partenaires: buildPublicPage("/partenaires", {
    hero: {
      eyebrow: "Collaborations",
      description:
        "TODO - Cette page présentera les coopérations recherchées, les réseaux à activer et la manière dont les partenariats pourront se construire.",
    },
    sections: {
      intro: {
        title: "Des collaborations pensées comme des prolongements naturels du projet.",
        paragraphs: [
          "TODO - Expliquer ici les types de collaborations souhaitées, les contextes de travail possibles et les complémentarités à développer.",
          "TODO - Préciser comment les partenariats pourront soutenir la programmation, la transmission, la documentation et la diffusion.",
        ],
      },
      cards: {
        label: "Réseau",
        items: partnerCollaborationCards,
      },
    },
    cta: {
      eyebrow: "Ouverture aux collaborations",
      title: "Devenir partenaire.",
      description:
        "TODO - Inviter ici à prendre contact pour imaginer des formes de coopération adaptées et progressives.",
      href: "/contact",
      label: "Proposer une collaboration",
    },
  }),
  archives: buildPublicPage("/archives", {
    hero: {
      eyebrow: "Ressources & fonds",
      description:
        "TODO - Cette page accueillera plus tard des documents, ensembles thématiques, repères et matériaux éditorialisés.",
    },
    sections: {
      intro: {
        title: "Une architecture prête à accueillir des ressources plus nombreuses.",
        paragraphs: [
          "TODO - Présenter ici les types de fonds, de documents et de ressources qui pourront être consultés, transmis ou valorisés.",
          "TODO - Expliquer comment cette structure est pensée pour accueillir des notices, des ensembles thématiques et des contenus de référence.",
        ],
      },
      cards: {
        items: archiveItems,
      },
    },
    cta: {
      eyebrow: "Contribution",
      title: "Contribuer ou signaler une ressource.",
      description:
        "TODO - Cette invitation servira plus tard à orienter vers une prise de contact autour de documents ou d'informations à partager.",
      href: "/contact",
      label: "Nous contacter",
    },
  }),
  contact: buildPublicPage("/contact", {
    hero: {
      eyebrow: "Prendre lien",
      description:
        "TODO - Cette page rassemblera prochainement les modalités de contact, les informations utiles et les liens de présence publique.",
    },
    sections: {
      intro: {
        title: "Écrire à l'association",
        paragraphs: [
          "TODO - Introduire ici la manière la plus simple d'entrer en relation avec l'association, selon les demandes, les collaborations ou les questions.",
          "TODO - Ajouter ensuite quelques indications pratiques sur les délais de réponse et les sujets qui pourront être traités ici.",
        ],
      },
      directCard: {
        eyebrow: "Contact direct",
        title: "Adresse de contact",
        description:
          "TODO - Ajouter ici plus tard les indications utiles pour orienter les demandes, collaborations ou prises de parole.",
      },
      socialCard: {
        eyebrow: "Présence publique",
        title: "Liens sociaux",
      },
      followUpNote:
        "TODO - Un formulaire plus complet, des informations pratiques complémentaires ou des modalités de rendez-vous pourront être ajoutés dans une prochaine étape si nécessaire.",
    },
    actions: {
      primary: {
        label: "Envoyer un message",
        href: site.contact.emailHref,
      },
      secondary: {
        label: "Retour à l'accueil",
        href: "/",
      },
    },
  }),
};

function getPublicPage(key) {
  return publicPages[key];
}

export { getPublicPage, publicPages };
