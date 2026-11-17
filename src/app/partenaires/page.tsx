import type { Metadata } from "next";
import { pageIntros } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { PartnersGrid } from "@/components/sections/PartnersGrid";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "Les partenaires institutionnels, académiques, professionnels et entreprises du réseau Club des Dirigeants.",
  alternates: { canonical: "/partenaires" },
};

export default function PartenairesPage() {
  return (
    <>
      <PageHero intro={pageIntros.partners} current="Partenaires" />
      <PartnersGrid />
    </>
  );
}
