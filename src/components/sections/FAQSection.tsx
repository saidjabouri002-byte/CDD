"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Accordéon accessible : chaque question est un <button> (clavier : Tab, Entrée, Espace)
 * avec aria-expanded / aria-controls ; la réponse est une région liée à sa question.
 * L'ouverture est animée par une transition de grille (aucun saut de mise en page).
 */
type FaqItem = { question: string; answer: string };

export function FAQSection({ items = faq.items, showHeading = true }: { items?: readonly FaqItem[]; showHeading?: boolean } = {}) {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby={showHeading ? "faq-title" : "page-title"} className={showHeading ? "py-20 sm:py-28" : "pb-20 sm:pb-28"}>
      <Container>
        <div>
          {showHeading && (
            <Reveal>
              <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.headline} />
            </Reveal>
          )}

          <Reveal delay={0.08} className={showHeading ? "mx-auto mt-10 max-w-[820px] sm:mt-12" : "mx-auto max-w-[820px]"}>
            <ul className="grid gap-3">
              {items.map((item, i) => {
                const isOpen = open === i;
                const buttonId = `${uid}-q-${i}`;
                const panelId = `${uid}-a-${i}`;
                return (
                  <li
                    key={item.question}
                    className={cn(
                      "rounded-[20px] border bg-white transition-[border-color,box-shadow,background-color] duration-300",
                      isOpen ? "border-sky-300 bg-sky-50/60 shadow-card" : "border-line hover:border-sky-300",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex min-h-16 w-full items-center justify-between gap-4 rounded-[20px] px-5 py-4 text-left text-[1.03rem] leading-[1.35] font-semibold tracking-[-0.01em] text-ink sm:px-6 sm:text-[1.1rem]"
                      >
                        {item.question}
                        <span
                          aria-hidden
                          className={cn(
                            "grid size-9 shrink-0 place-items-center rounded-full border transition-[transform,background-color,color,border-color] duration-300",
                            isOpen ? "rotate-45 border-brand-deep bg-brand-deep text-white" : "border-line-strong bg-white text-brand-deep",
                          )}
                        >
                          <Plus className="size-[1.1rem]" strokeWidth={2.2} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      inert={!isOpen}
                      className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pr-10 pb-5 text-[1rem] leading-[1.7] text-ink-soft sm:px-6 sm:pr-16 sm:pb-6">{item.answer}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
