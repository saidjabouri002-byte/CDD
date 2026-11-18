/**
 * Tous les textes français de la page, regroupés ici.
 * Modifier un texte = modifier ce fichier uniquement.
 */

export const nav = {
  links: [
    { label: "Le Club", href: "/le-club" },
    { label: "Avantages", href: "/avantages" },
    { label: "Activités", href: "/activites" },
    { label: "Cercles", href: "/cercles" },
    { label: "Communauté", href: "/communaute" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Rejoindre CDD Tanger", href: "/#contact" },
} as const;

export const hero = {
  eyebrow: "CLUB DES DIRIGEANTS · TANGER",
  headlineLead: "Vous Êtes Entrepreneur à Tanger ?",
  headlineEmphasis: "Ne Développez plus Votre Entreprise Seul.",
  subheadline:
    "Rejoignez un réseau de dirigeants et d'entrepreneurs qui partagent vos ambitions, développent des relations de confiance et créent ensemble de nouvelles opportunités d'affaires.",
  microcopy: "Développez votre réseau. Faites connaître votre entreprise. Créez de nouvelles opportunités.",
  primaryCta: { label: "Rejoindre CDD Tanger", href: "/#contact" },
  secondaryCta: { label: "Voir nos activités", href: "/#activites" },
  floatingCards: [
    "Des Rencontres entre Entrepreneurs",
    "Un Réseau d'Affaires à Tanger",
    "Des Connexions qui Créent des Opportunités",
  ],
} as const;

export const trust = {
  label: "RÉSEAU D'AFFAIRES · TANGER · MAROC",
  main: "Un Réseau d'Affaires au Service des Entrepreneurs et Dirigeants.",
  supporting:
    "CDD Tanger s'inscrit dans la dynamique du Club des Dirigeants, un réseau qui favorise les échanges, les recommandations et les opportunités entre professionnels.",
} as const;

export const problem = {
  eyebrow: "LE CONSTAT",
  headline: ["Votre Entreprise a du Potentiel.", "Mais Votre Réseau est-il à la Hauteur de Vos Ambitions ?"],
  intro:
    "Vous travaillez chaque jour pour développer votre activité. Pourtant, certaines opportunités restent difficiles à saisir lorsqu'on avance seul.",
  cards: [
    {
      title: "Vous Manquez de Contacts Professionnels ?",
      text: "Vous aimeriez rencontrer davantage de dirigeants, de décideurs et d'entrepreneurs dans votre région.",
    },
    {
      title: "Vous Cherchez à Développer Votre Activité ?",
      text: "Vous souhaitez faire connaître votre entreprise et créer de nouvelles opportunités commerciales.",
    },
    {
      title: "Vous Avez Besoin de Partenaires Fiables ?",
      text: "Vous savez que les bonnes collaborations peuvent accélérer le développement de votre entreprise.",
    },
    {
      title: "Vous Souhaitez Rejoindre une Communauté d'Entrepreneurs ?",
      text: "Vous aimeriez partager vos expériences, échanger des idées et vous entourer de personnes qui comprennent vos défis.",
    },
  ],
  closing:
    "Votre prochaine opportunité ne dépend peut-être pas uniquement de ce que vous savez, mais aussi de qui vous connaissez.",
} as const;

export const introduction = {
  eyebrow: "DÉCOUVREZ LE CDD TANGER",
  headline: "Les Bonnes Relations font les Grandes Opportunités.",
  paragraphs: [
    "Bienvenue au Club des Dirigeants de Tanger.",
    "Un réseau d'affaires qui rassemble des entrepreneurs, chefs d'entreprise et décideurs autour d'une ambition commune : grandir ensemble.",
    "À travers nos Cercles d'Affaires et les activités du réseau, nous favorisons les échanges, la confiance, les recommandations et les collaborations entre professionnels.",
  ],
  highlight: "Bien plus que des contacts. Des relations qui peuvent faire avancer votre entreprise.",
  cta: { label: "Je souhaite découvrir le Club", href: "/#contact" },
  videoLabel: "Découvrez le CDD Tanger",
  videoPending: "Vidéo de présentation bientôt disponible",
} as const;

export const benefits = {
  eyebrow: "POURQUOI NOUS REJOINDRE ?",
  headline: "Ce que le CDD Tanger peut Apporter à Votre Entreprise.",
  cards: [
    {
      icon: "network",
      title: "Développez Votre Réseau",
      text: "Rencontrez des dirigeants, entrepreneurs et professionnels de différents secteurs d'activité.",
    },
    {
      icon: "megaphone",
      title: "Faites Connaître Votre Entreprise",
      text: "Présentez votre activité, partagez votre expertise et gagnez en visibilité auprès d'autres professionnels.",
    },
    {
      icon: "handshake",
      title: "Créez des Opportunités d'Affaires",
      text: "Développez des mises en relation, des recommandations et des possibilités de partenariat.",
    },
    {
      icon: "rocket",
      title: "Entourez-vous d'Entrepreneurs Ambitieux",
      text: "Échangez avec des personnes qui partagent votre envie d'entreprendre, d'innover et de progresser.",
    },
    {
      icon: "lightbulb",
      title: "Apprenez et Partagez Vos Expériences",
      text: "Découvrez de nouvelles perspectives grâce aux échanges, conférences et rencontres du réseau.",
    },
    {
      icon: "compass",
      title: "Élargissez Vos Horizons",
      text: "Bénéficiez de la dynamique d'un club implanté dans plusieurs régions du Maroc.",
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "COMMENT ÇA MARCHE ?",
  headline: "Développer Votre Réseau n'a pas Besoin d'Être Compliqué.",
  steps: [
    {
      number: "01",
      title: "Faites Connaissance avec le CDD Tanger",
      text: "Présentez votre entreprise et découvrez comment fonctionne notre réseau d'affaires.",
    },
    {
      number: "02",
      title: "Rencontrez d'Autres Entrepreneurs",
      text: "Découvrez nos Cercles d'Affaires et les possibilités de participation aux prochaines rencontres.",
    },
    {
      number: "03",
      title: "Créez des Relations Durables",
      text: "Échangez, partagez vos expertises et développez des possibilités de collaboration avec les autres professionnels du réseau.",
    },
  ],
  cta: { label: "Découvrir comment participer", href: "/#contact" },
} as const;

export const activities = {
  eyebrow: "NOS ACTIVITÉS",
  headline: ["Des Rencontres qui Créent des Connexions.", "Des Connexions qui Ouvrent des Opportunités."],
  items: [
    {
      key: "cercles",
      title: "Les Cercles d'Affaires",
      text: "Des rencontres régulières entre dirigeants et entrepreneurs pour se connaître, présenter leurs activités et favoriser les recommandations.",
    },
    {
      key: "networking",
      title: "Les Rencontres de Networking",
      text: "Des occasions de développer votre réseau professionnel et d'échanger avec de nouveaux contacts dans un environnement convivial.",
    },
    {
      key: "talks",
      title: "Les Conférences et Business Talks",
      text: "Des moments d'échange et de partage autour de l'entrepreneuriat, du leadership, de l'innovation et du développement des entreprises.",
    },
    {
      key: "b2b",
      title: "Les Rencontres Professionnelles B2B",
      text: "Des possibilités d'échange entre entreprises pour identifier des synergies, des complémentarités et des collaborations.",
    },
  ],
  disclaimer: "Les activités accessibles à Tanger sont communiquées en fonction de la programmation du réseau.",
} as const;

export const circles = {
  eyebrow: "NOS CERCLES",
  headline: "Découvrez les Cercles d'Affaires du CDD Tanger.",
  intro:
    "Au sein de nos Cercles d'Affaires, les membres se retrouvent régulièrement pour mieux se connaître, partager leurs expériences et construire des relations professionnelles de confiance.",
  items: [
    {
      key: "victoire",
      name: "CDD TANGER VICTOIRE",
      text: "Rencontres, échanges et développement de relations professionnelles.",
    },
    {
      key: "synergy",
      name: "CDD TANGER SYNERGY",
      text: "Un espace pour découvrir des complémentarités et des opportunités de collaboration.",
    },
    {
      key: "smart",
      name: "CDD TANGER SMART",
      text: "Des échanges entre professionnels autour des connexions et du développement des entreprises.",
    },
  ],
  directoryLabel: "Consulter l'annuaire officiel des Cercles",
  cta: { label: "En savoir plus sur nos Cercles", href: "/#contact" },
} as const;

export const community = {
  eyebrow: "LA COMMUNAUTÉ CDD TANGER",
  headline: ["Derrière Chaque Entreprise, il y a des Personnes.", "Et Derrière Chaque Opportunité, il y a Souvent une Rencontre."],
  paragraphs: [
    "CDD Tanger, c'est avant tout une communauté humaine.",
    "Des dirigeants qui échangent leurs expériences, des entrepreneurs qui partagent leurs ambitions et des professionnels qui construisent des relations au-delà de leurs activités respectives.",
  ],
  highlight: "Ensemble, Allons plus Loin.",
} as const;

export const contact = {
  eyebrow: "CONTACT",
  headline: "Et si Votre Prochaine Opportunité d'Affaires Commençait Ici ?",
  paragraphs: [
    "Vous êtes entrepreneur, chef d'entreprise ou dirigeant à Tanger ?",
    "Faites connaissance avec le CDD Tanger et découvrez comment développer votre réseau au sein de notre communauté.",
  ],
  instruction: "Complétez le formulaire pour être recontacté par notre équipe.",
  fields: {
    fullName: { label: "Nom et prénom", placeholder: "Votre nom et prénom" },
    company: { label: "Nom de l'entreprise", placeholder: "Nom de votre entreprise" },
    role: { label: "Votre fonction", placeholder: "Ex. Gérant, Directeur général…" },
    sector: { label: "Secteur d'activité", placeholder: "Sélectionnez votre secteur" },
    whatsapp: { label: "Numéro WhatsApp", placeholder: "6 12 34 56 78", countryLabel: "Indicatif du pays" },
    objective: { label: "Votre objectif principal", placeholder: "Sélectionnez votre objectif" },
    email: { label: "Email professionnel", placeholder: "vous@entreprise.ma", optional: "facultatif" },
  },
  sectors: [
    "Commerce et distribution",
    "Industrie",
    "BTP et immobilier",
    "Services aux entreprises",
    "Technologies et digital",
    "Tourisme, hôtellerie et restauration",
    "Transport et logistique",
    "Finance, assurance et conseil",
    "Santé et bien-être",
    "Éducation et formation",
    "Agriculture et agroalimentaire",
    "Artisanat",
    "Autre",
  ],
  objectives: [
    "Développer mon réseau professionnel",
    "Rencontrer des partenaires",
    "Découvrir les Cercles d'Affaires",
    "Participer aux rencontres",
    "En savoir plus sur l'adhésion",
  ],
  consent: {
    before: "J'accepte que les informations saisies soient utilisées par l'équipe du CDD Tanger pour me recontacter au sujet de ma demande, conformément à la ",
    link: "politique de confidentialité",
    after: ".",
  },
  submit: "Je souhaite découvrir le CDD Tanger",
  submitting: "Envoi en cours…",
  microcopy:
    "L'envoi de ce formulaire est une demande d'information. Il ne constitue pas une adhésion automatique au Club.",
  success: {
    title: "Merci pour votre intérêt !",
    text: "Votre demande a bien été transmise à l'équipe CDD Tanger. Nous vous contacterons pour vous présenter le Club et les possibilités de participation.",
  },
  demo: {
    badge: "Mode démonstration",
    notice:
      "Le formulaire n'est pas encore relié au système de contact du CDD Tanger. Aucune donnée n'est envoyée ni enregistrée pour le moment.",
    afterSubmit:
      "Formulaire valide — mais aucune demande n'a été transmise : l'intégration n'est pas encore configurée. Vos informations n'ont pas été envoyées.",
  },
  errors: {
    generic: "Une erreur est survenue lors de l'envoi. Veuillez réessayer dans quelques instants.",
    network: "Connexion impossible. Vérifiez votre accès à Internet puis réessayez.",
    rateLimit: "Trop de tentatives. Merci de patienter quelques minutes avant de réessayer.",
    notConfigured:
      "Le formulaire n'est pas encore relié au système de contact du CDD Tanger. Votre demande n'a pas été transmise.",
    summary: "Merci de corriger les champs signalés avant d'envoyer le formulaire.",
  },
} as const;

export const faq = {
  eyebrow: "FAQ",
  headline: ["Vous Avez des Questions ?", "Nous Avons les Réponses."],
  items: [
    {
      question: "À qui s'adresse le CDD Tanger ?",
      answer:
        "Aux entrepreneurs, dirigeants, chefs d'entreprise et professionnels souhaitant développer leurs relations d'affaires et contribuer à un réseau professionnel dynamique.",
    },
    {
      question: "Qu'est-ce qu'un Cercle d'Affaires ?",
      answer:
        "C'est un groupe de professionnels qui se réunissent régulièrement pour mieux se connaître, présenter leurs activités, partager leurs expériences et favoriser les recommandations.",
    },
    {
      question: "Puis-je découvrir le CDD avant de devenir membre ?",
      answer:
        "Vous pouvez contacter l'équipe pour découvrir le fonctionnement du Club et les conditions de participation à ses activités.",
    },
    {
      question: "L'adhésion au CDD est-elle payante ?",
      answer:
        "Les modalités et les différentes formules d'adhésion peuvent vous être communiquées par l'équipe du CDD.",
    },
    {
      question: "Puis-je rejoindre le réseau si mon entreprise est récente ?",
      answer:
        "Vous pouvez présenter votre activité et votre profil à l'équipe afin de connaître les conditions d'adhésion et les Cercles adaptés.",
    },
  ],
} as const;

export const finalCta = {
  headline: "Les Bonnes Opportunités Commencent par les Bonnes Rencontres.",
  paragraphs: [
    "Ne limitez pas le développement de votre entreprise à votre réseau actuel.",
    "Faites connaissance avec des entrepreneurs et dirigeants de Tanger qui partagent vos ambitions.",
  ],
  highlight: "Rejoignez la dynamique CDD Tanger.",
  cta: { label: "Je souhaite rejoindre le réseau", href: "/#contact" },
} as const;

export const footer = {
  name: "Club des Dirigeants — Tanger",
  tagline: "Réseau d'affaires · Tanger · Maroc",
  navTitle: "Navigation",
  linksTitle: "Liens utiles",
  officialSite: "Site officiel du Club des Dirigeants",
  privacy: "Politique de confidentialité",
  contact: "Nous contacter",
} as const;

/**
 * Transcription de la vidéo de présentation (VSL) — réservée à l'équipe de production.
 * Ce texte n'est PAS affiché sur la page.
 */
export const vslTranscript = `Vous êtes entrepreneur à Tanger ?

Alors, laissez-moi vous poser une question.

Combien d'opportunités d'affaires avez-vous peut-être manquées simplement parce que vous ne connaissiez pas les bonnes personnes ?

Parce qu'aujourd'hui, pour développer une entreprise, avoir un bon produit ou un bon service ne suffit pas toujours.

Il faut aussi être bien entouré.

C'est justement la raison d'être du Club des Dirigeants à Tanger.

Nous réunissons des entrepreneurs, des chefs d'entreprise et des décideurs qui souhaitent développer leur réseau, partager leurs expériences et créer de nouvelles opportunités d'affaires.

À travers nos Cercles d'Affaires et les rencontres du réseau, vous pouvez présenter votre entreprise, faire connaissance avec d'autres dirigeants et développer des relations de confiance.

Ici, l'objectif n'est pas simplement de collectionner des contacts.

C'est de construire de vraies relations professionnelles, qui peuvent ouvrir la porte à des recommandations, des partenariats et de nouvelles collaborations.

Et le plus intéressant, c'est que vous rejoignez la dynamique d'un réseau d'affaires présent dans plusieurs régions du Maroc.

Alors, si vous êtes entrepreneur à Tanger et que vous souhaitez élargir votre réseau, nous serons ravis de faire votre connaissance.

Remplissez le formulaire et découvrez le CDD Tanger.

Parce que les bonnes opportunités commencent souvent par les bonnes rencontres.`;
