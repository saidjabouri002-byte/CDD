import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PageIntro } from "@/content/pages";
import { Container, Eyebrow, Highlight, Rays } from "@/components/ui/primitives";

/** En-tête des pages secondaires : fil d'Ariane, titre unique (h1) et introduction. */
export function PageHero({ intro, current }: { intro: PageIntro; current: string }) {
  return (
    <section id="top" aria-labelledby="page-title" className="relative isolate overflow-hidden pt-[7.5rem] pb-14 sm:pt-40 sm:pb-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#cfe3ff_0%,#e6f0ff_45%,#ffffff_100%)]" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.9),transparent)]" />
      <Rays className="absolute -top-20 -right-24 -z-10 size-[380px] text-white/60 sm:size-[480px]" />

      <Container>
        <nav aria-label="Fil d'Ariane" className="animate-rise">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.85rem] text-ink-muted">
            <li>
              <Link href="/" className="rounded transition-colors hover:text-brand-deep">
                Accueil
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-ink">
              {current}
            </li>
          </ol>
        </nav>
        <div className="mt-6 max-w-[860px]">
          <Eyebrow className="animate-rise [animation-delay:60ms]">{intro.eyebrow}</Eyebrow>
          <h1
            id="page-title"
            className="animate-rise mt-5 text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.035em] text-ink [animation-delay:120ms] min-[400px]:text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem]"
          >
            <Highlight text={intro.title} />
          </h1>
          <p className="animate-rise mt-5 max-w-[680px] text-[1.05rem] leading-[1.65] text-ink-soft [animation-delay:180ms] sm:text-[1.15rem]">
            {intro.intro}
          </p>
        </div>
      </Container>
    </section>
  );
}
