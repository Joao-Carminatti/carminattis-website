"use client";

import { motion } from "framer-motion";
import { Smartphone, MessageCircle, Home, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Smartphone,
    title: "Conversão pensada para 4G e 5G",
    description:
      "A maior parte dos visitantes de imobiliária navega pelo celular. Cada página é construída para abrir rápido mesmo em conexão instável.",
  },
  {
    icon: MessageCircle,
    title: "Botão inteligente de WhatsApp",
    description:
      "Cada imóvel gera automaticamente uma mensagem pronta com o código, o título e o link, direto para o corretor responsável.",
  },
  {
    icon: Home,
    title: "Página de captação de proprietários",
    description:
      "A rota /anunciar recebe proprietários que querem anunciar um imóvel sem precisar ligar, reduzindo a fricção da captação.",
  },
  {
    icon: ShieldCheck,
    title: "Infraestrutura serverless na Vercel",
    description:
      "Sem servidor para administrar, sem plugin para atualizar. Deploy automático, HTTPS e escala automática em picos de acesso.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Features() {
  return (
    <section id="recursos" aria-labelledby="recursos-heading" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            id="recursos-heading"
            className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            Recursos construídos para vender imóvel, não só exibir
          </h2>
          <p className="mt-4 text-muted">
            Cada funcionalidade existe para resolver um gargalo real de
            captação ou conversão de imobiliárias pequenas e médias.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {FEATURES.map((feature) => (
            <motion.li
              key={feature.title}
              variants={item}
              className="rounded-2xl border border-line bg-panel p-7"
            >
              <feature.icon size={22} className="text-good" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-fg">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
