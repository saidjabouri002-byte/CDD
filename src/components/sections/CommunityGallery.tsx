import { photos } from "@/config/assets";
import { community } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

/** Emprise de chaque photo dans la grille asymétrique (mobile : 2 colonnes · ordinateur : 12 colonnes). */
const spans = [
  "col-span-2 row-span-2 md:col-span-7 md:row-span-2",
  "col-span-1 md:col-span-5",
  "col-span-1 md:col-span-5",
  "col-span-1 md:col-span-4",
  "col-span-1 md:col-span-4",
  "col-span-2 md:col-span-4",
];

export function CommunityGallery() {
  const [first, ...rest] = community.paragraphs;

  return (
    <section id="communaute" aria-labelledby="communaute-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="communaute-title" eyebrow={community.eyebrow} title={community.headline} />
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-[1.12rem] leading-[1.6] font-semibold text-ink">{first}</p>
            {rest.map((p) => (
              <p key={p} className="mt-3 text-[1.02rem] leading-[1.7] text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <ul className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 min-[480px]:auto-rows-[190px] sm:mt-14 sm:gap-4 md:auto-rows-[210px] md:grid-cols-12 lg:auto-rows-[250px] lg:gap-5">
          {photos.community.map((photo, i) => (
            <li key={photo.file} className={spans[i]}>
              <Reveal delay={(i % 3) * 0.06} y={14} className="group h-full">
                <Photo
                  photo={photo}
                  compact={i !== 0}
                  sizes={i === 0 ? "(min-width: 768px) 58vw, 92vw" : "(min-width: 768px) 40vw, 46vw"}
                  className="size-full rounded-[20px] border border-line transition-shadow duration-500 group-hover:shadow-float sm:rounded-[26px]"
                />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-10 text-center text-[1.6rem] leading-[1.2] font-semibold tracking-[-0.025em] sm:mt-14 sm:text-[2.2rem]">
            <span className="bg-[linear-gradient(95deg,var(--brand-deep),var(--brand)_60%,#35a4ff)] bg-clip-text text-transparent">{community.highlight}</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
