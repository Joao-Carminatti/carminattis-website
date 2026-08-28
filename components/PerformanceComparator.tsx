"use client";

import { useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import LighthouseGauge from "./LighthouseGauge";

type PanelData = {
  score: number;
  headline: string;
  points: string[];
};

type Tab = {
  key: string;
  label: string;
  market: PanelData;
  ours: PanelData;
};

const TABS: Tab[] = [
  {
    key: "performance",
    label: "Performance",
    market: {
      score: 45,
      headline: "4,8s para carregar no 4G",
      points: [
        "CRM genérico com scripts de terceiros",
        "Imagens sem otimização",
        "Sem cache de borda (CDN)",
      ],
    },
    ours: {
      score: 100,
      headline: "1,2s para carregar no 4G",
      points: [
        "Código próprio em Next.js",
        "Imagens otimizadas automaticamente",
        "Edge Network da Vercel",
      ],
    },
  },
  {
    key: "seo",
    label: "SEO",
    market: {
      score: 61,
      headline: "Metadados incompletos",
      points: [
        "Títulos e descrições genéricas",
        "Sem dados estruturados",
        "HTML pouco semântico",
      ],
    },
    ours: {
      score: 100,
      headline: "Metadados completos por página",
      points: [
        "Open Graph e Schema.org configurados",
        "Hierarquia de H1–H3 correta",
        "Sitemap e robots.txt automáticos",
      ],
    },
  },
  {
    key: "estrutura",
    label: "Estrutura",
    market: {
      score: 52,
      headline: "Plugins acumulados ao longo dos anos",
      points: [
        "Servidor compartilhado",
        "Atualizações manuais e falhas",
        "Painel confuso para o corretor",
      ],
    },
    ours: {
      score: 100,
      headline: "Infraestrutura serverless",
      points: [
        "Deploy automático via Vercel",
        "Escala sozinha em pico de acesso",
        "Painel simples de imóveis",
      ],
    },
  },
];

export default function PerformanceComparator() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive((v) => (v + 1) % TABS.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((v) => (v - 1 + TABS.length) % TABS.length);
    }
  };

  return (
    <section
      id="comparativo"
      aria-labelledby="comparativo-heading"
      className="border-t border-line bg-panel/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="comparativo-heading"
            className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            O padrão do mercado contra a nossa estrutura
          </h2>
          <p className="mt-4 text-muted">
            Comparamos o site médio de CRM imobiliário com a estrutura própria
            que construímos em Next.js e Vercel, categoria por categoria.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Categorias comparadas"
          onKeyDown={handleKeyDown}
          className="mx-auto mt-12 flex w-fit gap-2 rounded-full border border-line bg-ink p-1.5"
        >
          {TABS.map((t, i) => (
            <button
              key={t.key}
              role="tab"
              id={`tab-${t.key}`}
              aria-selected={active === i}
              aria-controls={`panel-${t.key}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal ${
                active === i ? "bg-good text-ink" : "text-muted hover:text-fg"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.key}
            role="tabpanel"
            id={`panel-${tab.key}`}
            aria-labelledby={`tab-${tab.key}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <ComparisonPanel
              tone="bad"
              title="Padrão do mercado"
              categoryLabel={tab.label}
              data={tab.market}
            />
            <ComparisonPanel
              tone="good"
              title="Carminatti's Web Agency"
              categoryLabel={tab.label}
              data={tab.ours}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ComparisonPanel({
  tone,
  title,
  categoryLabel,
  data,
}: {
  tone: "good" | "bad";
  title: string;
  categoryLabel: string;
  data: PanelData;
}) {
  const accent = tone === "good" ? "border-good/40" : "border-bad/30";
  const Icon = tone === "good" ? Check : X;
  const iconColor = tone === "good" ? "text-good" : "text-bad";

  return (
    <div className={`rounded-2xl border ${accent} bg-ink p-8`}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-fg">{title}</h3>
        <LighthouseGauge
          label={`${title}, categoria ${categoryLabel}`}
          score={data.score}
          size={64}
          showCaption={false}
        />
      </div>
      <p className="mt-5 font-mono text-sm text-muted">{data.headline}</p>
      <ul className="mt-5 space-y-3">
        {data.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
            <Icon size={16} className={`mt-0.5 shrink-0 ${iconColor}`} aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
