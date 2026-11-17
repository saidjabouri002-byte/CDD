import type { Metadata } from "next";
import { pageIntros } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { MeetingFlow } from "@/components/sections/PageSections";
import { CommunityGallery } from "@/components/sections/CommunityGallery";

export const metadata: Metadata = {
  title: "Activités",
  description: "Cercles d'Affaires, rencontres de networking, conférences et rencontres B2B du Club des Dirigeants à Tanger.",
  alternates: { canonical: "/activites" },
};

export default function ActivitesPage() {
  return (
    <>
      <PageHero intro={pageIntros.activities} current="Activités" />
      <ActivitiesSection />
      <MeetingFlow />
      <CommunityGallery />
    </>
  );
}
