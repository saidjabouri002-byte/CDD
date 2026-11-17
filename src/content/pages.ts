/**
 * Textes des pages secondaires (une page par élément du menu).
 * Les informations sur le réseau national proviennent du site officiel clubdesdirigeants.ma.
 */

export type PageIntro = { eyebrow: string; title: string; intro: string };

export const pageIntros = {
  club: {
    eyebrow: "LE CLUB",
    title: "Le Club des Dirigeants, à Tanger.",
    intro:
      "Un réseau d'affaires qui rassemble des entrepreneurs, chefs d'entreprise et décideurs de Tanger autour d'une ambition commune : grandir ensemble.",
  },
  benefits: {
    eyebrow: "AVANTAGES",
    title: "Ce que le CDD Tanger apporte à votre entreprise.",
    intro:
      "Un réseau, de la visibilité, des recommandations et des relations de confiance avec des dirigeants qui partagent vos ambitions.",
  },
  activities: {
    eyebrow: "ACTIVITÉS",
    title: "Des rencontres qui créent des opportunités.",
    intro:
      "Cercles d'Affaires, soirées networking, conférences et rencontres B2B : découvrez comment les dirigeants de Tanger se rencontrent et travaillent ensemble.",
  },
  circles: {
    eyebrow: "CERCLES D'AFFAIRES",
    title: "Les Cercles d'Affaires du CDD Tanger.",
    intro:
      "Votre réseau local, votre accélérateur business : des rencontres régulières entre dirigeants pour développer des relations de confiance et des opportunités concrètes.",
  },
  community: {
    eyebrow: "COMMUNAUTÉ",
    title: "Une communauté humaine avant tout.",
    intro:
      "Des dirigeants qui échangent leurs expériences, des entrepreneurs qui partagent leurs ambitions et des professionnels qui construisent des relations durables.",
  },
  partners: {
    eyebrow: "PARTENAIRES",
    title: "Les partenaires du réseau Club des Dirigeants.",
    intro:
      "Le Club des Dirigeants développe des partenariats avec des institutions, organisations professionnelles, entreprises, établissements d'enseignement et acteurs de l'écosystème, afin de créer des synergies et d'apporter de nouveaux avantages à ses membres.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vos questions sur le CDD Tanger.",
    intro: "Tout ce qu'il faut savoir avant de faire connaissance avec le Club des Dirigeants à Tanger.",
  },
} satisfies Record<string, PageIntro>;

/** Le Club — identité du réseau (source : clubdesdirigeants.ma). */
export const clubIdentity = {
  eyebrow: "LE CDD EN BREF",
  headline: "Un réseau d'excellence au service des décideurs.",
  text: "Le Club des Dirigeants — CDD Maroc est une association marocaine à but non lucratif qui fédère des dirigeants, entrepreneurs et décideurs depuis 2018. Sa mission : favoriser le partage d'expertise, le développement des affaires, l'entrepreneuriat, l'innovation, l'inclusion économique et les transformations digitale et durable.",
  pillars: [
    {
      title: "Notre vision",
      text: "Être le hub d'affaires, d'influence et de création de valeur le plus responsable et engagé dans le bien-être collectif.",
    },
    {
      title: "Notre mission",
      text: "Connecter les dirigeants ; développer l'entrepreneuriat, le leadership et le partage d'expertise ; accompagner les transformations digitale, responsable et durable.",
    },
    {
      title: "Nos valeurs",
      text: "Engagement, Équité et Solidarité : les valeurs qui façonnent l'identité du Club et son action collective.",
    },
  ],
} as const;

export const values = {
  eyebrow: "NOS VALEURS",
  headline: "Engagement. Équité. Solidarité.",
  items: [
    {
      title: "Engagement",
      text: "Envers les membres, les partenaires et la communauté : créer des opportunités de croissance et promouvoir une conduite éthique et responsable.",
    },
    {
      title: "Équité",
      text: "Chaque membre est traité avec respect, dignité et équité, sans discrimination ni favoritisme, dans un esprit de diversité et d'inclusion.",
    },
    {
      title: "Solidarité",
      text: "S'entraider, partager ses connaissances et contribuer activement au bien-être collectif pour créer un impact positif.",
    },
  ],
} as const;

export const leadership = {
  eyebrow: "GOUVERNANCE NATIONALE",
  headline: "Le bureau exécutif du Club des Dirigeants Tanger.",
  members: [
    { key: "drif", name: "Driss DRIF", role: "Président-Fondateur" },
    { key: "khalifi", name: "Adil KHALIFI", role: "Vice-Président" },
    { key: "bennani", name: "Alae KARIM BENNANI", role: "Vice-Président" },
    { key: "sabour", name: "Houda SABOUR", role: "Secrétaire Général" },
    { key: "ibenbrahim", name: "Lotfi IBENBRAHIM", role: "Trésorier" },
  ],
} as const;

/** Avantages d'un Cercle (source : page Cercles d'affaires du site officiel). */
export const circleAdvantages = {
  eyebrow: "POURQUOI REJOINDRE UN CERCLE ?",
  headline: "Parce que votre réseau doit travailler avec vous.",
  items: [
    "Développer votre visibilité",
    "Trouver des partenaires",
    "Générer des recommandations",
    "Accéder à de nouveaux marchés",
    "Partager votre expertise",
    "Rencontrer des décideurs",
    "Créer des relations durables",
  ],
} as const;

export const partnerPerks = {
  title: "Des avantages partenaires pour les membres",
  text: "Les membres du Club des Dirigeants bénéficient d'offres et d'avantages proposés par les partenaires de la communauté.",
  cta: "Voir les partenaires",
} as const;

/** Méthode d'un Cercle (source : page Cercles d'affaires du site officiel). */
export const circleMethod = {
  eyebrow: "LA MÉTHODE",
  headline: "Une méthode simple, une vraie dynamique.",
  steps: [
    { title: "Je rencontre", text: "Des dirigeants et entrepreneurs de différents secteurs." },
    { title: "Je me présente", text: "Je partage mon activité, mon expertise et mes besoins." },
    { title: "Je découvre", text: "Les activités et expertises des autres membres." },
    { title: "Je recommande", text: "Je deviens ambassadeur des membres de mon cercle." },
    { title: "Je connecte", text: "Je facilite les mises en relation pertinentes." },
    { title: "Je développe", text: "Des collaborations et opportunités business." },
  ],
} as const;

/** Déroulement type (source : page Cercles d'affaires du site officiel — programme indicatif du réseau). */
export const meetingFlow = {
  eyebrow: "DÉROULEMENT TYPE",
  headline: "Une rencontre de Cercle, étape par étape.",
  note: "Programme indicatif du réseau CDD. Les horaires des rencontres à Tanger sont communiqués par l'équipe.",
  steps: [
    { time: "18h00", title: "Accueil", text: "Accueil, émargement et premier contact." },
    { time: "18h15", title: "Networking", text: "Échanges libres autour d'un café de bienvenue." },
    { time: "18h35", title: "Présentation des membres", text: "Pitch éclair de chaque participant et actualités." },
    { time: "19h00", title: "Activité business", text: "Atelier collaboratif, étude de cas ou co-développement." },
    { time: "19h30", title: "Business Talk", text: "Intervention d'un expert ou partage d'expérience." },
    { time: "20h00", title: "One-to-One", text: "Rendez-vous ciblés entre membres." },
    { time: "20h30", title: "Opportunités & recommandations", text: "Partage de leads qualifiés, recommandations et clôture." },
  ],
} as const;

/** Questions supplémentaires de la page FAQ (réponses fondées sur les informations officielles du réseau). */
export const extraFaq = [
  {
    question: "Le CDD est-il présent uniquement à Tanger ?",
    answer:
      "Non. Le CDD Tanger fait partie du Club des Dirigeants — CDD Maroc, un réseau présent dans 12 régions du Maroc, avec des représentations et des ambassadeurs à l'international.",
  },
  {
    question: "Comment se déroule une rencontre de Cercle ?",
    answer:
      "Une rencontre type alterne accueil, networking, présentation des membres, activité business, Business Talk, rendez-vous One-to-One et partage de recommandations. Les modalités à Tanger vous sont présentées par l'équipe.",
  },
  {
    question: "Quels Cercles existent à Tanger ?",
    answer:
      "L'annuaire officiel recense aujourd'hui CDD Tanger Victoire, CDD Tanger Synergy et CDD Tanger Smart. Deux nouveaux Cercles sont en préparation : CDD Tanger Centre et CDD Tanger Technopark.",
  },
  {
    question: "Ma demande d'information m'engage-t-elle ?",
    answer:
      "Non. Le formulaire est une simple demande d'information : il ne constitue pas une adhésion. Chaque demande d'adhésion au CDD est ensuite étudiée individuellement.",
  },
] as const;
