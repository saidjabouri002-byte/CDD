"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { logo } from "@/config/assets";
import { nav } from "@/content/site";
import { ButtonLink } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
      <div
        className={cn(
          "mx-auto max-w-[1240px] rounded-[26px] border bg-white/70 backdrop-blur-xl transition-[box-shadow,border-color,background-color] duration-300",
          scrolled || open ? "border-line bg-white/85 shadow-card" : "border-white/70",
        )}
      >
        <div className="flex h-[3.75rem] items-center justify-between gap-3 pr-2.5 pl-4 sm:pl-5">
          <Link href="/" className="flex shrink-0 items-center rounded-lg" aria-label="CDD Tanger — accueil">
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="140px" loading="eager" className="h-9 w-auto" />
            <span className="ml-1 hidden rounded-full bg-sky-100 px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-brand-deep uppercase min-[400px]:inline lg:hidden xl:inline">
              Tanger
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-white/80 p-1">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-full px-2.5 py-1.5 text-[0.86rem] font-medium whitespace-nowrap transition-colors xl:px-3.5 xl:text-[0.88rem]",
                      isActive(link.href) ? "bg-brand-deep text-white" : "text-ink-soft hover:bg-sky-100 hover:text-brand-deep",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={nav.cta.href} size="md" arrow={false} className="hidden whitespace-nowrap sm:inline-flex">
              {nav.cta.label}
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-sky-300 hover:text-brand-deep lg:hidden"
            >
              {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="menu-mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <nav aria-label="Navigation mobile" className="border-t border-line px-3 pt-2 pb-4">
                <ul>
                  {nav.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={cn(
                          "flex min-h-12 items-center rounded-2xl px-3 text-[1.02rem] font-medium transition-colors active:bg-sky-100",
                          isActive(link.href) ? "bg-sky-100 text-brand-deep" : "text-ink hover:bg-sky-50",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div onClick={() => setOpen(false)}>
                  <ButtonLink href={nav.cta.href} className="mt-3 w-full">
                    {nav.cta.label}
                  </ButtonLink>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
