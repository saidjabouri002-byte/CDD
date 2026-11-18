import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, ChevronRight, Globe2, MessageCircle, ShieldCheck } from "lucide-react";
import { links, logo } from "@/config/assets";
import { footer, nav } from "@/content/site";
import { ButtonLink, Container, Rays } from "@/components/ui/primitives";

const usefulLinks = [
  { label: footer.contact, href: "/#contact", icon: MessageCircle, external: false },
  { label: footer.officialSite, href: links.officialSite, icon: Globe2, external: true },
  { label: footer.privacy, href: links.privacyPolicy, icon: ShieldCheck, external: true },
] as const;

/** Icônes des réseaux sociaux (tracés SVG simples, 24×24). */
const socials = [
  {
    label: "Facebook",
    href: links.social.facebook,
    path: "M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63a20.9 20.9 0 0 0-2.27-.12c-2.25 0-3.79 1.37-3.79 3.89v2.17H7.92v2.94h2.54V21h3.04Z",
  },
  {
    label: "Instagram",
    href: links.social.instagram,
    path: "M12 7.38A4.62 4.62 0 1 0 12 16.62 4.62 4.62 0 0 0 12 7.38Zm0 7.62a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.88-7.8a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM21 8.29c-.06-1.4-.37-2.64-1.4-3.66-1.02-1.02-2.26-1.34-3.66-1.4-1.44-.08-5.76-.08-7.2 0-1.4.06-2.64.38-3.66 1.4C4.06 5.65 3.74 6.89 3.68 8.3c-.08 1.44-.08 5.76 0 7.2.06 1.4.38 2.64 1.4 3.66 1.02 1.02 2.26 1.34 3.66 1.4 1.44.08 5.76.08 7.2 0 1.4-.06 2.64-.38 3.66-1.4 1.02-1.02 1.34-2.26 1.4-3.66.08-1.44.08-5.76 0-7.2Zm-1.87 8.75a2.95 2.95 0 0 1-1.66 1.66c-1.15.46-3.88.35-5.15.35-1.27 0-4 .1-5.15-.35a2.95 2.95 0 0 1-1.66-1.66c-.46-1.15-.35-3.88-.35-5.15 0-1.27-.1-4 .35-5.15A2.95 2.95 0 0 1 6.17 5.4c1.15-.46 3.88-.35 5.15-.35 1.27 0 4-.1 5.15.35a2.95 2.95 0 0 1 1.66 1.66c.46 1.15.35 3.88.35 5.15 0 1.27.1 4-.35 5.15Z",
  },
  {
    label: "LinkedIn",
    href: links.social.linkedin,
    path: "M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 13.4c0-3.1-.67-5.16-4.06-5.16-1.63 0-2.72.9-3.17 1.75h-.05V8.5H9.92V20h3.37v-5.69c0-1.5.29-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.04V20h3.38l-.23-6.6Z",
  },
] as const;

const headingClass = "flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] text-brand-deep uppercase";

export function Footer() {
  return (
    <footer className="px-2 pt-6 pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:px-4 md:pb-4">
      <div className="relative isolate overflow-hidden rounded-[32px] border border-sky-200 bg-[linear-gradient(180deg,var(--sky-50)_0%,#ffffff_70%)] pt-12 pb-6 sm:rounded-[44px] sm:pt-16">
        {/* Décor discret : grille fine et symbole du Club en filigrane */}
        <div aria-hidden className="line-grid absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(180deg,black,transparent_70%)]" />
        <Rays className="absolute -top-24 -right-24 -z-10 size-[380px] text-sky-100" />

        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-14">
            {/* Identité du Club */}
            <div>
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="200px" className="-ml-3 h-auto w-[200px]" />
              <p className="mt-4 max-w-[440px] text-[0.98rem] leading-[1.7] text-ink-soft">{footer.about}</p>
              {/* Réseaux sociaux officiels */}
              <ul className="mt-5 flex items-center gap-2.5" aria-label="Réseaux sociaux du Club des Dirigeants">
                {socials.map(({ label, href, path }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (nouvel onglet)`}
                      className="grid size-11 place-items-center rounded-xl border border-sky-200 bg-white text-brand-deep shadow-[0_1px_2px_rgba(11,23,48,0.05)] transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-brand-deep hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden className="size-[1.15rem]" fill="currentColor">
                        <path d={path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonLink href={nav.cta.href} size="md">
                  {nav.cta.label}
                </ButtonLink>
              </div>
            </div>

            {/* Navigation : liens en deux colonnes, flèche qui glisse au survol */}
            <nav aria-label="Navigation de pied de page">
              <h2 className={headingClass}>
                <span aria-hidden className="h-px w-5 bg-brand" />
                {footer.navTitle}
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex min-h-11 items-center justify-between gap-2 rounded-xl border border-transparent px-3 text-[0.95rem] font-medium text-ink-soft transition-[background-color,border-color,color] duration-200 hover:border-sky-200 hover:bg-white hover:text-brand-deep"
                    >
                      {link.label}
                      <ChevronRight
                        aria-hidden
                        className="size-4 shrink-0 -translate-x-1 text-sky-300 opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Liens utiles avec icônes */}
            <div>
              <h2 className={headingClass}>
                <span aria-hidden className="h-px w-5 bg-brand" />
                {footer.linksTitle}
              </h2>
              <ul className="mt-4 grid gap-2">
                {usefulLinks.map(({ label, href, icon: Icon, external }) => {
                  const content = (
                    <>
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-sky-200 bg-white text-brand-deep transition-colors duration-200 group-hover:border-transparent group-hover:bg-brand-deep group-hover:text-white">
                        <Icon aria-hidden className="size-[1.05rem]" strokeWidth={1.9} />
                      </span>
                      <span className="flex-1">{label}</span>
                      {external && <ArrowUpRight aria-hidden className="size-4 shrink-0 text-sky-300 transition-colors group-hover:text-brand-deep" />}
                    </>
                  );
                  const className =
                    "group flex min-h-12 items-center gap-3 rounded-xl px-2 text-[0.95rem] font-medium text-ink-soft transition-colors duration-200 hover:bg-white hover:text-brand-deep";
                  return (
                    <li key={label}>
                      {external ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                          {content}
                          <span className="sr-only"> (nouvel onglet)</span>
                        </a>
                      ) : (
                        <Link href={href} className={className}>
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Barre du bas */}
          <div className="mt-12 flex flex-col gap-4 border-t border-sky-200 pt-6 text-[0.85rem] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {footer.name}
            </p>
            <a
              href="#contenu"
              className="group inline-flex min-h-10 items-center gap-2 self-start rounded-xl border border-sky-200 bg-white px-3.5 font-medium text-brand-deep transition-colors hover:border-sky-300 sm:self-auto"
            >
              Haut de page
              <ArrowUp aria-hidden className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
