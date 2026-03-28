# Association Kréyol — Site vitrine

Site vitrine culturel et éditorial développé pour présenter l’Association Kréyol, ses axes de transmission, ses actions, ses partenaires et ses contenus visuels.  
Le projet est construit avec Next.js App Router en JavaScript, avec une interface pensée pour un rendu sobre, lisible et responsive.

## Aperçu du projet

- Type de projet : site vitrine
- Statut : base visuelle et technique prête, contenus finaux encore à compléter
- Framework : Next.js 16 (App Router)
- Langage : JavaScript
- Styling : Tailwind CSS v4 + `globals.css`
- Animations : Motion for React (`motion`)
- Déploiement prévu : Netlify

## Stack technique

- Next.js 16.2.1
- React 19
- JavaScript
- Tailwind CSS 4
- Motion for React (`motion`)
- ESLint
- `next/font/google` pour les polices

## Installation locale

Cloner le dépôt, installer les dépendances puis lancer le serveur de développement :

```bash
git clone <url-du-repo>
cd asso-kreyol
npm install
npm run dev
```

Le site sera ensuite disponible sur :

```text
http://localhost:3000
```

## Scripts disponibles

- `npm run dev` : lance le serveur de développement
- `npm run build` : génère le build de production Next.js
- `npm run start` : démarre le site en mode production après build
- `npm run lint` : lance ESLint sur l’ensemble du projet

## Structure du projet

Arborescence utile :

```text
src/
  app/                  Pages App Router, layout global, not-found, styles globaux
  components/
    common/             Composants UI réutilisables
    home/               Sections spécifiques à la page d’accueil
    layout/             Haut de page, bas de page, navigation, cadre global
    shared/             Blocs partagés entre plusieurs pages
  data/                 Contenus mock, navigation, pages, partenaires, réseaux
  lib/                  Helpers utilitaires, metadata, motion

public/
  images/assokreyol/    Images locales du projet

DEPLOY_NETLIFY.md       Guide court de mise en ligne
netlify.toml            Configuration minimale Netlify
next.config.mjs         Configuration Next.js
```

## Pages publiques actuellement présentes

- `/`
- `/association`
- `/memoires-histoire`
- `/arts-folklore`
- `/langue-transmission`
- `/partenaires`
- `/contact`
- `/_not-found`

## Gestion du contenu

Le projet utilise une base de contenu centralisée dans [`src/data`](./src/data).

On y retrouve notamment :

- les informations globales du site
- la navigation
- les contenus de la page d’accueil
- les contenus des pages internes
- les partenaires
- les réseaux sociaux

Une partie des textes est encore en placeholder avec des mentions `TODO`.  
Ces contenus devront être remplacés par les textes validés par l’association avant mise en ligne définitive.

## Images et assets

Les images locales du projet sont stockées dans :

```text
public/images/assokreyol
```

Sous-dossiers actuellement utilisés :

- `hero`
- `memory`
- `kreyolodays`
- `partners`

Recommandations :

- conserver des noms de fichiers simples et explicites
- remplacer les fichiers existants proprement plutôt que multiplier les variantes inutiles
- privilégier des images optimisées et cohérentes avec la direction visuelle
- ne pas ajouter de légendes ou descriptions non validées
- utiliser un logo avec fond transparent si possible

## Déploiement Netlify

Le projet est préparé pour un déploiement standard Next.js sur Netlify.

Configuration retenue :

- Build command : `next build`
- Publish directory : `.next`

Le projet ne doit pas être converti en export statique.

Étapes générales :

1. connecter le dépôt Git à Netlify
2. choisir la branche de production
3. vérifier la commande de build `next build`
4. vérifier le dossier de publication `.next`
5. lancer le déploiement

Pour plus de détails, voir [`DEPLOY_NETLIFY.md`](./DEPLOY_NETLIFY.md).

## Variables d’environnement

Aucune variable d’environnement n’est nécessaire pour le moment.

Si des variables sont ajoutées plus tard :

- utiliser `.env.local` en local
- ne jamais versionner de secret réel
- utiliser le préfixe `NEXT_PUBLIC_` uniquement pour les variables qui doivent être visibles côté navigateur

## Qualité, responsive et accessibilité

Le site a été travaillé pour offrir une base solide sur :

- desktop
- tablette
- mobile
- accessibilité de base
- cohérence visuelle
- performance perçue correcte

Cela ne remplace pas une recette finale complète avant mise en ligne, mais la base actuelle est propre et exploitable.

## Points de vigilance / TODO

Éléments encore à finaliser :

- remplacer les textes placeholder restants dans `src/data`
- valider les contenus éditoriaux finaux de l’association
- renseigner les vraies coordonnées de contact
- renseigner les liens réels des réseaux sociaux
- confirmer les logos et partenaires à afficher
- vérifier si le formulaire de contact doit rester informatif ou être connecté plus tard
- remplacer le logo actuel par une version parfaitement détourée si nécessaire
- finaliser les éventuels détails SEO restants : favicon, textes finaux, metadata si les contenus évoluent

## Prochaines étapes possibles

- intégrer les contenus texte validés par le client
- finaliser les visuels et crédits image si nécessaire
- connecter un vrai formulaire de contact si le besoin est confirmé
- faire une dernière recette éditoriale et visuelle avant publication
- brancher le dépôt à Netlify et lancer la mise en ligne

## Contexte

Projet développé pour l’Association Kréyol dans le cadre d’un site vitrine culturel.  
Certaines informations restent volontairement génériques tant que les contenus finaux n’ont pas été validés.

## Licence

Aucune licence spécifique n’est définie pour le moment.
