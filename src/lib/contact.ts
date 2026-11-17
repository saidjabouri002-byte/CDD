/**
 * Schéma et validation du formulaire de contact — partagés entre le navigateur et le serveur.
 * Le serveur revalide toujours les données : la validation côté navigateur n'est qu'un confort.
 */
import { contact } from "@/content/site";

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type Utm = Partial<Record<UtmKey, string>>;

/** Indicatifs proposés dans le champ WhatsApp (Maroc par défaut). */
export const DIAL_CODES = [
  { iso: "MA", dial: "+212", label: "Maroc" },
  { iso: "FR", dial: "+33", label: "France" },
  { iso: "ES", dial: "+34", label: "Espagne" },
  { iso: "BE", dial: "+32", label: "Belgique" },
  { iso: "CH", dial: "+41", label: "Suisse" },
  { iso: "DE", dial: "+49", label: "Allemagne" },
  { iso: "IT", dial: "+39", label: "Italie" },
  { iso: "NL", dial: "+31", label: "Pays-Bas" },
  { iso: "PT", dial: "+351", label: "Portugal" },
  { iso: "GB", dial: "+44", label: "Royaume-Uni" },
  { iso: "US", dial: "+1", label: "États-Unis / Canada" },
  { iso: "DZ", dial: "+213", label: "Algérie" },
  { iso: "TN", dial: "+216", label: "Tunisie" },
  { iso: "MR", dial: "+222", label: "Mauritanie" },
  { iso: "SN", dial: "+221", label: "Sénégal" },
  { iso: "CI", dial: "+225", label: "Côte d'Ivoire" },
  { iso: "EG", dial: "+20", label: "Égypte" },
  { iso: "AE", dial: "+971", label: "Émirats arabes unis" },
  { iso: "SA", dial: "+966", label: "Arabie saoudite" },
  { iso: "QA", dial: "+974", label: "Qatar" },
  { iso: "TR", dial: "+90", label: "Turquie" },
] as const;

export type ContactField = "fullName" | "company" | "role" | "sector" | "phone" | "objective" | "email" | "consent";
export type ContactErrors = Partial<Record<ContactField, string>>;

/** Valeurs brutes envoyées par le formulaire. */
export type ContactInput = {
  fullName: string;
  company: string;
  role: string;
  sector: string;
  dialCode: string;
  phone: string;
  objective: string;
  email: string;
  consent: boolean;
};

/** Données nettoyées, prêtes à être transmises. */
export type ContactData = {
  fullName: string;
  company: string;
  role: string;
  sector: string;
  /** Numéro WhatsApp au format international E.164, ex. +212612345678 */
  whatsapp: string;
  objective: string;
  email: string;
  consent: true;
};

const text = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "");

function normalizePhone(dialCode: string, raw: string): string | null {
  if (!DIAL_CODES.some((c) => c.dial === dialCode)) return null;
  if (!/^[\d\s().\-+]*$/.test(raw)) return null;
  let digits = raw.replace(/\D/g, "");
  const dialDigits = dialCode.slice(1);
  // Tolère un numéro saisi avec l'indicatif (+212… / 00212…) ou avec le 0 national.
  if (raw.trim().startsWith("+") && digits.startsWith(dialDigits)) digits = digits.slice(dialDigits.length);
  else if (digits.startsWith("00" + dialDigits)) digits = digits.slice(dialDigits.length + 2);
  digits = digits.replace(/^0+/, "");
  if (dialCode === "+212") return /^[5-7]\d{8}$/.test(digits) ? dialCode + digits : null;
  if (digits.length < 6 || dialDigits.length + digits.length > 15) return null;
  return dialCode + digits;
}

export function validateContact(input: unknown): { ok: true; data: ContactData } | { ok: false; errors: ContactErrors } {
  const src = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const errors: ContactErrors = {};

  const fullName = text(src.fullName, 120);
  if (fullName.length < 3) errors.fullName = "Veuillez indiquer votre nom et votre prénom.";

  const company = text(src.company, 160);
  if (company.length < 2) errors.company = "Veuillez indiquer le nom de votre entreprise.";

  const role = text(src.role, 120);
  if (role.length < 2) errors.role = "Veuillez indiquer votre fonction.";

  const sector = text(src.sector, 80);
  if (!(contact.sectors as readonly string[]).includes(sector)) errors.sector = "Veuillez sélectionner votre secteur d'activité.";

  const whatsapp = normalizePhone(text(src.dialCode, 6), text(src.phone, 30));
  if (!text(src.phone, 30)) errors.phone = "Veuillez indiquer votre numéro WhatsApp.";
  else if (!whatsapp) errors.phone = "Ce numéro ne semble pas valide. Vérifiez l'indicatif et le numéro.";

  const objective = text(src.objective, 80);
  if (!(contact.objectives as readonly string[]).includes(objective)) errors.objective = "Veuillez sélectionner votre objectif principal.";

  const email = text(src.email, 160).toLowerCase();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Cette adresse email ne semble pas valide.";

  if (src.consent !== true) errors.consent = "Votre accord est nécessaire pour que nous puissions vous recontacter.";

  if (Object.keys(errors).length > 0 || !whatsapp) return { ok: false, errors };
  return { ok: true, data: { fullName, company, role, sector, whatsapp, objective, email, consent: true } };
}

/** Ne conserve que les paramètres UTM connus, tronqués. */
export function sanitizeUtm(input: unknown): Utm {
  const src = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const utm: Utm = {};
  for (const key of UTM_KEYS) {
    const value = text(src[key], 150);
    if (value) utm[key] = value;
  }
  return utm;
}
