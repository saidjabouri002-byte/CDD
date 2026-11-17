import { site } from "@/config/assets";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { BusinessCirclesSection } from "@/components/sections/BusinessCirclesSection";
import { CommunityGallery } from "@/components/sections/CommunityGallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

// Données structurées minimales : uniquement des faits vérifiés (titre, description, langue).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: site.title,
  description: site.description,
  inLanguage: "fr",
  ...(site.url ? { url: site.url } : {}),
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersStrip />
      <TrustStrip />
      <ProblemSection />
      <IntroductionSection />
      <BenefitsGrid />
      <ActivitiesSection />
      <BusinessCirclesSection tight />
      {/* Espace réduit sous le lien de l'annuaire des Cercles */}
      <NetworkSection tight />
      <CommunityGallery />
      <ContactSection />
      <FAQSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
