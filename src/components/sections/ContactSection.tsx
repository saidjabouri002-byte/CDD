import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { contact } from "@/content/site";
import { getIntegration } from "@/lib/integration";
import { Container, Eyebrow, Highlight, headingClass, Rays } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { GhlFormEmbed } from "./GhlFormEmbed";

export function ContactSection() {
  const integration = getIntegration();
  const [lead, ...paragraphs] = contact.paragraphs;

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-2 sm:px-4">
      <div className="relative isolate overflow-hidden rounded-[32px] border border-sky-200 bg-[linear-gradient(160deg,#d3e6ff_0%,var(--sky-100)_38%,var(--sky-50)_100%)] py-14 sm:rounded-[44px] sm:py-24">
        <Rays className="absolute -top-24 -left-28 -z-10 size-[440px] text-white/55" />
        <div aria-hidden className="absolute -right-32 -bottom-40 -z-10 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(10,123,240,0.16),transparent)]" />

        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.12fr] lg:gap-14">
            <Reveal className="lg:self-start [@media(min-width:1024px)_and_(min-height:900px)]:sticky [@media(min-width:1024px)_and_(min-height:900px)]:top-28">
              <Eyebrow>{contact.eyebrow}</Eyebrow>
              <h2 id="contact-title" className={cn("mt-5", headingClass(contact.headline), "max-sm:text-[clamp(1rem,5.5vw,1.6rem)]! lg:text-[clamp(1.7rem,2.65vw,2.15rem)]")}>
                <Highlight text={contact.headline} />
              </h2>
              {/* Fondu à gauche : l'image se dissout dans le fond bleu clair de la section */}
              <Image
                src="/images/cdd/strategie-echecs.webp"
                alt="Une pièce d'échecs bleue, coiffée du symbole du Club, se démarque d'une rangée de pions"
                width={1100}
                height={1025}
                sizes="(min-width: 1024px) 360px, 70vw"
                className="mt-6 h-auto w-full max-w-[360px] [mask-image:linear-gradient(to_right,transparent,black_38%)]"
              />
              <p className="mt-6 text-[1.12rem] leading-[1.55] font-semibold text-ink">{lead}</p>
              {paragraphs.map((p) => (
                <p key={p} className="mt-3 max-w-[480px] text-[1.03rem] leading-[1.7] text-ink-soft">
                  {p}
                </p>
              ))}
              <p className="mt-7 inline-flex items-center gap-2.5 rounded-2xl border border-white bg-white/75 px-4 py-3 text-[0.95rem] leading-snug font-medium text-brand-ink shadow-card backdrop-blur">
                {contact.instruction}
                <ArrowRight aria-hidden className="hidden size-[1.1em] shrink-0 text-brand-deep lg:block" />
                <ArrowDown aria-hidden className="size-[1.1em] shrink-0 text-brand-deep lg:hidden" />
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-white bg-white p-5 shadow-float sm:p-8 lg:p-10">
                {integration.kind === "embed" ? (
                  <>
                    <GhlFormEmbed formUrl={integration.formUrl} height={integration.height} />
                    <p className="mt-4 text-center text-[0.82rem] leading-[1.55] text-ink-muted">{contact.microcopy}</p>
                  </>
                ) : (
                  <ContactForm mode={integration.kind} />
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
