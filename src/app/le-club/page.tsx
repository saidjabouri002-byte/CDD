import type { Metadata } from "next";
import { pageIntros } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { ClubIdentity, LeadershipSection, ValuesSection } from "@/components/sections/PageSections";
import { NetworkSection } from "@/components/sections/NetworkSection";

export const metadata: Metadata = {
  title: "Le Club",
  description: "Le Club des Dirigeants à Tanger : un réseau d'affaires local, intégré à un réseau national et international de dirigeants.",
  alternates: { canonical: "/le-club" },
};

export default function ClubPage() {
  return (
    <>
      <PageHero intro={pageIntros.club} current="Le Club" />
      <IntroductionSection />
      <ClubIdentity />
      <ValuesSection />
      <NetworkSection />
      <LeadershipSection />
    </>
  );
}
