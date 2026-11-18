import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { partners, type Partner } from "@/content/partners";
import { Container, Highlight } from "@/components/ui/primitives";

const featured = partners.filter((p) => p.featured);
const rowA = featured.filter((_, i) => i % 2 === 0);
const rowB = featured.filter((_, i) => i % 2 === 1);

function LogoTile({ partner, hidden }: { partner: Partner; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden} className="grid h-[4.5rem] w-[9.5rem] shrink-0 place-items-center rounded-2xl border border-line bg-white px-4 shadow-[0_1px_2px_rgba(11,23,48,0.04)] sm:h-20 sm:w-44">
      <Image
        src={partner.file}
        alt={hidden ? "" : partner.name}
        width={partner.width}
        height={partner.height}
        sizes="160px"
        className="max-h-10 w-auto max-w-full object-contain sm:max-h-11"
      />
    </li>
  );
}

/** Une rangée qui défile en boucle : la liste est dupliquée (copie masquée aux lecteurs d'écran). */
function MarqueeRow({ items, reverse }: { items: Partner[]; reverse?: boolean }) {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <ul
        className="flex w-max gap-3 py-1.5 pr-3 sm:pr-4 [animation:marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none] sm:gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {items.map((p) => (
          <LogoTile key={p.file} partner={p} />
        ))}
        {items.map((p) => (
          <LogoTile key={`${p.file}-copy`} partner={p} hidden />
        ))}
      </ul>
    </div>
  );
}

export function PartnersStrip() {
  return (
    <section aria-labelledby="partenaires-strip-title" className="pt-16 sm:pt-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-brand-deep uppercase">Écosystème</p>
            <h2 id="partenaires-strip-title" className="mt-2 text-[1.15rem] font-semibold tracking-[-0.015em] text-ink sm:text-[1.3rem]">
              <Highlight text="Ils Accompagnent le Réseau Club des Dirigeants" />
            </h2>
          </div>
          <Link
            href="/partenaires"
            className="group inline-flex min-h-11 items-center gap-1.5 text-[0.92rem] font-semibold text-brand-deep"
          >
            Voir les +100 partenaires
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
      {/* Bandeau aligné sur les marges du contenu : espace blanc à gauche et à droite */}
      <div className="mx-auto mt-6 grid w-full max-w-[1240px] gap-3 px-5 sm:gap-4 sm:px-8">

        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}
