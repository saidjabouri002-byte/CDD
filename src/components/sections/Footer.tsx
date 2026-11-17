import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { links, logo } from "@/config/assets";
import { footer, nav } from "@/content/site";
import { Container } from "@/components/ui/primitives";

const linkClass = "inline-flex min-h-10 items-center gap-1.5 text-[0.95rem] text-ink-soft transition-colors hover:text-brand-deep";

export function Footer() {
  return (
    <footer className="pt-12 pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pt-16 md:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="190px" className="-ml-3 h-auto w-[190px]" />
            <p className="mt-3 text-[1.02rem] font-semibold text-ink">{footer.name}</p>
            <p className="mt-1 text-[0.9rem] text-ink-muted">{footer.tagline}</p>
          </div>

          <nav aria-label="Navigation de pied de page">
            <h2 className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink-muted uppercase">{footer.navTitle}</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 md:grid-cols-1">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink-muted uppercase">{footer.linksTitle}</h2>
            <ul className="mt-3">
              <li>
                <Link href="/#contact" className={linkClass}>
                  {footer.contact}
                </Link>
              </li>
              <li>
                <a href={links.officialSite} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {footer.officialSite}
                  <ArrowUpRight aria-hidden className="size-4 shrink-0" />
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a href={links.privacyPolicy} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {footer.privacy}
                  <ArrowUpRight aria-hidden className="size-4 shrink-0" />
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-[0.85rem] text-ink-muted">
          © {new Date().getFullYear()} {footer.name}
        </p>
      </Container>
    </footer>
  );
}
