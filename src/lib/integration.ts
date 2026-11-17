/**
 * Configuration de l'intégration GoHighLevel — lue UNIQUEMENT côté serveur
 * (aucune de ces variables n'est préfixée NEXT_PUBLIC_, elles ne sont donc jamais envoyées au navigateur,
 * à l'exception de l'URL du formulaire intégré, publique par nature, transmise en propriété au composant).
 *
 * Trois modes, par ordre de priorité :
 *  1. "embed"   — GHL_FORM_EMBED_URL défini : le formulaire GoHighLevel est intégré tel quel (iframe).
 *  2. "webhook" — GHL_WEBHOOK_URL défini : le formulaire du site envoie les demandes à /api/contact,
 *                 qui les valide puis les transmet au webhook entrant GoHighLevel.
 *  3. "demo"    — rien n'est configuré : le formulaire est affiché en mode démonstration, rien n'est envoyé.
 */

export type Integration =
  | { kind: "embed"; formUrl: string; height: number }
  | { kind: "webhook"; webhookUrl: string }
  | { kind: "demo" };

function httpsUrl(raw: string | undefined): string | null {
  const value = raw?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function getIntegration(): Integration {
  const formUrl = httpsUrl(process.env.GHL_FORM_EMBED_URL);
  if (formUrl) {
    const height = Number(process.env.GHL_FORM_EMBED_HEIGHT);
    return { kind: "embed", formUrl, height: Number.isFinite(height) && height >= 300 ? height : 900 };
  }
  const webhookUrl = httpsUrl(process.env.GHL_WEBHOOK_URL);
  if (webhookUrl) return { kind: "webhook", webhookUrl };
  return { kind: "demo" };
}
