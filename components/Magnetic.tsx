"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  strength?: number; // deslocamento máximo, em px
};

/**
 * Envolve um botão/link e faz ele se deslocar sutilmente na direção do
 * cursor. Usa useMotionValue + useSpring (não setState) para não causar
 * re-render a cada movimento do mouse — a atualização acontece direto no
 * DOM via transform, então continua 100% em GPU.
 */
export default function Magnetic({ children, strength = 14 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  // Respeita prefers-reduced-motion: sem o efeito, botão normal.
  if (shouldReduceMotion) {
    return <span className="inline-block">{children}</span>;
  }

  function handleMouseMove(e: MouseEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}
