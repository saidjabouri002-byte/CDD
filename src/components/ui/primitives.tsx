import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { titleKeywords } from "@/content/highlights";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>{children}</div>;
}

export type Tone = "light" | "dark";

export function Eyebrow({ children, className, tone = "light" }: { children: React.ReactNode; className?: string; tone?: Tone }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase backdrop-blur",
        tone === "dark"
          ? "border-white/15 bg-white/[0.06] text-glow"
          : "border-sky-200 bg-white/80 text-brand-deep shadow-[0_1px_2px_rgba(10,60,140,0.06)]",
        className,
      )}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full", tone === "dark" ? "bg-glow shadow-[0_0_10px_var(--glow)]" : "bg-brand")} />
      {children}
    </p>
  );
}

type HeadingProps = {
  eyebrow?: string;
  /** Une ou deux lignes ; la seconde est affichée dans un ton plus doux. */
  title: string | readonly string[];
  intro?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
};

/**
 * Taille des grands titres, adaptée à leur longueur pour qu'ils tiennent en 2 ou 3 lignes
 * (jamais 4) sur mobile comme sur ordinateur.
 */
const titleLength = (title: string | readonly string[]) => (typeof title === "string" ? [title] : title).join(" ").length;

export function headingClass(title: string | readonly string[]) {
  const length = titleLength(title);
  return cn(
    "leading-[1.16] font-semibold tracking-[-0.028em] text-ink",
    length > 100
      ? // Titres très longs : taille proportionnelle à l'écran sur téléphone pour rester sur 3 lignes.
        "text-[clamp(0.95rem,4.55vw,1.4rem)] tracking-[-0.032em] max-[359px]:text-[0.9rem] sm:text-[1.9rem] sm:tracking-[-0.028em] lg:text-[2.3rem]"
      : length > 75
        ? "text-[1.12rem] min-[360px]:text-[1.28rem] min-[400px]:text-[1.42rem] sm:text-[1.9rem] lg:text-[2.3rem]"
        : length > 52
          ? "text-[1.22rem] min-[360px]:text-[1.4rem] min-[400px]:text-[1.55rem] sm:text-[2.05rem] lg:text-[2.5rem]"
          : "text-[1.38rem] min-[360px]:text-[1.6rem] min-[400px]:text-[1.75rem] sm:text-[2.25rem] lg:text-[2.7rem]",
  );
}

/** Met le mot-clé d'un titre en dégradé bleu (voir content/highlights.ts). */
export function Highlight({ text, tone = "light" }: { text: string; tone?: Tone }) {
  // Recherche insensible aux majuscules : les titres peuvent changer de casse sans casser la mise en valeur.
  const lower = text.toLowerCase();
  const entry = Object.entries(titleKeywords).find(([title]) => title.toLowerCase() === lower);
  const index = entry ? lower.indexOf(entry[1].toLowerCase()) : -1;
  if (!entry || index < 0) return <>{text}</>;
  const keyword = text.slice(index, index + entry[1].length);
  return (
    <>
      {text.slice(0, index)}
      <span
        className={cn(
          "bg-clip-text text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone]",
          tone === "dark"
            ? "bg-[linear-gradient(95deg,#ffffff,var(--glow))]"
            : "bg-[linear-gradient(95deg,var(--brand-deep),var(--brand)_55%,#35a4ff)]",
        )}
      >
        {keyword}
      </span>
      {text.slice(index + keyword.length)}
    </>
  );
}

/**
 * Titre sur une ou deux phrases : la seconde est affichée dans un ton plus doux.
 * Les titres courts gardent une phrase par ligne ; les titres longs s'enchaînent sur mobile
 * pour rester sur 3 lignes au plus.
 */
export function HeadingLines({ title, tone = "light" }: { title: string | readonly string[]; tone?: Tone }) {
  const lines = typeof title === "string" ? [title] : title;
  const block = lines.length > 1 && (titleLength(title) > 75 ? "sm:block" : "block");
  return (
    <>
      {lines.map((line, i) => (
        <span key={line} className={cn(block, i > 0 && (tone === "dark" ? "text-white/55" : "text-ink-muted"))}>
          <Highlight text={line} tone={tone} />{" "}
        </span>
      ))}
    </>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "center", id, className, tone = "light" }: HeadingProps & { tone?: Tone }) {
  return (
    <div className={cn("max-w-[1040px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={cn("mt-5", headingClass(title), tone === "dark" && "text-white")}>
        <HeadingLines title={title} tone={tone} />
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-3xl text-[1.02rem] leading-[1.7] sm:text-[1.1rem]",
            tone === "dark" ? "text-white/70" : "text-ink-soft",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-xl text-center font-semibold tracking-[-0.005em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 active:scale-[0.98]";
const buttonVariants = {
  primary:
    "bg-[linear-gradient(180deg,var(--brand-strong),var(--brand-deep))] text-white shadow-cta hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.28)_inset,0_16px_32px_-10px_rgba(4,80,216,0.65)]",
  secondary:
    "border border-line-strong bg-white text-ink shadow-[0_1px_2px_rgba(11,23,48,0.05)] hover:-translate-y-0.5 hover:border-sky-300 hover:text-brand-deep",
  light: "bg-white text-brand-deep shadow-float hover:-translate-y-0.5",
};
const buttonSizes = { md: "min-h-11 px-5 text-[0.92rem]", lg: "min-h-[3.25rem] px-7 text-[1rem]" };

export function buttonClass(variant: keyof typeof buttonVariants = "primary", size: keyof typeof buttonSizes = "lg") {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size]);
}

export function ButtonLink({ href, children, variant = "primary", size = "lg", arrow = true, className, external }: ButtonLinkProps) {
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight aria-hidden className="size-[1.05em] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );
  const classes = cn(buttonClass(variant, size), className);
  if (href.startsWith("/") && !external) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  );
}

/** Motif « rayons » décoratif, écho discret au symbole du logo CDD. */
export function Rays({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} fill="currentColor">
      {Array.from({ length: 18 }, (_, i) => (
        <rect key={i} x="96" y="6" width="8" height={i % 2 ? 70 : 84} rx="1.5" transform={`rotate(${i * 20} 100 100)`} />
      ))}
      <circle cx="100" cy="100" r="34" />
    </svg>
  );
}
