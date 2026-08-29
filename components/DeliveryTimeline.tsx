"use client";

import { motion, type Variants } from "framer-motion";

const STEPS = [
  {
    day: "Dia 1",
    title: "Briefing e estrutura",
    description:
      "Levantamos os imóveis, a identidade da imobiliária e organizamos o mapa de páginas.",
  },
  {
    day: "Dia 2–3",
    title: "Design e desenvolvimento",
    description:
      "Construímos o site sobre o boilerplate já testado, com a marca da imobiliária aplicada.",
  },
  {
    day: "Dia 4",
    title: "Conteúdo e SEO",
    description:
      "Cadastramos os imóveis, revisamos textos e configuramos metadados de cada página.",
  },
  {
    day: "Dia 5",
    title: "Deploy e ativação",
    description:
      "Publicamos na Vercel, testamos em campo pelo celular e liberamos o acesso ao corretor.",
  },
];

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function DeliveryTimeline() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-heading"
      className="border-t border-line py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            id="processo-heading"
            className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            Do briefing ao site no ar em 5 dias úteis
          </h2>
          <p className="mt-4 text-muted">
            Um processo enxuto, sem burocracia, para a imobiliária sair do
            zero para um site funcionando.
          </p>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-5 hidden h-px bg-line md:block"
          />
          {STEPS.map((step, i) => (
            <motion.li
              key={step.day}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-good bg-ink font-mono text-sm font-semibold text-good"
              >
                {i + 1}
              </span>
              <p className="font-mono text-xs text-good">{step.day}</p>
              <h3 className="mt-1 font-display text-base font-semibold text-fg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
