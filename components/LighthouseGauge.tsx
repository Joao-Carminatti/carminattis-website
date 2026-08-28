"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type LighthouseGaugeProps = {
  label: string;
  score: number; // 0-100
  size?: number; // px
  delay?: number; // segundos, para stagger
  showCaption?: boolean;
};

// Semântica real de cor do Lighthouse: >=90 verde, >=50 âmbar, abaixo disso vermelho.
function scoreColor(score: number) {
  if (score >= 90) return "var(--color-good)";
  if (score >= 50) return "var(--color-warn)";
  return "var(--color-bad)";
}

export default function LighthouseGauge({
  label,
  score,
  size = 120,
  delay = 0,
  showCaption = true,
}: LighthouseGaugeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  const stroke = size * 0.09;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  // O valor final do stroke-dashoffset é pré-calculado (estático).
  // Só opacity/scale são animados — mantém a animação 100% em GPU.
  const offset = circumference - (score / 100) * circumference;
  const color = scoreColor(score);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const duration = 900;
    const start = performance.now() + delay * 1000;

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(progress * score));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, score, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        role="img"
        aria-label={`Nota ${label ? label + ": " : ""}${score} de 100 no Google Lighthouse`}
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
          aria-hidden="true"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center font-mono font-semibold text-fg"
          style={{ fontSize: size * 0.26 }}
          aria-hidden="true"
        >
          {display}
        </span>
      </div>
      {showCaption && label && (
        <span className="text-center text-sm font-medium text-muted">
          {label}
        </span>
      )}
    </motion.div>
  );
}
