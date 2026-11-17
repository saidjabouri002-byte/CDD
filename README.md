# CDD Tanger — Landing page

Page régionale du Club des Dirigeants à Tanger. Objectif unique : générer des demandes de contact qualifiées.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lucide · Motion.

## Démarrer

```bash
npm install
cp .env.example .env.local
npm run dev
```

`npm run build` · `npm run start` · `npm run lint` · `npm run typecheck`

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| Textes français (toutes les sections) | `src/content/site.ts` |
| Logo, photos, vidéo, liens officiels | `src/config/assets.ts` |
| Couleurs, ombres, typographie | `src/app/globals.css` |
| Sections de la page | `src/components/sections/` |
| Validation du formulaire (client + serveur) | `src/lib/contact.ts` |
| Point d'entrée serveur du formulaire | `src/app/api/contact/route.ts` |

## Photos

Les photos du Club sont dans `public/images/cdd/` au format WebP compressé (1600 px de large maximum) :
`video-poster`, `introduction`, `events/`, `cercles/`, `members/`. L'affectation de chaque photo à un
emplacement de la page se fait dans `src/config/assets.ts` (chemin, texte alternatif, point focal).

Pour remplacer une photo : déposez le nouveau fichier `.webp` au même chemin, ou changez le chemin dans
`assets.ts`. Un emplacement dont `ready` vaut `false` affiche « Photo CDD Tanger à venir ».

## Ajouter la vidéo (VSL)

Définissez `NEXT_PUBLIC_VIDEO_URL` (lien YouTube ou `/videos/fichier.mp4` placé dans `public/videos/`). Le lecteur est dans le héro, à droite du titre.
Sans URL, la section affiche un aperçu honnête sans bouton de lecture.
La transcription destinée au tournage est dans `src/content/site.ts` (`vslTranscript`) et n'est pas affichée.

## Connecter GoHighLevel

Sans configuration, le formulaire est en **mode démonstration** : il valide la saisie mais n'envoie rien et
n'affiche jamais le message de succès.

### Option A — Webhook entrant (recommandé)

1. GoHighLevel → Automation → Workflows → nouveau workflow → déclencheur **Inbound Webhook** → copiez l'URL.
2. Définissez `GHL_WEBHOOK_URL` (variable serveur) puis redéployez.
3. Envoyez une demande test, puis dans le workflow utilisez « Mapping Reference » pour associer les champs
   reçus à une action **Create/Update Contact**.

Champs transmis (JSON) : `full_name`, `first_name`, `last_name`, `company_name`, `job_title`, `industry`,
`phone`, `whatsapp` (format E.164), `main_objective`, `email`, `consent`, `consent_at`, `source`, `page_url`,
`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.

Le message « Merci pour votre intérêt ! » n'apparaît que si GoHighLevel répond avec un statut 2xx.

Protections intégrées à `/api/contact` : validation serveur, champ piège, délai minimal de saisie,
contrôle d'origine, limite de 5 envois / 10 min par IP (en mémoire — sur une plateforme serverless
multi-instances, utilisez un stockage partagé ou la protection de l'hébergeur). Aucune donnée personnelle
n'est journalisée.

### Option B — Formulaire GoHighLevel intégré

Définissez `GHL_FORM_EMBED_URL` avec le lien du formulaire. Le formulaire du site est alors remplacé par
l'iframe GoHighLevel (les UTM de la page lui sont transmis). Les champs, le consentement et le message de
confirmation se configurent dans GoHighLevel.

## Déploiement

Le formulaire (option A) nécessite un hébergement Node.js (Vercel, VPS, Hostinger Node, etc.).
Un export 100 % statique n'est possible qu'avec l'option B.
