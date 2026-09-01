"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/portfolio";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Testimonials() {
  return (
    <section
      aria-labelledby="depoimentos-heading"
      className="border-t border-line bg-panel/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            id="depoimentos-heading"
            className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            O que dizem os clientes
          </h2>
          <p className="mt-4 text-muted">
            Depoimentos de quem já usa a estrutura no dia a dia da
            imobiliária.
          </p>
        </div>

        {TESTIMONIALS.length === 0 ? (
          <div className="mt-14 rounded-2xl border border-dashed border-line p-10 text-center">
            <p className="font-mono text-sm text-muted">
              Em breve: depoimentos de clientes que já usam a estrutura.
            </p>
          </div>
        ) : (
          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <motion.li
                key={`${t.author}-${i}`}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
                className="rounded-2xl border border-line bg-ink p-7"
              >
                <Quote size={20} className="text-good" aria-hidden="true" />
                <blockquote className="mt-4 text-sm text-fg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-4 font-mono text-xs text-muted">
                  {t.author} — {t.role}
                </p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
