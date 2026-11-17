"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { UTM_KEYS } from "@/lib/contact";

type GhlFormEmbedProps = {
  /** URL du formulaire GoHighLevel (variable serveur GHL_FORM_EMBED_URL). */
  formUrl: string;
  /** Hauteur initiale en pixels ; le script GoHighLevel l'ajuste ensuite automatiquement. */
  height: number;
};

/**
 * Formulaire GoHighLevel intégré (iframe), utilisé lorsque GHL_FORM_EMBED_URL est défini.
 * Les paramètres UTM de la page sont transmis au formulaire pour l'attribution.
 */
export function GhlFormEmbed({ formUrl, height }: GhlFormEmbedProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const origin = new URL(formUrl).origin;

  useEffect(() => {
    const url = new URL(formUrl);
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) url.searchParams.set(key, value.slice(0, 150));
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- l'URL dépend des paramètres de la page, connus seulement dans le navigateur
    setSrc(url.toString());
  }, [formUrl]);

  return (
    <div className="relative" style={{ minHeight: height }}>
      {!loaded && (
        <p aria-live="polite" className="absolute inset-0 grid place-items-center text-[0.92rem] text-ink-muted">
          Chargement du formulaire…
        </p>
      )}
      {src && (
        <iframe
          src={src}
          title="Formulaire de contact CDD Tanger"
          onLoad={() => setLoaded(true)}
          className="relative block w-full rounded-xl border-0"
          style={{ height }}
        />
      )}
      {/* Script officiel GoHighLevel : ajuste la hauteur de l'iframe au contenu du formulaire. */}
      <Script src={`${origin}/js/form_embed.js`} strategy="lazyOnload" />
    </div>
  );
}
