import Image from "next/image";
import { logo } from "@/config/assets";
import { trust } from "@/content/site";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section aria-label="Le Club des Dirigeants" className="pt-16 sm:pt-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-[linear-gradient(120deg,#ffffff_0%,var(--sky-50)_55%,var(--sky-100)_100%)] p-6 shadow-card sm:p-9 lg:p-11">
            <div className="grid items-center gap-7 lg:grid-cols-[auto_1px_1fr] lg:gap-11">
              <div className="flex flex-col items-start gap-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  sizes="(min-width: 640px) 250px, 200px"
                  className="-ml-3 h-auto w-[200px] sm:w-[250px]"
                />
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-brand-deep uppercase">{trust.label}</p>
              </div>
              <div aria-hidden className="hidden h-full min-h-24 bg-line-strong lg:block" />
              <div>
                <p className="text-[1.3rem] leading-[1.25] font-semibold tracking-[-0.02em] text-ink sm:text-[1.6rem]">{trust.main}</p>
                <p className="mt-3 max-w-[640px] text-[1rem] leading-[1.7] text-ink-soft">{trust.supporting}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
