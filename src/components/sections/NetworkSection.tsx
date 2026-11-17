import Image from "next/image";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import { ambassadors, keyFigures, network, sources } from "@/content/network";
import { Container, Rays, SectionHeading } from "@/components/ui/primitives";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkMap } from "./NetworkMap";

/** Tanger au centre : le Cercle local, puis le réseau national et international. */
export function NetworkSection({ tight = false }: { tight?: boolean }) {
  return (
    <section
      id="reseau"
      aria-labelledby="reseau-title"
      className={tight ? "pt-4 pb-20 sm:pt-6 sm:pb-28" : "py-20 sm:py-28"}
    >
      <Container>
        {/* Photo posée directement sur le bandeau bleu des chiffres clés */}
        {/* La photo passe derrière la carte bleue sur 15 % de sa hauteur (hauteur = 75 % de la largeur) */}
        <Reveal className="relative isolate z-0 mx-auto -mb-[calc(min(570px,100%)*0.1125)] max-w-[570px]">
          <div aria-hidden className="absolute inset-x-[8%] top-[10%] bottom-[5%] -z-10 rounded-full bg-[radial-gradient(closest-side,var(--sky-200),transparent)]" />
          <Image
            src="/images/cdd/reseau-poignees-de-main.webp"
            alt="Dirigeants qui se serrent la main devant le symbole bleu du Club des Dirigeants"
            width={1400}
            height={1050}
            sizes="(min-width: 620px) 570px, 92vw"
            className="block h-auto w-full"
          />
        </Reveal>

        <Reveal className="relative z-10">
          <div className="relative isolate overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,var(--night)_0%,var(--brand-deep)_55%,var(--brand)_100%)] p-3 text-white shadow-cta sm:p-4">
            {/* Décor : grille fine, halos lumineux et symbole du Club */}
            <div aria-hidden className="line-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
            <div aria-hidden className="absolute -top-32 left-1/2 -z-10 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,196,255,0.45),transparent)]" />
            <Rays className="absolute -right-20 -bottom-24 -z-10 size-[300px] text-white/[0.07]" />

            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
              {keyFigures.map((f) => (
                <div
                  key={f.label}
                  className="group flex flex-col-reverse justify-end rounded-[22px] border border-white/10 bg-white/[0.06] px-4 py-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.11] sm:px-5 sm:py-6"
                >
                  <dt className="mt-2 text-[0.84rem] leading-snug text-white/70">{f.label}</dt>
                  <dd className="bg-[linear-gradient(180deg,#ffffff,var(--glow))] bg-clip-text text-[1.85rem] leading-none font-semibold tracking-[-0.035em] text-transparent tabular-nums sm:text-[2.3rem]">
                    <CountUp value={f.value} prefix={f.prefix} plain={"plain" in f && f.plain} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="px-3 pt-4 pb-2 text-[0.78rem] leading-relaxed text-white/60 sm:px-4">
              <span aria-hidden className="mr-2 inline-block size-1.5 rounded-full bg-glow align-middle" />
              {network.figuresSource} —{" "}
              <a href={sources.impact} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-white/85 underline underline-offset-2 hover:text-white">
                clubdesdirigeants.ma
                <ArrowUpRight aria-hidden className="size-3.5" />
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-16 sm:mt-20">
          <SectionHeading id="reseau-title" eyebrow={network.eyebrow} title={network.headline} intro={network.intro} />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 sm:mt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <Reveal className="h-full">
            <figure className="h-full rounded-[28px] border border-sky-200 bg-[linear-gradient(160deg,var(--sky-100),#ffffff_70%)] p-4 shadow-card sm:p-6">
              <NetworkMap title={network.mapTitle} />
              <figcaption className="mt-2 flex items-start gap-2 text-[0.82rem] leading-snug text-ink-muted">
                <MapPin aria-hidden className="mt-[0.1em] size-[1.05em] shrink-0 text-brand-deep" />
                {network.mapCaption}
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-5 lg:gap-6">
            <Reveal delay={0.06}>
              <article className="h-full rounded-[24px] border border-line bg-white p-6 shadow-card sm:p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-[linear-gradient(160deg,var(--brand),var(--brand-deep))] text-white">
                  <MapPin aria-hidden className="size-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[1.18rem] font-semibold tracking-[-0.015em] text-ink">{network.nationalTitle}</h3>
                <p className="mt-2 text-[0.98rem] leading-[1.65] text-ink-soft">{network.nationalText}</p>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className="h-full rounded-[24px] border border-line bg-white p-6 shadow-card sm:p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-[linear-gradient(160deg,var(--brand),var(--brand-deep))] text-white">
                  <Globe2 aria-hidden className="size-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[1.18rem] font-semibold tracking-[-0.015em] text-ink">{network.internationalTitle}</h3>
                <p className="mt-2 text-[0.98rem] leading-[1.65] text-ink-soft">{network.internationalText}</p>
                <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.12em] text-ink-muted uppercase">{network.ambassadorsLabel}</p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {ambassadors.map((a) => (
                    <li key={a.country} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[0.86rem] font-medium text-brand-ink">
                      {a.country}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
