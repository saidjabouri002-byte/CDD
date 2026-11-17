import type { Metadata } from "next";
import { faq } from "@/content/site";
import { extraFaq, pageIntros } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions fréquentes sur le CDD Tanger : public, Cercles d'Affaires, adhésion, réseau national et international.",
  alternates: { canonical: "/faq" },
};

const allQuestions = [...faq.items, ...extraFaq];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQuestions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero intro={pageIntros.faq} current="FAQ" />
      <FAQSection items={allQuestions} showHeading={false} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
