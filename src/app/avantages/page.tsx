import type { Metadata } from "next";
import { pageIntros } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { CircleAdvantages } from "@/components/sections/PageSections";
import { PartnersStrip } from "@/components/sections/PartnersStrip";

export const metadata: Metadata = {
  title: "Avantages",
  description: "Réseau, visibilité, recommandations, partenaires : ce que le CDD Tanger peut apporter à votre entreprise.",
  alternates: { canonical: "/avantages" },
};

export default function AvantagesPage() {
  return (
    <>
      <PageHero intro={pageIntros.benefits} current="Avantages" />
      <BenefitsGrid />
      <CircleAdvantages />
      <ProblemSection />
      <PartnersStrip />
      <div className="h-20 sm:h-28" />
    </>
  );
}
