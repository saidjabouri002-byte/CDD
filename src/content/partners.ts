/**
 * Partenaires du réseau Club des Dirigeants — CDD Maroc.
 * Source : https://www.clubdesdirigeants.ma/partenaires/ (logos téléchargés et optimisés en WebP).
 * Ce sont des partenaires du réseau national, pas des partenaires propres au CDD Tanger.
 * `featured` : logos affichés dans le bandeau défilant de la page d'accueil.
 */

export type PartnerCategory = "institutionnels" | "academiques" | "professionnels" | "entreprises";

export type Partner = {
  name: string;
  category: PartnerCategory;
  file: string;
  width: number;
  height: number;
  featured?: boolean;
};

export const partnerCategories: { key: PartnerCategory; title: string; text: string }[] = [
  { key: "institutionnels", title: "Partenaires Institutionnels", text: "Institutions et organismes qui accompagnent l'entrepreneuriat et le développement économique." },
  { key: "academiques", title: "Partenaires Académiques", text: "Écoles, universités et centres de formation de l'écosystème." },
  { key: "professionnels", title: "Partenaires Professionnels et Écosystèmes", text: "Entreprises, médias et acteurs de l'écosystème qui soutiennent la dynamique du réseau." },
  { key: "entreprises", title: "Partenaires Entreprises", text: "Entreprises qui proposent des offres et avantages aux membres de la communauté." },
];

export const partners: Partner[] = [
  { name: "ADD – Agence de Développement du Digital", category: "institutionnels", file: "/images/cdd/partenaires/add.webp", width: 207, height: 74, },
  { name: "Technopark", category: "institutionnels", file: "/images/cdd/partenaires/technopark.webp", width: 174, height: 108, featured: true, },
  { name: "AUSIM", category: "institutionnels", file: "/images/cdd/partenaires/ausim.webp", width: 132, height: 44, featured: true, },
  { name: "Maroc PME", category: "institutionnels", file: "/images/cdd/partenaires/maroc-pme.webp", width: 188, height: 42, featured: true, },
  { name: "Echos Communication", category: "institutionnels", file: "/images/cdd/partenaires/echos-communication.webp", width: 395, height: 128, },
  { name: "CJEM", category: "institutionnels", file: "/images/cdd/partenaires/cjem.webp", width: 267, height: 124, featured: true, },
  { name: "CIME", category: "institutionnels", file: "/images/cdd/partenaires/cime.webp", width: 160, height: 160, },
  { name: "Belgique – partenaire du développement", category: "institutionnels", file: "/images/cdd/partenaires/belgique.webp", width: 400, height: 92, },
  { name: "UNAI", category: "institutionnels", file: "/images/cdd/partenaires/unai.webp", width: 100, height: 160, },
  { name: "AMLOG", category: "institutionnels", file: "/images/cdd/partenaires/amlog.webp", width: 400, height: 97, },
  { name: "AMCA", category: "institutionnels", file: "/images/cdd/partenaires/amca.webp", width: 326, height: 94, },
  { name: "ANAPEC", category: "institutionnels", file: "/images/cdd/partenaires/anapec.webp", width: 160, height: 160, featured: true, },
  { name: "UIR – Université Internationale de Rabat", category: "academiques", file: "/images/cdd/partenaires/uir.webp", width: 234, height: 160, featured: true, },
  { name: "Capstone Academy", category: "academiques", file: "/images/cdd/partenaires/capstone-academy.webp", width: 233, height: 135, },
  { name: "ISGA", category: "academiques", file: "/images/cdd/partenaires/isga.webp", width: 269, height: 89, featured: true, },
  { name: "ESLSCA Business School Rabat", category: "academiques", file: "/images/cdd/partenaires/eslsca-business-school-rabat.webp", width: 375, height: 70, featured: true, },
  { name: "ESITH", category: "academiques", file: "/images/cdd/partenaires/esith.webp", width: 260, height: 145, },
  { name: "ESIG", category: "academiques", file: "/images/cdd/partenaires/esig.webp", width: 259, height: 124, },
  { name: "English Institute", category: "academiques", file: "/images/cdd/partenaires/english-institute.webp", width: 148, height: 140, },
  { name: "ETA – English & Travel Agency", category: "academiques", file: "/images/cdd/partenaires/eta.webp", width: 195, height: 124, },
  { name: "Speak Up", category: "academiques", file: "/images/cdd/partenaires/speak-up.webp", width: 151, height: 151, },
  { name: "Sup'Management", category: "academiques", file: "/images/cdd/partenaires/supmanagement.webp", width: 157, height: 136, },
  { name: "Yamed Group", category: "professionnels", file: "/images/cdd/partenaires/yamed-group.webp", width: 239, height: 89, featured: true, },
  { name: "Super Engines", category: "professionnels", file: "/images/cdd/partenaires/super-engines.webp", width: 155, height: 143, },
  { name: "Royal Air Maroc", category: "professionnels", file: "/images/cdd/partenaires/royal-air-maroc.webp", width: 170, height: 115, featured: true, },
  { name: "Regus", category: "professionnels", file: "/images/cdd/partenaires/regus.webp", width: 266, height: 147, featured: true, },
  { name: "Midas", category: "professionnels", file: "/images/cdd/partenaires/midas.webp", width: 252, height: 75, },
  { name: "Atlas Hospitality", category: "professionnels", file: "/images/cdd/partenaires/atlas-hospitality.webp", width: 306, height: 160, },
  { name: "Hyatt Regency", category: "professionnels", file: "/images/cdd/partenaires/hyatt-regency.webp", width: 269, height: 78, featured: true, },
  { name: "Galaxy Voyage", category: "professionnels", file: "/images/cdd/partenaires/galaxy-voyage.webp", width: 332, height: 101, },
  { name: "Cosmos", category: "professionnels", file: "/images/cdd/partenaires/cosmos.webp", width: 279, height: 96, },
  { name: "Atelier Vita", category: "professionnels", file: "/images/cdd/partenaires/atelier-vita.webp", width: 184, height: 160, },
  { name: "Fide Consulting", category: "professionnels", file: "/images/cdd/partenaires/fide-consulting.webp", width: 301, height: 153, },
  { name: "CFG Bank", category: "professionnels", file: "/images/cdd/partenaires/cfg-bank.webp", width: 400, height: 123, featured: true, },
  { name: "AtlantaSanad Assurance", category: "professionnels", file: "/images/cdd/partenaires/atlantasanad-assurance.webp", width: 361, height: 85, featured: true, },
  { name: "Scasco Assurances", category: "professionnels", file: "/images/cdd/partenaires/scasco-assurances.webp", width: 305, height: 58, featured: true, },
  { name: "Wafa Assurance", category: "professionnels", file: "/images/cdd/partenaires/wafa-assurance.webp", width: 123, height: 160, featured: true, },
  { name: "BMF Assurance", category: "professionnels", file: "/images/cdd/partenaires/bmf-assurance.webp", width: 232, height: 160, },
  { name: "Dar Al-Amane", category: "professionnels", file: "/images/cdd/partenaires/dar-al-amane.webp", width: 223, height: 119, },
  { name: "Saham Bank", category: "professionnels", file: "/images/cdd/partenaires/saham-bank.webp", width: 400, height: 119, featured: true, },
  { name: "BIIA – Business & Innovation Institute of America", category: "professionnels", file: "/images/cdd/partenaires/biia.webp", width: 162, height: 154, },
  { name: "Orange", category: "professionnels", file: "/images/cdd/partenaires/orange.webp", width: 154, height: 153, featured: true, },
  { name: "L'Observateur", category: "professionnels", file: "/images/cdd/partenaires/lobservateur.webp", width: 140, height: 41, },
  { name: "Atlantic Radio", category: "professionnels", file: "/images/cdd/partenaires/atlantic-radio.webp", width: 86, height: 62, },
  { name: "Le Matin", category: "professionnels", file: "/images/cdd/partenaires/le-matin.webp", width: 132, height: 22, featured: true, },
  { name: "Aujourd'hui le Maroc", category: "professionnels", file: "/images/cdd/partenaires/aujourdhui-le-maroc.webp", width: 138, height: 37, },
  { name: "Yabiladi", category: "professionnels", file: "/images/cdd/partenaires/yabiladi.webp", width: 122, height: 42, },
  { name: "Lebrief.ma", category: "professionnels", file: "/images/cdd/partenaires/lebrief-ma.webp", width: 123, height: 35, },
  { name: "La Quotidienne", category: "professionnels", file: "/images/cdd/partenaires/la-quotidienne.webp", width: 137, height: 40, },
  { name: "Finances News", category: "professionnels", file: "/images/cdd/partenaires/finances-news.webp", width: 131, height: 39, },
  { name: "Anfass", category: "professionnels", file: "/images/cdd/partenaires/anfass.webp", width: 137, height: 41, },
  { name: "L'Économiste", category: "professionnels", file: "/images/cdd/partenaires/leconomiste.webp", width: 142, height: 35, featured: true, },
  { name: "Hôtel Volubilis", category: "entreprises", file: "/images/cdd/partenaires/hotel-volubilis.webp", width: 228, height: 139, },
  { name: "Vichy Célestins Spa Hôtel", category: "entreprises", file: "/images/cdd/partenaires/vichy-celestins-spa-hotel.webp", width: 396, height: 127, },
  { name: "The View Hotels", category: "entreprises", file: "/images/cdd/partenaires/the-view-hotels.webp", width: 177, height: 120, },
  { name: "Atlas Terminus & Spa", category: "entreprises", file: "/images/cdd/partenaires/atlas-terminus-spa.webp", width: 259, height: 105, },
  { name: "Relax Hotels", category: "entreprises", file: "/images/cdd/partenaires/relax-hotels.webp", width: 185, height: 67, },
  { name: "Grand Mogador", category: "entreprises", file: "/images/cdd/partenaires/grand-mogador.webp", width: 124, height: 160, },
  { name: "Passage Fitness", category: "entreprises", file: "/images/cdd/partenaires/passage-fitness.webp", width: 251, height: 96, },
  { name: "Air France", category: "entreprises", file: "/images/cdd/partenaires/air-france.webp", width: 400, height: 36, featured: true, },
  { name: "Casa Green Golf Club", category: "entreprises", file: "/images/cdd/partenaires/casa-green-golf-club.webp", width: 302, height: 102, },
  { name: "CIM Santé", category: "entreprises", file: "/images/cdd/partenaires/cim-sante.webp", width: 273, height: 57, featured: true, },
  { name: "Tazegzout Golf", category: "entreprises", file: "/images/cdd/partenaires/tazegzout-golf.webp", width: 250, height: 60, },
  { name: "Skin & Svelt", category: "entreprises", file: "/images/cdd/partenaires/skin-svelt.webp", width: 311, height: 81, },
  { name: "LabOasis Foundation", category: "entreprises", file: "/images/cdd/partenaires/laboasis-foundation.webp", width: 322, height: 94, },
  { name: "Noria Golf Club", category: "entreprises", file: "/images/cdd/partenaires/noria-golf-club.webp", width: 181, height: 78, },
  { name: "Madaëf Golfs", category: "entreprises", file: "/images/cdd/partenaires/madaef-golfs.webp", width: 324, height: 108, featured: true, },
  { name: "Amelkis Golf Club", category: "entreprises", file: "/images/cdd/partenaires/amelkis-golf-club.webp", width: 235, height: 85, },
  { name: "Royal Golf El Jadida", category: "entreprises", file: "/images/cdd/partenaires/royal-golf-el-jadida.webp", width: 132, height: 153, },
  { name: "Cabo Negro Golf", category: "entreprises", file: "/images/cdd/partenaires/cabo-negro-golf.webp", width: 247, height: 153, featured: true, },
  { name: "Golf Lacs", category: "entreprises", file: "/images/cdd/partenaires/golf-lacs.webp", width: 142, height: 158, },
  { name: "Univers Auto", category: "entreprises", file: "/images/cdd/partenaires/univers-auto.webp", width: 167, height: 123, },
  { name: "TTH Company", category: "entreprises", file: "/images/cdd/partenaires/tth-company.webp", width: 289, height: 41, },
  { name: "Thales Informatique", category: "entreprises", file: "/images/cdd/partenaires/thales-informatique.webp", width: 300, height: 148, featured: true, },
  { name: "Sekera Services", category: "entreprises", file: "/images/cdd/partenaires/sekera-services.webp", width: 249, height: 71, },
  { name: "Retin", category: "entreprises", file: "/images/cdd/partenaires/retin.webp", width: 138, height: 141, },
  { name: "Rénovi", category: "entreprises", file: "/images/cdd/partenaires/renovi.webp", width: 264, height: 65, },
  { name: "TCS", category: "entreprises", file: "/images/cdd/partenaires/tcs.webp", width: 164, height: 90, },
  { name: "Open Advizor", category: "entreprises", file: "/images/cdd/partenaires/open-advizor.webp", width: 136, height: 136, },
  { name: "Mr Clim", category: "entreprises", file: "/images/cdd/partenaires/mr-clim.webp", width: 201, height: 142, },
  { name: "LPF Casablanca", category: "entreprises", file: "/images/cdd/partenaires/lpf-casablanca.webp", width: 132, height: 157, },
  { name: "Keep Advancing", category: "entreprises", file: "/images/cdd/partenaires/keep-advancing.webp", width: 207, height: 160, },
  { name: "Diafa Sol", category: "entreprises", file: "/images/cdd/partenaires/diafa-sol.webp", width: 247, height: 160, },
  { name: "SCC Cabinet de Conseil", category: "entreprises", file: "/images/cdd/partenaires/scc-cabinet-de-conseil.webp", width: 124, height: 160, },
  { name: "Maghreb Rayonnage", category: "entreprises", file: "/images/cdd/partenaires/maghreb-rayonnage.webp", width: 400, height: 83, },
  { name: "BCC – Brand Construction Company", category: "entreprises", file: "/images/cdd/partenaires/bcc.webp", width: 400, height: 80, },
  { name: "HPS", category: "entreprises", file: "/images/cdd/partenaires/hps.webp", width: 400, height: 104, featured: true, },
  { name: "CEC – Certified Experts Consultants", category: "entreprises", file: "/images/cdd/partenaires/cec.webp", width: 271, height: 112, },
];
