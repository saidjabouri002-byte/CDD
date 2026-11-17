import Image from "next/image";
import { Handshake, Quote, TrendingUp, UserRoundSearch, UsersRound } from "lucide-react";
import { problem } from "@/content/site";
import { Container, Rays, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const icons = [UserRoundSearch, TrendingUp, Handshake, UsersRound];

export function ProblemSection() {
  return (
    <section id="constat" aria-labelledby="constat-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="constat-title" eyebrow={problem.eyebrow} title={problem.headline} align="left" />
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Introduction + citation, fixées à gauche sur ordinateur pendant la lecture des cartes */}
          <Reveal className="lg:self-start [@media(min-width:1024px)_and_(min-height:820px)]:sticky [@media(min-width:1024px)_and_(min-height:820px)]:top-32">
            <Image
              src="/images/cdd/entraide-ascension.webp"
              alt="Un dirigeant aide un autre entrepreneur à gravir une marche"
              width={1200}
              height={791}
              sizes="(min-width: 1024px) 460px, 92vw"
              className="mx-auto mb-6 h-auto w-full max-w-[460px] [mask-composite:intersect] [mask-image:linear-gradient(to_right,black_72%,transparent),linear-gradient(to_bottom,black_70%,transparent)]"
            />
            <p className="text-[1.08rem] leading-[1.7] text-ink-soft sm:text-[1.15rem]">{problem.intro}</p>
            <div className="relative isolate mt-7 overflow-hidden rounded-[26px] bg-[linear-gradient(140deg,var(--night)_0%,var(--night-soft)_75%,#0d3a85_100%)] p-6 sm:p-8">
              <div aria-hidden className="line-grid-dark absolute inset-0 -z-10 [mask-image:linear-gradient(160deg,transparent,black)]" />
              <div aria-hidden className="absolute -top-24 -left-20 -z-10 size-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(10,123,240,0.45),transparent)]" />
              <Rays className="absolute -right-16 -bottom-20 -z-10 size-[240px] text-white/[0.06]" />
              <Quote aria-hidden className="size-8 text-glow" strokeWidth={1.6} />
              <p className="mt-4 text-[1.18rem] leading-[1.4] font-semibold tracking-[-0.02em] text-white sm:text-[1.35rem]">{problem.closing}</p>
            </div>
          </Reveal>

          <ol className="grid gap-3.5 sm:gap-4">
            {problem.cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <li key={card.title}>
                  <Reveal delay={i * 0.06} className="h-full">
                    <article className="group relative flex h-full flex-col gap-4 overflow-hidden min-[420px]:flex-row rounded-[22px] border border-line bg-white p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-float sm:gap-5 sm:p-7">
                      <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-[linear-gradient(180deg,var(--brand),var(--brand-deep))] transition-transform duration-500 group-hover:scale-y-100" />
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-sky-200 bg-sky-50 text-brand-deep transition-colors duration-300 group-hover:border-transparent group-hover:bg-brand-deep group-hover:text-white">
                        <Icon aria-hidden className="size-[1.35rem]" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1.08rem] leading-[1.3] font-semibold tracking-[-0.015em] text-ink sm:text-[1.2rem]">{card.title}</h3>
                        <p className="mt-2 text-[0.98rem] leading-[1.65] text-ink-soft">{card.text}</p>
                      </div>
                      <span aria-hidden className="hidden self-start text-[0.78rem] font-semibold tracking-[0.08em] text-sky-300 sm:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
