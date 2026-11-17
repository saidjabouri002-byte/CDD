import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Geist } from "next/font/google";
import { site } from "@/config/assets";
import { MotionProvider } from "@/components/ui/Reveal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageCTA } from "@/components/sections/PageSections";
import { MobileStickyCTA } from "@/components/sections/MobileStickyCTA";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: { default: site.title, template: "%s | CDD Tanger" },
  description: site.description,
  alternates: site.url ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url || undefined,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={geist.variable}>
      <body>
        <MotionProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2.5 focus:text-[0.9rem] focus:font-semibold focus:text-brand-deep focus:shadow-float"
          >
            Aller au contenu
          </a>
          <Navbar />
          <main id="contenu">{children}</main>
          {/* Photo des dirigeants posée sur le bandeau bleu */}
          <div className="mx-auto mt-10 w-full max-w-[896px] px-5 sm:mt-14">
            <Image
              src="/images/cdd/equipe-dirigeants.webp"
              alt="Dirigeants de différents secteurs devant le symbole bleu du Club des Dirigeants"
              width={1200}
              height={675}
              sizes="(min-width: 940px) 896px, 92vw"
              className="h-auto w-full"
            />
          </div>
          {/* Même appel à l'action bleu sur toutes les pages, juste avant le pied de page */}
          <PageCTA
            title="Développez votre réseau à Tanger."
            text="Complétez le formulaire pour être recontacté par notre équipe."
            label="Je souhaite rejoindre le réseau"
          />
          <Footer />
          <MobileStickyCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
