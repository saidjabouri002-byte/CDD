import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, HeartHandshake, Newspaper, Scale, ShieldCheck } from "lucide-react";
import { photos } from "@/config/assets";
import { tangerNews, sources } from "@/content/network";
import {
  circleAdvantages,
  circleMethod,
  clubIdentity,
  leadership,
  meetingFlow,
  partnerPerks,
  values,
} from "@/content/pages";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink, Container, Eyebrow, Highlight, Rays, SectionHeading, headingClass } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const card = "rounded-[24px] border border-line bg-white p-6 shadow-card sm:p-7";

/** Actualité officielle : nouveaux Cercles en préparation à Tanger. */
export function TangerNews({ className }: { className?: string }) {
  return (
    <Reveal className={className}>
      <article className="relative overflow-hidden rounded-[28px] border border-sky-200 bg-[linear-gradient(120deg,#ffffff,var(--sky-100))] p-6 shadow-card sm:p-8">
        <Rays className="absolute -right-10 -bottom-16 size-56 text-brand/[0.07]" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[560px]">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-deep px-3 py-1 text-[0.72rem] font-semibold tracking-[0.1em] text-white uppercase">
              <Newspaper aria-hidden className="size-3.5" />
              {tangerNews.label}
            </p>
            <h3 className="mt-4 text-[1.25rem] leading-[1.25] font-semibold tracking-[-0.02em] text-ink sm:text-[1.5rem]">{tangerNews.title}</h3>
            <p className="mt-2 text-[0.98rem] leading-[1.65] text-ink-soft">{tangerNews.text}</p>
            <p className="mt-3 text-[0.82rem] text-ink-muted">
              {tangerNews.date} ·{" "}
              <a href={sources.tangerNews} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-brand-deep underline decoration-sky-300 underline-offset-4 hover:decoration-brand-deep">
                {tangerNews.link}
                <ArrowUpRight aria-hidden className="size-3.5" />
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </p>
          </div>
          <ul className="grid shrink-0 gap-2.5 sm:min-w-[260px]">
            {tangerNews.circles.map((c) => (
              <li key={c} className="flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_1px_2px_rgba(11,23,48,0.05)]">
                <Rays className="size-6 shrink-0 text-brand" />
                <span className="text-[0.95rem] font-semibold tracking-[0.03em] text-ink">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

/** Le Club : identité, vision, mission et valeurs (source officielle). */
export function ClubIdentity() {
  return (
    <section aria-labelledby="identite-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{clubIdentity.eyebrow}</Eyebrow>
            <h2 id="identite-title" className={cn("mt-5", headingClass(clubIdentity.headline))}>
              <Highlight text={clubIdentity.headline} />
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.75] text-ink-soft">{clubIdentity.text}</p>
            <a
              href={sources.about}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[0.92rem] font-semibold text-brand-deep"
            >
              En savoir plus sur clubdesdirigeants.ma
              <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </Reveal>
          <Reveal delay={0.08} className="group relative">
            <div aria-hidden className="absolute -inset-y-3 -left-3 w-[86%] rounded-[32px] bg-[linear-gradient(160deg,var(--sky-200),#ffffff)] sm:-left-4" />
            <Photo photo={photos.extra.presentation} sizes="(min-width: 1024px) 560px, 94vw" className="aspect-[4/3] rounded-[24px] border-[5px] border-white shadow-float" />
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
          {clubIdentity.pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.07} className="h-full">
                <article className={cn(card, "h-full")}>
                  <p aria-hidden className="text-[0.85rem] font-semibold tracking-[0.06em] text-brand">/ {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-[1.18rem] font-semibold tracking-[-0.015em] text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-[1.65] text-ink-soft">{p.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const valueIcons = [HeartHandshake, Scale, ShieldCheck];

export function ValuesSection() {
  return (
    <section aria-labelledby="valeurs-title" className="px-2 sm:px-4">
      <div className="rounded-[32px] border border-sky-200 bg-[linear-gradient(170deg,var(--sky-100),var(--sky-50)_50%,#ffffff)] py-16 sm:rounded-[44px] sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading id="valeurs-title" eyebrow={values.eyebrow} title={values.headline} />
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {values.items.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <li key={v.title}>
                  <Reveal delay={i * 0.07} className="h-full">
                    <article className="h-full rounded-[24px] border border-white bg-white/90 p-6 shadow-card sm:p-7">
                      <span className="grid size-12 place-items-center rounded-2xl bg-[linear-gradient(160deg,var(--brand),var(--brand-deep))] text-white">
                        <Icon aria-hidden className="size-[1.35rem]" strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-5 text-[1.2rem] font-semibold tracking-[-0.015em] text-ink">{v.title}</h3>
                      <p className="mt-2 text-[0.98rem] leading-[1.65] text-ink-soft">{v.text}</p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </section>
  );
}

export function LeadershipSection() {
  return (
    <section aria-labelledby="bureau-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="bureau-title" eyebrow={leadership.eyebrow} title={leadership.headline} />
        </Reveal>
        <ul className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {leadership.members.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="group flex h-full flex-col rounded-[24px] border border-line bg-white p-2 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-float">
                  {/* Portrait : emplacement réservé tant que la vraie photo n'est pas fournie */}
                  <Photo
                    photo={photos.bureau[m.key]}
                    sizes="(min-width: 1024px) 190px, (min-width: 480px) 45vw, 92vw"
                    className="aspect-[4/5] rounded-[18px]"
                    compact
                  />
                  <div className="flex flex-1 flex-col items-center px-3 pt-4 pb-3 text-center">
                    <p className="text-[0.98rem] leading-snug font-semibold text-ink">{m.name}</p>
                    <p className="mt-1 rounded-full bg-sky-50 px-2.5 py-0.5 text-[0.8rem] font-medium text-brand-deep">{m.role}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[0.84rem] text-ink-muted">
          Bureau exécutif national du Club des Dirigeants — CDD Maroc.
        </p>
      </Container>
    </section>
  );
}

/** Avantages d'un Cercle + avantages partenaires. */
export function CircleAdvantages() {
  return (
    <section aria-labelledby="pourquoi-cercle-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading id="pourquoi-cercle-title" eyebrow={circleAdvantages.eyebrow} title={circleAdvantages.headline} align="left" />
            <div className="mt-8 rounded-[24px] border border-sky-200 bg-sky-50 p-6">
              <h3 className="text-[1.05rem] font-semibold text-ink">{partnerPerks.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-[1.6] text-ink-soft">{partnerPerks.text}</p>
              <Link href="/partenaires" className="group mt-3 inline-flex min-h-11 items-center gap-1.5 text-[0.92rem] font-semibold text-brand-deep">
                {partnerPerks.cta}
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {circleAdvantages.items.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-4 shadow-[0_1px_2px_rgba(11,23,48,0.04)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-deep text-white">
                    <Check aria-hidden className="size-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-[0.98rem] font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function CircleMethod() {
  return (
    <section aria-labelledby="methode-title" className="px-2 sm:px-4">
      <div className="rounded-[32px] border border-sky-200 bg-[linear-gradient(170deg,var(--sky-100),var(--sky-50)_50%,#ffffff)] py-16 sm:rounded-[44px] sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading id="methode-title" eyebrow={circleMethod.eyebrow} title={circleMethod.headline} />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {circleMethod.steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={(i % 3) * 0.07} className="h-full">
                  <article className="flex h-full gap-4 rounded-[24px] border border-white bg-white/90 p-6 shadow-card">
                    <span className="grid h-9 w-12 shrink-0 place-items-center rounded-full bg-[linear-gradient(180deg,var(--brand-strong),var(--brand-deep))] text-[0.82rem] font-semibold text-white shadow-cta">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.1rem] font-semibold tracking-[-0.015em] text-ink">{s.title}</h3>
                      <p className="mt-1.5 text-[0.96rem] leading-[1.6] text-ink-soft">{s.text}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    </section>
  );
}

export function MeetingFlow() {
  return (
    <section aria-labelledby="deroulement-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="deroulement-title" eyebrow={meetingFlow.eyebrow} title={meetingFlow.headline} align="left" />
            <p className="mt-5 flex items-start gap-2 text-[0.88rem] leading-[1.55] text-ink-muted">
              <BadgeCheck aria-hidden className="mt-[0.15em] size-[1.05em] shrink-0 text-brand-deep" />
              {meetingFlow.note}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ol className="relative border-l-2 border-sky-200 pl-6 sm:pl-8">
              {meetingFlow.steps.map((s) => (
                <li key={s.time} className="relative pb-7 last:pb-0">
                  <span aria-hidden className="absolute top-1 -left-[2.05rem] size-4 rounded-full border-[3px] border-white bg-brand shadow-[0_0_0_2px_var(--sky-200)] sm:-left-[2.55rem]" />
                  <p className="text-[0.82rem] font-semibold tracking-[0.06em] text-brand-deep">{s.time}</p>
                  <h3 className="mt-1 text-[1.08rem] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-[0.96rem] leading-[1.6] text-ink-soft">{s.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Galerie complète de la page Communauté. */
export function FullGallery() {
  const all = [...photos.community, ...Object.values(photos.extra)];
  return (
    <section aria-label="Galerie photos" className="pb-20 sm:pb-28">
      <Container>
        <ul className="columns-1 gap-4 min-[480px]:columns-2 lg:columns-3 lg:gap-5">
          {all.map((p, i) => (
            <li key={p.file} className="mb-4 break-inside-avoid lg:mb-5">
              <Reveal delay={(i % 3) * 0.05} y={14} className="group">
                <Photo
                  photo={p}
                  sizes="(min-width: 1024px) 400px, (min-width: 480px) 46vw, 92vw"
                  className={cn("rounded-[22px] border border-line transition-shadow duration-500 group-hover:shadow-float", i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]")}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Bandeau de conversion compact pour les pages secondaires. */
export function PageCTA({ title, text, label }: { title: string; text: string; label: string }) {
  return (
    <section className="px-2 pb-4 sm:px-4">
      <div className="relative isolate overflow-hidden rounded-[32px] bg-[linear-gradient(120deg,var(--brand-deep),var(--brand)_60%,#35a4ff)] py-14 text-white sm:rounded-[44px] sm:py-20">
        <Rays className="absolute -top-16 -right-16 -z-10 size-[340px] text-white/10" />
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[640px]">
            <h2 className="text-[1.6rem] leading-[1.15] font-semibold tracking-[-0.025em] sm:text-[2.2rem]">{title}</h2>
            <p className="mt-3 text-[1.02rem] leading-[1.6] text-white/85">{text}</p>
          </div>
          <ButtonLink href="/#contact" variant="light" className="w-full shrink-0 sm:w-auto">
            {label}
          </ButtonLink>
        </Container>
      </div>
    </section>
  );
}
