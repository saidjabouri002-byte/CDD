import { CircleCheck, Handshake, MapPin, UsersRound } from "lucide-react";
import { photos, video } from "@/config/assets";
import { hero, introduction } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink, Container, Eyebrow, Rays } from "@/components/ui/primitives";
import { resolveVideo } from "@/lib/utils";
import { VideoSection } from "./VideoSection";

const cardIcons = [UsersRound, MapPin, Handshake];

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
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.17fr] lg:items-start lg:gap-12 xl:gap-16">
          {/* Colonne gauche : message */}
          <div>
            <Eyebrow className="animate-rise">{hero.eyebrow}</Eyebrow>
            <h1 id="hero-title" className="animate-rise mt-6 font-semibold tracking-[-0.035em] [animation-delay:80ms]">
              <span className="block text-[1.02rem] leading-[1.2] text-ink min-[360px]:text-[1.2rem] min-[400px]:text-[1.4rem] sm:text-[1.9rem] lg:text-[1.55rem] xl:text-[2rem]">{hero.headlineLead}</span>
              <span className="mt-2 block bg-[linear-gradient(95deg,var(--brand-deep),var(--brand)_55%,#35a4ff)] bg-clip-text pb-1 text-[1.65rem] leading-[1.06] text-transparent min-[360px]:text-[1.95rem] min-[400px]:text-[2.25rem] sm:text-[3.3rem] lg:text-[2.45rem] xl:text-[3.2rem]">
                {hero.headlineEmphasis}
              </span>
            </h1>
            <p className="animate-rise mt-6 max-w-[620px] text-[1.05rem] leading-[1.65] text-ink-soft [animation-delay:160ms] sm:text-[1.13rem]">
              {hero.subheadline}
            </p>

            <div className="animate-rise mt-8 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
              <ButtonLink href={hero.primaryCta.href} className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="secondary" arrow={false} className="w-full sm:w-auto">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="animate-rise mt-5 flex max-w-[560px] items-start gap-2 text-[0.9rem] leading-[1.55] text-ink-muted [animation-delay:320ms]">
              <CircleCheck aria-hidden className="mt-[0.15em] size-[1.05em] shrink-0 text-brand" />
              {hero.microcopy}
            </p>
          </div>

          {/* Colonne droite : vidéo de présentation */}
          {/* Sur ordinateur : le haut de la vidéo s'aligne sur « Vous êtes entrepreneur à Tanger ? » */}
          <div className="animate-rise relative [animation-delay:300ms] lg:mt-[53px]">
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
            const Icon = cardIcons[i];
            return (
              <li
                key={text}
                className="flex items-center gap-3 border-line p-3.5 not-last:border-b sm:p-4 sm:not-last:border-r sm:not-last:border-b-0 lg:px-6"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[linear-gradient(160deg,var(--sky-100),var(--sky-200))] text-brand-deep">
                  <Icon aria-hidden className="size-5" strokeWidth={1.9} />
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
