"use client";

import { motion, MotionConfig } from "motion/react";

/** Respecte `prefers-reduced-motion` pour toutes les animations Motion de la page. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Décalage vertical initial en pixels. */
  y?: number;
};

/** Apparition douce au défilement (une seule fois). */
export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -70px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
