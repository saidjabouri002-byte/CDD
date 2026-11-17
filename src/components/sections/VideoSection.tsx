"use client";

import { useState } from "react";
import { Clapperboard, Play } from "lucide-react";
import type { ResolvedVideo } from "@/lib/utils";

type VideoSectionProps = {
  /** Vidéo résolue côté serveur (`null` tant qu'aucune URL n'est configurée). */
  video: ResolvedVideo | null;
  title: string;
  label: string;
  pendingLabel: string;
  /** Affiche (photo ou emplacement réservé), rendue côté serveur. */
  poster: React.ReactNode;
};

/**
 * Lecteur de la vidéo de présentation (VSL), format 16:9.
 * — Sans URL configurée : aperçu honnête, aucun bouton de lecture.
 * — Avec URL : affiche + bouton, puis lecteur YouTube (sans cookies) ou <video> natif.
 */
export function VideoSection({ video, title, label, pendingLabel, poster }: VideoSectionProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-x-[10%] top-[20%] -bottom-5 -z-10 rounded-[50%] bg-brand/25 blur-[60px]" />
      <div className="relative aspect-video overflow-hidden rounded-[24px] border-[5px] border-white bg-sky-100 shadow-float">
        {playing && video ? (
          video.kind === "youtube" ? (
            <iframe
              src={video.src}
              title={title}
              allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
          ) : (
            <video src={video.src} controls autoPlay playsInline preload="metadata" className="absolute inset-0 size-full bg-ink object-contain">
              Votre navigateur ne permet pas la lecture de cette vidéo.
            </video>
          )
        ) : (
          <>
            <div className="absolute inset-0 [&>*]:size-full">{poster}</div>
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,47,107,0.28),transparent_55%)]" />
            <span className="absolute top-3 left-3 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[0.72rem] font-semibold text-brand-ink backdrop-blur sm:top-4 sm:left-4">
              {label}
            </span>

            {video ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Lire la vidéo : ${title}`}
                className="group absolute inset-0 grid place-items-center"
              >
                <span className="relative grid size-[4.5rem] place-items-center rounded-full bg-white text-brand-deep shadow-float transition-transform duration-300 group-hover:scale-105 sm:size-[5.25rem]">
                  <span aria-hidden className="absolute -inset-2.5 rounded-full border border-white/70" />
                  <Play aria-hidden className="ml-1 size-7 fill-current sm:size-8" />
                </span>
              </button>
            ) : (
              <p className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 text-center text-[0.8rem] sm:px-4 sm:py-2.5 sm:text-[0.86rem] font-medium text-brand-ink backdrop-blur sm:inset-x-auto sm:right-4 sm:bottom-4">
                <Clapperboard aria-hidden className="size-[1.1em] shrink-0 text-brand-deep" />
                {pendingLabel}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
