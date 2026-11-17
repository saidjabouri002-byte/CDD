/**
 * Fichier central des ressources du site : logo, photos, vidéo et liens officiels.
 *
 * ── Remplacer une photo ──────────────────────────────────────────────────────
 * 1. Déposez la vraie photo CDD Tanger dans `public/images/cdd/...` (chemin indiqué dans `file`).
 * 2. Passez `ready` à `true` pour l'emplacement correspondant.
 * Tant que `ready` vaut `false`, le site affiche un emplacement réservé élégant (aucune image de
 * banque d'images n'est utilisée à la place des vraies photos du Club).
 */

export type PhotoSlot = {
  /** Chemin public de la photo (dans /public). */
  file: string;
  /** Texte alternatif en français. */
  alt: string;
  /** Passez à `true` une fois le fichier réellement présent dans /public. */
  ready: boolean;
  /** Point focal CSS (object-position), ex. "center 30%". */
  focus?: string;
};

const photo = (file: string, alt: string, ready = false, focus?: string): PhotoSlot => ({ file, alt, ready, focus });

export const logo = {
  /** Logo officiel du Club des Dirigeants (source : cddnetwork.ma/images/logo.png). */
  src: "/images/cdd/logo-cdd.png",
  width: 1200,
  height: 330,
  alt: "Club des Dirigeants",
} as const;

export const photos = {
  /**
   * Portraits du bureau exécutif : emplacements réservés en attendant les vraies photos.
   * Déposez chaque portrait (format carré conseillé) puis passez `ready` à `true`.
   */
  bureau: {
    drif: photo("/images/cdd/bureau/driss-drif.webp", "Portrait de Driss DRIF, Président-Fondateur"),
    khalifi: photo("/images/cdd/bureau/adil-khalifi.webp", "Portrait d'Adil KHALIFI, Vice-Président"),
    bennani: photo("/images/cdd/bureau/alae-karim-bennani.webp", "Portrait d'Alae KARIM BENNANI, Vice-Président"),
    sabour: photo("/images/cdd/bureau/houda-sabour.webp", "Portrait de Houda SABOUR, Secrétaire Général"),
    ibenbrahim: photo("/images/cdd/bureau/lotfi-ibenbrahim.webp", "Portrait de Lotfi IBENBRAHIM, Trésorier"),
  },
  /** Affiche de la vidéo de présentation, dans le héro. */
  /** Image d'aperçu de la vidéo YouTube officielle (copie locale de sa miniature). */
  videoPoster: photo("/images/cdd/video-presentation.webp", "Aperçu de la vidéo de présentation du Club des Dirigeants", true),
  /** Photo de la section « Découvrez le CDD Tanger ». */
  introduction: photo("/images/cdd/introduction.webp", "Échange convivial entre participants d'une rencontre du Club des Dirigeants", true, "center 30%"),
  activities: {
    cercles: photo("/images/cdd/events/cercles-affaires.webp", "Dirigeants réunis autour d'une table lors d'une réunion du Club", true),
    networking: photo("/images/cdd/events/soiree-networking.webp", "Photo de groupe lors d'une soirée networking du Club des Dirigeants à Tanger", true, "center 55%"),
    talks: photo("/images/cdd/events/business-talks.webp", "Intervenants sur scène lors d'une conférence du Club des Dirigeants", true),
    b2b: photo("/images/cdd/events/rencontres-b2b.webp", "Professionnels assistant à une rencontre du Club des Dirigeants", true),
  },
  /** Photos d'illustration des Cercles (elles ne désignent pas un Cercle en particulier). */
  cercles: {
    victoire: photo("/images/cdd/cercles/cercle-01.webp", "Membres du Club des Dirigeants réunis pour une photo de groupe", true, "center 35%"),
    synergy: photo("/images/cdd/cercles/cercle-02.webp", "Membres du Club des Dirigeants devant la bannière du Club", true, "center 45%"),
    smart: photo("/images/cdd/cercles/cercle-03.webp", "Participantes et participants d'une rencontre du Club des Dirigeants", true, "center 30%"),
  },
  /** Galerie communauté — 6 emplacements, dans l'ordre d'affichage. */
  community: [
    photo("/images/cdd/members/communaute-01.webp", "Photo de groupe des participants à un événement du Club des Dirigeants", true, "center 45%"),
    photo("/images/cdd/members/communaute-02.webp", "Public attentif lors d'une conférence du Club des Dirigeants", true),
    photo("/images/cdd/members/communaute-03.webp", "Prise de parole lors d'une rencontre du Club des Dirigeants", true, "70% 30%"),
    photo("/images/cdd/members/communaute-04.webp", "Remise d'un trophée lors d'un événement du Club des Dirigeants", true, "center 30%"),
    photo("/images/cdd/members/communaute-05.webp", "Participants assis lors d'une conférence du Club des Dirigeants", true, "center 45%"),
    photo("/images/cdd/members/communaute-06.webp", "Grande photo de groupe des membres du Club des Dirigeants", true),
  ],
  /** Photos utilisées sur les pages secondaires (Le Club, Communauté). */
  extra: {
    presentation: photo("/images/cdd/events/intervention-scene.webp", "Prise de parole sur scène lors d'une soirée du Club des Dirigeants", true, "center 35%"),
    salle1: photo("/images/cdd/events/conference-salle-01.webp", "Dirigeants réunis en salle lors d'une conférence du Club des Dirigeants", true),
    salle2: photo("/images/cdd/events/conference-salle-02.webp", "Assemblée de dirigeants autour des tables lors d'une rencontre du Club", true),
    investissement: photo("/images/cdd/events/conference-investissement.webp", "Présentation sur l'investissement lors d'une conférence du Club des Dirigeants", true),
  },
  /** Photo disponible non affichée : events/presentation-club.webp (la bannière visible affiche d'anciens chiffres). */
} as const;

export const video = {
  /**
   * URL de la vidéo de présentation (VSL). Laissez vide tant que la vidéo n'est pas prête :
   * le site affiche alors un aperçu honnête, sans bouton de lecture.
   * Accepte : lien YouTube (watch / youtu.be / shorts) ou fichier local, ex. "/videos/cdd-tanger.mp4".
   * Peut aussi être défini via la variable d'environnement NEXT_PUBLIC_VIDEO_URL.
   */
  url: process.env.NEXT_PUBLIC_VIDEO_URL || "https://www.youtube.com/watch?v=2HdTyX51Ons",
  title: "Présentation du Club des Dirigeants — CDD Maroc",
} as const;

export const links = {
  officialSite: "https://www.cdd.ma/",
  privacyPolicy: "https://cddnetwork.ma/crm/politique_de_confidentialite.php",
  circlesDirectory: "https://cddnetwork.ma/crm/public_liste_cercles.php",
} as const;

export const site = {
  name: "CDD Tanger",
  fullName: "Club des Dirigeants — Tanger",
  title: "CDD Tanger | Club des Dirigeants — Réseau d'Affaires",
  description:
    "Découvrez le CDD Tanger, un réseau d'entrepreneurs et de dirigeants pour développer vos relations professionnelles, rencontrer des partenaires et créer de nouvelles opportunités d'affaires.",
  /** URL publique du site (canonical + Open Graph). Définie par NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "",
} as const;
