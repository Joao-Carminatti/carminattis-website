"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealLinesProps = {
  lines: ReactNode[];
  fullText: string; // texto puro, só pra leitor de tela
  baseDelay?: number;
  stagger?: number;
  className?: string;
};

/**
 * Cada linha entra com um efeito de "cortina": um wrapper com
 * overflow-hidden faz de máscara enquanto o texto sobe de baixo pra cima
 * (só transform, sem opacity). Para leitor de tela, a parte visual fica
 * aria-hidden e existe um span oculto com o texto corrido — assim quem usa
 * leitor de tela ouve uma frase só, sem repetição nem corte estranho.
 */
export default function RevealLines({
  lines,
  fullText,
  baseDelay = 0.1,
  stagger = 0.08,
  className = "",
}: RevealLinesProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{fullText}</span>;
  }

  return (
    <>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true" className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.7,
                delay: baseDelay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </span>
    </>
  );
}
