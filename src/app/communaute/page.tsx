import type { Metadata } from "next";
import { pageIntros } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { CommunityGallery } from "@/components/sections/CommunityGallery";
import { FullGallery, ValuesSection } from "@/components/sections/PageSections";
import { NetworkSection } from "@/components/sections/NetworkSection";

export const metadata: Metadata = {
  title: "Communauté",
  description: "La communauté du CDD Tanger : des dirigeants et entrepreneurs qui construisent des relations au-delà de leurs activités.",
  alternates: { canonical: "/communaute" },
};

export default function CommunautePage() {
  return (
    <>
      <PageHero intro={pageIntros.community} current="Communauté" />
      <CommunityGallery />
      <FullGallery />
      <ValuesSection />
      <NetworkSection />
    </>
  );
}
