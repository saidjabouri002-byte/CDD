import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { photos, video } from "@/config/assets";
import { hero, introduction } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink, Container, Eyebrow, Rays } from "@/components/ui/primitives";
import { resolveVideo } from "@/lib/utils";
import { VideoSection } from "./VideoSection";

/** Icônes 3D de la barre sous le héro (même ordre que hero.floatingCards). */
const cardIcons = [
  "/images/cdd/icons/cdd-tanger-rencontres-entrepreneurs.webp",
  "/images/cdd/icons/cdd-tanger-reseau-affaires-tanger.webp",
  "/images/cdd/icons/cdd-tanger-connexions-opportunites.webp",
];

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[6.5rem] sm:pt-36">
      {/* Atmosphère : dégradé ciel, halos et rayons en filigrane */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#cfe3ff_0%,#e2eeff_30%,#f4f9ff_68%,#ffffff_100%)]" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.9),transparent)]" />
      <div aria-hidden className="absolute top-24 -left-40 -z-10 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(10,123,240,0.16),transparent)]" />
      <div aria-hidden className="line-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]" />
      <Rays className="absolute -top-16 -right-24 -z-10 size-[420px] text-white/60 sm:size-[560px]" />

      <Container>
        {/* Téléphone/tablette : la colonne gauche « s'ouvre » (contents) pour placer la vidéo juste sous le titre.
            Ordinateur (lg) : deux colonnes, rien ne change. */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.17fr] lg:items-start lg:gap-12 xl:gap-16">
          {/* Colonne gauche : message */}
          <div className="contents lg:block">
            <Eyebrow className="animate-rise self-start">{hero.eyebrow}</Eyebrow>
            <h1 id="hero-title" className="animate-rise mt-6 font-semibold tracking-[-0.035em] [animation-delay:80ms]">
              <span className="block text-[1.02rem] leading-[1.2] text-ink min-[360px]:text-[1.2rem] min-[400px]:text-[1.4rem] sm:text-[1.9rem] lg:text-[1.55rem] xl:text-[2rem]">{hero.headlineLead}</span>
              <span className="mt-2 block bg-[linear-gradient(95deg,var(--brand-deep),var(--brand)_55%,#35a4ff)] bg-clip-text pb-1 text-[1.65rem] leading-[1.06] text-transparent min-[360px]:text-[1.95rem] min-[400px]:text-[2.25rem] sm:text-[3.3rem] lg:text-[2.45rem] xl:text-[3rem]">
                {hero.headlineEmphasis}
              </span>
            </h1>
            <p className="animate-rise order-2 mt-6 max-w-[620px] lg:order-none text-[1.05rem] leading-[1.65] text-ink-soft [animation-delay:160ms] sm:text-[1.13rem]">
              {hero.subheadline}
            </p>

            <div className="animate-rise order-2 mt-8 flex flex-col gap-3 lg:order-none [animation-delay:240ms] sm:flex-row sm:items-center">
              <ButtonLink href={hero.primaryCta.href} className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="secondary" arrow={false} className="w-full sm:w-auto">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="animate-rise order-2 mt-5 flex max-w-[560px] lg:order-none items-start gap-2 text-[0.9rem] leading-[1.55] text-ink-muted [animation-delay:320ms]">
              <CircleCheck aria-hidden className="mt-[0.15em] size-[1.05em] shrink-0 text-brand" />
              {hero.microcopy}
            </p>
          </div>

          {/* Colonne droite : vidéo de présentation */}
          {/* Sur ordinateur : le haut de la vidéo s'aligne sur « Vous êtes entrepreneur à Tanger ? » */}
          <div className="animate-rise relative order-1 mt-9 [animation-delay:300ms] sm:mt-10 lg:order-none lg:mt-[53px]">
            {/* Halo lumineux derrière la vidéo */}
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(10,123,240,0.28),transparent)] blur-2xl" />
            <div aria-hidden className="absolute -inset-2.5 -z-10 rounded-[30px] border border-white/80 bg-white/40 backdrop-blur sm:-inset-3" />
            <VideoSection
              video={resolveVideo(video.url)}
              title={video.title}
              pendingLabel={introduction.videoPending}
              poster={<Photo photo={photos.videoPoster} eager tint={false} sizes="(min-width: 1024px) 680px, 94vw" />}
            />
          </div>
        </div>

        <ul className="animate-rise mt-12 grid overflow-hidden rounded-[22px] border border-white bg-white/70 shadow-card backdrop-blur-md [animation-delay:400ms] sm:mt-16 sm:grid-cols-3">
          {hero.floatingCards.map((text, i) => {
            const icon = cardIcons[i];
            return (
              <li
                key={text}
                className="group flex items-center gap-4 border-line p-3.5 transition-colors duration-300 not-last:border-b hover:bg-white/60 sm:p-4 sm:not-last:border-r sm:not-last:border-b-0 lg:px-6"
              >
                {/* Cadre carré à coins arrondis : contour bleu clair, fond dégradé et léger reflet */}
                <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border-[1.5px] border-sky-300 bg-[linear-gradient(160deg,#ffffff_0%,var(--sky-50)_55%,var(--sky-100)_100%)] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_8px_18px_-10px_rgba(4,80,216,0.45)] ring-4 ring-white/70 transition-[transform,border-color,box-shadow] duration-300 group-hover:-translate-y-0.5 group-hover:border-brand/60 group-hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_12px_24px_-10px_rgba(4,80,216,0.55)] sm:size-16">
                  <span aria-hidden className="absolute inset-x-1.5 top-1 h-1/3 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,0.85),transparent)]" />
                  <Image src={icon} alt="" width={192} height={192} sizes="56px" className="relative size-11 object-contain drop-shadow-[0_4px_6px_rgba(4,80,216,0.18)] sm:size-12" />
                </span>
                <span className="text-[0.92rem] leading-snug font-semibold text-ink">{text}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
