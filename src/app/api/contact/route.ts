import { sanitizeUtm, validateContact } from "@/lib/contact";
import { getIntegration } from "@/lib/integration";

export const dynamic = "force-dynamic";

/* ── Limitation de débit (en mémoire, par adresse IP) ─────────────────────────
 * Suffisant pour un serveur Node unique. Sur une plateforme serverless multi-instances,
 * remplacez par un stockage partagé (ex. Upstash Redis) ou la protection de la plateforme. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [key, list] of hits) if (list.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
  return false;
}

const json = (body: Record<string, unknown>, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const integration = getIntegration();
  // Aucune intégration configurée : on ne prétend jamais avoir transmis la demande.
  if (integration.kind !== "webhook") return json({ ok: false, code: "not_configured" }, 503);

  // Requêtes du même site uniquement.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) return json({ ok: false, code: "forbidden" }, 403);

  if (!request.headers.get("content-type")?.includes("application/json")) return json({ ok: false, code: "bad_request" }, 415);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return json({ ok: false, code: "rate_limited" }, 429);

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 10_000) return json({ ok: false, code: "bad_request" }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, code: "bad_request" }, 400);
  }

  // Anti-spam : champ piège (invisible pour les humains) + délai minimal de saisie.
  const elapsed = Date.now() - Number(body.startedAt);
  if (body.website || !Number.isFinite(elapsed) || elapsed < 2500) return json({ ok: false, code: "rejected" }, 400);

  const result = validateContact(body);
  if (!result.ok) return json({ ok: false, code: "invalid", errors: result.errors }, 422);

  const { data } = result;
  const [firstName, ...lastName] = data.fullName.split(" ");
  const payload = {
    source: "Landing page CDD Tanger",
    full_name: data.fullName,
    first_name: firstName,
    last_name: lastName.join(" "),
    company_name: data.company,
    job_title: data.role,
    industry: data.sector,
    phone: data.whatsapp,
    whatsapp: data.whatsapp,
    main_objective: data.objective,
    email: data.email || undefined,
    consent: true,
    consent_at: new Date().toISOString(),
    page_url: typeof body.pageUrl === "string" ? body.pageUrl.slice(0, 300) : undefined,
    ...sanitizeUtm(body.utm),
  };

  try {
    const response = await fetch(integration.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!response.ok) {
      // Journal sans donnée personnelle : uniquement le statut renvoyé par GoHighLevel.
      console.error(`[contact] webhook GoHighLevel en échec — statut ${response.status}`);
      return json({ ok: false, code: "upstream" }, 502);
    }
  } catch (error) {
    console.error(`[contact] webhook GoHighLevel injoignable — ${error instanceof Error ? error.name : "erreur"}`);
    return json({ ok: false, code: "upstream" }, 502);
  }

  // Succès confirmé par GoHighLevel uniquement.
  return json({ ok: true }, 200);
}
