"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import LighthouseGauge from "./LighthouseGauge";
import Magnetic from "./Magnetic";
import RevealLines from "./RevealLines";
import {
  buildWhatsappLink,
  LIGHTHOUSE_SCORES,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/constants";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Grid de blueprint no fundo — puramente decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-xs text-good"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-good" aria-hidden="true" />
            AUDITADO PELO GOOGLE LIGHTHOUSE
          </motion.p>

          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            <RevealLines
              fullText="Engenharia de software para imobiliárias que querem vender mais"
              baseDelay={0.1}
              lines={[
                "Engenharia de software para",
                <span key="highlight" className="text-good">
                  imobiliárias
                </span>,
                "que querem vender mais",
              ]}
            />
          </h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted">
            Trocamos sites lentos de CRM por uma estrutura própria em Next.js
            e Vercel: carregamento abaixo de 1,5s, conversão via WhatsApp e
            nota máxima nas quatro categorias do Lighthouse.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={buildWhatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar diagnóstico gratuito pelo WhatsApp"
                className="inline-flex items-center gap-2 rounded-full bg-good px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </Magnetic>
            <a
              href="#comparativo"
              aria-label="Ver comparativo de performance"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-good hover:text-good focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <PlayCircle size={16} aria-hidden="true" />
              Ver o comparativo
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted"
          >
            <div>
              <dt className="inline text-good">&lt; 1.5s</dt>{" "}
              <dd className="inline">de carregamento no 4G</dd>
            </div>
            <div>
              <dt className="inline text-good">5 dias úteis</dt>{" "}
              <dd className="inline">até o site no ar</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-line bg-panel p-8"
        >
          <h2 className="sr-only">Notas obtidas na auditoria Google Lighthouse</h2>
          <div className="grid grid-cols-2 gap-6">
            {LIGHTHOUSE_SCORES.map((cat, i) => (
              <LighthouseGauge
                key={cat.key}
                label={cat.label}
                score={cat.score}
                delay={0.25 + i * 0.1}
              />
            ))}
          </div>
          <p className="mt-6 text-center font-mono text-[11px] text-muted">
            Auditoria de referência do boilerplate Carminatti&apos;s
          </p>
        </motion.div>
      </div>
    </section>
  );
}
