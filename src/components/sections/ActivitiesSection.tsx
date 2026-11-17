import { Info } from "lucide-react";
import { photos } from "@/config/assets";
import { activities } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function ActivitiesSection() {
  return (
    <section id="activites" aria-labelledby="activites-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="activites-title" eyebrow={activities.eyebrow} title={activities.headline} />
        </Reveal>

        <div className="mt-12 grid gap-14 sm:mt-20 sm:gap-20 lg:gap-24">
          {activities.items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <article key={item.key} className="grid items-center gap-7 md:grid-cols-2 md:gap-12 lg:gap-20">
                <Reveal className={cn("group relative", reversed && "md:order-2")}>
                  {/* Cadre bleu doux décalé, inspiré de la référence 2 */}
                  <div
                    aria-hidden
                    className={cn(
                      "absolute -inset-y-3 w-[86%] rounded-[32px] bg-[linear-gradient(160deg,var(--sky-200),var(--sky-100))]",
                      reversed ? "-right-3 sm:-right-4" : "-left-3 sm:-left-4",
                    )}
                  />
                  <Photo
                    photo={photos.activities[item.key]}
                    sizes="(min-width: 768px) 46vw, 92vw"
                    className="aspect-[4/3] rounded-[24px] border-[5px] border-white shadow-float"
                  />
                </Reveal>

                <Reveal delay={0.08} className={cn(reversed && "md:order-1")}>
                  <p aria-hidden className="text-[0.95rem] font-semibold tracking-[0.06em] text-brand">
                    / {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[1.5rem] leading-[1.2] font-semibold tracking-[-0.025em] text-ink sm:text-[1.9rem] lg:text-[2.1rem]">
                    <span className="mark-sky">{item.title}</span>
                  </h3>
                  <p className="mt-4 max-w-[480px] text-[1.03rem] leading-[1.7] text-ink-soft">{item.text}</p>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal>
          <p className="mx-auto mt-14 flex max-w-[640px] items-start gap-2.5 rounded-2xl border border-line bg-sky-50 px-4 py-3.5 text-[0.88rem] leading-[1.55] text-ink-muted sm:mt-20">
            <Info aria-hidden className="mt-[0.2em] size-[1.05em] shrink-0 text-brand-deep" />
            {activities.disclaimer}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
