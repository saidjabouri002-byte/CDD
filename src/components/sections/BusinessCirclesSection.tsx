import { ArrowUpRight } from "lucide-react";
import { links, photos } from "@/config/assets";
import { circles } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink, Container, Rays, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { TangerNews } from "./PageSections";

export function BusinessCirclesSection({ tight = false }: { tight?: boolean }) {
  return (
    <section
      id="cercles"
      aria-labelledby="cercles-title"
      className={cn("relative isolate overflow-hidden pt-20 sm:pt-28", tight ? "pb-4" : "pb-20 sm:pb-28")}
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,var(--sky-50)_30%,var(--sky-50)_70%,#ffffff_100%)]" />
      <Container>
        <Reveal>
          <SectionHeading id="cercles-title" eyebrow={circles.eyebrow} title={circles.headline} intro={circles.intro} />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
          {circles.items.map((item, i) => (
            <li key={item.key}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="group flex h-full flex-col rounded-[28px] border border-line bg-white p-2.5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-float">
                  <Photo photo={photos.cercles[item.key]} sizes="(min-width: 768px) 30vw, 92vw" className="aspect-[16/11] rounded-[20px]" compact />
                  <div className="flex flex-1 flex-col p-4 pt-5 sm:p-5">
                    <div className="flex items-center gap-2.5">
                      <Rays className="size-6 shrink-0 text-brand" />
                      <h3 className="text-[1.02rem] font-semibold tracking-[0.04em] text-ink">{item.name}</h3>
                    </div>
                    <p className="mt-3 text-[0.98rem] leading-[1.65] text-ink-soft">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <TangerNews className="mt-5 sm:mt-6" />

        <Reveal className="mt-10 flex flex-col items-center gap-5 sm:mt-14">
          <ButtonLink href={circles.cta.href} className="w-full sm:w-auto">
            {circles.cta.label}
          </ButtonLink>
          <a
            href={links.circlesDirectory}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-[0.92rem] font-medium text-brand-deep underline decoration-sky-300 underline-offset-4 transition-colors hover:decoration-brand-deep"
          >
            {circles.directoryLabel}
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
