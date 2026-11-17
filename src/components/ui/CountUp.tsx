"use client";

import { useEffect, useRef, useState } from "react";

const format = (n: number, plain?: boolean) => (plain ? String(n) : n.toLocaleString("fr-FR"));

/** Compteur animé au premier affichage ; valeur finale immédiate si l'utilisateur limite les animations. */
export function CountUp({ value, prefix = "", plain }: { value: number; prefix?: string; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || plain || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1400);
          setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setShown(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, plain]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {format(shown, plain)}
    </span>
  );
}
