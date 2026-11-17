import { photos } from "@/config/assets";
import { introduction } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink, Container, Eyebrow, Highlight, headingClass } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function IntroductionSection() {
  const [welcome, ...paragraphs] = introduction.paragraphs;

  return (
    <section id="club" aria-labelledby="club-title" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,var(--sky-50)_18%,var(--sky-100)_60%,#ffffff_100%)]" />
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{introduction.eyebrow}</Eyebrow>
            <h2 id="club-title" className={cn("mt-5", headingClass(introduction.headline))}>
              <Highlight text={introduction.headline} />
            </h2>
            <p className="mt-6 text-[1.12rem] leading-[1.6] font-semibold text-ink">{welcome}</p>
            {paragraphs.map((p) => (
              <p key={p} className="mt-4 text-[1.02rem] leading-[1.7] text-ink-soft">
                {p}
              </p>
            ))}
            <p className="mt-7 border-l-[3px] border-brand pl-4 text-[1.08rem] leading-[1.5] font-semibold tracking-[-0.01em] text-brand-ink sm:text-[1.15rem]">
              {introduction.highlight}
            </p>
            <ButtonLink href={introduction.cta.href} className="mt-8 w-full sm:w-auto">
              {introduction.cta.label}
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.1} className="group relative">
            <div aria-hidden className="absolute -inset-y-3 -right-3 w-[86%] rounded-[32px] bg-[linear-gradient(160deg,var(--sky-200),#ffffff)] sm:-right-4" />
            <Photo
              photo={photos.introduction}
              sizes="(min-width: 1024px) 620px, 94vw"
              className="aspect-[4/3] rounded-[24px] border-[5px] border-white shadow-float"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
