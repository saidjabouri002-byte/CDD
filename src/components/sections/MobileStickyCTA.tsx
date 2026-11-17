"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

/**
 * Bouton d'action discret, fixé en bas d'écran sur mobile uniquement.
 * Il n'apparaît qu'après le héro et disparaît dès que le formulaire de contact est visible,
 * pour ne jamais recouvrir les champs.
 */
export function MobileStickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const heroEl = document.getElementById("top");
    const contactEl = document.getElementById("contact");
    if (!heroEl) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting);
        if (!contactEl) setContactVisible(false);
      },
      { threshold: 0.15 },
    );
    const contactObserver = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { threshold: 0.02 });
    heroObserver.observe(heroEl);
    if (contactEl) contactObserver.observe(contactEl);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, [pathname]);

  const visible = pastHero && !contactVisible;

  return (
    <div
      inert={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div className="rounded-full border border-white/80 bg-white/80 p-1.5 shadow-float backdrop-blur-xl">
        <ButtonLink href={hero.primaryCta.href} size="md" className="w-full">
          {hero.primaryCta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
