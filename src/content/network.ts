/**
 * Faits officiels sur le réseau Club des Dirigeants — CDD Maroc.
 * Chaque bloc indique sa source. Mettez à jour ici si le Club publie de nouveaux chiffres.
 */

export const sources = {
  impact: "https://www.clubdesdirigeants.ma/notre-impact/",
  about: "https://www.clubdesdirigeants.ma/qui-sommes-nous/",
  mission: "https://www.clubdesdirigeants.ma/notre-mission/",
  values: "https://www.clubdesdirigeants.ma/nos-valeurs/",
  circles: "https://www.clubdesdirigeants.ma/cercles-daffaires/",
  partners: "https://www.clubdesdirigeants.ma/partenaires/",
  tangerNews:
    "https://www.clubdesdirigeants.ma/le-cdd-poursuit-son-developpement-territorial-avec-la-preparation-de-deux-nouveaux-cercles-daffaires-a-tanger/",
  site: "https://www.clubdesdirigeants.ma/",
} as const;

/** Chiffres publiés sur la page « Notre impact » du site officiel. */
export const keyFigures = [
  { value: 8000, prefix: "+", label: "membres" },
  { value: 12, prefix: "", label: "régions du Maroc" },
  { value: 32, prefix: "", label: "pays" },
  { value: 10, prefix: "+", label: "Cercles d'affaires actifs" },
  { value: 100, prefix: "+", label: "partenaires" },
  { value: 2018, prefix: "", label: "année de création", plain: true },
] as const;

/**
 * Villes où l'annuaire officiel des Cercles (cddnetwork.ma) recense des Cercles d'Affaires.
 * lat / lon : coordonnées réelles, utilisées pour placer les points sur la carte.
 */
export const cities = [
  { name: "Tanger", lat: 35.77, lon: -5.8, hub: true },
  { name: "Rabat", lat: 34.02, lon: -6.84 },
  { name: "Mohammedia", lat: 33.69, lon: -7.38 },
  { name: "Casablanca", lat: 33.57, lon: -7.59 },
  { name: "Fès", lat: 34.03, lon: -5.0 },
  { name: "Meknès", lat: 33.9, lon: -5.55 },
  { name: "Marrakech", lat: 31.63, lon: -8.0 },
  { name: "Agadir", lat: 30.42, lon: -9.6 },
] as const;

/** Ambassadeurs internationaux annoncés par le CDD (actualités du site officiel, octobre 2026). */
export const ambassadors = [
  { country: "Suisse", flag: "🇨🇭" },
  { country: "Russie", flag: "🇷🇺" },
  { country: "Émirats arabes unis", flag: "🇦🇪" },
  { country: "Australie", flag: "🇦🇺" },
] as const;

export const network = {
  eyebrow: "ANCRÉ À TANGER · CONNECTÉ AU MONDE",
  headline: ["Votre Cercle est à Tanger.", "Votre réseau va bien plus loin."],
  intro:
    "En rejoignant le CDD Tanger, vous rencontrez les dirigeants de votre ville — et vous intégrez un réseau présent dans les régions du Royaume et ouvert sur l'international.",
  mapTitle: "Les villes des Cercles d'Affaires CDD",
  mapCaption: "Villes recensées dans l'annuaire officiel des Cercles d'Affaires.",
  nationalTitle: "Un réseau national",
  nationalText:
    "De Tanger à Lagouira, le Club des Dirigeants s'appuie sur 12 présidences régionales actives pour mobiliser les décideurs économiques au plus près de chaque territoire.",
  internationalTitle: "Ouvert sur l'international",
  internationalText:
    "Des représentations en Europe, en Amérique du Nord et en Afrique, et des ambassadeurs du CDD qui créent des passerelles économiques avec le Maroc.",
  ambassadorsLabel: "Ambassadeurs du CDD",
  figuresSource: "Chiffres publiés par le Club des Dirigeants — CDD Maroc",
} as const;

/** Actualité officielle : nouveaux Cercles en préparation à Tanger. */
export const tangerNews = {
  label: "Nouveau à Tanger",
  date: "Annonce du 14 octobre 2026",
  title: "Deux nouveaux Cercles d'Affaires en préparation à Tanger",
  text: "Le Club des Dirigeants poursuit son développement territorial à Tanger avec la préparation de deux nouveaux Cercles d'Affaires.",
  circles: ["CDD TANGER CENTRE", "CDD TANGER TECHNOPARK"],
  link: "Lire l'annonce officielle",
} as const;
