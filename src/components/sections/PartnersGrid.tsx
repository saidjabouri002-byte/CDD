import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { partnerCategories, partners } from "@/content/partners";
import { sources } from "@/content/network";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

/** Tous les partenaires du réseau, classés comme sur le site officiel. */
export function PartnersGrid() {
  return (
    <section aria-label="Liste des partenaires" className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-14 sm:gap-20">
          {partnerCategories.map((cat) => {
            const items = partners.filter((p) => p.category === cat.key);
            return (
              <section key={cat.key} aria-labelledby={`cat-${cat.key}`}>
                <Reveal>
                  <div className="flex flex-col justify-between gap-2 border-b border-line pb-5 sm:flex-row sm:items-end">
                    <div>
                      <h2 id={`cat-${cat.key}`} className="text-[1.35rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.7rem]">
                        {cat.title}
                      </h2>
                      <p className="mt-1.5 max-w-[620px] text-[0.98rem] leading-[1.6] text-ink-soft">{cat.text}</p>
                    </div>
                    <p className="shrink-0 text-[0.85rem] font-medium text-ink-muted">{items.length} partenaires</p>
                  </div>
                </Reveal>
                <ul className="mt-6 grid grid-cols-2 gap-3 min-[520px]:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
                  {items.map((p) => (
                    <li key={p.file}>
                      <div className="group grid h-24 place-items-center rounded-2xl border border-line bg-white p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-card sm:h-28">
                        <Image
                          src={p.file}
                          alt={p.name}
                          title={p.name}
                          width={p.width}
                          height={p.height}
                          sizes="180px"
                          className="max-h-12 w-auto max-w-full object-contain sm:max-h-14"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <p className="mt-14 text-center text-[0.88rem] leading-[1.6] text-ink-muted">
          Partenaires du réseau national Club des Dirigeants — CDD Maroc.{" "}
          <a
            href={sources.partners}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-brand-deep underline decoration-sky-300 underline-offset-4 hover:decoration-brand-deep"
          >
            Source : clubdesdirigeants.ma
            <ArrowUpRight aria-hidden className="size-3.5" />
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </p>
      </Container>
    </section>
  );
}
