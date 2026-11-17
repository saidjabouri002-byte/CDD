import type { Metadata } from "next";
import { pageIntros } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { BusinessCirclesSection } from "@/components/sections/BusinessCirclesSection";
import { CircleAdvantages, CircleMethod, MeetingFlow } from "@/components/sections/PageSections";

export const metadata: Metadata = {
  title: "Cercles d'Affaires",
  description: "Les Cercles d'Affaires du CDD Tanger : Victoire, Synergy, Smart, et deux nouveaux Cercles en préparation à Tanger.",
  alternates: { canonical: "/cercles" },
};

export default function CerclesPage() {
  return (
    <>
      <PageHero intro={pageIntros.circles} current="Cercles" />
      <BusinessCirclesSection />
      <CircleMethod />
      <MeetingFlow />
      <CircleAdvantages />
    </>
  );
}
