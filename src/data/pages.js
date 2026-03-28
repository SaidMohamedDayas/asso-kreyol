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
    seoDescription:
      content.seoDescription || content.hero?.description || site.description,
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
    seoDescription:
      "Présentation de l’Association Kréyol, de son cadre, de sa mission et de ses repères de travail.",
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
    seoDescription:
      "Une page dédiée aux récits, archives, repères historiques et transmissions mémorielles.",
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
          imageSrc: "/images/assokreyol/memory/memory-omaj_ba_yo.jpg",
          imageAlt: "Groupe réuni en intérieur",
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
            imageSrc: "/images/assokreyol/memory/memory-omaj_ba_yo-logo.png",
            imageAlt: "Visuel Omaj Ba Yo",
            imageFit: "contain",
          },
          {
            tag: "Archive",
            eyebrow: "Récit",
            title: "Repères patrimoniaux",
            description:
              "TODO - Une entrée pour les contextes, dates et jalons à rendre plus clairs.",
            tone: "primary",
            size: "square",
            imageSrc:
              "/images/assokreyol/memory/memory-exposition_archeologie_de_lesclavage_colonial.jpg",
            imageAlt: "Visuel d'exposition",
            imageFit: "contain",
          },
          {
            tag: "Voix",
            eyebrow: "Transmission",
            title: "Témoignages",
            description:
              "TODO - Une place pour les paroles, souvenirs et traces orales à documenter.",
            tone: "green",
            size: "tall",
            imageSrc: "/images/assokreyol/memory/memory-hommage_a_marcel_dorigny.png",
            imageAlt: "Visuel d'hommage",
            imageFit: "contain",
          },
          {
            tag: "Ressource",
            eyebrow: "Consultation",
            title: "Dossiers à venir",
            description:
              "TODO - Un cadre pour accueillir plus tard des dossiers éditorialisés.",
            tone: "accent",
            size: "square",
            imageSrc: "/images/assokreyol/memory/memory_gwo-ka-se-tan-nou-tout.png",
            imageAlt: "Visuel de programmation",
            imageFit: "contain",
          },
        ],
      },
    },
    cta: {
      eyebrow: "Prolonger la visite",
      title: "Poursuivre la visite.",
      description:
        "TODO - Cette invitation servira plus tard à prolonger la visite vers d'autres rubriques ou une prise de contact autour des contenus mémoriels.",
      primaryAction: {
        href: "/contact",
        label: "Nous contacter",
      },
      secondaryAction: {
        href: "/association",
        label: "Voir l'association",
      },
      variant: "memory",
    },
  }),
  artsFolklore: buildPublicPage("/arts-folklore", {
    seoDescription:
      "Une page consacrée aux pratiques culturelles, aux formats publics et aux expressions artistiques.",
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
          imageSrc: "/images/assokreyol/kreyolodays/kreyolodays-kafe_pawol.jpeg",
          imageAlt: "Prise de parole devant un micro",
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
              "Une première image de groupe introduit une présence collective simple et chaleureuse.",
            tone: "primary",
            size: "feature",
            imageSrc: "/images/assokreyol/hero/hero-home.jpg",
            imageAlt: "Groupe réuni dans une salle",
          },
          {
            tag: "Pratique",
            eyebrow: "Transmission",
            title: "Dictée en Kréyòl",
            description:
              "Une première matière visuelle pour les formats de langue et d’atelier.",
            tone: "accent",
            size: "square",
            imageSrc: "/images/assokreyol/kreyolodays/kreyolodays-dictee_en_kreyol.jpeg",
            imageAlt: "Atelier autour d'une table",
          },
          {
            tag: "Rencontre",
            eyebrow: "Public",
            title: "Marché Kréyòl",
            description:
              "Une composition plus dense pour suggérer les formats conviviaux et ouverts au public.",
            tone: "green",
            size: "tall",
            imageSrc: "/images/assokreyol/kreyolodays/kreyolodays-marche_kreyol.png",
            imageAlt: "Stands et produits présentés en intérieur",
            imageFit: "contain",
          },
          {
            tag: "Rythme",
            eyebrow: "Matière",
            title: "Découverte",
            description:
              "Une image de découverte qui garde une tonalité simple et éditoriale.",
            tone: "secondary",
            size: "wide",
            imageSrc:
              "/images/assokreyol/kreyolodays/kreyolodays_decouverte_bananes_des_antilles.jpg",
            imageAlt: "Produits et support de présentation",
            imageFit: "contain",
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
    seoDescription:
      "Une rubrique dédiée à la langue, à la pédagogie et à la circulation des savoirs.",
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
  partenaires: buildPublicPage("/partenaires", {
    seoDescription:
      "Une présentation sobre des coopérations, soutiens et possibilités de partenariat.",
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
        title: "Une première sélection de logos et de relais déjà présents dans les ressources du projet.",
        description:
          "Cette grille donne déjà un aperçu des appuis visibles à ce stade, tout en laissant en attente les précisions sur la nature exacte des collaborations.",
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
  contact: buildPublicPage("/contact", {
    seoDescription:
      "Les principales informations pour entrer en relation avec l’Association Kréyol.",
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
