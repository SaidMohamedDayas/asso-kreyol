import {
  archiveFilters,
  archiveItems,
  archivePaths,
} from "@/data/archives";
import { getNavigationItem } from "@/data/navigation";
import {
  partnerCollaborationCards,
  partnerShowcaseItems,
  partnerSupportReasons,
} from "@/data/partners";
import socials from "@/data/socials";
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
        "TODO - Cette page présentera plus précisément le cadre, les intentions et la manière dont l'association souhaite prendre place dans l'espace culturel.",
    },
    sections: {
      presentation: {
        eyebrow: "Présentation",
        title: "Une structure culturelle pensée comme un lieu de mémoire, de culture et de transmission.",
        paragraphs: [
          "TODO - Présenter ici l'association, son histoire de départ et la manière dont elle s'inscrit dans un paysage culturel plus large.",
          "TODO - Décrire ensuite son rythme, sa présence et les publics qu'elle souhaite rejoindre à travers ses actions et ses prises de parole.",
        ],
        aside: {
          eyebrow: "Cadre",
          title: "Une présence éditoriale à rendre plus précise avec le temps.",
          description:
            "TODO - Ce bloc pourra plus tard expliciter la forme juridique, le territoire de présence ou les grands repères institutionnels utiles à la lecture du site.",
        },
      },
      mission: {
        eyebrow: "Mission",
        title: "Une démarche culturelle qui relie valorisation, médiation et circulation des savoirs.",
        paragraphs: [
          "TODO - Expliquer ici la mission culturelle, mémorielle et pédagogique portée par l'association.",
          "TODO - Préciser comment cette mission s'incarne entre transmission, valorisation, rencontres et construction d'espaces de dialogue.",
        ],
        pillars: [
          {
            eyebrow: "01",
            title: "Valoriser",
            description:
              "TODO - Mettre en lumière des récits, pratiques ou initiatives à documenter avec soin.",
            tone: "paper",
          },
          {
            eyebrow: "02",
            title: "Relier",
            description:
              "TODO - Faire dialoguer mémoire, culture et transmission dans une même lecture du site.",
            tone: "accent",
          },
          {
            eyebrow: "03",
            title: "Transmettre",
            description:
              "TODO - Ouvrir des formats pédagogiques, publics ou éditoriaux accessibles progressivement.",
            tone: "green",
          },
        ],
      },
      values: {
        eyebrow: "Valeurs",
        title: "Quelques repères qui orienteront la lecture du projet.",
        description:
          "TODO - Cette section précisera plus tard la manière dont l'association traduit ses intentions dans ses actions et sa présence publique.",
        items: [
          {
            eyebrow: "01",
            title: "Transmission",
            description:
              "TODO - Dire ici ce que l'association choisit de transmettre, à quels publics et dans quel esprit.",
            tone: "paper",
          },
          {
            eyebrow: "02",
            title: "Mémoire",
            description:
              "TODO - Définir la place accordée aux récits, aux traces et aux héritages culturels.",
            tone: "primary",
          },
          {
            eyebrow: "03",
            title: "Partage",
            description:
              "TODO - Décrire la manière dont les savoirs, les pratiques et les expériences seront mis en commun.",
            tone: "accent",
          },
          {
            eyebrow: "04",
            title: "Ouverture",
            description:
              "TODO - Préciser la volonté d'accueillir des échanges, des rencontres et des regards complémentaires.",
            tone: "green",
          },
        ],
      },
      team: {
        eyebrow: "Équipe / Bureau",
        title: "Une organisation à préciser avec clarté et sobriété.",
        description:
          "TODO - Les rôles, responsabilités et modes d'organisation seront présentés ici lorsque les informations pourront être partagées proprement.",
        items: [
          {
            eyebrow: "Bureau",
            title: "Composition · TODO",
            description:
              "TODO - Présenter ici la composition du bureau sans encore afficher de noms ou de fonctions non confirmées.",
            tone: "paper",
          },
          {
            eyebrow: "Coordination",
            title: "Répartition des rôles · TODO",
            description:
              "TODO - Expliquer plus tard comment les responsabilités culturelles, administratives ou éditoriales s'organisent.",
            tone: "secondary",
          },
          {
            eyebrow: "Soutiens",
            title: "Réseau bénévole · TODO",
            description:
              "TODO - Préparer un espace pour présenter les formes d'implication autour du projet.",
            tone: "accent",
          },
        ],
      },
    },
    cta: {
      eyebrow: "À suivre",
      title: "Poursuivre l'échange.",
      description:
        "TODO - Inviter ici les visiteurs à prendre contact pour en savoir plus sur l'association, son organisation et ses prochaines actions.",
      primaryAction: {
        href: "/contact",
        label: "Nous contacter",
      },
      secondaryAction: {
        href: "/partenaires",
        label: "Voir les partenaires",
      },
      variant: "default",
    },
  }),
  memoiresHistoire: buildPublicPage("/memoires-histoire", {
    hero: {
      eyebrow: "Patrimoine vivant",
      description:
        "TODO - Cette rubrique détaillera la manière dont les récits, les archives et les repères historiques seront mis en valeur et rendus consultables.",
    },
    sections: {
      intro: {
        eyebrow: "Approche éditoriale",
        title: "Un espace pour situer les récits, préserver les traces et ouvrir des chemins de transmission.",
        paragraphs: [
          "TODO - Présenter ici l'approche retenue pour collecter, contextualiser et partager des éléments de mémoire et d'histoire.",
          "TODO - Expliquer comment cette matière pourra nourrir des récits éditoriaux, des hommages et des ressources à consulter plus tard.",
        ],
        aside: {
          eyebrow: "Mois des Mémoires",
          title: "Une programmation à documenter avec attention.",
          description:
            "TODO - Ce bloc pourra plus tard mettre en avant un rendez-vous, un cycle de mémoire ou un repère patrimonial majeur.",
        },
      },
      cycle: {
        eyebrow: "Mois des Mémoires",
        title: "Des temps forts à faire apparaître avec plus de précision au fil des contenus.",
        description:
          "TODO - Cette sélection mettra plus tard en avant des hommages, des parcours documentaires ou des formats de transmission liés à la mémoire.",
        featured: {
          eyebrow: "Focus",
          title: "Omaj Ba Yo · TODO",
          description:
            "TODO - Espace réservé à un temps fort mémoriel, une programmation dédiée ou une proposition patrimoniale à contextualiser.",
        },
        items: [
          {
            eyebrow: "Repère",
            title: "Hommage · TODO",
            description:
              "TODO - Placeholder pour une évocation, un récit ou une figure à mettre en lumière.",
            tone: "primary",
          },
          {
            eyebrow: "Transmission",
            title: "Stage Gwo Ka · TODO",
            description:
              "TODO - Placeholder pour un format de pratique lié à la mémoire des gestes, rythmes ou répertoires.",
            tone: "paper",
          },
          {
            eyebrow: "Exposition",
            title: "Exposition · TODO",
            description:
              "TODO - Placeholder pour une proposition visuelle, documentaire ou patrimoniale.",
            tone: "accent",
          },
          {
            eyebrow: "Archive",
            title: "Parcours documentaire · TODO",
            description:
              "TODO - Placeholder pour une future entrée vers des documents, ressources ou repères historiques.",
            tone: "secondary",
          },
        ],
      },
      resources: {
        eyebrow: "Archives visuelles",
        title: "Préparer une matière documentaire plus riche et plus lisible.",
        description:
          "TODO - Cette section accueillera plus tard des fragments d'archives, des parcours thématiques et des matériaux visuels à consulter.",
        items: [
          {
            tag: "Document",
            eyebrow: "Trace",
            title: "Affiches & supports",
            description:
              "TODO - Un ensemble pour les supports visuels liés aux actions mémorielles.",
            tone: "paper",
            size: "wide",
          },
          {
            tag: "Archive",
            eyebrow: "Récit",
            title: "Repères patrimoniaux",
            description:
              "TODO - Une entrée pour les contextes, dates et jalons à rendre plus clairs.",
            tone: "primary",
            size: "square",
          },
          {
            tag: "Voix",
            eyebrow: "Transmission",
            title: "Témoignages",
            description:
              "TODO - Une place pour les paroles, souvenirs et traces orales à documenter.",
            tone: "green",
            size: "tall",
          },
          {
            tag: "Ressource",
            eyebrow: "Consultation",
            title: "Dossiers à venir",
            description:
              "TODO - Un cadre pour accueillir plus tard des dossiers éditorialisés.",
            tone: "accent",
            size: "square",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Prolonger la visite",
      title: "Explorer les archives à venir.",
      description:
        "TODO - Cette invitation servira plus tard à prolonger la visite vers des ressources plus détaillées ou une prise de contact autour des fonds.",
      primaryAction: {
        href: "/archives",
        label: "Explorer les archives",
      },
      secondaryAction: {
        href: "/contact",
        label: "Nous contacter",
      },
      variant: "memory",
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
        eyebrow: "Introduction",
        title: "Un espace pour rendre visibles des pratiques vivantes, des formats publics et des rendez-vous culturels.",
        paragraphs: [
          "TODO - Décrire ici les grands territoires artistiques et folkloriques que l'association souhaite mettre en lumière.",
          "TODO - Introduire les formats de programmation, de transmission ou de médiation qui viendront enrichir cette rubrique.",
        ],
        aside: {
          eyebrow: "Repère",
          title: "Une page plus rythmée, mais toujours sobre.",
          description:
            "TODO - Cet encadré pourra rappeler plus tard un fil rouge éditorial, une saison culturelle ou un rendez-vous à venir.",
        },
      },
      formats: {
        eyebrow: "Formats culturels",
        title: "Des activités à faire apparaître progressivement avec plus de précision.",
        description:
          "TODO - Chaque carte pourra plus tard renvoyer vers une activité, une pratique, un événement ou une médiation culturelle.",
        items: [
          {
            eyebrow: "Activité",
            title: "Musiques & rythmes",
            description:
              "TODO - Présenter les pratiques musicales, les répertoires et les formes d'écoute qui trouveront place ici.",
            tone: "paper",
          },
          {
            eyebrow: "Activité",
            title: "Danses & gestes",
            description:
              "TODO - Décrire les approches corporelles, les danses et les gestes culturels qui seront documentés.",
            tone: "accent",
          },
          {
            eyebrow: "Activité",
            title: "Scènes & rencontres",
            description:
              "TODO - Expliquer comment les moments publics, restitutions ou rencontres artistiques seront évoqués.",
            tone: "primary",
          },
          {
            eyebrow: "Activité",
            title: "Répertoires à transmettre",
            description:
              "TODO - Réserver un espace pour les formes à préserver, à expliquer et à transmettre avec précision.",
            tone: "green",
          },
        ],
      },
      kreyolodays: {
        eyebrow: "Kréyolodays",
        title: "Une programmation vivante entre parole, scène, découverte et participation.",
        description:
          "TODO - Cette section présentera plus tard un cycle, une programmation ou une série de formats culturels à mettre en valeur.",
        featured: {
          eyebrow: "Temps fort",
          title: "Kafé Pawòl · TODO",
          description:
            "TODO - Placeholder pour un temps d'échange, de parole partagée ou de rencontre publique.",
        },
        items: [
          {
            eyebrow: "Activité",
            title: "Spectacle",
            description:
              "TODO - Placeholder pour une proposition scénique, musicale ou performative.",
            tone: "paper",
          },
          {
            eyebrow: "Activité",
            title: "Dictée en Kréyòl",
            description:
              "TODO - Placeholder pour un moment de langue, de jeu ou de transmission.",
            tone: "accent",
          },
          {
            eyebrow: "Activité",
            title: "Marché Kréyòl",
            description:
              "TODO - Placeholder pour un temps convivial, artisanal ou associatif à préciser.",
            tone: "green",
          },
          {
            eyebrow: "Activité",
            title: "Découverte",
            description:
              "TODO - Placeholder pour une initiation, une présentation ou un parcours d'introduction.",
            tone: "secondary",
          },
        ],
      },
      gallery: {
        eyebrow: "Temps forts visuels",
        title: "Une bande visuelle pour donner un rythme plus vivant à la page.",
        description:
          "TODO - Les images définitives viendront enrichir plus tard cette section avec des scènes, détails et ambiances documentées.",
        items: [
          {
            tag: "Scène",
            eyebrow: "Ambiance",
            title: "Moments publics",
            description:
              "TODO - Placeholder visuel pour une restitution ou un temps collectif.",
            tone: "primary",
            size: "feature",
          },
          {
            tag: "Pratique",
            eyebrow: "Transmission",
            title: "Atelier",
            description:
              "TODO - Placeholder visuel pour un format d'initiation ou de pratique.",
            tone: "accent",
            size: "square",
          },
          {
            tag: "Rencontre",
            eyebrow: "Public",
            title: "Parole partagée",
            description:
              "TODO - Placeholder visuel pour un échange ou une médiation culturelle.",
            tone: "green",
            size: "tall",
          },
          {
            tag: "Rythme",
            eyebrow: "Matière",
            title: "Répertoire vivant",
            description:
              "TODO - Placeholder visuel pour un geste, un rythme ou une présence scénique.",
            tone: "secondary",
            size: "wide",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Ouverture",
      title: "Suivre les prochains formats culturels.",
      description:
        "TODO - Ce bloc accueillera plus tard un appel à suivre les actions, les rendez-vous ou les partenariats artistiques.",
      primaryAction: {
        href: "/contact",
        label: "Nous écrire",
      },
      secondaryAction: {
        href: "/partenaires",
        label: "Voir les partenaires",
      },
      variant: "warm",
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
        eyebrow: "Introduction",
        title: "Une rubrique pensée pour apprendre, pratiquer et faire circuler la langue avec simplicité.",
        paragraphs: [
          "TODO - Présenter ici l'approche retenue pour accompagner la découverte, la pratique et la circulation de la langue.",
          "TODO - Expliquer comment cette transmission pourra s'adresser à des profils différents à travers des formats simples et progressifs.",
        ],
        aside: {
          eyebrow: "Transmission",
          title: "Une attention particulière aux passages entre générations.",
          description:
            "TODO - Ce bloc pourra plus tard expliquer comment la langue se partage entre publics, âges et contextes différents.",
        },
      },
      cards: {
        eyebrow: "Formats pédagogiques",
        title: "Trois portes d'entrée pour rendre l'apprentissage plus lisible.",
        description:
          "TODO - Chaque format pourra plus tard accueillir des informations pratiques, ressources ou repères d'usage.",
        items: [
          {
            eyebrow: "Cours",
            title: "Cours & initiations",
            description:
              "TODO - Décrire ici les formats d'apprentissage, d'introduction ou d'accompagnement qui seront proposés.",
            tone: "paper",
          },
          {
            eyebrow: "Ateliers",
            title: "Ateliers de pratique",
            description:
              "TODO - Présenter les temps d'échange, de conversation ou d'expérimentation liés à la langue.",
            tone: "accent",
          },
          {
            eyebrow: "Ressources",
            title: "Ressources à consulter",
            description:
              "TODO - Prévoir ici des contenus, outils ou supports qui aideront à poursuivre la transmission.",
            tone: "green",
          },
        ],
      },
      intergenerational: {
        eyebrow: "Transmission intergénérationnelle",
        title: "Relier écoute, pédagogie et continuité des pratiques.",
        description:
          "TODO - Cette partie précisera plus tard comment la transmission se pense dans des contextes familiaux, éducatifs ou collectifs.",
        panels: [
          {
            eyebrow: "Entre générations",
            title: "Faire circuler les savoirs d'une génération à l'autre.",
            description:
              "TODO - Décrire ici des formats de partage, d'écoute ou de pratique pensés pour plusieurs âges.",
          },
          {
            eyebrow: "Milieux éducatifs",
            title: "Accompagner des usages pédagogiques plus clairs.",
            description:
              "TODO - Réserver un espace pour les ateliers, ressources ou appuis destinés à des contextes éducatifs.",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Lien utile",
      title: "Ouvrir le dialogue autour de la transmission.",
      description:
        "TODO - Cette invitation renverra plus tard vers des informations pratiques sur les ressources, les ateliers ou les prises de contact.",
      primaryAction: {
        href: "/contact",
        label: "Prendre contact",
      },
      secondaryAction: {
        href: "/association",
        label: "Voir l'association",
      },
      variant: "green",
    },
  }),
  engagements: buildPublicPage("/engagements", {
    hero: {
      eyebrow: "Positionnement",
      description:
        "TODO - Cette page exprimera la ligne de conduite, les responsabilités et les principes qui orientent les actions de l'association.",
    },
    sections: {
      manifesto: {
        eyebrow: "Texte manifeste",
        title: "Un cadre de principes à rendre plus explicite au fil du projet.",
        paragraphs: [
          "TODO - Formuler ici un texte manifeste sur les choix culturels, relationnels et éditoriaux qui guident l'association.",
          "TODO - Expliquer ensuite comment ces engagements se traduisent dans la manière de transmettre, de collaborer et d'accueillir les publics.",
        ],
        aside: {
          eyebrow: "Cap",
          title: "Préserver, relier, transmettre.",
          description:
            "TODO - Ce bloc pourra plus tard condenser en quelques lignes les responsabilités culturelles que le projet souhaite assumer.",
        },
      },
      cards: {
        eyebrow: "Engagements",
        title: "Trois lignes de travail pour donner de la cohérence à la démarche.",
        description:
          "TODO - Ces blocs expliciteront plus tard les convictions qui structurent les actions et les choix éditoriaux.",
        items: [
          {
            eyebrow: "Engagement",
            title: "Préserver",
            description:
              "TODO - Détailler la volonté de préserver des récits, des pratiques et des repères avec exigence et soin.",
            tone: "paper",
          },
          {
            eyebrow: "Engagement",
            title: "Relier",
            description:
              "TODO - Préciser comment l'association souhaite créer des liens entre générations, territoires et interlocuteurs.",
            tone: "primary",
          },
          {
            eyebrow: "Engagement",
            title: "Transmettre",
            description:
              "TODO - Décrire la manière dont les savoirs et les expressions culturelles pourront circuler et rester vivants.",
            tone: "accent",
          },
        ],
      },
      actions: {
        eyebrow: "Actions concrètes",
        title: "Des traductions opérationnelles encore à documenter avec précision.",
        description:
          "TODO - Cette section précisera plus tard comment les engagements se reflètent dans la programmation, les partenariats ou la manière de publier.",
        items: [
          {
            eyebrow: "Éditorial",
            title: "Soigner les contenus",
            description:
              "TODO - Montrer ici comment les contenus peuvent être contextualisés, sourcés ou relus avec attention.",
            tone: "secondary",
          },
          {
            eyebrow: "Relationnel",
            title: "Accueillir les échanges",
            description:
              "TODO - Décrire les formes de dialogue, d'écoute ou de collaboration que l'association souhaite rendre possibles.",
            tone: "green",
          },
          {
            eyebrow: "Public",
            title: "Rendre les actions lisibles",
            description:
              "TODO - Expliquer comment les activités, ressources et engagements seront présentés avec plus de clarté.",
            tone: "paper",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Échange",
      title: "Partager ces intentions avec nous.",
      description:
        "TODO - Cette invitation pourra plus tard orienter vers un échange, un partenariat ou une prise de parole liée aux engagements.",
      primaryAction: {
        href: "/contact",
        label: "Échanger avec nous",
      },
      secondaryAction: {
        href: "/partenaires",
        label: "Voir les partenariats",
      },
      variant: "default",
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
        eyebrow: "Introduction",
        title: "Des collaborations pensées comme des prolongements naturels du projet.",
        paragraphs: [
          "TODO - Expliquer ici les types de collaborations souhaitées, les contextes de travail possibles et les complémentarités à développer.",
          "TODO - Préciser comment les partenariats pourront soutenir la programmation, la transmission, la documentation et la diffusion.",
        ],
        aside: {
          eyebrow: "Réseau",
          title: "Une logique de coopération plus que de simple visibilité.",
          description:
            "TODO - Cet encadré pourra préciser plus tard la manière dont les collaborations s'organisent et se rendent publiques.",
        },
      },
      showcase: {
        eyebrow: "Partenaires",
        title: "Des appuis et relais à rendre visibles avec clarté lorsqu'ils seront confirmés.",
        description:
          "TODO - Cette grille accueillera plus tard les structures, lieux ou réseaux associés au projet.",
        items: partnerShowcaseItems,
      },
      reasons: {
        eyebrow: "Pourquoi nous soutenir ?",
        title: "Ce que des coopérations bien construites peuvent rendre possible.",
        description:
          "TODO - Cette section présentera plus tard les raisons de coopérer avec le projet et les formes d'appui recherchées.",
        items: partnerSupportReasons,
      },
      collaborations: {
        eyebrow: "Formes de collaboration",
        title: "Des passerelles à construire avec différents types d'acteurs.",
        description:
          "TODO - Ces pistes serviront plus tard à clarifier les domaines dans lesquels des partenariats peuvent se déployer.",
        items: partnerCollaborationCards,
      },
      becomePartner: {
        eyebrow: "Devenir partenaire",
        title: "Un cadre d'échange simple et progressif pour imaginer une collaboration.",
        paragraphs: [
          "TODO - Décrire ici les premiers éléments utiles pour engager une discussion autour d'un soutien, d'une coproduction ou d'un accueil.",
          "TODO - Préciser ensuite le type d'informations à partager pour préparer un échange clair et proportionné.",
        ],
        points: [
          "TODO - Présenter le contexte ou l'envie de collaboration.",
          "TODO - Indiquer la nature du soutien ou de la coopération envisagée.",
          "TODO - Mentionner les contraintes ou calendriers utiles si nécessaire.",
        ],
      },
    },
    cta: {
      eyebrow: "Ouverture aux collaborations",
      title: "Imaginer un partenariat adapté.",
      description:
        "TODO - Inviter ici à prendre contact pour imaginer des formes de coopération progressives, sobres et pertinentes.",
      primaryAction: {
        href: "/contact",
        label: "Proposer une collaboration",
      },
      secondaryAction: {
        href: "/association",
        label: "Découvrir l'association",
      },
      variant: "warm",
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
        eyebrow: "Introduction",
        title: "Une architecture pensée pour accueillir des ressources plus nombreuses et mieux structurées.",
        paragraphs: [
          "TODO - Présenter ici les types de fonds, de documents et de ressources qui pourront être consultés, transmis ou valorisés.",
          "TODO - Expliquer comment cette structure est pensée pour accueillir des notices, des ensembles thématiques et des contenus de référence.",
        ],
        aside: {
          eyebrow: "Parcours",
          title: "Une future base documentaire lisible et progressive.",
          description:
            "TODO - Ce bloc pourra plus tard rappeler la logique de consultation, de classement ou de contribution de la page.",
        },
      },
      filters: {
        eyebrow: "Explorer",
        title: "Des entrées visuelles simples pour préparer la navigation.",
        description:
          "TODO - Ces repères n'activent pas encore de filtre dynamique, mais dessinent déjà des parcours de consultation possibles.",
        items: archiveFilters,
      },
      cards: {
        eyebrow: "Archives en construction",
        title: "Des ensembles prêts à accueillir dossiers, documents, voix et repères.",
        description:
          "TODO - Chaque carte pourra plus tard renvoyer vers une notice, une collection ou un ensemble thématique détaillé.",
        items: archiveItems,
      },
      paths: {
        eyebrow: "Parcours de consultation",
        title: "Préparer plusieurs façons d'entrer dans les ressources.",
        description:
          "TODO - Cette section accueillera plus tard des accès thématiques, visuels ou documentaires plus développés.",
        items: archivePaths,
      },
    },
    cta: {
      eyebrow: "Contribution",
      title: "Contribuer ou signaler une ressource.",
      description:
        "TODO - Cette invitation servira plus tard à orienter vers une prise de contact autour de documents, informations ou archives à partager.",
      primaryAction: {
        href: "/contact",
        label: "Nous contacter",
      },
      secondaryAction: {
        href: "/memoires-histoire",
        label: "Voir l'axe mémoire",
      },
      variant: "default",
    },
  }),
  contact: buildPublicPage("/contact", {
    hero: {
      eyebrow: "Prendre lien",
      description:
        "TODO - Cette page rassemblera les modalités de contact, les informations utiles et les liens de présence publique.",
    },
    sections: {
      intro: {
        eyebrow: "Introduction",
        title: "Entrer en relation simplement, selon la nature de la demande.",
        paragraphs: [
          "TODO - Introduire ici la manière la plus simple d'entrer en relation avec l'association, selon les demandes, les collaborations ou les questions.",
          "TODO - Ajouter ensuite quelques indications pratiques sur les délais de réponse et les sujets qui pourront être traités ici.",
        ],
        aside: {
          eyebrow: "Repère",
          title: "Une page conçue pour rassurer et orienter.",
          description: site.contact.responseNote,
        },
      },
      methods: {
        eyebrow: "Coordonnées & liens utiles",
        title: "Plusieurs portes d'entrée selon le besoin.",
        description:
          "TODO - Cette section pourra plus tard préciser la meilleure manière d'écrire, de proposer une collaboration ou de transmettre une information.",
        items: [
          {
            eyebrow: "Email",
            title: site.contact.email,
            description:
              "TODO - Canal principal pour les échanges généraux, prises de contact et demandes de collaboration.",
            footer: "Écrire à l'association",
            href: site.contact.emailHref,
            tone: "paper",
          },
          {
            eyebrow: "WhatsApp",
            title: `WhatsApp · ${site.contact.whatsapp}`,
            description:
              "TODO - Canal à confirmer ou à détailler plus tard si ce mode de contact est retenu.",
            footer: "Disponibilité à préciser",
            href: site.contact.whatsappHref,
            tone: "green",
          },
          {
            eyebrow: "Suivi",
            title: "Réponse & orientation",
            description: site.contact.responseNote,
            note: site.contact.locationNote,
            tone: "accent",
          },
        ],
      },
      social: {
        eyebrow: "Réseaux sociaux",
        title: "Retrouver bientôt les prises de parole publiques du projet.",
        description:
          "TODO - Les liens réels et les usages de chaque plateforme viendront enrichir cette section dans une prochaine étape.",
        items: socials.map((item) => ({
          eyebrow: item.label,
          title: item.handle,
          description: item.description,
          footer: item.href && item.href !== "TODO" ? "Ouvrir le lien" : "Lien TODO",
          href: item.href,
          tone: item.tone,
        })),
      },
      form: {
        eyebrow: "Formulaire simple",
        title: "Préparer une première prise de contact.",
        description:
          "TODO - Ce formulaire n'est pas encore connecté. Il permet déjà de préparer la structure, le ton et les informations à demander plus tard.",
        fields: [
          {
            id: "contact-name",
            label: "Nom",
            type: "text",
            placeholder: "TODO - Votre nom",
          },
          {
            id: "contact-email",
            label: "Email",
            type: "email",
            placeholder: "TODO - votre@email.com",
          },
          {
            id: "contact-subject",
            label: "Sujet",
            type: "text",
            placeholder: "TODO - Objet du message",
          },
          {
            id: "contact-message",
            label: "Message",
            type: "textarea",
            placeholder: "TODO - Décrire ici votre demande, votre proposition ou votre question.",
          },
        ],
        note:
          "TODO - Formulaire non connecté à ce stade. Le contact direct par email reste la voie la plus claire.",
      },
    },
    cta: {
      eyebrow: "Contact rapide",
      title: "Choisir le canal le plus simple pour écrire.",
      description:
        "TODO - Ce bloc pourra plus tard préciser quel canal privilégier selon les demandes ou les collaborations envisagées.",
      primaryAction: {
        href: site.contact.emailHref,
        label: "Écrire par email",
      },
      secondaryAction: {
        href: site.contact.whatsappHref,
        label: `WhatsApp · ${site.contact.whatsapp}`,
      },
      variant: "green",
    },
  }),
};

function getPublicPage(key) {
  return publicPages[key];
}

export { getPublicPage, publicPages };
