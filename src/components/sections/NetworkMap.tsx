"use client";

import { motion, useReducedMotion } from "motion/react";
import { cities } from "@/content/network";

/**
 * Carte stylisée : les villes des Cercles d'Affaires placées selon leurs vraies coordonnées,
 * reliées à Tanger. Pas de tracé de frontières — uniquement des points géographiquement justes.
 */
const W = 400;
const H = 440;
const project = (lat: number, lon: number) => ({ x: ((lon + 10.2) / 5.9) * W, y: ((36.3 - lat) / 6.3) * H });

/** Position de l'étiquette de chaque ville, pour éviter les chevauchements. */
const labelSide: Record<string, "left" | "right" | "below"> = {
  Tanger: "right",
  Rabat: "left",
  Mohammedia: "right",
  Casablanca: "left",
  Fès: "right",
  Meknès: "below",
  Marrakech: "right",
  Agadir: "right",
};

export function NetworkMap({ title }: { title: string }) {
  const reduce = useReducedMotion();
  const hub = cities.find((c) => "hub" in c && c.hub)!;
  const h = project(hub.lat, hub.lon);
  const others = cities.filter((c) => c !== hub);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="carte-reseau-titre" className="h-auto w-full">
      <title id="carte-reseau-titre">{`${title} : ${cities.map((c) => c.name).join(", ")}`}</title>
      <defs>
        <pattern id="map-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="var(--sky-300)" opacity="0.55" />
        </pattern>
        <radialGradient id="hub-glow">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill="url(#map-dots)" />
      <text x={W - 16} y={22} textAnchor="end" className="fill-ink-muted text-[11px] italic">
        Méditerranée
      </text>
      <text x={18} y={150} className="fill-ink-muted text-[11px] italic">
        Océan Atlantique
      </text>

      {others.map((c, i) => {
        const p = project(c.lat, c.lon);
        const mx = (h.x + p.x) / 2 + (p.y - h.y) * 0.18;
        const my = (h.y + p.y) / 2 - (p.x - h.x) * 0.18;
        return (
          <motion.path
            key={c.name}
            d={`M${h.x},${h.y} Q${mx},${my} ${p.x},${p.y}`}
            fill="none"
            stroke="var(--brand)"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="0"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: "easeOut" }}
          />
        );
      })}

      {others.map((c) => {
        const p = project(c.lat, c.lon);
        const side = labelSide[c.name];
        return (
          <g key={c.name}>
            <circle cx={p.x} cy={p.y} r="6" fill="white" stroke="var(--brand)" strokeWidth="2" />
            <text
              x={side === "left" ? p.x - 11 : side === "right" ? p.x + 11 : p.x}
              y={side === "below" ? p.y + 20 : p.y + 4}
              textAnchor={side === "left" ? "end" : side === "right" ? "start" : "middle"}
              className="fill-ink text-[12.5px] font-semibold"
            >
              {c.name}
            </text>
          </g>
        );
      })}

      <circle cx={h.x} cy={h.y} r="42" fill="url(#hub-glow)" />
      <circle cx={h.x} cy={h.y} r="16" fill="var(--brand)" opacity="0.18" className="motion-safe:animate-ping [transform-box:fill-box] [transform-origin:center]" />
      <circle cx={h.x} cy={h.y} r="10" fill="var(--brand-deep)" stroke="white" strokeWidth="3" />
      <text x={h.x + 16} y={h.y + 6} className="fill-brand-deep text-[17px] font-bold">
        {hub.name}
      </text>
    </svg>
  );
}
