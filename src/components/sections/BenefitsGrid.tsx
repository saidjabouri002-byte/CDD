import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Handshake, Lightbulb, Megaphone, Network, Rocket, type LucideIcon } from "lucide-react";
import { photos } from "@/config/assets";
import { benefits } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { Container, Rays, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const icons: Record<(typeof benefits.cards)[number]["icon"], LucideIcon> = {
  network: Network,
  megaphone: Megaphone,
  handshake: Handshake,
  rocket: Rocket,
  lightbulb: Lightbulb,
  compass: Compass,
};

/** Icônes 3D des cartes « Pourquoi nous rejoindre ? » (noms de fichiers descriptifs pour le référencement). */
const iconImages: Partial<Record<(typeof benefits.cards)[number]["icon"], string>> = {
  megaphone: "/images/cdd/icons/cdd-tanger-visibilite-entreprise.webp",
  handshake: "/images/cdd/icons/cdd-tanger-opportunites-affaires.webp",
  rocket: "/images/cdd/icons/cdd-tanger-entrepreneurs-ambitieux.webp",
  lightbulb: "/images/cdd/icons/cdd-tanger-partage-experiences.webp",
};

/**
 * Grille « bento » : 1re carte mise en avant avec une vraie photo du Club,
 * 4 cartes standard, et la dernière (« Élargissez vos horizons ») en bandeau vers le réseau national.
 */
export function BenefitsGrid() {
  const [first, ...rest] = benefits.cards;
  const last = rest[rest.length - 1];
  const middle = rest.slice(0, -1);
  const FirstIcon = icons[first.icon];
  const LastIcon = icons[last.icon];

  return (
    <section id="avantages" aria-labelledby="avantages-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="avantages-title" eyebrow={benefits.eyebrow} title={benefits.headline} />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {/* Carte mise en avant */}
          <li className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <Reveal className="h-full">
              <article className="group relative isolate flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-[26px] p-6 text-white shadow-float sm:min-h-[380px] sm:p-8">
                <Photo photo={photos.extra.salle2} sizes="(min-width: 1024px) 400px, (min-width: 640px) 90vw, 94vw" className="absolute! inset-0 -z-20" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,22,55,0.05)_0%,rgba(6,22,55,0.55)_45%,rgba(6,22,55,0.94)_100%)]" />
                <span className="grid size-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur">
                  <FirstIcon aria-hidden className="size-[1.4rem]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-[1.35rem] leading-[1.2] font-semibold tracking-[-0.02em] sm:text-[1.6rem]">{first.title}</h3>
                <p className="mt-2.5 max-w-[440px] text-[1rem] leading-[1.6] text-white/80">{first.text}</p>
              </article>
            </Reveal>
          </li>

          {middle.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <li key={card.title}>
                <Reveal delay={((i % 2) + 1) * 0.07} className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-line bg-white p-6 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-float sm:p-7">
                    <div aria-hidden className="absolute -top-16 -right-16 size-40 rounded-full bg-[radial-gradient(closest-side,var(--sky-200),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-center justify-between">
                      {/* Icône 3D dans un cadre carré arrondi (même style que la barre du héro) */}
                      <span className="relative grid size-16 place-items-center overflow-hidden rounded-2xl border-[1.5px] border-sky-300 bg-[linear-gradient(160deg,#ffffff_0%,var(--sky-50)_55%,var(--sky-100)_100%)] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_8px_18px_-10px_rgba(4,80,216,0.45)] ring-4 ring-sky-50 transition-[transform,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:-rotate-3 group-hover:border-brand/60">
                        <span aria-hidden className="absolute inset-x-1.5 top-1 h-1/3 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,0.85),transparent)]" />
                        {iconImages[card.icon] ? (
                          <Image
                            src={iconImages[card.icon]!}
                            alt=""
                            width={192}
                            height={192}
                            sizes="48px"
                            className="relative size-12 object-contain drop-shadow-[0_4px_6px_rgba(4,80,216,0.18)]"
                          />
                        ) : (
                          <Icon aria-hidden className="relative size-[1.4rem] text-brand-deep" strokeWidth={1.8} />
                        )}
                      </span>
                      <span aria-hidden className="text-[0.8rem] font-semibold tracking-[0.08em] text-sky-300">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-[1.15rem] leading-[1.3] font-semibold tracking-[-0.015em] text-ink">{card.title}</h3>
                    <p className="relative mt-2.5 text-[0.98rem] leading-[1.65] text-ink-soft">{card.text}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}

          {/* Bandeau final : ouverture vers le réseau national */}
          <li className="sm:col-span-2 lg:col-span-3">
            <Reveal className="h-full">
              <article
                className={cn(
                  "group relative isolate flex h-full flex-col gap-5 overflow-hidden rounded-[26px] p-6 text-white sm:flex-row sm:items-center sm:gap-7 sm:p-8 lg:px-10",
                  "bg-[linear-gradient(115deg,var(--brand-deep)_0%,var(--brand)_55%,#35a4ff_100%)] shadow-cta",
                )}
              >
                <Rays className="absolute -top-20 -right-10 -z-10 size-[280px] text-white/10 transition-transform duration-700 group-hover:rotate-12" />
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30">
                  <LastIcon aria-hidden className="size-7" strokeWidth={1.7} />
                </span>
                <div className="flex-1">
                  <h3 className="text-[1.25rem] leading-[1.25] font-semibold tracking-[-0.02em] sm:text-[1.45rem]">{last.title}</h3>
                  <p className="mt-1.5 text-[1rem] leading-[1.6] text-white/85">{last.text}</p>
                </div>
                <Link
                  href="/#reseau"
                  className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-xl bg-white px-5 text-[0.92rem] font-semibold text-brand-deep shadow-float transition-transform duration-300 hover:-translate-y-0.5 sm:self-center"
                >
                  Voir le réseau
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </article>
            </Reveal>
          </li>
        </ul>
      </Container>
    </section>
  );
}
