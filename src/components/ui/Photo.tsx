import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { PhotoSlot } from "@/config/assets";
import { cn } from "@/lib/utils";
import { Rays } from "./primitives";

type PhotoProps = {
  photo: PhotoSlot;
  /** Classes du conteneur : doit fixer les proportions (ex. `aspect-[4/3]`) et les arrondis. */
  className?: string;
  sizes: string;
  /** Image au-dessus de la ligne de flottaison (héro) : chargée en priorité. */
  eager?: boolean;
  /** Masque le libellé de l'emplacement réservé (petits formats). */
  compact?: boolean;
  /** Voile bleu en bas de la photo (désactivé pour l'affiche de la vidéo du héro). */
  tint?: boolean;
};

/**
 * Affiche une vraie photo CDD Tanger lorsqu'elle est disponible (`ready: true` dans config/assets.ts),
 * sinon un emplacement réservé clairement identifié — jamais d'image de substitution trompeuse.
 */
export function Photo({ photo, className, sizes, eager = false, compact = false, tint = true }: PhotoProps) {
  if (photo.ready) {
    return (
      <div className={cn("relative overflow-hidden bg-sky-100", className)}>
        <Image
          src={photo.file}
          alt={photo.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
        />
        {/* Léger voile bleu en bas de la photo, aux couleurs du Club */}
        {tint && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(to_top,rgba(4,80,216,0.57),rgba(10,123,240,0.17)_55%,transparent)]"
          />
        )}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Emplacement réservé — ${photo.alt}`}
      data-photo-slot={photo.file}
      className={cn(
        "relative isolate overflow-hidden bg-[linear-gradient(140deg,#d9e9ff_0%,#f3f8ff_42%,#e3efff_68%,#c9dfff_100%)]",
        className,
      )}
    >
      <Rays className="absolute -top-[18%] -right-[12%] -z-10 h-[78%] w-auto text-white/55" />
      <Rays className="absolute -bottom-[30%] -left-[14%] -z-10 h-[70%] w-auto text-brand/[0.07]" />
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 opacity-50 [mask-image:linear-gradient(to_top,black,transparent_70%)]" />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="grid size-11 place-items-center rounded-2xl border border-white/80 bg-white/75 text-brand-deep shadow-card backdrop-blur">
            <ImageIcon aria-hidden className="size-5" strokeWidth={1.8} />
          </span>
          {!compact && (
            <span className="rounded-full border border-white/80 bg-white/75 px-3 py-1 text-[0.72rem] font-medium text-brand-ink backdrop-blur">
              Photo CDD Tanger à venir
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
